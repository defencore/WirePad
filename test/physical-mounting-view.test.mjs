import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { defineFamily } from '../src/catalog/registry.js';
import { drawingMarkup, partMarkup } from '../src/canvas/markup.js';
import { partArt, usesCompactBoardView } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { partCenter } from '../src/geometry/breadboard-targets.js';
import { endpointPositions, partBodyBounds, partBounds, pointOnPart } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance, sameContactNet } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const id = 'raspberry-pi-pico-2';
const near = (a, b, epsilon = 1e-7) => assert.ok(Math.abs(a - b) <= epsilon, `${a} != ${b}`);
const editorFor = project => new DiagramEditor(new ProjectHistory(project), () => {}, message => assert.fail(message));

function seated(rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation };
  const editor = editorFor({ ...newProject(), parts: [host] });
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, 'The reviewed Pico 2 headers must have a complete placement.');
  const part = editor.addPart(id, point, { mount: true, hostPartId: host.id });
  assert.ok(part.attachment);
  return { editor, host: editor.project.parts[0], part, component: componentById.get(id), profile: mountingFor(id) };
}

test('older unscaled and scale-only instances retain their canonical front/rear artwork and anchors', () => {
  const component = componentById.get(id), profile = mountingFor(id);
  assert.ok(profile.view.pins.some(pin => pin.face === 'rear'));
  for (const scale of [undefined, { x: .8, y: .8 }]) {
    const part = { id: 'pico', componentId: id, x: 10, y: 20, ...(scale ? { scale } : {}) };
    assert.equal(usesCompactBoardView(part, component), false);
    assert.equal(partArt(part, component), componentArt(component));
    assert.equal(instancePins(part, component), component.pins);
    assert.deepEqual(partBodyBounds(part, component), partBounds(part, component));
    const tp = component.pins.find(pin => pin.id === 'tp2');
    const expected = pointOnPart(part, { x: tp.x, y: tp.y });
    assert.deepEqual(endpointPositions({ parts: [part] })({ partId: part.id, pinId: tp.id }).x, expected.x);
    assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [part] })).parts, [part]);
  }
});

test('new insertion explicitly activates a complete physical pin view in one undoable transaction at every host angle', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const { editor, host, part, component, profile } = seated(rotation);
    assert.equal(part.view, 'breadboard');
    assert.equal(part.attachment.contacts.length, 40);
    assert.equal(instancePins(part, component).length, component.pins.length);
    assert.equal(attachmentError(editor.project, part), null);
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const pin = component.pins.find(pin => pin.id === pinId), hole = componentForPart(host).pins.find(pin => pin.id === hostPinId);
      const actual = pointOnPart(part, pin), expected = pointOnPart(host, hole);
      const tolerance = mountingTolerance(part, host);
      near(actual.x, expected.x, tolerance); near(actual.y, expected.y, tolerance);
    }
    const tp = instancePins(part, component).find(pin => pin.id === 'tp2');
    assert.equal(tp.face, 'rear');
    assert.match(tp.description, /Rear contact projected/);
    assert.ok(tp.x !== component.pins.find(pin => pin.id === tp.id).x);
    assert.equal(part.attachment.contacts.some(contact => contact.pinId === tp.id), false);
    const art = partArt(part, component), markup = partMarkup(part, component, new Set(), true);
    assert.match(art, /BACK|Rear|rear/);
    assert.match(markup, /data-contact-face="rear"/);
    assert.equal(usesCompactBoardView(part, component), true);
    const bounds = partBounds(part);
    for (const pin of instancePins(part, component)) {
      const point = pointOnPart(part, pin);
      assert.ok(point.x >= bounds.left - 1e-7 && point.x <= bounds.right + 1e-7 && point.y >= bounds.top - 1e-7 && point.y <= bounds.bottom + 1e-7, pin.id);
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    const fitted = editor.project;
    editor.step('undo'); assert.equal(editor.project.parts.length, 1);
    editor.step('redo'); assert.equal(editor.project, fitted);
    assert.ok(Object.isFrozen(profile.view) && Object.isFrozen(profile.view.pins));
  }
});

test('explicit rear wiring, detachment, rotation and host resizing retain the same physical contacts and saved view', () => {
  const { editor, part, host } = seated();
  const wired = { ...editor.project, wires: [{ id: 'rear-wire', from: { partId: part.id, pinId: 'tp2' },
    to: { partId: host.id, pinId: 'a1' }, color: '#2574b5' }] };
  assert.equal(editor.commit(wired), true);
  const before = endpointPositions(editor.project)(wired.wires[0].from);
  const pin = instancePins(part, componentById.get(id)).find(pin => pin.id === 'tp2');
  const point = pointOnPart(part, pin);
  near(before.x, point.x); near(before.y, point.y);
  assert.ok(traceNet(editor.project, wired.wires[0].from).endpoints.has(endpointKey({ partId: host.id, pinId: 'a1' })));
  assert.ok(drawingMarkup(editor.project).includes('stroke-dasharray'));
  editor.select('part', host.id);
  assert.equal(editor.configurePart({ leftCells: 15, rightCells: 15 }), true);
  assert.equal(editor.project.parts[1].view, 'breadboard');
  assert.equal(attachmentError(editor.project, editor.project.parts[1]), null);
  editor.select('part', part.id);
  const center = partCenter(editor.project.parts[1]);
  assert.equal(editor.rotatePart(90), true);
  const detached = editor.project.parts[1];
  assert.equal(detached.view, 'breadboard'); assert.equal(detached.attachment, undefined);
  near(partCenter(detached).x, center.x); near(partCenter(detached).y, center.y);
  assert.deepEqual(editor.project.wires, wired.wires);
  assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
});

test('project validation rejects unsupported views and requires explicit activation before a new profile seats', () => {
  const { editor, part } = seated();
  for (const view of [null, true, {}, 'rear', 'unknown']) {
    assert.throws(() => parseProject(JSON.stringify({ ...editor.project, parts: editor.project.parts.map(item => item.id === part.id ? { ...item, view } : item) })), /unsupported physical view/);
  }
  const { view, ...canonical } = part;
  assert.throws(() => parseProject(JSON.stringify({ ...editor.project, parts: [editor.project.parts[0], canonical] })), /explicit reviewed physical view/);
  assert.throws(() => parseProject(JSON.stringify({ ...newProject(), parts: [{ id: 'old', componentId: 'arduino-nano', x: 0, y: 0, view: 'breadboard' }] })), /unsupported physical view/);
});

test('registry requires complete, evidenced, bounded physical-view contacts and source calibration', () => {
  const component = componentById.get(id), mounting = mountingFor(id);
  const accept = value => defineFamily('view-test', [{ component, render: () => '', footprint: { body: [21, 51] }, mounting: value }]);
  assert.doesNotThrow(() => accept(mounting));
  for (const view of [null, { ...mounting.view, id: 'guess' }, { ...mounting.view, note: '' },
    { ...mounting.view, pins: mounting.view.pins.slice(1) },
    { ...mounting.view, pins: mounting.view.pins.map((pin, index) => index ? pin : { ...pin, x: NaN }) },
    { ...mounting.view, pins: mounting.view.pins.map((pin, index) => index ? pin : { ...pin, face: 'unknown' }) }]) {
    assert.throws(() => accept({ ...mounting, view }), /physical view/);
  }
  assert.throws(() => accept({ ...mounting, renderMounted: undefined }), /physical view/);
  assert.throws(() => accept({ ...mounting, calibration: undefined }), /physical view/);
});

test('reviewed rear-to-header connections apply only in the explicit assembly view and never leak into older projects', () => {
  const componentId = 'sipeed-maix-m1s-dock-3272', component = componentById.get(componentId);
  const profile = mountingFor(componentId);
  assert.ok(profile?.view?.connections?.length);
  const raw = { id: 'dock', componentId, x: 0, y: 0 }, physical = { ...raw, view: 'breadboard' };
  const pairs = [['p7-4', 'p5-13'], ['p7-3', 'p5-12'], ['p7-2', 'p6-1'], ['p7-1', 'p6-16']];
  assert.equal(component.internalConnections, undefined, 'Published electrical metadata is not rewritten.');
  for (const [rear, header] of pairs) {
    assert.equal(sameContactNet(component, rear, header), false);
    assert.equal(sameContactNet(component, rear, header, physical), true);
    const current = parseProject(serializeProject({ ...newProject(), parts: [physical] }));
    assert.ok(traceNet(current, { partId: raw.id, pinId: rear }).endpoints.has(endpointKey({ partId: raw.id, pinId: header })));
    const old = parseProject(serializeProject({ ...newProject(), parts: [raw] }));
    assert.equal(traceNet(old, { partId: raw.id, pinId: rear }).endpoints.size, 1);
    assert.equal(sameContactNet(component, rear, header), false);
  }
  const accept = view => defineFamily('view-connections-test', [{ component, render: () => '', footprint: { body: [25, 50] }, mounting: { ...profile, view } }]);
  assert.throws(() => accept({ ...profile.view, connectionSource: undefined }), /connection source/);
  assert.throws(() => accept({ ...profile.view, connections: [['p7-4', 'missing']] }), /invalid internal connections/);
});
