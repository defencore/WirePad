import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import references from '../src/catalog/data/radio-followup/adafruit-sparkfun.js';
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

const audit = JSON.parse(await readFile(new URL('../docs/catalog-radio-diy-mounting-followup-2026-11-08.json', import.meta.url)));
const entries = audit.families.flatMap(family => family.entries);
const ids = Object.keys(references);
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seated(id, rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
    scale: { x: 1.2, y: .8 }, breadboard: { rows: 40, leftCells: 20, rightCells: 20 } };
  const history = new ProjectHistory({ ...newProject(), parts: [host] });
  const editor = new DiagramEditor(history, () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation}`);
  return { host, editor, part: editor.addPart(id, point, { mount: true, hostPartId: host.id }) };
}

test('the follow-up accounts for every pending standalone candidate without implying missing evidence is incompatibility', () => {
  assert.equal(entries.length, 33);
  assert.equal(new Set(entries.map(entry => entry.id)).size, entries.length);
  assert.equal(audit.summary.entries, entries.length);
  assert.equal(audit.summary.families, audit.families.length);
  assert.deepEqual(entries.filter(entry => entry.status === 'enabled').map(entry => entry.id).sort(), ids.toSorted());
  for (const entry of entries) {
    assert.ok(componentById.has(entry.id), entry.id);
    assert.ok(entry.reason.trim(), entry.id);
    assert.equal(Boolean(mountingFor(entry.id)), entry.status === 'enabled', entry.id);
  }
  assert.equal(entries.find(entry => entry.id === 'keyestudio-rc522-ks0067').status, 'pending-full-header-review');
  assert.match(entries.find(entry => entry.id === 'keyestudio-rc522-ks0067').reason, /IRQ/);
});

test('exact original header centers use complete banks and preserve all 56 published IDs', () => {
  const expected = {
    'adafruit-tmc2209-6121': [10, 'vdd', -11.43, 9.525, 'enable', 11.43, 9.525],
    'adafruit-pca9685-815': [6, 'gnd', -29.21, -6.477, 'vplus', -29.21, 6.223],
    'adafruit-max9814-1713': [5, 'gnd', 11.303, -4.8895, 'ar', 11.303, 5.2705],
    'adafruit-qt-rotary-4991': [6, 'int', -6.35, 10.16, 'vin', 6.35, 10.16],
    'sparkfun-openlog-13712': [6, 'grn', 6.35, 8.255, 'blk', -6.35, 8.255],
  };
  let retained = 0;
  for (const [id, [count, first, x1, y1, last, x2, y2]] of Object.entries(expected)) {
    const profile = mountingFor(id), component = componentById.get(id);
    assert.equal(profile.contacts.length, count, id);
    for (const [pinId, x, y] of [[first, x1, y1], [last, x2, y2]]) {
      const contact = profile.contacts.find(contact => contact.pinId === pinId);
      close(contact.x, x); close(contact.y, y);
    }
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId).sort(), component.pins.map(pin => pin.id).sort(), id);
    assert.equal(profile.view.pins.length, component.pins.length);
    retained += component.pins.length;
    assert.deepEqual(entries.find(entry => entry.id === id).contacts, profile.contacts);
    assert.match(references[id].provenance.boardSha256, /^[a-f0-9]{64}$/);
  }
  assert.equal(retained, 56);
});

test('seating validates every lead through transformed hosts, save, undo, redo and detachment', () => {
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const { host, editor, part } = seated(id, rotation), profile = mountingFor(id);
    assert.equal(attachmentError(editor.project, part), null, id);
    assert.equal(part.view, 'breadboard');
    assert.equal(part.attachment.contacts.length, profile.contacts.length);
    const component = componentById.get(id), hostComponent = componentForPart(host);
    const pins = instancePins(part, component), tolerance = mountingTolerance(part, host);
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, pins.find(pin => pin.id === pinId));
      const hole = pointOnPart(host, hostComponent.pins.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, tolerance); close(lead.y, hole.y, tolerance);
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.step('undo'); assert.equal(editor.project.parts.length, 1);
    editor.step('redo'); assert.deepEqual(editor.project.parts[1], part);
    editor.commit(editor.placementProject(part.id, { x: 3500, y: 2200 }));
    const detached = editor.project.parts[1];
    assert.equal(detached.attachment, undefined);
    assert.equal(detached.view, 'breadboard');
    assert.deepEqual(detached.scale, part.scale);
  }
});

test('view-only ground aliases connect the real fitted assembly and preserve old raw circuits', () => {
  for (const [id, [first, second]] of [
    ['adafruit-tmc2209-6121', ['motor-ground', 'logic-ground']],
    ['sparkfun-openlog-13712', ['gnd', 'blk']],
  ]) {
    const component = componentById.get(id), profile = mountingFor(id);
    assert.equal(component.internalConnections, undefined);
    assert.deepEqual(profile.view.connections, [[first, second]]);
    assert.match(profile.view.connectionSource.url, /\.sch$/);
    const raw = { id: 'raw', componentId: id, x: 0, y: 0 };
    assert.equal(traceNet({ ...newProject(), parts: [raw] }, { partId: raw.id, pinId: first })
      .endpoints.has(endpointKey({ partId: raw.id, pinId: second })), false);
    const { editor, part, host } = seated(id);
    const trace = traceNet(editor.project, { partId: part.id, pinId: first });
    assert.equal(trace.endpoints.has(endpointKey({ partId: part.id, pinId: second })), true);
    const inserted = part.attachment.contacts.find(contact => contact.pinId === second);
    assert.equal(trace.endpoints.has(endpointKey({ partId: host.id, pinId: inserted.hostPinId })), true);
  }
});

test('screw terminals stay rear projections and real opposite-face hardware is visible above the board', () => {
  for (const [id, rear] of [
    ['adafruit-tmc2209-6121', ['vm', 'motor-ground', 'b2', 'a2', 'a1', 'b1']],
    ['adafruit-pca9685-815', ['pwrin']],
  ]) for (const pinId of rear) {
    const profile = mountingFor(id);
    assert.equal(profile.view.pins.find(pin => pin.pinId === pinId).face, 'rear');
    assert.equal(profile.contacts.some(pin => pin.pinId === pinId), false);
    assert.ok(profile.renderMounted(componentById.get(id)).includes(`data-rear-contact="${pinId}"`));
  }
  assert.equal(references['adafruit-max9814-1713'].reverse, true);
  assert.match(references['adafruit-max9814-1713'].artwork, /r="4\.85"/);
  assert.equal(references['sparkfun-openlog-13712'].reverse, true);
  assert.match(references['sparkfun-openlog-13712'].artwork, /U3 microSD socket/);
  assert.match(mountingFor('adafruit-qt-rotary-4991').note, /bare #4991/);
});

test('old unactivated instances retain their artwork while explicit views transform source pins only once', () => {
  for (const id of ids) {
    const component = componentById.get(id), profile = mountingFor(id);
    for (const scale of [undefined, { x: .8, y: .8 }]) {
      const raw = { id: 'raw', componentId: id, x: 25, y: 30, ...(scale ? { scale } : {}) };
      assert.equal(instancePins(raw, component), component.pins);
      assert.equal(partArt(raw, component), componentArt(component));
      assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [raw] })).parts, [raw]);
    }
    const part = { id: 'new', componentId: id, x: 0, y: 0, view: 'breadboard' };
    const resolved = { ...component, pins: instancePins(part, component) };
    assert.equal(profile.renderMounted(resolved), profile.renderMounted(component));
    for (const labels of [false, true]) assert.doesNotMatch(partArt(part, component, { labels }), /NaN|undefined|Infinity/);
    const { origin, unitsPerMm } = profile.calibration;
    for (const contact of profile.contacts) {
      const pin = resolved.pins.find(pin => pin.id === contact.pinId);
      close(pin.x, origin.x + contact.x * unitsPerMm);
      close(pin.y, origin.y + contact.y * unitsPerMm);
    }
  }
});
