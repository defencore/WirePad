import { componentForPart } from '../model/part-component.js';
import { partBounds } from './parts.js';
import { POSITION_LIMIT } from '../model/limits.js';
import { routeFor, wireRoute } from './routing.js';
import { endpointPositions } from './parts.js';

const BOARD_GAP = 9;
const WIRE_GAP = 8;
const TURN_COST = 18;
const LEAD = 12;
const JUNCTION_GAP = 6;
const MAX_TRACK_SEGMENTS = 12_000;
const MAX_ROUTE_BOARDS = 12;
const MAX_ROUTE_JUNCTIONS = 4;
const MAX_ROUTE_VERTICES = 100;

function boardBox(part) {
  const component = componentForPart(part);
  if (component.surface) return null;
  const bounds = partBounds(part, component);
  return { partId: part.id, left: bounds.left - BOARD_GAP, top: bounds.top - BOARD_GAP,
    right: bounds.right + BOARD_GAP, bottom: bounds.bottom + BOARD_GAP };
}

const near = (a, b) => Math.abs(a - b) < 1e-7;
const owns = (box, { bounds }) => bounds && !box.junction && near(box.left, bounds.x[0] - BOARD_GAP) && near(box.right, bounds.x[1] + BOARD_GAP) &&
  near(box.top, bounds.y[0] - BOARD_GAP) && near(box.bottom, bounds.y[1] + BOARD_GAP);
const inside = (box, { x, y }) => box.left < x && x < box.right && box.top < y && y < box.bottom;
const equal = (a, b) => a.x === b.x && a.y === b.y;
const distance = (a, b) => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
const pinAxis = point => point.normal ? Number(!point.normal.x) : null;
const outOfRange = value => Math.abs(value) > POSITION_LIMIT;

function pinLead(point) {
  if (!point.normal) return point;
  const axis = point.normal.x ? 'x' : 'y';
  const direction = point.normal[axis];
  const edge = point.bounds?.[axis][direction < 0 ? 0 : 1] ?? point[axis];
  const length = Math.max(LEAD, BOARD_GAP + direction * (edge - point[axis]));
  return { ...point, [axis]: point[axis] + direction * length };
}

function intersects(a, b, box) {
  return a.y === b.y
    ? a.y > box.top && a.y < box.bottom && Math.max(a.x, b.x) > box.left && Math.min(a.x, b.x) < box.right
    : a.x > box.left && a.x < box.right && Math.max(a.y, b.y) > box.top && Math.min(a.y, b.y) < box.bottom;
}

function lowerBound(values, key, target) {
  let from = 0;
  let to = values.length;
  while (from < to) {
    const mid = (from + to) >>> 1;
    if (key(values[mid]) < target) from = mid + 1;
    else to = mid;
  }
  return from;
}

function occupiedTracks(routes) {
  const axes = [new Map(), new Map()];
  let count = 0;
  for (const route of routes) {
    if (count >= MAX_TRACK_SEGMENTS) break;
    for (let i = 1; i < route.length && count < MAX_TRACK_SEGMENTS; i++) {
      const a = route[i - 1];
      const b = route[i];
      if (equal(a, b)) continue;
      const horizontal = a.y === b.y;
      const along = horizontal ? 'x' : 'y';
      const across = horizontal ? 'y' : 'x';
      const tracks = axes[Number(!horizontal)];
      const coordinate = a[across];
      if (!tracks.has(coordinate)) tracks.set(coordinate, []);
      tracks.get(coordinate).push([Math.min(a[along], b[along]), Math.max(a[along], b[along])]);
      count++;
    }
  }
  return axes.map(tracks => [...tracks].map(([coordinate, ranges]) => {
    const intervals = [];
    for (const [low, high] of ranges.sort((a, b) => a[0] - b[0])) {
      const previous = intervals.at(-1);
      if (previous && previous[1] >= low) previous[1] = Math.max(previous[1], high);
      else intervals.push([low, high]);
    }
    return { coordinate, intervals };
  }).sort((a, b) => a.coordinate - b.coordinate));
}

function parallelCost(a, b, tracks) {
  const horizontal = a.y === b.y;
  const along = horizontal ? 'x' : 'y';
  const across = horizontal ? 'y' : 'x';
  const coordinate = a[across];
  const low = Math.min(a[along], b[along]);
  const high = Math.max(a[along], b[along]);
  const ceiling = (high - low) * 8;
  const lanes = tracks[Number(!horizontal)];
  let cost = 0;
  for (let i = lowerBound(lanes, lane => lane.coordinate, coordinate - WIRE_GAP); i < lanes.length; i++) {
    const lane = lanes[i];
    const gap = Math.abs(lane.coordinate - coordinate);
    if (gap >= WIRE_GAP) {
      if (lane.coordinate >= coordinate) break;
      continue;
    }
    for (let j = lowerBound(lane.intervals, range => range[1], low); j < lane.intervals.length; j++) {
      const [from, to] = lane.intervals[j];
      if (from >= high) break;
      cost += Math.max(0, Math.min(to, high) - Math.max(from, low)) * (gap < 0.01 ? 4 : (1 - gap / WIRE_GAP) * 0.65);
      if (cost >= ceiling) return ceiling;
    }
  }
  return cost;
}

function score(route, boxes, tracks) {
  let length = 0;
  let congestion = 0;
  let bends = 0;
  let previousAxis;
  for (let i = 1; i < route.length; i++) {
    const a = route[i - 1];
    const b = route[i];
    if (boxes.some(box => !(i === 1 && owns(box, a)) && !(i === route.length - 1 && owns(box, b)) && intersects(a, b, box))) {
      return { cost: Infinity, congestion: Infinity };
    }
    const axis = Number(a.x === b.x);
    if (previousAxis !== undefined && axis !== previousAxis) bends++;
    previousAxis = axis;
    length += distance(a, b);
    congestion += parallelCost(a, b, tracks);
  }
  return { cost: length + congestion + bends * TURN_COST, congestion };
}

function push(queue, value) {
  let index = queue.length;
  queue.push(value);
  while (index > 0) {
    const parent = (index - 1) >>> 1;
    if (queue[parent].estimate <= value.estimate) break;
    queue[index] = queue[parent];
    index = parent;
  }
  queue[index] = value;
}

function pop(queue) {
  const first = queue[0];
  const last = queue.pop();
  if (queue.length === 0) return first;
  let index = 0;
  while (index * 2 + 1 < queue.length) {
    let child = index * 2 + 1;
    if (child + 1 < queue.length && queue[child + 1].estimate < queue[child].estimate) child++;
    if (queue[child].estimate >= last.estimate) break;
    queue[index] = queue[child];
    index = child;
  }
  queue[index] = last;
  return first;
}

function compact(points) {
  const route = [];
  for (const point of points) {
    if (route.length && equal(route.at(-1), point)) continue;
    const a = route.at(-2);
    const b = route.at(-1);
    if (a && ((a.x === b.x && b.x === point.x) || (a.y === b.y && b.y === point.y))) route.pop();
    route.push(point);
  }
  return route;
}

function search(start, end, xs, ys, boxes, tracks) {
  const width = xs.length;
  const size = width * ys.length;
  const startNode = ys.indexOf(start.y) * width + xs.indexOf(start.x);
  const endNode = ys.indexOf(end.y) * width + xs.indexOf(end.x);
  if (startNode === endNode) return [start];
  // A position has two states so turning incurs a cost based on the incoming axis.
  const best = new Float64Array(size * 2).fill(Infinity);
  const previous = new Int32Array(size * 2).fill(-1);
  const edges = new Float64Array(size * 2);
  const point = node => ({ x: xs[node % width], y: ys[Math.floor(node / width)] });
  const queue = [];
  const firstAxis = pinAxis(start);
  const finalAxis = pinAxis(end);
  for (const axis of firstAxis === null ? [0, 1] : [firstAxis]) {
    const state = startNode * 2 + axis;
    best[state] = 0;
    push(queue, { state, cost: 0, estimate: distance(start, end) });
  }

  while (queue.length) {
    const { state, cost } = pop(queue);
    if (best[state] !== cost) continue;
    const node = state >>> 1;
    if (node === endNode) {
      const route = [];
      for (let step = state; step !== -1; step = previous[step]) route.push(point(step >>> 1));
      return route.reverse();
    }
    const a = point(node);
    const nextNodes = [node % width > 0 ? node - 1 : -1, node % width + 1 < width ? node + 1 : -1,
      node - width, node + width];
    for (let direction = 0; direction < nextNodes.length; direction++) {
      const next = nextNodes[direction];
      if (next < 0 || next >= size) continue;
      const axis = direction >>> 1;
      const sign = direction % 2 ? 1 : -1;
      const coordinate = axis === 0 ? 'x' : 'y';
      if (node === startNode && axis === firstAxis && sign === -start.normal[coordinate]) continue;
      if (next === endNode && axis === finalAxis && sign === end.normal[coordinate]) continue;

      const b = point(next);
      const edge = Math.min(node, next) * 2 + axis;
      if (!edges[edge]) edges[edge] = boxes.some(box => intersects(a, b, box)) ? Infinity : distance(a, b) + parallelCost(a, b, tracks);
      const stepCost = cost + edges[edge] + (axis !== (state % 2) ? TURN_COST : 0) +
        (next === endNode && finalAxis !== null && axis !== finalAxis ? TURN_COST : 0);
      const nextState = next * 2 + axis;
      if (stepCost >= best[nextState]) continue;
      best[nextState] = stepCost;
      previous[nextState] = state;
      push(queue, { state: nextState, cost: stepCost, estimate: stepCost + distance(b, end) });
    }
  }
  return null;
}

function grid(start, end, fallback, boxes) {
  const left = Math.min(start.x, end.x);
  const right = Math.max(start.x, end.x);
  const top = Math.min(start.y, end.y);
  const bottom = Math.max(start.y, end.y);
  const margin = 64 + Math.min(220, distance(start, end) / 4);
  const nearby = boxes.filter(box => box.left <= right + margin && box.right >= left - margin &&
    box.top <= bottom + margin && box.bottom >= top - margin);
  const distanceToSpan = box => Math.max(0, box.left - right, left - box.right) + Math.max(0, box.top - bottom, top - box.bottom);
  nearby.sort((a, b) => distanceToSpan(a) - distanceToSpan(b));
  // All obstacles can block edges, while the closest ones define candidate lanes.
  const selected = [
    ...nearby.filter(box => !box.junction).slice(0, MAX_ROUTE_BOARDS),
    ...nearby.filter(box => box.junction).slice(0, MAX_ROUTE_JUNCTIONS),
  ];
  const xs = [start.x, end.x, left - WIRE_GAP, right + WIRE_GAP, (left + right) / 2];
  const ys = [start.y, end.y, top - WIRE_GAP, bottom + WIRE_GAP, (top + bottom) / 2];
  for (const box of selected) {
    xs.push(box.left, box.right);
    ys.push(box.top, box.bottom);
  }
  for (let i = 1; i < fallback.length; i++) {
    const a = fallback[i - 1];
    const b = fallback[i];
    if (a.y === b.y) ys.push(a.y - WIRE_GAP, a.y, a.y + WIRE_GAP);
    else xs.push(a.x - WIRE_GAP, a.x, a.x + WIRE_GAP);
  }
  const sorted = values => [...new Set(values.filter(value => !outOfRange(value)))].sort((a, b) => a - b);
  return [sorted(xs), sorted(ys)];
}

export function createAutoRouter(project, routes) {
  const bodies = project.parts.map(boardBox).filter(Boolean);
  const dots = (project.junctions ?? []).map(junction => ({
    junction, left: junction.x - JUNCTION_GAP, right: junction.x + JUNCTION_GAP,
    top: junction.y - JUNCTION_GAP, bottom: junction.y + JUNCTION_GAP,
  }));
  if (!routes) {
    const position = endpointPositions(project);
    routes = project.wires.map(wire => routeFor(wire, position));
  }
  const tracks = occupiedTracks(routes);
  let previous;
  return (start, end) => {
    if (previous?.start === start && previous.end === end) return previous.route;
    const fallback = wireRoute(start, end);
    let route = fallback;
    if (fallback.length > 1) {
      const moduleBodies = bodies.filter(box => box.partId !== start.surfacePartId && box.partId !== end.surfacePartId);
      const boxes = dots.length ? [...moduleBodies, ...dots.filter(({ junction }) => !equal(junction, start) && !equal(junction, end))] : moduleBodies;
      const baseline = score(fallback, boxes, tracks);
      const a = pinLead(start);
      const b = pinLead(end);
      if (baseline.congestion > 0 && ![a.x, a.y, b.x, b.y].some(outOfRange) &&
        !boxes.some(box => inside(box, a) || inside(box, b) ||
          (!owns(box, start) && intersects(start, a, box)) || (!owns(box, end) && intersects(b, end, box)))) {
        const [xs, ys] = grid(a, b, fallback, boxes);
        const obstacles = boxes.filter(box => box.left < xs.at(-1) && box.right > xs[0] && box.top < ys.at(-1) && box.bottom > ys[0]);
        const path = search(a, b, xs, ys, obstacles, tracks);
        if (path) {
          const candidate = compact([start, ...path, end]);
          if (candidate.length <= MAX_ROUTE_VERTICES && score(candidate, boxes, tracks).cost < baseline.cost) route = candidate;
        }
      }
    }
    previous = { start, end, route };
    return route;
  };
}
