import { configurationFor } from '../catalog/index.js';
import { pinById } from '../model/component-pins.js';
import { componentForPart } from '../model/part-component.js';
import { traceNet } from '../model/continuity.js';
import { automaticWireColor, connectionPowerRole, DEFAULT_WIRE_COLOR } from '../model/wire-colors.js';
import { MAX_POINTS_PER_WIRE } from '../model/limits.js';
import { endpointKey, sameEndpoint } from '../model/endpoints.js';
import { itemCollections as collections, updateItem } from '../model/items.js';
import { clampPoint, deleteWireBend, insertWireBend } from '../geometry/routing.js';
import { selectionKey, translateSelection } from './selection.js';
import { rotateWithAttachments } from './attachments.js';
import { placementProject, previewPart } from './placement.js';
import { suggestPlacement } from './suggest-placement.js';
import { placementAssessment } from '../geometry/placement-assessment.js';
import { moveBodyKeepingLeads, moveLead } from '../geometry/lead-placement.js';
import { attachmentError, detachInvalidAttachments } from '../model/mounting.js';
import { automaticWaypoints, resolveAnchor, connectWire, targetExists } from './wire-transactions.js';

export class DiagramEditor {
  #selections = [];
  mode = 'select';
  pending = null;
  trace = null;
  wireColor = DEFAULT_WIRE_COLOR;

  constructor(history, render, notify) {
    this.history = history;
    this.render = render;
    this.notify = notify;
    this.selection = this.firstPart();
  }

  get project() { return this.history.project; }
  get selections() { return this.#selections; }
  get canMoveSelection() {
    return this.#selections.some(({ type, id }) => type !== 'wire' || this.item(type, id)?.points?.length > 0);
  }
  get selection() { return this.#selections.at(-1) ?? null; }
  set selection(item) { this.#selections = item ? [item] : []; }
  get hasDrawing() {
    const { parts, wires, junctions } = this.project;
    return Boolean(parts.length || wires.length || junctions?.length);
  }
  get part() { return this.#selections.length === 1 && this.selection.type === 'part' ? this.item('part', this.selection.id) : null; }
  get wire() { return this.#selections.length === 1 && this.selection.type === 'wire' ? this.item('wire', this.selection.id) : null; }
  get traceSeed() {
    if (this.mode === 'trace') return this.trace;
    if (this.mode !== 'pan' && !this.pending && this.wire) return { wireId: this.selection.id };
    return null;
  }

  item(type, id) { return this.project[collections[type]]?.find(item => item.id === id); }

  firstPart() {
    const part = this.project.parts[0];
    return part ? { type: 'part', id: part.id } : null;
  }

  commit(next, options = {}) {
    const { mode = this.mode, pending = this.pending } = options;
    try {
      this.history.commit(detachInvalidAttachments(next));
    } catch (error) {
      this.render();
      this.notify(error.message);
      return false;
    }
    const selections = options.selections ?? (Object.hasOwn(options, 'selection')
      ? options.selection ? [options.selection] : [] : this.#selections);
    this.#selections = this.validSelections(selections);
    this.mode = mode;
    this.pending = pending && targetExists(this.project, pending.from) ? pending : null;
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
    this.#selections = this.validSelections(this.#selections);
    this.render({ persist: true });
  }

  validSelections(items) {
    const keys = new Set();
    return items.filter(item => {
      const key = selectionKey(item);
      if (keys.has(key) || !this.item(item.type, item.id)) return false;
      keys.add(key);
      return true;
    }).map(({ type, id }) => ({ type, id }));
  }

  hasSelection(type, id) {
    return this.#selections.some(item => item.type === type && item.id === id);
  }

  select(type, id, options) {
    this.selectMany(type ? [{ type, id }] : [], options);
  }

  selectMany(items, { additive = false, toggle = false, remove = false } = {}) {
    const incoming = this.validSelections(items);
    const keys = new Set(incoming.map(selectionKey));
    let next;
    if (remove) next = this.#selections.filter(item => !keys.has(selectionKey(item)));
    else if (toggle) {
      const previous = new Set(this.#selections.map(selectionKey));
      next = [...this.#selections.filter(item => !keys.has(selectionKey(item))),
        ...incoming.filter(item => !previous.has(selectionKey(item)))];
    } else if (additive) {
      next = [...this.#selections.filter(item => !keys.has(selectionKey(item))), ...incoming];
    } else next = incoming;
    if (next.length === this.#selections.length && next.every((item, index) => selectionKey(item) === selectionKey(this.#selections[index]))) return;
    this.#selections = next;
    this.render();
  }

  selectAll() {
    this.selectMany(Object.entries(collections).flatMap(([type, collection]) =>
      (this.project[collection] ?? []).map(({ id }) => ({ type, id }))));
  }

  selectionProject(dx, dy, project = this.project) {
    return translateSelection(project, this.#selections, dx, dy);
  }

  placementProject(partId, destination, project = this.project) {
    return placementProject(project, partId, destination);
  }

  previewPart(componentId, point) {
    return previewPart(this.project, componentId, point);
  }

  placementAssessment(partId, project = this.project) {
    return placementAssessment(project, project.parts.find(part => part.id === partId));
  }

  leadProject(partId, pinId, point, project = this.project) {
    return moveLead(project, partId, pinId, point);
  }

  bodyPlacementProject(partId, point, project = this.project) {
    return moveBodyKeepingLeads(project, partId, point);
  }

  suggestPlacement(componentId, hostPartId) {
    return suggestPlacement(this.project, componentId, hostPartId);
  }

  moveSelection(dx, dy) {
    const next = this.selectionProject(dx, dy);
    return next ? this.commit(next) : false;
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

  addPart(componentId, point, { mount = false, hostPartId } = {}) {
    const preview = previewPart(this.project, componentId, point, { mount, hostPartId });
    if (!preview) return null;
    if (mount && hostPartId && !preview.fit) {
      this.notify('No free placement is available on this breadboard. Move a part or choose another position.');
      return null;
    }
    const { part } = preview;
    return this.commit(preview.project, {
      selection: { type: 'part', id: part.id }, mode: 'select', pending: null,
    }) ? this.item('part', part.id) : null;
  }

  updatePart(properties) {
    if (this.part) this.commit(updateItem(this.project, 'part', this.part.id, properties));
  }

  rotatePart(angle) {
    const part = this.part;
    if (!part) return false;
    const current = part.rotation ?? 0;
    const rotation = angle ?? (current + 90) % 360;
    if (![0, 90, 180, 270].includes(rotation) || rotation === current) return false;
    return this.commit(rotateWithAttachments(this.project, part, rotation));
  }

  configurePart(settings) {
    const part = this.part;
    const configuration = configurationFor(part?.componentId);
    if (!configuration) return false;
    try {
      const config = configuration.normalize(settings);
      const component = componentForPart({ ...part, [configuration.key]: config });
      const removedContact = this.project.wires.some(wire => [wire.from, wire.to].some(endpoint =>
        endpoint.partId === part.id && !pinById(component, endpoint.pinId)));
      if (removedContact) {
        throw new Error('These settings would remove connected contacts. Disconnect their wires before changing the layout.');
      }
      if (JSON.stringify(config) === JSON.stringify(configuration.normalize(part[configuration.key]))) return false;
      const next = updateItem(this.project, 'part', part.id, { [configuration.key]: config });
      const mounted = next.parts.filter(item => item.attachment?.hostPartId === part.id);
      if (mounted.some(item => attachmentError(next, item))) {
        throw new Error('These settings would move or remove occupied breadboard contacts. Detach the modules before changing the layout.');
      }
      return this.commit(next, { pending: null });
    } catch (error) {
      this.notify(error.message);
      this.render();
      return false;
    }
  }

  removeSelection() {
    if (!this.#selections.length) return;
    const { project } = this;
    const keys = new Set(this.#selections.map(selectionKey));
    const endpointRemoved = endpoint => endpoint.partId ? keys.has(`part:${endpoint.partId}`)
      : keys.has(`junction:${endpoint.junctionId}`);
    const parts = project.parts.filter(item => !keys.has(`part:${item.id}`));
    const wires = project.wires.filter(item => !keys.has(`wire:${item.id}`) &&
      !endpointRemoved(item.from) && !endpointRemoved(item.to));
    const next = { ...project, parts, wires };
    if (project.junctions?.length) {
      const used = new Set(wires.flatMap(item => [item.from.junctionId, item.to.junctionId]));
      next.junctions = project.junctions.filter(junction => used.has(junction.id));
    }
    this.commit(next, { selection: null });
  }

  setWireColor(color) {
    if (typeof color !== 'string' || !/^#(?:[a-f\d]{3}|[a-f\d]{6})$/i.test(color)) return false;
    color = color.toLowerCase();
    if (color.length === 4) color = color.replace(/[a-f\d]/g, digit => digit + digit);
    this.wireColor = color;
    if (this.pending) {
      this.pending.color = color;
      this.render();
      return true;
    }
    if (this.wire && this.wire.color !== color) return this.commit(updateItem(this.project, 'wire', this.wire.id, { color }));
    this.render();
    return true;
  }

  connectionColor(from, to) {
    if (this.pending?.color) return this.pending.color;
    const branchId = [from?.wireId, to?.wireId].filter(Boolean).sort()[0];
    const fallback = this.item('wire', branchId)?.color ?? this.wireColor;
    return automaticWireColor(this.project, from, to, fallback);
  }

  resetWireColor() {
    if (this.pending) {
      delete this.pending.color;
      this.render();
      return true;
    }
    if (!this.wire) return false;
    const color = automaticWireColor(this.project, this.wire.from, this.wire.to, DEFAULT_WIRE_COLOR);
    if (this.wire.color === color) return false;
    return this.commit(updateItem(this.project, 'wire', this.wire.id, { color }));
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
    const committed = this.commit({ ...project, wires, ...(junctions && { junctions }) }, { selection: { type: 'wire', id: wireId } });
    if (committed && connectionPowerRole(this.project, edited.from, edited.to) === 'conflict') {
      this.notify('This connection joins ground and a positive supply. Check the wiring before powering the circuit.');
    }
    return committed;
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
    if (!this.pending) return;
    if (this.pending.points.length >= MAX_POINTS_PER_WIRE) {
      this.notify(`A wire can have up to ${MAX_POINTS_PER_WIRE} bend points.`);
      return;
    }
    this.pending.points.push(clampPoint(point));
  }

  beginWire(endpoint, mode = this.mode) {
    if (!targetExists(this.project, endpoint)) {
      this.notify('Choose an existing pin, junction, or wire to start the connection.');
      return false;
    }
    this.mode = mode;
    this.pending = { from: endpoint, points: [] };
    this.selection = null;
    this.render();
    return true;
  }

  activateEndpoint(endpoint, position, planRoute) {
    if (!targetExists(this.project, endpoint)) {
      this.notify('Choose an existing pin, junction, or wire to finish the connection.');
      return false;
    }
    if (!this.pending) {
      return this.beginWire(endpoint);
    }
    const { from } = this.pending;
    if (!targetExists(this.project, from)) {
      this.cancelWire();
      this.notify('The connection start is no longer available. Choose another starting point.');
      return false;
    }
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
    const role = connectionPowerRole(this.project, from, endpoint);
    const plan = this.pending.points.length ? null : planRoute?.(position(from), position(endpoint));
    const connection = connectWire(this.project, this.pending, endpoint, this.connectionColor(from, endpoint), position, plan);
    if (!connection) {
      this.notify('Choose another point to finish the connection.');
      return;
    }
    const { next, wire } = connection;
    const committed = this.commit(next, { selection: { type: 'wire', id: wire.id }, pending: null });
    if (committed && role === 'conflict') {
      this.notify('This connection joins ground and a positive supply. Check the wiring before powering the circuit.');
    }
    return committed;
  }
}
