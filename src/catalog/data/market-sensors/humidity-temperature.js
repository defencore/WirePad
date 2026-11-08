// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "sht20-ic",
    "name": "SHT20-TR-1.5KS Humidity and temperature sensor",
    "part": "SHT20-TR-1.5KS",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/media/documents/CCDE1377/635000A2/Sensirion_Datasheet_Humidity_Sensor_SHT20.pdf",
    "packageName": "DFN-6 with grounded die pad",
    "body": [
      3,
      3
    ],
    "pitch": 1,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "I2C serial data; external pull-up required."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.1–3.6 V."
      ],
      [
        "SCL",
        "bidirectional",
        "I2C serial clock with clock stretching; external pull-up required."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Humidity and temperature sensor",
    "description": "Digital humidity and temperature sensor with resolution selection and heater.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/sensirion-ag/SHT20-TR-1-5KS/5872244",
      "status": "DigiKey exact Sensirion SHT20-TR-1.5KS listing showed 3,776 in stock. Not for new designs."
    },
    "tags": [
      "temperature",
      "humidity and temperature sensor"
    ],
    "opening": true,
    "internalConnections": [
      [
        "p2",
        "pEP"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": 1.3,
        "y": 1.0,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 2,
        "x": 1.3,
        "y": -0.0,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 3,
        "x": 1.3,
        "y": -1.0,
        "edge": "left",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 4,
        "x": -1.3,
        "y": -1.0,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 5,
        "x": -1.3,
        "y": -0.0,
        "edge": "right",
        "size": [
          0.55,
          0.4
        ]
      },
      {
        "number": 6,
        "x": -1.3,
        "y": 1.0,
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
          1.5,
          2.4
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "sht31-dis-ic",
    "name": "SHT31-DIS-B2.5KS Humidity and temperature sensor",
    "part": "SHT31-DIS-B2.5KS",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/media/documents/213E6A3B/63A5A569/Datasheet_SHT3x_DIS.pdf",
    "packageName": "DFN-8 with grounded die pad",
    "body": [
      2.5,
      2.5
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "ADDR",
        "input",
        "Address select; tie high or low, do not float."
      ],
      [
        "ALERT",
        "output",
        "Active-high alarm output; leave float in g when unused."
      ],
      [
        "SCL",
        "bidirectional",
        "Open-drain I2C clock with stretching; provide pull-up."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.15–5.5 V."
      ],
      [
        "nRESET",
        "input",
        "Active-low reset; may float when unused or pull to VDD through at least 2kΩ."
      ],
      [
        "R",
        "passive",
        "No electrical function; manufacturer requires an external connection to VSS."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Humidity and temperature sensor",
    "description": "I2C humidity/temperature sensor with selectable address, reset and programmable alarm.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/sensirion-ag/SHT31-DIS-B2-5KS/5872294",
      "status": "DigiKey exact Sensirion SHT31-DIS-B2.5KS listing showed 17,426 in stock."
    },
    "tags": [
      "temperature",
      "humidity and temperature sensor"
    ],
    "opening": true,
    "internalConnections": [
      [
        "p8",
        "pEP"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.05,
        "y": -0.75,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -1.05,
        "y": -0.25,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -1.05,
        "y": 0.25,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 4,
        "x": -1.05,
        "y": 0.75,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 5,
        "x": 1.05,
        "y": 0.75,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 6,
        "x": 1.05,
        "y": 0.25,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 7,
        "x": 1.05,
        "y": -0.25,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 8,
        "x": 1.05,
        "y": -0.75,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          1.1,
          1.7
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "shtc3-ic",
    "name": "SHTC3-TR-2.5KS Low-power humidity and temperature sensor",
    "part": "SHTC3-TR-2.5KS",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/file/datasheet_shtc3",
    "packageName": "DFN-4 with grounded die pad",
    "body": [
      2,
      2
    ],
    "pitch": 1,
    "pins": [
      [
        "VDD",
        "power_in",
        "Supply 1.62–3.6 V."
      ],
      [
        "SCL",
        "bidirectional",
        "I2C clock with clock stretching; provide pull-up."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Low-power humidity and temperature sensor",
    "description": "Fast wake-up humidity sensor with low-power measurement mode and fixed I2C address 0x 70.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/sensirion-ag/SHTC3-TR-2-5KS/8628148",
      "status": "DigiKey exact Sensirion SHTC3-TR-2.5KS listing showed 29,988 in stock."
    },
    "tags": [
      "temperature",
      "low-power humidity and temperature sensor"
    ],
    "opening": true,
    "internalConnections": [
      [
        "p4",
        "pEP"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.8,
        "y": -0.5,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 2,
        "x": -0.8,
        "y": 0.5,
        "edge": "left",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 3,
        "x": 0.8,
        "y": 0.5,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": 4,
        "x": 0.8,
        "y": -0.5,
        "edge": "right",
        "size": [
          0.5,
          0.5
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          0.7,
          1.3
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "sht45-ad1b-ic",
    "name": "SHT45-AD1B-R3 Heated humidity and temperature sensor",
    "part": "SHT45-AD1B-R3",
    "manufacturer": "Sensirion",
    "source": "https://sensirion.com/resource/datasheet/sht4x",
    "packageName": "DFN-4 (1.5 ×1.5 mm)",
    "body": [
      1.5,
      1.5
    ],
    "pitch": 0.8,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "SCL",
        "input",
        "I2C serial-clock input; no clock stretching."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.08–3.6 V."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Heated humidity and temperature sensor",
    "description": "Fourth-generation low-voltage humidity sensor with configurable heater and CRC-protected results. The electrically isolated central die pad is a mechanical surface, not a signal terminal: leave the PCB beneath it free of copper as Sensirion specifies.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.ca/en/products/detail/sensirion-ag/SHT45-AD1B-R3/16360965",
      "status": "DigiKey exact Sensirion SHT45-AD1B-R3 listing showed 5,595 in stock."
    },
    "tags": [
      "temperature",
      "heated humidity and temperature sensor"
    ],
    "opening": true,
    "footprintNote": "No copper is allowed beneath the central die pad; leave its mechanical surface unsoldered, following Sensirion Figure 17.",
    "pads": [
      {
        "number": 1,
        "x": -0.7,
        "y": -0.4,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -0.7,
        "y": 0.4,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 3,
        "x": 0.7,
        "y": 0.4,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 4,
        "x": 0.7,
        "y": -0.4,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "hdc1080dmbr",
    "name": "HDC1080DMBR I2C humidity and temperature sensor",
    "part": "HDC1080DMBR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/hdc1080.pdf",
    "packageName": "PWSON-6 with floating DAP (DMB)",
    "body": [
      3,
      3
    ],
    "pitch": 1,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "NC",
        "no_connect",
        "Unused contact; may float or connect to GND as manufacturer permits."
      ],
      [
        "NC",
        "no_connect",
        "Unused contact; may float or connect to GND as manufacturer permits."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.7–5.5 V."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "DAP",
        "passive",
        "Die attach pad must remain electrically float in g; do not tie to GND."
      ]
    ],
    "subtitle": "I2C humidity and temperature sensor",
    "description": "Digital humidity/temperature sensor with integrated heater and unique serial number.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C82227.html",
      "status": "LCSC listed 30, 994 in stock, manufacturer TI."
    },
    "tags": [
      "temperature",
      "i2c humidity and temperature sensor"
    ],
    "opening": true,
    "pads": [
      {
        "number": 1,
        "x": -1.3,
        "y": -1.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 2,
        "x": -1.3,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 3,
        "x": -1.3,
        "y": 1.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 4,
        "x": 1.3,
        "y": 1.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 5,
        "x": 1.3,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 6,
        "x": 1.3,
        "y": -1.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": "DAP",
        "x": 0,
        "y": 0,
        "size": [
          1.4,
          2.4
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "hdc2080dmbr",
    "name": "HDC2080DMBR Interrupt humidity and temperature sensor",
    "part": "HDC2080DMBR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/hdc2080.pdf",
    "packageName": "PWSON-6 with floating DAP (DMB)",
    "body": [
      3,
      3
    ],
    "pitch": 1,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "ADDR",
        "input",
        "Address select may float or tie to GND/VDD; see exact table."
      ],
      [
        "DRDY/INT",
        "output",
        "Push-pull data-ready or programmable threshold interrupt."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.62–3.6 V."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "DAP",
        "passive",
        "Die attach pad may be soldered to an isolated float in g PCB pad; must NOT connect to GND."
      ]
    ],
    "subtitle": "Interrupt humidity and temperature sensor",
    "description": "Low-power digital humidity sensor with automatic measurement and programmable interrupt.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/HDC2080DMBR/9692560",
      "status": "DigiKey exact Texas Instruments HDC2080DMBR listing showed 21,297 in stock."
    },
    "tags": [
      "temperature",
      "interrupt humidity and temperature sensor"
    ],
    "opening": true,
    "pads": [
      {
        "number": 1,
        "x": -1.3,
        "y": -1.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 2,
        "x": -1.3,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 3,
        "x": -1.3,
        "y": 1.0,
        "edge": "left",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 4,
        "x": 1.3,
        "y": 1.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 5,
        "x": 1.3,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": 6,
        "x": 1.3,
        "y": -1.0,
        "edge": "right",
        "size": [
          0.6,
          0.45
        ]
      },
      {
        "number": "DAP",
        "x": 0,
        "y": 0,
        "size": [
          1.4,
          2.4
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "bme680-ic",
    "name": "BME680 Gas pressure humidity sensor",
    "part": "BME680",
    "manufacturer": "Bosch Sensortec",
    "source": "https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme680-ds001.pdf",
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
        "SPI chip select; tie VDDIO for I2C."
      ],
      [
        "SDI",
        "bidirectional",
        "SPI serial input/3-wire I/O or I2C SDA."
      ],
      [
        "SCK",
        "input",
        "SPI clock or I2C SCL."
      ],
      [
        "SDO",
        "bidirectional",
        "SPI data output or I2C address select."
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
    "subtitle": "Gas pressure humidity sensor",
    "description": "Combined gas-resistance, barometric pressure, humidity andtemperature sensor; gas readings require application compensation.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C125972.html?is_substitute=1&original_product_code=C3232509&original_unit_price=5.8507",
      "status": "LCSC listed 969 in stock, manufacturerBosch."
    },
    "tags": [
      "sensor",
      "gas pressure humidity sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      -0.55,
      0.8
    ],
    "openingRadius": 0.12,
    "bodyColor": "#9bada9",
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
