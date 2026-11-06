import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DrawingCanvas, drawingMarkup } from '../src/canvas.js';
import { demoProject, parseProject, serializeProject } from '../src/project.js';
import { endpointPositions, routeFor, segmentDrag, slideSegment, splitWire, wireRoute } from '../src/routing.js';

const point = (x, y) => ({ x, y });
const pin = (x, y, dx, dy) => ({ x, y, normal: point(dx, dy) });
const coordinates = ({ x, y }) => [x, y];

function assertClean(route, start, end) {
  assert.deepEqual(coordinates(route[0]), coordinates(start));
  assert.deepEqual(coordinates(route.at(-1)), coordinates(end));
  let previousDirection;
  for (let index = 1; index < route.length; index++) {
    const [x, y] = coordinates(route[index]);
    const [beforeX, beforeY] = coordinates(route[index - 1]);
    const dx = Math.sign(x - beforeX);
    const dy = Math.sign(y - beforeY);
    assert.notEqual(Boolean(dx), Boolean(dy), 'Each segment must be orthogonal and nonzero.');
    if (previousDirection) {
      assert.ok(dx * previousDirection.dx + dy * previousDirection.dy >= 0, 'The wire must not retrace the previous segment.');
    }
    previousDirection = { dx, dy };
  }
  for (const [terminal, neighbor] of [[start, route[1]], [end, route.at(-2)]]) {
    if (terminal.normal) {
      const dx = neighbor.x - terminal.x;
      const dy = neighbor.y - terminal.y;
      assert.ok(dx * terminal.normal.x + dy * terminal.normal.y > 0, 'The wire must meet the pin from the outside.');
    }
  }
}

test('an existing wire with two protruding bends renders cleanly in the draft and export', () => {
  const project = parseProject(serializeProject({
    version: 1, title: 'Button and ESP32-S3',
    parts: [
      { id: 'button', componentId: 'button', x: 180, y: 21 },
      { id: 'controller', componentId: 'esp32-s3', x: 191, y: 67 },
    ],
    wires: [{
      id: 'button-signal', color: '#2c83d9',
      from: { partId: 'button', pinId: '1' },
      to: { partId: 'controller', pinId: 'gpio12' },
      points: [point(35, 51), point(83, 35)],
    }],
  }));
  const [wire] = project.wires;
  const position = endpointPositions(project);
  const start = position(wire.from);
  const end = position(wire.to);
  const route = routeFor(wire, position);
  assertClean(route, start, end);
  assert.ok(route.every(({ x, y }) => x >= 83 && y >= start.y));

  const preview = Object.assign(Object.create(DrawingCanvas.prototype), { draft: { innerHTML: '' } });
  preview.showDraft(project, wire, end, wire.color, wire.to);
  const path = markup => markup.match(/<path d="([^"]+)"/)?.[1];
  assert.ok(path(preview.draft.innerHTML));
  assert.equal(path(preview.draft.innerHTML), path(drawingMarkup(project)));

  const { junction, before, after } = splitWire(wire, position, point(83, 155), 'branch', 'branch-wire');
  project.junctions = [junction];
  const withJunction = endpointPositions(project);
  assertClean(routeFor(before, withJunction), start, junction);
  assertClean(routeFor(after, withJunction), junction, end);
});

test('moving a component does not leave a stub at a saved bend', () => {
  const project = demoProject();
  project.parts[0].y -= 8;
  const wire = project.wires.find(wire => wire.id === 'power-trunk');
  const position = endpointPositions(project);
  assertClean(routeFor(wire, position), position(wire.from), position(wire.to));
});

test('dragging a segment through an adjacent bend removes the retraced length', () => {
  const start = point(0, 0);
  const end = point(90, 65);
  const position = endpoint => endpoint === 'from' ? start : end;
  const wire = {
    from: 'from', to: 'to', fixedRoute: true,
    points: [point(25, 0), point(25, 15), point(65, 15), point(65, 45), point(40, 45), point(40, 65)],
  };
  const gesture = segmentDrag(wire, position, point(45, 15));
  const route = routeFor({ ...wire, points: slideSegment(gesture, 30) }, position);
  assertClean(route, start, end);
  assert.ok(!route.some(({ x, y }) => x > 40 && y === 45));
});

test('pin routes stay orthogonal and keep their departure directions', () => {
  const normals = [point(1, 0), point(-1, 0), point(0, 1), point(0, -1), undefined];
  for (const a of normals) for (const b of normals) {
    for (const x of [-40, -15, -8, 0, 8, 15, 40]) for (const y of [-40, -15, -8, 0, 8, 15, 40]) {
      if (!x && !y) continue;
      const start = { x: 0, y: 0, normal: a };
      const end = { x, y, normal: b };
      assertClean(wireRoute(start, end), start, end);
      assertClean(wireRoute(start, end, [point(-20, -15), point(10, 0)], true), start, end);
    }
  }

  const start = pin(0, 0, 1, 0);
  const end = pin(12, 40, -1, 0);
  assert.ok(wireRoute(start, end).every(({ x }) => x >= start.x && x <= end.x));
});
