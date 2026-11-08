import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-peripherals", [
  specifications,
], [
  "dfrobot-txs0108e-dfr0844",
  "dfrobot-ltc4316-dfr1185",
  "dfrobot-ec11-sen0235",
  "dfrobot-max30102-v2-sen0344",
  "dfrobot-bno055-sen0374",
  "dfrobot-mcp4725-dfr0552",
  "dfrobot-adum1250-isolator-dfr0565",
  "dfrobot-isolated-rs485-uart-dfr0845",
  "dfrobot-in100-beacon-tel0168"
]);
