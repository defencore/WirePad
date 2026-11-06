import { componentById } from './catalog.js';
import { makeId, MAX_POINTS_PER_WIRE } from './project.js';
import { clampPoint, sameEndpoint, splitWire } from './routing.js';

const collections = { part: 'parts', wire: 'wires', junction: 'junctions' };
const initialColor = '#2c83d9';

export function updateItem(project, type, id, properties) {
  const key = collections[type];
  return { ...project, [key]: project[key].map(item => item.id === id ? { ...item, ...properties } : item) };
}

function connect(project, draft, end, color, position) {
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
  wires.push(wire);
  return {
    next: { ...project, wires, ...(junctions && { junctions }) },
    wire,
  };
}

export class DiagramEditor {
  mode = 'select';
  pending = null;
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
    this.render({ persist: true });
  }

  step(direction) {
    if (!this.history[direction]()) return;
    this.pending = null;
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
    if (mode === 'wire') this.selection = null;
    this.mode = mode;
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

  addBend(point) {
    if (this.pending.points.length >= MAX_POINTS_PER_WIRE) {
      this.notify(`A wire can have up to ${MAX_POINTS_PER_WIRE} bend points.`);
      return;
    }
    this.pending.points.push(clampPoint(point));
  }

  activateEndpoint(endpoint, position) {
    if (!this.pending) {
      this.pending = { from: endpoint, points: [] };
      this.selection = null;
      this.render();
      return;
    }
    const { from } = this.pending;
    if (from.wireId && from.wireId === endpoint.wireId) {
      this.notify('Choose a different wire or pin to finish the connection.');
      return;
    }
    if (!from.wireId && !endpoint.wireId) {
      if (sameEndpoint(from, endpoint)) {
        this.cancelWire();
        return;
      }
      if (this.project.wires.some(wire =>
        (sameEndpoint(wire.from, from) && sameEndpoint(wire.to, endpoint)) ||
        (sameEndpoint(wire.to, from) && sameEndpoint(wire.from, endpoint)))) {
        this.notify('These points already have a connection.');
        return;
      }
    }
    const { next, wire } = connect(this.project, this.pending, endpoint, this.wireColor, position);
    this.commit(next, { selection: { type: 'wire', id: wire.id }, pending: null });
  }
}
