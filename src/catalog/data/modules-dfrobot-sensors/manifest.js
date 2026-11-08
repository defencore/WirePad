import { specificationSections } from "../../shared/specification-sections.js";
import specifications from "./specifications.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-dfrobot-sensors", [
  specifications,
], [
  "dfrobot-bmp280-sen0372",
  "dfrobot-ens160-sen0515",
  "dfrobot-aht20-fermion-sen0527",
  "dfrobot-aht20-gravity-sen0528",
  "dfrobot-ltr390-sen0540",
  "dfrobot-bmp585-gravity-sen0664",
  "dfrobot-bmp581-gravity-sen0665",
  "dfrobot-bmp585-fermion-sen0666",
  "dfrobot-bmp581-fermion-sen0667",
  "dfrobot-bmi323-fermion-sen0693"
]);
