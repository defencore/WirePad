import { componentById } from './catalog.js';
import { traceNet } from './continuity.js';
import { makeId, MAX_POINTS_PER_WIRE, POSITION_LIMIT } from './project.js';
import { clampPoint, endpointKey, sameEndpoint, splitWire } from './routing.js';

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

function connect(project, draft, end, color, position, plan) {
  const wires = [...project.wires];
  let junctions = project.junctions;
  function endpoint(anchor) {
    if (!anchor.wireId) return anchor;
    const index = wires.findIndex(wire => wire.id === anchor.wireId);
    const split = splitWire(wires[index], position, anchor.point, makeId('junction'), makeId('wire'));
    wires.splice(index, 1, split.before, split.after);
    junctions = [...(junctions ?? []), split.junction];
    return { junctionId: split.junction.id };
  }

  const wire = { id: makeId('wire'), from: endpoint(draft.from), to: endpoint(end), color };
  if (draft.points.length) wire.points = draft.points;
  else if (plan) Object.assign(wire, automaticWaypoints(plan));
  wires.push(wire);
  return {
    next: { ...project, wires, ...(junctions && { junctions }) },
    wire,
  };
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
    const { next, wire } = connect(this.project, this.pending, endpoint, this.wireColor, position, plan);
    this.commit(next, { selection: { type: 'wire', id: wire.id }, pending: null });
  }
}
