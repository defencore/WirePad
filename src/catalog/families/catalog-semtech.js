import { physicalComponent } from "../shared/physical-contacts.js";
import { defineFamily } from "../registry.js";
import { board, chip, circle, label, line, path, rect, smd } from "../shared/svg.js";

const ebyteProduct = name => `https://www.cdebyte.com/products/${name}`;
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
  SCK_RTSN: ["bidirectional", "SPI clock input or active-low UART request-to-send output."],
  NSS_CTS: ["input", "Active-low SPI chip select or active-low UART clear-to-send input."],
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
      id, number, label, type, edge: side,
      description: (label === "VCC" || label === "3V3") && supply ? supply : detail,
      x: side === "left" ? 0 : side === "right" ? width : Math.round(width * (0.5 + x / body[0])),
      y: side === "top" ? 0 : side === "bottom" ? height : Math.round(height * (0.5 + y / body[1])),
    };
  });
  return {
    component: physicalComponent({
      id, name: `${name} LoRa Module`, shortName: name, category: "Wireless modules", manufacturer,
      subtitle: `${chipName ? `${chipName} / ` : ""}${band}`,
      description, tags: ["lora", "rf", "radio", "semtech", "spi", ...(chipName ? [chipName.toLowerCase()] : [])],
      source, width, height, pins, art, referencePrefix: "U",
    }, pin => [pin.x === 0 ? 10 : pin.x === width ? width - 10 : pin.x, pin.y === 0 ? 10 : pin.y === height ? height - 10 : pin.y]),
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
  ["RFM95W", "868 / 915 MHz", "https://www.hoperf.com/uploads/RFM95W-V2.0_1695351437.pdf"],
  ["RFM96W", "433 / 470 MHz", "https://www.hoperf.com/uploads/RFM96W-V2.0_1695351477.pdf"],
  ["RFM98W", "169 / 433 / 470 MHz", "https://www.hoperf.com/uploads/RFM98W-V2_0_1702287607.pdf"],
].map(([name, band, source]) => radio({
  id: name.toLowerCase(), name, manufacturer: "HopeRF", band, source,
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
const aiAntennaRows = [
  // The recommended footprint extends pad 1 inboard to reach the RF contact.
  bank("left", [1], -7, 2, 0.53, [2.26, 1.27]),
  bank("left", numbers(2, 8), -5, 2, 0.25, [1.7, 1.0]),
  aiRows[1],
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
  source: aiDocs(name), art: "ai-radio", body: [16, 17],
  rows: name === "Ra-02" ? aiRows : aiAntennaRows, canvas: [166, 176],
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
  id: name.toLowerCase(), name, manufacturer: "Ebyte", band, chipName, source: ebyteProduct(name),
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
  ["E28-2G4M12S", 24, 306, true],
  ["E28-2G4M12SX", 17.8, 227, false],
].map(([name, length, height, pcbAntenna]) => radio({
  id: name.toLowerCase(), name, manufacturer: "Ebyte", band: "2.4–2.5 GHz", chipName: "SX1281",
  source: ebyteProduct(name),
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
  const { art, width, height } = component;
  const annular = art === "hoperf-radio";
  return component.pins.map((pin) => {
    const horizontal = pin.edge === "left" || pin.edge === "right";
    const before = pin.edge === "left" || pin.edge === "top";
    const delta = before ? 1 : -1;
    const x = pin.x;
    const y = pin.y;
    const w = horizontal ? 12 : 7;
    const h = horizontal ? (annular ? 10 : 7) : 12;
    const captionWidth = pin.label.length * 4.2 + 5;
    const caption = !showLabels ? "" : horizontal
      ? rect(before ? x + 7 : x - 7 - captionWidth, y - 5, captionWidth, 10, 2, "#152b33") +
        label(x + delta * 9, y, pin.label, 6.9, "#f1f2ee", before ? "start" : "end")
      : rect(x - captionWidth / 2, y + delta * 11 - 5, captionWidth, 10, 2, "#152b33") +
        label(x, y + delta * 11, pin.label, 6.6);
    const cutout = annular ? circle(x + delta * 1.5, y, 3.3, "#f1e3c4", "#b28543")
      : circle(x - (horizontal ? delta * 4 : 0), y - (horizontal ? 0 : delta * 4), 2.2, "#463b2c");
    return rect(x - w / 2, y - h / 2, w, h, annular ? 3 : 1, "#d9ae60", "#edcf86") +
      cutout + caption;
  }).join("");
}

function coax(x, y, size = 17) {
  return rect(x - size / 2, y - size / 2, size, size, 2, "#c1c8c8", "#eef1ed") +
    circle(x, y, size * 0.39, "#d0c7a6", "#ad8d4f") +
    circle(x, y, size * 0.28, "#f3eddb") + circle(x, y, size * 0.095, "#c89e56");
}

function hoperfBody({ width, height, shortName }) {
  const passiveParts = [
    [31, 17], [42, 17], [53, 17], [98, 18], [112, 46], [129, 46], [110, 56], [127, 56],
    [105, 73], [128, 75], [108, 84], [128, 85], [28, 97], [41, 99], [58, 99],
    [75, 102], [89, 104], [32, 111], [48, 115], [65, 119], [81, 116], [104, 111],
    [29, 124], [47, 127], [60, 133], [78, 129], [107, 131], [125, 130], [123, 141],
    [44, 140], [58, 143], [92, 142], [121, 115],
  ];
  const qfnPads = Array.from({ length: 9 }, (_, i) => {
    const offset = 4 + i * 6.5;
    return line(36, 33 + offset, 41, 33 + offset, "#abb7b2", 1.6) +
      line(96, 33 + offset, 101, 33 + offset, "#abb7b2", 1.6) +
      line(39 + offset, 29, 39 + offset, 34, "#abb7b2", 1.6) +
      line(39 + offset, 88, 39 + offset, 93, "#abb7b2", 1.6);
  }).join("");
  return board(width, height, "#245d48", "#5a8b6b") +
    path("M20 29H31V44M98 16H103V32H111M20 106H35V148H74M98 108H117V96H145M110 152V140H145", "none", "#44876d", 1.3) +
    rect(28, 13, 34, 12, 1.2, "none", "#94a690") +
    rect(110, 14, 25, 29, 1.4, "#a5aba6", "#d0d8cf") +
    rect(113, 17, 19, 23, 1.2, "#7b837e", "#bbc6bd") +
    label(122.5, 28.5, "32.0", 5.6, "#eef1ec") +
    passiveParts.map(([x, y], i) => smd(x, y, i % 3 ? "#b5ad92" : "#525952")).join("") +
    qfnPads + rect(39, 32, 59, 58, 1.6, "#172427", "#454f4d") +
    circle(46, 39, 1.6, "#848e88") + label(68.5, 59, shortName, 7, "#acb5b1") +
    chip(115, 93, 15, 18, "", 3) + chip(94, 114, 14, 22, "", 4);
}

function aiBody({ width, height, shortName }) {
  const withoutConnector = shortName === "Ra-01S";
  const shield = shortName === "Ra-01SH" ? "#747e82" : "#c7c6bf";
  const ink = shortName === "Ra-01SH" ? "#f0eee7" : "#4c5150";
  const coaxLand = rect(19, 24, 19, 18, 1.2, "#283334", "#798580") +
    rect(19, 26, 3, 12, 1, "#b3bbb0") + rect(35, 26, 3, 12, 1, "#b3bbb0") +
    circle(28.5, 33, 2.7, "#bd944e");
  const cx = width / 2;
  const cy = height / 2;
  return board(width, height, "#252d35", "#575c60") +
    path(`M44 13H${width - 16}V${height - 13}H16V48H44Z`, "#818984", "#dde0d7") +
    path(`M47 16H${width - 19}V${height - 16}H19V51H47Z`, shield, "#9d9f96") +
    (withoutConnector ? coaxLand + circle(21, 16, 3.4, "#b99758", "#ddc995") : coax(29, 33)) +
    `<g transform="rotate(90 ${cx} ${cy})">` +
    label(cx, cy - 17, shortName, 15, ink) +
    label(cx, cy + 2, "Ai-Thinker", 9, ink) +
    label(cx, cy + 20, "LoRa", 8.2, ink) + "</g>";
}

function ebyteBody({ width, height, shortName, art }) {
  const cx = width / 2;
  const cy = height / 2;
  const compact = art === "ebyte-radio-compact";
  const substrate = board(width, height, "#27624a", "#5c8667");
  if (compact) {
    return substrate + rect(16, 16, width - 32, height - 32, 1, "#e1e4e2", "#9faeaa") +
      circle(24, 25, 3.3, "#66706a") +
      label(cx, cy - 11, shortName, 11, "#34444a") +
      label(cx, cy + 9, "EBYTE", 13, "#34444a");
  }
  const connector = shortName.endsWith("M22S") ? 24 : 16;
  const cut = connector + 11;
  return substrate +
    path(`M16 12H${width - 16}V${height - 12}H${16 + cut}V${height - 12 - cut}H16Z`, "#e0e5e4", "#a3aca8") +
    coax(16 + connector / 2, height - 12 - connector / 2, connector) +
    circle(23 + cut, height - 24, 2.2, "#697875") +
    `<g transform="rotate(90 ${cx} ${cy})">` +
    label(cx - 36, cy - 15, shortName, 13, "#39494e") +
    label(cx + 65, cy - 15, "EBYTE", 11, "#3d4c52") +
    label(cx - 36, cy + 9, "SPI LoRa", 8.5, "#52636a") + "</g>";
}

function ebyte2G4Body({ width, height, shortName, art }) {
  const cx = width / 2;
  const pcbAntenna = art === "ebyte-radio-2g4-pcb";
  const shieldEnd = pcbAntenna ? height - 91 : height - 13;
  const cy = shieldEnd / 2;
  const cxCoax = width - 31;
  const cyCoax = shieldEnd - 22;
  return board(width, height, "#285787", "#547ca4") +
    path(`M15 14H${width - 15}V${shieldEnd - 52}H${width - 64}V${shieldEnd}H15Z`, "#dfe4eb", "#a6b5c4") +
    circle(25, shieldEnd - 13, 3, "#737e89") +
    smd(cxCoax - 22, cyCoax - 14, "#f0eee1") + smd(cxCoax - 22, cyCoax + 4, "#f0eee1") +
    coax(cxCoax, cyCoax, 24) +
    `<g transform="rotate(90 ${cx} ${cy})">` +
    label(cx - 21, cy - 14, shortName, 12, "#39494e") +
    label(cx - 28, cy + 8, "EBYTE", 9.5, "#52636a") + "</g>" +
    (pcbAntenna ? path("M123 212L143 232H169V284H154V250H128V286H95V249H72V286H48V246", "none", "#82a1bd", 3.4) : "");
}

const renderer = body => (component, showLabels) => body(component) + contacts(component, showLabels);
const radios = [...hoperf, ...ai, ...ebyteSubGhz, ...ebyte2G4];

const semtechComponents = radios.map(({ component }) => component);
const semtechFootprints = Object.fromEntries(radios.map(({ component, footprint }) => [component.id, footprint]));
const semtechArt = {
  "hoperf-radio": renderer(hoperfBody),
  "ai-radio": renderer(aiBody),
  "ebyte-radio": renderer(ebyteBody),
  "ebyte-radio-compact": renderer(ebyteBody),
  "ebyte-radio-2g4-pcb": renderer(ebyte2G4Body),
  "ebyte-radio-2g4-coax": renderer(ebyte2G4Body),
};

export default defineFamily("semtech-radios", semtechComponents.map(component => ({ component, render: semtechArt[component.art], footprint: semtechFootprints[component.id] })));
