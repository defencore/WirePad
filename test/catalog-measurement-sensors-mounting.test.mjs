import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import references from '../src/catalog/data/radio-followup/measurement-sensors.js';
import { partArt } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointOnPart } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-measurement-sensors-mounting-2026-11-08.json', import.meta.url)));
const ids = Object.keys(references);
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seated(id, rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 20.5, y: 40.25, rotation,
    scale: { x: .9, y: 1.15 }, breadboard: { rows: 40, leftCells: 20, rightCells: 20 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }), () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation}`);
  const part = editor.addPart(id, point, { mount: true, hostPartId: host.id });
  return { host, editor, part };
}

test('measurement audit retains all 24 endpoints and activates only complete reviewed banks', () => {
  assert.equal(audit.entries.length, 3);
  assert.deepEqual(audit.entries.map(entry => entry.id).sort(), ids.toSorted());
  assert.equal(audit.summary.retainedPins, 24);
  assert.equal(audit.summary.insertedLeads, 22);
  const counts = [5, 7, 10];
  audit.entries.forEach((entry, index) => {
    const profile = mountingFor(entry.id), component = componentById.get(entry.id);
    assert.equal(entry.status, 'enabled');
    assert.deepEqual(entry.contacts, profile.contacts);
    assert.equal(profile.contacts.length, counts[index]);
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId).sort(), component.pins.map(pin => pin.id).sort());
    assert.equal(profile.view.pins.length, component.pins.length);
    assert.match(references[entry.id].provenance.boardSha256, /^[a-f0-9]{64}$/);
    assert.ok(entry.sourceReferences.length >= 3);
  });
  const scd = references['adafruit-scd40-5187'];
  assert.match(scd.source.url, /Adafruit%20SCD-41\.brd$/);
  assert.match(scd.note, /SCD-40/);
  assert.match(componentById.get('adafruit-scd40-5187').name, /SCD-40/);
  assert.match(references['adafruit-pmsa003i-4632'].artwork, /capsule facing up/);
  const hx = mountingFor('sparkfun-hx711-13879');
  assert.equal(hx.contacts.some(pin => pin.pinId.startsWith('b-')), false);
  for (const pinId of ['b-plus', 'b-minus']) assert.ok(hx.view.pins.some(pin => pin.pinId === pinId));
  close(hx.contacts.find(pin => pin.pinId === 'exc-plus').x, -13.97);
  close(hx.contacts.find(pin => pin.pinId === 'vdd').x, 13.97);
});

test('rounded source corners reserve exactly the material encountered by every nominal grid hole', () => {
  for (const id of ['adafruit-scd40-5187', 'adafruit-pmsa003i-4632']) {
    const ref = references[id], { width, height } = ref.board, radius = 2.54;
    const contains = (region, x, y) => x >= region.x - 1e-7 && x <= region.x + region.width + 1e-7 &&
      y >= region.y - 1e-7 && y <= region.y + region.height + 1e-7;
    const inside = (x, y) => {
      if (Math.abs(x) > width / 2 + 1e-7 || Math.abs(y) > height / 2 + 1e-7) return false;
      if (id.includes('pmsa003i') && y < 0) return true;
      const dx = Math.max(0, Math.abs(x) - (width / 2 - radius));
      const dy = Math.max(0, Math.abs(y) - (height / 2 - radius));
      return dx * dx + dy * dy <= radius * radius + 1e-7;
    };
    const first = ref.contacts[0];
    for (let ix = -20; ix <= 20; ix++) for (let iy = -25; iy <= 25; iy++) {
      const x = first.x + ix * 2.54, y = first.y + iy * 2.54;
      assert.equal(ref.bodyRegions.some(region => contains(region, x, y)), inside(x, y), `${id}/${x}/${y}`);
    }
    assert.equal(ref.bodyRegions.some(region => contains(region, -width / 2, height / 2)), false);
  }
});

test('all sensor lead attachments survive host transforms and project history without canonical geometry changes', () => {
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const { host, editor, part } = seated(id, rotation), component = componentById.get(id), profile = mountingFor(id);
    assert.equal(part.view, 'breadboard');
    assert.equal(attachmentError(editor.project, part), null);
    assert.equal(part.attachment.contacts.length, profile.contacts.length);
    const pins = instancePins(part, component), hostPins = componentForPart(host).pins;
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, pins.find(pin => pin.id === pinId));
      const hole = pointOnPart(host, hostPins.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, mountingTolerance(part, host)); close(lead.y, hole.y, mountingTolerance(part, host));
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.step('undo'); assert.equal(editor.project.parts.length, 1);
    editor.step('redo'); assert.deepEqual(editor.project.parts[1], part);
    editor.commit(editor.placementProject(part.id, { x: 3200, y: 2400 }));
    assert.equal(editor.project.parts[1].attachment, undefined);
    assert.deepEqual(editor.project.parts[1].scale, part.scale);
  }
});

test('HX711 source-verified ground aliases activate only for the explicit fitted view', () => {
  const id = 'sparkfun-hx711-13879', { host, editor, part } = seated(id);
  const profile = mountingFor(id), group = ['exc-minus', 'shield', 'gnd'];
  assert.deepEqual(profile.view.connections, [group]);
  assert.match(profile.view.connectionSource.url, /SparkFun_HX711_Load_Cell\.sch$/);
  const raw = { id: 'raw', componentId: id, x: 0, y: 0 };
  const rawProject = { ...newProject(), parts: [raw] };
  const trace = traceNet(editor.project, { partId: part.id, pinId: 'gnd' });
  for (const pinId of group) {
    assert.equal(trace.endpoints.has(endpointKey({ partId: part.id, pinId })), true);
    const contact = part.attachment.contacts.find(contact => contact.pinId === pinId);
    assert.equal(trace.endpoints.has(endpointKey({ partId: host.id, pinId: contact.hostPinId })), true);
  }
  for (const pinId of ['vdd', 'vcc', 'exc-plus', 'b-plus', 'b-minus']) {
    assert.equal(trace.endpoints.has(endpointKey({ partId: part.id, pinId })), false);
  }
  assert.equal(traceNet(rawProject, { partId: raw.id, pinId: 'gnd' }).endpoints
    .has(endpointKey({ partId: raw.id, pinId: 'shield' })), false);
});

test('old raw and scale-only drawings stay untouched while physical rendering resolves coordinates exactly once', () => {
  for (const id of ids) {
    const component = componentById.get(id), profile = mountingFor(id);
    for (const scale of [undefined, { x: .75, y: .75 }]) {
      const part = { id: 'old', componentId: id, x: 25, y: 40, ...(scale ? { scale } : {}) };
      assert.equal(instancePins(part, component), component.pins);
      assert.equal(partArt(part, component), componentArt(component));
      assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [part] })).parts, [part]);
    }
    const part = { id: 'new', componentId: id, x: 0, y: 0, view: 'breadboard' };
    const physical = { ...component, pins: instancePins(part, component) };
    assert.equal(profile.renderMounted(physical), profile.renderMounted(component));
    for (const labels of [false, true]) assert.doesNotMatch(partArt(part, component, { labels }), /NaN|undefined|Infinity/);
  }
});
