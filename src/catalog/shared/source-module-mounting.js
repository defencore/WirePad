const rectangleEnvelope = regions => {
  const x = Math.min(...regions.map(region => region.x)), y = Math.min(...regions.map(region => region.y));
  return { x, y, width: Math.max(...regions.map(region => region.x + region.width)) - x,
    height: Math.max(...regions.map(region => region.y + region.height)) - y };
};

// A specification must explicitly review its insertion headers. Source units
// establish scale independently of reference copper, socket pads and captions.
export function sourceModuleMounting(spec, contacts, { cx, cy, scale, renderMounted }) {
  const review = spec.mountingReview;
  if (!review) return undefined;
  const fail = message => { throw new Error(`Invalid source mounting review ${spec.id}: ${message}.`); };
  if (contacts.some(contact => contact.back)) fail('separate rear contacts need an explicit view migration');
  if (!Array.isArray(review.contactIds) || review.contactIds.length < 2 || new Set(review.contactIds).size !== review.contactIds.length) fail('list every reviewed insertion lead once');
  const selected = review.contactIds.map(id => contacts.find(contact => contact.id === id));
  if (selected.some(contact => !contact || contact.smd || !contact.drill)) fail('insertion leads must be source through-hole contacts');
  const toleranceMm = review.toleranceMm ?? 0;
  if (!Number.isFinite(toleranceMm) || toleranceMm < 0 || toleranceMm > .001) fail('source precision must not exceed 0.001 mm');
  if (typeof review.evidence?.geometry !== 'string' || !review.evidence.geometry.trim()) fail('manufacturer header geometry evidence is missing');
  const first = selected[0], pitch = 2.54;
  const insertionContacts = selected.map(contact => {
    const point = { pinId: contact.id, x: contact.x, y: contact.y };
    for (const axis of ['x', 'y']) {
      const nominal = first[axis] + Math.round((contact[axis] - first[axis]) / pitch) * pitch;
      if (Math.abs(nominal - contact[axis]) > toleranceMm + 1e-7) fail(`${contact.id} is outside the reviewed nominal pitch`);
      if (toleranceMm) point[axis] = nominal;
    }
    return point;
  });
  const positiveRectangle = value => value && ['x', 'y', 'width', 'height'].every(key => Number.isFinite(value[key])) && value.width > 0 && value.height > 0;
  if (!Array.isArray(review.bodyRegions) || !review.bodyRegions.length || !review.bodyRegions.every(positiveRectangle)) fail('physical material regions are missing');
  const projectRectangle = region => ({ x: cx + region.x * scale, y: cy + region.y * scale, width: region.width * scale, height: region.height * scale });
  const bodyRegions = review.bodyRegions.map(projectRectangle), body = rectangleEnvelope(bodyRegions);
  const contactRegions = contacts.map(contact => projectRectangle({ x: contact.x - contact.size[0] / 2, y: contact.y - contact.size[1] / 2, width: contact.size[0], height: contact.size[1] }));
  const visible = rectangleEnvelope([...bodyRegions, ...contactRegions]);
  // The view includes physical edge ink, while body regions remain material
  // geometry so decorative stroke never reserves an extra breadboard hole.
  const ink = .08 * scale;
  const viewBounds = { x: visible.x - ink, y: visible.y - ink, width: visible.width + ink * 2, height: visible.height + ink * 2 };
  return {
    type: 'breadboard-module', pitch, source: review.source, contacts: insertionContacts,
    note: review.installation, body, bodyRegions, bodyEvidence: review.bodyEvidence,
    calibration: { origin: { x: cx, y: cy }, unitsPerMm: scale, ...(toleranceMm ? { toleranceMm } : {}) },
    viewBounds, renderMounted,
  };
}
