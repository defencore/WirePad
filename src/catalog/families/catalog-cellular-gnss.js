import { defineFamily } from "../registry.js";
import { circle, label, rect } from "../shared/svg.js";

const sim800Names = `UART1_TXD UART1_RXD UART1_RTS UART1_CTS UART1_DCD UART1_DTR UART1_RI GND MICP MICN SPKP SPKN GND SIM_DET SIM_DATA SIM_CLK SIM_RST SIM_VDD GND BT_ANT GND UART2_TXD UART2_RXD USB_VBUS USB_DP USB_DM GND VRTC RF_SYNC GND GND GSM_ANT GND VBAT VBAT GND GND ADC PWRKEY VDD_EXT NETLIGHT STATUS`.split(" ");
const sim800Inputs = new Set([2, 3, 6, 9, 10, 14, 23, 24, 38, 39]);
const sim800Outputs = new Set([1, 4, 5, 7, 11, 12, 16, 17, 22, 29, 41, 42]);
const sim800Specs = sim800Names.map((name, i) => {
  const n = i + 1;
  if (name === "GND") return [name, "power_in", "Module ground. Connect all ground lands to a low-impedance ground plane."];
  if (name === "VBAT") return [name, "power_in", "3.4–4.4 V input. Supply both VBAT contacts and support 2 A GSM transmit bursts."];
  if (n === 18) return [name, "power_out", "SIM-card supply output, selected automatically for 1.8 V or 3 V cards."];
  if (n === 40) return [name, "power_out", "2.8 V reference output for external level translation. Leave open if unused."];
  if (n === 28) return [name, "bidirectional", "RTC backup supply. Connect a suitable backup capacitor or battery according to the reference circuit."];
  if (n === 20 || n === 32) return [name, "passive", "50 Ω RF antenna connection. Bluetooth operation requires matching firmware support."];
  if (n === 39) return [name, "input", "Power key, internally pulled up. Pull low for at least one second and release to switch power state."];
  if (n === 38) return [name, "input", "10-bit analog input, 0–2.8 V measurement range."];
  if (n === 3) return [name, "input", "UART1 request-to-send input into the DCE module. Connect to the host RTS output."];
  if (n === 4) return [name, "output", "UART1 clear-to-send output from the DCE module. Connect to the host CTS input."];
  if (n === 15) return [name, "bidirectional", "SIM-card bidirectional data. Use the prescribed ESD protection."];
  if (n === 25 || n === 26) return [name, "bidirectional", "USB debug and firmware-download differential data connection."];
  return [name, sim800Inputs.has(n) ? "input" : sim800Outputs.has(n) ? "output" : "passive",
    `${name} hardware interface. UART and digital I/O use the module's 2.8 V domain; audio pins are differential analog signals.`];
});

const sim7600Names = `WAKE# VCC NC GND NC NC NC USIM_VDD GND USIM_DATA UART_CTS USIM_CLK UART_RTS USIM_RST GND USIM_DET UART_RXD GND UART_TXD W_DISABLE# GND PERST# NC VCC NC GND GND NC GND SCL NC SDA NC GND GND USB_DN GND USB_DP VCC GND VCC LED_WWAN# GND UART_RI PCM_CLK UART_DTR PCM_OUT NC PCM_IN GND PCM_SYNC VCC`.split(" ");
const ec25Names = `WAKE# VCC_3V3 COEX_UART_RX GND COEX_UART_TX NC RESERVED USIM_VDD GND USIM_DATA UART_RX USIM_CLK UART_TX USIM_RST GND RESERVED RI GND RESERVED W_DISABLE# GND PERST# UART_CTS RESERVED UART_RTS GND GND NC GND I2C_SCL DTR I2C_SDA RESERVED GND GND USB_DM GND USB_DP VCC_3V3 GND VCC_3V3 LED_WWAN# GND USIM_PRESENCE PCM_CLK RESERVED PCM_DOUT NC PCM_DIN GND PCM_SYNC VCC_3V3`.split(" ");

function miniSpecs(names, quectel) {
  return names.map(name => {
    if (name === "GND") return [name, "power_in", "Mini PCIe card ground."];
    if (name === "VCC" || name === "VCC_3V3") return [name, "power_in", "3.0–3.6 V input, nominal 3.3 V. Connect every supply contact and provide the specified peak-current capability."];
    if (name === "NC" || name === "RESERVED") return [name, "no_connect", "Leave this unused or reserved card-edge contact unconnected."];
    if (name === "USIM_VDD") return [name, "power_out", "1.8 V or 3 V SIM-card supply output, selected for the attached card."];
    if (/^USB_D/.test(name)) return [name, "bidirectional", "USB 2.0 differential data. This modem uses USB, not a PCIe data lane."];
    if (name === "USIM_DATA" || name === "SDA") return [name, "bidirectional", "Bidirectional data for the named interface. Observe its SIM or 1.8 V I/O domain."];
    if (name.startsWith("I2C_")) return [name, "open_collector", "Open-drain I²C signal. The EC25 design requires an external pull-up to 1.8 V."];
    if (name === "WAKE#") return [name, quectel ? "open_collector" : "bidirectional", "Host wake-up signal, active low." + (quectel ? "" : " This entry selects the digital-audio PCIE version, not the analog-audio PCIEA variant.")];
    if (name === "LED_WWAN#") return [name, "output", "Network-status indicator output. Follow the manufacturer's LED driver circuit."];
    if (/RX|CTS|DTR|PRESENCE|DET|DISABLE|PERST|PCM_IN|PCM_DIN/.test(name)) return [name, "input", `${name} input into the modem. Digital UART/control signals are in the 1.8 V domain. Active-low control signals use the # suffix.`];
    if (name === "PCM_SYNC" && quectel) return [name, "bidirectional", "PCM frame synchronization. PCM contacts are supported only by the EC25 Telematics version; leave unused for other versions."];
    return [name, "output", `${name} output from the modem.${name.startsWith("PCM") && quectel ? " PCM is supported only by the EC25 Telematics version." : ""} Check the interface's voltage domain before attaching host GPIO.`];
  });
}

function lcSpecs(variant) {
  const supply = variant === "PB" ? "1.75–1.98 V (nominal 1.8 V)" : "2.55–3.6 V (nominal 3.3 V)";
  return [
    ["GND", "power_in", "Module ground."],
    ["TXD", "output", "UART transmit output. Outputs NMEA, RTCM responses and Quectel protocol messages."],
    ["RXD", "input", "UART receive input for commands, RTCM and firmware upgrade."],
    ["1PPS", "output", "One pulse per second, rising-edge synchronized."],
    ["RESERVED", "no_connect", "Leave floating."],
    ["V_BCKP", "power_in", `Backup supply, 1.65–3.6 V. Must also be powered for startup; nominal ${variant === "PB" ? "1.8" : "3.3"} V.`],
    ["RESERVED", "no_connect", "Leave floating."],
    ["VCC", "power_in", `Main supply ${supply}. Match the host I/O voltage to this exact variant.`],
    ["RESET_N", "input", `Active-low module reset. Maximum input ${variant === "PB" ? "2.1" : "3.6"} V.`],
    ["GND", "power_in", "RF ground."],
    ["RF_IN", "input", "GNSS antenna RF input, 50 Ω. Use the manufacturer's antenna matching and bias circuit."],
    ["GND", "power_in", "RF ground."],
    ["ANT_ON", "output", "External antenna/LNA power-enable output. Goes low in Backup mode."],
    ["VDD_RF", "power_out", "External RF-component supply output, equal to VCC. Check available current before attaching an active antenna."],
    ["RESERVED", "no_connect", "Leave floating."],
    ["I2C_SDA", "bidirectional", "I²C slave data for commands, NMEA and RTCM."],
    ["I2C_SCL", "input", "I²C slave clock input."],
    ["RESERVED", "no_connect", "Leave floating."],
    ["RESERVED", "no_connect", "Leave floating."],
    ["SPI_CS", "input", "SPI slave chip select."],
    ["GEOFENCE", "output", "Geofence status. Do not pull high during the first 50 ms after startup or reset."],
    ["JAM_IND", "output", "RF jamming indication output."],
    ["3D_FIX", "output", "3D-fix status. Do not pull high during the first 50 ms after startup or reset."],
    ["D_SEL", "input", "Communication-interface selection sampled at startup, internally pulled down."],
    ["SPI_CLK", "input", "SPI slave clock input."],
    ["SPI_MISO", "output", "SPI slave data output."],
    ["SPI_MOSI", "input", "SPI slave data input."],
    ["GND", "power_in", "Module ground, underside LGA contact."],
  ];
}

function moduleEntry({ id, name, manufacturer, specs, body, source, style, subtitle, description, numbers, modelReference }) {
  const mini = style === "mini" || style === "m2";
  const m2 = style === "m2";
  const pins = specs.map(([caption, type, description], index) => ({
    id: `p${numbers?.[index] ?? index + 1}`, number: String(numbers?.[index] ?? index + 1), label: caption, type,
    description: `${numbers?.[index] ?? index + 1} — ${description}`, surface: true,
  }));
  let pads;
  if (mini) pads = pins.map((pin, i) => ({ id: pin.id, x: i % 2 ? body[0] / 2 + 2.54 : -body[0] / 2 - 2.54, y: -31.75 + Math.floor(i / 2) * 2.54, size: 1.7, drill: 1 }));
  else if (style === "sim800") pads = pins.map((pin, i) => {
    let x, y;
    if (i < 12) [x, y] = [-7.85, -6.05 + i * 1.1];
    else if (i < 21) [x, y] = [-4.4 + (i - 12) * 1.1, 8.8];
    else if (i < 33) [x, y] = [7.85, 6.05 - (i - 21) * 1.1];
    else [x, y] = [4.4 - (i - 33) * 1.1, -8.8];
    return { id: pin.id, x, y, size: i < 12 || i >= 21 && i < 33 ? [1.6, 0.6] : [0.6, 1.6], smd: true, shape: "oval" };
  });
  else pads = pins.map((pin, i) => {
    let x, y;
    if (i < 9) [x, y] = [-4.85, -4.4 + i * 1.1];
    else if (i < 18) [x, y] = [4.85, 4.4 - (i - 9) * 1.1];
    else if (i < 23) [x, y] = [2.2 - (i - 18) * 1.1, -4.4];
    else [x, y] = [-2.2 + (i - 23) * 1.1, 4.4];
    return { id: pin.id, x, y, size: i < 18 ? [1.8, 0.8] : [0.8, 0.8], smd: true, shape: i < 18 ? "oval" : "rect" };
  });
  const scale = mini ? 12 : 20;
  const margin = 130, gap = mini ? 120 : 160;
  const bw = body[0] * scale, bh = body[1] * scale;
  const twoViews = mini || style === "gnss";
  const width = Math.ceil(bw * (twoViews ? 2 : 1) + margin * 2 + (twoViews ? gap : 0));
  const height = Math.ceil(bh + margin * 2);
  const lefts = [margin, margin + bw + gap];
  for (let i = 0; i < pins.length; i++) {
    const pin = pins[i], n = Number(pin.number);
    if (mini) {
      const front = n % 2 === 1;
      const slot = Math.floor((n - 1) / 2);
      const offset = m2 ? 6 + slot * 0.5 : 3.7 + slot * 0.8 + (slot >= 8 ? 3.2 : 0);
      pin.view = front ? 0 : 1;
      pin.x = lefts[pin.view] + (m2 ? front ? body[0] - offset : offset : front ? offset : body[0] - offset) * scale;
      pin.y = margin + bh - 7;
      pin.labelSide = "bottom";
    } else {
      const bottom = style === "gnss";
      pin.view = bottom ? 1 : 0;
      pin.x = lefts[pin.view] + bw / 2 + (bottom ? -1 : 1) * pads[i].x * scale;
      pin.y = margin + bh / 2 + pads[i].y * scale;
      pin.labelSide = style === "sim800" ? i < 12 ? "left" : i < 21 ? "bottom" : i < 33 ? "right" : "top"
        : i < 9 ? "right" : i < 18 ? "left" : i < 23 ? "top" : "bottom";
    }
  }
  const component = { id, art: id, name, shortName: name.replace(manufacturer + " ", ""), manufacturer,
    category: style === "gnss" ? "Sensors" : "Wireless modules", referencePrefix: "U", width, height, pins, source, subtitle, contactLayout: "physical",
    description: description + (twoViews ? mini ? " Component-side odd contacts and mirrored bottom-side even contacts are shown on separate views of the same card." : " The left view shows the shield; the right view shows the mirrored underside with all LCC/LGA solder lands." : " Connection points follow the component-side package lands."),
    tags: [manufacturer.toLowerCase(), id, "module", ...(style === "gnss" ? ["gnss", "gps", "lc76g", "quectel", "uart", "i2c", "spi"] : ["modem", "cellular", "sim", "uart", "usb", ...(m2 ? ["m.2", "m2", "b key", "luckfox"] : mini ? ["mini pcie"] : ["gsm"])])],
  };
  const art = (part, showLabels = true) => {
    const front = (x) => rect(x, margin, bw, bh, 2, "#194c61", "#7c9697") +
      rect(x + 12, margin + (mini ? 45 : 6), bw - 24, bh - (mini ? 90 : 12), 3, "#b1bbbd", "#e4e7e3") +
      rect(x + 18, margin + (mini ? 51 : 13), bw - 36, bh - (mini ? 103 : 26), 1, "#e8e7df", "#b4bcb9") +
      label(x + bw / 2, margin + bh * 0.35, manufacturer, 16, "#273d48") +
      label(x + bw / 2, margin + bh * 0.49, mini ? m2 ? "SIM7600G-H" : id.includes("sim7600") ? "SIM7600E" : "EC25-E" : style === "sim800" ? "SIM800C" : "LC76G", 17, "#273d48") +
      label(x + bw / 2, margin + bh * 0.63, mini ? m2 ? "M.2 B KEY" : "Mini PCIe" : subtitle.split(" / ")[0], 8, "#58666a") +
      circle(x + 8, margin + 8, 3, "#414d50");
    let graphic = front(lefts[0]);
    if (twoViews) {
      const x = lefts[1];
      graphic += rect(x, margin, bw, bh, 2, m2 ? "#285f43" : "#23523f", "#7c9697") +
        (m2 ? rect(x + 5, margin + 10, bw - 10, bh - 55, 2, "#bca75b", "#ddcc8b") : "") +
        label(x + bw / 2, margin + bh / 2, "BOTTOM", 12, "#c9d8c3") +
        label(lefts[0] + bw / 2, margin - 28, mini ? "Component side · odd contacts" : "Component side", 10, "#344851") +
        label(x + bw / 2, margin - 28, mini ? "Bottom side · even contacts · mirrored" : "Bottom side · mirrored", 10, "#344851");
    }
    if (mini) {
      graphic += [0, 1, 2].map(i => {
        const x = lefts[0] + 22 + i * (bw - 44) / 2;
        return rect(x - 8, margin + 12, 16, 16, 1, "#b69c56") + circle(x, margin + 20, 5.5, "#ddd4ab", "#8f7d47");
      }).join("");
      for (let view = 0; view < 2; view++) {
        const x = lefts[view];
        const notch = m2 ? view ? 6 + 7.5 * 0.5 : body[0] - 6 - 7.5 * 0.5 : view ? body[0] - 3.7 - 7.5 * 0.8 - 1.6 : 3.7 + 7.5 * 0.8 + 1.6;
        graphic += rect(x + notch * scale - 11, margin + bh - 23, 22, 25, 2, "#fbfcfd") +
          (m2 ? circle(x + bw / 2, margin, 10, "#fbfcfd", "#bcab76")
            : circle(x + 10, margin + 8, 6, "#fbfcfd", "#bcab76") + circle(x + bw - 10, margin + 8, 6, "#fbfcfd", "#bcab76"));
      }
    }
    graphic += part.pins.map((pin, index) => {
      const size = mini ? [m2 ? 3.7 : 5.6, 17] : pads[index].size.map(v => v * scale * 0.8);
      const caption = `${pin.number} ${pin.label}`;
      const metal = rect(pin.x - size[0] / 2, pin.y - size[1] / 2, size[0], size[1], 0.8, "#c8ab62", "#f0d995");
      if (!showLabels) return metal;
      if (pin.labelSide === "left") return metal + label(pin.x - 20, pin.y, caption, 8, "#344851", "end");
      if (pin.labelSide === "right") return metal + label(pin.x + 20, pin.y, caption, 8, "#344851", "start");
      const above = pin.labelSide === "top";
      return metal + `<g transform="translate(${pin.x} ${pin.y + (above ? -16 : 16)}) rotate(-90)">${label(0, 0, caption, mini ? m2 ? 5.1 : 6.5 : 8, "#344851", above ? "start" : "end")}</g>`;
    }).join("");
    return graphic;
  };
  return { component, art, footprint: { body, color: "#285665", pads,
    note: mini ? `Off-board ${specs.length}-contact reference termination in two 2.54 mm rows, labelled by ${m2 ? "M.2" : "Mini PCIe"} contact number. This is not a mating ${m2 ? "M.2 B-key" : "Mini PCIe"} connector footprint or a card-edge land pattern. Select the actual socket footprint and mounting-height variant separately. ${m2 ? "Numbered positions 12–19 are the key notch and have no contacts." : ""} Antenna sockets are complete coaxial cable ports.`
      : style === "sim800" ? "SIMCom V1.05 recommended 42-land pattern, Figure 4: 1.10 mm pitch, 0.60 × 1.60 mm rounded lands. Module top view, 15.7 × 17.6 mm outline. Check the stated RF keepout regions and stencil drawing."
        : "Quectel V1.3 recommended footprint, Figure 18: eighteen 1.8 × 0.8 mm LCC lands and ten 0.8 mm square underside LGA lands, 1.1 mm pitch. Top-view numbering. Keep at least 3 mm clear around the module as specified in the hardware manual.",
  }, model: modelReference ?? { label: `${manufacturer} package drawing and recommended footprint (PDF)`, url: source } };
}

// Luckfox's published SIM7600G-H-M.2 R2 pinout has 67 contacts in 75 positions.
// The B-key notch removes positions 12–19; no electrical pads are invented there.
const m2Names = {
  1: "CONFIG_3=NC", 2: "VBAT", 3: "GND", 4: "VBAT", 5: "GND", 6: "FUL_CARD_POWER_OFF#", 7: "USB_D+", 8: "W_DISABLE1_N", 9: "USB_D-", 10: "LED1#", 11: "GND",
  20: "PCM_SYNC", 21: "CONFIG_0=GND", 22: "PCM_IN", 23: "WoWWAN#", 24: "PCM_OUT", 25: "DPR", 26: "W_DISABLE2_N", 27: "GND", 28: "PCM_CLK", 29: "NC", 30: "USIM_RST", 31: "NC", 32: "USIM_CLK", 33: "GND", 34: "USIM_DATA", 35: "NC", 36: "USIM_VDD", 37: "NC", 38: "NC", 39: "GND", 40: "I2C_SCL", 41: "NC", 42: "I2C_SDA", 43: "NC", 44: "GPIO44", 45: "GND", 46: "GPIO43", 47: "NC", 48: "GPIO41", 49: "NC", 50: "GPIO40", 51: "GND", 52: "UART_DTR", 53: "NC", 54: "UART_RTS", 55: "NC", 56: "UART_CTS", 57: "GND", 58: "UART_RXD", 59: "ANTCTL0", 60: "UART_TXD", 61: "ANTCTL1", 62: "GPIO77", 63: "ANTCTL2", 64: "GPIO3", 65: "ANTCTL3", 66: "USIM_DET", 67: "RESET#", 68: "NC", 69: "CONFIG_1=GND", 70: "VBAT", 71: "GND", 72: "VBAT", 73: "GND", 74: "VBAT", 75: "CONFIG_2=GND",
};
const m2Numbers = Object.keys(m2Names).map(Number).sort((a, b) => a - b);
const m2Specs = m2Numbers.map(number => {
  const name = m2Names[number];
  if (name === "NC" || name === "CONFIG_3=NC") return [name, "no_connect", "Unconnected contact in the manufacturer pinout. Leave open."];
  if (name === "GND" || name.endsWith("=GND")) return [name, "power_in", "Ground connection. CONFIG_0/1/2 are grounded module-configuration straps."];
  if (name === "VBAT") return [name, "power_in", "Module supply, 3.0–4.2 V. Connect all five supply contacts and support the modem's peak current."];
  if (name.startsWith("USB_")) return [name, "bidirectional", "USB 2.0 differential modem data. This M.2 module does not expose PCIe data lanes."];
  if (name === "USIM_VDD") return [name, "power_out", "SIM-card supply output, selected for the attached 1.8 V or 3 V card."];
  if (name === "USIM_DATA") return [name, "bidirectional", "SIM-card bidirectional data. Voltage follows USIM_VDD."];
  if (name === "USIM_CLK" || name === "USIM_RST") return [name, "output", "SIM-card clock/reset output. Voltage follows USIM_VDD."];
  if (name === "LED1#") return [name, "open_collector", "Open-drain LED/status output in the 3.3 V domain."];
  if (name === "WoWWAN#") return [name, "open_collector", "Open-drain WWAN wake output, 1.8/3.3 V domain as specified by the pinout."];
  if (name.startsWith("I2C_")) return [name, "open_collector", "1.8 V open-drain I²C interface. Match pull-ups to the specified domain."];
  if (name.startsWith("GPIO")) return [name, "bidirectional", "1.8 V GPIO. Availability and multiplexing depend on the modem firmware."];
  if (name === "FUL_CARD_POWER_OFF#") return [name, "input", "Full-card power-off control, active low, 1.8/3.3 V input. Name follows the published pinout."];
  if (name.startsWith("W_DISABLE")) return [name, "input", "Active-low wireless-disable control, 3.3 V input."];
  const output = name === "UART_CTS" || name === "UART_TXD" || name.startsWith("ANTCTL") || ["PCM_SYNC", "PCM_OUT", "PCM_CLK"].includes(name);
  return [name, output ? "output" : "input", `${name} ${output ? "output from" : "input into"} the module, 1.8 V domain.${name === "RESET#" ? " Active-low reset." : ""}${name === "UART_RTS" ? " RTS is an input on this DCE module." : ""}${name === "UART_CTS" ? " CTS is an output on this DCE module." : ""}`];
});

const entries = [
  moduleEntry({ id: "simcom-sim7600g-h-m2", name: "SIMCom SIM7600G-H M.2 (Luckfox)", manufacturer: "SIMCom", specs: m2Specs, numbers: m2Numbers, body: [31.4, 42], style: "m2",
    subtitle: "R2 module / M.2 B-key / 67 contacts", source: "https://wiki.luckfox.com/SIM7600G-H-M.2",
    description: "SIM7600G-H on the M.2 B-key adapter documented by Luckfox, with the R2 radio-module marking. All 67 contacts in 75 numbered positions are exposed; positions 12–19 are the key notch. Supply is 3.0–4.2 V. UART, GPIO and most controls use 1.8 V; wireless-disable inputs and open-drain indicators have the separately documented domains. The three IPEX4 antenna sockets are complete coaxial ports.",
    modelReference: { label: "Luckfox SIM7600G-H M.2 manufacturer mechanical drawing", url: "https://wiki.luckfox.com/assets/images/SIM7600G-H-M.2-details-size-38320bc75d04742d8e37d41063c930a5.webp" } }),
  moduleEntry({ id: "simcom-sim800c", name: "SIMCom SIM800C", manufacturer: "SIMCom", specs: sim800Specs, body: [15.7, 17.6], style: "sim800",
    subtitle: "42-pin LCC / Hardware Design V1.05", source: "https://simcom.ee/documents/SIM800C/SIM800C_Hardware_Design_V1.05.pdf",
    description: "SIM800C 42-contact LCC GSM/GPRS radio module, using the manufacturer's V1.05 hardware design. All package contacts are exposed. Requires an external SIM holder, RF antenna, power decoupling and host level translation. UART1 RTS is an input and CTS is an output from this DCE module." }),
  moduleEntry({ id: "simcom-sim7600e-minipcie", name: "SIMCom SIM7600E-PCIE", manufacturer: "SIMCom", specs: miniSpecs(sim7600Names, false), body: [31, 50.8], style: "mini",
    subtitle: "Mini PCIe / digital-audio PCIE / V1.01", source: "https://simcom.ee/documents/SIM7600E/SIM7600%20Series_PCIE_Hardware%20Design_V1.01.pdf",
    description: "SIM7600E-PCIE module with the complete 52-contact card-edge interface from Hardware Design V1.01. This entry is the PCIE digital-audio variant. PCIEA analog-audio variants assign different functions to contacts 1/3/5/7. Host communication uses USB and UART, with 1.8 V digital logic. Three antenna sockets are represented as complete coaxial ports." }),
  moduleEntry({ id: "quectel-ec25-e-minipcie", name: "Quectel EC25-E Mini PCIe", manufacturer: "Quectel", specs: miniSpecs(ec25Names, true), body: [30, 51], style: "mini",
    subtitle: "52 contacts / Hardware Design V2.4", source: "https://quectel.com/content/uploads/2024/02/Quectel_EC25_Mini_PCIe_Hardware_Design_V2.4-2.pdf",
    description: "Quectel EC25-E LTE Mini PCIe modem with all 52 card-edge contacts. Pin assignment follows Hardware Design V2.4. PCM contacts are available only on Telematics versions and should remain unused on other variants. This interface carries USB and modem signals rather than PCIe data. Antenna sockets are complete coaxial ports." }),
  ...["AB", "PA", "PB"].map(variant => moduleEntry({ id: "quectel-lc76g-" + variant.toLowerCase(), name: `Quectel LC76G (${variant})`, manufacturer: "Quectel", specs: lcSpecs(variant), body: [9.7, 10.1], style: "gnss",
    subtitle: `${variant} ${variant === "PB" ? "1.8 V" : "3.3 V"} / 18 LCC + 10 LGA`, source: "https://www.quectel.com/content/uploads/2023/05/Quectel_LC76G_Series_Hardware_Design_V1.3.pdf",
    description: `LC76G (${variant}) GNSS module with all 28 contacts, including ten underside LGA lands. Hardware Design V1.3, 2024-11-25. ${variant === "AB" ? "Standard-power" : "Low-power"} variant with ${variant === "PB" ? "1.8 V" : "3.3 V"} nominal supply and I/O. V_BCKP must be powered for startup. Supports UART, SPI or I²C according to interface selection.` })),
];

const cellularGnssComponents = entries.map(entry => entry.component);
const cellularGnssArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const cellularGnssFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const cellularGnssModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("cellular-gnss", (cellularGnssComponents).map(component => ({ component, render: (cellularGnssArt)[component.art], footprint: (cellularGnssFootprints)[component.id], model: cellularGnssModels[component.id] })));
