import parts from "../data/market-diodes/manifest.js";
import { defineFamily } from "../registry.js";
import { marketDiscrete } from "../shared/market-discretes.js";

// Marked polarity is retained; AC suffixes distinguish equivalent bridge inputs.

export default defineFamily("market-diodes", parts.map(marketDiscrete));
