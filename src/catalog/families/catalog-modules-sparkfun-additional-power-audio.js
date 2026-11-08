import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-sparkfun/additional-power-audio.js";

export default defineFamily("modules-sparkfun-additional-power-audio", specifications.map(sourceModule));
