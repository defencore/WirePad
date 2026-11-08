// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "adxl335bcpz-ic",
    "name": "ADXL335BCPZ Analog3-axis accelerometer",
    "part": "ADXL335BCPZ",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL335.pdf",
    "packageName": "LFCSP-16 (CP-16-4) with isolatedEP",
    "body": [
      4,
      4
    ],
    "pitch": 0.65,
    "pins": [
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "ST",
        "input",
        "Self-test input; tie to COM if unused."
      ],
      [
        "COM",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "COM",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "COM",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "COM",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "ZOUT",
        "output",
        "AnalogZ-axis output; external bandwidth capacitor to COM."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "YOUT",
        "output",
        "AnalogY-axis output; external bandwidth capacitor to COM."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "XOUT",
        "output",
        "AnalogX-axis output; external bandwidth capacitor to COM."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "VS",
        "power_in",
        "Supply 1.8–3.6 V."
      ],
      [
        "VS",
        "power_in",
        "Supply 1.8–3.6 V."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "EP",
        "passive",
        "Not internally connected; solder for mechanical integrity, do not assume grounded."
      ]
    ],
    "subtitle": "Analog 3-axis accelerometer",
    "description": "Three-axis ±3 g accelerometer with independent ratiometric analog outputs.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://canada.newark.com/analog-devices/adxl335bcpz/mems-accelerometer-x-y-z-analogue/dp/60AK6142",
      "status": "Newark listed 18 in stock."
    },
    "tags": [
      "sensor",
      "analog3-axis accelerometer"
    ],
    "internalConnections": [
      [
        "p3",
        "p5",
        "p6",
        "p7"
      ],
      [
        "p14",
        "p15"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1.8,
        "y": -0.9750000000000001,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -1.8,
        "y": -0.325,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -1.8,
        "y": 0.325,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 4,
        "x": -1.8,
        "y": 0.9750000000000001,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 5,
        "x": -0.9750000000000001,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 6,
        "x": -0.325,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 7,
        "x": 0.325,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 8,
        "x": 0.9750000000000001,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 9,
        "x": 1.8,
        "y": 0.9750000000000001,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 10,
        "x": 1.8,
        "y": 0.325,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 11,
        "x": 1.8,
        "y": -0.325,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 12,
        "x": 1.8,
        "y": -0.9750000000000001,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 13,
        "x": 0.9750000000000001,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 14,
        "x": 0.325,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 15,
        "x": -0.325,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 16,
        "x": -0.9750000000000001,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": "EP",
        "x": 0,
        "y": 0,
        "size": [
          2.7,
          2.7
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "adxl345bccz-ic",
    "name": "ADXL345BCCZ-RL7 Digital3-axis accelerometer",
    "part": "ADXL345BCCZ-RL7",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL345.pdf",
    "packageName": "LGA-14 (CC-14-1)",
    "body": [
      3,
      5
    ],
    "pitch": 0.8,
    "pins": [
      [
        "VDD I/O",
        "power_in",
        "Supply 1.7 V to VS."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "RESERVED",
        "passive",
        "Connect to VS or leave open."
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
        "VS",
        "power_in",
        "Supply 2.0–3.6 V."
      ],
      [
        "CS",
        "input",
        "SPI select; high selects I2C."
      ],
      [
        "INT1",
        "output",
        "INT1 digital output."
      ],
      [
        "INT2",
        "output",
        "INT2 digital output."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "RESERVED",
        "passive",
        "Connect to GND or leave open."
      ],
      [
        "SDO/ALT ADDRESS",
        "bidirectional",
        "SPI output or I2C address select."
      ],
      [
        "SDA/SDI/SDIO",
        "bidirectional",
        "I2C data or SPI input/3-wire data."
      ],
      [
        "SCL/SCLK",
        "input",
        "SCL/SCLK digital input."
      ]
    ],
    "subtitle": "Digital 3-axis accelerometer",
    "description": "Selectable ±2/4/8/16 g accelerometer with tap, activity and free-fall detection plus FIFO.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/ADXL345BCCZ-RL7/2038984",
      "status": "DigiKey exact Analog Devices ADXL345BCCZ-RL7 listing showed 19,865 in stock."
    },
    "tags": [
      "sensor",
      "digital3-axis accelerometer"
    ],
    "internalConnections": [
      [
        "p2",
        "p4",
        "p5"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1,
        "y": -2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1,
        "y": -1.2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1,
        "y": -0.4,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1,
        "y": 0.4,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -1,
        "y": 1.2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 6,
        "x": -1,
        "y": 2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "left"
      },
      {
        "number": 7,
        "x": 0,
        "y": 2,
        "size": [
          0.4,
          0.65
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 1,
        "y": 2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 9,
        "x": 1,
        "y": 1.2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1,
        "y": 0.4,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1,
        "y": -0.4,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 1,
        "y": -1.2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 13,
        "x": 1,
        "y": -2,
        "size": [
          0.65,
          0.4
        ],
        "edge": "right"
      },
      {
        "number": 14,
        "x": 0,
        "y": -2,
        "size": [
          0.4,
          0.65
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "adxl362bccz-ic",
    "name": "ADXL362BCCZ-RL7 Micropower3-axis accelerometer",
    "part": "ADXL362BCCZ-RL7",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL362.pdf",
    "packageName": "LGA-16 (CC-16-4)",
    "body": [
      3,
      3.25
    ],
    "pitch": 0.5,
    "pins": [
      [
        "VDD I/O",
        "power_in",
        "Supply 1.6 V to VS."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "SCLK",
        "input",
        "SCLK digital input."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "MOSI",
        "input",
        "MOSI digital input."
      ],
      [
        "MISO",
        "output",
        "MISO digital output."
      ],
      [
        "CS#",
        "input",
        "CS# digital input."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 output or synchronized sampling input."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "INT1",
        "bidirectional",
        "Interrupt 1 output or external-clock input."
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
        "VS",
        "power_in",
        "Supply 1.6–3.5 V."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Micropower 3-axis accelerometer",
    "description": "Low-power ±2/4/8 g accelerometer with motion wake-up and 512-sample FIFO.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/adxl362bccz-rl7/mems-acc-2g-4g-8g-x-y-z-spi/dp/60AK6155RL",
      "status": "Newark listed 55 in stock."
    },
    "tags": [
      "sensor",
      "micropower3-axis accelerometer"
    ],
    "internalConnections": [
      [
        "p12",
        "p13",
        "p16"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -1.25,
        "y": 1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 6,
        "x": -0.5,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 0.5,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1.25,
        "y": 0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1.25,
        "y": 0,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 1.25,
        "y": -0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 13,
        "x": 1.25,
        "y": -1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 14,
        "x": 0.5,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 15,
        "x": 0,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 16,
        "x": -0.5,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "adxl372bccz-ic",
    "name": "ADXL372BCCZ-RL7 High-gshock accelerometer",
    "part": "ADXL372BCCZ-RL7",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL372.pdf",
    "packageName": "LGA-16 (CC-16-4)",
    "body": [
      3,
      3.25
    ],
    "pitch": 0.5,
    "pins": [
      [
        "VDD I/O",
        "power_in",
        "Supply 1.6 V to VS."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "SCLK",
        "input",
        "SCLK digital input."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "MOSI/SDA",
        "bidirectional",
        "SPI data input or limited I2C data."
      ],
      [
        "MISO",
        "output",
        "MISO digital output."
      ],
      [
        "CS/SCL",
        "input",
        "SPI select or limited I2C clock."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 output or synchronized sampling input."
      ],
      [
        "RESERVED",
        "passive",
        "May be left open or connected to GND."
      ],
      [
        "INT1",
        "bidirectional",
        "Interrupt 1 output or external-clock input."
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
        "VS",
        "power_in",
        "Supply 1.6–3.5 V."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "High-gshock accelerometer",
    "description": "±200 g impact capture accelerometer with peak tracking and instant-on mode.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/ADXL372BCCZ-RL7/7019684",
      "status": "DigiKey exact Analog Devices ADXL372BCCZ-RL7 listing showed 433 in stock."
    },
    "tags": [
      "sensor",
      "high-gshock accelerometer"
    ],
    "internalConnections": [
      [
        "p12",
        "p13",
        "p16"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -1.25,
        "y": 1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 6,
        "x": -0.5,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 0.5,
        "y": 1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1.25,
        "y": 0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1.25,
        "y": 0,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 1.25,
        "y": -0.5,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 13,
        "x": 1.25,
        "y": -1,
        "size": [
          0.45,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 14,
        "x": 0.5,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 15,
        "x": 0,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 16,
        "x": -0.5,
        "y": -1.375,
        "size": [
          0.3,
          0.45
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lis3dhtr-ic",
    "name": "LIS3DHTR 3-axisaccelerometer withADC",
    "part": "LIS3DHTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lis3dh.pdf",
    "packageName": "LGA-16 (3×3 mm)",
    "body": [
      3,
      3
    ],
    "pitch": 0.5,
    "pins": [
      [
        "Vdd_IO",
        "power_in",
        "Supply 1.71–3.6 V."
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
        "SCL/SPC",
        "input",
        "SCL/SPC digital input."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SDA/SDI/SDO",
        "bidirectional",
        "SDA/SDI/SDO bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "SDO/SA0",
        "bidirectional",
        "SDO/SA0 bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "CS",
        "input",
        "SPI select; tie high for I2C."
      ],
      [
        "INT2",
        "output",
        "INT2 digital output."
      ],
      [
        "RES",
        "passive",
        "Reserved; connect externally to GND."
      ],
      [
        "INT1",
        "output",
        "INT1 digital output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "ADC3",
        "input",
        "Auxiliary analog ADC input 3."
      ],
      [
        "Vdd",
        "power_in",
        "Supply 1.71–3.6 V."
      ],
      [
        "ADC2",
        "input",
        "Auxiliary analog ADC input 2."
      ],
      [
        "ADC1",
        "input",
        "Auxiliary analog ADC input 1."
      ]
    ],
    "subtitle": "3-axis accelerometer with ADC",
    "description": "Digital ±2/4/8/16 g accelerometer with FIFO, two interrupts and three auxiliary analog inputs.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://estore.st.com/en/products/mems-and-sensors/accelerometers/lis3dh.html",
      "status": "STmanufacturer store listed LIS 3DHTR InStock, addtocart."
    },
    "tags": [
      "sensor",
      "3-axisaccelerometer withadc"
    ],
    "internalConnections": [
      [
        "p5",
        "p12"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -0.75,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.75,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 5,
        "x": -0.75,
        "y": 1.25,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 6,
        "x": -0.25,
        "y": 1.25,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 7,
        "x": 0.25,
        "y": 1.25,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 8,
        "x": 0.75,
        "y": 1.25,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 0.75,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 10,
        "x": 1.25,
        "y": 0.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 11,
        "x": 1.25,
        "y": -0.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 12,
        "x": 1.25,
        "y": -0.75,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 13,
        "x": 0.75,
        "y": -1.25,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 14,
        "x": 0.25,
        "y": -1.25,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 15,
        "x": -0.25,
        "y": -1.25,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 16,
        "x": -0.75,
        "y": -1.25,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lis2dw12tr-ic",
    "name": "LIS2DW12TR Ultralow-power3-axisaccelerometer",
    "part": "LIS2DW12TR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lis2dw12.pdf",
    "packageName": "LGA-12L",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SCL/SPC",
        "input",
        "SCL/SPC digital input."
      ],
      [
        "CS",
        "input",
        "CS digital input."
      ],
      [
        "SDO/SA0",
        "bidirectional",
        "SDO/SA0 bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "SDA/SDI/SDO",
        "bidirectional",
        "SDA/SDI/SDO bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "NC",
        "no_connect",
        "Not internally connected; may tie VDD, VDDIO or GND."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "RES",
        "passive",
        "Reserved; connect externally to GND."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.62–3.6 V."
      ],
      [
        "VDD_IO",
        "power_in",
        "Supply 1.62–3.6 V."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 output or clock input forsingle conversion on demand."
      ],
      [
        "INT1",
        "output",
        "INT1 digital output."
      ]
    ],
    "subtitle": "Ultralow-power 3-axis accelerometer",
    "description": "16-bit ±2/4/8/16 g accelerometer with tap detection, FIFO and single conversion on demand.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://mexico.newark.com/en-MX/stmicroelectronics/lis2dw12tr/mems-acc-2g-4g-8g-16g-x-y-z/dp/51AC9121",
      "status": "Newark listed 46, 956 in stock."
    },
    "tags": [
      "sensor",
      "ultralow-power3-axisaccelerometer"
    ],
    "internalConnections": [
      [
        "p6",
        "p8"
      ]
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -0.775,
        "y": -0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 2,
        "x": -0.775,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 3,
        "x": -0.775,
        "y": 0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 4,
        "x": -0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 5,
        "x": 0.0,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 6,
        "x": 0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 7,
        "x": 0.775,
        "y": 0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 8,
        "x": 0.775,
        "y": -0.0,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 9,
        "x": 0.775,
        "y": -0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 10,
        "x": 0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 11,
        "x": -0.0,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 12,
        "x": -0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "bma400-ic",
    "name": "BMA400 Motionwake-up accelerometer",
    "part": "BMA400",
    "manufacturer": "Bosch Sensortec",
    "source": "https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bma400-ds000.pdf",
    "packageName": "LGA-12 (2×2 mm)",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SDO",
        "bidirectional",
        "SPI output or I2C address select."
      ],
      [
        "SDX",
        "bidirectional",
        "I2C data or SPI data input/3-wire I/O."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.2–3.6 V."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "INT1",
        "bidirectional",
        "Programmable interrupt 1; leave unconnected when unused."
      ],
      [
        "INT2",
        "bidirectional",
        "Programmable interrupt 2; leave unconnected when unused."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.62–3.6 V."
      ],
      [
        "GNDIO",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "CSB",
        "input",
        "CSB digital input."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "SCX",
        "input",
        "I2C/SPI serial clock."
      ]
    ],
    "subtitle": "Motionwake-up accelerometer",
    "description": "Low-power 12-bit accelerometer with step counting, activity recognition and automatic power-mode switching.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.lcsc.com/product-detail/C437655.html?is_substitute=1&original_product_code=C966924&original_unit_price=0.5224",
      "status": "LCSC listed 131 in stock, manufacturerBosch."
    },
    "tags": [
      "sensor",
      "motionwake-up accelerometer"
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -0.75,
        "y": -0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -0.75,
        "y": -0.25,
        "size": [
          0.3,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -0.75,
        "y": 0.25,
        "size": [
          0.3,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -0.75,
        "y": 0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -0.25,
        "y": 0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 6,
        "x": 0.25,
        "y": 0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0.75,
        "y": 0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 8,
        "x": 0.75,
        "y": 0.25,
        "size": [
          0.3,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 9,
        "x": 0.75,
        "y": -0.25,
        "size": [
          0.3,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 0.75,
        "y": -0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 0.25,
        "y": -0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "top"
      },
      {
        "number": 12,
        "x": -0.25,
        "y": -0.75,
        "size": [
          0.3,
          0.3
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "bmi270-ic",
    "name": "BMI270 6-axiswearable IMU",
    "part": "BMI270",
    "manufacturer": "Bosch Sensortec",
    "source": "https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi270-ds000.pdf",
    "packageName": "LGA-14 (3×2.5 mm top-view orientation)",
    "body": [
      3,
      2.5
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SDO",
        "bidirectional",
        "SPI output or I2C address select."
      ],
      [
        "ASDx",
        "bidirectional",
        "Auxiliary I2C data or OIS SPI data input/bidirectional data; mode specific."
      ],
      [
        "ASCx",
        "bidirectional",
        "Auxiliary I2C master clock or OIS SPI clock input; mode specific."
      ],
      [
        "INT1",
        "bidirectional",
        "Interrupt 1 or external FIFO synchronization input."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.2–3.6 V."
      ],
      [
        "GNDIO",
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
        "Supply 1.71–3.6 V."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 or external FIFO synchronization input."
      ],
      [
        "OCSB",
        "input",
        "OIS interface chip select; leave open if unused."
      ],
      [
        "OSDO",
        "output",
        "OIS SPI output; leave open if unused."
      ],
      [
        "CSB",
        "input",
        "Primary SPI chip select; high selects I2C."
      ],
      [
        "SCx",
        "input",
        "Primary I2C/SPIclock."
      ],
      [
        "SDx",
        "bidirectional",
        "Primary I2C/SPI serial data."
      ]
    ],
    "subtitle": "6-axiswearable IMU",
    "description": "Accelerometer and gyroscope with step and wrist gesture processing, a sensor hub and an independent OIS interface.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/bosch-sensortec/BMI270/9974486",
      "status": "DigiKey exact Bosch Sensortec BMI270 listing showed 32,396 in stock."
    },
    "tags": [
      "sensor",
      "6-axiswearable imu"
    ],
    "numericLabels": true,
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 6,
        "x": 0,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 13,
        "x": 0,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 14,
        "x": -0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lsm6dsotr-ic",
    "name": "LSM6DSOTR 6-axisIMU withsensorhub",
    "part": "LSM6DSOTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lsm6dso.pdf",
    "packageName": "LGA-14L (3×2.5 mm top-view orientation)",
    "body": [
      3,
      2.5
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SDO/SA0",
        "bidirectional",
        "SPI output or I2C address bit."
      ],
      [
        "SDx",
        "bidirectional",
        "Mode 1: tie to VDDIO/GND; mode 2: auxiliary I2C master data; modes 3/4: auxiliary SPI data."
      ],
      [
        "SCx",
        "bidirectional",
        "Mode 1: tie to VDDIO/GND; mode 2: auxiliary I2C master clock; modes 3/4: auxiliary SPI clock input."
      ],
      [
        "INT1",
        "output",
        "Programmable interrupt 1."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.62–3.6 V."
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
        "Supply 1.71–3.6 V."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 output or DEN/input synchronization function; mode-dependent."
      ],
      [
        "OCS_Aux",
        "input",
        "Auxiliary SPI enable/select input; leave open in modes 1/2."
      ],
      [
        "SDO_Aux",
        "output",
        "Auxiliary four-wire SPI data output; float in three-wire mode. Modes 1/2 permit VDDIO tie or open."
      ],
      [
        "CS",
        "input",
        "High selects I2C/I3C; low selects SPI."
      ],
      [
        "SCL",
        "input",
        "Primary I2C/I3C/SPI clock input."
      ],
      [
        "SDA",
        "bidirectional",
        "Primary I2C/I3C data or SPI input/three-wire I/O."
      ]
    ],
    "subtitle": "6-axis IMU withsensor hub",
    "description": "Accelerometer and gyroscope with a 9 KB FIFO, finite-state machine, sensor hub and auxiliary OIS SPI interface.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/stmicroelectronics/lsm6dsotr/mems-mod-3-axis-gyroscope-accelerometer/dp/84AC1874",
      "status": "Newark listed 254, 791 instockcut-tape/re-reelunits."
    },
    "tags": [
      "sensor",
      "6-axisimu withsensorhub"
    ],
    "numericLabels": true,
    "internalConnections": [
      [
        "p6",
        "p7"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 6,
        "x": 0,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 13,
        "x": 0,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 14,
        "x": -0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lsm6dsoxtr-ic",
    "name": "LSM6DSOXTR Machine-learning6-axisIMU",
    "part": "LSM6DSOXTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lsm6dsox.pdf",
    "packageName": "LGA-14L (3×2.5 mm top-view orientation)",
    "body": [
      3,
      2.5
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SDO/SA0",
        "bidirectional",
        "SPI output or I2C address bit."
      ],
      [
        "SDx",
        "bidirectional",
        "Mode 1: tie to VDDIO/GND; mode 2: auxiliary I2C master data; modes 3/4: auxiliary SPI data."
      ],
      [
        "SCx",
        "bidirectional",
        "Mode 1: tie to VDDIO/GND; mode 2: auxiliary I2C master clock; modes 3/4: auxiliary SPI clock input."
      ],
      [
        "INT1",
        "output",
        "Programmable interrupt 1."
      ],
      [
        "VDDIO",
        "power_in",
        "Supply 1.62–3.6 V."
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
        "Supply 1.71–3.6 V."
      ],
      [
        "INT2",
        "bidirectional",
        "Interrupt 2 output or DEN/input synchronization function; mode-dependent."
      ],
      [
        "OCS_Aux",
        "input",
        "Auxiliary SPI enable/select input; leave open in modes 1/2."
      ],
      [
        "SDO_Aux",
        "output",
        "Auxiliary four-wire SPI data output; float in three-wire mode. Modes 1/2 permit VDDIO tie or open."
      ],
      [
        "CS",
        "input",
        "High selects I2C/I3C; low selects SPI."
      ],
      [
        "SCL",
        "input",
        "Primary I2C/I3C/SPI clock input."
      ],
      [
        "SDA",
        "bidirectional",
        "Primary I2C/I3C data or SPI input/three-wire I/O."
      ]
    ],
    "subtitle": "Machine-learning 6-axis IMU",
    "description": "Accelerometer and gyroscope with a 9 KB FIFO, finite-state machine, sensor hub and auxiliary OIS SPI interface. Its integrated machine-learning core supports decision-tree classification.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/stmicroelectronics/lsm6dsoxtr/mems-module-3d-gyroscope-accelero/dp/99AC0350?st=lsm6dsox",
      "status": "Newark listed 18, 870 instockcut-tape/re-reelunits."
    },
    "tags": [
      "sensor",
      "machine-learning6-axisimu"
    ],
    "numericLabels": true,
    "internalConnections": [
      [
        "p6",
        "p7"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 2,
        "x": -1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 3,
        "x": -1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 4,
        "x": -1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "left"
      },
      {
        "number": 5,
        "x": -0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 6,
        "x": 0,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 7,
        "x": 0.5,
        "y": 1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "bottom"
      },
      {
        "number": 8,
        "x": 1.25,
        "y": 0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 9,
        "x": 1.25,
        "y": 0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 10,
        "x": 1.25,
        "y": -0.25,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 11,
        "x": 1.25,
        "y": -0.75,
        "size": [
          0.45,
          0.25
        ],
        "edge": "right"
      },
      {
        "number": 12,
        "x": 0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 13,
        "x": 0,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      },
      {
        "number": 14,
        "x": -0.5,
        "y": -1,
        "size": [
          0.25,
          0.45
        ],
        "edge": "top"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lis2mdltr-ic",
    "name": "LIS2MDLTR 3-axismagnetometer",
    "part": "LIS2MDLTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lis2mdl.pdf",
    "packageName": "LGA-12L",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SCL/SPC",
        "input",
        "SCL/SPC digital input."
      ],
      [
        "NC",
        "no_connect",
        "Not connected; follow manufacturer recommendation and leave unconnected."
      ],
      [
        "CS",
        "input",
        "SPI select; high selects I2C."
      ],
      [
        "SDA/SDI/SDO",
        "bidirectional",
        "SDA/SDI/SDO bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "C1",
        "passive",
        "Regulator capacitor terminal; connect a 220 nF capacitor to GND as the manufacturer specifies."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "INT/DRDY/SDO",
        "output",
        "Programmable interrupt/data-ready output or four-wire SPI serial data output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "Vdd",
        "power_in",
        "Supply 1.71–3.6 V."
      ],
      [
        "Vdd_IO",
        "power_in",
        "Supply 1.71–3.6 V."
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
      ]
    ],
    "subtitle": "3-axis magnetometer",
    "description": "Digital ±50 gauss magnetometer with offset cancellation and programmable interrupt.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/stmicroelectronics/lis2mdltr/magnetometer-digital-40-to-85/dp/07AH6648RL",
      "status": "Newark listed 1, 702 in stock."
    },
    "tags": [
      "sensor",
      "3-axismagnetometer"
    ],
    "numericLabels": true,
    "internalConnections": [
      [
        "p6",
        "p8"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.775,
        "y": -0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 2,
        "x": -0.775,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 3,
        "x": -0.775,
        "y": 0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 4,
        "x": -0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 5,
        "x": 0.0,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 6,
        "x": 0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 7,
        "x": 0.775,
        "y": 0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 8,
        "x": 0.775,
        "y": -0.0,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 9,
        "x": 0.775,
        "y": -0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 10,
        "x": 0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 11,
        "x": -0.0,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 12,
        "x": -0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "lsm303agrtr-ic",
    "name": "LSM303AGRTR Accelerometer andmagnetometer",
    "part": "LSM303AGRTR",
    "manufacturer": "STMicroelectronics",
    "source": "https://www.st.com/resource/en/datasheet/lsm303agr.pdf",
    "packageName": "LGA-12L eCompass",
    "body": [
      2,
      2
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SCL/SPC",
        "input",
        "SCL/SPC digital input."
      ],
      [
        "CS_XL",
        "input",
        "Accelerometer SPI select."
      ],
      [
        "CS_MAG",
        "input",
        "Magnetometer SPI select."
      ],
      [
        "SDA/SDI/SDO",
        "bidirectional",
        "SDA/SDI/SDO bidirectional digital signal; provide pull-up if open-drain."
      ],
      [
        "C1",
        "passive",
        "Regulator capacitor terminal; connect a 220 nF capacitor to GND as the manufacturer specifies."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "INT_MAG/DRDY",
        "output",
        "Magnetometer interrupt/data-ready output."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "Vdd",
        "power_in",
        "Supply 1.71–3.6 V."
      ],
      [
        "Vdd_IO",
        "power_in",
        "Supply 1.71–3.6 V."
      ],
      [
        "INT_2_XL",
        "output",
        "Accelerometer interrupt 2 output."
      ],
      [
        "INT_1_XL",
        "bidirectional",
        "Accelerometer interrupt 1 output or external trigger for FIFO mode."
      ]
    ],
    "subtitle": "Accelerometer andmagnetometer",
    "description": "Combined three-axis accelerometer and three-axis magnetometer for eCompass applications.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://estore.st.com/en/products/mems-and-sensors/e-compasses-and-magnetic-sensors/lsm303agr.html",
      "status": "STmanufacturerstore listed LSM 303AGRTR InStock, addtocart."
    },
    "tags": [
      "sensor",
      "accelerometer andmagnetometer"
    ],
    "numericLabels": true,
    "internalConnections": [
      [
        "p6",
        "p8"
      ]
    ],
    "pads": [
      {
        "number": 1,
        "x": -0.775,
        "y": -0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 2,
        "x": -0.775,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 3,
        "x": -0.775,
        "y": 0.5,
        "edge": "left",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 4,
        "x": -0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 5,
        "x": 0.0,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 6,
        "x": 0.5,
        "y": 0.775,
        "edge": "bottom",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 7,
        "x": 0.775,
        "y": 0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 8,
        "x": 0.775,
        "y": -0.0,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 9,
        "x": 0.775,
        "y": -0.5,
        "edge": "right",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 10,
        "x": 0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 11,
        "x": -0.0,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      },
      {
        "number": 12,
        "x": -0.5,
        "y": -0.775,
        "edge": "top",
        "size": [
          0.22,
          0.22
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  }
];
