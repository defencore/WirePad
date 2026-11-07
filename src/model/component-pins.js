const indexes = new WeakMap();

export function terminalNumber(pin, index) {
  return String(pin.number ?? index + 1);
}

export function pinById(component, id) {
  if (!component) return undefined;
  let pins = indexes.get(component);
  if (!pins) {
    pins = new Map(component.pins.map(pin => [pin.id, pin]));
    indexes.set(component, pins);
  }
  return pins.get(id);
}
