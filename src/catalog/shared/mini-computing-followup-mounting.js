import { miniComputingMounting, projectMiniHardware } from './mini-computing-mounting.js';
import { circle, label, rect } from './svg.js';

// Physical installation data is separate from the published component artwork,
// contact anchors and off-board KiCad carriers. See the corresponding audit for
// exact source revisions, export rounding and explicitly documented inferences.
const sourceRoot = 'https://dl.sipeed.com/fileList/';
const sources = {
  original: sourceRoot + 'TANG/Nano/HDK/Tang-NANO-2704-size.DXF',
  one: sourceRoot + 'TANG/Nano%201K/4_Dimensional_drawing/Tang_Nano_6100.dxf',
  nine: sourceRoot + 'TANG/Nano%209K/3_Bit_number_map/Tang_Nano_9K_3672_ibom.html',
  twenty: sourceRoot + 'TANG/Nano_20K/3_Bit_number_map/v3923/Tang_Nano_20K_3920_ibom.html',
  bit: sourceRoot + 'MAIX/HDK/Sipeed-Maix-Bit/Specifications/Sipeed%20Maix-Bit%20Specifications_EN%20V2.0.pdf',
};

function bitHardware() {
  const integratedCircuit = (x, y, width, height, text) => rect(x, y, width, height, .3, '#17201f', '#81918a') +
    circle(x + .7, y + .7, .2, '#a7b0a4') + label(x + width / 2, y + height / 2, text, .8, '#b5c3b8');
  return '<g stroke-width=".12">' + rect(0, 0, 53.3, 25.4, .9, '#263631', '#718477') +
    rect(-2.3, 8, 9.5, 9.2, .5, '#b5bdbb', '#e0e5dd') + rect(-2.3, 8.7, 1.4, 7.8, .2, '#27332f') +
    [3.6, 18.3].map(y => rect(1.1, y, 4.3, 3.5, .4, '#aab3ad', '#d9e0d8') + circle(3.25, y + 1.75, 1.2, '#ececdf')).join('') +
    integratedCircuit(8.4, 8.5, 5.5, 8.1, 'CH552') + integratedCircuit(22.8, 6.1, 10.3, 10.3, 'K210') +
    integratedCircuit(23, 18, 10, 4.2, 'FLASH') +
    [39.7, 49].map(x => rect(x, 5.7, 3, 14, .3, '#e1e0d2', '#9aa391') + rect(x + 2.2, 6.1, .8, 13.2, .1, '#172421')).join('') +
    [1.27, 24.13].map(y => circle(26.65, y, 1.5, '#a9aea3') + circle(26.65, y, .85, '#263631')).join('') +
    circle(17.5, 18.4, .85, '#b4b8aa') + label(18.1, 3.6, 'MAIX BIT V2.0', 1, '#dce4da') + '</g>';
}

function rowPoints(component, leftGroup, x, y, separation) {
  const groups = [...new Set(component.pins.map(pin => pin.contactGroup))];
  return Object.fromEntries(groups.flatMap(group => component.pins.filter(pin => pin.contactGroup === group)
    .map((pin, index) => [pin.id, { x: x + (group === leftGroup ? 0 : separation), y: y + index * 2.54 }])));
}

function nanoReview(component) {
  if (component.id === 'sipeed-tang-nano') {
    const xmin = -10.54100762, ymin = -31.72460254;
    const main = component.pins.filter(pin => pin.contactGroup !== 'JTAG');
    const pins = rowPoints({ pins: main }, 'LEFT', -8.7884 - xmin, -29.718 - ymin, 17.78);
    const jtag = { 'jtag-4': [-8.9027, 21.19629746], 'jtag-7': [-6.3627, 21.19629746],
      'jtag-3': [6.4516, 21.082], 'jtag-6': [8.9916, 21.082] };
    for (const [id, [x, y]] of Object.entries(jtag)) pins[id] = { x: x - xmin, y: y - ymin,
      description: 'Manufacturer 2704 JTAG plated hole, component side. Leave this optional pair unpopulated or fit an upward header; it is not a downward insertion lead.' };
    return { size: [21.28521016, 58.34380254], pins, contacts: main.map(pin => pin.id), source: sources.original,
      evidence: 'Manufacturer 2704 DXF INSERT blocks HN1X20_B_2/_3 contain all 40 main holes at X=-8.7884/8.9916 and Y=-29.718+i*2.54 mm. HN1X2_4/_5 supply all four JTAG holes. Tang-Nano-Pin.jpg maps TCK/TDO to the left pair and TMS/TDI to the right with USB at the bottom. PCB outline is X=-10.54100762..10.74420254, Y=-31.72460254..26.6192 mm. Main post-row separation is 17.78 mm.',
      note: 'Populate both complete 20-contact rows with downward straight male headers. Keep the four separate JTAG pads unpopulated or upward-facing. USB and LCD FPC remain cable interfaces.' };
  }
  if (component.id === 'sipeed-tang-nano-1k') {
    const xmin = 93.72599238, ymax = 107.3912;
    const main = component.pins.filter(pin => ['P4', 'P5'].includes(pin.contactGroup));
    const pins = Object.fromEntries(main.map(pin => [pin.id, {
      x: (pin.contactGroup === 'P4' ? 95.4786 : 113.2586) - xmin,
      y: ymax - (51.054 + (Number(pin.number.split('.').at(-1)) - 1) * 2.54),
    }]));
    // Historical IDs preserve their electrical functions. The source schematic
    // actually names TDI as P3.2 and TDO as P2.2; do not swap saved endpoints.
    const jtag = { 'p2-1': [95.3643, 101.9683, 'P2.1 / TMS'], 'p3-2': [97.9043, 101.9683, 'P2.2 / TDO'],
      'p2-2': [110.7186, 101.854, 'P3.2 / TDI'], 'p3-1': [113.2586, 101.854, 'P3.1 / TCK'] };
    for (const [id, [x, y, terminal]] of Object.entries(jtag)) pins[id] = { x: x - xmin, y: ymax - y,
      description: `Manufacturer 6100 physical terminal ${terminal}. The published canvas ID and electrical label are retained. Leave this optional pair unpopulated or upward-facing.` };
    return { size: [21.28521016, 58.3438], pins, contacts: main.map(pin => pin.id), source: sources.one,
      evidence: 'Manufacturer 6100 DXF represents its drilled holes as two-vertex bulged polylines, not CIRCLE entities. Both complete 20-hole rows have X=95.4786/113.2586, Y=51.054+i*2.54 mm and 17.78 mm separation. The PCB outline is X=93.72599238..115.01120254, Y=49.0474..107.3912 mm. Manufacturer front/back photos and the 6100 schematic identify all four optional JTAG holes; stable TDI/TDO IDs are positioned by electrical function despite their historical connector-group mismatch. USB is at the top.',
      note: 'Populate all P4/P5 main contacts with downward straight male headers. Leave the two JTAG pairs unpopulated or fit them upward; their separate source positions and electrical functions remain visible.' };
  }
  if (component.id === 'sipeed-tang-nano-9k') return {
    size: [26.023973, 70.043973],
    pins: rowPoints(component, 'J5', 101.974198 - 100.374602, 101.989204 - 99.459046, 22.86),
    contacts: component.pins.map(pin => pin.id), source: sources.nine,
    evidence: 'Exact manufacturer Tang_Nano_9K_3672 iBOM (2022-02-25) provides J5/J6 complete 24-hole rows at source Y=100.374602/77.514602 mm, separation exactly 22.86 mm, and X=101.989204+i*2.54 mm. The source PCB edge centreline is X=99.459046..169.503019 and Y=75.950225..101.974198 mm. Rotate the physical plane with USB at the top. The earlier dimension PDF label 22.8169 mm disagrees with these production pad coordinates; the source iBOM resolves that false exclusion without widening fitting tolerance.',
    note: 'Populate all 48 J5/J6 contacts with downward straight male headers. The upper right I/O bank remains 1.8 V. HDMI, USB, microSD and FPC ports keep their original cable/card interfaces.',
  };
  if (component.id === 'sipeed-tang-nano-20k') return {
    size: [22.553973, 54.041973],
    pins: rowPoints(component, 'J6', 109.665 - 108.53998, 128.92 - 126.313046, 20.32),
    contacts: component.pins.map(pin => pin.id), source: sources.twenty,
    evidence: 'Manufacturer v3923 download directory pairs the 3923 assembly drawing with an iBOM whose filename/title retains 3920 although its BOM contains BL616. Its complete J6/J5 20-hole rows are at X=128.92+i*2.54 and Y=108.53998/88.22 mm, with 20.31998 mm exported drill separation. Straight posts use nominal 20.32 mm, a 0.00002 mm export-rounding correction. PCB edge centreline is X=126.313046..180.355019, Y=87.111027..109.665 mm. The 3923 assembly and manufacturer 3921 dimension drawing corroborate the unchanged 40-hole, 20.32 mm mechanical family. This is a documented compatible-family nominal-header inference, not a claim that the stale 3920 title is exact revision-3923 production CAD.',
    note: 'Populate both complete 20-contact expansion rows with downward straight male headers. USB, HDMI, microSD, display FPC and the speaker connector remain cable/card interfaces.',
  };
  return undefined;
}

export function miniComputingFollowupMounting(entry) {
  const component = entry.component;
  let review = nanoReview(component);
  if (component.id === 'sipeed-maix-bit-v2-0') review = {
    size: [53.3, 25.4], labelAxis: 'y', source: sources.bit,
    pins: Object.fromEntries(component.pins.map(pin => [pin.id, {
      x: 2.54 + (Number(pin.number.split('.').at(-1)) - 1) * 2.54,
      y: pin.number.startsWith('J13.') ? 1.27 : 24.13,
    }])), contacts: component.pins.map(pin => pin.id),
    evidence: 'Manufacturer Maix-BIT Specifications v2.0 explicitly specifies 2.54 mm GPIO contacts, a 53.3 x 25.4 mm PCB and direct breadboard insertion. The V2.0 component-side photographs and assembly identify both complete 18-contact rows with connector positions 10/11 replaced by the central mounting annulus. The nominal straight-header assembly uses 22.86 mm row separation and 2.54 mm longitudinal post centres. Row separation and the 2.54 mm first-post offset are a documented nominal assembly inference corroborated by the manufacturer direct-insertion statement and the same-side photographs; these are not claimed to be extracted production STEP drill coordinates. Non-contact hardware remains representative.',
    note: 'Fit both complete 18-contact row segments with downward straight 2.54 mm male headers, retaining the two-position gap around each central mounting hole. Camera/LCD FPCs, USB-C and microSD remain cable/card ports. RST remains a 1.8 V-domain input.',
  };
  if (!review) return undefined;
  // Capture the original component before view resolution. Using the pure
  // hardware renderer avoids duplicated pads and double-transformed contacts.
  const canonical = component, size = review.size;
  const board = component.id === 'sipeed-maix-bit-v2-0' ? [45, 42, 525, 245]
    : [42, 42, canonical.width - 84, canonical.height - 108];
  // Include visible port material in the envelope, never the old drawing frame,
  // face annotation or display title. Non-contact hardware is illustrative; its
  // projected bounds do not assert a manufacturer connector-body measurement.
  const ports = component.id === 'sipeed-maix-bit-v2-0'
    ? [{ x: -2.3, y: 8, width: 9.5, height: 9.2 }]
    : [{ x: .35 * size[0], y: (component.id === 'sipeed-tang-nano' ? 146 : -2) / 160 * size[1],
      width: .3 * size[0], height: 15 / 160 * size[1] }];
  if (component.id === 'sipeed-tang-nano-9k') ports.push({ x: .25 * size[0], y: 145 / 160 * size[1],
    width: .5 * size[0], height: 18 / 160 * size[1] });
  if (component.id === 'sipeed-tang-nano-20k') ports.push({ x: .23 * size[0], y: 144 / 160 * size[1],
    width: .54 * size[0], height: 18 / 160 * size[1] });
  return miniComputingMounting(component, { ...review,
    regions: [{ x: 0, y: 0, width: size[0], height: size[1] }, ...ports],
    renderHardware: component.id === 'sipeed-maix-bit-v2-0' ? bitHardware
      : () => projectMiniHardware(entry.renderHardware, canonical, board, size),
  });
}
