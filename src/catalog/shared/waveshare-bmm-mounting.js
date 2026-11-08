import { reviewedBoardMounting } from './reviewed-board-mounting.js';
import { circle, label, line, rect } from './svg.js';
import { escapeText } from '../../shared/text.js';

const order = ['dry', 'cs', 'scl', 'sda', 'sdo', 'gnd', 'vcc'];
const bounds = { left: -2.02775566, right: 26.98614364, bottom: -1.9003518, top: 18.11366202 };
const center = { x: (bounds.left + bounds.right) / 2, y: (bounds.bottom + bounds.top) / 2 };
const width = bounds.right - bounds.left, height = bounds.top - bounds.bottom;
const units = 10, origin = { x: 20 + width * units / 2, y: 20 + height * units / 2 };
const point = (x, y) => ({ x: origin.x + x * units, y: origin.y + y * units });
const source = { label: 'Waveshare BMM150 SKU 24657 manufacturer STEP and header drawing',
  url: 'https://files.waveshare.com/wiki/BMM150-3-Axis-Magnetometer-Sensor/BMM150%203-Axis%20Magnetometer%20Sensor.step' };

export function waveshareBmmMounting(component) {
  const contacts = order.map((pinId, index) => ({ pinId,
    x: 3.175 + index * 2.54 - center.x, y: center.y + .45709586 }));
  const pins = component.pins.map(pin => {
    const contact = contacts.find(contact => contact.pinId === pin.id);
    const local = contact ?? { x: 18.34596118 - center.x, y: center.y - 12.14231362 };
    return { pinId: pin.id, ...point(local.x, local.y), face: 'front',
      number: contact ? `H2.${order.indexOf(pin.id) + 1}` : 'H1.1',
      edge: contact ? 'bottom' : 'right',
      description: `${pin.description} ${contact
        ? 'Physical H2 through-hole header position; duplicate I²C/cable contacts share this existing signal ID.'
        : 'Physical INT contact at the fitted five-contact 2 mm cable socket; not an inserted lead.'}` };
  });
  const body = { x: 20, y: 20, width: width * units, height: height * units };
  const radius = 1.25 * units;
  const bodyRegions = [{ x: body.x, y: body.y + radius, width: body.width, height: body.height - 2 * radius },
    { x: body.x + radius, y: body.y, width: body.width - 2 * radius, height: body.height }];
  for (let index = 0; index < 8; index++) {
    const y = radius * index / 8, height = radius / 8;
    const inset = radius - Math.sqrt(radius * radius - (radius - y) ** 2);
    for (const top of [body.y + y, body.y + body.height - y - height]) {
      bodyRegions.push({ x: body.x + inset, y: top, width: body.width - 2 * inset, height });
    }
  }
  const bodyEvidence = 'The manufacturer STEP supplies seven complete H2 drill centers at X=3.175+i×2.54 mm, Y=-0.45709586 mm, and the actual PCB envelope. The 29 × 20 mm manufacturer drawing independently confirms the outline. Existing signal IDs intentionally group duplicate H1/I²C and H2/SPI terminals; H2 carries every inserted signal, while INT remains on its normal cable interface. The fitted illustration retains the source-side orientation; small hardware is representative.';
  return reviewedBoardMounting({ source, contacts, bodyRegions,
    viewBounds: { x: body.x - .6, y: body.y - .6, width: body.width + 1.2, height: body.height + 1.2 },
    calibration: { origin, unitsPerMm: units }, bodyEvidence,
    note: 'Install the full seven-contact H2 bank as straight downward male headers. Leave the parallel four-contact I²C header unpopulated or upward. INT uses the fitted cable socket. Select the I²C/SPI solder strap for the intended interface.',
    view: { id: 'breadboard', pins, note: bodyEvidence },
    renderMounted: () => `<g transform="translate(${origin.x} ${origin.y}) scale(${units})" stroke-width=".08">` +
      rect(-width / 2, -height / 2, width, height, 1.25, '#225289', '#5787af') +
      label(0, -8.5, 'BMM150', 1.1, '#e8f0f3') + label(-6, -6.8, 'I2C / SPI', .8, '#e8f0f3') +
      rect(-9.5, -5.9, 4.5, 1.1, .1, '#162e38', '#8ba9ac') +
      rect(.8, -6.3, 2.3, 2.1, .15, '#242d31', '#a6b6aa') +
      [4.29665384, 6.83665384, 9.37665384, 11.91665384].map(y =>
        circle(-.508 - center.x, center.y - y, .9, '#d7bf7e') +
        circle(-.508 - center.x, center.y - y, .4445, '#213c4a')).join('') +
      [-5.8, .5].map(x => rect(x, 1, 2.4, 2.1, .12, '#242e33', '#95a8ab')).join('') +
      [-6, -2, 2.4].flatMap(x => [-3, -.5, 5.6].map(y => rect(x, y, 1.4, .65, .07, '#bbab89'))).join('') +
      rect(20.83 - center.x, center.y - 15.092, 6.124, 13.969, .25, '#e4ddc7', '#fbf0db') +
      rect(22 - center.x, center.y - 14.5, 2.4, 12.8, .1, '#c1af8d') +
      [4.115, 6.1225, 8.1037, 10.1103, 12.1423].map(y =>
        line(18.32 - center.x, center.y - y, 21.03 - center.x, center.y - y, '#b7b7a5', .35)).join('') +
      component.pins.map(pin => {
        const view = pins.find(point => point.pinId === pin.id), x = (view.x - origin.x) / units, y = (view.y - origin.y) / units;
        return `<g data-contact="${escapeText(pin.id)}"><title>${escapeText(`${view.number} — ${pin.label}: ${view.description}`)}</title>` +
          (pin.id === 'int' ? rect(x - .4, y - .4, .8, .8, .05, '#c8b876')
            : circle(x, y, .9, '#d7bf7e', '#e4d8b2') + circle(x, y, .45, '#233d4c')) + '</g>';
      }).join('') + '</g>',
  });
}
