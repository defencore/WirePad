import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import { cadBoardMounting } from "../shared/cad-board-mounting.js";
import board0 from "../data/ready-arduino-more/arduino-mkr-wan-1300.js";
import board1 from "../data/ready-arduino-more/arduino-mkr-wan-1310.js";
import board2 from "../data/ready-arduino-more/arduino-mkr-gsm-1400.js";
import board3 from "../data/ready-arduino-more/arduino-mkr-nb-1500.js";
import board4 from "../data/ready-arduino-more/arduino-mkr-fox-1200.js";

const boards = [board0, board1, board2, board3, board4];

const overhangs = [
  [[-1.25, 8.0999, 5.6, 8.8004], [6.73, 18.75, 5.54, 6.5]],
  [[-1.3, 8.0999, 5.6, 8.8004]], [[-1.3, 8.0999, 5.6, 8.8004]],
  [[-1.3, 8.0999, 5.6, 8.8004]],
  [[-1.25, 8.0999, 5.6, 8.8004], [6.73, 18.75, 5.54, 6.5]],
];
const entries = boards.map((board, index) => {
  const entry = cadReadyBoard(board);
  entry.mounting = cadBoardMounting(board, entry, { connectors: ['J5', 'J3'], overhangs: overhangs[index],
    note: 'Populate both complete 14-pin MKR side rows, 20.32 mm apart at 2.54 mm pitch. Rear debug pads and the fitted battery/ESLOV connectors are not downward headers.' });
  return entry;
});
const arduinoMoreComponents = entries.map(entry => entry.component);
const arduinoMoreArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const arduinoMoreFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const arduinoMoreModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));
const arduinoMoreMountings = Object.fromEntries(entries.map(entry => [entry.component.id, entry.mounting]));

export default defineFamily("arduino-more", (arduinoMoreComponents).map(component => ({ component, render: (arduinoMoreArt)[component.art], footprint: (arduinoMoreFootprints)[component.id], model: arduinoMoreModels[component.id], mounting: arduinoMoreMountings[component.id] })));
