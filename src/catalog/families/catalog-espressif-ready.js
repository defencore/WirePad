import { defineFamily } from "../registry.js";
import { chip, circle, label, line, moduleArt, path, pinRow, rect, smd, tactile } from "../shared/svg.js";

const docs = "https://docs.espressif.com/projects/esp-dev-kits/en/latest/";
const mechanical = "https://dl.espressif.com/dl/schematics/";
const ground = (id, name = "GND") => [id, name, "Power and signal ground.", "power_in"];
const rail = (id, name) => [id, name, `${name === "5V" ? "5" : "3.3"} V supply rail. Select USB, 5V/GND, or 3V3/GND as the board power source.`, "passive"];
const reset = ["reset", "RST", "Chip enable. Pull low to reset the ESP32.", "input"];
const unused = (id, name = "NC", description = "Unconnected header contact.") => [id, name, description, "no_connect"];

function gpio(number, name = String(number), description = "") {
  return [`gpio${number}`, name, `3.3 V GPIO${number}.${description ? " " + description : ""}`, "bidirectional"];
}

const c3Left = [
  ground("gnd-1"), rail("3v3-1", "3V3"), rail("3v3-2", "3V3"),
  gpio(2, "2", "ADC1_CH2 and FSPIQ. Boot strapping pin."), gpio(3, "3", "ADC1_CH3."),
  ground("gnd-2"), reset, ground("gnd-3"),
  gpio(0, "0", "ADC1_CH0 and external 32 kHz crystal input."),
  gpio(1, "1", "ADC1_CH1 and external 32 kHz crystal output."),
  gpio(10, "10", "FSPICS0."), ground("gnd-4"), rail("5v-1", "5V"), rail("5v-2", "5V"), ground("gnd-5"),
];
const c3Right = [
  ground("gnd-6"), gpio(21, "TX", "UART0 TX, shared with the USB-to-UART bridge."),
  gpio(20, "RX", "UART0 RX, shared with the USB-to-UART bridge."), ground("gnd-7"),
  gpio(9, "9", "BOOT button and boot strapping pin."), gpio(8, "8", "RGB LED and boot strapping pin."),
  ground("gnd-8"), gpio(7, "7", "FSPID and JTAG MTDO."), gpio(6, "6", "FSPICLK and JTAG MTCK."),
  gpio(5, "5", "ADC2_CH0, FSPIWP and JTAG MTDI."), gpio(4, "4", "ADC1_CH4, FSPIHD and JTAG MTMS."),
  ground("gnd-9"), gpio(18, "18", "Native USB D−. The fitted Micro-B socket uses the UART bridge."),
  gpio(19, "19", "Native USB D+. The fitted Micro-B socket uses the UART bridge."), ground("gnd-10"),
];
const c6Left = [
  rail("3v3", "3V3"), reset,
  gpio(4, "4", "ADC1_CH4, LP_UART_RXD and MTMS. Boot strapping pin."),
  gpio(5, "5", "ADC1_CH5, LP_UART_TXD and MTDI. Boot strapping pin."),
  gpio(6, "6", "ADC1_CH6, LP_I2C_SDA and MTCK."), gpio(7, "7", "LP_I2C_SCL and MTDO."),
  gpio(0, "0", "ADC1_CH0, LP_GPIO0 and XTAL_32K_P."), gpio(1, "1", "ADC1_CH1, LP_GPIO1 and XTAL_32K_N."),
  gpio(8, "8", "RGB LED and boot strapping pin."), gpio(10), gpio(11),
  gpio(2, "2", "ADC1_CH2 and LP_UART_RTSN."), gpio(3, "3", "ADC1_CH3 and LP_UART_CTSN."),
  rail("5v", "5V"), ground("gnd-1", "G"), unused("nc-1"),
];
const c6Right = [
  ground("gnd-2", "G"), gpio(16, "TX", "UART0 TX, shared with the UART bridge."),
  gpio(17, "RX", "UART0 RX, shared with the UART bridge."), gpio(15, "15", "Boot strapping pin."),
  ...[23, 22, 21, 20, 19, 18].map((n, i) => gpio(n, String(n), ["SDIO_DATA3.", "SDIO_DATA2.", "SDIO_DATA1.", "SDIO_DATA0.", "SDIO_CLK.", "SDIO_CMD."][i])),
  gpio(9, "9", "BOOT button and boot strapping pin."), ground("gnd-3", "G"),
  gpio(13, "13", "USB Serial/JTAG D+."), gpio(12, "12", "USB Serial/JTAG D−."), ground("gnd-4", "G"), unused("nc-2"),
];
const h2Left = [
  rail("3v3", "3V3"), reset, gpio(0, "0", "FSPIQ."), gpio(1, "1", "ADC1_CH0 and FSPICS0."),
  gpio(2, "2", "ADC1_CH1 and JTAG MTMS."), gpio(3, "3", "ADC1_CH2 and JTAG MTDO."),
  unused("xtal-13", "13/N", "GPIO13 route is disconnected on the v1.3 assembly with the 32.768 kHz crystal fitted."),
  unused("xtal-14", "14/N", "GPIO14 route is disconnected on the v1.3 assembly with the 32.768 kHz crystal fitted."),
  gpio(4, "4", "ADC1_CH3, FSPICLK and JTAG MTCK."), gpio(5, "5", "ADC1_CH4, FSPID and JTAG MTDI."),
  unused("nc"), ["vbat", "VBAT", "3.3 V battery/reference contact. In schematic v1.3, VBAT supplies the CHIP_PU pull-up through R5. Use the documented USB, 5V or 3V3 paths for main board power.", "power_in"],
  ground("gnd-1", "G"), rail("5v", "5V"), ground("gnd-2", "G"),
];
const h2Right = [
  ground("gnd-3", "G"), gpio(24, "TX", "UART0 TX, shared with the UART bridge."), gpio(23, "RX", "UART0 RX, shared with the UART bridge."),
  gpio(10, "10", "ZCD0."), gpio(11, "11", "ZCD1."), gpio(25, "25", "FSPICS3."), gpio(12),
  gpio(8, "8", "RGB LED data and boot log control."), gpio(22), ground("gnd-4", "G"),
  gpio(9, "9", "BOOT button."), ground("gnd-5", "G"),
  gpio(27, "27", "USB Serial/JTAG D+."), gpio(26, "26", "USB Serial/JTAG D−."), ground("gnd-6", "G"),
];

function makeDevKit(details, left, right, geometry, drawBoard, hasJumper = false) {
  const width = 178;
  const height = geometry.canvasHeight;
  const pins = [
    ...pinRow("left", width, height, 45, 16, left, "J1."),
    ...pinRow("right", width, height, 45, 16, right, "J3."),
  ];
  if (hasJumper) pins.push(...pinRow("bottom", width, height, 69, 40, [
    ["j5-regulator", "J5.1", "Current-measurement jumper, regulator-side 3.3 V rail. Fit the jumper for normal operation.", "passive"],
    ["j5-module", "J5.2", "Current-measurement jumper, module-side 3.3 V rail. Insert an ammeter between the J5 contacts to measure module current.", "passive"],
  ], "J5."));
  const component = {
    ...details, width, height, pins, category: "Microcontrollers", manufacturer: "Espressif Systems", art: details.id, referencePrefix: "U",
    tags: ["espressif", "development board", ...details.tags],
  };
  return {
    component, art: moduleArt(entry => drawBoard(entry)),
    footprint: {
      body: [25.4, geometry.pcbLength], color: "#252a2d",
      groups: [
        { ids: left.map(pin => pin[0]), x: -11.43, y: geometry.firstY, axis: "y", pitch: 2.54 },
        { ids: right.map(pin => pin[0]), x: 11.43, y: geometry.firstY, axis: "y", pitch: 2.54 },
        ...(hasJumper ? [{ ids: ["j5-regulator", "j5-module"], x: -1.27, y: geometry.pcbLength / 2 + 5, pitch: 2.54 }] : []),
      ],
      details: [[0, -geometry.pcbLength / 2 + 3.8, geometry.moduleWidth, 15, 2.4, "#b9c0be"],
        ...(geometry.dual ? [[-6.1, geometry.pcbLength / 2 - 3, 8.5, 7.5, 3.2, "#aebcc1"], [6.1, geometry.pcbLength / 2 - 3, 8.5, 7.5, 3.2, "#aebcc1"]]
          : [[0, geometry.pcbLength / 2 - 2, 7.5, 5.5, 2.5, "#aebcc1"]])],
      note: `${details.mechanicalName}. Main headers follow the manufacturer's 22.86 mm row spacing and 2.54 mm pitch. The outline is the PCB; allow additional clearance for the antenna and USB overhang.${hasJumper ? " The J5 pair is an off-board reference termination, not the onboard jumper location." : ""}`,
    },
  };
}

function moduleShield(x, y, width, height, family, module) {
  return rect(x, y, width, height, 1.7, "#34393a", "#6c7774") +
    path(`M${x + 7} ${y + 15}V${y + 3}h9v12h9V${y + 3}h9v12h9V${y + 3}h9`, "none", "#697165", 1.3) +
    rect(x + 2, y + 23, width - 4, height - 25, 2, "#b8bdb6", "#e2e6df") +
    label(x + width / 2, y + 36, "ESPRESSIF", 7, "#4c5651") +
    label(x + width / 2, y + 48, family, 7.1, "#4c5651") +
    label(x + width / 2, y + 61, module, 6.5, "#4c5651") +
    [0, 1, 2, 3, 4].map(i => rect(x + 10 + i * 9, y + height - 10, 4, 3, 0, "#888f87")).join("");
}

function typeC(x, y) {
  return rect(x, y, 34, 24, 3, "#bcc6c8", "#e9efef") +
    rect(x + 3, y + 3, 28, 5, 2, "#54626a") + rect(x + 5, y + 15, 24, 7, 1, "#dce3df") +
    line(x + 4, y + 12, x + 30, y + 12, "#8a9a9c");
}

function devKitBody({ width, height }, family, dual, moduleWidth) {
  const cx = width / 2;
  const pcbTop = 31;
  const pcbBottom = height - (dual ? 53 : 9);
  const moduleBottom = family === "ESP32-C6" ? 160 : 139;
  const regulatorX = dual ? cx + 8 : cx - 29;
  const rgbX = dual ? cx - 33 : cx + 24;
  const rgbY = moduleBottom + (dual ? 69 : 23);
  const board = rect(8, pcbTop, width - 16, pcbBottom - pcbTop, 5, "#272c2f", "#62716f") +
    rect(9, 39, 8, (family === "ESP32-C6" ? 16 : 15) * 16, 1, "#161e22", "#6d7774") +
    rect(width - 17, 39, 8, (family === "ESP32-C6" ? 16 : 15) * 16, 1, "#161e22", "#6d7774") +
    moduleShield(cx - moduleWidth / 2, 7, moduleWidth, moduleBottom - 7, family, family === "ESP32-C6" ? "WROOM-1" : "MINI-1") +
    rect(regulatorX, moduleBottom + 20, 27, 28, 2, "#303536", "#7c8682") +
    rect(regulatorX + 3, moduleBottom + 16, 21, 7, 1, "#b4c0ba", "#e0e6df") +
    chip(cx + 8, moduleBottom + 67, 24, 27, "CP2102", 5) +
    rect(rgbX, rgbY, 17, 17, 1.5, "#dce4db", "#a5b3a6") + circle(rgbX + 8.5, rgbY + 8.5, 4.2, "#b7c5b5") +
    [[cx + 9, moduleBottom + 20], [cx + 9, moduleBottom + 29], [cx - 10, moduleBottom + 66], [cx - 10, moduleBottom + 78], [cx + 23, moduleBottom + 108]].map(([x, y]) => smd(x, y)).join("") +
    tactile(cx - 40, pcbBottom - 47) + tactile(cx + 25, pcbBottom - 47) +
    label(cx - 32, pcbBottom - 25, dual ? "RST" : "BOOT", 6.1) + label(cx + 33, pcbBottom - 25, dual ? "BOOT" : "RST", 6.1) +
    label(cx, moduleBottom + 58, family.replace("ESP32-", "") + " DEVKIT", 6.8, "#c5d4cf");
  if (!dual) return board +
    path(`M${cx - 17} ${pcbBottom - 18}h34v22h-34Z`, "#b4c0c3", "#dfe8e7") +
    rect(cx - 13, pcbBottom - 12, 26, 5, 2, "#384b56");
  return board +
    rect(cx - 40, moduleBottom + 16, 28, 9, 1.4, "#323937", "#b4c19f") +
    [cx - 35, cx - 17].map(x => circle(x, moduleBottom + 20.5, 2.6, "#c9bc7b")).join("") +
    (family === "ESP32-H2" ? rect(cx - 41, moduleBottom + 43, 15, 6, 1.2, "#b5c2bd", "#dfe7dc") : "") +
    typeC(cx - 42, pcbBottom - 16) + typeC(cx + 8, pcbBottom - 16) +
    label(cx - 25, pcbBottom - 20, "UART", 5.7) + label(cx + 25, pcbBottom - 20, "USB", 5.7) +
    rect(49, height - 28, 80, 26, 3, "#273639", "#5c7370");
}

const c3 = makeDevKit({
  id: "esp32-c3-devkitm-1", name: "ESP32-C3-DevKitM-1", shortName: "C3 DevKitM-1",
  subtitle: "MINI-1 / Wi-Fi + BLE", tags: ["esp32", "esp32-c3", "risc-v", "wifi", "ble"],
  description: "Official V1 development board with the ESP32-C3-MINI-1 PCB-antenna module, 4 MB flash, CP2102N USB-UART and RGB LED. Header numbering follows Espressif J1/J3. This entry uses the MINI-1 antenna variant.",
  source: `${docs}esp32c3/esp32-c3-devkitm-1/user_guide.html`, mechanicalName: "ESP32-C3-DevKitM-1 V1 reference carrier, 25.40 × 38.91 mm PCB",
}, c3Left, c3Right, { canvasHeight: 300, pcbLength: 38.91, firstY: -17.395, moduleWidth: 13.2 },
  c => devKitBody(c, "ESP32-C3", false, 80));

const c6 = makeDevKit({
  id: "esp32-c6-devkitc-1", name: "ESP32-C6-DevKitC-1", shortName: "C6 DevKitC-1",
  subtitle: "v1.2 / Wi-Fi 6 + 802.15.4", tags: ["esp32", "esp32-c6", "wifi 6", "ble", "zigbee", "thread", "matter"],
  description: "Official v1.2 development board, N8 PCB-antenna variant with ESP32-C6-WROOM-1 and 8 MB flash. Includes separate USB Serial/JTAG and USB-UART sockets. J5 is the removable module-current measurement link.",
  source: `${docs}esp32c6/esp32-c6-devkitc-1/user_guide.html`, mechanicalName: "ESP32-C6-DevKitC-1 v1.2 reference carrier, 25.40 × 51.80 mm PCB",
}, c6Left, c6Right, { canvasHeight: 417, pcbLength: 51.8, firstY: -24.325, moduleWidth: 18, dual: true },
  c => devKitBody(c, "ESP32-C6", true, 110), true);

const h2 = makeDevKit({
  id: "esp32-h2-devkitm-1", name: "ESP32-H2-DevKitM-1", shortName: "H2 DevKitM-1",
  subtitle: "v1.3 / BLE + 802.15.4", tags: ["esp32", "esp32-h2", "ble", "zigbee", "thread", "matter"],
  description: "Official ESP32-H2-MINI-1 development board matching schematic v1.3, from PW-2024-02-0362 onward. The populated 32.768 kHz crystal disconnects GPIO13/14 from their header routes. Includes native USB, USB-UART and a module-current jumper.",
  source: `${docs}esp32h2/esp32-h2-devkitm-1/user_guide.html`, mechanicalName: "ESP32-H2-DevKitM-1 v1.3 assembly on the v1.2 mechanical outline, 25.40 × 48.26 mm PCB",
}, h2Left, h2Right, { canvasHeight: 394, pcbLength: 48.26, firstY: -22.555, moduleWidth: 13.2, dual: true },
  c => devKitBody(c, "ESP32-H2", true, 80), true);

const entries = [c3, c6, h2];
const espressifReadyComponents = entries.map(entry => entry.component);
const espressifReadyArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const espressifReadyFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const espressifReadyModels = {
  "esp32-c3-devkitm-1": { label: "Espressif V1 mechanical CAD (DXF)", url: `${mechanical}DIMENSION_ESP32-C3-DEVKITM-1_V1_20200915AA.dxf` },
  "esp32-c6-devkitc-1": { label: "Espressif v1.2 mechanical CAD (DXF)", url: `${mechanical}esp32-c6-devkitc-1-dimensions_v1.2.dxf` },
  "esp32-h2-devkitm-1": { label: "Espressif mechanical CAD (DXF)", url: `${mechanical}esp32-h2-devkitm-1_v1.2_dimension.dxf` },
};

export default defineFamily("espressif-ready", (espressifReadyComponents).map(component => ({ component, render: (espressifReadyArt)[component.art], footprint: (espressifReadyFootprints)[component.id], model: espressifReadyModels[component.id] })));
