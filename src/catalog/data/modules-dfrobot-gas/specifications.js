import assets from "./specifications-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "dfrobot-fermion-hcho-sen0563",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0563: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17619/SEN0563_fermion-mems-hcho-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0563",
    "name": "DFRobot Fermion: Formaldehyde Sensor (Breakout, 0-3ppm MEMS HCHO Detection, Low Power)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0563/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0563/SEN0563_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17619/SEN0563_fermion-mems-hcho-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17619/SEN0563_fermion-mems-hcho-sensor_datasheet_V1.0.zip"
    ],
    "description": "HCHO gas-sensing breakout using the manufacturer-documented SMD1001 active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "hcho",
      "smd1001",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2699.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-hcho-sen0563"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-hcho-sen0563"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-hcho-sen0563"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17619/SEN0563_fermion-mems-hcho-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-hcho-sen0563"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-co-sen0564",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0564: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17640/SEN0564_mems-co-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0564",
    "name": "DFRobot Fermion: MEMS Carbon Monoxide CO Gas Detection Sensor (Breakout, 5-5000ppm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0564/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0564/SEN0564_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17640/SEN0564_mems-co-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17640/SEN0564_mems-co-sensor_datasheet_V1.0.zip"
    ],
    "description": "CO gas-sensing breakout using the manufacturer-documented GM-702B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "co",
      "gm-702b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2697.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-co-sen0564"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-co-sen0564"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-co-sen0564"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17640/SEN0564_mems-co-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-co-sen0564"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-ch4-sen0565",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0565: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17635/SEN0565_fermion-ch4-detection-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0565",
    "name": "DFRobot Fermion: MEMS Methane CH4 Gas Detection Sensor (Breakout, 1-10000ppm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0565/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0565/SEN0565_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17635/SEN0565_fermion-ch4-detection-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17635/SEN0565_fermion-ch4-detection-sensor_datasheet_V1.0.zip"
    ],
    "description": "CH4 gas-sensing breakout using the manufacturer-documented GM-402B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "ch4",
      "gm-402b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2708.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-ch4-sen0565"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-ch4-sen0565"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-ch4-sen0565"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17635/SEN0565_fermion-ch4-detection-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-ch4-sen0565"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-voc-sen0566",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0566: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17639/SEN0566_voc-gas-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0566",
    "name": "DFRobot Fermion: VOC Gas Sensor – Volatile Organic Compounds Detector (Breakout, 1-500ppm, MEMS)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0566/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0566/SEN0566_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17639/SEN0566_voc-gas-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17639/SEN0566_voc-gas-sensor_datasheet_V1.0.zip"
    ],
    "description": "VOC gas-sensing breakout using the manufacturer-documented GM-502B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "voc",
      "gm-502b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2707.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-voc-sen0566"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-voc-sen0566"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-voc-sen0566"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17639/SEN0566_voc-gas-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-voc-sen0566"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-nh3-sen0567",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0567: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17634/SEN0567_mems-nh3_schematics_v1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0567",
    "name": "DFRobot Fermion: NH3 Gas Sensor – Ammonia Detector (Breakout, 1-300ppm, MEMS, Low Power)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0567/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0567/SEN0567_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17634/SEN0567_mems-nh3_schematics_v1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17634/SEN0567_mems-nh3_datasheet_v1.0.zip"
    ],
    "description": "NH3 gas-sensing breakout using the manufacturer-documented GM-802B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "nh3",
      "gm-802b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2706.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-nh3-sen0567"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-nh3-sen0567"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-nh3-sen0567"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17634/SEN0567_mems-nh3_schematics_v1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-nh3-sen0567"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-h2s-sen0568",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0568: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17643/SEN0568_mems-h2s-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0568",
    "name": "DFRobot Fermion: H2S Gas Sensor – Hydrogen Sulfide Detector (Breakout, 0.5-50ppm, MEMS, Low Power)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0568/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0568/SEN0568_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17643/SEN0568_mems-h2s-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17643/SEN0568_mems-h2s-sensor_datasheet_V1.0.zip"
    ],
    "description": "H2S gas-sensing breakout using the manufacturer-documented GM-602B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "h2s",
      "gm-602b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2702.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-h2s-sen0568"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-h2s-sen0568"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-h2s-sen0568"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17643/SEN0568_mems-h2s-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-h2s-sen0568"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-ethanol-sen0569",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0569: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17623/SEN0569_compact-etoh-detector_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0569",
    "name": "DFRobot Fermion: MEMS Ethanol Gas Sensor - Compact EtOH Detector (1-500ppm, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0569/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0569/SEN0569_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17623/SEN0569_compact-etoh-detector_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17623/SEN0569_compact-etoh-detector_datasheet_V1.0.zip"
    ],
    "description": "EtOH gas-sensing breakout using the manufacturer-documented GM-302B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "ethanol",
      "gm-302b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2709.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-ethanol-sen0569"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-ethanol-sen0569"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-ethanol-sen0569"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17623/SEN0569_compact-etoh-detector_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-ethanol-sen0569"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-smoke-sen0570",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0570: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17630/SEN0570_mems-smoke-detection-sensor_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0570",
    "name": "DFRobot Fermion: MEMS Smoke Detection Sensor - 10-1000ppm Range (Ethanol Compatible, Breakout)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0570/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0570/SEN0570_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17630/SEN0570_mems-smoke-detection-sensor_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17630/SEN0570_mems-smoke-detection-sensor_datasheet_V1.0.zip"
    ],
    "description": "Smoke gas-sensing breakout using the manufacturer-documented GM-202B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "smoke",
      "gm-202b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2698.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-smoke-sen0570"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-smoke-sen0570"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-smoke-sen0570"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17630/SEN0570_mems-smoke-detection-sensor_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-smoke-sen0570"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-odor-sen0571",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0571: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17642/SEN0571_mems-odor-smell-gas-detection-sensor_schematics_v1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0571",
    "name": "DFRobot Fermion: MEMS Odor Smell Gas Detection Sensor (Breakout, 0.5-50ppm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0571/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0571/SEN0571_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17642/SEN0571_mems-odor-smell-gas-detection-sensor_schematics_v1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17642/SEN0571_mems-odor-smell-gas-detection-sensor_datasheet_v1.0.zip"
    ],
    "description": "Odor gas-sensing breakout using the manufacturer-documented GM-512B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "odor",
      "gm-512b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2710.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-odor-sen0571"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-odor-sen0571"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-odor-sen0571"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17642/SEN0571_mems-odor-smell-gas-detection-sensor_schematics_v1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-odor-sen0571"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-h2-sen0572",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0572: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17636/SEN0572_mems-h2_schematics_V1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0572",
    "name": "DFRobot Fermion: MEMS Hydrogen H2 Gas Detection Sensor (Breakout, 0.1-1000ppm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0572/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0572/SEN0572_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17636/SEN0572_mems-h2_schematics_V1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17636/SEN0572_mems-h2_datasheet_V1.0.zip"
    ],
    "description": "H2 gas-sensing breakout using the manufacturer-documented GMV-2021B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "h2",
      "gmv-2021b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2712.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-h2-sen0572"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-h2-sen0572"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-h2-sen0572"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17636/SEN0572_mems-h2_schematics_V1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-h2-sen0572"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
  {
    "id": "dfrobot-fermion-no2-sen0574",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3"],
      "source": {"label": "DFRobot SEN0574: V1.0 / cited SKU schematic and shared SEN0570-DIP library header geometry", "url": "https://dfimg.dfrobot.com/wiki/17632/SEN0574_fermion-mems-no2-sensor_schematics_v1.0.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Only the explicitly reviewed header contacts enter the breadboard; do not insert fitted female or right-angle sockets, screw terminals, solder jumpers, or other exposed service contacts.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Reviewed source physical header centers: Manufacturer Altium PcbLib converted by native KiCad 10 footprint upgrade. All selected front through-hole leads share one exact 2.54 mm grid.",
        "connectors": [{"id": "P1", "count": 3}]
      },
      "bodyRegions": [
        {"x": -6.5, "y": -6.5, "width": 13, "height": 13},
        {"x": 1.8, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -0.74, "y": 5.75, "width": 1.5, "height": 1.5},
        {"x": -3.28, "y": 5.75, "width": 1.5, "height": 1.5}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing component-side illustration. Captions, silkscreen text, margins, mirrored underside artwork and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "SEN0574",
    "name": "DFRobot Fermion: MEMS Nitrogen Dioxide NO2 Gas Detection Sensor (Breakout, 0.1-10ppm)",
    "manufacturer": "DFRobot",
    "category": "Sensors",
    "revision": "V1.0 / cited SKU schematic and shared SEN0570-DIP library",
    "source": "https://wiki.dfrobot.com/sen0574/",
    "references": [
      "https://dfimg.dfrobot.com/enshop/SEN0574/SEN0574_Main_01.jpg",
      "https://dfimg.dfrobot.com/wiki/17632/SEN0574_fermion-mems-no2-sensor_schematics_v1.0.zip",
      "https://dfimg.dfrobot.com/wiki/17632/SEN0574_fermion-mems-no2-sensor_datasheet_V1.0.zip"
    ],
    "description": "NO2 gas-sensing breakout using the manufacturer-documented GM-102B active sensor. The three user terminals are A, VCC and GND left to right in the component-side view. Physical CAD numbering is P1.3 A, P1.2 VCC, P1.1 GND; the wiki table enumerates functions in the opposite order. Both native lands of each terminal retain that one terminal number. Supply is 3.3–5 V; the output is an analog voltage, with gas-specific response and calibration.",
    "tags": [
      "fermion",
      "gas",
      "no2",
      "gm-102b",
      "analog",
      "arduino"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.dfrobot.com/product-2711.html",
      "status": "Available for sale with positive stock in the manufacturer global and/or USA warehouse feed; exact SKU matched."
    },
    "board": {
      "width": 13,
      "height": 13,
      "color": "#242b28",
      "outline": "M-5 -6.5H5A1.5 1.5 0 0 1 6.5 -5V5A1.5 1.5 0 0 1 5 6.5H-5A1.5 1.5 0 0 1 -6.5 5V-5A1.5 1.5 0 0 1 -5 -6.5Z"
    },
    "contacts": assets["dfrobot-fermion-no2-sen0574"]["contacts"],
    "footprintPads": assets["dfrobot-fermion-no2-sen0574"]["footprintPads"],
    "artwork": assets["dfrobot-fermion-no2-sen0574"]["artwork"],
    "footprintMode": "source",
    "footprintNote": "Electrical land centers, 1.5 mm rings and 0.9 mm drills follow the shared manufacturer DIP pattern shipped in this SKU schematic archive. The two mechanical pad-0 edge notches are not electrical contacts. This is a contact reference, not a production mating footprint or assembled-board layer stack.",
    "cad": {
      "label": "Manufacturer schematic and Altium footprint bundle",
      "url": "https://dfimg.dfrobot.com/wiki/17632/SEN0574_fermion-mems-no2-sensor_schematics_v1.0.zip"
    },
    "provenance": assets["dfrobot-fermion-no2-sen0574"]["provenance"],
    "viewLabel": "COMPONENT-SIDE PHYSICAL CONTACT VIEW",
    "modelHeight": 2.5
  },
];
