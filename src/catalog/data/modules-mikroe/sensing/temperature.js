import assets from "./temperature-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-2554-fever",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2554: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/fever-click-2d-and-3d-files-v100.zip"},
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
    "sku": "MIKROE-2554",
    "name": "Fever Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/fever-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/fever/fever-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/fever/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/fever-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "Fever Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "max30205"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/fever-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2554",
      "price": "25.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-7.874,-2.667 -7.273,-2.727 -6.7,-2.901 -6.172,-3.183 -5.705,-3.566 -5.33,-4.024 -5.054,-4.54 -4.884,-5.101 -4.826,-5.69 -4.826,-21.463 4.826,-21.463 4.826,-5.69 4.884,-5.101 5.054,-4.541 5.33,-4.024 5.705,-3.566 6.172,-3.183 6.7,-2.901 7.273,-2.727 7.874,-2.667 12.7,-2.667 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-2.667Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2554-fever"]["contacts"],
    "artwork": assets["mikroe-mikroe-2554-fever"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/fever-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-2554-fever"]["provenance"],
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
  {
    "id": "mikroe-mikroe-6135-irthermo4",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6135: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Thermo_4_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-6135",
    "name": "IR Thermo 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ir-thermo-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ir-thermo-4-click/ir-thermo-4-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/irthermo4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Thermo_4_click_2d_3d_files.zip"
      }
    ],
    "description": "IR Thermo 4 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ir-thermo-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6135",
      "price": "72.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6135-irthermo4"]["contacts"],
    "artwork": assets["mikroe-mikroe-6135-irthermo4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Thermo_4_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6135-irthermo4"]["provenance"],
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
    "id": "mikroe-mikroe-2886-templog",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2886: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7765, "y": -21.5395, "width": 25.553, "height": 43.079}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-2886",
    "name": "Temp-Log Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temp-log-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp-log/temp-log-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/templog/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2d-and-3d-files.zip"
      }
    ],
    "description": "Temp-Log Click add-on module for temperature & humidity, temperature logging applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity, temperature logging",
      "i2c",
      "at30tse758a"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temp-log-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2886",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.553,
      "height": 43.079,
      "outline": "M12.777,21.54 12.777,-21.54 -12.777,-21.54 -12.777,21.54Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2886-templog"]["contacts"],
    "artwork": assets["mikroe-mikroe-2886-templog"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2886-templog"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7765,
      -21.5395,
      12.7765,
      21.5395
    ]
  },
  {
    "id": "mikroe-mikroe-3004-templog2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3004: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2-click-2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.6885, "y": -21.42, "width": 25.377, "height": 42.84}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-3004",
    "name": "Temp-Log 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temp-log-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp-log-2/temp-log-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/templog2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2-click-2d-and-3d-files.zip"
      }
    ],
    "description": "Temp-Log 2 Click add-on module for temperature & humidity, temperature logging applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity, temperature logging",
      "i2c",
      "tmp116"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temp-log-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3004",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.377,
      "height": 42.84,
      "outline": "M11.515,-15.263 11.791,-14.916 12.032,-14.547 12.237,-14.16 12.404,-13.756 12.534,-13.338 12.625,-12.909 12.676,-12.472 12.686,-12.029 12.689,-11.729 12.689,18.885 10.151,21.42 -12.689,21.42 -12.688,-9.423 -12.672,-9.761 -12.64,-10.048 -12.582,-10.365 -12.482,-10.743 -12.353,-11.106 -12.196,-11.454 -12.012,-11.785 -11.803,-12.097 -11.57,-12.391 -11.315,-12.664 -11.039,-12.915 -10.744,-13.143 -10.431,-13.348 -10.102,-13.526 -9.758,-13.678 -9.4,-13.802 -9.031,-13.897 -8.65,-13.962 -8.249,-13.995 -8.187,-14.001 -8.139,-14.007 -8.091,-14.016 -8.043,-14.025 -7.865,-14.075 -7.693,-14.142 -7.53,-14.229 -7.377,-14.333 -7.212,-14.476 -7.067,-14.639 -6.944,-14.819 -6.844,-15.014 -6.807,-15.107 -6.775,-15.203 -6.75,-15.301 -6.73,-15.417 -6.705,-15.987 -6.63,-16.532 -6.504,-17.068 -6.328,-17.592 -6.046,-18.214 -5.699,-18.794 -5.291,-19.328 -4.828,-19.811 -4.313,-20.24 -3.751,-20.61 -3.148,-20.915 -2.508,-21.153 -2.184,-21.243 -1.84,-21.319 -1.368,-21.388 -0.708,-21.42 -0.056,-21.381 0.585,-21.271 1.209,-21.093 1.81,-20.849 2.382,-20.541 2.921,-20.17 3.42,-19.738 3.547,-19.85 3.795,-20.025 4.053,-20.184 4.32,-20.327 4.596,-20.455 4.947,-20.588 5.306,-20.695 5.672,-20.774 6.044,-20.826 6.359,-20.848 6.549,-20.85 6.811,-20.843 7.159,-20.812 7.604,-20.737 8.034,-20.625 8.448,-20.476 8.843,-20.293 9.219,-20.078 9.573,-19.833 9.903,-19.558 10.208,-19.258 10.487,-18.932 10.737,-18.583 10.957,-18.213 11.144,-17.823 11.299,-17.415 11.418,-16.992 11.5,-16.555 11.542,-16.106 11.549,-15.849 11.543,-15.6Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3004-templog2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3004-templog2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp-log-2-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-3004-templog2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.6885,
      -21.42,
      12.6885,
      21.42
    ]
  },
  {
    "id": "mikroe-mikroe-3442-templog5",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3442: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Log-5-click-v100-CAD.zip"},
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
    "sku": "MIKROE-3442",
    "name": "Temp-Log 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/temp-log-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp-log-5/temp-log-5-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/templog5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Log-5-click-v100-CAD.zip"
      }
    ],
    "description": "Temp-Log 5 Click add-on module for temperature & humidity, temperature logging applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity, temperature logging",
      "i2c",
      "cat34ts02"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temp-log-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3442",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463 10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3442-templog5"]["contacts"],
    "artwork": assets["mikroe-mikroe-3442-templog5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Temp-Log-5-click-v100-CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3442-templog5"]["provenance"],
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
  {
    "id": "mikroe-mikroe-3688-thermo13",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3688: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_13_click_2D_and_3D_files.zip"},
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
    "sku": "MIKROE-3688",
    "name": "Thermo 13 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-13-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_13_click/thermo-13-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo13/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_13_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Thermo 13 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "bh1900nux"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-13-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3688",
      "price": "12.00",
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
    "contacts": assets["mikroe-mikroe-3688-thermo13"]["contacts"],
    "artwork": assets["mikroe-mikroe-3688-thermo13"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_13_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3688-thermo13"]["provenance"],
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
  {
    "id": "mikroe-mikroe-3662-thermo16",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3662: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_16_click_2D_and_3D_files.zip"},
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
    "sku": "MIKROE-3662",
    "name": "Thermo 16 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-16-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_16_click/thermo-16-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo16/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_16_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Thermo 16 Click add-on module for temperature & humidity applications. Host interface: Analog. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "analog",
      "tmp235"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-16-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3662",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.002 -12.656,-12.449 -12.526,-12.876 -12.316,-13.27 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.244 -10.414,-14.287 10.414,-14.287 10.862,-14.244 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.27 12.526,-12.876 12.656,-12.449 12.7,-12.002 12.7,11.747 10.16,14.287 -12.7,14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3662-thermo16"]["contacts"],
    "artwork": assets["mikroe-mikroe-3662-thermo16"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_16_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3662-thermo16"]["provenance"],
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
    "id": "mikroe-mikroe-4829-thermo18",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4829: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_18_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4829",
    "name": "Thermo 18 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-18-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_18_click/Thermo_18_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo18/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_18_Click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 18 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-18-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4829",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M3.712,-12.903 3.731,-12.746 3.774,-12.604 3.844,-12.473 3.939,-12.357 4.055,-12.262 4.186,-12.192 4.329,-12.148 4.478,-12.134 4.953,-12.134 5.102,-12.148 5.245,-12.192 5.376,-12.262 5.492,-12.357 5.587,-12.473 5.657,-12.604 5.7,-12.746 5.715,-12.896 5.715,-13.525 5.73,-13.675 5.773,-13.817 5.843,-13.948 5.938,-14.064 6.054,-14.159 6.185,-14.229 6.328,-14.273 6.477,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.113 11.682,-13.903 12.03,-13.618 12.316,-13.27 12.526,-12.876 12.656,-12.45 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.45 -12.526,-12.876 -12.316,-13.27 -12.03,-13.618 -11.682,-13.903 -11.289,-14.113 -10.862,-14.243 -10.414,-14.287 -6.477,-14.287 -6.328,-14.273 -6.185,-14.229 -6.054,-14.159 -5.938,-14.064 -5.843,-13.948 -5.773,-13.817 -5.73,-13.675 -5.715,-13.525 -5.715,-12.896 -5.7,-12.746 -5.657,-12.604 -5.587,-12.473 -5.492,-12.357 -5.376,-12.262 -5.245,-12.192 -5.102,-12.148 -4.953,-12.134 -4.478,-12.134 -4.329,-12.148 -4.186,-12.192 -4.055,-12.262 -3.939,-12.357 -3.844,-12.473 -3.774,-12.604 -3.731,-12.746 -3.716,-12.896 -3.716,-13.525 -3.701,-13.675 -3.658,-13.817 -3.588,-13.948 -3.493,-14.064 -3.377,-14.159 -3.246,-14.229 -3.103,-14.273 -2.954,-14.287 2.946,-14.287 3.096,-14.273 3.238,-14.229 3.369,-14.159 3.485,-14.064 3.58,-13.948 3.65,-13.817 3.694,-13.675 3.708,-13.525ZM3.712,-12.903 3.709,-12.906 3.71,-12.902 3.712,-12.898ZM-3.716,-9.025 -3.731,-9.174 -3.774,-9.316 -3.844,-9.447 -3.939,-9.563 -4.055,-9.659 -4.186,-9.729 -4.329,-9.772 -4.478,-9.787 -4.953,-9.787 -5.102,-9.772 -5.245,-9.729 -5.376,-9.659 -5.492,-9.563 -5.587,-9.447 -5.657,-9.316 -5.7,-9.174 -5.715,-9.025 -5.715,-6.794 -5.7,-6.645 -5.657,-6.503 -5.587,-6.372 -5.492,-6.256 -5.376,-6.161 -5.245,-6.091 -5.102,-6.047 -4.953,-6.033 4.953,-6.033 5.102,-6.047 5.245,-6.091 5.376,-6.161 5.492,-6.256 5.587,-6.372 5.657,-6.503 5.7,-6.645 5.715,-6.794 5.715,-9.025 5.7,-9.174 5.657,-9.316 5.587,-9.447 5.492,-9.563 5.376,-9.659 5.245,-9.729 5.102,-9.772 4.953,-9.787 4.478,-9.787 4.329,-9.772 4.186,-9.729 4.055,-9.659 3.939,-9.563 3.844,-9.447 3.774,-9.316 3.731,-9.174 3.716,-9.025 3.716,-8.395 3.701,-8.245 3.658,-8.103 3.588,-7.972 3.493,-7.856 3.377,-7.761 3.246,-7.691 3.103,-7.647 2.954,-7.633 -2.954,-7.633 -3.103,-7.647 -3.246,-7.691 -3.377,-7.761 -3.493,-7.856 -3.588,-7.972 -3.658,-8.103 -3.701,-8.245 -3.716,-8.395Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4829-thermo18"]["contacts"],
    "artwork": assets["mikroe-mikroe-4829-thermo18"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_18_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4829-thermo18"]["provenance"],
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
    "id": "mikroe-mikroe-4316-thermo20",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4316: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_20_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4316",
    "name": "Thermo 20 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-20-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_20_click/thermo-20-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo20/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_20_click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 20 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-20-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4316",
      "price": "8.00",
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
    "contacts": assets["mikroe-mikroe-4316-thermo20"]["contacts"],
    "artwork": assets["mikroe-mikroe-4316-thermo20"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_20_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4316-thermo20"]["provenance"],
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
    "id": "mikroe-mikroe-4879-thermo21",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4879: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_21_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4879",
    "name": "Thermo 21 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-21-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_21_click/Thermo_21_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo21/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_21_click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 21 Click add-on module for temperature & humidity applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "spi",
      "adt7301"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-21-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4879",
      "price": "22.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M3.712,-12.903 3.731,-12.746 3.774,-12.604 3.844,-12.473 3.939,-12.357 4.055,-12.262 4.186,-12.192 4.329,-12.148 4.478,-12.134 4.953,-12.134 5.102,-12.148 5.245,-12.192 5.376,-12.262 5.492,-12.357 5.587,-12.473 5.657,-12.604 5.7,-12.746 5.715,-12.896 5.715,-13.525 5.73,-13.675 5.773,-13.817 5.843,-13.948 5.938,-14.064 6.054,-14.159 6.185,-14.229 6.328,-14.273 6.477,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.113 11.682,-13.903 12.03,-13.618 12.316,-13.27 12.526,-12.876 12.656,-12.45 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.45 -12.526,-12.876 -12.316,-13.27 -12.03,-13.618 -11.682,-13.903 -11.289,-14.113 -10.862,-14.243 -10.414,-14.287 -6.477,-14.287 -6.328,-14.273 -6.185,-14.229 -6.054,-14.159 -5.938,-14.064 -5.843,-13.948 -5.773,-13.817 -5.73,-13.675 -5.715,-13.525 -5.715,-12.896 -5.7,-12.746 -5.657,-12.604 -5.587,-12.473 -5.492,-12.357 -5.376,-12.262 -5.245,-12.192 -5.102,-12.148 -4.953,-12.134 -4.478,-12.134 -4.329,-12.148 -4.186,-12.192 -4.055,-12.262 -3.939,-12.357 -3.844,-12.473 -3.774,-12.604 -3.731,-12.746 -3.716,-12.896 -3.716,-13.525 -3.701,-13.675 -3.658,-13.817 -3.588,-13.948 -3.493,-14.064 -3.377,-14.159 -3.246,-14.229 -3.103,-14.273 -2.954,-14.287 2.946,-14.287 3.096,-14.273 3.238,-14.229 3.369,-14.159 3.485,-14.064 3.58,-13.948 3.65,-13.817 3.694,-13.675 3.708,-13.525ZM3.712,-12.903 3.709,-12.906 3.71,-12.902 3.712,-12.898ZM-3.716,-9.025 -3.731,-9.174 -3.774,-9.316 -3.844,-9.447 -3.939,-9.563 -4.055,-9.659 -4.186,-9.729 -4.329,-9.772 -4.478,-9.787 -4.953,-9.787 -5.102,-9.772 -5.245,-9.729 -5.376,-9.659 -5.492,-9.563 -5.587,-9.447 -5.657,-9.316 -5.7,-9.174 -5.715,-9.025 -5.715,-6.794 -5.7,-6.645 -5.657,-6.503 -5.587,-6.372 -5.492,-6.256 -5.376,-6.161 -5.245,-6.091 -5.102,-6.047 -4.953,-6.033 4.953,-6.033 5.102,-6.047 5.245,-6.091 5.376,-6.161 5.492,-6.256 5.587,-6.372 5.657,-6.503 5.7,-6.645 5.715,-6.794 5.715,-9.025 5.7,-9.174 5.657,-9.316 5.587,-9.447 5.492,-9.563 5.376,-9.659 5.245,-9.729 5.102,-9.772 4.953,-9.787 4.478,-9.787 4.329,-9.772 4.186,-9.729 4.055,-9.659 3.939,-9.563 3.844,-9.447 3.774,-9.316 3.731,-9.174 3.716,-9.025 3.716,-8.395 3.701,-8.245 3.658,-8.103 3.588,-7.972 3.493,-7.856 3.377,-7.761 3.246,-7.691 3.103,-7.647 2.954,-7.633 -2.954,-7.633 -3.103,-7.647 -3.246,-7.691 -3.377,-7.761 -3.493,-7.856 -3.588,-7.972 -3.658,-8.103 -3.701,-8.245 -3.716,-8.395Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4879-thermo21"]["contacts"],
    "artwork": assets["mikroe-mikroe-4879-thermo21"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_21_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4879-thermo21"]["provenance"],
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
    "id": "mikroe-mikroe-5068-thermo22",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5068: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_22_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5068",
    "name": "Thermo 22 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-22-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo-22-click/Thermo_22_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo22/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_22_click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 22 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "tmp75c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-22-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5068",
      "price": "8.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288 -12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5068-thermo22"]["contacts"],
    "artwork": assets["mikroe-mikroe-5068-thermo22"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_22_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5068-thermo22"]["provenance"],
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
    "id": "mikroe-mikroe-5335-thermo25",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5335: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_25_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5335",
    "name": "Thermo 25 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-25-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_25_click/Thermo_25_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo25/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_25_click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 25 Click add-on module for temperature & humidity applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "spi",
      "tmp127-q1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-25-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5335",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5335-thermo25"]["contacts"],
    "artwork": assets["mikroe-mikroe-5335-thermo25"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_25_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5335-thermo25"]["provenance"],
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
    "id": "mikroe-mikroe-1885-thermo3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1885: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_3_click_2d_3d_files_v101ID.zip"},
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
    "sku": "MIKROE-1885",
    "name": "Thermo 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/thermo-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo-3/Thermo_3_Click_Schematic_v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_3_click_2d_3d_files_v101ID.zip"
      }
    ],
    "description": "Thermo 3 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "tmp102"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1885",
      "price": "9.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 -4.42,-14.287 -4.295,-14.275 -4.177,-14.239 -4.067,-14.181 -3.971,-14.101 -3.891,-14.004 -3.833,-13.896 -3.797,-13.777 -3.785,-13.652 -3.785,-9.232 -3.772,-9.104 -3.735,-8.986 -3.599,-8.783 -3.397,-8.647 -3.278,-8.611 -3.15,-8.597 -3.022,-8.611 -2.902,-8.647 -2.701,-8.783 -2.565,-8.986 -2.528,-9.104 -2.515,-9.232 -2.515,-13.246 -2.254,-13.482 -1.973,-13.69 -1.675,-13.868 -1.361,-14.016 -1.034,-14.133 -0.697,-14.219 -0.351,-14.271 0,-14.287 0.351,-14.271 0.697,-14.219 1.034,-14.133 1.361,-14.016 1.675,-13.868 1.973,-13.69 2.254,-13.482 2.515,-13.246 2.515,-9.232 2.528,-9.104 2.565,-8.986 2.701,-8.783 2.902,-8.647 3.022,-8.611 3.15,-8.597 3.278,-8.611 3.397,-8.647 3.599,-8.783 3.735,-8.986 3.772,-9.104 3.785,-9.232 3.785,-13.652 3.797,-13.777 3.833,-13.896 3.891,-14.004 3.971,-14.101 4.067,-14.181 4.177,-14.239 4.295,-14.275 4.42,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1885-thermo3"]["contacts"],
    "artwork": assets["mikroe-mikroe-1885-thermo3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Thermo_3_click_2d_3d_files_v101ID.zip"
    },
    "provenance": assets["mikroe-mikroe-1885-thermo3"]["provenance"],
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
    "id": "mikroe-mikroe-2979-thermo7",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2979: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo-7-click-2d-and-3d-files.zip"},
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
    "sku": "MIKROE-2979",
    "name": "Thermo 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo-7/thermo-7-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo7/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo-7-click-2d-and-3d-files.zip"
      }
    ],
    "description": "Thermo 7 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "mcp9800"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2979",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463 10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463ZM8.128,-19.431 8.099,-19.665 8.012,-19.88 7.873,-20.065 7.686,-20.209 7.469,-20.3 7.239,-20.33 7.009,-20.3 6.792,-20.209 6.605,-20.065 6.466,-19.88 6.379,-19.665 6.35,-19.431 6.35,-9.779 6.379,-9.545 6.466,-9.33 6.605,-9.145 6.792,-9.001 7.009,-8.91 7.239,-8.88 7.469,-8.91 7.686,-9.001 7.873,-9.145 8.012,-9.33 8.099,-9.545 8.128,-9.779ZM4.826,-6.731 5.06,-6.76 5.275,-6.847 5.46,-6.986 5.604,-7.173 5.695,-7.39 5.725,-7.62 5.695,-7.85 5.604,-8.067 5.46,-8.254 5.275,-8.393 5.06,-8.48 4.826,-8.509 -4.826,-8.509 -5.06,-8.48 -5.275,-8.393 -5.46,-8.254 -5.604,-8.067 -5.695,-7.85 -5.725,-7.62 -5.695,-7.39 -5.604,-7.173 -5.46,-6.986 -5.275,-6.847 -5.06,-6.76 -4.826,-6.731ZM-6.35,-19.431 -6.379,-19.665 -6.466,-19.88 -6.605,-20.065 -6.792,-20.209 -7.009,-20.3 -7.239,-20.33 -7.469,-20.3 -7.686,-20.209 -7.873,-20.065 -8.012,-19.88 -8.099,-19.665 -8.128,-19.431 -8.128,-9.779 -8.099,-9.545 -8.012,-9.33 -7.873,-9.145 -7.686,-9.001 -7.469,-8.91 -7.239,-8.88 -7.009,-8.91 -6.792,-9.001 -6.605,-9.145 -6.466,-9.33 -6.379,-9.545 -6.35,-9.779Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2979-thermo7"]["contacts"],
    "artwork": assets["mikroe-mikroe-2979-thermo7"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo-7-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2979-thermo7"]["provenance"],
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
  {
    "id": "mikroe-mikroe-1362-irthermo5v",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1362: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/irthermo-5v-click-2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -15.7095, "width": 25.4, "height": 31.419},
        {"x": -12.89, "y": 3.01, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 8.09, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": -7.15, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": -2.07, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": -2.07, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": -7.15, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 8.09, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 3.01, "width": 2.92, "height": 5.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-1362",
    "name": "IrThermo 5V Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/irthermo-5v-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/irthermo-5v/irthermo-5v-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/irthermo5v/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/irthermo-5v-click-2d-and-3d-files.zip"
      }
    ],
    "description": "IrThermo 5V Click add-on module for temperature & humidity applications. Host interface: I2C, PWM. All sixteen mikroBUS positions are retained, including contacts marked NC. Exact 5 V variant: manufacturer schematic and physical front legend correct the generic copied table: contact 7 is NC and contact 10 is the 5 V supply.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c, pwm",
      "mlx90614"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/irthermo-5v-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1362",
      "price": "71.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 31.419,
      "outline": "M-5.156,-12.866 -4.174,-14.056 -2.944,-14.951 -1.532,-15.514 0,-15.709 1.532,-15.514 2.944,-14.951 4.174,-14.056 5.156,-12.866 12.7,-12.866 12.7,-10.428 12.7,13.169 10.16,15.709 -12.7,15.709 -12.7,-10.198 -12.7,-10.428 -12.7,-12.866Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1362-irthermo5v"]["contacts"],
    "artwork": assets["mikroe-mikroe-1362-irthermo5v"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/irthermo-5v-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-1362-irthermo5v"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.990090526065353,
      -15.7095,
      12.989894875104351,
      15.7095
    ]
  },
  {
    "id": "mikroe-mikroe-4205-surfacetemp",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4205: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7795, "y": -21.54, "width": 25.559, "height": 43.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4205",
    "name": "Surface Temp Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/surface-temp-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/surface-temp/surface-temp-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/surfacetemp/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_click_2d_3d_files.zip"
      }
    ],
    "description": "Surface Temp Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "adt7420"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/surface-temp-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4205",
      "price": "31.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.559,
      "height": 43.08,
      "outline": "M12.779,21.54 12.779,-21.54 -12.779,-21.54 -12.779,21.54Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4205-surfacetemp"]["contacts"],
    "artwork": assets["mikroe-mikroe-4205-surfacetemp"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4205-surfacetemp"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7795,
      -21.54,
      12.7795,
      21.54
    ]
  },
  {
    "id": "mikroe-mikroe-4266-surfacetemp2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4266: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_2_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7795, "y": -21.54, "width": 25.559, "height": 43.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4266",
    "name": "Surface Temp 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/surface-temp-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/surface_temp_2_click/surface-temp-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/surfacetemp2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_2_click_2d_3d_files.zip"
      }
    ],
    "description": "Surface Temp 2 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/surface-temp-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4266",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.559,
      "height": 43.08,
      "outline": "M12.779,21.54 12.779,-21.54 -12.779,-21.54 -12.779,21.54Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4266-surfacetemp2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4266-surfacetemp2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/surface_temp_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4266-surfacetemp2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7795,
      -21.54,
      12.7795,
      21.54
    ]
  },
  {
    "id": "mikroe-mikroe-1840-thermo2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1840: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/THERMO_2_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-1840",
    "name": "Thermo 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo-2/Thermo_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/THERMO_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 2 Click add-on module for temperature & humidity applications. Host interface: 1-Wire. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "1-wire",
      "ds1825"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1840",
      "price": "27.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,14.287 -12.7,-14.287 12.7,-14.287 12.7,11.747 10.16,14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1840-thermo2"]["contacts"],
    "artwork": assets["mikroe-mikroe-1840-thermo2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/THERMO_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1840-thermo2"]["provenance"],
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
    "id": "mikroe-mikroe-5466-thermo28",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5466: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_28_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5466",
    "name": "Thermo 28 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/thermo-28-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo_28/Thermo_28_Click_Schematic_v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo28/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_28_click_2d_3d_files.zip"
      }
    ],
    "description": "Thermo 28 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "as6221"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-28-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5466",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-12.001 -12.656,-12.449 -12.526,-12.876 -12.316,-13.269 -12.03,-13.617 -11.682,-13.903 -11.289,-14.114 -10.862,-14.243 -10.414,-14.287 10.414,-14.287 10.862,-14.243 11.289,-14.114 11.682,-13.903 12.03,-13.617 12.316,-13.269 12.526,-12.876 12.656,-12.449 12.7,-12.001 12.7,11.748 10.16,14.288 -12.7,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5466-thermo28"]["contacts"],
    "artwork": assets["mikroe-mikroe-5466-thermo28"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_28_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5466-thermo28"]["provenance"],
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
    "id": "mikroe-mikroe-2815-rtd",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2815: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/rtd-click-2d-and-3d-files-v100.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Manufacturer mikroBUS primary 16-pin header: 2.54 mm pitch and 22.86 mm row spacing. Physical header centers come from the cited per-SKU manufacturer CAD, including the reviewed nominal-grid precision where declared.",
        "connectors": [{"id": "mikroBUS", "count": 16, "package": "Manufacturer mikroBUS 2x8"}]
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -21.463, "width": 25.4, "height": 42.926}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-2815",
    "name": "RTD Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rtd-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rtd/rtd-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rtd/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rtd-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "RTD Click add-on module for temperature & humidity applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Optional J1/J2/J3 wire-mode solder jumpers are configuration points, not unconditional internal connections between force and sense contacts.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "gpio, spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rtd-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2815",
      "price": "23.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463 10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2815-rtd"]["contacts"],
    "artwork": assets["mikroe-mikroe-2815-rtd"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rtd-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-2815-rtd"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-2815-rtd"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4301-tempprobe",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4301: v103 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/temp_probe_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Manufacturer mikroBUS primary 16-pin header: 2.54 mm pitch and 22.86 mm row spacing. Physical header centers come from the cited per-SKU manufacturer CAD, including the reviewed nominal-grid precision where declared.",
        "connectors": [{"id": "mikroBUS", "count": 16, "package": "Manufacturer mikroBUS 2x8"}]
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -28.575, "width": 25.4, "height": 57.15}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4301",
    "name": "Temp Probe Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v103",
    "source": "https://www.mikroe.com/temp-probe-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/temp_probe_click/temp.probe.click-schematic-v103.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/tempprobe/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/temp_probe_click_2d_3d_files.zip"
      }
    ],
    "description": "Temp Probe Click add-on module for temperature & humidity applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/temp-probe-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4301",
      "price": "134.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4301-tempprobe"]["contacts"],
    "artwork": assets["mikroe-mikroe-4301-tempprobe"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v103 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/temp_probe_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4301-tempprobe"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
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
    ],
    "backArtwork": assets["mikroe-mikroe-4301-tempprobe"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-2571-thermo5",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2571: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_5_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Manufacturer mikroBUS primary 16-pin header: 2.54 mm pitch and 22.86 mm row spacing. Physical header centers come from the cited per-SKU manufacturer CAD, including the reviewed nominal-grid precision where declared.",
        "connectors": [{"id": "mikroBUS", "count": 16, "package": "Manufacturer mikroBUS 2x8"}]
      },
      "toleranceMm": 0.001,
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -14.2875, "width": 25.4, "height": 28.575}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-2571",
    "name": "THERMO 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/thermo-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/thermo-5/thermo-5-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/thermo5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_5_click_2d_3d_files.zip"
      }
    ],
    "description": "THERMO 5 Click add-on module for temperature & humidity applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "temperature & humidity",
      "i2c",
      "emc1414"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/thermo-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2571",
      "price": "13.00",
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
    "contacts": assets["mikroe-mikroe-2571-thermo5"]["contacts"],
    "artwork": assets["mikroe-mikroe-2571-thermo5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/thermo_5_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2571-thermo5"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
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
    ],
    "backArtwork": assets["mikroe-mikroe-2571-thermo5"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
];
