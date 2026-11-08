import { defineFamily } from "../registry.js";
import { sourceModule } from "../shared/modules-source-board.js";
import specifications from "../data/modules-seeed-extended/interfaces/manifest.js";

export default defineFamily("modules-seeed-extended-interfaces", specifications.map(sourceModule));
