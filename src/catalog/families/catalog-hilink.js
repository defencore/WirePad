import { defineFamily } from "../registry.js";
import { chip, circle, label, line, rect, smd } from "../shared/svg.js";

// Pin names and pad order follow the manufacturer's top-view hardware manuals.
const router56 = `GND 3.3VD 3.3VD GND SPI_CS0 REF_CLK0 PERST_N WDT_RST_N EPHY_LED4 EPHY_LED3 EPHY_LED2 EPHY_LED1 EPHY_LED0 PORST_N UART_TXD1 UART_RXD1 I2S_SDI I2S_SDO I2S_WS I2S_CLK GND ANT GND I2C_SCLK I2C_SD SPI_CS1 SPI_CLK SPI_MISO SPI_MOSI GPIO0 UART_TXD0 UART_RXD0 WLED_N MDI_RP_P0 MDI_RN_P0 MDI_TP_P0 MDI_TN_P0 MDI_TP_P1 MDI_TN_P1 MDI_RP_P1 MDI_RN_P1 MDI_RP_P2 MDI_RN_P2 MDI_TP_P2 MDI_TN_P2 MDI_TP_P3 MDI_TN_P3 MDI_RP_P3 MDI_RN_P3 MDI_RP_P4 MDI_RN_P4 MDI_TP_P4 MDI_TN_P4 USB_DP USB_DM GND`.split(" ");
const router140 = `3.3VD 3.3VD 3.3VD 3.3VD GND GND GND GND CTS3_N TXD2 RXD2 TXD3 RXD3 RTS2_N CTS2_N RTS3_N USB_DP_1P USB_DM_1P GND SSUSB_TXP SSUSB_TXN SSUSB_RXP SSUSB_RXN GND USB_DP_P0 USB_DM_P0 GND ESW_TXVP_A_P0 ESW_TXVN_A_P0 ESW_TXVP_B_P0 ESW_TXVN_B_P0 ESW_TXVP_C_P0 ESW_TXVN_C_P0 ESW_TXVP_D_P0 ESW_TXVN_D_P0 ESW_TXVP_A_P1 ESW_TXVN_A_P1 ESW_TXVP_B_P1 ESW_TXVN_B_P1 ESW_TXVP_C_P1 ESW_TXVN_C_P1 ESW_TXVP_D_P1 ESW_TXVN_D_P1 GND ESW_TXVP_A_P2 ESW_TXVN_A_P2 ESW_TXVP_B_P2 ESW_TXVN_B_P2 ESW_TXVP_C_P2 ESW_TXVN_C_P2 ESW_TXVP_D_P2 ESW_TXVN_D_P2 GND ESW_TXVP_A_P3 ESW_TXVN_A_P3 ESW_TXVP_B_P3 ESW_TXVN_B_P3 ESW_TXVP_C_P3 ESW_TXVN_C_P3 ESW_TXVP_D_P3 ESW_TXVN_D_P3 GND ESW_TXVP_A_P4 ESW_TXVN_A_P4 ESW_TXVP_B_P4 ESW_TXVN_B_P4 ESW_TXVP_C_P4 ESW_TXVN_C_P4 ESW_TXVP_D_P4 ESW_TXVN_D_P4 ESW_P4_LED_0 ESW_P3_LED_0 ESW_P2_LED_0 ESW_P1_LED_0 ESW_P0_LED_0 ESW_DTEST GE2_TXD3 GE2_TXD2 GE2_TXD1 GE2_TXD0 ESW_DBG_B MDIO MDC GE2_TXEN GE2_TXCLK GE2_RXD3 GE2_RXD2 GE2_RXD1 GE2_RXD0 GE2_RXDV GE2_RXCLK GND RXD1 TXD1 PORST_N I2C_SCLK I2C_SD PCIE_TXN2 PCIE_TXP2 PCIE_RXN2 PCIE_RXP2 PCIE_CKN2 PCIE_CKP2 GPIO0 PERST_N PCIE_TXP1 PCIE_TXN1 PCIE_RXP1 PCIE_RXN1 PCIE_CKN1 PCIE_CKP1 WDT_RST_N PCIE_RXP0 PCIE_RXN0 PCIE_TXN0 PCIE_TXP0 PCIE_CKP0 PCIE_CKN0 GND JTMS JTDO JTDI JTRST_N JTCLK GND ND_D7 ND_D6 ND_D5 ND_D4 ND_D3 ND_D2 ND_D1 ND_D0 ND_RB_N ND_RE_N ND_CS_N ND_CLE ND_ALE ND_WE_N ND_WP`.split(" ");
const rm08 = `CTS1/G0 WDG CTS0/G1 RTS0/G2 RES0 RES1 RES2 GND WLED_N VDD_O EL4/G3 RES3 RES4 RES5 RES6 ES0 TXN4/G4 TXP4/G5 RXP0 RXN0 TXP1/G6 TXN1/G7 RXP1/G8 RXN1/G9 RXP2/G10 RXN2/G11 TXP2/G12 TXN2/G13 TXP3/G14 TXN3/G15 RXP3/G16 RXN3/G17 RXP4/G18 RXN4/G19 TXN0 TXP0 INT RX0 TX0 RX1/PWM0 ELED0 RST ES1 TX1/PWM1 G20 VCC EL3/G21 EL2/G22 EL1/G23 GND RES7 RTS1/G24`.split(" ");

function electrical(name, number, model) {
  if (name === "GND") return ["power_in", "Common supply and signal ground."];
  if (name === "3.3VD") return ["power_in", "3.3 V input. Supply all power contacts and allow for startup and radio current peaks."];
  if (name === "VCC") return ["power_in", "5 V input, 5.0 ±0.2 V. Provide at least 800 mA supply capability."];
  if (name === "VDD_O") return ["power_out", "3.3 V regulator output. Do not connect an external supply here."];
  if (/^RES\d/.test(name) || (model === "HLK-7621A" && number === 112)) return ["no_connect", "Reserved or NC in the referenced hardware manual. Leave unconnected."];
  if (name === "ANT") return ["passive", "2.4 GHz RF antenna land. The factory configuration routes RF to the I-PEX connector; change the selection link before using this land."];
  if (/^(MDI_|ESW_TXV|TX[PN]|RX[PN])/.test(name)) return ["passive", "Ethernet PHY differential connection. Use the required external magnetics. Multiplexed GPIO functions require matching firmware configuration."];
  if (/^USB_D/.test(name)) return ["bidirectional", "USB 2.0 differential data. Route as a controlled-impedance pair."];
  if (/^SSUSB_TX/.test(name)) return ["output", "USB 3.0 SuperSpeed transmit differential connection."];
  if (/^SSUSB_RX/.test(name)) return ["input", "USB 3.0 SuperSpeed receive differential connection."];
  if (/^PCIE_/.test(name)) return [/RX/.test(name) ? "input" : "output", "PCI Express lane or reference-clock connection. Observe the hardware manual's coupling and routing requirements."];
  if (/^(UART_)?TXD?\d+$/.test(name)) return ["output", "UART transmit output from the module. Connect to the host RX input."];
  if (/^(UART_)?RXD?\d+$/.test(name)) return ["input", "UART receive input into the module. Connect to the host TX output."];
  if (/^CTS/.test(name)) return ["input", "UART clear-to-send input, active low."];
  if (/^RTS\d+_N$/.test(name)) return ["output", "UART ready-to-send output, active low."];
  if (/^(PORST_N|RST|ES0|ES1|JTMS|JTDI|JTCLK|JTRST_N|ND_RB_N|GE2_RX)/.test(name)) return ["input", "Reset, mode-control, debug or peripheral input as named. Observe active-low suffixes and boot-strap restrictions."];
  if (/^(REF_CLK0|JTDO|GE2_TX|MDC$|ND_(RE|CS|CLE|ALE|WE|WP)|ELED0$|INT$|WDG$)/.test(name)) return ["output", "Module output for the named peripheral function. Check the hardware manual before connecting external pull resistors."];
  return ["bidirectional", "Named peripheral or multiplexed GPIO contact. I/O uses the module's 3.3 V domain. Firmware determines the active peripheral function; boot-strap contacts must retain the required startup level."];
}

function physicalPads(model, body) {
  const [w, h] = body;
  if (model === "HLK-7621A") return Array.from({ length: 140 }, (_, index) => {
    const bank = Math.floor(index / 35);
    const offset = 3.41 + index % 35 * 1.27;
    const [x, y] = [[offset, h], [w, h - offset], [w - offset, 0], [0, offset]][bank];
    return { id: `p${index + 1}`, x: x - w / 2, y: y - h / 2, size: bank % 2 ? [2, 0.8] : [0.8, 2], smd: true };
  });
  if (model === "HLK-RM08K") return Array.from({ length: 52 }, (_, index) => {
    const [x, y] = index < 20 ? [1.0 + index * 2, h - 1.1] : index < 32
      ? [w - 1.1, h - 3.5 - (index - 20) * 2] : [39 - (index - 32) * 2, 1.1];
    return { id: `p${index + 1}`, x: x - w / 2, y: y - h / 2, size: index >= 20 && index < 32 ? [2, 1.1] : [1.1, 2], smd: true };
  });
  const pads = Array.from({ length: 56 }, (_, index) => {
    const [x, y] = index < 23 ? [32.1 - index * 1.4, 0] : index < 33 ? [0, 3 + (index - 23) * 1.4] : [1.3 + (index - 33) * 1.4, h];
    return { id: `p${index + 1}`, x: x - w / 2, y: y - h / 2, size: index >= 23 && index < 33 ? [2, 1] : [1, 2], smd: true };
  });
  const center = model === "HLK-7628N" ? 14 : 12;
  pads.push({ id: "p1", x: center - w / 2, y: h / 2 - 9.1, size: [5, 5], smd: true },
    ...[6.8, 13.4].map(y => ({ id: "p1", x: w / 2 - 5.85, y: h / 2 - y, size: [2.5, 1.5], smd: true })));
  return pads;
}

function router({ model, chipName, names, body, reference, cad, note }) {
  const large = names.length > 60;
  const scale = 14;
  const margin = large ? 140 : 125;
  const left = margin, top = margin;
  const width = Math.ceil(body[0] * scale + margin * 2);
  const height = Math.ceil(body[1] * scale + margin * 2);
  const pads = physicalPads(model, body);
  const pins = names.map((name, index) => {
    const number = index + 1;
    const [type, description] = electrical(name, number, model);
    const pad = pads[index];
    const side = large ? ["bottom", "right", "top", "left"][Math.floor(index / 35)]
      : model === "HLK-RM08K" ? index < 20 ? "bottom" : index < 32 ? "right" : "top"
      : index < 23 ? "top" : index < 33 ? "left" : "bottom";
    return { id: `p${number}`, number: String(number), label: name, type,
      description: `${number} — ${description}`, surface: true, labelSide: side,
      x: left + (pad.x + body[0] / 2) * scale,
      y: top + (pad.y + body[1] / 2) * scale };
  });
  const id = model.toLowerCase();
  const component = {
    id, art: id, name: `Hi-Link ${model} Router Module`, shortName: model, manufacturer: "Hi-Link", category: "Wireless modules",
    referencePrefix: "U", subtitle: `${chipName} / ${names.length} contacts`, width, height, pins, contactLayout: "physical",
    description: `${model} module in the package shown by the referenced manufacturer manual. ${note} Component-side view; connection points sit on the corresponding physical edge lands.`,
    source: reference, tags: ["hilink", "hi-link", model.toLowerCase(), chipName.toLowerCase(), "router", "ethernet", "openwrt", "linux", ...(large ? [] : ["wifi"])],
  };
  const art = (part, showLabels = true) => {
    const bw = body[0] * scale, bh = body[1] * scale;
    const hardware = pads.slice(0, names.length).map((pad, index) => {
      const pin = part.pins[index];
      const w = pad.size[0] * scale * 0.65, h = pad.size[1] * scale * 0.65;
      return rect(pin.x - w / 2, pin.y - h / 2, w, h, 0.7, "#c9ae65", "#eddfab");
    }).join("");
    const captions = showLabels ? part.pins.map(pin => {
      const caption = `${pin.number} ${pin.label}`;
      if (pin.labelSide === "left") return label(pin.x - 15, pin.y, caption, 8, "#344851", "end");
      if (pin.labelSide === "right") return label(pin.x + 15, pin.y, caption, 8, "#344851", "start");
      const y = pin.y + (pin.labelSide === "top" ? -16 : 16);
      return `<g transform="translate(${pin.x} ${y}) rotate(-90)">${label(0, 0, caption, 8, "#344851", pin.labelSide === "top" ? "start" : "end")}</g>`;
    }).join("") : "";
    let face;
    if (large) {
      face = chip(left + bw * 0.58, top + bh * 0.30, bw * 0.29, bh * 0.26, "MT7621AT", 10) +
        chip(left + bw * 0.18, top + bh * 0.37, bw * 0.27, bh * 0.19, "DDR3", 8) +
        chip(left + bw * 0.1, top + bh * 0.67, 43, 27, "SPI", 4) +
        rect(left + bw * 0.18, top + bh * 0.87, 30, 17, 1, "#313b3c", "#999f91") +
        Array.from({ length: 10 }, (_, i) => smd(left + 12 + i * 25, top + 14)).join("") +
        Array.from({ length: 12 }, (_, i) => smd(left + 18 + i % 4 * 40, top + bh * 0.72 + Math.floor(i / 4) * 12)).join("");
    } else {
      face = rect(left + 30, top + 7, bw - 37, bh - 14, 2, "#b8bfc0", "#e3e5df") +
        Array.from({ length: 12 }, (_, i) => line(left + 32, top + 14 + i * (bh - 25) / 12, left + bw - 10, top + 13 + i * (bh - 25) / 12, "#c7cbca", 0.7)).join("") +
        label(left + bw * 0.57, top + bh * 0.34, "Hi-Link", 20, "#f0f2ed") +
        label(left + bw * 0.57, top + bh * 0.54, model, 12, "#eff1ec") +
        label(left + bw * 0.57, top + bh * 0.73, "RoHS  CE", 10, "#e9ece8") +
        (model === "HLK-RM08K" ? rect(left + 35, top + 11, bw - 50, bh - 24, 1, "#f0eee9", "#777f80") +
          label(left + bw * 0.56, top + bh * 0.35, "UART WiFi MODULE", 10, "#313c42") +
          label(left + bw * 0.56, top + bh * 0.54, model, 17, "#313c42") +
          Array.from({ length: 40 }, (_, i) => rect(left + 45 + i * 5.3, top + bh * 0.65, i % 3 ? 1.3 : 2.5, 14, 0, "#454a48")).join("") : "") +
        rect(left + 5, top + 6, 17, 17, 1, "#b2a167", "#e7d598") + circle(left + 13.5, top + 14.5, 6, "#e1d7aa", "#9a8951") +
        circle(left + 13.5, top + 14.5, 1.8, "#6d592e") +
        (model === "HLK-7628N" ? rect(left + 5, top + bh - 23, 17, 17, 1, "#b2a167") + circle(left + 13.5, top + bh - 14.5, 6, "#e1d7aa") : smd(left + 9, top + bh - 19));
    }
    return rect(left, top, bw, bh, 1, "#174a70", "#5a8093") + face + hardware +
      label(left + bw / 2, top + bh - 16, model, 11, "#eef2f1") + captions;
  };
  return { component, art, footprint: {
    body, color: "#174a70", pads,
    note: model === "HLK-RM08K" ? "Reference SMD carrier for the 52-contact RM08K version. Two-millimeter contact pitch follows the manual; pad centers, board-edge offsets and land sizes are representative and must be checked against the fitted module. The pin and half-pin variants require their own mechanical carrier."
      : "Reference SMD carrier using the manufacturer's top-view pad numbering and pitch. Verify land extension and solder-mask openings against the linked CAD. The three unnumbered thermal lands on the 56-contact modules repeat ground terminal 1. Canvas contacts use the same component-side numbering as the physical lands.",
  }, model: { label: `Hi-Link ${model} manufacturer reference PCB and schematic CAD`, url: cad } };
}

const host = "https://h.hlktech.com/download/";
const entries = [
  router({ model: "HLK-7688A", chipName: "MT7688AN", names: router56, body: [33.2, 18.7],
    reference: host + "HLK-7688A/1/HLK-7688A%E7%A1%AC%E4%BB%B6%E6%89%8B%E5%86%8CV1.4.pdf",
    cad: host + "HLK-7688A/1/7688%EF%BC%A1%E5%BA%95%E6%9D%BF%E5%B0%81%E8%A3%85%E5%B0%BA%E5%AF%B8%E8%B5%84%E6%96%99%E5%92%8CPCB%E5%8E%9F%E7%90%86%E5%9B%BE.zip",
    note: "Hardware manual V1.4, 56 castellated contacts, one antenna connector and a 3.3 V supply. OpenWrt and the factory serial-bridge firmware expose different multiplexed functions." }),
  router({ model: "HLK-7628N", chipName: "MT7628NN", names: router56, body: [35.5, 18.7],
    reference: host + "HLK-7628N/1/HLK-7628N%E7%A1%AC%E4%BB%B6%E6%89%8B%E5%86%8CV2.6.pdf",
    cad: host + "HLK-7628N/1/HLK-7628N%E8%BD%AC%E6%8E%A5%E6%9D%BF%E4%B8%8E%E5%BA%95%E6%9D%BF%E8%AE%BE%E8%AE%A1.rar",
    note: "Hardware manual V2.6, 56 castellated contacts and two antenna connectors. The 1.4 mm edge pitch is shared with HLK-7688A, but the board length differs." }),
  router({ model: "HLK-7621A", chipName: "MT7621AT", names: router140, body: [50, 50],
    reference: host + "HLK-7621/1/HLK-7621A%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C_V1.5.pdf",
    cad: host + "HLK-7621/1/HLK-7621%E5%BA%95%E6%9D%BFPCB%E5%8E%9F%E7%90%86%E5%9B%BE%20V2.5.zip",
    note: "User manual V1.5, 140 contacts at 1.27 mm pitch. Exposes five Gigabit Ethernet PHY ports, USB, PCIe, RGMII, NAND and control signals. Wi-Fi requires an external radio module." }),
  router({ model: "HLK-RM08K", chipName: "MT7688K", names: rm08, body: [40.1, 29],
    reference: host + "HLK-RM08K/1/HLK-RM08K--%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C--V1.6.pdf",
    cad: host + "HLK-RM08K/1/HLK-RM08K%E5%8E%9F%E7%90%86%E5%9B%BE-V3.4.zip",
    note: "User manual V1.6, 52-contact SMD version. VCC is a 5 V input and VDD_O is a 3.3 V output. Reserved contacts remain unconnected." }),
];

const hilinkComponents = entries.map(entry => entry.component);
const hilinkArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const hilinkFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const hilinkModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("hilink", (hilinkComponents).map(component => ({ component, render: (hilinkArt)[component.art], footprint: (hilinkFootprints)[component.id], model: hilinkModels[component.id] })));
