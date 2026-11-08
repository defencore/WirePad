import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-seeed-extended/display-audio/manifest.js";

export default defineFamily("modules-seeed-extended-display-audio", specifications.map(sourceModule));
