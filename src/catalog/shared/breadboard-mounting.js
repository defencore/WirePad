// Only explicitly reviewed, downward-facing 2.54 mm male header rows belong here.
// Physical insertion centers are independent of selected native carrier lands.
export function breadboardHeaderMounting(source, rows, note = '') {
  return {
    type: 'breadboard-module', pitch: 2.54, source,
    contacts: rows.flatMap(({ ids, x, y }) => ids.map((pinId, index) => ({ pinId, x, y: y + index * 2.54 }))),
    note: `Install straight 2.54 mm male headers with the long insertion leads below the PCB. Only the listed header leads enter the breadboard; auxiliary sockets, solder pads and programming contacts remain separate. ${note}`.trim(),
  };
}
