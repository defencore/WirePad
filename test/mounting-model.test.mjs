import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { endpointPositions, labelPosition, partBounds, partRotation, pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { traceNet } from '../src/model/continuity.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentConnections, attachmentError, detachInvalidAttachments, mountingScale } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { partScale, partSize } from '../src/model/part-placement.js';
import { newProject, parseProject, serializeProject, validateProject } from '../src/model/project.js';

const endpoint = (partId, pinId) => ({ partId, pinId });
const coordinates = ({ x, y }) => `${x.toFixed(7)},${y.toFixed(7)}`;
const wire = (id, from, to) => ({ id, from, to, color: '#123456' });

function mountedProject({ rotation = 0, hostScale, componentId = 'arduino-nano' } = {}) {
  const host = { id: 'host', componentId: 'breadboard', x: 21.5, y: -31.25, rotation, ...(hostScale && { scale: hostScale }) };
  const hostComponent = componentForPart(host);
  const component = componentById.get(componentId);
  const profile = mountingFor(componentId);
  const intrinsic = mountingScale(component, hostComponent);
  const scale = { x: intrinsic.x * (hostScale?.x ?? 1), y: intrinsic.y * (hostScale?.y ?? 1) };
  const guest = { id: 'guest', componentId, x: 0, y: 0, rotation, scale };
  const holes = mountingFor('breadboard').contacts(hostComponent).map(hole => ({ ...hole, point: pointOnPart(host, hole, hostComponent) }));
  const byPoint = new Map(holes.map(hole => [coordinates(hole.point), hole]));
  const first = pointOnPart(guest, pinById(component, profile.contacts[0].pinId), component);
  for (const hole of holes) {
    const candidate = { ...guest, x: hole.point.x - first.x, y: hole.point.y - first.y };
    const contacts = profile.contacts.map(({ pinId }) => {
      const matched = byPoint.get(coordinates(pointOnPart(candidate, pinById(component, pinId), component)));
      return matched && { pinId, hostPinId: matched.pinId, group: matched.group };
    });
    if (contacts.every(Boolean) && new Set(contacts.map(contact => contact.group)).size === contacts.length) {
      candidate.attachment = { hostPartId: host.id, contacts: contacts.map(({ pinId, hostPinId }) => ({ pinId, hostPinId })) };
      return { ...newProject('Mounted Nano'), parts: [host, candidate], wires: [] };
    }
  }
  assert.fail('The reviewed Nano profile must fit the default breadboard.');
}

function editGuest(project, edit) {
  const next = structuredClone(project);
  edit(next.parts[1], next);
  return next;
}

test('old V1 and V2 projects keep their unscaled shapes and default fields', () => {
  const part = { id: 'resistor', componentId: 'resistor', x: 20, y: -15, rotation: 90 };
  const component = componentForPart(part);
  assert.deepEqual(partScale(part), { x: 1, y: 1 });
  assert.deepEqual(partSize(part, component), { width: component.width, height: component.height });
  assert.equal(partRotation(part, component), `rotate(90 ${component.width / 2} ${component.height / 2})`);
  for (const version of [1, 2]) {
    const saved = parseProject(serializeProject({ ...newProject(), version, parts: [part] }));
    assert.deepEqual(saved.parts, [part]);
    assert.equal(Object.hasOwn(saved.parts[0], 'scale'), false);
    assert.equal(Object.hasOwn(saved.parts[0], 'attachment'), false);
  }
});

test('independent scales share the same rotated bounds, endpoint and SVG transform', () => {
  const component = componentById.get('resistor');
  for (const rotation of [0, 90, 180, 270]) {
    const part = { id: 'scaled', componentId: component.id, x: 23, y: -17, rotation, scale: { x: 2, y: .75 } };
    const { width, height } = partSize(part, component);
    const bounds = partBounds(part, component);
    assert.equal(bounds.right - bounds.left, rotation % 180 ? height : width);
    assert.equal(bounds.bottom - bounds.top, rotation % 180 ? width : height);
    assert.equal(partRotation(part, component), `rotate(${rotation} ${width / 2} ${height / 2}) scale(2 0.75)`);
    assert.equal(labelPosition(part, component), `translate(${width / 2} ${height / 2 + (rotation % 180 ? width : height) / 2 + 8})`);
    const position = endpointPositions({ parts: [part] });
    for (const pin of component.pins) {
      const world = pointOnPart(part, pin, component);
      const dx = pin.x * 2 - width / 2, dy = pin.y * .75 - height / 2;
      const [x, y] = rotation === 90 ? [-dy, dx] : rotation === 180 ? [-dx, -dy] : rotation === 270 ? [dy, -dx] : [dx, dy];
      assert.deepEqual(world, { x: part.x + width / 2 + x, y: part.y + height / 2 + y });
      assert.equal(coordinates(position(endpoint(part.id, pin.id))), coordinates(world));
    }
  }
});

test('source calibration checks every declared lead and rejects nonlinear or reflected art', () => {
  const component = componentById.get('arduino-nano');
  const host = componentById.get('breadboard');
  const scale = mountingScale(component, host);
  assert.ok(scale.x > 0 && scale.y > 0);
  assert.notEqual(scale.x, scale.y, 'reviewed published Nano artwork needs independent axis calibration');
  assert.equal(mountingScale(componentById.get('rs485-soil'), host), null);
  for (const change of [
    pin => pin.id === 'a4' ? { ...pin, y: pin.y + 1 } : pin,
    pin => ({ ...pin, x: -pin.x }),
  ]) {
    assert.equal(mountingScale({ ...component, pins: component.pins.map(change) }, host), null);
  }
  const stretched = { ...component, pins: component.pins.map(pin => ({ ...pin, x: pin.x * 2 + 3, y: pin.y * .5 - 4 })) };
  const adjusted = mountingScale(stretched, host);
  assert.ok(Math.abs(adjusted.x - scale.x / 2) < 1e-10);
  assert.ok(Math.abs(adjusted.y - scale.y * 2) < 1e-10);
});

test('valid explicit attachments survive V2 round trips and immutable history at every host rotation', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const source = mountedProject({ rotation, hostScale: { x: 1.25, y: .8 } });
    assert.equal(attachmentError(source, source.parts[1]), null);
    assert.equal(attachmentConnections(source).length, 30);
    const history = new ProjectHistory(source);
    assert.deepEqual(parseProject(serializeProject(history.project)), history.project);
    assert.equal(Object.isFrozen(history.project.parts[1].attachment.contacts[0]), true);
    const changed = history.commit({ ...history.project, title: 'Renamed' });
    assert.equal(changed.parts, history.undo().parts);
    assert.equal(history.redo(), changed);
  }
});

test('scale validation rejects malformed, nonfinite and out-of-range values', () => {
  const base = { ...newProject(), parts: [{ id: 'r', componentId: 'resistor', x: 0, y: 0 }] };
  for (const scale of [null, 2, [], {}, { x: 1 }, { x: 1, y: NaN }, { x: Infinity, y: 1 },
    { x: 0, y: 1 }, { x: -1, y: 1 }, { x: 1 / 33, y: 1 }, { x: 1, y: 33 }]) {
    assert.throws(() => validateProject({ ...base, parts: [{ ...base.parts[0], scale }] }), /scale/);
  }
  for (const value of [1 / 32, 32]) {
    assert.deepEqual(validateProject({ ...base, parts: [{ ...base.parts[0], scale: { x: value, y: value } }] }).parts[0].scale, { x: value, y: value });
  }
});

test('project validation rejects missing, malformed, incomplete and misaligned attachment records', () => {
  const source = mountedProject();
  const failures = [
    [guest => { guest.attachment = null; }, /must be an object/],
    [guest => { guest.attachment.contacts = new Array(1); }, /contact 1 must be an object/],
    [guest => { guest.attachment.hostPartId = 'missing'; }, /missing attachment host/],
    [guest => { guest.attachment.hostPartId = guest.id; }, /itself/],
    [guest => { guest.attachment.contacts.pop(); }, /every declared header contact/],
    [guest => { guest.attachment.contacts[1].pinId = guest.attachment.contacts[0].pinId; }, /repeated header/],
    [guest => { guest.attachment.contacts[0].hostPinId = 'missing'; }, /missing breadboard terminal hole/],
    [guest => { guest.attachment.contacts[0].pinId = 'icsp-1'; }, /invalid or repeated header/],
    [guest => { guest.scale.x *= 1.01; }, /calibrated breadboard scale/],
    [guest => { guest.x += .1; }, /do not align/],
    [guest => { guest.attachment.contacts[1].hostPinId = guest.attachment.contacts[0].hostPinId; }, /one hole/],
    [guest => {
      const first = guest.attachment.contacts[0].hostPinId;
      guest.attachment.contacts[1].hostPinId = `${first[0] === 'a' ? 'b' : 'a'}${first.slice(1)}`;
    }, /one breadboard strip/],
    [(guest, project) => { project.parts[0].attachment = { hostPartId: guest.id, contacts: [] }; }, /attached component|compatible breadboard/],
  ];
  for (const [change, expected] of failures) assert.throws(() => validateProject(editGuest(source, change)), expected);
  const collision = structuredClone(source);
  collision.parts.push({ ...structuredClone(collision.parts[1]), id: 'second' });
  assert.throws(() => validateProject(collision), /occupied by another/);
});

test('explicit mounted contacts join strips and wired rail chains without creating wire IDs or overlap nets', () => {
  const project = mountedProject();
  const guest = project.parts[1];
  const first = guest.attachment.contacts[0], second = guest.attachment.contacts[1];
  project.wires = [wire('rail', endpoint('host', first.hostPinId), endpoint('host', 'left-1-1'))];
  const net = traceNet(validateProject(project), endpoint('guest', first.pinId));
  assert.deepEqual([...net.wireIds], ['rail']);
  assert.ok(net.endpoints.has(`pin/host/${first.hostPinId}`));
  assert.ok(net.endpoints.has('pin/host/left-1-30'));
  assert.equal(net.endpoints.has(`pin/guest/${second.pinId}`), false);
  const fromHost = traceNet(project, endpoint('host', first.hostPinId));
  assert.ok(fromHost.endpoints.has(`pin/guest/${first.pinId}`), 'mount edges are undirected');
  const unmounted = structuredClone(project);
  delete unmounted.parts[1].attachment;
  assert.equal(traceNet(unmounted, endpoint('guest', first.pinId)).endpoints.has(`pin/host/${first.hostPinId}`), false);
  const invalid = editGuest(project, part => { part.y += 2; });
  assert.equal(attachmentConnections(invalid).length, 0);
  assert.equal(traceNet(invalid, endpoint('guest', first.pinId)).endpoints.has(`pin/host/${first.hostPinId}`), false);
});

test('mounted net tracing preserves rail splits and revalidates reused immutable relationships', () => {
  const source = mountedProject();
  source.parts[0].breadboard = { splitRails: true };
  const first = source.parts[1].attachment.contacts[0];
  source.wires = [wire('rail', endpoint('guest', first.pinId), endpoint('host', 'left-1-1'))];
  const history = new ProjectHistory(source);
  const original = history.project;
  const net = traceNet(original, endpoint('host', first.hostPinId));
  assert.ok(net.endpoints.has('pin/host/left-1-15'));
  assert.equal(net.endpoints.has('pin/host/left-1-16'), false);
  assert.equal(net.endpoints.has('pin/host/right-1-1'), false);
  assert.throws(() => history.commit({ ...original,
    parts: [{ ...original.parts[0], x: original.parts[0].x + 10 }, original.parts[1]],
  }), /do not align/);
  assert.throws(() => history.commit({ ...original, parts: [original.parts[1]] }), /missing component or pin|missing attachment host/);
  assert.equal(history.project, original);
  assert.equal(history.canUndo, false);
  const removedWire = { ...original, wires: [] };
  assert.equal(traceNet(removedWire, endpoint('guest', first.pinId)).endpoints.has('pin/host/left-1-1'), false);
});

test('detaching invalid relationships keeps pose, calibrated scale, explicit wires and unaffected records', () => {
  const valid = validateProject(mountedProject());
  assert.equal(detachInvalidAttachments(valid), valid);
  const moved = editGuest(valid, guest => { guest.x += 3; });
  const detached = detachInvalidAttachments(moved);
  assert.notEqual(detached, moved);
  assert.equal(detached.parts[0], moved.parts[0]);
  assert.equal(detached.wires, moved.wires);
  const { attachment, ...pose } = moved.parts[1];
  assert.deepEqual(detached.parts[1], pose);
  assert.equal(detachInvalidAttachments(detached), detached);
  const missingHost = { ...valid, parts: [valid.parts[1]] };
  assert.equal(Object.hasOwn(detachInvalidAttachments(missingHost).parts[0], 'attachment'), false);
});
