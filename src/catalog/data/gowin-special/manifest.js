import { specificationSections } from "../../shared/specification-sections.js";
import gw5Starter from "./gw5-starter.js";
import usbAudio from "./usb-audio.js";
import video from "./video.js";

// Preserve published IDs and component order as records move between functional sections.
export default specificationSections("gowin-special", [
  gw5Starter,
  usbAudio,
  video,
], [
  "gowin-dk-start-gw5ast-lv138fpg676a-v2-1",
  "gowin-dk-start-gw5ast-lv138fpg676a-v1-0",
  "gowin-dk-uac2-gw1n-lv9lq144c7i6-v2-1",
  "gowin-dk-usb2-0-gw2ar-lv18qn88pc8i7-gw1nsr-lv4cmg64pc7i6-v3-0",
  "gowin-dk-video-gw2a-lv18pg484c8i7-v1-2",
  "gowin-dk-start-gw5a-lv25ug324-v2-0"
]);
