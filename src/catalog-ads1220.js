import { circle, label, line, path, rect } from "./catalog-extension.js";

const width = 176;
const height = 160;

function header(side, terminals) {
  const left = side === "J1";
  return terminals.map(([id, label, description, type], index) => ({
    id, label, description, type, number: `${side}.${index + 1}`,
    x: left ? 0 : width, y: 17 + index * 18,
  }));
}

export const ads1220 = {
  id: "ads1220", name: "ADS1220 24-bit ADC Breakout", shortName: "ADS1220", category: "ADC",
  description: "Purple CJMCU-1220-style breakout for the Texas Instruments ADS1220 precision ADC. It exposes four analog inputs, an external reference, SPI, and analog and digital supply pins. Fitted 0 Ω links may join the supply rails and grounds.",
  manufacturer: "Generic breakout", subtitle: "4-channel SPI ADC / PGA", tags: ["cjmcu", "cjmcu-1220", "adc", "analog", "spi", "pga", "rtd", "thermocouple"],
  source: "https://www.ti.com/lit/ds/symlink/ads1220.pdf",
  width, height, art: "ads1220", referencePrefix: "U",
  pins: [
    ...header("J1", [
      ["drdy", "DRDY", "Active-low conversion-ready output. Connect to a host GPIO if needed.", "output"],
      ["miso", "MISO", "SPI data output from the ADS1220 (DOUT/DRDY). High-impedance while CS is high.", "tri_state"],
      ["mosi", "MOSI", "SPI data input to the ADS1220 (DIN). Connect to the host SPI data output.", "input"],
      ["sclk", "SCLK", "SPI serial clock from the host. Use SPI mode 1 (CPOL 0, CPHA 1).", "input"],
      ["cs", "CS", "Active-low SPI chip select. May be tied to DGND on a dedicated SPI bus.", "input"],
      ["clk", "CLK", "External converter clock input. Connect to DGND to use the internal oscillator.", "input"],
      ["dvdd", "DVDD", "Digital supply for the SPI logic. Use 3.3 V with an ESP32. A fitted 0 Ω link may connect DVDD to AVDD.", "power_in"],
      ["dgnd", "DGND", "Digital supply return and SPI signal reference. A fitted 0 Ω link may connect DGND to AGND.", "power_in"],
    ]),
    ...header("J2", [
      ["ain0", "AIN0", "Analog input 0 or positive input for external reference 1 (REFP1).", "input"],
      ["ain1", "AIN1", "Analog input 1.", "input"],
      ["ain2", "AIN2", "Analog input 2.", "input"],
      ["ain3", "AIN3", "Analog input 3 or negative input for external reference 1 (REFN1).", "input"],
      ["refn0", "REFN0", "Negative input for external reference 0.", "input"],
      ["refp0", "REFP0", "Positive input for external reference 0.", "input"],
      ["avdd", "AVDD", "Positive analog supply, referenced to AGND. Check the 0 Ω link to DVDD before applying different voltages.", "power_in"],
      ["agnd", "AGND", "Analog supply return (AVSS). Check the 0 Ω link to DGND before using a separate return.", "power_in"],
    ]),
  ],
};

export const ads1220Footprint = {
  body: [22, 21], rows: 17.78, pitch: 2.54, drill: 1, size: 1.7, color: "#56326d",
  details: [[0, 0, 4.4, 5, 1.2, "#273041"]],
  note: "Reference carrier for the pictured ADS1220 breakout. Board outline and header row spacing are approximate. Measure your module and verify the header order before fabrication.",
};

function passive(x, y, bodyWidth, bodyHeight, fill, marking = "") {
  return rect(x, y, bodyWidth, bodyHeight, 0.7, "#b3afb8", "#ddd6df") +
    rect(x + 4, y + 0.7, bodyWidth - 8, bodyHeight - 1.4, 0.5, fill) +
    (marking ? label(x + bodyWidth / 2, y + bodyHeight / 2, marking, 5.5, "#f0ebed") : "");
}

function headerPad(pin, showLabels) {
  const left = pin.x === 0;
  const x = left ? 15 : width - 15;
  const textX = left ? 28 : width - 28;
  const overbar = pin.id === "drdy" || pin.id === "cs"
    ? line(28, pin.y - 5.2, pin.id === "cs" ? 38 : 48, pin.y - 5.2, "#f5eaf6", 0.8)
    : "";
  return line(pin.x, pin.y, x, pin.y, "#bdb9c5", 1.4) +
    rect(x - 11, pin.y - 7.1, 22, 14.2, 6.4, "#b2aeb7", "#d3cbd7") +
    circle(x, pin.y, 5.25, "#2c1938", "#ede9eb") +
    (showLabels ? label(textX, pin.y, pin.label, 8.1, "#f5eaf6", left ? "start" : "end") + overbar : "");
}

export function drawAds1220({ pins }, showLabels = true) {
  const contacts = Array.from({ length: 8 }, (_, index) => {
    const x = 73 + index * 4.2;
    return line(x, 56, x, 65, "#c2becb", 2.5) + line(x, 102, x, 111, "#c2becb", 2.5);
  }).join("");
  const passives = passive(62, 26, 22, 10, "#c7b594") + passive(93, 26, 22, 10, "#c7b594") +
    passive(78, 10, 22, 10, "#29252b", "0") + passive(79, 126, 23, 10, "#29252b", "0") +
    [52, 76, 100, 125].map((y, index) =>
      `<g transform="translate(59 ${y}) rotate(90)">${passive(-10, -4.2, 20, 8.4, "#332d36", ["121", "121", "202", "103"][index])}</g>`
    ).join("");
  const vias = [[67, 15], [52, 24], [47, 58], [48, 87], [48, 116], [37, 135], [79, 148], [83, 123],
    [112, 64], [117, 84], [133, 102], [144, 102], [120, 128], [120, 144]].map(([x, y]) =>
    circle(x, y, 2.2, "#b79bc2") + circle(x, y, 1.05, "#402950")
  ).join("");
  return rect(3, 5, width - 6, height - 10, 0.7, "#613b73", "#a48ab0") +
    path("M16 17H44L51 24H67L81 38V57M16 35H54L76 56M16 53H46L68 75M16 71H46L69 96M16 107H45L65 121L79 109M16 125H40L57 142H69L90 120V107", "none", "#432756", 2) +
    path("M161 17H133L113 38H105L98 57M161 35H136L118 50H108L103 57M161 53H131L111 66M161 71H136L110 91M161 89H137L111 103M161 107H130L109 116H101V108M161 143H115L101 131", "none", "#432756", 2) +
    path("M87 20V57M95 21V57M90 112V128M95 111V129M86 135V153M96 135V153", "none", "#825393", 2.1) +
    vias + contacts + rect(68, 62, 40, 44, 2, "#26242d", "#847789") +
    rect(70, 64, 36, 40, 1, "#38343d") + circle(73.2, 67.2, 1.3, "#8d8691") +
    label(88, 77, "ADS1220", 7.6, "#beb2c5") + label(88, 86, "46K64", 6.4, "#aca1b5") +
    label(88, 95, "C296", 6.4, "#aca1b5") + passives +
    pins.map(pin => headerPad(pin, showLabels)).join("");
}
