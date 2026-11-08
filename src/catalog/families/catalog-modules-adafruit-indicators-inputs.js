import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/indicators-inputs/manifest.js";

export default defineFamily("modules-adafruit-indicators-inputs", specifications.map(sourceModule));
