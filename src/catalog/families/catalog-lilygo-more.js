import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect, tactile, usb } from "../shared/svg.js";
import { readyAntenna, readyBoard, readyRow, readySocket } from "../shared/wire-board.js";

const repo = (name, file, branch = "main") => `https://github.com/Xinyuan-LilyGO/${name}/blob/${branch}/${file}`;
const pcb = (x, y, w, h) => rect(x, y, w, h, 7, "#222e2f", "#829286");
const hole = (x, y) => circle(x, y, 5.5, "#bdab74") + circle(x, y, 3.1, "#f3f5ee");
const shield = (x, y, w, h, name) => rect(x, y, w, h, 2, "#b3bcba", "#e4e8dd") + label(x + w / 2, y + h / 2, name, 10, "#455954");
const smallParts = (x, y, cols, rows) => Array.from({ length: cols * rows }, (_, i) => rect(x + i % cols * 13, y + Math.floor(i / cols) * 12, 8, 4, .6, i % 3 ? "#b4a580" : "#3c4647", "#8c9c97")).join("");
const silkNumbers = values => values.map((x, i) => x === "GND" ? `GND${i + 1}` : x.replace("GPIO", "IO"));
const gpioCaptions = values => values.map(x => x.replace("GPIO", ""));

const qtLeft = "GPIO34 GPIO33 GPIO39 GPIO38 GPIO37 GPIO36 GPIO35".split(" ");
const qtRight = "5V GND 3V3 GPIO16 GPIO17 GPIO18 GPIO48".split(" ");
const qt = readyBoard({
  id: "lilygo-t-qt-pro-v1-3", name: "LILYGO T-QT Pro V1.3", short: "T-QT Pro", manufacturer: "LILYGO",
  width: 680, height: 470, boardBounds: [[92, 36, 228, 365], [426, 61, 178, 285]],
  subtitle: "ESP32-S3 / 0.85-inch GC9107 / PCB 22-11-15",
  source: repo("T-QT", "schematic/T-QT-Pro.pdf"), cad: repo("T-QT", "3D_file/T_QT_Pro.stp"),
  description: "V1.3 PCB shown in the manufacturer T-QT-Pro schematic and pinmap; N4R2 and N8 memory variants share these contacts. Front display-side view with USB at the bottom; the separate rear view exposes the four-contact CNC1 UART socket and named BAT/GND solder lands. All 14 through-header contacts, four UART contacts and two battery lands are present. P1/P2/CNC1 terminal numbers follow the schematic; BAT.VBAT/BAT.GND identify the printed battery lands, which have no published pad numbers. Display and RF ports are fitted interfaces. Outline and small-part geometry are representative.",
  tags: ["lilygo", "t-qt", "t-qt pro", "esp32-s3", "gc9107", "lcd", "wifi", "bluetooth", "battery", "uart"],
  functions: { GPIO43: "UART0 TX at CNC1.3.", GPIO44: "UART0 RX at CNC1.4.", GPIO34: "3.3 V general-purpose signal; this S3 GPIO is not an input-only original-ESP32 pin." },
  contacts: [
    ...readyRow("P1", qtLeft, 104, 117, 0, 29, { side: "left", captions: gpioCaptions(qtLeft) }),
    ...readyRow("P2", qtRight, 308, 117, 0, 29, { side: "right", captions: gpioCaptions(qtRight) }),
    ...readyRow("CNC1", "GND 3V3 GPIO43 GPIO44", 493, 317, 10, 0, { side: "bottom", captions: ["1", "2", "3", "4"], overrides: { 0: { font: 6 }, 1: { font: 6 }, 2: { font: 6 }, 3: { font: 6 } } }),
    ...readyRow("BAT", "VBAT GND", 436, 294, 0, 19, { side: "left", numbers: ["VBAT", "GND"], captions: ["BAT+", "BAT−"] }),
  ],
  draw: () => pcb(92, 36, 228, 365) + hole(107, 52) + hole(305, 52) +
    label(206, 56, "LILYGO", 14) + rect(103, 81, 206, 249, 2, "#aeb6ad", "#c8d3c3") +
    rect(110, 88, 192, 230, 1, "#101b20", "#48595a") + label(206, 188, "T-QT Pro", 18, "#8abcc3") +
    label(206, 212, "128 × 128", 10, "#668e97") + tactile(112, 359) + tactile(284, 359) + usb(179, 373, 54) +
    pcb(426, 61, 178, 285) + readyAntenna(468, 69, 91) + chip(475, 143, 76, 76, "ESP32-S3", 9) +
    smallParts(454, 242, 8, 3) + readySocket(482, 303, 54, 30, "") +
    label(515, 367, "REAR / UART + battery lands", 9, "#405655") + label(515, 385, "CNC1: 1 G / 2 3V / 3 TX / 4 RX", 7, "#405655"),
});

const t7Li = "RST GPIO15 GPIO16 GPIO18 GPIO17 GPIO8 GPIO5 3V3 GPIO39 GPIO10".split(" ");
const t7Lo = "GND NC GPIO48 GPIO47 GPIO46 GPIO45 GPIO42 GPIO21 GPIO9 GPIO11".split(" ");
const t7Ri = "GPIO43 GPIO44 GPIO14 GPIO13 GPIO3 GPIO12 GND 5V GPIO40 GPIO7".split(" ");
const t7Ro = "GND GPIO3 GPIO12 GPIO38 GPIO41 GPIO4 GPIO0 GPIO2 GPIO1 GPIO6".split(" ");
const t7 = readyBoard({
  id: "lilygo-t7-s3-v1-1", name: "LILYGO T7-S3 V1.1", short: "T7-S3 V1.1", manufacturer: "LILYGO",
  width: 750, height: 580, boardBounds: [[104, 39, 321, 478], [503, 87, 183, 367]],
  subtitle: "ESP32-S3-WROOM-1-N16R8 / PCB 22-07-28",
  source: repo("T7-S3", "assets/image/t7-s3_v1.1_pinmap.jpg"), cad: repo("T7-S3", "3D_File/T7S3-V1.2.stp"),
  description: "V1.1 component-side view, antenna at the top and USB at the bottom, matched to the official V1.1 pinmap. All 40 two-row expansion contacts and the four-contact rear I²C socket are represented. The battery socket is illustrated as a fitted port; its polarity is not established by the V1.1 pinmap. HLI/HLO/HRI/HRO are WirePad row references using printed signal names, not manufacturer header sequence numbers. GPIO3 and GPIO12 appear twice; the inner positions are printed 3-1 and 12-1. TCK/TDO/TDI/TMS correspond to GPIO39/40/41/42. The linked V1.2 STEP is a later mechanical reference, not a verified V1.1 mating land pattern. Canvas and termination-carrier geometry are representative.",
  tags: ["lilygo", "t7-s3", "t7", "esp32-s3", "wifi", "bluetooth", "qwiic", "stemma qt", "battery", "jtag"],
  types: { GPIO46: "input" },
  functions: { GPIO17: "Shared onboard LED.", GPIO2: "Shared battery-voltage measurement input.", GPIO14: "Rear I²C SDA, shared with the expansion header.", GPIO13: "Rear I²C SCL, shared with the expansion header.", GPIO3: "ESP32-S3 strapping pin; both exposed contacts share the same signal.", GPIO12: "Both exposed contacts share the same signal." },
  contacts: [
    ...readyRow("HLI", t7Li, 149, 153, 0, 27, { side: "right", numbers: silkNumbers(t7Li), captions: ["RST", "15", "16", "18", "17", "8", "5", "3V3", "TCK", "10"], overrides: Object.fromEntries(t7Li.map((_, i) => [i, { font: 6.3 }])) }),
    ...readyRow("HLO", t7Lo, 122, 153, 0, 27, { side: "left", numbers: silkNumbers(t7Lo), captions: ["GND", "NC", "48", "47", "46", "45", "TMS", "21", "9", "11"] }),
    ...readyRow("HRI", t7Ri, 381, 153, 0, 27, { side: "left", numbers: silkNumbers(t7Ri), captions: ["TXD", "RXD", "14", "13", "3-1", "12-1", "GND", "5V", "TDO", "7"], overrides: Object.fromEntries(t7Ri.map((_, i) => [i, { font: 6.3 }])) }),
    ...readyRow("HRO", t7Ro, 408, 153, 0, 27, { side: "right", numbers: silkNumbers(t7Ro), captions: ["GND", "3", "12", "38", "TDI", "4", "0", "2", "1", "CLK"] }),
    ...readyRow("I2C", "3V3 GND GPIO14 GPIO13", 532, 426, 10, 0, { side: "bottom", numbers: ["3V3", "GND", "SDA", "SCL"], captions: ["3V", "G", "14", "13"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 6 }])) }),
  ],
  draw: () => pcb(104, 39, 321, 478) + hole(124, 59) + hole(405, 59) + readyAntenna(206, 52, 121) +
    shield(199, 137, 130, 240, "ESP32-S3") + label(264, 394, "T7-S3 V1.1", 12) + smallParts(196, 411, 9, 3) +
    usb(287, 485, 60) + tactile(115, 477) + tactile(391, 477) + rect(191, 477, 57, 24, 2, "#aab3a9", "#dfdfcd") + rect(221, 476, 13, 28, 1, "#e5e4d8") +
    pcb(503, 87, 183, 367) + label(594, 135, "LILYGO", 18) + label(594, 161, "T7S3-V1.1", 10) +
    smallParts(525, 192, 10, 6) + readySocket(520, 411, 54, 30, "") + readySocket(625, 347, 26, 47, "", true) +
    usb(586, 431, 41) + label(595, 480, "REAR / I²C socket", 9, "#405655"),
});

const picoLeft = "C3_IO9 C3_IO8 C3_IO2 C3_RST GND GND GP29 GP28 GP27 GND GND 3V3 GP24 GP23 GP21".split(" ");
const picoRight = "3V3 GP12 GP13 GP14 GP15 GP16 GP17 GP18 GP19 GP20 GND 5V".split(" ");
const pico = readyBoard({
  id: "lilygo-t-picoc3-v1-1", name: "LILYGO T-PicoC3 V1.1", short: "T-PicoC3", manufacturer: "LILYGO",
  width: 730, height: 680, boardBounds: [[99, 40, 263, 584], [467, 83, 181, 486]],
  subtitle: "RP2040 + ESP32-C3 / ST7789V / PCB 2022-02-22 V1.1",
  source: repo("T-PicoC3", "image/T-PicoC3_en.jpg"), cad: repo("T-PicoC3", "Schematic/T-PicoC3.pdf"), cadLabel: "T-PicoC3 manufacturer schematic / power and debug reference",
  description: "Front display-side view of the V1.1 board in the official pinmap; rear inset locates the RP2040 debug header, ESP32-C3 UART header and battery socket. All 27 main-header contacts and ten rear contacts are represented. P3/P4 numbering follows the physical top-to-bottom order in the schematic. The production photo prints GND at P3.5/P3.6 where the early schematic shows GPIO11/GPIO10; this entry follows that exact V1.1 photo. RP2040 and ESP32-C3 signal names are kept distinct. USB-C orientation selects which MCU is connected. Fitted display/RF/USB ports are outside the jumper-wire scope. Header/socket placement and outline are representative.",
  tags: ["lilygo", "t-picoc3", "t pico c3", "rp2040", "esp32-c3", "lcd", "st7789", "wifi", "bluetooth", "battery", "swd"],
  types: { C3_RST: "input", SWDCLK: "input", TX: "output", RX: "input" },
  functions: { C3_IO9: "ESP32-C3 boot-strapping input/GPIO.", C3_IO8: "ESP32-C3 boot-strapping GPIO.", C3_IO2: "ESP32-C3 GPIO2 / ADC input; not RP2040 GP2.", GP27: "RP2040 ADC1 input / GPIO.", GP28: "RP2040 ADC2 input / GPIO.", GP29: "RP2040 ADC3 input / GPIO.", TX: "ESP32-C3 UART0 TX, GPIO21.", RX: "ESP32-C3 UART0 RX, GPIO20." },
  contacts: [
    ...readyRow("P3", picoLeft, 112, 131, 0, 26, { side: "left", captions: ["C3 9", "C3 8", "C3 2", "C3 RST", "GND", "GND", "29", "28", "27", "GND", "GND", "3V3", "24", "23", "21"] }),
    ...readyRow("P4", picoRight, 350, 131, 0, 26, { side: "right", captions: picoRight.map(x => x.replace("GP", "")) }),
    ...readyRow("P5", "3V3 SWDCLK SWDIO GND", 487, 135, 0, 16, { side: "right", captions: ["3V3", "CLK", "DIO", "GND"] }),
    ...readyRow("P6", "TX RX GND 3V3", 626, 488, 0, 16, { side: "left", captions: ["TX", "RX", "G", "3V3"] }),
    ...readyRow("P2", "VBAT GND", 535, 456, 16, 0, { side: "top", captions: ["+", "−"] }),
  ],
  draw: () => pcb(99, 40, 263, 584) + hole(115, 57) + hole(346, 57) + readyAntenna(164, 46, 127) +
    rect(136, 105, 190, 371, 1, "#a1aaa1", "#d2dccd") + rect(142, 111, 178, 351, 1, "#122029", "#52686d") +
    label(231, 255, "T-PicoC3", 22, "#81bbc4") + label(231, 285, "RP2040 + C3", 13, "#5c8f9b") +
    tactile(119, 569) + tactile(329, 569) + usb(205, 596, 55) +
    pcb(467, 83, 181, 486) + label(557, 105, "LILYGO", 15) + chip(523, 184, 64, 63, "RP2040", 8) +
    chip(529, 309, 60, 60, "ESP32-C3", 8) + smallParts(508, 264, 9, 3) +
    readySocket(520, 441, 47, 30, "") + usb(533, 543, 47) +
    label(558, 593, "REAR / SWD, C3 UART, battery", 9, "#405655"),
});

const encoder = readyBoard({
  id: "lilygo-t-encoder-pro-v1-0", name: "LILYGO T-Encoder Pro V1.0", short: "T-Encoder Pro", manufacturer: "LILYGO",
  width: 700, height: 390, boardBounds: [[380, 45, 269, 270]],
  subtitle: "ESP32-S3R8 / AMOLED touch / rotary encoder / 2024-02-02",
  source: repo("T-Encoder-Pro", "project/%5BSCH%5D%5BT-Encoder-Pro_V1.0%5D.pdf", "arduino-esp32-libs_V3.0.7"),
  cadLabel: "T-Encoder-Pro V1.0 manufacturer schematic / connector pin numbers",
  description: "Assembled knob front and a separate rear view matching the manufacturer photo. All eight electrical contacts in the two rear four-pin sockets are represented. CN1 is I²C: 1 GND, 2 3.3 V, 3 SDA/GPIO16, 4 SCL/GPIO15. CN2 is UART: 1 GND, 2 5 V, 3 TX/GPIO43, 4 RX/GPIO44. Socket shell mounting pads are not independent wiring contacts. Pin numbers appear beside the socket contacts; full functions are available on hover. Display revision may be SH8601/CHSC5816 or CO5300/CST816, with the same external socket wiring. Enclosure and socket geometry are representative; use the keyed original cables.",
  tags: ["lilygo", "t-encoder", "t-encoder pro", "encoder", "knob", "esp32-s3", "amoled", "touch", "i2c", "uart", "wifi", "bluetooth"],
  functions: { GPIO16: "External I²C SDA / schematic E_SDA. U3 package pin 22 is GPIO16 / XTAL_32K_N.", GPIO15: "External I²C SCL / schematic E_SCL. U3 package pin 21 is GPIO15 / XTAL_32K_P.", GPIO43: "External UART0 TX. Configure firmware UART routing; default USB CDC can suppress hardware UART output.", GPIO44: "External UART0 RX." },
  contacts: [
    ...readyRow("CN1", "GND 3V3 GPIO16 GPIO15", 426, 238, 8, -3, { side: "top", captions: ["1", "2", "3", "4"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 5.5, radius: 2 }])) }),
    ...readyRow("CN2", "GND 5V GPIO43 GPIO44", 487, 290, 8, 0, { side: "bottom", captions: ["1", "2", "3", "4"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { font: 5.5, radius: 2 }])) }),
  ],
  draw: () => circle(183, 182, 139, "#253031", "#65746e") + circle(183, 182, 128, "#111a1d", "#879086") +
    Array.from({ length: 40 }, (_, i) => { const a = i * Math.PI / 20; return line(183 + Math.cos(a) * 130, 182 + Math.sin(a) * 130, 183 + Math.cos(a) * 136, 182 + Math.sin(a) * 136, "#65716b", .8); }).join("") +
    circle(183, 182, 111, "#dce5c7", "#2c3b3b") + label(183, 137, "T-ENCODER", 18, "#456061") +
    [0, 1, 2].map(i => circle(137 + i * 46, 194, 14, ["#50707c", "#6b846e", "#597485"][i]) + label(137 + i * 46, 194, ["−", "OK", "+"][i], 9)).join("") +
    path("M461 45H556Q590 45 611 79L646 238Q659 298 602 315H438Q381 301 390 252L413 94Q420 45 461 45Z", "#263031", "#73827a", 2) +
    label(520, 95, "LILYGO", 22, "#42504b") + hole(451, 126) + hole(569, 146) + hole(497, 247) +
    rect(415, 224, 49, 22, 2, "#d8dac9", "#9fae9f") + rect(479, 280, 50, 22, 2, "#d8dac9", "#9fae9f") +
    usb(579, 202, 55) + tactile(599, 114) +
    label(520, 341, "REAR / CN1 I²C • CN2 UART", 9, "#405655"),
});

const entries = [qt, t7, pico, encoder].map(entry => {
  const nets = new Map();
  for (const pin of entry.component.pins) {
    if (pin.label === "NC") continue;
    if (!nets.has(pin.label)) nets.set(pin.label, []);
    nets.get(pin.label).push(pin.id);
  }
  entry.component.internalConnections = [...nets.values()].filter(ids => ids.length > 1);
  return { component: entry.component, render: entry.art, footprint: entry.footprint, model: entry.model };
});

export default defineFamily("lilygo-more", entries);
