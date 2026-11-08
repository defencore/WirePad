// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "bmp581-ic",
    "name": "BMP581 I3C barometric pressure sensor",
    "part": "BMP581",
    "manufacturer": "Bosch Sensortec",
    "source": "https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmp581-ds004.pdf",
    "packageName": "LGA-10 metal lid",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "VDDIO",
        "power_in",
        "Supply 1.08–3.6 V interface supply; see sequence requirements."
      ],
      [
        "SCK",
        "input",
        "I2C/I3C/SPI serial clock."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SDI",
        "bidirectional",
        "SPI input/bidirectional 3-wire or I2C/I3C serial data."
      ],
      [
        "SDO",
        "bidirectional",
        "SPI output or I2C address input; mode dependent."
      ],
      [
        "CSB",
        "input",
        "Active-low SPI select; high selects I2C/I3C."
      ],
      [
        "INT",
        "output",
        "Interrupt output; may connect GND only if interrupt disabled."
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
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.71–3.6 V analog supply."
      ]
    ],
    "subtitle": "I3C barometric pressure sensor",
    "description": "Low-noise pressure sensor withI3C, I2C and SPI interfaces.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/category/615.html?brand=916",
      "status": "LCSC listed exactBosch BMP581 C5362283, 9, 363 in stock."
    },
    "tags": [
      "sensor",
      "i3c barometric pressure sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingAt": [
      0.545,
      -0.545
    ],
    "openingRadius": 0.075,
    "bodyColor": "#9bada9",
    "internalConnections": [
      [
        "p3",
        "p8",
        "p9"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.7625,
        "y": -0.25,
        "edge": "left",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 2,
        "x": -0.7625,
        "y": 0.25,
        "edge": "left",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 3,
        "x": -0.5,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 4,
        "x": 0,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 5,
        "x": 0.5,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 6,
        "x": 0.7625,
        "y": 0.25,
        "edge": "right",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 7,
        "x": 0.7625,
        "y": -0.25,
        "edge": "right",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 8,
        "x": 0.5,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 9,
        "x": 0,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 10,
        "x": -0.5,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lps22hhtr-ic",
    "name": "LPS22HHTR I3C pressure sensor",
    "part": "LPS22HHTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lps22hh.pdf",
    "packageName": "HLGA-10L",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "Vdd_IO",
        "power_in",
        "Supply 1.7–3.6 V digital I/O supply."
      ],
      [
        "SCL/SPC",
        "input",
        "I2C/I3C or SPI serial clock."
      ],
      [
        "RES",
        "passive",
        "Reserved terminal; manufacturer requires ground connection."
      ],
      [
        "SDA/SDI/SDO",
        "bidirectional",
        "I2C/I3C serial data or SPI data input/bidirectional 3-wire."
      ],
      [
        "SDO/SA0",
        "bidirectional",
        "SPI data output or I2C/I3C static address bit."
      ],
      [
        "CS",
        "input",
        "SPI select; high selects I2C/I3C communication."
      ],
      [
        "INT_DRDY",
        "output",
        "Interrupt or data-ready output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.7–3.6 V analog supply."
      ]
    ],
    "subtitle": "I3C pressure sensor",
    "description": "Absolute pressure sensor with 128-sample FIFO and programmable threshold interrupts.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C2827824.html?is_substitute=1&original_product_code=C5124834&original_unit_price=5.3938",
      "status": "LCSC listed 67 in stock, manufacturer ST."
    },
    "tags": [
      "sensor",
      "i3c pressure sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingRadius": 0.15,
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.7625,
        "y": -0.25,
        "edge": "left",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 2,
        "x": -0.7625,
        "y": 0.25,
        "edge": "left",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 3,
        "x": -0.5,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 4,
        "x": 0,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 5,
        "x": 0.5,
        "y": 0.7625,
        "edge": "bottom",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 6,
        "x": 0.7625,
        "y": 0.25,
        "edge": "right",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 7,
        "x": 0.7625,
        "y": -0.25,
        "edge": "right",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 8,
        "x": 0.5,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 9,
        "x": 0,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      },
      {
        "number": 10,
        "x": -0.5,
        "y": -0.7625,
        "edge": "top",
        "size": [
          0.35,
          0.35
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lps28dfwtr-ic",
    "name": "LPS28DFWTR Water-resistant pressure sensor",
    "part": "LPS28DFWTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lps28dfw.pdf",
    "packageName": "CCLGA-7L water-resistant metal lid",
    "body": [
      2.8,
      2.8
    ],
    "pitch": 1.15,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "I2C/I3C data."
      ],
      [
        "SA0",
        "input",
        "Least-significantI2C address bit."
      ],
      [
        "SCL",
        "input",
        "I2C/I3C clock."
      ],
      [
        "INT_DRDY",
        "output",
        "Interrupt ordata-ready output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.7–3.6 V."
      ],
      [
        "PAD2LID",
        "passive",
        "Mechanical pad connected to metal lid; solder to isolated PCB land or GND as specified; not internally tied to signal ground."
      ]
    ],
    "subtitle": "Water-resistant pressure sensor",
    "description": "Dual-range pressure sensor for barometric and shallow-water depth measurement with gel-protected mechanics.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/LPS28DFWTR/15903389",
      "status": "DigiKey exact STMicroelectronics LPS28DFWTR listing showed 10,038 in stock."
    },
    "tags": [
      "sensor",
      "water-resistant pressure sensor"
    ],
    "numericLabels": true,
    "opening": true,
    "openingRadius": 0.2,
    "bodyColor": "#9bada9",
    "pads": [
      {
        "number": 1,
        "x": 0,
        "y": -1.125,
        "size": [
          1.4,
          0.35
        ],
        "edge": "top"
      },
      {
        "number": 2,
        "x": -1.125,
        "y": -0.575,
        "size": [
          0.35,
          0.9
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.125,
        "y": 0.575,
        "size": [
          0.35,
          0.9
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": 0,
        "y": 1.125,
        "size": [
          1.4,
          0.35
        ],
        "edge": "bottom"
      },
      {
        "number": 5,
        "x": 1.125,
        "y": 0.575,
        "size": [
          0.35,
          0.9
        ],
        "edge": "right"
      },
      {
        "number": 6,
        "x": 1.125,
        "y": -0.575,
        "size": [
          0.35,
          0.9
        ],
        "edge": "right"
      },
      {
        "number": 7,
        "x": 0,
        "y": 0,
        "size": [
          0.9,
          0.9
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  }
];
