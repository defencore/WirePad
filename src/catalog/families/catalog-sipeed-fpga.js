import { megaSomContacts, primer20SomContacts } from "../data/sipeed-fpga/som-contact-tables.js";
import { defineFamily } from "../registry.js";
import { chip, circle, label, line, path, rect } from "../shared/svg.js";
import { sipeedBoard } from "../shared/sipeed-board.js";
import { miniComputingMounting } from "../shared/mini-computing-mounting.js";
import { miniComputingFollowupMounting } from "../shared/mini-computing-followup-mounting.js";

const wiki = "https://wiki.sipeed.com/hardware/en/";

// Physical contact positions follow manufacturer component-side photos and assembly drawings.
// Connector-side views are mirrored horizontally from the PCB top coordinate system.

const numeric = values => values.split(" ").map(value => /^\d+$/.test(value) ? `${value}|FPGA package pin ${value}.` : value);
const nanoCad = (path) => ({ label: "Sipeed manufacturer STEP/CAD files", url: `https://dl.sipeed.com/shareURL/TANG/${path}` });
const nano1k = sipeedBoard({
  id: "sipeed-tang-nano-1k", name: "Sipeed Tang Nano 1K", shortName: "Tang Nano 1K", subtitle: "6100 / GW1NZ-LV1QN48",
  description: "Gowin GW1NZ-LV1 development board with BL702 USB-JTAG, RGB LCD FPC and user buttons.",
  revision: "6100", scope: "both 20-contact expansion rows and both two-contact JTAG pad pairs", size: [22.86, 63.5], chip: "GW1NZ-1", color: "#292d30", edgeRows: 20,
  source: `${wiki}tang/Tang-Nano-1K/Nano-1k.html`, tags: ["gowin", "fpga", "tang", "1k", "bl702"],
  model: nanoCad("Nano%201K/5_3D_file"), sockets: [["usb", 35, -2, 30, 15], ["fpc", 25, 108, 50, 14]],
}, [
  { name: "P4", side: "left", first: 20, step: -1, labels: numeric("13 5V 5V GND GND 47 45 46 11 9 10 24 23 22 18 17 16 15 27 28") },
  { name: "P5", side: "right", first: 20, step: -1, labels: numeric("44 GND GND 3V3 3V3 BL27 BL26 BL23 40 41 38 39 42 35 34 20 19 29 30 31") },
  { name: "P2", side: "bottom", start: 70, labels: ["TMS|FPGA JTAG mode select.|input", "TDI|FPGA JTAG data input.|input"] },
  { name: "P3", side: "bottom", start: 150, labels: ["TCK|FPGA JTAG clock.|input", "TDO|FPGA JTAG data output.|output"] },
]);

const nano4k = sipeedBoard({
  id: "sipeed-tang-nano-4k", name: "Sipeed Tang Nano 4K", shortName: "Tang Nano 4K", subtitle: "3603 / GW1NSR-LV4CQN48P",
  description: "Gowin FPGA with a hard Cortex-M3, external flash, HDMI output, camera FPC and BL702 USB-JTAG. Expansion contacts span 1.8 V, 2.5 V and 3.3 V banks.",
  revision: "3603", scope: "both 22-contact expansion headers", size: [22.86, 75], chip: "GW1NSR-4C", color: "#272c2f", edgeRows: 22,
  source: `${wiki}tang/Tang-Nano-4K/Nano-4K.html`, tags: ["gowin", "fpga", "tang", "4k", "cortex-m3", "hdmi", "camera"],
  model: nanoCad("Nano%204K/HDK/05_3D%20file"), sockets: [["usb", 35, -2, 30, 15], ["fpc", 20, 65, 60, 13], ["hdmi", 25, 144, 50, 18]],
}, [
  { name: "P6", side: "left", first: 22, step: -1, labels: numeric("15 5V GND GND 1V8 2 33 8 9 16 13 17 18 19 20 21 22 23 27 28 29 30").map((v, i) => /^(15|16|13|17|18|19|20|21|22|23)\|/.test(v) ? `${v} 1.8 V bank.` : i > 17 ? `${v} 2.5 V HDMI bank.` : v), voltage: "Bank-specific voltage" },
  { name: "P7", side: "right", first: 22, step: -1, labels: numeric("14 7 4 3 6 3V3 2V5 44 46 1 48 47 43 42 41 40 39 10 35 34 32 31"), voltage: "Bank-specific voltage. JTAG pins 7/4/3/6 use 3.3 V; camera and HDMI pins use 2.5 V; key pin 14 uses 1.8 V" },
]);

const nano9k = sipeedBoard({
  id: "sipeed-tang-nano-9k", name: "Sipeed Tang Nano 9K", shortName: "Tang Nano 9K", subtitle: "3672 / GW1NR-LV9QN88P",
  description: "Gowin GW1NR-9 with integrated 64 Mbit PSRAM, HDMI, LCD connectors, microSD and BL702 USB-JTAG/UART. The upper contacts on the right are a 1.8 V I/O bank.",
  revision: "3672", scope: "J5 and J6 24-contact expansion rows", size: [22.86, 76.2], chip: "GW1NR-9", edgeRows: 24, source: `${wiki}tang/Tang-Nano-9K/Nano-9K.html`,
  tags: ["gowin", "fpga", "tang", "9k", "hdmi", "psram"], model: nanoCad("Nano%209K/5_3D_file"), sockets: [["usb", 35, -2, 30, 15], ["fpc", 23, 123, 54, 10], ["hdmi", 25, 145, 50, 18]],
}, [
  { name: "J5", side: "left", labels: numeric("38 37 36 39 25 26 27 28 29 30 33 34 40 35 41 42 51 53 54 55 56 57 68 69") },
  { name: "J6", side: "right", labels: numeric("63 86 85 84 83 82 81 80 79 77 76 75 74 73 72 71 70 5V 48 49 31 32 GND 3V3").map((v, i) => i > 0 && i < 9 ? `${v} 1.8 V bank.` : v), voltage: "Bank-specific voltage; contacts J6.2 through J6.9 use 1.8 V" },
]);

const nano20k = sipeedBoard({
  id: "sipeed-tang-nano-20k", name: "Sipeed Tang Nano 20K", shortName: "Tang Nano 20K", subtitle: "3923 / GW2AR-LV18QN88C8",
  description: "Revision 3923 dated 2026-10-28, with BL616 debugger, 64 Mbit embedded SDRAM, HDMI, microSD, display FPC, Si5351 clock generator and audio output. The 40 expansion contacts retain the documented Nano 20K assignment.",
  revision: "3923 rev1.31", scope: "J6 and J5 20-contact expansion rows", size: [25.4, 75], chip: "GW2AR-18", speaker: true, edgeRows: 20,
  source: `${wiki}tang/tang-nano-20k/nano-20k.html`, tags: ["gowin", "fpga", "tang", "20k", "sdram", "hdmi", "bl616"],
  model: nanoCad("Nano_20K/5_3D_file"), sockets: [["usb", 35, -2, 30, 15], ["sd", 32, 87, 36, 20], ["fpc", 22, 127, 56, 9], ["hdmi", 23, 144, 54, 18]],
}, [
  { name: "J6", side: "left", labels: numeric("73 74 75 85 77 15 16 27 28 25 26 29 30 31 17 20 19 18 3V3 GND") },
  { name: "J5", side: "right", labels: numeric("5V GND 76 80 42 41 56 54 51 48 55 49 86 79 GND 3V3 72 71 53 52") },
]);

const words = value => value.trim().split(/\s+/);
const pairRows = (odd, even) => words(odd).flatMap((value, index) => [value, words(even)[index]]);
const bank = (name, side, value, extra = {}) => ({ name, side, labels: typeof value === "string" ? words(value) : value, ...extra });
const pmod = (name, side, io, extra = {}) => bank(name, side, `3V3 3V3 GND GND ${io}`, { foot: { columns: 2 }, ...extra });

const nanoOriginal = sipeedBoard({
  id: "sipeed-tang-nano", name: "Sipeed Tang Nano (original)", shortName: "Tang Nano", subtitle: "GW1N-LV1QN48 / CH552",
  description: "Original GW1N-1 Nano with CH552 USB debugger, PSRAM, RGB LCD connector and RGB LED. This is the original board, electrically distinct from Nano 1K.",
  revision: "Original GW1N-1", scope: "40 expansion contacts and four JTAG pads; contact numbers denote the FPGA package pad printed in the manufacturer pin diagram", size: [22.86, 63.5], chip: "GW1N-1", edgeRows: 20,
  source: "https://wiki.sipeed.com/hardware/en/tang/Tang-Nano/Nano.html", tags: ["gowin", "tang", "original", "ch552", "psram"],
  sockets: [["usb", 35, 146, 30, 15], ["fpc", 20, 12, 15, 76]],
}, [
  { name: "LEFT", side: "left", labels: numeric("38 39 40 41 42 43 44 45 11 10 46 5 8 9 13 3V3 3V3 GND GND 14"), numbers: words("38 39 40 41 42 43 44 45 11 10 46 5 8 9 13 V1 V2 G1 G2 14") },
  { name: "RIGHT", side: "right", labels: numeric("27 28 29 30 31 32 33 34 16 17 18 20 21 22 24 19 23 5V 5V 15"), numbers: words("27 28 29 30 31 32 33 34 16 17 18 20 21 22 24 19 23 V1 V2 15") },
  { name: "JTAG", side: "bottom", start: 90, labels: ["TCK|FPGA pad 4.|input", "TDO|FPGA pad 7.|output", "TMS|FPGA pad 3.|input", "TDI|FPGA pad 6.|input"], numbers: [4, 7, 3, 6] },
]);

const primer20Lite = sipeedBoard({
  id: "sipeed-tang-primer-20k-lite", name: "Sipeed Tang Primer 20K + Lite Dock", shortName: "Primer 20K Lite", subtitle: "SOM 3961 / Lite Dock 3711 rev1.2",
  description: "GW2A-LV18 SOM with DDR3 in a 204-contact SODIMM socket. The Lite carrier exposes both 40-contact rows and four 12-contact PMOD headers; bank 4 pins are 1.5 V, and two switches select the carrier bank feeds.",
  revision: "3711 rev1.2 (2024-06-18)", scope: "J1/J3 40-contact rows and J2/J6/J7/J8 12-contact headers, including power, configuration and JTAG contacts", size: [90, 55], chip: "GW2A-18", som: true, somBounds: [12, 48, 75, 85], ddr: true, sodimm: true, sodimmY: 30, mountHoles: true,
  canvasWidth: 420, source: `${wiki}tang/tang-primer-20k/primer-20k.html`, tags: ["gowin", "fpga", "primer", "20k", "lite", "ddr3", "sodimm"],
  model: { label: "Sipeed mechanical drawings", url: "https://dl.sipeed.com/shareURL/TANG/Primer_20K/08_Dimensions" }, sockets: [],
}, [
  { name: "J1", side: "left", labels: pairRows("3V3 5V GND T5 T3 VCCO01 E9 T15 T13 B10 H12 H13 K12 L13 R11 P11 G16 H16 K16 K15", "3V3 5V GND GND T4 VCCO7 E8 C13 M11 A13 G11 J12 K13 K11 T12 T11 H15 H14 J15 K14"), voltage: "Bank-specific voltage; T3/T4/T5/E8/E9 use 1.5 V", foot: { columns: 2 } },
  { name: "J3", side: "right", labels: pairRows("3V3 N6 B11 L9 R9 TDI TDO C10 A11 B12 B13 B14 D14 F16 G15 J14 G12 M14 T14 P13", "GND N7 A12 N8 N9 TCK TMS GND C11 C12 A14 A15 E15 F14 G14 J16 F13 M15 R13 R12"), foot: { columns: 2 } },
  pmod("J2", "left", "L12 J11 C9 A9 D16 E14 F15 E16"),
  pmod("J6", "right", "D11 F10 E10 D10 P7 R7 L8 M6"),
  pmod("J7", "left", "T9 P9 T8 P8 T7 R8 T6 P6"),
  pmod("J8", "right", "L16 L14 N16 N14 P16 N15 R16 P15"),
]);

const primer20Dock = sipeedBoard({
  id: "sipeed-tang-primer-20k-dock", name: "Sipeed Tang Primer 20K + Dock", shortName: "Primer 20K Dock", subtitle: "Dock 3714 / GW2A-LV18PG256",
  description: "Full-featured Primer 20K carrier with USB-C debugger and USB PHY, Ethernet, HDMI, RGB LCD and DVP camera FPCs, audio jack, microphone connector and user keys. Expansion nets are named as in the 3714 schematic.",
  revision: "3714 (3713 anniversary circuit)", scope: "all four 12-contact extension headers, touch header J4, camera FPC J11 and microphone FPC J15", size: [100, 80], chip: "GW2A-18", som: true, somBounds: [15, 44, 70, 65], ddr: true, sodimm: true, sodimmY: 37, mountHoles: true, canvasWidth: 420,
  source: `${wiki}tang/tang-primer-20k/primer-20k.html`, tags: ["gowin", "fpga", "primer", "20k", "dock", "ethernet", "hdmi", "camera"], model: { label: "Sipeed mechanical drawings", url: "https://dl.sipeed.com/shareURL/TANG/Primer_20K/08_Dimensions" },
  sockets: [["fpc", 8, -2, 24, 10], ["fpc", 34, -2, 18, 10], ["fpc", 56, -2, 12, 8], ["fpc", 74, -2, 13, 8], ["sd", 6, 141, 16, 20], ["rj45", 22, 135, 23, 28], ["usb", 48, 143, 16, 20], ["usb", 67, 143, 14, 20], ["usb", 83, 143, 14, 20], ["fpc", 67, 112, 14, 8]],
}, [
  pmod("J5", "left", "R0 R1 R2 R3 R4 G0 G1 G2"),
  pmod("J6", "right", "B0 B1 B2 B3 B4 HSYNC VSYNC DE"),
  pmod("J12", "left", "D7 D6 D5 D4 D0 D3 D1 D2"),
  pmod("J14", "right", "MIC_CLK MIC_LED MIC_D1 MIC_D0 MIC_D2 MIC_D3 MIC_BCK MIC_WS", { voltage: "1.5 V microphone data signals; LED interface is 3.3 V" }),
  bank("J4", "right", "TP_RST 3V3 GND TP_INT TP_SDA TP_SCK"),
  bank("J11", "left", "NC GND 3V0 SDA SCL RESET VSYNC PWDN HREF 1V5 2V8 D7 XCLK D6 GND D5 PCLK D4 D0 D3 D1 D2 NC GND", { voltage: "2.8 V camera I/O" }),
  bank("J15", "right", "MIC_CLK MIC_LED MIC_D0 MIC_D1 MIC_D2 MIC_D3 MIC_WS MIC_BCK 5V GND", { voltage: "1.5 V microphone data signals" }),
]);

const primer25Contacts = {
  J1: pairRows("GND L9 K9 J8 K8 F7 F6 GND E8 B3 C3 E3 D7 GND VCCIO67 VCCIO67 J11 J10 H11 H10 G11 G10 GND D11 D10 C11 C10 B11 B10 GND", "GND H5 J5 L5 K5 H8 H7 G7 G8 F5 G5 VCCIO01 VCCIO01 GND L6 K6 K7 J7 L7 L8 L10 K10 K11 L11 GND E11 E10 A11 A10 GND"),
  J2: pairRows("GND B2 C2 F2 F1 A1 D8 E1 D1 GND TCK TMS TDO TDI GND MIPI_D3+ MIPI_D3- GND MIPI_D2+ MIPI_D2- GND MIPI_CK+ MIPI_CK- GND MIPI_D1+ MIPI_D1- GND MIPI_D0+ MIPI_D0- GND", "VCCIO23 VCCIO23 L2 L1 K1 K2 J4 K4 G2 G1 L4 L3 J1 J2 G4 H4 H1 H2 1V8 1V8 2V5 2V5 3V3 3V3 3V3 5V 5V 5V 5V 5V"),
};
const primer25Som = sipeedBoard({
  id: "sipeed-tang-primer-25k-som", name: "Sipeed Tang Primer 25K SOM", shortName: "Primer 25K SOM", subtitle: "52300 / GW5A-LV25MG121",
  description: "23 × 18 mm GW5A-25 core board with external SDRAM and 76 GPIOs plus hard four-lane MIPI D-PHY. VCCIO01, VCCIO23 and VCCIO67 are separate user-supplied bank rails; MIPI differential contacts are not ordinary 3.3 V GPIO.",
  revision: "52300", scope: "all 120 contacts on the two DF40C-60DP-0.4V board-to-board connectors", size: [23, 18], chip: "GW5A-25", ddr: true, buttons: false, canvasWidth: 360,
  source: `${wiki}tang/tang-primer-25k/primer-25k.html`, tags: ["gowin", "fpga", "primer", "25k", "som", "mipi", "df40"], model: nanoCad("Primer_25K/05_3D_file"),
  footnote: "All 120 connector-qualified contacts are represented as off-board cable terminals. This is not a DF40C mating footprint; use the official connector CAD and bottom-view pin map for a carrier PCB.",
}, [
  { name: "J1", side: "left", labels: primer25Contacts.J1, voltage: "Bank-dependent voltage; see VCCIO01 / VCCIO67", foot: { columns: 2 } },
  { name: "J2", side: "right", labels: primer25Contacts.J2, voltage: "Bank-dependent voltage or dedicated MIPI D-PHY signal", foot: { columns: 2 } },
]);
const primer25Dock = sipeedBoard({
  id: "sipeed-tang-primer-25k-dock", name: "Sipeed Tang Primer 25K + Dock", shortName: "Primer 25K Dock", subtitle: "Dock 60033 / SOM 52300",
  description: "GW5A-25 SOM fitted to its USB-C/USB-A carrier with BL616 USB-JTAG/UART, 40-contact GPIO, three PMOD sockets and two user buttons. Carrier bank rails are 3.3 V.",
  revision: "60033", scope: "J3 40-contact header, J4/J5/J6 PMOD sockets and J7 eight-contact debugger header", size: [65, 40], chip: "GW5A-25", som: true, mountHoles: true, canvasWidth: 420,
  source: `${wiki}tang/tang-primer-25k/primer-25k.html`, tags: ["gowin", "fpga", "primer", "25k", "dock", "pmod", "bl616"], model: nanoCad("Primer_25K/05_3D_file"),
  sockets: [["usb", -3, 48, 20, 39], ["usb", 87, 48, 16, 28]],
  extraArt: () => [7, 37, 67].map(x => rect(x, 118, 26, 37, 1, "#131e22", "#788279")).join(""),
}, [
  { name: "J3", side: "left", labels: pairRows("K2 L1 K4 G1 L3 5V C2 F1 A1 D1 J2 H4 H2 J7 L8 K10 K9 K8 F6 J10", "K1 L2 J4 G2 L4 GND B2 F2 E1 E3 J1 G4 H1 K7 L7 L10 L9 J8 F7 J11"), foot: { columns: 2 } },
  pmod("J4", "right", "C11 C10 B11 B10 D11 D10 G11 G10"),
  pmod("J5", "right", "L5 K5 K11 L11 E11 E10 A11 A10"),
  pmod("J6", "right", "H5 J5 H8 H7 G7 G8 F5 G5"),
  bank("J7", "left", "TMS TDI TCK 5V TDO GND BL_EN GND", { foot: { columns: 2 }, voltage: "JTAG 3.3 V; BL616 enable" }),
]);

const sdramPins = index => words(`D0 D1 D2 D3 D4 D5 D6 D7 D15 D14 5V GND D13 D12 D11 D10 D9 D8 A12 CLK A9 A11 A7 A8 A5 A6 WE A4 EXIO0 EXIO1 CAS RAS CS BA0 BA1 A10 A0 A1 A2 A3`).map(value => ["5V", "GND"].includes(value) ? value : `${value}|SDRAM${index}_${value}; expansion net may share camera or other functions.`);
const megaPmod = (name, side, index, pro = false) => pmod(name, side, pro ? `IO3 IO7 IO2 IO6 IO1 IO5 IO0 IO4` : `IO6 IO7 IO4 IO5 IO2 IO3 IO0 IO1`, { voltage: `PMOD${index} bank supply, normally 3.3 V` });

function megaNeo(kind) {
  return sipeedBoard({
    id: `sipeed-tang-mega-${kind}k-neo`, name: `Sipeed Tang Mega ${kind}K + NEO Dock`, shortName: `Mega ${kind}K NEO`, subtitle: `NEO Dock 31005 / GW5A${kind === 138 ? "ST" : "T"}-LV${kind}PG484A`,
    description: "Gowin Arora V SOM on the NEO carrier with dual SDRAM expansion ports, PCIe edge, Ethernet, HDMI, USB, microSD, camera/LCD and audio. Both 40-contact expansion connectors are retained; SDRAM1 shares camera and PMOD signals.",
    revision: kind === 138 ? "31005 rev1.3" : "31004 rev1.2", scope: "J13/J14 40-contact expansion rows, J8/J9 PMOD sockets, J11 ADC header and J32 ten-contact FPC extension", size: [120, 80], chip: `${kind}K`, som: true, ddr: true, pcie: true, mountHoles: true, canvasWidth: 460,
    source: `${wiki}tang/tang-mega-${kind}k/mega-${kind}k.html`, tags: ["gowin", "fpga", "mega", `${kind}k`, "neo", "pcie", "ethernet", "sdram"], model: nanoCad("Mega_138K_60K/05_3D_file"),
    sockets: [["usb", -3, 50, 17, 20], ["rj45", -3, 85, 24, 35], ["hdmi", 49, -3, 24, 18], ["usb", 76, -3, 20, 21], ["fpc", 33, 14, 4, 37]],
    extraArt: () => rect(87, 62, 9, 35, 1, "#416baa", "#8eacc2") + [70, 80, 90].map(y => circle(91, y, 2, "#cdd1b7")).join(""),
  }, [
    { name: "J13", side: "left", labels: sdramPins(0), foot: { columns: 2 } },
    { name: "J14", side: "right", labels: sdramPins(1), foot: { columns: 2 } },
    megaPmod("J8", "left", 1), megaPmod("J9", "right", 0),
    bank("J11", "left", "ADCV_N ADCV_P GND GND ADCT_N ADCT_P", { foot: { columns: 2 }, voltage: "Dedicated analog ADC inputs" }),
    bank("J32", "right", "IO0 IO1 IO2 IO3 IO4 IO5 IO6 IO7 5V GND"),
  ]);
}
const mega138Neo = megaNeo(138);
const mega60Neo = megaNeo(60);
function consoleBoard(kind) {
  return sipeedBoard({
    id: `sipeed-tang-console-${kind}k`, name: `Sipeed Tang Console ${kind}K`, shortName: `Console ${kind}K`, subtitle: "32001C rev1.3 / Mega SOM",
    description: "Compact retro-computing carrier fitted with a Mega SOM. Two 40-contact expansion headers support SDRAM/GBA modules; two PMODs support joystick/custom modules. The carrier includes USB-C, HDMI, microSD, battery/speaker sockets and a Raspberry Pi 5 PCIe FPC connector.",
    revision: "32001C rev1.3", scope: "J9/J10 40-contact expansion headers and J6/J7 PMOD sockets", size: [65, 56], chip: `${kind}K`, som: true, ddr: true, speaker: true, mountHoles: true, canvasWidth: 440,
    source: `${wiki}tang/tang-console/retro-console.html`, tags: ["gowin", "fpga", "console", "retro", `${kind}k`, "pmod", "sdram", "gba"], model: nanoCad("Console/05_3D_file"),
    sockets: [["usb", -2, 58, 15, 21], ["hdmi", -2, 89, 16, 23], ["fpc", -2, 24, 6, 25], ["sd", 72, 32, 25, 24]],
    extraArt: () => rect(87, 61, 14, 53, 1, "#152026", "#6e7f80"),
  }, [
    { name: "J9", side: "left", labels: sdramPins(0), foot: { columns: 2 } },
    { name: "J10", side: "right", labels: sdramPins(1), foot: { columns: 2 } },
    megaPmod("J6", "left", 0), megaPmod("J7", "right", 1),
  ]);
}
const console138 = consoleBoard(138);
const console60 = consoleBoard(60);
const megaPro = sipeedBoard({
  id: "sipeed-tang-mega-138k-pro-dock", name: "Sipeed Tang Mega 138K Pro + Dock", shortName: "Mega 138K Pro", subtitle: "SOM 4072 / Pro Dock 4071f",
  description: "GW5AST-LV138FPG676A SOM and Pro carrier with DDR3, PCIe x4, dual SFP cages, dual HDMI, M.2, USB, Ethernet and camera/display interfaces. PMOD0 serial-configuration pins are shared and must be used according to FPGA mode.",
  revision: "4071f rev1.2", scope: "J23 SDRAM 40-contact header, J22/J24/J26 PMOD sockets, both ADC headers and J28 microphone FPC", size: [180, 130], chip: "GW5AST-138", som: true, ddr: true, pcie: true, mountHoles: true, canvasWidth: 480,
  source: `${wiki}tang/tang-mega-138k/mega-138k-pro.html`, tags: ["gowin", "fpga", "mega", "138k", "pro", "sfp", "pcie", "m2", "ddr3"], model: nanoCad("Mega_138K_Pro/05_3D_file"),
  sockets: [["rj45", -3, 22, 20, 30], ["usb", -3, 59, 17, 20], ["hdmi", 25, -3, 23, 17], ["hdmi", 52, -3, 23, 17], ["sd", 6, 121, 23, 23], ["fpc", 73, 80, 25, 8]],
  extraArt: () => rect(78, 22, 25, 23, 1, "#b2b8b6", "#e1e1d6") + rect(78, 49, 25, 23, 1, "#b2b8b6", "#e1e1d6") + rect(22, 97, 55, 10, 1, "#e4ded0", "#a5afa6"),
}, [
  { name: "J23", side: "left", labels: sdramPins("").map(value => value.replace("EXIO0", "DM0").replace("EXIO1", "DM1")), foot: { columns: 2 } },
  megaPmod("J22", "right", 0, true), megaPmod("J24", "right", 1, true), megaPmod("J26", "right", 2, true),
  bank("J3", "left", "ADCV_P GND ADCV_N GND", { voltage: "Dedicated analog voltage ADC input", foot: { columns: 2 } }),
  bank("J4", "left", "ADCT_N GND ADCT_P GND", { voltage: "Dedicated analog temperature ADC input", foot: { columns: 2 } }),
  bank("J28", "left", "LED_CLK LED_DAT MIC_D0 MIC_D1 MIC_D2 MIC_D3 MIC_WS MIC_BCK 5V GND"),
]);

// Connector data transcribed from Sipeed 30353 schematics and the 4072 manufacturer pin-length workbook.

function megaSom(kind) {
  const pro = kind === "pro";
  return sipeedBoard({
    id: pro ? "sipeed-tang-mega-138k-pro-som" : `sipeed-tang-mega-${kind}k-som`, name: pro ? "Sipeed Tang Mega 138K Pro SOM" : `Sipeed Tang Mega ${kind}K SOM`, shortName: pro ? "Mega Pro SOM" : `Mega ${kind}K SOM`,
    subtitle: pro ? "4072 / GW5AST-LV138FPG676A" : `30353 / GW5A${kind === 138 ? "ST" : "T"}-LV${kind}PG484A`,
    description: `Gowin Arora V core module with DDR3 and separate carrier-supplied I/O bank rails. ${pro ? "Three 120-contact DF40C connectors expose the complete documented interface, including MIPI and two transceiver quads." : "Two 100-contact and one 80-contact DF40C connectors expose the complete documented interface, including four transceiver lanes and ADC inputs."} Differential transceiver, ADC and MIPI contacts require their dedicated electrical interfaces.`,
    revision: pro ? "4072 rev1.10" : "30353", scope: pro ? "all 360 signal/power contacts on J1/J2/J3; grounded connector retention tabs are mechanical" : "all 280 signal/power contacts on C2399/C2400/BTB9900; grounded connector retention tabs are mechanical", size: pro ? [80, 55] : [60, 45], chip: pro ? "GW5AST-138" : `${kind}K`, ddr: true, mountHoles: true, buttons: false, canvasWidth: 440,
    source: `${wiki}tang/tang-mega-${kind === "pro" ? 138 : kind}k/mega-${kind === "pro" ? "138k-pro" : `${kind}k`}.html`, tags: ["gowin", "fpga", "mega", "som", pro ? "pro" : `${kind}k`, "ddr3", "df40"], model: nanoCad(pro ? "Mega_138K_Pro/05_3D_file" : "Mega_138K_60K/05_3D_file"),
    footnote: "Complete connector contact set in an off-board reference carrier. The pad banks are cable terminations, not a DF40C mating pattern. Consult the bottom-view connector drawing and official CAD for a custom carrier. External bank supplies and high-speed lane requirements must be observed.",
  }, Object.entries(megaSomContacts[kind]).flatMap(([name, labels]) => {
    return [
      { name, side: "left", labels: labels.filter((_, n) => n % 2 === 0), first: 1, step: 2, foot: { columns: 2 }, voltage: "Bank-dependent voltage" },
      { name, side: "right", labels: labels.filter((_, n) => n % 2 === 1), first: 2, step: 2, foot: { columns: 2 }, voltage: "Bank-dependent voltage" },
    ];
  }));
}
const mega60Som = megaSom(60);
const mega138Som = megaSom(138);
const megaProSom = megaSom("pro");

const primer20Som = sipeedBoard({
  id: "sipeed-tang-primer-20k-som", name: "Sipeed Tang Primer 20K SOM", shortName: "Primer 20K SOM", subtitle: "3691 circuit / GW2A-LV18PG256",
  description: "GW2A-18 core module with DDR3, microSD and display connector on a 204-contact SODIMM edge. The current manufacturer download is named 3961, while its schematic title identifies the 3691 circuit. External bank-feed contacts require the documented resistor configuration; dedicated DDR-bank breakout signals use 1.5 V.",
  revision: "3691 circuit (3961 schematic download)", scope: "all 204 SODIMM edge contacts, including power and NC positions", size: [67.6, 32], chip: "GW2A-18", ddr: true, buttons: false, canvasWidth: 440,
  source: `${wiki}tang/tang-primer-20k/primer-20k.html`, tags: ["gowin", "fpga", "primer", "20k", "som", "sodimm", "ddr3", "3691", "3961"],
  model: { label: "Sipeed module mechanical drawings", url: "https://dl.sipeed.com/shareURL/TANG/Primer_20K/08_Dimensions/CoreModule" },
  footnote: "All 204 numbered contacts in an off-board termination carrier, not a SODIMM mating footprint. Use the manufacturer bottom assembly and edge-connector drawing for a carrier board.",
  sockets: [["sd", 13, 26, 28, 32], ["fpc", 69, 37, 17, 60]],
  extraArt: () => rect(5, 149, 90, 11, 0, "#b7a452") + Array.from({ length:51 }, (_, i) => line(6 + i *1.75, 150, 6 + i *1.75, 159, "#dfd085",1)).join(""),
}, [
  bank("EDGE", "left", Object.entries(primer20SomContacts).filter(([n]) => Number(n)%2).map(([,v]) => v), { first:1, step:2, voltage: "Bank-dependent, 1.5 V on DDR bank breakout signals", foot:{ columns:2 } }),
  bank("EDGE", "right", Object.entries(primer20SomContacts).filter(([n]) => Number(n)%2===0).map(([,v]) => v), { first:2, step:2, voltage: "Bank-dependent, 1.5 V on DDR bank breakout signals", foot:{ columns:2 } }),
]);
const primerOriginal = sipeedBoard({
  id: "sipeed-tang-primer-eg4s20", name: "Sipeed Tang Primer EG4S20 (original)", shortName: "Tang Primer EG4S20", subtitle: "EG4S20BG256 / GD32F150 debugger",
  description: "Original Anlogic Tang Primer with integrated SDRAM, GD32 USB-JTAG bridge, RGB LCD and DVP camera FPCs, microSD and RGB LED. The manufacturer-linked supplement describes this board using FPGA ball labels and debugger signal names; it is electrically distinct from the Gowin Primer boards.",
  revision: "Original EG4S20BG256 board", scope: "both 40-position expansion rows, numbered top-to-bottom as in the manufacturer-linked pinout supplement; these are reference row positions because connector terminal numbers are not printed in that diagram", size:[45,55], chip:"EG4S20", edgeRows:40, canvasWidth:420,
  source: "https://tang.sipeed.com/en/hardware-overview/lichee-tang/", tags:["anlogic","fpga","primer","original","eg4s20","sdram","gd32"], sockets:[["fpc",20,-2,62,15],["fpc",27,100,49,12],["usb",36,147,28,16]],
}, [
  bank("LEFT", "left", "N3 P2 M4 R2 P4 N5 N4 P5 T5 T7 T6 R7 R5 GND P8 M10 R9 P11 P9 L10 T13 N11 T14 P12 R12 N12 R14 R16 T15 M12 R15 GND L13 VB0 M13 3V3 P7 5V K11 GND"),
  bank("RIGHT", "right", "D5 A4 D6 A3 C6 C5 C7 B6 A5 C9 A6 B10 A8 GND A7 B14 B8 A14 C8 B15 A12 B16 A13 C16 A11 C15 F9 E16 B12 F16 C10 GND DBG_NSS H13 DBG_SCK J13 DBG_MISO J11 DBG_MOSI L12"),
]);
const entries = [nanoOriginal, nano1k, nano4k, nano9k, nano20k, primer20Lite, primer20Dock, primer25Som, primer25Dock, mega138Neo, mega60Neo, console138, console60, megaPro, mega60Som, mega138Som, megaProSom, primer20Som, primerOriginal];
const sipeedFpgaComponents = entries.map(entry => entry.component);
const sipeedFpgaArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const sipeedFpgaFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const sipeedFpgaModels = Object.fromEntries(entries.filter(entry => entry.model).map(entry => [entry.component.id, entry.model]));

const nano4kInsertion = miniComputingMounting(nano4k.component, {
  size: [22.86, 60],
  pins: Object.fromEntries(nano4k.component.pins.map(pin => {
    const number = Number(pin.number.split('.').at(-1));
    return [pin.id, { x: pin.contactGroup === 'P6' ? 1.27 : 21.59, y: 5.4356 + (22 - number) * 2.54 }];
  })),
  contacts: nano4k.component.pins.map(pin => pin.id),
  source: 'https://dl.sipeed.com/shareURL/TANG/Nano%204K/HDK/04_Dimensional%20drawing',
  evidence: 'Tang_Nano_4K_3603(Dimension Drawing).dxf and the 3603 pinout: all 44 manufacturer TopSolder header-pad circles have centres at source X=5.4356+i*2.54 mm and Y=1.27/21.59 mm. Rotate this mechanical plane into the existing USB-at-top component-side orientation. The PCB is 60 x 22.86 mm; header separation is 20.32 mm. The old default picture remains unchanged; this view corrects its enlarged PCB length.',
  note: 'Populate all P6/P7 contacts with downward straight male headers. HDMI, USB and camera connectors remain cable interfaces.',
  regions: [{ x: 0, y: 0, width: 22.86, height: 60 },
    { x: 8, y: -.75, width: 6.86, height: 5.63 },
    { x: 5.72, y: 54, width: 11.43, height: 6.75 }],
  // The component-side photograph places the FPGA below the camera socket;
  // the older enlarged catalog illustration overlapped those two features.
  renderHardware: () => `<g stroke-width=".12">` + rect(0, 0, 22.86, 60, .7, '#272c2f', '#667b7e') +
    rect(8, -.75, 6.86, 5.63, .5, '#b5c1c4', '#e6eae7') + rect(8.6, -.1, 5.66, 1.4, .1, '#4a5d67') +
    [2.1, 18].map(x => rect(x, .6, 2.8, 2.8, .3, '#a8b0b5', '#d6dde0') + circle(x + 1.4, 2, .8, '#343e47')).join('') +
    `<g transform="translate(7.2 9.1) scale(.1)">${chip(0, 0, 80, 80, 'BL702', 8)}</g>` +
    rect(4.57, 24.4, 13.72, 4.87, .3, '#d1d5c4', '#7f8f7d') + rect(5.1, 28, 12.6, 1.1, .1, '#272e30') +
    `<g transform="translate(6.43 32.4) scale(.1)">${chip(0, 0, 100, 100, 'GW1NSR', 8)}</g>` +
    rect(6.6, 45, 5, 3.6, .2, '#171d27', '#60736f') + label(9.1, 46.8, 'FLASH', .8) +
    rect(5.72, 54, 11.43, 6.75, .4, '#b5c1c4', '#e6eae7') + rect(6.4, 57.5, 10, 2.3, .1, '#4a5d67') +
    [[5, 7], [16.5, 12], [5, 19], [17, 20], [5, 45], [17, 48]].map(([x, y]) => rect(x, y, 1.4, .6, .1, '#a7afa4')).join('') +
    label(11.43, 51.1, 'Tang Nano 4K', 1.1, '#d5e2df') + '</g>',
});
const insertionProfiles = Object.fromEntries(entries.map(entry => [entry.component.id,
  entry === nano4k ? nano4kInsertion : miniComputingFollowupMounting(entry)]));
export default defineFamily("sipeed-fpga", (sipeedFpgaComponents).map(component => ({ component, render: (sipeedFpgaArt)[component.art], footprint: (sipeedFpgaFootprints)[component.id], model: sipeedFpgaModels[component.id], ...(insertionProfiles[component.id] ? { mounting: insertionProfiles[component.id] } : {}) })));
