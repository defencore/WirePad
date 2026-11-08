import { miniComputingMounting } from './mini-computing-mounting.js';
import { circle, label, rect } from './svg.js';

const xmin = -2.08604358, ymax = 59.41625912;
const size = [25.000458, 61.5023027];
const transform = (x, y) => ({ x: x - xmin, y: ymax - y });
const rectangle = ([x0, y0, x1, y1]) => ({ ...transform(x0, y1), width: x1 - x0, height: y1 - y0 });
const hardware = {
  usb: rectangle([6.319622823683966, 55.11396139531963, 14.519622823683935, 60.51396208214474]),
  reset: rectangle([-2.678909137320914, 50.11305532813263, .8710909555565395, 54.71305535436737]),
  user: rectangle([19.944488685341074, 50.11326891621448, 23.49448887198872, 54.71326901237953]),
  ftdi: rectangle([7.189752393464529, 42.903124881081524, 15.289752473957472, 51.00312496157447]),
  fpga: rectangle([4.9195955220820125, 15.228961051692012, 15.019595624635986, 25.328961154245988]),
  flash: rectangle([3.4010986843588427, 6.77976134824688, 11.401099054157157, 12.05976180983912]),
};

function renderHardware() {
  const board = rect(0, 0, ...size, 1.9, '#247b53', '#8eb39a');
  const ports = rect(...Object.values(hardware.usb), .35, '#b5bfc1', '#e3e8de') +
    rect(hardware.usb.x + .7, hardware.usb.y, hardware.usb.width - 1.4, 1.2, .2, '#30423d');
  const controls = ['reset', 'user'].map(key => {
    const r = hardware[key];
    return rect(r.x, r.y, r.width, r.height, .2, '#afb6ad', '#dbe1d5') +
      circle(r.x + r.width / 2, r.y + r.height / 2, 1.1, '#dedfcf');
  }).join('');
  const integratedCircuits = [['ftdi', 'FT2232H'], ['fpga', 'GW1NR-9'], ['flash', 'FLASH']].map(([key, caption]) => {
    const r = hardware[key];
    return rect(r.x, r.y, r.width, r.height, .2, '#1e2827', '#9caaa2') +
      circle(r.x + .7, r.y + .7, .25, '#a9b4a6') + label(r.x + r.width / 2, r.y + r.height / 2, caption, .85, '#becdc0');
  }).join('');
  const holes = [[0, 0], [20.82837084, 0], [0, 57.33021554], [20.82837084, 57.33021554]]
    .map(([x, y]) => { const p = transform(x, y); return circle(p.x, p.y, 1.3, '#b8bda8') + circle(p.x, p.y, 1, '#247b53'); }).join('');
  return '<g stroke-width=".12">' + board + ports + controls + integratedCircuits + holes +
    Array.from({ length: 8 }, (_, n) => rect(22.1, 10.5 + n * 1.35, 1.2, .7, .1, '#dcdcbc', '#e2e2cf')).join('') +
    label(12.3, 26, 'GOWIN', 1.6, '#d4e8db') + label(12.3, 44.2, 'LittleBee', 1.5, '#d4e8db') + '</g>';
}

export function trenzMounting(component) {
  const main = component.pins.filter(pin => /^j[12]-/.test(pin.id));
  const pins = Object.fromEntries(component.pins.map(pin => {
    const [connector, terminal] = pin.number.split('.'), number = Number(terminal);
    if (connector === 'J1' || connector === 'J2') {
      // Trenz declares Arduino MKR compatibility. Nominal straight male posts
      // are 20.32 mm apart; the independent STEP drill columns differ by 1.27 µm.
      return [pin.id, { x: .23899876 - xmin + (connector === 'J2' ? 20.32 : 0),
        y: ymax - (connector === 'J1' ? 37.11988258 - (number - 1) * 2.54 : 4.09988258 + (number - 1) * 2.54) }];
    }
    const point = connector === 'J4' ? transform(18.02026622, 37.11988512 - (number - 1) * 2.54)
      : transform(16.74999952 - (number - 1) % 6 * 2.54, number <= 6 ? 1.56066744 : -.97933256);
    return [pin.id, { ...point, description: `${pin.number}: ${pin.label}. Source-identified front plated hole in the manufacturer unpopulated-header assembly. Leave this optional connector unpopulated or install it upward; it is not a breadboard insertion lead.` }];
  }));
  return miniComputingMounting(component, { size, pins, contacts: main.map(pin => pin.id),
    captions: Object.fromEntries(component.pins.filter(pin => pin.id.startsWith('j6-')).map(pin => [pin.id, pin.number.split('.').at(-1)])),
    source: { label: 'Trenz TEC0117 revision 01 mechanical STEP and unpopulated assembly',
      url: 'https://www.trenz-electronic.de/trenzdownloads/Trenz_Electronic/Modules_and_Module_Carriers/2.5x6.15/TEC0117/REV01/HW_Design/STP-TEC0117-01.zip' },
    evidence: 'Manufacturer revision-01 STEP supplies PCB, micro-USB and switch body bounds, all 46 plated-hole centers, and 2.54 mm main pitch. Trenz/Gowin explicitly declare Arduino MKR compatibility; the MKR breadboard grid establishes nominal 20.32 mm installed-post separation. Exported main drill columns are X=.23899876/20.56026622 mm, separation 20.32126746; the nominal right posts differ by only .00126746 mm within 1 mm drills. No global fitting tolerance is widened. Exact front/back photographs identify both main pin-1 markers, all six J4 holes and both J6 rows. The declared configuration matches the source photographs with J4/J6 bodies unpopulated, so their actual plated holes are exposed; the optional right-angle Pmod socket in STEP is not fitted. All 46 endpoints remain present, with no substituted cable landings or hidden auxiliary terminals.',
    note: 'Populate both complete 14-contact main J1/J2 rows with downward straight male headers in the nominal MKR pattern. Leave optional J4 JTAG and J6 Pmod bodies unpopulated or fit upward headers. This profile is not for an assembled right-angle Pmod socket. Pmod contact numbers have full functions on hover; MKR AIN/AREF are digital FPGA signals, not analog inputs.',
    regions: [{ x: 0, y: 0, width: size[0], height: size[1] }, hardware.usb, hardware.reset, hardware.user],
    renderHardware,
  });
}
