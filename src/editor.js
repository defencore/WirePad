import { componentById } from './catalog.js';
import { pinById } from './component-pins.js';
import { traceNet } from './continuity.js';
import { makeId, MAX_POINTS_PER_WIRE, POSITION_LIMIT } from './project.js';
import { clampPoint, deleteWireBend, endpointKey, insertWireBend, routeFor, sameEndpoint, splitWire, wireAnchor } from './routing.js';

const collections = { part: 'parts', wire: 'wires', junction: 'junctions' };
const initialColor = '#2c83d9';

export function updateItem(project, type, id, properties) {
  const key = collections[type];
  return { ...project, [key]: project[key].map(item => item.id === id ? { ...item, ...properties } : item) };
}

function automaticWaypoints(route) {
  const points = route.slice(1, -1).map(({ x, y }) => ({ x, y }));
  if (points.some(({ x, y }) => Math.abs(x) > POSITION_LIMIT || Math.abs(y) > POSITION_LIMIT)) {
    return { fixedRoute: false, points: [] };
  }
  return { fixedRoute: true, points };
}

function resolveAnchor(wires, anchor, position) {
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

function connect(project, draft, end, color, position, plan) {
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

function targetExists(project, endpoint) {
  if (endpoint.wireId) return Number.isFinite(endpoint.point?.x) && Number.isFinite(endpoint.point?.y)
    && project.wires.some(wire => wire.id === endpoint.wireId);
  if (endpoint.junctionId) return project.junctions?.some(junction => junction.id === endpoint.junctionId);
  const part = project.parts.find(item => item.id === endpoint.partId);
  return Boolean(pinById(componentById.get(part?.componentId), endpoint.pinId));
}

export class DiagramEditor {
  mode = 'select';
  pending = null;
  trace = null;
  wireColor = initialColor;

  constructor(history, render, notify) {
    this.history = history;
    this.render = render;
    this.notify = notify;
    this.selection = this.firstPart();
  }

  get project() { return this.history.project; }
  get hasDrawing() {
    const { parts, wires, junctions } = this.project;
    return Boolean(parts.length || wires.length || junctions?.length);
  }
  get part() { return this.selection?.type === 'part' ? this.item('part', this.selection.id) : null; }
  get wire() { return this.selection?.type === 'wire' ? this.item('wire', this.selection.id) : null; }
  get traceSeed() {
    if (this.mode === 'trace') return this.trace;
    if (this.mode !== 'pan' && !this.pending && this.selection?.type === 'wire') return { wireId: this.selection.id };
    return null;
  }

  item(type, id) { return this.project[collections[type]]?.find(item => item.id === id); }

  firstPart() {
    const part = this.project.parts[0];
    return part ? { type: 'part', id: part.id } : null;
  }

  commit(next, { selection = this.selection, mode = this.mode, pending = this.pending } = {}) {
    try {
      this.history.commit(next);
    } catch (error) {
      this.render();
      this.notify(error.message);
      return false;
    }
    this.selection = selection;
    this.mode = mode;
    this.pending = pending;
    this.render({ persist: true });
    return true;
  }

  replace(next) {
    this.history.replace(next);
    this.selection = this.firstPart();
    this.mode = 'select';
    this.pending = null;
    this.trace = null;
    this.render({ persist: true });
  }

  step(direction) {
    if (!this.history[direction]()) return;
    this.pending = null;
    this.trace = null;
    if (this.selection && !this.item(this.selection.type, this.selection.id)) this.selection = null;
    this.render({ persist: true });
  }

  select(type, id) {
    const selection = type ? { type, id } : null;
    if (this.selection?.type === selection?.type && this.selection?.id === selection?.id) return;
    this.selection = selection;
    this.render();
  }

  setMode(mode) {
    if (this.mode === mode && !this.pending && (mode !== 'wire' || !this.selection)) return;
    if (mode !== 'wire') this.pending = null;
    if (mode === 'wire' || mode === 'trace') this.selection = null;
    this.trace = null;
    this.mode = mode;
    this.render();
  }

  tracePoint(endpoint) {
    if (!endpoint && !this.trace) return;
    this.trace = endpoint;
    this.render();
  }

  cancelWire() {
    if (!this.pending) return;
    this.pending = null;
    this.render();
  }

  addPart(componentId, point) {
    const component = componentById.get(componentId);
    const part = { id: makeId('part'), componentId, ...clampPoint(point) };
    if (component.defaultValue) part.label = `${component.shortName ?? component.name} · ${component.defaultValue}`;
    const project = this.project;
    return this.commit({ ...project, parts: [...project.parts, part] }, {
      selection: { type: 'part', id: part.id }, mode: 'select', pending: null,
    }) ? part : null;
  }

  updatePart(properties) {
    if (this.part) this.commit(updateItem(this.project, 'part', this.part.id, properties));
  }

  rotatePart() {
    if (this.part) this.updatePart({ rotation: ((this.part.rotation ?? 0) + 90) % 360 });
  }

  removeSelection() {
    const { project, part, wire } = this;
    if (!part && !wire) return;
    const parts = part ? project.parts.filter(item => item.id !== part.id) : project.parts;
    const wires = part
      ? project.wires.filter(item => item.from.partId !== part.id && item.to.partId !== part.id)
      : project.wires.filter(item => item.id !== wire.id);
    const next = { ...project, parts, wires };
    if (project.junctions?.length) {
      const used = new Set(wires.flatMap(item => [item.from.junctionId, item.to.junctionId]));
      next.junctions = project.junctions.filter(junction => used.has(junction.id));
    }
    this.commit(next, { selection: null });
  }

  setWireColor(color) {
    this.wireColor = color;
    if (this.wire && this.wire.color !== color) this.commit(updateItem(this.project, 'wire', this.wire.id, { color }));
    else this.render();
  }

  rerouteWire(plan) {
    if (!this.wire || !plan) return;
    const route = automaticWaypoints(plan);
    const current = this.wire.points ?? [];
    if (Boolean(this.wire.fixedRoute) === route.fixedRoute && current.length === route.points.length &&
      current.every((point, index) => point.x === route.points[index].x && point.y === route.points[index].y)) return;
    this.commit(updateItem(this.project, 'wire', this.wire.id, route));
  }

  reconnectWire(wireId, side, target, position, planRoute) {
    const wire = this.item('wire', wireId);
    if (!wire || (side !== 'from' && side !== 'to') || !target) return false;
    const { project } = this;
    if (target.wireId === wireId || !targetExists(project, target)) {
      this.notify('Choose a pin, junction, or a different wire.');
      return false;
    }

    const wires = [...project.wires];
    const attachment = resolveAnchor(wires, target, position);
    if (!attachment || sameEndpoint(wire[side], attachment.endpoint)) return false;

    const fixed = wire[side === 'from' ? 'to' : 'from'];
    const net = traceNet({ ...project, wires: project.wires.filter(item => item.id !== wireId) }, fixed);
    const duplicate = attachment.junction ? net.wireIds.has(target.wireId)
      : net.endpoints.has(endpointKey(attachment.endpoint));
    if (duplicate) {
      this.notify('These points are already on the same net. Choose another point.');
      return false;
    }

    const edited = { ...wire, [side]: attachment.endpoint };
    const point = attachment.junction ?? position(attachment.endpoint);
    const from = side === 'from' ? point : position(fixed);
    const to = side === 'to' ? point : position(fixed);
    const plan = planRoute?.(from, to);
    Object.assign(edited, plan ? automaticWaypoints(plan) : { fixedRoute: false, points: [] });
    const index = wires.findIndex(item => item.id === wireId);
    wires[index] = edited;

    let junctions = project.junctions;
    const previous = wire[side].junctionId;
    if (previous && !wires.some(item => item.from.junctionId === previous || item.to.junctionId === previous)) {
      junctions = junctions.filter(junction => junction.id !== previous);
    }
    if (attachment.junction) junctions = [...(junctions ?? []), attachment.junction];
    return this.commit({ ...project, wires, ...(junctions && { junctions }) }, { selection: { type: 'wire', id: wireId } });
  }

  addWireBend(wireId, point, position) {
    const wire = this.item('wire', wireId);
    const points = wire && insertWireBend(wire, position, point);
    return points ? this.commit(updateItem(this.project, 'wire', wireId, { fixedRoute: true, points })) : false;
  }

  removeWireBend(wireId, point, position) {
    const wire = this.item('wire', wireId);
    const points = wire && deleteWireBend(wire, position, point);
    return points ? this.commit(updateItem(this.project, 'wire', wireId, { fixedRoute: true, points })) : false;
  }

  addBend(point) {
    if (this.pending.points.length >= MAX_POINTS_PER_WIRE) {
      this.notify(`A wire can have up to ${MAX_POINTS_PER_WIRE} bend points.`);
      return;
    }
    this.pending.points.push(clampPoint(point));
  }

  beginWire(endpoint, mode = this.mode) {
    this.mode = mode;
    this.pending = { from: endpoint, points: [] };
    if (endpoint.wireId) this.wireColor = this.item('wire', endpoint.wireId).color;
    this.selection = null;
    this.render();
  }

  activateEndpoint(endpoint, position, planRoute) {
    if (!this.pending) {
      this.beginWire(endpoint);
      return;
    }
    const { from } = this.pending;
    if (from.wireId && from.wireId === endpoint.wireId) {
      this.notify('Choose a different wire or pin to finish the connection.');
      return;
    }
    if (!from.wireId && !endpoint.wireId && sameEndpoint(from, endpoint)) {
      this.cancelWire();
      return;
    }
    const net = traceNet(this.project, from);
    if (endpoint.wireId ? net.wireIds.has(endpoint.wireId) : net.endpoints.has(endpointKey(endpoint))) {
      this.notify('These points are already on the same net. Choose another point.');
      return;
    }
    const plan = this.pending.points.length ? null : planRoute(position(from), position(endpoint));
    const connection = connect(this.project, this.pending, endpoint, this.wireColor, position, plan);
    if (!connection) {
      this.notify('Choose another point to finish the connection.');
      return;
    }
    const { next, wire } = connection;
    this.commit(next, { selection: { type: 'wire', id: wire.id }, pending: null });
  }
}
