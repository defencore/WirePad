import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { circle, chip, label, path, rect, smd, tactile, usb } from "../shared/svg.js";

const ti = "Texas Instruments";
const round = value => Math.round(value * 10000) / 10000;
const signal = (name, type, description) => ({ name, type, description });
const input = (name, description) => signal(name, "input", description);
const io = (name, description) => signal(name, "bidirectional", description);
const analog = (name, description) => signal(name, "passive", description);
const power = (name, description = "Supply input. Decouple according to the TI reference circuit.") => signal(name, "power_in", description);
const decouple = name => signal(name, "power_out", "Internal regulator decoupling node. Connect only the capacitor specified by TI; do not power external circuitry from this pin.");
const ground = () => signal("GND", "power_in", "Ground. Connect to a solid ground plane.");

// SWRS061I Table 19 and SWRS040C Table 13 have the same terminal assignment.
const cc20 = [
  input("SCLK", "SPI configuration clock input."),
  signal("SO / GDO1", "output", "SPI data output; configurable general output while CSn is high."),
  signal("GDO2", "output", "Configurable radio status, clock or receive-data output."),
  power("DVDD", "1.8–3.6 V digital supply input."), decouple("DCOUPL"),
  io("GDO0 / ATEST", "Configurable radio output or serial transmit-data input; analog test function."),
  input("CSn", "Active-low SPI chip select."),
  analog("XOSC_Q1", "Crystal oscillator terminal 1 or external reference-clock input."),
  power("AVDD", "1.8–3.6 V analog supply input."),
  analog("XOSC_Q2", "Crystal oscillator terminal 2."),
  power("AVDD", "1.8–3.6 V analog supply input."),
  io("RF_P", "Positive differential RF receive input / transmit output. Requires the vendor RF matching circuit."),
  io("RF_N", "Negative differential RF receive input / transmit output. Requires the vendor RF matching circuit."),
  power("AVDD", "1.8–3.6 V analog supply input."), power("AVDD", "1.8–3.6 V analog supply input."),
  ground(), analog("RBIAS", "External precision bias resistor; use the value specified in the datasheet."),
  power("DGUARD", "Digital noise-isolation supply input."), ground(), input("SI", "SPI configuration data input."),
];

// SWRS112H and SWRS123D, Table 3.2. NC pin 16 remains an explicit terminal.
const cc32 = [
  power("VDD_GUARD", "2.0–3.6 V guard supply input."), input("RESET_N", "Asynchronous active-low reset input."),
  io("GPIO3", "Configurable digital input/output."), io("GPIO2", "Configurable digital input/output."),
  power("DVDD", "2.0–3.6 V digital regulator supply input."), decouple("DCPL"),
  input("SI", "SPI data input."), input("SCLK", "SPI clock input."),
  io("SO / GPIO1", "SPI data output / configurable digital input/output."), io("GPIO0", "Configurable digital input/output."),
  input("CSn", "Active-low SPI chip select."), power("DVDD"), power("AVDD_IF"),
  analog("RBIAS", "External precision bias resistor."), power("AVDD_RF"), signal("NC", "no_connect", "Not connected. Leave open."),
  signal("PA", "output", "Single-ended RF transmit output. The matching circuit must provide a DC path to VDD."),
  analog("TRX_SW", "RF switch node: grounded internally in transmit mode and high impedance in receive mode."),
  signal("LNA_P", "input", "Positive differential RF receive input. Requires a DC path to ground."),
  signal("LNA_N", "input", "Negative differential RF receive input. Requires a DC path to ground."),
  decouple("DCPL_VCO"), power("AVDD_SYNTH1"), analog("LPF0", "External loop-filter connection."),
  analog("LPF1", "External loop-filter connection."), power("AVDD_PFD_CHP"), decouple("DCPL_PFD_CHP"),
  power("AVDD_SYNTH2"), power("AVDD_XOSC"), decouple("DCPL_XOSC"),
  analog("XOSC_Q1", "Crystal oscillator terminal 1. Ground when an external clock drives EXT_XOSC."),
  analog("XOSC_Q2", "Crystal oscillator terminal 2. Leave open when an external clock drives EXT_XOSC."),
  input("EXT_XOSC", "External reference-clock input. Ground when a crystal is connected to XOSC_Q1/XOSC_Q2."),
];

function qfn({ part, signals, body, packageName, landDistance, landLength, exposed, band, source }) {
  const count = signals.length, perSide = count / 4, pitch = 0.5;
  const orderable = `${part}${count === 20 ? "RGPR" : "RHBR"}`;
  const center = 148, scale = 42, width = 296, height = 326;
  const contactDistance = body / 2 - 0.25;
  const perimeter = signals.map((spec, index) => {
    const side = Math.floor(index / perSide), offset = (index % perSide - (perSide - 1) / 2) * pitch;
    const position = distance => [
      [-distance, offset], [offset, distance], [distance, -offset], [-offset, -distance],
    ][side].map(round);
    return { ...spec, id: `pad-${index + 1}`, number: String(index + 1), side,
      contact: position(contactDistance), land: position(landDistance) };
  });
  const ep = { ...ground(), id: "exposed-pad", number: String(count + 1), side: 4, contact: [0, 0], land: [0, 0] };
  const contacts = [...perimeter, ep];
  const component = physicalComponent({
    id: `ti-${part.toLowerCase()}-${count === 20 ? "rgp20" : "rhb32"}`,
    art: part, name: `TI ${part} ${packageName}`, shortName: part, manufacturer: ti,
    category: "Semiconductors", referencePrefix: "U", subtitle: `${band} / ${body} × ${body} mm VQFN`,
    description: `Bare ${orderable} radio IC, ${packageName} package. The canvas shows the underside, mirrored horizontally from TI's top-view pin diagram, including the exposed ground pad. Requires an external reference, decoupling and RF matching; this is not a ready-to-wire radio module.`,
    source, tags: ["ti", "texas instruments", part.toLowerCase(), orderable.toLowerCase(), "radio", "rf", "spi", "transceiver", "qfn", band],
    width, height,
    ...(count === 20 ? { internalConnections: [["pad-16", "pad-19", "exposed-pad"]] } : {}),
    pins: contacts.map(({ id, name, number, type, description, contact: [x, y], side }) => ({
      id, label: name, number, type, description: `${number} — ${description}`,
      x: center + x * scale, y: center + y * scale,
      edge: ["right", "bottom", "left", "top", "bottom"][side],
    })),
  }, contacts.map(({ contact: [x, y] }) => [round(center - x * scale), round(center + y * scale)]));
  const render = (entry, labels) => {
    const edge = body * scale, top = center - edge / 2;
    return label(center, 15, `TI ${part}`, 12, "#334955") +
      label(center, 27, "UNDERSIDE · MIRRORED", 8, "#52626a") +
      rect(top, top, edge, edge, 3, "#242a30", "#69747c") +
      contacts.map((contact, index) => {
        const pin = entry.pins[index], horizontal = contact.side === 0 || contact.side === 2;
        const [w, h] = contact.side === 4 ? [exposed, exposed] : horizontal ? [.5, .24] : [.24, .5];
        const caption = contact.side === 4
          ? label(pin.x, pin.y, `${pin.number} GND`, 10, "#34414a")
          : horizontal
            ? label(pin.x + (pin.x > center ? 17 : -17), pin.y, pin.number, 8, "#405660", pin.x > center ? "start" : "end")
            : label(pin.x, pin.y + (pin.y > center ? 17 : -17), pin.number, 8, "#405660");
        return `<g data-contact="${pin.id}"><title>${pin.number}: ${pin.label}</title>` +
          rect(pin.x - w * scale / 2, pin.y - h * scale / 2, w * scale, h * scale, 1.2, "#b7bdc2", "#edf0ec") +
          (labels ? caption : "") + "</g>";
      }).join("") +
      label(center, height - 20, `${packageName} · 0.5 mm pitch`, 8, "#52626a");
  };
  return { component, render, footprint: {
    body: [body, body], smd: true, modelHeight: .9, color: "#242a30", package: packageName,
    pads: contacts.map(({ id, side, land: [x, y] }) => ({
      id, x, y, size: side === 4 ? [exposed, exposed] : side === 0 || side === 2 ? [landLength, .24] : [.24, landLength],
      ...(count === 32 && side !== 4 ? { size: side === 0 || side === 2 ? [landLength, .25] : [.25, landLength] } : {}),
    })),
    note: `TI ${packageName} example land pattern: ${pitch} mm pitch, ${landLength} mm perimeter land length and ${exposed} mm square exposed pad. The footprint is a component-side projection; the canvas underside is mirrored. Add the manufacturer's solder-paste segmentation, thermal vias and RF layout before fabrication.`,
  }, model: { label: `TI ${part} package CAD resources`, url: `https://www.ti.com/product/${part}#cad-cae-symbols` } };
}

const chips = [
  qfn({ part: "CC1101", signals: cc20, body: 4, packageName: "RGP0020C", landDistance: 1.925, landLength: .55, exposed: 2.4,
    band: "Sub-1 GHz", source: "https://www.ti.com/lit/ds/symlink/cc1101.pdf" }),
  qfn({ part: "CC2500", signals: cc20, body: 4, packageName: "RGP0020C", landDistance: 1.925, landLength: .55, exposed: 2.4,
    band: "2.4 GHz", source: "https://www.ti.com/lit/ds/symlink/cc2500.pdf" }),
  qfn({ part: "CC1120", signals: cc32, body: 5, packageName: "RHB0032E", landDistance: 2.4, landLength: .6, exposed: 3.45,
    band: "Sub-1 GHz narrowband", source: "https://www.ti.com/lit/ds/symlink/cc1120.pdf" }),
  qfn({ part: "CC1200", signals: cc32, body: 5, packageName: "RHB0032E", landDistance: 2.4, landLength: .6, exposed: 3.45,
    band: "Sub-1 GHz", source: "https://www.ti.com/lit/ds/symlink/cc1200.pdf" }),
];

const gpio = number => io(`DIO${number}`, `Configurable CC13xx digital input/output DIO${number}.`);
const nc = () => signal("NC", "no_connect", "Unconnected BoosterPack position in the published TI quick-start pinout.");

// These are the official BoosterPack position numbers, not logical GPIO indices.
// SLAA542 Figure 4 specifies the 1800 mil outer-column spacing and 100 mil grid.
// Both boards use two adjacent 10-contact rows on each side, NOT four end-to-end banks.
function launchpad({ sku, chipName, guide, guideRevision, left, right, innerLeft, innerRight, resetMux = false }) {
  const body = [50.8, 114.3], scale = 3.35, leftEdge = 24, top = 20;
  const projection = ([x, y]) => [round(leftEdge + (x + body[0] / 2) * scale), round(top + (y + body[1] / 2) * scale)];
  const contacts = [
    ...left.map((spec, i) => ({ ...spec, number: String(i + 1), xy: [-22.86, -10.16 + i * 2.54], group: "left-outer" })),
    ...innerLeft.map((spec, i) => ({ ...spec, number: String(i + 21), xy: [-20.32, -10.16 + i * 2.54], group: "left-inner" })),
    ...right.map((spec, i) => ({ ...spec, number: String(20 - i), xy: [22.86, -10.16 + i * 2.54], group: "right-outer" })),
    ...innerRight.map((spec, i) => ({ ...spec, number: String(40 - i), xy: [20.32, -10.16 + i * 2.54], group: "right-inner" })),
  ];
  const functions = {
    2: "Analog input A0.", 3: "Default UART RXD, relative to the LaunchPad MCU.", 4: "Default UART TXD, relative to the LaunchPad MCU.",
    6: "Analog input A1.", 7: "Default SPI clock.", 9: "Default I²C SCL.", 10: "Default I²C SDA.",
    12: "User button BTN2.", 13: "User button BTN1.", 14: "Default SPI MISO.", 15: "Default SPI MOSI.",
    18: "Default SPI chip select.", 19: chipName === "CC1352R" ? "PWM1 position." : "GPIO position.",
    23: "Analog input A2.", 24: "Analog input A3.", 25: "Analog input A4.", 26: "Analog input A5.", 27: "Analog input A6.", 28: "Analog input A7.",
    31: "JTAG TDI alternate function.", 32: "JTAG TDO alternate function.", 36: "UART RTS / trace SWO alternate function.",
    37: "UART CTS alternate function.", 38: "Onboard flash chip select.", 39: "Onboard red LED.", 40: "Onboard green LED.",
  };
  const component = physicalComponent({
    id: `ti-${sku.toLowerCase()}`, art: sku, name: `TI ${sku} LaunchPad`, shortName: sku,
    manufacturer: ti, category: "Microcontrollers", referencePrefix: "U", width: 220, height: 425,
    subtitle: `${chipName} / 40-pin BoosterPack`, source: guide,
    description: `Texas Instruments ${chipName} wireless LaunchPad, matching the ${guideRevision} quick-start pinout. Exposes all 40 BoosterPack positions, including unused contacts. The view faces the component side with USB at the top. Board dimensions, header origin and small-part placement are representative; the 2.54 mm header pitch and 45.72 mm outer-row spacing follow the BoosterPack interface. Debugger/isolation connectors are illustrated but are not part of this expansion-interface footprint.`,
    tags: ["ti", "texas instruments", sku, chipName, "launchpad", "boosterpack", "sub-1ghz", "wireless", "devboard", ...(chipName === "CC1352R" ? ["bluetooth", "zigbee", "thread", "2.4ghz"] : ["wi-sun", "mioty"])],
    internalConnections: [["bp-20", "bp-22"], ...(resetMux ? [] : [["bp-16", "bp-35"]])],
    pins: contacts.map(({ name, number, type, description, xy, group }) => ({
      id: `bp-${number}`, number, label: name, type, description: `${number} — ${description}${functions[number] ? ` ${functions[number]}` : ""}`,
      x: projection(xy)[0], y: projection(xy)[1], edge: group.startsWith("left") ? "left" : "right",
    })),
  }, contacts.map(({ xy }) => projection(xy)));
  const render = (entry, labels) => {
    const w = body[0] * scale, h = body[1] * scale, cx = leftEdge + w / 2;
    return rect(leftEdge, top, w, h, 4, "#bc2034", "#ed8a8e") +
      [[leftEdge + 7, top + 7], [leftEdge + w - 7, top + 7], [leftEdge + 7, top + h - 7], [leftEdge + w - 7, top + h - 7]].map(([x, y]) => circle(x, y, 3.4, "#b9bcb7") + circle(x, y, 2, "#e0e7df")).join("") +
      usb(leftEdge + 22, top - 3, 22) + tactile(leftEdge + 5, top + 98) +
      chip(leftEdge + 22, top + 43, 42, 42, "XDS110", 7) +
      chip(cx - 14, top + 214, 28, 28, chipName, 5) +
      rect(cx - 6, top + 248, 12, 7, .6, "#c8d0cb", "#edf0df") +
      rect(cx + 44, top + 268, 13, 17, 1, "#a28a4b", "#e0c475") + circle(cx + 50.5, top + 276, 4, "#e1c678") + circle(cx + 50.5, top + 276, 1.6, "#34494b") +
      path(`M${leftEdge + 21} ${top + 331}H${cx + 49}V${top + 343}H${leftEdge + 30}V${top + 354}H${cx + 49}V${top + 365}H${leftEdge + 20}`, "none", "#8e2a3a", 4) +
      [0, 1, 2, 3, 4, 5, 6].map(i => rect(leftEdge + 29 + i * 16, top + 108, 7, 14, 1, "#263038", "#917c60") + smd(cx - 26 + i % 3 * 17, top + 180 + Math.floor(i / 3) * 11)).join("") +
      rect(leftEdge + w - 27, top + 85, 16, 23, 1, "#263038", "#8c8f83") +
      tactile(leftEdge + 5, top + 141) + tactile(leftEdge + w - 20, top + 141) +
      label(cx, top + 145, "TARGET", 7) + label(cx, top + 292, chipName, 8) +
      label(cx, top + 305, "Texas Instruments", 7) +
      contacts.map((contact, i) => {
        const pin = entry.pins[i], inner = contact.group.endsWith("inner"), leftSide = contact.group.startsWith("left");
        const dx = (leftSide ? 1 : -1) * (inner ? 7 : -7);
        return `<g data-contact="${pin.id}"><title>BoosterPack ${pin.number}: ${pin.label}</title>` +
          circle(pin.x, pin.y, 2.4, "#d1b56c") + circle(pin.x, pin.y, 1.2, "#212c31") +
          (labels ? label(pin.x + dx, pin.y, pin.number, 5.3, inner ? "#fff0d8" : "#334955", dx < 0 ? "end" : "start") : "") + "</g>";
      }).join("") + label(cx, 412, sku, 8, "#334955");
  };
  return { component, render, footprint: {
    body, color: "#bc2034", modelHeight: 1.6,
    pads: contacts.map(({ number, xy: [x, y] }) => ({ id: `bp-${number}`, x, y, size: 1.7, drill: 1, square: number === "1" || number === "21" })),
    note: `Reference BoosterPack carrier interface for ${sku}; numbers follow TI's ${guideRevision} quick-start chart. Four 1×10 rows at 2.54 mm pitch, adjacent rows 2.54 mm apart, outer rows 45.72 mm apart. Board outline and header origin are approximate. USB, RF, debugger, isolation jumpers and mounting holes are not fabricated by this footprint.${resetMux ? " Position 35 is a configurable RESET/DIO15 connection, disconnected by default; check the board resistors before use." : ""}`,
  }, model: { label: `TI ${sku} manufacturer design files`, url: `https://www.ti.com/tool/${sku}#design-files` } };
}

const commonLeft = [power("3V3", "3.3 V LaunchPad rail; follow the supply jumper configuration."), gpio(23), null, null, gpio(22), gpio(24), gpio(10), gpio(21), gpio(4), gpio(5)];
const commonInnerLeft = [power("5V", "USB-derived 5 V rail. Avoid back-powering USB."), ground(), ...[25, 26, 27, 28, 29, 30].map(gpio), nc(), nc()];
const commonInnerRight = [gpio(7), gpio(6), gpio(20), gpio(19), gpio(18), input("RESET", "Active-low target MCU reset."), io("TMS", "JTAG TMS / cJTAG TMSC."), input("TCK", "JTAG / cJTAG clock."), gpio(16), gpio(17)];
const boards = [
  launchpad({ sku: "LAUNCHXL-CC1352R1", chipName: "CC1352R", guide: "https://www.ti.com/lit/pdf/swru525", guideRevision: "SWRU525E",
    left: commonLeft.map((spec, i) => spec ?? gpio(i === 2 ? 12 : 13)), innerLeft: commonInnerLeft,
    right: [ground(), gpio(3), gpio(11), nc(), input("LP RST", "Active-low LaunchPad target reset."), gpio(9), gpio(8), gpio(15), gpio(14), nc()], innerRight: commonInnerRight }),
  launchpad({ sku: "LP-CC1312R7", chipName: "CC1312R7", guide: "https://www.ti.com/lit/pdf/swru571", guideRevision: "SWRU571 (2021)", resetMux: true,
    left: commonLeft.map((spec, i) => spec ?? gpio(i === 2 ? 2 : 3)),
    innerLeft: commonInnerLeft.map((spec, i) => i === 9 ? gpio(1) : spec),
    right: [ground(), gpio(12), gpio(11), nc(), input("LP RST", "Active-low LaunchPad target reset."), gpio(9), gpio(8), gpio(13), gpio(14), gpio(15)],
    innerRight: commonInnerRight.map((spec, i) => i === 5 ? signal("RESET* / DIO15", "passive", "Not connected by default. RESET or DIO15 can be routed here through the board's configuration resistors; check the schematic before use.") : spec) }),
];

export default defineFamily("ti-wireless", [...chips, ...boards]);
