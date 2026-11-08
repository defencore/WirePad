import assets from "./serial-transceivers-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-3993-rs4856",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3993: cited CAD archive physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_6_click_2d_and_3d_files.zip"},
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
    "sku": "MIKROE-3993",
    "name": "RS485 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "cited CAD archive",
    "source": "https://www.mikroe.com/rs485-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485_6_click/RS485-6-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs4856/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_6_click_2d_and_3d_files.zip"
      }
    ],
    "description": "RS485 6 Click add-on module for rs485 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs485",
      "uart",
      "thvd1329dt"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3993",
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
    "contacts": assets["mikroe-mikroe-3993-rs4856"]["contacts"],
    "artwork": assets["mikroe-mikroe-3993-rs4856"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE cited CAD archive board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_6_click_2d_and_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3993-rs4856"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-3993-rs4856"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-3395-rs4854",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3395: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_4_click_v100_CAD.zip"},
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
    "sku": "MIKROE-3395",
    "name": "RS485 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rs485-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485-4/RS485-4-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs4854/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_4_click_v100_CAD.zip"
      }
    ],
    "description": "RS485 4 Click add-on module for rs485 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs485",
      "uart",
      "adm2795e"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3395",
      "price": "47.00",
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
    "contacts": assets["mikroe-mikroe-3395-rs4854"]["contacts"],
    "artwork": assets["mikroe-mikroe-3395-rs4854"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_4_click_v100_CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3395-rs4854"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-3395-rs4854"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4225-singlewirecan",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4225: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/single_wire_can_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-4225",
    "name": "Single Wire CAN Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/single-wire-can-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/single_wire_can_click/single-wire-can-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/singlewirecan/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/single_wire_can_click_2d_3d_files.zip"
      }
    ],
    "description": "Single Wire CAN Click add-on module for can applications. Host interface: GPIO, UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "can",
      "gpio, uart"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/single-wire-can-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4225",
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
    "contacts": assets["mikroe-mikroe-4225-singlewirecan"]["contacts"],
    "artwork": assets["mikroe-mikroe-4225-singlewirecan"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/single_wire_can_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4225-singlewirecan"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "can-gnd",
        "vin-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500734580443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4225-singlewirecan"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3870-duallin",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-3870: v101 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/dual_lin_click_2D_and_3D_files.zip"},
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
    "sku": "MIKROE-3870",
    "name": "Dual LIN Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/dual-lin-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dual_lin_click/dual-lin-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/duallin/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/dual_lin_click_2D_and_3D_files.zip"
      }
    ],
    "description": "Dual LIN Click add-on module for lin applications. Host interface: GPIO, UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "lin",
      "gpio, uart",
      "tle7268skxuma1"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dual-lin-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3870",
      "price": "14.00",
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
    "contacts": assets["mikroe-mikroe-3870-duallin"]["contacts"],
    "artwork": assets["mikroe-mikroe-3870-duallin"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/dual_lin_click_2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3870-duallin"]["provenance"],
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
        "tb3-gnd",
        "tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500734580443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3870-duallin"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6767-rs2324",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6767: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/RS232_4_Click_2d_3d_files_v100.zip"},
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
    "sku": "MIKROE-6767",
    "name": "RS232 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rs232-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs232-4-click/rs232-4-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs2324/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/RS232_4_Click_2d_3d_files_v100.zip"
      }
    ],
    "description": "RS232 4 Click add-on module for rs232 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Exact RS232 connector direction follows the line-driver/receiver schematic: CTS and RX are outputs; RTS and TX are inputs.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs232",
      "uart",
      "trsf3232e"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs232-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6767",
      "price": "17.00",
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
    "contacts": assets["mikroe-mikroe-6767-rs2324"]["contacts"],
    "artwork": assets["mikroe-mikroe-6767-rs2324"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/RS232_4_Click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6767-rs2324"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "tb1-gnd-l",
        "tb1-gnd-r"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6767-rs2324"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-2821-rs4853",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-2821: v101 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/rs485-3-click-2d-and-3d-files.zip"},
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
    "sku": "MIKROE-2821",
    "name": "RS485 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/rs485-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485-3/rs485-3-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs4853/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rs485-3-click-2d-and-3d-files.zip"
      }
    ],
    "description": "RS485 3 Click add-on module for rs485 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs485",
      "uart",
      "sn65hvd31dr"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-2821",
      "price": "24.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-12.56 -12.655,-13.011 -12.525,-13.44 -12.314,-13.836 -12.027,-14.186 -11.677,-14.473 -11.281,-14.684 -10.852,-14.814 -10.401,-14.859 -8.255,-14.859 -8.255,-21.463 8.255,-21.463 8.255,-14.859 10.401,-14.859 10.852,-14.814 11.281,-14.684 11.677,-14.473 12.027,-14.186 12.314,-13.836 12.525,-13.44 12.655,-13.011 12.7,-12.56 12.7,18.923 10.16,21.463 -12.7,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-2821-rs4853"]["contacts"],
    "artwork": assets["mikroe-mikroe-2821-rs4853"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rs485-3-click-2d-and-3d-files.zip"
    },
    "provenance": assets["mikroe-mikroe-2821-rs4853"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "cn1-gnd",
        "cn2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-2821-rs4853"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5659-rs4857",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5659: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_7_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5659",
    "name": "RS485 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rs485-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485-7-click/RS485_7_Click_v100_Schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs4857/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_7_click_2d_3d_files.zip"
      }
    ],
    "description": "RS485 7 Click add-on module for rs485 applications. Host interface: GPIO, UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. A/B are receiver inputs; supported half-duplex mode operates on Y/Z.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs485",
      "gpio, uart",
      "thvd1424"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5659",
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
    "contacts": assets["mikroe-mikroe-5659-rs4857"]["contacts"],
    "artwork": assets["mikroe-mikroe-5659-rs4857"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_7_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5659-rs4857"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "cn1-gnd",
        "cn2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.52614083044361,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-5659-rs4857"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5752-rs4858",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-5752: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_8_click_2d_3d_files.zip"},
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
    "sku": "MIKROE-5752",
    "name": "RS485 8 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rs485-8-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485_8_click/rs485_8_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs4858/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_8_click_2d_3d_files.zip"
      }
    ],
    "description": "RS485 8 Click add-on module for rs485 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "rs485",
      "uart",
      "thvd1426"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-8-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5752",
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
    "contacts": assets["mikroe-mikroe-5752-rs4858"]["contacts"],
    "artwork": assets["mikroe-mikroe-5752-rs4858"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rs485_8_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5752-rs4858"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "cn1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.52614083044361,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-5752-rs4858"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-6316-rs485isolator4",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-6316: v100 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_Isolator_4_click_2d_3d_files_v100.zip"},
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
    "sku": "MIKROE-6316",
    "name": "RS485 Isolator 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/rs485-isolator-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rs485-isolator-4-click/rs485-isolator-4-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rs485isolator4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_Isolator_4_click_2d_3d_files_v100.zip"
      }
    ],
    "description": "RS485 Isolator 4 Click add-on module for isolators, rs485 applications. Host interface: UART. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Isolated power and ground stay separate from host VCC/GND; termination is a resistor path.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "isolators, rs485",
      "uart",
      "iso1450"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rs485-isolator-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6316",
      "price": "23.00",
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
    "contacts": assets["mikroe-mikroe-6316-rs485isolator4"]["contacts"],
    "artwork": assets["mikroe-mikroe-6316-rs485isolator4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/RS485_Isolator_4_click_2d_3d_files_v100.zip"
    },
    "provenance": assets["mikroe-mikroe-6316-rs485isolator4"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-6316-rs485isolator4"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
];
