import { specificationSections } from "../../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-seeed-extended-interfaces", [
  specifications,
], [
  "seeed-module-113020006",
  "seeed-module-103020013",
  "seeed-module-103020193",
  "seeed-module-103020293",
  "seeed-module-109020041",
  "seeed-module-101020636",
  "seeed-module-111020048",
  "seeed-module-113020007",
  "seeed-module-103020002"
]);
