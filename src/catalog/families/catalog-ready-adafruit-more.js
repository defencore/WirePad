import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import board0 from "../data/ready-adafruit-more/adafruit-feather-m0-basic-2772.js";
import board1 from "../data/ready-adafruit-more/adafruit-feather-m4-3857.js";
import board2 from "../data/ready-adafruit-more/adafruit-feather-esp32-v2-5400.js";
import board3 from "../data/ready-adafruit-more/adafruit-feather-rp2350-6000.js";
import board4 from "../data/ready-adafruit-more/adafruit-qtpy-samd21-4600.js";
import board5 from "../data/ready-adafruit-more/adafruit-itsy-m4-3800.js";
import board6 from "../data/ready-adafruit-more/adafruit-itsy-m0-3727.js";
import board7 from "../data/ready-adafruit-more/adafruit-feather-f405-4382.js";
import board8 from "../data/ready-adafruit-more/adafruit-feather-esp32s2-5000.js";

// Derived from Adafruit Industries / Limor Fried open hardware Eagle CAD.
// CC BY-SA 3.0: https://creativecommons.org/licenses/by-sa/3.0/
// Each entry links the original CAD and its specific license/attribution.

const boards = [board0, board1, board2, board3, board4, board5, board6, board7, board8];

const entries = boards.map(cadReadyBoard);
const adafruitMoreComponents = entries.map(entry => entry.component);
const adafruitMoreArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const adafruitMoreFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const adafruitMoreModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("adafruit-more", (adafruitMoreComponents).map(component => ({ component, render: (adafruitMoreArt)[component.art], footprint: (adafruitMoreFootprints)[component.id], model: adafruitMoreModels[component.id] })));
