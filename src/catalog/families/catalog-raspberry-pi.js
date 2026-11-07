import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";

const documentation = "https://www.raspberrypi.com/documentation/computers/sbcs.html";
const cadDocuments = "https://pip.raspberrypi.com/documents/";
const headerPitch = 2.54;
const headerCenter = [32.5, 3.5];
const boardHeight = 56;
const canvasHeight = 300;
const boardLeft = 80;
const boardTop = 54;
const boardScale = 3.4;
const pcbGreen = "#20794f";
const silver = "#bfc6c7";
const black = "#252d31";
const silk = "#edf2db";

// Physical header numbering viewed from the component side, with pin 1 on the inner row.
const header = [
  "3v3", "5v", "2", "5v", "3", "gnd", "4", "14", "gnd", "15",
  "17", "18", "27", "gnd", "22", "23", "3v3", "24", "10", "gnd",
  "9", "25", "11", "8", "gnd", "7", "0", "1", "5", "gnd",
  "6", "12", "13", "gnd", "19", "16", "26", "20", "gnd", "21",
];

function headerPosition(index) {
  return [
    headerCenter[0] + (Math.floor(index / 2) - 9.5) * headerPitch,
    headerCenter[1] + (index % 2 === 0 ? headerPitch / 2 : -headerPitch / 2),
  ];
}

const railSpecs = {
  "3v3": ["3V3", "power_out", "Regulated 3.3 V rail output."],
  "5v": ["5V", "passive", "Shared 5 V system rail. Provides 5 V when powered through USB and is also available as a board power connection."],
  gnd: ["GND", "power_in", "Power and signal ground."],
};

const gpioFunctions = {
  2: "I²C1 SDA with an onboard pull-up to 3.3 V.",
  3: "I²C1 SCL with an onboard pull-up to 3.3 V.",
  4: "Can provide a general-purpose clock output.",
  7: "SPI0 CE1.",
  8: "SPI0 CE0.",
  9: "SPI0 MISO.",
  10: "SPI0 MOSI.",
  11: "SPI0 SCLK.",
  12: "Can provide a hardware PWM output.",
  13: "Can provide a hardware PWM output.",
  14: "UART TX when configured.",
  15: "UART RX when configured.",
  18: "Can provide a hardware PWM output.",
  19: "Can provide a hardware PWM output.",
};

function headerPins(width, debugUart) {
  return header.map((terminal, index) => {
    const number = String(index + 1);
    const outer = index % 2 === 1;
    const eeprom = terminal === "0" || terminal === "1";
    const signal = terminal === "0" ? "ID_SD" : "ID_SC";
    const serial = debugUart && (terminal === "14" || terminal === "15");
    const gpioNote = gpioFunctions[terminal] ?? "";
    const functionNote = eeprom ? ` ${signal} is reserved for the HAT identification EEPROM.`
      : gpioNote ? ` ${gpioNote}` : "";
    const [pinLabel, type, description] = railSpecs[terminal] ?? [
      eeprom ? signal : `GPIO${terminal}`,
      "bidirectional",
      `3.3 V GPIO${terminal}.${functionNote}${serial ? " The Pi 5 has a separate connector for the default serial console." : ""}`,
    ];
    return {
      id: railSpecs[terminal] ? `${terminal}-${number}` : `gpio${terminal}`,
      number, label: pinLabel, type, description,
      x: outer ? width : 0,
      y: 17 + Math.floor(index / 2) * 14,
    };
  });
}

const olderPorts = [
  ["metal", 6.9, 51.4, 7.4, 5.8, 3],
  ["metal", 24.8, 45.4, 14.4, 12, 6.5],
  ["ribbon", 1.7, 16.7, 3.7, 22.6, 5.5],
  ["jack", 50, 43.5, 7, 15, 6],
];

const pi3bPorts = [
  ...olderPorts,
  ["ribbon", 43.5, 33.4, 3.7, 22.6, 5.5],
  ["usb2", 69.4, 2.4, 17.8, 13.2, 16],
  ["usb2", 69.4, 20.4, 17.8, 13.2, 16],
  ["ethernet", 65.6, 38, 21.6, 15.7, 13.5],
];

const boards = [
  {
    id: "raspberry-pi-3-model-a-plus", model: "3 Model A+", shortName: "Pi 3A+",
    revision: "1.0", soc: "BCM2837B0", boardWidth: 65,
    features: "Compact board with dual-band Wi-Fi, a single USB 2.0 port and full-size HDMI.",
    source: "https://www.raspberrypi.com/products/raspberry-pi-3-model-a-plus/",
    cad: { label: "Raspberry Pi 3A+ mechanical drawing (PDF)", url: `${cadDocuments}RP-008330-DS` },
    parts: [
      ...olderPorts,
      ["ribbon", 43.5, 33.4, 3.7, 22.6, 5.5],
      ["usb2", 53.3, 17.9, 14.1, 13.2, 7],
      ["shield", 6.6, 7.6, 10.5, 12, 2],
      ["soc", 20, 17.5, 14, 14, 2.4],
    ],
  },
  {
    id: "raspberry-pi-3-model-b", model: "3 Model B", shortName: "Pi 3B",
    revision: "1.2", soc: "BCM2837", boardWidth: 85,
    features: "Board with 2.4 GHz Wi-Fi, 100 Mb/s Ethernet and four USB 2.0 ports.",
    source: `${documentation}#raspberry-pi-3-model-b`,
    cad: { label: "Raspberry Pi 3B mechanical drawing (DXF)", url: `${cadDocuments}RP-008334-DS` },
    parts: [
      ...pi3bPorts,
      ["antenna", 0.65, 8.5, 1.8, 5.1, 1.3],
      ["soc-dark", 20, 17.5, 14, 14, 2.4],
      ["chip", 55.3, 17.8, 9.3, 9, 1.7],
    ],
  },
  {
    id: "raspberry-pi-3-model-b-plus", model: "3 Model B+", shortName: "Pi 3B+",
    revision: "1.0", soc: "BCM2837B0", boardWidth: 85,
    features: "Board with dual-band Wi-Fi, four USB 2.0 ports and Ethernet with PoE HAT support.",
    source: "https://www.raspberrypi.com/products/raspberry-pi-3-model-b-plus/",
    cad: { label: "Raspberry Pi 3B+ mechanical drawing (DXF)", url: `${cadDocuments}RP-008336-DS` },
    parts: [
      ...pi3bPorts,
      ["shield", 6.6, 6.6, 10.5, 13.2, 2],
      ["soc", 20, 17.4, 14, 14, 2.4],
      ["chip", 54, 19, 10, 9, 1.7],
      ["poe", 59, 7.1, 5.1, 5.1, 8.5],
    ],
  },
  {
    id: "raspberry-pi-4-model-b", model: "4 Model B", shortName: "Pi 4B",
    revision: "1.4", soc: "BCM2711", boardWidth: 85,
    features: "USB-C-powered board with dual micro-HDMI, two USB 3.0 ports and Gigabit Ethernet.",
    source: `${documentation}#raspberry-pi-4-model-b`,
    cad: { label: "Raspberry Pi 4B mechanical drawing (DXF)", url: `${cadDocuments}RP-008342-DS` },
    parts: [
      ["metal", 6.85, 49.8, 8.7, 7.4, 3.2],
      ["metal", 22.7, 49.5, 6.6, 8, 3],
      ["metal", 36.2, 49.5, 6.6, 8, 3],
      ["jack", 50.5, 43.4, 7.2, 15, 6],
      ["ribbon", 1.6, 16.9, 3.8, 19, 5.5],
      ["ribbon", 44.7, 33.4, 3.7, 22.6, 5.5],
      ["ethernet", 66.6, 2.5, 21.5, 15.5, 13.5],
      ["usb3", 70.5, 22.4, 17.6, 13.2, 16],
      ["usb2", 70.5, 40.4, 17.6, 13.2, 16],
      ["shield", 6.7, 7, 10.8, 13, 2],
      ["soc", 21.8, 16.1, 15, 15, 2.4],
      ["chip", 39, 16.1, 11.6, 15, 1.5],
      ["chip", 55.4, 15, 6.2, 6.1, 1.3],
      ["chip", 55.4, 28, 8.1, 8.1, 1.5],
      ["poe", 59, 7.1, 5.1, 5.1, 8.5],
    ],
  },
  {
    id: "raspberry-pi-5", model: "5", shortName: "Pi 5",
    revision: "1.0", soc: "BCM2712", boardWidth: 85, debugUart: true,
    features: "USB-C-powered board with RP1 I/O, dual micro-HDMI, two CAM/DISP connectors and PCIe.",
    source: `${documentation}#raspberry-pi-5`,
    cad: {
      label: "Raspberry Pi 5 STEP model",
      url: "https://pip-assets.raspberrypi.com/categories/892-raspberry-pi-5/documents/RP-010083-CA-1-rpi-5%203D%20STEP%20-%20No%20Graphics%20small%20file.zip",
    },
    parts: [
      ["metal", 6.85, 49.9, 8.7, 7.5, 3.2],
      ["metal", 22.5, 49, 6.6, 8.4, 3],
      ["metal", 35.9, 49, 6.6, 8.4, 3],
      ["ethernet", 66.6, 37.8, 21.4, 16, 13.5],
      ["usb2", 70.8, 2.4, 17.2, 13.2, 16],
      ["usb3", 70.8, 20.3, 17.2, 13.2, 16],
      ["ribbon", 1.3, 20.6, 3.1, 11.8, 3, 16],
      ["ribbon", 47.2, 39.7, 3.1, 15.6, 3, 22],
      ["ribbon", 53.4, 39.7, 3.1, 15.6, 3, 22],
      ["shield", 7.2, 7, 10.5, 13.1, 2],
      ["chip", 26, 11.8, 14.5, 10.1, 1.5],
      ["soc", 24.6, 24.7, 17, 17, 2.9],
      ["rp1", 52.3, 14.9, 12, 12, 1.7],
      ["chip", 59.8, 29.7, 8, 8, 1.6],
      ["poe", 59, 44, 5.1, 5.1, 8.5],
      ["socket", 17, 49.7, 4.2, 3, 4.1, 2],
      ["socket", 29.7, 50.3, 5.3, 3.5, 3.4, 3],
      ["socket", 65.2, 1.1, 3.1, 5.9, 4.4, 4],
      ["switch", -0.45, 35.4, 3.3, 3.5, 3.4],
    ],
  },
];

const raspberryPiComponents = boards.map(({ id, model, shortName, revision, soc, boardWidth, features, source, debugUart }) => {
  const width = Math.round(boardWidth * boardScale + 2 * boardLeft + 12);
  return {
    id, art: id, name: `Raspberry Pi ${model}`, shortName, manufacturer: "Raspberry Pi", category: "Single-board computers",
    subtitle: `${soc} / 40-pin GPIO`,
    description: `Board revision ${revision}. ${features} The 40-pin GPIO header is available for wiring.`,
    source, tags: ["raspberry", "rpi", "sbc", "linux", "gpio", "hat", soc.toLowerCase(), shortName.toLowerCase()],
    width, height: canvasHeight, referencePrefix: "U", pins: headerPins(width, debugUart),
  };
});

const partColors = {
  soc: silver, "soc-dark": black, shield: silver, antenna: "#e8ddbb", chip: black, rp1: black,
  metal: silver, usb2: silver, usb3: "#a3bcc9", ethernet: silver, jack: black,
  ribbon: "#e4deba", socket: "#f1e6bf", poe: black, switch: black,
};

const raspberryPiFootprints = Object.fromEntries(boards.map(({ id, boardWidth, parts }, index) => {
  const { pins } = raspberryPiComponents[index];
  const pads = pins.map((pin, index) => {
    const [x, y] = headerPosition(index);
    return {
      id: pin.id,
      x: Number((x - boardWidth / 2).toFixed(2)),
      y: Number((y - boardHeight / 2).toFixed(2)),
      size: 1.7, drill: 1, square: index === 0,
    };
  });
  return [id, {
    body: [boardWidth, boardHeight],
    color: pcbGreen,
    note: "Reference carrier for the 2 × 20 GPIO connector, viewed from the component side. Match the mating header and stacking orientation. Verify mounting holes and connector overhangs against the manufacturer drawing before fabrication.",
    pads,
    details: [
      ...parts.map(([kind, x, y, width, height, depth]) =>
        [x + width / 2 - boardWidth / 2, y + height / 2 - boardHeight / 2, width, height, depth, partColors[kind]]),
      [headerCenter[0] - boardWidth / 2, headerCenter[1] - boardHeight / 2, 50.8, 5.08, 2.5, black],
      ...pads.map(({ x, y }) => [x, y, 0.64, 0.64, 8.5, "#c9be99"]),
    ],
  }];
}));

const raspberryPiModels = Object.fromEntries(boards.map(({ id, cad }) => [id, cad]));

function artPart(kind, x, y, width, height, soc, contactCount = 15) {
  const outline = rect(x, y, width, height, 0.6, partColors[kind], "#465453");
  if (kind === "usb2" || kind === "usb3" || kind === "ethernet") {
    const lip = kind === "usb3" ? "#3083aa" : "#3e4849";
    return outline + rect(x + width - 2.5, y + 0.55, 2, height - 1.1, 0.3, lip) +
      line(x + 1.6, y + 1, x + width - 3, y + 1, "#eff2ed", 0.45) +
      (kind === "ethernet"
        ? rect(x + width - 2.4, y + 1.6, 1.7, 1.45, 0.2, "#d0b665") +
          rect(x + width - 2.4, y + height - 3.1, 1.7, 1.45, 0.2, "#71a567")
        : [0.28, 0.62].map(offset =>
          path(`M${x + width - 6} ${y + height * offset}h3l-0.8 1.2h-2.2`, "#687476", "#e2e7e3", 0.25)
        ).join(""));
  }
  if (kind === "metal" || kind === "jack") {
    return outline + line(x + 1, y + 0.9, x + width - 1, y + 0.9, "#e4e9e6", 0.55) +
      rect(x + 0.5, y + height - 2, width - 1, 1.5, 0.35, "#454f51") +
      line(x + 1.4, y + height - 0.55, x + width - 1.4, y + height - 0.55, "#f3f5eb", 0.3);
  }
  if (kind === "ribbon" || kind === "socket") {
    const vertical = height > width;
    const contacts = Array.from({ length: contactCount }, (_, index) => {
      const fraction = (index + 1) / (contactCount + 1);
      return vertical
        ? line(x + width - 0.9, y + fraction * height, x + width + 0.15, y + fraction * height, "#ab8e60", 0.24)
        : line(x + fraction * width, y + height - 1.3, x + fraction * width, y + height - 0.45, "#ab8e60", 0.25);
    }).join("");
    return outline + contacts + (vertical
      ? rect(x + 0.3, y + 0.8, 0.8, height - 1.6, 0.2, "#635e4e")
      : rect(x + 0.65, y + 0.8, width - 1.3, 0.75, 0.2, "#8a7458"));
  }
  if (kind === "poe") {
    return outline + [1.28, 3.82].flatMap(dx => [1.28, 3.82].map(dy =>
      circle(x + dx, y + dy, 0.56, "#d4bd88", "#f6dfaa"))).join("");
  }
  if (kind === "soc" || kind === "soc-dark" || kind === "rp1") {
    const ink = kind === "soc" ? "#465250" : "#d3d9ce";
    const inset = kind === "soc" ? "#d4d9d6" : "#343d3e";
    return outline + rect(x + 0.7, y + 0.7, width - 1.4, height - 1.4, 0.6, inset) +
      circle(x + 1.8, y + 1.8, 0.45, ink) + label(x + width / 2, y + height / 2, kind === "rp1" ? "RP1" : soc, 1.9, ink);
  }
  return outline + line(x + 1, y + 0.8, x + width - 1, y + 0.8, "#d1dad3", 0.28);
}

function physicalHeader() {
  return rect(7.1, 0.96, 50.8, 5.08, 0.35, black, "#15201e") +
    header.map((_, index) => {
      const [x, y] = headerPosition(index);
      return index === 0
        ? rect(x - 0.64, y - 0.64, 1.28, 1.28, 0.13, "#f4dc95")
        : circle(x, y, 0.59, "#d4bd86");
    }).join("");
}

function gpioBanks({ pins, width, height }, showLabels) {
  const terminalColor = { power_out: "#f0aa62", passive: "#f08b7f", power_in: "#a4b6b1", bidirectional: "#86cca9" };
  const bankWidth = showLabels ? 61 : 13;
  const rails = rect(2, 7, bankWidth, height - 14, 6, "#192a26", "#49625a") +
    rect(width - bankWidth - 2, 7, bankWidth, height - 14, 6, "#192a26", "#49625a");
  return rails + pins.map((pin) => {
    const left = pin.x === 0;
    const inward = left ? 1 : -1;
    const color = terminalColor[pin.type];
    const textX = pin.x + inward * 25;
    return line(pin.x, pin.y, pin.x + inward * 8, pin.y, color, 1.4) +
      circle(pin.x + inward * 8, pin.y, 2.2, color) +
      (showLabels ? label(textX - inward * 9, pin.y, pin.number, 7, "#aabdb5") +
        label(textX, pin.y, pin.label, 8.2, silk, left ? "start" : "end") : "");
  }).join("");
}

function boardArt(board, component, showLabels) {
  const { boardWidth, model, soc, parts, debugUart } = board;
  const platedHoles = [3.5, 61.5].flatMap(x => [3.5, 52.5].map(y =>
    circle(x, y, 2.8, "#e2c773", "#f6dd90") + circle(x, y, 1.36, "#202d28")));
  const pi5Holes = debugUart ? circle(3.5, 46.5, 1.5, "#202d28") + circle(61.5, 9.5, 1.5, "#202d28") : "";
  const traces = [
    "M9 47h7l5-5h8", "M10 49h7l6-6h7", "M36 9v5l4 4h6",
    "M11 36h7l4-4", "M49 12h7l2-2", "M35 38h4l4-4h7", "M33 39h6l4-4h7",
  ].map(trace => path(trace, "none", "#3e996e", 0.32)).join("");
  const discretes = [[7, 39], [10, 40.6], [14, 40], [16, 46], [18, 42], [11, 45.6],
    [35, 13], [38, 11], [42, 15], [38, 34], [39, 36], [17, 13], [17, 15]].map(([x, y]) =>
    rect(x, y, 1.6, 0.8, 0.15, "#afbdab") + rect(x + 0.33, y, 0.94, 0.8, 0.12, "#766a53")).join("");
  const powerMarks = debugUart
    ? label(19.1, 47.7, "BAT", 1.55, silk) + label(32.4, 48.4, "UART", 1.55, silk) +
      label(66.5, 8.5, "FAN", 1.35, silk) + label(52.6, 37.4, "CAM/DISP", 1.55, silk)
    : label(10.6, 49.6, "PWR", 1.55, silk) + label(model === "4 Model B" ? 29.2 : 32, 44, "HDMI", 1.65, silk);
  const hardware = parts.map(([kind, x, y, w, h, , contacts]) => artPart(kind, x, y, w, h, soc, contacts)).join("");
  const modelMark = label(model === "5" ? 31.5 : 38, model === "5" ? 8.6 : 9.3,
    `Raspberry Pi ${model}`, 2.3, silk);
  const pcb = rect(0, 0.55, boardWidth, boardHeight, 3, "#174b37") +
    rect(0, 0, boardWidth, boardHeight, 3, pcbGreen, "#7db47b") +
    traces + discretes + hardware + platedHoles + pi5Holes + physicalHeader() + powerMarks + modelMark;
  return `<g transform="translate(${boardLeft} ${boardTop}) scale(${boardScale})">${pcb}</g>` +
    label(boardLeft + boardWidth * boardScale / 2, 267, "40-PIN GPIO HEADER", 8.4, "#849c92") +
    gpioBanks(component, showLabels);
}

const raspberryPiArt = Object.fromEntries(boards.map(board =>
  [board.id, (component, showLabels = true) => boardArt(board, component, showLabels)]));

export default defineFamily("raspberry-pi", (raspberryPiComponents).map(component => ({ component, render: (raspberryPiArt)[component.art], footprint: (raspberryPiFootprints)[component.id], model: raspberryPiModels[component.id] })));
