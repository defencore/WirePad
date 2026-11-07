import { defineFamily } from "../registry.js";
import { circle, label, line, path, pinRow, rect } from "../shared/svg.js";

const width = 174;
const height = 171;

const gnss = {
  id: "matek-m10q-5883", art: "matek-m10q-5883",
  name: "Matek M10Q-5883 GNSS and Compass", shortName: "M10Q-5883",
  manufacturer: "MATEKSYS", category: "Sensors", referencePrefix: "U",
  subtitle: "u-blox M10 GNSS / UART and I²C",
  description: "M10Q-5883 V2 with a 15 mm ceramic patch antenna and a QMC5883L compass. The two JST GH sockets expose the same signals. The canvas shows one set of shared connections and the underside service pads.",
  tags: ["fpv", "gps", "gnss", "u-blox", "compass", "magnetometer", "uart", "i2c", "jst gh", "inav"],
  source: "https://www.mateksys.com/?portfolio=m10q-5883",
  width, height, contactLayout: "physical",
  pins: [
    // Viewed from the antenna side, the inverted socket puts pin 1 on the right.
    ...pinRow("bottom", width, height, 22, 26, [
      ["gnd", "G", "Supply and data ground. Also accessible at the underside G service pad.", "power_in", "6"],
      ["sda", "DA", "I²C data for the compass.", "bidirectional", "5"],
      ["scl", "CL", "I²C clock for the compass.", "input", "4"],
      ["tx", "TX", "GNSS UART transmit output. Connect to the flight controller RX.", "output", "3"],
      ["rx", "RX", "GNSS UART receive input. Connect to the flight controller TX.", "input", "2"],
      ["vcc", "5V", "4–9 V supply input. The board silk marks it 5V.", "power_in", "1"],
    ]),
    ...pinRow("top", width, height, 43, 88, [
      ["3v3", "3.3", "Underside 3.3 V service test point.", "passive", "TP.1"],
      ["rst", "RST", "Underside service pad. Pull low for at least 100 ms at power-up to cold-start the GNSS receiver.", "input", "TP.2"],
    ]),
  ].map((pin, index) => ({ ...pin, surface: true, symbolPlacement: { side: pin.x <= width / 2 ? "left" : "right", order: pin.y * 1000 + pin.x },
    ...(index < 6 ? { x: 54 + index * 13, y: 133 } :
      pin.id === "3v3" ? { x: 17, y: 80 } : { x: 28, y: 77 }),
  })),
};

function drawGnss({ pins }, showLabels) {
  const cables = pins.slice(0, 6).map(({ x, y, label: name }, index) =>
    line(x, 127, x, 139, "#c2ac76", 2.4) +
    (showLabels ? label(x, 148, name, 7, "#344450") : "")
  ).join("");
  const service = rect(2, 54, 32, 32, 3, "#204e82", "#6c94bc") +
    rect(5, 55, 25, 5, .6, "#e4dfcd") + rect(5, 73, 19, 5, .6, "#e4dfcd") +
    circle(12, 68, 5, "#bdbdab", "#e2dfc5") +
    label(18, 47, "BACK", 5.6, "#344450") + pins.slice(6).map(pin =>
      circle(pin.x, pin.y, 2.5, "#d6ad69") +
      (showLabels ? label(pin.x, pin.id === "3v3" ? 93 : 68, pin.label, 4.8, "#344450") : "")
    ).join("");
  return rect(47, 23, 80, 15, 1.8, "#c5bfac", "#aca792") +
    rect(47, 111, 80, 29, 2, "#e4dfcd", "#bcb5a2") +
    rect(50, 127, 74, 11, 1.4, "#7a705e", "#d7d0bc") + cables +
    rect(38, 27, 98, 98, 12, "#204e82", "#6c94bc") +
    rect(50, 35, 74, 74, 5, "#aa7849", "#ecd6ab") +
    path("M57 53L68 42H116V101H57Z", "#e2d8b6", "#a99e89") +
    rect(72, 55, 36, 31, 2, "#f5efe2", "#c9c1a8") +
    label(90, 65, "u-blox", 6.4, "#4d5260") + label(90, 76, "M10Q", 8, "#4d5260") +
    label(87, 117, "MATEKSYS", 8, "#e4e6ea") + circle(130, 93, 2.1, "#7fc497", "#deeed7") +
    service;
}

const fpvNavigationComponents = [gnss];
const fpvNavigationArt = { [gnss.id]: drawGnss };
const fpvNavigationFootprints = {
  [gnss.id]: {
    body: [18, 7], color: "#244d7e", size: 1.6, drill: 0.85,
    note: "Off-board wire termination strip, with contact numbers matching one JST GH socket and two separate service pads. Use the JST SM06B-GHS-TB land pattern for a PCB-mounted socket.",
    groups: [{ ids: ["gnd", "sda", "scl", "tx", "rx", "vcc"], x: -6.35, y: 1.27 }],
    pads: [{ id: "3v3", x: -2.54, y: -1.27 }, { id: "rst", x: 2.54, y: -1.27 }],
  },
};
const fpvNavigationModels = {
  [gnss.id]: { label: "MATEKSYS M10Q-5883 STEP archive", url: "https://www.mateksys.com/Downloads/other/M10Q-5883_step.zip" },
};

export default defineFamily("fpv-navigation", (fpvNavigationComponents).map(component => ({ component, render: (fpvNavigationArt)[component.art], footprint: (fpvNavigationFootprints)[component.id], model: fpvNavigationModels[component.id] })));
