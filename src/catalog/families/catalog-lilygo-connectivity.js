import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect, tactile, usb } from "../shared/svg.js";
import { readyAntenna, readyBoard, readyRow, readySocket } from "../shared/wire-board.js";
import { reviewedBoardMounting, clippedFrontArtwork } from "../shared/reviewed-board-mounting.js";

const eth = "https://github.com/Xinyuan-LilyGO/LilyGO-T-ETH-Series/blob/master/";
const sim = "https://github.com/Xinyuan-LilyGO/LilyGo-T-SIM7080G/blob/master/";
const wiki = "https://wiki.lilygo.cc/products/";
const split = value => value.split(/\s+/);
const descending = count => Array.from({ length: count }, (_, i) => count - i);
const captions = signals => split(signals).map(signal => signal.replace("GPIO", ""));
const pcb = (x, y, w, h) => rect(x, y, w, h, 14, "#252f32", "#81918b");
const mount = (x, y) => circle(x, y, 9, "#c8b270") + circle(x, y, 5.5, "#edf2ee");
const can = (x, y, w, h, text, sub = "") => rect(x, y, w, h, 3, "#adb6b3", "#edf0e5") +
  rect(x + 4, y + 4, w - 8, h - 8, 2, "#b8bfb8", "#89958e") + label(x + w / 2, y + h / 2 - 7, text, 13, "#40534e") +
  label(x + w / 2, y + h / 2 + 14, sub, 7, "#40534e");
const parts = (x, y, cols, rows) => Array.from({ length: cols * rows }, (_, i) => rect(x + i % cols * 12, y + Math.floor(i / cols) * 12, 7, 4, .5,
  i % 3 ? "#aeaa8b" : "#3b4647", "#8e9a91")).join("");
const magnetics = (x, y, w = 100, h = 48) => rect(x, y, w, h, 3, "#303937", "#b7c2b3") +
  label(x + w / 2, y + h / 2, "H1102NL", 8, "#a0ad9e");
const rj45 = (x, y, w, h, face = "bottom") => rect(x, y, w, h, 4, "#aeb8b7", "#e0e6dd") +
  rect(x + 4, y + 4, w - 8, h - 8, 3, "#bfc6bf", "#8d9c96") +
  (face === "bottom" ? rect(x + 12, y + h - 28, w - 24, 23, 2, "#172125", "#72847e") : rect(x + 5, y + 11, 27, h - 22, 2, "#172125", "#72847e")) +
  label(x + w / 2, y + h / 2 - 10, "RJ45", 11, "#53655e");
const rf = (x, y, name) => rect(x - 6, y - 6, 12, 12, 1, "#b6b8a0", "#e0e1cb") +
  circle(x, y, 3.6, "#c3ac6b", "#e3d5a8") + circle(x, y, 1, "#263234") + label(x + 10, y, name, 6, "#e2e7db", "start");

const rails = {
  FIVE_IN: "power_in", FIVE_OUT: "power_out", POE5V: "power_in", VP: "passive", VN: "passive", TXCM: "passive", RXCM: "passive",
  USB_DN: "bidirectional", USB_DP: "bidirectional", DC1: "power_out", DC5: "power_out", MODEM_1V8: "power_out",
  MODEM_LOG_TX: "output", MODEM_TX: "output", MODEM_RX: "input", GPIO46: "input",
  BAT_NEG: "power_in",
};
const railNotes = {
  FIVE_IN: "Printed 5V-IN: external regulated 5 V input / VBUS. This is distinct from the PoE-derived 5V-OP rail.",
  FIVE_OUT: "Printed 5V-OP: VCC5V system/output rail after the board power-path components; not the separate 5V-IN/VBUS net.",
  POE5V: "Regulated 5 V input from the optional PoE daughterboard. D7 feeds this rail into VCC5V/5V-OP through a Schottky diode; they are not directly joined. Not an Ethernet high-voltage input.",
  VP: "PoE spare-pair positive feed to the optional shield rectifier. May carry PoE voltage; not a GPIO or 5 V rail.",
  VN: "PoE spare-pair negative feed to the optional shield rectifier. Not digital ground or a GPIO.",
  TXCM: "Ethernet transmit magnetics center tap to the optional PoE shield. Not a GPIO.",
  RXCM: "Ethernet receive magnetics center tap to the optional PoE shield. Not a GPIO.",
  USB_DN: "USB 2.0 D− differential data contact, linked to ESP32-S3 GPIO19 through JP1. Not an independent GPIO while USB is in use.",
  USB_DP: "USB 2.0 D+ differential data contact, linked to ESP32-S3 GPIO20 through JP2. Not an independent GPIO while USB is in use.",
  DC1: "AXP2101 DCDC1 core supply, factory configured for 3.3 V. Keep its voltage unchanged while powering ESP32-S3.",
  DC5: "AXP2101 DCDC5 programmable output. Verify its configured voltage before attaching a peripheral.",
  MODEM_1V8: "SIM7080G VDD_EXT reference output, approximately 1.8 V. Do not apply 3.3 V or 5 V.",
  MODEM_LOG_TX: "SIM7080G UART2 diagnostic transmit output at the modem's 1.8 V level.",
  MODEM_TX: "SIM7080G UART1 transmit output at the modem's 1.8 V level, before the level shifter.",
  MODEM_RX: "SIM7080G UART1 receive input at the modem's 1.8 V level, before the level shifter. Not 3.3 V/5 V tolerant.",
  BAT_NEG: "Battery negative terminal before Q1 reverse-polarity protection. This terminal is not directly joined to the system GND net.",
};

function entry(spec) {
  const contacts = spec.contacts.map(contact => {
    const bounds = (spec.boardBounds ?? []).find(([x, y, w, h]) => contact.x >= x && contact.x <= x + w && contact.y >= y && contact.y <= y + h);
    let labelDx = contact.labelDx;
    if (bounds && contact.side === "left" && contact.x - bounds[0] <= 25) labelDx ??= bounds[0] - contact.x - 8;
    if (bounds && contact.side === "right" && bounds[0] + bounds[2] - contact.x <= 25) labelDx ??= bounds[0] + bounds[2] - contact.x + 8;
    const note = spec.notes?.[contact.signal] ?? railNotes[contact.signal];
    return { ...contact, ...(note ? { note } : {}), ...(labelDx !== undefined ? { labelDx } : {}) };
  });
  const definition = readyBoard({ ...spec, contacts, types: { ...rails, ...spec.types }, functions: spec.functions });
  const nets = new Map();
  for (const pin of definition.component.pins) {
    if (pin.label === "NC") continue;
    if (!nets.has(pin.label)) nets.set(pin.label, []);
    nets.get(pin.label).push(pin.id);
  }
  definition.component.internalConnections = [...nets.values()].filter(group => group.length > 1);
  const aliases = { FIVE_IN: "5V-IN", FIVE_OUT: "5V-OP", POE5V: "PoE 5V", USB_DN: "DN", USB_DP: "DP",
    MODEM_1V8: "1V8", MODEM_LOG_TX: "LOG", MODEM_TX: "STX", MODEM_RX: "SRX", BAT_NEG: "BAT−" };
  definition.component.pins = definition.component.pins.map(pin => {
    const printedLabel = spec.pinLabels?.[pin.number] ?? aliases[pin.label] ?? pin.label;
    return { ...pin, label: printedLabel,
      description: printedLabel !== pin.label && /^GPIO\d+$/.test(pin.label)
        ? `${pin.description} MCU contact: ${pin.label}.` : pin.description };
  });
  return { component: definition.component, render: definition.art, footprint: definition.footprint, model: definition.model };
}

// These contacts use the component-side centers in the manufacturer's S3 DXF.
// The outline, pad anchors and native footprint share this millimeter projection.
const liteBounds = { left: -.1251712, right: 27.9629235, bottom: -.16392906, top: 58.6615667 };
const liteScale = 11;
const litePoint = (x, y) => [80 + (x - liteBounds.left) * liteScale, 45 + (liteBounds.top - y) * liteScale];
function nativeRow(ref, signals, numbers, x, y, dx, dy, side, names, options = {}) {
  return split(signals).map((signal, index) => {
    const nx = x + dx * index, ny = y + dy * index;
    const [px, py] = litePoint(nx, ny);
    return { ref, signal, number: `${ref}.${numbers[index]}`, x: px, y: py, side, caption: names?.[index] ?? signal.replace("GPIO", ""),
      native: [nx, ny], ...options };
  });
}

const liteS3Left = "3V3 GPIO4 GPIO5 GPIO6 GPIO7 GPIO15 GPIO16 GPIO17 GPIO18 GPIO8 GPIO19 GPIO20 GPIO3 GND 3V3";
const liteS3Right = "FIVE_IN GND GPIO43 GPIO44 RST GPIO0 GPIO1 GPIO2 GPIO41 GPIO40 GPIO39 GPIO38 GPIO21 GPIO46 GND FIVE_OUT";
const liteS3Contacts = [
  ...nativeRow("P2", liteS3Left, descending(15), 1.20487694, 51.37101994, 0, -2.54, "left", captions(liteS3Left)),
  ...nativeRow("P3", liteS3Right, descending(16), 26.60487694, 51.37101994, 0, -2.54, "right",
    ["5V-IN", "GND", "TXD", "RXD", "RST", "00", "01", "02", "41", "40", "39", "38", "21", "46", "GND", "5V-OP"]),
  ...nativeRow("P4", "GPIO45 GPIO48 GPIO47", [3, 2, 1], 24.06487694, 31.10301882, 0, -2.54, "left", ["45", "48", "47"], { font: 6.3 }),
  ...nativeRow("P1", "GND GND TXCM VP", [7, 5, 3, 1], 24.06487694, 23.48301882, 0, -2.54, "right", ["7", "5", "3", "1"], { font: 6 }),
  ...nativeRow("P1", "POE5V POE5V RXCM VN", [8, 6, 4, 2], 21.52487694, 23.48301882, 0, -2.54, "left", ["8", "6", "4", "2"], { font: 6 }),
];
const liteS3 = entry({
  id: "lilygo-t-eth-lite-s3-v1-0", name: "LILYGO T-ETH-Lite ESP32-S3 V1.0", short: "T-ETH-Lite S3", manufacturer: "LILYGO",
  width: 480, height: 765, boardBounds: [[80, 45, 310, 648]],
  subtitle: "ESP32-S3-WROOM-1 N16R8 / W5500 / PCB 2329",
  source: eth + "schematic/T-ETH-Lite-ESP32S3.pdf", cad: eth + "shell/T-ETH-Lite-ESP32S3.DXF",
  description: "ESP32-S3/W5500 variant, V1.0 schematic dated 2023-07-28 and PCB marking 2329. Component-side view with the antenna at the top and RJ45 at the bottom. All 31 main-header contacts, three P4 GPIO pads and eight P1 PoE-shield contacts are shown. P1 numbers follow the DXF's square pad1; numbered contacts expose their full function on hover. 5V-IN/VBUS and 5V-OP/VCC5V remain separate nets. PoE requires the optional shield. The fitted RJ45, card slot and RF interface are cable/card ports. Small-part appearance is representative.",
  tags: ["lilygo", "t-eth-lite", "ethernet", "esp32-s3", "w5500", "poe", "wifi", "bluetooth", "spi", "sd card"],
  functions: { GPIO46: "ESP32-S3 input-only strapping GPIO.", GPIO43: "UART0 TX.", GPIO44: "UART0 RX.", GPIO1: "Shared W5500 address strap; do not confuse with UART0 TX.", GPIO5: "Shared microSD MISO.", GPIO6: "Shared microSD MOSI.", GPIO7: "Shared microSD clock.", GPIO19: "Native USB D−.", GPIO20: "Native USB D+." },
  pinLabels: { "P3.14": "TXD", "P3.13": "RXD" },
  contacts: liteS3Contacts,
  draw: () => pcb(80, 45, 310, 648) + [99, 370].flatMap(x => [65, 673].map(y => mount(x, y))).join("") +
    readyAntenna(136, 49, 190) + can(139, 118, 185, 216, "ESP32-S3", "N16R8") +
    chip(181, 370, 76, 77, "W5500", 11) + magnetics(151, 470, 125, 56) +
    parts(121, 342, 4, 2) + parts(276, 342, 4, 2) + parts(124, 542, 10, 3) + rj45(169, 587, 150, 127) +
    tactile(88, 614) + tactile(348, 614) + label(230, 359, "T-ETH", 16) + label(332, 541, "P1 / PoE", 7) +
    label(239, 737, "COMPONENT SIDE • P1: PoE shield only", 8, "#3b535b"),
});
liteS3.footprint = {
  body: [liteBounds.right - liteBounds.left, liteBounds.top - liteBounds.bottom], color: "#252f32", modelHeight: 1.6,
  pads: liteS3Contacts.map(contact => ({ id: contact.number.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    x: contact.native[0] - (liteBounds.left + liteBounds.right) / 2, y: (liteBounds.top + liteBounds.bottom) / 2 - contact.native[1],
    size: contact.ref === "P1" ? 1.6 : 1.5, drill: contact.ref === "P1" ? 1.1 : .9, square: contact.number.endsWith(".1") })),
  note: "Component-side contact/outline reference from LILYGO's T-ETH-Lite-ESP32S3.DXF. Native P1/P2/P3/P4 hole centers and drills are retained. This is the board's electrical-contact reference, not the optional PoE shield's land pattern. Mounting holes are visual only; the 3D body and small-part artwork are approximate.",
};
const liteMountBounds = { x: 80, y: 45, width: 310, height: 669 };
liteS3.mounting = reviewedBoardMounting({
  source: { url: eth + 'shell/T-ETH-Lite-ESP32S3.DXF', label: 'LILYGO T-ETH-Lite ESP32-S3 V1.0 component-side manufacturer DXF' },
  contacts: liteS3Contacts.filter(contact => ['P2', 'P3'].includes(contact.ref)).map(contact => ({
    pinId: contact.number.toLowerCase().replace(/[^a-z0-9]+/g, '-'), x: contact.native[0], y: -contact.native[1] })),
  calibration: { origin: { x: 80 - liteBounds.left * liteScale, y: 45 + liteBounds.top * liteScale }, unitsPerMm: liteScale },
  bodyRegions: [{ x: 80, y: 45, width: 310, height: 648 }, { x: 169, y: 587, width: 150, height: 127 }],
  viewBounds: liteMountBounds,
  bodyEvidence: 'The source DXF explicitly locates every P2/P3 hole, with 25.40 mm between rows and 2.54 mm pitch. The PCB artwork uses the existing eleven-units/mm DXF projection; body and RJ45 material regions retain the renderer primitives. Small hardware envelopes remain representative.',
  note: 'Populate all 15+16 P2/P3 straight male-header leads, 25.40 mm apart. Leave the optional PoE-shield P1 and three P4 service pads unpopulated or face-up. The optional PoE daughterboard is not fitted in this assembly.',
  view: { id: 'breadboard', pins: liteS3.component.pins.map(pin => ({ pinId: pin.id, x: pin.x, y: pin.y, face: 'front' })),
    note: 'The complete component-side DXF contact map is retained in a tight single-board assembly view. No default/native pin moves.' },
  renderMounted: component => clippedFrontArtwork(liteS3.render, component, liteMountBounds),
});

const lite32Left = "3V3 GPIO36 GPIO34 GPIO13 GPIO32 GPIO14 GPIO34 GPIO33 GPIO14 GPIO13 GPIO4 GPIO2 GPIO15 GND 3V3";
const lite32Right = "FIVE_IN GND GPIO1 GPIO3 RST GPIO0 GPIO5 GPIO35 GPIO39 GND FIVE_IN FIVE_OUT GND FIVE_OUT GND";
// SENSOR_VP/VN functions follow Espressif's module pads, not the legacy IO39/IO38 net aliases.
// https://www.espressif.com/sites/default/files/documentation/esp32-wrover-e_esp32-wrover-ie_datasheet_en.pdf
const lite32 = entry({
  id: "lilygo-t-eth-lite-esp32-v1-0", name: "LILYGO T-ETH-Lite ESP32 V1.0", short: "T-ETH-Lite ESP32", manufacturer: "LILYGO", esp32: true,
  width: 480, height: 765, boardBounds: [[80, 45, 310, 648]],
  subtitle: "ESP32-WROVER-E / RTL8201 / 16 MB flash / 8 MB PSRAM",
  source: eth + "schematic/T-ETH-Lite-ESP32.pdf", cad: eth + "shell/T-ETH-Lite-ESP32.DXF",
  description: "Original ESP32/RTL8201 variant, V1.0 schematic dated 2023-07-28, matched to the official component-side pin diagram. All 30 main-header contacts and eight PoE-shield contacts are shown. Repeated GPIO13/14/34 positions are real shared contacts. The maker's legacy labels IO39 and IO38 route to WROVER sensor pads4/5: actual GPIO36/SENSOR_VP and GPIO39/SENSOR_VN respectively; those electrical functions are used here while the drawing preserves the printed 39/38 captions. USB-to-UART programming uses the TXD/RXD/BOOT/RST headers. Fitted RF, RJ45 and microSD ports are outside the jumper-contact scope. Geometry is representative.",
  tags: ["lilygo", "t-eth-lite", "esp32", "esp32-wrover-e", "rtl8201", "ethernet", "rmii", "poe", "wifi", "bluetooth"],
  functions: { GPIO36: "Printed IO39; wired to ESP32-WROVER SENSOR_VP/pad4, which is actual GPIO36. Input only, no internal pulls.", GPIO39: "Printed IO38; wired to SENSOR_VN/pad5, actual GPIO39. Input only, no internal pulls.", GPIO0: "Shared Ethernet RMII reference clock input and boot-strapping contact. Release the programmer's DTR after flashing.", GPIO5: "microSD chip select.", GPIO13: "Shared microSD MOSI; appears twice on the header.", GPIO14: "Shared microSD clock; appears twice on the header.", GPIO34: "Shared microSD MISO; appears twice on the header.", GPIO1: "UART0 TX.", GPIO3: "UART0 RX." },
  pinLabels: { "P3.13": "TXD", "P3.12": "RXD" },
  contacts: [
    ...readyRow("P2", lite32Left, 95, 125, 0, 28, { numbers: descending(15), side: "left", captions: ["3V3", "39", "34", "13", "32", "14", "34", "33", "14", "13", "04", "02", "15", "GND", "3V3"] }),
    ...readyRow("P3", lite32Right, 375, 125, 0, 28, { numbers: descending(15), side: "right", captions: ["5V-IN", "GND", "TXD", "RXD", "RST", "00", "05", "35", "38", "GND", "5V-IN", "5V-OP", "GND", "5V-OP", "GND"] }),
    ...readyRow("P1", "GND GND TXCM VP", 347, 432, 0, 28, { numbers: [7, 5, 3, 1], side: "right", captions: ["7", "5", "3", "1"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 6 }])) }),
    ...readyRow("P1", "POE5V POE5V RXCM VN", 319, 432, 0, 28, { numbers: [8, 6, 4, 2], side: "left", captions: ["8", "6", "4", "2"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 6 }])) }),
  ],
  draw: () => pcb(80, 45, 310, 648) + [99, 370].flatMap(x => [65, 673].map(y => mount(x, y))).join("") +
    readyAntenna(136, 49, 190) + can(139, 118, 185, 234, "ESP32-WROVER", "16 MB / 8 MB") +
    chip(181, 389, 76, 77, "RTL8201", 11) + magnetics(151, 482, 125, 56) +
    parts(121, 359, 4, 2) + parts(276, 359, 4, 2) + parts(124, 548, 10, 3) + rj45(169, 587, 150, 127) +
    tactile(88, 614) + tactile(348, 614) + label(230, 376, "T-ETH", 16) + label(331, 554, "P1 / PoE", 7) +
    label(239, 737, "COMPONENT SIDE • legacy 39/38 silk retained", 8, "#3b535b"),
});

const eliteOdd = "3V3 GPIO17 GPIO18 GPIO2 GND GPIO41 GPIO40 GPIO42 3V3 GPIO11 GPIO9 GPIO10 GND GPIO8 GPIO16 GPIO7 GPIO6 USB_DN USB_DP GND";
const eliteEven = "5V 5V GND GPIO43 GPIO44 GPIO1 GND GPIO39 GPIO38 GND GPIO12 GPIO0 GPIO3 GPIO46 GND GPIO15 GND GPIO5 GPIO4 GPIO13";
const elite = entry({
  id: "lilygo-t-eth-elite-2421", name: "LILYGO T-ETH-ELite ESP32-S3 (2421)", short: "T-ETH-ELite S3", manufacturer: "LILYGO",
  width: 650, height: 735, boardBounds: [[90, 55, 440, 604]],
  subtitle: "ESP32-S3 N16R8 / W5500 / IEEE 802.3af PoE / Rev 2421",
  source: eth + "schematic/T-ETH-ELite.pdf", cad: eth + "shell/T-ETH-ELite.dxf",
  description: "Rev2421 schematic dated 2024-05-30 and matching 2421 rear silkscreen. Component-side view, USB-C at the top and RJ45 at the bottom. The complete J1 40-pin header uses its real odd/even physical order. Its shape is Raspberry Pi compatible, but its signal functions differ from a Raspberry Pi. J1.35/37 are USB D−/D+ through JP1/JP2; UART0 TX/RX are J1.8/10. Ethernet and microSD use shared SPI signals. USB OTG power forwarding is controlled by the fitted OTG switch. Native board and connector placement are represented from the maker's photo; the export is a reference termination carrier.",
  tags: ["lilygo", "t-eth-elite", "esp32-s3", "w5500", "ethernet", "poe", "802.3af", "40 pin", "wifi", "bluetooth", "usb otg"],
  functions: { GPIO17: "Default I²C SDA.", GPIO18: "Default I²C SCL.", GPIO43: "UART0 TX at J1.8.", GPIO44: "UART0 RX at J1.10.", GPIO0: "BOOT strapping GPIO.", GPIO38: "Shared IO38 user button.", GPIO46: "ESP32-S3 input-only strapping GPIO.", GPIO9: "Shared SD MISO.", GPIO11: "Shared SD MOSI.", GPIO10: "Shared SD SCLK.", GPIO12: "Shared SD chip select.", GPIO1: "Shared Ethernet address/configuration net." },
  pinLabels: { "J1.8": "TX", "J1.10": "RX", "J1.24": "BOOT" },
  contacts: [
    ...readyRow("J1", eliteOdd, 469, 143, 0, 25, { numbers: Array.from({ length: 20 }, (_, i) => i * 2 + 1), side: "left", captions: captions(eliteOdd).map(v => v === "USB_DN" ? "DN" : v === "USB_DP" ? "DP" : v),
      overrides: Object.fromEntries(Array.from({ length: 20 }, (_, i) => [i, { shape: "square", solid: true, radius: 3.2 }])) }),
    ...readyRow("J1", eliteEven, 494, 143, 0, 25, { numbers: Array.from({ length: 20 }, (_, i) => i * 2 + 2), side: "right", captions: ["5V", "5V", "GND", "TX", "RX", "01", "GND", "39", "38", "GND", "12", "BOOT", "03", "46", "GND", "15", "GND", "05", "04", "13"],
      overrides: Object.fromEntries(Array.from({ length: 20 }, (_, i) => [i, { shape: "square", solid: true, radius: 3.2, labelDx: 46 }])) }),
  ],
  draw: () => pcb(90, 55, 440, 604) + [115, 505].flatMap(x => [80, 634].map(y => mount(x, y))).join("") +
    readyAntenna(152, 66, 159) + can(151, 126, 164, 177, "ESP32-S3", "N16R8") +
    usb(359, 43, 71) + tactile(79, 144) + tactile(79, 237) + tactile(90, 196) +
    rect(457, 129, 50, 503, 2, "#172022", "#60706b") + chip(325, 385, 88, 87, "W5500", 12) +
    rect(113, 365, 174, 174, 3, "#30413d", "#8d9d8b") + can(135, 391, 128, 93, "PoE", "5 V") +
    parts(331, 317, 10, 3) + parts(120, 560, 13, 3) + rj45(305, 519, 143, 173) +
    label(196, 336, "T-ETH ELite", 14) + label(273, 711, "J1 1/2 at top • 39/40 at bottom", 9, "#3b535b"),
});

const poeInner = "GPIO36 GPIO34 GPIO16 GPIO33 GPIO4 GPIO2 3V3 3V3";
const poeOuter = "GPIO39 GPIO35 GPIO32 GPIO12 GPIO15 GPIO14 GND GND";
const internet = entry({
  id: "lilygo-t-internet-poe-v1-0", name: "LILYGO T-Internet-POE V1.0", short: "T-Internet-POE", manufacturer: "LILYGO", esp32: true,
  width: 800, height: 515, boardBounds: [[100, 55, 610, 386]],
  subtitle: "ESP32-WROOM-32 / LAN8720 / XY_Internet_POE V1.0",
  source: eth + "image/pinmap/T-ETH-POE.jpg", cad: eth + "shell/T-ETH-POE.DXF",
  description: "XY_Internet_POE V1.0 component-side board from the manufacturer pinmap, matched to T-Internet-POE.pdf. RJ45 is at the left and the power-only USB-C port at the right. All 16 P0 expansion contacts and six P1 programming contacts are present. P0.1/2 are the bottom outside/inside pair in this view; P0.15/16 are the top pair. An external 3.3 V UART adapter is needed for programming. GPIO2/14/15 share microSD signals. The fitted Ethernet jack, microSD socket and USB power port are outside the jumper-contact scope. Outline and placement are representative; this is not the V2 electrical variant.",
  tags: ["lilygo", "ttgo", "t-internet-poe", "internet poe", "esp32", "lan8720", "ethernet", "poe", "rmii", "sd card", "uart"],
  functions: { GPIO1: "UART0 TX on P1.2.", GPIO3: "UART0 RX on P1.1.", GPIO0: "BOOT strapping input/GPIO on P1.3.", GPIO2: "Shared microSD MISO.", GPIO14: "Shared microSD clock.", GPIO15: "Shared microSD MOSI." },
  pinLabels: { "P1.1": "RXD", "P1.2": "TXD" },
  contacts: [
    ...readyRow("P0", poeInner, 653, 128, 0, 25, { numbers: [16, 14, 12, 10, 8, 6, 4, 2], side: "left", captions: captions(poeInner) }),
    ...readyRow("P0", poeOuter, 678, 128, 0, 25, { numbers: [15, 13, 11, 9, 7, 5, 3, 1], side: "right", captions: captions(poeOuter) }),
    ...readyRow("P1", "GPIO3 GPIO1 GPIO0 RST GND 3V3", 350, 76, 24, 0, { side: "top", captions: ["RXD", "TXD", "IO0", "RST", "GND", "3V3"], overrides: Object.fromEntries([0, 1, 2, 3, 4, 5].map(i => [i, { font: 6.3 }])) }),
  ],
  draw: () => pcb(100, 55, 610, 386) + [120, 690].flatMap(x => [76, 419].map(y => mount(x, y))).join("") +
    rj45(76, 114, 174, 146, "left") + chip(293, 139, 76, 73, "LAN8720", 10) +
    readyAntenna(466, 37, 151) + can(465, 107, 153, 141, "ESP32", "WROOM-32") +
    magnetics(287, 269, 114, 54) + can(293, 338, 134, 84, "PoE", "3.3 V") +
    rect(492, 339, 135, 96, 3, "#afb9b2", "#e6e8d7") + label(559, 382, "microSD", 10, "#516259") +
    usb(696, 340, 54) + tactile(535, 292) + tactile(584, 292) + parts(264, 235, 13, 2) +
    label(407, 474, "COMPONENT SIDE • P1 UART / BOOT / reset", 9, "#3b535b"),
});

const simLeft = "DC1 GND GPIO16 GPIO17 GPIO18 GPIO8 GPIO3 GPIO46 GPIO9 GPIO10 GPIO11 GPIO12 GPIO13 GPIO14 GND DC5";
const simRight = "DC1 DC1 GPIO1 GPIO2 GPIO43 GPIO44 GPIO37 GPIO36 GPIO35 GPIO0 GPIO45 GPIO48 GPIO47 GPIO21 GND VSYS";
const sim7080 = entry({
  id: "lilygo-t-sim7080g-s3-v1-0", name: "LILYGO T-SIM7080G-S3 V1.0", short: "T-SIM7080G-S3", manufacturer: "LILYGO",
  width: 700, height: 1070, boardBounds: [[80, 45, 300, 955], [459, 105, 165, 681]],
  subtitle: "ESP32-S3 N16R8 / SIM7080G / AXP2101 / Cat-M + NB-IoT",
  source: sim + "schematic/T-SIM7080G_Schematic.pdf", cad: sim + "dwg/T-SIM7080G.DXF",
  description: "AXP2101 T-SIM7080G-S3, V1.0 schematic dated 2024-03-29. Component side has the ESP32-S3 at the top, modem at the bottom and a separately identified mirrored rear battery/UART view. All 32 P1/P2 header contacts, four P4 UART contacts, two solar contacts, two battery terminals, four 1.8 V modem service pads and the documented USB5V solder joint are represented. P2 numbers descend from top to bottom; P1 numbers ascend. GPIO35/36/37 are exposed shared PSRAM nets and must not be used for external wiring on N16R8 assemblies. DC1 must stay at 3.3 V. The camera FPC, RF, SIM, card and USB connectors are fitted cable/card interfaces outside the jumper-contact scope. Outline, small parts and off-board termination carrier are representative.",
  tags: ["lilygo", "t-sim7080g-s3", "sim7080g", "esp32-s3", "axp2101", "cellular", "lte-m", "cat-m", "nb-iot", "gnss", "gps", "solar", "18650", "camera"],
  types: { SOLAR_IN: "power_in", VBUS: "power_in" },
  pinLabels: { "P1.5": "TXD", "P1.6": "RXD", "P4.1": "RXD", "P4.2": "TXD", "P3.2": "BAT+", "USB5V.VBUS": "5V" },
  notes: Object.fromEntries([35, 36, 37].map(gpio => [`GPIO${gpio}`, "Reserved Octal PSRAM contact on the N16R8 assembly. Its voltage domain belongs to the module memory interface; do not connect external circuits."])),
  functions: { GPIO35: "Reserved for Octal PSRAM on N16R8 boards; do not connect external circuits.", GPIO36: "Reserved for Octal PSRAM on N16R8 boards; do not connect external circuits.", GPIO37: "Reserved for Octal PSRAM on N16R8 boards; do not connect external circuits.", GPIO46: "ESP32-S3 input-only strapping GPIO.", GPIO43: "ESP32 UART0 TX, shared by main header and rear P4.2.", GPIO44: "ESP32 UART0 RX, shared by main header and rear P4.1.", GPIO3: "Shared modem ring indicator at the host side of the level shifter.", GPIO1: "Camera SCCB clock when a camera is attached.", GPIO2: "Camera SCCB data when a camera is attached.", SOLAR_IN: "CN3065 input, 4.4–6 V and factory 500 mA charge-current setting. A battery is required for solar-powered operation." },
  contacts: [
    ...readyRow("P2", simLeft, 94, 109, 0, 25, { numbers: descending(16), side: "left", captions: ["DC1", "GND", "16", "17", "18", "8", "3", "46", "9", "10", "11", "12", "13", "14", "GND", "DC5"] }),
    ...readyRow("P1", simRight, 366, 109, 0, 25, { side: "right", captions: ["DC1", "DC1", "1", "2", "TXD", "RXD", "37*", "36*", "35*", "0", "45", "48", "47", "21", "GND", "VSYS"] }),
    ...readyRow("P10", "GND SOLAR_IN", 88, 629, 0, 21, { numbers: [1, 2], side: "left", captions: ["−", "+"] }),
    ...readyRow("P4", "GPIO44 GPIO43 GND DC1", 522, 255, 15, 0, { numbers: [1, 2, 3, 4], side: "bottom", captions: ["RX", "TX", "G", "3V"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 6.3 }])) }),
    ...readyRow("P3", "VBAT BAT_NEG", 548, 306, 0, 423, { numbers: [2, 1], side: "right", captions: ["BAT+", "BAT−"],
      overrides: { 0: { side: "top", labelDy: -18 }, 1: { side: "bottom", labelDy: 18 } } }),
    ...readyRow("P9", "MODEM_RX", 367, 940, 0, 0, { numbers: [1], side: "right", captions: ["SRX"] }),
    ...readyRow("P8", "MODEM_TX", 367, 965, 0, 0, { numbers: [1], side: "right", captions: ["STX"] }),
    ...readyRow("P7", "MODEM_LOG_TX", 143, 791, 0, 0, { numbers: [1], side: "left", captions: ["LOG"] }),
    ...readyRow("P5", "MODEM_1V8", 246, 991, 0, 0, { numbers: [1], side: "bottom", captions: ["1V8"] }),
    // Manufacturer photo identifies the USB-C 5 V solder joint beside the PMU power inductor.
    // https://github.com/Xinyuan-LilyGO/LilyGo-Modem-Series/blob/main/docs/en/SimshieldUsageGuide/images/H606-SIM7080.png
    ...readyRow("USB5V", "VBUS", 141, 548, 0, 0, { numbers: ["VBUS"], side: "right", captions: ["5V"], overrides: { 0: { shape: "square", solid: true, radius: 4 } } }),
  ],
  draw: () => pcb(80, 45, 300, 955) + [97, 363].flatMap(x => [63, 980].map(y => mount(x, y))).join("") +
    readyAntenna(138, 51, 180) + can(141, 131, 170, 202, "ESP32-S3", "N16R8") +
    readySocket(151, 386, 160, 39, "Camera 24P") + label(230, 441, "T-SIM7080G-S3", 12) +
    parts(125, 507, 16, 3) + chip(192, 567, 69, 71, "AXP2101", 9) +
    usb(67, 522, 41) + usb(67, 712, 41) + readySocket(76, 611, 30, 59, "", true) +
    rect(280, 494, 91, 87, 3, "#b6beb5", "#e0e7d8") + label(326, 534, "microSD", 8, "#4a5e54") +
    rect(258, 670, 109, 110, 3, "#b6beb5", "#e0e7d8") + label(313, 719, "nano SIM", 9, "#4a5e54") +
    can(143, 814, 166, 142, "SIM7080G", "Cat-M / NB-IoT") + rf(94, 904, "LTE") + rf(312, 990, "GNSS") +
    tactile(95, 746) + tactile(95, 773) + tactile(95, 800) + parts(119, 655, 9, 3) +
    pcb(459, 105, 165, 681) + readySocket(510, 234, 77, 38, "") +
    rect(491, 290, 113, 468, 8, "#121d21", "#7f8d84") + rect(515, 295, 66, 23, 2, "#b8c2ae") +
    path("M513 721l66 -8l-66 -8l66 -8l-66 -8", "none", "#b8c2ae", 3) +
    label(548, 495, "18650", 16) + label(548, 514, "+ upper / − lower", 8) +
    label(545, 827, "REAR / mirrored left–right", 10, "#3b535b") + label(545, 848, "P4: RX / TX / GND / DC1", 8, "#3b535b") +
    label(238, 1037, "* GPIO35–37: reserved Octal PSRAM nets", 9, "#3b535b"),
});

export default defineFamily("lilygo-connectivity", [liteS3, lite32, elite, internet, sim7080]);
