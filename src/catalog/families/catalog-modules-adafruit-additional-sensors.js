import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-adafruit/additional-sensors.js";

export default defineFamily("modules-adafruit-additional-sensors", specifications.map(sourceModule));
