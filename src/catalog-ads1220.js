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

export function drawAds1220(component, { board, rect, circle, line, path, label, smd }) {
  const trace = "#77528e";
  const contacts = Array.from({ length: 8 }, (_, index) => {
    const x = 70 + index * 5;
    return line(x, 51, x, 58, "#c2becb", 2.6) + line(x, 105, x, 112, "#c2becb", 2.6);
  }).join("");
  const passives = [
    [66, 23, "#cbba94"], [88, 23, "#cbba94"], [85, 12, "#36333d"],
    [52, 50, "#36333d"], [52, 70, "#36333d"], [52, 90, "#36333d"], [52, 110, "#36333d"],
    [86, 132, "#36333d"],
  ].map(([x, y, color]) => smd(x, y, color)).join("");
  return board(component.width, component.height, "#56326d", "#785992") +
    path("M38 17H56L71 36H83V52M42 35H54L65 45H77V52M45 53H59L70 63M37 125H62L71 112", "none", trace, 1.4) +
    path("M133 17H111L103 34H98V51M131 35H117L109 47H104V51M129 53H119L109 64M130 108H119L110 97M136 125H113L105 112", "none", trace, 1.4) +
    contacts + rect(63, 56, 49, 51, 3, "#26232c", "#8a818f") +
    rect(66, 59, 43, 45, 2, "#34313a") + circle(68.5, 62, 1.3, "#9a939e") +
    label(87.5, 80, "ADS1220", 8, "#e4d9ea") + label(87.5, 94, "24-BIT", 6.5, "#bfb2c6") + passives;
}
