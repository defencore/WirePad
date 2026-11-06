import { board, circle, edgePads, label, line, moduleArt, mountingHole, path, pinRow, rect, smd } from "./catalog-extension.js";

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

function usbShell(x, y, width, height) {
  return rect(x, y, width, height, 1.8, "#b3babc", "#8a979c") +
    rect(x + 3, y + 3, width - 6, height - 6, 1, "#cbd1d0", "#e7eae5") +
    line(x + 4, y + 3, x + width - 4, y + 3, "#f0f1e9", 1.5) +
    [x + 6, x + width - 13].map(notch => rect(notch, y + height - 9, 7, 4, 0.4, "#5f7078")).join("");
}

function tactSwitch(x, y, width, height) {
  return rect(x, y, width, height, 1.2, "#9aadb0", "#e6e7dc") +
    circle(x + width / 2, y + height / 2, Math.min(width, height) * 0.29, "#353d40", "#c5cac3");
}

function xiaoBody({ width, height, id }) {
  const c = width / 2;
  const plus = id.endsWith("-plus");
  const sense = id.includes("-sense");
  const edgeContacts = Array.from({ length: 7 }, (_, index) => {
    const y = 29 + index * 14.1;
    return [c - 47, c + 47].map(x =>
      rect(x - 6, y - 4.4, 12, 8.8, plus ? 2.8 : 3.8, "#c9a65c", "#f1d992") +
      circle(x, y, 2.4, "#222621", "#edd9a5")).join("");
  }).join("");
  const lower = sense
    ? rect(c + 18, 116, 17, 14, 1, "#202421", "#63695a") +
      circle(c + 26.5, 123, 2, "#c8ad71", "#f0ddaf") + smd(c + 11, 114)
    : [0, 1, 2].map(row => [c + 19, c + 30].map(x =>
      rect(x, 115 + 4.8 * row, 6.5, 3.4, 0.5, "#c4a066")).join("")).join("");
  return board(width, height, "#25343a", "#475b60") +
    rect(c - 52, 11, 104, 124, 10, "#272927", "#50584b") +
    edgeContacts +
    usbShell(c - 25, 4, 50, 36) +
    tactSwitch(c - 40, 15, 9, 13) + label(c - 36, 31, "R", 6) +
    rect(c + 32, 14, 6, 5, 0.7, "#d9cf8e") + rect(c + 32, 24, 6, 5, 0.7, "#a4b5a0") +
    Array.from({ length: 10 }, (_, index) => line(c - 19 + 4.2 * index, 40, c - 19 + 4.2 * index, 45, "#b49b6e")).join("") +
    rect(c - 36, 47, 72, 65, 2, "#a4aaa2", "#d4d6c5") +
    rect(c - 33, 49, 66, 60, 1.6, "#eeeade", "#c9c7b9") +
    label(c, 62, "seeed studio", 8.3, "#343a30") +
    label(c, 78, "XIAO nRF52840", 6.3, "#424740") +
    label(c, 96, [sense && "SENSE", plus && "PLUS"].filter(Boolean).join(" ") || "BLE", 7, "#444b41") +
    rect(c - 25, 118, 26, 9, 1.2, "#b7bdb0", "#d7c694") +
    rect(c - 20, 118, 17, 9, 0.8, "#34649a", "#809bb7") +
    lower +
    label(c, height - 49, "REAR CONTACTS", 8, "#bfd0d1") +
    line(24, height - 43, width - 24, height - 43, "#58666a");
}

function xiaoArt(component, showLabels) {
  const { height, width, pins } = component;
  const front = [];
  const rear = [];
  for (const pin of pins) {
    // Plus GPIO 11–19 are rear lands grouped in the side rows on the canvas.
    (pin.y === height || /^d1[1-9]$/.test(pin.id) ? rear : front).push(pin);
  }
  const rearArt = rear.map(({ x, y, label: signal }) => {
    if (y === height) {
      const captionY = height - 17;
      const caption = showLabels
        ? `<g transform="rotate(-90 ${x} ${captionY})">${label(x, captionY, signal, 7, "#e1e9e8", "start")}</g>`
        : "";
      return line(x, y, x, height - 10, "#a78b5d", 1.4) +
        rect(x - 2.5, height - 13, 5, 6, 0.7, "#d4aa65") + caption;
    }
    const left = x === 0;
    const caption = showLabels ? label(left ? 16 : width - 16, y, signal, 8, "#d1dddf", left ? "start" : "end") : "";
    return line(x, y, left ? 9 : width - 9, y, "#a78b5d", 1.4) +
      rect(left ? 6 : width - 12, y - 2.4, 6, 4.8, 0.7, "#d4aa65") + caption;
  }).join("");
  return xiaoBody(component) + edgePads({ ...component, pins: front }, showLabels) + rearArt;
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
    art: xiaoArt, footprint: xiaoFootprint(plus),
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

function nanoFront({ width, height }, sense) {
  const c = width / 2;
  const shieldY = height - 104;
  const smallParts = [[35, 55], [38, 69], [52, 112], [62, 112], [81, 114], [91, 124], [47, 160], [94, 171], [53, 181]]
    .map(([x, y]) => smd(x, y, "#abac93")).join("");
  const sensors = sense
    ? rect(c - 13, 151, 21, 15, 1, "#262e32", "#79918c") +
      rect(c - 10, 174, 26, 16, 1, "#24282a", "#5e6b63") +
      circle(c + 5, 182, 2.3, "#c3ab72", "#f0d698") + rect(c + 19, 143, 10, 9, 1, "#a6b5af")
    : smd(c - 26, 166) + rect(c + 12, 150, 13, 12, 1, "#263131", "#577575");
  return board(width, height, "#08778a", "#419aa3") +
    [[15, 17], [width - 15, 17], [15, height - 16], [width - 15, height - 16]]
      .map(([x, y]) => mountingHole(x, y)).join("") +
    usbShell(c - 27, 3, 54, 36) +
    rect(c - 39, 17, 6, 10, 1, "#d8c786") + rect(c + 32, 17, 6, 10, 1, "#9bc5a0") +
    smallParts +
    tactSwitch(c - 13, 73, 26, 18) +
    rect(c - 8, 122, 17, 23, 0.8, "#172425", "#566c68") +
    rect(c - 29, 125, 13, 11, 0.8, "#192728", "#567270") + sensors +
    rect(c - 33, shieldY, 66, 85, 1, "#718851", "#4d6851") +
    rect(c - 33, shieldY, 66, 65, 1, "#a8b1ab", "#d7dad0") +
    rect(c - 29, shieldY + 3, 58, 59, 1, "#bbc5bd") +
    label(c, shieldY + 20, "u-blox", 9, "#4a5c58") +
    label(c, shieldY + 37, "NINA-B306", 7.7, "#4a5c58") +
    label(c, shieldY + 51, sense ? "SENSE REV2" : "BLE REV2", 7, "#4a5c58") +
    path(`M${c - 23} ${shieldY + 70}h46l-7 4h-32Zm10 7h26l-6 4h-14Z`, "#36704e");
}

function nanoBoard(sense) {
  const model = `Nano 33 BLE${sense ? " Sense" : ""} Rev2`;
  const id = `arduino-nano-33-ble${sense ? "-sense" : ""}-rev2`;
  return headerBoard({
    id, name: `Arduino ${model}`, shortName: model, manufacturer: "Arduino", left: nanoLeft, right: nanoRight,
    description: `3.3 V Arduino Nano with a u-blox NINA-B306 module, USB and ${sense ? "onboard motion and environmental sensors" : "an onboard IMU"}. The two Nano headers are exposed.`,
    source: `https://docs.arduino.cc/hardware/${id.slice("arduino-".length)}/`,
    size: [18, 45], spacing: 15.24, color: "#177875",
    art: component => nanoFront(component, sense),
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
    const swd = [146, 154].flatMap(y => [c - 13, c - 6.5, c, c + 6.5, c + 13]
      .map(x => rect(x - 1, y - 1, 2, 2, 0.4, "#bca36d"))).join("");
    const components = [[52, 60], [67, 53], [80, 72], [57, 89], [88, 102], [69, 114], [50, 183], [89, 191]]
      .map(([x, y]) => smd(x, y)).join("");
    return board(width, height, "#1253a0", "#507bb3") + usbShell(c - 25, 5, 50, 31) +
      mountingHole(21, 18) + mountingHole(width - 21, 18) +
      mountingHole(21, height - 17) + mountingHole(width - 21, height - 17) +
      rect(c - 40, 9, 7, 12, 1, "#cbd592") + rect(c + 32, 9, 7, 12, 1, "#eab68b") +
      rect(101, 44, 33, 41, 1.5, "#575754", "#9a9985") +
      rect(107, 49, 25, 10, 1, "#2c3432") + rect(109, 71, 21, 9, 1, "#2c3432") +
      tactSwitch(34, 63, 15, 14) + tactSwitch(34, 177, 15, 14) +
      rect(34, 110, 15, 14, 1, "#d6d6c4", "#353d46") + circle(41.5, 117, 4, "#f6ebd1", "#b6aa92") +
      components +
      rect(c - 27, 138, 54, 24, 1, "#313737", "#989b8d") +
      rect(c - 22, 142, 44, 16, 0.8, "#171a1a") + swd +
      label(c + 11, 172, "Adafruit", 7.5, "#e5ebee") +
      rect(c - 32, 211, 64, 84, 1.1, "#154883", "#6585a9") +
      rect(c - 30, 213, 60, 63, 0.8, "#b6bfb9", "#d5ddda") +
      circle(c - 23, 220, 2.6, "#495756") + label(c, 246, "nRF52840", 8, "#425758") +
      rect(c - 18, 283, 36, 6, 0.8, "#303c43") + rect(c + 6, 284, 9, 4, 0.5, "#d9d9bd");
  },
});

const entries = [xiaoBoard(false, false), xiaoBoard(false, true), xiaoBoard(true, false), xiaoBoard(true, true),
  nanoBoard(false), nanoBoard(true), feather];

export const nordicBoardComponents = entries.map(({ component }) => component);
export const nordicBoardArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
export const nordicBoardFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
export const nordicBoardModels = Object.fromEntries(entries.filter(({ model }) => model).map(({ component, model }) => [component.id, model]));
