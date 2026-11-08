// Exact physical contact tables, original CAD-derived illustrations and source evidence.
// Attribution and manufacturer references remain in the specification/provenance.
export default {
  "seeed-grove-pcf85063-rtc-102020083": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "RTC_SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: RTC_SCL.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "RTC_SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: RTC_SDA.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.5,
          1
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
        "description": "3.3 V or 5 V Grove supply module supply input. Source net: VCC.",
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.5,
          1
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
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.5,
          1
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
        "x": -16.558,
        "y": 5.85,
        "size": [
          2.5,
          2
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
        "x": -16.558,
        "y": -5.75,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "tp1-p1",
        "number": "TP1.P1",
        "label": "!RTC_INT",
        "type": "output",
        "description": "RTC interrupt output; follow the source chip pull-up requirements. Source net: !RTC_INT.",
        "x": -3.91,
        "y": -7.57,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP1",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp2-p1",
        "number": "TP2.P1",
        "label": "CLKOUT",
        "type": "output",
        "description": "RTC programmable clock output; follow the source chip pull-up requirements. Source net: CLKOUT.",
        "x": -6.45,
        "y": -7.57,
        "size": [
          1.651,
          1.651
        ],
        "shape": "circle",
        "connector": "TP2",
        "back": false,
        "drill": 0.889
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "RTC_SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: RTC_SCL.",
        "x": -18.515,
        "y": 6.4,
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
        "label": "RTC_SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: RTC_SDA.",
        "x": -18.515,
        "y": 3.86,
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
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3 V or 5 V Grove supply module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
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
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "BAT_BACKUP",
        "type": "power_in",
        "description": "Backup battery positive supply terminal; fit only the source-specified battery type and polarity. Source net: BAT_BACKUP.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "tp9-t",
        "number": "TP9.T",
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
        "connector": "TP9",
        "back": true,
        "smd": true
      },
      {
        "id": "tp10-t",
        "number": "TP10.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP10",
        "back": true,
        "smd": true
      },
      {
        "id": "bat1-plus",
        "number": "BAT1.+",
        "label": "BAT_BACKUP",
        "type": "power_in",
        "description": "Backup battery positive supply terminal; fit only the source-specified battery type and polarity. Source net: BAT_BACKUP.",
        "x": -0.68,
        "y": 0.05,
        "size": [
          4.4,
          2
        ],
        "shape": "rect",
        "connector": "BAT1",
        "back": false,
        "smd": true
      },
      {
        "id": "bat1--",
        "number": "BAT1.-",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.72,
        "y": 0.05,
        "size": [
          4.4,
          2
        ],
        "shape": "rect",
        "connector": "BAT1",
        "back": false,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.708\" y=\"-6.05\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.38\" y=\"-7.05\" width=\"3.0\" height=\"14.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.942\" y=\"-1.45\" width=\"2.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.371\" y=\"-1.601\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.05\" y=\"2.856\" width=\"3.2\" height=\"1.5\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.1005\" y=\"-4.395\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.3705\" y=\"-4.649\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.2275\" y=\"2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.2275\" y=\"-0.839\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.5615\" y=\"2.717\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.6565\" y=\"-4.649\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.5135\" y=\"-4.649\" width=\"0.889\" height=\"1.778\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"7.52\" cy=\"0.05\" r=\"6\" fill=\"#9ca59d\" stroke=\"#d7d9cd\" stroke-width=\".25\"/><circle cx=\"7.52\" cy=\"0.05\" r=\"5.2\" fill=\"#737e76\" stroke=\"#b1beb2\" stroke-width=\".15\"/><path d=\"M1.2199999999999995 -0.6h12.6v1.3h-12.6Z\" fill=\"#bfb78d\" stroke=\"#e4dcac\" stroke-width=\".15\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - High Precision RTC v1.0.brd",
      "boardSha256": "94b2e4395b0a92e2e98950b1f01888d86fa9194fc89aea8367b9b747456d7be1",
      "sourceBounds": [
        -19.365000000000002,
        -10.199999999999998,
        20.835,
        10.300000000000002
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8",
        "TP9",
        "TP10",
        "BAT1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-ds1307-rtc-101020013": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SCL",
        "type": "input",
        "description": "I2C clock into the module; observe source bus pull-up and module supply limits. Source net: SCL.",
        "x": -15.92,
        "y": -2.785,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SDA",
        "type": "bidirectional",
        "description": "Open-drain I2C data; observe source bus pull-up and module supply limits. Source net: SDA.",
        "x": -15.92,
        "y": -0.785,
        "size": [
          2.54,
          0.9652
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
        "description": "4.5–5.5 V module supply input. Source net: VCC.",
        "x": -15.92,
        "y": 1.215,
        "size": [
          2.54,
          0.9652
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
        "x": -15.92,
        "y": 3.215,
        "size": [
          2.54,
          0.9652
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
        "x": -12.52,
        "y": -5.731,
        "size": [
          2.1844,
          2.032
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
        "x": -12.52,
        "y": 6.161,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "u3-1",
        "number": "U3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 17.5826,
        "y": -0.166,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "U3",
        "back": false,
        "smd": true
      },
      {
        "id": "u3-2",
        "number": "U3.2",
        "label": "VBAT",
        "type": "power_in",
        "description": "Backup battery positive supply terminal; fit only the source-specified battery type and polarity. Source net: VBAT.",
        "x": -0.426,
        "y": -0.166,
        "size": [
          2,
          2.5
        ],
        "shape": "rect",
        "connector": "U3",
        "back": false,
        "smd": true
      },
      {
        "id": "sqw-p-1",
        "number": "SQW.P$1",
        "label": "SQW/OUT",
        "type": "open_collector",
        "description": "DS1307 open-drain square-wave / programmable output with the source pull-up resistor. Source net: S/O.",
        "x": -1.7722,
        "y": -4.8142,
        "size": [
          1.524,
          1.524
        ],
        "shape": "circle",
        "connector": "SQW",
        "back": false,
        "drill": 0.8128
      }
    ],
    "artwork": "<rect x=\"-1.569\" y=\"-7.5828\" width=\"20.32\" height=\"14.8336\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-15.82\" y=\"-5.885\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.332\" y=\"2.755\" width=\"11.176\" height=\"4.572\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.198\" y=\"-2.274\" width=\"3.606\" height=\"4.724\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.0422\" y=\"-6.0842\" width=\"2.54\" height=\"2.54\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.824\" y=\"-6.262\" width=\"1.524\" height=\"3.048\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.538\" y=\"-6.262\" width=\"1.524\" height=\"3.048\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.3028\" y=\"-6.262\" width=\"1.524\" height=\"3.048\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"8.464\" cy=\"-0.166\" r=\"6.25\" fill=\"#9ca59d\" stroke=\"#d7d9cd\" stroke-width=\".25\"/><circle cx=\"8.464\" cy=\"-0.166\" r=\"5.45\" fill=\"#737e76\" stroke=\"#b1beb2\" stroke-width=\".15\"/><path d=\"M1.9140000000000004 -0.8160000000000001h13.1v1.3h-13.1Z\" fill=\"#bfb78d\" stroke=\"#e4dcac\" stroke-width=\".15\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - RTC v1.1.brd",
      "boardSha256": "5b6a0ad95e710a724e3c2d0ed47ec8399636a7e66e9db2949755243852bf3873",
      "sourceBounds": [
        -17.444000000000003,
        -1.7249999999999996,
        24.645999999999997,
        22.475
      ],
      "selectedConnectors": [
        "J1",
        "U3",
        "SQW"
      ],
      "reviewWarnings": [],
      "outlineReview": "Legacy duplicated frame segments joined at matching source extrema; small mismatches below0.01mm reconciled in the SVG contour. Contact coordinates and lands remain exact source values.",
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-mosfet-103020008": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SIG",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: SIG.",
        "x": -14.705,
        "y": -2.95,
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
        "description": "Unused source contact; leave open. Source net: NC.",
        "x": -14.705,
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
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V Grove logic supply module supply input. Source net: VCC.",
        "x": -14.705,
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
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -14.705,
        "y": 3.05,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "OUT+",
        "type": "power_out",
        "description": "Switched positive load output from the P-channel MOSFET drain; use the module load limits. Source net: N$3.",
        "x": -0.735,
        "y": 5.638,
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
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 4.345,
        "y": 5.638,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 4.345,
        "y": -5.538,
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
        "label": "VIN+",
        "type": "power_in",
        "description": "External positive load supply. The Grove MOSFET example supports supplies up to 15 V DC; ground is shared with Grove ground. Source net: VIN1.",
        "x": -0.735,
        "y": -5.538,
        "size": [
          2.032,
          2.032
        ],
        "shape": "circle",
        "connector": "J3",
        "back": false,
        "drill": 1.143
      }
    ],
    "artwork": "<rect x=\"-3.275\" y=\"-10.96\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.895\" y=\"0.558\" width=\"10.78\" height=\"10.502\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-17.505\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.133\" y=\"1.32\" width=\"3.81\" height=\"4.826\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.515\" y=\"-8.08\" width=\"4.32\" height=\"3.56\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.8724\" y=\"7.0096\" width=\"3.3528\" height=\"1.3208\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-16.991\" y=\"6.781\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.085\" y=\"-2.6805\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-12.292\" y=\"7.035\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.53\" y=\"-2.617\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.625\" y=\"-2.617\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - MOSFET .brd",
      "boardSha256": "aa9b801f1f07d69370603164b011d2fb6b6b90181c0967ede802b5976a61380b",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "J1",
        "J3"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-encoder-111020001": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "SIGA",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIGA.",
        "x": -1.016,
        "y": -3,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "SIGB",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIGB.",
        "x": -1.016,
        "y": -1,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "4.5–5.5 V module supply input. Source net: VCC.",
        "x": -1.016,
        "y": 1,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -1.016,
        "y": 3,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -4.416,
        "y": -5.946,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true,
        "caption": "J2.SS1"
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -4.416,
        "y": 5.946,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": true,
        "smd": true,
        "caption": "J2.SS2"
      }
    ],
    "artwork": "<rect x=\"-7.885\" y=\"-5.85\" width=\"13.75\" height=\"11.7\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"-0.635\" cy=\"0.0\" r=\"5.0\" fill=\"#bdc4bc\" stroke=\"#83988f\" stroke-width=\".16\"/><circle cx=\"-0.635\" cy=\"0.0\" r=\"2\" fill=\"#354440\" stroke=\"#b5bfb3\" stroke-width=\".12\"/>",
    "backArtwork": "<rect x=\"-6.416\" y=\"-6.1\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"-8.255\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"-5.842\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"6.985\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"4.445\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.048\" y=\"0.381\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.382\" y=\"7.62\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove-Encoder v0.9b.brd",
      "boardSha256": "aad10c7ecdf92a626bf95b32f346ebd6398e5748caa38525db0aae75f9666c60",
      "sourceBounds": [
        -12.1,
        -10,
        12.1,
        10
      ],
      "selectedConnectors": [
        "J2"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-dual-button-111020103": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG1",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG1.",
        "x": -9.144,
        "y": -2.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SIG2",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG2.",
        "x": -9.144,
        "y": -0.95,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-3",
        "number": "J1.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3–5 V module supply input. Source net: VCC.",
        "x": -9.144,
        "y": 1.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-4",
        "number": "J1.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -9.144,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-ss1",
        "number": "J1.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -16.644,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS1"
      },
      {
        "id": "j1-ss2",
        "number": "J1.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -16.644,
        "y": 5.45,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J1",
        "back": true,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SIG1",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG1.",
        "x": 18.315,
        "y": -6.3,
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
        "label": "SIG2",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG2.",
        "x": 18.315,
        "y": -3.76,
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
        "description": "3–5 V module supply input. Source net: VCC.",
        "x": 18.315,
        "y": 3.86,
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
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-15.498\" y=\"-5.95\" width=\"12.0\" height=\"12.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.552\" y=\"-5.95\" width=\"12.0\" height=\"12.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"9.552\" cy=\"0.05\" r=\"5.2\" fill=\"#cb544e\" stroke=\"#d1b2a2\" stroke-width=\".2\"/><circle cx=\"9.552\" cy=\"0.05\" r=\"4.5\" fill=\"none\" stroke=\"#e1cbb6\" stroke-width=\".12\"/><circle cx=\"-9.498\" cy=\"0.05\" r=\"5.2\" fill=\"#5ead67\" stroke=\"#d1b2a2\" stroke-width=\".2\"/><circle cx=\"-9.498\" cy=\"0.05\" r=\"4.5\" fill=\"none\" stroke=\"#e1cbb6\" stroke-width=\".12\"/>",
    "backArtwork": "<rect x=\"-18.444\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"3.225\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"1.701\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"0.05\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-4.522\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-2.998\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.91\" y=\"-1.474\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Dual Button_v1.0_190916.brd",
      "boardSha256": "06422a34d93adaf10eb78bab805078530c3f72e6b8a730ba9fc7750a2e2cf46d",
      "sourceBounds": [
        -0.18799999999999883,
        -0.548,
        40.012,
        19.951999999999998
      ],
      "selectedConnectors": [
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-mech-keycap-111020049": {
    "contacts": [
      {
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "SIG1",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG1.",
        "x": -8.2677,
        "y": 6.4127,
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
        "label": "SIG2",
        "type": "input",
        "description": "SK6805 addressable RGB LED serial-data input. Source net: SIG2.",
        "x": -8.2677,
        "y": 3.8727,
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
        "description": "3–5 V module supply input. Source net: VCC.",
        "x": -8.2677,
        "y": -3.7473,
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
        "x": -8.2677,
        "y": -6.2873,
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
        "id": "j3-1",
        "number": "J3.1",
        "label": "SIG1",
        "type": "passive",
        "description": "Passive mechanical switch/encoder contact signal with the source pull-up or pull-down network. Source net: SIG1.",
        "x": -3.1877,
        "y": 3.0627,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-2",
        "number": "J3.2",
        "label": "SIG2",
        "type": "input",
        "description": "SK6805 addressable RGB LED serial-data input. Source net: SIG2.",
        "x": -3.1877,
        "y": 1.0627,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-3",
        "number": "J3.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3–5 V module supply input. Source net: VCC.",
        "x": -3.1877,
        "y": -0.9373,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-4",
        "number": "J3.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.1877,
        "y": -2.9373,
        "size": [
          2.5,
          1
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true
      },
      {
        "id": "j3-ss1",
        "number": "J3.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -6.3107,
        "y": 5.8627,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS1"
      },
      {
        "id": "j3-ss2",
        "number": "J3.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -6.3107,
        "y": -5.7373,
        "size": [
          2.5,
          2
        ],
        "shape": "rect",
        "connector": "J3",
        "back": false,
        "smd": true,
        "caption": "J3.SS2"
      }
    ],
    "artwork": "<rect x=\"-8.4607\" y=\"-6.0373\" width=\"5.1\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.3213\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.2733\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.7493\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.2987\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.7747\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.8453\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.7973\" y=\"-8.3193\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-6.7697\" y=\"-7.7373\" width=\"15.8\" height=\"15.6\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.7687\" y=\"-1.2873\" width=\"2.4\" height=\"2.7\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.8697\" y=\"-7.9373\" width=\"16\" height=\"16\" rx=\".8\" fill=\"#dce5e2\" stroke=\"#afc4bd\" stroke-width=\".2\"/><path d=\"M-5.3697 -6.4373H7.6303V6.5627H-5.3697Z\" fill=\"#eef2e9\" stroke=\"#c5d4cd\" stroke-width=\".18\"/><path d=\"M-0.8696999999999999 0.0627h4M1.1303 -1.9373v4\" stroke=\"#98bcb7\" stroke-width=\".9\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Mech Keycap.brd",
      "boardSha256": "3c50bc5a95eecd279318164f3e4369862b6d74e2433ae661350cab00c5eae610",
      "sourceBounds": [
        -9.987300000000001,
        -10.1873,
        10.012700000000002,
        10.3127
      ],
      "selectedConnectors": [
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "J3"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-infrared-emitter-101020026": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "TX",
        "type": "input",
        "description": "Control input to the module driver circuit; observe the module supply and control-level requirements. Source net: TX.",
        "x": -5.334,
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": -5.334,
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
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -5.334,
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
        "x": -5.334,
        "y": 3,
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
    "artwork": "<rect x=\"-8.134\" y=\"-5.0\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.889\" y=\"-1.651\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.762\" y=\"3.683\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.5621\" y=\"4.7244\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.27\" y=\"-5.842\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.635\" y=\"-5.842\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><path d=\"M4.445 -1.27h4M4.445 1.27h4\" stroke=\"#bbc6b8\" stroke-width=\".5\"/><rect x=\"7.945\" y=\"-2.5\" width=\"6.5\" height=\"5\" rx=\"2.5\" fill=\"#253c5b\" stroke=\"#8dabc2\" stroke-width=\".2\"/><path d=\"M9.445 -1.6h2\" stroke=\"#6c8cac\" stroke-width=\".5\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Infrared Emitter v1.1.brd",
      "boardSha256": "414504121841912930275b76921ee13799c8f15c098b5216138155a7cbb35e8d",
      "sourceBounds": [
        70.01,
        41.24,
        90.01,
        65.44
      ],
      "selectedConnectors": [
        "J1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-piezo-vibration-101020031": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT",
        "type": "output",
        "description": "Comparator vibration-threshold output; observe the output pull-up configuration. Source net: OUT.",
        "x": -16.61,
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
        "description": "Unused Grove contact; its autogenerated source net has no active circuit connection. Source net: N$6.",
        "x": -16.61,
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
        "description": "5 V reference supply module supply input. Source net: VCC.",
        "x": -16.61,
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
        "x": -16.61,
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
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.025,
        "y": -0.95,
        "size": [
          1.3,
          1.3
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "IN",
        "type": "passive",
        "description": "External piezo-film sensing node into the onboard conditioning circuit. Source net: IN.",
        "x": 15.025,
        "y": 1.05,
        "size": [
          1.3,
          1.3
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 0.8
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
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
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
        "label": "VCC",
        "type": "power_in",
        "description": "5 V reference supply module supply input. Source net: VCC.",
        "x": -18.515,
        "y": -3.76,
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
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": -18.515,
        "y": 3.86,
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
        "label": "OUT",
        "type": "output",
        "description": "Comparator vibration-threshold output; observe the output pull-up configuration. Source net: OUT.",
        "x": -18.515,
        "y": 6.4,
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
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
        "label": "IN",
        "type": "passive",
        "description": "External piezo-film sensing node into the onboard conditioning circuit. Source net: IN.",
        "x": 18.315,
        "y": -3.76,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
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
        "connector": "TP8",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.81\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.425\" y=\"-2.95\" width=\"4.7\" height=\"6.0\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.98\" y=\"-1.18\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.45\" y=\"-1.18\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.3\" y=\"-8.6\" width=\"3.7\" height=\"4.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.298\" y=\"1.955\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.298\" y=\"0.05\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.298\" y=\"-1.855\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.583\" y=\"-3.125\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"2.59\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"0.685\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-1.22\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.847\" y=\"-3.125\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.847\" y=\"4.495\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-3.125\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"4.495\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Gvove - Piezo Vibration Sensor v1.1.brd",
      "boardSha256": "c13db6ab6ede8da8c0f26765cc634d87894601f54c20b3bff644ae59eb21dc18",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "J1",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-collision-101020005": {
    "contacts": [
      {
        "id": "p1-1",
        "number": "P1.1",
        "label": "SIG2 / bridge",
        "type": "passive",
        "description": "Grove signal2 configuration bridge terminal. Source net: SIG2.",
        "x": -6.35,
        "y": 0.381,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "P1",
        "back": false,
        "smd": true
      },
      {
        "id": "p1-2",
        "number": "P1.2",
        "label": "RAW_SENSOR",
        "type": "passive",
        "description": "Raw mechanical vibration switch node through the optional bridge. Source net: N$1.",
        "x": -6.35,
        "y": -0.381,
        "size": [
          0.889,
          0.6096
        ],
        "shape": "rect",
        "connector": "P1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG1",
        "type": "output",
        "description": "Conditioned active-low collision/vibration pulse output from the transistor stage. Source net: SIG1.",
        "x": 3,
        "y": 3.175,
        "size": [
          0.9652,
          2.54
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "SIG2 / bridge",
        "type": "passive",
        "description": "Normally unconnected configuration node; can be bridged to the raw mechanical sensor through P1. Source net: SIG2.",
        "x": 1,
        "y": 3.175,
        "size": [
          0.9652,
          2.54
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
        "x": -1,
        "y": 3.175,
        "size": [
          0.9652,
          2.54
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
        "x": -3,
        "y": 3.175,
        "size": [
          0.9652,
          2.54
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
        "x": 5.946,
        "y": 6.575,
        "size": [
          2.032,
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
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -5.946,
        "y": 6.575,
        "size": [
          2.032,
          2.1844
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      }
    ],
    "artwork": "<rect x=\"-6.1\" y=\"3.275\" width=\"12.2\" height=\"5.3\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.86\" y=\"-3.965\" width=\"2.45\" height=\"2.85\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.588\" y=\"-8.509\" width=\"2.286\" height=\"1.778\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.54\" y=\"-1.8415\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"-6.477\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"-3.429\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"-4.445\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"-4.953\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"-9.525\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.778\" y=\"-8.001\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.842\" y=\"-6.35\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.032\" y=\"-6.35\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.985\" y=\"-0.889\" width=\"1.27\" height=\"1.778\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Collision Sensor v2.0.brd",
      "boardSha256": "aeb3d55881336bde3df324e814ead03b7958d0fa2392fd1da92b2fa665e54afe",
      "sourceBounds": [
        -10,
        -12.1,
        10,
        12.1
      ],
      "selectedConnectors": [
        "P1",
        "J1"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-air-quality-101020078": {
    "contacts": [
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "SIG",
        "type": "output",
        "description": "Buffered analog MP503 air-quality signal; read with an ADC suitable for the module supply. Source net: SIG.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.54,
          0.9652
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.54,
          0.9652
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
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.54,
          0.9652
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
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.54,
          0.9652
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
        "x": -16.835,
        "y": 5.996,
        "size": [
          2.1844,
          2.032
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
        "x": -16.835,
        "y": -5.896,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "smd": true,
        "caption": "J1.SS2"
      },
      {
        "id": "tp4-t",
        "number": "TP4.T",
        "label": "SIG",
        "type": "output",
        "description": "Buffered analog MP503 air-quality signal; read with an ADC suitable for the module supply. Source net: SIG.",
        "x": -18.515,
        "y": 6.4,
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
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "VCC_5V",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail VCC_5V. Source net: VCC_5V.",
        "x": 18.315,
        "y": 3.86,
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
        "id": "tp6-t",
        "number": "TP6.T",
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
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      },
      {
        "id": "tp1-t",
        "number": "TP1.T",
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
        "connector": "TP1",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
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
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.835\" y=\"-6.05\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.195\" y=\"3.9\" width=\"4.0\" height=\"5.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.6\" y=\"-2.55\" width=\"3.0\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.9165\" y=\"-6.554\" width=\"2.794\" height=\"4.445\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.276\" y=\"-1.4105\" width=\"2.794\" height=\"4.445\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.852\" y=\"-5.524\" width=\"2.7\" height=\"4.29\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"8.028\" y=\"-6.554\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"15.521\" y=\"-8.332\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.101\" y=\"-1.4105\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.875\" y=\"-3.8025\" width=\"1.6\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.7995\" y=\"-5.665\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"17.68\" y=\"-7.951\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.027\" y=\"-6.3\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.545\" y=\"5.13\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-11.657\" y=\"-8.1415\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.624\" y=\"-6.3\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.117\" y=\"-2.998\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.631\" y=\"3.86\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.631\" y=\"0.6215\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"10.06\" y=\"-6.427\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.942\" y=\"-0.331\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.98\" y=\"-0.712\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.434\" y=\"-5.538\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-8.5455\" y=\"-8.205\" width=\"2.667\" height=\"1.27\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.025\" y=\"-7.408\" width=\"0.8\" height=\"1.2\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.37\" y=\"-4.815\" width=\"1.0\" height=\"0.8\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"13.87\" cy=\"0.685\" r=\"4.7169875\" fill=\"#bdc4bc\" stroke=\"#83988f\" stroke-width=\".16\"/><circle cx=\"13.87\" cy=\"0.685\" r=\"2\" fill=\"#354440\" stroke=\"#b5bfb3\" stroke-width=\".12\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - Air quality sensor v1.3.brd",
      "boardSha256": "6b4ab99ed97ecd60b99722f96fb7bc3d0ff8437abdb4103a2fe678d573f548cd",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J1",
        "TP4",
        "TP3",
        "TP6",
        "TP7",
        "TP8",
        "TP1",
        "TP2",
        "TP5"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-mq2-101020055": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT",
        "type": "output",
        "description": "Analog gas-sensing voltage output. Source net: OUT.",
        "x": -16.61,
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: N$4.",
        "x": -16.61,
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
        "description": "4.9–5.1 V module supply input. Source net: VCC.",
        "x": -16.61,
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
        "x": -16.61,
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
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "OUT",
        "type": "output",
        "description": "Analog gas-sensing voltage output. Source net: OUT.",
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: N$4.",
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
        "description": "4.9–5.1 V module supply input. Source net: VCC.",
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
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
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
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
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
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"10.695\" y=\"-3.887\" width=\"7.112\" height=\"7.112\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.81\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"-0.1\" cy=\"0.431\" r=\"8.8\" fill=\"#bdc4bc\" stroke=\"#83988f\" stroke-width=\".16\"/><circle cx=\"-0.1\" cy=\"0.431\" r=\"2\" fill=\"#354440\" stroke=\"#b5bfb3\" stroke-width=\".12\"/>",
    "backArtwork": "<rect x=\"2.718\" y=\"-3.693\" width=\"3.0\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5765\" y=\"2.844\" width=\"4.445\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.0215\" y=\"-3.1885\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.053\" y=\"1.701\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.053\" y=\"-2.744\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1644\" y=\"-2.543\" width=\"1.6208\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.751\" y=\"1.32\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove-Gas Sensor v1.4.brd",
      "boardSha256": "23d3bc1e5795ef08d395a6f8c846ecf6f5d1bb57a74ff693afb68dcbae01b8dc",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-mq5-101020056": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "OUT",
        "type": "output",
        "description": "Analog gas-sensing voltage output. Source net: OUT.",
        "x": -16.61,
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: N$4.",
        "x": -16.61,
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
        "description": "4.9–5.1 V module supply input. Source net: VCC.",
        "x": -16.61,
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
        "x": -16.61,
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
        "id": "tp1-t",
        "number": "TP1.T",
        "label": "OUT",
        "type": "output",
        "description": "Analog gas-sensing voltage output. Source net: OUT.",
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
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: N$4.",
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
        "description": "4.9–5.1 V module supply input. Source net: VCC.",
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
        "id": "tp5-t",
        "number": "TP5.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP5",
        "back": true,
        "smd": true
      },
      {
        "id": "tp6-t",
        "number": "TP6.T",
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
        "connector": "TP6",
        "back": true,
        "smd": true
      },
      {
        "id": "tp7-t",
        "number": "TP7.T",
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
        "connector": "TP7",
        "back": true,
        "smd": true
      },
      {
        "id": "tp8-t",
        "number": "TP8.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP8",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"10.695\" y=\"-3.887\" width=\"7.112\" height=\"7.112\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-18.81\" y=\"-4.95\" width=\"5.0\" height=\"10.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><circle cx=\"-0.1\" cy=\"0.431\" r=\"8.8\" fill=\"#bdc4bc\" stroke=\"#83988f\" stroke-width=\".16\"/><circle cx=\"-0.1\" cy=\"0.431\" r=\"2\" fill=\"#354440\" stroke=\"#b5bfb3\" stroke-width=\".12\"/>",
    "backArtwork": "<rect x=\"2.718\" y=\"-3.693\" width=\"3.0\" height=\"5.2\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.5765\" y=\"2.844\" width=\"4.445\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.0215\" y=\"-3.1885\" width=\"1.651\" height=\"4.191\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.053\" y=\"1.701\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.053\" y=\"-2.744\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.1644\" y=\"-2.543\" width=\"1.6208\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.751\" y=\"1.32\" width=\"2.794\" height=\"1.27\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove-Gas Sensor v1.4.brd",
      "boardSha256": "23d3bc1e5795ef08d395a6f8c846ecf6f5d1bb57a74ff693afb68dcbae01b8dc",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "TP1",
        "TP2",
        "TP3",
        "TP4",
        "TP5",
        "TP6",
        "TP7",
        "TP8"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-high-temperature-111020002": {
    "contacts": [
      {
        "id": "j2-1",
        "number": "J2.1",
        "label": "A0",
        "type": "output",
        "description": "Amplified thermocouple output. Source net: A0.",
        "x": -13.435,
        "y": 3.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-2",
        "number": "J2.2",
        "label": "A1",
        "type": "output",
        "description": "Buffered ambient compensation output. Source net: A1.",
        "x": -13.435,
        "y": 1.05,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-3",
        "number": "J2.3",
        "label": "VCC",
        "type": "power_in",
        "description": "3.3–5 V module supply input. Source net: VCC.",
        "x": -13.435,
        "y": -0.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-4",
        "number": "J2.4",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -13.435,
        "y": -2.95,
        "size": [
          2.54,
          0.9652
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true
      },
      {
        "id": "j2-ss1",
        "number": "J2.SS1",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -16.835,
        "y": 5.996,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true,
        "caption": "J2.SS1"
      },
      {
        "id": "j2-ss2",
        "number": "J2.SS2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND. Grounded connector retention contact.",
        "x": -16.835,
        "y": -5.896,
        "size": [
          2.1844,
          2.032
        ],
        "shape": "rect",
        "connector": "J2",
        "back": false,
        "smd": true,
        "caption": "J2.SS2"
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
        "id": "a0-t",
        "number": "A0.T",
        "label": "A0",
        "type": "output",
        "description": "Amplified thermocouple output. Source net: A0.",
        "x": -18.515,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "A0",
        "back": true,
        "smd": true
      },
      {
        "id": "a1-t",
        "number": "A1.T",
        "label": "A1",
        "type": "output",
        "description": "Buffered ambient compensation output. Source net: A1.",
        "x": -18.515,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "A1",
        "back": true,
        "smd": true
      },
      {
        "id": "j1-1",
        "number": "J1.1",
        "label": "TC+",
        "type": "passive",
        "description": "Thermocouple positive sensing terminal through the source input protection/filter network. Source net: N$3.",
        "x": 15.267,
        "y": 5.737,
        "size": [
          1.85,
          1.85
        ],
        "shape": "rect",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "j1-2",
        "number": "J1.2",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 15.267,
        "y": 2.237,
        "size": [
          1.85,
          1.85
        ],
        "shape": "circle",
        "connector": "J1",
        "back": false,
        "drill": 1
      },
      {
        "id": "tp-t",
        "number": "TP.T",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP",
        "back": true,
        "smd": true
      },
      {
        "id": "tp2-t",
        "number": "TP2.T",
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
        "connector": "TP2",
        "back": true,
        "smd": true
      },
      {
        "id": "vref-t",
        "number": "VREF.T",
        "label": "1V5",
        "type": "power_out",
        "description": "Buffered 1.5 V reference output from the source amplifier; do not drive externally. Source net: 1V5.",
        "x": 18.315,
        "y": -6.3,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "VREF",
        "back": true,
        "smd": true
      },
      {
        "id": "tp3-t",
        "number": "TP3.T",
        "label": "TC+",
        "type": "passive",
        "description": "Thermocouple positive sensing-node test pad. Source net: N$3.",
        "x": 18.315,
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
        "label": "A1",
        "type": "output",
        "description": "Buffered ambient compensation output. Source net: A1.",
        "x": 18.315,
        "y": 3.86,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "TP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"-18.835\" y=\"-6.05\" width=\"5.3\" height=\"12.2\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"11.767\" y=\"0.487\" width=\"7.0\" height=\"7.0\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"1.718\" y=\"-4.363\" width=\"5.0\" height=\"4.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"13.87\" y=\"-6.3\" width=\"2.54\" height=\"5.08\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.514\" y=\"-6.681\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.027\" y=\"1.955\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-1.855\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.386\" y=\"-6.681\" width=\"1.778\" height=\"3.302\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.3714\" y=\"2.029\" width=\"1.6208\" height=\"2.9\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.472\" y=\"-6.4905\" width=\"1.6\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.244\" y=\"-1.6645\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.869\" y=\"5.384\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"4.091\" y=\"5.384\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.313\" y=\"5.384\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.313\" y=\"2.209\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.926\" y=\"5.511\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.656\" y=\"-1.601\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.281\" y=\"5.511\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-5.18\" y=\"-1.601\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.275\" y=\"5.511\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-3.275\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.624\" y=\"5.511\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.1\" y=\"-6.427\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.1\" y=\"-1.728\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.847\" y=\"-6.427\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-1.624\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.704\" y=\"-1.601\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"9.425\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"7.52\" y=\"-5.157\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-9.371\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-7.212\" y=\"5.638\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-10.895\" y=\"2.082\" width=\"1.27\" height=\"2.794\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - High Temperature Sensor v1.0 .brd",
      "boardSha256": "73db83a3a6b7d2d922a1eb2c3dc5fa6ac9b4596eec5a8c3cf05658a99e390927",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "J2",
        "VCC",
        "A0",
        "A1",
        "J1",
        "TP",
        "TP2",
        "VREF",
        "TP3",
        "TP4"
      ],
      "reviewWarnings": [],
      "reviewedResolutions": [
        "Explicit external contacts selected; internal sensor component leads and manufacturing fiducials excluded.",
        "Signal types/functions reviewed from source net destinations and wiki function descriptions, overriding generic IO/passive library defaults.",
        "Source module frame isolated from panel copies and normalized into a continuous contour."
      ]
    }
  },
  "seeed-grove-max31850k-101020555": {
    "contacts": [
      {
        "id": "sda3-t",
        "number": "SDA3.T",
        "label": "3V3",
        "type": "power_out",
        "description": "Onboard generated sensor/MCU supply test output; do not drive externally. Source rail 3V3. Source net: 3V3.",
        "x": 3.075,
        "y": -5.03,
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
        "id": "j5-1",
        "number": "J5.1",
        "label": "DQOUT",
        "type": "bidirectional",
        "description": "Level-shifted 1-Wire DQ data in the module supply domain; use the source pull-up configuration. Source net: DQOUT.",
        "x": -10.16,
        "y": 3.05,
        "size": [
          2.74,
          1.01
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true
      },
      {
        "id": "j5-2",
        "number": "J5.2",
        "label": "NC",
        "type": "no_connect",
        "description": "Unused source contact; leave open. Source net: NC.",
        "x": -10.16,
        "y": 1.05,
        "size": [
          2.74,
          1.01
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
        "description": "3.3 V or 5 V module supply input. Source net: VCC.",
        "x": -10.16,
        "y": -0.95,
        "size": [
          2.74,
          1.01
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
        "x": -10.16,
        "y": -2.95,
        "size": [
          2.74,
          1.01
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
        "x": -17.66,
        "y": 5.45,
        "size": [
          3,
          1.5
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
        "x": -17.66,
        "y": -5.35,
        "size": [
          3,
          1.5
        ],
        "shape": "rect",
        "connector": "J5",
        "back": false,
        "smd": true,
        "caption": "J5.SS2"
      },
      {
        "id": "gnd4-t",
        "number": "GND4.T",
        "label": "DQOUT",
        "type": "bidirectional",
        "description": "Level-shifted 1-Wire DQ data in the module supply domain; use the source pull-up configuration. Source net: DQOUT.",
        "x": -18.515,
        "y": 6.4,
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
        "connector": "VCC1",
        "back": true,
        "smd": true
      },
      {
        "id": "sda4-t",
        "number": "SDA4.T",
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
        "x": -18.515,
        "y": -6.3,
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
        "id": "j1-1",
        "number": "J1.1",
        "label": "T+",
        "type": "passive",
        "description": "Thermocouple positive input through L1 to the MAX31850K T+ input. Source net: N$1.",
        "x": 15.648,
        "y": 2.59,
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
        "label": "T−",
        "type": "passive",
        "description": "Thermocouple negative input through L2 to the MAX31850K T− input. Source net: N$2.",
        "x": 15.648,
        "y": -2.49,
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
        "id": "gnd1-t",
        "number": "GND1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": -6.3,
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
        "id": "vcc2-t",
        "number": "VCC2.T",
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
        "connector": "VCC2",
        "back": true,
        "smd": true
      },
      {
        "id": "sda1-t",
        "number": "SDA1.T",
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
        "connector": "SDA1",
        "back": true,
        "smd": true
      },
      {
        "id": "scl1-t",
        "number": "SCL1.T",
        "label": "NC",
        "type": "no_connect",
        "description": "Physical source contact has no active or passive circuit connection beyond the unconnected connector/test net. Source net: unconnected.",
        "x": 18.315,
        "y": 6.4,
        "size": [
          1.143,
          1.143
        ],
        "shape": "rect",
        "connector": "SCL1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-mm",
        "number": "JP1.MM",
        "label": "AD0",
        "type": "input",
        "description": "MAX31850K hardware address bit AD0 configuration input. Source net: AD0.",
        "x": 0.535,
        "y": -7.697,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-00",
        "number": "JP1.00",
        "label": "ADDR_HIGH",
        "type": "passive",
        "description": "Address HIGH-selection strap node biased through the source resistor from the regulated rail. Source net: N$6.",
        "x": 0.535,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp1-11",
        "number": "JP1.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": 0.535,
        "y": -6.427,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP1",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-mm",
        "number": "JP2.MM",
        "label": "AD1",
        "type": "input",
        "description": "MAX31850K hardware address bit AD1 configuration input. Source net: AD1.",
        "x": -1.37,
        "y": -7.697,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-00",
        "number": "JP2.00",
        "label": "ADDR_HIGH",
        "type": "passive",
        "description": "Address HIGH-selection strap node biased through the source resistor from the regulated rail. Source net: N$6.",
        "x": -1.37,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp2-11",
        "number": "JP2.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -1.37,
        "y": -6.427,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP2",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-mm",
        "number": "JP3.MM",
        "label": "AD2",
        "type": "input",
        "description": "MAX31850K hardware address bit AD2 configuration input. Source net: AD2.",
        "x": -3.275,
        "y": -7.697,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-00",
        "number": "JP3.00",
        "label": "ADDR_HIGH",
        "type": "passive",
        "description": "Address HIGH-selection strap node biased through the source resistor from the regulated rail. Source net: N$6.",
        "x": -3.275,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp3-11",
        "number": "JP3.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -3.275,
        "y": -6.427,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP3",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-mm",
        "number": "JP4.MM",
        "label": "AD3",
        "type": "input",
        "description": "MAX31850K hardware address bit AD3 configuration input. Source net: AD3.",
        "x": -5.18,
        "y": -7.697,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-00",
        "number": "JP4.00",
        "label": "ADDR_HIGH",
        "type": "passive",
        "description": "Address HIGH-selection strap node biased through the source resistor from the regulated rail. Source net: N$6.",
        "x": -5.18,
        "y": -8.967,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      },
      {
        "id": "jp4-11",
        "number": "JP4.11",
        "label": "GND",
        "type": "power_in",
        "description": "Common module ground / supply return. Source net: GND.",
        "x": -5.18,
        "y": -6.427,
        "size": [
          1.016,
          1.016
        ],
        "shape": "rect",
        "connector": "JP4",
        "back": true,
        "smd": true
      }
    ],
    "artwork": "<rect x=\"10.568\" y=\"-5.03\" width=\"10.502\" height=\"10.78\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-19.46\" y=\"-6.05\" width=\"9.2\" height=\"12.2\" rx=\".12\" fill=\"#deded0\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.64\" y=\"-1.45\" width=\"4.0\" height=\"3.0\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.8305\" y=\"-6.3\" width=\"2.921\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.869\" y=\"-1.4105\" width=\"1.27\" height=\"2.921\" rx=\".12\" fill=\"#a7934e\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"2.286\" y=\"-0.993\" width=\"1.578\" height=\"2.086\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.386\" y=\"5.003\" width=\"2.032\" height=\"1.27\" rx=\".12\" fill=\"#242c30\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"2.171\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.175\" y=\"2.171\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.175\" y=\"-6.465\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.889\" y=\"-2.02\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"3.175\" y=\"-3.671\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"5.08\" y=\"-6.465\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.889\" y=\"4.965\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"0.889\" y=\"-6.465\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-6.731\" y=\"-6.465\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.953\" y=\"-6.465\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"6.985\" y=\"-3.671\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.445\" y=\"4.965\" width=\"1.07\" height=\"1.6\" rx=\".12\" fill=\"#b7a782\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "backArtwork": "<rect x=\"-5.942\" y=\"-9.729\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-4.037\" y=\"-9.729\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-2.132\" y=\"-9.729\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/><rect x=\"-0.227\" y=\"-9.729\" width=\"1.524\" height=\"4.064\" rx=\".12\" fill=\"#293333\" stroke=\"#8b9b8e\" stroke-width=\".08\"/>",
    "provenance": {
      "review": "Explicit manufacturer external connector/contact selection; physical source geometry and source schematic roles reviewed. Current sales SKU matched; warehouse PCB revision is not guaranteed.",
      "format": "EAGLE XML",
      "boardFile": "Grove - 1-Wire Themocouple Amplifier (MAX31850K).brd",
      "boardSha256": "91d166d4364e9b48431f36a64548fd9a516097bd2785208b5bdd8ebe6513f098",
      "sourceBounds": [
        -20,
        -10.2,
        20.2,
        10.3
      ],
      "selectedConnectors": [
        "SDA3",
        "J5",
        "GND4",
        "VCC1",
        "SDA4",
        "SCL",
        "J1",
        "GND1",
        "VCC2",
        "SDA1",
        "SCL1",
        "JP1",
        "JP2",
        "JP3",
        "JP4"
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
