import { defineFamily } from "../registry.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, label, line, path, rect, screw, smd, usb } from "../shared/svg.js";

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

const waveshareComponents = [rs485Board, servoAdapter, esp32Rs485Can];

const waveshareFootprints = {
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

function rs485BoardArt({ pins }, showLabels = true) {
  const uart = pins.filter(pin => pin.edge === "left").map(pin =>
    rect(24, pin.y - 5, 14, 10, 1.1, "#22272f", "#4b5867") +
    circle(37, pin.y, 3.15, "#b7b0a3", "#e0d8c5") +
    (showLabels ? label(43, pin.y, pin.label, 7.6, "#eef4f8", "start") : "")
  ).join("");
  const bus = pins.filter(pin => pin.edge === "top").map(pin =>
    screw(pin.x, pin.y, 8) +
    circle(pin.x, 56, 2.4, "#122542") +
    (showLabels ? label(pin.x, 16, pin.label, 8, "#eff5fa") : "")
  ).join("");
  return rect(26, 8, 192, 89, 0.8, "#244f82", "#6896bd") +
    path("M30 17H39Q43 17 43 22V83H30M72 64H108V86H72Z", "none", "#bdcfe0", 0.85) +
    path("M33 21H68L77 33M34 37H71M34 51H70M34 65H69L78 63M99 49H115M96 57H110L122 62", "none", "#456c9a", 1.45) +
    chip(78, 30, 21, 31, "", 4) +
    [69, 82, 95].map(x => smd(x, 69, "#3f4543") + smd(x, 78, "#56534d")).join("") +
    smd(56, 15, "#44494a") + smd(68, 15, "#b8b29d") + smd(82, 15, "#a6c4b8") +
    label(93, 19, "PWR", 5.7, "#e3eef3", "start") +
    rect(113, 23, 55, 44, 1.8, "#3468ab", "#7f9fc5") +
    rect(116, 27, 49, 37, 1, "#3b72b7") +
    line(141, 26, 141, 65, "#1e477e", 1.5) +
    rect(170, 17, 54, 72, 1.5, "#363b41", "#838789") +
    rect(174, 20, 47, 66, 1.2, "#43474c") +
    line(220, 20, 220, 86, "#252b31") +
    [83, 101].map(x => rect(x - 6, 86, 12, 9, 1, "#28292b", "#a6b4c2") + circle(x, 90, 2, "#b9a579")).join("") +
    label(76, 91, "B", 6.2) + label(108, 91, "A", 6.2, "#edf3f6", "start") +
    label(143, 78, "3485 / 485", 7.1) + label(142, 90, "Waveshare", 8.2) +
    uart + bus;
}

function servoAdapterArt({ pins }, showLabels = true) {
  const shrouds = [35, 100].map(x =>
    path(`M${x - 11} 37V19l5-5h41l5 5v18Z`, "#f0e9d7", "#c0b7a4") +
    path(`M${x - 7} 34V21l5-4h33l5 4v13Z`, "#8e806c", "#e1d7c0") +
    rect(x - 9, 35, 48, 5, 0.7, "#d8d0bb")
  ).join("");
  const topPins = pins.filter(pin => pin.edge === "top").map(pin =>
    circle(pin.x, pin.y, 2.8, "#d8c39b", "#8c8170") +
    (showLabels ? label(pin.x, 45, pin.label, 8, "#e9edf0") : "")
  ).join("");
  const powerPins = pins.filter(pin => pin.edge === "bottom").map(pin =>
    screw(pin.x, pin.y, 7.8) +
    (showLabels ? label(pin.x, 125, pin.label, 7.6) : "")
  ).join("");
  const modeJumper = [175, 189].map(x =>
    rect(x - 5.5, 71, 11, 26, 1, "#dabb51", "#fff1a0") +
    rect(x - 2.6, 75, 5.2, 17, 0.8, "#6f582b") +
    circle(x, 79, 1.7, "#f1d58b") + circle(x, 88, 1.7, "#f1d58b")
  ).join("");
  return rect(8, 8, 212, 154, 10, "#2d3034", "#666561") +
    [19, 208].map(x => screw(x, 23, 9) + screw(x, 151, 9)).join("") +
    shrouds + rect(154, 16, 55, 18, 1.5, "#1b1d20", "#a2a3a0") +
    rect(166, 61, 33, 41, 0.9, "#1e2125", "#d2d3c9") + modeJumper +
    [175, 189].map(x => circle(x, 66, 2.35, "#c8b48b")).join("") +
    label(159, 72, "A", 7) + label(159, 90, "B", 7) +
    label(182, 53, "UART / USB", 7.4) +
    chip(88, 99, 31, 24, "", 4) + chip(56, 64, 13, 17, "", 3) +
    chip(149, 111, 17, 14, "", 4) +
    rect(107, 54, 18, 23, 1.2, "#1e2022", "#4c5155") +
    rect(125, 58, 12, 13, 1, "#aaaead", "#d2d5d3") +
    rect(126, 103, 20, 19, 2, "#5c5e60", "#a1a4a2") + label(136, 112, "4R7", 6, "#303639") +
    [[67, 56], [67, 62], [89, 60], [89, 74], [71, 80], [47, 82], [129, 95],
      [138, 95], [148, 95], [173, 109], [191, 111], [169, 121], [195, 122]].map(([x, y]) => smd(x, y)).join("") +
    rect(30, 101, 48, 63, 2.5, "#1c2126", "#555b5e") +
    rect(33, 105, 42, 43, 1.5, "#303439") +
    rect(31, 150, 46, 13, 1.2, "#26282d") +
    rect(93, 136, 46, 29, 2, "#73a875", "#b0c6a4") +
    rect(95, 138, 42, 12, 1.2, "#8bb88a") +
    rect(154, 135, 44, 30, 1.5, "#b8b9b3", "#e5e4dc") + usb(156, 147, 40) +
    label(54, 95, "DC 9–12.6 V", 6.8) + label(176, 130, "USB", 7) +
    `<g transform="rotate(-90 15 82)">${label(15, 82, "Bus Servo Adapter (A)", 6.5)}</g>` +
    topPins + powerPins;
}

function esp32Rs485CanArt({ pins, height }, showLabels = true) {
  const terminals = pins.filter(pin => pin.edge !== "left").map(pin => {
    const top = pin.edge === "top";
    return circle(pin.x, pin.y, 9.3, "#47544d", "#ececea") +
      screw(pin.x, pin.y, 7.6) +
      circle(pin.x, top ? 100 : 244, 10, "#78b33d", "#a8cb76") +
      (showLabels ? label(pin.x, top ? 100 : 244, pin.label, top ? 6.6 : 8.2, "#ffffff") : "");
  }).join("");
  const expansion = pins.filter(pin => pin.edge === "left").map((pin, index) => {
    return circle(pin.x, pin.y, 1.8, "#b7aa85") +
      (showLabels ? label(pin.x - 6, pin.y, String(index + 1), 4.8, "#f4f5e8", "end") : "");
  }).join("");
  const lights = [[32, "#967e68", "CAN"], [68, "#a08972", "RS485"], [103, "#a33b2d", "PWR"]].map(([x, fill, text]) =>
    circle(x, 143, 8, fill, "#d4c8b9") +
    circle(x - 2, 141, 2.5, "#ded6cb") +
    label(x, 157, text, 6.9, "#f2f3ee")
  ).join("");
  return path("M39 27V13L52 3H85L98 13V27H83V18Q68 8 54 18V27Z", "#df552f", "#ab4027") +
    rect(8, 18, 122, height - 20, 8, "#e5e6e5", "#c0c3c3") +
    rect(10, 19, 118, 42, 7, "#f1f1ee", "#e3e2df") +
    rect(8, 53, 122, 35, 4, "#e2e2df", "#d3d4d2") +
    rect(11, 68, 116, 17, 2, "#ebece8") +
    rect(9, 256, 120, 27, 4, "#d6d8d7", "#c7c9c8") +
    rect(10, 281, 118, 38, 3, "#edefeb", "#e4e6e3") +
    circle(30, 35, 9.1, "#3d4140", "#c2c4bf") +
    circle(55, 35, 9.1, "#3a403c", "#c2c4bf") +
    rect(17, 87, 104, 169, 1.2, "#212420", "#858b80") +
    rect(23, 93, 37, 15, 2.5, "#77b544") +
    rect(28, 97, 27, 7, 3.5, "none", "#eff6ea") +
    label(101, 117, "DC 7–36 V", 6.8) +
    rect(43, 112, 7, 26, 1, "#dfddcf", "#f5f4e8") +
    lights +
    `<g transform="rotate(90 50 192)">${label(50, 192, "ESP32-S3-RS485-CAN", 7.2)}</g>` +
    `<g transform="rotate(90 91 192)">${label(91, 192, "WAVESHARE", 9)}</g>` +
    path("M65 222V170l-4 6M71 168V222l4-6", "none", "#95bf59", 1.25) +
    label(42, 229, "CAN", 7.4) + label(92, 229, "RS485", 7.4) +
    expansion + terminals;
}

const waveshareArt = {
  "waveshare-rs485-3v3": rs485BoardArt,
  "waveshare-bus-servo-adapter-a": servoAdapterArt,
  "waveshare-esp32-s3-rs485-can": esp32Rs485CanArt,
};

const coreWaveshareModels = {
  "waveshare-bus-servo-adapter-a": {
    label: "Waveshare Bus Servo Adapter (A) STEP model",
    url: "https://files.waveshare.com/wiki/Bus-Servo-Adapter-%28A%29/Bus%20Servo%20Adapter%20%28A%29_3D.zip",
  },
};

const contactPositions = {
  "waveshare-rs485-3v3": pin => [pin.x === 0 ? 37 : pin.x, pin.y === 0 ? 41 : pin.y],
  "waveshare-bus-servo-adapter-a": pin => [pin.x, pin.y === 0 ? 25 : 151],
  "waveshare-esp32-s3-rs485-can": (pin, index) => pin.x === 0
    ? [46.5, 116 + (index - 2) * 6]
    : [pin.x, pin.y === 0 ? 35 : 294],
};

export default defineFamily("waveshare", waveshareComponents.map(component => physicalEntry({
  component, render: waveshareArt[component.art], footprint: waveshareFootprints[component.id], model: coreWaveshareModels[component.id],
}, contactPositions[component.id])));
