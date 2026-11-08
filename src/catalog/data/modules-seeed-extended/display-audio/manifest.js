import { specificationSections } from "../../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-seeed-extended-display-audio", [
  specifications,
], [
  "seeed-module-104020130",
  "seeed-module-104020132",
  "seeed-module-107020129",
  "seeed-module-104020248",
  "seeed-module-104020133",
  "seeed-module-104020208",
  "seeed-module-107020007"
]);
