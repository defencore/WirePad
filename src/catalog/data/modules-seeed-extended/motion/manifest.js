import { specificationSections } from "../../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-seeed-extended-motion", [
  specifications,
], [
  "seeed-module-108020103",
  "seeed-module-105020001",
  "seeed-module-108020102"
]);
