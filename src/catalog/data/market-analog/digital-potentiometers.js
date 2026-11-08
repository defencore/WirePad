// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "adi-ad8400arz10",
    "name": "AD8400ARZ10 — Single-channel, 256-position, 10 kΩ SPI digital potentiometer",
    "part": "AD8400ARZ10",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/AD8400_8402_8403.pdf",
    "references": [],
    "description": "Single-channel, 256-position, 10 kΩ SPI digital potentiometer.",
    "subtitle": "Single-channel, 256-position, 10 kΩ SPI digital potentiometer",
    "tags": [
      "digital potentiometer",
      "spi"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "B1",
        "passive",
        "Resistor-string endpoint B; 10 kΩ nominal A-to-B resistance."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "CS",
        "input",
        "Active-low serial chip select and wiper-update control."
      ],
      [
        "SDI",
        "input",
        "Serial configuration-data input."
      ],
      [
        "CLK",
        "input",
        "Serial clock input, positive-edge triggered."
      ],
      [
        "VDD",
        "power_in",
        "2.7–5.5 V positive supply input."
      ],
      [
        "W1",
        "passive",
        "Programmable resistor wiper terminal."
      ],
      [
        "A1",
        "passive",
        "Resistor-string endpoint A; 10 kΩ nominal A-to-B resistance."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/AD8400ARZ10/671098",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 7963,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-17.txt",
      "excerpt": "AD8400ARZ10; In-Stock: 7,963"
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
    "id": "microchip-mcp4131-103e-p",
    "name": "MCP4131-103E/P — Single-channel, 7-bit, 10 kΩ SPI digital potentiometer with volatile wiper memory",
    "part": "MCP4131-103E/P",
    "manufacturer": "Microchip Technology",
    "category": "Semiconductors",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/22060b.pdf",
    "references": [],
    "description": "Single-channel, 7-bit, 10 kΩ SPI digital potentiometer with volatile wiper memory.",
    "subtitle": "Single-channel, 7-bit, 10 kΩ SPI digital potentiometer with volatile wiper memory",
    "tags": [
      "digital potentiometer",
      "spi"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "CS",
        "input",
        "Active-low serial chip select."
      ],
      [
        "SCK",
        "input",
        "SPI serial clock input."
      ],
      [
        "SDI/SDO",
        "bidirectional",
        "Multiplexed SPI serial data input/output; follow the half-duplex wiring requirements."
      ],
      [
        "VSS",
        "power_in",
        "Ground return."
      ],
      [
        "P0A",
        "passive",
        "Resistor-string endpoint A; 10 kΩ nominal A-to-B resistance."
      ],
      [
        "P0W",
        "passive",
        "Programmable resistor wiper terminal."
      ],
      [
        "P0B",
        "passive",
        "Resistor-string endpoint B; 10 kΩ nominal A-to-B resistance."
      ],
      [
        "VDD",
        "power_in",
        "Positive supply input; bypass to the corresponding ground and follow the datasheet supply limits."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP4131-103E-P/1874338",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 252,
      "manufacturer": "Microchip Technology",
      "sourceArtifact": "market-batch-18.txt",
      "excerpt": "MCP4131-103E/P; In-Stock: 252"
    },
    "kind": "dip",
    "body": [
      6.35,
      9.81
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  }
];
