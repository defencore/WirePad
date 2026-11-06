import { board, chip, circle, edgePads, label, line, mountingHole, pad, path, pinRow, rect, screw, smd, usb } from "./catalog-extension.js";

const black = "#22282a";
const blue = "#1165a1";
const green = "#287752";
const teal = "#116981";
const colors = {
  [black]: "#465256",
  [blue]: "#4290bb",
  [green]: "#5a9b73",
  [teal]: "#4f99a9",
};
const pin = (id, name, description, type = "passive") => [id, name, description, type];
const ground = (id = "gnd", name = "GND", description = "Board ground.") => pin(id, name, description, "power_in");
const battery = (name = "BAT") => pin("bat", name, "Single-cell battery positive terminal.", "passive");
const chargeIn = (name = "USB") => pin("usb", name, "5 V charge input. This contact is shared with the USB input power rail.", "power_in");
const holes = (...positions) => positions.map(([x, y]) => mountingHole(x, y)).join("");
const leds = (x, y) => smd(x, y, "#deedbd") + smd(x + 13, y, "#85d295");
const pth = (id, x, y, drill = 1, size = 1.778) => ({ id, x, y, drill, size });
const land = (id, x, y, w, h) => ({ id, x, y, smd: true, size: [w, h] });

function row(ids, x, y, axis = "x", pitch = 2.54, drill = 1, size = 1.778) {
  return { ids, x, y, axis, pitch, drill, size };
}

function module({ id, name, shortName, manufacturer, subtitle, description, source, model,
  tags, width, height, color, rows, footprint, illustration, outline, padOffset = 9 }) {
  let number = 1;
  const pins = rows.flatMap(([side, start, gap, specs]) =>
    pinRow(side, width, height, start, gap, specs.map(spec => [...spec, String(number++)])));
  return {
    component: { id, name, shortName, manufacturer, subtitle, description, source, tags, width, height,
      pins, art: id, category: "Power", referencePrefix: "U" },
    art: (component, showLabels) => (outline ? path(outline, color, colors[color]) : board(width, height, color, colors[color])) +
      illustration(component) + edgePads(component, showLabels, padOffset),
    footprint: { color, ...footprint },
    model,
  };
}

function socket(x, y, facing, size = 30) {
  const rotation = { top: 180, right: 270, bottom: 0, left: 90 }[facing];
  return `<g transform="translate(${x} ${y}) rotate(${rotation})">${usb(-size / 2, -9, size)}</g>`;
}

function jst(x, y, facing, dark = false, size = 25) {
  const rotation = { top: 180, right: 270, bottom: 0, left: 90 }[facing];
  const housing = dark ? "#343c42" : "#dedcc5";
  return `<g transform="translate(${x} ${y}) rotate(${rotation})">` +
    rect(-size / 2, -10, size, 23, 2, housing, dark ? "#60686b" : "#f5f0d6") +
    rect(-size / 2 + 4, -5, size - 8, 14, 1, dark ? "#181d20" : "#9e987c") +
    line(-5, -3, -5, 5, "#d8c597", 2) + line(5, -3, 5, 5, "#d8c597", 2) + "</g>";
}

function coil(x, y, size, marking) {
  return rect(x, y, size, size, 4, "#47494a", "#a2a5a0") +
    rect(x + 3, y + 3, size - 6, size - 6, 3, "#595d5b", "#686a67") +
    label(x + size / 2, y + size / 2, marking, 8);
}

function screwBlock(x, y, gap, color = "#137aba", horizontal = false) {
  return horizontal
    ? rect(x - 10, y - 10, gap + 20, 20, 2, color, "#80aaa9") + screw(x, y) + screw(x + gap, y)
    : rect(x - 11, y - 10, 22, gap + 20, 2, color, "#80aaa9") + screw(x, y) + screw(x, y + gap);
}

function dfrCharger(sku, connector, bodyWidth) {
  const typeC = connector === "USB-C";
  return module({
    id: `dfrobot-${sku.toLowerCase()}`,
    name: `DFRobot ${sku} ${connector} LiPo Charger`,
    shortName: sku, manufacturer: "DFRobot", subtitle: "TP4056X / 1-cell LiPo charger",
    description: "Dedicated charger for one 4.2 V Li-ion or LiPo cell. The underside programming pads select 50, 200 or 500 mA. Battery solder pads connect in parallel with the JST-PH jack.",
    source: `https://wiki.dfrobot.com/${sku.toLowerCase()}/`,
    tags: ["tp4056x", "tp4056", "charger", "lipo", "jst-ph", typeC ? "usb c" : "micro usb"],
    width: 156, height: 103, color: black,
    rows: [
      ["left", 33, 33, [battery("BAT+"), ground("bat-gnd", "BAT−", "Battery negative and common charger ground.")]],
      ["right", 20, 63, [ground("gnd", "GND", "Input return on the underside. Common with BAT−."), chargeIn("VIN")]],
    ],
    footprint: { body: [bodyWidth, 16.5], modelHeight: 2,
      note: "Reference carrier showing the underside wire solder lands in top-view orientation. Pad coordinates are estimated from the manufacturer's photos.",
      pads: [
        land("bat", -bodyWidth / 2 + 2, -2.5, 4.2, 2),
        land("bat-gnd", -bodyWidth / 2 + 2, 1.9, 4.2, 2),
        land("gnd", bodyWidth / 2 - 2.7, -6.2, 4.2, 2),
        land("usb", bodyWidth / 2 - 2.7, 6.2, 4.2, 2),
      ],
      details: [[-bodyWidth / 2 + 3, 0, 5, 8, 5, "#dedcc5"], [bodyWidth / 2 - 2.8, 0, 5, 8, 3, "#a6aeb9"]],
    },
    illustration: () => holes([18, 19], [18, 84]) + jst(25, 50, "left", false, 37) +
      socket(133, 50, "right", typeC ? 43 : 33) + chip(62, 30, 26, 36, "4056X", 4) +
      pad(66, 18) + pad(78, 18) + smd(93, 18, "#85d295") +
      smd(47, 36) + smd(50, 65) + smd(94, 55) +
      label(78, 83, sku, 11) + label(80, 94, `${connector} V1.0`, 6),
  });
}

const protectedCharger = module({
  id: "beemong-fa2119-tp4056-usbc-protected", name: "TP4056 USB-C Charger with Protection",
  shortName: "TP4056 USB-C", manufacturer: "Beemong", subtitle: "FA2119-1-0 / 1-cell charger + protection",
  description: "Blue 28 × 17 mm board variant with TP4056 charging and DW01/FS8205 cell protection. Connect the battery to B+ and B− and the load to OUT+ and OUT−. The load return is routed through the protection circuit.",
  source: "https://www.beemong.com/product/tp4056-1a-lipo-battery-charging-board-type-c-with-protection",
  tags: ["tp4056", "dw01", "8205a", "usb c", "protected charger", "li-ion", "lipo"],
  width: 166, height: 106, color: teal,
  rows: [
    ["left", 16, 74, [chargeIn("+"), ground("gnd", "−", "5 V input negative and protected load return.")]],
    ["right", 16, 24, [
      pin("out", "OUT+", "Protected load positive. This pad and B+ share the same positive rail.", "power_out"),
      battery("B+"), pin("bat-gnd", "B−", "Cell negative. Connect this only to the battery side of the protection circuit."),
      ground("out-gnd", "OUT−", "Protected load return. This connects to B− through the protection MOSFETs."),
    ]],
  ],
  footprint: { body: [28, 17], modelHeight: 1.7,
    note: "Reference carrier for the pictured FA2119-1-0 blue PCB. Terminal locations and drill diameters are estimated from the product photos. Verify against the fitted board.",
    pads: [pth("usb", -12.4, -6.8, 1.3, 2.4), pth("gnd", -12.4, 6.8, 1.3, 2.4),
      pth("out", 10.8, -6.8, 1.3, 2.4), pth("bat", 10.8, -3.8, 1.3, 2.4),
      pth("bat-gnd", 10.8, 3.6, 1.3, 2.4), pth("out-gnd", 10.8, 6.8, 1.3, 2.4)],
  },
  illustration: () => socket(23, 53, "left", 47) + chip(56, 35, 30, 36, "4056", 4) +
    chip(105, 26, 16, 18, "DW01", 3) + chip(102, 56, 20, 36, "8205A", 4) +
    leds(44, 15) + smd(71, 16, "#eff1db") + smd(49, 76) + smd(72, 77) + smd(90, 47) +
    label(80, 94, "4056", 9),
});

function powerBoost(is1000) {
  const current = is1000 ? 1000 : 500;
  const suffix = `${current}C`;
  const width = 226;
  const height = 132;
  const gnd = ground();
  const output = pin("vout", "5V", "Boost converter output, nominally 5.2 V.", "power_out");
  const en = pin("en", "EN", "Boost enable. Pulled high on the board. Connect to GND to disable the boost output.", "input");
  const low = pin("low", is1000 ? "LBO" : "LB", "Active-low battery flag. The board pulls it up above 3.3 V when the battery is charged. Use level translation for a 3.3 V input.", "open_collector");
  const ext = pin("vs", "VS", "Load-sharing supply to the boost converter. Powered by USB when present or by the battery otherwise.", "power_out");
  const specs = is1000
    ? [chargeIn(), battery("Bat"), ext, en, gnd, low, ground("gnd-2", "G"), output]
    : [chargeIn(), gnd, battery("Bat"), en, ground("gnd-2"), low, ground("gnd-3"), output];
  const x = is1000 ? 62 : 53;
  const y = is1000 ? height - 9 : 9;
  const extra = [ground("out-gnd", "−", "Ground at the alternate screw terminal."), pin("out-alt", "+", "Alternate connection to the 5.2 V boost output.", "power_out")];
  return module({
    id: `adafruit-powerboost-${current}c`, name: `Adafruit PowerBoost ${suffix}`, shortName: `PowerBoost ${suffix}`,
    manufacturer: "Adafruit", subtitle: `LiPo charger + 5.2 V boost / ${current} mA charge rate`,
    description: is1000
      ? "Single-cell charger with a 5.2 V boost converter and load sharing. The VS pin exposes the load-sharing rail and the Bat pin exposes the cell voltage."
      : "Single-cell charger with a 5.2 V boost converter. Battery power is available at Bat. The optional USB-A jack and the separate output pads share the same regulated output.",
    source: `https://learn.adafruit.com/adafruit-powerboost-${is1000 ? "1000c-load-share-usb-charge-boost" : "500-plus-charger"}/pinouts`,
    model: { label: "Adafruit EAGLE board files", url: `https://github.com/adafruit/Adafruit-PowerBoost-${is1000 ? "1000C" : "500-Charger-PCB"}` },
    tags: ["boost", "step up", "charger", "lipo", "usb power", "battery", "tps61090"],
    width, height, color: blue,
    rows: [[is1000 ? "bottom" : "top", x, 19, specs], ["right", 56, 22, extra]],
    footprint: {
      body: is1000 ? [36.07, 22.86] : [35.56, 21.59], modelHeight: 1.7,
      note: "Reference carrier with breakout header and alternate screw-terminal pad centers from Adafruit's EAGLE board. The optional USB-A connector is an on-module assembly option.",
      groups: is1000
        ? [row(specs.map(([id]) => id), -5.21, 10.16, "x", 2.54, 1, 1.6764)]
        : [row(["usb", "gnd"], -7.62, -9.53), row(specs.slice(2).map(([id]) => id), -2.54, -9.53, "x", 2.54, 1.016)],
      pads: [
        pth("out-gnd", is1000 ? 15.88 : 15.62, is1000 ? -2.12 : -1.67, 1, 2.1844),
        pth("out-alt", is1000 ? 15.88 : 15.62, is1000 ? 1.38 : 1.83, 1, 2.1844),
      ],
      details: [[-16, 0, 5, 7, 3, "#a6aeb9"], [-7, is1000 ? -7 : 7, 7, 5, 5, "#dedcc5"], [7, -3, 7, 7, 4, "#47494a"]],
    },
    illustration: () => holes([19, 19], [19, 112], [204, 27], [204, 104]) + socket(20, 64, "left", 32) +
      jst(69, is1000 ? 26 : 107, is1000 ? "top" : "bottom", false, 35) +
      chip(119, 66, 29, 29, "61090", 5) + chip(49, 49, 24, 23, is1000 ? "73871" : "73831", 4) +
      coil(144, 32, 35, "6R8") + rect(182, 45, 26, 45, 2, "none", "#c9deea") +
      pad(188, 54) + pad(188, 64) + pad(188, 74) + pad(188, 84) +
      leds(43, 89) + smd(106, 91) + smd(154, 95) + smd(93, 35) +
      label(is1000 ? 123 : 104, is1000 ? 21 : 47, "PowerBoost", 8) +
      label(is1000 ? 123 : 104, is1000 ? 30 : 57, suffix, 8) +
      label(166, is1000 ? y - 31 : y + 96, "adafruit", 7),
  });
}

function keyestudioAcs(sku, range) {
  return module({
    id: `keyestudio-${sku.toLowerCase()}-acs712`, name: `Keyestudio ACS712 ${range} A Current Module`,
    shortName: `ACS712 ${range}A`, manufacturer: "Keyestudio", subtitle: `${sku} / Hall-effect analog current sensor`,
    description: `Bidirectional current sensor module for the ACS712 ${range} A variant. Put the two screw terminals in series with the measured circuit. The analog output is nominally half the supply voltage at zero current.`,
    source: `https://docs.keyestudio.com/projects/${sku}/en/latest/docs/${sku}.html`,
    tags: ["acs712", "hall effect", "analog", "current", "ammeter", sku.toLowerCase()],
    width: 162, height: 109, color: black, padOffset: 12,
    outline: "M14 7H99C99 23 121 23 121 7H148Q155 7 155 14V95Q155 102 148 102H121C121 86 99 86 99 102H14Q7 102 7 95V14Q7 7 14 7Z",
    rows: [
      ["left", 37, 34, [pin("ip1", "IP1", "Upper current terminal in the illustrated orientation."), pin("ip2", "IP2", "Lower current terminal in the illustrated orientation.")]],
      ["right", 33, 22, [
        pin("vcc", "5V", "5 V power supply for the sensor.", "power_in"),
        pin("out", "OUT", "Analog measurement output, centered at half the supply for zero current.", "output"),
        ground("gnd", "G"),
      ]],
    ],
    footprint: { body: [31, 21], modelHeight: 1.6,
      note: "Reference carrier based on the pictured Keyestudio board and connector spacing. The module's outline and connector offsets are photo estimates.",
      groups: [row(["ip1", "ip2"], -12, -2.54, "y", 5.08, 1.2, 2.4), row(["vcc", "out", "gnd"], 13.7, -2.54, "y")],
      details: [[-12, 0, 7.8, 10.2, 8, "#137aba"], [2, 0, 4.9, 3.9, 1.75, "#171c21"]],
    },
    illustration: () => screwBlock(45, 37, 34) + chip(66, 34, 23, 36, "ACS712", 4) +
      rect(145, 24, 10, 62, 1, "#dab04e", "#edcc74") +
      mountingHole(108, 53) + smd(96, 24, "#e1e9be") + smd(111, 24) +
      smd(94, 76) + smd(111, 76) + label(79, 90, "Keyestudio.", 9, "#f4d266"),
  });
}

const adafruitUsbPd = module({
  id: "adafruit-5807-husb238", name: "Adafruit HUSB238 USB-C PD Breakout", shortName: "HUSB238 PD",
  manufacturer: "Adafruit", subtitle: "5807 / USB Power Delivery sink",
  description: "USB-C Power Delivery sink with selectable voltage and current through jumpers or I²C (address 0x08). The power output follows the negotiated supply. D+ and D− pass through from the USB receptacle.",
  source: "https://learn.adafruit.com/adafruit-husb238-usb-type-c-power-delivery-breakout/pinouts",
  model: { label: "Adafruit mechanical CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/5807%20HUSB238%20Breakout" },
  tags: ["usb c", "usb-pd", "power delivery", "trigger", "sink", "i2c"],
  width: 155, height: 152, color: black,
  rows: [
    ["bottom", 22, 20, [
      pin("sda", "SDA", "I²C data. Pull up to the host logic voltage.", "bidirectional"),
      pin("scl", "SCL", "I²C clock. Pull up to the host logic voltage.", "input"),
      pin("vout", "V+", "Negotiated USB power output, also available at the optional screw terminal.", "power_out"),
    ]],
    ["bottom", 102, 20, [
      ground(), pin("dm", "D−", "USB 2.0 data minus, passed through from the USB-C receptacle."),
      pin("dp", "D+", "USB 2.0 data plus, passed through from the USB-C receptacle."),
    ]],
  ],
  footprint: { body: [20.32, 23.5], modelHeight: 1.6,
    note: "Reference carrier with header and optional screw-terminal pad centers from Adafruit's original 5807 EAGLE board.",
    groups: [row(["sda", "scl", "vout"], -7.62, 9.21, "x", 2.54, 1, 1.6764),
      row(["gnd", "dm", "dp"], 2.54, 9.21, "x", 2.54, 1, 1.6764)],
    pads: [pth("vout", -1.8, 7.18, 1, 2.1844), pth("gnd", 1.7, 7.18, 1, 2.1844)],
    details: [[0, -8.2, 9, 7, 3.2, "#a6aeb9"]],
  },
  illustration: () => socket(77, 24, "top", 46) + holes([23, 26], [132, 26]) +
    chip(55, 66, 27, 21, "238", 5) + chip(55, 94, 22, 17, "", 4) +
    [64, 77, 90, 103, 116].map((y, index) =>
      smd(113, y, "#d0b268") + label(108, y + 2, ["5V", "9V", "12V", "15V", "18V"][index], 6.5, "#e0e6e7", "end")).join("") +
    smd(29, 66, "#d0b268") + smd(29, 83, "#d0b268") + smd(39, 110) +
    pad(60, 123) + pad(83, 123) + label(60, 115, "+", 7) + label(83, 115, "−", 7) +
    label(73, 49, "HUSB238", 10),
});

const adafruitMax = module({
  id: "adafruit-5580-max17048", name: "Adafruit MAX17048 LiPo Fuel Gauge", shortName: "MAX17048",
  manufacturer: "Adafruit", subtitle: "5580 / I²C single-cell battery monitor",
  description: "Single-cell Li-ion or LiPo fuel gauge with two parallel JST-PH connectors to monitor a battery while it powers the project. Reports voltage and state of charge over I²C (0x36). The board does not charge the cell.",
  source: "https://learn.adafruit.com/adafruit-max17048-lipoly-liion-fuel-gauge-and-battery-monitor/pinouts",
  model: { label: "Adafruit mechanical CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/5580%20MAX17048" },
  tags: ["fuel gauge", "battery monitor", "state of charge", "soc", "lipo", "i2c", "stemma qt"],
  width: 176, height: 137, color: black,
  rows: [
    ["bottom", 35, 21, [
      pin("vin", "VIN", "Supply for the I²C logic level. The fuel gauge itself is powered by the battery.", "power_in"),
      ground(),
      pin("scl", "SCL", "I²C clock.", "input"),
      pin("sda", "SDA", "I²C data.", "bidirectional"),
      pin("int", "INT", "Active-low alert output.", "open_collector"),
      pin("qst", "QStart", "Quick-start input. Drive high to restart the gauge estimate.", "input"),
    ]],
    ["top", 70, 34, [battery("BAT"), ground("bat-gnd", "GND", "Battery return. Common with logic GND.")]],
  ],
  footprint: { body: [25.4, 20.32], modelHeight: 1.6,
    note: "Reference carrier with header and battery wire pad centers from Adafruit's EAGLE board. Both JST-PH connectors share the battery pair.",
    groups: [row(["vin", "gnd", "scl", "sda", "int", "qst"], -6.35, 7.62),
      row(["bat", "bat-gnd"], -1.27, -1.27)],
    details: [[-4.32, -6.6, 7.5, 5, 6, "#343c42"], [4.32, -6.6, 7.5, 5, 6, "#343c42"],
      [-10.1, 1.27, 3.4, 6, 3, "#343c42"], [10.1, 1.27, 3.4, 6, 3, "#343c42"]],
  },
  illustration: () => holes([20, 20], [156, 20], [20, 107], [156, 107]) +
    jst(58, 37, "top", true, 40) + jst(117, 37, "top", true, 40) +
    jst(23, 76, "left", true, 36) + jst(151, 76, "right", true, 36) +
    pad(80, 57) + pad(97, 57) + chip(75, 68, 28, 22, "17048", 4) +
    smd(51, 65) + smd(111, 74) + smd(51, 81) + label(87, 101, "MAX17048", 11),
});

const adafruitIna = module({
  id: "adafruit-4226-ina260", name: "Adafruit INA260 Current and Power Sensor", shortName: "INA260",
  manufacturer: "Adafruit", subtitle: "4226 / I²C current, voltage and power",
  description: "INA260 digital power monitor with integrated current shunt and optional screw terminal. Bus-voltage sensing is factory-jumpered to VIN+ and can be routed to VBus separately.",
  source: "https://learn.adafruit.com/adafruit-ina260-current-voltage-power-sensor-breakout/pinouts",
  model: { label: "Adafruit EAGLE board files", url: "https://github.com/adafruit/Adafruit-INA260-PCB" },
  tags: ["ina260", "current sensor", "power meter", "voltage monitor", "shunt", "i2c"],
  width: 149, height: 177, color: blue,
  rows: [
    ["left", 20, 19.5, [
      pin("vcc", "Vcc", "2.7–5.5 V sensor supply.", "power_in"), ground(),
      pin("scl", "SCL", "I²C clock.", "input"), pin("sda", "SDA", "I²C data.", "bidirectional"),
      pin("alert", "Alert", "Open-drain programmable alert output.", "open_collector"),
      pin("vbus", "VBus", "Bus-voltage sense input. Factory jumper ties this to VIN+.", "input"),
      pin("ip", "Vin+", "Positive side of the integrated current shunt."),
      pin("im", "Vin−", "Negative side of the integrated current shunt."),
    ]],
    ["right", 68, 36, [
      pin("ip-term", "Vin+", "Screw-terminal connection to the same shunt terminal as the Vin+ header."),
      pin("im-term", "Vin−", "Screw-terminal connection to the same shunt terminal as the Vin− header."),
    ]],
  ],
  footprint: { body: [22.86, 22.86], modelHeight: 1.6,
    note: "Reference carrier with header and high-current terminal positions from Adafruit's EAGLE design, rotated to match the top-view illustration.",
    groups: [row(["vcc", "gnd", "scl", "sda", "alert", "vbus", "ip", "im"], -8.89, -8.89, "y")],
    pads: [pth("ip-term", 7.62, -2.54, 1.1, 2.1844), pth("im-term", 7.62, 2.54, 1.1, 2.1844)],
    details: [[7.62, 0, 7, 10.2, 8, "#343c42"], [-1.2, 0, 6.4, 4.5, 1.6, "#292e33"]],
  },
  illustration: () => holes([125, 22], [125, 153]) + chip(58, 64, 27, 47, "INA260", 8) +
    screwBlock(115, 68, 36, "#454849") + smd(51, 28, "#d8b76d") + smd(69, 28, "#d8b76d") +
    label(55, 19, "A0", 7) + label(73, 19, "A1", 7) + smd(61, 129, "#d8b76d") +
    label(82, 155, "INA260", 10) + label(82, 166, "Power Sensor", 7),
});

const microLipo = module({
  id: "adafruit-4410-microlipo-usbc", name: "Adafruit Micro-Lipo USB-C Charger", shortName: "Micro-Lipo USB-C",
  manufacturer: "Adafruit", subtitle: "4410 / 1-cell LiPo charger",
  description: "USB-C charger for a single 4.2 V Li-ion or LiPo cell. Charge current is 100 mA by default and selectable to 500 mA with the solder jumper. USB data pins are exposed as pass-through contacts.",
  source: "https://learn.adafruit.com/adafruit-microlipo-and-minilipo-battery-chargers/usb-c-pinout",
  model: { label: "Adafruit mechanical CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/4410%20Micro%20Lipo%20USBC" },
  tags: ["lipo charger", "usb c", "battery", "jst-ph", "mcp73831"],
  width: 142, height: 115, color: blue,
  rows: [["top", 36, 18, [
    chargeIn("5V"), pin("dm", "D−", "USB 2.0 data minus, directly connected to the receptacle."),
    pin("dp", "D+", "USB 2.0 data plus, directly connected to the receptacle."), ground(), battery(),
  ]]],
  footprint: { body: [24, 19], modelHeight: 1.6,
    note: "Reference carrier for the five exposed through holes. Header pitch matches the standard 2.54 mm spacing. Offsets are estimated from the top-view photo.",
    groups: [row(["usb", "dm", "dp", "gnd", "bat"], -5.08, -6.8)],
    details: [[-10, 0, 7.5, 9, 3.2, "#a6aeb9"], [8.7, 0, 5.5, 7.5, 6, "#343c42"]],
  },
  illustration: () => holes([22, 20], [121, 20], [22, 94], [121, 94]) +
    socket(20, 58, "left", 47) + jst(118, 57, "right", true, 38) +
    chip(67, 44, 15, 19, "", 3) + smd(55, 32) + smd(67, 32) + smd(56, 74) + smd(71, 74) +
    leds(81, 90) + smd(53, 94, "#d0b268") + label(62, 107, "500mA", 6),
});

const mp1584 = module({
  id: "makerfabs-mp1584en-mini", name: "Makerfabs MP1584EN Mini Buck Module", shortName: "MP1584EN Buck",
  manufacturer: "Makerfabs", subtitle: "MPC1518EN / D-SUN adjustable step-down",
  description: "Small adjustable buck converter with on-board trim potentiometer. This catalog entry shows the green D-SUN PCB photographed for Makerfabs SKU MPC1518EN. Set and check the output voltage before attaching a load.",
  source: "https://www.makerfabs.com/adjustable-mini-dc-dc-module-mp1584en.html",
  tags: ["mp1584", "mp1584en", "dc-dc", "buck", "step down", "adjustable", "d-sun"],
  width: 154, height: 125, color: green, padOffset: 16,
  rows: [
    ["left", 28, 69, [ground("in-gnd", "IN−", "Input supply return."), pin("vin", "IN+", "Unregulated positive input.", "power_in")]],
    ["right", 28, 69, [ground("out-gnd", "OUT−", "Output return. Common with IN−."), pin("vout", "OUT+", "Adjustable regulated positive output.", "power_out")]],
  ],
  footprint: { body: [22, 17], modelHeight: 1.6,
    note: "Photo-based reference carrier for the pictured green board. Dimensions, pad centers and drills are approximate. Paired holes at each corner are electrically common.",
    groups: [
      row(["in-gnd", "in-gnd"], -9.4, -7, "y", 2.54, 1.1, 1.9),
      row(["vin", "vin"], -9.4, 4.46, "y", 2.54, 1.1, 1.9),
      row(["out-gnd", "out-gnd"], 9.4, -7, "y", 2.54, 1.1, 1.9),
      row(["vout", "vout"], 9.4, 4.46, "y", 2.54, 1.1, 1.9),
    ],
    details: [[3.8, -1.4, 7, 7, 4, "#777b76"], [4.2, 5.4, 4, 4, 3.8, "#a6aeb9"]],
  },
  illustration: () => [15, 110].map(y => pad(16, y) + pad(138, y)).join("") +
    chip(46, 42, 24, 33, "1584", 4) + coil(85, 28, 37, "") +
    chip(36, 18, 25, 12, "SS34", 1) + smd(29, 61) + smd(73, 77) + smd(49, 89) +
    rect(83, 86, 27, 24, 4, "#a8a9a3", "#e0e1d6") + screw(96.5, 98) + label(98, 17, "D-SUN", 9),
});

const dfSolar = module({
  id: "dfrobot-dfr0559-solar-power-manager", name: "DFRobot Solar Power Manager 5V V1.1", shortName: "DFR0559 Solar",
  manufacturer: "DFRobot", subtitle: "DFR0559 / solar and USB LiPo charger with 5 V output",
  description: "Solar power manager with a 5 V solar-panel input, Micro USB charge input, single-cell battery input and regulated 5 V output. EN controls the black header's switched return. The USB-A output stays powered when EN is low.",
  source: "https://wiki.dfrobot.com/dfr0559/",
  tags: ["solar charger", "solar panel", "mppt", "boost", "battery", "power manager"],
  width: 232, height: 127, color: black,
  rows: [
    ["top", 105, 30, [
      pin("solar-in", "SOLAR+", "Positive input from the 5 V solar panel.", "power_in"),
      ground("solar-gnd", "SOLAR−", "Solar panel return."),
    ]],
    ["left", 45, 23, [
      ground("bat-gnd", "BAT−", "Battery negative terminal. Common with the JST-PH return."), battery("BAT+"),
    ]],
    ["right", 35, 18, [
      ground("system-gnd", "GND", "System ground on the blue header. Use this as the reference for EN."),
      pin("en", "EN", "Active-high enable for the switched output header. Leave the factory jumper in place for continuous output.", "input"),
      pin("en-bat", "BAT", "Battery rail on the blue control header. Jumper this to EN for continuous output.", "power_out"),
      pin("vout", "5V", "Regulated 5 V output, shared with the USB-A output.", "power_out"),
      pin("gnd", "GND SW", "Switched output return at the black header. It is disconnected from system ground when EN is low."),
    ]],
  ],
  footprint: { body: [63, 33], modelHeight: 1.6,
    note: "Reference carrier based on the V1.1 manufacturer dimension drawing. Terminal offsets and drill diameters are estimated. The 5V and switched GND columns each have three parallel contacts.",
    pads: [pth("solar-in", -2.28, -12.9, 1.2, 2.5), pth("solar-gnd", 1.68, -12.9, 1.2, 2.5),
      pth("bat-gnd", -27.7, -6.26, 1.2, 2.5), pth("bat", -27.7, -2.3, 1.2, 2.5)],
    groups: [row(["system-gnd", "en", "en-bat"], 9.55, -2.6, "y"), row(["vout", "vout", "vout"], 13.75, -2.6, "y"),
      row(["gnd", "gnd", "gnd"], 16.29, -2.6, "y")],
    details: [[-27.7, -4.2, 7, 8, 8, "#287752"], [-0.3, -12.9, 8, 7, 8, "#287752"],
      [26, 0, 11, 13, 7, "#a6aeb9"], [-12, -12.8, 7.6, 5.4, 3, "#a6aeb9"]],
  },
  illustration: () => holes([20, 20], [20, 106], [213, 20], [213, 106]) +
    socket(68, 21, "top", 33) + screwBlock(109, 26, 20, "#2c9157", true) +
    screwBlock(39, 44, 17, "#2c9157") + jst(36, 80, "left", false, 24) + socket(190, 62, "right", 45) +
    chip(106, 44, 25, 23, "MPPT", 4) + chip(78, 74, 24, 24, "", 4) + coil(112, 75, 28, "4R7") +
    [0, 1, 2].map(i => circle(152, 54 + 10 * i, 3.3, "#408be0") + circle(163, 54 + 10 * i, 3.3, "#f45c56") + circle(174, 54 + 10 * i, 3.3, "#151a1b", "#9da6a9")).join("") +
    smd(70, 45) + smd(66, 55) + smd(135, 74) + smd(156, 91) +
    label(140, 111, "Solar Power Manager V1.1", 8, "#e1bf6b"),
});

const parts = [
  dfrCharger("DFR0667", "Micro USB", 25),
  dfrCharger("DFR0668", "USB-C", 28),
  protectedCharger,
  powerBoost(false),
  powerBoost(true),
  keyestudioAcs("KS0187", 5),
  keyestudioAcs("KS0186", 20),
  keyestudioAcs("KS0185", 30),
  adafruitUsbPd,
  adafruitMax,
  adafruitIna,
  microLipo,
  mp1584,
  dfSolar,
];

export const commonPowerComponents = parts.map(({ component }) => component);
export const commonPowerArt = Object.fromEntries(parts.map(({ component, art }) => [component.id, art]));
export const commonPowerFootprints = Object.fromEntries(parts.map(({ component, footprint }) => [component.id, footprint]));
export const commonPowerModels = Object.fromEntries(parts.filter(({ model }) => model).map(({ component, model }) => [component.id, model]));
