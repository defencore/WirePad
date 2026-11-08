import assets from "./bus-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-3743-i2ctospi",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3743: v2 header geometry", "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_to_SPI_click_2D_and_3D_files.zip"},
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
    "sku": "MIKROE-3743",
    "name": "I2C to SPI Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v2",
    "source": "https://www.mikroe.com/i2c-to-spi-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/i2c_to_spi_click/i2c-to-spi-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/i2ctospi/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_to_SPI_click_2D_and_3D_files.zip"
      },
      {
        "label": "NXP SC18IS602B pin directions and SPI-master function",
        "url": "https://www.nxp.com/docs/en/data-sheet/SC18IS602B.pdf"
      }
    ],
    "description": "SC18IS602B I2C-slave to SPI-master bridge. The host communicates over I2C; the SPI contacts drive downstream peripherals.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "i2c, port expander",
      "i2c, spi",
      "sc18is602b"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/i2c-to-spi-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3743",
      "price": "22.00",
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
    "contacts": assets["mikroe-mikroe-3743-i2ctospi"]["contacts"],
    "artwork": assets["mikroe-mikroe-3743-i2ctospi"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v2 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_to_SPI_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3743-i2ctospi"]["provenance"],
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
    "id": "mikroe-mikroe-2583-spiisolator",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2583: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/SPI_Isolator_Click-2d-3d-files.zip"},
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
    "sku": "MIKROE-2583",
    "name": "SPI Isolator Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/spi-isolator-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/spi-isolator/spi-isolator-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/spiisolator/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/SPI_Isolator_Click-2d-3d-files.zip"
      }
    ],
    "description": "SPI Isolator Click add-on module for spi applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "spi",
      "spi",
      "adum4154"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/spi-isolator-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2583",
      "price": "35.00",
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
    "contacts": assets["mikroe-mikroe-2583-spiisolator"]["contacts"],
    "artwork": assets["mikroe-mikroe-2583-spiisolator"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/SPI_Isolator_Click-2d-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2583-spiisolator"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-2583-spiisolator"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4675-i2cisolator4",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4675: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_Isolator_4_Click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4675",
    "name": "I2C Isolator 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/i2c-isolator-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/i2c_isolator_4_click/I2C_Isolator_4_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/i2cisolator4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_Isolator_4_Click_2d_3d_files.zip"
      }
    ],
    "description": "I2C Isolator 4 Click add-on module for i2c, isolators applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Separate host/remote supply and ground domains are retained; source ground glyphs and signal-net names were visually checked.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "i2c, isolators",
      "i2c",
      "max14937"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/i2c-isolator-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4675",
      "price": "36.00",
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
    "contacts": assets["mikroe-mikroe-4675-i2cisolator4"]["contacts"],
    "artwork": assets["mikroe-mikroe-4675-i2cisolator4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_Isolator_4_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4675-i2cisolator4"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500734580443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4675-i2cisolator4"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5603-i2cisolator6",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5603: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/i2c_isolator_6_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5603",
    "name": "I2C Isolator 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/i2c-isolator-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/i2c-isolator-6-click/I2C_Isolator_6_click_v100_Schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/i2cisolator6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/i2c_isolator_6_click_2d_3d_files.zip"
      }
    ],
    "description": "I2C Isolator 6 Click add-on module for i2c, isolators applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Separate host/remote supply and ground domains are retained; source ground glyphs and signal-net names were visually checked.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "i2c, isolators",
      "i2c",
      "adum2250"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/i2c-isolator-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5603",
      "price": "35.00",
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
    "contacts": assets["mikroe-mikroe-5603-i2cisolator6"]["contacts"],
    "artwork": assets["mikroe-mikroe-5603-i2cisolator6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/i2c_isolator_6_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5603-i2cisolator6"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-5603-i2cisolator6"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5943-i2cisolator7",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5943: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_isolator_7_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5943",
    "name": "I2C Isolator 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/i2c-isolator-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/i2c_isolator_7_click/i2c_isolator_7_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/i2cisolator7/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_isolator_7_click_2d_3d_files.zip"
      }
    ],
    "description": "I2C Isolator 7 Click add-on module for i2c, isolators applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Separate host/remote supply and ground domains are retained; source ground glyphs and signal-net names were visually checked.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "i2c, isolators",
      "i2c",
      "adum1252"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/i2c-isolator-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5943",
      "price": "30.00",
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
    "contacts": assets["mikroe-mikroe-5943-i2cisolator7"]["contacts"],
    "artwork": assets["mikroe-mikroe-5943-i2cisolator7"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/I2C_isolator_7_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5943-i2cisolator7"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-5943-i2cisolator7"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3298-llcspi",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3298: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/llc-spi-click-2d-and-3d-files-v100.zip"},
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
    "sku": "MIKROE-3298",
    "name": "LLC SPI Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/llc-spi-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/llc-spi/llc-spi-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/llcspi/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/llc-spi-click-2d-and-3d-files-v100.zip"
      }
    ],
    "description": "LLC SPI Click add-on module for port expander applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "port expander",
      "spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/llc-spi-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3298",
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
    "contacts": assets["mikroe-mikroe-3298-llcspi"]["contacts"],
    "artwork": assets["mikroe-mikroe-3298-llcspi"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/llc-spi-click-2d-and-3d-files-v100.zip"
    },
    "provenance": assets["mikroe-mikroe-3298-llcspi"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
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
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3298-llcspi"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
