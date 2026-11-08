import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect, tactile, usb } from "../shared/svg.js";
import { readyAntenna, readyBoard, readyRow, readySocket } from "../shared/wire-board.js";

const github = (repo, file, branch = "master") => `https://github.com/Xinyuan-LilyGO/${repo}/blob/${branch}/${file}`;
const docs = (family, product, image) => github("documentation", `public/products/${family}/${product}/index/image/${image}`);
const pcb = (x, y, w, h, r = 7) => rect(x, y, w, h, r, "#252f30", "#809185");
const hole = (x, y) => circle(x, y, 6, "#baa36c") + circle(x, y, 3.6, "#edf2e9");
const shield = (x, y, w, h, title) => rect(x, y, w, h, 2, "#b9c0b8", "#e3e8db") + label(x + w / 2, y + h / 2, title, 10, "#425652");
const passives = (x, y, cols, rows) => Array.from({ length: cols * rows }, (_, i) => rect(x + i % cols * 13, y + Math.floor(i / cols) * 11, 8, 4, .5, i % 3 ? "#b4a17a" : "#374343", "#92a39a")).join("");
const display = (x, y, w, h, title) => rect(x, y, w, h, 2, "#121b21", "#788a87") +
  rect(x + 6, y + 6, w - 12, h - 12, 1, "#14272e", "#334e56") + label(x + w / 2, y + h * .42, title, 18, "#8fc2ca") +
  label(x + w / 2, y + h * .59, "LILYGO", 11, "#638f99");
const rowNumbers = (start, length, step = 1) => Array.from({ length }, (_, i) => start + i * step);
const gpioCaptions = values => values.map(value => value.replace("GPIO", ""));

function entry(spec) {
  const result = readyBoard({ manufacturer: "LILYGO", ...spec });
  result.component.references = spec.references;
  const nets = new Map();
  for (const pin of result.component.pins) {
    if (pin.type === "no_connect") continue;
    if (!nets.has(pin.label)) nets.set(pin.label, []);
    nets.get(pin.label).push(pin.id);
  }
  result.component.internalConnections = [...nets.values()].filter(ids => ids.length > 1);
  return { component: result.component, render: result.art, footprint: result.footprint, model: result.model };
}

const deckSource = github("T-Deck", "schematic/schematic.pdf");
const deckPhoto = docs("t-deck-series", "t-deck", "t-deck-pin-en.jpg");
const deck = entry({
  id: "lilygo-t-deck-sx1262-20230601", name: "LILYGO T-Deck SX1262 (2023 design)", short: "T-Deck SX1262",
  width: 950, height: 690, subtitle: "ESP32-S3 / SX1262 / keyboard + trackball / 2023-06-01 schematic",
  source: deckSource, references: [deckSource, deckPhoto], cad: github("T-Deck", "shell/T-Deck-PCB-3D.stp"),
  description: "Original T-Deck SX1262 assembly matched to the manufacturer 2023-06-01 schematic and original pinmap; the schematic does not mark a PCB revision. Front keyboard/display view and a separate rear component-side view keep the actual contact positions. The ten wiring contacts are the four P8 UART socket contacts and six J1 ESP32-C3 keyboard programming pads, captioned UART in the keyboard schematic. P8.4/3 are ESP32-S3 RX44/TX43; keyboard J1.6/5 are ESP32-C3 TX21/RX20. The fitted speaker, battery, USB, card, display and RF connections are illustrated as assembled ports. GPIO10 enables peripheral power. Board details and the off-board termination carrier are representative. T-Deck Plus has a different GPS/Grove assignment and is a separate device.",
  tags: ["lilygo", "t-deck", "t deck", "esp32-s3", "esp32-c3", "sx1262", "lora", "meshtastic", "keyboard", "trackball", "lcd", "uart"],
  types: { C3_TX21: "output", C3_RX20: "input", C3_BOOT9: "input", C3_RST: "input" },
  functions: { GPIO43: "ESP32-S3 UART0 TX at P8.3.", GPIO44: "ESP32-S3 UART0 RX at P8.4.", C3_TX21: "ESP32-C3 keyboard UART TX, GPIO21; distinct from the main ESP32-S3.", C3_RX20: "ESP32-C3 keyboard UART RX, GPIO20.", C3_BOOT9: "Keyboard ESP32-C3 download strap, GPIO9; hold low while resetting for serial programming.", C3_RST: "Active-low keyboard ESP32-C3 reset / CHIP_EN." },
  boardBounds: [[55, 55, 390, 570], [465, 55, 390, 570]],
  contacts: [
    ...readyRow("P8", "GPIO44 GPIO43 3V3 GND", 840.7, 126, 0, 16, { side: "right", numbers: [4, 3, 2, 1], captions: ["RX44", "TX43", "3V3", "GND"] }),
    ...readyRow("J1", "C3_TX21 C3_RX20 C3_BOOT9 C3_RST GND 3V3", 842, 386, 0, 17, { side: "right", numbers: [6, 5, 4, 3, 2, 1], captions: ["C3 TX21", "C3 RX20", "C3 BOOT", "C3 RST", "GND", "3V3"] }),
  ],
  draw: () => `<g transform="translate(55 0) scale(1.3 1) translate(-55 0)">` +
    path("M55 55H355V535Q355 625 265 625H145Q55 625 55 535Z", "#252f30", "#809185") +
    display(70, 70, 270, 270, "T-Deck") + rect(66, 351, 278, 60, 2, "#303b3b", "#667770") + `<ellipse cx="205" cy="381" rx="16.1538" ry="21" fill="#d2d8ba" stroke="#8e9f8f"/>` +
    [0, 1, 2, 3].map(row => Array.from({ length: row === 3 ? 7 : 10 }, (_, col) => rect(74 + col * (row === 3 ? 38 : 26), 426 + row * 38, row === 3 ? 33 : 23, 32, 3, "#111c21", "#66746d") +
      label(85 + col * (row === 3 ? 38 : 26), 442 + row * 38, ["QWERTYUIOP", "ASDFGHJKL*", "ZXCVBNM<>/", "^@_ #?+"][row][col], 9, "#b6c8be")).join("")).join("") +
    label(205, 601, "LILYGO T-Keyboard", 12) + "</g>" + `<g transform="translate(465 0) scale(1.3 1) translate(-465 0)">` +
    path("M465 55H765V535Q765 625 675 625H555Q465 625 465 535Z", "#252f30", "#809185") + readyAntenna(571, 63, 100) +
    shield(568, 107, 90, 112, "ESP32-S3") + rect(464, 116, 68, 94, 2, "#b5bfb9", "#e0e6d9") + readySocket(741, 111, 29, 77, "", true) +
    chip(649, 262, 62, 61, "ES7210", 8) + passives(506, 280, 8, 5) +
    rect(583, 351, 47, 104, 4, "#101d21", "#586a63") + path("M636 341L649 381V469H626", "none", "#a9945d", 8) +
    shield(654, 500, 96, 75, "SX1262") + readySocket(498, 536, 46, 26, "BAT") + readySocket(560, 536, 46, 26, "SPK") +
    tactile(744, 246) + usb(593, 604, 49) + label(615, 650, "REAR / main UART + keyboard service pads", 9, "#405655") + "</g>",
});

const ccSource = github("T-Embed-CC1101", "hardware/T-Embed-CC1101%20V1.0%2024-07-29.pdf");
const ccPhoto = docs("t-embed-series", "t-embed-cc1101", "t-embed-cc1101-en.jpg");
const embedCc = entry({
  id: "lilygo-t-embed-cc1101-v1-0", name: "LILYGO T-Embed CC1101 V1.0", short: "T-Embed CC1101",
  width: 900, height: 700, subtitle: "ESP32-S3 / CC1101 FSK-OOK / PN532 / 2024-07-29 schematic",
  source: ccSource, references: [ccSource, ccPhoto, "https://www.jst-mfg.com/product/pdf/eng/eSH.pdf"], cad: github("T-Embed-CC1101", "3D_files/T-Embed%20CC1101.stp"),
  description: "V1.0 2024-07-29 CC1101 FSK/OOK and PN532 NFC assembly with display, rotary encoder, infrared and audio. Front and rear cover views are accompanied by an enlarged end-connector mating-face view, PCB below the contacts. The eight external wiring contacts are P6 I²C (GND, 3.3 V, SDA8, SCL18) and P1 UART (GND, 3.3 V, TX43, RX44). Both sockets use four electrical circuits; schematic pads 5/6 are housing ground tabs. The UART socket is not an I²C bus despite the common Qwiic-style housing. Internal battery/speaker, fitted USB/card/RF and the NFC coil remain assembled interfaces. Enclosure and connector placement are representative; the footprint is an off-board cable carrier.",
  tags: ["lilygo", "t-embed", "t-embed cc1101", "esp32-s3", "cc1101", "fsk", "ook", "pn532", "nfc", "infrared", "encoder", "lcd", "i2c", "uart"],
  functions: { GPIO8: "I²C SDA, shared with PN532 and the BQ25896/BQ27220 power devices.", GPIO18: "I²C SCL, shared with PN532 and the power devices.", GPIO43: "UART0 TX, P1.3.", GPIO44: "UART0 RX, P1.4." },
  boardBounds: [[40, 35, 800, 210], [40, 300, 800, 210]],
  contacts: [
    ...readyRow("P6", "GND 3V3 GPIO8 GPIO18", 356, 602, 14, 0, { side: "bottom", captions: ["G", "3V", "8", "18"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.5, font: 6.5 }])) }),
    ...readyRow("P1", "GND 3V3 GPIO43 GPIO44", 488, 602, 14, 0, { side: "bottom", captions: ["G", "3V", "43", "44"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.5, font: 6.5 }])) }),
  ],
  draw: () => pcb(40, 35, 800, 210, 102) + rect(56, 49, 768, 182, 90, "none", "#aab4aa") +
    display(167, 74, 398, 133, "Sub-GHz / NFC") + circle(697, 140, 78, "#374345", "#a5b1a3") + circle(697, 140, 55, "#202c2f", "#7b8c7b") +
    Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return circle(697 + 66 * Math.cos(a), 140 + 66 * Math.sin(a), 5.5, ["#c5504b", "#5e8e54", "#568793"][i % 3]); }).join("") +
    circle(697, 140, 17, "#62716e", "#a8b5a6") + circle(102, 132, 7, "#72816e") +
    pcb(40, 300, 800, 210, 103) + rect(187, 315, 469, 180, 9, "#141e22", "#829184") +
    path("M235 315V495M607 315V495", "none", "#aab9af", 8) + circle(211, 405, 13, "#b6c2b4") + circle(637, 405, 13, "#b6c2b4") +
    rect(319, 566, 246, 70, 12, "#4d5b5a", "#81918b") + readySocket(342, 584, 72, 35, "") + readySocket(474, 584, 72, 35, "") +
    label(378, 552, "P6 I²C", 10, "#405655") + label(510, 552, "P1 UART", 10, "#405655") +
    label(442, 658, "END / mating face • PCB below", 9, "#405655"),
});

const amoledLeft = "3V3 GPIO1 GPIO2 GPIO3 GPIO10 GPIO11 GPIO12 GPIO13 GPIO14 GPIO15 GND VBUS VBUS GPIO16".split(" ");
const amoledRight = "GND GND GPIO46 GPIO45 GPIO44 GPIO43 GPIO42 GPIO41 GPIO40 GND GND 3V3 3V3 GPIO39".split(" ");
const originalLeft = [...amoledLeft]; originalLeft[11] = "VSYS"; originalLeft[12] = "VSYS";
const originalSource = github("T-Display-S3-AMOLED", "schematic/T-DISPLAY-S3-AMOLED.pdf", "main");
const originalPhoto = docs("t-display-series", "t-display-s3-amoled", "t-display-s3-amoled-pinout.jpg");
const amoled = entry({
  id: "lilygo-t-display-s3-amoled-original", name: "LILYGO T-Display S3 AMOLED (original)", short: "T-Display S3 AMOLED",
  width: 740, height: 710, subtitle: "ESP32-S3 / 1.91-inch RM67162 / original green-LED design",
  source: originalSource, references: [originalSource, originalPhoto], cad: github("LilyGo-AMOLED-Series", "dimensions/T-Display-S3-AMOLED-Touch-PCB-3D.7z"),
  cadLabel: "Later AMOLED Touch manufacturer STEP archive / mechanical reference",
  description: "Original non-touch, green-LED GPIO38 design from the original T-DISPLAY-S3-AMOLED schematic; that drawing does not mark a PCB revision. Component-side view has USB at the bottom and the display-side view is a separate inset. All 28 P5/P6 header contacts, four P4 UART contacts and two P7 battery contacts are represented. The original P5.12/P5.13 are both 3.3 V; later Touch/Plus boards assign P5.13-equivalent to VBAT. P6.12/P6.13 carry VSYS, the diode-selected USB/battery system rail printed on the actual PCB, although the marketing diagram calls it VBUS. P7.1 is the positive/right contact and P7.2 the negative/left contact in the illustrated view, matching the printed polarity. The linked Touch STEP archive is a later mechanical reference only. Fitted display, USB and antenna are complete interfaces; geometry is representative.",
  tags: ["lilygo", "t-display", "t-display s3 amoled", "esp32-s3", "rm67162", "amoled", "display", "wifi", "bluetooth", "uart", "battery"],
  types: { GPIO46: "input" },
  functions: { GPIO43: "UART0 TX; P5.6 and P4.3 share this net.", GPIO44: "UART0 RX; P5.5 and P4.4 share this net.", GPIO45: "ESP32-S3 boot-strapping GPIO.", GPIO46: "ESP32-S3 input-only boot-strapping GPIO." },
  boardBounds: [[70, 35, 235, 615], [420, 35, 235, 615]],
  contacts: [
    ...readyRow("P6", originalLeft, 83, 130, 0, 27, { side: "left", captions: gpioCaptions(originalLeft) }),
    ...readyRow("P5", amoledRight, 292, 130, 0, 27, { side: "right", captions: gpioCaptions(amoledRight) }),
    ...readyRow("P4", "GND 3V3 GPIO43 GPIO44", 240, 627, 15, 0, { side: "bottom", captions: ["G", "3V", "43", "44"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.5, font: 6 }])) }),
    ...readyRow("P7", "GND VBAT", 163, 574, 23, 0, { side: "bottom", numbers: [2, 1], captions: ["−", "+"] }),
  ],
  draw: () => pcb(70, 35, 235, 615) + hole(83, 51) + hole(292, 51) + rect(123, 43, 138, 48, 2, "#b7baa0", "#e2e5d2") +
    path("M138 52H245V79H161V62H219", "none", "#485a4b", 5) + chip(144, 213, 86, 86, "ESP32-S3", 9) +
    chip(165, 321, 51, 63, "FLASH", 6) + passives(119, 415, 10, 5) + readySocket(145, 558, 63, 35, "") + readySocket(229, 611, 68, 34, "") +
    tactile(277, 537) + usb(163, 634, 47) + pcb(420, 35, 235, 615) + display(432, 60, 211, 532, "AMOLED") +
    circle(440, 615, 4, "#61a65c") + tactile(449, 620) + tactile(611, 620) + usb(512, 634, 47) +
    label(538, 677, "FRONT / 1.91-inch display", 9, "#405655"),
});

const plusSource = github("LilyGo-AMOLED-Series", "schematic/T-Display-S3-AMOLED-Plus.pdf");
const plusPhoto = docs("t-display-series", "t-display-s3-amoled-plus", "t-display-s3-amoled-plus-3.jpg");
const plusRight = [...amoledRight]; plusRight[12] = "VBAT";
const amoledPlus = entry({
  id: "lilygo-t-display-s3-amoled-plus-v1-0", name: "LILYGO T-Display S3 AMOLED Plus V1.0", short: "AMOLED Plus V1.0",
  width: 820, height: 720, subtitle: "ESP32-S3 / PMIC / PCF85063 RTC / 2024-10-21 schematic",
  source: plusSource, references: [plusSource, plusPhoto], cad: github("LilyGo-AMOLED-Series", "dimensions/T-Display-S3-AMOLED-Plus.7z"),
  description: "V1.0 2024-10-21 AMOLED Plus with PMIC, PCF85063 RTC, microSD and external antenna. Rear component-side view matches the official pinmap, with a separate display-side inset. All 28 P4/P5 main-header contacts and the eight CN1/CN2 socket contacts are represented. P4.13 is VBAT, while P4.12 is 3.3 V. CN2 carries shared I²C SDA3/SCL2; CN1 carries UART TX43/RX44, so the identical socket housings have different functions. GPIO1 is the PMIC interrupt and GPIO15 the RTC interrupt. GPIO11/12/13/14 share the fitted SD card. The battery socket is illustrated as a fitted charging port; VBAT is available at P4.13. The footprint is an off-board termination carrier and physical geometry is representative.",
  tags: ["lilygo", "t-display", "t-display amoled plus", "esp32-s3", "rm67162", "amoled", "pmic", "pcf85063", "rtc", "microsd", "i2c", "uart"],
  types: { GPIO46: "input", GPIO1: "open_collector", GPIO15: "open_collector" },
  functions: { GPIO1: "Shared PMIC interrupt output into the MCU; retain its open-drain interrupt function.", GPIO15: "PCF85063 RTC active-low interrupt output into the MCU; not an unloaded GPIO.", GPIO2: "Shared I²C SCL for touch, PMIC, RTC and CN2.4.", GPIO3: "Shared I²C SDA for touch, PMIC, RTC and CN2.3.", GPIO11: "Shared microSD chip select.", GPIO12: "Shared microSD MOSI.", GPIO13: "Shared microSD MISO.", GPIO14: "Shared microSD clock.", GPIO43: "UART0 TX, shared main header / CN1.3.", GPIO44: "UART0 RX, shared main header / CN1.4." },
  boardBounds: [[80, 45, 270, 610], [470, 45, 270, 610]],
  contacts: [
    ...readyRow("P5", amoledLeft, 96, 140, 0, 27, { side: "left", captions: gpioCaptions(amoledLeft) }),
    ...readyRow("P4", plusRight, 334, 140, 0, 27, { side: "right", captions: gpioCaptions(plusRight) }),
    ...readyRow("CN2", "GND 3V3 GPIO3 GPIO2", 102, 635, 13, 0, { side: "bottom", captions: ["G", "3V", "3", "2"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.5, font: 6.5 }])) }),
    ...readyRow("CN1", "GND 3V3 GPIO43 GPIO44", 272, 635, 13, 0, { side: "bottom", captions: ["G", "3V", "43", "44"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.5, font: 6.5 }])) }),
  ],
  draw: () => pcb(80, 45, 270, 610, 30) + hole(103, 65) + hole(326, 65) + shield(151, 113, 128, 100, "ESP32-S3") +
    rect(162, 236, 112, 75, 2, "#b6beb7", "#e8e8db") + path("M154 104Q320 58 307 214T163 292", "none", "#101c21", 3) +
    chip(182, 364, 42, 42, "PMIC", 5) + circle(271, 427, 25, "#bcc6bd", "#e5e9db") + label(271, 427, "RTC", 8, "#52675b") +
    passives(130, 442, 11, 5) + readySocket(188, 556, 64, 36, "BAT") + readySocket(91, 618, 66, 34, "") + readySocket(261, 618, 66, 34, "") +
    pcb(470, 45, 270, 610, 31) + display(486, 68, 238, 548, "AMOLED Plus") +
    label(605, 683, "FRONT / touch display", 9, "#405655"),
});

const t4Source = github("LilyGo-AMOLED-Series", "schematic/T4-S3-240719.pdf");
const t4Photo = docs("t4-series", "t4-s3", "t4-s3-pinout.jpg");
const t4Top = "GND GND GND GPIO42 GPIO41 GPIO40 GPIO39 GPIO38 GPIO48 GPIO47 GPIO21 GPIO18 GND VBUS VBUS".split(" ");
const t4Bottom = "VBAT VBAT 3V3 3V3 GND GPIO1 GPIO2 GPIO3 GPIO4 GPIO7 GPIO6 GPIO44 GPIO43 3V3 GND".split(" ");
const t4 = entry({
  id: "lilygo-t4-s3-v1-0", name: "LILYGO T4-S3 V1.0", short: "T4-S3 V1.0",
  width: 850, height: 650, subtitle: "ESP32-S3 / 2.41-inch RM690B0 AMOLED / 2024-07-19 schematic",
  source: t4Source, references: [t4Source, t4Photo], cad: github("LilyGo-AMOLED-Series", "dimensions/T4-S3-AMOLED-PCB.7z"),
  description: "V1.0 T4-S3-2.41, matched to the official rear pinmap and T4-S3-240719 schematic. The main rear view exposes all 30 physical P5 contacts plus both four-contact side sockets; the display front is an inset. P5 is a 2×15, 1.27 mm connector. In the rear view, its upper row runs P5.15 to P5.1 left-to-right and the lower row P5.16 to P5.30. Numeric labels identify dense contacts; full functions are on hover. P2 is UART TX43/RX44, P4 is I²C SDA6/SCL7. GPIO18 is the fitted display TE signal and must not be driven as an independent GPIO. Battery, display/card/USB/RF ports are assembled interfaces; battery rail wiring is available at P5.16/.17. Artwork and off-board termination-carrier dimensions are representative.",
  tags: ["lilygo", "t4-s3", "t4 s3", "esp32-s3", "rm690b0", "amoled", "touch", "microsd", "i2c", "uart", "sy6970"],
  types: { GPIO18: "output" },
  functions: { GPIO18: "Display TE output into ESP32-S3. Shared with the fitted display; do not drive this contact externally.", GPIO6: "Shared I²C SDA for touch, SY6970 power device and P4.3.", GPIO7: "Shared I²C SCL for touch, SY6970 power device and P4.4.", GPIO1: "Shared microSD chip select.", GPIO2: "Shared microSD MOSI.", GPIO3: "Shared microSD clock.", GPIO4: "Shared microSD MISO.", GPIO43: "UART0 TX, shared P5.28 / P2.3.", GPIO44: "UART0 RX, shared P5.27 / P2.4." },
  boardBounds: [[35, 110, 240, 370], [350, 40, 380, 550]],
  contacts: [
    ...readyRow("P5", t4Top, 408, 100, 17.5, 0, { side: "top", numbers: rowNumbers(15, 15, -1), captions: rowNumbers(15, 15, -1).map(String), overrides: Object.fromEntries(rowNumbers(0, 15).map(i => [i, { radius: 2.5, font: 5.5 }])) }),
    ...readyRow("P5", t4Bottom, 408, 119, 17.5, 0, { side: "bottom", numbers: rowNumbers(16, 15), captions: rowNumbers(16, 15).map(String), overrides: Object.fromEntries(rowNumbers(0, 15).map(i => [i, { radius: 2.5, font: 5.5 }])) }),
    ...readyRow("P2", "GPIO44 GPIO43 3V3 GND", 721, 174, 0, 14, { side: "right", numbers: [4, 3, 2, 1], captions: ["RX44", "TX43", "3V3", "GND"] }),
    ...readyRow("P4", "GPIO7 GPIO6 3V3 GND", 721, 319, 0, 14, { side: "right", numbers: [4, 3, 2, 1], captions: ["SCL7", "SDA6", "3V3", "GND"] }),
  ],
  draw: () => pcb(35, 110, 240, 370, 18) + display(47, 122, 216, 346, "T4-S3") +
    pcb(350, 40, 380, 550, 30) + [375, 706].flatMap(x => [65, 566].map(y => hole(x, y))).join("") +
    rect(399, 88, 264, 45, 2, "#17252a", "#84968a") + rect(425, 160, 220, 322, 3, "#161f25", "#75877e") +
    path("M437 177H624V292L603 315V448H444V348L466 325V190H610", "none", "#a39aaf", 1.5) +
    circle(533, 376, 49, "none", "#758b9b") + circle(533, 376, 32, "none", "#997a9c") + label(533, 250, "LILYGO", 24, "#a5a8b8") +
    label(535, 468, "T4-S3 V1.0", 14, "#c0c4bf") + readySocket(706, 156, 31, 81, "", true) + readySocket(706, 301, 31, 81, "", true) +
    usb(707, 251, 35) + readySocket(519, 534, 36, 48, "BAT", true) +
    rect(371, 371, 28, 70, 3, "#b7b89d", "#dfdfc5") + path("M378 385H394V405H382V426", "none", "#5f6e60", 4) +
    tactile(709, 421) + tactile(709, 462) + label(540, 619, "REAR / 2×15 P5 + UART + I²C", 10, "#405655"),
});

export default defineFamily("lilygo-interactive", [deck, embedCc, amoled, amoledPlus, t4]);
