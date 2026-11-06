import { componentById } from './catalog.js';

const LEAD = 15;
const positionLimit = 1_000_000;

export const sameEndpoint = (a, b) => a.junctionId
  ? a.junctionId === b.junctionId
  : !b.junctionId && a.partId === b.partId && a.pinId === b.pinId;

export const endpointKey = ({ junctionId, partId, pinId }) => junctionId ? `junction/${junctionId}` : `pin/${partId}/${pinId}`;
export const bounded = value => Math.max(-positionLimit, Math.min(positionLimit, Math.round(value)));
export const clampPoint = ({ x, y }) => ({ x: bounded(x), y: bounded(y) });

function rotate({ x, y }, rotation) {
  switch (rotation) {
    case 90: return { x: -y, y: x };
    case 180: return { x: -x, y: -y };
    case 270: return { x: y, y: -x };
    default: return { x, y };
  }
}

function pinVector(pin, component) {
  if (pin.x === 0) return { x: -1, y: 0 };
  if (pin.x === component.width) return { x: 1, y: 0 };
  if (pin.y === 0) return { x: 0, y: -1 };
  if (pin.y === component.height) return { x: 0, y: 1 };
  return { x: 1, y: 0 };
}

export function endpointPositions(project) {
  const parts = new Map(project.parts.map(part => [part.id, part]));
  const junctions = new Map((project.junctions ?? []).map(junction => [junction.id, junction]));
  return endpoint => {
    if (endpoint.wireId) return endpoint.point;
    if (endpoint.junctionId) return junctions.get(endpoint.junctionId);
    const part = parts.get(endpoint.partId);
    const component = componentById.get(part.componentId);
    const pin = component.pins.find(item => item.id === endpoint.pinId);
    const cx = component.width / 2;
    const cy = component.height / 2;
    const offset = rotate({ x: pin.x - cx, y: pin.y - cy }, part.rotation);
    const normal = rotate(pinVector(pin, component), part.rotation);
    return { x: part.x + cx + offset.x, y: part.y + cy + offset.y, normal };
  };
}

function lead(point) {
  return point.normal ? { x: point.x + point.normal.x * LEAD, y: point.y + point.normal.y * LEAD } : point;
}

function equal(a, b) {
  return a.x === b.x && a.y === b.y;
}

function follows(a, b) {
  return a.normal.x ? a.y === b.y && (b.x - a.x) * a.normal.x >= 0 :
    a.x === b.x && (b.y - a.y) * a.normal.y >= 0;
}

function connectPoints(points, target, horizontalFirst) {
  const previous = points.at(-1);
  if (previous.x !== target.x && previous.y !== target.y) {
    points.push(horizontalFirst ? { x: target.x, y: previous.y } : { x: previous.x, y: target.y });
  }
  if (!equal(previous, target)) points.push(target);
}

export function wireRoute(start, end, bends = [], fixedRoute = false) {
  const a = lead(start);
  const b = lead(end);
  const points = [start];
  if (bends.length || fixedRoute) {
    const first = bends[0] ?? end;
    const last = bends.at(-1) ?? start;
    if (start.normal && !follows(start, first)) points.push(a);
    for (const bend of bends) connectPoints(points, bend, true);
    if (end.normal && !follows(end, last)) connectPoints(points, b, end.normal.x === 0);
  } else {
    if (start.normal) points.push(a);
    if (start.normal?.x && end.normal?.x) {
      const x = start.normal.x === end.normal.x
        ? (start.normal.x > 0 ? Math.max(a.x, b.x) + LEAD : Math.min(a.x, b.x) - LEAD)
        : (a.x + b.x) / 2;
      points.push({ x, y: a.y }, { x, y: b.y }, b);
    } else if (start.normal?.y && end.normal?.y) {
      const y = start.normal.y === end.normal.y
        ? (start.normal.y > 0 ? Math.max(a.y, b.y) + LEAD : Math.min(a.y, b.y) - LEAD)
        : (a.y + b.y) / 2;
      points.push({ x: a.x, y }, { x: b.x, y }, b);
    } else {
      connectPoints(points, b, start.normal ? Boolean(start.normal.x) : !end.normal?.x);
    }
  }
  connectPoints(points, end, true);
  return points.filter((point, index) => index === 0 || !equal(point, points[index - 1]));
}

export function routeFor(wire, position) {
  return wireRoute(position(wire.from), position(wire.to), wire.points, wire.fixedRoute);
}

function compact(route) {
  const simplified = [];
  for (const point of route) {
    const previous = simplified.at(-1);
    if (previous && equal(previous, point)) continue;
    const before = simplified.at(-2);
    if (before && ((point.y === previous.y && previous.y === before.y &&
      (point.x - previous.x) * (previous.x - before.x) > 0) ||
      (point.x === previous.x && previous.x === before.x &&
      (point.y - previous.y) * (previous.y - before.y) > 0))) {
      simplified.pop();
    }
    simplified.push(point);
  }
  return simplified;
}

export function nearestSegment(route, target) {
  let nearest = null;
  for (let index = 0; index + 1 < route.length; index++) {
    const start = route[index];
    const end = route[index + 1];
    const x = Math.max(Math.min(start.x, end.x), Math.min(Math.max(start.x, end.x), target.x));
    const y = Math.max(Math.min(start.y, end.y), Math.min(Math.max(start.y, end.y), target.y));
    const distance = Math.hypot(target.x - x, target.y - y);
    if (!nearest || distance < nearest.distance) nearest = { index, point: { x, y }, distance };
  }
  return nearest;
}

export function segmentDrag(wire, position, point) {
  const route = compact(routeFor(wire, position));
  const segment = nearestSegment(route, point);
  if (!segment) return null;
  const a = route[segment.index];
  const b = route[segment.index + 1];
  return { route, index: segment.index, axis: a.x === b.x ? 'x' : 'y' };
}

export function slideSegment({ route, index, axis }, delta) {
  const a = route[index];
  const b = route[index + 1];
  const cross = axis === 'x' ? 'y' : 'x';
  const sectionLength = Math.abs(b[cross] - a[cross]);
  const inset = Math.min(LEAD, sectionLength / 3);
  const direction = Math.sign(b[cross] - a[cross]);
  const coordinate = bounded(a[axis] + delta);
  const first = index === 0;
  const last = index === route.length - 2;
  const innerA = { ...a, [cross]: a[cross] + (first ? inset * direction : 0) };
  const innerB = { ...b, [cross]: b[cross] - (last ? inset * direction : 0) };
  const updated = [
    ...route.slice(0, index),
    ...(first ? [a, innerA] : []),
    { ...innerA, [axis]: coordinate },
    { ...innerB, [axis]: coordinate },
    ...(last ? [innerB, b] : []),
    ...route.slice(index + 2),
  ];
  return compact(updated).slice(1, -1).map(({ x, y }) => ({ x, y }));
}

export function wireAnchor(wire, position, target, threshold) {
  const route = routeFor(wire, position);
  const nearest = nearestSegment(route, target);
  if (!nearest) return null;
  const { point } = nearest;
  for (const [end, endpoint] of [[route[0], wire.from], [route.at(-1), wire.to]]) {
    if (Math.hypot(end.x - point.x, end.y - point.y) <= threshold) return endpoint;
  }
  return { wireId: wire.id, point };
}

export function splitWire(wire, position, point, junctionId, newWireId) {
  const route = routeFor(wire, position);
  const { index, point: split } = nearestSegment(route, point);
  const junction = { id: junctionId, ...split };
  const routePoints = points => compact(points).slice(1, -1).map(({ x, y }) => ({ x, y }));
  const before = { ...wire, to: { junctionId }, fixedRoute: true, points: routePoints([...route.slice(0, index + 1), split]) };
  const after = { ...wire, id: newWireId, from: { junctionId }, fixedRoute: true, points: routePoints([split, ...route.slice(index + 1)]) };
  return { junction, before, after };
}
