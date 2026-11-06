import { board, chip, circle, edgePads, label, line, pad, path, pinRow, rect, smd } from "./catalog-extension.js";

const tiLdo = "https://www.ti.com/lit/ds/symlink/lm1117.pdf";
const recomSheet = "https://g.recomcdn.com/media/Datasheet/pdf/.fJG_EiEZ/.t3f3f38dadc5d6f54e118/Datasheet-261/R-78E-0_5.pdf";
const pololuUrl = number => `https://www.pololu.com/product/${number}`;
const terminal = (id, text, description, type, number) => [id, text, description, type, String(number)];
const ground = number => terminal("gnd", "GND", "Common input and output ground.", "power_in", number);
const vin = (number, description) => terminal("vin", "VIN", description, "power_in", number);
const vout = (number, voltage, description = `Regulated ${voltage} V output.`) =>
  terminal("vout", "VOUT", description, "power_out", number);
const enable = description => terminal("en", "EN", description, "input", 3);
const noConnect = terminal("nc", "NC", "No internal connection.", "no_connect", 4);
const left = (width, height, start, gap, specs) => pinRow("left", width, height, start, gap, specs);
const right = (width, height, start, gap, specs) => pinRow("right", width, height, start, gap, specs);
const bottom = (width, height, start, gap, specs) => pinRow("bottom", width, height, start, gap, specs);

function filterArt(component, showLabels) {
  const { width, height, symbol, shortName } = component;
  const copper = "#c18c5c";
  return board(width, height, "#246052", "#4d8174") +
    label(90, 20, shortName, 11) +
    path("M11 36H62M117 36H167M11 80H167", "none", copper, 2.7) +
    path("M133 36V80", "none", copper, 2.7) +
    (symbol === "pi-filter" ? path("M46 36V80", "none", copper, 2.7) : "") +
    rect(61, 28, 57, 34, 5, "#3a4548", "#b9babe") +
    rect(67, 32, 45, 25, 3, "#242f34", "#667578") +
    label(89.5, 45, "L", 13, "#e6ecea") +
    (symbol === "pi-filter" ? capacitorCan(46, 58, "C1") : "") +
    capacitorCan(133, 58, symbol === "pi-filter" ? "C2" : "C") +
    edgePads(component, showLabels);
}

function capacitorCan(x, y, name) {
  return circle(x, y, 11.4, "#232d30", "#a3a69c") +
    circle(x, y, 8.9, "#aeaaa2", "#d2d3c8") +
    line(x - 4.2, y - 4.2, x + 4.2, y + 4.2, "#787d7a") +
    line(x - 4.2, y + 4.2, x + 4.2, y - 4.2, "#787d7a") +
    label(x, y, name, 6.7, "#263238");
}

const filterIn = terminal("in", "IN", "Unfiltered input. This terminal connects to the series inductor.", "passive", 1);
const filterOut = terminal("out", "OUT", "Filtered output. Connect the load between this terminal and ground.", "passive", 3);
const filterGround = terminal("gnd", "GND", "Common return for the input and output and the shunt capacitor connection.", "passive", 2);
const filterGround2 = terminal("gnd-2", "GND", "Second connection to the same filter ground.", "passive", 4);

function passiveFilter(id, name, shortName, symbol, description, source) {
  const width = 178;
  const height = 96;
  return {
    component: {
      id, name, shortName, width, height, symbol, description, source,
      category: "Filters", referencePrefix: "FL", manufacturer: "Generic",
      subtitle: "Power supply noise filter", tags: ["lc-filter", "lc filter", "low pass", "emi", "power"],
      art: id, pins: [
        ...left(width, height, 36, 44, [filterIn, filterGround]),
        ...right(width, height, 36, 44, [filterOut, filterGround2]),
      ],
    },
    footprint: {
      body: [22, 13], color: "#246052", modelHeight: 1.6, size: 2, drill: 0.9,
      note: "Illustrative carrier for two 2.54 mm headers. The filter is a generic circuit block. Use the actual module's land pattern or the separate L and C footprints for PCB fabrication.",
      pads: [{ id: "in", x: -9, y: -1.27, square: true }, { id: "gnd", x: -9, y: 1.27 },
        { id: "out", x: 9, y: -1.27 }, { id: "gnd-2", x: 9, y: 1.27 }],
      details: [[0, 0, 7, 5, 3.1, "#38494a"], [6, 0, 4.5, 4.5, 4, "#aaada6"]],
    },
    art: filterArt,
  };
}

const filters = [
  passiveFilter("lc-filter", "LC Low-Pass Filter", "LC FILTER", "lc-filter",
    "Generic power filter with a series inductor and an output capacitor to ground. IN and OUT share the same ground. Choose L and C for the load, cutoff and damping."),
  passiveFilter("pi-lc-filter", "CLC Pi Low-Pass Filter", "CLC PI FILTER", "pi-filter",
    "Generic power filter with a series inductor and a shunt capacitor on each side. Both GND terminals share the same return.",
    recomSheet),
];

const tdkWidth = 148;
const tdkHeight = 104;
const tdkFilter = {
  component: {
    id: "tdk-mem2012f75r0t001", art: "tdk-mem2012f75r0t001", symbol: "pi-filter",
    name: "TDK MEM2012F75R0T001 Pi Filter", shortName: "MEM2012F",
    description: "Single-ended 0805 chip LC filter for signal-line EMI suppression. Typical cutoff is 75 MHz. Pin 1 and pin 3 are interchangeable. The center ground land joins both physical ground contacts.",
    manufacturer: "TDK", category: "Filters", subtitle: "75 MHz Pi low-pass / 12 V, 200 mA max",
    tags: ["lc-filter", "lc filter", "clc", "pi filter", "emi", "0805", "signal"], referencePrefix: "FL",
    source: "https://product.tdk.com/en/search/emc/emc/3tf/info?part_no=MEM2012F75R0T001",
    width: tdkWidth, height: tdkHeight,
    pins: [
      ...left(tdkWidth, tdkHeight, 52, 0, [terminal("in", "IN/OUT", "One of the two interchangeable signal terminals.", "passive", 1)]),
      ...right(tdkWidth, tdkHeight, 52, 0, [terminal("out", "OUT/IN", "Other interchangeable signal terminal.", "passive", 3)]),
      ...bottom(tdkWidth, tdkHeight, 74, 0, [terminal("gnd", "GND", "Common land for the package's ground contacts 2 and 4.", "passive", 2)]),
    ],
  },
  footprint: {
    body: [2, 1.25], modelHeight: 0.85, color: "#282b2d", smd: true,
    note: "TDK's common 0.4 × 2.0 mm ground land contacts package terminals 2 and 4. The signal lands use rectangular approximations of the recommended tapered pads.",
    pads: [{ id: "in", x: -1.15, y: 0, size: [0.7, 1.0] }, { id: "out", x: 1.15, y: 0, size: [0.7, 1.0] },
      { id: "gnd", x: 0, y: 0, size: [0.4, 2.0] }],
  },
  art: (component, showLabels) => {
    const contacts = [
      { x: 0, y: 52, nx: 28, ny: 52, labelX: 22, labelY: 39 },
      { x: 148, y: 52, nx: 120, ny: 52, labelX: 126, labelY: 39 },
      { x: 74, y: 104, nx: 74, ny: 75, labelX: 74, labelY: 92 },
    ];
    return contacts.map(({ x, y, nx, ny, labelX, labelY }, index) =>
      line(x, y, nx, ny, "#899ba1", 2) +
      (showLabels ? label(labelX, labelY, component.pins[index].label, 7.4, "#344450") : "")).join("") +
      rect(35, 28, 78, 48, 3, "#292e33", "#152228") +
      rect(29, 28, 19, 48, 2, "#b5b9b9", "#7a888c") +
      rect(100, 28, 19, 48, 2, "#b5b9b9", "#7a888c") +
      rect(65, 27, 18, 10, 1, "#b5b9b9", "#7a888c") +
      rect(65, 67, 18, 10, 1, "#b5b9b9", "#7a888c") +
      rect(62, 48, 24, 7, 1, "#726e62");
  },
};

function powerPart({ id, name, shortName, width, height, description, manufacturer, subtitle, tags, source, pins, art, footprint, model }) {
  return {
    component: { id, name, shortName, width, height, description, manufacturer, subtitle, tags, source,
      pins, art: id, category: "Power", referencePrefix: "U" },
    art, footprint, model,
  };
}

function packageLeads(component, showLabels, connections) {
  return component.pins.map((pin, index) => {
    const [x, y, endX, endY] = connections[index];
    const before = pin.x === 0;
    const caption = pin.y === component.height
      ? label(pin.x, pin.y - 8, pin.label, 8, "#344450")
      : label(before ? 4 : component.width - 4, pin.y - 9, pin.label, 8, "#344450", before ? "start" : "end");
    return line(pin.x, pin.y, x, y, "#a5adb2", 2.2) +
      line(x, y, endX, endY, "#b6bfc4", 6) + (showLabels ? caption : "");
  }).join("");
}

function throughHoleLdo({ part, id, source, voltage, description }) {
  const width = 132;
  const height = 96;
  return powerPart({
    id, name: `${part} ${voltage} V LDO`, shortName: part, width, height, source,
    description, manufacturer: "Microchip", subtitle: `${voltage} V / 250 mA / TO-92`,
    tags: ["ldo", "linear regulator", "low dropout", "to-92"],
    pins: bottom(width, height, 38, 28, [
      ground(1), vin(2, "Unregulated supply input. Place a 1 µF bypass capacitor near the pin."),
      vout(3, voltage, `Regulated ${voltage} V output. Place a 1 µF output capacitor near the pin.`),
    ]),
    art: (component, showLabels) => packageLeads(component, showLabels,
      [[38, 69, 38, 45], [66, 69, 66, 45], [94, 69, 94, 45]]) +
      path("M29 49V29C29 7 103 7 103 29V49L94 56H38Z", "#263137", "#15232a") +
      rect(34, 27, 64, 25, 3, "#37464e", "#4c5a60") +
      label(66, 39, part.split("-")[0], 10) + label(66, 49, `${voltage} V`, 7),
    footprint: {
      body: [4.71, 4.0], modelHeight: 5.0, color: "#293841",
      package: "Microchip TO-92 (TO), straight in-line leads",
      note: "Three 1.27 mm pitch through-hole pads for straight in-line leads. Use the Microchip package drawing to confirm drill tolerance and lead forming.",
      groups: [{ ids: ["gnd", "vin", "vout"], x: -1.27, y: 0, pitch: 1.27, drill: 0.65, size: 1.13 }],
    },
  });
}

function sot25Ldo({ part, id, source, manufacturer, current, description, coordinates, padSize, on, model }) {
  const width = 146;
  const height = 82;
  return powerPart({
    id, name: `${part} 3.3 V LDO`, shortName: part, width, height, source, manufacturer, description, model,
    subtitle: `3.3 V / ${current} mA / SOT-23-5`, tags: ["ldo", "linear regulator", "low dropout", "sot-23-5"],
    pins: [
      ...left(width, height, 22, 20, [
        vin(1, "Supply input. Fit the input capacitor specified in the datasheet."),
        ground(2), enable(on),
      ]),
      ...right(width, height, 22, 40, [vout(5, 3.3, "Regulated 3.3 V output. Fit the output capacitor specified in the datasheet."), noConnect]),
    ],
    art: (component, showLabels) => packageLeads(component, showLabels,
      [[39, 22, 54, 22], [39, 42, 54, 42], [39, 62, 54, 62], [107, 22, 92, 22], [107, 62, 92, 62]]) +
      rect(51, 11, 44, 61, 4, "#27343c", "#111e24") +
      rect(55, 15, 36, 53, 3, "#36434a", "#4c5d63") +
      circle(59, 21, 2.4, "#b6c0bc") + label(73, 36, "LDO", 10) + label(73, 51, "3.3 V", 8),
    footprint: {
      body: [1.6, 2.9], modelHeight: 1.45, color: "#28373d", smd: true, size: padSize,
      package: "SOT-23-5, 0.95 mm lead pitch",
      note: `SOT-23-5 surface-mount lands per the ${manufacturer} package example. Verify the package suffix and assembler requirements.`,
      pads: [{ id: "vin", x: -coordinates, y: -0.95 }, { id: "gnd", x: -coordinates, y: 0 },
        { id: "en", x: -coordinates, y: 0.95 }, { id: "nc", x: coordinates, y: 0.95 },
        { id: "vout", x: coordinates, y: -0.95 }],
    },
  });
}

function lm1117(voltage) {
  const width = 160;
  const height = 92;
  const part = `LM1117MPX-${voltage}/NOPB`;
  return powerPart({
    id: `lm1117-${voltage.replace(".", "-")}-sot223`, name: `TI LM1117-${voltage} LDO (SOT-223)`,
    shortName: `LM1117-${voltage}`, width, height, manufacturer: "Texas Instruments", source: tiLdo,
    description: `Fixed ${voltage} V, 800 mA linear regulator in the DCY SOT-223 package. Allow headroom for dropout and use the output capacitance and ESR in the datasheet. Tab and pin 2 are electrically common.`,
    subtitle: `${voltage} V / 800 mA / SOT-223 DCY`, tags: ["ldo", "linear regulator", "low dropout", "sot-223", part],
    model: { label: "TI package CAD and models", url: "https://www.ti.com/product/LM1117#design-tools-simulation" },
    pins: left(width, height, 24, 22, [
      ground(1), vout(2, voltage, `Regulated ${voltage} V output. The tab also carries VOUT.`),
      vin(3, "Unregulated input. Allow headroom for dropout under load."),
    ]),
    art: (component, showLabels) => packageLeads(component, showLabels,
      [[43, 24, 61, 24], [43, 46, 61, 46], [43, 68, 61, 68]]) +
      rect(96, 27, 26, 38, 2, "#b7c0c2", "#899599") +
      rect(57, 12, 51, 69, 4, "#252f38", "#1a242a") +
      rect(60, 16, 45, 61, 2, "#37454d", "#49575b") +
      circle(64, 23, 2, "#b8c4c3") + label(83, 40, "LM1117", 9.5) + label(83, 55, `${voltage} V`, 9),
    footprint: {
      body: [3.5, 6.5], modelHeight: 1.8, color: "#293942", smd: true, size: [2.15, 0.95],
      shape: "roundrect", cornerRatio: 0.05,
      package: "TI DCY0004A SOT-223",
      note: "TI DCY0004A example land pattern. The drawing calls the tab pad 4. The footprint numbers both the output lead and the tab 2 so they share the VOUT net in KiCad.",
      pads: [{ id: "gnd", x: -2.9, y: -2.3 }, { id: "vout", x: -2.9, y: 0 }, { id: "vin", x: -2.9, y: 2.3 },
        { id: "vout", x: 2.9, y: 0, size: [2.15, 3.25] }],
    },
  });
}

const ldos = [
  throughHoleLdo({
    id: "mcp1700-3302-to92", part: "MCP1700-3302E/TO", voltage: "3.3",
    source: "https://www.microchip.com/content/dam/mchp/documents/APID/ProductDocuments/DataSheets/MCP1700-Data-Sheet-20001826F.pdf",
    description: "Low-quiescent-current 3.3 V Microchip LDO with 250 mA nominal maximum output. The input supply must allow for dropout and stay within the 6 V operating limit.",
  }),
  throughHoleLdo({
    id: "mcp1702-5002-to92", part: "MCP1702-5002E/TO", voltage: "5.0",
    source: "https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP1702-Data-Sheet-DS20002008.pdf",
    description: "Low-quiescent-current 5 V Microchip LDO with 250 mA nominal maximum output. The input supply must allow for dropout and stay within the 13.2 V operating limit. Check package dissipation.",
  }),
  sot25Ldo({
    id: "ap2112k-3-3", part: "AP2112K-3.3TRG1", manufacturer: "Diodes Incorporated", current: 600,
    source: "https://www.diodes.com/datasheet/download/AP2112.pdf", coordinates: 1.2, padSize: [0.8, 0.55],
    on: "Active-high enable. Drive low to disable the output.",
    description: "Fixed 3.3 V CMOS LDO with active-high enable and output discharge. This is the 5-pin SOT25 variant.",
  }),
  sot25Ldo({
    id: "tlv75533pdbvr", part: "TLV75533PDBVR", manufacturer: "Texas Instruments", current: 500,
    source: "https://www.ti.com/lit/ds/symlink/tlv755p.pdf", coordinates: 1.3, padSize: [1.1, 0.6],
    on: "Active-high enable. Use the datasheet thresholds and avoid leaving this input floating.",
    description: "Fixed 3.3 V, 500 mA low-IQ LDO. This is TI's 5-pin DBV variant without the exposed pad found on some other TLV755P packages.",
    model: { label: "TI package CAD and models", url: "https://www.ti.com/product/TLV755P#design-tools-simulation" },
  }),
  lm1117("3.3"), lm1117("5.0"),
];

const octagonalInductor = (x, y, size, mark = "") => {
  const a = size * 0.16;
  const b = size - a;
  return path(`M${x + a} ${y}h${size - 2 * a}l${a} ${a}v${size - 2 * a}l-${a} ${a}h-${size - 2 * a}l-${a} -${a}v-${size - 2 * a}Z`,
    "#30353b", "#a6a79d", 1) +
    line(x + a, y + b, x + b, y + b, "#212b2e") +
    label(x + size / 2, y + size / 2, mark, 11, "#d3d4cd");
};

function ceramic(x, y, width, height) {
  return rect(x, y, width, height, 1, "#bac1c1", "#7f898d") +
    rect(x + width * 0.22, y, width * 0.56, height, 0.75, "#b8946b", "#987851");
}

const pololuFront = {
  buck: () => octagonalInductor(46, 44, 46, "220") + chip(12, 23, 30, 20, "5410", 4) +
    [[12, 73, 25, 13], [48, 17, 14, 8], [67, 16, 15, 9], [45, 29, 17, 8], [68, 29, 17, 8], [46, 40, 12, 6], [67, 39, 13, 6]]
      .map(args => ceramic(...args)).join("") + smd(11, 14) + smd(34, 13) + smd(13, 59),
  "buck-boost-small": () => octagonalInductor(26, 10, 48) +
    [[9, 21, 13, 26], [78, 20, 13, 26], [10, 52, 29, 9], [61, 52, 28, 9],
      [14, 65, 29, 10], [56, 65, 29, 10], [14, 78, 29, 10], [56, 78, 29, 10]]
      .map(args => ceramic(...args)).join(""),
  "buck-boost": () => octagonalInductor(36, 54, 35) + chip(38, 27, 29, 22, "U1", 5) +
    [28, 40, 52, 64, 76].map(y => ceramic(10, y, 19, 8)).join("") +
    [35, 56, 70, 81].map(y => ceramic(76, y, 14, 8)).join("") +
    smd(25, 16) + smd(71, 14),
  boost: () => chip(20, 27, 32, 14, "", 3) + rect(64, 27, 22, 17, 2, "#263038", "#969e9e") +
    [[12, 54, 37, 13], [12, 72, 37, 13], [63, 45, 23, 16], [62, 71, 24, 10], [12, 11, 19, 7], [46, 13, 19, 7]]
      .map(args => ceramic(...args)).join("") + smd(12, 45) + smd(77, 12),
};

function pololuBoard({ modelName, item, voltage, title, variant, body, pinSpecs, description, modelUrl, details }) {
  const scale = 10;
  const width = Math.round(body[0] * scale) + 18;
  const height = Math.round(body[1] * scale) + 18;
  const spacing = 2.54 * scale;
  const id = `pololu-${modelName.toLowerCase()}`;
  const start = (width - (pinSpecs.length - 1) * spacing) / 2;
  return powerPart({
    id, name: `Pololu ${modelName} ${voltage} V ${title}`, shortName: modelName, width, height, description,
    manufacturer: "Pololu", subtitle: `${voltage} V / ${title} DC-DC`,
    tags: ["dc-dc", "dc dc", title.toLowerCase(), "regulator", "switching"], source: pololuUrl(item),
    model: modelUrl ? { label: "Pololu STEP model", url: modelUrl } : undefined,
    pins: bottom(width, height, start, spacing, pinSpecs),
    footprint: {
      body, color: "#256044", modelHeight: 1.02, drill: 1.02, size: 1.9, details,
      note: "Reference carrier for the Pololu module's 2.54 mm header. Contact numbering follows the drawn component-side view. Check assembly clearance on both sides of the module.",
      pads: pinSpecs.map(([id], index) => ({
        id, x: (index - (pinSpecs.length - 1) / 2) * 2.54, y: body[1] / 2 - 1.27, square: id === "gnd",
      })),
    },
    art: (component, showLabels) => {
      const padY = height - 21.7;
      const boardWidth = width - 18;
      const populatedHeight = padY - 36;
      return board(width, height, "#255e44", "#5b8c66", 8) +
        `<g transform="translate(9 17) scale(${boardWidth / 100} ${populatedHeight / 100})">${pololuFront[variant]()}</g>` +
        label(width / 2, 14, modelName, 8) +
        component.pins.map(pin => {
          const metal = pin.id === "gnd" ? rect(pin.x - 5, padY - 5, 10, 10, 0.6, "#d6b16f") : "";
          return metal + pad(pin.x, padY) + (showLabels
            ? line(pin.x, padY + 3, pin.x, height, "#be965c", 1.7) +
              label(pin.x, padY - 10, pin.label, 7, "#e7f0e8")
            : "");
        }).join("");
    },
  });
}

const shutdown = number => terminal("shdn", "SHDN", "Drive low to shut down. The on-board pull-up enables the regulator when this pin is open.", "input", number);
const powerGood = terminal("pg", "PG", "Open-drain power-good status. Add a pull-up to read the state.", "open_collector", 1);
const pololuBuck = (voltage, modelName, item) => pololuBoard({
  modelName, item, voltage, title: "Buck", variant: "buck", body: [12.7, 17.78],
  pinSpecs: [powerGood, shutdown(2), vin(3, "Input supply up to 36 V. Allow load-dependent headroom above VOUT."), ground(4), vout(5, voltage)],
  description: `Compact step-down module with fixed ${voltage} V output, power-good and shutdown. Pololu lists up to 1 A under suitable operating conditions. See the load and dropout curves.`,
  details: [[2.5, 1.7, 6, 6, 2.8, "#343c40"], [-2.6, -2.8, 4, 4, 0.9, "#242d34"]],
  modelUrl: "https://www.pololu.com/file/0J1375/pololu-1a-step-down-voltage-regulator-d24v10fx.step",
});

const converters = [
  pololuBuck("3.3", "D24V10F3", 2830),
  pololuBuck("5", "D24V10F5", 2831),
  pololuBoard({
    modelName: "S13V10F5", item: 4083, voltage: "5", title: "Buck-Boost", variant: "buck-boost-small", body: [8.89, 12.065],
    pinSpecs: [vout(1, 5), ground(2), vin(3, "Input supply from 2.8 V to 22 V.")],
    description: "Double-sided 5 V step-up and step-down module for supplies that vary above and below 5 V. Typical maximum output is 1 A near 5 V input. See the manufacturer's load curves.",
    details: [[0, -3.1, 4, 4, 1.8, "#343c40"]],
  }),
  pololuBoard({
    modelName: "S7V8F3", item: 2122, voltage: "3.3", title: "Buck-Boost", variant: "buck-boost", body: [11.43, 16.51],
    pinSpecs: [vout(1, 3.3), ground(2), vin(3, "Input supply from 2.7 V to 11.8 V."), shutdown(4)],
    description: "3.3 V step-up and step-down module with optional shutdown. Continuous current depends on input voltage and available cooling.",
    details: [[0, 1.6, 4, 4, 1.8, "#343c40"], [0, -3.1, 3.4, 3.4, 0.8, "#242d34"]],
    modelUrl: "https://www.pololu.com/file/0J1374/pololu-step-up-step-down-voltage-regulator-s7v8fx.step",
  }),
  pololuBoard({
    modelName: "U3V9F5", item: 5581, voltage: "5", title: "Boost", variant: "boost", body: [8.636, 13.589],
    pinSpecs: [vout(1, 5, "5 V while boosting. A higher input voltage passes through to this terminal."), ground(2),
      vin(3, "Input supply from 2.6 V to 20 V. Input above 5 V passes through to VOUT.")],
    description: "5 V step-up regulator for supplies below 5 V. Output follows input above 5 V. Output current depends on input voltage. See the manufacturer's load curves.",
    details: [[-1, -1, 3.8, 4, 1.8, "#aa895e"], [1.8, -3.2, 2, 2, 0.8, "#242d34"]],
    modelUrl: "https://www.pololu.com/file/0J2187/u3v9fx-step-up-voltage-regulator.step",
  }),
];

function sipConverter({ id, name, shortName, manufacturer, description, source, body, modelHeight, padY, minInput, maxInput, voltage, rating, art, model }) {
  const width = 138;
  const height = 120;
  return powerPart({
    id, name, shortName, width, height, manufacturer, description, source, art, model,
    subtitle: `${voltage} V / ${rating} / SIP-3`, tags: ["dc-dc", "dc dc", "buck", "step down", "sip-3", "78xx"],
    pins: bottom(width, height, 40, 29, [
      vin(1, `Positive input supply from ${minInput} V to ${maxInput} V.`), ground(2), vout(3, voltage),
    ]),
    footprint: {
      body, modelHeight, color: "#2d3b3f",
      note: "Vertical SIP-3 host-board pattern. The three leads use 2.54 mm pitch. Check the vendor's mechanical drawing and assembly clearance.",
      groups: [{ ids: ["vin", "gnd", "vout"], x: -2.54, y: padY, pitch: 2.54, drill: 1, size: 1.9 }],
    },
  });
}

const recom5V = sipConverter({
  id: "recom-r-78e5-0-0-5", name: "RECOM R-78E5.0-0.5 Buck Converter", shortName: "R-78E5.0-0.5",
  manufacturer: "RECOM", source: recomSheet, body: [11.6, 8.5], modelHeight: 10.4, padY: 2.25,
  minInput: 7, maxInput: 28, voltage: 5, rating: "500 mA",
  description: "Encapsulated non-isolated 5 V switching replacement for a 78xx regulator. See the RECOM datasheet for input capacitance, EMC filter and thermal derating.",
  model: { label: "RECOM documentation and STEP model",
    url: "https://recom-power.com/en/products/switching-regulators/switching-regulators-sip/rec-p-R-78E5.0-0.5.html#documentation" },
  art: (component, showLabels) => packageLeads(component, showLabels,
    [[40, 97, 40, 71], [69, 97, 69, 71], [98, 97, 98, 71]]) +
    rect(15, 10, 108, 66, 2, "#293035", "#1b2429") +
    path("M18 13H119V72H18Z", "none", "#4f5659") +
    label(69, 28, "RECOM", 11) + label(69, 43, "R-78E5.0-0.5", 9) +
    label(69, 58, "5 V / 0.5 A", 8) + circle(40, 67, 2.3, "#a5b4ad"),
});

const murata5V = sipConverter({
  id: "murata-oki-78sr-5", name: "Murata OKI-78SR-5/1.5-W36-C", shortName: "OKI-78SR",
  manufacturer: "Murata Power Solutions", source: "https://www.murata.com/products/productdata/8807037992990/oki-78sr.pdf",
  body: [10.9, 9.3], modelHeight: 16.5, padY: 0.95,
  minInput: 7, maxInput: 36, voltage: 5, rating: "1.5 A",
  description: "Vertical-mount, non-isolated 5 V buck module. Its three leads follow the 78xx input, common and output order. The listed 1.5 A output is subject to the datasheet derating conditions.",
  art: (component, showLabels) => packageLeads(component, showLabels,
    [[40, 99, 54, 84], [69, 99, 69, 84], [98, 99, 84, 84]]) +
    rect(34, 5, 70, 86, 1, "#22634b", "#184935") +
    circle(55, 12, 1.5, "#d7bd75") + circle(89, 12, 1.5, "#d7bd75") +
    path("M43 17H96L104 24V67L96 74H42L34 65V26Z", "#8f4c41", "#693e36") +
    rect(42, 26, 54, 42, 1, "#c4c0b8", "#7d7e79") +
    rect(42, 26, 54, 10, 1, "#283538") +
    label(69, 31, "OKI-78SR", 7.6) + label(69, 51, "5 V / 1.5 A", 7.3, "#343e41") +
    rect(48, 77, 42, 13, 1, "#282f30", "#556663"),
});

const powerParts = [...filters, tdkFilter, ...ldos, ...converters, recom5V, murata5V];

export const powerComponents = powerParts.map(({ component }) => component);
export const powerArt = Object.fromEntries(powerParts.map(({ component, art }) => [component.art, art]));
export const powerFootprints = Object.fromEntries(powerParts.map(({ component, footprint }) => [component.id, footprint]));
export const powerModels = Object.fromEntries(
  powerParts.filter(({ model }) => model).map(({ component, model }) => [component.id, model]),
);
