import { physicalComponent } from "../shared/physical-contacts.js";
import { defineFamily } from "../registry.js";
import { board, chip, circle, label, line, mountingHole, path, pinRow, rect, smd, tactile } from "../shared/svg.js";
import { microUsb, espDevKitArt } from "../shared/esp-devkit-art.js";

const espDocs = "https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3";
const seeedS3 = "https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/";
const seeedRp = "https://wiki.seeedstudio.com/XIAO-RP2040/";
const ground = (id = "gnd", label = "GND", text = "Power and signal ground.") => [id, label, text, "power_in"];
const input = (id, label, text) => [id, label, text, "input"];
const supply = (id, label, text) => [id, label, text, "power_in"];
const output = (id, label, text) => [id, label, text, "power_out"];
const rail = (id, label, text) => [id, label, text, "passive"];
const bidirectional = (id, label, text) => [id, label, text, "bidirectional"];
const number = (pin, terminal) => [...pin, String(terminal)];
const numbered = (pins, first, step = 1) => pins.map((pin, i) => number(pin, first + i * step));

function gpio(n, label = `IO${n}`, text = "", id = `gpio${n}`) {
  return bidirectional(id, label, `3.3 V GPIO${n}.${text ? ` ${text}` : ""}`);
}

function rpGpio(n, label = `GP${n}`, text = "") {
  const analog = n >= 26 ? ` ADC input ${n - 26}.` : "";
  return bidirectional(`gp${n}`, label, `3.3 V GPIO${n}.${analog}${text ? ` ${text}` : ""}`);
}

function espGpio(n, label = `IO${n}`, text = "") {
  const analog = n >= 1 && n <= 10 ? ` ADC1 channel ${n - 1} and touch input.`
    : n >= 11 && n <= 14 ? ` ADC2 channel ${n - 11} and touch input.`
    : n >= 15 && n <= 20 ? ` ADC2 channel ${n - 11}.` : "";
  const strap = [0, 3, 45, 46].includes(n) ? " Boot strapping pin." : "";
  return bidirectional(`gpio${n}`, label, `3.3 V GPIO${n}.${analog}${strap}${text ? ` ${text}` : ""}`);
}

function row(side, pins, { start = 23, gap = 15, prefix = "", x, y, pitch = 2.54, size, drill, smd: surface } = {}) {
  return {
    side, pins, start, gap, prefix,
    footprint: { ids: pins.map(pin => pin[0]), axis: side === "left" || side === "right" ? "y" : "x", x, y, pitch, size, drill, smd: surface },
  };
}

function carrierRow(side, pins, x, y, options = {}) {
  return row(side, pins, { ...options, x, y });
}

function footprintContacts(footprint) {
  return new Map([...(footprint.pads ?? []), ...(footprint.groups ?? []).flatMap(group => group.ids.map((id, index) => ({
    id, x: group.x + (group.axis === "y" ? 0 : index * (group.pitch ?? 2.54)),
    y: group.y + (group.axis === "y" ? index * (group.pitch ?? 2.54) : 0),
  })))].map(pad => [pad.id, pad]));
}

function contactArt(component, labels) {
  return component.pins.map(pin => {
    const horizontal = pin.edge === "left" || pin.edge === "right";
    const before = pin.edge === "left" || pin.edge === "top";
    const delta = before ? 1 : -1;
    const x = pin.labelX ?? pin.x + (horizontal ? delta * 7 : 0);
    const y = pin.labelY ?? pin.y + (horizontal ? 0 : delta * 9);
    const metal = pin.land === "smd" ? rect(pin.x - 2, pin.y - 2.5, 4, 5, .5, "#d6b377", "#f0d69c")
      : circle(pin.x, pin.y, 4, "#d6b377") + circle(pin.x, pin.y, 1.8, "#263d38");
    return metal + (labels ? label(x, y, pin.caption ?? pin.label, pin.dense ? 5 : 6.7, "#e7eddf", pin.labelAnchor ?? (horizontal ? before ? "start" : "end" : "middle")) : "");
  }).join("");
}

function xiaoViews(component, footprint, draw) {
  const plus = component.id.endsWith("-plus"), rearStart = plus ? 207 : 145;
  const bottom = rearStart - (component.id.includes("esp32") ? 10 : 9);
  const frontScale = Math.min((component.width - 14) / 17.8, (rearStart - 14) / 21);
  const backScale = Math.min((component.width - 26) / 17.8, (component.height - rearStart - 12) / 21);
  const pads = footprintContacts(footprint);
  const frontIds = new Set(footprint.groups.slice(0, 2).flatMap(group => group.ids));
  const physical = physicalComponent(component, pin => {
    const pad = pads.get(pin.id), front = frontIds.has(pin.id), scale = front ? frontScale : backScale;
    return { x: component.width / 2 + (front ? pad.x : -pad.x) * scale,
      y: (front ? 7 : rearStart + 6) + (pad.y + 10.5) * scale,
      face: front ? "front" : "back", land: "smd", dense: !front, caption: front ? pin.label : pin.number,
      ...(!front ? { labelX: component.width / 2 - pad.x * scale, labelY: rearStart + 6 + (pad.y + 10.5) * scale - 4, labelAnchor: "middle" } : {}),
    };
  });
  const sx = 17.8 * frontScale / (component.width - 14), sy = 21 * frontScale / (bottom - 14);
  return { component: physical, art: (entry, labels) =>
    `<g transform="translate(${entry.width / 2 - entry.width / 2 * sx} ${7 - 7 * sy}) scale(${sx} ${sy})">${draw(entry)}</g>` +
    rect(entry.width / 2 - 17.8 * backScale / 2, rearStart + 6, 17.8 * backScale, 21 * backScale, 2, "#304139", "#6d8277") +
    label(entry.width / 2, rearStart, "UNDERSIDE · MIRRORED", 5.5, "#334c55") + contactArt(entry, labels) };
}

function makeBoard(options, rows, draw, footprint) {
  const { id, width, height } = options;
  const component = { category: "Microcontrollers", art: id, referencePrefix: "U", ...options,
    pins: rows.flatMap(({ side, start, gap, pins, prefix }) => pinRow(side, width, height, start, gap, pins, prefix)) };
  const carrier = { ...footprint, groups: rows.map(row => row.footprint).filter(({ x, y }) => Number.isFinite(x) && Number.isFinite(y)) };
  if (id.startsWith("seeed-xiao-")) return { ...xiaoViews(component, carrier, draw), footprint: carrier };
  const pads = footprintContacts(carrier);
  const physical = physicalComponent(component, pin => {
    if (id === "esp32-s3-usb-otg") {
      const pad = pads.get(pin.id), scale = 2.2;
      return { x: 265 - pad.x * scale, y: 47 + (pad.y + 16) * scale, land: "smd", dense: true,
        labelX: 265 - pad.x * scale, labelY: 47 + (pad.y + 16) * scale + (pin.number.startsWith("J5.") ? -6 : 7), caption: pin.number, labelAnchor: "middle" };
    }
    if (id.startsWith("raspberry-pi-pico") && pin.number.startsWith("SWD.")) {
      const index = Number(pin.number.split(".")[1]) - 1, wireless = id.endsWith("-w");
      return { x: (wireless ? [78, 94, 110] : [57, 73, 89])[index], y: wireless ? 204 : height - 29,
        land: "smd", dense: true, labelX: (wireless ? [78, 94, 110] : [57, 73, 89])[index], labelY: wireless ? 214 : height - 20, labelAnchor: "middle" };
    }
    if (id === "waveshare-esp32-s3-zero" && /^[FB]\./.test(pin.number)) {
      const front = pin.number.startsWith("F."), index = Number(pin.number.split(".")[1]) - 1, pad = pads.get(pin.id);
      return { x: front ? 113 : 75 - pad.x * 3, y: front ? 129 + index * 10 : 159 + (pad.y + 11.75) * 3,
        face: front ? "front" : "back", land: "smd", dense: true, labelX: front ? 121 : 75 - pad.x * 3 + 5,
        labelY: front ? 129 + index * 10 : 159 + (pad.y + 11.75) * 3, labelAnchor: "start" };
    }
    if (id.startsWith("adafruit-qt-py-") && pin.number.startsWith("QT.")) {
      const index = Number(pin.number.split(".")[1]) - 1, esp = id.endsWith("esp32-s3");
      return { x: esp ? 85 + index * 9 : 50 + index * 10, y: esp ? 122 : 124, land: "smd", dense: true,
        labelX: esp ? 85 + index * 9 : 50 + index * 10, labelY: esp ? 115 : 117, caption: String(index + 1), labelAnchor: "middle" };
    }
    if (id.startsWith("adafruit-qt-py-") && pin.number.startsWith("BAT.")) {
      const x = pin.id === "bat-minus" ? 123 : 141;
      return { x, y: 15, land: "smd", labelX: x, labelY: 23, caption: pin.id === "bat-minus" ? "−" : "+", labelAnchor: "middle" };
    }
    if (id === "adafruit-metro-esp32-s3" && pin.number.startsWith("JP2.")) return { x: pin.number.endsWith("1") ? 153 : 160, y: 92, land: "smd", dense: true };
    if (id === "adafruit-metro-esp32-s3" && pin.number.startsWith("QT.")) {
      const index = Number(pin.number.split(".")[1]) - 1;
      return { x: 218, y: 41 + index * 4, land: "smd", dense: true, labelX: 227, labelY: 41 + index * 4, caption: String(index + 1), labelAnchor: "start" };
    }
    if (id === "adafruit-metro-esp32-s3" && pin.number.startsWith("X1.")) return { x: pin.id === "bat-minus" ? 170 : 183, y: 261, land: "smd", dense: true };
    return [pin.x === 0 ? 9 : pin.x === width ? width - 9 : pin.x, pin.y === 0 ? 9 : pin.y === height ? height - 9 : pin.y];
  });
  const art = (entry, labels) => {
    if (id === "esp32-s3-usb-otg") return `<g transform="translate(0 42) scale(.5)">${draw(entry)}</g>` +
      label(89, 31, "FRONT", 7, "#334c55") + label(265, 31, "UNDERSIDE · MIRRORED", 7, "#334c55") +
      rect(265 - 65 * 2.2 / 2, 47, 65 * 2.2, 32 * 2.2, 3, "#263b3c", "#6d8277") + contactArt(entry, labels);
    return draw(entry) + (id === "adafruit-qt-py-esp32-s3" ? rect(113, 2, 38, 25, 1, "#34493f", "#7c9184") + label(132, 6, "REAR BAT", 4.7, "#dce7d5") : "") + contactArt(entry, labels);
  };
  return { component: physical, art, footprint: carrier };
}

function topUsbC(x, y, width, height) {
  return rect(x - 2, y + height - 7, width + 4, 7, 2, "#9f9272") +
    rect(x, y, width, height, 3, "#d4d8d9", "#eef0ef") +
    rect(x + 4, y + 1, width - 8, 4, 1, "#a0aaae") +
    line(x + 3, y + 7, x + 3, y + height - 3, "#b1b8b9") +
    line(x + width - 3, y + 7, x + width - 3, y + height - 3, "#b1b8b9") +
    rect(x + width / 4, y + height - 7, 5, 2.5, 1, "#818b90") +
    rect(x + width * 0.75 - 5, y + height - 7, 5, 2.5, 1, "#818b90");
}


const espDevKitM = makeBoard({
  id: "esp32-s3-devkitm-1", name: "ESP32-S3 DevKitM-1", shortName: "DevKitM-1",
  manufacturer: "Espressif", subtitle: "MINI-1 / dual USB", tags: ["esp32", "esp32-s3", "usb", "usb otg", "devkit", "wifi", "ble"],
  description: "Espressif revision 1.0 development kit with the ESP32-S3-MINI-1 module, native USB and a separate USB-to-UART port. Its header order differs from DevKitC-1.",
  source: `${espDocs}/esp32-s3-devkitm-1/user_guide.html`, width: 150, height: 374,
}, [
  carrierRow("left", [
    rail("3v3", "3V3", "3.3 V rail. Use this or the 5 V input or USB as the power source."),
    ...Array.from({ length: 19 }, (_, i) => espGpio(i, String(i), ({ 0: "BOOT button.", 15: "UART0 RTS.", 16: "UART0 CTS.", 17: "UART1 TX.", 18: "UART1 RX." })[i])),
    rail("5v", "5V", "5 V rail. Can power the board as an alternative to USB or the 3.3 V rail."), ground(),
  ], -11.43, -29.97, { start: 19, prefix: "J1." }),
  carrierRow("right", [
    ground("gnd-2"), input("rst", "RST", "ESP32-S3 enable. Pull low to reset."),
    espGpio(46, "46"), espGpio(45, "45"), espGpio(44, "RX", "UART0 RX."), espGpio(43, "TX", "UART0 TX."),
    ...[42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 26, 21, 20, 19, 48, 47].map(n => espGpio(n, String(n), ({
      42: "JTAG MTMS.", 41: "JTAG MTDI.", 40: "JTAG MTDO.", 39: "JTAG MTCK.",
      20: "Native USB D+.", 19: "Native USB D-.", 48: "Shared with the on-board RGB LED.",
    })[n])),
  ], 11.43, -29.97, { start: 19, prefix: "J3." }),
], component => espDevKitArt(component, true), {
  body: [25.4, 62.74], color: "#26323e", details: [[0, -20, 15.4, 15.4, 2.4, "#b5c1c5"], [-6.4, 28.5, 7.5, 5.5, 2.5, "#a8b2b9"], [6.4, 28.5, 7.5, 5.5, 2.5, "#a8b2b9"]],
  note: "Revision 1.0 reference carrier from the Espressif 62.74 × 25.40 mm drawing. Rows are 22.86 mm apart at 2.54 mm pitch. Check antenna and USB overhang clearance.",
});

const zeroTop = [
  espGpio(16, "16", "Front auxiliary solder pad."),
  espGpio(15, "15", "Front auxiliary solder pad."),
  espGpio(14, "14", "Front auxiliary solder pad."),
];
const zeroBack = [45, 42, 41, 40, 39, 38, 18, 17].map(n => espGpio(n, String(n), "Rear auxiliary solder pad."));

const espZero = makeBoard({
  id: "waveshare-esp32-s3-zero", name: "Waveshare ESP32-S3-Zero", shortName: "ESP32-S3-Zero",
  manufacturer: "Waveshare", subtitle: "18 × 23.5 mm / USB-C", tags: ["esp32", "esp32-s3", "usb", "wifi", "ble", "castellated"],
  description: "Compact ESP32-S3FH4R2 module with 4 MB flash, 2 MB PSRAM and native USB-C. The drawing includes the front and rear solder pads. GPIO21 drives the on-board RGB LED.",
  source: "https://docs.waveshare.com/ESP32-S3-Zero", width: 150, height: 240,
}, [
  carrierRow("left", [
    supply("5v", "5V", "External supply input, 3.7 to 6 V per Waveshare. USB-C is an alternative source."),
    ground(), output("3v3", "3V3", "Regulated 3.3 V output."), ...[1, 2, 3, 4, 5, 6].map(n => espGpio(n, String(n))),
  ], -7.62, -10.16, { start: 23, gap: 14, prefix: "L." }),
  carrierRow("right", [
    espGpio(43, "TX", "Default UART0 TX."), espGpio(44, "RX", "Default UART0 RX."),
    ...[13, 12, 11, 10, 9, 8, 7].map(n => espGpio(n, String(n))),
  ], 7.62, -10.16, { start: 23, gap: 14, prefix: "R." }),
  carrierRow("right", zeroTop, 13, 5.7, { start: 184, gap: 17, prefix: "F." }),
  carrierRow("left", zeroBack, 5.37, -2.96, { start: 153, gap: 11, prefix: "B.", pitch: 1.59, size: 1.43, smd: true }),
], ({ width, height }) =>
  board(width, 161, "#145783", "#37769e") +
  topUsbC(47, 3, 56, 39) +
  tactile(35, 47) + tactile(100, 47) + label(43, 42, "B", 6) + label(107, 42, "R", 6) +
  rect(69, 49, 12, 12, 2, "#e2e5dc", "#c0d5ce") + circle(75, 55, 2, "#9bb3a6") +
  '<g transform="rotate(45 74 99)">' + chip(49, 76, 50, 46, "", 10) + "</g>" +
  label(74, 99, "ESP32-S3", 7, "#b0b9c0") +
  rect(35, 71, 9, 12, 1, "#c2c6be", "#dfdfd7") +
  chip(104, 70, 14, 12, "", 3) + smd(34, 117) + smd(101, 119) +
  rect(34, 139, 58, 12, 1, "#e2d9c6", "#f3e9db") +
  rect(47, 139, 33, 12, 1, "#8f3433") + label(63, 145, "C3", 7) +
  [129, 139, 149].map(y => circle(113, y, 3, "#dcb16a")).join("") +
  rect(48, 159, 54, 70.5, 2, "#193449", "#37769e") +
  label(75, 155, "UNDERSIDE · MIRRORED", 5.5, "#334c55"), {
  body: [18, 23.5], color: "#174675", details: [[0, -8.4, 8.5, 5.5, 3.3, "#a8b2b9"], [0, 0, 7, 7, 1.5, "#273041"]],
  note: "Reference carrier for the 18 × 23.5 mm ESP32-S3-Zero. Side headers use 2.54 mm pitch and rear test-pad positions follow the drawing. The separate row outside the outline terminates individual wires to the three front solder pads. Verify clearances and leave the antenna exposed.",
});

const picoLeft = numbered([
  rpGpio(0, "GP0", "Default UART0 TX."), rpGpio(1, "GP1", "Default UART0 RX."), ground("gnd-3"),
  rpGpio(2), rpGpio(3), rpGpio(4), rpGpio(5), ground("gnd-8"),
  rpGpio(6), rpGpio(7), rpGpio(8), rpGpio(9), ground("gnd-13"),
  rpGpio(10), rpGpio(11), rpGpio(12), rpGpio(13), ground("gnd-18"), rpGpio(14), rpGpio(15),
], 1);

const picoRight = numbered([
  rail("vbus", "VBUS", "USB bus voltage, normally 5 V when USB is connected."),
  supply("vsys", "VSYS", "Main system supply input, 1.8 to 5.5 V. See the power-chain guidance before using an external supply with USB."),
  ground("gnd-38"), input("3v3-en", "3V3_EN", "Regulator enable. Pull low to disable 3.3 V output."),
  output("3v3", "3V3", "Regulated 3.3 V output."), supply("adc-vref", "ADC_VREF", "ADC reference node. The board derives it from 3.3 V through a filter."),
  rpGpio(28), ground("agnd", "AGND", "Analog ground reference for the ADC."), rpGpio(27), rpGpio(26),
  input("run", "RUN", "RP2040 run control. Pull low to reset."), rpGpio(22), ground("gnd-28"),
  rpGpio(21), rpGpio(20), rpGpio(19), rpGpio(18), ground("gnd-23"), rpGpio(17), rpGpio(16),
], 40, -1);

const picoDebug = [
  input("swclk", "SWCLK", "Serial Wire Debug clock from the debugger."),
  ground("gnd-swd"), bidirectional("swdio", "SWDIO", "Serial Wire Debug data."),
];

function rp2040Package(x, y, size) {
  const pads = Array.from({ length: 12 }, (_, index) => {
    const offset = (index + 1) * size / 13;
    return line(x + offset, y - 1, x + offset, y + size + 1, "#998974", 1) +
      line(x - 1, y + offset, x + size + 1, y + offset, "#998974", 1);
  }).join("");
  return pads + rect(x, y, size, size, 1.5, "#252829", "#3e4240") +
    circle(x + 4, y + 4, 1.4, "#636663") +
    label(x + size / 2, y + size / 2, "RP2040", 7, "#a6a9a3");
}

function picoArt({ width, height }, wireless) {
  const cpuY = wireless ? 135 : 148;
  const bottom = height - 16;
  const debugPads = wireless ? [78, 94, 110] : [57, 73, 89];
  const debugY = wireless ? 204 : bottom - 13;
  const lowerBoard = wireless
    ? rect(39, 211, 70, 62, 2, "#c6cbc6", "#e1e3df") +
      line(42, 214, 106, 214, "#d7dcd7") +
      label(74, 240, "Pico W", 8, "#5e6762") +
      rect(46, 278, 55, 20, 1, "#20684c")
    : label(73, 270, "PICO", 13, "#e5f3e9");
  return rect(7, 11, width - 14, bottom - 9, 2, "#19382e") +
    rect(7, 9, width - 14, bottom - 9, 2, "#146544", "#3e8c6b") +
    [37, 109].map(x => mountingHole(x, 22) + mountingHole(x, bottom - 13)).join("") +
    path("M51 2H95V32L91 37H55L51 32Z", "#c9ccc6", "#e4e6e2") +
    rect(55, 29, 36, 7, 1, "#454c4b") + rect(57, 30, 6, 4, 0.5, "#aeb5af") +
    rect(83, 30, 6, 4, 0.5, "#aeb5af") +
    smd(33, 39, "#d4daaa") + label(73, 44, "USB", 6) +
    rect(83, 64, 18, 15, 1, "#252d2c") + rect(105, 62, 10, 14, 1, "#272f2d") +
    smd(83, 55) + smd(83, 82) +
    rect(43, 63, 20, 23, 2, "#cdd3cf", "#edf0e9") + circle(53, 74.5, 8, "#f5f6f1") +
    label(53, 92, "BOOTSEL", 6) +
    rect(42, 112, 14, 17, 1, "#252a28") +
    smd(96, 106) + smd(102, 119, "#bbb68f") +
    [61, 68, 75, 82, 89, 96].map(x => rect(x, cpuY - 11, 3, 5, 0.5, "#c3ae91")).join("") +
    rp2040Package(51, cpuY, 44) +
    rect(48, wireless ? 197 : 218, 19, 9, 1, "#bbc2bd", "#d8e2dd") +
    `<g transform="rotate(-90 36 239)">${label(36, 239, "Raspberry Pi", 7, "#d6ebe1")}</g>` +
    lowerBoard +
    debugPads.map(x => rect(x - 4, debugY - 5, 8, 10, 1, "#ab9d76") + circle(x, debugY, 2.1, "#ecead4")).join("") +
    label(wireless ? 94 : 73, debugY - 11, "DEBUG", 6, "#d5e6db");
}

function picoBoard(wireless) {
  return makeBoard({
    id: wireless ? "raspberry-pi-pico-w" : "raspberry-pi-pico", name: wireless ? "Raspberry Pi Pico W" : "Raspberry Pi Pico",
    shortName: wireless ? "Pico W" : "Pico", manufacturer: "Raspberry Pi",
    subtitle: wireless ? "RP2040 / Wi-Fi and BLE" : "RP2040 / 40-pin board", tags: ["rp2040", "pico", "micro usb", ...(wireless ? ["wifi", "ble", "pico wh"] : ["pico h"])],
    description: wireless
      ? "RP2040 board with CYW43439 wireless, 26 exposed GPIOs and Serial Wire Debug. Pico WH has the same 40-pin I/O arrangement with factory-fitted headers and a debug socket."
      : "Original RP2040 board with 26 exposed GPIOs, Micro USB and Serial Wire Debug. Pico H has the same 40-pin I/O arrangement with factory-fitted headers and a debug socket.",
    source: wireless ? "https://datasheets.raspberrypi.com/picow/PicoW-A4-Pinout.pdf" : "https://datasheets.raspberrypi.com/pico/Pico-R3-A4-Pinout.pdf",
    width: 146, height: 345,
  }, [
    carrierRow("left", picoLeft, -8.89, -24.13, { start: 18 }),
    carrierRow("right", picoRight, 8.89, -24.13, { start: 18 }),
    carrierRow("bottom", picoDebug, wireless ? 0.5841 : -2.54, wireless ? 5.7 : 24.13, {
      start: 35, gap: 38, prefix: "SWD.", size: wireless ? 1.5748 : 1.6, drill: 1, smd: wireless,
    }),
  ], component => picoArt(component, wireless), {
    body: [21, 51], color: "#126b51", details: [[0, -22, 8, 6, 2.8, "#a8b2b9"], [0, -3, 7, 7, 1, "#273041"], ...(wireless ? [[0, 13, 11, 12, 1.9, "#b4c2b9"]] : [])],
    note: wireless
      ? "Pico W 40-pin carrier at 2.54 mm pitch and 17.78 mm between rows. The separate SWD pads match Pico W. Check access to the fitted connector when using Pico WH. Leave the board antenna clear."
      : "Pico 40-pin carrier at 2.54 mm pitch and 17.78 mm between rows. The debug row follows the exposed pads on the original Pico. Check debug connector access when using Pico H.",
  });
}

const pico = picoBoard(false);
const picoW = picoBoard(true);

const xiaoPower = [
  rail("vbus", "5V", "USB VBUS; 5 V from USB or external power according to the board's power rules."),
  ground(), output("3v3", "3V3", "On-board 3.3 V regulator output."),
];

const xiaoS3Left = [1, 2, 3, 4, 5, 6, 43].map((n, i) =>
  gpio(n, `D${i}`, ["Analog A0.", "Analog A1.", "Analog A2 and boot strapping.", "Analog A3.", "I²C SDA and analog A4.", "I²C SCL and analog A5.", "UART0 TX."][i]));

const xiaoS3Right = [
  ...xiaoPower,
  gpio(9, "D10", "SPI MOSI and analog A10."),
  gpio(8, "D9", "SPI MISO and analog A9."),
  gpio(7, "D8", "SPI SCK and analog A8."),
  gpio(44, "D7", "UART0 RX."),
];

const xiaoRpLeft = [
  ...[26, 27, 28, 29].map((n, i) => rpGpio(n, `D${i}`, `Board alias A${i}.`)),
  rpGpio(6, "D4", "I²C0 SDA."), rpGpio(7, "D5", "I²C0 SCL."), rpGpio(0, "D6", "UART0 TX."),
];

const xiaoRpRight = [
  ...xiaoPower,
  rpGpio(3, "D10", "SPI0 MOSI."), rpGpio(4, "D9", "SPI0 MISO."),
  rpGpio(2, "D8", "SPI0 SCK."), rpGpio(1, "D7", "UART0 RX."),
];

const jtagMtck = "JTAG MTCK.";
const jtagMtdo = "JTAG MTDO.";
const jtagMtdi = "JTAG MTDI.";
const jtagMtms = "JTAG MTMS.";
const rearUsb = (plus) => [
  bidirectional("usb-minus", "D−", `Rear USB D− pad connected to the USB-C data pair.${plus ? "" : " Used for USB programming."}`),
  bidirectional("usb-plus", "D+", `Rear USB D+ pad connected to the USB-C data pair.${plus ? "" : " Used for USB programming."}`),
];
const rearBatPlus = supply("bat-plus", "BAT+", "Positive lead for a protected single-cell lithium battery. Follow the vendor's charging guidance.");
const rearBatMinus = ground("bat-minus", "BAT−", "Battery return.");
const resetS3 = input("en", "EN", "ESP32-S3 CHIP_PU. Pull low to reset.");
const resetRp = input("run", "RST", "RP2040 RUN. Pull low to reset.");
const swclk = input("swclk", "SWCLK", "Serial Wire Debug clock.");
const swdio = bidirectional("swdio", "SWDIO", "Serial Wire Debug data.");

const xiaoS3Rear = [
  gpio(41, "MTDI", jtagMtdi), gpio(40, "MTDO", jtagMtdo),
  resetS3, ground("gnd-debug"), gpio(42, "MTMS", jtagMtms), gpio(39, "MTCK", jtagMtck),
  ...rearUsb(false), rearBatPlus, rearBatMinus,
];
const xiaoRpRear = [
  swdio, swclk, resetRp, ground("gnd-debug"),
  supply("vin-pad", "VIN", "Rear external power pad. Use 5 V and follow the manufacturer's USB power guidance."),
  ground("gnd-rear"),
];

const s3PlusExtraLeft = [
  gpio(38, "D11", "I²S data."), gpio(39, "D12", `I²S clock. ${jtagMtck}`), gpio(40, "D13", `I²S word select. ${jtagMtdo}`),
  gpio(41, "D14", `PDM data. ${jtagMtdi}`), gpio(42, "D15", `PDM clock. ${jtagMtms}`), gpio(10, "D16", "ADC1 input."),
];
const s3PlusExtraRight = [
  gpio(11, "D19", "SPI1 MOSI and ADC2 input."), gpio(12, "D18", "SPI1 MISO and ADC2 input."), gpio(13, "D17", "SPI1 SCK and ADC2 input."),
];
const s3PlusRear = [
  gpio(41, "MTDI", `${jtagMtdi} Same net as D14.`, "jtag-mtdi"),
  gpio(40, "MTDO", `${jtagMtdo} Same net as D13.`, "jtag-mtdo"),
  resetS3, ground("gnd-debug"),
  gpio(42, "MTMS", `${jtagMtms} Same net as D15.`, "jtag-mtms"),
  gpio(39, "MTCK", `${jtagMtck} Same net as D12.`, "jtag-mtck"),
  ...rearUsb(true), rearBatPlus, rearBatMinus,
];

const rpPlusExtraLeft = [5, 13, 14, 15, 16, 17].map((n, i) => rpGpio(n, `D${19 + i}`, "Half-pitch castellated edge pad."));
const rpPlusExtraRight = [8, 9, 10].map((n, i) => rpGpio(n, `D${27 - i}`, "Half-pitch castellated edge pad."));
const rpPlusRearGpio = [
  number(rpGpio(18, "D12", "Rear breakout pad."), 25),
  number(rpGpio(21, "D13", "Rear breakout pad. I²C1 SCL."), 26),
  number(rpGpio(20, "D14", "Rear breakout pad. I²C1 SDA."), 27),
  number(rpGpio(19, "D15", "Rear breakout pad."), 28),
  number(rpGpio(22, "D16", "Rear breakout pad."), 29),
  number(rpGpio(23, "D17", "Rear breakout pad."), 30),
];
const rpPlusRearDebug = [
  swdio, swclk, resetRp, ground("gnd-debug"), ...rearUsb(true),
  input("boot", "BOOT", "RP2040 QSPI chip select. Follow the board guide when using this bootloader pad."),
  output("3v3-rear", "3V3", "Rear access to the regulated 3.3 V rail."),
  rearBatPlus, rearBatMinus,
];

function xiaoPads(specs, coords) {
  return specs.map(([id], index) => {
    const [x, y, size = 1.7] = coords[index];
    return { id, x, y, size, shape: Array.isArray(size) ? "roundrect" : "circle" };
  });
}

const xiaoS3RearCoords = [
  [-1.28, -8.632], [1.26, -8.632], [-1.28, -6.092], [1.26, -6.092],
  [-1.28, -3.552], [1.26, -3.552], [-1.28, -1.012], [1.26, -1.012],
  [-4.455, -0.382, [2.5, 1.1]], [-4.455, -2.287, [2.5, 1.1]],
];
const xiaoRpRearCoords = [
  [-1.153, -8.378], [1.387, -8.378], [-1.153, -5.838], [1.387, -5.838],
  [-1.153, 8.64, [1.1, 2.5]], [1.387, 8.64, [1.1, 2.5]],
];
const s3PlusRearCoords = [
  [-1.27, -8.636], [1.27, -8.636], [-1.27, -6.096], [1.27, -6.096],
  [-1.27, -3.556], [1.27, -3.556], [-1.27, -1.016], [1.27, -1.016],
  [-0.993988, 5.517823, [1.1, 2.5]], [1.006012, 5.517823, [1.1, 2.5]],
];
const rpPlusRearCoords = [
  [-1.24, -8.66], [1.3, -8.6727], [-1.24, -6.12], [1.3, -6.1327],
  [-1.24, -3.5927], [1.3, -3.5927], [-1.24, -1.0527], [1.3, -1.0527],
  [-1, 5.039611, [1.1, 2.5]], [1, 5.039611, [1.1, 2.5]],
];
const rpPlusGpioCoords = [[5.03, -1.31], [5.03, 1.23], [5.03, 3.77], [-5.13, 3.77], [-5.13, 1.23], [-5.13, -1.31]];

function xiaoS3Art({ width, height }, { plus, sense, rearStart }) {
  const bottom = rearStart - 10;
  const shieldBottom = bottom - 21;
  const camera = sense
    ? rect(47, 22, 62, 42, 3, "#dedcd5", "#f5f2e7") +
      rect(59, 34, 38, 55, 2, "#c78431", "#e2ad51") +
      [64, 70, 86, 92].map(x => line(x, 45, x, 85, "#e6ad50")).join("") +
      rect(55, 7, 46, 43, 3, "#272a2c", "#676b69") +
      circle(78, 28, 17, "#1c222a", "#575f65") +
      circle(78, 28, 11, "#273341", "#424e60") +
      circle(78, 28, 5.5, "#141c29", "#738ba3") +
      rect(48, 88, 60, 13, 2, "#dad9ce", "#f2eddd") +
      rect(52, 88, 52, 6, 1, "#56575a") +
      label(79, 108, "SENSE", 7, "#32424a")
    : "";
  return board(width, bottom, "#272a29", "#565c56") +
    rect(39, 47, 78, shieldBottom - 47, 3, "#d4d3cb", "#9c937a") +
    rect(43, 50, 70, shieldBottom - 54, 2, "#eeeae0") +
    label(78, 66, "seeed studio", 9, "#323b37") +
    label(78, 82, "XIAO ESP32-S3", 7, "#46514a") +
    (plus ? label(78, 103, "PLUS", 8, "#46514a") : "") +
    rect(42, shieldBottom + 5, 13, 13, 1, "#e3d6b9", "#f6ecd7") +
    circle(48.5, shieldBottom + 11.5, 4, "#c1a16b", "#86714e") +
    circle(48.5, shieldBottom + 11.5, 1.4, "#e4d2a9") +
    rect(65, shieldBottom + 6, 45, 11, 1, "#2f3134", "#8b8a77") +
    Array.from({ length: 10 }, (_, i) => line(68 + 4.2 * i, shieldBottom + 5, 68 + 4.2 * i, shieldBottom + 8, "#bfaa6e")).join("") +
    topUsbC(55, 2, 46, 42) +
    tactile(35, 9) + tactile(107, 9) + smd(39, 30, "#eee8c6") + smd(110, 30, "#dcd9b4") +
    camera +
    "";
}

function xiaoRpArt({ width, height }, { plus, rearStart }) {
  const frontHeight = rearStart - 9;
  const usbHeight = plus ? 42 : 34;
  const stickerY = plus ? 49 : 40;
  const buttonsY = frontHeight - 25;
  const ledY = buttonsY + 7.5;
  return board(width, frontHeight, "#282a28", "#575a54") +
    topUsbC(50, 2, 56, usbHeight) +
    Array.from({ length: 10 }, (_, index) => {
      const x = 60 + 4 * index;
      return line(x, usbHeight + 2, x, usbHeight + 7, "#b8a774", 1);
    }).join("") +
    (plus
      ? smd(38, 17, "#dec692") + smd(109, 17, "#e2ddb3") +
        label(42, 28, "C", 6) + label(113, 28, "L", 6)
      : [19, 25, 31, 37].map(y => circle(112, y, 1.8, "#d7dcd2")).join("")) +
    rect(43, stickerY, 70, buttonsY - stickerY - 5, 3, "#efefeb", "#a9aaa2") +
    label(78, stickerY + 15, "seeed studio", 9, "#292e2b") +
    label(78, stickerY + 31, "XIAO RP2040", 8, "#454944") +
    (plus ? label(78, stickerY + 45, "PLUS", 8, "#454944") : "") +
    tactile(44, buttonsY) + tactile(97, buttonsY) +
    label(38, ledY, "R", 6) + label(119, ledY, "B", 6) +
    rect(72, ledY - 5.5, 12, 11, 1, "#dcdccc", "#faf9e9") +
    circle(78, ledY, 2.6, "#aabfb9") +
    "";
}

function xiaoBoard({ esp, plus, sense = false }) {
  const platform = esp ? "ESP32-S3" : "RP2040";
  const suffix = plus ? " Plus" : sense ? " Sense" : "";
  const left = numbered(esp ? xiaoS3Left : xiaoRpLeft, 1);
  const right = numbered(esp ? xiaoS3Right : xiaoRpRight, 14, -1);
  const rear = esp ? (plus ? numbered(s3PlusRear, 24) : numbered(xiaoS3Rear, 15))
    : (plus ? [...rpPlusRearGpio, ...numbered(rpPlusRearDebug, 32)] : numbered(xiaoRpRear, 15));
  const rearCoords = esp ? (plus ? s3PlusRearCoords : xiaoS3RearCoords)
    : (plus ? [...rpPlusGpioCoords, ...rpPlusRearCoords] : xiaoRpRearCoords);
  const canvasGap = plus ? 24 : 15;
  const canvasHeight = plus ? 332 : esp ? 234 : 213;
  const sideSize = plus ? [2.032, 0.95] : [2.75, 2];
  const rows = [
    carrierRow("left", left, plus ? -8.255 : -8.065, -7.62, { gap: canvasGap, size: sideSize, smd: true }),
    carrierRow("right", right, plus ? 8.255 : 8.1, -7.62, { gap: canvasGap, size: sideSize, smd: true }),
  ];
  const accessoryPins = esp
    ? [number(["thermal-pad", "Thermal PAD", "Rear heat-transfer land for a heat sink.", "no_connect"], plus ? 34 : 25)]
    : plus ? [24, 31].map(pad => number([`nc-${pad}`, "NC", "Unconnected underside land.", "no_connect"], pad)) : [];
  const accessoryCoords = esp
    ? [plus ? [1.125, 1.875, [2.5, 2.8]] : [1.11, 2, [2.75, 2.5]]]
    : plus ? [[5.03, -3.85], [-5.13, -3.85]] : [];
  const extraPads = plus ? [
    ...xiaoPads(esp ? s3PlusExtraLeft : rpPlusExtraLeft,
      Array.from({ length: 6 }, (_, index) => [-8.655, -6.35 + index * 2.54, [1.232, 0.95]])),
    ...xiaoPads(esp ? s3PlusExtraRight : rpPlusExtraRight,
      [6.35, 3.81, 1.27].map(y => [8.655, y, [1.232, 0.95]])),
  ] : [];
  if (plus) {
    rows.push(row("left", numbered(esp ? s3PlusExtraLeft : rpPlusExtraLeft, 15), { start: 35, gap: 24 }));
    rows.push(row("right", numbered(esp ? s3PlusExtraRight : rpPlusExtraRight, 21).reverse(), { start: 107, gap: 24 }));
  }
  const mid = Math.ceil(rear.length / 2);
  const rearStart = plus ? 207 : 145;
  rows.push(row("left", rear.slice(0, mid), { start: rearStart, gap: 14 }));
  rows.push(row("right", rear.slice(mid), { start: rearStart, gap: 14 }));
  if (accessoryPins.length) rows.push(row("bottom", accessoryPins, { start: esp ? 78 : 48, gap: 60 }));

  return makeBoard({
    id: `seeed-xiao-${esp ? "esp32-s3" : "rp2040"}${plus ? "-plus" : sense ? "-sense" : ""}`,
    name: `Seeed XIAO ${platform}${suffix}`, shortName: `XIAO ${platform}${suffix}`,
    manufacturer: "Seeed Studio", subtitle: `${platform} / ${plus ? "expanded I/O" : sense ? "camera and microphone" : "compact USB-C"}`,
    tags: ["seeed", "xiao", "usb", "castellated", esp ? "esp32" : "rp2040", ...(esp ? ["wifi", "ble"] : [])],
    description: sense
      ? "Compact ESP32-S3 board with the Sense camera, microphone and microSD expansion. The side and rear pads follow the base XIAO pinout. The expansion shares D8, D9 and D10 for microSD and GPIO41/42 for PDM audio."
      : `Compact ${platform} board with native USB-C, ${plus ? "extra castellated I/O and rear contact pads" : "castellated headers and rear contact pads"}. ${esp || plus ? "Includes a single-cell battery connection." : "Rear VIN and GND provide access to board power."}`,
    source: esp ? seeedS3 : seeedRp, width: 156, height: canvasHeight,
  }, rows, esp
    ? component => xiaoS3Art(component, { plus, sense, rearStart })
    : component => xiaoRpArt(component, { plus, rearStart }), {
    body: [17.8, 21], color: "#292d31", smd: true, shape: "roundrect", cornerRatio: plus ? 0.1 : 0.25,
    details: [[0, -9, 8.9, 6.4, 3.1, "#a8b2b9"], [0, 1, 11, 12, 1.5, "#c3c3bd"]],
    pads: [...xiaoPads(rear, rearCoords), ...xiaoPads(accessoryPins, accessoryCoords), ...extraPads],
    note: `Reference carrier aligned to Seeed's ${plus ? "Plus" : "standard"} SMD footprint. Rear pads and any additional castellated pads are included.` +
      (esp ? " Follow Seeed's heat-sink guidance for the rear thermal land." : "") +
      " Check carrier clearances and mating-connector height against the actual board.",
  });
}

const xiaoS3 = xiaoBoard({ esp: true });
const xiaoS3Sense = xiaoBoard({ esp: true, sense: true });
const xiaoS3Plus = xiaoBoard({ esp: true, plus: true });
const xiaoRp = xiaoBoard({ esp: false });
const xiaoRpPlus = xiaoBoard({ esp: false, plus: true });

const otgJ5 = [
  output("3v3", "3V3", "3.3 V output on the expansion header."),
  ground(), espGpio(39, "MTCK", jtagMtck), espGpio(40, "MTDO", jtagMtdo),
  espGpio(41, "MTDI", jtagMtdi), espGpio(42, "MTMS", jtagMtms),
  espGpio(45), espGpio(46), espGpio(48), espGpio(26), espGpio(47), espGpio(3),
  ground("gnd-13"), ground("gnd-14"),
];
const otgRows = [0, 1].map(parity =>
  numbered(otgJ5, 1).filter((_, index) => index % 2 === parity).reverse().map(pin => number(pin.slice(0, 4), `J5.${pin[4]}`)));

const espUsbOtg = makeBoard({
  id: "esp32-s3-usb-otg", name: "ESP32-S3-USB-OTG", shortName: "ESP32-S3 USB OTG",
  manufacturer: "Espressif", subtitle: "USB host, device and debug", tags: ["esp32", "esp32-s3", "usb", "usb host", "lcd", "wifi", "ble"],
  description: "Espressif USB-OTG motherboard with USB-A host and device ports, a separate Micro USB serial-debug port, a 1.3-inch LCD daughterboard and microSD. The exposed J5 expansion and battery contacts are represented.",
  source: `${espDocs}/esp32-s3-usb-otg/user_guide.html`, width: 358, height: 190,
}, [
  carrierRow("top", otgRows[1], -12.39, -9.55, { start: 67, gap: 35 }),
  carrierRow("bottom", otgRows[0], -12.39, -7.01, { start: 67, gap: 35 }),
  carrierRow("left", [number(rearBatMinus, "PAD1.2"), number(rearBatPlus, "PAD1.1")], -30.1, 8.18, { start: 133, gap: 18, smd: true, size: 1.7 }),
], ({ width, height }) =>
  rect(39, 20, width - 78, height - 39, 5, "#15191f", "#696454") +
  rect(40, 17, width - 80, height - 39, 5, "#282b2d", "#9c9580") +
  [50, 308].map(x => [29, 156].map(y =>
    circle(x, y, 8, "#15191d", "#575853") +
    path(`M${x - 3} ${y}h6m-3-3v6`, "none", "#575e5c", 1.2)).join("")).join("") +
  rect(3, 64, 39, 57, 2, "#b2b6b1", "#e8e8df") +
  rect(13, 74, 11, 12, 1, "#3b3c39") + rect(13, 99, 11, 12, 1, "#3b3c39") +
  rect(316, 65, 39, 56, 2, "#bcc0bb", "#e8e8df") +
  rect(336, 72, 15, 42, 1, "#646861", "#e2e5da") +
  rect(344, 75, 8, 36, 1, "#222722") +
  label(73, 92, "USB DEV", 7, "#d4c39d") + label(286, 92, "USB HOST", 7, "#d4c39d") +
  rect(121, 36, 117, 108, 2, "#b4a279", "#d5c297") +
  rect(128, 43, 103, 94, 1, "#131a21", "#6c6757") +
  label(179, 96, "1.3-inch LCD", 8, "#8e9a99") +
  label(180, 150, "ESP32-S3-USB-OTG", 7.5, "#ded1ac") +
  label(89, 33, "RST", 6, "#cdbd99") + label(175, 30, "MENU", 6, "#cdbd99") +
  label(76, 146, "ON / OFF", 6, "#cdbd99") + rect(72, 156, 20, 10, 2, "#91968d") +
  rect(83, 157, 7, 11, 1, "#24292b") +
  [113, 182, 225].map(x => rect(x, 163, 11, 5, 1.5, "#a9ada4", "#d5dbd0")).join("") +
  label(118, 157, "BOOT", 6, "#ded1ac") + label(188, 158, "DW−", 6, "#ded1ac") +
  label(231, 158, "UP+", 6, "#ded1ac") +
  microUsb(263, 154, 28) + label(276, 145, "USB-UART", 6, "#ded1ac"), {
  body: [65, 32], color: "#283b4b", details: [[0, 0, 29, 23, 3.8, "#182733"], [-30, 0, 14, 12, 5.5, "#adb9be"], [30, 0, 14, 13, 6.3, "#adb9be"], [21, 15, 8, 4.8, 2.4, "#adb9be"]],
  note: "Reference carrier uses the Espressif 65 × 32 mm board outline and 2.54 mm J5 expansion/test pad array. Verify pad clearances, USB overhang and the rear battery solder connection before fabrication.",
});

const adafruitCad = "https://github.com/adafruit/Adafruit_CAD_Parts/tree/main";
const featherS3Source = "https://learn.adafruit.com/adafruit-esp32-s3-feather/pinouts";
const featherRpSource = "https://learn.adafruit.com/adafruit-feather-rp2040-pico/pinouts";
const qtpyS3Source = "https://learn.adafruit.com/adafruit-qt-py-esp32-s3/pinouts";
const qtpyRpSource = "https://learn.adafruit.com/adafruit-qt-py-2040/pinouts";

const featherReset = input("rst", "RST", "Active-low reset input. Pull to ground to reset the board.");
const feather3v3 = output("3v3", "3V3", "Regulated 3.3 V output.");
const feather3v3B = output("3v3-2", "3V3", "Second contact on the regulated 3.3 V output.");
const featherBat = rail("bat", "BAT", "Positive connection of the JST-PH battery jack and the single-cell charger.");
const featherEnable = input("en", "EN", "3.3 V regulator enable. Pull to ground to turn off the regulator.");
const featherVbus = rail("usb", "USB", "USB bus voltage. Approximately 5 V with a USB source connected.");

const featherS3Left = [
  featherReset, feather3v3, feather3v3B, ground(),
  ...[18, 17, 16, 15, 14, 8].map((n, i) => espGpio(n, `A${i}`, `Board analog input A${i}.`)),
  espGpio(36, "SCK", "SPI clock."), espGpio(35, "MOSI", "SPI controller output."), espGpio(37, "MISO", "SPI controller input."),
  espGpio(38, "RX", "Default board UART RX."), espGpio(39, "TX", "Default board UART TX."),
  espGpio(43, "TXD0", "Separate UART0 debug output."),
];
const featherS3Right = [
  featherBat, featherEnable, featherVbus,
  ...[13, 12, 11, 10, 9, 6, 5].map(n => espGpio(n, `D${n}`)),
  espGpio(4, "SCL", "I²C clock. Also present on the STEMMA QT connector."),
  espGpio(3, "SDA", "I²C data. Also present on the STEMMA QT connector."),
];
const featherRpLeft = [
  featherReset, feather3v3, feather3v3B, ground(),
  ...[26, 27, 28, 29].map((n, i) => rpGpio(n, `A${i}`, `Board analog input A${i}.`)),
  rpGpio(24, "D24", "Secondary I²C0 SDA."), rpGpio(25, "D25", "Secondary I²C0 SCL."),
  rpGpio(18, "SCK", "SPI0 clock."), rpGpio(19, "MOSI", "SPI0 controller output."), rpGpio(20, "MISO", "SPI0 controller input."),
  rpGpio(1, "RX", "UART0 RX."), rpGpio(0, "TX", "UART0 TX."), rpGpio(6, "D4", "Board alias D4."),
];
const featherRpRight = [
  featherBat, featherEnable, featherVbus,
  ...[13, 12, 11, 10, 9, 8, 7].map((n, i) => rpGpio(n, `D${[13, 12, 11, 10, 9, 6, 5][i]}`)),
  rpGpio(3, "SCL", "I²C1 clock. Also present on the STEMMA QT connector."),
  rpGpio(2, "SDA", "I²C1 data. Also present on the STEMMA QT connector."),
];

function shSocket(x, y, width, height) {
  return [0.2, 0.4, 0.6, 0.8].map(offset =>
    line(x + offset * width, y - 4, x + offset * width, y, "#b6a784", 1.7),
  ).join("") +
    rect(x, y, width, height, 2, "#dcdacf", "#f4f2e8") +
    rect(x + 4, y + height - 6, width - 8, 5, 1, "#9d9d92") +
    line(x + 4, y + 2, x + width - 4, y + 2, "#f3f1e8");
}

function featherS3Art({ width, height }) {
  return board(width, height, "#23262a", "#596064") +
    [26, 128].map(x => mountingHole(x, 22) + mountingHole(x, 278)).join("") +
    topUsbC(55, 3, 44, 38) +
    smd(42, 21, "#e7e18e") + smd(105, 21, "#b84946") +
    tactile(37, 57) + tactile(37, 110) +
    label(44, 78, "RST", 6) + label(45, 130, "BOOT", 6) +
    rect(95, 43, 37, 39, 2, "#676963", "#b0b0a2") +
    rect(104, 51, 20, 7, 1, "#24272a") + rect(104, 67, 20, 7, 1, "#24272a") +
    label(112, 88, "LiPo", 7) +
    rect(58, 119, 38, 18, 1, "#2e3233", "#8b8e84") +
    ["#e5d147", "#557fa3", "#bd5147", "#5e6260"].map((fill, i) => circle(65 + 8 * i, 129, 2.2, fill)).join("") +
    label(77, 145, "STEMMA QT", 6) +
    chip(68, 150, 22, 17, "", 3) + smd(100, 145) + smd(50, 152) +
    rect(48, 159, 9, 9, 1, "#c3b78b", "#e4d7aa") +
    circle(53, 164, 2, "#9b8eb3") +
    rect(36, 175, 82, 111, 2, "#22252a", "#5d5c56") +
    rect(37, 175, 80, 87, 2, "#b9b9b3", "#dfdfd4") +
    rect(41, 178, 72, 81, 2, "#cecec7") +
    label(77, 208, "ESP32-S3", 10, "#414b48") +
    label(77, 226, "FEATHER", 8, "#535b53") +
    path("M44 264v17h13v-13h13v13h13v-13h13v13h13v-17", "none", "#8c7654", 1.8);
}

function featherRpArt({ width, height }) {
  const debugPads = [51, 59, 67, 75, 83].map(x =>
    rect(x, 116, 4.7, 13, 0.5, "#c3ad7a") + rect(x, 139, 4.7, 13, 0.5, "#c3ad7a"),
  ).join("");
  return board(width, height, "#222526", "#525755") +
    [26, 128].map(x => mountingHole(x, 22) + mountingHole(x, 279)).join("") +
    topUsbC(53, 3, 48, 37) +
    smd(37, 15, "#e3d995") + smd(106, 15, "#b34f47") +
    label(40, 28, "CHG", 6) + label(112, 27, "13", 6) +
    rect(96, 47, 41, 37, 2, "#dfdbcc", "#f3eee0") +
    rect(100, 51, 31, 13, 1, "#a49d8b") +
    rect(103, 60, 8, 15, 1, "#4e514c") + rect(119, 60, 8, 15, 1, "#4e514c") +
    line(111, 80, 121, 80, "#c3ae86", 1.4) +
    tactile(38, 62) + label(45, 82, "RESET", 6) +
    chip(67, 51, 16, 23, "", 3) + smd(68, 88) + smd(94, 89) +
    rect(38, 96, 15, 15, 2, "#dad9d0", "#ece9df") + circle(45.5, 103.5, 4.7, "#eee4ba") +
    rect(45, 112, 49, 45, 1, "none", "#939690") + debugPads +
    circle(55, 134, 1.6, "#1b2020", "#6c6f6b") + circle(83, 134, 1.6, "#1b2020", "#6c6f6b") +
    label(69, 162, "SWD", 6) +
    smd(48, 172) + smd(102, 153) + smd(104, 171) +
    rp2040Package(57, 179, 42) + label(78, 170, "FEATHER", 8, "#ece9df") +
    chip(85, 229, 31, 29, "8MB", 4) + smd(48, 232) + smd(48, 243) + smd(48, 254) +
    shSocket(43, 267, 35, 22) +
    rect(86, 270, 26, 20, 2, "#e2dfd4", "#f6f3eb") +
    rect(91, 288, 16, 6, 1, "#8b8980") +
    label(99, 265, "BOOTSEL", 6) + label(58, 260, "I²C", 6);
}

function featherBoard(esp) {
  return makeBoard({
    id: esp ? "adafruit-feather-esp32-s3" : "adafruit-feather-rp2040",
    name: esp ? "Adafruit Feather ESP32-S3" : "Adafruit Feather RP2040",
    shortName: esp ? "Feather ESP32-S3" : "Feather RP2040", manufacturer: "Adafruit",
    subtitle: esp ? "Wi-Fi / STEMMA QT / LiPo" : "RP2040 / STEMMA QT / LiPo",
    tags: esp ? ["esp32", "esp32-s3", "feather", "usb", "wifi", "ble"] : ["rp2040", "feather", "usb"],
    description: esp
      ? "Feather-format ESP32-S3 with native USB-C, LiPo charging and STEMMA QT. Covers the shared header map of the 8 MB flash and 4 MB flash/2 MB PSRAM versions."
      : "Feather-format RP2040 with native USB-C, LiPo charging and STEMMA QT. CircuitPython D4, D5 and D6 correspond to GP6, GP7 and GP8.",
    source: esp ? featherS3Source : featherRpSource, width: 154, height: 298,
  }, [
    carrierRow("left", numbered(esp ? featherS3Left : featherRpLeft, 1), -10.16, -19.05, { start: 39 }),
    carrierRow("right", numbered(esp ? featherS3Right : featherRpRight, 28, -1), 10.16, -8.89, { start: 99 }),
  ], esp ? featherS3Art : featherRpArt, {
    body: [22.86, 50.8], color: "#282f36", details: [[0, -22.5, 9, 6, 3, "#a8b2b9"], [7, -13.5, 8, 6, 4.5, "#d7d7cd"], [0, 9, esp ? 15 : 7, esp ? 17 : 7, esp ? 2 : 1.3, esp ? "#c9cecc" : "#273041"]],
    note: "Reference Feather carrier. The two headers use 2.54 mm pitch and 20.32 mm between rows. The STEMMA QT and battery connectors are accessible through their corresponding header signals. Verify connector and antenna clearances.",
  });
}

const qtpyEspLeft = [
  espGpio(18, "A0", "Board analog input A0."),
  espGpio(17, "A1", "Board analog input A1."),
  espGpio(9, "A2", "Board analog input A2."),
  espGpio(8, "A3", "Board analog input A3."),
  espGpio(7, "SDA", "Primary I²C data on the edge pad."),
  espGpio(6, "SCL", "Primary I²C clock on the edge pad."),
  espGpio(5, "TX", "Default board UART TX."),
];
const qtpyPower = [
  rail("vbus", "5V", "USB 5 V rail. Use an external isolation diode when powering the board through this pad."),
  ground(), output("3v3", "3V3", "On-board 3.3 V regulator output."),
];
const qtpyEspRight = [
  ...qtpyPower,
  espGpio(35, "MOSI", "SPI controller output."), espGpio(37, "MISO", "SPI controller input."),
  espGpio(36, "SCK", "SPI clock."), espGpio(16, "RX", "Default board UART RX."),
];
const qtpyRpLeft = [
  ...[29, 28, 27, 26].map((n, i) => rpGpio(n, `A${i}`, `Board analog alias A${i}.`)),
  rpGpio(24, "SDA", "Primary I²C0 data on the edge pad."),
  rpGpio(25, "SCL", "Primary I²C0 clock on the edge pad."),
  rpGpio(20, "TX", "Default UART1 TX."),
];
const qtpyRpRight = [
  ...qtpyPower, rpGpio(3, "MOSI", "SPI0 controller output."),
  rpGpio(4, "MISO", "SPI0 controller input."),
  rpGpio(6, "SCK", "SPI0 clock."), rpGpio(5, "RX", "Default UART1 RX."),
];

function qtpyS3Art({ width, height }) {
  return board(width, height, "#75328c", "#a55eb6") +
    rect(10, 32, 30, 105, 3, "#743491", "#a65bb7") +
    rect(118, 32, 30, 105, 3, "#743491", "#a65bb7") +
    rect(58, 2, 9, 9, 1, "#c4ad70") + rect(91, 2, 9, 9, 1, "#c4ad70") +
    topUsbC(52, 8, 54, 41) +
    label(29, 28, "QT", 8) + label(129, 28, "PY", 8) +
    tactile(44, 62) + tactile(44, 87) +
    label(52, 55, "BOOT", 6) + label(52, 110, "RST", 6) +
    chip(82, 67, 26, 22, "", 3) + smd(83, 52) + smd(108, 89) + smd(75, 99) +
    rect(101, 101, 12, 12, 1, "#dbd1af", "#efe4c3") + circle(107, 107, 2.4, "#9381aa") +
    rect(35, 132, 37, 12, 2, "#d1ccba", "#ede6cf") +
    rect(50, 134, 14, 8, 1, "#e8ddc3") +
    rect(80, 123, 37, 23, 2, "#202226", "#6c616e") +
    [85, 94, 103, 112].map(x => line(x, 117, x, 128, "#c0aa74", 1.4)).join("") +
    rect(84, 138, 29, 7, 1, "#414145") +
    label(98, 133, "QT", 6);
}

function qtpyRpArt({ width, height }) {
  return board(width, height, "#222627", "#565b57") +
    topUsbC(48, 3, 62, 49) +
    label(28, 20, "QT", 9) + label(130, 20, "PY", 9) +
    tactile(38, 76) + label(45, 98, "BOOT", 6) +
    tactile(101, 119) + label(109, 141, "RST", 6) +
    chip(70, 72, 18, 24, "", 3) + smd(67, 59) + smd(89, 58) +
    smd(69, 101) + smd(102, 63) + smd(98, 84) +
    rect(105, 94, 13, 13, 1, "#dcd5bc", "#f0e6cf") + circle(111.5, 100.5, 2.4, "#b7a0c3") +
    shSocket(44, 119, 43, 27) +
    label(65, 111, "I²C1", 6) +
    line(65, 148, 65, 153, "#a28b62");
}

function qtpyBoard(esp) {
  const qt = [
    ground("qt-gnd"), output("qt-3v3", "3V3", "3.3 V supply on the STEMMA QT connector."),
    esp ? espGpio(41, "SDA1", "Secondary I²C data on the STEMMA QT connector.") : rpGpio(22, "SDA1", "Secondary I²C1 data on the STEMMA QT connector."),
    esp ? espGpio(40, "SCL1", "Secondary I²C clock on the STEMMA QT connector.") : rpGpio(23, "SCL1", "Secondary I²C1 clock on the STEMMA QT connector."),
  ];
  const qtpyBattery = [number(rearBatMinus, "BAT.−"), number(supply("bat-plus", "BAT+", "Rear external battery input. The board's diode-protected input supports 3 to 6 V per Adafruit."), "BAT.+")];
  const color = esp ? "#4c3476" : "#313239";
  return makeBoard({
    id: esp ? "adafruit-qt-py-esp32-s3" : "adafruit-qt-py-rp2040",
    name: esp ? "Adafruit QT Py ESP32-S3" : "Adafruit QT Py RP2040",
    shortName: esp ? "QT Py ESP32-S3" : "QT Py RP2040", manufacturer: "Adafruit", subtitle: "Compact USB-C / dual I²C",
    tags: esp ? ["esp32", "esp32-s3", "qt py", "stemma qt", "usb", "wifi", "ble"] : ["rp2040", "qt py", "stemma qt", "usb"],
    description: esp
      ? "Compact ESP32-S3 board with native USB-C, 14 edge contacts and independent STEMMA QT I²C pins. The edge map applies to the 4 MB/2 MB PSRAM and 8 MB variants."
      : "Compact RP2040 board with native USB-C and independent STEMMA QT I²C pins. Its analog alias order is A0 at GP29 through A3 at GP26.",
    source: esp ? qtpyS3Source : qtpyRpSource, width: 158, height: 169,
  }, [
    carrierRow("left", numbered(esp ? qtpyEspLeft : qtpyRpLeft, 1), -7.62, -7.62, { start: 38, gap: 15, size: 1.778, drill: 1 }),
    carrierRow("right", numbered(esp ? qtpyEspRight : qtpyRpRight, 14, -1), 7.62, -7.62, { start: 38, gap: 15, size: 1.778, drill: 1 }),
    carrierRow("bottom", qt, -3.81, 14.1, { start: 27, gap: 34, prefix: "QT." }),
    ...(esp ? [carrierRow("top", qtpyBattery, -1.905, -8.5725, { start: 32, gap: 94, pitch: 3.81, smd: true, size: [1, 3] })] : []),
  ], esp ? qtpyS3Art : qtpyRpArt, {
    body: [17.78, 20.701], color, details: [[0, -8.1, 9, 6, 3, "#a8b2b9"], [0, 8.3, 6.1, 4.2, 2.7, "#d6d8ce"]],
    note: "Reference carrier for the fourteen 2.54 mm-pitch side contacts. The QT pads outside the board outline are a separate cable-termination row for the JST-SH connector.",
  });
}

const featherS3 = featherBoard(true);
const featherRp = featherBoard(false);
const qtpyS3 = qtpyBoard(true);
const qtpyRp = qtpyBoard(false);

const metroEsp32S3 = makeBoard({
  id: "adafruit-metro-esp32-s3", name: "Adafruit Metro ESP32-S3", shortName: "Metro ESP32-S3",
  manufacturer: "Adafruit", subtitle: "Rev B / Uno-format headers",
  tags: ["esp32", "esp32-s3", "metro", "arduino shield", "wifi", "ble", "usb", "microsd", "stemma qt"],
  description: "Rev B full-size ESP32-S3 board with 16 MB flash, 8 MB PSRAM, Uno-format headers, native USB-C, microSD and a LiPo charger. Its GPIO and shield logic operate at 3.3 V.",
  source: "https://learn.adafruit.com/adafruit-metro-esp32-s3/pinouts", width: 236, height: 302,
}, [
  carrierRow("left", numbered([
    output("ioref", "IOREF", "Fixed 3.3 V shield logic reference."), featherReset, feather3v3,
    output("vhi", "VHI", "5 V supply output with USB or DC power. Tracks the battery voltage when running from battery alone."),
    ground("power-gnd-1"), ground("power-gnd-2"),
    output("vin", "VIN", "Output from whichever is higher, the DC barrel jack input or the 5 V USB supply."),
  ], 2), -24.13, -3.81, { start: 90, gap: 13, prefix: "POWER." }),
  carrierRow("left", [14, 15, 16, 17, 18, 1].map((n, i) => espGpio(n, `A${i}`, `Board analog input A${i}.`)),
    -24.13, 16.51, { start: 204, gap: 13, prefix: "AD." }),
  carrierRow("right", [
    espGpio(48, "SCL", "I²C clock, also available on the STEMMA QT connector."),
    espGpio(47, "SDA", "I²C data, also available on the STEMMA QT connector."),
    output("aref", "AREF", "Fixed 3.3 V on this board."), ground("digital-gnd"),
    ...[13, 12, 11, 10, 9, 8].map(n => espGpio(n, `D${n}`, n === 13 ? "Also drives the on-board red LED." : "")),
  ], 24.13, -15.494, { start: 46, gap: 13, prefix: "IOH." }),
  carrierRow("right", [
    ...[7, 6, 5, 4, 3, 2].map(n => espGpio(n, `D${n}`)),
    espGpio(41, "RX/D0", "Default shield UART RX. Shared with JTAG MTDI."),
    espGpio(40, "TX/D1", "Default shield UART TX. Shared with JTAG MTDO."),
  ], 24.13, 11.43, { start: 183, gap: 13, prefix: "IOL." }),
  carrierRow("top", [number(espGpio(43, "TXD0", "Separate hardware UART0 debug TX."), "JP2.1")],
    7.366, -22.098, { start: 94, drill: 1 }),
  carrierRow("top", [number(espGpio(44, "RXD0", "Separate hardware UART0 debug RX."), "JP2.2")],
    7.366, -19.558, { start: 134, drill: 1 }),
  carrierRow("bottom", [
    number(input("icsp-rst", "RST", "Active-low reset input on the ICSP header."), "ICSP.5"),
    number(espGpio(39, "SCK", "SPI clock shared with microSD and the JTAG header."), "ICSP.3"),
    number(espGpio(21, "MISO", "SPI controller input shared with microSD."), "ICSP.1"),
  ], -1.27, 29.083, { start: 18, gap: 28, drill: 0.9 }),
  carrierRow("bottom", [
    number(ground("icsp-gnd"), "ICSP.6"),
    number(espGpio(42, "MOSI", "SPI controller output shared with microSD and the JTAG header."), "ICSP.4"),
    number(output("icsp-vhi", "VHI", "Power output tied to VHI on the shield header."), "ICSP.2"),
  ], -1.27, 31.623, { start: 102, gap: 28, drill: 0.9 }),
  carrierRow("bottom", [
    number(ground("bat-minus", "BAT−", "Battery return on the JST-PH socket."), "X1.1"),
    number(rail("bat-plus", "BAT+", "Positive contact of the 3.7 V single-cell LiPo socket and on-board charger."), "X1.2"),
  ], 15.383, 38, { start: 186, gap: 32, pitch: -2.54 }),
], ({ width }) =>
  path(`M7 12H${width - 14}l7 7v253l-9 9h-53l-11 11H26L7 277Z`, "#25282c", "#5d6264") +
  rect(6, 85, 12, 87, 2, "#222429", "#4c5051") +
  rect(6, 198, 12, 77, 2, "#222429", "#4c5051") +
  rect(width - 18, 39, 12, 129, 2, "#222429", "#4c5051") +
  rect(width - 18, 176, 12, 104, 2, "#222429", "#4c5051") +
  mountingHole(24, 68) + mountingHole(207, 69) + mountingHole(35, 277) + mountingHole(158, 277) +
  rect(24, 2, 37, 58, 2, "#242526", "#696d6c") +
  rect(28, 4, 29, 9, 1, "#171a1d", "#595d5e") +
  topUsbC(152, 8, 39, 37) +
  rect(197, 36, 28, 22, 2, "#333636", "#6b6e69") +
  rect(216, 39, 9, 16, 1, "#525752") + label(212, 25, "QT", 7) +
  tactile(197, 13) + label(204, 33, "RST", 6) +
  rect(66, 13, 78, 105, 2, "#22252b", "#777168") +
  path("M71 36V18h12v15h11V18h12v15h11V18h12v15h10", "none", "#8f7957", 1.8) +
  rect(67, 40, 76, 80, 1, "#b7b8b4", "#deded6") +
  rect(71, 44, 68, 72, 1, "#cbccc4") +
  label(105, 80, "ESP32-S3", 10, "#424f4d") +
  rect(148, 84, 38, 23, 2, "#262a2c", "#8a897d") +
  [92, 99].map(y => [153, 160, 167, 174, 181].map(x => circle(x, y, 1.4, "#ad9968")).join("")).join("") +
  label(167, 78, "JTAG", 6) + circle(178, 123, 5, "#c9c7af", "#efead8") +
  rect(17, 87, 17, 16, 2, "#9c9b89") + rect(17, 92, 8, 6, 1, "#282c30") +
  label(43, 95, "ON", 6) +
  [147, 208].map(y => circle(66, y, 13, "#b9beb9", "#dde1da") +
    circle(66, y, 9, "#cbd0ca")).join("") +
  smd(82, 137) + chip(72, 167, 25, 28, "", 4) + smd(106, 211) +
  '<g transform="rotate(32 129 173)">' +
    label(129, 155, "ADAFRUIT", 8, "#e2e1d8") +
    label(129, 173, "Metro", 18, "#f0efe7") +
    label(129, 190, "ESP32-S3 / REV B", 7, "#e2e1d8") +
  "</g>" +
  tactile(162, 170) + label(169, 191, "BOOT", 6) +
  rect(51, 223, 54, 50, 2, "#a8aca6", "#d9dbd3") +
  rect(57, 267, 42, 6, 1, "#777b73") + label(78, 247, "microSD", 8, "#404b49") +
  rect(115, 259, 33, 22, 2, "#282a2e", "#65675e") +
  [120, 131, 142].map(x => rect(x, 264, 4, 12, 1, "#af9d71")).join("") +
  rect(174, 237, 32, 37, 2, "#5c6059", "#a3a398") +
  rect(181, 243, 18, 25, 1, "#272d2c") + label(191, 230, "LiPo", 6), {
  body: [53.34, 68.58], color: "#28313a",
  details: [[-21, -28, 9, 13, 11, "#282b30"], [11.43, -29.21, 9, 7, 3.1, "#a8b2b9"],
    [-10, -22, 19, 20, 2.9, "#b4bec1"], [-10.16, 25.02, 13, 11, 2.2, "#a0adb4"]],
  note: "Rev B reference carrier from Adafruit's Eagle board. It includes connected shield header positions, ICSP and UART debug. The battery pair outside the outline terminates a JST-PH cable. JTAG and STEMMA QT signals are also available on the shown contacts. Verify shield voltage and connector clearances.",
});

const boards = [
  espDevKitM, espUsbOtg, metroEsp32S3, espZero, xiaoS3, xiaoS3Sense, xiaoS3Plus, qtpyS3, featherS3,
  pico, picoW, xiaoRp, xiaoRpPlus, qtpyRp, featherRp,
];
const espRpComponents = boards.map(({ component }) => component);
const espRpArt = Object.fromEntries(boards.map(({ component, art }) => [component.art, art]));
const espRpFootprints = Object.fromEntries(boards.map(({ component, footprint }) => [component.id, footprint]));
const espRpModels = {
  "waveshare-esp32-s3-zero": {
    label: "Waveshare ESP32-S3-Zero STEP model",
    url: "https://files.waveshare.com/wiki/ESP32-S3-Zero/ESP32-S3-Zero_v2-138eb3753cf14afa3252058c380ca416.stp",
  },
  "raspberry-pi-pico": { label: "Raspberry Pi Pico STEP model", url: "https://pip.raspberrypi.com/documents/RP-008311-DS" },
  "raspberry-pi-pico-w": { label: "Raspberry Pi Pico W STEP model", url: "https://pip.raspberrypi.com/documents/RP-008318-DS" },
  "seeed-xiao-esp32-s3": {
    label: "Seeed XIAO ESP32-S3 CAD files", url: "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-3d_model.zip",
  },
  "seeed-xiao-esp32-s3-sense": {
    label: "Seeed XIAO ESP32-S3 Sense CAD files", url: "https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/seeed-studio-xiao-esp32s3-sense-3d_model.zip",
  },
  "seeed-xiao-esp32-s3-plus": { label: "Seeed XIAO ESP32-S3 Plus CAD resources", url: `${seeedS3}#for-seeed-studio-xiao-esp32-s3-plus` },
  "seeed-xiao-rp2040": { label: "Seeed XIAO RP2040 CAD files", url: "https://files.seeedstudio.com/wiki/XIAO-RP2040/res/seeed-studio-xiao-rp2040-3d-model.zip" },
  "adafruit-qt-py-esp32-s3": { label: "Adafruit QT Py ESP32-S3 CAD files", url: `${adafruitCad}/5426%20QT%20Py%20ESP32-S3` },
  "adafruit-qt-py-rp2040": { label: "Adafruit QT Py RP2040 CAD files", url: `${adafruitCad}/4900%20QTPy%20RP2040` },
  "adafruit-feather-esp32-s3": { label: "Adafruit Feather ESP32-S3 CAD files", url: `${adafruitCad}/5323%20Feather%20ESP32-S3` },
  "adafruit-feather-rp2040": { label: "Adafruit Feather RP2040 CAD files", url: `${adafruitCad}/4884%20Feather%20RP2040` },
};

export default defineFamily("esp-rp", (espRpComponents).map(component => ({ component, render: (espRpArt)[component.art], footprint: (espRpFootprints)[component.id], model: espRpModels[component.id] })));
