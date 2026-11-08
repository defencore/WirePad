// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "microchip-mcp4921-e-p",
    "name": "MCP4921-E/P — Single-channel, 12-bit SPI DAC with external reference and output latch",
    "part": "MCP4921-E/P",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/devicedoc/21897b.pdf",
    "references": [],
    "description": "Single-channel, 12-bit SPI DAC with external reference and output latch.",
    "subtitle": "Single-channel, 12-bit SPI DAC with external reference and output latch",
    "tags": [
      "dac",
      "spi",
      "12 bit"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "VDD",
        "power_in",
        "Positive supply input; bypass to the corresponding ground and follow the datasheet supply limits."
      ],
      [
        "CS",
        "input",
        "Active-low SPI chip select."
      ],
      [
        "SCK",
        "input",
        "SPI serial clock input."
      ],
      [
        "SDI",
        "input",
        "SPI serial data input."
      ],
      [
        "LDAC",
        "input",
        "Active-low latch input transfers buffered DAC data to the output register."
      ],
      [
        "VREFA",
        "input",
        "External reference voltage input for DAC A."
      ],
      [
        "AVSS",
        "power_in",
        "Analog ground return."
      ],
      [
        "VOUTA",
        "output",
        "Buffered analog DAC output A."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4921-E-P/716280",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 799,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-16.txt",
      "excerpt": "MCP4921-E/P; In-Stock: 799"
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
    "id": "microchip-mcp4922-e-p",
    "name": "MCP4922-E/P — Dual-channel, 12-bit SPI DAC with separate external references, output latch and hardware shutdown",
    "part": "MCP4922-E/P",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/devicedoc/21897b.pdf",
    "references": [],
    "description": "Dual-channel, 12-bit SPI DAC with separate external references, output latch and hardware shutdown.",
    "subtitle": "Dual-channel, 12-bit SPI DAC with separate external references, output latch and hardware shutdown",
    "tags": [
      "dac",
      "spi",
      "12 bit"
    ],
    "packageName": "PDIP-14",
    "pins": [
      [
        "VDD",
        "power_in",
        "Positive supply input; bypass to the corresponding ground and follow the datasheet supply limits."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "CS",
        "input",
        "Active-low SPI chip select."
      ],
      [
        "SCK",
        "input",
        "SPI serial clock input."
      ],
      [
        "SDI",
        "input",
        "SPI serial data input."
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
        "LDAC",
        "input",
        "Active-low latch input transfers buffered DAC data to the output register."
      ],
      [
        "SHDN",
        "input",
        "Active-low hardware shutdown input."
      ],
      [
        "VOUTB",
        "output",
        "Buffered analog DAC output B."
      ],
      [
        "VREFB",
        "input",
        "External reference-voltage input for DAC B."
      ],
      [
        "AVSS",
        "power_in",
        "Analog ground return."
      ],
      [
        "VREFA",
        "input",
        "External reference-voltage input for DAC A."
      ],
      [
        "VOUTA",
        "output",
        "Buffered analog DAC output A."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4922-E-P/716251",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 640,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-16.txt",
      "excerpt": "MCP4922-E/P; In-Stock: 640"
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
    "id": "microchip-mcp4822-e-p",
    "name": "MCP4822-E/P — Dual-channel, 12-bit SPI DAC with internal 2",
    "part": "MCP4822-E/P",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/20002249B.pdf",
    "references": [],
    "description": "Dual-channel, 12-bit SPI DAC with internal 2.048 V reference. This is the eight-lead package, unlike MCP4922.",
    "subtitle": "Dual-channel, 12-bit SPI DAC with internal 2",
    "tags": [
      "dac",
      "spi",
      "12 bit"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "VDD",
        "power_in",
        "Positive supply input; bypass to the corresponding ground and follow the datasheet supply limits."
      ],
      [
        "CS",
        "input",
        "Active-low SPI chip select."
      ],
      [
        "SCK",
        "input",
        "SPI serial clock input."
      ],
      [
        "SDI",
        "input",
        "SPI serial data input."
      ],
      [
        "LDAC",
        "input",
        "Active-low latch input transfers buffered DAC data to the output register."
      ],
      [
        "VOUTB",
        "output",
        "Buffered analog DAC output B."
      ],
      [
        "VSS",
        "power_in",
        "Ground return."
      ],
      [
        "VOUTA",
        "output",
        "Buffered analog DAC output A."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4822-E-P/951465",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1155,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-16.txt",
      "excerpt": "MCP4822-E/P; In-Stock: 1,155"
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
    "id": "microchip-mcp4725a0t-e-ch",
    "name": "MCP4725A0T-E/CH — Single-channel, 12-bit I2C DAC with nonvolatile EEPROM and external address bit",
    "part": "MCP4725A0T-E/CH",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/DataSheets/MCP4725-Data-Sheet-20002039E.pdf",
    "references": [],
    "description": "Single-channel, 12-bit I2C DAC with nonvolatile EEPROM and external address bit.",
    "subtitle": "Single-channel, 12-bit I2C DAC with nonvolatile EEPROM and external address bit",
    "tags": [
      "dac",
      "i2c",
      "eeprom"
    ],
    "packageName": "SOT-23-6",
    "pins": [
      [
        "VOUT",
        "output",
        "Buffered DAC output."
      ],
      [
        "VSS",
        "power_in",
        "Ground return."
      ],
      [
        "VDD",
        "power_in",
        "2.7–5.5 V supply and DAC reference input."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C open-drain serial data. Provide a pull-up to a permitted interface voltage."
      ],
      [
        "SCL",
        "input",
        "I2C serial clock input. Provide the bus pull-up required by the host."
      ],
      [
        "A0",
        "input",
        "External I2C address-select bit; connect to VDD or VSS."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4725A0T-E-CH/1818537",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 15642,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-16.txt",
      "excerpt": "MCP4725A0T-E/CH; In-Stock: 15,642"
    },
    "kind": "soic",
    "body": [
      1.6,
      2.9
    ],
    "rowSpacing": 2.4,
    "pitch": 0.95,
    "padSize": [
      0.8,
      0.35
    ]
  },
  {
    "id": "microchip-mcp4728-e-un",
    "name": "MCP4728-E/UN — Quad-channel, 12-bit I2C DAC with EEPROM, selectable internal references and output latch",
    "part": "MCP4728-E/UN",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/devicedoc/22187e.pdf",
    "references": [],
    "description": "Quad-channel, 12-bit I2C DAC with EEPROM, selectable internal references and output latch.",
    "subtitle": "Quad-channel, 12-bit I2C DAC with EEPROM, selectable internal references and output latch",
    "tags": [
      "dac",
      "i2c",
      "eeprom"
    ],
    "packageName": "MSOP-10",
    "pins": [
      [
        "VDD",
        "power_in",
        "2.7–5.5 V supply input."
      ],
      [
        "SCL",
        "input",
        "I2C serial clock input. Provide the bus pull-up required by the host."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C open-drain serial data. Provide a pull-up to a permitted interface voltage."
      ],
      [
        "LDAC",
        "input",
        "Active-low latch input transfers buffered DAC data to the output register."
      ],
      [
        "RDY/BSY",
        "open_collector",
        "Open-drain ready/busy indication during EEPROM writing; use an external pull-up."
      ],
      [
        "VOUTA",
        "output",
        "Buffered analog DAC output A."
      ],
      [
        "VOUTB",
        "output",
        "Buffered analog DAC output B."
      ],
      [
        "VOUTC",
        "output",
        "Buffered analog DAC output C."
      ],
      [
        "VOUTD",
        "output",
        "Buffered analog DAC output D."
      ],
      [
        "VSS",
        "power_in",
        "Ground return."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4728-E-UN/2125526",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 7947,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-17.txt",
      "excerpt": "MCP4728-E/UN; In-Stock: 7,947"
    },
    "kind": "tssop",
    "body": [
      3,
      3
    ],
    "rowSpacing": 4.2,
    "pitch": 0.5,
    "padSize": [
      0.8,
      0.3
    ]
  }
];
