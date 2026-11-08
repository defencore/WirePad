// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "sparkfun-module-sen12040": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VIN+",
        "type": "passive",
        "description": "Current path / shunt connection; observe the source current and common-mode voltage limits. CAD net: VIN+. Physical source contact JP1.1.",
        "x": -2.54,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VIN-",
        "type": "passive",
        "description": "Current path / shunt connection; observe the source current and common-mode voltage limits. CAD net: VIN-. Physical source contact JP2.1.",
        "x": 0,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "VCC",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VCC. Physical source contact JP5.1.",
        "x": 5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp6-1",
        "number": "JP6.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP6.1.",
        "x": -5.08,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP6",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp7-1",
        "number": "JP7.1",
        "label": "VOUT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VOUT. Physical source contact JP7.1.",
        "x": 2.54,
        "y": 11.43,
        "size": [
          1.8796,
          1.8796
        ],
        "shape": "circle",
        "connector": "JP7",
        "back": false,
        "drill": 1.016
      }
    ],
    "artwork": "<rect x=\"-7.75\" y=\"0.04\" width=\"15.5\" height=\"5.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.23\" y=\"-6.28\" width=\"6.3\" height=\"2.4\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.27\" y=\"10.16\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.35\" y=\"10.16\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.81\" y=\"10.16\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.81\" y=\"10.16\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.27\" y=\"10.16\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.55\" y=\"-6.5024\" width=\"1.6104\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.965\" y=\"-2.057\" width=\"1.93\" height=\"1.574\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.728\" y=\"-5.436\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.436\" y=\"-8.052\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "INA169_Breakout.brd",
      "boardSha256": "218199334ffbc070526801b66c6ba32801ffe0ae9a19c9ed1eb7a14fb182ae08",
      "sourceBounds": [
        0,
        0,
        25.4,
        25.4
      ],
      "selectedConnectors": [
        "JP1",
        "JP2",
        "JP5",
        "JP6",
        "JP7"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "JP1.1",
          "sourceNet": "VIN+",
          "before": {
            "type": "bidirectional",
            "label": "VIN+"
          },
          "after": {
            "type": "passive",
            "label": "VIN+"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VIN+",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "1",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/INA169_Breakout/Hardware/INA169_Breakout.sch"
        },
        {
          "number": "JP2.1",
          "sourceNet": "VIN-",
          "before": {
            "type": "bidirectional",
            "label": "VIN-"
          },
          "after": {
            "type": "passive",
            "label": "VIN-"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "U1",
              "pin": "VIN-",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "R1",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/sparkfun-cad/INA169_Breakout/Hardware/INA169_Breakout.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "sparkfun/INA169_Breakout",
      "commit": "42a78dbe618fe314bf3a39a4d541c42765d4087b",
      "boardURL": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/Hardware/INA169_Breakout.brd",
      "schematicURL": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/Hardware/INA169_Breakout.sch",
      "schematicSha256": "89567492575b0121a40e7755f9093988862aade6ce1a441ae075719ac6e14606",
      "attribution": "SparkFun Electronics",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/sparkfun/INA169_Breakout/blob/42a78dbe618fe314bf3a39a4d541c42765d4087b/LICENSE.md",
      "sourceArchiveSha256": "f8d727e3048a1e6ab2eea23634583cfdbfaa9ebda589dd5238eafbdcd4ba3e5c",
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
  }
};
