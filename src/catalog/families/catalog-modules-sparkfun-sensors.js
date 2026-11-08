import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/sensors/manifest.js";

export default defineFamily("modules-sparkfun-sensors", specifications.map(sourceModule));
