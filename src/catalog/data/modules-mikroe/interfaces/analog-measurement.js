import assets from "./analog-measurement-assets.js";

// Verified source specifications. Related CAD illustration/evidence assets stay adjacent.
export default [
  {
    "id": "mikroe-mikroe-4166-isoadc2",
    "mountingReview": {
      "contactIds": ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"],
      "source": {"label": "MIKROE MIKROE-4166: v103 physical insertion headers", "url": "https://download.mikroe.com/documents/2d-3d-files/iso_adc_2_click_2d_3d_files.zip"},
      "installation": "Install straight 2.54 mm male headers with insertion leads below the component-side PCB. Every explicitly listed header lead must enter a separate compatible breadboard hole. Leave all unlisted optional headers unpopulated or facing upward; do not insert sockets, screw terminals, solder jumpers, or short solder stubs. Mounting explicitly activates the component-side physical view: through-hole contacts are shown at their real top-projected centers, while hidden rear-only pads use a distinct BACK PAD projection.",
      "evidence": {
        "checked": "2026-11-08",
        "geometry": "Manufacturer mikroBUS primary 16-pin header: 2.54 mm pitch and 22.86 mm row spacing. Physical header centers come from the cited per-SKU manufacturer CAD, including the reviewed nominal-grid precision where declared.",
        "connectors": [{"id": "mikroBUS", "count": 16, "package": "Manufacturer mikroBUS 2x8"}]
      },
      "projectRearContacts": true,
      "bodyRegions": [
        {"x": -12.7, "y": -21.463, "width": 25.4, "height": 42.926}
      ],
      "bodyEvidence": "Source-unit PCB envelope plus individual projecting physical package rectangles/circles from the existing source-coordinate component-side and rear hardware illustrations. Rear packages are projected at their physical centers, without applying the separate-view display offset. Captions, silkscreen text, margins and shadows are excluded. Regions retain separate overhangs rather than their empty enclosing wings."
    },
    "sku": "MIKROE-4166",
    "name": "ISO ADC 2 Click",
    "manufacturer": "MIKROE",
    "category": "Modules",
    "revision": "v103",
    "source": "https://www.mikroe.com/iso-adc-2-click",
    "references": [
      {
        "label": "Manufacturer schematic",
        "url": "https://download.mikroe.com/documents/add-on-boards/click/iso_adc_2_click/iso-adc-2-click-schematic-v103.pdf"
      },
      {
        "label": "Official Click SDK manifest",
        "url": "https://github.com/MikroElektronika/mikrosdk_click_v2/blob/master/clicks/isoadc2/doc/package/manifest.json"
      },
      {
        "label": "Manufacturer board CAD archive",
        "url": "https://download.mikroe.com/documents/2d-3d-files/iso_adc_2_click_2d_3d_files.zip"
      }
    ],
    "description": "ISO ADC 2 Click add-on module for adc, isolators applications. Host interface: GPIO, SPI. All sixteen mikroBUS positions are retained, including contacts marked NC. The additional source-verified wiring contacts are also exposed. Additional through-hole connector solder contacts are shown in the mirrored underside view. External analog terminals follow the cited schematic and physical CAD positions. Unnumbered source contacts use explicit connector-reference/signal native identifiers rather than invented manufacturer pin numbers. Isolated AGND and host DGND remain separate connectivity domains.",
    "tags": [
      "mikroelektronika",
      "click",
      "mikrobus",
      "adc, isolators",
      "gpio, spi"
    ],
    "availability": {
      "checked": "2026-11-08",
      "url": "https://www.mikroe.com/iso-adc-2-click",
      "status": "Official manufacturer offer is orderable; product structured data reports InStock. Inventory quantity is not independently verified.",
      "sku": "MIKROE-4166",
      "price": "62.00",
      "currency": "USD",
      "manufacturerOrderable": true,
      "structuredAvailability": "https://schema.org/InStock"
    },
    "board": {
      "width": 25.4,
      "height": 42.926,
      "outline": "M-12.7,-19.177 -12.656,-19.625 -12.526,-20.052 -12.316,-20.445 -12.03,-20.793 -11.682,-21.079 -11.289,-21.289 -10.862,-21.419 -10.414,-21.463 10.414,-21.463 10.862,-21.419 11.289,-21.289 11.682,-21.079 12.03,-20.793 12.316,-20.445 12.526,-20.052 12.656,-19.625 12.7,-19.177 12.7,18.923 10.16,21.463 -12.7,21.463Z",
      "color": "#087c4a"
    },
    "contacts": assets["mikroe-mikroe-4166-isoadc2"]["contacts"],
    "artwork": assets["mikroe-mikroe-4166-isoadc2"]["artwork"],
    "numericLabels": false,
    "footprintMode": "reference",
    "footprintNote": "Illustrated contour and primary header centers follow the cited board CAD. Native body envelope uses its bounding dimensions. Selected 1.7 mm header copper and 1.0 mm header drills are reference values; source mask apertures or 3D leads are not a production copper/drill land pattern.",
    "cad": {
      "label": "MikroE v103 board CAD archive",
      "url": "https://download.mikroe.com/documents/2d-3d-files/iso_adc_2_click_2d_3d_files.zip"
    },
    "provenance": assets["mikroe-mikroe-4166-isoadc2"]["provenance"],
    "viewLabel": "COMPONENT SIDE / MIRRORED SOLDER-SIDE CONTACTS",
    "internalConnections": [
      [
        "p8",
        "p9"
      ]
    ],
    "artworkBounds": [
      -12.7,
      -21.475343955443613,
      12.7,
      21.463
    ],
    "backArtwork": assets["mikroe-mikroe-4166-isoadc2"]["backArtwork"],
    "backArtworkBounds": [
      -12.7,
      -21.463,
      12.7,
      21.463
    ]
  },
];
