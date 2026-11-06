import { board, chip, circle, label, line, mountingHole, rect, smd, tactile, usb } from "./catalog-extension.js";
import { boardDefinition, contact, gpio, ground, header, reset, supply } from "./catalog-stm-arduino-tools.js";

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
    if (signal === "-") return null;
    const id = `${name.toLowerCase()}-${index + 1}`;
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

function shieldHeaders(g4) {
  return [
    header("CN6", "top", 58, [
      null, powerPorts.IOREF("shield-ioref"), reset("shield-reset", "NRST"), powerPorts["3V3"]("shield-3v3"),
      powerPorts["5V"]("shield-5v"), ground("shield-gnd6"), ground("shield-gnd7"), powerPorts.VIN("shield-vin"),
    ], { x: -24.13, y: -7 }),
    header("CN8", "top", 207, [
      gpio("a0", "A0", "PA0, analog input."),
      gpio("a1", "A1", "PA1, analog input."),
      gpio("a2", "A2", "PA4, analog input."),
      gpio("a3", "A3", "PB0, analog input."),
      gpio("a4", "A4", f4LeftNotes[36]),
      gpio("a5", "A5", (g4 ? g4LeftNotes : f4LeftNotes)[38]),
    ], { x: -24.13, y: 15.86 }),
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
    ]), { x: 24.13, y: -25.4 }),
    header("CN9", "bottom", 202, numbered("CN9", [
      gpio("d7", "D7", "PA8 GPIO."),
      gpio("d6", "D6", "PB10, PWM."),
      gpio("d5", "D5", "PB4, PWM."),
      gpio("d4", "D4", "PB5 GPIO."),
      gpio("d3", "D3", "PB3, PWM."),
      gpio("d2", "D2", "PA10 GPIO."),
      gpio("d1", "D1", g4 ? g4RightNotes[35] : f4RightNotes[35]),
      gpio("d0", "D0", g4 ? g4RightNotes[37] : f4RightNotes[37]),
    ]), { x: 24.13, y: 1.524 }),
  ];
}

function board64Art({ width, height, shortName, subtitle }) {
  const center = width / 2;
  const connectorRail = (x, y, length) => rect(x, y, 21, length, 4, "#273337", "#566066");
  const headerRail = (x, y, length) => rect(x, y, 11, length, 3, "#222b33");
  return board(width, height, nucleoColor, "#76878b") +
    rect(25, 55, width - 50, 125, 7, "#d5ddd9", "#a0ada9") +
    line(30, 179, width - 30, 179, "#81948e", 2) +
    [26, width - 26].map(x => mountingHole(x, 54) + mountingHole(x, height - 50)).join("") +
    usb(center - 28, 63, 56) +
    chip(center - 22, 109, 44, 40, "ST-LINK", 6) +
    connectorRail(48, 189, height - 239) + connectorRail(width - 69, 189, height - 239) +
    range(19).map(index => [55, 62, width - 55, width - 62].map(x => circle(x, 202 + index * (height - 275) / 18, 2.3, "#d8bc79")).join("")).join("") +
    headerRail(81, 295, 103) + headerRail(81, 418, 81) +
    headerRail(width - 92, 220, 129) + headerRail(width - 92, 377, 103) +
    chip(center - 31, 319, 62, 64, shortName.slice(-6), 8) +
    tactile(center - 47, 210) + tactile(center + 34, 210) +
    label(center - 40, 235, "USER", 7, "#253845") + label(center + 42, 235, "RESET", 7, "#253845") +
    label(center, 274, "STM32 NUCLEO", 16, "#253845") +
    label(center, 418, shortName, 12, "#253845") +
    label(center, 442, subtitle.split(" · ")[0], 9, "#43565c") +
    label(95, 71, "SHIELD PWR", 8, "#253845") + label(width - 95, 71, "SHIELD ADC", 8, "#253845") +
    label(center, height - 47, "ARDUINO SHIELD DIGITAL", 8, "#253845") +
    rect(6, 74, 43, 535, 4, "#22383b") + rect(width - 49, 74, 43, 535, 4, "#22383b") +
    rect(53, 7, width - 106, 22, 4, "#22383b") + rect(22, height - 29, width - 44, 22, 4, "#22383b");
}

function nucleo64(model, boardId, core, left, right) {
  const g4 = boardId === "MB1367";
  const id = `stm32-nucleo-${model.toLowerCase()}`;
  return boardDefinition({
    id, art: id, name: `STM32 NUCLEO-${model}`, shortName: `NUCLEO-${model}`, manufacturer,
    subtitle: `${core} · ${boardId}`, width: 344, height: 660,
    description: `ST ${boardId} Nucleo-64 with STM32${model}, 3.3 V target I/O, on-board ST-LINK, two Morpho headers and Arduino UNO shield sockets. Morpho contacts are flattened by number on the sides, while the shield sockets are shown at the ends.`,
    source: g4 ? mb1367 : mb1136, tags: ["stm32", "st", "nucleo", "morpho", boardId.toLowerCase(), "shield", "development board"],
  }, [
    header("CN7", "left", 84, morphoSignals("CN7", left, g4 ? g4LeftNotes : f4LeftNotes), { x: -31.75, y: -25.4, columns: 2 }, 14),
    header("CN10", "right", 84, morphoSignals("CN10", right, g4 ? g4RightNotes : f4RightNotes), { x: 29.21, y: -25.4, columns: 2 }, 14),
    ...shieldHeaders(g4),
  ], {
    body: [70, 82.55], color: nucleoColor, note: carrierNote,
    details: [[0, -24, 13.5, 13.5, 2, "#273041"], [12, -36, 7.2, 5, 3.5, "#a6aeb9"], [0, 13, 12, 12, 1.5, "#273041"]],
  }, board64Art);
}

function board32Art({ width, height, shortName }) {
  const center = width / 2;
  return board(width, height, nucleoColor, "#7d9090") +
    rect(7, 29, 32, height - 59, 4, "#263d3f") + rect(width - 39, 29, 32, height - 59, 4, "#263d3f") +
    usb(center - 18, 8, 36) + chip(center - 18, 57, 36, 41, "ST-LINK", 5) +
    tactile(center - 7, 112) + chip(center - 20, 154, 40, 51, shortName.slice(-6), 5) +
    [0, 1, 2].map(index => smd(center - 14 + index * 10, 216, "#d9b665")).join("") +
    label(center, 247, "NUCLEO-32", 9, "#29404a") + label(center, 263, shortName.slice(-6), 9, "#29404a");
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
  return boardDefinition({
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
    ], { x: -7.62, y: -17.78 }),
    header("CN4", "right", 33, [
      powerPorts.VIN("vin"), ground("gnd-cn4"), reset("reset-cn4", "NRST"),
      contact("5v", "5V", "5 V supply rail. Follow the manual for selecting input or output operation."),
      ...inputs.toReversed(), contact("aref", "AREF", "AVDD analog reference."),
      powerPorts["3V3"]("3v3"), digital(13, "PB3", "SPI1 SCK and user LED."),
    ], { x: 7.62, y: -17.78 }),
  ], {
    body: [18, 50], color: nucleoColor, note: carrierNote,
    details: [[0, -20.5, 7, 5, 2.7, "#a6aeb9"], [0, -11, 6.5, 6.5, 1.1, "#273041"], [0, 9, 6.5, 6.5, 1.1, "#273041"]],
  }, board32Art);
}

const f0Adc = [0, 1, 3, 4, 5, 6, 7, 2].map(index => `ADC_IN${index}`);
const l4Adc = [5, 6, 8, 9, 10, 11, 12, 7].map(index => `ADC_IN${index}`);
const l4Pwm = ["TIM1_CH2N.", "TIM16_CH1N.", "TIM1_CH3N.", "TIM1_CH1.", "TIM1_CH4."];

export const stm32Definitions = [
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
