import { specificationSections } from "../../../shared/specification-sections.js";
import adaptersCarriers from "./adapters-carriers.js";
import radioWireless from "./radio-wireless.js";
import serialTransceivers from "./serial-transceivers.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-adafruit-additional-interfaces", [
  adaptersCarriers,
  radioWireless,
  serialTransceivers,
], [
  "adafruit-module-2267",
  "adafruit-module-292",
  "adafruit-module-5420",
  "adafruit-module-1272",
  "adafruit-module-2324",
  "adafruit-module-3632",
  "adafruit-module-6001",
  "adafruit-module-6323",
  "adafruit-module-5993",
  "adafruit-module-6014",
  "adafruit-module-4687",
  "adafruit-module-3133",
  "adafruit-module-5945",
  "adafruit-module-5858",
  "adafruit-module-3229",
  "adafruit-module-4569",
  "adafruit-module-2746",
  "adafruit-module-4300",
  "adafruit-module-3654",
  "adafruit-module-5728",
  "adafruit-module-5679",
  "adafruit-module-5862",
  "adafruit-module-2601",
  "adafruit-module-3422"
]);
