import { updateItem } from './editor.js';
import { clampPoint, endpointPositions, moveWireBend, nearestSegment, routeFor, segmentDrag, slideSegment } from './routing.js';

function wireTarget(wire, position, target, destination) {
  const route = routeFor(wire, position);
  if (target.kind === 'bend') {
    const index = route.findIndex(point => point.x === destination.x && point.y === destination.y);
    return index > 0 && index < route.length - 1 ? { ...target, index, point: destination } : null;
  }
  let index;
  let nearest = Infinity;
  for (let current = 0; current + 1 < route.length; current++) {
    const start = route[current];
    const end = route[current + 1];
    if ((start.x === end.x ? 'x' : 'y') !== target.axis) continue;
    const hit = nearestSegment([start, end], destination);
    const distance = (hit.point.x - destination.x) ** 2 + (hit.point.y - destination.y) ** 2;
    if (distance < nearest) {
      index = current;
      nearest = distance;
    }
  }
  if (index === undefined) return null;
  const start = route[index];
  const end = route[index + 1];
  return {
    ...target, index, axis: start.x === end.x ? 'x' : 'y',
    point: { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 },
  };
}

export function nudgeTarget(project, target, dx, dy) {
  if (!Number.isFinite(dx) || !Number.isFinite(dy) || (!dx && !dy)) return null;
  if (target.kind === 'part' || target.kind === 'junction') {
    const collection = target.kind === 'part' ? project.parts : project.junctions;
    const item = collection?.find(item => item.id === target.id);
    if (!item) return null;
    const point = clampPoint({ x: item.x + dx, y: item.y + dy });
    if (point.x === item.x && point.y === item.y) return null;
    return { project: updateItem(project, target.kind, item.id, point), target };
  }

  const wire = project.wires.find(wire => wire.id === target.wireId);
  if (!wire || !['bend', 'segment'].includes(target.kind) || !Number.isFinite(target.point?.x) || !Number.isFinite(target.point?.y)) return null;
  const position = endpointPositions(project);
  const destination = clampPoint({ x: target.point.x + dx, y: target.point.y + dy });
  let points;
  if (target.kind === 'bend') {
    points = moveWireBend(wire, position, target.point, destination);
  } else if (target.kind === 'segment') {
    const segment = segmentDrag(wire, position, target.point, target.index);
    const delta = segment?.axis === 'x' ? dx : dy;
    if (!segment || !delta) return null;
    destination[segment.axis === 'x' ? 'y' : 'x'] = target.point[segment.axis === 'x' ? 'y' : 'x'];
    points = slideSegment(segment, delta);
  }
  if (!points) return null;
  const edited = { ...wire, fixedRoute: true, points };
  const before = routeFor(wire, position);
  const after = routeFor(edited, position);
  if (before.length === after.length && before.every((point, index) => point.x === after[index].x && point.y === after[index].y)) return null;
  return {
    project: updateItem(project, 'wire', wire.id, { fixedRoute: true, points }),
    target: wireTarget(edited, position, target, destination),
  };
}
