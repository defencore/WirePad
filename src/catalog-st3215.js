const width = 185;
const height = 120;

export const st3215 = {
  id: "st3215", name: "ST3215 Serial Bus Servo", shortName: "ST3215", category: "Actuators",
  description: "Waveshare ST3215 (SKU 22414), the 12 V nominal variant. The two 5264-3P ports share one half-duplex TTL serial bus. This illustration shows their shared GND, VCC, and DATA connections.",
  manufacturer: "Waveshare", subtitle: "TTL bus servo / 12 V nominal",
  tags: ["actuator", "motor", "servo", "sts3215", "single-wire", "half-duplex", "uart", "5264", "waveshare"],
  source: "https://docs.waveshare.com/ST3215_Servo",
  width, height, art: "st3215", referencePrefix: "M",
  // Servo-side numbering follows the Feetech ST-3215-C047 connector drawing.
  pins: [
    { id: "gnd", label: "GND", description: "Supply return and TTL signal reference. Share ground with the controller.", type: "power_in", number: "1", x: width, y: 41 },
    { id: "vcc", label: "VCC", description: "Servo power input, 6–12.6 V for this variant (12 V nominal). Stall current is 2.7 A at 12 V.", type: "power_in", number: "2", x: width, y: 60 },
    { id: "data", label: "DATA", description: "Single-wire, half-duplex TTL serial data at 1 Mbps by default. Use an ST/SC-compatible bus interface.", type: "bidirectional", number: "3", x: width, y: 79 },
  ],
};

export function drawSt3215({ pins }, showLabels = true) {
  const leadColors = ["#46535f", "#ca5d62", "#547bac"];
  const leads = pins.map((pin, index) => {
    const caption = showLabels ? `<text x="171" y="${pin.y - 4}" text-anchor="end" fill="#344450" font-size="7.5">${pin.label}</text>` : "";
    return `<path d="M126 ${pin.y}H${pin.x}" stroke="${leadColors[index]}" stroke-width="2.6"/>${caption}`;
  }).join("");

  return `<g font-family="ui-monospace, monospace" font-weight="600">
    ${leads}
    <rect x="7" y="15" width="132" height="91" rx="10" fill="#151b24"/>
    <rect x="7" y="12" width="132" height="91" rx="10" fill="#303b47" stroke="#151b24"/>
    <rect x="11" y="16" width="124" height="83" rx="8" fill="#242d38" stroke="#4d5a67"/>
    <path d="M74 19V96M78 19V96" fill="none" stroke="#171e28"/>
    <path d="M32 24h19l15 15v34L51 88H32L17 73V39Z" fill="#35424e" stroke="#576372"/>
    <circle cx="41.5" cy="56" r="22" fill="#242c34" stroke="#59646f"/>
    <circle cx="41.5" cy="56" r="14" fill="#9e734a" stroke="#d6b074" stroke-width="2"/>
    <circle cx="41.5" cy="56" r="10.2" fill="#a47c4a" stroke="#efcf8d" stroke-width="2" stroke-dasharray="1 1.6"/>
    <circle cx="41.5" cy="56" r="4.2" fill="#33302b" stroke="#aa8354"/>
    <circle cx="26" cy="37" r="2.3" fill="#10161e" stroke="#65717d"/>
    <circle cx="57" cy="37" r="2.3" fill="#10161e" stroke="#65717d"/>
    <circle cx="26" cy="75" r="2.3" fill="#10161e" stroke="#65717d"/>
    <circle cx="57" cy="75" r="2.3" fill="#10161e" stroke="#65717d"/>
    <rect x="84" y="33" width="40" height="48" rx="4" fill="#161f28" stroke="#475563"/>
    <text x="104" y="53" fill="#e3e9f1" text-anchor="middle" font-size="8.5">ST3215</text>
    <text x="104" y="66" fill="#a5bac9" text-anchor="middle" font-size="6.5">TTL SERVO</text>
    <rect x="129" y="32" width="13" height="54" rx="3" fill="#d8d7cf" stroke="#898d8a"/>
    <path d="M133 41h6m-6 19h6m-6 19h6" fill="none" stroke="#74654c" stroke-width="2"/>
  </g>`;
}
