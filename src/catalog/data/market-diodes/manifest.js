import { specificationSections } from "../../shared/specification-sections.js";
import switching from "./switching.js";
import schottky from "./schottky.js";
import rectifiers from "./rectifiers.js";
import transientZener from "./transient-zener.js";
import bridges from "./bridges.js";

// Keep the published component order independent of functional section boundaries.
export default specificationSections("market-diodes", [
  switching,
  schottky,
  rectifiers,
  transientZener,
  bridges,
], [
  "market-1n4148w-7-f",
  "market-bav99-7-f",
  "market-bav70-13-f",
  "market-baw56-7-f",
  "market-bas16-7-f",
  "market-1n4448tap",
  "market-bav21-tap",
  "market-bas70-7-f",
  "market-1n4007",
  "market-1n5408",
  "market-uf4007",
  "market-uf5408",
  "market-ba159",
  "market-mur460g",
  "market-mur1560g",
  "market-es1j-13-f",
  "market-1n5819",
  "market-1n5822",
  "market-ss14-e3-61t",
  "market-ss34-e3-57t",
  "market-sb560-3g",
  "market-stps20100ct",
  "market-bat54s-7-f",
  "market-bat54c-7-f",
  "market-smbj5-0a-e3-52",
  "market-smbj12ca-e3-52",
  "market-smbj33a-e3-52",
  "market-smbj58ca-e3-52",
  "market-bzx55c3v3-tap",
  "market-bzx55c5v1-tap",
  "market-1n4733a-tap",
  "market-1n4742a-tap",
  "market-db107",
  "market-mb6s-e3-45",
  "market-kbp206g",
  "market-kbl406",
  "market-gbu6j-e3-45",
  "market-gbj2510-f",
  "market-w10g-e4-51",
  "market-gbpc3508-e4-51"
]);
