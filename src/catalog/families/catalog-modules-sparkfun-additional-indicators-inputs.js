import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/additional-indicators-inputs.js";

export default defineFamily("modules-sparkfun-additional-indicators-inputs", specifications.map(sourceModule));
