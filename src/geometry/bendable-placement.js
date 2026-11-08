import { pinById } from '../model/component-pins.js';
import { componentForPart } from '../model/part-component.js';
import { attachmentError, mountingScale, sameContactNet } from '../model/mounting.js';
import { MAX_PART_SCALE, MIN_PART_SCALE } from '../model/part-placement.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { pointFromPart, pointOnPart } from './parts.js';
import { clearsMountedBodies, gap, mountingTargets, partCenter, placementRotations, poseAtCenter, relativeScale, turnDistance } from './breadboard-targets.js';

export function nominalLeads(component, profile) {
  return profile.contacts.map(({ pinId, x, y }) => ({ pinId,
    x: profile.origin.x + x * profile.unitsPerMm, y: profile.origin.y + y * profile.unitsPerMm }));
}

export function fitBendablePart(project, part, profile, { hostPartId, targets, rotation: requiredRotation } = {}) {
  const component = componentForPart(part), center = partCenter(part, component);
  let best;
  for (const host of targets ?? mountingTargets(project, part, profile)) {
    if (hostPartId && host.part.id !== hostPartId) continue;
    if (center.x < host.bounds.left - host.radius || center.x > host.bounds.right + host.radius ||
        center.y < host.bounds.top - host.radius || center.y > host.bounds.bottom + host.radius) continue;
    const intrinsic = mountingScale(component, host.component);
    if (!intrinsic) continue;
    for (const rotation of requiredRotation === undefined ? placementRotations(part) : [requiredRotation]) {
      const penalty = turnDistance(rotation, part.rotation ?? 0) * 1000000;
      if (best && penalty > best.cost) continue;
      const scale = relativeScale(intrinsic, host, rotation);
      if (Object.values(scale).some(value => value < MIN_PART_SCALE || value > MAX_PART_SCALE)) continue;
      const candidate = { ...poseAtCenter(part, component, center, scale, rotation),
        leads: part.leads ?? nominalLeads(component, profile) };
      delete candidate.attachment;
      if ([candidate.x, candidate.y].some(value => Math.abs(value) > POSITION_LIMIT)) continue;
      if (!clearsMountedBodies(candidate, host)) continue;
      const options = profile.contacts.map(({ pinId }) => {
        const point = pointOnPart(candidate, pinById(component, pinId), component);
        return { pinId, holes: host.available.filter(hole => gap(point, hole.point) <= host.radius)
          .sort((a, b) => gap(point, a.point) - gap(point, b.point)), point };
      }).sort((a, b) => a.holes.length - b.holes.length);
      if (options.some(option => !option.holes.length)) continue;
      function choose(index, contacts, leads, cost) {
        if (best && penalty + cost >= best.cost) return;
        if (index === options.length) {
          const placed = { ...candidate, leads: profile.contacts.map(contact => leads.find(lead => lead.pinId === contact.pinId)),
            attachment: { hostPartId: host.part.id, contacts: profile.contacts.map(({ pinId }) => {
              const match = contacts.find(contact => contact.pinId === pinId);
              return { pinId, hostPinId: match.hostPinId };
            }) } };
          const next = { ...project, parts: project.parts.map(other => other.id === part.id ? placed : other) };
          if (!attachmentError(next, placed)) best = { cost: penalty + cost, part: placed, contacts, hostPartId: host.part.id };
          return;
        }
        const option = options[index];
        for (const hole of option.holes) {
          if (contacts.some(contact => contact.hostPinId === hole.pinId ||
              contact.group === hole.group && !sameContactNet(component, contact.pinId, option.pinId))) continue;
          const point = pointFromPart(candidate, hole.point, component);
          choose(index + 1, [...contacts, { pinId: option.pinId, hostPinId: hole.pinId, point: hole.point, group: hole.group }],
            [...leads, { pinId: option.pinId, x: point.x, y: point.y }], cost + gap(option.point, hole.point));
        }
      }
      choose(0, [], [], 0);
    }
  }
  if (!best) return null;
  const { cost, ...fit } = best;
  fit.contacts = fit.contacts.map(({ group, ...contact }) => contact);
  return fit;
}
