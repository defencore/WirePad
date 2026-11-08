import { specificationSections } from "../../../shared/specification-sections.js";
import adaptersCarriers from "./adapters-carriers.js";
import analogMeasurement from "./analog-measurement.js";
import busInterfaces from "./bus-interfaces.js";
import radioWireless from "./radio-wireless.js";
import serialTransceivers from "./serial-transceivers.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-mikroe-interfaces", [
  adaptersCarriers,
  analogMeasurement,
  busInterfaces,
  radioWireless,
  serialTransceivers,
], [
  "mikroe-mikroe-3743-i2ctospi",
  "mikroe-mikroe-2924-miwi",
  "mikroe-mikroe-2925-miwi2",
  "mikroe-mikroe-2903-ooktx",
  "mikroe-mikroe-2545-rn4678",
  "mikroe-mikroe-4199-uwb",
  "mikroe-mikroe-2583-spiisolator",
  "mikroe-mikroe-4166-isoadc2",
  "mikroe-mikroe-3993-rs4856",
  "mikroe-mikroe-4675-i2cisolator4",
  "mikroe-mikroe-5603-i2cisolator6",
  "mikroe-mikroe-5943-i2cisolator7",
  "mikroe-mikroe-4331-iso9141",
  "mikroe-mikroe-3395-rs4854",
  "mikroe-mikroe-4225-singlewirecan",
  "mikroe-mikroe-3870-duallin",
  "mikroe-mikroe-3298-llcspi",
  "mikroe-mikroe-6767-rs2324",
  "mikroe-mikroe-2821-rs4853",
  "mikroe-mikroe-5659-rs4857",
  "mikroe-mikroe-5752-rs4858",
  "mikroe-mikroe-6316-rs485isolator4"
]);
