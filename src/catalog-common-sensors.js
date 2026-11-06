import { board, chip, circle, edgePads, label, line, mountingHole, path, pinRow, rect, smd } from "./catalog-extension.js";

const keyestudioDocs = model => `https://docs.keyestudio.com/projects/${model}/en/latest/docs/${model}.html`;
const adafruitCad = folder => ({
  label: "Adafruit CAD files",
  url: `https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/${encodeURIComponent(folder)}`,
});
const gnd = (label = "GND") => ["gnd", label, "Common ground for power and signals.", "power_in"];
const vin = (label, description) => ["vin", label, description, "power_in"];
const scl = (description = "I²C clock input.") => ["scl", "SCL", description, "input"];
const sda = (description = "Bidirectional I²C data line.") => ["sda", "SDA", description, "bidirectional"];

function sensor({
  id, name, shortName, manufacturer, source, description, subtitle, tags, size, side, contacts,
  body, color, art, model, modelHeight = 1.6, details = [], pitch = 2.54, inset = 2.54,
  drill = 1, termination = false, drawPins = edgePads, canvasPitch,
  note = "Reference host-board header pattern. Check PCB and mounting clearance against the exact module.",
}) {
  const [width, height] = size;
  const vertical = side === "left" || side === "right";
  const pinSpacing = canvasPitch ?? (vertical ? 15 : 18);
  const span = (contacts.length - 1) * pinSpacing;
  const start = ((vertical ? height : width) - span) / 2;
  const pins = pinRow(side, width, height, start, pinSpacing, contacts);
  const offset = -(contacts.length - 1) * pitch / 2;
  const header = vertical
    ? { axis: "y", x: (body[0] / 2 - inset) * (side === "left" ? -1 : 1), y: offset }
    : { axis: "x", x: offset, y: (body[1] / 2 - inset) * (side === "top" ? -1 : 1) };
  return {
    component: {
      id, name, shortName, manufacturer, source, description, subtitle, tags,
      category: "Sensors", referencePrefix: "U", art: id, width, height, pins,
    },
    art: (component, showLabels) => art(component) + drawPins(component, showLabels),
    footprint: {
      body: termination ? [pins.length * pitch, 6] : body, color, modelHeight, details, note,
      groups: [{
        ids: pins.map(pin => pin.id), ...(termination ? { x: offset, y: 0 } : header),
        pitch, drill, size: Math.min(1.8, pitch - 0.25),
      }],
    },
    model,
  };
}

const adafruitSupply = vin("VIN", "Board supply. Match VIN to the host logic voltage.");
const i2c = [scl(), sda()];
const dark = "#292d32";
const keyesColor = "#252326";
const blue = "#18528a";
const pololuGreen = "#16865c";

function qtSocket(x, y) {
  return rect(x, y, 23, 30, 2, "#ddd9ce", "#f0eade") +
    rect(x + 2, y + 4, 5, 22, 1, "#aca395") +
    [7, 12, 17, 22].map(offset => line(x + 21, y + offset, x + 26, y + offset, "#b6b0a3", 1.5)).join("");
}

function qtPins(component, showLabels) {
  return edgePads(component, false) + (showLabels ? component.pins.map((pin, index) =>
    label(pin.x, pin.y - (component.pins.length > 4 && index % 2 ? 28 : 19), pin.label, 7.5)
  ).join("") : "");
}

function adafruitBreakout({ id, part, product, title, description, tags, pins, pattern, sensorArt, model }) {
  return sensor({
    id, name: `Adafruit ${part} ${title}`, shortName: part, manufacturer: "Adafruit",
    source: `https://learn.adafruit.com/${product}/pinouts`,
    description, subtitle: "STEMMA QT breakout", tags: [...tags, "stemma qt", "i2c"],
    size: [156, 108], side: "bottom", contacts: pins, body: [25.4, 17.8], color: dark, model,
    canvasPitch: pins.length > 4 ? 15 : 18, drawPins: qtPins,
    details: [[-10.1, 0, 4.3, 5.2, 2.0, "#ddd9ce"], [10.1, 0, 4.3, 5.2, 2.0, "#ddd9ce"]],
    art: ({ width, height }) => board(width, height, dark, "#707078") +
      [20, width - 20].flatMap(x => [21, 88].map(y => mountingHole(x, y))).join("") +
      qtSocket(8, 39) + `<g transform="translate(${width} 0) scale(-1 1)">${qtSocket(8, 39)}</g>` +
      label(78, 18, part, 11) + label(78, 31, title, 7.5) +
      pattern.map(([x, y, color]) => smd(x, y, color)).join("") + sensorArt(),
  });
}

const adafruit = [
  adafruitBreakout({
    id: "adafruit-aht20-4566", part: "AHT20", product: "adafruit-aht20", title: "Temperature & Humidity",
    description: "Adafruit #4566 Rev C with dual STEMMA QT sockets and 2.7–5.5 V VIN. The I²C address is fixed at 0x38.",
    tags: ["aht20", "temperature", "humidity", "climate", "4566"], pins: [adafruitSupply, gnd(), ...i2c],
    pattern: [[38, 38], [45, 68], [89, 63], [99, 46, "#e4d77d"], [88, 69]],
    sensorArt: () => rect(64, 43, 28, 26, 3, "#161b1b", "#656364") +
      rect(70, 49, 15, 14, 1, "#c1bbb0", "#ede3d1") + rect(72, 51, 11, 10, 0.6, "#a8a195"),
    model: adafruitCad("4566 AHT20 Sensor"),
  }),
  adafruitBreakout({
    id: "adafruit-sht31-2857", part: "SHT31", product: "adafruit-sht31-d-temperature-and-humidity-sensor-breakout",
    title: "Temperature & Humidity",
    description: "Adafruit #2857 SHT31-D STEMMA QT revision. The I²C address is 0x44 by default and 0x45 when ADDR is high.",
    tags: ["sht31", "temperature", "humidity", "climate", "2857"],
    pins: [
      adafruitSupply, gnd(), ...i2c,
      ["addr", "ADDR", "Address select. Low selects 0x44 and high selects 0x45.", "input"],
      ["rst", "RST", "Active-low hardware reset input with an onboard pull-up.", "input"],
      ["alert", "ALRT", "Configurable alert output for programmed measurement limits.", "output"],
    ],
    pattern: [[36, 40], [43, 49], [104, 62], [94, 70]],
    sensorArt: () => rect(64, 41, 28, 27, 3, "#17191d", "#645d5c") +
      rect(70, 46, 16, 15, 2, "#e7e4d5", "#a4a59b") + chip(68, 65, 18, 13, "", 3),
    model: adafruitCad("2857 SHT31-D"),
  }),
  adafruitBreakout({
    id: "adafruit-bmp280-2651", part: "BMP280", product: "adafruit-bmp280-barometric-pressure-plus-temperature-sensor-breakout",
    title: "Barometric Pressure",
    description: "Adafruit #2651 STEMMA QT revision. Measures air pressure and temperature through I²C or SPI. I²C defaults to 0x77.",
    tags: ["bmp280", "pressure", "temperature", "altimeter", "spi", "2651"],
    pins: [
      adafruitSupply, ["3vo", "3Vo", "Regulated 3.3 V output.", "power_out"], gnd(),
      ["sck", "SCK", "I²C clock or SPI clock input.", "input"],
      ["sdo", "SDO", "SPI data output. Pull low for I²C address 0x76.", "output"],
      ["sdi", "SDI", "I²C data line or SPI data input.", "bidirectional"],
      ["cs", "CS", "Active-low SPI chip select. Leave high for I²C.", "input"],
    ],
    pattern: [[41, 38], [55, 39], [40, 53, "#96978e"], [44, 65], [85, 67], [105, 40]],
    sensorArt: () => rect(70, 47, 17, 15, 2, "#c8c6bc", "#f3e8d8") +
      circle(80, 52, 2.1, "#3e4343") + chip(98, 52, 11, 14, "", 3),
  }),
];

function blackModule({ id, model, name, shortName, description, subtitle, tags, size, side, contacts, body, art, details }) {
  return sensor({
    id, name, shortName, description, subtitle, tags: [...tags, model.toLowerCase()], size, side, contacts, body,
    art, details, color: keyesColor, manufacturer: "Keyestudio", source: keyestudioDocs(model),
    inset: 1.9, note: "Representative 2.54 mm header carrier for the pictured Keyestudio board. Verify PCB outline and mounting clearance before fabrication.",
  });
}

function keyesBody(width, height) {
  return board(width, height, keyesColor, "#605955", 6);
}

function ventedCase(x, y, width, height, color, vent) {
  const vents = Array.from({ length: 4 }, (_, column) =>
    Array.from({ length: 5 }, (_, row) =>
      rect(x + 7 + column * (width - 12) / 4, y + 6 + row * (height - 10) / 5, 5, 4, 0.5, vent)
    ).join("")
  ).join("");
  return rect(x, y, width, height, 3, color, "#263846") + vents;
}

const keyestudio = [
  blackModule({
    id: "keyestudio-dht11-ks0034", model: "KS0034", name: "Keyestudio DHT11 Temperature & Humidity", shortName: "DHT11",
    description: "KS0034 three-pin DHT11 board. The DHT11 single-wire protocol carries calibrated temperature and humidity readings.",
    subtitle: "5 V / digital temperature and humidity", tags: ["dht11", "humidity", "temperature", "climate"],
    size: [84, 122], side: "bottom", contacts: [
      gnd("G"), vin("V", "5 V supply input."), ["data", "S", "Bidirectional DHT11 data line.", "bidirectional"],
    ], body: [20, 30], details: [[0, -6, 12, 14, 5, "#238ac4"]],
    art: ({ width, height }) => keyesBody(width, height) +
      ventedCase(17, 12, 50, 64, "#2e9bc9", "#173c58") +
      smd(24, 84) + smd(50, 84, "#404048") + mountingHole(13, 108) + mountingHole(71, 108),
  }),
  blackModule({
    id: "keyestudio-ds18b20-ks0023", model: "KS0023", name: "Keyestudio DS18B20 Temperature Sensor", shortName: "DS18B20",
    description: "KS0023 DS18B20 breakout for measuring temperature over a multidrop 1-Wire bus.",
    subtitle: "3.3–5 V / 1-Wire", tags: ["ds18b20", "temperature", "1-wire", "onewire"],
    size: [84, 116], side: "bottom", contacts: [
      gnd("−"), vin("+", "3.3–5 V supply input."), ["data", "S", "Bidirectional 1-Wire data line.", "bidirectional"],
    ], body: [20, 30], details: [[0, -6, 6, 6, 4, "#242729"]],
    art: ({ width, height }) => keyesBody(width, height) +
      path("M24 27h36c0 13-9 21-18 21S24 40 24 27Z", "#121619", "#c7a344") +
      [33, 42, 51].map(x => line(x, 44, x, 54, "#abb7ba", 1.4)).join("") +
      label(42, 17, "DS18B20", 8.5, "#ecd15f") + smd(35, 57, "#555052") + smd(35, 67) +
      mountingHole(42, 81),
  }),
  blackModule({
    id: "keyestudio-bh1750-ks0278", model: "KS0278", name: "Keyestudio BH1750 Ambient Light Sensor", shortName: "BH1750",
    description: "KS0278 illuminance breakout with a four-pin header. ADDR is fixed low for I²C address 0x23 on this board.",
    subtitle: "5 V / I²C lux sensor", tags: ["bh1750", "bh1750fvi", "ambient light", "lux", "i2c"],
    size: [133, 83], side: "right", contacts: [
      ...i2c, vin("V", "5 V module supply input per Keyestudio documentation."), gnd("G"),
    ], body: [30, 20], details: [[-4, 0, 4, 3, 1, "#292928"]],
    art: ({ width, height }) => keyesBody(width, height) +
      label(37, 17, "BH1750FVI", 8, "#ead35b") + chip(27, 33, 19, 20, "", 4) +
      rect(51, 40, 22, 9, 1, "#b38345", "#dec48a") + mountingHole(80, 42) +
      smd(58, 25) + smd(48, 55, "#4e5054") + smd(18, 57),
  }),
  blackModule({
    id: "keyestudio-mpu6050-ks0170", model: "KS0170", name: "Keyestudio MPU6050 Gyroscope & Accelerometer", shortName: "MPU6050",
    description: "KS0170 six-axis MPU6050 breakout with auxiliary bus and interrupt. This pin order is specific to the black Keyestudio board.",
    subtitle: "6-axis IMU / I²C", tags: ["mpu6050", "mpu-6050", "gy-521", "imu", "accelerometer", "gyroscope", "i2c"],
    size: [158, 129], side: "right", contacts: [
      ["int", "INT", "Configurable interrupt output.", "output"],
      ["ad0", "AD0", "I²C address bit. Low selects 0x68 and high at sensor logic level selects 0x69.", "input"],
      ["xcl", "XCL", "Auxiliary I²C clock for a secondary sensor.", "bidirectional"],
      ["xda", "XDA", "Auxiliary I²C data for a secondary sensor.", "bidirectional"],
      ...i2c, vin("VCC", "3–5 V board supply. Keep host signals compatible with the sensor logic level."), gnd(),
    ], body: [28, 22], details: [[-3, 0, 4, 4, 0.9, "#16181b"]],
    art: ({ width, height }) => keyesBody(width, height) +
      label(60, 18, "MPU6050", 10, "#ead35b") +
      path("M27 42V26l-3 4m3-4 3 4M27 42h14l-4-3m4 3-4 3", "none", "#c5ad53", 1.3) +
      chip(45, 47, 27, 27, "", 5) + mountingHole(111, 69) +
      chip(20, 65, 12, 17, "", 3) + smd(87, 42) + smd(87, 56) + smd(88, 82) +
      smd(36, 86, "#4c5157") + label(59, 109, "Keyestudio", 9, "#ead35b"),
  }),
  blackModule({
    id: "keyestudio-pir-ks0052", model: "KS0052", name: "Keyestudio KS0052 PIR Motion Sensor", shortName: "KS0052 PIR",
    description: "Compact pyroelectric motion breakout with a Fresnel lens and an active-high digital output.",
    subtitle: "Passive infrared / digital", tags: ["pir", "motion", "infrared", "pyroelectric"],
    size: [134, 86], side: "right", contacts: [
      ["out", "S", "Active-high digital motion output, approximately 3 V when high.", "output"],
      vin("+", "DC module supply input. Keyestudio shows 3.3 V or 5 V in the wiring diagram."), gnd("−"),
    ], body: [30, 20], details: [[-6, 0, 12, 12, 8, "#e7e5db"]],
    art: ({ width, height }) => keyesBody(width, height) +
      fresnel(44, 43, 26) + mountingHole(87, 45) +
      smd(76, 24) + smd(78, 62) + label(46, 75, "PYE_IR", 7.5, "#e7c75a"),
  }),
  blackModule({
    id: "keyestudio-touch-ks0031", model: "KS0031", name: "Keyestudio Capacitive Touch Sensor", shortName: "KS0031 Touch",
    description: "KS0031 contactless-touch breakout with a round electrode and a digital output that goes high when touched.",
    subtitle: "3.3–5 V / capacitive touch", tags: ["touch", "capacitive", "digital", "touch pad"],
    size: [84, 117], side: "bottom", contacts: [
      vin("+", "3.3–5 V supply input."), ["out", "S", "Active-high digital touch output.", "output"], gnd("−"),
    ], body: [20, 30], details: [[0, -6, 11, 11, 0.2, "#c8a746"]],
    art: ({ width, height }) => keyesBody(width, height) +
      rect(13, 13, 58, 59, 0, "none", "#d3b63c") + circle(42, 42, 17, "#e9ca33", "#f7d751") +
      smd(23, 77) + smd(34, 77, "#373a42") + chip(47, 75, 13, 13, "", 3) +
      mountingHole(13, 102) + mountingHole(71, 102),
  }),
  blackModule({
    id: "keyestudio-ir-obstacle-ks0051", model: "KS0051", name: "Keyestudio IR Obstacle Avoidance Sensor", shortName: "KS0051 IR",
    description: "Reflective IR obstacle breakout with a pair of optical devices, adjustment trimmers and an EN jumper.",
    subtitle: "3.3–5 V / reflective infrared", tags: ["ir", "obstacle", "proximity", "infrared", "robot"],
    size: [99, 173], side: "bottom", contacts: [
      gnd("GND"), vin("+", "3.3–5 V supply input."),
      ["out", "OUT", "Digital output from the optical detection comparator.", "output"],
      ["en", "EN", "Enable control. The onboard jumper selects the normal enabled setting.", "input"],
    ], body: [19, 43], details: [[0, -14, 9, 5, 5, "#1b2025"], [0, 12, 12, 6, 6, "#3284ae"]],
    art: ({ width, height }) => keyesBody(width, height) +
      rect(20, 15, 24, 29, 5, "#181e25", "#4a545e") +
      rect(56, 15, 23, 29, 8, "#84929a", "#cdd3d7") +
      mountingHole(49, 66) + chip(35, 88, 29, 20, "", 4) +
      rect(67, 85, 13, 17, 2, "#c6842a") + smd(20, 55) + smd(71, 55) +
      trimmer(20, 117) + trimmer(54, 117),
  }),
];

function fresnel(x, y, radius) {
  return circle(x, y, radius, "#dbded8", "#f7f5eb") +
    circle(x, y, radius - 4, "#d1d5cf", "#b7beb9") +
    [-1, 0, 1].flatMap(row => [-1, 0, 1].map(column =>
      circle(x + column * radius * 0.43, y + row * radius * 0.43, radius * 0.22, "#d9dbd3", "#e5e6dc")
    )).join("");
}

function trimmer(x, y) {
  return rect(x, y, 24, 20, 2, "#2379ac", "#428fbd") +
    circle(x + 12, y + 10, 7, "#bfcdd0", "#e2e8e5") +
    line(x + 8, y + 11, x + 16, y + 9, "#5c7782", 1.6);
}

function ultrasonicCan(x, y) {
  return circle(x, y, 31, "#bec6c7", "#e4ebec") +
    circle(x, y, 26, "#5c666a", "#969e9d") +
    circle(x, y, 21, "#333e44", "#1e262a") +
    Array.from({ length: 7 }, (_, index) => {
      const offset = (index - 3) * 5;
      const reach = Math.sqrt(20 ** 2 - offset ** 2);
      return line(x - reach, y + offset, x + reach, y + offset, "#566267", 0.65) +
        line(x + offset, y - reach, x + offset, y + reach, "#566267", 0.65);
    }).join("");
}

const ultrasonic = sensor({
  id: "hc-sr04-ks0328", name: "HC-SR04 Ultrasonic Distance Module", shortName: "HC-SR04", manufacturer: "Keyestudio",
  source: keyestudioDocs("KS0328"),
  description: "KS0328 blue HC-SR04 module with a separate trigger input and echo pulse output. The echo is 5 V logic and needs a divider or level shifter for a 3.3 V-only host.",
  subtitle: "5 V / ultrasonic ranging", tags: ["hc-sr04", "hr-sr04", "hcsr04", "ks0328", "ultrasonic", "distance", "ranging"],
  size: [202, 107], side: "bottom", body: [45, 20], color: blue, inset: 1.4, canvasPitch: 23,
  note: "Reference 45 × 20 mm board carrier with a 2.54 mm pitch interface. Verify header inset and mounting holes for the fitted module.",
  contacts: [
    vin("VCC", "5 V module supply input."),
    ["trig", "TRIG", "Start a reading with a high pulse of at least 10 µs.", "input"],
    ["echo", "ECHO", "5 V output pulse proportional to distance.", "output"],
    gnd(),
  ],
  details: [[-12, 0, 16, 16, 11, "#b6bdc0"], [12, 0, 16, 16, 11, "#b6bdc0"]],
  art: ({ width, height }) => board(width, height, blue, "#416d9b") +
    [15, width - 15].flatMap(x => [16, 83].map(y => mountingHole(x, y))).join("") +
    ultrasonicCan(49, 49) + ultrasonicCan(153, 49) +
    rect(90, 36, 22, 12, 5, "#c7cdcd", "#e5e7e2") +
    label(101, 23, "HC-SR04", 9) + smd(90, 55) + smd(107, 55),
});

function pololuTimeOfFlight(id, part, item, range, goldWindows) {
  return sensor({
    id, name: `Pololu ${part} Time-of-Flight Carrier`, shortName: part, manufacturer: "Pololu",
    source: `https://www.pololu.com/product/${item}`,
    description: `Pololu #${item} ranging breakout with a 2.8 V regulator and I²C level shifting. Default address is 0x29. Range is up to ${range} m depending on the target and ranging mode.`,
    subtitle: "I²C / optical ranging", tags: [part.toLowerCase(), "distance", "lidar", "tof", "time of flight", "i2c", String(item)],
    size: [105, 124], side: "left", body: [12.7, 17.78], color: pololuGreen, inset: 1.27, drill: 1.02,
    note: "Pololu header placement from drawing irs11a. Seven 1.02 mm holes are on 2.54 mm centers. Mounting holes are outside this electrical carrier footprint.",
    contacts: [
      ["vdd", "VDD", "Regulated 2.8 V output. Can accept an external 2.6–3.5 V supply with VIN disconnected.", "power_out"],
      vin("VIN", "Main 2.8–5.5 V supply input and I²C logic reference."),
      gnd(), sda("Level-shifted I²C data line."), scl("Level-shifted I²C clock line."),
      ["xshut", "XSHUT", "Active-low shutdown. Pulled up to 2.8 V and not 5 V tolerant.", "input"],
      ["gpio1", "GPIO1", "Open-drain interrupt output pulled up to 2.8 V.", "open_collector"],
    ],
    details: [[1.7, 0, 4.9, 2.5, 0.9, "#27252a"]],
    art: ({ width, height }) => board(width, height, pololuGreen, "#4dba8b") +
      mountingHole(83, 25) + mountingHole(83, 100) + chip(47, 23, 16, 15, "", 3) +
      rect(52, 49, 36, 22, 2, "#20242a", "#3a4448") +
      [60, 77].map(x => rect(x, 55, 6, 9, 1, goldWindows ? "#ddb967" : "#38434a")).join("") +
      smd(67, 41) + smd(48, 75) + smd(55, 96, "#4b5a58") + smd(40, 88) +
      label(65, 113, part, 7.6),
  });
}

const distance = [
  ultrasonic,
  pololuTimeOfFlight("pololu-vl53l0x-2490", "VL53L0X", 2490, 2, false),
  pololuTimeOfFlight("pololu-vl53l1x-3415", "VL53L1X", 3415, 4, true),
];

function gravitySocket(x, y) {
  return rect(x, y, 37, 18, 2, "#e2dcc9", "#fff2d4") +
    rect(x + 4, y + 9, 29, 7, 1, "#635b4f") +
    [9, 18, 27].map(offset => line(x + offset, y + 10, x + offset, y + 14, "#c3a56d", 1.6)).join("");
}

const dfrobot = [
  sensor({
    id: "dfrobot-dht22-sen0137", name: "DFRobot Gravity DHT22 Temperature & Humidity", shortName: "DHT22",
    manufacturer: "DFRobot", source: "https://wiki.dfrobot.com/sen0137/",
    description: "SEN0137 V2.0 DHT22 breakout with a 3-pin Gravity socket. Numbering follows J1 in the board schematic.",
    subtitle: "5 V / digital temperature and humidity", tags: ["dht22", "am2302", "sen0137", "temperature", "humidity", "gravity"],
    size: [95, 166], side: "bottom", color: "#282d2c", body: [22, 41.52], termination: true, pitch: 2,
    note: "2 mm pitch reference host-board wire termination in Gravity J1 pin order. The sensor is cable connected. Its PCB and mounting holes are shown in the DFRobot dimension drawing.",
    contacts: [
      ["data", "S", "Bidirectional DHT22 data line with onboard pull-up.", "bidirectional"],
      vin("VCC", "5 V module supply input."), gnd(),
    ],
    art: ({ width, height }) => board(width, height, "#282d2c", "#6a6d61") +
      path("M21 42L31 19H64L74 42V113H21Z", "#e8e5d4", "#b7b5a9") +
      circle(47, 32, 5, "#474c4e", "#d3d1c4") +
      ventedCase(27, 48, 41, 59, "#eee9d8", "#878a7d") +
      mountingHole(19, 126) + mountingHole(76, 126) + gravitySocket(29, 123) +
      `<g transform="rotate(-90 14 71)">${label(14, 71, "DHT22 V2.0", 7)}</g>`,
  }),
  sensor({
    id: "dfrobot-capacitive-soil-sen0193", name: "DFRobot Gravity Capacitive Soil Moisture Sensor", shortName: "SEN0193",
    manufacturer: "DFRobot", source: "https://wiki.dfrobot.com/sen0193/",
    description: "SEN0193 capacitive PCB probe with a three-pin Gravity socket and analog output. Insert only the probe area below the marked line.",
    subtitle: "3.3–5.5 V / 0–3 V analog", tags: ["sen0193", "soil", "moisture", "capacitive", "analog", "gravity", "plant"],
    size: [87, 215], side: "top", color: "#282a29", body: [23, 98], termination: true, pitch: 2,
    note: "2 mm pitch reference host-board wire termination in Gravity J1 pin order. The probe is cable connected and its sensing PCB extends off-board.",
    contacts: [
      gnd(), vin("VCC", "3.3–5.5 V supply input."),
      ["out", "AOUT", "Analog voltage output from 0 to 3 V. Connect to an ADC input.", "output"],
    ],
    art: () => path("M17 9H70V77L64 86V189L43.5 207L23 189V86L17 77Z", "#262a29", "#58625d", 1.3) +
      `<g transform="translate(87 51) rotate(180)">${gravitySocket(25, 8)}</g>` +
      chip(37, 49, 17, 18, "", 3) + smd(21, 57) + smd(57, 55) +
      line(19, 80, 68, 80, "#d1d0c1", 1) + label(43, 89, "INSERTION LIMIT", 5.5) +
      path("M34 104V179L43 189L53 179V101", "none", "#3b4643", 2.2) +
      `<g transform="rotate(-90 43 139)">${label(43, 139, "DFRobot • SEN0193", 9)}</g>`,
  }),
];

const joyItPir = sensor({
  id: "hc-sr501-joy-it", name: "HC-SR501 Adjustable PIR Motion Sensor", shortName: "HC-SR501",
  manufacturer: "Joy-IT", source: "https://joy-it.net/en/products/SEN-HC-SR501",
  description: "Joy-IT SEN-HC-SR501 passive infrared module with two trimmers for sensitivity and hold time and a jumper for repeat triggering. The drawing shows the connector side.",
  subtitle: "5 V supply / digital motion", tags: ["hc-sr501", "hcsr501", "pir", "motion", "infrared"],
  size: [141, 108], side: "bottom", color: "#2c7655", body: [32, 24], modelHeight: 1.6, inset: 2.5, canvasPitch: 24,
  note: "Reference 2.54 mm header carrier. Check lens height, adjustment access and mounting positions for the pictured Joy-IT board.",
  contacts: [
    vin("VCC", "5 V module supply input."), ["out", "DATA", "Digital motion output with approximately 3 V logic high.", "output"], gnd(),
  ],
  details: [[0, 0, 23, 23, 21.4, "#ebece1"]],
  art: ({ width, height }) => board(width, height, "#22604b", "#45836a") +
    [18, 123].map(x => mountingHole(x, 55)).join("") +
    [37, 74].map(x => rect(x, 17, 24, 17, 2, "#272c2b", "#637770") +
      rect(x + 4, 18, 16, 6, 1, "#c67c21") + line(x + 9, 21, x + 15, 21, "#734522", 1.4)).join("") +
    rect(112, 19, 10, 19, 1, "#c8aa34", "#e4ca62") +
    chip(94, 48, 20, 25, "BISS", 6) + chip(24, 62, 16, 11, "", 3) +
    [52, 73, 79, 47].map((x, index) => smd(x, 52 + 9 * index)).join("") +
    label(69, 47, "HC-SR501", 8) + label(70, 78, "REAR VIEW", 6.7),
});

const entries = [...adafruit, ...keyestudio, ...distance, ...dfrobot, joyItPir];

export const commonSensorComponents = entries.map(({ component }) => component);
export const commonSensorArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
export const commonSensorFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
export const commonSensorModels = Object.fromEntries(entries
  .filter(entry => entry.model)
  .map(({ component, model }) => [component.id, model]));
