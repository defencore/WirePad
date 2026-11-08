import { mountingFor } from '../catalog/index.js';
import { componentForPart } from '../model/part-component.js';
import { partScale, partSize } from '../model/part-placement.js';
import { mountingHoles } from '../model/mounting.js';
import { breadboardOccupancy } from '../model/breadboard-occupancy.js';
import { partBodyBounds, partBounds, pointOnPart } from './parts.js';

export function partCenter(part, component = componentForPart(part)) {
  const size = partSize(part, component);
  return { x: part.x + size.width / 2, y: part.y + size.height / 2 };
}

export function unavailableHoles(project, hostPartId, holes, ignorePartId) {
  const unavailable = new Set(breadboardOccupancy(project, hostPartId, { ignorePartId }).keys());
  for (const part of project.parts) {
    if (part.id === ignorePartId || part.attachment?.hostPartId !== hostPartId && !(part.leads && !part.attachment)) continue;
    const bounds = partBodyBounds(part);
    for (const hole of holes) if (hole.point.x > bounds.left && hole.point.x < bounds.right &&
        hole.point.y > bounds.top && hole.point.y < bounds.bottom) unavailable.add(hole.pinId);
  }
  return unavailable;
}

export function clearsMountedBodies(part, host) {
  const bounds = partBodyBounds(part);
  return host.bodies.every(other => Math.min(bounds.right, other.right) - Math.max(bounds.left, other.left) <= 1e-4 ||
    Math.min(bounds.bottom, other.bottom) - Math.max(bounds.top, other.top) <= 1e-4);
}

export function mountingTargets(project, part, profile, { nearby = true } = {}) {
  const center = partCenter(part), hosts = [];
  for (const hostPart of project.parts) {
    if (hostPart.id === part.id) continue;
    const component = componentForPart(hostPart);
    const capability = mountingFor(component.id);
    if (capability?.type !== 'breadboard') continue;
    const scale = partScale(hostPart);
    const radius = capability.canvasPitch * Math.max(scale.x, scale.y) * .9;
    const bounds = partBounds(hostPart, component);
    if (nearby && (center.x < bounds.left - radius || center.x > bounds.right + radius ||
        center.y < bounds.top - radius || center.y > bounds.bottom + radius)) continue;
    const holes = mountingHoles(component, profile).map(hole => ({ ...hole, point: pointOnPart(hostPart, hole, component) }));
    const occupied = unavailableHoles(project, hostPart.id, holes, part.id);
    const positions = new Map(holes.map(hole => [`${Math.round(hole.point.x * 10000)},${Math.round(hole.point.y * 10000)}`, hole]));
    const bodies = project.parts.filter(other => other.id !== part.id &&
      (other.attachment?.hostPartId === hostPart.id || other.leads && !other.attachment))
      .map(other => partBodyBounds(other));
    hosts.push({ part: hostPart, component, capability, scale, radius, bounds, holes, positions, occupied, bodies,
      available: holes.filter(hole => !occupied.has(hole.pinId)) });
  }
  return hosts;
}

export function poseAtCenter(part, component, center, scale, rotation) {
  return { ...part, x: center.x - component.width * scale.x / 2,
    y: center.y - component.height * scale.y / 2, scale, rotation };
}

export function relativeScale(intrinsic, host, rotation) {
  const turned = Math.abs(rotation - (host.part.rotation ?? 0)) % 180 !== 0;
  return { x: intrinsic.x * host.scale[turned ? 'y' : 'x'], y: intrinsic.y * host.scale[turned ? 'x' : 'y'] };
}

export const gap = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
export const turnDistance = (a, b) => Math.min((a - b + 360) % 360, (b - a + 360) % 360) / 90;
export const placementRotations = part => [0, 90, 180, 270]
  .sort((a, b) => turnDistance(a, part.rotation ?? 0) - turnDistance(b, part.rotation ?? 0));
