import { defineFamily } from "../registry.js";
import { chip, circle, label, line, mountingHole, pad, path, pinRow, rect, screw, smd, usb } from "../shared/svg.js";

const blue = "#214e87";
const blueEdge = "#537ead";
const silk = "#e4edf4";
const gold = "#d6b576";
const externalLabel = "#34475a";

function headerPad(x, y, fill = "#263344") {
  return rect(x - 4.6, y - 4.6, 9.2, 9.2, 0.9, fill, "#8f9ba3") +
    rect(x - 1.6, y - 1.6, 3.2, 3.2, 0.25, gold);
}

function edgeContact(pin, x, y, showLabels, textX, textY, anchor = "middle", fill = silk) {
  return showLabels ? label(textX, textY, pin.label, 7.2, fill, anchor) : "";
}

function topContact(pin, y, showLabels) {
  return showLabels ? label(pin.x, y - 10, pin.label, 6.2, externalLabel) : "";
}

function terminal(x, y, count, pitch, fill = "#79a56c") {
  return rect(x - 13, y - 10, 26, (count - 1) * pitch + 20, 2, fill, "#b4c4b3") +
    Array.from({ length: count }, (_, index) => {
      const center = y + index * pitch;
      return rect(x + 7, center - 7, 5, 14, 0.8, "#3b5843") + screw(x - 1, center, 6.6);
    }).join("");
}

function canArt({ pins }, showLabels) {
  const contacts = pins.map(pin => {
    const left = pin.x === 23;
    return edgeContact(pin, left ? 23 : 186, pin.y, showLabels, left ? 31 : 151, pin.y, left ? "start" : "end") +
      (left ? headerPad(23, pin.y) : "");
  }).join("");
  return rect(20, 10, 167, 91, 2, blue, blueEdge) +
    rect(16, 14, 14, 83, 1, "#242931", "#a4a9a7") +
    chip(85, 25, 39, 49, "VP230", 4) +
    rect(127, 28, 24, 50, 0.8, "none", "#a0aebe") +
    smd(132, 40) + smd(132, 64) + smd(88, 83) + smd(107, 83) +
    line(70, 32, 79, 32, "#6e8aab") + line(70, 55, 79, 55, "#6e8aab") +
    label(118, 91, "Waveshare", 7, silk) +
    contacts + terminal(175, 34, 2, 37, "#3978b3");
}

const canBoard = {
  id: "waveshare-sn65hvd230-can-board",
  name: "Waveshare SN65HVD230 CAN Board",
  shortName: "SN65HVD230 CAN Board",
  category: "Interfaces",
  subtitle: "3.3 V CAN transceiver / screw terminal",
  description: "Waveshare SKU 3945. A 3.3 V CAN transceiver with onboard 120 Ω termination. The host must provide a CAN controller.",
  tags: ["can", "transceiver", "twai", "3.3v", "3945"],
  source: "https://www.waveshare.net/wiki/SN65HVD230_CAN_Board",
  width: 192, height: 110,
  pins: [
    ...pinRow("left", 192, 110, 22, 22, [
      ["3v3", "3.3V", "3.3 V transceiver supply.", "power_in", "P1.4"],
      ["gnd", "GND", "Power and signal return.", "power_in", "P1.3"],
      ["can-rx", "CAN RX", "Receiver output to the host CAN RX input.", "output", "P1.2"],
      ["can-tx", "CAN TX", "Driver input from the host CAN TX output.", "input", "P1.1"],
    ]),
    ...pinRow("right", 192, 110, 34, 37, [
      ["can-l", "CANL", "Low line of the differential CAN bus.", "bidirectional", "CAN1.1"],
      ["can-h", "CANH", "High line of the differential CAN bus.", "bidirectional", "CAN1.2"],
    ]),
  ],
  draw: canArt,
  footprint: {
    body: [27.18, 10.08], color: blue,
    note: "Reference carrier and CAN cable termination. The PCB outline follows the Waveshare STEP model. Header and terminal positions are approximate.",
    groups: [
      { ids: ["3v3", "gnd", "can-rx", "can-tx"], axis: "y", x: -12, y: -3.81 },
      { ids: ["can-l", "can-h"], axis: "y", x: 10, y: -2.54, pitch: 5.08, drill: 1.2, size: 2.4 },
    ],
    details: [[0, 0, 5, 6, 1.8, "#28313c"], [10, 0, 8, 10, 9, "#3978b3"]],
  },
  model: {
    label: "Waveshare SN65HVD230 CAN Board STEP model",
    url: "https://files.waveshare.com/upload/c/ca/CAN%20Transiver%20SN65HVD230.step",
  },
};

const pcfIoIds = Array.from({ length: 8 }, (_, index) => "p" + index);
const pcfBusIds = ["vcc", "gnd", "sda", "scl"];

function pcfArt({ pins }, showLabels) {
  const contacts = pins.map(pin => {
    const io = !pcfBusIds.includes(pin.id);
    return io
      ? topContact(pin, 22, showLabels) + headerPad(pin.x, 23, "#c2a43d")
      : edgeContact(pin, 31, pin.y, showLabels, 39, pin.y, "start") + headerPad(31, pin.y);
  }).join("");
  const address = [43, 59, 75].map(y =>
    [160, 174, 188].map(x => headerPad(x, y)).join("") +
    rect(166.5, y - 6, 30, 12, 1.5, "#d3af43", "#f1d877") +
    rect(170, y - 1.7, 20, 3.4, 0.6, "#4d3c20")
  ).join("");
  return path("M23 17H244L249 22V88L245 92H23L18 87V22Z", blue, blueEdge) +
    rect(25, 34, 12, 50, 1.3, "#23272d", "#b3bdc5") +
    rect(213, 33, 35, 50, 1.3, "#22262c", "#8c96a0") +
    pins.filter(pin => pcfBusIds.includes(pin.id)).map(pin =>
      line(205, pin.y, 217, pin.y, gold, 1.5) + pad(205, pin.y)
    ).join("") +
    chip(88, 34, 48, 53, "PCF8574", 8) +
    smd(71, 38) + smd(71, 52) + smd(71, 77) +
    label(172, 33, "+  A2  −", 7.5) + label(172, 86, "A0", 7.5) +
    label(227, 87, "PCF8574", 7.8) + address + contacts;
}

const pcfExpansion = {
  id: "waveshare-pcf8574-io-expansion",
  name: "Waveshare PCF8574 IO Expansion Board",
  shortName: "PCF8574 IO Expansion",
  category: "Interfaces",
  subtitle: "8-bit I²C GPIO expander",
  description: "Waveshare SKU 3708. Eight quasi-bidirectional GPIOs with open-drain interrupt and hardware address jumpers. Both end connectors carry the same I²C and power signals.",
  tags: ["i2c", "gpio", "pcf8574", "expander", "3708"],
  source: "https://www.waveshare.net/wiki/PCF8574_IO_Expansion_Board",
  width: 258, height: 100,
  pins: [
    ...pinRow("left", 258, 100, 40, 13, [
      ["vcc", "VCC", "3.3 V or 5 V supply. The I²C pull-ups are connected to VCC.", "power_in"],
      ["gnd", "GND", "Power and signal return.", "power_in"],
      ["sda", "SDA", "I²C serial data.", "bidirectional"],
      ["scl", "SCL", "I²C clock input.", "input"],
    ], "P2."),
    ...pinRow("top", 258, 100, 58, 14, [
      ["int", "INT", "Active-low open-drain interrupt output.", "open_collector", "H4.9"],
      ...pcfIoIds.map((id, index) => [
        id, id.toUpperCase(), "Quasi-bidirectional I/O port " + index + ".", "bidirectional", "H4." + (index + 1),
      ]).reverse(),
    ]),
  ],
  draw: pcfArt,
  footprint: {
    body: [47.63, 15.24], color: blue,
    note: "Reference carrier using the Waveshare dimensional drawing. Both parallel I²C connectors carry the same four electrical terminals. Check the fitted header styles and clearances.",
    groups: [
      { ids: pcfBusIds, axis: "y", x: -20.765, y: -4.06 },
      { ids: pcfBusIds, axis: "y", x: 13.655, y: -4.06 },
      { ids: ["int", ...pcfIoIds.slice().reverse()], x: -15.055, y: -6.1 },
    ],
    details: [[-7, 1, 8, 11, 2.1, "#28313c"], [6, 1, 8, 8, 5, "#c2a43d"], [18, 0, 10, 10, 6, "#252a31"]],
  },
};

const ftSideIds = ["dtr", "dsr", "dcd", "ri", "reset"];
const ftCbusIds = [4, 3, 2, 1, 0].map(index => "cbus" + index);
const ftMainIds = ["cts", "rts", "rxd", "txd", "vcc", "gnd", "5v"];

function ft232Art({ pins }, showLabels) {
  const contacts = pins.map(pin => {
    const top = ftMainIds.includes(pin.id);
    const left = ftSideIds.includes(pin.id);
    const x = top ? pin.x : left ? 46 : 166;
    const y = top ? 23 : pin.y;
    const lead = top
      ? topContact(pin, y, showLabels)
      : edgeContact(pin, x, y, false);
    const caption = !top && showLabels
      ? label(left ? 41 : 171, y - 5, pin.label, 7.5, externalLabel, left ? "end" : "start")
      : "";
    return lead + caption +
      rect(x - 4, y - 4.5, 8, 9, 2, gold, "#fff0ca") + circle(x, y, 2.1, "#f4e7cf");
  }).join("");
  return rect(45, 20, 122, 146, 7, blue, blueEdge) +
    path("M53 37H161M56 118H72L82 126M153 116H140L129 123M55 127H67L76 134M157 124H146L135 134", "none", "#4076ac", 1.2) +
    '<g transform="rotate(90 106 76)">' + chip(85, 45, 42, 62, "", 10) + "</g>" +
    label(106, 77, "FT232RNL", 7.1, "#bbc5cb") +
    [59, 144].map(x => [61, 75, 90, 108].map(y => smd(x, y)).join("")).join("") +
    smd(82, 111, "#97b9ad") + smd(118, 111, "#97b9ad") +
    label(86, 121, "RXD", 6.2) + label(122, 121, "TXD", 6.2) +
    rect(140, 135, 13, 23, 1, "#423f37", "#bdb4a1") +
    rect(72, 127, 68, 43, 3, "#a9b1bb", "#dce2e8") + usb(72, 151, 68) +
    line(77, 131, 135, 131, "#dce2e8") + contacts;
}

const ft232 = {
  id: "waveshare-usb-to-ttl-ft232",
  name: "Waveshare USB-TO-TTL-FT232",
  shortName: "USB-C FT232 UART",
  category: "Interfaces",
  subtitle: "FT232RNL / USB-C / castellated pads",
  description: "Compact Waveshare USB-to-UART board with the unpopulated castellated headers. Rear solder pads select 3.3 V by default or 5 V for the TTL I/O and VCC output.",
  tags: ["usb-uart", "usb ttl", "usb-c", "serial", "ft232", "ftdi", "castellated"],
  source: "https://www.waveshare.net/wiki/USB-TO-TTL-FT232",
  width: 216, height: 178,
  pins: [
    ...pinRow("top", 216, 178, 54, 17.5, [
      ["cts", "CTS", "Active-low clear-to-send input. Connect to the host RTS output.", "input", "J1.7"],
      ["rts", "RTS", "Active-low request-to-send output. Connect to the host CTS input.", "output", "J1.6"],
      ["rxd", "RXD", "UART data input. Connect to the host TX output.", "input", "J1.5"],
      ["txd", "TXD", "UART data output. Connect to the host RX input.", "output", "J1.4"],
      ["vcc", "VCC", "Selectable 3.3 V or 5 V output, set by the rear solder pads.", "power_out", "J1.3"],
      ["gnd", "GND", "USB and UART signal return.", "passive", "J1.2"],
      ["5v", "5V", "5 V output from the USB supply.", "power_out", "J1.1"],
    ]),
    ...pinRow("left", 216, 178, 45, 17.5, [
      ["dtr", "DTR", "Active-low data terminal ready output.", "output"],
      ["dsr", "DSR", "Active-low data set ready input.", "input"],
      ["dcd", "DCD", "Active-low data carrier detect input.", "input"],
      ["ri", "RI", "Active-low ring indicator input.", "input"],
      ["reset", "RESET", "Active-low reset input.", "input"],
    ], "J2."),
    ...pinRow("right", 216, 178, 45, 17.5, ftCbusIds.map(id =>
      [id, id.toUpperCase(), "Configurable FT232 CBUS function.", "bidirectional"]
    ), "J3."),
  ],
  draw: ft232Art,
  footprint: {
    body: [18, 21.5], color: blue,
    note: "Reference castellated carrier with terminal centers from the Waveshare dimension drawing. Verify land widths, USB plug clearance and whether your module uses the optional pin header.",
    groups: [
      { ids: ftMainIds, x: -7.62, y: -9.37, size: [1.65, 3.2], smd: true },
      { ids: ftSideIds, axis: "y", x: -8.05, y: -6.83, size: [2.4, 1.65], smd: true },
      { ids: ftCbusIds, axis: "y", x: 8.05, y: -6.83, size: [2.4, 1.65], smd: true },
    ],
    details: [[0, -3, 10.5, 5.3, 1.8, "#28313c"], [0, 8, 9, 7.4, 3.4, "#a9b1bb"]],
  },
};

const paperPins = [
  ["vcc", "VCC", "3.3 V or 5 V module supply. Match the host logic level.", "power_in", "P1.1"],
  ["gnd", "GND", "Power and signal return.", "power_in", "P1.2"],
  ["din", "DIN", "SPI data input, connected to host MOSI.", "input", "P1.3"],
  ["clk", "SCLK", "SPI clock input.", "input", "P1.4"],
  ["cs", "CS", "Active-low SPI chip select.", "input", "P1.5"],
  ["dc", "DC", "Data or command select in four-wire SPI mode.", "input", "P1.6"],
  ["rst", "RST", "Active-low controller reset.", "input", "P1.7"],
  ["busy", "BUSY", "Display controller busy status output.", "output", "P1.8"],
  ["pwr", "PWR", "Active-high input for the module's power switch.", "input", "P1.9"],
];

function paperArt({ pins }, showLabels) {
  // Rear component-side view follows the manufacturer's Module-E-4 gallery photo.
  const contacts = pins.map(pin => rect(pin.x - 3, pin.y - 1.7, 6, 3.4, .5, "#c8c9b4", "#f2e7c5") +
    (showLabels ? label(pin.x + 8, pin.y, pin.label, 5.4, silk, "start") : "")).join("");
  return rect(6, 8, 231, 159, 5, blue, blueEdge) +
    [17, 226].map(x => screw(x, 19, 8) + screw(x, 156, 8)).join("") +
    label(120, 25, "1.54inch e-Paper Module (E)", 8, silk) + label(120, 36, "REAR · P1 CONNECTOR", 6.5, silk) +
    rect(12, 49, 20, 70, 1.8, "#e6dfc9", "#f7f0df") + rect(15, 55, 8, 58, 1, "#a99d86") +
    rect(201, 48, 21, 75, 1.5, "#e4e3d3", "#f5efdc") + rect(198, 53, 7, 65, .5, "#273540") +
    rect(222, 57, 16, 57, .4, "#a67037", "#e1b36e") +
    Array.from({ length: 18 }, (_, i) => line(225, 59 + i * 3, 237, 59 + i * 3, gold, .5)).join("") +
    chip(117, 83, 41, 31, "", 6) + rect(100, 60, 27, 20, 2, "#b1b5ab", "#dce0d3") + label(113.5, 70, "470", 8, "#46504b") +
    [[66, 54], [84, 51], [72, 68], [77, 82], [80, 96], [63, 109], [162, 54], [179, 71], [169, 96], [181, 112]].map(([x, y]) => smd(x, y)).join("") +
    rect(82, 130, 18, 8, .6, "#202e36", "#a6b0ab") + label(91, 124, "BS", 6, silk) +
    label(136, 143, "Waveshare", 10, silk) + contacts;
}

const paper = {
  id: "waveshare-1in54-epaper-e",
  name: "Waveshare 1.54-inch e-Paper Module (E)",
  shortName: "1.54-inch e-Paper (E)",
  category: "Indicators",
  subtitle: "240 × 240 / full color / SPI",
  description: "Waveshare SKU 35486. The Spectra 6 panel is fitted to a 48 × 33 mm driver board. A nine-contact cable connects to the rear of the module.",
  tags: ["e-paper", "epaper", "e-ink", "display", "spi", "spectra 6", "35486"],
  source: "https://docs.waveshare.com/1.54inch_e-Paper_E",
  width: 243, height: 176,
  pins: pinRow("right", 243, 176, 18, 17.5, paperPins.slice().reverse()),
  draw: paperArt,
  footprint: {
    body: [14, 6], color: "#e8dfc9", modelHeight: 4,
    note: "Reference host-board termination for the e-paper cable. The nine contacts follow Waveshare schematic P1 numbering. Verify the mating connector and its pitch before fabrication.",
    groups: [{ ids: paperPins.map(([id]) => id), x: -5, y: 0, pitch: 1.25, size: [0.85, 1.6], smd: true }],
    details: [[0, 0, 12.5, 4.3, 3, "#e8dfc9"]],
  },
};

const piGroundPositions = [6, 9, 14, 20, 25, 30, 34, 39];

function hatHeaderPads(contacts) {
  return contacts.flatMap(([id, positions]) => positions.map(position => ({
    id,
    x: 24.13 - Math.floor((position - 1) / 2) * 2.54,
    y: position % 2 ? 9.04 : 11.58,
    square: position === 1,
  })));
}

function hatBoard(x, y, width, height) {
  const holes = [x + width * 3.5 / 65, x + width * 61.5 / 65]
    .map(holeX => mountingHole(holeX, y + height * 3.5 / 30) +
      mountingHole(holeX, y + height * 26.5 / 30)).join("");
  return rect(x, y, width, height, 9, blue, blueEdge) + holes;
}

function hatHeader(x, y, pitch) {
  return rect(x - 5.7, y - 5.7, 19 * pitch + 11.4, 23, 0.7, "#18252d", "#acbbca") +
    Array.from({ length: 20 }, (_, index) =>
      headerPad(x + index * pitch, y) + headerPad(x + index * pitch, y + 11.5)
    ).join("");
}

const rs485HatControl = [
  ["int", "INT", "Active-low MCP2515 interrupt output. The HAT uses Raspberry Pi GPIO25.", "output", "P2.7"],
  ["cs", "CS", "Active-low CAN controller chip select. The HAT uses Raspberry Pi CE0 (GPIO8).", "input", "P2.6"],
  ["sck", "SCK", "CAN controller SPI clock input. The HAT uses Raspberry Pi GPIO11.", "input", "P2.5"],
  ["mosi", "MOSI", "SPI data input from the host. The HAT uses Raspberry Pi GPIO10.", "input", "P2.4"],
  ["miso", "MISO", "SPI data output to the host. The HAT uses Raspberry Pi GPIO9.", "output", "P2.3"],
  ["gnd", "GND", "Shared ground for both interfaces.", "power_in", "P2.2"],
  ["3v3", "3V3", "3.3 V supply for the HAT. The control headers share this rail.", "power_in", "P2.1"],
  ["rse", "RSE", "Optional RS-485 direction input on Raspberry Pi GPIO4. The default circuit selects direction automatically.", "input", "P3.5"],
  ["txd", "TXD", "Host transmit signal into the RS-485 driver. The HAT uses Raspberry Pi GPIO14.", "input", "P3.4"],
  ["rxd", "RXD", "RS-485 receiver output to the host receive pin. The HAT uses Raspberry Pi GPIO15.", "output", "P3.3"],
];

const rs485HatBus = [
  ["can-h", "H", "CAN high signal on the screw terminal and parallel header.", "bidirectional", "CAN1.1"],
  ["can-l", "L", "CAN low signal on the screw terminal and parallel header.", "bidirectional", "CAN1.2"],
  ["rs485-b", "B", "Inverting RS-485 signal on the screw terminal and parallel header.", "bidirectional", "RS485.1"],
  ["rs485-a", "A", "Non-inverting RS-485 signal on the screw terminal and parallel header.", "bidirectional", "RS485.2"],
];
const rs485HatBusIds = rs485HatBus.map(([id]) => id);
const rs485HatSpiIds = rs485HatControl.slice(0, 7).map(([id]) => id);
const rs485HatUartIds = ["rse", "txd", "rxd", "gnd", "3v3"];

function rs485HatArt({ pins, width }, showLabels) {
  const controls = pins.filter(pin => !rs485HatBusIds.includes(pin.id)).map((pin, index) =>
    topContact(pin, 29, showLabels, index % 2 ? 17 : 7) + pad(pin.x, 29)
  ).join("");
  const bus = pins.filter(pin => rs485HatBusIds.includes(pin.id)).map(pin =>
    edgeContact(pin, 290, pin.y, showLabels, 274, pin.y, "end", silk) + headerPad(259, pin.y, "#aa9342")
  ).join("");
  return hatBoard(8, 23, 306, 140) +
    hatHeader(47, 140, 12.1) +
    rect(18, 72, 21, 54, 8, "#b1b6b3", "#e4e3d8") +
    rect(21, 75, 15, 48, 6, "#b7af9b") +
    chip(59, 73, 44, 51, "MCP2515", 9) +
    chip(152, 65, 24, 20, "CAN", 4) + chip(152, 104, 24, 20, "485", 4) +
    [90, 105, 120].map(y => smd(219, y, "#262d34") + smd(199, y)).join("") +
    [72, 85, 98, 111, 124].map(y => smd(124, y)).join("") +
    smd(45, 39, "#a8bca5") + label(49, 50, "PWR", 6.8) +
    rect(203, 60, 28, 21, 1.8, "#30353d", "#adb1b1") +
    rect(207, 64, 11, 4, 0.6, "#dedbcf") + rect(216, 72, 11, 4, 0.6, "#dedbcf") +
    label(217, 55, "120R", 7) +
    label(150, 47, "RS485 CAN HAT", 12) + label(145, 57, "Rev2.1", 6.7) +
    terminal(291, 63, 4, 17) + pad(241, 29) + pad(254, 29) + controls + bus;
}

const rs485Hat = {
  id: "waveshare-rs485-can-hat",
  name: "Waveshare RS485 CAN HAT",
  shortName: "RS485 CAN HAT",
  category: "Interfaces",
  subtitle: "MCP2515 / SP3485 / Raspberry Pi",
  description: "The Rev2.1 HAT provides CAN and RS-485 on shared screw and pin headers, with separate termination switches. The wiring pins show the HAT's active control signals. The 40-pin Pi connector also carries unused pass-through contacts.",
  tags: ["rs485", "rs-485", "can", "hat", "raspberry pi", "mcp2515", "sp3485"],
  source: "https://www.waveshare.net/wiki/RS485_CAN_HAT",
  width: 337, height: 170,
  pins: [
    ...pinRow("top", 337, 170, 89, 13, rs485HatControl.slice(0, 7)),
    ...pinRow("top", 337, 170, 202, 13, rs485HatControl.slice(7)),
    ...pinRow("right", 337, 170, 63, 17, rs485HatBus),
  ],
  draw: rs485HatArt,
  footprint: {
    body: [65, 30], color: blue,
    note: "Reference HAT carrier for active Raspberry Pi signals and both bus connectors. Breakout and bus terminal positions are approximate. Refer to the Rev2.1 STEP file for mechanics.",
    groups: [
      { ids: rs485HatSpiIds, x: -14.9, y: -13.8 },
      { ids: rs485HatUartIds, x: 9.05, y: -13.8 },
      { ids: rs485HatBusIds, axis: "y", x: 22.4, y: -4.6 },
      { ids: rs485HatBusIds, axis: "y", x: 28, y: -6.65, pitch: 3.5, drill: 1.2, size: 2.15 },
    ],
    pads: hatHeaderPads([
      ["3v3", [1, 17]], ["gnd", piGroundPositions], ["int", [22]], ["cs", [24]],
      ["sck", [23]], ["mosi", [19]], ["miso", [21]], ["rse", [7]], ["txd", [8]], ["rxd", [10]],
    ]),
    details: [[0, 10.3, 50.8, 5.1, 8.8, "#242e38"], [-15, -0.5, 8, 12, 2.2, "#28313c"],
      [28, 0, 7, 14, 8, "#79a56c"]],
  },
  model: {
    label: "Waveshare RS485 CAN HAT Rev2.1 STEP archive",
    url: "https://files.waveshare.com/upload/5/52/RS485_CAN_HAT_3D_Drawing.zip",
  },
};

const servoWidth = 396;
const servoHeight = 178;
const servoSignals = Array.from({ length: 16 }, (_, index) => {
  const channel = 15 - index;
  const connector = [3, 5, 6, 7][Math.floor(channel / 4)];
  return [
    "s" + channel, "S" + channel, "PWM signal for servo channel " + channel + ".",
    "output", "P" + connector + "." + (channel % 4 + 1),
  ];
});
const servoControl = [
  ["5v", "5V", "Shared 5 V rail for the servos and HAT. Supply 5 V here or power the onboard regulator through VIN.", "power_in"],
  ["gnd", "GND", "Shared power and servo return.", "power_in"],
  ["sda", "SDA", "3.3 V I²C data. This is Raspberry Pi physical pin 3.", "bidirectional"],
  ["scl", "SCL", "3.3 V I²C clock. This is Raspberry Pi physical pin 5.", "input"],
];
const servoX = index => 58 + (index + Math.floor(index / 4)) * 14.5;

function servoHatArt({ pins, width }, showLabels) {
  const top = pins.filter(pin => /^s\d+$/.test(pin.id));
  const channels = top.map((pin, index) =>
    line(pin.x, 19, pin.x, 38, gold, 2) +
    headerPad(pin.x, 38) + headerPad(pin.x, 51) + headerPad(pin.x, 64) +
    label(pin.x, 76, pin.label.slice(1), 6.5)
  ).join("");
  const servoHeaders = [0, 4, 8, 12].map(index => {
    const x = top[index].x;
    return rect(x - 6, 22, 55.5, 13, 1.3, "#242930", "#888d91") +
      rect(x - 6, 35, 55.5, 34, 0.8, "none", "#a0b4c9") +
      label(x + 57, 38, "G", 6.4) + label(x + 57, 51, "V", 6.4) + label(x + 57, 64, "S", 6.4);
  }).join("");
  const controls = pins.filter(pin => servoControl.some(([id]) => id === pin.id)).map(pin =>
    edgeContact(pin, 22, pin.y, showLabels, 30, pin.y, "start") + pad(22, pin.y)
  ).join("");
  const power = pins.filter(pin => ["vin", "vin-gnd"].includes(pin.id)).map(pin =>
    edgeContact(pin, 367, pin.y, showLabels, 371, pin.y - 7, "start")
  ).join("");
  const address = Array.from({ length: 5 }, (_, index) => {
    const x = 72 + index * 11;
    return smd(x, 86, "#373c43") + label(x + 4, 99, "A" + index, 6.3) +
      smd(x, 109, "#2c5d9a") + smd(x, 118, "#2c5d9a");
  }).join("");
  return hatBoard(7, 30, 379, 143) + hatHeader(53, 148, 14.6) +
    servoHeaders + channels +
    label(110, 132, "I²C Address", 7.4) +
    chip(144, 85, 39, 45, "PCA9685", 9) + chip(263, 88, 32, 31, "MP1584", 4) +
    rect(221, 96, 31, 29, 3, "#a8acaa", "#e3e1d7") +
    label(236.5, 111, "150", 8, "#626461") +
    [197, 302, 316].map(x => smd(x, 88) + smd(x, 112) + smd(x, 122)).join("") +
    rect(224, 80, 20, 9, 1.5, "#2a3038", "#c0c3c5") +
    label(265, 137, "Servo Driver HAT (B)", 7.6) +
    terminal(354, 90, 2, 19) + address + power + controls;
}

const servoHat = {
  id: "waveshare-servo-driver-hat-b",
  name: "Waveshare Servo Driver HAT (B)",
  shortName: "Servo Driver HAT (B)",
  category: "Actuators",
  subtitle: "16-channel PCA9685 / right-angle headers",
  description: "Waveshare SKU 17035. The Raspberry Pi HAT provides 16 PWM outputs, a shared 5 V servo rail, and a 6–12 V VIN regulator. The wiring view groups the servo power and ground contacts as shared rails.",
  tags: ["pwm", "servo", "raspberry pi", "hat", "i2c", "pca9685", "17035"],
  source: "https://www.waveshare.com/wiki/Servo_Driver_HAT_%28B%29",
  width: servoWidth, height: servoHeight,
  pins: [
    ...servoSignals.map(([id, label, description, type, number], index) => ({
      id, label, description, type, number, x: servoX(index), y: 0,
    })),
    ...pinRow("left", servoWidth, servoHeight, 82, 14, servoControl, "P2."),
    ...pinRow("right", servoWidth, servoHeight, 90, 19, [
      ["vin", "VIN", "6–12 V input for the onboard 5 V regulator.", "power_in"],
      ["vin-gnd", "GND", "VIN return, common with servo and logic ground.", "power_in"],
    ], "P1."),
  ],
  draw: servoHatArt,
  footprint: {
    body: [65, 30], color: blue,
    note: "Reference HAT carrier showing the 16 servo headers, I²C breakout, VIN and the active Pi contacts. Servo power and ground pads repeat their shared electrical terminals. Verify header mechanics against the Waveshare STEP archive.",
    groups: [
      { ids: servoControl.map(([id]) => id), axis: "y", x: -30.1, y: -3.7 },
      { ids: ["vin", "vin-gnd"], axis: "y", x: 29, y: -2.4, pitch: 3.5, drill: 1.2, size: 2.15 },
      ...Array.from({ length: 4 }, (_, index) => {
        const x = -23.1 + index * 12.7;
        return [
          { ids: Array(4).fill("gnd"), x, y: -13.5 },
          { ids: Array(4).fill("5v"), x, y: -10.96 },
          { ids: servoSignals.slice(index * 4, index * 4 + 4).map(([id]) => id), x, y: -8.42 },
        ];
      }).flat(),
    ],
    pads: hatHeaderPads([["5v", [2, 4]], ["gnd", piGroundPositions], ["sda", [3]], ["scl", [5]]]),
    details: [[0, 10.3, 50.8, 5.1, 8.8, "#242e38"], [-9, 1, 5, 10, 1.8, "#28313c"],
      [29, -1, 7, 7, 7, "#79a56c"]],
  },
  model: {
    label: "Waveshare Servo Driver HAT (B) STEP archive",
    url: "https://files.waveshare.com/wiki/Servo-Driver-HAT-(B)/3D-Drawings/Servo-Driver-HAT-(B).zip",
  },
};

const modules = [canBoard, pcfExpansion, ft232, paper, rs485Hat, servoHat];

const physicalPositions = {
  [canBoard.id]: pin => ({ x: pin.x === 0 ? 23 : 174, y: pin.y }),
  [pcfExpansion.id]: pin => ({ x: pin.x === 0 ? 31 : pin.x, y: pin.y === 0 ? 23 : pin.y }),
  [ft232.id]: pin => ({ x: pin.y === 0 ? pin.x : pin.x === 0 ? 46 : 166, y: pin.y === 0 ? 23 : pin.y }),
  [paper.id]: (pin, index) => ({ x: 34, y: 62 + index * 6 }),
  [rs485Hat.id]: pin => ({ x: pin.y === 0 ? pin.x : 290, y: pin.y === 0 ? 29 : pin.y }),
  [servoHat.id]: pin => ({ x: pin.y === 0 ? pin.x : pin.x === 0 ? 22 : 353, y: pin.y === 0 ? 64 : pin.y }),
};
const waveshareExpansionComponents = modules.map(({ draw, footprint, model, ...part }) => ({
  ...part, art: part.id, manufacturer: "Waveshare", referencePrefix: "U", contactLayout: "physical",
  pins: part.pins.map((pin, index) => ({ ...pin, ...physicalPositions[part.id](pin, index), surface: true, symbolPlacement: { side: pin.x <= part.width / 2 ? "left" : "right", order: pin.y * 1000 + pin.x } })),
}));
const waveshareExpansionArt = Object.fromEntries(modules.map(({ id, draw }) => [id, draw]));
const waveshareExpansionFootprints = Object.fromEntries(modules.map(({ id, footprint }) => [id, footprint]));
const waveshareExpansionModels = Object.fromEntries(modules.filter(part => part.model).map(({ id, model }) => [id, model]));

export default defineFamily("waveshare-expansion", (waveshareExpansionComponents).map(component => ({ component, render: (waveshareExpansionArt)[component.art], footprint: (waveshareExpansionFootprints)[component.id], model: waveshareExpansionModels[component.id] })));
