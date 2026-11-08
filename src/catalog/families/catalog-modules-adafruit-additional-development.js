import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/additional-development/manifest.js";

export default defineFamily("modules-adafruit-additional-development", specifications.map(sourceModule));
