import assert from 'node:assert/strict';
import { test } from 'node:test';

import { newProject, serializeProject } from '../src/model/project.js';
import { ProjectStorage } from '../src/app/project-storage.js';

const primary = 'wirepad.project';
const recovery = 'wirepad.project.recovery';

function memoryStorage(entries = []) {
  const values = new Map(entries);
  return {
    values,
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };
}

test('unreadable saved data is kept as recovery before a new workspace is stored', () => {
  const text = '{ broken saved project';
  const memory = memoryStorage([[primary, text]]);
  const storage = new ProjectStorage(memory);
  assert.equal(storage.status, 'invalid');
  assert.equal(storage.project, null);
  assert.equal(storage.recovery, text);
  assert.equal(memory.getItem(primary), text);

  storage.save(newProject('New workspace'));
  assert.equal(storage.status, 'saved');
  assert.equal(memory.getItem(recovery), text);
  assert.equal(JSON.parse(memory.getItem(primary)).title, 'New workspace');
  const reopened = new ProjectStorage(memory);
  assert.equal(reopened.project.title, 'New workspace');
  assert.equal(reopened.recovery, text);
});

test('a failed recovery backup keeps the unreadable primary and current work intact', () => {
  const text = '{ original';
  const memory = memoryStorage([[primary, text]]);
  memory.setItem = () => { throw new DOMException('Storage full', 'QuotaExceededError'); };
  const storage = new ProjectStorage(memory);
  assert.throws(() => storage.save(newProject('Unsaved work')), error => error.code === 'failed');
  assert.equal(memory.getItem(primary), text);
  assert.equal(storage.recovery, text);
  assert.equal(storage.project, null);
});

test('a failed primary write can retry after preserving the original recovery data', () => {
  const text = '{ interrupted workspace';
  const memory = memoryStorage([[primary, text]]);
  const write = memory.setItem;
  memory.setItem = (key, value) => {
    if (key === primary) throw new DOMException('Storage full', 'QuotaExceededError');
    write(key, value);
  };
  const storage = new ProjectStorage(memory);
  const edited = newProject('Retry this workspace');
  assert.throws(() => storage.save(edited), error => error.code === 'failed');
  assert.equal(memory.getItem(primary), text);
  assert.equal(memory.getItem(recovery), text);

  memory.setItem = write;
  storage.save(edited);
  assert.equal(storage.status, 'saved');
  assert.equal(JSON.parse(memory.getItem(primary)).title, edited.title);
  assert.equal(memory.getItem(recovery), text);
});

test('a changed workspace in another tab is protected and identical saves succeed', () => {
  const original = newProject('Original');
  const memory = memoryStorage([[primary, serializeProject(original).trimEnd()]]);
  const storage = new ProjectStorage(memory);
  const external = serializeProject(newProject('Other tab')).trimEnd();
  memory.setItem(primary, external);
  assert.equal(storage.check(), 'conflict');
  assert.throws(() => storage.save(newProject('My edits')), error => error.code === 'conflict');
  assert.equal(memory.getItem(primary), external);
  assert.equal(storage.project.title, 'Original');

  memory.setItem(primary, serializeProject(original).trimEnd());
  assert.equal(storage.check(), 'saved');
  memory.setItem(primary, external);
  assert.equal(storage.check(), 'conflict');

  storage.save(newProject('Other tab'));
  assert.equal(storage.status, 'saved');
  assert.equal(storage.project.title, 'Other tab');
});

test('storage access failure is distinguishable from an empty workspace', () => {
  const empty = new ProjectStorage(memoryStorage());
  assert.equal(empty.status, 'empty');
  const blocked = new ProjectStorage({ getItem() { throw new DOMException('Blocked', 'SecurityError'); } });
  assert.equal(blocked.status, 'unavailable');
  assert.throws(() => blocked.save(newProject()), error => error.code === 'unavailable');
});
