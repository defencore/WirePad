import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import specifications from "../data/market-memory-display-parts.js";

export default defineFamily("market-memory-display", specifications.map(marketPackage));
