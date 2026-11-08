import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import facts from '../src/catalog/data/mounting-followup/mikroe-legacy.js';
import { partArt } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointInsidePartBody, pointOnPart } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-legacy-module-mounting-followup-2026-11-08.json', import.meta.url)));
const sourceContours = new Map([
  ['mikroe-buzz-click-945', 'MIKROE-945'], ['mikroe-button-r-click-1901', 'MIKROE-1901'],
  ['mikroe-light-click-1424', 'MIKROE-1424'], ['arduino-modulino-knob-abx00107', 'modulino'],
  ['arduino-modulino-buttons-abx00110', 'modulino'], ['waveshare-bmm150-magnetometer', 'bmm'],
]);
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seat(id, rotation) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
    scale: { x: 1.2, y: .8 }, breadboard: { rows: 40, leftCells: 20, rightCells: 20 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }), () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation}`);
  return { host, editor, part: editor.addPart(id, point, { mount: true, hostPartId: host.id }) };
}

function polygonContains(x, y, points) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const a = points[i], b = points[j];
    if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
function roundedContains(x, y, width, height, radius) {
  const dx = Math.max(Math.abs(x) - width / 2 + radius, 0), dy = Math.max(Math.abs(y) - height / 2 + radius, 0);
  return Math.abs(x) < width / 2 && Math.abs(y) < height / 2 && dx * dx + dy * dy < radius * radius;
}

test('the legacy audit accounts for every assigned module and distinguishes evidence gaps from incompatible connectors', () => {
  assert.equal(audit.entries.length, 23);
  assert.equal(new Set(audit.entries.map(entry => entry.id)).size, 23);
  assert.equal(audit.summary.enabled, audit.entries.filter(entry => entry.status === 'enabled').length);
  for (const entry of audit.entries) {
    assert.equal(componentById.get(entry.id).pins.length, entry.canonicalPinCount);
    assert.equal(Boolean(mountingFor(entry.id)), entry.status === 'enabled', entry.id);
    assert.ok(entry.reason.trim());
  }
  assert.match(audit.entries.find(entry => entry.id === 'raspberry-pi-debug-probe-rev2').reason, /J4/);
  assert.match(audit.entries.find(entry => entry.id === 'interlink-fsr402-44-29103').reason, /30-81794/);
});

test('complete Click and Modulino strips and the BMM150 seven-contact bank retain all 130 canonical endpoints', () => {
  let count = 0;
  for (const [id, expected] of [
    ['mikroe-buzz-click-945', 16], ['mikroe-button-r-click-1901', 16], ['mikroe-light-click-1424', 16],
    ['arduino-modulino-knob-abx00107', 14], ['arduino-modulino-buttons-abx00110', 14], ['waveshare-bmm150-magnetometer', 7],
  ]) {
    const profile = mountingFor(id), component = componentById.get(id);
    assert.equal(profile.contacts.length, expected, id);
    assert.deepEqual(profile.view.pins.map(pin => pin.pinId).sort(), component.pins.map(pin => pin.id).sort(), id);
    assert.deepEqual(audit.entries.find(entry => entry.id === id).contacts, profile.contacts);
    count += component.pins.length;
  }
  assert.equal(count, 130);
});

test('all source contour grid holes agree with the material masks, including notches and rounded corners', () => {
  assert.equal(pointInsidePartBody({ id: 'bmm', componentId: 'waveshare-bmm150-magnetometer', x: 0, y: 0,
    view: 'breadboard' }, { x: 20.5, y: 20.5 }), false);
  for (const [id, kind] of sourceContours) {
    const profile = mountingFor(id), first = profile.contacts[0], { origin, unitsPerMm: scale } = profile.calibration;
    const part = { id, componentId: id, x: 0, y: 0, view: 'breadboard' };
    for (let i = -25; i <= 25; i++) for (let j = -25; j <= 25; j++) {
      const x = first.x + i * 2.54, y = first.y + j * 2.54;
      let expected;
      if (kind === 'modulino') expected = roundedContains(x, y, 25.36, 41, 4.5);
      else if (kind === 'bmm') expected = roundedContains(x, y, 29.0138993, 20.01401382, 1.25);
      else {
        const f = facts[kind];
        const vertices = [...f.board.outline.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)]
          .map(match => [Number(match[1]) + f.center[0] - 11.43, Number(match[2]) + 10.4775 - f.center[1]]);
        expected = polygonContains(x, y, vertices);
      }
      assert.equal(pointInsidePartBody(part, { x: origin.x + x * scale, y: origin.y + y * scale }), expected, `${id}/${i}/${j}`);
    }
  }
});

test('all legacy leads fit through host transforms, preserve continuity and survive save, detachment and undo', () => {
  for (const id of sourceContours.keys()) for (const rotation of [0, 90, 180, 270]) {
    const { host, editor, part } = seat(id, rotation), profile = mountingFor(id), component = componentById.get(id);
    assert.equal(attachmentError(editor.project, part), null, id);
    assert.equal(part.attachment.contacts.length, profile.contacts.length);
    const pins = instancePins(part, component), hostPins = componentForPart(host).pins;
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, pins.find(pin => pin.id === pinId)), hole = pointOnPart(host, hostPins.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, mountingTolerance(part, host)); close(lead.y, hole.y, mountingTolerance(part, host));
      assert.ok(traceNet(editor.project, { partId: part.id, pinId }).endpoints.has(endpointKey({ partId: host.id, pinId: hostPinId })));
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.commit(editor.placementProject(part.id, { x: 3500, y: 2200 }));
    assert.equal(editor.project.parts[1].attachment, undefined);
    assert.equal(editor.project.parts[1].view, 'breadboard');
    editor.step('undo'); assert.deepEqual(editor.project.parts[1], part);
  }
});

test('rear fixture pads and cable tails remain wireable while old scale-only instances keep their original drawings', () => {
  for (const id of sourceContours.keys()) {
    const component = componentById.get(id), profile = mountingFor(id);
    for (const scale of [undefined, { x: .8, y: .8 }]) {
      const raw = { id: 'old', componentId: id, x: 20, y: 40, ...(scale ? { scale } : {}) };
      assert.equal(instancePins(raw, component), component.pins);
      assert.equal(partArt(raw, component), componentArt(component));
      assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [raw] })).parts, [raw]);
    }
    const part = { id: 'new', componentId: id, x: 0, y: 0, view: 'breadboard' };
    const resolved = { ...component, pins: instancePins(part, component) };
    assert.equal(profile.renderMounted(resolved), profile.renderMounted(component));
    for (const labels of [false, true]) assert.doesNotMatch(partArt(part, component, { labels }), /NaN|undefined|Infinity/);
    if (id.startsWith('arduino-modulino')) {
      const rear = profile.view.pins.filter(pin => pin.face === 'rear');
      assert.equal(rear.length, 15);
      assert.ok(rear.every(pin => !profile.contacts.some(contact => contact.pinId === pin.pinId)));
      assert.equal(profile.renderMounted(component).match(/data-rear-contact=/g).length, 15);
    }
  }
  const bmm = mountingFor('waveshare-bmm150-magnetometer');
  assert.equal(bmm.contacts.some(contact => contact.pinId === 'int'), false);
  assert.equal(bmm.view.pins.find(pin => pin.pinId === 'int').number, 'H1.1');
});
