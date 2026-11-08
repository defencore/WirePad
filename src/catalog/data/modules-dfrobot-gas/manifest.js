import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-gas", [
  specifications,
], [
  "dfrobot-fermion-hcho-sen0563",
  "dfrobot-fermion-co-sen0564",
  "dfrobot-fermion-ch4-sen0565",
  "dfrobot-fermion-voc-sen0566",
  "dfrobot-fermion-nh3-sen0567",
  "dfrobot-fermion-h2s-sen0568",
  "dfrobot-fermion-ethanol-sen0569",
  "dfrobot-fermion-smoke-sen0570",
  "dfrobot-fermion-odor-sen0571",
  "dfrobot-fermion-h2-sen0572",
  "dfrobot-fermion-no2-sen0574"
]);
