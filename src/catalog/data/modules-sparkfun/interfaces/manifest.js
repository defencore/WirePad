import { specificationSections } from "../../../shared/specification-sections.js";
import adaptersCarriers from "./adapters-carriers.js";
import busInterfaces from "./bus-interfaces.js";
import memoryStorage from "./memory-storage.js";
import radioWireless from "./radio-wireless.js";
import serialTransceivers from "./serial-transceivers.js";
import timingIdentity from "./timing-identity.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-sparkfun-interfaces", [
  adaptersCarriers,
  busInterfaces,
  memoryStorage,
  radioWireless,
  serialTransceivers,
  timingIdentity,
], [
  "sparkfun-module-bob09816",
  "sparkfun-module-bob10160",
  "sparkfun-module-bob00573",
  "sparkfun-module-bob09118",
  "sparkfun-module-bob11189",
  "sparkfun-module-sen13030",
  "sparkfun-module-sen22858",
  "sparkfun-module-bob11771",
  "sparkfun-module-bob16281",
  "sparkfun-module-bob13906",
  "sparkfun-module-sen18020",
  "sparkfun-module-bob10680",
  "sparkfun-module-bob10124",
  "sparkfun-module-bob09056",
  "sparkfun-module-sen16826",
  "sparkfun-module-dev13746",
  "sparkfun-module-dev14050",
  "sparkfun-module-dev15573",
  "sparkfun-module-dev18077",
  "sparkfun-module-wrl12775",
  "sparkfun-module-wig13279",
  "sparkfun-module-dev17047",
  "sparkfun-module-dev15164",
  "sparkfun-module-bob23589",
  "sparkfun-module-bob00544",
  "sparkfun-module-bob12941",
  "sparkfun-module-bob23055",
  "sparkfun-module-dev14495",
  "sparkfun-module-wig09555",
  "sparkfun-module-dev13743",
  "sparkfun-module-wrl22032",
  "sparkfun-module-wrl15836"
]);
