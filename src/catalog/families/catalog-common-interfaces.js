import { defineFamily } from "../registry.js";
import { reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, edgePads, label, line, mountingHole, pad, path, pinRow, rect, screw, smd, usb } from "../shared/svg.js";

const pitch = 2.54;
const pololu = item => `https://www.pololu.com/product/${item}`;
const pololuModel = file => ({ label: "Pololu STEP model", url: `https://www.pololu.com/file/${file}.step` });
const adafruit = "https://learn.adafruit.com/";
const carrierNote = "The pads describe a carrier for the breakout header. Verify connector installation and mounting clearances on the actual module.";
const referenceNote = "Reference carrier. Check the connector pitches, row offsets, and body clearance against the exact module before fabrication.";

const input = (id, label, description) => [id, label, description, "input"];
const output = (id, label, description) => [id, label, description, "output"];
const bidir = (id, label, description) => [id, label, description, "bidirectional"];
const power = (id, label, description) => [id, label, description, "power_in"];
const supply = (id, label, description) => [id, label, description, "power_out"];
const passive = (id, label, description) => [id, label, description, "passive"];
const ground = (id = "gnd", text = "GND") => power(id, text, "Common supply and signal return.");
const fault = (id, text, description) => [id, text, description, "open_collector"];

function row(side, start, spacing, header, contacts) {
  return { side, start, spacing, header, contacts };
}

function carrierRow(contacts, x, y, settings = {}) {
  return { ids: contacts.map(([id]) => id), x, y, ...settings };
}

function module({ rows, face, footprint, model, drawPins = edgePads, insertion, ...definition }) {
  const { id, width, height } = definition;
  const component = {
    art: id, referencePrefix: "U", ...definition,
    pins: rows.flatMap(({ side, start, spacing, header, contacts }) =>
      pinRow(side, width, height, start, spacing, contacts, `${header}.`)),
  };
  const inset = pin => [pin.x === 0 ? 9 : pin.x === width ? width - 9 : pin.x, pin.y === 0 ? 9 : pin.y === height ? height - 9 : pin.y];
  const centers = {
    "sunfounder-l298n-hw095": (pin, index) => index < 4 ? [index < 2 ? 44 : 211, 146 + (index % 2) * 23]
      : index < 7 ? [51 + (index - 4) * 23, 196] : [pin.x, height - 9],
    "adafruit-tmc2209-6121": pin => [pin.x, pin.y === 0 ? 39 : height - 9],
    "keyestudio-ks0011-5v-relay": (pin, index) => index < 3 ? [36 + index * 26.5, 35] : [pin.x, height - 9],
    "adafruit-pca9685-815": (pin, index) => index < 6 ? [9, pin.y] : index === 6 ? [201, 34] : [pin.x, 135],
    "joyit-sbc-can01-mcp2515": (pin, index) => index < 8 ? [9, pin.y] : [158, 62 + (index - 8) * 24],
  };
  const entry = physicalEntry({
    component, footprint, model,
    render: (part, showLabels) => face(part) + drawPins(part, showLabels),
  }, centers[id] ?? inset);
  if (insertion) {
    const unitsPerMm = 8, origin = { x: width / 2, y: height / 2 };
    const physical = insertion.headers.flatMap(header => {
      const pins = entry.component.pins.filter(pin => String(pin.number).startsWith(`${header.header}.`));
      return pins.map((pin, index) => ({ pinId: pin.id, x: header.x + (header.axis === "y" ? 0 : index * 2.54),
        y: header.y + (header.axis === "y" ? index * 2.54 : 0) }));
    });
    const bodyRegions = [{ x: origin.x - insertion.body[0] * unitsPerMm / 2, y: origin.y - insertion.body[1] * unitsPerMm / 2,
      width: insertion.body[0] * unitsPerMm, height: insertion.body[1] * unitsPerMm }];
    const viewPins = physical.map(pin => ({ pinId: pin.pinId, x: origin.x + pin.x * unitsPerMm,
      y: origin.y + pin.y * unitsPerMm, face: "front" }));
    const sx = bodyRegions[0].width / (width - 14), sy = bodyRegions[0].height / (height - 14);
    for (const region of insertion.shells ?? []) bodyRegions.push({
      x: bodyRegions[0].x + (region.x - 7) * sx, y: bodyRegions[0].y + (region.y - 7) * sy,
      width: region.width * sx, height: region.height * sy,
    });
    const left = Math.min(...bodyRegions.map(region => region.x)), top = Math.min(...bodyRegions.map(region => region.y));
    const viewBounds = { x: left - .5, y: top - .5,
      width: Math.max(...bodyRegions.map(region => region.x + region.width)) - left + 1,
      height: Math.max(...bodyRegions.map(region => region.y + region.height)) - top + 1 };
    entry.mounting = reviewedBoardMounting({
      source: { label: `${definition.name} manufacturer header and board geometry`, url: definition.source },
      contacts: physical, calibration: { origin, unitsPerMm }, bodyRegions,
      bodyEvidence: "The exact source header rows and documented PCB dimensions establish this physical assembly. Existing stylized component-side hardware is resized to that PCB envelope; manufacturer mechanical CAD remains the fabrication authority.",
      viewBounds, view: { id: "breadboard", pins: viewPins,
        note: "Explicit millimeter header layout and full pin-ID mapping replace the old independently spaced illustration only for this new insertion view. No reference carrier row is used to infer compatibility." },
      renderMounted: () => `<g transform="translate(${bodyRegions[0].x - 7 * sx} ${bodyRegions[0].y - 7 * sy}) scale(${sx} ${sy})">${face(entry.component)}</g>` +
        viewPins.map(pin => circle(pin.x, pin.y, 5, "#d8b96d", "#efdeaa") + circle(pin.x, pin.y, 2.3, "#243a31")).join(""),
      note: "Populate both complete documented rows with straight male leads facing below the PCB; use the straight header option for a single-row USB adapter. Side-facing/female headers must be replaced for flat insertion. Allow USB-plug or motor-terminal access outside the breadboard.",
    });
  }
  return { ...entry, art: entry.render };
}

const pcb = ({ width, height }, color, rim) =>
  rect(7, 7, width - 14, height - 14, 2.5, color, rim);
const vias = (positions, color = "#c9a967") => positions.map(([x, y]) =>
  circle(x, y, 2.1, color) + circle(x, y, 1.1, "#122626")).join("");
const screwBlock = (x, y, count, color = "#3773a4", spacing = 18) =>
  rect(x - spacing / 2, y - 9, count * spacing, 18, 2, color, "#7c9d9d") +
  Array.from({ length: count }, (_, index) => screw(x + index * spacing, y, 6.9)).join("");
const verticalScrews = (x, y, count, color, spacing) =>
  rect(x - 9, y - spacing / 2, 18, count * spacing, 2, color, "#7c9d9d") +
  Array.from({ length: count }, (_, index) => screw(x, y + index * spacing, 6.9)).join("");
const qt = (x, y) => rect(x, y, 13, 19, 1.2, "#ebe5dd", "#979590") +
  rect(x + 2, y + 3, 9, 12, 0.8, "#92918b") + rect(x + 4, y + 4, 5, 10, 0.4, "#333a40");

function horizontalChip(x, y, width, height, text, legs) {
  const pins = Array.from({ length: legs }, (_, index) => {
    const px = x + 4 + index * (width - 8) / (legs - 1);
    return line(px, y - 5, px, y, "#bfc4c7", 2.5) +
      line(px, y + height, px, y + height + 5, "#bfc4c7", 2.5);
  }).join("");
  return pins + rect(x, y, width, height, 2, "#1b212c", "#65728a") +
    circle(x + 5, y + 5, 1.25, "#777f8a") + label(x + width / 2, y + height / 2, text, 7.4);
}

const stepControl = (modePrefix) => [
  input("enable", "EN", "Active-low output enable. High disables both motor bridges."),
  ...Array.from({ length: 3 }, (_, index) =>
    input(`mode-${index + 1}`, `${modePrefix}${modePrefix === "MS" ? index + 1 : index}`, "Microstep mode selection input. Use the mode table for this driver.")),
  input("reset", "RST", "Active-low reset input. Pull high to allow operation."),
  input("sleep", "SLP", "Active-low sleep input. Pull high to allow operation."),
  input("step", "STEP", "A rising edge advances one step or microstep."),
  input("direction", "DIR", "Motor direction select."),
];

const stepMotor = (pins, supplyRange, logic) => [
  power("vmot", "VMOT", `Motor supply input, ${supplyRange}. Provide local supply decoupling as specified by Pololu.`),
  ground("motor-ground"),
  ...pins.map(pin => output(`out-${pin.toLowerCase()}`, pin, `Motor winding ${pin[0]} terminal ${pin[1]}.`)),
  logic,
  ground("logic-ground"),
];

function stepper({ id, name, part, item, description, left, right, color, rim, face, model }) {
  return module({
    id, name, shortName: part, manufacturer: "Pololu", subtitle: `Stepper carrier #${item}`, category: "Actuators",
    description, tags: [part.toLowerCase(), "stepper", "driver", "motor", "step dir", "pololu", String(item)],
    source: pololu(item), width: 150, height: 184, model,
    insertion: { body: [15.24, 20.32], headers: [{ header: "L", x: -6.35, y: -8.89, axis: "y" }, { header: "R", x: 6.35, y: -8.89, axis: "y" }] },
    rows: [row("left", 23, 19.7, "L", left), row("right", 23, 19.7, "R", right)],
    face: component => pcb(component, color, rim) + face(),
    footprint: {
      body: [15.24, 20.32], color, size: 1.8, drill: 1.02,
      note: `15.24 × 20.32 mm Pololu carrier, 12.70 mm between header rows. ${carrierNote}`,
      groups: [carrierRow(left, -6.35, -8.89, { axis: "y" }), carrierRow(right, 6.35, -8.89, { axis: "y" })],
      details: [[0, 2, 5, 6, 1.1, "#263142"], [-2.5, -6.5, 3.5, 3.5, 1.8, "#c5bda6"]],
    },
  });
}

const a4988 = stepper({
  id: "pololu-a4988-1182", name: "Pololu A4988 Stepper Motor Driver", part: "A4988", item: 1182,
  description: "Green 16-pin carrier for a bipolar stepper motor. Supports full-step through 1/16 microstepping and adjustable current limiting. Includes a separate logic supply input.",
  left: stepControl("MS"),
  right: stepMotor(["2B", "2A", "1A", "1B"], "8–35 V", power("vdd", "VDD", "Logic supply input, 3–5.5 V. Match the controller's logic level.")),
  color: "#247448", rim: "#528f63",
  model: pololuModel("0J1223/a4988-stepper-motor-driver-carrier"),
  face: () => chip(58, 76, 34, 36, "A4988", 8) + screw(75, 137, 10) +
    [62, 76, 90].map(x => smd(x, 48) + smd(x, 157, "#56594d")).join("") +
    smd(61, 60) + smd(82, 60, "#b68e48") + label(75, 32, "A4988", 8.5),
});

const drv8825 = stepper({
  id: "pololu-drv8825-2133", name: "Pololu DRV8825 Stepper Motor Driver", part: "DRV8825", item: 2133,
  description: "Purple 16-pin carrier for a bipolar stepper motor with adjustable current limit and up to 1/32 microstepping. Includes a logic regulator and an active-low fault output.",
  left: stepControl("M"),
  right: stepMotor(["B2", "B1", "A1", "A2"], "8.2–45 V", fault("fault", "FLT", "Open-drain fault output, low when the driver reports a fault. This pad occupies the VDD position on some other carriers.")),
  color: "#50387b", rim: "#80649e",
  model: pololuModel("0J1226/drv8825-stepper-motor-driver-carrier-high-current"),
  face: () => horizontalChip(49, 99, 53, 36, "DRV8825", 9) + screw(57, 46, 10) +
    [71, 84].map(x => rect(x, 34, 9, 24, 1, "#25272e", "#a8a091") + label(x + 4.5, 46, "R", 6)).join("") +
    smd(64, 70) + smd(86, 70) + smd(60, 156) + smd(76, 156),
});

function motorCarrier({ id, part, item, description, left, right, widthMm, face, details, model }) {
  const color = "#28764e";
  return module({
    id, name: `Pololu ${part} Dual Motor Driver`, shortName: part, category: "Actuators",
    manufacturer: "Pololu", subtitle: `Dual H-bridge #${item}`, description,
    tags: [part.toLowerCase(), "dc motor", "motor", "h-bridge", "pwm", String(item)],
    source: pololu(item), width: 156, height: 184, model,
    insertion: { body: [widthMm, 20.32], headers: [{ header: "L", x: -(widthMm - pitch) / 2, y: -8.89, axis: "y" }, { header: "R", x: (widthMm - pitch) / 2, y: -8.89, axis: "y" }] },
    rows: [row("left", 23, 19.7, "L", left), row("right", 23, 19.7, "R", right)],
    face: component => pcb(component, color, "#60a478") + face(),
    footprint: {
      body: [widthMm, 20.32], color, note: carrierNote,
      groups: [
        carrierRow(left, -(widthMm - pitch) / 2, -8.89, { axis: "y" }),
        carrierRow(right, (widthMm - pitch) / 2, -8.89, { axis: "y" }),
      ],
      details,
    },
  });
}

const bridgeOut = (name, suffix) => output(name.toLowerCase(), name, `Motor ${name[0]} half-bridge ${suffix} output.`);
const bridgeIn = (name) => input(name.toLowerCase(), name, `Motor ${name[0]} control input. See the driver truth table.`);
const motorPwm = (name) => input(name.toLowerCase(), name, `Motor ${name.at(-1)} speed control input. Apply PWM here.`);

const tb6612 = motorCarrier({
  id: "pololu-tb6612fng-713", part: "TB6612FNG", item: 713, widthMm: 15.24,
  model: pololuModel("0J1725/tb6612fng-dual-motor-driver-carrier"),
  description: "Dual brushed motor H-bridge carrier. Each channel has two direction inputs and a separate PWM input. Drive STBY high to enable the driver.",
  left: [
    ground("gnd-1"), power("vcc", "VCC", "2.7–5.5 V logic supply."), bridgeOut("AO1", 1), bridgeOut("AO2", 2),
    bridgeOut("BO2", 2), bridgeOut("BO1", 1), power("vmot", "VMOT", "Motor supply input. Recommended operating range is 4.5–13.5 V."),
    ground("gnd-2"),
  ],
  right: [motorPwm("PWMA"), bridgeIn("AIN2"), bridgeIn("AIN1"), input("standby", "STBY", "Drive high to take the device out of standby."),
    bridgeIn("BIN1"), bridgeIn("BIN2"), motorPwm("PWMB"), ground("gnd-3")],
  face: () => chip(58, 60, 39, 66, "TB6612", 9) + rect(53, 35, 21, 9, 1.2, "#bd9463", "#a9b1ab") +
    smd(79, 37) + smd(90, 37) + chip(72, 139, 15, 17, "", 2) + smd(52, 145),
  details: [[0, 0, 5, 6, 1.1, "#263142"]],
});

const drv8833 = motorCarrier({
  id: "pololu-drv8833-2130", part: "DRV8833", item: 2130, widthMm: 12.7,
  model: pololuModel("0J1616/drv8833-dual-motor-driver-carrier-step"),
  description: "Dual brushed motor H-bridge carrier for small DC motors. Includes reverse-polarity protection, an open-drain fault output, and optional sense-resistor positions.",
  left: [
    ground("gnd-1"), supply("vmm", "VMM", "Reverse-protected motor supply. Normally used as an output. Pololu also permits supplying board power here."),
    bridgeIn("BIN1"), bridgeIn("BIN2"), bridgeIn("AIN2"), bridgeIn("AIN1"),
    input("sleep", "SLP", "Active-low sleep input with an onboard pull-up."), fault("fault", "FLT", "Open-drain fault output. Add a pull-up if monitoring it."),
  ],
  right: [
    ground("gnd-2"), power("vin", "VIN", "Reverse-protected motor supply input, 2.7–10.8 V."),
    bridgeOut("BOUT1", 1), bridgeOut("BOUT2", 2), bridgeOut("AOUT2", 2), bridgeOut("AOUT1", 1),
    passive("aisense", "AISEN", "Channel A current-sense node, connected to ground by default. See Pololu's instructions for enabling current limiting."),
    passive("bisense", "BISEN", "Channel B current-sense node, connected to ground by default. See Pololu's instructions for enabling current limiting."),
  ],
  face: () => chip(63, 74, 30, 36, "8833", 4) + rect(75, 28, 24, 9, 1.2, "#be9163", "#a9b1ab") +
    chip(79, 43, 15, 18, "", 2) + [60, 86].map(x => rect(x, 133, 12, 10, 1, "#a7b4aa") +
      rect(x, 148, 12, 10, 1, "#a7b4aa")).join("") + smd(50, 45) + smd(48, 97),
  details: [[0, 0, 4, 4, 0.9, "#263142"]],
});

const levelHigh = [
  bidir("hv1", "HV1", "High-voltage side of bidirectional channel 1."), bidir("hv2", "HV2", "High-voltage side of bidirectional channel 2."),
  power("hv", "HV", "Higher-voltage rail for the corresponding pull-ups."), ground("gnd-high"),
  bidir("hv3", "HV3", "High-voltage side of bidirectional channel 3."), bidir("hv4", "HV4", "High-voltage side of bidirectional channel 4."),
];
const levelLow = [
  bidir("lv1", "LV1", "Low-voltage side of bidirectional channel 1."), bidir("lv2", "LV2", "Low-voltage side of bidirectional channel 2."),
  power("lv", "LV", "Lower-voltage rail and MOSFET gate bias."), ground("gnd-low"),
  bidir("lv3", "LV3", "Low-voltage side of bidirectional channel 3."), bidir("lv4", "LV4", "Low-voltage side of bidirectional channel 4."),
];
const levelShifter = module({
  id: "sparkfun-bss138-level-shifter", insertion: { body: [15.24, 12.7], headers: [{ header: "HV", x: -6.35, y: -5.08 }, { header: "LV", x: -6.35, y: 5.08 }] }, name: "SparkFun BSS138 Bi-Directional Logic Level Converter",
  shortName: "BSS138 Level Shifter", category: "Interfaces", manufacturer: "SparkFun", subtitle: "Four channels / BOB-12009",
  description: "Four MOSFET level-shifting channels with pull-ups to the separate LV and HV rails. The rail grounds are common. Suitable for open-drain buses such as I²C.",
  tags: ["bss138", "logic level", "level shifter", "i2c", "bidirectional", "12009"],
  source: "https://learn.sparkfun.com/tutorials/bi-directional-logic-level-converter-hookup-guide",
  width: 156, height: 98,
  rows: [row("top", 20, 23.2, "HV", levelHigh), row("bottom", 20, 23.2, "LV", levelLow)],
  face: component => pcb(component, "#ab3c3f", "#d17971") +
    [17, 40, 109, 132].map(x => chip(x - 4, 41, 13, 13, "", 2) + smd(x, 34) + smd(x, 60)).join("") +
    label(78, 48, "BD-LLC", 9),
  footprint: {
    body: [15.24, 12.7], color: "#ab3c3f", note: `Dual 6-pin 2.54 mm headers. ${referenceNote}`,
    groups: [carrierRow(levelHigh, -6.35, -5.08), carrierRow(levelLow, -6.35, 5.08)],
    details: [[0, 0, 11, 2, 0.9, "#263142"]],
  },
});

const uartBasic = [
  ground(), input("cts", "CTS", "Active-low clear-to-send input."),
  supply("vcc", "VCC", "Selected target supply output. The rear jumper selects 3.3 V or 5 V."),
  output("tx", "TXO", "UART transmit output. Connect to the target RX."),
  input("rx", "RXI", "UART receive input. Connect to the target TX."),
  output("dtr", "DTR", "Active-low data terminal ready output. Can be used for automatic reset through a capacitor."),
];
const ch340c = module({
  id: "sparkfun-ch340c-serial-basic", insertion: { body: [17.78, 21.59], shells: [{ x: 41, y: 6, width: 52, height: 18 }], headers: [{ header: "J", x: -6.35, y: 9.525 }] }, name: "SparkFun CH340C Serial Basic USB-C", shortName: "CH340C Serial Basic",
  category: "Interfaces", manufacturer: "SparkFun", subtitle: "USB-C to UART / DEV-15096",
  description: "USB-to-UART breakout with the six-contact FTDI-style connector. A rear jumper selects the UART logic and target supply voltage. Ships set for 3.3 V.",
  tags: ["ch340c", "ch340", "usb uart", "usb-c", "serial", "ttl", "15096"],
  source: "https://learn.sparkfun.com/tutorials/sparkfun-serial-basic-ch340c-hookup-guide",
  width: 134, height: 146,
  rows: [row("bottom", 16, 20.4, "J", uartBasic)],
  face: component => pcb(component, "#b6343c", "#db7c79") +
    `<g transform="rotate(180 67 15)">${usb(41, 6, 52)}</g>` +
    horizontalChip(32, 58, 70, 26, "CH340C", 8) +
    smd(35, 97, "#9bca74") + smd(87, 97, "#bdc69b") +
    circle(17, 112, 3.5, "#e3afac", "#761f25") + circle(119, 27, 3.5, "#e3afac", "#761f25") +
    label(67, 116, "Serial Basic", 7.5),
  footprint: {
    body: [17.78, 21.59], color: "#b6343c", note: `Use the 2.54 mm FTDI-style connector. ${referenceNote}`,
    groups: [carrierRow(uartBasic, -6.35, 9.525)],
    details: [[0, -9, 9, 7, 3.2, "#a7b2bc"], [0, 0, 10, 4.2, 1.2, "#263142"]],
  },
});

const l298A = [output("out1", "OUT1", "Motor A first output."), output("out2", "OUT2", "Motor A second output.")];
const l298B = [output("out4", "OUT4", "Motor B second output."), output("out3", "OUT3", "Motor B first output.")];
const l298Power = [
  power("motor-power", "12V", "Motor supply terminal, marked 12V. Follow the module's 5V regulator jumper instructions."),
  ground(),
  passive("logic-power", "5V", "Logic rail. With the regulator jumper installed, this is a regulator output. With the jumper removed, supply regulated 5 V here."),
];
const l298Control = [
  input("ena", "ENA", "Active-high Motor A enable. Remove the jumper before driving PWM."),
  ...Array.from({ length: 4 }, (_, index) =>
    input(`in${index + 1}`, `IN${index + 1}`, `Motor ${index < 2 ? "A" : "B"} direction input.`)),
  input("enb", "ENB", "Active-high Motor B enable. Remove the jumper before driving PWM."),
];
const l298n = module({
  id: "sunfounder-l298n-hw095", name: "SunFounder L298N Dual Motor Driver (HW-095)", shortName: "L298N HW-095",
  manufacturer: "SunFounder", subtitle: "Red dual H-bridge module", category: "Actuators",
  description: "Red HW-095 board shown in the SunFounder 3-in-1 Kit. Two motor outputs, a 5 V regulator jumper, and removable enable jumpers. With a motor supply above 12 V, remove the regulator jumper and power the logic terminal separately.",
  tags: ["l298n", "hw095", "hw-095", "motor", "h-bridge", "pwm", "red board"],
  source: "https://docs.sunfounder.com/projects/3in1-kit-r4/en/latest/components/component_l298n_module.html",
  width: 255, height: 229,
  rows: [row("left", 148, 24, "MA", l298A), row("right", 148, 24, "MB", l298B),
    row("bottom", 51, 23, "P", l298Power), row("bottom", 138, 18, "J", l298Control)],
  face: component => pcb(component, "#b83d30", "#ee8270") +
    [19, 235].flatMap(x => [20, 196].map(y => mountingHole(x, y))).join("") +
    rect(50, 10, 153, 77, 2.5, "#20292d", "#425054") +
    [53, 77, 101, 125, 149, 173, 197].map(x => rect(x, 4, 4, 75, 0.8, "#394348")).join("") +
    rect(59, 44, 135, 25, 1, "#131b1c", "#67706c") + screw(126, 56, 7) +
    Array.from({ length: 11 }, (_, index) => line(62 + index * 13, 81, 62 + index * 13, 106, "#a8b5b3", 2.5)).join("") +
    [25, 212].map(x => [68, 84, 100, 116].map(y => rect(x, y, 17, 6, 1, "#3a3331", "#d3aaa3")).join("")).join("") +
    verticalScrews(44, 146, 2, "#316bad", 23) + verticalScrews(211, 146, 2, "#316bad", 23) +
    screwBlock(51, 196, 3, "#316bad", 23) +
    [83, 168].map((x, index) => circle(x, 135 + index * 32, 18, "#36424a", "#5b5350") +
      circle(x, 135 + index * 32, 13, "#b9bbba") + label(x, 135 + index * 32, "220", 8, "#394142")).join("") +
    rect(121, 124, 29, 24, 2, "#222a2b", "#64706d") + rect(60, 163, 27, 11, 1, "#263032") +
    rect(131, 195, 103, 11, 1, "#181f24") + label(198, 112, "HW-095", 8.4),
  footprint: {
    body: [43, 43], color: "#b83d30",
    note: "Reference carrier and cable termination for the red HW-095 module. Verify the actual board outline, connector spacing, and heatsink clearance before fabrication.",
    groups: [
      carrierRow(l298A, -19, 2.5, { axis: "y", pitch: 5.08, size: 2.7, drill: 1.2 }),
      carrierRow(l298B, 19, 2.5, { axis: "y", pitch: 5.08, size: 2.7, drill: 1.2 }),
      carrierRow(l298Power, -13.5, 18.5, { pitch: 5.08, size: 2.7, drill: 1.2 }),
      carrierRow(l298Control, 1, 18.5),
    ],
    details: [[0, -12, 31, 14, 19, "#303840"], [0, 8, 9, 9, 9, "#89979e"]],
  },
});

const relayControl = [
  input("signal", "S", "Active-high control input. High energizes the relay."),
  power("vcc", "+", "5 V module supply."),
  ground("gnd", "−"),
];
const relayContacts = [
  passive("nc", "NC", "Normally closed to COM with the coil de-energized."),
  passive("com", "COM", "Moving common contact of the relay."),
  passive("no", "NO", "Normally open with the coil de-energized. Closes to COM when the coil is energized."),
];
const relay = module({
  id: "keyestudio-ks0011-5v-relay", name: "Keyestudio KS0011 Single 5V Relay", shortName: "KS0011 Relay",
  category: "Actuators", manufacturer: "Keyestudio", referencePrefix: "K", subtitle: "Songle SPDT / active high",
  description: "Single 5 V electromechanical relay board with an active-high logic header and separate COM, NO and NC screw terminals.",
  tags: ["ks0011", "relay", "songle", "5v relay", "spdt", "switch"],
  source: "https://docs.keyestudio.com/projects/KS0011/en/latest/docs/KS0011.html", width: 125, height: 161,
  rows: [row("top", 36, 26.5, "SW", relayContacts), row("bottom", 42, 20.5, "J", relayControl)],
  face: () => path("M13 8H112Q118 8 118 14V101Q102 104 102 119Q102 135 118 138V147Q118 153 112 153H13Q7 153 7 147V138Q23 135 23 119Q23 104 7 101V14Q7 8 13 8Z", "#303233", "#65604b") +
    screwBlock(36, 35, 3, "#3179b3", 26.5) + rect(28, 53, 69, 63, 4, "#297fbc", "#559bc0") +
    rect(31, 56, 63, 57, 2, "#2e84c6") +
    label(63, 77, "SONGLE", 10) + label(63, 94, "SRD-05VDC", 7.5) +
    mountingHole(20, 142) + mountingHole(105, 142) + chip(33, 124, 13, 9, "", 2) + smd(82, 126),
  footprint: {
    body: [23, 36], color: "#303233", note: "Reference carrier for the control header and separate low-voltage switch wiring termination. Verify the terminal order, installed connector geometry and spacing on the module.",
    groups: [carrierRow(relayContacts, -5.08, -14, { pitch: 5.08, size: 2.5, drill: 1.1 }), carrierRow(relayControl, -2.54, 14)],
    details: [[0, -1, 15, 17, 14, "#2d79b6"]],
  },
});

const tmcMotor = [
  power("vm", "+", "5–29 V motor supply input."),
  ground("motor-ground", "−"),
  output("b2", "2B", "Motor winding 2, terminal B."), output("a2", "2A", "Motor winding 2, terminal A."),
  output("a1", "1A", "Motor winding 1, terminal A."), output("b1", "1B", "Motor winding 1, terminal B."),
];
const tmcLogic = [
  power("vdd", "VDD", "3.3–5 V logic supply."), ground("logic-ground"), input("dir", "DIR", "Direction control input."),
  input("step", "STEP", "A rising edge advances one microstep."),
  input("ms1", "MS1", "Microstep select input 1. Also sets the UART address."),
  input("ms2", "MS2", "Microstep select input 2. Also sets the UART address."),
  output("diag", "DIAG", "Diagnostic output. Can indicate a fault or configured stall event."),
  output("index", "INDEX", "Microstep index pulse output."),
  bidir("uart", "UART", "Single-wire UART configuration and diagnostics."),
  input("enable", "EN", "Active-low output enable. Drive high to disable the motor outputs."),
];
const tmc2209 = module({
  id: "adafruit-tmc2209-6121", name: "Adafruit TMC2209 Stepper Motor Driver", shortName: "TMC2209",
  category: "Actuators", manufacturer: "Adafruit", subtitle: "Quiet stepper breakout #6121",
  description: "Single bipolar stepper driver with six screw terminals for motor power and windings. Control by STEP/DIR or single-wire UART. Use the trimmer to set the current limit.",
  tags: ["tmc2209", "stepper", "motor", "uart", "step dir", "6121"],
  source: adafruit + "adafruit-tmc2209-stepper-motor-driver-breakout-board/pinouts",
  width: 239, height: 190,
  rows: [row("top", 53, 26, "M", tmcMotor), row("bottom", 20, 22, "J", tmcLogic)],
  face: component => pcb(component, "#30383a", "#656e67") +
    screwBlock(53, 39, 6, "#49826a", 26) +
    [23, 217].flatMap(x => [31, 145].map(y => mountingHole(x, y))).join("") +
    circle(49, 82, 15, "#7e8a88", "#d2d6cd") + label(49, 82, "22", 7, "#324141") +
    chip(101, 75, 43, 41, "TMC2209", 7) + screw(186, 83, 13) +
    smd(72, 127) + smd(156, 126, "#a9c779") + smd(169, 126, "#d69271") +
    label(118, 147, "Stepper Motor Driver", 8.5),
  footprint: {
    body: [26.67, 24.13], color: "#30383a",
    note: "The motor terminal and logic header use 2.54 mm pitch. Verify the installed connectors and mounting clearance on the module.",
    groups: [
      carrierRow(tmcMotor, -6.35, -8.255, { size: 2.1, drill: 1 }),
      carrierRow(tmcLogic, -11.43, 9.525, { size: 1.778, drill: 1 }),
    ],
    details: [[0, -8.255, 15.24, 6, 8, "#508569"], [0, 1, 5, 5, 1.3, "#263142"]],
  },
  model: { label: "Adafruit TMC2209 CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/6121%20TMC2209%20Driver" },
});

const i2cData = (id = "sda", text = "SDA") => bidir(id, text, "I²C data. Use pull-ups appropriate for this bus.");
const i2cClock = (id = "scl", text = "SCL") => bidir(id, text, "I²C clock. Use pull-ups appropriate for this bus.");
const address = (index, idPrefix = "a", textPrefix = "A") =>
  input(`${idPrefix}${index}`, `${textPrefix}${index}`, `I²C address bit ${index}. High sets this bit.`);
const muxData = index => i2cData(`sd${index}`, `SD${index}`);
const muxClock = index => i2cClock(`sc${index}`, `SC${index}`);
const muxLeft = [power("vin", "VIN", "3–5 V board supply. Match the host's logic rail."), ground(), i2cData(), i2cClock(),
  input("reset", "RST", "Active-low reset. Pull low to deselect every downstream bus."),
  ...[0, 1, 2].map(index => address(index)), muxData(0), muxClock(0), muxData(1), muxClock(1)];
const muxRight = [7, 6, 5, 4, 3, 2].flatMap(index => [muxClock(index), muxData(index)]);
const tca9548a = module({
  id: "adafruit-tca9548a-2717", insertion: { body: [17.6, 30.6], headers: [{ header: "L", x: -7.62, y: -13.97, axis: "y" }, { header: "R", x: 7.62, y: -13.97, axis: "y" }] }, name: "Adafruit TCA9548A I²C Multiplexer", shortName: "TCA9548A",
  category: "Interfaces", manufacturer: "Adafruit", subtitle: "Eight I²C buses / #2717",
  description: "Original dual-header TCA9548A breakout. It switches between eight downstream I²C buses. Set A0–A2 to choose an address in the 0x70–0x77 range.",
  tags: ["tca9548a", "i2c", "mux", "multiplexer", "2717"],
  source: adafruit + "adafruit-tca9548a-1-to-8-i2c-multiplexer-breakout/pinouts",
  width: 137, height: 237,
  rows: [row("left", 18, 18.3, "L", muxLeft), row("right", 18, 18.3, "R", muxRight)],
  face: component => pcb(component, "#215d96", "#5694ca") +
    mountingHole(68, 26) + mountingHole(68, 207) + label(68, 50, "TCA9548A", 9) +
    chip(52, 81, 33, 69, "", 10) + [47, 61, 75].map(x => smd(x, 65) + smd(x, 160)).join("") +
    label(68, 184, "I2C Expander", 8.2),
  footprint: {
    body: [17.6, 30.6], color: "#215d96", note: carrierNote,
    groups: [carrierRow(muxLeft, -7.62, -13.97, { axis: "y" }), carrierRow(muxRight, 7.62, -13.97, { axis: "y" })],
    details: [[0, 0, 4.4, 7.7, 1.4, "#263142"]],
  },
});

const gpio = (bank, index) => bidir(`gpio-${bank.toLowerCase()}${index}`, `${bank}${index}`, `MCP23017 port ${bank} bit ${index}. Configure as a digital input or output.`);
const expanderUpper = [
  output("inta", "IA", "Interrupt output for port A. Output polarity or open-drain operation is configurable."),
  output("intb", "IB", "Interrupt output for port B. Output polarity or open-drain operation is configurable."),
  ...[0, 1, 2].map(index => address(index, "addr-", "D")),
  ...Array.from({ length: 8 }, (_, index) => gpio("B", 7 - index)),
];
const expanderLower = [
  power("vin", "VIN", "Board supply, 3–5 V. Match the controller logic rail."),
  ground(), i2cClock(), i2cData(), input("reset", "RST", "Active-low reset input."),
  ...Array.from({ length: 8 }, (_, index) => gpio("A", index)),
];
const mcp23017 = module({
  id: "adafruit-mcp23017-5346", insertion: { body: [43, 18], headers: [{ header: "U", x: -15.24, y: -6.35 }, { header: "L", x: -15.24, y: 6.35 }] }, name: "Adafruit MCP23017 I²C GPIO Expander", shortName: "MCP23017",
  category: "Interfaces", manufacturer: "Adafruit", subtitle: "Sixteen GPIO / STEMMA QT / #5346",
  description: "Sixteen digital GPIOs with port interrupts and companion ground pads. Default I²C address is 0x20. The two STEMMA QT connectors parallel the same I²C bus and supply.",
  tags: ["mcp23017", "gpio", "i2c", "expander", "stemma qt", "5346"],
  source: adafruit + "adafruit-mcp23017-i2c-gpio-expander/pinouts", width: 303, height: 131,
  rows: [row("top", 29, 20.4, "U", expanderUpper), row("bottom", 29, 20.4, "L", expanderLower)],
  face: component => pcb(component, "#34363a", "#6c6d69") +
    [17, 286].flatMap(x => [34, 95].map(y => mountingHole(x, y))).join("") +
    qt(8, 55) + qt(282, 55) + chip(95, 46, 38, 38, "", 6) +
    [70, 81, 159, 171].map(x => smd(x, 56)).join("") +
    vias(Array.from({ length: 8 }, (_, index) => [131 + index * 20.4, 40])) +
    vias(Array.from({ length: 8 }, (_, index) => [131 + index * 20.4, 91])) +
    label(207, 60, "MCP23017", 10) + label(207, 74, "16 IO Expander", 8),
  footprint: {
    body: [43, 18], color: "#34363a", note: `The parallel STEMMA QT sockets are shown in the artwork. ${referenceNote}`,
    groups: [carrierRow(expanderUpper, -15.24, -6.35), carrierRow(expanderLower, -15.24, 6.35),
      { ids: Array(8).fill("gnd"), x: -2.54, y: -3.81 }, { ids: Array(8).fill("gnd"), x: -2.54, y: 3.81 }],
    details: [[-5, 0, 4.4, 4.4, 1.3, "#263142"], [-19.5, 0, 4, 4, 3, "#e8e2d5"], [19.5, 0, 4, 4, 3, "#e8e2d5"]],
  },
  model: { label: "Adafruit MCP23017 CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/5346%20MCP23017%20Expander" },
});

const pcaLogic = [
  ground(), input("oe", "OE", "Active-low output enable. Pulled low on the board."),
  i2cClock(), i2cData(), power("vcc", "VCC", "Logic supply, 3.3–5 V. Match the host I²C logic level."),
  power("vplus", "V+", "Servo supply rail shared by both side headers and all 16 servo connectors. Match the attached servos."),
];
const pcaPower = [power("pwrin", "V+ IN", "Positive screw terminal. Feeds the servo supply rail through the reverse-polarity protection MOSFET.")];
const pwmBanks = Array.from({ length: 4 }, (_, bank) => Array.from({ length: 4 }, (_, offset) => {
  const index = bank * 4 + offset;
  return output(`pwm${index}`, String(index), `12-bit PWM signal for servo channel ${index}. The companion V+ and GND contacts share the board's servo rails.`);
}));
const pcaArtStarts = [54, 136, 236, 318];
const pcaPcbStarts = [-24.13, -11.43, 3.81, 16.51];
function servoPins(component, showLabels) {
  return edgePads(component, showLabels);
}
const pca9685 = module({
  id: "adafruit-pca9685-815", name: "Adafruit PCA9685 16-Channel Servo Driver", shortName: "PCA9685 Servo Driver",
  category: "Actuators", manufacturer: "Adafruit", subtitle: "16 PWM channels / I²C / #815",
  description: "Blue 16-channel servo breakout with separate logic and servo supplies. Use the numbered PWM signal contacts. Each servo header repeats the shared V+ and GND rails.",
  tags: ["pca9685", "servo", "pwm", "i2c", "16 channel", "815"],
  source: adafruit + "16-channel-pwm-servo-driver/pinouts", width: 426, height: 192,
  rows: [row("left", 42, 19, "J", pcaLogic), row("top", 201, 0, "P", pcaPower),
    ...pwmBanks.map((bank, index) => row("bottom", pcaArtStarts[index], 17, `PWM${index + 1}`, bank))],
  drawPins: servoPins,
  face: component => pcb(component, "#215d96", "#5593c1") +
    [23, 403].flatMap(x => [23, 164].map(y => mountingHole(x, y))).join("") +
    screwBlock(201, 34, 2, "#316da1", 24) +
    label(201, 55, "+", 8) + label(225, 55, "GND", 7) +
    circle(85, 32, 18, "none", "#91a4b1") + vias([[82, 20], [77, 37], [97, 37]]) +
    rect(119, 21, 37, 28, 1.5, "#222d39", "#778792") + rect(151, 21, 8, 28, 0.5, "#c1c4b7") +
    chip(204, 67, 31, 55, "PCA9685", 10) +
    Array.from({ length: 6 }, (_, index) => {
      const x = 273 + 18 * index;
      return rect(x, 21, 11, 15, 1.2, "#d7be7a", "#e4dcaa") + line(x, 29, x + 11, 29, "#7a7461");
    }).join("") +
    pcaArtStarts.map(x => rect(x - 8, 127, 67, 48, 1.5, "#234976", "#9ca9b4") +
      [135, 150, 165].map(y => [0, 1, 2, 3].map(index => pad(x + index * 17, y)).join("")).join("")).join("") +
    Array.from({ length: 6 }, (_, index) => pad(416, 42 + index * 19)).join("") +
    label(113, 81, "PCA9685", 12) + label(113, 100, "16 × 12-bit PWM", 9) + label(316, 83, "I2C Address", 9),
  footprint: {
    body: [62.23, 25.4], color: "#215d96", size: 1.778, drill: 1,
    note: "Reference carrier for the Adafruit #815 blue board. The positive screw terminal feeds V+ through reverse-polarity protection. GND is shared by the supply terminal and all headers.",
    groups: [
      carrierRow(pcaLogic, -29.21, -6.477, { axis: "y", drill: 1.016 }),
      carrierRow(pcaLogic, 29.21, -6.477, { axis: "y", drill: 1.016 }),
      ...pwmBanks.flatMap((bank, index) => [
        carrierRow(bank, pcaPcbStarts[index], 6.223),
        { ids: Array(4).fill("vplus"), x: pcaPcbStarts[index], y: 8.763 },
        { ids: Array(4).fill("gnd"), x: pcaPcbStarts[index], y: 11.303 },
      ]),
      { ids: ["pwrin", "gnd"], x: -1.8, y: -8.89, pitch: 3.5, size: 2.1844, drill: 1 },
    ],
    details: [[1, -1, 5, 8, 1.4, "#263142"], [0, -8.89, 7, 7, 8, "#3678aa"]],
  },
  model: { label: "Adafruit PCA9685 CAD", url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/815%20Servo%20Driver%2016%20Channel" },
});

const cp2102Serial = [
  supply("vccio", "VCCIO", "USB-derived target supply. Select 3.3 V or 5 V with the jumper. This selection does not change the CP2102 signal output levels."),
  ground(),
  output("tx", "TXD", "UART transmit output. Connect to the target RX."),
  input("rx", "RXD", "UART receive input. Connect to the target TX."),
  output("rts", "RTS", "Active-low hardware flow-control output."),
  input("cts", "CTS", "Active-low hardware flow-control input."),
];
const cp2102 = module({
  id: "waveshare-cp2102-usb-uart-mini", insertion: { body: [40, 20], shells: [{ x: 201, y: 38, width: 24, height: 50 }], headers: [{ header: "H3", x: -18.7, y: -6.35, axis: "y" }] }, name: "Waveshare CP2102 USB UART Board (mini)", shortName: "CP2102 USB UART",
  category: "Interfaces", manufacturer: "Waveshare", subtitle: "Mini USB to UART",
  description: "Green USB Mini-B CP2102 board with hardware flow control and a jumper-selectable target supply output. This entry models the six-contact H3 UART header.",
  tags: ["cp2102", "usb uart", "mini usb", "serial", "ttl", "waveshare"],
  source: "https://www.waveshare.com/product/cp2102-usb-uart-board-mini.htm", width: 228, height: 127,
  rows: [row("left", 18, 18.2, "H3", cp2102Serial)],
  face: component => pcb(component, "#26705b", "#69a991") +
    rect(8, 12, 14, 104, 1.2, "#252a31") +
    chip(84, 47, 29, 31, "CP2102", 5) +
    rect(146, 29, 19, 18, 1.1, "#dfb64c", "#a58945") + label(155, 22, "VCCIO", 7) +
    rect(201, 38, 24, 50, 2, "#a6aeb9", "#dce2e8") +
    rect(216, 42, 9, 42, 1.2, "#3e4855") + line(221, 46, 221, 80, "#bbc4cd") +
    [38, 84].flatMap(y => [116, 126, 136, 146].map(x => viaForSilk(x, y))).join("") +
    mountingHole(179, 33) + mountingHole(179, 95) + smd(77, 94) + smd(160, 83),
  footprint: {
    body: [40, 20], color: "#26705b", note: `Includes the H3 UART header only. ${referenceNote}`,
    groups: [carrierRow(cp2102Serial, -18.7, -6.35, { axis: "y" })],
    details: [[-2, 0, 5, 5, 1.4, "#263142"], [15, 0, 9, 7, 4.2, "#a8b0b0"]],
  },
});
function viaForSilk(x, y) {
  return rect(x - 4, y - 4, 8, 8, 0.7, "none", "#8fa69f") + circle(x, y, 2.4, "#a5ac9b") +
    circle(x, y, 1.4, "#254337");
}

const canHost = [
  output("interrupt", "INT", "Active-low interrupt from the CAN controller."),
  input("sck", "SCK", "SPI clock from the host."),
  input("si", "SI", "SPI data from the host, MOSI."),
  output("so", "SO", "SPI data to the host, MISO."),
  input("cs", "CS", "Active-low chip select."),
  ground(), power("vcc1", "VCC1", "5 V supply for the CAN transceiver."),
  power("vcc", "VCC", "3.3 V or 5 V SPI-side supply. Match the host logic."),
];
const canBus = [
  bidir("canh", "CANH", "CAN bus high. P2 provides a parallel connection."),
  bidir("canl", "CANL", "CAN bus low. P2 provides a parallel connection."),
];
const canModule = module({
  id: "joyit-sbc-can01-mcp2515", name: "Joy-IT MCP2515 CAN Bus Module (SBC-CAN01)", shortName: "MCP2515 CAN",
  category: "Interfaces", manufacturer: "Joy-IT", subtitle: "SPI to CAN / split logic supply",
  description: "SBC-CAN01 with the eight-contact SPI header and separate logic and 5 V transceiver rails, as shown in the Joy-IT manual. P1 selects the onboard 120 Ω termination. P2 parallels the screw terminals.",
  tags: ["mcp2515", "can", "can bus", "spi", "sbc-can01", "joy-it"],
  source: "https://www.joy-it.net/files/files/Produkte/SBC-CAN01/SBC-CAN01-Manual-20201021.pdf",
  width: 202, height: 156,
  rows: [row("left", 22, 16, "J", canHost), row("right", 66, 24, "CAN", canBus)],
  face: component => pcb(component, "#2b3338", "#596367") +
    [19, 181].flatMap(x => [15, 141].map(y => mountingHole(x, y))).join("") +
    chip(59, 39, 32, 52, "MCP2515", 9) + rect(109, 34, 17, 43, 8, "#a7afad", "#d7dddc") +
    label(117, 55, "16M", 7, "#3d4a4c") + chip(111, 103, 22, 22, "", 4) +
    smd(51, 105) + smd(51, 114) + smd(74, 129) + smd(106, 82) +
    rect(145, 83, 11, 30, 1, "#ceac53", "#817340") + label(149, 122, "P1", 7) +
    verticalScrews(158, 62, 2, "#367cb8", 24) +
    vias([[145, 53], [145, 63]]) + label(94, 17, "MCP2515 CAN", 8),
  footprint: {
    body: [44, 34], color: "#2b3338", note: `The CAN screw block is represented as a cable termination. ${referenceNote}`,
    groups: [carrierRow(canHost, -20.5, -8.89, { axis: "y" }),
      carrierRow(canBus, 18, -2.54, { axis: "y", pitch: 5.08, size: 2.6, drill: 1.2 }),
      carrierRow(canBus, 10.8, -2.54, { axis: "y" })],
    details: [[-5, -2, 5, 9, 1.7, "#263142"], [14.5, 0, 7, 12, 7, "#427fad"]],
  },
});

const ftLeft = [
  supply("3v3", "3V3", "3.3 V output from the onboard regulator."),
  supply("5v", "5V", "5 V USB supply output."), ground("gnd-l"),
  ...Array.from({ length: 8 }, (_, index) => {
    const functions = ["SCK or SCL", "MOSI or SDA output", "MISO or SDA input", "chip select"][index];
    return bidir(`d${index}`, `D${index}`, functions ? `GPIO D${index}. In serial engine mode, used as ${functions}.` : `GPIO D${index}.`);
  }),
];
const ftRight = [
  ground("gnd-r"),
  // Keep the saved IDs for contacts shown as unused in Adafruit's wiring guide.
  bidir("nc1", "C9", "Configurable ACBUS9, wired to an onboard LED. Leave unused for standard SPI or I²C operation."),
  bidir("nc2", "C8", "Configurable ACBUS8, wired to an onboard LED. Leave unused for standard SPI or I²C operation."),
  ...Array.from({ length: 8 }, (_, index) => bidir(`c${7 - index}`, `C${7 - index}`, `FT232H auxiliary GPIO C${7 - index}.`)),
].map((pin, index) => [...pin, `JP2.${11 - index}`]);
const ft232h = module({
  id: "adafruit-ft232h-usbc-2264", insertion: { body: [22.86, 38.1], headers: [{ header: "JP1", x: -10.16, y: -12.7, axis: "y" }, { header: "JP2", x: 10.16, y: -12.7, axis: "y" }] }, name: "Adafruit FT232H USB-C Interface Breakout", shortName: "FT232H USB-C",
  category: "Interfaces", manufacturer: "Adafruit", subtitle: "USB to SPI, I²C or GPIO / #2264",
  description: "USB-C revision with an I²C mode switch and a STEMMA QT connector. In I²C mode the switch joins D1 and D2. The header positions differ from the earlier Micro-USB board.",
  tags: ["ft232h", "usb-c", "spi", "i2c", "gpio", "ftdi", "2264"],
  source: adafruit + "circuitpython-on-any-computer-with-ft232h/pinouts", width: 156, height: 240,
  rows: [row("left", 53, 15.7, "JP1", ftLeft), row("right", 53, 15.7, "JP2", ftRight)],
  face: component => pcb(component, "#24659d", "#6199bb") +
    [20, 136].flatMap(x => [23, 218].map(y => mountingHole(x, y))).join("") +
    `<g transform="rotate(180 78 16)">${usb(53, 6, 50)}</g>` +
    chip(57, 81, 42, 47, "FT232H", 7) + [52, 70, 88].map(x => smd(x, 56) + smd(x, 68)).join("") +
    rect(62, 153, 30, 14, 1.5, "#dae0d9", "#5f6668") + rect(78, 156, 9, 7, 1, "#292e32") +
    label(78, 143, "I2C Mode", 7) + rect(64, 206, 28, 17, 1.5, "#dedbd4", "#777974") +
    rect(68, 213, 20, 7, 1, "#48505a") +
    smd(104, 177, "#9dbb59") + smd(104, 190, "#dc906d"),
  footprint: {
    body: [22.86, 38.1], color: "#24659d",
    note: "Reference carrier for the USB-C revision. Outline and JP1 and JP2 header centers follow Adafruit's Eagle board file. Check mounting and USB plug clearance.",
    groups: [carrierRow(ftLeft, -10.16, -12.7, { axis: "y" }), carrierRow(ftRight, 10.16, -12.7, { axis: "y" })],
    details: [[0, -16, 9, 7, 3, "#a9b2b8"], [0, -2, 7, 7, 1.3, "#263142"]],
  },
});

const entries = [a4988, drv8825, tb6612, drv8833, l298n, tmc2209, relay, pca9685,
  levelShifter, tca9548a, mcp23017, ch340c, cp2102, ft232h, canModule];

export default defineFamily("common-interfaces", entries.map(({ art, ...entry }) => entry));
