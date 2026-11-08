import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import { cadBoardMounting } from "../shared/cad-board-mounting.js";
import { circle, label, path, rect } from "../shared/svg.js";
import boards from "../data/nordic-more-cad.js";

// Contact centers, numbering and reverse-side placement come from the linked
// manufacturer EAGLE boards. Small component bodies are simplified illustrations.
function boardArtwork(board, showLabels) {
  const [w, h] = board.body;
  const outline = (y, reverse = false) => {
    const shape = board.id.startsWith("sparkfun-")
      ? path("M0 2.54H15.24Q16.51 2.54 16.51 1.27Q16.51 0 17.78 0H45.8264Q46.99 0 46.99 1.1636V21.7851Q46.99 22.86 45.9151 22.86H17.78Q16.51 22.86 16.51 21.59Q16.51 20.32 15.24 20.32H0Z", board.color, "#779fba")
      : rect(0, 0, w, h, 1.2, board.color, "#779fba");
    return `<g transform="translate(${reverse ? w : 0} ${y}) scale(${reverse ? -1 : 1} 1)">${shape}</g>` +
      (reverse ? label(w / 2, y + h / 2, "REVERSE", 1.8, "#b6d6df") : "");
  };
  const bodies = board.elements.map(([x, y, width, height, kind, ref]) => {
    if (kind === "module") {
      const friend = board.id.includes("bluefruit"), antenna = 2.8;
      return rect(x - width / 2 - .45, y - height / 2 - .45, width + .9, height + .9, .3, "#a52835", "#d3ac9c") +
        (friend ? rect(x - width / 2, y - height / 2 + antenna, width, height - antenna, .3, "#b7bfc0", "#edf1e8") +
          rect(x - width / 2 + .5, y - height / 2 + .3, width - 1, antenna - .5, .2, "#d5d4b5", "#eeeece")
          : rect(x - width / 2, y - height / 2, width - antenna, height, .3, "#b7bfc0", "#edf1e8") +
          rect(x + width / 2 - antenna + .4, y - height / 2 + .5, antenna - .5, height - 1, .2, "#d5d4b5", "#eeeece")) +
        label(x - (friend ? 0 : antenna / 2), y + (friend ? antenna / 2 : 0), friend ? "MDBT40" : "MDBT50", 1.2, "#546266");
    }
    if (kind === "usb") return rect(x - width / 2 - .5, y - height / 2 - .5, width + 1, height + 1, .6, "#c6cbcc", "#ecf1ec") +
      rect(x - width / 2 - .5, y - height / 2 + .3, 1.5, height - .6, .3, "#3b4246");
    if (kind === "button") return rect(x - width / 2, y - height / 2, width, height, .3, "#aeb6b5", "#dde5dd") +
      circle(x, y, Math.min(width, height) * .32, "#303c3f");
    return rect(x - width / 2, y - height / 2, width, height, .12,
      ref.startsWith("R") || ref.startsWith("C") ? "#c1b18a" : "#263236", "#9ba9a9");
  }).join("");
  const pads = board.contacts.map(pin => {
    const [width, height] = pin.size;
    return (pin.smd ? rect(pin.vx - width / 2, pin.vy - height / 2, width, height, .15, "#d2b47b", "#f1d99a")
      : circle(pin.vx, pin.vy, width / 2, "#d2b47b", "#f1d99a") + circle(pin.vx, pin.vy, pin.drill / 2, "#183e5c"));
  }).join("");
  const switchArt = board.id.includes("uart") ? rect(7, 17, 7.5, 3, .3, "#bec6c5", "#e3e7de") + rect(9, 16.4, 2.2, 4.2, .3, "#293236") : "";
  const captions = showLabels ? board.contacts.map(pin => {
    const group = board.contacts.filter(other => other.connector === pin.connector);
    const dense = group.some(other => other.id !== pin.id && Math.hypot(other.vx - pin.vx, other.vy - pin.vy) < 1.5);
    const groundRow = group.length > 1 && group.every(other => other.label === "GND");
    const caption = dense || groundRow ? pin.number.split(".").at(-1) : pin.label.replace("SWDIO", "DIO").replace("SWDCLK", "CLK");
    const spanX = Math.max(...group.map(other => other.vx)) - Math.min(...group.map(other => other.vx));
    const spanY = Math.max(...group.map(other => other.vy)) - Math.min(...group.map(other => other.vy));
    if (spanY > spanX && !dense) {
      const left = pin.vx < w / 2;
      return label(pin.vx + (left ? 1.25 : -1.25), pin.vy, caption, .72, "#f4edcf", left ? "start" : "end");
    }
    const localY = pin.back ? pin.vy - h - 6 : pin.vy;
    const offset = localY < h / 2 ? 1.45 : -1.45;
    return label(pin.vx, pin.vy + (dense ? .9 : offset), caption, dense ? .55 : .72, "#f4edcf");
  }).join("") : "";
  return outline(0) + bodies + switchArt + (board.hasBack ? outline(h + 6, true) : "") + pads + captions;
}

const entries = boards.map(board => {
  const [w, h] = board.body;
  const friend = board.id.includes("bluefruit");
  const itsy = board.id.includes("itsybitsy");
  const entry = cadReadyBoard({
    ...board,
    category: friend ? "Wireless modules" : "Microcontrollers",
    description: `${board.name}, ${board.revision}. All ${board.contacts.length} documented header, power and service contacts are represented. Front view keeps the component-side contact order; the separate reverse view is mirrored and labels the hidden contacts. ${friend ? "Nordic nRF51822 BLE coprocessor with AT-command firmware and a Raytac MDBT40 ceramic-antenna module." : "Nordic nRF52840 programmable BLE/802.15.4 board with a Raytac radio module."} ${itsy ? "BAT input is 3.5–6 V and the board has no charger. The 5! pin is a VHI-level output, not a bidirectional GPIO." : ""} Board envelope and contact centers use the CAD; component body details are representative.`,
    tags: ["nordic", friend ? "nrf51822" : "nrf52840", "bluetooth", "ble", board.manufacturer.toLowerCase(), "raytac", ...(friend ? ["bluefruit", "at commands", board.id.includes("spi") ? "spi" : "uart"] : ["circuitpython", "swd", "802.15.4"])],
    pads: board.contacts.map(pin => ({ id: pin.id, x: Number((pin.x - w / 2).toFixed(5)), y: Number((pin.y - h / 2).toFixed(5)), size: pin.size,
      ...(pin.smd ? { smd: true } : { drill: pin.drill }), square: pin.number.endsWith(".1") })),
    svg: "", contactLabels: true,
    footprintNote: `Reference carrier using exact ${board.manufacturer} published EAGLE pad centers and drill sizes. Exposed service contacts on the reverse retain their source-board coordinates; verify the access side before making a fixture. The bare-PCB outline excludes module and connector overhang. This is not a complete PCB reproduction. Use the linked original CAD for fitted connector and enclosure clearances.`,
  });
  const nets = new Map();
  for (const pin of board.contacts) {
    const net = pin.description.match(/CAD net: (.+)\.$/)[1];
    if (net === "NC") continue;
    if (!nets.has(net)) nets.set(net, []);
    nets.get(net).push(pin.id);
  }
  entry.component.internalConnections = [...nets.values()].filter(ids => ids.length > 1);
  const scale = Math.min(9, 650 / Math.max(...board.view));
  entry.art = (_component, showLabels = true) => `<g transform="translate(20 20) scale(${scale})">${boardArtwork(board, showLabels)}${board.hasBack ? label(w / 2, h + 3, "UNDERSIDE • MIRRORED", 1.1, "#455c60") : ""}</g>`;
  const sparkfun = board.id.startsWith('sparkfun-');
  const connectors = friend ? [board.id.includes('spi') ? 'JP2' : 'JP1'] : itsy ? ['JP2', 'JP4'] : ['J2', 'J5', 'J7'];
  const overhangs = board.elements.filter(element => element[4] === 'module').map(([x, y, width, height]) =>
    [x - width / 2 - .45, y - height / 2 - .45, width + .9, height + .9]);
  entry.mounting = cadBoardMounting(board, entry, { connectors, overhangs,
    bodyEvidence: 'Named header drill coordinates and PCB outline follow the exact manufacturer Eagle commit linked on this entry. Body regions retain the fixed source-scaled PCB and existing simplified radio-package rectangles; the rear artwork is omitted. Simplified component envelopes do not upgrade native CAD accuracy.',
    note: friend ? 'Populate the complete single main male-header row at 2.54 mm pitch. Keep rear SWD/power service pads free of downward pins.' :
      itsy ? 'Populate both complete 14-pin main rows, 15.24 mm apart at 2.54 mm pitch.' :
      'Populate all 21 signal/power holes in J2, J5 and J7, with the signal rows 15.24 mm apart. Leave the adjacent J13/J9/J14 ground-guard rows unpopulated or face-up to avoid shorting their neighboring signal strips. The manufacturer hardware-assembly guide shows this breadboard header population.' });
  return entry;
});

export default defineFamily("nordic-more", entries.map(({ component, art, footprint, model, mounting }) => ({ component, render: art, footprint, model, mounting })));
