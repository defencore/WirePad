import { componentForPart } from '../model/part-component.js';
import { partScale } from '../model/part-placement.js';
import { translation, partRotation, labelPosition } from '../geometry/parts.js';
import { wireMarkup, partMarkup, junctionDot } from './markup.js';
import { usesCompactBoardView } from './part-art.js';

export const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

export function group(parent) {
  return parent.ownerDocument.createElementNS(SVG_NAMESPACE, 'g');
}

export class SceneLayer {
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

export function updateWireHandle(layer, entry, handle, scale) {
  const { wireId, kind, index, point, display, axis, active } = handle;
  if (!entry) {
    const node = group(layer);
    node.setAttribute('class', 'wire-handle');
    node.dataset.wireHandle = kind;
    node.dataset.handleWire = wireId;
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    if (index !== undefined) node.dataset[kind === 'segment' ? 'segmentIndex' : 'bendIndex'] = index;
    const marker = kind === 'bend'
      ? '<rect class="wire-handle-marker" x="-3.8" y="-3.8" width="7.6" height="7.6" rx="1.2" transform="rotate(45)" pointer-events="none"/>'
      : `<circle class="wire-handle-marker" r="${kind === 'segment' ? 4.5 : 5.5}" pointer-events="none"/>`;
    node.innerHTML = `<line class="wire-handle-leader" stroke="#4b82cc" stroke-width="1.2" pointer-events="none"/>
      <circle class="wire-handle-hit" r="11" fill="transparent"/>${marker}<title/>`;
    entry = { node };
  }
  const { node } = entry;
  if (entry.axis !== axis || !entry.label) {
    const label = { from: 'Reconnect wire start', to: 'Reconnect wire end', bend: 'Move wire bend',
      segment: axis === 'x' ? 'Move wire segment left or right' : 'Move wire segment up or down' }[kind];
    node.setAttribute('aria-label', label);
    node.lastElementChild.textContent = label;
    if (axis) node.dataset.axis = axis;
    entry.axis = axis;
    entry.label = label;
  }
  node.dataset.handleX = point.x;
  node.dataset.handleY = point.y;
  node.toggleAttribute('data-active', active);
  if (kind === 'bend') node.setAttribute('aria-pressed', String(active));
  node.setAttribute('transform', `${translation(display.x, display.y)} scale(${1 / scale})`);
  const leader = node.firstElementChild;
  const x = (point.x - display.x) * scale;
  const y = (point.y - display.y) * scale;
  leader.setAttribute('x2', x);
  leader.setAttribute('y2', y);
  leader.setAttribute('visibility', x || y ? 'visible' : 'hidden');
  return entry;
}

export function updateWire(layer, entry, { wire, geometry }, selected) {
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

export function updatePart(layer, entry, { part, connected, covered = new Set() }, selected, active) {
  const { label, x, y, rotation } = part;
  const scale = partScale(part);
  const component = componentForPart(part);
  const mountedView = usesCompactBoardView(part, component);
  if (!entry || entry.component !== component || entry.label !== label || entry.leads !== part.leads ||
      Boolean(entry.seated) !== Boolean(part.attachment) || Boolean(entry.mountedView) !== mountedView ||
      mountedView && entry.rotation !== rotation) {
    const node = entry?.node ?? group(layer);
    entry?.background?.remove();
    node.innerHTML = partMarkup(part, component, connected, true);
    const [body, caption] = node.children;
    const artwork = body.firstElementChild;
    const outline = artwork.firstElementChild;
    const pins = new Map([...body.children].slice(1).map(pin => [pin.dataset.pin, pin]));
    let background;
    let backgroundBody;
    if (part.leads || component.surface || component.contactLayout === 'physical') {
      background = group(layer);
      backgroundBody = group(layer);
      backgroundBody.setAttribute('transform', partRotation(part, component));
      backgroundBody.append(artwork);
      background.append(backgroundBody);
    }
    entry = { node, component, label, body, caption, pins, outline, background, backgroundBody, connected, rotation,
      scaleX: scale.x, scaleY: scale.y, leads: part.leads, seated: Boolean(part.attachment), mountedView, covered: new Set(), selected: false };
  }
  if (entry.x !== x || entry.y !== y) {
    entry.node.setAttribute('transform', translation(x, y));
    entry.background?.setAttribute('transform', translation(x, y));
    entry.x = x;
    entry.y = y;
  }
  if (entry.rotation !== rotation || entry.scaleX !== scale.x || entry.scaleY !== scale.y) {
    entry.body.setAttribute('transform', partRotation(part, entry.component));
    entry.backgroundBody?.setAttribute('transform', partRotation(part, entry.component));
    entry.caption.setAttribute('transform', labelPosition(part, entry.component));
    entry.rotation = rotation;
    entry.scaleX = scale.x;
    entry.scaleY = scale.y;
  }
  for (const id of entry.connected) if (!connected.has(id)) updatePin(entry.pins.get(id), false);
  for (const id of connected) if (!entry.connected.has(id)) updatePin(entry.pins.get(id), true);
  entry.connected = connected;
  for (const id of entry.covered ?? []) if (!covered.has(id)) entry.pins.get(id).removeAttribute('display');
  for (const id of covered) if (!entry.covered?.has(id)) entry.pins.get(id).setAttribute('display', 'none');
  entry.covered = covered;
  if (entry.active !== active) {
    entry.pins.get(entry.active)?.classList.remove('is-active');
    entry.pins.get(active)?.classList.add('is-active');
    entry.active = active;
  }
  if (entry.selected !== selected) {
    const [background, text] = entry.caption.children;
    entry.outline.setAttribute('stroke', selected ? '#168c7b' : 'transparent');
    entry.outline.setAttribute('stroke-width', selected ? '1.6' : '1.3');
    background.setAttribute('fill', selected ? '#e6f5f1' : '#ffffff');
    background.setAttribute('stroke', selected ? '#c4e3dc' : '#dce5e8');
    text.setAttribute('fill', selected ? '#08675e' : '#24313d');
    entry.outline.setAttribute('vector-effect', 'non-scaling-stroke');
    const body = entry.backgroundBody?.firstElementChild ?? entry.body.firstElementChild;
    body.setAttribute('aria-pressed', String(selected));
    entry.selected = selected;
  }
  return entry;
}

export function updateJunction(layer, entry, junction, selected) {
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
  if (entry.selected !== selected) {
    const halo = entry.node.firstElementChild;
    halo.setAttribute('fill', selected ? '#aeeadf' : 'transparent');
    halo.setAttribute('fill-opacity', '.65');
    halo.setAttribute('stroke', selected ? '#087a6f' : 'none');
    halo.setAttribute('stroke-width', '2');
    halo.setAttribute('vector-effect', 'non-scaling-stroke');
    entry.node.setAttribute('aria-pressed', String(selected));
    entry.selected = selected;
  }
  return entry;
}
