import { board, chip, circle, label, moduleArt, mountingHole, pinRow, rect, tactile, usb } from "./catalog-extension.js";

const seeedDocs = "https://wiki.seeedstudio.com/XIAO_BLE/";
const xiaoCad = {
  label: "Seeed XIAO nRF52840 Sense 3D model",
  url: "https://files.seeedstudio.com/wiki/XIAO-BLE/seeed-studio-xiao-nrf52840-3d-model.zip",
};
const gpio = (id, name, port, role = "") => [id, name, `${port} GPIO.${role ? ` ${role}.` : ""}`, "bidirectional"];
const power = (id, name, description, type = "power_in") => [id, name, description, type];
const ground = (id = "gnd") => power(id, "GND", "Ground reference.");
const threeVolt = power("3v3", "3V3", "3.3 V regulator output.", "power_out");
const reset = id => [id, "RST", "Active-low reset.", "input"];
const numbered = (pin, number) => [...pin, String(number)];
const headerNote = "Reference carrier for the board's 2.54 mm headers. Check the fitted connector, mechanical clearances and antenna placement against the board documentation.";

const xiaoGpio = [
  ["P0.02", "AIN0"], ["P0.03", "AIN1"], ["P0.28", "AIN4"], ["P0.29", "AIN5"],
  ["P0.04", "SDA and AIN2"], ["P0.05", "SCL and AIN3"], ["P1.11", "UART TX"],
  ["P1.12", "UART RX"], ["P1.13", "SPI SCK"], ["P1.14", "SPI MISO"], ["P1.15", "SPI MOSI"],
  ["P0.15", "I²S SD"], ["P0.19", "I²S SCK"], ["P1.01", "I²S WS"],
  ["P0.09", "NFC1 or UART1 RX"], ["P0.10", "NFC2 or UART1 TX"],
  ["P0.31", "AIN7, also used for battery voltage measurement"], ["P1.03", "SPI1 SCK"],
  ["P1.05", "SPI1 MISO"], ["P1.07", "SPI1 MOSI"],
].map(([port, role], index) => numbered(gpio(`d${index}`, `D${index}`, port, role), index + (index < 11 ? 1 : 4)));

const xiaoDebug = [
  ["swdio", "SWDIO", "Serial Wire Debug data.", "bidirectional"],
  ["swclk", "SWCLK", "Serial Wire Debug clock.", "input"],
  ["en", "EN", "Regulator enable. Pull low to disable the 3.3 V rail.", "input"],
  ground("debug-gnd"),
  power("vbat", "BAT+", "Single-cell lithium battery positive terminal. Observe the charger and battery specifications."),
  ground("bat-gnd"),
];
const xiaoNfc = [gpio("nfc1", "NFC1", "P0.09", "NFC antenna connection"), gpio("nfc2", "NFC2", "P0.10", "NFC antenna connection")];
const xiaoSupply = [
  numbered(power("vbus", "5V", "USB VBUS or alternative 5 V supply. Follow Seeed's power instructions when using an external source."), 14),
  numbered(ground(), 13), numbered(threeVolt, 12),
];

function xiaoFootprint(plus) {
  const left = xiaoGpio.slice(0, 7).map(pin => pin[0]);
  const right = [...xiaoSupply, ...xiaoGpio.slice(7, 11).reverse()].map(pin => pin[0]);
  const groups = [
    { ids: left, x: plus ? -8.255 : -8.065, y: -7.62, axis: "y" },
    { ids: right, x: plus ? 8.255 : 8.1, y: -7.62, axis: "y" },
  ];
  if (plus) {
    groups.push(
      { ids: xiaoGpio.slice(11, 17).map(pin => pin[0]), x: -8.655, y: -6.35, axis: "y", size: [1.232, 0.95] },
      { ids: xiaoGpio.slice(17).reverse().map(pin => pin[0]), x: 8.655, y: 1.27, axis: "y", size: [1.232, 0.95] },
    );
  }
  const underside = plus ? [
    [-1.27, -8.5725, 1.7, 1.7], [1.27, -8.5725, 1.7, 1.7],
    [-1.27, -6.0325, 1.7, 1.7], [1.27, -6.0325, 1.7, 1.7],
    [-0.993988, 5.517823, 1.1, 2.5], [1.006012, 5.517823, 1.1, 2.5],
  ] : [
    [-1.28, -8.5685, 1.7, 1.7], [1.26, -8.5685, 1.7, 1.7],
    [-1.28, -6.0285, 1.7, 1.7], [1.26, -6.0285, 1.7, 1.7],
    [-4.455, -0.3135, 2.5, 1.1], [-4.455, -2.2185, 2.5, 1.1],
    [3.8, 9.2369, 1.1, 2.5], [5.705, 9.2369, 1.1, 2.5],
  ];
  return {
    body: [17.8, 21], smd: true, size: plus ? [2.032, 0.95] : [2.75, 2],
    color: "#26363c", groups, shape: "roundrect", cornerRatio: plus ? 0.1 : 0.25,
    pads: underside.map(([x, y, width, height], index) => ({
      id: [...xiaoDebug, ...xiaoNfc][index][0], x, y, size: [width, height],
      shape: index < 4 ? "circle" : "roundrect",
    })),
    details: [[0, -8, 8.9, 5.4, 2.7, "#aab4bb"], [0, 1.5, 11, 10, 1.5, "#b8c0be"]],
    note: "SMD land coordinates and dimensions follow Seeed's XIAO KiCad footprint. Check assembly details and antenna clearance against the manufacturer files.",
  };
}

function xiaoBody({ width, height, shortName, id }) {
  const center = width / 2;
  return board(width, height, "#28353c", "#61717a") + usb(center - 17, 5, 34) +
    tactile(center - 26, 28) + circle(center + 21, 38, 3, "#8fc4a1", "#d1e1b4") +
    rect(center - 25, 62, 50, 46, 3, "#afbbb9", "#d6dfdb") +
    label(center, 80, "XIAO", 10, "#2f4648") + label(center, 95, "nRF52840", 8, "#2f4648") +
    (id.includes("sense") ? chip(center - 10, 118, 20, 17, "IMU", 2) : "") +
    label(center, height - 30, shortName, 8, "#e3e9f1");
}

function xiaoBoard(plus, sense) {
  const id = `xiao-nrf52840${sense ? "-sense" : ""}${plus ? "-plus" : ""}`;
  const shortName = `XIAO${sense ? " Sense" : ""}${plus ? " Plus" : ""}`;
  const width = 170;
  const height = plus ? 272 : 194;
  const pitch = plus ? 15 : 17;
  const extra = plus ? xiaoGpio.slice(11) : [];
  const left = xiaoGpio.slice(0, 7).flatMap((pin, index) => index < 6 && plus ? [pin, extra[index]] : [pin]);
  const right = [...xiaoSupply, ...xiaoGpio.slice(7, 11).reverse()]
    .flatMap((pin, index) => index >= 3 && index < 6 && plus ? [pin, extra[11 - index]] : [pin]);
  const debug = (plus ? xiaoDebug : [...xiaoDebug, ...xiaoNfc])
    .map((pin, index) => numbered(pin, index + (plus ? 24 : 15)));
  return {
    component: {
      id, art: id, name: `Seeed Studio XIAO nRF52840${sense ? " Sense" : ""}${plus ? " Plus" : ""}`,
      shortName, manufacturer: "Seeed Studio", category: "Microcontrollers", referencePrefix: "U",
      subtitle: `nRF52840 / Bluetooth LE${sense ? " / IMU and microphone" : ""}`,
      description: `USB-C nRF52840 board with battery charging and 3.3 V GPIO. ${plus ? "The Plus has nine additional GPIO pads." : "NFC contacts are on the underside."} The bottom bank shows underside power and debug contacts.`,
      source: seeedDocs, width, height, tags: ["nordic", "bluetooth", "nrf52", "xiao", "usb-c", "tiny"],
      pins: [
        ...pinRow("left", width, height, 30, pitch, left),
        ...pinRow("right", width, height, 30, pitch, right),
        ...pinRow("bottom", width, height, (width - (debug.length - 1) * 19) / 2, 19, debug),
      ],
    },
    art: moduleArt(xiaoBody), footprint: xiaoFootprint(plus),
    model: !plus && sense ? xiaoCad : null,
  };
}

function headerBoard({ id, name, shortName, manufacturer, description, source, left, right, size, spacing, offset = 0, color, art, model }) {
  const width = 144;
  const height = 62 + 16 * Math.max(left.length, offset + right.length);
  const firstY = -(left.length - 1) * 1.27;
  return {
    component: {
      id, art: id, name, shortName, manufacturer, description, source, width, height,
      category: "Microcontrollers", referencePrefix: "U", subtitle: "nRF52840 / Bluetooth LE",
      tags: ["nordic", "bluetooth", "nrf52", "development board", "nrf52840"],
      pins: [
        ...pinRow("left", width, height, 32, 16, left, "L."),
        ...pinRow("right", width, height, 32 + offset * 16, 16, right, "R."),
      ],
    },
    footprint: {
      body: size, color, note: headerNote, drill: 0.85, size: 1.65,
      groups: [
        { ids: left.map(pin => pin[0]), axis: "y", x: -spacing / 2, y: firstY },
        { ids: right.map(pin => pin[0]), axis: "y", x: spacing / 2, y: firstY + offset * 2.54 },
      ],
    },
    art: moduleArt(art), model,
  };
}

const nanoLeft = [
  gpio("d13", "D13", "P0.13", "SPI SCK and built-in LED"),
  threeVolt, ["aref", "AREF", "Unconnected header position. The nRF52840 ADC uses its internal reference.", "no_connect"],
  ...["P0.04", "P0.05", "P0.30", "P0.29", "P0.31", "P0.02", "P0.28", "P0.03"].map((port, i) =>
    gpio(`a${i}`, `A${i}`, port, i === 4 ? "Analog input and I²C SDA" : i === 5 ? "Analog input and I²C SCL" : "Analog input")),
  power("vusb", "5V", "USB 5 V rail. The VUSB solder jumper is open by default.", "power_out"),
  reset("reset-2"), ground("gnd-2"), power("vin", "VIN", "External input to the board's regulator."),
].map((pin, index) => numbered(pin, `JP2.${1 + index}`));

const nanoRight = [
  ...["P1.08", "P1.01", "P1.02", "P0.27", "P0.21", "P0.23", "P1.14", "P1.13", "P1.15", "P1.12", "P1.11"]
    .map((port, i) => gpio(`d${12 - i}`, `D${12 - i}`, port, ["SPI MISO", "SPI MOSI", "SPI chip select"][i])),
  ground(), reset("reset"), gpio("d1", "RX", "P1.10", "UART RX"), gpio("d0", "TX", "P1.03", "UART TX"),
].map((pin, index) => numbered(pin, `JP3.${15 - index}`));

function nanoBoard(sense) {
  const model = `Nano 33 BLE${sense ? " Sense" : ""} Rev2`;
  const id = `arduino-nano-33-ble${sense ? "-sense" : ""}-rev2`;
  return headerBoard({
    id, name: `Arduino ${model}`, shortName: model, manufacturer: "Arduino", left: nanoLeft, right: nanoRight,
    description: `3.3 V Arduino Nano with a u-blox NINA-B306 module, USB and ${sense ? "onboard motion and environmental sensors" : "an onboard IMU"}. The two Nano headers are exposed.`,
    source: `https://docs.arduino.cc/hardware/${id.slice("arduino-".length)}/`,
    size: [18, 45], spacing: 15.24, color: "#177875",
    art: ({ width, height }) => {
      const c = width / 2;
      return board(width, height, "#177875", "#69a9a3") + usb(c - 14, 6, 28) +
        tactile(c - 8, 37) + rect(c - 25, 102, 50, 67, 3, "#b8c5c5", "#dce7e8") +
        label(c, 130, "NINA", 10, "#30494f") + label(c, 145, "B306", 8, "#30494f") +
        chip(c - 14, 185, 28, 23, "IMU", 3) +
        label(c, height - 56, "NANO 33 BLE", 9) + label(c, height - 40, sense ? "SENSE REV2" : "REV2", 8);
    },
  });
}

const feather = headerBoard({
  id: "adafruit-feather-nrf52840-express", name: "Adafruit Feather nRF52840 Express", shortName: "Feather nRF52840",
  manufacturer: "Adafruit", description: "Feather-format nRF52840 board with battery charging, QSPI flash and USB. The two Feather headers are exposed.",
  source: "https://learn.adafruit.com/introducing-the-adafruit-nrf52840-feather/pinouts",
  size: [22.86, 50.8], spacing: 20.32, offset: 4, color: "#265590",
  left: [
    reset("reset"), threeVolt, ["aref", "AREF", "P0.31 external analog comparator reference, up to the 3.3 V supply.", "input"], ground(),
    ...["P0.04", "P0.05", "P0.30", "P0.28", "P0.02", "P0.03"].map((port, i) => gpio(`a${i}`, `A${i}`, port, "Analog input")),
    gpio("sck", "SCK", "P0.14", "SPI SCK"), gpio("mosi", "MOSI", "P0.13", "SPI MOSI"), gpio("miso", "MISO", "P0.15", "SPI MISO"),
    gpio("rx", "RX", "P0.24", "UART RX"), gpio("tx", "TX", "P0.25", "UART TX"), gpio("d2", "D2", "P0.10", "NFC2"),
  ],
  right: [
    power("bat", "BAT", "Single-cell lithium battery positive terminal."),
    ["en", "EN", "Pull low to disable the 3.3 V regulator.", "input"],
    power("usb", "USB", "5 V USB VBUS."),
    ...[[13, "P1.09"], [12, "P0.08"], [11, "P0.06"], [10, "P0.27"], [9, "P0.26"], [6, "P0.07"], [5, "P1.08"]]
      .map(([n, port]) => gpio(`d${n}`, `D${n}`, port)),
    gpio("scl", "SCL", "P0.11", "I²C clock"), gpio("sda", "SDA", "P0.12", "I²C data"),
  ],
  model: {
    label: "Adafruit Feather nRF52840 STEP files",
    url: "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main/4062%20nRF52840%20Feather",
  },
  art: ({ width, height }) => {
    const c = width / 2;
    return board(width, height, "#265590", "#6286b2") + usb(c - 16, 8, 32) +
      mountingHole(20, 16) + mountingHole(width - 20, 16) +
      mountingHole(20, height - 16) + mountingHole(width - 20, height - 16) +
      tactile(c - 26, 49) + rect(c + 6, 48, 27, 24, 2, "#e1dfd5", "#fcfaf0") +
      chip(c - 21, 90, 42, 26, "SWD", 4) + label(c, 160, "FEATHER", 10) +
      rect(c - 29, 183, 58, 72, 3, "#b7c3c9", "#dfe9e9") + label(c, 215, "nRF52840", 8, "#354a5b");
  },
});

const entries = [xiaoBoard(false, false), xiaoBoard(false, true), xiaoBoard(true, false), xiaoBoard(true, true),
  nanoBoard(false), nanoBoard(true), feather];

export const nordicBoardComponents = entries.map(({ component }) => component);
export const nordicBoardArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
export const nordicBoardFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
export const nordicBoardModels = Object.fromEntries(entries.filter(({ model }) => model).map(({ component, model }) => [component.id, model]));
