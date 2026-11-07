import { defineFamily } from "../registry.js";
import { chip, circle, label, line, mountingHole, pad, path, pinRow, rect, smd } from "../shared/svg.js";

const pcbColor = "#282b2e";
const pcbEdge = "#747878";
const headerPitch = 2.54;
const artworkScale = 5;
const boardLeft = 8;
const boardTop = 5;

const i2cHeader = [
  ["vin", "VIN", "3.3–5 V board supply input.", "power_in"],
  ["3vo", "3Vo", "Regulated 3.3 V output.", "power_out"],
  ["gnd", "GND", "Common ground for power and signals.", "power_in"],
  ["scl", "SCL", "I²C clock input.", "input"],
  ["sda", "SDA", "Bidirectional I²C data line.", "bidirectional"],
];

function airSensor({ id, name, shortName, description, subtitle, source, tags, body, contacts, padDiameter, details, draw, cad }) {
  const width = body[0] * artworkScale + 2 * boardLeft;
  const boardBottom = boardTop + body[1] * artworkScale;
  const height = boardBottom + 11;
  const pitch = headerPitch * artworkScale;
  const start = (width - (contacts.length - 1) * pitch) / 2;
  const pins = pinRow("bottom", width, height, start, pitch, contacts);
  const padY = boardBottom - pitch;
  return {
    component: {
      id, name, shortName, description, subtitle, source, tags, width, height, pins,
      category: "Sensors", manufacturer: "Adafruit", referencePrefix: "U", art: id,
    },
    art: (component, showLabels) => draw(component) + component.pins.map(({ x, y, label: caption }, index) =>
      line(x, padY, x, y, "#a28656", 1.2) + pad(x, padY) +
      (showLabels ? rect(x - 7, padY + (index % 2 ? -12 : 4), 14, 8, 1, pcbColor) +
        label(x, padY + (index % 2 ? -8 : 8), caption, 6.8) : "")
    ).join(""),
    footprint: {
      body, color: pcbColor, modelHeight: 1.6, details,
      groups: [{
        ids: pins.map(({ id }) => id), pitch: headerPitch, drill: 1, size: padDiameter, shape: "circle",
        x: -(pins.length - 1) * headerPitch / 2, y: body[1] / 2 - headerPitch,
      }],
      note: "Reference host-board carrier with the manufacturer’s 2.54 mm header geometry. The onboard STEMMA QT sockets duplicate the bus and power contacts. Check mounting and clearance against the manufacturer CAD.",
    },
    model: { label: "Adafruit STEP model", url: cad },
  };
}

function qtPort(x, y, flip = false) {
  const contacts = [5, 10, 15, 20].map(offset => line(14, offset, 19, offset, "#b6ad9d", 1.4)).join("");
  return `<g transform="translate(${x} ${y}) scale(${flip ? -1 : 1} 1)">` +
    rect(0, 0, 14, 26, 1.8, "#e4ded1", "#bcb6a8") + rect(0, 3, 4, 20, 1, "#b6aea0") +
    contacts + "</g>";
}

function scd40Art({ width }) {
  return rect(boardLeft, boardTop, 127, 114.3, 11, pcbColor, pcbEdge) +
    [21, width - 21].flatMap(x => [18, 106].map(y => mountingHole(x, y))).join("") +
    qtPort(8, 48) + qtPort(width - 8, 48, true) +
    label(78, 13, "SCD40", 11) + label(72, 24, "CO2/Temp/Hum", 7.5) + label(77, 32, "Sensor", 7) +
    rect(45, 33, 53, 53, 2, "#236650", "#5baa8b") +
    rect(48, 35, 47, 47, 7, "#a9aeac", "#dce1df") +
    rect(51, 38, 41, 41, 6, "#7b807f", "#d3d6d4") +
    path("M61 47H84V71H58V51Z", "#e5e5df") +
    rect(27, 33, 11, 16, 2, "#c1b49c", "#d5cdc0") + line(28, 41, 37, 41, "#746253") +
    chip(29, 83, 15, 10, "", 3) + rect(104, 33, 14, 13, 1, "#4c4c4a", "#aeaca3") +
    [17, 22, 27].map(x => line(x, 40, x, 42, "#c5b271", 1.4)).join("") +
    label(27, 45, "on", 5.5) + smd(48, 28) + smd(15, 83) + smd(51, 87) + smd(69, 90);
}

function pmsa003iArt({ width }) {
  const right = width - boardLeft;
  return path(`M8 5H${right}V247Q${right} 259 ${right - 12} 259H20Q8 259 8 247Z`, pcbColor, pcbEdge) +
    rect(9, 6, 176, 192, 3, "#258cb5", "#41565d") +
    rect(12, 9, 170, 186, 2, "#429ec0", "#76bfd1") +
    path("M11 112V193H182M177 12V192", "none", "#8ac4d4", 1) +
    rect(9, 6, 104, 105, 5, "#3c4042", "#6d777c") +
    rect(13, 10, 96, 97, 4, "#484c4e", "#525b60") +
    [[19, 17], [99, 97]].map(([x, y]) => circle(x, y, 4, "#25282a", "#797b78") +
      line(x - 1.5, y, x + 1.5, y, "#939597")).join("") +
    label(55, 97, "PLANTOWER", 8, "#232629") +
    `<g transform="rotate(-90 149 110)">${label(149, 110, "PLANTOWER", 10, "#275f73")}</g>` +
    qtPort(8, 213) + qtPort(right, 213, true) +
    mountingHole(21, 246) + mountingHole(right - 13, 246) +
    label(97, 206, "PMSA003I", 10) + label(97, 216, "PM2.5 Air Sensor", 7.2) +
    chip(45, 211, 13, 11, "", 3) + chip(80, 223, 14, 10, "", 3) +
    smd(43, 233) + smd(59, 223) + smd(70, 230) + smd(107, 226) + smd(120, 223) + smd(139, 229) +
    circle(36, 233, 1.8, "#c3bc78") + label(35, 239, "on", 5.5);
}

const parts = [
  airSensor({
    id: "adafruit-scd40-5187", name: "Adafruit SCD-40 CO₂, Temperature & Humidity Sensor", shortName: "SCD-40",
    description: "Adafruit #5187 STEMMA QT breakout with a Sensirion photoacoustic CO₂ sensor and integrated temperature and humidity measurement. I²C address 0x62.",
    subtitle: "I²C / CO₂, temperature and humidity",
    source: "https://learn.adafruit.com/adafruit-scd-40-and-scd-41/pinouts",
    tags: ["scd40", "scd-40", "5187", "carbon dioxide", "co2", "air quality", "temperature", "humidity", "i2c", "stemma qt"],
    body: [25.4, 22.86], contacts: i2cHeader, padDiameter: 1.9304, draw: scd40Art,
    details: [[0, -0.762, 10.1, 10.1, 6.5, "#a9aeac"], [-10.16, 0, 3.8, 6, 2.9, "#e4ded1"], [10.16, 0, 3.8, 6, 2.9, "#e4ded1"]],
    cad: "https://github.com/adafruit/Adafruit_CAD_Parts/blob/main/5187%20SCD-40%20C02%20Sensor/5187%20SCD-40%20C02%20Sensor.step",
  }),
  airSensor({
    id: "adafruit-pmsa003i-4632", name: "Adafruit PMSA003I Particulate Matter Sensor", shortName: "PMSA003I",
    description: "Adafruit #4632 STEMMA QT breakout with an onboard boost supply and Plantower laser-scattering module. Reports PM1.0, PM2.5 and PM10 over I²C at 0x12.",
    subtitle: "I²C / particulate matter",
    source: "https://learn.adafruit.com/pmsa003i/pinouts",
    tags: ["pmsa003i", "4632", "plantower", "pm2.5", "pm10", "dust", "particulates", "air quality", "i2c", "stemma qt"],
    body: [35.56, 50.8], contacts: [
      ...i2cHeader,
      ["rst", "RST", "Active-low reset input.", "input"],
      ["set", "SET", "Operating mode input. High enables measurement and low selects sleep.", "input"],
    ],
    padDiameter: 1.778, draw: pmsa003iArt,
    details: [[0, -6.35, 35, 38, 12, "#429ec0"], [-15.24, 16.51, 3.8, 6, 2.9, "#e4ded1"], [15.24, 16.51, 3.8, 6, 2.9, "#e4ded1"]],
    cad: "https://github.com/adafruit/Adafruit_CAD_Parts/blob/main/4632%20PMSA003I/4632%20PMSA003I.step",
  }),
];

const airQualitySensorComponents = parts.map(({ component }) => component);
const airQualitySensorArt = Object.fromEntries(parts.map(({ component, art }) => [component.id, art]));
const airQualitySensorFootprints = Object.fromEntries(parts.map(({ component, footprint }) => [component.id, footprint]));
const airQualitySensorModels = Object.fromEntries(parts.map(({ component, model }) => [component.id, model]));

export default defineFamily("air-quality-sensors", (airQualitySensorComponents).map(component => ({ component, render: (airQualitySensorArt)[component.art], footprint: (airQualitySensorFootprints)[component.id], model: airQualitySensorModels[component.id] })));
