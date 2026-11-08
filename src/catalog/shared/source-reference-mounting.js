import { sourceModule } from './modules-source-board.js';

// An explicit per-SKU contact map adapts reviewed manufacturer CAD to an older
// catalog entry. Neither the entry's default artwork nor its native asset moves.
export function sourceReferenceMounting(component, reference) {
  if (!reference) return undefined;
  const mapping = new Map(reference.contacts.map(contact => [contact.pinId, contact]));
  if (mapping.size !== component.pins.length || component.pins.some(pin => !mapping.has(pin.id))) {
    throw new Error(`Incomplete physical reference map for ${component.id}.`);
  }
  const contacts = component.pins.map(pin => {
    const contact = mapping.get(pin.id);
    return { ...contact, id: pin.id, number: contact.number, label: pin.label, type: pin.type,
      description: pin.description, size: contact.size ?? [1.7, 1.7] };
  });
  const entry = sourceModule({
    id: `${component.id}-physical-reference`, manufacturer: component.manufacturer, name: component.name,
    sku: reference.sku, description: reference.note, source: reference.source.url, revision: reference.revision,
    board: reference.board, artwork: reference.artwork, holes: reference.holes,
    artworkBounds: reference.artworkBounds, backArtworkBounds: reference.backArtworkBounds,
    backArtwork: reference.backArtwork, contacts,
    mountingReview: {
      contactIds: reference.contacts.filter(contact => contact.insert).map(contact => contact.pinId),
      source: reference.source, projectRearContacts: true, bodyRegions: reference.bodyRegions,
      installation: reference.installation, bodyEvidence: reference.bodyEvidence,
      evidence: { geometry: reference.note },
    },
  });
  return { ...entry.mounting,
    view: { ...entry.mounting.view,
      note: `Explicit ${reference.sku} manufacturer CAD reference for the original IDs. ${reference.note} Only newly inserted instances activate this view; original saved anchors, default artwork and native exports remain unchanged.` },
    renderMounted: () => entry.mounting.renderMounted(entry.component, false),
  };
}
