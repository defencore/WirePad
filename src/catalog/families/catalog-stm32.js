import { defineFamily } from "../registry.js";
import { chip, circle, edgePads, label, line, pad, path, rect, smd } from "../shared/svg.js";
import { boardDefinition, contact, gpio, ground, header, reset, supply } from "../shared/board.js";

const manufacturer = "STMicroelectronics";
const docs = "https://www.st.com/resource/en/user_manual/";
const mb1136 = docs + "um1724-stm32-nucleo64-boards-mb1136-stmicroelectronics.pdf";
const mb1367 = docs + "um2505-stm32g4-nucleo64-boards-mb1367-stmicroelectronics.pdf";
const mb1180 = docs + "dm00231744-stm32-nucleo32-boards-mb1180-stmicroelectronics.pdf";
const carrierNote = "Reference expansion-header carrier. Confirm the mechanical drawing, fitted revision and solder bridges before fabrication.";
const nucleoColor = "#e0e5e3";
const range = length => Array.from({ length }, (_, index) => index);

const powerPorts = {
  GND: id => ground(id),
  AGND: id => contact(id, "AGND", "Analog ground reference."),
  E5V: id => supply(id, "E5V", "External regulated 5 V input. Select the corresponding power jumper position."),
  U5V: id => supply(id, "U5V", "5 V from the ST-LINK USB supply.", "power_out"),
  USB5V: id => supply(id, "USB5V", "5 V from the ST-LINK USB charger supply.", "power_out"),
  VDD: id => contact(id, "VDD", "Target MCU supply rail. See the IDD jumper and external power instructions."),
  VREF: id => contact(id, "VREF+", "Target analog reference connected to AVDD in the default configuration."),
  AVDD: id => contact(id, "AVDD", "Board analog reference and supply. Check the board power circuit before driving it."),
  IOREF: id => supply(id, "IOREF", "3.3 V logic reference for shields.", "power_out"),
  NRST: id => reset(id, "NRST"),
  "3V3": id => contact(id, "3V3", "3.3 V board rail. Follow the manual when using it as an external supply."),
  "5V": id => supply(id, "5V", "Board 5 V rail, normally an output. See the manual for external 5 V powering.", "power_out"),
  VIN: id => supply(id, "VIN", "External board supply input. Follow the manual for voltage and jumper settings."),
  VBAT: id => supply(id, "VBAT", "Backup-domain power. Check the board solder bridges and MCU limits."),
  BOOT0: id => contact(id, "BOOT0", "Boot-mode strap. Default low on the MB1136 board.", "input"),
  "BOOT0-G4": id => contact(id, "BOOT0", "PB8/BOOT0 strap. Its boot function depends on option bytes and is not enabled by default.", "input"),
};

const gpioNotes = {
  PA13: "SWDIO shared with the on-board ST-LINK debugger.",
  PA14: "SWCLK shared with the on-board ST-LINK debugger.",
  PA5: "Also shield D13, SPI1 SCK and the user LED.",
  PA6: "Also shield D12 and SPI1 MISO.",
  PA7: "Also shield D11 and SPI1 MOSI.",
  PB6: "Also shield D10.",
  PB8: "Also shield D15 / I²C1 SCL. Some boards use it for BOOT0.",
  PB9: "Also shield D14 / I²C1 SDA.",
  PC13: "Shared with the on-board user button.",
  PC14: "May be used by the low-speed oscillator.",
  PC15: "May be used by the low-speed oscillator.",
  PH0: "May be used by the high-speed clock.",
  PH1: "May be used by the high-speed clock.",
  PF0: "May be used by the high-speed clock.",
  PF1: "May be used by the high-speed clock.",
};

function morphoSignals(name, signals, notes = {}) {
  return signals.map((signal, index) => {
    const id = `${name.toLowerCase()}-${index + 1}`;
    if (signal === "-") return contact(id, "NC", "Unconnected Morpho header contact.", "no_connect");
    if (powerPorts[signal]) return powerPorts[signal](id);
    return gpio(id, signal, notes[index + 1] ?? `STM32 GPIO ${signal}.${gpioNotes[signal] ? " " + gpioNotes[signal] : ""}`);
  });
}

// UM1724 table 29, top to bottom, odd and even contacts interleaved.
const f4Left = [
  "PC10", "PC11", "PC12", "PD2", "VDD", "E5V", "BOOT0", "GND", "-", "-", "-", "IOREF", "PA13", "NRST", "PA14", "3V3",
  "PA15", "5V", "GND", "GND", "PB7", "GND", "PC13", "VIN", "PC14", "-", "PC15", "PA0", "PH0", "PA1", "PH1", "PA4",
  "VBAT", "PB0", "PC2", "PC1/PB9", "PC3", "PC0/PB8",
];
const f4Right = [
  "PC9", "PC8", "PB8", "PC6", "PB9", "PC5", "AVDD", "U5V", "GND", "-", "PA5", "PA12", "PA6", "PA11", "PA7", "PB12",
  "PB6", "-", "PC7", "GND", "PA9", "PB2", "PA8", "PB1", "PB10", "PB15", "PB4", "PB14", "PB5", "PB13", "PB3", "AGND",
  "PA10", "PC4", "PA2", "-", "PA3", "-",
];
const f103Left = f4Left.with(28, "PD0").with(30, "PD1");
const f103Right = f4Right.with(17, "PB11");
const g4Left = f4Left.with(6, "BOOT0-G4").with(28, "PF0").with(30, "PF1").with(37, "PC0/PA15");
const g4Right = f4Right.with(6, "VREF").with(7, "USB5V").with(17, "PB11").with(34, "PC4/PA2").with(36, "PC5/PA3");

const analogSelect = (signal, alternate, role) => `${signal} analog input by default. Solder bridges select ${alternate} for I²C ${role}.`;
const f4LeftNotes = { 36: analogSelect("PC1", "PB9", "SDA"), 38: analogSelect("PC0", "PB8", "SCL") };
const g4LeftNotes = { ...f4LeftNotes, 38: analogSelect("PC0", "PA15", "SCL") };
const f4RightNotes = { 35: "PA2 / USART2 TX. Shared with shield D1 and the ST-LINK virtual COM port according to solder bridges.", 37: "PA3 / USART2 RX. Shared with shield D0 and the ST-LINK virtual COM port according to solder bridges." };
const g4RightNotes = { 35: "PC4 USART1 TX by default, shared with shield D1. Solder bridges can select PA2 LPUART1 TX.", 37: "PC5 USART1 RX by default, shared with shield D0. Solder bridges can select PA3 LPUART1 RX." };

function numbered(connector, specs) {
  return specs.map((spec, index) => [...spec, `${connector}.${specs.length - index}`]);
}

function shieldHeaders(g4, lastRow) {
  return [
    header("CN6", "top", 58, [
      contact("shield-nc", "NC", "Reserved shield header position.", "no_connect"),
      powerPorts.IOREF("shield-ioref"), reset("shield-reset", "NRST"), powerPorts["3V3"]("shield-3v3"),
      powerPorts["5V"]("shield-5v"), ground("shield-gnd6"), ground("shield-gnd7"), powerPorts.VIN("shield-vin"),
    ], { x: -24.13, y: lastRow - 35.56 }),
    header("CN8", "top", 207, [
      gpio("a0", "A0", "PA0, analog input."),
      gpio("a1", "A1", "PA1, analog input."),
      gpio("a2", "A2", "PA4, analog input."),
      gpio("a3", "A3", "PB0, analog input."),
      gpio("a4", "A4", f4LeftNotes[36]),
      gpio("a5", "A5", (g4 ? g4LeftNotes : f4LeftNotes)[38]),
    ], { x: -24.13, y: lastRow - 12.7 }),
    header("CN5", "bottom", 29, numbered("CN5", [
      gpio("d15", "D15", "PB8, I²C1 SCL."),
      gpio("d14", "D14", "PB9, I²C1 SDA."),
      contact("aref", "AREF", g4 ? "VREF+ analog reference." : "AVDD analog reference."),
      ground("shield-digital-gnd"),
      gpio("d13", "D13", "PA5, SPI1 SCK and user LED."),
      gpio("d12", "D12", "PA6, SPI1 MISO."),
      gpio("d11", "D11", "PA7, SPI1 MOSI and PWM."),
      gpio("d10", "D10", "PB6, shield SPI chip select and PWM."),
      gpio("d9", "D9", "PC7, PWM."),
      gpio("d8", "D8", "PA9 GPIO."),
    ]), { x: 24.13, y: lastRow - 44.7 }),
    header("CN9", "bottom", 202, numbered("CN9", [
      gpio("d7", "D7", "PA8 GPIO."),
      gpio("d6", "D6", "PB10, PWM."),
      gpio("d5", "D5", "PB4, PWM."),
      gpio("d4", "D4", "PB5 GPIO."),
      gpio("d3", "D3", "PB3, PWM."),
      gpio("d2", "D2", "PA10 GPIO."),
      gpio("d1", "D1", g4 ? g4RightNotes[35] : f4RightNotes[35]),
      gpio("d0", "D0", g4 ? g4RightNotes[37] : f4RightNotes[37]),
    ]), { x: 24.13, y: lastRow - 17.78 }),
  ];
}

const boardInk = "#245c8d";
const pinRail = "#22383b";
const pcbOutline = "#879da5";

function connector(x, y, rows, { pitch = 10.2, columns = 1, male = false } = {}) {
  const size = pitch * 0.85;
  const top = y - pitch / 2;
  return rect(x - pitch / 2, top, columns * pitch, rows * pitch, 1.5, "#2c3337", "#596169") +
    range(rows).map(row => range(columns).map(column => {
      const px = x + column * pitch;
      const py = y + row * pitch;
      return rect(px - size / 2, py - size / 2, size, size, 1, "#181f26", "#464c50") +
        (male ? rect(px - 1.55, py - 1.55, 3.1, 3.1, 0.5, "#cfb577", "#e1cb92") : circle(px, py, 1.9, "#11181e"));
    }).join("")).join("");
}

function usbSocket(x, y, width, height, mini = false) {
  const shell = mini ? `M${x + 2} ${y}H${x + width - 2}L${x + width} ${y + 4}V${y + height}H${x}V${y + 4}Z` : "";
  return (mini ? path(shell, "#aebac0", "#6d7d89") : rect(x, y, width, height, 2, "#b9c4c9", "#6d7d89")) +
    rect(x + 3, y + 2, width - 6, 4, 1, "#38434e") +
    rect(x + 4, y + 8, 3, height - 12, 0.7, "#dce5e9") +
    rect(x + width - 7, y + 8, 3, height - 12, 0.7, "#dce5e9") +
    line(x + 7, y + height - 4, x + width - 7, y + height - 4, "#727f8a");
}

function quadChip(x, y, size, caption, leads) {
  const side = range(leads).map(index => {
    const px = x + 4 + index * (size - 8) / (leads - 1);
    return line(px, y - 4, px, y, "#939fa8", 1.5) +
      line(px, y + size, px, y + size + 4, "#939fa8", 1.5);
  }).join("");
  return side + chip(x, y, size, size, caption, leads);
}

function nucleoButton(x, y, color) {
  return rect(x - 11, y - 11, 22, 22, 2, "#bec8ca", "#839298") +
    rect(x - 9, y - 9, 18, 18, 1, "#303a3e") +
    circle(x, y, 7, color, "#46565b");
}

function board64Pcb(component) {
  const model = component.shortName.slice("NUCLEO-".length);
  const g4 = component.subtitle.endsWith("MB1367");
  const outline = g4
    ? "M8 0H272Q280 0 280 8V312Q280 322 270 322H201L192 330H54L45 322H8Q0 322 0 314V8Q0 0 8 0Z"
    : "M8 0H272Q280 0 280 8V98H272V104H280V315Q280 323 272 323H194L185 330H52L43 323H8Q0 323 0 315V104H8V98H0V8Q0 0 8 0Z";
  const links = g4
    ? usbSocket(125, -5, 30, 24) +
      rect(99, 35, 41, 40, 2, "#212832", "#7b8593") + label(119.5, 57, "F723", 6, "#b4bdc7") +
      connector(35, 55, 5, { pitch: 4.4, columns: 2, male: true }) +
      connector(227, 54, 4, { pitch: 9, columns: 2, male: true }) +
      [45, 56, 67, 78].map(x => circle(x, 10, 3.1, "#cfad70", "#f1e1ad") + circle(x, 10, 1.4, "#f0f4f2")).join("") +
      smd(188, 11, "#aa714d") + smd(231, 42, "#a9b765") +
      label(39, 84, "DEBUG", 7, boardInk) + label(232, 90, "5V SELECT", 6.5, boardInk) +
      label(148, 27, "STLINK-V3E", 8, boardInk, "start")
    : usbSocket(174, -6, 30, 35, true) +
      quadChip(125, 47, 29, "F103", 8) +
      rect(94, 46, 14, 42, 7, "#b2bdc1", "#78858a") + line(98, 52, 98, 81, "#e9edef") +
      connector(31, 34, 6, { pitch: 9.5, male: true }) + connector(88, 9, 4, { pitch: 8.5, male: true }) +
      line(9, 101, 61, 101, "#94a9af", 2) + line(74, 101, 204, 101, "#94a9af", 2) +
      line(218, 101, 271, 101, "#94a9af", 2) +
      label(46, 34, "SWD", 7, boardInk, "start") + label(114, 14, "ST-LINK/V2-1", 7.4, boardInk);
  const regulators = g4
    ? chip(85, 147, 16, 24, "", 3) + smd(119, 146) +
      connector(136, 164, 1, { pitch: 8, columns: 2, male: true }) +
      connector(168, 164, 1, { pitch: 8, columns: 2, male: true }) +
      label(144, 174, "IDD", 6.5, boardInk) + label(175, 174, "VREF", 6.5, boardInk)
    : chip(109, 137, 16, 25, "", 3) + rect(74, 151, 17, 10, 1, "#d8b660", "#b49c6e") +
      connector(128, 164, 1, { pitch: 8, columns: 2, male: true }) +
      smd(81, 174, "#bd5a57") + smd(179, 174, "#7b9c60") +
      label(134, 174, "IDD", 6.5, boardInk);
  const traces = [[149, 43], [158, 52], [162, 68], [128, 82], [141, 87], [190, 65], [197, 80],
    [115, 118], [124, 110], [154, 119], [146, 139], [175, 151], [82, 181], [155, 203],
    [158, 216], [157, 230], [160, 243], [82, 236], [86, 249], [116, 269], [128, 279], [159, 279], [182, 249]];
  return path(outline, "#eef2f1", pcbOutline) + links +
    connector(12, 9, 2, { pitch: 7, male: true }) + connector(267, 9, 2, { pitch: 7, male: true }) +
    smd(235, 20, "#dbbc68") + label(241, 29, "COM", 6.5, boardInk) +
    [[42, 116], [236, 117], [175, 322]].map(([x, y]) => circle(x, y, 6.5, "#f9fcfb", "#acb8ba")).join("") +
    connector(11, 126, 19, { columns: 2, male: true }) +
    connector(257, 126, 19, { columns: 2, male: true }) +
    connector(40, 164, 8) + connector(40, 255, 6) +
    connector(235, 130, 10) + connector(235, 242, 8) +
    label(12, 115, "CN7", 7, boardInk) + label(269, 115, "CN10", 7, boardInk) +
    label(49, 156, "CN6", 6.5, boardInk, "start") + label(49, 251, "CN8", 6.5, boardInk, "start") +
    label(227, 143, "CN5", 6.5, boardInk, "end") + label(227, 251, "CN9", 6.5, boardInk, "end") +
    nucleoButton(107, 117, "#168bb7") + nucleoButton(174, 117, "#1e282e") +
    label(107, g4 ? 134 : 101, "USER", 7, boardInk) + label(174, g4 ? 134 : 101, "RESET", 7, boardInk) +
    regulators +
    traces.map(([x, y]) => smd(x, y, "#b6a889")).join("") +
    quadChip(106, 213, 44, model, 12) +
    (g4 ? smd(112, 265, "#b5bfc3") + rect(131, 266, 14, 6, 1, "#a8b4bb", "#83959c") : rect(61, 287, 30, 11, 2, "#879497", "#6c787d")) +
    label(140, g4 ? 300 : 193, component.shortName, 10, "#24333c") +
    label(130, g4 ? 320 : 311, g4 ? "MB1367" : "MB1136", 8, boardInk);
}

function board64Art(component, showLabels) {
  const { width, height, pins } = component;
  const scale = showLabels ? 0.85 : 1.13;
  const artwork = `<g transform="translate(${(width - 280 * scale) / 2} ${(height - 330 * scale) / 2}) scale(${scale})">${board64Pcb(component)}</g>`;
  if (!showLabels) return artwork;

  // The physical board is centered. Existing wire anchors stay in four diagram banks.
  const sides = pins.filter(pin => pin.x === 0 || pin.x === width);
  const ends = pins.filter(pin => pin.y === 0 || pin.y === height);
  return artwork +
    rect(4, 75, 48, 535, 4, pinRail) + rect(width - 52, 75, 48, 535, 4, pinRail) +
    rect(48, 4, width - 96, 64, 4, pinRail) + rect(20, height - 68, width - 40, 64, 4, pinRail) +
    label(113, 56, "CN6 · POWER", 8, "#bfd8df") + label(248, 56, "CN8 · ANALOG", 8, "#bfd8df") +
    label(100, height - 56, "CN5 · DIGITAL", 8, "#bfd8df") + label(261, height - 56, "CN9 · DIGITAL", 8, "#bfd8df") +
    edgePads({ ...component, pins: sides }, true) +
    ends.map(pin => {
      const direction = pin.y === 0 ? 1 : -1;
      const y = pin.y + 9 * direction;
      return line(pin.x, pin.y, pin.x, y, "#ac8550", 1.5) + pad(pin.x, y) +
        `<g transform="translate(${pin.x} ${y + 7 * direction}) rotate(${90 * direction})">${label(0, 0, pin.label, 8, "#e3e9f1", "start")}</g>`;
    }).join("");
}

function nucleo64(model, boardId, core, left, right) {
  const g4 = boardId === "MB1367";
  const id = `stm32-nucleo-${model.toLowerCase()}`;
  // UM1724 and UM2505 dimension the last Morpho row from the lower PCB edge.
  const lastRow = 82.5 / 2 - (g4 ? 5.04 : 5.08);
  const firstRow = lastRow - 45.72;
  const definition = boardDefinition({
    id, art: id, name: `STM32 NUCLEO-${model}`, shortName: `NUCLEO-${model}`, manufacturer,
    subtitle: `${core} · ${boardId}`, width: 344, height: 660,
    description: `ST ${boardId} Nucleo-64 with STM32${model}, 3.3 V target I/O, on-board ST-LINK, two Morpho headers and Arduino UNO shield sockets. Morpho contacts are flattened by number on the sides, while the shield sockets are shown at the ends.`,
    source: g4 ? mb1367 : mb1136, tags: ["stm32", "st", "nucleo", "morpho", boardId.toLowerCase(), "shield", "development board"],
  }, [
    header("CN7", "left", 84, morphoSignals("CN7", left, g4 ? g4LeftNotes : f4LeftNotes), { x: -31.75, y: firstRow, columns: 2 }, 14),
    header("CN10", "right", 84, morphoSignals("CN10", right, g4 ? g4RightNotes : f4RightNotes), { x: 29.21, y: firstRow, columns: 2 }, 14),
    ...shieldHeaders(g4, lastRow),
  ], {
    body: [70, 82.5], color: nucleoColor, note: carrierNote,
    details: [[0, -24, 13.5, 13.5, 2, "#273041"], [12, -36, 7.2, 5, 3.5, "#a6aeb9"], [0, 13, 12, 12, 1.5, "#273041"]],
  }, board64Pcb);
  return { ...definition, art: board64Art };
}

function board32Pcb({ shortName }) {
  const model = shortName.slice("NUCLEO-".length);
  const qfn = model === "L412KB" || model === "L432KC";
  const terminal = (x, y) => circle(x, y, 3.5, "#d3bd83", "#a99664") + circle(x, y, 1.7, "#f5f7f4", "#a3a99a");
  const pads = range(15).map(index => terminal(9, 50 + index * 14.6) + terminal(101, 50 + index * 14.6)).join("");
  const debugPads = [[88, 21], [88, 36], [103, 7], [103, 21], [103, 36]]
    .map(([x, y]) => terminal(x, y)).join("");
  const passives = [[25, 28], [25, 35], [70, 45], [78, 60], [29, 69], [27, 98], [80, 110], [29, 126],
    [74, 133], [22, 150], [76, 150], [30, 214], [47, 213], [65, 215], [80, 221], [37, 238], [50, 240]];
  return rect(0, 0, 110, 286, 2, "#edf2f0", pcbOutline) +
    pads + debugPads + usbSocket(34, -7, 43, 28) +
    rect(39, 8, 33, 9, 0.8, "#f4f5f3") + label(55.5, 12.5, model, 6.6, "#34424c") +
    smd(8, 17, "#d9bb64") + label(12, 27, "COM", 5.9, boardInk) +
    label(10, 42, "CN3", 6.5, boardInk) + label(100, 42, "CN4", 6.5, boardInk) +
    connector(12, 94, 3, { pitch: 6, male: true }) +
    chip(41, 92, 30, 25, "ST890", 4) +
    label(55, 67, "NUCLEO-32", 9, boardInk) + label(55, 78, "MB1180", 7, boardInk) +
    passives.map(([x, y]) => smd(x, y, "#b6a889")).join("") +
    (qfn
      ? rect(39, 169, 32, 32, 1, "#212832", "#717e88") + label(55, 185, model, 6.5, "#b9c7ce")
      : quadChip(34, 163, 42, model, 8)) +
    chip(74, 237, 17, 13, "", 3) +
    smd(22, 270, "#d8817a") + smd(81, 270, "#91af7b") +
    label(56, 262, "RESET", 7, boardInk) +
    rect(46, 275, 19, 12, 2, "#99a5ab", "#65747d") +
    rect(50, 278, 11, 8, 1, "#ac783a", "#d3a966");
}

function board32Art(component, showLabels) {
  const { width, height } = component;
  const scale = showLabels ? 0.79 : 0.96;
  const artwork = `<g transform="translate(${(width - 110 * scale) / 2} ${(height - 286 * scale) / 2}) scale(${scale})">${board32Pcb(component)}</g>`;
  if (!showLabels) return artwork;

  return artwork +
    rect(4, 24, 32, height - 48, 4, pinRail) + rect(width - 36, 24, 32, height - 48, 4, pinRail) +
    edgePads(component, true);
}

function nucleo32(model, core, { uart = "USART1", clock = "PF", pwm, adc } = {}) {
  const id = `stm32-nucleo-${model.toLowerCase()}`;
  const analogPorts = ["PA0", "PA1", "PA3", "PA4", "PA5", "PA6", "PA7", "PA2"];
  const inputs = analogPorts.map((port, index) => {
    const extra = {
      4: "SB18 can also connect PB7 for I²C SDA. Follow the D4/A4 solder-bridge instructions.",
      5: "SB16 can also connect PB6 for I²C SCL. Follow the D5/A5 solder-bridge instructions.",
      7: "Check the ST-LINK virtual COM port configuration when using PA2.",
    }[index];
    return gpio(`a${index}`, `A${index}`, `${port}, ${adc?.[index] ?? "analog input"}.${extra ? " " + extra : ""}`);
  });
  const digital = (number, port, note = "") => gpio(`d${number}`, `D${number}`, `${port}.${note ? " " + note : ""}`);
  const clockPorts = clock === "PF" ? ["PF0", "PF1"] : ["PC14", "PC15"];
  const boardLength = 50.292;
  const firstRow = 8.89 - boardLength / 2;
  const definition = boardDefinition({
    id, art: id, name: `STM32 NUCLEO-${model}`, shortName: `NUCLEO-${model}`, manufacturer,
    subtitle: `${core} · MB1180`, width: 144, height: 302,
    description: `STM32${model} Nucleo-32 (MB1180) with two Arduino Nano-format headers and on-board ST-LINK. The target I/O is 3.3 V.`,
    source: mb1180, tags: ["stm32", "st", "nucleo", "mb1180", "nano", "development board"],
  }, [
    header("CN3", "left", 33, [
      digital(1, "PA9", `${uart} TX.`), digital(0, "PA10", `${uart} RX.`), reset("reset-cn3", "NRST"), ground("gnd-cn3"),
      digital(2, "PA12"), digital(3, "PB0", pwm[0]), digital(4, "PB7", "May be shared with I²C SDA at A4 via SB18."),
      digital(5, "PB6", `${pwm[1]} May be shared with I²C SCL at A5 via SB16.`), digital(6, "PB1", pwm[2]),
      digital(7, clockPorts[0], "Shared with the oscillator."), digital(8, clockPorts[1], "Shared with the oscillator."),
      digital(9, "PA8", pwm[3]), digital(10, "PA11", `SPI chip select by GPIO. ${pwm[4]}`),
      digital(11, "PB5", `SPI1 MOSI. ${pwm[5] ?? ""}`.trim()), digital(12, "PB4", "SPI1 MISO."),
    ], { x: -7.62, y: firstRow }),
    header("CN4", "right", 33, [
      powerPorts.VIN("vin"), ground("gnd-cn4"), reset("reset-cn4", "NRST"),
      contact("5v", "5V", "5 V supply rail. Follow the manual for selecting input or output operation."),
      ...inputs.toReversed(), contact("aref", "AREF", "AVDD analog reference."),
      powerPorts["3V3"]("3v3"), digital(13, "PB3", "SPI1 SCK and user LED."),
    ], { x: 7.62, y: firstRow }),
  ], {
    body: [18.542, boardLength], color: nucleoColor, note: carrierNote,
    details: [[0, -20.5, 7, 5, 2.7, "#a6aeb9"], [0, -11, 6.5, 6.5, 1.1, "#273041"], [0, 9, 6.5, 6.5, 1.1, "#273041"]],
  }, board32Pcb);
  return { ...definition, art: board32Art };
}

const f0Adc = [0, 1, 3, 4, 5, 6, 7, 2].map(index => `ADC_IN${index}`);
const l4Adc = [5, 6, 8, 9, 10, 11, 12, 7].map(index => `ADC_IN${index}`);
const l4Pwm = ["TIM1_CH2N.", "TIM16_CH1N.", "TIM1_CH3N.", "TIM1_CH1.", "TIM1_CH4."];

const stm32Definitions = [
  nucleo64("F103RB", "MB1136", "Cortex-M3", f103Left, f103Right),
  nucleo64("F401RE", "MB1136", "Cortex-M4", f4Left, f4Right),
  nucleo64("F411RE", "MB1136", "Cortex-M4", f4Left, f4Right),
  nucleo64("F446RE", "MB1136", "Cortex-M4", f4Left, f4Right),
  nucleo64("G431RB", "MB1367", "Cortex-M4", g4Left, g4Right),
  nucleo64("G474RE", "MB1367", "Cortex-M4", g4Left, g4Right),
  nucleo64("G491RE", "MB1367", "Cortex-M4", g4Left, g4Right),
  nucleo32("F042K6", "Cortex-M0", {
    adc: f0Adc, pwm: ["TIM3_CH3.", "TIM16_CH1N.", "TIM14_CH1.", "TIM1_CH1.", "TIM1_CH4.", "TIM3_CH2."],
  }),
  nucleo32("F303K8", "Cortex-M4", {
    adc: ["ADC1_IN1", "ADC1_IN2", "ADC1_IN4", "ADC2_IN1", "ADC2_IN2", "ADC2_IN3", "ADC2_IN4", "ADC1_IN3"],
    pwm: ["TIM3_CH3.", "TIM16_CH1N.", "TIM3_CH4.", "TIM1_CH1.", "TIM1_CH4.", "TIM17_CH1."],
  }),
  nucleo32("L031K6", "Cortex-M0+", {
    uart: "USART2", clock: "PC", adc: f0Adc,
    pwm: ["TIM2_CH3.", "TIM21_CH1.", "TIM2_CH4.", "TIM2_CH1.", "TIM21_CH2.", "TIM22_CH2."],
  }),
  nucleo32("L412KB", "Cortex-M4", { clock: "PC", adc: l4Adc, pwm: l4Pwm }),
  nucleo32("L432KC", "Cortex-M4", { clock: "PC", adc: l4Adc, pwm: l4Pwm }),
];

export default defineFamily("stm32", stm32Definitions.map(entry => ({ component: entry.component, render: entry.art, footprint: entry.footprint })));
