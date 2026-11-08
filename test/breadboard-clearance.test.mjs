import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { mountingTargets } from '../src/geometry/breadboard-targets.js';
import { partBodyBounds, pointFromPart, pointOnPart } from '../src/geometry/parts.js';
import { breadboardOccupancy } from '../src/model/breadboard-occupancy.js';
import { pinById } from '../src/model/component-pins.js';
import { traceNet } from '../src/model/continuity.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingHoles, mountingScale } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { newProject } from '../src/model/project.js';

const key = ({ x, y }) => `${x.toFixed(6)},${y.toFixed(6)}`;

function fixture() {
  const host = { id: 'bb', componentId: 'breadboard', x: 0, y: 0 };
  const hostComponent = componentForPart(host);
  const point = id => pointOnPart(host, pinById(hostComponent, id));
  const component = componentById.get('raspberry-pi-pico'), profile = mountingFor(component.id);
  const pico = { id: 'pico', componentId: component.id, x: 0, y: 0, scale: mountingScale(component, hostComponent) };
  const first = pointOnPart(pico, pinById(component, profile.contacts[0].pinId)), target = point('e5');
  pico.x = target.x - first.x;
  pico.y = target.y - first.y;
  const holes = new Map(mountingHoles(hostComponent, profile).map(hole => [key(pointOnPart(host, hole)), hole.pinId]));
  pico.attachment = { hostPartId: host.id, contacts: profile.contacts.map(({ pinId }) => ({ pinId,
    hostPinId: holes.get(key(pointOnPart(pico, pinById(component, pinId)))) })) };
  const resistor = componentById.get('resistor'), resistorProfile = mountingFor(resistor.id);
  const scale = mountingScale(resistor, hostComponent), body = partBodyBounds(pico);
  const part = { id: 'resistor', componentId: resistor.id, scale,
    x: body.right + 32 - resistor.width * scale.x / 2, y: 288 - resistor.height * scale.y / 2 };
  const contacts = ['right-1-12', 'right-2-14'];
  part.leads = resistorProfile.contacts.map(({ pinId }, index) => ({ pinId, ...pointFromPart(part, point(contacts[index])) }));
  part.attachment = { hostPartId: host.id,
    contacts: resistorProfile.contacts.map(({ pinId }, index) => ({ pinId, hostPinId: contacts[index] })) };
  return new DiagramEditor(new ProjectHistory({ ...newProject('PCB clearance'), parts: [host, pico, part] }), () => {}, () => {});
}

test('new lead seating rejects an empty socket covered by another PCB and retains the other connection', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const editor = fixture();
    if (rotation) { editor.select('part', 'bb'); assert.equal(editor.rotatePart(rotation), true); }
    const original = editor.project, host = original.parts[0], pico = original.parts[1], part = original.parts[2];
    const hole = id => pointOnPart(host, pinById(componentForPart(host), id));
    const target = hole('f12'), bounds = partBodyBounds(pico);
    assert.ok(target.x > bounds.left && target.x < bounds.right && target.y > bounds.top && target.y < bounds.bottom);
    assert.equal(breadboardOccupancy(original, host.id, { ignorePartId: part.id }).has('f12'), false,
      'This is a covered but otherwise unoccupied socket, not a duplicate header pin');
    const available = mountingTargets(original, part, mountingFor(part.componentId)).find(target => target.part.id === host.id);
    assert.equal(available.occupied.has('f12'), true, 'Insertion availability must include PCB clearance');
    const [lifted, retained] = part.attachment.contacts;
    const next = editor.leadProject(part.id, lifted.pinId, target), changed = next.parts.find(item => item.id === part.id);
    assert.equal(editor.project, original, 'A failed insertion preview must not change saved history');
    assert.deepEqual(changed.attachment.contacts, [retained]);
    assert.equal(attachmentError(next, changed), null);
    assert.equal(traceNet(next, { partId: part.id, pinId: lifted.pinId }).endpoints.size, 1);
    assert.deepEqual(partBodyBounds(changed), partBodyBounds(part));
    assert.deepEqual(next.parts.find(item => item.id === pico.id).attachment, pico.attachment);
    const reseated = editor.leadProject(part.id, lifted.pinId, hole(lifted.hostPinId), next);
    const restored = reseated.parts.find(item => item.id === part.id);
    assert.equal(restored.attachment.contacts.length, 2, 'An accessible free socket must still accept the lead');
    assert.equal(attachmentError(reseated, restored), null);
    assert.ok(restored.attachment.contacts.some(contact => contact.pinId === lifted.pinId && contact.hostPinId === lifted.hostPinId));
  }
});

test('a lifted formed body still conceals sockets without creating occupancy or electrical edges', () => {
  const original = fixture().project;
  const { attachment, ...floating } = original.parts[2];
  const project = { ...original, parts: [...original.parts.slice(0, 2), floating] };
  const probe = { id: 'probe', componentId: 'led', x: 270, y: 270 };
  const target = mountingTargets(project, probe, mountingFor(probe.componentId)).find(target => target.part.id === 'bb');
  assert.equal(breadboardOccupancy(project, 'bb').has('right-1-13'), false);
  assert.equal(target.occupied.has('right-1-13'), true, 'Opaque lifted bodies stay inaccessible for new insertion');
  assert.equal(traceNet(project, { partId: floating.id, pinId: attachment.contacts[0].pinId }).endpoints.size, 1);
});
