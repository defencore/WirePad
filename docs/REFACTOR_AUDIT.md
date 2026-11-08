# Project refactor audit — November 8, 2026

WirePad now displays **by DEFENCORE** beneath its name, including at 390 px and 320 px touch widths. The project audit covered catalog ownership, application composition, model/editor/geometry boundaries, canvas interaction, UI lifecycle, drawing/native exports, static packaging and CAD preparation tools.

The final counts, output-comparison digests and browser/native results are retained in [refactor-validation-2026-11-08.json](refactor-validation-2026-11-08.json).

The preceding catalog expansion added 1000 modules, bringing the library to **2002 components in 145 families**. Its source and accuracy review is recorded separately in [the module integration audit](catalog-modules-integration-2026-11-08.json). This subsequent refactor preserves that complete catalog and the prior parallel work.

## Source organization

| Area | Result |
| --- | --- |
| Catalog collections | 44 explicit order manifests resolve 144 functional specification sections. The split covers 988 source-module specifications, 293 chip/discrete specifications and 18 Gowin board specifications. |
| Source geometry and evidence | Physical contacts, original SVG and attribution/provenance live beside specifications in `*-assets.js` or dedicated contact tables. Large immutable manufacturer artwork remains separate from behavior and readable specifications. |
| Catalog behavior | Shared package builders replace large inline family helpers; 39 old aggregate data paths were retired. The largest family behavior file decreased from 184,349 to 64,864 bytes. The largest readable specification section is 97,422 bytes. |
| Catalog interface | Runtime consumers use `src/catalog/index.js`, including artwork and manufacturer/search filtering. Families retain one central registration, their published IDs and their exact order. |
| Canvas | `input.js` coordinates input; `pointer.js` owns pointer/touch gestures, capture and scheduled work. `controls.js` owns screen-space wire/rotation controls. `canvas.js` composes these pieces. Input coordination decreased from 649 to 294 lines; the canvas controller decreased from 401 to 311 lines. |
| UI lifecycle | `ui/import-turn.js` owns the cancellable frame/timer continuation used by project import. Mounted-document ownership is explicit in target resolution and workspace measurement. |
| Native assets | `assets/symbol-graphics.js` owns static symbol primitives; `symbol-layout.js` retains layout algorithms. Preview and KiCad serialization continue consuming the same geometry. |
| Saved projects | Immutable version-1 migration anchors moved to `model/data/contact-layout-v1.js` without changing their bytes. Version-1 imports, version-2 saves, storage/recovery keys and project limits remain supported. |
| CAD preparation | `scripts/eagle_geometry.py` owns EAGLE transforms, contour tracing and curved-edge bounds; importer orchestration/electrical mapping remain separate. Optional Python CAD tools add no browser or Node build dependency. |

Representative catalog paths:

```text
src/catalog/
├── index.js                         public catalog and filter interface
├── catalog-families.js              canonical family registration/order
├── families/catalog-*.js            component entry ownership
├── shared/
│   ├── specification-sections.js   identity/order/completeness validation
│   └── …                           reusable board/package builders
└── data/
    ├── market-analog/
    │   ├── manifest.js
    │   ├── general-purpose-amplifiers.js
    │   └── comparators.js
    ├── modules-mikroe/memory/
    │   ├── manifest.js
    │   ├── eeprom.js
    │   ├── eeprom-assets.js
    │   ├── static-ram.js
    │   └── static-ram-assets.js
    └── …
```

Manifests reject repeated, missing and unlisted entries before registration. The 82 removed top-level importer color options were unused; factual board colors and published component metadata remain unchanged. No forwarding modules or duplicate implementation paths were retained. Existing cohesive editor, routing and project modules retain their ownership.

This is a source-organization improvement. Catalog imports remain eager: catalog JavaScript files increased from 253 to 505, and source bytes from 32,136,043 to 33,444,904 because the previously compact data is now readable. The largest retained physical-source asset is 1,717,004 bytes. No startup-speed or payload reduction is claimed.

## Corrected defects

| Defect | Correction and regression evidence |
| --- | --- |
| Destroying or blurring during a pinch could leave both touch captures active after the original gesture record was cleared. | Track every captured pointer independently, release all captures and cancel queued viewport work. Covered by canvas input/lifecycle tests and a browser check using two real touch contacts. |
| A project-import continuation could retain deferred browser work after its controller was destroyed. | A scoped import turn cancels its animation frame/timer, settles on abort and prevents a late file read from replacing the drawing. Six dedicated lifecycle cases cover the deferred turn. |
| Non-circular oval pads were previewed as ellipses, unlike the capsule geometry exported to KiCad. | Draw a rounded rectangle using half the shorter pad dimension as its corner radius. Tests cover horizontal and vertical oval pads; 3083 current pad previews benefit. Generated footprints remain unchanged. |
| Contact validation accepted a drill as large as, or larger than, its copper pad. | Reject through-hole drills that do not fit within both pad dimensions. Regression cases cover oversized and equal-size drills, valid through-hole geometry and SMD pads. |
| A build output symlink into the source tree bypassed lexical path checks and caused recursive copying. | Resolve physical source/output paths and the nearest existing output ancestor before writing. Isolated temporary-project tests verify unsafe destinations leave source files unchanged and safe aliases still work. |
| EAGLE outline bounds ignored arc extrema; a 10 × 15 mm capped board could be reported as 10 × 10 mm. | Include every swept cardinal extremum, including major arcs, rotation and mirroring. Importer regressions exercise both contour directions and transformed package outlines. |
| DXF reviewed overrides accepted zero, negative or non-finite geometry/unit parameters. | Validate unit conversion, bounds, dimensions and endpoint-grid overrides before extraction. Tests exercise ten invalid overrides and a valid 10 × 5 mm drawing. |

The corrected import tools were not used to regenerate or silently alter existing catalog entries.

## Compatibility and verification

- **249 tests passed, 0 failed, 0 skipped** in the final full run, with localhost access and the optional CAD preparation dependencies available.
- Catalog validation passed for **2002 components, 145 families, 48,142 contacts, 48,495 physical pads and 4004 SVG views**. The generated [component tree](COMPONENTS.md) is current.
- The complete before/after comparison found no changes to component order, family ownership, definitions, canvas geometry, either SVG mode, KiCad symbols, footprints or generated WRL models: **2002 entries, 4004 SVG strings and 6006 native asset strings preserved exactly**.
- Architecture checks passed for import resolution, acyclic dependencies, pure-layer boundaries, public catalog access and reachability of every shipped JavaScript module. Version-1 migration, version-2 round trips, history and native geometry fixtures passed.
- **KiCad 10.0.0 opened all 2002 generated symbols and 2002 generated footprints** through its native SVG exporters. Successful parsing does not upgrade the catalog's explicit footprint or 3D accuracy assessments.
- Browser interaction checks covered dragging, wire controls, rotation, keyboard nudge/history, wheel zoom, active-pinch cleanup, destroy/remount, late import cancellation, and SVG/PNG exports. Branding was checked at desktop, 390 px and 320 px widths without horizontal overflow.
- A fresh production build under `assets/refactor-defencore-20261108/` and the development site both passed the desktop, 390 px touch and 320 px touch checks. Each of the six sessions loaded all 568 reachable JavaScript modules and 10 stylesheets successfully: 3468 successful script/style responses, with no failed requests or page errors. Six project imports, two real canvas connections and six exports of each image format completed.
- `git diff --check` passed. No public deployment was performed as part of this refactor.

Run the repeatable repository checks with:

```sh
node scripts/catalog.mjs
node scripts/catalog-tree.mjs --check
node --test
git diff --check
node scripts/build-site.mjs /tmp/wirepad-review-site review-revision
```

The full CAD preparation regression requires Python 3 with `ezdxf` and Shapely 2; `WIREPAD_CAD_PYTHON` can select that interpreter. Those optional checks skip when their dependencies are absent. The browser editor and static build remain dependency-free.

The audit fixes reproduced defects and adds regression coverage; it cannot prove the absence of every possible bug. Catalog reference carriers and approximate models retain their existing accuracy marks and evidence in [catalog-kicad-accuracy.json](catalog-kicad-accuracy.json).
