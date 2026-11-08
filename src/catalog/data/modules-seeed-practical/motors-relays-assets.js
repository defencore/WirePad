// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-grove-latching-relay-103020010": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: SIG.",
        "x": -16.51,
        "y": -3,
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
        "description": "Unused source contact; leave open. Source net: NC.",
        "x": -16.51,
        "y": -1,
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
        "description": "4.7–5.3 V module supply input. Source net: VCC.",
        "x": -16.51,
        "y": 1,
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
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -16.51,
        "y": 3,
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
        "id": "j2-1",
        "number": "J2.1",
        "label": "COM1",
        "type": "passive",
        "description": "Isolated relay load contact: COM1. This is not a logic supply/ground node. Source net: COM1.",
        "x": 13.335,
        "y": -12.827,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "NC1",
        "type": "passive",
        "description": "Isolated relay load contact: NC1. This is not a logic supply/ground node. Source net: NC1.",
        "x": 13.335,
        "y": -7.747,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "NO1",
        "type": "passive",
        "description": "Isolated relay load contact: NO1. This is not a logic supply/ground node. Source net: NO1.",
        "x": 13.335,
        "y": -2.667,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "COM2",
        "type": "passive",
        "description": "Isolated relay load contact: COM2. This is not a logic supply/ground node. Source net: COM2.",
        "x": 13.335,
        "y": 12.827,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "NC2",
        "type": "passive",
        "description": "Isolated relay load contact: NC2. This is not a logic supply/ground node. Source net: NC2.",
        "x": 13.335,
        "y": 7.747,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "NO2",
        "type": "passive",
        "description": "Isolated relay load contact: NO2. This is not a logic supply/ground node. Source net: NO2.",
        "x": 13.335,
        "y": 2.667,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "p1-mm",
        "number": "P1.MM",
        "label": "SIG",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: SIG.",
        "x": -15.367,
        "y": -16.383,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-00",
        "number": "P1.00",
        "label": "CH1",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: CH1.",
        "x": -16.637,
        "y": -16.383,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      },
      {
        "id": "p1-11",
        "number": "P1.11",
        "label": "CH2",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: CH2.",
        "x": -14.097,
        "y": -16.383,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "P1",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-11.37\" y=\"-5.1\" width=\"20.2\" height=\"10.2\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.271\" y=\"-15.494\" width=\"8.128\" height=\"15.494\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.271\" y=\"-0.0\" width=\"8.128\" height=\"15.494\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.31\" y=\"-5.0\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.716\" y=\"-9.017\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.304\" y=\"-14.986\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.526\" y=\"-9.017\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.5664\" y=\"6.8326\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.5514\" y=\"13.9446\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.0264\" y=\"-16.6624\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.8364\" y=\"13.9446\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.1704\" y=\"-15.0114\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.5344\" y=\"6.8326\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.4404\" y=\"-18.8214\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.3924\" y=\"-9.6774\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.5824\" y=\"-9.6774\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.2085\" y=\"11.049\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.7955\" y=\"-12.827\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.0335\" y=\"11.049\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.4935\" y=\"-12.827\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.05\" y=\"-8.636\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.415\" y=\"18.161\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.415\" y=\"16.51\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-17.145\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.43\" y=\"-17.145\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.907\" y=\"-17.145\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"5.715\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-14.732\" y=\"-15.494\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.43\" y=\"-15.494\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.906\" y=\"-8.636\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.382\" y=\"-8.636\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.907\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.907\" y=\"5.715\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.1765\" y=\"18.161\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.1765\" y=\"16.51\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-17.399\" y=\"-17.145\" width=\"4.064\" height=\"1.524\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 2-Coil Latching Relay v1.brd",
      "boardSha256": "4f9deb0bb5c782d91cf6724b121ef181a3612e23d9e21c4f60f86d403d22c4d4",
      "sourceBounds": [
        -22.1,
        -22.1,
        22.1,
        22.1
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "P1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-relay-103020005": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "ON",
        "type": "passive",
        "description": "Isolated relay load contact: normally open. This is not a logic supply/ground node. Source net: ON.",
        "x": -6.577,
        "y": 4.495,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "COM",
        "type": "passive",
        "description": "Isolated relay load contact: COM. This is not a logic supply/ground node. Source net: COM.",
        "x": -10.133,
        "y": 4.495,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.016
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "D1",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: D1.",
        "x": -16.5846,
        "y": 3.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": -16.5846,
        "y": 1.05,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input. Source net: VCC.",
        "x": -16.5846,
        "y": -0.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -16.5846,
        "y": -2.95,
        "size": [
          1.27,
          1.27
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sig-t",
        "number": "SIG.T",
        "label": "D1",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: D1.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SIG",
        "back": true,
        "smd": true
      },
      {
        "id": "no-t",
        "number": "NO.T",
        "label": "ON",
        "type": "passive",
        "description": "Isolated relay load contact: normally open. This is not a logic supply/ground node. Source net: ON.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "NO",
        "back": true,
        "smd": true
      },
      {
        "id": "com-t",
        "number": "COM.T",
        "label": "COM",
        "type": "passive",
        "description": "Isolated relay load contact: COM. This is not a logic supply/ground node. Source net: COM.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "COM",
        "back": true,
        "smd": true
      },
      {
        "id": "nc-t",
        "number": "NC.T",
        "label": "OFF",
        "type": "passive",
        "description": "Isolated relay load contact: normally closed. This is not a logic supply/ground node. Source net: N$3.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "NC",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-3.529\" y=\"-8.6495\" width=\"21.59\" height=\"17.272\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.165\" y=\"0.685\" width=\"7.62\" height=\"7.62\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.7846\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.695\" y=\"-2.9345\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.8404\" y=\"-3.7854\" width=\"1.3208\" height=\"3.3528\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.4947\" y=\"-8.2558\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.752\" y=\"-5.03\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.927\" y=\"-5.03\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.863\" y=\"-2.744\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.815\" y=\"-8.205\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.8635\" y=\"-7.443\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Relay v1.2.brd",
      "boardSha256": "f5944dd07a506adeb631c7bc10b630e9a80af20191514cb8063f69841a9bd7a2",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "GND",
        "VCC",
        "SIG",
        "NO",
        "COM",
        "NC",
        "TP1",
        "TP2"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-m281-relay-101020603": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "CTR",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: CTR.",
        "x": -10.795,
        "y": 3.05,
        "size": [
          2.74,
          1.01
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
        "description": "Unused source contact; leave open. Source net: NC.",
        "x": -10.795,
        "y": 1.05,
        "size": [
          2.74,
          1.01
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
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.795,
        "y": -0.95,
        "size": [
          2.74,
          1.01
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
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -10.795,
        "y": -2.95,
        "size": [
          2.74,
          1.01
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
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -18.295,
        "y": 5.45,
        "size": [
          3,
          1.5
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
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -18.295,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "CTR",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: CTR.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Unused source contact; leave open. Source net: NC.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP3",
        "back": true,
        "smd": true
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.515,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "First isolated M281 photorelay load terminal; distinct from logic supply/ground. Source net: N$2.",
        "x": 14.378,
        "y": -2.704,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Second isolated M281 photorelay load terminal; distinct from logic supply/ground. Source net: N$3.",
        "x": 14.378,
        "y": 2.296,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      }
    ],
    "artwork": "<rect x=\"-20.095\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.314\" y=\"-5.411\" width=\"8.128\" height=\"11.014\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.1385\" y=\"-2.404\" width=\"4.445\" height=\"4.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.497\" y=\"-1.1565\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.4815\" y=\"-9.221\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.672\" y=\"-4.268\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.021\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.021\" y=\"-2.871\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.672\" y=\"-1.093\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.577\" y=\"-1.093\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove-Optocoupler Relay (M281).brd",
      "boardSha256": "e4150b15f30ec339c271da5317c376c8e97d86bd04e62b2631fb4ed26071b638",
      "sourceBounds": [
        -20.635,
        -10.199999999999998,
        19.565,
        10.300000000000002
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-spdt-relay-2ch-103020132": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG1",
        "type": "input",
        "description": "Relay channel control input to the onboard transistor driver. Source net: SIG1.",
        "x": -16.51,
        "y": 1.73,
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
        "label": "SIG2",
        "type": "input",
        "description": "Relay channel control input to the onboard transistor driver. Source net: SIG2.",
        "x": -16.51,
        "y": -0.27,
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
        "description": "5 V module supply input. Source net: VCC.",
        "x": -16.51,
        "y": -2.27,
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
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -16.51,
        "y": -4.27,
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
        "id": "j4-1",
        "number": "J4.1",
        "label": "NC1",
        "type": "passive",
        "description": "Isolated relay load contact: NC1. This is not a logic supply/ground node. Source net: NC1.",
        "x": 14.478,
        "y": -14.605,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "COM1",
        "type": "passive",
        "description": "Isolated relay load contact: COM1. This is not a logic supply/ground node. Source net: COM1.",
        "x": 14.478,
        "y": -9.525,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "NO1",
        "type": "passive",
        "description": "Isolated relay load contact: NO1. This is not a logic supply/ground node. Source net: NO1.",
        "x": 14.478,
        "y": -4.445,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "NC2",
        "type": "passive",
        "description": "Isolated relay load contact: NC2. This is not a logic supply/ground node. Source net: NC2.",
        "x": 14.478,
        "y": 3.81,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "COM2",
        "type": "passive",
        "description": "Isolated relay load contact: COM2. This is not a logic supply/ground node. Source net: COM2.",
        "x": 14.478,
        "y": 8.89,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "NO2",
        "type": "passive",
        "description": "Isolated relay load contact: NO2. This is not a logic supply/ground node. Source net: NO2.",
        "x": 14.478,
        "y": 13.97,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "gnd-t",
        "number": "GND.T",
        "label": "SIG1",
        "type": "input",
        "description": "Relay channel control input to the onboard transistor driver. Source net: SIG1.",
        "x": -18.923,
        "y": 3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd1-t",
        "number": "GND1.T",
        "label": "SIG2",
        "type": "input",
        "description": "Relay channel control input to the onboard transistor driver. Source net: SIG2.",
        "x": -18.923,
        "y": 1.27,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND1",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd2-t",
        "number": "GND2.T",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net: VCC.",
        "x": -18.923,
        "y": -4.445,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND2",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd3-t",
        "number": "GND3.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -18.923,
        "y": -6.985,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND3",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-10.312\" y=\"1.14\" width=\"19.1\" height=\"15.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.312\" y=\"-17.275\" width=\"19.1\" height=\"15.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.414\" y=\"1.143\" width=\"8.128\" height=\"15.494\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.414\" y=\"-17.272\" width=\"8.128\" height=\"15.494\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.71\" y=\"-6.27\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.6624\" y=\"10.0076\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.2814\" y=\"-17.0434\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.24\" y=\"16.4465\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.24\" y=\"-10.6045\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"-18.923\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.494\" y=\"5.207\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"14.859\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.494\" y=\"8.255\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.494\" y=\"6.731\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"13.335\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"11.811\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"-15.24\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"-13.716\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"-12.192\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.3515\" y=\"6.731\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.3515\" y=\"5.207\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 2-Channel SPDT Relay.brd",
      "boardSha256": "ef2434ab1bc01a9ed8e8d7e728db3e7a9db07aaac03656ac5ae0096663c91a5e",
      "sourceBounds": [
        -22.1,
        -22.1,
        22.1,
        22.1
      ],
      "selectedConnectors": [
        "J1",
        "J4",
        "J2",
        "GND",
        "GND1",
        "GND2",
        "GND3"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-spdt-relay-4ch-103020133": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "NC1",
        "type": "passive",
        "description": "Isolated relay load contact: NC1. This is not a logic supply/ground node. Source net: NC1.",
        "x": -45.085,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "COM1",
        "type": "passive",
        "description": "Isolated relay load contact: COM1. This is not a logic supply/ground node. Source net: COM1.",
        "x": -40.005,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "NO1",
        "type": "passive",
        "description": "Isolated relay load contact: NO1. This is not a logic supply/ground node. Source net: NO1.",
        "x": -34.925,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "NC2",
        "type": "passive",
        "description": "Isolated relay load contact: NC2. This is not a logic supply/ground node. Source net: NC2.",
        "x": -18.415,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "COM2",
        "type": "passive",
        "description": "Isolated relay load contact: COM2. This is not a logic supply/ground node. Source net: COM2.",
        "x": -13.335,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "NO2",
        "type": "passive",
        "description": "Isolated relay load contact: NO2. This is not a logic supply/ground node. Source net: NO2.",
        "x": -8.255,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "NC3",
        "type": "passive",
        "description": "Isolated relay load contact: NC3. This is not a logic supply/ground node. Source net: NC3.",
        "x": 8.255,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "COM3",
        "type": "passive",
        "description": "Isolated relay load contact: COM3. This is not a logic supply/ground node. Source net: COM3.",
        "x": 13.335,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "NO3",
        "type": "passive",
        "description": "Isolated relay load contact: NO3. This is not a logic supply/ground node. Source net: NO3.",
        "x": 18.415,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "NC4",
        "type": "passive",
        "description": "Isolated relay load contact: NC4. This is not a logic supply/ground node. Source net: NC4.",
        "x": 34.925,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "COM4",
        "type": "passive",
        "description": "Isolated relay load contact: COM4. This is not a logic supply/ground node. Source net: COM4.",
        "x": 40.005,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j4-3",
        "number": "J4.3",
        "label": "NO4",
        "type": "passive",
        "description": "Isolated relay load contact: NO4. This is not a logic supply/ground node. Source net: NO4.",
        "x": 45.085,
        "y": -22.86,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.1684
      },
      {
        "id": "j13-1",
        "number": "J13.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": 3,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true
      },
      {
        "id": "j13-2",
        "number": "J13.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": 1,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true
      },
      {
        "id": "j13-3",
        "number": "J13.3",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net: VCC.",
        "x": -1,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true
      },
      {
        "id": "j13-4",
        "number": "J13.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true
      },
      {
        "id": "j13-ss1",
        "number": "J13.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": 5.4,
        "y": 27.72,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true,
        "caption": "J13.SS1"
      },
      {
        "id": "j13-ss2",
        "number": "J13.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -5.4,
        "y": 27.72,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J13",
        "back": false,
        "smd": true,
        "caption": "J13.SS2"
      },
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -23.495,
        "y": 17.145,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA3",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd16-t",
        "number": "GND16.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": 6.35,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND16",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc1-t",
        "number": "VCC1.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": 3.81,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V module supply input. Source net: VCC.",
        "x": -3.81,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA4",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -6.35,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "boot1-t",
        "number": "BOOT1.T",
        "label": "K3_DRIVE",
        "type": "passive",
        "description": "Onboard K3 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$10.",
        "x": 17.78,
        "y": 11.43,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "BOOT1",
        "back": true,
        "smd": true
      },
      {
        "id": "boot2-t",
        "number": "BOOT2.T",
        "label": "K4_DRIVE",
        "type": "passive",
        "description": "Onboard K4 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$15.",
        "x": 44.45,
        "y": 11.43,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "BOOT2",
        "back": true,
        "smd": true
      },
      {
        "id": "boot3-t",
        "number": "BOOT3.T",
        "label": "K1_DRIVE",
        "type": "passive",
        "description": "Onboard K1 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$6.",
        "x": -35.56,
        "y": 11.43,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "BOOT3",
        "back": true,
        "smd": true
      },
      {
        "id": "boot4-t",
        "number": "BOOT4.T",
        "label": "K2_DRIVE",
        "type": "passive",
        "description": "Onboard K2 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$4.",
        "x": -8.89,
        "y": 11.43,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "BOOT4",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-1",
        "number": "J10.1",
        "label": "PA13/SWIO",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA13/SWIO.",
        "x": -36.37,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-2",
        "number": "J10.2",
        "label": "PA14/SWCLK",
        "type": "input",
        "description": "MCU PA14/SWCLK service/configuration input in the 3.3 V domain. Source net: PA14/SWCLK.",
        "x": -38.37,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-3",
        "number": "J10.3",
        "label": "!RST",
        "type": "input",
        "description": "MCU !RST service/configuration input in the 3.3 V domain. Source net: !RST.",
        "x": -40.37,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-6",
        "number": "J10.6",
        "label": "BOOT",
        "type": "input",
        "description": "MCU BOOT service/configuration input in the 3.3 V domain. Source net: BOOT.",
        "x": -40.37,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-7",
        "number": "J10.7",
        "label": "PA9/SCL",
        "type": "input",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA9/SCL.",
        "x": -38.37,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-8",
        "number": "J10.8",
        "label": "PA10/SDA",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA10/SDA.",
        "x": -36.37,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-4",
        "number": "J10.4",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -42.37,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-5",
        "number": "J10.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -42.37,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"5.585\" y=\"-15.265\" width=\"15.5\" height=\"19.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.255\" y=\"-15.265\" width=\"15.5\" height=\"19.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.755\" y=\"-15.265\" width=\"15.5\" height=\"19.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.085\" y=\"-15.265\" width=\"15.5\" height=\"19.1\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.588\" y=\"-26.924\" width=\"15.494\" height=\"8.128\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.258\" y=\"-26.924\" width=\"15.494\" height=\"8.128\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.752\" y=\"-26.924\" width=\"15.494\" height=\"8.128\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.082\" y=\"-26.924\" width=\"15.494\" height=\"8.128\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1\" y=\"20.32\" width=\"12.2\" height=\"9.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-41.57\" y=\"18.34\" width=\"4.4\" height=\"6.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"42.7736\" y=\"7.5946\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"16.1036\" y=\"7.5946\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-37.2364\" y=\"7.5946\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.5664\" y=\"7.5946\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.78\" y=\"9.9695\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.4475\" y=\"20.701\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.8295\" y=\"12.065\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.1805\" y=\"12.065\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.1595\" y=\"12.065\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.89\" y=\"9.9695\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.5105\" y=\"12.065\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"44.45\" y=\"9.9695\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.56\" y=\"9.9695\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.384\" y=\"24.892\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.384\" y=\"23.241\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.384\" y=\"18.161\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.384\" y=\"16.51\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.526\" y=\"21.463\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.526\" y=\"17.653\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.24\" y=\"10.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"14.605\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"12.954\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.668\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.668\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.668\" y=\"12.954\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.668\" y=\"11.176\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.43\" y=\"10.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.223\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.223\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.223\" y=\"14.605\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.002\" y=\"11.176\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"37.338\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"37.338\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"37.338\" y=\"12.954\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"37.338\" y=\"11.176\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.893\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.893\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.893\" y=\"14.605\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.117\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.117\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.117\" y=\"14.605\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-42.672\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-42.672\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-42.672\" y=\"12.954\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-42.672\" y=\"11.176\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-32.766\" y=\"21.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"9.398\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.954\" y=\"21.463\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.954\" y=\"17.653\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"41.783\" y=\"10.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-38.1\" y=\"10.033\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-50.673\" y=\"18.288\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-49.022\" y=\"18.288\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.498\" y=\"21.336\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.498\" y=\"18.288\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-45.974\" y=\"21.336\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-45.974\" y=\"18.288\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-43.418\" y=\"25.273\" width=\"8.096\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 4-Channel SPDT Relay.brd",
      "boardSha256": "f2d30944ed74e95096b514fdaeedfb2a0ea0216dd4cd24720fb5d7c71f0acbdf",
      "sourceBounds": [
        -60,
        -30,
        60,
        30
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J4",
        "J13",
        "SDA3",
        "GND16",
        "VCC1",
        "SDA4",
        "SCL",
        "BOOT1",
        "BOOT2",
        "BOOT3",
        "BOOT4",
        "J10"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-ssr-4ch-103020135": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$12.",
        "x": -8.89,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$11.",
        "x": -13.97,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$13.",
        "x": 2.54,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$6.",
        "x": -2.54,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$19.",
        "x": 13.97,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$18.",
        "x": 8.89,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$25.",
        "x": 25.4,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$24.",
        "x": 20.32,
        "y": -13.208,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": -26.67,
        "y": 3,
        "size": [
          1.5,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": -26.67,
        "y": 1,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "VCC",
        "type": "power_in",
        "description": "4–6 V; 5 V nominal module supply input. Source net: VCC.",
        "x": -26.67,
        "y": -1,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -26.67,
        "y": -3,
        "size": [
          1.5,
          1.5
        ],
        "shape": "circle",
        "connector": "J5",
        "back": false,
        "drill": 0.7
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "K2_DRIVE",
        "type": "passive",
        "description": "Onboard K2 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$3.",
        "x": -17.78,
        "y": 8.636,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "K3_DRIVE",
        "type": "passive",
        "description": "Onboard K3 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$15.",
        "x": -21.59,
        "y": 16.256,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -17.78,
        "y": 0.762,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA3",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc2-t",
        "number": "VCC2.T",
        "label": "K1_DRIVE",
        "type": "passive",
        "description": "Onboard K1 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$8.",
        "x": -15.875,
        "y": 16.256,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC2",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc3-t",
        "number": "VCC3.T",
        "label": "K4_DRIVE",
        "type": "passive",
        "description": "Onboard K4 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$21.",
        "x": -27.305,
        "y": 16.256,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC3",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd4-t",
        "number": "GND4.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": -28.575,
        "y": 6.35,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND4",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc1-t",
        "number": "VCC1.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": -28.575,
        "y": 3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
        "label": "VCC",
        "type": "power_in",
        "description": "4–6 V; 5 V nominal module supply input. Source net: VCC.",
        "x": -28.575,
        "y": -3.81,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA4",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -28.575,
        "y": -6.35,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "PA13/SWIO",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA13/SWIO.",
        "x": -28.4,
        "y": -16.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "PA14/SWCLK",
        "type": "input",
        "description": "MCU PA14/SWCLK service/configuration input in the 3.3 V domain. Source net: PA14/SWCLK.",
        "x": -26.4,
        "y": -16.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-3",
        "number": "J7.3",
        "label": "!RST",
        "type": "input",
        "description": "MCU !RST service/configuration input in the 3.3 V domain. Source net: !RST.",
        "x": -24.4,
        "y": -16.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-6",
        "number": "J7.6",
        "label": "BOOT",
        "type": "input",
        "description": "MCU BOOT service/configuration input in the 3.3 V domain. Source net: BOOT.",
        "x": -24.4,
        "y": -14.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-7",
        "number": "J7.7",
        "label": "PA9/SCL",
        "type": "input",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA9/SCL.",
        "x": -26.4,
        "y": -14.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-8",
        "number": "J7.8",
        "label": "PA10/SDA",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA10/SDA.",
        "x": -28.4,
        "y": -14.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-4",
        "number": "J7.4",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -22.4,
        "y": -16.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      },
      {
        "id": "j7-5",
        "number": "J7.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -22.4,
        "y": -14.875,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J7",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"6.35\" y=\"-18.63\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.78\" y=\"-18.63\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.08\" y=\"-18.63\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.51\" y=\"-18.63\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.4\" y=\"-7.17\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-13.46\" y=\"-7.17\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.03\" y=\"-7.17\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"20.83\" y=\"-7.17\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.745\" y=\"-13.63\" width=\"6.5\" height=\"4.4\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.4196\" y=\"13.1826\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.2644\" y=\"13.1826\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.2344\" y=\"6.4516\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.6446\" y=\"13.3096\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.8496\" y=\"13.1826\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.8384\" y=\"6.0706\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.0444\" y=\"14.0716\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.3294\" y=\"14.0716\" width=\"1.3208\" height=\"2.8448\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.3995\" y=\"-0.254\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.59\" y=\"-5.334\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.796\" y=\"-5.334\" width=\"1.27\" height=\"2.032\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.135\" y=\"11.138\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.075\" y=\"11.657\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-27.713\" y=\"9.995\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.184\" y=\"12.673\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.125\" y=\"9.995\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.501\" y=\"-2.694\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.374\" y=\"4.926\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.469\" y=\"12.546\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.41\" y=\"9.995\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.427\" y=\"7.201\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.188\" y=\"0.47\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.899\" y=\"11.657\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.658\" y=\"11.657\" width=\"1.6\" height=\"1.07\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.204\" y=\"3.264\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.191\" y=\"17.3355\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.493\" y=\"17.3355\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.416\" y=\"17.3355\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.621\" y=\"17.3355\" width=\"1.778\" height=\"0.889\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.9555\" y=\"9.9695\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.0665\" y=\"8.1915\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.3675\" y=\"9.9695\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.1455\" y=\"2.6035\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.2245\" y=\"-0.5715\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.0325\" y=\"11.6205\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.5245\" y=\"11.6205\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3205\" y=\"-16.5735\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.0665\" y=\"7.3025\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.0665\" y=\"6.4135\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.7965\" y=\"-16.5735\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.5265\" y=\"-6.2865\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.2725\" y=\"-16.5735\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.2405\" y=\"-6.2865\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.5085\" y=\"16.4465\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.4955\" y=\"11.3665\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"26.7335\" y=\"16.4465\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.2085\" y=\"11.6205\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.9385\" y=\"16.4465\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1755\" y=\"16.4465\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.2095\" y=\"10.8585\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.3205\" y=\"-17.4625\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-24.0665\" y=\"10.8585\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-23.5585\" y=\"-6.9215\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.7965\" y=\"-17.4625\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.6695\" y=\"-6.9215\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.2725\" y=\"-17.4625\" width=\"1.143\" height=\"0.635\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.4945\" y=\"10.8585\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.4785\" y=\"10.8585\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-21.3995\" y=\"3.4925\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.3835\" y=\"3.4925\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.4945\" y=\"-2.7305\" width=\"0.635\" height=\"1.143\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"0.017\" cy=\"20.015\" r=\"2.0\" fill=\"#bdc4bc\" stroke=\"#83988f\" stroke-width=\".16\"/><circle cx=\"0.017\" cy=\"20.015\" r=\"1.3\" fill=\"#354440\" stroke=\"#b5bfb3\" stroke-width=\".12\"/>",
    "backArtwork": "<rect x=\"-29.448\" y=\"-17.907\" width=\"8.096\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 4-Channel Solid State Relay.brd",
      "boardSha256": "1450833c6c67d5989eb722fbba423ce62d6bd5976b1d78dad289fe98442ed266",
      "sourceBounds": [
        -32.1,
        -22.1,
        32.1,
        22.100000000000005
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J4",
        "J5",
        "VCC",
        "SDA",
        "SDA3",
        "VCC2",
        "VCC3",
        "GND4",
        "VCC1",
        "SDA4",
        "SCL",
        "J7"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-ssr-8ch-103020136": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$12.",
        "x": -30.734,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$11.",
        "x": -35.814,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$13.",
        "x": -44.069,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$6.",
        "x": -49.149,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J2",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j3-1",
        "number": "J3.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$19.",
        "x": -17.399,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$18.",
        "x": -22.479,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j4-1",
        "number": "J4.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$25.",
        "x": -4.064,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j4-2",
        "number": "J4.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$24.",
        "x": -9.144,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J4",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j5-1",
        "number": "J5.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": 3,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": 1,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-3",
        "number": "J5.3",
        "label": "VCC",
        "type": "power_in",
        "description": "4–6 V; 5 V nominal module supply input. Source net: VCC.",
        "x": -1,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-4",
        "number": "J5.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3,
        "y": 20.22,
        "size": [
          1.01,
          2.74
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-ss1",
        "number": "J5.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": 5.4,
        "y": 27.72,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true,
        "caption": "J5.SS1"
      },
      {
        "id": "j5-ss2",
        "number": "J5.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -5.4,
        "y": 27.72,
        "size": [
          1.5,
          3
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true,
        "caption": "J5.SS2"
      },
      {
        "id": "vcc-t",
        "number": "VCC.T",
        "label": "K1_DRIVE",
        "type": "passive",
        "description": "Onboard K1 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$3.",
        "x": -45.72,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC",
        "back": true,
        "smd": true
      },
      {
        "id": "sda-t",
        "number": "SDA.T",
        "label": "K3_DRIVE",
        "type": "passive",
        "description": "Onboard K3 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$15.",
        "x": -19.05,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA",
        "back": true,
        "smd": true
      },
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -25.4,
        "y": 19.685,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA3",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc2-t",
        "number": "VCC2.T",
        "label": "K2_DRIVE",
        "type": "passive",
        "description": "Onboard K2 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$8.",
        "x": -32.385,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC2",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc3-t",
        "number": "VCC3.T",
        "label": "K4_DRIVE",
        "type": "passive",
        "description": "Onboard K4 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$21.",
        "x": -5.715,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC3",
        "back": true,
        "smd": true
      },
      {
        "id": "gnd4-t",
        "number": "GND4.T",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": 6.35,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "GND4",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc1-t",
        "number": "VCC1.T",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": 3.81,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
        "label": "VCC",
        "type": "power_in",
        "description": "4–6 V; 5 V nominal module supply input. Source net: VCC.",
        "x": -3.81,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SDA4",
        "back": true,
        "smd": true
      },
      {
        "id": "scl-t",
        "number": "SCL.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -6.35,
        "y": 28.575,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL",
        "back": true,
        "smd": true
      },
      {
        "id": "j6-1",
        "number": "J6.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$33.",
        "x": 9.271,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J6",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j6-2",
        "number": "J6.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$32.",
        "x": 4.191,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J6",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j7-1",
        "number": "J7.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$38.",
        "x": 22.606,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J7",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j7-2",
        "number": "J7.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$37.",
        "x": 17.526,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J7",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "vcc5-t",
        "number": "VCC5.T",
        "label": "K6_DRIVE",
        "type": "passive",
        "description": "Onboard K6 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$35.",
        "x": 20.955,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC5",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc6-t",
        "number": "VCC6.T",
        "label": "K5_DRIVE",
        "type": "passive",
        "description": "Onboard K5 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$30.",
        "x": 7.62,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC6",
        "back": true,
        "smd": true
      },
      {
        "id": "j8-1",
        "number": "J8.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$47.",
        "x": 35.941,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J8",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j8-2",
        "number": "J8.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$46.",
        "x": 30.861,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J8",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j9-1",
        "number": "J9.1",
        "label": "LOAD1",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$52.",
        "x": 49.276,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "rect",
        "connector": "J9",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "j9-2",
        "number": "J9.2",
        "label": "LOAD2",
        "type": "passive",
        "description": "Isolated solid-state relay AC load terminal; follow the rated AC load limits. It is not tied to logic ground. Source net: N$51.",
        "x": 44.196,
        "y": -24.003,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J9",
        "back": false,
        "drill": 1.143
      },
      {
        "id": "vcc7-t",
        "number": "VCC7.T",
        "label": "K8_DRIVE",
        "type": "passive",
        "description": "Onboard K8 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$49.",
        "x": 47.625,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC7",
        "back": true,
        "smd": true
      },
      {
        "id": "vcc8-t",
        "number": "VCC8.T",
        "label": "K7_DRIVE",
        "type": "passive",
        "description": "Onboard K7 coil/SSR input low-side transistor node exposed only as a test contact; not a host control input. Source net: N$44.",
        "x": 34.29,
        "y": 13.208,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VCC8",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-1",
        "number": "J10.1",
        "label": "PA13/SWIO",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA13/SWIO.",
        "x": -38.783,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-2",
        "number": "J10.2",
        "label": "PA14/SWCLK",
        "type": "input",
        "description": "MCU PA14/SWCLK service/configuration input in the 3.3 V domain. Source net: PA14/SWCLK.",
        "x": -40.783,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-3",
        "number": "J10.3",
        "label": "!RST",
        "type": "input",
        "description": "MCU !RST service/configuration input in the 3.3 V domain. Source net: !RST.",
        "x": -42.783,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-6",
        "number": "J10.6",
        "label": "BOOT",
        "type": "input",
        "description": "MCU BOOT service/configuration input in the 3.3 V domain. Source net: BOOT.",
        "x": -42.783,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-7",
        "number": "J10.7",
        "label": "PA9/SCL",
        "type": "input",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA9/SCL.",
        "x": -40.783,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-8",
        "number": "J10.8",
        "label": "PA10/SDA",
        "type": "bidirectional",
        "description": "MCU service/header signal in the unshifted 3.3 V MCU domain; the source net identifies its shared I2C/SWD function. Source net: PA10/SDA.",
        "x": -38.783,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-4",
        "number": "J10.4",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": -44.783,
        "y": 28.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      },
      {
        "id": "j10-5",
        "number": "J10.5",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -44.783,
        "y": 26.305,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "J10",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"28.321\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"41.656\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"14.986\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.651\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-51.689\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-25.019\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.684\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-38.354\" y=\"-29.425\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.1\" y=\"20.32\" width=\"12.2\" height=\"9.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"44.452\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-48.893\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-35.558\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.447\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"31.117\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.782\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.888\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.223\" y=\"-17.965\" width=\"4.5\" height=\"24.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-43.983\" y=\"19.61\" width=\"4.4\" height=\"6.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"40.4876\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-52.8574\" y=\"5.8166\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-39.5224\" y=\"5.8166\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"46.2026\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"32.8676\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-47.1424\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.8176\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.4826\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.1526\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.1874\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.8524\" y=\"5.9436\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-33.8074\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.1976\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"19.5326\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.1374\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.4724\" y=\"13.1826\" width=\"2.8448\" height=\"1.3208\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.2255\" y=\"22.606\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"18.415\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"30.861\" y=\"12.446\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.526\" y=\"12.446\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-22.479\" y=\"12.446\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.637\" y=\"23.495\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.637\" y=\"18.415\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.178\" y=\"1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.162\" y=\"26.67\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.162\" y=\"25.146\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.162\" y=\"19.939\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-26.162\" y=\"18.415\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-20.447\" y=\"23.495\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.178\" y=\"8.382\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"27.178\" y=\"14.732\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"3.429\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"3.429\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.508\" y=\"3.429\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.508\" y=\"1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"1.905\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.191\" y=\"12.446\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"8.382\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"14.732\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"13.208\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"11.684\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.843\" y=\"10.033\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.508\" y=\"8.382\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.508\" y=\"14.732\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.144\" y=\"12.446\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"8.382\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"14.732\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"13.208\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"11.684\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.827\" y=\"10.033\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.508\" y=\"13.208\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-45.831\" y=\"25.273\" width=\"8.096\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 8-Channel Solid State Relay.brd",
      "boardSha256": "0486c05d223c32ede9198d3f3c0d361a37b2e9cdff8756a52647ab2b254584af",
      "sourceBounds": [
        -60,
        -29.365,
        60,
        30.635
      ],
      "selectedConnectors": [
        "J1",
        "J2",
        "J3",
        "J4",
        "J5",
        "VCC",
        "SDA",
        "SDA3",
        "VCC2",
        "VCC3",
        "GND4",
        "VCC1",
        "SDA4",
        "SCL",
        "J6",
        "J7",
        "VCC5",
        "VCC6",
        "J8",
        "J9",
        "VCC7",
        "VCC8",
        "J10"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  }
};
