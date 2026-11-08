import assets from "./power-switching-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-4575-powermux2",
    "sku": "MIKROE-4575",
    "name": "Power MUX 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/power-mux-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/power_mux_2_click/power-mux-2-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/powermux2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/power_mux_2_click_2d_3d_files.zip"
      }
    ],
    "description": "Power MUX 2 Click add-on module for power switch, multiplexer applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. All six power-multiplexer screw contacts are exposed as actual underside solder tails. Source terminals without published numeric designators use reference-plus-signal identifiers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch, multiplexer",
      "spi",
      "tps2121"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/power-mux-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4575",
      "price": "34.00",
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
    "contacts": assets["mikroe-mikroe-4575-powermux2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4575-powermux2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/power_mux_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4575-powermux2"]["provenance"],
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
        "tb3-gnd",
        "tb1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500734580443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4575-powermux2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4335-efuse2",
    "sku": "MIKROE-4335",
    "name": "eFuse 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/efuse-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/eFuse_2_click/efuse-2-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/efuse2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/eFuse_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "eFuse 2 Click add-on module for power switch applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/efuse-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4335",
      "price": "25.00",
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
    "contacts": assets["mikroe-mikroe-4335-efuse2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4335-efuse2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/eFuse_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4335-efuse2"]["provenance"],
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
      -28.66357588903761,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-4335-efuse2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-5738-efuse7",
    "sku": "MIKROE-5738",
    "name": "eFuse 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/efuse-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/eFuse_7_click/eFuse_7_click_v101_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/efuse7/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/efuse_7_click_2d_3d_files.zip"
      }
    ],
    "description": "eFuse 7 Click add-on module for power switch applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "gpio",
      "ls12052bd33"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/efuse-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5738",
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
    "contacts": assets["mikroe-mikroe-5738-efuse7"]["contacts"],
    "artwork": assets["mikroe-mikroe-5738-efuse7"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/efuse_7_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5738-efuse7"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-5738-efuse7"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6314-ipd2",
    "sku": "MIKROE-6314",
    "name": "IPD 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/ipd-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/ipd-2-click/ipd-2-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/ipd2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/IPD_2_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "IPD 2 Click add-on module for power switch applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Exact additional connector functions are checked against the manufacturer schematic and the component-side product photograph. Hidden connector solder contacts are shown in the mirrored underside; native coordinates retain the canonical component-side projection. Carrier copper/drill dimensions are reference values, not manufacturer production lands. Printed functional terminal identities are used where the schematic does not publish terminal numbers. The output connector contains OUT1 and OUT2, with no ground terminal. The external input connector supplies VDD/GND; the board uses host 3.3 V for logic and ClickID.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "power switch",
      "gpio",
      "bv2hd070efu-c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/ipd-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6314",
      "price": "25.00",
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
    "contacts": assets["mikroe-mikroe-6314-ipd2"]["contacts"],
    "artwork": assets["mikroe-mikroe-6314-ipd2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/IPD_2_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6314-ipd2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-cn1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6314-ipd2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
