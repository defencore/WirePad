import { MAX_FIXED_ROUTE_POINTS, POSITION_LIMIT } from '../model/limits.js';

const LEAD = 15;

const bounded = value => Math.max(-POSITION_LIMIT, Math.min(POSITION_LIMIT, Math.round(value)));
export const clampPoint = ({ x, y }) => ({ x: bounded(x), y: bounded(y) });


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

const needsLead = (pin, next) => next && pin.normal && !follows(pin, next);

function connectPoints(points, target, horizontalFirst) {
  const previous = points.at(-1);
  if (previous.x !== target.x && previous.y !== target.y) {
    points.push(horizontalFirst ? { x: target.x, y: previous.y } : { x: previous.x, y: target.y });
  }
  if (!equal(previous, target)) points.push(target);
}

const pinAxis = point => point.normal?.x ? 'x' : point.normal?.y ? 'y' : null;
const otherAxis = axis => axis === 'x' ? 'y' : 'x';

function outsideLane(start, end, axis, clearance = LEAD) {
  const low = Math.min(start.bounds?.[axis][0] ?? start[axis], end.bounds?.[axis][0] ?? end[axis]);
  const high = Math.max(start.bounds?.[axis][1] ?? start[axis], end.bounds?.[axis][1] ?? end[axis]);
  return start[axis] + end[axis] <= low + high ? low - clearance : high + clearance;
}

function onePinRoute(pin, target, axis) {
  const cross = otherAxis(axis);
  const elbow = { ...pin, [axis]: target[axis] };
  if (!equal(pin, elbow) && follows(pin, elbow)) return [pin, elbow, target];
  const a = lead(pin);
  if (pin[cross] !== target[cross]) return [pin, a, { ...a, [cross]: target[cross] }, target];
  const lane = outsideLane(pin, target, cross);
  return [pin, a, { ...a, [cross]: lane }, { ...target, [cross]: lane }, target];
}

function parallelRoute(start, end, axis) {
  const cross = otherAxis(axis);
  const direction = start.normal[axis];
  const sameDirection = direction === end.normal[axis];
  if (!sameDirection && (end[axis] - start[axis]) * direction > 0) {
    const middle = (start[axis] + end[axis]) / 2;
    return [start, { ...start, [axis]: middle }, { ...end, [axis]: middle }, end];
  }
  if (sameDirection && start[cross] !== end[cross]) {
    const edge = direction > 0 ? Math.max(start[axis], end[axis]) : Math.min(start[axis], end[axis]);
    const lane = edge + direction * 2 * LEAD;
    return [start, { ...start, [axis]: lane }, { ...end, [axis]: lane }, end];
  }

  const a = lead(start);
  const b = lead(end);
  const lane = outsideLane(start, end, cross);
  return [start, a, { ...a, [cross]: lane }, { ...b, [cross]: lane }, b, end];
}

function automaticRoute(start, end) {
  const startAxis = pinAxis(start);
  const endAxis = pinAxis(end);
  if (!startAxis && !endAxis) return [start, { x: end.x, y: start.y }, end];
  if (!endAxis) return onePinRoute(start, end, startAxis);
  if (!startAxis) return onePinRoute(end, start, endAxis).reverse();
  if (startAxis === endAxis) return parallelRoute(start, end, startAxis);

  const corner = { ...start, [startAxis]: end[startAxis] };
  if (!equal(start, corner) && !equal(end, corner) && follows(start, corner) && follows(end, corner)) {
    return [start, corner, end];
  }
  const a = lead(start);
  const b = lead(end);
  const between = { ...a, [endAxis]: b[endAxis] };
  if (!equal(a, between) && !equal(b, between)) return [start, a, between, b, end];

  const lane = outsideLane(start, end, endAxis, 2 * LEAD);
  const turn = outsideLane(start, end, startAxis, 2 * LEAD);
  return [start, a, { ...a, [endAxis]: lane }, { [startAxis]: turn, [endAxis]: lane },
    { ...b, [startAxis]: turn }, b, end];
}

export function wireRoute(start, end, bends = [], fixedRoute = false) {
  if (equal(start, end) && !bends.length) return [start];
  if (!bends.length && !fixedRoute) return compact(automaticRoute(start, end));

  const points = [start];
  if (start.normal && !follows(start, bends[0] ?? end)) points.push(lead(start));
  for (const bend of bends) connectPoints(points, bend, true);
  if (end.normal && !follows(end, bends.at(-1) ?? start)) connectPoints(points, lead(end), !end.normal.x);
  connectPoints(points, end, true);
  // Forward waypoints can mark a shared branch in older projects.
  const route = compact(points, true);

  const fixStart = needsLead(start, route[1]);
  const fixEnd = needsLead(end, route.at(-2));
  if (!fixStart && !fixEnd) return route;

  if (route.length > 2) {
    if (fixStart) route.splice(0, 2, ...onePinRoute(start, route[1], pinAxis(start)));
    if (fixEnd) route.splice(-2, 2, ...onePinRoute(end, route.at(-2), pinAxis(end)).reverse());
    const repaired = compact(route, true);
    if (!needsLead(start, repaired[1]) && !needsLead(end, repaired.at(-2))) return repaired;
  }
  return compact(automaticRoute(start, end));
}

export function routeFor(wire, position) {
  return wireRoute(position(wire.from), position(wire.to), wire.points, wire.fixedRoute);
}

function redundant(before, current, next, keepStraight) {
  const axis = before.x === current.x && current.x === next.x ? 'y'
    : before.y === current.y && current.y === next.y ? 'x' : null;
  return axis && (!keepStraight || (current[axis] - before[axis]) * (next[axis] - current[axis]) < 0);
}

function compact(route, keepStraight = false) {
  const simplified = [];
  for (const point of route) {
    while (simplified.length >= 2 && !equal(simplified.at(-1), point) &&
      redundant(simplified.at(-2), simplified.at(-1), point, keepStraight)) {
      simplified.pop();
    }
    if (!simplified.length || !equal(simplified.at(-1), point)) simplified.push(point);
  }
  return simplified;
}

export function nearestSegment(route, target) {
  let nearest = null;
  let nearestDistance = Infinity;
  for (let index = 0; index + 1 < route.length; index++) {
    const start = route[index];
    const end = route[index + 1];
    const x = Math.max(Math.min(start.x, end.x), Math.min(Math.max(start.x, end.x), target.x));
    const y = Math.max(Math.min(start.y, end.y), Math.min(Math.max(start.y, end.y), target.y));
    const dx = target.x - x;
    const dy = target.y - y;
    const distance = dx * dx + dy * dy;
    if (distance < nearestDistance) {
      nearest = { index, point: { x, y } };
      nearestDistance = distance;
    }
  }
  return nearest;
}

export function segmentDrag(wire, position, point, handleIndex) {
  const keepWaypoints = Number.isInteger(handleIndex);
  const rendered = routeFor(wire, position);
  const route = keepWaypoints ? rendered : compact(rendered);
  const index = keepWaypoints ? handleIndex : nearestSegment(route, point)?.index;
  const a = route[index];
  const b = route[index + 1];
  return a && b ? { route, index, axis: a.x === b.x ? 'x' : 'y', keepWaypoints } : null;
}

function routeWaypoints(points) {
  const route = compact(points);
  const bends = [];
  for (let index = 1; index < route.length - 1; index++) {
    const previous = route[index - 1];
    const { x, y } = route[index];
    const next = route[index + 1];
    const pinLead = (index === 1 && previous.normal) || (index === route.length - 2 && next.normal);
    // The router reconstructs horizontal-first elbows between waypoints.
    if (pinLead || previous.y !== y || next.x !== x) bends.push({ x, y });
  }
  return bends;
}

export function slideSegment({ route, index, axis, keepWaypoints }, delta) {
  const a = route[index];
  const b = route[index + 1];
  const cross = axis === 'x' ? 'y' : 'x';
  const sectionLength = Math.abs(b[cross] - a[cross]);
  const inset = Math.min(LEAD, sectionLength / 3);
  const direction = Math.sign(b[cross] - a[cross]);
  const coordinate = bounded(a[axis] + delta);
  const first = index === 0;
  const last = index === route.length - 2;
  const keepStart = first || (keepWaypoints && route[index - 1]?.[axis] === a[axis]);
  const keepEnd = last || (keepWaypoints && route[index + 2]?.[axis] === b[axis]);
  const innerA = { ...a, [cross]: a[cross] + (first ? inset * direction : 0) };
  const innerB = { ...b, [cross]: b[cross] - (last ? inset * direction : 0) };
  const updated = [
    ...route.slice(0, index),
    ...(keepStart ? [a, innerA] : []),
    { ...innerA, [axis]: coordinate },
    { ...innerB, [axis]: coordinate },
    ...(keepEnd ? [innerB, b] : []),
    ...route.slice(index + 2),
  ];
  const edited = keepWaypoints && compact(updated, true).slice(1, -1).map(({ x, y }) => ({ x, y }));
  return edited && edited.length <= MAX_FIXED_ROUTE_POINTS ? edited : routeWaypoints(updated);
}

function editWaypoints(route, vertices) {
  const points = compact(vertices, true).slice(1, -1).map(({ x, y }) => ({ x, y }));
  if (points.length > MAX_FIXED_ROUTE_POINTS || points.some(({ x, y }) => !Number.isFinite(x) || !Number.isFinite(y)
    || Math.abs(x) > POSITION_LIMIT || Math.abs(y) > POSITION_LIMIT)) return null;
  const edited = wireRoute(route[0], route.at(-1), points, true);
  return edited.length === route.length && edited.every((point, index) => equal(point, route[index])) ? null : points;
}

function detour(start, end, point) {
  const along = start.x === end.x ? 'y' : 'x';
  const cross = otherAxis(along);
  const span = end[along] - start[along];
  const length = Math.abs(span);
  const direction = Math.sign(span);
  const offset = (point[along] - start[along]) * direction;
  if (point[cross] === start[cross]) return offset > 0 && offset < length ? [point] : [];

  const margin = Math.min(LEAD, length / 4);
  const center = start[along] + direction * Math.max(margin, Math.min(length - margin, offset));
  const entry = center - direction * margin / 2;
  const exit = center + direction * margin / 2;
  return [
    { [along]: entry, [cross]: start[cross] },
    { [along]: entry, [cross]: point[cross] },
    { [along]: center, [cross]: point[cross] },
    { [along]: exit, [cross]: point[cross] },
    { [along]: exit, [cross]: end[cross] },
  ];
}

export function insertWireBend(wire, position, point) {
  const route = routeFor(wire, position);
  const nearest = nearestSegment(route, point);
  if (!nearest) return null;
  const { index } = nearest;
  const target = equal(nearest.point, point) ? point : clampPoint(point);
  const added = detour(route[index], route[index + 1], target);
  if (!added.length) return null;
  return editWaypoints(route, [...route.slice(0, index + 1), ...added, ...route.slice(index + 1)]);
}

function cornerIndex(route, point) {
  const index = route.findIndex(vertex => equal(vertex, point));
  return index > 0 && index < route.length - 1 ? index : -1;
}

function shiftedNeighbor(route, index, step, along, across) {
  const neighbor = route[index + step];
  const outer = route[index + step * 2];
  const cross = otherAxis(along);
  if (neighbor[cross] === across) return { vertices: [], replace: false };
  if (!outer && neighbor.normal) {
    const offset = route[index][along] - neighbor[along];
    const anchor = neighbor[along] + Math.sign(offset) * Math.min(LEAD, Math.abs(offset) / 3);
    return {
      vertices: [{ ...neighbor, [along]: anchor }, { [along]: anchor, [cross]: across }],
      replace: false,
    };
  }
  return {
    vertices: [{ ...neighbor, [cross]: across }],
    replace: Boolean(outer && outer[along] === neighbor[along]),
  };
}

export function moveWireBend(wire, position, point, destination) {
  const route = routeFor(wire, position);
  const index = cornerIndex(route, point);
  if (index === -1 || equal(point, destination)) return null;
  const target = clampPoint(destination);
  const before = route[index - 1];
  const after = route[index + 1];
  const incoming = before.x === point.x ? 'y' : 'x';
  const outgoing = after.x === point.x ? 'y' : 'x';
  if (incoming === outgoing) {
    return editWaypoints(route, [...route.slice(0, index), ...detour(before, after, target), ...route.slice(index + 1)]);
  }
  const leading = shiftedNeighbor(route, index, -1, incoming, target[otherAxis(incoming)]);
  const trailing = shiftedNeighbor(route, index, 1, outgoing, target[otherAxis(outgoing)]);
  return editWaypoints(route, [
    ...route.slice(0, index - Number(leading.replace)), ...leading.vertices, target,
    ...trailing.vertices.reverse(), ...route.slice(index + 1 + Number(trailing.replace)),
  ]);
}

export function deleteWireBend(wire, position, point) {
  const route = routeFor(wire, position);
  const index = cornerIndex(route, point);
  if (index === -1) return null;
  const a = route[index - 1];
  const b = route[index + 1];
  const elbow = a.x === b.x || a.y === b.y ? []
    : [point.x === a.x ? { x: b.x, y: a.y } : { x: a.x, y: b.y }];
  return editWaypoints(route, [...route.slice(0, index), ...elbow, ...route.slice(index + 1)]);
}

export function wireAnchor(wire, route, target, threshold) {
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
  const before = { ...wire, to: { junctionId }, fixedRoute: true, points: routeWaypoints([...route.slice(0, index + 1), split]) };
  const after = { ...wire, id: newWireId, from: { junctionId }, fixedRoute: true, points: routeWaypoints([split, ...route.slice(index + 1)]) };
  return { junction, before, after };
}
