// Artwork and connection anchors use the same component-side contact centers.
export function physicalComponent(component, positions) {
  const order = new Map([...component.pins].sort((a, b) => a.y - b.y || a.x - b.x).map((pin, index) => [pin.id, index]));
  return {
    ...component,
    contactLayout: 'physical',
    pins: component.pins.map((pin, index) => {
      const edge = pin.edge ?? (pin.x === 0 ? 'left' : pin.x === component.width ? 'right' : pin.y === 0 ? 'top' : 'bottom');
      const point = typeof positions === 'function' ? positions(pin, index)
        : positions instanceof Map ? positions.get(pin.id) : Array.isArray(positions) ? positions[index] : positions[pin.id];
      const [x, y] = Array.isArray(point) ? point : [point.x, point.y];
      const symbolPlacement = pin.symbolPlacement ?? { side: pin.x <= component.width / 2 ? 'left' : 'right', order: order.get(pin.id) };
      return { ...pin, edge, symbolPlacement, ...(Array.isArray(point) ? {} : point), x, y, surface: true };
    }),
  };
}

// Older reference carriers inferred rows from canvas edges. Make those existing
// native pad positions explicit before moving the canvas anchors onto the board.
export function preserveFootprint(component, footprint) {
  if (typeof footprint === 'function' || footprint.groups || footprint.pads || footprint.inline || footprint.switch) return footprint;
  const pitch = footprint.pitch ?? 2.54;
  const distance = (footprint.rows ?? footprint.body[0] - 3) / 2;
  const left = component.pins.filter(pin => pin.x <= component.width / 2).sort((a, b) => a.y - b.y);
  const right = component.pins.filter(pin => pin.x > component.width / 2).sort((a, b) => a.y - b.y);
  const pads = [left, right].flatMap((pins, side) => pins.map((pin, index) => ({
    id: pin.id, x: side ? distance : -distance,
    y: (footprint.start ?? -(pins.length - 1) * pitch / 2) + index * pitch,
    square: index === 0,
  })));
  return { ...footprint, pads };
}

export function physicalEntry(entry, positions) {
  return { ...entry, component: physicalComponent(entry.component, positions), footprint: preserveFootprint(entry.component, entry.footprint) };
}
