import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-fermion-sensors", [
  specifications,
], [
  "dfrobot-fermion-sht31-f-sen0332",
  "dfrobot-fermion-lwlp5000-sen0343",
  "dfrobot-fermion-as7341-sen0365",
  "dfrobot-fermion-vl53l3cx-sen0378",
  "dfrobot-fermion-sgp40-sen0392",
  "dfrobot-fermion-tcs3430-sen0403",
  "dfrobot-fermion-lis2dw12-sen0405",
  "dfrobot-fermion-h3lis200dl-sen0408",
  "dfrobot-fermion-vl6180x-sen0427",
  "dfrobot-fermion-tmf8801-sen0430",
  "dfrobot-fermion-sts35-sen0434",
  "dfrobot-fermion-mcp9808-sen0435",
  "dfrobot-fermion-mics5524-sen0440",
  "dfrobot-fermion-mics2714-sen0441",
  "dfrobot-fermion-s15ot421-sen0487",
  "dfrobot-fermion-bmm350-sen0622"
]);
