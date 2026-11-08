import { reviewedBoardMounting, clippedFrontArtwork } from './reviewed-board-mounting.js';

export function coreDevboardMounting(entry) {
  const { component, render } = entry;
  if (component.id !== 'esp32-s3') throw new Error('This review covers ESP32-S3-DevKitC-1 v1.1 only.');
  const rows = ['J1', 'J3'].map(connector => component.pins.filter(pin => pin.number.startsWith(`${connector}.`))
    .sort((a, b) => Number(a.number.split('.')[1]) - Number(b.number.split('.')[1])));
  if (rows.some(row => row.length !== 22)) throw new Error('DevKitC-1 must retain both complete 22-pin headers.');
  const contacts = rows.flatMap((row, side) => row.map((pin, index) => ({ pinId: pin.id,
    x: side ? 11.43 : -11.43, y: -29.97 + index * 2.54 })));
  const regions = [{ x: 7, y: 7, width: component.width - 14, height: component.height - 14 },
    { x: component.width / 2 - 41, y: 2, width: 82, height: 138 },
    ...[-41, 11].map(dx => ({ x: component.width / 2 + dx, y: component.height - 20, width: 30, height: 15 }))];
  const bounds = { x: 7, y: 2, width: component.width - 14, height: component.height - 7 };
  return reviewedBoardMounting({
    source: { url: 'https://dl.espressif.com/dl/schematics/SCH_ESP32-S3-DevKitC-1_V1.1_20220413.pdf',
      label: 'Espressif ESP32-S3-DevKitC-1 v1.1 header block and manufacturer mechanical drawing' },
    contacts, bodyRegions: regions, viewBounds: bounds,
    bodyEvidence: 'Both complete 22-pin rows and 22.86 mm row spacing were reviewed against Espressif’s v1.1 reference. Material regions copy the original front PCB, antenna and dual Micro-USB primitives; small component outlines remain representative and native export accuracy is unchanged.',
    note: 'Insert all 44 J1/J3 male-header leads at 2.54 mm pitch with 22.86 mm row spacing. Component side, antenna above. The manufacturer explicitly supports mounting this board on a breadboard.',
    view: { id: 'breadboard', pins: component.pins.map(pin => ({ pinId: pin.id, x: pin.x, y: pin.y, face: 'front' })),
      note: 'The explicitly selected assembly view calibrates the two original illustration axes against all 44 source-reviewed leads; unmounted and older scale-only instances keep published anchors and artwork.' },
    renderMounted: part => clippedFrontArtwork(render, component, bounds),
  });
}
