import { specificationSections } from "../../../shared/specification-sections.js";
import analogMeasurement from "./analog-measurement.js";
import biometric from "./biometric.js";
import environmental from "./environmental.js";
import motionPosition from "./motion-position.js";
import optical from "./optical.js";
import pressureForce from "./pressure-force.js";
import signalInterfaces from "./signal-interfaces.js";
import temperature from "./temperature.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-sparkfun-sensors", [
  analogMeasurement,
  biometric,
  environmental,
  motionPosition,
  optical,
  pressureForce,
  signalInterfaces,
  temperature,
], [
  "sparkfun-module-sen17372",
  "sparkfun-module-bob08688",
  "sparkfun-module-bob09322",
  "sparkfun-module-rob09453",
  "sparkfun-module-rob09454",
  "sparkfun-module-sen11769",
  "sparkfun-module-sen12916",
  "sparkfun-module-sen12642",
  "sparkfun-module-sen12829",
  "sparkfun-module-sen12040",
  "sparkfun-module-sen13314",
  "sparkfun-module-sen12784",
  "sparkfun-module-sen12785",
  "sparkfun-module-sen11084",
  "sparkfun-module-sen09269",
  "sparkfun-module-sen13322",
  "sparkfun-module-sen12909",
  "sparkfun-module-sen13582",
  "sparkfun-module-sen09836",
  "sparkfun-module-sen11446",
  "sparkfun-module-sen19921",
  "sparkfun-module-sen13676",
  "sparkfun-module-sen13963",
  "sparkfun-module-sen12589",
  "sparkfun-module-sen15177",
  "sparkfun-module-sen14722",
  "sparkfun-module-sen16476",
  "sparkfun-module-sen15219",
  "sparkfun-module-sen20844",
  "sparkfun-module-sen16466",
  "sparkfun-module-sen17374",
  "sparkfun-module-sen10740",
  "sparkfun-module-sen14571",
  "sparkfun-module-sen22857",
  "sparkfun-module-tol20680",
  "sparkfun-module-sen15805"
]);
