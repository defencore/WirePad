import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { CanvasControls } from '../src/canvas/controls.js';
import { leadControlLayout, LEAD_HANDLE_SPACING, LEAD_HIT_RADIUS } from '../src/canvas/lead-control-layout.js';
import { partBodyBounds, pointOnPart } from '../src/geometry/parts.js';
import { instancePins } from '../src/model/part-pins.js';
import { mountingScale } from '../src/model/mounting.js';

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

function fixture(points, placement = {}) {
  const component = { id: 'lead-layout-fixture', width: 40, height: 20,
    pins: points.map((point, index) => ({ id: String(index + 1), label: `Contact ${index + 1}`, ...point })) };
  const part = { id: 'formed', componentId: component.id, x: 75, y: -40, rotation: 0,
    ...placement, leads: component.pins.map(pin => ({ pinId: pin.id, x: pin.x, y: pin.y })) };
  return { part, component };
}

function verifyLayout(part, component, zoom) {
  const before = structuredClone(part);
  const layout = leadControlLayout(part, component, zoom);
  const body = partBodyBounds(part, component);
  assert.equal(layout.length, component.pins.length);
  for (const [index, control] of layout.entries()) {
    assert.deepEqual(control.point, pointOnPart(part, instancePins(part, component)[index], component));
    assert.equal(control.pin.id, component.pins[index].id);
    assert.equal(control.pin.label, component.pins[index].label);
    const x = Math.max(body.left - control.display.x, 0, control.display.x - body.right);
    const y = Math.max(body.top - control.display.y, 0, control.display.y - body.bottom);
    assert.ok(Math.hypot(x, y) * zoom >= LEAD_HIT_RADIUS - 1e-7, 'the whole target stays clear of physical body material');
    for (const other of layout.slice(index + 1)) {
      assert.ok(distance(control.display, other.display) * zoom >= LEAD_HANDLE_SPACING - 1e-7, 'all lead controls stay separately accessible');
    }
  }
  assert.deepEqual(part, before, 'control layout must not alter actual tips, placement or saved data');
  assert.deepEqual(leadControlLayout(part, component, zoom), layout, 'layout is deterministic');
  return layout;
}

test('separated lead controls retain their exact positions when the full hit circles clear the body', () => {
  const { part, component } = fixture([{ x: -30, y: 10 }, { x: 70, y: 10 }]);
  for (const control of verifyLayout(part, component, 1)) assert.equal(control.display, control.point);
});

test('BPW34 controls reveal its complete body at low zoom without moving its physical contacts', () => {
  const component = componentById.get('market-bpw34'), profile = mountingFor(component.id);
  const part = { id: 'photodiode', componentId: component.id, x: 145.125, y: -36.875,
    scale: mountingScale(component, componentById.get('breadboard')),
    leads: profile.contacts.map(contact => ({ pinId: contact.pinId,
      x: profile.origin.x + contact.x * profile.unitsPerMm,
      y: profile.origin.y + contact.y * profile.unitsPerMm })) };
  for (const zoom of [.25, .4, .5, 1, 1.4]) {
    const layout = verifyLayout(part, component, zoom);
    assert.ok(layout.every(control => control.display !== control.point));
    assert.ok(layout.every(control => distance(control.point, control.display) * zoom < 13), 'leaders stay short beside the optical body');
  }
});

test('crowded and coincident tips spread around the body through rotations, independent scales and zoom', () => {
  for (const rotation of [0, 90, 180, 270]) for (const zoom of [.25, .4, 1, 2]) {
    for (const points of [
      [{ x: 18, y: 21 }, { x: 20, y: 21 }, { x: 22, y: 21 }],
      Array.from({ length: 4 }, () => ({ x: 20, y: 10 })),
      [{ x: -90, y: 10 }, { x: 18, y: 21 }, { x: 20, y: 21 }, { x: 22, y: 21 }],
    ]) {
      const { part, component } = fixture(points, { rotation, scale: { x: 1.2, y: .7 } });
      const layout = verifyLayout(part, component, zoom);
      if (points[0].x === -90) assert.equal(layout[0].display, layout[0].point, 'an unaffected remote lead keeps its normal position');
    }
  }
});

test('a crowded cluster away from the body spreads without relocating all controls back to the package', () => {
  const { part, component } = fixture([{ x: -80, y: 10 }, { x: -79, y: 10 }, { x: -78, y: 10 }]);
  const layout = verifyLayout(part, component, 1);
  assert.ok(layout.every(control => distance(control.point, control.display) <= LEAD_HANDLE_SPACING * 2));
});

test('rendered displaced controls advertise display centers and noninteractive leaders while retaining lifecycle cleanup', () => {
  const component = componentById.get('market-bpw34'), profile = mountingFor(component.id);
  const part = { id: 'photodiode', componentId: component.id, x: 10, y: 20,
    scale: mountingScale(component, componentById.get('breadboard')),
    leads: profile.contacts.map(contact => ({ pinId: contact.pinId,
      x: profile.origin.x + contact.x * profile.unitsPerMm,
      y: profile.origin.y + contact.y * profile.unitsPerMm })) };
  const cleanups = [], nodes = [];
  const document = { defaultView: { matchMedia: () => ({ matches: false }) },
    createElementNS() {
      const node = { ownerDocument: document, setAttribute() {}, remove() { this.removed = true; } };
      nodes.push(node);
      return node;
    } };
  const state = { geometry: { parts: new Map([[part.id, { part }]]), wires: new Map() },
    selection: { type: 'part', id: part.id }, selections: [{ type: 'part', id: part.id }], scale: .4 };
  const controls = new CanvasControls({ svg: { ownerDocument: document, append() {} },
    scope: { on() {}, cleanup(callback) { cleanups.push(callback); } }, getState: () => state });
  controls.setPartEnabled(true);
  const markup = controls.leadNode.innerHTML;
  for (const { pin, point, display } of leadControlLayout(part, component, state.scale)) {
    assert.ok(markup.includes(`data-pin="${pin.id}" data-hit-x="${display.x}" data-hit-y="${display.y}"`));
    assert.ok(markup.includes(`x1="${point.x}" y1="${point.y}" x2="${display.x}" y2="${display.y}"`));
  }
  assert.match(markup, /<line[^>]*pointer-events="none"/);
  controls.setPartEnabled(false);
  assert.equal(controls.leadNode.innerHTML, '');
  for (const cleanup of cleanups) cleanup();
  assert.ok(nodes.every(node => node.removed));
});
