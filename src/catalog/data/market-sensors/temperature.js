// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "lm35dz-ic",
    "name": "LM35DZ/NOPB Analog temperature sensor",
    "part": "LM35DZ/NOPB",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/lm35.pdf",
    "packageName": "TO-92-3 (LP)",
    "body": [
      4.3,
      4.3
    ],
    "pitch": 1.27,
    "pins": [
      [
        "+VS",
        "power_in",
        "Supply 4–30 V."
      ],
      [
        "VOUT",
        "output",
        "Analog temperature output, 10 mV/°C; this D grade is specified for 0 to 100 °C."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Analog temperature sensor",
    "description": "Celsius-calibrated analog temperature sensor requiring no factory offset subtraction.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.jameco.com/z/LM35DZ-Texas-Instruments-Precision-Centigrade-Temperature-Sensor-3-Pin-TO-92_155740.html",
      "status": "Jameco listed 370 in stock."
    },
    "tags": [
      "temperature",
      "analog temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0.0,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      }
    ],
    "kind": "to92",
    "builder": "sensor"
  },
  {
    "id": "lm335z-ic",
    "name": "LM335Z/LFT7 Kelvin shunt temperature sensor",
    "part": "LM335Z/LFT7",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/lm135.pdf",
    "packageName": "TO-92-3 (LP)",
    "body": [
      4.3,
      4.3
    ],
    "pitch": 1.27,
    "pins": [
      [
        "ADJ",
        "input",
        "Calibration adjustment terminal."
      ],
      [
        "+",
        "passive",
        "Positive shunt-sensor terminal and analog 10 mV/K voltage output. Bias with 400 µA to 5 mA through an external resistor."
      ],
      [
        "−",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Kelvin shunt temperature sensor",
    "description": "Two-terminal shunt temperature sensor with an additional calibration terminal.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/base-product/texas-instruments/296/LM335/122067",
      "status": "DigiKey listed 6, 249 exact LM 335Z/LFT7 in stock."
    },
    "tags": [
      "temperature",
      "kelvin shunt temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0.0,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      }
    ],
    "kind": "to92",
    "builder": "sensor"
  },
  {
    "id": "tmp36gt9z-ic",
    "name": "TMP36GT9Z Offset analog temperature sensor",
    "part": "TMP36GT9Z",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf",
    "packageName": "TO-92-3 (T-3)",
    "body": [
      4.83,
      4.83
    ],
    "pitch": 1.27,
    "pins": [
      [
        "+VS",
        "power_in",
        "Supply 2.7–5.5 V."
      ],
      [
        "VOUT",
        "output",
        "Analog 10 mV/°C output with 500 mV offset at 0 °C."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Offset analog temperature sensor",
    "description": "Low-voltage Celsius sensor whose output measures below 0 °C from a single positive supply.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/tmp36gt9z/temperature-sensor-40-to-125deg/dp/50AK7215",
      "status": "Newark listed 4, 872 in stock."
    },
    "tags": [
      "temperature",
      "offset analog temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0.0,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      }
    ],
    "kind": "to92",
    "builder": "sensor"
  },
  {
    "id": "lm75bd-ic",
    "name": "LM75BD,118 I2C temperature watchdog",
    "part": "LM75BD,118",
    "manufacturer": "NXP Semiconductors",
    "source": "https://www.nxp.com/docs/en/data-sheet/LM75B.pdf",
    "packageName": "SO-8 (SOT96-1)",
    "body": [
      3.9,
      4.9
    ],
    "pitch": 1.27,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "OS",
        "open_collector",
        "Open-drain programmable overtemperature shutdown/interrupt output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "VCC",
        "power_in",
        "Supply 2.8–5.5 V."
      ]
    ],
    "subtitle": "I2C temperature watchdog",
    "description": "11-bit I2C temperature sensor and programmable thermal watchdog.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.in/en/products/detail/nxp-usa-inc/LM75BD-118/1992993",
      "status": "DigiKey exact NXP Semiconductors LM75BD,118 listing showed 20,920 in stock."
    },
    "tags": [
      "temperature",
      "i2c temperature watchdog"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  },
  {
    "id": "adt7410trz-ic",
    "name": "ADT7410TRZ 16-bit I2C temperature sensor",
    "part": "ADT7410TRZ",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADT7410.pdf",
    "packageName": "SOIC-8 (R-8)",
    "body": [
      3.9,
      4.9
    ],
    "pitch": 1.27,
    "pins": [
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "INT",
        "open_collector",
        "Open-drain high/low temperature interrupt."
      ],
      [
        "CT",
        "open_collector",
        "Open-drain critical-temperature interrupt."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.7–5.5 V."
      ]
    ],
    "subtitle": "16-bit I2C temperature sensor",
    "description": "Programmable 13/16-bit local digital temperature sensor with separate critical and window interrupts.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/adt7410trz/temperature-sensor-55-to-150deg/dp/60AK5672",
      "status": "Newark listed 194 in stock."
    },
    "tags": [
      "temperature",
      "16-bit i2c temperature sensor"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  },
  {
    "id": "adt7310trz-ic",
    "name": "ADT7310TRZ-REEL 16-bit SPI temperature sensor",
    "part": "ADT7310TRZ-REEL",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADT7310.pdf",
    "packageName": "SOIC-8 (R-8)",
    "body": [
      3.9,
      4.9
    ],
    "pitch": 1.27,
    "pins": [
      [
        "SCLK",
        "input",
        "SCLK digital input."
      ],
      [
        "DOUT",
        "output",
        "SPI serial data output."
      ],
      [
        "DIN",
        "input",
        "DIN digital input."
      ],
      [
        "CS#",
        "input",
        "CS# digital input."
      ],
      [
        "INT",
        "open_collector",
        "Open-drain high/low temperature interrupt."
      ],
      [
        "CT",
        "open_collector",
        "Open-drain critical temperature interrupt."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.7–5.5 V."
      ]
    ],
    "subtitle": "16-bit SPI temperature sensor",
    "description": "SPI temperature sensor with configurable resolution and separate critical/window interrupts.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/ADT7310TRZ-REEL/2059277",
      "status": "DigiKey exact Analog Devices ADT7310TRZ-REEL listing showed 3,060 in stock."
    },
    "tags": [
      "temperature",
      "16-bit spi temperature sensor"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  },
  {
    "id": "mcp9808-e-ms",
    "name": "MCP9808-E/MS I2C temperature sensor",
    "part": "MCP9808-E/MS",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/25095A.pdf",
    "packageName": "MSOP-8 (MS)",
    "body": [
      3,
      3
    ],
    "pitch": 0.65,
    "pins": [
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "ALERT",
        "open_collector",
        "Programmable open-drain temperature alert."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "A2",
        "input",
        "A2 digital input."
      ],
      [
        "A1",
        "input",
        "A1 digital input."
      ],
      [
        "A0",
        "input",
        "A0 digital input."
      ],
      [
        "VDD",
        "power_in",
        "Supply 2.7–5.5 V."
      ]
    ],
    "subtitle": "I2C temperature sensor",
    "description": "Programmable-resolution digital temperature sensor with configurable alert limits.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/temperature-sensors_microchip-mcp9808-e-ms_C94847.html",
      "status": "LCSC listed 287 in stock, manufacturer MICROCHIP."
    },
    "tags": [
      "temperature",
      "i2c temperature sensor"
    ],
    "kind": "tssop",
    "rowSpacing": 4.1,
    "builder": "two-row"
  },
  {
    "id": "mcp9700at-e-tt",
    "name": "MCP9700AT-E/TT Micropower analog temperature sensor",
    "part": "MCP9700AT-E/TT",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/20001942G.pdf",
    "packageName": "SOT-23-3 (TT)",
    "body": [
      2.9,
      1.3
    ],
    "pitch": 0.95,
    "pins": [
      [
        "VDD",
        "power_in",
        "Supply 2.3–5.5 V."
      ],
      [
        "VOUT",
        "output",
        "Analog 500 mV at 0 °C plus 10 mV/°C."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Micropower analog temperature sensor",
    "description": "6 µA typical linear active thermistor IC in a small 3-terminal package.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/MCP9700AT-E-TT/1228267",
      "status": "DigiKey exact Microchip Technology MCP9700AT-E/TT listing showed 89,555 in stock."
    },
    "tags": [
      "temperature",
      "micropower analog temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.95,
        "y": 0.95,
        "edge": "bottom",
        "size": [
          0.6,
          0.85
        ]
      },
      {
        "number": 2,
        "x": 0.95,
        "y": 0.95,
        "edge": "bottom",
        "size": [
          0.6,
          0.85
        ]
      },
      {
        "number": 3,
        "x": 0,
        "y": -0.95,
        "edge": "top",
        "size": [
          0.6,
          0.85
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "tmp102aidrlr",
    "name": "TMP102AIDRLR Low-voltage I2C temperature sensor",
    "part": "TMP102AIDRLR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/tmp102.pdf",
    "packageName": "SOT-563-6 (DRL)",
    "body": [
      1.2,
      1.6
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "ALERT",
        "open_collector",
        "Open-drain ALERT output; external pull-up required."
      ],
      [
        "ADD0",
        "input",
        "I2C address select; connect to GND, V+, SDA or SCL as specified in Section 7.2.1."
      ],
      [
        "V+",
        "power_in",
        "Supply 1.4–3.6 V."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ]
    ],
    "subtitle": "Low-voltage I2C temperature sensor",
    "description": "12-bit low-power temperature sensor with programmable SMBus alert.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/Temperature-Sensors_TI_TMP102AIDRLR_TMP102AIDRLR_C99269.html",
      "status": "LCSC listed 43, 352 in stock, manufacturer TI; UMW/Tudi copies excluded."
    },
    "tags": [
      "temperature",
      "low-voltage i2c temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.8,
        "y": -0.5,
        "edge": "left",
        "size": [
          0.45,
          0.25
        ]
      },
      {
        "number": 2,
        "x": -0.8,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.45,
          0.25
        ]
      },
      {
        "number": 3,
        "x": -0.8,
        "y": 0.5,
        "edge": "left",
        "size": [
          0.45,
          0.25
        ]
      },
      {
        "number": 4,
        "x": 0.8,
        "y": 0.5,
        "edge": "right",
        "size": [
          0.45,
          0.25
        ]
      },
      {
        "number": 5,
        "x": 0.8,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.45,
          0.25
        ]
      },
      {
        "number": 6,
        "x": 0.8,
        "y": -0.5,
        "edge": "right",
        "size": [
          0.45,
          0.25
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "tmp117aidrvr",
    "name": "TMP117AIDRVR Precision I2C temperature sensor",
    "part": "TMP117AIDRVR",
    "manufacturer": "Texas Instruments",
    "source": "https://www.ti.com/lit/ds/symlink/tmp117.pdf",
    "packageName": "WSON-6 with isolated thermal pad (DRV)",
    "body": [
      2,
      2
    ],
    "pitch": 0.65,
    "pins": [
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "ALERT",
        "open_collector",
        "Open-drain temperature alert or data-ready output."
      ],
      [
        "ADD0",
        "input",
        "Address select to GND, V+, SDA or SCL."
      ],
      [
        "V+",
        "power_in",
        "Supply 1.8–5.5 V full temperature range; 1.7–5.5 V to 70 °C."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "EP",
        "passive",
        "Isolated thermal pad. TI recommends leaving unsoldered for best accuracy; if soldered leave float in g or ground, not internally tied to GND."
      ]
    ],
    "subtitle": "Precision I2C temperature sensor",
    "description": "16-bit high-accuracy temperature sensor with averaging, digital offset and user EEPROM.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C699536.html",
      "status": "LCSC listed 3, 296 in stock, manufacturer TI."
    },
    "tags": [
      "temperature",
      "precision i2c temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.775,
        "y": -0.65,
        "edge": "left",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -0.775,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -0.775,
        "y": 0.65,
        "edge": "left",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": 4,
        "x": 0.775,
        "y": 0.65,
        "edge": "right",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": 5,
        "x": 0.775,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": 6,
        "x": 0.775,
        "y": -0.65,
        "edge": "right",
        "size": [
          0.55,
          0.3
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          0.9,
          1.3
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "stts22htr",
    "name": "STTS22HTR SMBus temperature sensor",
    "part": "STTS22HTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/stts22h.pdf",
    "packageName": "UDFN-6L with exposed pad",
    "body": [
      2,
      2
    ],
    "pitch": 0.65,
    "pins": [
      [
        "SCL",
        "input",
        "SCL digital input."
      ],
      [
        "ALERT/INT",
        "open_collector",
        "Open-drain temperature interrupt/SMBus alert."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.5–3.6 V."
      ],
      [
        "ADDR",
        "input",
        "I2C address selection from supply/ground or specified pull-up resistance."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SDA",
        "bidirectional",
        "SDA bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "EP",
        "passive",
        "Exposed thermal pad. Its electrical tie is not specified in the numbered pin table; no internal ground connection is asserted."
      ]
    ],
    "subtitle": "SMBus temperature sensor",
    "description": "Ultralow-power 16-bit temperature sensor with SMBus ARA alert support.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/stmicroelectronics/stts22htr/temperature-sensor-40-to-125deg/dp/40AH5442",
      "status": "Newark listed 7, 587 in stock."
    },
    "tags": [
      "temperature",
      "smbus temperature sensor"
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.75,
        "y": -0.65,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -0.75,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -0.75,
        "y": 0.65,
        "edge": "left",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 4,
        "x": 0.75,
        "y": 0.65,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 5,
        "x": 0.75,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.5,
          0.3
        ]
      },
      {
        "number": 6,
        "x": 0.75,
        "y": -0.65,
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
          0.9,
          1.1
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "ds18b20-ic",
    "name": "DS18B20+ 1-Wire digital thermometer",
    "part": "DS18B20+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ds18b20.pdf",
    "packageName": "TO-92-3",
    "body": [
      4.9,
      4.9
    ],
    "pitch": 1.27,
    "pins": [
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "DQ",
        "bidirectional",
        "Open-drain 1-Wire data, also parasitic power input; external pull-up required."
      ],
      [
        "VDD",
        "power_in",
        "Supply 3.0–5.5 V; tie to GND in parasite-power mode."
      ]
    ],
    "subtitle": "1-Wire digital thermometer",
    "description": "9-to 12-bit digital thermometer with unique ROM ID and optional parasite power.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/DS18B20/956983",
      "status": "DigiKey exact Analog Devices DS18B20+ listing showed 6,907 in stock."
    },
    "tags": [
      "sensor",
      "1-wire digital thermometer"
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 2,
        "x": 0.0,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      },
      {
        "number": 3,
        "x": 1.27,
        "y": 0.5,
        "size": [
          1,
          1
        ],
        "drill": 0.6,
        "edge": "bottom"
      }
    ],
    "kind": "to92",
    "builder": "sensor"
  }
];
