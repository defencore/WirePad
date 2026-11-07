import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import board0 from "../data/ready-arduino-more/arduino-mkr-wan-1300.js";
import board1 from "../data/ready-arduino-more/arduino-mkr-wan-1310.js";
import board2 from "../data/ready-arduino-more/arduino-mkr-gsm-1400.js";
import board3 from "../data/ready-arduino-more/arduino-mkr-nb-1500.js";
import board4 from "../data/ready-arduino-more/arduino-mkr-fox-1200.js";

const boards = [board0, board1, board2, board3, board4];

const entries = boards.map(cadReadyBoard);
const arduinoMoreComponents = entries.map(entry => entry.component);
const arduinoMoreArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const arduinoMoreFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const arduinoMoreModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("arduino-more", (arduinoMoreComponents).map(component => ({ component, render: (arduinoMoreArt)[component.art], footprint: (arduinoMoreFootprints)[component.id], model: arduinoMoreModels[component.id] })));
