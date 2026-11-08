import { specificationSections } from "../../shared/specification-sections.js";
import motorControl from "./motor-control.js";
import gw1Starter from "./gw1-starter.js";
import gw2Starter from "./gw2-starter.js";

// Preserve published IDs and component order as records move between functional sections.
export default specificationSections("gowin-gw1-gw2", [
  motorControl,
  gw1Starter,
  gw2Starter,
], [
  "gowin-dk-motor-gw2a-lv55pg484c8i7-v3-0",
  "gowin-dk-start-gw1n-lv4lq144c6i5-v1-1",
  "gowin-dk-start-gw1n-lv9eq144c6i5-v2-1",
  "gowin-dk-start-gw1nr-lv9lq144pc6i5-v3-1",
  "gowin-dk-start-gw1ns-lv4cqn48c7i6-v1-1",
  "gowin-dk-start-gw1nsr-lv4cqn48pc7i6-v1-1",
  "gowin-dk-start-gw1nz-lv1fn32c6i5-v3-1",
  "gowin-dk-start-gw2a-lv18pg256c8i7-v2-0",
  "gowin-dk-start-gw2a-lv55pg484c8i7-v1-3",
  "gowin-dk-start-gw2an-uv9xug400c7i6-v1-0",
  "gowin-dk-start-gw2ar-lv18eq144pc8i7-v1-1",
  "gowin-dk-start-gw1nsr-lv4cqn48gc7i6-v1-1"
]);
