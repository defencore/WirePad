import assets from "./proximity-speed-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-2086-irgesture",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2086: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Gesture_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-2086",
    "name": "IR Gesture Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ir-gesture-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ir-gesture/IR%20GESTURE%20click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/irgesture/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Gesture_Click_2d_3d_files.zip"
      }
    ],
    "description": "IR Gesture Click add-on module for motion applications. Host interface: GPIO, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "gpio, i2c",
      "apds-9960"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ir-gesture-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2086",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.7,-14.287 12.7,-14.287 12.7,11.747 10.16,14.287 -12.7,14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2086-irgesture"]["contacts"],
    "artwork": assets["mikroe-mikroe-2086-irgesture"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/IR_Gesture_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-2086-irgesture"]["provenance"],
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
    "id": "mikroe-mikroe-5146-irgesture2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5146: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/IR-Gesture_2_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5146",
    "name": "IR Gesture 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ir-gesture-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ir-gesture-2-click/IR_Gesture_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/irgesture2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/IR-Gesture_2_click_2d_3d_files.zip"
      }
    ],
    "description": "IR Gesture 2 Click add-on module for motion applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "spi",
      "max25405"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ir-gesture-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5146",
      "price": "90.00",
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
    "contacts": assets["mikroe-mikroe-5146-irgesture2"]["contacts"],
    "artwork": assets["mikroe-mikroe-5146-irgesture2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/IR-Gesture_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5146-irgesture2"]["provenance"],
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
    "id": "mikroe-mikroe-5742-irgesture3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5742: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/ir_gesture_3_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5742",
    "name": "IR Gesture 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/ir-gesture-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ir_gesture_3_click/IR_Gesture_3_Click_%20V101_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/irgesture3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ir_gesture_3_click_2d_3d_files.zip"
      }
    ],
    "description": "IR Gesture 3 Click add-on module for motion applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "i2c",
      "adpd1080"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ir-gesture-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5742",
      "price": "56.00",
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
    "contacts": assets["mikroe-mikroe-5742-irgesture3"]["contacts"],
    "artwork": assets["mikroe-mikroe-5742-irgesture3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ir_gesture_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5742-irgesture3"]["provenance"],
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
    "id": "mikroe-mikroe-5773-microwave6",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5773: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/microwave_6_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -28.575, "width": 25.4, "height": 57.15},
        {"x": -13.0, "y": -28.178, "width": 26.0, "height": 28.0}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-5773",
    "name": "Microwave 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/microwave-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/microwave-6-click/microwave_6_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/microwave6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/microwave_6_click_2d_3d_files.zip"
      }
    ],
    "description": "Microwave 6 Click add-on module for motion applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "analog, i2c",
      "pd-v8-s"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/microwave-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5773",
      "price": "25.00",
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
    "contacts": assets["mikroe-mikroe-5773-microwave6"]["contacts"],
    "artwork": assets["mikroe-mikroe-5773-microwave6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/microwave_6_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5773-microwave6"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -13.100071041094,
      -28.575,
      13.099937918905999,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-1998-reed",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1998: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/REED_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-1998",
    "name": "REED Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/reed-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/reed/REED_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/reed/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/REED_Click_2d_3d_files.zip"
      }
    ],
    "description": "REED Click add-on module for magnetic applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "magnetic",
      "gpio",
      "ct10-1540-g1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/reed-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1998",
      "price": "8.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.573,14.287 -12.583,14.238 -12.61,14.197 -12.651,14.17 -12.7,14.16 -12.7,-14.287 12.7,-14.287 12.7,11.748 10.16,14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1998-reed"]["contacts"],
    "artwork": assets["mikroe-mikroe-1998-reed"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/REED_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1998-reed"]["provenance"],
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
    "id": "mikroe-mikroe-5207-smartsens2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5207: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Smart_Sens_2_Click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
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
    "sku": "MIKROE-5207",
    "name": "Smart Sens 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/smart-sens-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/smart_sens_2_click/Smart_Sens_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/smartsens2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Smart_Sens_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "Smart Sens 2 Click add-on module for environmental, motion applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. The cJTAG header is a 1.8 V interface, with source connector numbering; auxiliary positions are calibrated from the official front photo.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "environmental, motion",
      "i2c, spi",
      "bhi260ap"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/smart-sens-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5207",
      "price": "105.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5207-smartsens2"]["contacts"],
    "artwork": assets["mikroe-mikroe-5207-smartsens2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. Named auxiliary contacts omitted from the STEP are calibrated from the official same-side photo; those positions are approximate reference geometry. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Smart_Sens_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5207-smartsens2"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "j1-4"
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
    "id": "mikroe-mikroe-6464-hallcurrent20",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6464: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_20_click_2d_3d_files_v101.zip"},
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
    "sku": "MIKROE-6464",
    "name": "Hall Current 20 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/hall-current-20-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/hall-current-20-click/hall-current-20-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/hallcurrent20/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_20_click_2d_3d_files_v101.zip"
      }
    ],
    "description": "Hall Current 20 Click add-on module for current sensor, measurements applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. The high-current IP−/IP+ conductor terminals remain electrically separate from the host supply and ground domain.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "analog, i2c",
      "acs37220lezatr-150b3"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/hall-current-20-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6464",
      "price": "27.00",
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
    "contacts": assets["mikroe-mikroe-6464-hallcurrent20"]["contacts"],
    "artwork": assets["mikroe-mikroe-6464-hallcurrent20"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_20_click_2d_3d_files_v101.zip"
    },
    "provenance": assets["mikroe-mikroe-6464-hallcurrent20"]["provenance"],
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
    "id": "mikroe-mikroe-3443-hallcurrent6",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3443: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_6_click_v100_CAD.zip"},
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
    "sku": "MIKROE-3443",
    "name": "Hall Current 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/hall-current-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/hall-current-6/hall-current-6-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/hallcurrent6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_6_click_v100_CAD.zip"
      }
    ],
    "description": "Hall Current 6 Click add-on module for current sensor, measurements applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "i2c",
      "acs723"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/hall-current-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3443",
      "price": "28.00",
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
    "contacts": assets["mikroe-mikroe-3443-hallcurrent6"]["contacts"],
    "artwork": assets["mikroe-mikroe-3443-hallcurrent6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Hall_Current_6_click_v100_CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3443-hallcurrent6"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-3443-hallcurrent6"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5977-speedsense",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5977: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/speed_sense_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
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
    "sku": "MIKROE-5977",
    "name": "Speed Sense Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/speed-sense-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/speed_sense_click/Speed_Sens_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/speedsense/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/speed_sense_click_2d_3d_files.zip"
      }
    ],
    "description": "Speed Sense Click add-on module for motion applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. The external OUTA/OUTB and VEXT contacts are included at their source CAD hole positions; the external supply selection remains conditional, not an implicit short.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "gpio",
      "a17501"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/speed-sense-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5977",
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
    "contacts": assets["mikroe-mikroe-5977-speedsense"]["contacts"],
    "artwork": assets["mikroe-mikroe-5977-speedsense"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/speed_sense_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5977-speedsense"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "j1-1"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.48379494864154,
      12.7,
      21.463
    ]
  },
];
