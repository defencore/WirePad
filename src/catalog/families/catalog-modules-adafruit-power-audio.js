import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/power-audio/manifest.js";

export default defineFamily("modules-adafruit-power-audio", specifications.map(sourceModule));
