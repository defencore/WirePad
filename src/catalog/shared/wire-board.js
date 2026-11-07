import { circle, label, path, rect } from "./svg.js";
const split = value => value.split(/\s+/);

// Coordinates are shared by the illustrated contact and its canvas anchor.
export function readyRow(ref, signals, x, y, dx, dy, options = {}) {
  return (Array.isArray(signals) ? signals : split(signals)).map((signal, i) => ({
    ref, signal, number: `${ref}.${options.numbers?.[i] ?? i + 1}`,
    x: x + dx * i, y: y + dy * i, side: options.side ?? "right",
    caption: options.captions?.[i] ?? signal, ...options.overrides?.[i],
  }));
}

function electrical(signal, spec) {
  if (spec.types?.[signal]) return spec.types[signal];
  if (signal === "GND" || signal.startsWith("VSS")) return "power_in";
  if (signal === "NC") return "no_connect";
  if (/^(VBUS|5V|VIN|VBAT|BAT|VSYS|3V3_IN|VDDIO\d)/.test(signal)) return "power_in";
  if (/^(3V3|1V8|VDD\d|ALDO|BLDO|DC\d)/.test(signal)) return "power_out";
  if (/^(RST|RESET|PU_CHIP|SWDCLK)/.test(signal)) return "input";
  if (/^(LINEOUT|SPK|TXD|USB_P|USB_N)/.test(signal)) return signal.startsWith("USB") ? "bidirectional" : "output";
  if (/^(ADC|A[0-5]$|MIC)/.test(signal)) return "input";
  if (/^GPIO(34|35|36|37|38|39)$/.test(signal) && spec.esp32) return "input";
  return "bidirectional";
}

function functionNote(signal, spec) {
  if (signal === "VSS28_CIS") return "BL808 image-sensor LDO analog-ground node. Follow the module's camera power reference layout.";
  if (signal === "GND" || signal.startsWith("VSS")) return "Common ground.";
  if (signal === "NC") return "Not connected in this exact schematic revision.";
  if (/^(VBAT|BAT)/.test(signal)) return "Single-cell rechargeable Li-ion/LiPo battery rail, nominal 3.7 V, maximum 4.2 V. Observe the illustrated socket polarity.";
  if (signal === "VBUS" || signal === "5V") return "USB 5 V power rail. Follow the board power-path schematic before combining supplies.";
  if (signal === "VIN") return "DC input, 6–12 V; this is not a GPIO-voltage rail.";
  if (signal === "3V3") return "Regulated 3.3 V output. Do not short independent power sources together.";
  if (signal === "1V8_OUT") return "BL808 integrated 1.8 V regulator output; this is not a GPIO.";
  if (signal === "VDD28_CIS") return "BL808 integrated image-sensor AVDD LDO output. Follow the camera power settings and load limits in the BL808 datasheet.";
  if (signal === "VDD15_CIS") return "BL808 integrated image-sensor DVDD LDO output. Follow the camera power settings and load limits in the BL808 datasheet.";
  if (signal === "VDD_nRF") return "Board-regulated nRF52840 supply / debug voltage reference, nominal 3.3 V. This is not a 5 V power input.";
  if (/^(ALDO|BLDO|DC\d)/.test(signal)) return "PMIC supply output. Use the exact board power configuration and verify the rail voltage before connecting a load.";
  if (signal === "SOLAR_IN") return "Charging power input. Observe the board-specific solar voltage range below.";
  if (signal === "3V3_IN") return "3.3 V module supply input. The module also requires the separate VDDIO bank supplies.";
  if (signal.startsWith("VDDIO")) return "I/O-bank supply input. Select the voltage from the manufacturer BL808 module schematic; it controls the associated GPIO domain.";
  if (signal === "VSYS") return "System power rail, supplied by the board's USB/battery power path; this is not a 3.3 V GPIO rail.";
  if (signal.startsWith("LINEOUT")) return "Analog line-level audio output. This is not a digital GPIO or a direct loudspeaker power output.";
  if (signal.startsWith("MIC")) return "Analog microphone input. Follow the reference biasing and differential microphone connections.";
  if (signal.startsWith("CSI")) return "MIPI CSI differential camera contact. This is not a 3.3 V GPIO.";
  if (signal === "USB_P" || signal === "USB_N") return "USB 2.0 differential data contact. This is not a GPIO.";
  if (signal === "ADC0") return "Dedicated analog input. The board pinout does not specify its input range; use the V831 analog specification before connecting a voltage.";
  if (signal.startsWith("SPK")) return "Bridge audio amplifier output. Connect the speaker between SPK+ and SPK−; neither output is ground.";
  if (/^(RST|RESET|PU_CHIP)/.test(signal)) return `Active-low reset/chip enable. ${spec.resetVoltage ?? "Use the native board logic voltage"}; do not apply 5 V.`;
  if (spec.esp32 && /^GPIO(34|35|36|37|38|39)$/.test(signal)) return "ESP32 input-only ADC/GPIO, 3.3 V maximum; no internal pull-up or pull-down.";
  return `${spec.logic ?? "3.3 V"} signal. Select the required alternate function in firmware.`;
}

export function readyBoard(spec) {
  const pins = spec.contacts.map(p => ({
    id: p.number.toLowerCase().replace(/[^a-z0-9]+/g, "-"), number: p.number,
    label: p.signal, x: p.x, y: p.y, surface: true,
    type: p.type ?? electrical(p.signal, spec),
    description: `${p.number} — ${p.note ?? functionNote(p.signal, spec)}${spec.functions?.[p.signal] ? ` ${spec.functions[p.signal]}` : ""}`,
  }));
  const component = {
    id: spec.id, art: spec.id, name: spec.name, shortName: spec.short,
    manufacturer: spec.manufacturer ?? "Sipeed", category: spec.category ?? "Microcontrollers",
    subtitle: spec.subtitle, description: spec.description, source: spec.source,
    tags: spec.tags, referencePrefix: "U", contactLayout: "physical",
    width: spec.width, height: spec.height, pins,
  };
  const art = (part, showLabels = true) => spec.draw(showLabels) + spec.contacts.map((p, i) => {
    const pin = part.pins[i], r = p.radius ?? 4;
    const contact = p.shape === "square" ? rect(pin.x - r, pin.y - r, r * 2, r * 2, 0.7, "#d4b677", "#f2de9f")
      : circle(pin.x, pin.y, r, "#d4b677", "#f2de9f") + (p.solid ? "" : circle(pin.x, pin.y, r * .45, "#1a2428"));
    if (!showLabels || p.hideLabel) return contact;
    const side = p.side ?? "right", dx = p.labelDx ?? (side === "left" ? -9 : side === "right" ? 9 : 0);
    const dy = p.labelDy ?? (side === "top" ? -10 : side === "bottom" ? 11 : 0);
    const caption = p.caption ?? p.signal, font = p.font ?? 7.3;
    const textWidth = caption.length * font * .63;
    const textX = pin.x + dx - (side === "left" ? textWidth : side === "right" ? 0 : textWidth / 2);
    const textY = pin.y + dy - font / 2;
    const inside = (spec.boardBounds ?? []).some(([x, y, w, h]) => textX >= x + 2 && textX + textWidth <= x + w - 2 && textY >= y + 2 && textY + font <= y + h - 2);
    return contact + label(pin.x + dx, pin.y + dy, caption, font, p.labelColor ?? (inside ? "#e1e6dc" : "#324a55"), side === "left" ? "end" : side === "right" ? "start" : "middle");
  }).join("");
  const refs = [...new Set(spec.contacts.map(p => p.ref))];
  const pads = spec.contacts.map(p => {
    const bank = refs.indexOf(p.ref), same = spec.contacts.filter(x => x.ref === p.ref);
    const index = same.indexOf(p);
    return { id: pins[spec.contacts.indexOf(p)].id, x: (bank % 4) * 12.7, y: Math.floor(bank / 4) * 88.9 + index * 2.54, size: 1.75, drill: 1, square: index === 0 };
  });
  const maxX = Math.max(...pads.map(p => p.x)), maxY = Math.max(...pads.map(p => p.y));
  pads.forEach(p => { p.x -= maxX / 2; p.y -= maxY / 2; });
  const footprint = { body: [maxX + 10.16, maxY + 10.16], color: "#283b35", pads,
    note: `Reference off-board cable-termination carrier for ${spec.name}. One 2.54 mm termination row per named connector; these rows are not the board's mating land pattern. The displayed board geometry is a source-based illustration, not a mechanical drawing. ${spec.footnote ?? "Use the linked manufacturer CAD for an enclosure or mating PCB."}` };
  return { component, art, footprint, model: { label: spec.cadLabel ?? `${spec.name} manufacturer CAD / mechanical reference`, url: spec.cad ?? spec.source } };
}

export const readySocket = (x, y, width, height, name, vertical = false) => rect(x, y, width, height, 2, "#e2e0d1", "#9ca59b") +
  rect(x + 3, y + 3, width - 6, height - 6, 1, "#3b423e") + label(x + width / 2, y + height / 2, name, vertical ? 6 : 7, "#eee8d7");
export const readyAntenna = (x, y, width) => path(`M${x} ${y + 25}V${y}H${x + width}V${y + 25}H${x + width - 12}V${y + 7}H${x + width - 25}V${y + 25}H${x + width - 38}V${y + 7}H${x + width - 51}V${y + 25}`, "none", "#b4ae7a", 4);
