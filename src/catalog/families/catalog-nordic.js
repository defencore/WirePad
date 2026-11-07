import { defineFamily } from "../registry.js";
import { board, circle, edgePads, label, line, path, pinRow, rect, smd } from "../shared/svg.js";

const raytacDownload = index => `https://www.raytac.com/document/act.php?act=1&index_id=${index}`;

const rail = {
  GND: ["power_in", "Ground. Tie the pad to the host PCB ground plane."],
  VDD: ["power_in", "Main supply or regulator output, depending on supply mode. Follow the module reference circuit."],
  VDDH: ["power_in", "High-voltage regulator input. Wire the VDD and DC/DC pins as specified for the chosen power mode."],
  VDD_NRF: ["power_in", "1.7–3.6 V module supply. Follow Raytac's reference circuit for decoupling and power-on limits."],
  VBUS: ["power_in", "5 V USB detection and USB regulator supply input."],
  RESET: ["input", "Active-low reset input with internal pull-up."],
  SWDIO: ["bidirectional", "Serial Wire Debug data."],
  SWDCLK: ["input", "Serial Wire Debug clock input."],
  "D+": ["bidirectional", "USB full-speed D+."],
  "D−": ["bidirectional", "USB full-speed D−."],
};
const analogInputs = { "P0.02": 0, "P0.03": 1, "P0.04": 2, "P0.05": 3, "P0.28": 4, "P0.29": 5, "P0.30": 6, "P0.31": 7 };

function raytacPin(number, signal, family, alternate) {
  const supply = signal === "VDD" && family === "nRF52832" ? ["power_in", "1.7–3.6 V module supply. Follow Raytac's decoupling circuit."] : rail[signal];
  const analog = /nRF528[34][02]/.test(family) ? analogInputs[signal] : undefined;
  const pinDetails = supply ?? (signal.startsWith("DEC")
    ? ["passive", "Regulator decoupling pin. Connect the specified capacitor in the vendor reference circuit."]
    : signal.startsWith("DCC")
      ? ["passive", "DC/DC converter node. Use the vendor reference circuit for the selected regulator mode."]
      : ["bidirectional", `${signal} GPIO.${analog === undefined ? "" : ` Analog input AIN${analog}.`}`]);
  return [`pad-${number}`, signal, [pinDetails[1], alternate].filter(Boolean).join(" "), pinDetails[0], String(number)];
}

const range = (first, last) => Array.from({ length: last - first + 1 }, (_, index) => first + index);

function raytacFamily({ family, body, thickness, spec, design, contacts, sides, alternates, variants }) {
  const padByNumber = new Map(contacts.map(([signal, x, y, width, height], index) => {
    const number = index + 1;
    const pin = raytacPin(number, signal, family, alternates[number]);
    return [number, { pin, land: { id: pin[0], x, y, size: [width, height] } }];
  }));
  const width = Math.max(152, sides.bottom.length * 14 + 30);
  const height = Math.max(195, Math.max(sides.left.length, sides.right.length) * 14 + 100);
  const pins = Object.entries(sides).flatMap(([side, numbers]) => {
    const vertical = side === "left" || side === "right";
    const start = vertical ? 60 : (width - (numbers.length - 1) * 14) / 2;
    return pinRow(side, width, height, start, 14, numbers.map(number => padByNumber.get(number).pin));
  });
  const footprint = {
    body, color: "#245c52", modelHeight: 0.7, smd: true,
    pads: Array.from(padByNumber.values(), ({ land }) => land),
    details: [[0, body[1] * 0.1, body[0] * 0.84, body[1] * 0.69, thickness - 0.7, "#a8b5bc"]],
    note: "SMD pad dimensions and coordinates follow the Raytac land pattern. Add the antenna and top-layer keepouts shown in the vendor layout guide before fabrication.",
  };
  return variants.map(([model, antenna]) => {
    const id = `raytac-${model.toLowerCase()}`;
    const component = {
      id, name: `Raytac ${model}`, shortName: model, category: "Wireless modules",
      manufacturer: "Raytac", subtitle: `${family} / ${antenna} antenna`,
      description: `${family} Bluetooth LE module with a ${antenna.toLowerCase()} antenna. The diagram groups numbered module lands by edge. Check the datasheet for supply configuration and the RF keepout.`,
      tags: ["nordic", "ble", "bluetooth", "smd", family, model, "rf"],
      source: raytacDownload(spec), width, height, art: id, referencePrefix: "U", pins,
    };
    const modelLink = { label: "Raytac footprint, keepout and STEP files", url: raytacDownload(design) };
    return { component, footprint, modelLink, art: (entry, labels) => raytacArt(entry, labels, family, antenna, footprint) };
  });
}

const raytacFronts = {
  nRF52832: { color: "#15576c", shieldTop: 0.23, shieldInset: 0.09 },
  nRF52840: { color: "#075a70", shieldTop: 0.25, shieldInset: 0.04 },
  nRF5340: { color: "#12566d", shieldTop: 0.31, shieldInset: 0.04 },
  nRF54L15: { color: "#228354", shieldTop: 0.26, shieldInset: 0.025 },
};

function raytacAntenna(family, antenna, width, height) {
  if (antenna === "PCB") {
    const feed = family === "nRF5340" ? 14 : 9;
    return path(`M${feed} ${height - 2}V11h8v13h8V11h8v13h8V11h8v13h8V11h8v13h8V11H${width - 9}`,
      "none", "#163f52", 2.3);
  }
  if (family === "nRF54L15") {
    return line(7, 7, width - 13, 7, "#c2b47b", 1) +
      rect(10, 4, 15, 5, 1, "#d1d6ce", "#b3a979") +
      rect(width - 28, 4, 16, 5, 1, "#d1d6ce", "#b3a979") +
      smd(width - 24, height - 8, "#bcad73");
  }
  return rect(7, 4, width - 14, 9, 1, "#cbd3d4", "#102d43") +
    rect(8, 4, 7, 9, 1, "#b9a66e") + rect(width - 15, 4, 7, 9, 1, "#b9a66e") +
    rect(16, 5, width - 32, 7, 0.5, "#e1e3de") + smd(width - 23, height - 7, "#b6ad7e");
}

function raytacArt(component, showLabels, family, antenna, { body: [bodyWidth, bodyHeight], pads }) {
  const { width, height, shortName, pins } = component;
  const cx = width / 2;
  const front = raytacFronts[family];
  const scale = Math.min((width - 90) / 100, (height - 60) / (100 * bodyHeight / bodyWidth));
  const physicalHeight = 100 * bodyHeight / bodyWidth;
  const shieldY = physicalHeight * front.shieldTop;
  const shieldX = 100 * front.shieldInset;
  const shieldWidth = 100 - 2 * shieldX;
  const shieldHeight = physicalHeight - shieldY - 5;
  const shieldCenter = shieldY + shieldHeight / 2;
  const castellations = family === "nRF52832" ? pads
    .filter(({ x, y }) => Math.abs(x) >= 4.6 || y >= 7.5)
    .map(({ x, y, size: [padWidth, padHeight] }) => {
      const left = Math.max(0, 50 + (x - padWidth / 2) * 10);
      const right = Math.min(100, 50 + (x + padWidth / 2) * 10);
      const top = physicalHeight / 2 + (y - padHeight / 2) * 10;
      return rect(left, top, right - left, Math.min(padHeight * 10, physicalHeight - top), 0.4, "#c3a665");
    }).join("") : "";
  const physical = rect(0, 0, 100, physicalHeight, 1, front.color, "#103848") +
    raytacAntenna(family, antenna, 100, shieldY) +
    castellations +
    rect(shieldX, shieldY, shieldWidth, shieldHeight, 1, "#9eaaa9", "#7b8c93") +
    rect(shieldX + 3, shieldY + 3, shieldWidth - 6, shieldHeight - 6, 1, "#bfc8c7", "#d1d9d7") +
    line(shieldX + 3, shieldY + 4, 100 - shieldX - 3, shieldY + 4, "#e2e6e1", 1.2) +
    `<g transform="rotate(90 50 ${shieldCenter})">` +
    label(50, shieldCenter - 17, "RAYTAC", 10, "#364b53") +
    label(50, shieldCenter, shortName, 8, "#3b5056") +
    label(50, shieldCenter + 14, family, 8, "#4d6468") + "</g>";
  const captions = showLabels ? pins.map(pin => {
    const horizontal = pin.x === 0 || pin.x === width;
    if (horizontal) {
      const left = pin.x === 0;
      return label(left ? 16 : width - 16, pin.y, pin.label, 7.5, "#eef3e8", left ? "start" : "end");
    }
    const upper = pin.y === 0;
    const y = upper ? 16 : height - 16;
    return `<g transform="rotate(${upper ? 90 : -90} ${pin.x} ${y})">${label(pin.x, y, pin.label, 7.5, "#eef3e8", "start")}</g>`;
  }).join("") : "";

  const top = (height - physicalHeight * scale) / 2 - 11;
  const terminals = pins.map(({ x, y }) => {
    if (x === 0 || x === width) {
      const left = x === 0;
      return line(x, y, left ? 10 : width - 10, y, "#ac8550", 1.3) +
        rect(left ? 7 : width - 13, y - 2.2, 6, 4.4, 0.7, "#dbb274");
    }
    const upper = y === 0;
    return line(x, y, x, upper ? 10 : height - 10, "#ac8550", 1.3) +
      rect(x - 2.2, upper ? 7 : height - 13, 4.4, 6, 0.7, "#dbb274");
  }).join("");
  return board(width, height, "#24363e", "#435a62") +
    `<g transform="translate(${cx - 50 * scale} ${top}) scale(${scale})">${physical}</g>` +
    terminals + captions;
}

// Land dimensions come from the Raytac Eagle or Protel libraries linked from each entry.
const radios = [
  ...raytacFamily({ family: "nRF52832", body: [10, 16], thickness: 2.2, spec: 24, design: 19,
    sides: { left: range(1, 11), bottom: range(12, 24), right: range(25, 41).reverse() },
    contacts: [
      ["GND", -4.6, -3.8, 1.4, 0.8],
      ["P0.25", -4.6, -0.8, 1.4, 0.4],
      ["P0.26", -4.6, -0.1, 1.4, 0.4],
      ["P0.27", -4.6, 0.6, 1.4, 0.4],
      ["P0.28", -4.6, 1.3, 1.4, 0.4],
      ["P0.29", -4.6, 2.0, 1.4, 0.4],
      ["P0.30", -4.6, 2.7, 1.4, 0.4],
      ["P0.31", -4.6, 3.4, 1.4, 0.4],
      ["DEC4", -4.6, 4.1, 1.4, 0.4],
      ["DCC", -4.6, 4.8, 1.4, 0.4],
      ["VDD", -4.6, 5.5, 1.4, 0.4],
      ["GND", -4.2, 7.6, 0.4, 1.4],
      ["P0.00", -3.5, 7.6, 0.4, 1.4],
      ["P0.01", -2.8, 7.6, 0.4, 1.4],
      ["P0.02", -2.1, 7.6, 0.4, 1.4],
      ["P0.03", -1.4, 7.6, 0.4, 1.4],
      ["P0.04", -0.7, 7.6, 0.4, 1.4],
      ["P0.05", 0.0, 7.6, 0.4, 1.4],
      ["P0.06", 0.7, 7.6, 0.4, 1.4],
      ["P0.07", 1.4, 7.6, 0.4, 1.4],
      ["P0.08", 2.1, 7.6, 0.4, 1.4],
      ["P0.09", 2.8, 7.6, 0.4, 1.4],
      ["P0.10", 3.5, 7.6, 0.4, 1.4],
      ["GND", 4.2, 7.6, 0.4, 1.4],
      ["P0.11", 4.6, 6.2, 1.4, 0.4],
      ["P0.12", 4.6, 5.5, 1.4, 0.4],
      ["P0.13", 4.6, 4.8, 1.4, 0.4],
      ["P0.14", 4.6, 4.1, 1.4, 0.4],
      ["P0.15", 4.6, 3.4, 1.4, 0.4],
      ["P0.16", 4.6, 2.7, 1.4, 0.4],
      ["P0.17", 4.6, 2.0, 1.4, 0.4],
      ["P0.18", 4.6, 1.3, 1.4, 0.4],
      ["P0.19", 4.6, 0.6, 1.4, 0.4],
      ["P0.20", 4.6, -0.1, 1.4, 0.4],
      ["P0.21", 4.6, -0.8, 1.4, 0.4],
      ["SWDCLK", 4.6, -1.5, 1.4, 0.4],
      ["SWDIO", 4.6, -2.2, 1.4, 0.4],
      ["P0.22", 4.6, -2.9, 1.4, 0.4],
      ["GND", 4.6, -3.8, 1.4, 0.8],
      ["P0.24", 2.9, -3.25, 1.0, 0.4],
      ["P0.23", 2.9, -1.85, 1.0, 0.4],
    ],
    alternates: {
      13: "Optional 32.768 kHz crystal XL1.",
      14: "Optional 32.768 kHz crystal XL2.",
      22: "NFC1 alternate function.",
      23: "NFC2 alternate function.",
      28: "Trace data 3 alternate function.",
      29: "Trace data 2 alternate function.",
      30: "Trace data 1 alternate function.",
      32: "Trace data 0 alternate function.",
      34: "Trace clock alternate function.",
      35: "Configurable as active-low system reset.",
    },
    variants: [["MDBT42Q-512KV2", "Ceramic"], ["MDBT42Q-P512KV2", "PCB"]],
  }),
  ...raytacFamily({ family: "nRF52840", body: [10.5, 15.5], thickness: 2.05, spec: 44, design: 30,
    sides: { left: range(1, 14), bottom: range(15, 33), right: range(34, 55).reverse(), top: range(56, 61) },
    contacts: [
      ["GND", -4.65, -3.75, 0.6, 0.4],
      ["GND", -4.65, -2.65, 0.6, 0.4],
      ["P1.10", -4.65, -1.85, 0.6, 0.4],
      ["P1.11", -4.65, -0.25, 0.6, 0.4],
      ["P1.12", -3.75, 0.15, 0.6, 0.4],
      ["P1.13", -4.65, 0.55, 0.6, 0.4],
      ["P1.14", -3.75, 0.95, 0.6, 0.4],
      ["P1.15", -4.65, 1.35, 0.6, 0.4],
      ["P0.03", -3.75, 1.75, 0.6, 0.4],
      ["P0.29", -4.65, 2.15, 0.6, 0.4],
      ["P0.02", -3.75, 2.55, 0.6, 0.4],
      ["P0.31", -4.65, 2.95, 0.6, 0.4],
      ["P0.28", -3.75, 3.35, 0.6, 0.4],
      ["P0.30", -4.65, 3.75, 0.6, 0.4],
      ["GND", -4.8, 7.15, 0.4, 0.6],
      ["P0.27", -4.0, 7.15, 0.4, 0.6],
      ["P0.00", -3.2, 7.15, 0.4, 0.6],
      ["P0.01", -2.4, 7.15, 0.4, 0.6],
      ["P0.26", -2.0, 6.25, 0.4, 0.6],
      ["P0.04", -1.6, 7.15, 0.4, 0.6],
      ["P0.05", -1.2, 6.25, 0.4, 0.6],
      ["P0.06", -0.8, 7.15, 0.4, 0.6],
      ["P0.07", -0.4, 6.25, 0.4, 0.6],
      ["P0.08", 0.0, 7.15, 0.4, 0.6],
      ["P1.08", 0.4, 6.25, 0.4, 0.6],
      ["P1.09", 0.8, 7.15, 0.4, 0.6],
      ["P0.11", 1.2, 6.25, 0.4, 0.6],
      ["VDD", 1.6, 7.15, 0.4, 0.6],
      ["P0.12", 2.0, 6.25, 0.4, 0.6],
      ["VDDH", 2.4, 7.15, 0.4, 0.6],
      ["DCCH", 3.2, 7.15, 0.4, 0.6],
      ["VBUS", 4.0, 7.15, 0.4, 0.6],
      ["GND", 4.8, 7.15, 0.4, 0.6],
      ["D−", 4.65, 6.15, 0.6, 0.4],
      ["D+", 4.65, 5.35, 0.6, 0.4],
      ["P0.14", 3.75, 4.95, 0.6, 0.4],
      ["P0.13", 4.65, 4.55, 0.6, 0.4],
      ["P0.16", 3.75, 4.15, 0.6, 0.4],
      ["P0.15", 4.65, 3.75, 0.6, 0.4],
      ["P0.18", 3.75, 3.35, 0.6, 0.4],
      ["P0.17", 4.65, 2.95, 0.6, 0.4],
      ["P0.19", 3.75, 2.55, 0.6, 0.4],
      ["P0.21", 3.75, 1.75, 0.6, 0.4],
      ["P0.20", 4.65, 1.35, 0.6, 0.4],
      ["P0.23", 3.75, 0.95, 0.6, 0.4],
      ["P0.22", 4.65, 0.55, 0.6, 0.4],
      ["P1.00", 3.75, 0.15, 0.6, 0.4],
      ["P0.24", 4.65, -0.25, 0.6, 0.4],
      ["P0.25", 3.75, -0.65, 0.6, 0.4],
      ["P1.02", 3.75, -1.45, 0.6, 0.4],
      ["SWDIO", 4.65, -1.85, 0.6, 0.4],
      ["P0.09", 3.75, -2.25, 0.6, 0.4],
      ["SWDCLK", 4.65, -2.65, 0.6, 0.4],
      ["P0.10", 3.75, -3.05, 0.6, 0.4],
      ["GND", 4.65, -3.75, 0.6, 0.4],
      ["P1.04", -2.0, 0.55, 0.4, 0.6],
      ["P1.06", -1.2, 0.55, 0.4, 0.6],
      ["P1.07", -0.4, 0.55, 0.4, 0.6],
      ["P1.05", 0.4, 0.55, 0.4, 0.6],
      ["P1.03", 1.2, 0.55, 0.4, 0.6],
      ["P1.01", 2.0, 0.55, 0.4, 0.6],
    ],
    alternates: {
      3: "Use standard drive and low-frequency signals to preserve RF performance.",
      4: "Use standard drive and low-frequency signals to preserve RF performance.",
      5: "Use standard drive and low-frequency signals to preserve RF performance.",
      6: "Use standard drive and low-frequency signals to preserve RF performance.",
      7: "Use standard drive and low-frequency signals to preserve RF performance.",
      8: "Use standard drive and low-frequency signals to preserve RF performance.",
      9: "Use standard drive and low-frequency signals to preserve RF performance.",
      10: "Use standard drive and low-frequency signals to preserve RF performance.",
      11: "Use standard drive and low-frequency signals to preserve RF performance.",
      12: "Use standard drive and low-frequency signals to preserve RF performance.",
      13: "Use standard drive and low-frequency signals to preserve RF performance.",
      14: "Use standard drive and low-frequency signals to preserve RF performance.",
      17: "Optional 32.768 kHz crystal XL1.",
      18: "Optional 32.768 kHz crystal XL2.",
      23: "Trace clock alternate function.",
      26: "Trace data 3 alternate function.",
      27: "Trace data 2 alternate function.",
      29: "Trace data 1 alternate function.",
      40: "Configurable as active-low system reset. Recommended QSPI chip-select pad.",
      42: "Recommended QSPI clock pad.",
      43: "Recommended QSPI data pad.",
      45: "Recommended QSPI data pad.",
      46: "Recommended QSPI data pad.",
      47: "Trace data 0 or recommended QSPI data pad.",
      50: "Use standard drive and low-frequency signals to preserve RF performance.",
      52: "NFC1 alternate function. Use standard drive and low-frequency signals in GPIO mode.",
      54: "NFC2 alternate function. Use standard drive and low-frequency signals in GPIO mode.",
      56: "Use standard drive and low-frequency signals to preserve RF performance.",
      57: "Use standard drive and low-frequency signals to preserve RF performance.",
      58: "Use standard drive and low-frequency signals to preserve RF performance.",
      59: "Use standard drive and low-frequency signals to preserve RF performance.",
      60: "Use standard drive and low-frequency signals to preserve RF performance.",
    },
    variants: [["MDBT50Q-1MV2", "Ceramic"], ["MDBT50Q-P1MV2", "PCB"]],
  }),
  ...raytacFamily({ family: "nRF5340", body: [7.8, 12.4], thickness: 1.85, spec: 80, design: 75,
    sides: { left: range(1, 17), bottom: range(18, 27), right: range(28, 39).reverse() },
    contacts: [
      ["GND", -3.3, -2.2, 0.55, 0.4],
      ["SWDIO", -3.3, -0.925, 0.55, 0.4],
      ["SWDCLK", -2.35, -0.55, 0.55, 0.4],
      ["RESET", -3.3, -0.175, 0.55, 0.4],
      ["P0.26", -2.35, 0.2, 0.55, 0.4],
      ["P0.18", -3.3, 0.575, 0.55, 0.4],
      ["P0.25", -2.35, 0.95, 0.55, 0.4],
      ["P0.17", -3.3, 1.325, 0.55, 0.4],
      ["P0.12", -2.35, 1.7, 0.55, 0.4],
      ["P0.16", -3.3, 2.075, 0.55, 0.4],
      ["P0.11", -2.35, 2.45, 0.55, 0.4],
      ["P0.15", -3.3, 2.825, 0.55, 0.4],
      ["P0.10", -2.35, 3.2, 0.55, 0.4],
      ["P0.14", -3.3, 3.575, 0.55, 0.4],
      ["P0.09", -2.35, 3.95, 0.55, 0.4],
      ["P0.13", -3.3, 4.325, 0.55, 0.4],
      ["P0.08", -2.35, 4.7, 0.55, 0.4],
      ["GND", -3.375, 5.6, 0.4, 0.55],
      ["P1.03", -2.625, 5.6, 0.4, 0.55],
      ["P1.02", -1.875, 5.6, 0.4, 0.55],
      ["P0.03", -1.125, 5.6, 0.4, 0.55],
      ["P0.02", -0.375, 5.6, 0.4, 0.55],
      ["P0.00", 0.375, 5.6, 0.4, 0.55],
      ["P0.01", 1.125, 5.6, 0.4, 0.55],
      ["DCCH", 1.875, 5.6, 0.4, 0.55],
      ["VDD", 2.625, 5.6, 0.4, 0.55],
      ["GND", 3.375, 5.6, 0.4, 0.55],
      ["P0.05", 2.35, 4.7, 0.55, 0.4],
      ["VDDH", 3.3, 4.325, 0.55, 0.4],
      ["P0.04", 2.35, 3.95, 0.55, 0.4],
      ["DCCD", 3.3, 3.575, 0.55, 0.4],
      ["P1.13", 2.35, 3.2, 0.55, 0.4],
      ["DECD", 3.3, 2.825, 0.55, 0.4],
      ["P1.12", 2.35, 2.45, 0.55, 0.4],
      ["DCC", 3.3, 2.075, 0.55, 0.4],
      ["P1.11", 2.35, 1.7, 0.55, 0.4],
      ["DECR", 3.3, 1.325, 0.55, 0.4],
      ["P0.31", 3.3, 0.575, 0.55, 0.4],
      ["GND", 3.3, -2.2, 0.55, 0.4],
    ],
    alternates: {
      5: "Analog input AIN5.",
      6: "QSPI CSN alternate function.",
      7: "Analog input AIN4.",
      8: "QSPI SCK alternate function.",
      9: "SPIM4 DCX alternate function.",
      10: "QSPI IO3 alternate function.",
      11: "SPIM4 CSN alternate function.",
      12: "QSPI IO2 alternate function.",
      13: "SPIM4 MISO alternate function.",
      14: "QSPI IO1 alternate function.",
      15: "SPIM4 MOSI alternate function.",
      16: "QSPI IO0 alternate function.",
      17: "SPIM4 SCK alternate function.",
      19: "High-speed TWI-capable pin.",
      20: "High-speed TWI-capable pin.",
      21: "NFC2 alternate function.",
      22: "NFC1 alternate function.",
      23: "Optional 32.768 kHz crystal XL1.",
      24: "Optional 32.768 kHz crystal XL2.",
      28: "Analog input AIN1.",
      30: "Analog input AIN0.",
    },
    variants: [["MDBT53V-1M", "Ceramic"], ["MDBT53V-P1M", "PCB"]],
  }),
  ...raytacFamily({ family: "nRF54L15", body: [9.5, 13.7], thickness: 1.8, spec: 96, design: 98,
    sides: { left: [43, ...range(1, 13)], bottom: range(14, 26), right: [42, ...range(27, 41).reverse()] },
    contacts: [
      ["GND", -4.25, -3.1, 0.5, 0.4],
      ["P1.09", -4.25, -2.4, 0.5, 0.4],
      ["P1.10", -4.25, -1.7, 0.5, 0.4],
      ["P1.11", -4.25, -1.0, 0.5, 0.4],
      ["P1.12", -4.25, -0.3, 0.5, 0.4],
      ["P1.13", -4.25, 0.4, 0.5, 0.4],
      ["P1.14", -4.25, 1.1, 0.5, 0.4],
      ["DECD", -4.25, 1.8, 0.5, 0.4],
      ["DCC", -4.25, 2.5, 0.5, 0.4],
      ["GND", -4.25, 3.2, 0.5, 0.4],
      ["VDD_NRF", -4.25, 3.9, 0.5, 0.4],
      ["P1.00", -4.25, 4.6, 0.5, 0.4],
      ["P1.01", -4.25, 5.3, 0.5, 0.4],
      ["GND", -4.2, 6.35, 0.4, 0.5],
      ["P1.02", -3.5, 6.35, 0.4, 0.5],
      ["P1.03", -2.8, 6.35, 0.4, 0.5],
      ["P1.04", -2.1, 6.35, 0.4, 0.5],
      ["P1.05", -1.4, 6.35, 0.4, 0.5],
      ["P1.06", -0.7, 6.35, 0.4, 0.5],
      ["P1.07", 0.0, 6.35, 0.4, 0.5],
      ["P1.08", 0.7, 6.35, 0.4, 0.5],
      ["P2.00", 1.4, 6.35, 0.4, 0.5],
      ["P2.01", 2.1, 6.35, 0.4, 0.5],
      ["P2.02", 2.8, 6.35, 0.4, 0.5],
      ["P2.03", 3.5, 6.35, 0.4, 0.5],
      ["GND", 4.2, 6.35, 0.4, 0.5],
      ["P2.04", 4.25, 5.3, 0.5, 0.4],
      ["P2.05", 4.25, 4.6, 0.5, 0.4],
      ["P2.06", 4.25, 3.9, 0.5, 0.4],
      ["P2.07", 4.25, 3.2, 0.5, 0.4],
      ["P2.08", 4.25, 2.5, 0.5, 0.4],
      ["P2.09", 4.25, 1.8, 0.5, 0.4],
      ["P2.10", 4.25, 1.1, 0.5, 0.4],
      ["P0.00", 4.25, 0.4, 0.5, 0.4],
      ["P0.01", 4.25, -0.3, 0.5, 0.4],
      ["SWDIO", 4.25, -1.0, 0.5, 0.4],
      ["SWDCLK", 4.25, -1.7, 0.5, 0.4],
      ["P0.03", 4.25, -2.4, 0.5, 0.4],
      ["RESET", 4.25, -3.1, 0.5, 0.4],
      ["P0.04", 3.35, -2.8, 0.5, 0.4],
      ["P0.02", 3.35, -2.0, 0.5, 0.4],
      ["GND", 4.05, -6.15, 0.9, 1.0],
      ["GND", -4.125, -6.15, 0.75, 1.0],
    ],
    alternates: {
      4: "Analog input AIN4.",
      5: "Analog input AIN5.",
      6: "Analog input AIN6.",
      7: "Analog input AIN7.",
      12: "Optional 32.768 kHz crystal XL1.",
      13: "Optional 32.768 kHz crystal XL2.",
      15: "NFC1 alternate function.",
      16: "NFC2 alternate function.",
      17: "Analog input AIN0.",
      18: "Analog input AIN1.",
      19: "Analog input AIN2.",
      20: "Analog input AIN3.",
      21: "External SAADC reference alternate function.",
      22: "QSPI D3 or UARTE RXD alternate function.",
      23: "QSPI or SPI clock alternate function.",
      24: "QSPI D0 or UARTE TXD alternate function.",
      25: "QSPI D2 alternate function.",
      27: "QSPI D1 or UARTE CTS alternate function.",
      28: "QSPI CS or UARTE RTS alternate function.",
      29: "SPI clock or trace clock alternate function.",
      30: "Trace data 0 or UARTE RXD alternate function.",
      31: "Trace data 1 or UARTE TXD alternate function.",
      32: "Trace data 2 or UARTE CTS alternate function.",
      33: "Trace data 3 or UARTE RTS alternate function.",
      38: "GRTC PWM alternate function.",
      40: "GRTC 32 kHz clock output alternate function.",
    },
    variants: [["AN54LQ-15", "Ceramic"]],
  }),
];

const radioHeader = [
  ["gnd", "GND", "Power and signal ground.", "power_in", "1"],
  ["vcc", "VCC", "3.3 V nominal supply input. Maximum supply is 3.6 V.", "power_in", "2"],
  ["ce", "CE", "Radio enable and transmit or receive mode control.", "input", "3"],
  ["csn", "CSN", "Active-low SPI chip select.", "input", "4"],
  ["sck", "SCK", "SPI clock from the controller.", "input", "5"],
  ["mosi", "MOSI", "SPI data from the controller.", "input", "6"],
  ["miso", "MISO", "SPI data to the controller.", "tri_state", "7"],
  ["irq", "IRQ", "Active-low interrupt output.", "output", "8"],
];

function ebyteFront({ width, height }, model, amplified) {
  const c = width / 2;
  if (amplified) {
    const groundVias = [c - 34, c - 23, c + 23, c + 34].map(x =>
      circle(x, 53, 3.1, "#b7aa62", "#e0cf92") + circle(x, 64, 3.1, "#b7aa62", "#e0cf92")).join("");
    return rect(c - 39, 44, 78, 156, 0.7, "#408154", "#265a3d") +
      groundVias +
      rect(c - 10, 29, 20, 34, 1, "#b79049", "#ede0a8") +
      rect(c - 15, 26, 30, 16, 1, "#c5a25b", "#f1dea3") +
      rect(c - 12, 5, 24, 24, 1, "#c49b52", "#e3cb85") +
      [9, 12, 15, 18, 21, 24].map(y => line(c - 11, y, c + 11, y, "#8b6d3d", 0.8)).join("") +
      line(c, 42, c, 62, "#ecd3a3", 2.6) +
      rect(c - 33, 69, 66, 113, 1, "#aeb8b7", "#d5dcda") +
      rect(c - 30, 72, 60, 105, 1, "#d5d9d5", "#8f9d98") +
      label(c, 99, "EBYTE", 9, "#435751") +
      label(c, 118, model, 7, "#435751") +
      label(c, 143, "2.4 GHz", 7, "#546b5c") +
      circle(c + 32, 192, 3, "#cfbe83", "#325c47");
  }
  const contacts = [116, 130].flatMap(y => [-25.5, -8.5, 8.5, 25.5].map(x =>
    circle(c + x, y, 4.3, "#bfa363", "#e2c788") +
    rect(c + x - 1.7, y - 1.7, 3.4, 3.4, 0.3, "#a5aab0", "#e4e6e3"))).join("");
  return rect(c - 42, 5, 84, 148, 1, "#ad3737", "#6f2e34") +
    path(`M${c + 20} 51H${c + 33}V14h-20v27h-14V14h-15v27h-17V14`,
      "none", "#7c242a", 3) +
    rect(c - 15, 66, 30, 29, 1.5, "#262b31", "#70777b") +
    circle(c - 11, 71, 1.4, "#929b9f") + label(c, 81, "nRF24", 7.5, "#b4bab9") +
    rect(c + 21, 78, 13, 15, 1, "#c3c2a4", "#e3d3a9") +
    smd(c - 31, 71) + smd(c - 32, 83) + smd(c + 19, 59) + contacts +
    label(c, height - 15, model, 7.5, "#f8d6c6");
}

function ebyteDIP(model, body, headerInset, amplified) {
  const id = `ebyte-${model.toLowerCase()}`;
  const width = 134;
  const height = amplified ? 210 : 158;
  const first = height - 69;
  const component = {
    id, name: `Ebyte ${model} nRF24L01+`, shortName: model, category: "Wireless modules", manufacturer: "Ebyte",
    subtitle: amplified ? "2.4 GHz SPI radio / PA + LNA / SMA" : "2.4 GHz SPI radio / PCB antenna",
    description: amplified
      ? "nRF24L01+ SPI transceiver with 20 dBm PA/LNA and an SMA antenna connector. The illustrated header banks show the odd and even contacts. Allow for transmit current peaks when sizing the 3.3 V supply."
      : "nRF24L01+ SPI transceiver with a printed antenna. The illustrated header banks show the odd and even contacts of the 2 × 4 connector.",
    tags: ["nordic", "nrf24", "nrf24l01", "spi", "radio", "2.4ghz", ...(amplified ? ["pa", "lna", "sma"] : [])],
    source: `https://www.cdebyte.com/products/${model}/2`, width, height, art: id, referencePrefix: "U",
    pins: [
      ...pinRow("left", width, height, first, 14, radioHeader.filter((_, i) => i % 2 === 0)),
      ...pinRow("right", width, height, first, 14, radioHeader.filter((_, i) => i % 2 === 1)),
    ],
  };
  // Antenna up, viewed from the component side. Pad 1 is in the outer row.
  const x = headerInset[0] - body[0] / 2;
  const y = body[1] / 2 - headerInset[1];
  const footprint = {
    body, color: "#285d4b",
    groups: [
      { ids: ["gnd", "ce", "sck", "miso"], x, y, pitch: 2.54, drill: 1, size: 1.75 },
      { ids: ["vcc", "csn", "mosi", "irq"], x, y: y - 2.54, pitch: 2.54, drill: 1, size: 1.75 },
    ],
    details: amplified ? [[0, -4, 14, 17, 2.4, "#acb7bf"], [0, -body[1] / 2, 7, 8, 6, "#ba995d"]]
      : [[0, -1, 6, 6, 1, "#293849"]],
    note: "Reference carrier for a 2.54 mm 2 × 4 header. Verify pin 1, mating orientation, connector location and antenna clearance against the module.",
  };
  const art = (entry, labels) => {
    const banks = board(entry.width, 78, amplified ? "#254137" : "#522e33", amplified ? "#4e7763" : "#8a5b59");
    return `<g transform="translate(0 ${entry.height - 78})">${banks}</g>` +
      ebyteFront(entry, model, amplified) + edgePads(entry, labels);
  };
  return { component, footprint, art };
}

const nrf24Modules = [
  ebyteDIP("E01-ML01D", [12.6, 22.6], [2.5, 1.3], false),
  ebyteDIP("E01-ML01DP5", [18, 33.4], [5.15, 1.45], true),
];

const entries = [...radios, ...nrf24Modules];

const nordicComponents = entries.map(({ component }) => component);
const nordicArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const nordicFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const nordicModels = Object.fromEntries(
  entries.filter(({ modelLink }) => modelLink).map(({ component, modelLink }) => [component.id, modelLink]),
);

export default defineFamily("nordic", (nordicComponents).map(component => ({ component, render: (nordicArt)[component.art], footprint: (nordicFootprints)[component.id], model: nordicModels[component.id] })));
