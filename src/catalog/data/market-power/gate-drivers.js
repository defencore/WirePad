// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-ucc27524adr",
    "name": "UCC27524ADR — Dual 5 A low-side noninverting MOSFET gate driver with separate channel-enable inputs",
    "part": "UCC27524ADR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ucc27524a.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/UCC27524A"
      }
    ],
    "description": "Dual 5 A low-side noninverting MOSFET gate driver with separate channel-enable inputs.",
    "subtitle": "Dual 5 A low-side noninverting MOSFET gate driver with separate channel-enable inputs",
    "tags": [
      "gate driver",
      "mosfet"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "ENA",
        "input",
        "Channel A enable: low disables; high or floating enables."
      ],
      [
        "INA",
        "input",
        "Noninverting channel A logic input."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "INB",
        "input",
        "Noninverting channel B logic input."
      ],
      [
        "OUTB",
        "output",
        "Channel B low-side MOSFET gate output."
      ],
      [
        "VDD",
        "power_in",
        "4.5–18 V gate-driver bias supply."
      ],
      [
        "OUTA",
        "output",
        "Channel A low-side MOSFET gate output."
      ],
      [
        "ENB",
        "input",
        "Channel B enable: low disables; high or floating enables."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/UCC27524ADR/5004988",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 3158,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-24.txt",
      "excerpt": "UCC27524ADR; In-Stock: 3,158"
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
    "id": "ti-lm5109bma-nopb",
    "name": "LM5109BMA/NOPB — 100 V high-side/low-side gate driver with independent TTL/CMOS control inputs",
    "part": "LM5109BMA/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm5109b.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM5109B"
      }
    ],
    "description": "100 V high-side/low-side gate driver with independent TTL/CMOS control inputs.",
    "subtitle": "100 V high-side/low-side gate driver with independent TTL/CMOS control inputs",
    "tags": [
      "gate driver",
      "half bridge"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "VDD",
        "power_in",
        "Positive gate-drive supply; bypass to VSS."
      ],
      [
        "HI",
        "input",
        "High-side logic input; tie unused input low."
      ],
      [
        "LI",
        "input",
        "Low-side logic input; tie unused input low."
      ],
      [
        "VSS",
        "power_in",
        "Ground and low-side return."
      ],
      [
        "LO",
        "output",
        "Low-side MOSFET gate output."
      ],
      [
        "HS",
        "power_in",
        "Floating high-side return; connect to high-side MOSFET source and bootstrap-capacitor negative terminal."
      ],
      [
        "HO",
        "output",
        "High-side MOSFET gate output."
      ],
      [
        "HB",
        "power_in",
        "Floating high-side positive supply; connect bootstrap-capacitor positive terminal."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM5109BMA-NOPB/1302373",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 16091,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-25.txt",
      "excerpt": "LM5109BMA/NOPB; In-Stock: 16,091"
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
    "id": "microchip-tc4420cpa",
    "name": "TC4420CPA — Single 6 A noninverting MOSFET gate driver with paired supply, ground and output contacts",
    "part": "TC4420CPA",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/21419D.pdf",
    "references": [],
    "description": "Single 6 A noninverting MOSFET gate driver with paired supply, ground and output contacts.",
    "subtitle": "Single 6 A noninverting MOSFET gate driver with paired supply, ground and output contacts",
    "tags": [
      "gate driver",
      "mosfet"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "VDD",
        "power_in",
        "4.5–18 V gate-driver supply input; connect both VDD pins."
      ],
      [
        "INPUT",
        "input",
        "Noninverting logic input."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "GND",
        "power_in",
        "Power return; connect both ground pins."
      ],
      [
        "GND",
        "power_in",
        "Power return; connect both ground pins."
      ],
      [
        "OUTPUT",
        "output",
        "Gate-driver output; connect both output pins."
      ],
      [
        "OUTPUT",
        "output",
        "Gate-driver output; connect both output pins."
      ],
      [
        "VDD",
        "power_in",
        "4.5–18 V gate-driver supply input; connect both VDD pins."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/TC4420CPA/267369",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 5,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-25.txt",
      "excerpt": "TC4420CPA; In-Stock: 5"
    },
    "kind": "dip",
    "body": [
      6.35,
      9.81
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54,
    "internalConnections": [
      [
        "p1",
        "p8"
      ],
      [
        "p4",
        "p5"
      ],
      [
        "p6",
        "p7"
      ]
    ]
  },
  {
    "id": "microchip-tc4427cpa",
    "name": "TC4427CPA — Dual 1",
    "part": "TC4427CPA",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/devicedoc/20001422g.pdf",
    "references": [],
    "description": "Dual 1.5 A noninverting MOSFET gate driver.",
    "subtitle": "Dual 1",
    "tags": [
      "gate driver",
      "mosfet"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "IN A",
        "input",
        "Channel A noninverting logic input."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "IN B",
        "input",
        "Channel B noninverting logic input."
      ],
      [
        "OUT B",
        "output",
        "Channel B MOSFET gate output."
      ],
      [
        "VDD",
        "power_in",
        "4.5–18 V gate-driver supply input."
      ],
      [
        "OUT A",
        "output",
        "Channel A MOSFET gate output."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/TC4427CPA/115309",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 973,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-26.txt",
      "excerpt": "TC4427CPA; In-Stock: 973"
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
    "id": "infineon-irs2110strpbf",
    "name": "IRS2110STRPBF — 500 V high-side/low-side gate driver with separate logic supply, return and shutdown",
    "part": "IRS2110STRPBF",
    "manufacturer": "Infineon Technologies",
    "category": "Semiconductors",
    "source": "https://www.infineon.com/assets/row/public/documents/24/49/infineon-irs2110-datasheet-en.pdf",
    "references": [],
    "description": "500 V high-side/low-side gate driver with separate logic supply, return and shutdown. Wide SOIC-16 variant, whose numbering differs from PDIP-14.",
    "subtitle": "500 V high-side/low-side gate driver with separate logic supply, return and shutdown",
    "tags": [
      "gate driver",
      "half bridge"
    ],
    "packageName": "SOIC-16 wide",
    "pins": [
      [
        "LO",
        "output",
        "Low-side MOSFET gate output."
      ],
      [
        "COM",
        "power_in",
        "Low-side driver return."
      ],
      [
        "VCC",
        "power_in",
        "Low-side gate-driver supply input, 10–20 V."
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
        "VS",
        "power_in",
        "Floating high-side return; connect to the high-side source."
      ],
      [
        "VB",
        "power_in",
        "Floating bootstrap supply above VS."
      ],
      [
        "HO",
        "output",
        "High-side MOSFET gate output."
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
        "VDD",
        "power_in",
        "Logic supply referenced to VSS."
      ],
      [
        "HIN",
        "input",
        "Noninverting high-side control input."
      ],
      [
        "SD",
        "input",
        "Active-high shutdown input."
      ],
      [
        "LIN",
        "input",
        "Noninverting low-side control input."
      ],
      [
        "VSS",
        "power_in",
        "Logic ground return."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/infineon-technologies/IRS2110STRPBF/1189732",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 2857,
      "manufacturer": "Infineon Technologies",
      "sourceArtifact": "market-batch-38.txt",
      "excerpt": "IRS2110STRPBF; In-Stock: 2,857"
    },
    "kind": "soic",
    "body": [
      7.5,
      10.3
    ],
    "rowSpacing": 9.3,
    "pitch": 1.27
  },
  {
    "id": "infineon-irs2104strpbf",
    "name": "IRS2104STRPBF — 600 V half-bridge gate driver with interlocking dead time and shutdown",
    "part": "IRS2104STRPBF",
    "manufacturer": "Infineon Technologies",
    "category": "Semiconductors",
    "source": "https://www.infineon.com/assets/row/public/documents/24/49/infineon-irs2104-datasheet-en.pdf",
    "references": [],
    "description": "600 V half-bridge gate driver with interlocking dead time and shutdown.",
    "subtitle": "600 V half-bridge gate driver with interlocking dead time and shutdown",
    "tags": [
      "gate driver",
      "half bridge"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "VCC",
        "power_in",
        "Low-side gate-driver and logic supply input, 10–20 V."
      ],
      [
        "IN",
        "input",
        "Half-bridge logic input; high drives HO and low drives LO after dead time."
      ],
      [
        "SD",
        "input",
        "Shutdown input; low disables the outputs."
      ],
      [
        "COM",
        "power_in",
        "Low-side supply return."
      ],
      [
        "LO",
        "output",
        "Low-side MOSFET gate output."
      ],
      [
        "VS",
        "power_in",
        "Floating high-side return."
      ],
      [
        "HO",
        "output",
        "High-side MOSFET gate output."
      ],
      [
        "VB",
        "power_in",
        "Floating high-side bootstrap supply."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/infineon-technologies/IRS2104STRPBF/1189810",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 7454,
      "manufacturer": "Infineon Technologies",
      "sourceArtifact": "market-batch-36.txt",
      "excerpt": "IRS2104STRPBF; In-Stock: 7,454"
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
    "id": "infineon-irs21844strpbf",
    "name": "IRS21844STRPBF — 600 V half-bridge driver with programmable dead time and separate logic/power returns, SOIC-14 variant",
    "part": "IRS21844STRPBF",
    "manufacturer": "Infineon Technologies",
    "category": "Semiconductors",
    "source": "https://www.infineon.com/assets/row/public/documents/24/49/infineon-irs2184-datasheet-en.pdf",
    "references": [],
    "description": "600 V half-bridge driver with programmable dead time and separate logic/power returns, SOIC-14 variant.",
    "subtitle": "600 V half-bridge driver with programmable dead time and separate logic/power returns, SOIC-14 variant",
    "tags": [
      "gate driver",
      "half bridge"
    ],
    "packageName": "SOIC-14",
    "pins": [
      [
        "IN",
        "input",
        "Half-bridge logic input, in phase with HO."
      ],
      [
        "SD",
        "input",
        "Shutdown input; low disables the outputs."
      ],
      [
        "VSS",
        "power_in",
        "Logic ground return."
      ],
      [
        "DT",
        "passive",
        "External dead-time programming resistor connection, referenced to VSS."
      ],
      [
        "COM",
        "power_in",
        "Low-side driver return."
      ],
      [
        "LO",
        "output",
        "Low-side MOSFET gate output."
      ],
      [
        "VCC",
        "power_in",
        "Low-side gate-driver supply input, 10–20 V."
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
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "VS",
        "power_in",
        "Floating high-side return."
      ],
      [
        "HO",
        "output",
        "High-side MOSFET gate output."
      ],
      [
        "VB",
        "power_in",
        "Floating high-side bootstrap supply."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/infineon-technologies/IRS21844STRPBF/1189820",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1320,
      "manufacturer": "Infineon Technologies",
      "sourceArtifact": "market-batch-31.txt",
      "excerpt": "IRS21844STRPBF; In-Stock: 1,320"
    },
    "kind": "soic",
    "body": [
      3.9,
      8.65
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27
  },
  {
    "id": "renesas-hip4081aipz",
    "name": "HIP4081AIPZ — 80 V full-bridge N-channel MOSFET driver with independent inputs and programmable turn-on delays",
    "part": "HIP4081AIPZ",
    "manufacturer": "Renesas Electronics",
    "category": "Semiconductors",
    "source": "https://www.renesas.com/us/en/document/dst/hip4081a-datasheet",
    "references": [],
    "description": "80 V full-bridge N-channel MOSFET driver with independent inputs and programmable turn-on delays.",
    "subtitle": "80 V full-bridge N-channel MOSFET driver with independent inputs and programmable turn-on delays",
    "tags": [
      "gate driver",
      "full bridge"
    ],
    "packageName": "PDIP-20",
    "pins": [
      [
        "BHB",
        "power_in",
        "Bridge B high-side bootstrap supply."
      ],
      [
        "BHI",
        "input",
        "Bridge B high-side logic input."
      ],
      [
        "DIS",
        "input",
        "Active-high disable overrides all four gate outputs."
      ],
      [
        "VSS",
        "power_in",
        "Chip negative supply and logic ground."
      ],
      [
        "BLI",
        "input",
        "Bridge B low-side logic input."
      ],
      [
        "ALI",
        "input",
        "Bridge A low-side logic input."
      ],
      [
        "AHI",
        "input",
        "Bridge A high-side logic input."
      ],
      [
        "HDEL",
        "passive",
        "High-side turn-on delay resistor connection to VSS."
      ],
      [
        "LDEL",
        "passive",
        "Low-side turn-on delay resistor connection to VSS."
      ],
      [
        "AHB",
        "power_in",
        "Bridge A high-side bootstrap supply."
      ],
      [
        "AHO",
        "output",
        "Bridge A high-side MOSFET gate output."
      ],
      [
        "AHS",
        "power_in",
        "Bridge A high-side source and bootstrap-return connection."
      ],
      [
        "ALO",
        "output",
        "Bridge A low-side MOSFET gate output."
      ],
      [
        "ALS",
        "power_in",
        "Bridge A low-side MOSFET source return."
      ],
      [
        "VCC",
        "power_in",
        "Positive gate-driver supply; maintain the same potential as VDD."
      ],
      [
        "VDD",
        "power_in",
        "Positive driver supply; maintain the same potential as VCC and bypass locally."
      ],
      [
        "BLS",
        "power_in",
        "Bridge B low-side MOSFET source return."
      ],
      [
        "BLO",
        "output",
        "Bridge B low-side MOSFET gate output."
      ],
      [
        "BHS",
        "power_in",
        "Bridge B high-side source and bootstrap-return connection."
      ],
      [
        "BHO",
        "output",
        "Bridge B high-side MOSFET gate output."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/renesas-electronics-corporation/HIP4081AIPZ/821445",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 785,
      "manufacturer": "Renesas Electronics",
      "sourceArtifact": "market-batch-27.txt",
      "excerpt": "HIP4081AIPZ; In-Stock: 785"
    },
    "kind": "dip",
    "body": [
      6.35,
      26.9
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  }
];
