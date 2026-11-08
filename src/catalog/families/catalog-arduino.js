import { defineFamily } from "../registry.js";
import { chip, circle, label, line, mountingHole, path, rect, smd, tactile } from "../shared/svg.js";
import { boardDefinition, physicalHeaderArt, contact, gpio, ground, header, reset, supply } from "../shared/board.js";
import { breadboardHeaderMounting } from "../shared/breadboard-mounting.js";

const manufacturer = "Arduino";
const docs = "https://docs.arduino.cc/hardware/";
const range = length => Array.from({ length }, (_, index) => index);
const arduinoBlue = "#007987";
const boardNote = "Reference connector carrier. Verify connector spacing and the specific board revision against Arduino mechanical drawings before fabrication.";
const boardPower = (id = "5v") => supply(id, "5V", "Board 5 V rail. Power and current limits depend on the selected supply.", "power_out");
const threeVolt = () => supply("3v3", "3V3", "Regulated 3.3 V output.", "power_out");
const analogReference = description => contact("aref", "AREF", description, "input");
const unused = (id, description) => contact(id, "NC", description, "no_connect");
const reserved = unused("power-nc", "Reserved shield header position.");
const numbered = (pins, connector, first = 1, step = 1) => pins.map((pin, index) => (
  [...pin, `${connector}.${first + index * step}`]
));

function digital(number, port, role = "") {
  return gpio(`d${number}`, `D${number}`, `${port ? port + " GPIO." : "Digital GPIO."}${role ? " " + role : ""}`);
}

function analog(number, port, role = "", inputOnly = false) {
  const description = `${port ? port + ". " : ""}Analog input.${inputOnly ? " Analog only." : ""}${role ? " " + role : ""}`;
  return contact(`a${number}`, `A${number}`, description, inputOnly ? "input" : "bidirectional");
}

const spiDescription = { cipo: "SPI data into the controller (MISO/CIPO).", copi: "SPI data from the controller (MOSI/COPI).", sck: "SPI serial clock." };
const avrSpi = (names = {}) => [
  gpio("spi-cipo", "MISO", spiDescription.cipo + (names.cipo ? " Shared with " + names.cipo + "." : "")),
  boardPower("spi-5v"),
  gpio("spi-sck", "SCK", spiDescription.sck + (names.sck ? " Shared with " + names.sck + "." : "")),
  gpio("spi-copi", "MOSI", spiDescription.copi + (names.copi ? " Shared with " + names.copi + "." : "")),
  reset("spi-reset"),
  ground("spi-gnd"),
];

function unoPower(first, inputRange, logicVoltage = "5 V") {
  return [
    first, supply("ioref", "IOREF", `${logicVoltage} logic reference for shields.`, "power_out"), reset(), threeVolt(),
    boardPower(), ground("power-gnd1"), ground("power-gnd2"),
    supply("vin", "VIN", inputRange),
  ];
}

function unoHeaders({ first = reserved, inputRange, aref, digitalPins, analogPins, i2c, spi, connectors, extras = [] }) {
  const { power, analog: analogBank, digitalHigh, digitalLow, spi: spiBank } = connectors;
  return [
    header(power, "left", 140, unoPower(first, inputRange), { x: -24.13, y: -6.35 }),
    header(analogBank, "left", 282, numbered(analogPins, analogBank, analogBank === power ? 9 : 1), { x: -24.13, y: 16.51 }),
    header(digitalHigh, "right", 77, numbered([
      gpio("scl", "SCL", i2c.scl), gpio("sda", "SDA", i2c.sda), analogReference(aref), ground("digital-gnd"),
      ...digitalPins.slice(8).reverse(),
    ], digitalHigh, digitalHigh === digitalLow ? 18 : 10, -1), { x: 24.13, y: -15.494 }),
    header(digitalLow, "right", 249, numbered(digitalPins.slice(0, 8).reverse(), digitalLow, 8, -1),
      { x: 24.13, y: 11.43 }),
    header(spiBank, "bottom", 81, spi, { x: 3.81, y: 29.337, axis: "x", columns: 2, pitch: -2.54, acrossPitch: 2.54, drill: 0.95 }),
    ...extras,
  ];
}

const avrPorts = ["PD0", "PD1", "PD2", "PD3", "PD4", "PD5", "PD6", "PD7", "PB0", "PB1", "PB2", "PB3", "PB4", "PB5"];
const avrRoles = { 0: "UART RX.", 1: "UART TX.", 3: "PWM.", 5: "PWM.", 6: "PWM.", 9: "PWM.", 10: "SPI SS and PWM.", 11: "SPI MOSI and PWM.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED." };
const analogAvr = range(6).map(index => analog(index, `PC${index}`, ({ 4: "I²C SDA.", 5: "I²C SCL." })[index]));

const pcbEdge = "#3e929a";
const metal = "#bbc7ca";

function usbPort(x, y, width, depth, kind) {
  const shell = kind === "mini" || kind === "micro"
    ? path(`M${x + 3} ${y}H${x + width - 3}L${x + width} ${y + 4}V${y + depth}H${x}V${y + 4}Z`, metal, "#748790")
    : rect(x, y, width, depth, kind === "c" ? 3 : 1.5, metal, "#748790");
  return shell + rect(x + 3, y + 2, width - 6, 5, kind === "c" ? 2.5 : 1, "#354550") +
    rect(x + 5, y + 11, width - 10, depth - 14, 1, "#a3b0b5") +
    line(x + 6, y + depth - 4, x + width - 6, y + depth - 4, "#e1e8e9", 1.4);
}

function barrelJack(x, y, width, height) {
  return rect(x + 3, y, width - 6, height, 2, "#252c2e", "#586269") +
    rect(x, y + 1, width, 9, 1, "#171d20", "#73786f") +
    rect(x + 5, y + 3, width - 10, 4, 1, "#10171a") +
    line(x + 8, y + 13, x + 8, y + height - 5, "#3f484c");
}

function connector(x, y, columns, rows, { pitch = 8, male = false } = {}) {
  return rect(x - pitch / 2, y - pitch / 2, columns * pitch, rows * pitch, 1, "#222c32", "#5d6b70") +
    range(rows).map(row => range(columns).map(column => {
      const px = x + column * pitch;
      const py = y + row * pitch;
      return rect(px - 2.55, py - 2.55, 5.1, 5.1, 0.7, "#111b21", "#6a685d") +
        (male ? rect(px - 1.5, py - 1.5, 3, 3, 0.3, "#d2b981") : "");
    }).join("")).join("");
}

function qfp(x, y, size, caption, pins) {
  const legs = range(pins).map(index => {
    const offset = 4 + index * (size - 8) / (pins - 1);
    const px = x + offset;
    const py = y + offset;
    return line(px, y - 4, px, y, "#a3aeb1", 1.15) +
      line(px, y + size, px, y + size + 4, "#a3aeb1", 1.15) +
      line(x - 4, py, x, py, "#a3aeb1", 1.15) +
      line(x + size, py, x + size + 4, py, "#a3aeb1", 1.15);
  }).join("");
  return legs + rect(x, y, size, size, 2, "#22292e", "#77888c") +
    circle(x + 4, y + 4, 1.3, "#9b9e9c") +
    label(x + size / 2, y + size / 2, caption, Math.min(6, size / 4.5), "#d2d8d9");
}

function dip328(x, y) {
  const legs = range(14).map(index => {
    const py = y + 5 + index * 4.5;
    return line(x - 3, py, x + 3, py, "#acb3af", 2) +
      line(x + 23, py, x + 29, py, "#acb3af", 2);
  }).join("");
  return rect(x - 2, y - 1, 30, 70, 2, "#202c31", "#718080") + legs +
    rect(x, y, 26, 68, 2, "#202224", "#455159") +
    path(`M${x + 9} ${y}a4 4 0 0 0 8 0`, "none", "#768184") +
    `<g transform="translate(${x + 13} ${y + 35}) rotate(90)">${label(0, 0, "ATMEGA328P", 5.5, "#d2dbd8")}</g>`;
}

function passives(points) {
  return points.map(([x, y]) => smd(x, y, "#d7c091")).join("");
}

function shieldBoardArt({ shortName, art }) {
  const wifi = art === "arduino-uno-r4-wifi";
  const minima = art === "arduino-uno-r4-minima";
  const leonardo = art === "arduino-leonardo";
  const r3 = !wifi && !minima && !leonardo;
  const outline = "M4 5H174Q179 5 179 10V224H134L126 232H17L9 224H4Q1 224 1 219V10Q1 5 4 5Z";
  let parts;
  if (r3) {
    parts = dip328(41, 134) + qfp(113, 63, 18, "16U2", 8) +
      rect(88, 48, 14, 31, 6, metal, "#748891") +
      connector(148, 58, 2, 3, { pitch: 7, male: true }) +
      [56, 79].map(y => circle(27, y, 8, metal, "#86989d") + line(23, y, 31, y, "#87969b")).join("") +
      label(110, 108, shortName, 12) + passives([[47, 45], [47, 55], [57, 64], [57, 73], [137, 82], [133, 103], [92, 181]]);
  } else if (wifi) {
    parts = rect(44, 4, 53, 67, 1, "#2d4746", "#a6ad81") +
      rect(47, 7, 47, 20, 1, "#263c32") + path("M53 22v-9h9v9h9v-9h9v9h8", "none", "#a68a46", 1.15) +
      rect(47, 28, 47, 41, 1, "#9ca7ab", "#ccd5d3") + label(70.5, 49, "ESP32-S3", 6, "#253640") +
      connector(131, 48, 2, 3, { pitch: 8, male: true }) +
      rect(36, 108, 61, 91, 1, "#155d69") +
      range(12).map(row => range(8).map(column => {
        const x = 41 + column * 7.3;
        const y = 112 + row * 7.4;
        return `<g transform="rotate(45 ${x} ${y})">${rect(x - 2.2, y - 2.2, 4.4, 4.4, 0.4, "#d9bc5c", "#f0d989")}</g>`;
      }).join("")).join("") +
      qfp(108, 166, 36, "RA4M1", 16) +
      rect(38, 215, 26, 13, 2, "#dadcd5", "#9ca7a5") +
      rect(42, 222, 18, 5, 1, "#6f8184") + label(119, 119, "UNO R4", 8) + label(119, 130, "WIFI", 8) +
      passives([[52, 81], [64, 89], [76, 94], [99, 82], [104, 151], [117, 147], [129, 145]]);
  } else {
    parts = (minima ? qfp(91, 141, 36, "RA4M1", 16) : qfp(47, 145, 30, "32U4", 11)) +
      chip(49, 33, 20, 19, "", 3) + rect(53, 18, 16, 8, 1, metal, "#82969a") +
      label(103, minima ? 91 : 111, shortName, 10) +
      passives([[74, 20], [74, 31], [93, 37], [113, 35], [129, 40], [90, 62], [106, 65], [77, 143], [75, 173], [117, 188], [83, 203]]);
  }

  return path(outline, arduinoBlue, pcbEdge) +
    [[10, 47], [169, 51], [25, 222], [119, 222]].map(([x, y]) => mountingHole(x, y)).join("") +
    barrelJack(9, 0, 36, 43) +
    (r3 ? usbPort(109, -4, 29, 47, "b") : usbPort(111, 0, 27, leonardo ? 23 : 25, leonardo ? "micro" : "c")) +
    tactile(157, 12) +
    parts;
}

function boardProjection(component, boardWidth, boardHeight) {
  const scale = Math.min((component.width - 50) / boardWidth, (component.height - 35) / boardHeight);
  return { scale, x: (component.width - scale * boardWidth) / 2, y: (component.height - scale * boardHeight) / 2 };
}

function arduinoBoard(component, headers, footprint, drawBoard, boardSize) {
  const [boardWidth, boardHeight] = boardSize;
  const projection = boardProjection(component, boardWidth, boardHeight);
  const projectContact = (pad) => ({
    x: projection.x + (pad.x / footprint.body[0] + .5) * boardWidth * projection.scale,
    y: projection.y + (pad.y / footprint.body[1] + .5) * boardHeight * projection.scale,
  });
  const definition = boardDefinition(component, headers, footprint, drawBoard, projectContact);
  return { ...definition, art: (entry, showLabels) =>
    `<g transform="translate(${projection.x} ${projection.y}) scale(${projection.scale})">${drawBoard(entry)}</g>` + physicalHeaderArt(entry, showLabels, { captionColor: "#e4f1e8" }) };
}

function unoDefinition(id, model, subtitle, description, configuration) {
  return arduinoBoard({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, description,
    source: docs + id.slice("arduino-".length) + "/", width: 240, height: 399, tags: ["arduino", "shield", "development board"],
  }, unoHeaders(configuration), { body: [53.34, 68.58], color: arduinoBlue, note: configuration.note ?? boardNote }, shieldBoardArt, [180, 232]);
}

const unoR3 = unoDefinition("arduino-uno-rev3", "UNO R3", "ATmega328P · 5 V",
  "Classic socketed ATmega328P board with USB-B, 5 V logic, Arduino shield headers and the ATmega328P ICSP connector.",
  {
    connectors: { power: "POWER", analog: "AD", digitalHigh: "IOH", digitalLow: "IOL", spi: "ICSP" },
    inputRange: "External VIN supply. Arduino recommends 7–12 V for normal operation.",
    aref: "Analog voltage reference input.",
    digitalPins: avrPorts.map((port, index) => digital(index, port, avrRoles[index])),
    analogPins: analogAvr,
    i2c: { scl: "I²C SCL, electrically shared with A5 (PC5).", sda: "I²C SDA, electrically shared with A4 (PC4)." },
    spi: avrSpi({ cipo: "D12", copi: "D11", sck: "D13" }),
  });

const r4Pins = {
  minima: ["P301", "P302", "P105", "P104", "P103", "P102", "P106", "P107", "P304", "P303", "P112", "P109", "P110", "P111"],
  wifi: ["P301", "P302", "P104", "P105", "P106", "P107", "P111", "P112", "P304", "P303", "P103", "P411", "P410", "P102"],
};
const r4Roles = { 0: "UART RX.", 1: "UART TX.", 3: "PWM.", 5: "PWM.", 6: "PWM.", 9: "PWM.", 10: "SPI SS and PWM.", 11: "SPI MOSI and PWM.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED." };
const r4Can = { minima: { 4: "TX", 5: "RX" }, wifi: { 10: "TX", 13: "RX" } };
const r4AnalogRoles = {
  0: "Also DAC output.", 1: "Also the op-amp noninverting input.", 2: "Also the op-amp inverting input.",
  3: "Also the op-amp output.", 4: "Shared with the SDA header.", 5: "Shared with the SCL header.",
};
const r4Configuration = variant => ({
  connectors: { power: "JANALOG", analog: "JANALOG", digitalHigh: "JDIGITAL", digitalLow: "JDIGITAL", spi: variant === "wifi" ? "J3" : "J1" },
  first: contact("boot", "BOOT", "RA4M1 boot-mode control.", "input"),
  inputRange: "6–24 V external DC supply.",
  aref: "RA4M1 analog reference.",
  digitalPins: r4Pins[variant].map((port, index) => {
    const can = r4Can[variant][index];
    const canRole = can ? `CAN0 ${can} logic. Requires an external CAN transceiver.` : "";
    return digital(index, port, [r4Roles[index], canRole].filter(Boolean).join(" "));
  }),
  analogPins: ["P014", "P000", "P001", "P002", "P101", "P100"].map((port, index) => analog(index, port, r4AnalogRoles[index])),
  i2c: { scl: "I²C clock on P100, shared with A5.", sda: "I²C data on P101, shared with A4." },
  spi: avrSpi({ cipo: "D12", copi: "D11", sck: "D13" }),
});

const unoMinima = unoDefinition("arduino-uno-r4-minima", "UNO R4 Minima", "Renesas RA4M1 · 5 V",
  "USB-C Arduino shield board with 5 V RA4M1 GPIO, a 12-bit DAC and an underside SWD connector.",
  {
    ...r4Configuration("minima"),
    extras: [header("J2", "top", 44, [
      boardPower("swd-5v"), gpio("swdio", "DIO", "RA4M1 SWDIO on P108."), ground("swd-gnd3"),
      contact("swclk", "CLK", "RA4M1 SWCLK on P300.", "input"), ground("swd-gnd5"),
      unused("swd-nc", "Unconnected SWD header position."),
      contact("swd-rx", "RX", "RA4M1 SCI1 receive on P502.", "input"),
      contact("swd-tx", "TX", "RA4M1 SCI1 transmit on P501.", "output"), ground("swd-gnd9"),
      contact("swd-reset", "RST", "RA4M1 active-low reset, as shown in the ABX00080 V1.2 schematic.", "input"),
    ], { x: 11.49, y: 27.975, axis: "x", columns: 2, pitch: 1.27, acrossPitch: -1.27, size: 1.016, drill: 0.6 })],
  });

const unoWifi = unoDefinition("arduino-uno-r4-wifi", "UNO R4 WiFi", "RA4M1 + ESP32-S3",
  "Arduino UNO with 5 V RA4M1 shield pins, a separate 3.3 V ESP32-S3 header, 3.3 V Qwiic and a 12×8 LED matrix.",
  {
    ...r4Configuration("wifi"),
    note: boardNote + " The four pads outside the board outline terminate a cable for the Qwiic connector.",
    extras: [
      header("J6", "top", 28, [
        gpio("esp-gpio42", "IO42", "ESP32-S3 GPIO42. 3.3 V logic."),
        gpio("esp-gpio41", "IO41", "ESP32-S3 GPIO41. 3.3 V logic."),
        contact("esp-tx", "TX0", "ESP32-S3 UART0 TX on GPIO43. 3.3 V logic.", "output"),
        gpio("esp-boot", "IO0", "ESP32-S3 GPIO0 download strap. 3.3 V logic."),
        contact("esp-rx", "RX0", "ESP32-S3 UART0 RX on GPIO44. 3.3 V logic.", "input"),
        ground("esp-gnd"),
      ], { x: 16.564, y: -12.954, columns: 2, pitch: -2.54, drill: 0.95 }),
      header("J2", "top", 153, [
        ground("qwiic-gnd"), supply("qwiic-3v3", "3V3", "3.3 V Qwiic supply.", "power_out"),
        gpio("qwiic-sda", "SDA", "3.3 V Qwiic I²C bus data, RA4M1 P401."),
        gpio("qwiic-scl", "SCL", "3.3 V Qwiic I²C bus clock, RA4M1 P400."),
      ], { x: -17.634, y: 38, axis: "x" }),
      header("JOFF", "left", 76, [
        contact("off", "OFF", "Pull low to disable the VIN-side buck regulator.", "input"),
        ground("rtc-gnd"), supply("vrtc", "VRTC", "RA4M1 RTC backup supply input (VBATT)."),
      ], { x: -24.13, y: -16.51 }),
    ],
  });

const leonardoPorts = ["PD2", "PD3", "PD1", "PD0", "PD4", "PC6", "PD7", "PE6", "PB4", "PB5", "PB6", "PB7", "PD6", "PC7"];
const leonardoRoles = { 0: "Serial1 RX.", 1: "Serial1 TX.", 2: "I²C SDA.", 3: "I²C SCL and PWM.", 4: "Also analog input A6.", 5: "PWM.", 6: "PWM and analog input A7.", 8: "Also analog input A8.", 9: "PWM and analog input A9.", 10: "PWM and analog input A10.", 11: "PWM.", 12: "Also analog input A11.", 13: "Built-in LED and PWM." };
const leonardoAnalog = ["PF7", "PF6", "PF5", "PF4", "PF1", "PF0"].map((port, index) => analog(index, port));
const leonardo = unoDefinition("arduino-leonardo", "Leonardo", "ATmega32U4 · native USB",
  "ATmega32U4 shield board with 5 V logic, native USB and SPI on the separate ICSP connector.",
  {
    connectors: { power: "J3", analog: "J4", digitalHigh: "JP1", digitalLow: "J2", spi: "ICSP" },
    inputRange: "External VIN supply. Arduino recommends 7–12 V for normal operation.",
    aref: "Analog voltage reference input.",
    digitalPins: leonardoPorts.map((port, index) => digital(index, port, leonardoRoles[index])),
    analogPins: leonardoAnalog,
    i2c: { scl: "I²C clock, electrically shared with D3 (PD0).", sda: "I²C data, electrically shared with D2 (PD1)." },
    spi: avrSpi(),
  });

const nanoArtVariants = {
  "arduino-nano": { usb: "mini", rows: 15, boardHeight: 224 },
  "arduino-nano-every": { usb: "micro", rows: 15, boardHeight: 224 },
  "arduino-nano-esp32": { usb: "c", rows: 15, boardHeight: 224 },
  "arduino-nano-rp2040-connect": { usb: "micro", rows: 15, boardHeight: 224 },
  "arduino-nano-r4": { usb: "c", rows: 15, boardHeight: 224 },
  "arduino-micro": { usb: "micro", rows: 17, boardHeight: 244 },
};


function diamondQfp(x, y, size, name, pins) {
  const centerX = x + size / 2;
  const centerY = y + size / 2;
  return `<g transform="rotate(45 ${centerX} ${centerY})">${qfp(x, y, size, "", pins)}</g>` +
    label(centerX, centerY, name, 6, "#d1d7db");
}

function wirelessModule(x, y, name, antennaColor) {
  return rect(x, y, 52, 67, 1, antennaColor, "#85a19a") +
    rect(x + 3, y + 3, 46, 49, 1, "#aebbc0", "#d7e0df") +
    line(x + 6, y + 48, x + 45, y + 48, "#829398") +
    label(x + 26, y + 25, name, 6.8, "#324952") +
    rect(x + 18, y + 58, 16, 3, 0.4, "#6f8580");
}

function nanoBodyArt({ art, shortName }) {
  const { usb: type, boardHeight } = nanoArtVariants[art];
  let parts;
  switch (art) {
    case "arduino-nano":
      parts = diamondQfp(33, 75, 23, "328P", 8) + tactile(37, 118) +
        rect(58, 101, 12, 8, 2, metal, "#819399") +
        passives([[17, 145], [32, 145], [48, 145], [63, 145]]) +
        connector(30, 202, 3, 2, { pitch: 12, male: true }) + label(44, 178, shortName, 9);
      break;
    case "arduino-nano-every":
      parts = tactile(36, 54) + chip(20, 78, 16, 16, "", 3) +
        qfp(33, 99, 22, "D11", 4) + diamondQfp(29, 150, 30, "4809", 12) +
        passives([[15, 42], [26, 42], [57, 45], [66, 65], [17, 114], [27, 134], [45, 128], [49, 137], [67, 128], [18, 201], [60, 201]]) +
        label(44, 209, shortName, 8);
      break;
    case "arduino-nano-esp32":
      parts = tactile(36, 55) + rect(56, 56, 9, 11, 1, "#dedcd2", "#adbbba") +
        chip(41, 83, 24, 23, "FLASH", 4) +
        wirelessModule(18, 151, "NORA-W106", "#77934b") +
        passives([[16, 44], [20, 66], [17, 81], [22, 105], [31, 119], [58, 120], [61, 135]]) +
        label(44, 137, shortName, 8);
      break;
    case "arduino-nano-rp2040-connect":
      parts = tactile(36, 48) + chip(57, 45, 14, 15, "", 3) +
        chip(32, 67, 26, 26, "FLASH", 4) + rect(28, 102, 36, 36, 2, "#22292e", "#7b8e92") +
        label(46, 121, "RP2040", 6.8) + wirelessModule(18, 154, "NINA-W102", "#a8bac0") +
        passives([[18, 41], [20, 57], [22, 76], [17, 99], [66, 93], [67, 141]]) +
        label(44, 146, "RP2040 CONNECT", 6.7);
      break;
    case "arduino-nano-r4":
      parts = tactile(36, 46) + qfp(20, 80, 15, "", 4) + chip(48, 81, 15, 17, "", 3) +
        qfp(25, 128, 39, "RA4M1", 16) +
        passives([[22, 48], [56, 49], [18, 71], [39, 68], [63, 70], [24, 103], [45, 102], [60, 111], [21, 180], [60, 183]]) +
        rect(32, 207, 24, 14, 2, "#d4dacf", "#a2aaa2") + rect(36, 216, 16, 4, 1, "#728484") +
        label(44, 194, shortName, 8.5);
      break;
    default:
      parts = diamondQfp(29, 93, 29, "32U4", 11) + rect(58, 140, 12, 16, 1, metal, "#7e9098") +
        connector(27, 203, 2, 3, { pitch: 10, male: true }) + tactile(56, 209) +
        passives([[26, 58], [42, 62], [58, 58], [15, 129], [20, 159], [56, 171], [56, 183]]) +
        label(44, 187, shortName, 9);
  }
  const [usbWidth, usbDepth] = { mini: [40, 39], micro: [35, 24], c: [45, 29] }[type];
  return rect(1, 3, 86, boardHeight - 5, 2, arduinoBlue, pcbEdge) +
    [[5, 8], [83, 8], [5, boardHeight - 8], [83, boardHeight - 8]].map(([x, y]) => mountingHole(x, y)).join("") +
    usbPort((88 - usbWidth) / 2, 0, usbWidth, usbDepth, type) + parts;
}

const nanoMountingSources = {
  "arduino-nano": "A000005",
  "arduino-nano-every": "ABX00028",
  "arduino-nano-esp32": "ABX00083",
  "arduino-nano-rp2040-connect": "ABX00053",
  "arduino-nano-r4": "ABX00142",
};

function nanoDefinition(id, model, subtitle, description, left, right, extras = []) {
  const height = Math.max(left.length, right.length) * 16 + 62;
  const length = id === "arduino-micro" ? 48 : 45;
  const connectors = id === "arduino-nano-r4" ? ["JP1", "JP2"] : ["LEFT", "RIGHT"];
  const headers = [
    header(connectors[0], "left", 32, left, { x: -7.62, y: -(left.length - 1) * 1.27 }),
    header(connectors[1], "right", 32, right, { x: 7.62, y: -(right.length - 1) * 1.27 }),
    ...extras,
  ];
  const entry = arduinoBoard({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, description,
    source: docs + id.slice("arduino-".length) + "/", width: 138, height,
    tags: ["arduino", "breadboard", "development board"],
  }, headers, { body: [18, length], color: arduinoBlue, note: boardNote }, nanoBodyArt, [88, nanoArtVariants[id].boardHeight]);
  const sku = nanoMountingSources[id];
  const projection = boardProjection(entry.component, 88, nanoArtVariants[id].boardHeight);
  const { usb: usbKind, boardHeight } = nanoArtVariants[id];
  const [usbWidth, usbDepth] = { mini: [40, 39], micro: [35, 24], c: [45, 29] }[usbKind];
  const physicalRectangle = (x, y, width, height) => ({ x: projection.x + x * projection.scale,
    y: projection.y + y * projection.scale, width: width * projection.scale, height: height * projection.scale });
  return { ...entry, ...(sku ? { mounting: breadboardHeaderMounting({
    label: `Arduino ${model} ${sku} manufacturer mechanical drawing`,
    url: `https://docs.arduino.cc/resources/datasheets/${sku}-datasheet.pdf`,
  }, [
    { ids: left.map(pin => pin[0]), x: -7.62, y: -(left.length - 1) * 1.27 },
    { ids: right.map(pin => pin[0]), x: 7.62, y: -(right.length - 1) * 1.27 },
  ], "Component side, USB above. The two 15-contact rows are 15.24 mm apart; the separate ICSP and other auxiliary contacts are not insertion leads.",
  { regions: [physicalRectangle(1, 3, 86, boardHeight - 5), physicalRectangle((88 - usbWidth) / 2, 0, usbWidth, usbDepth)],
    evidence: "The nanoBodyArt PCB rectangle and variant-specific USB shell are projected through the same boardProjection transform as the rendered body. Canvas padding and physical-header text are excluded." }) } : {}) };
}

const nanoRight = pins => [...pins.slice(2, 13).reverse(), ground("digital-gnd"), reset("digital-reset"), pins[0], pins[1]];
const nanoLeft = (pins, aref, analogPins, vin, power = boardPower(), resetPin = reset()) => [
  pins[13], threeVolt(), aref, ...analogPins, power, resetPin, ground(), supply("vin", "VIN", vin),
];
const nanoSpi = header("ICSP", "bottom", 30, avrSpi({ cipo: "D12", copi: "D11", sck: "D13" }),
  { x: -2.54, y: 17.8, columns: 2, axis: "x" });
const nanoAvrPins = avrPorts.map((port, index) => digital(index, port, avrRoles[index]));
const nano = nanoDefinition("arduino-nano", "Nano", "ATmega328P · 5 V",
  "Classic Arduino Nano A000005 with Mini-B USB, 5 V logic, a two-row breadboard footprint and a dedicated ICSP header.",
  nanoLeft(nanoAvrPins, analogReference("Analog reference input."), [
    ...analogAvr, analog(6, "ADC6", "", true), analog(7, "ADC7", "", true),
  ], "7–12 V external DC supply."), nanoRight(nanoAvrPins), [nanoSpi]);

const everyPins = ["PC5", "PC4", "PA0", "PF5", "PC6", "PB2", "PF4", "PA1", "PE3", "PB0", "PB1", "PE0", "PE1", "PE2"]
  .map((port, index) => digital(index, port, ({ 0: "UART RX.", 1: "UART TX.", 3: "PWM.", 5: "PWM.", 6: "PWM.", 9: "PWM.", 10: "PWM.", 11: "SPI MOSI.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED." })[index]));
const every = nanoDefinition("arduino-nano-every", "Nano Every", "ATmega4809 · 5 V",
  "Arduino Nano Every ABX00028 with a 5 V ATmega4809 and Micro-B USB. Its headers follow the Nano form factor.",
  nanoLeft(everyPins, analogReference("ATmega4809 external analog reference on PD7."), [
    ...["PD3", "PD2", "PD1", "PD0", "PA2 / PF2", "PA3 / PF3", "PD4", "PD5"].map((port, index) => analog(index, port, ({ 4: "I²C SDA.", 5: "I²C SCL." })[index])),
  ], "7–21 V external DC supply."), nanoRight(everyPins));

const espPins = [44, 43, 5, 6, 7, 8, 9, 10, 17, 18, 21, 38, 47, 48].map((port, index) => digital(index, `GPIO${port}`,
  ({ 0: "UART0 RX.", 1: "UART0 TX.", 8: "UART1 TX.", 9: "UART1 RX.", 11: "SPI MOSI.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED." })[index]));
const nanoEsp32 = nanoDefinition("arduino-nano-esp32", "Nano ESP32", "ESP32-S3 · 3.3 V",
  "Arduino Nano ESP32 ABX00083 with a u-blox NORA-W106 ESP32-S3 module, USB-C, Wi-Fi and BLE. Header GPIO uses 3.3 V logic.",
  nanoLeft(espPins, gpio("b0", "B0", "GPIO46 boot strap and red RGB LED."), [
    ...[1, 2, 3, 4, 11, 12, 13, 14].map((port, index) => analog(index, `GPIO${port}`, ({ 4: "I²C SDA.", 5: "I²C SCL." })[index])),
  ], "External DC supply input. Consult Arduino power specifications.",
  supply("vusb", "VUSB", "5 V output when powered through USB-C.", "power_out"),
  gpio("b1", "B1", "GPIO0 boot strap and green RGB LED.")), nanoRight(espPins));

const rpPins = [1, 0, 25, 15, 16, 17, 18, 19, 20, 21, 5, 7, 4, 6].map((port, index) => digital(index, `RP2040 GPIO${port}`,
  ({ 0: "UART RX.", 1: "UART TX.", 10: "SPI CS.", 11: "SPI MOSI.", 12: "SPI MISO.", 13: "SPI SCK." })[index]));
const nanoRp = nanoDefinition("arduino-nano-rp2040-connect", "Nano RP2040 Connect", "RP2040 + NINA-W102",
  "Arduino ABX00053 with RP2040, 3.3 V GPIO, a Wi-Fi/BLE coprocessor and Micro-B USB. A6/A7 use the NINA module.",
  nanoLeft(rpPins, contact("aref", "AREF", "Reference pad connected to the onboard ATSAMD11 PA03 signal. See the board schematic."),
    [
      ...[26, 27, 28, 29].map((port, index) => analog(index, `RP2040 GPIO${port}`)),
      gpio("a4", "A4", "RP2040 GPIO12, reserved for I²C SDA in Arduino's user manual."),
      gpio("a5", "A5", "RP2040 GPIO13, reserved for I²C SCL in Arduino's user manual."),
      analog(6, "NINA GPIO36", "", true), analog(7, "NINA GPIO35", "", true),
    ], "5–18 V external DC supply.",
    supply("vusb", "5V", "USB 5 V output via the underside solder jumper, open by default.", "power_out"),
    contact("rec", "REC", "RP2040 recovery input. Pull low during reset for USB mass-storage boot.", "input")), nanoRight(rpPins));

const nanoR4Pins = range(14).map(index => digital(index, "", ({
  0: "Serial1 RX.", 1: "Serial1 TX.", 4: "CAN0 TX logic signal.", 5: "CAN0 RX logic signal.",
  10: "SPI SS.", 11: "SPI MOSI.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED.",
})[index]));
const nanoR4 = nanoDefinition("arduino-nano-r4", "Nano R4", "Renesas RA4M1 · 5 V",
  "Arduino Nano R4 ABX00142 with 5 V RA4M1 GPIO, USB-C, DAC, op-amp, CAN logic pins and a 3.3 V Qwiic I²C connector.",
  nanoLeft(nanoR4Pins, analogReference("External analog reference."), range(8).map(index => analog(index, "",
    ({ 0: "DAC output.", 1: "Op-amp non-inverting input.", 2: "Op-amp inverting input.", 3: "Op-amp output.", 4: "I²C1 SDA.", 5: "I²C1 SCL." })[index])),
  "External DC supply input, up to 21 V.",
  boardPower(), contact("boot", "BOOT", "RA4M1 boot-mode input.", "input")), nanoRight(nanoR4Pins), [
    header("QWIIC", "bottom", 38, [
      ground("qwiic-gnd"), supply("qwiic-3v3", "3V3", "3.3 V Qwiic supply.", "power_out"),
      gpio("qwiic-sda", "SDA", "I²C0 data. 3.3 V Qwiic bus."),
      gpio("qwiic-scl", "SCL", "I²C0 clock. 3.3 V Qwiic bus."),
    ], { x: -1.5, y: 20.5, axis: "x", pitch: 1, size: 0.65, drill: 0.35 }),
  ]);

const microPins = leonardoPorts.map((port, index) => digital(index, port, leonardoRoles[index]));
const micro = nanoDefinition("arduino-micro", "Micro", "ATmega32U4 · native USB",
  "Arduino Micro A000053 with 5 V ATmega32U4 logic, Micro-B USB and separate SPI signals on the breadboard headers.",
  [
    ...nanoLeft(microPins, analogReference("Analog reference input."), [
      ...leonardoAnalog, unused("nc-a6", "Unconnected position next to A5."), unused("nc-a7", "Unconnected position next to 5V."),
    ], "6–9 V external DC supply."),
    gpio("spi-cipo", "MISO", "ATmega32U4 PB3, SPI data into the controller. Arduino D14."),
    gpio("spi-sck", "SCK", "ATmega32U4 PB1, SPI clock. Arduino D15."),
  ], [
    ...nanoRight(microPins),
    gpio("spi-ss", "SS", "ATmega32U4 PB0, SPI select. Arduino D17."),
    gpio("spi-copi", "MOSI", "ATmega32U4 PB2, SPI data from the controller. Arduino D16."),
  ]);

const megaPorts = [
  "PE0", "PE1", "PE4", "PE5", "PG5", "PE3", "PH3", "PH4", "PH5", "PH6", "PB4", "PB5", "PB6", "PB7", "PJ1", "PJ0", "PH1", "PH0", "PD3", "PD2", "PD1", "PD0",
  "PA0", "PA1", "PA2", "PA3", "PA4", "PA5", "PA6", "PA7", "PC7", "PC6", "PC5", "PC4", "PC3", "PC2", "PC1", "PC0", "PD7", "PG2", "PG1", "PG0", "PL7", "PL6", "PL5", "PL4", "PL3", "PL2", "PL1", "PL0", "PB3", "PB2", "PB1", "PB0",
];
const megaRoles = {
  0: "UART0 RX.", 1: "UART0 TX.", 13: "Built-in LED and PWM.",
  14: "UART3 TX.", 15: "UART3 RX.", 16: "UART2 TX.", 17: "UART2 RX.", 18: "UART1 TX.", 19: "UART1 RX.",
  20: "I²C SDA.", 21: "I²C SCL.", 44: "PWM.", 45: "PWM.", 46: "PWM.",
  50: "SPI MISO.", 51: "SPI MOSI.", 52: "SPI SCK.", 53: "SPI SS.",
};
const megaPins = megaPorts.map((port, index) => digital(index, port, megaRoles[index] ?? (index >= 2 && index <= 12 ? "PWM." : "")));

function megaBodyArt({ art, shortName }) {
  const due = art === "arduino-due";
  const outline = "M6 5H179Q184 5 184 11V347H142L134 355H17L9 347H6Q1 347 1 342V11Q1 5 6 5Z";
  const usbAndControl = due
    ? usbPort(65, -3, 25, 23, "micro") + usbPort(121, -3, 25, 23, "micro") +
      label(77, 31, "PROGRAM", 6.3) + label(134, 31, "NATIVE", 6.3) +
      tactile(157, 13) + tactile(143, 104) +
      connector(43, 86, 3, 2, { pitch: 7, male: true }) +
      connector(150, 68, 2, 5, { pitch: 7, male: true }) +
      qfp(58, 144, 67, "SAM3X8E", 36) + connector(84, 228, 3, 2, { pitch: 7, male: true }) +
      label(88, 272, shortName.toUpperCase(), 14) + chip(82, 302, 42, 18, "", 6)
    : usbPort(110, -6, 34, 49, "b") + tactile(160, 14) +
      rect(88, 52, 13, 28, 6, metal, "#778b91") + qfp(114, 61, 21, "16U2", 8) +
      connector(151, 48, 2, 3, { pitch: 7, male: true }) +
      qfp(77, 156, 47, "ATMEGA2560", 25) + connector(93, 227, 3, 2, { pitch: 7, male: true }) +
      label(96, 267, "MEGA 2560", 12) + label(96, 283, "REV3", 8);

  return path(outline, arduinoBlue, pcbEdge) + barrelJack(8, -1, 36, 42) +
    [[8, 52], [173, 59], [26, 246], [125, 246], [8, 338], [173, 322]].map(([x, y]) => mountingHole(x, y)).join("") +
    [65, 86].map(y => circle(30, y, 9, metal, "#829699") + line(26, y, 34, y, "#829699")).join("") +
    chip(49, 27, 17, 17, "", 3) +
    passives([[73, 32], [52, 50], [60, 60], [61, 75], [70, 95], [97, 90], [111, 101], [138, 89], [144, 124],
      [41, 118], [38, 149], [37, 174], [45, 192], [64, 218], [131, 225], [147, 253], [65, 284], [131, 309]]) +
    usbAndControl;
}

function megaDefinition(id, model, subtitle, description, { pins, analogPins, highI2c, spi, logicVoltage = "5 V" }) {
  const due = id === "arduino-due";
  const digitalHigh = due ? "PWMH" : "JP6";
  return arduinoBoard({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, width: 332, height: 568,
    description: description + " The D22–D53 contacts are placed directly on their two-row header.",
    source: docs + id.slice("arduino-".length) + "/", tags: ["arduino", "shield", "development board"],
  }, [
    header("POWER", "left", 126, unoPower(reserved, "External VIN supply. Arduino recommends 7–12 V for normal operation.", logicVoltage),
      { x: -24.13, y: -22.86 }),
    header("ADCL", "left", 266, analogPins.slice(0, 8), { x: -24.13, y: 0 }),
    header("ADCH", "left", 394, analogPins.slice(8), { x: -24.13, y: 22.86 }),
    header(digitalHigh, "right", 104, numbered([
      ...highI2c, analogReference("Analog voltage reference input."), ground("digital-gnd"), ...pins.slice(8, 14).reverse(),
    ], digitalHigh, due ? 10 : 1, due ? -1 : 1), { x: 24.13, y: -32.004 }),
    header("PWML", "right", 271, numbered(pins.slice(0, 8).reverse(), "PWML", 8, -1),
      { x: 24.13, y: -5.08 }),
    header("COMMUNICATION", "right", 406, numbered(pins.slice(14, 22), "COMMUNICATION", due ? 1 : 8, due ? 1 : -1),
      { x: 24.13, y: 17.78 }),
    header("XIO", "top", 30, numbered([
      boardPower("aux-5v-even"), ...range(16).map(index => pins[22 + index * 2]), ground("aux-gnd-even"),
    ], "XIO", 1, 2), { x: 24.13, y: 43.18, axis: "x", pitch: -2.54, drill: 0.95 }),
    header("XIO", "bottom", 30, numbered([
      boardPower("aux-5v-odd"), ...range(16).map(index => pins[23 + index * 2]), ground("aux-gnd-odd"),
    ], "XIO", 2, 2), { x: 24.13, y: 45.72, axis: "x", pitch: -2.54, drill: 0.95 }),
    header(due ? "SPI" : "ICSP", "left", 25, spi,
      { x: 3.81, y: 12.827, axis: "x", columns: 2, pitch: -2.54, acrossPitch: 2.54, drill: 1.016 }),
  ], { body: [53.34, 101.6], color: arduinoBlue, note: boardNote }, megaBodyArt, [185, 355]);
}

const mega = megaDefinition("arduino-mega-2560", "Mega 2560 Rev3", "ATmega2560 · 4 hardware UARTs",
  "5 V Arduino Mega 2560 A000067 with 54 digital pins, 16 analog inputs, four UARTs and the main ICSP header.",
  {
    pins: megaPins,
    analogPins: range(16).map(index => analog(index, index < 8 ? `PF${index}` : `PK${index - 8}`, `Also digital pin D${54 + index}.`)),
    highI2c: [gpio("scl", "SCL", "I²C SCL. Shared with D21."), gpio("sda", "SDA", "I²C SDA. Shared with D20.")],
    spi: avrSpi({ cipo: "D50", copi: "D51", sck: "D52" }),
  });

const duePorts = [
  "PA8", "PA9", "PB25", "PC28", "PA29", "PC25", "PC24", "PC23", "PC22", "PC21", "PA28", "PD7", "PD8", "PB27",
  "PD4", "PD5", "PA13", "PA12", "PA11", "PA10", "PB12", "PB13", "PB26", "PA14", "PA15", "PD0", "PD1", "PD2",
  "PD3", "PD6", "PD9", "PA7", "PD10", "PC1", "PC2", "PC3", "PC4", "PC5", "PC6", "PC7", "PC8", "PC9", "PA19",
  "PA20", "PC19", "PC18", "PC17", "PC16", "PC15", "PC14", "PC13", "PC12", "PB21", "PB14",
];
const dueRoles = {
  0: "Programming UART RX.", 1: "Programming UART TX.", 4: "SPI chip-select option.", 10: "SPI chip-select option.",
  13: "Built-in LED.", 14: "Serial3 TX.", 15: "Serial3 RX.", 16: "Serial2 TX.", 17: "Serial2 RX.",
  18: "Serial1 TX.", 19: "Serial1 RX.", 20: "Wire SDA.", 21: "Wire SCL.", 52: "SPI chip-select option.",
};
const due = megaDefinition("arduino-due", "Due", "SAM3X8E · dual Micro-B USB",
  "Arduino Due A000056 with 3.3 V SAM3X8E GPIO, separate native and programming USB ports, two DACs and dedicated CAN logic signals. Do not apply 5 V to I/O.",
  {
    logicVoltage: "3.3 V",
    pins: duePorts.map((port, index) => digital(index, port, dueRoles[index])),
    analogPins: [
      ...["PA16", "PA24", "PA23", "PA22", "PA6", "PA4", "PA3", "PA2", "PB17", "PB18", "PB19", "PB20"]
        .map((port, index) => analog(index, port, `Also digital pin D${54 + index}.`)),
      contact("dac0", "DAC0", "PB15, analog output DAC channel 0. Arduino D66.", "output"),
      contact("dac1", "DAC1", "PB16, analog output DAC channel 1. Arduino D67.", "output"),
      contact("canrx", "CANRX", "PA1, CAN0 receive logic. Requires an external CAN transceiver.", "input"),
      contact("cantx", "CANTX", "PA0, CAN0 transmit logic. Requires an external CAN transceiver.", "output"),
    ],
    highI2c: [gpio("scl1", "SCL1", "PA18, separate Wire1 I²C clock."), gpio("sda1", "SDA1", "PA17, separate Wire1 I²C data.")],
    spi: [
      gpio("spi-cipo", "MISO", "PA25. " + spiDescription.cipo), boardPower("spi-5v"),
      gpio("spi-sck", "SCK", "PA27. " + spiDescription.sck), gpio("spi-copi", "MOSI", "PA26. " + spiDescription.copi),
      reset("spi-reset"), ground("spi-gnd"),
    ],
  });

const arduinoDefinitions = [unoR3, unoMinima, unoWifi, nano, every, nanoEsp32, nanoRp, nanoR4, leonardo, micro, mega, due];
const arduinoModels = {
  "arduino-uno-r4-minima": {
    label: "Arduino UNO R4 Minima CAD archive with STEP",
    url: "https://docs.arduino.cc/static/ae97aad5c05de6a565c7f93a28c04717/ABX00080-cad-files.zip",
  },
  "arduino-uno-r4-wifi": { label: "Arduino UNO R4 WiFi STEP model", url: "https://docs.arduino.cc/resources/models/ABX00087-step.zip" },
  "arduino-nano-esp32": { label: "Arduino Nano ESP32 STEP model", url: "https://docs.arduino.cc/resources/models/ABX00083-step.zip" },
  "arduino-nano-r4": { label: "Arduino Nano R4 STEP model", url: "https://docs.arduino.cc/resources/models/ABX00142-step.zip" },
};

export default defineFamily("arduino", arduinoDefinitions.map(entry => ({ component: entry.component, render: entry.art, footprint: entry.footprint, model: arduinoModels[entry.component.id], mounting: entry.mounting })));
