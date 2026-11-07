export const sameEndpoint = (a, b) => a.junctionId
  ? a.junctionId === b.junctionId
  : !b.junctionId && a.partId === b.partId && a.pinId === b.pinId;

export const endpointKey = ({ junctionId, partId, pinId }) => junctionId
  ? `junction/${junctionId}` : `pin/${partId}/${pinId}`;
