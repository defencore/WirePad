import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-icp10111-sen0516",
    "sku": "SEN0516",
    "name": "DFRobot Fermion: ICP-10111 Pressure Sensor (Breakout, I2C)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer mechanical drawing and physical pinmap",
    "source": "https://wiki.dfrobot.com/sen0516/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0516/SEN0516_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/18592/SEN0516_icp-10111-pressure-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/18592/SEN0516_icp-10111-pressure-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/18592/SEN0516_icp-10111-pressure-sensor_cad_V1.0.zip"
    ],
    "description": "ICP-10111 pressure breakout with regulated/level-shifted 3.3–5.5 V input and a four-contact I2C header. The actual source drawing is a portrait 12.5 × 16.5 mm board; the wiki lists the same dimensions in the opposite order.",
    "tags": [
      "module",
      "icp10111",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2524.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 12.5,
      "height": 16.5,
      "outline": "M-4.75 8.25L-5.044 8.221L-5.3241 8.1359L-5.5822 7.998L-5.8107 7.8107L-5.998 7.5822L-6.1359 7.3241L-6.221 7.044L-6.25 6.75L-6.25 -6.75L-6.221 -7.044L-6.1359 -7.324L-5.998 -7.5822L-5.8107 -7.8106L-5.5822 -7.9979L-5.3241 -8.1358L-5.044 -8.2209L-4.75 -8.25L4.75 -8.25L5.044 -8.2209L5.324 -8.1358L5.5822 -7.9979L5.8106 -7.8106L5.9979 -7.5822L6.1358 -7.324L6.2209 -7.044L6.25 -6.75L6.25 6.7501L6.2209 7.0441L6.1358 7.3241L5.9979 7.5823L5.8106 7.8107L5.5822 7.998L5.324 8.1359L5.044 8.221L4.75 8.25L-4.75 8.25Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-icp10111-sen0516"]["contacts"],
    "holes": [
      {
        "x": -3.75,
        "y": -5.75,
        "drill": 2
      },
      {
        "x": 3.75,
        "y": -5.75,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-icp10111-sen0516"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-icp10111-sen0516"]["provenance"],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/18592/SEN0516_icp-10111-pressure-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-gravity-6dof-sen0692",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6"],
      "source": {"label": "DFRobot SEN0692: V1.0.0 / manufacturer layout 2026-02-05; cited part-specific DXF physical insertion headers", "url": "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Source physical header rows reviewed against the cited manufacturer Manufacturer part-specific DXF mechanical facts and physical pinmap/schematic. All selected insertion leads preserve their exact source centers and complete connector population.",
        "connectors": [{"id": "J1", "count": 6}]
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -16.0, "y": -13.5, "width": 32, "height": 27}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0692",
    "name": "DFRobot Gravity: 6DOF IMU Sensor for Motion & Gesture Detection (I2C / UART, Plug & Play)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0.0 / manufacturer layout 2026-02-05; cited part-specific DXF",
    "source": "https://wiki.dfrobot.com/sen0692/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0692/SEN0692_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_cad_V1.0.zip"
    ],
    "description": "6-DOF Gravity IMU assembly with BMI323 accelerometer/gyroscope, onboard MCU, I2C/UART mode switch and address DIP switches. All auxiliary header, Gravity leads and nine named rear factory contacts are modeled. The header VCC terminal is regulated 3.3 V output; Gravity + is the distinct 3.3–5 V host input. Source rear labels are mirrored only for display, with TP1/TP2 position differences retained.",
    "tags": [
      "module",
      "gravity-6dof",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3123.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.0,
      "outline": "M-12.5 -13.5H12.5A3.5 3.5 0 0 1 16.0 -10.0V10.0A3.5 3.5 0 0 1 12.5 13.5H-12.5A3.5 3.5 0 0 1 -16.0 10.0V-10.0A3.5 3.5 0 0 1 -12.5 -13.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-gravity-6dof-sen0692"]["contacts"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.15
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.15
      }
    ],
    "artwork": assets["dfrobot-gravity-6dof-sen0692"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "numericLabels": true,
    "provenance": assets["dfrobot-gravity-6dof-sen0692"]["provenance"],
    "backArtwork": assets["dfrobot-gravity-6dof-sen0692"]["backArtwork"],
    "internalConnections": [
      [
        "p5",
        "p8",
        "p14"
      ],
      [
        "p7",
        "p13"
      ],
      [
        "p4",
        "p9",
        "p15"
      ],
      [
        "p3",
        "p10",
        "p16"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23751/SEN0692_6-dof-imu-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-gravity-9dof-sen0694",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
      "source": {"label": "DFRobot SEN0694: V1.0.0 / manufacturer layout 2026-02-05; cited part-specific DXF physical insertion headers", "url": "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Source physical header rows reviewed against the cited manufacturer Manufacturer part-specific DXF mechanical facts and physical pinmap/schematic. All selected insertion leads preserve their exact source centers and complete connector population.",
        "connectors": [{"id": "J3", "count": 7}]
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -16.0, "y": -13.5, "width": 32, "height": 27}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0694",
    "name": "DFRobot Gravity: 9DOF IMU Sensor for Motion, Heading & Orientation (I2C / UART, Plug & Play)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0.0 / manufacturer layout 2026-02-05; cited part-specific DXF",
    "source": "https://wiki.dfrobot.com/sen0694/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0694/SEN0694_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_cad_V1.0.zip"
    ],
    "description": "9-DOF Gravity IMU assembly with BMI323 accelerometer/gyroscope plus BMM350 magnetometer, onboard MCU, I2C/UART mode switch and address DIP switches. All auxiliary header, Gravity leads and nine named rear factory contacts are modeled. The header VCC terminal is regulated 3.3 V output; Gravity + is the distinct 3.3–5 V host input. Source rear labels are mirrored only for display, with TP1/TP2 position differences retained.",
    "tags": [
      "module",
      "gravity-9dof",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3125.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.0,
      "outline": "M-12.5 -13.5H12.5A3.5 3.5 0 0 1 16.0 -10.0V10.0A3.5 3.5 0 0 1 12.5 13.5H-12.5A3.5 3.5 0 0 1 -16.0 10.0V-10.0A3.5 3.5 0 0 1 -12.5 -13.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-gravity-9dof-sen0694"]["contacts"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.15
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.15
      }
    ],
    "artwork": assets["dfrobot-gravity-9dof-sen0694"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "numericLabels": true,
    "provenance": assets["dfrobot-gravity-9dof-sen0694"]["provenance"],
    "backArtwork": assets["dfrobot-gravity-9dof-sen0694"]["backArtwork"],
    "internalConnections": [
      [
        "p6",
        "p9",
        "p15"
      ],
      [
        "p8",
        "p14"
      ],
      [
        "p5",
        "p10",
        "p16"
      ],
      [
        "p4",
        "p11",
        "p17"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23755/SEN0694_9-dof-imu-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-gravity-10dof-sen0696",
    "sku": "SEN0696",
    "name": "DFRobot Gravity: 10DOF IMU Sensor for Motion, Heading & Altitude Changes (I2C / UART, Plug & Play)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0.0 / manufacturer layout 2026-02-05; cited part-specific DXF",
    "source": "https://wiki.dfrobot.com/sen0696/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0696/SEN0696_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23757/SEN0696_10-dof-imu-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23757/SEN0696_10-dof-imu-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23757/SEN0696_10-dof-imu-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23757/SEN0696_10-dof-imu-sensor_cad_V1.0.zip"
    ],
    "description": "10-DOF Gravity IMU assembly with BMI323 accelerometer/gyroscope plus BMM350 magnetometer and BMP581 pressure/temperature sensor, onboard MCU, I2C/UART mode switch and address DIP switches. All auxiliary header, Gravity leads and nine named rear factory contacts are modeled. The header VCC terminal is regulated 3.3 V output; Gravity + is the distinct 3.3–5 V host input. Source rear labels are mirrored only for display, with TP1/TP2 position differences retained.",
    "tags": [
      "module",
      "gravity-10dof",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3126.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 32.0,
      "height": 27.0,
      "outline": "M-12.5 -13.5H12.5A3.5 3.5 0 0 1 16.0 -10.0V10.0A3.5 3.5 0 0 1 12.5 13.5H-12.5A3.5 3.5 0 0 1 -16.0 10.0V-10.0A3.5 3.5 0 0 1 -12.5 -13.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-gravity-10dof-sen0696"]["contacts"],
    "holes": [
      {
        "x": -12.5,
        "y": -10,
        "drill": 3.15
      },
      {
        "x": -12.5,
        "y": 10,
        "drill": 3.15
      }
    ],
    "artwork": assets["dfrobot-gravity-10dof-sen0696"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT SIDE / SEPARATE MIRRORED UNDERSIDE",
    "numericLabels": true,
    "provenance": assets["dfrobot-gravity-10dof-sen0696"]["provenance"],
    "backArtwork": assets["dfrobot-gravity-10dof-sen0696"]["backArtwork"],
    "internalConnections": [
      [
        "p7",
        "p10",
        "p16"
      ],
      [
        "p9",
        "p15"
      ],
      [
        "p6",
        "p11",
        "p17"
      ],
      [
        "p5",
        "p12",
        "p18"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23757/SEN0696_10-dof-imu-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-fermion-9dof-sen0695",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
      "source": {"label": "DFRobot SEN0695: V1.0.0 / cited source DXF and manufacturer layout 2026-02-05 header geometry", "url": "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer part-specific DXF mechanical facts and physical pinmap/schematic. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 7}]
      },
      "bodyRegions": [
        {"x": -12.0, "y": -9.5, "width": 24, "height": 19}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0695",
    "name": "DFRobot Fermion: Compact 9DOF IMU Sensor for Motion & Heading Integration (24×19 mm, I2C, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0.0 / cited source DXF and manufacturer layout 2026-02-05",
    "source": "https://wiki.dfrobot.com/sen0695/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0695/SEN0695_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_cad_V1.0.zip"
    ],
    "description": "Fermion 9-DOF native I2C sensor-bus module combining BMI323, BMM350. The component-side bottom header is the reverse of the published underside label view. The five-contact SH socket includes a documented NC terminal. Supply and signal domain are 3.3 V only. Address selection solder bridges are configuration hardware, not invented additional user headers.",
    "tags": [
      "module",
      "fermion-9dof",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3128.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 24.0,
      "height": 19.0,
      "outline": "M-10.5 -9.5H10.5A1.5 1.5 0 0 1 12.0 -8.0V8.0A1.5 1.5 0 0 1 10.5 9.5H-10.5A1.5 1.5 0 0 1 -12.0 8.0V-8.0A1.5 1.5 0 0 1 -10.5 -9.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-fermion-9dof-sen0695"]["contacts"],
    "holes": [
      {
        "x": -9.5,
        "y": -7,
        "drill": 1.95
      },
      {
        "x": 9.5,
        "y": -7,
        "drill": 1.95
      }
    ],
    "artwork": assets["dfrobot-fermion-9dof-sen0695"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-fermion-9dof-sen0695"]["provenance"],
    "internalConnections": [
      [
        "p7",
        "p8"
      ],
      [
        "p6",
        "p9"
      ],
      [
        "p5",
        "p10"
      ],
      [
        "p4",
        "p11"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23756/SEN0695_bmi323-bmm350-9-dof-imu-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-fermion-10dof-sen0697",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"],
      "source": {"label": "DFRobot SEN0697: V1.0.0 / cited source DXF and manufacturer layout 2026-02-05 header geometry", "url": "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer part-specific DXF mechanical facts and physical pinmap/schematic. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 8}]
      },
      "bodyRegions": [
        {"x": -12.0, "y": -9.5, "width": 24, "height": 19}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0697",
    "name": "DFRobot Fermion: Compact 10DOF IMU Sensor for Motion, Heading & Pressure Sensing (24×19mm, I2C, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0.0 / cited source DXF and manufacturer layout 2026-02-05",
    "source": "https://wiki.dfrobot.com/sen0697/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0697/SEN0697_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_dimension_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_cad_V1.0.zip"
    ],
    "description": "Fermion 10-DOF native I2C sensor-bus module combining BMI323, BMM350 and BMP581. The component-side bottom header is the reverse of the published underside label view. The five-contact SH socket includes a documented NC terminal. Supply and signal domain are 3.3 V only. Address selection solder bridges are configuration hardware, not invented additional user headers.",
    "tags": [
      "module",
      "fermion-10dof",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3127.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 24.0,
      "height": 19.0,
      "outline": "M-10.5 -9.5H10.5A1.5 1.5 0 0 1 12.0 -8.0V8.0A1.5 1.5 0 0 1 10.5 9.5H-10.5A1.5 1.5 0 0 1 -12.0 8.0V-8.0A1.5 1.5 0 0 1 -10.5 -9.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-fermion-10dof-sen0697"]["contacts"],
    "holes": [
      {
        "x": -9.5,
        "y": -7,
        "drill": 1.95
      },
      {
        "x": 9.5,
        "y": -7,
        "drill": 1.95
      }
    ],
    "artwork": assets["dfrobot-fermion-10dof-sen0697"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-fermion-10dof-sen0697"]["provenance"],
    "internalConnections": [
      [
        "p8",
        "p9"
      ],
      [
        "p7",
        "p10"
      ],
      [
        "p6",
        "p11"
      ],
      [
        "p5",
        "p12"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23758/SEN0697_bmi323-bmm350-bmp581-10-dof-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-bmv080-sen0663",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7"],
      "source": {"label": "DFRobot SEN0663: V1.0 / cited manufacturer mechanical drawing and physical pinmap header geometry", "url": "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_stpfile_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer part-specific DXF mechanical facts and physical pinmap/schematic. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "J1", "count": 7}]
      },
      "bodyRegions": [
        {"x": -12.0, "y": -10.0, "width": 24, "height": 20}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0663",
    "name": "DFRobot Fermion: BMV080 Air Quality Sensor (Breakout, PM1/PM2.5/PM10, I2C/SPI)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer mechanical drawing and physical pinmap",
    "source": "https://wiki.dfrobot.com/sen0663/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0663/SEN0663_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_dimension_V1.0.png",
      "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_layout_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_schematics_V1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_cad_V1.0.zip"
    ],
    "description": "BMV080 compact particulate-matter sensor module with a seven-contact raw I2C/SPI interface. Supply is 3.3 V only. The fitted internal sensor interconnect is drawn as assembly hardware; the external header pin functions follow the part-specific schematic. MODE and address solder bridges are configuration hardware.",
    "tags": [
      "module",
      "bmv080",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3069.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 24.0,
      "height": 20.0,
      "outline": "M12.0 8.5L11.9695 8.8023L11.8821 9.0839L11.7438 9.3387L11.5606 9.5607L11.3387 9.7439L11.0839 9.8822L10.8023 9.9696L10.5 10.0L-10.5 10.0L-10.8023 9.9696L-11.0839 9.8822L-11.3387 9.7439L-11.5607 9.5607L-11.7438 9.3387L-11.8821 9.0839L-11.9695 8.8023L-12.0 8.5L-12.0 -8.5L-11.9695 -8.8022L-11.8821 -9.0838L-11.7438 -9.3386L-11.5606 -9.5606L-11.3386 -9.7437L-11.0838 -9.882L-10.8023 -9.9695L-10.5 -10.0L10.5 -10.0L10.794 -9.9709L11.074 -9.8858L11.3322 -9.7479L11.5607 -9.5606L11.748 -9.3322L11.8858 -9.074L11.9709 -8.794L12.0 -8.5L12.0 8.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-bmv080-sen0663"]["contacts"],
    "holes": [
      {
        "x": -9.5,
        "y": -7.5,
        "drill": 2
      },
      {
        "x": 9.5,
        "y": -7.5,
        "drill": 2
      }
    ],
    "artwork": assets["dfrobot-bmv080-sen0663"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-bmv080-sen0663"]["provenance"],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/23295/SEN0663_bmv080-pm2-5-sensor_stpfile_V1.0.zip"
    }
  },
  {
    "id": "dfrobot-transparent-relay-dfr0989",
    "sku": "DFR0989",
    "name": "DFRobot Relay Module With Transparent Case",
    "manufacturer": "DFRobot",
    "category": "Switches & Relays",
    "revision": "V1.0 / cited manufacturer mechanical drawing and physical pinmap",
    "source": "https://wiki.dfrobot.com/dfr0989/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/DFR0989/DFR0989_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/19387/DFR0989_transparent-case-relay_dimension_v1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/19387/DFR0989_transparent-case-relay_schematics_v1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/19387/DFR0989_transparent-case-relay_cad_V1.0.zip"
    ],
    "description": "Transparent-case Omron G2R-2 relay module with a three-contact digital control port, isolated NO/COM/NC load terminals and a second pole providing switched host-VCC OUT+/OUT−. The copied specification repeats NO twice; the physical marking and schematic establish NC. OUT− is common control ground; OUT+ is switched, not permanently connected to VCC.",
    "tags": [
      "module",
      "transparent-relay",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-3084.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 46.5047,
      "height": 32.0048,
      "outline": "M19.75045 -16.0024L20.10845 -15.9842L20.45615 -15.9311L20.79175 -15.8448L21.11355 -15.727L21.41965 -15.5795L21.70835 -15.404L21.97795 -15.2024L22.22665 -14.9763L22.45265 -14.7276L22.65425 -14.458L22.82965 -14.1693L22.97715 -13.8631L23.09495 -13.5414L23.18125 -13.2058L23.23425 -12.858L23.25235 -12.5L23.25235 12.5L23.23435 12.8581L23.18125 13.2059L23.09495 13.5415L22.97715 13.8633L22.82965 14.1694L22.65425 14.4582L22.45265 14.7278L22.22655 14.9766L21.97785 15.2026L21.70825 15.4042L21.41945 15.5797L21.11325 15.7272L20.79155 15.8449L20.45585 15.9312L20.10815 15.9843L19.75005 16.0024L-19.74995 16.0024L-20.10805 15.9843L-20.45585 15.9312L-20.79145 15.8449L-21.11325 15.7272L-21.41945 15.5797L-21.70825 15.4042L-21.97785 15.2026L-22.22655 14.9766L-22.45265 14.7278L-22.65425 14.4582L-22.82965 14.1694L-22.97715 13.8633L-23.09495 13.5415L-23.18125 13.2059L-23.23425 12.8581L-23.25235 12.5L-23.25185 -12.5599L-23.22815 -12.9134L-23.17035 -13.2564L-23.08025 -13.587L-22.95965 -13.9038L-22.81005 -14.2048L-22.63335 -14.4886L-22.43125 -14.7534L-22.20535 -14.9975L-21.95745 -15.2191L-21.68935 -15.4168L-21.40255 -15.5886L-21.09895 -15.733L-20.78025 -15.8483L-20.44805 -15.9327L-20.10425 -15.9847L-19.75035 -16.0024L19.75045 -16.0024Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-transparent-relay-dfr0989"]["contacts"],
    "holes": [
      {
        "x": -19.75,
        "y": -12.5,
        "drill": 3.1
      },
      {
        "x": -19.75,
        "y": 12.5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-transparent-relay-dfr0989"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-transparent-relay-dfr0989"]["provenance"],
    "internalConnections": [
      [
        "p3",
        "p8"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/19387/DFR0989_transparent-case-relay_stpfile_v1.0.zip"
    }
  },
  {
    "id": "dfrobot-magnetic-latching-relay-dfr0996",
    "sku": "DFR0996",
    "name": "DFRobot Gravity: Magnetic Latching Relay for ESP32 / Arduino",
    "manufacturer": "DFRobot",
    "category": "Switches & Relays",
    "revision": "V1.0 / cited manufacturer mechanical drawing and physical pinmap",
    "source": "https://wiki.dfrobot.com/dfr0996/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/DFR0996/DFR0996_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17651/DFR0996_magnetic-latching-relay_dimension_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/17651/DFR0996_magnetic-latching-relay_schematics_1.0.pdf",
      "https://dfimg.dfrobot.com/wiki/17651/DFR0996_magnetic-latching-relay_cad_1.0.zip"
    ],
    "description": "Magnetic-latching relay module with independent A and B pulse-trigger Gravity ports and three isolated load contacts A/COM/B. Trigger A/B and load A/B have different functions and are never internally tied together. Repeated + and − contacts on the two control ports share the source power and ground rails.",
    "tags": [
      "module",
      "magnetic-latching-relay",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2657.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 42.0,
      "height": 32.0,
      "outline": "M-21.0 12.5L-21.0 -12.5L-20.9829 -12.8459L-20.9321 -13.186L-20.8487 -13.5179L-20.7336 -13.8394L-20.5877 -14.1481L-20.412 -14.4418L-20.2074 -14.7181L-19.9749 -14.9749L-19.7182 -15.2074L-19.4418 -15.4119L-19.1481 -15.5877L-18.8394 -15.7336L-18.5179 -15.8487L-18.186 -15.9321L-17.8459 -15.9828L-17.5 -16.0L17.5 -16.0L17.8459 -15.9828L18.186 -15.9321L18.5179 -15.8487L18.8394 -15.7336L19.1481 -15.5877L19.4418 -15.4119L19.7181 -15.2074L19.9749 -14.9749L20.2074 -14.7181L20.412 -14.4418L20.5877 -14.1481L20.7336 -13.8394L20.8487 -13.5179L20.9321 -13.186L20.9829 -12.8459L21.0 -12.5L21.0 12.5L20.9829 12.846L20.9321 13.186L20.8487 13.5179L20.7336 13.8394L20.5877 14.1481L20.412 14.4418L20.2074 14.7182L19.9749 14.9749L19.7181 15.2074L19.4418 15.412L19.1481 15.5877L18.8394 15.7336L18.5179 15.8487L18.186 15.9322L17.8459 15.9829L17.5 16.0L-17.5 16.0L-17.8459 15.9829L-18.186 15.9322L-18.5179 15.8487L-18.8394 15.7336L-19.1481 15.5877L-19.4418 15.412L-19.7182 15.2074L-19.9749 14.9749L-20.2074 14.7182L-20.412 14.4418L-20.5877 14.1481L-20.7336 13.8394L-20.8487 13.5179L-20.9321 13.186L-20.9829 12.846L-21.0 12.5Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-magnetic-latching-relay-dfr0996"]["contacts"],
    "holes": [
      {
        "x": 17.5,
        "y": -12.5,
        "drill": 3.1
      },
      {
        "x": 17.5,
        "y": 12.5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-magnetic-latching-relay-dfr0996"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-magnetic-latching-relay-dfr0996"]["provenance"],
    "internalConnections": [
      [
        "p2",
        "p5"
      ],
      [
        "p3",
        "p6"
      ]
    ],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/17651/DFR0996_magnetic-latching-relay_stpfile_1.0.zip"
    }
  },
  {
    "id": "dfrobot-uv-index-240-370-sen0636",
    "sku": "SEN0636",
    "name": "DFRobot Gravity: UV Index Sensor (240-370nm, UVA, UVB, UVC)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited manufacturer mechanical drawing and physical pinmap",
    "source": "https://wiki.dfrobot.com/sen0636/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/image/data/SEN0636/SEN0636_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/20197/SEN0636_uv-index-sensor_schematics_V1.pdf",
      "https://dfimg.dfrobot.com/wiki/20197/SEN0636_uv-index-sensor_cad_v1.zip"
    ],
    "description": "Gravity 240–370 nm ultraviolet-index sensor with switchable I2C/UART operation. Its C/T contact is clock input or module TX output, while D/R is data or module RX input; this differs from the D/T, C/R convention on other Gravity boards. The manufacturer 22 × 30 mm portrait mechanical PDF is rotated counter-clockwise to match the dedicated component-side pinmap.",
    "tags": [
      "module",
      "uv-index-240-370",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2903.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 30,
      "height": 22,
      "outline": "M-11.5 -11.0H11.5A3.5 3.5 0 0 1 15.0 -7.5V7.5A3.5 3.5 0 0 1 11.5 11.0H-11.5A3.5 3.5 0 0 1 -15.0 7.5V-7.5A3.5 3.5 0 0 1 -11.5 -11.0Z",
      "color": "#272d29"
    },
    "contacts": assets["dfrobot-uv-index-240-370-sen0636"]["contacts"],
    "holes": [
      {
        "x": -11.5,
        "y": -7.5,
        "drill": 3.1
      },
      {
        "x": -11.5,
        "y": 7.5,
        "drill": 3.1
      }
    ],
    "artwork": assets["dfrobot-uv-index-240-370-sen0636"]["artwork"],
    "footprintMode": "reference",
    "footprintNote": "Reference contact carrier: physical coordinates follow reviewed manufacturer mechanical/photo views, but selected copper and drill geometry are representative. Visible connector leads, screw wire terminations and mirrored rear test-contact projections are not an original production PCB footprint or mating footprint.",
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "numericLabels": true,
    "provenance": assets["dfrobot-uv-index-240-370-sen0636"]["provenance"],
    "cad": {
      "label": "Manufacturer STEP resource",
      "url": "https://dfimg.dfrobot.com/wiki/20197/SEN0636_uv-index-sensor_stpfile_v1.zip"
    }
  },
];
