import { projectSnapshot } from "./project.js";

const HISTORY_LIMIT = 80;

export class ProjectHistory {
  #project;
  #undo = [];
  #redo = [];

  constructor(project) {
    this.#project = projectSnapshot(project);
  }

  get project() {
    return this.#project;
  }

  get canUndo() {
    return this.#undo.length > 0;
  }

  get canRedo() {
    return this.#redo.length > 0;
  }

  commit(next) {
    const project = projectSnapshot(next);
    if (project === this.#project) return project;
    this.#undo.push(this.#project);
    if (this.#undo.length > HISTORY_LIMIT) this.#undo.shift();
    this.#redo.length = 0;
    this.#project = project;
    return project;
  }

  undo() {
    return this.#move(this.#undo, this.#redo);
  }

  redo() {
    return this.#move(this.#redo, this.#undo);
  }

  #move(from, to) {
    if (!from.length) return null;
    to.push(this.#project);
    this.#project = from.pop();
    return this.#project;
  }

  replace(next) {
    const project = projectSnapshot(next);
    this.#undo.length = 0;
    this.#redo.length = 0;
    this.#project = project;
    return project;
  }
}
