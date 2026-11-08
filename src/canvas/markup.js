import { mountingFor } from '../catalog/index.js';
import { partName } from '../model/names.js';
import { componentForPart } from '../model/part-component.js';
import { instancePins } from '../model/part-pins.js';
import { translation, partRotation, labelPosition, partOutlineLocalBounds } from '../geometry/parts.js';
import { escapeText } from '../shared/text.js';
import { resolveDrawing, foregroundParts } from './scene.js';
import { partArt, usesCompactBoardView } from './part-art.js';
import { viewForPart } from '../model/part-view.js';

const SVG_FONT = 'Arial, sans-serif';

export function wireMarkup(wire, d, editing) {
  const shape = `<path d="${d}" fill="none" stroke-linecap="round" stroke-linejoin="round"`;
  const hit = editing
    ? `${shape} stroke="transparent" stroke-width="12" vector-effect="non-scaling-stroke" class="wire-hit" data-wire="${wire.id}" role="button" aria-label="Wire segment" tabindex="0"/>`
    : '';
  return `${shape} stroke="#ffffff" stroke-width="5.7"/>${shape} stroke="${wire.color}" stroke-width="3.1"/>${hit}`;
}

export function partMarkup(part, component, wired, editing, { bodyOnly = false, contactsOnly = false, covered = new Set() } = {}) {
  const profile = mountingFor(component.id);
  const mountedBoard = usesCompactBoardView(part, component);
  const bodyBounds = partOutlineLocalBounds(part, component);
  const name = partName(part, component);
  const compact = profile?.type === 'breadboard-part' && Boolean(part.leads || part.attachment);
  const defaultLabel = component.defaultValue && `${component.shortName ?? component.name} · ${component.defaultValue}`;
  const custom = part.label && part.label !== defaultLabel;
  const hideCaption = (mountedBoard || profile?.type === 'breadboard') && !custom;
  const caption = compact && !custom
    ? component.defaultValue ? `${component.referencePrefix ?? ''} · ${component.defaultValue}` : component.shortName ?? component.name
    : name;
  const text = escapeText(caption);
  const labelWidth = Math.max(compact ? 36 : 54, caption.length * (compact ? 6 : 7) + (compact ? 12 : 16));
  const pins = bodyOnly ? '' : instancePins(part, component).map(pin => {
    const connected = wired.has(pin.id);
    const rear = Boolean(viewForPart(part) && pin.face === 'rear');
    if (!editing) {
      if (covered.has(pin.id)) return '';
      return connected
        ? `<circle cx="${pin.x}" cy="${pin.y}" r="3" fill="#087a6f" stroke="${rear ? '#a43683' : '#fff'}" stroke-width=".9"${rear ? ' stroke-dasharray="1.5 1"' : ''}/>`
        : '';
    }
    const label = escapeText(`${name} · ${pin.label} — ${pin.description}`);
    return `<g class="canvas-pin" data-pin="${pin.id}" data-part="${part.id}"${rear ? ' data-contact-face="rear"' : ''} role="button" tabindex="0" aria-label="${label}">
      <title>${label}</title>
      <circle cx="${pin.x}" cy="${pin.y}" r="8" fill="transparent"/>
      <circle class="pin-highlight" cx="${pin.x}" cy="${pin.y}" r="6" fill="#aeeadf" stroke="#087a6f" stroke-width="1"/>
      <circle cx="${pin.x}" cy="${pin.y}" r="${connected ? 3.3 : 2.55}" fill="${connected ? '#087a6f' : rear ? '#fff2fc' : '#fffbeb'}" stroke="${rear ? '#a43683' : connected ? '#ffffff' : '#967543'}" stroke-width=".9"${rear ? ' stroke-dasharray="1.5 1"' : ''}/>
    </g>`;
  }).join('');
  const body = contactsOnly ? '' : editing
    ? `<g class="part-body" data-part="${part.id}" data-part-region="body" role="button" tabindex="0" aria-label="Select ${escapeText(name)}">
        <rect class="part-focus" x="${bodyBounds.x - 1.5}" y="${bodyBounds.y - 1.5}" width="${bodyBounds.width + 3}" height="${bodyBounds.height + 3}" rx="5" fill="transparent" stroke="transparent" stroke-width="1.3" stroke-dasharray="4 4"/>
        ${partArt(part, component)}
      </g>`
    : partArt(part, component);
  const graphic = `<g transform="${partRotation(part, component)}">${body}${pins}</g>`;
  if (bodyOnly) return graphic;
  return `${graphic}
    <g transform="${labelPosition(part, component)}" font-family="${SVG_FONT}"${hideCaption ? ' display="none" aria-hidden="true"' : ''} ${editing ? `data-part="${part.id}" data-part-region="caption" class="part-body${compact || mountedBoard ? ' breadboard-part-caption' : ''}"` : ''}>
      <rect x="${-labelWidth / 2}" width="${labelWidth}" height="${compact ? 18 : 21}" rx="5" fill="#ffffff" stroke="#dce5e8"/>
      <text text-anchor="middle" y="${compact ? 12 : 14}" fill="#24313d" font-size="${compact ? 10 : 11}" font-weight="700">${text}</text>
    </g>`;
}

export function junctionDot({ x, y }) {
  return `<circle cx="${x}" cy="${y}" r="4.6" fill="#18232d" stroke="#fff" stroke-width="1.2"/>`;
}

export function traceMarkup(net, geometry) {
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
  const backgrounds = [];
  const partShapes = [];
  for (const { part, connected, covered } of foregroundParts(parts).values()) {
    const component = componentForPart(part);
    const transform = `transform="${translation(part.x, part.y)}"`;
    const onBoardContacts = part.leads || viewForPart(part) || component.surface || component.contactLayout === 'physical';
    if (onBoardContacts) backgrounds.push(`<g ${transform}>${partMarkup(part, component, connected, false, { bodyOnly: true, covered })}</g>`);
    partShapes.push(`<g ${transform}>${partMarkup(part, component, connected, false, { contactsOnly: onBoardContacts, covered })}</g>`);
  }
  return backgrounds.join('') + wireShapes.join('') + branches + partShapes.join('') + [...junctions.values()].map(junctionDot).join('');
}
