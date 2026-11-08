import { componentById, mountingFor } from '../catalog/index.js';
import { makeId } from '../model/project.js';
import { mountingScale } from '../model/mounting.js';
import { pointOnPart } from '../geometry/parts.js';
import { pinById } from '../model/component-pins.js';
import { fitPart } from '../geometry/breadboard-placement.js';
import { gap, mountingTargets, partCenter, relativeScale } from '../geometry/breadboard-targets.js';
import { nominalLeads } from '../geometry/bendable-placement.js';

export function suggestPlacement(project, componentId, hostPartId) {
  const component = componentById.get(componentId), profile = mountingFor(componentId);
  if (!component || !profile || profile.type === 'breadboard') return null;
  const probe = { id: makeId('placement'), componentId, x: 0, y: 0 };
  const candidateProject = { ...project, parts: [...project.parts, probe] };
  const hosts = mountingTargets(candidateProject, probe, profile, { nearby: false })
    .filter(host => !hostPartId || host.part.id === hostPartId);
  for (const host of hosts) {
    const intrinsic = mountingScale(component, host.component);
    if (!intrinsic) continue;
    const middle = partCenter(host.part, host.component);
    const holes = host.holes.filter(hole => !host.occupied.has(hole.pinId)).sort((a, b) => gap(a.point, middle) - gap(b.point, middle));
    for (const rotation of [0, 90, 180, 270]) {
      const scale = relativeScale(intrinsic, host, rotation);
      const base = { ...probe, rotation, scale,
        ...(profile.mode === 'bendable' ? { leads: nominalLeads(component, profile) } : {}) };
      const first = pointOnPart(base, pinById(component, profile.contacts[0].pinId), component);
      for (const hole of holes) {
        const part = { ...base, x: hole.point.x - first.x, y: hole.point.y - first.y };
        const center = partCenter(part, component);
        const point = { x: center.x - component.width / 2, y: center.y - component.height / 2 };
        // Test the actual rounded input used by library insertion, so a click
        // never promises a fit that its final placement cannot reproduce.
        const raw = { ...probe, x: Math.round(point.x), y: Math.round(point.y), rotation };
        const next = { ...project, parts: [...project.parts, raw] };
        if (fitPart(next, raw, { hostPartId: host.part.id, targets: [host], rotation, anchorHoleId: hole.pinId })) return { ...point, rotation };
      }
    }
  }
  return null;
}
