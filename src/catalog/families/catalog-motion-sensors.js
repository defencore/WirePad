import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { chip, circle, label, line, pad, pinRow, rect, smd } from "../shared/svg.js";

const pitch = 2.54;
const drawnPitch = 16;
const boardWidth = 160;
const marginX = 12;
const marginY = 22;
const width = boardWidth + marginX * 2;
const charcoal = "#303235";
const green = "#058369";
const silk = "#eeeae0";

const supply = [
  ["vin", "VIN", "3–5 V board supply. Match VIN to the host logic voltage.", "power_in"],
  ["3vo", "3Vo", "Regulated 3.3 V output.", "power_out"],
  ["gnd", "GND", "Common ground for power and logic.", "power_in"],
];
const i2c = [
  ["scl", "SCL", "Level-shifted I²C clock input.", "input"],
  ["sda", "SDA", "Level-shifted bidirectional I²C data.", "bidirectional"],
];
const i2cSpi = [
  ["scl", "SCL", "Level-shifted I²C or SPI clock input.", "input"],
  ["sda", "SDA", "Bidirectional I²C data or SPI data input.", "bidirectional"],
];
const magDataReady = ["drdy", "DRDY", "LIS3MDL data-ready output. Goes high when a new sample is ready.", "output"];

function qtPort(x, y, direction) {
  return `<g transform="translate(${x} ${y}) scale(${direction} 1)">` +
    [-12, -4, 4, 12].map(dy => line(19, dy, 27, dy, "#baad85", 2.1)).join("") +
    rect(0, -20, 22, 40, 2, "#3a3d3d", "#a4a7a0") +
    rect(1, -15, 5, 30, 1, "#22252a") +
    line(7, -18, 20, -18, "#aeb1a7", 0.8) +
    line(7, 18, 20, 18, "#24272b", 0.8) + "</g>";
}

function mountingRing(x, y) {
  return circle(x, y, 11, "none", silk) +
    circle(x, y, 9.5, "#c2a264") +
    circle(x, y, 8, "#2c302e", "#eee5ce");
}

function lga(x, y, w, h, marking = "") {
  return rect(x - w / 2, y - h / 2, w, h, 1.5, "#202226", "#797d73") +
    circle(x - w / 2 + 3, y - h / 2 + 3, 0.9, "#d2d1c2") +
    label(x, y + 1, marking, 5.4, "#a3a99c");
}

function axes(x, y, horizontal = "X", vertical = "Y", direction = 1) {
  return `<g transform="translate(${x} ${y})">` +
    line(direction * 5, 0, direction * 12, 0, silk) +
    line(direction * 9, -2, direction * 12, 0, silk) +
    line(direction * 9, 2, direction * 12, 0, silk) +
    line(0, -5, 0, -12, silk) + line(-2, -9, 0, -12, silk) + line(2, -9, 0, -12, silk) +
    circle(0, 0, 5, "none", silk) + label(0, 0, "Z", 6, silk) +
    label(direction * 16, 0, horizontal, 6, silk) + label(0, -16, vertical, 6, silk) + "</g>";
}

function topView({ pins, height }, color, artwork, topSilk, showLabels) {
  const boardHeight = height - marginY * 2;
  const padRow = pins.map(pin => {
    const x = pin.x - marginX;
    const top = pin.edge === "top";
    const y = pin.y - marginY;
    const captionY = top ? 5.5 : ["3Vo", "SCL", "INT2"].includes(pin.label) ? y - 10 : y + 10;
    return pad(x, y) +
      (!top || topSilk ? label(x, captionY, pin.label, 6.4, silk) : "");
  }).join("");
  const mounting = [drawnPitch, boardWidth - drawnPitch].flatMap(x =>
    [drawnPitch, boardHeight - drawnPitch].map(y => mountingRing(x, y))
  ).join("");
  const face = rect(0, 1.5, boardWidth, boardHeight, 15, "#20262c", "#151d25") +
    rect(0, 0, boardWidth, boardHeight, 15, color, "#8e998b") +
    rect(2, 2, boardWidth - 4, boardHeight - 4, 13, "none", "#838d82") +
    mounting +
    qtPort(0, boardHeight / 2, 1) + qtPort(boardWidth, boardHeight / 2, -1) +
    artwork() + padRow;
  return `<g transform="translate(${marginX} ${marginY})">${face}</g>`;
}

function breakout({
  id, name, shortName, description, subtitle, source, tags, color, boardDepth, topOffset = 0,
  upper, lower, upperHeader, lowerHeader, topSilk = false, artwork, details, cad,
}) {
  const height = boardDepth * drawnPitch + marginY * 2;
  const bottomStart = marginX + 40;
  const lowerPins = pinRow("bottom", width, height, bottomStart, drawnPitch, lower, `${lowerHeader}.`);
  const upperPins = pinRow("top", width, height, bottomStart + topOffset * drawnPitch, drawnPitch, upper, `${upperHeader}.`);
  const halfSpacing = (boardDepth - 2) * pitch / 2;
  const component = physicalComponent({
    id, name, shortName, description, subtitle, source, tags: [...tags, "stemma qt", "qwiic", "i2c"],
    manufacturer: "Adafruit", category: "Sensors", referencePrefix: "U", art: id, width, height,
    pins: [...lowerPins, ...upperPins],
  }, pin => [pin.x, pin.y === 0 ? marginY + drawnPitch : height - marginY - drawnPitch]);

  return {
    component,
    art: (part, showLabels) => topView(part, color, artwork, topSilk, showLabels),
    footprint: {
      body: [25.4, boardDepth * pitch], color, modelHeight: 1.6, shape: "circle", drill: 1, size: 1.778,
      groups: [
        { ids: lowerPins.map(pin => pin.id), x: -6.35, y: halfSpacing, pitch },
        { ids: upperPins.map(pin => pin.id), x: -6.35 + topOffset * pitch, y: -halfSpacing, pitch },
      ],
      details: [
        [-10.16, 0, 4.3, 6, 2.5, "#383b3a"], [10.16, 0, 4.3, 6, 2.5, "#383b3a"],
        ...details,
      ],
      note: "Host-board header pattern from the Adafruit Eagle design, viewed from the component side. The STEMMA QT sockets carry VIN, GND, SCL and SDA as an alternate connection. Mounting holes are outside this electrical footprint. The exported 3D body is approximate.",
    },
    model: {
      label: "Adafruit STEP and CAD files",
      url: `https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/${encodeURIComponent(cad)}`,
    },
  };
}

const entries = [
  breakout({
    id: "adafruit-lis3dh-2809", name: "Adafruit LIS3DH 3-Axis Accelerometer", shortName: "LIS3DH",
    description: "Adafruit #2809 STEMMA QT revision with ±2, ±4, ±8 and ±16 g ranges, two motion interrupt outputs and three auxiliary ADC inputs. The default I²C address is 0x18.",
    subtitle: "I²C / SPI / 3-axis acceleration",
    source: "https://learn.adafruit.com/adafruit-lis3dh-triple-axis-accelerometer-breakout/pinouts",
    tags: ["lis3dh", "2809", "accelerometer", "acceleration", "motion", "tilt", "spi"],
    color: charcoal, boardDepth: 7, upperHeader: "JP2", lowerHeader: "JP3", topSilk: true, cad: "2809 LIS3DH",
    lower: [
      ...supply, ...i2cSpi,
      ["int1", "INT", "Configurable LIS3DH interrupt 1 output at 3.3 V logic.", "output"],
    ],
    upper: [
      ["int2", "I2", "Configurable LIS3DH interrupt 2 output at 3.3 V logic.", "output", "JP2.6"],
      ["adc3", "A3", "Auxiliary ADC input 3.", "input", "JP2.5"],
      ["adc2", "A2", "Auxiliary ADC input 2.", "input", "JP2.4"],
      ["adc1", "A1", "Auxiliary ADC input 1.", "input", "JP2.3"],
      ["sdo", "SDO", "3.3 V SPI data output. In I²C mode, low selects 0x18 and 3.3 V selects 0x19.", "bidirectional", "JP2.2"],
      ["cs", "CS", "Active-low SPI chip select. Leave high for I²C.", "input", "JP2.1"],
    ],
    details: [[0, 0, 3, 3, 1, "#202226"]],
    artwork: () => label(92, 28, "LIS3DH", 10, silk) +
      lga(80, 56, 19, 19, "LIS") + chip(41, 55, 15, 11, "", 2) +
      chip(99, 58, 13, 11, "", 3) + chip(45, 33, 19, 10, "", 4) +
      chip(99, 39, 19, 9, "", 4) + smd(76, 35, "#5b5a57") +
      smd(40, 76) + smd(63, 77) + circle(32, 32, 2.3, "#8ac187", "#d9d4ae") +
      axes(118, 77),
  }),
  breakout({
    id: "adafruit-lis3mdl-4479", name: "Adafruit LIS3MDL 3-Axis Magnetometer", shortName: "LIS3MDL",
    description: "Adafruit #4479 STEMMA QT compass breakout with ±4 to ±16 gauss ranges and I²C or SPI. The vector-silkscreen board is shown. I²C uses 0x1C or 0x1E.",
    subtitle: "I²C / SPI / 3-axis compass",
    source: "https://learn.adafruit.com/lis3mdl-triple-axis-magnetometer/pinouts",
    tags: ["lis3mdl", "4479", "compass", "magnetometer", "magnetic field", "heading", "spi"],
    color: charcoal, boardDepth: 7, topOffset: 1, upperHeader: "JP1", lowerHeader: "JP4", cad: "4479 LIS3MDL",
    lower: [
      ...supply, ...i2cSpi,
      ["int", "INT", "Configurable magnetic-field threshold interrupt output.", "output"],
    ],
    upper: [
      ["gnd-2", "GND", "Second header contact on the common ground net.", "power_in"],
      magDataReady,
      ["sdo", "DO", "SPI data output. In I²C mode, low selects 0x1C and 3.3 V selects 0x1E.", "bidirectional"],
      ["cs", "CS", "Active-low SPI chip select. Leave high for I²C.", "input"],
    ],
    details: [[0, 0, 2, 2, 1, "#202226"]],
    artwork: () => label(80, 7.5, "LIS3MDL", 8.5, silk) +
      label(78, 27, "Magnetometer", 7.6, silk) +
      lga(80, 56, 13, 13) + chip(43, 51, 15, 11, "", 2) +
      chip(101, 61, 14, 11, "", 3) + chip(94, 37, 19, 9, "", 4) +
      smd(43, 33) + smd(44, 76) + smd(62, 41) + smd(61, 53) +
      smd(61, 65) + smd(108, 77) + circle(24, 33, 2.3, "#8ac187", "#d9d4ae") +
      axes(98, 78, "Y", "X", -1),
  }),
  breakout({
    id: "adafruit-lsm6dsox-lis3mdl-4517", name: "Adafruit LSM6DSOX + LIS3MDL 9-DoF IMU", shortName: "LSM6DSOX + LIS3MDL",
    description: "Adafruit #4517 STEMMA QT breakout with separate accelerometer/gyroscope and magnetometer chips. The vector-silkscreen board is shown. I²C defaults to 0x6A and 0x1C.",
    subtitle: "I²C / accelerometer, gyroscope & compass",
    source: "https://learn.adafruit.com/st-9-dof-combo/lsm6dsox-lis3mdl-pinouts",
    tags: ["lsm6dsox", "lis3mdl", "4517", "imu", "9dof", "accelerometer", "gyroscope", "magnetometer", "compass"],
    color: green, boardDepth: 7, upperHeader: "JP1", lowerHeader: "JP4", cad: "4517 LSM6DSOX-LIS3MDL",
    lower: [
      ...supply, ...i2c,
      ["int2", "INT2", "Configurable LSM6DSOX accelerometer/gyroscope interrupt 2 output.", "output"],
    ],
    upper: [
      ["adag", "ADAG", "LSM6DSOX I²C address select. Low selects 0x6A and high selects 0x6B.", "input"],
      ["adm", "ADM", "LIS3MDL I²C address select. Low selects 0x1C and high selects 0x1E.", "input"],
      magDataReady,
      ["intm", "INTM", "Configurable LIS3MDL magnetic-field threshold interrupt output.", "output"],
      ["int1", "INT1", "Configurable LSM6DSOX accelerometer/gyroscope interrupt 1 output.", "output"],
    ],
    details: [[-0.4445, -2.032, 2, 2, 1, "#202226"], [-0.254, 1.778, 3, 2.5, 0.86, "#202226"]],
    artwork: () => label(81, 7.5, "LSM6DSOX+LIS3MDL", 8, silk) +
      label(88, 27, "9 DoF", 8.5, silk) +
      lga(77, 43, 13, 13) + lga(78, 67, 19, 16) +
      chip(44, 63, 15, 12, "", 2) + chip(106, 66, 13, 11, "", 3) +
      chip(47, 37, 17, 9, "", 4) + chip(105, 41, 18, 9, "", 4) +
      smd(33, 29) + smd(47, 49) + smd(33, 79) + smd(53, 72) +
      smd(91, 49) + circle(22, 31, 2.3, "#b0d594", "#e4ddae") +
      axes(117, 30),
  }),
  breakout({
    id: "adafruit-bno085-4754", name: "Adafruit BNO085 9-DoF Orientation IMU", shortName: "BNO085",
    description: "Adafruit #4754 STEMMA QT breakout with onboard sensor fusion for rotation, acceleration and heading. The vector-silkscreen board is shown. I²C is 0x4A or 0x4B, with SPI, UART and UART-RVC modes also available.",
    subtitle: "I²C / SPI / UART / sensor fusion",
    source: "https://learn.adafruit.com/adafruit-9-dof-orientation-imu-fusion-breakout-bno085/pinouts",
    tags: ["bno085", "bno080", "4754", "imu", "9dof", "sensor fusion", "accelerometer", "gyroscope", "magnetometer", "compass", "spi", "uart"],
    color: charcoal, boardDepth: 9, upperHeader: "JP2", lowerHeader: "JP1", topSilk: true, cad: "4754 BNO085 STEMMA QT",
    lower: [
      ...supply,
      ["scl", "SCL", "I²C or SPI clock input, or UART RX in UART modes.", "input"],
      ["sda", "SDA", "Bidirectional I²C data, SPI MISO, or UART TX in UART modes.", "bidirectional"],
      ["int", "INT", "Active-low host interrupt output. Use this signal in SPI mode.", "output"],
    ],
    upper: [
      ["boot", "BT", "Active-low bootloader select. Leave pulled up for normal startup.", "input"],
      ["p0", "P0", "Protocol select bit 0. Also the wake input in SPI mode.", "input"],
      ["p1", "P1", "Protocol select bit 1. P1:P0 selects I²C (00), UART-RVC (01), UART (10) or SPI (11).", "input"],
      ["rst", "RST", "Active-low hardware reset input.", "input"],
      ["di", "DI", "SPI data input. In I²C mode, low selects 0x4A and high selects 0x4B.", "input"],
      ["cs", "CS", "Active-low SPI chip select.", "input"],
    ],
    details: [[0, -0.8255, 5.2, 3.8, 1.1, "#202226"], [-1.27, -4.8895, 3.2, 1.5, 0.9, "#a0a193"]],
    artwork: () => label(80, 28, "BNO08x 9-DoF", 10, silk) +
      lga(80, 67, 33, 24, "BNO085") + chip(60, 85, 33, 31, "AHC4050", 8) +
      rect(61, 37, 21, 10, 2, "#bcb2a2", "#e0d5bb") +
      label(71, 42, "32.768", 5.2, "#5b5144") +
      chip(28, 38, 18, 9, "", 4) + chip(103, 38, 19, 9, "", 4) +
      chip(108, 63, 13, 15, "", 3) + chip(30, 96, 14, 11, "", 2) +
      smd(43, 54) + smd(42, 63) + smd(37, 76) + smd(13, 96) +
      smd(142, 40) + circle(11, 46, 2.3, "#8ac187", "#d9d4ae") +
      axes(105, 109),
  }),
];

const motionSensorComponents = entries.map(({ component }) => component);
const motionSensorArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const motionSensorFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const motionSensorModels = Object.fromEntries(entries.map(({ component, model }) => [component.id, model]));

export default defineFamily("motion-sensors", (motionSensorComponents).map(component => ({ component, render: (motionSensorArt)[component.art], footprint: (motionSensorFootprints)[component.id], model: motionSensorModels[component.id] })));
