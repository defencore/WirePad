const width = 232;
const height = 88;

function terminal(id, label, description, type, number, x, y) {
  return { id, label, description, type, number, x, y };
}

export const hw0519 = {
  id: "hw0519", name: "RS-485 to UART (HW-0519)", shortName: "HW-0519", category: "Interfaces",
  description: "Half-duplex RS-485 adapter with automatic direction control and separate UART and bus-side connections. Pin order follows the blue HW-0519 board.",
  manufacturer: "Generic breakout", subtitle: "UART / automatic direction", tags: ["hw0519", "hw-519", "rs485", "modbus", "uart", "ttl", "transceiver"],
  source: "https://tasmota.github.io/docs/SolaX-X1/#hw-0519",
  width, height, art: "hw0519", referencePrefix: "U",
  pins: [
    terminal("vcc", "VCC", "Module supply. Confirm the supported supply and UART logic levels for your board revision.", "power_in", "J1.1", 0, 25),
    terminal("txd", "TXD", "UART input on this board. Connect to the host TX pin.", "input", "J1.2", 0, 41),
    terminal("rxd", "RXD", "UART output on this board. Connect to the host RX pin.", "output", "J1.3", 0, 57),
    terminal("gnd", "GND", "UART-side ground and supply return.", "power_in", "J1.4", 0, 73),
    terminal("a", "A+", "RS-485 differential line marked A+ on the board.", "bidirectional", "J2.1", width, 18),
    terminal("b", "B−", "RS-485 differential line marked B− on the board.", "bidirectional", "J2.2", width, 45.5),
    terminal("earth", "EARTH", "Earth terminal on the RS-485 side. Verify its connection to UART ground on the fitted revision.", "passive", "J2.3", width, 73),
  ],
};

function chip(x, y, bodyWidth, bodyHeight, pins) {
  const legs = Array.from({ length: pins }, (_, index) => {
    const legY = y + 3 + index * (bodyHeight - 8) / (pins - 1);
    return `<rect x="${x - 4}" y="${legY}" width="5" height="2" rx=".5"/><rect x="${x + bodyWidth - 1}" y="${legY}" width="5" height="2" rx=".5"/>`;
  }).join("");
  return `<g fill="#bfcad1">${legs}</g><rect x="${x}" y="${y}" width="${bodyWidth}" height="${bodyHeight}" rx="2" fill="#172430" stroke="#2e4352"/>
    <circle cx="${x + 4}" cy="${y + 4}" r="1.25" fill="#68818e"/>`;
}

function pad(pin, showLabels) {
  const left = pin.x === 0;
  const padX = left ? 10 : width - 10;
  const radius = left ? 4.5 : 5.5;
  const caption = showLabels
    ? `<text x="${left ? 17 : width - 18}" y="${pin.y}" text-anchor="${left ? "start" : "end"}">${pin.label}</text>`
    : "";
  return `<path d="M${pin.x} ${pin.y}H${padX}" fill="none" stroke="#a6bbc6" stroke-width="1.6"/>
    <circle cx="${padX}" cy="${pin.y}" r="${radius}" fill="#cfdae0" stroke="#92a9b7"/>
    <circle cx="${padX}" cy="${pin.y}" r="${radius - 1.6}" fill="#142e45"/>${caption}`;
}

export function drawHw0519(component, showLabels) {
  return `<rect x="6" y="6" width="220" height="80" rx="2" fill="#16364e"/>
    <rect x="6" y="3" width="220" height="80" rx="2" fill="#185481" stroke="#417eac"/>
    <rect x="8.5" y="5.5" width="215" height="75" rx="1" fill="none" stroke="#5487a8" stroke-width=".7"/>
    <path d="M12 25H45L53 32M12 41H48M12 57H48M13 73H45L53 66M110 54H142L150 46H188L207 45.5H221M110 61H138L150 74H221M172 18H221" fill="none" stroke="#4a83ac" stroke-width="1.2"/>
    ${chip(52, 25, 30, 43, 7)}
    ${chip(108, 43, 25, 29, 4)}
    <g fill="#d3c4a3" stroke="#b9c7cb" stroke-width=".55">
      <rect x="52" y="14" width="13" height="5" rx=".65"/><rect x="71" y="14" width="12" height="5" rx=".65"/>
      <rect x="91" y="15" width="5" height="10" rx=".65"/><rect x="100" y="15" width="5" height="10" rx=".65"/>
      <rect x="110" y="34" width="13" height="4" rx=".65"/><rect x="130" y="34" width="11" height="4" rx=".65"/>
      <rect x="88" y="73" width="13" height="4" rx=".65"/><rect x="106" y="73" width="13" height="4" rx=".65"/>
      <rect x="191" y="29" width="6" height="7" rx=".65"/><rect x="191" y="55" width="6" height="7" rx=".65"/>
    </g>
    <g stroke="#aec6d4" stroke-width=".85">
      <rect x="111" y="9" width="17" height="6" rx="1" fill="#d6eac9"/><rect x="111" y="21" width="17" height="6" rx="1" fill="#d7e9cf"/>
      <rect x="90" y="39" width="6" height="16" rx="1" fill="#c25b44"/>
      <rect x="149" y="7" width="37" height="16" rx="1" fill="#ccd3da"/><rect x="149" y="25" width="37" height="16" rx="1" fill="#ccd3da"/>
      <rect x="149" y="46" width="37" height="14" rx="1" fill="#adb8c3"/><rect x="149" y="64" width="37" height="14" rx="1" fill="#adb8c3"/>
    </g>
    <g fill="#273746">
      <rect x="157" y="7" width="21" height="16" rx="1"/><rect x="157" y="25" width="21" height="16" rx="1"/>
      <rect x="156" y="46" width="23" height="14" rx="1"/><rect x="156" y="64" width="23" height="14" rx="1"/>
      <rect x="137" y="45" width="9" height="28" rx="1"/>
    </g>
    <g fill="#f1f6f9" font-family="ui-monospace, monospace" font-size="7.6" font-weight="700" dominant-baseline="central">
      <text x="13" y="12">HW-0519</text>
      <text x="66" y="74" text-anchor="middle" font-size="6.1">U2</text>
      <text x="133" y="12" font-size="5.7">TX</text><text x="133" y="24" font-size="5.7">RX</text>
      <text x="168" y="15" text-anchor="middle" font-size="5.8">T010</text><text x="168" y="33" text-anchor="middle" font-size="5.8">T010</text>
      ${component.pins.map(pin => pad(pin, showLabels)).join("")}
    </g>`;
}
