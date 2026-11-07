import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { boardDefinition, contact, ground, header, supply } from "../shared/board.js";

const green = "#3c7f60";
const silk = "#e9ecdf";
const copper = "#b5a16f";
const width = 330;
const height = 370;
const boardLeft = 77;
const boardTop = 30;
const body = [53.34, 63.5];
const artworkScale = 3.3;

const passThrough = (id, caption, description) =>
  contact(id, caption, `Pass-through header contact. ${description}`);
const numbered = (specs, name, first, step) => specs.map((spec, index) =>
  [...spec, `${name}.${first + index * step}`]);

// Connector numbers and radio nets follow Semtech's E498V01A/E499V01B schematics.
// https://shop.richardsonrfpd.com/docs/rfpd/SX1261MB2xAS_e498v01a_sch_layout.pdf
// https://shop.richardsonrfpd.com/docs/rfpd/SX1262MB2xAS_e499v01b_sch_layout.pdf
const digitalLow = [
  passThrough("d0", "D0", "Host UART RX position."),
  passThrough("d1", "D1", "Host UART TX position."),
  passThrough("d2", "D2", "Available for another shield or external circuit."),
  contact("busy", "BUSY", "Radio BUSY output at Arduino D3. Wait for low before issuing an SPI command.", "output"),
  passThrough("d4", "D4", "Available for another shield or external circuit."),
  contact("dio1", "DIO1", "Radio interrupt output at Arduino D5.", "output"),
  passThrough("d6", "D6", "Available for another shield or external circuit."),
  contact("nss", "NSS", "Active-low radio SPI chip select at Arduino D7.", "input"),
];
const digitalHigh = [
  contact("ant-sw", "ANT_SW", "RF-switch select input at Arduino D8. Configure it with the radio's DIO2 according to the Semtech driver.", "input"),
  passThrough("d9", "D9", "Shared with DIO_D9_D10.1."),
  passThrough("d10", "D10", "Shared with DIO_D9_D10.2."),
  contact("mosi", "MOSI", "SPI data from the host into the radio, at Arduino D11.", "input"),
  contact("miso", "MISO", "SPI data from the radio to the host, at Arduino D12.", "output"),
  contact("sck", "SCK", "SPI clock input at Arduino D13.", "input"),
  ground("digital-gnd", "GND"),
  passThrough("aref", "AREF", "Host analog-reference header position."),
  passThrough("sda", "SDA", "Host D14 I²C data, shared with I2C.2. The board has a pull-up to 3.3 V."),
  passThrough("scl", "SCL", "Host D15 I²C clock, shared with I2C.1. The board has a pull-up to 3.3 V."),
];

const power = [
  passThrough("reserved", "NC", "Reserved Arduino power-header position."),
  passThrough("ioref", "IOREF", "Host I/O-reference header position."),
  passThrough("host-reset", "RESET", "Host reset-header position. The radio reset uses A0."),
  supply("3v3", "3V3", "Nominal 3.3 V shield supply input. Shared with I2C.3, DIO_D9_D10.3 and ANA_A5_A6.3."),
  passThrough("5v", "5V", "Host 5 V rail position."),
  ground("power-gnd1", "GND"), ground("power-gnd2", "GND"),
  passThrough("vin", "VIN", "Host VIN rail position."),
];
const analog = [
  contact("nreset", "NRESET", "Active-low radio reset input at Arduino A0.", "input"),
  contact("freq-sel", "FREQ", "A1 resistor strap for frequency-band identification, read by the host.", "passive"),
  contact("device-sel", "DEVICE", "A2 resistor strap for SX1261/SX1262 board identification, read by the host.", "passive"),
  contact("xtal-sel", "XTAL", "A3 board clock-identification strap. These revisions use a 32 MHz crystal.", "passive"),
  passThrough("a5", "A5", "Board net A5 at the Arduino A4 position, shared with ANA_A5_A6.1."),
  passThrough("a6", "A6", "Board net A6 at the Arduino A5 position, shared with ANA_A5_A6.2."),
];
const headers = [
  header("J1", "left", 70, digitalLow, { x: -24.13, y: -15.494 }, 15),
  header("J2", "left", 200, digitalHigh, { x: -24.13, y: 6.35 }, 15),
  header("J4", "right", 70, numbered([...analog].reverse(), "J4", 6, -1), { x: 24.13, y: -15.494 }, 15),
  header("J3", "right", 180, numbered([...power].reverse(), "J3", 8, -1), { x: 24.13, y: 2.286 }, 15),
];

// Sensor header coordinates are reference positions inferred from the front photo.
// Each land reuses the main-header terminal number of its electrically shared net.
const sensorHeaders = [
  { name: "I2C", center: 13, ids: ["scl", "sda", "3v3", "digital-gnd"] },
  { name: "DIO_D9_D10", center: 26, ids: ["d9", "d10", "3v3", "digital-gnd"] },
  { name: "ANA_A5_A6", center: 39, ids: ["a5", "a6", "3v3", "digital-gnd"] },
];

function padPoint(pad) {
  return [boardLeft + (pad.x + body[0] / 2) * artworkScale, boardTop + (pad.y + body[1] / 2) * artworkScale];
}

function passivePart(x, y, vertical = false) {
  return `<g transform="translate(${x} ${y})${vertical ? " rotate(90)" : ""}">` +
    rect(-2.5, -1.3, 5, 2.6, 0.35, "#b0b8ac") + rect(-1.6, -1.4, 3.2, 2.8, 0.2, "#a39066") + "</g>";
}

function grovePads(x, caption) {
  const y = boardTop + body[1] * artworkScale - 12;
  return rect(x - 17, y - 6, 34, 13, 0.8, "none", "#c0d3bd") +
    [0, 1, 2, 3].map(index => circle(x - 10.5 + index * 7, y, 2.6, copper) +
      circle(x - 10.5 + index * 7, y, 1.4, "#294e43")).join("") +
    label(x, y - 10, caption, 5.5, silk);
}

function shieldArtwork(revision, chipName, band) {
  const right = boardLeft + body[0] * artworkScale;
  const bottom = boardTop + body[1] * artworkScale;
  const centerX = (boardLeft + right) / 2;
  const outline = `M${boardLeft} ${bottom}V${boardTop + 34}Q${boardLeft} ${boardTop} ${boardLeft + 34} ${boardTop}H${right - 34}Q${right} ${boardTop} ${right} ${boardTop + 34}V${bottom}Z`;
  const matching = [[165, 88], [172, 98], [181, 105], [178, 116], [189, 113], [190, 122], [160, 128], [155, 140],
    [190, 138], [194, 149], [168, 151], [170, 162], [186, 158], [200, 160], [204, 145]].map(([x, y], index) =>
    passivePart(x, y, index % 3 === 0)).join("");
  const qfn = [0, 1, 2, 3, 4, 5].map(index => {
    const offset = 2 + index * 1.75;
    return line(166 + offset, 127, 166 + offset, 130, "#aab5aa", 1.1) +
      line(166 + offset, 143, 166 + offset, 146, "#aab5aa", 1.1) +
      line(163, 130 + offset, 166, 130 + offset, "#aab5aa", 1.1) +
      line(179, 130 + offset, 182, 130 + offset, "#aab5aa", 1.1);
  }).join("");
  const sma = rect(centerX - 11, boardTop - 10, 22, 21, 1.2, "#b6a46e", "#e5d4a0") +
    rect(centerX - 8.8, boardTop - 24, 17.6, 17, 1, "#baa369", "#dec791") +
    [-20, -17, -14, -11].map(y => line(centerX - 8.5, boardTop + y, centerX + 8.5, boardTop + y, "#786739", 1)).join("") +
    rect(centerX - 2.2, boardTop + 9, 4.4, 8, 0.6, "#c3bb92", "#e4dfbe");
  return path(outline, "#253d35", "#253d35") + path(outline, green, "#9cbea1") +
    path("M147 81H203V174H147V81M141 78H146M203 78H209V84M209 169V175H203M146 175H140V169",
      "none", "#b9cfb5", 1) +
    path("M176 47V77L169 84V91M174 49V73L166 81V90M193 119H206V131M193 123H202V134",
      "none", "#70a786", 1.2) +
    sma + qfn + rect(166, 130, 13, 13, 1, "#222e31", "#b8c4bc") +
    circle(168.5, 132.5, 0.65, "#9ba99d") + label(172.5, 137, chipName.slice(2), 3.2, "#b1c0b5") +
    rect(155, 115, 10, 7, 0.6, "#a6b8b0", "#d1d7ce") +
    line(156, 118, 164, 118, "#647a6c", 0.65) +
    rect(187, 118, 7, 5.5, 0.7, "#24332e", "#9db2a1") + matching +
    label(172, 102, "U2", 4.5, silk) + label(183, 148, "U1", 4.5, silk) +
    label(centerX, 68, "PCB_" + revision, 6.5, silk) +
    label(centerX, 77, band + " MHz", 6.5, silk) +
    label(179, 190, "LoRa", 20, silk) +
    path("M163 179q-9 7-9 15M158 175q-14 11-14 21M199 179q9 7 9 15M204 175q14 11 14 21", "none", silk, 1) +
    label(centerX, 205, "SEMTECH", 12, silk) +
    `<g transform="rotate(-90 204 132)">${label(204, 132, "mbed", 16, silk)}</g>` +
    grovePads(123, "I2C") + grovePads(168, "D9 / D10") + grovePads(213, "A5 / A6") +
    [85, 91, 97].map((x, index) => circle(x + 30, 82, 2, copper) +
      circle(x + 30, 82, 0.85, "#314f40") + label(x + 30, 89, ["FR0", "FR1", "XTAL"][index], 3.9, silk)).join("");
}

function shield(revision, chipName, sku, band, cadUrl) {
  const id = "semtech-" + sku.toLowerCase();
  const definition = boardDefinition({
    id, art: id, name: `Semtech ${sku} LoRa Shield`, shortName: sku, category: "Wireless modules",
    manufacturer: "Semtech", referencePrefix: "U", subtitle: `${chipName} / ${band} MHz / ${revision}`,
    description: `Semtech ${revision} Arduino-format mbed shield with a ${chipName}, 32 MHz crystal and SMA antenna connector. The canvas exposes all 32 main-header contacts, including the host pass-through positions. Board outline and small-part placement are representative.`,
    tags: ["semtech", chipName.toLowerCase(), sku.toLowerCase(), "lora", "shield", "mbed", "arduino", "spi", String(band)],
    source: `https://www.semtech.com/products/wireless-rf/lora-connect/${sku.toLowerCase()}`,
    width, height,
  }, headers, {
    body, color: green,
    note: "Reference carrier for the four Arduino-format main headers, using the standard 2.54 mm pitch and offset digital bank. The 53.34 × 63.5 mm envelope and 2 mm sensor-header positions are reference approximations from the manufacturer photo. Auxiliary pads repeat the shared main-header electrical terminal numbers. Check the Semtech assembly drawing, stacking direction, SMA overhang and sensor connectors for the actual board.",
    details: [[2, -4, 4, 4, 1, "#26332d"], [0, -33, 7, 11, 8, "#b8a36c"]],
  }, () => "", physical => { const [x, y] = padPoint(physical); return { x, y }; });
  definition.footprint.pads.push(...sensorHeaders.flatMap(({ center, ids }) => ids.map((id, index) => ({
    id, x: center - 3 + index * 2 - body[0] / 2, y: 28.1, size: 1.6, drill: 0.8, shape: "circle",
  }))));
  const art = (component, showLabels = true) => {
    const terminalBanks = component.pins.map((pin, index) => {
      const pad = definition.footprint.pads[index];
      const [px, py] = padPoint(pad);
      const left = pin.edge === "left";
      const captionX = px + (left ? 7 : -7);
      return rect(px - 3.8, py - 3.8, 7.6, 7.6, 0.9, "#244239", "#5f9070") +
        circle(px, py, 2, "#d7c891") +
        circle(px, py, 0.9, "#18382c") +
        (showLabels ? label(captionX, py, pin.label, 6.2, silk, left ? "start" : "end") : "");
    }).join("");
    return shieldArtwork(revision, chipName, band) + terminalBanks;
  };
  return { ...definition, art, model: { label: "Semtech shield reference design CAD archive", url: cadUrl } };
}

const entries = [
  shield("E498V01A", "SX1261", "SX1261MB2BAS", 868,
    "https://semtech.my.salesforce.com/sfc/p/E0000000JelG/a/RQ000001HR6T/7Jx_ir3w1JlxYNAbr1X6dgRJ29D313nxsjuDulagGyk"),
  shield("E499V01B", "SX1262", "SX1262MB2CAS", 915,
    "https://semtech.my.salesforce.com/sfc/p/E0000000JelG/a/RQ000001HFzo/5mxzt1.7.iPUW5NFM7eGKvzNM20UXHAvdJu8mSbv9xs"),
];

const semtechReadyComponents = entries.map(({ component }) => component);
const semtechReadyArt = Object.fromEntries(entries.map(({ component, art }) => [component.id, art]));
const semtechReadyFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const semtechReadyModels = Object.fromEntries(entries.map(({ component, model }) => [component.id, model]));

export default defineFamily("semtech-ready", (semtechReadyComponents).map(component => ({ component, render: (semtechReadyArt)[component.art], footprint: (semtechReadyFootprints)[component.id], model: semtechReadyModels[component.id] })));
