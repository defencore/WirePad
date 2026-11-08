import { defineFamily } from "../registry.js";
import { label, path, rect } from "../shared/svg.js";
import { escapeText } from "../../shared/text.js";

// Semtech DS.SX1261-2.W.APP rev. 2.1 (December 2021), tables 2-1 and
// figures 2-1 / 16-3; DS.SX1268.W.APP rev. 1.1 (June 2019), same sections.
// Manufacturer-authored copies used for the mechanical review:
// https://static.chipdip.ru/lib2/a/000/DOC064000030.pdf
// https://images.tuyacn.com/smart/docs/HardwareDeveloper/IntelligentAgriculture/Document/DS_SX1268_V1.1.pdf
const terminals = [
  ["GND", "power_in", "Exposed ground pad. Solder to the system ground plane with thermal vias."],
  ["VDD_IN", "power_in", "Power-amplifier regulator supply input. Use the device-specific external connection described below."],
  ["GND", "power_in", "Ground."],
  ["XTA", "passive", "32 MHz crystal connection; may accept an external reference clock according to the datasheet."],
  ["XTB", "passive", "32 MHz crystal oscillator connection."],
  ["GND", "power_in", "Ground."],
  ["DIO3", "bidirectional", "Multipurpose digital I/O, including programmable external TCXO supply control."],
  ["VREG", "power_out", "Output of the internal LDO / DC-DC regulator. Fit the specified external filter and decoupling."],
  ["GND", "power_in", "Ground."],
  ["DCC_SW", "output", "Internal DC-DC switcher output. Connect the external converter inductor as specified."],
  ["VBAT", "power_in", "RFIC supply input, 1.8–3.7 V."],
  ["VBAT_IO", "power_in", "Digital-interface supply input, excluding DIO3. Match the host I/O voltage."],
  ["DIO2", "bidirectional", "Multipurpose digital I/O, including RF-switch control."],
  ["DIO1", "bidirectional", "Multipurpose digital I/O / interrupt output."],
  ["BUSY", "output", "Busy status output. The host must wait until low before an SPI command."],
  ["NRESET", "input", "Active-low reset input."],
  ["MISO", "output", "SPI data output to the host."],
  ["MOSI", "input", "SPI data input from the host."],
  ["SCK", "input", "SPI serial clock input."],
  ["NSS", "input", "Active-low SPI chip select input."],
  ["GND", "power_in", "Ground."],
  ["RFI_P", "input", "Positive differential RF receiver input. Requires the device's external matching network."],
  ["RFI_N", "input", "Negative differential RF receiver input. Requires the device's external matching network."],
  ["RFO", "output", "RF transmitter output. Requires the device's external RF matching and filtering network."],
  ["VR_PA", "power_out", "Regulated power-amplifier supply node. Decouple and connect as shown in the reference circuit."],
];

// These are top-layer land-pattern coordinates. Canvas artwork shows the
// underside, so x is mirrored when projecting the same physical pad centers.
const lands = [
  { number: 0, x: 0, y: 0, size: [2.7, 2.7], side: "center" },
  ...Array.from({ length: 6 }, (_, index) => ({ number: index + 1, x: -2, y: -1.25 + index * .5, size: [.8, .3], side: "right" })),
  ...Array.from({ length: 6 }, (_, index) => ({ number: index + 7, x: -1.25 + index * .5, y: 2, size: [.3, .8], side: "bottom" })),
  ...Array.from({ length: 6 }, (_, index) => ({ number: index + 13, x: 2, y: 1.25 - index * .5, size: [.8, .3], side: "left" })),
  ...Array.from({ length: 6 }, (_, index) => ({ number: index + 19, x: 1.25 - index * .5, y: -2, size: [.3, .8], side: "top" })),
];
const scale = 50;
const center = [190, 175];
const canvasPoint = ({ x, y }) => [
  center[0] - (Math.abs(x) === 2 ? Math.sign(x) * 1.8 : x) * scale,
  center[1] + (Math.abs(y) === 2 ? Math.sign(y) * 1.8 : y) * scale,
];

function radioIc(part, band, output, revision, paConnection) {
  const id = `semtech-${part.toLowerCase()}imltrt`;
  const pins = lands.map(({ number, side, ...land }) => {
    const [caption, type, description] = terminals[number];
    const [x, y] = canvasPoint(land);
    return {
      id: `p${number}`, number: String(number), label: caption, type,
      description: `${number} — ${description}${number === 1 ? ` ${paConnection}` : ""}`,
      x, y, surface: true, edge: side === "center" ? "left" : side,
    };
  });
  return {
    component: {
      id, art: id, name: `Semtech ${part}IMLTRT LoRa Transceiver`, shortName: `${part}IMLTRT`,
      manufacturer: "Semtech", category: "Semiconductors", referencePrefix: "U", contactLayout: "physical",
      subtitle: `QFN-24 4 × 4 mm / ${band} / ${output} dBm`,
      description: `Native ${part}IMLTRT RFIC in the 4 × 4 mm, 24-lead QFN package with exposed ground pad 0. Bottom view: the canvas is mirrored relative to the top-layer footprint so all 25 physical contacts, including the exposed pad, remain visible. Requires an external 32 MHz reference, RF matching, supply network and host controller. Pinout and land pattern checked against ${revision}.`,
      source: `https://www.semtech.com/products/wireless-rf/lora-connect/${part.toLowerCase()}`,
      tags: ["semtech", part.toLowerCase(), `${part.toLowerCase()}imltrt`, "lora", "fsk", "spi", "qfn24", "rf", "radio", "transceiver"],
      width: 380, height: 345, pins,
      internalConnections: [["p0", "p2", "p5", "p8", "p20"]],
    },
    render: (component, showLabels) => {
      const body = rect(90, 75, 200, 200, 3, "#273039", "#59636c");
      const contacts = lands.map(land => {
        const pin = component.pins.find(pin => pin.number === String(land.number));
        // Draw nominal package copper (L=0.40, b=0.23, EP=2.60 mm),
        // independently of the larger recommended host solder lands.
        const copperSize = land.number === 0 ? [2.6, 2.6]
          : ["top", "bottom"].includes(land.side) ? [.23, .4] : [.4, .23];
        const [w, h] = copperSize.map(value => value * scale);
        const caption = land.side === "center" ? label(pin.x, pin.y - 5, "0", 12, "#455054") + label(pin.x, pin.y + 11, "GND / EP", 8, "#455054")
          : land.side === "left" ? label(pin.x - 25, pin.y, `${pin.number} ${pin.label}`, 7.4, "#405568", "end")
          : land.side === "right" ? label(pin.x + 25, pin.y, `${pin.number} ${pin.label}`, 7.4, "#405568", "start")
          : label(pin.x, pin.y + (land.side === "top" ? -28 : 28), pin.number, 8, "#405568");
        return `<g data-contact="${pin.id}"><title>${escapeText(pin.description)}</title>` +
          (land.number === 0
            ? path("M125 110H245L255 120V240H125Z", "#bfc4b8", "#e2e4d8")
            : rect(pin.x - w / 2, pin.y - h / 2, w, h, 1.5, "#bfc4b8", "#e2e4d8")) +
          (showLabels ? caption : "") + "</g>";
      }).join("");
      return body + contacts +
        label(190, 20, `SEMTECH ${part}IMLTRT`, 11, "#405568") +
        label(190, 320, "BOTTOM VIEW · mirrored from top footprint", 6.5, "#405568") +
        (showLabels ? label(190, 335, "Top / bottom pad functions on hover", 6, "#405568") : "");
    },
    footprint: {
      body: [4, 4], smd: true, color: "#273039", modelHeight: .9,
      pads: lands.map(({ number, x, y, size }) => ({ id: `p${number}`, x, y, size })),
      note: `Semtech QFN 4 × 4 mm reference land pattern from ${revision}: 0.50 mm pitch, 0.30 × 0.80 mm perimeter lands, 2.70 × 2.70 mm exposed ground pad 0. Native footprint uses top-layer orientation; canvas intentionally shows the mirrored underside. Add thermal vias and RF layout per the reference design; vias and paste segmentation are not generated.`,
    },
  };
}

export default defineFamily("semtech-more", [
  radioIc("SX1261", "150–960 MHz", "+15", "DS.SX1261-2.W.APP rev. 2.1 (December 2021)", "Connect VDD_IN externally to VREG (pin 7), following the selected regulator reference circuit."),
  radioIc("SX1262", "150–960 MHz", "+22", "DS.SX1261-2.W.APP rev. 2.1 (December 2021)", "Connect VDD_IN externally to VBAT (pin 10), following the reference circuit."),
  radioIc("SX1268", "410–810 MHz", "+22", "DS.SX1268.W.APP rev. 1.1 (June 2019)", "Connect VDD_IN externally to VBAT (pin 10) or VREG (pin 7) for the selected power configuration."),
]);
