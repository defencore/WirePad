import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import { cadBoardMounting } from "../shared/cad-board-mounting.js";
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

// Exact package rectangles in the manufacturer component-side artwork, in mm.
const mountingReviews = [
  { connectors: ['JP1', 'JP3'], overhangs: [[-.455, 7.455, 6, 8.325]] },
  { connectors: ['JP1', 'JP3'], overhangs: [[-.455, 7.455, 6, 8.325]] },
  { connectors: ['JP1', 'JP3'], overhangs: [[-1.143, 6.96, 7.35, 8.94]] },
  // The straight Feather header assembly is distinct from the PCB drill map.
  { connectors: ['JP1', 'JP3'], overhangs: [[-1.2065, 6.96, 7.35, 8.94]],
    installedContacts: board3.contacts.filter(pin => ['JP1', 'JP3'].includes(pin.connector))
      .map(pin => ({ pinId: pin.id, x: pin.x, y: pin.connector === 'JP3' ? 1.27 : pin.y })) },
  { connectors: ['JP1', 'JP3'], overhangs: [[4.42, -1.016, 8.94, 7.35]] },
  { connectors: ['JP2', 'JP4'], overhangs: [[-.455, 4.915, 6, 8.325]] },
  { connectors: ['JP2', 'JP4'], overhangs: [[-.455, 4.915, 6, 8.325]] },
  { connectors: ['JP1', 'JP3'], overhangs: [[-1.143, 6.833, 7.35, 8.94]] },
  { connectors: ['JP1', 'JP3'], overhangs: [[-1.143, 6.96, 7.35, 8.94]] },
];
const entries = boards.map((board, index) => {
  const entry = cadReadyBoard(board), review = mountingReviews[index];
  if (review) entry.mounting = cadBoardMounting(board, entry, { ...review,
    note: board.id === board3.id ? 'Populate all 16+12 straight Feather header posts at nominal 20.32 mm row separation, aligning the unsoldered headers in a breadboard/FeatherWing before soldering. JP3 copper/drills retain their source y=1.2065 mm position; the installed straight posts are visibly square at nominal y=1.27 mm. Manufacturer product #6000 specifies classic Feather/FeatherWing compatibility and includes the straight header strips.' :
      board.id.includes('feather') ? 'Populate the complete 16- and 12-pin rows, 20.32 mm apart at 2.54 mm pitch.' :
      board.id.includes('itsy') ? 'Populate the two complete 14-pin side rows, 15.24 mm apart. Leave the five crosswise end holes unpopulated or face-up.' :
      'Populate both complete seven-pin side rows, 15.24 mm apart at 2.54 mm pitch.' });
  return entry;
});
const adafruitMoreComponents = entries.map(entry => entry.component);
const adafruitMoreArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const adafruitMoreFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const adafruitMoreModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));
const adafruitMoreMountings = Object.fromEntries(entries.map(entry => [entry.component.id, entry.mounting]));

export default defineFamily("adafruit-more", (adafruitMoreComponents).map(component => ({ component, render: (adafruitMoreArt)[component.art], footprint: (adafruitMoreFootprints)[component.id], model: adafruitMoreModels[component.id], mounting: adafruitMoreMountings[component.id] })));
