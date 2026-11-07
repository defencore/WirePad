import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { chip, circle, label, line, pad, pinRow, rect, smd } from "../shared/svg.js";

const width = 418;
const height = 202;
const left = [
  ["vdd-8700", "VDD_8700", "FXOS8700C sensor supply, 1.95–3.6 V.", "power_in", "J1.1"],
  ["rst-8700", "RST_8700", "FXOS8700C reset input, active high.", "input", "J1.2"],
  ["vddio-8700", "VDDIO_8700", "FXOS8700C digital interface supply, 1.62–3.6 V.", "power_in", "J1.3"],
  ["scl", "SCL1", "Shared I²C clock or SPI clock input.", "input", "J1.4"],
  ["sda", "SDA1", "Shared I²C data or SPI MOSI input, according to interface configuration.", "bidirectional", "J1.5"],
  ["sa-21002", "SA_21002", "FXAS21002C I²C address select or SPI MISO output.", "bidirectional", "J1.6"],
  ["vdd-21002", "VDD_21002", "FXAS21002C gyroscope supply, 2.0–3.6 V.", "power_in", "J1.7"],
  ["cs-21002", "SPI_CSB_21002", "FXAS21002C SPI chip select, active low. Hold high for I²C.", "input", "J1.8"],
  ["vddio-21002", "VDDIO_21002", "FXAS21002C digital interface supply, 1.62–3.6 V.", "power_in", "J1.9"],
];
const right = [
  ["int1-8700", "INT1_8700", "FXOS8700C configurable interrupt 1.", "output", "J2.1"],
  ["sa1-8700", "SA1_8700", "FXOS8700C I²C address select or active-low SPI chip select.", "input", "J2.2"],
  ["int2-8700", "INT2_8700", "FXOS8700C configurable interrupt 2.", "output", "J2.3"],
  ["sa0-8700", "SA0_8700", "FXOS8700C I²C address select or SPI MISO output.", "bidirectional", "J2.4"],
  ["gnd", "GND", "Common sensor and interface ground.", "power_in", "J2.5"],
  ["dnc", "DNC", "Manufacturer DNC position. Leave unconnected.", "no_connect", "J2.6"],
  ["rst-21002", "RST_21002", "Active-low FXAS21002C reset. The onboard inverter also drives FXOS8700C reset.", "input", "J2.7"],
  ["int1-21002", "INT1_21002", "FXAS21002C configurable interrupt 1.", "output", "J2.8"],
  ["int2-21002", "INT2_21002", "FXAS21002C configurable interrupt 2.", "output", "J2.9"],
];

const imu = physicalComponent({
  id: "nxp-brkt-stbc-agm01", art: "nxp-brkt-stbc-agm01",
  name: "NXP BRKT-STBC-AGM01 9-Axis Sensor Breakout", shortName: "BRKT-STBC-AGM01",
  manufacturer: "NXP", category: "Sensors", referencePrefix: "U",
  subtitle: "Rev C / FXOS8700C and FXAS21002C",
  description: "Sensor Toolbox Rev C breakout with accelerometer, magnetometer and gyroscope. The two nine-contact headers expose separate sensor and I/O supply rails. Select I²C or SPI using the board configuration links.",
  source: "https://www.nxp.com/docs/en/supporting-information/BRKT-STBC-AGM01-QRC.pdf",
  tags: ["nxp", "freescale", "imu", "9 axis", "gyroscope", "accelerometer", "magnetometer", "i2c", "spi", "sensor toolbox"],
  width, height,
  pins: [...pinRow("left", width, height, 25, 19, left), ...pinRow("right", width, height, 25, 19, right)],
}, pin => [pin.x === 0 ? 126 : 292, pin.y]);

function drawImu({ pins }, showLabels) {
  const contacts = pins.map(pin => {
    const onLeft = pin.edge === "left";
    const holeX = onLeft ? 126 : 292;
    const captionX = holeX + (onLeft ? 13 : -13);
    return pad(holeX, pin.y) + rect(holeX + (onLeft ? 8 : -12), pin.y - 2.2, 4, 4.4, 0.5, "#d1ad65") +
      (showLabels ? label(captionX, pin.y, pin.label, 7.5, "#34475a", onLeft ? "start" : "end") : "");
  }).join("");
  const passives = [147, 258].flatMap(x => Array.from({ length: 9 }, (_, index) =>
    smd(x, 23 + index * 18, index % 2 ? "#aaa394" : "#9b8d73")
  )).join("");
  return rect(116, 12, 186, 179, 5, "#ba591f", "#df9557") +
    rect(120, 16, 178, 171, 2, "none", "#ecaa6e") +
    line(144, 75, 175, 65, "#df884b", 1.2) + line(241, 74, 221, 66, "#df884b", 1.2) +
    line(169, 145, 180, 143, "#df884b", 1.2) +
    chip(188, 37, 27, 27, "", 4) + chip(187, 133, 34, 34, "", 5) +
    chip(203, 84, 13, 14, "", 2) + passives +
    circle(243, 93, 6, "#d8ae63", "#ead6a6") + circle(243, 93, 2.2, "#9e591f") +
    label(205, 23, "FXOS8700C", 6.9) + label(205, 122, "FXAS21002C", 6.8) +
    label(208, 179, "BRKT-STBC-AGM01", 6.2) + contacts;
}

const nxpReadyComponents = [imu];
const nxpReadyArt = { [imu.id]: drawImu };
const nxpReadyFootprints = {
  [imu.id]: {
    body: [28, 24], color: "#bd652d", drill: 1, size: 1.7,
    note: "Reference carrier for the Rev C breakout, including the adjacent test pads under each header terminal number. Header contact numbers follow the NXP quick-reference card. Pitch is 2.54 mm. Row separation, test-pad positions and board outline are approximate and require measurement.",
    groups: [
      { ids: left.map(([id]) => id), x: -12.7, y: -10.16, axis: "y" },
      { ids: right.map(([id]) => id), x: 12.7, y: -10.16, axis: "y" },
      { ids: left.map(([id]) => id), x: -10.16, y: -10.16, axis: "y", smd: true, size: [0.8, 1.2] },
      { ids: right.map(([id]) => id), x: 10.16, y: -10.16, axis: "y", smd: true, size: [0.8, 1.2] },
    ],
    details: [[0, -6, 3, 3, 1.2, "#242a31"], [0, 6, 4, 4, 1, "#242a31"]],
  },
};
const nxpReadyModels = {
  [imu.id]: {
    label: "NXP Sensor Toolbox schematics and PCB design files",
    url: "https://www.nxp.com/design/design-center/development-boards-and-designs/FRDM-STBC-AGM01",
  },
};

export default defineFamily("nxp-ready", (nxpReadyComponents).map(component => ({ component, render: (nxpReadyArt)[component.art], footprint: (nxpReadyFootprints)[component.id], model: nxpReadyModels[component.id] })));
