import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect } from "../shared/svg.js";
import { readyBoard, readyRow, readySocket } from "../shared/wire-board.js";

const wiki = sku => `https://wiki.dfrobot.com/${sku}/`;
const hole = (x, y) => circle(x, y, 10, "#c8994d", "#edd391") + circle(x, y, 5.6, "#edf2e8");
const board = (x, y, w, h) => rect(x, y, w, h, 12, "#252a28", "#8e9b83");
const passives = (x, y, count) => Array.from({ length: count }, (_, i) => rect(x + i % 5 * 14, y + Math.floor(i / 5) * 17, 8, 5, .5, i % 3 ? "#b5a276" : "#4a5148", "#bbc2b2")).join("");
const make = spec => {
  const entry = readyBoard({ manufacturer: "DFRobot", category: "Sensors", ...spec,
    functions: {}, contacts: spec.contacts.map(p => ({ ...p, note: spec.functions?.[p.signal] })),
  });
  entry.component.references = spec.references;
  return { component: entry.component, render: entry.art, footprint: entry.footprint, model: entry.model };
};

const phSource = wiki("sen0161-v2");
const phLayout = "https://dfimg.dfrobot.com/wiki/20520/SEN0161-V2_analog-ph-sensor-v2_layout_V1.0.pdf";
const ph = make({
  id: "dfrobot-sen0161-v2-ph", name: "DFRobot Gravity pH Sensor V2 SEN0161-V2", short: "Gravity pH V2",
  width: 490, height: 390, subtitle: "SEN0161-V2 / pH Meter V2.0 / analog 0–3.0 V",
  source: phSource, references: [phSource, phLayout, "https://dfimg.dfrobot.com/wiki/20520/SEN0161-V2_analog-ph-sensor-v2_svg_V1.0.svg"], cad: phLayout,
  cadLabel: "DFRobot SEN0161-V2 manufacturer assembly layout (not a 3D model)",
  description: "SEN0161-V2 signal conditioner, matching the black pH Meter V2.0 board in DFRobot's pinout. Component-side view shows all three Gravity connector solder-tail contacts; a separate BNC mating-face view exposes the electrode center and reference contacts. Supply is 3.3–5.5 V and analog output is 0–3.0 V. Use the pH probe and two-point calibration described by DFRobot. The BNC reference is an electrode connection; it is not labeled as power ground. Small component placement, connector details and the off-board termination footprint are representative.",
  tags: ["dfrobot", "gravity", "sen0161-v2", "ph", "water", "liquid", "analog", "probe", "bnc", "diy", "starter kit", "arduino"],
  types: { A: "output", ELECTRODE: "input", PROBE_REF: "passive", "+": "power_in", "-": "power_in" },
  functions: { A: "0–3.0 V conditioned pH analog output; use the correct ADC reference and calibrated conversion.", "+": "3.3–5.5 V module supply input.", "-": "Power and output-signal ground.", ELECTRODE: "High-impedance pH-electrode BNC center contact. Connect the matching pH probe; this is not a GPIO.", PROBE_REF: "BNC outer electrode-reference contact. Keep separate from host power ground unless the manufacturer's circuit explicitly requires that connection." },
  boardBounds: [[100, 40, 330, 245]],
  contacts: [
    ...readyRow("GRAVITY", "- + A", 371, 139, 0, 20, { side: "left", captions: ["−", "+", "A"] }),
    { ref: "BNC", number: "BNC.CENTER", signal: "ELECTRODE", x: 155, y: 336, side: "right", caption: "CENTER", radius: 3.5 },
    { ref: "BNC", number: "BNC.SHIELD", signal: "PROBE_REF", x: 139, y: 320, side: "left", caption: "REF", radius: 3.5 },
  ],
  draw: () => board(100, 40, 330, 245) + [124, 405].flatMap(x => [63, 261].map(y => hole(x, y))).join("") +
    label(267, 67, "DFROBOT", 16) + label(275, 261, "Gravity pH Meter V2.0", 13, "#ddcc68") +
    rect(52, 108, 80, 92, 3, "#b5bdb8", "#edf0e4") + rect(25, 124, 42, 60, 2, "#9ea9a4", "#dce3d9") +
    Array.from({ length: 7 }, (_, i) => line(65 + i * 8, 110, 65 + i * 8, 199, "#6a7871", 1)).join("") +
    chip(238, 132, 41, 57, "pH", 8) + passives(219, 96, 10) + passives(289, 127, 10) +
    readySocket(384, 117, 40, 84, "", true) + circle(155, 336, 23, "#b8bdb6", "#5b7067") +
    circle(155, 336, 16, "#d9dccb", "#87968c") + label(262, 337, "BNC / MATING FACE", 9, "#405655"),
});

const tdsSource = wiki("sen0244");
const tdsSch = "https://dfimg.dfrobot.com/wiki/20205/SEN0244_analog-tds-sensor_schematics_V1.0.pdf";
const tds = make({
  id: "dfrobot-sen0244-tds", name: "DFRobot Gravity TDS Sensor SEN0244", short: "Gravity TDS",
  width: 490, height: 340, subtitle: "SEN0244 / TDS Meter V1.0 / analog 0–2.3 V",
  source: tdsSource, references: [tdsSource, tdsSch, "https://dfimg.dfrobot.com/wiki/20205/SEN0244_analog-tds-sensor_svg_V1.0.svg"], cad: tdsSch,
  cadLabel: "DFRobot SEN0244 manufacturer schematic (not a 3D model)",
  description: "SEN0244 TDS Meter V1.0 black board, viewed from the component side as in the official pinout. All three Gravity connector tails and both probe connector tails are exposed. Gravity contacts run −, +, A top-to-bottom at the right. The two probe contacts carry the sensor excitation/measurement circuit and are not generic ground/power contacts. The board accepts 3.3–5.5 V and produces 0–2.3 V analog output; the example supports 0–1000 ppm with calibration and temperature compensation. The probe contains no temperature sensor. Geometry and the off-board termination carrier are representative.",
  tags: ["dfrobot", "gravity", "sen0244", "tds", "water", "liquid", "conductivity", "analog", "diy", "starter kit", "arduino"],
  types: { A: "output", "+": "power_in", "-": "power_in", PROBE_TOP: "passive", PROBE_BOTTOM: "passive" },
  functions: { A: "0–2.3 V conditioned analog output. Calibrate and apply temperature compensation for TDS estimates.", "+": "3.3–5.5 V module supply, 3–6 mA typical operating range in the board specification.", "-": "Power and analog-output ground.", PROBE_TOP: "Upper probe socket contact in this component-side view. Part of the alternating probe excitation/measurement circuit; connect the supplied two-electrode probe.", PROBE_BOTTOM: "Lower probe socket contact in this component-side view. Part of the probe circuit; do not substitute a power or ground connection. Probe electrodes are not polarity-marked in the user pinout." },
  boardBounds: [[90, 35, 335, 255]],
  contacts: [
    ...readyRow("GRAVITY", "- + A", 366, 139, 0, 20, { side: "left", captions: ["−", "+", "A"] }),
    ...readyRow("PROBE", "PROBE_TOP PROBE_BOTTOM", 151, 143, 0, 23, { side: "right", numbers: ["TOP", "BOTTOM"], captions: ["PROBE", "PROBE"] }),
  ],
  draw: () => board(90, 35, 335, 255) + [115, 400].flatMap(x => [60, 266].map(y => hole(x, y))).join("") +
    label(265, 66, "Gravity", 16) + label(265, 89, "TDS Meter V1.0", 12, "#ddcc68") +
    readySocket(97, 119, 43, 70, "", true) + readySocket(379, 117, 40, 84, "", true) +
    chip(201, 128, 37, 58, "AMP", 7) + chip(267, 118, 47, 74, "4060", 8) +
    passives(177, 104, 10) + passives(174, 224, 15) + circle(352, 70, 4, "#a6b75c"),
});

const gestureSource = wiki("sen0315");
const gestureSch = "https://dfimg.dfrobot.com/wiki/20496/SEN0315_paj7620u2_schematics_1.0.pdf";
const gesture = make({
  id: "dfrobot-sen0315-paj7620u2", name: "DFRobot Gravity PAJ7620U2 Gesture Sensor SEN0315", short: "Gravity Gesture",
  width: 375, height: 300, subtitle: "SEN0315 / sensor V1.0 / I²C 0x73",
  source: gestureSource, references: [gestureSource, gestureSch, "https://dfimg.dfrobot.com/wiki/20496/SEN0315_paj7620u2_dimension_1.0.pdf"], cad: gestureSch,
  cadLabel: "DFRobot SEN0315 manufacturer schematic and pin reference (not a 3D model)",
  description: "SEN0315 PAJ7620U2 Gesture Sensor V1.0, optical front view. All four connector through-hole contacts are visible on this face, mirrored horizontally from the rear socket photo while retaining their top-to-bottom D, C, −, + order. The 30 × 22 mm board recognizes gestures over approximately 3–20 cm. Supply is 3.3–5 V and I²C address is 0x73. Front glass/optics and the arrow legend distinguish this board from a bare PAJ7620U2 breakout. Artwork and the off-board contact carrier are representative.",
  tags: ["dfrobot", "gravity", "sen0315", "paj7620u2", "gesture", "i2c", "infrared", "diy", "starter kit", "arduino"],
  types: { D: "bidirectional", C: "input", "+": "power_in", "-": "power_in" },
  functions: { D: "I²C SDA, bidirectional serial data; match the bus pull-up voltage to the host.", C: "I²C SCL clock input.", "-": "Supply and I²C ground.", "+": "3.3–5 V module supply input." },
  boardBounds: [[45, 35, 280, 210]],
  contacts: readyRow("GRAVITY", "D C - +", 310, 114, 0, 20, { side: "right", captions: ["D/SDA", "C/SCL", "−", "+"] }),
  draw: () => board(45, 35, 280, 210) + hole(67, 57) + hole(67, 222) +
    circle(181, 139, 72, "#d8dfc8", "#bbc5b3") + circle(181, 139, 44, "#252a28") +
    rect(168, 112, 26, 53, 2, "#65736e", "#cbd2c0") + rect(174, 121, 14, 9, 1, "#b75450") + circle(181, 151, 4.5, "#754c49") +
    label(181, 83, "Right", 12, "#253834") + label(181, 197, "Left", 12, "#253834") +
    label(124, 139, "Up", 10, "#253834") + label(237, 139, "Down", 10, "#253834") +
    label(180, 264, "OPTICAL FRONT / CONTACT HOLES", 7.4, "#405655"),
});

export default defineFamily("dfrobot-more", [ph, tds, gesture]);
