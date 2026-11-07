import { label } from "./svg.js";

// CAD-derived views retain manufacturer contact numbering and same-side geometry.
// Through-header contacts are shown on the component side; backside pads get a
// separate mirrored underside view. Carrier coordinates remain a distinct export.
export function cadReadyBoard(board) {
  const margin = 20;
  const scale = Math.min(9, 650 / Math.max(...board.view));
  const width = Math.ceil(board.view[0] * scale + margin * 2);
  const height = Math.ceil(board.view[1] * scale + margin * 2 + 18);
  const pins = board.contacts.map(pin => ({
    id: pin.id, number: pin.number, label: pin.label, type: pin.type, description: pin.description,
    x: Number((margin + pin.vx * scale).toFixed(4)), y: Number((margin + pin.vy * scale).toFixed(4)), surface: true,
  }));
  const component = {
    id: board.id, art: board.id, name: board.name, shortName: board.shortName,
    manufacturer: board.manufacturer, category: board.category ?? "Microcontrollers", referencePrefix: "U",
    subtitle: board.subtitle, description: board.description, source: board.source,
    tags: board.tags, contactLayout: "physical", width, height, pins,
  };
  const art = (_component, labels = true) => {
    const contacts = labels ? board.contacts.map(pin => {
      const group = board.contacts.filter(p => p.connector === pin.connector);
      const index = group.findIndex(p => p.id === pin.id);
      if (board.contactLabels && pin.back) {
        const minX = Math.min(...group.map(p => p.vx)), maxX = Math.max(...group.map(p => p.vx));
        const minY = Math.min(...group.map(p => p.vy)), maxY = Math.max(...group.map(p => p.vy));
        if (maxY - minY > maxX - minX) {
          const left = pin.vx < board.body[0] / 2;
          return label(pin.vx + (left ? 1.15 : -1.15), pin.vy, pin.label, .75, "#f4efda", left ? "start" : "end");
        }
        return label(pin.vx, pin.vy + 1.4, pin.label, .65, "#f4efda");
      }
      const localY = pin.back ? pin.vy - board.body[1] - 6 : pin.vy;
      const upper = localY < board.body[1] / 2;
      const dense = group.some(p => p.id !== pin.id && Math.hypot(p.vx - pin.vx, p.vy - pin.vy) < 1.5);
      // Original silk is retained; boards without text silk receive compact pad labels.
      if (!board.printedPinLabels && !pin.back && !dense) {
        const caption = pin.label.length > 5 ? pin.number.split(".").at(-1) : pin.label;
        const spanX = Math.max(...group.map(p => p.vx)) - Math.min(...group.map(p => p.vx));
        const spanY = Math.max(...group.map(p => p.vy)) - Math.min(...group.map(p => p.vy));
        if (spanY > spanX) {
          const left = pin.vx < board.body[0] / 2;
          return label(pin.vx + (left ? 1.25 : -1.25), pin.vy, caption, .85, "#f4efda", left ? "start" : "end");
        }
        return label(pin.vx, pin.vy + (upper ? 1.65 : -1.5), caption, .9, "#f4efda");
      }
      if (group.length < 7 || (index !== 0 && index !== group.length - 1)) return "";
      return label(pin.vx, pin.vy + (upper ? -.95 : .95), pin.number.split(".").at(-1), .8, "#fbf0c9");
    }).join("") : "";
    const viewLabel = board.hasBack ? label(board.body[0] / 2, board.body[1] + 3, "UNDERSIDE • MIRRORED", 1.3, "#455c60") : "";
    return `<g transform="translate(${margin} ${margin}) scale(${scale})">${board.svg}${contacts}${viewLabel}</g>` +
      (labels ? label(width / 2, height - 7, "Hover for pin functions", 8, "#557072") : "");
  };
  return { component, art, footprint: {
    body: board.body, color: board.color, modelHeight: 7, pads: board.pads,
    note: board.footprintNote ?? "Reference contact carrier using the exact published board CAD pad centers, drill sizes and contact order. The illustration separately mirrors underside contacts. Connector solder lands, castellated repeats and debug pads retain their manufacturer identifiers; this is not a complete board reproduction or production connector/socket land pattern. Review the linked original manufacturer CAD, fitted revision, mating side and clearances before fabrication.",
    details: [[0, 0, Math.min(15, board.body[0] * .35), Math.min(10, board.body[1] * .35), 2, "#253033"]],
  }, model: board.cad };
}
