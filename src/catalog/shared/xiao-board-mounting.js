import { circle, rect } from './svg.js';
import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';
import { headerPostOverlay } from './header-post-overlay.js';

// Seeed's 14 full through-holes are distinct from its wider castellated/SMD
// carrier lands. The exact manufacturer hole centers are ±7.62 mm, not the
// centers of those asymmetric outer SMD lands.
export function xiaoBoardMounting(component, { source, centerX, top, unitsPerMm,
  frontArtwork, castellations, auxiliaryContacts, usbRegion, drillContacts, assemblyNote = '',
  drillDiameterMm = .85, copperDiameterMm = 1.4 }) {
  const contacts = component.pins.filter(pin => Number(pin.number) >= 1 && Number(pin.number) <= 14)
    .map(pin => {
      const number = Number(pin.number), left = number <= 7;
      return { pinId: pin.id, x: left ? -7.62 : 7.62,
        y: -7.62 + (left ? number - 1 : 14 - number) * 2.54 };
    });
  if (contacts.length !== 14) throw new Error(`${component.id} must retain all fourteen reviewed XIAO header contacts.`);
  const primary = new Map(contacts.map(contact => [contact.pinId, contact]));
  const auxiliary = new Map(auxiliaryContacts.map(contact => [contact.pinId, contact]));
  const origin = { x: centerX, y: top + 10.5 * unitsPerMm };
  const viewPins = component.pins.map(pin => {
    const contact = primary.get(pin.id) ?? auxiliary.get(pin.id);
    if (!contact) throw new Error(`${component.id}/${pin.id} lacks a reviewed physical view coordinate.`);
    return { pinId: pin.id, x: origin.x + contact.x * unitsPerMm,
      y: origin.y + contact.y * unitsPerMm, face: primary.has(pin.id) ? 'front' : 'rear' };
  });
  const pcb = { x: centerX - 8.9 * unitsPerMm, y: top, width: 17.8 * unitsPerMm, height: 21 * unitsPerMm };
  const bodyRegions = [pcb, usbRegion];
  const material = [...bodyRegions, ...viewPins.map(pin => ({ x: pin.x - 3.5, y: pin.y - 6,
    width: pin.face === 'rear' ? 11 : 7, height: 10 }))];
  const x = Math.min(...material.map(region => region.x)), y = Math.min(...material.map(region => region.y));
  const bounds = { x, y, width: Math.max(...material.map(region => region.x + region.width)) - x,
    height: Math.max(...material.map(region => region.y + region.height)) - y };
  return reviewedBoardMounting({ source, contacts, bodyRegions,
    bodyEvidence: "The XIAO component-side PCB and USB shell use the source-scaled original body artwork. Main through-hole centers follow the board PCB drill map independently of native SMD/castellated carrier lands. Rear/extra pads are visibly marked B and do not reserve another board.",
    note: `Install both complete seven-pin male rows through the fourteen full holes, 15.24 mm apart at 2.54 mm pitch. Do not treat the outer castellated/SMD land centers or the additional Plus/underside pads as downward insertion leads. Dashed B marks identify projected rear contacts. ${assemblyNote}`.trim(),
    calibration: { origin, unitsPerMm }, viewBounds: bounds,
    view: { id: 'breadboard', pins: viewPins,
      note: "Explicit manufacturer through-hole mounting view. Only this newly selected view moves anchors from the published outer SMD-land reference to the actual full header holes. Original pin IDs, default artwork, native carrier coordinates and unmounted saved projects remain unchanged." },
    renderMounted: part => frontArtwork() + castellations.map(pin => rect(pin.x - 3, pin.y - 3, 6, 6, 1, '#d3ad66', '#eed59b')).join('') +
      contacts.map(pin => { const drill = drillContacts?.find(contact => contact.pinId === pin.pinId) ?? pin;
        const x = origin.x + drill.x * unitsPerMm, y = origin.y + drill.y * unitsPerMm;
        return `<g data-contact="${pin.pinId}"><title>PCB through-hole; installed post center is shown as a square.</title>` +
          circle(x, y, copperDiameterMm / 2 * unitsPerMm, '#d3ad66', '#eed59b') + circle(x, y, drillDiameterMm / 2 * unitsPerMm, '#28372f') + '</g>'; }).join('') +
      headerPostOverlay(viewPins.filter(pin => pin.face === 'front'), unitsPerMm) +
      rearContactOverlay(viewPins.map(point => ({ ...component.pins.find(pin => pin.id === point.pinId), ...point }))),
  });
}
