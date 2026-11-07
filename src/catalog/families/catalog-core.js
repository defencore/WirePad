import { defineFamily } from "../registry.js";
import { physicalEntry } from "../shared/physical-contacts.js";
import { ads1220, drawAds1220, ads1220Footprint } from "../parts/ads1220.js";
import { hw0519, drawHw0519 } from "../parts/hw0519.js";
import { st3215, drawSt3215 } from "../parts/st3215.js";
import { espDevKitCArt } from "../shared/esp-devkit-art.js";
import { board, chip, circle, edgePads, label, line, moduleArt, mountingHole, pad, path, rect, screw, smd } from "../shared/svg.js";

// Pin specifications are [id, label, description, electrical type, terminal number].
const ground = (id = "gnd") => [id, "GND", "Ground and signal reference.", "power_in"];
const supply = (id, label, description) => [id, label, description, "power_in"];
const output = (id, label, description) => [id, label, description, "output"];
const input = (id, label, description) => [id, label, description, "input"];
const signal = (id, label, description) => [id, label, description, "bidirectional"];
const passive = (id, label, description) => [id, label, description, "passive"];
const clock = (label = "SCL") => input("scl", label, "I²C clock.");
const data = (label = "SDA") => signal("sda", label, "I²C data.");

function row(side, length, start, spacing, specs, prefix = "") {
  const vertical = side === "left" || side === "right";
  const edge = side === "left" || side === "top" ? 0 : length;
  return specs.map(([id, label, description, type, number], index) => {
    const offset = start + index * spacing;
    return {
      id, label, description, type,
      number: number ?? `${prefix}${index + 1}`,
      x: vertical ? edge : offset,
      y: vertical ? offset : edge,
    };
  });
}

function gpio(number, functions = "", label = String(number)) {
  return signal(`gpio${number}`, label, `GPIO${number}.${functions ? ` ${functions}` : ""}`);
}

function pair(id1 = "1", label1 = "1", description1 = "First terminal.", id2 = "2", label2 = "2", description2 = "Second terminal.") {
  return [
    { id: id1, label: label1, description: description1, number: "1", type: "passive", x: 0, y: 16 },
    { id: id2, label: label2, description: description2, number: "2", type: "passive", x: 96, y: 16 },
  ];
}

const esp32 = {
  id: "esp32-s3", name: "ESP32-S3 DevKitC-1", shortName: "ESP32-S3", category: "Microcontrollers",
  description: "Espressif development board (v1.1) with an ESP32-S3-WROOM module, Wi-Fi, Bluetooth LE and two USB ports.",
  manufacturer: "Espressif", subtitle: "Wi-Fi / BLE development board", tags: ["devkit", "esp32", "esp32-s3", "dual usb", "uart", "wifi"],
  source: "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide_v1.1.html",
  width: 142, height: 374, art: "esp32", referencePrefix: "U",
  pins: [
    ...row("left", 142, 20, 15, [
      supply("3v3", "3V3", "3.3 V supply rail. The board can also be powered from this rail."),
      supply("3v3-2", "3V3", "Second contact on the 3.3 V rail."),
      input("reset", "RST", "Active-low chip enable and reset."),
      gpio(4, "ADC1 channel 3 and touch input."),
      gpio(5, "ADC1 channel 4 and touch input."),
      gpio(6, "ADC1 channel 5 and touch input."),
      gpio(7, "ADC1 channel 6 and touch input."),
      gpio(15, "ADC2 channel 4 and UART0 RTS."),
      gpio(16, "ADC2 channel 5 and UART0 CTS."),
      gpio(17, "UART1 TX and ADC2 channel 6."),
      gpio(18, "UART1 RX and ADC2 channel 7."),
      gpio(8, "ADC1 channel 7 and touch input."),
      gpio(3, "Boot strapping pin, ADC1 channel 2 and touch input."),
      gpio(46, "Boot strapping pin."),
      gpio(9, "ADC1 channel 8 and touch input."),
      gpio(10, "ADC1 channel 9 and touch input."),
      gpio(11, "ADC2 channel 0 and touch input."),
      gpio(12, "ADC2 channel 1 and touch input."),
      gpio(13, "ADC2 channel 2 and touch input."),
      gpio(14, "ADC2 channel 3 and touch input."),
      supply("5v", "5V", "5 V rail and alternative power input."),
      ground(),
    ], "J1."),
    ...row("right", 142, 20, 15, [
      ground("gnd-2"),
      gpio(43, "UART0 TX.", "TX"),
      gpio(44, "UART0 RX.", "RX"),
      gpio(1, "ADC1 channel 0 and touch input."),
      gpio(2, "ADC1 channel 1 and touch input."),
      gpio(42, "JTAG TMS."),
      gpio(41, "JTAG TDI."),
      gpio(40, "JTAG TDO."),
      gpio(39, "JTAG TCK."),
      gpio(38, "Shared with the onboard addressable RGB LED on v1.1."),
      gpio(37, "Reserved for internal flash or PSRAM on some module variants."),
      gpio(36, "Reserved for internal flash or PSRAM on some module variants."),
      gpio(35, "Reserved for internal flash or PSRAM on some module variants."),
      gpio(0, "Boot button and boot strapping."),
      gpio(45, "Boot strapping pin."),
      gpio(48, "SPI clock negative line on supported modes."),
      gpio(47, "SPI clock positive line on supported modes."),
      gpio(21),
      gpio(20, "Native USB D+ and ADC2 channel 9."),
      gpio(19, "Native USB D− and ADC2 channel 8."),
      ground("gnd-3"),
      ground("gnd-4"),
    ], "J3."),
  ],
};

const max3485 = {
  id: "max3485", name: "MAX3485 RS-485 Breakout", shortName: "MAX3485", category: "Interfaces",
  description: "Generic 3.3 V half-duplex UART-to-RS-485 breakout with separate transmit and receive enable inputs. Check the header order on your board.",
  manufacturer: "Generic breakout", subtitle: "3.3 V UART to RS-485", tags: ["rs485", "modbus", "uart", "transceiver"],
  source: "https://www.analog.com/en/products/max3485.html",
  width: 158, height: 136, art: "rs485", referencePrefix: "U",
  pins: [
    ...row("left", 158, 24, 18, [
      supply("vcc", "VCC", "3.3 V supply input."),
      ground(),
      input("di", "DI", "Driver input. Connect to the microcontroller UART TX."),
      output("ro", "RO", "Receiver output. Connect to the microcontroller UART RX."),
      input("de", "DE", "Driver enable, active high."),
      input("re", "/RE", "Receiver enable, active low."),
    ]),
    ...row("right", 158, 59, 20, [
      [...signal("a", "A", "Non-inverting RS-485 line on this transceiver."), "7"],
      [...signal("b", "B", "Inverting RS-485 line on this transceiver."), "8"],
    ]),
  ],
};

const bme280 = {
  id: "bme280", name: "BME280 Environmental Sensor", shortName: "BME280", category: "Sensors",
  description: "Adafruit STEMMA QT breakout for the Bosch temperature, humidity and pressure sensor. Use I²C or SPI.",
  manufacturer: "Adafruit", subtitle: "Temperature / humidity / pressure", tags: ["bosch", "i2c", "spi", "weather"],
  source: "https://learn.adafruit.com/adafruit-bme280-humidity-barometric-pressure-temperature-sensor-breakout/pinouts",
  width: 124, height: 128, art: "bme280", referencePrefix: "U",
  pins: row("left", 124, 18, 15, [
    supply("vin", "VIN", "3–5 V input. Match the supply to the host logic level."),
    ["3vo", "3Vo", "3.3 V regulator output.", "power_out"],
    ground(),
    input("scl", "SCK", "I²C clock or SPI serial clock."),
    signal("sdo", "SDO", "SPI data out. In I²C mode, connect to ground to change the address from 0x77 to 0x76."),
    signal("sda", "SDI", "I²C data or SPI serial data input."),
    input("cs", "CS", "Active-low chip select in SPI mode. Leave open for I²C."),
  ]),
};

const soil = {
  id: "rs485-soil", name: "RS-485 Soil Sensor", shortName: "RS-485 Soil", category: "Sensors",
  description: "DFRobot SEN0600 temperature and moisture probe with a four-wire Modbus RTU connection.",
  manufacturer: "DFRobot", subtitle: "SEN0600 / Modbus RTU", tags: ["rs485", "modbus", "temperature", "moisture", "probe"],
  source: "https://wiki.dfrobot.com/sen0600/",
  width: 128, height: 134, art: "soil", referencePrefix: "U",
  pins: row("left", 128, 34, 19, [
    supply("vcc", "VCC", "Brown lead. 5–30 V DC supply input."),
    ground(),
    signal("a", "485-A", "Yellow lead. RS-485 data line A."),
    signal("b", "485-B", "Blue lead. RS-485 data line B."),
  ]).map((pin) => pin.id === "gnd" ? { ...pin, description: "Black lead. Supply ground." } : pin),
};

const ads1115 = {
  id: "ads1115", name: "ADS1115 16-bit ADC", shortName: "ADS1115", category: "ADC",
  description: "Adafruit STEMMA QT breakout with four single-ended channels or two differential pairs, a programmable gain amplifier and I²C.",
  manufacturer: "Adafruit", subtitle: "4-channel I²C ADC", tags: ["adc", "analog", "i2c", "converter"],
  source: "https://learn.adafruit.com/adafruit-4-channel-adc-breakouts",
  width: 150, height: 124, art: "ads1115", referencePrefix: "U",
  pins: [
    ...row("bottom", 124, 22, 21, [
      supply("vin", "VIN", "Supply input. Use the same supply voltage as the host logic."),
      ground(), clock(), data(),
      input("addr", "ADDR", "I²C address selection. Defaults to 0x48."),
      ["alert", "ALRT", "Open-drain comparator or conversion-ready output.", "open_collector"],
    ]),
    ...row("top", 0, 22, 21, [
      ["analog-v", "A+", "Analog supply output from VIN through a ferrite bead.", "power_out", "7"],
      [...input("a3", "A3", "Analog input channel 3."), "8"],
      [...input("a2", "A2", "Analog input channel 2."), "9"],
      [...input("a1", "A1", "Analog input channel 1."), "10"],
      [...input("a0", "A0", "Analog input channel 0."), "11"],
      ["analog-gnd", "A−", "Analog ground reference from digital ground through a ferrite bead.", "power_out", "12"],
    ]),
  ],
};

const ina219 = {
  id: "ina219", name: "INA219 Current Sensor", shortName: "INA219", category: "Sensors",
  description: "Adafruit STEMMA QT shunt monitor for DC current and bus voltage over I²C. Default address 0x40.",
  manufacturer: "Adafruit", subtitle: "I²C current / voltage monitor", tags: ["power", "i2c", "analog", "shunt"],
  source: "https://learn.adafruit.com/adafruit-ina219-current-sensor-breakout/pinouts",
  width: 144, height: 100, art: "ina219", referencePrefix: "U",
  pins: [
    ...row("left", 144, 24, 18, [supply("vin", "VIN", "2.7–5.5 V logic supply input."), ground(), clock(), data()]),
    ...row("right", 144, 40, 20, [
      [...passive("vin-plus", "V+", "Positive shunt terminal. Connect to the source for high-side measurements."), "6"],
      [...passive("vin-minus", "V−", "Negative shunt terminal. Connect to the load for high-side measurements."), "5"],
    ]),
  ],
};

const oled = {
  id: "ssd1306", name: "SSD1306 OLED Display", shortName: "SSD1306", category: "Indicators",
  description: "Generic 128 × 64 monochrome OLED module with a four-pin I²C header. Check your module’s voltage and header order.",
  manufacturer: "Generic module", subtitle: "128 × 64 I²C OLED", tags: ["display", "i2c", "screen"],
  width: 138, height: 108, art: "oled", referencePrefix: "DS",
  pins: row("top", 0, 27, 28, [ground(), supply("vcc", "VCC", "Module supply input."), clock(), data()]),
};

const regulator = {
  id: "lm2596", name: "LM2596 Buck Converter", shortName: "LM2596", category: "Power",
  description: "Generic adjustable DC step-down module with separate input and output terminals.",
  manufacturer: "Generic module", subtitle: "Adjustable DC buck converter", tags: ["supply", "regulator", "step down"],
  source: "https://www.ti.com/product/LM2596",
  width: 166, height: 96, art: "buck", referencePrefix: "U",
  pins: [
    ...row("left", 166, 33, 30, [supply("in-plus", "IN+", "Positive DC input."), supply("in-minus", "IN−", "Input ground.")]),
    ...row("right", 166, 33, 30, [
      ["out-plus", "OUT+", "Adjustable positive DC output.", "power_out", "3"],
      ["out-minus", "OUT−", "Output ground.", "power_out", "4"],
    ]),
  ],
};

function part(id, name, category, referencePrefix, defaultValue, description, pins = pair()) {
  return { id, name, category, referencePrefix, defaultValue, description, art: id, width: 96, height: 32, pins };
}

const passives = [
  part("resistor", "Axial Resistor", "Passives", "R", "120 Ω", "Non-polarized through-hole resistor for pull-ups, dividers, current limiting or bus termination."),
  part("capacitor", "Ceramic Capacitor", "Passives", "C", "100 nF", "Non-polarized radial capacitor for bypassing, coupling or timing."),
  part("electrolytic", "Electrolytic Capacitor", "Passives", "C", "47 µF", "Polarized radial capacitor for smoothing or storing charge.",
    pair("positive", "+", "Positive terminal.", "negative", "−", "Negative terminal. Match the marked stripe.")),
  part("inductor", "Axial Inductor", "Passives", "L", "10 µH", "Two-terminal wound inductor for filters and switching circuits."),
  part("ferrite-bead", "Ferrite Bead", "Filters", "FB", "600 Ω", "Series ferrite element for attenuating high-frequency noise."),
  part("diode", "1N4148 Signal Diode", "Semiconductors", "D", "1N4148", "Small-signal switching diode in an axial glass package.",
    pair("k", "K", "Cathode, marked by the band.", "a", "A", "Anode.")),
  part("led", "Red LED", "Indicators", "D", "Red", "5 mm through-hole light-emitting diode. Set the current with a series resistor.",
    pair("k", "K", "Cathode, usually the shorter lead.", "a", "A", "Anode, usually the longer lead.")),
];

const transistorPins = (kind, names) => [
  ...row("left", 94, 37, 0, [input(names[0].toLowerCase(), names[0], kind === "npn" ? "Base control terminal." : "Gate control terminal.")]),
  ...row("right", 94, 19, 36, [
    [...passive(names[1].toLowerCase(), names[1], kind === "npn" ? "Collector terminal." : "Drain terminal."), "2"],
    [...passive(names[2].toLowerCase(), names[2], kind === "npn" ? "Emitter terminal." : "Source terminal."), "3"],
  ]),
];

const discrete = [
  {
    id: "npn", name: "NPN Transistor", category: "Semiconductors", description: "Generic through-hole NPN transistor for switching or amplification. Compare the lead order with the chosen part.",
    referencePrefix: "Q", defaultValue: "NPN", width: 94, height: 74, art: "npn", pins: transistorPins("npn", ["B", "C", "E"]),
  },
  {
    id: "nmos", name: "N-Channel MOSFET", category: "Semiconductors", description: "Generic through-hole N-channel MOSFET. Select a suitable gate drive voltage and confirm its package pinout.",
    referencePrefix: "Q", defaultValue: "NMOS", width: 94, height: 74, art: "nmos", pins: transistorPins("nmos", ["G", "D", "S"]),
  },
  {
    id: "button", name: "Tactile Push Button", category: "Switches", description: "Normally-open momentary push button with two electrical contacts.",
    referencePrefix: "SW", defaultValue: "NO", width: 96, height: 60, art: "button",
    pins: [...row("left", 96, 30, 0, [passive("1", "1", "First switch contact.")]), ...row("right", 96, 30, 0, [[...passive("2", "2", "Second switch contact."), "2"]])],
  },
];

function connector(id, name, positions, description, art = "terminal") {
  const width = 40 + positions * 23;
  return {
    id, name, category: "Connectors", description, referencePrefix: "J", width, height: 70, art,
    pins: row("bottom", 70, 31.5, 23, Array.from({ length: positions }, (_, index) => {
      const number = String(index + 1);
      return passive(number, number, `Contact ${number}.`);
    })),
  };
}

const connectors = [
  connector("terminal-2", "2-pin Screw Terminal", 2, "Two-position screw terminal for field wiring."),
  connector("terminal-3", "3-pin Screw Terminal", 3, "Three-position screw terminal for power or signal wiring."),
  connector("pin-header-4", "4-pin Header", 4, "Single-row 2.54 mm pin header for jumper wires.", "header"),
  {
    ...connector("jst-ph-2", "JST PH 2-pin", 2, "JST B2B-PH-K-S polarized vertical header, 2.0 mm pitch. Assign polarity to suit the matching cable.", "jst"),
    source: "https://www.jst-mfg.com/product/pdf/eng/ePH.pdf",
  },
];

const battery = {
  id: "battery", name: "DC Power Source", shortName: "DC Supply", category: "Power",
  description: "Generic two-lead DC power source for documenting an external supply or battery connection.",
  referencePrefix: "BT", defaultValue: "12 V", width: 96, height: 62, art: "battery", tags: ["battery", "supply", "dc"],
  pins: row("right", 96, 22, 18, [
    ["positive", "+", "Positive supply output.", "power_out"],
    ["negative", "−", "Negative supply return.", "power_out"],
  ]),
};

const coreModuleComponents = [
  esp32, max3485, hw0519, bme280, soil, ads1115, ads1220, ina219, st3215, oled, regulator,
];

const basicSymbols = {
  resistor: "resistor", capacitor: "capacitor", electrolytic: "electrolytic", inductor: "inductor",
  "ferrite-bead": "ferrite-bead", diode: "diode", led: "led", button: "button", battery: "battery",
  npn: "npn", nmos: "nmos-basic",
};
const coreBasicComponents = [...passives, ...discrete, ...connectors, battery].map(component =>
  basicSymbols[component.id] ? { ...component, symbol: basicSymbols[component.id] } : component);

function rs485Art(component, showLabels) {
  const { width, height } = component;
  const logicHeader = rect(6, 15, 15, 111, 1.5, "#1d2936", "#81909c");
  const pins = edgePads({ ...component, pins: component.pins.filter(pin => pin.edge === "left") }, showLabels) +
    (showLabels ? component.pins.filter(pin => pin.edge === "right").map(pin => label(pin.x + 12, pin.y, pin.label, 7, "#f1f2ee", "start")).join("") : "");
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

function moduleHole(pin, showLabels, textX, textY, anchor = "middle") {
  return pad(pin.x, pin.y) + (showLabels ? label(textX, textY, pin.label, 7, qtSilk, anchor) : "");
}

function bmeArt({ pins }, showLabels) {
  // Component-side view, with the seven through-holes along the left edge.
  return qtBoard(15, 6, 94, 116) +
    mountingHole(26, 16) + mountingHole(98, 16) + mountingHole(26, 112) + mountingHole(98, 112) +
    qtPort(61, 14, 180) + qtPort(61, 114) +
    chip(65, 38, 13, 13, "", 3) + chip(70, 79, 13, 14, "", 3) +
    rect(53, 53, 18, 19, 2, "#bdc3bd", "#e0e3db") +
    rect(56, 56, 12, 13, 1, "#a3aaa3") + circle(64, 59, 2, "#444e4a") +
    smd(52, 40) + smd(52, 78) + smd(56, 91) + smd(67, 97) +
    `<g transform="rotate(90 96 64)">${label(96, 64, "BME280", 11, qtSilk)}</g>` +
    pins.map(pin => moduleHole(pin, showLabels, pin.x + 8, pin.y, "start")).join("");
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
    return moduleHole(pin, showLabels, pin.x, pin.y + (pin.edge === "top" ? 10 : -10));
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
    return pad(x, 80) + (showLabels ? label(x, index % 2 === 0 ? 90 : 70, caption, 6.5, qtSilk) : "");
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
  return `<g transform="translate(12 2)">${face}</g>`;
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
    pins.map(pin => moduleHole(pin, showLabels, pin.x, pin.y + 10)).join("");
}

function buckArt({ width, height, pins }, showLabels) {
  const caps = [34, 137].map((x, index) =>
    circle(x, 48, 14, "#a9aca9", "#e5e5dc") +
    path(`M${x - 11} 55Q${x} 68 ${x + 11} 55Z`, "#4d5453") +
    label(x, 46, index === 0 ? "100" : "220", 8, "#333839")
  ).join("");
  const contacts = pins.map(pin => {
    const textX = pin.x + (pin.edge === "left" ? 3 : -3);
    return moduleHole(pin, showLabels, textX, pin.y < height / 2 ? pin.y + 10 : pin.y - 10);
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
  if (art === "header") {
    return pins.map(({ x }) =>
      path(`M${x - 2} 29V15l2-4 2 4v14Z`, "#c1a26b", "#7b6548") +
      path(`M${x - 11} 31l3-3h16l3 3v15l-3 3h-16l-3-3Z`, "#292d35", "#131821") +
      line(x - 7, 31, x + 7, 31, "#626872", 1) +
      rect(x - 2, 48, 4, 9, 0.6, "#ad905d", "#766247")
    ).join("");
  }
  if (art === "jst") {
    const middle = width / 2;
    return rect(13, 13, width - 26, 42, 3, "#c8c4b5", "#aaa698") +
      rect(13, 13, width - 26, 36, 3, "#f4efe0", "#b6b1a2") +
      path(`M19 19H${middle - 9}v5h18v-5H${width - 19}v23H19Z`, "#8c8676", "#b7af9d") +
      rect(21, 30, width - 42, 10, 1, "#b7af99") +
      pins.map(({ x }) => rect(x - 2, 26, 4, 12, 0.8, "#c7ad75", "#6e634d")).join("") +
      path("M16 16h5l-5 5Z", "#99917f");
  }
  return rect(18, 12, width - 36, 45, 2, "#50765c", "#294c39") +
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
  const leadColor = "#8090a0";
  const leads = pins.map(pin => line(pin.x, 38, pin.x, pin.y, leadColor, 2.1)).join("");
  return leads +
    path("M30 17Q30 8 47 8Q64 8 64 17V34L58 39H36L30 34Z", "#28333c", "#18232c") +
    path("M33 18Q33 11 47 11Q60 11 61 17L57 19H37Z", "#48545b") +
    rect(34, 18, 26, 20, 2, "#343f47", "#26323a") +
    label(47, 28, art === "npn" ? "NPN" : "MOS", 7.5) +
    (showLabels ? pins.map(({ x, y, label: pin }) =>
      label(x, y + 8, pin, 7.5, "#40516a")).join("") : "");
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

const coreModuleArt = {
  esp32: moduleArt(espDevKitCArt),
  rs485: rs485Art, bme280: bmeArt, ads1115: adsArt, ina219: inaArt, oled: oledArt, buck: buckArt,
  soil: soilArt, ads1220: drawAds1220, hw0519: drawHw0519, st3215: drawSt3215,
};

const coreBasicArt = {
  resistor, capacitor, electrolytic, inductor, "ferrite-bead": ferrite, diode, led,
  npn: transistorArt, nmos: transistorArt, button: buttonArt, battery: batteryArt,
  terminal: connectorArt, header: connectorArt, jst: connectorArt,
};

const GRID = 2.54;
const offBoard = "This footprint is a host-board termination for the cable. Verify the connector and wire order before fabrication.";

const coreModuleFootprints = {
  "esp32-s3": {
    body: [25.4, 62.74],
    groups: ["J1", "J3"].map((header, side) => ({
      ids: esp32.pins.filter(pin => pin.number.startsWith(header + "."))
        .sort((a, b) => Number(a.number.slice(3)) - Number(b.number.slice(3))).map(pin => pin.id),
      x: side ? 11.43 : -11.43, y: -29.97, axis: "y", pitch: 2.54,
    })),
    note: "ESP32-S3-DevKitC-1 v1.1 carrier pattern. The headers use 2.54 mm pitch and 22.86 mm row spacing. Verify board outline, antenna clearance, and the fitted revision before fabrication.",
    color: "#23343b",
    details: [
      [0, -17, 17.8, 24.5, 2.4, "#a7b2bc"],
      [0, -27, 17.8, 6.2, 0.6, "#23343b"],
      [-5.8, 28, 7.4, 5.2, 2.4, "#9ca9b5"],
      [5.8, 28, 7.4, 5.2, 2.4, "#9ca9b5"],
    ],
  },
  max3485: { body: [24, 20], rows: 21, color: "#183d53", details: [[0, 0, 5, 6, 1.9, "#273041"]] },
  hw0519: {
    body: [43, 15], color: "#185481",
    note: "Photo-based reference carrier for the HW-0519. Measure the board and both header pitches, and verify the EARTH terminal on the fitted revision before fabrication.",
    groups: [
      { ids: ["vcc", "txd", "rxd", "gnd"], axis: "y", x: -20.32, y: -2.54 },
      { ids: ["a", "b", "earth"], axis: "y", x: 20.32, y: -5.08, pitch: 5.08, drill: 1.2, size: 2.5 },
    ],
    details: [[-9, 0, 5, 7, 1.7, "#273041"], [1, 1, 4, 5, 1.6, "#273041"]],
  },
  bme280: {
    body: [25.4, 17.78], drill: 1, color: "#25476c",
    groups: [{ ids: ["vin", "3vo", "gnd", "scl", "sdo", "sda", "cs"], x: -7.62, y: 6.35 }],
    details: [[0, -1.6, 3, 3, 1.05, "#8b9ca5"]],
    note: "Reference carrier for the Adafruit STEMMA QT revision (2652). Outline and header centers follow Adafruit's Eagle board file. Verify the installed header and mounting hardware.",
  },
  ads1115: {
    body: [25.4, 17.78], drill: 1, color: "#315f9e",
    groups: [
      { ids: ["analog-v", "a3", "a2", "a1", "a0", "analog-gnd"], x: -6.35, y: -6.35 },
      { ids: ["vin", "gnd", "scl", "sda", "addr", "alert"], x: -6.35, y: 6.35 },
    ],
    details: [[0, 0, 3, 4.9, 1.15, "#273041"]],
    note: "Reference carrier for the Adafruit STEMMA QT revision (1085). Outline and header centers follow Adafruit's Eagle board file. Verify the installed headers and mounting hardware.",
  },
  ads1220: ads1220Footprint,
  ina219: {
    body: [25.4, 20.32], drill: 1, color: "#315f9e",
    groups: [
      { ids: ["vin", "gnd", "scl", "sda", "vin-minus", "vin-plus"], x: -6.35, y: 7.62 },
      { ids: ["vin-minus", "vin-plus"], x: -1.8, y: -6.35, pitch: 3.5, size: 2.25 },
    ],
    details: [[0, 2.6, 5, 6, 1.7, "#273041"], [0, -6.35, 7.5, 6, 7, "#45946f"]],
    note: "Reference carrier for the Adafruit STEMMA QT revision (904). JP1 and J1 positions follow Adafruit's Eagle board file. Pads 5 and 6 include the alternative screw terminal positions.",
  },
  ssd1306: {
    body: [27.5, 27.8], color: "#254f70",
    groups: [{ ids: ["gnd", "vcc", "scl", "sda"], x: -3.81, y: -12.4 }],
    details: [[0, 2, 25.5, 15.7, 2.15, "#172638"]],
  },
  lm2596: { body: [43, 23], rows: 39, pitch: 5.08, size: 2.2, drill: 1.2, color: "#285fa1", details: [[0, 0, 12, 12, 5.6, "#273041"]] },
  "rs485-soil": { body: [15.24, 7.6], pitch: 3.81, inline: true, drill: 1.2, size: 2.25, color: "#396c50", modelHeight: 7, note: offBoard },
  st3215: {
    body: [8.4, 5.7], pitch: 2.5, inline: true, drill: 1, size: 1.8, color: "#dddcd4", modelHeight: 7.7,
    note: "Reference host-board termination for one 5264-3P servo cable. Verify connector orientation and GND, VCC, and DATA order against the mating cable.",
  },
};

const coreBasicFootprints = {
  battery: { body: [5.8, 4.5], pitch: 2, inline: true, color: "#d9dad4", modelHeight: 4.5, note: offBoard },
  resistor: { body: [6.3, 2.5], pitch: 7.62, inline: true, modelHeight: 2.5, color: "#c9ac75", package: "DIN0207 axial, 7.62 mm lead pitch" },
  capacitor: { body: [5, 2.5], pitch: 2.5, inline: true, modelHeight: 5, color: "#bf964c", package: "5 mm ceramic disc, 2.5 mm lead pitch" },
  electrolytic: { body: [6.3, 6.3], pitch: 2.5, inline: true, modelHeight: 7.7, color: "#354b62", package: "6.3 mm radial electrolytic, 2.5 mm lead pitch" },
  inductor: { body: [6.3, 3], pitch: 7.62, inline: true, modelHeight: 3, color: "#476457", package: "Axial inductor, 7.62 mm lead pitch" },
  "ferrite-bead": { body: [5.8, 3.5], pitch: 7.62, inline: true, modelHeight: 3.5, color: "#303a42", package: "Axial ferrite bead, 7.62 mm lead pitch" },
  diode: { body: [3.4, 1.75], pitch: 7.62, inline: true, modelHeight: 1.75, color: "#ad5f38", package: "DO-35 axial, 7.62 mm lead pitch" },
  led: { body: [5.6, 5.6], pitch: 2.54, inline: true, modelHeight: 7.3, color: "#af434e", package: "5 mm through-hole LED, 2.54 mm lead pitch" },
  npn: { body: [5.2, 4.2], pitch: 1.27, size: 1.12, drill: 0.65, inline: true, modelHeight: 5, color: "#2f3742", package: "TO-92 inline, 1.27 mm lead pitch" },
  nmos: { body: [5.2, 4.2], pitch: 1.27, size: 1.12, drill: 0.65, inline: true, modelHeight: 5, color: "#2f3742", package: "TO-92 inline, 1.27 mm lead pitch" },
  button: {
    body: [6, 6], drill: 1.1, size: 1.8, modelHeight: 3.4, color: "#a8a9aa",
    switch: true, package: "6 × 6 mm tact switch, 6.5 × 4.5 mm pad pattern",
    details: [[0, 0, 3.2, 3.2, 1.1, "#334155"]],
  },
  "terminal-2": { body: [10.16, 8.5], pitch: 5.08, drill: 1.25, size: 2.7, inline: true, modelHeight: 8, color: "#367b58", package: "Two-position screw terminal, 5.08 mm pitch" },
  "terminal-3": { body: [15.24, 8.5], pitch: 5.08, drill: 1.25, size: 2.7, inline: true, modelHeight: 8, color: "#367b58", package: "Three-position screw terminal, 5.08 mm pitch" },
  "pin-header-4": { body: [10.16, 2.54], pitch: GRID, drill: 1, size: 1.7, inline: true, modelHeight: 2.5, color: "#273041", package: "Single-row pin header, 2.54 mm pitch" },
  "jst-ph-2": {
    body: [5.9, 4.5], pitch: 2, drill: 0.75, size: [1.2, 1.75], modelHeight: 6, color: "#d9dad4",
    groups: [{ ids: ["1", "2"], x: -1, y: -0.55 }],
    package: "JST B2B-PH-K-S vertical through-hole header, 2 mm pitch",
  },
};

const coreModuleModels = {
  bme280: {
    label: "Adafruit STEMMA QT CAD (2652)",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/2652%20Adafruit%20BME280",
  },
  ads1115: {
    label: "Adafruit ADS1115 models",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/1085%20ADS1115%20ADC",
  },
  ina219: {
    label: "Adafruit INA219 models",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/904%20INA219%20Stemma",
  },
  st3215: {
    label: "Waveshare ST3215 STEP model",
    url: "https://files.waveshare.com/upload/5/59/ST3215-3D.zip",
  },
};

const coreBasicModels = {
  diode: {
    label: "Vishay DO-35 model",
    url: "https://www.vishay.com/en/product/81857/tab/designtools-ppg/",
  },
  "jst-ph-2": {
    label: "JST B2B-PH-K-S STEP (PH series, row 19)",
    url: "https://www.jst-mfg.com/product/index.php?lang=2&series=199",
  },
};


const coreContactPositions = {
  "esp32-s3": (component, pin) => [pin.x === 0 ? 9 : component.width - 9, pin.y],
  max3485: (_component, pin) => [pin.x === 0 ? 9 : 122, pin.y],
  hw0519: (component, pin) => [pin.x === 0 ? 10 : component.width - 10, pin.y],
  bme280: (_component, _pin, index) => [27, 25 + index * 13],
  "rs485-soil": (_component, pin) => [pin.x, pin.y],
  ads1115: (_component, pin) => [30 + (pin.x - 22) * 0.86, pin.y === 0 ? 17 : 106],
  ads1220: (component, pin) => [pin.x === 0 ? 15 : component.width - 15, pin.y],
  ina219: (_component, pin) => [37 + ["vin", "gnd", "scl", "sda", "vin-minus", "vin-plus"].indexOf(pin.id) * 14, 82],
  st3215: (_component, _pin, index) => [147.5, 37 + index * 7],
  ssd1306: (_component, _pin, index) => [45 + index * 16, 11],
  lm2596: (component, pin) => [pin.x === 0 ? 14 : component.width - 14, pin.y < component.height / 2 ? 13 : component.height - 13],
};

export const coreModulesFamily = defineFamily("core-modules", coreModuleComponents.map(component => physicalEntry({
  component, render: coreModuleArt[component.art], footprint: coreModuleFootprints[component.id], model: coreModuleModels[component.id],
}, (pin, index) => coreContactPositions[component.id](component, pin, index))));
export const coreBasicsFamily = defineFamily("core-basics", coreBasicComponents.map(component => {
  const entry = { component, render: coreBasicArt[component.art], footprint: coreBasicFootprints[component.id], model: coreBasicModels[component.id] };
  if (["npn", "nmos"].includes(component.art)) return physicalEntry(entry, (_pin, index) => [39 + index * 8, 58]);
  if (["terminal", "header", "jst"].includes(component.art)) return physicalEntry(entry, pin => [pin.x, component.art === "header" ? 17 : component.art === "jst" ? 32 : 25]);
  return { ...entry, component: { ...component, contactLayout: "leads" } };
}));
