import specs from "../data/market-power/manifest.js";
import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import { marketAnalogPackage } from "../shared/market-analog-packages.js";

// Exact orderable ICs. Pin arrays are in physical package-number order, viewed from above.
// Stock observations are dated evidence, not a promise of current inventory.

export default defineFamily("market-power", specs.map(spec => (["SOT235", "SOT233", "TO220"].includes(spec.kind) ? marketAnalogPackage(spec) : marketPackage(spec))));
