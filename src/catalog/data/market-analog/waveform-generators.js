// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "adi-ad9833brmz",
    "name": "AD9833BRMZ — Programmable 25 MHz DDS waveform generator with serial control and integrated voltage-output DAC",
    "part": "AD9833BRMZ",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/AD9833.pdf",
    "references": [],
    "description": "Programmable 25 MHz DDS waveform generator with serial control and integrated voltage-output DAC.",
    "subtitle": "Programmable 25 MHz DDS waveform generator with serial control and integrated voltage-output DAC",
    "tags": [
      "dds",
      "waveform generator",
      "spi"
    ],
    "packageName": "MSOP-10",
    "pins": [
      [
        "COMP",
        "passive",
        "DAC bias bypass connection; decouple as specified."
      ],
      [
        "VDD",
        "power_in",
        "2.3–5.5 V analog/digital supply input."
      ],
      [
        "CAP/2.5V",
        "passive",
        "Internal digital-regulator bypass connection; follow the low-supply connection requirements."
      ],
      [
        "DGND",
        "power_in",
        "Digital ground return."
      ],
      [
        "MCLK",
        "input",
        "DDS master clock input."
      ],
      [
        "SDATA",
        "input",
        "Serial configuration-data input."
      ],
      [
        "SCLK",
        "input",
        "Serial clock input; data shifts on the falling edge."
      ],
      [
        "FSYNC",
        "input",
        "Active-low serial frame synchronization input."
      ],
      [
        "AGND",
        "power_in",
        "Analog ground return."
      ],
      [
        "VOUT",
        "output",
        "DDS analog waveform or selected digital waveform output."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/AD9833BRMZ/751220",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 2536,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-17.txt",
      "excerpt": "AD9833BRMZ; In-Stock: 2,536"
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
    "id": "adi-ad9834bruz",
    "name": "AD9834BRUZ — 75 MHz DDS waveform generator with complementary current outputs, comparator and hardware frequency/phase controls",
    "part": "AD9834BRUZ",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/AD9834.pdf",
    "references": [],
    "description": "75 MHz DDS waveform generator with complementary current outputs, comparator and hardware frequency/phase controls.",
    "subtitle": "75 MHz DDS waveform generator with complementary current outputs, comparator and hardware frequency/phase controls",
    "tags": [
      "dds",
      "waveform generator",
      "spi"
    ],
    "packageName": "TSSOP-20",
    "pins": [
      [
        "FS ADJUST",
        "passive",
        "Full-scale DAC current setting; connect RSET to AGND."
      ],
      [
        "REFOUT",
        "power_out",
        "Internal 1.20 V reference output."
      ],
      [
        "COMP",
        "passive",
        "DAC bias bypass connection."
      ],
      [
        "AVDD",
        "power_in",
        "2.3–5.5 V analog supply input."
      ],
      [
        "DVDD",
        "power_in",
        "2.3–5.5 V digital supply input."
      ],
      [
        "CAP/2.5V",
        "passive",
        "Internal digital-regulator bypass connection; follow the low-supply requirements."
      ],
      [
        "DGND",
        "power_in",
        "Digital ground return."
      ],
      [
        "MCLK",
        "input",
        "DDS master clock input."
      ],
      [
        "FSELECT",
        "input",
        "Frequency-register select input."
      ],
      [
        "PSELECT",
        "input",
        "Phase-register select input."
      ],
      [
        "RESET",
        "input",
        "Active-high DDS reset input."
      ],
      [
        "SLEEP",
        "input",
        "Active-high DAC power-down input."
      ],
      [
        "SDATA",
        "input",
        "Serial configuration-data input."
      ],
      [
        "SCLK",
        "input",
        "Serial clock input."
      ],
      [
        "FSYNC",
        "input",
        "Active-low serial frame synchronization input."
      ],
      [
        "SIGN BIT OUT",
        "output",
        "Selected comparator or DDS sign-bit digital output."
      ],
      [
        "VIN",
        "input",
        "Comparator analog input; may receive a filtered DDS output."
      ],
      [
        "AGND",
        "power_in",
        "Analog ground return."
      ],
      [
        "IOUT",
        "output",
        "DAC current output; connect the specified output load."
      ],
      [
        "IOUTB",
        "output",
        "Complementary DAC current output; connect the specified termination."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/AD9834BRUZ/621882",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 830,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-17.txt",
      "excerpt": "AD9834BRUZ; In-Stock: 830"
    },
    "kind": "tssop",
    "body": [
      4.4,
      6.5
    ],
    "rowSpacing": 5.5,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ]
  }
];
