import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById, mountingFor } from '../src/catalog/index.js';
import { translateSelection } from '../src/editor/selection.js';
import { fitPart } from '../src/geometry/breadboard-placement.js';
import { partBounds, pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { attachmentConnections, attachmentError, detachInvalidAttachments, mountingScale } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { newProject, validateProject } from '../src/model/project.js';

const key = ({ x, y }) => `${x.toFixed(7)},${y.toFixed(7)}`;

function seatedPart(host, id, holeId) {
  const component = componentById.get('arduino-nano');
  const hostComponent = componentForPart(host);
  const part = { id, componentId: component.id, x: 0, y: 0, rotation: host.rotation ?? 0,
    scale: mountingScale(component, hostComponent) };
  const profile = mountingFor(component.id);
  const target = pointOnPart(host, pinById(hostComponent, holeId), hostComponent);
  const origin = pointOnPart(part, pinById(component, profile.contacts[0].pinId), component);
  part.x = target.x - origin.x;
  part.y = target.y - origin.y;
  const holes = new Map(mountingFor(hostComponent.id).contacts(hostComponent)
    .map(hole => [key(pointOnPart(host, hole, hostComponent)), hole.pinId]));
  part.attachment = { hostPartId: host.id, contacts: profile.contacts.map(({ pinId }) => {
    const hostPinId = holes.get(key(pointOnPart(part, pinById(component, pinId), component)));
    assert.ok(hostPinId, `${id}/${pinId} must match its source-reviewed terminal hole`);
    return { pinId, hostPinId };
  }) };
  return part;
}

function fixture(rotation = 0, secondHole = 'b5') {
  const host = { id: 'host', componentId: 'breadboard', breadboard: { rows: 80 }, x: 10.12345, y: -20.87654, rotation };
  return { ...newProject(), parts: [host, seatedPart(host, 'first', 'c5'), seatedPart(host, 'second', secondHole)] };
}

test('distinct insertion holes do not permit overlapping seated module envelopes', () => {
  for (const rotation of [0, 90, 180, 270]) {
    const project = fixture(rotation);
    const [host, first, second] = project.parts;
    const occupied = new Set(first.attachment.contacts.map(contact => contact.hostPinId));
    assert.equal(second.attachment.contacts.some(contact => occupied.has(contact.hostPinId)), false);
    const a = partBounds(first), b = partBounds(second);
    assert.ok(Math.min(a.right, b.right) > Math.max(a.left, b.left));
    assert.ok(Math.min(a.bottom, b.bottom) > Math.max(a.top, b.top));
    // The complete drawing envelope is deliberately conservative: source header
    // fit alone cannot prove clearance for overhanging PCB parts or connectors.
    assert.match(attachmentError(project, first), /overlaps another seated module/);
    assert.throws(() => validateProject(project), /overlaps another seated module/);
    const { attachment, ...lifted } = second;
    assert.equal(fitPart({ ...project, parts: [host, first, lifted] }, lifted), null);
  }
});

test('separated seated modules remain valid while ordinary unattached overlap remains independent', () => {
  const separated = fixture(0, 'c35');
  assert.equal(attachmentError(separated, separated.parts[1]), null);
  assert.equal(attachmentError(separated, separated.parts[2]), null);
  assert.equal(attachmentConnections(validateProject(separated)).length, 60);
  const overlapping = fixture();
  const { attachment, ...unattached } = overlapping.parts[2];
  const ordinary = { ...overlapping, parts: [...overlapping.parts.slice(0, 2), unattached] };
  assert.equal(attachmentConnections(validateProject(ordinary)).length, 30);
});

test('moving one guest cannot detach an unchanged seated neighbor', () => {
  const original = validateProject(fixture(0, 'c35'));
  const second = original.parts[2];
  const moved = { ...original, parts: [...original.parts.slice(0, 2), { ...second, y: second.y - 400 }] };
  assert.equal(attachmentError(moved, original.parts[1]), null, 'ignore a neighbor whose old attachment no longer aligns');
  const cleaned = detachInvalidAttachments(moved);
  assert.equal(cleaned.parts[1], original.parts[1]);
  assert.equal(cleaned.parts[2].attachment, undefined);
  assert.deepEqual(cleaned.parts[2].scale, second.scale);
  const selected = translateSelection(original, [{ type: 'part', id: second.id }], 0, -400);
  assert.equal(selected.parts[1], original.parts[1]);
  assert.equal(selected.parts[2].attachment, undefined);
  assert.equal(attachmentConnections(validateProject(selected)).length, 30);
});
