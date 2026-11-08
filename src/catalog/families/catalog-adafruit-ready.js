import { defineFamily } from "../registry.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { circle, label, line, path, rect } from "../shared/svg.js";

const learn = "https://learn.adafruit.com/";
const github = "https://github.com/adafruit/";
const scale = 6;
const insetX = 10;
const insetY = 32;
const charcoal = "#303235";
const silk = "#f0eee4";
const gold = "#c8aa70";
const silver = "#b8bfbd";

function mountingHole(x, y) {
  return circle(x, y, 2.05, "#d9d4be", silk) + circle(x, y, 1.77, gold) + circle(x, y, 1.3, "#20282c");
}

function qtSocket(x, y, direction) {
  return `<g transform="translate(${x} ${y}) scale(${direction} 1)">` +
    [0.6, 1.6, 2.6, 3.6].map(offset => line(3.4, offset, 4.7, offset, silver, 0.32)).join("") +
    rect(0, 0, 3.8, 4.3, 0.35, "#777d7a", "#cad0c7") +
    rect(0.15, 0.4, 0.8, 3.5, 0.2, "#262e32") +
    line(1.05, 0.25, 3.55, 0.25, "#e8ebe0", 0.2) + "</g>";
}

function discrete(x, y, capacitor = false, vertical = false) {
  const part = rect(-0.9, -0.45, 1.8, 0.9, 0.1, silver) +
    rect(-0.58, -0.47, 1.16, 0.94, 0.08, capacitor ? "#b8a482" : "#414646");
  return `<g transform="translate(${x} ${y})${vertical ? " rotate(90)" : ""}">${part}</g>`;
}

function ic(x, y, width, height, pinsPerSide, marking = "") {
  const legs = Array.from({ length: pinsPerSide }, (_, index) => {
    const pinY = y + (index + 0.5) * height / pinsPerSide;
    return line(x - 0.65, pinY, x, pinY, silver, 0.32) +
      line(x + width, pinY, x + width + 0.65, pinY, silver, 0.32);
  }).join("");
  return legs + rect(x, y, width, height, 0.25, "#1d2429", "#848d87") +
    circle(x + 0.45, y + 0.45, 0.16, "#a8b6ad") +
    label(x + width / 2, y + height / 2, marking, 0.85, "#9ba69f");
}

function blossom(x, y) {
  return `<g transform="translate(${x} ${y})">` +
    [0, 72, 144, 216, 288].map(angle =>
      `<ellipse cx="0" cy="-0.95" rx="0.52" ry="1.2" fill="${silk}" transform="rotate(${angle})"/>`
    ).join("") + circle(0, 0, 0.32, charcoal) + "</g>";
}

// Contact entries are [id, label, electrical type, function, connector terminal, x, y, terminalBlock].
// Coordinates use the top/label side and the upper-left board corner, in millimetres.
function row(connector, y, firstX, specs, firstNumber = 1, numberStep = 1) {
  return specs.map(([id, caption, type, description], index) =>
    [id, caption, type, description, `${connector}.${firstNumber + index * numberStep}`, firstX + 2.54 * index, y]);
}

function readyBoard({ id, name, shortName, subtitle, description, category = "Interfaces", source,
  tags, body, color = charcoal, contacts, mounting, draw, details, cad, insertionHeaders, insertionOverhangs = [] }) {
  const width = body[0] * scale + insetX * 2;
  const height = body[1] * scale + insetY * 2;
  const logicalPins = contacts.map(([id, caption, type, description, number, x, y]) => ({
    id, label: caption, type, description, number,
    x: insetX + x * scale,
    y: y < body[1] / 2 ? 0 : height,
  }));
  const pins = physicalComponent({ width, height, pins: logicalPins }, (pin, index) => [pin.x, insetY + contacts[index][6] * scale]).pins;
  const art = (component, showLabels = true) => {
    const pcb = rect(0, 0.4, ...body, 2.54, "#18232b") + rect(0, 0, ...body, 2.54, color, "#8d9894") +
      mounting.map(([x, y]) => mountingHole(x, y)).join("") + draw();
    const leads = component.pins.map((pin, index) => {
      const [, , , , , physicalX, physicalY, terminalBlock] = contacts[index];
      const top = pin.edge === "top";
      const padY = insetY + physicalY * scale;
      const captionY = padY + (top ? -1 : 1) * (index % 2 === 0 ? 9 : 17);
      const textWidth = pin.label.length * 4.4 + 5;
      return (showLabels ? rect(pin.x - textWidth / 2, captionY - 4.4, textWidth, 8.8, 2, "#253440") +
          label(pin.x, captionY, pin.label, 7.1, "#fff4d9") : "") +
        (terminalBlock ? "" :
          circle(insetX + physicalX * scale, padY, 5.1, gold, "#ebe3c8") +
          circle(pin.x, padY, 3.0, "#1d292c", "#7f7359"));
    }).join("");
    return `<g transform="translate(${insetX} ${insetY}) scale(${scale})">${pcb}</g>` + leads;
  };
  const entry = {
    component: {
      id, art: id, name: `Adafruit ${name}`, shortName, manufacturer: "Adafruit", category, referencePrefix: "U",
      subtitle, description, source: learn + source + "/pinouts", tags, width, height, pins, contactLayout: "physical",
    },
    art,
    footprint: {
      body, color,
      pads: contacts.map(([id, , , , number, x, y]) => ({
        id, x: Number((x - body[0] / 2).toFixed(4)), y: Number((y - body[1] / 2).toFixed(4)),
        size: 1.778, drill: 1, shape: "circle", square: number.endsWith(".1"),
      })),
      details,
      note: "Reference host-board carrier using the exposed connector centers from Adafruit's published EAGLE PCB. Check the mating headers, mounting hardware and component clearances against the fitted revision.",
    },
    model: cad,
  };
  const bodyRegions = [{ x: insetX, y: insetY, width: body[0] * scale, height: body[1] * scale },
    ...insertionOverhangs.map(region => ({ x: insetX + region.x * scale, y: insetY + region.y * scale,
      width: region.width * scale, height: region.height * scale }))];
  const visible = [...bodyRegions, { x: insetX, y: insetY + 2.4, width: body[0] * scale, height: body[1] * scale }];
  const left = Math.min(...visible.map(region => region.x)), top = Math.min(...visible.map(region => region.y));
  const viewBounds = { x: left - .5, y: top - .5,
    width: Math.max(...visible.map(region => region.x + region.width)) - left + 1,
    height: Math.max(...visible.map(region => region.y + region.height)) - top + 1 };
  entry.mounting = reviewedBoardMounting({
    source: { label: `Adafruit ${shortName} cited EAGLE through-hole header centers`, url: cad.url },
    contacts: contacts.filter(contact => insertionHeaders.includes(contact[4].split(".")[0]) && !contact[7])
      .map(([pinId, , , , , x, y]) => ({ pinId, x, y })),
    calibration: { origin: { x: insetX, y: insetY }, unitsPerMm: scale },
    bodyRegions, bodyEvidence: "Existing component-side PCB drawing is projected directly from the cited Adafruit EAGLE millimeter source; includes explicitly projecting terminal/jack material. The decorative lower bevel is visible without reserving extra breadboard holes, and the annotation margin is excluded.",
    viewBounds, renderMounted: part => clippedFrontArtwork(art, part, viewBounds),
    note: `Seat every contact of ${insertionHeaders.join(" and ")}. Any screw-terminal block is a cable connection; leave other optional header holes unpopulated or populate them upward.`,
  });
  return entry;
}

const gnd = (id = "gnd", caption = "GND") => [id, caption, "power_in", "Common supply and signal ground."];
const vcc = (id = "vcc", caption = "VCC") => [id, caption, "power_in", "3–5 V supply. Match the I²C host logic supply."];
const scl = (id = "scl", text = "I²C clock. The board pull-up is connected to VCC.") => [id, "SCL", "input", text];
const sda = (id = "sda", text = "Bidirectional I²C data. The board pull-up is connected to VCC.") => [id, "SDA", "bidirectional", text];
const qtMounting = [[2.54, 2.54], [22.86, 2.54], [2.54, 15.24], [22.86, 15.24]];
const qtCad = (repo, part) => ({ label: `Adafruit ${part} EAGLE PCB CAD`, url: github + repo });
const sharedSockets = () => qtSocket(0.1, 6.74, 1) + qtSocket(25.3, 6.74, -1);

const tca4307 = readyBoard({
  id: "adafruit-tca4307-5159", insertionHeaders: ["JP2", "JP3"], name: "TCA4307 Hot-Swap I²C Buffer", shortName: "TCA4307 Buffer",
  subtitle: "Stuck-bus recovery / separate IN and OUT",
  description: "STEMMA QT breakout #5159, PCB Rev A. Separates controller and peripheral I²C segments with automatic stuck-bus recovery. Power and ground are shared between the two sides.",
  source: "adafruit-tca4307",
  tags: ["tca4307", "i2c", "buffer", "hot swap", "recovery", "stemma qt", "5159"],
  body: [25.4, 17.78], mounting: qtMounting,
  contacts: [
    ...row("JP2", 2.54, 8.89, [
      ["out-vcc", "VCC", "passive", "Shared 2.3–5.5 V supply connection on the OUT header."], gnd("out-gnd"),
      ["out-scl", "SCL", "bidirectional", "Peripheral-side buffered I²C clock, including clock stretching."],
      ["out-sda", "SDA", "bidirectional", "Peripheral-side buffered I²C data."],
    ]),
    ...row("JP3", 15.24, 6.35, [
      ["vcc", "VCC", "power_in", "2.3–5.5 V supply. Both bus segments use this supply voltage."], gnd(),
      ["in-scl", "SCL", "bidirectional", "Controller-side I²C clock, including clock stretching."],
      ["in-sda", "SDA", "bidirectional", "Controller-side I²C data."],
      ["en", "EN", "input", "Enable input. Pull low to disconnect the two bus segments."],
      ["rdy", "RDY", "open_collector", "Ready status. High through the board pull-up when the bus segments are connected."],
    ], 6, -1),
  ],
  draw: () => sharedSockets() + ic(11.15, 7.39, 3.1, 3, 4, "4307") +
    ic(7.15, 7.1, 1.2, 3.4, 4) + ic(17.0, 7.1, 1.2, 3.4, 4) +
    discrete(7.1755, 12.0015, true) + rect(2.8, 4.7, 1.2, 0.55, 0.15, "#97c6a1") +
    label(6.2, 5.6, "IN", 1.5, silk) + label(18.7, 5.6, "OUT", 1.5, silk) +
    path("M9.3 4.1L11.2 6.1M14.3 6.1L16.1 4.1", "none", silk, 0.35) +
    label(12.7, 12.1, "TCA4307", 1.6, silk),
  details: [[0, 0, 3.1, 3, 1.2, "#252c30"], [-10.16, 0, 4.3, 4.3, 3, silver], [10.16, 0, 4.3, 4.3, 3, silver]],
  cad: qtCad("Adafruit-TCA4307-PCB", "TCA4307"),
});

const ds2484 = readyBoard({
  id: "adafruit-ds2484-5976", insertionHeaders: ["JP1"], insertionOverhangs: [{ x: 8.7, y: -.3, width: 8, height: 6.6 }], name: "DS2484 I²C to 1-Wire Adapter", shortName: "DS2484 1-Wire",
  subtitle: "I²C 0x18 / 1-Wire terminal block",
  description: "STEMMA QT breakout #5976, PCB Rev A, with a 3-position 1-Wire terminal block. V+ follows VIN through a cuttable jumper, supporting a separate 1-Wire supply after the jumper is opened.",
  source: "adafruit-ds2484-i2c-to-1-wire-bus-adapter-breakout",
  tags: ["ds2484", "i2c", "1 wire", "onewire", "ds18b20", "stemma qt", "5976"],
  body: [25.4, 17.78], mounting: qtMounting,
  contacts: [
    ["terminal-gnd", "GND", "power_in", "1-Wire sensor ground, shared with board ground.", "JP2.3", 10.16, 3.429, true],
    ["terminal-data", "1W", "bidirectional", "1-Wire data, shared with the 1WIRE header pin.", "JP2.2", 12.7, 3.429, true],
    ["terminal-vplus", "V+", "passive", "1-Wire sensor power. Connected to VIN through the cuttable V+ jumper.", "JP2.1", 15.24, 3.429, true],
    ...row("JP1", 15.24, 6.35, [
      vcc("vin", "VIN"), gnd(), scl(), sda(),
      ["onewire", "1WIRE", "bidirectional", "1-Wire data connection, shared with the terminal block."],
      ["slpz", "SLPZ", "input", "Active-low sleep input. Pull low for power-saving sleep mode."],
    ]),
  ],
  draw: () => sharedSockets() + rect(8.7, -0.3, 8, 6.6, 0.35, "#559b70", "#a9c7a6") +
    [10.16, 12.7, 15.24].map(x =>
      rect(x - 0.95, 4.55, 1.9, 1.1, 0.1, "#284b3e") + circle(x, 3.429, 0.96, "#c2d2c4", "#2d6250") +
      line(x - 0.25, 2.65, x + 0.25, 4.15, "#526b64", 0.22)).join("") +
    label(10.16, 7.1, "GND", 1.05, silk) + label(12.7, 7.1, "1W", 1.05, silk) + label(15.24, 7.1, "V+", 1.05, silk) +
    ic(11.9, 9.4, 1.6, 2.8, 3) + discrete(8, 8.5) + discrete(8, 10.16, true) +
    discrete(8, 11.94, true) + discrete(16.26, 11.81, true, true) + discrete(18.29, 11.56, false, true) +
    discrete(12.95, 8.636) + rect(16.2, 8.3, 2.1, 1.4, 0.1, gold, silk) +
    path("M17.25 8.3V9.7", "none", "#6e603e", 0.2) +
    label(5.75, 1.25, "DS2", 1.5, silk) + label(6.3, 3.1, "484", 1.5, silk) +
    label(19, 1.7, "I2C", 1.4, silk) + label(20.5, 3.5, "to", 1.2, silk) + label(20.3, 5.3, "1Wire", 1.2, silk),
  details: [[0, -5.46, 8, 6.6, 6, "#559b70"], [0, 1.9, 1.6, 2.8, 1.2, "#252c30"],
    [-10.16, 0, 4.3, 4.3, 3, silver], [10.16, 0, 4.3, 4.3, 3, silver]],
  cad: qtCad("Adafruit-DS2484-I2C-to-1-Wire-Bus-Adapter-Breakout-PCB", "DS2484"),
});

const pcm5102 = readyBoard({
  id: "adafruit-pcm5102-6250", insertionHeaders: ["JP1", "JP2"], insertionOverhangs: [{ x: 30, y: 8.5, width: 1.7, height: 3.3 }], name: "PCM5102 I²S Stereo Line DAC", shortName: "PCM5102 Stereo DAC",
  subtitle: "112 dB SNR / 3.5 mm line output",
  description: "PCM5102A breakout #6250, PCB Rev A. Stereo line-level output for loads of at least 1 kΩ. Supply accepts 3.3–5 V, and all audio-data and configuration inputs use 3.3 V logic.",
  source: "adafruit-pcm510x-i2s-dac",
  tags: ["pcm5102", "pcm5102a", "audio", "dac", "i2s", "stereo", "line out", "6250"],
  body: [30.48, 20.32],
  mounting: [[2.54, 2.54], [27.94, 2.54], [2.54, 17.78], [27.94, 17.78]],
  contacts: [
    ...row("JP1", 2.54, 8.89, [
      ["de", "DE", "input", "3.3 V de-emphasis control for 44.1 kHz audio. Defaults low."],
      ["fil", "FIL", "input", "3.3 V filter control. High selects low latency."],
      ["mck", "MCK", "input", "Optional 3.3 V system clock input. The DAC can generate its clock internally from BCK."],
      ["mute", "MU", "input", "3.3 V mute control. Pull low to mute the line outputs."],
      ["format", "FM", "input", "3.3 V format control. High selects left-justified audio, low selects I²S."],
      ["3v3", "3V", "power_out", "Regulated 3.3 V output from the onboard regulator."],
    ], 6, -1),
    ...row("JP2", 17.78, 6.35, [
      ["vin", "VIN", "power_in", "3.3–5 V board supply input."], gnd(),
      ["wsel", "WSEL", "input", "3.3 V I²S word-select, or left/right clock, input."],
      ["din", "DIN", "input", "3.3 V serial audio data input."],
      ["bck", "BCK", "input", "3.3 V I²S bit-clock input."],
      ["lout", "Lout", "output", "Left line-level analog output, shared with the 3.5 mm jack tip."],
      ["agnd", "G", "power_in", "Analog output ground, shared with board ground and the jack sleeve."],
      ["rout", "Rout", "output", "Right line-level analog output, shared with the 3.5 mm jack ring."],
    ]),
  ],
  draw: () => ic(9.942, 8.053, 4.5, 6.5, 10, "PCM5102A") +
    rect(18.3, 6.55, 11.8, 7.2, 0.3, "#1d232a", "#606e71") +
    rect(27.2, 7.1, 3.3, 6.1, 0.3, "#b9ad79", "#e3d3a0") +
    rect(30, 8.5, 1.7, 3.3, 0.5, "#272d31", "#6b7677") +
    rect(18.5, 7.2, 1.3, 1.1, 0.1, silver) + rect(18.5, 12.1, 1.3, 1.1, 0.1, silver) +
    ic(1.95, 10.7, 1.6, 2.3, 3) +
    [[8, 4.83], [11, 4.83], [14.1, 4.83], [17.4, 4.83], [22, 4.45], [19.1, 15.43]].map(([x, y]) => discrete(x, y)).join("") +
    [[2, 6.73], [2.54, 9.4], [2.9, 14.48], [6.86, 8], [6.86, 10], [7.5, 13.97],
      [11.56, 6.985], [15, 6.985], [16.9, 10.8], [22.8, 15], [28.1, 5.46]].map(([x, y]) => discrete(x, y, true)).join("") +
    label(26.1, 15.4, "PCM5102", 1.2, silk) + `<g transform="translate(25 3.6) scale(0.6)">${blossom(0, 0)}</g>`,
  details: [[-3.048, 1.143, 4.5, 6.5, 1.2, "#252c30"], [9, 0, 11.8, 7.2, 5, "#222a30"]],
  cad: { label: "Adafruit PCM510x STEP model", url: "https://raw.githubusercontent.com/adafruit/Adafruit_CAD_Parts/main/6250%20PCM510x%20I2S%20DAC/6250%20PCM510x%20I2S%20DAC.step" },
});

const ultimateGps = readyBoard({
  id: "adafruit-ultimate-gps-v3-746", insertionHeaders: ["JP1"], name: "Ultimate GPS Breakout v3", shortName: "Ultimate GPS v3", category: "Sensors",
  subtitle: "PA1616S / MTK3339 / UART and PPS",
  description: "Breakout #746, v3 PCB with the PA1616S module shown in Adafruit's pinout photo. The carrier follows the published Rev E header layout, with a ceramic patch antenna, u.FL antenna socket and backup-battery holder underneath.",
  source: "adafruit-ultimate-gps",
  tags: ["gps", "gnss", "mtk3339", "pa1616s", "uart", "pps", "antenna", "746"],
  body: [25.4, 34.29], color: "#236d9b", mounting: [[2.54, 2.54], [22.86, 2.54]],
  contacts: row("JP1", 32.258, 2.54, [
    ["3v3", "3.3V", "power_out", "3.3 V regulator output for auxiliary circuitry."],
    ["en", "EN", "input", "Module enable. Pulled high onboard, pull low to switch the GPS off."],
    ["vbat", "VBAT", "power_in", "Backup supply input for RTC and retained GPS state. Use a battery below 3.3 V."],
    ["fix", "FIX", "output", "Fix-status output, shared with the red status LED."],
    ["tx", "TX", "output", "3.3 V UART transmit output from GPS to the host RX input."],
    ["rx", "RX", "input", "UART receive input to GPS. Accepts 3.3 V or 5 V host logic."],
    gnd(), ["vin", "VIN", "power_in", "3–5 V board supply input."],
    ["pps", "PPS", "output", "3.3 V pulse-per-second timing output."],
  ], 9, -1),
  draw: () => rect(4, 9, 16.4, 16.4, 0.35, "#d6b76e", "#96ae89") +
    rect(4.7, 9.7, 15, 15, 0.5, "#d6c293", "#ede1ba") +
    path("M6.3 11.4H17.8V23.6H5.8V12Z", "#eee9d7", "#aaa28d", 0.15) +
    rect(10.1, 14, 9, 8.9, 0.2, "#f3efe4") + label(14.6, 17.6, "PA1616S", 1.4, "#4a514f") +
    label(14.6, 19.4, "MTK3339", 1.1, "#4a514f") + circle(8.2, 21.5, 0.55, "#5d645e") +
    Array.from({ length: 10 }, (_, index) => 5.442 + index * 1.5).map(x => rect(x, 8.2, 0.9, 0.7, 0.12, silver) +
      rect(x, 25.5, 0.9, 0.7, 0.12, silver)).join("") +
    rect(17.25, 4.1, 3, 3, 0.2, silver) + circle(18.75, 5.6, 1.1, "#e1d6a9", "#8c978e") +
    circle(18.75, 5.6, 0.42, "#f7ecc5") +
    label(12.5, 1.4, "Ultimate GPS", 1.65, silk) + label(11.8, 4.2, "Breakout v3", 1.35, silk) +
    label(12, 6.4, "adafruit!", 1, silk) + label(2, 8.7, "FIX", 1.1, silk) +
    rect(1.2, 10.6, 1.5, 2.3, 0.15, "#a99d76", "#dedbd2") +
    [[2.14, 16.38], [22, 9.38], [24, 9.42], [22, 13.49], [24, 13.49], [23, 20]].map(([x, y]) => discrete(x, y, true, true)).join("") +
    ic(22.15, 16.2, 1.6, 2.2, 3),
  details: [[-0.51, 0.57, 16.4, 16.4, 6.7, "#d6c293"], [6.05, -11.55, 3, 3, 1.25, silver]],
  cad: qtCad("Adafruit-Ultimate-GPS", "Ultimate GPS"),
});

const entries = [tca4307, ds2484, pcm5102, ultimateGps];
export default defineFamily("adafruit-ready", entries.map(({ art: render, ...entry }) => ({ ...entry, render })));
