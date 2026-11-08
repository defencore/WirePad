import { specificationSections } from "../../shared/specification-sections.js";
import temperature from "./temperature.js";
import humidityTemperature from "./humidity-temperature.js";
import thermocoupleConverters from "./thermocouple-converters.js";
import inertialMagnetic from "./inertial-magnetic.js";
import pressure from "./pressure.js";
import touchControllers from "./touch-controllers.js";
import gasEnvironmental from "./gas-environmental.js";

// Keep the published component order independent of functional section boundaries.
export default specificationSections("market-sensors", [
  temperature,
  humidityTemperature,
  thermocoupleConverters,
  inertialMagnetic,
  pressure,
  touchControllers,
  gasEnvironmental,
], [
  "lm35dz-ic",
  "lm335z-ic",
  "tmp36gt9z-ic",
  "lm75bd-ic",
  "adt7410trz-ic",
  "adt7310trz-ic",
  "mcp9808-e-ms",
  "mcp9700at-e-tt",
  "tmp102aidrlr",
  "tmp117aidrvr",
  "stts22htr",
  "ds18b20-ic",
  "sht20-ic",
  "sht31-dis-ic",
  "shtc3-ic",
  "sht45-ad1b-ic",
  "hdc1080dmbr",
  "hdc2080dmbr",
  "max31855kasa-ic",
  "max6675isa-ic",
  "adxl335bcpz-ic",
  "adxl345bccz-ic",
  "adxl362bccz-ic",
  "adxl372bccz-ic",
  "lis3dhtr-ic",
  "lis2dw12tr-ic",
  "bmp581-ic",
  "bme680-ic",
  "lps22hhtr-ic",
  "lps28dfwtr-ic",
  "bma400-ic",
  "bmi270-ic",
  "lsm6dsotr-ic",
  "lsm6dsoxtr-ic",
  "lis2mdltr-ic",
  "lsm303agrtr-ic",
  "cap1188-1-cp-tr",
  "cap1203-1-sn-tr",
  "at42qt1010-tshr",
  "at42qt1070-ssur",
  "sgp40-ic",
  "sgp41-ic",
  "ens160-bglt-ic",
  "bme688-ic"
]);
