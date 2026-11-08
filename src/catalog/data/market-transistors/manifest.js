import { specificationSections } from "../../shared/specification-sections.js";
import leadThroughBipolar from "./lead-through-bipolar.js";
import surfaceMountBipolar from "./surface-mount-bipolar.js";
import powerBipolar from "./power-bipolar.js";
import fieldEffectIgbt from "./field-effect-igbt.js";

// Keep the published component order independent of functional section boundaries.
export default specificationSections("market-transistors", [
  leadThroughBipolar,
  surfaceMountBipolar,
  powerBipolar,
  fieldEffectIgbt,
], [
  "market-2n3904ta",
  "market-2n3906ta",
  "market-pn2222ata",
  "market-pn2907ata",
  "market-bc547bta",
  "market-bc557bta",
  "market-bc33725ta",
  "market-bc32725ta",
  "market-mpsa42",
  "market-mpsa92",
  "market-mpsa06",
  "market-mpsa56",
  "market-mpsa13-pbfree",
  "market-mpsa63-pbfree",
  "market-mmbt3904lt1g",
  "market-mmbt3906lt1g",
  "market-mmbt2222alt1g",
  "market-mmbt2907alt1g",
  "market-bc847blt1g",
  "market-bc857blt1g",
  "market-bc817-40-215",
  "market-bc807-40-215",
  "market-tip31c",
  "market-tip32c",
  "market-tip41c",
  "market-tip42c",
  "market-tip120",
  "market-tip127",
  "market-bd139",
  "market-bd140",
  "market-mje340",
  "market-mje350",
  "market-fqp27p06",
  "market-irfz44npbf",
  "market-irf540npbf",
  "market-irf9540npbf",
  "market-stp55nf06l",
  "market-stp10nk60z",
  "market-2n7000",
  "market-bs170",
  "market-bss138lt1g",
  "market-stgw40h120df2",
  "market-j111",
  "market-j175"
]);
