import assert from 'node:assert/strict';
import { test } from 'node:test';

import { createAutoRouter } from '../src/autoroute.js';
import { newProject, parseProject, serializeProject } from '../src/project.js';
import { endpointPositions, routeFor, wireRoute } from '../src/routing.js';

const point = (x, y) => ({ x, y });
const part = (id, x, y, componentId = 'resistor', rotation) => ({ id, componentId, x, y, rotation });
const wire = (from, to) => ({ id: 'wire', color: '#2985d5', from, to });
const coords = ({ x, y }) => [x, y];
const from = { partId: 'a', pinId: '2' };
const to = { partId: 'b', pinId: '1' };
const resistors = [part('a', 0, 100), part('b', 400, 100)];

function assertOrthogonal(route) {
  for (let index = 1; index < route.length; index++) {
    const a = route[index - 1];
    const b = route[index];
    assert.notEqual(a.x === b.x, a.y === b.y, 'Wire steps must be orthogonal and nonzero.');
  }
}

function intersects(a, b, { left, right, top, bottom }) {
  return a.y === b.y
    ? a.y > top && a.y < bottom && Math.min(a.x, b.x) < right && Math.max(a.x, b.x) > left
    : a.x > left && a.x < right && Math.min(a.y, b.y) < bottom && Math.max(a.y, b.y) > top;
}

test('automatic routing detours around a rotated board and persists the preview exactly', () => {
  const project = { ...newProject(), parts: [...resistors, part('block', 160, 30, 'bme280', 90)] };
  const position = endpointPositions(project);
  const start = position(from);
  const end = position(to);
  const route = createAutoRouter(project)(start, end);
  const obstacle = { left: 158, right: 286, top: 32, bottom: 156 };
  assert.equal(intersects(start, end, obstacle), true);
  assertOrthogonal(route);
  assert.deepEqual(route[0], start);
  assert.deepEqual(route.at(-1), end);
  assert.equal(route[1].y, start.y);
  assert.ok(route[1].x > start.x);
  assert.equal(route.at(-2).y, end.y);
  assert.ok(route.at(-2).x < end.x);
  assert.ok(!route.slice(1).some((p, i) => intersects(route[i], p, obstacle)));

  const points = route.slice(1, -1).map(({ x, y }) => ({ x, y }));
  const saved = parseProject(serializeProject({ ...project, wires: [{ ...wire(from, to), fixedRoute: true, points }] }));
  assert.deepEqual(routeFor(saved.wires[0], endpointPositions(saved)).map(coords), route.map(coords));
});

test('automatic routing separates parallel wires and preserves an unobstructed crossing', () => {
  const project = { ...newProject(), parts: resistors };
  const position = endpointPositions(project);
  const start = position(from);
  const end = position(to);
  const existing = [point(110, 116), point(390, 116)];
  const route = createAutoRouter(project, [existing])(start, end);
  assertOrthogonal(route);
  assert.notDeepEqual(route.map(coords), wireRoute(start, end).map(coords));
  assert.ok(route.every(({ x, y }) => y !== 116 || x <= 110 || x >= 388));

  const a = point(200, 95);
  const b = point(200, 160);
  assert.deepEqual(createAutoRouter(project, [existing])(a, b), [a, b]);
});

test('an endpoint on an existing wire favors a short perpendicular branch', () => {
  const existing = [point(0, 0), point(200, 0)];
  const start = point(20, 0);
  const end = point(160, 100);
  const route = createAutoRouter(newProject(), [existing])(start, end);
  assert.deepEqual(route, [start, point(20, 100), end]);
});

test('a new wire detours around another net’s junction but may end at the junction', () => {
  const junction = { id: 'dot', ...point(70, 0) };
  const route = createAutoRouter({ ...newProject(), junctions: [junction] });
  const start = point(0, 0);
  const end = point(140, 0);
  const around = route(start, end);
  assertOrthogonal(around);
  assert.ok(!around.slice(1).some((p, i) => intersects(around[i], p, { left: 64, right: 76, top: -6, bottom: 6 })));
  assert.deepEqual(route(start, point(junction.x, junction.y)), [start, point(junction.x, junction.y)]);
});

test('when an endpoint is enclosed by another body routing keeps a deterministic fallback', () => {
  const project = { ...newProject(), parts: [part('cover', 0, 0)] };
  const start = point(30, 16);
  const end = point(200, 70);
  const route = createAutoRouter(project);
  assert.deepEqual(route(start, end), wireRoute(start, end));
  assert.deepEqual(route(start, end), route(start, end));
});
