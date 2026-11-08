import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/interfaces/manifest.js";

export default defineFamily("modules-adafruit-interfaces", specifications.map(sourceModule));
