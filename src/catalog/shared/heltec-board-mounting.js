import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { circle, label, line, path, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';

const resources = 'https://resource.heltec.cn/download/';
const units = 10, origin = { x: 147, y: 65 };
const v4Outline = [
  [-10.541, -3.429], [-5.271, -3.429], [-4, -2.159], [4, -2.159],
  [5.271, -3.429], [10.541, -3.429], [12.7, -1.27], [12.7, 44.45],
  [8.89, 44.45], [5.08, 48.26], [-5.08, 48.26], [-8.89, 44.45],
  [-12.7, 44.45], [-12.7, -1.27],
];
const v3Outline = [
  [-12.75, -1.4], [-12.75, 45.2], [-7.75, 45.2], [-5, 47.5],
  [5, 47.5], [7.75, 45.2], [12.75, 45.2], [12.75, -1.4],
  [10.467817362238, -2.7], [5.467817362238, -2.7], [4, -1.4],
  [0, -1.355388724234], [-4, -1.4], [-5.467817362238, -2.7],
  [-10.467817362238, -2.7],
];
const v4Usb = { x: -5.669870605288, y: -4.400342416963,
  width: 11.340000086456, height: 7.597699162227 };
const v3Usb = { x: -4.5, y: -3.355388724234, width: 9, height: 7.3 };
const v4Coax = { x: -1.499955421026, y: 45.300862911552,
  width: 3.000000100145, height: 3.100000033382 };
const sources = {
  'heltec-v3': { label: 'Heltec V3 straight-header assembly and manufacturer V3/V4 pin compatibility',
    url: 'https://heltec.org/project/wifi-lora-32-v3/',
    schematic: resources + 'WiFi_LoRa_32_V3/WiFi_LoRa_32_V3.2_Schematic_Diagram.pdf' },
  'heltec-v4': { label: 'Heltec WiFi LoRa 32 V4.2.0 datasheet, mechanical drawing page 16',
    url: resources + 'WiFi_LoRa_32_V4/datasheet/WiFi_LoRa_32_V4.2.0.pdf',
    schematic: resources + 'WiFi_LoRa_32_V4/Schematic/WiFi_LoRa_32_V4.2.pdf' },
  'heltec-v4-3-r2': { label: 'Heltec WiFi LoRa 32 V4.3.1 datasheet, mechanical drawing page 15',
    url: resources + 'WiFi_LoRa_32_V4/datasheet/WiFi_LoRa_32_V4.3.1_Datasheet.pdf',
    schematic: resources + 'WiFi_LoRa_32_V4/Schematic/HTIT-WB32LAF_V4.3.pdf' },
  'heltec-v4-3-r8': { label: 'Heltec WiFi LoRa 32 V4-R8 datasheet, mechanical drawing page 15',
    url: resources + 'WiFi_LoRa_32_V4-R8/datasheet/WiFi_LoRa_32_V4R8.pdf',
    schematic: resources + 'WiFi_LoRa_32_V4-R8/Schematic/HTIT-WBR8H_V4.3.2.pdf' },
};
const project = point => ({ x: origin.x + point.x * units, y: origin.y + point.y * units });
const projectRegion = region => ({ ...project(region), width: region.width * units, height: region.height * units });
const rectangle = (x, y, width, height) => ({ x, y, width, height });

// Inscribed bands follow sloped PCB edges without claiming the empty corners.
// Main header holes retain a single full-height material region for labeling.
function taperedRegions(start, end, outerAt, innerAt = () => 0, count = 4) {
  return Array.from({ length: count }, (_, index) => {
    const top = start + (end - start) * index / count;
    const bottom = start + (end - start) * (index + 1) / count;
    const outer = Math.min(outerAt(top), outerAt(bottom));
    const inner = Math.max(innerAt(top), innerAt(bottom));
    return inner > 0 ? [rectangle(-outer, top, outer - inner, bottom - top),
      rectangle(inner, top, outer - inner, bottom - top)]
      : [rectangle(-outer, top, outer * 2, bottom - top)];
  }).flat();
}

function materialRegions(v3) {
  if (v3) return [rectangle(-12.75, -1.4, 25.5, 46.6),
    ...taperedRegions(-2.7, -1.4, y => 10.467817362238 + (y + 2.7) / 1.3 * 2.282182637762,
      y => 5.467817362238 - (y + 2.7) / 1.3 * 1.467817362238),
    rectangle(-5, 45.2, 10, 2.3),
    ...taperedRegions(45.2, 47.5, y => 7.75 - (y - 45.2) / 2.3 * 2.75, undefined, 8),
    v3Usb];
  return [rectangle(-12.7, -1.27, 25.4, 45.72),
    ...taperedRegions(-3.429, -2.159, y => 10.541 + (y + 3.429),
      y => 4 + (-2.159 - y) / 1.27 * 1.271),
    ...taperedRegions(-2.159, -1.27, y => 10.541 + (y + 3.429)),
    rectangle(-5.08, 44.45, 10.16, 3.81),
    rectangle(-6.35, 44.45, 12.7, 2.54),
    ...taperedRegions(44.45, 48.26, y => 8.89 - (y - 44.45), undefined, 8),
    v4Usb, v4Coax];
}

function physicalPins(component, v3) {
  const auxiliaryX = { X1: -5.88602074, X2: -3.34602074, X3: 3.302, X4: 5.842 };
  return component.pins.map(pin => {
    const main = /^J([23])\.(\d+)$/.exec(pin.number);
    if (main) return { pinId: pin.id, x: main[1] === '2' ? -11.43 : 11.43,
      y: (Number(main[2]) - 1) * 2.54, face: 'front',
      description: `${pin.description} Straight downward male header on the manufacturer nominal 2.54 mm assembly grid.` };
    if (v3 || auxiliaryX[pin.number] === undefined) throw new Error(`Unreviewed Heltec contact ${pin.id}.`);
    return { pinId: pin.id, x: auxiliaryX[pin.number], y: 45.72, face: 'front',
      edge: auxiliaryX[pin.number] < 0 ? 'left' : 'right',
      description: `${pin.description} Optional front through-hole contact. Leave its auxiliary header unpopulated or upward; this is not a downward breadboard lead. Auxiliary positions follow the manufacturer V4.3.1 family CAD reference.` };
  });
}

function usbArtwork(bounds) {
  return rect(bounds.x, bounds.y, bounds.width, bounds.height, .45, '#b8bfc1', '#7e898b') +
    rect(bounds.x + .5, bounds.y + .2, bounds.width - 1, .9, .25, '#33434a', '#d6dfdc') +
    line(bounds.x + .7, bounds.y + 1.4, bounds.x + bounds.width - .7, bounds.y + 1.4, '#eef1e8', .12) +
    rect(-2.6, bounds.y + bounds.height - 1.1, 5.2, .8, .1, '#394648');
}

function screwArtwork(x, y) {
  return circle(x, y, 1.18, '#4b504c', '#222c2b') + circle(x, y, .72, '#bbc4bf', '#e1e7df') +
    line(x - .4, y, x + .4, y, '#53605e', .15);
}

// Contact centers and PCB/USB envelopes are sourced. The small fitted passives,
// OLED hardware and screws remain a representative component-side illustration.
function hardwareArtwork(v3, bounds) {
  const color = v3 ? '#e0e1dd' : '#303532';
  let art = path('M' + (v3 ? v3Outline : v4Outline).map(point => point.join(' ')).join('L') + 'Z',
    color, v3 ? '#9ba7a4' : '#5b6962', .08) + usbArtwork(bounds);
  for (const x of [-8, 8]) art += rect(x - 1.6, -2.25, 3.2, 4.6, .4, '#bac4c1', '#778582') +
    circle(x, .1, .95, v3 ? '#273332' : '#ebe5c7', '#68766b') +
    label(x, 3.2, x < 0 ? 'RST' : 'PRG', .72, v3 ? '#374b48' : '#e6e9df');
  for (const [x, y, w, h] of [[-9.3, 4.5, 1.6, .8], [-6.8, 4.8, 1.2, .6],
    [3.3, 4.5, 1.3, .65], [7.1, 5.4, 1.5, .65], [-4.3, 7.1, 2, 1.8],
    [4.7, 7.4, 2, 1.7], [-8.9, 7.8, 1.4, .7]]) art += rect(x, y, w, h, .1, '#b4a884', '#83978c');
  const top = v3 ? 10.5 : 10.2, height = v3 ? 33.2 : 33.5;
  art += rect(-8.6, top, 17.2, height, .5, v3 ? '#c4cdca' : '#1d2421', '#75817a') +
    rect(-7.9, top + .6, 15.8, height - 1.2, .3, v3 ? '#e0e5de' : '#2b322e', '#505f56') +
    rect(-5.7, top + 5.7, 11.4, 22, .35, '#101815', '#47574d') +
    rect(-5.35, top + 6.1, 10.7, 21.2, .2, '#080e0b') +
    `<g transform="translate(0 ${top + 16.7}) rotate(-90)">${label(0, 0, 'HELTEC', 2.05, '#2b3830')}</g>`;
  for (const x of [-6.9, 6.9]) for (const y of [top + 1.8, top + height - 1.8]) art += screwArtwork(x, y);
  if (!v3) art += rect(-3.55, 46.99, 1, .5, .05, '#777e68') + rect(2.55, 46.99, 1, .5, .05, '#777e68');
  const coax = v3 ? { x: 0, y: 46 } : { x: .0000446, y: 46.850863 };
  const coaxBody = v3 ? rectangle(-1.5, 44.55, 3, 2.9) : v4Coax;
  art += rect(coaxBody.x, coaxBody.y, coaxBody.width, coaxBody.height, .2, '#d5d0b7', '#8f876b') +
    circle(coax.x, coax.y, 1.15, '#cba85b', '#e9d397') + circle(coax.x, coax.y, .7, '#ede8d3') +
    circle(coax.x, coax.y, .25, '#9a7733');
  return art;
}

export function heltecMounting(component) {
  const reference = sources[component.id];
  if (!reference) return undefined;
  const v3 = component.id === 'heltec-v3', millimetrePins = physicalPins(component, v3);
  const leads = millimetrePins.filter(pin => /^J[23]\./.test(component.pins.find(original => original.id === pin.pinId).number))
    .map(({ pinId, x, y }) => ({ pinId, x, y }));
  const bodyRegions = materialRegions(v3).map(projectRegion), pins = millimetrePins.map(pin => ({ ...pin, ...project(pin) }));
  const left = Math.min(...bodyRegions.map(region => region.x)), top = Math.min(...bodyRegions.map(region => region.y));
  const right = Math.max(...bodyRegions.map(region => region.x + region.width)), bottom = Math.max(...bodyRegions.map(region => region.y + region.height));
  const note = v3
    ? 'The nominal 22.86 mm straight-header assembly follows Heltec\'s unchanged V3 pin layout and explicit V3/V4 form/pin compatibility, corroborated by the current V3 PCB STEP. The historic V3.2 mechanical DWG supplies the 25.5 × 50.2 mm outline; its incidental 23.025 mm illustrated row gap is not used as production drill evidence.'
    : 'Manufacturer revision-specific datasheet drawings dimension two 18-contact 2.54 mm rows, 22.86 mm apart. V4.2 and V4.3.1 share the same published mechanical drawing; the R8 datasheet independently specifies that complete header pattern. Auxiliary-hole positions and USB/PCB silhouette use the V4.3.1 family STEP mechanical reference.';
  return reviewedBoardMounting({ source: { label: reference.label, url: reference.url }, contacts: leads,
    bodyRegions, viewBounds: { x: left - .6, y: top - .6, width: right - left + 1.2, height: bottom - top + 1.2 },
    calibration: { origin, unitsPerMm: units },
    bodyEvidence: `${note} Sloped PCB edges are represented by inscribed material bands for socket masking; USB and projecting coax material are separate. OLED hardware and small passives remain representative. Default artwork and native assets are unchanged.`,
    note: 'Populate both complete 18-pin edge rows. ' + (v3 ? '' : 'Leave all four optional auxiliary headers unpopulated or upward. ') +
      (v3 ? 'USB, battery and antenna interfaces retain their normal cable connections.'
        : 'USB, battery, solar, GNSS and antenna interfaces retain their normal cable connections.'),
    view: { id: 'breadboard', pins, note,
      connections: [['gnd', 'gnd-2'], ['3v3', '3v3-2'], ['ve', 've-2']],
      connectionSource: { label: `${component.name} manufacturer schematic: repeated ground, 3.3 V and Vext header nets`, url: reference.schematic } },
    renderMounted: () => `<g transform="translate(${origin.x} ${origin.y}) scale(${units})" stroke-width=".08">` +
      hardwareArtwork(v3, v3 ? v3Usb : v4Usb) + millimetrePins.map(pin => {
        const original = component.pins.find(original => original.id === pin.pinId);
        return `<g data-contact="${escapeText(pin.pinId)}"><title>${escapeText(`${original.number} — ${original.label}: ${pin.description}`)}</title>` +
          circle(pin.x, pin.y, .84, v3 ? '#b5bdb8' : '#d9b664', '#897c52') +
          circle(pin.x, pin.y, .45, '#24352e') + '</g>';
      }).join('') + '</g>',
  });
}
