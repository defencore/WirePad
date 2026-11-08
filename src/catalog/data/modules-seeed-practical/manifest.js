import { specificationSections } from "../../shared/specification-sections.js";
import audio from "./audio.js";
import motorsRelays from "./motors-relays.js";
import sensorsInterfaces from "./sensors-interfaces.js";

// The explicit order is part of the published catalog; section regrouping cannot reorder it.
export default specificationSections("modules-seeed-practical", [
  audio,
  motorsRelays,
  sensorsInterfaces,
], [
  "seeed-grove-latching-relay-103020010",
  "seeed-grove-pcf85063-rtc-102020083",
  "seeed-grove-ds1307-rtc-101020013",
  "seeed-grove-mosfet-103020008",
  "seeed-grove-encoder-111020001",
  "seeed-grove-dual-button-111020103",
  "seeed-grove-mech-keycap-111020049",
  "seeed-grove-passive-buzzer-107020109",
  "seeed-grove-relay-103020005",
  "seeed-grove-m281-relay-101020603",
  "seeed-grove-spdt-relay-2ch-103020132",
  "seeed-grove-spdt-relay-4ch-103020133",
  "seeed-grove-ssr-4ch-103020135",
  "seeed-grove-ssr-8ch-103020136",
  "seeed-grove-infrared-emitter-101020026",
  "seeed-grove-speaker-107020001",
  "seeed-grove-speaker-plus-101020853",
  "seeed-grove-piezo-vibration-101020031",
  "seeed-grove-collision-101020005",
  "seeed-grove-air-quality-101020078",
  "seeed-grove-mq2-101020055",
  "seeed-grove-mq5-101020056",
  "seeed-grove-high-temperature-111020002",
  "seeed-grove-max31850k-101020555"
]);
