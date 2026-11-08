import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect } from "../shared/svg.js";
import { readyBoard, readyRow, readySocket } from "../shared/wire-board.js";

const wiki = page => `https://wiki.seeedstudio.com/${page}/`;
const blue = "#23517b";
const hole = (x, y) => circle(x, y, 9, "#8d9d7f", "#b5c6a9") + circle(x, y, 5.8, "#edf2e8");
const grove = (x, y) => readySocket(x, y, 44, 82, "", true);
const pcb = (x, y, w, h) => rect(x, y, w, h, 6, blue, "#819d9d") +
  hole(x + w * .15, y + 7) + hole(x + w * .15, y + h - 7) + hole(x + w - 7, y + h / 2);

function make(spec) {
  const functions = { GND: "Common ground.", VCC: "5 V module supply input.", NC: "No electrical connection in this board revision. Leave open.", ...spec.functions };
  const result = readyBoard({ manufacturer: "Seeed Studio", ...spec,
    types: { VCC: "power_in", NC: "no_connect", ...spec.types },
    functions: {}, contacts: spec.contacts.map(p => ({ ...p, note: functions[p.signal] })),
  });
  // Preserve the source's + / - pad numbers while keeping distinct canvas IDs.
  result.component.pins.forEach((pin, index) => {
    pin.id = pin.number.toLowerCase().replace(/\+/g, "_positive_").replace(/-/g, "_negative_").replace(/[^a-z0-9]+/g, "-");
    result.footprint.pads[index].id = pin.id;
  });
  result.component.references = spec.references;
  const nets = new Map();
  for (const pin of result.component.pins) {
    if (pin.type === "no_connect") continue;
    if (!nets.has(pin.label)) nets.set(pin.label, []);
    nets.get(pin.label).push(pin.id);
  }
  result.component.internalConnections = [...nets.values()].filter(ids => ids.length > 1);
  return { component: result.component, render: result.art, footprint: result.footprint, model: result.model };
}

const hchoSource = wiki("Grove-HCHO_Sensor");
const hchoCad = "https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove-HCHO_Sensor_Eagle_File.zip";
const hcho = make({
  id: "seeed-grove-hcho-101020001", name: "Seeed Grove HCHO Sensor 101020001", short: "Grove HCHO",
  width: 430, height: 380, category: "Sensors", subtitle: "101020001 / V1.0 / WSP2110 / analog",
  source: hchoSource, references: [hchoSource, "https://files.seeedstudio.com/wiki/Grove-HCHO_Sensor/res/Grove%20-%20HCHO%20Sensor.pdf"], cad: hchoCad,
  description: "Grove HCHO Sensor 101020001, blue V1.0 board with WSP2110 gas can and adjustment trimmer, matched to the manufacturer photograph and EAGLE file. All four J1 contacts are shown on the top-entry Grove socket, in the visible left-to-right order GND, VCC, NC, SIG (physical pins 4, 3, 2, 1). Supply is 5.0 V ±0.3 V. The sensor responds to HCHO and other volatile gases; follow the manufacturer's calibration procedure rather than treating the raw ADC value as a gas-specific concentration. Board envelope, small parts and the off-board reference carrier are representative.",
  tags: ["seeed", "grove", "101020001", "wsp2110", "hcho", "formaldehyde", "gas", "analog", "diy", "starter kit", "arduino"],
  types: { SIG: "output" }, functions: { SIG: "Analog WSP2110 sensor signal. Read with an ADC suitable for the module supply and follow Seeed's baseline/calibration procedure.", VCC: "5.0 V ±0.3 V board supply input; includes the sensor heater load." },
  contacts: readyRow("J1", "GND VCC NC SIG", 180, 98, 20, 0, { side: "bottom", numbers: [4, 3, 2, 1] }),
  boardBounds: [[90, 45, 250, 250]],
  draw: () => pcb(90, 45, 250, 250) + readySocket(158, 73, 106, 53, "") +
    circle(164, 214, 54, "#a9b49c", "#e2e0ba") + circle(164, 214, 41, "#6a765d", "#c8d1b3") +
    Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => {
      const x = (c - 4) * 7, y = (r - 4) * 7;
      return x * x + y * y < 35 * 35 ? circle(164 + x, 214 + y, .9, "#c7cfac") : "";
    }).join("")).join("") +
    rect(246, 187, 70, 77, 3, "#2455b0", "#91aad2") + circle(281, 222, 15, "#afbdb4", "#e3e3bd") +
    line(269, 222, 293, 222, "#3b5148", 4) + line(281, 210, 281, 234, "#3b5148", 4) +
    rect(197, 154, 30, 8, 1, "#a4aa80", "#d5d9c5") + label(215, 320, "COMPONENT SIDE / GROVE SOCKET", 7, "#405655"),
});

const magnetSource = wiki("Grove-Electromagnet");
const magnetCad = "https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip";
const magnetRear = [
  { ref: "TP1", number: "TP1.T", signal: "GND", x: 425.735, y: 367.85, side: "left", caption: "TP1 GND" },
  { ref: "TP2", number: "TP2.T", signal: "VCC", x: 425.735, y: 390.71, side: "left", caption: "TP2 VCC" },
  { ref: "TP3", number: "TP3.T", signal: "NC", x: 425.735, y: 459.29, side: "left", caption: "TP3 NC" },
  { ref: "TP4", number: "TP4.T", signal: "SIG", x: 425.735, y: 482.15, side: "left", caption: "TP4 SIG" },
  { ref: "TP5", number: "TP5.T", signal: "COIL-", x: 94.265, y: 367.85, side: "right", caption: "TP5 SW" },
  ...[6, 7, 8].map((n, i) => ({ ref: `TP${n}`, number: `TP${n}.T`, signal: "NC", x: 94.265, y: [390.71, 459.29, 482.15][i], side: "right", caption: `TP${n} NC` })),
].map(p => ({ ...p, solid: true }));
const magnet = make({
  id: "seeed-grove-electromagnet-101020073", name: "Seeed Grove Electromagnet 101020073", short: "Grove Electromagnet",
  width: 520, height: 560, category: "Actuators", subtitle: "101020073 / V1.0 / 5 V / switched coil",
  source: magnetSource, references: [magnetSource, "https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg"], cad: magnetCad,
  description: "Grove Electromagnet 101020073 V1.0 driver and fitted holding magnet. Component-side view exposes J1 in top-to-bottom order GND, VCC, NC, SIG (pins 4–1), plus the two coil solder terminals J2.2=VCC and J2.1=switched return. Eight documented underside test lands are presented in a separate mirrored view, including four unconnected lands. Test-pad centers follow the EAGLE board. SIG high energizes the coil. Seeed specifies 5 V and approximately 400 mA working current; the holding force depends on the actual target and contact. Front artwork and the off-board termination carrier are representative.",
  tags: ["seeed", "grove", "101020073", "electromagnet", "magnet", "coil", "actuator", "diy", "starter kit", "arduino"],
  types: { SIG: "input", "COIL-": "open_collector" },
  functions: { SIG: "Digital enable input. High switches the fitted magnet on; low switches it off.", VCC: "5 V supply rail; allow approximately 400 mA for the energized magnet. J2.2 and TP2 are tied to this rail.", "COIL-": "Low-side switched coil-return output, shared by J2.1 and TP5. This is not a permanent ground connection." },
  contacts: [
    ...readyRow("J1", "GND VCC NC SIG", 144, 95, 0, 20, { side: "right", numbers: [4, 3, 2, 1] }),
    ...readyRow("J2", "VCC COIL-", 184, 69, 24, 0, { side: "top", numbers: [2, 1], captions: ["COIL+", "COIL−"] }),
    ...magnetRear,
  ],
  boardBounds: [[80, 35, 360, 180], [80, 335, 360, 180]],
  draw: () => pcb(80, 35, 360, 180) + grove(89, 75) +
    path("M184 69Q187 27 241 64M208 69Q202 32 259 61", "none", "#274b99", 5) +
    circle(318, 115, 81, "#a7af9d", "#e5e3ce") + circle(318, 115, 68, "#303a35", "#7d897c") + circle(318, 115, 27, "#b9c2af", "#e1e5ca") +
    chip(162, 121, 18, 25, "Q1", 5) + rect(173, 94, 22, 7, 1, "#8f644b", "#ccb7a0") +
    rect(80, 335, 360, 180, 6, blue, "#819d9d") + label(260, 320, "UNDERSIDE / MIRRORED TEST LANDS", 8, "#405655") +
    label(260, 536, "GROVE ELECTROMAGNET V1.0", 9, "#405655"),
});

const atomizerSource = wiki("Grove-Water_Atomization");
const atomizerCad = "https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip";
const atomizerBack = [
  ["GND", "GND", 425.7575, 367.85], ["VCC", "VCC_SW", 425.7575, 390.71],
  ["PWM", "PWM", 425.7575, 459.29], ["EN", "EN", 425.7575, 482.15],
  ["OUT+", "HV", 94.2875, 367.85], ["NC2", "NC", 94.2875, 390.71],
  ["NC1", "NC", 94.2875, 459.29], ["OUT-", "GND", 94.2875, 482.15],
].map(([ref, signal, x, y]) => ({ ref, signal, number: `${ref}.T`, x, y, side: x < 260 ? "right" : "left", caption: ref, solid: true }));
const atomizer = make({
  id: "seeed-grove-water-atomization-101020090", name: "Seeed Grove Water Atomization 101020090", short: "Grove Atomizer",
  width: 520, height: 560, category: "Actuators", subtitle: "101020090 / V1.0 / ETA1617 + NE555 / 5 V",
  source: atomizerSource, references: [atomizerSource, "https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip"], cad: atomizerCad,
  description: "Grove Water Atomization 101020090 V1.0 driver. All four Grove contacts, both transducer contacts and eight underside test lands are represented; the lower view is mirrored. J1 top-to-bottom is GND, VCC, NC, EN (pins 4–1). J2 minus is ground and J2 plus is the high-voltage transducer drive. The board uses a 5 V supply, up to 2 W, and approximately 105 kHz drive with a specified peak output around 65 V; those output/service contacts are not GPIOs. Internal VCC and PWM test points are distinct from the external supply/enable. Dimensions, front bodies and the off-board termination carrier are representative.",
  tags: ["seeed", "grove", "101020090", "atomizer", "atomization", "humidifier", "ultrasonic", "eta1617", "ne555", "diy", "starter kit", "arduino"],
  types: { EN: "input", HV: "output", VCC_SW: "power_out", PWM: "output" },
  functions: { VCC: "External 5 V input, source net VCC_5V. Budget up to 2 W for the driver and transducer.", EN: "Digital enable input. High enables the atomization driver; do not confuse this with the internal PWM service node.", HV: "Transducer drive output, approximately 65 V peak at approximately 105 kHz in the manufacturer specification. Connect only the matching transducer; not a logic output.", VCC_SW: "Internal switched VCC service point after Q1. It is not the external VCC_5V input and must not be independently powered.", PWM: "NE555 pin-3 output test point, source net PWM. Internal driver timing signal; do not drive it as an enable input." },
  contacts: [
    ...readyRow("J1", "GND VCC NC EN", 111.3875, 98, 0, 18, { side: "right", numbers: [4, 3, 2, 1] }),
    ...readyRow("J2", "GND HV", 401.8175, 116, 0, 18, { side: "left", numbers: ["-", "+"], captions: ["OUT−", "OUT+"] }),
    ...atomizerBack,
  ],
  boardBounds: [[80, 35, 360, 180], [80, 335, 360, 180]],
  draw: () => pcb(80, 35, 360, 180) + grove(61, 79) + readySocket(410, 100, 29, 56, "", true) +
    circle(177, 80, 23, "#3b4442", "#81958b") + label(177, 80, "470", 10, "#adbcb0") +
    circle(230, 172, 25, "#3b4442", "#81958b") + label(230, 172, "333", 10, "#adbcb0") +
    rect(168, 146, 31, 45, 2, "#c2a66e", "#e7d5a5") + chip(306, 76, 51, 34, "NE555", 7) +
    chip(234, 86, 31, 32, "ETA", 6) + [263, 286, 309].map(x => rect(x, 149, 12, 8, .7, "#b6aa7b", "#d3d9bd")).join("") +
    label(323, 184, "TRANSDUCER DRIVE", 7) +
    rect(80, 335, 360, 180, 6, blue, "#819d9d") + label(260, 320, "UNDERSIDE / MIRRORED TEST LANDS", 8, "#405655") +
    label(260, 536, "GROVE WATER ATOMIZATION V1.0", 9, "#405655"),
});

export default defineFamily("seeed-more", [hcho, magnet, atomizer]);
