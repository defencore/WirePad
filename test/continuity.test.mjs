import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DrawingCanvas } from '../src/canvas.js';
import { traceNet } from '../src/continuity.js';

const point = (x, y) => ({ x, y });
const pin = pinId => ({ partId: 'board', pinId });
const junction = junctionId => ({ junctionId });
const wire = (id, from, to) => ({ id, from, to, color: '#2c83d9' });

test('continuity follows shared pins and junctions without merging a crossing or other pins on the same part', () => {
  const project = {
    parts: [{ id: 'board', componentId: 'esp32-s3', x: -200, y: 0 }],
    junctions: [
      { id: 'a', ...point(-10, 0) }, { id: 'b', ...point(10, 0) },
      { id: 'top', ...point(0, -10) }, { id: 'bottom', ...point(0, 10) },
    ],
    wires: [
      wire('horizontal', junction('a'), junction('b')),
      wire('vertical', junction('top'), junction('bottom')),
      wire('pin-first', junction('a'), pin('gpio1')),
      wire('pin-second', pin('gpio1'), junction('b')),
      wire('other-pin', junction('bottom'), pin('gpio2')),
    ],
  };
  for (const seed of [{ wireId: 'horizontal' }, pin('gpio1'), junction('b')]) {
    const net = traceNet(project, seed);
    assert.deepEqual([...net.wireIds].sort(), ['horizontal', 'pin-first', 'pin-second']);
    assert.deepEqual([...net.endpoints.keys()].sort(), ['junction/a', 'junction/b', 'pin/board/gpio1']);
  }
  assert.equal(traceNet(project, { wireId: 'removed-wire' }).endpoints.size, 0);
  const open = traceNet(project, pin('gpio42'));
  assert.equal(open.wireIds.size, 0);
  assert.deepEqual([...open.endpoints.values()], [pin('gpio42')]);
});

test('close wire targets select the nearest segment and branching uses the longest segment', () => {
  const geometry = route => ({ geometry: { route } });
  const canvas = Object.assign(Object.create(DrawingCanvas.prototype), {
    geometry: { wires: new Map([
      ['upper', geometry([point(0, 0), point(18, 0), point(18, 4)])],
      ['lower', geometry([point(0, 4), point(18, 4)])],
      ['coincident', geometry([point(0, 0)])],
    ]) },
  });
  assert.equal(canvas.nearestWire(['lower', 'upper'], point(2, 1)), 'upper');
  assert.equal(canvas.nearestWire(['upper', 'lower'], point(2, 3)), 'lower');
  assert.deepEqual(canvas.branchAnchor('upper'), { wireId: 'upper', point: point(9, 0) });
  assert.equal(canvas.branchAnchor('coincident'), null);
});

test('pinch keeps the original world point beneath the moving midpoint after clamping zoom', () => {
  const svg = { getBoundingClientRect: () => ({ left: 40, top: 120, width: 320, height: 520 }) };
  const canvas = Object.assign(Object.create(DrawingCanvas.prototype), {
    svg, applyView: () => {}, scale: 1, center: point(100, 100), autoFit: true,
  });
  const anchor = canvas.point(120, 220);
  canvas.zoomAt(8, anchor, 160, 300);
  assert.equal(canvas.scale, 4);
  assert.equal(canvas.autoFit, false);
  assert.deepEqual(canvas.point(160, 300), anchor);
});
