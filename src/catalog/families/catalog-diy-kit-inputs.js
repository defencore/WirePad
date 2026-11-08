import { defineFamily } from "../registry.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { circle, label, line, mountingHole, path, rect, smd } from "../shared/svg.js";

// The black-PCB views follow the maker's photographs and same-side wiring diagrams.
// Contact centers drive both the illustrated metal posts and the canvas anchors.
// Unnumbered Keyestudio headers receive catalog numbers left to right in this view.
const docs = sku => `https://docs.keyestudio.com/projects/${sku}/en/latest/docs/${sku}.html`;
const ink = "#eed556", pcb = "#211f20", metal = "#c5c8c6", gold = "#e2bd38";
const commonTags = ["diy", "starter kit", "arduino", "input", "control"];
const ground = ["gnd", "−", "Common ground for the module supply and signal reference.", "power_in"];
const supply = ["vcc", "+", "3.3–5 V module supply input. Keep the host input voltage compatible with this supply.", "power_in"];

function outline(x, y, width, height, notches = true) {
  const bottom = y + height, right = x + width, notch = bottom - 28;
  return path(notches
    ? `M${x + 4} ${y}H${right - 4}Q${right} ${y} ${right} ${y + 4}V${notch - 11}a11 11 0 0 0 0 22V${bottom - 4}Q${right} ${bottom} ${right - 4} ${bottom}H${x + 4}Q${x} ${bottom} ${x} ${bottom - 4}V${notch + 11}a11 11 0 0 0 0 -22V${y + 4}Q${x} ${y} ${x + 4} ${y}Z`
    : `M${x + 4} ${y}H${right - 4}Q${right} ${y} ${right} ${y + 4}V${bottom - 4}Q${right} ${bottom} ${right - 4} ${bottom}H${x + 4}Q${x} ${bottom} ${x} ${bottom - 4}V${y + 4}Q${x} ${y} ${x + 4} ${y}Z`, pcb, "#625e58");
}

function headers(component, showLabels) {
  return component.pins.map(pin =>
    rect(pin.x - 6.8, pin.y - 24, 13.6, 13.5, 2, "#e4cb37", "#ffe776") +
    rect(pin.x - 2.2, pin.y - 10.5, 4.4, 19, 0.5, metal, "#777d79") +
    line(pin.x - 0.7, pin.y - 9, pin.x - 0.7, pin.y + 7, "#f4f3de", 1) +
    (showLabels ? label(pin.x, pin.y - 33, pin.label, pin.label.length > 2 ? 7 : 8.5, ink) : "")
  ).join("");
}

function resistor(x, y, value = "103") {
  return rect(x, y, 23, 11, 1, "#999888", ink) + rect(x + 4, y + 1, 15, 9, 0.4, "#3d3b34") + label(x + 11.5, y + 5.5, value, 5.2, "#e8e5cd");
}

function indicator(x, y) {
  return rect(x, y, 21, 10, 0.7, "#d6d0a3", ink) + rect(x + 5, y + 1.5, 11, 7, 0.8, "#8bb966") + label(x + 10, y + 17, "LED1", 5.5, ink);
}

function keyesMount(x, y) {
  return circle(x, y, 15, "#d9ddd2", "#eff1e5") + circle(x, y, 7.8, pcb, "#a5aaa1") +
    Array.from({ length: 6 }, (_, index) => {
      const angle = index * Math.PI / 3;
      return circle(x + Math.cos(angle) * 11.7, y + Math.sin(angle) * 11.7, 1.8, "#f7f6e8", "#b1b6a9");
    }).join("");
}

function shaft(cx, cy, radius = 27) {
  return circle(cx, cy, radius + 12, "#b5bbb7", "#ededde") +
    circle(cx, cy, radius + 7, "#777e7b", "#e0e1d7") +
    circle(cx, cy, radius, "#cdd0c7", "#eef1e9") +
    line(cx - radius * 0.55, cy + radius * 0.35, cx + radius * 0.55, cy - radius * 0.35, "#838b83", 5);
}

function keyesArt(kind, x, y, width, height, showLabels) {
  const cx = x + width / 2;
  let svg = outline(x, y, width, height);
  if (showLabels) svg += `<g transform="translate(${x + 9} ${y + 105}) rotate(-90)">${label(0, 0, "Keyestudio", 8, ink)}</g>`;
  if (kind === "joystick") {
    svg += [x + 10, x + width - 10].flatMap(hx => [y + 12, y + height - 16].map(hy => mountingHole(hx, hy, 4))).join("") +
      rect(cx - 47, y + 34, 94, 92, 3, "#b9beb8", "#daddce") +
      rect(cx - 57, y + 43, 15, 56, 2, "#1b3930", "#a5b6a3") + rect(cx + 42, y + 45, 15, 56, 2, "#1b3930", "#a5b6a3") +
      circle(cx, y + 78, 55, "#141719", "#505451") + circle(cx, y + 75, 42, "#232527", "#393e3c") +
      circle(cx, y + 66, 29, "#111516", "#343839") +
      resistor(cx - 12, y + height - 70) + smd(cx + 29, y + height - 59) +
      line(cx, y + 6, cx, y + 15, ink, 1) + line(cx - 5, y + 11, cx + 5, y + 11, ink, 1);
    if (showLabels) svg += label(cx, y + height - 49, "XY + KEY", 7, ink);
  } else if (kind === "encoder") {
    svg += [x + 12, x + width - 12].map(hx => mountingHole(hx, y + 12, 5)).join("") +
      rect(cx - 45, y + 35, 90, 84, 3, "#b5bcb6", "#ecefe2") + rect(cx - 42, y + 104, 84, 13, 1, "#1e5545", "#839e8d") +
      [cx - 29, cx, cx + 29].map(px => line(px, y + 116, px, y + 135, metal, 4)).join("") + shaft(cx, y + 72, 22);
    if (showLabels) svg += label(cx, y + 148, "ROTARY ENCODER", 6.2, ink);
  } else if (kind === "rotation") {
    svg += rect(cx - 39, y + 23, 78, 75, 2, "#b9beb7", "#e8eadc") + rect(cx - 39, y + 91, 78, 13, 1, "#24624b", "#829c88") +
      [cx - 24, cx, cx + 24].map(px => line(px, y + 105, px, y + 120, metal, 3)).join("") + shaft(cx, y + 62, 20) +
      smd(x + width - 18, y + 23, "#d8ca79") + keyesMount(cx, y + height - 58);
    if (showLabels) svg += label(cx, y + 13, "VR SENSOR", 6.4, ink);
  } else if (kind === "button") {
    svg += rect(cx - 43, y + 24, 86, 79, 2, "#1a1b18", "#8d8e78") +
      [cx - 34, cx + 34].flatMap(px => [y + 31, y + 95].map(py => circle(px, py, 4, metal, "#777e71"))).join("") +
      circle(cx, y + 65, 33, "#f2cf13", "#ffe846") + circle(cx, y + 62, 29, "#e9c70d", "#f5dc36") +
      keyesMount(cx, y + height - 58) + resistor(x + width - 29, y + 115);
    if (showLabels) svg += label(cx, y + 13, "PUSH BUTTON", 6.6, ink);
  } else if (kind === "collision") {
    svg += rect(cx - 48, y + 5, 96, 37, 2, "#1b1e1d", "#a4aaa0") +
      rect(cx - 48, y + 26, 96, 12, 1, "#e3e5dd", "#969d92") +
      [cx - 31, cx + 31].map(px => circle(px, y + 31, 5, "#31342f", metal)).join("") +
      [cx - 31, cx, cx + 31].map(px => line(px, y + 38, px, y + 57, metal, 4)).join("") +
      path(`M${cx - 38} ${y + 3}L${cx + 71} ${y - 38}l5 -8 8 3`, "none", "#dce0d8", 4) +
      resistor(cx - 16, y + 76) + resistor(cx - 16, y + 94) + indicator(cx + 30, y + 94) +
      keyesMount(cx, y + height - 58);
    if (showLabels) svg += label(cx, y + 65, "CRASH SENSOR", 6.5, ink);
  } else {
    if (kind === "reed") {
      svg += path(`M${cx - 35} ${y + 21}q-12 -14 -17 0v17M${cx + 35} ${y + 21}q12 -14 17 0v17`, "none", metal, 3) +
        rect(cx - 37, y + 14, 74, 14, 6, "#5e9d82", "#b3cab7") +
        line(cx - 31, y + 19, cx + 3, y + 19, "#c3cbbb", 1.7) + line(cx - 3, y + 23, cx + 31, y + 23, "#c3cbbb", 1.7);
    } else {
      svg += [y + 33, y + 53].map(py => circle(cx - 44, py, 4, metal) + line(cx - 44, py, cx - 28, py, metal, 2)).join("") +
        rect(cx - 29, y + 21, 68, 45, 4, "#151b19", "#49524c") +
        circle(cx + 37, y + 43.5, 21, "#292e29", "#555d56") + line(cx - 21, y + 26, cx + 28, y + 26, "#535b54", 2);
    }
    svg += resistor(cx - 24, y + 76) + resistor(cx + 7, y + 94) + indicator(cx - 34, y + 96) + keyesMount(cx, y + height - 58);
    if (showLabels) svg += label(cx, y + 72, kind === "reed" ? "REED SWITCH" : "TILT SWITCH", 6.5, ink);
  }
  return svg;
}

function keyes({ sku, id, name, shortName, kind, description, tags, contacts, category = "Switches" }) {
  const joystick = kind === "joystick", collision = kind === "collision";
  const width = collision ? 196 : joystick ? 168 : 144;
  const height = collision ? 280 : joystick ? 266 : 232;
  const boardX = collision ? 16 : 12, boardY = collision ? 60 : 12;
  const boardW = joystick ? 144 : 120, boardH = joystick ? 214 : 180;
  const cx = boardX + boardW / 2, contactY = boardY + boardH + 18;
  const positions = contacts.map((_pin, index) => [cx + (index - (contacts.length - 1) / 2) * 15.24, contactY]);
  const component = physicalComponent({
    id, name, shortName, manufacturer: "Keyestudio", source: docs(sku), category,
    description: `${description} The drawing follows the manufacturer's black-PCB, yellow-header photographs; PCB revision is unmarked. Component-side view, header below the control, with contacts on the exposed male posts. Header numbers are assigned left to right for this catalog. Mechanical dimensions are representative. The KiCad footprint is a reference cable/header carrier.`,
    subtitle: `${sku} / ${kind === "encoder" ? "5 V" : "3.3–5 V"} / starter-kit control`,
    tags: [...commonTags, sku.toLowerCase(), ...tags], referencePrefix: "U", art: id, width, height,
    pins: contacts.map(([pinId, pinLabel, desc, type], index) => ({
      id: pinId, number: String(index + 1), label: pinLabel, description: desc, type, edge: "bottom", x: positions[index][0], y: positions[index][1],
    })),
  }, positions);
  const entry = {
    component,
    render: (part, showLabels) => keyesArt(kind, boardX, boardY, boardW, boardH, showLabels) + headers(part, showLabels),
    footprint: {
      body: [joystick ? 24 : 20, joystick ? 35.7 : 30], color: pcb, modelHeight: 1.6,
      note: "Reference 2.54 mm cable/header carrier. Header order follows the maker's component-side wiring view; board outline, connector offset and control clearance are approximate. This is not a production module land pattern. Generated 3D geometry is approximate.",
      groups: [{ ids: contacts.map(p => p[0]), x: -(contacts.length - 1) * 1.27, y: joystick ? 15 : 12, pitch: 2.54, axis: "x", drill: 1, size: 1.8 }],
      details: [[0, -5, joystick ? 19 : 13, joystick ? 19 : 13, kind === "reed" || kind === "tilt" ? 5 : 12, kind === "button" ? "#e9c70d" : "#454c47"]],
    },
  };
  const unitsPerMm = 6, insertionY = boardY + boardH - 2.54 * unitsPerMm;
  const viewPins = component.pins.map(pin => ({ pinId: pin.id, x: pin.x, y: insertionY, face: "front" }));
  const bodyRegions = [{ x: boardX, y: boardY, width: boardW, height: boardH },
    ...(collision ? [{ x: cx - 40, y: boardY - 48, width: 126, height: 53 }] : [])];
  const x = Math.min(...bodyRegions.map(region => region.x)), y = Math.min(...bodyRegions.map(region => region.y));
  const viewBounds = { x: x - .5, y: y - .5,
    width: Math.max(...bodyRegions.map(region => region.x + region.width)) - x + 1,
    height: Math.max(...bodyRegions.map(region => region.y + region.height)) - y + 1 };
  entry.mounting = reviewedBoardMounting({
    source: { label: `${sku} manufacturer header/population photographs`, url: docs(sku) },
    contacts: component.pins.map((pin, index) => ({ pinId: pin.id, x: (index - (component.pins.length - 1) / 2) * 2.54, y: boardH / unitsPerMm / 2 - 2.54 })),
    calibration: { origin: { x: cx, y: boardY + boardH / 2 }, unitsPerMm },
    bodyRegions, bodyEvidence: "SKU-specific manufacturer photograph and connector-side wiring order identify the complete standard 2.54 mm header. The straight-header assembly uses the existing representative PCB envelope; the collision switch lever is a separate projecting material region.",
    viewBounds,
    view: { id: "breadboard", pins: viewPins,
      note: "Explicit straight downward-header assembly replaces the old illustration of side-facing exposed male post ends. Every old pin ID is mapped onto the complete 2.54 mm insertion strip; the representative board envelope and header inset are not manufacturer production dimensions." },
    renderMounted: () => keyesArt(kind, boardX, boardY, boardW, boardH, false) + viewPins.map(pin =>
      circle(pin.x, pin.y, 4.8, gold, "#ffe776") + circle(pin.x, pin.y, 2.2, "#293630")).join(""),
    note: "Use the straight downward male-header population; the photographed side-facing/right-angle posts must be replaced before flat insertion. Seat every signal-header lead. The PCB/shaft envelope remains representative, and unused switch or sensor pads are not insertion contacts.",
  });
  return entry;
}

const entries = [
  keyes({
    sku: "KS0008", id: "keyestudio-ks0008-joystick", name: "Keyestudio KS0008 Thumb Joystick Module", shortName: "Thumb Joystick", kind: "joystick", category: "Inputs",
    description: "Two-axis analog thumb joystick with a separate push-down key. X and Y are potentiometer wipers spanning the supply rails; B is the digital key contact. Read the axes with ADC inputs and debounce the key.",
    tags: ["joystick", "thumbstick", "analog", "xy", "gamepad"],
    contacts: [ground, supply,
      ["button", "B", "Push-down joystick key signal, active low when pressed. Provide an appropriate pull-up if required by the board variant; debounce in software.", "passive"],
      ["x", "X", "X-axis potentiometer wiper output, approximately 0 V to the module supply. Connect to a compatible ADC input.", "output"],
      ["y", "Y", "Y-axis potentiometer wiper output, approximately 0 V to the module supply. Connect to a compatible ADC input.", "output"],
    ],
  }),
  keyes({
    sku: "KS0013", id: "keyestudio-ks0013-encoder", name: "Keyestudio KS0013 Rotary Encoder Module", shortName: "Rotary Encoder Module", kind: "encoder", category: "Inputs",
    description: "Direct quadrature encoder module with a push switch. CLK and DT are contact pulse signals, not an I²C interface. This board is distinct from the bare encoder and the MCU-based QT encoder; read the phases with digital inputs and debounce them.",
    tags: ["rotary encoder", "encoder", "quadrature", "knob", "switch", "incremental"],
    contacts: [ground, ["vcc", "+", "5 V supply input specified by the manufacturer. Pull-ups and host input levels must be voltage compatible.", "power_in"],
      ["sw", "SW", "Momentary push-switch contact signal. Low when pressed; use a pull-up and debounce as needed.", "passive"],
      ["dt", "DT", "Quadrature data contact output, called DAT in the maker's example code. Compare its phase with CLK to determine rotation direction; pull up and debounce as needed.", "passive"],
      ["clk", "CLK", "Quadrature clock contact output. Count edges and compare with DT for direction; pull up and debounce as needed.", "passive"],
    ],
  }),
  keyes({
    sku: "KS0014", id: "keyestudio-ks0014-rotation", name: "Keyestudio KS0014 Rotary Potentiometer Module", shortName: "Rotary Potentiometer", kind: "rotation", category: "Inputs",
    description: "Analog rotation sensor with a manually adjustable potentiometer. The S terminal is the wiper voltage, from ground to the supplied voltage; read it using a voltage-compatible ADC input.",
    tags: ["potentiometer", "rotation", "analog", "knob", "variable resistor"],
    contacts: [ground, supply, ["signal", "S", "Potentiometer wiper voltage output, approximately 0 V to the module supply. This is an unbuffered analog output; avoid loading the wiper.", "output"]],
  }),
  keyes({
    sku: "KS0021", id: "keyestudio-ks0021-collision", name: "Keyestudio KS0021 Collision Switch Module", shortName: "Collision Switch", kind: "collision",
    description: "Lever microswitch module for bump, collision and travel-limit detection, with an indicator LED. The module signal is low while the lever is actuated and high when released. The conservative 3.3–5 V starter-kit supply range is shown because maker document editions disagree about a higher maximum.",
    tags: ["collision", "bump", "limit switch", "microswitch", "lever", "endstop"],
    contacts: [ground, supply, ["signal", "S", "Digital collision signal: low when the microswitch lever is actuated, high when released. Debounce in software.", "output"]],
  }),
  keyes({
    sku: "KS0025", id: "keyestudio-ks0025-tilt", name: "Keyestudio KS0025 Ball Tilt Switch Module", shortName: "Ball Tilt Switch", kind: "tilt",
    description: "Digital tilt module with a rolling-ball switch and indicator LED. It reports an orientation-dependent switch state rather than a measured angle. Mechanical chatter requires debouncing.",
    tags: ["tilt", "ball tilt", "orientation", "rolling ball", "switch"],
    contacts: [ground, supply, ["signal", "S", "Orientation-dependent digital switch signal. The ball makes or breaks the internal contact as the module tilts; debounce the state and establish the desired orientation during setup.", "output"]],
  }),
  keyes({
    sku: "KS0029", id: "keyestudio-ks0029-button", name: "Keyestudio KS0029 Push Button Module", shortName: "Push Button Module", kind: "button",
    description: "Momentary push-button module in the manufacturer's yellow-cap variant. The S output goes low while the button is pressed and returns high when released; read it with a digital input and debounce it.",
    tags: ["button", "push button", "momentary", "yellow", "switch"],
    contacts: [ground, supply, ["signal", "S", "Digital button signal: low while pressed and high when released. The contact is momentary, not latching; debounce in software.", "output"]],
  }),
  keyes({
    sku: "KS0038", id: "keyestudio-ks0038-reed", name: "Keyestudio KS0038 Reed Switch Module", shortName: "Reed Switch Module", kind: "reed",
    description: "Glass reed-switch board for detecting a nearby magnet, with an onboard indicator LED. The maker's demonstration shows the S output going low when a magnet closes the reeds. It can serve as a door, proximity or wheel-count input; debounce its mechanical contact.",
    tags: ["reed", "magnet", "magnetic", "door", "proximity", "switch"],
    contacts: [ground, supply, ["signal", "S", "Digital magnetic-switch signal. The maker's demonstration shows low with a nearby magnet closing the reed contact and high without the magnet. Debounce in software.", "output"]],
  }),
];

// The legacy blue-PCB Grove variant is documented by the maker's photograph and
// Eagle archive. Its hidden socket contacts are shown on an explicit mating face.
const groveContactData = [
  ["out", "OUT", "1", "Analog slider wiper output, from approximately 0 V to VCC. Connect to a voltage-compatible ADC input; the potentiometer is 10 kΩ.", "output"],
  ["led", "LED", "2", "Green indicator LED control input through the onboard 1 kΩ resistor to an LED returning to GND. Drive high or PWM to illuminate it; it is not an unused Grove contact.", "input"],
  ["vcc", "VCC", "3", "3.3–5 V supply input for starter-kit use. Sets the maximum analog OUT voltage; keep the ADC input voltage compatible.", "power_in"],
  ["gnd", "GND", "4", "Common supply, LED and analog signal ground.", "power_in"],
];
const grovePositions = groveContactData.map((_p, i) => [156 + i * 20, 219]);
const grove = physicalComponent({
  id: "seeed-grove-slide-101020036", name: "Seeed Grove Slide Potentiometer", shortName: "Grove Slide Potentiometer", manufacturer: "Seeed Studio", category: "Inputs", referencePrefix: "U", art: "seeed-grove-slide-101020036",
  source: "https://wiki.seeedstudio.com/Grove-Slide_Potentiometer/", width: 396, height: 272,
  description: "Grove SKU 101020036, legacy blue-PCB variant pictured in the maker's documentation; the PCB revision is unmarked. A 10 kΩ linear slide potentiometer provides 30 mm travel, with a separately driven green LED on Grove pin 2. The board is shown from the component side; an enlarged J1 mating-face inset exposes all four actual connector contacts, PCB below the face. The inset is not a second connector. Artwork proportions and the off-board KiCad cable carrier are reference geometry; generated 3D geometry is approximate.",
  subtitle: "10 kΩ / 30 mm travel / analog output + LED input",
  tags: [...commonTags, "101020036", "grove", "slide potentiometer", "linear potentiometer", "slider", "analog", "led"],
  pins: groveContactData.map(([id, text, number, desc, type], i) => ({ id, label: text, number, description: desc, type, x: grovePositions[i][0], y: grovePositions[i][1], edge: "bottom" })),
}, grovePositions);
entries.push({
  component: grove,
  render: (component, showLabels) => {
    let svg = rect(14, 20, 368, 122, 5, "#19496e", "#6a8fa1") +
      [82, 310].flatMap(x => [29, 133].map(y => mountingHole(x, y, 5))).join("") +
      rect(63, 47, 292, 67, 2, "#b6bfc1", "#e5e7df") +
      rect(79, 67, 258, 25, 3, "#1e2525", "#8b9188") +
      [79, 337].map(x => circle(x, 57, 3, "#273237")).join("") +
      rect(205, 57, 18, 45, 2, "#151c1e", "#5e6867") + line(209, 61, 209, 98, "#424e4e", 2) +
      rect(16, 48, 42, 62, 3, "#e5e3cf", "#a1a490") + rect(16, 58, 8, 42, 1, "#b8b8a3") +
      [53, 66, 79, 92].map(y => line(58, y, 63, y, metal, 2)).join("") +
      indicator(351, 119) + smd(63, 120, "#dbcfad") + smd(63, 32, "#dbcfad") +
      label(198, 158, "J1 mating face · PCB below", 9, "#6d6e68") +
      rect(132, 181, 108, 59, 3, "#e8e7d8", "#9b9d8e") +
      rect(140, 193, 92, 37, 2, "#777e72", "#c6c8ba") + rect(176, 178, 20, 12, 2, "#d8d8c4", "#9b9d8e") +
      rect(124, 240, 124, 7, 0.8, "#19496e", "#638c9b");
    if (showLabels) svg += label(205, 35, "GROVE · SLIDE POTENTIOMETER", 9, "#e8e9da") + label(205, 128, "10K · 30 mm", 8, "#dce4d8");
    svg += component.pins.map(pin => rect(pin.x - 3, pin.y - 15, 6, 20, 0.5, gold, "#f6e5a0") +
      label(pin.x, 204, pin.number, 6.5, "#f8f5d9") + (showLabels ? label(pin.x, 259, pin.label, 7.1, "#696c64") : "")).join("");
    return svg;
  },
  footprint: {
    body: [12, 8], color: "#19496e", modelHeight: 1.6,
    note: "Off-board Grove cable termination carrier, 2.00 mm pitch. Pad numbers and electrical functions are verified against the maker's Eagle J1 netlist and schematic. This reference carrier is not the module PCB, a socket production footprint or a verified host-board mating land pattern. Generated 3D geometry is approximate.",
    groups: [{ ids: groveContactData.map(p => p[0]), x: -3, y: 0, pitch: 2, axis: "x", drill: 0.8, size: 1.4 }],
    details: [[0, 0, 10, 5, 5, "#e5e3cf"]],
  },
  model: { label: "Seeed Grove slide potentiometer Eagle PCB and schematic", url: "https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar" },
});

export default defineFamily("diy-kit-inputs", entries);
