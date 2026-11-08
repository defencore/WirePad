import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-motion-relays", [
  specifications,
], [
  "dfrobot-icp10111-sen0516",
  "dfrobot-gravity-6dof-sen0692",
  "dfrobot-gravity-9dof-sen0694",
  "dfrobot-gravity-10dof-sen0696",
  "dfrobot-fermion-9dof-sen0695",
  "dfrobot-fermion-10dof-sen0697",
  "dfrobot-bmv080-sen0663",
  "dfrobot-transparent-relay-dfr0989",
  "dfrobot-magnetic-latching-relay-dfr0996",
  "dfrobot-uv-index-240-370-sen0636"
]);
