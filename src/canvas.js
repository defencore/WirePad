import { createAutoRouter } from './autoroute.js';
import { componentArt, componentById } from './catalog.js';
import { traceNet } from './continuity.js';
import { endpointKey, endpointPositions, nearestSegment, wireAnchor, wireRoute } from './routing.js';
import { escapeText } from './text.js';

const MIN_ZOOM = .01;
const MAX_ZOOM = 4;
const limitZoom = scale => Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, scale));
const SVG_FONT = 'Arial, sans-serif';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export function partName(part, component = componentById.get(part.componentId)) {
  return part.label?.trim() || component.name;
}

function pathFrom(points) {
  return points.map(({ x, y }, i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
}

function wireMarkup(wire, d, editing) {
  const shape = `<path d="${d}" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  const hit = editing
    ? `${shape} stroke="transparent" stroke-width="12" vector-effect="non-scaling-stroke" class="wire-hit" data-wire="${wire.id}" role="button" aria-label="Wire segment" tabindex="0"/>`
    : '';
  return `${shape} stroke="#ffffff" stroke-width="5.7"/>${shape} stroke="${wire.color}" stroke-width="3.1"/>${hit}`;
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

function partMarkup(part, component, wired, editing) {
  const { width, height } = component;
  const name = partName(part, component);
  const text = escapeText(name);
  const labelWidth = Math.max(54, name.length * 7 + 16);
  const pins = component.pins.map(pin => {
    const connected = wired.has(pin.id);
    if (!editing) {
      return connected
        ? `<circle cx="${pin.x}" cy="${pin.y}" r="3" fill="#087a6f" stroke="#fff" stroke-width=".9"/>`
        : '';
    }
    const label = escapeText(`${name} · ${pin.label} — ${pin.description}`);
    return `<g class="canvas-pin" data-pin="${pin.id}" data-part="${part.id}" role="button" tabindex="0" aria-label="${label}">
      <title>${label}</title>
      <circle cx="${pin.x}" cy="${pin.y}" r="8" fill="transparent"/>
      <circle class="pin-highlight" cx="${pin.x}" cy="${pin.y}" r="6" fill="#aeeadf" stroke="#087a6f" stroke-width="1"/>
      <circle cx="${pin.x}" cy="${pin.y}" r="${connected ? 3.3 : 2.55}" fill="${connected ? '#087a6f' : '#fffbeb'}" stroke="${connected ? '#ffffff' : '#967543'}" stroke-width=".9"/>
    </g>`;
  }).join('');
  const body = editing
    ? `<g class="part-body" data-part="${part.id}" role="button" tabindex="0" aria-label="Select ${text}">
        <rect class="part-focus" x="-8" y="-8" width="${width + 16}" height="${height + 16}" rx="9" fill="transparent" stroke="transparent" stroke-width="1.3" stroke-dasharray="4 4"/>
        ${componentArt(component)}
      </g>`
    : componentArt(component);
  return `<g transform="${partRotation(part, component)}">${body}${pins}</g>
    <g transform="${labelPosition(part, component)}" font-family="${SVG_FONT}" ${editing ? `data-part="${part.id}" class="part-body"` : ''}>
      <rect x="${-labelWidth / 2}" width="${labelWidth}" height="21" rx="5" fill="#ffffff" stroke="#dce5e8"/>
      <text text-anchor="middle" y="14" fill="#24313d" font-size="11" font-weight="700">${text}</text>
    </g>`;
}

const translation = (x, y) => `translate(${x} ${y})`;
const partRotation = ({ rotation = 0 }, { width, height }) => `rotate(${rotation} ${width / 2} ${height / 2})`;
const labelPosition = ({ rotation = 0 }, { width, height }) =>
  translation(width / 2, height / 2 + (rotation % 180 ? width : height) / 2 + 8);

function samePosition(a, b) {
  return a.x === b.x && a.y === b.y && a.normal?.x === b.normal?.x && a.normal?.y === b.normal?.y &&
    a.bounds?.x[0] === b.bounds?.x[0] && a.bounds?.x[1] === b.bounds?.x[1] &&
    a.bounds?.y[0] === b.bounds?.y[0] && a.bounds?.y[1] === b.bounds?.y[1];
}

function resolveDrawing(project, previousRoutes) {
  const position = endpointPositions(project);
  const parts = new Map(project.parts.map(part => [part.id, { part, connected: new Set() }]));
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

function junctionDot({ x, y }) {
  return `<circle cx="${x}" cy="${y}" r="4.6" fill="#18232d" stroke="#fff" stroke-width="1.2"/>`;
}

function traceMarkup(net, geometry) {
  const color = '#6b38d5';
  const outlines = [];
  const lines = [];
  for (const id of net.wireIds) {
    const { path } = geometry.wires.get(id).geometry;
    const shape = `<path d="${path}" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"`;
    outlines.push(`${shape} stroke="#ffffff" stroke-width="8"/>`);
    lines.push(`${shape} stroke="${color}" stroke-width="4" data-trace-wire="${id}"/>`);
  }
  const terminals = [...net.endpoints].map(([key, endpoint]) => {
    const { x, y } = geometry.position(endpoint);
    return `<circle cx="${x}" cy="${y}" r="5" fill="${color}" stroke="#ffffff" stroke-width="2" vector-effect="non-scaling-stroke" data-trace-endpoint="${key}"/>`;
  });
  return outlines.join('') + lines.join('') + terminals.join('');
}

export function drawingMarkup(project) {
  const { parts, wires, branches, junctions } = resolveDrawing(project);
  const wireShapes = [...wires.values()].map(({ wire, geometry }) => wireMarkup(wire, geometry.path, false));
  const partShapes = [...parts.values()].map(({ part, connected }) => `<g transform="${translation(part.x, part.y)}">${
    partMarkup(part, componentById.get(part.componentId), connected, false)
  }</g>`);
  return wireShapes.join('') + branches + partShapes.join('') + [...junctions.values()].map(junctionDot).join('');
}

function group(parent) {
  return parent.ownerDocument.createElementNS(SVG_NAMESPACE, 'g');
}

class SceneLayer {
  constructor(parent) {
    this.node = group(parent);
    this.entries = new Map();
    parent.append(this.node);
  }

  update(items, updateEntry) {
    for (const [id, entry] of this.entries) {
      if (!items.has(id)) {
        entry.node.remove();
        this.entries.delete(id);
      }
    }
    let cursor = this.node.firstElementChild;
    for (const [id, item] of items) {
      const entry = updateEntry(item, this.entries.get(id));
      this.entries.set(id, entry);
      if (entry.node === cursor) cursor = cursor.nextElementSibling;
      else this.node.insertBefore(entry.node, cursor);
    }
  }
}

function updateWire(layer, entry, { wire, geometry }, selected) {
  if (!entry) {
    const node = group(layer);
    node.innerHTML = wireMarkup(wire, geometry.path, true);
    entry = { node, path: geometry.path, color: wire.color, selected: false };
  }
  const [outline, line] = entry.node.children;
  if (entry.path !== geometry.path) {
    for (const path of entry.node.children) path.setAttribute('d', geometry.path);
    entry.path = geometry.path;
  }
  if (entry.color !== wire.color) {
    line.setAttribute('stroke', wire.color);
    entry.color = wire.color;
  }
  if (entry.selected !== selected) {
    outline.setAttribute('stroke', selected ? '#9cdcd0' : '#ffffff');
    outline.setAttribute('stroke-width', selected ? 9 : 5.7);
    entry.selected = selected;
  }
  return entry;
}

function updatePin(pin, connected) {
  const dot = pin.lastElementChild;
  dot.setAttribute('r', connected ? 3.3 : 2.55);
  dot.setAttribute('fill', connected ? '#087a6f' : '#fffbeb');
  dot.setAttribute('stroke', connected ? '#ffffff' : '#967543');
}

function updatePart(layer, entry, { part, connected }, selected, active) {
  const { componentId, label, x, y, rotation } = part;
  if (!entry || entry.componentId !== componentId || entry.label !== label) {
    const node = entry?.node ?? group(layer);
    const component = componentById.get(componentId);
    node.innerHTML = partMarkup(part, component, connected, true);
    const [body, caption] = node.children;
    const pins = new Map([...body.children].slice(1).map(pin => [pin.dataset.pin, pin]));
    entry = { node, component, componentId, label, body, caption, pins, connected, rotation, selected: false };
  }
  if (entry.x !== x || entry.y !== y) {
    entry.node.setAttribute('transform', translation(x, y));
    entry.x = x;
    entry.y = y;
  }
  if (entry.rotation !== rotation) {
    entry.body.setAttribute('transform', partRotation(part, entry.component));
    entry.caption.setAttribute('transform', labelPosition(part, entry.component));
    entry.rotation = rotation;
  }
  for (const id of entry.connected) if (!connected.has(id)) updatePin(entry.pins.get(id), false);
  for (const id of connected) if (!entry.connected.has(id)) updatePin(entry.pins.get(id), true);
  entry.connected = connected;
  if (entry.active !== active) {
    entry.pins.get(entry.active)?.classList.remove('is-active');
    entry.pins.get(active)?.classList.add('is-active');
    entry.active = active;
  }
  if (entry.selected !== selected) {
    const outline = entry.body.firstElementChild.firstElementChild;
    const [background, text] = entry.caption.children;
    outline.setAttribute('stroke', selected ? '#62ac9f' : 'transparent');
    background.setAttribute('fill', selected ? '#e6f5f1' : '#ffffff');
    background.setAttribute('stroke', selected ? '#c4e3dc' : '#dce5e8');
    text.setAttribute('fill', selected ? '#08675e' : '#24313d');
    entry.selected = selected;
  }
  return entry;
}

function updateJunction(layer, entry, junction) {
  const { id, x, y } = junction;
  if (!entry) {
    const node = group(layer);
    node.setAttribute('class', 'canvas-junction');
    node.dataset.junction = id;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', 'Wire junction');
    node.innerHTML = `<circle cx="${x}" cy="${y}" r="10" fill="transparent"/>${junctionDot(junction)}`;
    entry = { node, x, y };
  } else if (entry.x !== x || entry.y !== y) {
    for (const circle of entry.node.children) {
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
    }
    entry.x = x;
    entry.y = y;
  }
  return entry;
}

export class DrawingCanvas {
  constructor({ svg, scene, draft, onZoom }) {
    this.svg = svg;
    this.scene = scene;
    this.draft = draft;
    this.onZoom = onZoom;
    this.scale = 1;
    this.center = { x: 0, y: 0 };
    this.autoFit = true;
    this.wires = new SceneLayer(scene);
    this.branches = group(scene);
    scene.append(this.branches);
    this.parts = new SceneLayer(scene);
    this.junctions = new SceneLayer(scene);
    this.traceLayer = group(svg);
    this.traceLayer.setAttribute('class', 'net-trace');
    this.traceLayer.setAttribute('aria-hidden', 'true');
    this.traceLayer.setAttribute('pointer-events', 'none');
    svg.insertBefore(this.traceLayer, draft);
    this.draftMarkup = '';
    new ResizeObserver(() => this.autoFit ? this.fit() : this.applyView()).observe(svg);
  }

  draw(project, selection, active, trace) {
    const projectChanged = this.geometryProject !== project;
    const selectionChanged = this.selection !== selection || this.active !== active;
    const previous = this.geometry;
    if (projectChanged || selectionChanged) {
      if (projectChanged) {
        this.geometry = resolveDrawing(project, previous?.wires);
        this.autoRouter = null;
        this.lastAutoRoute = null;
      }
      this.geometryProject = project;
      this.selection = selection;
      this.active = active;
      const { wires, branches, parts, junctions } = this.geometry;
      this.wires.update(wires, (data, entry) => updateWire(this.wires.node, entry, data,
        selection?.type === 'wire' && selection.id === data.wire.id));
      if (branches !== (previous?.branches ?? '')) this.branches.innerHTML = branches;
      this.parts.update(parts, (data, entry) => updatePart(this.parts.node, entry, data,
        selection?.type === 'part' && selection.id === data.part.id,
        active?.partId === data.part.id ? active.pinId : undefined));
      this.junctions.update(junctions, (data, entry) => updateJunction(this.junctions.node, entry, data));
    }
    const traceKey = trace?.wireId ? `wire/${trace.wireId}` : trace && endpointKey(trace);
    if (this.traceKey !== traceKey || (trace && projectChanged)) {
      this.traceKey = traceKey;
      const net = trace && traceNet(project, trace);
      this.tracedNet = net;
      const dim = Boolean(net?.wireIds.size);
      this.traceLayer.innerHTML = net ? traceMarkup(net, this.geometry) : '';
      this.wires.node.setAttribute('opacity', dim ? '.26' : '1');
      this.branches.setAttribute('opacity', dim ? '.26' : '1');
    }
  }

  position(endpoint) {
    return this.geometry.position(endpoint);
  }

  nearestWire(ids, point) {
    let best;
    let distance = Infinity;
    for (const id of ids) {
      const entry = this.geometry.wires.get(id);
      if (!entry) continue;
      const hit = nearestSegment(entry.geometry.route, point);
      if (!hit) continue;
      const squaredDistance = (point.x - hit.point.x) ** 2 + (point.y - hit.point.y) ** 2;
      if (squaredDistance < distance) {
        best = id;
        distance = squaredDistance;
      }
    }
    return best;
  }

  anchorWire(id, point, threshold) {
    const entry = this.geometry.wires.get(id);
    return entry ? wireAnchor(entry.wire, entry.geometry.route, point, threshold) : null;
  }

  branchAnchor(wireId) {
    const route = this.geometry.wires.get(wireId)?.geometry.route;
    if (!route) return null;
    let length = 0;
    let point = null;
    for (let index = 1; index < route.length; index++) {
      const start = route[index - 1];
      const end = route[index];
      const distance = Math.abs(end.x - start.x) + Math.abs(end.y - start.y);
      if (distance > length) {
        length = distance;
        point = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
      }
    }
    return point ? { wireId, point } : null;
  }

  autoRoute(start, end, { excludeWire } = {}) {
    const previous = this.lastAutoRoute;
    if (!excludeWire && previous && samePosition(start, previous.start) && samePosition(end, previous.end)) {
      return previous.route;
    }

    let router = excludeWire ? null : this.autoRouter;
    if (!router) {
      const routes = [];
      for (const [id, { geometry }] of this.geometry.wires) {
        if (id !== excludeWire) routes.push(geometry.route);
      }
      router = createAutoRouter(this.geometryProject, routes);
      if (!excludeWire) this.autoRouter = router;
    }
    const route = router(start, end);
    if (!excludeWire) this.lastAutoRoute = { start, end, route };
    return route;
  }

  showDraft(pending, point, color, endpoint) {
    let markup = '';
    if (pending && point) {
      const start = this.position(pending.from);
      const end = endpoint ? this.position(endpoint) : point;
      if (start.x !== end.x || start.y !== end.y) {
        const route = endpoint && !pending.points?.length ? this.autoRoute(start, end) : wireRoute(start, end, pending.points);
        markup = `<path d="${pathFrom(route)}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 4" vector-effect="non-scaling-stroke"/>`;
      }
      const ring = ({ x, y }) => `<circle cx="${x}" cy="${y}" r="6.3" fill="#d7f4ed" stroke="#087a6f" stroke-width="1.5"/>`;
      if (!pending.from.partId) markup += ring(start);
      if (endpoint && !endpoint.partId) markup += ring(end);
    }
    if (this.draftMarkup !== markup) {
      this.draft.innerHTML = markup;
      this.draftMarkup = markup;
    }
  }

  bounds() {
    const { x, y, width, height } = this.scene.getBBox();
    return { x, y, width, height };
  }

  fit() {
    const { clientWidth, clientHeight } = this.svg;
    if (!clientWidth || !clientHeight) return;
    const bounds = this.bounds();
    this.autoFit = true;
    this.center = { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 };
    this.scale = bounds.width && bounds.height ? Math.min(
      1.4, Math.max(MIN_ZOOM, Math.max(1, clientWidth - Math.min(105, clientWidth * .16)) / bounds.width),
      Math.max(MIN_ZOOM, Math.max(1, clientHeight - Math.min(138, clientHeight * .26)) / bounds.height),
    ) : 1;
    this.applyView();
  }

  point(clientX, clientY) {
    const rectangle = this.svg.getBoundingClientRect();
    return {
      x: this.center.x + (clientX - rectangle.left - rectangle.width / 2) / this.scale,
      y: this.center.y + (clientY - rectangle.top - rectangle.height / 2) / this.scale,
    };
  }

  zoom(scale, anchor = this.center) {
    const next = limitZoom(scale);
    const ratio = this.scale / next;
    this.center = {
      x: anchor.x + (this.center.x - anchor.x) * ratio,
      y: anchor.y + (this.center.y - anchor.y) * ratio,
    };
    this.scale = next;
    this.autoFit = false;
    this.applyView();
  }

  zoomAt(scale, anchor, clientX, clientY) {
    const rect = this.svg.getBoundingClientRect();
    this.scale = limitZoom(scale);
    this.center = {
      x: anchor.x - (clientX - rect.left - rect.width / 2) / this.scale,
      y: anchor.y - (clientY - rect.top - rect.height / 2) / this.scale,
    };
    this.autoFit = false;
    this.applyView();
  }

  pan(start, x, y) {
    this.center = { x: start.x - x / this.scale, y: start.y - y / this.scale };
    this.autoFit = false;
    this.applyView();
  }

  applyView() {
    const width = this.svg.clientWidth / this.scale;
    const height = this.svg.clientHeight / this.scale;
    if (!width || !height) return;
    this.svg.setAttribute('viewBox', `${this.center.x - width / 2} ${this.center.y - height / 2} ${width} ${height}`);
    this.onZoom(this.scale);
  }
}
