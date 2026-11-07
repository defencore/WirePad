import assert from 'node:assert/strict';
import { test } from 'node:test';

import { createAutoRouter } from '../src/geometry/autoroute.js';
import { drawingMarkup } from '../src/canvas/markup.js';
import { componentById } from '../src/catalog/index.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';
import { routeFor } from '../src/geometry/routing.js';
import { endpointPositions } from '../src/geometry/parts.js';

test('Hi-Link contacts follow the three physical package edges and preserve terminal identity', () => {
  const module = componentById.get('hlk-7688a');
  const top = module.pins.slice(0, 23), left = module.pins.slice(23, 33), bottom = module.pins.slice(33);
  assert.ok(module.pins.every(pin => pin.surface));
  assert.ok(top.every(pin => pin.y === top[0].y));
  assert.ok(left.every(pin => pin.x === left[0].x));
  assert.ok(bottom.every(pin => pin.y === bottom[0].y));
  assert.ok(top.slice(1).every((pin, i) => pin.x < top[i].x));
  assert.ok(left.slice(1).every((pin, i) => pin.y > left[i].y));
  assert.ok(bottom.slice(1).every((pin, i) => pin.x > bottom[i].x));
  assert.equal(module.pins[14].id, 'p15');
  assert.equal(module.pins[14].label, 'UART_TXD1');
  assert.equal(module.pins[14].number, '15');
});

test('on-board wires remain above module artwork and survive rotation and project reload', () => {
  const project = { ...newProject('Physical contacts'), parts: [
    { id: 'module', componentId: 'hlk-7688a', x: 10, y: 20, rotation: 90 },
    { id: 'target', componentId: 'resistor', x: 1100, y: 300 },
  ], wires: [{ id: 'wire', from: { partId: 'module', pinId: 'p15' }, to: { partId: 'target', pinId: '1' }, color: '#b922af' }] };
  const position = endpointPositions(project);
  const point = position(project.wires[0].from);
  assert.equal(point.normal, undefined);
  assert.equal(point.bounds, undefined);
  const markup = drawingMarkup(project);
  assert.ok(markup.indexOf('Hi-Link') < markup.indexOf('stroke="#b922af"'));
  assert.ok(markup.lastIndexOf('fill="#087a6f"') > markup.indexOf('stroke="#b922af"'));
  const reloaded = parseProject(serializeProject(project));
  assert.deepEqual(routeFor(reloaded.wires[0], endpointPositions(reloaded)), routeFor(project.wires[0], position));
});

test('routing from an on-board contact exits its own board and still avoids another module', () => {
  const module = componentById.get('weact-blackpill-stm32f401ceu6');
  const pin = module.pins.find(pin => pin.label === 'PA9');
  const project = { ...newProject(), parts: [
    { id: 'source', componentId: module.id, x: 0, y: 0 },
    { id: 'obstacle', componentId: 'bme280', x: 340, y: pin.y - 50 },
  ] };
  const start = endpointPositions(project)({ partId: 'source', pinId: pin.id });
  const end = { x: 650, y: start.y };
  const route = createAutoRouter(project)(start, end);
  assert.ok(route.length > 2);
  const obstacle = componentById.get('bme280');
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1], b = route[i];
    const crosses = a.y === b.y
      ? a.y > project.parts[1].y - 9 && a.y < project.parts[1].y + obstacle.height + 9 && Math.max(a.x, b.x) > 331 && Math.min(a.x, b.x) < 349 + obstacle.width
      : a.x > 331 && a.x < 349 + obstacle.width && Math.max(a.y, b.y) > project.parts[1].y - 9 && Math.min(a.y, b.y) < project.parts[1].y + obstacle.height + 9;
    assert.equal(crosses, false);
  }
});
