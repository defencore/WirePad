import { board, chip, circle, label, mountingHole, rect, smd, tactile, usb } from "./catalog-extension.js";
import { boardDefinition, contact, gpio, ground, header, reset, supply } from "./catalog-stm-arduino-tools.js";

const manufacturer = "Arduino";
const docs = "https://docs.arduino.cc/hardware/";
const range = length => Array.from({ length }, (_, index) => index);
const arduinoBlue = "#007987";
const boardNote = "Reference connector carrier. Verify connector spacing and the specific board revision against Arduino mechanical drawings before fabrication.";
const boardPower = (id = "5v") => supply(id, "5V", "Board 5 V rail. Power and current limits depend on the selected supply.", "power_out");
const threeVolt = () => supply("3v3", "3V3", "Regulated 3.3 V output.", "power_out");
const analogReference = description => contact("aref", "AREF", description, "input");
const reserved = null;

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

function unoHeaders({ first = reserved, inputRange, aref, digitalPins, analogPins, i2c, spi, extras = [] }) {
  return [
    header("POWER", "left", 140, unoPower(first, inputRange), { x: -23.8, y: -9.5 }),
    header("ANALOG", "left", 282, analogPins, { x: -23.8, y: 13.36 }),
    header("DIGITAL-H", "right", 77, [
      gpio("scl", "SCL", i2c.scl), gpio("sda", "SDA", i2c.sda), analogReference(aref), ground("digital-gnd"),
      ...digitalPins.slice(8).reverse(),
    ], { x: 24.2, y: -23 }),
    header("DIGITAL-L", "right", 249, digitalPins.slice(0, 8).reverse(), { x: 24.2, y: 3.924 }),
    header("SPI", "bottom", 81, spi, { x: 3.6, y: 24.5, axis: "x", columns: 2 }),
    ...extras,
  ];
}

const avrPorts = ["PD0", "PD1", "PD2", "PD3", "PD4", "PD5", "PD6", "PD7", "PB0", "PB1", "PB2", "PB3", "PB4", "PB5"];
const avrRoles = { 0: "UART RX.", 1: "UART TX.", 3: "PWM.", 5: "PWM.", 6: "PWM.", 9: "PWM.", 10: "SPI SS and PWM.", 11: "SPI MOSI and PWM.", 12: "SPI MISO.", 13: "SPI SCK and built-in LED." };
const analogAvr = range(6).map(index => analog(index, `PC${index}`, ({ 4: "I²C SDA.", 5: "I²C SCL." })[index]));

function shieldBoardArt(component) {
  const { width, height, shortName, art } = component;
  const wifi = art === "arduino-uno-r4-wifi";
  const r4 = wifi || art === "arduino-uno-r4-minima";
  const leonardo = art === "arduino-leonardo";
  const center = width / 2;
  let body = board(width, height, arduinoBlue, "#4798a0") +
    mountingHole(34, 57) + mountingHole(width - 34, 57) + mountingHole(34, height - 37) + mountingHole(width - 34, height - 37) +
    rect(33, 27, 39, 57, 3, "#20282d", "#899099") + circle(53, 40, 10, "#10151d", "#a9aca9") +
    usb(width - 95, 28, r4 ? 38 : leonardo ? 39 : 51) + tactile(width - 63, 62) +
    rect(8, 133, 9, 230, 3, "#264349") + rect(width - 17, 69, 9, 296, 3, "#264349") +
    chip(center + 13, 173, 46, 52, r4 ? "RA4M1" : leonardo ? "32U4" : "328P", 7) +
    label(center, 105, "ARDUINO", 13, "#d8f1ef") + label(center, height - 59, shortName, 12) +
    [72, 88, 103, 117].map(x => smd(x, 115, "#e1cf8b")).join("") +
    rect(center - 40, height - 39, 80, 22, 3, "#264349") +
    label(center, height - 28, "SPI", 8);
  if (wifi) {
    body += rect(56, 134, 59, 24, 4, "#bdc6c6") + label(85, 146, "ESP32-S3", 8, "#26373b") +
      rect(49, 167, 69, 100, 4, "#1c3139") +
      range(96).map(index => circle(55 + index % 8 * 8, 173 + Math.floor(index / 8) * 8, 1.8, "#dbc777")).join("") +
      rect(50, height - 100, 26, 18, 2, "#dfdfd2") + label(63, height - 91, "I²C", 7, "#2b4549");
  }
  return body;
}

function unoDefinition(id, model, subtitle, description, configuration) {
  return boardDefinition({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, description,
    source: docs + id.slice("arduino-".length) + "/", width: 240, height: 399, tags: ["arduino", "shield", "development board"],
  }, unoHeaders(configuration), { body: [53.34, 68.58], color: arduinoBlue, note: boardNote }, shieldBoardArt);
}

const unoR3 = unoDefinition("arduino-uno-rev3", "UNO R3", "ATmega328P · 5 V",
  "Classic socketed ATmega328P board with USB-B, 5 V logic, Arduino shield headers and the ATmega328P ICSP connector.",
  {
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
    extras: [header("SWD", "top", 44, [
      boardPower("swd-5v"), gpio("swdio", "DIO", "RA4M1 SWDIO on P108."), ground("swd-gnd3"),
      contact("swclk", "CLK", "RA4M1 SWCLK on P300.", "input"), ground("swd-gnd5"), reserved,
      contact("swd-rx", "RX", "RA4M1 SCI1 receive on P502.", "input"),
      contact("swd-tx", "TX", "RA4M1 SCI1 transmit on P501.", "output"), ground("swd-gnd9"),
      contact("swd-reset", "RST", "RA4M1 active-low reset, as shown in the ABX00080 V1.2 schematic.", "input"),
    ], { x: -4, y: -13.5, axis: "x", columns: 2, pitch: 1.27, size: 0.9, drill: 0.45 })],
  });

const unoWifi = unoDefinition("arduino-uno-r4-wifi", "UNO R4 WiFi", "RA4M1 + ESP32-S3",
  "Arduino UNO with 5 V RA4M1 shield pins, a separate 3.3 V ESP32-S3 header, 3.3 V Qwiic and a 12×8 LED matrix.",
  {
    ...r4Configuration("wifi"),
    extras: [
      header("ESP", "top", 28, [
        gpio("esp-gpio42", "IO42", "ESP32-S3 GPIO42. 3.3 V logic."),
        gpio("esp-gpio41", "IO41", "ESP32-S3 GPIO41. 3.3 V logic."),
        contact("esp-tx", "TX0", "ESP32-S3 UART0 TX on GPIO43. 3.3 V logic.", "output"),
        gpio("esp-boot", "IO0", "ESP32-S3 GPIO0 download strap. 3.3 V logic."),
        contact("esp-rx", "RX0", "ESP32-S3 UART0 RX on GPIO44. 3.3 V logic.", "input"),
        ground("esp-gnd"),
      ], { x: 13.5, y: -16, axis: "x", columns: 2, pitch: 2.54 }),
      header("QWIIC", "top", 153, [
        ground("qwiic-gnd"), supply("qwiic-3v3", "3V3", "3.3 V Qwiic supply.", "power_out"),
        gpio("qwiic-sda", "SDA", "3.3 V Qwiic I²C bus data, RA4M1 P401."),
        gpio("qwiic-scl", "SCL", "3.3 V Qwiic I²C bus clock, RA4M1 P400."),
      ], { x: -17, y: 27.3, axis: "x", pitch: 1, size: 0.65, drill: 0.35 }),
      header("JOFF", "left", 76, [
        contact("off", "OFF", "Pull low to disable the VIN-side buck regulator.", "input"),
        ground("rtc-gnd"), supply("vrtc", "VRTC", "RA4M1 RTC backup supply input (VBATT)."),
      ], { x: -23.8, y: -23.6 }),
    ],
  });

const leonardoPorts = ["PD2", "PD3", "PD1", "PD0", "PD4", "PC6", "PD7", "PE6", "PB4", "PB5", "PB6", "PB7", "PD6", "PC7"];
const leonardoRoles = { 0: "Serial1 RX.", 1: "Serial1 TX.", 2: "I²C SDA.", 3: "I²C SCL and PWM.", 4: "Also analog input A6.", 5: "PWM.", 6: "PWM and analog input A7.", 8: "Also analog input A8.", 9: "PWM and analog input A9.", 10: "PWM and analog input A10.", 11: "PWM.", 12: "Also analog input A11.", 13: "Built-in LED and PWM." };
const leonardoAnalog = ["PF7", "PF6", "PF5", "PF4", "PF1", "PF0"].map((port, index) => analog(index, port));
const leonardo = unoDefinition("arduino-leonardo", "Leonardo", "ATmega32U4 · native USB",
  "ATmega32U4 shield board with 5 V logic, native USB and SPI on the separate ICSP connector.",
  {
    inputRange: "External VIN supply. Arduino recommends 7–12 V for normal operation.",
    aref: "Analog voltage reference input.",
    digitalPins: leonardoPorts.map((port, index) => digital(index, port, leonardoRoles[index])),
    analogPins: leonardoAnalog,
    i2c: { scl: "I²C clock, electrically shared with D3 (PD0).", sda: "I²C data, electrically shared with D2 (PD1)." },
    spi: avrSpi(),
  });

function nanoBodyArt({ width, height, art, shortName }) {
  const isWireless = art === "arduino-nano-esp32" || art === "arduino-nano-rp2040-connect";
  const nanoR4 = art === "arduino-nano-r4";
  const avr = art === "arduino-nano" || art === "arduino-micro";
  const center = width / 2;
  return board(width, height, arduinoBlue, "#4798a0") +
    [23, width - 23].map(x => mountingHole(x, 21) + mountingHole(x, height - 22)).join("") +
    usb(center - 23, 8, 46) +
    chip(center - 22, 86, 44, 49, nanoR4 ? "RA4M1" : art === "arduino-nano-every" ? "4809" : avr ? "AVR" : art === "arduino-nano-esp32" ? "ESP32-S3" : "RP2040", 6) +
    tactile(center - 8, 52) +
    [center - 23, center - 11, center + 3, center + 17].map(x => smd(x, 159, "#d9bc67")).join("") +
    (isWireless ? rect(center - 29, 175, 58, 65, 4, "#b9c5c7", "#788f93") + rect(center - 23, 222, 46, 13, 2, "#3a7976") : "") +
    label(center, isWireless ? 206 : 205, shortName, isWireless ? 7.5 : 8.5, isWireless ? "#233b3f" : "#e7f3ee") +
    label(center, height - 39, "ARDUINO", 8, "#bfdfda");
}

function nanoDefinition(id, model, subtitle, description, left, right, extras = []) {
  const height = Math.max(left.length, right.length) * 16 + 62;
  const length = id === "arduino-micro" ? 48 : 45;
  const connectors = id === "arduino-nano-r4" ? ["JP1", "JP2"] : ["LEFT", "RIGHT"];
  const headers = [
    header(connectors[0], "left", 32, left, { x: -7.62, y: -(left.length - 1) * 1.27 }),
    header(connectors[1], "right", 32, right, { x: 7.62, y: -(right.length - 1) * 1.27 }),
    ...extras,
  ];
  return boardDefinition({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, description,
    source: docs + id.slice("arduino-".length) + "/", width: 138, height,
    tags: ["arduino", "breadboard", "development board"],
  }, headers, { body: [18, length], color: arduinoBlue, note: boardNote }, nanoBodyArt);
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
    ...nanoLeft(microPins, analogReference("Analog reference input."), [...leonardoAnalog, reserved, reserved], "6–9 V external DC supply."),
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

function megaBodyArt({ width, height, art, shortName }) {
  const center = width / 2;
  const due = art === "arduino-due";
  return board(width, height, arduinoBlue, "#4798a0") +
    [28, width - 28].map(x => mountingHole(x, 67) + mountingHole(x, height - 79)).join("") +
    rect(56, 42, 47, 58, 4, "#26343a", "#828e95") + circle(79, 58, 10, "#111b22") +
    usb(width - 120, 41, due ? 36 : 55) + (due ? usb(width - 165, 41, 36) : "") + tactile(width - 60, 42) +
    rect(8, 112, 9, 393, 3, "#264349") + rect(width - 17, 104, 9, 373, 3, "#264349") +
    chip(center - 38, 215, 76, 82, due ? "SAM3X8E" : "ATmega2560", 12) +
    chip(center + 15, 114, 27, 35, "USB", 4) +
    label(center, 174, "ARDUINO", 17, "#d6efec") +
    label(center, 360, shortName, 15) + label(center, 388, "DIGITAL / ANALOG", 9, "#bce3e1") +
    rect(37, height - 64, width - 74, 27, 4, "#25383d") +
    range(36).map(index => circle(48 + Math.floor(index / 2) * 13.7, height - 57 + index % 2 * 12, 2.8, "#c4a66e")).join("");
}

function megaDefinition(id, model, subtitle, description, { pins, analogPins, highI2c, spi, logicVoltage = "5 V" }) {
  return boardDefinition({
    id, art: id, name: `Arduino ${model}`, shortName: model, manufacturer, subtitle, width: 332, height: 568,
    description: description + " The two rows of the D22–D53 header are drawn on opposite ends.",
    source: docs + id.slice("arduino-".length) + "/", tags: ["arduino", "shield", "development board"],
  }, [
    header("POWER", "left", 126, unoPower(reserved, "External VIN supply. Arduino recommends 7–12 V for normal operation.", logicVoltage),
      { x: -23.8, y: -26 }),
    header("ANALOG", "left", 266, analogPins, { x: -23.8, y: -3.14 }),
    header("DIGITAL-H", "right", 104, [
      ...highI2c, analogReference("Analog voltage reference input."), ground("digital-gnd"), ...pins.slice(8, 14).reverse(),
    ], { x: 24.2, y: -39.5 }),
    header("DIGITAL-L", "right", 271, pins.slice(0, 8).reverse(), { x: 24.2, y: -12.576 }),
    header("SERIAL", "right", 406, pins.slice(14, 22), { x: 24.2, y: 7.74 }),
    header("AUX-EVEN", "top", 30, [boardPower("aux-5v-even"), ...range(16).map(index => pins[22 + index * 2]), ground("aux-gnd-even")],
      { x: -21.59, y: 46, axis: "x" }),
    header("AUX-ODD", "bottom", 30, [boardPower("aux-5v-odd"), ...range(16).map(index => pins[23 + index * 2]), ground("aux-gnd-odd")],
      { x: -21.59, y: 48.54, axis: "x" }),
    header("SPI", "left", 25, spi, { x: 3, y: 13, axis: "x", columns: 2 }),
  ], { body: [53.34, 101.52], color: arduinoBlue, note: boardNote }, megaBodyArt);
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

export const arduinoDefinitions = [unoR3, unoMinima, unoWifi, nano, every, nanoEsp32, nanoRp, nanoR4, leonardo, micro, mega, due];
export const arduinoModels = {
  "arduino-uno-r4-wifi": { label: "Arduino UNO R4 WiFi STEP model", url: "https://docs.arduino.cc/resources/models/ABX00087-step.zip" },
  "arduino-nano-esp32": { label: "Arduino Nano ESP32 STEP model", url: "https://docs.arduino.cc/resources/models/ABX00083-step.zip" },
};
