import { miniComputingMounting } from './mini-computing-mounting.js';
import { circle, label, rect } from './svg.js';

const xmin = 44.4999999, ymin = 58.166;
const size = [25.527, 44.6540001];
const point = (x, y) => ({ x: y - ymin, y: x - xmin });
const source = 'https://dl.sipeed.com/fileList/LICHEE/Zero/HDK/';

function renderHardware() {
  // Component-side placement from the source DXF and the photograph embedded
  // on the manufacturer's numbered interface schematic, with USB at bottom.
  return '<g stroke-width=".12">' + rect(0, 0, ...size, .3, '#185b88', '#8aa9b1') +
    rect(5.55620174, 7.135, 14.00000006, 14.00000006, .3, '#202928', '#9aa8a1') +
    circle(6.2562, 7.835, .3, '#a1b3a4') + label(12.5562, 14.135, 'V3s', 2.4, '#b6c4b6') +
    rect(16.3068, 25.6048002, 6.5, 13.1, .4, '#b8c0bc', '#dde3d9') +
    rect(16.7068, 25.9048, 5.7, 1.2, .1, '#526e73') +
    rect(7.874, 39.95200036, 9.72600036, 5, .4, '#bcc4c0', '#e2e6db') +
    rect(8.574, 43.75200036, 8.32600036, 1.2, .2, '#344944') +
    label(12.7635, 3.5, 'LICHEE ZERO', 1.7, '#dce7e1') +
    [[4, 23, 2.8, 2.3], [10, 28, 3.4, 3], [5.5, 35, 3, 2.5], [17.3, 23, 3, 1.3]]
      .map(([x, y, width, height]) => rect(x, y, width, height, .2, '#273533', '#809a92')).join('') + '</g>';
}

export function licheeZeroMounting(component) {
  const selected = component.pins.filter(pin => /^U[38]\./.test(pin.number) && Number(pin.number.split('.').at(-1)) % 2 === 0);
  const selectedIds = new Set(selected.map(pin => pin.id));
  const pins = Object.fromEntries(component.pins.map(pin => {
    const [connector, terminal] = pin.number.split('.'), number = Number(terminal);
    let p;
    if (connector === 'U3' || connector === 'U8') {
      // Source U8 is the lower-Y footprint (left in the component-side view),
      // U3 the upper-Y footprint. INSERT sequence numbers are not designators.
      const even = number % 2 === 0;
      const y = connector === 'U8' ? even ? 59.436 : 58.166 : even ? 82.296 : 83.566;
      p = point(50.8 + (number - 1) * 1.27, y);
    } else if (connector === 'J3') p = point(44.4999999, 82.9999991 - (number - 1) * 1.27);
    else if (connector === 'J2') p = point(87.69999986 - (number - 1) * 2.54, 62.29999986);
    else p = point(87.60000006 - (number - 1) * 2.54, 79.50000102);
    return [pin.id, { ...p, description: selectedIds.has(pin.id)
      ? `${pin.number}: ${pin.label}. Actual inner 2.54 mm drilled tap, electrically identical to this manufacturer's same-number castellated terminal. Downward straight-header post center.`
      : `${pin.number}: ${pin.label}. Actual component-side ${connector === 'J3' ? '1.27 mm top edge LCD pad' : /^U/.test(connector) ? 'stamp-only castellated pad' : 'auxiliary supply through-hole'}. This contact is preserved for separate wiring and does not enter the breadboard.` }];
  }));
  const captions = Object.fromEntries(component.pins.filter(pin => pin.number.startsWith('J3.') ||
    /^U[38]\./.test(pin.number) && !selectedIds.has(pin.id)).map(pin => [pin.id, pin.number.split('.').at(-1)]));
  const clipId = 'lichee-zero-reviewed-pcb-copper';
  return miniComputingMounting(component, { size, pins, contacts: selected.map(pin => pin.id), captions,
    source: { label: 'Sipeed Lichee Zero manufacturer DXF and numbered component-side interface schematic', url: source + 'lichee_zero.DXF' },
    evidence: 'Manufacturer lichee_zero_Schematic.pdf page 2 embeds the component-side board photograph with all numbered U3/U8/J3 contacts. It explicitly marks even U3/U8 contacts as Dip hole and Stamp hole and odd contacts as Stamp hole only; J3.1 is the rightmost top LCD pad. The DXF SIP30_15_1_27 blocks supply complete 15-hole inner rows at source Y=59.436/82.296 mm and X=52.07+i*2.54 mm, separation exactly 22.86 mm. Outer 1.27 mm contacts use X=50.8+i*1.27 and Y=58.166/83.566. PCB Mechanical1 outline is X=44.4999999..89.154, Y=58.166..83.693 mm. J3 and both J2/J12 supply pairs are independently projected from their source pad blocks and numbered photograph. All 84 published logical endpoints remain present; the 30 selected even IDs use their real inner taps instead of inventing J8/J9 duplicate IDs. MicroSD placement confirms the component-side handedness. Non-contact hardware remains illustrative.',
    note: 'Install both complete 15-contact inner U8/U3 rows with downward straight male headers. The 30 selected contacts are the manufacturer breadboard taps of the existing even-number logical terminals. Leave 1.27 mm stamp-only/LCD contacts and auxiliary J2/J12 supply pairs unpopulated downward. Fine contacts show physical terminal numbers with full functions on hover; the rear FPC remains a cable interface.',
    regions: [{ x: 0, y: 0, width: size[0], height: size[1] }, { x: 7.874, y: 39.95200036, width: 9.72600036, height: 5 }],
    renderHardware,
    renderPad: (pin, p) => {
      const fine = pin.number.startsWith('J3.') || /^U[38]\./.test(pin.number) && !selectedIds.has(pin.id);
      const geometry = fine ? rect(p.x - 4, p.y - 5, 8, 10, 1, '#bfaa6b', '#e3d7a8')
        : rect(p.x - 6.35, p.y - 8, 12.7, 16, 6.35, '#bfaa6b', '#e3d7a8') + circle(p.x, p.y, 4, '#1b2a29');
      return (pin === component.pins[0] ? `<defs><clipPath id="${clipId}"><rect x="20" y="20" width="${size[0] * 10}" height="${size[1] * 10}"/></clipPath></defs>` : '') +
        (fine ? `<g clip-path="url(#${clipId})">${geometry}</g>` : geometry);
    },
  });
}
