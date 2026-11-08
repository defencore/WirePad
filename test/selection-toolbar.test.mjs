import assert from 'node:assert/strict';
import { test } from 'node:test';
import { positionSelectionToolbar, selectionToolbarBounds, selectionToolbarPosition } from '../src/ui/selection-toolbar.js';
import { partOutlineBounds } from '../src/geometry/parts.js';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { leadControlLayout } from '../src/canvas/lead-control-layout.js';
import { mountingScale } from '../src/model/mounting.js';

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

function toolbarScene({ zoom = .25, ratio = { x: 1, y: 1 }, viewport = { width: 800, height: 600 } } = {}) {
  const component = componentById.get('market-bpw34'), profile = mountingFor(component.id);
  const part = { id: 'photodiode', componentId: component.id, x: 100, y: 200,
    scale: mountingScale(component, componentById.get('breadboard')),
    leads: profile.contacts.map(contact => ({ pinId: contact.pinId,
      x: profile.origin.x + contact.x * profile.unitsPerMm,
      y: profile.origin.y + contact.y * profile.unitsPerMm })) };
  const world = partOutlineBounds(part), frame = { left: 120, top: 75, ...viewport };
  const parent = { left: 25, top: 30 };
  const center = { x: (world.left + world.right) / 2, y: (world.top + world.bottom) / 2 };
  const screen = point => ({ x: frame.left + viewport.width / 2 + (point.x - center.x) * zoom * ratio.x,
    y: frame.top + viewport.height / 2 + (point.y - center.y) * zoom * ratio.y });
  const nodeFor = (point, radius = 10) => {
    const position = screen(point);
    const rect = { left: position.x - radius * ratio.x, top: position.y - radius * ratio.y,
      right: position.x + radius * ratio.x, bottom: position.y + radius * ratio.y,
      width: radius * 2 * ratio.x, height: radius * 2 * ratio.y };
    return { rect, getBoundingClientRect: () => rect };
  };
  let controls = leadControlLayout(part, component, zoom).map(control => nodeFor(control.display));
  const svg = { clientWidth: viewport.width / ratio.x, clientHeight: viewport.height / ratio.y,
    getBoundingClientRect: () => frame,
    querySelectorAll(selector) {
      assert.equal(selector, '.lead-tip-control, .wire-handle', 'Only canvas-local editing controls become obstacles.');
      return controls;
    } };
  const toolbar = { style: {}, parentElement: { getBoundingClientRect: () => parent },
    getBoundingClientRect: () => ({ width: 310, height: 48 }) };
  const canvas = { geometry: { parts: new Map([[part.id, { part }]]) }, svg, center, scale: zoom };
  const selections = [{ type: 'part', id: part.id }];
  const root = { querySelector: () => null };
  const position = () => {
    positionSelectionToolbar({ toolbar, canvas, selections, root });
    const left = Number.parseFloat(toolbar.style.left) + parent.left;
    const top = Number.parseFloat(toolbar.style.top) + parent.top;
    return { left, top, right: left + 310, bottom: top + 48 };
  };
  return { canvas, toolbar, root, selections, world, screen, frame, position, nodeFor,
    get controls() { return controls; }, set controls(value) { controls = value; } };
}

test('contextual actions avoid displaced lead control bounds at low zoom and independent canvas CSS scales', () => {
  for (const zoom of [.25, .4]) for (const ratio of [{ x: 1, y: 1 }, { x: 1.5, y: .8 }]) {
    const view = toolbarScene({ zoom, ratio });
    const controls = view.controls;
    view.controls = [];
    const unprotected = view.position();
    assert.ok(controls.some(control => overlap(unprotected, control.rect) > 0), 'This pose reproduces toolbar coverage of a displaced handle.');
    view.controls = controls;
    const placed = view.position();
    assert.ok(controls.every(control => overlap(placed, control.rect) === 0), `Every handle remains accessible at zoom ${zoom}.`);
    assert.deepEqual(selectionToolbarBounds(view.canvas, view.selections), view.world, 'Editing controls must not expand physical selection bounds.');
  }
});

test('contextual actions avoid wire handles, ignore hidden or empty controls, and leave a hidden toolbar untouched', () => {
  const view = toolbarScene();
  view.controls = [];
  const original = view.position();
  const visible = { getBoundingClientRect: () => ({ ...original, width: 310, height: 48 }) };
  view.controls = [visible];
  const displaced = view.position();
  assert.equal(overlap(displaced, original), 0, 'A wire handle screen rectangle is an obstacle even beyond selection bounds.');
  view.controls = [{ ...visible, hidden: true }, { getBoundingClientRect: () => ({ left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 }) }];
  assert.deepEqual(view.position(), original);
  view.toolbar.hidden = true;
  view.toolbar.style.left = 'unchanged';
  view.toolbar.style.top = 'unchanged';
  positionSelectionToolbar(view);
  assert.deepEqual(view.toolbar.style, { left: 'unchanged', top: 'unchanged' });
});

test('handle avoidance preserves toolbar viewport clamping when the selection is near an edge', () => {
  for (const zoom of [.25, .4]) {
    const view = toolbarScene({ zoom, viewport: { width: 390, height: 300 } });
    view.canvas.center.y += 180 / zoom;
    const top = view.frame.top + 6;
    view.controls = [{ getBoundingClientRect: () => ({ left: view.frame.left + 165, top, right: view.frame.left + 185,
      bottom: top + 20, width: 20, height: 20 }) }];
    const placed = view.position();
    assert.ok(placed.left >= view.frame.left + 8 && placed.right <= view.frame.left + view.frame.width - 8);
    assert.ok(placed.top >= view.frame.top + 8 && placed.bottom <= view.frame.top + view.frame.height - 8);
    assert.equal(overlap(placed, view.controls[0].getBoundingClientRect()), 0);
  }
});
