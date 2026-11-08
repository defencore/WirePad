import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/additional-sensors/manifest.js";

export default defineFamily("modules-sparkfun-additional-sensors", specifications.map(sourceModule));
