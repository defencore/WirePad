import { physicalComponent } from "../shared/physical-contacts.js";
import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, pinRow, rect, smd } from "../shared/svg.js";
import { heltecMounting } from "../shared/heltec-board-mounting.js";

const heltecV3Page = "https://heltec.org/project/wifi-lora-32-v3/";
const heltecV4Page = "https://heltec.org/project/wifi-lora-32-v4/";
const heltecV42Docs = "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/Schematic/WiFi_LoRa_32_V4.2.pdf";
const heltecV4R8Docs = "https://resource.heltec.cn/download/WiFi_LoRa_32_V4-R8/Schematic/HTIT-WBR8H_V4.3.2.pdf";

const referenceGpio = {
  1: "ADC1 channel 0 and touch input. The board uses it to sense battery voltage.",
  2: "ADC1 channel 1 and touch input.",
  3: "ADC1 channel 2, touch input and boot strapping.",
  4: "ADC1 channel 3 and touch input.",
  5: "ADC1 channel 4 and touch input.",
  6: "ADC1 channel 5 and touch input.",
  7: "ADC1 channel 6 and touch input.",
  15: "Auxiliary pad. ADC2 channel 4 and alternate 32 kHz crystal input.",
  16: "Auxiliary pad. ADC2 channel 5 and alternate 32 kHz crystal input.",
  17: "Auxiliary pad. Shared with the onboard OLED SDA line.",
  18: "Auxiliary pad. Shared with the onboard OLED SCL line.",
  19: "Native USB D− and ADC2 channel 8.",
  20: "Native USB D+ and ADC2 channel 9.",
  21: "Shared with the onboard OLED reset line.",
  26: "SPI chip select for in-package PSRAM. Leave unused while PSRAM is enabled.",
  37: "Active-high enable for the battery-voltage divider on GPIO1.",
  38: "Connected to the GNSS header. ESP32 RX from GNSS TX.",
  39: "Connected to the GNSS header. ESP32 TX to GNSS RX.",
  40: "GNSS wake output on the accessory connector.",
  41: "GNSS pulse-per-second input on the accessory connector.",
  42: "GNSS reset output on the accessory connector.",
  43: "UART0 TX.",
  44: "UART0 RX.",
  45: "Boot strapping pin. Also routed to the display connector on V4.",
  46: "Boot strapping pin.",
};

const gpio = (number, overrides) => {
  const description = overrides[number] ?? referenceGpio[number];
  const label = { 43: "TX", 44: "RX" }[number] ?? String(number);
  return [`gpio${number}`, label, description ? `GPIO${number}. ${description}` : `GPIO${number}.`, "bidirectional"];
};

const v3Connections = {
  19: "Native USB D−. The stock USB-C socket uses a USB-to-UART bridge. The optional native USB path requires the PCB configuration in the datasheet.",
  20: "Native USB D+. The stock USB-C socket uses a USB-to-UART bridge. The optional native USB path requires the PCB configuration in the datasheet.",
  26: "Alternate SPI chip select.",
  35: "Shared with the onboard user LED.",
  36: "Active-low control for both switched VE outputs.",
  38: "General-purpose GPIO and alternate SPI write-protect.",
  39: "JTAG MTCK.",
  40: "JTAG MTDO.",
  41: "JTAG MTDI.",
  42: "JTAG MTMS.",
  43: "UART0 TX. Connected to the onboard USB-to-UART bridge.",
  44: "UART0 RX. Connected to the onboard USB-to-UART bridge.",
  45: "Boot strapping pin.",
};

const v4Connections = {
  2: "Shared with the LoRa RF front-end enable control.",
  7: "Shared with the LoRa RF front-end supply control.",
  34: "Active-low enable for the GNSS supply switch.",
  35: "Shared with the onboard user LED.",
  36: "Active-low control for both switched VE outputs.",
};

const v42Connections = {
  ...v4Connections,
  46: "Boot strapping pin. Shared with the GC1109 RF front-end PA_CPS signal on this revision.",
};

const v43Connections = {
  ...v4Connections,
  5: "Shared with the KCT8103L RF front-end PA_CTX signal on this revision.",
};

const v4R8Connections = {
  ...v43Connections,
  33: "Reserved for the in-package octal PSRAM data bus.",
  34: "Reserved for the in-package octal PSRAM data bus.",
  35: "Reserved for the in-package octal PSRAM data bus.",
  36: "Reserved for the in-package octal PSRAM data bus.",
  37: "Reserved for the in-package octal PSRAM data strobe.",
  40: "Active-low control for both switched VE outputs. Also routed to the GNSS wake pin.",
  42: "Active-low GNSS supply control. Also shared with the accessory reset line on V4.3.2.",
  46: "Boot strapping pin. Shared with the onboard user LED on the R8 variant.",
};

function heltecPins(width, height, controls, vextPin, auxiliary) {
  // USB faces up, so header J2 is left and both headers count downward.
  const ve = (id) => [id, "VE", `Switched 3.3 V output. Drive GPIO${vextPin} low to enable it.`, "power_out"];
  const signal = (number) => {
    const pin = gpio(number, controls);
    if (vextPin === 40 && number >= 33 && number <= 37) pin[3] = "no_connect";
    return pin;
  };
  const left = [
    ["gnd", "GND", "Ground and signal reference.", "power_in"],
    ["5v", "5V", "5 V rail and alternative power input. Use this input or USB power.", "power_in"],
    ve("ve"), ve("ve-2"), signal(44), signal(43),
    ["reset", "RST", "Active-low chip enable and reset.", "input"],
    ["gpio0", "0", "GPIO0. Program button and boot strapping.", "bidirectional"],
    ...[36, 35, 34, 33, 47, 48, 26, 21, 20, 19].map(signal),
  ];
  const right = [
    ["gnd-2", "GND", "Ground and signal reference.", "power_in"],
    ["3v3", "3V3", "Main 3.3 V rail.", "power_in"],
    ["3v3-2", "3V3", "Second contact on the main 3.3 V rail.", "power_in"],
    ...[37, 46, 45, 42, 41, 40, 39, 38, 1, 2, 3, 4, 5, 6, 7].map(signal),
  ];
  return [
    ...pinRow("left", width, height, 20, 15, left, "J2."),
    ...pinRow("right", width, height, 20, 15, right, "J3."),
    ...auxiliary ? pinRow("bottom", width, height, 26, 30, [18, 17, 16, 15].map(signal), "X") : [],
  ];
}

function heltecBoard({ id, revision, chipName, source, controls, vextPin = 36, auxiliary = true, details }) {
  const width = 142;
  const height = auxiliary ? 330 : 310;
  const component = {
    id, name: `Heltec WiFi LoRa 32 ${revision}`, shortName: `Heltec ${revision}`,
    category: "Microcontrollers", manufacturer: "Heltec Automation",
    description: `${chipName} development board with SX1262 LoRa, Wi-Fi, BLE and OLED. ${details}`,
    subtitle: `${chipName} / SX1262 / OLED`,
    tags: ["lora", "lorawan", "meshtastic", "wifi", "ble", "esp32", "semtech", "heltec"],
    source, width, height, contactLayout: "physical", art: auxiliary ? "heltec-v4-board" : "heltec-v3-board", referencePrefix: "U",
    pins: heltecPins(width, height, controls, vextPin, auxiliary),
  };
  return physicalComponent(component, pin => ({
    x: pin.number.startsWith("X") ? { X1: 42, X2: 54, X3: 88, X4: 100 }[pin.number] : pin.x === 0 ? 11 : width - 11,
    y: pin.number.startsWith("X") ? 302 : pin.y,
  }));
}

const heltecBoards = [
  heltecBoard({
    id: "heltec-v4", revision: "V4.2 R2", chipName: "ESP32-S3R2",
    source: heltecV42Docs, controls: v42Connections,
    details: "V4.2 with GC1109 RF front end. Includes both 18-pin headers and all four auxiliary pads.",
  }),
  heltecBoard({
    id: "heltec-v3", revision: "V3.2", chipName: "ESP32-S3FN8",
    source: heltecV3Page, controls: v3Connections, auxiliary: false,
    details: "V3.2 with CP2102 USB-to-UART and two 18-pin headers.",
  }),
  heltecBoard({
    id: "heltec-v4-3-r2", revision: "V4.3 R2", chipName: "ESP32-S3R2",
    source: heltecV4Page, controls: v43Connections,
    details: "V4.3 with KCT8103L RF front end and 2 MB PSRAM. Includes both 18-pin headers and all four auxiliary pads.",
  }),
  heltecBoard({
    id: "heltec-v4-3-r8", revision: "V4.3.2 R8", chipName: "ESP32-S3R8",
    source: heltecV4R8Docs, controls: v4R8Connections, vextPin: 40,
    details: "V4-R8 with 8 MB octal PSRAM. GPIO33–37 are reserved for memory. Includes both 18-pin headers and all four auxiliary pads.",
  }),
];

function heltecFootprint(component) {
  const v3 = component.id === "heltec-v3";
  const length = v3 ? 50.2 : 51.7;
  const left = component.pins.filter(pin => pin.number.startsWith("J2."));
  const right = component.pins.filter(pin => pin.number.startsWith("J3."));
  return {
    body: [v3 ? 25.5 : 25.4, length],
    color: v3 ? "#b7bec3" : "#27343d",
    note: `Reference carrier for ${component.shortName}. Both 18-pin headers use 2.54 mm pitch. Verify row spacing${v3 ? "" : ", auxiliary pad locations,"} and mounting clearances against the fitted revision.`,
    groups: [
      { ids: left.map(pin => pin.id), axis: "y", x: -11.43, y: v3 ? -21.59 : -22.04 },
      { ids: right.map(pin => pin.id), axis: "y", x: 11.43, y: v3 ? -21.59 : -22.04 },
    ],
    pads: component.pins.filter(pin => pin.number.startsWith("X")).map((pin, index) => ({
      id: pin.id, x: [-5.85, -3.3, 3.3, 5.85][index], y: 23.68,
    })),
    details: [[0, -23, 8.7, 5, 2.6, "#a7b2bc"], [0, 2, 16.5, 26, 4.1, "#202938"]],
  };
}

function heltecUsb() {
  return rect(48, 2, 46, 42, 2, "#b9bec0", "#858d93") +
    rect(50, 3, 42, 5, 1, "#535b63") +
    line(53, 9, 89, 9, "#e3e7e8") +
    rect(56, 26, 6, 4, 0.5, "#42464b") + rect(80, 26, 6, 4, 0.5, "#42464b") +
    rect(55, 35, 8, 9, 0.7, "#454b50") + rect(79, 35, 8, 9, 0.7, "#454b50") +
    [65, 69, 73, 77].map(x => line(x, 45, x, 48, "#bac0c1", 1.4)).join("");
}

function heltecSwitch(x, caption, v3) {
  const silk = v3 ? "#29353d" : "#d5d8d8";
  const captionX = x + (caption === "RST" ? 17 : -3);
  return rect(x + 4, 9, 6, 31, 1, "#b5babe", "#929b9d") +
    rect(x, 13, 14, 23, 1, "#b9c7cc", "#687477") +
    circle(x + 7, 24, 5, v3 ? "#2c3031" : "#eee9c9", "#737971") +
    label(captionX, 45, caption, 6.5, silk);
}

function coax(x, y) {
  return rect(x - 6.5, y - 6.5, 13, 13, 1, "#ded9c4", "#857d65") +
    circle(x, y, 5.2, "#d0ad57", "#f3df9c") +
    circle(x, y, 3.3, "#eee5c7") + circle(x, y, 1.6, "#aa7d2c");
}

function bracketScrew(x, y) {
  return circle(x, y, 8, "#575b5b", "#242827") +
    circle(x, y, 5.1, "#b2b7b7") +
    line(x - 2.5, y, x + 2.5, y, "#596364", 1.3) +
    line(x, y - 2.5, x, y + 2.5, "#596364", 1.3);
}

function heltecV3Body() {
  return path("M18 6H124L136 17V282H123L112 305H33L19 282H6V17Z", "#dedfdd", "#9aa5a6") +
    heltecUsb() + heltecSwitch(21, "RST", true) + heltecSwitch(107, "PRG", true) +
    smd(24, 51, "#d9d56d") + smd(34, 54) + smd(55, 55, "#c9bba0") + smd(81, 54) +
    chip(26, 69, 13, 13, "", 2) + chip(88, 52, 13, 11, "", 2) +
    chip(83, 73, 15, 10, "", 2) + smd(100, 59) + smd(56, 78) + coax(108, 75) +
    rect(19, 89, 104, 201, 2, "#bec5c5", "#828e8d") +
    rect(25, 96, 92, 183, 1, "#dce2df", "#a4acaa") +
    path("M18 112H40L45 140L39 154V228L43 258L38 272H19L16 245V134Z", "#222726", "#3b4241") +
    rect(41, 111, 77, 157, 2, "#242a2a", "#5d6664") +
    rect(44, 115, 70, 149, 1, "#141a1a", "#303736") +
    line(46, 119, 111, 119, "#343e3d") +
    [27, 115].flatMap(x => [101, 280].map(y => circle(x, y, 4.4, "#e2e6e2", "#adb6b2"))).join("") +
    rect(87, 270, 29, 29, 1, "#087964", "#20584c") +
    line(89, 272, 113, 272, "#52a38c") + coax(70, 295) +
    label(47, 295, "V3.2", 7, "#303b40");
}

function heltecV4Body() {
  // The V4.2, V4.3 R2 and V4.3.2 R8 pin maps share the same OLED-side assembly.
  return path("M18 7H124L136 20V287H121L103 323H39L21 287H6V20Z", "#303332", "#4c5351") +
    heltecUsb() + heltecSwitch(22, "RST", false) + heltecSwitch(106, "PRG", false) +
    rect(26, 52, 10, 18, 1, "#b48a45", "#e1b360") + rect(36, 55, 5, 12, 1, "#c8c6b9") +
    smd(33, 71) + smd(30, 77) + smd(45, 80) + smd(48, 58) + smd(89, 53) +
    smd(95, 81) + smd(105, 52) + smd(108, 70) +
    chip(42, 66, 14, 11, "", 2) + chip(88, 61, 12, 11, "", 2) +
    chip(102, 74, 12, 12, "", 2) +
    rect(65, 61, 12, 19, 1, "#e0e2dc", "#969b92") +
    label(71, 70, "V4", 8, "#202624") +
    rect(23, 88, 96, 203, 2, "#202322", "#7c8380") +
    rect(27, 92, 88, 195, 1, "#292b2a", "#393e3c") +
    rect(43, 120, 56, 135, 1.4, "#111414", "#5c6260") +
    rect(45, 123, 52, 129, 1, "#090d0d") +
    '<g transform="translate(71 187) rotate(-90)">' + label(0, 0, "HELTEC", 13, "#303636") + "</g>" +
    [36, 106].flatMap(x => [100, 279].map(y => bracketScrew(x, y))).join("") +
    rect(47, 307, 9, 5, 1, "#373a38", "#6a706e") +
    rect(86, 307, 9, 5, 1, "#373a38", "#6a706e") +
    label(44, 316, "868", 5.5, "#cbd2cf") + label(98, 316, "915", 5.5, "#cbd2cf") +
    coax(71, 314);
}

function heltecPads({ width, pins }, labels, v3) {
  const metal = v3 ? "#abb3b3" : "#e0b657";
  const captionColor = v3 ? "#243138" : "#eff1ed";
  const captionOutline = v3 ? "#e3e6e2" : "#232a29";
  return pins.map(pin => {
    const auxiliary = pin.number.startsWith("X");
    const left = pin.edge === "left";
    const annulus = pin.number.endsWith(".1") && !v3
      ? rect(pin.x - 3.7, pin.y - 3.7, 7.4, 7.4, .5, metal, "#9f8036")
      : circle(pin.x, pin.y, auxiliary ? 3.7 : 3.6, metal, v3 ? "#909999" : "#977a34");
    const caption = labels ? `<g paint-order="stroke fill" stroke="${captionOutline}" stroke-width="1">` +
      label(auxiliary ? pin.x : left ? 17 : width - 17, auxiliary ? pin.y - 7 : pin.y,
        pin.label, auxiliary ? 6.5 : 7.3, captionColor, auxiliary ? "middle" : left ? "start" : "end") + "</g>" : "";
    return annulus + circle(pin.x, pin.y, 1.85, "#27302f") + caption;
  }).join("");
}

function renderHeltec(component, labels) {
  const v3 = component.id === "heltec-v3";
  return (v3 ? heltecV3Body() : heltecV4Body()) + heltecPads(component, labels, v3);
}

const heltecSemtechComponents = heltecBoards;
const heltecSemtechArt = {
  "heltec-v3-board": renderHeltec,
  "heltec-v4-board": renderHeltec,
};
const heltecSemtechFootprints = {
  ...Object.fromEntries(heltecBoards.map(component => [component.id, heltecFootprint(component)])),
};
const heltecSemtechModels = {
  "heltec-v3": {
    label: "Heltec V3 reference STEP (approximate)",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V3/3D/V3_Non-Exact%203D%20Model.STEP",
  },
  "heltec-v4": {
    label: "Heltec V4 family CAD (check revision)",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/3D/",
  },
  "heltec-v4-3-r2": {
    label: "Heltec V4.3.1 STEP model",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/3D/HTIT-WB32LAF_V4.3.1%281%29.step",
  },
};

export default defineFamily("heltec-semtech", (heltecSemtechComponents).map(component => ({ component, render: (heltecSemtechArt)[component.art], footprint: (heltecSemtechFootprints)[component.id], model: heltecSemtechModels[component.id], mounting: heltecMounting(component) })));
