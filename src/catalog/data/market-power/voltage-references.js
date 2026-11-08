// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-tl431aidbzr",
    "name": "TL431AIDBZR — Adjustable precision shunt regulator, DBZ SOT-23-3 pinout: cathode 1, reference 2 and anode 3",
    "part": "TL431AIDBZR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/tl431.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/TL431"
      }
    ],
    "description": "Adjustable precision shunt regulator, DBZ SOT-23-3 pinout: cathode 1, reference 2 and anode 3.",
    "subtitle": "Adjustable precision shunt regulator, DBZ SOT-23-3 pinout: cathode 1, reference 2 and anode 3",
    "tags": [
      "voltage reference",
      "shunt regulator"
    ],
    "packageName": "SOT-23-3",
    "pins": [
      [
        "K",
        "passive",
        "Cathode shunt-regulator terminal; supply the required bias current through the application circuit."
      ],
      [
        "REF",
        "input",
        "Reference-divider input, compared against the internal nominal 2.495 V threshold."
      ],
      [
        "A",
        "power_in",
        "Anode/common return, normally connected to ground."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/TL431AIDBZR/686856",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 3303,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-22.txt",
      "excerpt": "TL431AIDBZR; In-Stock: 3,303"
    },
    "kind": "SOT233"
  },
  {
    "id": "adi-ad584jnz",
    "name": "AD584JNZ — Pin-programmable 2",
    "part": "AD584JNZ",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/AD584.pdf",
    "references": [],
    "description": "Pin-programmable 2.5/5/7.5/10 V precision reference, eight-lead PDIP variant.",
    "subtitle": "Pin-programmable 2",
    "tags": [
      "voltage reference",
      "precision"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "10.0V",
        "power_out",
        "Buffered reference output; nominally 10 V with the programming pins open."
      ],
      [
        "5.0V",
        "passive",
        "5 V programming tap; connect only according to the datasheet output-selection circuit."
      ],
      [
        "2.5V",
        "passive",
        "2.5 V programming tap; connect only according to the datasheet output-selection circuit."
      ],
      [
        "COMMON",
        "power_in",
        "Reference common and supply return."
      ],
      [
        "STROBE",
        "input",
        "Strobe control; may turn off the output through the specified external control circuit."
      ],
      [
        "VBG",
        "output",
        "Internal bandgap node, available for the specified monitoring/filtering uses."
      ],
      [
        "CAP",
        "passive",
        "Noise-filter capacitor connection."
      ],
      [
        "V+",
        "power_in",
        "Positive reference supply; provide the required output headroom."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/AD584JNZ/819844",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1736,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-23.txt",
      "excerpt": "AD584JNZ; In-Stock: 1,736"
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
    "id": "adi-ref02cpz",
    "name": "REF02CPZ — Precision 5 V series reference with temperature output and trim connection",
    "part": "REF02CPZ",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/REF01_02_03.pdf",
    "references": [],
    "description": "Precision 5 V series reference with temperature output and trim connection.",
    "subtitle": "Precision 5 V series reference with temperature output and trim connection",
    "tags": [
      "voltage reference",
      "precision"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "VIN",
        "power_in",
        "Positive reference supply input; provide the required headroom above 5 V."
      ],
      [
        "TEMP",
        "output",
        "Bandgap/temperature-dependent voltage output."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "TRIM",
        "passive",
        "Fine output-voltage trim-network connection."
      ],
      [
        "VOUT",
        "power_out",
        "Precision nominal 5 V reference output."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ],
      [
        "NC",
        "no_connect",
        "No internal connection; leave this terminal unconnected."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/REF02CPZ/936564",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 2846,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-23.txt",
      "excerpt": "REF02CPZ; In-Stock: 2,846"
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
    "id": "adi-ad587jrz",
    "name": "AD587JRZ — Precision 10 V buried-Zener reference with trim and noise-reduction connections",
    "part": "AD587JRZ",
    "manufacturer": "Analog Devices",
    "category": "Semiconductors",
    "source": "https://www.analog.com/media/en/technical-documentation/data-sheets/AD587.pdf",
    "references": [],
    "description": "Precision 10 V buried-Zener reference with trim and noise-reduction connections.",
    "subtitle": "Precision 10 V buried-Zener reference with trim and noise-reduction connections",
    "tags": [
      "voltage reference",
      "precision"
    ],
    "packageName": "SOIC-8",
    "pins": [
      [
        "TP",
        "no_connect",
        "Factory test point; leave floating and do not connect."
      ],
      [
        "+VIN",
        "power_in",
        "Positive reference supply input; provide the required headroom above 10 V."
      ],
      [
        "TP",
        "no_connect",
        "Factory test point; leave floating and do not connect."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "TRIM",
        "passive",
        "Fine output-voltage trim-network connection."
      ],
      [
        "VOUT",
        "power_out",
        "Precision nominal 10 V reference output."
      ],
      [
        "TP",
        "no_connect",
        "Factory test point; leave floating and do not connect."
      ],
      [
        "NR",
        "passive",
        "Output-noise reduction capacitor connection to ground."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/analog-devices-inc/AD587JRZ/819848",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 861,
      "manufacturer": "Analog Devices",
      "sourceArtifact": "market-batch-31.txt",
      "excerpt": "AD587JRZ; In-Stock: 861"
    },
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27
  }
];
