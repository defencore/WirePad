import { defineFamily } from "../registry.js";
import { chip, circle, label, rect, smd } from "../shared/svg.js";

function electrical(name) {
  if (name === "GND") return "power_in";
  if (/^(VCC|TVCC)/.test(name)) return "power_out";
  if (/^(NC|RESERVED)$/.test(name)) return "no_connect";
  if (name.endsWith("_SDA")) return "open_collector";
  if (name.endsWith("_SCL") || /^H_ADC/.test(name) || /^SPI_(DI|CK|CS)$/.test(name)) return "input";
  if (name === "SPI_DO" || name.startsWith("O_D")) return "output";
  return "bidirectional";
}

function connectorArtwork(kind, x, y, w, h, ref) {
  let out;
  if (kind === "fpc") out = rect(x, y, w, h, 1, "#e9e8d5", "#8c9c8b") + rect(x + 3, y + 2, w - 6, h - 4, 0, "#748178");
  else if (kind === "header") out = rect(x, y, w, h, 1, "#223c37", "#a4b6a1") +
    Array.from({ length: h > w ? 15 : 12 }, (_, i) => h > w
      ? circle(x + w * 0.32, y + 3 + i * (h - 6) / 14, 1, "#c2ac6f") + circle(x + w * 0.72, y + 3 + i * (h - 6) / 14, 1, "#c2ac6f")
      : circle(x + 3 + i * (w - 6) / 11, y + h * 0.32, 1, "#c2ac6f") + circle(x + 3 + i * (w - 6) / 11, y + h * 0.72, 1, "#c2ac6f")
    ).join("");
  else if (kind === "bnc") out = rect(x, y, w, h, 1, "#a6b7b1", "#dce4d6") + circle(x + w / 2, y + h / 2, Math.min(w, h) * 0.4, "#d6dbcc", "#83917f") + circle(x + w / 2, y + h / 2, Math.min(w, h) * 0.2, "#e9e5d3", "#8c8c71");
  else if (kind === "sma") out = rect(x, y, w, h, 1, "#ad995b", "#dfcf8b") + circle(x + w / 2, y + h / 2, Math.min(w, h) * 0.35, "#d5c481", "#84703b");
  else if (kind === "dc") out = rect(x, y, w, h, 2, "#24332e", "#829781") + circle(x + w * 0.25, y + h / 2, h * 0.3, "#0e211b", "#a2b29c");
  else if (kind === "switch") out = rect(x, y, w, h, 1, "#abb9aa", "#dae3d2") + rect(x + w * 0.2, y + 2, w * 0.4, h - 4, 1, "#273a30");
  else out = rect(x, y, w, h, 2, "#a5b8b4", "#d4dfd7") + rect(x + 2, y + 3, w - 4, h - 6, 1, "#34564f");
  return out + (ref ? label(x + w / 2, y - 4, ref, 4, "#e5ecd9") : "");
}

// Positions and pin-1 orientation follow the component-side user-guide photographs.
function contactLayout(board, connector, number) {
  let nx, ny, axis = "x", rows = 2, reverse = false, reverseRows = false, rowPitch = connector.pitch;
  if (connector.rows.length === 80) {
    nx = board.index < 10 ? 0.40 : board.index === 10 ? 0.30 : 0.70;
    ny = board.index < 11 ? 0.90 : 0.07;
    rowPitch = 6;
  } else if (connector.ref === "J9" && board.index === 10) { nx = 0.25; ny = 0.055; rowPitch = 6; }
  else if (board.index === 13 && ["J11", "J12"].includes(connector.ref)) {
    nx = connector.ref === "J11" ? 0.87 : 0.95; ny = 0.17; axis = "y";
  } else if (board.index === 13) { nx = 0.235; ny = 0.065; axis = "y"; reverse = true; reverseRows = true; }
  else if (["J20", "J21"].includes(connector.ref) && board.index > 10) {
    nx = 0.65; ny = connector.ref === "J21" ? 0.16 : 0.065; reverse = true;
  } else if (connector.ref === "J20") { nx = 0.54; ny = 0.04; reverse = true; }
  else if (connector.ref === "J4") { nx = 0.34; ny = 0.95; rows = 1; }
  else { nx = board.index < 10 ? 0.90 : board.index === 10 ? 0.66 : 0.065; ny = board.index < 10 ? 0.91 : board.index === 10 ? 0.72 : 0.47; rows = 1; axis = "y"; reverse = board.index >= 10; }
  const column = Math.floor((number - 1) / rows), row = (number - 1) % rows;
  const along = column * connector.pitch * (reverse ? -1 : 1), across = row * rowPitch * (reverseRows ? -1 : 1);
  const x = 100 + (nx * board.body[0] + (axis === "x" ? along : across)) * 10;
  const y = 100 + (ny * board.body[1] + (axis === "x" ? across : along)) * 10;
  return { x, y, axis, rows, row, dense: connector.rows.length > 10 };
}

function physicalConnectors(board, component, showLabels) {
  return board.connectors.map(connector => {
    const pins = component.pins.filter(pin => pin.number.startsWith(connector.ref + "."));
    const xs = pins.map(pin => pin.x), ys = pins.map(pin => pin.y);
    const dense = connector.rows.length > 10;
    const x = Math.min(...xs) - 7, y = Math.min(...ys) - 7;
    const w = Math.max(...xs) - x + 7, h = Math.max(...ys) - y + 7;
    let out = rect(x, y, w, h, 2, connector.pitch === 0.5 ? "#e3dfbd" : "#20372c", "#9caa8e") +
      label(x + w / 2, y - 13, connector.ref, 10, "#f0f0dc");
    for (const pin of pins) {
      const n = Number(pin.number.split(".")[1]);
      const layout = contactLayout(board, connector, n);
      out += circle(pin.x, pin.y, connector.pitch === 0.5 ? 1.6 : 3.3, "#d5b571", "#e9db9f");
      if (n === 1) out += rect(pin.x - 4, pin.y - 4, 8, 8, 0, "none", "#3af0d2");
      if (!showLabels) continue;
      const caption = dense ? String(n) : `${n} ${pin.label}`;
      const size = connector.pitch === 0.5 ? 4.3 : 7;
      if (layout.axis === "x") {
        const above = layout.rows === 2 && layout.row === 0;
        out += `<g transform="translate(${pin.x} ${pin.y + (above ? -10 : 10)}) rotate(-90)">${label(0, 0, caption, size, "#f5f1d9", above ? "start" : "end")}</g>`;
      } else {
        const before = layout.rows === 2 ? layout.row === 0 : true;
        out += label(pin.x + (before ? -11 : 11), pin.y, caption, size, "#f5f1d9", before ? "end" : "start");
      }
    }
    return out;
  }).join("");
}

function drawBoard(board, component, showLabels) {
  const ratio = 10 / 3;
  const width = component.width / ratio, height = component.height / ratio;
  const [bw, bh] = board.body;
  const scale = 3;
  const x = (width - bw * scale) / 2, y = (height - bh * scale) / 2;
  const map = (kind, nx, ny, nw, nh, ref = "") => connectorArtwork(kind, x + nx * bw * scale, y + ny * bh * scale, nw * bw * scale, nh * bh * scale, ref);
  let ports = "";
  if (board.index < 10) ports = map("usb", 0.13, -0.015, 0.06, 0.10, "USB") +
    [0.29, 0.46].map(nx => map("bnc", nx, 0.04, 0.13, 0.19, "SDI")).join("") +
    [0.43, 0.64].map(ny => map("bnc", -0.015, ny, 0.13, 0.17, "SDI")).join("") +
    map("switch", 0.72, 0.055, 0.13, 0.06) + map("dc", 0.90, 0.29, 0.11, 0.15, "12V");
  else if (board.index === 10) ports = [0.34, 0.65].map(ny => map("dp", -0.015, ny, 0.14, 0.22, "DP")).join("") +
    map("switch", 0.75, 0.06, 0.12, 0.06) + map("dc", 0.91, 0.25, 0.10, 0.16, "12V");
  else if (board.index < 13) ports = map("dc", -0.015, 0.10, 0.13, 0.12, "12V") + map("switch", 0.035, 0.25, 0.10, 0.07) +
    [0.20, 0.62].map(ny => map("fpc", 0.95, ny, 0.04, 0.30, "EDP")).join("") +
    map("usb", 0.59, 0.91, 0.07, 0.11, "JTAG") + [0.77, 0.87].map(nx => map("sma", nx, 0.89, 0.07, 0.08, "CLK"));
  else ports = map("dc", -0.015, 0.10, 0.13, 0.12, "5V IN") + map("switch", 0.03, 0.24, 0.11, 0.07) +
    map("usb", 0.32, -0.015, 0.07, 0.10, "USB2.0") + map("fpc", 0.49, 0.02, 0.16, 0.05, "MIPI") +
    [0.34, 0.55].map(nx => map("ethernet", nx, 0.82, 0.17, 0.20, "GbE")).join("") +
    map("usb", 0.82, 0.92, 0.07, 0.10, "JTAG");
  const silicon = chip(x + bw * scale * 0.41, y + bh * scale * 0.43, 52, 52, "GW5A", 10) +
    chip(x + bw * scale * 0.58, y + bh * scale * 0.66, 32, 42, board.index < 11 ? "DDR3" : "SPI", 5) +
    chip(x + bw * scale * 0.23, y + bh * scale * 0.64, 33, 31, "JTAG", 5) +
    rect(x + bw * scale * 0.37, y + bh * scale * 0.25, 21, 13, 1.5, "#b2c3b3", "#d8e1d0") +
    Array.from({ length: 28 }, (_, i) => smd(x + bw * scale * (0.16 + i % 7 * 0.085), y + bh * scale * (0.21 + Math.floor(i / 7) * 0.19), i % 3 ? "#a4a283" : "#496a56")).join("") +
    Array.from({ length: 4 }, (_, i) => rect(x + bw * scale * 0.83, y + bh * scale * (0.38 + i * 0.15), 15, 15, 3, "#435f4f", "#a8b99c") + circle(x + bw * scale * 0.88, y + bh * scale * (0.39 + i * 0.15), 5, "#9cae92")).join("");
  const illustration = rect(x, y, bw * scale, bh * scale, 2, "#27754f", "#8eaf88") +
    [[0.035, 0.04], [0.965, 0.04], [0.035, 0.96], [0.965, 0.96]].map(([hx, hy]) =>
      circle(x + bw * scale * hx, y + bh * scale * hy, 5, "#cbb36f") + circle(x + bw * scale * hx, y + bh * scale * hy, 3, "#fbfcfd")
    ).join("") + silicon + ports + label(width / 2, y + 28, "GOWIN", 16, "#e8ecd9") +
    label(width / 2, y - 18, board.name.replace(/^DK_/, "").replaceAll("_", " "), 8.5, "#344851");
  return `<g transform="scale(${ratio})">${illustration}</g>` + physicalConnectors(board, component, showLabels);
}

function createBoard(board) {
  const width = board.body[0] * 10 + 200, height = board.body[1] * 10 + 200;
  const flat = board.connectors.flatMap(connector => connector.rows.map(row => ({ connector, row })));
  const pins = flat.map(({ connector, row }) => {
    const [number, name, ball, bank, voltage] = row;
    const { x, y } = contactLayout(board, connector, number);
    const type = electrical(name);
    const buffered = board.index === 13 && name.startsWith("O_D");
    const detail = buffered ? "External 5 V buffered output through a 74HC245PW bus transceiver. The FPGA-side bank runs at 3.3 V; the connector is not a direct 3.3 V GPIO."
      : type === "power_in" ? "Board signal ground." : type === "power_out" ? "Board-generated supply rail. Observe the linked schematic's current limits and power selection."
      : type === "no_connect" ? "Reserved or unconnected terminal; leave open." : name.startsWith("H_ADC") ? "External analog input through the 49.9 Ω input filter. The bank supply voltage is not the ADC measurement range; use the FPGA ADC specification."
        : name.endsWith("_SCL") ? "External host I²C clock input for INA3221 rail monitoring." : name.endsWith("_SDA") ? "Open-drain I²C monitor data."
          : name.startsWith("SPI_") ? "Remote-upgrade slave SPI interface. DO is module output; DI, CK and CS are module inputs." : "Programmable FPGA or dedicated MIPI/LVDS signal. Match the exact bank voltage and chosen I/O standard.";
    return { id: `${connector.ref.toLowerCase()}-${number}`, number: `${connector.ref}.${number}`, label: name, type, x, y, surface: true,
      description: `${connector.ref}.${number} — ${detail} ${connector.kind}, original contact pitch ${connector.pitch} mm.${ball && ball !== "-" ? ` FPGA package pad ${ball}${bank && bank !== "-" ? `, bank ${bank}` : ""}.` : ""}${voltage && voltage !== "-" ? ` ${buffered ? "Internal FPGA-bank supply reported in the table" : "Documented I/O/rail"}: ${voltage}.` : ""}` };
  });
  const component = {
    id: board.id, art: board.id, name: `Gowin ${board.name}`, shortName: board.name.replace(/^DK_/, "").replaceAll("_", " "), manufacturer: "Gowin Semiconductor", category: "FPGA boards",
    referencePrefix: "U", width, height, pins, source: board.source, contactLayout: "physical",
    subtitle: `${board.device} / ${flat.length} wiring contacts`,
    description: `Official ${board.name} development board. Complete contact maps for ${board.connectors.map(c => `${c.ref} (${c.kind}, ${c.rows.length})`).join(", ")}. The linked user guide and schematic define this exact revision. Fitted USB, DP/eDP/HDMI, Ethernet and SDI sockets, plus any MIPI/LVDS ports outside the listed connectors, are illustrated as complete cable interfaces. Contacts sit directly on the corresponding connector drawing. Pin 1 is marked in cyan; dense sockets show physical contact numbers with full functions on hover. The view follows the component-side photograph. Reference board outline and minor component placement are approximate.`,
    tags: ["gowin", "gowin semiconductor", "fpga", "arora v", "development kit", board.device.toLowerCase(), board.name.toLowerCase(), ...board.name.toLowerCase().split(/[_-]/)],
  };
  const pads = board.connectors.flatMap((connector, group) => connector.rows.map(([number]) => ({
    id: `${connector.ref.toLowerCase()}-${number}`, x: -board.body[0] / 2 - 8 - group * 8 + (number - 1) % 2 * 2.54,
    y: -(Math.ceil(connector.rows.length / 2) - 1) * 1.27 + Math.floor((number - 1) / 2) * 2.54,
    size: 1.65, drill: 0.9, square: number === 1,
  })));
  return { component, art: (part, showLabels = true) => drawBoard(board, part, showLabels), footprint: {
    body: board.body, pads, color: "#27754f",
    note: "Off-board reference termination carrier, with one numbered two-row 2.54 mm bank per listed connector outside the board envelope. This is not a mating BTB/FPC/socket land pattern. Actual connectors use their specified 0.5, 2.0 or 2.54 mm pitch, which is retained in the pin descriptions and linked guide. The board envelope and placement are approximate; use the selected connector manufacturer's CAD for a physical adapter.",
  }, model: { label: "Gowin manufacturer board schematic (PDF)", url: board.schematic } };
}

// Connector tables transcribed from the linked Gowin user guides and checked by board revision.
const boards = [
  {"id": "gowin-dk-usb-gw5at-lv60ug225-v1-1", "name": "DK_USB_GW5AT-LV60UG225_V1.1", "index": 8, "device": "DK_USB_GW5AT-LV60UG225_V1.1", "source": "https://www.gowinsemi.com/en/support/devkits_detail/72/", "manual": "https://www.gowinsemi.com/upload/database_doc/3260/document/69b8832f3ceb7.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3261/document/68b899a0addb9.pdf", "body": [120, 100],
    "connectors": [
      {"ref":"J18","kind":"80-contact MIPI BTB","pitch":0.5,"table":"08-0 Table3-6","rows":[[1,"M0_D3N","C2","MIPI","-"],[2,"NC","-","-","-"],[3,"M0_D3P","C1","MIPI","-"],[4,"NC","-","-","-"],[5,"GND","-","-","-"],[6,"GND","-","-","-"],[7,"M0_D2N","E3","MIPI","-"],[8,"GND","-","-","-"],[9,"M0_D2P","F4","MIPI","-"],[10,"GND","-","-","-"],[11,"GND","-","-","-"],[12,"NC","-","-","-"],[13,"M0_DCN","F3","MIPI","-"],[14,"NC","-","-","-"],[15,"M0_DCP","G3","MIPI","-"],[16,"GND","-","-","-"],[17,"GND","-","-","-"],[18,"GND","-","-","-"],[19,"M0_D1N","H3","MIPI","-"],[20,"GND","-","-","-"],[21,"M0_D1P","H4","MIPI","-"],[22,"VCC1P8","-","-","1.8V"],[23,"GND","-","-","-"],[24,"VCC1P8","-","-","1.8V"],[25,"M0_D0N","J3","MIPI","-"],[26,"VCC1P8","-","-","1.8V"],[27,"M0_D0P","J4","MIPI","-"],[28,"GND","-","-","-"],[29,"GND","-","-","-"],[30,"GND","-","-","-"],[31,"GND","-","-","-"],[32,"NC","-","-","-"],[33,"GND","-","-","-"],[34,"NC","-","-","-"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"GND","-","-","-"],[38,"GND","-","-","-"],[39,"GND","-","-","-"],[40,"GND","-","-","-"],[41,"M1_D0A","D1","MIPI","-"],[42,"NC","-","-","-"],[43,"M1_D0B","E2","MIPI","-"],[44,"NC","-","-","-"],[45,"M1_D0C","E1","MIPI","-"],[46,"GND","-","-","-"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"GND","-","-","-"],[50,"GND","-","-","-"],[51,"M1_D1A","F1","MIPI","-"],[52,"MIPI_GPIO1","G5","11","3.3V"],[53,"M1_D1B","G1","MIPI","-"],[54,"MIPI_GPIO2","H12","4","3.3V"],[55,"M1_D1C","G2","MIPI","-"],[56,"MIPI_GPIO3","H15","4","3.3V"],[57,"GND","-","-","-"],[58,"MIPI_GPIO4","J15","4","3.3V"],[59,"GND","-","-","-"],[60,"GND","-","-","-"],[61,"M1_D2A","H1","MIPI","-"],[62,"MIPI_GPIO5","F5","11","3.3V"],[63,"M1_D2B","J1","MIPI","-"],[64,"MIPI_GPIO6","K3","11","3.3V"],[65,"M1_D2C","J2","MIPI","-"],[66,"GND","-","-","-"],[67,"GND","-","-","-"],[68,"MIPI_GPIO7","K4","11","3.3V"],[69,"GND","-","-","-"],[70,"MIPI_GPIO8","G12","4","3.3V"],[71,"GND","-","-","-"],[72,"GND","-","-","-"],[73,"GND","-","-","-"],[74,"GND","-","-","-"],[75,"GND","-","-","-"],[76,"VCC3P3","-","-","3.3V"],[77,"GND","-","-","-"],[78,"VCC3P3","-","-","3.3V"],[79,"GND","-","-","-"],[80,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J21","kind":"I²C monitor header","pitch":2.54,"table":"08-0 Table3-7","rows":[[1,"IN3221_SCL","","","3.3V"],[2,"IN3221_SDA","","","3.3V"],[3,"GND","","","-"]]},
    ]
  },
  {"id": "gowin-dk-usb-gw5at-lv60ug225-v1-0", "name": "DK_USB_GW5AT-LV60UG225_V1.0", "index": 9, "device": "DK_USB_GW5AT-LV60UG225_V1.0", "source": "https://www.gowinsemi.com/en/support/devkits_detail/66/", "manual": "https://www.gowinsemi.com/upload/database_doc/3067/document/69b882f8daf92.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3068/document/69a1bad8143bc.pdf", "body": [120, 100],
    "connectors": [
      {"ref":"J18","kind":"80-contact MIPI BTB","pitch":0.5,"table":"09-0 Table3-6","rows":[[1,"M0_D3N","C2","MIPI","-"],[2,"NC","-","-","-"],[3,"M0_D3P","C1","MIPI","-"],[4,"NC","-","-","-"],[5,"GND","-","-","-"],[6,"GND","-","-","-"],[7,"M0_D2N","E3","MIPI","-"],[8,"GND","-","-","-"],[9,"M0_D2P","F4","MIPI","-"],[10,"GND","-","-","-"],[11,"GND","-","-","-"],[12,"NC","-","-","-"],[13,"M0_DCN","F3","MIPI","-"],[14,"NC","-","-","-"],[15,"M0_DCP","G3","MIPI","-"],[16,"GND","-","-","-"],[17,"GND","-","-","-"],[18,"GND","-","-","-"],[19,"M0_D1N","H3","MIPI","-"],[20,"GND","-","-","-"],[21,"M0_D1P","H4","MIPI","-"],[22,"VCC1P8","-","-","1.8V"],[23,"GND","-","-","-"],[24,"VCC1P8","-","-","1.8V"],[25,"M0_D0N","J3","MIPI","-"],[26,"VCC1P8","-","-","1.8V"],[27,"M0_D0P","J4","MIPI","-"],[28,"GND","-","-","-"],[29,"GND","-","-","-"],[30,"GND","-","-","-"],[31,"GND","-","-","-"],[32,"NC","-","-","-"],[33,"GND","-","-","-"],[34,"NC","-","-","-"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"GND","-","-","-"],[38,"GND","-","-","-"],[39,"GND","-","-","-"],[40,"GND","-","-","-"],[41,"M1_D0A","D1","MIPI","-"],[42,"NC","-","-","-"],[43,"M1_D0B","E2","MIPI","-"],[44,"NC","-","-","-"],[45,"M1_D0C","E1","MIPI","-"],[46,"GND","-","-","-"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"GND","-","-","-"],[50,"GND","-","-","-"],[51,"M1_D1A","F1","MIPI","-"],[52,"MIPI_GPIO1","G5","11","3.3V"],[53,"M1_D1B","G1","MIPI","-"],[54,"MIPI_GPIO2","H12","4","3.3V"],[55,"M1_D1C","G2","MIPI","-"],[56,"MIPI_GPIO3","H15","4","3.3V"],[57,"GND","-","-","-"],[58,"MIPI_GPIO4","J15","4","3.3V"],[59,"GND","-","-","-"],[60,"GND","-","-","-"],[61,"M1_D2A","H1","MIPI","-"],[62,"MIPI_GPIO5","F5","11","3.3V"],[63,"M1_D2B","J1","MIPI","-"],[64,"MIPI_GPIO6","K3","11","3.3V"],[65,"M1_D2C","J2","MIPI","-"],[66,"GND","-","-","-"],[67,"GND","-","-","-"],[68,"MIPI_GPIO7","K4","11","3.3V"],[69,"GND","-","-","-"],[70,"MIPI_GPIO8","G12","4","3.3V"],[71,"GND","-","-","-"],[72,"GND","-","-","-"],[73,"GND","-","-","-"],[74,"GND","-","-","-"],[75,"GND","-","-","-"],[76,"VCC3P3","-","-","3.3V"],[77,"GND","-","-","-"],[78,"VCC3P3","-","-","3.3V"],[79,"GND","-","-","-"],[80,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J21","kind":"I²C monitor header","pitch":2.54,"table":"09-0 Table3-7","rows":[[1,"IN3221_SCL","","","3.3V"],[2,"IN3221_SDA","","","3.3V"],[3,"GND","","","-"]]},
    ]
  },
  {"id": "gowin-dk-dp-gw5at-lv60ug225-v1-0", "name": "DK_DP_GW5AT-LV60UG225_V1.0", "index": 10, "device": "DK_DP_GW5AT-LV60UG225_V1.0", "source": "https://www.gowinsemi.com/en/support/devkits_detail/63/", "manual": "https://www.gowinsemi.com/upload/database_doc/3047/document/69b87bedefcda.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3048/document/671719e4b4b09.pdf", "body": [150, 100],
    "connectors": [
      {"ref":"J18","kind":"80-contact MIPI BTB","pitch":0.5,"table":"10-1 Table3-7","rows":[[1,"M0_D3N","C2","MIPI","-"],[2,"NC","-","-","-"],[3,"M0_D3P","C1","MIPI","-"],[4,"NC","-","-","-"],[5,"GND","-","-","-"],[6,"GND","-","-","-"],[7,"M0_D2N","E3","MIPI","-"],[8,"GND","-","-","-"],[9,"M0_D2P","F4","MIPI","-"],[10,"GND","-","-","-"],[11,"GND","-","-","-"],[12,"NC","-","-","-"],[13,"M0_DCN","F3","MIPI","-"],[14,"NC","-","-","-"],[15,"M0_DCP","G3","MIPI","-"],[16,"GND","-","-","-"],[17,"GND","-","-","-"],[18,"GND","-","-","-"],[19,"M0_D1N","H3","MIPI","-"],[20,"GND","-","-","-"],[21,"M0_D1P","H4","MIPI","-"],[22,"VCC1P8","-","-","1.8V"],[23,"GND","-","-","-"],[24,"VCC1P8","-","-","1.8V"],[25,"M0_D0N","J3","MIPI","-"],[26,"VCC1P8","-","-","1.8V"],[27,"M0_D0P","J4","MIPI","-"],[28,"GND","-","-","-"],[29,"GND","-","-","-"],[30,"GND","-","-","-"],[31,"GND","-","-","-"],[32,"NC","-","-","-"],[33,"GND","-","-","-"],[34,"NC","-","-","-"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"GND","-","-","-"],[38,"GND","-","-","-"],[39,"GND","-","-","-"],[40,"GND","-","-","-"],[41,"M1_D0A","D1","MIPI","-"],[42,"NC","-","-","-"],[43,"M1_D0B","E2","MIPI","-"],[44,"NC","-","-","-"],[45,"M1_D0C","E1","MIPI","-"],[46,"GND","-","-","-"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"GND","-","-","-"],[50,"GND","-","-","-"],[51,"M1_D1A","F1","MIPI","-"],[52,"MIPI_GPIO1","E8","1","3.3V"],[53,"M1_D1B","G1","MIPI","-"],[54,"MIPI_GPIO2","E7","1","3.3V"],[55,"M1_D1C","G2","MIPI","-"],[56,"MIPI_GPIO3","E6","1","3.3V"],[57,"GND","-","-","-"],[58,"MIPI_GPIO4","E5","1","3.3V"],[59,"GND","-","-","-"],[60,"GND","-","-","-"],[61,"M1_D2A","H1","MIPI","-"],[62,"MIPI_GPIO5","E10","1","3.3V"],[63,"M1_D2B","J1","MIPI","-"],[64,"MIPI_GPIO6","F10","1","3.3V"],[65,"M1_D2C","J2","MIPI","-"],[66,"GND","-","-","-"],[67,"GND","-","-","-"],[68,"MIPI_GPIO7","E9","1","3.3V"],[69,"GND","-","-","-"],[70,"MIPI_GPIO8","F8","1","3.3V"],[71,"GND","-","-","-"],[72,"GND","-","-","-"],[73,"GND","-","-","-"],[74,"GND","-","-","-"],[75,"GND","-","-","-"],[76,"VCC3P3","-","-","3.3V"],[77,"GND","-","-","-"],[78,"VCC3P3","-","-","3.3V"],[79,"GND","-","-","-"],[80,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J9","kind":"40-contact MIPI BTB","pitch":0.5,"table":"10-1 Table3-8","rows":[[1,"GND","-","-","-"],[2,"GND","-","-","-"],[3,"MIPI_D4N","K11","5","3.3V"],[4,"MIPI_D3P","N14","5","3.3V"],[5,"MIPI_D4P","J11","5","3.3V"],[6,"MIPI_D3N","N15","5","3.3V"],[7,"GND","-","-","-"],[8,"GND","-","-","-"],[9,"MIPI_D5N","M15","5","3.3V"],[10,"MIPI_D2P","K12","5","3.3V"],[11,"MIPI_D5P","L15","5","3.3V"],[12,"MIPI_D2N","K13","5","3.3V"],[13,"GND","-","-","-"],[14,"GND","-","-","-"],[15,"MIPI_D6N","L14","5","3.3V"],[16,"MIPI_D1P","L12","5","3.3V"],[17,"MIPI_D6P","L13","5","3.3V"],[18,"MIPI_D1N","M13","5","3.3V"],[19,"GND","-","-","-"],[20,"GND","-","-","-"],[21,"MIPI_D7N","J15","4","3.3V"],[22,"MIPI_D0P","J13","5","3.3V"],[23,"MIPI_D7P","H15","4","3.3V"],[24,"MIPI_D0N","J14","5","3.3V"],[25,"GND","-","-","-"],[26,"GND","-","-","-"],[27,"MIPI_D8N","H10","5","3.3V"],[28,"MIPI_CKP","G12","4","3.3V"],[29,"MIPI_D8P","H11","5","3.3V"],[30,"MIPI_CKN","H12","4","3.3V"],[31,"GND","-","-","-"],[32,"GND","-","-","-"],[33,"MIPI_RST","G15","3","3.3V"],[34,"GND","-","-","-"],[35,"GND","-","-","-"],[36,"VCC3P3","-","-","3.3V"],[37,"GND","-","-","-"],[38,"VCC3P3","-","-","3.3V"],[39,"GND","-","-","-"],[40,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J21","kind":"I²C monitor header","pitch":2.54,"table":"10-1 Table3-9","rows":[[1,"INA3221_SCL","","","3.3V"],[2,"INA3221_SDA","","","3.3V"],[3,"GND","","","-"]]},
      {"ref":"J20","kind":"2×5 GPIO header","pitch":2.54,"table":"10-1 Table3-12","rows":[[1,"VCC3P3","-","-","3.3V"],[2,"VCC3P3","-","-","3.3V"],[3,"F_GPIO0","B13","2","3.3V"],[4,"F_GPIO1","A13","2","3.3V"],[5,"F_GPIO2","B14","2","3.3V"],[6,"F_GPIO3","A14","2","3.3V"],[7,"F_GPIO4","D13","2","3.3V"],[8,"F_GPIO5","C14","2","3.3V"],[9,"GND","-","-","-"],[10,"GND","-","-","-"]]},
    ]
  },
  {"id": "gowin-dk-edp-gw5at-lv15mg132-v1-0", "name": "DK_EDP_GW5AT-LV15MG132_V1.0", "index": 11, "device": "DK_EDP_GW5AT-LV15MG132_V1.0", "source": "https://www.gowinsemi.com/en/support/devkits_detail/64/", "manual": "https://www.gowinsemi.com/upload/database_doc/3050/document/69b88241d356d.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3051/document/68a8c6810e283.pdf", "body": [140, 100],
    "connectors": [
      {"ref":"J2","kind":"I²C monitor header","pitch":2.54,"table":"11-1 Table3-3","rows":[[1,"INA3221_SCL","","","3.3V"],[2,"INA3221_SDA","","","3.3V"],[3,"GND","","","-"]]},
      {"ref":"J19","kind":"80-contact MIPI BTB","pitch":0.5,"table":"11-1 Table3-4","rows":[[1,"M0_DPHY_D0N","P7","MIPI","-"],[2,"VCC2P8","-","-","2.8V"],[3,"M0_DPHY_D0P","N7","MIPI","-"],[4,"VCC2P8","-","-","2.8V"],[5,"GND","-","-","-"],[6,"GND","-","-","-"],[7,"M0_DPHY_D1N","P6","MIPI","-"],[8,"GND","-","-","-"],[9,"M0_DPHY_D1P","N6","MIPI","-"],[10,"GND","-","-","-"],[11,"GND","-","-","-"],[12,"NC","-","-","-"],[13,"M0_DPHY_CKN","P5","MIPI","-"],[14,"NC","-","-","-"],[15,"M0_DPHY_CKP","N5","MIPI","-"],[16,"GND","-","-","-"],[17,"GND","-","-","-"],[18,"GND","-","-","-"],[19,"M0_DPHY_D2N","P4","MIPI","-"],[20,"GND","-","-","-"],[21,"M0_DPHY_D2P","N4","MIPI","-"],[22,"NC","-","-","-"],[23,"GND","-","-","-"],[24,"NC","-","-","-"],[25,"M0_DPHY_D3N","P3","MIPI","-"],[26,"NC","-","-","-"],[27,"M0_DPHY_D3P","N3","MIPI","-"],[28,"GND","-","-","-"],[29,"GND","-","-","-"],[30,"GND","-","-","-"],[31,"GND","-","-","-"],[32,"NC","-","-","-"],[33,"GND","-","-","-"],[34,"NC","-","-","-"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"GND","-","-","-"],[38,"GND","-","-","-"],[39,"GND","-","-","-"],[40,"GND","-","-","-"],[41,"M1_CPHY_D1A","L1","MIPI","-"],[42,"NC","-","-","-"],[43,"M1_CPHY_D1B","K1","MIPI","-"],[44,"NC","-","-","-"],[45,"M1_CPHY_D1C","J1","MIPI","-"],[46,"GND","-","-","-"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"GND","-","-","-"],[50,"GND","-","-","-"],[51,"M1_CPHY_D0A","F2","MIPI","-"],[52,"MIPI_GPIO1","M8","1","1.8V/2.5V"],[53,"M1_CPHY_D0B","F1","MIPI","-"],[54,"MIPI_GPIO2","P14","1","1.8V/2.5V"],[55,"M1_CPHY_D0C","G1","MIPI","-"],[56,"MIPI_GPIO3","J12","1","1.8V/2.5V"],[57,"GND","-","-","-"],[58,"MIPI_GPIO4","H13","1","1.8V/2.5V"],[59,"GND","-","-","-"],[60,"GND","-","-","-"],[61,"M1_CPHY_D2A","C1","MIPI","-"],[62,"MIPI_GPIO5","G13","1","1.8V/2.5V"],[63,"M1_CPHY_D2B","D2","MIPI","-"],[64,"NC","-","-","-"],[65,"M1_CPHY_D2C","D1","MIPI","-"],[66,"GND","-","-","-"],[67,"GND","-","-","-"],[68,"NC","-","-","-"],[69,"GND","-","-","-"],[70,"NC","-","-","-"],[71,"GND","-","-","-"],[72,"GND","-","-","-"],[73,"GND","-","-","-"],[74,"GND","-","-","-"],[75,"GND","-","-","-"],[76,"VCC3P3","-","-","3.3V"],[77,"GND","-","-","-"],[78,"VCC3P3","-","-","3.3V"],[79,"GND","-","-","-"],[80,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J20","kind":"2×10 LVDS/MIPI header","pitch":2,"table":"11-1 Table3-5","rows":[[1,"DPHY_LVDS_D3P","N8","1","1.8V/2.5V"],[2,"DPHY_LVDS_D3N","P8","1","1.8V/2.5V"],[3,"GND","-","-","-"],[4,"GND","-","-","-"],[5,"DPHY_LVDS_D2P","P10","1","1.8V/2.5V"],[6,"DPHY_LVDS_D2N","N10","1","1.8V/2.5V"],[7,"GND","-","-","-"],[8,"GND","-","-","-"],[9,"DPHY_LVDS_CK0P","N11","1","1.8V/2.5V"],[10,"DPHY_LVDS_CK0N","P11","1","1.8V/2.5V"],[11,"GND","-","-","-"],[12,"GND","-","-","-"],[13,"DPHY_LVDS_D1P","N12","1","1.8V/2.5V"],[14,"DPHY_LVDS_D1N","P12","1","1.8V/2.5V"],[15,"GND","-","-","-"],[16,"GND","-","-","-"],[17,"DPHY_LVDS_D0P","P13","1","1.8V/2.5V"],[18,"DPHY_LVDS_D0N","N13","1","1.8V/2.5V"],[19,"GND","-","-","-"],[20,"GND","-","-","-"]]},
      {"ref":"J21","kind":"2×10 LVDS/MIPI header","pitch":2,"table":"11-1 Table3-5","rows":[[1,"DPHY_LVDS_D4P","D13","1","1.8V/2.5V"],[2,"DPHY_LVDS_D4N","C13","1","1.8V/2.5V"],[3,"GND","-","-","-"],[4,"GND","-","-","-"],[5,"DPHY_LVDS_D5P","D14","1","1.8V/2.5V"],[6,"DPHY_LVDS_D5N","C14","1","1.8V/2.5V"],[7,"GND","-","-","-"],[8,"GND","-","-","-"],[9,"DPHY_LVDS_CK1P","F13","1","1.8V/2.5V"],[10,"DPHY_LVDS_CK1N","E13","1","1.8V/2.5V"],[11,"GND","-","-","-"],[12,"GND","-","-","-"],[13,"DPHY_LVDS_D6P","J13","1","1.8V/2.5V"],[14,"DPHY_LVDS_D6N","J14","1","1.8V/2.5V"],[15,"GND","-","-","-"],[16,"GND","-","-","-"],[17,"DPHY_LVDS_D7P","F14","1","1.8V/2.5V"],[18,"DPHY_LVDS_D7N","E14","1","1.8V/2.5V"],[19,"GND","-","-","-"],[20,"GND","-","-","-"]]},
      {"ref":"J4","kind":"SSPI configuration header","pitch":2.54,"table":"11-1 Table3-6","rows":[[1,"GND","-","-","-"],[2,"SPI_DO","P1","3","3.3V"],[3,"SPI_DI","P2","3","3.3V"],[4,"SPI_CK","M1","3","3.3V"],[5,"SPI_CS","M2","3","3.3V"]]},
    ]
  },
  {"id": "gowin-dk-edp-gw5art-lv15mg132p-v1-0", "name": "DK_EDP_GW5ART-LV15MG132P_V1.0", "index": 12, "device": "DK_EDP_GW5ART-LV15MG132P_V1.0", "source": "https://www.gowinsemi.com/en/support/devkits_detail/65/", "manual": "https://www.gowinsemi.com/upload/database_doc/3053/document/69b882901e4d8.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3054/document/676390a3c30c3.pdf", "body": [140, 100],
    "connectors": [
      {"ref":"J2","kind":"I²C monitor header","pitch":2.54,"table":"12-1 Table3-3","rows":[[1,"INA3221_SCL","","","3.3V"],[2,"INA3221_SDA","","","3.3V"],[3,"GND","","","-"]]},
      {"ref":"J19","kind":"80-contact MIPI BTB","pitch":0.5,"table":"12-1 Table3-4","rows":[[1,"M0_DPHY_D0N","P7","MIPI","-"],[2,"VCC1P2_F","-","-","1.2V"],[3,"M0_DPHY_D0P","N7","MIPI","-"],[4,"VCC1P2_F","-","-","1.2V"],[5,"GND","-","-","-"],[6,"GND","-","-","-"],[7,"M0_DPHY_D1N","P6","MIPI","-"],[8,"GND","-","-","-"],[9,"M0_DPHY_D1P","N6","MIPI","-"],[10,"GND","-","-","-"],[11,"GND","-","-","-"],[12,"NC","-","-","-"],[13,"M0_DPHY_CKN","P5","MIPI","-"],[14,"NC","-","-","-"],[15,"M0_DPHY_CKP","N5","MIPI","-"],[16,"GND","-","-","-"],[17,"GND","-","-","-"],[18,"GND","-","-","-"],[19,"M0_DPHY_D2N","P4","MIPI","-"],[20,"GND","-","-","-"],[21,"M0_DPHY_D2P","N4","MIPI","-"],[22,"NC","-","-","-"],[23,"GND","-","-","-"],[24,"NC","-","-","-"],[25,"M0_DPHY_D3N","P3","MIPI","-"],[26,"NC","-","-","-"],[27,"M0_DPHY_D3P","N3","MIPI","-"],[28,"GND","-","-","-"],[29,"GND","-","-","-"],[30,"GND","-","-","-"],[31,"GND","-","-","-"],[32,"NC","-","-","-"],[33,"GND","-","-","-"],[34,"NC","-","-","-"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"GND","-","-","-"],[38,"GND","-","-","-"],[39,"GND","-","-","-"],[40,"GND","-","-","-"],[41,"M1_CPHY_D1A","L1","MIPI","-"],[42,"NC","-","-","-"],[43,"M1_CPHY_D1B","K1","MIPI","-"],[44,"NC","-","-","-"],[45,"M1_CPHY_D1C","J1","MIPI","-"],[46,"GND","-","-","-"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"GND","-","-","-"],[50,"GND","-","-","-"],[51,"M1_CPHY_D0A","F2","MIPI","-"],[52,"MIPI_GPIO1","M8","1","1.8V"],[53,"M1_CPHY_D0B","F1","MIPI","-"],[54,"MIPI_GPIO2","P14","1","1.8V"],[55,"M1_CPHY_D0C","G1","MIPI","-"],[56,"MIPI_GPIO3","J12","1","1.8V"],[57,"GND","-","-","-"],[58,"MIPI_GPIO4","H13","1","1.8V"],[59,"GND","-","-","-"],[60,"GND","-","-","-"],[61,"M1_CPHY_D2A","C1","MIPI","-"],[62,"NC","-","-","-"],[63,"M1_CPHY_D2B","D2","MIPI","-"],[64,"NC","-","-","-"],[65,"M1_CPHY_D2C","D1","MIPI","-"],[66,"GND","-","-","-"],[67,"GND","-","-","-"],[68,"NC","-","-","-"],[69,"GND","-","-","-"],[70,"NC","-","-","-"],[71,"GND","-","-","-"],[72,"GND","-","-","-"],[73,"GND","-","-","-"],[74,"GND","-","-","-"],[75,"GND","-","-","-"],[76,"VCC3P3","-","-","3.3V"],[77,"GND","-","-","-"],[78,"VCC3P3","-","-","3.3V"],[79,"GND","-","-","-"],[80,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J20","kind":"2×10 LVDS/MIPI header","pitch":2,"table":"12-1 Table3-5","rows":[[1,"DPHY_LVDS_D3P","N8","1","1.8V"],[2,"DPHY_LVDS_D3N","P8","1","1.8V"],[3,"GND","-","-","-"],[4,"GND","-","-","-"],[5,"DPHY_LVDS_D2P","P10","1","1.8V"],[6,"DPHY_LVDS_D2N","N10","1","1.8V"],[7,"GND","-","-","-"],[8,"GND","-","-","-"],[9,"DPHY_LVDS_CK0P","N11","1","1.8V"],[10,"DPHY_LVDS_CK0N","P11","1","1.8V"],[11,"GND","-","-","-"],[12,"GND","-","-","-"],[13,"DPHY_LVDS_D1P","N12","1","1.8V"],[14,"DPHY_LVDS_D1N","P12","1","1.8V"],[15,"GND","-","-","-"],[16,"GND","-","-","-"],[17,"DPHY_LVDS_D0P","P13","1","1.8V"],[18,"DPHY_LVDS_D0N","N13","1","1.8V"],[19,"GND","-","-","-"],[20,"GND","-","-","-"]]},
      {"ref":"J4","kind":"SSPI configuration header","pitch":2.54,"table":"12-1 Table3-6","rows":[[1,"GND","-","-","-"],[2,"SPI_DO","P1","3","3.3V"],[3,"SPI_DI","P2","3","3.3V"],[4,"SPI_CK","M1","3","3.3V"],[5,"SPI_CS","M2","3","3.3V"]]},
    ]
  },
  {"id": "gowin-dk-start-gw5ar-lv25ug256pc2i1-v1-0", "name": "DK_START_GW5AR-LV25UG256PC2I1_V1.0", "index": 13, "device": "DK_START_GW5AR-LV25UG256PC2I1_V1.0", "source": "https://www.gowinsemi.com/en/support/devkits_detail/62/", "manual": "https://www.gowinsemi.com/upload/database_doc/3032/document/66f6562557481.pdf", "schematic": "https://www.gowinsemi.com/upload/database_doc/3033/document/66f6565d23429.pdf", "body": [120, 85],
    "connectors": [
      {"ref":"J11","kind":"2×30 GPIO header","pitch":2,"table":"13-1 Table3-10","rows":[[1,"O_D1","H5","5","3.3V"],[2,"O_D2","E6","5","3.3V"],[3,"O_D3","F6","5","3.3V"],[4,"O_D4","C6","6","3.3V"],[5,"O_D5","D6","6","3.3V"],[6,"O_D6","E7","6","3.3V"],[7,"O_D7","F7","6","3.3V"],[8,"O_D8","E8","6","3.3V"],[9,"O_D9","A15","6","3.3V"],[10,"O_D10","B16","6","3.3V"],[11,"GND","-","-","-"],[12,"GND","-","-","-"],[13,"O_D11","C15","7","3.3V"],[14,"O_D12","C16","7","3.3V"],[15,"O_D13","D15","7","3.3V"],[16,"O_D14","D16","7","3.3V"],[17,"O_D15","E15","7","3.3V"],[18,"O_D16","E16","7","3.3V"],[19,"O_D17","G16","7","3.3V"],[20,"O_D18","H14","7","3.3V"],[21,"O_D19","J16","7","3.3V"],[22,"O_D20","J15","7","3.3V"],[23,"GND","-","-","-"],[24,"GND","-","-","-"],[25,"O_D21","K16","0","3.3V"],[26,"O_D22","L16","0","3.3V"],[27,"O_D23","L15","0","3.3V"],[28,"O_D24","M16","0","3.3V"],[29,"O_D25","N16","0","3.3V"],[30,"O_D26","N15","0","3.3V"],[31,"O_D27","P16","0","3.3V"],[32,"O_D28","P15","0","3.3V"],[33,"O_D29","R16","0","3.3V"],[34,"O_D30","T13","2","3.3V"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"O_D31","R12","2","3.3V"],[38,"O_D32","T12","2","3.3V"],[39,"O_D33","R11","2","3.3V"],[40,"O_D34","T11","2","3.3V"],[41,"O_D35","R10","2","3.3V"],[42,"O_D36","T10","2","3.3V"],[43,"O_D37","T9","2","3.3V"],[44,"O_D38","R9","2","3.3V"],[45,"O_D39","T8","2","3.3V"],[46,"O_D40","R8","2","3.3V"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"O_D41","N9","2","3.3V"],[50,"O_D42","M9","0","3.3V"],[51,"O_D43","M8","3","3.3V"],[52,"O_D44","P8","2","3.3V"],[53,"O_D45","N8","2","3.3V"],[54,"O_D46","N6","2","3.3V"],[55,"O_D47","T7","2","3.3V"],[56,"O_D48","R7","2","3.3V"],[57,"GND","-","-","-"],[58,"GND","-","-","-"],[59,"VCC3P3","-","-","3.3V"],[60,"VCC3P3","-","-","3.3V"]]},
      {"ref":"J12","kind":"2×30 GPIO header","pitch":2,"table":"13-1 Table3-11","rows":[[1,"O_D49","F8","6","3.3V"],[2,"O_D50","E9","7","3.3V"],[3,"O_D51","F9","7","3.3V"],[4,"O_D52","E10","7","3.3V"],[5,"O_D53","F10","7","3.3V"],[6,"O_D54","E11","7","3.3V"],[7,"O_D55","F11","7","3.3V"],[8,"O_D56","G11","7","3.3V"],[9,"O_D57","C14","7","3.3V"],[10,"O_D58","D12","7","3.3V"],[11,"GND","-","-","-"],[12,"GND","-","-","-"],[13,"O_D59","D14","7","3.3V"],[14,"O_D60","F13","7","3.3V"],[15,"O_D61","F14","7","3.3V"],[16,"O_D62","F15","7","3.3V"],[17,"O_D63","F16","7","3.3V"],[18,"O_D64","G15","7","3.3V"],[19,"O_D65","J12","7","3.3V"],[20,"O_D66","J13","7","3.3V"],[21,"O_D67","J14","7","3.3V"],[22,"O_D68","K12","0","3.3V"],[23,"GND","-","-","-"],[24,"GND","-","-","-"],[25,"O_D69","L13","0","3.3V"],[26,"O_D70","L14","0","3.3V"],[27,"O_D71","L12","0","3.3V"],[28,"O_D72","M15","0","3.3V"],[29,"O_D73","J11","0","3.3V"],[30,"O_D74","K11","0","3.3V"],[31,"O_D75","L11","0","3.3V"],[32,"O_D76","M12","0","3.3V"],[33,"O_D77","N12","0","3.3V"],[34,"O_D78","N13","0","3.3V"],[35,"GND","-","-","-"],[36,"GND","-","-","-"],[37,"O_D79","N14","0","3.3V"],[38,"O_D80","P14","0","3.3V"],[39,"O_D81","K10","0","3.3V"],[40,"O_D82","M11","0","3.3V"],[41,"O_D83","L9","0","3.3V"],[42,"O_D84","N11","2","3.3V"],[43,"O_D85","P11","2","3.3V"],[44,"O_D86","M10","0","3.3V"],[45,"O_D87","L10","0","3.3V"],[46,"O_D88","P9","2","3.3V"],[47,"GND","-","-","-"],[48,"GND","-","-","-"],[49,"O_D89","K6","3","3.3V"],[50,"O_D90","K8","3","3.3V"],[51,"O_D91","L7","3","3.3V"],[52,"O_D92","L8","3","3.3V"],[53,"O_D93","L6","3","3.3V"],[54,"O_D94","M7","3","3.3V"],[55,"O_D95","M6","3","3.3V"],[56,"O_D96","K9","0","3.3V"],[57,"GND","-","-","-"],[58,"GND","-","-","-"],[59,"VCC5P0","-","-","5V"],[60,"VCC5P0","-","-","5V"]]},
      {"ref":"J6","kind":"2×2 ADC header","pitch":2.54,"table":"13-0 schematic page7 / 13-1 Table3-12","rows":[[1,"H_ADCVP","R3","3","Analog"],[2,"H_ADCVN","R4","3","Analog"],[3,"GND","","","-"],[4,"GND","","","-"]]},
    ]
  },
];


const entries = boards.map(createBoard);
const gowinDisplayUsbComponents = entries.map(entry => entry.component);
const gowinDisplayUsbArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const gowinDisplayUsbFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const gowinDisplayUsbModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("gowin-display-usb", (gowinDisplayUsbComponents).map(component => ({ component, render: (gowinDisplayUsbArt)[component.art], footprint: (gowinDisplayUsbFootprints)[component.id], model: gowinDisplayUsbModels[component.id] })));
