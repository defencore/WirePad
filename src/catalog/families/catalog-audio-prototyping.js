import { defineFamily } from "../registry.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, edgePads, label, line, mountingHole, pad, path, pinRow, rect, screw, smd } from "../shared/svg.js";

const blue = "#14649b";
const black = "#292b30";
const silk = "#eef0e7";
const pcbCad = (repository, file) => ({
  label: "Adafruit Eagle board CAD",
  url: `https://github.com/adafruit/${repository}/blob/master/${encodeURIComponent(file)}`,
});

function pcb(x, y, width, height, color = blue) {
  return rect(x, y + 2, width, height, 9, "#8c7950") +
    rect(x, y, width, height, 9, color, "#78a0b3");
}

function qtSocket(x, y, angle) {
  return `<g transform="translate(${x} ${y}) rotate(${angle})">` +
    rect(-11, -15, 22, 30, 1, "#b3b5af", "#e3e4d9") +
    rect(-9, -13, 17, 26, 1, "#c7c8bf") +
    rect(-11, -10, 4, 20, 0.5, "#686d68") +
    [-9, -3, 3, 9].map(y => line(10, y, 16, y, "#b5b8b4", 2)).join("") + "</g>";
}

const max9814Contacts = [
  ["gnd", "GND", "Common supply and analog ground.", "power_in", "J2.1"],
  ["vdd", "V+", "2.7–5.5 V supply input through the onboard ferrite filter.", "power_in", "J2.2"],
  ["gain", "G", "Maximum gain select. Floating selects 60 dB, GND selects 50 dB, and V+ selects 40 dB.", "input", "J2.3"],
  ["out", "Out", "Amplified analog microphone output with approximately 1.25 V DC bias and up to 2 V peak-to-peak swing.", "output", "J2.4"],
  ["ar", "AR", "Attack/release ratio select. Floating selects 1:4000, V+ selects 1:2000, and GND selects 1:500.", "input", "J2.5"],
];

const max9814 = {
  component: {
    id: "adafruit-max9814-1713", art: "adafruit-max9814-1713", name: "Adafruit MAX9814 AGC Microphone Amplifier",
    shortName: "MAX9814 Mic", manufacturer: "Adafruit", category: "Sensors", referencePrefix: "U",
    source: "https://learn.adafruit.com/adafruit-agc-electret-microphone-amplifier-max9814/wiring-and-test",
    description: "Adafruit #1713 blue MAX9814 breakout with automatic gain control and a five-pin header. The illustration shows the electronics side. Its electret microphone capsule is on the reverse.",
    subtitle: "#1713 / analog microphone / AGC",
    tags: ["max9814", "1713", "microphone", "audio", "sound", "analog", "agc", "automatic gain"],
    width: 180, height: 108,
    pins: pinRow("left", 180, 108, 22, 16, max9814Contacts),
  },
  art: (component, showLabels) => pcb(7, 7, 166, 92) +
    mountingHole(160, 21) + mountingHole(160, 85) +
    label(98, 16, "AGC Mic Amp", 9.5) + label(103, 87, "MAX9814", 10.5) +
    path("M15 70H46L57 62H73M15 54h24l11-13h20M15 38h21l11-8h18", "none", "#287da9", 1.8) +
    chip(73, 47, 21, 21, "AGC", 4) +
    [40, 61, 83].map(x => `<g transform="translate(${x} 34) rotate(90)">${smd(0, 0)}</g>`).join("") +
    [40, 61].map(x => `<g transform="translate(${x} 60) rotate(90)">${smd(0, 0, x === 40 ? "#34363e" : "#c0a878")}</g>`).join("") +
    smd(94, 33, "#37383d") + smd(109, 49, "#37383d") + smd(106, 69) + smd(87, 75) +
    circle(133, 48, 6.4, "#bac4c5", "#e3e7df") + circle(133, 66, 6.4, "#bac4c5", "#e3e7df") +
    circle(117, 24, 2.7, "#cdb474") + circle(43, 84, 2.7, "#cdb474") +
    edgePads(component, showLabels, 15),
  footprint: {
    body: [25.4, 14.097], color: blue, drill: 1, size: 1.9304, shape: "circle",
    note: "Reference carrier for Adafruit #1713. Header centers follow the unmirrored Eagle electronics-side view. The microphone projects from the opposite side. Add the separate mounting holes and check microphone clearance. The generated 3D body is approximate.",
    groups: [{ ids: max9814Contacts.map(([id]) => id), axis: "y", x: -11.303, y: -4.8895, pitch: 2.54 }],
    details: [[-0.889, 0.6985, 3, 3, 0.8, "#222830"]],
  },
  model: pcbCad("Adafruit-MAX9814-AGC-Microphone-PCB", "Adafruit MAX9814.brd"),
};

const sph0645Contacts = [
  ["select", "SEL", "Channel select. The onboard pull-down selects the left channel. Drive high for the right channel.", "input", "JP2.6"],
  ["lrclock", "LRCL", "I²S word-select input (LRCLK or WS) from the audio host.", "input", "JP2.5"],
  ["data", "DOUT", "I²S serial audio data output. Tri-states during the unselected audio channel.", "tri_state", "JP2.4"],
  ["bitclock", "BCLK", "I²S bit-clock input from the audio host.", "input", "JP2.3"],
  ["gnd", "GND", "Common power and digital ground.", "power_in", "JP2.2"],
  ["vdd", "3V", "1.6–3.6 V supply input. Match the host signal voltage to the supply.", "power_in", "JP2.1"],
];

const sph0645 = {
  component: {
    id: "adafruit-sph0645-3421", art: "adafruit-sph0645-3421", name: "Adafruit SPH0645LM4H I²S MEMS Microphone",
    shortName: "SPH0645 Mic", manufacturer: "Adafruit", category: "Sensors", referencePrefix: "U",
    source: "https://learn.adafruit.com/adafruit-i2s-mems-microphone-breakout/pinouts",
    description: "Adafruit #3421 SPH0645LM4H breakout with a six-pin header. The drawing shows the acoustic-port side, rotated to place the header on the left. The microphone package and passives are underneath.",
    subtitle: "#3421 / I²S / acoustic-port side",
    tags: ["sph0645", "sph0645lm4h", "3421", "i2s", "microphone", "audio", "sound", "mems"],
    width: 116, height: 156,
    pins: pinRow("left", 116, 156, 22, 22, sph0645Contacts),
  },
  art: (component, showLabels) => pcb(7, 7, 102, 142) +
    mountingHole(93, 24) + mountingHole(93, 132) +
    path("M15 88h28l17-8M15 110h34l9-8M15 44h29", "none", "#267cad", 1.9) +
    circle(68, 78, 5.3, "#bd9465", "#e2b584") + circle(68, 78, 3.6, "#4c2827") +
    circle(68, 78, 1.9, "#191f28") + circle(61, 98, 2.2, "#253e63", "#3283b0") +
    `<g transform="rotate(90 94 78)">${label(94, 78, "SPH0645", 9)}</g>` +
    `<g transform="rotate(90 82 78)">${label(82, 78, "I2S Mic", 8)}</g>` +
    label(67, 61, "Port", 7, silk) + line(67, 66, 67, 71, silk, 1) +
    edgePads(component, showLabels, 15),
  footprint: {
    body: [12.7, 16.51], color: blue, drill: 1, size: 1.6764, shape: "circle",
    note: "Reference carrier for Adafruit #3421, rotated 90 degrees clockwise from the Eagle acoustic-port view. The header numbering accounts for the mirrored component-side placement. Add the separate mounting holes and keep the microphone acoustic port clear. The generated 3D body is approximate.",
    groups: [{ ids: sph0645Contacts.map(([id]) => id), axis: "y", x: -3.81, y: -6.35, pitch: 2.54 }],
  },
  model: pcbCad("Adafruit-I2S-Microphone-Breakout-PCB", "Adafruit I2S Mic SPK0415HM4H.brd"),
};

const drvLogic = [
  ["vin", "VIN", "3–5 V supply input. Use the host logic voltage because the I²C pull-ups connect to VIN.", "power_in", "JP2.1"],
  ["gnd", "GND", "Common supply and logic ground.", "power_in", "JP2.2"],
  ["scl", "SCL", "I²C clock input with an onboard 10 kΩ pull-up to VIN.", "input", "JP2.3"],
  ["sda", "SDA", "Bidirectional I²C data with an onboard 10 kΩ pull-up to VIN.", "bidirectional", "JP2.4"],
  ["trigger", "INT", "IN/TRIG input for external triggering, PWM/analog control or audio-to-haptics modes.", "input", "JP2.5"],
];
const drvMotor = [
  ["out-minus", "−", "Negative side of the differential ERM/LRA motor drive. Connect directly to the haptic actuator.", "output", "JP3.1"],
  ["out-plus", "+", "Positive side of the differential ERM/LRA motor drive. Connect directly to the haptic actuator.", "output", "JP1.1"],
];

function drv2605Art(component, showLabels) {
  const header = component.pins.slice(0, 5).map((pin, index) =>
    pad(pin.x, 108) + label(pin.x, index % 2 ? 95 : 118, pin.label, 7.5)
  ).join("");
  const motor = component.pins.slice(5).map(pin =>
    rect(pin.x - 6.5, 15.5, 13, 13, 0.5, "#dfc893", "#f1e8cc") +
    label(pin.x, 37, pin.label, 12, silk)
  ).join("");
  return pcb(7, 7, 166, 116, black) +
    [23, 157].flatMap(x => [23, 107].map(y => mountingHole(x, y))).join("") +
    [56, 124].map(x => rect(x - 4.5, 16, 9, 18, 4.5, "#dfc893") +
      circle(x, 25, 2.3, "#1d2630")).join("") +
    qtSocket(21, 68, 0) + qtSocket(159, 68, 180) +
    label(99, 48, "DRV2605L", 11) + label(126, 85, "Haptic", 6.5) +
    label(13, 43, "on", 6.8, silk, "start") + smd(24, 41, "#74b98f") +
    `<g transform="translate(90 75) rotate(90)">${chip(-11, -11, 22, 22, "TI", 5)}</g>` +
    `<g transform="translate(60 68) rotate(90)">${chip(-8, -5, 16, 10, "", 4)}</g>` +
    [74, 108, 119, 131].map(x => `<g transform="translate(${x} 64) rotate(90)">${smd(0, 0)}</g>`).join("") +
    circle(43, 92, 2.7, "#d8b875") + circle(141, 33, 2.7, "#d8b875") +
    header + motor;
}

const drv2605 = {
  component: {
    id: "adafruit-drv2605l-2305-qt", art: "adafruit-drv2605l-2305-qt", name: "Adafruit DRV2605L Haptic Motor Controller",
    shortName: "DRV2605L", manufacturer: "Adafruit", category: "Actuators", referencePrefix: "U",
    source: "https://learn.adafruit.com/adafruit-drv2605-haptic-controller-breakout/pinouts",
    description: "Adafruit #2305 STEMMA QT revision with a DRV2605L haptic driver, two I²C cable sockets and motor solder pads with wire strain relief. Supports ERM and LRA actuators. I²C address is fixed at 0x5A.",
    subtitle: "#2305 STEMMA QT / ERM and LRA",
    tags: ["drv2605", "drv2605l", "2305", "haptic", "vibration", "motor driver", "erm", "lra", "i2c", "stemma qt"],
    width: 180, height: 136,
    pins: [...pinRow("bottom", 180, 136, 56, 17, drvLogic), ...pinRow("top", 180, 136, 73, 34, drvMotor)],
  },
  art: drv2605Art,
  footprint: {
    body: [25.4, 17.78], color: black, drill: 1, size: 1.9304, shape: "circle",
    note: "Reference contact pattern from Adafruit #2305 STEMMA QT Eagle CAD. Motor solder lands repeat their corresponding strain-relief hole terminal numbers. Mounting holes and JST socket lands are outside this carrier pattern. The generated 3D body is approximate.",
    groups: [{ ids: drvLogic.map(([id]) => id), x: -5.08, y: 6.35, pitch: 2.54 }],
    pads: [
      { id: "out-minus", x: -5.08, y: -6.35, size: [1.6764, 3.3528], shape: "oval" },
      { id: "out-plus", x: 5.08, y: -6.35, size: [1.6764, 3.3528], shape: "oval" },
      { id: "out-minus", x: -2.54, y: -6.985, size: [2, 2], smd: true, shape: "rect" },
      { id: "out-plus", x: 2.54, y: -6.985, size: [2, 2], smd: true, shape: "rect" },
    ],
    details: [[0, 1.016, 3, 3, 1.1, "#1e2530"], [-10.033, 0, 4, 5, 2, "#c7c8bf"], [10.033, 0, 4, 5, 2, "#c7c8bf"]],
  },
  model: pcbCad("Adafruit-DRV2605-PCB", "Adafruit DRV2605L STEMMA QT.brd"),
};

const pamInputs = [
  ["audio-plus", "A+", "AC-coupled positive differential analog audio input.", "input", "JP1.5"],
  ["audio-minus", "A−", "AC-coupled negative differential analog audio input. Connect to ground for a single-ended audio source.", "input", "JP1.4"],
  ["shutdown", "SD", "Active-low shutdown input with an onboard pull-up.", "input", "JP1.3"],
  ["vin", "Vin", "2.0–5.5 V supply input.", "power_in", "JP1.2"],
  ["gnd", "Gnd", "Common supply and analog-input ground.", "power_in", "JP1.1"],
];
const pamOutputs = [
  ["speaker-plus", "+", "Positive bridge-tied speaker output. Connect directly to one terminal of a 4–8 Ω speaker.", "output", "X1.1"],
  ["speaker-minus", "−", "Negative bridge-tied speaker output. This is an actively driven output, so keep it separate from ground.", "output", "X1.2"],
];

function pam8302Art(component, showLabels) {
  return pcb(7, 7, 190, 120) +
    mountingHole(177, 25) + mountingHole(177, 109) +
    label(122, 16, "PAM8302A", 11) + label(104, 118, "2.5W ClassD Amp", 10) +
    rect(56, 17, 25, 23, 2, "#b6b7af", "#eeeadd") + screw(68, 28, 9) +
    label(83, 48, "Vol", 7.5) + smd(91, 24) +
    `<g transform="translate(99 92) rotate(90)">${chip(-12, -12, 24, 24, "8302", 4)}</g>` +
    smd(56, 50) + smd(62, 66, "#34363c") +
    `<g transform="translate(93 44) rotate(90)">${smd(0, 0, "#34363c")}</g>` +
    [62, 77].map(x => `<g transform="translate(${x} 86) rotate(90)">${smd(0, 0, x === 62 ? "#34363c" : "#b8a47b")}</g>`).join("") +
    [61, 78, 95, 111].map((y, index) => smd(121, y, index === 1 || index === 2 ? "#33383c" : "#bea878")).join("") +
    rect(150, 43, 38, 52, 0, "none", "#a9ceda") +
    `<g transform="rotate(-90 191 69)">${label(191, 69, "4–8Ω", 7, silk)}</g>` +
    edgePads({ ...component, pins: component.pins.slice(0, 5) }, showLabels, 31) +
    edgePads({ ...component, pins: component.pins.slice(5) }, showLabels, 36);
}

const pam8302 = {
  component: {
    id: "adafruit-pam8302-2130", art: "adafruit-pam8302-2130", name: "Adafruit PAM8302 Mono 2.5 W Audio Amplifier",
    shortName: "PAM8302 Amp", manufacturer: "Adafruit", category: "Interfaces", referencePrefix: "U",
    source: "https://learn.adafruit.com/adafruit-pam8302-mono-2-5w-class-d-audio-amplifier/pinouts",
    description: "Adafruit #2130 blue PAM8302A board with a volume trimmer, five-pin input header and 3.5 mm speaker pad spacing. It accepts differential or single-ended analog audio and drives a 4–8 Ω speaker.",
    subtitle: "#2130 / analog input / bridge output",
    tags: ["pam8302", "pam8302a", "2130", "audio", "amplifier", "speaker", "class d", "analog", "mono"],
    width: 204, height: 136,
    pins: [...pinRow("left", 204, 136, 27, 20, pamInputs), ...pinRow("right", 204, 136, 53, 28, pamOutputs)],
  },
  art: pam8302Art,
  footprint: {
    body: [24.13, 15.24], color: blue, drill: 1, size: 1.778, shape: "circle",
    note: "Reference carrier using the Adafruit #2130 Eagle header and speaker-pad centers. Speaker spacing is 3.5 mm. Add mounting holes and check the optional terminal block and volume-trimmer clearance. The generated 3D body is approximate.",
    groups: [
      { ids: pamInputs.slice(0, 4).map(([id]) => id), axis: "y", x: -9.017, y: -5.08, pitch: 2.54 },
      { ids: pamOutputs.map(([id]) => id), axis: "y", x: 8.382, y: -1.673, pitch: 3.5, size: 2.1844 },
    ],
    pads: [{ id: "gnd", x: -9.017, y: 5.08, shape: "rect" }],
    details: [[-1.27, 2.54, 3, 3, 1.1, "#202730"], [-4.445, -5.08, 3.5, 3.5, 2, "#b6b7af"]],
  },
  model: { label: "Adafruit #2130 STEP model", url: "https://github.com/adafruit/Adafruit_CAD_Parts/blob/main/2130%20PAM8302/2130%20PAM8302.step" },
};

const entries = [max9814, sph0645, drv2605, pam8302];

const audioPrototypingComponents = entries.map(({ component }) => component);
const audioPrototypingArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const audioPrototypingFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const audioPrototypingModels = Object.fromEntries(entries.map(({ component, model }) => [component.id, model]));

const contactCenters = {
  "adafruit-max9814-1713": pin => [15, pin.y],
  "adafruit-sph0645-3421": pin => [15, pin.y],
  "adafruit-drv2605l-2305-qt": (pin, index) => [pin.x, index < 5 ? 108 : 22],
  "adafruit-pam8302-2130": (pin, index) => [index < 5 ? 31 : 168, pin.y],
};

export default defineFamily("audio-prototyping", audioPrototypingComponents.map(component => physicalEntry({
  component, render: audioPrototypingArt[component.art], footprint: audioPrototypingFootprints[component.id], model: audioPrototypingModels[component.id],
}, contactCenters[component.id])));
