import assets from "./motors-relays-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-grove-latching-relay-103020010",
    "sku": "103020010",
    "name": "Seeed Grove - 2-Coil Latching Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-2-Coil_Latching_Relay/",
    "revision": "v1",
    "description": "Two-coil latching relay module with two isolated changeover contacts and an exposed control selection strap. Module supply: 4.7–5.3 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1",
      "url": "https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-2-Coil_Latching_Relay/res/Grove-2-Coil_Latching_Relay_Eagle_File.zip",
      "https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "latching-relay",
      "arduino"
    ],
    "provenance": assets["seeed-grove-latching-relay-103020010"]["provenance"],
    "board": {
      "width": 44.2,
      "height": 44.2,
      "color": "#245c81",
      "outline": "M-20.0 -19.2A0.8 0.8 0 0 1 -19.2 -20.0L-12.2 -20.0A0.1 0.1 0 0 1 -12.1 -19.9A2.0 2.0 0 0 0 -10.1 -17.9L-9.9 -17.9A2.0 2.0 0 0 0 -7.9 -19.9A0.1 0.1 0 0 1 -7.8 -20.0L7.8 -20.0A0.1 0.1 0 0 0 7.9 -20.1A2.0 2.0 0 0 1 9.9 -22.1L10.1 -22.1A2.0 2.0 0 0 1 12.1 -20.1A0.1 0.1 0 0 0 12.2 -20.0L19.2 -20.0A0.8 0.8 0 0 1 20.0 -19.2L20.0 -12.2A0.1 0.1 0 0 1 19.9 -12.1A2.0 2.0 0 0 0 17.9 -10.1L17.9 -9.9A2.0 2.0 0 0 0 19.9 -7.9A0.1 0.1 0 0 1 20.0 -7.8L20.0 7.8A0.1 0.1 0 0 0 20.1 7.9A2.0 2.0 0 0 1 22.1 9.9L22.1 10.1A2.0 2.0 0 0 1 20.1 12.1A0.1 0.1 0 0 0 20.0 12.2L20.0 19.2A0.8 0.8 0 0 1 19.2 20.0L12.2 20.0A0.1 0.1 0 0 1 12.1 19.9A2.0 2.0 0 0 0 10.1 17.9L9.9 17.9A2.0 2.0 0 0 0 7.9 19.9A0.1 0.1 0 0 1 7.8 20.0L-7.8 20.0A0.1 0.1 0 0 0 -7.9 20.1A2.0 2.0 0 0 1 -9.9 22.1L-10.1 22.1A2.0 2.0 0 0 1 -12.1 20.1A0.1 0.1 0 0 0 -12.2 20.0L-19.2 20.0A0.8 0.8 0 0 1 -20.0 19.2L-20.0 12.2A0.1 0.1 0 0 1 -19.9 12.1A2.0 2.0 0 0 0 -17.9 10.1L-17.9 9.9A2.0 2.0 0 0 0 -19.9 7.9A0.1 0.1 0 0 1 -20.0 7.8L-20.0 -7.8A0.1 0.1 0 0 0 -20.1 -7.9A2.0 2.0 0 0 1 -22.1 -9.9L-22.1 -10.1A2.0 2.0 0 0 1 -20.1 -12.1A0.1 0.1 0 0 0 -20.0 -12.2L-20.0 -19.2Z"
    },
    "contacts": assets["seeed-grove-latching-relay-103020010"]["contacts"],
    "holes": [
      {
        "x": 10,
        "y": -20,
        "drill": 2.2
      },
      {
        "x": -20,
        "y": -10,
        "drill": 2.2
      },
      {
        "x": -10,
        "y": 20,
        "drill": 2.2
      },
      {
        "x": 20,
        "y": 10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-latching-relay-103020010"]["artwork"],
    "backArtwork": assets["seeed-grove-latching-relay-103020010"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "p1-mm"
      ]
    ]
  },
  {
    "id": "seeed-grove-relay-103020005",
    "sku": "103020005",
    "name": "Seeed Grove - Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Relay/",
    "revision": "v1.2",
    "description": "Relay module with a two-contact COM/NO load terminal. The otherwise unused normally-closed contact is also available as a rear test pad in the cited v1.2 CAD. Module supply: 3.3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.2",
      "url": "https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip",
      "https://www.seeedstudio.com/Grove-Relay-p-769.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Relay-p-769.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "relay",
      "arduino"
    ],
    "provenance": assets["seeed-grove-relay-103020005"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-relay-103020005"]["contacts"],
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
    "artwork": assets["seeed-grove-relay-103020005"]["artwork"],
    "backArtwork": assets["seeed-grove-relay-103020005"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "no-t"
      ],
      [
        "j1-2",
        "com-t"
      ],
      [
        "j2-1",
        "sig-t"
      ],
      [
        "j2-3",
        "vcc-t"
      ],
      [
        "j2-4",
        "gnd-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-m281-relay-101020603",
    "sku": "101020603",
    "name": "Seeed Grove - Optocoupler Relay (M281)",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Optocoupler_Relay-M281/",
    "revision": "v1.0",
    "description": "M281 photorelay module with an isolated two-terminal load switch. The load terminals are electrically separate from Grove logic ground. Module supply: 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip",
      "https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "m281-relay",
      "arduino"
    ],
    "provenance": assets["seeed-grove-m281-relay-101020603"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-m281-relay-101020603"]["contacts"],
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
    "artwork": assets["seeed-grove-m281-relay-101020603"]["artwork"],
    "backArtwork": assets["seeed-grove-m281-relay-101020603"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "tp1-t"
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
    "id": "seeed-grove-spdt-relay-2ch-103020132",
    "sku": "103020132",
    "name": "Seeed Grove - 2-Channel SPDT Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-2-Channel_SPDT_Relay/",
    "revision": "source board",
    "description": "Two-channel relay module with independent normally-closed, common and normally-open load terminals for each channel. Module supply: 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/res/Grove-2-Channel_SPDT_Relay.zip",
      "https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay-p-3118.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "spdt-relay-2ch",
      "arduino"
    ],
    "provenance": assets["seeed-grove-spdt-relay-2ch-103020132"]["provenance"],
    "board": {
      "width": 44.2,
      "height": 44.2,
      "color": "#245c81",
      "outline": "M-20.0 -19.2A0.8 0.8 0 0 1 -19.2 -20.0L-12.2 -20.0A0.1 0.1 0 0 1 -12.1 -19.9A2.0 2.0 0 0 0 -10.1 -17.9L-9.9 -17.9A2.0 2.0 0 0 0 -7.9 -19.9A0.1 0.1 0 0 1 -7.8 -20.0L7.8 -20.0A0.1 0.1 0 0 0 7.9 -20.1A2.0 2.0 0 0 1 9.9 -22.1L10.1 -22.1A2.0 2.0 0 0 1 12.1 -20.1A0.1 0.1 0 0 0 12.2 -20.0L19.2 -20.0A0.8 0.8 0 0 1 20.0 -19.2L20.0 -12.2A0.1 0.1 0 0 1 19.9 -12.1A2.0 2.0 0 0 0 17.9 -10.1L17.9 -9.9A2.0 2.0 0 0 0 19.9 -7.9A0.1 0.1 0 0 1 20.0 -7.8L20.0 7.8A0.1 0.1 0 0 0 20.1 7.9A2.0 2.0 0 0 1 22.1 9.9L22.1 10.1A2.0 2.0 0 0 1 20.1 12.1A0.1 0.1 0 0 0 20.0 12.2L20.0 19.2A0.8 0.8 0 0 1 19.2 20.0L12.2 20.0A0.1 0.1 0 0 1 12.1 19.9A2.0 2.0 0 0 0 10.1 17.9L9.9 17.9A2.0 2.0 0 0 0 7.9 19.9A0.1 0.1 0 0 1 7.8 20.0L-7.8 20.0A0.1 0.1 0 0 0 -7.9 20.1A2.0 2.0 0 0 1 -9.9 22.1L-10.1 22.1A2.0 2.0 0 0 1 -12.1 20.1A0.1 0.1 0 0 0 -12.2 20.0L-19.2 20.0A0.8 0.8 0 0 1 -20.0 19.2L-20.0 12.2A0.1 0.1 0 0 1 -19.9 12.1A2.0 2.0 0 0 0 -17.9 10.1L-17.9 9.9A2.0 2.0 0 0 0 -19.9 7.9A0.1 0.1 0 0 1 -20.0 7.8L-20.0 -7.8A0.1 0.1 0 0 0 -20.1 -7.9A2.0 2.0 0 0 1 -22.1 -9.9L-22.1 -10.1A2.0 2.0 0 0 1 -20.1 -12.1A0.1 0.1 0 0 0 -20.0 -12.2L-20.0 -19.2Z"
    },
    "contacts": assets["seeed-grove-spdt-relay-2ch-103020132"]["contacts"],
    "holes": [
      {
        "x": 10,
        "y": -20,
        "drill": 2.2
      },
      {
        "x": -20,
        "y": -10,
        "drill": 2.2
      },
      {
        "x": -10,
        "y": 20,
        "drill": 2.2
      },
      {
        "x": 20,
        "y": 10,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-spdt-relay-2ch-103020132"]["artwork"],
    "backArtwork": assets["seeed-grove-spdt-relay-2ch-103020132"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-1",
        "gnd-t"
      ],
      [
        "j1-2",
        "gnd1-t"
      ],
      [
        "j1-3",
        "gnd2-t"
      ],
      [
        "j1-4",
        "gnd3-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-spdt-relay-4ch-103020133",
    "sku": "103020133",
    "name": "Seeed Grove - 4-Channel SPDT Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-4-Channel_SPDT_Relay/",
    "revision": "source board",
    "description": "I2C-controlled four-channel SPDT relay module with isolated NC/COM/NO terminal groups and an exposed MCU service header. Module supply: 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-4-Channel_SPDT_Relay/res/Grove-4-Channel_SPDT_Relay.zip",
      "https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-4-Channel-SPDT-Relay-p-3119.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "spdt-relay-4ch",
      "arduino"
    ],
    "provenance": assets["seeed-grove-spdt-relay-4ch-103020133"]["provenance"],
    "board": {
      "width": 120,
      "height": 60,
      "color": "#245c81",
      "outline": "M-57.0 -30.0A3.0 3.0 0 0 0 -60.0 -27.0L-60.0 27.0A3.0 3.0 0 0 0 -57.0 30.0L57.0 30.0A3.0 3.0 0 0 0 60.0 27.0L60.0 -27.0A3.0 3.0 0 0 0 57.0 -30.0L-57.0 -30.0Z"
    },
    "contacts": assets["seeed-grove-spdt-relay-4ch-103020133"]["contacts"],
    "holes": [],
    "artwork": assets["seeed-grove-spdt-relay-4ch-103020133"]["artwork"],
    "backArtwork": assets["seeed-grove-spdt-relay-4ch-103020133"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j13-1",
        "gnd16-t"
      ],
      [
        "j13-2",
        "vcc1-t"
      ],
      [
        "j13-3",
        "sda4-t"
      ],
      [
        "j13-4",
        "j13-ss1",
        "j13-ss2",
        "scl-t",
        "j10-5"
      ],
      [
        "sda3-t",
        "j10-4"
      ]
    ]
  },
  {
    "id": "seeed-grove-ssr-4ch-103020135",
    "sku": "103020135",
    "name": "Seeed Grove - 4-Channel Solid State Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay/",
    "revision": "source board",
    "description": "I2C-controlled four-channel solid-state relay module. Each isolated LOAD pair is an AC load switch, not a DC dry contact. Module supply: 4–6 V; 5 V nominal.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-4-Channel_Solid_State_Relay/res/Grove%20-%204-Channel%20Solid%20State%20Relay.zip",
      "https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-4-Channel-Solid-State-Relay.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "ssr-4ch",
      "arduino"
    ],
    "provenance": assets["seeed-grove-ssr-4ch-103020135"]["provenance"],
    "board": {
      "width": 64.2,
      "height": 44.2,
      "color": "#245c81",
      "outline": "M30.0 -19.2A0.8 0.8 0 0 0 29.2 -20.0L22.2 -20.0A0.1 0.1 0 0 1 22.1 -20.1A2.0 2.0 0 0 0 20.1 -22.1L19.9 -22.1A2.0 2.0 0 0 0 17.9 -20.1A0.111325 0.111325 0 0 1 17.8 -20.0L2.2 -20.0A0.1 0.1 0 0 0 2.1 -19.9A2.0 2.0 0 0 1 0.1 -17.9L-0.1 -17.9A2.0 2.0 0 0 1 -2.1 -19.9A0.1 0.1 0 0 0 -2.2 -20.0L-17.8 -20.0A0.1 0.1 0 0 1 -17.9 -20.1A2.0 2.0 0 0 0 -19.9 -22.1L-20.1 -22.1A2.0 2.0 0 0 0 -22.1 -20.1A0.111325 0.111325 0 0 1 -22.2 -20.0L-29.2 -20.0A0.8 0.8 0 0 0 -30.0 -19.2L-30.0 -12.2A0.110889 0.110889 0 0 0 -29.9 -12.1A2.0 2.0 0 0 1 -27.9 -10.1L-27.9 -10.0A2.002381 2.002381 0 0 1 -29.9 -7.9A0.1 0.1 0 0 0 -30.0 -7.8L-30.0 7.8A0.1 0.1 0 0 1 -30.1 7.9A2.0 2.0 0 0 0 -32.1 9.9L-32.1 10.1A2.0 2.0 0 0 0 -30.1 12.1A0.111325 0.111325 0 0 1 -30.0 12.2L-30.0 19.2A0.8 0.8 0 0 0 -29.2 20.0L-22.2 20.0A0.110889 0.110889 0 0 0 -22.1 19.9A2.0 2.0 0 0 1 -20.1 17.9L-20.0 17.9A2.002381 2.002381 0 0 1 -17.9 19.9A0.1 0.1 0 0 0 -17.8 20.0L-2.2 20.0A0.1 0.1 0 0 1 -2.1 20.1A2.0 2.0 0 0 0 -0.1 22.1L0.1 22.1A2.0 2.0 0 0 0 2.1 20.1A0.1 0.1 0 0 1 2.2 20.0L17.8 20.0A0.110889 0.110889 0 0 0 17.9 19.9A2.0 2.0 0 0 1 19.9 17.9L20.0 17.9A2.002381 2.002381 0 0 1 22.1 19.9A0.1 0.1 0 0 0 22.2 20.0L29.2 20.0A0.8 0.8 0 0 0 30.0 19.2L30.0 12.2A0.1 0.1 0 0 1 30.1 12.1A2.0 2.0 0 0 0 32.1 10.1L32.1 9.9A2.0 2.0 0 0 0 30.1 7.9A0.1 0.1 0 0 1 30.0 7.8L30.0 -7.8A0.1 0.1 0 0 0 29.9 -7.9A2.0 2.0 0 0 1 27.9 -9.9L27.9 -10.1A2.0 2.0 0 0 1 29.9 -12.1A0.1 0.1 0 0 0 30.0 -12.2L30.0 -19.2Z"
    },
    "contacts": assets["seeed-grove-ssr-4ch-103020135"]["contacts"],
    "holes": [
      {
        "x": 0.017,
        "y": 20.015,
        "drill": 2.2
      },
      {
        "x": 30.005,
        "y": 10.02,
        "drill": 2.2
      },
      {
        "x": -29.985,
        "y": 9.983,
        "drill": 2.2
      },
      {
        "x": -19.98,
        "y": -20.005,
        "drill": 2.2
      },
      {
        "x": 19.983,
        "y": -20.015,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-ssr-4ch-103020135"]["artwork"],
    "backArtwork": assets["seeed-grove-ssr-4ch-103020135"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j5-1",
        "gnd4-t"
      ],
      [
        "j5-2",
        "vcc1-t"
      ],
      [
        "j5-3",
        "sda4-t"
      ],
      [
        "j5-4",
        "scl-t",
        "j7-5"
      ],
      [
        "sda3-t",
        "j7-4"
      ]
    ]
  },
  {
    "id": "seeed-grove-ssr-8ch-103020136",
    "sku": "103020136",
    "name": "Seeed Grove - 8-Channel Solid State Relay",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay/",
    "revision": "source board",
    "description": "I2C-controlled eight-channel solid-state relay module. Each isolated LOAD pair is an AC load switch, not a DC dry contact. Module supply: 4–6 V; 5 V nominal.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — source board",
      "url": "https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-8-Channel_Solid_State_Relay/res/Grove%20-%208-Channel%20Solid%20State%20Relay.zip",
      "https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-8-Channel-Solid-State-Relay-p-3131.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "ssr-8ch",
      "arduino"
    ],
    "provenance": assets["seeed-grove-ssr-8ch-103020136"]["provenance"],
    "board": {
      "width": 120,
      "height": 60,
      "color": "#245c81",
      "outline": "M-57.0 -30.0A3.0 3.0 0 0 0 -60.0 -27.0L-60.0 27.0A3.0 3.0 0 0 0 -57.0 30.0L57.0 30.0A3.0 3.0 0 0 0 60.0 27.0L60.0 -27.0A3.0 3.0 0 0 0 57.0 -30.0L-57.0 -30.0Z"
    },
    "contacts": assets["seeed-grove-ssr-8ch-103020136"]["contacts"],
    "holes": [],
    "artwork": assets["seeed-grove-ssr-8ch-103020136"]["artwork"],
    "backArtwork": assets["seeed-grove-ssr-8ch-103020136"]["backArtwork"],
    "viewLabel": "CAD CONTACT PROJECTION / MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j5-1",
        "gnd4-t"
      ],
      [
        "j5-2",
        "vcc1-t"
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
        "j10-5"
      ],
      [
        "sda3-t",
        "j10-4"
      ]
    ]
  },
];
