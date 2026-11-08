import { sourceReferenceMounting } from "../shared/source-reference-mounting.js";
import physicalReferences from "../data/popular-mounting/common-peripherals.js";
import { defineFamily } from "../registry.js";
import { board, chip, circle, label, line, mountingHole, path, rect, screw, smd } from "../shared/svg.js";
import { boardDefinition, contact, ground, header, supply } from "../shared/board.js";

const dfrobot = "DFRobot";
const adafruit = "Adafruit";
const input = (id, name, description) => contact(id, name, description, "input");
const output = (id, name, description) => contact(id, name, description, "output");
const openDrain = (id, name, description) => contact(id, name, description, "open_collector");
const serialData = (id, name, description) => contact(id, name, description, "bidirectional");
const vin = (range, name = "VCC") => supply("vin", name, `Module power input, ${range}.`);
const scl = input("scl", "SCL", "I²C clock from the host.");
const sda = serialData("sda", "SDA", "I²C data.");
const nc = contact("nc", "NC", "No internal connection.", "no_connect");
const numbered = (specs, first = 1) => specs.map((spec, index) => [...spec, String(first + index)]);
const carrierNote = "Reference carrier for the exposed header. Confirm the module revision, body clearances and mounting holes before fabrication.";

function peripheral(info, footprint, bodyArt, ...headers) {
  return boardDefinition({
    category: "Indicators", referencePrefix: "DS", art: info.id, ...info,
  }, headers, footprint, bodyArt, (_point, pin, side, index) => {
    const centers = {
      "dfrobot-lcd1602-dfr0557": () => [219.5, 36.6 + index * 8.6],
      "dfrobot-oled-dfr0647": () => [20, pin.y],
      "dfrobot-st7735-dfr0847": () => [pin.x, 129],
      "seeed-grove-tm1637": () => [17, 40 + index * 8],
      "dfrobot-ws2812-dfr0459": () => [side === "left" ? 20 : info.width - 20, pin.y],
      "adafruit-max98357a-i2s": () => [pin.x, side === "top" ? 33 : info.height - 9],
    };
    const center = centers[info.id]?.() ?? [pin.x === 0 ? 9 : pin.x === info.width ? info.width - 9 : pin.x,
      pin.y === 0 ? 9 : pin.y === info.height ? info.height - 9 : pin.y];
    return { x: center[0], y: center[1] };
  });
}

function socket(x, y, width, height, count) {
  const spacing = width / (count + 1);
  return rect(x, y, width, height, 2, "#ded9cc", "#a39b87") +
    rect(x + 2, y + 3, width - 4, height - 6, 1, "#9a9181") +
    Array.from({ length: count }, (_, index) => rect(x + spacing * (index + 1) - 1, y + 5, 2, height - 10, 0.5, "#c6a577")).join("");
}

function displayFrame(x, y, width, height, glass, outline) {
  return rect(x, y, width, height, 2.5, "#1b2028", "#454c54") +
    rect(x + 5, y + 5, width - 10, height - 10, 1, glass, outline);
}

function sevenSegmentDigit(x, y, active) {
  const segments = [[4, 0, 13, 0], [16, 3, 16, 12], [16, 17, 16, 26], [4, 29, 13, 29],
    [1, 17, 1, 26], [1, 3, 1, 12], [4, 14.5, 13, 14.5]];
  return segments.map(([x1, y1, x2, y2], index) =>
    line(x + x1, y + y1, x + x2, y + y2, active.includes(index) ? "#ee6656" : "#4d3d42", 2.6)).join("");
}

const lcd1602 = peripheral({
  id: "dfrobot-lcd1602-dfr0557", name: "DFRobot Gravity I²C LCD1602", shortName: "LCD1602",
  manufacturer: dfrobot, subtitle: "16 × 2 characters / green backlight",
  description: "DFR0557 single-board character display with a green backlight, onboard I²C controller and a four-contact Gravity cable connection.",
  tags: ["lcd1602", "1602", "16x2", "i2c", "character display", "gravity", "dfr0557"],
  source: "https://wiki.dfrobot.com/dfr0557/", width: 258, height: 108,
}, {
  body: [8.4, 5.7], color: "#ded9cc", modelHeight: 4,
  note: "Reference host-board cable termination in the numbered Gravity order. Use the display drawing for its 87 × 32 mm body and mounting clearances.",
}, ({ width, height }) =>
  board(width, height, "#262a2e", "#5e6467") +
  mountingHole(17, 16) + mountingHole(239, 16) + mountingHole(17, 92) + mountingHole(239, 92) +
  displayFrame(26, 22, 184, 65, "#a5b75d", "#d2da83") +
  label(43, 44, "WIREPAD", 12, "#344628", "start") +
  label(43, 65, "LCD1602", 12, "#344628", "start") +
  '<g transform="translate(226 28) rotate(90)">' + socket(0, 0, 43, 13, 4) + "</g>",
header("J1", "right", 27, numbered([vin("3.3–5 V"), ground(), scl, sda]),
  { x: -3, y: 0, axis: "x", pitch: 2, drill: 0.8, size: 1.4 }, 17));

const oled091 = peripheral({
  id: "dfrobot-oled-dfr0647", name: "DFRobot 0.91-inch SSD1306 OLED", shortName: "SSD1306 128×32",
  manufacturer: dfrobot, subtitle: "DFR0647 / I²C / rear solder pads",
  description: "Fermion 128 × 32 white OLED with four solder pads on the rear. The pin order is specific to the DFR0647 board.",
  tags: ["ssd1306", "oled", "128x32", "i2c", "dfrobot", "dfr0647"],
  source: "https://wiki.dfrobot.com/dfr0647/", width: 218, height: 84,
}, {
  body: [8, 5], color: "#282c32", modelHeight: 0.9,
  note: "Reference host termination for wires to the four rear solder pads. Refer to DFRobot's 41 × 12 mm module drawing for direct integration.",
}, ({ width }) =>
  rect(6, 10, 28, 62, 3, "#20262d", "#57616a") +
  '<g transform="translate(26 9)">' + board(width - 26, 66, "#20262d", "#57616a") +
  mountingHole(17, 16) + mountingHole(17, 50) + mountingHole(175, 16) + mountingHole(175, 50) +
  displayFrame(31, 16, 130, 34, "#0c1725", "#334054") + "</g>" +
  label(122, 35, "SSD1306", 9, "#e2e7ed") + label(122, 49, "128 × 32", 8, "#bac7d6"),
header("J1", "left", 17, numbered([sda, scl, ground(), vin("3.3–5 V")]).reverse(),
  { x: 3, y: 0, axis: "x", pitch: -2, drill: 0.8, size: 1.4 }, 16));

const tft096 = peripheral({
  id: "dfrobot-st7735-dfr0847", name: "DFRobot 0.96-inch ST7735 TFT", shortName: "ST7735 TFT",
  manufacturer: dfrobot, subtitle: "DFR0847 / 160 × 80 / SPI",
  description: "Compact color TFT module with ST7735 controller and a rear eight-contact connector. Backlight can be controlled separately.",
  tags: ["st7735", "tft", "spi", "160x80", "color display", "dfr0847"],
  source: "https://wiki.dfrobot.com/dfr0847/", width: 204, height: 146,
}, {
  body: [18, 5], color: "#27353d", modelHeight: 1,
  note: "Reference host wire termination for the eight-contact display connection. See DFRobot's dimension drawing for the 34 × 13.5 mm module and rear connector.",
}, ({ width }) =>
  board(width - 24, 93, "#252e37", "#69727b") +
  rect(51, 10, 40, 8, 1.5, "#2c8c77", "#449f8b") +
  displayFrame(19, 18, 142, 63, "#16333e", "#366174") +
  rect(27, 27, 66, 23, 1, "#247797") + rect(97, 27, 56, 23, 1, "#d1894d") +
  rect(27, 54, 126, 15, 1, "#37515c") + label(91, 61, "160 × 80", 9) +
  rect(158, 27, 11, 42, 1, "#487a88", "#35515f") +
  rect(8, 99, width - 16, 39, 3, "#2a3844", "#4f6670") +
  label(102, 108, "REAR CONNECTOR", 7.5, "#aabac4"),
header("J1", "bottom", 30, numbered([
  vin("3.3–5 V"), ground(), input("sclk", "SCLK", "SPI clock from the host."),
  input("mosi", "MOSI", "SPI display data from the host."), input("cs", "CS", "Active-low chip select."),
  input("reset", "RT", "Active-low display reset."), input("dc", "DC", "Data versus command select."),
  input("bl", "BL", "Backlight control. Drive high for full brightness or low to turn it off."),
]), { x: -7, y: 0, axis: "x", pitch: 2, drill: 0.8, size: 1.4 }, 20.5));

const sh1106 = peripheral({
  id: "waveshare-sh1106-oled-b", name: "Waveshare 1.3-inch SH1106 OLED (B)", shortName: "SH1106 OLED",
  manufacturer: "Waveshare", subtitle: "128 × 64 / SPI or I²C / straight header",
  description: "Waveshare OLED (B) with a straight eight-pin header. Select 3-wire SPI, 4-wire SPI or I²C using the rear mode straps.",
  tags: ["sh1106", "oled", "128x64", "display", "spi", "i2c", "waveshare"],
  source: "https://www.waveshare.com/1.3inch-oled-b.htm", width: 182, height: 145,
}, {
  body: [40.5, 37.5], color: "#205283", modelHeight: 1.6,
  details: [[0, -2, 31, 22, 1.9, "#1f2832"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#265381", "#4475a2") +
  mountingHole(17, 16) + mountingHole(165, 16) + mountingHole(17, 129) + mountingHole(165, 129) +
  displayFrame(24, 27, 134, 79, "#071322", "#334658") +
  label(91, 59, "SH1106", 13, "#6fd2ff") + label(91, 77, "128 × 64", 8.5, "#8cc9e2") +
  rect(70, 106, 42, 9, 1, "#ae8045", "#c4a76c"),
header("J1", "bottom", 27, numbered([
  vin("3.3–5 V"), ground(), nc,
  serialData("din", "DIN", "SPI MOSI input or bidirectional I²C SDA, depending on the selected mode."),
  input("clk", "CLK", "SPI clock or I²C SCL, depending on the selected mode."),
  input("cs", "CS", "Active-low SPI chip select."),
  input("dc", "D/C", "SPI data versus command select."),
  input("reset", "RES", "Active-low display reset."),
]), { x: -8.89, y: 15, axis: "x" }, 18));

const tm1637 = peripheral({
  id: "seeed-grove-tm1637", name: "Seeed Grove TM1637 4-Digit Display", shortName: "TM1637 Display",
  manufacturer: "Seeed Studio", subtitle: "Four red digits / Grove / CLK and DIO",
  description: "Grove 4-Digit Display V1.0 with TM1637 controller and colon. Its two-wire CLK/DIO interface uses the TM1637 protocol.",
  tags: ["tm1637", "7 segment", "seven segment", "4 digit", "grove", "led"],
  source: "https://wiki.seeedstudio.com/Grove-4-Digit_Display/", width: 188, height: 112,
}, {
  body: [8.4, 5.7], color: "#d8d5cd", modelHeight: 4,
  note: "Reference host-board cable termination in Grove signal order. Use the Seeed mechanical drawing for the 42 × 24 mm display module.",
}, ({ width, height }) =>
  board(width, height, "#1f5a82", "#477799") + mountingHole(16, 18) + mountingHole(16, 94) +
  mountingHole(172, 18) + mountingHole(172, 94) +
  rect(30, 20, 132, 66, 2, "#d0cbc5", "#a6a19b") +
  rect(32, 21, 128, 56, 1, "#27272e", "#424347") +
  sevenSegmentDigit(47, 35, [1, 2]) + sevenSegmentDigit(71, 35, [0, 1, 6, 4, 3]) +
  sevenSegmentDigit(103, 35, [0, 1, 6, 2, 3]) + sevenSegmentDigit(127, 35, [5, 6, 1, 2]) +
  circle(95, 44, 1.7, "#ee6656") + circle(95, 55, 1.7, "#ee6656") +
  label(95, 91, "4-DIGIT DISPLAY", 7.5, "#e4ecf3"),
header("J1", "left", 32, numbered([
  input("clk", "CLK", "TM1637 serial clock from the host."), serialData("dio", "DIO", "TM1637 data line."),
  vin("3.3–5.5 V"), ground(),
]), { x: -3, y: 0, axis: "x", pitch: 2, drill: 0.8, size: 1.4 }, 16));

const matrix = peripheral({
  id: "dfrobot-ws2812-dfr0459", name: "DFRobot WS2812 8×8 RGB LED Matrix", shortName: "WS2812 Matrix",
  manufacturer: dfrobot, subtitle: "64 RGB pixels / 5 V / chainable",
  description: "Rigid 65 mm square DFR0459 matrix with 64 addressable LEDs and separate data-in and data-out connections. Size the supply for the selected brightness.",
  tags: ["ws2812", "neopixel", "rgb", "led matrix", "8x8", "dfr0459"],
  source: "https://wiki.dfrobot.com/dfr0459/", width: 218, height: 168,
}, {
  body: [21, 7], color: "#2e4448", modelHeight: 1.3,
  note: "Reference host cable termination for the two 2.54 mm connector groups. The actual 65 × 65 mm matrix is an off-board assembly.",
}, ({ width, height }) =>
  rect(6, 46, 29, 56, 3, "#252931", "#545967") +
  rect(width - 35, 46, 29, 56, 3, "#252931", "#545967") +
  '<g transform="translate(25 0)">' + board(width - 50, height, "#252931", "#545967") +
  Array.from({ length: 64 }, (_, index) => {
    const x = 23 + index % 8 * 17.2;
    const y = 23 + Math.floor(index / 8) * 17.2;
    const colors = ["#c48e7a", "#9fb194", "#8babc2"];
    return rect(x - 5, y - 5, 10, 10, 1, "#e7e3d2", "#afa797") + circle(x, y, 2.3, colors[index % 3]);
  }).join("") + "</g>",
header("IN", "left", 56, [input("din", "DIN", "First pixel serial data input."), vin("5 V", "5V"), ground()],
  { x: -7.62, y: -2.54 }, 18),
header("OUT", "right", 56, [ground("gnd-out"), contact("vout", "5V", "Same 5 V rail as the input connector."), output("dout", "DOUT", "Data output for the next WS2812 matrix.")],
  { x: 7.62, y: -2.54 }, 18));

const rtc = peripheral({
  id: "adafruit-ds3231-rtc", name: "Adafruit DS3231 Precision RTC", shortName: "DS3231 RTC",
  manufacturer: adafruit, category: "Interfaces", referencePrefix: "U", subtitle: "I²C / original blue #3013",
  description: "Original blue Adafruit #3013 precision RTC breakout with temperature-compensated timekeeping and a CR1220 holder on the back.",
  tags: ["rtc", "ds3231", "clock", "i2c", "coin cell", "3013"],
  source: "https://learn.adafruit.com/adafruit-ds3231-precision-rtc-breakout/pinouts", width: 182, height: 120,
}, {
  body: [23, 17.6], color: "#215c93", modelHeight: 1.5,
  details: [[0, -1, 10.3, 10.5, 2.6, "#2e3a49"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#205d99", "#5690bf") + mountingHole(21, 20) + mountingHole(161, 20) +
  chip(64, 25, 54, 54, "DS3231", 8) + smd(39, 48) + smd(39, 57) + smd(39, 68) +
  smd(137, 38) + smd(137, 48) + smd(137, 58) + label(91, 15, "DS3231", 10),
header("J1", "bottom", 27, numbered([
  vin("2.3–5.5 V", "VIN"), ground(), scl, sda,
  supply("bat", "BAT", "CR1220 positive contact or external backup supply. Follow the DS3231 battery input limits."),
  openDrain("32k", "32K", "32.768 kHz open-drain output. Add a pull-up if used."),
  openDrain("sqw", "SQW", "Open-drain alarm interrupt or square-wave output. Add a pull-up."),
  contact("rst", "RST", "Active-low bidirectional reset and power-fail indicator.", "bidirectional"),
]), { x: -8.89, y: 6.3, axis: "x" }, 18.3));

function cardSocket(x, y, width, height) {
  return rect(x, y, width, height, 2, "#9da8af", "#dce1e3") +
    path(`M${x + 4} ${y + 5}h${width - 8}v${height - 10}h-${width - 8}Z`, "#c7cdd0", "#87949d") +
    rect(x + 2, y + height - 13, width - 4, 11, 1, "#343f48") +
    [0, 1, 2, 3].map(index => rect(x + 7 + index * 8, y + height - 11, 4, 6, 0.5, "#ba9559")).join("");
}

const microSd = peripheral({
  id: "adafruit-microsd-spi-254", name: "Adafruit SPI microSD Breakout #254", shortName: "SPI microSD",
  manufacturer: adafruit, category: "Interfaces", referencePrefix: "U", subtitle: "5 V or 3.3 V host / SPI / card detect",
  description: "Adafruit #254 microSD breakout with a push-push socket, onboard regulator, level shifting and a card-detect switch.",
  tags: ["microsd", "sd card", "storage", "datalogger", "spi", "254"],
  source: "https://learn.adafruit.com/adafruit-micro-sd-breakout-board-card-tutorial/arduino-wiring", width: 158, height: 166,
}, {
  body: [31.85, 25.4], color: "#225888", modelHeight: 1.5,
  details: [[-6, 0, 14, 15, 2.0, "#b8c2c6"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#255c99", "#548ac1") +
  mountingHole(18, 17) + mountingHole(109, 17) + mountingHole(18, 149) + mountingHole(109, 149) +
  '<g transform="translate(19 137) rotate(-90)">' + cardSocket(0, 0, 100, 57) + "</g>" +
  chip(85, 44, 27, 63, "", 7) + smd(84, 119) + smd(98, 119) + smd(27, 23) +
  label(71, 25, "MICRO SD", 9),
header("J1", "right", 23, numbered([
  contact("cd", "CD", "Mechanical card-detect contact. It closes to ground when a card is inserted."),
  input("cs", "CS", "Active-low SPI chip select."),
  input("di", "DI", "SPI data into the card from host MOSI."),
  output("do", "DO", "SPI data from the card to host MISO."),
  input("clk", "CLK", "SPI clock."), ground(),
  contact("3v", "3V", "Direct 3.3 V card rail. Use a regulated 3.3 V supply here if bypassing the on-board regulator."),
  supply("5v", "5V", "Input to the on-board 3.3 V regulator."),
]), { x: 13.2, y: -8.89 }, 17));

const openLog = peripheral({
  id: "sparkfun-openlog-13712", name: "SparkFun OpenLog Serial Logger", shortName: "OpenLog",
  manufacturer: "SparkFun", category: "Interfaces", referencePrefix: "U", subtitle: "DEV-13712 / UART to microSD",
  description: "OpenLog DEV-13712 with an ATmega328P, an underside microSD socket and a six-pin serial connection.",
  tags: ["openlog", "microsd", "uart", "serial", "storage", "datalogger", "13712"],
  source: "https://learn.sparkfun.com/tutorials/openlog-hookup-guide/hardware-overview", width: 150, height: 131,
}, {
  body: [15.24, 19.05], color: "#a52e39", modelHeight: 1.5,
  details: [[0, 0, 7, 7, 1, "#303b45"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#ad363e", "#d56d72") + label(75, 23, "OpenLog", 14) +
  chip(48, 46, 54, 48, "ATMEGA", 8) + rect(113, 39, 13, 22, 2, "#b9c3c7", "#e1e7e9") +
  smd(28, 46) + smd(27, 56) + smd(28, 74) + smd(113, 78) + smd(112, 93),
header("J1", "bottom", 28, numbered([
  input("grn", "GRN", "Auto-reset from the serial adapter DTR output through the reset capacitor."),
  input("rxi", "RXI", "UART receive, 3.3 V logic. Connect to host TX."),
  output("txo", "TXO", "UART transmit, 3.3 V logic. Connect to host RX."),
  vin("3.3–12 V, with 3.3–5 V recommended", "VCC"), ground(), ground("blk", "BLK"),
]), { x: -6.35, y: 8.25, axis: "x" }, 18.8));

const max98357 = peripheral({
  id: "adafruit-max98357a-i2s", name: "Adafruit MAX98357A I²S Mono Amplifier", shortName: "MAX98357A",
  manufacturer: adafruit, category: "Interfaces", referencePrefix: "U", subtitle: "I²S / mono class D / #3006",
  description: "Adafruit #3006 MAX98357A amplifier breakout. Connect a speaker between the two bridge-tied outputs. Gain and channel selection are configurable.",
  tags: ["max98357a", "i2s", "audio", "speaker", "amplifier", "class d", "3006"],
  source: "https://learn.adafruit.com/adafruit-max98357-i2s-class-d-mono-amp/pinouts", width: 164, height: 139,
}, {
  body: [19.4, 17.8], color: "#1e5893", modelHeight: 1.5,
  details: [[0, -6.2, 7, 5.8, 6, "#4a865d"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#205c9a", "#5898c3") +
  mountingHole(19, 24) + mountingHole(145, 24) + rect(49, 13, 66, 37, 2, "#589363", "#345b4a") +
  screw(68, 33, 9) + screw(96, 33, 9) +
  chip(63, 67, 39, 24, "", 3) + smd(36, 68) + smd(116, 62) + smd(116, 76) +
  label(82, 105, "MAX98357A", 9),
header("J1", "bottom", 24, numbered([
  input("lrc", "LRC", "I²S left/right clock from the host."), input("bclk", "BCLK", "I²S bit clock from the host."),
  input("din", "DIN", "I²S serial audio data from the host."),
  input("gain", "GAIN", "Gain configuration. See the datasheet resistor table."),
  input("sd", "SD", "Shutdown and channel-mix selection."), ground(), vin("2.7–5.5 V", "VIN"),
]), { x: -7.62, y: 7, axis: "x" }, 19.3),
header("SPK", "top", 68, [
  output("spk-n", "SPK−", "Negative bridge output to the speaker. Keep isolated from ground."),
  output("spk-p", "SPK+", "Positive bridge output to the speaker."),
], { x: -1.75, y: -6, axis: "x", pitch: 3.5, drill: 1, size: 1.9 }, 28));

const rfid = peripheral({
  id: "keyestudio-rc522-ks0067", name: "Keyestudio RC522 RFID Module", shortName: "RC522 RFID",
  manufacturer: "Keyestudio", category: "Interfaces", referencePrefix: "U", subtitle: "KS0067 / 13.56 MHz / SPI",
  description: "Black KS0067 MFRC522 breakout with seven host contacts. Communicates over SPI at 3.3 V and reads compatible 13.56 MHz cards and tags.",
  tags: ["rc522", "mfrc522", "rfid", "nfc", "spi", "keyestudio", "ks0067"],
  source: "https://docs.keyestudio.com/projects/KS0067/en/latest/docs/KS0067.html", width: 206, height: 146,
}, {
  body: [52, 34], color: "#292b31", modelHeight: 1.5,
  details: [[-13, 0, 6, 6, 1, "#272d32"]], note: carrierNote,
}, ({ width, height }) =>
  board(width, height, "#24252c", "#4a5058") +
  mountingHole(61, 16) + mountingHole(61, 130) + mountingHole(182, 30) + mountingHole(182, 116) +
  chip(50, 57, 32, 29, "", 5) + rect(27, 12, 30, 12, 5, "#b4bdbf", "#d9dedf") +
  [36, 47, 98, 109].map(y => smd(36, y) + smd(77, y)).join("") +
  [0, 1, 2, 3].map(index => {
    const inset = index * 8;
    return path(`M${112 + inset} ${32 + inset}Q${82 + inset * 2} 73 ${112 + inset} ${114 - inset}M${172 - inset} ${32 + inset}Q${200 - inset * 2} 73 ${172 - inset} ${114 - inset}`, "none", "#c3a852", 1.3);
  }).join("") + circle(142, 73, 3, "#c3a852") +
  label(144, 124, "RFID-RC522", 9, "#f1cb69"),
header("J1", "left", 25, numbered([
  input("nss", "NSS", "Active-low SPI chip select."), input("sck", "SCK", "SPI clock from the host."),
  input("mosi", "MOSI", "SPI data from the host."), output("miso", "MISO", "SPI data to the host."),
  ground(), input("rst", "RST", "Active-low reset input."), vin("3.3 V"),
]), { x: -24.5, y: -7.62 }, 16));

const gps = peripheral({
  id: "waveshare-uart-gps-neo-6m", name: "Waveshare UART GPS NEO-6M", shortName: "NEO-6M GPS",
  manufacturer: "Waveshare", category: "Interfaces", referencePrefix: "U", subtitle: "GPS L1 / UART / ceramic antenna",
  description: "Waveshare UART GPS NEO-6M board with a ceramic patch antenna and angled five-pin header. The module outputs NMEA messages over UART by default.",
  tags: ["neo-6m", "neo6m", "gps", "gnss", "nmea", "uart", "pps", "ublox"],
  source: "https://www.waveshare.com/wiki/UART_GPS_NEO-6M", width: 152, height: 160,
}, {
  body: [14, 5], color: "#285d83", modelHeight: 2,
  note: "Reference five-pin 2.54 mm host termination for the angled-header GPS module. Allow clearance for the module and antenna assembly.",
}, ({ width, height }) =>
  board(width, height, "#215486", "#4c83ac") +
  rect(20, 16, 112, 101, 9, "#c3a759", "#e5cd83") +
  rect(27, 23, 98, 87, 6, "#dfce88", "#b8a461") +
  path("M36 30H116V92L105 103H36Z", "#eeece0", "#c4c2ad") +
  circle(76, 64, 7.5, "#c1b78b", "#f7efd0") + circle(76, 64, 3, "#7f7f73", "#d4ceb1") +
  smd(126, 119) + label(76, 124, "NEO-6M GPS", 9, "#e1e7ee"),
header("J1", "bottom", 28, numbered([
  vin("2.7–5 V"), ground(), output("txd", "TXD", "GPS UART transmit. Connect to host RX."),
  input("rxd", "RXD", "GPS UART receive. Connect to host TX for configuration."),
  output("pps", "PPS", "GPS time-pulse output."),
]), { x: -5.08, y: 0, axis: "x" }, 24));

const dfPlayer = peripheral({
  id: "dfrobot-dfplayer-mini-dfr0299", name: "DFRobot DFPlayer Mini MP3 Module", shortName: "DFPlayer Mini",
  manufacturer: dfrobot, category: "Interfaces", referencePrefix: "U", subtitle: "DFR0299 / microSD audio / UART",
  description: "Compact audio player with a microSD socket, UART control, analog stereo outputs and a bridge output for a speaker. The contact numbering follows the DFR0299 function table and mechanical drawing.",
  tags: ["dfplayer", "mp3", "audio", "uart", "microsd", "speaker", "dfr0299"],
  source: "https://wiki.dfrobot.com/dfr0299/", width: 180, height: 156,
}, {
  body: [20.32, 20.32], color: "#2a2b30", modelHeight: 1.4,
  details: [[0, 2.6, 13.5, 14, 1.6, "#a8b0b5"]],
  note: "DFRobot DFR0299 20.32 mm square carrier with 2.54 mm header pitch and 18.03 mm row spacing. Confirm socket clearance on the fitted revision.",
}, ({ width, height }) =>
  board(width, height, "#24252b", "#555762") +
  rect(26, 18, 15, 121, 1, "#383c42") + rect(139, 18, 15, 121, 1, "#383c42") +
  label(90, 33, "DFPlayer Mini", 10) + smd(49, 18) + smd(62, 18) + smd(109, 18) + smd(122, 18) +
  cardSocket(46, 48, 88, 96) + circle(90, 19, 2, "#d4dc9c"),
header("J1", "left", 21, numbered([
  vin("3.2–5 V"), input("rx", "RX", "UART receive input."), output("tx", "TX", "UART transmit output."),
  output("dac-r", "DAC_R", "Right-channel analog audio output."), output("dac-l", "DAC_L", "Left-channel analog audio output."),
  output("spk-2", "SPK_2", "Negative bridge speaker output. Connect the speaker across SPK_1 and SPK_2."),
  ground(), output("spk-1", "SPK_1", "Positive bridge speaker output."),
]), { x: -9.015, y: -8.89 }, 16.3),
header("J2", "right", 21, numbered([
  input("io-1", "IO_1", "Active-low key input for previous track or volume down."), ground("gnd-2"),
  input("io-2", "IO_2", "Active-low key input for next track or volume up."),
  input("adkey-1", "ADKEY_1", "Analog resistor-key input 1."),
  input("adkey-2", "ADKEY_2", "Analog resistor-key input 2."),
  serialData("usb-plus", "USB+", "USB D+ for external storage mode."), serialData("usb-minus", "USB−", "USB D− for external storage mode."),
  output("busy", "BUSY", "Playback status. Low while playing."),
], 9).reverse(), { x: 9.015, y: -8.89 }, 16.3));

const entries = [lcd1602, oled091, tft096, sh1106, tm1637, matrix, rtc, microSd, openLog, max98357, rfid, gps, dfPlayer];

export default defineFamily("common-peripherals", entries.map(({ art: render, ...entry }) => {
  const mounting = sourceReferenceMounting(entry.component, physicalReferences[entry.component.id]);
  return { ...entry, render, ...(mounting ? { mounting } : {}) };
}));
