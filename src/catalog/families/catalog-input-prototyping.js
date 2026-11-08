import { defineFamily } from "../registry.js";
import { reviewedBoardMounting, clippedFrontArtwork } from "../shared/reviewed-board-mounting.js";
import { physicalComponent, physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, label, line, pad, path, pinRow, rect, smd } from "../shared/svg.js";

const scale = 6;
const horizontalMargin = 18;
const verticalMargin = 24;
const pcbColor = "#303438";
const silk = "#eeeade";
const supply = [
  ["vin", "VIN", "3–5 V board supply. Match VIN to the host logic voltage.", "power_in"],
  ["3vo", "3Vo", "Regulated 3.3 V output.", "power_out"],
  ["gnd", "GND", "Common ground for power and logic.", "power_in"],
];
const i2c = [
  ["scl", "SCL", "Level-shifted I²C clock input for 3–5 V host logic.", "input"],
  ["sda", "SDA", "Level-shifted bidirectional I²C data for 3–5 V host logic.", "bidirectional"],
];
const interrupt = ["int", "INT", "Active-low, open-drain interrupt output. Read the device status to acknowledge events.", "open_collector"];
const adafruitCad = directory => ({
  label: "Adafruit STEP and CAD files",
  url: `https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/${encodeURIComponent(directory)}`,
});

function qtSocket(x, y, direction) {
  return `<g transform="translate(${x} ${y}) scale(${direction} 1)">` +
    [-9, -3, 3, 9].map(dy => line(19, dy, 26, dy, "#b3ad96", 1.8)).join("") +
    rect(0, -17, 21, 34, 2, "#444744", "#a9aba3") +
    rect(1, -12, 4, 24, 1, "#24292b") +
    line(6, -15, 19, -15, "#c4c1b4", 0.8) + "</g>";
}

function mountingRing(x, y) {
  return circle(x, y, 9.1, "none", silk) + circle(x, y, 8, "#c5ab71") +
    circle(x, y, 6.5, "#252c31", "#dcd6bb");
}

function qfn(x, y, size, marking, rotation = 0, pinsPerSide = 5) {
  const contacts = Array.from({ length: pinsPerSide }, (_, index) => {
    const offset = -size / 2 + 3 + index * (size - 6) / (pinsPerSide - 1);
    return line(offset, -size / 2 - 1.2, offset, -size / 2, "#b2b4ad", 1.2) +
      line(offset, size / 2, offset, size / 2 + 1.2, "#b2b4ad", 1.2) +
      line(-size / 2 - 1.2, offset, -size / 2, offset, "#b2b4ad", 1.2) +
      line(size / 2, offset, size / 2 + 1.2, offset, "#b2b4ad", 1.2);
  }).join("");
  return `<g transform="translate(${x} ${y}) rotate(${rotation})">` + contacts +
    rect(-size / 2, -size / 2, size, size, 1.3, "#24282b", "#7a8078") +
    circle(-size / 2 + 2.5, -size / 2 + 2.5, 0.9, "#c6c5b6") +
    label(0, 1, marking, 5, "#a7ac9c") + "</g>";
}

function terminalLabels(component) {
  return component.pins.map(pin => label(pin.x, pin.edge === "top" || pin.y + 10 > component.height - 5 ? pin.y - 10 : pin.y + 10, pin.label, 7.2, "#34475a")).join("");
}

function qtBreakout({ component, body, headers, socketsY, holes, artwork, details, cad, outline, note, insertion }) {
  const [bodyWidth, bodyHeight] = body;
  const width = Math.ceil(bodyWidth * scale + horizontalMargin * 2);
  const height = Math.ceil(bodyHeight * scale + verticalMargin * 2);
  const boardX = (width - bodyWidth * scale) / 2;
  const boardY = (height - bodyHeight * scale) / 2;
  const pinGroups = headers.map(({ side, x, specs }) => pinRow(side, width, height, boardX + x * scale, 2.54 * scale, specs));
  const positions = headers.flatMap(({ x, y, specs }) => specs.map((_spec, index) => [boardX + (x + index * 2.54) * scale, boardY + y * scale]));
  const part = physicalComponent({
    ...component, manufacturer: "Adafruit", category: "Interfaces", referencePrefix: "U",
    width, height, pins: pinGroups.flat(), art: component.id, contactLayout: "physical",
    tags: [...component.tags, "stemma qt", "qwiic", "i2c"],
  }, positions);
  const headerArt = showLabels => headers.map(({ side, x, y, specs, captionOffsets }) => specs.map((spec, index) => {
    const padX = (x + 2.54 * index) * scale;
    const padY = y * scale;
    const captionY = padY + (captionOffsets?.[index] ?? (side === "top" ? 11 : 10));
    return pad(padX, padY) + (showLabels ? label(padX, captionY, spec[1], 6.4, silk) : "");
  }).join("")).join("");
  const entry = {
    component: part,
    art: (_definition, showLabels) => {
      const pcb = outline ?? rect(0, 0, bodyWidth * scale, bodyHeight * scale, 15.24, pcbColor, "#8f9990");
      return `<g transform="translate(${boardX} ${boardY})">` + pcb +
        holes.map(([x, y]) => mountingRing(x * scale, y * scale)).join("") +
        qtSocket(0, socketsY * scale, 1) + qtSocket(bodyWidth * scale, socketsY * scale, -1) +
        artwork() + headerArt(showLabels) + "</g>";
    },
    footprint: {
      body, color: pcbColor, modelHeight: 1.6, drill: 1, size: 1.778, shape: "circle",
      groups: headers.map(({ x, y, specs, diameter = 1.778 }) => ({
        ids: specs.map(spec => spec[0]), x: x - bodyWidth / 2, y: y - bodyHeight / 2,
        pitch: 2.54, size: diameter,
      })),
      details: [
        [-bodyWidth / 2 + 2.54, socketsY - bodyHeight / 2, 4.3, 5.2, 2.5, "#424640"],
        [bodyWidth / 2 - 2.54, socketsY - bodyHeight / 2, 4.3, 5.2, 2.5, "#424640"],
        ...details,
      ],
      note,
    },
    model: adafruitCad(cad),
  };
  if (insertion) {
    const contacts = headers.flatMap(header => header.specs.map((spec, index) => ({
      pinId: spec[0], x: header.x + index * 2.54 - bodyWidth / 2, y: header.y - bodyHeight / 2,
    })));
    const region = { x: boardX, y: boardY, width: bodyWidth * scale, height: bodyHeight * scale };
    const bounds = { x: region.x - .5, y: region.y - .5, width: region.width + 1, height: region.height + 1 };
    entry.mounting = reviewedBoardMounting({
      source: { label: `${component.name} manufacturer Eagle header layout`, url: component.source },
      contacts, calibration: { origin: { x: boardX + bodyWidth * scale / 2, y: boardY + bodyHeight * scale / 2 }, unitsPerMm: scale },
      bodyRegions: [region], viewBounds: bounds,
      bodyEvidence: "The source-reviewed Adafruit Eagle layout establishes the PCB outline, full opposing header centers and row spacing. Both complete strips can be populated below the PCB; QT sockets stay above and are separate cable connections.",
      renderMounted: () => clippedFrontArtwork(entry.art, part, bounds),
      note: "Populate both complete 2.54 mm header rows with straight male leads. Every electrode or matrix contact is a real downward lead; no touch signal is replaced by a schematic-only connection.",
    });
  }
  return entry;
}

const mpr121 = qtBreakout({
  insertion: true,
  component: {
    id: "adafruit-mpr121-1982", name: "Adafruit MPR121 12-Key Capacitive Touch Breakout", shortName: "MPR121",
    subtitle: "12 electrodes / STEMMA QT / #1982",
    source: "https://learn.adafruit.com/adafruit-mpr121-12-key-capacitive-touch-sensor-breakout-tutorial/pinouts",
    description: "Adafruit #1982 Jan-2021 STEMMA QT layout, shown with vector silkscreen. Twelve external electrodes provide touch or proximity inputs. The default I²C address is 0x5A. The host header follows the QT revision pin order.",
    tags: ["mpr121", "1982", "capacitive", "touch", "electrode", "buttons", "proximity", "keyboard"],
  },
  body: [33.02, 19.177], socketsY: 10.16, holes: [[2.54, 16.51], [30.48, 16.51]],
  headers: [
    { side: "top", x: 1.27, y: 1.27, diameter: 1.6764, specs: [
      ...Array.from({ length: 12 }, (_, index) => {
        const channel = 11 - index;
        return [`ele${channel}`, String(channel), `Touch electrode ${channel} at the sensor's 3.3 V domain.${channel >= 4 ? ` Can alternatively be configured as GPIO or LED output ${channel - 4}.` : ""}`, channel >= 4 ? "bidirectional" : "input", `JP1.${index + 1}`];
      }),
      ["gnd-electrodes", "GND", "Ground contact beside electrode 0, connected to the host ground.", "power_in", "JP1.13"],
    ] },
    { side: "bottom", x: 8.89, y: 16.51, captionOffsets: [10, -10, 10, -10, 10, -10, 10], specs: [
      ...supply.map((spec, index) => [...spec, `JP2.${index + 1}`]),
      ...i2c.map((spec, index) => [...spec, `JP2.${index + 4}`]),
      [...interrupt, "JP2.6"],
      ["addr", "ADDR", "Address select. Connect to GND, 3Vo, SDA or SCL for I²C addresses 0x5A, 0x5B, 0x5C or 0x5D respectively.", "input", "JP2.7"],
    ] },
  ],
  outline: path("M0 0H198.12V99.822Q198.12 115.062 182.88 115.062H15.24Q0 115.062 0 99.822Z", pcbColor, "#8f9990", 1.1),
  artwork: () => label(99, 28, "MPR121", 10, silk) + label(99, 39, "12 Capacitive Touch Sensors", 7.3, silk) +
    qfn(99.06, 57.91, 18, "M121") + chip(44, 61, 15, 12, "", 2) +
    chip(144, 76, 14, 12, "", 3) + chip(144, 47, 14, 16, "", 4) +
    smd(36, 82) + smd(43, 50) + smd(70, 64) + smd(116, 71) + smd(117, 60) +
    smd(117, 81) + smd(130, 55, "#4b5150") +
    circle(9, 37, 2.3, "#91bf7f", "#e0d8b5") + label(9, 28, "on", 6, silk) +
    circle(136, 77, 2.2, "#b85b47", "#d7ab6e"),
  details: [[0, 0.0635, 3, 3, 0.65, "#24282b"]],
  cad: "1982 MPR121 Stemma Breakout",
  note: "Host-board pattern for the Jan-2021 MPR121 STEMMA QT revision. JP1 and JP2 centers, hole sizes and land diameters follow Adafruit's Eagle board, with the component side facing up. QT sockets duplicate VIN, GND, SCL and SDA. Mounting holes are omitted. The exported 3D body is approximate.",
});

const tca8418 = qtBreakout({
  insertion: true,
  component: {
    id: "adafruit-tca8418-4918", name: "Adafruit TCA8418 8×10 Keypad Matrix Breakout", shortName: "TCA8418",
    subtitle: "80 keys or 18 GPIO / STEMMA QT / #4918",
    source: "https://learn.adafruit.com/adafruit-tca8418-keypad-matrix-and-gpio-expander-breakout/pinouts",
    description: "Adafruit #4918 STEMMA QT board with all 26 header contacts. Scans an 8-row, 10-column key matrix, debounces keys and queues ten key events. Matrix/GPIO signals use the chip's 3.3 V domain. The I²C address is fixed at 0x34.",
    tags: ["tca8418", "4918", "keypad", "keyboard", "matrix", "buttons", "gpio", "expander"],
  },
  body: [35.56, 17.78], socketsY: 8.89, holes: [[12.7, 8.89], [22.86, 8.89]],
  headers: [
    { side: "top", x: 2.54, y: 2.54, diameter: 1.6764, captionOffsets: Array(13).fill(-10), specs: [
      ["gnd-matrix", "GND", "Second ground contact beside column 9.", "power_in", "JP1.13"],
      ...Array.from({ length: 10 }, (_, index) => {
        const column = 9 - index;
        return [`c${column}`, `C${column}`, `Key matrix column ${column}, or configurable 3.3 V GPIO.`, "bidirectional", `JP1.${12 - index}`];
      }),
      ["r0", "R0", "Key matrix row 0, or configurable 3.3 V GPIO.", "bidirectional", "JP1.2"],
      ["r1", "R1", "Key matrix row 1, or configurable 3.3 V GPIO.", "bidirectional", "JP1.1"],
    ] },
    { side: "bottom", x: 2.54, y: 15.24, diameter: 1.6764, captionOffsets: [-10, 10, -10, 10, -10, 10, -10, 10, 10, 10, 10, 10, 10], specs: [
      ...supply.map((spec, index) => [...spec, `JP4.${index + 1}`]),
      ...i2c.map((spec, index) => [...spec, `JP4.${index + 4}`]),
      [...interrupt, "JP4.6"],
      ["rst", "RST", "Active-low hardware reset input with a pull-up to the sensor's 3.3 V supply.", "input", "JP4.7"],
      ...Array.from({ length: 6 }, (_, index) => {
        const row = 7 - index;
        return [`r${row}`, `R${row}`, `Key matrix row ${row}, or configurable 3.3 V GPIO.`, "bidirectional", `JP4.${index + 8}`];
      }),
    ] },
  ],
  artwork: () => label(111, 29, "TCA 8418", 10, silk) +
    qfn(106.68, 46.48, 24, "TCA", 45, 6) + chip(41, 49, 15, 12, "", 2) +
    chip(155, 58, 14, 13, "", 3) + chip(155, 34, 18, 10, "", 4) +
    smd(37, 70) + smd(45, 33) + smd(63, 34) + smd(65, 68) + smd(101, 73) +
    label(143, 73, "8×10", 8, silk) + label(143, 82, "Keypad", 7, silk) +
    circle(20, 31, 2.3, "#91bf7f", "#e0d8b5") + label(8, 29, "on", 6, silk),
  details: [[0, -1.143, 4, 4, 0.8, "#24282b"]],
  cad: "4918 TCA8418 Stemma",
  note: "Host-board pattern from Adafruit's TCA8418 Eagle design. Both 13-pin headers use 2.54 mm pitch, 1 mm holes and 1.6764 mm lands. JP1 numbering runs right to left in this top view. QT sockets repeat the I²C/power interface. Mounting holes are omitted. The exported 3D body is approximate.",
});

function encoderLand(x, y) {
  return `<g transform="translate(${x} ${y}) rotate(-45)">` +
    rect(-11, -7.3, 22, 14.6, 7, "#bea56c", "#dad4b2") +
    rect(-6.5, -3.7, 13, 7.4, 3.5, "#24292d") + "</g>";
}

const qtRotary = qtBreakout({
  component: {
    id: "adafruit-qt-rotary-4991", name: "Adafruit I²C QT Rotary Encoder Breakout", shortName: "QT Rotary Encoder",
    subtitle: "seesaw / NeoPixel / bare #4991 board",
    source: "https://learn.adafruit.com/adafruit-i2c-qt-rotary-encoder/pinouts",
    description: "Adafruit #4991 vector-silkscreen revision, shown from the electronics side. Attach a standard PEC11-pinout encoder to the opposite face. The SAMD09 tracks rotation and the push switch, and drives a NeoPixel. I²C defaults to 0x36, with solder-jumper options through 0x3D.",
    tags: ["rotary", "encoder", "4991", "seesaw", "knob", "control", "neopixel", "pec11"],
  },
  body: [25.4, 25.4], socketsY: 12.7,
  holes: [[2.54, 2.54], [22.86, 2.54], [2.54, 22.86], [22.86, 22.86]],
  headers: [
    { side: "bottom", x: 6.35, y: 22.86, captionOffsets: [10, -10, 10, -10, 10, -10], specs: [
      ["int", "INT", "Configurable active-low interrupt output for encoder and switch events.", "output", "JP2.6"],
      [...i2c[1], "JP2.5"], [...i2c[0], "JP2.4"],
      [...supply[2], "JP2.3"], [...supply[1], "JP2.2"], [...supply[0], "JP2.1"],
    ] },
  ],
  artwork: () =>
    path("M76 29L119 72L76 115L33 72Z", "none", "#a0a397", 0.9) +
    encoderLand(49.26, 49.26) + encoderLand(103.14, 103.14) +
    [[97.75, 33.1], [108.53, 43.87], [119.3, 54.65], [33.1, 97.75], [54.65, 119.3]]
      .map(([x, y]) => pad(x, y)).join("") +
    qfn(72.85, 65.68, 24, "D09", 45, 6) + chip(8, 105, 15, 12, "", 2) +
    chip(99, 73, 14, 11, "", 3) + chip(126, 35, 18, 10, "", 4) +
    smd(43, 69) + smd(73, 113) + smd(95, 100) +
    rect(67, 4, 18, 17, 1.7, "#eee6cf", "#928e79") + circle(76, 12.5, 4, "#d9d0a8") +
    [36.58, 102.87, 116.59].map((x, index) =>
      rect(x - 3.4, 6.5, 2.5, 11, 0.6, "#d4be75") + rect(x + 0.9, 6.5, 2.5, 11, 0.6, "#d4be75") +
      label(x, 25, `A${2 - index}`, 6, silk)
    ).join("") +
    circle(12, 52, 2, "#b3594c", "#d5b38a") + label(12, 43, "INT", 5.7, silk) +
    circle(140, 101, 2, "#91bf7f", "#e0d8b5") + label(140, 111, "ON", 5.7, silk),
  details: [[-0.5588, -1.7526, 4, 4, 0.9, "#24282b"]],
  cad: "4991 QT Rotary Encoder",
  note: "Host-board pattern for the six-pin JP2 header, viewed from the electronics side as in the artwork. JP2.1 is VIN at the right end of the header. The encoder solders to the opposite face at 45 degrees. Its assembly lands, board mounting holes and alternate QT sockets are omitted from this host footprint. The exported 3D body is approximate.",
});

const encoderComponent = {
  id: "bourns-pec11r-4215f-s0024", name: "Bourns PEC11R-4215F-S0024 Rotary Encoder", shortName: "PEC11R + Switch",
  manufacturer: "Bourns", category: "Switches", referencePrefix: "SW",
  source: "https://www.bourns.com/docs/product-datasheets/pec11r.pdf",
  description: "PEC11R-4215F-S0024 mechanical quadrature encoder with 24 detents, 24 pulses per revolution, a 15 mm metal D shaft and a momentary SPST push switch. The drawing shows the shaft side. A, C and B are dry contacts and require host pull-ups and debouncing.",
  subtitle: "24 detents / 24 PPR / 15 mm D shaft",
  tags: ["bourns", "pec11r", "pec11r-4215f-s0024", "encoder", "rotary", "quadrature", "switch", "knob", "control"],
  width: 144, height: 140, art: "bourns-pec11r-4215f-s0024",
  pins: [
    ...pinRow("top", 144, 140, 47, 50, [
      ["sw1", "1", "First contact of the normally-open momentary push switch.", "passive", "1"],
      ["sw2", "2", "Second contact of the normally-open momentary push switch.", "passive", "2"],
    ]),
    ...pinRow("bottom", 144, 140, 42, 30, [
      ["a", "A", "Quadrature channel A contact. Use a pull-up and debounce relative to common C.", "passive", "A"],
      ["common", "C", "Common contact for quadrature channels A and B. Usually connected to ground.", "passive", "C"],
      ["b", "B", "Quadrature channel B contact. Use a pull-up and debounce relative to common C.", "passive", "B"],
    ]),
  ],
};
const encoder = {
  component: encoderComponent,
  art: (component, showLabels) => {
    const terminals = [57, 87].map(x => rect(x - 1.2, 15, 2.4, 12, .2, "#a7b1b4")).join("") +
      [57, 72, 87].map(x => rect(x - 1.2, 103, 2.4, 14, .2, "#a7b1b4")).join("");
    const housing = rect(33.5, 24, 77, 80, 2.4, "#272e30", "#9ba4a4") +
      rect(35.5, 25, 73, 77, 2, "#aab2b1", "#d9ded8") +
      [[38, 30], [105, 30], [38, 97], [105, 97]].map(([x, y]) => circle(x, y, 1.7, "#636d6c")).join("") +
      rect(29, 57, 6.5, 16, 1, "#8f9999", "#d8ded9") + rect(108.5, 57, 6.5, 16, 1, "#8f9999", "#d8ded9") +
      circle(72, 63, 25, "#b9bfbb", "#6b7674") + circle(72, 63, 21, "#d9dcd2", "#747d79") +
      path("M84 49.58A18 18 0 1 0 84 76.42Z", "#919d9c", "#e3e7dd", 1.1) +
      line(83, 51, 83, 75, "#697777", 1.3) + line(57, 55, 61, 50, "#e5e7df", 1.1);
    return terminals + housing + (showLabels ? terminalLabels(component) : "");
  },
  footprint: {
    body: [12.5, 13.4], color: "#aab2b1", modelHeight: 7.5, drill: 1, size: 1.8,
    pads: [
      { id: "sw1", x: -2.5, y: -7 }, { id: "sw2", x: 2.5, y: -7 },
      { id: "a", x: -2.5, y: 7.5 }, { id: "common", x: 0, y: 7.5 }, { id: "b", x: 2.5, y: 7.5 },
    ],
    details: [[0, 0, 7, 7, 7, "#919d9c"]],
    note: "Reference electrical pattern for the PEC11R-4xxxF-Sxxxx drawing, viewed from the shaft side. Signal holes use the manufacturer's 1 mm nominal diameter. Add the two 2.6 × 1.8 mm mechanical support slots centered at x = ±6.6 mm, y = 0 before fabrication. These slots and shaft hardware are omitted here. The exported 3D body is approximate.",
  },
  model: {
    label: "Bourns CAD selector — choose PEC11R",
    url: "https://www.bourns.com/resources/design-tools/design-files?product=encoders_contacting_encoders",
  },
};

const trimmerComponent = {
  id: "bourns-3296w-1-103lf", name: "Bourns 3296W-1-103LF 10 kΩ Trimmer", shortName: "3296W 10k",
  manufacturer: "Bourns", category: "Passives", referencePrefix: "RV", defaultValue: "10 kΩ",
  source: "https://www.bourns.com/docs/product-datasheets/3296.pdf",
  description: "3296W-1-103LF sealed cermet trimmer with nominal 25-turn top adjustment, 10 kΩ resistance and ±10% tolerance. Terminal 2 is the wiper, 1 is the counterclockwise end and 3 is the clockwise end. The top view shows the inline physical lead ends.",
  subtitle: "10 kΩ / 25 turns / top adjustment",
  tags: ["bourns", "3296w", "3296w-1-103lf", "trimmer", "trimpot", "potentiometer", "10k", "adjustment", "variable resistor"],
  width: 124, height: 100, art: "bourns-3296w-1-103lf",
  pins: pinRow("bottom", 124, 100, 37, 25, [
    ["cw", "3", "Clockwise end of the 10 kΩ resistive track.", "passive", "3"],
    ["wiper", "2", "Adjustable wiper. Clockwise adjustment moves the wiper toward terminal 3.", "passive", "2"],
    ["ccw", "1", "Counterclockwise end of the 10 kΩ resistive track.", "passive", "1"],
  ]),
};
const trimmer = {
  component: trimmerComponent,
  art: (component, showLabels) =>
    [37, 62, 87].map(x => line(x, 61, x, 100, "#a7b1b4", 1.8)).join("") +
    rect(23.9, 29.7, 76.2, 38.6, 1.8, "#163b6d", "#10305c") +
    rect(23.9, 27.7, 76.2, 38.6, 1.8, "#2665a0", "#4e8fc2") +
    line(27, 30, 96, 30, "#5695c3", 1.2) +
    circle(89.96, 56.16, 9.2, "#946b2b", "#cfaa5a") +
    circle(89.96, 55.16, 8.1, "#c7a15b", "#e5c577") +
    line(85.5, 59.6, 94.4, 50.7, "#715521", 2.1) +
    label(54, 44, "103", 10, "#a4b6c1") +
    (showLabels ? terminalLabels(component) : ""),
  footprint: {
    body: [9.53, 4.83], color: "#2665a0", modelHeight: 10.03, drill: 0.8, size: 1.44,
    pads: [
      { id: "cw", x: -2.54, y: -0.005 }, { id: "wiper", x: 0, y: -0.005 }, { id: "ccw", x: 2.54, y: -0.005 },
    ],
    details: [[3.495, 1.145, 2.19, 2.19, 0.76, "#c7a15b"]],
    note: "3296W signal centers from the Bourns component-side mechanical drawing. Terminal 1 is at the adjustment-screw end of the inline row. The 0.8 mm drill and 1.44 mm land are selected for the published 0.51 mm leads, matching KiCad's 3296W pattern. The exported 3D body is approximate.",
  },
  model: {
    label: "Bourns CAD selector — choose 3296W",
    url: "https://www.bourns.com/resources/design-tools/design-files?product=potentiometers_trimpot_trimming_potentiometers_multiturn",
  },
};

const entries = [mpr121, tca8418, qtRotary,
  physicalEntry(encoder, (_pin, index) => index < 2 ? [57 + index * 30, 16] : [57 + (index - 2) * 15, 116]),
  physicalEntry(trimmer, pin => [pin.x, pin.y]),
];

export default defineFamily("input-prototyping", entries.map(({ art: render, ...entry }) => ({ ...entry, render })));
