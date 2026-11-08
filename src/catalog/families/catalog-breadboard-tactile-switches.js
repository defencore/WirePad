import { defineFamily } from '../registry.js';
import { bendableBreadboardPart } from '../shared/breadboard-parts.js';
import { circle, label, rect } from '../shared/svg.js';

const source = 'https://omronfs.omron.com/en_US/ecb/products/pdf/en-b3f.pdf';
// Omron's page-4 internal-connections diagram is explicitly a top view.
// Its separate logo/numbering inset is a bottom view and must not be copied.
const terminals = [
  ['p4', '4', -3.25, -2.25, '3'], ['p3', '3', 3.25, -2.25, '4'],
  ['p2', '2', -3.25, 2.25, '1'], ['p1', '1', 3.25, 2.25, '2'],
];
const component = {
  id: 'omron-b3f-1000', art: 'omron-b3f-1000', name: 'Omron B3F-1000 Tactile Switch', shortName: 'B3F-1000',
  manufacturer: 'Omron', category: 'Switches', referencePrefix: 'SW', subtitle: '6 × 6 mm / four physical leads / SPST-NO',
  description: 'Omron B3F-1000 standard flat-plunger through-hole tactile switch, without a ground terminal. The 6 × 6 mm body has a 4.3 mm total plunger height. Component-side top view: terminals 4/3 at the top and 2/1 at the bottom. Terminals 4–3 are internally common, terminals 2–1 are internally common, and the two pairs remain separate while the switch is released. No separate PCB revision is specified for this component.',
  source, references: [{ label: 'Omron B3F dimensions and internal connections, page 4', url: source },
    { label: 'Manufacturer model listing', url: 'https://components.omron.com/us-en/products/switches/B3F' }],
  availability: { checked: '2026-11-08', url: 'https://components.omron.com/us-en/products/switches/B3F',
    status: 'The manufacturer model list identifies B3F-1000 as in production; distributor inventory must be checked separately.' },
  tags: ['breadboard', 'through-hole', 'tactile', 'pushbutton', 'momentary', 'SPST-NO', 'B3F-1000'],
  width: 152, height: 136, contactLayout: 'physical',
  pins: terminals.map(([id, number, x, y, common]) => ({ id, number, label: number, x: 76 + x * 16, y: 68 + y * 16,
    type: 'passive', surface: true, description: `Physical terminal ${number}, permanently common with terminal ${common}. The other pair is isolated while the momentary switch is released. Top/component-side view.` })),
  internalConnections: [['p4', 'p3'], ['p2', 'p1']],
};

function render(part, labels = true) {
  return part.pins.map(pin => `<g data-contact="${pin.id}">` +
    rect(pin.x - 5, pin.y - 2.4, 10, 4.8, .6, '#adb8b4', '#dce3d9') +
    circle(pin.x, pin.y, 2.8, '#bda871', '#ecdfb3') +
    (labels ? label(pin.x + (pin.x < 76 ? -10 : 10), pin.y + 2, pin.number, 8, '#314b42', pin.x < 76 ? 'end' : 'start') : '') + '</g>').join('') +
    rect(28, 20, 96, 96, 5, '#303a34', '#63756a') + rect(29, 21, 94, 94, 3, '#a3aaa0', '#dfe5d8') +
    [[41, 33], [111, 33], [41, 103], [111, 103]].map(([x, y]) => circle(x, y, 4, '#657368', '#dce3d5')).join('') +
    circle(76, 68, 28, '#e7e1c9', '#7d8371') + circle(76, 68, 22, '#dcd7bd', '#d4ceb1') +
    (labels ? label(76, 129, 'TOP · B3F-1000', 7, '#425b4c') : '');
}

export default defineFamily('breadboard-tactile-switches', [{
  component, render,
  footprint: {
    body: [6, 6], color: '#a3aaa0', modelHeight: 3.4,
    pads: terminals.map(([id, _number, x, y]) => ({ id, x, y, size: 1.8, drill: 1, square: id === 'p1' })),
    details: [[0, 0, 3.5, 3.5, .9, '#e7e1c9']],
    note: 'Reference carrier using the manufacturer page-4 top-view 6.5 × 4.5 mm terminal centers and selected 1.8 mm lands / 1 mm drills. Omron labels its PCB-processing dimensions reference only. Full production solder, tolerances and lead forming are not qualified; generated 3D is approximate. Terminal numbers match the four physical leads.',
  },
  model: { label: 'Omron B3F model CAD resources', url: 'https://components.omron.com/us-en/products/switches/B3F' },
  mounting: bendableBreadboardPart(component, {
    kind: 'tactile', dimensions: [6, 6], maxLeadMm: 2,
    source: { label: 'Omron B3F-1000 6 mm mechanical and top-view circuit drawing, page 4', url: source },
    exits: [[-3, -2.25], [3, -2.25], [-3, 2.25], [3, 2.25]],
    tips: [[-3.81, -2.54], [3.81, -2.54], [-3.81, 2.54], [3.81, 2.54]], leadDiameter: .7,
    note: 'Omron B3F-1000, component-side top view. Its supplied terminal-center pattern is 6.5 × 4.5 mm, not a rigid 2.54 mm grid. The representative formed tips use 7.62 × 5.08 mm, with a limited 2 mm projected lead reach from the body edge. Keep the source 4–3 and 2–1 common pairs; forming is an assembly choice that requires actual lead-length/clearance review.',
  }),
}]);
