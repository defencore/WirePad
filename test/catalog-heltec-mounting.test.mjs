import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { partArt } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { partBodyBounds, partBounds, pointInsidePartBody, pointOnPart } from '../src/geometry/parts.js';
import { componentForPart } from '../src/model/part-component.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { instancePins } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const ids = ['heltec-v3', 'heltec-v4', 'heltec-v4-3-r2', 'heltec-v4-3-r8'];
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seated(componentId, rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 30.5, y: 40.25, rotation,
    scale: { x: 1.1, y: .9 }, breadboard: { rows: 40, leftCells: 8, rightCells: 8 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }),
    () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(componentId, host.id);
  assert.ok(point, `${componentId}/${rotation}`);
  const part = editor.addPart(componentId, point, { mount: true, hostPartId: host.id });
  return { editor, part, host: editor.project.parts[0] };
}

test('Heltec profiles retain every terminal while inserting both complete manufacturer header strips', () => {
  for (const id of ids) {
    const component = componentById.get(id), profile = mountingFor(id);
    assert.equal(profile.type, 'breadboard-module', id);
    assert.equal(profile.contacts.length, 36, id);
    assert.equal(profile.pitch, 2.54);
    assert.match(profile.source.url, /^https:\/\/(?:resource\.heltec\.cn|wiki\.heltec\.org|heltec\.org)\//);
    assert.deepEqual(new Set(profile.view.pins.map(pin => pin.pinId)), new Set(component.pins.map(pin => pin.id)));
    const rows = ['J2.', 'J3.'].map(prefix => profile.contacts.filter(contact =>
      component.pins.find(pin => pin.id === contact.pinId).number.startsWith(prefix)));
    assert.deepEqual(rows.map(row => row.length), [18, 18]);
    close(Math.abs(rows[0][0].x - rows[1][0].x), 22.86);
    for (const row of rows) for (let index = 1; index < row.length; index++) close(row[index].y - row[index - 1].y, 2.54);
    const auxiliary = component.pins.filter(pin => pin.number.startsWith('X'));
    assert.equal(auxiliary.length, id === 'heltec-v3' ? 0 : 4);
    for (const pin of auxiliary) {
      assert.equal(profile.contacts.some(contact => contact.pinId === pin.id), false);
      assert.notEqual(profile.view.pins.find(contact => contact.pinId === pin.id).face, 'rear');
    }
  }
});

test('Heltec source views do not reinterpret old raw or scale-only saved instances', () => {
  for (const id of ids) for (const scale of [undefined, { x: .7, y: .8 }]) {
    const component = componentById.get(id);
    const part = { id: 'old', componentId: id, x: 12, y: 23, ...(scale ? { scale } : {}) };
    assert.equal(instancePins(part, component), component.pins);
    assert.equal(partArt(part, component), componentArt(component));
    assert.deepEqual(partBodyBounds(part), partBounds(part));
    assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [part] })).parts, [part]);
    for (const pin of component.pins.filter(pin => pin.number.startsWith('J'))) {
      close(pin.x, pin.number.startsWith('J2.') ? 11 : 131);
      close(pin.y, 20 + (Number(pin.number.split('.')[1]) - 1) * 15);
    }
  }
});

test('all four Heltec revisions seat at every host angle, retain all contacts on save and undo detachment', () => {
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const { editor, part, host } = seated(id, rotation), component = componentById.get(id);
    assert.equal(part.view, 'breadboard');
    assert.equal(attachmentError(editor.project, part), null);
    assert.equal(part.attachment.contacts.length, 36);
    const tolerance = mountingTolerance(part, host), holes = componentForPart(host).pins;
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const actual = pointOnPart(part, component.pins.find(pin => pin.id === pinId));
      const expected = pointOnPart(host, holes.find(pin => pin.id === hostPinId));
      close(actual.x, expected.x, tolerance); close(actual.y, expected.y, tolerance);
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    const before = editor.project;
    editor.select('part', part.id); editor.rotatePart();
    assert.equal(editor.part.attachment, undefined);
    assert.equal(editor.part.view, 'breadboard');
    editor.step('undo'); assert.deepEqual(editor.project, before);
  }
});

test('the Heltec antenna tail leaves the next outer header row usable', () => {
  for (const id of ids) {
    const { part } = seated(id), component = componentById.get(id), profile = mountingFor(id);
    for (const pinId of ['gpio19', 'gpio7']) {
      const last = profile.view.pins.find(pin => pin.pinId === pinId);
      const below = pointOnPart(part, { x: last.x, y: last.y + 2.54 * profile.calibration.unitsPerMm });
      assert.equal(pointInsidePartBody(part, below, component), false, `${id}/${pinId}`);
    }
  }
});

test('source-verified repeated Heltec supply terminals connect only in the explicit assembly view', () => {
  const groups = [['gnd', 'gnd-2'], ['3v3', '3v3-2'], ['ve', 've-2']];
  for (const id of ids) {
    const component = componentById.get(id), profile = mountingFor(id);
    assert.equal(component.internalConnections, undefined);
    assert.deepEqual(profile.view.connections, groups);
    assert.match(profile.view.connectionSource.url, /Schematic\/|Schematic_Diagram/);
    const raw = { id: 'raw', componentId: id, x: 0, y: 0 };
    const rawProject = { ...newProject(), parts: [raw] };
    const { editor, part, host } = seated(id);
    for (const [first, second] of groups) {
      assert.equal(traceNet(rawProject, { partId: raw.id, pinId: first }).endpoints
        .has(endpointKey({ partId: raw.id, pinId: second })), false);
      const trace = traceNet(editor.project, { partId: part.id, pinId: first });
      assert.equal(trace.endpoints.has(endpointKey({ partId: part.id, pinId: second })), true);
      const contact = part.attachment.contacts.find(contact => contact.pinId === second);
      assert.equal(trace.endpoints.has(endpointKey({ partId: host.id, pinId: contact.hostPinId })), true);
    }
  }
});
