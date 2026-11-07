import assert from 'node:assert/strict';
import { test } from 'node:test';

import { traceNet } from '../src/model/continuity.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { newProject } from '../src/model/project.js';
import { ProjectHistory } from '../src/model/history.js';
import { moveWireBend, routeFor, segmentDrag, slideSegment, wireRoute } from '../src/geometry/routing.js';
import { endpointPositions } from '../src/geometry/parts.js';

const point = (x, y) => ({ x, y });
const pin = (partId, pinId = '2') => ({ partId, pinId });
const junction = junctionId => ({ junctionId });
const part = (id, x, y) => ({ id, componentId: 'resistor', x, y });
const wire = (id, from, to, points) => ({ id, from, to, color: '#2c83d9', points });

function workspace({ parts = [], wires = [], junctions = [] }) {
  const messages = [];
  const history = new ProjectHistory({ ...newProject(), parts, wires, junctions });
  const editor = new DiagramEditor(history, () => {}, message => messages.push(message));
  return { editor, history, messages };
}

function assertOrthogonal(route) {
  for (let index = 1; index < route.length; index++) {
    const a = route[index - 1];
    const b = route[index];
    assert.notEqual(a.x === b.x, a.y === b.y, 'Segments are orthogonal and have nonzero length.');
  }
}

test('reconnecting either end preserves the wire ID and color and commits a single undo step', () => {
  const { editor, history } = workspace({
    parts: [part('a', 0, 20), part('b', 300, 0), part('c', 250, 170)],
    wires: [wire('signal', pin('a'), pin('b', '1'))],
  });
  const original = editor.project;
  const position = endpointPositions(original);
  assert.equal(editor.reconnectWire('signal', 'to', pin('c', '1'), position, wireRoute), true);
  assert.equal(editor.wire.id, 'signal');
  assert.equal(editor.wire.color, '#2c83d9');
  assert.deepEqual(editor.wire.to, pin('c', '1'));
  assert.equal(editor.wire.fixedRoute, true);
  assertOrthogonal(routeFor(editor.wire, endpointPositions(editor.project)));
  const reconnected = editor.project;
  assert.equal(history.undo(), original);
  assert.equal(history.redo(), reconnected);

  assert.equal(editor.reconnectWire('signal', 'from', pin('b'), position, wireRoute), true);
  assert.deepEqual(editor.wire.from, pin('b'));
  assert.deepEqual(editor.wire.to, pin('c', '1'));
});

test('reconnecting onto another wire splits it atomically and removes the vacated orphan junction', () => {
  const { editor, history } = workspace({
    parts: [part('a', 0, 0), part('b', 0, 120), part('c', 300, 120)],
    junctions: [{ id: 'old', x: 220, y: 16 }],
    wires: [
      wire('signal', pin('a'), junction('old')),
      wire('target', pin('b'), pin('c', '1')),
    ],
  });
  const original = editor.project;
  const targetPoint = point(185, 136);
  assert.equal(editor.reconnectWire('signal', 'to', { wireId: 'target', point: targetPoint }, endpointPositions(original), wireRoute), true);
  const [attached] = editor.project.junctions;
  assert.notEqual(attached.id, 'old');
  assert.deepEqual({ x: attached.x, y: attached.y }, targetPoint);
  assert.deepEqual(editor.wire.to, junction(attached.id));
  assert.equal(editor.project.wires.length, 3);
  assert.equal(traceNet(editor.project, { wireId: 'signal' }).wireIds.size, 3);
  assert.equal(history.undo(), original);
  assert.equal(history.canUndo, false);
});

test('invalid or redundant endpoint drops leave the saved project and undo history untouched', () => {
  const { editor, history, messages } = workspace({
    parts: [part('a', 0, 0), part('b', 180, 0), part('c', 380, 0)],
    wires: [
      wire('edited', pin('a'), pin('b', '1')),
      wire('remaining', pin('a'), pin('c', '1')),
    ],
  });
  const original = editor.project;
  const position = endpointPositions(original);
  for (const endpoint of [
    pin('b', '1'), pin('missing', '1'), pin('c', '1'),
    { wireId: 'edited', point: point(110, 16) }, { wireId: 'remaining', point: point(120, 16) },
  ]) {
    assert.equal(editor.reconnectWire('edited', 'to', endpoint, position, wireRoute), false);
    assert.equal(editor.project, original);
    assert.equal(history.canUndo, false);
  }
  assert.ok(messages.some(message => message.includes('same net')));
});

test('a straight waypoint can be inserted, dragged into a detour, or removed', () => {
  const { editor, history } = workspace({
    junctions: [{ id: 'a', x: 0, y: 0 }, { id: 'b', x: 120, y: 0 }],
    wires: [wire('edited', junction('a'), junction('b'))],
  });
  const position = endpointPositions(editor.project);
  const marker = point(60, 0);
  const destination = point(65, 30);
  assert.equal(editor.addWireBend('edited', marker, position), true);
  const edited = editor.project.wires[0];
  assert.deepEqual(routeFor(edited, position), [point(0, 0), marker, point(120, 0)]);
  const moved = { ...edited, points: moveWireBend(edited, position, marker, destination) };
  const movedRoute = routeFor(moved, position);
  assertOrthogonal(movedRoute);
  assert.ok(movedRoute.some(({ x, y }) => x === destination.x && y === destination.y));

  assert.equal(editor.removeWireBend('edited', marker, position), true);
  assert.deepEqual(routeFor(editor.project.wires[0], position), [point(0, 0), point(120, 0)]);
  assert.equal(history.undo().wires[0], edited);
});

test('dragging a corner keeps the adjoining pin and the wire orthogonal', () => {
  const { editor } = workspace({
    parts: [part('a', 0, 0), part('b', 300, 90)],
    wires: [wire('edited', pin('a'), pin('b', '1'), [point(140, 16), point(140, 106)])],
  });
  const position = endpointPositions(editor.project);
  const original = editor.project.wires[0];
  const target = point(165, -20);
  const edited = { ...original, fixedRoute: true, points: moveWireBend(original, position, point(140, 16), target) };
  const route = routeFor(edited, position);
  assertOrthogonal(route);
  assert.ok(route.some(({ x, y }) => x === target.x && y === target.y));
  assert.deepEqual(route[0], position(original.from));
  assert.deepEqual(route.at(-1), position(original.to));
  assert.equal(route[1].y, route[0].y);
  assert.ok(route[1].x > route[0].x);
  assert.equal(route.at(-2).y, route.at(-1).y);
  assert.ok(route.at(-2).x < route.at(-1).x);
});

test('a segment handle edits only its section when an inline waypoint splits the line', () => {
  const { editor } = workspace({
    junctions: [{ id: 'a', x: 0, y: 0 }, { id: 'b', x: 120, y: 0 }],
    wires: [wire('edited', junction('a'), junction('b'), [point(60, 0), point(90, 0)])],
  });
  const position = endpointPositions(editor.project);
  const original = editor.project.wires[0];
  const segment = segmentDrag(original, position, point(30, 0), 0);
  const route = routeFor({ ...original, fixedRoute: true, points: slideSegment(segment, 20) }, position);
  assertOrthogonal(route);
  assert.ok(route.some(({ x, y }) => x < 60 && y === 20));
  assert.ok(route.every(({ x, y }) => x <= 60 || y === 0));
  assert.ok(route.some(({ x, y }) => x === 90 && y === 0));
});

test('an off-line insertion creates a local detour and a corner can be removed', () => {
  const { editor } = workspace({
    junctions: [{ id: 'a', x: 0, y: 0 }, { id: 'b', x: 120, y: 0 }],
    wires: [wire('edited', junction('a'), junction('b'))],
  });
  const position = endpointPositions(editor.project);
  assert.equal(editor.addWireBend('edited', point(60, 25), position), true);
  const detour = routeFor(editor.project.wires[0], position);
  assertOrthogonal(detour);
  assert.ok(detour.some(({ x, y }) => x === 60 && y === 25));
  const corner = detour[1];
  assert.equal(editor.removeWireBend('edited', corner, position), true);
  const route = routeFor(editor.project.wires[0], position);
  assertOrthogonal(route);
  assert.ok(!route.some(({ x, y }) => x === corner.x && y === corner.y));
});
