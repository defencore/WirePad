import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-6985-mcurrentsens",
    "sku": "MIKROE-6985",
    "name": "mCurrent Sens Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/mcurrent-sens-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/mcurrent-sens-click/mcurrent-sens-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/mcurrentsens/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/mcurrent_sens_click_v100_2d_3d_files.zip"
      }
    ],
    "description": "mCurrent Sens Click add-on module for measurements applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Additional source-verified contacts share canonical component-side coordinates. Exposed front pads remain on the front; fitted through-hole connector solder contacts are shown in a distinct mirrored underside. Selected copper and drills are reference values, not manufacturer production lands. The photographed top row reads GND,C2,SH2−,SH2+,3V,GND,C1,SH1−,SH1+,3V from left to right (J1 pins 10→1). SH+ and SH− are separated by the physical 50 mΩ shunts; do not ideal-connect them. TP1/TP2 positions are honestly photo-derived references because these exposed points are absent from the STEP model. Host3.3 V, regulated 3V3A, and precision 3.0 V remain distinct.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements",
      "i2c, spi",
      "mcp3564r"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/mcurrent-sens-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6985",
      "price": "66.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "outline": "M-12.7,-28.537 -12.685,-28.54 -12.673,-28.548 -12.665,-28.56 -12.662,-28.575 12.662,-28.575 12.665,-28.56 12.673,-28.548 12.685,-28.54 12.7,-28.537 12.7,25.997 12.685,26 12.673,26.008 12.665,26.02 12.662,26.035 12.665,26.05 12.673,26.062 10.187,28.548 10.175,28.54 10.16,28.537 10.145,28.54 10.133,28.548 10.125,28.56 10.122,28.575 -12.662,28.575 -12.665,28.56 -12.673,28.548 -12.685,28.54 -12.7,28.537Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-6985-mcurrentsens"]["contacts"],
    "artwork": assets["mikroe-mikroe-6985-mcurrentsens"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. Named auxiliary contacts omitted from the STEP are calibrated from the official same-side photo; those positions are approximate reference geometry.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/mcurrent_sens_click_v100_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6985-mcurrentsens"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-j1-10",
        "aux-j1-5",
        "aux-tp2"
      ],
      [
        "aux-j1-6",
        "aux-j1-1"
      ]
    ],
    "artworkBounds": [
      -12.952471413565492,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-6985-mcurrentsens"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4997-adc19",
    "sku": "MIKROE-4997",
    "name": "ADC 19 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/adc-19-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc_19_click/ADC_19_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc19/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/adc_19_click_2d_3d_files.zip"
      }
    ],
    "description": "ADC 19 Click add-on module for adc applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "spi",
      "adc122s101"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-19-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4997",
      "price": "16.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4997-adc19"]["contacts"],
    "artwork": assets["mikroe-mikroe-4997-adc19"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/adc_19_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4997-adc19"]["provenance"],
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
      -14.325282708571228,
      12.7,
      14.2875
    ],
    "backArtwork": assets["mikroe-mikroe-4997-adc19"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-4105-adc9",
    "sku": "MIKROE-4105",
    "name": "ADC 9 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/adc-9-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc_9_click/ADC-9-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc9/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ADC%209%20Click_2d_3d_files.zip"
      }
    ],
    "description": "ADC 9 Click add-on module for adc applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. The terminal printed GND belongs to the source AGND domain; it is not automatically merged with the separately named DGND net without a sourced direct bond.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "gpio, spi",
      "mcp3564"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-9-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4105",
      "price": "28.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4105-adc9"]["contacts"],
    "artwork": assets["mikroe-mikroe-4105-adc9"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ADC%209%20Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4105-adc9"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4105-adc9"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4111-analogmux",
    "sku": "MIKROE-4111",
    "name": "Analog MUX Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v2",
    "source": "https://www.mikroe.com/analog-mux-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/analog_mux_click/analog-mux-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/analogmux/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/analog_mux_click2d_3d_files.zip"
      }
    ],
    "description": "Analog MUX Click add-on module for measurements, multiplexer applications. Host interface: GPIO. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements, multiplexer",
      "gpio",
      "cd74hc4067"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/analog-mux-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4111",
      "price": "8.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4111-analogmux"]["contacts"],
    "artwork": assets["mikroe-mikroe-4111-analogmux"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v2 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/analog_mux_click2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4111-analogmux"]["provenance"],
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
      ],
      [
        "p8",
        "p9",
        "tb2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-4111-analogmux"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4767-dac11",
    "sku": "MIKROE-4767",
    "name": "DAC 11 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/dac-11-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dac_11_click/DAC_11_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dac11/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/dac_11_click_2d_3d_files.zip"
      }
    ],
    "description": "DAC 11 Click add-on module for dac applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "dac",
      "spi",
      "dac128s085"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dac-11-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4767",
      "price": "57.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 57.15,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4767-dac11"]["contacts"],
    "artwork": assets["mikroe-mikroe-4767-dac11"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/dac_11_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4767-dac11"]["provenance"],
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
      -28.575,
      12.7,
      28.575
    ],
    "backArtwork": assets["mikroe-mikroe-4767-dac11"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-4763-vcpmonitor4",
    "sku": "MIKROE-4763",
    "name": "VCP Monitor 4 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/vcp-monitor-4-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/vcp_monitor_4_click/VCP_Monitor_4_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/vcpmonitor4/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/VCP_Monitor_4_Click_2d_3d_files.zip"
      }
    ],
    "description": "VCP Monitor 4 Click add-on module for measurements applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements",
      "spi",
      "ina239"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/vcp-monitor-4-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4763",
      "price": "25.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4763-vcpmonitor4"]["contacts"],
    "artwork": assets["mikroe-mikroe-4763-vcpmonitor4"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern. The illustrated edge treatment is a reference reconstruction from the cited source outline or STEP envelope.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/VCP_Monitor_4_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4763-vcpmonitor4"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4763-vcpmonitor4"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3115-adc7",
    "sku": "MIKROE-3115",
    "name": "ADC 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/adc-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc-7/adc-7-click-schematic-v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc7/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/adc-7-click-2d-and-3d-files-v101.zip"
      }
    ],
    "description": "ADC 7 Click add-on module for adc applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Both actual user screw-terminal solder tails are retained in a separate mirrored underside. Native coordinates use the component-side CAD projection. Terminal numbers are functional source references because no numeric pad numbers are printed in the schematic. Carrier copper/drill dimensions are reference values.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "spi",
      "ltc2500cdkd-32"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3115",
      "price": "257.00",
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
    "contacts": assets["mikroe-mikroe-3115-adc7"]["contacts"],
    "artwork": assets["mikroe-mikroe-3115-adc7"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/adc-7-click-2d-and-3d-files-v101.zip"
    },
    "provenance": assets["mikroe-mikroe-3115-adc7"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-3115-adc7"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4221-antopwm2",
    "sku": "MIKROE-4221",
    "name": "AN to PWM 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/an-to-pwm-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/an_to_pwm_2_click/an-to-pwm-2-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/antopwm2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/an_to_pwm_2_click_2d_3d_files.zip"
      }
    ],
    "description": "AN to PWM 2 Click add-on module for adc applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. Fitted TB1 external analog-input terminal solder tails are concealed by its housing and shown separately mirrored below. Source terminal numbers are reference-plus-signal because the schematic publishes no numeric terminal labels.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "i2c"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/an-to-pwm-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4221",
      "price": "62.00",
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
    "contacts": assets["mikroe-mikroe-4221-antopwm2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4221-antopwm2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/an_to_pwm_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4221-antopwm2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "aux-1"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4221-antopwm2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4966-adc17",
    "sku": "MIKROE-4966",
    "name": "ADC 17 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/adc-17-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc_17_click/ADC_17_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc17/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_17_click_2d_3d_files.zip"
      }
    ],
    "description": "ADC 17 Click add-on module for adc applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "i2c",
      "max11645"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-17-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4966",
      "price": "18.00",
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
    "contacts": assets["mikroe-mikroe-4966-adc17"]["contacts"],
    "artwork": assets["mikroe-mikroe-4966-adc17"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_17_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4966-adc17"]["provenance"],
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
      -14.325282432005604,
      12.7,
      14.2875
    ],
    "backArtwork": assets["mikroe-mikroe-4966-adc17"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-1893-adc2",
    "sku": "MIKROE-1893",
    "name": "ADC 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/adc-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc-2/ADC_2%20click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "ADC 2 Click add-on module for adc applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "spi",
      "mcp3551"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1893",
      "price": "29.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M12.7,-14.287 12.7,-9.309 12.7,11.747 10.16,14.287 -12.7,14.287 -12.7,-14.287Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1893-adc2"]["contacts"],
    "artwork": assets["mikroe-mikroe-1893-adc2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1893-adc2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "cn2-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ],
    "backArtwork": assets["mikroe-mikroe-1893-adc2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-4732-dac10",
    "sku": "MIKROE-4732",
    "name": "DAC 10 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/dac-10-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dac_10_click/DAC_10_click_v100_Schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dac10/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/dac_10_click_2d_3d_files.zip"
      }
    ],
    "description": "DAC 10 Click add-on module for dac applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "dac",
      "i2c",
      "dac53401"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dac-10-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4732",
      "price": "13.00",
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
    "contacts": assets["mikroe-mikroe-4732-dac10"]["contacts"],
    "artwork": assets["mikroe-mikroe-4732-dac10"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/dac_10_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4732-dac10"]["provenance"],
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
      ],
      [
        "cn1-vout",
        "cn1-vfb"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.500734580443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4732-dac10"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-1918-dac2",
    "sku": "MIKROE-1918",
    "name": "DAC 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/dac-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dac-2/DAC_2_click_v100_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dac2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/DAC_2_Click_2d_3d_files.zip"
      }
    ],
    "description": "DAC 2 Click add-on module for dac applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "dac",
      "gpio, spi",
      "ltc2601"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dac-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-1918",
      "price": "23.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 28.575,
      "outline": "M-12.573,14.288 -12.583,14.239 -12.61,14.198 -12.651,14.171 -12.7,14.161 -12.7,-13.652 -12.7,-14.287 12.7,-14.287 12.7,-13.652 12.7,11.748 10.16,14.288Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-1918-dac2"]["contacts"],
    "artwork": assets["mikroe-mikroe-1918-dac2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/DAC_2_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-1918-dac2"]["provenance"],
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
      -14.32524791662561,
      12.7,
      14.2875
    ],
    "backArtwork": assets["mikroe-mikroe-1918-dac2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -14.2875,
      12.7,
      14.2875
    ]
  },
  {
    "id": "mikroe-mikroe-5821-rmstodc2",
    "sku": "MIKROE-5821",
    "name": "RMS to DC 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v102",
    "source": "https://www.mikroe.com/rms-to-dc-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/rms_to_dc_2_click/rms_to_dc_2_click_v102_Schematic.PDF"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/rmstodc2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/rms_to_dc_2_click_2d_3d_files.zip"
      }
    ],
    "description": "RMS to DC 2 Click add-on module for measurements applications. Host interface: Analog, I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements",
      "analog, i2c",
      "ad8436"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/rms-to-dc-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5821",
      "price": "54.00",
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
    "contacts": assets["mikroe-mikroe-5821-rmstodc2"]["contacts"],
    "artwork": assets["mikroe-mikroe-5821-rmstodc2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v102 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/rms_to_dc_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5821-rmstodc2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "vext-gnd"
      ],
      [
        "p8",
        "p9",
        "input-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-5821-rmstodc2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-4222-vcpmonitor3",
    "sku": "MIKROE-4222",
    "name": "VCP Monitor 3 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/vcp-monitor-3-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/vcp_monitor_3_click/vcp-monitor-3-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/vcpmonitor3/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/vcp_monitor_3_click_2d_3d_files.zip"
      }
    ],
    "description": "VCP Monitor 3 Click add-on module for measurements applications. Host interface: GPIO, I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements",
      "gpio, i2c, spi",
      "ltc2947"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/vcp-monitor-3-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4222",
      "price": "32.00",
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
    "contacts": assets["mikroe-mikroe-4222-vcpmonitor3"]["contacts"],
    "artwork": assets["mikroe-mikroe-4222-vcpmonitor3"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/vcp_monitor_3_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4222-vcpmonitor3"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-4222-vcpmonitor3"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-6101-vcpmonitor6",
    "sku": "MIKROE-6101",
    "name": "VCP Monitor 6 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/vcp-monitor-6-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/vcp-monitor-6-click/vcp-monitor-6-click-schematic.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/vcpmonitor6/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/VCP_Monitor_6_Click_2d_3d_files.zip"
      }
    ],
    "description": "VCP Monitor 6 Click add-on module for measurements applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "measurements",
      "i2c",
      "ina780a"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/vcp-monitor-6-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-6101",
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
    "contacts": assets["mikroe-mikroe-6101-vcpmonitor6"]["contacts"],
    "artwork": assets["mikroe-mikroe-6101-vcpmonitor6"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/VCP_Monitor_6_Click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-6101-vcpmonitor6"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "load-gnd",
        "vin-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-6101-vcpmonitor6"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-3394-adc8",
    "sku": "MIKROE-3394",
    "name": "ADC 8 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v100",
    "source": "https://www.mikroe.com/adc-8-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/adc-8/ADC-8-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/adc8/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_8_Click_v100_CAD.zip"
      }
    ],
    "description": "ADC 8 Click add-on module for adc applications. Host interface: I2C. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc",
      "i2c",
      "ads1115"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/adc-8-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3394",
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
    "contacts": assets["mikroe-mikroe-3394-adc8"]["contacts"],
    "artwork": assets["mikroe-mikroe-3394-adc8"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v100 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/ADC_8_Click_v100_CAD.zip"
    },
    "provenance": assets["mikroe-mikroe-3394-adc8"]["provenance"],
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
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3394-adc8"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
  {
    "id": "mikroe-mikroe-5525-dac14",
    "sku": "MIKROE-5525",
    "name": "DAC 14 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v101",
    "source": "https://www.mikroe.com/dac-14-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dac_14_click/DAC_14_Click_Schematic_v101.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dac14/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/dac_14_click_2d_3d_files.zip"
      }
    ],
    "description": "DAC 14 Click add-on module for dac applications. Host interface: I2C, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "dac",
      "i2c, spi",
      "dac53202"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dac-14-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-5525",
      "price": "29.00",
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
    "contacts": assets["mikroe-mikroe-5525-dac14"]["contacts"],
    "artwork": assets["mikroe-mikroe-5525-dac14"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v101 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/dac_14_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-5525-dac14"]["provenance"],
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
    "backArtwork": assets["mikroe-mikroe-5525-dac14"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -28.575,
      12.7,
      28.575
    ]
  },
  {
    "id": "mikroe-mikroe-3886-dac7",
    "sku": "MIKROE-3886",
    "name": "DAC 7 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v2",
    "source": "https://www.mikroe.com/dac-7-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/dac_7_click/dac-7-click-schematic-v100.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/dac7/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/dac_7_click2D_and_3D_files.zip"
      }
    ],
    "description": "DAC 7 Click add-on module for dac applications. Host interface: SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "dac",
      "spi",
      "ad5624r-"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/dac-7-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-3886",
      "price": "31.00",
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
    "contacts": assets["mikroe-mikroe-3886-dac7"]["contacts"],
    "artwork": assets["mikroe-mikroe-3886-dac7"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v2 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/dac_7_click2D_and_3D_files.zip"
    },
    "provenance": assets["mikroe-mikroe-3886-dac7"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p8",
        "p9",
        "ch1-gnd"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-3886-dac7"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
