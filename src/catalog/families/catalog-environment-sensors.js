import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, pinRow, rect, screw, smd } from "../shared/svg.js";

const charcoal = "#2b2b2d";
const blue = "#0866a6";
const pitch = 2.54;
const canvasPitch = 20;
const margin = 6;

const vin = ["vin", "VIN", "3.3–5 V board supply. Match VIN to the host logic level.", "power_in"];
const regulated = ["3vo", "3Vo", "Regulated 3.3 V output.", "power_out"];
const ground = ["gnd", "GND", "Common ground for power and signals.", "power_in"];
const scl = ["scl", "SCL", "Level-shifted I²C clock input.", "input"];
const sda = ["sda", "SDA", "Level-shifted bidirectional I²C data line.", "bidirectional"];

function vendorStep(file) {
  const folder = encodeURIComponent(file);
  return {
    label: "Adafruit STEP model",
    url: `https://github.com/adafruit/Adafruit_CAD_Parts/blob/main/${folder}/${folder}.step`,
  };
}

function mountingHole(x, y) {
  return circle(x, y, 12.5, "#d6b672", "#efdfbc") + circle(x, y, 9.8, "#293441", "#706e66");
}

function headerHole(x, y) {
  return circle(x, y, 6.8, "#cfaa67", "#e6cda3") + circle(x, y, 3.9, "#293441", "#70654b");
}

function breakout({
  id, name, shortName, source, description, subtitle, tags, color, body, mounting, header,
  art, details, model, note, terminalContacts = [],
}) {
  const [boardWidth, boardHeight] = body.map(mm => Math.round(mm * canvasPitch / pitch));
  const width = boardWidth + margin * 2;
  const top = terminalContacts.length ? 22 : margin;
  const height = boardHeight + top + margin;
  const firstPin = width / 2 - (header.length - 1) * canvasPitch / 2;
  const headerPins = pinRow("bottom", width, height, firstPin, canvasPitch, header);
  const terminalPins = terminalContacts.map(({ x, spec }) => {
    const position = Math.round(width / 2 + x * canvasPitch / pitch);
    return pinRow("top", width, height, position, 0, [spec])[0];
  });

  return {
    component: {
      id, name: `Adafruit ${name}`, shortName, source, description, subtitle, tags, manufacturer: "Adafruit",
      category: "Sensors", referencePrefix: "U", art: id, width, height, pins: [...headerPins, ...terminalPins],
    },
    art: (_component, labels) => {
      const headerY = height - margin - canvasPitch;
      const outline = color === blue ? "#6a9ec6" : "#858185";
      return rect(margin, top + 2, boardWidth, boardHeight, 19, "#131d29") +
        rect(margin, top, boardWidth, boardHeight, 19, color, outline) +
        mounting.map(([x, y]) => mountingHole(x, y)).join("") + art() +
        headerPins.map(pin => line(pin.x, headerY, pin.x, pin.y, "#ac8550", 1.5) + headerHole(pin.x, headerY) +
          (labels ? label(pin.x, headerY - 12, pin.label, 7.5) : "")).join("") +
        terminalPins.map(pin => line(pin.x, pin.y, pin.x, top + 3, "#ac8550", 1.5)).join("");
    },
    footprint: {
      body, color, details, note,
      groups: [{
        ids: headerPins.map(pin => pin.id), y: body[1] / 2 - pitch, pitch, drill: 1, size: 1.778, shape: "circle",
      }],
      pads: terminalContacts.map(({ x, y, spec: [id] }) => ({
        id, x, y, drill: 1, size: 2.1844, shape: "circle",
      })),
    },
    model,
  };
}

function qtSocket(x, y, facingLeft) {
  const facing = facingLeft ? 1 : -1;
  return `<g transform="translate(${x} ${y}) scale(${facing} 1)">` +
    rect(0, 0, 32, 46, 1.7, "#e0d9c9", "#f2eee4") +
    rect(0, 3, 4, 40, 0.8, "#a49c89") +
    [9, 18, 27, 36].map(offset => line(32, offset, 38, offset, "#c0bdaf", 2.2)).join("") + "</g>";
}

const qtArtwork = () => qtSocket(7, 53, true) + qtSocket(205, 53, false) +
  label(14, 47, "on", 7) + smd(28, 45, "#f2d375") + chip(62, 68, 17, 16, "", 2) +
  smd(52, 44) + smd(53, 95) + chip(132, 48, 19, 14, "103", 4) + smd(142, 87, "#343a3f");

const qtDetails = [[-10, 0, 5.4, 5.8, 2.7, "#e0d9c9"], [10, 0, 5.4, 5.8, 2.7, "#e0d9c9"]];
const qtNote = "Reference host footprint for the published 2.54 mm header. The STEMMA QT sockets duplicate power and I²C nets. Mounting holes are omitted from this footprint.";

function thermocoupleChip() {
  const leads = Array.from({ length: 7 }, (_, index) => {
    const x = 86 + index * 5;
    return line(x, 107, x, 114, "#a4b5b9", 2.4) + line(x, 145, x, 152, "#a4b5b9", 2.4);
  }).join("");
  return leads + rect(80, 113, 42, 33, 2.5, "#22282c", "#6d787c") + circle(86, 119, 1.8, "#747d81");
}

const entries = [
  breakout({
    id: "adafruit-bmp390-4816", name: "BMP390 Barometric Pressure & Temperature Sensor", shortName: "BMP390",
    source: "https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx/pinouts",
    description: "Adafruit #4816 STEMMA QT breakout (Rev B layout) with a Bosch BMP390 or BMP390L. Measures barometric pressure and temperature over I²C or SPI. The I²C address is 0x77, or 0x76 with the ADDR jumper closed.",
    subtitle: "I²C or SPI / barometric pressure", tags: ["bmp390", "bmp390l", "4816", "barometer", "altimeter", "pressure", "temperature", "i2c", "spi", "stemma qt", "qwiic"],
    color: charcoal, body: [25.4, 17.78], mounting: [[26, 26], [186, 26]],
    header: [
      vin, regulated, ground,
      ["scl", "SCL", "Level-shifted I²C or SPI clock input. Also called SCK.", "input"],
      ["sdo", "SDO", "3.3 V SPI data output or I²C address select. Leave open for the onboard address setting.", "bidirectional"],
      ["sda", "SDA", "Level-shifted I²C data or SPI data input (SDI).", "bidirectional"],
      ["cs", "CS", "Active-low SPI chip select. Leave open for I²C.", "input"],
      ["int", "INT", "Configurable 3.3 V interrupt output.", "output"],
    ],
    art: () => qtArtwork() + label(113, 16, "BMP390", 13) + label(114, 31, "Temp + Pressure", 8.5) +
      smd(90, 45) + smd(90, 56) + smd(82, 72) + chip(129, 79, 15, 14, "", 2) +
      rect(98, 68, 16, 16, 2, "#b9bfbd", "#f6f7f0") + rect(101, 71, 10, 10, 1, "#9aa6a4") +
      circle(108, 73, 1.45, "#3f4846") + smd(139, 97, "#474742"),
    details: [...qtDetails, [0, 0, 2, 2, 0.75, "#b9bfbd"]], note: qtNote, model: vendorStep("4816 BMP390 QT"),
  }),
  breakout({
    id: "adafruit-sht45-5665", name: "SHT45 Precision Temperature & Humidity Sensor", shortName: "SHT45",
    source: "https://learn.adafruit.com/adafruit-sht40-temperature-humidity-sensor/pinouts",
    description: "Adafruit #5665 Rev A breakout with the Sensirion SHT45-AD1B-R2. Reads temperature and relative humidity over I²C at fixed address 0x44. The board has two STEMMA QT sockets.",
    subtitle: "I²C / temperature and humidity", tags: ["sht45", "sht4x", "5665", "temperature", "humidity", "relative humidity", "i2c", "stemma qt", "qwiic"],
    color: charcoal, body: [25.4, 17.78], mounting: [[26, 26], [186, 26], [26, 126], [186, 126]],
    header: [vin, regulated, ground, scl, sda],
    art: () => qtArtwork() + label(106, 16, "SHT45", 13) + label(111, 31, "Humidity & Temp", 8.5) +
      path("M88 90V58h36v32", "none", "#141518", 5.5) +
      rect(99, 69, 14, 14, 1.6, "#17191d", "#92948d") + circle(106, 76, 2, "#8f6138", "#ae997b") +
      smd(86, 99) + chip(133, 90, 14, 11, "", 2),
    details: [...qtDetails, [0, 0, 1.6, 1.6, 0.5, "#17191d"]], note: qtNote, model: vendorStep("5665 SHT45 Sensor"),
  }),
  breakout({
    id: "adafruit-mprls-3965", name: "MPRLS Ported Pressure Sensor", shortName: "MPRLS",
    source: "https://learn.adafruit.com/adafruit-mprls-ported-pressure-sensor-breakout/pinouts",
    description: "Adafruit #3965 breakout, based on the Rev A layout, with a Honeywell 0–25 psi absolute pressure sensor. The stainless-steel port accepts tubing and the fixed I²C address is 0x18.",
    subtitle: "I²C / 0–25 psi absolute", tags: ["mprls", "mprls0025pa00001a", "3965", "pressure", "absolute pressure", "ported pressure", "pneumatic", "vacuum", "i2c"],
    color: blue, body: [17.78, 16.51], mounting: [[26, 26], [126, 26]],
    header: [
      vin, regulated, ground, scl, sda,
      ["eoc", "EOC", "End-of-conversion output. Goes high when the pressure reading is ready.", "output"],
      ["rst", "RST", "Active-low hardware reset input with an onboard pull-up.", "input"],
    ],
    art: () => label(76, 17, "MPRLS", 13) + label(76, 31, "pressure", 9) +
      rect(57, 48, 38, 35, 7, "#727c7c", "#dde0da") +
      rect(60, 50, 32, 31, 7, "#c4c8c4", "#eeeeeb") +
      circle(76, 65, 11, "#9da4a2", "#e6e9e6") + circle(76, 65, 8, "#35372e", "#b5a785") +
      circle(76, 65, 5.3, "#111916") + path("M72 62q3-3 7-1", "none", "#b8a981", 1.2) +
      chip(21, 60, 12, 18, "", 2) + chip(112, 48, 19, 14, "103", 4) + chip(111, 76, 15, 15, "", 3) +
      smd(20, 43) + smd(23, 88) + smd(49, 37) + smd(72, 91),
    details: [[0, -0.635, 5, 5, 2.2, "#c4c8c4"], [0, -0.635, 2.5, 2.5, 5.9, "#9da4a2"]],
    note: "Reference host footprint for the published 2.54 mm header. Check clearance for the pressure port and tubing. Mounting holes are omitted from this footprint.",
    model: vendorStep("3965 MPRLS Pressure Sensor"),
  }),
  breakout({
    id: "adafruit-max31856-3263", name: "MAX31856 Universal Thermocouple Breakout", shortName: "MAX31856",
    source: "https://learn.adafruit.com/adafruit-max31856-thermocouple-amplifier/pinouts",
    description: "Adafruit #3263 Rev B board for external K, J, N, R, S, T, E or B thermocouples. It uses SPI and includes cold-junction compensation, a data-ready output, and a fault output.",
    subtitle: "SPI / thermocouple interface", tags: ["max31856", "3263", "thermocouple", "type k", "temperature", "high temperature", "spi"],
    color: blue, body: [24.13, 21.59], mounting: [[26, 41], [176, 41]],
    header: [
      [...vin, "9"], [...regulated, "8"], [...ground, "7"],
      ["sck", "SCK", "SPI clock input.", "input", "6"],
      ["sdo", "SDO", "SPI data output to the host controller (MISO).", "tri_state", "5"],
      ["sdi", "SDI", "SPI data input from the host controller (MOSI).", "input", "4"],
      ["cs", "CS", "Active-low SPI chip select.", "input", "3"],
      ["flt", "FLT", "Active-low fault indication output.", "output", "2"],
      ["drdy", "DRDY", "Active-low data-ready output.", "output", "1"],
    ],
    terminalContacts: [
      { x: -1.8, y: -6.985, spec: ["therm-plus", "+", "Positive thermocouple lead at screw terminal X1.1.", "input", "X1.1"] },
      { x: 1.7, y: -6.985, spec: ["therm-minus", "−", "Negative thermocouple lead at screw terminal X1.2.", "input", "X1.2"] },
    ],
    art: () => rect(72, 24, 57, 62, 2.5, "#51a78b", "#a1d2b5") +
      rect(75, 29, 51, 44, 2, "#75c2a3") + line(101, 30, 101, 73, "#4e9d81") +
      screw(87, 52, 10) + screw(114, 52, 10) + label(65, 33, "+", 12) + label(137, 33, "−", 12) +
      label(150, 57, "MAX", 10) + label(152, 70, "31856", 10) + label(48, 62, "Adafruit", 6.5) +
      thermocoupleChip() +
      smd(24, 76) + chip(24, 105, 12, 17, "", 2) + smd(23, 141) + smd(56, 90) + smd(56, 114) +
      smd(55, 140) + [151, 167, 182].map(x => smd(x, 87, "#3a4246") +
        rect(x + 2, 109, 5, 15, 1, "#27282b", "#bdc5be")).join(""),
    details: [[0, -6.985, 7.2, 7.7, 7, "#75c2a3"], [0, 2.54, 5, 4.4, 1, "#202936"]],
    note: "Reference layout from the Rev B breakout CAD. Pads 1–9 follow JP1. X1.1 and X1.2 mark the onboard screw terminal contacts for the external probe. Mounting holes are omitted from this footprint.",
    model: { label: "Adafruit MAX31856 PCB CAD (Eagle)", url: "https://github.com/adafruit/Adafruit-MAX31856-PCB" },
  }),
];

const environmentSensorComponents = entries.map(({ component }) => component);
const environmentSensorArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const environmentSensorFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const environmentSensorModels = Object.fromEntries(entries.map(({ component, model }) => [component.id, model]));

export default defineFamily("environment-sensors", (environmentSensorComponents).map(component => ({ component, render: (environmentSensorArt)[component.art], footprint: (environmentSensorFootprints)[component.id], model: environmentSensorModels[component.id] })));
