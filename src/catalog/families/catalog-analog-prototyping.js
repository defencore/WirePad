import { defineFamily } from "../registry.js";
import { chip, circle, label, line, pinRow, rect, screw, smd } from "../shared/svg.js";

const scale = 7;
const margin = 10;
const charcoal = "#282b2d";
const blue = "#126baf";
const pitch = 2.54;

const ground = (id = "gnd") => [id, "GND", "Common power and signal ground.", "power_in"];
const clock = ["scl", "SCL", "I²C clock input referenced to the board supply.", "input"];
const data = ["sda", "SDA", "Bidirectional I²C data referenced to the board supply.", "bidirectional"];
const supply = (label = "VCC", id = "vcc") => [id, label, "2.7–5.5 V board supply and logic reference. Match the host I²C voltage.", "power_in"];
const analogOut = (id, label, description) => [id, label, description, "output"];

function hole(x, y, diameter = 1.778) {
  return circle(x, y, diameter * scale / 2, "#d6b577", "#ede0b7") +
    circle(x, y, scale / 2, "#293440", "#75664b");
}

function mount(x, y) {
  return circle(x, y, 11, "#d6b577", "#ede0b7") + circle(x, y, 8.75, "#293440", "#7d807b");
}

function qtPort(x, y, flip = false) {
  return `<g transform="translate(${x} ${y}) scale(${flip ? -1 : 1} 1)">` +
    rect(0, 0, 27, 40, 1.7, "#e5ddcb", "#f4f0df") + rect(0, 3, 3, 34, 0.5, "#b6aa90") +
    [7, 15, 23, 31].map(offset => line(27, offset, 33, offset, "#c3c5bc", 2)).join("") + "</g>";
}

const qtArt = () => qtPort(10, 52.2) + qtPort(187.8, 52.2, true) +
  smd(32, 44, "#e4d47e") + label(17, 45, "on", 6);

function board({ id, name, shortName, category, source, description, subtitle, tags, body, color, banks, repeated = [], mounts, draw, details, cad, note }) {
  const width = body[0] * scale + margin * 2;
  const height = body[1] * scale + margin * 2;
  const point = (x, y) => [width / 2 + x * scale, height / 2 + y * scale];
  const contacts = banks.flatMap(({ side, x, y, contacts, prefix, diameter = 1.778, spacing = pitch, square = false, terminal = false }) => {
    const vertical = side === "left" || side === "right";
    const [startX, startY] = point(x, y);
    const pins = pinRow(side, width, height, vertical ? startY : startX, spacing * scale, contacts, prefix);
    return pins.map((pin, index) => ({
      pin, x: x + (vertical ? 0 : index * spacing), y: y + (vertical ? index * spacing : 0), diameter,
      square: square && index === 0, terminal,
    }));
  });
  const pins = contacts.map(({ pin }) => pin);
  return {
    component: {
      id, name: `Adafruit ${name}`, shortName, category, source, description, subtitle, tags,
      manufacturer: "Adafruit", referencePrefix: "U", art: id, width, height, pins,
    },
    art: (_component, showLabels) => rect(margin, margin + 2, width - margin * 2, height - margin * 2, 16, "#152235") +
      rect(margin, margin, width - margin * 2, height - margin * 2, 16, color, "#8c959c") +
      mounts.map(([x, y]) => mount(...point(x, y))).join("") + draw() +
      contacts.map(({ pin, x, y, diameter, terminal }) => {
        const [padX, padY] = point(x, y);
        const horizontal = pin.x === 0 || pin.x === width;
        const before = pin.x === 0 || pin.y === 0;
        const captionX = horizontal ? padX + (before ? 13 : -13) : padX;
        const captionY = horizontal ? padY : padY + (before ? -11 : 11);
        const anchor = horizontal ? (before ? "start" : "end") : "middle";
        const lead = terminal
          ? line(pin.x, pin.y, margin + 2, padY, "#b99a5f", 1.5)
          : line(pin.x, pin.y, padX, padY, "#b99a5f", 1.5) + hole(padX, padY, diameter);
        return lead +
          (showLabels ? label(captionX, captionY, pin.label, 7.3, "#eef0e6", anchor) : "");
      }).join("") + repeated.map(({ x, y, size }) => hole(...point(x, y), size)).join(""),
    footprint: {
      body, color, details, modelHeight: 1.6,
      pads: [
        ...contacts.map(({ pin, x, y, diameter, square }) => ({ id: pin.id, x, y, drill: 1, size: diameter, shape: square ? "rect" : "circle" })),
        ...repeated.map(({ id, x, y, size }) => ({ id, x, y, drill: 1, size, shape: "circle" })),
      ],
      note: `${note} Mounting holes are omitted. The generated 3D body is approximate.`,
    },
    model: cad,
  };
}

const qtBody = [25.4, 17.78];
const qtMounts = [[-10.16, -6.35], [10.16, -6.35], [-10.16, 6.35], [10.16, 6.35]];
const qtDetails = [[-10.16, 0, 5.5, 5.8, 2.9, "#e5ddcb"], [10.16, 0, 5.5, 5.8, 2.9, "#e5ddcb"]];
const qtNote = "Reference through-hole contact layout from the manufacturer CAD. The onboard STEMMA QT sockets share the I²C and supply nets.";

const entries = [
  board({
    id: "adafruit-mcp4725-935", name: "MCP4725 12-bit DAC Breakout", shortName: "MCP4725", category: "DAC",
    source: "https://learn.adafruit.com/mcp4725-12-bit-dac-tutorial/pinouts",
    description: "Adafruit #935 STEMMA QT Rev C board with an MCP4725A1T-E/CH in SOT-23-6. Converts I²C commands into an analog voltage and can save the power-up value in EEPROM. Address 0x62, or 0x63 with A0 high. The optional terminal duplicates VOUT and GND.",
    subtitle: "I²C / single 12-bit DAC / EEPROM", tags: ["mcp4725", "935", "dac", "analog output", "voltage", "eeprom", "i2c", "stemma qt", "qwiic"],
    body: qtBody, color: charcoal, mounts: qtMounts,
    banks: [{ side: "bottom", x: -6.35, y: 6.35, prefix: "JP1.", contacts: [
      supply("VIN"), ground(), clock, data,
      ["a0", "A0", "Address select input. Low selects 0x62 and high selects 0x63.", "input"],
      analogOut("vout", "VOUT", "Buffered DAC output, nominally from ground to VIN."),
    ] }],
    repeated: [{ id: "gnd", x: -1.8, y: -5.08, size: 2.1844 }, { id: "vout", x: 1.7, y: -5.08, size: 2.1844 }],
    draw: () => qtArt() + label(59, 19, "MCP", 11) + label(59, 33, "4725", 11) +
      label(143, 19, "12 bit", 9) + label(143, 32, "DAC", 10) +
      rect(79, 12, 40, 43, 0.5, "none", "#d9ddd4") + label(99, 45, "optional", 6.5) + label(99, 52, "terminal", 6.5) +
      chip(91, 85, 15, 17, "", 3) + chip(133, 70, 14, 18, "103", 4) + smd(64, 82) + smd(66, 92),
    details: [...qtDetails, [0, 1.905, 2.9, 2.8, 1.2, "#242a30"]],
    note: `${qtNote} The extra 3.5 mm terminal pads repeat the main header's GND and VOUT numbers.`,
    cad: { label: "Adafruit MCP4725 Rev C PCB CAD", url: "https://github.com/adafruit/Adafruit-MCP4725-PCB/blob/master/Adafruit%20MCP4725%20QT.brd" },
  }),
  board({
    id: "adafruit-mcp4728-4470", name: "MCP4728 Quad 12-bit DAC Breakout", shortName: "MCP4728", category: "DAC",
    source: "https://learn.adafruit.com/adafruit-mcp4728-i2c-quad-dac/pinouts",
    description: "Adafruit #4470 Rev A STEMMA QT board with a four-channel MCP4728 DAC in MSOP-10. Each channel can use VCC or the internal 2.048 V reference, with optional 2× reference gain. Fitted MCP4728 parts use I²C address 0x60 and MCP4728A4 parts use 0x64. Both variants share the same board contacts.",
    subtitle: "I²C / four 12-bit DACs / EEPROM", tags: ["mcp4728", "mcp4728a4", "4470", "dac", "quad dac", "analog output", "voltage reference", "eeprom", "i2c", "stemma qt", "qwiic"],
    body: qtBody, color: charcoal, mounts: qtMounts,
    banks: [
      { side: "bottom", x: -6.35, y: 6.35, prefix: "JP1.", contacts: [
        supply(), ground(), clock, data,
        ["ldac", "LDAC", "Active-low output latch input. Controls synchronized channel updates.", "input"],
        ["rdy", "RDY", "Open-drain ready/busy output. Low during an EEPROM write.", "open_collector"],
      ] },
      { side: "top", x: -6.35, y: -6.35, prefix: "JP2.", contacts: [
        ground("gnd-2"),
        analogOut("va", "VA", "Buffered analog voltage output for DAC channel A."),
        analogOut("vb", "VB", "Buffered analog voltage output for DAC channel B."),
        analogOut("vc", "VC", "Buffered analog voltage output for DAC channel C."),
        analogOut("vd", "VD", "Buffered analog voltage output for DAC channel D."),
        supply("VCC", "vcc-2"),
      ] },
    ],
    draw: () => qtArt() + label(99, 47, "MCP4728", 12) + label(107, 95, "Quad I2C DAC", 9) +
      chip(90, 62, 20, 22, "", 5) + chip(57, 62, 12, 20, "472", 4) + smd(91, 54) + smd(54, 93),
    details: [...qtDetails, [0, 0, 3, 3, 1.1, "#242a30"]], note: qtNote,
    cad: { label: "Adafruit MCP4728 Rev A PCB CAD", url: "https://github.com/adafruit/Adafruit-MCP4728-PCB/blob/master/Adafruit%20MCP4728.brd" },
  }),
  board({
    id: "adafruit-ds3502-4286", name: "DS3502 Digital 10 kΩ Potentiometer", shortName: "DS3502", category: "Interfaces",
    source: "https://learn.adafruit.com/ds3502-i2c-potentiometer/pinouts",
    description: "Adafruit #4286 Rev C STEMMA QT board with a DS3502U+ in µSOP-10. Provides 128 wiper positions and nonvolatile power-up storage. A0 and A1 select I²C addresses 0x28–0x2B. VCC powers the digital interface, while V+ biases the resistor network and is linked to RH by the factory jumper.",
    subtitle: "I²C / 7-bit 10 kΩ digital potentiometer", tags: ["ds3502", "4286", "potentiometer", "digital potentiometer", "digipot", "resistance", "10k", "i2c", "stemma qt", "qwiic"],
    body: qtBody, color: charcoal, mounts: qtMounts,
    banks: [
      { side: "bottom", x: -6.35, y: 6.35, prefix: "JP2.", diameter: 1.6764, contacts: [
        ["vcc", "Vcc", "2.5–5.5 V digital supply and I²C logic reference.", "power_in"], ground(), clock, data,
        ["a0", "A0", "I²C address bit 0. High adds 1 to base address 0x28.", "input"],
        ["a1", "A1", "I²C address bit 1. High adds 2 to base address 0x28.", "input"],
      ] },
      { side: "top", x: -3.81, y: -6.35, prefix: "JP1.", diameter: 1.6764, contacts: [
        ["rl", "RL", "Low terminal of the 10 kΩ resistor network. Keep between ground and V+.", "passive"],
        ["rw", "RW", "Adjustable wiper terminal. Keep between ground and V+ and within the 1 mA wiper-current rating.", "passive"],
        ["rh", "RH", "High terminal of the resistor network. Linked to V+ by the factory solder jumper.", "passive"],
        ["vplus", "V+", "Analog bias supply, 4.5–15.5 V and above VCC per the DS3502 specifications. Linked to RH by default.", "power_in"],
      ] },
    ],
    draw: () => qtArt() + label(99, 47, "DS3502", 12) + label(99, 58, "I2C Potentiometer", 8.5) +
      chip(90, 70, 20, 22, "", 5) + chip(129, 69, 12, 22, "103", 4) + smd(92, 64) + smd(92, 98),
    details: [...qtDetails, [0, 0.762, 3, 3, 1.1, "#242a30"]], note: qtNote,
    cad: { label: "Adafruit DS3502 Rev C STEP model", url: "https://github.com/adafruit/Adafruit_CAD_Parts/blob/main/4286%20DS3502%20Digital%20Pot/4286%20Adafruit%20DS3502%20v3.step" },
  }),
  board({
    id: "adafruit-ad8495-1778", name: "AD8495 Analog K-type Thermocouple Amplifier", shortName: "AD8495", category: "Interfaces",
    source: "https://learn.adafruit.com/ad8495-thermocouple-amplifier/pinouts",
    description: "Adafruit #1778 breakout with an AD8495ARMZ in MSOP-8 and a TLVH431 1.25 V reference. The nominal analog output is 1.25 V + 5 mV/°C for a K-type thermocouple. Supply with 3.3 V or 5 V and read OUT with an ADC. The published 20.32 × 16.51 mm CAD layout has no revision identifier.",
    subtitle: "Analog output / K-type thermocouple", tags: ["ad8495", "1778", "thermocouple", "type k", "analog amplifier", "temperature", "cold junction"],
    body: [20.32, 16.51], color: blue, mounts: [[-7.62, -5.715], [-7.62, 5.715]],
    banks: [
      { side: "right", x: 7.62, y: -3.429, prefix: "JP1.", diameter: 1.6764, square: true, contacts: [
        ["vplus", "V+", "Board supply input. Use 3.3 V or 5 V and keep OUT within the host ADC range.", "power_in"],
        ground(), analogOut("out", "OUT", "Analog temperature output. Nominal T in °C = (OUT in volts − 1.25) / 0.005."), ground("gnd-2"),
      ] },
      { side: "left", x: -6.858, y: -1.827, prefix: "X1.", diameter: 2.1844, spacing: 3.5, terminal: true, contacts: [
        ["therm-plus", "Ylw+", "Positive K-type thermocouple wire, yellow under the ANSI color convention.", "input", "X1.2"],
        ["therm-minus", "Red−", "Negative K-type thermocouple wire, red under the ANSI color convention.", "input", "X1.1"],
      ] },
    ],
    draw: () => label(108, 19, "AD8495", 10.5) + label(108, 112, "Adafruit", 7.5) +
      rect(10, 43, 42, 53, 1.5, "#49a083", "#9cceb0") + rect(12, 45, 38, 49, 1.5, "#7ac2a1") +
      line(12, 69.5, 50, 69.5, "#48896e") + screw(32, 57, 9.5) + screw(32, 82, 9.5) +
      chip(94, 53, 18, 23, "", 4) + chip(91, 95, 21, 9, "", 3) +
      smd(70, 31) + smd(84, 31) + smd(71, 48, "#44484b") + smd(67, 68) + smd(72, 87, "#44484b") +
      smd(65, 105) + smd(78, 105) + rect(123, 31, 7, 18, 1, "#33383b", "#bdc5bf"),
    details: [[-6.858, -0.127, 7.7, 7.2, 7, "#7ac2a1"], [2.54, -0.127, 3, 3, 1.1, "#242a30"]],
    note: "Reference breakout contact layout from the published CAD. JP1 carries supply, two ground contacts and OUT. X1.1 and X1.2 mark the onboard thermocouple screw terminals.",
    cad: { label: "Adafruit AD8495 PCB CAD", url: "https://github.com/adafruit/Adafruit-AD8495-Breakout-PCB/blob/master/Adafruit%20AD849x_Thermo.brd" },
  }),
];

const analogPrototypingComponents = entries.map(({ component }) => component);
const analogPrototypingArt = Object.fromEntries(entries.map(({ component, art }) => [component.id, art]));
const analogPrototypingFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const analogPrototypingModels = Object.fromEntries(entries.map(({ component, model }) => [component.id, model]));

export default defineFamily("analog-prototyping", (analogPrototypingComponents).map(component => ({ component, render: (analogPrototypingArt)[component.art], footprint: (analogPrototypingFootprints)[component.id], model: analogPrototypingModels[component.id] })));
