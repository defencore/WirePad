# Component library tree

Generated from the live catalog. Do not edit the tree by hand.

**2003 components · 146 source families · 31 categories.**

Hierarchy: **library category → actual manufacturer → source family → component**. Categories and manufacturer names match the library filters; source families identify catalog ownership, not additional UI categories. Square-bracket IDs are stable saved-project identifiers.

## KiCad accuracy marks

| Mark | Meaning | Components |
| --- | --- | ---: |
| FP:M | Manufacturer-derived land/contact geometry for the stated package and reviewed scope. | 32 |
| FP:C | CAD/drawing-derived contact reference: source-board contact coordinates, not a complete mating or production footprint. | 110 |
| FP:R | Reference, approximate, mixed or off-board termination carrier. | 1837 |
| FP:? | Accuracy not reviewed; do not assume manufacturer geometry. New/unclassified entries default here. | 24 |
| 3D:A | Approximate generated WirePad WRL model. | 2003 |
| CAD:+ | A separate external CAD/reference link is available in the catalog. | 945 |

**All current generated 3D models are approximate.** The [WRL exporter](../src/assets/kicad.js) constructs box geometry from [model layouts](../src/assets/model-layout.js); it does not import the external manufacturer CAD. A CAD link does not upgrade FP or 3D accuracy, and may identify a later mechanical reference rather than the exact electrical revision.

M and C are scoped source assessments, not fabrication approval. Exports can omit mounting/support holes, antenna keepouts, thermal vias, paste segmentation or connector clearances. C patterns can include connector solder tails and reverse-side service pads exported on F.Cu. R patterns must not be substituted for the real board mating pattern. Read the specific footprint note and linked manufacturer source before manufacturing. Symbol/pad-number tests and successful KiCad parsing establish consistency and syntax, not physical accuracy.

Explicit per-component assessments and their evidence are maintained in [catalog-kicad-accuracy.json](catalog-kicad-accuracy.json). No mark is promoted automatically from a URL, descriptive keyword, test result or geometry fixture. A missing assessment is always `FP:?`. `CAD:-` means no separate external CAD link is recorded.

## Breadboard insertion marks

| Mark | Meaning | Components |
| --- | --- | ---: |
| BB:+ | Reviewed direct insertion profile; fit checks every declared lead, physical pitch and electrical strip. | 1217 |
| BB:H | Configurable breadboard host. | 1 |
| BB:- | No reviewed direct insertion profile. | 785 |

Breadboard marks come only from explicit catalog mounting descriptors. A 2.54 mm product tag, a reference footprint or matching visual overlap does not create a profile. `BB:-` does not mean that the part has no 2.54 mm contacts: it can require a different header population, an adapter, or further source review. Insertion marks do not upgrade KiCad accuracy. See [BREADBOARD_MOUNTING.md](BREADBOARD_MOUNTING.md) and its per-component source audits.

## Tree

```text
WirePad (2003)
├── Actuators (18)
│   ├── Adafruit (3)
│   │   ├── audio-prototyping (1)
│   │   │   └── Adafruit DRV2605L Haptic Motor Controller [adafruit-drv2605l-2305-qt] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   └── common-interfaces (2)
│   │       ├── Adafruit PCA9685 16-Channel Servo Driver [adafruit-pca9685-815] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Adafruit TMC2209 Stepper Motor Driver [adafruit-tmc2209-6121] [FP:?] [3D:A] [CAD:+] [BB:-]
│   ├── Keyestudio (2)
│   │   ├── common-interfaces (1)
│   │   │   └── Keyestudio KS0011 Single 5V Relay [keyestudio-ks0011-5v-relay] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── diy-kit-outputs (1)
│   │       └── Keyestudio KS0327 ULN2003 + 28BYJ-48 [keyestudio-ks0327-uln2003-stepper] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── M5Stack (1)
│   │   └── m5stack-units (1)
│   │       └── M5Stack Unit Relay U023 [m5stack-unit-relay-u023] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Pololu (5)
│   │   ├── common-interfaces (4)
│   │   │   ├── Pololu A4988 Stepper Motor Driver [pololu-a4988-1182] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Pololu DRV8825 Stepper Motor Driver [pololu-drv8825-2133] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Pololu DRV8833 Dual Motor Driver [pololu-drv8833-2130] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Pololu TB6612FNG Dual Motor Driver [pololu-tb6612fng-713] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── pololu-more (1)
│   │       └── Pololu DRV8838 Single Motor Driver [pololu-drv8838-2990] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── Seeed Studio (2)
│   │   └── seeed-more (2)
│   │       ├── Seeed Grove Electromagnet 101020073 [seeed-grove-electromagnet-101020073] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Seeed Grove Water Atomization 101020090 [seeed-grove-water-atomization-101020090] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── SunFounder (1)
│   │   └── common-interfaces (1)
│   │       └── SunFounder L298N Dual Motor Driver (HW-095) [sunfounder-l298n-hw095] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── TowerPro (2)
│   │   └── pwm-servos (2)
│   │       ├── TowerPro MG90S Analog Servo [towerpro-mg90s] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── TowerPro SG90 Analog Servo [towerpro-sg90] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── Waveshare (2)
│       ├── core-modules (1)
│       │   └── ST3215 Serial Bus Servo [st3215] [FP:R] [3D:A] [CAD:+] [BB:-]
│       └── waveshare-expansion (1)
│           └── Waveshare Servo Driver HAT (B) [waveshare-servo-driver-hat-b] [FP:R] [3D:A] [CAD:+] [BB:-]
├── ADC (8)
│   ├── Adafruit (6)
│   │   ├── core-modules (1)
│   │   │   └── ADS1115 16-bit ADC [ads1115] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-adafruit-interfaces (4)
│   │   │   ├── Adafruit ADS122C04 24-Bit ADC - 4 Channel 2-kSPS [adafruit-module-6432] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit ADS7128 8-Channel ADC and GPIO Expander [adafruit-module-6494] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit ADS7830 8-Channel 8-Bit ADC with I2C [adafruit-module-5836] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Adafruit MCP3421 18-Bit ADC - STEMMA QT / Qwiic [adafruit-module-5870] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── modules-adafruit-power-audio (1)
│   │       └── Adafruit PCF8591 Quad 8-bit ADC + 8-bit DAC - STEMMA QT / Qwiic [adafruit-module-4648] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── DFRobot (1)
│   │   └── modules-dfrobot-converters (1)
│   │       └── Gravity: 0-10V 15-Bit Dual-Channel High-Precision ADC Module for Arduino / Raspberry Pi / ESP32 [dfrobot-gravity-ads1115-0-10v-dfr1184] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── Generic breakout (1)
│       └── core-modules (1)
│           └── ADS1220 24-bit ADC Breakout [ads1220] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Audio (24)
│   ├── Adafruit (17)
│   │   ├── modules-adafruit-additional-power-audio (3)
│   │   │   ├── Adafruit I2S 3W Stereo Speaker Bonnet for Raspberry Pi [adafruit-module-3346] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit MIDI FeatherWing Kit [adafruit-module-4740] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── Adafruit Music Maker FeatherWing - MP3 OGG WAV MIDI Synth Player [adafruit-module-3357] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-adafruit-power-audio (14)
│   │       ├── Adafruit Audio BFF Add-on for QT Py and Xiao [adafruit-module-5769] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DAC7578 Breakout - 8 x Channel 12-bit I2C DAC [adafruit-module-6223] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit GP8403 Breakout Board I2C DAC with 12V Booster + NVM [adafruit-module-6516] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit I2S Amplifier BFF Add-On for QT Py and Xiao [adafruit-module-5770] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit I2S MEMS Microphone Breakout - ICS-43434 [adafruit-module-6049] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit I2S Stereo Decoder - UDA1334A Breakout [adafruit-module-3678] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCM5122 I2S DAC with Line Level Output - HW, I2C or SPI [adafruit-module-6421] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit RP2040 Prop-Maker Feather with I2S Audio Amplifier [adafruit-module-5768] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit STEMMA Audio Amp - Mono 2.5W Class D - PAM8302 [adafruit-module-5647] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit STEMMA Speaker - Plug and Play Audio Amplifier [adafruit-module-3885] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Precision LM4040 Voltage Reference Breakout - 2.048V and 4.096V [adafruit-module-2200] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Stereo 2.1W Class D Audio Amplifier - TPA2012 [adafruit-module-1552] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Stereo 2.8W Class D Audio Amplifier - I2C Control AGC - TPA2016 [adafruit-module-1712] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── VS1053 Codec + MicroSD Breakout - MP3/WAV/MIDI/OGG Play + Record [adafruit-module-1381] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── MIKROE (1)
│   │   └── mikroe-click (1)
│   │       └── MIKROE BUZZ Click MIKROE-945 [mikroe-buzz-click-945] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Seeed Studio (2)
│   │   └── modules-seeed-extended-display-audio (2)
│   │       ├── Seeed Grove - MP3 v4.0 [seeed-module-107020129] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Seeed Grove - Recorder v2.0 [seeed-module-107020007] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── SparkFun Electronics (4)
│       └── modules-sparkfun-power-audio (4)
│           ├── SparkFun Analog MEMS Microphone Breakout - SPH8878LR5H-1 [sparkfun-module-bob19389] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── SparkFun Audio Jack Breakout [sparkfun-module-prt10588] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── SparkFun FM Tuner Basic Breakout - Si4703 [sparkfun-module-bob11083] [FP:R] [3D:A] [CAD:-] [BB:+]
│           └── SparkFun Qwiic Speaker Amp [sparkfun-module-dev20690] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Communication (2)
│   └── Keyestudio (2)
│       └── diy-kit-outputs (2)
│           ├── Keyestudio KS0026 IR Receiver [keyestudio-ks0026-ir-receiver] [FP:R] [3D:A] [CAD:-] [BB:+]
│           └── Keyestudio KS0027 IR Transmitter [keyestudio-ks0027-ir-transmitter] [FP:R] [3D:A] [CAD:-] [BB:+]
├── Compute modules (5)
│   └── Luckfox (5)
│       └── luckfox (5)
│           ├── Luckfox Core1106 [luckfox-core1106] [FP:?] [3D:A] [CAD:+] [BB:-]
│           ├── Luckfox Core1106D [luckfox-core1106d] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Luckfox Core3506 [luckfox-core3506] [FP:?] [3D:A] [CAD:+] [BB:-]
│           ├── Luckfox Core3566 [luckfox-core3566] [FP:R] [3D:A] [CAD:+] [BB:-]
│           └── Luckfox Core3576 [luckfox-core3576] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Connectors (43)
│   ├── AMASS (9)
│   │   └── sp-xt (9)
│   │       ├── AMASS XT30U-F Female [amass-xt30u-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT30U-M Male [amass-xt30u-m] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT60H-F Female [amass-xt60h-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT60H-M Male [amass-xt60h-m] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT60PB-F Female [amass-xt60pb-f] [FP:C] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT60PB-M Male [amass-xt60pb-m] [FP:C] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT90H-F Female [amass-xt90h-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AMASS XT90H-M Male [amass-xt90h-m] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── AMASS XT90S-F Female [amass-xt90s-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Unspecified (4)
│   │   └── core-basics (4)
│   │       ├── 2-pin Screw Terminal [terminal-2] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── 3-pin Screw Terminal [terminal-3] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── 4-pin Header [pin-header-4] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── JST PH 2-pin [jst-ph-2] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── WEIPU (30)
│       └── sp-xt (30)
│           ├── WEIPU SP1310/P2 Cable Plug [weipu-sp1310-p2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1310/P3 Cable Plug [weipu-sp1310-p3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1310/P4 Cable Plug [weipu-sp1310-p4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1310/P5 Cable Plug [weipu-sp1310-p5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1310/P7 Cable Plug [weipu-sp1310-p7] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1312/S2 Panel Socket [weipu-sp1312-s2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1312/S3 Panel Socket [weipu-sp1312-s3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1312/S4 Panel Socket [weipu-sp1312-s4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1312/S5 Panel Socket [weipu-sp1312-s5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1312/S7 Panel Socket [weipu-sp1312-s7] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1710/P2 Cable Plug [weipu-sp1710-p2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1710/P3 Cable Plug [weipu-sp1710-p3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1710/P4 Cable Plug [weipu-sp1710-p4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1710/P5 Cable Plug [weipu-sp1710-p5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1710/P7 Cable Plug [weipu-sp1710-p7] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1712/S2 Panel Socket [weipu-sp1712-s2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1712/S3 Panel Socket [weipu-sp1712-s3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1712/S4 Panel Socket [weipu-sp1712-s4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1712/S5 Panel Socket [weipu-sp1712-s5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP1712/S7 Panel Socket [weipu-sp1712-s7] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2110/P2 Cable Plug [weipu-sp2110-p2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2110/P3 Cable Plug [weipu-sp2110-p3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2110/P4 Cable Plug [weipu-sp2110-p4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2110/P5 Cable Plug [weipu-sp2110-p5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2110/P7 Cable Plug [weipu-sp2110-p7] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2112/S2 Panel Socket [weipu-sp2112-s2] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2112/S3 Panel Socket [weipu-sp2112-s3] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2112/S4 Panel Socket [weipu-sp2112-s4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── WEIPU SP2112/S5 Panel Socket [weipu-sp2112-s5] [FP:R] [3D:A] [CAD:+] [BB:-]
│           └── WEIPU SP2112/S7 Panel Socket [weipu-sp2112-s7] [FP:R] [3D:A] [CAD:+] [BB:-]
├── DAC (12)
│   ├── Adafruit (3)
│   │   ├── analog-devices (1)
│   │   │   └── Adafruit AD5693R 16-bit DAC Breakout [adafruit-ad5693r-5811] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   └── analog-prototyping (2)
│   │       ├── Adafruit MCP4725 12-bit DAC Breakout [adafruit-mcp4725-935] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │       └── Adafruit MCP4728 Quad 12-bit DAC Breakout [adafruit-mcp4728-4470] [FP:C] [3D:A] [CAD:+] [BB:+]
│   └── DFRobot (9)
│       ├── modules-dfrobot-converters (8)
│       │   ├── Gravity: 2-Channel I2C DAC Module (0-10V) [dfrobot-gravity-gp8403-dfr0971] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8101S 1-Channel PWM to 0-5V/10V DAC Module [dfrobot-gravity-gp8101s-dfr1036] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8211 I2C 15-bit DAC Module (0-5V/10V) [dfrobot-gravity-gp8211s-dfr1071] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8501 2-Channel PWM to 0-2.5V/VCC DAC Module [dfrobot-gravity-gp8501-dfr1037] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8512 1-Channel 15-Bit I2C DAC Module (0-2.5V/VCC) [dfrobot-gravity-gp8512-dfr1035] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8600 1-Channel I2C & PWM to 0-5V / 0-10V / 4-20mA DAC Module (16-bit) [dfrobot-gravity-gp8600-dfr1229] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Gravity: GP8630N I2C/PWM to ±10V / 4-20mA DAC Module (16-bit) [dfrobot-gravity-gp8630n-dfr1230] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   └── Gravity: I2C 4-20mA DAC Module (Arduino Compatible) [dfrobot-gravity-gp8302-dfr0972] [FP:R] [3D:A] [CAD:+] [BB:-]
│       └── modules-dfrobot-peripherals (1)
│           └── DFRobot Gravity: I2C 12-Bit DAC Module [dfrobot-mcp4725-dfr0552] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Displays (5)
│   └── Seeed Studio (5)
│       └── modules-seeed-extended-display-audio (5)
│           ├── Seeed Grove - 0.54 inch Red Dual Alphanumeric Display [seeed-module-104020132] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 0.54 inch Red Quad Alphanumeric Display [seeed-module-104020133] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - OLED Display 0.66" (SSD1306) [seeed-module-104020248] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - OLED Display 0.96" (SSD1315) [seeed-module-104020208] [FP:R] [3D:A] [CAD:+] [BB:-]
│           └── Seeed Grove - Triple Color E-Ink Display 2.13" [seeed-module-104020130] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Expansion boards (1)
│   └── Waveshare (1)
│       └── waveshare-more (1)
│           └── Waveshare Pico-Relay-B [waveshare-pico-relay-b] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Filters (4)
│   ├── Generic (2)
│   │   └── power (2)
│   │       ├── CLC Pi Low-Pass Filter [pi-lc-filter] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── LC Low-Pass Filter [lc-filter] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── TDK (1)
│   │   └── power (1)
│   │       └── TDK MEM2012F75R0T001 Pi Filter [tdk-mem2012f75r0t001] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── Unspecified (1)
│       └── core-basics (1)
│           └── Ferrite Bead [ferrite-bead] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Flight Controllers (3)
│   ├── MATEKSYS (1)
│   │   └── flight-controllers (1)
│   │       └── Matek F405-WING-V2 [matek-f405-wing-v2] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── SpeedyBee (2)
│       └── flight-controllers (2)
│           ├── SpeedyBee F405 WING APP [speedybee-f405-wing-app] [FP:R] [3D:A] [CAD:-] [BB:-]
│           └── SpeedyBee F405 WING MINI [speedybee-f405-wing-mini] [FP:R] [3D:A] [CAD:-] [BB:-]
├── FPGA boards (55)
│   ├── Brisbane Silicon (2)
│   │   └── gowin-third-party (2)
│   │       ├── Brisbane Silicon BRS-100-GW1NR9 [brisbane-silicon-brs-100-gw1nr9] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Brisbane Silicon EPM11 [brisbane-silicon-epm11] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Gowin Semiconductor (32)
│   │   ├── gowin-display-usb (6)
│   │   │   ├── Gowin DK_DP_GW5AT-LV60UG225_V1.0 [gowin-dk-dp-gw5at-lv60ug225-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_EDP_GW5ART-LV15MG132P_V1.0 [gowin-dk-edp-gw5art-lv15mg132p-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_EDP_GW5AT-LV15MG132_V1.0 [gowin-dk-edp-gw5at-lv15mg132-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW5AR-LV25UG256PC2I1_V1.0 [gowin-dk-start-gw5ar-lv25ug256pc2i1-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_USB_GW5AT-LV60UG225_V1.0 [gowin-dk-usb-gw5at-lv60ug225-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Gowin DK_USB_GW5AT-LV60UG225_V1.1 [gowin-dk-usb-gw5at-lv60ug225-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── gowin-gw1-gw2 (12)
│   │   │   ├── Gowin DK_Motor_GW2A-LV55PG484C8I7_V3.0 [gowin-dk-motor-gw2a-lv55pg484c8i7-v3-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1N-LV4LQ144C6I5_V1.1 [gowin-dk-start-gw1n-lv4lq144c6i5-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1N-LV9EQ144C6I5_V2.1 [gowin-dk-start-gw1n-lv9eq144c6i5-v2-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1NR-LV9LQ144PC6I5_V3.1 [gowin-dk-start-gw1nr-lv9lq144pc6i5-v3-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1NS-LV4CQN48C7I6_V1.1 [gowin-dk-start-gw1ns-lv4cqn48c7i6-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1NSR-LV4CQN48GC7I6_V1.1 [gowin-dk-start-gw1nsr-lv4cqn48gc7i6-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1NSR-LV4CQN48PC7I6_V1.1 [gowin-dk-start-gw1nsr-lv4cqn48pc7i6-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW1NZ-LV1FN32C6I5_V3.1 [gowin-dk-start-gw1nz-lv1fn32c6i5-v3-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW2A-LV18PG256C8I7_V2.0 [gowin-dk-start-gw2a-lv18pg256c8i7-v2-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW2A-LV55PG484C8I7_V1.3 [gowin-dk-start-gw2a-lv55pg484c8i7-v1-3] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Gowin DK_START_GW2AN-UV9XUG400C7I6_V1.0 [gowin-dk-start-gw2an-uv9xug400c7i6-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Gowin DK_START_GW2AR-LV18EQ144PC8I7_V1.1 [gowin-dk-start-gw2ar-lv18eq144pc8i7-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── gowin-modern (8)
│   │   │   ├── GOWIN DK_LED-RxCard_GW3A-LV20UG324S_V2.1 [gowin-dk-led-rxcard-gw3a-lv20ug324s-v2-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_PCIE_GW5ART-LV15MG132P_V1.1 [gowin-dk-pcie-gw5art-lv15mg132p-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_PCIE_GW5AT-LV60UG324_V1.1 [gowin-dk-pcie-gw5at-lv60ug324-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_START_GW5A-LV25LQ144_V1.0 [gowin-dk-start-gw5a-lv25lq144-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_START_GW5AT-LV60PG484A_V1.1 [gowin-dk-start-gw5at-lv60pg484a-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_START_GW5AT-LV60PG484A_V1.2 [gowin-dk-start-gw5at-lv60pg484a-v1-2] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── GOWIN DK_USB_GW5ART-LV15MG132P_V1.1 [gowin-dk-usb-gw5art-lv15mg132p-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── GOWIN DK_VIDEO_GW5AT-LV60UG225_V1.0 [gowin-dk-video-gw5at-lv60ug225-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── gowin-special (6)
│   │       ├── Gowin DK_START_GW5A-LV25UG324_V2.0 [gowin-dk-start-gw5a-lv25ug324-v2-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Gowin DK_START_GW5AST-LV138FPG676A_V1.0 [gowin-dk-start-gw5ast-lv138fpg676a-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Gowin DK_START_GW5AST-LV138FPG676A_V2.1 [gowin-dk-start-gw5ast-lv138fpg676a-v2-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Gowin DK_UAC2_GW1N-LV9LQ144C7I6_V2.1 [gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Gowin DK_USB2.0_GW2AR-LV18QN88PC8I7_GW1NSR-LV4CMG64PC7I6_V3.0 [gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Gowin DK_VIDEO_GW2A-LV18PG484C8I7_V1.2 [gowin-dk-video-gw2a-lv18pg484c8i7-v1-2] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── OneKiwi (1)
│   │   └── gowin-third-party (1)
│   │       └── OneKiwi KIWI 1P5 (QN48X) [onekiwi-kiwi-1p5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── Sipeed (19)
│   │   └── sipeed-fpga (19)
│   │       ├── Sipeed Tang Console 138K [sipeed-tang-console-138k] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Console 60K [sipeed-tang-console-60k] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 138K + NEO Dock [sipeed-tang-mega-138k-neo] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 138K Pro + Dock [sipeed-tang-mega-138k-pro-dock] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 138K Pro SOM [sipeed-tang-mega-138k-pro-som] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 138K SOM [sipeed-tang-mega-138k-som] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 60K + NEO Dock [sipeed-tang-mega-60k-neo] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Mega 60K SOM [sipeed-tang-mega-60k-som] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Nano (original) [sipeed-tang-nano] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Sipeed Tang Nano 1K [sipeed-tang-nano-1k] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Nano 20K [sipeed-tang-nano-20k] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Nano 4K [sipeed-tang-nano-4k] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Sipeed Tang Nano 9K [sipeed-tang-nano-9k] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Primer 20K + Dock [sipeed-tang-primer-20k-dock] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Primer 20K + Lite Dock [sipeed-tang-primer-20k-lite] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Primer 20K SOM [sipeed-tang-primer-20k-som] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Primer 25K + Dock [sipeed-tang-primer-25k-dock] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Tang Primer 25K SOM [sipeed-tang-primer-25k-som] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Sipeed Tang Primer EG4S20 (original) [sipeed-tang-primer-eg4s20] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── Trenz Electronic (1)
│       └── gowin-third-party (1)
│           └── Trenz Electronic TEC0117-01 [trenz-tec0117-01] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Indicators (68)
│   ├── Adafruit (43)
│   │   ├── modules-adafruit-additional-indicators-inputs (22)
│   │   │   ├── 2.0" 320x240 Color IPS TFT Display with microSD Card Breakout [adafruit-module-4311] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit 1.3" 240x240 Wide Angle TFT LCD Display with MicroSD [adafruit-module-4313] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit 1.3" Color TFT Bonnet for Raspberry Pi [adafruit-module-4506] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit 1.44" Color TFT LCD Display with MicroSD Card breakout [adafruit-module-2088] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit 1.54" 240x240 Wide Angle TFT LCD Display with MicroSD [adafruit-module-3787] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit 128x64 OLED Bonnet for Raspberry Pi [adafruit-module-3531] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit 16x9 Charlieplexed PWM LED Matrix Driver - IS31FL3731 [adafruit-module-2946] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit 2.23" Monochrome OLED Bonnet for Raspberry Pi [adafruit-module-4567] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit 4-Digit 7-Segment LED Matrix Display FeatherWing [adafruit-module-3088] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit CharliePlex LED Matrix Bonnet - 8x16 Blue LEDs [adafruit-module-3467] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit DVI Sock for Pico - Works with HDMI Displays [adafruit-module-5957] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit FeatherWing OLED - 128x32 OLED Add-on For Feather [adafruit-module-2900] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Matrix Portal S3 CircuitPython Powered Internet Display [adafruit-module-5778] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit NeoPixel NeoMatrix 8x8 - 64 RGB LED Pixel Matrix [adafruit-module-1487] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit NeoPXL8 FeatherWing for Feather M0 - 8 x DMA NeoPixels! [adafruit-module-3249] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit PiCowbell DVI Output for Pico - Works with HDMI Display [adafruit-module-5745] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Monochrome 0.96" 128x64 OLED Graphic Display - STEMMA QT [adafruit-module-326] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Monochrome 1.3" 128x64 OLED graphic display - STEMMA QT / Qwiic [adafruit-module-938] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── NeoPixel FeatherWing - 4x8 RGB LED Add-on For All Feather Boards [adafruit-module-2945] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── NeoPixel Ring - 16 x 5050 RGB LED with Integrated Drivers [adafruit-module-1463] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── NeoPixel Stick - 8 x 5050 RGB LED with Integrated Drivers [adafruit-module-1426] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── OLED Breakout Board - 16-bit Color 0.96" w/microSD holder [adafruit-module-684] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── modules-adafruit-indicators-inputs (21)
│   │       ├── Adafruit 0.96" 160x80 Color TFT Display w/ MicroSD Card Breakout [adafruit-module-3533] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 1.14" 240x135 Color Newxie TFT Display [adafruit-module-6113] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit 1.14" 240x135 Color TFT Display + MicroSD Card Breakout [adafruit-module-4383] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 1.28" 240x240 Round TFT LCD Display with MicroSD [adafruit-module-6178] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 1.47" 320x172 Round Rectangle Color IPS TFT Display [adafruit-module-5393] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 1.69" 280x240 Round Rectangle Color IPS TFT Display [adafruit-module-5206] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 1.9" 320x170 Color IPS TFT Display [adafruit-module-5394] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 15x7 CharliePlex LED Matrix Display FeatherWing - Red [adafruit-module-3134] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit 5x5 NeoPixel Grid BFF Add-On for QT Py and Xiao [adafruit-module-5646] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit AW9523 GPIO Expander and LED Driver Breakout [adafruit-module-4886] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DS1307 Real Time Clock Assembled Breakout Board [adafruit-module-3296] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit IS31FL3741 13x9 PWM RGB LED Matrix Driver [adafruit-module-5201] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Monochrome 1.12" 128x128 OLED Graphic Display [adafruit-module-5297] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit NeoDriver - I2C to NeoPixel Driver Board - Stemma QT [adafruit-module-5766] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit NeoPixel Driver BFF Add-On for QT Py and Xiao [adafruit-module-5645] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit NeoTrellis RGB Driver PCB for 4x4 Keypad [adafruit-module-3954] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit PiOLED - 128x32 Monochrome OLED Add-on for Raspberry Pi [adafruit-module-3527] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit TRRS Jack Breakout Board [adafruit-module-5764] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Breadboard-friendly RGB Smart NeoPixel - Pack of 5 [adafruit-module-1312] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Monochrome 128x32 SPI OLED graphic display [adafruit-module-661] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── OLED Breakout Board - 16-bit Color 1.27" w/microSD holder [adafruit-module-1673] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── DFRobot (4)
│   │   └── common-peripherals (4)
│   │       ├── DFRobot 0.91-inch SSD1306 OLED [dfrobot-oled-dfr0647] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── DFRobot 0.96-inch ST7735 TFT [dfrobot-st7735-dfr0847] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── DFRobot Gravity I²C LCD1602 [dfrobot-lcd1602-dfr0557] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── DFRobot WS2812 8×8 RGB LED Matrix [dfrobot-ws2812-dfr0459] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Generic module (1)
│   │   └── core-modules (1)
│   │       └── SSD1306 OLED Display [ssd1306] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── HALJIA (1)
│   │   └── diy-kit-outputs (1)
│   │       └── HALJIA MAX7219 8×8 LED Matrix [haljia-max7219-8x8-dip] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Keyestudio (4)
│   │   └── diy-kit-outputs (4)
│   │       ├── Keyestudio KS0018 Active Buzzer [keyestudio-ks0018-active-buzzer] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0019 Passive Buzzer [keyestudio-ks0019-passive-buzzer] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0032 RGB LED Module [keyestudio-ks0032-rgb-led] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Keyestudio KS0310 Traffic Light [keyestudio-ks0310-traffic-light] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Seeed Studio (1)
│   │   └── common-peripherals (1)
│   │       └── Seeed Grove TM1637 4-Digit Display [seeed-grove-tm1637] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── SparkFun Electronics (10)
│   │   ├── modules-sparkfun-additional-indicators-inputs (1)
│   │   │   └── SparkFun ESP32 Thing Plus DMX to LED Shield [sparkfun-module-dev15110] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-sparkfun-indicators-inputs (9)
│   │       ├── SparkFun LED Driver Breakout - LP55231 [sparkfun-module-bob13884] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun LED Driver Breakout - TLC5940 (16 Channel) [sparkfun-module-bob10616] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Micro OLED Breakout (Qwiic) [sparkfun-module-lcd22495] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Micro OLED Breakout [sparkfun-module-lcd13003] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic Alphanumeric Display - Red [sparkfun-module-com16916] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic OLED - (1.3in., 128x64) [sparkfun-module-lcd23453] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic OLED Display (0.91 in., 128x32) [sparkfun-module-lcd24606] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun RGB LED Breakout - WS2812B [sparkfun-module-bob13282] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── SparkFun TRRS 3.5mm Jack Breakout [sparkfun-module-bob11570] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Unspecified (1)
│   │   └── core-basics (1)
│   │       └── Red LED [led] [FP:R] [3D:A] [CAD:-] [BB:+]
│   └── Waveshare (3)
│       ├── common-peripherals (1)
│       │   └── Waveshare 1.3-inch SH1106 OLED (B) [waveshare-sh1106-oled-b] [FP:R] [3D:A] [CAD:-] [BB:-]
│       ├── waveshare-expansion (1)
│       │   └── Waveshare 1.54-inch e-Paper Module (E) [waveshare-1in54-epaper-e] [FP:R] [3D:A] [CAD:-] [BB:-]
│       └── waveshare-ready (1)
│           └── Waveshare 1.3-inch LCD Module [waveshare-1in3-lcd-module] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Inputs (38)
│   ├── Adafruit (25)
│   │   ├── modules-adafruit-additional-indicators-inputs (8)
│   │   │   ├── 3.5" TFT 320x480 + Touchscreen Breakout Board w/MicroSD Socket [adafruit-module-2050] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit 12 x Capacitive Touch Shield for Arduino - MPR121 [adafruit-module-2024] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Capacitive Touch HAT for Raspberry Pi - Mini Kit [adafruit-module-2340] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit EYESPI Pi Beret - Buttons, EYESPI and STEMMA QT [adafruit-module-5783] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit PiTFT 2.2" HAT Mini Kit - 320x240 2.2" TFT - No Touch [adafruit-module-2315] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TFT 50pin to 40pin + AR1100 Touchscreen Adapter [adafruit-module-3305] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit TFT FeatherWing - 3.5" 480x320 Touchscreen for Feathers [adafruit-module-3651] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── TFT FeatherWing - 2.4" 320x240 Touchscreen For All Feathers [adafruit-module-3315] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-adafruit-indicators-inputs (17)
│   │       ├── 3.2" TFT LCD with Touchscreen Breakout Board w/MicroSD Socket [adafruit-module-1743] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit 2.4" TFT LCD with Touchscreen Breakout w/MicroSD Socket [adafruit-module-2478] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit ANO Rotary Navigation Encoder Breakout PCB [adafruit-module-5221] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit ANO Rotary Navigation Encoder to I2C Stemma QT Adapter [adafruit-module-5740] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit I2C Quad Rotary Encoder Breakout with NeoPixel [adafruit-module-5752] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit IoT Button with NeoPixel BFF Add-On for QT Py and Xiao [adafruit-module-5666] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit LED Arcade Button 1x4 - STEMMA QT I2C Breakout [adafruit-module-5296] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit NeoKey BFF for Mechanical Key Add-On for QT Py and Xiao [adafruit-module-5695] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit NeoSlider I2C QT Slide Potentiometer with 4 NeoPixels [adafruit-module-5295] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PC Joystick to seesaw I2C Adapter - STEMMA QT / Qwiic [adafruit-module-5753] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TSC2007 I2C Resistive Touch Screen Controller [adafruit-module-5423] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TSC2046 SPI Resistive Touch Screen Controller [adafruit-module-5767] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Wii Nunchuck Breakout Adapter [adafruit-module-4836] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Analog Mini Thumbstick Breakout Board [adafruit-module-3246] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── NeoKey Socket Breakout for Mechanical Key Switches with NeoPixel [adafruit-module-4978] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── RA8875 Driver Board for 40-pin TFT Touch Displays - 800x480 Max [adafruit-module-1590] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Resistive Touch Screen to USB Mouse Controller - AR1100 [adafruit-module-1580] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Arduino (2)
│   │   └── arduino-more-boards (2)
│   │       ├── Arduino Modulino Buttons [arduino-modulino-buttons-abx00110] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │       └── Arduino Modulino Knob [arduino-modulino-knob-abx00107] [FP:C] [3D:A] [CAD:+] [BB:-]
│   ├── DFRobot (2)
│   │   ├── modules-dfrobot-buttons (1)
│   │   │   └── Gravity: I2C RGB LED Colorful Button Module [dfrobot-gravity-rgb-button-dfr0991] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── modules-dfrobot-peripherals (1)
│   │       └── DFRobot Fermion: EC11 Rotary Encoder Module (Breakout) [dfrobot-ec11-sen0235] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Keyestudio (3)
│   │   └── diy-kit-inputs (3)
│   │       ├── Keyestudio KS0008 Thumb Joystick Module [keyestudio-ks0008-joystick] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0013 Rotary Encoder Module [keyestudio-ks0013-encoder] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Keyestudio KS0014 Rotary Potentiometer Module [keyestudio-ks0014-rotation] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Seeed Studio (1)
│   │   └── diy-kit-inputs (1)
│   │       └── Seeed Grove Slide Potentiometer [seeed-grove-slide-101020036] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── SparkFun Electronics (5)
│       └── modules-sparkfun-indicators-inputs (5)
│           ├── SparkFun Capacitive Touch Breakout - AT42QT1010 [sparkfun-module-sen12041] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── SparkFun Qwiic Button Breakout [sparkfun-module-bob15931] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── SparkFun Qwiic Keypad - 12 Button [sparkfun-module-com15290] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── SparkFun Qwiic Twist - RGB Rotary Encoder Breakout [sparkfun-module-dev15083] [FP:R] [3D:A] [CAD:-] [BB:+]
│           └── SparkFun Rotary Encoder Breakout - Illuminated (RG/RGB) [sparkfun-module-bob11722] [FP:R] [3D:A] [CAD:-] [BB:+]
├── Interfaces (162)
│   ├── Adafruit (94)
│   │   ├── adafruit-ready (3)
│   │   │   ├── Adafruit DS2484 I²C to 1-Wire Adapter [adafruit-ds2484-5976] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit PCM5102 I²S Stereo Line DAC [adafruit-pcm5102-6250] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit TCA4307 Hot-Swap I²C Buffer [adafruit-tca4307-5159] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── analog-devices (1)
│   │   │   └── Adafruit ADG728 1-to-8 Analog Matrix Switch [adafruit-adg728-5899] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── analog-prototyping (2)
│   │   │   ├── Adafruit AD8495 Analog K-type Thermocouple Amplifier [adafruit-ad8495-1778] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit DS3502 Digital 10 kΩ Potentiometer [adafruit-ds3502-4286] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── audio-prototyping (1)
│   │   │   └── Adafruit PAM8302 Mono 2.5 W Audio Amplifier [adafruit-pam8302-2130] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── common-interfaces (3)
│   │   │   ├── Adafruit FT232H USB-C Interface Breakout [adafruit-ft232h-usbc-2264] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MCP23017 I²C GPIO Expander [adafruit-mcp23017-5346] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit TCA9548A I²C Multiplexer [adafruit-tca9548a-2717] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── common-peripherals (3)
│   │   │   ├── Adafruit DS3231 Precision RTC [adafruit-ds3231-rtc] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MAX98357A I²S Mono Amplifier [adafruit-max98357a-i2s] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Adafruit SPI microSD Breakout #254 [adafruit-microsd-spi-254] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── input-prototyping (3)
│   │   │   ├── Adafruit I²C QT Rotary Encoder Breakout [adafruit-qt-rotary-4991] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Adafruit MPR121 12-Key Capacitive Touch Breakout [adafruit-mpr121-1982] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit TCA8418 8×10 Keypad Matrix Breakout [adafruit-tca8418-4918] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-adafruit-additional-interfaces (20)
│   │   │   ├── Adafruit 2.13" Monochrome E-Ink Bonnet for Raspberry Pi [adafruit-module-4687] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Arcade Bonnet for Raspberry Pi with JST Connectors [adafruit-module-3422] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Bluefruit LE Shield - Bluetooth® LE for Arduino [adafruit-module-2746] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Bluefruit LE USB Friend (nRF51822) [adafruit-module-2267] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Floppy FeatherWing with 34-Pin IDC Connector [adafruit-module-5679] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit FPC Breakout for Raspberry Pi 5 DSI or RP2350 HSTX [adafruit-module-6014] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Grove and Stemma QT FeatherWing for all Feathers [adafruit-module-5862] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit HalloWing M4 Express - Goth Adafruit Black Edition [adafruit-module-4300] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit ISM330DHCX + LIS3MDL FeatherWing [adafruit-module-4569] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Joy FeatherWing for all Feathers [adafruit-module-3632] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit PiCowbell Camera Breakout - Autofocus 72 Degree Lens [adafruit-module-5945] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit PiCowbell CAN Bus for Pico - MCP2515 CAN Controller [adafruit-module-5728] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Reversible USB Type A Plug Connector Breakout [adafruit-module-6001] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit RGB Matrix Shield for Arduino [adafruit-module-2601] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit USB Host FeatherWing with MAX3421E [adafruit-module-5858] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit USB Type C CC Resistor Fixer [adafruit-module-6323] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit USB Type C Vertical Breakout - Downstream Connection [adafruit-module-5993] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit WINC1500 WiFi Shield with uFL Connector [adafruit-module-3654] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── i2c / SPI character LCD backpack - STEMMA QT / Qwiic [adafruit-module-292] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── MEMENTO - Python Programmable DIY Camera - Bare Board [adafruit-module-5420] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── modules-adafruit-interfaces (58)
│   │       ├── Adafruit 24LC32 I2C EEPROM Breakout - 32Kbit / 4 KB - Stemma QT [adafruit-module-5146] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 6-pin AVR ISP Breadboard Adapter Mini Kit [adafruit-module-1465] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit 9-DOF Accel/Mag/Gyro+Temp Breakout Board - LSM9DS1 [adafruit-module-3387] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit ADG729 Dual 1-to-4 Analog Matrix Switch [adafruit-module-5932] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit AMG8833 IR Thermal Camera Breakout [adafruit-module-3538] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit ATECC608 Breakout Board - STEMMA QT / Qwiic [adafruit-module-4314] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit BNO055 + BMP280 BFF Add-On for QT Py [adafruit-module-5937] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit CAN Bus BFF Add-On for QT Py [adafruit-module-5877] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit CAN Pal - CAN Bus Transceiver [adafruit-module-5708] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit CH9328 UART to HID Keyboard Breakout [adafruit-module-5973] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DS1841 I2C Digital 10K Potentiometer Breakout [adafruit-module-4570] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DS2482S-800 8 Channel I2C to 1-Wire Bus Adapter [adafruit-module-6027] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit EYESPI BFF for QT Py or Xiao - 18 Pin FPC Connector [adafruit-module-5772] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit EYESPI Breakout Board - 18 Pin FPC Connector [adafruit-module-5613] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit I2C Non-Volatile FRAM Breakout - 256Kbit / 32KByte [adafruit-module-1895] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Infineon Trust M Breakout Board - STEMMA QT / Qwiic [adafruit-module-4351] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Infrared IR Remote Receiver - STEMMA JST PH 2mm [adafruit-module-5939] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Joy Bonnet for Raspberry Pi [adafruit-module-3464] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit KB2040 - RP2040 Kee Boar Driver [adafruit-module-5302] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit LM66200 Ideal Dual Diodes Breakout [adafruit-module-5830] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit LTC4311 I2C Extender / Active Terminator [adafruit-module-4756] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit LTC4316 I2C Address Translator [adafruit-module-5914] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Micro SD SPI or SDIO Card Breakout Board - 3V ONLY! [adafruit-module-4682] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit microSD Card BFF Add-On for QT Py and Xiao [adafruit-module-5683] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Mini I2C Gamepad with seesaw - STEMMA QT / Qwiic [adafruit-module-5743] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCA9546 4-Channel I2C Multiplexer [adafruit-module-5663] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCA9548 8-Channel STEMMA QT / Qwiic I2C Multiplexer [adafruit-module-5626] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCF8523 Real Time Clock Breakout Board [adafruit-module-5189] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCF8574 I2C GPIO Expander Breakout [adafruit-module-5545] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PCF8575 I2C 16 GPIO Expander Breakout [adafruit-module-5611] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Pi Stemma QT Breakout for Raspberry Pi and Compatibles [adafruit-module-6365] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit PiCowbell Adalogger for Pico - MicroSD, RTC & STEMMA QT [adafruit-module-5703] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit PiRTC - PCF8523 Real Time Clock for Raspberry Pi [adafruit-module-3386] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit PiRTC - Precise DS3231 Real Time Clock for Raspberry Pi [adafruit-module-4282] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Pixel Shifter - For Addressable LEDs [adafruit-module-6066] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit QT 5V to 3V Level Shifter Breakout - STEMMA QT / Qwiic [adafruit-module-5637] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Qwiic / Stemma QT 5 Port Hub [adafruit-module-5625] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit RS-232 Full Pinout Level-Shifter Breakout [adafruit-module-5988] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit RS232 Pal - Two Channel UART to RS-232 Level Shifters [adafruit-module-5987] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit RV-8803 High Accuracy Real Time Clock Breakout Board [adafruit-module-6538] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit SEN54 or SEN55 Adapter Breakout - STEMMA QT / Qwiic [adafruit-module-5964] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit SEN6x Breakout for Sensirion SEN66 - STEMMA QT / Qwiic [adafruit-module-6331] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Si5351A Clock Generator Breakout Board - 8KHz to 160MHz [adafruit-module-2045] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Si5351A Clock Generator with STEMMA QT - 8KHz to 160MHz [adafruit-module-5640] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Si5351C 8 Channel TCXO Clock Generator - 2.5KHz-200MHz [adafruit-module-6534] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit SPI FLASH Breakout - W25Q16 - 16 Mbit / 2 MByte [adafruit-module-5635] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit STEMMA Analog SPDT Switch - MAX4544 12V - JST PH 2mm [adafruit-module-5892] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit STEMMA Piezo Driver Amp - PAM8904 [adafruit-module-5791] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Sunken USB Type C Breakout Board [adafruit-module-6050] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Terminal Block BFF Add-On for QT Py and Xiao [adafruit-module-6495] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Adafruit TSMP96000 "Code Learning" Infrared IR Receiver Breakout [adafruit-module-5970] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TSSP77038 38KHz Infrared IR Demodulator Breakout [adafruit-module-5940] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit UPDI Friend - USB Serial UPDI Programmer [adafruit-module-5879] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit USB Host BFF for QT Py or Xiao with MAX3421E [adafruit-module-5956] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit USB Type C Breakout Board - Downstream Connection [adafruit-module-4090] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit USB Type C Plug Breakout [adafruit-module-5978] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── DS2413 1-Wire Two GPIO Controller Breakout [adafruit-module-1551] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── TXB0104 Bi-Directional Level Shifter [adafruit-module-1875] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── DFRobot (5)
│   │   ├── common-peripherals (1)
│   │   │   └── DFRobot DFPlayer Mini MP3 Module [dfrobot-dfplayer-mini-dfr0299] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-dfrobot-peripherals (4)
│   │       ├── DFRobot Fermion: LTC4316 I2C Address Shifter Module [dfrobot-ltc4316-dfr1185] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Fermion: TXS0108E 8-Bit Level Translator (Breakout) [dfrobot-txs0108e-dfr0844] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── DFRobot Gravity: Active Isolated RS485 to UART Signal Adapter Module [dfrobot-isolated-rs485-uart-dfr0845] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── DFRobot Gravity: Digital I2C Signal Isolator [dfrobot-adum1250-isolator-dfr0565] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Generic breakout (2)
│   │   └── core-modules (2)
│   │       ├── MAX3485 RS-485 Breakout [max3485] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── RS-485 to UART (HW-0519) [hw0519] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Joy-IT (1)
│   │   └── common-interfaces (1)
│   │       └── Joy-IT MCP2515 CAN Bus Module (SBC-CAN01) [joyit-sbc-can01-mcp2515] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Keyestudio (1)
│   │   └── common-peripherals (1)
│   │       └── Keyestudio RC522 RFID Module [keyestudio-rc522-ks0067] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Pololu (1)
│   │   └── usb-uart (1)
│   │       └── Pololu CP2102N USB-to-Serial Adapter [pololu-cp2102n-usb-uart] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── SparkFun Electronics (47)
│   │   ├── common-interfaces (2)
│   │   │   ├── SparkFun BSS138 Bi-Directional Logic Level Converter [sparkfun-bss138-level-shifter] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── SparkFun CH340C Serial Basic USB-C [sparkfun-ch340c-serial-basic] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── common-peripherals (1)
│   │   │   └── SparkFun OpenLog Serial Logger [sparkfun-openlog-13712] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── modules-sparkfun-additional-interfaces (14)
│   │   │   ├── SparkFun FT231X Breakout [sparkfun-module-bob13263] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun MicroMod Update Tool [sparkfun-module-dev17725] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun microSD Shield [sparkfun-module-dev12761] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun MicroView - USB Programmer [sparkfun-module-dev12924] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Pi Wedge [sparkfun-module-bob13717] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Qwiic dToF Imager - TMF8820 [sparkfun-module-sen19036] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Qwiic micro:bit Breakout [sparkfun-module-bob16445] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Qwiic SHIM for Raspberry Pi & NVIDIA Jetson Orin Nano [sparkfun-module-dev15794] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun RS232 Shifter - SMD [sparkfun-module-prt00449] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun weather:bit - micro:bit Carrier Board (Qwiic) [sparkfun-module-dev15837] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun WiFi Shield - ESP8266 [sparkfun-module-wrl13287] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun XBee Explorer Dongle [sparkfun-module-wrl11697] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun XBee Explorer Regulated [sparkfun-module-wrl11373] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── SparkFun XBee Explorer USB [sparkfun-module-wrl11812] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-sparkfun-interfaces (30)
│   │       ├── SparkFun 6 Degrees of Freedom Breakout - LSM6DSO (Qwiic) [sparkfun-module-sen18020] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Analog/Digital MUX Breakout - CD74HC4067 [sparkfun-module-bob09056] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Beefy 3 - FTDI Basic Breakout [sparkfun-module-dev13746] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Cryptographic Co-Processor Breakout - ATECC508A (Qwiic) [sparkfun-module-dev15573] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Cryptographic Co-Processor Breakout - ATECC608A (Qwiic) [sparkfun-module-dev18077] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun DeadOn RTC Breakout - DS3234 [sparkfun-module-bob10160] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Digi XBee® Explorer Regulated [sparkfun-module-wrl22032] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Environmental Combo Breakout - ENS160/BME280 (Qwiic) [sparkfun-module-sen22858] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun ESLOV to Qwiic Bridge [sparkfun-module-bob23589] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Large Digit Driver [sparkfun-module-wig13279] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Level Shifting microSD Breakout [sparkfun-module-dev13743] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun microSD Transflash Breakout [sparkfun-module-bob00544] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Multiplexer Breakout - 8 Channel (74HC4051) [sparkfun-module-bob13906] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun OBD-II UART [sparkfun-module-wig09555] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun OpAmp Breakout - LMV358 [sparkfun-module-bob09816] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Opto-isolator Breakout [sparkfun-module-bob09118] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Pro RF - LoRa, 915MHz (SAMD21) [sparkfun-module-wrl15836] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Pulsed Radar Breakout - A111 [sparkfun-module-sen16826] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic Adapter [sparkfun-module-dev14495] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic GPIO [sparkfun-module-dev17047] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic OpenLog [sparkfun-module-dev15164] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Real Time Clock Module - RV-8803 (Qwiic) [sparkfun-module-bob16281] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun SD/MMC Card Breakout [sparkfun-module-bob12941] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Serial Basic Breakout - CH340G [sparkfun-module-dev14050] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Shift Register Breakout - 74HC595 [sparkfun-module-bob10680] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun SIM Card Socket Breakout [sparkfun-module-bob00573] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Transceiver Breakout - MAX3232 [sparkfun-module-bob11189] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Transceiver Breakout - RS-485 [sparkfun-module-bob10124] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun USB-C Breakout - Vertical [sparkfun-module-bob23055] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── SparkFun Voltage-Level Translator Breakout - TXB0104 [sparkfun-module-bob11771] [FP:R] [3D:A] [CAD:-] [BB:+]
│   └── Waveshare (11)
│       ├── common-interfaces (1)
│       │   └── Waveshare CP2102 USB UART Board (mini) [waveshare-cp2102-usb-uart-mini] [FP:R] [3D:A] [CAD:-] [BB:+]
│       ├── common-peripherals (1)
│       │   └── Waveshare UART GPS NEO-6M [waveshare-uart-gps-neo-6m] [FP:R] [3D:A] [CAD:-] [BB:-]
│       ├── waveshare (2)
│       │   ├── Waveshare Bus Servo Adapter (A) [waveshare-bus-servo-adapter-a] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   └── Waveshare RS485 Board (3.3V) [waveshare-rs485-3v3] [FP:R] [3D:A] [CAD:-] [BB:-]
│       ├── waveshare-expansion (4)
│       │   ├── Waveshare PCF8574 IO Expansion Board [waveshare-pcf8574-io-expansion] [FP:R] [3D:A] [CAD:-] [BB:-]
│       │   ├── Waveshare RS485 CAN HAT [waveshare-rs485-can-hat] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   ├── Waveshare SN65HVD230 CAN Board [waveshare-sn65hvd230-can-board] [FP:R] [3D:A] [CAD:+] [BB:-]
│       │   └── Waveshare USB-TO-TTL-FT232 [waveshare-usb-to-ttl-ft232] [FP:R] [3D:A] [CAD:-] [BB:-]
│       └── waveshare-ready (3)
│           ├── Waveshare L76K GPS Module [waveshare-l76k-gps-module] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Waveshare PCF8563 RTC Board [waveshare-pcf8563-rtc-board] [FP:R] [3D:A] [CAD:-] [BB:-]
│           └── Waveshare RS232 Board [waveshare-rs232-board] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Microcontrollers (172)
│   ├── Adafruit (40)
│   │   ├── adafruit-more (9)
│   │   │   ├── Adafruit ESP32 Feather V2 [adafruit-feather-esp32-v2-5400] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather ESP32-S2 [adafruit-feather-esp32s2-5000] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather M0 Basic Proto [adafruit-feather-m0-basic-2772] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather M4 Express [adafruit-feather-m4-3857] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather RP2350 with HSTX [adafruit-feather-rp2350-6000] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather STM32F405 Express [adafruit-feather-f405-4382] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit ItsyBitsy M0 Express [adafruit-itsy-m0-3727] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit ItsyBitsy M4 Express [adafruit-itsy-m4-3800] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit QT Py SAMD21 [adafruit-qtpy-samd21-4600] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── esp-rp (5)
│   │   │   ├── Adafruit Feather ESP32-S3 [adafruit-feather-esp32-s3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Feather RP2040 [adafruit-feather-rp2040] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Metro ESP32-S3 [adafruit-metro-esp32-s3] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit QT Py ESP32-S3 [adafruit-qt-py-esp32-s3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit QT Py RP2040 [adafruit-qt-py-rp2040] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-adafruit-additional-development (10)
│   │   │   ├── Adafruit CLUE - nRF52840 Express with Bluetooth® LE [adafruit-module-4500] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Feather 328P - Atmega328P 3.3V @ 8 MHz [adafruit-module-3458] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Feather 32u4 Adalogger [adafruit-module-2795] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Feather 32u4 Basic Proto [adafruit-module-2771] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Feather 32u4 Bluefruit LE [adafruit-module-2829] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Feather M0 Bluefruit LE [adafruit-module-2995] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Feather M0 Express [adafruit-module-3403] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit HUZZAH32 – ESP32 Feather Board [adafruit-module-3405] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Metro RP2040 [adafruit-module-5786] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── Adafruit QT Py ESP32-S2 WiFi Dev Board with STEMMA QT [adafruit-module-5325] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── modules-adafruit-development (14)
│   │   │   ├── Adafruit Feather M4 CAN Express with ATSAME51 [adafruit-module-4759] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit HUZZAH ESP8266 Breakout [adafruit-module-2471] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit HUZZAH32 – ESP32 Breakout Board [adafruit-module-4172] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Neo Trinkey - SAMD21 USB Key with 4 NeoPixels [adafruit-module-4870] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit NeoKey Trinkey - USB NeoPixel Mechanical Key Switch [adafruit-module-5020] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Pixel Trinkey - USB Key for NeoPixel / DotStar Driving [adafruit-module-5953] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit QT Py CH32V203 Dev Board with STEMMA QT [adafruit-module-5996] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit QT Py ESP32 Pico - WiFi Dev Board with STEMMA QT [adafruit-module-5395] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Rotary Trinkey - USB NeoPixel Rotary Encoder [adafruit-module-4964] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit RP2040 CAN Bus Feather with MCP2515 CAN Controller [adafruit-module-5724] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit RP2040 Feather ThinkInk for 24-pin E-Paper Displays [adafruit-module-5727] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit Trinket - Mini Microcontroller - 3.3V Logic [adafruit-module-1500] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Trinkey QT2040 - RP2040 USB Key with Stemma QT [adafruit-module-5056] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── Adafruit TRRS Trinkey - USB Key for Assistive Technology [adafruit-module-5954] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── nordic-boards (1)
│   │   │   └── Adafruit Feather nRF52840 Express [adafruit-feather-nrf52840-express] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── nordic-more (1)
│   │       └── Adafruit ItsyBitsy nRF52840 Express [adafruit-itsybitsy-nrf52840-express-4481] [FP:C] [3D:A] [CAD:+] [BB:+]
│   ├── Arduino (22)
│   │   ├── arduino (12)
│   │   │   ├── Arduino Due [arduino-due] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Arduino Leonardo [arduino-leonardo] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Arduino Mega 2560 Rev3 [arduino-mega-2560] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Arduino Micro [arduino-micro] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Arduino Nano [arduino-nano] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Arduino Nano ESP32 [arduino-nano-esp32] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino Nano Every [arduino-nano-every] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Arduino Nano R4 [arduino-nano-r4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino Nano RP2040 Connect [arduino-nano-rp2040-connect] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Arduino UNO R3 [arduino-uno-rev3] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Arduino UNO R4 Minima [arduino-uno-r4-minima] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Arduino UNO R4 WiFi [arduino-uno-r4-wifi] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── arduino-more (5)
│   │   │   ├── Arduino MKR FOX 1200 [arduino-mkr-fox-1200] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino MKR GSM 1400 [arduino-mkr-gsm-1400] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino MKR NB 1500 [arduino-mkr-nb-1500] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino MKR WAN 1300 [arduino-mkr-wan-1300] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Arduino MKR WAN 1310 [arduino-mkr-wan-1310] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── arduino-ready (3)
│   │   │   ├── Arduino MKR WiFi 1010 [arduino-mkr-wifi-1010] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Arduino MKR Zero [arduino-mkr-zero] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Arduino Nano 33 IoT [arduino-nano-33-iot] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── nordic-boards (2)
│   │       ├── Arduino Nano 33 BLE Rev2 [arduino-nano-33-ble-rev2] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Arduino Nano 33 BLE Sense Rev2 [arduino-nano-33-ble-sense-rev2] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Espressif Systems (16)
│   │   ├── core-modules (1)
│   │   │   └── ESP32-S3 DevKitC-1 [esp32-s3] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── esp-rp (2)
│   │   │   ├── ESP32-S3 DevKitM-1 [esp32-s3-devkitm-1] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── ESP32-S3-USB-OTG [esp32-s3-usb-otg] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── espressif-more (7)
│   │   │   ├── ESP32-C3-DevKitC-02 [esp32-c3-devkitc-02] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ESP32-C5-DevKitC-1 [esp32-c5-devkitc-1-v1-2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ESP32-C6-DevKitM-1 [esp32-c6-devkitm-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ESP32-C61-DevKitC-1 [esp32-c61-devkitc-1-v2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ESP32-DevKitC V4 [esp32-devkitc-v4-wroom-32e] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ESP32-S2-DevKitM-1 [esp32-s2-devkitm-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── ESP32-S2-Saola-1 [esp32-s2-saola-1-v1-2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── espressif-more-boards (3)
│   │   │   ├── Espressif ESP32-DevKitM-1 [esp32-devkitm-1-mini-v1] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Espressif ESP8684-DevKitC-02 [esp8684-devkitc-02-v1-0] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Espressif ESP8684-DevKitM-1 [esp8684-devkitm-1-v1-1] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   └── espressif-ready (3)
│   │       ├── ESP32-C3-DevKitM-1 [esp32-c3-devkitm-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ESP32-C6-DevKitC-1 [esp32-c6-devkitc-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── ESP32-H2-DevKitM-1 [esp32-h2-devkitm-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── Heltec Automation (4)
│   │   └── heltec-semtech (4)
│   │       ├── Heltec WiFi LoRa 32 V3.2 [heltec-v3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heltec WiFi LoRa 32 V4.2 R2 [heltec-v4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heltec WiFi LoRa 32 V4.3 R2 [heltec-v4-3-r2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── Heltec WiFi LoRa 32 V4.3.2 R8 [heltec-v4-3-r8] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── LILYGO (24)
│   │   ├── lilygo (3)
│   │   │   ├── LILYGO T-Display-S3 [lilygo-t-display-s3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LILYGO T-Display-S3 Touch [lilygo-t-display-s3-touch] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── LILYGO TTGO T-Display V1.1 [lilygo-ttgo-t-display-v1-1] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── lilygo-connectivity (5)
│   │   │   ├── LILYGO T-ETH-ELite ESP32-S3 (2421) [lilygo-t-eth-elite-2421] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-ETH-Lite ESP32 V1.0 [lilygo-t-eth-lite-esp32-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-ETH-Lite ESP32-S3 V1.0 [lilygo-t-eth-lite-s3-v1-0] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LILYGO T-Internet-POE V1.0 [lilygo-t-internet-poe-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── LILYGO T-SIM7080G-S3 V1.0 [lilygo-t-sim7080g-s3-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── lilygo-interactive (5)
│   │   │   ├── LILYGO T-Deck SX1262 (2023 design) [lilygo-t-deck-sx1262-20230601] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-Display S3 AMOLED (original) [lilygo-t-display-s3-amoled-original] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-Display S3 AMOLED Plus V1.0 [lilygo-t-display-s3-amoled-plus-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-Embed CC1101 V1.0 [lilygo-t-embed-cc1101-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── LILYGO T4-S3 V1.0 [lilygo-t4-s3-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── lilygo-more (4)
│   │   │   ├── LILYGO T-Encoder Pro V1.0 [lilygo-t-encoder-pro-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-PicoC3 V1.1 [lilygo-t-picoc3-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── LILYGO T-QT Pro V1.3 [lilygo-t-qt-pro-v1-3] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── LILYGO T7-S3 V1.1 [lilygo-t7-s3-v1-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── lilygo-wireless (7)
│   │       ├── LILYGO T-A7670X V1.4 (ESP32) [lilygo-t-a7670x-v1-4] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── LILYGO T-Beam S3 Supreme V3.1 [lilygo-t-beam-s3-supreme-v3-1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── LILYGO T-Beam V1.2 SX1276 [lilygo-t-beam-v1-2-sx1276] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── LILYGO T-Echo V1.0 [lilygo-t-echo-v1-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── LILYGO T-SIM7000G 20200415 [lilygo-t-sim7000g-20200415] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── LILYGO T3 LoRa32 V1.6.1 SX1276 [lilygo-t3-lora32-v1-6-1-sx1276] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── LILYGO T3-S3 V1.3 SX1262 [lilygo-t3-s3-v1-3-sx1262] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Nordic Semiconductor (1)
│   │   └── nordic-ready (1)
│   │       └── Nordic nRF52840 Dongle [nordic-nrf52840-dongle] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── NXP (2)
│   │   └── nxp-more (2)
│   │       ├── NXP FRDM-K64F (E4) [nxp-frdm-k64f-e4] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── NXP FRDM-KL25Z (Rev E) [nxp-frdm-kl25z-e] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── PJRC (3)
│   │   └── teensy-more (3)
│   │       ├── PJRC Teensy 2.0 [pjrc-teensy-2-0] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── PJRC Teensy 4.0 [pjrc-teensy-4-0] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── PJRC Teensy LC [pjrc-teensy-lc] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Raspberry Pi (4)
│   │   ├── esp-rp (2)
│   │   │   ├── Raspberry Pi Pico [raspberry-pi-pico] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Raspberry Pi Pico W [raspberry-pi-pico-w] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── raspberry-pi-more (2)
│   │       ├── Raspberry Pi Pico 2 [raspberry-pi-pico-2] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │       └── Raspberry Pi Pico 2 W [raspberry-pi-pico-2-w] [FP:C] [3D:A] [CAD:-] [BB:+]
│   ├── Representative unbranded (1)
│   │   └── weact-bluepill (1)
│   │       └── STM32F103C8T6 Blue Pill (Representative) [bluepill-stm32f103c8t6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── Seeed Studio (9)
│   │   ├── esp-rp (5)
│   │   │   ├── Seeed XIAO ESP32-S3 [seeed-xiao-esp32-s3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed XIAO ESP32-S3 Plus [seeed-xiao-esp32-s3-plus] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed XIAO ESP32-S3 Sense [seeed-xiao-esp32-s3-sense] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed XIAO RP2040 [seeed-xiao-rp2040] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Seeed XIAO RP2040 Plus [seeed-xiao-rp2040-plus] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── nordic-boards (4)
│   │       ├── Seeed Studio XIAO nRF52840 [xiao-nrf52840] [FP:M] [3D:A] [CAD:-] [BB:+]
│   │       ├── Seeed Studio XIAO nRF52840 Plus [xiao-nrf52840-plus] [FP:M] [3D:A] [CAD:-] [BB:+]
│   │       ├── Seeed Studio XIAO nRF52840 Sense [xiao-nrf52840-sense] [FP:M] [3D:A] [CAD:+] [BB:+]
│   │       └── Seeed Studio XIAO nRF52840 Sense Plus [xiao-nrf52840-sense-plus] [FP:M] [3D:A] [CAD:-] [BB:+]
│   ├── Sipeed (7)
│   │   └── sipeed-maix (7)
│   │       ├── Sipeed Maix Bit V2.0 (MEMS microphone) [sipeed-maix-bit-v2-0] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Maix II Dock 3072 [sipeed-maix-ii-dock-3072] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed Maix M0sense 30215 [sipeed-maix-m0sense-30215] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Sipeed Maix M1s Dock 3272 [sipeed-maix-m1s-dock-3272] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Sipeed Maix M1s Module [sipeed-maix-m1s-module] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Sipeed MaixCAM Pro 60174 [sipeed-maixcam-pro-60174] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Sipeed Maixduino 2832 V1.5 [sipeed-maixduino-2832-v1-5] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── SparkFun Electronics (15)
│   │   ├── modules-sparkfun-additional-development (6)
│   │   │   ├── SparkFun MicroMod Artemis Processor [sparkfun-module-dev16401] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun MicroMod ESP32 Processor [sparkfun-module-wrl16781] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun MicroMod STM32 Processor [sparkfun-module-dev21326] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun MicroMod Teensy Processor [sparkfun-module-dev16402] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun RedBoard Artemis Nano [sparkfun-module-dev15443] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── SparkFun Thing Plus - ESP32 WROOM (U.FL) [sparkfun-module-wrl17381] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── modules-sparkfun-development (8)
│   │   │   ├── SparkFun ESP32 Thing [sparkfun-module-dev13907] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun ESP8266 Thing - Dev Board [sparkfun-module-wrl13711] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun ESP8266 Thing [sparkfun-module-wrl13231] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun RedBoard Qwiic [sparkfun-module-dev15123] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Thing Plus - Artemis [sparkfun-module-wrl15574] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Thing Plus - ESP32 WROOM (Micro-B) [sparkfun-module-wrl15663] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Thing Plus - ESP32-S2 WROOM [sparkfun-module-wrl17743] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── SparkFun Thing Plus - XBee3 Micro (U.FL) [sparkfun-module-wrl15435] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── nordic-more (1)
│   │       └── SparkFun Pro nRF52840 Mini [sparkfun-pro-nrf52840-mini-15025] [FP:C] [3D:A] [CAD:+] [BB:+]
│   ├── STMicroelectronics (12)
│   │   └── stm32 (12)
│   │       ├── STM32 NUCLEO-F042K6 [stm32-nucleo-f042k6] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── STM32 NUCLEO-F103RB [stm32-nucleo-f103rb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-F303K8 [stm32-nucleo-f303k8] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── STM32 NUCLEO-F401RE [stm32-nucleo-f401re] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-F411RE [stm32-nucleo-f411re] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-F446RE [stm32-nucleo-f446re] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-G431RB [stm32-nucleo-g431rb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-G474RE [stm32-nucleo-g474re] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-G491RE [stm32-nucleo-g491re] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STM32 NUCLEO-L031K6 [stm32-nucleo-l031k6] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── STM32 NUCLEO-L412KB [stm32-nucleo-l412kb] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── STM32 NUCLEO-L432KC [stm32-nucleo-l432kc] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Texas Instruments (2)
│   │   └── ti-wireless (2)
│   │       ├── TI LAUNCHXL-CC1352R1 LaunchPad [ti-launchxl-cc1352r1] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── TI LP-CC1312R7 LaunchPad [ti-lp-cc1312r7] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Waveshare (6)
│   │   ├── esp-rp (1)
│   │   │   └── Waveshare ESP32-S3-Zero [waveshare-esp32-s3-zero] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── waveshare (1)
│   │   │   └── Waveshare ESP32-S3-RS485-CAN [waveshare-esp32-s3-rs485-can] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── waveshare-more (4)
│   │       ├── Waveshare ESP32-C6-Zero [waveshare-esp32-c6-zero] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Waveshare RP2040-Zero [waveshare-rp2040-zero] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Waveshare RP2350-Plus [waveshare-rp2350-plus] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── Waveshare RP2350-Zero [waveshare-rp2350-zero] [FP:R] [3D:A] [CAD:+] [BB:+]
│   └── WeAct Studio (4)
│       └── weact-bluepill (4)
│           ├── WeAct BluePill Plus GD32F303CCT6 [weact-bluepill-plus-gd32f303cct6] [FP:R] [3D:A] [CAD:+] [BB:+]
│           ├── WeAct BluePill Plus STM32F103C8T6 [weact-bluepill-plus-stm32f103c8t6] [FP:R] [3D:A] [CAD:+] [BB:+]
│           ├── WeAct STM32F401CEU6 Black Pill [weact-blackpill-stm32f401ceu6] [FP:R] [3D:A] [CAD:+] [BB:+]
│           └── WeAct STM32F411CEU6 Black Pill [weact-blackpill-stm32f411ceu6] [FP:R] [3D:A] [CAD:+] [BB:+]
├── Modules (425)
│   ├── DFRobot (1)
│   │   └── modules-dfrobot-dimensioned (1)
│   │       └── DFRobot MAX98357A I2S Amplifier DFR0954 [dfrobot-max98357a-dfr0954] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── MIKROE (400)
│   │   ├── modules-mikroe-controls (45)
│   │   │   ├── 16x12 G Click [mikroe-mikroe-2758-16x12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 2x2 RGB Click [mikroe-mikroe-5917-2x2rgb] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 4x4 RGB Click [mikroe-mikroe-1881-4x4rgb] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 8800 Retro Click [mikroe-mikroe-4771-8800retro] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 8x8 B Click [mikroe-mikroe-1307-8x8b] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── AlphaNum G 2 Click [mikroe-mikroe-5903-alphanumg2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── AlphaNum R Click [mikroe-mikroe-1864-alphanumr] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BarGraph 4 Click [mikroe-mikroe-4782-bargraph4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BarGraph Click [mikroe-mikroe-1423-bargraph] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── CAP Slider 2 Click [mikroe-mikroe-3204-capslider2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Slider 3 Click [mikroe-mikroe-6645-capslider3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Touch 2 Click [mikroe-mikroe-2964-captouch2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Touch 5 Click [mikroe-mikroe-3786-captouch5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Touch 6 Click [mikroe-mikroe-5517-captouch6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Touch Click [mikroe-mikroe-2888-captouch] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cap Wheel 2 Click [mikroe-mikroe-3677-capwheel2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DIGI POT 9 Click [mikroe-mikroe-4727-digipot9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── HOD CAP 2 Click [mikroe-mikroe-6926-hodcap2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── iButton Click [mikroe-mikroe-3045-ibutton] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IPS Display 2 Click [mikroe-mikroe-6078-ipsdisplay2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IPS Display 3 Click [mikroe-mikroe-6542-ipsdisplay3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Joystick 3 Click [mikroe-mikroe-5378-joystick3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Joystick Click [mikroe-mikroe-1506-joystick] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LCD Mono Click [mikroe-mikroe-3789-lcdmono] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LDC Touch Click [mikroe-mikroe-5204-ldctouch] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 11 Click [mikroe-mikroe-4757-leddriver11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 14 Click [mikroe-mikroe-4996-leddriver14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 15 Click [mikroe-mikroe-5583-leddriver15] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 17 Click [mikroe-mikroe-5565-leddriver17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 2 Click [mikroe-mikroe-2807-leddriver2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 3 Click [mikroe-mikroe-2950-leddriver3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Driver 4 Click [mikroe-mikroe-3037-leddriver4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Flash 3 Click [mikroe-mikroe-5922-ledflash3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LED Ring 2 Click [mikroe-mikroe-5634-ledring2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── OLED B Click [mikroe-mikroe-1650-oledb] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── OLED C Click [mikroe-mikroe-1585-oledc] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── OLED W 2 Click [mikroe-mikroe-6793-oledw2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ProxFusion 3 Click [mikroe-mikroe-4469-proxfusion3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ProxFusion Click [mikroe-mikroe-2920-proxfusion] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TouchKey 3 Click [mikroe-mikroe-2891-touchkey3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Touchpad 3 Click [mikroe-mikroe-4382-touchpad3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Touchpad 4 Click [mikroe-mikroe-4752-touchpad4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Touchpad Click [mikroe-mikroe-1995-touchpad] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UT-S 7-SEG B 2 Click [mikroe-mikroe-5912-uts7segb2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── UT-S 7-SEG R Click [mikroe-mikroe-2840-uts7segr] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-mikroe-interfaces (22)
│   │   │   ├── Dual LIN Click [mikroe-mikroe-3870-duallin] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── I2C Isolator 4 Click [mikroe-mikroe-4675-i2cisolator4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── I2C Isolator 6 Click [mikroe-mikroe-5603-i2cisolator6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── I2C Isolator 7 Click [mikroe-mikroe-5943-i2cisolator7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── I2C to SPI Click [mikroe-mikroe-3743-i2ctospi] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ISO 9141 Click [mikroe-mikroe-4331-iso9141] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ISO ADC 2 Click [mikroe-mikroe-4166-isoadc2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LLC SPI Click [mikroe-mikroe-3298-llcspi] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MiWi 2 Click [mikroe-mikroe-2925-miwi2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MiWi Click [mikroe-mikroe-2924-miwi] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── OOK TX Click [mikroe-mikroe-2903-ooktx] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RN4678 Click [mikroe-mikroe-2545-rn4678] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS232 4 Click [mikroe-mikroe-6767-rs2324] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 3 Click [mikroe-mikroe-2821-rs4853] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 4 Click [mikroe-mikroe-3395-rs4854] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 6 Click [mikroe-mikroe-3993-rs4856] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 7 Click [mikroe-mikroe-5659-rs4857] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 8 Click [mikroe-mikroe-5752-rs4858] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RS485 Isolator 4 Click [mikroe-mikroe-6316-rs485isolator4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Single Wire CAN Click [mikroe-mikroe-4225-singlewirecan] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SPI Isolator Click [mikroe-mikroe-2583-spiisolator] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── UWB Click [mikroe-mikroe-4199-uwb] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-mikroe-memory (34)
│   │   │   ├── EEPROM 11 Click [mikroe-mikroe-5889-eeprom11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 13 Click [mikroe-mikroe-5885-eeprom13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 2 Click [mikroe-mikroe-1909-eeprom2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 3 Click [mikroe-mikroe-1989-eeprom3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 4 Click [mikroe-mikroe-2536-eeprom4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 5 Click [mikroe-mikroe-4422-eeprom5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 7 Click [mikroe-mikroe-4421-eeprom7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM 9 Click [mikroe-mikroe-5681-eeprom9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EEPROM Click [mikroe-mikroe-1200-eeprom] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── EERAM 5V Click [mikroe-mikroe-2729-eeram5v] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Excelon LP Click [mikroe-mikroe-3104-excelonlp] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Excelon-Ultra Click [mikroe-mikroe-4698-excelonultra] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 11 Click [mikroe-mikroe-5740-flash11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 12 Click [mikroe-mikroe-6036-flash12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 3 Click [mikroe-mikroe-2374-flash3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 5 Click [mikroe-mikroe-3780-flash5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 6 Click [mikroe-mikroe-4067-flash6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Flash 7 Click [mikroe-mikroe-4440-flash7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── FRAM 2 Click [mikroe-mikroe-2768-fram2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── FRAM 5 Click [mikroe-mikroe-5119-fram5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MRAM 3 Click [mikroe-mikroe-5191-mram3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MRAM 4 Click [mikroe-mikroe-5838-mram4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MRAM Click [mikroe-mikroe-2914-mram] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── nvSRAM 2 Click [mikroe-mikroe-4423-nvsram2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RNG 2 Click [mikroe-mikroe-5915-rng2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── RTC 7 Click [mikroe-mikroe-2976-rtc7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Semper Flash 2 Click [mikroe-mikroe-4028-semperflash2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SQI FLASH Click [mikroe-mikroe-2828-sqiflash] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SRAM 2 Click [mikroe-mikroe-4178-sram2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SRAM 3 Click [mikroe-mikroe-4293-sram3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SRAM 4 Click [mikroe-mikroe-4835-sram4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SRAM Click [mikroe-mikroe-1902-sram] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SWI EEPROM Click [mikroe-mikroe-4521-swieeprom] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Watchdog Click [mikroe-mikroe-4416-watchdog] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-mikroe-motion (68)
│   │   │   ├── 3D Hall 10 Click [mikroe-mikroe-5125-3dhall10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 3D Hall 5 Click [mikroe-mikroe-3197-3dhall5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 3D Hall 8 Click [mikroe-mikroe-4498-3dhall8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 15 Click [mikroe-mikroe-4330-6dofimu15] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 18 Click [mikroe-mikroe-5591-6dofimu18] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 20 Click [mikroe-mikroe-5606-6dofimu20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 21 Click [mikroe-mikroe-6037-6dofimu21] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 23 Click [mikroe-mikroe-5999-6dofimu23] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 24 Click [mikroe-mikroe-6420-6dofimu24] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 25 Click [mikroe-mikroe-6421-6dofimu25] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 4 Click [mikroe-mikroe-3410-6dofimu4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 8 Click [mikroe-mikroe-3447-6dofimu8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── 6DOF IMU 9 Click [mikroe-mikroe-3827-6dofimu9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 10 Click [mikroe-mikroe-4112-accel10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 17 Click [mikroe-mikroe-4855-accel17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 19 Click [mikroe-mikroe-4949-accel19] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 2 Click [mikroe-mikroe-1905-accel2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 20 Click [mikroe-mikroe-4888-accel20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 22 Click [mikroe-mikroe-4896-accel22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 24 Click [mikroe-mikroe-5336-accel24] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 25 Click [mikroe-mikroe-5602-accel25] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 29 Click [mikroe-mikroe-5671-accel29] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 30 Click [mikroe-mikroe-5550-accel30] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 5 Click [mikroe-mikroe-3149-accel5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel 6 Click [mikroe-mikroe-3075-accel6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Accel Click [mikroe-mikroe-1194-accel] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Air Motion Click [mikroe-mikroe-5524-airmotion] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── AMR Angle 2 Click [mikroe-mikroe-4981-amrangle2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── AMR Angle Click [mikroe-mikroe-4561-amrangle] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Angle 2 Click [mikroe-mikroe-2338-angle2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Compass 5 Click [mikroe-mikroe-4366-compass5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Compass 7 Click [mikroe-mikroe-5190-compass7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Gyro 7 Click [mikroe-mikroe-5145-gyro7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Hall Current 20 Click [mikroe-mikroe-6464-hallcurrent20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Hall Current 6 Click [mikroe-mikroe-3443-hallcurrent6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Hall Switch 2 Click [mikroe-mikroe-4788-hallswitch2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Hall Switch 3 Click [mikroe-mikroe-6017-hallswitch3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Inclinometer 3 Click [mikroe-mikroe-6050-inclinometer3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Inclinometer Click [mikroe-mikroe-4753-inclinometer] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Gesture 2 Click [mikroe-mikroe-5146-irgesture2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Gesture 3 Click [mikroe-mikroe-5742-irgesture3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Gesture Click [mikroe-mikroe-2086-irgesture] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LIN Hall 2 Click [mikroe-mikroe-5932-linhall2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LIN HALL Click [mikroe-mikroe-1648-linhall] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MagAccel Click [mikroe-mikroe-6027-magaccel] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magnetic linear Click [mikroe-mikroe-3274-magneticlinear] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magnetic Rotary 3 Click [mikroe-mikroe-5203-magneticrotary3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magnetic Rotary Click [mikroe-mikroe-3275-magneticrotary] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magneto 12 Click [mikroe-mikroe-4991-magneto12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magneto 13 Click [mikroe-mikroe-5643-magneto13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magneto 5 Click [mikroe-mikroe-3050-magneto5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magneto 6 Click [mikroe-mikroe-4139-magneto6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Magneto 7 Click [mikroe-mikroe-3657-magneto7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MAGNETO Click [mikroe-mikroe-1886-magneto] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Microwave 6 Click [mikroe-mikroe-5773-microwave6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── ML Vibro Sens Click [mikroe-mikroe-6470-mlvibrosens] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Motion 3 Click [mikroe-mikroe-4049-motion3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MPU 9DOF Click [mikroe-mikroe-1719-mpu9dof] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Opto Encoder 4 Click [mikroe-mikroe-5979-optoencoder4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Opto Encoder 5 Click [mikroe-mikroe-6056-optoencoder5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Piezo Accel Click [mikroe-mikroe-4559-piezoaccel] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── REED Click [mikroe-mikroe-1998-reed] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Smart DOF 3 Click [mikroe-mikroe-5734-smartdof3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Smart DOF 4 Click [mikroe-mikroe-6369-smartdof4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Smart Sens 2 Click [mikroe-mikroe-5207-smartsens2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Speed Sense Click [mikroe-mikroe-5977-speedsense] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Tilt 3 Click [mikroe-mikroe-4779-tilt3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Vibra Sense 2 Click [mikroe-mikroe-4355-vibrasense2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-mikroe-optical (49)
│   │   │   ├── Ambient 10 Click [mikroe-mikroe-4777-ambient10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 12 Click [mikroe-mikroe-4781-ambient12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 14 Click [mikroe-mikroe-6255-ambient14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 15 Click [mikroe-mikroe-4967-ambient15] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 18 Click [mikroe-mikroe-4943-ambient18] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 19 Click [mikroe-mikroe-5245-ambient19] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 2 Click [mikroe-mikroe-1903-ambient2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 20 Click [mikroe-mikroe-5469-ambient20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 22 Click [mikroe-mikroe-5647-ambient22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 3 Click [mikroe-mikroe-3686-ambient3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 4 Click [mikroe-mikroe-3199-ambient4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 6 Click [mikroe-mikroe-3444-ambient6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 7 Click [mikroe-mikroe-3601-ambient7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 8 Click [mikroe-mikroe-3452-ambient8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Ambient 9 Click [mikroe-mikroe-4197-ambient9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Color 16 Click [mikroe-mikroe-5421-color16] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Color 17 Click [mikroe-mikroe-5702-color17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Color 2 Click [mikroe-mikroe-1988-color2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Beacon Click [mikroe-mikroe-1939-irbeacon] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Click [mikroe-mikroe-1377-ir] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Eclipse 2 Click [mikroe-mikroe-6047-ireclipse2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Grid 2 Click [mikroe-mikroe-3194-irgrid2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Sense 3 Click [mikroe-mikroe-3607-irsense3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IR Sense 4 Click [mikroe-mikroe-5952-irsense4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IrDA 3 Click [mikroe-mikroe-2871-irda3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Light 4 Click [mikroe-mikroe-6105-light4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Light mix-sens Click [mikroe-mikroe-4148-lightmixsens] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Light Temp Click [mikroe-mikroe-3399-lighttemp] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LightRanger 12 Click [mikroe-mikroe-6465-lightranger12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LightRanger 5 Click [mikroe-mikroe-4592-lightranger5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LightRanger 8 Click [mikroe-mikroe-4492-lightranger8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── LightRanger 9 Click [mikroe-mikroe-5237-lightranger9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 11 Click [mikroe-mikroe-3689-proximity11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 15 Click [mikroe-mikroe-4822-proximity15] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 16 Click [mikroe-mikroe-5286-proximity16] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 17 Click [mikroe-mikroe-5084-proximity17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 6 Click [mikroe-mikroe-3048-proximity6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── PROXIMITY 7 Click [mikroe-mikroe-3330-proximity7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity 8 Click [mikroe-mikroe-3439-proximity8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Proximity Click [mikroe-mikroe-1445-proximity] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Smoke Click [mikroe-mikroe-2560-smoke] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Spectrometer 2 Click [mikroe-mikroe-5167-spectrometer2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Spectrometer Click [mikroe-mikroe-4165-spectrometer] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TFmini Click [mikroe-mikroe-4974-tfmini] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UV 4 Click [mikroe-mikroe-2989-uv4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UV 5 Click [mikroe-mikroe-5535-uv5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UVB Click [mikroe-mikroe-4145-uvb] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UVC Click [mikroe-mikroe-4144-uvc] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── UVC Light Click [mikroe-mikroe-4177-uvclight] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-mikroe-power (65)
│   │   │   ├── AMR Current Click [mikroe-mikroe-3812-amrcurrent] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BOOST Click [mikroe-mikroe-2780-boost] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Brushless 24 Click [mikroe-mikroe-5478-brushless24] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck 14 Click [mikroe-mikroe-3847-buck14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck 2 Click [mikroe-mikroe-2911-buck2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck 22 Click [mikroe-mikroe-5446-buck22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck 23 Click [mikroe-mikroe-5536-buck23] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck 3 Click [mikroe-mikroe-2971-buck3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BUCK 6 Click [mikroe-mikroe-2957-buck6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BUCK 7 Click [mikroe-mikroe-3094-buck7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck Boost 2 Click [mikroe-mikroe-2963-buckboost2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── BUCK Click [mikroe-mikroe-1592-buck] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck-Boost 3 Click [mikroe-mikroe-3277-buckboost3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Buck-Boost 4 Click [mikroe-mikroe-5924-buckboost4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Charger 11 Click [mikroe-mikroe-3650-charger11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── CHARGER 12 Click [mikroe-mikroe-3744-charger12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Charger 27 Click [mikroe-mikroe-5960-charger27] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Charger 5 Click [mikroe-mikroe-2848-charger5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Cooler Click [mikroe-mikroe-6068-cooler] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current 11 Click [mikroe-mikroe-6166-current11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current 12 Click [mikroe-mikroe-6065-current12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current 4 Click [mikroe-mikroe-4755-current4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current Limit 10 Click [mikroe-mikroe-5938-currentlimit10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current Limit 4 Click [mikroe-mikroe-5900-currentlimit4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current Limit 6 Click [mikroe-mikroe-4915-currentlimit6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Current Limit Click [mikroe-mikroe-4271-currentlimit] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 11 Click [mikroe-mikroe-3649-dcmotor11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 18 Click [mikroe-mikroe-4786-dcmotor18] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 20 Click [mikroe-mikroe-4884-dcmotor20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 22 Click [mikroe-mikroe-5189-dcmotor22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 24 Click [mikroe-mikroe-5537-dcmotor24] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 5 Click [mikroe-mikroe-2699-dcmotor5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 6 Click [mikroe-mikroe-4114-dcmotor6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DC Motor 8 Click [mikroe-mikroe-2893-dcmotor8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── eFuse 2 Click [mikroe-mikroe-4335-efuse2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── eFuse 7 Click [mikroe-mikroe-5738-efuse7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Fan 3 Click [mikroe-mikroe-2841-fan3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Fan Click [mikroe-mikroe-2004-fan] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge 3 Click [mikroe-mikroe-3613-hbridge3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge 4 Click [mikroe-mikroe-3787-hbridge4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge 7 Click [mikroe-mikroe-4143-hbridge7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge 8 Click [mikroe-mikroe-4775-hbridge8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge 9 Click [mikroe-mikroe-4821-hbridge9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── H-Bridge Driver Click [mikroe-mikroe-4696-hbridgedriver] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── HAPTIC 2 Click [mikroe-mikroe-4452-haptic2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Haptic 4 Click [mikroe-mikroe-6045-haptic4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Haptic 5 Click [mikroe-mikroe-6576-haptic5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── IPD 2 Click [mikroe-mikroe-6314-ipd2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── MIC33153 Click [mikroe-mikroe-2887-mic33153] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Nano Power 2 Click [mikroe-mikroe-3036-nanopower2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Nano Power Click [mikroe-mikroe-3035-nanopower] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Power Monitor Click [mikroe-mikroe-4810-powermonitor] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Power MUX 2 Click [mikroe-mikroe-4575-powermux2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Single Cell Click [mikroe-mikroe-3844-singlecell] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Smart Buck 3 Click [mikroe-mikroe-5741-smartbuck3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Down 12 Click [mikroe-mikroe-6126-stepdown12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Down 13 Click [mikroe-mikroe-6846-stepdown13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Down 5 Click [mikroe-mikroe-5572-stepdown5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Down 7 Click [mikroe-mikroe-5754-stepdown7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Down 9 Click [mikroe-mikroe-5844-stepdown9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Step Up 2 Click [mikroe-mikroe-6076-stepup2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── UPS 3 Click [mikroe-mikroe-4479-ups3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── VCT Monitor Click [mikroe-mikroe-4353-vctmonitor] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Vibro Motor 2 Click [mikroe-mikroe-3713-vibromotor2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Vibro Motor 3 Click [mikroe-mikroe-4356-vibromotor3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── modules-mikroe-sensing (117)
│   │       ├── Accel 28 Click [mikroe-mikroe-5737-accel28] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 17 Click [mikroe-mikroe-4966-adc17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 19 Click [mikroe-mikroe-4997-adc19] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 2 Click [mikroe-mikroe-1893-adc2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 7 Click [mikroe-mikroe-3115-adc7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 8 Click [mikroe-mikroe-3394-adc8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── ADC 9 Click [mikroe-mikroe-4105-adc9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air Quality 11 Click [mikroe-mikroe-6063-airquality11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air Quality 12 Click [mikroe-mikroe-6418-airquality12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air quality 2 Click [mikroe-mikroe-2529-airquality2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air quality 5 Click [mikroe-mikroe-3056-airquality5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air Quality 8 Click [mikroe-mikroe-4904-airquality8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Air quality 9 Click [mikroe-mikroe-5060-airquality9] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Alcohol 2 Click [mikroe-mikroe-3097-alcohol2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Altitude 2 Click [mikroe-mikroe-3030-altitude2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Altitude 5 Click [mikroe-mikroe-4875-altitude5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Altitude 6 Click [mikroe-mikroe-4903-altitude6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Altitude Click [mikroe-mikroe-1489-altitude] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Ambient 11 Click [mikroe-mikroe-3990-ambient11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── AN to PWM 2 Click [mikroe-mikroe-4221-antopwm2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Analog MUX Click [mikroe-mikroe-4111-analogmux] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Barometer 10 Click [mikroe-mikroe-5601-barometer10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Barometer 6 Click [mikroe-mikroe-4978-barometer6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Barometer 7 Click [mikroe-mikroe-4913-barometer7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── BUZZ 2 Click [mikroe-mikroe-2720-buzz2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Color 12 Click [mikroe-mikroe-5724-color12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DAC 10 Click [mikroe-mikroe-4732-dac10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DAC 11 Click [mikroe-mikroe-4767-dac11] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DAC 14 Click [mikroe-mikroe-5525-dac14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DAC 2 Click [mikroe-mikroe-1918-dac2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DAC 7 Click [mikroe-mikroe-3886-dac7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DHT22 2 Click [mikroe-mikroe-2818-dht222] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Diff Press 2 Click [mikroe-mikroe-4894-diffpress2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Diff Press 3 Click [mikroe-mikroe-5771-diffpress3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Diff Press 4 Click [mikroe-mikroe-5868-diffpress4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Diff Press 5 Click [mikroe-mikroe-6527-diffpress5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Environment 2 Click [mikroe-mikroe-4558-environment2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Environment Click [mikroe-mikroe-2467-environment] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Fever Click [mikroe-mikroe-2554-fever] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Force 5 Click [mikroe-mikroe-4305-force5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Gyro 6 Click [mikroe-mikroe-4827-gyro6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heart Rate 10 Click [mikroe-mikroe-4724-heartrate10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heart Rate 13 Click [mikroe-mikroe-6490-heartrate13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heart rate 3 Click [mikroe-mikroe-2036-heartrate3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heart Rate 7 Click [mikroe-mikroe-2998-heartrate7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Heart Rate 8 Click [mikroe-mikroe-3218-heartrate8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Hydro Probe Click [mikroe-mikroe-4131-hydroprobe] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── IR Thermo 4 Click [mikroe-mikroe-6135-irthermo4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── IrThermo 5V Click [mikroe-mikroe-1362-irthermo5v] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── LDC 2 Click [mikroe-mikroe-4783-ldc2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Light 2 Click [mikroe-mikroe-6022-light2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Load Cell 3 Click [mikroe-mikroe-4658-loadcell3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Load Cell 4 Click [mikroe-mikroe-4458-loadcell4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Load cell Click [mikroe-mikroe-3168-loadcell] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── mCurrent Sens Click [mikroe-mikroe-6985-mcurrentsens] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── MIC 2 Click [mikroe-mikroe-3445-mic2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── NO2 2 Click [mikroe-mikroe-3700-no22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── NO2 Click [mikroe-mikroe-3098-no2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── One Shot Click [mikroe-mikroe-3877-oneshot] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Opto 5 Click [mikroe-mikroe-4476-opto5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Oximeter 5 Click [mikroe-mikroe-4986-oximeter5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Ozone 2 Click [mikroe-mikroe-2767-ozone2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Ozone 3 Click [mikroe-mikroe-4654-ozone3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── PHT Click [mikroe-mikroe-4348-pht] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pollution Click [mikroe-mikroe-2516-pollution] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 10 Click [mikroe-mikroe-4142-pressure10] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 12 Click [mikroe-mikroe-3466-pressure12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 14 Click [mikroe-mikroe-4424-pressure14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 15 Click [mikroe-mikroe-4747-pressure15] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 16 Click [mikroe-mikroe-4765-pressure16] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 17 Click [mikroe-mikroe-4944-pressure17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 2 Click [mikroe-mikroe-1880-pressure2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 4 Click [mikroe-mikroe-3020-pressure4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 6 Click [mikroe-mikroe-3216-pressure6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pressure 7 Click [mikroe-mikroe-3246-pressure7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Radiation Click [mikroe-mikroe-4036-radiation] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── RMS to DC 2 Click [mikroe-mikroe-5821-rmstodc2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── RTD Click [mikroe-mikroe-2815-rtd] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── SHT Click [mikroe-mikroe-2101-sht] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Solenoid Driver Click [mikroe-mikroe-6574-solenoiddriver] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── SolidSwitch 8 Click [mikroe-mikroe-6064-solidswitch8] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Surface Temp 2 Click [mikroe-mikroe-4266-surfacetemp2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Surface Temp Click [mikroe-mikroe-4205-surfacetemp] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Temp Probe Click [mikroe-mikroe-4301-tempprobe] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Temp-Log 2 Click [mikroe-mikroe-3004-templog2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Temp-Log 5 Click [mikroe-mikroe-3442-templog5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Temp-Log Click [mikroe-mikroe-2886-templog] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 12 Click [mikroe-mikroe-3436-temphum12] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 13 Click [mikroe-mikroe-3635-temphum13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 14 Click [mikroe-mikroe-4306-temphum14] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 16 Click [mikroe-mikroe-4733-temphum16] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 17 Click [mikroe-mikroe-4702-temphum17] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 18 Click [mikroe-mikroe-4892-temphum18] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 19 Click [mikroe-mikroe-4922-temphum19] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 2 Click [mikroe-mikroe-3085-temphum2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 20 Click [mikroe-mikroe-4907-temphum20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 22 Click [mikroe-mikroe-5310-temphum22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── TempHum 23 Click [mikroe-mikroe-5301-temphum23] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Terminal 2 Click [mikroe-mikroe-4951-terminal2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 13 Click [mikroe-mikroe-3688-thermo13] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 16 Click [mikroe-mikroe-3662-thermo16] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 18 Click [mikroe-mikroe-4829-thermo18] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 2 Click [mikroe-mikroe-1840-thermo2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 20 Click [mikroe-mikroe-4316-thermo20] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 21 Click [mikroe-mikroe-4879-thermo21] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 22 Click [mikroe-mikroe-5068-thermo22] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 25 Click [mikroe-mikroe-5335-thermo25] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 28 Click [mikroe-mikroe-5466-thermo28] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 3 Click [mikroe-mikroe-1885-thermo3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── THERMO 5 Click [mikroe-mikroe-2571-thermo5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thermo 7 Click [mikroe-mikroe-2979-thermo7] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Thunder Click [mikroe-mikroe-1444-thunder] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── UNIQUE ID Click [mikroe-mikroe-1819-uniqueid] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── VCP Monitor 3 Click [mikroe-mikroe-4222-vcpmonitor3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── VCP Monitor 4 Click [mikroe-mikroe-4763-vcpmonitor4] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── VCP Monitor 6 Click [mikroe-mikroe-6101-vcpmonitor6] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── Water Detect 2 Click [mikroe-mikroe-5820-waterdetect2] [FP:R] [3D:A] [CAD:+] [BB:+]
│   └── Seeed Studio (24)
│       └── modules-seeed-practical (24)
│           ├── Seeed Grove - 1-Wire Thermocouple Amplifier(MAX31850K) [seeed-grove-max31850k-101020555] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 2-Channel SPDT Relay [seeed-grove-spdt-relay-2ch-103020132] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 2-Coil Latching Relay [seeed-grove-latching-relay-103020010] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 4-Channel Solid State Relay [seeed-grove-ssr-4ch-103020135] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 4-Channel SPDT Relay [seeed-grove-spdt-relay-4ch-103020133] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - 8-Channel Solid State Relay [seeed-grove-ssr-8ch-103020136] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Air Quality Sensor v1.3 [seeed-grove-air-quality-101020078] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Collision Sensor [seeed-grove-collision-101020005] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - DS1307 RTC (Real Time Clock) for Arduino [seeed-grove-ds1307-rtc-101020013] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Gas Sensor(MQ2) [seeed-grove-mq2-101020055] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Gas Sensor(MQ5) [seeed-grove-mq5-101020056] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - High Precision RTC (Real Time Clock) [seeed-grove-pcf85063-rtc-102020083] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - High Temperature Sensor [seeed-grove-high-temperature-111020002] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Infrared Emitter [seeed-grove-infrared-emitter-101020026] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - MOSFET [seeed-grove-mosfet-103020008] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Optocoupler Relay (M281) [seeed-grove-m281-relay-101020603] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Passive Buzzer [seeed-grove-passive-buzzer-107020109] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Piezo Vibration Sensor [seeed-grove-piezo-vibration-101020031] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Relay [seeed-grove-relay-103020005] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Speaker [seeed-grove-speaker-107020001] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - Speaker Plus [seeed-grove-speaker-plus-101020853] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove Dual Button [seeed-grove-dual-button-111020103] [FP:C] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove-Encoder [seeed-grove-encoder-111020001] [FP:C] [3D:A] [CAD:+] [BB:-]
│           └── Seeed Grove-Mech keycap [seeed-grove-mech-keycap-111020049] [FP:C] [3D:A] [CAD:+] [BB:-]
├── Motors (3)
│   └── Seeed Studio (3)
│       └── modules-seeed-extended-motion (3)
│           ├── Seeed Grove - 16 Channel PWM Driver (PCA9685) [seeed-module-108020102] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Seeed Grove - I2C Motor Driver (TB6612FNG) [seeed-module-108020103] [FP:R] [3D:A] [CAD:+] [BB:+]
│           └── Seeed Grove - I2C Motor Driver V1.3 [seeed-module-105020001] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Passives (5)
│   ├── Bourns (1)
│   │   └── input-prototyping (1)
│   │       └── Bourns 3296W-1-103LF 10 kΩ Trimmer [bourns-3296w-1-103lf] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── Unspecified (4)
│       └── core-basics (4)
│           ├── Axial Inductor [inductor] [FP:R] [3D:A] [CAD:-] [BB:-]
│           ├── Axial Resistor [resistor] [FP:R] [3D:A] [CAD:-] [BB:+]
│           ├── Ceramic Capacitor [capacitor] [FP:R] [3D:A] [CAD:-] [BB:+]
│           └── Electrolytic Capacitor [electrolytic] [FP:R] [3D:A] [CAD:-] [BB:+]
├── Power (76)
│   ├── Adafruit (36)
│   │   ├── common-power (6)
│   │   │   ├── Adafruit HUSB238 USB-C PD Breakout [adafruit-5807-husb238] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit INA260 Current and Power Sensor [adafruit-4226-ina260] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit MAX17048 LiPo Fuel Gauge [adafruit-5580-max17048] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit Micro-Lipo USB-C Charger [adafruit-4410-microlipo-usbc] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit PowerBoost 1000C [adafruit-powerboost-1000c] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit PowerBoost 500C [adafruit-powerboost-500c] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-adafruit-additional-power-audio (2)
│   │   │   ├── Adafruit LiIon or LiPoly Charger BFF Add-On for QT Py [adafruit-module-5397] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Adafruit Power Relay FeatherWing [adafruit-module-3191] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── modules-adafruit-power-audio (28)
│   │       ├── Adafruit 12V Bias Voltage Boost Converter - TPS61040 [adafruit-module-5644] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit A4988 Stepper Motor Driver Breakout Board [adafruit-module-6109] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit bq25185 USB / DC / Solar Charger with 3.3V Buck Board [adafruit-module-6092] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit bq25185 USB / DC / Solar Charger with 5V Boost Board [adafruit-module-6106] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit CP2102N Friend - USB to Serial Converter [adafruit-module-5335] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DC Power BFF Add-On for QT Py [adafruit-module-5882] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DRV8833 DC/Stepper Motor Driver Breakout Board [adafruit-module-3297] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit DRV8871 DC Motor Driver Breakout Board - 3.6A Max [adafruit-module-3190] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit High Power Infrared IR LED Emitter - STEMMA JST PH 2mm [adafruit-module-5639] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit LM73100 23V 5A Max Ideal Diode Breakout [adafruit-module-6359] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit MiniBoost 5V @ 100mA Charge Pump - AP3602A [adafruit-module-3661] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit MiniBoost 5V @ 1A - TPS61023 [adafruit-module-4654] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit MOSFET Driver - For Motors, Solenoids, LEDs, etc [adafruit-module-5648] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit Push-button Power Switch Breakout [adafruit-module-1400] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit QT 3V to 5V Level Booster Breakout - STEMMA QT / Qwiic [adafruit-module-5649] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit S-35710 Low-Power Wake Up Timer Breakout [adafruit-module-5959] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit STEMMA Non-Latching Mini Relay - JST PH 2mm [adafruit-module-4409] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit STSPIN220 Stepper Motor Driver Breakout Board [adafruit-module-6353] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TB6612 1.2A DC/Stepper Motor Driver Breakout Board [adafruit-module-2448] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TPL5110 Low Power Timer Breakout [adafruit-module-3435] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TPL5111 Low Power Timer Breakout [adafruit-module-3573] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TPS61169 Constant Current Boost Converter for LEDs [adafruit-module-6354] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit TPS65131 Split Power Supply Boost Converter [adafruit-module-6280] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Adafruit WCH CH9102F Friend - USB to Serial Converter [adafruit-module-5568] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── LM3671 3.3V Buck Converter Breakout - 3.3V Output 600mA Max [adafruit-module-2745] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── MPM3610 3.3V Buck Converter Breakout - 21V In 3.3V Out at 1.2A [adafruit-module-4683] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── TPS62827 3.3V Buck Converter Breakout - 3.3V Output 2 Amp Max [adafruit-module-4920] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── USB LiIon/LiPoly charger [adafruit-module-259] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Beemong (1)
│   │   └── common-power (1)
│   │       └── TP4056 USB-C Charger with Protection [beemong-fa2119-tp4056-usbc-protected] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── DFRobot (3)
│   │   └── common-power (3)
│   │       ├── DFRobot DFR0667 Micro USB LiPo Charger [dfrobot-dfr0667] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── DFRobot DFR0668 USB-C LiPo Charger [dfrobot-dfr0668] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── DFRobot Solar Power Manager 5V V1.1 [dfrobot-dfr0559-solar-power-manager] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Diodes Incorporated (1)
│   │   └── power (1)
│   │       └── AP2112K-3.3TRG1 3.3 V LDO [ap2112k-3-3] [FP:?] [3D:A] [CAD:-] [BB:-]
│   ├── Generic module (1)
│   │   └── core-modules (1)
│   │       └── LM2596 Buck Converter [lm2596] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Keyestudio (3)
│   │   └── common-power (3)
│   │       ├── Keyestudio ACS712 20 A Current Module [keyestudio-ks0186-acs712] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Keyestudio ACS712 30 A Current Module [keyestudio-ks0185-acs712] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── Keyestudio ACS712 5 A Current Module [keyestudio-ks0187-acs712] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Makerfabs (1)
│   │   └── common-power (1)
│   │       └── Makerfabs MP1584EN Mini Buck Module [makerfabs-mp1584en-mini] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Microchip (2)
│   │   └── power (2)
│   │       ├── MCP1700-3302E/TO 3.3 V LDO [mcp1700-3302-to92] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       └── MCP1702-5002E/TO 5.0 V LDO [mcp1702-5002-to92] [FP:?] [3D:A] [CAD:-] [BB:-]
│   ├── Murata Power Solutions (1)
│   │   └── power (1)
│   │       └── Murata OKI-78SR-5/1.5-W36-C [murata-oki-78sr-5] [FP:?] [3D:A] [CAD:-] [BB:+]
│   ├── Pololu (5)
│   │   └── power (5)
│   │       ├── Pololu D24V10F3 3.3 V Buck [pololu-d24v10f3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pololu D24V10F5 5 V Buck [pololu-d24v10f5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pololu S13V10F5 5 V Buck-Boost [pololu-s13v10f5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Pololu S7V8F3 3.3 V Buck-Boost [pololu-s7v8f3] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── Pololu U3V9F5 5 V Boost [pololu-u3v9f5] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── RECOM (1)
│   │   └── power (1)
│   │       └── RECOM R-78E5.0-0.5 Buck Converter [recom-r-78e5-0-0-5] [FP:?] [3D:A] [CAD:+] [BB:+]
│   ├── RobotDyn (2)
│   │   └── robotdyn-more (2)
│   │       ├── RobotDyn AMS1117 3.3 V Regulator [robotdyn-ams1117-3-3v-module] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── RobotDyn AMS1117 5 V Regulator [robotdyn-ams1117-5v-module] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── SparkFun Electronics (15)
│   │   ├── modules-sparkfun-additional-power-audio (1)
│   │   │   └── SparkFun Buck Regulator Breakout - 3.3V (AP63203) [sparkfun-module-com18356] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── modules-sparkfun-power-audio (14)
│   │       ├── SparkFun Adjustable LiPo Charger [sparkfun-module-prt14380] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Artemis Module - Low Power Machine Learning BLE Cortex-M4F [sparkfun-module-wrl15484] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Battery Babysitter - LiPo Battery Manager [sparkfun-module-prt13777] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Breadboard Power Supply Stick - 5V/3.3V [sparkfun-module-prt13032] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Haptic Motor Driver - DRV2605L [sparkfun-module-rob14538] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun L298N Breakout PCB (unpopulated) [sparkfun-module-bob09540] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun LiPo Charger Basic - Micro-B [sparkfun-module-prt10217] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun LiPo Charger Basic - Mini-USB [sparkfun-module-prt10401] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Logic Level Converter - Single Supply [sparkfun-module-prt14765] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun MOSFET Power Controller [sparkfun-module-prt11214] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SparkFun Motor Driver - Dual TB6612FNG (1A) [sparkfun-module-rob14451] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Nano Power Timer - TPL5110 [sparkfun-module-prt15353] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── SparkFun Qwiic Dual Solid State Relay [sparkfun-module-com16810] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── SparkFun Servo Trigger [sparkfun-module-wig13118] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Texas Instruments (3)
│   │   └── power (3)
│   │       ├── TI LM1117-3.3 LDO (SOT-223) [lm1117-3-3-sot223] [FP:?] [3D:A] [CAD:+] [BB:-]
│   │       ├── TI LM1117-5.0 LDO (SOT-223) [lm1117-5-0-sot223] [FP:?] [3D:A] [CAD:+] [BB:-]
│   │       └── TLV75533PDBVR 3.3 V LDO [tlv75533pdbvr] [FP:?] [3D:A] [CAD:+] [BB:-]
│   └── Unspecified (1)
│       └── core-basics (1)
│           └── DC Power Source [battery] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Programming tools (3)
│   └── Gowin Semiconductor (3)
│       └── gowin-programmers (3)
│           ├── Gowin B-OP901-16 Offline Programmer [gowin-b-op901-16] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Gowin OP720-4 Quad Offline Programmer [gowin-op720-4] [FP:R] [3D:A] [CAD:+] [BB:-]
│           └── Gowin PL-USB-Cable V5.1 [gowin-pl-usb-cable-v5-1] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Prototyping (1)
│   └── Generic (1)
│       └── breadboard (1)
│           └── Configurable Solderless Breadboard [breadboard] [FP:R] [3D:A] [CAD:-] [BB:H]
├── Radio Receivers (3)
│   ├── BETAFPV (1)
│   │   └── elrs (1)
│   │       └── BETAFPV SuperD 2.4 GHz ExpressLRS Receiver [betafpv-superd-2-4ghz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── RadioMaster (2)
│       └── elrs (2)
│           ├── RadioMaster ER4 ExpressLRS PWM Receiver [radiomaster-er4] [FP:R] [3D:A] [CAD:-] [BB:-]
│           └── RadioMaster RP1 V2 ExpressLRS Receiver [radiomaster-rp1-v2] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Semiconductors (363)
│   ├── Alpha & Omega Semiconductor (4)
│   │   └── switches-mosfets (4)
│   │       ├── AO3400A N-channel MOSFET [ao3400a] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       ├── AO3401A P-channel MOSFET [ao3401a] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       ├── AOD4184A N-channel MOSFET [aod4184a] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       └── AOD4185 P-channel MOSFET [aod4185] [FP:?] [3D:A] [CAD:-] [BB:-]
│   ├── Analog Devices (25)
│   │   ├── market-analog (11)
│   │   │   ├── AD620ANZ — Low-power instrumentation amplifier with gain set by one external resistor, widely used for bridge and sensor signals [adi-ad620anz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── AD623ANZ — Single-supply instrumentation amplifier with rail-to-rail output and gain set by one external resistor [adi-ad623anz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── AD822ANZ — Dual low-power FET-input operational amplifier with rail-to-rail output and single-supply operation [adi-ad822anz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── AD8400ARZ10 — Single-channel, 256-position, 10 kΩ SPI digital potentiometer [adi-ad8400arz10] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── AD8421ARZ — Low-noise, wideband instrumentation amplifier with adjacent gain-resistor terminals [adi-ad8421arz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── AD8532ARZ — Dual rail-to-rail operational amplifier with high output-current capability for loads such as headphones [adi-ad8532arz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── AD8606ARZ — Dual precision DigiTrim CMOS operational amplifier with low bias current and rail-to-rail inputs and outputs [adi-ad8606arz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── AD9833BRMZ — Programmable 25 MHz DDS waveform generator with serial control and integrated voltage-output DAC [adi-ad9833brmz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── AD9834BRUZ — 75 MHz DDS waveform generator with complementary current outputs, comparator and hardware frequency/phase controls [adi-ad9834bruz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── ADG704BRMZ — Low-voltage, four-channel analog multiplexer with active-high enable [adi-adg704brmz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── ADG884BRMZ — Low-resistance dual SPDT analog switch in the ten-lead MSOP package [adi-adg884brmz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-communications (7)
│   │   │   ├── DS2408S+ 1-Wire 8-bit GPIO expander [ds2408s] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DS2482S-100+ I2C to 1-Wire master [ds2482s-100] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DS2482S-800+ Eight-channel I2C to 1-Wire master [ds2482s-800] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── MAX3100EEE+ SPI UART bridge [max3100eee] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── MAX3232ESE+ RS-232 transceiver [max3232ese] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── MAX3485ESA+ 3.3 V RS-485 transceiver [max3485esa] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── MAX485ESA+ RS-485 transceiver [max485esa] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-memory-display (2)
│   │   │   ├── MAX7219CNG+ 8-digit serial LED display driver [max7219cng] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── MAX7221CNG+ SPI-compatible 8-digit LED display driver [max7221cng] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── market-power (5)
│   │       ├── AD584JNZ — Pin-programmable 2 [adi-ad584jnz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── AD587JRZ — Precision 10 V buried-Zener reference with trim and noise-reduction connections [adi-ad587jrz] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LT1763CS8-3.3#PBF — 500 mA low-noise LDO regulator, fixed 3 [adi-lt1763cs8-3-3-pbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── MAX1044CPA+ — Switched-capacitor voltage inverter or doubler with BOOST frequency control [adi-max1044cpa-plus] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── REF02CPZ — Precision 5 V series reference with temperature output and trim connection [adi-ref02cpz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Central Semiconductor (2)
│   │   └── market-transistors (2)
│   │       ├── Central Semiconductor MPSA13 PBFREE [market-mpsa13-pbfree] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Central Semiconductor MPSA63 PBFREE [market-mpsa63-pbfree] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Diodes Incorporated (11)
│   │   └── market-diodes (11)
│   │       ├── Diodes Incorporated 1N4148W-7-F [market-1n4148w-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAS16-7-F [market-bas16-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAS70-7-F [market-bas70-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAT54C-7-F [market-bat54c-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAT54S-7-F [market-bat54s-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAV70-13-F [market-bav70-13-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAV99-7-F [market-bav99-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated BAW56-7-F [market-baw56-7-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated ES1J-13-F [market-es1j-13-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Diodes Incorporated GBJ2510-F [market-gbj2510-f] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── Diodes Incorporated KBP206G [market-kbp206g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Diotec Semiconductor (8)
│   │   └── market-diodes (8)
│   │       ├── Diotec Semiconductor 1N4007 [market-1n4007] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor 1N5408 [market-1n5408] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor 1N5819 [market-1n5819] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor 1N5822 [market-1n5822] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor BA159 [market-ba159] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor SB560-3G [market-sb560-3g] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Diotec Semiconductor UF4007 [market-uf4007] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Diotec Semiconductor UF5408 [market-uf5408] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── EIC Semicon (1)
│   │   └── market-diodes (1)
│   │       └── EIC Semicon KBL406 [market-kbl406] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Infineon (3)
│   │   └── market-transistors (3)
│   │       ├── Infineon IRF540NPBF [market-irf540npbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Infineon IRF9540NPBF [market-irf9540npbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── Infineon IRFZ44NPBF [market-irfz44npbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Infineon Technologies (5)
│   │   ├── market-power (3)
│   │   │   ├── IRS2104STRPBF — 600 V half-bridge gate driver with interlocking dead time and shutdown [infineon-irs2104strpbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── IRS2110STRPBF — 500 V high-side/low-side gate driver with separate logic supply, return and shutdown [infineon-irs2110strpbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── IRS21844STRPBF — 600 V half-bridge driver with programmable dead time and separate logic/power returns, SOIC-14 variant [infineon-irs21844strpbf] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── switches-mosfets (2)
│   │       ├── IRF4905 P-channel MOSFET [irf4905] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── IRLZ44N N-channel MOSFET [irlz44n] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── InterFET (1)
│   │   └── market-transistors (1)
│   │       └── InterFET J175 [market-j175] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Lite-On (1)
│   │   └── market-opto (1)
│   │       └── Lite-On LTV-817 [market-ltv-817] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Microchip Technology (31)
│   │   ├── market-analog (15)
│   │   │   ├── MCP3008-I/P — Eight-channel, 10-bit SAR analog-to-digital converter with SPI interface [microchip-mcp3008-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP3208-CI/P — Eight-channel, 12-bit SAR analog-to-digital converter with SPI interface [microchip-mcp3208-ci-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP3304-BI/P — Eight-channel single-ended or four-channel differential, 13-bit SAR ADC with SPI interface [microchip-mcp3304-bi-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP4131-103E/P — Single-channel, 7-bit, 10 kΩ SPI digital potentiometer with volatile wiper memory [microchip-mcp4131-103e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP4725A0T-E/CH — Single-channel, 12-bit I2C DAC with nonvolatile EEPROM and external address bit [microchip-mcp4725a0t-e-ch] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── MCP4728-E/UN — Quad-channel, 12-bit I2C DAC with EEPROM, selectable internal references and output latch [microchip-mcp4728-e-un] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── MCP4822-E/P — Dual-channel, 12-bit SPI DAC with internal 2 [microchip-mcp4822-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP4921-E/P — Single-channel, 12-bit SPI DAC with external reference and output latch [microchip-mcp4921-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP4922-E/P — Dual-channel, 12-bit SPI DAC with separate external references, output latch and hardware shutdown [microchip-mcp4922-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP6002-I/P — Dual 1 MHz CMOS operational amplifier with rail-to-rail inputs and outputs, operating from 1 [microchip-mcp6002-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP6004-I/P — Quad 1 MHz CMOS operational amplifier with rail-to-rail inputs and outputs, operating from 1 [microchip-mcp6004-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP602-I/P — Dual 2 [microchip-mcp602-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP6022-I/P — Dual 10 MHz CMOS operational amplifier with rail-to-rail inputs and outputs [microchip-mcp6022-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP6542-I/P — Dual sub-microamp comparator with rail-to-rail inputs and push-pull logic outputs [microchip-mcp6542-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── MCP6562-E/SN — Dual low-power high-speed comparator with rail-to-rail inputs and push-pull logic outputs [microchip-mcp6562-e-sn] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-communications (6)
│   │   │   ├── MCP23008-E/P I2C 8-bit GPIO expander [mcp23008-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP23017-E/SP I2C 16-bit GPIO expander [mcp23017-e-sp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP23S08-E/P SPI 8-bit GPIO expander [mcp23s08-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP23S17-E/SP SPI 16-bit GPIO expander [mcp23s17-e-sp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MCP2515-I/P SPI CAN controller [mcp2515-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── MCP2562-E/P CAN transceiver [mcp2562-e-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── market-memory-display (8)
│   │   │   ├── 23LC1024-I/P 1-Mbit SPI/SDI/SQI serial SRAM [23lc1024-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC02B-I/P I2C Serial EEPROM, 2Kb [24lc02b-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC1025-I/P I2C Serial EEPROM, 1024Kb [24lc1025-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC16B-I/P I2C Serial EEPROM, 16Kb [24lc16b-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC256-I/P I2C Serial EEPROM, 256Kb [24lc256-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC512-I/P I2C Serial EEPROM, 512Kb [24lc512-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── 24LC64-I/P I2C Serial EEPROM, 64Kb [24lc64-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── 25LC256-I/P 256-Kbit SPI serial EEPROM [25lc256-i-p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── market-power (2)
│   │       ├── TC4420CPA — Single 6 A noninverting MOSFET gate driver with paired supply, ground and output contacts [microchip-tc4420cpa] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── TC4427CPA — Dual 1 [microchip-tc4427cpa] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Nexperia (2)
│   │   └── market-transistors (2)
│   │       ├── Nexperia BC807-40,215 [market-bc807-40-215] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── Nexperia BC817-40,215 [market-bc817-40-215] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── NXP Semiconductors (3)
│   │   └── market-communications (3)
│   │       ├── PCA9536D,118 4-bit I2C GPIO expander [pca9536d] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── PCF8574T/3,518 Quasi-bidirectional I2C expander [pcf8574t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── SC16IS752IPW,128 Dual UART bridge [sc16is752ipw] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── onsemi (33)
│   │   ├── market-diodes (2)
│   │   │   ├── onsemi MUR1560G [market-mur1560g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── onsemi MUR460G [market-mur460g] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── market-opto (7)
│   │   │   ├── onsemi 4N35M [market-4n35m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── onsemi 6N137M [market-6n137m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── onsemi 6N138M [market-6n138m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── onsemi H11AA1M [market-h11aa1m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── onsemi H11L1M [market-h11l1m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── onsemi MOC3021M [market-moc3021m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── onsemi MOC3063M [market-moc3063m] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── market-power (1)
│   │   │   └── MC34063AP1G — Buck, boost or inverting DC/DC controller with an internal switching transistor [onsemi-mc34063ap1g] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── market-transistors (23)
│   │       ├── onsemi 2N3904TA [market-2n3904ta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi 2N3906TA [market-2n3906ta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi 2N7000 [market-2n7000] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BC32725TA [market-bc32725ta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BC33725TA [market-bc33725ta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BC547BTA [market-bc547bta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BC557BTA [market-bc557bta] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BC847BLT1G [market-bc847blt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi BC857BLT1G [market-bc857blt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi BS170 [market-bs170] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi BSS138LT1G [market-bss138lt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi FQP27P06 [market-fqp27p06] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi J111 [market-j111] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi MMBT2222ALT1G [market-mmbt2222alt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi MMBT2907ALT1G [market-mmbt2907alt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi MMBT3904LT1G [market-mmbt3904lt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi MMBT3906LT1G [market-mmbt3906lt1g] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── onsemi MPSA06 [market-mpsa06] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi MPSA42 [market-mpsa42] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi MPSA56 [market-mpsa56] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi MPSA92 [market-mpsa92] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── onsemi PN2222ATA [market-pn2222ata] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── onsemi PN2907ATA [market-pn2907ata] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Panasonic (1)
│   │   └── market-opto (1)
│   │       └── Panasonic AQY214EH [market-aqy214eh] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Rectron (1)
│   │   └── market-diodes (1)
│   │       └── Rectron DB107 [market-db107] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Renesas Electronics (1)
│   │   └── market-power (1)
│   │       └── HIP4081AIPZ — 80 V full-bridge N-channel MOSFET driver with independent inputs and programmable turn-on delays [renesas-hip4081aipz] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Seeed Studio (7)
│   │   └── modules-seeed-extended-interfaces (7)
│   │       ├── Seeed Grove - 4-Channel 16-bit ADC(ADS1115) [seeed-module-109020041] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Seeed Grove - 5-Way Switch [seeed-module-111020048] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Seeed Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A) [seeed-module-103020293] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Seeed Grove - Bee Socket [seeed-module-103020002] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Seeed Grove - I2C ADC [seeed-module-103020013] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Seeed Grove - RS485 [seeed-module-103020193] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Seeed Grove 12 Channel Capacitive Touch Keypad (ATtiny1616) [seeed-module-101020636] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Semtech (3)
│   │   └── semtech-more (3)
│   │       ├── Semtech SX1261IMLTRT LoRa Transceiver [semtech-sx1261imltrt] [FP:M] [3D:A] [CAD:-] [BB:-]
│   │       ├── Semtech SX1262IMLTRT LoRa Transceiver [semtech-sx1262imltrt] [FP:M] [3D:A] [CAD:-] [BB:-]
│   │       └── Semtech SX1268IMLTRT LoRa Transceiver [semtech-sx1268imltrt] [FP:M] [3D:A] [CAD:-] [BB:-]
│   ├── STMicroelectronics (22)
│   │   ├── market-analog (1)
│   │   │   └── TS922IDT — Dual rail-to-rail operational amplifier with high output-current capability [st-ts922idt] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-diodes (1)
│   │   │   └── STMicroelectronics STPS20100CT [market-stps20100ct] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-opto (5)
│   │   │   ├── STMicroelectronics BTA06-600TRG [market-bta06-600trg] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── STMicroelectronics BTA16-600BRG [market-bta16-600brg] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── STMicroelectronics T405-600T [market-t405-600t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── STMicroelectronics TN1215-600B [market-tn1215-600b] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── STMicroelectronics TS420-600T [market-ts420-600t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-power (2)
│   │   │   ├── LM317T — ST 1 [st-lm317t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── SG3525AN — Regulating PWM controller with soft start, adjustable dead time and dual push-pull outputs [st-sg3525an] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── market-transistors (13)
│   │       ├── STMicroelectronics BD139 [market-bd139] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics BD140 [market-bd140] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics MJE340 [market-mje340] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics MJE350 [market-mje350] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics STGW40H120DF2 [market-stgw40h120df2] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics STP10NK60Z [market-stp10nk60z] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics STP55NF06L [market-stp55nf06l] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics TIP120 [market-tip120] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics TIP127 [market-tip127] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics TIP31C [market-tip31c] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics TIP32C [market-tip32c] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── STMicroelectronics TIP41C [market-tip41c] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── STMicroelectronics TIP42C [market-tip42c] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Texas Instruments (172)
│   │   ├── market-analog (49)
│   │   │   ├── ADS1015IDGSR — Four-channel, 12-bit delta-sigma ADC with programmable gain and I2C interface [ti-ads1015idgsr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── ADS1110A0IDBVR — Single-channel 16-bit differential ADC with onboard 2 [ti-ads1110a0idbvr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── ADS1115IDGSR — Four-channel, 16-bit delta-sigma ADC with programmable gain and I2C interface [ti-ads1115idgsr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── ADS1220IPWR — Four-channel, 24-bit delta-sigma ADC with programmable gain, reference options and SPI interface [ti-ads1220ipwr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── CD4051BE — Eight-channel bidirectional analog multiplexer/demultiplexer with separate analog and logic low rails [ti-cd4051be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4052BE — Dual four-channel bidirectional analog multiplexer/demultiplexer [ti-cd4052be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4053BE — Triple bidirectional SPDT analog switch with independent selection inputs [ti-cd4053be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4066BE — Quad independent bidirectional SPST CMOS analog switch [ti-cd4066be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4067BM96 — Sixteen-channel bidirectional analog multiplexer/demultiplexer, wide-body SOIC-24 variant [ti-cd4067bm96] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── INA114AP — Precision instrumentation amplifier with protected inputs and gain set by one external resistor [ti-ina114ap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── INA126UA/2K5 — Micropower instrumentation amplifier for bridge and battery-powered measurement circuits [ti-ina126ua-2k5] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── INA128P — Precision low-power instrumentation amplifier with externally programmable gain [ti-ina128p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── INA169NA/3K — High-side current-shunt monitor with a current output and external output load resistor [ti-ina169na-3k] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── INA180A2IDBVR — 26 V common-mode current-sense amplifier, A2 gain of 50 V/V and pinout A [ti-ina180a2idbvr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── INA219AIDCNR — Digital shunt-current and bus-voltage monitor with I2C interface [ti-ina219aidcnr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── INA226AIDGSR — High-side or low-side digital current, voltage and power monitor with a separate bus-voltage input [ti-ina226aidgsr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM311P — High-speed comparator with separate output-transistor emitter and collector [ti-lm311p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── LM324N — Quad low-power operational amplifier with input common-mode range including the negative supply [ti-lm324n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── LM339N — Quad comparator with four open-collector outputs [ti-lm339n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── LM393P — Dual comparator with open-collector outputs [ti-lm393p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── LMV324IDR — Quad low-voltage operational amplifier with rail-to-rail output for portable signal conditioning [ti-lmv324idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LMV358IDR — Dual low-voltage operational amplifier with rail-to-rail output for portable signal conditioning [ti-lmv358idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LMV393MX/NOPB — Dual comparator with open-collector outputs [ti-lmv393mx-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── NE5532P — Dual low-noise bipolar audio operational amplifier with strong output-drive capability [ti-ne5532p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── NE5534P — Low-noise audio operational amplifier with exposed compensation and balance terminals [ti-ne5534p] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── OPA134PA — Single FET-input audio operational amplifier [ti-opa134pa] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── OPA1612AIDR — Dual bipolar audio operational amplifier with low voltage noise and wide bandwidth [ti-opa1612aidr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA1642AIDR — Dual low-noise JFET-input audio operational amplifier with low distortion [ti-opa1642aidr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA1656IDR — Dual FET-input audio operational amplifier with low noise and low distortion [ti-opa1656idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA1688ID — Dual audio operational amplifier with high output-current drive and a 36 V supply capability [ti-opa1688id] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA192IDR — Single precision low-offset operational amplifier with rail-to-rail inputs and outputs and a 36 V supply capability [ti-opa192idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA197IDR — Single precision high-voltage operational amplifier with rail-to-rail inputs and outputs [ti-opa197idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA2134PA — Dual FET-input audio operational amplifier for low-distortion signal paths [ti-opa2134pa] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── OPA2320AIDR — Dual precision 20 MHz CMOS operational amplifier with rail-to-rail inputs and outputs [ti-opa2320aidr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA2333AID — Dual micropower zero-drift operational amplifier with rail-to-rail input and output [ti-opa2333aid] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA2350UA — Dual high-speed CMOS operational amplifier with rail-to-rail inputs and outputs [ti-opa2350ua] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── OPA350UA — Single high-speed CMOS operational amplifier with rail-to-rail inputs and outputs [ti-opa350ua] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TL071CP — Single low-noise JFET-input operational amplifier [ti-tl071cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TL072CP — Dual low-noise JFET-input operational amplifier for audio and high-impedance analog signals [ti-tl072cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TL074HIDR — Quad low-noise FET-input operational amplifier, enhanced H-generation variant [ti-tl074hidr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TL081CP — Single JFET-input operational amplifier [ti-tl081cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TL082CP — Dual JFET-input operational amplifier for high-input-impedance buffers and active filters [ti-tl082cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TL084CN — Quad JFET-input operational amplifier for high-input-impedance buffers and active filters [ti-tl084cn] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TLC2272CP — Dual low-noise LinCMOS operational amplifier with rail-to-rail output [ti-tlc2272cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TLC272CP — Dual low-power LinCMOS operational amplifier for single-supply analog circuits [ti-tlc272cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TLV2372ID — Dual 3 MHz CMOS operational amplifier with rail-to-rail inputs and outputs [ti-tlv2372id] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TLV9002IDR — Dual low-power 1 MHz operational amplifier for 1 [ti-tlv9002idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TLV9062IDR — Dual 10 MHz operational amplifier with rail-to-rail inputs and outputs for low-voltage circuits [ti-tlv9062idr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── TS5A3159DCKR — Single low-voltage SPDT analog switch, SC70-6 variant [ti-ts5a3159dckr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-cmos-logic (35)
│   │   │   ├── CD4001BE Quad Nor 2 inputs [cd4001be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4002BE Dual 4 input NOR gate [cd4002be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD40106BE Hex Schmitt trigger inverter [cd40106be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4011BE Quad Nand 2 inputs [cd4011be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4012BE Dual 4 inputs Nand [cd4012be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4013BE Dual D FlipFlop, Set & reset [cd4013be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4017BE Johnson Counter ( 10 outputs ) [cd4017be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4020BE Binary counter 14 stages (asynchronous) [cd4020be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4021BE 8-bit static shift register [cd4021be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4022BE Johnson Counter (8 states) [cd4022be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4023BE Triple Nand 3 inputs [cd4023be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4027BE Dual JK FlipFlop, set & reset [cd4027be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4028BE Decoder 4 to 10 lines [cd4028be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4029BE Up/Down Counter [cd4029be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4040BE Binary Counter 12 stages (Asynchronous) [cd4040be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4046BE Phase Comp & VCO [cd4046be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4047BE Monostable/Astable Multivibrator [cd4047be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4049UBE Hex Buffer Inverter [cd4049ube] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4050BE Hex Buffer [cd4050be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4060BE Binary counter (14-stages) and oscillator [cd4060be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4069UBE Hex inverter [cd4069ube] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4070BE Quad Xor 2 inputs [cd4070be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4071BE Quad Or 2 inputs [cd4071be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4072BE Dual 4 input OR gate [cd4072be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4073BE Triple And 3 inputs [cd4073be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4075BE Triple Or 3 inputs [cd4075be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4077BE Quad Xnor 2 inputs [cd4077be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4081BE Quad And 2 inputs [cd4081be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4093BE Quad 2-input NAND Schmitt-trigger gate [cd4093be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4094BE 8-stage shift-and-store bus register [cd4094be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4504BE CMOS Hex Voltage-Level Shifter for TTL-to-CMOS or CMOS-to-CMOS, DIP-16/SOIC-16/TSSOP-16 [cd4504be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4511BE BCD-to-7-segment latch/decoder/driver [cd4511be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4518BE Dual BCD Up-Counter [cd4518be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CD4520BE Dual Binary Up-Counter [cd4520be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── CD4543BE BCD to 7-segment latch/decoder/driver [cd4543be] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── market-communications (3)
│   │   │   ├── PCF8575DBR 16-bit quasi-bidirectional I2C expander [pcf8575dbr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SN65HVD230DR 3.3 V CAN transceiver [sn65hvd230dr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── TCA9554DWR 8-bit I2C GPIO expander [tca9554dwr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-hc-logic (61)
│   │   │   ├── SN74HC00N quad 2-input NAND gate [sn74hc00n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC02N quad 2-input NOR gate [sn74hc02n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC04N Hex Inverter [sn74hc04n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC08N Quad And2 [sn74hc08n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC109N Dual JK Flip-Flop, Set & Reset [sn74hc109n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC10N Triple 3-input NAND [sn74hc10n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC112N dual JK Flip-Flop, Set & Reset [sn74hc112n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC11N Triple 3-input AND [sn74hc11n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC125N Quad buffer 3-State outputs [sn74hc125n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC126N Quad buffer 3-State outputs [sn74hc126n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC132N Quad 2-input NAND Schmitt trigger [sn74hc132n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC138N 3-to-8 line decoder/multiplexer inverting, DIP-16/SOIC-16/SSOP-16 [sn74hc138n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC139N Dual Decoder 1 of 4, Active low outputs [sn74hc139n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC148N Priority Encoder 3 to 8 cascadable [sn74hc148n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC151N Multiplexer 8 to 1 [sn74hc151n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC153N Dual Multiplexer 4 to 1 [sn74hc153n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC157N Quad 2 to 1 line Multiplexer [sn74hc157n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC158N Quad inverting 2-to-1 multiplexer; G# high forces all outputs high [sn74hc158n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC161N Synchronous 4-bit programmable binary Counter [sn74hc161n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC163N Synchronous 4-bit programmable binary Counter [sn74hc163n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC164N 8-bit serial-in parallel-out shift register [sn74hc164n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC166N Shift Register 8-bit, parallel load [sn74hc166n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC174N Hex D-type Flip-Flop, reset [sn74hc174n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC175N 4-bit D Flip-Flop, reset [sn74hc175n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC191N 4-bit Synchronous Up/Down binary Counter [sn74hc191n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC193N Synchronous 4-bit Up/Down (2 clk) counter [sn74hc193n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC20N Dual 4-input NAND [sn74hc20n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC21N Dual 4-input AND [sn74hc21n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC240N 8-bit Buffer/Line Driver 3-state Inverting [sn74hc240n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC241N Octal Buffer and Line Driver With 3-State Output, complementary enables, non-inverting outputs [sn74hc241n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC244N 8-bit Buffer/Line Driver 3-state [sn74hc244n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC245N Octal BUS Transceivers, 3-State outputs [sn74hc245n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC251N Multiplexer 8 to 1, 3-state Outputs [sn74hc251n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC253N Dual Multiplexer 4 to 1, 3-State Outputs [sn74hc253n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC257N Quad 2 to 1 Multiplexer [sn74hc257n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC258N Quad 2 to 1 Multiplexer, inverting [sn74hc258n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC259N 8-bit addressable latch [sn74hc259n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC273N 8-bit D Flip-Flop, reset [sn74hc273n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC27N Triple 3-input NOR [sn74hc27n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC32N Quad 2-input OR [sn74hc32n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC365N Hex Bus Driver, 3-State Outputs [sn74hc365n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC367N Hex Bus Driver 3-state outputs [sn74hc367n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC368N Hex Bus Driver inverter, 3-state outputs [sn74hc368n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC373N 8-bit Latch, 3-state outputs [sn74hc373n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC374N 8-bit Register, 3-state outputs [sn74hc374n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC377N 8-bit Register [sn74hc377n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC393N Dual BCD 4-bit counter [sn74hc393n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC42N 4 to 10 line Decoder [sn74hc42n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC541N 8-bit Buffer/Line Driver 3-state outputs [sn74hc541n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC574N 8-bit Register, 3-state outputs [sn74hc574n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC594N 8-Bit Shift Registers With Output Registers [sn74hc594n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC688N 8-bit equality comparator with active-low output enable and equality output [sn74hc688n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC74N Dual D Flip-flop, Set & Reset [sn74hc74n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HC86N Quad 2-input XOR [sn74hc86n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT00N quad 2-input NAND gate [sn74hct00n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT08N Quad And2 [sn74hct08n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT125N Quad buffer 3-State outputs [sn74hct125n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT138N 3-to-8 line decoder/multiplexer inverting, DIP-16/SOIC-16/SSOP-16 [sn74hct138n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT14N Hex inverter schmitt trigger [sn74hct14n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SN74HCT245N Octal BUS Transceivers, 3-State outputs [sn74hct245n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── SN74HCT74N Dual D Flip-flop, Set & Reset [sn74hct74n] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── market-power (14)
│   │   │   ├── LM2662MX/NOPB — 200 mA switched-capacitor voltage converter with selectable oscillator frequency [ti-lm2662mx-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM2675M-ADJ/NOPB — 1 A SIMPLE SWITCHER step-down regulator, adjustable-output SOIC-8 variant [ti-lm2675m-adj-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM337T/NOPB — 1 [ti-lm337t-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM5007MM/NOPB — 75 V, 0 [ti-lm5007mm-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM5109BMA/NOPB — 100 V high-side/low-side gate driver with independent TTL/CMOS control inputs [ti-lm5109bma-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── LM723CN/NOPB — Precision adjustable voltage-regulator controller with current limit, reference and compensation connections [ti-lm723cn-nopb] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── LT1054CP — 100 mA charge-pump converter with regulation, reference output and shutdown input [ti-lt1054cp] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MAX660MX/NOPB — Switched-capacitor voltage converter with frequency-control input; no inductor is required [ti-max660mx-nopb] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TL431AIDBZR — Adjustable precision shunt regulator, DBZ SOT-23-3 pinout: cathode 1, reference 2 and anode 3 [ti-tl431aidbzr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── TL494CN — Voltage-mode PWM controller with two error amplifiers and two accessible output switches [ti-tl494cn] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── TPS2113APW — Automatic two-input power multiplexer with current limiting and reverse-current protection [ti-tps2113apw] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── UC3842AN — Current-mode PWM controller with 16 V turn-on threshold and near-100% maximum duty cycle [ti-uc3842an] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── UCC27524ADR — Dual 5 A low-side noninverting MOSFET gate driver with separate channel-enable inputs [ti-ucc27524adr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── UCC28C43DGKR — BiCMOS current-mode PWM controller with low startup current and near-100% maximum duty cycle [ti-ucc28c43dgkr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── prototyping-ics (6)
│   │   │   ├── TI LM358P Dual Operational Amplifier [ti-lm358p] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TI NE555P Precision Timer [ti-ne555p] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TI SN74HC14N Hex Schmitt-Trigger Inverter [ti-sn74hc14n] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TI SN74HC165N 8-Bit Input Shift Register [ti-sn74hc165n] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── TI SN74HC595N 8-Bit Output Shift Register [ti-sn74hc595n] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── TI ULN2003AN Seven-Channel Darlington Driver [ti-uln2003an] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   └── ti-wireless (4)
│   │       ├── TI CC1101 RGP0020C [ti-cc1101-rgp20] [FP:M] [3D:A] [CAD:+] [BB:-]
│   │       ├── TI CC1120 RHB0032E [ti-cc1120-rhb32] [FP:M] [3D:A] [CAD:+] [BB:-]
│   │       ├── TI CC1200 RHB0032E [ti-cc1200-rhb32] [FP:M] [3D:A] [CAD:+] [BB:-]
│   │       └── TI CC2500 RGP0020C [ti-cc2500-rgp20] [FP:M] [3D:A] [CAD:+] [BB:-]
│   ├── Toshiba (1)
│   │   └── market-opto (1)
│   │       └── Toshiba TLP241A(F [market-tlp241a-f] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Unspecified (3)
│   │   └── core-basics (3)
│   │       ├── 1N4148 Signal Diode [diode] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── N-Channel MOSFET [nmos] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── NPN Transistor [npn] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Vishay (20)
│   │   ├── market-diodes (16)
│   │   │   ├── Vishay 1N4448TAP [market-1n4448tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay 1N4733A-TAP [market-1n4733a-tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay 1N4742A-TAP [market-1n4742a-tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay BAV21-TAP [market-bav21-tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay BZX55C3V3-TAP [market-bzx55c3v3-tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay BZX55C5V1-TAP [market-bzx55c5v1-tap] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Vishay GBPC3508-E4/51 [market-gbpc3508-e4-51] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay GBU6J-E3/45 [market-gbu6j-e3-45] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay MB6S-E3/45 [market-mb6s-e3-45] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SMBJ12CA-E3/52 [market-smbj12ca-e3-52] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SMBJ33A-E3/52 [market-smbj33a-e3-52] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SMBJ5.0A-E3/52 [market-smbj5-0a-e3-52] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SMBJ58CA-E3/52 [market-smbj58ca-e3-52] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SS14-E3/61T [market-ss14-e3-61t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Vishay SS34-E3/57T [market-ss34-e3-57t] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── Vishay W10G-E4/51 [market-w10g-e4-51] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── market-opto (4)
│   │       ├── Vishay BPW34 [market-bpw34] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── Vishay TEPT4400 [market-tept4400] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Vishay TLCR5800 [market-tlcr5800] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Vishay TSAL6200 [market-tsal6200] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── WCH (1)
│   │   └── market-communications (1)
│   │       └── CH340G USB UART bridge [ch340g-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── WeEn Semiconductors (1)
│       └── market-opto (1)
│           └── WeEn Semiconductors BT169D,116 [market-bt169d-116] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Sensors (340)
│   ├── Adafruit (104)
│   │   ├── adafruit-ready (1)
│   │   │   └── Adafruit Ultimate GPS Breakout v3 [adafruit-ultimate-gps-v3-746] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── air-quality-sensors (2)
│   │   │   ├── Adafruit PMSA003I Particulate Matter Sensor [adafruit-pmsa003i-4632] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Adafruit SCD-40 CO₂, Temperature & Humidity Sensor [adafruit-scd40-5187] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── analog-devices (5)
│   │   │   ├── Adafruit ADT7410 Precision Temperature Sensor (QT) [adafruit-adt7410-4089-qt] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit ADXL345 Triple-axis Accelerometer (QT) [adafruit-adxl345-1231-qt] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit ADXL375 High-g Accelerometer [adafruit-adxl375-5374] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit MAX31855K Thermocouple Amplifier [adafruit-max31855-269] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit MAX31865 PT100 RTD Amplifier [adafruit-max31865-3328] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── audio-prototyping (2)
│   │   │   ├── Adafruit MAX9814 AGC Microphone Amplifier [adafruit-max9814-1713] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Adafruit SPH0645LM4H I²S MEMS Microphone [adafruit-sph0645-3421] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── common-sensors (3)
│   │   │   ├── Adafruit AHT20 Temperature & Humidity [adafruit-aht20-4566] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit BMP280 Barometric Pressure [adafruit-bmp280-2651] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Adafruit SHT31 Temperature & Humidity [adafruit-sht31-2857] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── core-modules (2)
│   │   │   ├── BME280 Environmental Sensor [bme280] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── INA219 Current Sensor [ina219] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── environment-sensors (4)
│   │   │   ├── Adafruit BMP390 Barometric Pressure & Temperature Sensor [adafruit-bmp390-4816] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit MAX31856 Universal Thermocouple Breakout [adafruit-max31856-3263] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Adafruit MPRLS Ported Pressure Sensor [adafruit-mprls-3965] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Adafruit SHT45 Precision Temperature & Humidity Sensor [adafruit-sht45-5665] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-adafruit-additional-sensors (1)
│   │   │   └── Adafruit MagTag - 2.9" Grayscale E-Ink WiFi Display [adafruit-module-4800] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── modules-adafruit-sensors (80)
│   │   │   ├── Adafruit 9-DOF Absolute Orientation IMU Fusion Breakout - BNO055 [adafruit-module-2472] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit ALS-PT19 Analog Light Sensor Breakout [adafruit-module-2748] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit APDS9960 Proximity, Light, RGB, and Gesture Sensor [adafruit-module-3595] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit APDS9999 Proximity, Lux Light & Color Sensor [adafruit-module-6461] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit AS5600 Magnetic Angle Sensor [adafruit-module-6357] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit AS7262 6-Channel Visible Light / Color Sensor Breakout [adafruit-module-3779] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit AS7341 10-Channel Light / Color Sensor Breakout [adafruit-module-4698] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit AS7343 14-Channel Light / Color Sensor Breakout [adafruit-module-6477] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit BH1750 Light Sensor - STEMMA QT / Qwiic [adafruit-module-4681] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit BME680 - Temperature, Humidity, Pressure and Gas Sensor [adafruit-module-3660] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit EMC2101 I2C PC Fan Controller and Temperature Sensor [adafruit-module-4808] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit ENS160 MOX Gas Sensor - Sciosense CCS811 Upgrade [adafruit-module-5606] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit ENS161 MOX Gas Sensor [adafruit-module-6431] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Grayscale 1.5" 128x128 OLED Graphic Display [adafruit-module-4741] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit HTU21D-F Temperature & Humidity Sensor Breakout Board [adafruit-module-1899] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit HTU31 Temperature & Humidity Sensor Breakout Board [adafruit-module-4832] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit HX711 24-bit ADC for Load Cells / Strain Gauges [adafruit-module-5974] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit INA228 - I2C 85V, 20-bit High or Low Side Power Monitor [adafruit-module-5832] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit INA237 85V 10A 16-bit DC Current Voltage Power Monitor [adafruit-module-6340] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit INA3221 - Triple 0-26 VDC, ±3.2 Amp Power Monitor [adafruit-module-6062] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LC709203F LiPoly / LiIon Fuel Gauge and Battery Monitor [adafruit-module-4712] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LIS331 Triple-Axis Wide-Range ±24g Accelerometer [adafruit-module-4626] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LPS28 (LPS28DFW) Pressure Sensor - STEMMA QT / Qwiic [adafruit-module-6067] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LSM303AGR Accelerometer Magnetometer - STEMMA QT Qwiic [adafruit-module-4413] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LSM6DS3TR-C + LIS3MDL - Precision 9 DoF IMU [adafruit-module-5543] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LSM6DS3TR-C 6-DoF Accel + Gyro IMU [adafruit-module-4503] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LSM6DSOX 6 DoF Accelerometer and Gyroscope [adafruit-module-4438] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LTR-329 Light Sensor - STEMMA QT / Qwiic [adafruit-module-5591] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit LTR390 UV Light Sensor - STEMMA QT / Qwiic [adafruit-module-4831] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MAX44009 Wide-range Lux Light Sensor - 188,000 Lux Max [adafruit-module-6498] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MCP9601 (MCP96L01) I2C Thermocouple Amplifier [adafruit-module-5165] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MCP9808 High Accuracy I2C Temperature Sensor Breakout [adafruit-module-5027] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MiCS5524 CO, Alcohol and VOC Gas Sensor Breakout [adafruit-module-3199] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MLX90632 FIR Remote Thermal Temperature Sensor [adafruit-module-6403] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MS8607 Pressure Humidity Temperature PHT Sensor [adafruit-module-4716] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit MSA311 Triple Axis Accelerometer - STEMMA QT / Qwiic [adafruit-module-5309] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit PCT2075 Temperature Sensor - STEMMA QT / Qwiic [adafruit-module-4369] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Proximity Trinkey - USB APDS9960 Sensor Dev Board [adafruit-module-5022] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit QMC5883P - Triple Axis Magnetometer [adafruit-module-6388] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit SCD-30 - NDIR True CO2 Temperature and Humidity Sensor [adafruit-module-4867] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit SCD-41 - True CO2 Temperature and Humidity Sensor [adafruit-module-5190] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Sensirion SHTC3 Temperature & Humidity Sensor [adafruit-module-4636] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit SGP30 Air Quality Sensor Breakout - VOC and eCO2 [adafruit-module-3709] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit SGP40 Air Quality Sensor Breakout - VOC Index [adafruit-module-4829] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit SGP41 Multi-Pixel Gas Sensor Breakout - VOC & NOx [adafruit-module-6455] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Si7021 Temperature & Humidity Sensor Breakout Board [adafruit-module-3251] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Simple Soil Moisture Sensor - For micro:bit, and more [adafruit-module-6362] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit SPA06-003 Temperature + Pressure Sensor [adafruit-module-6420] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit STCC4 and SHT41 - CO2, Temperature & Humidity Sensor [adafruit-module-6478] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit STEMMA Reflective Photo Interrupt Sensor - TCRT1000 [adafruit-module-5913] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit STEMMA Soil Sensor - I2C Capacitive Moisture Sensor [adafruit-module-4026] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── Adafruit STHS34PF80 IR Presence / Motion Sensor [adafruit-module-6426] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TCS3430 / TCS34303 Ambient Tri-Stimulus Color Sensor [adafruit-module-6479] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TLV493D Triple-Axis Magnetometer - STEMMA QT / Qwiic [adafruit-module-4366] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TMAG5273 (A1) 3D Hall Effect Magnetometer Breakout [adafruit-module-6489] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TMF8806 Time of Flight Distance Sensor - 10mm to 5m [adafruit-module-6501] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TMP117 ±0.1°C High Accuracy I2C Temperature Sensor [adafruit-module-4821] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TMP119 High-Precision ±0.03°C I2C Temperature Sensor [adafruit-module-6482] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TMP235 - Plug-and-Play STEMMA Analog Temperature Sensor [adafruit-module-4686] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Triple-Axis Accelerometer - ±2/4/8g @ 14-bit - MMA8451 [adafruit-module-2019] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Triple-axis Magnetometer - LIS2MDL [adafruit-module-4488] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Triple-axis Magnetometer - MMC5603 [adafruit-module-5579] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit TSL2591 High Dynamic Range Digital Light Sensor [adafruit-module-1980] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VCNL4020 Proximity and Light Sensor - STEMMA QT / Qwiic [adafruit-module-5810] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VCNL4030 Proximity and Lux Sensor - STEMMA QT / Qwiic [adafruit-module-6491] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VCNL4040 Proximity and Lux Sensor - STEMMA QT / Qwiic [adafruit-module-4161] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VCNL4200 Long Distance IR Proximity and Light Sensor [adafruit-module-6064] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VL53L0X Time of Flight Distance Sensor - ~30 to 1000mm [adafruit-module-3317] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VL53L1X Time of Flight Distance Sensor - ~30 to 4000mm [adafruit-module-3967] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VL53L4CD Time of Flight Distance Sensor - ~1 to 1300mm [adafruit-module-5396] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit VL53L4CX Time of Flight Distance Sensor - ~1 to 6000mm [adafruit-module-5425] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Adafruit Wide-Range Triple-axis Magnetometer - MLX90393 [adafruit-module-4022] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── ADXL343 - Triple-Axis Accelerometer (+-2g/4g/8g/16g) w/ I2C/SPI [adafruit-module-4097] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Analog UV Light Sensor Breakout - GUVA-S12SD [adafruit-module-1918] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── CAP1188 - 8-Key Capacitive Touch Sensor Breakout - I2C or SPI [adafruit-module-1602] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── INA169 Analog DC Current Sensor Breakout - 60V 5A Max [adafruit-module-1164] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── L3GD20H Triple-Axis Gyro Breakout Board - L3GD20/L3G4200 Upgrade [adafruit-module-1032] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MPL115A2 - I2C Barometric Pressure/Temperature Sensor [adafruit-module-992] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── MPL3115A2 - I2C Barometric Pressure/Altitude/Temperature Sensor [adafruit-module-1893] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Thermocouple Amplifier with 1-Wire Breakout Board - MAX31850K [adafruit-module-1727] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── motion-sensors (4)
│   │       ├── Adafruit BNO085 9-DoF Orientation IMU [adafruit-bno085-4754] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Adafruit LIS3DH 3-Axis Accelerometer [adafruit-lis3dh-2809] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Adafruit LIS3MDL 3-Axis Magnetometer [adafruit-lis3mdl-4479] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── Adafruit LSM6DSOX + LIS3MDL 9-DoF IMU [adafruit-lsm6dsox-lis3mdl-4517] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── ams OSRAM (2)
│   │   └── market-optical-sensing (2)
│   │       ├── ams OSRAM AS7341-DLGM [market-as7341-dlgm] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── ams OSRAM TSL25911FN [market-tsl25911fn] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Analog Devices (10)
│   │   └── market-sensors (10)
│   │       ├── ADT7310TRZ-REEL 16-bit SPI temperature sensor [adt7310trz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── ADT7410TRZ 16-bit I2C temperature sensor [adt7410trz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── ADXL335BCPZ Analog3-axis accelerometer [adxl335bcpz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── ADXL345BCCZ-RL7 Digital3-axis accelerometer [adxl345bccz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── ADXL362BCCZ-RL7 Micropower3-axis accelerometer [adxl362bccz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── ADXL372BCCZ-RL7 High-gshock accelerometer [adxl372bccz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── DS18B20+ 1-Wire digital thermometer [ds18b20-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── MAX31855KASA+ Thermocouple temperature converter [max31855kasa-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── MAX6675ISA+ Thermocouple temperature converter [max6675isa-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── TMP36GT9Z Offset analog temperature sensor [tmp36gt9z-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Bosch Sensortec (5)
│   │   └── market-sensors (5)
│   │       ├── BMA400 Motionwake-up accelerometer [bma400-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── BME680 Gas pressure humidity sensor [bme680-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── BME688 Gas-scanning environmental sensor [bme688-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── BMI270 6-axiswearable IMU [bmi270-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── BMP581 I3C barometric pressure sensor [bmp581-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── DFRobot (55)
│   │   ├── common-sensors (2)
│   │   │   ├── DFRobot Gravity Capacitive Soil Moisture Sensor [dfrobot-capacitive-soil-sen0193] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── DFRobot Gravity DHT22 Temperature & Humidity [dfrobot-dht22-sen0137] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── core-modules (1)
│   │   │   └── RS-485 Soil Sensor [rs485-soil] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── dfrobot-more (3)
│   │   │   ├── DFRobot Gravity PAJ7620U2 Gesture Sensor SEN0315 [dfrobot-sen0315-paj7620u2] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── DFRobot Gravity pH Sensor V2 SEN0161-V2 [dfrobot-sen0161-v2-ph] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── DFRobot Gravity TDS Sensor SEN0244 [dfrobot-sen0244-tds] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── modules-dfrobot-fermion-sensors (16)
│   │   │   ├── DFRobot Fermion: AS7341 11-Channel Visible Light Sensor (Breakout) [dfrobot-fermion-as7341-sen0365] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: BMM350 Triple-Axis Magnetometer Sensor for AR / VR (Breakout) [dfrobot-fermion-bmm350-sen0622] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: I2C H3LIS200DL Triple Axis Accelerometer (Breakout) (±100g/±200g) [dfrobot-fermion-h3lis200dl-sen0408] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DFRobot Fermion: LIS2DW12 Triple Axis Accelerometer (Breakout) (±16g) [dfrobot-fermion-lis2dw12-sen0405] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DFRobot Fermion: LWLP5000 Differential Pressure Sensor - ±500pa (Breakout) [dfrobot-fermion-lwlp5000-sen0343] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: MCP9808 High Accuracy Temperature Sensor (Breakout, I2C) [dfrobot-fermion-mcp9808-sen0435] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS H2 & NOx Gas Detector - MiCS-2714 Sensor (1-1000ppm, Breakout) [dfrobot-fermion-mics2714-sen0441] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Microphone Module - S15OT421(Breakout) [dfrobot-fermion-s15ot421-sen0487] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Multi-Gas Detector - CO/CH4/Ethanol Sensor (1-1000ppm, Breakout) [dfrobot-fermion-mics5524-sen0440] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: SGP40 VOC Air Quality Sensor - Smart IAQ Monitoring (Breakout) [dfrobot-fermion-sgp40-sen0392] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: SHT31-F Digital Temperature & Humidity Sensor (Breakout, I2C) [dfrobot-fermion-sht31-f-sen0332] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: STS35 High Accuracy Digital Temperature Sensor (Breakout) [dfrobot-fermion-sts35-sen0434] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: TCS3430 Tristimulus Color Sensor (Breakout) [dfrobot-fermion-tcs3430-sen0403] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: TMF8801 ToF Distance Ranging Sensor (20-2500mm) (Breakout, I2C) [dfrobot-fermion-tmf8801-sen0430] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── DFRobot Fermion: VL53L3CX ToF Distance Ranging Sensor (25-3000mm) (Breakout) [dfrobot-fermion-vl53l3cx-sen0378] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── DFRobot Fermion: VL6180X ToF Distance Ranging Sensor (5-100mm) (Breakout) [dfrobot-fermion-vl6180x-sen0427] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── modules-dfrobot-gas (11)
│   │   │   ├── DFRobot Fermion: Formaldehyde Sensor (Breakout, 0-3ppm MEMS HCHO Detection, Low Power) [dfrobot-fermion-hcho-sen0563] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: H2S Gas Sensor – Hydrogen Sulfide Detector (Breakout, 0.5-50ppm, MEMS, Low Power) [dfrobot-fermion-h2s-sen0568] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Carbon Monoxide CO Gas Detection Sensor (Breakout, 5-5000ppm) [dfrobot-fermion-co-sen0564] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Ethanol Gas Sensor - Compact EtOH Detector (1-500ppm, Breakout) [dfrobot-fermion-ethanol-sen0569] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Hydrogen H2 Gas Detection Sensor (Breakout, 0.1-1000ppm) [dfrobot-fermion-h2-sen0572] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Methane CH4 Gas Detection Sensor (Breakout, 1-10000ppm) [dfrobot-fermion-ch4-sen0565] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Nitrogen Dioxide NO2 Gas Detection Sensor (Breakout, 0.1-10ppm) [dfrobot-fermion-no2-sen0574] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Odor Smell Gas Detection Sensor (Breakout, 0.5-50ppm) [dfrobot-fermion-odor-sen0571] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: MEMS Smoke Detection Sensor - 10-1000ppm Range (Ethanol Compatible, Breakout) [dfrobot-fermion-smoke-sen0570] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: NH3 Gas Sensor – Ammonia Detector (Breakout, 1-300ppm, MEMS, Low Power) [dfrobot-fermion-nh3-sen0567] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── DFRobot Fermion: VOC Gas Sensor – Volatile Organic Compounds Detector (Breakout, 1-500ppm, MEMS) [dfrobot-fermion-voc-sen0566] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-dfrobot-motion-relays (8)
│   │   │   ├── DFRobot Fermion: BMV080 Air Quality Sensor (Breakout, PM1/PM2.5/PM10, I2C/SPI) [dfrobot-bmv080-sen0663] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: Compact 10DOF IMU Sensor for Motion, Heading & Pressure Sensing (24×19mm, I2C, Breakout) [dfrobot-fermion-10dof-sen0697] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: Compact 9DOF IMU Sensor for Motion & Heading Integration (24×19 mm, I2C, Breakout) [dfrobot-fermion-9dof-sen0695] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Fermion: ICP-10111 Pressure Sensor (Breakout, I2C) [dfrobot-icp10111-sen0516] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── DFRobot Gravity: 10DOF IMU Sensor for Motion, Heading & Altitude Changes (I2C / UART, Plug & Play) [dfrobot-gravity-10dof-sen0696] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── DFRobot Gravity: 6DOF IMU Sensor for Motion & Gesture Detection (I2C / UART, Plug & Play) [dfrobot-gravity-6dof-sen0692] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── DFRobot Gravity: 9DOF IMU Sensor for Motion, Heading & Orientation (I2C / UART, Plug & Play) [dfrobot-gravity-9dof-sen0694] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   └── DFRobot Gravity: UV Index Sensor (240-370nm, UVA, UVB, UVC) [dfrobot-uv-index-240-370-sen0636] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── modules-dfrobot-native (2)
│   │   │   ├── DFRobot Fermion: BMM150 Triple Axis Magnetometer Sensor (Breakout) [dfrobot-fermion-bmm150-sen0419] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── DFRobot Fermion: GR10-30 Gesture Sensor (Breakout, UART & I2C, 12 Gestures, 0~30cm) [dfrobot-fermion-gr10-30-sen0543] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   ├── modules-dfrobot-peripherals (2)
│   │   │   ├── DFRobot Fermion: BNO055 Intelligent 9-axis Sensor (Breakout) [dfrobot-bno055-sen0374] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── DFRobot Fermion: MAX30102 PPG Heart Rate and Oximeter Sensor V2.0 (Breakout, I2C / UART) [dfrobot-max30102-v2-sen0344] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── modules-dfrobot-sensors (10)
│   │       ├── DFRobot Fermion: AHT20 Temperature and Humidity Sensor (Breakout) [dfrobot-aht20-fermion-sen0527] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Fermion: BMP280 Digital Pressure Sensor (Breakout) [dfrobot-bmp280-sen0372] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Fermion: BMP581 High-Precision Barometric Pressure & Temperature Sensor (Breakout, I2C/I3C/SPI, ±0.3hPa) [dfrobot-bmp581-fermion-sen0667] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DFRobot Fermion: BMP585 High-Precision Barometric Pressure & Temperature Sensor (±0.3 hPa, I2C / SPI / I3C) [dfrobot-bmp585-fermion-sen0666] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── DFRobot Fermion: Compact Low-Power 6DOF IMU Sensor for Embedded Motion Sensing (16x16mm, I2C, Breakout) [dfrobot-bmi323-fermion-sen0693] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Fermion: ENS160 Smart Air Quality Sensor - TVOC/eCO2/AQI Monitor (Breakout) [dfrobot-ens160-sen0515] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Gravity: AHT20 Temperature and Humidity Sensor [dfrobot-aht20-gravity-sen0528] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Gravity: BMP581 Barometric Pressure Sensor (±0.3hPa High Accuracy, I2C / UART) [dfrobot-bmp581-gravity-sen0665] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── DFRobot Gravity: BMP585 High-Precision Barometric Pressure & Temperature Sensor (I2C / UART) [dfrobot-bmp585-gravity-sen0664] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── DFRobot Gravity: LTR390 UV Light Sensor (280nm-430nm, UVA, UVB) [dfrobot-ltr390-sen0540] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── HTC Sensor (1)
│   │   └── force-sensors (1)
│   │       └── TAL220B 5 kg Load Cell [sparkfun-tal220b-14729] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Infineon Technologies (2)
│   │   └── market-hall-angle (2)
│   │       ├── AS5048A-HTSP-TSSOP14-02 — 14-bit absolute rotary-angle sensor with SPI and PWM interfaces [infineon-as5048a-htsp-tssop14-02] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── AS5600-ASOM-SOIC8 — 12-bit contactless rotary-angle sensor with analog/PWM output and I2C configuration [infineon-as5600-asom-soic8] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Interlink Electronics (1)
│   │   └── force-sensors (1)
│   │       └── Interlink FSR 402 Force-Sensing Resistor [interlink-fsr402-44-29103] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Joy-IT (3)
│   │   ├── common-sensors (1)
│   │   │   └── HC-SR501 Adjustable PIR Motion Sensor [hc-sr501-joy-it] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── diy-kit-sensors (2)
│   │       ├── Joy-IT KY-003 A3144 Hall Sensor [joyit-ky003-hall] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Joy-IT KY-037 Microphone Threshold Sensor [joyit-ky037-sound-threshold] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Keyestudio (14)
│   │   ├── common-sensors (8)
│   │   │   ├── HC-SR04 Ultrasonic Distance Module [hc-sr04-ks0328] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio BH1750 Ambient Light Sensor [keyestudio-bh1750-ks0278] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio Capacitive Touch Sensor [keyestudio-touch-ks0031] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio DHT11 Temperature & Humidity [keyestudio-dht11-ks0034] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio DS18B20 Temperature Sensor [keyestudio-ds18b20-ks0023] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio IR Obstacle Avoidance Sensor [keyestudio-ir-obstacle-ks0051] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── Keyestudio KS0052 PIR Motion Sensor [keyestudio-pir-ks0052] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Keyestudio MPU6050 Gyroscope & Accelerometer [keyestudio-mpu6050-ks0170] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── diy-kit-sensors (6)
│   │       ├── Keyestudio KS0022 LM35 Temperature Sensor [keyestudio-ks0022-lm35] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0028 Photocell Sensor [keyestudio-ks0028-photocell] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0036 Flame Sensor [keyestudio-ks0036-flame] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0040 MQ-2 Gas Sensor [keyestudio-ks0040-mq2] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0048 Water Level Sensor [keyestudio-ks0048-water-level] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Keyestudio KS0203 Rain / Steam Sensor [keyestudio-ks0203-rain-steam] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Lite-On (1)
│   │   └── market-optical-sensing (1)
│   │       └── Lite-On LTR-390UV-01 [market-ltr-390uv-01] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── M5Stack (2)
│   │   └── m5stack-units (2)
│   │       ├── M5Stack Unit Light U021 [m5stack-unit-light-u021] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── M5Stack Unit PIR U004 [m5stack-unit-pir-u004] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── MATEKSYS (1)
│   │   └── fpv-navigation (1)
│   │       └── Matek M10Q-5883 GNSS and Compass [matek-m10q-5883] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Microchip Technology (6)
│   │   └── market-sensors (6)
│   │       ├── AT42QT1010-TSHR Single-key charge-transfer touch sensor [at42qt1010-tshr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── AT42QT1070-SSUR Seven-key I2C touch controller [at42qt1070-ssur] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── CAP1188-1-CP-TR Eight-key touch and LED controller [cap1188-1-cp-tr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── CAP1203-1-SN-TR Three-key touch controller [cap1203-1-sn-tr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── MCP9700AT-E/TT Micropower analog temperature sensor [mcp9700at-e-tt] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── MCP9808-E/MS I2C temperature sensor [mcp9808-e-ms] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── MIKROE (1)
│   │   └── mikroe-click (1)
│   │       └── MIKROE Light Click MIKROE-1424 [mikroe-light-click-1424] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── NXP (1)
│   │   └── nxp-ready (1)
│   │       └── NXP BRKT-STBC-AGM01 9-Axis Sensor Breakout [nxp-brkt-stbc-agm01] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── NXP Semiconductors (1)
│   │   └── market-sensors (1)
│   │       └── LM75BD,118 I2C temperature watchdog [lm75bd-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Pololu (4)
│   │   ├── common-sensors (2)
│   │   │   ├── Pololu VL53L0X Time-of-Flight Carrier [pololu-vl53l0x-2490] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── Pololu VL53L1X Time-of-Flight Carrier [pololu-vl53l1x-3415] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   └── pololu-more (2)
│   │       ├── Pololu QTR-1A Reflectance Sensor [pololu-qtr-1a-958] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Pololu QTR-1RC Reflectance Sensor [pololu-qtr-1rc-959] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── Quectel (3)
│   │   └── cellular-gnss (3)
│   │       ├── Quectel LC76G (AB) [quectel-lc76g-ab] [FP:?] [3D:A] [CAD:+] [BB:-]
│   │       ├── Quectel LC76G (PA) [quectel-lc76g-pa] [FP:?] [3D:A] [CAD:+] [BB:-]
│   │       └── Quectel LC76G (PB) [quectel-lc76g-pb] [FP:?] [3D:A] [CAD:+] [BB:-]
│   ├── RobotDyn (1)
│   │   └── robotdyn-more (1)
│   │       └── RobotDyn 25 V DC Voltage Sensor [robotdyn-25v-voltage-sensor] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── ROHM (1)
│   │   └── market-optical-sensing (1)
│   │       └── ROHM BH1750FVI-TR [market-bh1750fvi-tr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── ScioSense (1)
│   │   └── market-sensors (1)
│   │       └── ENS160-BGLT Digital multi-gas air-quality sensor [ens160-bglt-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Seeed Studio (40)
│   │   ├── force-sensors (1)
│   │   │   └── Seeed Grove SW-420 Vibration Sensor [seeed-sw420-101020586] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── modules-seeed-extended-sensing (16)
│   │   │   ├── Seeed Grove - 6-Axis Accelerometer&Gyroscope(BMI088) [seeed-module-101020584] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Analog Microphone [seeed-module-101020852] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - EMG Detector [seeed-module-101020058] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Finger-clip Heart Rate Sensor [seeed-module-103020024] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - I2C High Accuracy Temp&Humi Sensor(SHT35) [seeed-module-101020592] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - Integrated Pressure Sensor Kit [seeed-module-110020248] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - LED Matrix Driver (HT16K33) [seeed-module-105020074] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - Optical Rotary Encoder(TCUT1600X01) [seeed-module-101020587] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - ORP Sensor Kit Pro [seeed-module-110020370] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - PH Sensor Kit (E-201C-Blue) [seeed-module-110020291] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Step Counter(BMA456) [seeed-module-101020583] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - TDS Sensor [seeed-module-101020753] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - VOC and eCO2 Gas Sensor(SGP30) [seeed-module-101020512] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Water Level Sensor [seeed-module-101020635] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - ±5A DC/AC Current Sensor (ACS70331) [seeed-module-101020615] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Seeed Grove Smart IR Gesture Sensor (PAJ7660) [seeed-module-101991067] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-seeed-sensing (17)
│   │   │   ├── Seeed Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) [seeed-grove-as5600-101020692] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - 3-Axis Analog Accelerometer [seeed-grove-adxl335-101020051] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - 3-Axis Digitial Compass v2.0 [seeed-grove-compass-v2-101020492] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Barometer (High-Accuracy) [seeed-grove-hp206c-101020068] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Barometer Sensor (BMP280) [seeed-grove-bmp280-101020192] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - Barometer Sensor(BME280) [seeed-grove-bme280-101020193] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - CO2 & Temperature & Humidity Sensor (SCD30) [seeed-grove-scd30-101020634] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - CO2 & Temperature & Humidity Sensor (SCD41) [seeed-grove-scd41-101020952] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - D7S Vibration Sensor [seeed-grove-d7s-101021096] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── Seeed Grove - Digital Infrared Temperature Sensor [seeed-grove-digital-ir-temperature-101020077] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Digital PIR Sensor [seeed-grove-digital-pir-101020793] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Gesture V1.0 [seeed-grove-gesture-paj7620-101020083] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - GSR Sensor [seeed-grove-gsr-101020052] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Infrared Temperature Sensor Array(AMG8833) [seeed-grove-amg8833-101020557] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Round Force Sensor FSR402 [seeed-grove-fsr402-101020553] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Temperature Humidity Pressure Gas Sensor(BME680) [seeed-grove-bme680-101020513] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   │   └── Seeed Grove - Time of Flight Distance Sensor VL53L0X [seeed-grove-vl53l0x-101020532] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── modules-seeed-source (5)
│   │   │   ├── Seeed Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor [seeed-grove-aht20-101990644] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Digital Light Sensor [seeed-grove-digital-light-101020030] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Moisture Sensor [seeed-grove-moisture-101020008] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Seeed Grove - Sound Sensor [seeed-grove-sound-101020023] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Seeed Grove - Switch(P) [seeed-grove-switch-p-101020004] [FP:C] [3D:A] [CAD:+] [BB:-]
│   │   └── seeed-more (1)
│   │       └── Seeed Grove HCHO Sensor 101020001 [seeed-grove-hcho-101020001] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Sensirion (6)
│   │   └── market-sensors (6)
│   │       ├── SGP40-D-R4 VOC gas sensor [sgp40-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SGP41-D-R4 VOC and NOx gas sensor [sgp41-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SHT20-TR-1.5KS Humidity and temperature sensor [sht20-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SHT31-DIS-B2.5KS Humidity and temperature sensor [sht31-dis-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── SHT45-AD1B-R3 Heated humidity and temperature sensor [sht45-ad1b-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── SHTC3-TR-2.5KS Low-power humidity and temperature sensor [shtc3-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── SparkFun Electronics (48)
│   │   ├── analog-devices (1)
│   │   │   └── SparkFun AD8232 Single-lead Heart Rate Monitor [sparkfun-ad8232-sen12650] [FP:C] [3D:A] [CAD:+] [BB:+]
│   │   ├── force-sensors (1)
│   │   │   └── SparkFun HX711 Load Cell Amplifier [sparkfun-hx711-13879] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   ├── modules-sparkfun-additional-sensors (7)
│   │   │   ├── SparkFun 6DoF IMU Breakout - LSM6DSV16X (Qwiic) [sparkfun-module-sen21325] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Absolute Digital Barometer - LPS28DFW (Qwiic) [sparkfun-module-sen21221] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun CO2 Humidity and Temperature Sensor - SCD40 (Qwiic) [sparkfun-module-sen22395] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Humidity Sensor Breakout - SHTC3 (Qwiic) [sparkfun-module-sen16467] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Micro 6DoF IMU - ISM330DHCX (Qwiic) [sparkfun-module-sen20176] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Micro Triple Axis Accelerometer Breakout - BMA400 (Qwiic) [sparkfun-module-sen21207] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── SparkFun Temperature Sensor - STTS22H (Qwiic) [sparkfun-module-sen21262] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   ├── modules-sparkfun-sensors (36)
│   │   │   ├── SparkFun Altitude/Pressure Sensor Breakout - MPL3115A2 [sparkfun-module-sen11084] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Ambient Light Sensor Breakout - TEMT6000 [sparkfun-module-bob08688] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Atmospheric Sensor Breakout - BME280 [sparkfun-module-sen13676] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Current Sensor Breakout - INA169 [sparkfun-module-sen12040] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Digital Compass - HMC6343 [sparkfun-module-sen12916] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Digital Temperature Sensor Breakout - TMP102 [sparkfun-module-sen13314] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Distance Sensor Breakout - 4 Meter, VL53L1X (Qwiic) [sparkfun-module-sen14722] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Environmental Sensor Breakout - BME680 (Qwiic) [sparkfun-module-sen16466] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun High Precision Temperature Sensor - TMP117 (Qwiic) [sparkfun-module-sen15805] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │   │   ├── SparkFun Indoor Air Quality Sensor - ENS160 (Qwiic) [sparkfun-module-sen20844] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun IR Thermometer Evaluation Board - MLX90614 [sparkfun-module-sen10740] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Line Follower Array [sparkfun-module-sen13582] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Line Sensor Breakout - QRE1113 (Analog) [sparkfun-module-rob09453] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Line Sensor Breakout - QRE1113 (Digital) [sparkfun-module-rob09454] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun LiPo Fuel Gauge [sparkfun-module-tol20680] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Micro Magnetometer - MMC5983MA (Qwiic) [sparkfun-module-sen19921] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Photo Interrupter Breakout Board - GP1A57HRJ00F [sparkfun-module-bob09322] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun PIR Breakout - 170uA (EKMC4607112K) [sparkfun-module-sen17372] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Pressure Sensor Breakout - MS5803-14BA [sparkfun-module-sen12909] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Proximity Sensor Breakout - 20cm, VCNL4040 (Qwiic) [sparkfun-module-sen15177] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Pulse Oximeter and Heart Rate Sensor - MAX30101 & MAX32664 (Qwiic) [sparkfun-module-sen15219] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Qwiic MicroPressure Sensor [sparkfun-module-sen16476] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Qwiic PIR - 170uA (EKMC4607112K) [sparkfun-module-sen17374] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun RedBot Sensor - Accelerometer [sparkfun-module-sen12589] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun RedBot Sensor - Line Follower [sparkfun-module-sen11769] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun RGB Light Sensor - ISL29125 [sparkfun-module-sen12829] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Soil Moisture Sensor [sparkfun-module-sen13322] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── SparkFun Sound Detector [sparkfun-module-sen12642] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun ToF Range Finder Breakout - VL6180 [sparkfun-module-sen12784] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun ToF Range Finder Sensor - VL6180 [sparkfun-module-sen12785] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Triple Axis Accelerometer Breakout - ADXL335 [sparkfun-module-sen09269] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Triple Axis Accelerometer Breakout - ADXL345 [sparkfun-module-sen09836] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Triple Axis Accelerometer Breakout - ADXL362 [sparkfun-module-sen11446] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Triple Axis Accelerometer Breakout - LIS3DH [sparkfun-module-sen13963] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   ├── SparkFun Triple Axis Magnetometer Breakout - MLX90393 (Qwiic) [sparkfun-module-sen14571] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │   │   └── SparkFun VR IMU Breakout - BNO086 (Qwiic) [sparkfun-module-sen22857] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── sparkfun-more (3)
│   │       ├── SparkFun AS7331 Spectral UV Sensor SEN-23517 [sparkfun-as7331-sen23517] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── SparkFun AS7343 Spectral Sensor SEN-23220 [sparkfun-as7343-sen23220] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       └── SparkFun STHS34PF80 Human Presence Sensor SEN-22494 [sparkfun-sths34pf80-sen22494] [FP:R] [3D:A] [CAD:+] [BB:+]
│   ├── STMicroelectronics (10)
│   │   ├── market-optical-sensing (1)
│   │   │   └── STMicroelectronics VL53L0CXV0DH/1 [market-vl53l0cxv0dh-1] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── market-sensors (9)
│   │       ├── LIS2DW12TR Ultralow-power3-axisaccelerometer [lis2dw12tr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LIS2MDLTR 3-axismagnetometer [lis2mdltr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LIS3DHTR 3-axisaccelerometer withADC [lis3dhtr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LPS22HHTR I3C pressure sensor [lps22hhtr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LPS28DFWTR Water-resistant pressure sensor [lps28dfwtr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LSM303AGRTR Accelerometer andmagnetometer [lsm303agrtr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LSM6DSOTR 6-axisIMU withsensorhub [lsm6dsotr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LSM6DSOXTR Machine-learning6-axisIMU [lsm6dsoxtr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── STTS22HTR SMBus temperature sensor [stts22htr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Texas Instruments (12)
│   │   ├── market-hall-angle (4)
│   │   │   ├── DRV5032FADBZR — Ultra-low-power omnipolar Hall switch, FA 20 Hz sampling variant with push-pull output [ti-drv5032fadbzr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DRV5053VAQDBZRQ1 — Automotive wide-voltage linear Hall sensor with a 0–2 V analog output [ti-drv5053vaqdbzrq1] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   ├── DRV5055A1QDBZR — Ratiometric linear Hall sensor with midpoint output at zero field [ti-drv5055a1qdbzr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── TMAG5273A2QDBVR — Low-power three-axis linear Hall sensor with I2C interface, temperature conversion and angle calculation [ti-tmag5273a2qdbvr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   ├── market-optical-ti-vishay (2)
│   │   │   ├── OPT101P Photodiode with transimpedance amplifier [opt101p-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   │   └── OPT3001DNPR Ambient light sensor [opt3001dnpr-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── market-sensors (6)
│   │       ├── HDC1080DMBR I2C humidity and temperature sensor [hdc1080dmbr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── HDC2080DMBR Interrupt humidity and temperature sensor [hdc2080dmbr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LM335Z/LFT7 Kelvin shunt temperature sensor [lm335z-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── LM35DZ/NOPB Analog temperature sensor [lm35dz-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── TMP102AIDRLR Low-voltage I2C temperature sensor [tmp102aidrlr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── TMP117AIDRVR Precision I2C temperature sensor [tmp117aidrvr] [FP:R] [3D:A] [CAD:-] [BB:-]
│   ├── Vishay Semiconductors (3)
│   │   └── market-optical-ti-vishay (3)
│   │       ├── VCNL4040M3OE Proximity and ambient light sensor [vcnl4040m3oe-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       ├── VEML3328 RGBCIR color sensor [veml3328-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │       └── VEML7700-TT Ambient light sensor [veml7700-tt-ic] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── Waveshare (1)
│       └── waveshare-ready (1)
│           └── Waveshare BMM150 3-Axis Magnetometer Sensor [waveshare-bmm150-magnetometer] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Single-board computers (81)
│   ├── Banana Pi (8)
│   │   ├── bananapi (3)
│   │   │   ├── Banana Pi BPI-M2 Zero [banana-pi-bpi-m2-zero] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Banana Pi BPI-M5 [banana-pi-bpi-m5] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Banana Pi BPI-M7 [banana-pi-bpi-m7] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── bananapi-more (5)
│   │       ├── Banana Pi BPI M2 Berry [banana-pi-bpi-m2-berry] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Banana Pi BPI M2S [banana-pi-bpi-m2s] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Banana Pi BPI M4 Zero [banana-pi-bpi-m4-zero] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Banana Pi BPI R3 [banana-pi-bpi-r3] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Banana Pi BPI R4 [banana-pi-bpi-r4] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── FriendlyElec (9)
│   │   ├── friendlyelec (3)
│   │   │   ├── FriendlyElec NanoPi M6 [friendlyelec-nanopi-m6] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── FriendlyElec NanoPi NEO [friendlyelec-nanopi-neo] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── FriendlyElec NanoPi NEO2 [friendlyelec-nanopi-neo2] [FP:R] [3D:A] [CAD:-] [BB:-]
│   │   └── friendlyelec-more (6)
│   │       ├── FriendlyElec NanoPi M4 [friendlyelec-nanopi-m4] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── FriendlyElec NanoPi M5 [friendlyelec-nanopi-m5] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── FriendlyElec NanoPi R2S [friendlyelec-nanopi-r2s] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── FriendlyElec NanoPi R4S [friendlyelec-nanopi-r4s] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── FriendlyElec NanoPi R5S [friendlyelec-nanopi-r5s] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── FriendlyElec NanoPi R6S [friendlyelec-nanopi-r6s] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Luckfox (38)
│   │   └── luckfox (38)
│   │       ├── Luckfox Aura [luckfox-aura] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox CM5 IO Board [luckfox-cm5-io-board] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lume [luckfox-lume] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra [luckfox-lyra] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Lyra B [luckfox-lyra-b] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Lyra Pi A [luckfox-lyra-pi-a] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Pi A W [luckfox-lyra-pi-a-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Pi B [luckfox-lyra-pi-b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Pi B W [luckfox-lyra-pi-b-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra PLC / PoE Kit [luckfox-lyra-plc] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Plus [luckfox-lyra-plus] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Lyra Ultra [luckfox-lyra-ultra] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Ultra W [luckfox-lyra-ultra-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Lyra Zero W [luckfox-lyra-zero-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Nova [luckfox-nova] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Nova W [luckfox-nova-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Omni3576 [luckfox-omni3576] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico 86-Panel [luckfox-pico-86-panel] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico [luckfox-pico] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Max [luckfox-pico-max] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Mini A [luckfox-pico-mini-a] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Mini B [luckfox-pico-mini-b] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Pi A [luckfox-pico-pi-a] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Pi A W [luckfox-pico-pi-a-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Pi B [luckfox-pico-pi-b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Pi B W [luckfox-pico-pi-b-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Plus [luckfox-pico-plus] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Pro [luckfox-pico-pro] [FP:R] [3D:A] [CAD:+] [BB:+]
│   │       ├── Luckfox Pico Ultra [luckfox-pico-ultra] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Ultra B [luckfox-pico-ultra-b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Ultra BW [luckfox-pico-ultra-bw] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Ultra W [luckfox-pico-ultra-w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico Zero [luckfox-pico-zero] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox Pico2 [luckfox-pico2] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox PicoKVM / PicoKVM Lite [luckfox-picokvm] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox PicoKVM Base / Base Lite [luckfox-picokvm-base] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Luckfox PicoKVM Ext [luckfox-picokvm-ext] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Luckfox WebBee [luckfox-webbee] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Radxa (9)
│   │   ├── radxa (4)
│   │   │   ├── Radxa ROCK 3A [radxa-rock-3a] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Radxa ROCK 5A [radxa-rock-5a] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   ├── Radxa ROCK 5B [radxa-rock-5b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   │   └── Radxa ZERO 3W [radxa-zero-3w] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │   └── radxa-more (5)
│   │       ├── Radxa ROCK3C [radxa-rock3c] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Radxa ROCK4SE [radxa-rock4se] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Radxa ROCK5C [radxa-rock5c] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Radxa ROCK5T [radxa-rock5t] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Radxa ZERO [radxa-zero] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── Raspberry Pi (5)
│   │   └── raspberry-pi (5)
│   │       ├── Raspberry Pi 3 Model A+ [raspberry-pi-3-model-a-plus] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Raspberry Pi 3 Model B [raspberry-pi-3-model-b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Raspberry Pi 3 Model B+ [raspberry-pi-3-model-b-plus] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       ├── Raspberry Pi 4 Model B [raspberry-pi-4-model-b] [FP:R] [3D:A] [CAD:+] [BB:-]
│   │       └── Raspberry Pi 5 [raspberry-pi-5] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── Sipeed (12)
│       └── sipeed-lichee (12)
│           ├── Sipeed Lichee Module 3A [sipeed-lichee-module-3a] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed Lichee Module 4A [sipeed-lichee-module-4a] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed Lichee Nano [sipeed-lichee-nano] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed Lichee RV + Dock [sipeed-lichee-rv-dock] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed Lichee RV Core [sipeed-lichee-rv-core] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed Lichee Zero [sipeed-lichee-zero] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed LicheePi 3A [sipeed-licheepi-3a] [FP:R] [3D:A] [CAD:-] [BB:-]
│           ├── Sipeed LicheePi 4A [sipeed-licheepi-4a] [FP:R] [3D:A] [CAD:+] [BB:-]
│           ├── Sipeed LicheeRV Nano B [sipeed-licheerv-nano-b] [FP:R] [3D:A] [CAD:+] [BB:+]
│           ├── Sipeed LicheeRV Nano E [sipeed-licheerv-nano-e] [FP:R] [3D:A] [CAD:+] [BB:+]
│           ├── Sipeed LicheeRV Nano W [sipeed-licheerv-nano-w] [FP:R] [3D:A] [CAD:+] [BB:+]
│           └── Sipeed LicheeRV Nano WE [sipeed-licheerv-nano-we] [FP:R] [3D:A] [CAD:+] [BB:+]
├── Switches (13)
│   ├── Bourns (1)
│   │   └── input-prototyping (1)
│   │       └── Bourns PEC11R-4215F-S0024 Rotary Encoder [bourns-pec11r-4215f-s0024] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── C&K / Littelfuse (4)
│   │   └── switches-mosfets (4)
│   │       ├── C&K 7101SYCQE SPDT Toggle [ck-7101sycqe] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       ├── C&K 7103SYCQE SPDT Toggle [ck-7103sycqe] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       ├── C&K 7201SYCQE DPDT Toggle [ck-7201sycqe] [FP:?] [3D:A] [CAD:-] [BB:-]
│   │       └── C&K 7203SYCQE DPDT Toggle [ck-7203sycqe] [FP:?] [3D:A] [CAD:-] [BB:-]
│   ├── Keyestudio (4)
│   │   └── diy-kit-inputs (4)
│   │       ├── Keyestudio KS0021 Collision Switch Module [keyestudio-ks0021-collision] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0025 Ball Tilt Switch Module [keyestudio-ks0025-tilt] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       ├── Keyestudio KS0029 Push Button Module [keyestudio-ks0029-button] [FP:R] [3D:A] [CAD:-] [BB:+]
│   │       └── Keyestudio KS0038 Reed Switch Module [keyestudio-ks0038-reed] [FP:R] [3D:A] [CAD:-] [BB:+]
│   ├── MIKROE (1)
│   │   └── mikroe-click (1)
│   │       └── MIKROE Button R Click MIKROE-1901 [mikroe-button-r-click-1901] [FP:R] [3D:A] [CAD:+] [BB:-]
│   ├── NKK Switches (1)
│   │   └── switches-mosfets (1)
│   │       └── NKK MN11SS4W03 SPST Toggle [nkk-mn11ss4w03] [FP:?] [3D:A] [CAD:+] [BB:-]
│   ├── Omron (1)
│   │   └── breadboard-tactile-switches (1)
│   │       └── Omron B3F-1000 Tactile Switch [omron-b3f-1000] [FP:R] [3D:A] [CAD:+] [BB:+]
│   └── Unspecified (1)
│       └── core-basics (1)
│           └── Tactile Push Button [button] [FP:R] [3D:A] [CAD:-] [BB:-]
├── Switches & Relays (2)
│   └── DFRobot (2)
│       └── modules-dfrobot-motion-relays (2)
│           ├── DFRobot Gravity: Magnetic Latching Relay for ESP32 / Arduino [dfrobot-magnetic-latching-relay-dfr0996] [FP:R] [3D:A] [CAD:+] [BB:-]
│           └── DFRobot Relay Module With Transparent Case [dfrobot-transparent-relay-dfr0989] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Tools (2)
│   ├── Nordic Semiconductor (1)
│   │   └── nordic-ready (1)
│   │       └── Nordic Power Profiler Kit II [nordic-power-profiler-kit-ii] [FP:R] [3D:A] [CAD:+] [BB:-]
│   └── Raspberry Pi (1)
│       └── raspberry-pi-more (1)
│           └── Raspberry Pi Debug Probe [raspberry-pi-debug-probe-rev2] [FP:R] [3D:A] [CAD:+] [BB:-]
├── Wireless (3)
│   ├── DFRobot (1)
│   │   └── modules-dfrobot-peripherals (1)
│   │       └── DFRobot Fermion: BLE Sensor Beacon Pack (5PCS) [dfrobot-in100-beacon-tel0168] [FP:R] [3D:A] [CAD:-] [BB:-]
│   └── Seeed Studio (2)
│       └── modules-seeed-extended-interfaces (2)
│           ├── Seeed Grove - NFC [seeed-module-113020006] [FP:R] [3D:A] [CAD:+] [BB:+]
│           └── Seeed Grove BLE v1 [seeed-module-113020007] [FP:R] [3D:A] [CAD:+] [BB:-]
└── Wireless modules (63)
    ├── Adafruit (12)
    │   ├── modules-adafruit-additional-development (1)
    │   │   └── Adafruit Feather M0 with RFM95 LoRa Radio - 900MHz [adafruit-module-3178] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   ├── modules-adafruit-additional-interfaces (4)
    │   │   ├── Adafruit Radio FeatherWing - RFM69HCW 900MHz [adafruit-module-3229] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   │   ├── Adafruit Ultimate GPS FeatherWing [adafruit-module-3133] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   │   ├── Adafruit Ultimate GPS HAT for Raspberry Pi A+/B+/Pi 2/3/4/Pi 5 [adafruit-module-2324] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   │   └── Adafruit Ultimate GPS Logger Shield - Includes GPS Module [adafruit-module-1272] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   ├── modules-adafruit-interfaces (5)
    │   │   ├── Adafruit AirLift Bitsy Add-On – ESP32 WiFi Co-Processor [adafruit-module-4363] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   │   ├── Adafruit AirLift – ESP32 WiFi Co-Processor Breakout Board [adafruit-module-4201] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   │   ├── Adafruit ATWINC1500 WiFi Breakout [adafruit-module-2999] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   │   ├── Adafruit Mini GPS PA1010D - UART and I2C - STEMMA QT [adafruit-module-4415] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   │   └── Adafruit RFM69HCW Transceiver Radio Breakout - 868 or 915 MHz [adafruit-module-3070] [FP:R] [3D:A] [CAD:-] [BB:+]
    │   └── nordic-more (2)
    │       ├── Adafruit Bluefruit LE SPI Friend [adafruit-bluefruit-le-spi-friend-2633] [FP:C] [3D:A] [CAD:+] [BB:+]
    │       └── Adafruit Bluefruit LE UART Friend [adafruit-bluefruit-le-uart-friend-2479] [FP:C] [3D:A] [CAD:+] [BB:+]
    ├── Ai-Thinker (10)
    │   ├── ai-thinker-ra (7)
    │   │   ├── Ai-Thinker Ra-01 LoRa Module [ra-01] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── Ai-Thinker Ra-01H LoRa Module [ra-01h] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── Ai-Thinker Ra-01SC LoRa Module [ra-01sc] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── Ai-Thinker Ra-01SCH LoRa Module [ra-01sch] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── Ai-Thinker Ra-03SCH LoRa Module [ra-03sch] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── Ai-Thinker Ra-05 LoRa Module [ra-05] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   └── Ai-Thinker Ra-05U LoRa Module [ra-05u] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   └── semtech-radios (3)
    │       ├── Ra-01S LoRa Module [ra-01s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── Ra-01SH LoRa Module [ra-01sh] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       └── Ra-02 LoRa Module [ra-02] [FP:R] [3D:A] [CAD:-] [BB:-]
    ├── EBYTE (19)
    │   ├── ebyte (8)
    │   │   ├── EBYTE E07-900M10S CC1101 Module [e07-900m10s] [FP:M] [3D:A] [CAD:+] [BB:-]
    │   │   ├── EBYTE E22-400T22D UART LoRa Module [e22-400t22d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   ├── EBYTE E22-900T22D UART LoRa Module [e22-900t22d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   ├── EBYTE E220-400T22D UART LoRa Module [e220-400t22d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   ├── EBYTE E220-900T22D UART LoRa Module [e220-900t22d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   ├── EBYTE E32-433T20D UART LoRa Module [e32-433t20d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   ├── EBYTE E32-900T20D UART LoRa Module [e32-900t20d] [FP:M] [3D:A] [CAD:+] [BB:+]
    │   │   └── EBYTE E90-DTU(900SL22) RS485 LoRa Modem [ebyte-e90-dtu-900sl22-rs485] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   ├── nordic (2)
    │   │   ├── Ebyte E01-ML01D nRF24L01+ [ebyte-e01-ml01d] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   │   └── Ebyte E01-ML01DP5 nRF24L01+ [ebyte-e01-ml01dp5] [FP:R] [3D:A] [CAD:-] [BB:-]
    │   └── semtech-radios (9)
    │       ├── E22-400M22S LoRa Module [e22-400m22s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-400M30S LoRa Module [e22-400m30s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-400MM22S LoRa Module [e22-400mm22s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-900M22S LoRa Module [e22-900m22s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-900M30S LoRa Module [e22-900m30s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-900M33S LoRa Module [e22-900m33s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E22-900MM22S LoRa Module [e22-900mm22s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── E28-2G4M12S LoRa Module [e28-2g4m12s] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       └── E28-2G4M12SX LoRa Module [e28-2g4m12sx] [FP:R] [3D:A] [CAD:-] [BB:-]
    ├── Hi-Link (4)
    │   └── hilink (4)
    │       ├── Hi-Link HLK-7621A Router Module [hlk-7621a] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       ├── Hi-Link HLK-7628N Router Module [hlk-7628n] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       ├── Hi-Link HLK-7688A Router Module [hlk-7688a] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       └── Hi-Link HLK-RM08K Router Module [hlk-rm08k] [FP:R] [3D:A] [CAD:+] [BB:-]
    ├── HopeRF (3)
    │   └── semtech-radios (3)
    │       ├── RFM95W LoRa Module [rfm95w] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       ├── RFM96W LoRa Module [rfm96w] [FP:R] [3D:A] [CAD:-] [BB:-]
    │       └── RFM98W LoRa Module [rfm98w] [FP:R] [3D:A] [CAD:-] [BB:-]
    ├── Quectel (1)
    │   └── cellular-gnss (1)
    │       └── Quectel EC25-E Mini PCIe [quectel-ec25-e-minipcie] [FP:R] [3D:A] [CAD:+] [BB:-]
    ├── Raytac (7)
    │   └── nordic (7)
    │       ├── Raytac AN54LQ-15 [raytac-an54lq-15] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       ├── Raytac MDBT42Q-512KV2 [raytac-mdbt42q-512kv2] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       ├── Raytac MDBT42Q-P512KV2 [raytac-mdbt42q-p512kv2] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       ├── Raytac MDBT50Q-1MV2 [raytac-mdbt50q-1mv2] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       ├── Raytac MDBT50Q-P1MV2 [raytac-mdbt50q-p1mv2] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       ├── Raytac MDBT53V-1M [raytac-mdbt53v-1m] [FP:M] [3D:A] [CAD:+] [BB:-]
    │       └── Raytac MDBT53V-P1M [raytac-mdbt53v-p1m] [FP:M] [3D:A] [CAD:+] [BB:-]
    ├── Semtech (2)
    │   └── semtech-ready (2)
    │       ├── Semtech SX1261MB2BAS LoRa Shield [semtech-sx1261mb2bas] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       └── Semtech SX1262MB2CAS LoRa Shield [semtech-sx1262mb2cas] [FP:R] [3D:A] [CAD:+] [BB:-]
    ├── SIMCom (3)
    │   └── cellular-gnss (3)
    │       ├── SIMCom SIM7600E-PCIE [simcom-sim7600e-minipcie] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       ├── SIMCom SIM7600G-H M.2 (Luckfox) [simcom-sim7600g-h-m2] [FP:R] [3D:A] [CAD:+] [BB:-]
    │       └── SIMCom SIM800C [simcom-sim800c] [FP:?] [3D:A] [CAD:+] [BB:-]
    └── SparkFun Electronics (2)
        └── modules-sparkfun-interfaces (2)
            ├── SparkFun RFID Reader Breakout [sparkfun-module-sen13030] [FP:R] [3D:A] [CAD:-] [BB:+]
            └── SparkFun RFM69 Breakout (915MHz) [sparkfun-module-wrl12775] [FP:R] [3D:A] [CAD:-] [BB:+]
```

## Maintenance

After adding, removing, renaming, regrouping or changing a component, mounting profile or CAD assessment, update the relevant source evidence and regenerate this file in the same change:

```sh
node scripts/catalog.mjs
```

The catalog command validates the entries and automatically refreshes this file. The standalone generator is `node scripts/catalog-tree.mjs`. For a read-only freshness check, run `node scripts/catalog-tree.mjs --check`; `node scripts/catalog.mjs --json` also checks freshness without writing. Tests reject a stale tree.
