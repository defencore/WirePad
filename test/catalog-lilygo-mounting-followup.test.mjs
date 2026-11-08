import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { partArt } from '../src/canvas/part-art.js';
import { contactLabelLayout } from '../src/canvas/contact-labels.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointOnPart, pointInsidePartBody } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { componentForPart } from '../src/model/part-component.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { instancePins } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const cases = [
  ['lilygo-t-qt-pro-v1-3', 14, 15.24, 6],
  ['lilygo-t-eth-lite-esp32-v1-0', 30, 25.4, 0],
  ['lilygo-t-display-s3-amoled-original', 28, 22.86, 0],
  ['lilygo-t-display-s3-amoled-plus-v1-0', 28, 22.86, 0],
  ['lilygo-t3-s3-v1-3-sx1262', 28, 22.86, 0],
];
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);
function seat(id, rotation) {
  const host = { id: 'bb', componentId: 'breadboard', x: 30.5, y: 40.25, rotation,
    scale: { x: 1.1, y: .9 }, breadboard: { rows: 40, leftCells: 8, rightCells: 8 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }),
    () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation} suggested placement`);
  const part = editor.addPart(id, point, { mount: true, hostPartId: host.id });
  return { editor, part, host: editor.project.parts[0] };
}
test('LILYGO follow-up profiles contain complete source-backed strips and every auxiliary endpoint', () => {
  for (const [id, count, spacing, rearCount] of cases) {
    const component = componentById.get(id), profile = mountingFor(id);
    assert.equal(profile.contacts.length, count, id);
    assert.equal(profile.view.pins.length, component.pins.length, id);
    assert.deepEqual(new Set(profile.view.pins.map(pin => pin.pinId)), new Set(component.pins.map(pin => pin.id)));
    assert.equal(profile.view.pins.filter(pin => pin.face === 'rear').length, rearCount, id);
    const first = profile.contacts.slice(0, count / 2), second = profile.contacts.slice(count / 2);
    close(second[0].x - first[0].x, spacing);
    for (const row of [first, second]) for (let i = 1; i < row.length; i++) close(row[i].y - row[i - 1].y, 2.54);
    assert.match(profile.source.url, /^https:\/\/github.com\/Xinyuan-LilyGO\//);
    assert.equal(profile.calibration.toleranceMm, undefined);
  }
});
test('new LILYGO views are explicit and do not reinterpret existing raw or scale-only projects', () => {
  for (const [id] of cases) for (const scale of [undefined, { x: .7, y: .8 }]) {
    const component = componentById.get(id), part = { id: 'old', componentId: id, x: 12, y: 23, ...(scale ? { scale } : {}) };
    assert.equal(instancePins(part, component), component.pins);
    assert.equal(partArt(part, component), componentArt(component));
    assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [part] })).parts, [part]);
  }
});
test('all reviewed LILYGO strips fit every transformed host orientation and survive save and undo', () => {
  for (const [id, count] of cases) for (const rotation of [0, 90, 180, 270]) {
    const { editor, part, host } = seat(id, rotation), component = componentById.get(id);
    assert.equal(part.view, 'breadboard');
    assert.equal(attachmentError(editor.project, part), null, id);
    assert.equal(part.attachment.contacts.length, count, id);
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
test('mounted LILYGO drawings use captured hardware and physical labels without composite rear captions', () => {
  for (const [id] of cases) {
    const component = componentById.get(id), part = { id: 'view', componentId: id, x: 0, y: 0, view: 'breadboard' };
    const plain = partArt(part, component, { labels: false }), labeled = partArt(part, component);
    assert.ok(labeled.length > plain.length, id);
    assert.match(labeled, /<title>/);
    const profile = mountingFor(id);
    const resolved = { ...component, pins: profile.view.pins.map(pin => ({ ...component.pins.find(p => p.id === pin.pinId), ...pin })) };
    assert.equal(profile.renderMounted(resolved, false), profile.renderMounted(component, false), id);
  }
});

test('source LILYGO contacts keep strip continuity, labels and the adjacent outer breadboard column clear', () => {
  for (const [id] of cases) {
    const { editor, part, host } = seat(id, 0), component = componentById.get(id), profile = mountingFor(id);
    for (const { pinId, hostPinId } of part.attachment.contacts) assert.ok(traceNet(editor.project, { partId: part.id, pinId })
      .endpoints.has(endpointKey({ partId: host.id, pinId: hostPinId })), `${id}/${pinId}`);
    const physical = { ...component, pins: instancePins(part, component) }, labels = contactLabelLayout(physical, profile);
    for (const contact of profile.contacts) assert.ok(labels.some(label => label.pinId === contact.pinId), `${id}/${contact.pinId}`);
    const left = profile.view.pins.find(pin => pin.pinId === profile.contacts[0].pinId);
    assert.equal(pointInsidePartBody(part, pointOnPart(part, { x: left.x - 2.54 * profile.calibration.unitsPerMm, y: left.y }), component), false, id);
  }
});
test('T3-S3 source-verified supply and UART commoning applies only to the explicit new view', () => {
  const id = 'lilygo-t3-s3-v1-3-sx1262', component = componentById.get(id), profile = mountingFor(id);
  assert.equal(component.internalConnections, undefined);
  const raw = { id: 'old', componentId: id, x: 0, y: 0 }, oldProject = { ...newProject(), parts: [raw] };
  const { editor, part } = seat(id, 0);
  for (const group of profile.view.connections) {
    const [first, ...rest] = group;
    for (const second of rest) {
      assert.equal(traceNet(oldProject, { partId: raw.id, pinId: first }).endpoints
        .has(endpointKey({ partId: raw.id, pinId: second })), false);
      assert.ok(traceNet(editor.project, { partId: part.id, pinId: first }).endpoints
        .has(endpointKey({ partId: part.id, pinId: second })));
    }
  }
});
