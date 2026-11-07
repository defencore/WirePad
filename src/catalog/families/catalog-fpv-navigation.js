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
  width, height,
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
  ],
};

function drawGnss({ pins }, showLabels) {
  const colors = ["#5b5c5d", "#bfc3bd", "#6baa80", "#70a8ce", "#dfc961", "#cc6762"];
  const cables = pins.slice(0, 6).map(({ x, y, label: name }, index) => {
    const contactX = 54 + index * 13;
    return line(contactX, 127, contactX, 139, "#c2ac76", 2.4) +
      path(`M${contactX} 139V143L${x} 157V${y}`, "none", colors[index], 1.7) +
      (showLabels ? label(x, 153, name, 7.6, "#344450") : "");
  }).join("");
  const service = showLabels ? pins.slice(6).map(({ x, label: name }) =>
    line(x, 0, x, 6, "#a48051", 1.3) + circle(x, 6, 2.5, "#d6ad69") +
    label(x, 14, name, 7.6, "#344450")
  ).join("") : "";
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
