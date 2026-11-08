import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createCommands } from '../src/app/commands.js';
import { componentById } from '../src/catalog/index.js';
import { insertionPoint } from '../src/editor/placement.js';

function workspace() {
  const calls = { preview: [], add: [], overlay: [], fit: 0 };
  const part = { id: 'part', componentId: 'resistor', x: 10.25, y: 20.5, scale: { x: .5, y: 2 } };
  const project = { version: 2, title: 'Existing drawing', parts: [], wires: [] };
  const preview = { project: { ...project, parts: [part] }, part, fit: null };
  const editor = { project, hasDrawing: true,
    insertionPoint,
    previewPart(...args) { calls.preview.push(args); return preview; },
    addPart(...args) { calls.add.push(args); return part; },
  };
  const canvas = {
    point: (x, y) => ({ x: x / 2, y: y / 2 }),
    suggestPartPosition: () => ({ x: 44, y: 55 }),
    showPlacementPreview(value) { calls.overlay.push(value); },
    fit() { calls.fit++; },
  };
  const controls = { gesturing: false };
  const commands = createCommands({ editor, canvas, controls, svg: { getBoundingClientRect: () => ({ left: 0, top: 0, right: 2000, bottom: 2000 }) } });
  return { commands, calls, editor, controls, preview };
}

test('library drag preview uses canvas coordinates and never creates a project history entry', () => {
  const { commands, calls, editor, preview } = workspace();
  const project = editor.project;
  const component = componentById.get('resistor');
  assert.equal(commands.previewPart('resistor', { clientX: 300, clientY: 200 }), preview);
  assert.deepEqual(calls.preview, [['resistor', { x: 150 - component.width / 2, y: 100 - component.height / 2 }]]);
  assert.deepEqual(calls.overlay.at(-1), { ...preview, ghost: true });
  assert.equal(calls.add.length, 0);
  assert.equal(editor.project, project);
  commands.clearPlacementPreview();
  assert.equal(calls.overlay.at(-1), undefined);
});

test('library drag centers the reviewed physical view through the editor placement API', () => {
  const { commands, calls, editor } = workspace();
  editor.insertionPoint = (id, center) => {
    assert.equal(id, 'adafruit-module-5832');
    assert.deepEqual(center, { x: 150, y: 100 });
    return { x: -29, y: -25.6 };
  };
  commands.previewPart('adafruit-module-5832', { clientX: 300, clientY: 200 });
  assert.deepEqual(calls.preview[0], ['adafruit-module-5832', { x: -29, y: -25.6 }]);
  commands.addPart('adafruit-module-5832', { clientX: 300, clientY: 200 });
  assert.deepEqual(calls.add[0][1], { x: -29, y: -25.6 });
});

test('library drop commits once with mounting enabled while a normal click keeps ordinary placement', () => {
  const { commands, calls } = workspace();
  assert.equal(commands.addPart('resistor', { clientX: 300, clientY: 200 }), true);
  assert.equal(calls.add.length, 1);
  assert.deepEqual(calls.add[0][2], { mount: true });
  assert.equal(calls.overlay.at(-1), undefined);
  assert.equal(commands.addPart('resistor'), true);
  assert.equal(calls.add.length, 2);
  assert.deepEqual(calls.add[1], ['resistor', { x: 44, y: 55 }, { mount: false }]);
});

test('an active pointer gesture suppresses both library preview and placement', () => {
  const { commands, calls, controls } = workspace();
  controls.gesturing = true;
  assert.equal(commands.previewPart('resistor', { clientX: 0, clientY: 0 }), undefined);
  assert.equal(commands.addPart('resistor', { clientX: 0, clientY: 0 }), false);
  assert.equal(calls.preview.length, 0);
  assert.equal(calls.add.length, 0);
  assert.equal(calls.overlay.at(-1), undefined);
});

test('clicking an insertable part on a selected or sole breadboard searches a real free placement', () => {
  const { commands, calls, editor } = workspace();
  const host = { id: 'breadboard', componentId: 'breadboard', x: 0, y: 0 };
  editor.project.parts = [host];
  editor.part = host;
  editor.suggestPlacement = (id, hostId) => {
    assert.equal(id, 'resistor'); assert.equal(hostId, host.id);
    return { x: 100.25, y: 200.5, rotation: 90 };
  };
  assert.equal(commands.addPart('resistor'), true);
  assert.deepEqual(calls.add.at(-1), ['resistor', { x: 100.25, y: 200.5, rotation: 90 }, { mount: true, hostPartId: host.id }]);
  editor.part = undefined;
  assert.equal(commands.addPart('resistor'), true, 'A single host remains discoverable without a special selection');
});

test('a full selected breadboard reports no room without adding an unattached overlapping part', () => {
  const { calls, editor, controls } = workspace();
  const host = { id: 'breadboard', componentId: 'breadboard', x: 0, y: 0 };
  editor.project.parts = [host]; editor.part = host; editor.suggestPlacement = () => null;
  const notices = [];
  const commands = createCommands({ editor, canvas: {}, controls, notify: message => notices.push(message) });
  assert.equal(commands.addPart('resistor'), false);
  assert.equal(calls.add.length, 0);
  assert.match(notices[0], /No free placement/);
});
