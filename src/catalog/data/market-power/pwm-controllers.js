// Exact manufacturer part/package specifications and reviewed terminal evidence.
export default [
  {
    "id": "ti-uc3842an",
    "name": "UC3842AN — Current-mode PWM controller with 16 V turn-on threshold and near-100% maximum duty cycle",
    "part": "UC3842AN",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/uc3842a.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/UC3842A"
      }
    ],
    "description": "Current-mode PWM controller with 16 V turn-on threshold and near-100% maximum duty cycle.",
    "subtitle": "Current-mode PWM controller with 16 V turn-on threshold and near-100% maximum duty cycle",
    "tags": [
      "pwm",
      "power controller"
    ],
    "packageName": "PDIP-8",
    "pins": [
      [
        "COMP",
        "output",
        "Error-amplifier output and loop-compensation connection."
      ],
      [
        "FB",
        "input",
        "Inverting voltage-feedback input to the error amplifier."
      ],
      [
        "ISENSE",
        "input",
        "Primary current-sense input for pulse-by-pulse limiting."
      ],
      [
        "RT/CT",
        "passive",
        "External oscillator timing resistor/capacitor connection."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "OUTPUT",
        "output",
        "Power-MOSFET gate-drive output."
      ],
      [
        "VCC",
        "power_in",
        "Controller bias supply; observe the part-specific startup and undervoltage thresholds."
      ],
      [
        "VREF",
        "power_out",
        "Nominal 5 V reference-regulator output; bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/UC3842AN/382026",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 1748,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-23.txt",
      "excerpt": "UC3842AN; In-Stock: 1,748"
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
    "id": "ti-ucc28c43dgkr",
    "name": "UCC28C43DGKR — BiCMOS current-mode PWM controller with low startup current and near-100% maximum duty cycle",
    "part": "UCC28C43DGKR",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/ucc28c43.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/UCC28C43"
      }
    ],
    "description": "BiCMOS current-mode PWM controller with low startup current and near-100% maximum duty cycle.",
    "subtitle": "BiCMOS current-mode PWM controller with low startup current and near-100% maximum duty cycle",
    "tags": [
      "pwm",
      "power controller"
    ],
    "packageName": "MSOP-8",
    "pins": [
      [
        "COMP",
        "output",
        "Error-amplifier output and loop-compensation connection."
      ],
      [
        "FB",
        "input",
        "Inverting voltage-feedback input to the error amplifier."
      ],
      [
        "CS",
        "input",
        "Primary current-sense comparator input."
      ],
      [
        "RT/CT",
        "passive",
        "External oscillator timing resistor/capacitor connection."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "OUT",
        "output",
        "Power-MOSFET gate-drive output."
      ],
      [
        "VDD",
        "power_in",
        "Controller bias supply; observe startup and undervoltage limits."
      ],
      [
        "VREF",
        "power_out",
        "Nominal 5 V reference-regulator output; bypass locally."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/UCC28C43DGKR/5143482",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 3074,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-39.txt",
      "excerpt": "UCC28C43DGKR; In-Stock: 3,074"
    },
    "kind": "tssop",
    "body": [
      3,
      3
    ],
    "rowSpacing": 4.2,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ]
  },
  {
    "id": "ti-tl494cn",
    "name": "TL494CN — Voltage-mode PWM controller with two error amplifiers and two accessible output switches",
    "part": "TL494CN",
    "manufacturer": "Texas Instruments",
    "category": "Semiconductors",
    "source": "https://www.ti.com/lit/ds/symlink/tl494.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/TL494"
      }
    ],
    "description": "Voltage-mode PWM controller with two error amplifiers and two accessible output switches.",
    "subtitle": "Voltage-mode PWM controller with two error amplifiers and two accessible output switches",
    "tags": [
      "pwm",
      "power controller"
    ],
    "packageName": "PDIP-16",
    "pins": [
      [
        "1IN+",
        "input",
        "Noninverting input of error amplifier 1."
      ],
      [
        "1IN−",
        "input",
        "Inverting input of error amplifier 1."
      ],
      [
        "FEEDBACK",
        "input",
        "Feedback/compensation control node."
      ],
      [
        "DTC",
        "input",
        "Dead-time control comparator input."
      ],
      [
        "CT",
        "passive",
        "Oscillator timing capacitor connection."
      ],
      [
        "RT",
        "passive",
        "Oscillator timing resistor connection."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "C1",
        "open_collector",
        "Output-switch 1 collector/drain terminal."
      ],
      [
        "E1",
        "open_emitter",
        "Output-switch 1 emitter/source terminal."
      ],
      [
        "E2",
        "open_emitter",
        "Output-switch 2 emitter/source terminal."
      ],
      [
        "C2",
        "open_collector",
        "Output-switch 2 collector/drain terminal."
      ],
      [
        "VCC",
        "power_in",
        "Positive controller supply input."
      ],
      [
        "OUTPUT CTRL",
        "input",
        "Output mode select: single-ended/parallel or push-pull."
      ],
      [
        "REF",
        "power_out",
        "Nominal 5 V reference-regulator output."
      ],
      [
        "2IN−",
        "input",
        "Inverting input of error amplifier 2."
      ],
      [
        "2IN+",
        "input",
        "Noninverting input of error amplifier 2."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/TL494CN/277444",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 3390,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "market-batch-24.txt",
      "excerpt": "TL494CN; In-Stock: 3,390"
    },
    "kind": "dip",
    "body": [
      6.35,
      19.3
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  },
  {
    "id": "st-sg3525an",
    "name": "SG3525AN — Regulating PWM controller with soft start, adjustable dead time and dual push-pull outputs",
    "part": "SG3525AN",
    "manufacturer": "STMicroelectronics",
    "category": "Semiconductors",
    "source": "https://www.st.com/resource/en/datasheet/sg3525.pdf",
    "references": [],
    "description": "Regulating PWM controller with soft start, adjustable dead time and dual push-pull outputs.",
    "subtitle": "Regulating PWM controller with soft start, adjustable dead time and dual push-pull outputs",
    "tags": [
      "pwm",
      "power controller"
    ],
    "packageName": "PDIP-16",
    "pins": [
      [
        "IN−",
        "input",
        "Error-amplifier inverting input."
      ],
      [
        "IN+",
        "input",
        "Error-amplifier noninverting input."
      ],
      [
        "SYNC",
        "input",
        "External oscillator synchronization input."
      ],
      [
        "OSC OUT",
        "output",
        "Oscillator output."
      ],
      [
        "CT",
        "passive",
        "Oscillator timing-capacitor connection."
      ],
      [
        "RT",
        "passive",
        "Oscillator timing-resistor connection."
      ],
      [
        "DISCHARGE",
        "passive",
        "Timing-capacitor discharge/dead-time connection."
      ],
      [
        "SOFT START",
        "passive",
        "External soft-start capacitor connection."
      ],
      [
        "COMPENSATION",
        "output",
        "Error-amplifier output and loop-compensation connection."
      ],
      [
        "SHUTDOWN",
        "input",
        "Active-high shutdown input."
      ],
      [
        "OUTPUT A",
        "output",
        "Push-pull output driver A."
      ],
      [
        "GND",
        "power_in",
        "Ground and signal reference."
      ],
      [
        "VC",
        "power_in",
        "Output-driver supply input."
      ],
      [
        "OUTPUT B",
        "output",
        "Push-pull output driver B."
      ],
      [
        "VIN",
        "power_in",
        "Controller supply input, 8–35 V operating range."
      ],
      [
        "VREF",
        "power_out",
        "Nominal 5.1 V reference output."
      ]
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/stmicroelectronics/SG3525AN/599613",
      "status": "Positive stock shown in retrieved commercial listing; quantities are a dated snapshot.",
      "stockShown": 3242,
      "manufacturer": "STMicroelectronics",
      "sourceArtifact": "market-batch-25.txt",
      "excerpt": "SG3525AN; In-Stock: 3,242"
    },
    "kind": "dip",
    "body": [
      6.35,
      19.3
    ],
    "rowSpacing": 7.62,
    "pitch": 2.54
  }
];
