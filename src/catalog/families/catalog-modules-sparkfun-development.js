import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/development/manifest.js";

export default defineFamily("modules-sparkfun-development", specifications.map(sourceModule));
