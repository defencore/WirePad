import { clippedFrontArtwork, reviewedBoardMounting } from './reviewed-board-mounting.js';
import { rearContactOverlay } from './rear-contact-overlay.js';

const scale = 7, front = { x: 64, y: 24 }, width = 25.36, height = 41;

function boardRegions() {
  const radius = 4.5;
  const rectangles = [{ x: 0, y: radius, width, height: height - 2 * radius },
    { x: radius, y: 0, width: width - 2 * radius, height }];
  // Additional cuts keep the source header lattice inside the rounded corners.
  const cuts = [...Array.from({ length: 13 }, (_, index) => radius * index / 12), 1.44, 3.98].sort((a, b) => a - b);
  for (let index = 0; index < cuts.length - 1; index++) {
    const y = cuts[index], h = cuts[index + 1] - y;
    const inset = radius - Math.sqrt(radius * radius - (radius - y) ** 2);
    for (const top of [y, height - y - h]) rectangles.push({ x: inset, y: top, width: width - 2 * inset, height: h });
  }
  return rectangles.map(r => ({ x: front.x + r.x * scale, y: front.y + r.y * scale,
    width: r.width * scale, height: r.height * scale }));
}

export function modulinoMounting(entry) {
  const component = entry.component;
  const pins = component.pins.map(pin => ({ pinId: pin.id,
    x: front.x + pin.nativeY * scale, y: front.y + pin.nativeX * scale,
    face: pin.view === 'rear' ? 'rear' : 'front',
    description: `${pin.description}${pin.view === 'rear' ? ' Source bottom fixture pad projected through the PCB.' : ''}` }));
  const contacts = component.pins.filter(pin => /^J[34]\./.test(pin.number)).map(pin => ({
    pinId: pin.id, x: pin.nativeY - width / 2, y: pin.nativeX - height / 2,
  }));
  const bodyRegions = boardRegions(), bounds = { x: front.x, y: front.y, width: width * scale, height: height * scale };
  const clip = `modulino-physical-${component.id}`;
  return reviewedBoardMounting({
    source: { label: `${component.name} V0.3 manufacturer Altium/Gerber/drill archive`, url: entry.model.url },
    contacts, bodyRegions, viewBounds: { x: bounds.x - .6, y: bounds.y - .6,
      width: bounds.width + 1.2, height: bounds.height + 1.2 },
    calibration: { origin: { x: front.x + width * scale / 2, y: front.y + height * scale / 2 }, unitsPerMm: scale },
    bodyEvidence: 'Arduino V0.3 CAD and 1 mm plated NC-drill contacts confirm complete J3/J4 rows at 2.54 mm pitch, 22.86 mm apart, with a 7.62 mm longitudinal offset. Native millimeter coordinates establish the 25.36 × 41 mm PCB envelope; the manufacturing outline uses 4.5 mm corner arcs. The fitted drawing is clipped to that contour. Controls and small hardware remain representative. Qwiic solder tails and all fifteen bottom fixture pads retain their IDs.',
    note: 'Install all ten J3 and all four J4 contacts as straight downward male headers. Qwiic sockets remain cable interfaces; the fifteen rear fixture pads are not inserted leads.',
    view: { id: 'breadboard', pins,
      note: 'Explicit component-side view from the manufacturer native contact coordinates. Rear fixture pads are projected with dashed B markers; the original separate rear illustration and old scale-only instances remain unchanged.' },
    renderMounted: () => `<defs><clipPath id="${clip}" clipPathUnits="userSpaceOnUse"><rect x="${bounds.x}" y="${bounds.y}" width="${bounds.width}" height="${bounds.height}" rx="${4.5 * scale}"/></clipPath></defs><g clip-path="url(#${clip})">` +
      clippedFrontArtwork(entry.render, component, bounds) + '</g>' +
      rearContactOverlay(pins.filter(pin => pin.face === 'rear').map(pin => ({
        ...component.pins.find(original => original.id === pin.pinId), ...pin,
      })), { radius: 3.5, labelSize: 4.5 }),
  });
}
