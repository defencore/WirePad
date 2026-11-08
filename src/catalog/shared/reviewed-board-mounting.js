// Only explicit manufacturer-reviewed insertion maps belong in this builder.
// Source contact coordinates and illustrated material regions are independent
// of reference-carrier copper and of the default catalog drawing frame.
export function reviewedBoardMounting(specification) {
  const { source, contacts, bodyRegions, bodyEvidence, note,
    calibration, viewBounds, renderMounted, view } = normalizeReviewedView(specification);
  const x = Math.min(...bodyRegions.map(region => region.x));
  const y = Math.min(...bodyRegions.map(region => region.y));
  const body = { x, y,
    width: Math.max(...bodyRegions.map(region => region.x + region.width)) - x,
    height: Math.max(...bodyRegions.map(region => region.y + region.height)) - y };
  return {
    type: 'breadboard-module', pitch: 2.54, source, contacts, body, bodyRegions, bodyEvidence,
    note: `Install straight 2.54 mm male headers with insertion leads below the PCB. ${note ?? ''}`.trim(),
    ...(calibration ? { calibration } : {}), viewBounds: viewBounds ?? body,
    ...(renderMounted ? { renderMounted } : {}), ...(view ? { view } : {}),
  };
}

// Older reviewed illustrations can use different drawing scales on X and Y.
// Normalize those axes against every explicitly supplied manufacturer lead,
// while leaving the published component and its original artwork untouched.
function normalizeReviewedView(specification) {
  const { contacts, view, calibration, viewBounds, renderMounted } = specification;
  if (!view || calibration) return specification;
  const pins = new Map(view.pins.map(pin => [pin.pinId, pin]));
  const axes = {};
  for (const axis of ['x', 'y']) {
    const sorted = [...contacts].sort((a, b) => a[axis] - b[axis]), first = sorted[0], last = sorted.at(-1);
    const distance = last[axis] - first[axis];
    if (distance < 1e-7) throw new Error('A single-row physical view needs an explicit source calibration.');
    const units = (pins.get(last.pinId)[axis] - pins.get(first.pinId)[axis]) / distance;
    const origin = pins.get(first.pinId)[axis] - first[axis] * units;
    if (!Number.isFinite(units) || units <= 0 || contacts.some(contact =>
      Math.abs(pins.get(contact.pinId)[axis] - origin - contact[axis] * units) > 1e-3)) {
      throw new Error('Every reviewed header lead must share a positive affine source calibration.');
    }
    axes[axis] = { units, origin };
  }
  const unitsPerMm = 10;
  const origin = { x: 20 - (viewBounds.x - axes.x.origin) / axes.x.units * unitsPerMm,
    y: 20 - (viewBounds.y - axes.y.origin) / axes.y.units * unitsPerMm };
  const point = value => ({ x: origin.x + (value.x - axes.x.origin) / axes.x.units * unitsPerMm,
    y: origin.y + (value.y - axes.y.origin) / axes.y.units * unitsPerMm });
  const rectangle = value => ({ ...point(value), width: value.width / axes.x.units * unitsPerMm,
    height: value.height / axes.y.units * unitsPerMm });
  const sx = unitsPerMm / axes.x.units, sy = unitsPerMm / axes.y.units;
  const tx = origin.x - axes.x.origin * sx, ty = origin.y - axes.y.origin * sy;
  const residual = Math.max(...contacts.flatMap(contact => {
    const mapped = point(pins.get(contact.pinId));
    return ['x', 'y'].map(axis => Math.abs(mapped[axis] - origin[axis] - contact[axis] * unitsPerMm) / unitsPerMm);
  }));
  const toleranceMm = residual > 1e-10 ? Math.ceil(residual * 1e8) / 1e8 : 0;
  return { ...specification, calibration: { origin, unitsPerMm, ...(toleranceMm ? { toleranceMm } : {}) },
    bodyRegions: specification.bodyRegions.map(rectangle), viewBounds: rectangle(viewBounds),
    view: { ...view, pins: view.pins.map(pin => ({ ...pin, ...point(pin) })) },
    renderMounted: component => `<g transform="matrix(${sx} 0 0 ${sy} ${tx} ${ty})">${renderMounted(component)}</g>` };
}

// Keep the existing front hardware while omitting a separate illustration of
// the same board's rear. Every electrical contact is resolved by the view map.
export function clippedFrontArtwork(render, component, bounds) {
  const id = `mounted-front-${component.id}`;
  return `<defs><clipPath id="${id}" clipPathUnits="userSpaceOnUse"><rect x="${bounds.x}" y="${bounds.y}" width="${bounds.width}" height="${bounds.height}"/></clipPath></defs>` +
    `<g clip-path="url(#${id})">${render(component, false)}</g>`;
}
