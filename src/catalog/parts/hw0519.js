import { circle, label, line, path, rect } from "../shared/svg.js";

const width = 232;
const height = 88;

function terminal(id, label, description, type, number, x, y) {
  return { id, label, description, type, number, x, y };
}

export const hw0519 = {
  id: "hw0519", name: "RS-485 to UART (HW-0519)", shortName: "HW-0519", category: "Interfaces",
  description: "Half-duplex RS-485 adapter with automatic direction control and separate UART and bus-side connections. Pin order follows the blue HW-0519 board.",
  manufacturer: "Generic breakout", subtitle: "UART / automatic direction", tags: ["hw0519", "hw-519", "rs485", "modbus", "uart", "ttl", "transceiver"],
  source: "https://tasmota.github.io/docs/SolaX-X1/#hw-0519",
  width, height, art: "hw0519", referencePrefix: "U",
  pins: [
    terminal("vcc", "VCC", "Module supply. Confirm the supported supply and UART logic levels for your board revision.", "power_in", "J1.1", 0, 25),
    terminal("txd", "TXD", "UART input on this board. Connect to the host TX pin.", "input", "J1.2", 0, 41),
    terminal("rxd", "RXD", "UART output on this board. Connect to the host RX pin.", "output", "J1.3", 0, 57),
    terminal("gnd", "GND", "UART-side ground and supply return.", "power_in", "J1.4", 0, 73),
    terminal("a", "A+", "RS-485 differential line marked A+ on the board.", "bidirectional", "J2.1", width, 18),
    terminal("b", "B−", "RS-485 differential line marked B− on the board.", "bidirectional", "J2.2", width, 45.5),
    terminal("earth", "EARTH", "Earth terminal on the RS-485 side. Verify its connection to UART ground on the fitted revision.", "passive", "J2.3", width, 73),
  ],
};

function chip(x, y, bodyWidth, bodyHeight, pins) {
  const legs = Array.from({ length: pins }, (_, index) => {
    const legY = y + 3 + index * (bodyHeight - 8) / (pins - 1);
    return `<rect x="${x - 4}" y="${legY}" width="5" height="2" rx=".5"/><rect x="${x + bodyWidth - 1}" y="${legY}" width="5" height="2" rx=".5"/>`;
  }).join("");
  return `<g fill="#bfcad1">${legs}</g><rect x="${x}" y="${y}" width="${bodyWidth}" height="${bodyHeight}" rx="2" fill="#172430" stroke="#2e4352"/>
    <circle cx="${x + 4}" cy="${y + 4}" r="1.25" fill="#68818e"/>`;
}

function castellatedPad(pin, showLabels) {
  const left = pin.edge === "left";
  const center = pin.x;
  const radius = left ? 4.9 : 6.2;
  const edge = left ? 4 : width - 4;
  return rect(left ? edge : center - radius, pin.y - radius, radius + 6, radius * 2, radius - 1, "#b4c3c9", "#dfebef") +
    circle(center, pin.y, radius - 2, "#263c49", "#f0f3f0") +
    (showLabels ? label(left ? 17 : width - 18, pin.y, pin.label, 7.4, "#edf5f8", left ? "start" : "end") : "");
}

function surfacePart(x, y, bodyWidth, bodyHeight, fill, marking = "") {
  const margin = Math.min(5, bodyWidth / 4);
  return rect(x - 1.5, y - 1.2, bodyWidth + 3, bodyHeight + 2.4, 0.6, "none", "#bed5e0") +
    rect(x, y, bodyWidth, bodyHeight, 0.8, "#c4c9c7", "#e0e4df") +
    rect(x + margin, y + 0.25, bodyWidth - margin * 2, bodyHeight - 0.5, 0.7, fill) +
    (marking ? label(x + bodyWidth / 2, y + bodyHeight / 2, marking, 6.2, "#f0f3ee") : "");
}

export function drawHw0519({ pins }, showLabels = true) {
  const smallParts = [
    [38, 13, 12, 4, "#353b37"], [59, 12, 12, 4, "#353b37"],
    [81, 14, 4, 12, "#383d39"], [89, 14, 4, 12, "#383d39"], [97, 14, 4, 12, "#383d39"],
    [105, 34, 11, 4, "#c8b695"], [121, 34, 9, 4, "#c8b695"],
    [81, 75, 12, 4, "#c8b695"], [109, 75, 12, 4, "#c8b695"],
    [194, 27, 5, 7, "#353b37"], [194, 48, 5, 7, "#353b37"], [194, 61, 5, 5, "#353b37"],
  ].map(args => surfacePart(...args)).join("");
  const protection = [
    surfacePart(151, 8, 36, 15, "#292d30", "010"),
    surfacePart(151, 29, 36, 15, "#292d30", "010"),
    surfacePart(151, 51, 36, 11, "#272c31"),
    surfacePart(151, 68, 36, 10, "#272c31"),
    rect(136, 49, 10, 25, 1, "#333a3e", "#a7bfc5"),
  ].join("");
  return rect(4, 4, width - 8, height - 8, 0.7, "#075682", "#7aabbc") +
    path("M10 25H25L39 30M10 41H35M10 57H35M10 73H23L39 65M124 47H132L142 40H178L200 45.5H222M124 62H129L140 74H222M180 18H222", "none", "#367aa0", 1.5) +
    path("M5 20H17V77H5M226 10H212V80H226M136 44H189V80H135Z", "none", "#c6dde5", 0.8) +
    chip(42, 26, 29, 46, 7) + chip(103, 44, 25, 29, 4) + smallParts + protection +
    surfacePart(105, 8, 19, 6, "#dee5cc") + surfacePart(105, 21, 19, 6, "#dee5cc") +
    rect(81, 36, 7, 20, 1, "#b7c7c8", "#dae5e5") +
    rect(81.4, 41, 6.2, 11, 1.5, "#c4523d") + line(82, 48, 87, 48, "#7a352d", 1.2) +
    label(7, 9, "HW-0519", 6.5, "#eff7f9", "start") +
    label(57, 77, "U2", 6.2) + label(116, 81, "U1", 5.1) +
    label(128, 11, "TXD", 5.6, "#edf5f8", "start") + label(128, 24, "RXD", 5.6, "#edf5f8", "start") +
    pins.map(pin => castellatedPad(pin, showLabels)).join("");
}
