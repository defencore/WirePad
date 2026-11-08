// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-1893": {
    "contacts": [
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "Vin",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: +5V. Physical source contact JP2.1.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.2.",
        "x": -5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "3vo",
        "type": "power_out",
        "description": "3.3 V output from the onboard regulator; source schematic explicitly connects this rail to regulator OUT. CAD net: +3V3. Physical source contact JP2.3.",
        "x": -2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "INT2",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT2. Physical source contact JP2.4.",
        "x": 0,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "INT1",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT1. Physical source contact JP2.5.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL_5.0V. Physical source contact JP2.6.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA_5.0V. Physical source contact JP2.7.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-1.346\" y=\"-2.092\" width=\"3.2\" height=\"5.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.508\" y=\"-0.796\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4076\" y=\"-2.6924\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4076\" y=\"0.9906\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.214\" y=\"1.397\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.214\" y=\"-2.413\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.016\" y=\"-4.343\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.239\" y=\"-3.446\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.597\" y=\"-1.524\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.562\" y=\"2.113\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.667\" y=\"-4.47\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.112\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "MPL3115A2_v0.2.brd",
      "boardSha256": "82b88af48fd6954e01d97c77bbd029e946b94b95aeb82a3afe8117bcfd122a1c",
      "sourceBounds": [
        0,
        0,
        19.05,
        17.78
      ],
      "selectedConnectors": [
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP2.1",
          "sourceNet": "+5V",
          "before": {
            "type": "power_in",
            "label": "+5V"
          },
          "after": {
            "type": "power_in",
            "label": "Vin"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "IN",
              "direction": "pwr"
            },
            {
              "part": "U2",
              "pin": "EN",
              "direction": "in"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MPL3115A2-PCB/MPL3115A2_v0.2.sch"
        },
        {
          "number": "JP2.3",
          "sourceNet": "+3V3",
          "before": {
            "type": "power_in",
            "label": "+3V3"
          },
          "after": {
            "type": "power_out",
            "label": "3vo"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "Q1",
              "pin": "G",
              "direction": "io"
            },
            {
              "part": "Q2",
              "pin": "G",
              "direction": "io"
            },
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R5",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U2",
              "pin": "OUT",
              "direction": "pwr"
            },
            {
              "part": "C4",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC1",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "IC1",
              "pin": "VDDIO",
              "direction": "pwr"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MPL3115A2-PCB/MPL3115A2_v0.2.sch"
        },
        {
          "number": "JP2.6",
          "sourceNet": "SCL_5.0V",
          "before": {
            "type": "bidirectional",
            "label": "SCL_5.0V"
          },
          "after": {
            "type": "bidirectional",
            "label": "SCL"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "Q1",
              "pin": "D",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MPL3115A2-PCB/MPL3115A2_v0.2.sch"
        },
        {
          "number": "JP2.7",
          "sourceNet": "SDA_5.0V",
          "before": {
            "type": "bidirectional",
            "label": "SDA_5.0V"
          },
          "after": {
            "type": "bidirectional",
            "label": "SDA"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "Q2",
              "pin": "D",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MPL3115A2-PCB/MPL3115A2_v0.2.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$8",
          "x": -6.985,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$9",
          "x": 6.985,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MPL3115A2-PCB",
      "commit": "c57b3e05fa7907f850a4f0af6fb211ae9c831847",
      "boardURL": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/MPL3115A2_v0.2.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/MPL3115A2_v0.2.sch",
      "schematicSha256": "e4ce4dd4fcf78df8a85738dd8249a93ee3db1a9a45ac3b26134efc378ecc23c3",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MPL3115A2-PCB/blob/c57b3e05fa7907f850a4f0af6fb211ae9c831847/license.txt",
      "sourceArchiveSha256": "44790c9bf45c237b9796bc1a2056f8d50e6f4ee58b3919705e8af5fcae191542",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-4821": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VIN",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "INT",
        "type": "open_collector",
        "description": "Open-drain sensor interrupt/alert output; use the module pull-up and logic limits documented by the manufacturer. CAD net: INT. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "ADDR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ADDR. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact CONN4.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact CONN4.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.807\" y=\"-2.027\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4\" y=\"-1.0\" width=\"2.8\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-2.337\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.261\" y=\"-3.15\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-8.3566\" y=\"0.8128\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_TMP117.brd",
      "boardSha256": "a91de3882d9278d157ef3526270b1798f74daa4b8450b1aaf1b60809dfb68cbb",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.1",
          "sourceNet": "VCC",
          "before": {
            "type": "power_in",
            "label": "VCC"
          },
          "after": {
            "type": "power_in",
            "label": "VIN"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "C1",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "X1",
              "pin": "VDD",
              "direction": "pwr"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "SJ1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-TMP117-PCB/Adafruit_TMP117.sch"
        },
        {
          "number": "JP1.5",
          "sourceNet": "INT",
          "before": {
            "type": "output",
            "label": "INT"
          },
          "after": {
            "type": "open_collector",
            "label": "INT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "X1",
              "pin": "ALERT",
              "direction": "out"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-TMP117-PCB/Adafruit_TMP117.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TMP117-PCB",
      "commit": "874b3a5b27792d4d166547bab075cb963e1bdb32",
      "boardURL": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/Adafruit_TMP117.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/Adafruit_TMP117.sch",
      "schematicSha256": "d6596edd16e09f383f30368340c19743fb794363b8ffb615773b3d2093d2f8d3",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TMP117-PCB/blob/874b3a5b27792d4d166547bab075cb963e1bdb32/license.txt",
      "sourceArchiveSha256": "92e601335bbbb2ba2a14af08a998cf7e019626a5c3c50a8c5048e5defbc1dabc",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-4369": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact CONN3.3.",
        "x": 7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact CONN3.4.",
        "x": 7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact CONN4.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact CONN4.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP2.1.",
        "x": -2.54,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact JP2.2.",
        "x": 0,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "A2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A2. Physical source contact JP2.3.",
        "x": 2.54,
        "y": -6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Module supply input. Follow the linked manufacturer module voltage range. CAD net: VCC. Physical source contact JP3.1.",
        "x": -5.08,
        "y": 6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.2.",
        "x": -2.54,
        "y": 6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "I²C clock line through the board interface; the source level-shifter circuit is bidirectional. CAD net: SCL. Physical source contact JP3.3.",
        "x": 0,
        "y": 6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I²C data through the onboard interface. CAD net: SDA. Physical source contact JP3.4.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "INT",
        "type": "open_collector",
        "description": "Open-drain sensor interrupt/alert output; use the module pull-up and logic limits documented by the manufacturer. CAD net: INT. Physical source contact JP3.5.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.773\" y=\"-1.13\" width=\"3.8\" height=\"4.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.607\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.407\" y=\"-0.229\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.159\" y=\"-4.826\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.064\" y=\"-4.826\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.016\" y=\"-4.826\" width=\"2.032\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_PCT2075.brd",
      "boardSha256": "85a77e1b2e5afe0ce2199d97a58ab34869716a4d8209709e8006c975a8110832",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP2",
        "JP3"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP3.5",
          "sourceNet": "INT",
          "before": {
            "type": "output",
            "label": "INT"
          },
          "after": {
            "type": "open_collector",
            "label": "INT"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U$2",
              "pin": "OS",
              "direction": "out"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-PCT2075-PCB/Adafruit_PCT2075.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-PCT2075-PCB",
      "commit": "9f80ea91d459f9cde468b5c6894c44e99444f0c3",
      "boardURL": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/Adafruit_PCT2075.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/Adafruit_PCT2075.sch",
      "schematicSha256": "6b6d10439b36009d0e0d160dbdb5d9af33a5fb9177b910b4578ae48c81b045b2",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-PCT2075-PCB/blob/9f80ea91d459f9cde468b5c6894c44e99444f0c3/license.txt",
      "sourceArchiveSha256": "946fbcefcbd89e23e706a4522b30e2877c441bd6be5857fd17ad85fc8a9a3e84",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-992": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VDD",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VDD. Physical source contact JP1.1.",
        "x": 6.35,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": 3.81,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": 1.27,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": -1.27,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact JP1.5.",
        "x": -3.81,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SHDN",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SHDN. Physical source contact JP1.6.",
        "x": -6.35,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-2.4\" y=\"-2.108\" width=\"5.2\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.41\" y=\"-2.562\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.45\" y=\"-2.562\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.49\" y=\"-2.48\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.518\" y=\"-2.516\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.008\" y=\"-5.056\" width=\"3.6\" height=\"1.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.504\" y=\"-2.516\" width=\"1.8\" height=\"3.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MPL115A2 Breakout.brd",
      "boardSha256": "552937ff6409f07c67de6f4974e442a564f2d32002d885a95d7aa5bdf24df169",
      "sourceBounds": [
        0,
        0,
        17.78,
        15.24
      ],
      "selectedConnectors": [
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$8",
          "x": -6.35,
          "y": -5.08,
          "drill": 2.5
        },
        {
          "sourceRef": "U$9",
          "x": 6.35,
          "y": -5.08,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MPL115A2-Breakout-PCB",
      "commit": "c28cfcbce2a9bd072de601268ede652433dbb51a",
      "boardURL": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/Adafruit%20MPL115A2%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/Adafruit%20MPL115A2%20Breakout.sch",
      "schematicSha256": "2f2cadcb6e5f6363e98216aacc638eb21e62425aa7c5b110b1a1703ca6b2a63d",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MPL115A2-Breakout-PCB/blob/c28cfcbce2a9bd072de601268ede652433dbb51a/license.txt",
      "sourceArchiveSha256": "848d76e64c6eed84b7167a40526c50f4b1ec984c1ef89b5ee37d0518706ad97f",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-4686": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "SIGNAL",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact JP1.1.",
        "x": -10.033,
        "y": -2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.2.",
        "x": -10.033,
        "y": 0,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -10.033,
        "y": 2.54,
        "size": [
          3.016,
          1.508
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x4-1",
        "number": "X4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.1.",
        "x": -5.3645,
        "y": 2,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-2",
        "number": "X4.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact X4.2.",
        "x": -5.3645,
        "y": 0,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      },
      {
        "id": "x4-3",
        "number": "X4.3",
        "label": "SIGNAL",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SIGNAL. Physical source contact X4.3.",
        "x": -5.3645,
        "y": -2,
        "size": [
          4.6,
          1
        ],
        "shape": "rect",
        "connector": "X4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.0645\" y=\"-5.0\" width=\"7.5\" height=\"10.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.66\" y=\"-1.1\" width=\"1.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.18\" y=\"-7.306\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.184\" y=\"0.5715\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.182\" y=\"-7.163\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.0165\" y=\"-5.588\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "TMP235 Rev A.brd",
      "boardSha256": "1e6c22e7232cb343ae791e5fcdcbff80cc1ec298814779c7314a055a181b6c2a",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "X4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$8",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TMP235-PCB",
      "commit": "05afa047f2324ed06268ded1c27b741c86acedc8",
      "boardURL": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/TMP235%20Rev%20A.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/TMP235%20Rev%20A.sch",
      "schematicSha256": "2faec9d78e0fb9e17ddf831c67ab98c63b1715b545c07d78e5f5d264ce0792a8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TMP235-PCB/blob/05afa047f2324ed06268ded1c27b741c86acedc8/license.txt",
      "sourceArchiveSha256": "2ed421b65caa87594c4d4239df1ef4dbdcf7f7af0c9eafa142b40dc3e6a8fdea",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-1727": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "P$1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$1. Physical source contact X1.1.",
        "x": -1.8,
        "y": -6.477,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "P$1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$2. Physical source contact X1.2.",
        "x": 1.7,
        "y": -6.477,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "DATA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: DATA. Physical source contact JP1.1.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "A3",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A3. Physical source contact JP1.2.",
        "x": 6.35,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "A2",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A2. Physical source contact JP1.3.",
        "x": 3.81,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "A1",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A1. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP1.5.",
        "x": -1.27,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "3.3V",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects U2.OUT to this rail. CAD net: 3.3V. Physical source contact JP1.6.",
        "x": -3.81,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.7.",
        "x": -6.35,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.8.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-3.6\" y=\"-10.077\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.054\" y=\"0.83\" width=\"4.2\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.072\" y=\"-3.097\" width=\"3.7\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.61\" y=\"-3.097\" width=\"3.7\" height=\"2.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.444\" y=\"0.076\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.081\" y=\"-0.976\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.573\" y=\"3.5\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.667\" y=\"-3.138\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"5.334\" y=\"1.27\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.334\" y=\"3.81\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.334\" y=\"-3.81\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.334\" y=\"-1.27\" width=\"4.572\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MAX31850.brd",
      "boardSha256": "8f930b00f85f5e9322a920b2e8539c9e674718ef2bee7c08af95251127fed142",
      "sourceBounds": [
        0,
        0,
        20.32,
        20.32
      ],
      "selectedConnectors": [
        "X1",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.6",
          "sourceNet": "3.3V",
          "before": {
            "type": "power_in",
            "label": "3.3V"
          },
          "after": {
            "type": "power_out",
            "label": "3.3V"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "U2",
              "pin": "OUT",
              "direction": "pwr"
            },
            {
              "part": "C2",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "U1",
              "pin": "VDD",
              "direction": "pwr"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-MAX31850-thermocouple-breakout-board/Adafruit MAX31850.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$8",
          "x": 7.62,
          "y": -7.62,
          "drill": 2.5
        },
        {
          "sourceRef": "U$9",
          "x": -7.62,
          "y": -7.62,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MAX31850-thermocouple-breakout-board",
      "commit": "759ee92d8dd940d14ad418e81016b3e25eb1a581",
      "boardURL": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/Adafruit%20MAX31850.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/Adafruit%20MAX31850.sch",
      "schematicSha256": "77a915386255ba4083f2b933cfd09231c31b24722730e5ee2e6c1013ff4648f3",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MAX31850-thermocouple-breakout-board/blob/759ee92d8dd940d14ad418e81016b3e25eb1a581/license.txt",
      "sourceArchiveSha256": "cad64f9f4cb12c4fcdb5c5cfb6bd18fb3ed07ef001a1ed21659ad7f9dd375e67",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-6482": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "INT",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: INT. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "ADDR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ADDR. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.807\" y=\"-2.027\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.5\" y=\"-2.02\" width=\"1.0\" height=\"1.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"2.642\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.181\" y=\"1.168\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.261\" y=\"-3.15\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.6957\" y=\"1.4859\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.763\" y=\"-3.175\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TMP119 Temperature Sensor.brd",
      "boardSha256": "0eba7c02e03f31863515e873f8d7b7faaf2c8ec209477e63a34599e5658eda1b",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-TMP119-Temperature-Sensor-PCB",
      "commit": "fe8ae26b0f8362aa93a8074374984c1da7bf01aa",
      "boardURL": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/Adafruit%20TMP119%20Temperature%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/Adafruit%20TMP119%20Temperature%20Sensor.sch",
      "schematicSha256": "438e19d1be9c30f7d8a4c94127d4679559369abfe0f5af59968014672e2d6a1f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TMP119-Temperature-Sensor-PCB/blob/fe8ae26b0f8362aa93a8074374984c1da7bf01aa/license.txt",
      "sourceArchiveSha256": "d5e65cb181fd70074e38a35eb56975360290cd2bc435402665aa6b73e713690a",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-6403": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "ADDR",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: ADDR. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.984\" y=\"-7.145\" width=\"3.325\" height=\"7.502\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.222\" y=\"-0.923\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.043\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.207\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.232\" y=\"2.997\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.245\" y=\"2.756\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.477\" y=\"-7.493\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7625\" y=\"3.175\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MLX90632 FIR Remote Temperature Sensor.brd",
      "boardSha256": "ff7ccf3b71c216fb62c99e8f592756024695d0ba1b380e8a8292c926b51c19f3",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB",
      "commit": "928c728704680ccfc11515f2ec7113c8cb7d4224",
      "boardURL": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/Adafruit%20MLX90632%20FIR%20Remote%20Temperature%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/Adafruit%20MLX90632%20FIR%20Remote%20Temperature%20Sensor.sch",
      "schematicSha256": "d300b41c1ed480b7be691b747ebeab69cb0cd91cbe846ca8e3da9b8e86306377",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MLX90632-FIR-Remote-Thermal-Temperature-Sensor-PCB/blob/928c728704680ccfc11515f2ec7113c8cb7d4224/license.txt",
      "sourceArchiveSha256": "8a009fd06ba9c577cd2280e5e1a2235824c303f43e786b605ddeb79af9b4a294",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-6420": {
    "contacts": [
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCK/SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK/SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 0,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "SDO/ADR",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: SDO/ADR. Physical source contact JP1.5.",
        "x": 2.54,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SDI/SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDI/SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.6.",
        "x": 5.08,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "CS",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CS. Physical source contact JP1.7.",
        "x": 7.62,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.545\" y=\"-3.94\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.35\" y=\"-1.35\" width=\"2.7\" height=\"2.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.476\" y=\"-1.05\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0\" y=\"-4.764\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.566\" y=\"0.297\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.334\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.962\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.959\" y=\"-0.3814\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.626\" y=\"-2.832\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.531\" y=\"-3.912\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.3052\" y=\"2.6668\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.397\" y=\"2.413\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit SPA06-003 Temperature + Pressure Sensor.brd",
      "boardSha256": "e8fec6ef859a01a8c15492aec0b7af6a8961b51d1c74fd0add5f9b26454d2905",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "CONN3",
        "CONN4",
        "JP1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB",
      "commit": "c4adbd023d64f5dbd1cea79366b0a2216d34facf",
      "boardURL": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/Adafruit%20SPA06-003%20Temperature%20%2B%20Pressure%20Sensor.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/Adafruit%20SPA06-003%20Temperature%20%2B%20Pressure%20Sensor.sch",
      "schematicSha256": "a63d3d1eefc53ea7906e991a69ee92b421b98fdbe18e9a499457701565c52cbf",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-SPA06-003-Temperature-and-Pressure-Sensor-PCB/blob/c4adbd023d64f5dbd1cea79366b0a2216d34facf/license.txt",
      "sourceArchiveSha256": "3d51813c82142a9ee89d415f25e5d57b6faa7f7362b50327fcdb31a5205bb4af",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-4808": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "ALERT/TACH",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT/TACH. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "DP",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DP. Physical source contact JP2.1.",
        "x": 3.81,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-2",
        "number": "JP2.2",
        "label": "DN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: DN. Physical source contact JP2.2.",
        "x": 1.27,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-3",
        "number": "JP2.3",
        "label": "FAN",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: FAN. Physical source contact JP2.3.",
        "x": -1.27,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "ALERT/TACH",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT/TACH. Physical source contact JP2.4.",
        "x": -3.81,
        "y": -6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.172\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.095\" y=\"-0.796\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"2.515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-3.327\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.946\" y=\"-3.226\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.291\" y=\"-3.607\" width=\"0.612\" height=\"0.864\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"5.207\" y=\"2.286\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-4.318\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit_EMC2101.brd",
      "boardSha256": "9f910ca3a298bd84e6464e9490750d2a011dfa7849094adff64c65b0d56e5f05",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4",
        "JP2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-EMC2101-PCB",
      "commit": "3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b",
      "boardURL": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/Adafruit_EMC2101.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/Adafruit_EMC2101.sch",
      "schematicSha256": "770d5658d981e726047ab978627882f411d5d10382b8138df1cf3f53851345a3",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-EMC2101-PCB/blob/3d1c2ca4c2ecfb430e67ed098780de451e5c5c6b/license.txt",
      "sourceArchiveSha256": "4acf6d1d65c827e1894b604c6d50f104bce9df53ac3b0230618a194acc4a9933",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-5165": {
    "contacts": [
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: -. Physical source contact X1.1.",
        "x": -1.8,
        "y": -5.08,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: +. Physical source contact X1.2.",
        "x": 1.7,
        "y": -5.08,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "ADDR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ADDR. Physical source contact JP3.1.",
        "x": 10.287,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2",
        "number": "JP3.2",
        "label": "ALERT4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT4. Physical source contact JP3.2.",
        "x": 7.747,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3",
        "number": "JP3.3",
        "label": "ALERT3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT3. Physical source contact JP3.3.",
        "x": 5.207,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4",
        "number": "JP3.4",
        "label": "ALERT2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT2. Physical source contact JP3.4.",
        "x": 2.667,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5",
        "number": "JP3.5",
        "label": "ALERT1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: ALERT1. Physical source contact JP3.5.",
        "x": 0.127,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.6.",
        "x": -2.413,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.7.",
        "x": -4.953,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.8.",
        "x": -7.493,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP3.9.",
        "x": -10.033,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact CONN3.2.",
        "x": 7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact CONN4.2.",
        "x": -7.646,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.646,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.646,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.646,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.546,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.546,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.546,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.546,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.6\" y=\"-8.68\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6\" y=\"-1.3935\" width=\"5.2\" height=\"5.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.246\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.946\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.972\" y=\"-1.392\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.944\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"2.7055\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7875\" y=\"-6.5915\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7875\" y=\"-5.245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7875\" y=\"-3.848\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7875\" y=\"-2.5275\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.4065\" y=\"-1.181\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"3.2005\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.089\" y=\"1.8035\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"-6.5785\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"-5.0675\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.817\" y=\"-3.594\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"6.096\" y=\"2.0955\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.096\" y=\"-0.3175\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MCP9601.brd",
      "boardSha256": "8108819551638716b6cb82c408f4d74948749153a88b19af9006fce1c6852c67",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "X1",
        "JP3",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$33",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$34",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MCP9601-PCB",
      "commit": "135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e",
      "boardURL": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/Adafruit%20MCP9601.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/Adafruit%20MCP9601.sch",
      "schematicSha256": "d22575c3945f676fd10b80ddd367f8cdfe1aa60c1187498f5b18036c98962ce1",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MCP9601-PCB/blob/135d6a8e4ca84c55ec2c8a0208ba61e98e4db31e/license.txt",
      "sourceArchiveSha256": "c1a8a05e2e078a6a805304fb071b9bb3d39826faa1b803ab78dbb038027726bc",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-5027": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "ALERT",
        "type": "open_collector",
        "description": "Open-collector/open-drain schematic output; follow the source pull-up and voltage requirements. CAD net: ALERT. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "A0",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: A0. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 6.35,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn3-2",
        "number": "CONN3.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN3.2.",
        "x": 7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-3",
        "number": "CONN3.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN3.3.",
        "x": 7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-1",
        "number": "CONN3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.1.",
        "x": 7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-4",
        "number": "CONN3.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN3.4.",
        "x": 7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-2",
        "number": "CONN4.2",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact CONN4.2.",
        "x": -7.519,
        "y": -0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-3",
        "number": "CONN4.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN4.3.",
        "x": -7.519,
        "y": 0.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-1",
        "number": "CONN4.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.1.",
        "x": -7.519,
        "y": -1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-4",
        "number": "CONN4.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN4.4.",
        "x": -7.519,
        "y": 1.5,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt1",
        "number": "CONN3.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT1.",
        "x": 11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn3-mt2",
        "number": "CONN3.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN3.MT2.",
        "x": 11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN3",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt1",
        "number": "CONN4.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT1.",
        "x": -11.419,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      },
      {
        "id": "conn4-mt2",
        "number": "CONN4.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN4.MT2.",
        "x": -11.419,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN4",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-12.119\" y=\"-3.0\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.819\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.226\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.426\" y=\"-1.9\" width=\"2.8\" height=\"3.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.5\" y=\"-1.5\" width=\"3.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.239\" y=\"-4.191\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.436\" y=\"-4.083\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"2.261\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.356\" y=\"-2.959\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"2.794\" y=\"0.889\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.366\" y=\"0.889\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"0.889\" width=\"2.032\" height=\"3.302\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit MCP9808 STEMMA QT.brd",
      "boardSha256": "9f8553805cb39c8c9b6dbe70a0551db0d1cac0e65b0e644b2a50c74dcee2f524",
      "sourceBounds": [
        0,
        0,
        25.4,
        17.78
      ],
      "selectedConnectors": [
        "JP1",
        "CONN3",
        "CONN4"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$19",
          "x": -10.16,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$21",
          "x": 10.16,
          "y": 6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-MCP9808-Breakout-PCB",
      "commit": "5a46deacf915eeeb5fcafd82e214ce162bf4a464",
      "boardURL": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/Adafruit%20MCP9808%20STEMMA%20QT.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/Adafruit%20MCP9808%20STEMMA%20QT.sch",
      "schematicSha256": "bd72035fd65c13b701682ff9983401fd11122d6ce32499222683a0d3f0de3cb7",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-MCP9808-Breakout-PCB/blob/5a46deacf915eeeb5fcafd82e214ce162bf4a464/license.txt",
      "sourceArchiveSha256": "b770de361e75f4fc337acd0b23209d71c65a68c1ec1e0bef9e88cdeacadf66f5",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit MCP9808 STEMMA QT.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  }
};
