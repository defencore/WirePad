import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DiagramEditor } from '../src/editor/editor.js';
import { nudgeTarget } from '../src/editor/nudge.js';
import { selectionInBox, translatePart } from '../src/editor/selection.js';
import { endpointPositions, partBounds } from '../src/geometry/parts.js';
import { routeFor } from '../src/geometry/routing.js';
import { ProjectHistory } from '../src/model/history.js';
import { POSITION_LIMIT } from '../src/model/limits.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const point = (x, y) => ({ x, y });
const joint = junctionId => ({ junctionId });
const pin = (partId, pinId) => ({ partId, pinId });
const wire = (id, from, to, points) => ({ id, from, to, color: '#2c83d9', ...(points && { points, fixedRoute: true }) });
const board = (properties = {}) => ({ id: 'board', componentId: 'breadboard', x: 0, y: 0,
  breadboard: { rows: 12, topRails: 0, bottomRails: 0, leftRails: 0, rightRails: 0 }, ...properties });
const resistor = (id, x, y, rotation = 0) => ({ id, componentId: 'resistor', x, y, rotation });
const route = (project, id) => routeFor(project.wires.find(wire => wire.id === id), endpointPositions(project)).map(({ x, y }) => point(x, y));

function workspace(data) {
  const history = new ProjectHistory({ ...newProject(), ...data });
  const editor = new DiagramEditor(history, () => {}, message => assert.fail(message));
  editor.select('part', 'board');
  return { editor, history, original: editor.project };
}

test('moving a breadboard carries enclosed parts, junctions and full internal routes in one undo step', () => {
  const { editor, history, original } = workspace({
    parts: [board(), resistor('child', 40, 40), resistor('overhang', 350, 40), resistor('outside', 500, 40)],
    junctions: [{ id: 'a', x: 100, y: 180 }, { id: 'b', x: 280, y: 240 }],
    wires: [wire('inside', joint('a'), joint('b'), [point(150, 180), point(150, 240)]),
      wire('child-wire', pin('child', '2'), joint('a'), [point(160, 56), point(160, 180)])],
  });
  const before = original.wires.map(wire => route(original, wire.id));
  const preview = editor.selectionProject(40, 25, original);
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  assert.deepEqual(preview.parts.map(({ x, y }) => point(x, y)), [point(40, 25), point(80, 65), point(350, 40), point(500, 40)]);
  assert.deepEqual(preview.junctions.map(({ x, y }) => point(x, y)), [point(140, 205), point(320, 265)]);
  for (const [index, wire] of original.wires.entries()) {
    assert.deepEqual(route(preview, wire.id), before[index].map(p => point(p.x + 40, p.y + 25)));
    assert.equal(preview.wires[index].from, wire.from);
    assert.equal(preview.wires[index].to, wire.to);
    assert.equal(preview.wires[index].id, wire.id);
    assert.equal(preview.wires[index].color, wire.color);
  }
  assert.equal(editor.commit(preview), true);
  const moved = editor.project;
  assert.deepEqual(parseProject(serializeProject(moved)), moved);
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  editor.step('redo');
  assert.equal(editor.project, moved);
});

test('an external connection moves its interior route while keeping outside bends and endpoints fixed', () => {
  const { editor, original } = workspace({
    parts: [board(), resistor('outside', 500, 60)],
    junctions: [{ id: 'inside', x: 100, y: 100 }, { id: 'left', x: -100, y: 280 }, { id: 'right', x: 600, y: 280 }],
    wires: [
      wire('external', joint('inside'), pin('outside', '1'), [point(200, 100), point(200, 80), point(450, 80), point(450, 76)]),
      wire('independent-crossing', joint('left'), joint('right')),
    ],
  });
  const next = editor.selectionProject(40, 25);
  const moved = next.wires[0];
  assert.equal(next.parts[1], original.parts[1]);
  assert.deepEqual(endpointPositions(next)(moved.to), endpointPositions(original)(moved.to));
  assert.ok(moved.points.some(p => p.x === 240 && p.y === 105), 'interior bend travels with the breadboard');
  assert.ok(moved.points.some(p => p.x === 450 && p.y === 80), 'outside bend stays put');
  assert.equal(next.wires[1], original.wires[1], 'unattached crossing wires are not container contents');
  const points = route(next, 'external');
  assert.ok(points.every((p, i) => i === 0 || p.x === points[i - 1].x || p.y === points[i - 1].y));
});

test('rotated container bounds carry whole child geometry and repeated previews use the original snapshot', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const part = board({ rotation, x: 100, y: -40, breadboard: { rows: 20 } });
    const bounds = partBounds(part);
    const child = resistor('child', bounds.left + 60, bounds.top + 40, 90);
    const overhang = resistor('overhang', bounds.right - 20, bounds.top + 50);
    const { editor, original } = workspace({ parts: [part, child, overhang], wires: [] });
    const first = editor.selectionProject(10, 15, original);
    const second = editor.selectionProject(20, 30, original);
    assert.equal(first.parts[1].x, child.x + 10);
    assert.equal(second.parts[1].x, child.x + 20);
    assert.equal(second.parts[1].rotation, 90);
    assert.equal(second.parts[2], original.parts[2]);
    assert.equal(editor.project, original);
  }
});

test('breadboard pointer movement and keyboard nudges share containment and clamp every carried point', () => {
  const { original } = workspace({
    parts: [board({ x: POSITION_LIMIT - 200 })],
    junctions: [{ id: 'a', x: POSITION_LIMIT - 30, y: 100 }, { id: 'b', x: POSITION_LIMIT - 10, y: 200 }],
    wires: [wire('inside', joint('a'), joint('b'), [point(POSITION_LIMIT - 1, 100), point(POSITION_LIMIT - 1, 200)])],
  });
  const pointer = translatePart(original, 'board', point(POSITION_LIMIT - 150, 20));
  const keyboard = nudgeTarget(original, { kind: 'part', id: 'board' }, 50, 20).project;
  assert.deepEqual(pointer, keyboard);
  assert.equal(pointer.parts[0].x, original.parts[0].x + 1);
  assert.equal(pointer.parts[0].y, 20);
  assert.ok(pointer.wires[0].points.some(p => p.x === POSITION_LIMIT));
  assert.deepEqual(parseProject(serializeProject(pointer)), pointer);
});

test('an interior crossing selection picks wires and small parts without capturing the breadboard', () => {
  const project = { parts: [board(), resistor('child', 100, 100)],
    junctions: [], wires: [{ id: 'crosses' }, { id: 'outside' }] };
  const geometry = { partBounds,
    wirePoints: wire => wire.id === 'crosses' ? [point(0, 120), point(320, 120)] : [point(0, 300), point(320, 300)] };
  assert.deepEqual(selectionInBox(project, point(220, 180), point(80, 80), geometry), [
    { type: 'part', id: 'child' }, { type: 'wire', id: 'crosses' },
  ]);
  assert.ok(selectionInBox(project, point(400, 400), point(-10, -10), geometry)
    .some(item => item.type === 'part' && item.id === 'board'));
});
