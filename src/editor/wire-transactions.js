import { componentForPart } from '../model/part-component.js';
import { pinById } from '../model/component-pins.js';
import { makeId } from '../model/project.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { routeFor, splitWire, wireAnchor } from '../geometry/routing.js';

export function automaticWaypoints(route) {
  const points = route.slice(1, -1).map(({ x, y }) => ({ x, y }));
  if (points.some(({ x, y }) => Math.abs(x) > POSITION_LIMIT || Math.abs(y) > POSITION_LIMIT)) {
    return { fixedRoute: false, points: [] };
  }
  return { fixedRoute: true, points };
}

export function resolveAnchor(wires, anchor, position) {
  if (!anchor.wireId) return { endpoint: anchor };
  const index = wires.findIndex(wire => wire.id === anchor.wireId);
  const target = wires[index];
  if (!target) return null;
  const snapped = wireAnchor(target, routeFor(target, position), anchor.point, 0);
  if (!snapped) return null;
  if (!snapped.wireId) return { endpoint: snapped };
  const split = splitWire(target, position, snapped.point, makeId('junction'), makeId('wire'));
  wires.splice(index, 1, split.before, split.after);
  return { endpoint: { junctionId: split.junction.id }, junction: split.junction };
}

export function connectWire(project, draft, end, color, position, plan) {
  const wires = [...project.wires];
  let junctions = project.junctions;
  function endpoint(anchor) {
    const result = resolveAnchor(wires, anchor, position);
    if (result?.junction) junctions = [...(junctions ?? []), result.junction];
    return result?.endpoint;
  }

  const wire = { id: makeId('wire'), from: endpoint(draft.from), to: endpoint(end), color };
  if (!wire.from || !wire.to) return null;
  if (draft.points.length) wire.points = draft.points;
  else if (plan) Object.assign(wire, automaticWaypoints(plan));
  wires.push(wire);
  return {
    next: { ...project, wires, ...(junctions && { junctions }) },
    wire,
  };
}

export function targetExists(project, endpoint) {
  if (!endpoint || typeof endpoint !== 'object') return false;
  if (endpoint.wireId) return Number.isFinite(endpoint.point?.x) && Number.isFinite(endpoint.point?.y)
    && project.wires.some(wire => wire.id === endpoint.wireId);
  if (endpoint.junctionId) return project.junctions?.some(junction => junction.id === endpoint.junctionId);
  const part = project.parts.find(item => item.id === endpoint.partId);
  return Boolean(pinById(componentForPart(part), endpoint.pinId));
}
