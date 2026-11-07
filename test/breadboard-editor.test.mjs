import assert from 'node:assert/strict';
import { test } from 'node:test';

import { normalizeBreadboardConfig } from '../src/catalog/families/catalog-breadboard.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { componentForPart } from '../src/model/part-component.js';
import { newProject } from '../src/model/project.js';
import { ProjectHistory } from '../src/model/history.js';

function workspace(contact = 'a1') {
  const breadboard = normalizeBreadboardConfig({ rows: 5 });
  const messages = [];
  const history = new ProjectHistory({
    ...newProject(),
    parts: [
      { id: 'board', componentId: 'breadboard', breadboard, x: 10, y: 20 },
      { id: 'resistor', componentId: 'resistor', x: 450, y: 60 },
    ],
    wires: [{
      id: 'signal', from: { partId: 'board', pinId: contact },
      to: { partId: 'resistor', pinId: '1' }, color: '#2c83d9',
    }],
  });
  const editor = new DiagramEditor(history, () => {}, message => messages.push(message));
  return { editor, history, messages };
}

test('breadboard layout edits retain surviving wires and form one undoable operation', () => {
  const { editor, history } = workspace();
  const original = editor.project;
  const config = { ...editor.part.breadboard, rows: 8, topRails: 2, bottomRails: 2, splitRails: true };
  assert.equal(editor.configurePart(config), true);
  const changed = editor.project;
  assert.deepEqual(editor.part.breadboard, config);
  assert.equal(changed.wires, original.wires);
  assert.ok(componentForPart(editor.part).pins.some(pin => pin.id === 'bottom-2-10'));
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  editor.step('redo');
  assert.equal(editor.project, changed);
  assert.equal(editor.configurePart(config), false);
  assert.equal(editor.project, changed);
});

test('removing connected terminal rows or rails is rejected without changing project history', () => {
  for (const [contact, settings] of [
    ['a5', { rows: 2 }],
    ['left-2-1', { leftRails: 1 }],
  ]) {
    const { editor, history, messages } = workspace(contact);
    const original = editor.project;
    assert.equal(editor.configurePart({ ...editor.part.breadboard, ...settings }), false);
    assert.equal(editor.project, original);
    assert.equal(history.canUndo, false);
    assert.match(messages.at(-1), /Disconnect their wires/);
  }
  const { editor, history, messages } = workspace();
  assert.equal(editor.configurePart({ rows: 0 }), false);
  assert.equal(history.canUndo, false);
  assert.match(messages.at(-1), /integer/);
});

test('quarter-turn choices preserve wire identities and reject invalid or duplicate orientations', () => {
  const { editor, history } = workspace();
  const original = editor.project;
  for (const angle of [90, 180, 270, 0]) {
    assert.equal(editor.rotatePart(angle), true);
    assert.equal(editor.part.rotation, angle);
    assert.equal(editor.project.wires, original.wires);
  }
  const rotated = editor.project;
  for (const angle of [0, -90, 45, 360, '90']) {
    assert.equal(editor.rotatePart(angle), false);
    assert.equal(editor.project, rotated);
  }
  editor.step('undo');
  assert.equal(editor.part.rotation, 270);
  editor.step('redo');
  assert.equal(editor.project, rotated);
  assert.equal(history.canRedo, false);
  assert.equal(editor.rotatePart(), true);
  assert.equal(editor.part.rotation, 90);
});

test('adding a breadboard stores its default layout in the saved part', () => {
  const history = new ProjectHistory(newProject());
  const editor = new DiagramEditor(history, () => {}, () => {});
  const part = editor.addPart('breadboard', { x: 0, y: 0 });
  assert.deepEqual(part.breadboard, normalizeBreadboardConfig());
  assert.deepEqual(editor.part.breadboard, normalizeBreadboardConfig());
});
