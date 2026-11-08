// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "adafruit-module-4870": {
    "contacts": [
      {
        "id": "cn1-vcc",
        "number": "CN1.VCC",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VCC.",
        "x": -11.0965,
        "y": 3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-usb_neg",
        "number": "CN1.USB_NEG",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact CN1.USB_NEG.",
        "x": -10.5965,
        "y": 1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-usb_plus",
        "number": "CN1.USB_PLUS",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact CN1.USB_PLUS.",
        "x": -10.5965,
        "y": -1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -11.0965,
        "y": -3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact SWC.TP.",
        "x": -2.0065,
        "y": 3.302,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "SWC",
        "back": true,
        "smd": true
      },
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact SWD.TP.",
        "x": 0.5335,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "SWD",
        "back": true,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": -4.5465,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "RST",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.8965\" y=\"-6.0\" width=\"8.7\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.532\" y=\"-4.351\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9675\" y=\"0.64\" width=\"3.8\" height=\"3.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.9675\" y=\"-4.313\" width=\"3.8\" height=\"3.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2855\" y=\"0.64\" width=\"3.8\" height=\"3.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.2855\" y=\"-4.313\" width=\"3.8\" height=\"3.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.5321\" y=\"-4.4495\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.6899\" y=\"2.2235\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5875\" y=\"3.6195\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.445\" y=\"3.4925\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.337\" y=\"3.6445\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.638\" y=\"0.5205\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Neo Trinkey.brd",
      "boardSha256": "d8b79493e33d2cfacc08a1d98c6ef687ab548df8967ce6cedf6a328b11b00fb1",
      "sourceBounds": [
        -4.953,
        -6.0325,
        26.746,
        6.0325
      ],
      "selectedConnectors": [
        "CN1",
        "SWC",
        "SWD",
        "RST"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "SWC.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC3",
              "pin": "PA30/I10/SECOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Neo-Trinkey-PCB/Adafruit Neo Trinkey.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Neo-Trinkey-PCB",
      "commit": "65c1e5f1d3c088cec327f7b2b0489bb7e085eed8",
      "boardURL": "https://github.com/adafruit/Adafruit-Neo-Trinkey-PCB/blob/65c1e5f1d3c088cec327f7b2b0489bb7e085eed8/Adafruit%20Neo%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Neo-Trinkey-PCB/blob/65c1e5f1d3c088cec327f7b2b0489bb7e085eed8/Adafruit%20Neo%20Trinkey.sch",
      "schematicSha256": "d6dfc342f18e0b92162341197daa275a6d11bcbee48cbc6be78b2bb0ab9bb86a",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Neo-Trinkey-PCB/blob/65c1e5f1d3c088cec327f7b2b0489bb7e085eed8/license.txt",
      "sourceArchiveSha256": "4088c6c7bdcabda6f7f2f402bd253a2ba056c549cf99c1b8c1576557490a3ab1",
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
  "adafruit-module-5020": {
    "contacts": [
      {
        "id": "cn1-vcc",
        "number": "CN1.VCC",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VCC.",
        "x": -11.0585,
        "y": -3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": true,
        "smd": true
      },
      {
        "id": "cn1-usb_neg",
        "number": "CN1.USB_NEG",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact CN1.USB_NEG.",
        "x": -10.5585,
        "y": -1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": true,
        "smd": true
      },
      {
        "id": "cn1-usb_plus",
        "number": "CN1.USB_PLUS",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact CN1.USB_PLUS.",
        "x": -10.5585,
        "y": 1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": true,
        "smd": true
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -11.0585,
        "y": 3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": true,
        "smd": true
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact SWC.TP.",
        "x": 11.43,
        "y": -7.239,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "SWC",
        "back": false,
        "smd": true
      },
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact SWD.TP.",
        "x": 9.2075,
        "y": -7.239,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "SWD",
        "back": false,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": 5.588,
        "y": 6.604,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "RST",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"2.38\" y=\"-7.78\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.7425\" y=\"-0.9539\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.2851\" y=\"4.1285\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.1115\" y=\"2.388\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.8665\" y=\"5.334\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.102\" y=\"-4.9275\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.102\" y=\"-7.2135\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-2.6565\" y=\"-7.8\" width=\"15.6\" height=\"15.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.8585\" y=\"-6.0\" width=\"8.7\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.973\" y=\"-1.727\" width=\"3.5\" height=\"3.2\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit NeoKey Trinkey.brd",
      "boardSha256": "e6e0a5f055d852ff07318618f8f711308b0a0499e140bcbc9b391ebcad714a68",
      "sourceBounds": [
        0,
        -8.255,
        31.623,
        8.255
      ],
      "selectedConnectors": [
        "CN1",
        "SWC",
        "SWD",
        "RST"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "SWC.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC3",
              "pin": "PA30/I10/SECOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-NeoKey-Trinkey-PCB/Adafruit NeoKey Trinkey.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-NeoKey-Trinkey-PCB",
      "commit": "c6a77bea3980cbdd7b0163c4f5c0aa1f4dfe51e6",
      "boardURL": "https://github.com/adafruit/Adafruit-NeoKey-Trinkey-PCB/blob/c6a77bea3980cbdd7b0163c4f5c0aa1f4dfe51e6/Adafruit%20NeoKey%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-NeoKey-Trinkey-PCB/blob/c6a77bea3980cbdd7b0163c4f5c0aa1f4dfe51e6/Adafruit%20NeoKey%20Trinkey.sch",
      "schematicSha256": "6308657457aa2e9c6b1751fb35ae1fc0b11e46c8295833f484a8950dd5f888a0",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-NeoKey-Trinkey-PCB/blob/c6a77bea3980cbdd7b0163c4f5c0aa1f4dfe51e6/license.txt",
      "sourceArchiveSha256": "e2911df6865f86a7e81c0b9db609111fd65f278f0d51fb187155384bc402a456",
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
  "adafruit-module-4964": {
    "contacts": [
      {
        "id": "cn1-vcc",
        "number": "CN1.VCC",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VCC.",
        "x": -11.4395,
        "y": 3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-usb_neg",
        "number": "CN1.USB_NEG",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact CN1.USB_NEG.",
        "x": -10.9395,
        "y": 1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-usb_plus",
        "number": "CN1.USB_PLUS",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact CN1.USB_PLUS.",
        "x": -10.9395,
        "y": -1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -11.4395,
        "y": -3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact SWC.TP.",
        "x": 9.271,
        "y": -6.7945,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "SWC",
        "back": true,
        "smd": true
      },
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact SWD.TP.",
        "x": 9.779,
        "y": -4.318,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "SWD",
        "back": true,
        "smd": true
      },
      {
        "id": "touch-p-1",
        "number": "TOUCH.P$1",
        "label": "TOUCH",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TOUCH. Physical source contact TOUCH.P$1.",
        "x": 15.1765,
        "y": 5.08,
        "size": [
          1,
          1
        ],
        "shape": "rect",
        "connector": "TOUCH",
        "back": false,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": 4.318,
        "y": -3.175,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "RST",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-2.409\" y=\"-6.6\" width=\"13.2\" height=\"13.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.2395\" y=\"-6.0\" width=\"8.7\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.4765\" y=\"4.38\" width=\"1.4\" height=\"1.4\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"3.142\" y=\"-1.6205\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.719\" y=\"-4.6369\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.412\" y=\"1.617\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.0425\" y=\"-0.9\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.0795\" y=\"-1.1045\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1815\" y=\"2.159\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.3115\" y=\"-4.5595\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.788\" y=\"4.648\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Rotary Trinkey.brd",
      "boardSha256": "c688c4ec40f8746ce0e5ad26dba7c0b4bf8d59f99d7d7aa0c37b38db03fef94e",
      "sourceBounds": [
        0,
        -8.255,
        32.385,
        8.255
      ],
      "selectedConnectors": [
        "CN1",
        "SWC",
        "SWD",
        "TOUCH",
        "RST"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "SWC.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC3",
              "pin": "PA30/I10/SECOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Rotary-Trinkey-PCB/Adafruit Rotary Trinkey.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Rotary-Trinkey-PCB",
      "commit": "b93b2aeaabbfbfd231eec6c88afc6694d4581410",
      "boardURL": "https://github.com/adafruit/Adafruit-Rotary-Trinkey-PCB/blob/b93b2aeaabbfbfd231eec6c88afc6694d4581410/Adafruit%20Rotary%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Rotary-Trinkey-PCB/blob/b93b2aeaabbfbfd231eec6c88afc6694d4581410/Adafruit%20Rotary%20Trinkey.sch",
      "schematicSha256": "489f4a25079c43b7f898757258c8f88850c9edf63d58aee8967d7ed5ea16f40f",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Rotary-Trinkey-PCB/blob/b93b2aeaabbfbfd231eec6c88afc6694d4581410/license.txt",
      "sourceArchiveSha256": "863e47df698931f5bce83a67967d78de211b00da54425a9e24ed392e70a266af",
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
  "adafruit-module-5056": {
    "contacts": [
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact CONN1.2.",
        "x": 13.996,
        "y": 0.5,
        "size": [
          1.55,
          0.5
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 13.996,
        "y": -0.5,
        "size": [
          1.55,
          0.5
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 13.996,
        "y": 1.5,
        "size": [
          1.55,
          0.5
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 13.996,
        "y": -1.5,
        "size": [
          1.55,
          0.5
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "tp4-p-1",
        "number": "TP4.P$1",
        "label": "USBBOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USBBOOT. Physical source contact TP4.P$1.",
        "x": 10.668,
        "y": 6.096,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact TP3.P$1.",
        "x": 12.573,
        "y": -5.715,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-vcc",
        "number": "X1.VCC",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact X1.VCC.",
        "x": -14.17,
        "y": 3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-usb_neg",
        "number": "X1.USB_NEG",
        "label": "USB_D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D-. Physical source contact X1.USB_NEG.",
        "x": -13.67,
        "y": 1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-usb_plus",
        "number": "X1.USB_PLUS",
        "label": "USB_D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D+. Physical source contact X1.USB_PLUS.",
        "x": -13.67,
        "y": -1,
        "size": [
          6.5,
          1
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-gnd",
        "number": "X1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.GND.",
        "x": -14.17,
        "y": -3.5,
        "size": [
          7.5,
          1.5
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 17.896,
        "y": 2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 17.896,
        "y": -2.8,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.97\" y=\"-6.0\" width=\"8.7\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.9577\" y=\"-4.3128\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.296\" y=\"-3.1\" width=\"4.3\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.2315\" y=\"-9.5755\" width=\"7.0\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.2315\" y=\"6.1755\" width=\"7.0\" height=\"3.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.8575\" y=\"-0.095\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.8625\" y=\"-8.639\" width=\"3.8\" height=\"2.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.7235\" y=\"0.4645\" width=\"3.0\" height=\"2.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.7296\" y=\"5.208\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.5605\" y=\"-8.039\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.5664\" y=\"3.2878\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.928\" y=\"6.604\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.168\" y=\"6.477\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.36\" y=\"3.4545\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.328\" y=\"-4.8135\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.0105\" y=\"-2.083\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.9945\" y=\"-0.673\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.0105\" y=\"-3.48\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.9394\" y=\"-5.9435\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.435\" y=\"-7.214\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.055\" y=\"-2.4005\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.962\" y=\"3.645\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.499\" y=\"-4.1785\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.6105\" y=\"-3.9245\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.01\" y=\"3.632\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.914\" y=\"3.632\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.014\" y=\"1.2315\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.21\" y=\"-2.1475\" width=\"0.864\" height=\"0.612\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit QT2040 Trinkey.brd",
      "boardSha256": "914ebaa93efaf83d42d0b5e7cc94282f91936b6ce532c0aed87aec4360d6a242",
      "sourceBounds": [
        -12.7,
        -8.89,
        25.4,
        8.89
      ],
      "selectedConnectors": [
        "CONN1",
        "TP4",
        "TP3",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$1",
          "x": -3.81,
          "y": -6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$2",
          "x": -3.81,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$4",
          "x": 16.51,
          "y": 6.35,
          "drill": 2.5
        },
        {
          "sourceRef": "U$5",
          "x": 16.51,
          "y": -6.35,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Trinkey-QT2040-PCB",
      "commit": "496bdd10c670077e7107143e42b4fef8e3da07bb",
      "boardURL": "https://github.com/adafruit/Adafruit-Trinkey-QT2040-PCB/blob/496bdd10c670077e7107143e42b4fef8e3da07bb/Adafruit%20QT2040%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Trinkey-QT2040-PCB/blob/496bdd10c670077e7107143e42b4fef8e3da07bb/Adafruit%20QT2040%20Trinkey.sch",
      "schematicSha256": "5316af4e1ec5ce66aa516560018d8f54408f4dfa6dc152ceeb32543099fb92dc",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Trinkey-QT2040-PCB/blob/496bdd10c670077e7107143e42b4fef8e3da07bb/license.txt",
      "sourceArchiveSha256": "6d6c232366bee19b0ef6aefe8eabfcda6e9ec175595ff2ee915b5b996e6a6d1b",
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
  "adafruit-module-5954": {
    "contacts": [
      {
        "id": "cn1-vbus",
        "number": "CN1.VBUS",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VBUS.",
        "x": -7.502,
        "y": 3.5,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-d-",
        "number": "CN1.D-",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact CN1.D-.",
        "x": -7.502,
        "y": 1,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-dplus",
        "number": "CN1.D+",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact CN1.D+.",
        "x": -7.502,
        "y": -1,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -7.502,
        "y": -3.5,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact SWC.TP.",
        "x": -1.905,
        "y": 3.302,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "SWC",
        "back": true,
        "smd": true
      },
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact SWD.TP.",
        "x": 0.635,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "SWD",
        "back": true,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 7.612,
        "y": 4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 6.612,
        "y": 4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 8.612,
        "y": 4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 5.612,
        "y": 4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": -4.445,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "RST",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "RING2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RING2. Physical source contact X1.2.",
        "x": 10.407,
        "y": 2.45,
        "size": [
          3.302,
          1.651
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "SLEEVE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SLEEVE. Physical source contact X1.1.",
        "x": 10.507,
        "y": -3,
        "size": [
          3.302,
          1.651
        ],
        "shape": "oval",
        "connector": "X1",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x1-5",
        "number": "X1.5",
        "label": "RING_SW",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RING_SW. Physical source contact X1.5.",
        "x": 1.557,
        "y": -3.65,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "RING1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RING1. Physical source contact X1.3.",
        "x": 7.057,
        "y": -3.65,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-4",
        "number": "X1.4",
        "label": "TIP",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TIP. Physical source contact X1.4.",
        "x": 3.257,
        "y": 3.55,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-6",
        "number": "X1.6",
        "label": "TIP_SW",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TIP_SW. Physical source contact X1.6.",
        "x": 1.057,
        "y": 3.55,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 4.312,
        "y": 6.5772,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 9.912,
        "y": 6.5772,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-27.502\" y=\"-6.0\" width=\"19.028\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.644934\" y=\"-3.152572\" width=\"13.900937\" height=\"6.305144\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4305\" y=\"-3.589\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.112\" y=\"4.301\" width=\"6.1\" height=\"2.9\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.1607\" y=\"-7.2404\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0964\" y=\"4.0015\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.403\" y=\"-5.753\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1684\" y=\"5.7535\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.994\" y=\"5.1435\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.7743\" y=\"-5.7025\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0705\" y=\"2.8573\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit TRRS Trinkey.brd",
      "boardSha256": "e873f2bfa98c600d58d11a6b63b4e5556d10d34e0afccbebb599dcd334020f66",
      "sourceBounds": [
        0,
        -7.62,
        25.4,
        7.62
      ],
      "selectedConnectors": [
        "CN1",
        "SWC",
        "SWD",
        "CONN1",
        "RST",
        "X1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "SWC.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC3",
              "pin": "PA30/I10/SECOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-TRRS-Trinkey-PCB/Adafruit TRRS Trinkey.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-TRRS-Trinkey-PCB",
      "commit": "d244f5b5658d5cd1b1bf62de57265185179cdf0f",
      "boardURL": "https://github.com/adafruit/Adafruit-TRRS-Trinkey-PCB/blob/d244f5b5658d5cd1b1bf62de57265185179cdf0f/Adafruit%20TRRS%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-TRRS-Trinkey-PCB/blob/d244f5b5658d5cd1b1bf62de57265185179cdf0f/Adafruit%20TRRS%20Trinkey.sch",
      "schematicSha256": "b4bc9eaa0775399e554c482ae540430ef019d0792d5bf79eab436aae5b089d8c",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-TRRS-Trinkey-PCB/blob/d244f5b5658d5cd1b1bf62de57265185179cdf0f/license.txt",
      "sourceArchiveSha256": "a64320ce82fe83db0f63895d0430cc50b923db63d23250264982675a61f69f00",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [
          "CN1.MNT1",
          "CN1.MNT2"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-5953": {
    "contacts": [
      {
        "id": "cn1-vbus",
        "number": "CN1.VBUS",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VBUS.",
        "x": -7.502,
        "y": 3.5,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-d-",
        "number": "CN1.D-",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact CN1.D-.",
        "x": -7.502,
        "y": 1,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-dplus",
        "number": "CN1.D+",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact CN1.D+.",
        "x": -7.502,
        "y": -1,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -7.502,
        "y": -3.5,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN1",
        "back": false,
        "drill": 1
      },
      {
        "id": "swc-tp",
        "number": "SWC.TP",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact SWC.TP.",
        "x": -1.2065,
        "y": 3.302,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "SWC",
        "back": true,
        "smd": true
      },
      {
        "id": "swd-tp",
        "number": "SWD.TP",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact SWD.TP.",
        "x": 1.8415,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "SWD",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.1.",
        "x": 9.3345,
        "y": 3.683,
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
        "label": "CLK_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CLK_5V. Physical source contact JP1.2.",
        "x": 9.3345,
        "y": 1.143,
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
        "label": "DAT_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: DAT_5V. Physical source contact JP1.3.",
        "x": 9.3345,
        "y": -1.397,
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
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.4.",
        "x": 9.3345,
        "y": -3.937,
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
        "id": "x1-2",
        "number": "X1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact X1.2.",
        "x": 2.032,
        "y": -4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-3",
        "number": "X1.3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.3.",
        "x": 3.032,
        "y": -4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "PA06/EINT6/AIN6/SERCOM0.2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: N$1. Physical source contact X1.1.",
        "x": 1.032,
        "y": -4.029,
        "size": [
          0.6,
          1.55
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": -4.445,
        "y": 3.302,
        "size": [
          1.6,
          1.6
        ],
        "shape": "rect",
        "connector": "RST",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-27.502\" y=\"-6.0\" width=\"19.028\" height=\"12.0\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.2345\" y=\"-5.527\" width=\"6.3\" height=\"10.8\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4305\" y=\"-3.589\" width=\"5.4\" height=\"5.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.568\" y=\"-7.201\" width=\"5.1\" height=\"2.9\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.7957\" y=\"-7.1769\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8424\" y=\"4.0015\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.3065\" y=\"3.2005\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.929\" y=\"-0.5285\" width=\"1.0\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.5494\" y=\"5.2455\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.994\" y=\"5.0165\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.4253\" y=\"-2.9085\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0705\" y=\"2.8573\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Pixel Trinkey.brd",
      "boardSha256": "699fc219b5ce445228eb371b6e0d5a1b1bb74d61632bfa188492399e7ca6816c",
      "sourceBounds": [
        0,
        -7.62,
        25.4,
        7.62
      ],
      "selectedConnectors": [
        "CN1",
        "SWC",
        "SWD",
        "JP1",
        "X1",
        "RST"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "SWC.TP",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "IC3",
              "pin": "PA30/I10/SECOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Pixel-Trinkey-PCB/Adafruit Pixel Trinkey.sch"
        }
      ],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-Pixel-Trinkey-PCB",
      "commit": "3331f2f048f8ea2769698f96f35f18969f4f3619",
      "boardURL": "https://github.com/adafruit/Adafruit-Pixel-Trinkey-PCB/blob/3331f2f048f8ea2769698f96f35f18969f4f3619/Adafruit%20Pixel%20Trinkey.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Pixel-Trinkey-PCB/blob/3331f2f048f8ea2769698f96f35f18969f4f3619/Adafruit%20Pixel%20Trinkey.sch",
      "schematicSha256": "b545080d1f27950100e2b81c3694656443e4561b2eef2f29a97594b7c9f96ca8",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Pixel-Trinkey-PCB/blob/3331f2f048f8ea2769698f96f35f18969f4f3619/license.txt",
      "sourceArchiveSha256": "3b1355aeb327c4089023a45c0147e2245ae7057f87e442705a128ab77e70b202",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [
          "CN1.MNT1",
          "CN1.MNT2"
        ],
        "sourceAliasEvidence": [],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-2471": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 17.018,
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
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 17.018,
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
        "label": "RXD_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD_5V. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 17.018,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 17.018,
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 17.018,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 17.018,
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
        "id": "jp4-1",
        "number": "JP4.1",
        "label": "RESET_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RESET_5V. Physical source contact JP4.1.",
        "x": -10.16,
        "y": -12.7,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-2",
        "number": "JP4.2",
        "label": "ADC",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: ADC. Physical source contact JP4.2.",
        "x": -10.16,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-3",
        "number": "JP4.3",
        "label": "CH_PD",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: CH_PD. Physical source contact JP4.3.",
        "x": -10.16,
        "y": -7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-4",
        "number": "JP4.4",
        "label": "GPIO16",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO16. Physical source contact JP4.4.",
        "x": -10.16,
        "y": -5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-5",
        "number": "JP4.5",
        "label": "GPIO14",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO14. Physical source contact JP4.5.",
        "x": -10.16,
        "y": -2.54,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-6",
        "number": "JP4.6",
        "label": "GPIO12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO12. Physical source contact JP4.6.",
        "x": -10.16,
        "y": 0,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-7",
        "number": "JP4.7",
        "label": "GPIO13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO13. Physical source contact JP4.7.",
        "x": -10.16,
        "y": 2.54,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-8",
        "number": "JP4.8",
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP4.8.",
        "x": -10.16,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-9",
        "number": "JP4.9",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP4.9.",
        "x": -10.16,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp4-10",
        "number": "JP4.10",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP4.10.",
        "x": -10.16,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP4",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP5.1.",
        "x": 10.16,
        "y": 10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "LDO_EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: LDO_EN. Physical source contact JP5.2.",
        "x": 10.16,
        "y": 7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP5.3.",
        "x": 10.16,
        "y": 5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-4",
        "number": "JP5.4",
        "label": "GPIO15",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO15. Physical source contact JP5.4.",
        "x": 10.16,
        "y": 2.54,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP5.5.",
        "x": 10.16,
        "y": 0,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "GPIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO0. Physical source contact JP5.6.",
        "x": 10.16,
        "y": -2.54,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-7",
        "number": "JP5.7",
        "label": "GPIO4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO4. Physical source contact JP5.7.",
        "x": 10.16,
        "y": -5.08,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-8",
        "number": "JP5.8",
        "label": "GPIO5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO5. Physical source contact JP5.8.",
        "x": 10.16,
        "y": -7.62,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-9",
        "number": "JP5.9",
        "label": "RXD_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD_5V. Physical source contact JP5.9.",
        "x": 10.16,
        "y": -10.16,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-10",
        "number": "JP5.10",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP5.10.",
        "x": 10.16,
        "y": -12.7,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      }
    ],
    "artwork": "<rect x=\"-8.0\" y=\"-19.096\" width=\"16.0\" height=\"24.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.9196\" y=\"10.6\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.5734\" y=\"10.6\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.015\" y=\"10.38\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.605\" y=\"6.239\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7\" y=\"6.239\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.796\" y=\"10.557\" width=\"1.4\" height=\"1.746\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.955\" y=\"7.89\" width=\"1.4\" height=\"1.746\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.235\" y=\"6.06\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.706\" y=\"13.589\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.706\" y=\"10.033\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.579\" y=\"6.477\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.801\" y=\"6.477\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.372\" y=\"6.604\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.254\" y=\"13.691\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.502\" y=\"6.604\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.47\" y=\"6.604\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit HUZZAH ESP8266 Basic Breakout.brd",
      "boardSha256": "30a6c1d6b62715a4249f0da8ddace19663c9ba22662ebe5df11258240a4519ad",
      "sourceBounds": [
        0,
        0,
        25.4,
        38.1
      ],
      "selectedConnectors": [
        "JP1",
        "JP4",
        "JP5"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$15",
          "x": 10.16,
          "y": -16.51,
          "drill": 2.5
        },
        {
          "sourceRef": "U$16",
          "x": -10.16,
          "y": -16.51,
          "drill": 2.5
        },
        {
          "sourceRef": "U$17",
          "x": 10.16,
          "y": 16.51,
          "drill": 2.5
        },
        {
          "sourceRef": "U$18",
          "x": -10.16,
          "y": 16.51,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Huzzah-ESP8266-Basic-Breakout-PCB",
      "commit": "ddd588632d07928551e7f1f71a38335e33c4b530",
      "boardURL": "https://github.com/adafruit/Adafruit-Huzzah-ESP8266-Basic-Breakout-PCB/blob/ddd588632d07928551e7f1f71a38335e33c4b530/Adafruit%20HUZZAH%20ESP8266%20Basic%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Huzzah-ESP8266-Basic-Breakout-PCB/blob/ddd588632d07928551e7f1f71a38335e33c4b530/Adafruit%20HUZZAH%20ESP8266%20Basic%20Breakout.sch",
      "schematicSha256": "3e74c15dfd6894622c74b0b09ba75799ebda84f43aca6c342c7b07c5d5115c65",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Huzzah-ESP8266-Basic-Breakout-PCB/blob/ddd588632d07928551e7f1f71a38335e33c4b530/license.txt",
      "sourceArchiveSha256": "bc71b1c07241925a6cf53a1084f032d9127b38727f3ac8476fb59542737acdc0",
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
  "adafruit-module-4172": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.1.",
        "x": -6.35,
        "y": 19.304,
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
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP1.2.",
        "x": -3.81,
        "y": 19.304,
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
        "label": "RXD_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD_5V. Physical source contact JP1.3.",
        "x": -1.27,
        "y": 19.304,
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
        "label": "VIN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VIN. Physical source contact JP1.4.",
        "x": 1.27,
        "y": 19.304,
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
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact JP1.5.",
        "x": 3.81,
        "y": 19.304,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 19.304,
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
        "id": "jp5-1",
        "number": "JP5.1",
        "label": "GPIO23",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO23. Physical source contact JP5.1.",
        "x": 11.43,
        "y": -19.431,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-2",
        "number": "JP5.2",
        "label": "GPIO22",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO22. Physical source contact JP5.2.",
        "x": 11.43,
        "y": -16.891,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-3",
        "number": "JP5.3",
        "label": "TXD",
        "type": "output",
        "description": "Signal driven by the onboard circuit according to the manufacturer schematic. CAD net: TXD. Physical source contact JP5.3.",
        "x": 11.43,
        "y": -14.351,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-4",
        "number": "JP5.4",
        "label": "RXD_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RXD_5V. Physical source contact JP5.4.",
        "x": 11.43,
        "y": -11.811,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-5",
        "number": "JP5.5",
        "label": "GPIO21",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO21. Physical source contact JP5.5.",
        "x": 11.43,
        "y": -9.271,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-6",
        "number": "JP5.6",
        "label": "GPIO19",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO19. Physical source contact JP5.6.",
        "x": 11.43,
        "y": -6.731,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-7",
        "number": "JP5.7",
        "label": "GPIO18",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO18. Physical source contact JP5.7.",
        "x": 11.43,
        "y": -4.191,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-8",
        "number": "JP5.8",
        "label": "GPIO5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO5. Physical source contact JP5.8.",
        "x": 11.43,
        "y": -1.651,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-9",
        "number": "JP5.9",
        "label": "GPIO17",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO17. Physical source contact JP5.9.",
        "x": 11.43,
        "y": 0.889,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-10",
        "number": "JP5.10",
        "label": "GPIO16",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO16. Physical source contact JP5.10.",
        "x": 11.43,
        "y": 3.429,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-11",
        "number": "JP5.11",
        "label": "GPIO4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO4. Physical source contact JP5.11.",
        "x": 11.43,
        "y": 5.969,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-12",
        "number": "JP5.12",
        "label": "GPIO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO0. Physical source contact JP5.12.",
        "x": 11.43,
        "y": 8.509,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-13",
        "number": "JP5.13",
        "label": "GPIO2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO2. Physical source contact JP5.13.",
        "x": 11.43,
        "y": 11.049,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-14",
        "number": "JP5.14",
        "label": "GPIO15",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO15. Physical source contact JP5.14.",
        "x": 11.43,
        "y": 13.589,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp5-15",
        "number": "JP5.15",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP5.15.",
        "x": 11.43,
        "y": 16.129,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP5",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "RESET_5V",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: RESET_5V. Physical source contact JP2.1.",
        "x": -11.43,
        "y": -19.431,
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
        "label": "GPIO36",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO36. Physical source contact JP2.2.",
        "x": -11.43,
        "y": -16.891,
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
        "label": "GPIO39",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: GPIO39. Physical source contact JP2.3.",
        "x": -11.43,
        "y": -14.351,
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
        "id": "jp2-4",
        "number": "JP2.4",
        "label": "GPI34",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPI34. Physical source contact JP2.4.",
        "x": -11.43,
        "y": -11.811,
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
        "id": "jp2-5",
        "number": "JP2.5",
        "label": "GPI35",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPI35. Physical source contact JP2.5.",
        "x": -11.43,
        "y": -9.271,
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
        "id": "jp2-6",
        "number": "JP2.6",
        "label": "GPIO32",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO32. Physical source contact JP2.6.",
        "x": -11.43,
        "y": -6.731,
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
        "id": "jp2-7",
        "number": "JP2.7",
        "label": "GPIO33",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO33. Physical source contact JP2.7.",
        "x": -11.43,
        "y": -4.191,
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
        "id": "jp2-8",
        "number": "JP2.8",
        "label": "GPIO25",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO25. Physical source contact JP2.8.",
        "x": -11.43,
        "y": -1.651,
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
        "id": "jp2-9",
        "number": "JP2.9",
        "label": "GPIO26",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO26. Physical source contact JP2.9.",
        "x": -11.43,
        "y": 0.889,
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
        "id": "jp2-10",
        "number": "JP2.10",
        "label": "GPIO27",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO27. Physical source contact JP2.10.",
        "x": -11.43,
        "y": 3.429,
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
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "GPIO14",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO14. Physical source contact JP2.11.",
        "x": -11.43,
        "y": 5.969,
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
        "id": "jp2-12",
        "number": "JP2.12",
        "label": "GPIO12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO12. Physical source contact JP2.12.",
        "x": -11.43,
        "y": 8.509,
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
        "id": "jp2-13",
        "number": "JP2.13",
        "label": "GPIO13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GPIO13. Physical source contact JP2.13.",
        "x": -11.43,
        "y": 11.049,
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
        "id": "jp2-14",
        "number": "JP2.14",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP2.14.",
        "x": -11.43,
        "y": 13.589,
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
        "id": "jp2-15",
        "number": "JP2.15",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP2.15.",
        "x": -11.43,
        "y": 16.129,
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
        "id": "x2-1",
        "number": "X2.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X2.1.",
        "x": -1,
        "y": 9.254,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": true,
        "smd": true
      },
      {
        "id": "x2-2",
        "number": "X2.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X2.2.",
        "x": 1,
        "y": 9.254,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-9.0\" y=\"-21.644\" width=\"18.0\" height=\"25.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.9676\" y=\"8.822\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.1294\" y=\"8.822\" width=\"3.0508\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.728\" y=\"9.653\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.985\" y=\"13.778\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.683\" y=\"5.015\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.397\" y=\"13.778\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.253\" y=\"11.7\" width=\"1.4\" height=\"1.746\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.703\" y=\"5.521\" width=\"1.85\" height=\"1.15\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.277\" y=\"7.747\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.889\" y=\"7.722\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.556\" y=\"13.818\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.54\" y=\"8.357\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.54\" y=\"10.135\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.071\" y=\"6.045\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.896\" y=\"12.268\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.0\" y=\"8.454\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit ESP32 Huzzah Breakout.brd",
      "boardSha256": "7bedb7eeb7e944fba4c9bbf1b8c0b7a2f03683cf2f522bec7a89dfc5021ea3f2",
      "sourceBounds": [
        0,
        0,
        25.4,
        43.688
      ],
      "selectedConnectors": [
        "JP1",
        "JP5",
        "JP2",
        "X2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$15",
          "x": -10.16,
          "y": 19.304,
          "drill": 2.5
        },
        {
          "sourceRef": "U$16",
          "x": 10.16,
          "y": 19.304,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-ESP32-HUZZAH-Breakout-PCB",
      "commit": "2f1dcc9ebf93d4a9c825a3747d51849c088c390d",
      "boardURL": "https://github.com/adafruit/Adafruit-ESP32-HUZZAH-Breakout-PCB/blob/2f1dcc9ebf93d4a9c825a3747d51849c088c390d/Adafruit%20ESP32%20Huzzah%20Breakout.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-ESP32-HUZZAH-Breakout-PCB/blob/2f1dcc9ebf93d4a9c825a3747d51849c088c390d/Adafruit%20ESP32%20Huzzah%20Breakout.sch",
      "schematicSha256": "d61fae28a58c327d1814c4012db179a6fd46a12b563c9592bd1daa1d49308949",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-ESP32-HUZZAH-Breakout-PCB/blob/2f1dcc9ebf93d4a9c825a3747d51849c088c390d/license.txt",
      "sourceArchiveSha256": "75875a76f7166a73efe9297ce05f5eed463711dd3a7ca8e07d6895704dd3419c",
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
  "adafruit-module-5395": {
    "contacts": [
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": 4.32,
        "y": -8.7665,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -4.32,
        "y": -8.7665,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -4.32,
        "y": -4.5865,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": 4.32,
        "y": -4.5865,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": 3.2,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": 2.4,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": 1.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": 1.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.B7.",
        "x": 0.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.A6.",
        "x": 0.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.A7.",
        "x": -0.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.B6.",
        "x": -0.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -1.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -1.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -2.4,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -3.2,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.1.",
        "x": -7.62,
        "y": -7.62,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.2.",
        "x": -7.62,
        "y": -5.08,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.3.",
        "x": -7.62,
        "y": -2.54,
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
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.4.",
        "x": -7.62,
        "y": 0,
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
        "x": -7.62,
        "y": 2.54,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
        "x": -7.62,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.7.",
        "x": -7.62,
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
        "id": "jp1-1c",
        "number": "JP1.1C",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.1C.",
        "x": -8.89,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.2C.",
        "x": -8.89,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.3C.",
        "x": -8.89,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4c",
        "number": "JP1.4C",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.4C.",
        "x": -8.89,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5c",
        "number": "JP1.5C",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
        "x": -8.89,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6c",
        "number": "JP1.6C",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
        "x": -8.89,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7c",
        "number": "JP1.7C",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.7C.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 1.6844,
        "y": 5.2584,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA1. Physical source contact CONN1.3.",
        "x": 2.6844,
        "y": 5.2584,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 0.6844,
        "y": 5.2584,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL1. Physical source contact CONN1.4.",
        "x": 3.6844,
        "y": 5.2584,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP3.1.",
        "x": 7.62,
        "y": 7.62,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2.",
        "x": 7.62,
        "y": 5.08,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 2.54,
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
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4.",
        "x": 7.62,
        "y": 0,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.5.",
        "x": 7.62,
        "y": -2.54,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6.",
        "x": 7.62,
        "y": -5.08,
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
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7.",
        "x": 7.62,
        "y": -7.62,
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
        "id": "jp3-1c",
        "number": "JP3.1C",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP3.1C.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2C.",
        "x": 8.89,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3c",
        "number": "JP3.3C",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3C.",
        "x": 8.89,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4C.",
        "x": 8.89,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5c",
        "number": "JP3.5C",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.5C.",
        "x": 8.89,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6c",
        "number": "JP3.6C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6C.",
        "x": 8.89,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7c",
        "number": "JP3.7C",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7C.",
        "x": 8.89,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "vbat-p-1",
        "number": "VBAT.P$1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact VBAT.P$1.",
        "x": 2.755,
        "y": -9.2575,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "VBAT",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd-p-1",
        "number": "GND.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact GND.P$1.",
        "x": -1.055,
        "y": -9.2575,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "swc1-tp",
        "number": "SWC1.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact SWC1.TP.",
        "x": 6.9215,
        "y": 9.3345,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "SWC1",
        "back": true,
        "smd": true
      },
      {
        "id": "swc2-tp",
        "number": "SWC2.TP",
        "label": "IO0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: IO0. Physical source contact SWC2.TP.",
        "x": -6.6294,
        "y": -9.3472,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "SWC2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-11.3665\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.8156\" y=\"5.5584\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.894\" y=\"-2.2239\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.894\" y=\"1.7131\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6545\" y=\"7.8916\" width=\"4.8\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.3693\" y=\"-0.3278\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.4037\" y=\"2.4528\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.8739\" y=\"0.1651\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.5908\" y=\"-3.0476\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1811\" y=\"2.7563\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-1.7585\" y=\"-0.044\" width=\"7.2\" height=\"7.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.0\" y=\"-6.826\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7737\" y=\"-6.2324\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.7864\" y=\"-9.4836\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7906\" y=\"0.8939\" width=\"1.25\" height=\"2.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.3497\" y=\"4.645\" width=\"1.1114\" height=\"2.1146\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.1934\" y=\"-1.7782\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit QT Py ESP32 Pico.brd",
      "boardSha256": "142bf01e4eb9730f70a09034e4839f63496d1596be0b6f66a6edc563beb732b6",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "X6",
        "JP1",
        "CONN1",
        "JP3",
        "VBAT",
        "GND",
        "SWC1",
        "SWC2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-QT-Py-ESP32-Pico-PCB",
      "commit": "f45b12704ccbb7180d89db28e1af7bd861124133",
      "boardURL": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-Pico-PCB/blob/f45b12704ccbb7180d89db28e1af7bd861124133/Adafruit%20QT%20Py%20ESP32%20Pico.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-Pico-PCB/blob/f45b12704ccbb7180d89db28e1af7bd861124133/Adafruit%20QT%20Py%20ESP32%20Pico.sch",
      "schematicSha256": "466862b78f393a2000b9e45868bf3f339a7001919894392ec8ad7b971742c31e",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-QT-Py-ESP32-Pico-PCB/blob/f45b12704ccbb7180d89db28e1af7bd861124133/license.txt",
      "sourceArchiveSha256": "22a4b57fb5202aaea90007850a50c8e6abeb22c968e980f0cd110c1f34174234",
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
  "adafruit-module-5996": {
    "contacts": [
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": 4.32,
        "y": -8.7665,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -4.32,
        "y": -8.7665,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -4.32,
        "y": -4.5865,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": 4.32,
        "y": -4.5865,
        "size": [
          1,
          2
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": 3.2,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": 2.4,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": 1.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": 1.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.B7.",
        "x": 0.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.A6.",
        "x": 0.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.A7.",
        "x": -0.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.B6.",
        "x": -0.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -1.25,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -1.75,
        "y": -4.0115,
        "size": [
          0.275,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -2.4,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -3.2,
        "y": -4.0115,
        "size": [
          0.575,
          1.15
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.1.",
        "x": -7.62,
        "y": -7.62,
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
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.2.",
        "x": -7.62,
        "y": -5.08,
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
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.3.",
        "x": -7.62,
        "y": -2.54,
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
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.4.",
        "x": -7.62,
        "y": 0,
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
        "x": -7.62,
        "y": 2.54,
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
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6.",
        "x": -7.62,
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
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.7.",
        "x": -7.62,
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
        "id": "jp1-1c",
        "number": "JP1.1C",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.1C.",
        "x": -8.89,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2c",
        "number": "JP1.2C",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.2C.",
        "x": -8.89,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3c",
        "number": "JP1.3C",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.3C.",
        "x": -8.89,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4c",
        "number": "JP1.4C",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.4C.",
        "x": -8.89,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5c",
        "number": "JP1.5C",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP1.5C.",
        "x": -8.89,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6c",
        "number": "JP1.6C",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP1.6C.",
        "x": -8.89,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7c",
        "number": "JP1.7C",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.7C.",
        "x": -8.89,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact CONN1.2.",
        "x": 2.2432,
        "y": 5.3092,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 3.2432,
        "y": 5.3092,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 1.2432,
        "y": 5.3092,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 4.2432,
        "y": 5.3092,
        "size": [
          0.5,
          1.55
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP3.1.",
        "x": 7.62,
        "y": 7.62,
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
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2.",
        "x": 7.62,
        "y": 5.08,
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
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3.",
        "x": 7.62,
        "y": 2.54,
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
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4.",
        "x": 7.62,
        "y": 0,
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
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.5.",
        "x": 7.62,
        "y": -2.54,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6.",
        "x": 7.62,
        "y": -5.08,
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
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7.",
        "x": 7.62,
        "y": -7.62,
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
        "id": "jp3-1c",
        "number": "JP3.1C",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP3.1C.",
        "x": 8.89,
        "y": 7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-2c",
        "number": "JP3.2C",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP3.2C.",
        "x": 8.89,
        "y": 5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-3c",
        "number": "JP3.3C",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP3.3C.",
        "x": 8.89,
        "y": 2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-4c",
        "number": "JP3.4C",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP3.4C.",
        "x": 8.89,
        "y": 0,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-5c",
        "number": "JP3.5C",
        "label": "3.3V",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: 3.3V. Physical source contact JP3.5C.",
        "x": 8.89,
        "y": -2.54,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-6c",
        "number": "JP3.6C",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP3.6C.",
        "x": 8.89,
        "y": -5.08,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp3-7c",
        "number": "JP3.7C",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact JP3.7C.",
        "x": 8.89,
        "y": -7.62,
        "size": [
          3.556,
          1.778
        ],
        "shape": "oval",
        "connector": "JP3",
        "back": false,
        "drill": 1
      },
      {
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "+5V",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: +5V. Physical source contact TP1.P$1.",
        "x": 1.7645,
        "y": -7.7725,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact TP2.P$1.",
        "x": -1.6645,
        "y": -7.7725,
        "size": [
          0.5,
          0.5
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "rst-tp",
        "number": "RST.TP",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact RST.TP.",
        "x": -2.159,
        "y": 5.7785,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "RST",
        "back": true,
        "smd": true
      },
      {
        "id": "boot-tp",
        "number": "BOOT.TP",
        "label": "BOOT0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: BOOT0. Physical source contact BOOT.TP.",
        "x": -4.699,
        "y": 5.7785,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "BOOT",
        "back": true,
        "smd": true
      },
      {
        "id": "swdio-tp",
        "number": "SWDIO.TP",
        "label": "SWD",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SWD. Physical source contact SWDIO.TP.",
        "x": -4.8895,
        "y": -0.889,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "SWDIO",
        "back": true,
        "smd": true
      },
      {
        "id": "swclk-tp",
        "number": "SWCLK.TP",
        "label": "SWC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SWC. Physical source contact SWCLK.TP.",
        "x": -2.7305,
        "y": -0.889,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "SWCLK",
        "back": true,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": -0.0568,
        "y": 9.2092,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 5.5432,
        "y": 9.2092,
        "size": [
          1.2,
          1.8
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-4.47\" y=\"-11.3665\" width=\"8.94\" height=\"7.35\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.2568\" y=\"5.6092\" width=\"6.1\" height=\"4.3\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.275\" y=\"-1.9095\" width=\"4.2\" height=\"4.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.1353\" y=\"2.7037\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.4274\" y=\"6.9201\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.5852\" y=\"-0.404\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.0636\" y=\"2.529\" width=\"1.6\" height=\"1.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.8194\" y=\"-3.24\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.164\" y=\"0.252\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.1603\" y=\"2.9321\" width=\"1.02\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit QT Py CH32V203.brd",
      "boardSha256": "5c822700d2380d1a744d38ec9f794ebf2e311f5151d828f2154738e2c0ba1540",
      "sourceBounds": [
        0,
        0,
        17.78,
        20.701
      ],
      "selectedConnectors": [
        "X6",
        "JP1",
        "CONN1",
        "JP3",
        "TP1",
        "TP2",
        "RST",
        "BOOT",
        "SWDIO",
        "SWCLK"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [],
      "repo": "adafruit/Adafruit-QT-Py-CH32V203-PCB",
      "commit": "c5c1580d9823d2f8923778530339179531d024f6",
      "boardURL": "https://github.com/adafruit/Adafruit-QT-Py-CH32V203-PCB/blob/c5c1580d9823d2f8923778530339179531d024f6/Adafruit%20QT%20Py%20CH32V203.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-QT-Py-CH32V203-PCB/blob/c5c1580d9823d2f8923778530339179531d024f6/Adafruit%20QT%20Py%20CH32V203.sch",
      "schematicSha256": "0efffe298a228bbf7da9854283e0b882ac618985cec41bc7fbbc158bc22dd603",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-QT-Py-CH32V203-PCB/blob/c5c1580d9823d2f8923778530339179531d024f6/license.txt",
      "sourceArchiveSha256": "4f40f3428bc99f3a28eaf979dbf4ced6ae77a8557ebc2b9d8ffed97fdf52fa40",
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
  "adafruit-module-4759": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP1.1.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "TX_D1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX_D1. Physical source contact JP1.2.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RX_D0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX_D0. Physical source contact JP1.3.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.4.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.5.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "A5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A5. Physical source contact JP1.7.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "A4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A4. Physical source contact JP1.8.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.9.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.10.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.11.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.12.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.13.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "AREF",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: AREF. Physical source contact JP1.14.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.15.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.16.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -15.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X1.2.",
        "x": -13.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.1.",
        "x": -8.89,
        "y": -10.2235,
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
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.2.",
        "x": -6.35,
        "y": -10.2235,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.3.",
        "x": -3.81,
        "y": -10.2235,
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
        "label": "D13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13. Physical source contact JP3.4.",
        "x": -1.27,
        "y": -10.2235,
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
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact JP3.5.",
        "x": 1.27,
        "y": -10.2235,
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
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact JP3.6.",
        "x": 3.81,
        "y": -10.2235,
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
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP3.7.",
        "x": 6.35,
        "y": -10.2235,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP3.8.",
        "x": 8.89,
        "y": -10.2235,
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
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP3.9.",
        "x": 11.43,
        "y": -10.2235,
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
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP3.10.",
        "x": 13.97,
        "y": -10.2235,
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
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.11.",
        "x": 16.51,
        "y": -10.2235,
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
        "id": "jp3-12",
        "number": "JP3.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.12.",
        "x": 19.05,
        "y": -10.2235,
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
        "id": "tp1-p-1",
        "number": "TP1.P$1",
        "label": "SWCLK",
        "type": "input",
        "description": "Serial Wire Debug clock input. CAD net: SWCLK. Physical source contact TP1.P$1.",
        "x": -2.032,
        "y": 1.778,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-p-1",
        "number": "TP2.P$1",
        "label": "SWDIO",
        "type": "bidirectional",
        "description": "Serial Wire Debug bidirectional data. CAD net: SWDIO. Physical source contact TP2.P$1.",
        "x": -2.794,
        "y": 4.1275,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "x4-1",
        "number": "X4.1",
        "label": "CAN_L",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAN_L. Physical source contact X4.1.",
        "x": 21.717,
        "y": -3.5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X4",
        "back": false,
        "drill": 1
      },
      {
        "id": "x4-2",
        "number": "X4.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X4.2.",
        "x": 21.717,
        "y": 0,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X4",
        "back": false,
        "drill": 1
      },
      {
        "id": "x4-3",
        "number": "X4.3",
        "label": "CAN_H",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAN_H. Physical source contact X4.3.",
        "x": 21.717,
        "y": 3.5,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "X4",
        "back": false,
        "drill": 1
      },
      {
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": -24.0065,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -24.0065,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -19.8265,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": -19.8265,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": -19.2515,
        "y": -3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": -19.2515,
        "y": -2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": -19.2515,
        "y": -1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": -19.2515,
        "y": -1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.B7.",
        "x": -19.2515,
        "y": -0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.A6.",
        "x": -19.2515,
        "y": -0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact X6.A7.",
        "x": -19.2515,
        "y": 0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact X6.B6.",
        "x": -19.2515,
        "y": 0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -19.2515,
        "y": 1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -19.2515,
        "y": 1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -19.2515,
        "y": 2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -19.2515,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "dplus1-tp",
        "number": "D+1.TP",
        "label": "D+",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D+. Physical source contact D+1.TP.",
        "x": -23.9395,
        "y": 1.2065,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D+1",
        "back": true,
        "smd": true
      },
      {
        "id": "d-1-tp",
        "number": "D-1.TP",
        "label": "D-",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D-. Physical source contact D-1.TP.",
        "x": -24.003,
        "y": -1.397,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D-1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"0.4895\" y=\"-4.0825\" width=\"8.8\" height=\"8.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.317\" y=\"-5.25\" width=\"7.0\" height=\"10.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.6065\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.478\" y=\"-10.874\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.0305\" y=\"-1.773\" width=\"4.8\" height=\"3.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.6884\" y=\"3.5483\" width=\"3.8\" height=\"3.8\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.975\" y=\"3.3641\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.0546\" y=\"-2.159\" width=\"2.54\" height=\"3.683\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"18.0975\" y=\"5.588\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.2395\" y=\"1.3972\" width=\"2.0\" height=\"3.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.8735\" y=\"-0.542\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.4445\" y=\"-4.8346\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.2765\" y=\"-7.442\" width=\"1.6\" height=\"3.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.933\" y=\"-6.5885\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.9876\" y=\"5.7262\" width=\"3.2\" height=\"1.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.8759\" y=\"0.9906\" width=\"3.1448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.605\" y=\"-1.462\" width=\"1.746\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.447\" y=\"5.6325\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3805\" y=\"-6.3925\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.6255\" y=\"-6.225\" width=\"1.07\" height=\"1.02\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.304\" y=\"-7.4545\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.1125\" y=\"-7.8355\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.4267\" y=\"-5.867\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.7433\" y=\"-0.3429\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.3835\" y=\"1.3385\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.735\" y=\"-3.1515\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.185\" y=\"-6.1595\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.5485\" y=\"5.588\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.5165\" y=\"5.5245\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.4898\" y=\"6.2993\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.912\" y=\"4.28\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0865\" y=\"-3.5305\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.1675\" y=\"-6.833\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.1294\" y=\"-9.8302\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.033206\" y=\"5.684703\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.1025\" y=\"2.743\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.8965\" y=\"-6.909\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.669\" y=\"-6.5157\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.8363\" y=\"4.5716\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.9135\" y=\"6.7565\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.8782\" y=\"6.780406\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.9902\" y=\"6.4895\" width=\"0.712\" height=\"0.851\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.958\" y=\"1.3585\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.2679\" y=\"-0.2925\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4518\" y=\"2.946\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.4391\" y=\"5.9432\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-16.764\" y=\"6.604\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Feather M4 Express CAN.brd",
      "boardSha256": "5a11b0efbffc4e5a73d0cd666415147fe3eb355e4660a24928d40a1df9a8b3d9",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "JP3",
        "TP1",
        "TP2",
        "X4",
        "X6",
        "D+1",
        "D-1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "TP1.P$1",
          "sourceNet": "SWCLK",
          "before": {
            "type": "bidirectional",
            "label": "SWCLK"
          },
          "after": {
            "type": "input",
            "label": "SWCLK"
          },
          "reason": "Electrical function or passive pass-through explicitly reviewed from the matching source schematic and listed device endpoints.",
          "connectedSourcePins": [
            {
              "part": "R6",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "U$14",
              "pin": "PA30/I14/SERCOM1.2/SWCLK",
              "direction": "io"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Feather-M4-CAN-PCB/Adafruit Feather M4 Express CAN.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$31",
          "x": -22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": -22.86,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Feather-M4-CAN-PCB",
      "commit": "d82af0d26250cb47e0685715276474798bb79470",
      "boardURL": "https://github.com/adafruit/Adafruit-Feather-M4-CAN-PCB/blob/d82af0d26250cb47e0685715276474798bb79470/Adafruit%20Feather%20M4%20Express%20CAN.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Feather-M4-CAN-PCB/blob/d82af0d26250cb47e0685715276474798bb79470/Adafruit%20Feather%20M4%20Express%20CAN.sch",
      "schematicSha256": "a1caf749e48154f8b0e059f3856503e2179dc1e05c7a9a61ae5c9baad16ce9eb",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Feather-M4-CAN-PCB/blob/d82af0d26250cb47e0685715276474798bb79470/license.txt",
      "sourceArchiveSha256": "5e9269326e8ff63771b7520536ef87a80161f0dee6aabe3e88b4ea7e6c05af99",
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
  "adafruit-module-5727": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP1.1.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.2.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.3.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.4.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.5.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "D25",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D25. Physical source contact JP1.7.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "D24",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D24. Physical source contact JP1.8.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.9.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.10.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.11.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.12.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.13.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.14.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.15.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.16.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -15.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X1.2.",
        "x": -13.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.1.",
        "x": -8.89,
        "y": -10.2235,
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
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.2.",
        "x": -6.35,
        "y": -10.2235,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.3.",
        "x": -3.81,
        "y": -10.2235,
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
        "label": "D13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13. Physical source contact JP3.4.",
        "x": -1.27,
        "y": -10.2235,
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
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact JP3.5.",
        "x": 1.27,
        "y": -10.2235,
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
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact JP3.6.",
        "x": 3.81,
        "y": -10.2235,
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
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP3.7.",
        "x": 6.35,
        "y": -10.2235,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP3.8.",
        "x": 8.89,
        "y": -10.2235,
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
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP3.9.",
        "x": 11.43,
        "y": -10.2235,
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
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP3.10.",
        "x": 13.97,
        "y": -10.2235,
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
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.11.",
        "x": 16.51,
        "y": -10.2235,
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
        "id": "jp3-12",
        "number": "JP3.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.12.",
        "x": 19.05,
        "y": -10.2235,
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
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": -24.0065,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -24.0065,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -19.8265,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": -19.8265,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": -19.2515,
        "y": -3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": -19.2515,
        "y": -2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": -19.2515,
        "y": -1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": -19.2515,
        "y": -1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.B7.",
        "x": -19.2515,
        "y": -0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.A6.",
        "x": -19.2515,
        "y": -0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.A7.",
        "x": -19.2515,
        "y": 0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.B6.",
        "x": -19.2515,
        "y": 0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -19.2515,
        "y": 1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -19.2515,
        "y": 1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -19.2515,
        "y": 2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -19.2515,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "USBBOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USBBOOT. Physical source contact TP3.P$1.",
        "x": -13.97,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact CONN1.2.",
        "x": 8.6075,
        "y": -4.6435,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 8.6075,
        "y": -5.6435,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 8.6075,
        "y": -3.6435,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 8.6075,
        "y": -6.6435,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "dplus1-tp",
        "number": "D+1.TP",
        "label": "USB_D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D+. Physical source contact D+1.TP.",
        "x": -23.9395,
        "y": 1.2065,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D+1",
        "back": true,
        "smd": true
      },
      {
        "id": "d-1-tp",
        "number": "D-1.TP",
        "label": "USB_D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D-. Physical source contact D-1.TP.",
        "x": -24.003,
        "y": -1.397,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D-1",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-nc1",
        "number": "X1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC1.",
        "x": -17.878,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-nc2",
        "number": "X1.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC2.",
        "x": -11.078,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 6.0593,
        "y": -7.9435,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 6.0593,
        "y": -2.3435,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-sprt1",
        "number": "EINK2.SPRT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.SPRT1.",
        "x": 18.371,
        "y": -7.6,
        "size": [
          3,
          2
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-sprt2",
        "number": "EINK2.SPRT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.SPRT2.",
        "x": 18.371,
        "y": 7.51,
        "size": [
          3,
          2
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-1",
        "number": "EINK2.1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.1.",
        "x": 15.911,
        "y": -5.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-2",
        "number": "EINK2.2",
        "label": "GDR",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: GDR. Physical source contact EINK2.2.",
        "x": 15.911,
        "y": -5.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-3",
        "number": "EINK2.3",
        "label": "RESE",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESE. Physical source contact EINK2.3.",
        "x": 15.911,
        "y": -4.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-4",
        "number": "EINK2.4",
        "label": "VGL/NC",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$13. Physical source contact EINK2.4.",
        "x": 15.911,
        "y": -4.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-5",
        "number": "EINK2.5",
        "label": "VSH2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$8. Physical source contact EINK2.5.",
        "x": 15.911,
        "y": -3.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-6",
        "number": "EINK2.6",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.6.",
        "x": 15.911,
        "y": -3.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-7",
        "number": "EINK2.7",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact EINK2.7.",
        "x": 15.911,
        "y": -2.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-8",
        "number": "EINK2.8",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.8.",
        "x": 15.911,
        "y": -2.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-9",
        "number": "EINK2.9",
        "label": "EPD_BUSY",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_BUSY. Physical source contact EINK2.9.",
        "x": 15.911,
        "y": -1.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-10",
        "number": "EINK2.10",
        "label": "EPD_RST",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_RST. Physical source contact EINK2.10.",
        "x": 15.911,
        "y": -1.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-11",
        "number": "EINK2.11",
        "label": "EPD_DC",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_DC. Physical source contact EINK2.11.",
        "x": 15.911,
        "y": -0.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-12",
        "number": "EINK2.12",
        "label": "EPD_CS",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_CS. Physical source contact EINK2.12.",
        "x": 15.911,
        "y": -0.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-13",
        "number": "EINK2.13",
        "label": "EPD_SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_SCK. Physical source contact EINK2.13.",
        "x": 15.911,
        "y": 0.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-14",
        "number": "EINK2.14",
        "label": "EPD_MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: EPD_MOSI. Physical source contact EINK2.14.",
        "x": 15.911,
        "y": 0.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-15",
        "number": "EINK2.15",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact EINK2.15.",
        "x": 15.911,
        "y": 1.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-16",
        "number": "EINK2.16",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact EINK2.16.",
        "x": 15.911,
        "y": 1.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-17",
        "number": "EINK2.17",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact EINK2.17.",
        "x": 15.911,
        "y": 2.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-18",
        "number": "EINK2.18",
        "label": "VDD",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$9. Physical source contact EINK2.18.",
        "x": 15.911,
        "y": 2.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-19",
        "number": "EINK2.19",
        "label": "VPP",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$14. Physical source contact EINK2.19.",
        "x": 15.911,
        "y": 3.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-20",
        "number": "EINK2.20",
        "label": "VSH1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$10. Physical source contact EINK2.20.",
        "x": 15.911,
        "y": 3.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-21",
        "number": "EINK2.21",
        "label": "VGH",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VGH. Physical source contact EINK2.21.",
        "x": 15.911,
        "y": 4.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-22",
        "number": "EINK2.22",
        "label": "VSL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$27. Physical source contact EINK2.22.",
        "x": 15.911,
        "y": 4.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-23",
        "number": "EINK2.23",
        "label": "VGL",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: VGL. Physical source contact EINK2.23.",
        "x": 15.911,
        "y": 5.25,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      },
      {
        "id": "eink2-24",
        "number": "EINK2.24",
        "label": "VCOM",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: N$33. Physical source contact EINK2.24.",
        "x": 15.911,
        "y": 5.75,
        "size": [
          1.25,
          0.275
        ],
        "shape": "rect",
        "connector": "EINK2",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-26.6065\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.478\" y=\"-10.874\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.411\" y=\"-7.1\" width=\"3.75\" height=\"14.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6115\" y=\"-2.23\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.4355\" y=\"-8.1435\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.525\" y=\"0.794\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.2225\" y=\"-8.477\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.625\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.975\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.172\" y=\"-0.8015\" width=\"2.5\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.159\" y=\"-5.8269\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.3281\" y=\"0.255\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.4086\" y=\"-7.0104\" width=\"3.3448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.054\" y=\"-6.2104\" width=\"2.075\" height=\"1.575\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.335\" y=\"-9.8995\" width=\"1.3\" height=\"2.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.3098\" y=\"5.2325\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.65\" y=\"-0.9365\" width=\"1.4\" height=\"2.0\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.541\" y=\"5.015\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.239\" y=\"5.015\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1435\" y=\"6.539\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.32\" y=\"5.6325\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3805\" y=\"-6.3925\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.89\" y=\"-0.8505\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.436\" y=\"2.9845\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.9468\" y=\"-2.3241\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.319\" y=\"-4.216\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.319\" y=\"-2.438\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.837\" y=\"-7.8628\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.5575\" y=\"-1.3585\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.109\" y=\"-2.6135\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.1855\" y=\"-6.833\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Feather RP2040 ThinkInk.brd",
      "boardSha256": "5702e41aac6270feeaabf95d12437fc62eef8b5438358c67177539be5a3344b0",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "JP3",
        "X6",
        "TP3",
        "CONN1",
        "D+1",
        "D-1",
        "EINK2"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$31",
          "x": -22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": -22.86,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-Feather-RP2040-ThinkInk",
      "commit": "d58fe34ce514708b82d5a25def954bce635c4c8f",
      "boardURL": "https://github.com/adafruit/Adafruit-Feather-RP2040-ThinkInk/blob/d58fe34ce514708b82d5a25def954bce635c4c8f/Adafruit%20Feather%20RP2040%20ThinkInk.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Feather-RP2040-ThinkInk/blob/d58fe34ce514708b82d5a25def954bce635c4c8f/Adafruit%20Feather%20RP2040%20ThinkInk.sch",
      "schematicSha256": "823ffee044c4dadc4687099e94ee112780f03b738d0a330f22418241e21326fe",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Feather-RP2040-ThinkInk/blob/d58fe34ce514708b82d5a25def954bce635c4c8f/license.txt",
      "sourceArchiveSha256": "859b48f48d197db366b8dbb4eeff6ffab8b8d7b8c8ff017e1402646b5040a317",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "One non-panel XML board in the product repository after archive/production filtering.",
      "resolvedSourceWarnings": [],
      "completenessReview": {
        "extraConnectorRefs": [],
        "excludedBondedDisplayComponents": [],
        "addedContacts": [],
        "excludedMechanicalPads": [],
        "sourceAliasEvidence": [
          {
            "number": "EINK2.4",
            "net": "N$13",
            "sourceConnectorFunctions": [
              "VGL/NC"
            ]
          },
          {
            "number": "EINK2.5",
            "net": "N$8",
            "sourceConnectorFunctions": [
              "VSH2"
            ]
          },
          {
            "number": "EINK2.18",
            "net": "N$9",
            "sourceConnectorFunctions": [
              "VDD"
            ]
          },
          {
            "number": "EINK2.19",
            "net": "N$14",
            "sourceConnectorFunctions": [
              "VPP"
            ]
          },
          {
            "number": "EINK2.20",
            "net": "N$10",
            "sourceConnectorFunctions": [
              "VSH1"
            ]
          },
          {
            "number": "EINK2.22",
            "net": "N$27",
            "sourceConnectorFunctions": [
              "VSL"
            ]
          },
          {
            "number": "EINK2.24",
            "net": "N$33",
            "sourceConnectorFunctions": [
              "VCOM"
            ]
          }
        ],
        "reviewWarnings": [],
        "sourceWarnings": []
      }
    }
  },
  "adafruit-module-5724": {
    "contacts": [
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "D4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D4. Physical source contact JP1.1.",
        "x": 19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-2",
        "number": "JP1.2",
        "label": "TX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: TX. Physical source contact JP1.2.",
        "x": 16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-3",
        "number": "JP1.3",
        "label": "RX",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RX. Physical source contact JP1.3.",
        "x": 13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-4",
        "number": "JP1.4",
        "label": "MISO",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MISO. Physical source contact JP1.4.",
        "x": 11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-5",
        "number": "JP1.5",
        "label": "MOSI",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: MOSI. Physical source contact JP1.5.",
        "x": 8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-6",
        "number": "JP1.6",
        "label": "SCK",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCK. Physical source contact JP1.6.",
        "x": 6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-7",
        "number": "JP1.7",
        "label": "D25",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D25. Physical source contact JP1.7.",
        "x": 3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-8",
        "number": "JP1.8",
        "label": "D24",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D24. Physical source contact JP1.8.",
        "x": 1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-9",
        "number": "JP1.9",
        "label": "A3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A3. Physical source contact JP1.9.",
        "x": -1.27,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-10",
        "number": "JP1.10",
        "label": "A2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A2. Physical source contact JP1.10.",
        "x": -3.81,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "A1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A1. Physical source contact JP1.11.",
        "x": -6.35,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-12",
        "number": "JP1.12",
        "label": "A0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: A0. Physical source contact JP1.12.",
        "x": -8.89,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-13",
        "number": "JP1.13",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact JP1.13.",
        "x": -11.43,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-14",
        "number": "JP1.14",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.14.",
        "x": -13.97,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-15",
        "number": "JP1.15",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact JP1.15.",
        "x": -16.51,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp1-16",
        "number": "JP1.16",
        "label": "!RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: !RESET. Physical source contact JP1.16.",
        "x": -19.05,
        "y": 10.16,
        "size": [
          1.6764,
          1.6764
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1
      },
      {
        "id": "x1-1",
        "number": "X1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.1.",
        "x": -15.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-2",
        "number": "X1.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact X1.2.",
        "x": -13.478,
        "y": -4.174,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "jp3-1",
        "number": "JP3.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP3.1.",
        "x": -8.89,
        "y": -10.2235,
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
        "label": "EN",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: EN. Physical source contact JP3.2.",
        "x": -6.35,
        "y": -10.2235,
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
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP3.3.",
        "x": -3.81,
        "y": -10.2235,
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
        "label": "D13",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D13. Physical source contact JP3.4.",
        "x": -1.27,
        "y": -10.2235,
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
        "label": "D12",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D12. Physical source contact JP3.5.",
        "x": 1.27,
        "y": -10.2235,
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
        "id": "jp3-6",
        "number": "JP3.6",
        "label": "D11",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D11. Physical source contact JP3.6.",
        "x": 3.81,
        "y": -10.2235,
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
        "id": "jp3-7",
        "number": "JP3.7",
        "label": "D10",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D10. Physical source contact JP3.7.",
        "x": 6.35,
        "y": -10.2235,
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
        "id": "jp3-8",
        "number": "JP3.8",
        "label": "D9",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D9. Physical source contact JP3.8.",
        "x": 8.89,
        "y": -10.2235,
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
        "id": "jp3-9",
        "number": "JP3.9",
        "label": "D6",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D6. Physical source contact JP3.9.",
        "x": 11.43,
        "y": -10.2235,
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
        "id": "jp3-10",
        "number": "JP3.10",
        "label": "D5",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: D5. Physical source contact JP3.10.",
        "x": 13.97,
        "y": -10.2235,
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
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact JP3.11.",
        "x": 16.51,
        "y": -10.2235,
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
        "id": "jp3-12",
        "number": "JP3.12",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact JP3.12.",
        "x": 19.05,
        "y": -10.2235,
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
        "id": "x6-m3",
        "number": "X6.M3",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M3.",
        "x": -24.0065,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m4",
        "number": "X6.M4",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M4.",
        "x": -24.0065,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m2",
        "number": "X6.M2",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M2.",
        "x": -19.8265,
        "y": 4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-m1",
        "number": "X6.M1",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.M1.",
        "x": -19.8265,
        "y": -4.32,
        "size": [
          2,
          1
        ],
        "shape": "oval",
        "connector": "X6",
        "back": false,
        "drill": 0.6
      },
      {
        "id": "x6-a1b12",
        "number": "X6.A1B12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.A1B12.",
        "x": -19.2515,
        "y": -3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a4b9",
        "number": "X6.A4B9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.A4B9.",
        "x": -19.2515,
        "y": -2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b8",
        "number": "X6.B8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.B8.",
        "x": -19.2515,
        "y": -1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a5",
        "number": "X6.A5",
        "label": "CC1",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC1. Physical source contact X6.A5.",
        "x": -19.2515,
        "y": -1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b7",
        "number": "X6.B7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.B7.",
        "x": -19.2515,
        "y": -0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a6",
        "number": "X6.A6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.A6.",
        "x": -19.2515,
        "y": -0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a7",
        "number": "X6.A7",
        "label": "USB_D-",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D-. Physical source contact X6.A7.",
        "x": -19.2515,
        "y": 0.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b6",
        "number": "X6.B6",
        "label": "USB_D+",
        "type": "input",
        "description": "Input to the onboard circuit according to the manufacturer schematic. CAD net: USB_D+. Physical source contact X6.B6.",
        "x": -19.2515,
        "y": 0.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-a8",
        "number": "X6.A8",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact X6.A8.",
        "x": -19.2515,
        "y": 1.25,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b5",
        "number": "X6.B5",
        "label": "CC2",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: CC2. Physical source contact X6.B5.",
        "x": -19.2515,
        "y": 1.75,
        "size": [
          1.15,
          0.275
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b4a9",
        "number": "X6.B4A9",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact X6.B4A9.",
        "x": -19.2515,
        "y": 2.4,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "x6-b1a12",
        "number": "X6.B1A12",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X6.B1A12.",
        "x": -19.2515,
        "y": 3.2,
        "size": [
          1.15,
          0.575
        ],
        "shape": "rect",
        "connector": "X6",
        "back": false,
        "smd": true
      },
      {
        "id": "tp3-p-1",
        "number": "TP3.P$1",
        "label": "USBBOOT",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: USBBOOT. Physical source contact TP3.P$1.",
        "x": -13.97,
        "y": 6.35,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "conn1-2",
        "number": "CONN1.2",
        "label": "+3V3",
        "type": "power_out",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_out. CAD net: +3V3. Physical source contact CONN1.2.",
        "x": 8.6075,
        "y": -4.3895,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-3",
        "number": "CONN1.3",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SDA. I2C serial data / source-listed alternate function. Physical source contact CONN1.3.",
        "x": 8.6075,
        "y": -5.3895,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-1",
        "number": "CONN1.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.1.",
        "x": 8.6075,
        "y": -3.3895,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-4",
        "number": "CONN1.4",
        "label": "SCL",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: SCL. I2C serial clock / source-listed alternate function. Physical source contact CONN1.4.",
        "x": 8.6075,
        "y": -6.3895,
        "size": [
          1.55,
          0.6
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "neopix1-1",
        "number": "NEOPIX1.1",
        "label": "CAN_L",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAN_L. Physical source contact NEOPIX1.1.",
        "x": 21.59,
        "y": -3.754,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "NEOPIX1",
        "back": false,
        "drill": 1
      },
      {
        "id": "neopix1-2",
        "number": "NEOPIX1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact NEOPIX1.2.",
        "x": 21.59,
        "y": -0.254,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "NEOPIX1",
        "back": false,
        "drill": 1
      },
      {
        "id": "neopix1-3",
        "number": "NEOPIX1.3",
        "label": "CAN_H",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: CAN_H. Physical source contact NEOPIX1.3.",
        "x": 21.59,
        "y": 3.246,
        "size": [
          2.1844,
          2.1844
        ],
        "shape": "circle",
        "connector": "NEOPIX1",
        "back": false,
        "drill": 1
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "5V_SHDN",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: 5V_SHDN. Physical source contact JP2.1.",
        "x": 15.621,
        "y": -3.302,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "dplus1-tp",
        "number": "D+1.TP",
        "label": "USB_D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D+. Physical source contact D+1.TP.",
        "x": -23.9395,
        "y": 1.2065,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D+1",
        "back": true,
        "smd": true
      },
      {
        "id": "d-1-tp",
        "number": "D-1.TP",
        "label": "USB_D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: USB_D-. Physical source contact D-1.TP.",
        "x": -24.003,
        "y": -1.397,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "D-1",
        "back": true,
        "smd": true
      },
      {
        "id": "x1-nc1",
        "number": "X1.NC1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC1.",
        "x": -17.878,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "x1-nc2",
        "number": "X1.NC2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact X1.NC2.",
        "x": -11.078,
        "y": -9.374,
        "size": [
          1.6,
          3.4
        ],
        "shape": "rect",
        "connector": "X1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt1",
        "number": "CONN1.MT1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT1.",
        "x": 6.0593,
        "y": -7.6895,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      },
      {
        "id": "conn1-mt2",
        "number": "CONN1.MT2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CONN1.MT2.",
        "x": 6.0593,
        "y": -2.0895,
        "size": [
          1.8,
          1.2
        ],
        "shape": "rect",
        "connector": "CONN1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"18.19\" y=\"-5.504\" width=\"7.0\" height=\"10.5\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.6065\" y=\"-4.47\" width=\"7.35\" height=\"8.94\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.478\" y=\"-10.874\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.6115\" y=\"-2.23\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.022\" y=\"0.0861\" width=\"5.7984\" height=\"5.7968\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.4355\" y=\"-7.8895\" width=\"2.9\" height=\"6.1\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.2225\" y=\"-8.477\" width=\"4.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.625\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.975\" y=\"4.8246\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.973\" y=\"-1.3095\" width=\"2.5\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.172\" y=\"-0.8015\" width=\"2.5\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.018\" y=\"5.842\" width=\"3.302\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.159\" y=\"-5.8269\" width=\"3.3\" height=\"1.8604\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.3281\" y=\"0.255\" width=\"1.8604\" height=\"3.3\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"12.0755\" y=\"-5.8265\" width=\"2.9\" height=\"1.62\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.5161\" y=\"-0.5969\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.054\" y=\"-6.2104\" width=\"2.075\" height=\"1.575\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.335\" y=\"-9.8995\" width=\"1.3\" height=\"2.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.0558\" y=\"5.2325\" width=\"1.8\" height=\"1.6\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1435\" y=\"6.539\" width=\"2.0\" height=\"1.4\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.32\" y=\"5.6325\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3805\" y=\"-6.3925\" width=\"1.625\" height=\"0.8\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.707\" y=\"4.8895\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.3255\" y=\"-5.6515\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.9468\" y=\"-2.3241\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.049\" y=\"-2.7555\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.837\" y=\"-7.8628\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.5575\" y=\"-1.3585\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.109\" y=\"-2.6135\" width=\"0.762\" height=\"1.32\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit RP2040 CAN Bus Feather.brd",
      "boardSha256": "82b9bb40d4a481c963d05f25e61a36584e35eac0eecb9046bb0f9c888fd7c516",
      "sourceBounds": [
        0,
        0,
        50.8,
        22.86
      ],
      "selectedConnectors": [
        "JP1",
        "X1",
        "JP3",
        "X6",
        "TP3",
        "CONN1",
        "NEOPIX1",
        "JP2",
        "D+1",
        "D-1"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$31",
          "x": -22.86,
          "y": -8.89,
          "drill": 2.5
        },
        {
          "sourceRef": "U$32",
          "x": -22.86,
          "y": 8.89,
          "drill": 2.5
        }
      ],
      "repo": "adafruit/Adafruit-RP2040-CAN-Bus-Feather-PCB",
      "commit": "499de161e9d106e530be5ba1aa09a756c38a31ba",
      "boardURL": "https://github.com/adafruit/Adafruit-RP2040-CAN-Bus-Feather-PCB/blob/499de161e9d106e530be5ba1aa09a756c38a31ba/Adafruit%20RP2040%20CAN%20Bus%20Feather.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-RP2040-CAN-Bus-Feather-PCB/blob/499de161e9d106e530be5ba1aa09a756c38a31ba/Adafruit%20RP2040%20CAN%20Bus%20Feather.sch",
      "schematicSha256": "ccd4509c59ddcd2319ea6e7ca7d6906562c12120e8ebba28a63496640de6304d",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-RP2040-CAN-Bus-Feather-PCB/blob/499de161e9d106e530be5ba1aa09a756c38a31ba/license.txt",
      "sourceArchiveSha256": "006949467ebdcd57afc60c6d40d30426f3f82f48e83982c2903f2ab370987a3a",
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
  "adafruit-module-1500": {
    "contacts": [
      {
        "id": "cn3-1",
        "number": "CN3.1",
        "label": "RESET",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: RESET. Physical source contact CN3.1.",
        "x": -6.35,
        "y": 7.239,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn3-2",
        "number": "CN3.2",
        "label": "B3",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B3. Physical source contact CN3.2.",
        "x": -6.35,
        "y": 4.699,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn3-3",
        "number": "CN3.3",
        "label": "B4",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B4. Physical source contact CN3.3.",
        "x": -6.35,
        "y": 2.159,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn3-4",
        "number": "CN3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN3.4.",
        "x": -6.35,
        "y": -0.381,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN3",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn4-1",
        "number": "CN4.1",
        "label": "+3V3",
        "type": "power_out",
        "description": "Generated regulator supply output. The matching source schematic connects IC2.VOUT to this rail. CAD net: +3V3. Physical source contact CN4.1.",
        "x": 6.35,
        "y": 7.239,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn4-2",
        "number": "CN4.2",
        "label": "B2",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B2. Physical source contact CN4.2.",
        "x": 6.35,
        "y": 4.699,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn4-3",
        "number": "CN4.3",
        "label": "B1",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B1. Physical source contact CN4.3.",
        "x": 6.35,
        "y": 2.159,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn4-4",
        "number": "CN4.4",
        "label": "B0",
        "type": "bidirectional",
        "description": "Bidirectional schematic signal; use the linked board pinout for alternate functions and voltage limits. CAD net: B0. Physical source contact CN4.4.",
        "x": 6.35,
        "y": -0.381,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "CN4",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp1-1",
        "number": "JP1.1",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact JP1.1.",
        "x": 6.35,
        "y": -2.921,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "jp2-1",
        "number": "JP2.1",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact JP2.1.",
        "x": -6.35,
        "y": -2.921,
        "size": [
          1.778,
          1.778
        ],
        "shape": "circle",
        "connector": "JP2",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "cn1-gnd2",
        "number": "CN1.GND2",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND2.",
        "x": 4.4,
        "y": -7.676,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-vbus",
        "number": "CN1.VBUS",
        "label": "VBUS",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBUS. Physical source contact CN1.VBUS.",
        "x": 1.6,
        "y": -7.112,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-d-",
        "number": "CN1.D-",
        "label": "D-",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D-. Physical source contact CN1.D-.",
        "x": 0.8,
        "y": -7.112,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-dplus",
        "number": "CN1.D+",
        "label": "D+",
        "type": "passive",
        "description": "Passive circuit terminal; it is not an assumed digital GPIO. CAD net: D+. Physical source contact CN1.D+.",
        "x": 0,
        "y": -7.112,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-id",
        "number": "CN1.ID",
        "label": "NC",
        "type": "no_connect",
        "description": "Not connected in this exact manufacturer schematic. CAD net: unconnected. Physical source contact CN1.ID.",
        "x": -0.8,
        "y": -7.112,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd",
        "number": "CN1.GND",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND.",
        "x": -1.6,
        "y": -7.112,
        "size": [
          0.5,
          2.308
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd1",
        "number": "CN1.GND1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND1.",
        "x": 4.4,
        "y": -13.176,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd3",
        "number": "CN1.GND3",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND3.",
        "x": -4.4,
        "y": -7.676,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "cn1-gnd4",
        "number": "CN1.GND4",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact CN1.GND4.",
        "x": -4.4,
        "y": -13.176,
        "size": [
          2,
          2.4
        ],
        "shape": "rect",
        "connector": "CN1",
        "back": false,
        "smd": true
      },
      {
        "id": "bat-1",
        "number": "BAT.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common ground / supply return in the manufacturer schematic. CAD net: GND. Physical source contact BAT.1.",
        "x": 1,
        "y": -7.603,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "BAT",
        "back": true,
        "smd": true
      },
      {
        "id": "bat-2",
        "number": "BAT.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Board supply rail; use the exact manufacturer power-path diagram and operating range. Schematic source direction: power_in. CAD net: VBAT. Physical source contact BAT.2.",
        "x": -1,
        "y": -7.603,
        "size": [
          1,
          4.6
        ],
        "shape": "rect",
        "connector": "BAT",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-5.05\" y=\"-15.776\" width=\"10.13\" height=\"9.2\" rx=\".12\" fill=\"#aebcb6\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.489\" y=\"3.088\" width=\"5.2\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.989\" y=\"10.1586\" width=\"4.2\" height=\"3.0508\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.4704\" y=\"-1.803\" width=\"1.62\" height=\"2.844\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.35\" y=\"-4.9822\" width=\"1.65\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.127\" y=\"-5.033\" width=\"1.65\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.902\" y=\"-7.783\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.052\" y=\"-7.656\" width=\"1.15\" height=\"1.85\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.134\" y=\"10.795\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.134\" y=\"0.254\" width=\"1.32\" height=\"0.762\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.07\" y=\"-4.039\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.978\" y=\"-4.039\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.546\" y=\"-4.039\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.375\" y=\"7.264\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.375\" y=\"3.835\" width=\"0.851\" height=\"0.712\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-4.0\" y=\"-14.303\" width=\"8.0\" height=\"7.5\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "format": "EAGLE XML",
      "boardFile": "Adafruit Trinket 3.3V.brd",
      "boardSha256": "f0b34b7eb81064aca6b893dd5bfb28eba59a6de152519c6ea6d10c8cb5c7265a",
      "sourceBounds": [
        -7.62,
        -13.97,
        7.62,
        15.748
      ],
      "selectedConnectors": [
        "CN3",
        "CN4",
        "JP1",
        "JP2",
        "CN1",
        "BAT"
      ],
      "reviewWarnings": [],
      "roleReview": [],
      "pinOverrides": [
        {
          "number": "CN4.1",
          "sourceNet": "+3V3",
          "before": {
            "type": "power_in",
            "label": "+3V3"
          },
          "after": {
            "type": "power_out",
            "label": "+3V3"
          },
          "reason": "Regulator output pin and device function take precedence over erroneous generic EAGLE pwr/io direction tags.",
          "connectedSourcePins": [
            {
              "part": "IC2",
              "pin": "VOUT",
              "direction": "io"
            },
            {
              "part": "R4",
              "pin": "2",
              "direction": "pas"
            },
            {
              "part": "C8",
              "pin": "1",
              "direction": "pas"
            },
            {
              "part": "IC3",
              "pin": "VCC",
              "direction": "io"
            },
            {
              "part": "R3",
              "pin": "2",
              "direction": "pas"
            }
          ],
          "schematicArtifact": "/tmp/wirepad-modules-adafruit-sparkfun/adafruit-cad/Adafruit-Trinket-PCB/Adafruit Trinket 3.3V.sch"
        }
      ],
      "mechanicalMountingHoles": [
        {
          "sourceRef": "U$8",
          "x": -5.715,
          "y": 11.049,
          "drill": 2.2
        },
        {
          "sourceRef": "U$9",
          "x": 5.715,
          "y": 11.049,
          "drill": 2.2
        }
      ],
      "repo": "adafruit/Adafruit-Trinket-PCB",
      "commit": "3a2695463e52f72434d20daca6502fc62e8e2fcc",
      "boardURL": "https://github.com/adafruit/Adafruit-Trinket-PCB/blob/3a2695463e52f72434d20daca6502fc62e8e2fcc/Adafruit%20Trinket%203.3V.brd",
      "schematicURL": "https://github.com/adafruit/Adafruit-Trinket-PCB/blob/3a2695463e52f72434d20daca6502fc62e8e2fcc/Adafruit%20Trinket%203.3V.sch",
      "schematicSha256": "b26a5d99caa7515001b5fe315978942e2a8267df3f96978e9f84c076a2dbc1f4",
      "attribution": "Adafruit Industries",
      "license": "CC-BY-SA-3.0",
      "licenseURL": "https://github.com/adafruit/Adafruit-Trinket-PCB/blob/3a2695463e52f72434d20daca6502fc62e8e2fcc/license.txt",
      "sourceArchiveSha256": "d18230873ef2b4ab819d74d94a298bb1c1a20df8a5b0b841d48b185ee183afd0",
      "review": "Exact connector package references, pads, rotated/mirrored coordinates and nets are source-derived. Active pin roles follow schematic device directions, with explicit passive pass-through and exceptional function reviews. Decorative logos and copied silkscreen/copper art are omitted; simplified original package primitives show source component positions.",
      "variantReview": "Exact product variant Adafruit Trinket 3.3V.brd selected explicitly; other model sizes, sensor ICs, voltage variants and superseded original drawings in the same repository are excluded.",
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
