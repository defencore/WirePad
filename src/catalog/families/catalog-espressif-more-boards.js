import { defineFamily } from "../registry.js";
import { physicalComponent } from "../shared/physical-contacts.js";
import { reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { chip, circle, label, line, path, rect, smd, tactile } from "../shared/svg.js";

// Pin tables, photograph side, connector numbering and DXF header centers were
// reviewed against Espressif's linked documents on 2026-11-08. Dimensions are mm.
const boards = [{"key":"8684m","id":"esp8684-devkitm-1-v1-1","name":"ESP8684-DevKitM-1","revision":"v1.1","module":"ESP8684-MINI-1","height":38.9128,"first":2.0628,"ant":5.4,"can":13.2,"banks":["J1","J3"],"source":"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c2/esp8684-devkitm-1/user_guide.html","cad":"https://dl.espressif.com/dl/schematics/esp8684-devkitm-1-dimensions_source_V1.1.dxf","rows":[[["1","G","G","Ground"],["2","3V3","P","3.3 V power supply"],["3","3V3","P","3.3 V power supply"],["4","2","I/O/T","GPIO2, ADC1_CH2, FSPIQ"],["5","3","I/O/T","GPIO3, ADC1_CH3"],["6","G","G","Ground"],["7","RST","I","Reset; High: enable; Low: powers off"],["8","G","G","Ground"],["9","0","I/O/T","GPIO0, ADC1_CH0, LED Red"],["10","1","I/O/T","GPIO1, ADC1_CH1, LED Green"],["11","10","I/O/T","GPIO10, FSPICS0"],["12","G","G","Ground"],["13","5V","P","5 V power supply"],["14","5V","P","5 V power supply"],["15","G","G","Ground"]],[["1","G","G","Ground"],["2","TX","I/O/T","GPIO20, U0TXD"],["3","RX","I/O/T","GPIO19, U0RXD"],["4","G","G","Ground"],["5","9","I/O/T","GPIO9 [2]"],["6","8","I/O/T","GPIO8 [2], LED Blue"],["7","G","G","Ground"],["8","7","I/O/T","GPIO7, FSPID, MTDO"],["9","6","I/O/T","GPIO6, FSPICLK, MTCK"],["10","5","I/O/T","GPIO5, ADC2_CH0, FSPIWP ,MTDI"],["11","4","I/O/T","GPIO4, ADC1_CH4, FSPIHD ,MTMS"],["12","G","G","Ground"],["13","18","I/O/T","GPIO18"],["14","G","G","Ground"],["15","G","G","Ground"]]]},{"key":"8684c","id":"esp8684-devkitc-02-v1-0","name":"ESP8684-DevKitC-02","revision":"v1.0","module":"ESP8684-WROOM-02C","height":38.91,"first":2.06,"ant":5.7,"can":18,"banks":["J1","J3"],"source":"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32c2/esp8684-devkitc-02/user_guide.html","cad":"https://dl.espressif.com/dl/schematics/esp8684-devkitc-02-dimensions_source_V1.0.dxf","rows":[[["1","G","G","Ground"],["2","3V3","P","3.3 V power supply"],["3","3V3","P","3.3 V power supply"],["4","RST","I","Reset; High: enable; Low: powers off; Pull up by default"],["5","G","G","Ground"],["6","4","I/O/T","GPIO4, ADC1_CH4, FSPIHD, MTMS"],["7","5","I/O/T","GPIO5, FSPIWP, MTDI"],["8","6","I/O/T","GPIO6, FSPICLK, MTCK"],["9","7","I/O/T","GPIO7, FSPID , MTDO"],["10","G","G","Ground"],["11","8","I/O/T","GPIO8 [2], LED Blue"],["12","9","I/O/T","GPIO9 [2]"],["13","5V","P","5 V power supply"],["14","5V","P","5 V power supply"],["15","G","G","Ground"]],[["1","G","G","Ground"],["2","0","I/O/T","GPIO0, ADC1_CH0, LED Red"],["3","1","I/O/T","GPIO1, ADC1_CH1, LED Green"],["4","2","I/O/T","GPIO2, ADC1_CH2, FSPIQ"],["5","3","I/O/T","GPIO3, ADC1_CH3"],["6","G","G","Ground"],["7","10","I/O/T","GPIO10, FSPICS0"],["8","G","G","Ground"],["9","RX","I/O/T","GPIO19, U0RXD"],["10","TX","I/O/T","GPIO20, U0TXD"],["11","G","G","Ground"],["12","18","I/O/T","GPIO18"],["13","NC","\u2013","\u2013"],["14","G","G","Ground"],["15","G","G","Ground"]]]},{"key":"esp32m","id":"esp32-devkitm-1-mini-v1","name":"ESP32-DevKitM-1","revision":"v1.0","module":"ESP32-MINI-1","height":43.815,"first":1.575,"ant":5.4,"can":13.2,"banks":["J1","J1"],"source":"https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32/esp32-devkitm-1/user_guide.html","cad":"https://dl.espressif.com/dl/schematics/ESP32-DevKitM-1_V1.dxf","rows":[[["1","GND","P","Ground"],["2","3V3","P","3.3 V power supply"],["3","I36","I","GPIO36, ADC1_CH0, RTC_GPIO0"],["4","I37","I","GPIO37, ADC1_CH1, RTC_GPIO1"],["5","I38","I","GPIO38, ADC1_CH2, RTC_GPIO2"],["6","I39","I","GPIO39, ADC1_CH3, RTC_GPIO3"],["7","RST","I","Reset; High: enable; Low: powers off"],["8","I34","I","GPIO34, ADC1_CH6, RTC_GPIO4"],["9","I35","I","GPIO35, ADC1_CH7, RTC_GPIO5"],["10","IO32","I/O","GPIO32, XTAL_32K_P (32.768 kHz crystal oscillator input), ADC1_CH4, TOUCH9, RTC_GPIO9"],["11","IO33","I/O","GPIO33, XTAL_32K_N (32.768 kHz crystal oscillator output), ADC1_CH5, TOUCH8, RTC_GPIO8"],["12","IO25","I/O","GPIO25, DAC_1, ADC2_CH8, RTC_GPIO6, EMAC_RXD0"],["13","IO26","I/O","GPIO26, DAC_2, ADC2_CH9, RTC_GPIO7, EMAC_RXD1"],["14","IO27","I/O","GPIO27, ADC2_CH7, TOUCH7, RTC_GPIO17, EMAC_RX_DV"],["15","IO14","I/O","GPIO14, ADC2_CH6, TOUCH6, RTC_GPIO16, MTMS, HSPICLK, HS2_CLK, SD_CLK, EMAC_TXD2"],["16","5V","P","5 V power supply"],["17","GND","P","Ground"]],[["34","GND","P","Ground"],["33","TXD0","I/O","GPIO1, U0TXD, CLK_OUT3, EMAC_RXD2"],["32","RXD0","I/O","GPIO3, U0RXD, CLK_OUT2"],["31","IO21","I/O","GPIO21, VSPIHD, EMAC_TX_EN"],["30","IO22","I/O","GPIO22, VSPIWP, U0RTS, EMAC_TXD1"],["29","IO19","I/O","GPIO19, VSPIQ, U0CTS, EMAC_TXD0"],["28","IO23","I/O","GPIO23, HS1_STROBE, VSPID"],["27","IO18","I/O","GPIO18, HS1_DATA7, VSPICLK"],["26","IO5","I/O","GPIO5 [2], HS1_DATA6, VSPICS0, EMAC_RX_CLK"],["25","IO10","I/O","GPIO10, HS1_DATA3, U1TXD, SD_DATA3"],["24","IO9","I/O","GPIO9, HS1_DATA2, U1RXD, SD_DATA2"],["23","IO4","I/O","GPIO4, ADC2_CH0, TOUCH0, RTC_GPIO10, HSPIHD, HS2_DATA1, SD_DATA1, EMAC_TX_ER"],["22","IO0","I/O","GPIO0 [2], ADC2_CH1, TOUCH1, RTC_GPIO11, CLK_OUT1, EMAC_TX_CLK"],["21","IO2","I/O","GPIO2 [2], ADC2_CH2, TOUCH2, RTC_GPIO12, HSPIWP, HS2_DATA0, SD_DATA0"],["20","IO15","I/O","GPIO15, ADC2_CH3, TOUCH3, RTC_GPIO13, MTDO [2], HSPICS0, HS2_CMD, SD_CMD, EMAC_RXD3"],["19","IO13","I/O","GPIO13, ADC2_CH4, TOUCH4, RTC_GPIO14, MTCK, HSPID, HS2_DATA3, SD_DATA3, EMAC_RX_ER"],["18","IO12","I/O","GPIO12, ADC2_CH5, TOUCH5, RTC_GPIO15, MTDI [2], HSPIQ, HS2_DATA2, SD_DATA2, EMAC_TXD3"]]]}];
const scale = 6, margin = 14, pcbTop = 48;
const silk = "#e4e3d2", metal = "#b8bfbd";

function pinSpec(board, row, bank, index) {
  const [number, sourceName, sourceType, sourceFunction] = row;
  const classic = board.key === "esp32m", gnd = /^G(?:ND)?$/.test(sourceName);
  const rail = sourceName === "3V3" || sourceName === "5V";
  const gpio = sourceFunction.match(/GPIO(\d+)/)?.[1];
  const caption = classic && gpio ? (/RXD0/.test(sourceName) ? "RX" : /TXD0/.test(sourceName) ? "TX" : gpio) : gnd ? "GND" : sourceName;
  let type = gnd ? "power_in" : rail ? "passive" : sourceName === "NC" ? "no_connect" : sourceType === "I" ? "input" : "bidirectional";
  let description = gnd ? "Power and signal ground."
    : rail ? `${sourceName === "3V3" ? "3.3 V" : "5 V"} board supply rail. USB, 5V/GND and 3V3/GND are alternative supply paths; use one source at a time.`
      : sourceName === "NC" ? "Not connected on this board revision."
        : sourceName === "RST" ? "CHIP_PU enable/reset input. High enables the module; pull low to reset or power it down."
          : `3.3 V logic. ${sourceFunction.replace(/ \[\d+\]/g, "").replace(board.key !== "esp32m" ? /, ADC2_CH0/ : /$^/, "")}.`;
  if (gpio && !classic && ["8", "9"].includes(gpio)) description += " Boot strapping signal: external loading affects reset-time configuration.";
  if (gpio && classic && ["0", "2", "5", "12", "15"].includes(gpio)) description += " Boot strapping signal: preserve reset-time levels.";
  if (classic && sourceType === "I" && gpio) description += " Input-only GPIO; it cannot drive an output.";
  if (classic && ["1", "3"].includes(gpio)) description += " Also connected to the onboard USB-to-UART bridge.";
  const terminal = classic ? `${bank ? "J3" : "J1"}.${index + 1}` : `${board.banks[bank]}.${number}`;
  return { id: terminal.toLowerCase().replace(".", "-"), number: terminal, label: caption, type, description,
    x: margin + (bank ? 24.13 : 1.27) * scale, y: pcbTop + (board.first + index * 2.54) * scale,
    edge: bank ? "right" : "left", nativeX: bank ? 11.43 : -11.43, nativeY: board.first + index * 2.54 - board.height / 2 };
}

function antenna(cx, top, width, height) {
  return rect(cx - width / 2, top, width, height, 0, "#272b2a", "#474e47") +
    path(`M${cx - width / 2 + 5} ${top + height - 6}V${top + 5}h${width / 5}v${height / 2}h${width / 5}V${top + 5}h${width / 5}v${height / 2}h${width / 5}V${top + 5}h${width / 5 - 8}`, "none", "#8f926a", 2.5);
}

function makeEntry(board) {
  const width = 2 * margin + 25.4 * scale, height = pcbTop + board.height * scale + 18;
  const raw = board.rows.flatMap((rows, bank) => rows.map((row, index) => pinSpec(board, row, bank, index)));
  const nets = new Map();
  raw.forEach(pin => { const net = /GND|3V3|5V/.test(pin.label) ? pin.label : null; if (net) nets.set(net, [...(nets.get(net) ?? []), pin.id]); });
  const component = physicalComponent({
    id: board.id, name: `Espressif ${board.name}`, shortName: board.name, manufacturer: "Espressif Systems", category: "Microcontrollers", source: board.source,
    subtitle: `${board.revision} / ${board.module} / Wi-Fi + Bluetooth LE`,
    description: `${board.name} ${board.revision} with ${board.module} and an onboard PCB antenna. Component-side view, antenna above and Micro-USB below. All ${raw.length} GPIO/power header contacts follow the maker's physical table and terminal numbers. GPIO uses 3.3 V logic. ${board.key === "esp32m" ? "GPIO34–39 are input-only. Modules made before 2021-12-02 can contain a single-core ESP32; check the module marking." : "This is the revised three-input RGB LED board; red is GPIO0, green GPIO1 and blue GPIO8."} Header coordinates follow the linked mechanical source. The footprint is a contact-coordinate carrier with representative holes and clearance, not a complete production module land pattern; generated 3D geometry is approximate.`,
    tags: ["diy", "starter kit", "arduino", "espressif", "esp32", board.module.toLowerCase(), board.name.toLowerCase(), "wifi", "ble", ...(board.key === "esp32m" ? ["xtensa"] : ["esp8684", "esp32-c2", "risc-v"])],
    referencePrefix: "U", art: board.id, width, height, pins: raw, internalConnections: [...nets.values()].filter(group => group.length > 1),
  }, raw.map(p => [p.x, p.y]));
  return {
    component,
    render: (part, showLabels) => {
      const cx = width / 2, bottom = pcbTop + board.height * scale, mw = board.can * scale, ant = board.ant * scale;
      let svg = rect(margin, pcbTop, 25.4 * scale, board.height * scale, 4, "#2d3230", "#747a6e") +
        antenna(cx, pcbTop - ant, mw, ant) + rect(cx - mw / 2, pcbTop + 1, mw, board.key === "8684c" ? 90 : 80, 1.5, metal, "#e6e8dc") +
        label(cx, pcbTop + 17, "ESPRESSIF", 8, "#777e73") + label(cx, pcbTop + 31, board.module, board.key === "8684c" ? 7 : 6.2, "#777e73") +
        rect(cx - 28, pcbTop + 97, 35, 39, 1, "#242a29", "#b0b9af") +
        [pcbTop + 102, pcbTop + 114, pcbTop + 126].map(y => rect(cx - 34, y, 6, 5, 0.2, metal)).join("") +
        chip(cx - 19, bottom - 92, 38, 34, "USB", 6) +
        tactile(cx - 58.5, bottom - 27.5) + tactile(cx + 43.5, bottom - 27.5) +
        rect(cx - 24, bottom - 27, 48, 32, 2, "#acb4b2", "#e4e7da") + rect(cx - 17, bottom - 3, 34, 7, 1, "#414b47") +
        smd(cx - 41, bottom - 51, "#97b95b") + smd(cx + 35, bottom - 89, "#b4a979");
      if (board.key !== "esp32m") svg += rect(cx + 26, pcbTop + 97, 23, 23, 2, "#dddcc5", "#f0f0dd") + circle(cx + 37.5, pcbTop + 108.5, 7, "#bec8b2");
      if (showLabels) svg += label(cx - 51, bottom - 20, "BOOT", 5.3, silk) + label(cx + 51, bottom - 20, "RST", 5.3, silk);
      svg += part.pins.map(pin => rect(pin.x - 6.2, pin.y - 6.2, 12.4, 12.4, 1.2, "#222824", "#454e42") +
        (pin.number.endsWith(".1") ? rect(pin.x - 3.3, pin.y - 3.3, 6.6, 6.6, 0.3, "#d6b565") : circle(pin.x, pin.y, 3.3, "#d6b565")) +
        circle(pin.x, pin.y, 1.7, "#343c36") + (showLabels ? `<g transform="translate(${pin.x + (pin.edge === "left" ? 10 : -10)} ${pin.y}) rotate(-90)">${label(0, 0, pin.label, 6.1, silk)}</g>` : "")).join("");
      return svg;
    },
    footprint: {
      body: [25.4, board.height], color: "#2d3230", modelHeight: 1.6,
      note: "Source-coordinate header contact reference from the linked Espressif mechanical DXF. 2.54 mm pitch, 22.86 mm row spacing. Header drill/pad sizes, control/USB details and clearance are representative carrier geometry, not a complete production or validated mating land pattern. Generated 3D geometry is approximate.",
      pads: raw.map(pin => ({ id: pin.id, x: pin.nativeX, y: pin.nativeY, drill: 1, size: 1.8, shape: pin.number.endsWith(".1") ? "rect" : "circle" })),
      details: [[0, -board.height / 2 + 5, board.can, 14, 2.5, metal], [0, board.height / 2 - 2, 8, 5, 3, metal]],
    },
    model: { label: `Espressif ${board.name} ${board.revision} mechanical DXF`, url: board.cad },
    mounting: reviewedBoardMounting({
      source: { label: `Espressif ${board.name} ${board.revision} manufacturer header-center DXF`, url: board.cad },
      contacts: raw.map(pin => ({ pinId: pin.id, x: pin.nativeX, y: pin.nativeY })),
      bodyRegions: [
        { x: margin, y: pcbTop, width: 25.4 * scale, height: board.height * scale },
        { x: width / 2 - board.can * scale / 2, y: pcbTop - board.ant * scale, width: board.can * scale, height: board.ant * scale },
        { x: width / 2 - 24, y: pcbTop + board.height * scale - 27, width: 48, height: 32 },
      ],
      bodyEvidence: "The PCB, narrower PCB-antenna projection and Micro-USB shell are the exact physical rectangles in this component-side renderer; label columns and lower padding are excluded.",
      note: "Insert both complete outer header rows, 22.86 mm apart, at 2.54 mm pitch. Antenna above and USB below; allow the documented antenna and USB cable clearance.",
      calibration: { origin: { x: margin + 12.7 * scale, y: pcbTop + board.height * scale / 2 }, unitsPerMm: scale },
    }),
  };
}

export default defineFamily("espressif-more-boards", boards.map(makeEntry));
