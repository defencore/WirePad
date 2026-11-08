# WirePad

WirePad is a browser-based editor for drawing electronics wiring diagrams for project documentation. Place modules and discrete parts from the built-in library, connect their pins with colored wires, and export the diagram as an image. The editor and catalog run entirely in the browser.

## Run locally

Serve the repository root over HTTP. The site has no build step or application dependencies.

```sh
node scripts/serve.mjs 8080
```

Open [WirePad on localhost](http://127.0.0.1:8080/). This development server disables asset caching so reloading after an edit loads the matching interface, catalog and filters.

## Draw a diagram

1. Search the library by part number, board or function. Filter by category and manufacturer. Click a part to add it, or drag it onto the canvas.
2. With **Wire**, choose a starting pin and a destination. Click a module to open its searchable pin picker, or click a wire to add a branch. Click empty canvas to add a bend, or press **Esc** to cancel.
3. New wires connected to recognized supply contacts such as VCC, VDD, 3V3 or 5V default to red. GND wires default to black. The color also follows connected pins through junctions and declared internal connections, including breadboard strips. Use the Inspector palette or custom color to override a wire, or choose **Use automatic color** to restore the inferred color. A draft color choice applies to that connection.
4. With **Select**, drag a wire's handles to move a segment, edit a bend or reconnect an end. Select a component to inspect its searchable pinout, change its label or rotate it. **Trace** highlights the connected net. Filled dots mark connections. Wires crossing without a dot remain separate.
5. Drag empty canvas in **Select** to select a group: left to right encloses whole objects; right to left includes anything the box touches. **Ctrl/⌘ + click** toggles items, and **Ctrl/⌘ + Shift + click** removes them. Drag a selected item to move the group with its connections. Arrow keys nudge the selection; **Shift** makes larger steps.
6. Hold **Shift** or **Space** to use the hand tool temporarily, then drag to pan. Releasing the key restores the previous tool and keeps any unfinished wire. Middle/right mouse drag also pans in any tool. The wheel zooms at the cursor; **Shift + scroll** pans in the direction of your wheel or trackpad gesture without changing the zoom. **Alt + wheel** pans vertically. On touchscreens, drag empty canvas to pan and pinch to zoom. Collapse **Components** or **Inspector** from the toolbar for more drawing space.
7. Use **Fit view** to frame the drawing, or **Shift + F** to frame the selection. Choose **Download PNG**, **Download SVG**, or **Copy image** from **Export**. Image copying uses the browser clipboard and requires a secure context.

The editing tools and Undo/Redo float at the top-right of the canvas. Panel toggles stay at the top-left. Selecting an element opens one nearby action panel: **Rotate** turns it 90° and shows its current angle; **Nudge** opens movement arrows in the same panel; **Fit selection** and **Delete** stay alongside them. Group selections share Nudge, Fit and Delete. The panel follows the selection through zoom and pan, and avoids visible controls and captions. Zoom, 100% reset and **Fit view** remain in the bottom-right navigation card. On narrow screens the Inspector docks below the canvas so the tools remain reachable.

**Project → Open demo** opens an ESP32-S3 sensor node with a BME280 and a 3.3 V MAX3485 breakout. The example uses GPIO1 for SCL, GPIO2 for SDA, GPIO42 for UART TX, GPIO41 for UART RX, and GPIO40 for RS-485 direction control. The transceiver’s A and B terminals are available for field wiring.

WirePad autosaves the active project to browser storage. Use **Project → Save project file** to download a versioned `.wirepad.json` file you can back up, share, or reopen with **Open project file**. Browser storage is separate for each site origin.

Connection points sit directly on the illustrated solder pads, through-holes or connector contacts. Hidden contacts use a labeled rear or mating-face view; dense headers show local terminal numbers with full functions on hover. Version-1 projects open automatically in the version-2 physical layout, retaining their part/pin identities and connections. Only obsolete endpoint lead waypoints are removed during import.

Breadboards support direct component assembly. Add a breadboard, enable **Breadboard parts**, then click a part to find a free insertion position or drag it to the desired holes. The library includes **1213 reviewed insertable parts**: devboards, sensor and interface modules, DIP ICs, headers, resistors, diodes, LEDs, capacitors, transistors and a four-leg tactile switch. Module scale follows physical header coordinates and the 2.54 mm breadboard pitch. Only the actual board and hardware cover sockets; annotation margins leave neighboring holes available. Flexible parts keep a fixed-size body while individual metal leads can move to other holes; **Move body, keep leads** repositions the body without unplugging its tips. Hover a hole to see its connected strip and free/wired/occupied state; press and hold to highlight the full net. In **Wire** mode, choose exact holes to draw jumpers, including on touchscreens. See the [breadboard assembly guide](docs/BREADBOARD_MOUNTING.md).

Selection frames follow the visible hardware instead of its SVG padding. Fitted boards retain compact contact labels inside the PCB, including after lifting them from the breadboard. Dense auxiliary connectors can use terminal numbers with full functions on hover. Labels remain visible in image exports and do not block neighboring breadboard holes.

### Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `V`, `W`, `H` | Select, Wire, Pan |
| `T` | Trace connected wires |
| Hold `Shift` or `Space` | Temporary hand tool; release to restore the previous tool |
| `F`, `Home` | Fit view |
| `Shift+F` | Fit selection |
| `+`, `−`, `0` | Zoom in, zoom out, actual size |
| `Ctrl/⌘+A` | Select all (when the canvas has focus) |
| `R` | Rotate selected component |
| `Delete` | Delete selection |
| `Esc` | Cancel the current tool, then clear selection |
| `Ctrl/⌘+Z`, `Ctrl/⌘+Shift+Z` | Undo, redo |
| `/` | Search library |
| `F6`, `Shift+F6` | Move focus between library, canvas and Inspector |
| `Ctrl/⌘+S` | Download the project file |

## Code organization

| Area | Modules |
| --- | --- |
| Startup and application services | `src/main.js`, `src/app/` |
| Component definitions and registration | `src/catalog/` — families, shared builders, CAD data and artwork |
| Project data, configuration and connectivity | `src/model/` |
| Editing commands, groups and wire transactions | `src/editor/` |
| Rotation, routing and bounds | `src/geometry/` |
| SVG drawing, scene layers, viewport and gestures | `src/canvas/` |
| Library, Inspector, dialogs and controls | `src/ui/` |
| Symbol/footprint/model geometry, previews and KiCad serialization | `src/assets/` |
| Drawing generation and browser downloads/clipboard | `src/export/` |

[Architecture and extension contracts](docs/ARCHITECTURE.md) describe ownership, dependency boundaries, component records, configurable instances and cleanup. The browser entry creates one application; `application.destroy()` releases its listeners, observers, timers and canvas layers before a remount.

[Refactor audit](docs/REFACTOR_AUDIT.md) records the source organization, corrected defects and compatibility checks.

[Component library tree](docs/COMPONENTS.md) lists every part by category, manufacturer and source family, with separate footprint and generated 3D accuracy marks. Manufacturer CAD links are identified separately; every current generated WRL is approximate.

## Configure and move a breadboard

Select the board to set **Terminal rows**, **Left terminal cells** and **Right terminal cells** independently. Each terminal bank supports 1–50 cells per row; the default is five on each side. Power rails are configured separately. Existing contact identities remain stable as a bank is resized. Mounted parts move to free holes on their original conductors when possible, preserving their physical scale and electrical connections. A change that removes a wired contact, changes its conductor or cannot accommodate seated parts is rejected as one transaction. Undo/Redo restores the whole layout.

Drag the board border or its caption to move it together with contained components, junctions and internal wire routes. External wire endpoints stay in place. Drag inside its face to draw a selection rectangle; the board joins that selection only when the rectangle encloses it completely. **Ctrl/⌘ + click** toggles separate items.

## Verify changes

```sh
node --test
node scripts/catalog.mjs
node scripts/catalog-tree.mjs --check
node scripts/build-site.mjs /tmp/wirepad-site local
```

The catalog check validates entries, both illustration modes, contact coordinates and pin-to-pad numbering, including repeated physical lands, and automatically regenerates `docs/COMPONENTS.md`. Update `docs/catalog-kicad-accuracy.json` with explicit accuracy evidence when adding or reviewing parts. The read-only tree check and tests reject stale documentation. Tests also guard published contact geometry, module dependency boundaries and static-site asset resolution.

## Use the KiCad assets

Select a component and download its files from the **Symbol**, **Footprint** and **3D** tabs. Each tab also includes **Use this part in KiCad** instructions. The 3D tab links to manufacturer CAD where available. The following example uses the catalog's AP2112K-3.3TRG1 regulator.

```text
MyProject/
  MyProject.kicad_pro
  WirePad.symbols/
    ap2112k-3-3.kicad_sym
  WirePad.pretty/
    ap2112k-3-3.kicad_mod
  WirePad.3dshapes/
    ap2112k-3-3.wrl
```

1. Save the three downloads in the folders shown above, beside the KiCad project's `.kicad_pro` file.
2. In the Schematic Editor, open **Preferences → Manage Symbol Libraries → Project Specific Libraries**. Add the downloaded `.kicad_sym` file. Use a unique nickname for each symbol library, such as `ap2112k-3-3`. Choose a project-relative library path beginning with `${KIPRJMOD}`. [KiCad symbol library guide](https://docs.kicad.org/10.0/en/eeschema/eeschema.html#managing-symbol-libraries)
3. In the PCB Editor, open **Preferences → Manage Footprint Libraries → Project Specific Libraries**. Add the `WirePad.pretty` folder with the nickname **WirePad** and path `${KIPRJMOD}/WirePad.pretty`. This nickname resolves the symbol's `WirePad:ap2112k-3-3` footprint assignment. [KiCad footprint library guide](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#managing-footprint-libraries)
4. Use **Add Symbol** in the Schematic Editor to place the imported part. Its **Footprint** property should match the `.kicad_mod` filename, for example `WirePad:ap2112k-3-3`.
5. In the PCB Editor, choose **Tools → Update PCB from Schematic** to bring the part onto the PCB. Check pin numbers, pad positions and dimensions against the exact part's datasheet or mechanical drawing.
6. Open **View → 3D Viewer**. The footprint loads `${KIPRJMOD}/WirePad.3dshapes/ap2112k-3-3.wrl`. If it is missing, check that the folder and filename match the footprint's **3D Models** entry.

For detailed enclosure work, download the matching manufacturer STEP file and select it in **Footprint Properties → 3D Models**. Store it inside the project and use a `${KIPRJMOD}` path. Check scale, rotation, origin and alignment with the pads in the 3D Viewer. Keep a STEP file's initial scale at `1, 1, 1` and verify its dimensions. WirePad's downloadable WRL contains approximate package or carrier geometry. Footprints marked as references or cable terminations describe the mounting arrangement stated in their notes. [KiCad 3D model controls](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#_3d_models)

## Source additional KiCad assets

WirePad's catalog and downloads are generated from the definitions in `src/catalog/families/catalog-*.js`, [footprint-layout.js](src/assets/footprint-layout.js) and [kicad.js](src/assets/kicad.js). Manufacturer links in the 3D tab point to external CAD. Tools below can prepare assets for a reviewed catalog contribution or supply files for a user's own KiCad project.

| Source or tool | Suitable use | Assets and practical limits |
| --- | --- | --- |
| Manufacturer libraries and official KiCad libraries | Start with the exact part number, package and board revision. Reuse matching standard packages and models. | Symbols, footprints and 3D models depend on the part. Retain source and license information when distributing a library collection. [KiCad libraries](https://www.kicad.org/libraries/), [library license](https://www.kicad.org/libraries/license/) |
| easyeda2kicad | Prepare LCSC/EasyEDA components by their LCSC IDs, including batches. | Exports `.kicad_sym`, `.pretty`, WRL and STEP when source models are available. Check converted pin mappings and geometry. [Upstream documentation](https://github.com/uPesy/easyeda2kicad.py) |
| EasyEDA2KiCad GUI wrappers | Use a desktop interface for the same conversion workflow. | Independent frontends have their own installation and platform requirements. [Madarakante Windows GUI](https://github.com/Madarakante/easyeda2kicad-gui), [ProjectProcrastinator GUI](https://github.com/ProjectProcrastinator/EasyEDA2Kicad-GUI) |
| KiCad Library Tools | Generate footprints and supported symbol/3D families from reviewed parameters and manufacturer dimensions. | Includes generators and library checks. Supported 3D generators can produce STEP and WRL. [Official tools](https://gitlab.com/kicad/libraries/kicad-library-tools) |
| KiCad-JLCPCB-tools | Search JLCPCB parts, assign LCSC numbers and prepare fabrication/assembly outputs inside KiCad. | Produces BOM, CPL, Gerber and drill files and supports placement corrections. [Plugin documentation](https://github.com/Bouni/kicad-jlcpcb-tools) |
| SnapMagic / SnapEDA | Download a KiCad package from the website and import it manually. | The provider has sunset its older plugins. Its legacy KiCad plugin is listed for versions through 5.1.10. [Plugin status](https://www.snapeda.com/plugins/), [manual import](https://api.snapeda.com/about/import/) |
| Ultra Librarian | Download the KiCad export and corresponding 3D model for a specific part. | Select the current KiCad format offered for that part. Check the download terms before redistributing files through WirePad. [KiCad import help](https://app.ultralibrarian.com/content/help/kicad-6_0.htm), [terms](https://www.ultralibrarian.com/legal) |
| SamacSys / Component Search Engine | Download a part and use Library Loader or KiCad's library managers to import it. | Desktop-helper compatibility depends on the installation. Public catalog redistribution requires applicable rights. [Library Loader](https://componentsearchengine.com/learn-more), [service terms](https://intelligence.supplyframe.com/terms/) |
| KiCad's Altium importers | Convert existing Altium designs or load supported Altium libraries in KiCad. | KiCad 10 supports Altium board/schematic import and library formats. Review import warnings and save converted parts into KiCad libraries. [Board import](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#importing-boards-from-other-eda-tools), [symbol libraries](https://docs.kicad.org/10.0/en/eeschema/eeschema.html#managing-symbol-libraries) |

The older `pointhi/kicad-footprint-generator` repository is archived and redirects contributors to the official tools. The historical Altium2KiCad converter also points users to KiCad's native importers. [Archived generator](https://github.com/pointhi/kicad-footprint-generator), [Altium2KiCad](https://github.com/thesourcerer8/altium2kicad)

### Example conversion with easyeda2kicad

With `easyeda2kicad` 1.0.1 or newer installed in a Python environment, run this macOS/Linux shell example from the root of your KiCad project. `C2040` is the upstream example ID. Replace it with the LCSC ID whose manufacturer part number and package match your chosen component. The absolute output path stays inside the project so `--project-relative` can generate portable model paths.

```sh
mkdir -p libs
python -m easyeda2kicad --full --lcsc_id C2040 \
  --output "$PWD/libs/Imported.kicad_sym" --project-relative
```

This creates `libs/Imported.kicad_sym`, `libs/Imported.pretty/` and, when models are available, `libs/Imported.3dshapes/`. Register the symbol file and footprint folder in KiCad's project-specific library tables. Use **Imported** as the footprint-library nickname and confirm that the symbol's Footprint property uses that nickname. The converter downloads the supplied STEP and converts the supplied OBJ to WRL. Compare the result with the manufacturer drawing. [Converter usage](https://github.com/uPesy/easyeda2kicad.py), [3D conversion details](https://github.com/uPesy/easyeda2kicad.py/blob/master/docs/CMD_3D_MODEL.md)

### Prepare an asset for WirePad

Use these tools during catalog preparation, then review and version the resulting files. For a public WirePad download, record the manufacturer part number, package/revision, source URL, license and permitted redistribution, plus the correspondence between stable canvas pin IDs, symbol numbers and physical pads. Match a breakout module to its board headers and revision. An ADS1220 IC footprint describes the chip on the breakout, while the catalog's ADS1220 module uses its own board headers.

Keep source licensing with copied assets. KiCad's library license has an exception for using parts in designs, while redistribution of a library collection retains attribution and share-alike requirements. SnapMagic, Ultra Librarian and Component Search Engine have their own terms for distributing downloaded content. Use provider download links for assets whose public redistribution needs separate permission. [KiCad library license](https://www.kicad.org/libraries/license/), [SnapMagic terms](https://www.snapeda.com/about/terms/), [Ultra Librarian legal information](https://www.ultralibrarian.com/legal), [Component Search Engine terms](https://intelligence.supplyframe.com/terms/)

For future native-asset downloads, a per-component asset record should identify the reviewed symbol, footprint and 3D files and their pin mapping. The existing catalog definitions generate the current downloads. Serving a prepared native asset requires an explicit export path for that file and a matching preview. Validate it in native KiCad and preserve existing component IDs, pin IDs and canvas anchors when adding that support.

## Add a component

1. Run `node scripts/new-family.mjs family-id` to create an unregistered family scaffold. Fill it with verified part numbers, board revisions, manufacturer references and component entries before registration.
2. Each entry keeps `{ component, render, footprint, model? }` together. Define stable contact IDs, printed labels, functions, electrical types and terminal numbers. Draw each pad at the same coordinates as its canvas contact. Interior contacts use `surface: true`; the component uses `contactLayout: "physical"`. Identify hidden or mating faces explicitly.
3. Add the generated default import and one family entry in [catalog-families.js](src/catalog/catalog-families.js). The library, artwork, configuration resolver and KiCad assets all consume this registration.
4. Reuse shared drawing/board builders from `src/catalog/shared/`. Large CAD illustrations can live in `artwork/` with their readable component data and attribution in `data/`. Keep source references, scope and CAD links with the entry.
5. Run `node scripts/catalog.mjs`, `node --test` and `git diff --check`. Review both SVG modes, connect the part on the canvas, export an image and open the native assets in KiCad.

See the [extension example](docs/ARCHITECTURE.md#adding-a-family) and the [latest module audit](docs/catalog-modules-integration-2026-11-08.json).

## Publish with GitHub Pages

1. In **Settings → Pages**, choose **GitHub Actions** as the publishing source and set the custom domain to `wirepad.defencore.com`. [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
2. Push to `main` or run **Deploy WirePad to GitHub Pages** from the **Actions** tab on `main`. The [workflow](.github/workflows/pages.yml) runs the tests and publishes the static editor files.
3. In the DNS zone for `defencore.com`, point the `wirepad` CNAME record to `defencore.github.io`. After GitHub validates the domain and provisions the certificate, enable **Enforce HTTPS** in Pages settings. [GitHub custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
