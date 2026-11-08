import { defineFamily } from "../registry.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { circle, label, line, path, rect, screw } from "../shared/svg.js";

const copper = "#d5b66d";
const ink = "#e9ede5";

// EBYTE E22-T (section 3.2), E32-T (section 3.2), E220-T (section 3.3),
// 2026 manufacturer manuals. The shield-side view has pin 7 at the left.
// Positions 8–10 are mechanical fixing holes, not assigned signal terminals.
const uartContacts = [
  ["m0", "M0", "input", "Mode-select input with a weak pull-up. Set with M1; do not leave floating."],
  ["m1", "M1", "input", "Mode-select input with a weak pull-up. Set with M0; do not leave floating."],
  ["rxd", "RXD", "input", "3.3 V UART receive input. Connect to the host transmit output."],
  ["txd", "TXD", "output", "3.3 V UART transmit output. Connect to the host receive input."],
  ["aux", "AUX", "output", "Status output: low while busy or initializing, high when idle. Do not drive externally."],
  ["vcc", "VCC", "power_in", "2.6–5.5 V module supply input (2026 manual). At least 3.3 V is required to guarantee rated output power; budget for the transmit current in the manual."],
  ["gnd", "GND", "power_in", "Module supply and UART ground reference."],
];
const uartPads = uartContacts.map(([id], index) => ({ id, x: 7.62 - index * 2.54, y: -16.5, size: [1.5, 2], drill: 0.9 }));
const uartPoint = ({ x, y }) => [120 + x * 8, 174 + y * 8];

function sma(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">` +
    rect(-10, -12, 20, 15, 1, "#bca264", "#f0d99a") +
    rect(-8.5, 1, 17, 36, 1, "#bfa567", "#ead39a") +
    Array.from({ length: 8 }, (_, index) => line(-8.2, 4 + index * 4, 8.2, 4 + index * 4, "#74633b", 1)).join("") +
    rect(-6.5, 37, 13, 3, .5, "#c5ba91", "#e8dfba") + "</g>";
}

function uartModule(part, chipName, band, manual, cad) {
  const id = part.toLowerCase();
  const pins = uartContacts.map(([id, caption, type, description], index) => {
    const [x, y] = uartPoint(uartPads[index]);
    return { id, label: caption, type, description: `${index + 1} — ${description}`, number: String(index + 1), x, y, edge: "top", surface: true };
  });
  const component = {
    id, art: id, name: `EBYTE ${part} UART LoRa Module`, shortName: part,
    manufacturer: "EBYTE", category: "Wireless modules", referencePrefix: "U", contactLayout: "physical",
    subtitle: `${chipName} / ${band} / SMA-K / DIP`,
    description: `${part} UART modem in EBYTE's 21 × 36 mm shielded DIP package with a seven-contact 2.54 mm header and SMA-K antenna connector. Shield-side top view; pin 7 is on the left. The three lower holes (8–10) are mechanical fixing positions in the cited 2026 manual and are not exposed as signal terminals. Board revision is not specified by EBYTE; small markings are representative.`,
    tags: ["ebyte", part.toLowerCase(), "lora", "uart", "modem", chipName.toLowerCase(), "sma", "dip", band],
    source: manual, width: 240, height: 435, pins,
  };
  const entry = {
    component,
    render: (component, showLabels) => {
      const fixing = [1.92, 4.46, 7].map((x, index) => {
        const [px, py] = uartPoint({ x, y: 15 });
        return rect(px - 4.8, py - 6.4, 9.6, 12.8, 1.2, copper) + circle(px, py, 2.6, "#263e40") +
          (showLabels ? label(px, py + 12, String(index + 8), 6, ink) : "");
      }).join("");
      return rect(36, 30, 168, 288, 1.8, "#265a56", "#87a39b") +
        rect(43, 60, 154, 208, 1.2, "#9fa9a7", "#dce1db") +
        rect(48, 65, 144, 198, 1.2, "#b8bfba", "#7c8b87") +
        label(120, 117, "EBYTE", 20, "#48605d") + label(120, 150, part, 10.2, "#39514d") +
        label(120, 170, chipName, 8, "#4b625c") + label(120, 186, band, 7.8, "#4b625c") +
        path("M104 96q16-15 32 0M111 101q9-9 18 0", "none", "#647971", 2) +
        fixing + sma(79.2, 318, 2.48) +
        [62, 79.2, 96.4].map(x => rect(x - 3.2, 283, 6.4, 34, 0.4, copper)).join("") +
        pins.map(pin => rect(pin.x - 6, pin.y - 8, 12, 16, 1.7, copper, "#e6d39a") +
          circle(pin.x, pin.y, 3.6, "#122f32") +
          (showLabels ? label(pin.x, pin.y - 17, pin.label, 6.9, "#405568") : "")).join("") +
        label(120, 429, "SHIELD-SIDE TOP VIEW", 6.2, "#405568");
    },
    footprint: {
      body: [21, 36], pads: uartPads, modelHeight: 1.0, color: "#265a56",
      details: [[0, -1.5, 19.2, 26, 3.2, "#b8bfba"], [-5.1, 22, 6.2, 12.5, 6.2, "#bca264"]],
      note: `Manufacturer ${part} DIP contact positions, viewed from the shield side: 2.54 mm pitch, pin 1 at (+7.62, -16.5) mm. Seven electrical pads only; mechanical fixing holes 8–10 and the SMA connector are not host signal pads. Pad sizes and drill follow the module drawing; assembly tolerance and connector clearance require checking. Reference: ${manual}`,
    },
    model: { label: `EBYTE ${part.split("-")[0]}-T manufacturer 3D files`, url: cad },
  };
  const viewBounds = { x: 35.5, y: 29.5, width: 169, height: 388.2 };
  entry.mounting = reviewedBoardMounting({
    source: { label: `EBYTE ${part} 2026 DIP header mechanical drawing`, url: manual },
    contacts: uartPads.map(({ id: pinId, x, y }) => ({ pinId, x, y })),
    calibration: { origin: { x: 120, y: 174 }, unitsPerMm: 8 },
    bodyRegions: [{ x: 36, y: 30, width: 168, height: 288 },
      { x: 54.4, y: 288.24, width: 49.6, height: 128.96 }],
    bodyEvidence: "Manufacturer 21 × 36 mm DIP PCB and 7-contact 2.54 mm row; canonical drawing adds the separate projecting SMA shell without reserving its empty side wings.",
    viewBounds, renderMounted: part => clippedFrontArtwork(entry.render, part, viewBounds),
    note: "All seven electrical header leads must seat together. Positions 8–10 are mechanical fixing holes, not extra insertion leads. The SMA connector remains above the board and is not an electrical breadboard contact.",
  });
  return entry;
}

const e22Manual = "https://www.cdebyte.com/pdf-down.aspx?id=4217";
const e32Manual = "https://www.cdebyte.com/pdf-down.aspx?id=4218";
const e220Manual = "https://www.cdebyte.com/pdf-down.aspx?id=4221";
const e22Cad = "https://www.cdebyte.com/Uploadfiles/Files/2023-8-17/2023817940222605.zip";
const e32Cad = "https://www.cdebyte.com/Uploadfiles/Files/2023-8-17/2023817940567383.zip";
const e220Cad = "https://www.cdebyte.com/Uploadfiles/Files/2023-8-17/2023817941188606.zip";
const uart = [
  uartModule("E22-400T22D", "SX1268", "410–493 MHz", e22Manual, e22Cad),
  uartModule("E22-900T22D", "SX1262", "850–930 MHz", e22Manual, e22Cad),
  uartModule("E32-433T20D", "SX1278", "410–441 MHz", e32Manual, e32Cad),
  uartModule("E32-900T20D", "SX1276", "862–930 MHz", e32Manual, e32Cad),
  uartModule("E220-400T22D", "LLCC68", "410–493 MHz", e220Manual, e220Cad),
  uartModule("E220-900T22D", "LLCC68", "850–930 MHz", e220Manual, e220Cad),
];

// E07-900M10S User Manual 2021, section 3: component-side view. The lower
// three-pad bank starts 5.57 mm after the upper bank; it is not a continuous row.
const e07Labels = ["GND", "GND", "GND", "GND", "GND", "NC", "NC", "NC", "VCC", "NC", "GND", "GND", "NC", "GDO2", "GDO0", "MISO/GDO1", "MOSI", "SCK", "CSN", "GND", "ANT", "GND"];
const e07Pads = [
  ...Array.from({ length: 8 }, (_, index) => ({ number: 12 + index, x: -6.75, y: -8 + 1.27 * index, side: "left" })),
  ...Array.from({ length: 3 }, (_, index) => ({ number: 20 + index, x: -6.75, y: 6.46 + 1.27 * index, side: "left" })),
  ...Array.from({ length: 8 }, (_, index) => ({ number: 11 - index, x: 6.75, y: -8 + 1.27 * index, side: "right" })),
  ...Array.from({ length: 3 }, (_, index) => ({ number: 3 - index, x: 6.75, y: 6.46 + 1.27 * index, side: "right" })),
];
const e07Pins = e07Pads.map(({ number, x, y, side }) => {
  const caption = e07Labels[number - 1];
  const type = caption === "NC" ? "no_connect" : ["GND", "VCC"].includes(caption) ? "power_in"
    : ["MOSI", "SCK", "CSN"].includes(caption) ? "input" : ["MISO/GDO1", "GDO2"].includes(caption) ? "output" : "bidirectional";
  const description = {
    GND: "Module ground reference.", VCC: "3.0–3.6 V supply for this manual revision; nominal 3.3 V. Add local ceramic decoupling.",
    NC: "Unconnected module pad; leave open.", GDO2: "CC1101 GDO2 configurable digital output (status, clock or receive data).", GDO0: "CC1101 GDO0 configurable digital I/O.",
    "MISO/GDO1": "CC1101 SPI data output / configurable GDO1 output. Connect to host MISO.",
    MOSI: "SPI data input from the host.", SCK: "SPI clock input.", CSN: "Active-low SPI chip select input.", ANT: "50 Ω antenna contact, parallel to the onboard IPEX antenna connector.",
  }[caption];
  return { id: `p${number}`, number: String(number), label: caption, type, description: `${number} — ${description}`, x: 150 + x * 10, y: 135 + y * 10, edge: side, surface: true };
});
const e07 = {
  component: {
    id: "e07-900m10s", art: "e07-900m10s", name: "EBYTE E07-900M10S CC1101 Module", shortName: "E07-900M10S",
    manufacturer: "EBYTE", category: "Wireless modules", referencePrefix: "U", contactLayout: "physical", width: 300, height: 275, pins: e07Pins,
    subtitle: "TI CC1101 / 855–925 MHz / SPI / SMD-22",
    description: "Shielded 14 × 20 mm CC1101 radio module with a 26 MHz crystal and IPEX / castellated antenna connection. All 22 contacts follow the 2021 EBYTE manual, viewed from the shield side. GDO labels normalize the manual's GD0 typography to TI GDO names. Markings are representative; no PCB revision is specified.",
    tags: ["ebyte", "texas instruments", "ti", "cc1101", "e07", "spi", "fsk", "ook", "868", "915", "radio"],
    source: "https://www.cdebyte.com/pdf-down.aspx?id=1332",
  },
  render: (component, showLabels) => rect(80, 35, 140, 200, 1, "#244f48", "#799a88") +
    path("M94 44H207V226H128V202H94Z", "#adb4b0", "#e0e5dd") +
    label(151, 88, "EBYTE", 13, "#43574e") + label(151, 109, "E07-900M10S", 8.5, "#43574e") +
    label(151, 126, "CC1101", 8, "#43574e") + label(151, 142, "855–925 MHz", 7, "#43574e") +
    rect(94, 207, 24, 23, 1, "#bcc2bc", "#f0e2b2") + circle(106, 218.5, 7, copper) + circle(106, 218.5, 3.5, "#7c6a43") +
    component.pins.map(pin => rect(pin.x - 4.5, pin.y - 4, 9, 8, 0.6, copper) +
      circle(pin.x + (pin.edge === "left" ? -2 : 2), pin.y, 2.5, "#244f48") +
      (showLabels ? label(pin.x + (pin.edge === "left" ? -8 : 8), pin.y, `${pin.number} ${pin.label}`, 6.4, "#405568", pin.edge === "left" ? "end" : "start") : "")).join("") +
    label(150, 259, "SHIELD-SIDE TOP VIEW", 6.2, "#405568"),
  footprint: {
    body: [14, 20], smd: true, color: "#244f48", modelHeight: .8,
    pads: e07Pads.map(({ number, x, y }) => ({ id: `p${number}`, x, y, size: [1.4, .8] })),
    details: [[.2, -.7, 11.2, 17.5, 2.2, "#adb4b0"]],
    note: "Reference 22-pad castellated land pattern from the EBYTE E07-900M10S 2021 mechanical drawing. 1.27 mm pitch with a 5.57 mm gap between banks; 0.8 mm pad height. The 1.4 mm host land width combines the 0.9 mm underside pad and 0.5 mm outside extension. Verify solder process and RF clearance.",
  },
  model: { label: "EBYTE E07-900M10S PCB CAD", url: "https://www.cdebyte.com/Uploadfiles/Files/2022-1-12/20221121052271951.zip" },
};

// E90-DTU SL manual (2021), sections 3–4. This explicit terminal-face view
// exposes only the verified 3.81 mm power/RS485 block; DB9 signals are not inferred.
const modemContacts = [
  ["vcc", "VCC", "power_in", "8–28 V DC supply input; 12 V or 24 V recommended."],
  ["gnd", "GND", "power_in", "Power return, RS485 reference and enclosure ground."],
  ["b", "485_B", "bidirectional", "RS485 B bus terminal. Connect to the corresponding B terminal on the other device."],
  ["a", "485_A", "bidirectional", "RS485 A bus terminal. Connect to the corresponding A terminal on the other device."],
];
const modemPins = modemContacts.map(([id, caption, type, description], index) => ({ id, label: caption, type, description: `${index + 1} — ${description}`, number: String(index + 1), x: 310 - index * 27, y: 121, edge: "bottom", surface: true }));
const modem = {
  component: {
    id: "ebyte-e90-dtu-900sl22-rs485", art: "ebyte-e90-dtu-900sl22-rs485", name: "EBYTE E90-DTU(900SL22) RS485 LoRa Modem", shortName: "E90-DTU(900SL22)",
    manufacturer: "EBYTE", category: "Wireless modules", referencePrefix: "U", contactLayout: "physical", width: 405, height: 210, pins: modemPins,
    subtitle: "850–930 MHz / 22 dBm / power + RS485 terminal view",
    description: "Enclosed E90-DTU(900SL22), 2021 SL manual, shown from the DB9 / RS485 connector face. The four numbered anchors are the verified power/RS485 terminal block, ordered A, B, GND, VCC from left to right. The DB9 RS232 socket is shown for identification only; its individual functions are not specified by this manual and are not modeled. Opposite-face DC barrel, mode switches and SMA antenna connector are hidden. Enclosure and socket placement are representative.",
    tags: ["ebyte", "e90-dtu", "modem", "lora", "rs485", "rs232", "sx1262", "868", "915", "industrial"],
    source: "https://www.cdebyte.com/pdf-down.aspx?id=1293",
  },
  render: (component, showLabels) => path("M24 148H43L56 69Q58 58 70 58H335Q347 58 349 70L362 148H381V155H24Z", "#4f5f60", "#acb7b3") +
    rect(60, 62, 285, 88, 7, "#303e43", "#8b9b9c") +
    [75, 331].flatMap(x => [77, 137].map(y => circle(x, y, 5, "#c4ceca", "#5c6b6a") + line(x - 2, y, x + 2, y, "#50615e"))).join("") +
    path("M100 88H174L166 127H109Z", "#aab6ba", "#e2e9e5") + path("M107 93H166L159 120H114Z", "#182a32", "#7a8b90") +
    [0, 1, 2, 3, 4].map(index => circle(115 + index * 10, 101, 2.2, "#79868c")).join("") +
    [0, 1, 2, 3].map(index => circle(120 + index * 10, 113, 2.2, "#79868c")).join("") +
    rect(216, 88, 108, 50, 2, "#4d8d73", "#a8c9ad") +
    component.pins.map(pin => screw(pin.x, pin.y, 8) + (showLabels ? label(pin.x, 80, pin.label, 6.4, ink) + label(pin.x, 144, pin.number, 6.2, ink) : "")).join("") +
    label(203, 32, "EBYTE E90-DTU(900SL22)", 11, "#405568") +
    (showLabels ? label(139, 137, "RS232", 6, ink) + label(139, 167, "DB9 signals not modeled", 6, "#405568") + label(270, 167, "3.81 mm TERMINAL BLOCK", 6, "#405568") : "") + label(203, 193, "CONNECTOR FACE · A / B / GND / VCC", 6.3, "#405568"),
  footprint: {
    body: [82, 62], color: "#4f5f60", modelHeight: 25,
    pads: modemContacts.map(([id], index) => ({ id, x: (1.5 - index) * 3.81, y: 0, size: 2.2, drill: 1.1 })),
    note: "Off-board cable termination reference only, not a PCB mounting footprint for the enclosed modem. Four host cable pads use the verified 3.81 mm terminal sequence 4=A, 3=B, 2=GND, 1=VCC. The 82 × 62 × 25 mm enclosure is approximate. DB9, barrel and SMA connections are not included in this RS485 terminal-view entry.",
  },
};

export default defineFamily("ebyte", [...uart, e07, modem]);
