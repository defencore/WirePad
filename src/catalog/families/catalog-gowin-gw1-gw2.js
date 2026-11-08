import { defineFamily } from "../registry.js";
import { gowinBoardComponent as makeComponent, gowinBoardArt as artFor, gowinBoardFootprint as footprintFor } from "../shared/gowin-board.js";
import boards from "../data/gowin-gw1-gw2/manifest.js";

const gowinLegacyComponents = boards.map(makeComponent);
const gowinLegacyArt = Object.fromEntries(boards.map(board => [board.id,(component,labels)=>artFor(board,component,labels)]));
const gowinLegacyFootprints = Object.fromEntries(boards.map(board => [board.id,footprintFor(board)]));
const gowinLegacyModels = Object.fromEntries(boards.map(board => [board.id, {
  label: "Manufacturer development-board schematic (PDF; no STEP supplied)", url: board.schematic ?? board.manual,
  note: "Official source drawing, not a verified 3D model. The WirePad 3D carrier is approximate.",
}]));

export default defineFamily("gowin-gw1-gw2", (gowinLegacyComponents).map(component => ({ component, render: (gowinLegacyArt)[component.art], footprint: (gowinLegacyFootprints)[component.id], model: gowinLegacyModels[component.id] })));
