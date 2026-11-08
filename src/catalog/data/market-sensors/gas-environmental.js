// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "sgp40-ic",
    "name": "SGP40-D-R4 VOC gas sensor",
    "part": "SGP40-D-R4",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/resource/datasheet/sgp40",
    "packageName": "DFN-6 with grounded die pad",
    "body": [
      2.44,
      2.44
    ],
    "pitch": 0.8,
    "pins": [
      [
        "VDD",
        "power_in",
        "Supply 1.7–3.6 V; use the same external supply as VDDH with source RC decoupling."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C bidirectional serial data; external pull-up required."
      ],
      [
        "n/a",
        "passive",
        "No electrical function; manufacturer requires an external connection to ground."
      ],
      [
        "VDDH",
        "power_in",
        "Supply 1.7–3.6 V hotplate supply; connect to the same external supply as VDD."
      ],
      [
        "SCL",
        "bidirectional",
        "I2C serial clock, bidirectional for clock stretching; provide pull-up."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "VOC gas sensor",
    "description": "MOx gas sensor providing a raw VOC signal for humidity compensation and Sensirion VOC Index processing.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.sg/en/products/detail/sensirion-ag/SGP40-D-R4/12820418",
      "status": "DigiKey exact Sensirion SGP40-D-R4 listing showed 6,121 in stock."
    },
    "tags": [
      "sensor",
      "voc gas sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      0.45,
      0.35
    ],
    "openingRadius": 0.4,
    "modelHeight": 0.85,
    "internalConnections": [
      [
        "p2",
        "pEP"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.15,
        "y": -0.8,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 2,
        "x": -1.15,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 3,
        "x": -1.15,
        "y": 0.8,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 4,
        "x": 1.15,
        "y": 0.8,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 5,
        "x": 1.15,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 6,
        "x": 1.15,
        "y": -0.8,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          1.25,
          1.7
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "sgp41-ic",
    "name": "SGP41-D-R4 VOC and NOx gas sensor",
    "part": "SGP41-D-R4",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/media/documents/5FE8673C/61E96F50/Sensirion_Gas_Sensors_Datasheet_SGP41.pdf",
    "packageName": "DFN-6 with grounded die pad",
    "body": [
      2.44,
      2.44
    ],
    "pitch": 0.8,
    "pins": [
      [
        "VDD",
        "power_in",
        "Supply 1.7–3.6 V; use the same external supply as VDDH with source RC decoupling."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C bidirectional serial data; external pull-up required."
      ],
      [
        "n/a",
        "passive",
        "No electrical function; manufacturer requires an external connection to ground."
      ],
      [
        "VDDH",
        "power_in",
        "Supply 1.7–3.6 V hotplate supply; connect to the same external supply as VDD."
      ],
      [
        "SCL",
        "bidirectional",
        "I2C serial clock, bidirectional for clock stretching; provide pull-up."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "VOC and NOx gas sensor",
    "description": "MOx gas sensor with VOC and NOx raw signals for Sensirion Gas Index processing.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/sensirion-ag/SGP41-D-R4/15652790",
      "status": "DigiKey exact Sensirion SGP41-D-R4 listing showed 4,036 in stock."
    },
    "tags": [
      "sensor",
      "voc and nox gas sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      0.45,
      0.35
    ],
    "openingRadius": 0.4,
    "modelHeight": 0.85,
    "internalConnections": [
      [
        "p2",
        "pEP"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.15,
        "y": -0.8,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 2,
        "x": -1.15,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 3,
        "x": -1.15,
        "y": 0.8,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 4,
        "x": 1.15,
        "y": 0.8,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 5,
        "x": 1.15,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 6,
        "x": 1.15,
        "y": -0.8,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          1.25,
          1.7
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "ens160-bglt-ic",
    "name": "ENS160-BGLT Digital multi-gas air-quality sensor",
    "part": "ENS160-BGLT",
    "manufacturer": "ScioSense",
    "source": "https://www.sciosense.com/wp-content/uploads/2023/12/ENS160-Datasheet.pdf",
    "packageName": "LGA-9 with metal lid",
    "body": [
      3,
      3
    ],
    "pitch": 1.05,
    "pins": [
      [
        "MOSI/SDA",
        "bidirectional",
        "SPI data input or I2C bidirectional data."
      ],
      [
        "SCLK/SCL",
        "input",
        "SPI/I2C clock input."
      ],
      [
        "MISO/ADDR",
        "bidirectional",
        "SPI data output or I2C address-select input: low 0x 52, high 0x 53."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.71–1.98 V; dedicated 1.8 V main supply, not 3.3 V."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.71–3.6 V digital interface supply."
      ],
      [
        "INTn",
        "output",
        "Active-low interrupt, configurable push-pull or open-drain through CONFIG.INT_CFG."
      ],
      [
        "CSn",
        "input",
        "Low selects SPI; tie directly to VDDIO for I2C."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Digital multi-gas air-quality sensor",
    "description": "Four metal-oxide sensing elements produce processed VOC-based air-quality and equivalent CO 2 readings; equivalent CO 2 is not a direct CO 2 measurement.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/sciosense/ENS160-BGLT/16129831",
      "status": "DigiKey exact ScioSense ENS160-BGLT listing showed 3,243 in stock."
    },
    "tags": [
      "sensor",
      "digital multi-gas air-quality sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      -0.7,
      -0.7
    ],
    "openingRadius": 0.15,
    "bodyColor": "#9bada9",
    "modelHeight": 0.83,
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.05,
        "y": -1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.05,
        "y": 0,
        "size": [
          0.8,
          0.8
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.05,
        "y": 1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": 0,
        "y": 1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "bottom"
      },
      {
        "number": 5,
        "x": 1.05,
        "y": 1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "right"
      },
      {
        "number": 6,
        "x": 1.05,
        "y": 0,
        "size": [
          0.8,
          0.8
        ],
        "edge": "right"
      },
      {
        "number": 7,
        "x": 1.05,
        "y": -1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "right"
      },
      {
        "number": 8,
        "x": 0,
        "y": -1.05,
        "size": [
          0.8,
          0.8
        ],
        "edge": "top"
      },
      {
        "number": 9,
        "x": 0,
        "y": 0,
        "size": [
          0.8,
          0.8
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "bme688-ic",
    "name": "BME688 Gas-scanning environmental sensor",
    "part": "BME688",
    "manufacturer": "Bosch Sensortec",
    "source": "https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme688-ds000.pdf",
    "packageName": "LGA-8 metal lid",
    "body": [
      3,
      3
    ],
    "pitch": 0.8,
    "pins": [
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "CSB",
        "input",
        "SPI chip select; tie to VDDIO for I2C."
      ],
      [
        "SDI",
        "bidirectional",
        "SPI data input or bidirectional three-wire SPI/I2C SDA."
      ],
      [
        "SCK",
        "input",
        "SPI clock or I2C SCL."
      ],
      [
        "SDO",
        "bidirectional",
        "SPI data output or I2C address-select input."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.2–3.6 V digital interface supply."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.71–3.6 V analog supply."
      ]
    ],
    "subtitle": "Gas-scanning environmental sensor",
    "description": "Combined gas, pressure, humidity and temperature sensor with programmable heater scans and application-trained gas classification support.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/Humidity-Sensors-Temperature-and-Humidity-Sensors_Bosch-Sensortec-BME688_C3664478.html",
      "status": "LCSC listed 1, 050 exact Bosch BME 688 in stock."
    },
    "tags": [
      "sensor",
      "gas-scanning environmental sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      -0.55,
      0.8
    ],
    "openingRadius": 0.12,
    "bodyColor": "#9bada9",
    "modelHeight": 0.93,
    "internalConnections": [
      [
        "p1",
        "p7"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": 1.1875,
        "y": -1.2000000000000002,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 2,
        "x": 1.1875,
        "y": -0.4,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 3,
        "x": 1.1875,
        "y": 0.4,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 4,
        "x": 1.1875,
        "y": 1.2000000000000002,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 5,
        "x": -1.1875,
        "y": 1.2000000000000002,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 6,
        "x": -1.1875,
        "y": 0.4,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 7,
        "x": -1.1875,
        "y": -0.4,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 8,
        "x": -1.1875,
        "y": -1.2000000000000002,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  }
];
