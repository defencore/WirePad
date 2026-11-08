import { reviewedBoardMounting, clippedFrontArtwork } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';
import { headerPostOverlay } from './header-post-overlay.js';

// Each caller names the actual manufacturer header connectors and protruding
// package rectangles. This does not infer insertion from an export footprint.
export function cadBoardMounting(board, entry, { connectors, pinIds, overhangs, note, source, bodyEvidence, installedContacts }) {
  const unitsPerMm = Math.min(9, 650 / Math.max(...board.view)), origin = { x: 20, y: 20 };
  const point = contact => ({ x: origin.x + contact.x * unitsPerMm, y: origin.y + contact.y * unitsPerMm });
  const region = ([x, y, width, height]) => ({ ...point({ x, y }), width: width * unitsPerMm, height: height * unitsPerMm });
  const bodyRegions = [[0, 0, ...board.body], ...overhangs].map(region);
  const x = Math.min(...bodyRegions.map(r => r.x)), y = Math.min(...bodyRegions.map(r => r.y));
  const viewBounds = { x, y, width: Math.max(...bodyRegions.map(r => r.x + r.width)) - x,
    height: Math.max(...bodyRegions.map(r => r.y + r.height)) - y };
  const selected = board.contacts.filter(contact => pinIds ? pinIds.includes(contact.id) : connectors.includes(contact.connector));
  const insertion = selected.map(contact => installedContacts?.find(pin => pin.pinId === contact.id) ?? { pinId: contact.id, x: contact.x, y: contact.y });
  const installed = new Map(insertion.map(contact => [contact.pinId, contact]));
  const viewPins = board.contacts.map(contact => ({ pinId: contact.id, ...point(installed.get(contact.id) ?? contact), face: contact.back ? 'rear' : 'front' }));
  return reviewedBoardMounting({
    source: source ?? { url: board.cad.url, label: `${board.manufacturer} ${board.name} ${board.revision} manufacturer PCB CAD` },
    contacts: insertion,
    bodyRegions, viewBounds, calibration: { origin, unitsPerMm },
    bodyEvidence: bodyEvidence ?? 'PCB dimensions, named connector drills and USB/battery overhang rectangles were checked against this entry’s exact manufacturer Eagle revision. Regions match the existing CAD-derived component-side artwork; the separate underside illustration and annotation frame are omitted.',
    note: `${note} All contacts of the selected main headers are included. Other fitted cable sockets, debug pads and optional crosswise headers remain accessible in this view but are not downward insertion leads. Dashed B contacts identify projected underside pads.`,
    view: { id: 'breadboard', pins: viewPins,
      note: 'Manufacturer CAD coordinates project every original electrical contact into the component-side board, without the separate mirrored underside. Default catalog anchors and native CAD carrier data are preserved.' },
    renderMounted: component => clippedFrontArtwork(entry.art, component, viewBounds) +
      headerPostOverlay(viewPins.filter(pin => installed.has(pin.pinId)), unitsPerMm) +
      rearContactOverlay(viewPins.map(pin => ({ ...component.pins.find(contact => contact.id === pin.pinId), ...pin }))),
  });
}
