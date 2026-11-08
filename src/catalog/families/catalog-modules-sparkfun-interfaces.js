import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/interfaces/manifest.js";

export default defineFamily("modules-sparkfun-interfaces", specifications.map(sourceModule));
