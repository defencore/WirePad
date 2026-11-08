import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { escapeText } from "../../shared/text.js";

const documents = "https://aithinker-static.oss-cn-shenzhen.aliyuncs.com/docs/Public%20Document%20Center/LoRa/lora/";
const specification = file => documents + "Specification/" + file;
const packaging = file => documents + "Packaging/" + file;
const round = value => Math.round(value * 100000) / 100000;
const copper = "#d7bc75";
const descriptions = {
  ANT: ["passive", "50 Ω antenna terminal. Solder the appropriate band antenna or route a controlled-impedance RF connection; this is not a GPIO."],
  RF: ["passive", "50 Ω shared transmit/receive antenna terminal. Use the band-specific RF antenna connection; this is not a GPIO."],
  GND: ["power_in", "Ground. Connect to the host ground plane."],
  "3.3V": ["power_in", "Module supply input."],
  VCC: ["power_in", "Module supply input."],
  RESET: ["input", "Active-low radio reset input."],
  RST: ["input", "Active-low radio reset input."],
  NRESET: ["input", "Active-low radio reset input."],
  SCK: ["input", "SPI clock input from the host controller."],
  MOSI: ["input", "SPI data input from the host controller."],
  MISO: ["output", "SPI data output to the host controller."],
  NSS: ["input", "Active-low SPI chip-select input."],
  BUSY: ["output", "Radio busy-status output. Connect to the host and wait until low before issuing a command."],
  TXEN: ["input", "Transmit-path RF switch control input. Coordinate with RXEN using the module reference circuit and driver."],
  RXEN: ["input", "Receive-path RF switch control input. Coordinate with TXEN using the module reference circuit and driver."],
  CTL1: ["input", "RF switch control 1. RX: CTL1=1, CTL2=0; TX: CTL1=0, CTL2=1; sleep: both low."],
  CTL2: ["input", "RF switch control 2. TX: CTL1=0, CTL2=1; RX: CTL1=1, CTL2=0; sleep: both low."],
  MISO_TX: ["output", "SPI MISO output or UART transmit output, according to the selected SX1281 interface."],
  MOSI_RX: ["input", "SPI MOSI input or UART receive input, according to the selected SX1281 interface."],
  SCK_RTSN: ["bidirectional", "SPI clock input or active-low UART request-to-send output, according to the selected SX1281 interface."],
  NSS_CTS: ["input", "Active-low SPI chip select or UART clear-to-send input, according to the selected SX1281 interface."],
};

const classicLabels = ["ANT", "GND", "3.3V", "RESET", "DIO0", "DIO1", "DIO2", "DIO3", "GND", "DIO4", "DIO5", "SCK", "MISO", "MOSI", "NSS", "GND"];
const llccLabels = ["ANT", "GND", "3.3V", "RESET", "TXEN", "DIO1", "DIO2", "DIO3", "GND", "BUSY", "RXEN", "SCK", "MISO", "MOSI", "NSS", "GND"];
const compactLabels = ["MISO", "MOSI", "NSS", "SCK", "GND", "RF", "RST", "DIO1", "DIO2", "BUSY", "CTL2", "CTL1", "GND", "VCC"];
const sx1281Labels = ["VCC", "GND", "MISO_TX", "MOSI_RX", "SCK_RTSN", "NSS_CTS", "GND", "GND", "NRESET", "BUSY", "DIO1", "DIO2", "DIO3", "GND"];

function twoRows(count, body, top, pitch, landX, landSize, packageInset, packageSize) {
  return Array.from({ length: count }, (_, index) => {
    const left = index < count / 2;
    const offset = left ? index : count - 1 - index;
    return {
      number: index + 1, side: left ? "left" : "right",
      x: (left ? -1 : 1) * (body[0] / 2 - packageInset), y: round(top + offset * pitch - body[1] / 2),
      size: packageSize,
      land: { x: (left ? -1 : 1) * landX, y: round(top + offset * pitch - body[1] / 2), size: landSize },
    };
  });
}

// Actual contact centers follow the module mechanical drawings. Host solder lands
// remain separate: the source CAD extends them beyond the castellated package.
const standardBody = [16, 17];
const classicPads = twoRows(16, standardBody, 1.5, 2, 8.1, [1.8, 1], .3, [.6, 1.2]);
classicPads[0] = { ...classicPads[0], x: -7, size: [1.9, 1.2], antennaHole: true };

// The base SC/SCH module uses the dedicated datasheet footprint. The archive
// linked by the manufacturer also contains -P-specific extra lands; those are
// not electrical contacts of these 16-pin base modules.
const llccPads = twoRows(16, standardBody, 1.5, 2, 7.75, [1.5358, 1], .3, [.6, 1.2]);
llccPads[0] = { ...llccPads[0], x: -7, size: [1.9, 1.2], antennaHole: true,
  land: { x: -7.47, y: -7, size: [2.262, 1.27] } };

// PCB_FOOTPRINT_Ra-03SCH.asc: 1,500,000 database units per mm.
// This asymmetric bank gap and its individual lower-pad offsets are intentional.
const compactBody = [18.4, 18.4];
const compactNative = [
  [0, 16.3], [0, 14.3], [0, 12.3], [0, 10.3], [0, 4.08], [0, 2.08],
  [18.4, 2.3], [18.4, 4.3], [18.4, 6.3], [18.4, 8.3], [18.4, 10.3], [18.4, 12.3], [18.4, 14.3], [18.4, 16.3],
];
const compactPads = compactNative.map(([x, y], index) => ({
  number: index + 1, side: x === 0 ? "left" : "right", x: x === 0 ? -8.55 : 8.55, y: round(9.2 - y), size: [1.3, 1],
  land: { x: round(x - 9.2), y: round(9.2 - y), size: [2.4, 1] },
}));

function sx1281Pads(body) {
  // Figures 4/8 in the dedicated 2024 datasheets specify a 1.27 mm pitch.
  // The Ra-05 ASC has a 0.07 mm outlier at pad 10; the dimensioned drawing
  // governs that pad rather than propagating the inconsistent CAD coordinate.
  return twoRows(14, body, 2.69, 1.27, 7.6, [2.8, .8], .25, [.5, .65]);
}

function aiMark(x, y, ink, size = 11) {
  return circle(x, y, size, "none", ink) + label(x, y, "Ai", size * 1.2, ink);
}

function ipex(x, y, size = 18) {
  return rect(x - size / 2, y - size / 2, size, size, .8, "#a6ad9f", "#e2dfc6") +
    circle(x, y, size * .34, copper, "#f0dda3") + circle(x, y, size * .16, "#54472f") +
    circle(x, y, size * .045, "#e4ce8d");
}

function standardFace(part, component, point, pcbRect, scale) {
  const [left, top, width, height] = pcbRect;
  const light = part.chip === "LLCC68";
  const fill = light ? "#aab2af" : "#313837";
  const ink = light ? "#eff0e4" : "#dce1d2";
  // The manufacturer front photo is rotated clockwise to align the numbered
  // side rows; the antenna corner is upper-left in this shield-side view.
  const shield = path(`M${left + 4} ${top + 32}H${left + 25}V${top + 4}H${left + width - 6}V${top + height - 6}H${left + 4}Z`, fill, "#d0d4ca", 1.1);
  const x = left + width * .55, y = top + height * .52;
  const marks = `<g transform="rotate(90 ${x} ${y})">` +
    aiMark(x - 44, y - 20, ink, 10) + label(x + 15, y - 24, part.part, 13, ink) +
    label(x + 15, y - 7, "Ai-Thinker", 10, ink) +
    label(x, y + 17, `ISM: ${part.band}`, 8.4, ink) +
    label(x, y + 31, part.chip === "LLCC68" ? "LoRa/(G)FSK · LLCC68" : "LoRa/FSK/OOK", 7.1, ink) + "</g>";
  return shield + marks +
    rect(left + 5, top + 8, 14, 12, .6, "#1c2425", "#b5b9a9") +
    [0, 1, 2].map(index => rect(left + 8 + index * 6, top + 23, 3.5, 6, .4, index === 1 ? "#b1b9ae" : "#665f4b")).join("");
}

function compactFace(part, component, point, pcbRect) {
  const [left, top, width, height] = pcbRect;
  const x = left + width / 2, y = top + height / 2;
  return rect(left + 10, top + 7, width - 20, height - 14, 1.4, "#adb4b0", "#e2e7dc") +
    `<g transform="rotate(-90 ${x} ${y})">` + aiMark(x - 56, y + 14, "#f0f0e7", 13) +
    label(x, y - 28, part.part, 16, "#f0f0e7") + label(x + 13, y - 6, "Ai-Thinker", 13, "#f0f0e7") +
    label(x, y + 17, "ISM:803–930MHz", 9, "#f0f0e7") +
    label(x, y + 34, "LoRa/(G)FSK", 9, "#f0f0e7") + "</g>";
}

function sx1281Face(part, component, point, pcbRect, scale) {
  const [left, top, width, height] = pcbRect;
  const pcbAntenna = part.part === "Ra-05";
  const shieldHeight = (part.body[1] - (pcbAntenna ? 6.2 : 0)) * scale - 11;
  const x = left + width / 2, y = top + shieldHeight / 2;
  const metal = rect(left + 8, top + 5, width - 16, shieldHeight, .8, "#aab3af", "#e4e8df");
  const marks = `<g transform="rotate(90 ${x} ${y})">` +
    aiMark(x - 34, y + 26, "#f1f1e7", 11) + label(x + 19, y - 23, part.part, 13, "#f1f1e7") +
    label(x + 15, y - 3, "Ai-Thinker", 9, "#f1f1e7") + label(x + 10, y + 16, "SX1281 / 2.4 GHz", 8.5, "#f1f1e7") + "</g>";
  const antennaTop = top + shieldHeight + 12;
  const antenna = pcbAntenna
    ? path(`M${left + 14} ${top + height - 10}V${antennaTop}H${left + 29}V${top + height - 25}H${left + 45}V${antennaTop}H${left + 62}V${top + height - 25}H${left + 79}V${antennaTop}H${left + 96}V${top + height - 25}H${left + width - 13}`, "none", "#a49d6b", 3)
    : ipex(left + width - 24, top + height - 25, 23);
  return metal + marks + antenna + (pcbAntenna ? rect(left + width - 40, top + shieldHeight - 24, 25, 23, .8, "#26302e", "#c7c9ba") +
    [0, 1, 2].map(index => rect(left + width - 36 + index * 8, top + shieldHeight - 24, 4, 6, .3, "#c9cbb7")).join("") : "");
}

function radio(part) {
  const scale = 10;
  const width = 360, height = Math.ceil(part.body[1] * scale + 105);
  const origin = [width / 2, 42 + part.body[1] * scale / 2];
  const point = ({ x, y }) => [round(origin[0] + x * scale), round(origin[1] + y * scale)];
  const pcbRect = [origin[0] - part.body[0] * scale / 2, 42, part.body[0] * scale, part.body[1] * scale];
  const pins = part.pads.map(({ number, side, ...pad }) => {
    const caption = part.labels[number - 1];
    const [type, detail] = descriptions[caption] ?? ["bidirectional", `${part.chip} configurable digital I/O ${caption}. Configure its event or alternate function in the radio firmware.`];
    const [x, y] = point(pad);
    return { id: `p${number}`, number: String(number), label: caption, type, x, y, edge: side, surface: true,
      description: `${number} — ${["VCC", "3.3V"].includes(caption) ? part.supply : detail}` };
  });
  const grounds = pins.filter(pin => pin.label === "GND").map(pin => pin.id);
  const id = part.part.toLowerCase();
  return {
    component: {
      id, art: id, name: `Ai-Thinker ${part.part} LoRa Module`, shortName: part.part,
      manufacturer: "Ai-Thinker", category: "Wireless modules", referencePrefix: "U", contactLayout: "physical",
      subtitle: `${part.chip} / ${part.band} / SMD-${pins.length}`,
      description: `${part.part}, ${part.revision}. ${part.description} The canvas shows the shield side; physical contacts and illustrated gold pads share the same coordinates. ${part.orientation} Nominal package ${part.body[0]} × ${part.body[1]} × ${part.moduleHeight} mm. Small markings and shield details are representative.`,
      source: part.source, width, height, pins, internalConnections: [grounds],
      tags: ["ai-thinker", "aithinker", part.part.toLowerCase(), part.chip.toLowerCase(), "semtech", "lora", "radio", "rf", "spi", ...part.tags],
    },
    render: (component, showLabels) => {
      const [left, top, pcbWidth, pcbHeight] = pcbRect;
      const face = part.kind === "standard" ? standardFace(part, component, point, pcbRect, scale)
        : part.kind === "compact" ? compactFace(part, component, point, pcbRect) : sx1281Face(part, component, point, pcbRect, scale);
      const pads = part.pads.map((pad, index) => {
        const pin = component.pins[index], leftSide = pad.side === "left";
        const padCenter = pad.antennaHole ? left + 9.5 : pin.x;
        const padWidth = pad.size[0] * scale, padHeight = pad.size[1] * scale;
        const metal = rect(padCenter - padWidth / 2, pin.y - padHeight / 2, padWidth, padHeight, .3, copper, "#ecd69a");
        const hole = pad.antennaHole ? circle(pin.x, pin.y, 4.5, "#2b3029", "#b7a56d")
          : circle(leftSide ? left : left + pcbWidth, pin.y, part.kind === "sx1281" ? 2.7 : 3, "#1d2828");
        const caption = showLabels ? label(pin.x + (leftSide ? -12 : 12), pin.y, `${pin.number} ${pin.label}`, part.kind === "sx1281" ? 6.4 : 7, "#405568", leftSide ? "end" : "start") : "";
        return `<g data-contact="${pin.id}"><title>${escapeText(pin.description)}</title>${metal}${hole}${caption}</g>`;
      }).join("");
      return label(width / 2, 18, part.part, 12, "#405568") + rect(left, top, pcbWidth, pcbHeight, .7, "#1d2828", "#83917e") +
        face + pads + label(width / 2, height - 31, "SHIELD-SIDE TOP VIEW", 7, "#405568") +
        label(width / 2, height - 17, part.kind === "sx1281" ? "Antenna end at bottom" : "Pin 1 at upper left", 6, "#405568");
    },
    footprint: {
      body: part.body, smd: true, modelHeight: .8, color: "#1d2828",
      pads: part.pads.map(({ number, land }) => ({ id: `p${number}`, x: land.x, y: land.y, size: land.size })),
      note: `${part.footprintNote} Top-layer footprint, matching the shield-side canvas orientation. These are host solder lands, separate from the nominal package contact dimensions. Review solder tolerances, antenna clearances and the linked manufacturer design before fabrication.`,
      details: [[0, part.kind === "sx1281" && part.part === "Ra-05" ? -3.1 : 0, part.body[0] - 1.6,
        part.body[1] - (part.kind === "sx1281" && part.part === "Ra-05" ? 7.8 : 1.6), part.moduleHeight - .8, "#aab3af"]],
    },
    model: { label: part.cadLabel ?? `Ai-Thinker ${part.part} manufacturer PCB / symbol CAD`, url: part.cad },
  };
}

const regularSupply = "2.7–3.6 V module supply input, nominal 3.3 V. The manufacturer recommends a supply capable of more than 200 mA. Host I/O must match the module voltage.";
const sharedCad = packaging("PCB_Ra-01S_SC-P.zip");
const classicCad = packaging("PCB_Ra-01_V3.2.zip");
const parts = [
  {
    part: "Ra-01H", chip: "SX1276", band: "803–930 MHz", revision: "specification V1.0 (2019-10-29), Ra-01_V3.2 package reference",
    kind: "standard", body: standardBody, moduleHeight: 3.2, pads: classicPads, labels: classicLabels,
    source: specification("Ra-01H_V1.0%20Specification-20191029.pdf"), cad: classicCad, supply: regularSupply,
    description: "High-band SX1276 transceiver with a soldered external antenna terminal; no fitted IPEX connector. Pin 1 is ANT, not GND.",
    orientation: "Pin 1 is upper-left, mirroring the underside pin diagram in the dedicated datasheet.", tags: ["868", "915", "external antenna", "sx1276"],
    footprintNote: "Manufacturer PCB_Ra-01_V3.2 archive, RA-01H decal: 16 lands at 2 mm pitch, 16.2 mm row spacing and 1.8 × 1.0 mm host lands. Finger offsets place land centers at ±8.1 mm about the 16 mm body center. The dedicated datasheet also illustrates an alternate extended antenna land.",
  },
  {
    part: "Ra-01", chip: "SX1278", band: "410–525 MHz", revision: "product specification V1.1 (2017-12-19), Ra-01_V3.2 package reference",
    kind: "standard", body: standardBody, moduleHeight: 3.2, pads: classicPads, labels: classicLabels,
    source: specification("Ra-01_V1.1%20Specification-20171219.pdf"), cad: classicCad,
    supply: "2.5–3.7 V supply range in the cited V1.1 product specification; nominal 3.3 V. Match host logic to the supply and decouple locally.",
    description: "Low-band SX1278 transceiver with a soldered external antenna terminal, shown in the shielded variant pictured in the manufacturer specification. The manufacturer's Ra-01/Ra-01H shared V3.2 CAD defines the numbered contacts.",
    orientation: "Pin 1 ANT is upper-left; do not substitute the different Ra-02 antenna/ground arrangement.", tags: ["433", "470", "external antenna", "sx1278"],
    footprintNote: "Manufacturer PCB_Ra-01_V3.2 shared Ra-01 / Ra-01H decal: 16 lands at 2 mm pitch, land rows at ±8.1 mm and 1.8 × 1.0 mm host lands. Pin numbers are retained from the archive's matching symbol and RA-01H decal.",
  },
  ...[
    ["Ra-01SC", "410–525 MHz", "V1.1 (2021-03-31)", "Ra-01SC%20Specification-20210331.pdf", ["433", "470"]],
    ["Ra-01SCH", "803–930 MHz", "V1.1.0 (2022-11-10)", "Ra-01SCH_V1.1.0%20Specification-20221110.pdf", ["868", "915"]],
  ].map(([part, band, revision, file, tags]) => ({
    part, chip: "LLCC68", band, revision: `specification ${revision}`, kind: "standard", body: standardBody,
    moduleHeight: 3.2, pads: llccPads, labels: llccLabels, source: specification(file), cad: sharedCad,
    cadLabel: "Ai-Thinker shared Ra-01S/SC-P footprint archive (base-module geometry in datasheet)", supply: regularSupply,
    description: "Base 16-contact module in the default version without an IPEX socket; the manufacturer also offers an IPEX-fitted option with the same contacts. TXEN, RXEN and BUSY replace several SX127x DIO contacts. This is the base module, not the separately documented -P revision.",
    orientation: "Pin 1 ANT is upper-left, mirrored from the underside diagram.", tags: [...tags, "txen", "rxen", "busy", "llcc68"],
    footprintNote: "Reference land pattern from the dedicated module datasheet section 6.2: 2 mm pitch, 1.5358 × 1.0 mm regular lands and a 2.262 × 1.27 mm inboard-extended antenna land. The linked shared CAD archive contains additional -P-specific lands; those are deliberately excluded from this base 16-contact package.",
  })),
  {
    part: "Ra-03SCH", chip: "LLCC68", band: "803–930 MHz", revision: "specification V1.0.1 (2026-04-10)",
    kind: "compact", body: compactBody, moduleHeight: 2.6, pads: compactPads, labels: compactLabels,
    source: specification("Ra-03SCH_V1.0.1%20Specification-20260410A.pdf"), cad: packaging("PCB_Ra-03SCH.zip"), supply: regularSupply,
    description: "14-contact LLCC68 transceiver with a castellated RF terminal and explicit CTL1/CTL2 RF-switch inputs. The six-contact left bank has a gap between SCK and GND; all fourteen contacts retain their individual manufacturer positions.",
    orientation: "Pin 1 MISO is upper-left; pin 14 VCC is upper-right.", tags: ["868", "915", "ctl1", "ctl2", "busy", "llcc68"],
    footprintNote: "Manufacturer PCB_FOOTPRINT_Ra-03SCH.asc, RA-03SCH_SMD14 decal. The 18.4 mm-wide row spacing, asymmetric lower-bank gaps and 2.4 × 1.0 mm host lands are retained from the published CAD.",
  },
  ...[
    ["Ra-05", [15, 24], "Onboard PCB antenna with an unpopulated compatible IPEX position", "pcb antenna"],
    ["Ra-05U", [15, 17.8], "Fitted IPEX socket for an external 2.4 GHz antenna", "ipex"],
  ].map(([part, body, antenna, antennaTag]) => ({
    part, chip: "SX1281", band: "2400–2500 MHz", revision: "specification V1.0.0 (2024-11-14)",
    kind: "sx1281", body, moduleHeight: 3.1, pads: sx1281Pads(body), labels: sx1281Labels,
    source: specification(`${part}%20Specification-20241114.pdf`), cad: packaging(`PCB_${part}.zip`),
    supply: "1.8–3.6 V supply input, nominal 3.3 V. The dedicated datasheet recommends a 3.3 V supply capable of more than 500 mA. Match host I/O voltage and fit local decoupling.",
    description: `${antenna}. Pure RF transceiver with LoRa, FLRC and GFSK modulation and selectable SPI/UART host interfaces; requires a host MCU. No antenna contact is added to its fourteen-contact digital interface.`,
    orientation: "The module is rotated 180° from the front product photo: antenna end at the bottom, pin 1 VCC at upper-left.", tags: ["2.4 ghz", "sx1281", "flrc", "gfsk", "uart", antennaTag],
    footprintNote: "Dedicated datasheet figure 8 host land pattern: 1.27 mm pitch, land rows at ±7.6 mm and 2.8 × 0.8 mm lands. The dimensioned pitch governs pad 10; the Ra-05 ASC archive contains a 0.07 mm coordinate inconsistency at that pad. Antenna end is at the bottom in both native footprint and canvas view.",
  })),
];

export default defineFamily("ai-thinker-ra", parts.map(radio));
