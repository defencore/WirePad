import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { fitPart } from '../src/geometry/breadboard-placement.js';
import { pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingScale } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { partSize } from '../src/model/part-placement.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-4, `${actual} != ${expected}`);

function fixture(rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation };
  const component = componentById.get('arduino-nano'), hostComponent = componentForPart(host);
  const scale = mountingScale(component, hostComponent);
  const part = { id: 'nano', componentId: component.id, x: 0, y: 0, rotation, scale };
  // The source-reviewed Nano rows are six pitches apart. C5 and G5 are
  // separate terminal strips, leaving spare holes for wires on both sides.
  const hole = pointOnPart(host, pinById(hostComponent, 'c5'), hostComponent);
  const lead = pointOnPart(part, pinById(component, 'd13'), component);
  const placed = { ...part, x: hole.x - lead.x, y: hole.y - lead.y };
  const project = { ...newProject('Breadboard mounting'), parts: [host, placed] };
  const fit = fitPart(project, placed);
  assert.ok(fit, 'A Nano must fit all thirty leads at the known C5/G5 position');
  return { project: { ...project, parts: [host, fit.part] }, host, part: fit.part, component, fit };
}

function editorFor(project) {
  const history = new ProjectHistory(project), notices = [];
  return { editor: new DiagramEditor(history, () => {}, message => notices.push(message)), history, notices };
}

test('every lead snaps exactly and calibrated scaling preserves native catalog geometry', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const { project, host, part, component } = fixture(rotation);
    const { width, height } = partSize(part, component);
    const unscaled = { id: part.id, componentId: part.componentId, rotation,
      x: part.x + width / 2 - component.width / 2 + 3,
      y: part.y + height / 2 - component.height / 2 - 2 };
    const fit = fitPart({ ...project, parts: [host, unscaled] }, unscaled);
    assert.ok(fit);
    assert.equal(fit.part.rotation, rotation);
    assert.equal(fit.contacts.length, 30);
    assert.equal(fit.contacts.find(contact => contact.pinId === 'd13').hostPinId, 'c5');
    for (const contact of fit.contacts) {
      const lead = pointOnPart(fit.part, pinById(component, contact.pinId), component);
      const hole = pointOnPart(host, pinById(componentForPart(host), contact.hostPinId));
      near(lead.x, hole.x); near(lead.y, hole.y);
    }
    assert.equal(componentForPart(fit.part), component, 'Instance fitting must not replace the catalog/native component');
  }
});

test('unreviewed boards, partial rows, off-host poses and occupied holes never attach', () => {
  const { project, part, host } = fixture();
  const unreviewed = { id: 'other', componentId: 'resistor', x: part.x, y: part.y };
  assert.equal(fitPart({ ...project, parts: [host, unreviewed] }, unreviewed), null);
  assert.equal(fitPart(project, { ...part, x: 4000, y: 4000 }), null);
  const shortHost = { ...host, breadboard: { rows: 8 } };
  assert.equal(fitPart({ ...project, parts: [shortHost, part] }, part), null);
  const occupied = { ...part, id: 'second' };
  assert.equal(fitPart({ ...project, parts: [host, part, occupied] }, occupied), null);
});

test('a fit cannot short separate leads even after an attempted quarter-turn', () => {
  const { project, part, component } = fixture();
  const rotated = { ...part, rotation: 90 };
  const fit = fitPart({ ...project, parts: [project.parts[0], rotated] }, rotated);
  if (!fit) return;
  const holes = new Map(mountingFor('breadboard').contacts(componentForPart(project.parts[0])).map(hole => [hole.pinId, hole]));
  assert.equal(new Set(fit.contacts.map(contact => holes.get(contact.hostPinId).group)).size, mountingFor(component.id).contacts.length);
});

test('drag preview is immutable and dropping commits one undoable fitted placement', () => {
  const { host, part, component } = fixture();
  const source = { id: part.id, componentId: component.id, x: 1200, y: 1000 };
  const original = { ...newProject(), parts: [host, source] };
  const { editor, history } = editorFor(original);
  const size = partSize(part, component);
  const destination = { x: part.x + size.width / 2 - component.width / 2 + 2,
    y: part.y + size.height / 2 - component.height / 2 + 3 };
  const before = editor.project;
  const preview = editor.placementProject(source.id, destination);
  assert.ok(preview.parts[1].attachment);
  assert.equal(editor.project, before);
  assert.equal(history.canUndo, false);
  assert.equal(editor.commit(preview), true);
  assert.equal(attachmentError(editor.project, editor.project.parts[1]), null);
  editor.step('undo');
  assert.equal(editor.project, before);
  editor.step('redo');
  assert.ok(editor.project.parts[1].attachment);
});

test('library drop mounts atomically while a normal library click stays unmounted', () => {
  const { host, part, component } = fixture();
  const { editor, history } = editorFor({ ...newProject(), parts: [host] });
  const size = partSize(part, component);
  const point = { x: part.x + size.width / 2 - component.width / 2, y: part.y + size.height / 2 - component.height / 2 };
  const preview = editor.previewPart(component.id, point);
  assert.ok(preview.fit);
  assert.equal(editor.project.parts.length, 1);
  const added = editor.addPart(component.id, point, { mount: true });
  assert.ok(added.attachment);
  assert.equal(editor.project.wires.length, 0, 'Seated leads are electrical contacts, not hidden wire objects');
  editor.step('undo');
  assert.equal(editor.project.parts.length, 1);
  assert.equal(history.canUndo, false);
  const ordinary = editor.addPart(component.id, point);
  assert.equal(ordinary.attachment, undefined);
  assert.equal(ordinary.scale, undefined);
});

test('mounted nets include spare strip holes and detach immediately on independent movement', () => {
  const { project, part } = fixture();
  const { editor } = editorFor(project);
  const net = traceNet(editor.project, { partId: part.id, pinId: 'd13' });
  assert.ok(net.endpoints.has(endpointKey({ partId: 'bb', pinId: 'a5' })));
  assert.ok(!net.endpoints.has(endpointKey({ partId: 'bb', pinId: 'f5' })));
  const moved = editor.placementProject(part.id, { x: 1800, y: 1500 });
  editor.commit(moved);
  const detached = editor.project.parts.find(item => item.id === part.id);
  assert.equal(detached.attachment, undefined);
  assert.deepEqual(detached.scale, part.scale, 'Lifting the module must not resize its drawing');
  assert.equal(traceNet(editor.project, { partId: part.id, pinId: 'd13' }).endpoints.size, 1);
  editor.step('undo');
  assert.ok(editor.project.parts[1].attachment);
});

test('host movement carries its mounted module and host rotation keeps every lead aligned', () => {
  const { project, host, part } = fixture();
  const { editor } = editorFor(project);
  editor.select('part', host.id);
  const moved = editor.placementProject(host.id, { x: host.x + 40, y: host.y + 60 });
  editor.commit(moved);
  let child = editor.project.parts.find(item => item.id === part.id);
  // Ordinary dragging rounds the host's destination; the common offset must
  // still preserve every fractional, calibrated module contact.
  near(child.x - part.x, editor.project.parts[0].x - host.x);
  near(child.y - part.y, editor.project.parts[0].y - host.y);
  for (const rotation of [90, 180, 270, 0]) {
    assert.equal(editor.rotatePart(rotation), true);
    child = editor.project.parts.find(item => item.id === part.id);
    assert.ok(child.attachment);
    assert.equal(attachmentError(editor.project, child), null);
  }
  assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
});

test('nudge/group movement detaches a lone child and preserves a host/child group', () => {
  const { project, host, part } = fixture();
  const { editor } = editorFor(project);
  editor.select('part', part.id);
  editor.moveSelection(3, 0);
  assert.equal(editor.project.parts[1].attachment, undefined);
  editor.step('undo');
  editor.selectMany([{ type: 'part', id: host.id }, { type: 'part', id: part.id }]);
  editor.moveSelection(15, -13);
  assert.ok(editor.project.parts[1].attachment);
  assert.equal(attachmentError(editor.project, editor.project.parts[1]), null);
});

test('occupied-hole configuration is rejected and deleting the host leaves the module detached', () => {
  const { project, host, part } = fixture();
  const { editor, notices } = editorFor(project);
  editor.select('part', host.id);
  assert.equal(editor.configurePart({ rows: 6 }), false);
  assert.match(notices.at(-1), /occupied breadboard contacts/);
  assert.ok(editor.project.parts[1].attachment);
  assert.equal(editor.configurePart({ rows: 40 }), true);
  assert.ok(editor.project.parts[1].attachment);
  editor.removeSelection();
  assert.equal(editor.project.parts.length, 1);
  assert.equal(editor.project.parts[0].id, part.id);
  assert.equal(editor.project.parts[0].attachment, undefined);
  assert.deepEqual(editor.project.parts[0].scale, part.scale);
  editor.step('undo');
  assert.ok(editor.project.parts[1].attachment);
});
