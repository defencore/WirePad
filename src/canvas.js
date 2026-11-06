import { componentArt, componentById } from './catalog.js';
import { endpointKey, endpointPositions, routeFor, wireRoute } from './routing.js';

const MIN_ZOOM = .01;
const MAX_ZOOM = 4;
const SVG_FONT = 'Arial, sans-serif';
const escapeMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeText(value) {
  return String(value).replace(/[&<>"']/g, character => escapeMap[character])
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g, '');
}

export function partName(part, component = componentById.get(part.componentId)) {
  return part.label?.trim() || component.name;
}

function pathFrom(points) {
  return points.map(({ x, y }, i) => `${i ? 'L' : 'M'}${x} ${y}`).join(' ');
}

function wireMarkup(wire, route, selected, editing) {
  const d = pathFrom(route);
  const shape = `<path d="${d}" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  const hit = editing
    ? `${shape} stroke="transparent" stroke-width="12" vector-effect="non-scaling-stroke" class="wire-hit" data-wire="${wire.id}" role="button" aria-label="Wire segment" tabindex="0"/>`
    : '';
  return `${shape} stroke="${selected ? '#9cdcd0' : '#ffffff'}" stroke-width="${selected ? 9 : 5.7}"/>${shape} stroke="${wire.color}" stroke-width="3.1"/>${hit}`;
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

function partMarkup(part, wired, options) {
  const component = componentById.get(part.componentId);
  const { width, height } = component;
  const name = escapeText(partName(part, component));
  const { editing, selected, active } = options;
  const angle = part.rotation ?? 0;
  const bottom = height / 2 + (angle % 180 ? width : height) / 2;
  const labelWidth = Math.max(54, partName(part, component).length * 7 + 16);
  const pins = component.pins.map(pin => {
    const connected = wired.has(pin.id);
    if (!editing) {
      return connected
        ? `<circle cx="${pin.x}" cy="${pin.y}" r="3" fill="#087a6f" stroke="#fff" stroke-width=".9"/>`
        : '';
    }
    const current = active?.partId === part.id && active.pinId === pin.id;
    const label = escapeText(`${partName(part, component)} · ${pin.label} — ${pin.description}`);
    return `<g class="canvas-pin${current ? ' is-active' : ''}" data-pin="${pin.id}" data-part="${part.id}" role="button" tabindex="0" aria-label="${label}">
      <title>${label}</title>
      <circle cx="${pin.x}" cy="${pin.y}" r="8" fill="transparent"/>
      <circle class="pin-highlight" cx="${pin.x}" cy="${pin.y}" r="6" fill="#aeeadf" stroke="#087a6f" stroke-width="1"/>
      <circle cx="${pin.x}" cy="${pin.y}" r="${connected ? 3.3 : 2.55}" fill="${connected ? '#087a6f' : '#fffbeb'}" stroke="${connected ? '#ffffff' : '#967543'}" stroke-width=".9"/>
    </g>`;
  }).join('');
  const body = editing
    ? `<g class="part-body" data-part="${part.id}" role="button" tabindex="0" aria-label="Select ${name}">
        <rect class="part-focus" x="-8" y="-8" width="${width + 16}" height="${height + 16}" rx="9" fill="transparent" stroke="${selected ? '#62ac9f' : 'transparent'}" stroke-width="1.3" stroke-dasharray="4 4"/>
        ${componentArt(component)}
      </g>`
    : componentArt(component);
  return `<g transform="translate(${part.x} ${part.y})">
    <g transform="rotate(${angle} ${width / 2} ${height / 2})">${body}${pins}</g>
    <g transform="translate(${width / 2} ${bottom + 8})" font-family="${SVG_FONT}" ${editing ? `data-part="${part.id}" class="part-body"` : ''}>
      <rect x="${-labelWidth / 2}" width="${labelWidth}" height="21" rx="5" fill="${selected ? '#e6f5f1' : '#ffffff'}" stroke="${selected ? '#c4e3dc' : '#dce5e8'}"/>
      <text text-anchor="middle" y="14" fill="${selected ? '#08675e' : '#24313d'}" font-size="11" font-weight="700">${name}</text>
    </g>
  </g>`;
}

export function drawingMarkup(project, { editing = false, selection = null, active = null } = {}) {
  const position = endpointPositions(project);
  const connections = new Map(project.parts.map(part => [part.id, new Set()]));
  const groups = new Map();
  const wires = project.wires.map(wire => {
    const route = routeFor(wire, position);
    for (const endpoint of [wire.from, wire.to]) {
      if (endpoint.partId) connections.get(endpoint.partId).add(endpoint.pinId);
      const key = `${endpointKey(endpoint)}/${wire.color}`;
      if (!groups.has(key)) groups.set(key, { color: wire.color, routes: [] });
      groups.get(key).routes.push(route);
    }
    return wireMarkup(wire, route, selection?.type === 'wire' && selection.id === wire.id, editing);
  });
  const junctions = (project.junctions ?? []).map(({ id, x, y }) => {
    const dot = `<circle cx="${x}" cy="${y}" r="4.6" fill="#18232d" stroke="#fff" stroke-width="1.2"/>`;
    if (!editing) return dot;
    return `<g class="canvas-junction" data-junction="${id}" role="button" tabindex="0" aria-label="Wire junction">
      <circle cx="${x}" cy="${y}" r="10" fill="transparent"/>${dot}
    </g>`;
  });
  return wires.join('') + junctionMarkup(groups) + project.parts.map(part => partMarkup(part, connections.get(part.id), {
    editing, active, selected: selection?.type === 'part' && selection.id === part.id,
  })).join('') + junctions.join('');
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
    new ResizeObserver(() => this.autoFit ? this.fit() : this.applyView()).observe(svg);
  }

  draw(project, selection, active) {
    this.scene.innerHTML = drawingMarkup(project, { editing: true, selection, active });
  }

  showDraft(project, pending, point, color, endpoint) {
    if (!pending || !point) {
      this.draft.innerHTML = '';
      return;
    }
    const position = endpointPositions(project);
    const start = position(pending.from);
    const end = endpoint ? position(endpoint) : point;
    const path = start.x === end.x && start.y === end.y ? '' : `<path d="${pathFrom(wireRoute(start, end, pending.points))}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="6 4"/>`;
    const ring = ({ x, y }) => `<circle cx="${x}" cy="${y}" r="6.3" fill="#d7f4ed" stroke="#087a6f" stroke-width="1.5"/>`;
    this.draft.innerHTML = path + (pending.from.partId ? '' : ring(start)) + (endpoint && !endpoint.partId ? ring(end) : '');
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
    const next = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, scale));
    const ratio = this.scale / next;
    this.center = {
      x: anchor.x + (this.center.x - anchor.x) * ratio,
      y: anchor.y + (this.center.y - anchor.y) * ratio,
    };
    this.scale = next;
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
