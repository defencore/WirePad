import assets from "./audio-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "seeed-grove-passive-buzzer-107020109",
    "sku": "107020109",
    "name": "Seeed Grove - Passive Buzzer",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Passive-Buzzer/",
    "revision": "v1.0 / 2019-09-25",
    "description": "Passive buzzer driver module; feed a tone/PWM signal to SIG to create sound. Module supply: 3–5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2019-09-25",
      "url": "https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip"
    },
    "references": [
      "https://files.seeedstudio.com/products/107020109/document/Grove_Passive_Buzzer_eagle.zip",
      "https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "passive-buzzer",
      "arduino"
    ],
    "provenance": assets["seeed-grove-passive-buzzer-107020109"]["provenance"],
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95Z"
    },
    "contacts": assets["seeed-grove-passive-buzzer-107020109"]["contacts"],
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
      }
    ],
    "artwork": assets["seeed-grove-passive-buzzer-107020109"]["artwork"],
    "backArtwork": assets["seeed-grove-passive-buzzer-107020109"]["backArtwork"],
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
    "id": "seeed-grove-speaker-107020001",
    "sku": "107020001",
    "name": "Seeed Grove - Speaker",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Speaker/",
    "revision": "v1.0",
    "description": "LM386 audio amplifier module with a two-contact speaker connection and an onboard volume control. Module supply: 4.0–5.5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip",
      "https://www.seeedstudio.com/Grove-Speaker-p-1445.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Speaker-p-1445.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "speaker",
      "arduino"
    ],
    "provenance": assets["seeed-grove-speaker-107020001"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M19.3 9.95A0.8 0.8 0 0 0 20.1 9.15L20.1 2.65A0.3 0.3 0 0 0 19.8 2.35A2.418677 2.418677 0 0 1 19.8 -2.45A0.3 0.3 0 0 0 20.1 -2.75L20.1 -9.25A0.8 0.8 0 0 0 19.3 -10.05L12.2 -10.05A0.2 0.2 0 0 1 12.0 -10.25A1.910497 1.910497 0 0 0 8.2 -10.25A0.2 0.2 0 0 1 8.0 -10.05L-7.2 -10.05A0.3 0.3 0 0 0 -7.5 -9.75A2.418677 2.418677 0 0 1 -12.3 -9.75A0.3 0.3 0 0 0 -12.6 -10.05L-19.1 -10.05A0.8 0.8 0 0 0 -19.9 -9.25L-19.9 -2.15A0.2 0.2 0 0 1 -20.1 -1.95A1.910497 1.910497 0 0 0 -20.1 1.85A0.2 0.2 0 0 1 -19.9 2.05L-19.9 9.15A0.8 0.8 0 0 0 -19.1 9.95L-12.6 9.95A0.3 0.3 0 0 0 -12.3 9.65A2.418677 2.418677 0 0 1 -7.5 9.65A0.3 0.3 0 0 0 -7.2 9.95L7.9 9.95A0.3 0.3 0 0 1 8.2 10.25A1.923538 1.923538 0 0 0 12.0 10.25A0.3 0.3 0 0 1 12.3 9.95L19.3 9.95Z"
    },
    "contacts": assets["seeed-grove-speaker-107020001"]["contacts"],
    "holes": [
      {
        "x": 3.5925,
        "y": -7.9875,
        "drill": 1.778
      },
      {
        "x": 10.1,
        "y": -10.05,
        "drill": 2.2
      },
      {
        "x": 10.1,
        "y": 9.95,
        "drill": 2.2
      },
      {
        "x": -19.9,
        "y": -0.05,
        "drill": 2.2
      }
    ],
    "artwork": assets["seeed-grove-speaker-107020001"]["artwork"],
    "backArtwork": assets["seeed-grove-speaker-107020001"]["backArtwork"],
    "viewLabel": "COMPONENT-SIDE CAD CONTACT PROJECTION",
    "footprintMode": "source",
    "footprintNote": "Source electrical contact centers, drills and selected copper. This off-board source contact reference projects contacts into a carrier plane; verify the fitted board, original pad side, connector mechanics and load isolation before production.",
    "internalConnections": [
      [
        "j1-4",
        "j2-2"
      ]
    ]
  },
  {
    "id": "seeed-grove-speaker-plus-101020853",
    "sku": "101020853",
    "name": "Seeed Grove - Speaker Plus",
    "manufacturer": "Seeed Studio",
    "category": "Modules",
    "source": "https://wiki.seeedstudio.com/Grove-Speaker-Plus/",
    "revision": "v1.0 / 2019-12-25",
    "description": "Boosted audio amplifier driver board for Grove Speaker Plus. The attached loudspeaker is represented through its source connector; the native asset describes the driver carrier only. Module supply: 5 V reference supply.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 / 2019-12-25",
      "url": "https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip",
      "https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "speaker-plus",
      "arduino"
    ],
    "provenance": assets["seeed-grove-speaker-plus-101020853"]["provenance"],
    "board": {
      "width": 40.2,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-19.3 -9.95A0.8 0.8 0 0 0 -20.1 -9.15L-20.1 -2.65A0.3 0.3 0 0 0 -19.8 -2.35A2.418677 2.418677 0 0 1 -19.8 2.45A0.3 0.3 0 0 0 -20.1 2.75L-20.1 9.25A0.8 0.8 0 0 0 -19.3 10.05L-12.2 10.05A0.2 0.2 0 0 1 -12.0 10.25A1.910497 1.910497 0 0 0 -8.2 10.25A0.2 0.2 0 0 1 -8.0 10.05L7.2 10.05A0.3 0.3 0 0 0 7.5 9.75A2.418677 2.418677 0 0 1 12.3 9.75A0.3 0.3 0 0 0 12.6 10.05L19.1 10.05A0.8 0.8 0 0 0 19.9 9.25L19.9 2.15A0.2 0.2 0 0 1 20.1 1.95A1.910497 1.910497 0 0 0 20.1 -1.85A0.2 0.2 0 0 1 19.9 -2.05L19.9 -9.15A0.8 0.8 0 0 0 19.1 -9.95L12.6 -9.95A0.3 0.3 0 0 0 12.3 -9.65A2.418677 2.418677 0 0 1 7.5 -9.65A0.3 0.3 0 0 0 7.2 -9.95L-7.9 -9.95A0.3 0.3 0 0 1 -8.2 -10.25A1.923538 1.923538 0 0 0 -12.0 -10.25A0.3 0.3 0 0 1 -12.3 -9.95L-19.3 -9.95Z"
    },
    "contacts": assets["seeed-grove-speaker-plus-101020853"]["contacts"],
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
    "artwork": assets["seeed-grove-speaker-plus-101020853"]["artwork"],
    "backArtwork": assets["seeed-grove-speaker-plus-101020853"]["backArtwork"],
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
        "j3--",
        "j3-4",
        "j3-3",
        "tp4-t"
      ]
    ]
  },
];
