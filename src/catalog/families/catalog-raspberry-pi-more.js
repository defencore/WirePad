import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { rearContactOverlay } from "../shared/rear-contact-overlay.js";
import { chip, circle, label, line, path, rect, smd, tactile } from "../shared/svg.js";

const scale = 6, frontX = 75, rearX = 290, boardTop = 26;
const green = "#168859", silk = "#e4edda", metal = "#bdc6bd";
const gpioOrder = [0, 1, "GND", 2, 3, 4, 5, "GND", 6, 7, 8, 9, "GND", 10, 11, 12, 13, "GND", 14, 15,
  16, 17, "GND", 18, 19, 20, 21, "GND", 22, "RUN", 26, 27, "AGND", 28, "ADC_VREF", "3V3", "3V3_EN", "GND", "VSYS", "VBUS"];
const rails = {
  GND: ["power_in", "Common power and signal ground."],
  AGND: ["power_in", "Analog ground reference for the ADC inputs; the board routes its analog return separately from the digital signals."],
  RUN: ["input", "RP2350 enable/reset input, with an internal pull-up to 3.3 V. Pull low to reset the microcontroller."],
  ADC_VREF: ["passive", "Filtered ADC supply/reference derived from 3.3 V. Can be used with an external reference following the manufacturer circuit guidance; this is a separate filtered net."],
  "3V3": ["power_out", "Regulated 3.3 V output supplying the RP2350 and GPIO. Available external current depends on board load; the maker recommends keeping external load below 300 mA."],
  "3V3_EN": ["input", "SMPS enable, pulled up to VSYS through 100 kΩ. Short to GND to turn off the board's 3.3 V rail."],
  VSYS: ["power_in", "Main 1.8–5.5 V system supply input to the onboard buck-boost regulator. USB VBUS reaches this net through a Schottky diode; VBUS and VSYS are not directly joined."],
  VBUS: ["passive", "Nominal 5 V rail directly connected to Micro-USB VBUS. It is present when USB power is supplied; it feeds VSYS through a Schottky diode."],
};

function gpioDescription(n) {
  const uart = { 0: "UART0 TX", 1: "UART0 RX", 4: "UART1 TX", 5: "UART1 RX", 8: "UART1 TX", 9: "UART1 RX", 12: "UART0 TX", 13: "UART0 RX", 16: "UART0 TX", 17: "UART0 RX", 20: "UART1 TX", 21: "UART1 RX" }[n];
  return `3.3 V GPIO${n}; digital I/O, PIO and PWM. Alternate functions include I²C${n % 4 < 2 ? 0 : 1} ${n % 2 ? "SCL" : "SDA"} and SPI${Math.floor(n / 8) % 2} ${["RX", "CSn", "SCK", "TX"][n % 4]}${uart ? `, ${uart}` : ""}.${n >= 26 ? ` ADC${n - 26} analog input.` : ""} Configure the required function in firmware.`;
}

function holes(origin, boardWidth, boardHeight) {
  return [3.5, boardWidth - 3.5].flatMap(x => [2, boardHeight - 2].map(y => circle(origin + x * scale, boardTop + y * scale, 7.5, "#d4dcce", "#f0f0e1") + circle(origin + x * scale, boardTop + y * scale, 5, "#f5f4e8"))).join("");
}

function makePico(wireless) {
  const id = wireless ? "raspberry-pi-pico-2-w" : "raspberry-pi-pico-2", pins = [];
  function add(number, caption, type, description, nx, ny, view = "front", shape = "hole", net = caption) {
    pins.push({ id: /^[0-9]+$/.test(number) ? `pin${number}` : number.toLowerCase().replaceAll(".", "-"), number, label: caption, type, description,
      x: (view === "rear" ? rearX + (21 - nx) * scale : frontX + nx * scale), y: boardTop + ny * scale,
      nativeX: nx, nativeY: ny, view, shape, net, edge: nx < 5 ? "left" : nx > 17 ? "right" : "bottom" });
  }
  gpioOrder.forEach((signal, index) => {
    const number = index + 1, left = number <= 20, row = left ? index : 40 - number;
    const [type, description] = typeof signal === "number" ? ["bidirectional", gpioDescription(signal)] : rails[signal];
    add(String(number), typeof signal === "number" ? `GP${signal}` : signal, type, description, left ? 1.61 : 19.39, 1.37 + row * 2.54, "front", "hole", signal === "AGND" ? "GND" : signal);
  });
  const swdY = wireless ? 51 - 19.8 : 49.63;
  [
    ["SWCLK", "input", "3.3 V Serial Wire Debug clock input to the RP2350."],
    ["GND", "power_in", "Serial Wire Debug ground. This interface does not supply target power."],
    ["SWDIO", "bidirectional", "3.3 V Serial Wire Debug data to and from the RP2350."],
  ].forEach(([caption, type, description], i) => add(`SWD.${i + 1}`, caption, type, description, wireless ? 11.0841 + i * 2.54 : 7.96 + i * 2.54, swdY));
  const tps = [
    ["GND", "power_in", "Close-coupled ground test point for the differential USB pair.", 10.5, 46.5],
    ["USB_DM", "bidirectional", "USB D− test point, on the connector side of the USB interface. This is USB data, not a GPIO.", 11.5, 49.8],
    ["USB_DP", "bidirectional", "USB D+ test point, on the connector side of the USB interface. This is USB data, not a GPIO.", 9.5, 49.8],
    ["SMPS_PS", "passive", `${wireless ? "WL_GPIO1" : "GPIO23"} controls the onboard SMPS power-save mode. The manufacturer says not to use this point externally; changing it affects regulator behavior.`, 8, wireless ? 41.5 : 43],
    ["LED", "output", `${wireless ? "WL_GPIO0" : "GPIO25"} LED drive node. External use is not recommended: this node swings only from ground to the LED forward voltage, not a full 3.3 V logic high.`, 8, wireless ? 39 : 40.5],
    ["BOOTSEL", "passive", "QSPI chip-select / BOOTSEL test point. Short low during power-up to enter USB mass-storage boot mode; it is shared with flash operation.", 8, wireless ? 36.5 : 38],
    ...(!wireless ? [["1V1", "power_out", "Internal nominal 1.1 V core-regulator test point. The manufacturer says not to use this point externally; it is not a peripheral supply.", 11.5, 30.5]] : []),
  ];
  tps.forEach(([caption, type, description, nx, bottomY], i) => add(`TP${i + 1}`, caption, type, description, nx, 51 - bottomY, "rear", "test"));
  const nets = new Map();
  pins.forEach(pin => nets.set(pin.net, [...(nets.get(pin.net) ?? []), pin.id]));
  const component = physicalComponent({
    id, name: wireless ? "Raspberry Pi Pico 2 W" : "Raspberry Pi Pico 2", shortName: wireless ? "Pico 2 W" : "Pico 2", manufacturer: "Raspberry Pi", category: "Microcontrollers",
    source: wireless ? "https://datasheets.raspberrypi.com/picow/pico-2-w-datasheet.pdf" : "https://datasheets.raspberrypi.com/pico/pico-2-datasheet.pdf",
    subtitle: `RP2350 / ${wireless ? "CYW43439 Wi-Fi + Bluetooth / " : ""}bare headers`,
    description: `${wireless ? "SC1633" : "SC1631"} bare-header variant from the manufacturer's Pico 2${wireless ? " W" : ""} datasheet, with RP2350 and 4 MB flash${wireless ? ", CYW43439 wireless radio and onboard antenna" : ""}. PCB revision is not established beyond the published pin-numbering and mechanical drawings. Left: component side, USB above. Right: horizontally mirrored rear, with all ${tps.length} test points and the four grounded USB shell lands. All 40 main terminals and three SWD contacts are included. Test-point functions and coordinates follow Figures 4/5; do not externally use SMPS_PS${wireless ? "" : " or 1V1"}, and the LED node is not a full logic-level output. The KiCad export is a source-coordinate contact reference, including bottom test pads and repeated USB shell ground lands. It does not reproduce the maker's asymmetric SMT lands/paste stencil or qualify a production mating pattern. Generated 3D geometry is approximate.`,
    tags: ["diy", "starter kit", "arduino", "raspberry pi", "pico 2", "rp2350", "risc-v", "cortex-m33", "pio", "swd", ...(wireless ? ["pico 2 w", "sc1633", "wifi", "bluetooth", "cyw43439"] : ["sc1631"])],
    referencePrefix: "U", art: id, width: 450, height: 362, pins, internalConnections: [...nets.values()].filter(group => group.length > 1),
  }, pins.map(pin => [pin.x, pin.y]));
  const shell = [[7.775, 49.5, 1.1, 1.8], [13.225, 49.5, 1.1, 1.8], [8.075, 46.47, 1.05, 1.45], [12.925, 46.47, 1.05, 1.45]];
  const entry = {
    component,
    render: (part, showLabels) => {
      const bw = 21 * scale, bh = 51 * scale, cx = frontX + bw / 2;
      let svg = rect(frontX, boardTop, bw, bh, 3, green, "#55b27e") + rect(rearX, boardTop, bw, bh, 3, green, "#55b27e") + holes(frontX, 21, 51) + holes(rearX, 21, 51) +
        rect(cx - 23, boardTop - 5, 46, 34, 1.5, metal, "#e9eddf") + rect(cx - 17, boardTop - 5, 34, 8, 1, "#455b50") +
        tactile(frontX + 30, boardTop + 67) + smd(frontX + 25, boardTop + 35, "#d3cd86") +
        chip(cx - 21, boardTop + 135, 42, 42, "RP2350", 8) + chip(frontX + 29, boardTop + 106, 17, 22, "", 4) +
        rect(frontX + 37, boardTop + 202, 21, 13, 1, metal, "#e1e8da") +
        [31, 54, 74, 89].map((x, i) => smd(frontX + x, boardTop + 102 + i * 12, i % 2 ? "#b8bd91" : "#514f3c")).join("") +
        label(frontX + bw / 2, 348, "Component side", 8, "#627361") + label(rearX + bw / 2, 348, "Rear · mirrored horizontally", 8, "#627361");
      if (wireless) svg += rect(frontX + 24, boardTop + 218, 78, 53, 2, "#c4cbb9", "#ecf1e1") + label(cx, boardTop + 238, "CYW43439", 7, "#6d7c67") +
        path(`M${cx - 16} ${boardTop + 282}h32v8h-25v8h25`, "none", "#bed3a1", 2.5);
      if (showLabels) svg += label(cx, 12, wireless ? "PICO 2 W" : "PICO 2", 11, "#4b6d56") + label(rearX + bw / 2, 12, "REAR TEST POINTS", 9, "#4b6d56") +
        label(frontX + 50, boardTop + 56, "BOOTSEL", 6.5, silk) + label(rearX + bw / 2, boardTop + 170, wireless ? "Pico 2 W" : "Pico 2", 11, silk);
      part.pins.filter(pin => /^[0-9]+$/.test(pin.number)).forEach(pin => {
        const x = rearX + (21 - pin.nativeX) * scale;
        svg += circle(x, pin.y, 4, "#aacb9d") + circle(x, pin.y, 2.1, green);
      });
      svg += shell.map(([x, y, w, h]) => rect(rearX + (21 - x) * scale - w * scale / 2, boardTop + (51 - y) * scale - h * scale / 2, w * scale, h * scale, 1, metal)).join("");
      svg += part.pins.map(pin => {
        if (pin.shape === "test") return rect(pin.x - 4.5, pin.y - 4.5, 9, 9, 1.8, "#c9b15c", "#e3d59b") +
          label(pin.x + (pin.number === "TP2" ? -7 : 7), pin.y + (["TP2", "TP3"].includes(pin.number) ? 12 : pin.number === "TP1" ? 5 : 0), pin.number, 6.2, silk, pin.number === "TP2" ? "end" : "start");
        const main = /^[0-9]+$/.test(pin.number), left = pin.nativeX < 10.5;
        return (pin.net === "GND" ? rect(pin.x - 4.5, pin.y - 4.5, 9, 9, 0.5, "#d8d9b7", "#f2efdb") : circle(pin.x, pin.y, 4.5, "#d8d9b7", "#f2efdb")) + circle(pin.x, pin.y, 2.3, green) +
          (main ? (showLabels ? label(pin.x + (left ? -10 : 10), pin.y, pin.label, 6.6, "#5c705e", left ? "end" : "start") : "")
            : label(pin.x, pin.y + (wireless ? 10 : -12), pin.label === "GND" ? "G" : pin.label === "SWCLK" ? "CLK" : "DIO", 5.5, silk));
      }).join("");
      return svg;
    },
    footprint: {
      body: [21, 51], color: green, modelHeight: 1,
      note: "Source-coordinate contact reference: 40 header holes, three SWD contacts, all rear test points and four USB shell lands. Centers follow the manufacturer's dimension and SMT-reference drawings. Header/SWD lands are representative through-hole carrier pads; test and shell pads use source center locations. This is not the manufacturer's asymmetric SMT footprint or paste stencil, and is not a qualified production mating pattern. Generated 3D geometry is approximate.",
      pads: [...pins.map(pin => ({ id: pin.id, x: pin.nativeX - 10.5, y: pin.nativeY - 25.5, size: pin.shape === "test" ? [1.5, 1.5] : 1.8, drill: pin.shape === "test" ? 0 : 1, smd: pin.shape === "test", shape: pin.shape === "test" || pin.net === "GND" ? "rect" : "circle" })),
        ...shell.map(([x, y, w, h]) => ({ id: "tp1", x: x - 10.5, y: 25.5 - y, size: [w, h], smd: true, shape: "rect" }))],
      details: [[0, -24, 7.5, 5.7, 2.5, metal], [0, 1, 9, 9, 1, "#243a2a"], ...(wireless ? [[0, 15, 13, 9, 1.7, metal]] : [])],
    },
    ...(!wireless ? { model: { label: "Raspberry Pi Pico 2 vendor STEP archive", url: "https://pip.raspberrypi.com/documents/RP-009061-CA" } } : {}),
  };
  const bodyRegions = [{ x: frontX, y: boardTop, width: 21 * scale, height: 51 * scale },
    { x: frontX + 10.5 * scale - 23, y: boardTop - 5, width: 46, height: 34 }];
  const bounds = { x: frontX, y: boardTop - 5, width: 21 * scale, height: 51 * scale + 5 };
  const viewPins = component.pins.map(pin => ({ pinId: pin.id, x: frontX + pin.nativeX * scale,
    y: boardTop + pin.nativeY * scale, face: pin.view === "rear" ? "rear" : "front" }));
  return { ...entry, mounting: reviewedBoardMounting({
    source: { label: `Raspberry Pi Pico 2${wireless ? " W" : ""} manufacturer datasheet: 40 insertion headers and underside SMT reference`, url: component.source },
    contacts: component.pins.filter(pin => /^[0-9]+$/.test(pin.number)).map(pin => ({ pinId: pin.id, x: pin.nativeX, y: pin.nativeY })),
    bodyRegions, bodyEvidence: "The component-side 21 × 51 mm PCB and projecting Micro-USB shell use the same exact rectangles as the canonical renderer. Separate mirrored rear artwork and captions are excluded.",
    calibration: { origin: { x: frontX, y: boardTop }, unitsPerMm: scale }, viewBounds: bounds,
    note: "Populate both complete 20-contact outer rows. Their centers are 17.78 mm apart at 2.54 mm pitch. SWD and rear factory test pads are auxiliary contacts, not downward insertion leads. Dashed B contacts show the rear pads projected through the PCB.",
    view: { id: "breadboard", pins: viewPins, note: "Explicit component-side mounting view from manufacturer header and SMT-reference coordinates. Front header/SWD locations retain their canonical centers; rear test points project to their physical positions through the PCB only for newly fitted instances." },
    renderMounted: part => clippedFrontArtwork(entry.render, component, bounds) + rearContactOverlay(viewPins.map(point => ({ ...component.pins.find(pin => pin.id === point.pinId), ...point }))),
  }) };
}

// Debug Probe rev2, source schematic 2023-02-20 and maker's labelled TP view.
// Rear pad locations are photo-scaled reference coordinates, not CAD claims.
const debugRear = [
  [1, 11.7, 4.28, "GND"], [2, 9.99, 1.57, "USB_DM"], [3, 12, 1.57, "USB_DP"], [5, 16.48, 1.97, "LED_RED"],
  [6, 12.5, 6.94, "BOOTSEL"], [7, 16.8, 29.63, "TX"], [8, 14.8, 29.63, "GND"], [9, 12.8, 29.63, "RX"],
  [10, 9.2, 29.63, "CLK"], [11, 7.19, 29.63, "GND"], [12, 5.22, 29.63, "DIO"], [13, 3.01, 13.96, "PROBE_SWCLK"],
  [14, 3.01, 16.47, "PROBE_SWDIO"], [15, 3.01, 21.48, "RUN"], [16, 3.01, 18.97, "GND"], [17, 20.03, 23.98, "LED_UART_TX"],
  [18, 11, 25.96, "LED_DEBUG_TX"], [19, 5.48, 1.97, "VBUS"], [20, 5.48, 4.94, "GND"], [21, 11, 27.96, "LED_UART_RX"],
  [22, 3.01, 23.98, "LED_DEBUG_RX"], [23, 18.02, 8.45, "GPIO0"], [24, 18.02, 10.96, "GND"], [25, 20.03, 14.96, "GPIO1"],
  [26, 5.48, 10.46, "3V3"], [27, 7.49, 12.46, "1V1"],
];
const debugSpecs = {
  GND: ["power_in", "Common signal and supply ground."],
  TX: ["output", "3.3 V UART transmit to the target, driven from probe GPIO4 through 100 Ω. Connect to the target UART RX."],
  RX: ["input", "3.3 V UART receive from the target. This node feeds GPIO6 through 100 Ω and a Schmitt buffer to GPIO5; connect to target UART TX."],
  CLK: ["output", "3.3 V target SWD clock output, driven from probe GPIO12 through 100 Ω. This is the target-facing port, not the probe's own SWCLK test point."],
  DIO: ["bidirectional", "3.3 V target SWD data. GPIO14 drives through 100 Ω and the return signal is buffered to GPIO13. This is the target-facing port, not the probe's own SWDIO test point."],
  USB_DM: ["bidirectional", "USB D− test point on the connector side of a 27 Ω series resistor. USB data, not GPIO."],
  USB_DP: ["bidirectional", "USB D+ test point on the connector side of a 27 Ω series resistor. USB data, not GPIO."],
  BOOTSEL: ["passive", "QSPI chip-select/BOOTSEL node. Short low while plugging in USB to boot the probe into USB mass-storage programming mode; shared with flash operation."],
  PROBE_SWCLK: ["input", "SWCLK input for debugging or programming the probe's own RP2040. Separate from the target-facing CLK output."],
  PROBE_SWDIO: ["bidirectional", "SWDIO for debugging or programming the probe's own RP2040. Separate from the target-facing DIO port."],
  RUN: ["input", "Enable/reset input of the probe's own RP2040. Pull low to reset the probe."],
  VBUS: ["passive", "USB nominal 5 V VBUS test point. This is not a 3.3 V signal."],
  "3V3": ["power_out", "Regulated 3.3 V probe supply test point; not a target-voltage sensing input."],
  "1V1": ["power_out", "Internal nominal 1.1 V RP2040 core-regulator output test point. Do not use it as an external peripheral supply."],
  GPIO0: ["bidirectional", "Probe RP2040 GPIO0 / UART0 TX auxiliary signal. Separate from the USB-to-target UART TX port."],
  GPIO1: ["bidirectional", "Probe RP2040 GPIO1 / UART0 RX auxiliary signal. Separate from the USB-to-target UART RX port."],
};

function makeDebugProbe() {
  const id = "raspberry-pi-debug-probe-rev2", pins = [];
  function add(number, net, nx, ny, view, canvasX, canvasY) {
    const led = net.startsWith("LED_");
    const [type, description] = debugSpecs[net] ?? ["passive", `${net.replaceAll("_", " ")} indicator anode, after a 470 Ω series resistor from RP2040 GPIO${({ LED_RED: 2, LED_UART_TX: 7, LED_UART_RX: 8, LED_DEBUG_TX: 15, LED_DEBUG_RX: 16 })[net]}. This is a loaded LED node, not a full logic-level GPIO output.`];
    pins.push({ id: number.toLowerCase().replaceAll(".", "-"), number, label: net, type, description,
      x: canvasX ?? (view === "rear" ? rearX + (22 - nx) * scale : frontX + nx * scale), y: canvasY ?? boardTop + ny * scale,
      nativeX: nx, nativeY: ny, view, net, led, edge: "bottom" });
  }
  debugRear.forEach(([n, rx, y, net]) => add(`TP${n}`, net, 22 - rx, y, "rear"));
  ["GPIO0", "GND", "GPIO1"].forEach((net, i) => add(`J4.${i + 1}`, net, 2, 8 + i * 2.54, "front"));
  [["TX", "GND", "RX"], ["CLK", "GND", "DIO"]].forEach((nets, bank) => nets.forEach((net, i) => add(`J${bank + 2}.${i + 1}`, net, 6.5 + bank * 8 + (i - 1), 30.5, "face", 108 + bank * 103 + i * 15, 277)));
  const nets = new Map(); pins.forEach(pin => nets.set(pin.net, [...(nets.get(pin.net) ?? []), pin.id]));
  const component = physicalComponent({
    id, name: "Raspberry Pi Debug Probe", shortName: "Debug Probe", manufacturer: "Raspberry Pi", category: "Tools", referencePrefix: "U", art: id,
    source: "https://www.raspberrypi.com/documentation/microcontrollers/debug-probe.html", width: 450, height: 328,
    description: "RP2040-based USB-to-UART and CMSIS-DAP SWD probe, rev2 schematic dated 2023-02-20. Nominal I/O is 3.3 V. Left: bare PCB component side with its own J4 auxiliary header. Right: horizontally mirrored rear following the maker's TP location drawing. All 26 physical test points are included; TP4 is absent from both the source schematic and location drawing. The two lower insets show the actual J2 UART and J3 target-debug mating faces with PCB below; they are enlarged views of the two fitted sockets. J2 TX/RX and J3 CLK/DIO are separate from the probe's own debug and auxiliary-UART contacts. No target power pin is provided on those three-pin ports. Positions of test pads and connector contacts are photo-scaled reference geometry; the KiCad footprint is an approximate contact/cable carrier, not a production or host-mating land pattern. Generated 3D geometry is approximate.",
    subtitle: "Rev2 / 3.3 V UART + target SWD / own service contacts", tags: ["diy", "starter kit", "arduino", "raspberry pi", "debug probe", "rp2040", "cmsis-dap", "uart", "swd", "debugger", "programmer"],
    pins, internalConnections: [...nets.values()].filter(group => group.length > 1),
  }, pins.map(pin => [pin.x, pin.y]));
  return {
    component,
    render: (part, showLabels) => {
      const bw = 22 * scale, bh = 32 * scale, cx = frontX + bw / 2;
      let svg = rect(frontX, boardTop, bw, bh, 6, green, "#67b78a") + rect(rearX, boardTop, bw, bh, 6, green, "#67b78a") +
        rect(cx - 22, boardTop - 4, 44, 32, 2, metal, "#e8edde") + tactile(cx - 7.5, boardTop + 43) +
        chip(cx - 22, boardTop + 76, 44, 44, "RP2040", 7) + rect(cx - 30, boardTop + 131, 21, 12, 1, metal) +
        chip(frontX + 19, boardTop + 47, 14, 20, "", 4) + chip(frontX + bw - 43, boardTop + 50, 20, 13, "", 3) +
        [frontX + 28, frontX + 78].map(x => rect(x, boardTop + 162, 34, 28, 2, "#dfdfca", "#f0f0dc") + rect(x + 4, boardTop + 182, 26, 8, 1, "#6d786b")).join("") +
        [20, 19, 112, 20, 111].map((x, i) => smd(frontX + x, boardTop + [13, 155, 155, 182, 182][i], ["#c57c6b", "#b3b26c", "#91b583", "#b3ba6b", "#96b787"][i])).join("") +
        label(cx, 231, "Component side", 8, "#67745f") + label(rearX + bw / 2, 231, "Rear · mirrored horizontally", 8, "#67745f");
      for (const origin of [frontX, rearX]) svg += [2.5, 19.5].flatMap(x => [4.5, 27.5].map(y =>
        circle(origin + x * scale, boardTop + y * scale, 8.5, "#b1cbad", "#e5edda") + circle(origin + x * scale, boardTop + y * scale, 6.3, "#f2f0e4"))).join("");
      for (const [bank, name] of [[0, "J2 UART"], [1, "J3 TARGET SWD"]]) {
        const x = 92 + bank * 103;
        svg += label(x + 31, 248, name, 7.5, "#66715e") + rect(x, 260, 63, 34, 2, "#e7e5d3", "#a4aa94") + rect(x + 6, 266, 51, 23, 1, "#536755") + rect(x - 4, 294, 71, 5, 0.4, green);
      }
      svg += label(174, 318, "Mating faces · PCB below", 8, "#66715e");
      if (showLabels) svg += label(cx, 12, "DEBUG PROBE", 10, "#4f6c54") + label(rearX + bw / 2, 12, "REAR TEST POINTS", 9, "#4f6c54");
      svg += part.pins.map(pin => {
        if (pin.view === "rear") return rect(pin.x - 3.8, pin.y - 3.8, 7.6, 7.6, 1.3, "#cfb77a", "#ede0af") +
          (pin.nativeY > 29 ? label(pin.x, pin.y + 9, pin.number.slice(2), 5.3, silk)
            : label(pin.x + (pin.x > rearX + 95 ? -6 : 6), pin.y + (["TP2", "TP3"].includes(pin.number) ? 9 : 0), pin.number, 5.3, silk, pin.x > rearX + 95 ? "end" : "start"));
        if (pin.view === "face") return rect(pin.x - 2.2, pin.y - 7, 4.4, 14, 0.3, "#d2b45d", "#eadca3") + label(pin.x, 305, pin.label, 6, "#63715b");
        return circle(pin.x, pin.y, 4, "#cfceaf", "#eceddb") + circle(pin.x, pin.y, 2.2, green) + (showLabels ? label(pin.x - 8, pin.y, pin.label, 6.4, "#5f705c", "end") : "");
      }).join("");
      return svg;
    },
    footprint: {
      body: [22, 32], color: green, modelHeight: 1.2,
      note: "Approximate reference contact/cable carrier. The 22×32 mm outline follows the maker mechanical drawing; service-pad positions are scaled from the labelled manufacturer photo. Includes 26 TP contacts, three J4 auxiliary contacts and six target-port cable contacts. It is not a production PCB, socket land pattern or qualified host-mating footprint. Generated 3D geometry is approximate.",
      pads: pins.map(pin => ({ id: pin.id, x: pin.nativeX - 11, y: pin.nativeY - 16, size: pin.view === "rear" ? [1.2, 1.2] : 1.5, drill: pin.view === "rear" ? 0 : pin.view === "face" ? 0.7 : 1, smd: pin.view === "rear", shape: pin.view === "rear" ? "rect" : "circle" })),
      details: [[0, -15, 7.5, 5.7, 2.5, metal], [0, 0, 7, 7, 1.5, "#263a2d"]],
    },
    model: { label: "Raspberry Pi Debug Probe manufacturer mechanical drawing (PDF)", url: "https://pip.raspberrypi.com/documents/RP-008192-DS" },
  };
}

export default defineFamily("raspberry-pi-more", [makePico(false), makePico(true), makeDebugProbe()]);
