import references from '../data/radio-followup/adafruit-sparkfun.js';
import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';
import { circle, path, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';

// A source review owns every coordinate in this optional physical assembly.
// The catalog component and its default/native geometry are never rewritten.
export function followupRadioMounting(component) {
  const reference = references[component.id];
  if (!reference) return undefined;
  const units = 10, origin = { x: 20 + reference.board.width * 5, y: 20 + reference.board.height * 5 };
  const direction = reference.reverse ? -1 : 1;
  const point = p => ({ x: origin.x + p.x * units * direction, y: origin.y + p.y * units });
  const rectangle = r => ({ x: origin.x + (reference.reverse ? -r.x - r.width : r.x) * units,
    y: origin.y + r.y * units, width: r.width * units, height: r.height * units });
  const contacts = reference.contacts.filter(p => p.insert).map(p => ({ pinId: p.pinId, x: p.x * direction, y: p.y }));
  const pins = reference.contacts.map(p => ({ pinId: p.pinId, ...point(p), face: p.face,
    description: p.face === 'rear'
      ? `${component.pins.find(pin => pin.id === p.pinId).description} Underside solder-tail projection beneath the fitted terminal housing; use the terminal's cable opening. This pad is not an inserted lead.`
      : component.pins.find(pin => pin.id === p.pinId).description }));
  const bodyRegions = reference.bodyRegions.map(rectangle);
  const inkRegions = [...bodyRegions, ...pins.map(p => ({ x: p.x - 9, y: p.y - 9,
    width: p.face === 'rear' ? 20 : 18, height: 18 }))];
  const left = Math.min(...inkRegions.map(r => r.x)), top = Math.min(...inkRegions.map(r => r.y));
  const viewBounds = { x: left - .8, y: top - .8,
    width: Math.max(...inkRegions.map(r => r.x + r.width)) - left + 1.6,
    height: Math.max(...inkRegions.map(r => r.y + r.height)) - top + 1.6 };
  const pad = (p, id) => {
    const size = p.size ?? [1.7, 1.7];
    const metal = ['oval', 'rect'].includes(p.shape) ? rect(p.x - size[0] / 2, p.y - size[1] / 2,
      size[0], size[1], p.shape === 'oval' ? Math.min(...size) / 2 : .08, '#c6ad6d', '#e8dab0')
      : circle(p.x, p.y, Math.min(...size) / 2, '#c6ad6d', '#e8dab0');
    return `<g${id ? ` data-contact="${escapeText(id)}"` : ''}><title>${escapeText(`${p.number}: ${p.label}`)}</title>` +
      metal + (p.drill ? circle(p.x, p.y, p.drill / 2, '#21352f') : '') + '</g>';
  };
  return reviewedBoardMounting({ source: reference.source, contacts,
    calibration: { origin, unitsPerMm: units }, bodyRegions, viewBounds,
    bodyEvidence: 'Exact manufacturer EAGLE dimension-layer outline, complete named header package and projecting source package envelopes. Small component bodies remain representative. The mounted face and connector population are explicit assembly choices; neither the old drawing frame nor a reference carrier establishes compatibility.',
    note: reference.installation,
    view: { id: 'breadboard', pins,
      note: `${reference.installation} Full original contact IDs are preserved. ${reference.reverse ? 'The opposite face is shown above the PCB, with its source coordinates mirrored in X.' : 'The component-side source coordinates establish the physical view.'}`,
      ...(reference.connections.length ? { connections: reference.connections,
        connectionSource: { label: `${component.name} manufacturer schematic nets`, url: reference.source.url.replace(/\.brd$/, '.sch') } } : {}) },
    renderMounted: () => `<g transform="translate(${origin.x} ${origin.y}) scale(${direction * units} ${units})" stroke-width=".08">` +
      path(reference.board.outline, reference.board.color, '#81998d', .12) +
      reference.holes.map(h => circle(h.x, h.y, h.drill / 2, '#edf3e9', '#9eaea1')).join('') +
      reference.artwork + reference.extraPads.map(p => pad(p)).join('') +
      reference.contacts.filter(p => p.face !== 'rear').map(p => pad(p, p.pinId)).join('') + '</g>' +
      rearContactOverlay(pins.filter(p => p.face === 'rear').map(p => ({
        ...component.pins.find(pin => pin.id === p.pinId), ...p })), { radius: 4, labelSize: 5 }),
  });
}
