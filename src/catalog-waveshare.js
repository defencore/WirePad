const manufacturer = "Waveshare";

function port(x, y, dx, dy, name, pins) {
  return pins.map(([id, label, type, description, number = null], index) => ({
    id, label, type, description,
    number: `${name}.${number ?? index + 1}`,
    x: x + index * dx,
    y: y + index * dy,
  }));
}

const rs485Board = {
  id: "waveshare-rs485-3v3",
  art: "waveshare-rs485-3v3",
  name: "Waveshare RS485 Board (3.3V)",
  shortName: "Waveshare RS485 3.3V",
  category: "Interfaces",
  manufacturer,
  subtitle: "SP3485 / manual direction",
  description: "SP3485 half-duplex RS-485 adapter, Waveshare SKU 4777. Its screw terminals, A/B header and RJ11 provide alternative connections to the same bus.",
  tags: ["uart", "ttl", "rs485", "rs-485", "sp3485", "4777"],
  source: "https://www.waveshare.com/wiki/RS485_Board_%283.3V%29",
  width: 225,
  height: 105,
  referencePrefix: "U",
  pins: [
    ...port(0, 22, 0, 15, "UART", [
      ["vcc", "VCC", "power_in", "3.3 V supply input for the SP3485 version."],
      ["gnd", "GND", "power_in", "Supply and UART signal ground."],
      ["ro", "RO", "output", "Receiver output. Connect to the host UART RX."],
      ["di", "DI", "input", "Driver input. Connect to the host UART TX."],
      ["rse", "RSE", "input", "Direction select. Drive high to transmit and low to receive."],
    ]),
    ...port(128, 0, 26, 0, "BUS", [
      ["b", "B", "bidirectional", "Inverting RS-485 terminal, shared with B on the bus header."],
      ["a", "A", "bidirectional", "Non-inverting RS-485 terminal, shared with A on the bus header."],
    ]),
  ],
};

const servoAdapter = {
  id: "waveshare-bus-servo-adapter-a",
  art: "waveshare-bus-servo-adapter-a",
  name: "Waveshare Bus Servo Adapter (A)",
  shortName: "Bus Servo Adapter (A)",
  category: "Interfaces",
  manufacturer,
  subtitle: "UART / USB to ST and SC bus servos",
  description: "Waveshare SKU 25514 with two parallel TTL servo ports. Set the jumper to A for the UART header or B for USB. Supply the voltage specified for the connected servo.",
  tags: ["servo", "robotics", "st3215", "ttl", "uart", "25514"],
  source: "https://docs.waveshare.com/Bus_Servo_Adapter_A",
  width: 228,
  height: 174,
  referencePrefix: "U",
  pins: [
    ...port(35, 0, 14, 0, "S1", [
      ["servo1-data", "D", "bidirectional", "Servo port 1. Single-wire half-duplex TTL data, shared with port 2."],
      ["servo1-vcc", "V", "power_out", "Servo port 1. Supply from the adapter's external DC input."],
      ["servo1-gnd", "G", "passive", "Servo port 1 ground. Common with DC− and UART GND."],
    ]),
    ...port(100, 0, 14, 0, "S2", [
      ["servo2-data", "D", "bidirectional", "Servo port 2. Single-wire half-duplex TTL data, shared with port 1."],
      ["servo2-vcc", "V", "power_out", "Servo port 2. Supply from the adapter's external DC input."],
      ["servo2-gnd", "G", "passive", "Servo port 2 ground. Common with DC− and UART GND."],
    ]),
    ...port(165, 0, 17, 0, "H2", [
      ["uart-tx", "TX", "input", "Host-facing TX label. Connect to host TX when the mode jumper is set to A.", 3],
      ["uart-rx", "RX", "output", "Host-facing RX label. Connect to host RX when the mode jumper is set to A.", 2],
      ["uart-gnd", "GND", "passive", "Connect to the UART host ground.", 1],
    ]),
    ...port(105, 174, 22, 0, "H1", [
      ["dc-positive", "DC+", "power_in", "External servo supply input. Match the voltage to the connected servo.", 2],
      ["dc-negative", "DC−", "power_in", "External supply return. Common with servo and UART grounds.", 1],
    ]),
  ],
};

const esp32Rs485Can = {
  id: "waveshare-esp32-s3-rs485-can",
  art: "waveshare-esp32-s3-rs485-can",
  name: "Waveshare ESP32-S3-RS485-CAN",
  shortName: "ESP32-S3-RS485-CAN",
  category: "Microcontrollers",
  manufacturer,
  subtitle: "Isolated RS-485 and CAN / DIN rail",
  description: "Waveshare SKU 32154 with isolated RS-485 and CAN, built-in antenna, and two exposed GPIOs. Power the device from its DC terminal or USB-C.",
  tags: ["esp32", "rs485", "rs-485", "can", "twai", "din rail", "32154"],
  source: "https://docs.waveshare.com/ESP32-S3-RS485-CAN",
  width: 138,
  height: 322,
  referencePrefix: "U",
  pins: [
    ...port(89, 0, 25, 0, "PWR", [
      ["dc-negative", "GND", "power_in", "DC power return. Use the DC terminal or USB-C power, one at a time."],
      ["dc-positive", "VCC", "power_in", "7–36 V DC input. Use the DC terminal or USB-C power, one at a time."],
    ]),
    ...port(0, 77, 0, 19, "SH", [
      ["gnd", "GND", "passive", "Ground on the SH1.0 expansion connector."],
      ["3v3", "3V3", "power_out", "3.3 V output on the SH1.0 expansion connector."],
      ["gpio2", "IO2", "bidirectional", "ESP32-S3 GPIO2 on the SH1.0 expansion connector."],
      ["gpio1", "IO1", "bidirectional", "ESP32-S3 GPIO1 on the SH1.0 expansion connector."],
    ]),
    ...port(30, 322, 25, 0, "CAN", [
      ["can-low", "L", "bidirectional", "Isolated CAN low signal. The onboard 120 Ω termination is jumper-selectable."],
      ["can-high", "H", "bidirectional", "Isolated CAN high signal."],
    ]),
    ...port(80, 322, 25, 0, "RS485", [
      ["rs485-b", "B−", "bidirectional", "Isolated RS-485 B terminal. The onboard 120 Ω termination is jumper-selectable."],
      ["rs485-a", "A+", "bidirectional", "Isolated RS-485 A terminal."],
    ]),
  ],
};

export const waveshareComponents = [rs485Board, servoAdapter, esp32Rs485Can];

export const waveshareFootprints = {
  "waveshare-rs485-3v3": {
    body: [40, 17],
    color: "#284f7d",
    note: "Reference carrier for the UART header and separate A/B cable termination. Verify header pitch, orientation and carrier clearances against the Waveshare hardware.",
    groups: [
      { ids: ["vcc", "gnd", "ro", "di", "rse"], axis: "y", x: -17.5, y: -5.08 },
      { ids: ["b", "a"], x: 4, y: -5.5, pitch: 5.08, size: 2.5, drill: 1.25 },
    ],
    details: [[-6, 0, 5, 6, 1.7, "#263141"], [7, -4, 9, 6, 6, "#336493"]],
  },
  "waveshare-bus-servo-adapter-a": {
    body: [42, 33],
    color: "#303744",
    note: "Reference carrier and cable termination positions. Verify the adapter revision, D/V/G connector orientation, and actual connector locations against the Waveshare STEP model.",
    groups: [
      { ids: ["servo1-data", "servo1-vcc", "servo1-gnd"], x: -14, y: -13.5, pitch: 2.5 },
      { ids: ["servo2-data", "servo2-vcc", "servo2-gnd"], x: -3, y: -13.5, pitch: 2.5 },
      { ids: ["uart-tx", "uart-rx", "uart-gnd"], x: 8, y: -13.5 },
      { ids: ["dc-positive", "dc-negative"], x: -1.75, y: 13, pitch: 3.5, size: 2.25, drill: 1.2 },
    ],
    details: [[-11.5, 9, 8, 12, 9, "#252933"], [0, 12, 8, 7, 7, "#5a9970"], [11, 13, 9, 7, 3.3, "#acb4be"]],
  },
  "waveshare-esp32-s3-rs485-can": {
    body: [27, 24],
    color: "#5a7871",
    note: "Host-board cable termination for the DIN-rail module. Connector locations are a harness reference. Verify connector types, polarity, and isolation clearances for the intended assembly.",
    groups: [
      { ids: ["dc-negative", "dc-positive"], x: 4, y: -8, pitch: 3.5, size: 2.25, drill: 1.2 },
      { ids: ["gnd", "3v3", "gpio2", "gpio1"], axis: "y", x: -10, y: -5 },
      { ids: ["can-low", "can-high"], x: -9, y: 8, pitch: 3.5, size: 2.25, drill: 1.2 },
      { ids: ["rs485-b", "rs485-a"], x: 3.5, y: 8, pitch: 3.5, size: 2.25, drill: 1.2 },
    ],
    details: [[5.75, -8, 7, 6, 6, "#57916b"], [-7.25, 8, 7, 6, 6, "#57916b"], [5.25, 8, 7, 6, 6, "#57916b"]],
  },
};

function rs485BoardArt({ width, height }, { board, chip, label, line, rect, screw, smd }) {
  return board(width, height, "#284e82", "#5477a1") +
    chip(72, 34, 30, 35, "3485") + smd(69, 22) + smd(88, 22) + smd(88, 75) + smd(72, 78) +
    line(105, 49, 113, 49, "#6c89ae", 1.5) +
    rect(112, 23, 55, 43, 3, "#3466a8", "#6c99d0") +
    screw(128, 42) + screw(154, 42) +
    rect(171, 25, 46, 64, 3, "#29353f", "#71808c") +
    rect(175, 32, 39, 49, 2, "#222b34") +
    label(194, 56, "RJ11", 9, "#c3cbd1") +
    label(129, 82, "RS485", 10) + label(129, 93, "3.3 V", 7, "#bdd0e8");
}

function servoAdapterArt({ width, height }, { board, chip, label, mountingHole, rect, screw, smd, usb }) {
  return board(width, height, "#293342", "#536173") +
    [19, 209].map(x => mountingHole(x, 22) + mountingHole(x, 148)).join("") +
    [25, 90].map(x => rect(x, 24, 49, 24, 3, "#dedbd0", "#f6f3eb") +
      rect(x + 4, 28, 41, 15, 1, "#8f8778")).join("") +
    rect(155, 24, 55, 17, 3, "#141c25", "#596774") +
    chip(72, 62, 30, 33, "UART") + chip(111, 75, 28, 29, "DC/DC") +
    rect(158, 59, 42, 40, 4, "#222a33", "#737b84") +
    rect(166, 68, 11, 24, 2, "#dfb750", "#f8d87c") +
    rect(181, 68, 11, 24, 2, "#dfb750", "#f8d87c") +
    smd(43, 63) + smd(54, 83) + smd(107, 59) + smd(137, 112) +
    rect(27, 110, 52, 45, 4, "#19222a", "#697784") +
    rect(88, 120, 56, 29, 3, "#447b5b", "#8eb89a") +
    screw(105, 133, 7) + screw(127, 133, 7) +
    usb(161, 129, 36) +
    label(113, 111, "BUS SERVO", 8) + label(179, 110, "A / B", 7, "#ecd17f");
}

function esp32Rs485CanArt({ width, height }, { circle, label, rect, screw, usb }) {
  return rect(46, 4, 48, 21, 5, "#bf5737", "#973c2a") +
    rect(8, 9, width - 16, height - 18, 9, "#dce1e3", "#9ca9af") +
    rect(14, 12, width - 28, 34, 5, "#3d5157", "#6a7d83") +
    rect(14, 276, width - 28, 33, 5, "#3d5157", "#6a7d83") +
    [30, 55, 80, 105].map(x => screw(x, 290, 7)).join("") +
    screw(89, 33, 7) + screw(114, 33, 7) + usb(30, 26, 28) +
    rect(7, 63, 126, 198, 5, "#25343c", "#657783") +
    rect(55, 75, 67, 170, 5, "#15242c", "#4b6269") +
    [77, 96, 115, 134].map(y => rect(40, y - 2, 8, 4, 1, "#dfd9c8")).join("") +
    circle(70, 96, 4, "#96d099", "#b2ddbd") +
    circle(89, 96, 4, "#78aec3", "#b2dded") +
    circle(108, 96, 4, "#ca806d", "#edb4ab") +
    label(88, 124, "WAVESHARE", 8, "#8db9ad") +
    label(88, 146, "ESP32-S3", 10) +
    label(88, 163, "RS485", 10) +
    label(88, 179, "CAN", 10) +
    label(88, 217, "DIN RAIL", 7, "#adc4c4");
}

export const waveshareArt = {
  "waveshare-rs485-3v3": rs485BoardArt,
  "waveshare-bus-servo-adapter-a": servoAdapterArt,
  "waveshare-esp32-s3-rs485-can": esp32Rs485CanArt,
};
