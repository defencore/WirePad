import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-4810-powermonitor",
    "sku": "MIKROE-4810",
    "name": "Power Monitor Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/power-monitor-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/power_monitor_click/Power_Monitor_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/powermonitor/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Power-Monitor_click_2d_3d_files.zip"
      }
    ],
    "description": "Power Monitor Click add-on module for power switch applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. The external differential shunt and bus-voltage inputs are not power-output terminals and are not internally shorted together.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "i2c",
      "ina228"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/power-monitor-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4810",
      "price": "25.00",
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
    "contacts": assets["mikroe-mikroe-4810-powermonitor"]["contacts"],
    "artwork": assets["mikroe-mikroe-4810-powermonitor"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Power-Monitor_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4810-powermonitor"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "in2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4810-powermonitor"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3812-amrcurrent",
    "sku": "MIKROE-3812",
    "name": "AMR Current Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/amr-current-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/amr_current_click/amr-current-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/amrcurrent/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/amr_current_click_2D_and_3D_files.zip"
      }
    ],
    "description": "AMR Current Click add-on module for current sensor, measurements applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Both actual user screw-terminal solder tails are retained in a separate mirrored underside. Native coordinates use the component-side CAD projection. Terminal numbers are functional source references because no numeric pad numbers are printed in the schematic. Carrier copper/drill dimensions are reference values.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "analog, i2c",
      "mcr1101-20-5"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/amr-current-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3812",
      "price": "29.00",
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
    "contacts": assets["mikroe-mikroe-3812-amrcurrent"]["contacts"],
    "artwork": assets["mikroe-mikroe-3812-amrcurrent"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/amr_current_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3812-amrcurrent"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.53059033203703,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3812-amrcurrent"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6166-current11",
    "sku": "MIKROE-6166",
    "name": "Current 11 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-11-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current-11-click/current-11-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/current11/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Current_11_click_2d_3d_files.zip"
      }
    ],
    "description": "Current 11 Click add-on module for current sensor applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor",
      "analog, i2c",
      "acs37600kokatn-006b5-c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-11-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6166",
      "price": "29.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463ZM-4.696,-9.949 -4.665,-9.794 -4.58,-9.667 -4.453,-9.582 -4.298,-9.55 -4.142,-9.582 -4.016,-9.667 -3.93,-9.794 -3.899,-9.949 -3.93,-10.104 -4.016,-10.231 -4.142,-10.317 -4.298,-10.348 -4.453,-10.317 -4.58,-10.231 -4.665,-10.104ZM-4.696,-18.748 -4.665,-18.593 -4.58,-18.466 -4.453,-18.38 -4.298,-18.349 -4.142,-18.38 -4.016,-18.466 -3.93,-18.593 -3.899,-18.748 -3.93,-18.903 -4.016,-19.03 -4.142,-19.115 -4.298,-19.147 -4.453,-19.115 -4.58,-19.03 -4.665,-18.903ZM3.901,-18.748 3.933,-18.593 4.018,-18.466 4.145,-18.38 4.3,-18.349 4.455,-18.38 4.582,-18.466 4.668,-18.593 4.699,-18.748 4.668,-18.903 4.582,-19.03 4.455,-19.115 4.3,-19.147 4.145,-19.115 4.018,-19.03 3.933,-18.903ZM3.901,-9.949 3.933,-9.794 4.018,-9.667 4.145,-9.582 4.3,-9.55 4.455,-9.582 4.582,-9.667 4.668,-9.794 4.699,-9.949 4.668,-10.104 4.582,-10.231 4.455,-10.317 4.3,-10.348 4.145,-10.317 4.018,-10.231 3.933,-10.104ZM3,-16.848 2.99,-16.946 2.962,-17.039 2.916,-17.125 2.853,-17.202 2.777,-17.264 2.691,-17.31 2.597,-17.338 2.499,-17.348 -2.499,-17.348 -2.597,-17.338 -2.691,-17.31 -2.777,-17.264 -2.853,-17.202 -2.916,-17.125 -2.962,-17.039 -2.99,-16.946 -3,-16.848 -3,-12.609 -2.99,-12.51 -2.962,-12.417 -2.916,-12.331 -2.853,-12.255 -2.777,-12.192 -2.691,-12.146 -2.597,-12.118 -2.499,-12.108 2.499,-12.108 2.597,-12.118 2.691,-12.146 2.777,-12.192 2.853,-12.255 2.916,-12.331 2.962,-12.417 2.99,-12.51 3,-12.609Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6166-current11"]["contacts"],
    "artwork": assets["mikroe-mikroe-6166-current11"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Current_11_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6166-current11"]["provenance"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT REFERENCE",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "j1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.990109255562222,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4755-current4",
    "sku": "MIKROE-4755",
    "name": "Current 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current_4_click/Current_4_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/current4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/current_4_click_2d_3d_files.zip"
      }
    ],
    "description": "Current 4 Click add-on module for current sensor, measurements applications. Host interface: Analog. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "analog",
      "ina250"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4755",
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
    "contacts": assets["mikroe-mikroe-4755-current4"]["contacts"],
    "artwork": assets["mikroe-mikroe-4755-current4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/current_4_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4755-current4"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4755-current4"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4915-currentlimit6",
    "sku": "MIKROE-4915",
    "name": "Current Limit 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-limit-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current-limit-6-click/Current_Limit_6_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/currentlimit6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Current_Limit_6_Click_2d_3d_files.zip"
      }
    ],
    "description": "Current Limit 6 Click add-on module for power switch applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "gpio, spi",
      "max17608"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-limit-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4915",
      "price": "29.00",
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
    "contacts": assets["mikroe-mikroe-4915-currentlimit6"]["contacts"],
    "artwork": assets["mikroe-mikroe-4915-currentlimit6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Current_Limit_6_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4915-currentlimit6"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-tb1-gnd",
        "aux-tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500785455599612,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4915-currentlimit6"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4353-vctmonitor",
    "sku": "MIKROE-4353",
    "name": "VCT Monitor Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/vct-monitor-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/vct_monitor_click/vct-monitor-click-schematic-v102.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/vctmonitor/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/vct_monitor_click_2d_3d_files.zip"
      }
    ],
    "description": "VCT Monitor Click add-on module for current sensor, measurements applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/vct-monitor-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4353",
      "price": "32.00",
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
    "contacts": assets["mikroe-mikroe-4353-vctmonitor"]["contacts"],
    "artwork": assets["mikroe-mikroe-4353-vctmonitor"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/vct_monitor_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4353-vctmonitor"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4353-vctmonitor"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6065-current12",
    "sku": "MIKROE-6065",
    "name": "Current 12 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-12-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://s3.us-west-2.amazonaws.com/download.mikroe.com/documents/add-on-boards/click/Current_12_Click/current-12-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/current12/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://s3.us-west-2.amazonaws.com/download.mikroe.com/documents/2d-3d-files/Current_12_Click_2d_3d_files.zip"
      }
    ],
    "description": "Current 12 Click add-on module for current sensor, measurements applications. Host interface: I2C, I3C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "current sensor, measurements",
      "i2c, i3c",
      "tsc1641"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-12-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6065",
      "price": "30.00",
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
    "contacts": assets["mikroe-mikroe-6065-current12"]["contacts"],
    "artwork": assets["mikroe-mikroe-6065-current12"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://s3.us-west-2.amazonaws.com/download.mikroe.com/documents/2d-3d-files/Current_12_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6065-current12"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb1-gnd",
        "tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.50075020544361,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6065-current12"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4271-currentlimit",
    "sku": "MIKROE-4271",
    "name": "Current Limit Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-limit-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current_limit_click/current-limit-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/currentlimit/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/current_limit_click_2d_3d_files.zip"
      }
    ],
    "description": "Current Limit Click add-on module for power switch applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-limit-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4271",
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
    "contacts": assets["mikroe-mikroe-4271-currentlimit"]["contacts"],
    "artwork": assets["mikroe-mikroe-4271-currentlimit"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/current_limit_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4271-currentlimit"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb2-gnd",
        "tb1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4271-currentlimit"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5938-currentlimit10",
    "sku": "MIKROE-5938",
    "name": "Current Limit 10 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/current-limit-10-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current_limit_10_click/Current_Limit_10_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/currentlimit10/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/current_limit_10_click_2d_3d_files.zip"
      }
    ],
    "description": "Current Limit 10 Click add-on module for power switch applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "i2c",
      "hs2950p"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-limit-10-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5938",
      "price": "57.00",
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
    "contacts": assets["mikroe-mikroe-5938-currentlimit10"]["contacts"],
    "artwork": assets["mikroe-mikroe-5938-currentlimit10"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/current_limit_10_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5938-currentlimit10"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb1-gnd",
        "tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-5938-currentlimit10"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-5900-currentlimit4",
    "sku": "MIKROE-5900",
    "name": "Current Limit 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/current-limit-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/current_limit_4_click/current-limit-4-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/currentlimit4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Current_Limit_4_click_2d_3d_files_v102.zip"
      }
    ],
    "description": "Current Limit 4 Click add-on module for power switch applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "analog, i2c",
      "tps259807o"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/current-limit-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5900",
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
    "contacts": assets["mikroe-mikroe-5900-currentlimit4"]["contacts"],
    "artwork": assets["mikroe-mikroe-5900-currentlimit4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Current_Limit_4_click_2d_3d_files_v102.zip"
    },
    "provenance": assets["mikroe-mikroe-5900-currentlimit4"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb1-gnd",
        "tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-5900-currentlimit4"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
];
