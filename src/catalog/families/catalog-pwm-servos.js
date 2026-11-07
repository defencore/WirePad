import { defineFamily } from "../registry.js";
import { circle, label, line, path, pinRow, rect } from "../shared/svg.js";

const width = 192;
const height = 108;
const leads = [
  ["gnd", "GND", "Brown wire. Supply return and PWM signal reference.", "power_in"],
  ["vcc", "V+", "Red wire. 4.8 V nominal servo supply input.", "power_in"],
  ["pwm", "PWM", "Orange wire. RC position command pulse input.", "input"],
];

const sg90 = {
  id: "towerpro-sg90", name: "TowerPro SG90 Analog Servo", shortName: "SG90",
  subtitle: "9 g micro servo / plastic gears",
  description: "Genuine SG90 analog micro servo with POM gears and a three-position JR-style lead. The case and lead colors follow the TowerPro model.",
  source: "https://torqpro.com/product/sg90-analog/",
};

const mg90s = {
  id: "towerpro-mg90s", name: "TowerPro MG90S Analog Servo", shortName: "MG90S",
  subtitle: "Micro servo / metal gears",
  description: "Genuine MG90S analog micro servo with metal gears and a three-position JR-style lead.",
  source: "https://torqpro.com/product/mg90s-analog/",
};

const pwmServoComponents = [sg90, mg90s].map(part => ({
  ...part, art: part.id, manufacturer: "TowerPro", category: "Actuators", referencePrefix: "M",
  width, height, contactLayout: "physical", tags: ["servo", "pwm", "micro servo", "jr", "rc", "actuator"],
  pins: pinRow("right", width, height, 45, 18, leads).map((pin, index) => ({ ...pin, x: 170, surface: true, symbolPlacement: { side: "right", order: index } })),
}));

function servoArt({ shortName, pins }, showLabels, colors) {
  const [shell, highlight, shade, sticker, spline] = colors;
  const wireColors = ["#855341", "#d95b52", "#e5a14d"];
  const cable = pins.map(({ x, y, label: name }, index) =>
    path(`M111 ${77 + index * 4}H121Q132 ${77 + index * 4} 142 ${y}H${x}`, "none", wireColors[index], 2) +
    (showLabels ? label(177, y, name, 7, "#344450", "start") : "")
  ).join("");
  return cable +
    rect(13, 45, 110, 6, 2, shell, shade) +
    path("M28 93V40Q28 33 34 33H62V29H73V26Q73 22 78 22H100Q109 22 109 32V93Z", shell, shade, 1.4) +
    rect(28, 90, 81, 8, 2, shade) +
    line(30, 43, 106, 43, highlight) + line(30, 87, 106, 87, highlight) +
    rect(82, 14, 16, 10, 2, spline, shade) +
    [85, 89, 93, 97].map(x => line(x, 16, x, 22, shade, 0.6)).join("") +
    circle(18, 48, 2.2, shade, highlight) + circle(119, 48, 2.2, shade, highlight) +
    rect(35, 51, 68, 29, 2, sticker, highlight) +
    label(69, 59, "TOWER PRO", 6.7, "#edeffa") + label(69, 71, shortName, 11, "#fff5dc") +
    rect(107, 74, 8, 15, 1, shade) +
    rect(153, 39, 20, 48, 2, "#262a2f", "#535963") +
    pins.map(({ y }) => rect(167, y - 2.2, 6, 4.4, 0.6, "#bba16b", "#111820")).join("");
}

const pwmServoArt = {
  [sg90.id]: (part, showLabels) => servoArt(part, showLabels, ["#226eb4", "#5594d2", "#164275", "#353322", "#ede8d6"]),
  [mg90s.id]: (part, showLabels) => servoArt(part, showLabels, ["#30343a", "#5d606a", "#181d23", "#483770", "#c2c5c7"]),
};

const servoHeader = {
  body: [8, 2.54],
  inline: true,
  drill: 1,
  size: 1.8,
  note: "Off-board servo lead. This footprint represents the mating 2.54 mm host header in top view, numbered from the brown lead. Match the wires to their functions.",
  color: "#252a31",
  details: [[0, 0, 7.62, 2.54, 2.4, "#30353c"]],
};

const pwmServoFootprints = { [sg90.id]: servoHeader, [mg90s.id]: servoHeader };

export default defineFamily("pwm-servos", (pwmServoComponents).map(component => ({ component, render: (pwmServoArt)[component.art], footprint: (pwmServoFootprints)[component.id] })));
