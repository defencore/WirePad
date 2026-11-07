import { parseProject, projectSnapshot, serializeProject } from '../model/project.js';

const STORAGE_KEY = 'wirepad.project';
const RECOVERY_KEY = 'wirepad.project.recovery';

class StorageError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'StorageError';
    this.code = code;
  }
}

export class ProjectStorage {
  #storage;
  #expected;
  #pendingRecovery = null;
  project = null;
  recovery = null;
  status = 'empty';
  message = '';

  constructor(storage) {
    this.#storage = storage;
    try {
      this.#storage ??= globalThis.localStorage;
      this.#expected = this.#storage.getItem(STORAGE_KEY);
      this.recovery = this.#storage.getItem(RECOVERY_KEY);
      if (this.#expected === null) return;
      try {
        this.project = projectSnapshot(parseProject(this.#expected));
        this.status = 'saved';
      } catch {
        this.recovery = this.#expected;
        this.#pendingRecovery = this.#expected;
        this.status = 'invalid';
        this.message = 'The saved project could not be opened. Download its recovery data before starting another workspace.';
      }
    } catch {
      this.status = 'unavailable';
      this.message = 'Browser storage is unavailable. Save project files to keep your work.';
    }
  }

  check() {
    try {
      this.#storage ??= globalThis.localStorage;
      const current = this.#storage.getItem(STORAGE_KEY);
      if (current !== this.#expected && !(this.#expected === undefined && current === null)) {
        this.status = 'conflict';
        this.message = 'Another tab saved a different project. Save your current project file before reloading this page.';
      } else if (this.status === 'conflict') {
        this.status = this.#pendingRecovery !== null ? 'invalid' : this.project ? 'saved' : 'empty';
        this.message = this.status === 'invalid'
          ? 'The saved project could not be opened. Download its recovery data before starting another workspace.' : '';
      }
    } catch {
      this.status = 'unavailable';
      this.message = 'Browser storage is unavailable. Save project files to keep your work.';
    }
    return this.status;
  }

  save(project) {
    const snapshot = projectSnapshot(project);
    const encoded = serializeProject(snapshot).trimEnd();
    try {
      this.#storage ??= globalThis.localStorage;
      const current = this.#storage.getItem(STORAGE_KEY);
      if (current !== encoded && current !== this.#expected && !(this.#expected === undefined && current === null)) {
        this.status = 'conflict';
        this.message = 'Another tab saved a different project. Save your current project file before reloading this page.';
        throw new StorageError(this.status, this.message);
      }
      if (this.#pendingRecovery !== null) {
        // Keep the original data before replacing an unreadable saved workspace.
        this.#storage.setItem(RECOVERY_KEY, this.#pendingRecovery);
      }
      if (current !== encoded) this.#storage.setItem(STORAGE_KEY, encoded);
      this.#expected = encoded;
      this.#pendingRecovery = null;
      this.project = snapshot;
      this.status = 'saved';
      this.message = '';
    } catch (error) {
      if (error instanceof StorageError) throw error;
      this.status = error?.name === 'QuotaExceededError' ? 'failed' : 'unavailable';
      this.message = this.status === 'failed'
        ? 'Browser storage is full. Save your current project file to keep your changes.'
        : 'Browser storage is unavailable. Save your current project file to keep your changes.';
      throw new StorageError(this.status, this.message);
    }
  }
}
