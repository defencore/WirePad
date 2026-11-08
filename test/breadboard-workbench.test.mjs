import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointOnPart, partBodyBounds, endpointPositions } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { componentForPart } from '../src/model/part-component.js';
import { ProjectHistory } from '../src/model/history.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';
import { traceNet } from '../src/model/continuity.js';
import { breadboardOccupancy } from '../src/model/breadboard-occupancy.js';
import { attachmentError } from '../src/model/mounting.js';
import { leadShapeError } from '../src/model/part-pins.js';
import { fitPart } from '../src/geometry/breadboard-placement.js';

const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-4, `${a} != ${b}`);
const endpoint = (partId, pinId) => ({ partId, pinId });

function workbench(settings) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.12345, y: 20.54321,
    ...(settings && { breadboard: settings }) };
  const notices = [];
  const history = new ProjectHistory({ ...newProject('Breadboard circuit'), parts: [host] });
  const editor = new DiagramEditor(history, () => {}, notice => notices.push(notice));
  return { editor, history, host: history.project.parts[0], notices };
}

function insert(editor, componentId) {
  const position = editor.suggestPlacement(componentId, 'bb');
  assert.ok(position, `${componentId} needs a reproducible free placement`);
  const part = editor.addPart(componentId, position, { mount: true, hostPartId: 'bb' });
  assert.ok(part?.attachment, `${componentId} must insert rather than silently become decorative`);
  assert.equal(attachmentError(editor.project, part), null);
  return part;
}

function holePoint(project, id) {
  const host = project.parts.find(part => part.id === 'bb');
  return pointOnPart(host, pinById(componentForPart(host), id));
}

test('a useful circuit can be built from ordinary passives, LED, transistor and a DIP timer', () => {
  const { editor } = workbench();
  for (const id of ['resistor', 'led', 'diode', 'capacitor', 'electrolytic', 'market-2n3904ta', 'ti-ne555p']) {
    const part = insert(editor, id), profile = mountingFor(id);
    assert.equal(part.attachment.contacts.length, profile.contacts.length);
    assert.equal(componentForPart(part), componentById.get(id));
    const position = endpointPositions(editor.project);
    for (const contact of part.attachment.contacts) {
      const tip = position(endpoint(part.id, contact.pinId));
      const hole = holePoint(editor.project, contact.hostPinId);
      near(tip.x, hole.x); near(tip.y, hole.y);
    }
  }
  assert.equal(editor.project.parts.length, 8);
  assert.equal(editor.project.wires.length, 0, 'Insertion uses real conductor edges, not hidden wires');
  assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
});

test('a resistor lead can bridge to a power rail without resizing or moving its body', () => {
  const { editor, history } = workbench();
  const part = insert(editor, 'resistor'), component = componentForPart(part);
  const pinId = mountingFor(part.componentId).contacts[0].pinId;
  const body = partBodyBounds(part), original = editor.project;
  const target = holePoint(original, 'left-1-15');
  const next = editor.leadProject(part.id, pinId, target);
  assert.equal(editor.project, original, 'A lead preview cannot modify history');
  const changed = next.parts.find(item => item.id === part.id);
  assert.equal(attachmentError(next, changed), null);
  assert.equal(changed.attachment.contacts.find(contact => contact.pinId === pinId).hostPinId, 'left-1-15');
  assert.deepEqual(partBodyBounds(changed), body);
  assert.equal(componentForPart(changed), component);
  editor.commit(next);
  const net = traceNet(editor.project, endpoint(part.id, pinId));
  assert.ok(net.endpoints.has('pin/bb/left-1-1'));
  assert.ok(net.endpoints.has('pin/bb/left-1-30'));
  assert.equal(net.endpoints.has('pin/bb/right-1-15'), false);
  history.undo();
  assert.equal(editor.project, original);
});

test('lifting one lead opens only that connection and never snaps a reach-clamped tip by coincidence', () => {
  const { editor } = workbench();
  const part = insert(editor, 'resistor');
  const [lifted, retained] = part.attachment.contacts;
  const next = editor.leadProject(part.id, lifted.pinId, { x: -5000, y: 5000 });
  editor.commit(next);
  const changed = editor.project.parts.find(item => item.id === part.id);
  assert.equal(changed.attachment.contacts.length, 1);
  assert.equal(changed.attachment.contacts[0].pinId, retained.pinId);
  assert.equal(leadShapeError(changed, componentForPart(changed)), null);
  assert.equal(traceNet(editor.project, endpoint(part.id, lifted.pinId)).endpoints.size, 1);
  assert.ok(traceNet(editor.project, endpoint(part.id, retained.pinId)).endpoints.has(`pin/bb/${retained.hostPinId}`));
  const reseated = editor.leadProject(part.id, lifted.pinId, holePoint(editor.project, lifted.hostPinId));
  editor.commit(reseated);
  assert.equal(editor.project.parts.find(item => item.id === part.id).attachment.contacts.length, 2);
});

test('moving a body while keeping its leads preserves both hole positions and all electrical links', () => {
  const { editor } = workbench();
  const part = insert(editor, 'resistor');
  const before = endpointPositions(editor.project);
  const tips = part.leads.map(lead => ({ pinId: lead.pinId, point: before(endpoint(part.id, lead.pinId)) }));
  const next = editor.bodyPlacementProject(part.id, { x: part.x + 9.75, y: part.y - 13.25 });
  assert.ok(next);
  const moved = next.parts.find(item => item.id === part.id);
  assert.deepEqual(moved.attachment, part.attachment);
  assert.deepEqual(moved.scale, part.scale);
  assert.notDeepEqual(moved.leads, part.leads);
  const after = endpointPositions(next);
  for (const { pinId, point } of tips) {
    near(after(endpoint(part.id, pinId)).x, point.x);
    near(after(endpoint(part.id, pinId)).y, point.y);
  }
  editor.commit(next);
  assert.equal(attachmentError(editor.project, editor.project.parts.find(item => item.id === part.id)), null);
  editor.step('undo');
  assert.deepEqual(editor.project.parts.find(item => item.id === part.id).leads, part.leads);
});

test('new insertion reserves exact wired holes without treating their whole conductor as occupied', () => {
  const { editor } = workbench();
  const part = insert(editor, 'resistor'), [first, second] = part.attachment.contacts;
  const base = editor.project;
  editor.commit({ ...base, wires: [{ id: 'jumper', from: endpoint('bb', first.hostPinId), to: endpoint('bb', 'left-1-1'), color: '#ff0000' }] });
  const occupied = breadboardOccupancy(editor.project, 'bb', { ignorePartId: part.id });
  assert.deepEqual(occupied.get(first.hostPinId).wires, ['jumper']);
  assert.equal(occupied.has(second.hostPinId), false);
  // Existing explicit wire/lead graphs remain readable; newly formed contacts
  // cannot silently claim the jumper's already occupied physical hole.
  const lifted = editor.leadProject(part.id, first.pinId, { x: -5000, y: -5000 });
  const attempted = editor.leadProject(part.id, first.pinId, holePoint(lifted, first.hostPinId), lifted);
  const changed = attempted.parts.find(item => item.id === part.id);
  assert.equal(changed.attachment.contacts.some(contact => contact.hostPinId === first.hostPinId), false);
});

test('full-body moves detach, host moves retain formed geometry, and undersized boards return no suggestion', () => {
  const { editor, host } = workbench();
  const part = insert(editor, 'led');
  const movedHost = editor.placementProject(host.id, { x: host.x + 60, y: host.y + 40 });
  editor.commit(movedHost);
  const seated = editor.project.parts.find(item => item.id === part.id);
  assert.ok(seated.attachment);
  assert.deepEqual(seated.leads, part.leads);
  const lifted = editor.placementProject(part.id, { x: 3000, y: 3000 });
  editor.commit(lifted);
  const detached = editor.project.parts.find(item => item.id === part.id);
  assert.equal(detached.attachment, undefined);
  assert.deepEqual(detached.leads, part.leads);
  assert.deepEqual(detached.scale, part.scale);
  const small = workbench({ rows: 1, leftCells: 1, rightCells: 1, leftRails: 0, rightRails: 0 });
  assert.equal(small.editor.suggestPlacement('ti-ne555p', 'bb'), null);
  assert.equal(small.editor.project.parts.length, 1);
});

test('rigid DIP contacts keep the source pitch and never stretch to an arbitrary hole pattern', () => {
  const { editor } = workbench();
  const part = insert(editor, 'ti-ne555p');
  assert.equal(part.leads, undefined);
  assert.equal(part.attachment.contacts.length, 8);
  const offBoard = { ...part, x: 10000, y: 10000 };
  assert.equal(fitPart(editor.project, offBoard), null);
  const changed = { ...part, scale: { x: part.scale.x * 1.1, y: part.scale.y } };
  assert.match(attachmentError({ ...editor.project, parts: [editor.project.parts[0], changed] }, changed), /calibrated/);
});

test('a real four-tail pushbutton seats every physical contact and preserves its normally-open paired nets', () => {
  const { editor } = workbench();
  const part = insert(editor, 'omron-b3f-1000');
  assert.equal(part.leads.length, 4);
  assert.equal(part.attachment.contacts.length, 4);
  const upper = traceNet(editor.project, endpoint(part.id, 'p4'));
  assert.ok(upper.endpoints.has(`pin/${part.id}/p3`));
  assert.equal(upper.endpoints.has(`pin/${part.id}/p2`), false);
  assert.equal(upper.endpoints.has(`pin/${part.id}/p1`), false);
  const lower = traceNet(editor.project, endpoint(part.id, 'p2'));
  assert.ok(lower.endpoints.has(`pin/${part.id}/p1`));
  assert.equal(lower.endpoints.has(`pin/${part.id}/p4`), false);
});
