import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect } from "../shared/svg.js";
import { readyBoard, readyRow } from "../shared/wire-board.js";

// Component-side contact order checked against SparkFun EAGLE/KiCad board files.
// SparkFun Electronics, CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
const presenceRoot = "https://docs.sparkfun.com/SparkFun_Qwiic_Human_Presence_Sensor-STHS34PF80/";
const spectralRoot = "https://docs.sparkfun.com/SparkFun_Spectral_Sensor_Breakout_AS7343_Qwiic/";
const uvRoot = "https://docs.sparkfun.com/SparkFun_Spectral_UV_Sensor_AS7331/";
const hole = (x, y) => circle(x, y, 11, "#c7a768", "#e1c68a") + circle(x, y, 7.5, "#edf2e8");

function sockets() {
  return [0, 1].map(i => {
    const x = i ? 257 : 40, tailX = i ? 243.2 : 90.8;
    return rect(x, 131, 37, 66, 2, "#29332e", "#a9b6a2") +
      rect(i ? x + 27 : x, 142, 10, 42, 1, "#101d1b") +
      [0, 1, 2, 3].map(j => rect(tailX - 6, 149 + j * 10, 12, 6, .8, "#bec9be", "#e2e6d8")).join("");
  }).join("");
}

function qwiicContacts() {
  // J2 is the left socket and J1 the right. Opposite rotations reverse their
  // vertical pad order; anchors are on the exposed solder tails, not housings.
  return [
    ...readyRow("J2", "GND 3V3 SDA SCL", 90.8, 152, 0, 10, { side: "right", captions: ["1", "2", "3", "4"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.3, solid: true, font: 5.7 }])) }),
    ...readyRow("J1", "SCL SDA 3V3 GND", 243.2, 152, 0, 10, { side: "left", numbers: [4, 3, 2, 1], captions: ["4", "3", "2", "1"], overrides: Object.fromEntries([0, 1, 2, 3].map(i => [i, { radius: 2.3, solid: true, font: 5.7 }])) }),
  ];
}

function sensor(spec) {
  const functions = { GND: "Supply, bus and signal ground.", "3V3": "3.3 V board supply input; shared between the header and both Qwiic sockets. Do not apply 5 V.",
    SDA: "I²C serial data, shared by the header and both Qwiic sockets.", SCL: "I²C clock input, shared by the header and both Qwiic sockets.", ...spec.functions };
  const contacts = [...spec.header, ...qwiicContacts(), ...(spec.extra ?? [])];
  const entry = readyBoard({
    id: spec.id, name: spec.name, short: spec.short, manufacturer: "SparkFun Electronics", category: "Sensors",
    width: 350, height: 350, subtitle: `${spec.sku} / v1.0 / ${spec.subtitle}`,
    source: spec.source, cad: spec.cad, references: spec.references,
    description: `${spec.description} The 1-inch board is shown from the component side, header below. All ${contacts.length} header, Qwiic signal and optional LED contacts are represented. Qwiic anchors lie on exposed solder tails; the left J2 socket runs 1–4 downward and right J1 runs 4–1. Connector housing anchors and solder jumpers are excluded from the wiring interface. Source board revision is v1.0. Small bodies and the off-board termination carrier are representative.`,
    tags: ["sparkfun", "qwiic", spec.sku.toLowerCase(), "i2c", "diy", "starter kit", "arduino", ...spec.tags],
    types: { "3V3": "power_in", SCL: "input", SDA: "bidirectional", INT: "output", ...spec.types },
    contacts: contacts.map(p => ({ ...p, note: functions[p.signal] })),
    boardBounds: [[40, 40, 254, 254]],
    draw: () => rect(40, 40, 254, 254, 3, "#ad2c30", "#d78b72") +
      [65.4, 268.6].flatMap(x => [65.4, 268.6].map(y => hole(x, y))).join("") +
      sockets() + spec.draw() + label(167, 90, "sparkfun", 18, "#f0e8d1") +
      label(167, 114, spec.chip, 12, "#f0e8d1") +
      [125, 145, 190, 210].map((x, i) => rect(x, 133 + i % 2 * 18, 7, 10, .6, "#b6a27a", "#d8d1b6")).join("") +
      label(167, 320, "COMPONENT SIDE / QWIIC SOLDER TAILS", 6.5, "#405655"),
  });
  entry.component.references = spec.references;
  const nets = new Map();
  for (const pin of entry.component.pins) {
    if (!nets.has(pin.label)) nets.set(pin.label, []);
    nets.get(pin.label).push(pin.id);
  }
  entry.component.internalConnections = [...nets.values()].filter(ids => ids.length > 1);
  return { component: entry.component, render: entry.art, footprint: entry.footprint, model: entry.model };
}

const normalHeader = signals => readyRow("J3", signals, 103.5, 281.3, 25.4, 0, { side: "top", captions: signals.split(" ") });
const entries = [
  sensor({
    id: "sparkfun-sths34pf80-sen22494", name: "SparkFun STHS34PF80 Human Presence Sensor SEN-22494", short: "Qwiic Presence",
    sku: "SEN-22494", chip: "STHS34PF80", subtitle: "presence + motion / I²C 0x5A",
    source: presenceRoot + "hardware_overview/", cad: presenceRoot + "assets/board_files/eagle_files.zip",
    references: [presenceRoot + "assets/board_files/schematic.pdf", presenceRoot + "assets/img/hookup_guide/dimensions-1x1.png"],
    description: "The full-size SEN-22494 STHS34PF80 infrared presence/motion board, distinct from the mini version. The six-contact header exposes GND, 3V3, SDA, SCL, CS and INT. CS high selects I²C; pull CS low at boot for the supported three-wire SPI interface.",
    tags: ["sths34pf80", "presence", "motion", "infrared", "thermal", "spi"],
    header: normalHeader("GND 3V3 SDA SCL CS INT"), types: { CS: "input" },
    functions: { CS: "Interface select / active-low SPI chip select, pulled to 3.3 V. High selects I²C; low at boot enables three-wire SPI.", INT: "Sensor interrupt output, pulled to 3.3 V through the configurable 10 kΩ pull-up. Read with a host interrupt input.", SDA: "I²C SDA or bidirectional three-wire SPI SDIO. Shared with both Qwiic sockets.", SCL: "I²C clock or three-wire SPI clock input. Shared with both Qwiic sockets." },
    draw: () => rect(142, 154, 49, 57, 2, "#d4cda0", "#e7e2b5") + rect(150, 163, 33, 39, 1, "#535d57", "#a8b79b") +
      rect(158, 170, 17, 24, 1, "#758e77") + rect(51, 104, 12, 5, .5, "#b5b870") + label(167, 236, "PRESENCE + MOTION", 9),
  }),
  sensor({
    id: "sparkfun-as7343-sen23220", name: "SparkFun AS7343 Spectral Sensor SEN-23220", short: "Qwiic AS7343",
    sku: "SEN-23220", chip: "AS7343", subtitle: "14-channel spectral / I²C 0x39",
    source: spectralRoot + "hardware_overview/", cad: spectralRoot + "assets/board_files/SparkFun_AS7343_Qwiic.zip",
    references: [spectralRoot + "assets/board_files/SparkFun_AS7343_Qwiic.pdf", spectralRoot + "assets/img/AS7343_Annotated.jpg"],
    description: "SEN-23220 AS7343 multispectral board with an onboard white illumination LED, optional external LED pads, 1.8 V regulator and level shifting on SDA/SCL. INT and GPIO connect directly to the 1.8 V sensor domain; their header placement does not make them 3.3 V GPIOs.",
    tags: ["as7343", "spectral", "color", "visible", "nir", "light", "led"],
    header: normalHeader("GND 3V3 SDA SCL GPIO INT"), types: { GPIO: "bidirectional", LED_K: "open_collector" },
    extra: [
      { ref: "D3", number: "D3.2", signal: "3V3", x: 65.4, y: 116.2, side: "top", caption: "LED+" },
      { ref: "D3", number: "D3.1", signal: "LED_K", x: 90.8, y: 116.2, side: "top", caption: "LED−" },
    ],
    functions: { GPIO: "AS7343 configurable GPIO in the 1.8 V sensor domain; it is not level shifted to the 3.3 V Qwiic rail. Use level conversion for a higher-voltage host.", INT: "Active-low/high configurable sensor interrupt, directly in the 1.8 V sensor domain. It is not level shifted.", LED_K: "Optional external LED cathode / AS7343 programmable LED current-sink output. The other LED pad is tied to 3.3 V; configure the current limit and onboard WLED jumper." },
    draw: () => chip(146, 177, 43, 29, "", 2) + circle(176, 190, 4.6, "#121d20", "#667b72") +
      rect(123, 176, 11, 33, 1.5, "#e2dfb7", "#f0f0d4") + rect(125, 182, 7, 20, .8, "#e3ce60") +
      chip(155, 225, 23, 17, "1V8", 5) + path("M63 98V89h23v9", "none", "#efe8cf", 2),
  }),
  sensor({
    id: "sparkfun-as7331-sen23517", name: "SparkFun AS7331 Spectral UV Sensor SEN-23517", short: "Qwiic AS7331",
    sku: "SEN-23517", chip: "AS7331", subtitle: "UVA / UVB / UVC / I²C 0x74–0x77",
    source: uvRoot + "single_page/", cad: uvRoot + "assets/board_files/SparkFun_Qwiic_UV_Sensor_AS7331.zip",
    references: [uvRoot + "assets/board_files/SparkFun_Qwiic_UV_Sensor_AS7331.pdf", uvRoot + "assets/img/Spectral_UV_Sensor-Connections.jpg"],
    description: "The full-size SEN-23517 AS7331 UV board, distinct from SEN-23518 Mini. It measures separate UVA, UVB and UVC channels. The six-contact header runs SCL, SDA, 3V3, GND, INT, SYN left-to-right and retains the source J3 numbering 6–1. Supply range is 2.7–3.6 V; address is 0x74 by default, selectable through the A0/A1 jumpers.",
    tags: ["as7331", "uv", "ultraviolet", "uva", "uvb", "uvc", "light"],
    header: readyRow("J3", "SCL SDA 3V3 GND INT SYN", 103.5, 281.3, 25.4, 0, { side: "top", numbers: [6, 5, 4, 3, 2, 1] }),
    types: { SYN: "input" },
    functions: { "3V3": "2.7–3.6 V board supply input; nominal 3.3 V. Shared with both Qwiic sockets.", INT: "AS7331 READY/INT data-ready output; source pin J3.2. Connect to a host input.", SYN: "AS7331 synchronization input (SYNC), source J3.1 and board silk SYN. Used by externally synchronized measurement modes." },
    draw: () => chip(145, 171, 45, 35, "", 2) + rect(158, 179, 18, 14, 1, "#222c33", "#5e6d6d") +
      rect(154, 59, 25, 11, .5, "#7d8297", "#bbc1b8") + rect(260, 108, 12, 5, .5, "#d2bc73") +
      label(167, 230, "UVA / UVB / UVC", 10),
  }),
];

export default defineFamily("sparkfun-more", entries);
