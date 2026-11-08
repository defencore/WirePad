import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import specifications from "../data/market-hc-logic/manifest.js";

export default defineFamily("market-hc-logic", specifications.map(marketPackage));
