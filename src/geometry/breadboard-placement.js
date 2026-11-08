import { mountingFor } from '../catalog/index.js';
import { pinById } from '../model/component-pins.js';
import { componentForPart } from '../model/part-component.js';
import { MAX_PART_SCALE, MIN_PART_SCALE } from '../model/part-placement.js';
import { attachmentError, MOUNTING_EPSILON, mountingScale, mountingTolerance, sameContactNet } from '../model/mounting.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { activateMountingView } from '../model/part-view.js';
import { pointOnPart } from './parts.js';
import { fitBendablePart } from './bendable-placement.js';
import { clearsMountedBodies, mountingTargets, partCenter, poseAtCenter } from './breadboard-targets.js';

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const turnDistance = (a, b) => Math.min((a - b + 360) % 360, (b - a + 360) % 360) / 90;

function holeAt(point, positions, available, tolerance) {
  const x = Math.round(point.x * 10000), y = Math.round(point.y * 10000);
  let best, minimum = MOUNTING_EPSILON;
  for (const dx of [-1, 0, 1]) for (const dy of [-1, 0, 1]) {
    const hole = positions.get(`${x + dx},${y + dy}`);
    const gap = hole && distance(point, hole.point);
    if (hole && gap <= minimum) { best = hole; minimum = gap; }
  }
  if (!best && tolerance > MOUNTING_EPSILON) {
    let minimum = tolerance;
    for (const hole of available) {
      const gap = distance(point, hole.point);
      if (gap <= minimum) { best = hole; minimum = gap; }
    }
  }
  return best;
}

// Every lead must fit a reviewed physical grid. Bounding-box overlap never
// establishes an electrical connection or permits a partial header insertion.
export function fitPart(project, part, { hostPartId, targets, rotation: requiredRotation, anchorHoleId } = {}) {
  const component = componentForPart(part);
  const profile = component && mountingFor(component.id);
  if (!['breadboard-module', 'breadboard-part'].includes(profile?.type)) return null;
  if (profile.mode === 'bendable') return fitBendablePart(project, part, profile, { hostPartId, targets, rotation: requiredRotation });
  const center = partCenter(part, component);
  const currentRotation = part.rotation ?? 0;
  const rotations = requiredRotation === undefined
    ? [0, 90, 180, 270].sort((a, b) => turnDistance(a, currentRotation) - turnDistance(b, currentRotation)) : [requiredRotation];
  let best;
  for (const target of targets ?? mountingTargets(project, part, profile)) {
    const { part: hostPart, component: hostComponent, scale: hostScale, radius, bounds, holes, positions: byPosition, occupied } = target;
    if (hostPartId && hostPart.id !== hostPartId) continue;
    if (center.x < bounds.left - radius || center.x > bounds.right + radius ||
        center.y < bounds.top - radius || center.y > bounds.bottom + radius) continue;
    const calibration = mountingScale(component, hostComponent);
    if (!calibration) continue;
    const tolerance = mountingTolerance(part, hostPart);
    for (const rotation of rotations) {
      const penalty = turnDistance(rotation, currentRotation) * 1000000;
      if (best && penalty > best.cost) continue;
      const turned = Math.abs(rotation - (hostPart.rotation ?? 0)) % 180 !== 0;
      const scale = { x: calibration.x * hostScale[turned ? 'y' : 'x'], y: calibration.y * hostScale[turned ? 'x' : 'y'] };
      if (Object.values(scale).some(value => value < MIN_PART_SCALE || value > MAX_PART_SCALE)) continue;
      const candidate = poseAtCenter(activateMountingView(part, profile), component, center, scale, rotation);
      const first = pointOnPart(candidate, pinById(component, profile.contacts[0].pinId), component);
      const anchors = (anchorHoleId ? holes.filter(hole => hole.pinId === anchorHoleId) : target.available)
        .filter(hole => !occupied.has(hole.pinId) && distance(first, hole.point) <= radius)
        .sort((a, b) => distance(first, a.point) - distance(first, b.point));
      for (const anchor of anchors) {
        const dx = anchor.point.x - first.x, dy = anchor.point.y - first.y;
        const cost = penalty + Math.hypot(dx, dy);
        if (best && cost >= best.cost) continue;
        const placed = { ...candidate, x: candidate.x + dx, y: candidate.y + dy };
        if ([placed.x, placed.y].some(value => !Number.isFinite(value) || Math.abs(value) > POSITION_LIMIT)) continue;
        if (!clearsMountedBodies(placed, target)) continue;
        const groups = new Map(), used = new Set(), contacts = [];
        for (const lead of profile.contacts) {
          const point = pointOnPart(placed, pinById(component, lead.pinId), component);
          const hole = holeAt(point, byPosition, target.available, tolerance);
          if (!hole || occupied.has(hole.pinId) || used.has(hole.pinId) ||
              groups.has(hole.group) && !sameContactNet(component, groups.get(hole.group), lead.pinId, placed)) break;
          groups.set(hole.group, lead.pinId);
          used.add(hole.pinId);
          contacts.push({ pinId: lead.pinId, hostPinId: hole.pinId, point: hole.point });
        }
        if (contacts.length !== profile.contacts.length) continue;
        placed.attachment = { hostPartId: hostPart.id, contacts: contacts.map(({ pinId, hostPinId }) => ({ pinId, hostPinId })) };
        const next = { ...project, parts: project.parts.map(other => other.id === part.id ? placed : other) };
        if (attachmentError(next, placed)) continue;
        best = { cost, part: placed, hostPartId: hostPart.id, contacts };
      }
    }
  }
  if (!best) return null;
  const { cost, ...fit } = best;
  return fit;
}
