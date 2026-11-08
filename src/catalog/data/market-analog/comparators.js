// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-lm393p",
    "name": "LM393P — Dual comparator with open-collector outputs",
    "part": "LM393P",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm393.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM393"
      }
    ],
    "description": "Dual comparator with open-collector outputs. Provide output pull-ups appropriate for the receiving circuit.",
    "subtitle": "Dual comparator with open-collector outputs",
    "tags": [
      "comparator",
      "open collector"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "OUTA",
        "open_collector",
        "Open-collector; external pull-up required comparator output for channel A."
      ],
      [
        "INA−",
        "input",
        "Inverting analog input for channel A."
      ],
      [
        "INA+",
        "input",
        "Noninverting analog input for channel A."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground in an allowed single-supply configuration; observe the datasheet operating limits."
      ],
      [
        "INB+",
        "input",
        "Noninverting analog input for channel B."
      ],
      [
        "INB−",
        "input",
        "Inverting analog input for channel B."
      ],
      [
        "OUTB",
        "open_collector",
        "Open-collector; external pull-up required comparator output for channel B."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM393P/277045",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 4987,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-1.txt",
      "excerpt": "LM393P; In-Stock: 4,987"
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
    "id": "ti-lm339n",
    "name": "LM339N — Quad comparator with four open-collector outputs",
    "part": "LM339N",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm339.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM339"
      }
    ],
    "description": "Quad comparator with four open-collector outputs. Channel naming follows the cited TI package diagram.",
    "subtitle": "Quad comparator with four open-collector outputs",
    "tags": [
      "comparator",
      "open collector"
    ],
    "packageName": "PDIP-14",
    "pins": [
      [
        "1OUT",
        "open_collector",
        "Open-collector output associated with inputs 1IN− and 1IN+; use an external pull-up."
      ],
      [
        "2OUT",
        "open_collector",
        "Open-collector output associated with inputs 2IN− and 2IN+; use an external pull-up."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ],
      [
        "2IN−",
        "input",
        "Inverting input of comparator 2."
      ],
      [
        "2IN+",
        "input",
        "Noninverting input of comparator 2."
      ],
      [
        "1IN−",
        "input",
        "Inverting input of comparator 1."
      ],
      [
        "1IN+",
        "input",
        "Noninverting input of comparator 1."
      ],
      [
        "3IN−",
        "input",
        "Inverting input of comparator 3."
      ],
      [
        "3IN+",
        "input",
        "Noninverting input of comparator 3."
      ],
      [
        "4IN−",
        "input",
        "Inverting input of comparator 4."
      ],
      [
        "4IN+",
        "input",
        "Noninverting input of comparator 4."
      ],
      [
        "GND",
        "power_in",
        "Ground and negative supply return."
      ],
      [
        "4OUT",
        "open_collector",
        "Comparator 4 open-collector output; use an external pull-up."
      ],
      [
        "3OUT",
        "open_collector",
        "Comparator 3 open-collector output; use an external pull-up."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM339N/277628",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 49198,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-replacements-1.txt",
      "excerpt": "LM339N; In-Stock: 49,198"
    },
    "kind": "dip",
    "body": [
      6.35,
      19.3
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  },
  {
    "id": "ti-lm311p",
    "name": "LM311P — High-speed comparator with separate output-transistor emitter and collector",
    "part": "LM311P",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm311.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM311"
      }
    ],
    "description": "High-speed comparator with separate output-transistor emitter and collector.",
    "subtitle": "High-speed comparator with separate output-transistor emitter and collector",
    "tags": [
      "comparator"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "EMIT OUT",
        "open_emitter",
        "Emitter of the output transistor; connect to the output return appropriate for the application."
      ],
      [
        "IN+",
        "input",
        "Noninverting analog input."
      ],
      [
        "IN−",
        "input",
        "Inverting analog input."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground in an allowed single-supply configuration; observe the datasheet operating limits."
      ],
      [
        "BALANCE",
        "passive",
        "Offset-balance connection for the external adjustment network."
      ],
      [
        "BAL/STRB",
        "input",
        "Balance/strobe connection; may disable the output transistor through the strobe circuit."
      ],
      [
        "COL OUT",
        "open_collector",
        "Collector of the output transistor; external pull-up required."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.in/en/products/detail/texas-instruments/LM311P/277038",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 24836,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-1.txt",
      "excerpt": "LM311P; In-Stock: 24,836"
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
    "id": "ti-lmv393mx-nopb",
    "name": "LMV393MX/NOPB — Dual comparator with open-collector outputs",
    "part": "LMV393MX/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lmv393.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LMV393"
      }
    ],
    "description": "Dual comparator with open-collector outputs. Provide output pull-ups appropriate for the receiving circuit.",
    "subtitle": "Dual comparator with open-collector outputs",
    "tags": [
      "comparator",
      "open collector"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "OUTA",
        "open_collector",
        "Open-collector; external pull-up required comparator output for channel A."
      ],
      [
        "INA−",
        "input",
        "Inverting analog input for channel A."
      ],
      [
        "INA+",
        "input",
        "Noninverting analog input for channel A."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground in an allowed single-supply configuration; observe the datasheet operating limits."
      ],
      [
        "INB+",
        "input",
        "Noninverting analog input for channel B."
      ],
      [
        "INB−",
        "input",
        "Inverting analog input for channel B."
      ],
      [
        "OUTB",
        "open_collector",
        "Open-collector; external pull-up required comparator output for channel B."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LMV393MX-NOPB/3527088",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 11075,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-replacements-1.txt",
      "excerpt": "LMV393MX/NOPB; In-Stock: 11,075"
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
    "id": "microchip-mcp6542-i-p",
    "name": "MCP6542-I/P — Dual sub-microamp comparator with rail-to-rail inputs and push-pull logic outputs",
    "part": "MCP6542-I/P",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/devicedoc/mcp6541%20output%20submicroamp%20comparators%2020001696k.pdf",
    "references": [],
    "description": "Dual sub-microamp comparator with rail-to-rail inputs and push-pull logic outputs.",
    "subtitle": "Dual sub-microamp comparator with rail-to-rail inputs and push-pull logic outputs",
    "tags": [
      "comparator",
      "push pull"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "OUTA",
        "output",
        "Push-pull comparator output for channel A."
      ],
      [
        "INA−",
        "input",
        "Inverting analog input for channel A."
      ],
      [
        "INA+",
        "input",
        "Noninverting analog input for channel A."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground in an allowed single-supply configuration; observe the datasheet operating limits."
      ],
      [
        "INB+",
        "input",
        "Noninverting analog input for channel B."
      ],
      [
        "INB−",
        "input",
        "Inverting analog input for channel B."
      ],
      [
        "OUTB",
        "output",
        "Push-pull comparator output for channel B."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP6542-I-P/458383",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 564,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-10.txt",
      "excerpt": "MCP6542-I/P; In-Stock: 564"
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
    "id": "microchip-mcp6562-e-sn",
    "name": "MCP6562-E/SN — Dual low-power high-speed comparator with rail-to-rail inputs and push-pull logic outputs",
    "part": "MCP6562-E/SN",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/MCP6561-1R-1U-2-4-1.8V-Low-Power-Push-Pull-Output-Comparator-DS20002139E.pdf",
    "references": [],
    "description": "Dual low-power high-speed comparator with rail-to-rail inputs and push-pull logic outputs.",
    "subtitle": "Dual low-power high-speed comparator with rail-to-rail inputs and push-pull logic outputs",
    "tags": [
      "comparator",
      "push pull"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "OUTA",
        "output",
        "Push-pull comparator output for channel A."
      ],
      [
        "INA−",
        "input",
        "Inverting analog input for channel A."
      ],
      [
        "INA+",
        "input",
        "Noninverting analog input for channel A."
      ],
      [
        "V−",
        "power_in",
        "Negative supply or ground in an allowed single-supply configuration; observe the datasheet operating limits."
      ],
      [
        "INB+",
        "input",
        "Noninverting analog input for channel B."
      ],
      [
        "INB−",
        "input",
        "Inverting analog input for channel B."
      ],
      [
        "OUTB",
        "output",
        "Push-pull comparator output for channel B."
      ],
      [
        "V+",
        "power_in",
        "Positive supply input; observe the datasheet operating limits and bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP6562-E-SN/1680913",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 2222,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-10.txt",
      "excerpt": "MCP6562-E/SN; In-Stock: 2,222"
    },
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27
  }
];
