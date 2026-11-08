// A strip can be electrically connected while its neighboring holes stay free.
// Reserve the exact socket used by an insertion lead or a jumper endpoint.
export function breadboardOccupancy(project, hostPartId, { ignorePartId } = {}) {
  const holes = new Map();
  function entry(pinId) {
    if (!holes.has(pinId)) holes.set(pinId, { parts: [], wires: [] });
    return holes.get(pinId);
  }
  for (const part of project.parts) {
    if (part.id === ignorePartId || part.attachment?.hostPartId !== hostPartId) continue;
    for (const contact of part.attachment.contacts) entry(contact.hostPinId).parts.push(part.id);
  }
  for (const wire of project.wires) for (const endpoint of [wire.from, wire.to]) {
    if (endpoint.partId === hostPartId) entry(endpoint.pinId).wires.push(wire.id);
  }
  return holes;
}
