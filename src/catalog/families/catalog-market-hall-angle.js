import { defineFamily } from "../registry.js";
import { marketPackage } from "../shared/market-packages.js";
import { marketAnalogPackage } from "../shared/market-analog-packages.js";

// Current order codes, manufacturer pin diagrams and exact-maker stock offers.
// TEST pins are real exposed contacts and retain their required connection rules.
const specs = [
  {
    "id": "infineon-as5600-asom-soic8",
    "part": "AS5600-ASOM-SOIC8",
    "name": "AS5600-ASOM-SOIC8 — 12-bit contactless rotary-angle sensor with analog/PWM output and I2C configuration",
    "manufacturer": "Infineon Technologies",
    "category": "Sensors",
    "source": "https://www.infineon.com/assets/row/public/documents/30/49/infineon-as5600-datasheet-en.pdf",
    "references": [
      {
        "label": "Current manufacturer product page",
        "url": "https://www.infineon.com/part/AS5600"
      }
    ],
    "description": "12-bit contactless rotary-angle sensor with analog/PWM output and I2C configuration. Current Infineon order code for the AS5600 SOIC-8 device; a diametrically magnetized external magnet is required.",
    "subtitle": "12-bit contactless rotary-angle sensor with analog/PWM output and I2C configuration",
    "packageName": "SOIC-8",
    "pins": [
      [
        "VDD5V",
        "power_in",
        "Positive supply input for 5 V operation. In 3.3 V mode connect VDD5V and VDD3V3 to the same permitted 3.3 V source."
      ],
      [
        "VDD3V3",
        "passive",
        "Mode-dependent 3.3 V supply node: internal regulator output in 5 V mode; tie to the external 3.3 V supply with VDD5V in 3.3 V mode. Apply the specified decoupling and do not short an active regulator output to a different source."
      ],
      [
        "OUT",
        "output",
        "Programmable analog voltage or PWM angle output."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ],
      [
        "PGO",
        "input",
        "Programming-option input with internal pull-up; grounding selects programming option B."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C serial data; open-drain output requires an external pull-up."
      ],
      [
        "SCL",
        "input",
        "I2C serial clock input; provide the specified pull-up."
      ],
      [
        "DIR",
        "input",
        "Direction polarity: ground makes values increase clockwise; VDD reverses the direction."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "angle sensor"
    ],
    "kind": "soic",
    "body": [
      3.9,
      4.9
    ],
    "rowSpacing": 5.4,
    "pitch": 1.27,
    "bodyMarking": "AS5600",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/infineon-technologies/AS5600-ASOM-SOIC8/29758430",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 415,
      "manufacturer": "Infineon Technologies",
      "sourceArtifact": "hall-research-2.txt",
      "excerpt": "AS5600-ASOM-SOIC8; In-Stock: 415",
      "listingTitle": "AS5600-ASOM-SOIC8 Infineon Technologies | Angle, Linear Position Measuring | DigiKey (https://www.digikey.com/en/products/detail/infineon-technologies/AS5600-ASOM-SOIC8/29758430)"
    },
    "marking": "Infineon"
  },
  {
    "id": "infineon-as5048a-htsp-tssop14-02",
    "part": "AS5048A-HTSP-TSSOP14-02",
    "name": "AS5048A-HTSP-TSSOP14-02 — 14-bit absolute rotary-angle sensor with SPI and PWM interfaces",
    "manufacturer": "Infineon Technologies",
    "category": "Sensors",
    "source": "https://www.infineon.com/assets/row/public/documents/30/49/infineon-as5048a-as5048b-datasheet-en.pdf",
    "references": [
      {
        "label": "Current manufacturer product page",
        "url": "https://www.infineon.com/part/AS5048A"
      }
    ],
    "description": "14-bit absolute rotary-angle sensor with SPI and PWM interfaces. Current Infineon order code for the AS5048A TSSOP-14 device; a diametrically magnetized external magnet is required.",
    "subtitle": "14-bit absolute rotary-angle sensor with SPI and PWM interfaces",
    "packageName": "TSSOP-14",
    "pins": [
      [
        "CSn",
        "input",
        "Active-low SPI chip select."
      ],
      [
        "CLK",
        "input",
        "SPI serial clock input."
      ],
      [
        "MISO",
        "bidirectional",
        "SPI master-in/slave-out data terminal. The manufacturer classifies this pad as digital I/O; use its output direction during normal SPI reads."
      ],
      [
        "MOSI",
        "input",
        "SPI master-out/slave-in serial data input."
      ],
      [
        "TEST",
        "passive",
        "Factory test terminal that must be connected to GND, unlike the other TEST pins."
      ],
      [
        "TEST",
        "no_connect",
        "Factory analog test terminal; leave open during normal operation as specified."
      ],
      [
        "TEST",
        "no_connect",
        "Factory analog test terminal; leave open during normal operation as specified."
      ],
      [
        "TEST",
        "no_connect",
        "Factory analog test terminal; leave open during normal operation as specified."
      ],
      [
        "TEST",
        "no_connect",
        "Factory analog test terminal; leave open during normal operation as specified."
      ],
      [
        "TEST",
        "no_connect",
        "Factory analog test terminal; leave open during normal operation as specified."
      ],
      [
        "VDD5V",
        "power_in",
        "Positive supply input, 3.0–5.5 V. Follow the selected 5 V or 3.3 V operating circuit."
      ],
      [
        "VDD3V",
        "passive",
        "Mode-dependent supply node: internal 3.3 V regulator output in 5 V mode, requiring 10 µF to GND; connect to VDD5V for 3.3 V operation."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ],
      [
        "PWM",
        "output",
        "Push-pull pulse-width-modulated angle output."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "angle sensor"
    ],
    "kind": "tssop",
    "body": [
      4.4,
      5
    ],
    "rowSpacing": 5.5,
    "pitch": 0.65,
    "padSize": [
      0.8,
      0.35
    ],
    "bodyMarking": "AS5048A",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/infineon-technologies/AS5048A-HTSP-TSSOP14-02/29758304",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 460,
      "manufacturer": "Infineon Technologies",
      "sourceArtifact": "hall-research-1.txt",
      "excerpt": "AS5048A-HTSP-TSSOP14-02; In-Stock: 460",
      "listingTitle": "AS5048A-HTSP-TSSOP14-02 Infineon Technologies | Angle, Linear Position Measuring | DigiKey (https://www.digikey.com/en/products/detail/infineon-technologies/AS5048A-HTSP-TSSOP14-02/29758304)"
    },
    "marking": "Infineon"
  },
  {
    "id": "ti-drv5055a1qdbzr",
    "part": "DRV5055A1QDBZR",
    "name": "DRV5055A1QDBZR — Ratiometric linear Hall sensor with midpoint output at zero field",
    "manufacturer": "Texas Instruments",
    "category": "Sensors",
    "source": "https://www.ti.com/lit/ds/symlink/drv5055.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/DRV5055"
      }
    ],
    "description": "Ratiometric linear Hall sensor with midpoint output at zero field. A1 sensitivity is 100 mV/mT at 5 V, with a nominal ±21 mT sensing range and magnet-temperature compensation.",
    "subtitle": "Ratiometric linear Hall sensor with midpoint output at zero field",
    "packageName": "SOT-23-3",
    "pins": [
      [
        "VCC",
        "power_in",
        "3.3 V or 5 V sensor supply; analog sensitivity and zero-field output are ratiometric to this supply."
      ],
      [
        "OUT",
        "output",
        "Analog magnetic-field output. Zero field gives approximately half of VCC; observe the SOT-23 field-polarity direction."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "hall sensor"
    ],
    "kind": "SOT233",
    "marking": "DRV5055 A1",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/DRV5055A1QDBZR/8567407",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 16417,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "hall-stock-1.txt",
      "excerpt": "DRV5055A1QDBZR; In-Stock: 16,417",
      "listingTitle": "DRV5055A1QDBZR Texas Instruments | Linear, Compass (ICs) | DigiKey (https://www.digikey.com/en/products/detail/texas-instruments/DRV5055A1QDBZR/8567407?s=N4Ig7CBcoIYE5QIwA5EGYA0IYBcmZAAcBLKAJgFYqwKAWATgF9Gg)"
    }
  },
  {
    "id": "ti-drv5032fadbzr",
    "part": "DRV5032FADBZR",
    "name": "DRV5032FADBZR — Ultra-low-power omnipolar Hall switch, FA 20 Hz sampling variant with push-pull output",
    "manufacturer": "Texas Instruments",
    "category": "Sensors",
    "source": "https://www.ti.com/lit/ds/symlink/drv5032.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/DRV5032"
      }
    ],
    "description": "Ultra-low-power omnipolar Hall switch, FA 20 Hz sampling variant with push-pull output. Detects either north or south magnetic poles.",
    "subtitle": "Ultra-low-power omnipolar Hall switch, FA 20 Hz sampling variant with push-pull output",
    "packageName": "SOT-23-3",
    "pins": [
      [
        "VCC",
        "power_in",
        "1.65–5.5 V supply input; bypass to GND locally."
      ],
      [
        "OUT",
        "output",
        "Push-pull omnipolar magnetic-switch output; low asserts when either magnetic pole exceeds the operate threshold."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "hall sensor"
    ],
    "kind": "SOT233",
    "marking": "DRV5032 FA",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/DRV5032FADBZR/8133114",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 130132,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "hall-stock-1.txt",
      "excerpt": "DRV5032FADBZR; In-Stock: 130,132",
      "listingTitle": "DRV5032FADBZR Texas Instruments | Switches (Solid State) | DigiKey (https://www.digikey.com/en/products/detail/texas-instruments/DRV5032FADBZR/8133114)"
    }
  },
  {
    "id": "ti-tmag5273a2qdbvr",
    "part": "TMAG5273A2QDBVR",
    "name": "TMAG5273A2QDBVR — Low-power three-axis linear Hall sensor with I2C interface, temperature conversion and angle calculation",
    "manufacturer": "Texas Instruments",
    "category": "Sensors",
    "source": "https://www.ti.com/lit/ds/symlink/tmag5273.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/TMAG5273"
      }
    ],
    "description": "Low-power three-axis linear Hall sensor with I2C interface, temperature conversion and angle calculation. A2 magnetic ranges are selectable ±133 mT or ±266 mT.",
    "subtitle": "Low-power three-axis linear Hall sensor with I2C interface, temperature conversion and angle calculation",
    "packageName": "SOT-23-6",
    "pins": [
      [
        "SCL",
        "bidirectional",
        "I2C serial clock connection; follow the bus pull-up and interface requirements."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ],
      [
        "GND (TEST)",
        "input",
        "TI test input: connect to ground in the application; this is not a spare GPIO."
      ],
      [
        "VCC",
        "power_in",
        "1.7–3.6 V sensor supply input."
      ],
      [
        "INT",
        "bidirectional",
        "Configurable interrupt input/output and wake/control connection. If tied to ground while unused, set MASK_INTB as specified."
      ],
      [
        "SDA",
        "bidirectional",
        "I2C open-drain serial data; provide an external bus pull-up."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "hall sensor"
    ],
    "kind": "soic",
    "body": [
      1.6,
      2.9
    ],
    "rowSpacing": 2.4,
    "pitch": 0.95,
    "padSize": [
      0.8,
      0.5
    ],
    "bodyMarking": "52A2",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/TMAG5273A2QDBVR/15666862",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 2421,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "hall-research-3.txt",
      "excerpt": "TMAG5273A2QDBVR; In-Stock: 2,421",
      "listingTitle": "TMAG5273A2QDBVR Texas Instruments | Linear, Compass (ICs) | DigiKey (https://www.digikey.com/en/products/detail/texas-instruments/TMAG5273A2QDBVR/15666862)"
    },
    "marking": "TI"
  },
  {
    "id": "ti-drv5053vaqdbzrq1",
    "part": "DRV5053VAQDBZRQ1",
    "name": "DRV5053VAQDBZRQ1 — Automotive wide-voltage linear Hall sensor with a 0–2 V analog output",
    "manufacturer": "Texas Instruments",
    "category": "Sensors",
    "source": "https://www.ti.com/lit/ds/symlink/drv5053-q1.pdf",
    "references": [
      {
        "label": "Manufacturer product page",
        "url": "https://www.ti.com/product/DRV5053-Q1"
      }
    ],
    "description": "Automotive wide-voltage linear Hall sensor with a 0–2 V analog output. VA sensitivity is nominally −90 mV/mT, with approximately 1 V output at zero field.",
    "subtitle": "Automotive wide-voltage linear Hall sensor with a 0–2 V analog output",
    "packageName": "SOT-23-3",
    "pins": [
      [
        "VCC",
        "power_in",
        "2.7–38 V supply input with the specified reverse-polarity protection; bypass locally."
      ],
      [
        "OUT",
        "output",
        "Analog magnetic-field output, approximately 1 V at zero field and nominal −90 mV/mT sensitivity. Keep the load within the specified drive limits."
      ],
      [
        "GND",
        "power_in",
        "Ground reference and supply return."
      ]
    ],
    "tags": [
      "hall",
      "magnetic sensor",
      "hall sensor"
    ],
    "kind": "SOT233",
    "marking": "DRV5053 VA",
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.digikey.com/en/products/detail/texas-instruments/DRV5053VAQDBZRQ1/5056044",
      "status": "Positive stock shown in retrieved exact-maker commercial listing; quantities are a dated snapshot.",
      "stockShown": 87,
      "manufacturer": "Texas Instruments",
      "sourceArtifact": "hall-research-1.txt",
      "excerpt": "DRV5053VAQDBZRQ1; In-Stock: 87",
      "listingTitle": "DRV5053VAQDBZRQ1 Texas Instruments | Linear, Compass (ICs) | DigiKey Marketplace (https://www.digikey.com/en/products/detail/texas-instruments/DRV5053VAQDBZRQ1/5056044)"
    }
  }
];

export default defineFamily("market-hall-angle", specs.map(spec => spec.kind === "SOT233" ? marketAnalogPackage(spec) : marketPackage(spec, { breadboard: spec.kind === 'dip' })));
