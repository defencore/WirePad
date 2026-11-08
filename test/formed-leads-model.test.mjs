import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { pointOnPart, pointFromPart, partBounds, partBodyBounds, labelPosition, endpointPositions } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { traceNet } from '../src/model/continuity.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentConnections, attachmentError, detachInvalidAttachments, mountingHoles, mountingScale, sameContactNet } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePinPoint, instancePins, leadShapeError } from '../src/model/part-pins.js';
import { partSize } from '../src/model/part-placement.js';
import { newProject, validateProject, parseProject, serializeProject } from '../src/model/project.js';

const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-7, `${actual} != ${expected}`);
const pin = (partId, pinId) => ({ partId, pinId });
const intersects = (a, b) => Math.min(a.right, b.right) > Math.max(a.left, b.left) && Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top);

function formPart(host, id, holeIds, componentId = 'resistor') {
  const component = componentById.get(componentId), hostComponent = componentForPart(host);
  const profile = mountingFor(componentId);
  assert.equal(profile?.mode, 'bendable');
  assert.equal(holeIds.length, profile.contacts.length);
  const calibration = mountingScale(component, hostComponent);
  const scale = { x: calibration.x * (host.scale?.x ?? 1), y: calibration.y * (host.scale?.y ?? 1) };
  const holes = new Map(mountingHoles(hostComponent, profile).map(hole => [hole.pinId, hole]));
  const points = holeIds.map(id => pointOnPart(host, holes.get(id), hostComponent));
  const size = partSize({ scale }, component);
  const part = { id, componentId, rotation: host.rotation ?? 0, scale,
    x: points.reduce((sum, point) => sum + point.x, 0) / points.length - size.width / 2,
    y: points.reduce((sum, point) => sum + point.y, 0) / points.length - size.height / 2 };
  part.leads = profile.contacts.map(({ pinId }, index) => ({ pinId, ...pointFromPart(part, points[index], component) }));
  part.attachment = { hostPartId: host.id, contacts: profile.contacts.map(({ pinId }, index) => ({ pinId, hostPinId: holeIds[index] })) };
  return part;
}

function fixture({ rotation = 0, scale, holeIds = ['d5', 'g5'], componentId = 'resistor' } = {}) {
  const host = { id: 'host', componentId: 'breadboard', x: 13.12345, y: -29.87654, rotation, ...(scale && { scale }) };
  return { ...newProject('Formed leads'), parts: [host, formPart(host, 'part', holeIds, componentId)] };
}

test('local formed tips share one endpoint resolver without changing canonical contact metadata', () => {
  const project = fixture(), part = project.parts[1], component = componentForPart(part);
  assert.equal(instancePins({ ...part, leads: undefined }, component), component.pins);
  const pins = instancePins(part, component);
  for (const [index, original] of component.pins.entries()) {
    const tip = part.leads.find(lead => lead.pinId === original.id);
    assert.deepEqual(instancePinPoint(part, original), { x: tip.x, y: tip.y });
    assert.equal(pins[index].id, original.id);
    assert.equal(pins[index].number, original.number);
    assert.equal(pins[index].description, original.description);
    assert.equal(pins[index].surface, true);
    assert.deepEqual(pointOnPart(part, original, component), pointOnPart(part, { x: tip.x, y: tip.y }, component));
    const endpoint = endpointPositions(project)(pin(part.id, original.id));
    assert.equal(endpoint.normal, undefined);
    assert.equal(endpoint.bounds, undefined);
    assert.equal(endpoint.surfacePartId, part.id);
  }
});

test('inverse transforms, body bounds and visual extents follow all rotations and independent scales', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const project = fixture({ rotation, scale: { x: 1.2, y: .8 }, holeIds: ['e2', 'f8'] });
    const part = project.parts[1], component = componentForPart(part), profile = mountingFor(component.id);
    assert.equal(leadShapeError(part, component), null);
    const visual = partBounds(part), body = partBodyBounds(part);
    assert.ok(visual.left <= body.left && visual.right >= body.right && visual.top <= body.top && visual.bottom >= body.bottom);
    assert.ok(visual.right - visual.left > body.right - body.left || visual.bottom - visual.top > body.bottom - body.top);
    for (const local of [...part.leads, ...profile.roots, profile.origin]) {
      const world = pointOnPart(part, { x: local.x, y: local.y }, component);
      const inverse = pointFromPart(part, world, component);
      near(inverse.x, local.x); near(inverse.y, local.y);
      assert.ok(world.x >= visual.left - 1e-7 && world.x <= visual.right + 1e-7);
      assert.ok(world.y >= visual.top - 1e-7 && world.y <= visual.bottom + 1e-7);
    }
    assert.equal(labelPosition(part, component), `translate(${(visual.left + visual.right) / 2 - part.x} ${visual.bottom - part.y + 8})`);
    assert.equal(attachmentError(project, part), null);
  }
});

test('formed lead geometry and partial explicit seating survive V2 files and immutable history', () => {
  const source = fixture();
  source.parts[1].attachment.contacts.pop();
  const history = new ProjectHistory(source);
  const original = history.project;
  assert.deepEqual(parseProject(serializeProject(original)), original);
  assert.equal(Object.isFrozen(original.parts[1].leads[0]), true);
  assert.equal(attachmentConnections(original).length, 1);
  const seated = original.parts[1].attachment.contacts[0];
  assert.ok(traceNet(original, pin('part', seated.pinId)).endpoints.has(`pin/host/${seated.hostPinId}`));
  const open = original.parts[1].leads.find(lead => lead.pinId !== seated.pinId);
  assert.equal(traceNet(original, pin('part', open.pinId)).endpoints.size, 1, 'an unseated tip does not connect by coincidence');
  const changed = history.commit({ ...original, title: 'Retained shape' });
  assert.equal(changed.parts, original.parts);
  assert.equal(history.undo(), original);
  assert.equal(history.redo(), changed);
  const detached = detachInvalidAttachments({ ...original, parts: [original.parts[1]] });
  assert.equal(detached.parts[0].attachment, undefined);
  assert.equal(detached.parts[0].leads, original.parts[1].leads);
});

test('formed lead validation rejects unsupported parts, missing IDs, nonfinite coordinates and excessive reach', () => {
  const source = fixture();
  const invalid = change => {
    const next = structuredClone(source);
    change(next.parts[1]);
    return next;
  };
  for (const [change, pattern] of [
    [part => { part.componentId = 'arduino-nano'; }, /does not support formed leads/],
    [part => { part.leads.pop(); }, /every formed lead exactly once/],
    [part => { part.leads[1].pinId = part.leads[0].pinId; }, /invalid or repeated formed lead/],
    [part => { part.leads[0].pinId = 'missing'; }, /invalid or repeated formed lead/],
    [part => { part.leads[0].x = Infinity; }, /invalid position/],
    [part => { part.leads[0].y = NaN; }, /invalid position/],
    [part => { part.leads[0].x += 10000; }, /supported reach/],
    [part => { part.attachment.contacts = []; }, /at least one formed lead/],
    [part => { part.leads[0].x += .1; }, /do not align/],
  ]) assert.throws(() => validateProject(invalid(change)), pattern);
  const sparse = invalid(part => { part.leads = new Array(2); });
  assert.throws(() => validateProject(sparse), /formed lead 1 must be an object/);
});

test('a partial attachment cannot bypass the explicit formed geometry with an old artwork endpoint', () => {
  const source = fixture();
  const part = source.parts[1], component = componentForPart(part), host = source.parts[0];
  const contact = part.attachment.contacts[0];
  const tip = pointOnPart(host, pinById(componentForPart(host), contact.hostPinId));
  const { leads, ...withoutShape } = part;
  const originalTip = pointOnPart(withoutShape, pinById(component, contact.pinId));
  const aligned = { ...withoutShape, x: withoutShape.x + tip.x - originalTip.x,
    y: withoutShape.y + tip.y - originalTip.y,
    attachment: { hostPartId: host.id, contacts: [contact] } };
  assert.throws(() => validateProject({ ...source, parts: [host, aligned] }), /formed lead geometry before seating/);
});

test('optional rail insertion preserves the actual split rail conductor groups', () => {
  const project = fixture({ holeIds: ['left-1-10', 'left-1-20'] });
  project.parts[0].breadboard = { splitRails: true };
  const normalized = validateProject(project), hostComponent = componentForPart(normalized.parts[0]);
  const rails = mountingHoles(hostComponent, mountingFor('resistor'));
  assert.ok(rails.some(hole => hole.pinId === 'left-1-20'));
  assert.equal(mountingHoles(hostComponent, mountingFor('arduino-nano')).some(hole => hole.pinId === 'left-1-20'), false);
  const [first, second] = normalized.parts[1].attachment.contacts;
  const net = traceNet(normalized, pin('part', first.pinId));
  assert.ok(net.endpoints.has('pin/host/left-1-15'));
  assert.equal(net.endpoints.has('pin/host/left-1-16'), false);
  assert.equal(net.endpoints.has(`pin/part/${second.pinId}`), false);
});

test('shared hole collections remain immutable and keep host configurations and rail capabilities separate', () => {
  const host = componentForPart({ componentId: 'breadboard' });
  const formed = mountingFor('resistor'), rigid = mountingFor('arduino-nano');
  const all = mountingHoles(host, formed), terminals = mountingHoles(host, rigid);
  assert.equal(mountingHoles(host, formed), all);
  assert.equal(mountingHoles(host, rigid), terminals);
  assert.notEqual(all, terminals);
  const rail = all.find(hole => hole.pinId === 'left-1-16');
  assert.ok(rail);
  assert.equal(terminals.some(hole => hole.pinId === rail.pinId), false);
  assert.throws(() => { rail.x += 1; }, TypeError);
  assert.throws(() => { all.pop(); }, TypeError);
  const split = componentForPart({ componentId: 'breadboard', breadboard: { splitRails: true } });
  const splitHoles = mountingHoles(split, formed);
  assert.notEqual(splitHoles, all);
  assert.notEqual(splitHoles.find(hole => hole.pinId === rail.pinId).group, rail.group);
  const shortened = componentForPart({ componentId: 'breadboard', breadboard: { rows: 2 } });
  assert.equal(mountingHoles(shortened, formed).some(hole => hole.pinId === 'a3'), false);
  assert.equal(all.some(hole => hole.pinId === 'a3'), true);
});

test('long lead envelopes may cross while distinct package bodies remain clear', () => {
  const project = fixture({ holeIds: ['e2', 'f8'] });
  project.parts.push(formPart(project.parts[0], 'second', ['e4', 'f10']));
  assert.equal(intersects(partBounds(project.parts[1]), partBounds(project.parts[2])), true);
  assert.equal(intersects(partBodyBounds(project.parts[1]), partBodyBounds(project.parts[2])), false);
  assert.equal(attachmentConnections(validateProject(project)).length, 4);
  project.parts[2] = formPart(project.parts[0], 'second', ['d3', 'g7']);
  assert.equal(intersects(partBodyBounds(project.parts[1]), partBodyBounds(project.parts[2])), true);
  assert.throws(() => validateProject(project), /overlaps another seated module/);
});

test('shared conductor checks use transitive ideal contact groups rather than captions or pin types', () => {
  const component = { pins: ['a', 'b', 'c', 'd'].map(id => ({ id })), internalConnections: [['a', 'b'], ['b', 'c']] };
  assert.equal(sameContactNet(component, 'a', 'c'), true);
  assert.equal(sameContactNet(component, 'a', 'd'), false);
  assert.equal(sameContactNet(component, 'a', 'missing'), false);
  assert.equal(sameContactNet(component, 'd', 'd'), true);
});

test('reviewed rigid through-hole packages keep all fixed leads and exclude rail insertion', () => {
  const host = { id: 'host', componentId: 'breadboard', x: 37.12345, y: -18.87654, rotation: 270 };
  const hostComponent = componentForPart(host), component = componentById.get('sn74hc00n');
  const profile = mountingFor(component.id);
  assert.equal(profile.type, 'breadboard-part');
  assert.equal(profile.mode, 'rigid');
  const part = { id: 'logic', componentId: component.id, rotation: host.rotation,
    scale: mountingScale(component, hostComponent), x: 0, y: 0 };
  const target = pointOnPart(host, pinById(hostComponent, 'e5'));
  const start = pointOnPart(part, pinById(component, profile.contacts[0].pinId));
  part.x += target.x - start.x;
  part.y += target.y - start.y;
  const holes = new Map(mountingHoles(hostComponent, profile).map(hole => {
    const point = pointOnPart(host, hole);
    return [`${point.x.toFixed(7)},${point.y.toFixed(7)}`, hole.pinId];
  }));
  part.attachment = { hostPartId: host.id, contacts: profile.contacts.map(({ pinId }) => {
    const point = pointOnPart(part, pinById(component, pinId));
    const hostPinId = holes.get(`${point.x.toFixed(7)},${point.y.toFixed(7)}`);
    assert.ok(hostPinId);
    return { pinId, hostPinId };
  }) };
  const project = { ...newProject('PDIP insertion'), parts: [host, part] };
  assert.equal(attachmentError(project, part), null);
  assert.equal(attachmentConnections(validateProject(project)).length, 14);
  assert.equal(part.leads, undefined);
  assert.ok(partBodyBounds(part).right - partBodyBounds(part).left < partBounds(part).right - partBounds(part).left ||
    partBodyBounds(part).bottom - partBodyBounds(part).top < partBounds(part).bottom - partBounds(part).top);
  const partial = structuredClone(project);
  partial.parts[1].attachment.contacts.pop();
  assert.throws(() => validateProject(partial), /every declared header contact/);
  const rail = structuredClone(project);
  rail.parts[1].attachment.contacts[0].hostPinId = 'left-1-5';
  assert.throws(() => validateProject(rail), /missing breadboard terminal hole/);
});

test('formed polarized and transistor leads retain exact physical identities through every rotation', () => {
  const parts = [
    ['led', ['k', 'a'], ['K', 'A']],
    ['electrolytic', ['positive', 'negative'], ['+', '−']],
    ['market-tsal6200', ['p1', 'p2'], ['A', 'K']],
    ['market-tlcr5800', ['p1', 'p2'], ['K', 'A']],
    ['market-2n3904ta', ['p1', 'p2', 'p3'], ['E', 'B', 'C']],
    ['market-bc547bta', ['p1', 'p2', 'p3'], ['C', 'B', 'E']],
    ['market-2n7000', ['p1', 'p2', 'p3'], ['S', 'G', 'D']],
    ['market-bs170', ['p1', 'p2', 'p3'], ['D', 'G', 'S']],
  ];
  for (const [componentId, ids, labels] of parts) for (const rotation of [0, 90, 180, 270]) {
    const holes = ids.length === 3 ? ['e4', 'e5', 'e6'] : ['e4', 'f4'];
    const project = fixture({ rotation, componentId, holeIds: holes });
    const part = project.parts[1], component = componentForPart(part);
    assert.deepEqual(component.pins.map(contact => contact.id), ids, componentId);
    assert.deepEqual(component.pins.map(contact => contact.label), labels, componentId);
    const normalized = validateProject(project), resolved = endpointPositions(normalized);
    assert.equal(attachmentConnections(normalized).length, ids.length);
    for (let index = 0; index < ids.length; index++) {
      const world = resolved(pin(part.id, ids[index]));
      const hole = resolved(pin('host', holes[index]));
      near(world.x, hole.x); near(world.y, hole.y);
      const net = traceNet(normalized, pin(part.id, ids[index]));
      assert.ok(net.endpoints.has(`pin/host/${holes[index]}`));
      for (const other of ids.filter(id => id !== ids[index])) assert.equal(net.endpoints.has(`pin/part/${other}`), false);
    }
    const saved = parseProject(serializeProject(normalized));
    assert.deepEqual(saved.parts[1].leads, part.leads);
    assert.deepEqual(saved.parts[1].attachment, part.attachment);
  }
});

test('four physical switch legs may share their real internal nets without closing the open switch', () => {
  const componentId = 'omron-b3f-1000', component = componentById.get(componentId), profile = mountingFor(componentId);
  assert.ok(component);
  assert.equal(sameContactNet(component, 'p4', 'p3'), true);
  assert.equal(sameContactNet(component, 'p2', 'p1'), true);
  assert.equal(sameContactNet(component, 'p4', 'p2'), false);
  const positions = { p4: 'a5', p3: 'd5', p2: 'a7', p1: 'd7' };
  for (const rotation of [0, 90, 180, 270]) {
    const project = fixture({ componentId, rotation, holeIds: profile.contacts.map(contact => positions[contact.pinId]) });
    const normalized = validateProject(project), part = normalized.parts[1];
    assert.equal(attachmentConnections(normalized).length, 4);
    let top = traceNet(normalized, pin(part.id, 'p4'));
    assert.ok(top.endpoints.has('pin/part/p3'));
    assert.ok(top.endpoints.has('pin/host/a5'));
    assert.ok(top.endpoints.has('pin/host/e5'));
    assert.equal(top.endpoints.has('pin/host/a7'), false);
    assert.equal(top.endpoints.has('pin/part/p2'), false);
    const lifted = structuredClone(normalized);
    lifted.parts[1].attachment.contacts = lifted.parts[1].attachment.contacts.filter(contact => contact.pinId !== 'p4');
    top = traceNet(validateProject(lifted), pin(part.id, 'p4'));
    assert.ok(top.endpoints.has('pin/host/a5'), 'the lifted tail still reaches the conductor through its internally common sibling');
    lifted.parts[1].attachment.contacts = lifted.parts[1].attachment.contacts.filter(contact => contact.pinId !== 'p3');
    top = traceNet(validateProject(lifted), pin(part.id, 'p4'));
    assert.deepEqual(new Set(top.endpoints.keys()), new Set(['pin/part/p4', 'pin/part/p3']));
    assert.equal(attachmentConnections(lifted).length, 2);
  }
});
