import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, configurationFor, mountingFor } from '../src/catalog/index.js';
import { breadboardColumnId, createBreadboard, normalizeBreadboardConfig } from '../src/catalog/families/catalog-breadboard.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { partBodiesOverlap, pointFromPart, pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { attachmentError, mountingHoles, mountingScale, mountingTolerance, MOUNTING_EPSILON } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';
import { traceNet } from '../src/model/continuity.js';

const key = ({ x, y }) => `${x.toFixed(6)},${y.toFixed(6)}`;
const near = (a, b) => assert.ok(Math.abs(a - b) <= 1e-4, `${a} != ${b}`);
const group = hole => hole.conductor ?? hole.group;

function editorFor(parts) {
  const notices = [], history = new ProjectHistory({ ...newProject('Resize assembly'), parts });
  const editor = new DiagramEditor(history, () => {}, message => notices.push(message));
  return { editor, history, notices };
}

function host(settings = {}, rotation = 0) {
  return { id: 'bb', componentId: 'breadboard', x: 21.125, y: -36.875, rotation, breadboard: settings };
}

function rigidPart(board, componentId, id, anchor, rotation = board.rotation ?? 0) {
  const component = componentById.get(componentId), hostComponent = componentForPart(board), profile = mountingFor(componentId);
  const part = { id, componentId, x: 0, y: 0, rotation, scale: mountingScale(component, hostComponent) };
  const first = pointOnPart(part, pinById(component, profile.contacts[0].pinId));
  const target = pointOnPart(board, pinById(hostComponent, anchor));
  part.x = target.x - first.x; part.y = target.y - first.y;
  const holes = new Map(mountingHoles(hostComponent, profile).map(hole => [key(pointOnPart(board, hole)), hole]));
  part.attachment = { hostPartId: board.id, contacts: profile.contacts.map(({ pinId }) => {
    const hole = holes.get(key(pointOnPart(part, pinById(component, pinId))));
    assert.ok(hole, `${id}/${pinId} must start in a real hole`);
    return { pinId, hostPinId: hole.pinId };
  }) };
  return part;
}

function formedPart(board, ids = ['right-1-15', 'right-2-15']) {
  const component = componentById.get('resistor'), profile = mountingFor(component.id), hostComponent = componentForPart(board);
  const points = ids.map(id => pointOnPart(board, pinById(hostComponent, id)));
  const scale = mountingScale(component, hostComponent);
  const part = { id: 'resistor', componentId: component.id, scale, rotation: board.rotation ?? 0,
    x: (points[0].x + points[1].x) / 2 - component.width * scale.x / 2,
    y: (points[0].y + points[1].y) / 2 - component.height * scale.y / 2 };
  part.leads = profile.contacts.map(({ pinId }, index) => ({ pinId, ...pointFromPart(part, points[index]) }));
  part.attachment = { hostPartId: board.id, contacts: profile.contacts.map(({ pinId }, index) => ({ pinId, hostPinId: ids[index] })) };
  return part;
}

function conductorMap(project, part) {
  const board = project.parts.find(item => item.id === part.attachment.hostPartId);
  const holes = new Map(mountingHoles(componentForPart(board), mountingFor(part.componentId)).map(hole => [hole.pinId, hole]));
  return new Map(part.attachment.contacts.map(contact => [contact.pinId, group(holes.get(contact.hostPinId))]));
}

test('terminal banks grow to fifty cells with stable old names and unique multi-letter identities', () => {
  assert.deepEqual(configurationFor('breadboard').limits, {
    rows: { min: 1, max: 100 }, cells: { min: 1, max: 50 }, rails: { min: 0, max: 4 },
  });
  assert.deepEqual(Array.from({ length: 10 }, (_, index) => breadboardColumnId(0, index)), [...'abcdeklmno']);
  assert.deepEqual(Array.from({ length: 10 }, (_, index) => breadboardColumnId(1, index)), [...'fghijpqrst']);
  assert.equal(breadboardColumnId(0, 10), 'u');
  assert.equal(breadboardColumnId(1, 10), 'z');
  assert.equal(breadboardColumnId(1, 11), 'aa');
  const columns = [0, 1].flatMap(bank => Array.from({ length: 50 }, (_, cell) => breadboardColumnId(bank, cell)));
  assert.equal(new Set(columns).size, 100);
  const board = createBreadboard({ rows: 100, leftCells: 50, rightCells: 50,
    topRails: 4, bottomRails: 4, leftRails: 4, rightRails: 4, splitRails: true });
  assert.equal(board.pins.length, 11600);
  assert.equal(new Set(board.pins.map(pin => pin.id)).size, board.pins.length);
  assert.equal(new Set(board.pins.map(pin => pin.number)).size, board.pins.length);
  assert.equal(new Set(board.pins.map(pin => `${pin.x},${pin.y}`)).size, board.pins.length);
  assert.equal(pinById(board, 'aa2').number, 'AA2');
  assert.equal(board.internalConnections.find(ids => ids.includes('aa2'))[0], 'f2');
  for (const value of [0, 51, 1.5, '50', NaN, Infinity]) assert.throws(() => normalizeBreadboardConfig({ leftCells: value }), RangeError);
});

test('existing column IDs keep their coordinates while additional cells stay on the same conductors', () => {
  const ten = createBreadboard({ rows: 2, leftCells: 10, rightCells: 10 });
  const fifty = createBreadboard({ rows: 2, leftCells: 50, rightCells: 10 });
  for (const pin of ten.pins.filter(pin => /^(?:[a-e]|[k-o])\d+$/.test(pin.id))) {
    const next = pinById(fifty, pin.id);
    assert.equal(next.id, pin.id); assert.equal(next.number, pin.number);
    assert.equal(next.x, pin.x); assert.equal(next.y, pin.y);
  }
  const first = pinById(fifty, 'f1'), lastLeft = pinById(fifty, `${breadboardColumnId(0, 49)}1`);
  assert.equal(first.x - lastLeft.x, 48);
});

test('rigid mounted boards reflow on enlarged banks in one reversible transaction at every host angle', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const board = host({}, rotation), nano = rigidPart(board, 'arduino-nano', 'nano', 'c5');
    const { editor, history } = editorFor([board, nano]), original = editor.project;
    const before = conductorMap(original, original.parts[1]);
    editor.select('part', board.id);
    assert.equal(editor.configurePart({ leftCells: 50, rightCells: 50, rows: 45 }), true);
    const current = editor.project, changed = current.parts[1];
    assert.equal(changed.id, nano.id);
    assert.deepEqual(changed.scale, nano.scale);
    assert.equal(changed.rotation, nano.rotation);
    assert.deepEqual(conductorMap(current, changed), before);
    assert.equal(attachmentError(current, changed), null);
    const hostComponent = componentForPart(current.parts[0]), component = componentForPart(changed);
    for (const contact of changed.attachment.contacts) {
      const lead = pointOnPart(changed, pinById(component, contact.pinId));
      const hole = pointOnPart(current.parts[0], pinById(hostComponent, contact.hostPinId));
      near(lead.x, hole.x); near(lead.y, hole.y);
    }
    assert.deepEqual(parseProject(serializeProject(current)), current);
    assert.equal(history.canUndo, true);
    editor.step('undo'); assert.equal(editor.project, original);
    assert.equal(history.canUndo, false);
    editor.step('redo'); assert.equal(editor.project, current);
  }
});

test('all mounted parts are checked at their final poses rather than against their neighbors old positions', () => {
  const board = host({ rows: 40, leftCells: 5, rightCells: 50 });
  const nano = rigidPart(board, 'arduino-nano', 'nano', 'c5');
  const header = rigidPart(board, 'pin-header-4', 'header', `${breadboardColumnId(1, 40)}10`, 90);
  const { editor } = editorFor([board, nano, header]);
  editor.select('part', board.id);
  assert.equal(editor.configurePart({ rows: 40, leftCells: 50, rightCells: 50 }), true);
  const movedNano = editor.project.parts[1], movedHeader = editor.project.parts[2];
  assert.equal(partBodiesOverlap(movedNano, header), true, 'The old header pose lies in the incoming board footprint');
  assert.equal(partBodiesOverlap(movedNano, movedHeader), false);
  assert.equal(attachmentError(editor.project, movedNano), null);
  assert.equal(attachmentError(editor.project, movedHeader), null);
});

test('source-rounded module contacts reflow within their reviewed precision at every host angle', () => {
  const id = 'mikroe-mikroe-5917-2x2rgb', profile = mountingFor(id);
  assert.equal(profile.calibration.toleranceMm, .001);
  for (const rotation of [0, 90, 180, 270]) {
    const board = host({ rows: 40 }, rotation), { editor, notices } = editorFor([board]);
    const suggested = editor.suggestPlacement(id, board.id);
    assert.ok(suggested);
    const part = editor.addPart(id, suggested, { mount: true, hostPartId: board.id });
    assert.ok(part?.attachment);
    const before = conductorMap(editor.project, part);
    editor.select('part', board.id);
    assert.equal(editor.configurePart({ rows: 40, leftCells: 50, rightCells: 50 }), true, notices.at(-1));
    const current = editor.project.parts.find(item => item.id === part.id), hostPart = editor.project.parts[0];
    const epsilon = mountingTolerance(current, hostPart);
    assert.ok(epsilon > MOUNTING_EPSILON);
    assert.deepEqual(conductorMap(editor.project, current), before);
    assert.deepEqual(current.scale, part.scale);
    assert.equal(attachmentError(editor.project, current), null);
    let largest = 0;
    for (const contact of current.attachment.contacts) {
      const lead = pointOnPart(current, pinById(componentForPart(current), contact.pinId));
      const hole = pointOnPart(hostPart, pinById(componentForPart(hostPart), contact.hostPinId));
      const error = Math.max(Math.abs(lead.x - hole.x), Math.abs(lead.y - hole.y));
      assert.ok(error <= epsilon);
      largest = Math.max(largest, error);
    }
    assert.ok(largest > MOUNTING_EPSILON, 'This fixture must exercise reviewed CAD rounding rather than only exact grid coordinates');
  }
});

test('a partially seated formed part retains its loose lead and conductor while following a resized rail', () => {
  const board = host({ leftCells: 10, rightCells: 10 }, 90), resistor = formedPart(board);
  resistor.attachment.contacts.shift();
  const { editor } = editorFor([board, resistor]), original = editor.project;
  const loose = original.parts[1].leads[0], before = conductorMap(original, original.parts[1]);
  editor.select('part', board.id);
  assert.equal(editor.configurePart({ leftCells: 15, rightCells: 15 }), true);
  const changed = editor.project.parts[1];
  assert.equal(changed.attachment.contacts.length, 1);
  assert.deepEqual(changed.leads[0], loose);
  assert.deepEqual(conductorMap(editor.project, changed), before);
  assert.equal(attachmentError(editor.project, changed), null);
  assert.equal(traceNet(editor.project, { partId: changed.id, pinId: loose.pinId }).endpoints.size, 1);
});

test('split rail growth keeps mounted leads in the same original rail section', () => {
  const board = host({ rows: 30, splitRails: true }), resistor = formedPart(board, ['right-1-20', 'right-2-20']);
  const { editor } = editorFor([board, resistor]), before = conductorMap(editor.project, editor.project.parts[1]);
  editor.select('part', board.id);
  assert.equal(editor.configurePart({ rows: 40, splitRails: true }), true);
  const changed = editor.project.parts[1];
  assert.deepEqual(conductorMap(editor.project, changed), before);
  assert.ok(changed.attachment.contacts.every(contact => Number(contact.hostPinId.split('-').at(-1)) >= 21));
});

test('rail growth cannot move a wired hole across a split, even when no modules are seated', () => {
  for (const withPart of [false, true]) {
    const board = host({ rows: 31, splitRails: true });
    const parts = [board, ...(withPart ? [formedPart(board, ['right-1-18', 'right-2-18'])] : [])];
    const source = { ...newProject(), parts, wires: [{ id: 'rail-wire',
      from: { partId: board.id, pinId: 'right-1-18' }, to: { partId: board.id, pinId: 'a1' }, color: '#123456' }] };
    const notices = [], history = new ProjectHistory(source), editor = new DiagramEditor(history, () => {}, message => notices.push(message));
    const original = editor.project;
    editor.select('part', board.id);
    assert.ok(pinById(createBreadboard({ rows: 40, splitRails: true }), 'right-1-18'), 'The contact still exists; its conductor would change');
    assert.equal(editor.configurePart({ rows: 40, splitRails: true }), false);
    assert.equal(editor.project, original);
    assert.equal(history.canUndo, false);
    assert.match(notices.at(-1), /Wired contact .*another rail section/);
    assert.deepEqual(editor.project.wires[0].from, source.wires[0].from);
  }
});

test('mounted leads reflow without losing a wire that remains in their original split rail section', () => {
  const board = host({ rows: 31, splitRails: true }), resistor = formedPart(board, ['right-1-18', 'right-2-18']);
  const source = { ...newProject(), parts: [board, resistor], wires: [{ id: 'rail-wire',
    from: { partId: board.id, pinId: 'right-1-25' }, to: { partId: board.id, pinId: 'a1' }, color: '#123456' }] };
  const notices = [], editor = new DiagramEditor(new ProjectHistory(source), () => {}, message => notices.push(message));
  const original = editor.project;
  assert.ok(traceNet(original, { partId: resistor.id, pinId: resistor.attachment.contacts[0].pinId }).endpoints.has('pin/bb/a1'));
  editor.select('part', board.id);
  assert.equal(editor.configurePart({ rows: 40, splitRails: true }), true, notices.at(-1));
  assert.equal(attachmentError(editor.project, editor.project.parts[1]), null);
  assert.deepEqual(editor.project.wires, original.wires);
  assert.ok(traceNet(editor.project, { partId: resistor.id, pinId: resistor.attachment.contacts[0].pinId }).endpoints.has('pin/bb/a1'));
});

test('genuine formed-lead reach and wired-contact removal failures leave the entire assembly unchanged', () => {
  const board = host(), resistor = formedPart(board, ['left-1-15', 'right-1-15']);
  const { editor, history, notices } = editorFor([board, resistor]), original = editor.project;
  editor.select('part', board.id);
  assert.equal(editor.configurePart({ leftCells: 50, rightCells: 50 }), false);
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  assert.match(notices.at(-1), /physical reach and clearance/);
  const wide = host({ leftCells: 50, rightCells: 50 });
  const source = { ...newProject(), parts: [wide], wires: [{ id: 'wire',
    from: { partId: wide.id, pinId: `${breadboardColumnId(1, 49)}1` },
    to: { partId: wide.id, pinId: 'a1' }, color: '#123456' }] };
  const warnings = [], wires = new DiagramEditor(new ProjectHistory(source), () => {}, message => warnings.push(message));
  const prior = wires.project;
  wires.select('part', wide.id);
  assert.equal(wires.configurePart({ leftCells: 50, rightCells: 49 }), false);
  assert.equal(wires.project, prior);
  assert.match(warnings.at(-1), /remove connected contacts/);
});
