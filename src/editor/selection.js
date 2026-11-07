import { POSITION_LIMIT, MAX_FIXED_ROUTE_POINTS } from '../model/limits.js';
import { componentForPart } from '../model/part-component.js';
import { updateItem } from '../model/items.js';
import { partBounds as boundsForPart, endpointPositions } from '../geometry/parts.js';
import { clampPoint, routeFor } from '../geometry/routing.js';

export function selectionRect(start, end) {
  return {
    left: Math.min(start.x, end.x), top: Math.min(start.y, end.y),
    right: Math.max(start.x, end.x), bottom: Math.max(start.y, end.y),
  };
}

const pointInRect = (point, rect) => point.x >= rect.left && point.x <= rect.right &&
  point.y >= rect.top && point.y <= rect.bottom;

const rectContains = (outer, inner) => inner.left >= outer.left && inner.right <= outer.right &&
  inner.top >= outer.top && inner.bottom <= outer.bottom;

const rectIntersects = (a, b) => a.left <= b.right && a.right >= b.left &&
  a.top <= b.bottom && a.bottom >= b.top;

export function segmentIntersectsRect(start, end, rect) {
  let low = 0;
  let high = 1;
  for (const [origin, delta, minimum, maximum] of [
    [start.x, end.x - start.x, rect.left, rect.right],
    [start.y, end.y - start.y, rect.top, rect.bottom],
  ]) {
    if (!delta) {
      if (origin < minimum || origin > maximum) return false;
      continue;
    }
    const first = (minimum - origin) / delta;
    const second = (maximum - origin) / delta;
    low = Math.max(low, Math.min(first, second));
    high = Math.min(high, Math.max(first, second));
    if (low > high) return false;
  }
  return true;
}

export function polylineInRect(points, rect, crossing = false) {
  if (!points?.length) return false;
  if (!crossing) return points.every(point => pointInRect(point, rect));
  return points.some((point, index) => pointInRect(point, rect) ||
    index > 0 && segmentIntersectsRect(points[index - 1], point, rect));
}

export function selectionInBox(project, start, end, { partBounds, wirePoints }) {
  const rect = selectionRect(start, end);
  const crossing = end.x < start.x;
  const selected = [];
  for (const part of project.parts) {
    const bounds = partBounds(part);
    const containsOnly = componentForPart(part)?.surface;
    if (bounds && (crossing && !containsOnly ? rectIntersects(rect, bounds) : rectContains(rect, bounds))) {
      selected.push({ type: 'part', id: part.id });
    }
  }
  for (const wire of project.wires) {
    if (polylineInRect(wirePoints(wire), rect, crossing)) selected.push({ type: 'wire', id: wire.id });
  }
  for (const junction of project.junctions ?? []) {
    if (pointInRect(junction, rect)) selected.push({ type: 'junction', id: junction.id });
  }
  return selected;
}

export const selectionKey = ({ type, id }) => `${type}:${id}`;

const movementPlans = new WeakMap();

function splitAtBorders(route, containers) {
  const points = [];
  for (let index = 0; index + 1 < route.length; index++) {
    const start = route[index], end = route[index + 1];
    points.push({ x: start.x, y: start.y });
    const horizontal = start.y === end.y;
    const axis = horizontal ? 'x' : 'y';
    const across = horizontal ? 'y' : 'x';
    const distance = end[axis] - start[axis];
    if (!distance) continue;
    const cuts = new Set();
    for (const bounds of containers) {
      if (start[across] < (horizontal ? bounds.top : bounds.left) ||
          start[across] > (horizontal ? bounds.bottom : bounds.right)) continue;
      for (const edge of horizontal ? [bounds.left, bounds.right] : [bounds.top, bounds.bottom]) {
        const fraction = (edge - start[axis]) / distance;
        if (fraction > 0 && fraction < 1) cuts.add(fraction);
      }
    }
    for (const fraction of [...cuts].sort((a, b) => a - b)) {
      points.push({ [axis]: start[axis] + distance * fraction, [across]: start[across] });
    }
  }
  if (route.length) points.push({ x: route.at(-1).x, y: route.at(-1).y });
  return points;
}

function movementPlan(project, selections) {
  const keys = new Set(selections.map(selectionKey));
  const key = [...keys].sort().join('|');
  const cached = Object.isFrozen(project) && movementPlans.get(project);
  if (cached?.key === key) return cached.plan;
  const containers = project.parts.filter(part => keys.has(`part:${part.id}`) && componentForPart(part).surface)
    .map(part => boundsForPart(part));
  const inside = point => containers.some(bounds => pointInRect(point, bounds));
  const partIds = new Set(project.parts.filter(part => keys.has(`part:${part.id}`) ||
    containers.some(bounds => rectContains(bounds, boundsForPart(part)))).map(part => part.id));
  const junctionIds = new Set((project.junctions ?? []).filter(junction =>
    keys.has(`junction:${junction.id}`) || inside(junction)).map(junction => junction.id));
  const endpointMoves = endpoint => endpoint.partId ? partIds.has(endpoint.partId) : junctionIds.has(endpoint.junctionId);
  const wires = new Map();
  const position = containers.length ? endpointPositions(project) : null;
  for (const wire of project.wires) {
    const explicit = keys.has(`wire:${wire.id}`);
    const fromMoves = endpointMoves(wire.from), toMoves = endpointMoves(wire.to);
    if (explicit || !containers.length && fromMoves && toMoves) {
      if (wire.points?.length) wires.set(wire.id, { points: wire.points, mask: wire.points.map(() => true) });
      continue;
    }
    if (!containers.length) continue;
    const route = routeFor(wire, position);
    // A crossing wire that has no attachment or bend inside the container remains independent.
    if (!fromMoves && !toMoves && !wire.points?.some(inside) && !route.every(inside)) continue;
    const clipped = splitAtBorders(route, containers);
    const materialize = clipped.length - 2 <= MAX_FIXED_ROUTE_POINTS && clipped.slice(1, -1)
      .every(point => Math.abs(point.x) <= POSITION_LIMIT && Math.abs(point.y) <= POSITION_LIMIT);
    const points = materialize ? clipped.slice(1, -1) : wire.points ?? [];
    const mask = points.map(point => inside(point) ||
      fromMoves && position(wire.from).normal && point.x === route[1]?.x && point.y === route[1]?.y ||
      toMoves && position(wire.to).normal && point.x === route.at(-2)?.x && point.y === route.at(-2)?.y);
    if (mask.some(Boolean)) wires.set(wire.id, { points, mask, ...(materialize && { fixedRoute: true }) });
  }
  const points = [
    ...project.parts.filter(part => partIds.has(part.id)),
    ...(project.junctions ?? []).filter(junction => junctionIds.has(junction.id)),
    ...[...wires.values()].flatMap(wire => wire.points.filter((_, index) => wire.mask[index])),
  ];
  const plan = { partIds, junctionIds, wires, points };
  if (Object.isFrozen(project)) movementPlans.set(project, { key, plan });
  return plan;
}

function selectionOffset(project, selections, dx, dy, round) {
  if (!Number.isFinite(dx) || !Number.isFinite(dy)) return null;
  if (round) { dx = Math.round(dx); dy = Math.round(dy); }
  const plan = movementPlan(project, selections);
  if (!plan.points.length) return null;
  // Clamp the shared offset once so a group keeps its spacing at the workspace boundary.
  for (const point of plan.points) {
    dx = Math.max(-POSITION_LIMIT - point.x, Math.min(POSITION_LIMIT - point.x, dx));
    dy = Math.max(-POSITION_LIMIT - point.y, Math.min(POSITION_LIMIT - point.y, dy));
  }
  if (!dx && !dy) return null;
  return { dx, dy, ...plan };
}

export function translateSelection(project, selections, dx, dy, { round = true } = {}) {
  const offset = selectionOffset(project, selections, dx, dy, round);
  if (!offset) return null;
  const translate = point => ({ ...point, x: point.x + offset.dx, y: point.y + offset.dy });
  return {
    ...project,
    parts: project.parts.map(part => offset.partIds.has(part.id) ? translate(part) : part),
    wires: project.wires.map(wire => {
      const edit = offset.wires.get(wire.id);
      return edit ? { ...wire, points: edit.points.map((point, index) => edit.mask[index] ? translate(point) : point),
        ...(edit.fixedRoute && { fixedRoute: true }) } : wire;
    }),
    ...(project.junctions && {
      junctions: project.junctions.map(junction => offset.junctionIds.has(junction.id) ? translate(junction) : junction),
    }),
  };
}

export function translatePart(project, partId, destination) {
  const part = project.parts.find(part => part.id === partId);
  if (!part) return null;
  const point = clampPoint(destination);
  if (point.x === part.x && point.y === part.y) return null;
  return componentForPart(part).surface
    ? translateSelection(project, [{ type: 'part', id: partId }], point.x - part.x, point.y - part.y, { round: false })
    : updateItem(project, 'part', partId, point);
}
