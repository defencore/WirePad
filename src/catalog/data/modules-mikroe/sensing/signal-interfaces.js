import assets from "./signal-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-4131-hydroprobe",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4131: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/hydro-probe-click-2d-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -28.575, "width": 25.4, "height": 57.15}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4131",
    "name": "Hydro Probe Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/hydro-probe-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/hydro-probe/hydro-probe-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/hydroprobe/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/hydro-probe-click-2d-3d-files.zip"
      }
    ],
    "description": "Hydro Probe Click add-on module for environmental applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/hydro-probe-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4131",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-0.602,-27.973 -0.59,-28.094 -0.555,-28.207 -0.426,-28.399 -0.234,-28.528 -0.121,-28.563 0,-28.575 0.121,-28.563 0.234,-28.528 0.426,-28.399 0.555,-28.207 0.59,-28.094 0.602,-27.973 12.7,-15.875 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-15.875Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4131-hydroprobe"]["contacts"],
    "artwork": assets["mikroe-mikroe-4131-hydroprobe"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/hydro-probe-click-2d-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-4131-hydroprobe"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4348-pht",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4348: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/pht_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded. The source STEP extraction rounds contact coordinates to 0.001 mm; the reviewed insertion map uses nominal 2.54 mm steps relative to p1 with at most 0.001 mm residual. Canonical SVG, electrical anchors and native assets retain the stored source coordinates.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "toleranceMm": 0.001,
      "bodyRegions": [
        {"x": -12.7, "y": -14.2875, "width": 25.4, "height": 28.575}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4348",
    "name": "PHT Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/pht-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/pht_click/PHT-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/pht/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/pht_click_2d_3d_files.zip"
      }
    ],
    "description": "PHT Click add-on module for environmental applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/pht-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4348",
      "price": "26.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M2.532,-6.055 2.351,-5.997 2.188,-5.909 2.047,-5.793 1.929,-5.655 1.839,-5.498 1.778,-5.326 1.749,-5.143 1.755,-4.952 1.797,-4.766 1.871,-4.597 1.974,-4.446 2.102,-4.316 2.25,-4.213 2.416,-4.137 2.596,-4.092 2.786,-4.079 3.754,-4.077 4.137,-4.115 4.502,-4.226 4.838,-4.406 5.136,-4.65 5.38,-4.948 5.559,-5.284 5.67,-5.649 5.707,-6.033 5.707,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.113 11.682,-13.903 12.03,-13.618 12.316,-13.27 12.526,-12.876 12.656,-12.45 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.45 -12.526,-12.876 -12.316,-13.27 -12.03,-13.618 -11.682,-13.903 -11.289,-14.113 -10.862,-14.243 -10.414,-14.287 -5.715,-14.287 -5.715,-6.033 -5.677,-5.649 -5.566,-5.284 -5.386,-4.947 -5.142,-4.65 -4.844,-4.405 -4.508,-4.226 -4.143,-4.115 -3.759,-4.077 -2.794,-4.079 -2.604,-4.092 -2.425,-4.137 -2.259,-4.213 -2.111,-4.317 -1.983,-4.446 -1.881,-4.597 -1.807,-4.767 -1.765,-4.952 -1.759,-5.143 -1.787,-5.325 -1.848,-5.497 -1.939,-5.654 -2.056,-5.792 -2.197,-5.908 -2.359,-5.997 -2.54,-6.055 -3.716,-6.055 -3.716,-14.287 3.708,-14.287 3.708,-6.055Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4348-pht"]["contacts"],
    "artwork": assets["mikroe-mikroe-4348-pht"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/pht_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4348-pht"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-3877-oneshot",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3877: v2 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/one_shot_click_2d_3d_file.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.777, "y": -21.54, "width": 25.554, "height": 43.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-3877",
    "name": "One Shot Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v2",
    "source": "https://www.mikroe.com/one-shot-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/one_shot_click/one-shot-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/oneshot/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/one_shot_click_2d_3d_file.zip"
      }
    ],
    "description": "One Shot Click add-on module for clock generator, signal generator applications. Host interface: GPIO, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. TP1 and TP2 follow the printed service-pad identities; positions are approximate calibrated references to the official photo.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "clock generator, signal generator",
      "gpio, i2c",
      "ltc®6993"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/one-shot-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3877",
      "price": "32.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.554,
      "height": 43.08,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3877-oneshot"]["contacts"],
    "artwork": assets["mikroe-mikroe-3877-oneshot"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. Named auxiliary contacts omitted from the STEP are calibrated from the official same-side photo; those positions are approximate reference geometry. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v2 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/one_shot_click_2d_3d_file.zip"
    },
    "provenance": assets["mikroe-mikroe-3877-oneshot"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tp1"
      ]
    ],
    "artworkBounds": [
      -12.777,
      -21.54,
      12.777,
      21.54
    ]
  },
  {
    "id": "mikroe-mikroe-4476-opto5",
    "sku": "MIKROE-4476",
    "name": "Opto 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/opto-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/opto_5_click/opto-5-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/opto5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Opto_5_Click_2d_3d_files100.zip"
      }
    ],
    "description": "Opto 5 Click add-on module for optocoupler applications. Host interface: PWM. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. A1,A2,G are the external TRIAC interface and remain electrically isolated from host ground. A2 and G are separated by R4, so they are not ideal-connected. Contacts use actual STEP lowest solder-tail end centers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "optocoupler",
      "pwm",
      "fod4216"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/opto-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4476",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4476-opto5"]["contacts"],
    "artwork": assets["mikroe-mikroe-4476-opto5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Opto_5_Click_2d_3d_files100.zip"
    },
    "provenance": assets["mikroe-mikroe-4476-opto5"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4476-opto5"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4951-terminal2",
    "sku": "MIKROE-4951",
    "name": "Terminal 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/terminal-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/terminal-2-click/Terminal_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/terminal2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Terminal-2-click_2d_3d_files.zip"
      }
    ],
    "description": "Terminal 2 Click add-on module for adapter applications. Host interface: Analog, GPIO, I2C, SPI, UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Both nine-position spring connectors are included. Signal connections are passive; direction belongs to the attached host/peripheral. Source pad numbering follows TB1/TB2, with the repeated ground contacts retained.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adapter",
      "analog, gpio, i2c, spi, uart"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/terminal-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4951",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4951-terminal2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4951-terminal2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Terminal-2-click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4951-terminal2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "tb1-9"
      ],
      [
        "p1",
        "tb1-8"
      ],
      [
        "p2",
        "tb1-7"
      ],
      [
        "p3",
        "tb1-6"
      ],
      [
        "p4",
        "tb1-5"
      ],
      [
        "p5",
        "tb1-4"
      ],
      [
        "p6",
        "tb1-3"
      ],
      [
        "p7",
        "tb1-2"
      ],
      [
        "p8",
        "tb1-1"
      ],
      [
        "p9",
        "tb2-9"
      ],
      [
        "p10",
        "tb2-8"
      ],
      [
        "p11",
        "tb2-7"
      ],
      [
        "p12",
        "tb2-6"
      ],
      [
        "p13",
        "tb2-5"
      ],
      [
        "p14",
        "tb2-4"
      ],
      [
        "p15",
        "tb2-3"
      ],
      [
        "p16",
        "tb2-2"
      ],
      [
        "p9",
        "tb2-1"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-4951-terminal2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-6574-solenoiddriver",
    "sku": "MIKROE-6574",
    "name": "Solenoid Driver Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/solenoid-driver-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/solenoid-driver-click/solenoid-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/solenoiddriver/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Solenoid_Driver_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "Solenoid Driver Click add-on module for relay applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. All six source-verified screw terminals are retained. Output contacts are low-side switches and are not modeled as ideal ground wires.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "relay",
      "gpio, spi",
      "drv81004-q1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/solenoid-driver-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6574",
      "price": "24.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6574-solenoiddriver"]["contacts"],
    "artwork": assets["mikroe-mikroe-6574-solenoiddriver"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Solenoid_Driver_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6574-solenoiddriver"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.479058105469,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6574-solenoiddriver"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6064-solidswitch8",
    "sku": "MIKROE-6064",
    "name": "SolidSwitch 8 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/solidswitch-8-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/solidswitch-8-click/solidswitch-8-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/solidswitch8/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/SolidSwitch_8_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "SolidSwitch 8 Click add-on module for relay applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. The Vbat/load diagram is silkscreen guidance, not another physical connector. Only the actual OUT/GND terminal pair is mapped.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "relay",
      "gpio",
      "bts3035ejxuma1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/solidswitch-8-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6064",
      "price": "15.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6064-solidswitch8"]["contacts"],
    "artwork": assets["mikroe-mikroe-6064-solidswitch8"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/SolidSwitch_8_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6064-solidswitch8"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-tb1-1"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.52614083044361,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6064-solidswitch8"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-1819-uniqueid",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1819: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/UNIQUE_ID_Click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -14.2875, "width": 25.4, "height": 28.575}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-1819",
    "name": "UNIQUE ID Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/unique-id-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/unique-id/UNIQUE_ID_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/uniqueid/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/UNIQUE_ID_Click_2d_3d_files.zip"
      }
    ],
    "description": "UNIQUE ID Click add-on module for id applications. Host interface: 1-Wire, GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "id",
      "1-wire, gpio",
      "ds2401"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/unique-id-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1819",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M12.7,11.747 10.16,14.287 -12.7,14.287 -12.7,-14.287 12.7,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1819-uniqueid"]["contacts"],
    "artwork": assets["mikroe-mikroe-1819-uniqueid"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/UNIQUE_ID_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1819-uniqueid"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-2720-buzz2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2720: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/BUZZ%202_click_v100.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.6925, "y": -21.4255, "width": 25.385, "height": 42.851}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-2720",
    "name": "BUZZ 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/buzz-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/buzz-2/buzz-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/buzz2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/BUZZ%202_click_v100.zip"
      }
    ],
    "description": "BUZZ 2 Click add-on module for speakers applications. Host interface: PWM. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "speakers",
      "pwm",
      "cmt-8540s-smt"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/buzz-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2720",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.385,
      "height": 42.851,
      "outline": "M-12.692,-7.523 -12.69,-7.677 -12.682,-7.831 -12.669,-7.985 -12.651,-8.138 -12.594,-8.481 -12.527,-8.765 -12.419,-9.118 -12.309,-9.406 -12.181,-9.685 -12.036,-9.956 -11.874,-10.218 -11.775,-10.36 -11.672,-10.5 -11.563,-10.635 -11.45,-10.767 -11.178,-11.048 -10.953,-11.252 -10.749,-11.417 -10.561,-11.554 -10.384,-11.671 -10.213,-11.775 -10.208,-11.778 -10.203,-11.78 -10.198,-11.783 -10.193,-11.788 -10.185,-11.79 -10.18,-11.793 -10.175,-11.798 -10.168,-11.8 -10.162,-11.803 -10.157,-11.808 -10.152,-11.811 -10.145,-11.813 -10.14,-11.818 -10.135,-11.821 -10.127,-11.823 -10.122,-11.828 -10.117,-11.831 -10.109,-11.833 -10.104,-11.836 -10.099,-11.841 -10.094,-11.844 -10.089,-11.846 -10.084,-11.849 -10.079,-11.851 -10.074,-11.856 -10.068,-11.859 -10.063,-11.861 -10.058,-11.864 -10.053,-11.867 -10.048,-11.869 -10.043,-11.874 -10.038,-11.877 -10.033,-11.879 -10.028,-11.882 -10.023,-11.884 -10.018,-11.887 -10.013,-11.889 -10.008,-11.894 -10.002,-11.897 -9.997,-11.9 -9.995,-11.902 -9.99,-11.905 -9.985,-11.907 -9.98,-11.91 -9.975,-11.912 -9.972,-11.915 -9.967,-11.917 -9.962,-11.92 -9.957,-11.922 -9.952,-11.925 -9.947,-11.927 -9.944,-11.93 -9.939,-11.933 -9.934,-11.935 -9.931,-11.938 -9.926,-11.94 -9.924,-11.943 -9.919,-11.945 -9.914,-11.945 -9.911,-11.948 -9.906,-11.95 -9.903,-11.953 -9.898,-11.955 -9.896,-11.958 -9.891,-11.96 -9.886,-11.963 -9.883,-11.966 -9.878,-11.966 -9.875,-11.968 -9.87,-11.971 -9.868,-11.973 -9.863,-11.976 -9.858,-11.978 -9.855,-11.981 -9.853,-11.981 -9.85,-11.983 -9.845,-11.986 -9.842,-11.988 -9.84,-11.988 -9.835,-11.991 -9.832,-11.994 -9.83,-11.996 -9.825,-11.996 -9.822,-11.999 -9.82,-12.001 -9.814,-12.004 -9.812,-12.004 -9.809,-12.006 -9.804,-12.009 -9.802,-12.011 -9.799,-12.011 -9.797,-12.014 -9.792,-12.016 -9.789,-12.019 -9.787,-12.019 -9.781,-12.021 -9.779,-12.024 -9.776,-12.024 -9.774,-12.027 -9.771,-12.027 -9.769,-12.029 -9.766,-12.032 -9.764,-12.032 -9.761,-12.034 -9.759,-12.034 -9.756,-12.037 -9.754,-12.039 -9.751,-12.039 -9.746,-12.042 -9.743,-12.042 -9.741,-12.044 -9.738,-12.047 -9.736,-12.047 -9.733,-12.049 -9.731,-12.049 -9.728,-12.052 -9.726,-12.054 -9.723,-12.054 -9.721,-12.057 -9.718,-12.057 -9.715,-12.06 -9.713,-12.062 -9.71,-12.062 -9.708,-12.065 -9.705,-12.065 -9.703,-12.067 -9.7,-12.067 -9.7,-12.07 -9.698,-12.07 -9.695,-12.07 -9.693,-12.072 -9.69,-12.075 -9.687,-12.075 -9.685,-12.077 -9.682,-12.077 -9.682,-12.08 -9.68,-12.08 -9.677,-12.08 -9.675,-12.082 -9.672,-12.082 -9.672,-12.085 -9.67,-12.085 -9.667,-12.087 -9.665,-12.087 -9.662,-12.09 -9.66,-12.093 -9.657,-12.093 -9.654,-12.093 -9.652,-12.095 -9.649,-12.098 -9.647,-12.098 -9.644,-12.1 -9.642,-12.1 -9.642,-12.103 -9.639,-12.103 -9.637,-12.103 -9.634,-12.105 -9.632,-12.105 -9.632,-12.108 -9.629,-12.108 -9.627,-12.11 -9.624,-12.11 -9.621,-12.113 -9.619,-12.113 -9.616,-12.115 -9.614,-12.115 -9.614,-12.118 -9.611,-12.118 -9.609,-12.118 -9.609,-12.121 -9.606,-12.121 -9.604,-12.123 -9.601,-12.123 -9.601,-12.126 -9.599,-12.126 -9.596,-12.126 -9.596,-12.128 -9.594,-12.128 -9.591,-12.128 -9.591,-12.131 -9.588,-12.131 -9.586,-12.133 -9.583,-12.133 -9.583,-12.136 -9.581,-12.136 -9.578,-12.136 -9.576,-12.138 -9.573,-12.138 -9.573,-12.141 -9.571,-12.141 -9.568,-12.143 -9.566,-12.143 -9.563,-12.146 -9.56,-12.146 -9.56,-12.148 -9.558,-12.148 -9.555,-12.148 -9.555,-12.151 -9.553,-12.151 -9.55,-12.151 -9.55,-12.154 -9.545,-12.156 -9.543,-12.156 -9.54,-12.159 -9.538,-12.161 -9.533,-12.161 -9.53,-12.164 -9.527,-12.166 -9.525,-12.169 -9.52,-12.169 -9.517,-12.171 -9.515,-12.174 -9.512,-12.174 -9.507,-12.176 -9.505,-12.179 -9.502,-12.179 -9.5,-12.181 -9.494,-12.184 -9.492,-12.187 -9.489,-12.187 -9.487,-12.189 -9.482,-12.192 -9.479,-12.192 -9.477,-12.194 -9.474,-12.197 -9.469,-12.197 -9.467,-12.199 -9.464,-12.202 -9.461,-12.204 -9.456,-12.204 -9.454,-12.207 -9.451,-12.209 -9.449,-12.209 -9.444,-12.212 -9.441,-12.214 -9.439,-12.214 -9.436,-12.217 -9.431,-12.22 -9.428,-12.222 -9.426,-12.222 -9.423,-12.225 -9.418,-12.227 -9.416,-12.227 -9.413,-12.23 -9.411,-12.232 -9.406,-12.235 -9.403,-12.235 -9.4,-12.237 -9.398,-12.24 -9.395,-12.24 -9.39,-12.242 -9.388,-12.245 -9.385,-12.245 -9.383,-12.248 -9.378,-12.25 -9.375,-12.253 -9.373,-12.253 -9.37,-12.255 -9.365,-12.258 -9.362,-12.258 -9.36,-12.26 -9.357,-12.263 -9.352,-12.263 -9.35,-12.265 -9.347,-12.268 -9.345,-12.27 -9.34,-12.27 -9.337,-12.273 -9.334,-12.275 -9.332,-12.275 -9.327,-12.278 -9.324,-12.281 -9.322,-12.283 -9.319,-12.283 -9.314,-12.286 -9.312,-12.288 -9.309,-12.288 -9.306,-12.291 -9.301,-12.293 -9.299,-12.293 -9.296,-12.296 -9.294,-12.298 -9.289,-12.301 -9.286,-12.301 -9.284,-12.303 -9.281,-12.306 -9.276,-12.306 -9.273,-12.308 -9.271,-12.311 -9.268,-12.314 -9.263,-12.314 -9.261,-12.316 -9.258,-12.319 -9.256,-12.319 -9.251,-12.321 -9.248,-12.324 -9.246,-12.324 -9.243,-12.326 -9.238,-12.329 -9.235,-12.331 -9.23,-12.334 -9.223,-12.336 -9.218,-12.341 -9.21,-12.344 -9.205,-12.349 -9.197,-12.352 -9.192,-12.357 -9.185,-12.359 -9.179,-12.362 -9.172,-12.367 -9.167,-12.369 -9.159,-12.375 -9.154,-12.377 -9.146,-12.38 -9.141,-12.385 -9.134,-12.387 -9.129,-12.392 -9.121,-12.395 -9.116,-12.4 -9.111,-12.402 -9.103,-12.405 -9.098,-12.41 -9.091,-12.413 -9.086,-12.418 -9.078,-12.42 -9.073,-12.423 -9.065,-12.428 -9.06,-12.43 -9.052,-12.435 -9.047,-12.438 -9.04,-12.443 -9.035,-12.446 -9.027,-12.448 -9.022,-12.453 -9.014,-12.456 -9.009,-12.461 -9.002,-12.463 -8.997,-12.468 -8.989,-12.471 -8.984,-12.474 -8.979,-12.479 -8.971,-12.481 -8.966,-12.486 -8.959,-12.489 -8.953,-12.494 -8.946,-12.496 -8.941,-12.499 -8.933,-12.504 -8.928,-12.507 -8.92,-12.512 -8.915,-12.514 -8.908,-12.519 -8.903,-12.522 -8.895,-12.524 -8.89,-12.529 -8.885,-12.532 -8.877,-12.537 -8.867,-12.542 -8.859,-12.547 -8.849,-12.552 -8.839,-12.557 -8.832,-12.562 -8.821,-12.57 -8.811,-12.575 -8.804,-12.58 -8.793,-12.585 -8.783,-12.59 -8.776,-12.595 -8.765,-12.603 -8.755,-12.608 -8.748,-12.613 -8.738,-12.618 -8.727,-12.623 -8.72,-12.629 -8.71,-12.636 -8.699,-12.641 -8.692,-12.646 -8.682,-12.651 -8.674,-12.656 -8.664,-12.662 -8.654,-12.669 -8.646,-12.674 -8.636,-12.679 -8.626,-12.684 -8.618,-12.689 -8.608,-12.695 -8.6,-12.702 -8.59,-12.707 -8.58,-12.712 -8.572,-12.717 -8.562,-12.722 -8.555,-12.728 -8.544,-12.735 -8.534,-12.74 -8.527,-12.745 -8.517,-12.75 -8.509,-12.756 -8.499,-12.763 -8.491,-12.768 -8.481,-12.773 -8.471,-12.778 -8.463,-12.783 -8.453,-12.791 -8.445,-12.796 -8.435,-12.801 -8.428,-12.806 -8.417,-12.811 -8.41,-12.819 -8.4,-12.824 -8.392,-12.829 -8.382,-12.834 -8.374,-12.839 -8.364,-12.847 -8.357,-12.852 -8.346,-12.857 -8.334,-12.865 -8.324,-12.872 -8.311,-12.88 -8.298,-12.888 -8.288,-12.895 -8.275,-12.903 -8.265,-12.91 -8.252,-12.918 -8.24,-12.926 -8.23,-12.933 -8.217,-12.938 -8.207,-12.946 -8.194,-12.954 -8.181,-12.961 -8.171,-12.969 -8.158,-12.976 -8.148,-12.984 -8.136,-12.992 -8.125,-12.999 -8.113,-13.007 -8.103,-13.015 -8.09,-13.022 -8.08,-13.03 -8.067,-13.037 -8.057,-13.045 -8.047,-13.053 -8.034,-13.06 -8.024,-13.068 -8.011,-13.076 -8.001,-13.083 -7.988,-13.091 -7.978,-13.098 -7.968,-13.106 -7.955,-13.114 -7.945,-13.121 -7.935,-13.129 -7.922,-13.137 -7.912,-13.144 -7.902,-13.154 -7.889,-13.162 -7.879,-13.17 -7.869,-13.177 -7.859,-13.185 -7.846,-13.192 -7.836,-13.2 -7.826,-13.208 -7.816,-13.215 -7.803,-13.223 -7.793,-13.23 -7.782,-13.238 -7.772,-13.246 -7.762,-13.253 -7.752,-13.261 -7.742,-13.269 -7.729,-13.276 -7.719,-13.286 -7.709,-13.294 -7.699,-13.302 -7.689,-13.309 -7.678,-13.317 -7.668,-13.324 -7.658,-13.332 -7.648,-13.34 -7.638,-13.347 -7.628,-13.355 -7.617,-13.365 -7.607,-13.373 -7.597,-13.38 -7.587,-13.388 -7.577,-13.396 -7.567,-13.403 -7.559,-13.411 -7.549,-13.418 -7.539,-13.429 -7.528,-13.436 -7.518,-13.444 -7.508,-13.451 -7.501,-13.459 -7.49,-13.467 -7.48,-13.474 -7.47,-13.484 -7.462,-13.492 -7.452,-13.5 -7.442,-13.507 -7.432,-13.515 -7.424,-13.523 -7.414,-13.533 -7.404,-13.54 -7.396,-13.548 -7.386,-13.556 -7.379,-13.563 -7.368,-13.573 -7.358,-13.581 -7.351,-13.589 -7.341,-13.596 -7.333,-13.604 -7.323,-13.614 -7.315,-13.622 -7.305,-13.629 -7.297,-13.637 -7.29,-13.645 -7.28,-13.655 -7.272,-13.662 -7.262,-13.67 -7.254,-13.678 -7.247,-13.688 -7.236,-13.695 -7.229,-13.703 -7.221,-13.711 -7.211,-13.721 -7.203,-13.728 -7.196,-13.736 -7.188,-13.744 -7.181,-13.754 -7.17,-13.761 -7.163,-13.769 -7.155,-13.777 -7.147,-13.787 -7.14,-13.794 -7.132,-13.802 -7.125,-13.812 -7.117,-13.82 -7.109,-13.827 -7.102,-13.838 -7.094,-13.845 -7.087,-13.853 -7.079,-13.863 -7.071,-13.871 -7.064,-13.878 -7.056,-13.888 -7.048,-13.896 -7.041,-13.904 -7.033,-13.914 -7.026,-13.921 -7.02,-13.929 -7.013,-13.939 -7.005,-13.947 -6.998,-13.954 -6.993,-13.965 -6.985,-13.972 -6.977,-13.98 -6.972,-13.99 -6.965,-13.998 -6.957,-14.008 -6.952,-14.015 -6.944,-14.023 -6.939,-14.033 -6.932,-14.041 -6.927,-14.051 -6.919,-14.059 -6.914,-14.066 -6.906,-14.076 -6.899,-14.086 -6.893,-14.097 -6.883,-14.109 -6.878,-14.119 -6.871,-14.13 -6.863,-14.14 -6.855,-14.15 -6.85,-14.16 -6.843,-14.17 -6.835,-14.18 -6.827,-14.191 -6.822,-14.203 -6.815,-14.211 -6.81,-14.221 -6.802,-14.231 -6.797,-14.241 -6.789,-14.252 -6.784,-14.262 -6.777,-14.269 -6.772,-14.28 -6.766,-14.29 -6.759,-14.3 -6.754,-14.31 -6.746,-14.32 -6.741,-14.33 -6.733,-14.34 -6.728,-14.351 -6.723,-14.361 -6.718,-14.371 -6.711,-14.379 -6.706,-14.389 -6.7,-14.399 -6.695,-14.407 -6.69,-14.417 -6.685,-14.427 -6.68,-14.434 -6.673,-14.445 -6.667,-14.455 -6.662,-14.465 -6.657,-14.475 -6.652,-14.483 -6.647,-14.493 -6.642,-14.503 -6.634,-14.513 -6.629,-14.523 -6.624,-14.534 -6.619,-14.544 -6.614,-14.554 -6.609,-14.564 -6.601,-14.574 -6.596,-14.584 -6.591,-14.594 -6.586,-14.605 -6.581,-14.615 -6.576,-14.625 -6.568,-14.635 -6.566,-14.645 -6.561,-14.653 -6.556,-14.663 -6.551,-14.673 -6.546,-14.681 -6.54,-14.691 -6.535,-14.699 -6.53,-14.709 -6.528,-14.719 -6.523,-14.729 -6.518,-14.737 -6.512,-14.747 -6.507,-14.757 -6.502,-14.765 -6.497,-14.775 -6.492,-14.785 -6.487,-14.795 -6.485,-14.805 -6.479,-14.813 -6.474,-14.823 -6.469,-14.833 -6.464,-14.843 -6.459,-14.854 -6.454,-14.864 -6.449,-14.874 -6.444,-14.884 -6.441,-14.894 -6.436,-14.904 -6.431,-14.915 -6.426,-14.925 -6.421,-14.935 -6.416,-14.945 -6.411,-14.955 -6.406,-14.965 -6.401,-14.975 -6.396,-14.986 -6.391,-14.996 -6.385,-15.008 -6.38,-15.019 -6.378,-15.029 -6.373,-15.039 -6.368,-15.049 -6.363,-15.062 -6.358,-15.072 -6.352,-15.082 -6.347,-15.092 -6.342,-15.105 -6.337,-15.115 -6.332,-15.125 -6.327,-15.138 -6.322,-15.148 -6.317,-15.161 -6.312,-15.171 -6.307,-15.181 -6.302,-15.194 -6.297,-15.204 -6.292,-15.217 -6.286,-15.227 -6.281,-15.24 -6.276,-15.25 -6.271,-15.262 -6.266,-15.275 -6.261,-15.285 -6.256,-15.298 -6.251,-15.308 -6.246,-15.321 -6.241,-15.334 -6.236,-15.346 -6.231,-15.356 -6.225,-15.369 -6.22,-15.382 -6.215,-15.395 -6.21,-15.405 -6.205,-15.417 -6.2,-15.43 -6.195,-15.443 -6.19,-15.456 -6.185,-15.468 -6.18,-15.478 -6.175,-15.491 -6.17,-15.504 -6.165,-15.516 -6.159,-15.529 -6.154,-15.542 -6.149,-15.555 -6.144,-15.567 -6.139,-15.583 -6.131,-15.595 -6.126,-15.608 -6.121,-15.621 -6.116,-15.633 -6.111,-15.646 -6.106,-15.659 -6.101,-15.674 -6.096,-15.687 -6.088,-15.702 -6.063,-15.796 -5.857,-16.527 -5.778,-16.784 -5.605,-17.255 -5.396,-17.712 -5.154,-18.152 -4.879,-18.572 -4.725,-18.781 -4.562,-18.984 -4.392,-19.18 -4.214,-19.37 -3.712,-19.834 -3.168,-20.244 -2.585,-20.597 -1.969,-20.891 -1.698,-20.998 -1.422,-21.092 -1.143,-21.174 -0.861,-21.243 -0.597,-21.296 -0.332,-21.34 -0.065,-21.372 0.203,-21.394 0.673,-21.407 1.379,-21.425 5.987,-21.425 6.738,-21.384 7.478,-21.258 8.198,-21.049 8.893,-20.759 9.28,-20.555 9.653,-20.327 10.009,-20.076 10.348,-19.802 10.669,-19.508 10.97,-19.193 11.251,-18.859 11.511,-18.506 11.753,-18.127 11.969,-17.734 12.158,-17.329 12.319,-16.912 12.452,-16.485 12.556,-16.05 12.63,-15.608 12.675,-15.161 12.69,-14.724 12.69,15.672 12.692,18.889 10.16,21.425 9.83,21.425 -12.692,21.425 -12.692,19.203 -12.692,-7.165 -12.692,-7.518Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2720-buzz2"]["contacts"],
    "artwork": assets["mikroe-mikroe-2720-buzz2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/BUZZ%202_click_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-2720-buzz2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.6925,
      -21.4255,
      12.6925,
      21.4255
    ]
  },
  {
    "id": "mikroe-mikroe-3445-mic2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3445: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/MIC_2_click_v101_CAD.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -21.463, "width": 25.4, "height": 42.926}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-3445",
    "name": "MIC 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/mic-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/mic-2/mic-2-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/mic2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/MIC_2_click_v101_CAD.zip"
      }
    ],
    "description": "MIC 2 Click add-on module for microphone applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "microphone",
      "analog, i2c",
      "mcp6022"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/mic-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3445",
      "price": "29.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3445-mic2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3445-mic2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/MIC_2_click_v101_CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3445-mic2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
