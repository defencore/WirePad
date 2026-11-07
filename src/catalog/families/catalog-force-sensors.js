import { defineFamily } from "../registry.js";
import {
  chip, circle, edgePads, label, line, mountingHole, pad, path, pinRow, rect, screw, smd,
} from "../shared/svg.js";

const hxBridge = [
  ["exc-plus", "RED", "Regulated positive excitation for the load cell bridge (E+).", "power_out", "JP4.5"],
  ["exc-minus", "BLK", "Ground return for the load cell bridge (E−).", "passive", "JP4.4"],
  ["a-minus", "WHT", "Negative differential input for channel A (A−).", "input", "JP4.3"],
  ["a-plus", "GRN", "Positive differential input for channel A (A+).", "input", "JP4.2"],
  ["shield", "YLW", "Optional cable shield connection tied to ground.", "passive", "JP4.1"],
];
const hxHost = [
  ["vdd", "VDD", "Digital supply input. Match this voltage to the host logic level.", "power_in", "J1.1"],
  ["vcc", "VCC", "Analog supply input for the amplifier and bridge excitation regulator.", "power_in", "J1.2"],
  ["data", "DAT", "Serial data output and active-low data ready signal.", "output", "J1.3"],
  ["clock", "CLK", "Serial clock and power-down input (PD_SCK).", "input", "J1.4"],
  ["gnd", "GND", "Common supply and signal ground.", "power_in", "J1.5"],
];
const hxChannelB = [
  ["b-plus", "B+", "Positive differential input for channel B. Identified on the rear silkscreen.", "input", "JP2.1"],
  ["b-minus", "B−", "Negative differential input for channel B. Identified on the rear silkscreen.", "input", "JP2.2"],
];
const hxRed = "#b71e27";

function hx711Art(component, showLabels) {
  const { pins, width } = component;
  const contacts = pins.slice(0, 10).map(pin => {
    const left = pin.x === 0;
    const x = left ? 20 : width - 20;
    return (showLabels ? line(pin.x, pin.y, x, pin.y, "#bd9460", 1.4) : "") +
      pad(x, pin.y) + label(left ? x + 8 : x - 8, pin.y, pin.label, 7.5, "#fff1e5", left ? "start" : "end");
  }).join("");
  const amplifier = chip(-24, -13, 48, 26, "HX711", 8);
  const auxiliary = showLabels
    ? rect(117, 122, 48, 25, 3, "#39414c", "#687380") +
      edgePads({ ...component, pins: pins.slice(10) }, true)
    : "";
  return rect(14, 9, 152, 114, 1, "#742028") +
    rect(14, 7, 152, 114, 1, hxRed, "#e25253") +
    [27, 153].flatMap(x => [20, 108].map(y => mountingHole(x, y))).join("") +
    `<g transform="translate(90 64) rotate(-90)">${amplifier}</g>` +
    rect(68, 14, 13, 11, 1, "#cbc0a1", "#f7e3d0") +
    rect(119, 14, 13, 11, 1, "#cbc0a1", "#f7e3d0") +
    chip(51, 31, 11, 13, "", 2) +
    [45, 54, 64, 74, 83, 94].map((y, index) => smd(54, y, index === 0 ? "#453c3e" : "#b29b76")).join("") +
    smd(47, 18) + smd(98, 18) + smd(120, 40) + smd(120, 50, "#453c3e") + smd(85, 97) +
    circle(39, 26, 1.8, "#e4b181") + circle(141, 101, 1.8, "#e4b181") +
    pad(122, 77) + pad(122, 90) + label(90, 111, "Load Cell Amp", 10.5, "#fff1e5") +
    contacts + auxiliary;
}

const hx711 = {
  component: {
    id: "sparkfun-hx711-13879", art: "sparkfun-hx711-13879", name: "SparkFun HX711 Load Cell Amplifier",
    shortName: "HX711", category: "Sensors", manufacturer: "SparkFun", referencePrefix: "U",
    source: "https://www.sparkfun.com/sparkfun-load-cell-amplifier-hx711.html",
    description: "SEN-13879 v11 breakout with a 24-bit bridge ADC, separate analog and logic supplies, and a two-wire clock/data interface. The rear RATE jumper selects 10 or 80 samples per second.",
    subtitle: "24-bit ADC / 2.7–5 V",
    tags: ["hx711", "13879", "weight", "weighing", "scale", "load cell", "strain gauge", "bridge adc"],
    width: 180, height: 151,
    pins: [
      ...pinRow("left", 180, 151, 39, 13, hxBridge),
      ...pinRow("right", 180, 151, 39, 13, hxHost),
      ...pinRow("bottom", 180, 151, 129, 24, hxChannelB),
    ],
  },
  art: hx711Art,
  footprint: {
    body: [30.48, 22.86], color: hxRed, drill: 1.016, size: 1.8796, shape: "circle",
    note: "Reference host-board carrier with the J1, JP4 and JP2 hole centers from the SparkFun v11 Eagle board file. J1 numbering follows the board file and photographed silkscreen. Add separate 3.302 mm mounting holes at (±12.7, ±8.89) mm if needed.",
    groups: [
      { ids: hxBridge.map(([id]) => id), axis: "y", x: -13.97, y: -5.08 },
      { ids: hxHost.map(([id]) => id), axis: "y", x: 13.97, y: -5.08 },
      { ids: hxChannelB.map(([id]) => id), axis: "y", x: 6.35, y: 2.54 },
    ],
    details: [[0, 0, 5.6, 10.3, 2.4, "#292a30"]],
  },
  model: {
    label: "SparkFun v11 Eagle CAD",
    url: "https://github.com/sparkfun/HX711-Load-Cell-Amplifier/tree/master/hardware",
  },
};

const talLeads = [
  ["exc-plus", "RED", "Red wire. Positive bridge excitation (E+). Apply 3–10 V across E+ and E−.", "power_in"],
  ["exc-minus", "BLK", "Black wire. Negative bridge excitation (E−).", "power_in"],
  ["sig-minus", "WHT", "White wire. Negative differential bridge signal (S−).", "output"],
  ["sig-plus", "GRN", "Green wire. Positive differential bridge signal (S+).", "output"],
];

function loadCellArt(component, showLabels) {
  const leadColors = ["#cb4a43", "#25272d", "#f0f0e8", "#369b70"];
  const wires = component.pins.map((pin, index) => {
    const startY = 47 + index * 3.1;
    const d = `M161 ${startY}H171Q183 ${startY} 190 ${pin.y}H${pin.x}`;
    return path(d, "none", "#717a82", 3.8) + path(d, "none", leadColors[index], 2.4) +
      (showLabels ? label(pin.x - 6, pin.y - 6, pin.label, 7.8, "#667888", "end") : "");
  }).join("");
  return wires +
    path("M8 38 22 24H160L146 38Z", "#c6cbca", "#79848a") +
    path("M146 38 160 24V52L146 66Z", "#9da8ac", "#79848a") +
    rect(8, 38, 138, 28, 1, "#b3bfc3", "#79848a") +
    path("M65 24H104L91 38H51Z", "#e3e7e3") +
    path("M51 38H91V66H51Z", "#d6d9d6") +
    path("M65 49Q67 40 76 40H83Q91 40 91 51T82 63H74Q65 62 65 49Z", "#829097", "#e7eae5") +
    path("M70 57 83 41M76 61l12-16", "none", "#b6c1c1", 1.2) +
    [34, 134].map(x => `<g transform="translate(${x} 31) scale(1 .6)">${mountingHole(0, 0)}</g>`).join("") +
    rect(151, 43, 13, 14, 3, "#e1e3de", "#aeb6b6") +
    label(26, 50, "5kg", 9, "#57666c") + label(118, 53, "TAL220B", 7.8, "#57666c");
}

const loadCell = {
  component: {
    id: "sparkfun-tal220b-14729", art: "sparkfun-tal220b-14729", name: "TAL220B 5 kg Load Cell",
    shortName: "TAL220B 5 kg", category: "Sensors", manufacturer: "HTC Sensor", referencePrefix: "U",
    source: "https://www.sparkfun.com/load-cell-5kg-straight-bar-tal220b.html",
    description: "SparkFun SEN-14729 miniature parallel-beam load cell with a four-wire Wheatstone bridge. The aluminum bar measures 55 × 12.7 × 12.7 mm and has two M5 mounting holes.",
    subtitle: "5 kg / 4-wire bridge",
    tags: ["tal220b", "14729", "weight", "weighing", "scale", "load cell", "force", "strain gauge"],
    width: 224, height: 89,
    pins: pinRow("right", 224, 89, 22, 15, talLeads),
  },
  art: loadCellArt,
  footprint: {
    body: [11, 5], color: "#33444f",
    note: "Reference 2.54 mm host-board wire termination. Pad numbers are assigned in RED, BLK, WHT, GRN order. The load cell is mounted off-board and uses separate M5 hardware.",
    groups: [{ ids: talLeads.map(([id]) => id), y: 0, drill: 0.9 }],
  },
};

const groveContacts = [
  ["gnd", "GND", "Supply and logic ground. The Grove cable uses the black wire.", "power_in", "4"],
  ["vcc", "VCC", "3.3 V or 5 V module supply. The Grove cable uses the red wire.", "power_in", "3"],
  ["nc", "NC", "Unconnected Grove socket contact. The Grove cable uses the white wire.", "no_connect", "2"],
  ["signal", "SIG", "Active-low digital output with an onboard pull-up. The Grove cable uses the yellow wire.", "open_collector", "1"],
];

function sw420Art({ pins }, showLabels) {
  const contacts = pins.map((pin, index) => {
    const y = 43 + 8 * index;
    return line(57, y, 68, y, "#b8b6a9", 2) +
      label(70, y, pin.label, 6.4, "#edf2ee", "start") +
      (showLabels ? path(`M0 ${pin.y}H13L27 ${y}H40`, "none", "#ad8b56", 1.35) : "");
  }).join("");
  return path("M31 16H63Q70 3 77 16H130Q139 33 149 16H181Q185 16 185 20V48Q198 55 185 63V94Q185 98 181 98H149Q139 81 130 98H77Q70 111 63 98H31Q27 98 27 94V20Q27 16 31 16Z", "#14517a", "#4987a2", 1.2) +
    mountingHole(70, 13) + mountingHole(70, 100) + mountingHole(186, 55) +
    rect(28, 31, 33, 51, 2, "#e5e2d3", "#f6eee0") +
    path("M28 39H35V73H28Z", "#b7b4a7") +
    rect(41, 39, 17, 32, 1, "#cccbbd") + contacts +
    rect(105, 46, 20, 22, 2, "#c5a73b", "#e9d672") +
    screw(115, 57, 7) + chip(134, 46, 16, 22, "", 4) +
    rect(104, 22, 12, 6, 1, "#ded9bf", "#878780") + label(126, 25, "LED", 7) +
    [41, 48, 62, 69].map(y => smd(87, y, "#545860")).join("") +
    smd(101, 37) + smd(116, 37) +
    line(168, 30, 168, 83, "#a8b5bc", 3.5) +
    rect(158, 34, 21, 45, 3, "#6dbcdc", "#a7dbed") +
    line(162, 39, 162, 73, "#a6deef", 2.2) + line(176, 40, 176, 73, "#488aa9", 1.8) +
    label(121, 89, "SW-420", 7.4);
}

const vibration = {
  component: {
    id: "seeed-sw420-101020586", art: "seeed-sw420-101020586", name: "Seeed Grove SW-420 Vibration Sensor",
    shortName: "SW-420", category: "Sensors", manufacturer: "Seeed Studio", referencePrefix: "U",
    source: "https://wiki.seeedstudio.com/Grove-Vibration_Sensor_SW-420/",
    description: "Grove SKU 101020586 v1.1 with an SW-420 switch, comparator, indicator LED and sensitivity trimmer. Vibration or tilt produces a brief low on the digital output.",
    subtitle: "3.3 or 5 V / digital vibration",
    tags: ["sw420", "sw-420", "101020586", "vibration", "shock", "tilt", "grove", "motion"],
    width: 198, height: 113,
    pins: pinRow("left", 198, 113, 33, 15, groveContacts),
  },
  art: sw420Art,
  footprint: {
    body: [9.2, 12.2], modelHeight: 5, color: "#e5e2d3", smd: true, shape: "rect",
    note: "Reference host-board Grove right-angle socket based on the Seeed v1.1 Eagle land pattern. Its two retention lands share ground (pin 4). The sensor PCB is cable connected and mounts separately.",
    groups: [{ ids: groveContacts.map(([id]) => id), axis: "y", x: 4.7, y: -3, pitch: 2, size: [2.74, 1.01] }],
    pads: [-5.4, 5.4].map(y => ({ id: "gnd", x: -2.8, y, size: [3, 1.5] })),
  },
  model: {
    label: "Seeed Grove SW-420 v1.1 Eagle CAD",
    url: "https://files.seeedstudio.com/wiki/Grove-Vibration_Sensor-SW-420/res/Grove%20-%20Vibration%20Sensor%20%28SW-420%29%20v1.1.zip",
  },
};

const fsrContacts = [
  ["1", "1", "Unpolarized printed contact. Connect to one side of the resistive sensing circuit.", "passive"],
  ["2", "2", "Unpolarized printed contact. Connect to the other side of the resistive sensing circuit.", "passive"],
];

function fsrArt({ pins }, showLabels) {
  const traces = Array.from({ length: 15 }, (_, index) => {
    const x = 24 + 2.45 * index;
    const halfChord = Math.sqrt(19.5 ** 2 - (x - 41) ** 2);
    return line(x, 33 - halfChord + (index % 2 ? 4 : 0), x, 33 + halfChord - (index % 2 ? 0 : 4), "#82616f", 0.9);
  }).join("");
  return rect(29.5, 49, 23, 122, 1, "#80a595", "#637c76") +
    circle(41, 33, 27.4, "#2b292f", "#50454a") +
    circle(41, 33, 22, "#343039", "#8a6475") + traces +
    [36, 46].map(x => rect(x - 2, 61, 4, 108, 0.3, "#b08a79") +
      rect(x - 2, 157, 4, 12, 0.3, "#c9af94")).join("") +
    `<g transform="rotate(90 41 108)">${label(41, 108, "FSR 402", 6.5, "#2a443d")}</g>` +
    (showLabels ? pins.map((pin, index) => {
      const x = 36 + 10 * index;
      return path(`M${x} 170v4l${pin.x - x} 8v4`, "none", "#ad8b56", 1.4) +
        label(pin.x + (index === 0 ? -6 : 6), 173, pin.label, 8, "#667888");
    }).join("") : "");
}

const fsr = {
  component: {
    id: "interlink-fsr402-44-29103", art: "interlink-fsr402-44-29103", name: "Interlink FSR 402 Force-Sensing Resistor",
    shortName: "FSR 402", category: "Sensors", manufacturer: "Interlink Electronics", referencePrefix: "R",
    source: "https://www.interlinkelectronics.com/downloads/datasheets/fsr-400-series-datasheet.pdf",
    description: "Interlink 44-29103 long-tail sensor with bare printed contacts and a 14.68 mm active diameter. Its resistance decreases as the force on the sensing area rises.",
    subtitle: "0.2–20 N / variable resistance",
    tags: ["fsr402", "fsr 402", "44-29103", "force", "pressure", "force-sensitive resistor", "piezoresistive", "touch"],
    width: 82, height: 186,
    pins: pinRow("bottom", 82, 186, 28, 26, fsrContacts),
  },
  art: fsrArt,
  footprint: {
    body: [7, 5], color: "#637e72",
    note: "Reference 2.54 mm host-board wire termination. Use a contact system for the flexible printed tail and mount the sensor off-board. The bare FSR tail has no solder tabs.",
    groups: [{ ids: fsrContacts.map(([id]) => id), y: 0 }],
  },
  model: {
    label: "Interlink FSR 402 STEP and IGES",
    url: "https://www.interlinkelectronics.com/downloads/cad-models/fsr-402-cad.zip",
  },
};

const entries = [hx711, loadCell, vibration, fsr];

const forceSensorComponents = entries.map(({ component }) => component);
const forceSensorArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const forceSensorFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const forceSensorModels = Object.fromEntries(entries
  .filter(entry => entry.model)
  .map(({ component, model }) => [component.id, model]));

export default defineFamily("force-sensors", (forceSensorComponents).map(component => ({ component, render: (forceSensorArt)[component.art], footprint: (forceSensorFootprints)[component.id], model: forceSensorModels[component.id] })));
