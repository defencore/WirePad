import { defineFamily } from "../registry.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { analogDevicesLayouts } from "../data/analog-devices-layouts.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { circle, label, line, rect, screw } from "../shared/svg.js";

const scale = 7;
const margin = 14;
const silk = "#f0f0df";
const gold = "#d4b675";
const gnd = ["GND", "Common power and signal ground.", "power_in"];
const vin = ["VIN", "3.3–5 V board supply and host logic reference.", "power_in"];
const scl = ["SCL", "I²C clock input, pulled up to the board supply.", "input"];
const sda = ["SDA", "Bidirectional I²C data, pulled up to the board supply.", "bidirectional"];
const v3 = ["3Vo", "Regulated 3.3 V output; do not drive it while VIN is powered.", "power_out"];
const clock = ["CLK", "SPI clock input from the host.", "input"];
const select = ["CS", "Active-low SPI chip-select input.", "input"];
const input = (name, description) => [name, description, "input"];
const output = (name, description) => [name, description, "output"];

function deviceArt(part, point) {
  const [x, y] = point(part.x, part.y);
  const w = part.width * scale, h = part.height * scale;
  const box = (fill, stroke = "none", radius = 1) => rect(x - w / 2, y - h / 2, w, h, radius, fill, stroke);
  if (part.kind === "qt") {
    const outer = part.face === "right" ? x + w / 2 - 3 : x - w / 2;
    return box("#e6ddc7", "#fbf3dc", 1.7) + rect(outer, y - h / 2 + 3, 3, h - 6, 0.4, "#5d594e");
  }
  if (part.kind === "jack") {
    return box("#20252c", "#66717b", 2) + rect(x - w / 2 + 3, y - h / 2, w - 6, 5, 1, "#0f151a", "#939b9a");
  }
  if (part.kind === "terminal") return box("#57a18b", "#acd8ba", 2) + line(x - w / 2, y - 8, x + w / 2, y - 8, "#2d7462");
  if (part.kind === "optional") return box("none", "#b4c4b3", 0.5) + label(x, y + h / 2 - 3, "optional", 5.5, silk);
  if (part.kind === "chip") {
    const vertical = part.leadAxis === "y";
    const across = vertical ? h : w, along = vertical ? w : h;
    const leadLength = /LGA|QFN|LFCSP/.test(part.package ?? "") ? .5 : 2;
    const leads = Array.from({ length: w > 20 ? 5 : 3 }, (_, i) => {
      const offset = -along / 2 + 3 + i * (along - 6) / (w > 20 ? 4 : 2);
      return vertical
        ? line(x + offset, y - across / 2 - leadLength, x + offset, y - across / 2 + 1, "#b5bdb8", 1.7) +
          line(x + offset, y + across / 2 - 1, x + offset, y + across / 2 + leadLength, "#b5bdb8", 1.7)
        : line(x - across / 2 - leadLength, y + offset, x - across / 2 + 1, y + offset, "#b5bdb8", 1.7) +
          line(x + across / 2 - 1, y + offset, x + across / 2 + leadLength, y + offset, "#b5bdb8", 1.7);
    }).join("");
    return leads + box("#252c31", "#84908d", 1.3) + circle(x - w / 2 + 3, y - h / 2 + 3, 1, "#a1aca3");
  }
  const fill = part.kind === "capacitor" ? "#ad9771" : part.kind === "led" ? "#8fb568" : "#303638";
  return box("#b8c0b9", "none", 0.5) + rect(x - w * 0.32, y - h * 0.32, w * 0.64, h * 0.64, 0.3, fill);
}

function breakout({ key, id, name, shortName, category = "Sensors", source, description, subtitle, tags, color, nets, captions = {}, cad, title, optionalTerminal = false, maker = "Adafruit", note = "", padding = margin, insertionHeaders }) {
  const layout = analogDevicesLayouts[key];
  const [bw, bh] = layout.body;
  const width = bw * scale + padding * 2, height = bh * scale + padding * 2;
  const point = (x, y) => [width / 2 + x * scale, height / 2 + y * scale];
  const contacts = layout.contacts.map(pad => {
    const spec = nets[pad.net];
    if (!spec) throw new Error(`Missing ${key} contact definition for ${pad.number}/${pad.net}.`);
    const [defaultCaption, description, type] = spec;
    const caption = captions[pad.number] ?? defaultCaption;
    const edge = pad.numeric || pad.number.startsWith("JP2.") && key === "ad8232"
      ? pad.x < 0 ? "left" : "right" : pad.y < 0 ? "top" : "bottom";
    const [x, y] = point(pad.x, pad.y);
    return { ...pad, pin: { id: pad.id, number: pad.number, label: caption, description: `${pad.number} — ${description}`, type, x, y, edge, surface: true } };
  });
  const connections = new Map();
  for (const contact of contacts) {
    if (!connections.has(contact.net)) connections.set(contact.net, []);
    connections.get(contact.net).push(contact.id);
  }
  const component = physicalComponent({
    id, name, shortName, category, source, description, subtitle,
    tags: ["analog devices", "adi", "breakout", ...tags], manufacturer: maker,
    referencePrefix: "U", art: id, width, height, contactLayout: "physical",
    pins: contacts.map(({ pin }) => pin),
    internalConnections: [...connections.values()].filter(group => group.length > 1),
  }, contacts.map(({ pin }) => ({ x: pin.x, y: pin.y, edge: pin.edge })));
  const parts = layout.parts.map(part => optionalTerminal && part.kind === "terminal" ? { ...part, kind: "optional" } : part);
  const artworkPad = (pad, isRepeat = false) => {
    const [x, y] = point(pad.x, pad.y);
    if (pad.smd) return rect(x - pad.padWidth * scale / 2, y - pad.padHeight * scale / 2,
      pad.padWidth * scale, pad.padHeight * scale, .4, isRepeat ? "#aeb8af" : gold, "#eadbc0");
    if (!optionalTerminal && /^(X[12]|J1)\./.test(pad.number)) return screw(x, y, 6);
    return circle(x, y, pad.size * scale / 2, gold, "#e5d29f") +
      circle(x, y, pad.drill * scale / 2, "#243b3b", "#8d865f");
  };
  const padSpec = pad => ({
    id: pad.id, x: pad.x, y: pad.y,
    ...(pad.smd ? { smd: true, size: [pad.padWidth, pad.padHeight], shape: "rect" } : { drill: pad.drill, size: pad.size, shape: "circle" }),
  });
  const entry = {
    component,
    render: (_component, showLabels) => rect(padding, padding + 2, bw * scale, bh * scale, 2.54 * scale, "#1d2b33") +
      rect(padding, padding, bw * scale, bh * scale, key === "ad8232" ? 1 : 2.54 * scale, color, "#92a699") +
      layout.mounts.map(([mx, my, drill]) => {
        const [x, y] = point(mx, my);
        return circle(x, y, (drill + .7) * scale / 2, gold) + circle(x, y, drill * scale / 2, "#253640");
      }).join("") + parts.map(part => deviceArt(part, point)).join("") +
      layout.markings.map(mark => mark.kind === "line" ? line(...point(...mark.from), ...point(...mark.to), silk, 1.2)
        : mark.kind === "circle" ? circle(...point(...mark.center), mark.radius * scale, mark.radius < .1 ? silk : "none", silk)
          : label(...point(...mark.center), mark.text, 5.5, silk)).join("") +
      label(...point(title[0], title[1]), shortName, title[2] ?? 10, silk) +
      contacts.map(pad => artworkPad(pad)).join("") + layout.repeated.map(pad => artworkPad(pad, true)).join("") +
      (showLabels ? contacts.map(pad => {
        const { pin } = pad;
        if (pad.numeric) return label(pin.x, pin.y, pin.number.split(".").at(-1), 5.3, "#46391f");
        if (key === "ad8232" && pin.number.startsWith("JP1.")) return label(pin.x + 10, pin.y, pin.label, 7.2, silk, "start");
        if (key === "ad8232" && pin.number.startsWith("JP2.")) return label(pin.x + (pin.x < width / 2 ? -10 : 10), pin.y,
          pin.label, 6.3, silk, pin.x < width / 2 ? "end" : "start");
        if (key === "ad8232" && pin.number.startsWith("JP3.")) return `<g transform="rotate(-90 ${pin.x} ${pin.y - 10})">` +
          label(pin.x, pin.y - 10, pin.label, 7, silk, "start") + "</g>";
        const optional = optionalTerminal && pin.number.startsWith("X1.");
        return label(pin.x, pin.y + (optional ? 13 : pin.edge === "top" ? -10 : 11), pin.label, 7, silk);
      }).join("") : ""),
    footprint: {
      body: layout.body, color, modelHeight: 1.6,
      pads: [...layout.contacts.map(padSpec), ...layout.repeated.map(padSpec)],
      details: parts.filter(part => part.kind !== "optional").map(part => [part.x, part.y, part.width, part.height,
        part.kind === "qt" ? 2.9 : part.kind === "terminal" ? 7 : part.kind === "jack" ? 6 : 1.1,
        part.kind === "qt" ? "#e6ddc7" : part.kind === "terminal" ? "#57a18b" : "#252c31"]),
      note: `Component-side electrical-contact reference from ${maker}'s published PCB CAD; board revision ${layout.revision ?? (key === "ad8232" ? "v1.0" : "v2 CAD file, unmarked")}. Header holes and connector solder tails use their native coordinates. ${layout.repeated.length ? "Grounded JST retaining tabs repeat terminal 1. " : ""}${note} Mounting holes are visual only. This is a reference module/contact pattern; the generated 3D body is approximate.`,
    },
    model: cad,
  };
  const bodyRegions = [{ x: padding, y: padding, width: bw * scale, height: bh * scale },
    ...parts.filter(part => part.kind !== "optional").map(part => ({
      x: width / 2 + (part.x - part.width / 2) * scale,
      y: height / 2 + (part.y - part.height / 2) * scale,
      width: part.width * scale, height: part.height * scale,
    }))];
  const x = Math.min(...bodyRegions.map(region => region.x)), y = Math.min(...bodyRegions.map(region => region.y));
  const viewBounds = { x: x - .5, y: y - .5,
    width: Math.max(...bodyRegions.map(region => region.x + region.width)) - x + 1,
    height: Math.max(...bodyRegions.map(region => region.y + region.height)) - y + 1 };
  entry.mounting = reviewedBoardMounting({
    source: { label: `${maker} ${shortName} ${layout.revision ?? "cited"} PCB CAD header centers`, url: cad.url },
    contacts: layout.contacts.filter(pad => insertionHeaders.includes(pad.number.split(".")[0]))
      .map(({ id: pinId, x, y }) => ({ pinId, x, y })),
    calibration: { origin: { x: width / 2, y: height / 2 }, unitsPerMm: scale },
    bodyRegions, bodyEvidence: "Source-reviewed manufacturer PCB envelope and individual projecting package bounds from the adjacent millimeter CAD layout. Captions and empty annotation space are excluded.",
    viewBounds, renderMounted: part => clippedFrontArtwork(entry.render, part, viewBounds),
    note: `Insert every lead of ${insertionHeaders.join(" and ")}. Leave all other optional header holes unpopulated or fit their headers upward; QT sockets, screw terminals, electrode contacts and service pads do not enter breadboard holes.`,
  });
  return entry;
}

const accelerationNets = {
  VCC: vin, "3.3V": v3, GND: gnd,
  SCL: ["SCL", "Level-shifted I²C clock / SPI SCLK input, referenced to VIN.", "input"],
  "SDA/SDIO": ["SDA", "Level-shifted bidirectional I²C data / SPI data input, referenced to VIN.", "bidirectional"],
  INT1: output("INT", "Interrupt 1 output at the sensor's 3.3 V logic level."),
  INT2: output("I2", "Interrupt 2 output at the sensor's 3.3 V logic level."),
  SDO: ["SDO", "3.3 V SPI MISO output / I²C address selection. Low: 0x53, high: 0x1D. Not 5 V tolerant.", "bidirectional"],
  CS: input("CS", "3.3 V chip select / interface mode control. High selects I²C; low selects SPI. Not 5 V tolerant."),
};

export default defineFamily("analog-devices", [
  breakout({
    key: "ad5693r", insertionHeaders: ["JP1", "JP2", "JP3"], id: "adafruit-ad5693r-5811", name: "Adafruit AD5693R 16-bit DAC Breakout", shortName: "AD5693R", category: "DAC",
    source: "https://learn.adafruit.com/adafruit-ad5693r-16-bit-dac-breakout-board/pinouts",
    description: "Adafruit #5811 Rev B STEMMA QT board with an Analog Devices AD5693R in MSOP-10. Single 16-bit DAC with a 2.5 V internal reference and selectable 1×/2× gain; the output remains limited by the supply. I²C address 0x4C or 0x4E. Includes every header, optional terminal and QT solder-tail contact in component-side view.",
    subtitle: "I²C / 16-bit DAC / 2.5 V reference", tags: ["ad5693r", "5811", "dac", "16-bit", "i2c", "stemma qt", "qwiic", "voltage reference"],
    color: "#2b3031", title: [-.1905, -.4445, 10], optionalTerminal: true,
    captions: { "X1.1": "−" },
    nets: { VCC: vin, GND: gnd, SCL: scl, SDA: sda, A0: input("A0", "I²C address input: low selects 0x4C; high selects 0x4E."),
      "!LDAC": input("LDAC", "Active-low asynchronous DAC output-update input."), VOUT: output("+", "Buffered DAC voltage output; also available at JP2.1 and optional terminal X1.2."),
      VREF: ["VREF", "Internal 2.5 V reference output when enabled; external reference input when the internal reference is disabled.", "bidirectional"] },
    cad: { label: "Adafruit AD5693R Rev B Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit-AD5693R-Breakout-Board-PCB/blob/main/Adafruit%20AD5693R%20Breakout%20Board.brd" },
    note: "X1 is an unpopulated optional 3.5 mm terminal footprint. ",
  }),
  breakout({
    key: "adg728", insertionHeaders: ["JP3"], id: "adafruit-adg728-5899", name: "Adafruit ADG728 1-to-8 Analog Matrix Switch", shortName: "ADG728", category: "Interfaces",
    source: "https://learn.adafruit.com/adafruit-adg728-1-to-8-analog-matrix-switch/pinouts",
    description: "Adafruit #5899 Rev A STEMMA QT board using the Analog Devices ADG728 in TSSOP-16. Eight independently controlled bidirectional analog switches connect S1–S8 to common D. Signal voltages must stay between ground and VIN. I²C address 0x4C–0x4F; RESET opens every switch. Header numbering follows the published board, including the reversed top row.",
    subtitle: "I²C / eight bidirectional analog switches", tags: ["adg728", "5899", "analog switch", "matrix", "multiplexer", "i2c", "stemma qt", "qwiic"],
    color: "#292f30", title: [.762, -4.318, 10],
    nets: { VCC: ["VIN", "2.7–5.5 V supply and I²C logic reference. Switched signals must remain within GND–VIN.", "power_in"], GND: gnd, SCL: scl, SDA: sda,
      A0: input("A0", "I²C address bit 0; high adds 1 to 0x4C."), A1: input("A1", "I²C address bit 1; high adds 2 to 0x4C."),
      "!RESET": input("RST", "Active-low reset; opens all eight analog switches."),
      D: ["D", "Common bidirectional analog switch terminal. Keep within the board supply rails.", "passive"],
      ...Object.fromEntries(Array.from({ length: 8 }, (_, i) => [`S${i + 1}`, [`S${i + 1}`, `Bidirectional analog switch channel ${i + 1}. Independently connects to common D through I²C control.`, "passive"]])),
    },
    cad: { label: "Adafruit ADG728 Rev A Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit-ADG728-1-to-8-Analog-Matrix-Switch-PCB/blob/main/Adafruit%20ADG728%201-to-8%20Analog%20Matrix%20Switch.brd" },
  }),
  breakout({
    key: "adxl345", insertionHeaders: ["JP1", "JP2"], id: "adafruit-adxl345-1231-qt", name: "Adafruit ADXL345 Triple-axis Accelerometer (QT)", shortName: "ADXL345",
    source: "https://learn.adafruit.com/adxl345-digital-accelerometer/pinouts",
    description: "Adafruit #1231 Rev C STEMMA QT layout for the Analog Devices ADXL345, a 14-lead LGA accelerometer with ±2/4/8/16 g ranges. I²C/SPI and two interrupt outputs. The published PCB reuses the ADXL343 CAD device name; this entry represents the ADXL345 sold as #1231. SCL and SDA are level shifted, while CS, SDO and interrupts remain 3.3 V signals.",
    subtitle: "I²C / SPI / ±2–16 g / Rev C QT", tags: ["adxl345", "1231", "accelerometer", "vibration", "imu", "i2c", "spi", "stemma qt", "qwiic"],
    color: "#272d30", title: [1.397, -4.191, 10], nets: accelerationNets, captions: { "JP2.1": "G" },
    cad: { label: "Adafruit ADXL345 QT Rev C Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit_ADXL345_PCB/blob/master/ADXL345%20STEMMA%20QT.brd" },
  }),
  breakout({
    key: "adxl375", insertionHeaders: ["JP1", "JP2"], id: "adafruit-adxl375-5374", name: "Adafruit ADXL375 High-g Accelerometer", shortName: "ADXL375",
    source: "https://learn.adafruit.com/adafruit-adxl375/pinouts",
    description: "Adafruit #5374 Rev A STEMMA QT board for the Analog Devices ADXL375 ±200 g accelerometer in LGA-14. Supports I²C/SPI and two interrupt outputs. Uses the maker's ADXL343-compatible CAD land pattern. SCL and SDA are level shifted to VIN; CS, SDO and interrupts use the sensor's 3.3 V logic level. Default I²C address 0x53.",
    subtitle: "I²C / SPI / ±200 g / high-impact sensing", tags: ["adxl375", "5374", "accelerometer", "high g", "shock", "impact", "i2c", "spi", "stemma qt", "qwiic"],
    color: "#674389", title: [1.397, -4.191, 10], nets: accelerationNets, captions: { "JP2.1": "G" },
    cad: { label: "Adafruit ADXL375 Rev A Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit_ADXL375_PCB/blob/main/Adafruit%20ADXL375.brd" },
  }),
  breakout({
    key: "adt7410", insertionHeaders: ["JP1"], id: "adafruit-adt7410-4089-qt", name: "Adafruit ADT7410 Precision Temperature Sensor (QT)", shortName: "ADT7410",
    source: "https://learn.adafruit.com/adt7410-breakout/pinouts",
    description: "Adafruit #4089 Rev C STEMMA QT board with an Analog Devices ADT7410 in SOIC-8. Provides 13-bit or 16-bit I²C temperature readings, plus interrupt and critical-temperature outputs. The QT revision exposes VIN, GND, SCL, SDA, INT and CT; A0/A1 are rear solder jumpers. Default address 0x48, configurable through 0x4B.",
    subtitle: "I²C / precision temperature / INT and CT", tags: ["adt7410", "4089", "temperature", "precision", "i2c", "stemma qt", "qwiic"],
    color: "#9e343e", title: [.127, -7.493, 10],
    nets: { VCC: vin, GND: gnd, SCL: scl, SDA: sda,
      INT: ["INT", "Open-drain programmable temperature interrupt output; pulled up to VIN on this breakout.", "open_collector"],
      CT: ["CT", "Open-drain critical-temperature alarm output; pulled up to VIN on this breakout.", "open_collector"] },
    cad: { label: "Adafruit ADT7410 QT Rev C Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit-ADT7410-PCB/blob/master/Adafruit%20ADT7410%20STEMMA%20QT.brd" },
  }),
  breakout({
    key: "max31865", insertionHeaders: ["JP1"], id: "adafruit-max31865-3328", name: "Adafruit MAX31865 PT100 RTD Amplifier", shortName: "MAX31865",
    source: "https://learn.adafruit.com/adafruit-max31865-rtd-pt100-amplifier/pinouts",
    description: "Adafruit #3328 Rev B platinum RTD interface with a Maxim/Analog Devices MAX31865 in TQFN-20 and a 430 Ω reference resistor for PT100 sensors. Supports 2-, 3- and 4-wire RTDs through the documented jumper settings. Includes four physically positioned terminal contacts and the eight-pin SPI host header. The PT1000 #3648 variant uses a different reference resistor.",
    subtitle: "SPI / PT100 RTD / 2-, 3- or 4-wire", tags: ["max31865", "maxim", "3328", "pt100", "rtd", "temperature", "spi", "platinum"],
    color: "#1d719b", title: [-7.112, -2.794, 9], captions: { "JP1.3": "3V3" },
    nets: { VIN: vin, GND: gnd, VDD: v3, SCLK_5V: clock, SDO: output("SDO", "SPI serial data output to the host."),
      SDI_5V: input("SDI", "Level-shifted SPI serial data input from the host."), CS_5V: select,
      DRDY: output("RDY", "Active-low data-ready output at the MAX31865 supply level."),
      "FORCE+": ["F+", "Positive RTD excitation terminal.", "output"], "FORCE-": ["F−", "Negative RTD excitation/return terminal.", "passive"],
      "RTDIN+": input("RTD+", "Positive RTD sense input; jumper to F+ for 2- or 3-wire wiring as documented."),
      "RTDIN-": input("RTD−", "Negative RTD sense input; jumper to F− for 2-wire wiring as documented.") },
    cad: { label: "Adafruit MAX31865 Rev B Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit-MAX31865-PCB/blob/master/Adafruit%20MAX31865.brd" },
    note: "Terminal numbers follow X2 then X1 from left to right in this component-side view. ",
  }),
  breakout({
    key: "max31855", insertionHeaders: ["JP1"], id: "adafruit-max31855-269", name: "Adafruit MAX31855K Thermocouple Amplifier", shortName: "MAX31855K",
    source: "https://learn.adafruit.com/thermocouple?view=all",
    description: "Adafruit #269 v2 CAD layout with a Maxim/Analog Devices MAX31855K in SOIC-8, regulator and input level shifting. Reads a K-type thermocouple over read-only SPI with cold-junction compensation and fault reporting. Do not tie either thermocouple input to board ground; J1.1 is positive and J1.2 is negative. The published v2 board file has no silkscreen revision identifier.",
    subtitle: "SPI / K-type thermocouple / cold junction", tags: ["max31855", "max31855k", "maxim", "269", "thermocouple", "type k", "temperature", "spi"],
    color: "#256b9e", title: [-3.5637, 5.0927, 9],
    nets: { "+5V": vin, "+3V3": v3, GND: gnd, DO: output("DO", "SPI serial data output to the host."), "N$2": select, "N$3": clock,
      "N$5": input("T+", "Positive K-type thermocouple input; yellow under ANSI color coding."),
      "N$1": input("T−", "Negative K-type thermocouple input; red under ANSI color coding. Do not tie it to GND.") },
    cad: { label: "Adafruit MAX31855 v2 Eagle PCB CAD", url: "https://github.com/adafruit/Adafruit-MAX31855-breakout-board/blob/master/Adafruit_MAX31855%20v2.brd" },
  }),
  breakout({
    key: "ad8232", insertionHeaders: ["JP3"], id: "sparkfun-ad8232-sen12650", name: "SparkFun AD8232 Single-lead Heart Rate Monitor", shortName: "AD8232",
    maker: "SparkFun", source: "https://learn.sparkfun.com/tutorials/ad8232-heart-rate-monitor-hookup-guide",
    description: "SparkFun SEN-12650 v1.0 board with an Analog Devices AD8232 in LFCSP-20. Provides an analog biopotential output, two leads-off flags and shutdown control. Electrode pads and the 3.5 mm jack solder tails share RA, LA and RL nets. Intended for battery-powered educational experiments; this board is not a medical diagnostic device.",
    subtitle: "3.3 V / analog biopotential front end", tags: ["ad8232", "sen-12650", "12650", "ecg", "heart rate", "biopotential", "analog", "sparkfun"],
    color: "#a83b3d", title: [7.6, -11.4, 10], padding: 16,
    nets: { GND: gnd, "3.3V": ["3.3V", "Regulated 3.3 V input. This board does not include a 5 V regulator.", "power_in"],
      SIGNAL_OUT: output("OUTPUT", "Filtered and amplified analog biopotential output for the host ADC."),
      "LO-": output("LO−", "Leads-off detection output for the negative input electrode."),
      "LO+": output("LO+", "Leads-off detection output for the positive input electrode."),
      SDN: input("SDN", "Active-low shutdown input, pulled up to 3.3 V."),
      RA: input("RA", "Right-arm electrode input; connected to the 3.5 mm jack sleeve."),
      LA: input("LA", "Left-arm electrode input; connected to the 3.5 mm jack ring."),
      RL: output("RL", "Right-leg driven-reference electrode output; connected to the 3.5 mm jack tip.") },
    cad: { label: "SparkFun AD8232 v1.0 Eagle PCB CAD", url: "https://github.com/sparkfun/AD8232_Heart_Rate_Monitor/blob/master/Hardware/AD8232_Heart_Rate_Monitor.brd" },
    note: "The jack is shown from the component side; TIP, RING and SLEEVE anchors are its exposed solder tails, not a mirrored mating-face drawing. ",
  }),
]);
