import { specificationSections } from "../../shared/specification-sections.js";
import switchingConverters from "./switching-converters.js";
import chargePumps from "./charge-pumps.js";
import linearRegulators from "./linear-regulators.js";
import voltageReferences from "./voltage-references.js";
import pwmControllers from "./pwm-controllers.js";
import gateDrivers from "./gate-drivers.js";
import powerSwitches from "./power-switches.js";

// Keep the published component order independent of functional section boundaries.
export default specificationSections("market-power", [
  switchingConverters,
  chargePumps,
  linearRegulators,
  voltageReferences,
  pwmControllers,
  gateDrivers,
  powerSwitches,
], [
  "onsemi-mc34063ap1g",
  "ti-lm2675m-adj-nopb",
  "ti-lm5007mm-nopb",
  "ti-max660mx-nopb",
  "ti-lt1054cp",
  "ti-lm2662mx-nopb",
  "st-lm317t",
  "ti-lm337t-nopb",
  "ti-tl431aidbzr",
  "adi-max1044cpa-plus",
  "adi-lt1763cs8-3-3-pbf",
  "adi-ad584jnz",
  "adi-ref02cpz",
  "adi-ad587jrz",
  "ti-uc3842an",
  "ti-ucc28c43dgkr",
  "ti-tl494cn",
  "ti-lm723cn-nopb",
  "ti-ucc27524adr",
  "ti-lm5109bma-nopb",
  "ti-tps2113apw",
  "st-sg3525an",
  "microchip-tc4420cpa",
  "microchip-tc4427cpa",
  "infineon-irs2110strpbf",
  "infineon-irs2104strpbf",
  "infineon-irs21844strpbf",
  "renesas-hip4081aipz"
]);
