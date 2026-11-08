import assets from "./motion-encoders-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-5524-airmotion",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5524: v101 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Air-Motion-click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5524",
    "name": "Air Motion Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/air-motion-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/air_motion_click/Air_Motion_Click_Schematic_v101a.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/airmotion/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Air-Motion-click_2d_3d_files.zip"
      }
    ],
    "description": "Air Motion Click add-on module for motion applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "i2c, spi",
      "icm-40627"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/air-motion-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5524",
      "price": "22.00",
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
    "contacts": assets["mikroe-mikroe-5524-airmotion"]["contacts"],
    "artwork": assets["mikroe-mikroe-5524-airmotion"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Air-Motion-click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5524-airmotion"]["provenance"],
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
    "id": "mikroe-mikroe-6050-inclinometer3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6050: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/inclinometer_3_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-6050",
    "name": "Inclinometer 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/inclinometer-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/inclinometer_3_click/Inclinometer_3_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/inclinometer3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/inclinometer_3_click_2d_3d_files.zip"
      }
    ],
    "description": "Inclinometer 3 Click add-on module for motion applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "spi",
      "scl3400-d01"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/inclinometer-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6050",
      "price": "235.00",
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
    "contacts": assets["mikroe-mikroe-6050-inclinometer3"]["contacts"],
    "artwork": assets["mikroe-mikroe-6050-inclinometer3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/inclinometer_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6050-inclinometer3"]["provenance"],
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
    "id": "mikroe-mikroe-6470-mlvibrosens",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6470: v102 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/ML_Vibro_Sens_click_2d_3d_files_v102.zip"},
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
    "sku": "MIKROE-6470",
    "name": "ML Vibro Sens Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/ml-vibro-sens-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ml-vibro-sens-click/ml-vibro-sens-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/mlvibrosens/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ML_Vibro_Sens_click_2d_3d_files_v102.zip"
      }
    ],
    "description": "ML Vibro Sens Click add-on module for motion, vibration applications. Host interface: GPIO, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion, vibration",
      "gpio, i2c",
      "fxls8974cf"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ml-vibro-sens-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6470",
      "price": "25.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M7.671,-4.547 7.367,-4.517 7.078,-4.429 6.811,-4.286 6.575,-4.093 6.382,-3.857 6.239,-3.59 6.151,-3.301 6.121,-2.997 6.121,-1.372 6.151,-1.068 6.239,-0.779 6.382,-0.512 6.575,-0.276 6.811,-0.083 7.078,0.06 7.367,0.148 7.671,0.178 11.151,0.178 11.454,0.208 11.744,0.296 12.01,0.438 12.246,0.632 12.44,0.868 12.582,1.134 12.67,1.424 12.7,1.727 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,1.727 -12.67,1.424 -12.582,1.134 -12.44,0.868 -12.246,0.632 -12.01,0.438 -11.744,0.296 -11.454,0.208 -11.151,0.178 -7.671,0.178 -7.367,0.148 -7.078,0.06 -6.811,-0.083 -6.575,-0.276 -6.382,-0.512 -6.239,-0.779 -6.151,-1.068 -6.121,-1.372 -6.121,-2.997 -6.151,-3.301 -6.239,-3.59 -6.382,-3.857 -6.575,-4.093 -6.811,-4.286 -7.078,-4.429 -7.367,-4.517 -7.671,-4.547 -11.151,-4.547 -11.454,-4.577 -11.744,-4.665 -12.01,-4.807 -12.246,-5 -12.44,-5.236 -12.582,-5.503 -12.67,-5.792 -12.7,-6.096 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,-6.096 12.67,-5.792 12.582,-5.503 12.44,-5.236 12.246,-5 12.01,-4.807 11.744,-4.665 11.454,-4.577 11.151,-4.547ZM-3.505,-1.372 -3.475,-1.068 -3.387,-0.779 -3.245,-0.512 -3.051,-0.276 -2.815,-0.083 -2.549,0.06 -2.259,0.148 -1.956,0.178 1.956,0.178 2.259,0.148 2.549,0.06 2.815,-0.083 3.051,-0.276 3.245,-0.512 3.387,-0.779 3.475,-1.068 3.505,-1.372 3.505,-2.997 3.475,-3.301 3.387,-3.59 3.245,-3.857 3.051,-4.093 2.815,-4.286 2.549,-4.429 2.259,-4.517 1.956,-4.547 -1.956,-4.547 -2.259,-4.517 -2.549,-4.429 -2.815,-4.286 -3.051,-4.093 -3.245,-3.857 -3.387,-3.59 -3.475,-3.301 -3.505,-2.997Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6470-mlvibrosens"]["contacts"],
    "artwork": assets["mikroe-mikroe-6470-mlvibrosens"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ML_Vibro_Sens_click_2d_3d_files_v102.zip"
    },
    "provenance": assets["mikroe-mikroe-6470-mlvibrosens"]["provenance"],
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
    "id": "mikroe-mikroe-6056-optoencoder5",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6056: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Opto_Encoder_5_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-6056",
    "name": "Opto Encoder 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/opto-encoder-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/opto-encoder-5-click/Opto_Encoder_5_Click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/optoencoder5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Opto_Encoder_5_Click_2d_3d_files.zip"
      }
    ],
    "description": "Opto Encoder 5 Click add-on module for optical applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "optical",
      "gpio",
      "opb666n"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/opto-encoder-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6056",
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
    "contacts": assets["mikroe-mikroe-6056-optoencoder5"]["contacts"],
    "artwork": assets["mikroe-mikroe-6056-optoencoder5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Opto_Encoder_5_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6056-optoencoder5"]["provenance"],
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
    "id": "mikroe-mikroe-4753-inclinometer",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4753: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Inclinometer_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4753",
    "name": "Inclinometer Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/inclinometer-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/inclinometer_click/Inclinometer_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/inclinometer/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Inclinometer_click_2d_3d_files.zip"
      }
    ],
    "description": "Inclinometer Click add-on module for motion applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "spi",
      "scl3300"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/inclinometer-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4753",
      "price": "165.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4753-inclinometer"]["contacts"],
    "artwork": assets["mikroe-mikroe-4753-inclinometer"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Inclinometer_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4753-inclinometer"]["provenance"],
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
    "id": "mikroe-mikroe-4355-vibrasense2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4355: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/vibra_sense_2_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4355",
    "name": "Vibra Sense 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/vibra-sense-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/vibra_sense_2_click/vibra.sense.2.click.schematic.v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/vibrasense2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/vibra_sense_2_click_2d_3d_files.zip"
      }
    ],
    "description": "Vibra Sense 2 Click add-on module for force applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "force",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/vibra-sense-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4355",
      "price": "31.00",
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
    "contacts": assets["mikroe-mikroe-4355-vibrasense2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4355-vibrasense2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/vibra_sense_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4355-vibrasense2"]["provenance"],
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
    "id": "mikroe-mikroe-4779-tilt3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4779: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Tilt_3_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4779",
    "name": "Tilt 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/tilt-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/tilt_3_click/Tilt_3_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/tilt3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Tilt_3_Click_2d_3d_files.zip"
      }
    ],
    "description": "Tilt 3 Click add-on module for motion applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion",
      "gpio",
      "dsba1p"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/tilt-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4779",
      "price": "26.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4779-tilt3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4779-tilt3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Tilt_3_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4779-tilt3"]["provenance"],
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
    "id": "mikroe-mikroe-4049-motion3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4049: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/Motion_3%20Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4049",
    "name": "Motion 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/motion-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/motion_3_click/motion-3-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/motion3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Motion_3%20Click_2d_3d_files.zip"
      }
    ],
    "description": "Motion 3 Click add-on module for motion, pir applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. The PIR lens covers the main contact bank on the component side; all host contacts and relay solder tails are shown in a separate mirrored connector-side view. The floating relay terminals are not joined to host ground.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "motion, pir",
      "gpio",
      "ekmc1606112"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/motion-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4049",
      "price": "37.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4049-motion3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4049-motion3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Motion_3%20Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4049-motion3"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.50073398725816,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4049-motion3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5979-optoencoder4",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5979: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/opto_encoder_4_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5979",
    "name": "Opto Encoder 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/opto-encoder-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/opto-encoder-4-click/Opto_Encoder_4_Click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/optoencoder4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/opto_encoder_4_click_2d_3d_files.zip"
      }
    ],
    "description": "Opto Encoder 4 Click add-on module for optical applications. Host interface: Analog, GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. Photo prints VCC,OUT,OUR,GND from left to right, matching schematic J1 pins 1–4. The fitted optical sensor component leads are not added a second time as user connectors.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "optical",
      "analog, gpio",
      "ee-sx4330"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/opto-encoder-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5979",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-5979-optoencoder4"]["contacts"],
    "artwork": assets["mikroe-mikroe-5979-optoencoder4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/opto_encoder_4_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5979-optoencoder4"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-j1-4"
      ],
      [
        "p1",
        "aux-j1-2"
      ],
      [
        "p15",
        "aux-j1-3"
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
