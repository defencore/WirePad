import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-fermion-sht31-f-sen0332",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0332: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/21781/SEN0332_sht31-f-temp-humi-sensor_layout_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Dimension-calibrated manufacturer vector PDF contact centers. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -9.5, "y": -8.0, "width": 19, "height": 16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0332",
    "name": "DFRobot Fermion: SHT31-F Digital Temperature & Humidity Sensor (Breakout, I2C)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0332/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/6f5e2df272146c47890c3553816c3dd5.jpg",
      "https://dfimg.dfrobot.com/enshop/SEN0332/SEN0332_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21781/SEN0332_sht31-f-temp-humi-sensor_layout_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/21781/SEN0332_sht31-f-temp-humi-sensor_schematics_1.0.pdf"
    ],
    "description": "Filtered SHT31-DIS-F digital humidity and temperature breakout. The filter-covered sensor and thermal isolation slots distinguish this physical board. The ADDR solder bridge is illustrated as a configuration feature; its two voltage choices are not additional user header terminals. Module supply: 2.15–5.5 V.",
    "tags": [
      "fermion",
      "sht31-f",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2015.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19,
      "height": 16,
      "color": "#252b28",
      "outline": "M-8.3 -8.0H8.3A1.2 1.2 0 0 1 9.5 -6.8V6.8A1.2 1.2 0 0 1 8.3 8.0H-8.3A1.2 1.2 0 0 1 -9.5 6.8V-6.8A1.2 1.2 0 0 1 -8.3 -8.0Z"
    },
    "contacts": assets["dfrobot-fermion-sht31-f-sen0332"]["contacts"],
    "holes": [
      {
        "x": -7.5,
        "y": -6,
        "drill": 2
      },
      {
        "x": 7.5,
        "y": -6,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-sht31-f-sen0332"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-sht31-f-sen0332"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-lwlp5000-sen0343",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4"],
      "source": {"label": "DFRobot SEN0343: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/17657/SEN0343_lwlp5000-differential-pressure-sensor_dimension_v1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Dimension-calibrated manufacturer vector PDF contact centers. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 4}]
      },
      "bodyRegions": [
        {"x": -7.25, "y": -12.0, "width": 14.5, "height": 24}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0343",
    "name": "DFRobot Fermion: LWLP5000 Differential Pressure Sensor - ±500pa (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0343/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0343/SEN0343_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17657/SEN0343_lwlp5000-differential-pressure-sensor_dimension_v1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/17657/SEN0343_lwlp5000-differential-pressure-sensor_schematics_v1.0.pdf"
    ],
    "description": "LWLP5000 differential-pressure breakout with two pressure ports and an I2C interface. The component view follows the portrait mechanical drawing, with the physical header at the right edge. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "lwlp5000",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2096.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 14.5,
      "height": 24,
      "color": "#252b28",
      "outline": "M-6.05 -12.0H6.05A1.2 1.2 0 0 1 7.25 -10.8V10.8A1.2 1.2 0 0 1 6.05 12.0H-6.05A1.2 1.2 0 0 1 -7.25 10.8V-10.8A1.2 1.2 0 0 1 -6.05 -12.0Z"
    },
    "contacts": assets["dfrobot-fermion-lwlp5000-sen0343"]["contacts"],
    "holes": [
      {
        "x": -5.3,
        "y": -10,
        "drill": 2
      },
      {
        "x": -5.3,
        "y": 10,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-lwlp5000-sen0343"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-lwlp5000-sen0343"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 12
  },
  {
    "id": "dfrobot-fermion-as7341-sen0365",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0365: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/20213/SEN0365_as7341-visible-light-spectral-detection-sensor_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Dimension-calibrated manufacturer vector PDF contact centers. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -9.0, "y": -7.0, "width": 18, "height": 14}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0365",
    "name": "DFRobot Fermion: AS7341 11-Channel Visible Light Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0365/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/cc05cdde280a7969a34eada6a81af90e.png",
      "https://dfimg.dfrobot.com/enshop/SEN0365/SEN0365_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20213/SEN0365_as7341-visible-light-spectral-detection-sensor_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20213/SEN0365_as7341-visible-light-spectral-detection-sensor_schematics_1.0.pdf"
    ],
    "description": "AS7341 visible-light spectral sensor breakout with two white illumination LEDs. GPIO is a programmable sensor input/output; it is not a power rail. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "as7341",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2132.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 18,
      "height": 14,
      "color": "#252b28",
      "outline": "M-7.8 -7.0H7.8A1.2 1.2 0 0 1 9.0 -5.8V5.8A1.2 1.2 0 0 1 7.8 7.0H-7.8A1.2 1.2 0 0 1 -9.0 5.8V-5.8A1.2 1.2 0 0 1 -7.8 -7.0Z"
    },
    "contacts": assets["dfrobot-fermion-as7341-sen0365"]["contacts"],
    "holes": [
      {
        "x": -7,
        "y": -5,
        "drill": 2
      },
      {
        "x": 7,
        "y": -5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-as7341-sen0365"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-as7341-sen0365"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-vl53l3cx-sen0378",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0378: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/20571/SEN0378_tof-distance-ranging-sensor_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -9.0, "y": -7.5, "width": 18, "height": 15}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0378",
    "name": "DFRobot Fermion: VL53L3CX ToF Distance Ranging Sensor (25-3000mm) (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0378/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/d4e1ff402c14a33ec9f9e7ebd66e8a41.jpg",
      "https://dfimg.dfrobot.com/enshop/SEN0378/SEN0378_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20571/SEN0378_tof-distance-ranging-sensor_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20571/SEN0378_tof-distance-ranging-sensor_schematics_1.0.pdf"
    ],
    "description": "VL53L3CX multi-target ToF ranging breakout. The component-side top header reads GPIO1, XSHUT, SDA, SCL, GND, VCC from left to right. The linked Dimension PDF is a schematic rather than a mechanical view, so the physical layout is traced from the dedicated front/back pinmap and stated 18 × 15 mm size. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "vl53l3cx",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2256.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 18,
      "height": 15,
      "color": "#252b28",
      "outline": "M-7.8 -7.5H7.8A1.2 1.2 0 0 1 9.0 -6.3V6.3A1.2 1.2 0 0 1 7.8 7.5H-7.8A1.2 1.2 0 0 1 -9.0 6.3V-6.3A1.2 1.2 0 0 1 -7.8 -7.5Z"
    },
    "contacts": assets["dfrobot-fermion-vl53l3cx-sen0378"]["contacts"],
    "holes": [
      {
        "x": -7,
        "y": 5.5,
        "drill": 2
      },
      {
        "x": 7,
        "y": 5.5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-vl53l3cx-sen0378"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-vl53l3cx-sen0378"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-sgp40-sen0392",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4"],
      "source": {"label": "DFRobot SEN0392: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/19373/SEN0392_sgp40_schematics_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 4}]
      },
      "bodyRegions": [
        {"x": -9.0, "y": -5.75, "width": 18, "height": 11.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0392",
    "name": "DFRobot Fermion: SGP40 VOC Air Quality Sensor - Smart IAQ Monitoring (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0392/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/aaa5e5ca5aad3164e5dfebb1b25d0b2d.png",
      "https://dfimg.dfrobot.com/enshop/SEN0392/SEN0392_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/19373/SEN0392_sgp40_schematics_1.0.pdf"
    ],
    "description": "SGP40 VOC air-quality breakout. The manufacturer portrait component view is rotated 90° clockwise here, retaining the same physical side and contact order. The I2C header is between the two mounting holes along the lower edge. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "sgp40",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2241.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 18,
      "height": 11.5,
      "color": "#252b28",
      "outline": "M-7.8 -5.75H7.8A1.2 1.2 0 0 1 9.0 -4.55V4.55A1.2 1.2 0 0 1 7.8 5.75H-7.8A1.2 1.2 0 0 1 -9.0 4.55V-4.55A1.2 1.2 0 0 1 -7.8 -5.75Z"
    },
    "contacts": assets["dfrobot-fermion-sgp40-sen0392"]["contacts"],
    "holes": [
      {
        "x": -7,
        "y": 3.75,
        "drill": 2
      },
      {
        "x": 7,
        "y": 3.75,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-sgp40-sen0392"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-sgp40-sen0392"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-tcs3430-sen0403",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0403: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/20186/SEN0403_tcs3430-tristimulus-color-sensor_dimension_V1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -11.0, "y": -7.5, "width": 22, "height": 15}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0403",
    "name": "DFRobot Fermion: TCS3430 Tristimulus Color Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0403/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/ed6b5a772e9967562d6abd14420bda7b.jpg",
      "https://dfimg.dfrobot.com/enshop/SEN0403/SEN0403_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20186/SEN0403_tcs3430-tristimulus-color-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20186/SEN0403_tcs3430-tristimulus-color-sensor_schematics_v1.0.pdf"
    ],
    "description": "TCS3430 tristimulus color breakout with two illumination LEDs. The LED terminal controls the external LED driver; INT is the sensor interrupt output. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "tcs3430",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2257.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 22,
      "height": 15,
      "color": "#252b28",
      "outline": "M-9.8 -7.5H9.8A1.2 1.2 0 0 1 11.0 -6.3V6.3A1.2 1.2 0 0 1 9.8 7.5H-9.8A1.2 1.2 0 0 1 -11.0 6.3V-6.3A1.2 1.2 0 0 1 -9.8 -7.5Z"
    },
    "contacts": assets["dfrobot-fermion-tcs3430-sen0403"]["contacts"],
    "holes": [
      {
        "x": -9,
        "y": 5.5,
        "drill": 2
      },
      {
        "x": 9,
        "y": 5.5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-tcs3430-sen0403"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-tcs3430-sen0403"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-lis2dw12-sen0405",
    "sku": "SEN0405",
    "name": "DFRobot Fermion: LIS2DW12 Triple Axis Accelerometer (Breakout) (±16g)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0405/",
    "references": [
      "https://img.dfrobot.com.cn/wiki/none/77c97ef4c4d056621073277bfc774943.jpg",
      "https://dfimg.dfrobot.com/enshop/SEN0405/SEN0405_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23156/SEN0405_lis2dw12_dimension_1.0.jpg",
      "https://dfimg.dfrobot.com/wiki/23156/SEN0405_lis2dw12_schematics_1.0.pdf"
    ],
    "description": "LIS2DW12 three-axis accelerometer breakout with separate four-contact power/bus and SPI/interrupt rows. SDO is SPI data output or the I2C address input; it is not MOSI. All signal pins use the regulated 3.3 V domain. The schematic includes a ME6206A33 regulator and the printed VCC pin permits 3V3/5V, although the copied specification row says 3.3 V. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "lis2dw12",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2337.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 20,
      "height": 15,
      "color": "#252b28",
      "outline": "M-8.8 -7.5H8.8A1.2 1.2 0 0 1 10.0 -6.3V6.3A1.2 1.2 0 0 1 8.8 7.5H-8.8A1.2 1.2 0 0 1 -10.0 6.3V-6.3A1.2 1.2 0 0 1 -8.8 -7.5Z"
    },
    "contacts": assets["dfrobot-fermion-lis2dw12-sen0405"]["contacts"],
    "holes": [
      {
        "x": -7.5,
        "y": 5,
        "drill": 3.1
      },
      {
        "x": 7.5,
        "y": 5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-fermion-lis2dw12-sen0405"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-lis2dw12-sen0405"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-h3lis200dl-sen0408",
    "sku": "SEN0408",
    "name": "DFRobot Fermion: I2C H3LIS200DL Triple Axis Accelerometer (Breakout) (±100g/±200g)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0408/",
    "references": [
      "https://img.dfrobot.com.cn/wiki/none/bfa293fd03979766ae3e5b639b81f3a5.png",
      "https://dfimg.dfrobot.com/enshop/SEN0408/SEN0408_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21780/SEN0408_h3lis200dl_dimension_1.0.png",
      "https://dfimg.dfrobot.com/wiki/21780/SEN0408_h3lis200dl_schematics_1.0.pdf"
    ],
    "description": "H3LIS200DL three-axis accelerometer breakout with separate four-contact power/bus and SPI/interrupt rows. SDO is SPI data output or the I2C address input; it is not MOSI. All signal pins use the regulated 3.3 V domain. Module supply: 3.3 V.",
    "tags": [
      "fermion",
      "h3lis200dl",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2314.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 20,
      "height": 15,
      "color": "#252b28",
      "outline": "M-8.8 -7.5H8.8A1.2 1.2 0 0 1 10.0 -6.3V6.3A1.2 1.2 0 0 1 8.8 7.5H-8.8A1.2 1.2 0 0 1 -10.0 6.3V-6.3A1.2 1.2 0 0 1 -8.8 -7.5Z"
    },
    "contacts": assets["dfrobot-fermion-h3lis200dl-sen0408"]["contacts"],
    "holes": [
      {
        "x": -7.5,
        "y": 5,
        "drill": 3.1
      },
      {
        "x": 7.5,
        "y": 5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-fermion-h3lis200dl-sen0408"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-h3lis200dl-sen0408"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-vl6180x-sen0427",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0427: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/21146/SEN0427_vl6180x_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -9.5, "y": -9.0, "width": 19, "height": 18}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0427",
    "name": "DFRobot Fermion: VL6180X ToF Distance Ranging Sensor (5-100mm) (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0427/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/76bcb659581900bbf765aa3540101d5b.png",
      "https://dfimg.dfrobot.com/enshop/SEN0427/SEN0427_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21146/SEN0427_vl6180x_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/21146/SEN0427_vl6180x_schematics_1.0.pdf"
    ],
    "description": "VL6180X short-distance ToF breakout. CE is the active-high sensor enable, with LOW shutting down the sensor; INT indicates ready sensor data. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "vl6180x",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2287.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 19,
      "height": 18,
      "color": "#252b28",
      "outline": "M-8.3 -9.0H8.3A1.2 1.2 0 0 1 9.5 -7.8V7.8A1.2 1.2 0 0 1 8.3 9.0H-8.3A1.2 1.2 0 0 1 -9.5 7.8V-7.8A1.2 1.2 0 0 1 -8.3 -9.0Z"
    },
    "contacts": assets["dfrobot-fermion-vl6180x-sen0427"]["contacts"],
    "holes": [
      {
        "x": -7.5,
        "y": -7,
        "drill": 2
      },
      {
        "x": 7.5,
        "y": -7,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-vl6180x-sen0427"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-vl6180x-sen0427"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-tmf8801-sen0430",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
      "source": {"label": "DFRobot SEN0430: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/21157/SEN0430_tmf8801_schematics_v1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 8}]
      },
      "bodyRegions": [
        {"x": -10.5, "y": -7.25, "width": 21, "height": 14.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0430",
    "name": "DFRobot Fermion: TMF8801 ToF Distance Ranging Sensor (20-2500mm) (Breakout, I2C)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0430/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/7b48e87a1a170609c0b3bbbd4ae3f4c7.png",
      "https://dfimg.dfrobot.com/enshop/SEN0430/SEN0430_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21157/SEN0430_tmf8801_schematics_v1.0.pdf",
      "https://look.ams-osram.com/m/277d0c5095367cb7/original/TMF8801-DS000648.pdf"
    ],
    "description": "TMF8801 ToF breakout with eight physical terminals, including the two published GPIO pins. PIN0 and PIN1 are programmable digital I/O; the abbreviated wiki description calls them interrupt pins. Supply and signals are in the 2.7–3.3 V sensor domain. Module supply: 2.7–3.3 V.",
    "tags": [
      "fermion",
      "tmf8801",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2438.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 21,
      "height": 14.5,
      "color": "#252b28",
      "outline": "M-9.3 -7.25H9.3A1.2 1.2 0 0 1 10.5 -6.05V6.05A1.2 1.2 0 0 1 9.3 7.25H-9.3A1.2 1.2 0 0 1 -10.5 6.05V-6.05A1.2 1.2 0 0 1 -9.3 -7.25Z"
    },
    "contacts": assets["dfrobot-fermion-tmf8801-sen0430"]["contacts"],
    "holes": [
      {
        "x": -8.5,
        "y": -5.25,
        "drill": 2
      },
      {
        "x": 8.5,
        "y": -5.25,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-tmf8801-sen0430"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-tmf8801-sen0430"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-sts35-sen0434",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0434: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/19346/SEN0434_fermion-sts35-high-accuracy-digital-temperature-sensor_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 6}]
      },
      "bodyRegions": [
        {"x": -10.0, "y": -8.75, "width": 20, "height": 17.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0434",
    "name": "DFRobot Fermion: STS35 High Accuracy Digital Temperature Sensor (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0434/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/e39ea95f62236f908dcafa255060da54.png",
      "https://dfimg.dfrobot.com/enshop/SEN0434/SEN0434_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/19346/SEN0434_fermion-sts35-high-accuracy-digital-temperature-sensor_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/19346/SEN0434_fermion-sts35-high-accuracy-digital-temperature-sensor_schematics_1.0.pdf"
    ],
    "description": "STS35 digital temperature breakout with thermal isolation slots. RST and ADDR are reset and I2C address inputs; the wiki accidentally appends power-positive/power-negative words to those two labels. Module supply: 3.3–5.5 V.",
    "tags": [
      "fermion",
      "sts35",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2548.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 20,
      "height": 17.5,
      "color": "#252b28",
      "outline": "M-8.8 -8.75H8.8A1.2 1.2 0 0 1 10.0 -7.55V7.55A1.2 1.2 0 0 1 8.8 8.75H-8.8A1.2 1.2 0 0 1 -10.0 7.55V-7.55A1.2 1.2 0 0 1 -8.8 -8.75Z"
    },
    "contacts": assets["dfrobot-fermion-sts35-sen0434"]["contacts"],
    "holes": [
      {
        "x": -7.5,
        "y": -6.5,
        "drill": 2
      },
      {
        "x": 7.5,
        "y": -6.5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-sts35-sen0434"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-sts35-sen0434"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-mcp9808-sen0435",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
      "source": {"label": "DFRobot SEN0435: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/21795/SEN0435_mcp9808-temperature-sensor_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Dimension-calibrated manufacturer vector PDF contact centers. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 8}]
      },
      "bodyRegions": [
        {"x": -11.5, "y": -9.25, "width": 23, "height": 18.5},
        {"x": 7.2, "y": -9.3, "width": 3.6, "height": 3.6},
        {"x": -10.8, "y": -9.3, "width": 3.6, "height": 3.6}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0435",
    "name": "DFRobot Fermion: MCP9808 High Accuracy Temperature Sensor (Breakout, I2C)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0435/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/93a8355e8cd7b379673434e95c298e57.png",
      "https://dfimg.dfrobot.com/enshop/SEN0435/SEN0435_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21795/SEN0435_mcp9808-temperature-sensor_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/21795/SEN0435_mcp9808-temperature-sensor_schematics_1.0.pdf"
    ],
    "description": "MCP9808 digital temperature breakout with thermal isolation slots, an alert output and three address inputs. This component-side view follows the populated underside drawing, so its header reads A2 through VCC left to right. Module supply: 2.7–5.5 V.",
    "tags": [
      "fermion",
      "mcp9808",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2546.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 23,
      "height": 18.5,
      "color": "#252b28",
      "outline": "M-10.3 -9.25H10.3A1.2 1.2 0 0 1 11.5 -8.05V8.05A1.2 1.2 0 0 1 10.3 9.25H-10.3A1.2 1.2 0 0 1 -11.5 8.05V-8.05A1.2 1.2 0 0 1 -10.3 -9.25Z"
    },
    "contacts": assets["dfrobot-fermion-mcp9808-sen0435"]["contacts"],
    "holes": [
      {
        "x": -9,
        "y": -7.5,
        "drill": 2
      },
      {
        "x": 9,
        "y": -7.5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-mcp9808-sen0435"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-mcp9808-sen0435"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-mics5524-sen0440",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4"],
      "source": {"label": "DFRobot SEN0440: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/20519/SEN0440_fermion-mics-5524-gas-concentration-sensor_dimension_1.0.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 4}]
      },
      "bodyRegions": [
        {"x": -6.0, "y": -7.75, "width": 12, "height": 15.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0440",
    "name": "DFRobot Fermion: MEMS Multi-Gas Detector - CO/CH4/Ethanol Sensor (1-1000ppm, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0440/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0440/SEN0440_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20519/SEN0440_fermion-mics-5524-gas-concentration-sensor_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/20519/SEN0440_fermion-mics-5524-gas-concentration-sensor_schematics_1.0.pdf"
    ],
    "description": "MiCS-5524 multi-gas analog breakout. EN enables sensor power when LOW and disables it when HIGH. The 12 × 15.5 mm manufacturer dimension drawing governs the outline; the wiki rounds the height to 16 mm. Module supply: 4.9–5.1 V.",
    "tags": [
      "fermion",
      "mics5524",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2419.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 12,
      "height": 15.5,
      "color": "#252b28",
      "outline": "M-4.8 -7.75H4.8A1.2 1.2 0 0 1 6.0 -6.55V6.55A1.2 1.2 0 0 1 4.8 7.75H-4.8A1.2 1.2 0 0 1 -6.0 6.55V-6.55A1.2 1.2 0 0 1 -4.8 -7.75Z"
    },
    "contacts": assets["dfrobot-fermion-mics5524-sen0440"]["contacts"],
    "holes": [
      {
        "x": -4,
        "y": -5.75,
        "drill": 2
      },
      {
        "x": 4,
        "y": -5.75,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-mics5524-sen0440"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-mics5524-sen0440"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-mics2714-sen0441",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4"],
      "source": {"label": "DFRobot SEN0441: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/20515/SEN0441_mics-2714-sensor_dimension_v1.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 4}]
      },
      "bodyRegions": [
        {"x": -7.75, "y": -6.0, "width": 15.5, "height": 12}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0441",
    "name": "DFRobot Fermion: MEMS H2 & NOx Gas Detector - MiCS-2714 Sensor (1-1000ppm, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0441/",
    "references": [
      "https://img.dfrobot.com.cn/wiki/5b973267c87e6f19943ab3ad/435aa373a052e1638480a409f43d41e3.png",
      "https://dfimg.dfrobot.com/enshop/SEN0441/SEN0441_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20515/SEN0441_mics-2714-sensor_dimension_v1.pdf",
      "https://dfimg.dfrobot.com/wiki/20515/SEN0441_mics-2714-sensor_schematics_v1.pdf"
    ],
    "description": "MiCS-2714 NOx-sensitive analog breakout. EN enables sensor power when LOW. VO is the printed analog-output label on the photographed component side; the wiki function table calls the same terminal A0. The mechanical 12 × 15.5 mm board is shown rotated 90° clockwise to match the flat component-side pinmap. Module supply: 4.9–5.1 V.",
    "tags": [
      "fermion",
      "mics2714",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2435.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 15.5,
      "height": 12,
      "color": "#252b28",
      "outline": "M-6.55 -6.0H6.55A1.2 1.2 0 0 1 7.75 -4.8V4.8A1.2 1.2 0 0 1 6.55 6.0H-6.55A1.2 1.2 0 0 1 -7.75 4.8V-4.8A1.2 1.2 0 0 1 -6.55 -6.0Z"
    },
    "contacts": assets["dfrobot-fermion-mics2714-sen0441"]["contacts"],
    "holes": [
      {
        "x": 5.75,
        "y": -4,
        "drill": 2
      },
      {
        "x": 5.75,
        "y": 4,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-mics2714-sen0441"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-mics2714-sen0441"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5
  },
  {
    "id": "dfrobot-fermion-s15ot421-sen0487",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0487: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/17383/SEN0487_mems-microphone-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Dimension-calibrated manufacturer vector PDF contact centers. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -9.0, "y": -6.25, "width": 18, "height": 12.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0487",
    "name": "DFRobot Fermion: MEMS Microphone Module - S15OT421(Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0487/",
    "references": [
      "https://dfimg.dfrobot.com/nobody/wiki/5f9658252f66ccae20acefb057969730.jpg",
      "https://dfimg.dfrobot.com/enshop/SEN0487/SEN0487_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17383/SEN0487_mems-microphone-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/17383/SEN0487_mems-microphone-sensor_layout_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17383/SEN0487_mems-microphone-sensor_schematics_V1.0.pdf"
    ],
    "description": "S15OT421 analog MEMS microphone breakout with LMV321 amplification. A is the amplified analog waveform output; it is not a digital threshold output. Module supply: 3.3–5 V.",
    "tags": [
      "fermion",
      "s15ot421",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2357.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 18,
      "height": 12.5,
      "color": "#252b28",
      "outline": "M-7.8 -6.25H7.8A1.2 1.2 0 0 1 9.0 -5.05V5.05A1.2 1.2 0 0 1 7.8 6.25H-7.8A1.2 1.2 0 0 1 -9.0 5.05V-5.05A1.2 1.2 0 0 1 -7.8 -6.25Z"
    },
    "contacts": assets["dfrobot-fermion-s15ot421-sen0487"]["contacts"],
    "holes": [
      {
        "x": -6.5,
        "y": -4.1,
        "drill": 2
      },
      {
        "x": 6.5,
        "y": -4.1,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-s15ot421-sen0487"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-s15ot421-sen0487"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": false,
    "modelHeight": 5,
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/17383/SEN0487_mems-microphone-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-fermion-bmm350-sen0622",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"],
      "source": {"label": "DFRobot SEN0622: V1.0 / cited manufacturer physical pinmap and schematic header geometry", "url": "https://dfimg.dfrobot.com/wiki/21159/SEN0622_bm350_layout_v1.pdf"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer dimension drawing / same-side flat pinmap traced to the documented board size and header pitch. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 9}]
      },
      "bodyRegions": [
        {"x": -12.5, "y": -8.0, "width": 25, "height": 16}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0622",
    "name": "DFRobot Fermion: BMM350 Triple-Axis Magnetometer Sensor for AR / VR (Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer physical pinmap and schematic",
    "source": "https://wiki.dfrobot.com/sen0622/",
    "references": [
      "https://img.dfrobot.com.cn/wikicn/62b2fb5caa613609f271523c/ac5aad2d87d1ec92122edb50eef7e2b4.png",
      "https://dfimg.dfrobot.com/enshop/SEN0622/SEN0622_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/21159/SEN0622_bm350_layout_v1.pdf",
      "https://dfimg.dfrobot.com/wiki/21159/SEN0622_bm350_schematics_v1.pdf",
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0622/SEN0622-detail-001.jpg"
    ],
    "description": "BMM350 three-axis magnetometer breakout with all nine physical header contacts, including four unconnected contacts omitted by the abbreviated wiki table. The schematic numbers the row P1.9 to P1.1 from left to right. The store summary says 3.3–5 V, but the silk, dedicated wiki and schematic call the supply 3V3, so this entry uses 3.3 V only. Module supply: 3.3 V.",
    "tags": [
      "fermion",
      "bmm350",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2891.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 25,
      "height": 16,
      "color": "#252b28",
      "outline": "M-11.3 -8.0H11.3A1.2 1.2 0 0 1 12.5 -6.8V6.8A1.2 1.2 0 0 1 11.3 8.0H-11.3A1.2 1.2 0 0 1 -12.5 6.8V-6.8A1.2 1.2 0 0 1 -11.3 -8.0Z"
    },
    "contacts": assets["dfrobot-fermion-bmm350-sen0622"]["contacts"],
    "holes": [
      {
        "x": -10.5,
        "y": -6,
        "drill": 2
      },
      {
        "x": 10.5,
        "y": -6,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-fermion-bmm350-sen0622"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference carrier using reviewed mechanical/photo contact centers. Selected 1.5 mm copper and 0.9 mm drills are representative rather than an asserted manufacturer land pattern. Contact labels are used as terminal identifiers when the physical source does not publish connector numbers. This is not a production mating footprint.",
    "provenance": assets["dfrobot-fermion-bmm350-sen0622"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "modelHeight": 5
  },
];
