import { mountingFor } from '../catalog/index.js';
import { partBodiesOverlap, pointOnPart } from '../geometry/parts.js';
import { pinById } from './component-pins.js';
import { componentForPart } from './part-component.js';
import { MAX_PART_SCALE, MIN_PART_SCALE, partScale } from './part-placement.js';
import { leadShapeError } from './part-pins.js';
import { internalConnectionsFor, viewForPart, viewPin } from './part-view.js';

export const MOUNTING_EPSILON = 1e-4;
const CALIBRATION_EPSILON = 1e-3;
const calibrations = new WeakMap();
const contactNets = new WeakMap();
const hostHoleCollections = new WeakMap();
const NO_HOLES = Object.freeze({ holes: Object.freeze([]), byId: new Map() });

function close(a, b, tolerance = MOUNTING_EPSILON) {
  return Math.abs(a - b) <= tolerance;
}

function calibratedAxis(contacts, component, axis) {
  const sorted = [...contacts].sort((a, b) => a[axis] - b[axis]);
  const first = sorted[0], last = sorted.at(-1);
  const firstPin = pinById(component, first.pinId);
  const distance = last[axis] - first[axis];
  if (close(distance, 0)) {
    return contacts.every(contact => close(pinById(component, contact.pinId)[axis], firstPin[axis], CALIBRATION_EPSILON))
      ? { constant: true } : null;
  }
  const units = (pinById(component, last.pinId)[axis] - firstPin[axis]) / distance;
  if (!Number.isFinite(units) || units <= 0) return null;
  const offset = firstPin[axis] - first[axis] * units;
  return contacts.every(contact => close(pinById(component, contact.pinId)[axis], offset + contact[axis] * units, CALIBRATION_EPSILON))
    ? { units } : null;
}

function calibrationFor(component) {
  if (!component) return null;
  if (calibrations.has(component)) return calibrations.get(component);
  const profile = mountingFor(component.id);
  let result = null;
  if (profile?.type === 'breadboard-part' && profile.mode === 'bendable' &&
      Number.isFinite(profile.unitsPerMm) && profile.unitsPerMm > 0) {
    result = { profile, x: profile.unitsPerMm, y: profile.unitsPerMm };
  } else if ((profile?.type === 'breadboard-module' || (profile?.type === 'breadboard-part' && profile.mode === 'rigid')) &&
      Number.isFinite(profile.pitch) && profile.pitch > 0 &&
      Array.isArray(profile.contacts) && profile.contacts.length >= 2) {
    const ids = new Set();
    const valid = profile.contacts.every(contact => {
      if (!contact || ids.has(contact.pinId) || !pinById(component, contact.pinId) ||
          ![contact.x, contact.y].every(Number.isFinite)) return false;
      ids.add(contact.pinId);
      return true;
    });
    if (valid && profile.calibration) {
      const { origin, unitsPerMm, toleranceMm = 0 } = profile.calibration;
      const tolerance = Math.max(CALIBRATION_EPSILON, unitsPerMm * toleranceMm + 1e-9);
      if (Number.isFinite(unitsPerMm) && unitsPerMm > 0 && origin &&
          [origin.x, origin.y].every(Number.isFinite) && toleranceMm >= 0 && toleranceMm <= .001 &&
          profile.contacts.every(contact => {
            const pin = viewPin(profile.view, contact.pinId) ?? pinById(component, contact.pinId);
            return close(pin.x, origin.x + contact.x * unitsPerMm, tolerance) &&
              close(pin.y, origin.y + contact.y * unitsPerMm, tolerance);
          })) result = { profile, x: unitsPerMm, y: unitsPerMm };
    } else if (valid) {
      const x = calibratedAxis(profile.contacts, component, 'x');
      const y = calibratedAxis(profile.contacts, component, 'y');
      // A single lead row can only establish one axis; apply its scale uniformly.
      if (x && y && (x.units || y.units)) {
        result = { profile, x: x.units ?? y.units, y: y.units ?? x.units };
      }
    }
  }
  calibrations.set(component, result);
  return result;
}

export function mountingScale(component, hostComponent) {
  const calibration = calibrationFor(component);
  const host = hostComponent && mountingFor(hostComponent.id);
  if (!calibration || host?.type !== 'breadboard' || !Number.isFinite(host.pitch) || host.pitch <= 0 ||
      !Number.isFinite(host.canvasPitch) || host.canvasPitch <= 0 ||
      (calibration.profile.mode !== 'bendable' && !close(calibration.profile.pitch, host.pitch))) return null;
  const units = host.canvasPitch / host.pitch;
  const scale = { x: units / calibration.x, y: units / calibration.y };
  return Object.values(scale).every(value => Number.isFinite(value) && value >= MIN_PART_SCALE && value <= MAX_PART_SCALE)
    ? scale : null;
}

// Manufacturer STEP/EAGLE exports can round a nominal header grid by one
// micrometre. Only explicitly reviewed profiles may declare that precision.
export function mountingTolerance(part, hostPart) {
  const profile = mountingFor(part.componentId), host = mountingFor(hostPart.componentId);
  const precision = profile?.calibration?.toleranceMm ?? 0;
  const scale = partScale(hostPart);
  return MOUNTING_EPSILON + precision * host.canvasPitch / host.pitch * Math.max(scale.x, scale.y);
}

function mountingHoleSet(hostComponent, guestProfile) {
  const host = hostComponent && mountingFor(hostComponent.id);
  if (host?.type !== 'breadboard' || typeof host.contacts !== 'function') return NO_HOLES;
  let variants = hostHoleCollections.get(hostComponent);
  if (!variants) {
    variants = new Map();
    hostHoleCollections.set(hostComponent, variants);
  }
  const rails = Boolean(guestProfile?.allowRails);
  if (!variants.has(rails)) {
    const records = [...host.contacts(hostComponent),
      ...(rails && typeof host.railContacts === 'function' ? host.railContacts(hostComponent) : [])];
    const byId = new Map(records.map(hole => [hole.pinId, Object.freeze({ ...hole })]));
    variants.set(rails, { holes: Object.freeze([...byId.values()]), byId });
  }
  return variants.get(rails);
}

export function mountingHoles(hostComponent, guestProfile) {
  return mountingHoleSet(hostComponent, guestProfile).holes;
}

export function sameContactNet(component, first, second, part) {
  if (!component) return false;
  let variants = contactNets.get(component);
  if (!variants) { variants = new Map(); contactNets.set(component, variants); }
  const groups = internalConnectionsFor(part, component);
  let nets = variants.get(groups);
  if (!nets) {
    const parents = new Map(component.pins.map(pin => [pin.id, pin.id]));
    const root = id => {
      while (parents.get(id) !== id) id = parents.get(id);
      return id;
    };
    for (const group of groups) {
      const first = root(group[0]);
      for (const id of group.slice(1)) parents.set(root(id), first);
    }
    nets = new Map([...parents.keys()].map(id => [id, root(id)]));
    variants.set(groups, nets);
  }
  return nets.has(first) && nets.has(second) && nets.get(first) === nets.get(second);
}

function sameScale(actual, expected) {
  return ['x', 'y'].every(axis => close(actual[axis], expected[axis], MOUNTING_EPSILON * Math.max(1, expected[axis])));
}

function attachmentIssue(project, part, checkCollisions) {
  const attachment = part.attachment;
  if (attachment === undefined) return null;
  if (!attachment || typeof attachment !== 'object' || Array.isArray(attachment) ||
      typeof attachment.hostPartId !== 'string' || !Array.isArray(attachment.contacts)) {
    return 'has an invalid breadboard attachment.';
  }
  if (attachment.hostPartId === part.id) return 'cannot attach to itself.';
  const hostPart = project.parts.find(candidate => candidate.id === attachment.hostPartId);
  if (!hostPart) return 'refers to a missing attachment host.';
  if (hostPart.attachment !== undefined) return 'cannot use an attached component as its host.';
  const component = componentForPart(part), hostComponent = componentForPart(hostPart);
  if (leadShapeError(part, component)) return 'has invalid formed lead geometry.';
  const calibration = calibrationFor(component);
  const hostProfile = hostComponent && mountingFor(hostComponent.id);
  const scale = mountingScale(component, hostComponent);
  if (!calibration || !scale || hostProfile?.type !== 'breadboard' || typeof hostProfile.contacts !== 'function') {
    return 'does not have a reviewed, compatible breadboard header layout.';
  }
  if (calibration.profile.view && !viewForPart(part)) return 'must use its explicit reviewed physical view before seating.';
  const hostScale = partScale(hostPart);
  const turned = Math.abs((part.rotation ?? 0) - (hostPart.rotation ?? 0)) % 180 !== 0;
  const expected = { x: scale.x * hostScale[turned ? 'y' : 'x'], y: scale.y * hostScale[turned ? 'x' : 'y'] };
  if (!sameScale(partScale(part), expected)) return 'does not use its calibrated breadboard scale.';
  const leads = new Set(calibration.profile.contacts.map(contact => contact.pinId));
  const bendable = calibration.profile.mode === 'bendable';
  if (bendable && part.leads === undefined) return 'must define its formed lead geometry before seating.';
  if (bendable ? attachment.contacts.length < 1 || attachment.contacts.length > leads.size : attachment.contacts.length !== leads.size) {
    return bendable ? 'must explicitly attach at least one formed lead.' : 'must attach every declared header contact.';
  }
  const holes = mountingHoleSet(hostComponent, calibration.profile).byId;
  const usedLeads = new Set(), usedHoles = new Set(), usedGroups = new Map();
  const tolerance = mountingTolerance(part, hostPart);
  for (const contact of attachment.contacts) {
    if (!contact || !leads.has(contact.pinId) || usedLeads.has(contact.pinId)) return 'has an invalid or repeated header contact.';
    const hole = holes.get(contact.hostPinId);
    if (!hole) return 'refers to a missing breadboard terminal hole.';
    if (usedHoles.has(contact.hostPinId)) return 'inserts multiple header contacts into one hole.';
    if (usedGroups.has(hole.group) && !sameContactNet(component, usedGroups.get(hole.group), contact.pinId, part)) {
      return 'would short separate header contacts on one breadboard strip.';
    }
    usedLeads.add(contact.pinId);
    usedHoles.add(contact.hostPinId);
    usedGroups.set(hole.group, contact.pinId);
    const guestPoint = pointOnPart(part, pinById(component, contact.pinId), component);
    const hostPoint = pointOnPart(hostPart, hole, hostComponent);
    if (!close(guestPoint.x, hostPoint.x, tolerance) || !close(guestPoint.y, hostPoint.y, tolerance)) return 'has header contacts that do not align with their breadboard holes.';
  }
  if (!checkCollisions) return null;
  for (const other of project.parts) {
    if (other.id === part.id || other.attachment?.hostPartId !== hostPart.id || !Array.isArray(other.attachment.contacts)) continue;
    // A lifted or stale relationship must not evict a valid stationary module.
    if (safeAttachmentIssue(project, other, false)) continue;
    if (other.attachment.contacts.some(contact => usedHoles.has(contact?.hostPinId))) return 'uses a breadboard hole occupied by another attached component.';
    if (partBodiesOverlap(part, other, MOUNTING_EPSILON)) {
      return 'overlaps another seated module on the same breadboard.';
    }
  }
  return null;
}

function safeAttachmentIssue(project, part, checkCollisions) {
  try {
    return attachmentIssue(project, part, checkCollisions);
  } catch {
    return 'has an invalid breadboard attachment.';
  }
}

export function attachmentError(project, part) {
  const issue = safeAttachmentIssue(project, part, true);
  return issue ? `Component “${part.id}” ${issue}` : null;
}

export function detachInvalidAttachments(project) {
  let changed = false;
  const parts = project.parts.map(part => {
    if (part.attachment === undefined || !attachmentError(project, part)) return part;
    const { attachment, ...detached } = part;
    changed = true;
    return detached;
  });
  return changed ? { ...project, parts } : project;
}

export function attachmentConnections(project) {
  const connections = [];
  for (const part of project.parts) {
    if (part.attachment === undefined || attachmentError(project, part)) continue;
    for (const contact of part.attachment.contacts) {
      connections.push({
        from: { partId: part.id, pinId: contact.pinId },
        to: { partId: part.attachment.hostPartId, pinId: contact.hostPinId },
      });
    }
  }
  return connections;
}
