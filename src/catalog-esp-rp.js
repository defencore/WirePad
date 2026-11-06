import { board, chip, circle, label, line, moduleArt, mountingHole, path, pinRow, rect, smd, tactile, usb } from "./catalog-extension.js";

const espDocs = "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3";
const seeedS3 = "https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/";
const seeedRp = "https://wiki.seeedstudio.com/XIAO-RP2040/";
const ground = (id = "gnd", label = "GND", text = "Power and signal ground.") => [id, label, text, "power_in"];
const input = (id, label, text) => [id, label, text, "input"];
const supply = (id, label, text) => [id, label, text, "power_in"];
const output = (id, label, text) => [id, label, text, "power_out"];
const rail = (id, label, text) => [id, label, text, "passive"];
const bidirectional = (id, label, text) => [id, label, text, "bidirectional"];
const number = (pin, terminal) => [...pin, String(terminal)];
const numbered = (pins, first, step = 1) => pins.map((pin, i) => number(pin, first + i * step));

function gpio(n, label = `IO${n}`, text = "", id = `gpio${n}`) {
  return bidirectional(id, label, `3.3 V GPIO${n}.${text ? ` ${text}` : ""}`);
}

function rpGpio(n, label = `GP${n}`, text = "") {
  const analog = n >= 26 ? ` ADC input ${n - 26}.` : "";
  return bidirectional(`gp${n}`, label, `3.3 V GPIO${n}.${analog}${text ? ` ${text}` : ""}`);
}

function espGpio(n, label = `IO${n}`, text = "") {
  const analog = n >= 1 && n <= 10 ? ` ADC1 channel ${n - 1} and touch input.`
    : n >= 11 && n <= 14 ? ` ADC2 channel ${n - 11} and touch input.`
    : n >= 15 && n <= 20 ? ` ADC2 channel ${n - 11}.` : "";
  const strap = [0, 3, 45, 46].includes(n) ? " Boot strapping pin." : "";
  return bidirectional(`gpio${n}`, label, `3.3 V GPIO${n}.${analog}${strap}${text ? ` ${text}` : ""}`);
}

function row(side, pins, { start = 23, gap = 15, prefix = "", x, y, pitch = 2.54, size, drill, smd: surface } = {}) {
  return {
    side, pins, start, gap, prefix,
    footprint: { ids: pins.map(pin => pin[0]), axis: side === "left" || side === "right" ? "y" : "x", x, y, pitch, size, drill, smd: surface },
  };
}

function carrierRow(side, pins, x, y, options = {}) {
  return row(side, pins, { ...options, x, y });
}

function makeBoard(options, rows, draw, footprint) {
  const { id, width, height } = options;
  const component = {
    category: "Microcontrollers", art: id, referencePrefix: "U", ...options,
    pins: rows.flatMap(({ side, start, gap, pins, prefix }) => pinRow(side, width, height, start, gap, pins, prefix)),
  };
  return {
    component,
    art: moduleArt(draw),
    footprint: { ...footprint, groups: rows.map(r => r.footprint).filter(({ x, y }) => Number.isFinite(x) && Number.isFinite(y)) },
  };
}

function microUsb(x, y, width = 28) {
  return rect(x, y, width, 15, 2, "#a8b2b9", "#e2e8eb") +
    rect(x + 3, y + 8, width - 6, 5, 2, "#303a46") + line(x + 7, y + 11, x + width - 7, y + 11, "#89979e");
}

function antenna(x, y, w, h) {
  return rect(x, y, w, h, 3, "#19242b", "#53626a") +
    path(`M${x + 5} ${y + h - 5} V${y + 5} h8 v${h - 10} h8 v-${h - 10} h8 v${h - 10} h8`, "none", "#b08b52", 1.7);
}

const espDevKitM = makeBoard({
  id: "esp32-s3-devkitm-1", name: "ESP32-S3 DevKitM-1", shortName: "DevKitM-1",
  manufacturer: "Espressif", subtitle: "MINI-1 / dual USB", tags: ["esp32", "esp32-s3", "usb", "usb otg", "devkit", "wifi", "ble"],
  description: "Espressif revision 1.0 development kit with the ESP32-S3-MINI-1 module, native USB and a separate USB-to-UART port. Its header order differs from DevKitC-1.",
  source: `${espDocs}/esp32-s3-devkitm-1/user_guide.html`, width: 150, height: 374,
}, [
  carrierRow("left", [
    rail("3v3", "3V3", "3.3 V rail. Use this or the 5 V input or USB as the power source."),
    ...Array.from({ length: 19 }, (_, i) => espGpio(i, String(i), ({ 0: "BOOT button.", 15: "UART0 RTS.", 16: "UART0 CTS.", 17: "UART1 TX.", 18: "UART1 RX." })[i])),
    rail("5v", "5V", "5 V rail. Can power the board as an alternative to USB or the 3.3 V rail."), ground(),
  ], -11.43, -29.97, { start: 19, prefix: "J1." }),
  carrierRow("right", [
    ground("gnd-2"), input("rst", "RST", "ESP32-S3 enable. Pull low to reset."),
    espGpio(46, "46"), espGpio(45, "45"), espGpio(44, "RX", "UART0 RX."), espGpio(43, "TX", "UART0 TX."),
    ...[42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 26, 21, 20, 19, 48, 47].map(n => espGpio(n, String(n), ({
      42: "JTAG MTMS.", 41: "JTAG MTDI.", 40: "JTAG MTDO.", 39: "JTAG MTCK.",
      20: "Native USB D+.", 19: "Native USB D-.", 48: "Shared with the on-board RGB LED.",
    })[n])),
  ], 11.43, -29.97, { start: 19, prefix: "J3." }),
], ({ width, height }) =>
  board(width, height, "#26323e", "#465767") +
  antenna(42, 24, 66, 31) +
  rect(40, 54, 70, 78, 5, "#b5c1c5", "#e3e8e9") +
  rect(44, 59, 62, 68, 4, "#cbd1d1", "#92a1a6") +
  label(75, 86, "ESP32-S3", 9, "#364453") + label(75, 101, "MINI-1", 8, "#425263") +
  chip(56, 207, 38, 44, "UART", 7) + smd(49, 163) + smd(88, 173) + smd(89, 264) +
  circle(60, 176, 4.1, "#77d4ae", "#caeee3") + label(75, 282, "DEVKITM-1", 9) +
  tactile(42, 310) + tactile(93, 310) + label(51, 333, "BOOT", 6) + label(99, 333, "RST", 6) +
  microUsb(37, 348, 31) + microUsb(83, 348, 31) + label(53, 370, "UART", 6) + label(100, 370, "USB", 6), {
  body: [25.4, 62.74], color: "#26323e", details: [[0, -20, 15.4, 15.4, 2.4, "#b5c1c5"], [-6.4, 28.5, 7.5, 5.5, 2.5, "#a8b2b9"], [6.4, 28.5, 7.5, 5.5, 2.5, "#a8b2b9"]],
  note: "Revision 1.0 reference carrier from the Espressif 62.74 × 25.40 mm drawing. Rows are 22.86 mm apart at 2.54 mm pitch. Check antenna and USB overhang clearance.",
});

const zeroTop = [
  espGpio(16, "16", "Front auxiliary solder pad."),
  espGpio(15, "15", "Front auxiliary solder pad."),
  espGpio(14, "14", "Front auxiliary solder pad."),
];
const zeroBack = [45, 42, 41, 40, 39, 38, 18, 17].map(n => espGpio(n, String(n), "Rear auxiliary solder pad."));

const espZero = makeBoard({
  id: "waveshare-esp32-s3-zero", name: "Waveshare ESP32-S3-Zero", shortName: "ESP32-S3-Zero",
  manufacturer: "Waveshare", subtitle: "18 × 23.5 mm / USB-C", tags: ["esp32", "esp32-s3", "usb", "wifi", "ble", "castellated"],
  description: "Compact ESP32-S3FH4R2 module with 4 MB flash, 2 MB PSRAM and native USB-C. The drawing includes the front and rear solder pads. GPIO21 drives the on-board RGB LED.",
  source: "https://docs.waveshare.com/ESP32-S3-Zero", width: 150, height: 240,
}, [
  carrierRow("left", [
    supply("5v", "5V", "External supply input, 3.7 to 6 V per Waveshare. USB-C is an alternative source."),
    ground(), output("3v3", "3V3", "Regulated 3.3 V output."), ...[1, 2, 3, 4, 5, 6].map(n => espGpio(n, String(n))),
  ], -7.62, -10.16, { start: 23, gap: 14, prefix: "L." }),
  carrierRow("right", [
    espGpio(43, "TX", "Default UART0 TX."), espGpio(44, "RX", "Default UART0 RX."),
    ...[13, 12, 11, 10, 9, 8, 7].map(n => espGpio(n, String(n))),
  ], 7.62, -10.16, { start: 23, gap: 14, prefix: "R." }),
  carrierRow("right", zeroTop, 13, 5.7, { start: 184, gap: 17, prefix: "F." }),
  carrierRow("left", zeroBack, 5.37, -2.96, { start: 153, gap: 11, prefix: "B.", pitch: 1.59, size: 1.43, smd: true }),
], ({ width, height }) =>
  board(width, height, "#174675", "#3c6b9b") +
  usb(55, 6, 40) + tactile(37, 36) + tactile(97, 36) +
  chip(51, 66, 49, 52, "ESP32-S3", 7) + smd(37, 60) + smd(103, 65) + smd(104, 99) +
  circle(75, 42, 3.5, "#84d6ba", "#bdede0") + rect(51, 132, 48, 13, 2, "#b1a387", "#d6c8ad") +
  label(75, 165, "S3-ZERO", 8) + label(73, 197, "REAR", 7, "#9ac7e3") + label(78, 215, "FRONT", 7, "#9ac7e3"), {
  body: [18, 23.5], color: "#174675", details: [[0, -8.4, 8.5, 5.5, 3.3, "#a8b2b9"], [0, 0, 7, 7, 1.5, "#273041"]],
  note: "Reference carrier for the 18 × 23.5 mm ESP32-S3-Zero. Side headers use 2.54 mm pitch and rear test-pad positions follow the drawing. The separate row outside the outline terminates individual wires to the three front solder pads. Verify clearances and leave the antenna exposed.",
});

const picoLeft = numbered([
  rpGpio(0, "GP0", "Default UART0 TX."), rpGpio(1, "GP1", "Default UART0 RX."), ground("gnd-3"),
  rpGpio(2), rpGpio(3), rpGpio(4), rpGpio(5), ground("gnd-8"),
  rpGpio(6), rpGpio(7), rpGpio(8), rpGpio(9), ground("gnd-13"),
  rpGpio(10), rpGpio(11), rpGpio(12), rpGpio(13), ground("gnd-18"), rpGpio(14), rpGpio(15),
], 1);

const picoRight = numbered([
  rail("vbus", "VBUS", "USB bus voltage, normally 5 V when USB is connected."),
  supply("vsys", "VSYS", "Main system supply input, 1.8 to 5.5 V. See the power-chain guidance before using an external supply with USB."),
  ground("gnd-38"), input("3v3-en", "3V3_EN", "Regulator enable. Pull low to disable 3.3 V output."),
  output("3v3", "3V3", "Regulated 3.3 V output."), supply("adc-vref", "ADC_VREF", "ADC reference node. The board derives it from 3.3 V through a filter."),
  rpGpio(28), ground("agnd", "AGND", "Analog ground reference for the ADC."), rpGpio(27), rpGpio(26),
  input("run", "RUN", "RP2040 run control. Pull low to reset."), rpGpio(22), ground("gnd-28"),
  rpGpio(21), rpGpio(20), rpGpio(19), rpGpio(18), ground("gnd-23"), rpGpio(17), rpGpio(16),
], 40, -1);

const picoDebug = [
  input("swclk", "SWCLK", "Serial Wire Debug clock from the debugger."),
  ground("gnd-swd"), bidirectional("swdio", "SWDIO", "Serial Wire Debug data."),
];

function picoBoard(wireless) {
  return makeBoard({
    id: wireless ? "raspberry-pi-pico-w" : "raspberry-pi-pico", name: wireless ? "Raspberry Pi Pico W" : "Raspberry Pi Pico",
    shortName: wireless ? "Pico W" : "Pico", manufacturer: "Raspberry Pi",
    subtitle: wireless ? "RP2040 / Wi-Fi and BLE" : "RP2040 / 40-pin board", tags: ["rp2040", "pico", "micro usb", ...(wireless ? ["wifi", "ble", "pico wh"] : ["pico h"])],
    description: wireless
      ? "RP2040 board with CYW43439 wireless, 26 exposed GPIOs and Serial Wire Debug. Pico WH has the same 40-pin I/O arrangement with factory-fitted headers and a debug socket."
      : "Original RP2040 board with 26 exposed GPIOs, Micro USB and Serial Wire Debug. Pico H has the same 40-pin I/O arrangement with factory-fitted headers and a debug socket.",
    source: wireless ? "https://datasheets.raspberrypi.com/picow/PicoW-A4-Pinout.pdf" : "https://datasheets.raspberrypi.com/pico/Pico-R3-A4-Pinout.pdf",
    width: 146, height: 345,
  }, [
    carrierRow("left", picoLeft, -8.89, -24.13, { start: 18 }),
    carrierRow("right", picoRight, 8.89, -24.13, { start: 18 }),
    carrierRow("bottom", picoDebug, wireless ? 0.5841 : -2.54, wireless ? 5.7 : 24.13, {
      start: 35, gap: 38, prefix: "SWD.", size: wireless ? 1.5748 : 1.6, drill: 1, smd: wireless,
    }),
  ], ({ width, height }) =>
    board(width, height, "#126b51", "#459b7c") +
    [40, 106].map(x => mountingHole(x, 28) + mountingHole(x, 315)).join("") +
    microUsb(52, 5, 42) + circle(44, 45, 3.5, "#c8d976", "#e0eda5") +
    tactile(46, 65) + label(80, 72, "BOOTSEL", 6) + chip(51, 131, 44, 43, "RP2040", 7) +
    smd(43, 105) + smd(98, 109) + smd(96, 199) + smd(44, 214) +
    (wireless
      ? rect(45, 233, 56, 42, 3, "#a9b8ad", "#d2ded5") + label(73, 252, "CYW43439", 7, "#364a42") + antenna(44, 279, 58, 17)
      : label(73, 235, "RASPBERRY", 8, "#d6ebe1") + label(73, 254, "PI PICO", 10, "#e5f3e9")) +
    label(73, 320, wireless ? "PICO W" : "DEBUG", 7), {
    body: [21, 51], color: "#126b51", details: [[0, -22, 8, 6, 2.8, "#a8b2b9"], [0, -3, 7, 7, 1, "#273041"], ...(wireless ? [[0, 13, 11, 12, 1.9, "#b4c2b9"]] : [])],
    note: wireless
      ? "Pico W 40-pin carrier at 2.54 mm pitch and 17.78 mm between rows. The separate SWD pads match Pico W. Check access to the fitted connector when using Pico WH. Leave the board antenna clear."
      : "Pico 40-pin carrier at 2.54 mm pitch and 17.78 mm between rows. The debug row follows the exposed pads on the original Pico. Check debug connector access when using Pico H.",
  });
}

const pico = picoBoard(false);
const picoW = picoBoard(true);

const xiaoPower = [
  rail("vbus", "5V", "USB VBUS; 5 V from USB or external power according to the board's power rules."),
  ground(), output("3v3", "3V3", "On-board 3.3 V regulator output."),
];

const xiaoS3Left = [1, 2, 3, 4, 5, 6, 43].map((n, i) =>
  gpio(n, `D${i}`, ["Analog A0.", "Analog A1.", "Analog A2 and boot strapping.", "Analog A3.", "I²C SDA and analog A4.", "I²C SCL and analog A5.", "UART0 TX."][i]));

const xiaoS3Right = [
  ...xiaoPower,
  gpio(9, "D10", "SPI MOSI and analog A10."),
  gpio(8, "D9", "SPI MISO and analog A9."),
  gpio(7, "D8", "SPI SCK and analog A8."),
  gpio(44, "D7", "UART0 RX."),
];

const xiaoRpLeft = [
  ...[26, 27, 28, 29].map((n, i) => rpGpio(n, `D${i}`, `Board alias A${i}.`)),
  rpGpio(6, "D4", "I²C0 SDA."), rpGpio(7, "D5", "I²C0 SCL."), rpGpio(0, "D6", "UART0 TX."),
];

const xiaoRpRight = [
  ...xiaoPower,
  rpGpio(3, "D10", "SPI0 MOSI."), rpGpio(4, "D9", "SPI0 MISO."),
  rpGpio(2, "D8", "SPI0 SCK."), rpGpio(1, "D7", "UART0 RX."),
];

const jtagMtck = "JTAG MTCK.";
const jtagMtdo = "JTAG MTDO.";
const jtagMtdi = "JTAG MTDI.";
const jtagMtms = "JTAG MTMS.";
const rearUsb = (plus) => [
  bidirectional("usb-minus", "D−", `Rear USB D− pad connected to the USB-C data pair.${plus ? "" : " Used for USB programming."}`),
  bidirectional("usb-plus", "D+", `Rear USB D+ pad connected to the USB-C data pair.${plus ? "" : " Used for USB programming."}`),
];
const rearBatPlus = supply("bat-plus", "BAT+", "Positive lead for a protected single-cell lithium battery. Follow the vendor's charging guidance.");
const rearBatMinus = ground("bat-minus", "BAT−", "Battery return.");
const resetS3 = input("en", "EN", "ESP32-S3 CHIP_PU. Pull low to reset.");
const resetRp = input("run", "RST", "RP2040 RUN. Pull low to reset.");
const swclk = input("swclk", "SWCLK", "Serial Wire Debug clock.");
const swdio = bidirectional("swdio", "SWDIO", "Serial Wire Debug data.");

const xiaoS3Rear = [
  gpio(41, "MTDI", jtagMtdi), gpio(40, "MTDO", jtagMtdo),
  resetS3, ground("gnd-debug"), gpio(42, "MTMS", jtagMtms), gpio(39, "MTCK", jtagMtck),
  ...rearUsb(false), rearBatPlus, rearBatMinus,
];
const xiaoRpRear = [
  swdio, swclk, resetRp, ground("gnd-debug"),
  supply("vin-pad", "VIN", "Rear external power pad. Use 5 V and follow the manufacturer's USB power guidance."),
  ground("gnd-rear"),
];

const s3PlusExtraLeft = [
  gpio(38, "D11", "I²S data."), gpio(39, "D12", `I²S clock. ${jtagMtck}`), gpio(40, "D13", `I²S word select. ${jtagMtdo}`),
  gpio(41, "D14", `PDM data. ${jtagMtdi}`), gpio(42, "D15", `PDM clock. ${jtagMtms}`), gpio(10, "D16", "ADC1 input."),
];
const s3PlusExtraRight = [
  gpio(11, "D19", "SPI1 MOSI and ADC2 input."), gpio(12, "D18", "SPI1 MISO and ADC2 input."), gpio(13, "D17", "SPI1 SCK and ADC2 input."),
];
const s3PlusRear = [
  gpio(41, "MTDI", `${jtagMtdi} Same net as D14.`, "jtag-mtdi"),
  gpio(40, "MTDO", `${jtagMtdo} Same net as D13.`, "jtag-mtdo"),
  resetS3, ground("gnd-debug"),
  gpio(42, "MTMS", `${jtagMtms} Same net as D15.`, "jtag-mtms"),
  gpio(39, "MTCK", `${jtagMtck} Same net as D12.`, "jtag-mtck"),
  ...rearUsb(true), rearBatPlus, rearBatMinus,
];

const rpPlusExtraLeft = [5, 13, 14, 15, 16, 17].map((n, i) => rpGpio(n, `D${19 + i}`, "Half-pitch castellated edge pad."));
const rpPlusExtraRight = [8, 9, 10].map((n, i) => rpGpio(n, `D${27 - i}`, "Half-pitch castellated edge pad."));
const rpPlusRearGpio = [
  number(rpGpio(18, "D12", "Rear breakout pad."), 25),
  number(rpGpio(21, "D13", "Rear breakout pad. I²C1 SCL."), 26),
  number(rpGpio(20, "D14", "Rear breakout pad. I²C1 SDA."), 27),
  number(rpGpio(19, "D15", "Rear breakout pad."), 28),
  number(rpGpio(22, "D16", "Rear breakout pad."), 29),
  number(rpGpio(23, "D17", "Rear breakout pad."), 30),
];
const rpPlusRearDebug = [
  swdio, swclk, resetRp, ground("gnd-debug"), ...rearUsb(true),
  input("boot", "BOOT", "RP2040 QSPI chip select. Follow the board guide when using this bootloader pad."),
  output("3v3-rear", "3V3", "Rear access to the regulated 3.3 V rail."),
  rearBatPlus, rearBatMinus,
];

function smdPads(specs, coords) {
  return specs.map(([id], index) => {
    const [x, y, size = 1.7] = coords[index];
    return { id, x, y, size, smd: true };
  });
}

const xiaoS3RearCoords = [
  [-1.28, -8.632], [1.26, -8.632], [-1.28, -6.092], [1.26, -6.092],
  [-1.28, -3.552], [1.26, -3.552], [-1.28, -1.012], [1.26, -1.012],
  [-4.455, -0.382, [2.5, 1.1]], [-4.455, -2.287, [2.5, 1.1]],
];
const xiaoRpRearCoords = [
  [-1.153, -8.378], [1.387, -8.378], [-1.153, -5.838], [1.387, -5.838],
  [-1.153, 8.64, [1.1, 2.5]], [1.387, 8.64, [1.1, 2.5]],
];
const s3PlusRearCoords = [
  [-1.27, -8.636], [1.27, -8.636], [-1.27, -6.096], [1.27, -6.096],
  [-1.27, -3.556], [1.27, -3.556], [-1.27, -1.016], [1.27, -1.016],
  [-0.993988, 5.517823, [1.1, 2.5]], [1.006012, 5.517823, [1.1, 2.5]],
];
const rpPlusRearCoords = [
  [-1.24, -8.66], [1.3, -8.6727], [-1.24, -6.12], [1.3, -6.1327],
  [-1.24, -3.5927], [1.3, -3.5927], [-1.24, -1.0527], [1.3, -1.0527],
  [-1, 5.039611, [1.1, 2.5]], [1, 5.039611, [1.1, 2.5]],
];
const rpPlusGpioCoords = [[5.03, -1.31], [5.03, 1.23], [5.03, 3.77], [-5.13, 3.77], [-5.13, 1.23], [-5.13, -1.31]];

function xiaoBoard({ esp, plus, sense = false }) {
  const platform = esp ? "ESP32-S3" : "RP2040";
  const suffix = plus ? " Plus" : sense ? " Sense" : "";
  const left = numbered(esp ? xiaoS3Left : xiaoRpLeft, 1);
  const right = numbered(esp ? xiaoS3Right : xiaoRpRight, 14, -1);
  const rear = esp ? (plus ? numbered(s3PlusRear, 24) : numbered(xiaoS3Rear, 15))
    : (plus ? [...rpPlusRearGpio, ...numbered(rpPlusRearDebug, 32)] : numbered(xiaoRpRear, 15));
  const rearCoords = esp ? (plus ? s3PlusRearCoords : xiaoS3RearCoords)
    : (plus ? [...rpPlusGpioCoords, ...rpPlusRearCoords] : xiaoRpRearCoords);
  const canvasGap = plus ? 24 : 15;
  const canvasHeight = plus ? 332 : esp ? 234 : 213;
  const sideSize = plus ? [2.032, 0.95] : [2.75, 2];
  const rows = [
    carrierRow("left", left, plus ? -8.255 : -8.065, -7.62, { gap: canvasGap, size: sideSize, smd: true }),
    carrierRow("right", right, plus ? 8.255 : 8.1, -7.62, { gap: canvasGap, size: sideSize, smd: true }),
  ];
  const extraPads = plus ? [
    ...smdPads(numbered(esp ? s3PlusExtraLeft : rpPlusExtraLeft, 15),
      Array.from({ length: 6 }, (_, index) => [-8.655, -6.35 + index * 2.54, [1.232, 0.95]])),
    ...smdPads(numbered(esp ? s3PlusExtraRight : rpPlusExtraRight, 21),
      [6.35, 3.81, 1.27].map(y => [8.655, y, [1.232, 0.95]])),
  ] : [];
  if (plus) {
    rows.push(row("left", numbered(esp ? s3PlusExtraLeft : rpPlusExtraLeft, 15), { start: 35, gap: 24 }));
    rows.push(row("right", numbered(esp ? s3PlusExtraRight : rpPlusExtraRight, 21).reverse(), { start: 107, gap: 24 }));
  }
  const mid = Math.ceil(rear.length / 2);
  const rearStart = plus ? 207 : 145;
  rows.push(row("left", rear.slice(0, mid), { start: rearStart, gap: 14 }));
  rows.push(row("right", rear.slice(mid), { start: rearStart, gap: 14 }));

  return makeBoard({
    id: `seeed-xiao-${esp ? "esp32-s3" : "rp2040"}${plus ? "-plus" : sense ? "-sense" : ""}`,
    name: `Seeed XIAO ${platform}${suffix}`, shortName: `XIAO ${platform}${suffix}`,
    manufacturer: "Seeed Studio", subtitle: `${platform} / ${plus ? "expanded I/O" : sense ? "camera and microphone" : "compact USB-C"}`,
    tags: ["seeed", "xiao", "usb", "castellated", esp ? "esp32" : "rp2040", ...(esp ? ["wifi", "ble"] : [])],
    description: sense
      ? "Compact ESP32-S3 board with the Sense camera, microphone and microSD expansion. The side and rear pads follow the base XIAO pinout. The expansion shares D8, D9 and D10 for microSD and GPIO41/42 for PDM audio."
      : `Compact ${platform} board with native USB-C, ${plus ? "extra castellated I/O and rear contact pads" : "castellated headers and rear contact pads"}. ${esp || plus ? "Includes a single-cell battery connection." : "Rear VIN and GND provide access to board power."}`,
    source: esp ? seeedS3 : seeedRp, width: 156, height: canvasHeight,
  }, rows, ({ width, height }) =>
    board(width, rearStart - 15, "#292d31", "#5d6268") +
    rect(7, rearStart - 13, width - 14, height - rearStart + 9, 5, "#24303b", "#5d6268") +
    usb(56, 6, 44) +
    rect(50, 35, 56, plus ? 110 : 78, 5, "#c3c3bd", "#e4e5e0") +
    rect(54, 39, 48, plus ? 102 : 70, 3, "#deded9", "#9b9d97") +
    (sense ? rect(66, 44, 24, 22, 3, "#313a46", "#667782") + circle(78, 55, 6, "#171d26", "#839cab") : "") +
    label(78, sense ? 76 : 65, "SEEED", 8, "#344450") + label(78, sense ? 92 : 83, "XIAO", 11, "#344450") +
    (plus ? label(78, 117, "PLUS", 8, "#344450") : "") +
    (esp ? circle(57, plus ? 166 : 123, 6, "#ddcba2", "#f4e9c8") : tactile(52, plus ? 159 : 117)) +
    smd(93, plus ? 165 : 123) + label(78, rearStart - 2, "REAR PADS", 8, "#abbbc2"), {
    body: [17.8, 21], color: "#292d31", details: [[0, -9, 8.9, 6.4, 3.1, "#a8b2b9"], [0, 1, 11, 12, 1.5, "#c3c3bd"]],
    pads: [...smdPads(rear, rearCoords), ...extraPads],
    note: `Reference carrier aligned to Seeed's ${plus ? "Plus" : "standard"} SMD footprint. Rear pads and any additional castellated pads are included. Check carrier clearances and mating-connector height against the actual board.`,
  });
}

const xiaoS3 = xiaoBoard({ esp: true });
const xiaoS3Sense = xiaoBoard({ esp: true, sense: true });
const xiaoS3Plus = xiaoBoard({ esp: true, plus: true });
const xiaoRp = xiaoBoard({ esp: false });
const xiaoRpPlus = xiaoBoard({ esp: false, plus: true });

const otgJ5 = [
  output("3v3", "3V3", "3.3 V output on the expansion header."),
  ground(), espGpio(39, "MTCK", jtagMtck), espGpio(40, "MTDO", jtagMtdo),
  espGpio(41, "MTDI", jtagMtdi), espGpio(42, "MTMS", jtagMtms),
  espGpio(45), espGpio(46), espGpio(48), espGpio(26), espGpio(47), espGpio(3),
  ground("gnd-13"), ground("gnd-14"),
];
const otgRows = [0, 1].map(parity =>
  numbered(otgJ5, 1).filter((_, index) => index % 2 === parity).reverse().map(pin => number(pin.slice(0, 4), `J5.${pin[4]}`)));

const espUsbOtg = makeBoard({
  id: "esp32-s3-usb-otg", name: "ESP32-S3-USB-OTG", shortName: "ESP32-S3 USB OTG",
  manufacturer: "Espressif", subtitle: "USB host, device and debug", tags: ["esp32", "esp32-s3", "usb", "usb host", "lcd", "wifi", "ble"],
  description: "Espressif USB-OTG motherboard with USB-A host and device ports, a separate Micro USB serial-debug port, a 1.3-inch LCD daughterboard and microSD. The exposed J5 expansion and battery contacts are represented.",
  source: `${espDocs}/esp32-s3-usb-otg/user_guide.html`, width: 358, height: 190,
}, [
  carrierRow("top", otgRows[1], -12.39, -9.55, { start: 67, gap: 35 }),
  carrierRow("bottom", otgRows[0], -12.39, -7.01, { start: 67, gap: 35 }),
  carrierRow("left", [number(rearBatMinus, "PAD1.2"), number(rearBatPlus, "PAD1.1")], -30.1, 8.18, { start: 133, gap: 18, smd: true, size: 1.7 }),
], ({ width, height }) =>
  board(width, height, "#283b4b", "#587281") +
  [29, 330].map(x => mountingHole(x, 25) + mountingHole(x, 162)).join("") +
  rect(4, 58, 48, 59, 3, "#aeb9bf", "#e3e8e9") + rect(305, 56, 49, 62, 3, "#aeb9bf", "#e3e8e9") +
  rect(8, 65, 20, 45, 3, "#65767f") + rect(328, 63, 20, 48, 3, "#273744") +
  label(78, 85, "DEVICE", 8) + label(283, 85, "HOST", 8) +
  rect(125, 40, 107, 102, 6, "#131d26", "#647f8b") + rect(132, 47, 93, 87, 4, "#132d3b", "#284b58") +
  label(178, 76, "ESP32-S3", 11, "#92d8cf") + label(178, 98, "USB OTG", 11, "#93d6e5") +
  label(178, 118, "1.3-inch LCD", 7, "#92a9b3") +
  tactile(96, 114) + tactile(247, 114) + smd(83, 60) + smd(259, 60) +
  microUsb(271, 146, 30) + label(286, 143, "DEBUG", 6) + label(178, 151, "J5 EXPANSION", 7), {
  body: [65, 32], color: "#283b4b", details: [[0, 0, 29, 23, 3.8, "#182733"], [-30, 0, 14, 12, 5.5, "#adb9be"], [30, 0, 14, 13, 6.3, "#adb9be"], [21, 15, 8, 4.8, 2.4, "#adb9be"]],
  note: "Reference carrier uses the Espressif 65 × 32 mm board outline and 2.54 mm J5 expansion/test pad array. Verify pad clearances, USB overhang and the rear battery solder connection before fabrication.",
});

const adafruitCad = "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main";
const featherS3Source = "https://learn.adafruit.com/adafruit-esp32-s3-feather/pinouts";
const featherRpSource = "https://learn.adafruit.com/adafruit-feather-rp2040-pico/pinouts";
const qtpyS3Source = "https://learn.adafruit.com/adafruit-qt-py-esp32-s3/pinouts";
const qtpyRpSource = "https://learn.adafruit.com/adafruit-qt-py-2040/pinouts";

const featherReset = input("rst", "RST", "Active-low reset input. Pull to ground to reset the board.");
const feather3v3 = output("3v3", "3V3", "Regulated 3.3 V output.");
const feather3v3B = output("3v3-2", "3V3", "Second contact on the regulated 3.3 V output.");
const featherBat = rail("bat", "BAT", "Positive connection of the JST-PH battery jack and the single-cell charger.");
const featherEnable = input("en", "EN", "3.3 V regulator enable. Pull to ground to turn off the regulator.");
const featherVbus = rail("usb", "USB", "USB bus voltage. Approximately 5 V with a USB source connected.");

const featherS3Left = [
  featherReset, feather3v3, feather3v3B, ground(),
  ...[18, 17, 16, 15, 14, 8].map((n, i) => espGpio(n, `A${i}`, `Board analog input A${i}.`)),
  espGpio(36, "SCK", "SPI clock."), espGpio(35, "MOSI", "SPI controller output."), espGpio(37, "MISO", "SPI controller input."),
  espGpio(38, "RX", "Default board UART RX."), espGpio(39, "TX", "Default board UART TX."),
  espGpio(43, "TXD0", "Separate UART0 debug output."),
];
const featherS3Right = [
  featherBat, featherEnable, featherVbus,
  ...[13, 12, 11, 10, 9, 6, 5].map(n => espGpio(n, `D${n}`)),
  espGpio(4, "SCL", "I²C clock. Also present on the STEMMA QT connector."),
  espGpio(3, "SDA", "I²C data. Also present on the STEMMA QT connector."),
];
const featherRpLeft = [
  featherReset, feather3v3, feather3v3B, ground(),
  ...[26, 27, 28, 29].map((n, i) => rpGpio(n, `A${i}`, `Board analog input A${i}.`)),
  rpGpio(24, "D24", "Secondary I²C0 SDA."), rpGpio(25, "D25", "Secondary I²C0 SCL."),
  rpGpio(18, "SCK", "SPI0 clock."), rpGpio(19, "MOSI", "SPI0 controller output."), rpGpio(20, "MISO", "SPI0 controller input."),
  rpGpio(1, "RX", "UART0 RX."), rpGpio(0, "TX", "UART0 TX."), rpGpio(6, "D4", "Board alias D4."),
];
const featherRpRight = [
  featherBat, featherEnable, featherVbus,
  ...[13, 12, 11, 10, 9, 8, 7].map((n, i) => rpGpio(n, `D${[13, 12, 11, 10, 9, 6, 5][i]}`)),
  rpGpio(3, "SCL", "I²C1 clock. Also present on the STEMMA QT connector."),
  rpGpio(2, "SDA", "I²C1 data. Also present on the STEMMA QT connector."),
];

function shSocket(x, y, width = 32) {
  return rect(x, y, width, 13, 2, "#d6d8ce", "#f1f1ec") + rect(x + 4, y + 4, width - 8, 6, 1, "#69716d");
}

function featherBoard(esp) {
  return makeBoard({
    id: esp ? "adafruit-feather-esp32-s3" : "adafruit-feather-rp2040",
    name: esp ? "Adafruit Feather ESP32-S3" : "Adafruit Feather RP2040",
    shortName: esp ? "Feather ESP32-S3" : "Feather RP2040", manufacturer: "Adafruit",
    subtitle: esp ? "Wi-Fi / STEMMA QT / LiPo" : "RP2040 / STEMMA QT / LiPo",
    tags: esp ? ["esp32", "esp32-s3", "feather", "usb", "wifi", "ble"] : ["rp2040", "feather", "usb"],
    description: esp
      ? "Feather-format ESP32-S3 with native USB-C, LiPo charging and STEMMA QT. Covers the shared header map of the 8 MB flash and 4 MB flash/2 MB PSRAM versions."
      : "Feather-format RP2040 with native USB-C, LiPo charging and STEMMA QT. CircuitPython D4, D5 and D6 correspond to GP6, GP7 and GP8.",
    source: esp ? featherS3Source : featherRpSource, width: 154, height: 298,
  }, [
    carrierRow("left", numbered(esp ? featherS3Left : featherRpLeft, 1), -10.16, -19.05, { start: 39 }),
    carrierRow("right", numbered(esp ? featherS3Right : featherRpRight, 28, -1), 10.16, -8.89, { start: 99 }),
  ], ({ width, height }) =>
    board(width, height, "#282f36", "#57656d") +
    [28, 126].map(x => mountingHole(x, 23) + mountingHole(x, 277)).join("") +
    usb(57, 5, 40) + tactile(43, 57) + smd(89, 38) +
    rect(92, 49, 36, 27, 3, "#d7d7cd", "#efeee5") + rect(99, 54, 23, 16, 1, "#777b71") +
    shSocket(60, esp ? 100 : 277, 34) +
    (esp
      ? rect(46, 153, 62, 82, 5, "#c9cecc", "#e0e4e3") + label(77, 183, "ESP32-S3", 9, "#445460") + antenna(46, 228, 62, 25)
      : chip(55, 149, 44, 43, "RP2040", 6) + tactile(67, 234) + label(77, 208, "FEATHER", 9)) +
    smd(49, 122) + smd(93, 129) + circle(77, 83, 3, "#e1b876", "#f3e2b8"), {
    body: [22.86, 50.8], color: "#282f36", details: [[0, -22.5, 9, 6, 3, "#a8b2b9"], [7, -13.5, 8, 6, 4.5, "#d7d7cd"], [0, 9, esp ? 15 : 7, esp ? 17 : 7, esp ? 2 : 1.3, esp ? "#c9cecc" : "#273041"]],
    note: "Reference Feather carrier. The two headers use 2.54 mm pitch and 20.32 mm between rows. The STEMMA QT and battery connectors are accessible through their corresponding header signals. Verify connector and antenna clearances.",
  });
}

const qtpyEspLeft = [
  espGpio(18, "A0", "Board analog input A0."),
  espGpio(17, "A1", "Board analog input A1."),
  espGpio(9, "A2", "Board analog input A2."),
  espGpio(8, "A3", "Board analog input A3."),
  espGpio(7, "SDA", "Primary I²C data on the edge pad."),
  espGpio(6, "SCL", "Primary I²C clock on the edge pad."),
  espGpio(5, "TX", "Default board UART TX."),
];
const qtpyPower = [
  rail("vbus", "5V", "USB 5 V rail. Use an external isolation diode when powering the board through this pad."),
  ground(), output("3v3", "3V3", "On-board 3.3 V regulator output."),
];
const qtpyEspRight = [
  ...qtpyPower,
  espGpio(35, "MOSI", "SPI controller output."), espGpio(37, "MISO", "SPI controller input."),
  espGpio(36, "SCK", "SPI clock."), espGpio(16, "RX", "Default board UART RX."),
];
const qtpyRpLeft = [
  ...[29, 28, 27, 26].map((n, i) => rpGpio(n, `A${i}`, `Board analog alias A${i}.`)),
  rpGpio(24, "SDA", "Primary I²C0 data on the edge pad."),
  rpGpio(25, "SCL", "Primary I²C0 clock on the edge pad."),
  rpGpio(20, "TX", "Default UART1 TX."),
];
const qtpyRpRight = [
  ...qtpyPower, rpGpio(3, "MOSI", "SPI0 controller output."),
  rpGpio(4, "MISO", "SPI0 controller input."),
  rpGpio(6, "SCK", "SPI0 clock."), rpGpio(5, "RX", "Default UART1 RX."),
];

function qtpyBoard(esp) {
  const qt = [
    ground("qt-gnd"), output("qt-3v3", "3V3", "3.3 V supply on the STEMMA QT connector."),
    esp ? espGpio(41, "SDA1", "Secondary I²C data on the STEMMA QT connector.") : rpGpio(22, "SDA1", "Secondary I²C1 data on the STEMMA QT connector."),
    esp ? espGpio(40, "SCL1", "Secondary I²C clock on the STEMMA QT connector.") : rpGpio(23, "SCL1", "Secondary I²C1 clock on the STEMMA QT connector."),
  ];
  const qtpyBattery = [number(rearBatMinus, "BAT.−"), number(supply("bat-plus", "BAT+", "Rear external battery input. The board's diode-protected input supports 3 to 6 V per Adafruit."), "BAT.+")];
  const color = esp ? "#4c3476" : "#313239";
  return makeBoard({
    id: esp ? "adafruit-qt-py-esp32-s3" : "adafruit-qt-py-rp2040",
    name: esp ? "Adafruit QT Py ESP32-S3" : "Adafruit QT Py RP2040",
    shortName: esp ? "QT Py ESP32-S3" : "QT Py RP2040", manufacturer: "Adafruit", subtitle: "Compact USB-C / dual I²C",
    tags: esp ? ["esp32", "esp32-s3", "qt py", "stemma qt", "usb", "wifi", "ble"] : ["rp2040", "qt py", "stemma qt", "usb"],
    description: esp
      ? "Compact ESP32-S3 board with native USB-C, 14 edge contacts and independent STEMMA QT I²C pins. The edge map applies to the 4 MB/2 MB PSRAM and 8 MB variants."
      : "Compact RP2040 board with native USB-C and independent STEMMA QT I²C pins. Its analog alias order is A0 at GP29 through A3 at GP26.",
    source: esp ? qtpyS3Source : qtpyRpSource, width: 158, height: 169,
  }, [
    carrierRow("left", numbered(esp ? qtpyEspLeft : qtpyRpLeft, 1), -7.62, -7.62, { start: 38, gap: 15, size: 1.778, drill: 1 }),
    carrierRow("right", numbered(esp ? qtpyEspRight : qtpyRpRight, 14, -1), 7.62, -7.62, { start: 38, gap: 15, size: 1.778, drill: 1 }),
    carrierRow("bottom", qt, -3.81, 14.1, { start: 27, gap: 34, prefix: "QT." }),
    ...(esp ? [carrierRow("top", qtpyBattery, -1.905, -8.5725, { start: 32, gap: 94, pitch: 3.81, smd: true, size: [1, 3] })] : []),
  ], ({ width, height }) =>
    board(width, height, color, esp ? "#8a69b1" : "#606875") + usb(57, 5, 44) +
    tactile(41, 50) + tactile(103, 55) + chip(58, 67, 42, 41, esp ? "ESP32-S3" : "RP2040", 6) +
    circle(79, 43, 4, "#ded380", "#f5e9ae") + smd(50, 113) + smd(100, 112) +
    label(79, 119, "QT PY", 8) + shSocket(61, 130, 36), {
    body: [17.78, 20.701], color, details: [[0, -8.1, 9, 6, 3, "#a8b2b9"], [0, 8.3, 6.1, 4.2, 2.7, "#d6d8ce"]],
    note: "Reference carrier for the fourteen 2.54 mm-pitch side contacts. The QT pads outside the board outline are a separate cable-termination row for the JST-SH connector.",
  });
}

const featherS3 = featherBoard(true);
const featherRp = featherBoard(false);
const qtpyS3 = qtpyBoard(true);
const qtpyRp = qtpyBoard(false);

const metroEsp32S3 = makeBoard({
  id: "adafruit-metro-esp32-s3", name: "Adafruit Metro ESP32-S3", shortName: "Metro ESP32-S3",
  manufacturer: "Adafruit", subtitle: "Rev B / Uno-format headers",
  tags: ["esp32", "esp32-s3", "metro", "arduino shield", "wifi", "ble", "usb", "microsd", "stemma qt"],
  description: "Rev B full-size ESP32-S3 board with 16 MB flash, 8 MB PSRAM, Uno-format headers, native USB-C, microSD and a LiPo charger. Its GPIO and shield logic operate at 3.3 V.",
  source: "https://learn.adafruit.com/adafruit-metro-esp32-s3/pinouts", width: 236, height: 302,
}, [
  carrierRow("left", numbered([
    output("ioref", "IOREF", "Fixed 3.3 V shield logic reference."), featherReset, feather3v3,
    output("vhi", "VHI", "5 V supply output with USB or DC power. Tracks the battery voltage when running from battery alone."),
    ground("power-gnd-1"), ground("power-gnd-2"),
    output("vin", "VIN", "Output from whichever is higher, the DC barrel jack input or the 5 V USB supply."),
  ], 2), -24.13, -3.81, { start: 90, gap: 13, prefix: "POWER." }),
  carrierRow("left", [14, 15, 16, 17, 18, 1].map((n, i) => espGpio(n, `A${i}`, `Board analog input A${i}.`)),
    -24.13, 16.51, { start: 204, gap: 13, prefix: "AD." }),
  carrierRow("right", [
    espGpio(48, "SCL", "I²C clock, also available on the STEMMA QT connector."),
    espGpio(47, "SDA", "I²C data, also available on the STEMMA QT connector."),
    output("aref", "AREF", "Fixed 3.3 V on this board."), ground("digital-gnd"),
    ...[13, 12, 11, 10, 9, 8].map(n => espGpio(n, `D${n}`, n === 13 ? "Also drives the on-board red LED." : "")),
  ], 24.13, -15.494, { start: 46, gap: 13, prefix: "IOH." }),
  carrierRow("right", [
    ...[7, 6, 5, 4, 3, 2].map(n => espGpio(n, `D${n}`)),
    espGpio(41, "RX/D0", "Default shield UART RX. Shared with JTAG MTDI."),
    espGpio(40, "TX/D1", "Default shield UART TX. Shared with JTAG MTDO."),
  ], 24.13, 11.43, { start: 183, gap: 13, prefix: "IOL." }),
  carrierRow("top", [number(espGpio(43, "TXD0", "Separate hardware UART0 debug TX."), "JP2.1")],
    7.366, -22.098, { start: 94, drill: 1 }),
  carrierRow("top", [number(espGpio(44, "RXD0", "Separate hardware UART0 debug RX."), "JP2.2")],
    7.366, -19.558, { start: 134, drill: 1 }),
  carrierRow("bottom", [
    number(input("icsp-rst", "RST", "Active-low reset input on the ICSP header."), "ICSP.5"),
    number(espGpio(39, "SCK", "SPI clock shared with microSD and the JTAG header."), "ICSP.3"),
    number(espGpio(21, "MISO", "SPI controller input shared with microSD."), "ICSP.1"),
  ], -1.27, 29.083, { start: 18, gap: 28, drill: 0.9 }),
  carrierRow("bottom", [
    number(ground("icsp-gnd"), "ICSP.6"),
    number(espGpio(42, "MOSI", "SPI controller output shared with microSD and the JTAG header."), "ICSP.4"),
    number(output("icsp-vhi", "VHI", "Power output tied to VHI on the shield header."), "ICSP.2"),
  ], -1.27, 31.623, { start: 102, gap: 28, drill: 0.9 }),
  carrierRow("bottom", [
    number(ground("bat-minus", "BAT−", "Battery return on the JST-PH socket."), "X1.1"),
    number(rail("bat-plus", "BAT+", "Positive contact of the 3.7 V single-cell LiPo socket and on-board charger."), "X1.2"),
  ], 15.383, 38, { start: 186, gap: 32, pitch: -2.54 }),
], ({ width, height }) =>
  board(width, height, "#28313a", "#576773") +
  mountingHole(30, 57) + mountingHole(198, 38) + mountingHole(40, 270) + mountingHole(151, 270) +
  rect(30, 5, 41, 42, 4, "#282b30", "#64686d") + rect(35, 5, 31, 12, 2, "#171a1d", "#64686d") +
  usb(157, 5, 40) + shSocket(168, 67, 26) + tactile(181, 40) +
  antenna(68, 43, 73, 28) + rect(67, 68, 76, 63, 4, "#b4bec1", "#d8e0e2") +
  label(105, 102, "ESP32-S3", 10, "#3e4a55") + smd(155, 90) + smd(64, 151) +
  label(115, 158, "ADAFRUIT", 8, "#acbbc7") + label(115, 177, "METRO", 15) + label(115, 192, "REV B", 7) +
  tactile(154, 196) + circle(161, 139, 4, "#acde83", "#ebefbe") +
  rect(66, 224, 46, 46, 3, "#a0adb4", "#ccd4d8") + label(89, 251, "microSD", 8, "#27333d") +
  shSocket(151, 244, 31), {
  body: [53.34, 68.58], color: "#28313a",
  details: [[-21, -28, 9, 13, 11, "#282b30"], [11.43, -29.21, 9, 7, 3.1, "#a8b2b9"],
    [-10, -22, 19, 20, 2.9, "#b4bec1"], [-10.16, 25.02, 13, 11, 2.2, "#a0adb4"]],
  note: "Rev B reference carrier from Adafruit's Eagle board. It includes connected shield header positions, ICSP and UART debug. The battery pair outside the outline terminates a JST-PH cable. JTAG and STEMMA QT signals are also available on the shown contacts. Verify shield voltage and connector clearances.",
});

const boards = [
  espDevKitM, espUsbOtg, metroEsp32S3, espZero, xiaoS3, xiaoS3Sense, xiaoS3Plus, qtpyS3, featherS3,
  pico, picoW, xiaoRp, xiaoRpPlus, qtpyRp, featherRp,
];
export const espRpComponents = boards.map(({ component }) => component);
export const espRpArt = Object.fromEntries(boards.map(({ component, art }) => [component.art, art]));
export const espRpFootprints = Object.fromEntries(boards.map(({ component, footprint }) => [component.id, footprint]));
export const espRpModels = {
  "waveshare-esp32-s3-zero": {
    label: "Waveshare ESP32-S3-Zero STEP model",
    url: "https://files.waveshare.com/wiki/ESP32-S3-Zero/ESP32-S3-Zero_v2-138eb3753cf14afa3252058c380ca416.stp",
  },
  "raspberry-pi-pico": { label: "Raspberry Pi Pico STEP model", url: "https://pip.raspberrypi.com/documents/RP-008311-DS" },
  "raspberry-pi-pico-w": { label: "Raspberry Pi Pico W STEP model", url: "https://pip.raspberrypi.com/documents/RP-008318-DS" },
  "seeed-xiao-esp32-s3": {
    label: "Seeed XIAO ESP32-S3 CAD files", url: "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip",
  },
  "seeed-xiao-esp32-s3-sense": {
    label: "Seeed XIAO ESP32-S3 Sense CAD files", url: "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip",
  },
  "seeed-xiao-esp32-s3-plus": { label: "Seeed XIAO ESP32-S3 Plus CAD resources", url: `${seeedS3}#for-seeed-studio-xiao-esp32-s3-plus` },
  "seeed-xiao-rp2040": { label: "Seeed XIAO RP2040 CAD files", url: "https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip" },
  "adafruit-qt-py-esp32-s3": { label: "Adafruit QT Py ESP32-S3 CAD files", url: `${adafruitCad}/5426%20QT%20Py%20ESP32-S3` },
  "adafruit-qt-py-rp2040": { label: "Adafruit QT Py RP2040 CAD files", url: `${adafruitCad}/4900%20QTPy%20RP2040` },
  "adafruit-feather-esp32-s3": { label: "Adafruit Feather ESP32-S3 CAD files", url: `${adafruitCad}/5323%20Feather%20ESP32-S3` },
  "adafruit-feather-rp2040": { label: "Adafruit Feather RP2040 CAD files", url: `${adafruitCad}/4884%20Feather%20RP2040` },
};
