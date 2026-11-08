import { physicalComponent } from "../shared/physical-contacts.js";
import { defineFamily } from "../registry.js";
import { circle, label, line, path, pinRow, rect } from "../shared/svg.js";
import { rigidBreadboardPart } from "../shared/breadboard-parts.js";

const input = (id, caption, description) => [id, caption, description, "input"];
const output = (id, caption, description, type = "output") => [id, caption, description, type];
const supply = (id, caption, description) => [id, caption, description, "power_in"];
const ground = supply("gnd", "GND", "Ground and signal reference.");
const vcc = supply("vcc", "VCC", "Positive supply input.");

// TI MPDI002C and MPDI001B package drawings. Body dimensions are nominal midpoints.
const packages = {
  N14: { body: [6.35, 19.305], pins: 14, packageCode: "N", notch: true },
  N16: { body: [6.35, 19.305], pins: 16, packageCode: "N", notch: true },
  P8: { body: [6.35, 9.59], pins: 8, packageCode: "P", notch: false },
};

function dipArt(component, showLabels, mechanical) {
  const scale = 7.5;
  const bodyWidth = mechanical.body[0] * scale;
  const bodyHeight = mechanical.body[1] * scale;
  const left = (component.width - bodyWidth) / 2;
  const right = left + bodyWidth;
  const top = (component.height - bodyHeight) / 2;
  const center = component.width / 2;
  const leads = component.pins.map(pin => {
    const isLeft = pin.edge === "left";
    const shoulder = isLeft ? left - 9 : right + 9;
    const bodyEdge = isLeft ? left : right;
    return rect(Math.min(shoulder, bodyEdge), pin.y - 2.4, 9, 4.8, 0.5, "#a7afb4", "#6d777e") +
      line(shoulder, pin.y - 1.2, bodyEdge, pin.y - 1.2, "#e0e4e4", 0.9) +
      (showLabels ? label(pin.x + (isLeft ? -6 : 6), pin.y, pin.label, 7.6, "#405367", isLeft ? "end" : "start") : "");
  }).join("");
  const outline = mechanical.notch
    ? path(`M${left + 3} ${top}H${center - 6}Q${center - 6} ${top + 7} ${center} ${top + 7}Q${center + 6} ${top + 7} ${center + 6} ${top}H${right - 3}Q${right} ${top} ${right} ${top + 3}V${top + bodyHeight - 3}Q${right} ${top + bodyHeight} ${right - 3} ${top + bodyHeight}H${left + 3}Q${left} ${top + bodyHeight} ${left} ${top + bodyHeight - 3}V${top + 3}Q${left} ${top} ${left + 3} ${top}Z`, "#252a2f", "#111820")
    : rect(left, top, bodyWidth, bodyHeight, 3, "#252a2f", "#111820");
  const numbers = showLabels ? component.pins.map(pin => label(
    pin.edge === "left" ? left + 6 : right - 6, pin.y, pin.number, 7, "#b9c1c8",
  )).join("") : "";
  return leads + outline + line(left + 2, top + 12, left + 2, top + bodyHeight - 5, "#4d555c", 1) +
    circle(left + 8, top + 9, 2, "#121920", "#535d64") +
    `<g transform="rotate(-90 ${center} ${component.height / 2})">` +
    label(center, component.height / 2 - 4, component.shortName, 9.4, "#c5c9c5") +
    label(center, component.height / 2 + 8, "TI", 7.5, "#929d9f") + "</g>" + numbers;
}

function dip({ id, part, family, packageId, name, description, subtitle, tags, contacts }) {
  const mechanical = packages[packageId];
  const width = 208;
  const height = mechanical.body[1] * 7.5 + 24;
  const count = mechanical.pins / 2;
  const canvasPitch = 19.05;
  const start = (height - (count - 1) * canvasPitch) / 2;
  const numbered = contacts.map((pin, index) => [...pin, String(index + 1)]);
  const left = numbered.slice(0, count);
  const right = numbered.slice(count).reverse();
  const component = {
    id, art: id, name, shortName: part, description, subtitle, tags,
    category: "Semiconductors", referencePrefix: "U", manufacturer: "Texas Instruments",
    source: `https://www.ti.com/lit/ds/symlink/${family.toLowerCase()}.pdf`,
    width, height, contactLayout: "physical",
    pins: [...pinRow("left", width, height, start, canvasPitch, left),
      ...pinRow("right", width, height, start, canvasPitch, right)],
  };
  const y = -(count - 1) * 2.54 / 2;
  return {
    component: physicalComponent(component, pin => [pin.x === 0 ? (width - mechanical.body[0] * 7.5) / 2 - 9 : (width + mechanical.body[0] * 7.5) / 2 + 9, pin.y]),
    art: (part, showLabels) => dipArt(part, showLabels, mechanical),
    mounting: rigidBreadboardPart(
      { label: `Texas Instruments ${part} ${packageId} manufacturer package drawing`, url: component.source },
      [...left.map(([pinId], index) => ({ pinId, x: -3.81, y: y + index * 2.54 })),
        ...right.map(([pinId], index) => ({ pinId, x: 3.81, y: y + index * 2.54 }))],
      { x: (width - mechanical.body[0] * 7.5) / 2, y: (height - mechanical.body[1] * 7.5) / 2,
        width: mechanical.body[0] * 7.5, height: mechanical.body[1] * 7.5 },
      `Manufacturer-reviewed ${mechanical.pins}-pin TI ${mechanical.packageCode} PDIP, component-side view, 2.54 mm lead pitch and 7.62 mm formed row spacing. Insert all leads across the breadboard trench; the source package body stays fixed.`,
    ),
    footprint: {
      body: mechanical.body, color: "#252a2f", modelHeight: 3.5,
      pitch: 2.54, drill: 1, size: [1.8, 2.1], shape: "oval",
      groups: [
        { ids: left.map(([id]) => id), axis: "y", x: -3.81, y },
        { ids: right.map(([id]) => id), axis: "y", x: 3.81, y },
      ],
      note: `Reference through-hole ${mechanical.pins}-pin PDIP ${mechanical.packageCode} pattern based on TI ${mechanical.packageCode === "N" ? "MPDI002C" : "MPDI001B"}. Top view with pin 1 at upper left, 2.54 mm lead pitch and 7.62 mm fitted row spacing. Hole and land sizes are host-board choices. The exported 3D body is approximate.`,
    },
    model: {
      label: `TI ${part} CAD and 3D models (Ultra Librarian)`,
      url: `https://vendor.ultralibrarian.com/TI/embedded/?gpn=${family}&package=${mechanical.packageCode}&pin=${mechanical.pins}`,
    },
  };
}

const parts = [
  dip({
    id: "ti-sn74hc595n", part: "SN74HC595N", family: "SN74HC595", packageId: "N16",
    name: "TI SN74HC595N 8-Bit Output Shift Register",
    description: "SN74HC595N in the 16-pin N PDIP package. Serial input feeds an eight-bit shift register and a separate output latch with three-state outputs. Supply range is 2–6 V.",
    subtitle: "PDIP-16 / serial-to-parallel / latched outputs",
    tags: ["74hc595", "sn74hc595n", "shift register", "gpio", "serial", "logic", "dip", "breadboard"],
    contacts: [
      ...["B", "C", "D", "E", "F", "G", "H"].map(channel =>
        output(`q${channel.toLowerCase()}`, `Q${channel}`, `Latched parallel output ${channel}. High impedance when /OE is high.`, "tri_state")),
      ground,
      output("qh-serial", "QH′", "Serial output of the shift register for cascading."),
      input("srclr", "/SRCLR", "Active-low asynchronous clear for the shift register. The output latch is controlled separately."),
      input("srclk", "SRCLK", "Shift-register clock. Data shifts on the rising edge."),
      input("rclk", "RCLK", "Storage-register clock. The rising edge latches the shifted data onto the parallel outputs."),
      input("oe", "/OE", "Active-low parallel output enable. High makes QA through QH high impedance."),
      input("ser", "SER", "Serial data input."),
      output("qa", "QA", "Latched parallel output A. High impedance when /OE is high.", "tri_state"),
      vcc,
    ],
  }),
  dip({
    id: "ti-sn74hc165n", part: "SN74HC165N", family: "SN74HC165", packageId: "N16",
    name: "TI SN74HC165N 8-Bit Input Shift Register",
    description: "SN74HC165N in the 16-pin N PDIP package. Reads eight parallel inputs and shifts them to complementary serial outputs. Supply range is 2–6 V.",
    subtitle: "PDIP-16 / parallel-to-serial / digital inputs",
    tags: ["74hc165", "sn74hc165n", "shift register", "gpio", "parallel", "logic", "dip", "breadboard"],
    contacts: [
      input("sh-ld", "SH/LD", "Low asynchronously loads the parallel inputs. High selects serial shifting."),
      input("clk", "CLK", "Shift clock. Rising edges shift data when CLK INH is low and SH/LD is high."),
      ...["E", "F", "G", "H"].map(channel => input(channel.toLowerCase(), channel, `Parallel data input ${channel}.`)),
      output("qh-inverted", "/QH", "Complementary serial output."),
      ground,
      output("qh", "QH", "Non-inverting serial output."),
      input("ser", "SER", "Serial data input for cascading."),
      ...["A", "B", "C", "D"].map(channel => input(channel.toLowerCase(), channel, `Parallel data input ${channel}.`)),
      input("clk-inh", "CLK INH", "High inhibits the shift clock. Change this input while CLK is high to avoid unintended shifts."),
      vcc,
    ],
  }),
  dip({
    id: "ti-sn74hc14n", part: "SN74HC14N", family: "SN74HC14", packageId: "N14",
    name: "TI SN74HC14N Hex Schmitt-Trigger Inverter",
    description: "SN74HC14N in the 14-pin N PDIP package. Six independent Schmitt-trigger inverters provide hysteresis for slow or noisy digital inputs. Supply range is 2–6 V.",
    subtitle: "PDIP-14 / six inverters / hysteresis",
    tags: ["74hc14", "sn74hc14n", "schmitt trigger", "inverter", "debounce", "oscillator", "logic", "dip", "breadboard"],
    contacts: [
      ...[1, 2, 3].flatMap(gate => [
        input(`a${gate}`, `${gate}A`, `Schmitt-trigger input of inverter ${gate}.`),
        output(`y${gate}`, `${gate}Y`, `Inverting output of gate ${gate}.`),
      ]),
      ground,
      ...[4, 5, 6].flatMap(gate => [
        output(`y${gate}`, `${gate}Y`, `Inverting output of gate ${gate}.`),
        input(`a${gate}`, `${gate}A`, `Schmitt-trigger input of inverter ${gate}.`),
      ]),
      vcc,
    ],
  }),
  dip({
    id: "ti-ne555p", part: "NE555P", family: "NE555", packageId: "P8",
    name: "TI NE555P Precision Timer",
    description: "NE555P bipolar timer in the eight-pin P PDIP package. External resistors and capacitors set monostable delays or astable oscillation. Recommended supply range is 4.5–16 V.",
    subtitle: "PDIP-8 / timer, oscillator and pulse generation",
    tags: ["ne555", "ne555p", "555", "timer", "oscillator", "pwm", "pulse", "dip", "breadboard"],
    contacts: [
      ground,
      input("trig", "TRIG", "Trigger comparator input. A voltage below approximately one-third VCC sets the latch."),
      output("out", "OUT", "Timer push-pull output."),
      input("reset", "/RESET", "Active-low reset. Hold high for normal operation."),
      ["cont", "CONT", "Comparator control voltage and internal two-thirds VCC reference output. May be bypassed to ground with a capacitor or driven to adjust the thresholds.", "bidirectional"],
      input("thres", "THRES", "Threshold input. A voltage above approximately two-thirds VCC resets the latch."),
      output("disch", "DISCH", "Open-collector discharge transistor for the timing capacitor.", "open_collector"),
      vcc,
    ],
  }),
  dip({
    id: "ti-lm358p", part: "LM358P", family: "LM358", packageId: "P8",
    name: "TI LM358P Dual Operational Amplifier",
    description: "Original LM358P dual operational amplifier in the eight-pin P PDIP package. Supports single-supply operation from 3 to 30 V and input common-mode voltages near the negative rail.",
    subtitle: "PDIP-8 / dual analog amplifier",
    tags: ["lm358", "lm358p", "op amp", "opamp", "amplifier", "analog", "dip", "breadboard"],
    contacts: [
      output("out1", "OUT1", "Output of amplifier 1."),
      input("in1-minus", "IN1−", "Inverting input of amplifier 1."),
      input("in1-plus", "IN1+", "Non-inverting input of amplifier 1."),
      supply("v-minus", "V−", "Negative supply, or ground for single-supply operation."),
      input("in2-plus", "IN2+", "Non-inverting input of amplifier 2."),
      input("in2-minus", "IN2−", "Inverting input of amplifier 2."),
      output("out2", "OUT2", "Output of amplifier 2."),
      supply("v-plus", "V+", "Positive supply. The total voltage between V+ and V− is 3–30 V."),
    ],
  }),
  dip({
    id: "ti-uln2003an", part: "ULN2003AN", family: "ULN2003A", packageId: "N16",
    name: "TI ULN2003AN Seven-Channel Darlington Driver",
    description: "ULN2003AN in the 16-pin N PDIP package. Seven low-side Darlington channels with common emitters and internal flyback diodes drive relays, lamps and inductive loads.",
    subtitle: "PDIP-16 / seven open-collector channels",
    tags: ["uln2003", "uln2003a", "uln2003an", "darlington", "relay", "stepper", "motor", "driver", "dip", "breadboard"],
    contacts: [
      ...[1, 2, 3, 4, 5, 6, 7].map(channel => input(`in${channel}`, `${channel}B`, `Darlington base input for channel ${channel}, with an internal series resistor.`)),
      supply("emitter", "E", "Common emitter for all channels. Connect to the load-supply ground."),
      ["com", "COM", "Common cathodes of the flyback diodes. Connect to the positive load supply when driving inductive loads.", "passive"],
      ...[7, 6, 5, 4, 3, 2, 1].map(channel => output(`out${channel}`, `${channel}C`, `Open-collector low-side output of channel ${channel}.`, "open_collector")),
    ],
  }),
];

const prototypingIcComponents = parts.map(({ component }) => component);
const prototypingIcArt = Object.fromEntries(parts.map(({ component, art }) => [component.id, art]));
const prototypingIcFootprints = Object.fromEntries(parts.map(({ component, footprint }) => [component.id, footprint]));
const prototypingIcModels = Object.fromEntries(parts.map(({ component, model }) => [component.id, model]));
const prototypingIcMountings = Object.fromEntries(parts.map(({ component, mounting }) => [component.id, mounting]));

export default defineFamily("prototyping-ics", (prototypingIcComponents).map(component => ({ component, render: (prototypingIcArt)[component.art], footprint: (prototypingIcFootprints)[component.id], model: prototypingIcModels[component.id], mounting: prototypingIcMountings[component.id] })));
