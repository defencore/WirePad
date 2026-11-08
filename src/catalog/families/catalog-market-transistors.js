import { withRemainingMarketMounting } from '../shared/remaining-market-mounting.js';
import parts from "../data/market-transistors/manifest.js";
import { defineFamily } from "../registry.js";
import { marketDiscrete } from "../shared/market-discretes.js";

// Each ordering code is paired with its manufacturer pin drawing and dated offer.

export default defineFamily("market-transistors", parts.map(spec => withRemainingMarketMounting(marketDiscrete(spec, { breadboard: spec.shape === 'to92' }))));
