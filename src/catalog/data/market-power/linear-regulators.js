// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "st-lm317t",
    "name": "LM317T — ST 1",
    "part": "LM317T",
    "manufacturer": "STMicroelectronics",
    "category": "Semiconductors",
    "source": "https://www.st.com/resource/en/datasheet/lm217.pdf",
    "references": [],
    "description": "ST 1.5 A adjustable positive linear voltage regulator, TO-220 variant.",
    "subtitle": "ST 1",
    "tags": [
      "linear regulator",
      "adjustable",
      "to220"
    ],
    "packageName": "TO220",
    "pins": [
      [
        "ADJ",
        "input",
        "Output adjustment input; connect the feedback resistor network."
      ],
      [
        "OUT",
        "power_out",
        "Regulated positive output; also electrically connected to the metal tab."
      ],
      [
        "IN",
        "power_in",
        "Unregulated positive input supply; maintain the required input/output differential."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/LM317T/591677",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 103984,
      "manufacturer": "STMicroelectronics",
      "sourceArtifact": "market-batch-21.txt",
      "excerpt": "LM317T; In-Stock: 103,984"
    },
    "kind": "TO220"
  },
  {
    "id": "ti-lm337t-nopb",
    "name": "LM337T/NOPB — 1",
    "part": "LM337T/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm337.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM337"
      }
    ],
    "description": "1.5 A adjustable negative linear voltage regulator, TO-220 variant. Terminal 2 is input, unlike the positive LM317.",
    "subtitle": "1",
    "tags": [
      "linear regulator",
      "negative regulator",
      "to220"
    ],
    "packageName": "TO220",
    "pins": [
      [
        "ADJ",
        "input",
        "Output adjustment input; connect the feedback resistor network."
      ],
      [
        "IN",
        "power_in",
        "Unregulated negative input; also electrically connected to the metal tab."
      ],
      [
        "OUT",
        "power_out",
        "Regulated negative output; observe the required input/output differential."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM337T-NOPB/6222",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1201,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-22.txt",
      "excerpt": "LM337T/NOPB; In-Stock: 1,201"
    },
    "kind": "TO220"
  },
  {
    "id": "adi-lt1763cs8-3-3-pbf",
    "name": "LT1763CS8-3.3#PBF — 500 mA low-noise LDO regulator, fixed 3",
    "part": "LT1763CS8-3.3#PBF",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/1763fh.pdf",
    "references": [],
    "description": "500 mA low-noise LDO regulator, fixed 3.3 V output, with separate sense and bypass pins.",
    "subtitle": "500 mA low-noise LDO regulator, fixed 3",
    "tags": [
      "ldo",
      "linear regulator",
      "low noise"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "OUT",
        "power_out",
        "Regulated 3.3 V output; use the required output capacitor."
      ],
      [
        "SENSE",
        "input",
        "Output sense input for the fixed 3.3 V variant; connect to the desired output sensing point."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "BYP",
        "passive",
        "Internal-reference noise bypass; connect the specified capacitor or leave open."
      ],
      [
        "SHDN",
        "input",
        "Shutdown input: low disables the regulator, high enables operation."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "IN",
        "power_in",
        "Input supply; maintain headroom for the fixed 3.3 V output."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/LT1763CS8-3-3-PBF/891881",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 15487,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-22.txt",
      "excerpt": "LT1763CS8-3.3#PBF; In-Stock: 15,487"
    },
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "internalConnections": [
      [
        "p3",
        "p6",
        "p7"
      ]
    ]
  },
  {
    "id": "ti-lm723cn-nopb",
    "name": "LM723CN/NOPB — Precision adjustable voltage-regulator controller with current limit, reference and compensation connections",
    "part": "LM723CN/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm723.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM723"
      }
    ],
    "description": "Precision adjustable voltage-regulator controller with current limit, reference and compensation connections.",
    "subtitle": "Precision adjustable voltage-regulator controller with current limit, reference and compensation connections",
    "tags": [
      "linear regulator",
      "power controller"
    ],
    "packageName": "PDIP-14",
    "pins": [
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "CURRENT LIMIT",
        "input",
        "Current-limit transistor control input."
      ],
      [
        "CURRENT SENSE",
        "input",
        "Current-sense connection for the limiting network."
      ],
      [
        "IN−",
        "input",
        "Error-amplifier inverting input."
      ],
      [
        "IN+",
        "input",
        "Error-amplifier noninverting input."
      ],
      [
        "VREF",
        "power_out",
        "Precision reference-voltage output."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground return."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "VZ",
        "passive",
        "Internal Zener connection for negative-regulator applications."
      ],
      [
        "VOUT",
        "power_out",
        "Series-regulator pass-transistor output."
      ],
      [
        "VC",
        "power_in",
        "Collector supply of the internal pass transistor."
      ],
      [
        "V+",
        "power_in",
        "Positive controller supply input."
      ],
      [
        "FREQ COMP",
        "passive",
        "External frequency-compensation capacitor connection."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM723CN-NOPB/6318",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 4953,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-24.txt",
      "excerpt": "LM723CN/NOPB; In Stock: 4,953"
    },
    "kind": "dip",
    "body": [
      6.35,
      19.3
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  }
];
