import assets from "./battery-charging-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-2848-charger5",
    "sku": "MIKROE-2848",
    "name": "Charger 5 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/charger-5-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/charger-5/charger-5-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/charger5/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/charger-5-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "Charger 5 Click add-on module for battery charger applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. Battery pin 1 is positive and pin 2 is ground, as independently confirmed by the source square pin1 aperture and printed − BAT + order. STEP J1/TB1 placement is used consistently for all four auxiliary contacts.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "battery charger",
      "spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/charger-5-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2848",
      "price": "19.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M10.414,-21.463 11.304,-21.283 12.03,-20.793 12.52,-20.067 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463 -12.7,-19.177 -12.52,-20.067 -12.03,-20.793 -11.304,-21.283 -10.414,-21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2848-charger5"]["contacts"],
    "artwork": assets["mikroe-mikroe-2848-charger5"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/charger-5-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-2848-charger5"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-j1-2",
        "aux-tb1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.46775502397512,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-2848-charger5"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4479-ups3",
    "sku": "MIKROE-4479",
    "name": "UPS 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ups-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ups_3_click/ups-3-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ups3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ups_3_click_2d_3d_files.zip"
      }
    ],
    "description": "UPS 3 Click add-on module for battery charger applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. Fitted supercapacitor assembly leads are not user connectors. JP5/JP6 are unpopulated optional bridges, so VSYS is not grouped with either host supply.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "battery charger",
      "gpio",
      "ltc3110"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ups-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4479",
      "price": "47.00",
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
    "contacts": assets["mikroe-mikroe-4479-ups3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4479-ups3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ups_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4479-ups3"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-vsys-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.612733603880606,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-4479-ups3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-3650-charger11",
    "sku": "MIKROE-3650",
    "name": "Charger 11 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/charger-11-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/charger_11_click/charger-11-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/charger11/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Charger%2011_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Charger 11 Click add-on module for battery charger applications. Host interface: GPIO, I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. The source schematic specifies LiFePO4 chemistry and shows both indicator contacts as host-controlled LED cathodes. The SDO and SDI contacts are resistor-coupled, not an ideal short, so no internal-connection group joins them.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "battery charger",
      "gpio, i2c, spi",
      "mcp73123"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/charger-11-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3650",
      "price": "20.00",
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
    "contacts": assets["mikroe-mikroe-3650-charger11"]["contacts"],
    "artwork": assets["mikroe-mikroe-3650-charger11"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Charger%2011_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3650-charger11"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-tb2-gnd",
        "aux-tb1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3650-charger11"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3744-charger12",
    "sku": "MIKROE-3744",
    "name": "CHARGER 12 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/charger-12-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/charger_12_click/charger-12-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/charger12/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/charger_12_click_2D_and_3D_files.zip"
      }
    ],
    "description": "CHARGER 12 Click add-on module for battery charger applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. CS replaces the inconsistent SDN web-table wording only for this newly added entry; actual printed silkscreen and manufacturer schematic agree.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "battery charger",
      "gpio, spi",
      "max1501"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/charger-12-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3744",
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
    "contacts": assets["mikroe-mikroe-3744-charger12"]["contacts"],
    "artwork": assets["mikroe-mikroe-3744-charger12"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/charger_12_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3744-charger12"]["provenance"],
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
        "aux-j1-2"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500739463256608,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3744-charger12"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5960-charger27",
    "sku": "MIKROE-5960",
    "name": "Charger 27 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/charger-27-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/charger_27_click/charger_27_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/charger27/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/charger_27_click_2d_3d_files.zip"
      }
    ],
    "description": "Charger 27 Click add-on module for battery charger applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. VIN and VBAT are both bidirectional power interfaces; the module guide explicitly describes VIN delivering boosted power when external input is absent.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "battery charger",
      "gpio",
      "mp2639b"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/charger-27-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5960",
      "price": "42.00",
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
    "contacts": assets["mikroe-mikroe-5960-charger27"]["contacts"],
    "artwork": assets["mikroe-mikroe-5960-charger27"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/charger_27_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5960-charger27"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-vin-gnd",
        "aux-vbat-2"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-5960-charger27"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-3844-singlecell",
    "sku": "MIKROE-3844",
    "name": "Single Cell Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/single-cell-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/single_cell_click/single-cell-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/singlecell/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/Single_Cell_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Single Cell Click add-on module for boost, linear applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. The external converter terminals are shown as solder-tail contacts in a separate mirrored underside view. Unnumbered source terminals use reference-plus-signal native designators; these are not claimed manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "boost, linear",
      "gpio",
      "mcp16251"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/single-cell-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3844",
      "price": "11.00",
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
    "contacts": assets["mikroe-mikroe-3844-singlecell"]["contacts"],
    "artwork": assets["mikroe-mikroe-3844-singlecell"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/Single_Cell_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3844-singlecell"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "vin-gnd",
        "vout-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.50074361364661,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3844-singlecell"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
