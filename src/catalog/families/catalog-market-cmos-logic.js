import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import specifications from "../data/market-cmos-logic-parts.js";

export default defineFamily("market-cmos-logic", specifications.map(spec => marketPackage(spec, { breadboard: spec.kind === 'dip' })));
