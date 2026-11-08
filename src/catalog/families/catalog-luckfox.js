import { somTables, vendorPads } from "../data/luckfox/som-contact-maps.js";
import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { miniComputingMounting } from "../shared/mini-computing-mounting.js";

const wiki = "https://wiki.luckfox.com/";
const github = "https://github.com/LuckfoxTECH/";
const raw = "https://raw.githubusercontent.com/LuckfoxTECH/";
const gold = "#cfac62";
const silk = "#f0efe4";
const silver = "#bac2c3";
const boards = [];
const gpio = value => value.replace(/^GPIO/, "").replace(/_[udz]$/, "");

// Main connector numbering follows the manufacturer component-side pinout diagrams.
// Raw SOM tables below retain every manufacturer terminal, including NC and reserved contacts.
function signal(name, note = "", domain = "3.3 V") {
  if (/^\d_[A-D]\d$/.test(name)) name = `GPIO${name}`;
  let type = "bidirectional";
  let description = `${name}. ${domain} domain. ${note}`.trim();
  if (/^(GND|AGND|SGND)$/.test(name)) { type = "power_in"; description = "Common supply and signal ground."; }
  else if (/^(NC|Reserved)$/.test(name)) { type = "no_connect"; description = "Reserved or unconnected manufacturer terminal; leave open."; }
  else if (/^(3V3|1V8|3V3_OUT|1V8_OUT|VCC_3V3|VCC_1V8|CORE_)/.test(name)) { type = "power_out"; description = `${name} regulated supply output. ${note}`.trim(); }
  else if (/^(5V|VBUS|VSYS|VIN|VCC5V|RTC_BAT)/.test(name)) { type = "passive"; description = `${name} supply connection. ${note}`.trim(); }
  else if (/EN$|RESET|NPOR|RUN|SARADC|ADC_IN|MIC[PN]|MICP|MICN|MIC_BIAS/.test(name)) type = /BIAS/.test(name) ? "power_out" : "input";
  return { label: name.replace(/_OUT$/, ""), type, description };
}

function contacts(names, connector, positions, extra = {}) {
  return names.map((name, index) => {
    const number = extra.numbers?.[index] ?? `${connector}.${index + 1}`;
    const [x, y] = positions(index);
    const entry = typeof name === "string" ? signal(name, extra.note ?? "", /ADC|SARADC|MIC/.test(name) ? "1.8 V analog" : "3.3 V") : name;
    return { ...entry, id: number.toLowerCase().replace(/[^a-z0-9]+/g, "-"), number: String(number), x, y,
      size: extra.size ?? 1.7, drill: extra.drill ?? 1, smd: extra.smd ?? false };
  });
}

function perimeter40(names, length = 51, width = 21) {
  return contacts(names, "GPIO", index => index < 20
    ? [1.61, 1.37 + index * 2.54]
    : [width - 1.61, 1.37 + (39 - index) * 2.54], { numbers: names.map((_, index) => String(index + 1)) });
}
function doubleHeader(names, connector, x, y, direction = "y", reverse = false) {
  return contacts(names, connector, index => direction === "y"
    ? [x + (reverse ? 1 - index % 2 : index % 2) * 2.54, y + Math.floor(index / 2) * 2.54]
    : [x + Math.floor(index / 2) * 2.54, y + (index % 2 === 0 ? 2.54 : 0)]);
}
function piHeader(names, width = 85) { return doubleHeader(names, "GPIO", width > 75 ? 7.0 : 3.0, 2.5, width > 75 ? "x" : "y"); }
function socket(connector, names, x, y, pitch = 1.25) {
  return contacts(names, connector, index => [x + index * pitch, y], { size: 1.3, drill: .6 });
}
const speaker = (positive, note = "") => ({ label: positive ? "SPK+" : "SPK-", type: "output", description: `Differential amplified speaker ${positive ? "positive" : "negative"} output. Neither side may be grounded. ${note}`.trim() });
function poe(connector, names, x, y, single = false) {
  const specs = names.map(name => /^VC|^CT/.test(name) ? { label: name, type: "passive", description: `Raw Ethernet transformer center-tap ${name} for a suitable isolated PoE module. This is not a regulated low-voltage supply.` } : signal(name));
  return single ? contacts(specs, connector, i => [x, y + i * 2.54]) : doubleHeader(specs, connector, x, y);
}
function cad(repo, file, description = "manufacturer hardware resources") {
  return { label: `Luckfox ${description}`, url: `${github}${repo}/tree/main/Hardware${file ? `/${file}` : ""}` };
}
const picoCad = cad("Luckfox-Pico-docs", "3D%20Models/Luckfox-Pico-Step.zip", "Pico STEP archive");
const lyraCad = cad("Luckfox-Lyra-docs", "3D%20Models/Lucfox-Lyra-step.zip", "Lyra STEP archive");
const carrierNote = "Reference carrier for the listed expansion/control contacts. Header pitch is 2.54 mm; connector placement and component clearances are approximate. Complete USB, Ethernet, HDMI, MIPI/FFC, SD and PCIe/M.2 interfaces are illustrated as cable ports, not raw GPIO. Check the fitted board revision against the linked manufacturer CAD before fabrication.";

function add(board) {
  for (const pin of board.contacts) {
    const analog = (/^RV110[36]/.test(board.soc) && /^GPIO4_C[01]$/.test(pin.label)) ||
      (/^RK3506/.test(board.soc) && /^GPIO4_B[23]$/.test(pin.label));
    if (analog) pin.description = `${pin.label}: 1.8 V GPIO / SARADC input domain. ADC use must remain within 0–1.8 V; select the documented multiplexed function.`;
  }
  const display = physicalView(board);
  const scale = Math.min(8, 620 / Math.max(display.width, display.height));
  const margin = 16;
  const width = Math.ceil(display.width * scale + margin * 2);
  const height = Math.ceil(display.height * scale + margin * 2 + 18);
  const pins = board.contacts.map(pin => ({
    id: pin.id, number: pin.number, label: pin.label, type: pin.type,
    description: `${pin.description} Physical terminal ${pin.number}. ${pin.viewNote ?? "Component-side contact view."}`,
    x: Number((margin + pin.vx * scale).toFixed(4)), y: Number((margin + pin.vy * scale).toFixed(4)), surface: true,
  }));
  board.display = display;
  board.margin = margin;
  board.component = {
    id: board.id, art: board.id, name: `Luckfox ${board.name}`, shortName: board.shortName ?? board.name,
    subtitle: board.subtitle, category: board.som ? "Compute modules" : "Single-board computers", manufacturer: "Luckfox",
    description: `${board.description} ${board.som ? "Every documented module terminal is exposed." : "The documented expansion and control contacts are available for wiring; other ports use complete cables."} The linked published hardware reference identifies the contact map. ${board.key === "core3566" ? "Underside geometry and orientation follow the manufacturer core3566_v1_2 mechanical CAD drawing." : "A separate PCB revision is not marked in the public product table."}`,
    source: wiki + board.source, tags: ["luckfox", "linux", board.soc.toLowerCase(), ...(board.tags ?? []), board.name.toLowerCase()],
    referencePrefix: "U", contactLayout: "physical", width, height, pins,
  };
  board.scale = scale;
  boards.push(board);
}

const picoLeft = ["1_B2", "1_B3", "GND", "1_C7", "1_C6", "1_C5", "1_C4", "GND", "1_D2", "1_D3", "1_A2", "1_C0", "GND", "1_C1", "1_C2", "1_C3", "0_A4", "GND", "1_D0", "1_D1"];
const picoTail = ["4_B1", "4_B0", "GND", "4_A6", "4_A2", "4_A3", "4_A4", "GND", "NC", "NC", "4_C0", "4_C1", "GND", "NC", "NC", "3V3_OUT", "3V3_EN", "GND", "VSYS", "VBUS"];
const plusTail = ["3_A6", "3_A7", "GND", "3_A5", "3_A4", "3_A2", "3_A3", "GND", "3_A1", "NC", "4_C0", "4_C1", "GND", "NC", "NC", "3V3_OUT", "3V3_EN", "GND", "VSYS", "VBUS"];
const proLeft = [...picoLeft]; proLeft[10] = "2_B1"; proLeft[16] = "2_B0";
const proTail = ["2_A4", "2_A5", "GND", "2_A0", "2_A1", "2_A2", "2_A3", "GND", "2_A6", "RESET", "4_C0", "4_C1", "GND", "2_A7", "NC", "3V3_OUT", "3V3_EN", "GND", "VSYS", "VBUS"];
const miniSignals = ["VBUS", "GND", "3V3_OUT", "1_B2", "1_B3", "1_C0", "1_C1", "1_C2", "1_C3", "1_C4", "1_C5", "1_D0", "1_D1", "1_D2", "1_D3", "1_C6", "1_C7", "0_A4", "4_C0", "4_C1", "GND", "1V8_OUT"];
const ethernetPads = (y, width = 21) => contacts(["RXN", "RXP", "GND", "TXN", "TXP"].map(name => ({ label: name, type: name === "GND" ? "power_in" : "passive", description: name === "GND" ? "Common ground." : `100 Mb/s Ethernet PHY ${name}. Requires the appropriate external transformer/MagJack interface.` })), "ETH", index => [width / 2 - 4 + index * 2, y], { size: 1.5, drill: .7 });

add({ id: "luckfox-pico", name: "Pico", soc: "RV1103", subtitle: "RV1103 / 64 MB / TF boot", source: "Luckfox-Pico/Luckfox-Pico-RV1103",
  description: "Original blue Pico board with 64 MB DDR2, CSI camera connector, USB-C, TF boot and Ethernet PHY pads.", body: [21, 51], color: "#245477", shape: "pico", contacts: [...perimeter40([...picoLeft, ...picoTail]), ...ethernetPads(51)], cad: picoCad });
for (const variant of ["A", "B"]) add({ id: `luckfox-pico-mini-${variant.toLowerCase()}`, name: `Pico Mini ${variant}`, soc: "RV1103", subtitle: `RV1103 / 64 MB / ${variant === "A" ? "TF boot" : "128 MB NAND"}`, source: "Luckfox-Pico/Luckfox-Pico-RV1103",
  description: `Compact Mini ${variant} board with 64 MB DDR2, CSI, USB-C and 22 edge contacts. ${variant === "A" ? "TF-card boot variant." : "128 MB SPI NAND variant."}`, body: [21, 28], shape: "mini", contacts: [...contacts(miniSignals, "H2", index => index < 11 ? [1.5, 1.3 + index * 2.54] : [19.5, 1.3 + (21 - index) * 2.54], { numbers: miniSignals.map((_, i) => String(i + 1)) }), ...ethernetPads(28)], cad: picoCad });
add({ id: "luckfox-pico-plus", name: "Pico Plus", soc: "RV1103", subtitle: "RV1103 / 128 MB NAND / Ethernet", source: "Luckfox-Pico/Luckfox-Pico-RV1103",
  description: "Pico Plus with 64 MB DDR2, 128 MB SPI NAND, 100 Mb/s Ethernet, CSI and microSD expansion.", body: [21, 70], shape: "pico-ethernet", contacts: perimeter40([...picoLeft, ...plusTail], 70), cad: picoCad });
for (const [name, soc, memory] of [["Pro", "RV1106G2", 128], ["Max", "RV1106G3", 256]]) add({ id: `luckfox-pico-${name.toLowerCase()}`, name: `Pico ${name}`, soc, subtitle: `${soc} / ${memory} MB / 256 MB NAND`, source: "Luckfox-Pico-Pro-Max",
  description: `Pico ${name} with ${memory} MB DDR3L, 256 MB SPI NAND, CSI, microSD and 100 Mb/s Ethernet. Manufacturer confirms Pro and Max share the board layout and interfaces.`, body: [21, 70], shape: "pico-ethernet", contacts: perimeter40([...proLeft, ...proTail], 70), cad: picoCad });

const ultraP1 = ["3V3_OUT", "5V", "1_A0", "5V", "1_A1", "GND", "1_B0", "1_B2", "GND", "1_B3", "1_B1", "1_C6", "1_D0", "GND", "1_D1", "2_A7", "3V3_OUT", "2_A6", "1_C2", "GND", "1_C3", "1_D3", "1_C1", "1_C0", "GND", "1_D2"];
const ultraP2 = ["5V", "1V8_OUT", "GND", "GND", "3V3_OUT", "4_C0", "GND", "4_C1", "1_C4", "MICBIAS", "1_C5", "MIC1P", "2_A1", "MIC1N", "2_A0", "GND", "2_A5", "1_C7", "2_A4", "2_B0", "2_A2", "2_B1", "2_A3", "GND", "GND", "GND"];
const ultraContacts = () => [...doubleHeader(ultraP1, "P1", 2.5, 6), ...doubleHeader(ultraP2, "P2", 45, 6), ...socket("H4", [speaker(false), speaker(true)], 4.2, 36), ...poe("P4", ["CT12", "CT36", "CT45", "CT78"], 35, 6)];
for (const [suffix, soc, memory, wireless] of [["", "RV1106G3", 256, false], [" W", "RV1106G3", 256, true], [" B", "RV1106G2", 128, false], [" BW", "RV1106G2", 128, true]]) add({
  id: `luckfox-pico-ultra${suffix ? `-${suffix.trim().toLowerCase()}` : ""}`, name: `Pico Ultra${suffix}`, soc, subtitle: `${soc} / ${memory} MB / 8 GB eMMC`, source: "Luckfox-Pico-Ultra", description: `${memory} MB DDR3L, 8 GB eMMC, Ethernet/PoE, RGB display, CSI and speaker connector.${wireless ? " Wi-Fi 6 and Bluetooth 5.2 variant." : " Wired variant."} Both 26-pin headers are exposed, including the 1.8 V ADC and microphone contacts.`, body: [50, 50], shape: "ultra", wireless, contacts: ultraContacts(), cad: picoCad });

const picoPi = ["3V3_OUT", "5V", "1_A1", "5V", "1_A0", "GND", "1_B0", "1_B2", "GND", "1_B3", "1_B1", "1_C6", "1_D0", "GND", "1_D1", "2_A7", "3V3_OUT", "2_A6", "1_C2", "GND", "1_C3", "1_D3", "1_C1", "1_C0", "GND", "1_D2", "2_B1", "2_B0", "3_D2", "GND", "3_D1", "1_C5", "1_C4", "GND", "0_A1", "1_C7", "0_A0", "3_D3", "GND", "4_C1"];
const zeroPins = [...picoPi]; zeroPins[37] = "0_A3"; zeroPins[39] = "0_A4";
for (const [suffix, soc, memory, wireless] of [["A", "RV1106G3", 256, false], ["A W", "RV1106G3", 256, true], ["B", "RV1106G2", 128, false], ["B W", "RV1106G2", 128, true]]) add({ id: `luckfox-pico-pi-${suffix.toLowerCase().replaceAll(" ", "-")}`, name: `Pico Pi ${suffix}`, soc, subtitle: `${soc} / ${memory} MB / 8 GB eMMC`, source: "Luckfox-Pico-Pi", description: `Pi-layout Core1106 carrier with ${memory} MB DDR3L, 8 GB eMMC, four USB Host ports, Ethernet/PoE and M.2 4G slot.${wireless ? " Wi-Fi 6 / Bluetooth 5.2 fitted." : " No Wi-Fi module fitted."} GPIO numbering is the Luckfox RV1106 map.`, body: [85, 56], shape: "pi", wireless, contacts: [...piHeader(picoPi), ...socket("H3", [signal("RTC_BAT", "External RTC battery positive."), signal("GND")], 16, 48), ...socket("H4", [signal("MIC1P"), signal("MIC1N")], 59, 49), ...poe("P1", ["CT12", "CT36", "CT45", "CT78"], 59, 8)], cad: picoCad });
add({ id: "luckfox-pico-zero", name: "Pico Zero", soc: "RV1106G3", subtitle: "RV1106G3 / 256 MB / Wi-Fi 6", source: "Luckfox-Pico-Zero", description: "65 × 30 mm board with 8 GB eMMC, Wi-Fi 6, Bluetooth 5.2, CSI and speaker connector. GPIO header pins 38/40 are GPIO0_A3/GPIO0_A4, unlike the Pico Pi map.", body: [30, 65], shape: "zero", wireless: true, contacts: [...piHeader(zeroPins, 30), ...socket("H3", [speaker(false), speaker(true)], 3, 54)], cad: picoCad });

const lyraClassic = ["0_C6", "0_C7", "GND", "0_B4", "0_B5", "0_A0", "0_A1", "GND", "0_B3", "0_B2", "0_B1", "0_B0", "GND", "0_A7", "0_A6", "0_A5", "0_A4", "GND", "0_A3", "0_A2", "1_D3", "1_D2", "GND", "1_D1", "1_C3", "1_C2", "1_B3", "GND", "1_B2", "RESET", "4_B2", "4_B3", "GND", "1_B1", "NC", "3V3_OUT", "3V3_EN", "GND", "VSYS", "VBUS"];
const lyraPlus = ["0_C6", "VBUS", "0_C7", "VSYS", "GND", "GND", "0_B4", "3V3_EN", "0_B5", "3V3_OUT", "0_A0", "NC", "0_A1", "1_B1", "GND", "GND", "0_B3", "4_B3", "0_B2", "4_B2", "0_B1", "RESET", "0_B0", "1_B2", "GND", "GND", "0_A7", "1_B3", "0_A6", "1_C2", "0_A5", "1_C3", "0_A4", "1_D1", "GND", "GND", "0_A3", "1_D2", "0_A2", "1_D3"];
for (const variant of ["", " B"]) add({ id: `luckfox-lyra${variant ? "-b" : ""}`, name: `Lyra${variant}`, soc: "RK3506G2", subtitle: `RK3506G2 / 128 MB / ${variant ? "256 MB NAND" : "TF boot"}`, source: "Luckfox-Lyra/Luckfox-Lyra", description: `Triple Cortex-A7 plus Cortex-M0 board with 128 MB DDR3, MIPI DSI, two USB OTG interfaces and 24 RM_IO signals. ${variant ? "B includes 256 MB SPI NAND." : "Standard Lyra boots from TF card."} RM_IO multiplexing is configured by the firmware.`, body: [21, 51], shape: "lyra", contacts: perimeter40(lyraClassic), cad: lyraCad });
add({ id: "luckfox-lyra-plus", name: "Lyra Plus", soc: "RK3506G2", subtitle: "RK3506G2 / 128 MB / Ethernet", source: "Luckfox-Lyra/Luckfox-Lyra-Plus", description: "Lyra Plus adds 100 Mb/s Ethernet to the 128 MB RK3506G2 platform with 256 MB NAND and MIPI DSI. Expansion numbering follows the manufacturer's odd/even component-side GPIO diagram, which differs from Lyra/Lyra B.", body: [21, 70], shape: "lyra-plus", contacts: doubleHeader(lyraPlus, "GPIO", 1.61, 1.37).map((c, i) => ({ ...c, number: String(i + 1), id: `pin-${i + 1}`, x: i % 2 ? 19.39 : 1.61 })), cad: lyraCad });
const lyraP1 = ["3V3_OUT", "VSYS", "0_A0", "VSYS", "0_A1", "GND", "0_A2", "0_C6", "GND", "0_C7", "0_A3", "0_B6", "0_A4", "GND", "0_A5", "0_B5", "3V3_OUT", "0_B4", "0_A6", "GND", "0_A7", "0_B3", "0_B0", "0_B2", "GND", "0_B1"];
const lyraP2 = ["VSYS", "1V8_OUT", "GND", "GND", "3V3_OUT", "4_B3", "GND", "4_B2", "1_B1", "GND", "1_B2", "0_C0", "1_B3", "2_B7", "1_C2", "2_B6", "1_C3", "GND", "1_D1", "0_C1", "1_D2", "0_C2", "1_D3", "0_C4", "GND", "GND"];
for (const wireless of [false, true]) add({ id: `luckfox-lyra-ultra${wireless ? "-w" : ""}`, name: `Lyra Ultra${wireless ? " W" : ""}`, soc: "RK3506B", subtitle: "RK3506B / 512 MB / 8 GB eMMC", source: "Luckfox-Lyra/Luckfox-Lyra-Ultra", description: `512 MB DDR3, 8 GB eMMC, MIPI DSI, Ethernet and two complete 26-pin expansion headers.${wireless ? " Ultra W includes Wi-Fi 6 / Bluetooth 5.2 and a USB hub." : " Ultra has two USB OTG interfaces."} RM_IO capabilities are firmware selected.`, body: [50, 50], shape: "lyra-ultra", wireless, contacts: [...doubleHeader(lyraP1, "P1", 2.5, 6), ...doubleHeader(lyraP2, "P2", 45, 6), ...socket("J3", [speaker(false), speaker(true)], 4.2, 36, 2), ...poe("P3", ["CT12", "CT36", "CT45", "CT78"], 35, 6)], cad: lyraCad });
const lyraPi = ["3V3_OUT", "VSYS", "0_A0", "VSYS", "0_A1", "GND", "0_A2", "0_C6", "GND", "0_C7", "0_A3", "0_B6", "0_A4", "GND", "0_A5", "0_B5", "3V3_OUT", "0_B4", "0_A6", "GND", "0_A7", "0_B3", "0_B0", "0_B2", "GND", "0_B1", "1_B1", "1_D3", "1_B2", "GND", "1_B3", "1_D2", "1_C2", "GND", "1_A1", "1_A5", "1_A2", "1_A4", "GND", "1_A3"];
const lyraZero = [...lyraPi]; lyraZero[34] = "0_C0"; lyraZero[35] = "0_C1"; lyraZero[36] = "1_C3"; lyraZero[37] = "0_C2"; lyraZero[39] = "0_C4";
for (const [suffix, storage, wireless] of [["A", "8 GB eMMC", false], ["A W", "8 GB eMMC", true], ["B", "TF boot", false], ["B W", "TF boot", true]]) add({ id: `luckfox-lyra-pi-${suffix.toLowerCase().replaceAll(" ", "-")}`, name: `Lyra Pi ${suffix}`, soc: "RK3506B", subtitle: `RK3506B / 512 MB / ${storage}`, source: "Luckfox-Lyra/Luckfox-Lyra-Pi", description: `512 MB DDR3 RK3506B carrier, ${storage}, dual 100 Mb/s Ethernet, MIPI DSI, USB OTG and three USB Host ports.${wireless ? " Wi-Fi 6 / Bluetooth 5.2 fitted." : " Wired variant."} Uses the manufacturer Lyra RM_IO map, not Raspberry Pi BCM numbering.`, body: [85, 56], shape: "lyra-pi", wireless, contacts: [...piHeader(lyraPi), ...poe("P1", ["CT12", "CT36", "CT45", "CT78"], 59, 8)], cad: lyraCad });
add({ id: "luckfox-lyra-zero-w", name: "Lyra Zero W", soc: "RK3506B", subtitle: "RK3506B / 512 MB / Wi-Fi 6", source: "Luckfox-Lyra/Luckfox-Lyra-Zero-W", description: "512 MB DDR3, 256 MB NAND, Wi-Fi 6, Bluetooth 5.2, 28 RM_IO signals, MIPI DSI and USB hub. The Zero W GPIO map differs from Lyra Pi at pins 35–40.", body: [30, 65], shape: "lyra-zero", wireless: true, contacts: piHeader(lyraZero, 30), cad: lyraCad });

const novaP1 = ["3V3_OUT", "5V", "0_B3", "5V", "0_B4", "GND", "1_A0", "4_B1", "GND", "4_B0", "0_C1", "0_B6", "0_C2", "GND", "3_B4", "0_B7", "3V3_OUT", "0_C0", "1_C7", "GND", "1_C6", "3_B2", "1_D0", "1_D1", "GND", "3_B5"];
const novaP2 = ["5V", "1V8_OUT", "GND", "GND", "3V3_OUT", "ADC_IN0", "GND", "ADC_IN1", "2_A4", "ADC_IN2", "2_A5", "ADC_IN3", "2_A6", "ADC_IN4", "2_A7", "ADC_IN5", "2_B0", "GND", "2_B1", "2_B5", "2_B2", "2_B6", "2_B3", "2_B7", "2_B4", "2_C0"];
for (const wireless of [false, true]) add({ id: `luckfox-nova${wireless ? "-w" : ""}`, name: `Nova${wireless ? " W" : ""}`, soc: "RK3308B", subtitle: "RK3308B / 512 MB / 8 GB eMMC", source: "Luckfox-Nova", description: `Quad Cortex-A35 board with 512 MB DDR3L, 8 GB eMMC, 100 Mb/s Ethernet/PoE, USB Host/Device and audio expansion. Both 26-pin headers include all digital and six analog audio inputs.${wireless ? " Wi-Fi 6 and Bluetooth 5.2 variant." : " Wired variant."}`, body: [50, 50], shape: "nova", wireless, contacts: [...doubleHeader(novaP1, "P1", 2.5, 6), ...doubleHeader(novaP2, "P2", 45, 6), ...socket("SPK", [{ label: "SPK1", type: "output", description: "Speaker connector contact 1. Differential amplified output; do not connect to ground. Polarity is not marked in the published pinout." }, { label: "SPK2", type: "output", description: "Speaker connector contact 2. Differential amplified output; do not connect to ground. Polarity is not marked in the published pinout." }], 4.2, 36)], cad: { label: "Luckfox Nova official hardware resource folder", url: "https://drive.google.com/drive/folders/1ikwM_mQpvX2fzubOjj96-vF7kGqyzQxw" } });
const auraPins = ["3V3_OUT", "5V", "0_D1", "5V", "0_D0", "GND", "5_B4", "5_A2", "GND", "5_A3", "5_C2", "5_C5", "5_C3", "GND", "5_C4", "5_C6", "3V3_OUT", "5_C7", "5_D2", "GND", "5_D3", "5_B6", "5_D1", "5_D0", "GND", "5_B7", "5_A7", "5_A1", "5_B5", "GND", "5_B2", "5_B0", "5_B1", "GND", "5_A5", "5_A0", "5_B3", "5_A4", "GND", "5_A6"];
add({ id: "luckfox-aura", name: "Aura", soc: "RV1126B", subtitle: "RV1126B / 1–4 GB / Wi-Fi 6", source: "Luckfox-Aura/Introduction", description: "85 × 56 mm RV1126B board. Same GPIO map for Aura-01000 (1 GB/TF), -02000 (2 GB/TF), -04000 (4 GB/TF), -01008 (1 GB/8 GB eMMC), -02064 (2 GB/64 GB) and -04064 (4 GB/64 GB). Dual-band Wi-Fi 6, Bluetooth 5.4, Gigabit Ethernet, four USB Host ports and two CSI connectors. All 40 GPIO contacts, debug connector, RTC and the underside 10-contact SARADC FFC are exposed.", tags: ["01000", "02000", "04000", "01008", "02064", "04064"], body: [85, 56], shape: "aura", wireless: true, contacts: [...piHeader(auraPins), ...socket("RTC", [signal("RTC_BAT"), signal("GND")], 34, 43), ...socket("H6", [signal("0_B4", "Debug connector signal, series 510-ohm resistor."), signal("GND"), signal("0_B3", "Debug connector signal, series 510-ohm resistor.")], 35, 50, 1), ...contacts([signal("3V3_OUT"), signal("GND"), signal("1V8_OUT"), ...Array.from({ length: 7 }, (_, i) => signal(`SARADC_IN${i}`, "1.8 V analog input.", "1.8 V"))], "H7", i => [58 + i * .5, 29], { size: [.3, 1.5], smd: true }), ...poe("P3", ["VC1", "VC2", "VC3", "VC4"], 59, 44)], cad: cad("luckfox-aura-docs", "3D%20Models/Luckfox%20Aura.step", "Aura STEP model") });
const lumePins = ["3V3_OUT", "5V", "PD21", "5V", "PD20", "GND", "PD17", "PB9", "GND", "PB10", "PD16", "PC6", "PD15", "GND", "PD14", "PC7", "3V3_OUT", "PG14", "PD12", "GND", "PD13", "PG15", "PD11", "PD10", "GND", "PA15", "PD19", "PD18", "PB8", "GND", "PA0", "PC8", "PA1", "GND", "PA2", "PC9", "PA3", "PC10", "GND", "PC11"];
add({ id: "luckfox-lume", name: "Lume", soc: "T153", subtitle: "T153 / 128 MB / dual Gigabit Ethernet", source: "Luckfox-Lume/Introduction", description: "68 × 55 mm Allwinner T153 quad Cortex-A7 plus E907 RISC-V board with 128 MB DDR3, 256 MB NAND, dual Gigabit Ethernet and CSI/DSI. Header pins PA0–PA3 use the 1.8 V analog domain; other GPIO contacts use 3.3 V.", body: [68, 55], shape: "lume", contacts: [...doubleHeader(lumePins, "GPIO", 1.3, 3.37).map((c, i) => ({ ...c, description: [30, 32, 34, 36].includes(i) ? `${c.label}: 1.8 V GPADC2 analog input ${[30, 32, 34, 36].indexOf(i)}.` : c.description, type: [30, 32, 34, 36].includes(i) ? "input" : c.type })), ...socket("RTC", [signal("RTC_BAT"), signal("GND")], 50, 46, 1), ...poe("H1", ["VC4", "VC3", "VC2", "VC1", "5V", "GND"], 45.5, 11, true)], cad: cad("Luckfox-Lume-docs", "3D%20Models/Luckfox%20Lume.step", "Lume STEP model") });

const omniPins = ["3V3_OUT", "5V", "0_C2", "5V", "0_C1", "GND", "2_A6", "4_B5", "GND", "4_B4", "3_A2", "0_D3", "3_A3", "GND", "0_B5", "0_B4", "3V3_OUT", "0_C5", "0_D0", "GND", "0_D1", "2_B5", "0_C7", "0_C6", "GND", "0_C3", "2_B7", "2_B6", "2_A7", "GND", "4_C7", "3_A0", "3_A1", "GND", "4_B2", "2_D7", "2_B0", "4_B1", "GND", "4_B0"];
add({ id: "luckfox-omni3576", name: "Omni3576", soc: "RK3576", subtitle: "RK3576 / 4–8 GB / 6 TOPS", source: "Luckfox-Omni3576/Luckfox-Omni3576-Introduction", description: "Core3576 SO-DIMM carrier with octa-core RK3576, 4/8 GB LPDDR4 and 0/32/64 GB eMMC options. Dual Gigabit Ethernet, Wi-Fi 6, HDMI, USB-C DisplayPort, CSI/DSI and NVMe slot. Expansion pin functions follow the official Core3576-Pinout.xlsx 40P worksheet; Pi-style printed GPIO aliases are not Linux GPIO numbers.", body: [100, 80], shape: "omni", wireless: true, contacts: [...contacts(omniPins, "GPIO", i => [94 + i % 2 * 2.54, 60 - Math.floor(i / 2) * 2.54]), ...socket("H6", [signal("RTC_BAT", "External RTC battery positive."), signal("GND")], 22, 60, 1), ...socket("H8", [{ label: "UART0_RX", type: "input", description: "3.3 V debug UART receive input." }, signal("GND"), { label: "UART0_TX", type: "output", description: "3.3 V debug UART transmit output." }], 22, 55, 1), ...socket("H4", [{ label: "AUDIO_R", type: "output", description: "AC-coupled right headphone/line output." }, signal("GND"), { label: "AUDIO_L", type: "output", description: "AC-coupled left headphone/line output." }], 89, 56, 1.25), ...socket("J6", [signal("GND"), { label: "FAN_PWR", type: "power_out", description: "Switched fan supply output." }, { label: "FAN_TACH", type: "input", description: "Fan tachometer return." }, { label: "FAN_PWM", type: "output", description: "Fan PWM control output." }], 85, 10, 1.25), ...contacts(["VC1", "VC2", "VC3", "VC4"].map(name => ({ label: name, type: "passive", description: `Raw Ethernet center-tap ${name}, requires a suitable isolated PoE module.` })), "P4", i => [76 + i * 2.54, 56])], cad: cad("Luckfox-Omni3576-docs", "3D%20Models/Omni3576.step", "Omni3576 STEP model") });

const rpHeader = ["3V3_OUT", "5V", "GPIO2", "5V", "GPIO3", "GND", "GPIO4", "GPIO14", "GND", "GPIO15", "GPIO17", "GPIO18", "GPIO27", "GND", "GPIO22", "GPIO23", "3V3_OUT", "GPIO24", "GPIO10", "GND", "GPIO9", "GPIO25", "GPIO11", "GPIO8", "GND", "GPIO7", "GPIO0", "GPIO1", "GPIO5", "GND", "GPIO6", "GPIO12", "GPIO13", "GND", "GPIO19", "GPIO16", "GPIO26", "GPIO20", "GND", "GPIO21"];
add({ id: "luckfox-cm5-io-board", name: "CM5 IO Board", soc: "CM5", subtitle: "Raspberry Pi CM5 carrier / 160 × 90 mm", source: "Luckfox-CM5-IO-Board", description: "Blue 160 × 90 mm CM5 carrier with dual HDMI, Ethernet, USB, two CAM/DISP connectors, GPIO, fan and NVMe M.2. The Raspberry Pi Compute Module 5 is a separate fitted module. GPIO_VREF jumper selection determines the GPIO signal voltage; use the documented 3.3 V setting for HATs.", body: [160, 90], color: "#215482", shape: "cm5", contacts: [...doubleHeader(rpHeader, "GPIO", 8, 35, "x"), ...doubleHeader(["PI_BOOT", "GND", "EEPROM_WP", "GND", "USB0_ID", "GND", "GND", "GND", "ETH_OUT", "GND", "PI_GLOBAL_EN", "GND", "PWR_Button", "GND"].map(name => /GND/.test(name) ? signal(name) : { label: name, type: name === "ETH_OUT" ? "output" : "input", description: `${name} carrier control terminal; use the manufacturer's jumper configuration.` }), "P2", 61, 3), ...socket("H4", [{ label: "WIFI_EN", type: "input", description: "Wireless enable control." }, signal("GND"), { label: "BT_EN", type: "input", description: "Bluetooth enable control." }], 127, 3, 2.54), ...socket("H2", [{ label: "FAN_TACH", type: "input", description: "Fan tachometer input." }, signal("GND"), { label: "FAN_PWM", type: "output", description: "Fan PWM control output." }, { label: "FAN_5V", type: "power_out", description: "Switched 5 V fan supply." }], 127, 10, 1.25), ...poe("P3", ["VC1", "VC2", "VC4", "VC3"], 60, 78)], cad: { label: "Luckfox CM5 IO manufacturer schematic (PDF)", url: `${wiki}assets/files/CM5-IO-Board-05302d063c9a398cf3d244f2ba950099.pdf` } });
const pico2Pins = ["GP0", "GP1", "GND", "GP2", "GP3", "GP4", "GP5", "GND", "GP6", "GP7", "GP8", "GP9", "GND", "GP10", "GP11", "GP12", "GP13", "GND", "GP14", "GP15", "GP16", "GP17", "GND", "GP18", "GP19", "GP20", "GP21", "GND", "GP22", "RUN", "GP26", "GP27", "AGND", "GP28", "ADC_VREF", "3V3_OUT", "3V3_EN", "GND", "VSYS", "VBUS"];
add({ id: "luckfox-pico2", name: "Pico2", soc: "RP2350A", subtitle: "RP2350A / USB-C / dual-core MCU", source: "Pico2/Pinout", description: "Luckfox RP2350A Pico2 board with USB-C, microSD, BOOT button and Pico-style 40-pin castellated expansion. Pins GP26–GP28 include ADC inputs. This is the Luckfox board, distinct from the Raspberry Pi Pico 2 PCB.", tags: ["rp2350", "microcontroller", "pico 2"], body: [21, 51], shape: "pico2", contacts: [...perimeter40(pico2Pins), ...socket("H1", [{ label: "SWDIO", type: "bidirectional", description: "Bidirectional SWD data." }, signal("GND"), { label: "SWCLK", type: "input", description: "SWD clock input." }], 8, 49, 2.54)], cad: { label: "Luckfox Pico2 manufacturer schematic", url: "https://github.com/Luckfox-eng51/Luckfox-Pico2-docs/blob/main/Hardware/Schematic/Pico-2-schematic.pdf" } });

// WebBee exposes standard cable contacts only. No undocumented internal test pads are inferred.
const usbCable = [signal("VBUS", "USB 5 V input."), { label: "USB_D-", type: "bidirectional", description: "USB 2.0 D- cable contact." }, { label: "USB_D+", type: "bidirectional", description: "USB 2.0 D+ cable contact." }, signal("GND")];
const rj45Cable = ["TX+", "TX-", "RX+", "NC", "NC", "RX-", "NC", "NC"].map(name => ({ label: name, type: name === "NC" ? "no_connect" : "passive", description: name === "NC" ? "Unused in the documented 100BASE-TX interface." : `100BASE-TX RJ45 ${name} cable contact; connector pin numbering is viewed at the mating face.` }));
add({ id: "luckfox-webbee", name: "WebBee", soc: "RV1103", subtitle: "RV1103 / enclosed USB–Ethernet Linux appliance", source: "Luckfox-Pico/Luckfox-Pico-RV1103", description: "Enclosed RV1103 WebBee USB/Ethernet appliance with 64 MB DDR2 and 128 MB NAND. No GPIO header is documented. Wireable terminals are the USB 2.0 and 100BASE-TX mating contacts shown on their physical ports. The separate PCB footprint is an off-board cable breakout reference.", body: [23, 70], shape: "webbee", contacts: [...contacts(usbCable, "USB", i => [7.5 + i * 2.5, 0]), ...contacts(rj45Cable, "RJ45", i => [4.5 + i * 2, 70])], footprintNote: "Off-board USB 2.0 / RJ45 cable breakout reference for the enclosed WebBee. Contact numbers follow the standard mating connectors; this is not the appliance PCB footprint. No GPIO or undocumented internal pads are represented.", cad: { label: "Luckfox WebBee published product documentation", url: wiki + "Luckfox-WebBee" } });
add({ id: "luckfox-pico-86-panel", name: "Pico 86-Panel", soc: "RV1106", subtitle: "RV1106 / 720×720 touch / RS485 / two relays", source: "Luckfox-Pico-86-Panel", description: "Smart 86 wall-panel assembly: 0208/1208 use RV1106G2 with 128 MB DDR3L; 0408/1408 use RV1106G3 with 256 MB. All have 8 GB eMMC; 1208/1408 add Wi-Fi 6 / Bluetooth 5.2. The rear power, RS485 and two isolated normally-open relay contact pairs are available. Connector geometry is a reference for external wiring.", tags: ["0208", "1208", "0408", "1408", "relay", "rs485", "panel"], body: [86, 86], shape: "panel", contacts: contacts([
  signal("VIN+", "6–30 V DC positive power input."), signal("GND"),
  { label: "485A", type: "bidirectional", description: "RS485 bus A terminal, transceiver A net." }, { label: "485B", type: "bidirectional", description: "RS485 bus B terminal, transceiver B net." },
  { label: "L0", type: "passive", description: "Relay 1 common contact, paired with L1; open when relay is de-energized." }, { label: "L1", type: "passive", description: "Relay 1 normally-open contact, paired with L0." },
  { label: "L2", type: "passive", description: "Relay 2 normally-open contact, paired with L3." }, { label: "L3", type: "passive", description: "Relay 2 common contact, paired with L2." },
], "TERM", i => [22 + i * 5, 80]), footprintNote: "Off-board reference terminal carrier for the enclosed 86-Panel. 5 mm placement is illustrative, not a manufacturer land pattern. Use the marked VIN/GND, RS485 A/B and L0/L1/L2/L3 terminals on the fitted assembly. Relay contact function comes from 86-Panel-Bottom-Board.pdf.", cad: cad("Luckfox-Pico-docs", "Schematic/86-Panel-Bottom-Board.pdf", "86-Panel terminal schematic") });

const kvmIo = ["1_D3", "1_D2", "GND", "1_B3", "1_B2", "GND", "0_A0", "0_A1", "GND", "3V3_OUT"];
for (const display of [false, true]) add({ id: display ? "luckfox-picokvm" : "luckfox-picokvm-base", name: display ? "PicoKVM / PicoKVM Lite" : "PicoKVM Base / Base Lite", shortName: display ? "PicoKVM" : "PicoKVM Base", soc: "RV1106G3", subtitle: `RV1106G3 / 256 MB / ${display ? "touchscreen KVM" : "stacked KVM boards"}`, source: "Luckfox-PicoKVM/Introduction", description: `Ready IP-KVM with RV1106G3, 256 MB DDR3L, 1080p60 HDMI capture, USB keyboard/mouse emulation and 100 Mb/s Ethernet. ${display ? "PicoKVM has a 1.54-inch touchscreen; PicoKVM Lite shares the IO map." : "Base and Base Lite omit the touchscreen."} The eMMC model has 8 GB storage; Lite boots from microSD. All ten SH1.0 expansion contacts are represented. Contact references IO.1–IO.10 follow the official diagram from left to right at the mating face; the drawing does not print connector terminal numbers.`, body: [56, 56], shape: display ? "kvm" : "kvm-base", contacts: contacts(kvmIo, "IO", i => [8 + i, 50], { size: 1.1, drill: .5 }), footprintNote: "Off-board SH1.0 ten-wire breakout reference for the KVM assembly. IO.1–IO.10 are left-to-right contact references in the manufacturer's mating-face diagram, not verified PCB pad numbers. Use the keyed original cable and match signal names. The approximate enclosure/carrier geometry is not the KVM PCB land pattern.", cad: { label: "Luckfox PicoKVM official hardware resource folder", url: "https://drive.google.com/drive/folders/1c_1EdF3fCocWYCSY2KlshBpRdEznSKzy" } });
const frontPanelNames = ["HDD_L+", "PWR_L+", "HDD_L-", "PWR_L-", "RST_S-", "PWR_S+", "RST_S+", "PWR_S-", "NC"];
const fpContacts = connector => doubleHeader(frontPanelNames.map(name => name === "NC" ? signal(name) : { label: name, type: "passive", description: `Motherboard/chassis front-panel ${name}. P2 and P3 are parallel pass-through connectors; match the motherboard's exact front-panel pinout.` }), connector, 60, connector === "P2" ? 20 : 34);
add({ id: "luckfox-picokvm-ext", name: "PicoKVM Ext", soc: "KVM-EXT", subtitle: "PCIe/USB powered remote ATX control adapter", source: "Luckfox-PicoKVM-Ext", description: "68.7 × 51 mm main PCB with a projecting PCIe x1 power edge. Remote ATX power/reset and LED-state adapter for PicoKVM. Includes keyed 10-wire IO control, dual parallel motherboard/chassis front-panel headers and a two-port motherboard USB header. PCIe is a 12 V power interface, not a data link; select the documented USB/PCIe supply switch setting.", body: [68.7, 59], shape: "kvm-ext", contacts: [
  ...contacts([{ label: "RES_KEY", type: "input", description: "Remote reset-key control from the KVM." }, { label: "PWR_KEY", type: "input", description: "Remote power-key control from the KVM." }, signal("GND"), signal("NC"), signal("NC"), signal("GND"), { label: "PWR_LED_STATE", type: "output", description: "Sensed motherboard power-LED state to KVM." }, { label: "HDD_LED_STATE", type: "output", description: "Sensed motherboard disk-LED state to KVM." }, signal("GND"), { label: "3V3", type: "passive", description: "Shared 3.3 V IO supply connection." }], "J3", i => [1.5, 44 - i], { size: 1.1, drill: .5 }),
  ...doubleHeader(["USB+5V", "USB+5V", "USB_P2-", "USB_P1-", "USB_P2+", "USB_P1+", "GND", "GND", "NC"].map(name => name === "NC" || name === "GND" ? signal(name) : { label: name, type: name.includes("5V") ? "passive" : "bidirectional", description: `${name} motherboard USB header contact. Position 10 is the absent key pin.` }), "P1", 60, 5), ...fpContacts("P2"), ...fpContacts("P3"),
], footprintNote: "Reference carrier for the exposed J3, P1, P2 and P3 connectors. Pin 1 of J3 is at the lower end in the manufacturer's component-side photograph. P1/P2/P3 are 2.54 mm two-row headers with contact 10 absent. PCIe power edge and USB ports are complete cable/slot interfaces and are not reproduced as raw carrier lands. Outline and placement are approximate; use the 68.7 × 51 mm manufacturer main-board drawing for mechanical design.", cad: { label: "Luckfox PicoKVM Ext mechanical and pinout documentation", url: wiki + "Luckfox-PicoKVM-Ext" } });
const plcPower = [
  { label: "DC+", type: "power_in", description: "7–24 V DC positive supply input, internally shared with terminal POWER.2." }, { label: "DC+", type: "power_in", description: "Repeated 7–24 V DC positive supply connection." },
  { label: "DC-", type: "power_in", description: "7–24 V DC negative supply return." }, { label: "DC-", type: "power_in", description: "Repeated DC negative supply return." }, { label: "PE", type: "passive", description: "Protective earth terminal." },
  ...[0, 1].flatMap(relay => ["NO", "COM", "NC"].map(state => ({ label: `RELAY${relay}_${state}`, type: "passive", description: `RELAY${relay} isolated mechanical ${state === "NO" ? "normally-open" : state === "NC" ? "normally-closed" : "common"} contact. No voltage is supplied by the contact.` }))),
];
const plcComm = [
  { label: "RS232_TX", type: "output", description: "RS232 transmit output, use RS232 levels rather than TTL." }, { label: "RS232_RX", type: "input", description: "RS232 receive input." }, signal("SGND"),
  { label: "CAN_L", type: "bidirectional", description: "CAN low bus terminal." }, { label: "CAN_H", type: "bidirectional", description: "CAN high bus terminal." }, signal("SGND"),
  { label: "422_RB", type: "input", description: "RS422 receive B input." }, { label: "422_RA", type: "input", description: "RS422 receive A input." },
  { label: "422_TB/485_B", type: "bidirectional", description: "Shared RS422 transmit B / RS485 B terminal, selected by wiring and interface mode." }, { label: "422_TA/485_A", type: "bidirectional", description: "Shared RS422 transmit A / RS485 A terminal, selected by wiring and interface mode." },
  { label: "PE", type: "passive", description: "Protective earth terminal." },
];
add({ id: "luckfox-lyra-plc", name: "Lyra PLC / PoE Kit", shortName: "Lyra PLC", soc: "RK3506B", subtitle: "RK3506B / industrial RS232/485/CAN / two relays", source: "Luckfox-Lyra-PLC/OpenPLC-Pinout", description: "Industrial controller with RK3506B, 512 MB DDR3L, 8 GB eMMC, dual Ethernet, Wi-Fi 6/Bluetooth 5.2 and 1.9-inch touchscreen. The PoE Kit adds IEEE 802.3af power. All 22 power/relay/communication terminals and 11 GPIO/service connector contacts are represented. POWER and COMM blocks each have their own physical numbering 1–11. Relay NO/COM/NC terminals are isolated contacts; the NC relay label is not an unconnected pin.", body: [71.84, 87.8], shape: "plc", contacts: [
  ...contacts(plcPower, "POWER", i => [55 - i * 3.81, 5]), ...contacts(plcComm, "COMM", i => [15 + i * 3.81, 82]),
  ...contacts([signal("0_C7", "UART0 debug RX; 3.3 V."), signal("GND"), signal("0_C6", "UART0 debug TX; 3.3 V.")], "UART", i => [18 + i, 12], { size: 1.1, drill: .5 }),
  ...contacts([signal("GND"), signal("3V3_OUT"), signal("1_C3", "RM_IO28 / I2C2 SCL."), signal("1_D1", "RM_IO29 / I2C2 SDA.")], "I2C", i => [28 + i, 12], { size: 1.1, drill: .5 }),
  ...contacts([signal("GND"), signal("3V3_OUT"), signal("1_D2", "RM_IO30."), signal("1_D3", "RM_IO31.")], "GPIO", i => [39 + i, 12], { size: 1.1, drill: .5 }),
], footprintNote: "Off-board reference carrier for the Lyra PLC enclosure. POWER.1–11 and COMM.1–11 follow the manufacturer's separate terminal diagrams. Service socket contacts use left-to-right mating-face references; their connector pad numbering is not printed in the published diagram. Terminal pitch and placement here are illustrative; use the linked 71.84 × 87.8 mm enclosure drawing and the actual pluggable connector before fabrication.", cad: { label: "Luckfox Lyra PLC pinouts and dimensional drawing", url: wiki + "Luckfox-Lyra-PLC/OpenPLC-Pinout" } });

// Verbatim manufacturer pin names and voltage domains from the referenced XLS/PDF tables.

function somContacts(key, body) {
  return somTables[key].map((row, index) => {
    const [number, names, domain, secondDomain, mux] = row;
    const gpioName = names.match(/GPIO\d_[A-D]\d|GPI\d_[A-D]\d|GPO\d_[A-D]\d/)?.[0];
    const caption = gpioName ?? names.split("/")[0].replace(/ \((Input|Output)\)/, "");
    const pin = signal(caption, "", domain || "See manufacturer table");
    if (/^GPI\d_/.test(caption)) pin.type = "input";
    if (/^GPO\d_/.test(caption)) pin.type = "output";
    if (/^MIPI.*RX|^SARADC|^ADC|^RESET|^nRPI_BOOT|^RUN|^GLOBAL_EN/.test(caption)) pin.type = "input";
    if (/^MIPI.*TX|^CORE_[13]|^VCC_[13]|^MICBIAS|^CODEC_MICBIAS/.test(caption)) pin.type = /^CORE_|^VCC_|BIAS/.test(caption) ? "power_out" : "output";
    if (/^VCC5|^\+5V|^GPIO_VREF$|^RTC_BAT$|^VCC3V3_RTC$/.test(caption)) pin.type = "power_in";
    if (/^Ethernet_Pair|^ETH_/i.test(caption)) pin.type = "passive";
    if (/SSRX|CSI.*RX|HDMI.*HPD/.test(caption)) pin.type = "input";
    if (/SSTX|DSI.*TX|HDMI.*TX/.test(caption)) pin.type = "output";
    if (/^(Reserved|NC)$/.test(caption)) pin.type = "no_connect";
    const vendorPad = vendorPads[key === "core1106d" ? "core1106" : key]?.find(pad => pad[0] === number);
    let x, y, size, smd = true;
    if (vendorPad) { [, x, y] = vendorPad; size = vendorPad.slice(3); }
    else if (key === "core3566") {
      // Reference mating-carrier rows; not the fine-pitch vendor connector land pattern.
      const local = index % 100; x = (index < 100 ? -20 : 20) + local % 2 * 1.6;
      y = (Math.floor(local / 2) - 24.5) * .4; size = [.7, .25];
    } else {
      // Separate front/back SO-DIMM cable-carrier rows, not an edge-card socket footprint.
      x = (Math.floor(index / 2) - 64.5) * .5; y = index % 2 ? 20.2 : 22.2; size = [.3, 1.4];
    }
    pin.description = `Manufacturer pin ${number}: ${names}.${domain ? ` IO domain: ${domain}.` : ""}${key === "core3506" ? ` Core35060808 domain: ${secondDomain || "not assigned"}.${mux ? ` Multiplexed function: ${mux}.` : ""}` : ""} Consult the exact fitted module configuration before assigning multiplexed signals.`;
    return { ...pin, id: `pin-${number}`, number: String(number), x: x + body[0] / 2, y: y + body[1] / 2, size, drill: null, smd };
  });
}
const somDefinitions = [
  { id: "luckfox-core1106", key: "core1106", name: "Core1106", soc: "RV1106", body: [30, 30], source: "Core1106/Introduction", subtitle: "RV1106 / 112-pin castellated SOM", description: "30 × 30 mm module, 112 castellated contacts. Same published interface for Core11060208, Core11061208, Core11060408, Core11061408, Core110602N256, Core110612N256, Core110604N256 and Core110614N256. G2 options have 128 MB, G3 options 256 MB; storage is 8 GB eMMC or 256 MB NAND; 61xx options include Wi-Fi 6 / Bluetooth 5.2.", cad: cad("Luckfox-Pico-docs", "Schematic/Core1106-Footprint.zip", "Core1106 KiCad footprint and STEP archive") },
  { id: "luckfox-core1106d", key: "core1106d", name: "Core1106D", soc: "RV1106", body: [30, 30], source: "Core1106D/Introduction", subtitle: "RV1106 / external DDR3 / 112 contacts", description: "30 × 30 mm external-DDR module. Core1106D14N256 and Core1106D1408 have 256 MB DDR3; Core1106D18N256 and Core1106D1808 have 512 MB. N256 means 256 MB NAND and 08 means 8 GB eMMC; wireless is optional. Manufacturer explicitly specifies the same 112-contact pinout as Core1106; the separate D pin table is used here.", cad: cad("Luckfox-Pico-docs", "Schematic/Core1106D.pdf", "Core1106D schematic") },
  { id: "luckfox-core3506", key: "core3506", name: "Core3506", soc: "RK3506B", body: [32, 32], source: "Core3506", subtitle: "RK3506B / 512 MB / 120 contacts", description: "32 × 32 mm, 120-contact module with 512 MB DDR3L. Core35060800 has no fitted eMMC; Core35060808 includes 8 GB eMMC. Both voltage-domain columns from the manufacturer table are retained because the eMMC configuration affects shared signals. Three Cortex-A7 cores, Cortex-M0 and 32 RM_IO channels.", cad: cad("Luckfox-Lyra-docs", "Core3506-Footprint.zip", "Core3506 KiCad footprint and STEP archive") },
  { id: "luckfox-core3566", key: "core3566", name: "Core3566", soc: "RK3566", body: [55, 40], source: "Core3566", subtitle: "RK3566 / 200 contacts / CM4-style SOM", description: "55 × 40 mm module with two 100-contact board connectors. Datasheet Appendix B options: Core3566102000, Core3566102032, Core3566104000, Core3566104032 (wireless) and Core3566002000, Core3566002032, Core3566004000, Core3566004032 (wired). RAM 2/4 GB, eMMC 0/32 GB; 000 variants are Lite. All 200 manufacturer terminals are represented; CM4-like mechanical compatibility does not imply identical electrical functions.", footprintNote: "Reference mating carrier for Core3566's two 100-pin connectors. Terminal map is from manufacturer datasheet chapter 4. Shown rows and pad sizes are representative, not a DF40 production land pattern. Select DF40C-100DS-0.4V or DF40HC(3.0)-100DS-0.4V and obtain its manufacturer land pattern for fabrication.", cad: { label: "Luckfox Core3566 manufacturer 3D archive", url: "https://files.luckfox.com/wiki/Core3566/core3566_3D.zip" } },
  { id: "luckfox-core3576", key: "core3576", name: "Core3576", soc: "RK3576", body: [69.65, 45], source: "Luckfox-Omni3576/Luckfox-Omni3576-Introduction", subtitle: "RK3576 / 260-pin SO-DIMM / 6 TOPS", description: "69.65 × 45 mm SO-DIMM module with 260 electrical contacts. Official 4/8 GB LPDDR4 and 0/32/64 GB eMMC configurations are consolidated; the product page does not publish distinct ordering codes. Pin definitions follow the official Core3576-Pinout.xlsx 260P table and hardware design guide V1.0 dated 2025-03-19.", footprintNote: "Reference breakout carrier for all 260 Core3576 SO-DIMM contacts. The two separated rows represent the front/back contacts logically; they are not a production SO-DIMM socket footprint. Preserve the actual key position, mating socket land pattern, impedance and clearance from the manufacturer CAD.", cad: cad("Luckfox-Omni3576-docs", "3D%20Models/Core3576.step", "Core3576 STEP model") },
];
for (const som of somDefinitions) add({ ...som, shape: som.key, som: true, contacts: somContacts(som.key, som.body) });

function ic(x, y, w, h, mark, silverTop = false) {
  const pins = Array.from({ length: Math.max(4, Math.round(w)) }, (_, index) => {
    const dx = x + (index + .5) * w / Math.max(4, Math.round(w));
    return line(dx, y - .55, dx, y + h + .55, "#949b98", .28);
  }).join("");
  return pins + rect(x, y, w, h, .35, silverTop ? "#a3a8a8" : "#171c20", "#838e8b") +
    circle(x + .8, y + .8, .3, "#a1a9a7") + label(x + w / 2, y + h / 2, mark, Math.max(.8, Math.min(1.6, w / 7)), silverTop ? "#414c50" : "#a8b0ae");
}
function port(kind, x, y, w, h, text = "") {
  if (kind === "ribbon") return rect(x, y, w, h, .3, "#d9d9c9", "#929a92") + rect(x + .3, y + .3, w - .6, h * .35, .15, "#22272a") +
    Array.from({ length: Math.max(6, Math.round(w * 1.4)) }, (_, i) => line(x + .5 + i * (w - 1) / Math.max(5, Math.round(w * 1.4) - 1), y + h * .45, x + .5 + i * (w - 1) / Math.max(5, Math.round(w * 1.4) - 1), y + h - .2, gold, .18)).join("");
  if (kind === "switch") return rect(x, y, w, h, .3, silver, "#dce1db") + circle(x + w / 2, y + h / 2, Math.min(w, h) * .34, "#dedacb");
  if (kind === "socket") return rect(x, y, w, h, .25, "#e6e4d4", "#a7aaa2") + rect(x + .5, y + .55, w - 1, h - 1.1, .1, "#777d76");
  if (kind === "jack") return rect(x, y, w, h, .5, "#1c2225", "#919996") + circle(x + w / 2, y + h * .82, w * .3, "#080f15", gold);
  const fill = kind === "usb3" ? "#237fb8" : "#263138";
  return rect(x, y + .45, w, h, .6, "#6f7b7d") + rect(x, y, w, h, .6, silver, "#e3e6e0") +
    rect(x + .6, y + h * .72, w - 1.2, Math.max(1, h * .22), .2, fill) +
    (kind === "ethernet" ? rect(x + w * .35, y + h * .52, w * .3, h * .28, .1, "#1d2b30") : "") +
    (text ? label(x + w / 2, y + h / 2, text, 1.05, "#4e5c60") : "");
}
function wireless(x, y, w = 10, h = 11) {
  return rect(x, y, w, h, .55, "#aaa9a0", "#e7e2ce") + label(x + w / 2, y + h / 2, "Wi-Fi", 1.25, "#667369") +
    path(`M${x + w + 1} ${y + 1}h3v2h-2v2h2v2h-2v2`, "none", gold, .55) + circle(x + w + 1, y + h - 1, .7, gold, "#e5d7ad");
}
function mounting(w, h, inset = 3) { return [[inset, inset], [w - inset, inset], [inset, h - inset], [w - inset, h - inset]].map(([x, y]) => circle(x, y, 2.4, "#d6d3bf", "#eff0de") + circle(x, y, 1.35, "#354049")).join(""); }
function fox(x, y) { return `<g transform="translate(${x} ${y})">${path("M-3 -2L-1.5 -4L0 -2L2 -4L3 -1L1 0L3 2L0 3L-3 1L-1 -1Z", "none", silk, .7)}</g>`; }

function hardware(board) {
  const [w, h] = board.body;
  const kind = board.shape;
  let art = "";
  if (["pico", "pico-ethernet", "mini", "lyra", "lyra-plus", "pico2"].includes(kind)) {
    const mini = kind === "mini";
    art += port("usb", w / 2 - 4.3, -.4, 8.6, 6.2, "USB-C") + port("switch", w - 6.3, mini ? 12 : 19, 3.8, 3.6);
    art += ic(5.5, mini ? 12 : 31, 10, mini ? 7 : 10, board.soc);
    if (!mini) art += port("ribbon", 3.7, kind.startsWith("lyra") ? 41 : 45.5, 13.6, 3.1) + ic(5, 14, 9, 8, kind.startsWith("lyra") ? "DDR3" : "FLASH");
    if (kind === "pico-ethernet" || kind === "lyra-plus") art += port("ethernet", 2.2, 53.5, 16.6, 19.5, "RJ45");
    else if (kind !== "pico2") art += port("ribbon", 4.4, mini ? 24 : 23.5, 12.2, 3.4);
    if (kind === "pico2") art += port("switch", 14.7, 12, 3.7, 3.8) + port("usb", 3.1, 18, 14.7, 10.5, "microSD");
    if (kind.startsWith("lyra")) art += port("socket", 6.5, 7.5, 8, 4);
  } else if (["ultra", "lyra-ultra", "nova"].includes(kind)) {
    art += mounting(w, h) + port("usb", 20.5, -.5, 8.8, 6.8, "USB-C") + port("switch", 33, 2.2, 3.3, 3.2) + port("switch", 38, 2.2, 3.3, 3.2);
    art += ic(16, 18, 14, 14, board.soc) + ic(16, 8, 12, 7, "MEMORY") + port("ethernet", 7, 32, 16.4, 19.7, "RJ45") + port("usb", 25, 34, 16, 17, "USB-A");
    art += port("ribbon", 1, 9, 3.1, 22, kind === "lyra-ultra" ? "DSI" : "") + port("socket", 2.5, 33.5, 4.8, 3.7);
    if (board.wireless) art += wireless(31, 19, 10, 9);
    art += circle(45, 44, 1.6, silver) + circle(45, 44, .35, "#1b2426") + fox(14, 5);
  } else if (["zero", "lyra-zero"].includes(kind)) {
    art += mounting(w, h) + port("usb", 4.5, -.5, 8.8, 6.5, "USB-C") + ic(3.5, 20, 13.5, 12, board.soc) + wireless(3.5, 36, 12, 11) +
      port("ribbon", 7, 57, 17, 3.7) + port("socket", 3, 51, 5, 4) + port("switch", 13, 7, 3, 3);
  } else if (["pi", "lyra-pi", "aura"].includes(kind)) {
    art += mounting(w, h, 3.5) + ic(24, 19, 18, 18, board.soc) + ic(44, 14, 12, 12, "DDR") + port("usb", 7, 49, 8.5, 7, "USB-C") +
      port("usb", kind === "aura" ? 20 : 66, kind === "aura" ? 49 : 38, kind === "aura" ? 8.5 : 19, kind === "aura" ? 7 : 17, kind === "aura" ? "USB-C" : "USB") +
      port("usb", 66, 20, 19, 15, "USB") + port("ethernet", 64, 1, 21, 16, "RJ45") + port("socket", 32, 44, 5, 3.7) +
      port("ribbon", kind === "aura" ? 48 : 43, 39, 3.3, 14) + port("switch", 23, 44, 3.5, 3.5) + port("switch", 28, 44, 3.5, 3.5);
    art += port("jack", 40, 47, 7, 10) + fox(14, 11);
    if (kind === "pi") art += rect(19, 12, 33, 30, .4, "none", gold) + port("usb", 19, 45, 14, 8, "SIM") + port("ribbon", 58, 16, 3.3, 23);
    if (kind === "lyra-pi") art += port("ethernet", 64, 18, 21, 16, "RJ45");
    if (board.wireless) art += wireless(7, 15, 12, 12);
  } else if (kind === "lume") {
    art += mounting(w, h, 8) + ic(17, 30, 14, 14, "T153") + ic(17, 17, 12, 9, "DDR3") +
      port("ethernet", 49, 1, 20, 16, "RJ45") + port("ethernet", 49, 19, 20, 16, "RJ45") + port("usb", 53, 37, 16, 7, "USB-A") +
      port("usb", 58, 48, 11, 6.5, "USB-C") + port("ribbon", 11, 0, 15, 4) + port("ribbon", 28, 0, 15, 4) + port("socket", 49, 46, 4, 3.8) + fox(12, 12);
  } else if (kind === "omni") {
    art += mounting(w, h) + rect(11, 4, 69.65, 45, .5, "#20262a", "#b3beb8") + ic(31, 25, 18, 18, "RK3576") + ic(31, 8, 18, 12, "LPDDR4") + ic(63, 16, 13, 13, "PMIC") +
      rect(11, 48, 70, 6, .3, "#353a3d", "#939c97") + label(46, 51, "SO-DIMM", 2.2, "#b1b9b0") +
      port("ribbon", 1, 9, 3, 13) + port("ribbon", 1, 25, 3, 13) + port("ribbon", 1, 42, 3, 15) +
      port("usb", 1, 66, 8, 14, "USB-C") + port("usb", 10, 62, 8, 18, "HDMI") +
      port("usb", 23, 64, 15, 16, "USB2") + port("usb3", 41, 64, 15, 16, "USB3") +
      port("ethernet", 59, 61, 17, 19, "ETH0") + port("ethernet", 77, 61, 17, 19, "ETH1") +
      port("socket", 20, 56, 5, 3) + port("socket", 20, 61, 4, 3) + port("socket", 89, 54, 4, 7) +
      port("socket", 84, 9, 7, 3) + port("ribbon", 83, 23, 3, 24) + port("switch", 6, 3, 3, 3) +
      port("switch", 6, 11, 3, 3) + port("switch", 6, 19, 3, 3) + label(62, 57, "Omni3576", 2.6, silk);
  } else if (kind === "cm5") {
    art += mounting(w, h, 11) + rect(80, 10, 40, 55, .5, "#23476e", "#c6cbc2") + port("ribbon", 82, 15, 3, 35) + port("ribbon", 115, 15, 3, 35) +
      port("ribbon", 4, 0, 19, 4) + port("ribbon", 40, 0, 19, 4) + port("usb", 14, 79, 16, 11, "HDMI0") + port("usb", 40, 79, 16, 11, "HDMI1") +
      port("ethernet", 64, 70, 21, 21, "RJ45") + port("usb3", 88, 75, 16, 16, "USB") + port("usb", 106, 82, 9, 9, "USB-C") +
      port("ribbon", 128, 80, 30, 4) + circle(12, 51, 10, silver, "#e6e8e0") + circle(12, 51, 8, "#2f3439") +
      label(100, 54, "Compute Module 5", 2.2, silk) + label(45, 55, "CM5 IO Board", 3.2, silk);
  } else if (kind === "kvm" || kind === "kvm-base") {
    if (kind === "kvm") art += rect(0, 0, w, h, 5, "#171d21", "#697477") + rect(5, 4, w - 10, h - 19, 3, "#242d33", "#060d11") + fox(14, 13) + label(36, 15, "08:30", 5, silk) + label(w / 2, 27, "PicoKVM", 3.1, "#eab04a");
    else art += mounting(w, h, 3) + label(31, 8, "PicoKVM Base", 2.5, silk) + port("usb", 3, 24, 24, 18, "microSD") + fox(12, 10) + ic(31, 14, 9, 8, "CAPTURE") + rect(2, 43, w - 4, 10, 1, "#303a40", "#8f9b96");
    art += port("usb", 5, 40, 21, 5, "HDMI IN") + port("socket", 6, 48, 14, 3) + port("usb", 7, 53, 12, 4, "USB-C") + port("ethernet", 31, 40, 19, 17, "ETH");
  } else if (kind === "kvm-ext") {
    art += mounting(w, 51, 3) + port("usb", -.5, 6, 8, 10, "USB-C") + port("usb", -.5, 22, 10, 12, "USB-A") + port("socket", 0, 35, 4, 13) +
      [10, 18, 26, 34].map(y => ic(27, y, 9, 5, "OPTO")).join("") + rect(22, 42, 9, 7, 1, "#9eaaa7") + label(26.5, 45.5, "100", 2.2, "#3f4d4e") +
      rect(45.5, 50, 20, 9, .3, "#a58c50") + Array.from({ length: 18 }, (_, i) => rect(46 + i * 1.0, 52, .65, 7, .1, gold)).join("") + rect(56.5, 51, 1.8, 8, .1, "#f6f4e8") + fox(18, 9) + label(36, 4, "PicoKVM Ext", 2.4, silk);
  } else if (kind === "plc") {
    art += rect(0, 0, w, h, 2.5, "#333b40", "#8d999a") + rect(0, 15, w, h - 30, 2, "#414b50") + rect(4, 27, 49, 36, 1, "#0a161c", "#657477") +
      fox(18, 39) + label(28, 50, "20:00", 6, silk) + label(28, 57, "Lyra PLC", 2.4, "#e3a13d") + circle(62, 42, 6, "#e5a032", "#b8741c") + label(62, 42, "USER", 1.8, silk) + circle(62, 57, 1, "#071319") +
      label(62, 62, "RESET", 1.9, silk) + rect(12, 1, 47, 8, .5, "#70b77d", "#b3d5ae") + rect(12, h - 9, 47, 8, .5, "#70b77d", "#b3d5ae") +
      circle(10, 10, 3, gold) + circle(10, 10, 1, "#303a3f") + label(w / 2, 13, "POWER / RELAYS", 2.2, "#a3b9b7") + label(w / 2, h - 13, "RS232 / CAN / RS485", 2.1, "#a3b9b7");
  } else if (kind === "webbee") {
    art += rect(0, 0, w, h, 4, "#1c2024", "#7b8181") + port("usb3", 5, -10, 13, 14) + port("ethernet", 2, 58, 19, 12, "RJ45") +
      rect(3, 12, 17, 26, 1, "#423123") + circle(11.5, 22, 4, "#ea9a24", "#d5af62") + label(11.5, 33, "WebBee", 2.3, silk);
  } else if (kind === "panel") {
    art += rect(-1, -1, w + 2, h + 2, 2, "#d9ddda", "#9fa9a6") + rect(1, 1, w - 2, h - 2, 1, "#15191c") + rect(6, 6, w - 12, h - 16, .4, "#202d31") +
      label(w / 2, 24, "Luckfox", 5, "#f4eee1") + label(w / 2, 33, "86 PANEL", 4, "#a5b7bd") + circle(w / 2, 46, 8, "#ed9a1f") + path(`M${w / 2 - 2} 41l7 5l-7 5Z`, silk) +
      rect(9, 61, 32, 12, 2, "#d78f23") + rect(45, 61, 32, 12, 2, "#35454b") + label(25, 67, "RELAY 1", 2.3, silk) + label(61, 67, "RELAY 2", 2.3, silk);
  } else if (board.som) {
    art += ic(w * .23, h * .35, w * .32, h * .38, board.soc) + ic(w * .27, 2.5, w * .28, h * .23, "MEMORY") +
      ic(w * .66, h * .3, w * .18, h * .27, "PMIC") + fox(w * .2, h * .82);
    if (kind === "core3576") art += mounting(w, h, 2.7) + path(`M0 28h2v-4h-2M${w} 28h-2v-4h2`, "none", "#aeb8b2", .6) + rect(38, h - 2.5, .9, 2.6, .2, "#eef0e4");
    if (kind === "core3566") art += mounting(w, h, 3.5) + wireless(w - 14, 3, 10, 12);
  }
  const marks = ["webbee", "panel", "cm5", "kvm", "kvm-base", "plc", "omni"].includes(kind) ? "" : label(w / 2, h - (h > 60 ? 3.5 : 4), board.name, Math.min(2.5, w / 11), silk);
  const discretes = Array.from({ length: w > 40 ? 20 : 10 }, (_, i) => {
    const x = w * .25 + ((i * 3.7) % (w * .47)); const y = h * .19 + ((i * 7.1) % (h * .43));
    return rect(x, y, 1.4, .75, .1, silver) + rect(x + .25, y, .9, .75, .08, i % 3 ? "#8d7f5e" : "#424b4b");
  }).join("");
  return discretes + art + marks;
}
// Visual contact coordinates are independent of the reference-carrier footprint.
// Multiple real faces are shown where contacts are hidden behind the component side.
function physicalView(board) {
  const [w,h] = board.body;
  const view = { width:w, height:h, kind:"front" };
  for (const pin of board.contacts) { pin.vx=pin.x; pin.vy=pin.y; }
  if (["zero","lyra-zero"].includes(board.shape)) for(const pin of board.contacts.filter(p=>p.number.startsWith("GPIO."))) {
    const n=Number(pin.number.split(".")[1])-1; pin.vx=25+n%2*2.54;pin.vy=7.5+Math.floor(n/2)*2.54;
  }
  if(board.shape==="aura") {
    view.width=w*2+10;view.kind="aura-dual";
    for(const pin of board.contacts.filter(p=>p.number.startsWith("H7."))) {const n=Number(pin.number.split(".")[1])-1;pin.vx=w+15;pin.vy=25.75+n*.5;pin.viewNote="Underside ADC FFC, underside view shown at right.";pin.visualFine=true;}
  }
  if(board.shape==="core3566") {
    view.kind="core3566-bottom";
    // Manufacturer mechanical drawing: 55 x 40, connector centers x=25 in top projection;
    // the underside view mirrors that coordinate to x=30.
    for(const pin of board.contacts) {const n=Number(pin.number)-1,local=n%100;pin.vx=30+(Math.floor(local/2)-24.5)*.4;pin.vy=(n<100?3:37)+(local%2?.75:-.75);pin.viewNote="Underside mating-contact view; positions and 1/99/102/200 orientation from manufacturer core3566_v1_2 CAD drawing.";pin.visualFine=true;}
  }
  if(board.shape==="core3576") {
    view.width=w*2+10;view.kind="core3576-dual";
    for(const pin of board.contacts) {
      const n=Number(pin.number)-1,column=Math.floor(n/2),back=n%2;
      // 0.5 mm fingers, with the physical key after the first 76 contact pairs.
      const x=.4+column*.5+(column>=76?1.25:0)+(column>=125?(column-124)*.5:0);
      pin.vx=back?w+10+w-x:x;pin.vy=h-1.1;pin.viewNote=back?"Back-side gold finger; back view shown at right (mirrored).":"Component-side gold finger; front view shown at left.";pin.visualFine=true;
    }
  }
  if(board.shape==="plc") {
    view.width=w*2+12;view.height=60.5;view.kind="plc-ends";
    for(const pin of board.contacts) {
      const [con,num]=pin.number.split("."),n=Number(num)-1;
      if(con==="POWER"||con==="COMM") {pin.vx=(con==="COMM"?w+12:0)+15+n*3.81;pin.vy=52;pin.viewNote=`${con} enclosure end, viewed from outside.`;}
      else {pin.vx=({UART:14.3,I2C:23.3,GPIO:32.9})[con]+n;pin.vy=28;pin.viewNote="POWER enclosure end, viewed from outside.";}
    }
  }
  if(board.shape==="panel") {
    view.kind="panel-rear";
    // Manufacturer straight rear photo: Relay0 / Relay1, RS485 A/B, DC-/DC+.
    const x=[65.1,60.1,50.1,55.1,25.5,20.5,30.5,35.5];
    board.contacts.forEach((pin,i)=>{pin.vx=x[i];pin.vy=64;pin.viewNote="Rear enclosure view, terminal openings facing the viewer.";});
  }
  if(board.shape==="webbee") {
    view.height=h+10;view.kind="webbee";
    for(const pin of board.contacts) {pin.vy=pin.number.startsWith("USB")?8:76;pin.viewNote=pin.number.startsWith("USB")?"USB-A plug mating contacts, metal shell shown at top.":"RJ45 receptacle mating contacts, port shown at bottom.";}
  }
  return view;
}
function contactArt(board,showLabels) {
  return board.contacts.map((pin,index)=>{
    const x=pin.vx,y=pin.vy;
    const fine=pin.visualFine || pin.smd;
    let mark;
    if(board.shape==="core3576") mark=rect(x-(Number(pin.number)>=251?.4:.16),y-1.1,Number(pin.number)>=251?.8:.32,2.2,.04,gold);
    else if(fine) {const [pw,ph]=board.som&&Array.isArray(pin.size)&&board.shape!=="core3566"?pin.size:[.26,.9];mark=rect(x-pw/2,y-ph/2,pw,ph,.03,gold);}
    else if(["plc","panel"].includes(board.shape)) mark=circle(x,y,1.15,"#182b29",gold);
    else if(["webbee","kvm","kvm-base"].includes(board.shape)||pin.number.startsWith("H7.")) mark=rect(x-.22,y-.55,.44,1.1,.04,gold);
    else mark=circle(x,y,Math.max(.55,Math.min(.85,(Array.isArray(pin.size)?pin.size[0]:pin.size)/2)),gold,"#d6c787")+circle(x,y,.32,"#18252c");
    if(!showLabels)return mark;
    if(board.shape==="panel")return mark+label(x,y+3,pin.label,1.2,silk);
    if(board.shape==="plc"&&/^(POWER|COMM)\./.test(pin.number))return mark+label(x,y+3,pin.number.split(".")[1],1.5,silk);
    const num=pin.number.split(".").at(-1);
    if(fine) {
      const n=Number(num);const stepMark=board.shape==="core3576"?(n%20===1||n%20===2||n>=259):n%10===0;if(n!==1&&n!==2&&!stepMark&&index!==board.contacts.length-1)return mark;
      return mark+label(x,y-1.6,num,.85,silk);
    }
    let left=x<(board.display.width/2),offset=left?1.3:-1.3;
    if(/^(GPIO|P[1234])\./.test(pin.number)&&["ultra","lyra-ultra","nova","pi","lyra-pi","aura","lume","omni","cm5","zero","lyra-zero"].includes(board.shape)){const n=Number(pin.number.split(".")[1]);offset=n%2?-1.3:1.3;left=n%2===0;}
    const compact=board.som||board.contacts.length>100||["ultra","lyra-ultra","nova","pi","lyra-pi","aura","lume","omni","cm5","zero","lyra-zero","webbee","plc","panel","kvm","kvm-base"].includes(board.shape);
    return mark+label(x+offset,y-.1,compact?num:`${num} ${gpio(pin.label)}`,Math.min(1.15,board.som?.9:1.1),silk,left?"start":"end");
  }).join("");
}
function physicalBody(board,showLabels) {
  const [w,h]=board.body,kind=board.display.kind;
  const base=(x=0,y=0,bw=w,bh=h)=>rect(x,y,bw,bh,board.som?.7:2,board.color??"#2c3032","#8c9792");
  if(kind==="panel-rear")return rect(0,0,w,h,2,"#dddeda","#a1aaa7")+rect(8,8,70,62,2,"#ebebe4","#bcc3ba")+port("ethernet",59,12,16,18,"RJ45")+rect(16,59,24,14,.5,"#579d60","#90b47f")+rect(45,59,24,14,.5,"#579d60","#90b47f")+label(43,39,"Luckfox 86-Panel",3,"#45524b")+label(28,54,"RELAY 0 / RELAY 1",1.6,"#475b48")+label(57,54,"A  B  DC-  DC+",1.6,"#475b48")+label(43,80,"REAR VIEW",2.5,"#45524b");
  if(kind==="plc-ends") {
    return [0,w+12].map((x,i)=>`<g transform="translate(${x} 0)">${rect(0,0,w,60.5,2,"#343d41","#899895")+rect(10,44,52,12,.5,"#61a96a","#a9c5a0")+Array.from({length:11},(_,n)=>circle(15+n*3.81,47.5,1.1,"#aeb7a1","#e0e6cf")+line(14.3+n*3.81,47.5,15.7+n*3.81,47.5,"#59665b",.3)).join("")+label(w/2,8,i?"COMM END":"POWER END",2.4,silk)+(i?port("ethernet",9,18,16,17,"ETH0")+port("ethernet",28,18,16,17,"ETH1")+port("usb",48,22,14,12,"USB-A"):port("socket",12,25,5,6)+port("socket",21,25,6,6)+port("socket",30.5,25,6,6)+port("usb",41,25,9,7,"USB-C")+circle(58,19,3,gold))}</g>`).join("");
  }
  if(kind==="core3566-bottom")return base()+mounting(w,h,3.5)+[3,37].map(y=>rect(18.7,y-1.6,22.6,3.2,.2,"#c9c7b5","#7c8276")+rect(20,y-.5,20,1,.1,"#27312f")).join("")+label(27.5,20,"Core3566 • UNDERSIDE",2.2,silk);
  let art=base()+hardware(board);
  if(kind==="aura-dual")art+=base(w+10,0)+port("ribbon",w+13.5,24,3,8)+rect(w+33,15,17,24,.5,"#757e7d","#c3c9be")+label(w+10+w/2,47,"UNDERSIDE • ADC H7",2.2,silk);
  if(kind==="core3576-dual")art+=base(w+10,0)+ic(w+23,12,16,12,"eMMC")+ic(w+46,23,12,10,"POWER")+label(w+10+w/2,35,"BACK SIDE",2.2,silk)+rect(w+10+w-38.4,h-2.5,.9,2.6,.2,"#eef0e4");
  if(kind==="kvm-ext")art+=[5,20,34].map(y=>rect(58.5,y-1.4,5.4,13,.25,"#171c20","#888c79")).join("");
  if(kind==="webbee")art=`<g transform="translate(0 10)">${art}</g>`;
  return art;
}
function illustration(board,component,showLabels=true) {
  return `<g transform="translate(${board.margin} ${board.margin}) scale(${board.scale})">${physicalBody(board,showLabels)}${contactArt(board,showLabels)}</g>`+
    (showLabels?label(component.width/2,component.height-8,board.display.kind==="front"?"COMPONENT SIDE":"PHYSICAL CONTACT VIEWS",9,"#587074"):"");
}

const luckfoxComponents = boards.map(board => board.component);
const luckfoxArt = Object.fromEntries(boards.map(board => [board.id, (component, showLabels = true) => illustration(board, component, showLabels)]));
const luckfoxFootprints = Object.fromEntries(boards.map(board => [board.id, {
  body: board.body, color: board.color ?? "#303539", modelHeight: board.som ? 3 : 12,
  pads: board.contacts.map(({ id, x, y, size, drill, smd }) => ({ id, x: Number((x - board.body[0] / 2).toFixed(4)), y: Number((y - board.body[1] / 2).toFixed(4)), size, drill, smd, shape: smd ? "rect" : "circle" })),
  note: board.footprintNote ?? (board.key === "core1106" || board.key === "core3506" ? "Manufacturer KiCad SMD land pattern: terminal centers and rectangular pad dimensions imported from the published footprint. Component-side orientation is preserved. Verify assembly tolerances against the original archive before fabrication." : board.key === "core1106d" ? "Reference carrier using the Core1106 land pattern; manufacturer explicitly states Core1106D has the same 112-pin definitions and 30 × 30 mm package. Check the D revision's mechanical clearances against the linked schematic." : carrierNote),
  details: [[0, 0, Math.min(board.body[0] * .45, 25), Math.min(board.body[1] * .45, 25), board.som ? 2 : 3, "#252a2e"]],
}]));
const luckfoxModels = Object.fromEntries(boards.map(board => [board.id, board.cad]));

// Header centres are read from the named manufacturer STEP models, not from
// the approximate native carrier. USB is at the top in this instance view.
const insertionModels = {
  "luckfox-pico": [51, 1.60940242, 1.3700125, "Luckfox Pico.step"],
  "luckfox-pico-mini-a": [28.16, 1.59921702, 1.39252706, "Luckfox Pico Mini.step"],
  "luckfox-pico-mini-b": [28.16, 1.59921702, 1.39252706, "Luckfox Pico Mini.step"],
  "luckfox-pico-plus": [72, 1.60940242, 1.3700125, "Luckfox Pico Plus.step"],
  "luckfox-pico-pro": [72, 1.60940242, 1.369948, "Luckfox Pico Pro_Max.step"],
  "luckfox-pico-max": [72, 1.60940242, 1.369948, "Luckfox Pico Pro_Max.step"],
  "luckfox-lyra": [51, 1.61100262, 1.36801392, "Luckfox Lyra.step"],
  "luckfox-lyra-b": [51, 1.61100262, 1.36801392, "Luckfox Lyra.step"],
  "luckfox-lyra-plus": [72, 1.61100262, 1.368, "Luckfox Lyra Plus.step"],
};
function insertionProfile(board) {
  const model = insertionModels[board.id];
  if (!model) return undefined;
  const [height, firstX, firstY, file] = model, mini = board.shape === "mini";
  const primary = board.contacts.filter(pin => /^\d+$/.test(pin.number));
  const pins = Object.fromEntries(board.contacts.map(pin => {
    if (!primary.includes(pin)) return [pin.id, { x: pin.x, y: pin.y,
      description: `${pin.description} Unpopulated Ethernet edge termination; this contact does not enter the breadboard.` }];
    const left = pin.x < 10.5;
    return [pin.id, { x: firstX + (left ? 0 : 17.78), y: firstY + pin.y - (mini ? 1.3 : 1.37) }];
  }));
  const mountedBoard = { ...board, body: [21, height] };
  const regions = [{ x: 0, y: 0, width: 21, height },
    { x: mini ? 4.74 : 5.69, y: mini ? -.98 : -1.33, width: mini ? 11.5 : 9.6, height: mini ? 7.6 : 7.72 }];
  if (height === 72) regions.push({ x: 2.4, y: 51.3, width: 16.2, height: 22 });
  return miniComputingMounting(board.component, { size: [21, height], source: board.cad.url,
    pins, contacts: primary.map(pin => pin.id), regions,
    evidence: `${file} in the manufacturer's STEP archive supplies both complete 2.54 mm edge rows, their 17.78 mm separation and the PCB/USB/Ethernet envelope. Mini A/B and Pro/Max share their respective mechanical model; Lyra/B share the published Lyra layout. The component-side pinout supplies terminal numbering.`,
    note: "Populate both complete edge rows with downward straight male headers. Leave the five Ethernet edge pads unpopulated where present; they remain available for separate PHY wiring. USB, CSI/DSI, SD and fitted RJ45 use their original cable interfaces.",
    renderHardware: () => physicalBody(mountedBoard, false) +
      regions.slice(1).map((region, index) => port(index === 0 ? "usb" : "ethernet", region.x, region.y,
        region.width, region.height, index === 0 ? "USB-C" : "RJ45")).join(""),
  });
}
const luckfoxMounting = Object.fromEntries(boards.map(board => [board.id, insertionProfile(board)]));
export default defineFamily("luckfox", (luckfoxComponents).map(component => ({ component, render: (luckfoxArt)[component.art], footprint: (luckfoxFootprints)[component.id], model: luckfoxModels[component.id], ...(luckfoxMounting[component.id] ? { mounting: luckfoxMounting[component.id] } : {}) })));
