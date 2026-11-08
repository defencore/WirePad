import assert from 'node:assert/strict';
import { test } from 'node:test';
import { PlacementPreview } from '../src/canvas/placement-preview.js';
import { updatePart } from '../src/canvas/layers.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { drawingMarkup } from '../src/canvas/markup.js';
import { createScope } from '../src/shared/lifecycle.js';
import { componentForPart } from '../src/model/part-component.js';
import { partRotation, labelPosition } from '../src/geometry/parts.js';

function element() {
  return { attributes: new Map(), innerHTML: '',
    setAttribute(name, value) { this.attributes.set(name, String(value)); },
    removeAttribute(name) { this.attributes.delete(name); },
    remove() { this.removed = true; },
  };
}

const host = { id: 'host', componentId: 'breadboard', x: 0, y: 0 };
const child = { id: 'child', componentId: 'resistor', x: 60.25, y: 70.5, scale: { x: .5, y: 2 },
  attachment: { hostPartId: 'host', contacts: [{ pinId: '1', hostPinId: 'a1' }] } };
const project = { version: 2, title: 'Placement preview', parts: [host, child], wires: [] };

test('placement overlay follows physical host contacts and remains screen-sized when zooming', () => {
  const scope = createScope();
  let scale = 1;
  const svg = { ownerDocument: { createElementNS: element }, insertBefore(node) { this.layer = node; } };
  const preview = new PlacementPreview({ svg, before: null, scope, getScale: () => scale });
  preview.show({ part: child, project, ghost: true });
  assert.equal(svg.layer.attributes.get('pointer-events'), 'none');
  assert.equal(svg.layer.attributes.get('aria-hidden'), 'true');
  assert.match(svg.layer.innerHTML, /transform="translate\(60\.25 70\.5\)"/);
  assert.match(svg.layer.innerHTML, /scale\(0\.5 2\)/);
  assert.match(svg.layer.innerHTML, /<circle cx="96" cy="96" r="4"/);
  assert.match(svg.layer.innerHTML, /Fits breadboard · 1 contact/);
  scale = 2;
  preview.render();
  assert.match(svg.layer.innerHTML, /<circle cx="96" cy="96" r="2"/);
  preview.show();
  assert.equal(svg.layer.innerHTML, '');
  preview.show({ part: child, project });
  assert.doesNotMatch(svg.layer.innerHTML, /opacity="\.58"/);
  scope.destroy();
  assert.equal(svg.layer.removed, true);
  assert.equal(preview.state, null);
  preview.show({ part: child, project });
  assert.equal(preview.state, null);
});

test('changing only instance scale updates both artwork layers and the unscaled caption', () => {
  const part = { id: 'module', componentId: 'bme280', x: 0, y: 0, rotation: 0 };
  const component = componentForPart(part);
  const entry = { component, label: undefined, x: 0, y: 0, rotation: 0, scaleX: 1, scaleY: 1,
    body: element(), backgroundBody: element(), caption: element(), connected: new Set(), selected: false };
  const scaled = { ...part, scale: { x: 2, y: .5 } };
  updatePart(null, entry, { part: scaled, connected: new Set() }, false);
  assert.equal(entry.body.attributes.get('transform'), partRotation(scaled, component));
  assert.equal(entry.backgroundBody.attributes.get('transform'), partRotation(scaled, component));
  assert.equal(entry.caption.attributes.get('transform'), labelPosition(scaled, component));
  updatePart(null, entry, { part, connected: new Set() }, false);
  assert.equal(entry.body.attributes.get('transform'), `rotate(0 ${component.width / 2} ${component.height / 2})`);
  assert.equal(entry.backgroundBody.attributes.get('transform'), entry.body.attributes.get('transform'));
});

test('attached module leads and host holes both render as connected without synthetic wires', () => {
  const drawing = resolveDrawing(project);
  assert.deepEqual([...drawing.parts.get('child').connected], ['1']);
  assert.deepEqual([...drawing.parts.get('host').connected], ['a1']);
  assert.equal(drawing.wires.size, 0);
  assert.ok(drawing.parts.get('host').covered.has('a1'));
  assert.equal(drawing.parts.get('child').covered.size, 0);
});

test('covered host contact targets are restored immediately when a module detaches', () => {
  const part = { id: 'host', componentId: 'breadboard', x: 0, y: 0 };
  const pin = element();
  const entry = { component: componentForPart(part), x: 0, y: 0, rotation: undefined, scaleX: 1, scaleY: 1,
    connected: new Set(), covered: new Set(), selected: false, pins: new Map([['a1', pin]]) };
  updatePart(null, entry, { part, connected: new Set(), covered: new Set(['a1']) }, false);
  assert.equal(pin.attributes.get('display'), 'none');
  updatePart(null, entry, { part, connected: new Set(), covered: new Set() }, false);
  assert.equal(pin.attributes.has('display'), false);
});

test('masking a covered host contact preserves its wire route and keeps module contact dots in exports', () => {
  const wired = { ...project, wires: [{ id: 'wire', from: { partId: 'host', pinId: 'a1' },
    to: { partId: 'child', pinId: '2' }, color: '#123456' }] };
  const detached = { ...wired, parts: [host, { ...child, attachment: undefined }] };
  assert.equal(resolveDrawing(wired).wires.get('wire').geometry.path, resolveDrawing(detached).wires.get('wire').geometry.path);
  const markup = drawingMarkup(wired);
  assert.match(markup, /stroke="#123456"/);
  assert.equal([...markup.matchAll(/r="3" fill="#087a6f"/g)].length, 2);
});

test('unit instance scale preserves ordinary drawing markup byte for byte', () => {
  const plain = { version: 2, title: 'Ordinary drawing', parts: [{ id: 'part', componentId: 'bme280', x: 5, y: 8, rotation: 90 }], wires: [] };
  const unit = { ...plain, parts: plain.parts.map(part => ({ ...part, scale: { x: 1, y: 1 } })) };
  assert.equal(drawingMarkup(unit), drawingMarkup(plain));
});
