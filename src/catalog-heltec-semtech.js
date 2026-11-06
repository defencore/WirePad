import { board, chip, circle, label, line, moduleArt, pinRow, rect, screw, smd, tactile } from "./catalog-extension.js";
import { semtechArt, semtechComponents, semtechFootprints } from "./catalog-semtech.js";

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
  return {
    id, name: `Heltec WiFi LoRa 32 ${revision}`, shortName: `Heltec ${revision}`,
    category: "Microcontrollers", manufacturer: "Heltec Automation",
    description: `${chipName} development board with SX1262 LoRa, Wi-Fi, BLE and OLED. ${details}`,
    subtitle: `${chipName} / SX1262 / OLED`,
    tags: ["lora", "lorawan", "meshtastic", "wifi", "ble", "esp32", "semtech", "heltec"],
    source, width, height, art: auxiliary ? "heltec-v4-board" : "heltec-v3-board", referencePrefix: "U",
    pins: heltecPins(width, height, controls, vextPin, auxiliary),
  };
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

function heltecBody(component) {
  const { height, width, shortName } = component;
  const v3 = component.id === "heltec-v3";
  return board(width, height, v3 ? "#495b69" : "#25303e", "#556577") +
    rect(32, 12, width - 64, height - 24, 4, v3 ? "#d1d7d9" : "#2d3948", "#708092") +
    tactile(33, 17) + tactile(width - 48, 17) +
    rect(56, 2, 30, 24, 2, "#a6aeb9", "#dce2e8") +
    rect(59, 4, 24, 6, 1, "#303c4a") + line(63, 7, 79, 7, "#bbc4cd") +
    label(40, 41, "RST", 6, v3 ? "#28333c" : "#aebed0") +
    label(width - 40, 41, "PRG", 6, v3 ? "#28333c" : "#aebed0") +
    smd(37, 49) + smd(97, 49) + smd(59, 39) + chip(57, 49, 28, 16, v3 ? "USB" : "PMU") +
    rect(29, 73, width - 58, 192, 7, "#18212d", "#778595") +
    rect(43, 105, width - 86, 128, 3, "#081420", "#354654") +
    label(width / 2, 148, "HELTEC", 12, "#79d5ec") +
    label(width / 2, 170, shortName.slice("Heltec ".length), 9, "#acc9dd") +
    label(width / 2, 193, "LoRa", 8, "#6886a6") +
    (v3 ? "" : [[39, 83], [103, 83], [39, 255], [103, 255]].map(([x, y]) => screw(x, y, 6)).join("")) +
    rect(64, height - 35, 14, 14, 2, "#d4c7b1", "#f2eadf") +
    circle(71, height - 28, 5, "#c39a54") + circle(71, height - 28, 2, "#4c3b26") +
    (v3 ? rect(32, height - 36, 16, 15, 2, "#2f8474") +
      line(33, height - 28, 47, height - 28, "#87bfad", 1.4) : "");
}

const renderHeltec = moduleArt(heltecBody);

export const heltecSemtechComponents = [...heltecBoards, ...semtechComponents];
export const heltecSemtechArt = {
  "heltec-v3-board": renderHeltec,
  "heltec-v4-board": renderHeltec,
  ...semtechArt,
};
export const heltecSemtechFootprints = {
  ...Object.fromEntries(heltecBoards.map(component => [component.id, heltecFootprint(component)])),
  ...semtechFootprints,
};
export const heltecSemtechModels = {
  "heltec-v3": {
    label: "Heltec V3 family CAD downloads",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V3/3D/",
  },
  "heltec-v4": {
    label: "Heltec V4 family CAD downloads",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/3D/",
  },
  "heltec-v4-3-r2": {
    label: "Heltec V4.3.1 STEP model",
    url: "https://resource.heltec.cn/download/WiFi_LoRa_32_V4/3D/HTIT-WB32LAF_V4.3.1%281%29.step",
  },
};
