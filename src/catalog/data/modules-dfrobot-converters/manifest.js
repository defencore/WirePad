import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-converters", [
  specifications,
], [
  "dfrobot-gravity-gp8403-dfr0971",
  "dfrobot-gravity-gp8302-dfr0972",
  "dfrobot-gravity-gp8512-dfr1035",
  "dfrobot-gravity-gp8101s-dfr1036",
  "dfrobot-gravity-gp8501-dfr1037",
  "dfrobot-gravity-gp8211s-dfr1071",
  "dfrobot-gravity-ads1115-0-10v-dfr1184",
  "dfrobot-gravity-gp8600-dfr1229",
  "dfrobot-gravity-gp8630n-dfr1230"
]);
