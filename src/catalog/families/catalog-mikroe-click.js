import { defineFamily } from '../registry.js';
import { chip, circle, label, line, path, rect, smd } from '../shared/svg.js';

const scale = 7;
const mechanical = 'https://download.mikroe.com/documents/standards/mikrobus/mikrobus-standard-specification-v200.pdf';
const ground = ['GND', 'power_in', 'Common signal and supply ground.'];
const unused = ['NC', 'no_connect', 'Not connected on this exact Click revision.'];
const supply3 = ['3.3V', 'power_in', '3.3 V supply input; the power-selection jumper must select the intended rail.'];
const supply5 = ['5V', 'power_in', '5 V supply input; the power-selection jumper must select the intended rail.'];

function click(spec) {
  // Source DXFs use x = 0/22.86 mm, y = 0…17.78 mm for the two headers.
  // The local body origin is their source board-envelope center, with Y down.
  const contacts = Array.from({ length: 16 }, (_, index) => {
    const number = index + 1;
    const row = number <= 8 ? number - 1 : 16 - number;
    const x = number <= 8 ? -11.43 : 11.43;
    const y = 10.4775 - (17.78 - row * 2.54);
    const [caption, type, description] = spec.signals[number] ?? unused;
    return { id: `p${number}`, number: String(number), caption, type, description, x, y,
      canvasX: 116.9 + x * scale, canvasY: 118.0125 + y * scale };
  });
  const component = {
    id: spec.id, art: spec.id, name: spec.name, shortName: spec.short, manufacturer: 'MIKROE',
    category: spec.category, referencePrefix: 'U', source: spec.schematic, references: [spec.page, mechanical],
    subtitle: `${spec.sku} / ${spec.revision} / mikroBUS S`,
    description: `${spec.description} Component-side view with the bottom-right orientation notch. All sixteen mikroBUS header contacts are present, including the printed NC terminals. Header numbering follows the manufacturer pinout table: 1–8 down the left and 16–9 down the right. Small component shapes are representative.`,
    tags: ['mikroe', 'mikroelektronika', 'click', 'mikrobus', 'arduino', 'diy', 'starter kit', spec.sku.toLowerCase(), ...spec.tags],
    width: 234, height: 242, contactLayout: 'physical',
    pins: contacts.map(c => ({ id: c.id, number: c.number, label: c.caption, type: c.type,
      description: `mikroBUS ${c.number} — ${c.description}`, x: c.canvasX, y: c.canvasY,
      surface: true, edge: Number(c.number) <= 8 ? 'left' : 'right' })),
    internalConnections: [['p8', 'p9'], ...(spec.connections ?? [])],
  };
  return {
    component,
    render: (part, labels = true) => {
      const outline = spec.button
        ? 'M28 44H62Q69 44 69 37V24Q69 18 76 18H158Q165 18 165 24V37Q165 44 172 44H199Q206 44 206 51V200L188 218H28Z'
        : 'M28 18H206V200L188 218H28Z';
      return path(outline, '#318956', '#92b18a') +
        label(117, 207, spec.short, 9, '#f5f3d4') + spec.draw() +
        rect(75, 173, 23, 10, 1, '#e4e3c9', '#bdc9bd') + rect(78, 175, 9, 6, .5, '#4b6552') +
        label(87, 187, '3.3V  5V', 5, '#f0ecce') + label(155, 185, 'PWR', 5.8, '#eae9cb') +
        rect(147, 172, 16, 9, .8, '#c9d4ad') +
        part.pins.map((p, i) => `<g data-contact="${p.id}">` +
          (p.number === '1' ? rect(p.x - 4.6, p.y - 4.6, 9.2, 9.2, .6, '#d5c998', '#e2dcaa') : circle(p.x, p.y, 4.6, '#d5c998', '#e2dcaa')) +
          circle(p.x, p.y, 2.8, '#c3ddd3') +
          (labels ? label(p.x + (i < 8 ? 8 : -8), p.y, p.label, 5.8, '#f6f5d8', i < 8 ? 'start' : 'end') : '') + '</g>').join('') +
        label(117, 231, 'COMPONENT SIDE / NOTCH LOWER RIGHT', 6, '#3b5863');
    },
    footprint: {
      body: [25.4, 28.575], color: '#318956', modelHeight: 1.6,
      pads: contacts.map(c => ({ id: c.id, x: c.x, y: c.y, size: 1.8, drill: 1, square: c.number === '1' })),
      details: spec.details ?? [],
      note: `${spec.sku} ${spec.revision} reference host carrier. Electrical contact centers use the manufacturer DXF's 22.86 mm row separation and 2.54 mm pitch. The 1 mm drills and 1.8 mm copper are selected reference dimensions, not an audited production land pattern. The rectangular generated envelope does not reproduce the orientation notch, full silkscreen, selected component heights or enclosure clearances. All sixteen pins, including NC contacts, retain manufacturer mikroBUS numbers. Generated 3D is approximate.`,
    },
    model: { label: spec.cadLabel ?? `${spec.sku} manufacturer DXF + STEP archive`, url: spec.cad },
  };
}

const common = { 7: supply3, 8: ground, 9: ground, 10: supply5 };
const entries = [
  click({ id: 'mikroe-buzz-click-945', name: 'MIKROE BUZZ Click MIKROE-945', short: 'BUZZ click', sku: 'MIKROE-945',
    category: 'Audio', revision: 'v100', page: 'https://www.mikroe.com/buzz-click',
    schematic: 'https://download.mikroe.com/documents/add-on-boards/click/buzz/BUZZ_click_Schematic_v100.pdf',
    cad: 'https://download.mikroe.com/documents/2d-3d-files/BUZZ_Click_2d_3d_files.zip',
    cadLabel: 'MIKROE-945 manufacturer DXF archive (no STEP in archive)',
    description: 'Piezo transducer driven through a BC846 transistor. Both GPI and PWM reach the same driver node through populated J3/J2 links by default; do not drive them to opposite levels. Removing the corresponding link separates an input. J1 selects 3.3 V or 5 V supply.',
    signals: { ...common, 3: ['GPI', 'input', 'Digital buzzer driver input, shared with PWM through the default populated link.'],
      16: ['PWM', 'input', 'Tone/PWM driver input, shared with GPI through the default populated link.'] },
    connections: [['p3', 'p16']], tags: ['buzz', 'buzzer', 'piezo', 'pwm', 'audio'],
    details: [[0, -3.5, 14, 14, 6.8, '#262d2d']],
    draw: () => circle(117, 77, 49, '#202c29', '#b7bca4') + circle(117, 77, 44, '#2b3330') + circle(117, 77, 6, '#101815') +
      rect(66, 139, 27, 20, 1.5, '#c2a457', '#dfcea4') + chip(123, 145, 17, 13, '', 2) +
      label(157, 150, 'PWR SEL', 5, '#e8e6c8') + smd(75, 127) + smd(152, 128) + label(177, 35, 'PZ1', 6, '#f3eccc'),
  }),
  click({ id: 'mikroe-button-r-click-1901', name: 'MIKROE Button R Click MIKROE-1901', short: 'Button R click', sku: 'MIKROE-1901',
    category: 'Switches', revision: 'v100', button: true, page: 'https://www.mikroe.com/button-r-click',
    schematic: 'https://download.mikroe.com/documents/add-on-boards/click/button-r/Button_R_click_v100_Schematic.PDF',
    cad: 'https://download.mikroe.com/documents/2d-3d-files/Button_R_Click_2d_3d_files.zip',
    description: 'Marquardt 3006.2112 push button with independent red LED. INT is a pulled-down, RC-filtered signal that rises when pressed; PWM controls the LED independently. The PWR SEL jumper selects 3.3 V or 5 V logic.',
    signals: { ...common, 15: ['INT', 'output', 'Active-high button state, with onboard pull-down and RC filter.'],
      16: ['PWM', 'input', 'Red button-backlight control/PWM input, independent of the button contact.'] },
    tags: ['button', 'pushbutton', 'red led', 'illuminated', 'pwm'],
    details: [[0, -6.6, 9, 9, 5.5, '#959b88']],
    draw: () => rect(83, 22, 68, 68, 3, '#1d302a', '#bfccb5') + circle(117, 56, 29, '#c0bca0', '#e0ddc2') +
      circle(117, 56, 21, '#d0cfb9', '#a2aa97') + circle(117, 56, 8, '#a5a17e') +
      [80, 100, 121].map(x => rect(x, 106, 10, 23, 1, '#c2c9aa') + rect(x + 2, 111, 6, 13, .5, '#496257')).join('') +
      rect(143, 105, 9, 24, 1, '#adbdab') + path('M91 150H144M117 139V150M91 150V159M117 150V159M144 150V159', 'none', '#ecebd4', 2) +
      [91, 117, 144].map(x => circle(x, 159, 4, '#eeeccd')).join(''),
  }),
  click({ id: 'mikroe-light-click-1424', name: 'MIKROE Light Click MIKROE-1424', short: 'Light click', sku: 'MIKROE-1424',
    category: 'Sensors', revision: 'v101', page: 'https://www.mikroe.com/light-click',
    schematic: 'https://download.mikroe.com/documents/add-on-boards/click/light_click/Light_click_v101_Schematic.PDF',
    cad: 'https://download.mikroe.com/documents/2d-3d-files/Light_Click_2d_3d_files.zip',
    description: 'PD15-22C/TR8 photodiode, LM358 amplifier and MCP3201 read-only SPI ADC. A/D SEL routes the amplifier either to AN or to the ADC; ADC is the documented default. I/O Level selects 3.3 V or 5 V for the SPI circuit. The AN pad is not an active output while the ADC path is selected.',
    signals: { ...common, 1: ['AN', 'output', 'Analog light voltage only when A/D SEL is moved to AN; disconnected in the default ADC position.'],
      3: ['CS', 'input', 'Active-low MCP3201 SPI chip-select input.'], 4: ['SCK', 'input', 'MCP3201 SPI clock input.'],
      5: ['SDO', 'output', 'MCP3201 serial conversion-data output (host MISO).'] },
    tags: ['light', 'photodiode', 'mcp3201', 'lm358', 'spi', 'adc'],
    details: [[0, -6, 4, 5, 1.5, '#262e2b']],
    draw: () => rect(107, 24, 22, 17, 1, '#d9cfa8', '#f0e8bf') + rect(112, 27, 12, 11, 1, '#4d4b2d') +
      chip(94, 67, 44, 34, '', 4) + chip(95, 112, 42, 30, '', 4) +
      label(117, 108, 'REF. 2.048V', 5.7, '#eae6ca') + label(117, 161, 'OUTPUT   I/O Level', 5.3, '#eae6ca') +
      [72, 151].flatMap(x => [64, 87, 112, 137].map(y => smd(x, y))).join(''),
  }),
];

export default defineFamily('mikroe-click', entries);
