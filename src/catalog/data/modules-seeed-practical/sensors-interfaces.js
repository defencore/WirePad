import assets from "./sensors-interfaces-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-grove-pcf85063-rtc-102020083",
    "sku": "102020083",
    "name": "Seeed Grove - High Precision RTC (Real Time Clock)",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove_High_Precision_RTC/",
    "revision": "v1.0",
    "description": "PCF85063TP RTC module with clock output, interrupt and a CR1220 backup-battery holder. Module supply: 3.3 V or 5 V Grove supply.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip",
      "https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "pcf85063-rtc",
      "arduino"
    ],
    "provenance": assets["seeed-grove-pcf85063-rtc-102020083"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-pcf85063-rtc-102020083"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 11.22,
        "y": 0.05,
        "drill": 1.5
      },
      {
        "x": 3.82,
        "y": 0.05,
        "drill": 1.5
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-pcf85063-rtc-102020083"]["artwork"],
    "backArtwork": assets["seeed-grove-pcf85063-rtc-102020083"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "tp3-t"
      ],
      [
        "j1-2",
        "tp4-t"
      ],
      [
        "j1-3",
        "tp5-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp6-t",
        "bat1--"
      ],
      [
        "tp8-t",
        "bat1-plus"
      ]
    ]
  },
  {
    "id": "seeed-grove-ds1307-rtc-101020013",
    "sku": "101020013",
    "name": "Seeed Grove - DS1307 RTC (Real Time Clock) for Arduino",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-RTC/",
    "revision": "v1.1",
    "description": "DS1307 RTC module with a backup-battery holder. Use 5 V nominal: the DS1307 specifies 4.5–5.5 V for guaranteed operation, although the Seeed wiki advertises a wider module range. Module supply: 4.5–5.5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.1",
      "url": "https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-RTC/res/Real_Time_Clock.zip",
      "https://www.seeedstudio.com/Grove-RTC-DS1307.html",
      "https://www.analog.com/media/en/technical-documentation/data-sheets/DS1307.pdf"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-RTC-DS1307.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "ds1307-rtc",
      "arduino"
    ],
    "provenance": assets["seeed-grove-ds1307-rtc-101020013"]["provenance"],
    "board": {
      "width": 42.09,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M-18.145 10.0L-11.145 10.0L-11.045 9.895A2.0 2.0 0 0 1 -9.045 7.895L-8.945 7.895A2.05061 2.05061 0 0 1 -6.845 9.895L-6.745 10.0L8.843 10.0A0.1 0.1 0 0 1 8.943 10.1A2.0 2.0 0 0 0 10.943 12.1L11.143 12.1A2.0 2.0 0 0 0 13.143 10.1A0.1 0.1 0 0 1 13.243 10.0L20.243 10.0A0.8 0.8 0 0 0 21.043 9.2L21.043 2.2A0.1 0.1 0 0 0 20.943 2.1A2.0 2.0 0 0 1 18.943 0.1L18.943 0.0A2.05061 2.05061 0 0 1 20.943 -2.1A0.1 0.1 0 0 0 21.043 -2.2L21.043 -9.2A0.8 0.8 0 0 0 20.243 -10.0L13.243 -10.0A0.1 0.1 0 0 0 13.143 -10.1A2.0 2.0 0 0 1 11.143 -12.1L10.943 -12.1A2.0 2.0 0 0 1 8.943 -10.1A0.1 0.1 0 0 0 8.843 -10.0L-6.745 -10.0A0.097532 0.097532 0 0 1 -6.845 -9.905A2.0 2.0 0 0 0 -8.845 -7.905L-9.045 -7.905A2.0 2.0 0 0 0 -11.045 -9.905A0.097532 0.097532 0 0 1 -11.145 -10.0L-18.145 -10.0A0.8 0.8 0 0 0 -18.945 -9.2L-18.945 -2.205A0.1 0.1 0 0 0 -19.045 -2.105A2.0 2.0 0 0 1 -21.045 -0.105L-21.045 0.095A2.0 2.0 0 0 1 -19.045 2.095A0.1 0.1 0 0 0 -18.945 2.195L-18.945 9.2A0.8 0.8 0 0 0 -18.145 10.0Z"
    },
    "contacts": assets["seeed-grove-ds1307-rtc-101020013"]["contacts"],
    "holes": [
      {
        "x": 12.377,
        "y": -0.166,
        "drill": 1
      },
      {
        "x": 4.977,
        "y": -0.166,
        "drill": 1.3
      },
      {
        "x": 11.043,
        "y": 10,
        "drill": 2.2
      },
      {
        "x": 11.043,
        "y": -10,
        "drill": 2.2
      },
      {
        "x": -18.945,
        "y": -0.005,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-ds1307-rtc-101020013"]["artwork"],
    "backArtwork": assets["seeed-grove-ds1307-rtc-101020013"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT PROJECTION",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "u3-1"
      ]
    ]
  },
  {
    "id": "seeed-grove-mosfet-103020008",
    "sku": "103020008",
    "name": "Seeed Grove - MOSFET",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-MOSFET/",
    "revision": "source board",
    "description": "CJQ4435 P-channel high-side MOSFET load switch. The external load supply and Grove logic supply share ground; the switched positive output is not a dry relay contact. Module supply: 5 V Grove logic supply.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip",
      "https://www.seeedstudio.com/Grove-MOSFET-p-1594.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-MOSFET-p-1594.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "mosfet",
      "arduino"
    ],
    "provenance": assets["seeed-grove-mosfet-103020008"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-mosfet-103020008"]["contacts"],
    "holes": [
      {
        "x": 20,
        "y": 7.67,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 6.87,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 6.07,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 5.27,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": 4.47,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -7.57,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -6.77,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -5.97,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -5.17,
        "drill": 0.6
      },
      {
        "x": 20,
        "y": -4.37,
        "drill": 0.6
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-mosfet-103020008"]["artwork"],
    "backArtwork": assets["seeed-grove-mosfet-103020008"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT PROJECTION",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-4",
        "j1-2",
        "j3-1"
      ]
    ]
  },
  {
    "id": "seeed-grove-encoder-111020001",
    "sku": "111020001",
    "name": "Seeed Grove-Encoder",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Encoder/",
    "revision": "v0.9b",
    "description": "Mechanical incremental rotary encoder with two debounced quadrature contact signals and a Grove connector. Module supply: 4.5–5.5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v0.9b",
      "url": "https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip"
    },
    "references": [
      "https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip",
      "https://www.seeedstudio.com/Grove-Encoder-p-1352.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Encoder-p-1352.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "encoder",
      "arduino"
    ],
    "provenance": assets["seeed-grove-encoder-111020001"]["provenance"],
    "board": {
      "width": 24.2,
      "height": 20,
      "color": "#245c81",
      "outline": "M-10.0 -2.2A0.1 0.1 0 0 1 -10.1 -2.1A2.0 2.0 0 0 0 -12.1 -0.1L-12.1 0.1A2.0 2.0 0 0 0 -10.1 2.1A0.1 0.1 0 0 1 -10.0 2.2L-10.0 9.2A0.8 0.8 0 0 0 -9.2 10.0L-2.2 10.0A0.1 0.1 0 0 0 -2.1 9.9A2.0 2.0 0 0 1 -0.1 7.9L0.1 7.9A2.0 2.0 0 0 1 2.1 9.9A0.1 0.1 0 0 0 2.2 10.0L9.2 10.0A0.8 0.8 0 0 0 10.0 9.2L10.0 2.2A0.1 0.1 0 0 1 10.1 2.1A2.0 2.0 0 0 0 12.1 0.1L12.1 -0.1A2.0 2.0 0 0 0 10.1 -2.1A0.1 0.1 0 0 1 10.0 -2.2L10.0 -9.2A0.8 0.8 0 0 0 9.2 -10.0L2.2 -10.0A0.1 0.1 0 0 0 2.1 -9.9A2.0 2.0 0 0 1 0.1 -7.9L-0.1 -7.9A2.0 2.0 0 0 1 -2.1 -9.9A0.1 0.1 0 0 0 -2.2 -10.0L-9.2 -10.0A0.8 0.8 0 0 0 -10.0 -9.2L-10.0 -2.2Z"
    },
    "contacts": assets["seeed-grove-encoder-111020001"]["contacts"],
    "holes": [
      {
        "x": 10,
        "y": 0,
        "drill": 2.2
      },
      {
        "x": -10,
        "y": 0,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-encoder-111020001"]["artwork"],
    "backArtwork": assets["seeed-grove-encoder-111020001"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-4",
        "j2-ss1",
        "j2-ss2"
      ]
    ]
  },
  {
    "id": "seeed-grove-dual-button-111020103",
    "sku": "111020103",
    "name": "Seeed Grove Dual Button",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Dual-Button/",
    "revision": "v1.0 / 2019-09-16",
    "description": "Two independent momentary pushbuttons with passive switched signals on the two Grove signal contacts. Module supply: 3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2019-09-16",
      "url": "https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip"
    },
    "references": [
      "https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip",
      "https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "dual-button",
      "arduino"
    ],
    "provenance": assets["seeed-grove-dual-button-111020103"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-dual-button-111020103"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-dual-button-111020103"]["artwork"],
    "backArtwork": assets["seeed-grove-dual-button-111020103"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
      ],
      [
        "j1-2",
        "tp2-t"
      ],
      [
        "j1-3",
        "tp3-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-mech-keycap-111020049",
    "sku": "111020049",
    "name": "Seeed Grove-Mech keycap",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Mech_Keycap/",
    "revision": "source board",
    "description": "Mechanical key with an SK6805 addressable RGB LED. SIG1 is the passive button contact signal; SIG2 is the LED serial-data input. Module supply: 3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip",
      "https://www.seeedstudio.com/Grove-Mech-Keycap.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Mech-Keycap.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "mech-keycap",
      "arduino"
    ],
    "provenance": assets["seeed-grove-mech-keycap-111020049"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-mech-keycap-111020049"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 1.1303,
        "y": 0.0627,
        "drill": 3.9
      }
    ],
    "artwork": assets["seeed-grove-mech-keycap-111020049"]["artwork"],
    "backArtwork": assets["seeed-grove-mech-keycap-111020049"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "tp1-t",
        "j3-1"
      ],
      [
        "tp2-t",
        "j3-2"
      ],
      [
        "tp3-t",
        "j3-3"
      ],
      [
        "tp4-t",
        "j3-4",
        "j3-ss1",
        "j3-ss2"
      ]
    ]
  },
  {
    "id": "seeed-grove-infrared-emitter-101020026",
    "sku": "101020026",
    "name": "Seeed Grove - Infrared Emitter",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Infrared_Emitter/",
    "revision": "v1.1",
    "description": "Infrared LED transmitter module with an onboard transistor driver. The Grove TX contact is an input to the emitter circuit. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.1",
      "url": "https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip",
      "https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "infrared-emitter",
      "arduino"
    ],
    "provenance": assets["seeed-grove-infrared-emitter-101020026"]["provenance"],
    "board": {
      "width": 20,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M-10.0 -9.2A0.8 0.8 0 0 1 -9.2 -10.0L-2.2 -10.0A0.1 0.1 0 0 0 -2.1 -10.1A2.0 2.0 0 0 1 -0.1 -12.1L0.1 -12.1A2.0 2.0 0 0 1 2.1 -10.1A0.1 0.1 0 0 0 2.2 -10.0L9.2 -10.0A0.8 0.8 0 0 1 10.0 -9.2L10.0 -2.2A0.1 0.1 0 0 1 9.9 -2.1A2.002381 2.002381 0 0 0 7.9 0.0L7.9 0.1A2.0 2.0 0 0 0 9.9 2.1A0.110889 0.110889 0 0 1 10.0 2.2L10.0 9.2A0.8 0.8 0 0 1 9.2 10.0L2.2 10.0A0.111325 0.111325 0 0 0 2.1 10.1A2.0 2.0 0 0 1 0.1 12.1L-0.1 12.1A2.0 2.0 0 0 1 -2.1 10.1A0.1 0.1 0 0 0 -2.2 10.0L-9.2 10.0A0.8 0.8 0 0 1 -10.0 9.2L-10.0 2.2A0.1 0.1 0 0 1 -9.9 2.1A2.0 2.0 0 0 0 -7.9 0.1L-7.9 -0.1A2.0 2.0 0 0 0 -9.9 -2.1A0.1 0.1 0 0 1 -10.0 -2.2L-10.0 -9.2Z"
    },
    "contacts": assets["seeed-grove-infrared-emitter-101020026"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-infrared-emitter-101020026"]["artwork"],
    "backArtwork": assets["seeed-grove-infrared-emitter-101020026"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT PROJECTION",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": []
  },
  {
    "id": "seeed-grove-piezo-vibration-101020031",
    "sku": "101020031",
    "name": "Seeed Grove - Piezo Vibration Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Piezo_Vibration_Sensor/",
    "revision": "v1.1",
    "description": "PZT-film vibration interface with a probe connector, adjustable threshold and comparator output. Module supply: 5 V reference supply.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.1",
      "url": "https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip",
      "https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "piezo-vibration",
      "arduino"
    ],
    "provenance": assets["seeed-grove-piezo-vibration-101020031"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-piezo-vibration-101020031"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.157,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.443,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.3,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.543,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.257,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.4,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-piezo-vibration-101020031"]["artwork"],
    "backArtwork": assets["seeed-grove-piezo-vibration-101020031"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-1",
        "tp4-t"
      ],
      [
        "j2-3",
        "tp2-t"
      ],
      [
        "j2-4",
        "j1-2",
        "tp1-t"
      ],
      [
        "j1-1",
        "tp6-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-collision-101020005",
    "sku": "101020005",
    "name": "Seeed Grove - Collision Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Collision_Sensor/",
    "revision": "v2.0",
    "description": "Mechanical vibration/collision sensor with a transistor pulse-output stage. The unused Grove signal contact is routed to a configuration bridge pad. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v2.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Collision_Sensor/res/Grove-Collision_Sensor_eagle_file.zip",
      "https://www.seeedstudio.com/Grove-Collision-Sensor.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Collision-Sensor.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "collision",
      "arduino"
    ],
    "provenance": assets["seeed-grove-collision-101020005"]["provenance"],
    "board": {
      "width": 20,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M2.2 -10.0A0.1 0.1 0 0 1 2.1 -10.1A2.0 2.0 0 0 0 0.1 -12.1L-0.1 -12.1A2.0 2.0 0 0 0 -2.1 -10.1A0.1 0.1 0 0 1 -2.2 -10.0L-9.2 -10.0A0.8 0.8 0 0 0 -10.0 -9.2L-10.0 -2.2A0.1 0.1 0 0 0 -9.9 -2.1A2.0 2.0 0 0 1 -7.9 -0.1L-7.9 0.1A2.0 2.0 0 0 1 -9.9 2.1A0.1 0.1 0 0 0 -10.0 2.2L-10.0 9.2A0.8 0.8 0 0 0 -9.2 10.0L-2.2 10.0A0.1 0.1 0 0 1 -2.1 10.1A2.0 2.0 0 0 0 -0.1 12.1L0.1 12.1A2.0 2.0 0 0 0 2.1 10.1A0.1 0.1 0 0 1 2.2 10.0L9.2 10.0A0.8 0.8 0 0 0 10.0 9.2L10.0 2.2A0.1 0.1 0 0 0 9.9 2.1A2.0 2.0 0 0 1 7.9 0.1L7.9 -0.1A2.0 2.0 0 0 1 9.9 -2.1A0.1 0.1 0 0 0 10.0 -2.2L10.0 -9.2A0.8 0.8 0 0 0 9.2 -10.0L2.2 -10.0Z"
    },
    "contacts": assets["seeed-grove-collision-101020005"]["contacts"],
    "holes": [
      {
        "x": 0,
        "y": 10,
        "drill": 2.2
      },
      {
        "x": 0,
        "y": -10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-collision-101020005"]["artwork"],
    "backArtwork": assets["seeed-grove-collision-101020005"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT PROJECTION",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "p1-1",
        "j1-2"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2"
      ]
    ]
  },
  {
    "id": "seeed-grove-air-quality-101020078",
    "sku": "101020078",
    "name": "Seeed Grove - Air Quality Sensor v1.3",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Air_Quality_Sensor_v1.3/",
    "revision": "v1.3",
    "description": "MP503 air-quality sensor with a buffered analog output and an onboard sensor-heater power stage. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.3",
      "url": "https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip",
      "https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "air-quality",
      "arduino"
    ],
    "provenance": assets["seeed-grove-air-quality-101020078"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-air-quality-101020078"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.03,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -7.316,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.173,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 7.67,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.384,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.527,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": 10.177,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.823,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.177,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-air-quality-101020078"]["artwork"],
    "backArtwork": assets["seeed-grove-air-quality-101020078"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "tp4-t"
      ],
      [
        "j1-3",
        "tp1-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "tp2-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-mq2-101020055",
    "sku": "101020055",
    "name": "Seeed Grove - Gas Sensor(MQ2)",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/",
    "revision": "v1.4 carrier",
    "description": "MQ-2 combustible-gas/smoke module with analog output. The shared v1.4 source carrier supports the exact MQ-2 fitted variant; source sensor component pads are internal, not extra external connector terminals. Module supply: 4.9–5.1 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.4 carrier",
      "url": "https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ2/res/Gas_Sensor_Eagle_files.zip",
      "https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "mq2",
      "arduino"
    ],
    "provenance": assets["seeed-grove-mq2-101020055"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-mq2-101020055"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.792,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -8.078,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.935,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.908,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 4.622,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.765,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-mq2-101020055"]["artwork"],
    "backArtwork": assets["seeed-grove-mq2-101020055"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-1",
        "tp1-t"
      ],
      [
        "j2-3",
        "tp3-t"
      ],
      [
        "j2-4",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-mq5-101020056",
    "sku": "101020056",
    "name": "Seeed Grove - Gas Sensor(MQ5)",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/",
    "revision": "v1.4 carrier",
    "description": "MQ-5 gas module with analog output for its supported gas response. The shared v1.4 source carrier supports the exact MQ-5 fitted variant; source sensor component pads are internal. Module supply: 4.9–5.1 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.4 carrier",
      "url": "https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ5/res/Gas_Sensor_Eagle_files.zip",
      "https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Gas-Sensor-MQ5.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "mq5",
      "arduino"
    ],
    "provenance": assets["seeed-grove-mq5-101020056"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-mq5-101020056"]["contacts"],
    "holes": [
      {
        "x": 20.0295,
        "y": -5.792,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -8.078,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": -6.935,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 6.908,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 4.622,
        "drill": 0.8
      },
      {
        "x": 20.0295,
        "y": 5.765,
        "drill": 0.8
      },
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-mq5-101020056"]["artwork"],
    "backArtwork": assets["seeed-grove-mq5-101020056"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-1",
        "tp1-t"
      ],
      [
        "j2-3",
        "tp3-t"
      ],
      [
        "j2-4",
        "tp4-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-high-temperature-111020002",
    "sku": "111020002",
    "name": "Seeed Grove - High Temperature Sensor",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-High_Temperature_Sensor/",
    "revision": "v1.0",
    "description": "Thermocouple interface with separate amplified probe and ambient compensation outputs on A0 and A1, plus a 1.5 V buffered reference test pad. Module supply: 3.3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-High_Temperature_Sensor/res/Grove%20-%20High%20Temperature%20Sensor%20v1.0.zip",
      "https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-High-Temperature-Sensor.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "high-temperature",
      "arduino"
    ],
    "provenance": assets["seeed-grove-high-temperature-111020002"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-high-temperature-111020002"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-high-temperature-111020002"]["artwork"],
    "backArtwork": assets["seeed-grove-high-temperature-111020002"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j2-1",
        "a0-t"
      ],
      [
        "j2-2",
        "a1-t",
        "tp4-t"
      ],
      [
        "j2-3",
        "vcc-t"
      ],
      [
        "j2-4",
        "j2-ss1",
        "j2-ss2",
        "j1-2",
        "tp-t",
        "tp2-t"
      ],
      [
        "j1-1",
        "tp3-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-max31850k-101020555",
    "sku": "101020555",
    "name": "Seeed Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K/",
    "revision": "v1.0",
    "description": "MAX31850K thermocouple-to-1-Wire interface with a thermocouple socket and three address-configuration straps. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip",
      "https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-MAX31850K.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-MAX31850K.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "max31850k",
      "arduino"
    ],
    "provenance": assets["seeed-grove-max31850k-101020555"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-max31850k-101020555"]["contacts"],
    "holes": [
      {
        "x": -10.1,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": -10.1,
        "y": -9.95,
        "drill": 2.2
      },
      {
        "x": 19.9,
        "y": 0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-max31850k-101020555"]["artwork"],
    "backArtwork": assets["seeed-grove-max31850k-101020555"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j5-1",
        "gnd4-t"
      ],
      [
        "j5-3",
        "sda4-t"
      ],
      [
        "j5-4",
        "j5-ss1",
        "j5-ss2",
        "scl-t",
        "jp1-11",
        "jp2-11",
        "jp3-11",
        "jp4-11"
      ],
      [
        "jp1-00",
        "jp2-00",
        "jp3-00",
        "jp4-00"
      ]
    ]
  },
];
