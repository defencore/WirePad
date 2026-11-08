import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/sensors/manifest.js";

export default defineFamily("modules-adafruit-sensors", specifications.map(sourceModule));
