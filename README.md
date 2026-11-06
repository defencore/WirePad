# WirePad

WirePad is a browser-based editor for drawing electronics wiring diagrams for project documentation. Place modules and discrete parts from the built-in library, connect their pins with colored wires, and export the diagram as an image. The editor and catalog run entirely in the browser.

## Run locally

Serve the repository root over HTTP. The site has no build step or application dependencies.

```sh
python3 -m http.server 8080
```

Open [WirePad on localhost](http://localhost:8080/).

## Draw a diagram

1. Search or filter the component library. Click a part to add it, or drag it onto the canvas.
2. Click a pin and then the destination pin to make a connection. Click the canvas while routing to add bends. Use **Esc** to cancel the current wire.
3. Select a component to inspect its pins, change its label, or rotate it. Select a wire to change its color.
4. Use **Fit view** to frame the drawing. Choose **Download PNG**, **Download SVG**, or **Copy image** from **Export**. Image copying uses the browser clipboard and requires a secure context.

**Project → Load example** opens an ESP32-S3 sensor node with a BME280 and a 3.3 V MAX3485 breakout. The example uses GPIO1 for SCL, GPIO2 for SDA, GPIO42 for UART TX, GPIO41 for UART RX, and GPIO40 for RS-485 direction control. The transceiver’s A and B terminals are available for field wiring.

WirePad autosaves the active project to browser storage. Use **Project → Save project file** to download a versioned `.wirepad.json` file you can back up, share, or reopen with **Open project file**. Browser storage is separate for each site origin.

### Keyboard shortcuts

| Shortcut | Action |
| --- | --- |
| `V`, `W`, `H` | Select, Wire, Pan |
| `Space` | Pan temporarily |
| `F` | Fit view |
| `R` | Rotate selected component |
| `Delete` | Delete selection |
| `Esc` | Cancel wiring |
| `Ctrl/⌘+Z`, `Ctrl/⌘+Shift+Z` | Undo, redo |
| `/` | Search library |

## Use the KiCad assets

Select a component to preview its illustration, schematic symbol, and PCB footprint. The inspector provides component downloads and 3D assets where available.

1. In KiCad’s Symbol Editor, add the downloaded `.kicad_sym` file using **Preferences → Manage Symbol Libraries**. [KiCad symbol library guide](https://docs.kicad.org/10.0/en/eeschema/eeschema.html#managing-symbol-libraries)
2. Put the downloaded `.kicad_mod` files in a folder named `WirePad.pretty`. In the Footprint Editor, add the folder using **Preferences → Manage Footprint Libraries** with the nickname `WirePad` so the symbol’s footprint link resolves. [KiCad footprint library guide](https://docs.kicad.org/10.0/en/pcbnew/pcbnew.html#managing-footprint-libraries)
3. Compare the pin numbering, pad positions, and mechanical dimensions with the manufacturer documentation for your exact part and board revision before fabrication. Module footprints marked as references describe the module’s connections and approximate placement.

## Add a component

1. Add an entry to the exported `components` list in [catalog.js](src/catalog.js). Give it a unique `id`, an English name and description, a category, and its drawing `width` and `height`. Record the manufacturer reference and the applicable board revision where available.
2. Define each pin’s stable `id`, printed `label`, description, electrical `type`, terminal `number`, and `x` and `y` in the drawing’s coordinate system. Place the pins along the edge they connect through. Keep existing component and pin IDs stable so saved projects still load.
3. Add or reuse a renderer in [catalog-art.js](src/catalog-art.js). Use a self-contained SVG so the illustration works in exported diagrams. Prefer original artwork or record the source and license for reused assets.
4. Add the mechanical data in [footprints.js](src/footprints.js) and any dedicated symbol geometry in [kicad.js](src/kicad.js). Keep symbol pin numbers and footprint pad numbers aligned, and add a 3D model when suitable geometry is available.
5. Check the library preview, pin connections, image export, and the generated symbol and footprint in KiCad.

The project format and browser persistence live in [project.js](src/project.js), and the image and project downloads live in [export.js](src/export.js).

## Publish with GitHub Pages

1. Push the site files to the `main` branch of `defencore/WirePad`.
2. In **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/(root)`. [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. Set the Pages custom domain to `wirepad.defencore.com`. The repository root already contains the matching `CNAME` file.
4. In the DNS zone for `defencore.com`, set the `wirepad` CNAME record to `defencore.github.io`. After GitHub validates the domain and provisions the certificate, enable **Enforce HTTPS** in Pages settings. [GitHub custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
