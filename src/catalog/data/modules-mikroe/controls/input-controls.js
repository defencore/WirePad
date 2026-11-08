import assets from "./input-controls-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-3204-capslider2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3204: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Slider_2_click_2D_and_3D_files.zip.zip"},
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
    "sku": "MIKROE-3204",
    "name": "CAP Slider 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/cap-slider-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap-slider-2-click/cap-slider-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/capslider2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Slider_2_click_2D_and_3D_files.zip.zip"
      }
    ],
    "description": "CAP Slider 2 Click add-on module for capacitive applications. Host interface: GPIO, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "gpio, i2c",
      "iqs333"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-slider-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3204",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-20.32 -12.54,-21.938 -12.072,-23.479 -11.313,-24.9 -10.282,-26.157 -9.025,-27.188 -7.604,-27.947 -6.063,-28.415 -4.445,-28.575 4.445,-28.575 6.063,-28.415 7.604,-27.947 9.025,-27.188 10.282,-26.157 11.313,-24.9 12.072,-23.479 12.54,-21.938 12.7,-20.32 12.7,26.035 10.16,28.575 -12.7,28.575ZM0.249,-1.364 0.404,0.409 2.428,0.231 2.273,-1.542ZM2.766,-1.628 3.226,0.089 5.189,-0.437 4.729,-2.154ZM5.197,-2.324 5.949,-0.714 7.79,-1.572 7.038,-3.183ZM7.473,-3.432 8.491,-1.976 10.157,-3.142 9.136,-4.597ZM-10.157,-3.142 -8.491,-1.976 -7.473,-3.432 -9.136,-4.597ZM-7.79,-1.572 -5.949,-0.714 -5.197,-2.324 -7.038,-3.183ZM-5.189,-0.437 -3.226,0.089 -2.766,-1.628 -4.729,-2.154ZM-2.428,0.231 -0.404,0.409 -0.249,-1.364 -2.273,-1.542ZM-1.016,25.781 0.762,25.781 0.762,23.749 -1.016,23.749Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3204-capslider2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3204-capslider2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Slider_2_click_2D_and_3D_files.zip.zip"
    },
    "provenance": assets["mikroe-mikroe-3204-capslider2"]["provenance"],
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
    "id": "mikroe-mikroe-6645-capslider3",
    "sku": "MIKROE-6645",
    "name": "Cap Slider 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/cap-slider-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap-slider-3-click/cap-slider-3-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/capslider3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Slider_3_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "Cap Slider 3 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "iqs323"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-slider-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6645",
      "price": "27.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575ZM-0.889,12.37 0.889,12.37 0.889,10.338 -0.889,10.338ZM0.864,14.961 -0.914,14.961 -0.914,16.993 0.864,16.993Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6645-capslider3"]["contacts"],
    "artwork": assets["mikroe-mikroe-6645-capslider3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Slider_3_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6645-capslider3"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
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
    "backArtwork": assets["mikroe-mikroe-6645-capslider3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-2888-captouch",
    "sku": "MIKROE-2888",
    "name": "Cap Touch Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/cap-touch-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap-touch/cap-touch-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/captouch/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/cap-touch-2d-and-3d-files.zip"
      }
    ],
    "description": "Cap Touch Click add-on module for capacitive applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "gpio",
      "at42qt1010"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-touch-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2888",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.939,
      "outline": "M-7.81,-19.438 -7.771,-19.835 -7.656,-20.215 -7.469,-20.564 -7.215,-20.875 -6.906,-21.128 -6.556,-21.314 -6.177,-21.43 -5.778,-21.47 5.779,-21.47 6.177,-21.43 6.556,-21.314 6.906,-21.128 7.215,-20.875 7.469,-20.564 7.656,-20.215 7.771,-19.835 7.811,-19.438 7.811,-9.011 12.7,-4.122 12.7,18.929 10.16,21.469 -12.7,21.469 -12.7,-4.058 -7.81,-8.948ZM1.041,16.143 1.041,13.841 -1.041,13.841 -1.041,16.143Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2888-captouch"]["contacts"],
    "artwork": assets["mikroe-mikroe-2888-captouch"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/cap-touch-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2888-captouch"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.4695,
      12.7,
      21.4695
    ],
    "backArtwork": assets["mikroe-mikroe-2888-captouch"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.4695,
      12.7,
      21.4695
    ]
  },
  {
    "id": "mikroe-mikroe-2964-captouch2",
    "sku": "MIKROE-2964",
    "name": "Cap Touch 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "cited CAD archive",
    "source": "https://www.mikroe.com/cap-touch-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap-touch-2/cap-touch-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/captouch2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/cap-touch-2-click-2d-and-3d-files.zip"
      }
    ],
    "description": "Cap Touch 2 Click add-on module for capacitive applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "spi",
      "cap1166"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-touch-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2964",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575ZM3.124,15.918 3.124,18.217 5.207,18.217 5.207,15.918Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2964-captouch2"]["contacts"],
    "artwork": assets["mikroe-mikroe-2964-captouch2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE cited CAD archive board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/cap-touch-2-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2964-captouch2"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
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
    "backArtwork": assets["mikroe-mikroe-2964-captouch2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-3786-captouch5",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3786: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Touch_5_click_2D_and_3D_files.zip"},
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
    "sku": "MIKROE-3786",
    "name": "Cap Touch 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/cap-touch-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap_touch_5_click/cap-touch-5-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/captouch5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Touch_5_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Cap Touch 5 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "cy8cmbr3106s-lqxi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-touch-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3786",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463 10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463ZM1.041,16.248 -1.041,16.248 -1.041,18.55 1.041,18.55Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3786-captouch5"]["contacts"],
    "artwork": assets["mikroe-mikroe-3786-captouch5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Cap_Touch_5_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3786-captouch5"]["provenance"],
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
    "id": "mikroe-mikroe-3677-capwheel2",
    "sku": "MIKROE-3677",
    "name": "Cap Wheel 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/cap-wheel-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap_wheel_2_click/cap-wheel-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/capwheel2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/cap_wheel_2_click_2d_and_3d_files.zip"
      }
    ],
    "description": "Cap Wheel 2 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "iqs263b"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-wheel-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3677",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M0,-28.575 0.63,-28.559 1.255,-28.513 1.875,-28.436 2.489,-28.329 3.096,-28.192 3.694,-28.026 4.282,-27.831 4.86,-27.608 5.426,-27.357 5.98,-27.079 6.52,-26.773 7.046,-26.441 7.556,-26.083 8.049,-25.699 8.524,-25.29 8.98,-24.855 9.415,-24.399 9.824,-23.924 10.208,-23.431 10.566,-22.921 10.898,-22.395 11.204,-21.855 11.482,-21.301 11.733,-20.735 11.956,-20.157 12.151,-19.569 12.317,-18.971 12.454,-18.364 12.561,-17.75 12.638,-17.13 12.684,-16.505 12.7,-15.875 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-15.875 -12.684,-16.505 -12.638,-17.13 -12.561,-17.75 -12.454,-18.364 -12.317,-18.971 -12.151,-19.569 -11.956,-20.157 -11.733,-20.735 -11.482,-21.301 -11.204,-21.855 -10.898,-22.395 -10.566,-22.921 -10.208,-23.431 -9.824,-23.924 -9.415,-24.399 -8.98,-24.855 -8.524,-25.29 -8.049,-25.699 -7.556,-26.083 -7.046,-26.441 -6.52,-26.773 -5.98,-27.079 -5.426,-27.357 -4.86,-27.608 -4.282,-27.831 -3.694,-28.026 -3.096,-28.192 -2.489,-28.329 -1.875,-28.436 -1.255,-28.513 -0.63,-28.559ZM1.041,24.646 1.041,22.344 -1.041,22.344 -1.041,24.646Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3677-capwheel2"]["contacts"],
    "artwork": assets["mikroe-mikroe-3677-capwheel2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/cap_wheel_2_click_2d_and_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3677-capwheel2"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
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
    "backArtwork": assets["mikroe-mikroe-3677-capwheel2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4469-proxfusion3",
    "sku": "MIKROE-4469",
    "name": "ProxFusion 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/proxfusion-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/proxfusion_3_click/proxfusion-3-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/proxfusion3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/proxFusion_3_click_2d_3d_files.zip"
      }
    ],
    "description": "ProxFusion 3 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "iqs269a"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/proxfusion-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4469",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575 10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575ZM1.041,24.646 1.041,22.344 -1.041,22.344 -1.041,24.646Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4469-proxfusion3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4469-proxfusion3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/proxFusion_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4469-proxfusion3"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
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
    "backArtwork": assets["mikroe-mikroe-4469-proxfusion3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-2891-touchkey3",
    "sku": "MIKROE-2891",
    "name": "TouchKey 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/touchkey-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/touchkey-3/touchkey-3-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/touchkey3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/touchkey-3-click-2d-and-3d-files.zip"
      }
    ],
    "description": "TouchKey 3 Click add-on module for capacitive applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "gpio, spi",
      "at42qt1110"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/touchkey-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2891",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.121,
      "outline": "M-12.696,0.748 -12.641,0.137 -12.575,-0.472 -12.493,-1.078 -12.394,-1.683 -12.262,-2.152 -12.082,-2.6 -11.858,-3.025 -11.59,-3.422 -11.282,-3.79 -10.936,-4.123 -10.554,-4.419 -10.14,-4.675 -9.986,-4.777 -9.871,-4.916 -9.8,-5.082 -9.779,-5.265 -9.811,-5.446 -9.892,-5.607 -10.016,-5.739 -10.175,-5.831 -10.677,-6.171 -11.124,-6.568 -11.513,-7.016 -11.84,-7.509 -12.101,-8.04 -12.291,-8.602 -12.409,-9.189 -12.449,-9.793 -12.409,-10.398 -12.291,-10.985 -12.101,-11.547 -11.84,-12.077 -11.513,-12.57 -11.124,-13.019 -10.677,-13.416 -10.175,-13.756 -10.013,-13.861 -9.888,-14.005 -9.808,-14.178 -9.78,-14.369 -9.806,-14.561 -9.884,-14.735 -10.006,-14.88 -10.168,-14.988 -10.556,-15.243 -10.91,-15.531 -11.23,-15.847 -11.514,-16.188 -11.763,-16.553 -11.974,-16.937 -12.148,-17.339 -12.284,-17.754 -12.38,-18.179 -12.436,-18.613 -12.45,-19.052 -12.423,-19.492 -12.354,-19.931 -12.241,-20.367 -12.083,-20.795 -11.881,-21.213 -11.638,-21.609 -11.362,-21.972 -11.057,-22.302 -10.725,-22.598 -10.368,-22.858 -9.991,-23.082 -9.596,-23.269 -9.185,-23.418 -8.763,-23.528 -8.331,-23.598 -7.894,-23.627 -7.452,-23.615 -7.011,-23.559 -6.572,-23.46 -6.139,-23.317 -5.715,-23.128 -5.488,-23.097 -5.263,-23.121 -5.05,-23.198 -4.859,-23.326 -4.705,-23.496 -4.599,-23.696 -4.543,-23.915 -4.542,-24.144 -4.506,-24.599 -4.428,-25.04 -4.308,-25.465 -4.149,-25.872 -3.953,-26.258 -3.723,-26.622 -3.46,-26.962 -3.167,-27.275 -2.846,-27.559 -2.5,-27.812 -2.129,-28.032 -1.738,-28.216 -1.327,-28.364 -0.899,-28.472 -0.456,-28.538 0,-28.561 0.456,-28.538 0.899,-28.472 1.327,-28.364 1.738,-28.216 2.129,-28.032 2.5,-27.812 2.846,-27.559 3.167,-27.275 3.46,-26.962 3.723,-26.622 3.953,-26.258 4.149,-25.872 4.308,-25.465 4.428,-25.04 4.506,-24.599 4.542,-24.144 4.543,-23.915 4.599,-23.696 4.706,-23.497 4.86,-23.326 5.05,-23.199 5.263,-23.121 5.488,-23.097 5.715,-23.128 6.139,-23.317 6.572,-23.46 7.011,-23.559 7.452,-23.615 7.894,-23.627 8.331,-23.598 8.763,-23.528 9.185,-23.418 9.596,-23.269 9.991,-23.082 10.368,-22.858 10.725,-22.598 11.057,-22.302 11.362,-21.972 11.638,-21.609 11.881,-21.213 12.083,-20.795 12.241,-20.367 12.354,-19.931 12.423,-19.492 12.45,-19.052 12.436,-18.613 12.38,-18.179 12.284,-17.754 12.148,-17.339 11.974,-16.937 11.763,-16.553 11.514,-16.188 11.23,-15.847 10.91,-15.531 10.556,-15.243 10.168,-14.988 10.006,-14.88 9.884,-14.735 9.806,-14.561 9.78,-14.369 9.808,-14.178 9.888,-14.005 10.013,-13.861 10.175,-13.756 10.677,-13.416 11.124,-13.019 11.513,-12.57 11.84,-12.077 12.101,-11.547 12.291,-10.985 12.409,-10.398 12.449,-9.793 12.409,-9.189 12.291,-8.602 12.101,-8.04 11.84,-7.509 11.513,-7.016 11.124,-6.568 10.677,-6.171 10.175,-5.831 10.016,-5.739 9.892,-5.607 9.811,-5.446 9.779,-5.265 9.8,-5.082 9.871,-4.916 9.986,-4.777 10.14,-4.675 10.56,-4.415 10.946,-4.114 11.296,-3.775 11.606,-3.401 11.875,-2.996 12.099,-2.564 12.277,-2.107 12.406,-1.63 12.502,-1.038 12.583,-0.445 12.649,0.151 12.7,0.748 12.7,26.021 10.16,28.561 -12.7,28.561ZM-0.864,26.16 0.864,26.16 0.864,23.849 -0.864,23.849Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2891-touchkey3"]["contacts"],
    "artwork": assets["mikroe-mikroe-2891-touchkey3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/touchkey-3-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2891-touchkey3"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.5605,
      12.7,
      28.5605
    ],
    "backArtwork": assets["mikroe-mikroe-2891-touchkey3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.5605,
      12.7,
      28.5605
    ]
  },
  {
    "id": "mikroe-mikroe-1995-touchpad",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1995: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/TouchPad_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-1995",
    "name": "Touchpad Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/touchpad-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/touchpad/touchpad-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/touchpad/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/TouchPad_Click_2d_3d_files.zip"
      }
    ],
    "description": "Touchpad Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "mtch6102"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/touchpad-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1995",
      "price": "18.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,21.463 -12.7,-21.463 12.7,-21.463 12.7,18.923 10.16,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1995-touchpad"]["contacts"],
    "artwork": assets["mikroe-mikroe-1995-touchpad"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/TouchPad_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1995-touchpad"]["provenance"],
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
    "id": "mikroe-mikroe-4382-touchpad3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4382: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/touchpad_3_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4382",
    "name": "Touchpad 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/touchpad-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/touchpad_3_click/touchpad-3-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/touchpad3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/touchpad_3_click_2d_3d_files.zip"
      }
    ],
    "description": "Touchpad 3 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/touchpad-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4382",
      "price": "25.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,28.575 -12.7,-28.575 12.7,-28.575 12.7,26.035 10.16,28.575Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4382-touchpad3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4382-touchpad3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/touchpad_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4382-touchpad3"]["provenance"],
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
    "id": "mikroe-mikroe-4752-touchpad4",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4752: cited CAD archive header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Touchpad_4_click_2d_3d_files_v102.zip"},
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
    "sku": "MIKROE-4752",
    "name": "Touchpad 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "cited CAD archive",
    "source": "https://www.mikroe.com/touchpad-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/touchPad_4_click/touchpad-4-click-schematic_v102.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/touchpad4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Touchpad_4_click_2d_3d_files_v102.zip"
      }
    ],
    "description": "Touchpad 4 Click add-on module for capacitive applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "i2c",
      "iqs7211a"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/touchpad-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4752",
      "price": "13.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4752-touchpad4"]["contacts"],
    "artwork": assets["mikroe-mikroe-4752-touchpad4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE cited CAD archive board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Touchpad_4_click_2d_3d_files_v102.zip"
    },
    "provenance": assets["mikroe-mikroe-4752-touchpad4"]["provenance"],
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
    "id": "mikroe-mikroe-2920-proxfusion",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2920: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/proxfusion_2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded. The source STEP extraction rounds contact coordinates to 0.001 mm; the reviewed insertion map uses nominal 2.54 mm steps relative to p1 with at most 0.001 mm residual. Canonical SVG, electrical anchors and native assets retain the stored source coordinates.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "toleranceMm": 0.001,
      "bodyRegions": [
        {"x": -12.7, "y": -21.4885, "width": 25.4, "height": 42.977}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-2920",
    "name": "ProxFusion Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/proxfusion-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/proxfusion/proxfusion-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/proxfusion/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/proxfusion_2d-and-3d-files.zip"
      }
    ],
    "description": "ProxFusion Click add-on module for capacitive applications. Host interface: GPIO, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "gpio, i2c",
      "iqs624"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/proxfusion-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2920",
      "price": "11.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.977,
      "outline": "M-12.7,-8.991 -12.31,-10.543 -11.603,-11.959 -10.61,-13.191 -9.361,-14.192 -7.926,-14.9 -6.389,-15.278 -4.807,-15.319 -3.236,-15.016 -3.096,-15.006 -2.958,-15.023 -2.827,-15.066 -2.705,-15.135 -2.598,-15.227 -2.513,-15.336 -2.45,-15.46 -2.413,-15.595 -2.393,-15.647 -2.384,-15.702 -2.385,-15.757 -2.398,-15.812 -2.42,-15.863 -2.452,-15.908 -2.493,-15.946 -2.54,-15.976 -2.708,-16.181 -2.832,-16.413 -2.908,-16.664 -2.935,-16.928 -2.908,-17.193 -2.832,-17.444 -2.708,-17.676 -2.54,-17.881 -0.157,-20.263 -0.157,-20.264 0.123,-20.493 0.439,-20.662 0.783,-20.767 1.143,-20.802 2.487,-20.802 2.572,-20.81 2.653,-20.835 2.728,-20.875 2.794,-20.929 4.532,-21.436 6.313,-21.488 8.051,-21.094 9.659,-20.262 11.004,-19.05 11.984,-17.562 12.563,-15.876 12.7,-14.071 12.7,18.949 10.16,21.489 -12.7,21.489Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2920-proxfusion"]["contacts"],
    "artwork": assets["mikroe-mikroe-2920-proxfusion"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/proxfusion_2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2920-proxfusion"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.4885,
      12.7,
      21.4885
    ]
  },
  {
    "id": "mikroe-mikroe-4727-digipot9",
    "sku": "MIKROE-4727",
    "name": "DIGI POT 9 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/digi-pot-9-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/digi_pot_9_click/DIGI_POT_9_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/digipot9/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/digi_pot_9_click_2d_3d_files.zip"
      }
    ],
    "description": "DIGI POT 9 Click add-on module for digital potentiometer applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "digital potentiometer",
      "spi",
      "ad5235"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/digi-pot-9-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4727",
      "price": "43.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4727-digipot9"]["contacts"],
    "artwork": assets["mikroe-mikroe-4727-digipot9"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/digi_pot_9_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4727-digipot9"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4727-digipot9"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5204-ldctouch",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5204: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/ldc_touch_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5204",
    "name": "LDC Touch Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ldc-touch-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ldc_touch_click/LDC_Touch_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ldctouch/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ldc_touch_click_2d_3d_files.zip"
      }
    ],
    "description": "LDC Touch Click add-on module for inductance applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. ",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "inductance",
      "i2c",
      "ldc3114-q1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ldc-touch-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5204",
      "price": "23.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5204-ldctouch"]["contacts"],
    "artwork": assets["mikroe-mikroe-5204-ldctouch"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ldc_touch_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5204-ldctouch"]["provenance"],
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
    "id": "mikroe-mikroe-1307-8x8b",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1307: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/8x8-r-click-2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -24.9175, "width": 25.4, "height": 49.835},
        {"x": 9.97, "y": 7.138, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 2.058, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 17.298, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 12.218, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 7.138, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 2.058, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 17.298, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 12.218, "width": 2.92, "height": 5.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-1307",
    "name": "8x8 B Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/8x8-b-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/8x8-b/8x8-b-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/8x8b/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/8x8-r-click-2d-and-3d-files.zip"
      }
    ],
    "description": "8x8 B Click add-on module for led matrix applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The manufacturer-linked Red-variant CAD is used only as a representative mechanical reference for this Blue module.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "led matrix",
      "spi",
      "max7219"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/8x8-b-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1307",
      "price": "43.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 49.835,
      "outline": "M-12.7,-24.917 12.7,-24.917 12.7,-3.648 12.7,22.378 10.16,24.918 -12.7,24.918 -12.7,-3.648Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1307-8x8b"]["contacts"],
    "artwork": assets["mikroe-mikroe-1307-8x8b"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The manufacturer download is labeled 8x8 Red; its shared mechanical layout is used as a representative reference for the separately checked Blue product photo, not claimed as exact Blue-variant CAD.",
    "cad": {
      "label": "Manufacturer 8x8 Red mechanical-variant CAD reference for the Blue product",
      "url": "https://download.mikroe.com/documents/2d-3d-files/8x8-r-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-1307-8x8b"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.990090526065353,
      -24.9175,
      12.989894875104351,
      24.9175
    ]
  },
  {
    "id": "mikroe-mikroe-1423-bargraph",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1423: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/bargraph-click-2d-and-3d-files-v100.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -19.0805, "width": 25.4, "height": 38.161},
        {"x": 9.97, "y": 1.301, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": -3.779, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 11.461, "width": 2.92, "height": 5.08},
        {"x": 9.97, "y": 6.381, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 1.301, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": -3.779, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 11.461, "width": 2.92, "height": 5.08},
        {"x": -12.89, "y": 6.381, "width": 2.92, "height": 5.08}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-1423",
    "name": "BarGraph Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/bargraph-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/bargraph/bargraph-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/bargraph/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/bargraph-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "BarGraph Click add-on module for bargraph, led segment applications. Host interface: GPIO, PWM, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. ",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "bargraph, led segment",
      "gpio, pwm, spi",
      "sn74hc595d"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/bargraph-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1423",
      "price": "14.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 38.161,
      "outline": "M10.16,19.081 -12.7,19.081 -12.7,-19.081 12.7,-19.081 12.7,16.541Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1423-bargraph"]["contacts"],
    "artwork": assets["mikroe-mikroe-1423-bargraph"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/bargraph-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-1423-bargraph"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.990090526065353,
      -19.15949971334,
      12.989894875104351,
      19.0805
    ]
  },
  {
    "id": "mikroe-mikroe-3045-ibutton",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3045: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/ibutton-click-2d-and-3d-files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -21.4635, "width": 25.4, "height": 42.927}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-3045",
    "name": "iButton Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ibutton-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ibutton/ibutton-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ibutton/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ibutton-click-2d-and-3d-files.zip"
      }
    ],
    "description": "iButton Click add-on module for 1-wire applications. Host interface: 1-Wire. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. The reader DATA center and grounded outer ring are mating-face contacts. The native reference pad positions use their source solder-terminal XY projections; the selected copper sizes are not a production reader footprint.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "1-wire",
      "1-wire",
      "cz-0-pin"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ibutton-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3045",
      "price": "42.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.927,
      "outline": "M-12.699,-9.07 -12.666,-9.712 -12.603,-10.345 -12.51,-10.969 -12.387,-11.582 -12.234,-12.184 -12.054,-12.775 -11.846,-13.352 -11.612,-13.916 -11.352,-14.466 -11.066,-15.001 -10.756,-15.52 -10.423,-16.023 -10.067,-16.508 -9.689,-16.976 -9.289,-17.425 -8.869,-17.854 -8.429,-18.263 -7.971,-18.652 -7.494,-19.018 -7,-19.362 -6.489,-19.683 -5.962,-19.98 -5.42,-20.252 -4.864,-20.498 -4.295,-20.719 -3.712,-20.912 -3.118,-21.078 -2.512,-21.215 -1.896,-21.323 -1.27,-21.401 -0.635,-21.448 0.007,-21.464 0.65,-21.447 1.285,-21.399 1.911,-21.321 2.527,-21.212 3.132,-21.074 3.726,-20.908 4.309,-20.714 4.878,-20.493 5.434,-20.245 5.975,-19.973 6.502,-19.675 7.012,-19.354 7.506,-19.009 7.982,-18.642 8.44,-18.253 8.88,-17.843 9.299,-17.414 9.698,-16.964 10.076,-16.496 10.431,-16.01 10.764,-15.507 11.073,-14.988 11.358,-14.452 11.618,-13.902 11.851,-13.338 12.059,-12.76 12.238,-12.17 12.39,-11.568 12.512,-10.954 12.605,-10.33 12.667,-9.697 12.699,-9.055 12.7,18.924 10.16,21.464 -12.7,21.464Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-3045-ibutton"]["contacts"],
    "artwork": assets["mikroe-mikroe-3045-ibutton"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ibutton-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-3045-ibutton"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "probe-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.4635,
      12.7,
      21.4635
    ]
  },
  {
    "id": "mikroe-mikroe-1506-joystick",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-1506: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/Joystick_Click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "All sixteen primary mikroBUS insertion centers use the manufacturer board CAD, 2.54 mm pitch and 22.86 mm row spacing. Auxiliary connectors are excluded.",
        "connectors": [{"id": "mikroBUS", "count": 16}]
      },
      "bodyRegions": [
        {"x": -12.7, "y": -21.463, "width": 25.4, "height": 42.926},
        {"x": 9.97, "y": -1.397, "width": 2.92, "height": 20.32},
        {"x": -12.89, "y": -1.397, "width": 2.92, "height": 20.32}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-1506",
    "name": "Joystick Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/joystick-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/joystick/Joystick_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/joystick/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Joystick_Click_2d_3d_files.zip"
      }
    ],
    "description": "Joystick Click add-on module for pushbutton/switches applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. ",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "pushbutton/switches",
      "i2c",
      "as5013"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/joystick-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1506",
      "price": "49.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-1.897 -10.269,-4.328 -10.269,-21.463 10.269,-21.463 10.269,-4.328 12.7,-1.897Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1506-joystick"]["contacts"],
    "artwork": assets["mikroe-mikroe-1506-joystick"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Joystick_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1506-joystick"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.990090526065353,
      -21.463,
      12.989894875104351,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5378-joystick3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5378: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/joystick_3_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5378",
    "name": "Joystick 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/joystick-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/joystick_3_click/Joystick_3_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/joystick3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/joystick_3_click_2d_3d_files.zip"
      }
    ],
    "description": "Joystick 3 Click add-on module for pushbutton/switches applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "pushbutton/switches",
      "spi",
      "2765"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/joystick-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5378",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-5378-joystick3"]["contacts"],
    "artwork": assets["mikroe-mikroe-5378-joystick3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/joystick_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5378-joystick3"]["provenance"],
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
    "id": "mikroe-mikroe-5517-captouch6",
    "sku": "MIKROE-5517",
    "name": "Cap Touch 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/cap-touch-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/cap-touch-6-click/Cap_Touch_6_Click_Schematic_v102.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/captouch6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/cap_touch_6_click_2d_3d_files.zip"
      }
    ],
    "description": "Cap Touch 6 Click add-on module for capacitive applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The main connections are shown in the separate mirrored connector-side view below the sensing face.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "gpio",
      "iqs227d"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/cap-touch-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5517",
      "price": "29.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M10.414,-28.575 10.862,-28.531 11.289,-28.401 11.682,-28.191 12.03,-27.905 12.316,-27.557 12.526,-27.164 12.656,-26.737 12.7,-26.289 12.7,26.035 10.16,28.575 -12.7,28.575 -12.7,-26.289 -12.656,-26.737 -12.526,-27.164 -12.316,-27.557 -12.03,-27.905 -11.682,-28.191 -11.289,-28.401 -10.862,-28.531 -10.414,-28.575ZM1.041,21.852 1.041,19.553 -1.041,19.553 -1.041,21.852Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-5517-captouch6"]["contacts"],
    "artwork": assets["mikroe-mikroe-5517-captouch6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/cap_touch_6_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5517-captouch6"]["provenance"],
    "viewLabel": "SENSING FACE / MIRRORED CONNECTOR SIDE",
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
    "backArtwork": assets["mikroe-mikroe-5517-captouch6"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-6926-hodcap2",
    "sku": "MIKROE-6926",
    "name": "HOD CAP 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/hod-cap-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/hod-cap-2-click/hod-cap-2-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/hodcap2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/hod_cap_2_click_v101_2d_3d_files.zip"
      }
    ],
    "description": "HOD CAP 2 Click add-on module for capacitive applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Actual schematic routing and the source front-face legends correct the generic product-table SDI/SDO reversal on contacts 5 and 6. The SEN header and local 5 V TRIG pad are included.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "capacitive",
      "spi",
      "as8580-atsm"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/hod-cap-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6926",
      "price": "39.00",
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
    "contacts": assets["mikroe-mikroe-6926-hodcap2"]["contacts"],
    "artwork": assets["mikroe-mikroe-6926-hodcap2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/hod_cap_2_click_v101_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6926-hodcap2"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-6926-hodcap2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5922-ledflash3",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5922: v100 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/led_flash_3_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts. Leave unlisted optional through-hole headers unpopulated or facing upward; fitted downward auxiliary leads are outside this reviewed profile.",
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
    "sku": "MIKROE-5922",
    "name": "LED Flash 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/led-flash-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/led_flash_3_click/led_flash_3_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ledflash3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/led_flash_3_click_2d_3d_files.zip"
      }
    ],
    "description": "LED Flash 3 Click add-on module for led segment applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. The schematic uses the I2C-capable KTD2691A variant. The fitted center LED pad is not an external connector. The external J1 two-pad header is exposed on the front and retains source pin 1 square-pad identity.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "led segment",
      "i2c",
      "ktd2691"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/led-flash-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5922",
      "price": "21.00",
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
    "contacts": assets["mikroe-mikroe-5922-ledflash3"]["contacts"],
    "artwork": assets["mikroe-mikroe-5922-ledflash3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/led_flash_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5922-ledflash3"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-j1-2"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
];
