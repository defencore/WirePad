import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/indicators-inputs/manifest.js";

export default defineFamily("modules-sparkfun-indicators-inputs", specifications.map(sourceModule));
