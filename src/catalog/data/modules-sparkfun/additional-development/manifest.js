import { specificationSections } from "../../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-sparkfun-additional-development", [
  specifications,
], [
  "sparkfun-module-dev16402",
  "sparkfun-module-dev16401",
  "sparkfun-module-wrl16781",
  "sparkfun-module-dev21326",
  "sparkfun-module-wrl17381",
  "sparkfun-module-dev15443"
]);
