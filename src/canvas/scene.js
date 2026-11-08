import { componentForPart } from '../model/part-component.js';
import { mountingFor } from '../catalog/index.js';
import { endpointKey } from '../model/endpoints.js';
import { endpointPositions, pointInsidePartBody } from '../geometry/parts.js';
import { wireRoute } from '../geometry/routing.js';

export function pathFrom(points) {
  return points.map(({ x, y }, i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
}

function junctionMarkup(groups) {
  const junctions = new Map();
  for (const { color, routes } of groups.values()) {
    if (routes.length < 2) continue;
    const vertices = new Map();
    function add(from, to) {
      const key = `${from.x},${from.y}`;
      if (!vertices.has(key)) vertices.set(key, { ...from, directions: new Set() });
      vertices.get(key).directions.add(`${Math.sign(to.x - from.x)},${Math.sign(to.y - from.y)}`);
    }
    for (const route of routes) {
      for (let i = 1; i < route.length; i++) {
        const from = route[i - 1];
        const to = route[i];
        if (from.x === to.x && from.y === to.y) continue;
        add(from, to);
        add(to, from);
      }
    }
    for (const [key, point] of vertices) {
      if (point.directions.size > 2) {
        junctions.set(`${color}/${key}`, `<circle cx="${point.x}" cy="${point.y}" r="3.7" fill="${color}" pointer-events="none"/>`);
      }
    }
  }
  return [...junctions.values()].join('');
}

export function samePosition(a, b) {
  return a.x === b.x && a.y === b.y && a.normal?.x === b.normal?.x && a.normal?.y === b.normal?.y &&
    a.bounds?.x[0] === b.bounds?.x[0] && a.bounds?.x[1] === b.bounds?.x[1] &&
    a.bounds?.y[0] === b.bounds?.y[0] && a.bounds?.y[1] === b.bounds?.y[1];
}

export function resolveDrawing(project, previousRoutes) {
  const position = endpointPositions(project);
  const parts = new Map(project.parts.map(part => [part.id, { part, connected: new Set(), covered: new Set() }]));
  for (const part of project.parts) {
    const seated = part.attachment && parts.get(part.attachment.hostPartId);
    if (seated) for (const { pinId, hostPinId } of part.attachment.contacts) {
      parts.get(part.id).connected.add(pinId);
      seated.connected.add(hostPinId);
    }
    // Formed bodies remain opaque when a leg is lifted. This is visual
    // occlusion only; electrical seating still requires explicit contact pairs.
    const hosts = seated ? [seated] : part.leads ? [...parts.values()].filter(entry =>
      mountingFor(entry.part.componentId)?.type === 'breadboard') : [];
    if (!hosts.length) continue;
    for (const host of hosts) for (const pin of componentForPart(host.part).pins) {
      const point = position({ partId: host.part.id, pinId: pin.id });
      if (pointInsidePartBody(part, point)) {
        host.covered.add(pin.id);
      }
    }
  }
  const wires = new Map();
  const groups = new Map();
  for (const wire of project.wires) {
    const from = position(wire.from);
    const to = position(wire.to);
    let geometry = previousRoutes?.get(wire.id)?.geometry;
    if (!geometry || geometry.points !== wire.points || geometry.fixedRoute !== wire.fixedRoute ||
      !samePosition(geometry.from, from) || !samePosition(geometry.to, to)) {
      const route = wireRoute(from, to, wire.points, wire.fixedRoute);
      geometry = { from, to, route, path: pathFrom(route), points: wire.points, fixedRoute: wire.fixedRoute };
    }
    wires.set(wire.id, { wire, geometry });
    for (const endpoint of [wire.from, wire.to]) {
      if (endpoint.partId) parts.get(endpoint.partId).connected.add(endpoint.pinId);
      const key = `${endpointKey(endpoint)}/${wire.color}`;
      if (!groups.has(key)) groups.set(key, { color: wire.color, routes: [] });
      groups.get(key).routes.push(geometry.route);
    }
  }
  const junctions = new Map((project.junctions ?? []).map(junction => [junction.id, junction]));
  return { position, parts, wires, junctions, branches: junctionMarkup(groups) };
}

export function foregroundParts(parts) {
  const surfaces = [];
  const modules = [];
  for (const entry of parts) {
    const destination = componentForPart(entry[1].part).surface ? surfaces : modules;
    destination.push(entry);
  }
  return new Map([...surfaces, ...modules]);
}

const handleKey = (kind, index) => kind === 'segment' || kind === 'bend' ? `${kind}/${index}` : kind;
const midpoint = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
const handleOrder = ({ kind, index }) => kind === 'from' ? 0 : kind === 'to' ? 1 : 2 + index * 2 + Number(kind === 'segment');

export function wireHandleLayout(wireId, { route, from, to }, active, spacing) {
  const items = new Map();
  const placed = [];
  const activeKey = active && handleKey(active.kind, active.index);
  function add(kind, index, point, axis, display = point) {
    const key = handleKey(kind, index);
    const current = key === activeKey;
    if (current && active.point) display = point = active.point;
    if (current && active.axis) axis = active.axis;
    if (index !== undefined && !current && placed.some(other =>
      (other.x - display.x) ** 2 + (other.y - display.y) ** 2 < spacing ** 2)) return;
    placed.push(display);
    items.set(`${wireId}/${key}`, { wireId, kind, index, point, axis, display, active: current });
  }

  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const span = Math.hypot(dx, dy);
  let first = from;
  let last = to;
  if (span < spacing) {
    const spread = (spacing - span) / 2;
    const x = span ? dx * spread / span : spread;
    const y = span ? dy * spread / span : 0;
    first = { x: from.x - x, y: from.y - y };
    last = { x: to.x + x, y: to.y + y };
  }
  add('from', undefined, from, undefined, first);
  add('to', undefined, to, undefined, last);

  const segment = index => {
    const a = route[index];
    const b = route[index + 1];
    if (a && b) add('segment', index, midpoint(a, b), a.x === b.x ? 'x' : 'y');
    else if (active?.point) add('segment', index, active.point, active.axis);
  };
  if (active?.kind === 'segment') segment(active.index);
  if (active?.kind === 'bend') {
    const point = active.point ?? route[active.index];
    if (point) add('bend', active.index, point);
  }
  for (let index = 1; index + 1 < route.length; index++) {
    if (handleKey('bend', index) !== activeKey) add('bend', index, route[index]);
  }
  for (let index = 0; index + 1 < route.length; index++) {
    if (handleKey('segment', index) !== activeKey) segment(index);
  }
  return new Map([...items].sort(([, a], [, b]) => handleOrder(a) - handleOrder(b)));
}
