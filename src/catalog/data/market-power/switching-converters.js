// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "onsemi-mc34063ap1g",
    "name": "MC34063AP1G — Buck, boost or inverting DC/DC controller with an internal switching transistor",
    "part": "MC34063AP1G",
    "manufacturer": "onsemi",
    "category": "Semiconductors",
    "source": "https://www.onsemi.com/download/data-sheet/pdf/mc34063a-d.pdf",
    "references": [],
    "description": "Buck, boost or inverting DC/DC controller with an internal switching transistor.",
    "subtitle": "Buck, boost or inverting DC/DC controller with an internal switching transistor",
    "tags": [
      "dc dc",
      "switching regulator"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "SW COL",
        "open_collector",
        "Collector of the internal power-switch transistor; connect to the switching power stage."
      ],
      [
        "SW EMIT",
        "open_emitter",
        "Emitter of the internal power-switch transistor; connect per the selected topology."
      ],
      [
        "CT",
        "passive",
        "External timing-capacitor terminal."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "COMP IN−",
        "input",
        "Inverting feedback comparator input; internal threshold is nominally 1.25 V."
      ],
      [
        "VCC",
        "power_in",
        "3–40 V supply input."
      ],
      [
        "IPK SENSE",
        "input",
        "Peak current-limit sense input."
      ],
      [
        "DRV COL",
        "power_in",
        "Collector supply for the internal driver transistor; connect per the selected converter topology."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/onsemi/MC34063AP1G/919067",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 4827,
      "manufacturer": "onsemi",
      "sourceArtifact": "market-batch-20.txt",
      "excerpt": "MC34063AP1G; In-Stock: 4,827"
    },
    "kind": "dip",
    "body": [
      6.35,
      9.81
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  },
  {
    "id": "ti-lm2675m-adj-nopb",
    "name": "LM2675M-ADJ/NOPB — 1 A SIMPLE SWITCHER step-down regulator, adjustable-output SOIC-8 variant",
    "part": "LM2675M-ADJ/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm2675.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM2675"
      }
    ],
    "description": "1 A SIMPLE SWITCHER step-down regulator, adjustable-output SOIC-8 variant.",
    "subtitle": "1 A SIMPLE SWITCHER step-down regulator, adjustable-output SOIC-8 variant",
    "tags": [
      "buck",
      "switching regulator"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "CB",
        "passive",
        "Bootstrap capacitor connection; connect the specified capacitor to VSW."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "FB",
        "input",
        "Output feedback divider input for this adjustable regulator."
      ],
      [
        "ON/OFF",
        "input",
        "Shutdown control: high turns the regulator off; low enables operation."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "VIN",
        "power_in",
        "Input power supply for the regulator."
      ],
      [
        "VSW",
        "power_out",
        "Power-switch output node; connect to the output inductor and catch diode."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM2675M-ADJ-NOPB/363803",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 961,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-20.txt",
      "excerpt": "LM2675M-ADJ/NOPB; In-Stock: 961"
    },
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27
  },
  {
    "id": "ti-lm5007mm-nopb",
    "name": "LM5007MM/NOPB — 75 V, 0",
    "part": "LM5007MM/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm5007.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM5007"
      }
    ],
    "description": "75 V, 0.5 A constant-on-time step-down regulator in VSSOP-8.",
    "subtitle": "75 V, 0",
    "tags": [
      "buck",
      "switching regulator"
    ],
    "packageName": "MSOP-8",
    "pins": [
      [
        "SW",
        "power_out",
        "Power-switch node; connect to the output LC filter."
      ],
      [
        "BST",
        "power_in",
        "Floating bootstrap supply; connect the specified capacitor to SW."
      ],
      [
        "RCL",
        "passive",
        "Current-limit off-time setting resistor connection to RTN."
      ],
      [
        "RTN",
        "power_in",
        "Circuit ground and power return."
      ],
      [
        "FB",
        "input",
        "Output-voltage feedback input, nominal 2.5 V threshold."
      ],
      [
        "RON",
        "passive",
        "On-time setting resistor connection to VIN."
      ],
      [
        "VCC",
        "power_out",
        "Internal bias-regulator output; bypass locally. Observe the allowed auxiliary-supply connection."
      ],
      [
        "VIN",
        "power_in",
        "High-voltage input supply, 9–75 V operating range."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM5007MM-NOPB/599058",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 8173,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-20.txt",
      "excerpt": "LM5007MM/NOPB; In-Stock: 8,173"
    },
    "kind": "tssop",
    "body": [
      3,
      3
    ],
    "rowSpacing": 4.2,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ]
  }
];
