# WirePad agent instructions

WirePad is a browser-only editor published as a static GitHub Pages site. Keep the interface, catalog copy, and code comments in English. Preserve existing component IDs, pin IDs, and canvas pin positions so saved projects remain usable.

## Add and audit library components

1. Group related parts in a focused `src/catalog-*.js` module. Keep the part definition, illustration, footprint, and manufacturer CAD link together. Register each new family in `catalog.js`, `catalog-art.js`, and `footprints.js`. For a catalog-wide audit, split the work into named families, give agents separate files, and track which entries they checked.
2. Identify the exact part number, package, and board revision. Use the manufacturer's datasheet, pinout, photos, or mechanical drawings. Use a supplied photo for a matching unbranded variant. Record the reference URL on the entry and describe generic or unverified variants as representative.
3. Draw a self-contained SVG using the actual outline, connectors, controls, package, antenna, and relevant markings. Compare it visually with the reference from the same side. For connectors, distinguish the mating face from the solder side and confirm whether the view is mirrored. Keep logical canvas pins legible when they need a separate visual bank.
4. Verify each exposed contact's printed label, electrical type, terminal number, and function. Define the stable canvas ID and place its anchor on an edge. Match KiCad symbol numbers to physical footprint pads, including repeated pads on one electrical terminal.
5. Use manufacturer land patterns and CAD files when available. Clearly label reference carriers, off-board terminations, and approximate geometry. Include a verified vendor STEP or CAD link where available.
6. Run `node --test` and `git diff --check`. Review both labeled and unlabeled SVGs, add representative parts on the canvas, and check an image export. Compare existing pin positions with the previous version after a visual audit. Open the generated symbol and footprint in native KiCad when available. For a release, verify the versioned build on the public domain.
