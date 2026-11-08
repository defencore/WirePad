// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-max660mx-nopb",
    "name": "MAX660MX/NOPB — Switched-capacitor voltage converter with frequency-control input; no inductor is required",
    "part": "MAX660MX/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/max660.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/MAX660"
      }
    ],
    "description": "Switched-capacitor voltage converter with frequency-control input; no inductor is required.",
    "subtitle": "Switched-capacitor voltage converter with frequency-control input; no inductor is required",
    "tags": [
      "charge pump",
      "inverting regulator"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "FC",
        "input",
        "Oscillator frequency control; connect or leave open as described for the selected frequency."
      ],
      [
        "CAP+",
        "passive",
        "Positive terminal of the external flying capacitor."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "CAP−",
        "passive",
        "Negative terminal of the external flying capacitor."
      ],
      [
        "OUT",
        "power_out",
        "Negative output in the voltage-inverter configuration; other topologies use this node differently."
      ],
      [
        "LV",
        "input",
        "Low-voltage mode connection; follow the supply-dependent grounding requirements."
      ],
      [
        "OSC",
        "passive",
        "Oscillator timing or external-clock connection; follow the permitted mode requirements."
      ],
      [
        "V+",
        "power_in",
        "Positive input supply in the inverter configuration; observe the datasheet voltage limits."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/MAX660MX-NOPB/413263",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 2995,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-21.txt",
      "excerpt": "MAX660MX/NOPB; In-Stock: 2,995"
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
    "id": "ti-lt1054cp",
    "name": "LT1054CP — 100 mA charge-pump converter with regulation, reference output and shutdown input",
    "part": "LT1054CP",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lt1054.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LT1054"
      }
    ],
    "description": "100 mA charge-pump converter with regulation, reference output and shutdown input.",
    "subtitle": "100 mA charge-pump converter with regulation, reference output and shutdown input",
    "tags": [
      "charge pump",
      "inverting regulator"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "FB/SD",
        "input",
        "Feedback/error-amplifier input and shutdown control."
      ],
      [
        "CAP+",
        "passive",
        "Positive terminal of the external flying capacitor."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "CAP−",
        "passive",
        "Negative terminal of the external flying capacitor."
      ],
      [
        "VOUT",
        "power_out",
        "Negative charge-pump output; may be regulated using the FB/SD network."
      ],
      [
        "VREF",
        "power_out",
        "Internal reference-voltage output."
      ],
      [
        "OSC",
        "passive",
        "Oscillator timing or external synchronization connection."
      ],
      [
        "VCC",
        "power_in",
        "Input supply for the charge-pump converter."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LT1054CP/379779",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 4364,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-21.txt",
      "excerpt": "LT1054CP; In-Stock: 4,364"
    },
    "kind": "dip",
    "body": [
      6.35,
      9.81
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  },
  {
    "id": "ti-lm2662mx-nopb",
    "name": "LM2662MX/NOPB — 200 mA switched-capacitor voltage converter with selectable oscillator frequency",
    "part": "LM2662MX/NOPB",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/lm2662.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/LM2662"
      }
    ],
    "description": "200 mA switched-capacitor voltage converter with selectable oscillator frequency.",
    "subtitle": "200 mA switched-capacitor voltage converter with selectable oscillator frequency",
    "tags": [
      "charge pump",
      "inverting regulator"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "FC",
        "input",
        "Oscillator frequency control; connect or leave open as described for the selected frequency."
      ],
      [
        "CAP+",
        "passive",
        "Positive terminal of the external flying capacitor."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "CAP−",
        "passive",
        "Negative terminal of the external flying capacitor."
      ],
      [
        "OUT",
        "power_out",
        "Negative output in the voltage-inverter configuration; other topologies use this node differently."
      ],
      [
        "LV",
        "input",
        "Low-voltage mode connection; follow the supply-dependent grounding requirements."
      ],
      [
        "OSC",
        "passive",
        "Oscillator timing or external-clock connection; follow the permitted mode requirements."
      ],
      [
        "V+",
        "power_in",
        "Positive input supply in the inverter configuration; observe the datasheet voltage limits."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/LM2662MX-NOPB/3440114",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1203,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-28.txt",
      "excerpt": "LM2662MX/NOPB; In-Stock: 1,203"
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
    "id": "adi-max1044cpa-plus",
    "name": "MAX1044CPA+ — Switched-capacitor voltage inverter or doubler with BOOST frequency control",
    "part": "MAX1044CPA+",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/ICL7660-MAX1044.pdf",
    "references": [],
    "description": "Switched-capacitor voltage inverter or doubler with BOOST frequency control.",
    "subtitle": "Switched-capacitor voltage inverter or doubler with BOOST frequency control",
    "tags": [
      "charge pump",
      "inverting regulator"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "BOOST",
        "input",
        "Frequency-boost input; connect as specified to move the switching frequency above the audio range."
      ],
      [
        "CAP+",
        "passive",
        "Positive terminal of the external flying capacitor."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "CAP−",
        "passive",
        "Negative terminal of the external flying capacitor."
      ],
      [
        "OUT",
        "power_out",
        "Negative output in the voltage-inverter configuration; other topologies use this node differently."
      ],
      [
        "LV",
        "input",
        "Low-voltage mode connection; follow the supply-dependent grounding requirements."
      ],
      [
        "OSC",
        "passive",
        "Oscillator timing or external-clock connection; follow the permitted mode requirements."
      ],
      [
        "V+",
        "power_in",
        "Positive input supply in the inverter configuration; observe the datasheet voltage limits."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc-maxim-integrated/MAX1044CPA/947733",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1334,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-22.txt",
      "excerpt": "MAX1044CPA+; In-Stock: 1,334"
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
