import { specificationSections } from "../../../shared/specification-sections.js";
import eeprom from "./eeprom.js";
import flashTiming from "./flash-timing.js";
import persistentRam from "./persistent-ram.js";
import staticRam from "./static-ram.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-mikroe-memory", [
  eeprom,
  flashTiming,
  persistentRam,
  staticRam,
], [
  "mikroe-mikroe-1200-eeprom",
  "mikroe-mikroe-5889-eeprom11",
  "mikroe-mikroe-5885-eeprom13",
  "mikroe-mikroe-2536-eeprom4",
  "mikroe-mikroe-4422-eeprom5",
  "mikroe-mikroe-4421-eeprom7",
  "mikroe-mikroe-5681-eeprom9",
  "mikroe-mikroe-2729-eeram5v",
  "mikroe-mikroe-3104-excelonlp",
  "mikroe-mikroe-5740-flash11",
  "mikroe-mikroe-6036-flash12",
  "mikroe-mikroe-2374-flash3",
  "mikroe-mikroe-3780-flash5",
  "mikroe-mikroe-4440-flash7",
  "mikroe-mikroe-2768-fram2",
  "mikroe-mikroe-5119-fram5",
  "mikroe-mikroe-2914-mram",
  "mikroe-mikroe-5838-mram4",
  "mikroe-mikroe-4423-nvsram2",
  "mikroe-mikroe-5915-rng2",
  "mikroe-mikroe-4028-semperflash2",
  "mikroe-mikroe-2828-sqiflash",
  "mikroe-mikroe-4178-sram2",
  "mikroe-mikroe-4293-sram3",
  "mikroe-mikroe-4835-sram4",
  "mikroe-mikroe-4521-swieeprom",
  "mikroe-mikroe-4416-watchdog",
  "mikroe-mikroe-1909-eeprom2",
  "mikroe-mikroe-1989-eeprom3",
  "mikroe-mikroe-4698-excelonultra",
  "mikroe-mikroe-4067-flash6",
  "mikroe-mikroe-5191-mram3",
  "mikroe-mikroe-1902-sram",
  "mikroe-mikroe-2976-rtc7"
]);
