// Manufacturer EAGLE geometry with reviewed external contacts. Sources are retained per entry.
export default [
  {
    "id": "seeed-grove-aht20-101990644",
    "sku": "101990644",
    "name": "Seeed Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/",
    "revision": "v1.0",
    "description": "AHT20 temperature and humidity module, with the main Grove socket and both spare two-pin headers. Supply 2.0–5.5 V; I2C address 0x38.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/GROVE-ATH-EAGLE-FILE.zip",
      "https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "aht20",
      "arduino"
    ],
    "provenance": {
      "review": "Manufacturer EAGLE connector nets, schematic roles and wiki supply range reviewed; source-CAD revision may differ from current warehouse stock.",
      "format": "EAGLE XML",
      "boardFile": "ATH20.brd",
      "boardSha256": "bf78e11fec0dcb507e8d090aaf327ed55eb5e46e5131288347897009c8a8fc61",
      "sourceBounds": [
        11.348699999999997,
        2.3857,
        31.3487,
        22.8857
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Source schematic and wiki override passive/IO library defaults for supply and external bus roles.",
        "Decorative logo package bboxes omitted; component silhouettes follow their source package envelopes."
      ]
    },
    "board": {
      "width": 20.0,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95L2.2 -9.95A0.3 0.3 0 0 1 1.9 -10.25A1.923538 1.923538 0 0 0 -1.9 -10.25A0.3 0.3 0 0 1 -2.2 -9.95L-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe the module supply and bus pull-up limits.",
        "x": -6.3627,
        "y": 3.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; observe the module supply and bus pull-up limits.",
        "x": -6.3627,
        "y": 1.0627,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "2.0–5.5 V module supply input. Source net VCC.",
        "x": -6.3627,
        "y": -0.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -6.3627,
        "y": -2.9373,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.9
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe the module supply and bus pull-up limits.",
        "x": 8.4963,
        "y": 7.5557,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.27
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; observe the module supply and bus pull-up limits.",
        "x": 8.4963,
        "y": 5.0157,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.27
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "2.0–5.5 V module supply input. Source net VCC.",
        "x": 8.4963,
        "y": -4.8903,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 1.27
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 8.4963,
        "y": -7.4303,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.27
      }
    ],
    "holes": [
      {
        "x": -0.0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0.0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-8.5627\" y=\"-4.9373\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.2263\" y=\"3.7457\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.2263\" y=\"-8.7003\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.0593\" y=\"-1.4373\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"-3.4933\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"2.6027\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"1.0787\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"-1.9693\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"-0.4453\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect data-connector=\"J1\" x=\"-8.5627\" y=\"-4.9373\" width=\"5.000000000000002\" height=\"10.0\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/><rect data-connector=\"J2\" x=\"7.2263\" y=\"3.7457\" width=\"2.539999999999999\" height=\"5.080000000000001\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/><rect data-connector=\"J3\" x=\"7.2263\" y=\"-8.7003\" width=\"2.539999999999999\" height=\"5.079999999999998\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/><rect x=\"3.0593000000000004\" y=\"-1.4373\" width=\"3\" height=\"3\" rx=\".25\" fill=\"#c6c6bc\" stroke=\"#e9e6d4\" stroke-width=\".13\"/><path d=\"M3.6593000000000004 -0.7373000000000001h1.8m-1.8 .55h1.8m-1.8 .55h1.8m-1.8 .55h1.8\" stroke=\"#6e7b79\" stroke-width=\".2\"/>",
    "backArtwork": "",
    "viewLabel": "COMPONENT-SIDE CONTACT VIEW",
    "footprintMode": "source",
    "footprintNote": "Exact electrical contact centers, drills and selected lands from the cited manufacturer EAGLE board. This is an off-board source contact reference; connector housing, electrode copper, mounting holes and retention requirements must be checked separately before a production carrier is designed.",
    "internalConnections": [
      [
        "j1-1",
        "j2-1"
      ],
      [
        "j1-2",
        "j2-2"
      ],
      [
        "j1-3",
        "j3-1"
      ],
      [
        "j1-4",
        "j3-2"
      ]
    ]
  },
  {
    "id": "seeed-grove-digital-light-101020030",
    "sku": "101020030",
    "name": "Seeed Grove - Digital Light Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Digital_Light_Sensor/",
    "revision": "v1.0 source CAD",
    "description": "TSL2561 digital light module with level-shifted I2C. Supply 3.3–5.1 V; fixed I2C address 0x29. This drawing follows the supplied v1.0 CAD, while the wiki version table also lists v1.1.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0 source CAD",
      "url": "https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/res/Grove-Digital%20%20light%20%20sensor%20v1.0%20eagle%20file.zip",
      "https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "digital-light",
      "arduino"
    ],
    "provenance": {
      "review": "Manufacturer EAGLE connector nets, schematic roles and wiki supply range reviewed; source-CAD revision may differ from current warehouse stock.",
      "format": "EAGLE XML",
      "boardFile": "Digital light sensor v1.0.brd",
      "boardSha256": "62226ba3528c76a2e1005897827a28910ae0d471319815f9c9d509b04c814e9d",
      "sourceBounds": [
        -10.0,
        -12.1,
        10.0,
        12.1
      ],
      "selectedConnectors": [
        "J1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Source schematic and wiki override passive/IO library defaults for supply and external bus roles.",
        "Decorative logo package bboxes omitted; component silhouettes follow their source package envelopes."
      ]
    },
    "board": {
      "width": 20.0,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M2.2 -10.0A0.1 0.1 0 0 1 2.1 -10.1A2.0 2.0 0 0 0 0.1 -12.1L-0.1 -12.1A2.0 2.0 0 0 0 -2.1 -10.1A0.1 0.1 0 0 1 -2.2 -10.0L-9.2 -10.0A0.8 0.8 0 0 0 -10.0 -9.2L-10.0 -2.2A0.1 0.1 0 0 0 -9.9 -2.1A2.0 2.0 0 0 1 -7.9 -0.1L-7.9 0.1A2.0 2.0 0 0 1 -9.9 2.1A0.1 0.1 0 0 0 -10.0 2.2L-10.0 9.2A0.8 0.8 0 0 0 -9.2 10.0L-2.2 10.0A0.1 0.1 0 0 1 -2.1 10.1A2.0 2.0 0 0 0 -0.1 12.1L0.1 12.1A2.0 2.0 0 0 0 2.1 10.1A0.1 0.1 0 0 1 2.2 10.0L9.2 10.0A0.8 0.8 0 0 0 10.0 9.2L10.0 2.2A0.1 0.1 0 0 0 9.9 2.1A2.0 2.0 0 0 1 7.9 0.1L7.9 -0.1A2.0 2.0 0 0 1 9.9 -2.1A0.1 0.1 0 0 0 10.0 -2.2L10.0 -9.2A0.8 0.8 0 0 0 9.2 -10.0L2.2 -10.0Z"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe the module supply and bus pull-up limits.",
        "x": -3.0,
        "y": 4.445,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional open-drain I2C data; observe the module supply and bus pull-up limits.",
        "x": -1.0,
        "y": 4.445,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "5V",
        "type": "power_in",
        "description": "3.3–5.1 V module supply input. Source net 5V.",
        "x": 1.0,
        "y": 4.445,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 3.0,
        "y": 4.445,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      }
    ],
    "holes": [
      {
        "x": 0.0,
        "y": 10.0,
        "drill": 2.2
      },
      {
        "x": 0.0,
        "y": -10.0,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"2.245\" width=\"10.0\" height=\"5.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.9\" y=\"-8.158\" width=\"3.8\" height=\"2.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.6195\" y=\"-2.451\" width=\"2.921\" height=\"1.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4605\" y=\"-2.286\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6675\" y=\"-2.286\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.683\" y=\"-4.826\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.683\" y=\"0.254\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.604\" y=\"0.254\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.397\" y=\"0.254\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.683\" y=\"-6.731\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.604\" y=\"-4.826\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.397\" y=\"-4.826\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect data-connector=\"J1\" x=\"-5.0\" y=\"2.245\" width=\"10.0\" height=\"5.0\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/>",
    "backArtwork": "",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact electrical contact centers, drills and selected lands from the cited manufacturer EAGLE board. This is an off-board source contact reference; connector housing, electrode copper, mounting holes and retention requirements must be checked separately before a production carrier is designed.",
    "internalConnections": []
  },
  {
    "id": "seeed-grove-sound-101020023",
    "sku": "101020023",
    "name": "Seeed Grove - Sound Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Sound_Sensor/",
    "revision": "v1.6",
    "description": "LM358 electret microphone module with analog sound-level output and the four rear fixture pads. The module operates from 5 V. This is the analog Grove Sound Sensor, not a digital threshold switch.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.6",
      "url": "https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip",
      "https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "sound",
      "arduino"
    ],
    "provenance": {
      "review": "Manufacturer EAGLE connector nets, schematic roles and wiki supply range reviewed; source-CAD revision may differ from current warehouse stock.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Sound Sensor v1.6.brd",
      "boardSha256": "77d3346a5d6c777af03923f6814f9b19725e56a2f4c8ddfa8611eef9fe5ba83a",
      "sourceBounds": [
        -10,
        -10.2,
        10,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "GND",
        "VCC",
        "OUT",
        "NC"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Source schematic and wiki override passive/IO library defaults for supply and external bus roles.",
        "Decorative logo package bboxes omitted; component silhouettes follow their source package envelopes."
      ]
    },
    "board": {
      "width": 20,
      "height": 20.5,
      "color": "#245c81",
      "outline": "M-9.2 -9.95A0.8 0.8 0 0 0 -10.0 -9.15L-10.0 -2.65A0.3 0.3 0 0 0 -9.7 -2.35A2.418677 2.418677 0 0 1 -9.7 2.45A0.3 0.3 0 0 0 -10.0 2.75L-10.0 9.25A0.8 0.8 0 0 0 -9.2 10.05L-2.1 10.05A0.2 0.2 0 0 1 -1.9 10.25A1.910497 1.910497 0 0 0 1.9 10.25A0.2 0.2 0 0 1 2.1 10.05L9.2 10.05A0.8 0.8 0 0 0 10.0 9.25L10.0 2.75A0.3 0.3 0 0 0 9.7 2.45A2.418677 2.418677 0 0 1 9.7 -2.35A0.3 0.3 0 0 0 10.0 -2.65L10.0 -9.15A0.8 0.8 0 0 0 9.2 -9.95A0.8 0.8 0 0 1 10.0 -9.15"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT",
        "type": "output",
        "description": "Analog microphone amplifier output through the source coupling network; read with a suitable ADC.",
        "x": -6.35,
        "y": 3.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact in this exact manufacturer board/schematic.",
        "x": -6.35,
        "y": 1.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net VCC.",
        "x": -6.35,
        "y": -0.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -6.35,
        "y": -2.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -8.255,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true,
        "caption": "GND.T"
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net VCC.",
        "x": -8.255,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true,
        "caption": "VCC.T"
      },
      {
        "id": "out-t",
        "number": "OUT.T",
        "label": "OUT",
        "type": "output",
        "description": "Analog microphone amplifier output through the source coupling network; read with a suitable ADC.",
        "x": -8.255,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "OUT",
        "back": true,
        "smd": true,
        "caption": "OUT.T"
      },
      {
        "id": "nc-t",
        "number": "NC.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unconnected physical contact in this exact manufacturer board/schematic.",
        "x": -8.255,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "NC",
        "back": true,
        "smd": true,
        "caption": "NC.T"
      }
    ],
    "holes": [
      {
        "x": 0.0,
        "y": 10.05,
        "drill": 2.2
      },
      {
        "x": 0.0,
        "y": -9.95,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-8.55\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.413\" y=\"1.487\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.604\" y=\"2.717\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.048\" y=\"4.368\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.048\" y=\"1.32\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.413\" y=\"-6.554\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.413\" y=\"-3.506\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.048\" y=\"-0.458\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.556\" y=\"6.781\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.874\" y=\"2.717\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.096\" y=\"6.781\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.826\" y=\"6.781\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.54\" y=\"-8.332\" width=\"3.302\" height=\"0.762\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect data-connector=\"J1\" x=\"-8.55\" y=\"-4.95\" width=\"5.000000000000002\" height=\"10.0\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/><circle cx=\"4.191\" cy=\"-4.776\" r=\"4.85\" fill=\"#b8bfc0\" stroke=\"#879294\" stroke-width=\".2\"/><circle cx=\"4.191\" cy=\"-4.776\" r=\"4.10\" fill=\"#444d4e\" stroke=\"#d4d9d6\" stroke-width=\".2\"/>",
    "backArtwork": "",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact electrical contact centers, drills and selected lands from the cited manufacturer EAGLE board. This is an off-board source contact reference; connector housing, electrode copper, mounting holes and retention requirements must be checked separately before a production carrier is designed.",
    "internalConnections": [
      [
        "j1-1",
        "out-t"
      ],
      [
        "j1-3",
        "vcc-t"
      ],
      [
        "j1-4",
        "gnd-t"
      ]
    ]
  },
  {
    "id": "seeed-grove-switch-p-101020004",
    "sku": "101020004",
    "name": "Seeed Grove - Switch(P)",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Switch-P/",
    "revision": "v1.0",
    "description": "Maintained slide switch module. The SIG terminal selects HIGH or LOW through the onboard resistor network; it is a passive switched signal, not a driven MCU GPIO. Supply 3.3 V or 5 V.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.0",
      "url": "https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip",
      "https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "switch-p",
      "arduino"
    ],
    "provenance": {
      "review": "Manufacturer EAGLE connector nets, schematic roles and wiki supply range reviewed; source-CAD revision may differ from current warehouse stock.",
      "format": "EAGLE XML",
      "boardFile": "Switch(P).brd",
      "boardSha256": "1a428731d92d74f8d7895bca11d8a1bfca50ac1553c75123e21ce7c92863b782",
      "sourceBounds": [
        -18.89,
        -10.83,
        1.1099999999999994,
        13.37
      ],
      "selectedConnectors": [
        "J1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Source schematic and wiki override passive/IO library defaults for supply and external bus roles.",
        "Unconnected autogenerated nets and panel geometry were manually resolved; original importer warnings retained in the audit.",
        "Overlapping source outline segments were joined into a continuous contour using the same module-package extrema; native contacts unchanged.",
        "Decorative logo package bboxes omitted; component silhouettes follow their source package envelopes."
      ]
    },
    "board": {
      "width": 20.0,
      "height": 24.2,
      "color": "#245c81",
      "outline": "M-9.2 -10 L-2.2 -10 A.1 .1 0 0 1 -2.1 -10.1 A2 2 0 0 1 -.1 -12.1 L.1 -12.1 A2 2 0 0 1 2.1 -10.1 A.1 .1 0 0 1 2.2 -10 L9.2 -10 A.8 .8 0 0 1 10 -9.2 L10 -2.2 A.1 .1 0 0 1 9.9 -2.1 A2 2 0 0 0 7.9 -.1 L7.9 .1 A2 2 0 0 0 9.9 2.1 A.1 .1 0 0 1 10 2.2 L10 9.2 A.8 .8 0 0 1 9.2 10 L2.2 10 A.1 .1 0 0 0 2.1 10.1 A2 2 0 0 1 .1 12.1 L-.1 12.1 A2 2 0 0 1 -2.1 10.1 A.1 .1 0 0 0 -2.2 10 L-9.2 10 A.8 .8 0 0 1 -10 9.2 L-10 2.2 A.1 .1 0 0 1 -9.9 2.1 A2 2 0 0 0 -7.9 .1 L-7.9 -.1 A2 2 0 0 0 -9.9 -2.1 A.1 .1 0 0 1 -10 -2.2 L-10 -9.2 A.8 .8 0 0 1 -9.2 -10 Z"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG",
        "type": "passive",
        "description": "Maintained switch-selected HIGH/LOW signal through the onboard resistor network.",
        "x": 3.0,
        "y": -5.715,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Printed NC; this connector contact has no other contact reference in the exact manufacturer board/schematic.",
        "x": 1.0,
        "y": -5.715,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net VCC.",
        "x": -1.0,
        "y": -5.715,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": -3.0,
        "y": -5.715,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      }
    ],
    "holes": [
      {
        "x": 0.0,
        "y": 10.0,
        "drill": 2.2
      },
      {
        "x": 0.0,
        "y": -10.0,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-5.0\" y=\"-8.515\" width=\"10.0\" height=\"5.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.445\" y=\"3.683\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.445\" y=\"-0.762\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect data-connector=\"J1\" x=\"-5.0\" y=\"-8.515\" width=\"10.0\" height=\"5.0\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/>",
    "backArtwork": "<rect x=\"-1.524\" y=\"-.635\" width=\"3.048\" height=\"7.62\" rx=\".25\" fill=\"#555e5a\" stroke=\"#aeb8b0\" stroke-width=\".15\"/><rect x=\"-1.25\" y=\"-.25\" width=\"2.5\" height=\"3.3\" rx=\".2\" fill=\"#171e1d\" stroke=\"#84928a\" stroke-width=\".15\"/>",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact electrical contact centers, drills and selected lands from the cited manufacturer EAGLE board. This is an off-board source contact reference; connector housing, electrode copper, mounting holes and retention requirements must be checked separately before a production carrier is designed.",
    "internalConnections": []
  },
  {
    "id": "seeed-grove-moisture-101020008",
    "sku": "101020008",
    "name": "Seeed Grove - Moisture Sensor",
    "manufacturer": "Seeed Studio",
    "source": "https://wiki.seeedstudio.com/Grove-Moisture_Sensor/",
    "revision": "v1.4",
    "description": "Resistive soil-moisture probe with analog output, the Grove socket, rear fixture contacts, grounded socket retainers and both electrode nodes. Supply 3.3–5 V. Functional probe copper follows the manufacturer CAD polygons.",
    "cad": {
      "label": "Seeed EAGLE board and schematic — v1.4",
      "url": "https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip"
    },
    "references": [
      "https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/resources/Grove%20-%20Moisture%20Sensor%20v1.4.zip",
      "https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html",
      "status": "In stock on the manufacturer product page; exact SKU matched."
    },
    "tags": [
      "grove",
      "moisture",
      "arduino"
    ],
    "provenance": {
      "review": "Manufacturer EAGLE connector nets, schematic roles and wiki supply range reviewed; source-CAD revision may differ from current warehouse stock.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Moisture Sensor v1.4.brd",
      "boardSha256": "f41751963def9491d6ecccc2b8d94dba0a27133920a32692ae3ceff94a417927",
      "sourceBounds": [
        -12.1,
        -40.16,
        12.1,
        19.84
      ],
      "selectedConnectors": [
        "J1",
        "P1",
        "P2",
        "GND",
        "VCC",
        "SIG"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Source schematic and wiki override passive/IO library defaults for supply and external bus roles.",
        "Unconnected autogenerated nets and panel geometry were manually resolved; original importer warnings retained in the audit.",
        "Decorative logo package bboxes omitted; component silhouettes follow their source package envelopes."
      ]
    },
    "board": {
      "width": 24.2,
      "height": 60.0,
      "color": "#245c81",
      "outline": "M-10.0 -29.2A0.8 0.8 0 0 1 -9.2 -30.0L-2.2098 -30.0L-2.2 -30.0L2.2 -30.0L2.2352 -30.0L9.2 -30.0A0.8 0.8 0 0 1 10.0 -29.2L10.0 -22.2A0.111325 0.111325 0 0 0 10.1 -22.1A2.0 2.0 0 0 1 12.1 -20.1L12.1 -19.9A2.0 2.0 0 0 1 10.1 -17.9A0.1 0.1 0 0 0 10.0 -17.8L10.0 25.0L8.2514 29.3715A0.9999 0.9999 0 0 1 7.323 30.0L5.677 30.0A0.9999 0.9999 0 0 1 4.7486 29.3715L3.0715 25.1788A1.0 1.0 0 0 1 3.0 24.8075L3.0 -7.1716A2.8284 2.8284 0 0 0 0.1716 -10.0L-0.1716 -10.0A2.8284 2.8284 0 0 0 -3.0 -7.1716L-3.0 24.8075A1.0 1.0 0 0 1 -3.0715 25.1788L-4.7486 29.3715A1.0 1.0 0 0 1 -5.677 30.0L-7.323 30.0A0.9999 0.9999 0 0 1 -8.2514 29.3715L-10.0 25.0L-10.0 -17.8A0.1 0.1 0 0 0 -10.1 -17.9A2.0 2.0 0 0 1 -12.1 -19.9L-12.1 -20.1A2.0 2.0 0 0 1 -10.1 -22.1A0.1 0.1 0 0 0 -10.0 -22.2L-10.0 -29.2Z"
    },
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG",
        "type": "output",
        "description": "Analog moisture signal from the onboard transistor sensing circuit; read with a suitable ADC.",
        "x": -3.0,
        "y": -20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Printed NC; this connector contact has no other contact reference in the exact manufacturer board/schematic.",
        "x": -1.0,
        "y": -20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input. Source net VCC.",
        "x": 1.0,
        "y": -20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 3.0,
        "y": -20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Grounded socket retention contact in the source CAD.",
        "x": -5.5,
        "y": -27.72,
        "size": [
          2.54,
          2.1844
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Grounded socket retention contact in the source CAD.",
        "x": 5.5,
        "y": -27.72,
        "size": [
          2.54,
          2.1844
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "PAD_1",
        "type": "passive",
        "description": "Exposed probe electrode node PAD_1, biased from VCC through R1 in the manufacturer schematic.",
        "x": -6.35,
        "y": -6.35,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "P1",
        "back": false,
        "smd": true
      },
      {
        "id": "p2-1",
        "number": "P2.1",
        "label": "PAD_2",
        "type": "passive",
        "description": "Exposed probe electrode node PAD_2, connected to the sensing-transistor base in the manufacturer schematic.",
        "x": 6.35,
        "y": -6.35,
        "size": [
          0.762,
          0.762
        ],
        "shape": "rect",
        "connector": "P2",
        "back": false,
        "smd": true
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return.",
        "x": 0.0,
        "y": -27.94,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true,
        "caption": "GND.T"
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input. Source net VCC.",
        "x": 2.54,
        "y": -27.94,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true,
        "caption": "VCC.T"
      },
      {
        "id": "sig-t",
        "number": "SIG.T",
        "label": "SIG",
        "type": "output",
        "description": "Analog moisture signal from the onboard transistor sensing circuit; read with a suitable ADC.",
        "x": -2.54,
        "y": -27.94,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SIG",
        "back": true,
        "smd": true,
        "caption": "SIG.T"
      }
    ],
    "holes": [
      {
        "x": 10.0,
        "y": -20.0,
        "drill": 2.2
      },
      {
        "x": -10.0,
        "y": -20.0,
        "drill": 2.2
      }
    ],
    "artwork": "<rect x=\"-6.1\" y=\"-29.52\" width=\"12.2\" height=\"9.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4605\" y=\"-14.605\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.81\" y=\"-15.367\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"-15.367\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect data-connector=\"J1\" x=\"-6.1\" y=\"-29.52\" width=\"12.2\" height=\"9.2\" rx=\".35\" fill=\"#e8e4cf\" stroke=\"#9a9e90\" stroke-width=\".15\"/><path d=\"M-10.0 -7.16L-3.0 -7.16L-3.0 29.84L-10.0 29.84L-10.0 -7.16Z\" fill=\"#d3b967\" stroke=\"#e4d18b\" stroke-width=\".12\"/><path d=\"M-10.0 -7.16L-3.0 -7.16L-3.0 29.84L-10.0 29.84L-10.0 -7.16Z\" fill=\"#d3b967\" stroke=\"#e4d18b\" stroke-width=\".12\"/><path d=\"M3.0 -7.16L10.0 -7.16L10.0 29.84L3.0 29.84L3.0 -7.16Z\" fill=\"#d3b967\" stroke=\"#e4d18b\" stroke-width=\".12\"/><path d=\"M3.0 -7.16L10.0 -7.16L10.0 29.84L3.0 29.84L3.0 -7.16Z\" fill=\"#d3b967\" stroke=\"#e4d18b\" stroke-width=\".12\"/>",
    "backArtwork": "",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "footprintMode": "source",
    "footprintNote": "Exact electrical contact centers, drills and selected lands from the cited manufacturer EAGLE board. This is an off-board source contact reference; connector housing, electrode copper, mounting holes and retention requirements must be checked separately before a production carrier is designed.",
    "internalConnections": [
      [
        "j1-1",
        "sig-t"
      ],
      [
        "j1-3",
        "vcc-t"
      ],
      [
        "j1-4",
        "j1-ss1",
        "j1-ss2",
        "gnd-t"
      ]
    ]
  }
];
