import { defineFamily } from "../registry.js";
import { lilygoFollowupMounting } from "../shared/lilygo-followup-mounting.js";
import { chip, circle, label, line, path, rect, tactile, usb } from "../shared/svg.js";
import { readyAntenna, readyBoard, readyRow, readySocket } from "../shared/wire-board.js";

const lora = "https://github.com/Xinyuan-LilyGO/LilyGo-LoRa-Series/blob/master/";
const repo = (name, branch, path) => `https://github.com/Xinyuan-LilyGO/${name}/blob/${branch}/${path}`;
const split = s => s.split(/\s+/);
const pcb = (x, y, w, h) => rect(x, y, w, h, 8, "#263331", "#7b8c81");
const hole = (x, y) => circle(x, y, 6, "#c7ad6b") + circle(x, y, 3.8, "#edf2ec");
const rf = (x, y, name = "ANT") => rect(x - 7, y - 7, 14, 14, 1, "#c9c4ad", "#e7e1cc") + circle(x, y, 4.5, "#b5a66c", "#eee2ab") + circle(x, y, 1.4, "#1c282a") + label(x + 12, y, name, 6, "#d6dfd2", "start");
const shield = (x, y, w, h, name, sub = "") => rect(x, y, w, h, 3, "#b3b7ad", "#e5e8dd") + rect(x + 4, y + 4, w - 8, h - 8, 1, "#a5aca2", "#cdd4c8") + label(x + w / 2, y + h / 2 - 8, name, 15, "#405049") + label(x + w / 2, y + h / 2 + 16, sub, 8, "#405049");
const rearCell = (x, y, w, h) => pcb(x, y, w, h) + rect(x + 12, y + 23, w - 24, h - 46, 6, "#171f23", "#596961") +
  path(`M${x + 22} ${y + h - 33}l14 -6l-14 -6l14 -6l-14 -6`, "none", "#b8c2b5", 2) +
  rect(x + 17, y + 28, w - 34, 9, 1, "#c6c8b6") + label(x + w / 2, y + h / 2, "18650", 9) + label(x + w / 2, y - 12, "REAR / battery holder", 7, "#435b5a");
const mainCaption = contacts => contacts.map(x => x.replace("GPIO", ""));

const beamLeft = split("GPIO36 GPIO39 RST GPIO15 GPIO35 GPIO32 GPIO33 GPIO25 GPIO14 GPIO13 GPIO2 GND VBUS");
const beamRight = split("GPIO1 GPIO3 GPIO23 GPIO4 GPIO0 GND DC1 GND GPIO22 GPIO21 3V3 GPIO32 GPIO33");
const beam = readyBoard({
  id: "lilygo-t-beam-v1-2-sx1276", name: "LILYGO T-Beam V1.2 SX1276", short: "T-Beam V1.2", subtitle: "ESP32 / AXP2101 / NEO-6M / SX1276", manufacturer: "LILYGO", width: 560, height: 780, esp32: true, boardBounds: [[75, 40, 273, 700], [399, 74, 100, 605]],
  source: lora + "schematic/LilyGo_TBeam_V1.2-lastest.pdf", cadLabel: "T-Beam V1.2 manufacturer schematic / power reference",
  description: "ESP32 component-side view, antenna at the top and NEO-6M at the bottom; the separate rear view shows the 18650 holder terminals. All 26 U12/U14 header contacts and two battery terminals are represented. This is the AXP2101 V1.2 revision; older AXP192 V1.1 power-rail assumptions do not apply. U14.7/11 share legacy net VCC_2_5V, linked to the 3.3 V board rail by R54; retain the factory 3.3 V PMIC setting. GPIO32/33 appear twice and share the LoRa DIO2/DIO1 paths through 22 Ω resistors. RF sockets, USB and GNSS antenna are illustrated fitted cable ports outside the jumper-wire scope.",
  tags: ["lilygo", "ttgo", "t-beam", "t beam", "esp32", "lora", "sx1276", "868mhz", "915mhz", "gps", "neo-6m", "axp2101", "meshtastic"],
  types: { DC1: "power_out" }, functions: { DC1: "AXP2101 DCDC1 / legacy VCC_2_5V net, linked to +3V3 by factory R54. Retain 3.3 V; it is not an independent variable peripheral supply.", GPIO34: "GNSS TX into ESP32 RX; not a free output.", GPIO12: "GNSS RX from ESP32 TX.", GPIO32: "Shared LoRa DIO2, through 22 Ω.", GPIO33: "Shared LoRa DIO1, through 22 Ω.", GPIO21: "PMIC I²C SDA.", GPIO22: "PMIC I²C SCL.", GPIO4: "Red status LED.", GPIO15: "ESP32 boot-strapping GPIO." },
  contacts: [
    ...readyRow("U12", beamLeft, 95, 118, 0, 24, { numbers: Array.from({ length: 13 }, (_, i) => 13 - i), side: "left", captions: mainCaption(beamLeft) }),
    ...readyRow("U14", beamRight, 328, 118, 0, 24, { side: "right", captions: mainCaption(beamRight) }),
    ...readyRow("P2", "VBAT GND", 444, 124, 0, 504, { numbers: [2, 1], side: "right", captions: ["BAT+", "BAT−"] }),
  ],
  draw: () => pcb(75, 40, 273, 700) + hole(94, 60) + hole(328, 60) + hole(94, 719) + hole(328, 719) +
    readyAntenna(146, 48, 132) + chip(164, 153, 81, 84, "ESP32", 11) + rf(283, 140, "WiFi") +
    chip(147, 337, 51, 50, "AXP2101", 7) + chip(219, 343, 38, 43, "UART", 5) + usb(62, 428, 35) +
    shield(111, 482, 125, 88, "LILYGO", "SX1276 868/915") + rect(292, 496, 62, 45, 2, "#b6a36e", "#ecdba4") + circle(338, 519, 19, "#b99f5e", "#e3d09a") +
    readySocket(160, 600, 90, 24, "GPS") + shield(153, 632, 96, 68, "NEO-6M") + circle(292, 674, 15, "#606c61", "#acb6aa") +
    label(209, 462, "T-Beam V1.2", 13) + rearCell(399, 74, 100, 605),
});

const supremePm = split("VBAT VBUS GND VSYS GND BLDO2 DC4 GND DC5 3V3 RST GPIO44 GPIO43");
const supremePn = split("NC GPIO17 GPIO18 GND ALDO1 GPIO46 GPIO45 GPIO39 GPIO38 GPIO2 GPIO3 GPIO21 GPIO48");
const supreme = readyBoard({
  id: "lilygo-t-beam-s3-supreme-v3-1", name: "LILYGO T-Beam S3 Supreme V3.1", short: "T-Beam Supreme", subtitle: "ESP32-S3 Core / SX1262 / MAX-M10S", manufacturer: "LILYGO", width: 780, height: 660, boardBounds: [[84, 65, 620, 318], [405, 423, 280, 200]],
  source: lora + "schematic/T-Beam-S3-Supreme/T-Beam-S3-Supreme-V3.1.pdf", cad: lora + "dimensions/T-BEAM-SUPREME-V3.0.DXF",
  description: "Component-side assembly with the OLED at the left, matching the manufacturer photo; lower inset is the rear battery/UART side. All 26 PN1/PM1 contacts, the four CNC1 UART contacts and two rear battery terminals are shown. PM1/PN1 physical numbers run top to bottom in this view. PN1.5 is ALDO1 with the fitted R24=0 Ω/R25=NC in the V3.1 schematic, although the older marketing drawing calls it ALDO2. DC4/DC5/BLDO2/ALDO1 are programmable PMIC outputs: configure and verify their voltage before use. The Core M.2 edge connector and fitted RF/display/card ports are outside this assembled-board jumper-wire scope.",
  tags: ["lilygo", "t-beam", "t beam supreme", "supreme", "esp32-s3", "sx1262", "lora", "meshtastic", "max-m10s", "gps", "gnss", "axp2101"],
  types: { ALDO1: "power_out", BLDO2: "power_out", DC4: "power_out", DC5: "power_out", GPIO46: "input" },
  functions: { ALDO1: "Factory R24 connects PN1.5 to ALDO1; R25 to ALDO2 is not fitted.", BLDO2: "Programmable AXP2101 BLDO2 output, 300 mA maximum.", DC4: "Programmable AXP2101 DCDC4 output; do not assume 3.3 V.", DC5: "Programmable AXP2101 DCDC5 output; do not assume 3.3 V.", GPIO17: "Shared I²C SDA.", GPIO18: "Shared I²C SCL.", GPIO2: "Radio-retain signal.", GPIO3: "GNSS PPS; shared status LED through 1 kΩ.", GPIO43: "UART0 TX.", GPIO44: "UART0 RX." },
  contacts: [
    ...readyRow("PM1", supremePm, 114, 103, 0, 18, { side: "left", captions: mainCaption(supremePm) }),
    ...readyRow("PN1", supremePn, 272, 103, 0, 18, { side: "right", captions: mainCaption(supremePn) }),
    ...readyRow("CNC1", "GND 3V3 GPIO43 GPIO44", 438, 508, 0, 18, { side: "left", captions: ["G", "3V3", "TX", "RX"] }),
    ...readyRow("PY1", "VBAT GND", 610, 453, 0, 138, { numbers: [2, 1], side: "right", captions: ["BAT+", "BAT−"] }),
  ],
  draw: () => pcb(84, 65, 620, 318) + hole(103, 85) + hole(684, 85) + hole(103, 363) + hole(684, 363) +
    rect(135, 122, 117, 181, 2, "#090f16", "#8ca293") + label(193, 200, "T-BEAM", 14, "#90c7cf") + label(193, 224, "SUPREME", 12, "#90c7cf") +
    pcb(354, 89, 287, 264) + chip(397, 124, 67, 66, "ESP32-S3", 9) + shield(489, 218, 112, 73, "SX1262") + shield(498, 114, 92, 65, "MAX-M10S") +
    readySocket(341, 92, 17, 257, "M.2", true) + usb(94, 338, 65) + tactile(174, 346) + tactile(201, 346) + tactile(228, 346) +
    rect(53, 171, 31, 47, 1, "#bda76e", "#ead9a1") + circle(59, 195, 12, "#bba064", "#ecdba6") +
    pcb(405, 423, 280, 200) + readySocket(423, 493, 29, 87, "", true) + rect(497, 438, 124, 170, 7, "#192127", "#758578") +
    rect(514, 446, 90, 15, 1, "#b9c1b3") + path("M520 590l60 -6l-60 -6l60 -6", "none", "#b9c1b3", 2) +
    label(547, 524, "18650", 13) + label(545, 407, "REAR / UART + battery holder", 10, "#405655"),
});

const t3Left = split("GPIO36 GPIO39 RST GPIO34 GPIO35 GPIO14 GPIO12 GPIO13 GPIO15 GPIO2 GPIO0 GPIO4 GPIO25");
const t3Right = split("GPIO21 GPIO1 GPIO3 GPIO22 GPIO23 GPIO19 GPIO32 GPIO33 GPIO26 GND 3V3 GND VBUS");
const t3 = readyBoard({
  id: "lilygo-t3-lora32-v1-6-1-sx1276", name: "LILYGO T3 LoRa32 V1.6.1 SX1276", short: "T3 LoRa32 V1.6.1", subtitle: "ESP32-PICO-D4 / 20210104 / SX1276", manufacturer: "LILYGO", width: 470, height: 640, esp32: true, boardBounds: [[74, 45, 302, 552]],
  source: lora + "schematic/T3_V1.6.1.pdf", cadLabel: "T3 V1.6.1 manufacturer schematic / connector reference",
  description: "Radio/component-side view with USB at the top. All 26 main-header contacts and the two fitted battery-socket contacts are represented. JP1/JP2 numbering follows the exact schematic; the right-hand photo row is JP1 and the left-hand row JP2. LoRa1/LoRa2 on the marketing drawing are GPIO33/32 through 22 Ω. The OLED and microSD are fitted ports on the opposite side; the two extra battery solder lands are outside this socket/header scope. Marketing also calls this family LoRa32 V2.1_1.6; it is not a separate electrical variant here.",
  tags: ["lilygo", "ttgo", "t3", "lora32", "lora32 v2.1", "v1.6.1", "esp32-pico-d4", "sx1276", "868mhz", "915mhz", "lora", "meshtastic"],
  functions: { GPIO32: "LoRa DIO2 through 22 Ω, also printed LoRa2.", GPIO33: "LoRa DIO1 through 22 Ω, also printed LoRa1.", GPIO26: "LoRa DIO0.", GPIO23: "LoRa RESET.", GPIO19: "LoRa MISO.", GPIO21: "OLED SDA.", GPIO22: "OLED SCL.", GPIO25: "Green status LED." },
  contacts: [
    ...readyRow("JP2", t3Left, 95, 106, 0, 27, { numbers: Array.from({ length: 13 }, (_, i) => 13 - i), side: "left", captions: mainCaption(t3Left) }),
    ...readyRow("JP1", t3Right, 355, 106, 0, 27, { numbers: Array.from({ length: 13 }, (_, i) => 13 - i), side: "right", captions: mainCaption(t3Right) }),
    ...readyRow("P2", "VBAT GND", 217, 563, 19, 0, { numbers: [2, 1], side: "bottom", captions: ["+", "−"] }),
  ],
  draw: () => pcb(74, 45, 302, 552) + hole(95, 65) + hole(355, 65) + hole(95, 576) + hole(355, 576) + usb(202, 33, 60) +
    chip(178, 132, 88, 90, "ESP32-PICO", 12) + chip(162, 292, 48, 46, "CP2104", 7) +
    shield(173, 366, 139, 118, "LILYGO", "SX1276 868/915") + rect(75, 391, 44, 45, 2, "#b9a064", "#dfca8c") + circle(91, 414, 16, "#ba9d60", "#ead8a2") +
    readySocket(192, 543, 65, 35, "") + label(229, 511, "T3_V1.6.1", 15) + label(228, 529, "20210104", 8),
});

const t3sLeft = split("GPIO16 GPIO15 RST GPIO8 GPIO12 GPIO48 GPIO47 GPIO33 GPIO34 GPIO35 GPIO0 GPIO36 GPIO37 GND");
const t3sRight = split("GPIO38 GPIO43 GPIO44 GPIO39 GPIO40 GPIO41 GPIO45 GPIO46 GPIO42 GND 3V3 GND VBUS VBAT");
const t3s = readyBoard({
  id: "lilygo-t3-s3-v1-3-sx1262", name: "LILYGO T3-S3 V1.3 SX1262", short: "T3-S3 V1.3", subtitle: "ESP32-S3FH4R2 / SX1262 / PCB 20250110", manufacturer: "LILYGO", width: 510, height: 730, boardBounds: [[80, 43, 316, 636]],
  source: "https://wiki.lilygo.cc/products/t3-series/t3-s3-v1.3/", cad: lora + "dimensions/T3S3%20V1.3.dxf",
  description: "Radio/component-side view of the official 20250110 V1.3 pinout photo, USB and both JST1.0 auxiliary sockets at the bottom. All 28 main-header contacts, eight auxiliary socket contacts, two battery contacts and two solar socket contacts are shown. Main-header terminal numbers use the actual printed pad names prefixed JP1/JP2, since the older schematic's GPIO8/12 order differs from this production photo; two right-side grounds are keyed GND1/GND2. GPIO10/21 at P3 remain tied to the radio TX/RX control until the two marked zero-ohm links are removed. Solar input is 4.5–5.6 V in the hardware guide. OLED and microSD fitted ports on the reverse are outside this wire-contact scope.",
  tags: ["lilygo", "ttgo", "t3-s3", "t3 s3", "esp32-s3", "sx1262", "lora", "meshtastic", "solar", "qwiic", "cn3065"],
  types: { SOLAR_IN: "power_in", GPIO46: "input" },
  functions: { GPIO8: "LoRa RESET.", GPIO33: "LoRa DIO1.", GPIO34: "LoRa BUSY.", GPIO43: "UART0 TX; main header and P1.3 share the net.", GPIO44: "UART0 RX; main header and P1.4 share the net.", GPIO10: "P3 TX/control: remove the radio-control link before using as free GPIO.", GPIO21: "P3 RX/control: remove the radio-control link before using as free GPIO.", SOLAR_IN: "CN3065 solar charging input; the manufacturer hardware guide specifies 4.5–5.6 V." },
  contacts: [
    ...readyRow("JP2", t3sLeft, 102, 118, 0, 26, { numbers: t3sLeft.map(x => x.replace("GPIO", "IO")), side: "left", captions: mainCaption(t3sLeft) }),
    ...readyRow("JP1", t3sRight, 373, 118, 0, 26, { numbers: t3sRight.map((x, i) => x === "GND" ? `GND${i === 9 ? 1 : 2}` : x.replace("GPIO", "IO")), side: "right", captions: mainCaption(t3sRight) }),
    ...readyRow("P1", "GND 3V3 GPIO43 GPIO44", 112, 656, 14, 0, { side: "bottom", captions: ["G", "3V", "TX", "RX"], overrides: { 0: { font: 6 }, 1: { font: 6 }, 2: { font: 6 }, 3: { font: 6 } } }),
    ...readyRow("P3", "GND 3V3 GPIO10 GPIO21", 201, 656, 14, 0, { side: "bottom", captions: ["G", "3V", "10", "21"], overrides: { 0: { font: 6 }, 1: { font: 6 }, 2: { font: 6 }, 3: { font: 6 } } }),
    ...readyRow("U4", "VBAT GND", 307, 619, 20, 0, { side: "top", captions: ["+", "−"] }),
    ...readyRow("J3", "GND SOLAR_IN", 385, 517, 0, 23, { side: "right", captions: ["G", "SOLAR"] }),
  ],
  draw: () => pcb(80, 43, 316, 636) + hole(101, 65) + hole(374, 65) + readyAntenna(135, 50, 188) + rf(348, 64, "WiFi") +
    chip(178, 157, 97, 92, "ESP32-S3", 13) + shield(172, 310, 146, 141, "LILYGO", "SX1262 868/915") + rf(102, 491, "LoRa") +
    readySocket(96, 641, 70, 34, "") + readySocket(185, 641, 70, 34, "") + readySocket(286, 600, 63, 45, "") +
    readySocket(373, 500, 27, 57, "", true) + rect(370, 580, 31, 55, 1, "#171f23", "#7e8b7c") +
    chip(223, 535, 43, 45, "CN3065", 5) + label(166, 557, "T3S3 V1.3", 10) + label(237, 704, "P1 UART / P3 GPIO10,21 • component side", 9, "#405655"),
});

const echo = readyBoard({
  id: "lilygo-t-echo-v1-0", name: "LILYGO T-Echo V1.0", short: "T-Echo", subtitle: "nRF52840 / SX1262 / L76K / 2021-03-26", manufacturer: "LILYGO", width: 490, height: 540, boardBounds: [[111, 100, 299, 368]],
  source: repo("T-Echo", "main", "schematic/T-Echo_Schematic.pdf"), cad: repo("T-Echo", "main", "dimensions/t-echo_3d.stl"),
  description: "Component-side view with USB-C and the battery socket at the right. The four SWD contacts and two battery contacts are the six wiring contacts in this entry; the device has no general-purpose GPIO expansion header. Display FPCs, RF/NFC sockets and the touch pad are shown as fitted cable/control ports. SWD pin1 is the board's switched nRF supply/reference, not a 5 V input. SWD pad geometry is representative, based on the manufacturer photo and electrical schematic; no official numbered pad-layout drawing is published. Verify the VDD/GND reference against the exact board before attaching a debug probe.",
  tags: ["lilygo", "t-echo", "t echo", "nrf52840", "nordic", "sx1262", "lora", "meshtastic", "softrf", "l76k", "gps", "e-paper", "epaper", "swd"],
  types: { VDD_nRF: "power_out", SWDCLK: "input", SWDIO: "bidirectional" },
  contacts: [
    ...readyRow("P2", "VDD_nRF GND SWDCLK SWDIO", 313, 78, 18, 7, { side: "top", captions: ["V", "G", "C", "D"], overrides: { 0: { font: 7 }, 1: { font: 7 }, 2: { font: 7 }, 3: { font: 7 } } }),
    ...readyRow("PY", "VBAT GND", 400, 239, 0, 25, { side: "right", captions: ["BAT+", "BAT−"] }),
  ],
  draw: () => path("M111 70H306L375 98H410V468H113L88 441V118H111Z", "#263331", "#819184", 1) + hole(149, 87) + hole(347, 451) +
    readySocket(92, 126, 25, 66, "EPD", true) + readySocket(92, 218, 25, 160, "24P", true) +
    chip(188, 173, 80, 79, "nRF52840", 11) + shield(179, 327, 128, 109, "LILYGO", "SX1262") + shield(325, 316, 66, 78, "L76K") +
    usb(392, 132, 37) + readySocket(388, 223, 27, 60, "", true) + rf(292, 79, "LoRa") + rf(373, 456, "GPS") +
    rect(86, 415, 18, 36, 1, "#aaa77b", "#d9d8b7") + label(146, 494, "T-Echo V1.0", 15, "#405655", "start") + label(146, 514, "SWD: V / G / CLK / DIO", 8, "#405655", "start"),
});

const cellLeft = split("3V3 GND GPIO32 GPIO33 GPIO34 GPIO35 GPIO25 GPIO26 GPIO27 GPIO4 GPIO2 GPIO15 GPIO14 GPIO13 GPIO12 VBAT");
const simLeft = split("3V3 GND GPIO32 GPIO33 GPIO34 GPIO35 GPIO26 GPIO25 GPIO27 GPIO4 GPIO2 GPIO15 GPIO14 GPIO13 GPIO12 VBAT");
const cellRight = split("GPIO1 GPIO3 3V3 GND GPIO22 GPIO21 GPIO23 GPIO19 GPIO18 GPIO5 GPIO39 GPIO36 GPIO0 RST GND VBUS");
const sim = readyBoard({
  id: "lilygo-t-sim7000g-20200415", name: "LILYGO T-SIM7000G 20200415", short: "T-SIM7000G", subtitle: "ESP32-WROVER / SIM7000G / PCB 2020-04-15", manufacturer: "LILYGO", width: 580, height: 900, esp32: true, boardBounds: [[75, 44, 276, 806], [410, 101, 104, 686]],
  source: repo("LilyGO-T-SIM7000G", "master", "schematic/SIM7000G_20200415.pdf"), cad: repo("LilyGO-T-SIM7000G", "master", "3D_file"),
  description: "ESP32 component-side view matching the official Historical/SIM7000G_20200415 pinout photo; a separate rear view shows the 18650 holder contacts. All 32 main-header contacts, two battery terminals and both solar socket contacts are represented. Main-header terminal numbers use the actual printed pad names prefixed U5/U6; two right-side grounds are keyed GND1/GND2. This avoids assigning speculative sequence numbers where the old schematic and actual photo disagree on GPIO25/26 order. Solar input is 4.4–6 V. Modem UART GPIO26/27 and PWRKEY GPIO4 are shared nets. RF, SIM and card contacts are outside this header/power scope.",
  tags: ["lilygo", "ttgo", "t-sim7000g", "sim7000g", "esp32", "lte-m", "nb-iot", "gsm", "gprs", "gnss", "gps", "solar", "18650", "cellular"],
  types: { SOLAR_IN: "power_in", "BAT−": "power_in" }, functions: { GPIO26: "Shared modem UART TX into SIM7000G.", GPIO27: "Shared modem UART RX from SIM7000G.", GPIO4: "Modem PWRKEY control.", GPIO12: "Blue LED and ESP32 boot strap.", GPIO35: "Battery-divider ADC input.", GPIO36: "Solar-divider ADC input.", SOLAR_IN: "Solar charging input, 4.4–6 V in the manufacturer schematic.", "BAT−": "Cell negative before the battery-protection MOSFET. Do not bypass the protection circuit by shorting this to board ground." },
  contacts: [
    ...readyRow("U5", simLeft, 95, 123, 0, 23, { numbers: simLeft.map(x => x.replace("GPIO", "IO")), side: "left", captions: mainCaption(simLeft) }),
    ...readyRow("U6", cellRight, 330, 123, 0, 23, { numbers: cellRight.map((x, i) => x === "GND" ? `GND${i === 3 ? 1 : 2}` : x.replace("GPIO", "IO")), side: "right", captions: mainCaption(cellRight) }),
    ...readyRow("J12", "SOLAR_IN GND", 81, 538, 0, 25, { numbers: [2, 1], side: "left", captions: ["SOL+", "G"] }),
    ...readyRow("P2", ["VBAT", "BAT−"], 460, 159, 0, 568, { numbers: [2, 1], side: "right", captions: ["BAT+", "BAT−"] }),
  ],
  draw: () => pcb(75, 44, 276, 806) + hole(94, 65) + hole(330, 65) + hole(94, 828) + hole(330, 828) +
    readyAntenna(137, 53, 151) + shield(147, 125, 145, 166, "ESP32", "WROVER") + tactile(298, 99) + chip(145, 387, 45, 43, "PMIC", 6) +
    usb(334, 532, 34) + readySocket(64, 523, 30, 56, "", true) + chip(205, 497, 46, 44, "CP2104", 6) +
    shield(119, 640, 190, 153, "SIMCOM", "SIM7000G") + rf(127, 817, "LTE") + rf(303, 817, "GNSS") + label(209, 611, "T-SIM7000G", 16) +
    rearCell(410, 101, 104, 686),
});

const a7670 = readyBoard({
  id: "lilygo-t-a7670x-v1-4", name: "LILYGO T-A7670X V1.4 (ESP32)", short: "T-A7670X V1.4", subtitle: "ESP32-WROVER / A7670 cellular carrier / 2024-05-23", manufacturer: "LILYGO", width: 580, height: 940, esp32: true, boardBounds: [[75, 44, 276, 850], [410, 110, 104, 724]],
  source: repo("LilyGO-T-A7670X", "main", "schematic/esp32/T-A7670X-V1.4.pdf"), cad: repo("LilyGO-T-A7670X", "main", "dimensions/esp32/T-A7670X-Board-3D.stp"),
  description: "ESP32 component-side view, rotated so the ESP32 antenna is at the top and modem at the bottom. All 32 PY/PX header contacts are shown. The rear 18650 holder and solar DC socket are drawn as fitted power ports outside this main-header scope; their exact mating geometry is not substituted with loose pads. Select an A7670 regional modem assembly using its fitted label; the ESP32 carrier pinout is common. GPIO25/26/27/33/4/5 are shared modem control/UART lines. GPIO35 and GPIO36 also serve the battery/solar monitor paths. This entry follows the V1.4 schematic, not the older V1.0 marketing photo.",
  tags: ["lilygo", "t-a7670x", "t a7670", "a7670", "a7670e", "a7670g", "a7670sa", "esp32", "lte", "4g", "cellular", "solar", "gnss", "18650"],
  functions: { GPIO26: "Shared modem UART TX.", GPIO27: "Shared modem UART RX.", GPIO4: "Shared modem PWRKEY control.", GPIO5: "Shared modem reset control.", GPIO25: "Shared modem control line; see V1.4 schematic.", GPIO33: "Shared modem control line; see V1.4 schematic.", GPIO35: "Battery voltage monitor input.", GPIO36: "Solar voltage monitor input through divider." },
  contacts: [
    ...readyRow("PY", cellLeft, 95, 126, 0, 23, { numbers: Array.from({ length: 16 }, (_, i) => 16 - i), side: "left", captions: mainCaption(cellLeft) }),
    ...readyRow("PX", cellRight, 330, 126, 0, 23, { side: "right", captions: mainCaption(cellRight) }),
  ],
  draw: () => pcb(75, 44, 276, 850) + hole(94, 65) + hole(330, 65) + hole(94, 871) + hole(330, 871) +
    readyAntenna(132, 53, 152) + shield(144, 124, 149, 179, "ESP32", "WROVER") + tactile(298, 180) + tactile(298, 211) +
    chip(130, 391, 49, 49, "PMIC", 7) + rect(228, 392, 52, 47, 2, "#626b5e", "#a8b2a0") + label(254, 417, "100", 11) +
    usb(334, 550, 34) + readySocket(64, 524, 30, 65, "DC", true) + readySocket(132, 535, 80, 89, "SIM") + chip(239, 557, 44, 42, "CP2104", 6) +
    shield(117, 676, 192, 155, "SIMCOM", "A7670 regional module") + rf(129, 853, "GNSS") + rf(288, 853, "LTE") + label(205, 650, "T-A7670X V1.4", 13) +
    rearCell(410, 110, 104, 724),
});

const entries = [beam, supreme, t3, t3s, echo, sim, a7670];
const lilygoWirelessComponents = entries.map(entry => entry.component);
const lilygoWirelessArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const lilygoWirelessFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const lilygoWirelessModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));
const lilygoWirelessMountings = Object.fromEntries(entries.map(entry => [entry.component.id,
  lilygoFollowupMounting(entry, [80, 43, 316, 636])]));

export default defineFamily("lilygo-wireless", (lilygoWirelessComponents).map(component => ({ component, render: (lilygoWirelessArt)[component.art], footprint: (lilygoWirelessFootprints)[component.id], model: lilygoWirelessModels[component.id],
  ...(lilygoWirelessMountings[component.id] ? { mounting: lilygoWirelessMountings[component.id] } : {}) })));
