// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-ina219aidcnr",
    "name": "INA219AIDCNR — Digital shunt-current and bus-voltage monitor with I2C interface",
    "part": "INA219AIDCNR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ina219.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/INA219"
      }
    ],
    "description": "Digital shunt-current and bus-voltage monitor with I2C interface. The DCN SOT-23-8 pinout differs from the SOIC variant.",
    "subtitle": "Digital shunt-current and bus-voltage monitor with I2C interface",
    "tags": [
      "current monitor",
      "i2c"
    ],
    "packageName": "SOT-23-8",
    "pins": [
      [
        "IN+",
        "input",
        "Positive shunt-sense input, supply side of the shunt resistor."
      ],
      [
        "IN−",
        "input",
        "Negative shunt-sense input and bus-voltage measurement input."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "VS",
        "power_in",
        "3.0–5.5 V supply input."
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
        "A0",
        "input",
        "I2C address select; connect to GND, VS, SDA or SCL as specified."
      ],
      [
        "A1",
        "input",
        "I2C address select; connect to GND, VS, SDA or SCL as specified."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/INA219AIDCNR/1952540",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 40523,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-13.txt",
      "excerpt": "INA219AIDCNR; In-Stock: 40,523"
    },
    "kind": "soic",
    "body": [
      1.6,
      2.9
    ],
    "rowSpacing": 2.4,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ]
  },
  {
    "id": "ti-ina226aidgsr",
    "name": "INA226AIDGSR — High-side or low-side digital current, voltage and power monitor with a separate bus-voltage input",
    "part": "INA226AIDGSR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ina226.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/INA226"
      }
    ],
    "description": "High-side or low-side digital current, voltage and power monitor with a separate bus-voltage input.",
    "subtitle": "High-side or low-side digital current, voltage and power monitor with a separate bus-voltage input",
    "tags": [
      "current monitor",
      "i2c"
    ],
    "packageName": "MSOP-10",
    "pins": [
      [
        "A1",
        "input",
        "I2C address-select input."
      ],
      [
        "A0",
        "input",
        "I2C address-select input."
      ],
      [
        "ALERT",
        "open_collector",
        "Open-drain alert or conversion-ready output; use an external pull-up."
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
        "VS",
        "power_in",
        "2.7–5.5 V supply input."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "VBUS",
        "input",
        "Bus-voltage measurement input."
      ],
      [
        "IN−",
        "input",
        "Load-side shunt-sense input."
      ],
      [
        "IN+",
        "input",
        "Supply-side shunt-sense input."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/INA226AIDGSR/2687236",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 65955,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-13.txt",
      "excerpt": "INA226AIDGSR; In-Stock: 65,955"
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
  },
  {
    "id": "ti-ina169na-3k",
    "name": "INA169NA/3K — High-side current-shunt monitor with a current output and external output load resistor",
    "part": "INA169NA/3K",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ina169.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/INA169"
      }
    ],
    "description": "High-side current-shunt monitor with a current output and external output load resistor.",
    "subtitle": "High-side current-shunt monitor with a current output and external output load resistor",
    "tags": [
      "current monitor",
      "analog"
    ],
    "packageName": "SOT-23-5",
    "pins": [
      [
        "OUT",
        "output",
        "Current output proportional to shunt voltage; an external load resistor converts it to voltage."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "VIN+",
        "input",
        "Supply-side current-shunt input."
      ],
      [
        "VIN−",
        "input",
        "Load-side current-shunt input."
      ],
      [
        "V+",
        "power_in",
        "2.7–60 V supply input; respect the separate shunt common-mode limits."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/INA169NA-3K/2254837",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 35552,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-13.txt",
      "excerpt": "INA169NA/3K; In-Stock: 35,552"
    },
    "kind": "SOT235"
  },
  {
    "id": "ti-ina180a2idbvr",
    "name": "INA180A2IDBVR — 26 V common-mode current-sense amplifier, A2 gain of 50 V/V and pinout A",
    "part": "INA180A2IDBVR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ina180.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/INA180"
      }
    ],
    "description": "26 V common-mode current-sense amplifier, A2 gain of 50 V/V and pinout A.",
    "subtitle": "26 V common-mode current-sense amplifier, A2 gain of 50 V/V and pinout A",
    "tags": [
      "current monitor",
      "analog"
    ],
    "packageName": "SOT-23-5",
    "pins": [
      [
        "OUT",
        "output",
        "Analog output proportional to shunt voltage, fixed 50 V/V gain."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "IN+",
        "input",
        "Positive shunt input; bus side for high-side measurement."
      ],
      [
        "IN−",
        "input",
        "Negative shunt input; load side for high-side measurement."
      ],
      [
        "VS",
        "power_in",
        "2.7–5.5 V supply input."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/INA180A2IDBVR/8132987",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 4962,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-35.txt",
      "excerpt": "INA180A2IDBVR; In-Stock: 4,962"
    },
    "kind": "SOT235"
  }
];
