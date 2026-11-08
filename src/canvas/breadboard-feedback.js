import { mountingFor } from '../catalog/index.js';
import { breadboardOccupancy } from '../model/breadboard-occupancy.js';
import { componentForPart } from '../model/part-component.js';
import { traceNet } from '../model/continuity.js';
import { endpointKey } from '../model/endpoints.js';
import { escapeText } from '../shared/text.js';
import { group } from './layers.js';

export function breadboardFeedback(project, geometry, seed, { net = false } = {}) {
  if (!seed || !project || !geometry) return null;
  const part = project.parts.find(part => part.id === seed.partId);
  const component = part && componentForPart(part);
  const isHost = component && mountingFor(component.id)?.type === 'breadboard';
  if (!net && !isHost) return null;
  if (net) {
    const traced = traceNet(project, seed);
    if (!traced.endpoints.size) return null;
    const endpoints = [...traced.endpoints.values()].filter(endpoint =>
      !geometry.parts.get(endpoint.partId)?.covered.has(endpoint.pinId));
    return { points: endpoints.map(geometry.position),
      paths: [...traced.wireIds].map(id => geometry.wires.get(id).geometry.path),
      anchor: geometry.position(seed.wireId ? project.wires.find(wire => wire.id === seed.wireId).from : seed),
      label: `Connected net · ${traced.endpoints.size} contacts`, net: true };
  }
  const strip = component.internalConnections.find(ids => ids.includes(seed.pinId));
  if (!strip) return null;
  const pins = new Map(component.pins.map(pin => [pin.id, pin]));
  const covered = geometry.parts.get(part.id)?.covered ?? new Set();
  const endpoints = strip.filter(pinId => !covered.has(pinId)).map(pinId => ({ partId: part.id, pinId }));
  for (const mounted of project.parts) if (mounted.attachment?.hostPartId === part.id) {
    for (const contact of mounted.attachment.contacts) if (strip.includes(contact.hostPinId)) {
      endpoints.push({ partId: mounted.id, pinId: contact.pinId });
    }
  }
  const unique = new Map(endpoints.map(endpoint => [endpointKey(endpoint), endpoint]));
  const used = breadboardOccupancy(project, part.id).get(seed.pinId);
  const status = used?.parts.length ? 'Occupied by a part' : used?.wires.length ? 'Wired hole' : 'Free hole';
  return { points: [...unique.values()].map(geometry.position), paths: [], anchor: geometry.position(seed), net: false,
    label: `${pins.get(seed.pinId).label} · ${pins.get(strip[0]).label}–${pins.get(strip.at(-1)).label} · ${status}` };
}

export class BreadboardFeedback {
  constructor({ svg, before, scope, getState }) {
    this.svg = svg;
    this.getState = getState;
    this.node = group(svg);
    this.node.setAttribute('class', 'breadboard-feedback');
    this.node.setAttribute('aria-hidden', 'true');
    this.node.setAttribute('pointer-events', 'none');
    svg.insertBefore(this.node, before);
    scope.cleanup(() => { this.destroyed = true; this.seed = null; this.node.remove(); });
  }

  show(seed, options) {
    if (this.destroyed) return;
    this.seed = seed;
    this.options = options;
    this.render();
  }

  render() {
    if (this.destroyed) return;
    const { project, geometry, scale } = this.getState();
    const feedback = breadboardFeedback(project, geometry, this.seed, this.options);
    let markup = '';
    if (feedback) {
      const color = feedback.net ? '#6b38d5' : '#087a6f';
      markup += feedback.paths.map(path => `<path d="${path}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`).join('');
      markup += feedback.points.map(({ x, y }) => `<circle cx="${x}" cy="${y}" r="${5 / scale}" fill="${color}" fill-opacity=".22" stroke="${color}" stroke-width="1.5" vector-effect="non-scaling-stroke"/>`).join('');
      const { x, y } = feedback.anchor;
      const width = (feedback.label.length * 5.8 + 14) / scale;
      const frame = this.svg.viewBox?.baseVal;
      const labelX = frame?.width ? Math.max(frame.x + 8 / scale, Math.min(x + 10 / scale, frame.x + frame.width - width - 8 / scale)) : x + 10 / scale;
      const labelY = frame?.height ? Math.max(frame.y + 8 / scale, Math.min(y - 24 / scale, frame.y + frame.height - 28 / scale)) : y - 24 / scale;
      markup += `<g transform="translate(${labelX} ${labelY})"><rect width="${width}" height="${20 / scale}" rx="${4 / scale}" fill="#fff" stroke="${color}" stroke-width=".8" vector-effect="non-scaling-stroke"/><text x="${7 / scale}" y="${14 / scale}" font-family="Arial, sans-serif" font-size="${11 / scale}" fill="${color}">${escapeText(feedback.label)}</text></g>`;
    }
    if (this.markup !== markup) { this.node.innerHTML = markup; this.markup = markup; }
  }
}
