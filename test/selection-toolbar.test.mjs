import assert from 'node:assert/strict';
import { test } from 'node:test';
import { selectionToolbarBounds, selectionToolbarPosition } from '../src/ui/selection-toolbar.js';
import { partOutlineBounds } from '../src/geometry/parts.js';

const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) *
  Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));

test('contextual toolbar follows the physical outline rather than an annotation frame at every rotation', () => {
  for (const componentId of ['breadboard', 'arduino-nano', 'adafruit-module-5832']) for (const rotation of [0, 90, 180, 270]) {
    const part = { id: 'selected', componentId, x: 13, y: 27, rotation, scale: { x: .8, y: .8 } };
    const canvas = { geometry: { parts: new Map([[part.id, { part }]]) } };
    assert.deepEqual(selectionToolbarBounds(canvas, [{ type: 'part', id: part.id }]), partOutlineBounds(part));
  }
});

test('multi-selection toolbar includes hardware, wire routes and junctions while ignoring missing items', () => {
  const part = { id: 'board', componentId: 'breadboard', x: 20, y: 40 };
  const bounds = partOutlineBounds(part);
  const canvas = { geometry: { parts: new Map([[part.id, { part }]]), junctions: new Map([['junction', { x: -20, y: -10 }]]) },
    wireRoute: () => [{ x: -40, y: 20 }, { x: bounds.right + 40, y: bounds.bottom + 50 }] };
  assert.deepEqual(selectionToolbarBounds(canvas, [{ type: 'part', id: part.id }, { type: 'part', id: 'missing' },
    { type: 'wire', id: 'wire' }, { type: 'junction', id: 'junction' }]),
  { left: -40, top: -15, right: bounds.right + 40, bottom: bounds.bottom + 50 });
  assert.equal(selectionToolbarBounds(canvas, []), null);
});

test('large valid route selections accumulate bounds without overflowing the argument stack', () => {
  const selections = Array.from({ length: 1000 }, (_, index) => ({ type: 'wire', id: String(index) }));
  const canvas = { wireRoute: id => Array.from({ length: 216 }, (_, index) => ({ x: Number(id) * 1000 + index, y: 0 - index })) };
  assert.deepEqual(selectionToolbarBounds(canvas, selections), { left: 0, top: -215, right: 999215, bottom: 0 });
});

test('contextual actions remain on screen and avoid hardware and fixed tools when space exists', () => {
  const toolbar = { width: 310, height: 48 };
  const viewport = { width: 1000, height: 800 };
  const bounds = { left: 400, top: 200, right: 600, bottom: 600 };
  const obstacles = [{ left: 0, top: 0, right: 1000, bottom: 80 }, { left: 0, top: 740, right: 1000, bottom: 800 }];
  const point = selectionToolbarPosition(bounds, toolbar, viewport, obstacles);
  const placed = { left: point.x, top: point.y, right: point.x + toolbar.width, bottom: point.y + toolbar.height };
  assert.equal(overlap(placed, bounds), 0);
  assert.ok(obstacles.every(obstacle => overlap(placed, obstacle) === 0));
  for (const width of [390, 800, 2000]) for (const height of [300, 844, 1400]) for (const offset of [-500, 0, 500]) {
    const next = selectionToolbarPosition({ left: offset, top: offset, right: offset + 500, bottom: offset + 700 },
      { width: 310, height: 105 }, { width, height }, []);
    assert.ok(next.x >= 8 && next.x + 310 <= width - 8);
    assert.ok(next.y >= 8 && next.y + 105 <= height - 8);
  }
});

test('a wide breadboard keeps contextual actions at its edge instead of clamping side actions over a mounted module', () => {
  const bounds = { left: 25, top: 187, right: 365, bottom: 708 };
  const toolbar = { width: 310, height: 54 }, viewport = { width: 390, height: 844 };
  const obstacles = [
    { left: 8, top: 64, right: 105, bottom: 114 },
    { left: 186, top: 64, right: 384, bottom: 174 },
    { left: 8, top: 760, right: 382, bottom: 836 },
    { left: 80, top: 716, right: 310, bottom: 736 },
  ];
  const point = selectionToolbarPosition(bounds, toolbar, viewport, obstacles);
  const placed = { left: point.x, top: point.y, right: point.x + toolbar.width, bottom: point.y + toolbar.height };
  assert.equal(overlap(placed, { left: 140, top: 420, right: 250, bottom: 700 }), 0);
  assert.ok(point.y + toolbar.height <= 420 || point.y >= 700);
});
