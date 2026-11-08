const targetSelector = '.canvas-pin, .canvas-junction, .wire-hit, .part-body';
export const handleSelector = '.wire-handle';
export const selectionOptions = event => ({
  additive: event.shiftKey && !event.ctrlKey && !event.metaKey,
  toggle: (event.ctrlKey || event.metaKey) && !event.shiftKey,
  remove: event.shiftKey && (event.ctrlKey || event.metaKey),
});
export const modifiesSelection = options => options.additive || options.toggle || options.remove;

function targetInfo(target, selector) {
  const { part, partRegion, pin, junction, wire, wireHandle, handleWire, segmentIndex, bendIndex, handleX, handleY, axis } =
    target.closest(selector)?.dataset ?? {};
  const index = segmentIndex ?? bendIndex;
  if (wireHandle) return { handle: {
    kind: wireHandle, wireId: handleWire, index: index === undefined ? undefined : Number(index), axis,
    point: { x: Number(handleX), y: Number(handleY) },
  } };
  return { partId: part, partRegion, wireId: wire, pin: pin && { partId: part, pinId: pin }, junction: junction && { junctionId: junction } };
}

export function canvasTargets(canvas, svg) {
  const document = svg.ownerDocument;
  function hitAt(event, { handles = true, excludeWire, selecting = false } = {}) {
    const point = canvas.point(event.clientX, event.clientY);
    const stack = document.elementsFromPoint(event.clientX, event.clientY);
    const selector = handles ? `${handleSelector}, ${targetSelector}` : targetSelector;
    const selectable = selecting ? stack.find(node => svg.contains(node) && node.closest('.canvas-junction, .wire-hit')) : undefined;
    const target = selectable ?? stack.find(node => {
      const candidate = svg.contains(node) && node.closest(selector);
      return candidate && (!excludeWire || candidate.dataset.wire !== excludeWire);
    });
    const hit = targetInfo(target ?? (excludeWire ? svg : event.target), selector);
    if (hit.handle) {
      const candidates = new Set(stack.map(node => node.closest(handleSelector)).filter(Boolean));
      let minimum = Infinity;
      for (const candidate of candidates) {
        const bounds = candidate.querySelector('.wire-handle-hit').getBoundingClientRect();
        const distance = Math.hypot(event.clientX - bounds.x - bounds.width / 2, event.clientY - bounds.y - bounds.height / 2);
        if (distance < minimum) {
          hit.handle = targetInfo(candidate, handleSelector).handle;
          minimum = distance;
        }
      }
    }
    if (hit.pin) {
      const candidates = new Set(stack.filter(node => svg.contains(node)).map(node => node.closest('.canvas-pin')).filter(Boolean));
      let minimum = Infinity;
      for (const candidate of candidates) {
        const pin = targetInfo(candidate, '.canvas-pin').pin;
        const anchor = canvas.position(pin);
        const distance = Math.hypot(point.x - anchor.x, point.y - anchor.y);
        if (distance < minimum) {
          hit.pin = pin;
          hit.partId = pin.partId;
          minimum = distance;
        }
      }
    }
    if (hit.wireId) {
      const ids = stack.filter(node => node.matches('.wire-hit') && node.dataset.wire !== excludeWire).map(node => node.dataset.wire);
      if (ids.length > 1) hit.wireId = canvas.nearestWire(ids, point) ?? hit.wireId;
    }
    return { ...hit, point };
  }

  function anchorAt({ pin, junction, wireId, point }) {
    return pin || junction || (wireId && point && canvas.anchorWire(wireId, point, Math.min(20, 9 / canvas.scale)));
  }

  function focusedHit(target) {
    const hit = targetInfo(target, `${handleSelector}, ${targetSelector}`);
    if (hit.wireId) hit.point = canvas.branchAnchor(hit.wireId)?.point;
    return hit;
  }

  return { hitAt, anchorAt, focusedHit };
}
