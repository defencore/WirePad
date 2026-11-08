// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "max31855kasa-ic",
    "name": "MAX31855KASA+ Thermocouple temperature converter",
    "part": "MAX31855KASA+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31855.pdf",
    "packageName": "SOIC-8 (S8)",
    "body": [
      3.9,
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
        "T−",
        "input",
        "Negative thermocouple input. Do not connect to GND."
      ],
      [
        "T+",
        "input",
        "Positive input for type-K thermocouple."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.0–3.6 V."
      ],
      [
        "SCK",
        "input",
        "Read-only SPI clock."
      ],
      [
        "CS#",
        "input",
        "Active-low serial chip select."
      ],
      [
        "SO",
        "output",
        "Serial temperature data output."
      ],
      [
        "DNC",
        "no_connect",
        "Do not connect this contact."
      ]
    ],
    "subtitle": "Thermocouple temperature converter",
    "description": "Cold-junction compensated type-K thermocouple converter with signed 14-bit readings and open/short fault detection.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/max31855kasa/temperature-sensor-2deg-c-nsoic/dp/73Y3352?MER=sy-me-pd-mi-alte",
      "status": "Newark listed 1, 314 in stock."
    },
    "tags": [
      "temperature",
      "thermocouple temperature converter"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  },
  {
    "id": "max6675isa-ic",
    "name": "MAX6675ISA+ Thermocouple temperature converter",
    "part": "MAX6675ISA+",
    "manufacturer": "Analog Devices",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/MAX6675.pdf",
    "packageName": "SOIC-8 (S8)",
    "body": [
      3.9,
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
        "T−",
        "input",
        "Negative thermocouple input. Connect to GND externally as specified for thermocouple detection."
      ],
      [
        "T+",
        "input",
        "Positive input for type-K thermocouple."
      ],
      [
        "VCC",
        "power_in",
        "Supply 3.0–5.5 V."
      ],
      [
        "SCK",
        "input",
        "Read-only SPI clock."
      ],
      [
        "CS#",
        "input",
        "Active-low serial chip select."
      ],
      [
        "SO",
        "output",
        "Serial temperature data output."
      ],
      [
        "NC",
        "no_connect",
        "Do not connect this contact."
      ]
    ],
    "subtitle": "Thermocouple temperature converter",
    "description": "Cold-junction compensated type-K thermocouple converter with 12-bit readings over 0–1024 °C and open-circuit detection.",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.newark.com/analog-devices/max6675isa/ic-conv-temp-to-digital-spi-8soic/dp/81Y9556",
      "status": "Newark listed 185 in stock."
    },
    "tags": [
      "temperature",
      "thermocouple temperature converter"
    ],
    "kind": "soic",
    "rowSpacing": 5.4,
    "builder": "two-row"
  }
];
