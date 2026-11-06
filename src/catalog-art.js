import { drawAds1220 } from "./catalog-ads1220.js";
import { commonInterfaceArt } from "./catalog-common-interfaces.js";
import { commonPeripheralArt } from "./catalog-common-peripherals.js";
import { commonPowerArt } from "./catalog-common-power.js";
import { commonSensorArt } from "./catalog-common-sensors.js";
import { espDevKitCArt, espRpArt } from "./catalog-esp-rp.js";
import { heltecSemtechArt } from "./catalog-heltec-semtech.js";
import { nordicBoardArt } from "./catalog-nordic-boards.js";
import { nordicArt } from "./catalog-nordic.js";
import { powerArt } from "./catalog-power.js";
import { spXtArt } from "./catalog-sp-xt.js";
import { stmArduinoArt } from "./catalog-stm-arduino.js";
import { switchMosfetArt } from "./catalog-switches-mosfets.js";
import { drawHw0519 } from "./catalog-hw0519.js";
import { drawSt3215 } from "./catalog-st3215.js";
import { waveshareArt } from "./catalog-waveshare.js";

import {
  board, chip, circle, edgePads, label, line, moduleArt, mountingHole, pad, path, rect, screw, smd,
} from "./catalog-extension.js";

function rs485Art(component, showLabels) {
  const { width, height } = component;
  const logicHeader = rect(6, 15, 15, 111, 1.5, "#1d2936", "#81909c");
  const pins = showLabels ? edgePads(component, true) : component.pins
    .filter(pin => pin.x === 0).map(({ y }) => pad(9, y)).join("");
  return board(width, height, "#205987", "#5388aa") +
    logicHeader + mountingHole(137, 20) + mountingHole(137, 116) +
    path("M40 43h13l14 13M38 98h15l14-13M91 56h17m-17 23h17", "none", "#3d7397", 1.3) +
    chip(67, 49, 27, 39, "3485") + smd(75, 37) + smd(58, 95) +
    rect(109, 43, 40, 52, 3, "#327560", "#76a990") +
    rect(111, 46, 34, 46, 2, "#4d9075", "#82ac96") +
    line(111, 69, 145, 69, "#28634f") +
    screw(122, 59, 8) + screw(122, 79, 8) +
    rect(137, 53, 9, 12, 1, "#254e40") + rect(137, 73, 9, 12, 1, "#254e40") +
    label(72, 23, "RS-485", 10) + label(77, 111, "3.3 V", 8) + pins;
}

const qtSilk = "#ecece5";

function qtBoard(x, y, width, height) {
  return rect(x, y + 1, width, height, 7, "#a98752", "#856741") +
    rect(x, y, width, height, 7, "#262b31", "#777f83");
}

function qtPort(x, y, angle = 0) {
  const contacts = [-7.5, -2.5, 2.5, 7.5].map(offset =>
    line(offset, -9, offset, -5, "#a7a6a1", 2)
  ).join("");
  return `<g transform="translate(${x} ${y}) rotate(${angle})">` + contacts +
    rect(-12, -6, 24, 14, 1.5, "#dedace", "#f5efe1") +
    rect(-9, 4, 18, 4, 0.8, "#8c8171") +
    line(-9, -3, 9, -3, "#f7f3e8", 1.1) + "</g>";
}

function moduleHole(pin, x, y, showLeads, textX, textY, anchor = "middle") {
  const lead = showLeads ? line(pin.x, pin.y, x, y, "#ac8550", 1.4) : "";
  return lead + pad(x, y) + label(textX, textY, pin.label, 7, qtSilk, anchor);
}

function bmeArt({ pins }, showLabels) {
  // Rotate the top view so the seven-pin header faces the existing canvas contacts.
  return qtBoard(15, 6, 94, 116) +
    mountingHole(26, 16) + mountingHole(98, 16) + mountingHole(26, 112) + mountingHole(98, 112) +
    qtPort(61, 14, 180) + qtPort(61, 114) +
    chip(65, 38, 13, 13, "", 3) + chip(70, 79, 13, 14, "", 3) +
    rect(53, 53, 18, 19, 2, "#bdc3bd", "#e0e3db") +
    rect(56, 56, 12, 13, 1, "#a3aaa3") + circle(64, 59, 2, "#444e4a") +
    smd(52, 40) + smd(52, 78) + smd(56, 91) + smd(67, 97) +
    `<g transform="rotate(90 96 64)">${label(96, 64, "BME280", 11, qtSilk)}</g>` +
    pins.map((pin, index) => moduleHole(pin, 27, 25 + 13 * index, showLabels, 35, 25 + 13 * index, "start")).join("");
}

function soilArt({ pins }) {
  const leadColors = ["#9f643e", "#30343a", "#e5bc46", "#458cc2"];
  const leads = pins.map(({ x, y }, index) =>
    path(`M${x} ${y}H9Q20 ${y} 27 ${61 + index * 3}H34`, "none", leadColors[index], 2.4)
  ).join("");
  const probes = [53, 67, 81].map(y =>
    path(`M74 ${y - 2.4}H119L127 ${y}L119 ${y + 2.4}H74Z`, "#a6afb0", "#626d72", 0.8) +
    line(77, y - 1, 120, y - 1, "#f3f0de", 0.8)
  ).join("");
  return leads + probes +
    rect(26, 62, 17, 10, 3, "#282d32", "#11171d") +
    path("M32 63v8m4-8v8", "none", "#515861") +
    rect(39, 43, 40, 48, 4, "#23282c", "#12181e") +
    rect(41, 45, 36, 44, 3, "#3b4145", "#52595e") +
    rect(44, 49, 30, 36, 1.7, "#cc834a", "#e1a97d") +
    label(59, 57, "SEN0600", 5.6, "#fff5e5") +
    label(59, 65, "RS-485", 5.6, "#fff5e5") +
    path("M48 73h22m-22 4h18m-18 4h20", "none", "#f1d9c2", 0.65);
}

function adsArt({ pins }, showLabels) {
  const contacts = pins.map(pin => {
    const top = pin.y === 0;
    const x = 30 + (pin.x - 22) * 0.86;
    return moduleHole(pin, x, top ? 17 : 106, showLabels, x, top ? 27 : 96);
  }).join("");
  return qtBoard(5, 5, 140, 114) +
    mountingHole(16, 17) + mountingHole(134, 17) + mountingHole(16, 106) + mountingHole(134, 106) +
    qtPort(15, 61, 90) + qtPort(135, 61, -90) +
    chip(66, 53, 24, 19, "", 5) + chip(71, 77, 13, 10, "", 3) +
    smd(40, 47) + smd(40, 58) + smd(40, 70) + smd(40, 82) + smd(99, 54) +
    circle(29, 40, 2, "#89bc6d", "#d8d09a") +
    label(82, 37, "ADS1115", 11, qtSilk) + label(82, 46, "16-BIT ADC", 6.5, qtSilk) + contacts;
}

function inaArt(component, showLabels) {
  const header = ["VIN", "GND", "SCL", "SDA", "VIN−", "VIN+"].map((caption, index) => {
    const x = 25 + index * 14;
    return pad(x, 80) + label(x, index % 2 === 0 ? 90 : 70, caption, 6.5, qtSilk);
  }).join("");
  const face = qtBoard(0, 0, 120, 96) +
    mountingHole(11, 11) + mountingHole(109, 11) + mountingHole(11, 84) + mountingHole(109, 84) +
    qtPort(8, 49, 90) + qtPort(112, 49, -90) +
    rect(42, 5, 36, 29, 2, "#45946f", "#79b994") +
    rect(44, 9, 32, 21, 1, "#6bb58b") + line(60, 8, 60, 31, "#387b5c") +
    screw(52, 19, 6.7) + screw(68, 19, 6.7) +
    label(31, 10, "VIN−", 7, qtSilk) + label(90, 10, "VIN+", 7, qtSilk) +
    rect(45, 39, 30, 15, 1.2, "#272729", "#aeb0a2") +
    label(60, 47, "R100", 7.4, qtSilk) +
    chip(50, 56, 19, 15, "", 4) + smd(26, 64) + smd(85, 60) +
    label(31, 33, "INA219", 7, qtSilk) + header;
  if (!showLabels) return `<g transform="translate(12 2)">${face}</g>`;

  // The diagram groups logic and shunt pins separately around the physical top view.
  return `<g transform="translate(33 19) scale(0.65)">${face}</g>` +
    rect(5, 15, 26, 74, 2, "#2c3944", "#60747d") +
    rect(115, 31, 24, 37, 2, "#2c3944", "#60747d") +
    edgePads(component, true);
}

function oledArt({ pins }, showLabels) {
  return rect(15, 5, 108, 100, 3, "#173e62") +
    rect(15, 4, 108, 100, 3, "#235e98", "#568bb9") +
    mountingHole(22, 12) + mountingHole(116, 12) + mountingHole(22, 96) + mountingHole(116, 96) +
    rect(25, 26, 88, 65, 1.5, "#20252d", "#839099") +
    rect(28, 31, 82, 48, 1.4, "#111721") +
    rect(31, 34, 76, 42, 0.8, "#17202d") +
    path("M31 34h76v3H31Z", "#26323f") +
    rect(48, 86, 42, 11, 0.7, "#8d6441", "#bd9262") +
    path("M52 86v8m5-8v8m5-8v8m5-8v8m5-8v8m5-8v8m5-8v8m5-8v8", "none", "#d0a46a", 0.7) +
    pins.map((pin, index) => moduleHole(pin, 45 + 16 * index, 11, showLabels, 45 + 16 * index, 21)).join("");
}

function buckArt({ width, height, pins }, showLabels) {
  const caps = [34, 137].map((x, index) =>
    circle(x, 48, 14, "#a9aca9", "#e5e5dc") +
    path(`M${x - 11} 55Q${x} 68 ${x + 11} 55Z`, "#4d5453") +
    label(x, 46, index === 0 ? "100" : "220", 8, "#333839")
  ).join("");
  const contacts = pins.map(pin => {
    const x = pin.x === 0 ? 14 : width - 14;
    const y = pin.y < height / 2 ? 13 : height - 13;
    const textX = pin.x === 0 ? x + 3 : x - 3;
    return moduleHole(pin, x, y, showLabels, textX, y < height / 2 ? y + 10 : y - 10);
  }).join("");
  const regulator = [53, 59, 65, 71, 77].map(x =>
    path(`M${x} 53v6l-1 2v4`, "none", "#bfc2ba", 2.8)
  ).join("") +
    rect(45, 17, 39, 22, 1.5, "#a4aaa7", "#c0c6bf") +
    rect(46, 27, 37, 28, 1.5, "#202528", "#687372") +
    label(64.5, 40, "LM2596", 6.7, "#c6c9bf");
  return board(width, height, "#263947", "#758594") +
    mountingHole(31, 13) + mountingHole(136, 83) + caps +
    regulator + rect(87, 36, 35, 40, 3, "#656a68", "#9c9d94") +
    label(104.5, 56, "470", 13, "#212a28") +
    rect(87, 12, 36, 17, 1.7, "#307bbb", "#69a7d7") + screw(94, 20, 5.7) +
    label(111, 20, "103", 6.4, "#d7e7eb") +
    chip(61, 72, 19, 8, "", 1) + smd(47, 77) + smd(82, 31) + contacts;
}

function connectorArt({ art, width, pins }, showLabels) {
  const leads = pins.map(({ x, y }) => line(x, 49, x, y, "#a58f68", 2)).join("");
  if (art === "header") {
    return leads + pins.map(({ x }) =>
      path(`M${x - 2} 29V15l2-4 2 4v14Z`, "#c1a26b", "#7b6548") +
      path(`M${x - 11} 31l3-3h16l3 3v15l-3 3h-16l-3-3Z`, "#292d35", "#131821") +
      line(x - 7, 31, x + 7, 31, "#626872", 1) +
      rect(x - 2, 48, 4, 9, 0.6, "#ad905d", "#766247")
    ).join("");
  }
  if (art === "jst") {
    const middle = width / 2;
    return leads +
      rect(13, 13, width - 26, 42, 3, "#c8c4b5", "#aaa698") +
      rect(13, 13, width - 26, 36, 3, "#f4efe0", "#b6b1a2") +
      path(`M19 19H${middle - 9}v5h18v-5H${width - 19}v23H19Z`, "#8c8676", "#b7af9d") +
      rect(21, 30, width - 42, 10, 1, "#b7af99") +
      pins.map(({ x }) => rect(x - 2, 26, 4, 12, 0.8, "#c7ad75", "#6e634d")).join("") +
      path("M16 16h5l-5 5Z", "#99917f");
  }
  return leads +
    rect(18, 12, width - 36, 45, 2, "#50765c", "#294c39") +
    rect(18, 12, width - 36, 27, 2, "#79a17d", "#4c7656") +
    pins.map(({ x, label: number }) =>
      screw(x, 25, 8) +
      rect(x - 8, 39, 16, 12, 1.5, "#223f32", "#65856d") +
      rect(x - 5, 42, 10, 5, 0.6, "#6f8177") +
      (showLabels ? label(x, 33, number, 6.5, "#243b2e") : "")
    ).join("");
}

const axialLeads = () => line(0, 16, 96, 16, "#83919a", 2.4) +
  line(2, 15.4, 94, 15.4, "#cbd2d6", 0.7);
const resistor = () => axialLeads() +
  path("M23 16Q23 8 30 8H35L40 9H56L61 8H66Q73 8 73 16Q73 24 66 24H61L56 23H40L35 24H30Q23 24 23 16Z", "#dec398", "#9f7954") +
  path("M26 13Q27 10 31 10H35L40 11H56L61 10H65", "none", "#f2dfb7", 1.2) +
  [[30, "#75462d"], [39, "#b93c36"], [48, "#75462d"], [63, "#b59146"]]
    .map(([x, color]) => rect(x, 9.6, 3.4, 12.8, 0.7, color)).join("");
const radialLeads = () => path("M0 16H30l5 12h7v-6m12 0v6h7l5-12h30", "none", "#7c8c9a", 2.2);
const capacitor = () => radialLeads() + circle(48, 13, 11.5, "#c68b50", "#8d6140") +
  circle(47, 12, 9.4, "#dfa15c") + label(48, 13, "104", 7, "#64492e");
const electrolytic = () => radialLeads() +
  rect(33, 6, 30, 18, 4, "#253c50", "#172b3a") +
  rect(54, 7, 6, 16, 1, "#aab6c0") + label(57, 16, "−", 8, "#32475b") +
  path("M33 7c0-6 30-6 30 0s-30 6-30 0Z", "#b8c3cd", "#7a8d9c") +
  path("M44 5l8 4m0-4-8 4", "none", "#748390", 0.9);
const inductor = () => axialLeads() +
  path("M25 16Q25 8 33 8H63Q71 8 71 16Q71 24 63 24H33Q25 24 25 16Z", "#557858", "#335344") +
  line(32, 10, 64, 10, "#8cab7d", 1.1) +
  [[34, "#795139"], [42, "#232c2c"], [50, "#232c2c"], [61, "#bb9950"]]
    .map(([x, color]) => rect(x, 9.5, 3.1, 13, 0.7, color)).join("");
const ferrite = () => axialLeads() +
  path("M35 10H60Q64 10 64 16Q64 22 60 22H35Z", "#40474b", "#282e33") +
  line(36, 11.4, 60, 11.4, "#666d71", 1.1) +
  path("M35 10C40 10 40 22 35 22C30 22 30 10 35 10Z", "#50575c", "#282e33") +
  circle(34.7, 16, 1.7, "#24292c") + line(28, 16, 34.8, 16, "#a5b0b8", 1.9);
const diode = () => axialLeads() +
  path("M29 16Q29 10 35 10H61Q67 10 67 16Q67 22 61 22H35Q29 22 29 16Z", "#c87646", "#8c523a") +
  path("M32 16H41L45 14H51L54 16H65", "none", "#9f543d", 1.7) +
  line(34, 12.2, 61, 12.2, "#f0ad76", 1.2) +
  rect(35, 10.2, 4.2, 11.6, 0.7, "#33343a");
const led = () => path("M0 16H30l5 12h7v-4m12 0v6h7l5-14h30", "none", "#7c8c9a", 2.1) +
  path("M36 24V14a12 12 0 0 1 24 0v10Z", "#bb3b4d", "#7c2a3d") +
  path("M42 24v-6h8l-3 3v3m7 0v-8l-5 3", "none", "#7e2b3a", 1.7) +
  path("M35 23h26v4H36l-1-1Z", "#9e3645", "#7c2a3d") +
  path("M40 14a7 7 0 0 1 6-7", "none", "#f5a4a0", 1.6);

function transistorArt({ art, pins }, showLabels) {
  const [control, upper, lower] = pins;
  const leadColor = "#8090a0";
  const leads = showLabels
    ? path(`M${control.x} ${control.y}H17V55H39V38`, "none", leadColor, 2) +
      path(`M${upper.x} ${upper.y}H79V49H60Q55 39 50 49H47V38`, "none", leadColor, 2) +
      path(`M55 37V41.5M55 47V${lower.y}H${lower.x}`, "none", leadColor, 2)
    : [39, 47, 55].map((x) => line(x, 38, x, 58, leadColor, 2.1)).join("");
  return leads +
    path("M30 17Q30 8 47 8Q64 8 64 17V34L58 39H36L30 34Z", "#28333c", "#18232c") +
    path("M33 18Q33 11 47 11Q60 11 61 17L57 19H37Z", "#48545b") +
    rect(34, 18, 26, 20, 2, "#343f47", "#26323a") +
    label(47, 28, art === "npn" ? "NPN" : "MOS", 7.5) +
    (showLabels ? pins.map(({ x, y, label: pin }) =>
      label(x === 0 ? 9 : 86, y - 6, pin, 7.5, "#40516a")).join("") : "");
}

function buttonArt() {
  return path("M0 30h15m11-13H15v26h11m70-13H81m-11-13h11v26H70", "none", "#7c8c9a", 2.2) +
    rect(23, 8, 50, 44, 3, "#28363f", "#192229") +
    rect(25, 9, 46, 40, 3, "#aab5bf", "#75838f") +
    [[30, 14], [66, 14], [30, 44], [66, 44]].map(([x, y]) => circle(x, y, 2.5, "#566774")).join("") +
    circle(48, 29, 12.5, "#24333f", "#17232b") +
    circle(47.5, 28.5, 9.5, "#394a57", "#4a5a68");
}

function batteryArt() {
  return line(72, 22, 96, 22, "#ae4346", 2.5) + line(72, 40, 96, 40, "#414a51", 2.5) +
    rect(10, 10, 64, 43, 5, "#29343e", "#14212d") +
    rect(13, 12, 54, 38, 4, "#394650", "#4b5b66") +
    rect(66, 12, 8, 39, 2, "#242e36", "#18242d") +
    rect(70, 18.5, 9, 7, 1.5, "#a7494b", "#6f3338") +
    rect(70, 36.5, 9, 7, 1.5, "#303b44", "#19242d") +
    path("M19 17V45m3-28v28m3-28v28", "none", "#566670", 0.85) +
    label(46, 30.5, "DC", 12) + label(86, 15, "+", 9, "#ab4652") + label(86, 47, "−", 9, "#44556b");
}

const renderers = {
  esp32: moduleArt(espDevKitCArt),
  rs485: rs485Art, bme280: bmeArt, ads1115: adsArt, ina219: inaArt, oled: oledArt, buck: buckArt,
  soil: soilArt, resistor, capacitor, electrolytic, inductor, "ferrite-bead": ferrite, diode, led,
  npn: transistorArt, nmos: transistorArt, button: buttonArt, battery: batteryArt,
  ads1220: drawAds1220, hw0519: drawHw0519, st3215: drawSt3215, ...waveshareArt,
  terminal: connectorArt, header: connectorArt, jst: connectorArt,
  ...heltecSemtechArt, ...espRpArt, ...stmArduinoArt, ...nordicBoardArt, ...nordicArt,
  ...powerArt, ...spXtArt, ...switchMosfetArt,
  ...commonInterfaceArt, ...commonPeripheralArt, ...commonPowerArt, ...commonSensorArt,
};

export function componentArt(component, { labels = true } = {}) {
  const { art, width, height } = component;
  const graphic = renderers[art](component, labels);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" aria-hidden="true">${graphic}</svg>`;
}
