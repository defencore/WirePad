import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-seeed-sensing", [
  specifications,
], [
  "seeed-grove-bme280-101020193",
  "seeed-grove-bme680-101020513",
  "seeed-grove-bmp280-101020192",
  "seeed-grove-digital-ir-temperature-101020077",
  "seeed-grove-hp206c-101020068",
  "seeed-grove-scd30-101020634",
  "seeed-grove-scd41-101020952",
  "seeed-grove-fsr402-101020553",
  "seeed-grove-vl53l0x-101020532",
  "seeed-grove-as5600-101020692",
  "seeed-grove-digital-pir-101020793",
  "seeed-grove-amg8833-101020557",
  "seeed-grove-compass-v2-101020492",
  "seeed-grove-adxl335-101020051",
  "seeed-grove-d7s-101021096",
  "seeed-grove-gesture-paj7620-101020083",
  "seeed-grove-gsr-101020052"
]);
