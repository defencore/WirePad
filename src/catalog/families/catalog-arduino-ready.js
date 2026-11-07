import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { chip, circle, label, line, pad, path, rect, smd } from "../shared/svg.js";
import { boardDefinition, contact, gpio, ground, header, reset, supply } from "../shared/board.js";

const blue = "#007c86";
const silk = "#e1eeeb";
const cadBase = "https://docs.arduino.cc/static/";
const numbered = (specs, connector, first = 1, step = 1) => specs.map((spec, index) => [...spec, `${connector}.${first + index * step}`]);
const v33 = (id = "3v3", label = "3V3") => supply(id, label, "Regulated 3.3 V output.", "power_out");
const analog = (index, port, role = "") => gpio(`a${index}`, `A${index}`, `SAMD21 ${port}, 3.3 V analog input.${role ? " " + role : ""}`);
const digital = (index, port, role = "") => gpio(`d${index}`, `D${index}`, `SAMD21 ${port}, 3.3 V GPIO.${role ? " " + role : ""}`);
const aref = contact("aref", "AREF", "SAMD21 PA03 external analog reference.", "input");
const nc = (id, description) => contact(id, "NC", description, "no_connect");

function debugPins(connector, nano) {
  const specs = [
    [...v33("debug-vref", "VTref"), `${connector}.1`],
    [...gpio("swdio", "SWDIO", "SAMD21 PA31 serial-wire debug data. Backside test contact."), `${connector}.2`],
    ...(!nano ? [[...reset("debug-reset", "RST"), `${connector}.3`]] : []),
    [...contact("swclk", "SWCLK", "SAMD21 PA30 serial-wire debug clock. Backside test contact.", "input"), `${connector}.${nano ? 3 : 4}`],
    [...ground("debug-gnd"), `${connector}.5`],
    ...(nano ? [[...reset("debug-reset", "RST"), `${connector}.6`]] : [[...nc("debug-nc", "Unconnected position on the backside SWD pad group."), `${connector}.6`]]),
  ];
  return header(connector, "bottom", nano ? 35 : 40, specs,
    { x: -(specs.length - 1) * 1.27, y: nano ? 27 : 35.75, axis: "x" }, nano ? 41 : 36);
}

const nanoDigital = ["PB23", "PB22", "PB10", "PB11", "PA07", "PA05", "PA04", "PA06", "PA18", "PA20", "PA21", "PA16", "PA19", "PA17"];
const nanoD = [
  digital(0, "PB23", "UART RX."), digital(1, "PB22", "UART TX."),
  ...nanoDigital.slice(2).map((port, index) => digital(index + 2, port, ({ 2: "PWM.", 3: "PWM.", 5: "PWM.", 6: "PWM.", 9: "PWM.", 10: "SPI chip select and PWM.", 11: "SPI COPI/MOSI and PWM.", 12: "SPI CIPO/MISO and PWM.", 13: "SPI clock and built-in LED." })[index + 2])),
];
// The Nano uses the same physical order as the 2020 pinout, with connector numbers from its V2.0 Eagle board.
const nanoLeft = [
  digital(13, "PA17", "SPI clock and built-in LED."), v33(), aref,
  ...["PA02", "PB02", "PA11", "PA10", "PB08", "PB09", "PA09", "PB03"].map((port, index) => analog(index, port,
    ({ 0: "Also DAC0 output.", 4: "I²C SDA.", 5: "I²C SCL." })[index])),
  supply("5v", "5V", "USB VBUS output through the normally open VUSB solder jumper. Bridge the jumper to enable this contact.", "passive"),
  reset(), ground(), supply("vin", "VIN", "External 5–21 V power input."),
];
const nanoRight = [...nanoD.slice(2, 13).reverse(), ground("digital-gnd"), reset("digital-reset"), nanoD[0], nanoD[1]];

const mkrPorts = ["PA22", "PA23", "PA10", "PA11", "PB10", "PB11", "PA20", "PA21", "PA16", "PA17", "PA19", "PA08", "PA09", "PB23", "PB22"];
const mkrRoles = { 0: "PWM.", 1: "PWM.", 2: "PWM.", 3: "PWM.", 4: "PWM.", 5: "PWM.", 6: "PWM.", 7: "PWM.", 8: "SPI COPI/MOSI and PWM.", 9: "SPI clock.", 10: "SPI CIPO/MISO and PWM.", 11: "I²C SDA.", 12: "I²C SCL and PWM.", 13: "UART RX.", 14: "UART TX." };
const mkrDigital = mkrPorts.map((port, index) => digital(index, port, mkrRoles[index]));
const mkrLeft = [aref, ...["PA02", "PB02", "PB03", "PA04", "PA05", "PA06", "PA07"].map((port, index) => analog(index, port, index === 0 ? "Also DAC0 output." : "")), ...mkrDigital.slice(0, 6)];
const mkrRight = [
  supply("5v", "5V", "USB 5 V rail output. Available voltage depends on the board's power path.", "power_out"),
  supply("vin", "VIN", "Regulated 5 V external input. Follow Arduino's power-source and current specifications."),
  v33("3v3", "VCC"), ground(), reset("reset", "RST"),
  ...mkrDigital.slice(6).reverse(),
];

function mkrHeaders(wifi) {
  const leftConnector = wifi ? "J3" : "J4";
  const eslovConnector = wifi ? "J4" : "J7";
  const batteryConnector = wifi ? "J7" : "J2";
  return [
    header(leftConnector, "left", 153, numbered(mkrLeft, leftConnector), { x: -10.16, y: -8.6152 }),
    header("J5", "right", 153, numbered(mkrRight, "J5", 14, -1), { x: 10.16, y: -8.6152 }),
    header(eslovConnector, "top", 30, [
      [...supply("eslov-5v", "5V", "ESLOV connector 5 V supply.", "power_out"), `${eslovConnector}.1`],
      [...gpio("eslov-wake", "WK", "SAMD21 PA21 wake-up line, shared with D7."), `${eslovConnector}.2`],
      [...gpio("eslov-scl", "SCL", "SAMD21 PA09 I²C clock, shared with D12."), `${eslovConnector}.3`],
      [...gpio("eslov-sda", "SDA", "SAMD21 PA08 I²C data, shared with D11."), `${eslovConnector}.4`],
      [...ground("eslov-gnd"), `${eslovConnector}.5`],
    ], { x: -5.08, y: -35.75, axis: "x" }, 27),
    header(batteryConnector, "top", 187, [
      supply("battery", "BAT+", "Single-cell 3.7 V nominal Li-Po battery connection. Observe connector polarity.", "passive"),
      ground("battery-gnd", "BAT−"),
    ], { x: -1, y: -40.75, axis: "x", pitch: 2 }, 32),
    debugPins(wifi ? "J2" : "J8", false),
    ...(wifi ? [header("NINA", "left", 72, [
      [...contact("nina-tck", "TCK", "NINA module JTAG clock on the backside JCLK test pad.", "input"), "JCLK.X"],
      [...contact("nina-tms", "TMS", "NINA module JTAG mode selection on the backside JTMS test pad.", "input"), "JTMS.X"],
      [...contact("nina-tdo", "TDO", "NINA module JTAG data output on the backside JTDO test pad.", "output"), "JTDO.X"],
      [...ground("nina-gnd"), "JGND.X"],
    ], { x: -17.5, y: 10 })] : []),
  ];
}

function microUsb(x, y, width = 30) {
  return path(`M${x + 3} ${y}h${width - 6}l3 3v19h-${width}v-19Z`, "#b2bfc2", "#e4eae7") +
    rect(x + 3, y + 3, width - 6, 5, 2, "#52666b") +
    line(x + 4, y + 14, x + width - 4, y + 14, "#dce4df", 2);
}

function qfp(x, y, size) {
  const legs = Array.from({ length: 8 }, (_, index) => {
    const p = 3 + index * (size - 6) / 7;
    return line(x + p, y - 4, x + p, y + size + 4, "#a5b7b3", 1.5) +
      line(x - 4, y + p, x + size + 4, y + p, "#a5b7b3", 1.5);
  }).join("");
  return legs + rect(x, y, size, size, 1.5, "#192b30", "#506c6d") +
    label(x + size / 2, y + size / 2 - 3, "SAMD21", 6.8, "#a5b8b3") +
    label(x + size / 2, y + size / 2 + 5, "ARM", 5.6, "#a5b8b3");
}

function ninaModule(x, y, width, height) {
  return rect(x, y, width, height, 1, "#267b77", "#9daca1") +
    rect(x + 2, y + 2, width - 4, height - 25, 1.5, "#b0bbb5", "#d7e2d9") +
    label(x + width / 2, y + 18, "u-blox", 7.5, "#67776e") +
    label(x + width / 2, y + 31, "NINA-W102", 6.7, "#67776e") +
    path(`M${x + 7} ${y + height - 7}h${width - 14}v-10h-${width - 22}v6h${width - 31}`, "none", "#8fbdab", 1.3);
}

function holes(x, y, width, height) {
  return [x + 7, x + width - 7].map(hx => circle(hx, y + 7, 4.5, "#f5f5e8", "#b0c6b9") +
    circle(hx, y + height - 7, 4.5, "#f5f5e8", "#b0c6b9")).join("");
}

function sideContacts(x, y, count, pitch, rightX) {
  return Array.from({ length: count }, (_, index) =>
    circle(x, y + index * pitch, 3.8, "#a5b8ac", "#d2d9c3") + circle(x, y + index * pitch, 1.8, blue) +
    circle(rightX, y + index * pitch, 3.8, "#a5b8ac", "#d2d9c3") + circle(rightX, y + index * pitch, 1.8, blue)
  ).join("");
}

function nanoBody({ width }) {
  const x = (width - 106) / 2;
  const y = 42;
  return rect(x, y, 106, 263, 2, blue, "#4c9e9e") + holes(x, y, 106, 263) +
    sideContacts(x + 6, y + 22, 15, 15, x + 100) + microUsb(x + 38, y - 3) +
    rect(x + 43, y + 60, 20, 20, 3, "#a6c4b7", "#d1dbce") + circle(x + 53, y + 70, 4, "#607d75") +
    qfp(x + 36, y + 120, 40) + ninaModule(x + 24, y + 177, 61, 77) +
    chip(x + 20, y + 91, 17, 13, "IMU", 2) + chip(x + 73, y + 87, 11, 14, "", 2) +
    [[32, 39], [75, 40], [26, 51], [30, 108], [77, 111], [29, 164], [76, 166]].map(([px, py]) => smd(x + px, y + py)).join("") +
    label(x + 53, y + 33, "NANO 33 IoT", 6.6, silk);
}

function mkrBody({ width }, wifi) {
  const x = (width - 145) / 2;
  const y = 47;
  const battery = rect(x + 1, y + 64, 30, 59, 2, "#dfe6db", "#abbfb5") +
    rect(x + 3, y + 69, 11, 48, 1, "#78928c") + rect(x + 28, y + 69, 5, 48, 0, "#c2d1c5");
  const eslov = rect(x + 114, y + 36, 29, 36, 1.5, "#e1e9dd", "#9bb6ad") +
    [0, 1, 2, 3, 4].map(i => rect(x + 120, y + 41 + i * 5.7, 17, 2.5, 0, "#9eb6aa")).join("");
  const media = wifi ? ninaModule(x + 38, y + 218, 72, 80)
    : rect(x + 28, y + 234, 87, 65, 2, "#b0bcba", "#dfe8e1") +
      rect(x + 30, y + 284, 83, 13, 1, "#909f9c") + line(x + 40, y + 290, x + 103, y + 290, "#4b615d", 2.5);
  return rect(x, y, 145, 308, 11, blue, "#4d9a9a") + holes(x, y, 145, 308) +
    sideContacts(x + 7, y + 111, 14, 13.1, x + 138) + microUsb(x + 56, y - 4, 33) + battery + eslov +
    (wifi ? qfp(x + 18, y + 27, 23) : chip(x + 18, y + 29, 18, 15, "", 3)) +
    rect(x + 62, y + 96, 20, 20, 3, "#a5c7b6", "#d8e5d9") + circle(x + 72, y + 106, 4.2, "#567d6c") +
    qfp(x + 58, y + 165, 42) + media +
    [[54, 39], [67, 39], [84, 39], [81, 71], [51, 82], [41, 139], [99, 149], [33, 198], [38, 218]].map(([px, py]) => smd(x + px, y + py)).join("") +
    label(x + 72.5, y + 133, wifi ? "MKR WiFi 1010" : "MKR ZERO", 8.5, silk) +
    label(x + 72.5, y + 147, "ARDUINO", 7.6, silk);
}

// Backside service positions come from Arduino's exact Eagle revisions linked below.
// The small rear PCB is mirrored across its short axis, keeping USB at the top.
const nanoRear = { "1": [39.2684, 6.35], "2": [41.8084, 6.35], "3": [39.2684, 8.89], "5": [39.2684, 11.43], "6": [41.8084, 11.43] };
const mkrRear = { "1": [27.39, 10.2775], "2": [27.39, 14.7225], "3": [24.85, 10.2775], "4": [24.85, 14.7225], "5": [22.31, 10.2775], "6": [22.31, 14.7225] };
const ninaRear = { "JCLK.X": [50.5, 13.135], "JTMS.X": [50.5, 10.595], "JTDO.X": [50.5, 11.865], "JGND.X": [50.5, 9.325] };

function rearPoint(component, physical) {
  const nano = component.id === "arduino-nano-33-iot";
  const scale = nano ? 2 : 1.6;
  return { x: (nano ? 12 : 10) + ((nano ? 17.78 : 25) - physical[1]) * scale, y: (nano ? 196 : 170) + physical[0] * scale, view: "back" };
}

function wiringArt(component, body, showLabels) {
  const nano = component.id === "arduino-nano-33-iot";
  const rearX = nano ? 12 : 10, rearY = nano ? 196 : 170;
  const rearWidth = nano ? 35.56 : 40, rearHeight = nano ? 88 : 98.4;
  const rear = rect(rearX, rearY, rearWidth, rearHeight, 3, "#24696f", "#72a7a3") +
    rect(rearX + rearWidth / 2 - 5, rearY - 2, 10, 8, 1, "#b3c0bf", "#d9e3dc") +
    label(rearX + rearWidth / 2, rearY - 10, "BACK", 6.5, "#34475a");
  const terminals = component.pins.map(pin => {
    if (pin.view === "back") return circle(pin.x, pin.y, 1.6, "#d3bd78", "#eef0db") +
      (showLabels ? label(pin.x + 3.5, pin.y, pin.number.split(".").at(-1), 3.5, "#e9f1ee", "start") : "");
    const vertical = pin.edge === "left" || pin.edge === "right";
    const before = pin.edge === "left" || pin.edge === "top";
    const direction = before ? 1 : -1;
    return pad(pin.x, pin.y) + (showLabels ? label(pin.x + (vertical ? direction * 7 : 0), pin.y + (vertical ? 0 : direction * 9), pin.label, 6.1,
      "#e9f1ee", vertical ? (before ? "start" : "end") : "middle") : "");
  }).join("");
  return body(component) + rear + terminals;
}

function readyBoard(options, headers, size, drawBody, details) {
  const definition = boardDefinition({
    ...options, art: options.id, manufacturer: "Arduino", category: "Microcontrollers", referencePrefix: "U",
    tags: ["arduino", "samd21", "development board", ...options.tags],
  }, headers, {
    body: size, color: blue, details,
    note: `${options.revision} reference carrier. Main header coordinates and numbering follow Arduino's Eagle CAD. Battery, ESLOV and backside SWD contacts use separate off-board cable terminations; their positions are a wiring reference. Check the selected connector, board clearances and 3.3 V logic before fabrication.`,
  }, drawBody);
  const nano = options.id === "arduino-nano-33-iot";
  const component = physicalComponent(definition.component, pin => {
    const [connector, number] = pin.number.split(".");
    const debug = nano ? connector === "J4" : connector === (options.id === "arduino-mkr-zero" ? "J8" : "J2");
    if (debug) return rearPoint(definition.component, (nano ? nanoRear : mkrRear)[number]);
    if (ninaRear[pin.number]) return rearPoint(definition.component, ninaRear[pin.number]);
    if (nano) return [pin.edge === "left" ? (options.width - 106) / 2 + 6 : (options.width - 106) / 2 + 100, 64 + (Number(number) - (pin.edge === "left" ? 1 : 15)) * (pin.edge === "left" ? 15 : -15)];
    const x = (options.width - 145) / 2;
    if (pin.id === "battery" || pin.id === "battery-gnd") return [x + 28, pin.id === "battery" ? 119 : 129];
    if (pin.id.startsWith("eslov-")) return [x + 128.5, 111.05 - (Number(number) - 1) * 5.7];
    return [pin.edge === "left" ? x + 7 : x + 138, 158 + (pin.edge === "left" ? Number(number) - 1 : 14 - Number(number)) * 13.1];
  });
  return { ...definition, component, art: (component, showLabels = true) => wiringArt(component, drawBody, showLabels) };
}

const nano = readyBoard({
  id: "arduino-nano-33-iot", name: "Arduino Nano 33 IoT", shortName: "Nano 33 IoT", width: 240, height: 349,
  subtitle: "ABX00027 / SAMD21 + Wi-Fi", tags: ["wifi", "ble", "nina-w102", "imu", "nano"],
  description: "Arduino ABX00027 matching the NANO33IoT V2.0 CAD. Includes SAMD21, NINA-W102 wireless module, IMU and Micro-B USB. Uses 3.3 V GPIO. The 5 V header contact requires the backside VUSB solder jumper to be closed.",
  revision: "NANO33IoT V2.0, 17.78 × 44.00 mm",
  source: "https://docs.arduino.cc/hardware/nano-33-iot/",
}, [
  header("JP2", "left", 50, numbered(nanoLeft, "JP2"), { x: -7.62, y: -18.19 }),
  header("JP3", "right", 50, numbered(nanoRight, "JP3", 15, -1), { x: 7.62, y: -18.19 }),
  debugPins("J4", true),
], [17.78, 44], nanoBody, [[0, 12, 10, 14, 2.5, "#acbab1"], [0, -20, 7.5, 5.5, 2.5, "#afbec1"]]);

const zero = readyBoard({
  id: "arduino-mkr-zero", name: "Arduino MKR Zero", shortName: "MKR Zero", width: 260, height: 410,
  subtitle: "ABX00012 / SAMD21 + microSD", tags: ["mkr", "microsd", "audio", "i2s", "lipo"],
  description: "Arduino ABX00012 matching the MKRZero V5.0 CAD. SAMD21 board with Micro-B USB, Li-Po charging, ESLOV connector and a microSD slot on its dedicated SPI bus. Uses 3.3 V GPIO and MKR expansion headers.",
  revision: "MKRZero V5.0, 25.00 × 61.50 mm",
  source: "https://docs.arduino.cc/hardware/mkr-zero/",
}, mkrHeaders(false), [25, 61.5], c => mkrBody(c, false), [[0, 23, 15, 13, 2.3, "#a7b7b7"], [0, -28, 7.5, 5.5, 2.5, "#aebec1"]]);

const wifi = readyBoard({
  id: "arduino-mkr-wifi-1010", name: "Arduino MKR WiFi 1010", shortName: "MKR WiFi 1010", width: 260, height: 410,
  subtitle: "ABX00023 / SAMD21 + Wi-Fi", tags: ["mkr", "wifi", "ble", "nina-w102", "lipo"],
  description: "Arduino ABX00023 matching the MKRWiFi1010 V2.0 CAD. SAMD21 board with a NINA-W102 module, ECC508 security chip, Li-Po power management and ESLOV connector. Uses 3.3 V GPIO and MKR expansion headers.",
  revision: "MKRWiFi1010 V2.0, 25.00 × 61.50 mm",
  source: "https://docs.arduino.cc/hardware/mkr-wifi-1010/",
}, mkrHeaders(true), [25, 61.5], c => mkrBody(c, true), [[0, 21, 10, 14, 2.5, "#acbab1"], [0, -28, 7.5, 5.5, 2.5, "#aebec1"]]);

const entries = [nano, zero, wifi];
const arduinoReadyComponents = entries.map(entry => entry.component);
const arduinoReadyArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const arduinoReadyFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const arduinoReadyModels = {
  "arduino-nano-33-iot": { label: "Arduino NANO33IoT V2.0 Eagle CAD", url: `${cadBase}4e6a15042b3a677671c7fa7e924b336a/ABX00027-cad-files.zip` },
  "arduino-mkr-zero": { label: "Arduino MKRZero V5.0 Eagle CAD", url: `${cadBase}62d0584cfc27ddb5904b2221bf7b5610/ABX00012-cad-files.zip` },
  "arduino-mkr-wifi-1010": { label: "Arduino MKRWiFi1010 V2.0 Eagle CAD", url: `${cadBase}696878518f486c07e1a416ecd44c3729/ABX00023-cad-files.zip` },
};

export default defineFamily("arduino-ready", (arduinoReadyComponents).map(component => ({ component, render: (arduinoReadyArt)[component.art], footprint: (arduinoReadyFootprints)[component.id], model: arduinoReadyModels[component.id] })));
