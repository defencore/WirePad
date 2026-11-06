import { board, chip, circle, label, line, path, rect, smd } from "./catalog-extension.js";

const hoperfDatasheet = "https://www.hoperf.com/uploads/RFM95W-V2.0_1695351437.pdf";
const ebyteManual = "https://www.ebyte.com/downpdf/435.html";
const aiDocs = name => `https://docs.ai-thinker.com/en/${name}/index.html`;

const terminal = {
  ANT: ["passive", "50 Ω RF antenna connection. Match the antenna to the module band."],
  GND: ["power_in", "Connect to the host ground plane."],
  "3V3": ["power_in", "Nominal 3.3 V supply input. Decouple close to the module."],
  VCC: ["power_in", "Module supply input. Use the voltage and current budget from the datasheet."],
  NSS: ["input", "Active-low SPI chip select from the host."],
  SCK: ["input", "SPI clock input from the host."],
  MOSI: ["input", "SPI data input from the host."],
  MISO: ["output", "SPI data output to the host."],
  MISO_TX: ["output", "SPI MISO or UART transmit, according to the selected SX1281 host interface."],
  MOSI_RX: ["input", "SPI MOSI or UART receive, according to the selected SX1281 host interface."],
  SCK_RTSN: ["input", "SPI clock or the alternate UART RTSN signal."],
  NSS_CTS: ["input", "Active-low SPI chip select or the alternate UART CTS signal."],
  RESET: ["input", "Active-low radio reset input."],
  NRST: ["input", "Active-low radio reset input."],
  NRESET: ["input", "Active-low radio reset input."],
  BUSY: ["output", "Radio busy status. Wait until low before sending an SPI command."],
  RXEN: ["input", "Active-high receive-path select for the RF switch."],
  TXEN: ["input", "Active-high transmit-path select for the RF switch."],
  NC: ["no_connect", "Unconnected pad. Leave open."],
};

const numbers = (start, end) => Array.from({ length: Math.abs(end - start) + 1 }, (_, index) => start + index * Math.sign(end - start));
const bank = (side, numberList, offset, pitch, inset, padSize) => ({ side, numberList, offset, pitch, inset, padSize });

function physicalPads(rows, body) {
  return rows.flatMap(({ side, numberList, offset, pitch, inset, padSize }) => {
    const vertical = side === "left" || side === "right";
    const fixed = (vertical ? body[0] : body[1]) / 2 - inset;
    const across = side === "left" || side === "top" ? -fixed : fixed;
    return numberList.map((number, index) => {
      const along = offset + index * pitch;
      return {
        id: `p${number}`, number: String(number), side,
        x: vertical ? across : along,
        y: vertical ? along : across,
        size: vertical ? padSize : [...padSize].reverse(),
      };
    });
  });
}

function radio({
  id, name, manufacturer, band, chipName, source, art, labels, body, rows, canvas, supply,
  modelHeight = 1.8, modelDetails, description, note,
}) {
  const [width, height] = canvas;
  const pads = physicalPads(rows, body);
  const pins = pads.map(({ id, number, side, x, y }) => {
    const label = labels[Number(number) - 1];
    const [type, detail] = terminal[label] ?? ["bidirectional", `${label} is a software-configurable radio I/O. Check the mapping for your operating mode.`];
    return {
      id, number, label, type,
      description: (label === "VCC" || label === "3V3") && supply ? supply : detail,
      x: side === "left" ? 0 : side === "right" ? width : Math.round(width * (0.5 + x / body[0])),
      y: side === "top" ? 0 : side === "bottom" ? height : Math.round(height * (0.5 + y / body[1])),
    };
  });
  return {
    component: {
      id, name: `${name} LoRa Module`, shortName: name, category: "Wireless modules", manufacturer,
      subtitle: `${chipName ? `${chipName} / ` : ""}${band}`,
      description, tags: ["lora", "rf", "radio", "semtech", "spi", ...(chipName ? [chipName.toLowerCase()] : [])],
      source, width, height, pins, art, referencePrefix: "U",
    },
    footprint: {
      body, smd: true, modelHeight: 0.8, color: art === "hoperf-radio" ? "#273c2b" : "#23313d",
      note: note ?? "Reference castellated SMD land pattern based on the manufacturer’s mechanical drawing. Verify assembly tolerances and RF layout before fabrication.",
      pads: pads.map(({ id, x, y, size }) => ({ id, x, y, size })),
      details: modelDetails ?? [[0, 0, body[0] - 3.2, body[1] - 3.5, modelHeight - 0.8, "#aab2b9"]],
    },
  };
}

const hoperfLabels = [
  "GND", "MISO", "MOSI", "SCK", "NSS", "RESET", "DIO5", "GND",
  "ANT", "GND", "DIO3", "DIO4", "3V3", "DIO0", "DIO1", "DIO2",
];
const hoperfRows = [
  bank("left", numbers(1, 8), -7, 2, 0.475, [2.95, 1.27]),
  bank("right", numbers(16, 9), -7, 2, 0.475, [2.95, 1.27]),
];

const hoperf = [
  ["RFM95W", "868 / 915 MHz"],
  ["RFM96W", "433 / 470 MHz"],
  ["RFM98W", "169 / 433 / 470 MHz"],
].map(([name, band]) => radio({
  id: name.toLowerCase(), name, manufacturer: "HopeRF", band, source: hoperfDatasheet,
  art: "hoperf-radio", labels: hoperfLabels, body: [16, 16], rows: hoperfRows, canvas: [170, 170],
  modelDetails: [[-1, -2, 5, 5, 1, "#262930"], [0, 3.5, 3.5, 2.3, 0.9, "#a5adb1"]],
  supply: "Radio supply input. The module is typically powered at 3.3 V. Follow the datasheet limits for the selected transmit power.",
  description: `HopeRF ${name} SPI transceiver in the 16-pad castellated package. The ${band} options share this pad order. Match the suffix and antenna to the band in use.`,
  note: "SMD land pattern for the 16 × 16 mm HopeRF RFM9xW package with 2 mm pin pitch. Confirm the antenna layout and manufacturing tolerances.",
}));

const aiRows = [
  bank("left", numbers(1, 8), -7, 2, 0.25, [1.7, 1.0]),
  bank("right", numbers(16, 9), -7, 2, 0.25, [1.7, 1.0]),
];
const aiSx126xLabels = [
  "ANT", "GND", "3V3", "RESET", "TXEN", "DIO1", "DIO2", "DIO3",
  "GND", "BUSY", "RXEN", "SCK", "MISO", "MOSI", "NSS", "GND",
];
const ai = [
  ["Ra-01S", "410–525 MHz", "SX126x", aiSx126xLabels, 3.3],
  ["Ra-01SH", "803–930 MHz", "SX1262", aiSx126xLabels, 3.2],
  ["Ra-02", "410–525 MHz", "SX1278", [
    "GND", "GND", "3V3", "RESET", "DIO0", "DIO1", "DIO2", "DIO3",
    "GND", "DIO4", "DIO5", "SCK", "MISO", "MOSI", "NSS", "GND",
  ], 3.2],
].map(([name, band, chipName, labels, modelHeight]) => radio({
  id: name.toLowerCase(), name, manufacturer: "Ai-Thinker", band, chipName, labels, modelHeight,
  source: aiDocs(name), art: "ai-radio", body: [16, 17], rows: aiRows, canvas: [166, 176],
  supply: "Nominal 3.3 V radio supply. Follow the manufacturer’s power and decoupling guidance.",
  description: `Ai-Thinker ${name} uses the ${chipName} radio for ${band} LoRa and exposes an SPI host interface. ${name === "Ra-02" ? "Connect the antenna through the onboard IPEX connector." : "Use the appropriate RF antenna connection for the fitted module."}`,
}));

const ebyteCompactLabels = [
  "VCC", "GND", "NRST", "NC", "NC", "ANT", "GND", "NC", "TXEN", "RXEN",
  "BUSY", "MISO", "MOSI", "NSS", "SCK", "GND", "NC", "DIO3", "DIO2", "DIO1",
];
const ebyteCompactRows = [
  bank("left", numbers(1, 5), -2.54, 1.27, 0.12, [1.35, 0.8]),
  bank("bottom", numbers(6, 10), -2.54, 1.27, 0.12, [1.35, 0.8]),
  bank("right", numbers(15, 11), -2.54, 1.27, 0.12, [1.35, 0.8]),
  bank("top", numbers(20, 16), -2.54, 1.27, 0.12, [1.35, 0.8]),
];
const ebyteLabels = [
  "GND", "GND", "GND", "GND", "GND", "RXEN", "TXEN", "DIO2", "VCC", "GND", "GND", "GND",
  "DIO1", "BUSY", "NRST", "MISO", "MOSI", "SCK", "NSS", "GND", "ANT", "GND",
];

function ebyteBanks(top, lower, pitch, inset, size) {
  return [
    bank("left", numbers(12, 19), top, pitch, inset, size),
    bank("left", numbers(20, 22), lower, pitch, inset, size),
    bank("right", numbers(11, 4), top, pitch, inset, size),
    bank("right", numbers(3, 1), lower, pitch, inset, size),
  ];
}

const ebytePackages = {
  compact: {
    body: [10, 10], labels: ebyteCompactLabels, rows: ebyteCompactRows, canvas: [170, 170], modelHeight: 2.5,
    art: "ebyte-radio-compact",
  },
  standard: {
    body: [14, 20], labels: ebyteLabels, rows: ebyteBanks(-8, 6.46, 1.27, 0.16, [1.5, 0.8]),
    canvas: [166, 236], modelHeight: 3, art: "ebyte-radio",
  },
  amplified: {
    body: [24, 38.5], labels: ebyteLabels.map((label, index) => index === 9 ? "VCC" : label),
    rows: ebyteBanks(-16.64, 8.74, 2.54, 0.25, [2, 1.5]),
    canvas: [182, 292], modelHeight: 3.87, art: "ebyte-radio",
  },
};

const ebyteSubGhz = [
  ["E22-400MM22S", "410–493 MHz", "SX1268", "compact", 22],
  ["E22-900MM22S", "850–930 MHz", "SX1262", "compact", 22],
  ["E22-400M22S", "410–493 MHz", "SX1268", "standard", 22],
  ["E22-900M22S", "850–930 MHz", "SX1262", "standard", 22],
  ["E22-400M30S", "410–493 MHz", "SX1268", "amplified", 30],
  ["E22-900M30S", "850–930 MHz", "SX1262", "amplified", 30],
  ["E22-900M33S", "850–930 MHz", "SX1262", "amplified", 33],
].map(([name, band, chipName, size, power]) => radio({
  id: name.toLowerCase(), name, manufacturer: "Ebyte", band, chipName, source: ebyteManual,
  ...ebytePackages[size],
  supply: size === "amplified"
    ? "Supply input. Connect both VCC pads. Use the manufacturer’s voltage and current requirements for the intended transmit power."
    : "Radio supply, 1.8–3.7 V. Use a stable supply and decouple near the VCC pad.",
  description: `Ebyte ${name} is a ${power} dBm ${band} SPI LoRa transceiver with a Semtech ${chipName}. The host controls SPI, the BUSY handshake, and the transmit and receive path enables.`,
}));

const e28Labels = [
  "VCC", "GND", "MISO_TX", "MOSI_RX", "SCK_RTSN", "NSS_CTS", "GND",
  "GND", "NRESET", "BUSY", "DIO1", "DIO2", "DIO3", "GND",
];
const ebyte2G4 = [
  ["E28-2G4M12S", 24, 306, "285", true],
  ["E28-2G4M12SX", 17.8, 227, "2049", false],
].map(([name, length, height, productNumber, pcbAntenna]) => radio({
  id: name.toLowerCase(), name, manufacturer: "Ebyte", band: "2.4–2.5 GHz", chipName: "SX1281",
  source: `https://www.ebyte.com/product/${productNumber}.html`,
  art: pcbAntenna ? "ebyte-radio-2g4-pcb" : "ebyte-radio-2g4-coax",
  body: [15, length], canvas: [192, height], labels: e28Labels,
  rows: [
    bank("left", numbers(1, 7), 2.69 - length / 2, 1.27, 0.16, [1.6, 0.8]),
    bank("right", numbers(14, 8), 2.69 - length / 2, 1.27, 0.16, [1.6, 0.8]),
  ],
  modelDetails: [
    [0, (17.8 - length) / 2, 11.8, 15.2, 2.05, "#aeb9c1"],
    [4, 7.2 + (17.8 - length) / 2, 2, 2, 1.3, "#cfb387"],
  ],
  supply: "1.8–3.6 V supply. Use 3.3 V for nominal operation and keep host logic within the supply range.",
  description: `Ebyte ${name} is a 2.4 GHz LoRa and FLRC transceiver based on the Semtech SX1281. ${pcbAntenna ? "This version has a PCB antenna." : "This shorter version uses an external antenna on its IPEX connector."}`,
  note: "Reference castellated SMD land pattern with 1.27 mm pad pitch. Follow the manufacturer’s RF and antenna placement guidance.",
}));

function contacts(component, showLabels) {
  const { width, height } = component;
  return component.pins.map((pin) => {
    const horizontal = pin.x === 0 || pin.x === width;
    const before = pin.x === 0 || pin.y === 0;
    const delta = before ? 1 : -1;
    const x = pin.x + (horizontal ? delta * 9 : 0);
    const y = pin.y + (horizontal ? 0 : delta * 9);
    const w = horizontal ? 9 : 6;
    const h = horizontal ? 6 : 9;
    const caption = horizontal
      ? label(x + delta * 7, y, pin.label, 7.2, "#f1f2ee", before ? "start" : "end")
      : label(x, y + delta * 10, pin.label, 6.6);
    return line(pin.x, pin.y, x, y, "#b38b52", 1.4) +
      rect(x - w / 2, y - h / 2, w, h, 1, "#d7ad63", "#f0ce87") +
      (showLabels ? caption : "");
  }).join("");
}

function coax(x, y) {
  return rect(x - 8, y - 7, 16, 14, 2, "#d4c8b4", "#f2e7d5") +
    circle(x, y, 4.7, "#b79455", "#dabc86") + circle(x, y, 1.8, "#393126");
}

function hoperfBody({ width, height, shortName }) {
  const center = width / 2;
  return board(width, height, "#32443b", "#55695d") +
    chip(center - 20, 40, 40, 40, shortName, 6) +
    rect(center - 13, 101, 26, 13, 2, "#9ba4aa", "#c8d0d3") +
    [42, 57, 72, 87, 102, 117].map((y, index) => smd(center + 29, y, index % 2 ? "#3d4847" : "#bba778")).join("") +
    [53, 68, 83, 98].map(y => smd(center - 39, y)).join("") +
    label(center, 24, "HOPERF", 10) + label(center, height - 22, shortName, 9, "#a5cfbd");
}

function aiBody({ width, height, shortName }) {
  const center = width / 2;
  return board(width, height, "#29333d", "#556575") +
    path(`M37 17H${width - 37}V${height - 17}H37V48H53V17Z`, "#a4aeb5", "#d4dcdf") +
    coax(44, 32) +
    label(center, height / 2 - 6, "Ai-Thinker", 10, "#3d4c56") +
    label(center, height / 2 + 12, shortName, 13, "#2f404a") +
    label(center, height / 2 + 34, "LoRa", 9, "#455865");
}

function ebyteBody({ width, height, shortName, art }) {
  const center = width / 2;
  const compact = art === "ebyte-radio-compact";
  const inset = compact ? 29 : 37;
  const top = compact ? 30 : 13;
  return board(width, height, "#263849", "#4a6073") +
    rect(inset, top, width - 2 * inset, height - 2 * top, 4, "#aeb9c1", "#d3dbe0") +
    label(center, height / 2 - 20, "EBYTE", 12, "#344757") +
    label(center, height / 2 + 1, shortName, 8.3, "#293e51") +
    label(center, height / 2 + 19, "LoRa / SPI", 8, "#405b6b") +
    (compact ? circle(inset + 8, top + 8, 2, "#536271") : coax(inset + 12, height - 28));
}

function ebyte2G4Body({ width, height, shortName, art }) {
  const center = width / 2;
  const pcbAntenna = art === "ebyte-radio-2g4-pcb";
  const shieldEnd = pcbAntenna ? height - 83 : height - 16;
  return board(width, height, "#2a3d45", "#58737d") +
    rect(45, 13, width - 90, shieldEnd - 14, 4, "#aeb9c1", "#d3dbe0") +
    label(center, 56, "EBYTE", 12, "#344757") +
    label(center, 83, shortName, 8.5, "#293e51") +
    label(center, 106, "SX1281", 10, "#405b6b") + coax(width - 52, shieldEnd - 20) +
    (pcbAntenna ? path(`M50 ${height - 35}H68V${height - 64}H86V${height - 35}H106V${height - 64}H124V${height - 35}H142`, "none", "#bd9653", 3) : "");
}

const renderer = body => (component, showLabels) => body(component) + contacts(component, showLabels);
const radios = [...hoperf, ...ai, ...ebyteSubGhz, ...ebyte2G4];

export const semtechComponents = radios.map(({ component }) => component);
export const semtechFootprints = Object.fromEntries(radios.map(({ component, footprint }) => [component.id, footprint]));
export const semtechArt = {
  "hoperf-radio": renderer(hoperfBody),
  "ai-radio": renderer(aiBody),
  "ebyte-radio": renderer(ebyteBody),
  "ebyte-radio-compact": renderer(ebyteBody),
  "ebyte-radio-2g4-pcb": renderer(ebyte2G4Body),
  "ebyte-radio-2g4-coax": renderer(ebyte2G4Body),
};
