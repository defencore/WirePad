import facts from '../data/mounting-followup/mikroe-legacy.js';
import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { circle, label, path, rect } from './svg.js';

const scale = 7, origin = { x: 116.9, y: 118.0125 };
const region = (x, y, width, height) => ({ x, y, width, height });
const project = value => ({ x: origin.x + value.x * scale, y: origin.y + value.y * scale,
  width: value.width * scale, height: value.height * scale });

export function legacyClickMounting(entry, specification) {
  const source = facts[specification.sku];
  if (!source) throw new Error(`Missing reviewed Click source ${specification.sku}.`);
  const contacts = entry.component.pins.map(pin => {
    const number = Number(pin.number), index = number <= 8 ? number - 1 : 16 - number;
    return { pinId: pin.id, x: number <= 8 ? -11.43 : 11.43, y: -7.3025 + index * 2.54 };
  });
  const contour = [...source.board.outline.matchAll(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g)]
    .map(match => ({ x: Number(match[1]) + source.center[0] - 11.43,
      y: Number(match[2]) + 10.4775 - source.center[1] }));
  const left = Math.min(...contour.map(point => point.x)), right = Math.max(...contour.map(point => point.x));
  const top = Math.min(...contour.map(point => point.y)), bottom = Math.max(...contour.map(point => point.y));
  const notchTop = bottom - 2.54;
  const regions = specification.button
    ? [region(left, -10.4775, right - left, notchTop + 10.4775),
      region(-5.715, top, 11.43, -10.4775 - top),
      region(-6.985, -13.0175, 13.97, 2.54)]
    : [region(left, top, right - left, notchTop - top)];
  regions.push(region(left, notchTop, right - left - 2.54, 2.54));
  for (let index = 0; index < 8; index++) {
    const y = notchTop + index * 2.54 / 8, height = 2.54 / 8;
    regions.push(region(left, y, right - left - (index + 1) * height, height));
  }
  const bodyRegions = regions.map(project);
  const pins = contacts.map(contact => ({ pinId: contact.pinId,
    x: origin.x + contact.x * scale, y: origin.y + contact.y * scale, face: 'front' }));
  const dx = (source.center[0] - 11.43) * scale, dy = (10.4775 - source.center[1]) * scale;
  const viewBounds = { x: origin.x + left * scale - .7, y: origin.y + top * scale - .7,
    width: (right - left) * scale + 1.4, height: (bottom - top) * scale + 1.4 };
  return reviewedBoardMounting({ source: source.source, contacts, bodyRegions, viewBounds,
    calibration: { origin, unitsPerMm: scale },
    bodyEvidence: `${source.note} The lower-right orientation notch is excluded from the material mask. The Button R upper shoulders use conservative source-contour regions; no annotation margin or decorative shadow reserves a socket.`,
    note: 'Populate both complete eight-contact mikroBUS strips with straight downward male headers, including the printed NC terminals.',
    view: { id: 'breadboard', pins, note: source.note },
    renderMounted: () => `<g transform="translate(${origin.x + dx} ${origin.y + dy}) scale(${scale})">` +
      path(source.board.outline, '#318956', '#92b18a', .08) + '</g>' +
      specification.draw() + label(117, 207, specification.short, 9, '#f5f3d4') +
      rect(75, 173, 23, 10, 1, '#e4e3c9', '#bdc9bd') + rect(78, 175, 9, 6, .5, '#4b6552') +
      label(87, 187, '3.3V  5V', 5, '#f0ecce') + label(155, 185, 'PWR', 5.8, '#eae9cb') +
      rect(147, 172, 16, 9, .8, '#c9d4ad') + pins.map(pin =>
        circle(pin.x, pin.y, 6.3, '#d5c998', '#e2dcaa') + circle(pin.x, pin.y, 3.5, '#233a30')).join(''),
  });
}
