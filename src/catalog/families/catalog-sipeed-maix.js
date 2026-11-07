import { defineFamily } from "../registry.js";
import { chip, circle, label, path, rect, tactile, usb } from "../shared/svg.js";
import { readyRow, readyBoard, readySocket, readyAntenna } from "../shared/wire-board.js";

const wiki = "https://wiki.sipeed.com/hardware/en/";
const download = "https://dl.sipeed.com/shareURL/";
const split = value => value.split(/\s+/);


const pcb = (x, y, w, h) => rect(x, y, w, h, 8, "#263631", "#718477");
const hole = (x, y) => circle(x, y, 6.5, "#b59c69") + circle(x, y, 4, "#f2f5f1");

const bitNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const bit = readyBoard({
  id: "sipeed-maix-bit-v2-0", name: "Sipeed Maix Bit V2.0 (MEMS microphone)", short: "Maix Bit V2.0", subtitle: "K210 / 2020-01-18 / USB-C", width: 620, height: 330, boardBounds: [[45, 42, 525, 245]],
  source: download + "MAIX/HDK/Sipeed-Maix-Bit/Maix-Bit_V2.0_with_MEMS_microphone",
  cad: download + "MAIX/HDK/Sipeed-Maix-Bit/Maix-Bit_V2.0_with_MEMS_microphone/MAIX%20Bit%20V2.0.step",
  description: "Component-side view, USB-C at the left. All 36 user through-holes are shown with original J13/J14 schematic numbers. Positions 10/11 are the central mounting annulus on each schematic row, not two extra header holes; they are excluded. Camera/LCD FPCs and the microSD socket are illustrated cable/card ports, outside this wire-contact scope. Reset is a 1.8 V-domain signal; GPIO0–35 use the configured 3.3 V banks.",
  tags: ["sipeed", "maix", "maix bit", "k210", "kendryte", "risc-v", "ai", "camera", "mems"], resetVoltage: "Reset belongs to the 1.8 V domain",
  functions: { IO16: "BOOT: pull low for ISP boot.", IO18: "Shared MEMS microphone BCK.", IO19: "Shared MEMS microphone WS.", IO20: "Shared MEMS microphone data.", IO26: "Shared microSD MISO.", IO27: "Shared microSD clock.", IO28: "Shared microSD MOSI.", IO29: "Shared microSD CS." },
  contacts: [
    ...readyRow("J13", "IO21 IO20 IO19 IO18 IO17 IO16 IO15 IO10 IO9 IO8 IO7 IO6 IO5 IO4 IO3 IO2 IO1 IO0", 70, 62, 27, 0, { numbers: bitNumbers, side: "top", overrides: Object.fromEntries(bitNumbers.map((n, i) => [i, { x: 70 + (n - 1) * 25, caption: n === 10 ? "GND" : split("21 20 19 18 17 16 15 10 9 8 7 6 5 4 3 2 1 0")[i] }])) }),
    ...readyRow("J14", "IO22 IO23 IO24 IO25 GND 5V 3V3 RST IO26 IO27 IO28 IO29 IO30 IO31 IO32 IO33 IO34 IO35", 70, 268, 27, 0, { numbers: bitNumbers, side: "bottom", overrides: Object.fromEntries(bitNumbers.map((n, i) => [i, { x: 70 + (n - 1) * 25 }])) }),
  ],
  draw: () => pcb(45, 42, 525, 245) + usb(34, 138, 48) + tactile(57, 83) + tactile(57, 227) +
    chip(120, 130, 45, 45, "CH552", 8) + chip(264, 125, 90, 90, "K210", 13) + chip(218, 90, 30, 30, "FLASH", 4) +
    readySocket(430, 95, 22, 145, "CAM", true) + readySocket(502, 95, 22, 145, "LCD", true) +
    hole(307.5, 62) + hole(307.5, 268) + circle(205, 218, 6, "#b2b6aa") + label(362, 248, "Maix Bit V2.0", 10) + label(106, 102, "RESET", 6) + label(105, 233, "BOOT", 6),
});

const duino = readyBoard({
  id: "sipeed-maixduino-2832-v1-5", name: "Sipeed Maixduino 2832 V1.5", short: "Maixduino", subtitle: "K210 + ESP32 / schematic V1.5", width: 520, height: 640, boardBounds: [[86, 58, 352, 540]],
  source: download + "MAIX/HDK/Sipeed-Maixduino/Maixduino_2832",
  cad: download + "MAIX/HDK/Sipeed-Maixduino/Maixduino_2832/MaixDuino-2832-3D.stp",
  resetVoltage: "K210 reset is in the 1.8 V domain", esp32: true,
  description: "Rear silkscreen-side view with USB-C and DC jack at the bottom, matching the official pin-assignment drawing. All 32 Arduino-style header contacts plus the two differential speaker terminals are exposed. The analog header goes to ESP32; digital headers go to K210 and are 3.3 V. V1.5 P6.2 is NC even though the older drawing prints 3V3 there. Camera/LCD FPCs and microSD are illustrated as fitted cable/card ports; their fine contacts are outside the jumper-wire scope. The speaker is a bridge output: neither terminal is ground.",
  tags: ["sipeed", "maix", "maixduino", "maix duino", "k210", "esp32", "arduino", "ai", "camera"],
  types: { A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "SPK−": "output", "SPK+": "output" },
  functions: { A5: "ESP32 GPIO36 / ADC1_CH0.", A4: "ESP32 GPIO39 / ADC1_CH3.", A3: "ESP32 GPIO34 / ADC1_CH6.", A2: "ESP32 GPIO35 / ADC1_CH7.", A1: "ESP32 GPIO32 / ADC1_CH4.", A0: "ESP32 GPIO33 / ADC1_CH5.", IO4: "K210 ISP RX; shared with USB-UART.", IO5: "K210 ISP TX; shared with USB-UART.", SDA: "K210 IO31, 4.7 kΩ pull-up to 3.3 V.", SCL: "K210 IO30, 4.7 kΩ pull-up to 3.3 V." },
  contacts: [
    ...readyRow("P3", "A5 A4 A3 A2 A1 A0", 107, 92, 0, 21, { side: "left" }),
    ...readyRow("P6", "VIN GND GND 5V 3V3 RST NC NC", 107, 248, 0, 21, { numbers: [8, 7, 6, 5, 4, 3, 2, 1], side: "left" }),
    ...readyRow("P2", "IO4 IO5 IO21 IO22 IO23 IO24 IO32 IO15", 415, 92, 0, 21, { side: "right", captions: split("RX0 TX1 D2 D3 D4 D5 D6 D7") }),
    ...readyRow("P5", "IO14 IO13 IO12 IO11 IO10 IO3 GND NC SDA SCL", 415, 264, 0, 21, { side: "right", captions: split("D8 D9 D10 D11 D12 D13 GND NC SDA SCL") }),
    ...readyRow("J3", ["SPK−", "SPK+"], 158, 568, 14, 0, { side: "top", captions: ["−", "+"] }),
  ],
  draw: () => pcb(86, 58, 352, 540) + hole(108, 72) + hole(414, 72) + hole(108, 486) + hole(414, 486) +
    rect(210, 174, 140, 170, 1, "none", "#9eafa0") + label(280, 242, "M1 MODULE", 12) + label(280, 261, "opposite face", 7) +
    rect(173, 132, 60, 90, 1, "none", "#9eafa0") + label(203, 178, "WiFi", 8) +
    readySocket(357, 116, 23, 120, "CAMERA", true) + readySocket(230, 435, 120, 24, "LCD 24P") +
    usb(240, 581, 50) + rect(92, 525, 70, 70, 3, "#1d2529", "#697572") + label(127, 560, "6–12V", 7) +
    tactile(368, 550) + tactile(397, 550) + label(258, 510, "Maixduino", 20) + label(263, 532, "rear silkscreen view / 2832 V1.5", 7) +
    rect(146, 552, 42, 28, 2, "#d9dacf", "#8c9890"),
});

const m1sLeft = split("IO21 IO20 IO19 IO18 IO17 IO16 LINEOUT_1P MIC_1P MIC_1N MIC_2P MIC_2N PU_CHIP IO15 IO14 1V8_OUT IO13 IO12 IO11 IO40 IO41 3V3_IN VDD28_CIS VSS28_CIS VDD15_CIS GND");
const m1sRight = split("IO25 IO26 IO27 IO28 IO29 IO30 IO31 IO32 GND IO33 GND USB_P USB_N GND IO8 IO7 IO6 IO5 IO4 IO3 IO2 IO1 IO0 VDDIO1 GND");
const m1s = readyBoard({
  id: "sipeed-maix-m1s-module", name: "Sipeed Maix M1s Module", short: "Maix M1s", subtitle: "BL808 / 31 × 18 mm / 66 castellations", width: 470, height: 650, boardBounds: [[95, 40, 297, 511.5]],
  source: wiki + "maix/m1s/m1s_module.html", cad: download + "MAIX/M1s/M1s/5_3D_file",
  description: "Shield-side view, PCB antenna at the top. All 66 castellated contacts use the official standalone-module references P2/P3/P4, rather than the different Dock module-symbol reference names. Bank supplies VDDIO1, VDDIO3/UHS and VDDIO4 must be provided separately in addition to 3.3 V. GPIO-bank voltage depends on those supplies; the 3.3 V Dock defaults are not an intrinsic module setting. Reference carrier only; use the official 1 mm-pitch module drawing for a mating footprint.",
  logic: "BL808 bank-voltage", tags: ["sipeed", "maix", "m1s", "bl808", "risc-v", "wifi", "bluetooth", "zigbee", "module", "som"],
  contacts: [
    ...readyRow("P2", [...m1sLeft].reverse(), 95, 131, 0, 16.5, { numbers: Array.from({ length: 25 }, (_, i) => 25 - i), side: "left", captions: Array.from({ length: 25 }, (_, i) => `${25 - i}`) }),
    ...readyRow("P3", [...m1sRight].reverse(), 392, 131, 0, 16.5, { numbers: Array.from({ length: 25 }, (_, i) => 25 - i), side: "right", captions: Array.from({ length: 25 }, (_, i) => `${25 - i}`) }),
    ...readyRow("P4", "IO22 GND IO23 GND VDDIO4 VDDIO3/UHS CSI1_N CSI1_P GND CSICLK_N CSICLK_P GND CSI0_N CSI0_P GND IO24", 119.75, 551.5, 16.5, 0, { numbers: Array.from({ length: 16 }, (_, i) => 16 - i), side: "bottom", captions: Array.from({ length: 16 }, (_, i) => `${16 - i}`), overrides: Object.fromEntries(Array.from({ length: 16 }, (_, i) => [i, { font: 6 }])) }),
  ],
  draw: () => pcb(95, 40, 297, 511.5) + readyAntenna(132, 54, 215) + rect(110, 145, 267, 386, 4, "#afb4ac", "#e4e7dd") +
    rect(118, 153, 251, 370, 3, "#a0a89f", "#d3dace") + label(243, 233, "M1S", 35, "#e5e9e0") + label(243, 294, "Sipeed", 25, "#e5e9e0") +
    label(243, 375, "BL808", 18, "#dce1d8") + label(243, 410, "64 MB PSRAM", 11, "#dce1d8") + label(243, 594, "31 × 18 mm • shield side", 9, "#3c5051"),
});

const dockLeft = split("GND 3V3 IO41 IO40 IO11 IO12 IO13 LINEOUT_1P IO16 IO17 IO18 IO19 IO20 IO21 IO22 VBUS");
const dockRight = split("IO6 IO7 IO8 IO33 IO14 IO15 IO32 IO31 IO30 IO29 IO28 IO27 IO26 IO25 IO24 IO23");
const m1sDock = readyBoard({
  id: "sipeed-maix-m1s-dock-3272", name: "Sipeed Maix M1s Dock 3272", short: "Maix M1s Dock", subtitle: "BL808 / Dock schematic V1.0", width: 440, height: 650, boardBounds: [[75, 30, 290, 590]],
  source: wiki + "maix/m1s/m1s_dock.html", cad: download + "MAIX/M1s/M1s_Dock/5_3D_file",
  description: "Module-shield side with both USB-C sockets at the bottom, matching the official pin map. All 32 2.54 mm header contacts and the four P7 UART socket contacts are shown. GPIO banks are 3.3 V with the factory R10/R16/R33 links; alternative 1.8 V bank configurations require modifying those links. P7 is shown at its socket mouth, ordered IO26, IO27, GND, 5 V left to right. Camera/LCD FPC and microSD contacts are outside the jumper-wire scope.",
  tags: ["sipeed", "maix", "m1s", "m1s dock", "bl808", "risc-v", "wifi", "bluetooth", "camera"],
  functions: { IO26: "Shared with P7.4 on the auxiliary UART socket; configure the UART alternate function in firmware.", IO27: "Shared with P7.3 on the auxiliary UART socket; configure the UART alternate function in firmware.", IO14: "E907 TX / download.", IO15: "E907 RX / download.", IO22: "S1/BOOT pushbutton.", IO23: "S2/reset pushbutton." },
  contacts: [
    ...readyRow("P6", dockLeft, 95, 105, 0, 25.4, { side: "left", captions: dockLeft.map(x => x.replace("IO", "").replace("LINEOUT_1P", "SPK")) }),
    ...readyRow("P5", dockRight, 345, 105, 0, 25.4, { side: "right", captions: dockRight.map(x => x.replace("IO", "")) }),
    ...readyRow("P7", "IO26 IO27 GND VBUS", 195, 583, 16, 0, { numbers: [4, 3, 2, 1], side: "top", captions: ["26", "27", "G", "5V"] }),
  ],
  draw: () => pcb(75, 30, 290, 590) + hole(94, 50) + hole(346, 50) + readyAntenna(148, 42, 145) +
    rect(130, 103, 183, 259, 3, "#a7ada4", "#e4e6dd") + label(222, 153, "M1S", 31, "#edf0e7") + label(222, 204, "Sipeed", 24, "#edf0e7") + label(222, 285, "BL808 / 64 MB", 12, "#e4e8df") +
    chip(238, 410, 38, 38, "UART", 6) + tactile(136, 435) + tactile(290, 435) + readySocket(143, 513, 155, 25, "LCD / CAMERA") +
    readySocket(177, 568, 87, 31, "") + usb(84, 604, 115) + usb(245, 604, 112) + label(140, 551, "UART", 8) + label(305, 551, "OTG", 8),
});

const m0Left = split("IO28 3V3 GND VSYS IO2 IO0 IO1 IO9"), m0Right = split("IO27 IO26 IO25 IO24 IO23 IO15 IO14 GND");
const m0 = readyBoard({
  id: "sipeed-maix-m0sense-30215", name: "Sipeed Maix M0sense 30215", short: "Maix M0sense", subtitle: "BL702 / QMI8658A / 30215 V1", width: 390, height: 460, boardBounds: [[56, 55, 278, 354]],
  source: wiki + "maixzero/sense/maix_zero_sense.html", cad: download + "Maix-Zero/M0sense/5_3D_file",
  description: "USB-C component-side view. All 16 edge contacts are located directly on the castellated/through-hole pads; J2 is the right physical edge and J3 the left, as in the manufacturer iBOM. Fine LCD FPC contacts on the reverse are outside the jumper-wire scope. BOOT is IO2. The blue/green/red LED shares IO23/24/25 with the LCD SPI interface. VSYS is the USB/system supply rail, not 3.3 V.",
  tags: ["sipeed", "maix", "m0sense", "m0 sense", "bl702", "risc-v", "ble", "imu", "qmi8658a", "tinyml"],
  functions: { IO28: "Boot-mode input.", IO2: "BOOT button.", IO1: "LCD chip select.", IO27: "IMU I²C SDA.", IO26: "IMU I²C SCL.", IO25: "LCD DC / red LED.", IO24: "LCD MOSI / green LED.", IO23: "LCD SCLK / blue LED." },
  contacts: [
    ...readyRow("J3", m0Left, 81, 101, 0, 38, { side: "left", captions: m0Left.map(x => x.replace("IO", "")), overrides: Object.fromEntries(m0Left.map((_, i) => [i, { labelDx: -36 }])) }),
    ...readyRow("J2", m0Right, 309, 101, 0, 38, { side: "right", captions: m0Right.map(x => x.replace("IO", "")), overrides: Object.fromEntries(m0Right.map((_, i) => [i, { labelDx: 36 }])) }),
  ],
  draw: () => pcb(56, 55, 278, 354) + Array.from({ length: 8 }, (_, i) => rect(56, 90 + i * 38, 33, 22, 4, "#bda865") + rect(301, 90 + i * 38, 33, 22, 4, "#bda865")).join("") +
    rect(137, 33, 116, 104, 3, "#a6b1ae", "#d9e0d5") + usb(137, 33, 116) +
    rect(112, 146, 65, 28, 10, "#e1e5d9", "#8c9b8e") + rect(213, 146, 65, 28, 10, "#e1e5d9", "#8c9b8e") +
    label(145, 185, "BOOT", 8) + label(246, 185, "RST", 8) + circle(195, 197, 7, "#8aaf82", "#d5e3ce") +
    chip(164, 235, 59, 59, "BL702", 9) + chip(126, 215, 28, 25, "IMU", 4) + rect(235, 339, 43, 28, 2, "#d8d7cc", "#9bafa1") +
    label(194, 386, "M0sense", 18) + label(194, 430, "30215 / component side", 8, "#405253"),
});

const m2 = readyBoard({
  id: "sipeed-maix-ii-dock-3072", name: "Sipeed Maix II Dock 3072", short: "Maix II Dock", subtitle: "Allwinner V831 / 3072 rev0.01", width: 460, height: 530, boardBounds: [[74, 46, 312, 450]],
  source: wiki + "maixII/M2/resources.html", cad: download + "MaixII/MaixII-Dock/HDK/Sipeed_MaixII_Dock_V831/MaixII_Dock_V831_v3072",
  description: "Display-side view with two USB-C sockets at the top. All 20 P5/P1 expansion contacts are exposed; physical numbers follow the 2021-03-30 schematic. The ADC0 contact is a dedicated analog input, not a 5 V GPIO; consult the V831 analog limits before use. Camera/LCD/NGFF, audio and microSD fitted ports are illustrated outside this expansion-header wire scope. PH12/PH11 I²C is shared with the onboard MSA301 and has 1.5 kΩ pull-ups to 3.3 V.",
  tags: ["sipeed", "maix", "maix ii", "maix2", "m2 dock", "v831", "allwinner", "linux", "camera"], types: { ADC0: "input" },
  functions: { PH12: "I²C2 SDA, shared with MSA301.", PH11: "I²C2 SCK, shared with MSA301.", PF6: "microSD card detect.", PH10: "UART0 RX.", PH9: "UART0 TX.", PG7: "UART1 RX.", PG6: "UART1 TX." },
  contacts: [
    ...readyRow("P5", "GND 5V PH6 PH7 PH8 ADC0 PH0 PH1 PH2 PH3", 94, 181, 0, 26, { side: "left" }),
    ...readyRow("P1", "PF6 RST PG7 PG6 PH12 PH11 PH14 PH13 PH10 PH9", 366, 181, 0, 26, { side: "right" }),
  ],
  draw: () => pcb(74, 46, 312, 450) + hole(94, 65) + hole(365, 65) + usb(109, 37, 86) + usb(250, 37, 86) +
    circle(230, 107, 22, "#242a29", "#a6b2a6") + chip(143, 113, 29, 25, "PMIC", 4) + chip(287, 111, 28, 27, "UART", 4) +
    rect(120, 168, 220, 272, 2, "#060b0e", "#4a6058") + path("M124 172H335L124 301Z", "#101c21") +
    rect(153, 440, 154, 24, 1, "#b88136", "#d7b16d") + label(229, 478, "Maix II Dock", 13) + readySocket(63, 103, 21, 57, "SPK", true) + readySocket(378, 103, 21, 57, "MIC", true),
});

const pro = readyBoard({
  id: "sipeed-maixcam-pro-60174", name: "Sipeed MaixCAM Pro 60174", short: "MaixCAM Pro", subtitle: "SG2002 / 60174 / 2024-11-15", width: 660, height: 540, boardBounds: [[73, 48, 490, 428]],
  source: wiki + "maixcam/maixcam_pro.html", cad: download + "MaixCAM/MaixCAM_Pro/05_3D_file",
  description: "Camera-side view, matching the manufacturer connector pin map. All 20 PMOD/servo socket contacts and the six external 1.25 mm extension contacts are shown. H2 carries fused VSYS, not 3.3 V; H3 is supplied from 3.3 V. The GPIO paths include 100 Ω series protection. H3.9 is A15/I²C5 SDA and H3.11 A27/I²C5 SCL according to the 60174 schematic; the marketing drawing swaps those two I²C captions. Use GPIO names to identify the physical contacts. The assembled camera, display, battery and internal CH32 programming pads are outside this external expansion scope.",
  tags: ["sipeed", "maix", "maixcam", "maixcam pro", "sg2002", "camera", "ai", "pmod", "servo", "linux"],
  functions: { A29: "UART2 RX / JTAG TDO.", A28: "UART2 TX / JTAG TDI.", A19: "UART1 TX / JTAG TMS.", A18: "UART1 RX / JTAG TCK.", A16: "UART0 TX.", A17: "UART0 RX.", A15: "I²C5 SDA in the exact 60174 schematic.", A27: "I²C5 SCL in the exact 60174 schematic.", A22: "SPI4 SCK.", A23: "SPI4 MISO.", A25: "SPI4 MOSI.", A24: "SPI4 CS." },
  contacts: [
    ...readyRow("H2", "A29 A19 VSYS GND", 118, 414, 27, 0, { numbers: [7, 5, 3, 1], side: "top", captions: ["29", "19", "VSYS", "G"] }),
    ...readyRow("H2", "A28 A18 VSYS GND", 118, 439, 27, 0, { numbers: [8, 6, 4, 2], side: "bottom", captions: ["28", "18", "VSYS", "G"] }),
    ...readyRow("H3", "3V3 GND A22 A23 A25 A24", 337, 414, 27, 0, { numbers: [2, 4, 6, 8, 10, 12], side: "top", captions: ["3V3", "G", "22", "23", "25", "24"] }),
    ...readyRow("H3", "3V3 GND A16 A17 A15 A27", 337, 439, 27, 0, { numbers: [1, 3, 5, 7, 9, 11], side: "bottom", captions: ["3V3", "G", "16", "17", "15", "27"] }),
    ...readyRow("U17", "A17 A16 A15 A27 VBUS GND", 553, 290, 0, 17, { numbers: [6, 5, 4, 3, 2, 1], side: "right", captions: ["17", "16", "15", "27", "5V", "G"] }),
  ],
  draw: () => pcb(73, 48, 490, 428) + hole(99, 75) + hole(538, 75) + hole(99, 449) + hole(538, 449) +
    rect(170, 130, 260, 215, 4, "#35433b", "#68766c") + chip(201, 178, 64, 63, "SG2002", 8) +
    rect(263, 215, 120, 120, 4, "#283239", "#aeb8ad") + circle(323, 275, 53, "#181f25", "#a6b1a7") + circle(323, 275, 32, "#080f18", "#4a5c67") + circle(323, 275, 15, "#142f40", "#416880") +
    rect(263, 96, 125, 62, 7, "#303535", "#718077") + Array.from({ length: 4 }, (_, i) => rect(278 + i * 25, 103, 14, 46, 6, "#171f21", "#414b45")).join("") +
    readySocket(103, 400, 113, 53, "") + readySocket(322, 400, 166, 53, "") + readySocket(541, 277, 24, 111, "", true) +
    usb(65, 303, 35) + label(184, 98, "MaixCAM", 23) + label(419, 181, "PRO", 18, "#ed7568") + label(326, 501, "60174 • camera side • H2 VSYS / H3 3.3V", 9, "#405253"),
});

const entries = [bit, duino, m1s, m1sDock, m0, m2, pro];
const sipeedMaixComponents = entries.map(entry => entry.component);
const sipeedMaixArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const sipeedMaixFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const sipeedMaixModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("sipeed-maix", (sipeedMaixComponents).map(component => ({ component, render: (sipeedMaixArt)[component.art], footprint: (sipeedMaixFootprints)[component.id], model: sipeedMaixModels[component.id] })));
