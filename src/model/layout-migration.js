import { version1Contacts } from '../catalog/data/contact-layout-v1.js';
import { pointOnPart } from '../geometry/parts.js';
import { componentForPart } from './part-component.js';

// Version 1 placed logical banks on component edges and routed a 15-unit lead
// outside them. Retire only that endpoint's obsolete bank/lead waypoints.
const BANK_LEAD = 15;

export function migrateVersion1Contacts(project) {
  const parts = new Map(project.parts.map(part => [part.id, part]));
  function bankStub(endpoint) {
    const part = parts.get(endpoint.partId);
    const prior = version1Contacts[part?.componentId]?.[endpoint.pinId];
    if (!prior) return null;
    const component = componentForPart(part), [x, y] = prior;
    const dx = x === 0 ? -1 : x === component.width ? 1 : 0;
    const dy = dx ? 0 : y === 0 ? -1 : y === component.height ? 1 : 0;
    const anchor = pointOnPart(part, { x, y }, component);
    const end = pointOnPart(part, { x: x + dx * BANK_LEAD, y: y + dy * BANK_LEAD }, component);
    return { left: Math.min(anchor.x, end.x), right: Math.max(anchor.x, end.x),
      top: Math.min(anchor.y, end.y), bottom: Math.max(anchor.y, end.y) };
  }
  const inside = (point, bounds) => bounds && point.x >= bounds.left - 1e-6 && point.x <= bounds.right + 1e-6 &&
    point.y >= bounds.top - 1e-6 && point.y <= bounds.bottom + 1e-6;
  return {
    ...project,
    wires: project.wires.map(wire => {
      if (!wire.points?.length) return wire;
      const from = bankStub(wire.from), to = bankStub(wire.to);
      let first = 0, last = wire.points.length;
      while (first < last && inside(wire.points[first], from)) first++;
      while (last > first && inside(wire.points[last - 1], to)) last--;
      return first || last !== wire.points.length ? { ...wire, points: wire.points.slice(first, last) } : wire;
    }),
  };
}
