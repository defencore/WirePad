import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/additional-interfaces/manifest.js";

export default defineFamily("modules-sparkfun-additional-interfaces", specifications.map(sourceModule));
