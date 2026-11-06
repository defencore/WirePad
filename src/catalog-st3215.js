import { circle, label, line, path, rect, screw } from "./catalog-extension.js";

const width = 185;
const height = 120;

export const st3215 = {
  id: "st3215", name: "ST3215 Serial Bus Servo", shortName: "ST3215", category: "Actuators",
  description: "Waveshare ST3215 (SKU 22414), the 12 V nominal variant. The two 5264-3P ports share one half-duplex TTL serial bus. This illustration shows their shared GND, VCC, and DATA connections.",
  manufacturer: "Waveshare", subtitle: "TTL bus servo / 12 V nominal",
  tags: ["actuator", "motor", "servo", "sts3215", "single-wire", "half-duplex", "uart", "5264", "waveshare"],
  source: "https://docs.waveshare.com/ST3215_Servo",
  width, height, art: "st3215", referencePrefix: "M",
  // Servo-side numbering follows the Feetech ST-3215-C047 connector drawing.
  pins: [
    { id: "gnd", label: "GND", description: "Supply return and TTL signal reference. Share ground with the controller.", type: "power_in", number: "1", x: width, y: 41 },
    { id: "vcc", label: "VCC", description: "Servo power input, 6–12.6 V for this variant (12 V nominal). Stall current is 2.7 A at 12 V.", type: "power_in", number: "2", x: width, y: 60 },
    { id: "data", label: "DATA", description: "Single-wire, half-duplex TTL serial data at 1 Mbps by default. Use an ST/SC-compatible bus interface.", type: "bidirectional", number: "3", x: width, y: 79 },
  ],
};

export function drawSt3215({ pins }, showLabels = true) {
  const leadColors = ["#46535f", "#c8544a", "#e6b653"];
  const leads = pins.map((pin, index) => {
    const startY = 37 + index * 7;
    return path(`M150 ${startY}H158L170 ${pin.y}H${pin.x}`, "none", leadColors[index], 2) +
      (showLabels ? label(181, pin.y - 6, pin.label, 7, "#344450", "end") : "");
  }).join("");
  const frontScrews = [31, 89].map(y => screw(14, y, 3.8) + screw(130, y, 3.8)).join("");
  const mountingThreads = [32, 88].map(y =>
    circle(60, y, 3, "#151a21", "#525960") + circle(118, y, 3, "#151a21", "#525960")
  ).join("");
  const hornHoles = [[37, 41], [18, 60], [56, 60], [37, 79]].map(([x, y]) =>
    circle(x, y, 3.6, "#202832", "#d5dcdf")
  ).join("");
  const rearSockets = [32, 64].map(y =>
    rect(141, y, 13, 24, 1.2, "#ded7bd", "#ada596") +
    rect(143, y + 2, 9, 20, 0.6, "#9c8f73", "#f1e8d2") +
    [5, 12, 19].map(offset => line(145, y + offset, 150, y + offset, "#e3d2a7", 1.4)).join("")
  ).join("");

  // The product's face shows the output disk. The two bus sockets are on the rear.
  return leads +
    rect(7, 25, 130, 72, 7, "#151b23", "#1b2229") +
    rect(7, 24, 130, 71, 6, "#30353b", "#494f55") +
    rect(13, 35, 118, 50, 5, "#292e34", "#3c4249") +
    line(65, 35, 126, 35, "#565d63") + line(65, 85, 125, 85, "#161e25") +
    frontScrews + mountingThreads +
    circle(37, 60, 28.2, "#b5c1c8", "#eef0f1") +
    circle(37, 60, 25.2, "#bcc6cd", "#a5b2ba") + hornHoles +
    circle(37, 60, 5.4, "#a87945", "#e7c391") +
    circle(37, 60, 2.8, "#292621", "#7d582f") +
    rect(77, 46, 48, 28, 1.8, "#161b1f", "#42484d") +
    line(81, 59, 121, 59, "#354438", 0.8) +
    label(101, 53, "WAVESHARE", 6.2, "#9bc757") +
    label(101, 66, "ST3215", 7, "#ebefeb") +
    rect(139, 30, 17, 60, 2, "#30363c", "#656d74") + rearSockets +
    (showLabels ? label(147.5, 24, "REAR", 6.2, "#344450") : "");
}
