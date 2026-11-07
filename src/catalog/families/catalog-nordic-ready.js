import { defineFamily } from "../registry.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, label, mountingHole, path, pinRow, rect, smd, usb } from "../shared/svg.js";

const dongleCad = "https://nsscprodmedia.blob.core.windows.net/prod/software-and-other-downloads/dev-kits/nrf52840-dongle/nrf52840-usb-dongle---hardware-files-2_1_1.zip";
const ppkCad = "https://nsscprodmedia.blob.core.windows.net/prod/software-and-other-downloads/dev-kits/power-profiler-kit-ii/pca63100-power-profiler-kit-ii---hw-files---1_0_1.zip";
const gpio = name => [name.toLowerCase(), name, `Configurable ${name} digital I/O at the VDD OUT logic level.`, "bidirectional", name];
const ground = (id, number) => [id, "GND", "Common ground.", "power_in", number];

const dongleTop = [ground("gnd-top", "GND.1"), ...["P0.10", "P0.09", "P1.00", "P0.24", "P0.22", "P0.20", "P0.17", "P0.15", "P0.13"].map(gpio)];
const dongleBottom = [
  ground("gnd-bottom", "GND.2"),
  ...["P1.10", "P1.13", "P1.15", "P0.02", "P0.29", "P0.31"].map(gpio),
  ground("gnd-power", "GND.3"),
  ["vdd-out", "VDD OUT", "Internal regulator output, set to 3.0 V by the factory firmware. REGOUT0 can select 1.8–3.3 V. External supply operation requires changing SB1/SB2 as documented.", "passive", "VDD.OUT"],
  ["vbus", "VBUS", "USB 5 V supply rail. External power operation follows the Nordic power configuration instructions.", "power_in", "VBUS"],
];
const dongleService = ["P1.11", "P0.26", "P0.04", "P1.07", "P1.04", "P0.11", "P1.02", "P1.01", "P0.14"].map(name =>
  [`back-${name.toLowerCase()}`, name, `Underside test point for configurable ${name}. Logic level follows VDD OUT.`, "bidirectional", `TP.${name}`]
);

const dongle = {
  id: "nordic-nrf52840-dongle", art: "nordic-nrf52840-dongle",
  name: "Nordic nRF52840 Dongle", shortName: "nRF52840 Dongle",
  manufacturer: "Nordic Semiconductor", category: "Microcontrollers", referencePrefix: "U",
  subtitle: "PCA10059 v2.1.1 / USB-A",
  description: "Nordic PCA10059 v2.1.1 USB development board with 15 castellated GPIOs, two SWD contacts and nine additional GPIO test points on the underside. The illustration shows the PCB underside with USB to the right; the castellated rows, GPIO test points, RESET and USB service pads are directly selectable.",
  source: "https://docs.nordicsemi.com/r/bundle/ug_nrf52840_dongle/page/ug/nrf52840_dongle/hw_external_connections.html",
  tags: ["nordic", "nrf52840", "pca10059", "bluetooth", "ble", "thread", "zigbee", "usb", "dongle"],
  width: 535, height: 280,
  pins: [
    ...pinRow("top", 535, 280, 127, 21, dongleTop),
    ...pinRow("bottom", 535, 280, 127, 21, dongleBottom),
    ...pinRow("left", 535, 280, 28, 27, dongleService),
    ...pinRow("right", 535, 280, 99, 82, [
      ["swdio", "SWDIO", "Serial Wire Debug data.", "bidirectional", "SWDIO"],
      ["swdclk", "SWDCLK", "Serial Wire Debug clock input.", "input", "SWDCLK"],
    ]),
    { id: "reset", label: "RESET", description: "Active-low reset on the underside programming sites, shared with SW2 and P0.18/P0.19/P0.21/P0.23/P0.25.", type: "input", number: "RESET", x: 535, y: 230 },
    { id: "usb-dp", label: "D+", description: "USB D+ underside service pad. Disconnect SB4 to isolate the printed USB connector.", type: "bidirectional", number: "USB.DP", x: 535, y: 253 },
    { id: "usb-dn", label: "D−", description: "USB D− underside service pad. Disconnect SB3 to isolate the printed USB connector.", type: "bidirectional", number: "USB.DN", x: 535, y: 275 },
  ],
};

// Underside locations follow Nordic's PCA10059 v2.1.1 assembly/PCB drawing.
// The USB stays at the right; the board is flipped over its long axis.
const dongleRearCenters = [
  [204.001, 113.361], [311.801, 104.961], [311.801, 117.348],
  [204.001, 150.694], [191.401, 150.694], [241.101, 163.081],
  [191.401, 163.081], [204.001, 163.081], [228.967, 163.081],
  [358.468, 180.629], [358.468, 96.162],
  [261.401, 117.014], [356.834, 144.334], [356.834, 131.734],
];

function drawDongle({ pins }, showLabels) {
  const copper = "#d3b374";
  const edgeContacts = pins.slice(0, 20).map((pin, index) => {
    const lower = index < 10;
    return rect(pin.x - 7, pin.y - 4, 14, 8, .5, copper, "#f0d38e") +
      (showLabels ? label(pin.x, pin.y + (lower ? -12 : 12), pin.label.replace("P", ""), pin.label === "VDD OUT" ? 5 : 5.8, "#edf0e1") : "");
  }).join("");
  const testPoints = pins.slice(20).map((pin, index) => circle(pin.x, pin.y, index < 9 ? 3.3 : 3.9, copper, "#f0d38e") +
    circle(pin.x, pin.y, 1.5, "#204372") +
    (showLabels ? label(pin.x + (index < 9 ? 0 : 8), pin.y + (index < 9 ? -7 : 0), pin.label.replace("P", ""), 4.3, "#edf0e1", index < 9 ? "middle" : "start") : "")
  ).join("");
  const programPads = [0, 1, 2, 3, 4].flatMap(row => [0, 1].map(column =>
    circle(255 + column * 12.6, 105 + row * 12.6, 2.6, copper)
  )).join("");
  return path("M80 76H372L397 99H500V181H397L372 202H80Z", "#27569d", "#6892c7") +
    rect(84, 80, 26, 118, 1, "#e0e8e7") + label(96, 140, "N", 17, "#264c89") +
    rect(289, 127, 37, 29, 2, "#a3b1a6", "#d8decf") +
    [0, 1, 2].map(index => rect(291, 130 + index * 8, 33, 5, .5, copper)).join("") +
    [110, 130, 150, 170].map(y => rect(421, y, 70, 9, 1, copper, "#f2d38c")).join("") +
    label(452, 192, "USB-A", 7, "#edf0e1") + programPads + edgeContacts + testPoints +
    label(239, 49, "PCA10059 · BACK / USB RIGHT", 9, "#34475a") +
    label(145, 185, "nRF52840", 6, "#edf0e1");
}

const powerPins = [
  ground("power-gnd-1", "P1.1"),
  ["vout", "VOUT", "Output to the device under test. In source mode the PPK2 provides 0.8–5.0 V. In ampere-meter mode this is the measured output from VIN.", "power_out", "P1.2"],
  ["vin", "VIN", "External 0.8–5.0 V supply input in ampere-meter mode.", "power_in", "P1.3"],
  ground("power-gnd-2", "P1.4"),
];
const logicPins = [
  ...Array.from({ length: 8 }, (_, index) => [`d${index}`, `D${index}`, `Logic analyzer channel ${index} input, referenced to the logic-port VCC.`, "input", `P2.${index + 1}`]),
  ground("logic-gnd", "P2.9"),
  ["logic-vcc", "VCC", "Logic-port voltage reference input from the device under test, 1.6–5.5 V.", "power_in", "P2.10"],
];
const debugPins = [
  ["dbg-vref", "VTREF", "PPK2 internal 3.3 V rail for debugger voltage sensing.", "power_out", "P3.1"],
  ["dbg-swdio", "SWDIO", "Programming header SWD data.", "bidirectional", "P3.2"],
  ground("dbg-gnd-3", "P3.3"),
  ["dbg-swdclk", "SWCLK", "Programming header SWD clock.", "input", "P3.4"],
  ground("dbg-gnd-5", "P3.5"),
  ["dbg-swo", "SWO", "Programming header trace output.", "output", "P3.6"],
  ["dbg-key", "KEY", "Unconnected key position on the unpopulated debug header.", "no_connect", "P3.7"],
  ["dbg-nc", "NC", "Unconnected programming header position.", "no_connect", "P3.8"],
  ground("dbg-gnd-9", "P3.9"),
  ["dbg-reset", "RESET", "Active-low reset for the PPK2 processor.", "input", "P3.10"],
];
const ppk = {
  id: "nordic-power-profiler-kit-ii", art: "nordic-power-profiler-kit-ii",
  name: "Nordic Power Profiler Kit II", shortName: "Power Profiler Kit II",
  manufacturer: "Nordic Semiconductor", category: "Tools", referencePrefix: "U",
  subtitle: "PCA63100 v1.0.1 / current measurement",
  description: "nRF-PPK2 USB power profiler with P1 power connections and eight digital inputs on P2. Includes the unpopulated P3 programming header on the left side of the PCB. Select source or ampere-meter mode in the Power Profiler application.",
  source: "https://docs.nordicsemi.com/r/bundle/ug_ppk2/page/ug/ppk/ppk_user_guide_connectors.html",
  tags: ["nordic", "ppk2", "pca63100", "power", "current", "profiler", "logic analyzer", "usb", "measurement"],
  width: 440, height: 312,
  pins: [
    ...pinRow("bottom", 440, 312, 39, 23, logicPins),
    ...pinRow("right", 440, 312, 207, 24, powerPins),
    ...pinRow("top", 440, 312, 38, 34, debugPins),
  ],
};

function drawPpk({ pins }, showLabels) {
  const logic = pins.slice(0, 10).map(pin =>
    rect(pin.x - 3, pin.y - 9, 6, 18, .5, "#c8ad72") +
    (showLabels ? label(pin.x, pin.y + 18, pin.label, 6.5, "#34475a") : "")
  ).join("");
  const power = pins.slice(10, 14).map(pin =>
    rect(pin.x - 3, pin.y - 9, 6, 18, .5, "#c8ad72") +
    (showLabels ? label(pin.x, pin.y + 18, pin.label, 6.5, "#34475a") : "")
  ).join("");
  const debug = rect(39, 110, 27, 39, 1, "#263541", "#8b9caa") + pins.slice(14).map(pin =>
    circle(pin.x, pin.y, 1.8, "#c8ad72") +
    (showLabels ? label(pin.x + (Number(pin.number.split(".")[1]) % 2 ? -6 : 6), pin.y, pin.number.split(".")[1], 4.8, "#edf0e1") : "")
  ).join("") + (showLabels ? label(52, 104, "P3", 6, "#edf0e1") : "");
  return rect(13, 39, 406, 234, 12, "#204d7b", "#668eb1") +
    [31, 400].flatMap(x => [58, 254].map(y => mountingHole(x, y))).join("") +
    usb(91, 36, 35) + usb(298, 36, 35) +
    rect(194, 37, 32, 22, 1.5, "#282d33", "#727b7e") + rect(211, 33, 8, 15, 1, "#d9d8ce") +
    label(108, 69, "DATA/POWER", 6.2) + label(316, 69, "POWER ONLY", 6.2) +
    label(200, 69, "OFF  ON", 6.3) +
    rect(161, 129, 115, 94, 10, "#17456f", "#678dab") +
    label(219, 164, "Power Profiler", 11) + label(219, 181, "Kit II", 14) +
    label(219, 200, "PCA63100", 7) +
    chip(64, 153, 39, 39, "nRF52", 4) +
    [304, 358].flatMap(x => [99, 161, 223].map(y => chip(x, y, 20, 20, "", 3))).join("") +
    [151, 300, 369].map(x => smd(x, 106)).join("") +
    rect(122, 260, 150, 14, 1, "#303a42", "#8b9caa") +
    rect(309, 261, 80, 13, 1, "#303a42", "#8b9caa") +
    rect(23, 261, 245, 13, 1, "#2e3338", "#808c95") +
    rect(100, 108, 32, 13, 1, "#ddd5c4", "#75818b") +
    label(59, 79, "NORDIC", 8) + logic + power + debug;
}

const nordicReadyComponents = [dongle, ppk];
const nordicReadyArt = { [dongle.id]: drawDongle, [ppk.id]: drawPpk };
const nordicReadyFootprints = {
  [dongle.id]: {
    body: [46.04, 15.24], color: "#265897", size: [1.7, 1.8], smd: true,
    note: "Reference PCA10059 v2.1.1 carrier for castellated contacts and primary SWD pads. Castellated centers use Nordic's 2.54 mm grid and 15.24 mm row spacing. Extra contacts below the outline terminate wires to underside GPIO, RESET and USB service points. Verify the USB-A clearance.",
    groups: [
      { ids: dongleTop.map(([id]) => id), x: -17.305, y: -7.62 },
      { ids: dongleBottom.map(([id]) => id), x: -17.305, y: 7.62 },
      { ids: dongleService.map(([id]) => id), x: -10.16, y: 13, drill: 0.8, size: 1.6, smd: false },
    ],
    pads: [
      { id: "swdio", x: 10.635, y: -5.608 }, { id: "swdclk", x: 10.635, y: 5.608 },
      { id: "reset", x: -2.54, y: 16, drill: 0.8, size: 1.6, smd: false },
      { id: "usb-dp", x: 0, y: 16, drill: 0.8, size: 1.6, smd: false },
      { id: "usb-dn", x: 2.54, y: 16, drill: 0.8, size: 1.6, smd: false },
    ],
    details: [[-6.5, 0, 7, 7, 0.9, "#28313d"]],
  },
  [ppk.id]: {
    body: [38, 14], color: "#24517c", drill: 1, size: 1.8,
    note: "Off-board wiring terminations for the PPK2 power and logic cables plus a 1.27 mm debug-header reference. Numbers follow PCA63100 v1.0.1. The outline represents a host termination carrier.",
    groups: [
      { ids: logicPins.map(([id]) => id), x: -11.43, y: 5.08 },
      { ids: powerPins.map(([id]) => id), x: -3.81, y: -5.08 },
      { ids: debugPins.filter((_, index) => index % 2 === 0).map(([id]) => id), x: -2.54, y: -1.27, pitch: 1.27, drill: 0.65, size: 1 },
      { ids: debugPins.filter((_, index) => index % 2 === 1).map(([id]) => id), x: -2.54, y: 0, pitch: 1.27, drill: 0.65, size: 1 },
    ],
  },
};
const nordicReadyModels = {
  [dongle.id]: { label: "Nordic PCA10059 v2.1.1 Altium CAD and production files", url: dongleCad },
  [ppk.id]: { label: "Nordic PCA63100 v1.0.1 Altium CAD and production files", url: ppkCad },
};

const contactCenters = {
  [dongle.id]: (pin, index) => index < 10 ? [pin.x, 202] : index < 20 ? [pin.x, 76] : dongleRearCenters[index - 20],
  [ppk.id]: (pin, index) => index < 10 ? [pin.x, 274] : index < 14 ? [318 + (index - 10) * 22, 274]
    : [45.5 + ((index - 14) % 2) * 12.5, 117 + Math.floor((index - 14) / 2) * 6.3],
};

export default defineFamily("nordic-ready", nordicReadyComponents.map(component => physicalEntry({
  component, render: nordicReadyArt[component.art], footprint: nordicReadyFootprints[component.id], model: nordicReadyModels[component.id],
}, contactCenters[component.id])));
