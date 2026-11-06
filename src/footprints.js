import { ads1220Footprint } from "./catalog-ads1220.js";
import { espRpFootprints, espRpModels } from "./catalog-esp-rp.js";
import { heltecSemtechFootprints, heltecSemtechModels } from "./catalog-heltec-semtech.js";
import { nordicBoardFootprints, nordicBoardModels } from "./catalog-nordic-boards.js";
import { nordicFootprints, nordicModels } from "./catalog-nordic.js";
import { stmArduinoFootprints, stmArduinoModels } from "./catalog-stm-arduino.js";
import { waveshareFootprints } from "./catalog-waveshare.js";

const GRID = 2.54;
const offBoard = "This footprint is a host-board termination for the cable. Verify the connector and wire order before fabrication.";
const breakout = "Reference carrier pattern for the exposed connections. Verify pad positions and numbering against the exact breakout before fabrication.";

const footprints = {
  "esp32-s3": {
    body: [25.4, 62.74], rows: 22.86, start: -26.67,
    note: "ESP32-S3-DevKitC-1 v1.1 carrier pattern. The headers use 2.54 mm pitch and 22.86 mm row spacing. Verify board outline, antenna clearance, and the fitted revision before fabrication.",
    color: "#23343b",
    details: [
      [0, -17, 17.8, 24.5, 2.4, "#a7b2bc"],
      [0, -27, 17.8, 6.2, 0.6, "#23343b"],
      [-5.8, 28, 7.4, 5.2, 2.4, "#9ca9b5"],
      [5.8, 28, 7.4, 5.2, 2.4, "#9ca9b5"],
    ],
  },
  max3485: { body: [24, 20], rows: 21, color: "#183d53", details: [[0, 0, 5, 6, 1.9, "#273041"]] },
  sp3485: { body: [24, 20], rows: 21, color: "#183d53", details: [[0, 0, 5, 6, 1.9, "#273041"]] },
  hw0519: {
    body: [43, 15], color: "#185481",
    note: "Photo-based reference carrier for the HW-0519. Measure the board and both header pitches, and verify the EARTH terminal on the fitted revision before fabrication.",
    groups: [
      { ids: ["vcc", "txd", "rxd", "gnd"], axis: "y", x: -20.32, y: -2.54 },
      { ids: ["a", "b", "earth"], axis: "y", x: 20.32, y: -5.08, pitch: 5.08, drill: 1.2, size: 2.5 },
    ],
    details: [[-9, 0, 5, 7, 1.7, "#273041"], [1, 1, 4, 5, 1.6, "#273041"]],
  },
  bme280: { body: [25.4, 17.8], edge: "horizontal", color: "#25476c", details: [[0, -1.6, 3, 3, 1.05, "#8b9ca5"]] },
  ads1115: { body: [27.9, 18], rows: 15.24, edge: "two-horizontal", color: "#315f9e", details: [[0, 0, 3, 4.9, 1.15, "#273041"]] },
  ads1220: ads1220Footprint,
  ina219: { body: [25.4, 22.9], rows: 17.78, color: "#315f9e", details: [[0, 0, 5, 6, 1.7, "#273041"]] },
  ssd1306: { body: [27.5, 27.8], edge: "horizontal", color: "#254f70", details: [[0, 2, 25.5, 15.7, 2.15, "#172638"]] },
  lm2596: { body: [43, 23], rows: 39, pitch: 5.08, size: 2.2, drill: 1.2, color: "#285fa1", details: [[0, 0, 12, 12, 5.6, "#273041"]] },
  "rs485-soil": { body: [15.24, 7.6], pitch: 3.81, inline: true, drill: 1.2, size: 2.25, color: "#396c50", modelHeight: 7, note: offBoard },
  st3215: {
    body: [8.4, 5.7], pitch: 2.5, inline: true, drill: 1, size: 1.8, color: "#dddcd4", modelHeight: 7.7,
    note: "Reference host-board termination for one 5264-3P servo cable. Verify connector orientation and GND, VCC, and DATA order against the mating cable.",
  },
  battery: { body: [5.8, 4.5], pitch: 2, inline: true, color: "#d9dad4", modelHeight: 4.5, note: offBoard },
  resistor: { body: [6.3, 2.5], pitch: 7.62, inline: true, modelHeight: 2.5, color: "#c9ac75", package: "DIN0207 axial, 7.62 mm lead pitch" },
  capacitor: { body: [5, 2.5], pitch: 2.5, inline: true, modelHeight: 5, color: "#bf964c", package: "5 mm ceramic disc, 2.5 mm lead pitch" },
  electrolytic: { body: [6.3, 6.3], pitch: 2.5, inline: true, modelHeight: 7.7, color: "#354b62", package: "6.3 mm radial electrolytic, 2.5 mm lead pitch" },
  inductor: { body: [6.3, 3], pitch: 7.62, inline: true, modelHeight: 3, color: "#476457", package: "Axial inductor, 7.62 mm lead pitch" },
  "ferrite-bead": { body: [5.8, 3.5], pitch: 7.62, inline: true, modelHeight: 3.5, color: "#303a42", package: "Axial ferrite bead, 7.62 mm lead pitch" },
  diode: { body: [3.4, 1.75], pitch: 7.62, inline: true, modelHeight: 1.75, color: "#ad5f38", package: "DO-35 axial, 7.62 mm lead pitch" },
  led: { body: [5.6, 5.6], pitch: 2.54, inline: true, modelHeight: 7.3, color: "#af434e", package: "5 mm through-hole LED, 2.54 mm lead pitch" },
  npn: { body: [5.2, 4.2], pitch: 1.27, size: 1.12, drill: 0.65, inline: true, modelHeight: 5, color: "#2f3742", package: "TO-92 inline, 1.27 mm lead pitch" },
  nmos: { body: [5.2, 4.2], pitch: 1.27, size: 1.12, drill: 0.65, inline: true, modelHeight: 5, color: "#2f3742", package: "TO-92 inline, 1.27 mm lead pitch" },
  button: {
    body: [6, 6], drill: 1.1, size: 1.8, modelHeight: 3.4, color: "#a8a9aa",
    switch: true, package: "6 × 6 mm tact switch, 6.5 × 4.5 mm pad pattern",
    details: [[0, 0, 3.2, 3.2, 1.1, "#334155"]],
  },
  "terminal-2": { body: [10.16, 8.5], pitch: 5.08, drill: 1.25, size: 2.7, inline: true, modelHeight: 8, color: "#367b58", package: "Two-position screw terminal, 5.08 mm pitch" },
  "terminal-3": { body: [15.24, 8.5], pitch: 5.08, drill: 1.25, size: 2.7, inline: true, modelHeight: 8, color: "#367b58", package: "Three-position screw terminal, 5.08 mm pitch" },
  "pin-header-4": { body: [10.16, 2.54], pitch: GRID, drill: 1, size: 1.7, inline: true, modelHeight: 2.5, color: "#273041", package: "Single-row pin header, 2.54 mm pitch" },
  "jst-ph-2": { body: [5.9, 4.5], pitch: 2, drill: 0.75, inline: true, modelHeight: 5.9, color: "#d9dad4", package: "JST PH vertical through-hole header, 2 mm pitch" },
  ...waveshareFootprints, ...heltecSemtechFootprints, ...espRpFootprints,
  ...stmArduinoFootprints, ...nordicBoardFootprints, ...nordicFootprints,
};

function padAt(pin, x, y, settings, square) {
  const size = settings.size ?? 1.6;
  const [width, height] = Array.isArray(size) ? size : [size, size];
  const smd = Boolean(settings.smd);
  const shape = settings.shape ?? (square || smd ? "rect" : width === height ? "circle" : "oval");
  return {
    ...pin, x, y, shape, width, height, smd,
    cornerRatio: settings.cornerRatio, drill: smd ? null : settings.drill ?? 0.8,
  };
}

function rowPads(pins, settings, axis, across, start) {
  const pitch = settings.pitch ?? GRID;
  const origin = start ?? -(pins.length - 1) * pitch / 2;
  return pins.map((pin, index) => {
    const along = origin + index * pitch;
    return axis === "x"
      ? padAt(pin, along, across, settings, index === 0)
      : padAt(pin, across, along, settings, index === 0);
  });
}

function connectorPads(pins, settings) {
  const pinsById = new Map(pins.map(pin => [pin.id, pin]));
  const groups = (settings.groups ?? []).flatMap(({ ids, x, y, axis = "x", ...dimensions }) => rowPads(
    ids.map(id => pinsById.get(id)), { ...settings, ...dimensions }, axis, axis === "x" ? y : x, axis === "x" ? x : y,
  ));
  const individual = (settings.pads ?? []).map(({ id, x, y, square = false, ...dimensions }) => (
    padAt(pinsById.get(id), x, y, { ...settings, ...dimensions }, square)
  ));
  return [...groups, ...individual];
}

function modulePads(component, pins, settings) {
  const [width, height] = settings.body;
  const sortByX = (a, b) => a.x - b.x;
  if (settings.edge === "two-horizontal") {
    const distance = settings.rows / 2;
    const top = pins.filter((pin) => pin.y === 0).sort(sortByX);
    const bottom = pins.filter((pin) => pin.y > 0).sort(sortByX);
    return [...rowPads(top, settings, "x", -distance), ...rowPads(bottom, settings, "x", distance)];
  }
  if (settings.edge === "horizontal") {
    const ordered = [...pins].sort((a, b) => Number(a.number) - Number(b.number));
    return rowPads(ordered, settings, "x", component.id === "ssd1306" ? -height / 2 + 1.5 : height / 2 - 1.5);
  }
  const distance = (settings.rows ?? width - 3) / 2;
  const left = pins.filter((pin) => pin.x <= component.width / 2).sort((a, b) => a.y - b.y);
  const right = pins.filter((pin) => pin.x > component.width / 2).sort((a, b) => a.y - b.y);
  return [
    ...rowPads(left, settings, "y", -distance, settings.start),
    ...rowPads(right, settings, "y", distance, settings.start),
  ];
}

function esp32Pads(component, pins, settings) {
  const main = pins.filter((pin) => /^J[13][.:]/.test(pin.number));
  if (main.length !== pins.length) return modulePads(component, pins, settings);
  const sorted = (header) => main.filter((pin) => pin.number.startsWith(header))
    .sort((a, b) => Number(a.number.slice(3)) - Number(b.number.slice(3)));
  return [
    ...rowPads(sorted("J1"), settings, "y", -settings.rows / 2, settings.start),
    ...rowPads(sorted("J3"), settings, "y", settings.rows / 2, settings.start),
  ];
}

export function footprintLayout(component) {
  const settings = footprints[component.id] ?? {
    body: [16, Math.max(8, component.pins.length * GRID + 3)], note: breakout,
  };
  const pins = component.pins.map((pin, index) => ({ ...pin, number: String(pin.number ?? index + 1) }));
  let pads;
  if (settings.groups || settings.pads) {
    pads = connectorPads(pins, settings);
  } else if (settings.switch && pins.length === 2) {
    const [a, b] = pins;
    pads = [
      padAt(a, -3.25, -2.25, settings, true),
      padAt(a, -3.25, 2.25, settings, false),
      padAt(b, 3.25, -2.25, settings, false),
      padAt(b, 3.25, 2.25, settings, false),
    ];
  } else if (settings.inline) {
    const ordered = [...pins].sort((a, b) => Number(a.number) - Number(b.number));
    pads = rowPads(ordered, settings, "x", 0);
  } else if (component.id === "esp32-s3") {
    pads = esp32Pads(component, pins, settings);
  } else {
    pads = modulePads(component, pins, settings);
  }
  const [width, height] = settings.body;
  const halfWidth = Math.max(width / 2, ...pads.map((pad) => Math.abs(pad.x) + pad.width / 2));
  const halfHeight = Math.max(height / 2, ...pads.map((pad) => Math.abs(pad.y) + pad.height / 2));
  const note = settings.note ?? (settings.package
    ? `${settings.package}. Verify the package dimensions and pin numbering for your specific part.`
    : breakout);
  return { ...settings, width, height, halfWidth, halfHeight, pads, note };
}

const models = {
  ads1115: {
    label: "Adafruit ADS1115 models",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/1085%20ADS1115%20ADC",
  },
  ina219: {
    label: "Adafruit INA219 models",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/904%20INA219%20Stemma",
  },
  st3215: {
    label: "Waveshare ST3215 STEP model",
    url: "https://files.waveshare.com/upload/5/59/ST3215-3D.zip",
  },
  "waveshare-bus-servo-adapter-a": {
    label: "Waveshare Bus Servo Adapter (A) STEP model",
    url: "https://files.waveshare.com/wiki/Bus-Servo-Adapter-%28A%29/Bus%20Servo%20Adapter%20%28A%29_3D.zip",
  },
  diode: {
    label: "Vishay DO-35 model",
    url: "https://www.vishay.com/en/product/81857/tab/designtools-ppg/",
  },
  ...heltecSemtechModels, ...espRpModels, ...stmArduinoModels, ...nordicBoardModels, ...nordicModels,
};

export function modelFor(component) {
  return models[component.id] ?? null;
}
