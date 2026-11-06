import { ads1220 } from "./catalog-ads1220.js";
import { hw0519 } from "./catalog-hw0519.js";
import { st3215 } from "./catalog-st3215.js";
import { waveshareComponents } from "./catalog-waveshare.js";

export { componentArt } from "./catalog-art.js";

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
  manufacturer: "Espressif", subtitle: "Wi-Fi / BLE development board", tags: ["devkit", "esp32", "uart", "wifi"],
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

const heltec = {
  id: "heltec-v4", name: "Heltec WiFi LoRa 32 V4", shortName: "Heltec V4", category: "Microcontrollers",
  description: "Wi-Fi, BLE and LoRa development board with OLED and battery management. This pinout is for the V4.2.0 ESP32-S3R2 version.",
  manufacturer: "Heltec Automation", subtitle: "ESP32-S3 / SX1262 / OLED", tags: ["lora", "wifi", "ble", "esp32", "heltec"],
  source: "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/datasheet/WiFi_LoRa_32_V4.2.0.pdf",
  width: 142, height: 330, art: "heltec", referencePrefix: "U",
  pins: [
    ...row("left", 142, 20, 15, [
      ground(),
      supply("5v", "5V", "Alternative 5 V input. Use this input or USB power."),
      ["ve", "VE", "Switched 3.3 V output. Drive GPIO36 low to enable it.", "power_out"],
      ["ve-2", "VE", "Second contact on the switched 3.3 V output.", "power_out"],
      gpio(44, "UART0 RX.", "RX"),
      gpio(43, "UART0 TX.", "TX"),
      input("reset", "RST", "Active-low chip enable and reset."),
      gpio(0, "Program button and boot strapping."),
      gpio(36, "Controls the switched external 3.3 V rail."),
      gpio(35, "Shared with the onboard LED."),
      gpio(34, "Shared with GNSS power control."),
      gpio(33),
      gpio(47),
      gpio(48),
      gpio(26),
      gpio(21, "Shared with OLED reset."),
      gpio(20, "Native USB D+ and ADC2 channel 9."),
      gpio(19, "Native USB D− and ADC2 channel 8."),
    ], "J2."),
    ...row("right", 142, 20, 15, [
      ground("gnd-2"),
      supply("3v3", "3V3", "3.3 V supply rail."),
      supply("3v3-2", "3V3", "Second contact on the 3.3 V rail."),
      gpio(37, "Enables battery voltage sensing when high."),
      gpio(46, "Boot strapping pin."),
      gpio(45, "Boot strapping pin. Shared with the V4.2 LoRa front-end control."),
      gpio(42, "Shared with GNSS reset."),
      gpio(41, "Shared with GNSS pulse-per-second input."),
      gpio(40, "Shared with GNSS wake-up."),
      gpio(39, "Shared with the GNSS serial connection."),
      gpio(38, "Shared with the GNSS serial connection."),
      gpio(1, "ADC1 channel 0. Shared with battery voltage sensing."),
      gpio(2, "ADC1 channel 1 and touch input. Check LoRa PA usage on your board."),
      gpio(3, "Boot strapping pin, ADC1 channel 2 and touch input."),
      gpio(4, "ADC1 channel 3 and touch input."),
      gpio(5, "ADC1 channel 4 and touch input."),
      gpio(6, "ADC1 channel 5 and touch input."),
      gpio(7, "Shared with the LoRa front-end supply control."),
    ], "J3."),
    ...row("bottom", 330, 26, 30, [
      gpio(18, "Additional pad. Shared with onboard OLED clock."),
      gpio(17, "Additional pad. Shared with onboard OLED data."),
      gpio(16, "Additional pad. ADC2 channel 5 and 32 kHz oscillator input."),
      gpio(15, "Additional pad. ADC2 channel 4 and 32 kHz oscillator input."),
    ], "X"),
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
    output("sdo", "SDO", "SPI data out. In I²C mode, connect to ground to change the address from 0x77 to 0x76."),
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
      [...passive("vin-plus", "V+", "Positive shunt terminal. Connect to the source for high-side measurements."), "5"],
      [...passive("vin-minus", "V−", "Negative shunt terminal. Connect to the load for high-side measurements."), "6"],
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
  connector("jst-ph-2", "JST PH 2-pin", 2, "Polarized 2.0 mm pitch two-position header. Assign polarity to suit the matching cable.", "jst"),
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

export const components = [
  esp32, heltec, max3485, hw0519, bme280, soil, ads1115, ads1220, ina219, st3215, oled, regulator,
  ...waveshareComponents, ...passives, ...discrete, ...connectors, battery,
];

export const componentById = new Map(components.map((component) => [component.id, component]));
