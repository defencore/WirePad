function escapeText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const rect = (x, y, width, height, radius, fill, stroke = "none") =>
  `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${radius}" fill="${fill}" stroke="${stroke}"/>`;
const circle = (cx, cy, r, fill, stroke = "none") =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}"/>`;
const line = (x1, y1, x2, y2, stroke, width = 1) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round"/>`;
const path = (d, fill, stroke = "none", width = 1) =>
  `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const label = (x, y, value, size = 9, fill = "#e3e9f1", anchor = "middle", weight = 600) =>
  `<text x="${x}" y="${y}" fill="${fill}" font-family="ui-monospace, monospace" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" dominant-baseline="central">${escapeText(value)}</text>`;

function board(width, height, color, outline, inset = 7) {
  return rect(inset, inset + 2, width - inset * 2, height - inset * 2, 7, "#142032", "#142032") +
    rect(inset, inset, width - inset * 2, height - inset * 2, 7, color, outline) +
    rect(inset + 3, inset + 3, width - inset * 2 - 6, height - inset * 2 - 6, 5, "none", outline);
}

function mountingHole(x, y) {
  return circle(x, y, 5.4, "#b69762") + circle(x, y, 3.3, "#151d2a") + circle(x, y, 2.5, "#26303e");
}

function pad(x, y) {
  return circle(x, y, 4.4, "#dcb16a") + circle(x, y, 2.65, "#564736") + circle(x, y, 1.7, "#131923");
}

function edgePads(component, showLabels, offset = 9) {
  const { width, height, pins } = component;
  return pins.map((pin) => {
    const horizontal = pin.x === 0 || pin.x === width;
    const before = pin.x === 0 || pin.y === 0;
    const delta = before ? 1 : -1;
    const x = pin.x + (horizontal ? delta * offset : 0);
    const y = pin.y + (horizontal ? 0 : delta * offset);
    const caption = horizontal
      ? label(x + delta * 7, y, pin.label, 8, "#f1f2ee", before ? "start" : "end")
      : label(x, y + delta * 10, pin.label, 7.5);
    return line(pin.x, pin.y, x, y, "#ac8550", 1.5) + pad(x, y) + (showLabels ? caption : "");
  }).join("");
}

function chip(x, y, width, height, caption = "", legs = 4) {
  const legSpacing = (height - 8) / Math.max(legs - 1, 1);
  const pins = Array.from({ length: legs }, (_, index) => {
    const pinY = y + 4 + index * legSpacing;
    return line(x - 5, pinY, x, pinY, "#9ca9ba", 2.5) +
      line(x + width, pinY, x + width + 5, pinY, "#9ca9ba", 2.5);
  }).join("");
  return pins + rect(x, y, width, height, 3, "#131823", "#65728a") +
    rect(x + 2, y + 2, width - 4, height - 4, 1, "#202936") +
    circle(x + 5, y + 5, 1.3, "#777f8a") +
    label(x + width / 2, y + height / 2 + 2, caption, 6, "#c2cbd4");
}

function smd(x, y, color = "#bba778") {
  return rect(x, y, 8, 4, 1, "#9ba9b6") + rect(x + 2, y, 4, 4, 0.5, color);
}

function screw(x, y, radius = 8) {
  return circle(x, y, radius, "#1d2d36") + circle(x, y, radius - 2, "#bcc7c7", "#e4eded") +
    line(x - 3, y + 3, x + 3, y - 3, "#49535b", 1.8);
}

function usb(x, y, width = 27) {
  return rect(x, y, width, 18, 2, "#a6aeb9", "#dce2e8") +
    rect(x + 3, y + 4, width - 6, 8, 1, "#6d7786") +
    rect(x + 3, y + 13, width - 6, 5, 1, "#313b4a") +
    line(x + 6, y + 15, x + width - 6, y + 15, "#bbc4cd");
}

function tactile(x, y) {
  return rect(x, y, 15, 15, 3, "#99a5b6", "#d8e0ea") + circle(x + 7.5, y + 7.5, 4.5, "#27303c", "#596579");
}

function esp32Art({ width, height }) {
  return board(width, height, "#283344", "#455165") +
    rect(33, 29, 76, 164, 5, "#181f29", "#687487") +
    path("M41 60H53V43H64V60H75V43H86V60H100", "none", "#b28b56", 2) +
    rect(38, 72, 66, 114, 4, "#bdc5ca", "#e5eaec") +
    rect(41, 76, 60, 105, 3, "#d5d9d9", "#a0acb0") +
    circle(71, 97, 10, "none", "#596b76") +
    path("M65 99L70 93L76 99M68 101L70 98L73 101", "none", "#596b76", 1.2) +
    label(71, 121, "ESP32-S3", 8, "#344450") + label(71, 134, "WROOM", 7, "#5f6b74") +
    label(71, 157, "Wi-Fi / BLE", 6.3, "#5f6b74", "middle", 500) +
    chip(55, 232, 32, 26, "USB") + smd(42, 218) + smd(90, 223) + smd(44, 271) + smd(91, 270) +
    circle(75, 283, 3.2, "#8ac8af", "#c5e3d1") +
    label(71, 211, "DEVKITC-1", 7.5, "#dce6eb") + label(71, 304, "v1.1", 7.5, "#99aec0") +
    tactile(44, 319) + tactile(83, 319) + usb(38, 353) + usb(77, 353);
}

function heltecArt({ width, height }) {
  return board(width, height, "#222b39", "#4c5668") +
    rect(31, 43, 80, 112, 7, "#090f19", "#606c7b") +
    rect(37, 54, 68, 84, 3, "#0e2338", "#233850") +
    label(71, 82, "HELTEC", 12, "#69d2f7") +
    label(71, 100, "LoRa 32", 9, "#bdd9ee") + label(71, 116, "V4", 8, "#69d2f7") +
    chip(54, 184, 34, 38, "SX1262") +
    rect(43, 237, 21, 17, 2, "#d1c3a5", "#eee1bf") + circle(53.5, 245.5, 5, "#413a33", "#d6ab69") +
    rect(77, 237, 21, 17, 2, "#d1c3a5", "#eee1bf") + circle(87.5, 245.5, 5, "#413a33", "#d6ab69") +
    label(71, 169, "WiFi LoRa 32", 8.5, "#dce6eb") +
    tactile(43, 273) + tactile(85, 273) + usb(57, 288, 28);
}

function rs485Art({ width, height }) {
  return board(width, height, "#283f70", "#466499") +
    mountingHole(28, 14) + mountingHole(130, 14) + mountingHole(130, 123) +
    path("M42 43H62L70 51H104M43 98H66L75 89H103", "none", "#456499", 1.5) +
    chip(68, 48, 31, 38, "3485") + smd(62, 34) + smd(79, 92) +
    rect(107, 45, 42, 50, 3, "#2b718c", "#6ba6bb") +
    rect(109, 48, 37, 43, 2, "#3686a2") + line(109, 69, 145, 69, "#1d556e") +
    screw(130, 58, 7) + screw(130, 80, 7) +
    label(80, 21, "RS-485", 10) + label(78, 110, "3.3 V", 7.5, "#b9cbe6");
}

function qtPort(x, y) {
  return rect(x, y, 19, 12, 2, "#d9d7d0", "#f2f0e8") + rect(x + 3, y + 3, 13, 7, 1, "#7c7467");
}

function bmeArt({ width, height }) {
  return board(width, height, "#48325f", "#735b86") +
    mountingHole(103, 21) + mountingHole(103, 105) +
    qtPort(87, 37) + qtPort(87, 78) + smd(51, 44) + smd(46, 78) +
    path("M42 58H55L61 64V91M44 69H61", "none", "#745989", 1.5) +
    rect(61, 51, 24, 24, 3, "#c0b9b4", "#ebdfd4") +
    rect(64, 54, 18, 18, 2, "#9f9899") + circle(77, 59, 2.5, "#4b444a") +
    label(69, 28, "BME280", 9) + label(68, 94, "ENV", 8, "#e4cce7");
}

function soilArt() {
  const leadColors = ["#af784f", "#414e59", "#eabf56", "#77b9e2"];
  const leads = leadColors.map((color, index) => {
    const y = 34 + index * 19;
    return path(`M0 ${y} H15 Q25 ${y} 34 ${60 + index * 4} H43`, "none", color, 2.3);
  }).join("");
  return leads + rect(37, 28, 52, 79, 9, "#24353f", "#3e5961") +
    rect(41, 32, 44, 71, 7, "#31424b") +
    [43, 66, 89].map((y) => path(`M86 ${y - 3}H114L126 ${y}L114 ${y + 3}H86Z`, "#a9b7bd", "#6b828a")).join("") +
    label(63, 52, "SOIL", 9) + label(63, 70, "MODBUS", 7, "#a1bbc6") +
    label(63, 84, "SEN0600", 6.5, "#a1bbc6");
}

function adsArt({ width, height }) {
  return board(width, height, "#234d6a", "#40768d") +
    qtPort(12, 56) + qtPort(119, 56) +
    chip(61, 44, 28, 34, "ADS") + smd(43, 59) + smd(98, 66) +
    label(75, 32, "ADS1115", 9) + label(75, 89, "16-BIT ADC", 7, "#b6d3df");
}

function inaArt({ width, height }) {
  return board(width, height, "#295c5a", "#478580") +
    mountingHole(131, 15) + mountingHole(131, 86) +
    qtPort(45, 72) + chip(54, 38, 25, 27, "INA") +
    rect(92, 40, 24, 26, 3, "#20262d", "#a7b8bb") +
    label(104, 53, "R100", 6) + label(72, 24, "INA219", 9) +
    label(98, 79, "CURRENT", 6.5, "#b3d6ce");
}

function oledArt({ width, height }) {
  return board(width, height, "#2d4867", "#50728d") +
    rect(18, 30, 102, 65, 5, "#111b29", "#92a8bc") +
    rect(24, 36, 90, 53, 2, "#07172b", "#365372") +
    label(69, 60, "OLED", 15, "#7ecfff") + label(69, 74, "128 × 64", 7.5, "#7ecfff") +
    mountingHole(12, 98) + mountingHole(126, 98);
}

function buckArt({ width, height }) {
  return board(width, height, "#265681", "#45769c") +
    chip(48, 36, 28, 27, "2596") +
    rect(84, 33, 31, 32, 4, "#273746", "#9fabb9") +
    circle(99.5, 49, 11, "#504d4c", "#797670") +
    label(99.5, 49, "330", 8, "#e1ddd6") +
    circle(42, 69, 8, "#b7bdc5", "#d4d8dd") + circle(124, 69, 8, "#b7bdc5", "#d4d8dd") +
    line(39, 68, 45, 68, "#5f6975") + line(121, 68, 127, 68, "#5f6975") +
    rect(120, 27, 19, 12, 2, "#317fa7", "#78b6d2") + screw(129, 33, 5) +
    label(78, 20, "LM2596", 9) + label(80, 79, "DC BUCK", 7);
}

function connectorArt({ art, width, height, pins }) {
  const color = art === "terminal" ? "#28796d" : art === "jst" ? "#dedacf" : "#384552";
  const outline = art === "terminal" ? "#5baba0" : art === "jst" ? "#aca69e" : "#202a35";
  const top = art === "header" ? 25 : 13;
  return rect(16, top + 2, width - 32, height - top - 13, 5, outline) +
    rect(16, top, width - 32, height - top - 15, 5, color, outline) +
    pins.map(({ x, y, label: number }) => {
      const terminal = art === "terminal"
        ? screw(x, 33) + label(x, 47, number, 8)
        : rect(x - 5, 34, 10, 10, 2, "#151b21", "#8f9392") + rect(x - 2, 37, 4, 4, 0.5, "#b99b5b");
      return line(x, y - 15, x, y, "#9a8968", 2) + terminal;
    }).join("");
}

const leads = (y = 16) => line(0, y, 96, y, "#7c8c9a", 2.2);
const resistor = () => leads() + rect(22, 7, 52, 18, 7, "#dbc197", "#a57a56") +
  line(26, 10, 70, 10, "#efdbb2", 1.5) +
  [31, 39, 49, 62].map((x, index) => line(x, 8, x, 24, ["#7e5037", "#c04a45", "#785337", "#b6984d"][index], 3)).join("");
const capacitor = () => leads() + circle(48, 16, 13, "#c68b50", "#8d6140") +
  circle(48, 15, 10, "#dfa15c") + label(48, 16, "104", 7, "#64492e");
const electrolytic = () => leads() + circle(48, 16, 15, "#2f435c", "#263549") +
  circle(48, 16, 12, "#aab6c3", "#c2cad2") + path("M43 12L53 20M43 20L53 12", "none", "#6b7783") +
  label(69, 16, "−", 12, "#475c72");
const inductor = () => leads() + rect(28, 7, 40, 18, 7, "#3c424b", "#1b2633") +
  [34, 41, 48, 55, 62].map((x) => line(x, 8, x, 24, "#ad754c", 3)).join("");
const ferrite = () => leads() + rect(30, 7, 36, 18, 3, "#495463", "#293744") +
  rect(33, 9, 30, 3, 1, "#697787");
const diode = () => leads() + rect(27, 9, 42, 14, 6, "#c06b46", "#873f32") +
  line(31, 13, 65, 13, "#eeb186", 1.5) + line(35, 10, 35, 22, "#4c3840", 4);
const led = () => leads() + path("M38 24V15a10 10 0 0 1 20 0v9Z", "#ba3c4e", "#7c2a3d") +
  rect(35, 23, 26, 4, 1, "#993648") + path("M42 15a6 6 0 0 1 5 -6", "none", "#f19a98", 1.6);

function transistorArt(component, showLabels) {
  return component.pins.map(({ x, y, label: pin }) => {
    const middle = x === 0 ? 30 : 66;
    const caption = showLabels ? label(x === 0 ? 10 : 83, y - 9, pin, 7.5, "#40516a") : "";
    return line(x, y, middle, y, "#8090a0", 2) + caption;
  }).join("") +
    rect(28, 12, 40, 51, 9, "#293646", "#182433") +
    rect(32, 16, 32, 43, 7, "#3a4a5c") +
    label(48, 37, component.art === "npn" ? "NPN" : "MOS", 8);
}

function buttonArt() {
  return line(0, 30, 96, 30, "#7c8c9a", 2) +
    rect(23, 7, 50, 46, 5, "#93a1b1", "#68788b") +
    rect(27, 11, 42, 38, 4, "#b6bfc8", "#d3dbe2") +
    circle(48, 30, 14, "#263747", "#182837") +
    circle(48, 29, 11, "#455767", "#536677");
}

function batteryArt() {
  return line(71, 22, 96, 22, "#a84252", 2.5) + line(71, 40, 96, 40, "#3a475b", 2.5) +
    rect(12, 13, 67, 36, 5, "#293646", "#152537") +
    rect(16, 17, 55, 28, 3, "#4b6172", "#576f82") +
    rect(16, 17, 14, 28, 3, "#bd9d62", "#d9b979") +
    label(52, 31, "DC", 10) + label(87, 15, "+", 8, "#ab4652") + label(87, 47, "−", 8, "#44556b");
}

const boardArt = { esp32: esp32Art, heltec: heltecArt, rs485: rs485Art, bme280: bmeArt, ads1115: adsArt, ina219: inaArt, oled: oledArt, buck: buckArt };

const standaloneArt = {
  soil: soilArt, resistor, capacitor, electrolytic, inductor, "ferrite-bead": ferrite, diode, led,
  npn: transistorArt, nmos: transistorArt, button: buttonArt, battery: batteryArt,
  terminal: connectorArt, header: connectorArt, jst: connectorArt,
};

export function componentArt(component, { labels = true } = {}) {
  const { art, width, height } = component;
  const graphic = boardArt[art]
    ? boardArt[art](component) + edgePads(component, labels)
    : standaloneArt[art](component, labels);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true">${graphic}</svg>`;
}
