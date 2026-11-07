import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect, smd } from "../shared/svg.js";

const ground = (name = "G", description = "Common supply return and signal ground.") => [name, "power_in", description];
const input = (name, description) => [name, "input", description];
const output = (name, description) => [name, "output", description];
const power = (name, description) => [name, "power_out", description];
const signal = (name, description) => [name, "bidirectional", description];
const nc = (name, description) => [name, "no_connect", description];
const tx = (port, name = `T${port}`) => output(name, `Flight controller UART${port} transmit. Connect to the peripheral RX.`);
const rx = (port, name = `R${port}`) => input(name, `Flight controller UART${port} receive. Connect to the peripheral TX.`);
const sda = (name, bus = "") => signal(name, `I²C${bus} data for compatible sensors.`);
const scl = (name, bus = "") => signal(name, `I²C${bus} clock for compatible sensors.`);
const v45 = power("4V5", "Peripheral supply after the flight controller's USB/BEC diode path.");
const matek45 = power("4v5", "4.4–4.8 V peripheral output, up to 1 A. Also supplied by USB.");
const v5 = power("5V", "5 V rail from the onboard regulator.");
const matek5 = power("5V", "5 V BEC output, 2 A shared. This rail requires battery power.");
const sbus = (name = "SBUS") => input(name, "Inverted SBUS input on the flight controller's UART2 RX path.");
const videoOut = (name = "VTX") => output(name, "Composite video output to the analog video transmitter.");
const videoIn = (name, camera = "") => input(name, `Composite video input from the analog camera${camera}.`);
const led = output("LED", "Addressable LED strip data output. Firmware may repurpose this signal as a PWM output.");
const appVideo = power("9V", "Camera and VTX supply, 9 V by default. Check the power board's voltage jumper for 5 V or 12 V.");
const miniVideo = power("Vv", "Camera and VTX supply. Defaults to raw battery voltage. The power board can select the 5 V or 6 V servo BEC instead.");
const matekVideo = power("9V", "9 V video BEC output, 2 A shared. Bridging the 12 V jumper selects 12 V.");
const airspeed = (name, max) => input(name, `Analog airspeed sensor voltage input${max ? `, up to ${max} V` : ""}.`);
const rssi = (name = "RS") => input(name, "Analog RSSI input, 0–3.3 V.");

function bank(id, title, pins, kind = "signal") {
  return { id, title, pins, kind };
}

function servoBanks(count, supplyFor) {
  return Array.from({ length: count }, (_, index) => {
    const channel = `S${index + 1}`;
    return bank(channel, "", [
      output(channel, `PWM channel ${index + 1} signal. Set the servo or ESC function in the flight controller firmware.`),
      supplyFor(index),
      ground(),
    ], "servo");
  });
}

function batteryBanks(voltage, matek = false) {
  return [
    bank("BAT", "BATTERY", [
      [matek ? "+" : "B+", "power_in", `Main battery positive, ${voltage}.`],
      ground(matek ? "−" : "B−", "Main battery negative and power distribution return."),
    ], "power"),
    ...[1, 2].map(index => bank(`ESC${index}`, `ESC ${index}`, [
      power(matek ? "+" : "ESC+", "Battery positive feed to the ESC."),
      ground(matek ? "−" : "ESC−", "Battery negative feed to the ESC."),
    ], "power")),
  ];
}

const miniVx = ["Vx", "power_out", "Servo BEC supply, 5 V by default or 6 V with the jumper. With the servo BEC isolated, an external BEC can supply this rail."];
const appVx = power("Vx", "Servo BEC supply, 4.9 V nominal by default. The power board also supports 6 V and 7.2 V settings.");
const matekVx = power("Vx", "Servo BEC supply, 5 V by default, with 6 V or 7.2 V jumper options.");
const matekVx2 = ["Vx2", "passive", "Shared servo power rail for S5–S9. Bridge Vx2 to Vx for onboard BEC power or feed Vx2 from an external BEC. This rail is unpowered as shipped."];

const receiver = bank("RX", "ELRS / CRSF", [tx(1), rx(1), v45, ground("GND")]);
const sbusHeader = bank("SBUS", "SBUS", [sbus(), v45, ground()]);
const telemetry = bank("TELEM", "TELEMETRY", [v45, tx(4, "TX4"), rx(4, "RX4"), tx(2, "TX2"), rx(2, "RX2"), ground("GND")]);
const telemetryPads = bank("TLPAD", "TELEM PADS", [v5, tx(4), rx(4), ground()]);
const gpsConnector = bank("GPS", "GPS + COMPASS", [sda("SDA"), scl("SCL"), v45, ground("GND"), tx(3, "TX3"), rx(3, "RX3")]);
const usbMinus = signal("D−", "USB 2.0 data minus.");
const usbPlus = signal("D+", "USB 2.0 data plus.");
const boot = input("BOOT0", "DFU boot selection, normally controlled by the USB extender's BOOT button.");
const buzzer = output("BZ−", "Switched low-side output for an active buzzer.");

const miniBanks = {
  top: [
    gpsConnector,
    bank("GPSPAD", "GPS PADS", [v45, ground(), tx(3), rx(3)]),
    bank("CAM", "CAMERA CONNECTOR", [videoIn("CAM2", " 2"), videoIn("CAM1", " 1"), ground("GND"), miniVideo]),
    bank("CAMPAD", "CAM PADS", [miniVideo, ground(), videoIn("C1", " 1"), miniVideo, ground(), videoIn("C2", " 2")]),
  ],
  left: [
    receiver, sbusHeader, telemetry, telemetryPads,
    bank("USB", "USB EXTENDER", [rx(6, "RX6"), boot, buzzer, tx(6, "TX6"), usbPlus, usbMinus, ground("GND"), v45]),
    bank("AUX", "AUX PADS", [rssi(), output("S10", "PWM channel 10."), output("S11", "PWM channel 11."), ground(), led]),
  ],
  right: [
    ...servoBanks(9, () => miniVx),
    ...batteryBanks("7–26 V (2–6S LiPo)"),
  ],
  bottom: [
    bank("AIRPAD", "AIRSPEED PADS", [ground(), sda("DA"), scl("CL"), v45, airspeed("AR")]),
    bank("DJI", "HD VTX", [sbus(), ground("GND"), rx(5, "RX5"), tx(5, "TX5"), ground("GND"), miniVideo]),
    bank("VTX", "ANALOG VTX", [videoOut(), tx(5, "TX5"), ground("GND"), miniVideo]),
    bank("VTXPAD", "VIDEO PADS", [miniVideo, ground(), tx(5), videoOut(), rx(5), ground(), sbus()]),
  ],
};

const appBanks = {
  top: [
    gpsConnector,
    bank("GPSPAD", "GPS PADS", [scl("SCL"), v45, tx(3), rx(3), ground("GND"), sda("SDA")]),
    bank("CAM", "CAMERA CONNECTOR", [nc("NC", "Unconnected camera connector contact."), videoIn("CAM"), ground("GND"), appVideo]),
    bank("CAMPAD", "CAM PADS", [appVideo, ground(), videoIn("CAM")]),
    bank("VTXPAD", "VTX PADS", [appVideo, ground(), tx(5), videoOut()]),
  ],
  left: [
    receiver, sbusHeader, telemetry, telemetryPads,
    bank("USB", "USB EXTENDER", [signal("IO2", "Auxiliary control line for the SpeedyBee USB extender."), boot, buzzer, led, usbPlus, usbMinus, ground("GND"), v45]),
    bank("AUX", "AUX PADS", [rssi(), tx(6), rx(6)]),
    bank("AIR", "DIGITAL AIRSPEED", [ground("GND"), sda("SDA"), scl("SCL"), v45]),
    bank("AR", "ANALOG AIRSPEED", [ground("GND"), airspeed("AIR", 6.6), v45]),
    bank("AIRPAD", "AIRSPEED PADS", [ground("GND"), sda("SDA"), scl("SCL"), v45, airspeed("AIRSPD", 6.6)]),
  ],
  right: [
    ...servoBanks(11, () => appVx),
    ...[1, 2, 3, 4].map(index => bank(`LED${index}`, "", [
      ground("GND"), v5,
      output(`LED${index}`, "Wireless board addressable LED strip output. Its data source depends on the wireless board's LED mode."),
    ], "servo")),
  ],
  bottom: [
    ...batteryBanks("7–36 V (2–6S LiPo per manual)"),
    bank("DJI", "HD VTX", [sbus(), ground("GND"), rx(5, "RX5"), tx(5, "TX5"), ground("GND"), appVideo]),
    bank("DJIPAD", "HD VTX PADS", [appVideo, ground("GND"), tx(5), rx(5), ground("GND"), sbus()]),
    bank("VTX", "ANALOG VTX", [videoOut(), tx(5, "TX5"), ground("GND"), appVideo]),
    bank("WTELEM", "WIRELESS BOARD TELEMETRY", [
      ground("GND"),
      input("RX6", "UART6 receive. Disconnect the wireless board's UART6 jumper when using wired telemetry."),
      output("TX6", "UART6 transmit. Disconnect the wireless board's UART6 jumper when using wired telemetry."),
      input("RX1", "UART1 receive, shared with R1 on the ELRS/CRSF header."),
      output("TX1", "UART1 transmit, shared with T1 on the ELRS/CRSF header."),
      v5,
    ]),
  ],
};

function matekSerialBank(port) {
  return bank(`UART${port}`, `UART ${port}`, [
    tx(port, `Tx${port}`), rx(port, `Rx${port}`), port === 2 || port === 4 || port === 5 ? matek45 : matek5, ground(),
  ]);
}

const matekBanks = {
  top: [
    ...batteryBanks("9–30 V (3–6S LiPo)", true),
    bank("I2C1", "I²C 1 PADS", [sda("DA1", "1"), scl("CL1", "1")]),
    bank("I2C2", "I²C 2 PADS", [sda("DA2", "2"), scl("CL2", "2")]),
    bank("GH", "I²C 2 JST-GH", [ground(), sda("DA2", "2"), scl("CL2", "2"), matek45]),
  ],
  left: [
    ...[1, 2, 3, 4, 5, 6].map(matekSerialBank),
    bank("AUX", "AUX PADS", [input("Sbus", "Inverted SBUS input on UART2 RX."), rssi("Rssi"), power("3V3", "3.3 V peripheral regulator output, 200 mA maximum."), ground()]),
    bank("USB", "USB SOLDER PADS", [["VBUS", "power_in", "5 V input from a USB host."], usbMinus, usbPlus, ground(), ground()]),
    bank("CURR", "CURRENT SENSE", [output("Curr", "Onboard battery current-sensor output, 0–3.3 V.")]),
  ],
  right: servoBanks(9, index => index < 4 ? matekVx : matekVx2),
  bottom: [
    bank("CAM", "CAMERA PADS", [videoIn("Cam"), matekVideo, ground()]),
    bank("VTX", "VTX PADS", [videoOut("VTx"), matekVideo, ground()]),
    bank("BZ", "BUZZER", [output("BZ−", "Low-side driver for a 5 V active buzzer."), matek5, ground()]),
    bank("LED", "LED", [led, matek5, ground()]),
  ],
};

const edgeInset = 56;
const sidePitch = 13;
const endPitch = 25;

function bankSpan(banks, pitch, gap) {
  return banks.reduce((length, { pins, title }) => length + pins.length * pitch + (title ? gap : 3), 0);
}

function makeController(details, banks, dimensions, color) {
  const width = Math.max(475, 2 * edgeInset + Math.max(bankSpan(banks.top, endPitch, 8), bankSpan(banks.bottom, endPitch, 8)));
  const height = 144 + Math.max(bankSpan(banks.left, sidePitch, 15), bankSpan(banks.right, sidePitch, 15));
  const wiringBanks = Object.entries(banks).flatMap(([side, rows]) => {
    const vertical = side === "left" || side === "right";
    const pitch = vertical ? sidePitch : endPitch;
    const gap = vertical ? 15 : 8;
    let start = ((vertical ? height : width) - bankSpan(rows, pitch, gap)) / 2 + pitch / 2;
    return rows.map(({ id, title, kind, pins }) => {
      if (vertical && title) start += gap;
      const contacts = pins.map(([label, type, description], index) => {
        const offset = start + index * pitch;
        return {
          id: `${id.toLowerCase()}-${index + 1}`, label, type,
          description: `${title || id} contact ${index + 1}. ${description}`,
          number: `${id}.${index + 1}`,
          x: vertical ? (side === "left" ? 0 : width) : offset,
          y: vertical ? offset : (side === "top" ? 0 : height),
        };
      });
      start += pins.length * pitch + (vertical ? (title ? 0 : 3) : gap);
      return { title, kind, side, contacts };
    });
  });
  const component = {
    ...details,
    category: "Flight Controllers", referencePrefix: "U", art: details.id,
    tags: ["fpv", "fixed wing", "autopilot", "inav", "ardupilot", "elrs", "crsf", "pwm", "esc"],
    width, height, pins: wiringBanks.flatMap(({ contacts }) => contacts),
  };
  return { component, wiringBanks, dimensions, color };
}

const mini = makeController({
  id: "speedybee-f405-wing-mini", name: "SpeedyBee F405 WING MINI", shortName: "F405 WING MINI",
  manufacturer: "SpeedyBee", subtitle: "2–6S fixed-wing flight controller",
  description: "F405 WING MINI stack from the v1.2 manual, including the flight and power boards. Its nine servo headers and S10/S11 solder pads support PWM. The Vv camera/VTX rail is battery voltage by default. Wiring banks show the rear plugs and front solder alternatives separately.",
  source: "https://www.speedybee.com/f405-wing-mini-download/",
}, miniBanks, [26, 37, 14], "#292b30");

const app = makeController({
  id: "speedybee-f405-wing-app", name: "SpeedyBee F405 WING APP", shortName: "F405 WING APP",
  manufacturer: "SpeedyBee", subtitle: "2–6S fixed-wing flight controller",
  description: "Full-size F405 WING APP stack from the v1.1 manual. It has eleven servo/ESC headers, a default 9 V camera/VTX rail, and a wireless board with four addressable LED outputs. Wiring banks show the rear plugs and front solder alternatives separately.",
  source: "https://www.speedybee.com/f405-wing-app-download/",
}, appBanks, [32, 52, 19], "#292b30");

const matek = makeController({
  id: "matek-f405-wing-v2", name: "Matek F405-WING-V2", shortName: "F405-WING-V2",
  manufacturer: "MATEKSYS", subtitle: "3–6S fixed-wing flight controller",
  description: "The USB-C F405-WING-V2 with ICM42688-P, two I²C buses, six UARTs and nine servo/ESC headers. S5–S9 use an isolated Vx2 rail that requires an external BEC or a solder bridge to the onboard Vx BEC.",
  source: "https://www.mateksys.com/?portfolio=f405-wing-v2",
}, matekBanks, [36, 54, 13], "#155675");

const flightControllerComponents = [mini.component, app.component, matek.component];

function referenceFootprint({ wiringBanks, dimensions, color }) {
  // This is a wiring carrier with separately numbered cable groups, not the flight stack's PCB.
  const terminalPitch = kind => kind === "power" ? 5.08 : 2.54;
  const sideRows = side => wiringBanks.filter(bank => bank.side === side);
  const extentOf = rows => rows.reduce((length, { contacts, kind }) =>
    length + (contacts.length + 1) * terminalPitch(kind), 0);
  const halfHorizontalExtent = Math.max(extentOf(sideRows("top")), extentOf(sideRows("bottom"))) / 2;
  const pads = [];
  for (const side of ["left", "right", "top", "bottom"]) {
    const rows = sideRows(side);
    const vertical = side === "left" || side === "right";
    const across = (vertical ? Math.max(dimensions[0] / 2, halfHorizontalExtent) : dimensions[1] / 2) + 3;
    let along = -extentOf(rows) / 2;
    for (const { contacts, kind } of rows) {
      const pitch = terminalPitch(kind);
      for (const [index, { id }] of contacts.entries()) {
        const position = Math.round((along + pitch / 2 + index * pitch) * 1000) / 1000;
        pads.push({
          id,
          x: vertical ? (side === "left" ? -across : across) : position,
          y: vertical ? position : (side === "top" ? -across : across),
          size: kind === "power" ? 3.25 : 1.7,
          drill: kind === "power" ? 1.5 : 0.85,
          square: index === 0,
        });
      }
      along += (contacts.length + 1) * pitch;
    }
  }
  return {
    body: dimensions.slice(0, 2), color, modelHeight: dimensions[2], pads,
    note: "Off-board wiring reference. The outline shows the stack envelope. The numbered pads represent generic cable terminations, including alternative contacts. Terminal numbers identify the listed wiring groups and their contact order. Use the manufacturer drawings for connector orientation, board clearance, and high-current connections.",
  };
}

const flightControllerFootprints = Object.fromEntries([mini, app, matek].map(controller => [
  controller.component.id, referenceFootprint(controller),
]));

function terminalBankArt({ title, kind, side, contacts }, showLabels) {
  const first = contacts[0];
  const last = contacts.at(-1);
  const vertical = side === "left" || side === "right";
  const near = side === "left" || side === "top";
  const direction = near ? 1 : -1;
  const color = kind === "power" ? "#8e5347" : kind === "servo" ? "#806435" : "#486071";
  const fill = kind === "power" ? "#372522" : "#23313a";
  const caption = "#e5e9e9";
  const box = vertical
    ? rect(near ? 6 : first.x - 66, first.y - (title ? 17 : 6), 60,
      last.y - first.y + (title ? 23 : 12), 4, fill, color)
    : rect(first.x - 11, near ? 6 : first.y - 41, last.x - first.x + 22, 35, 4, fill, color);
  const titleLabel = !showLabels || !title ? "" : vertical
    ? label(first.x + direction * 35, first.y - 11, title, 5.8, "#a5bfca")
    : label((first.x + last.x) / 2, first.y + direction * 32, title, 6.7, "#a5bfca");
  return box + titleLabel + contacts.map(pin => {
    const x = pin.x + (vertical ? direction * 14 : 0);
    const y = pin.y + (vertical ? 0 : direction * 12);
    const fill = pin.type === "power_out" || kind === "power" ? "#e1ac63" : "#d4c299";
    return line(pin.x, pin.y, x, y, color, 1.7) + circle(x, y, 2.8, fill, "#766343") +
      (showLabels ? label(x + (vertical ? direction * 7 : 0), y + (vertical ? 0 : direction * 9),
        pin.label, 8.4, caption, vertical ? (near ? "start" : "end") : "middle") : "");
  }).join("");
}

function platedHole(x, y, radius, rim = "#d5b56d") {
  return circle(x, y, radius, rim, "#77694e") + circle(x, y, radius * 0.65, "#f4f0e7", "#706a57");
}

function padRow(count, x, y, dx, dy, length = 5, across = 5) {
  return Array.from({ length: count }, (_, index) =>
    rect(x + index * dx - length / 2, y + index * dy - across / 2, length, across, 0.8, "#c6a66b", "#ede1b1")
  ).join("");
}

function headerBank(count, x, y, dx, dy, width, height) {
  return rect(x - 4, y - 4, width, height, 1.3, "#24272b", "#96918a") +
    padRow(count, x, y, dx, dy, 3.7, 4.1);
}

function whiteConnector(count, x, y, vertical = false) {
  const length = (count - 1) * 4.1 + 8;
  const [width, height] = vertical ? [13, length] : [length, 13];
  return rect(x, y, width, height, 1.6, "#d8d4c6", "#f1ebe0") +
    rect(x + 2, y + 2, width - 4, height - 4, 1, "#6e7168") +
    padRow(count, x + (vertical ? 6.5 : 4), y + (vertical ? 4 : 6.5), vertical ? 0 : 4.1, vertical ? 4.1 : 0, 2.2, 2.2);
}

function squareChip(x, y, size) {
  return padRow(12, x + 2, y - 3.5, (size - 4) / 11, 0, 1.3, 8) +
    padRow(12, x + 2, y + size + 3.5, (size - 4) / 11, 0, 1.3, 8) +
    padRow(12, x - 3.5, y + 2, 0, (size - 4) / 11, 8, 1.3) +
    padRow(12, x + size + 3.5, y + 2, 0, (size - 4) / 11, 8, 1.3) +
    rect(x, y, size, size, 1.5, "#24262a", "#52565a") +
    circle(x + 5, y + 5, 1.8, "#373b40") +
    label(x + size / 2, y + size / 2 - 3, "STM32", 6.3, "#7e8182") +
    label(x + size / 2, y + size / 2 + 5, "F405", 5.7, "#7e8182");
}

function silverSlot(x, y, width, height) {
  return rect(x, y, width, height, 1.5, "#a0a7a9", "#d5dadd") +
    rect(x + 3, y + 3, width - 6, height - 6, 1.1, "#959da0") +
    line(x + 4, y + height - 4, x + width - 4, y + height - 4, "#42494c", 2.4);
}

function speedyBeeFront(isMini, color) {
  const count = isMini ? 9 : 11;
  const stride = 125 / count;
  const pwm = [180, 191, 202].map(y => padRow(count, 20 + stride / 2, y, stride, 0, 5.5, 5.5)).join("");
  const holes = [48, 161].map(y => platedHole(12, y, 8.5) + platedHole(138, y, 8.5)).join("");
  const gps = isMini
    ? whiteConnector(6, 2, 3) + padRow(4, 40, 6, 9, 0, 7, 10) + padRow(6, 76, 6, 12.8, 0, 9, 9)
    : padRow(6, 5, 6, 8.1, 0, 6.1, 10) + padRow(6, 58, 6, 8.4, 0, 6.4, 10) + padRow(4, 108, 6, 12, 0, 8, 10);
  const aux = isMini
    ? padRow(5, 144, 92, 0, 10.7, 8, 8) + headerBank(4, 5, 101, 0, 7.8, 18, 34) + padRow(3, 5, 66, 0, 8.5)
    : whiteConnector(6, 0, 92, true) + whiteConnector(4, 137, 90, true) + whiteConnector(3, 137, 120, true) +
      padRow(4, 6, 65, 0, 7, 8, 6) + chip(46, 16, 52, 18, "AT7456E", 6);
  return rect(0, 0, 150, 210, 2, color, "#54585b") + gps +
    padRow(isMini ? 7 : 3, isMini ? 60 : 117, 20, isMini ? 11 : 12, 0, 7.4, 8) +
    holes + aux + silverSlot(50, isMini ? 36 : 47, 62, 29) +
    path(isMini ? "M22 44L31 27L40 44L31 39Z" : "M117 67L125 49L133 67L125 62Z", "#edf1ee") +
    squareChip(59, 89, 57) + chip(30, 78, 10, 12, "", 2) +
    [72, 78, 84].map((y, index) => rect(139, y, 6.5, 3, 0.6, ["#e47058", "#6d9bd8", "#92ac67"][index])).join("") +
    [[36, 58], [33, 69], [112, 79], [119, 87], [38, 103], [28, 126], [42, 136], [118, 140], [55, 151], [70, 151]].map(([x, y]) => smd(x, y)).join("") +
    rect(3, 173, 144, 34, 2, "#393329", "#846f52") +
    padRow(3, 10, 180, 0, 11, 5.5, 5.5) + pwm +
    line(16, 174, 16, 207, "#c0a678", 1.2) +
    headerBank(4, isMini ? 71 : 24, 164, 9.2, 0, 36, 8) +
    label(32, 149, isMini ? "RS" : "TELEM", 5.2, "#dddfdb");
}

function speedyBeePdb(isMini) {
  const y = isMini ? 8 : 80;
  return rect(0, 0, 115, 88, 2, "#2a2c30", "#666863") +
    [11, 77].map(holeY => platedHole(9, holeY, 6.3) + platedHole(106, holeY, 6.3)).join("") +
    rect(37, 29, 31, 26, 2, "#77787a", "#a7a9a8") +
    label(52.5, 42, "100", 7, "#4b4f54") + rect(73, 28, 14, 14, 1, "#767d80", "#b0b6b7") +
    rect(22, 45, 9, 18, 1, "#171b20", "#969b9c") + smd(89, 44) + smd(24, 30) + smd(80, 54) +
    [0, 1, 2, 3, 4, 5].map(index => rect(15 + 15 * index, y - 5, 10, 10, 1,
      (index < 3) === isMini ? "#bc5751" : "#c4a065", "#d8ad76")).join("") +
    (isMini
      ? rect(49, 77, 27, 12, 0, "#eef3f4") + label(57, 66, "SERVOBEC", 5.3, "#f2f0e9")
      : label(57, 14, "SpeedyBee", 7, "#f2f0e9"));
}

function speedyBeeAddon(isMini) {
  if (isMini) {
    return rect(0, 3, 110, 82, 6, "#292b30", "#636664") +
      platedHole(98, 14, 7) + platedHole(98, 74, 7) +
      silverSlot(-4, 41, 35, 29) + whiteConnector(8, 94, 24, true) +
      rect(34, 26, 37, 40, 2, "#23262a", "#7a7e7c") +
      circle(52.5, 46, 6, "#181b1e") + rect(58, 5, 18, 12, 2, "#9da09a", "#e0dfd5") +
      circle(67, 11, 3.5, "#292a2c") + rect(40, 72, 31, 10, 1, "#474843", "#848784") +
      rect(54, 72, 8, 14, 1, "#202326") + label(26, 14, "EASY FLY", 6, "#e8e9e1");
  }
  return path("M0 0H101V31H90V66H102V88H75V79H25V88H0Z", "#25272b", "#666a67") +
    [9, 93].map(x => platedHole(x, 25, 5) + platedHole(x, 78, 5)).join("") +
    [7, 29, 51, 73].map(x => rect(x, 4, 20, 9, 0, "none", "#cfd0c8") +
      padRow(3, x + 3, 8.5, 6.3, 0, 2, 3)).join("") +
    whiteConnector(6, 59, 72) + rect(78, 28, 5.5, 20, 0.8, "#272a2a", "#a7b3a7") +
    [31, 36, 41, 46].map(y => rect(79, y - 1.5, 3.6, 3, 0.2, "#d2d4ab")).join("") +
    path("M28 51L45 36L62 51L45 47Z", "#eaece6") +
    label(46, 29, "SpeedyBee", 7, "#eaece6") + label(45, 61, "F405 WING APP", 6, "#eaece6");
}

function speedyBeeArt({ component, dimensions, color }, isMini) {
  const [w, h] = dimensions;
  const frontWidth = w * 9.5;
  const frontHeight = h * 9.5;
  const x = (component.width - frontWidth) / 2;
  const y = (component.height - frontHeight - 123) / 2;
  const cx = component.width / 2;
  const insetY = y + frontHeight + 20;
  return label(cx, y - 14, component.shortName, 14, "#3d525e") +
    `<g transform="translate(${x} ${y}) scale(${frontWidth / 150} ${frontHeight / 210})">${speedyBeeFront(isMini, color)}</g>` +
    `<g transform="translate(${cx - 125} ${insetY})">${speedyBeePdb(isMini)}</g>` +
    `<g transform="translate(${cx + 15} ${insetY})">${speedyBeeAddon(isMini)}</g>` +
    label(cx - 67.5, insetY + 99, "POWER BOARD", 7, "#425863") +
    label(cx + 69, insetY + 99, isMini ? "USB EXTENDER" : "WIRELESS BOARD", 7, "#425863");
}

function matekArt({ component, dimensions, color }) {
  const frontWidth = dimensions[0] * 9;
  const frontHeight = dimensions[1] * 9;
  const x = (component.width - frontWidth) / 2;
  const y = (component.height - frontHeight) / 2;
  const holes = [48, 173].map(holeY => platedHole(10, holeY, 8.2, "#719baa") + platedHole(140, holeY, 8.2, "#719baa")).join("");
  const servoPads = [6, 16, 26].map(padX => padRow(9, padX, 69, 0, 10.6, 5, 5)).join("");
  const auxPads = [191, 201, 211].map(padY => padRow(14, 6, padY, 10.55, 0, 5.4, 5.4)).join("");
  const body = rect(0, 0, 150, 218, 6, color, "#45758a") + holes +
    padRow(3, 10, 10, 17.3, 0, 13, 15) + padRow(2, 72, 10, 17.3, 0, 13, 15) + padRow(1, 140, 13, 0, 0, 13, 21) +
    rect(104, 2, 22, 24, 1, "#828a8a", "#dce0dc") + rect(109, 2, 12, 24, 1, "#444748") +
    label(115, 14, "0m25", 4.3) + rect(37, 28, 39, 41, 3, "#a7a89e", "#cfd1c5") +
    rect(39, 31, 35, 37, 2, "#91948d") + label(57, 49, "100", 7, "#666966") +
    servoPads + auxPads + squareChip(56, 103, 49) + whiteConnector(4, 137, 102, true) +
    rect(137, 59, 14, 38, 3, "#b7bdba", "#deded7") + rect(140, 62, 9, 32, 3, "#323b3f") +
    rect(142, 142, 8, 12, 1, "#dedace", "#a59d8c") + rect(148, 145, 5, 6, 1, "#75797a") +
    padRow(2, 109, 39, 9, 0, 5, 4) + padRow(2, 109, 46, 9, 0, 5, 4) +
    padRow(2, 113, 179, 9, 0, 5, 4) +
    path("M36 154L46 162L56 154L46 168Z", "#e0eee9") +
    [[82, 42], [95, 56], [93, 62], [123, 71], [111, 89], [43, 94], [31, 110], [31, 116], [119, 134], [116, 154],
      [109, 163], [35, 175], [57, 167], [68, 167], [85, 167]].map(([smdX, smdY]) => smd(smdX, smdY)).join("") +
    label(80, 83, "F405-WING V2", 10, "#e2edea") +
    label(78, 180, "MATEKSYS", 8.3, "#e2edea");
  return `<g transform="translate(${x} ${y}) scale(${frontWidth / 150} ${frontHeight / 218})">${body}</g>`;
}

function controllerArt(controller, drawBoard) {
  return ({ width, height }, showLabels = true) =>
    rect(4, 4, width - 8, height - 8, 8, "#eef3f4", "#ccdadd") +
    drawBoard(controller) +
    controller.wiringBanks.map(bank => terminalBankArt(bank, showLabels)).join("");
}

const flightControllerArt = {
  [mini.component.id]: controllerArt(mini, controller => speedyBeeArt(controller, true)),
  [app.component.id]: controllerArt(app, controller => speedyBeeArt(controller, false)),
  [matek.component.id]: controllerArt(matek, matekArt),
};

export default defineFamily("flight-controllers", (flightControllerComponents).map(component => ({ component, render: (flightControllerArt)[component.art], footprint: (flightControllerFootprints)[component.id] })));
