// Only explicitly reviewed, downward-facing 2.54 mm male header rows belong here.
// Physical insertion centers are independent of selected native carrier lands.
export function breadboardHeaderMounting(source, rows, note = '', physicalBody) {
  const regions = physicalBody?.regions;
  const body = regions && {
    x: Math.min(...regions.map(region => region.x)), y: Math.min(...regions.map(region => region.y)),
    width: Math.max(...regions.map(region => region.x + region.width)) - Math.min(...regions.map(region => region.x)),
    height: Math.max(...regions.map(region => region.y + region.height)) - Math.min(...regions.map(region => region.y)),
  };
  return {
    type: 'breadboard-module', pitch: 2.54, source,
    contacts: rows.flatMap(({ ids, x, y }) => ids.map((pinId, index) => ({ pinId, x, y: y + index * 2.54 }))),
    ...(regions ? { body, bodyRegions: regions, bodyEvidence: physicalBody.evidence } : {}),
    note: `Install straight 2.54 mm male headers with the long insertion leads below the PCB. Only the listed header leads enter the breadboard; auxiliary sockets, solder pads and programming contacts remain separate. ${note}`.trim(),
  };
}
