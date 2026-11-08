import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentArt, componentById, configurationFor, mountingFor } from '../src/catalog/index.js';
import { configurationMarkup } from '../src/ui/inspector/configuration.js';
import { partMarkup } from '../src/canvas/markup.js';
import { partArt, usesCompactBoardView } from '../src/canvas/part-art.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { breadboardFeedback } from '../src/canvas/breadboard-feedback.js';
import { pointOnPart } from '../src/geometry/parts.js';
import { componentForPart } from '../src/model/part-component.js';
import { mountingScale } from '../src/model/mounting.js';

function fixture() {
  const host = { id: 'host', componentId: 'breadboard', x: 0, y: 0,
    breadboard: { leftCells: 10, rightCells: 10 } };
  const component = componentById.get('esp32-c6-devkitm-1'), hostComponent = componentForPart(host);
  const profile = mountingFor(component.id);
  const part = { id: 'c6', componentId: component.id, x: 0, y: 0,
    scale: mountingScale(component, hostComponent) };
  const target = pointOnPart(host, hostComponent.pins.find(pin => pin.id === 'o15'));
  const first = component.pins.find(pin => pin.id === profile.contacts[0].pinId);
  const origin = pointOnPart(part, first);
  part.x = target.x - origin.x;
  part.y = target.y - origin.y;
  const holes = new Map(hostComponent.pins.map(pin => {
    const point = pointOnPart(host, pin);
    return [`${point.x.toFixed(5)},${point.y.toFixed(5)}`, pin.id];
  }));
  part.attachment = { hostPartId: host.id, contacts: profile.contacts.map(({ pinId }) => {
    const point = pointOnPart(part, component.pins.find(pin => pin.id === pinId));
    return { pinId, hostPinId: holes.get(`${point.x.toFixed(5)},${point.y.toFixed(5)}`) };
  }) };
  assert.ok(part.attachment.contacts.every(contact => contact.hostPinId));
  return { component, profile, part, project: { version: 2, title: 'C6 clearance', parts: [host, part], wires: [] } };
}

test('breadboard Inspector uses the catalog configuration bounds, including fifty terminal cells', () => {
  const component = componentById.get('breadboard');
  const { limits } = configurationFor(component.id);
  for (const cells of [11, 15, limits.cells.max]) {
    const markup = configurationMarkup({ componentId: component.id,
      breadboard: { leftCells: cells, rightCells: cells } }, component);
    for (const name of ['leftCells', 'rightCells']) assert.ok(markup.includes(
      `name="${name}" min="${limits.cells.min}" max="${limits.cells.max}" step="1" value="${cells}"`));
    assert.ok(markup.includes(`name="rows" min="${limits.rows.min}" max="${limits.rows.max}"`));
    assert.ok(markup.includes(`${limits.cells.min}–${limits.cells.max} cells per side`));
    assert.match(markup, /Connected parts keep their electrical lines/);
    assert.equal((markup.match(/<option value=/g) ?? []).length, (limits.rails.max - limits.rails.min + 1) * 4);
  }
});

test('compact devboard labels remain on the PCB while automatic captions clear nearby holes', () => {
  const { component, profile, part } = fixture();
  const markup = partMarkup(part, component, new Set(), true);
  assert.match(markup, /display="none" aria-hidden="true"[^>]*data-part-region="caption"/);
  assert.ok(markup.includes(`class="part-focus" x="${profile.body.x - 1.5}" y="${profile.body.y - 1.5}" width="${profile.body.width + 3}"`));
  assert.match(partArt(part, component), /class="contact-labels" pointer-events="none"/);
  assert.match(partArt(part, component), /data-contact-label="j1-1"/);
  const custom = partMarkup({ ...part, label: 'Sensor controller' }, component, new Set(), true);
  assert.doesNotMatch(custom, /display="none" aria-hidden="true"/);
  assert.match(custom, /class="part-body breadboard-part-caption"/);
  assert.match(custom, />Sensor controller<\/text>/);
  const { attachment, ...loose } = part;
  assert.equal(partArt(loose, component), partArt(part, component));
  assert.match(partMarkup(loose, component, new Set(), true), /display="none" aria-hidden="true"[^>]*data-part-region="caption"/);
});

test('seated C6 hides its actual PCB and USB sockets while annotation margins and antenna wings remain free', () => {
  const { project } = fixture();
  const covered = resolveDrawing(project).parts.get('host').covered;
  for (const id of ['l12', 'm12', 'n12', 'o12', 'f12', 'g12', 'h12', 'i12', 'j12', 'p12', 'q12', 'r12', 's12', 't12']) {
    assert.equal(covered.has(id), false, `${id} is beside the narrow antenna or outside the physical board`);
  }
  assert.ok(covered.has('o20'), 'A socket inside the PCB must remain hidden');
  assert.ok(covered.size < 200, 'Annotation margins must not extend the mask to the full SVG frame');
});

test('multi-letter breadboard columns highlight their full terminal conductor', () => {
  const host = { id: 'wide', componentId: 'breadboard', x: 0, y: 0,
    breadboard: { rows: 2, leftCells: 50, rightCells: 50 } };
  const project = { version: 2, title: 'Wide terminal strip', parts: [host], wires: [] };
  const feedback = breadboardFeedback(project, resolveDrawing(project), { partId: host.id, pinId: 'aa1' });
  assert.equal(feedback.points.length, 50);
  assert.match(feedback.label, /^AA1 · F1–CV1 · Free hole$/);
  const nextRow = pointOnPart(host, componentForPart(host).pins.find(pin => pin.id === 'aa2'));
  assert.equal(feedback.points.some(point => point.x === nextRow.x && point.y === nextRow.y), false);
});

test('scaled source modules use their physical front view through seating, detachment and saved-project rendering', () => {
  const component = componentById.get('adafruit-module-5832'), profile = mountingFor(component.id);
  const raw = { id: 'sensor', componentId: component.id, x: 0, y: 0 };
  const scaled = { ...raw, scale: { x: 1, y: 1 } };
  const mounted = { ...scaled, attachment: { hostPartId: 'host', contacts: [] } };
  assert.match(componentArt(component), /UNDERSIDE BELOW · MIRRORED/);
  assert.equal(partArt(raw, component), componentArt(component));
  assert.equal(usesCompactBoardView(raw, component), false);
  assert.equal(usesCompactBoardView(scaled, component), true);
  const art = partArt(scaled, component);
  assert.ok(art.includes(profile.renderMounted(component, false)));
  assert.doesNotMatch(art, /UNDERSIDE BELOW · MIRRORED|COMPONENT-SIDE CONTACT VIEW|SEPARATE MIRRORED UNDERSIDE/);
  assert.equal(partArt(mounted, component), art);
  assert.equal(partArt(JSON.parse(JSON.stringify(scaled)), component), art);
  assert.match(partMarkup(scaled, component, new Set(), true), /display="none" aria-hidden="true"[^>]*data-part-region="caption"/);
  assert.ok(profile.contacts.length < component.pins.length, 'STEMMA connector contacts remain outside the reviewed male header');
  assert.ok(profile.contacts.every(contact => contact.pinId.startsWith('jp2-')));
});
