import { defineFamily } from "../registry.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { chip, circle, label, line, mountingHole, pad, path, pinRow, rect, screw, smd } from "../shared/svg.js";
import { waveshareBmmMounting } from "../shared/waveshare-bmm-mounting.js";

const pcb = "#225289";
const pcbEdge = "#5787af";
const silk = "#e8f0f3";
const copper = "#c8ac74";
const ink = "#34475a";

function headerContact(x, y) {
  return rect(x - 4.5, y - 4.5, 9, 9, 0.8, "#232c36", "#82919d") +
    rect(x - 1.5, y - 1.5, 3, 3, 0.3, copper);
}

function sideContact(pin, showLabels, textX, anchor = "start", color = silk) {
  return (showLabels ? label(textX, pin.y - 0.5, pin.label, 7.5, color, anchor) : "");
}

function rtcArt({ pins }, showLabels) {
  const bus = pins.filter(pin => pin.edge === "left").map(pin =>
    sideContact(pin, showLabels, 37) + headerContact(29, pin.y) + headerContact(252, pin.y)
  ).join("");
  const clock = pins.filter(pin => pin.edge === "top").map(pin =>
    headerContact(pin.x, pin.y) + (showLabels ? label(pin.x, 13, pin.label, 7.4, ink) : "")
  ).join("");
  return path("M26 23H269L277 31V93L271 101H25L19 95V30Z", pcb, pcbEdge) +
    rect(23, 33, 13, 57, 1, "#222a33", "#9daab3") +
    rect(257, 32, 23, 58, 1, "#202a35", "#6e8090") +
    chip(82, 48, 32, 30, "8563", 4) +
    smd(64, 47) + smd(64, 59) + smd(80, 89) +
    rect(130, 32, 14, 43, 6, "#bfc4bf", "#e8e8dc") +
    line(134, 37, 134, 71, "#71796f", 1.2) +
    line(140, 37, 140, 71, "#71796f", 1.2) +
    circle(189, 61, 32, "#d2bb46", "#e4d775") +
    circle(189, 61, 28.5, "#bfc3bc", "#e3e5df") +
    path("M188 32L201 35L193 86L178 87Z", "#a8aca7", "#dadbd4") +
    line(186, 92, 189, 84, "#d5dbd4", 4) + label(174, 59, "+", 11, "#858d86") +
    [86, 100, 114].map(x => headerContact(x, 92)).join("") +
    rect(79, 85, 29, 13, 1.4, "#dab13f", "#f0d983") +
    rect(83, 90, 19, 3, 0.6, "#67532b") +
    label(123, 89, "BAT", 6.4) + label(70, 90, "V", 7) +
    label(226, 94, "PCF8563", 8.3) + bus + clock;
}

const rtc = {
  id: "waveshare-pcf8563-rtc-board",
  name: "Waveshare PCF8563 RTC Board",
  shortName: "PCF8563 RTC Board",
  category: "Interfaces",
  subtitle: "I²C calendar / CR1220 / clock and alarm",
  description: "Waveshare SKU 3707 with parallel I²C connectors, a CR1220 cell, and clock/interrupt outputs. The power jumper selects VCC or the battery. I²C pull-ups are connected to VCC.",
  tags: ["rtc", "clock", "calendar", "i2c", "pcf8563", "cr1220", "3707"],
  source: "https://www.waveshare.com/wiki/PCF8563_RTC_Board",
  width: 291, height: 112,
  pins: [
    ...pinRow("left", 291, 112, 41, 14, [
      ["vcc", "VCC", "3.3 V or 5 V input for the I²C pull-ups and the V power-jumper setting.", "power_in"],
      ["gnd", "GND", "Power and signal return.", "power_in"],
      ["sda", "SDA", "I²C serial data. The parallel connector carries the same signal.", "bidirectional"],
      ["scl", "SCL", "I²C serial clock input.", "input"],
    ], "P3."),
    ...pinRow("top", 291, 112, 88, 31, [
      ["clkout", "OUT", "Programmable open-drain clock output. Use an external pull-up.", "open_collector", "H1.2"],
      ["int", "INT", "Active-low open-drain alarm or timer interrupt. Use an external pull-up.", "open_collector", "H1.1"],
    ]),
  ],
  draw: rtcArt,
  footprint: {
    body: [47, 15], color: pcb,
    note: "Photo-based reference carrier for the PCF8563 RTC Board. The two I²C headers repeat the same four electrical terminals. All header locations and the outline are approximate.",
    groups: [
      { ids: ["vcc", "gnd", "sda", "scl"], axis: "y", x: -21, y: -3.81 },
      { ids: ["vcc", "gnd", "sda", "scl"], axis: "y", x: 20, y: -3.81 },
      { ids: ["clkout", "int"], x: -11.7, y: -6.1 },
    ],
    details: [[-10, 0, 5, 5, 1.8, "#293440"], [7, 0, 12.2, 12.2, 3.5, "#c0c4bd"]],
  },
};

const rs232Ttl = [
  ["vcc", "VCC", "3.0–5.5 V supply. Match the host UART logic voltage.", "power_in"],
  ["gnd", "GND", "Supply and TTL signal return.", "power_in"],
  ["rxout", "RxOUT", "TTL receiver output to the host RX input. Receives from DB9 pin 3.", "output"],
  ["txin", "TxIN", "TTL transmitter input from the host TX output. Drives DB9 pin 2.", "input"],
  ["cts", "CTS", "TTL clear-to-send output to the host. Receives the remote RTS signal on DB9 pin 7.", "output"],
  ["rts", "RTS", "TTL request-to-send input from the host. Drives the remote CTS signal on DB9 pin 8.", "input"],
];
const db9Specs = [
  ["db9-1", "1 NC", "DB9 contact 1 is unconnected on the documented board.", "no_connect"],
  ["db9-2", "2 TX", "RS-232 output from TxIN, intended for the remote RX input.", "output"],
  ["db9-3", "3 RX", "RS-232 input to RxOUT, from the remote TX output.", "input"],
  ["db9-4", "4 NC", "DB9 contact 4 is unconnected on the documented board.", "no_connect"],
  ["db9-gnd", "5 GND", "RS-232 signal ground. Common with UART ground and the DB9 shell.", "passive"],
  ["db9-6", "6 NC", "DB9 contact 6 is unconnected on the documented board.", "no_connect"],
  ["db9-7", "7 RTS", "RS-232 input carrying the remote RTS signal to the TTL CTS output.", "input"],
  ["db9-8", "8 CTS", "RS-232 output carrying the TTL RTS signal to the remote CTS input.", "output"],
  ["db9-9", "9 NC", "DB9 contact 9 is unconnected on the documented board.", "no_connect"],
];

function rs232Art({ pins }, showLabels) {
  const ttl = pins.filter(pin => pin.edge === "left").map(pin =>
    sideContact(pin, showLabels, 34) + headerContact(25, pin.y)
  ).join("");
  const serial = rect(262, 48, 50, 48, 9, "#b9c3c2", "#526367") +
    path("M267 56H307L302 87H272Z", "#283b43", "#e1e7df") +
    pins.filter(pin => pin.edge === "right").map((pin, index) =>
      circle(pin.x, pin.y, 2.1, "#d7d2b6") + circle(pin.x, pin.y, 1.3, "#18262d") + (showLabels ? label(pin.x, pin.y + (index < 5 ? -7 : 7), String(index + 1), 5.7, ink) : "")
    ).join("") + label(286, 105, "DB9 socket face", 5.8, ink);
  return rect(18, 12, 204, 146, 6, pcb, pcbEdge) +
    [30, 168].map(x => screw(x, 25, 7) + screw(x, 145, 7)).join("") +
    label(96, 27, "RS232", 15) +
    chip(87, 69, 57, 38, "SP3232", 8) +
    [73, 147].map(x => [56, 69, 110, 122].map(y => smd(x, y)).join("")).join("") +
    smd(105, 49) + smd(126, 49) + smd(105, 118) + smd(126, 118) +
    label(104, 139, "3V–5.5V / ESD", 7.2) +
    rect(189, 15, 40, 141, 2, "#25292f", "#69777f") +
    rect(222, 10, 8, 150, 1, "#a7afb1", "#e3e7e4") +
    path("M230 45H241Q251 49 251 59V113Q249 124 240 126H230Z", "#adb4b5", "#e8e9e3", 1.4) +
    line(239, 50, 239, 121, "#dce2df", 2.5) +
    rect(229, 17, 20, 12, 2, "#b8bdb6", "#e0e2dc") +
    rect(229, 141, 20, 12, 2, "#b8bdb6", "#e0e2dc") +
    label(244, 34, "DB9", 7.2, ink) + ttl + serial;
}

const rs232 = {
  id: "waveshare-rs232-board",
  name: "Waveshare RS232 Board",
  shortName: "RS232 Board",
  category: "Interfaces",
  subtitle: "SP3232 / DB9 / RTS and CTS",
  description: "Waveshare SKU 3965, marked 03271A-03, with a six-contact TTL header and a DB9 female socket. Numbered DB9 contacts sit directly on the separately labeled female socket mating face beside the component-side view.",
  tags: ["rs232", "rs-232", "uart", "serial", "sp3232", "db9", "rts", "cts", "3965"],
  source: "https://www.waveshare.com/wiki/RS232_Board",
  width: 319, height: 171,
  pins: [
    ...pinRow("left", 319, 171, 56, 13, rs232Ttl, "H3."),
    ...pinRow("right", 319, 171, 24, 15, db9Specs, "DB1."),
  ],
  draw: rs232Art,
  footprint: {
    body: [43.69, 31.37], color: pcb,
    note: "Reference carrier for the UART header and off-board DB9 cable contacts. The PCB outline and UART-header offset follow Waveshare's drawing. DB9 lands are a logical cable termination with approximate connector geometry.",
    groups: [{ ids: rs232Ttl.map(([id]) => id), axis: "y", x: -18.795, y: -6.35 }],
    pads: [
      ...db9Specs.filter((_, index) => index < 5).map(([id], index) => ({
        id, x: 11.6, y: -5.54 + index * 2.77,
      })),
      ...db9Specs.slice(5).map(([id], index) => ({
        id, x: 14.44, y: -4.155 + index * 2.77,
      })),
      { id: "db9-gnd", x: 12, y: -12.25, size: 4.2, drill: 3.1 },
      { id: "db9-gnd", x: 12, y: 12.25, size: 4.2, drill: 3.1 },
    ],
    details: [[-3, 0, 10, 7, 1.8, "#28313c"], [15, 0, 9, 29, 12, "#a8b0b4"]],
  },
  model: {
    label: "Waveshare RS232 Board STEP archive",
    url: "https://www.waveshare.net/w/upload/9/99/RS232_Board_3D.zip",
  },
};

const gpsPinSpecs = [
  ["vcc", "VCC", "3.3 V or 5 V module input, regulated onboard for the GNSS receiver.", "power_in", "P1.1"],
  ["gnd", "GND", "Power and UART signal return.", "power_in", "P1.2"],
  ["tx", "TX", "Module UART data output to the host RX input. Default serial rate is 9600 baud.", "output", "P1.3"],
  ["rx", "RX", "Module UART command input from the host TX output.", "input", "P1.4"],
  ["pps", "PPS", "One-pulse-per-second timing output and onboard GPS-status indicator signal.", "output", "P1.5"],
];

function gpsArt({ pins }, showLabels) {
  const contacts = pins.map(pin =>
    sideContact(pin, showLabels, 52) + line(29, pin.y, 43, pin.y, "#b2b5a9", 3)
  ).join("");
  const shieldPads = Array.from({ length: 8 }, (_, index) => {
    const y = 106 + index * 6.3;
    return rect(93, y, 6, 4, 1, "#b8b5a3", "#e1dbbb") +
      rect(156, y, 6, 4, 1, "#b8b5a3", "#e1dbbb");
  }).join("");
  return rect(15, 12, 203, 160, 5, "#b3a84c", "#d2ce86") +
    rect(11, 7, 203, 160, 5, pcb, pcbEdge) +
    path("M203 80Q256 115 250 149Q245 170 203 157", "none", "#b9bdb7", 5.5) +
    path("M203 80Q256 115 250 149Q245 170 203 157", "none", "#e4e5de", 3) +
    rect(14, 43, 31, 94, 3, "#e4dec7", "#fff6d9") +
    rect(17, 50, 18, 80, 1, "#b6a98d") +
    rect(14, 46, 24, 10, 1, "#f6eed9") + rect(14, 124, 24, 10, 1, "#f6eed9") +
    circle(144, 49, 23, "#c6cbc4", "#e7e9de") +
    rect(140, 24, 7, 49, 1, "#b0b5ad", "#d4d8cf") +
    smd(91, 22) + smd(106, 22) + chip(86, 44, 19, 15, "", 3) +
    smd(95, 78) + smd(166, 107) + smd(173, 119) + smd(170, 131) +
    rect(99, 103, 56, 54, 2, "#adb4af", "#dde3d5") +
    label(127, 116, "QUECTEL", 6.7, "#f0f3eb") +
    label(127, 129, "L76K", 11, "#eff3e9") +
    rect(106, 140, 13, 11, 0, "#c9d0c5") +
    path("M108 142h8v6h-2v-4h-4v6", "none", "#9da899", 0.7) +
    circle(197, 150, 7, "#a1905c", "#e6d2a0") + circle(197, 150, 3.4, "#c9b06c") +
    rect(195, 144, 13, 7, 1, "#cbb16e", "#e8d59e") +
    label(188, 89, "GNSS", 10) + label(187, 30, "Waveshare", 6.6) +
    shieldPads + contacts;
}

const gps = {
  id: "waveshare-l76k-gps-module",
  name: "Waveshare L76K GPS Module",
  shortName: "L76K GNSS Module",
  category: "Interfaces",
  subtitle: "Multi-GNSS / UART / ceramic patch antenna",
  description: "Waveshare SKU 23721 with a Quectel L76K receiver, rechargeable backup cell and reverse-side ceramic patch antenna. The five-contact PH2.0 cable carries power, UART and PPS.",
  tags: ["gnss", "gps", "beidou", "glonass", "qzss", "uart", "l76k", "23721"],
  source: "https://www.waveshare.com/wiki/L76K_GPS_Module",
  width: 263, height: 181,
  pins: pinRow("left", 263, 181, 58, 15, gpsPinSpecs.slice().reverse()),
  draw: gpsArt,
  footprint: {
    body: [14, 6], color: "#e0dbc9", modelHeight: 7,
    note: "Reference host-board termination for the L76K PH2.0 five-contact cable. Contacts follow schematic P1 numbering. Verify the mating connector orientation against the supplied cable.",
    groups: [{ ids: gpsPinSpecs.map(([id]) => id), x: -4, y: -0.55, pitch: 2, size: [1.2, 1.75], drill: 0.75 }],
    details: [[0, 0, 12, 5.5, 6.5, "#e0dbc9"]],
  },
  model: {
    label: "Waveshare L76X shared-carrier STEP archive",
    url: "https://www.waveshare.net/w/upload/f/f9/L76x_gps_module.zip",
  },
};

const lcdSpecs = [
  ["vcc", "VCC", "3.3 V or 5 V module supply. Match the host signal level.", "power_in"],
  ["gnd", "GND", "Power and SPI signal return.", "power_in"],
  ["din", "DIN", "SPI serial data input from the host MOSI output.", "input"],
  ["clk", "CLK", "SPI serial clock input.", "input"],
  ["cs", "CS", "Active-low SPI chip select.", "input"],
  ["dc", "DC", "Data or command selection, high for display data.", "input"],
  ["rst", "RST", "Active-low display-controller reset.", "input"],
  ["bl", "BL", "Active-high backlight-control input.", "input"],
];

function lcdArt({ pins }, showLabels) {
  const contacts = pins.map(pin => sideContact(pin, showLabels, 37) + pad(29, pin.y)).join("");
  return rect(14, 9, 237, 163, 7, pcb, pcbEdge) +
    [29, 236].map(x => screw(x, 23, 8) + screw(x, 158, 8)).join("") +
    rect(63, 23, 156, 135, 1.2, "#161c23", "#8d969e") +
    rect(76, 29, 140, 126, 0.7, "#0b1118", "#3d4650") +
    path("M82 33H210V148H82Z", "#111a23") +
    path("M85 36H207V43H85ZM85 44H92V145H85Z", "#1d2831") +
    path("M104 146L205 47V63L120 146Z", "#16212b") +
    rect(57, 53, 4, 93, 1, "#a9a89b") +
    path("M63 43L72 35V144L63 153Z", "#22272d", "#414a50") +
    '<g transform="rotate(-90 237 91)">' + label(237, 91, "1.3inch LCD Module", 8.3) + "</g>" +
    contacts;
}

const lcd = {
  id: "waveshare-1in3-lcd-module",
  name: "Waveshare 1.3-inch LCD Module",
  shortName: "1.3-inch SPI LCD",
  category: "Indicators",
  subtitle: "ST7789 / 240 × 240 IPS / SPI",
  description: "Waveshare SKU 15867. A 45 × 31 mm carrier with an ST7789-driven square IPS display. The rear cable connector and opposite through-hole header expose the same eight signals.",
  tags: ["lcd", "ips", "display", "st7789", "spi", "240x240", "15867"],
  source: "https://www.waveshare.com/wiki/1.3inch_LCD_Module",
  width: 266, height: 181,
  pins: pinRow("left", 266, 181, 43, 14, lcdSpecs, "J1."),
  draw: lcdArt,
  footprint: {
    body: [45, 31], color: pcb,
    note: "Reference carrier for the display's parallel interfaces. Outline and through-hole header position follow the Waveshare drawing. The rear connector lands are an approximate cable reference. Verify display, screw and cable clearances.",
    groups: [
      { ids: lcdSpecs.map(([id]) => id), axis: "y", x: -20, y: -8.89 },
      { ids: lcdSpecs.map(([id]) => id), axis: "y", x: 19, y: -7, pitch: 2, size: [1.4, 2.3], smd: true },
    ],
    details: [[1, 0, 29.4, 29.4, 3.2, "#19242e"]],
  },
};

const magnetometerSpecs = [
  ["scl", "SCL/SCK", "I²C clock or SPI clock input. Shared by all clock contacts.", "input", "H1.2"],
  ["sda", "SDA/SDI", "I²C serial data or SPI data input. Shared by all data-input contacts.", "bidirectional", "H1.3"],
  ["gnd", "GND", "Power and signal return, shared by all connectors.", "power_in", "H1.4"],
  ["vcc", "VCC", "3.3 V or 5 V input. The board regulates and translates the sensor logic.", "power_in", "H1.5"],
];
const magnetometerBottom = [
  ["dry", "DRY", "Data-ready output from the BMM150 sensor.", "output", "H2.1"],
  ["cs", "CS", "SPI chip-select input, or I²C address bit A1. Select SPI mode with the I2C/SPI solder strap.", "input", "H2.2"],
  ["sdo", "SDO", "SPI data output, or I²C address bit A0.", "bidirectional", "H2.5"],
];
const bmmBottomOrder = ["dry", "cs", "scl", "sda", "sdo", "gnd", "vcc"];

function bmmArt({ pins }, showLabels) {
  const left = pins.filter(pin => pin.edge === "left").map(pin =>
    sideContact(pin, showLabels, 37) + pad(26, pin.y)
  ).join("");
  const bottomPads = bmmBottomOrder.map((id, index) => {
    const x = 57 + index * 18;
    const caption = ["DRY", "CS", "SCK", "SDI", "SDO", "GND", "VCC"][index];
    return pad(x, 152) +
      (showLabels ? label(x, 142, caption, 6.4) : "") +
      "";
  }).join("");
  const whitePort = ["INT", "SCL", "SDA", "GND", "VCC"].map((caption, index) => {
    const y = 61 + index * 15;
    return line(198, y, 210, y, "#b7b7a5", 3) + (showLabels ? label(194, y, caption, 7, silk, "end") : "");
  }).join("");
  const interrupt = pins.find(pin => pin.id === "int");
  return rect(13, 15, 232, 149, 6, pcb, pcbEdge) +
    mountingHole(27, 29) + mountingHole(27, 152) +
    label(135, 27, "BMM150 3-Axis Magnetometer", 7) +
    label(80, 44, "I2C / SPI", 7.4) +
    rect(55, 48, 37, 9, 0.7, "none", "#afbac6") +
    rect(58, 50, 13, 5, 0.4, "#333940", "#c0c5c4") + pad(86, 52) +
    chip(141, 39, 18, 17, "", 3) + smd(112, 42) + smd(166, 41) +
    [58, 90, 121].map(x => [66, 82, 124].map(y => smd(x, y)).join("")).join("") +
    chip(61, 97, 20, 17, "", 3) + chip(115, 97, 20, 17, "", 3) +
    rect(153, 92, 15, 12, 1, "#899397", "#c9d3d1") +
    circle(157, 96, 1.3, "#4b5356") +
    line(153, 110, 170, 110, silk) + line(163, 116, 163, 104, silk) +
    label(173, 109, "X", 6) + label(163, 120, "Y", 6) +
    rect(211, 44, 34, 95, 2, "#e4ddc7", "#fbf0db") +
    rect(219, 52, 14, 77, 0.7, "#b8a98b") +
    rect(208, 44, 31, 11, 1, "#f0e6cd") + rect(208, 129, 31, 11, 1, "#f0e6cd") +
    whitePort + left + bottomPads +
    (showLabels ? label(interrupt.x - 10, interrupt.y, "INT", 7, silk, "end") : "");
}

const bmm = {
  id: "waveshare-bmm150-magnetometer",
  name: "Waveshare BMM150 3-Axis Magnetometer Sensor",
  shortName: "BMM150 Compass",
  category: "Sensors",
  subtitle: "3-axis compass / I²C or SPI",
  description: "Waveshare SKU 24657 with regulated power, bidirectional level translation and separate I²C/SPI headers. The I2C/SPI strap selects the interface. The canvas groups contacts that carry the same electrical signal.",
  tags: ["magnetometer", "compass", "bmm150", "i2c", "spi", "navigation", "24657"],
  source: "https://www.waveshare.com/wiki/BMM150_3-Axis_Magnetometer_Sensor",
  width: 275, height: 186,
  pins: [
    ...pinRow("left", 275, 186, 66, 17, magnetometerSpecs),
    ...pinRow("bottom", 275, 186, 57, 27, magnetometerBottom),
    ...pinRow("right", 275, 186, 61, 17, [
      ["int", "INT", "Configurable sensor interrupt output. Its active level and electrical mode are selected in the BMM150 registers.", "output", "H1.1"],
    ]),
  ],
  draw: bmmArt,
  footprint: {
    body: [29, 20], color: pcb,
    note: "Reference carrier with outline and through-hole positions from the Waveshare drawing. Shared I²C/SPI signals use repeated pad numbers. The cable-connector lands are approximate. Verify the strap setting and mating connector against the exact assembly.",
    groups: [
      { ids: ["scl", "sda", "gnd", "vcc"], axis: "y", x: -12.48, y: -4.26 },
      { ids: bmmBottomOrder, x: -9.3, y: 8.1 },
      { ids: ["int", "scl", "sda", "gnd", "vcc"], axis: "y", x: 9.8, y: -5, pitch: 2, size: [2.3, 1.4], smd: true },
    ],
    details: [[11, 0, 7, 12, 5.5, "#e4ddc7"], [0, 1, 3, 3, 0.8, "#8b9799"]],
  },
  model: {
    label: "Waveshare BMM150 Sensor STEP model",
    url: "https://files.waveshare.com/wiki/BMM150-3-Axis-Magnetometer-Sensor/BMM150%203-Axis%20Magnetometer%20Sensor.step",
  },
};

const modules = [rtc, rs232, gps, lcd, bmm];

const waveshareReadyComponents = modules.map(({ draw, footprint, model, ...part }) => ({
  ...part, art: part.id, manufacturer: "Waveshare", referencePrefix: "U",
}));
const waveshareReadyArt = Object.fromEntries(modules.map(({ id, draw }) => [id, draw]));
const waveshareReadyFootprints = Object.fromEntries(modules.map(({ id, footprint }) => [id, footprint]));
const waveshareReadyModels = Object.fromEntries(modules.filter(part => part.model).map(({ id, model }) => [id, model]));

const contactCenters = {
  "waveshare-pcf8563-rtc-board": pin => [pin.x === 0 ? 29 : pin.x, pin.y === 0 ? 30 : pin.y],
  "waveshare-rs232-board": (pin, index) => index < 6 ? [25, pin.y] : index < 11 ? [303 - (index - 6) * 8, 63] : [299 - (index - 11) * 8, 79],
  "waveshare-l76k-gps-module": pin => [36, pin.y],
  "waveshare-1in3-lcd-module": pin => [29, pin.y],
  "waveshare-bmm150-magnetometer": pin => pin.id === "int" ? [204, 61] : pin.x === 0 ? [26, pin.y] : [57 + bmmBottomOrder.indexOf(pin.id) * 18, 152],
};

export default defineFamily("waveshare-ready", waveshareReadyComponents.map(component => physicalEntry({
  component, render: waveshareReadyArt[component.art], footprint: waveshareReadyFootprints[component.id], model: waveshareReadyModels[component.id],
  ...(component.id === bmm.id ? { mounting: waveshareBmmMounting(component) } : {}),
}, contactCenters[component.id])));
