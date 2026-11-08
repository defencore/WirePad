// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "cap1188-1-cp-tr",
    "name": "CAP1188-1-CP-TR Eight-key touch and LED controller",
    "part": "CAP1188-1-CP-TR",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/00001620B.pdf",
    "packageName": "QFN-24 with grounded exposed pad (CP)",
    "body": [
      4,
      4
    ],
    "pitch": 0.5,
    "pins": [
      [
        "SPI_CS#",
        "input",
        "Active-low SPI chip select; ground for I2C, SMBus or BC-Link."
      ],
      [
        "WAKE/SPI_MOSI",
        "bidirectional",
        "Wake output in standby, wake input in deep sleep, or SPI MOSI input; mode dependent."
      ],
      [
        "SMDATA/SPI_MSIO",
        "bidirectional",
        "I2C/SMBus or BC-Link bidirectional data, bidirectional SPI MSIO or four-wire SPI MISO output."
      ],
      [
        "SMCLK/SPI_CLK",
        "input",
        "I2C/SMBus, BC-Link or SPI serial clock input."
      ],
      [
        "LED1",
        "output",
        "LED 1 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED2",
        "output",
        "LED 2 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED3",
        "output",
        "LED 3 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED4",
        "output",
        "LED 4 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED5",
        "output",
        "LED 5 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED6",
        "output",
        "LED 6 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED7",
        "output",
        "LED 7 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "LED8",
        "output",
        "LED 8 output: open-drain by default, configurable push-pull; observe current limits."
      ],
      [
        "ALERT#/BC_IRQ#",
        "output",
        "Interrupt output: active-low open-drain by default or programmable active-high push-pull."
      ],
      [
        "ADDR_COMM",
        "input",
        "Analog resistor-coded interface and I2C address selection."
      ],
      [
        "CS8",
        "bidirectional",
        "Capacitive touch analog sensing input/output 8. Ground when unused."
      ],
      [
        "CS7",
        "bidirectional",
        "Capacitive touch analog sensing input/output 7. Ground when unused."
      ],
      [
        "CS6",
        "bidirectional",
        "Capacitive touch analog sensing input/output 6. Ground when unused."
      ],
      [
        "CS5",
        "bidirectional",
        "Capacitive touch analog sensing input/output 5. Ground when unused."
      ],
      [
        "CS4",
        "bidirectional",
        "Capacitive touch analog sensing input/output 4. Ground when unused."
      ],
      [
        "CS3",
        "bidirectional",
        "Capacitive touch analog sensing input/output 3. Ground when unused."
      ],
      [
        "CS2",
        "bidirectional",
        "Capacitive touch analog sensing input/output 2. Ground when unused."
      ],
      [
        "CS1",
        "bidirectional",
        "Capacitive touch analog sensing input/output 1. Ground when unused."
      ],
      [
        "VDD",
        "power_in",
        "Supply 3.0–3.6 V."
      ],
      [
        "RESET",
        "input",
        "Active-high reset; ground if unused."
      ],
      [
        "EP",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Eight-key touch and LED controller",
    "description": "Eight capacitive touch channels and eight programmable LED outputs with I2C, SMBus, BC-Link or SPI communication.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/microchip/cap1188-1-cp-tr/capacitive-touch-sensor-0-to-85deg/dp/41AH8389RL",
      "status": "Newark listed 800 cut-tape/re-reel units in stock; full reel is on backorder."
    },
    "tags": [
      "sensor",
      "eight-key touch and led controller"
    ],
    "numericLabels": true,
    "references": [
      {
        "label": "Manufacturer-authored datasheet mirror",
        "url": "https://assets.rs-online.com/v1699451857/Datasheets/dd96133ca019fe84e5fefcf4d275d0f3.pdf"
      }
    ],
    "pads": [
      {
        "number": 1,
        "x": -1.8,
        "y": -1.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 2,
        "x": -1.8,
        "y": -0.75,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 3,
        "x": -1.8,
        "y": -0.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 4,
        "x": -1.8,
        "y": 0.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 5,
        "x": -1.8,
        "y": 0.75,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 6,
        "x": -1.8,
        "y": 1.25,
        "edge": "left",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 7,
        "x": -1.25,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 8,
        "x": -0.75,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 9,
        "x": -0.25,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 10,
        "x": 0.25,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 11,
        "x": 0.75,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 12,
        "x": 1.25,
        "y": 1.8,
        "edge": "bottom",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 13,
        "x": 1.8,
        "y": 1.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 14,
        "x": 1.8,
        "y": 0.75,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 15,
        "x": 1.8,
        "y": 0.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 16,
        "x": 1.8,
        "y": -0.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 17,
        "x": 1.8,
        "y": -0.75,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 18,
        "x": 1.8,
        "y": -1.25,
        "edge": "right",
        "size": [
          0.65,
          0.3
        ]
      },
      {
        "number": 19,
        "x": 1.25,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 20,
        "x": 0.75,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 21,
        "x": 0.25,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 22,
        "x": -0.25,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 23,
        "x": -0.75,
        "y": -1.8,
        "edge": "top",
        "size": [
          0.3,
          0.65
        ]
      },
      {
        "number": 24,
        "x": -1.25,
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
          2.5,
          2.5
        ],
        "edge": "bottom"
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "cap1203-1-sn-tr",
    "name": "CAP1203-1-SN-TR Three-key touch controller",
    "part": "CAP1203-1-SN-TR",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/00001572B.pdf",
    "packageName": "SOIC-8 (SN)",
    "body": [
      3.9,
      4.9
    ],
    "pitch": 1.27,
    "pins": [
      [
        "ALERT#",
        "open_collector",
        "Active-low open-drain SMBus alert/interrupt."
      ],
      [
        "SMDATA",
        "bidirectional",
        "Open-drain bidirectional I2C/SMBus data; provide pull-up."
      ],
      [
        "SMCLK",
        "input",
        "I2C/SMBus clock input; provide pull-up."
      ],
      [
        "VDD",
        "power_in",
        "Supply 3.0–5.5 V."
      ],
      [
        "GND",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "CS3",
        "bidirectional",
        "Capacitive touch analog sensing input/output 3; ground when unused."
      ],
      [
        "CS2",
        "bidirectional",
        "Capacitive touch analog sensing input/output 2; ground when unused."
      ],
      [
        "CS1",
        "bidirectional",
        "Capacitive touch analog sensing input/output 1; ground when unused."
      ]
    ],
    "subtitle": "Three-key touch controller",
    "description": "Three-channel I2C/SMBus touch sensor with independent sensitivity, recalibration and interrupt.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/CAP1203-1-SN-TR/5880936",
      "status": "DigiKey exact Microchip Technology CAP1203-1-SN-TR listing showed 4,273 in stock."
    },
    "tags": [
      "sensor",
      "three-key touch controller"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  },
  {
    "id": "at42qt1010-tshr",
    "name": "AT42QT1010-TSHR Single-key charge-transfer touch sensor",
    "part": "AT42QT1010-TSHR",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/40001946A.pdf",
    "packageName": "SOT-23-6 (TSH)",
    "body": [
      1.6,
      2.9
    ],
    "pitch": 0.95,
    "pins": [
      [
        "OUT",
        "output",
        "Push-pull touch-detection state with periodic HeartBeat pulse."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ],
      [
        "SNSK",
        "bidirectional",
        "Charge-transfer sensing terminal: connect sample capacitor and key electrode through the recommended series resistor."
      ],
      [
        "SNS",
        "bidirectional",
        "Charge-transfer sensing terminal: connect the other side of the sample capacitor."
      ],
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V."
      ],
      [
        "SYNC/MODE",
        "input",
        "Synchronization input or fast/low-power mode selection; see source logic conditions."
      ]
    ],
    "subtitle": "Single-key charge-transfer touch sensor",
    "description": "Standalone capacitive touch or proximity detector using an external sample capacitor and sensing electrode.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/microchip-technology/AT42QT1010-TSHR/2268866",
      "status": "DigiKey exact Microchip Technology AT42QT1010-TSHR listing showed 36,685 in stock."
    },
    "tags": [
      "sensor",
      "single-key charge-transfer touch sensor"
    ],
    "modelHeight": 1.1,
    "pads": [
      {
        "number": 1,
        "x": -1.2,
        "y": -0.95,
        "edge": "left",
        "size": [
          0.7,
          0.4
        ]
      },
      {
        "number": 2,
        "x": -1.2,
        "y": 0.0,
        "edge": "left",
        "size": [
          0.7,
          0.4
        ]
      },
      {
        "number": 3,
        "x": -1.2,
        "y": 0.95,
        "edge": "left",
        "size": [
          0.7,
          0.4
        ]
      },
      {
        "number": 4,
        "x": 1.2,
        "y": 0.95,
        "edge": "right",
        "size": [
          0.7,
          0.4
        ]
      },
      {
        "number": 5,
        "x": 1.2,
        "y": 0.0,
        "edge": "right",
        "size": [
          0.7,
          0.4
        ]
      },
      {
        "number": 6,
        "x": 1.2,
        "y": -0.95,
        "edge": "right",
        "size": [
          0.7,
          0.4
        ]
      }
    ],
    "kind": "sensor",
    "builder": "sensor"
  },
  {
    "id": "at42qt1070-ssur",
    "name": "AT42QT1070-SSUR Seven-key I2C touch controller",
    "part": "AT42QT1070-SSUR",
    "manufacturer": "Microchip Technology",
    "source": "https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-9596-AT42-QTouch-BSW-AT42QT1070_Datasheet.pdf",
    "packageName": "SOIC-14 (SSU)",
    "body": [
      3.9,
      8.65
    ],
    "pitch": 1.27,
    "pins": [
      [
        "VDD",
        "power_in",
        "Supply 1.8–5.5 V."
      ],
      [
        "MODE",
        "input",
        "Ground for I2C comms mode; VDD for standalone mode."
      ],
      [
        "SDA/OUT0",
        "bidirectional",
        "I2C bidirectional open-drain data, or open-drain guard-channel output in standalone mode."
      ],
      [
        "RESET#",
        "input",
        "Active-low reset with internal 60 kΩ pull-up; may remain open when unused."
      ],
      [
        "CHANGE#/OUT4",
        "open_collector",
        "Open-drain change notification in I2C mode or discrete output 4 in standalone mode."
      ],
      [
        "SCL/OUT3",
        "bidirectional",
        "I2C clock with open-drain clock stretching, or open-drain discrete output 3 in standalone mode."
      ],
      [
        "KEY6/OUT2",
        "output",
        "Charge-transfer key 6 excitation output in I2C mode, or open-drain discrete output 2 in standalone mode."
      ],
      [
        "KEY5/OUT1",
        "output",
        "Charge-transfer key 5 excitation output in I2C mode, or open-drain discrete output 1 in standalone mode."
      ],
      [
        "KEY4",
        "output",
        "Charge-transfer key 4 excitation output; connect electrode through recommended series resistor, or leave open if unused."
      ],
      [
        "KEY3",
        "output",
        "Charge-transfer key 3 excitation output; connect electrode through recommended series resistor, or leave open if unused."
      ],
      [
        "KEY2",
        "output",
        "Charge-transfer key 2 excitation output; connect electrode through recommended series resistor, or leave open if unused."
      ],
      [
        "KEY1",
        "output",
        "Charge-transfer key 1 excitation output; connect electrode through recommended series resistor, or leave open if unused."
      ],
      [
        "KEY0",
        "output",
        "Charge-transfer key 0 excitation output; connect electrode through recommended series resistor, or leave open if unused."
      ],
      [
        "VSS",
        "power_in",
        "Supply and signal ground reference."
      ]
    ],
    "subtitle": "Seven-key I2C touch controller",
    "description": "Seven-key touch sensor in I2C mode, or four touch keys plus guard channel and five discrete outputs in standalone mode.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.in/en/products/detail/microchip-technology/AT42QT1070-SSUR/2522788",
      "status": "DigiKey exact Microchip Technology AT42QT1070-SSUR listing showed 47,610 in stock."
    },
    "tags": [
      "sensor",
      "seven-key i2c touch controller"
    ],
    "numericLabels": true,
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  }
];
