// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-tps2113apw",
    "name": "TPS2113APW — Automatic two-input power multiplexer with current limiting and reverse-current protection",
    "part": "TPS2113APW",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/tps2113a.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/TPS2113A"
      }
    ],
    "description": "Automatic two-input power multiplexer with current limiting and reverse-current protection.",
    "subtitle": "Automatic two-input power multiplexer with current limiting and reverse-current protection",
    "tags": [
      "power mux",
      "power switch"
    ],
    "packageName": "TSSOP-8",
    "pins": [
      [
        "STAT",
        "open_collector",
        "Open-drain status output; high impedance when IN2 supplies OUT."
      ],
      [
        "EN",
        "input",
        "Enable/control logic input; follow the operating truth table."
      ],
      [
        "VSNS",
        "input",
        "Input-selection comparator sense input, nominal 0.8 V threshold."
      ],
      [
        "ILIM",
        "passive",
        "External resistor to ground sets output-current limit."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "IN2",
        "power_in",
        "Secondary power input."
      ],
      [
        "OUT",
        "power_out",
        "Selected and current-limited power output."
      ],
      [
        "IN1",
        "power_in",
        "Primary power input."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/TPS2113APW/1670919",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 431,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-25.txt",
      "excerpt": "TPS2113APW; In-Stock: 431"
    },
    "kind": "tssop",
    "body": [
      4.4,
      3
    ],
    "rowSpacing": 5.5,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ]
  }
];
