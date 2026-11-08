import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-seeed-extended/sensing/manifest.js";

export default defineFamily("modules-seeed-extended-sensing", specifications.map(sourceModule));
