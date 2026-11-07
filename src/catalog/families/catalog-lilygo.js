import { defineFamily } from "../registry.js";
import { chip, circle, label, pad, path, rect, smd, tactile, usb } from "../shared/svg.js";

const originalLeft = "GND GND GPIO21 GPIO22 GPIO17 GPIO2 GPIO15 GPIO13 GPIO12 GND GND 3V3".split(" ");
const originalRight = "3V3 GPIO36 GPIO37 GPIO38 GPIO39 GPIO32 GPIO33 GPIO25 GPIO26 GPIO27 GND 5V".split(" ");
const s3Left = "3V3 GPIO1 GPIO2 GPIO3 GPIO10 GPIO11 GPIO12 GPIO13 NC NC GND 5V".split(" ");
const s3Right = "GND GND GPIO43 GPIO44 GPIO18 GPIO17 GPIO21 GPIO16 NC GND GND 3V3".split(" ");

function info(name, s3, touch) {
  if (name === "GND") return ["power_in", "Common board ground."];
  if (name === "3V3") return ["power_out", "3.3 V regulator output. GPIO voltage is 3.3 V."];
  if (name === "5V") return ["power_in", "5 V board-power rail. Observe USB and battery power-path requirements before combining sources."];
  if (name === "NC") return ["no_connect", "Header contact is not connected in the referenced schematic."];
  if (name === "BAT") return ["power_in", "Single-cell rechargeable Li-ion/LiPo battery, nominal 3.7 V and 4.2 V maximum. The board has a charger. Check the fitted connector polarity."];
  const gpio = Number(name.slice(4));
  let text = `${name} GPIO. Configure the required alternate function in firmware.`;
  if (!s3 && [36, 37, 38, 39].includes(gpio)) text = `${name} input-only ADC/GPIO. No internal pull-up or pull-down.`;
  if (s3 && gpio === 43) text += " UART0 TX, shared with CNC.3.";
  if (s3 && gpio === 44) text += " UART0 RX, shared with CNC.4.";
  if (s3 && gpio === 18 || !s3 && gpio === 21) text += " Default I²C SDA.";
  if (s3 && gpio === 17 || !s3 && gpio === 22) text += " Default I²C SCL.";
  if (touch && [16, 17, 18, 21].includes(gpio)) text += " Shared with the fitted touch controller (INT16, SCL17, SDA18, RESET21).";
  if (!s3 && [2, 12, 15].includes(gpio) || s3 && gpio === 3) text += " Boot-strapping function: retain the required startup level.";
  return [!s3 && [36, 37, 38, 39].includes(gpio) ? "input" : "bidirectional", text];
}

function displayBoard({ s3 = false, touch = false }) {
  const id = s3 ? `lilygo-t-display-s3${touch ? "-touch" : ""}` : "lilygo-ttgo-t-display-v1-1";
  const name = s3 ? `LILYGO T-Display-S3${touch ? " Touch" : ""}` : "LILYGO TTGO T-Display V1.1";
  const width = 360, height = 440;
  const body = s3 ? [25.5, 58] : [25.08, 51.5];
  const sides = s3 ? [s3Left, s3Right] : [originalLeft, originalRight];
  const pins = [], pads = [];
  const add = (caption, number, x, y, physicalX, physicalY, override) => {
    const [type, description] = info(caption, s3, touch);
    const id = number.toLowerCase().replace(".", "-");
    pins.push({ id, number, label: caption, x, y, type, description: `${number} — ${description}`, ...override });
    pads.push({ id, x: physicalX, y: physicalY, size: 1.78, drill: 1, square: number.endsWith(".1") });
  };
  sides.forEach((specs, side) => specs.forEach((caption, index) => {
    const ref = s3 ? side ? "P1" : "P2" : side ? "P5" : "P4";
    const number = s3 || !side ? 12 - index : index + 1;
    add(caption, `${ref}.${number}`, side ? width : 0, 60 + index * 19,
      side ? 11.43 : -11.43, (s3 ? -17 : -18.2) + index * 2.54);
  }));
  const battery = s3 ? "P3" : "P2";
  add("BAT", `${battery}.1`, s3 ? 45 : 135, height, -1.27, body[1] / 2 + 5,
    { description: `${battery}.1 — Single-cell battery positive. The schematic connector is BAT positive at contact 1, ground at 2. Use a rechargeable 3.7 V Li-ion/LiPo cell.` });
  add("GND", `${battery}.2`, s3 ? 99 : 225, height, 1.27, body[1] / 2 + 5);
  if (s3) {
    ["GND", "3V3", "GPIO43", "GPIO44"].forEach((caption, i) => add(caption, `CNC.${i + 1}`, 153 + i * 54, height, -3.81 + i * 2.54, body[1] / 2 + 8,
      { description: `CNC.${i + 1} — Auxiliary solder UART header: ${["ground", "3.3 V output", "UART0 TX (GPIO43)", "UART0 RX (GPIO44)"][i]}. Shares the corresponding main-header net.` }));
  }
  const artTop = 12, artBottom = 403;
  const artScale = (artBottom - artTop) / body[1];
  for (let i = 0; i < pins.length; i++) {
    const pin = pins[i]; pin.surface = true;
    if (i < 24) {
      pin.labelSide = i < 12 ? "left" : "right";
      pin.x = width / 2 + pads[i].x * artScale;
      pin.y = artTop + (body[1] / 2 + pads[i].y) * artScale;
    } else if (pin.number.startsWith("CNC.")) {
      pin.labelSide = "cnc"; pin.x = 211 + (i - 26) * 7; pin.y = 370;
    } else {
      pin.labelSide = "battery";
      pin.x = s3 ? 170 + (i - 24) * 18 : 249;
      pin.y = s3 ? 380 : 344 + (i - 24) * 11;
    }
  }
  const repo = s3 ? "https://github.com/Xinyuan-LilyGO/T-Display-S3" : "https://github.com/Xinyuan-LilyGO/TTGO-T-Display";
  const source = repo + (s3 ? "/blob/main/schematic/T_Display_S3.pdf" : "/blob/master/schematic/ESP32-TFT(6-26).pdf");
  const component = {
    id, art: id, name, shortName: s3 ? `T-Display S3${touch ? " Touch" : ""}` : "TTGO T-Display", manufacturer: "LILYGO", category: "Microcontrollers",
    referencePrefix: "U", width, height, pins, source, contactLayout: "physical",
    subtitle: s3 ? `ESP32-S3R8 / 1.9″ LCD${touch ? " / CST816 touch" : ""}` : "ESP32 / 1.14″ ST7789 / V1.1",
    description: `${name} with all 24 main-header contacts and the two battery contacts${s3 ? ", plus the four-contact CNC UART solder header" : ""}. ${s3 ? "Rear component-side view with USB at the bottom. The display is on the opposite side. GPIO15 must be driven high to enable peripheral power when running from battery or the 5 V header." : "Front display-side view with USB at the bottom. GPIO35 is the second pushbutton and GPIO0 is BOOT; these buttons are not extra external header contacts."} ${touch ? "Touch shares I²C17/18 and GPIO16/21." : ""}`,
    tags: ["lilygo", "ttgo", "t-display", "t display", "display", "lcd", "wifi", "bluetooth", "battery", "st7789", s3 ? "esp32-s3" : "esp32", ...(touch ? ["touch", "cst816"] : [])],
  };
  const art = (part, showLabels = true) => {
    const top = 12, bottom = 403;
    const scale = (bottom - top) / body[1];
    const left = width / 2 - body[0] * scale / 2, right = width - left;
    const headers = part.pins.filter(pin => ["left", "right"].includes(pin.labelSide)).map(pin => {
      const onLeft = pin.labelSide === "left";
      return pad(pin.x, pin.y) + (showLabels ? label(pin.x + (onLeft ? -11 : 11), pin.y, pin.label, 8, "#344851", onLeft ? "end" : "start") : "");
    }).join("");
    const extras = part.pins.filter(pin => ["battery", "cnc"].includes(pin.labelSide)).map(pin => {
      const caption = pin.labelSide === "cnc" ? pin.number.split(".")[1] : pin.label === "BAT" ? "+" : "−";
      const battery = pin.labelSide === "battery";
      const color = battery ? pin.label === "BAT" ? "#ef6a57" : s3 ? "#344851" : "#e1e8dc" : "#f0f2e9";
      return circle(pin.x, pin.y, 2.5, "#c1a46b", "#f3df9c") + (showLabels ? label(pin.x + (battery && !s3 ? 8 : 0), pin.y - (battery && !s3 ? 0 : 8), caption, battery ? 8 : 6, color, battery && !s3 ? "start" : "middle") : "");
    }).join("");
    const face = s3 ?
      path("M129 24H223V38H210V29H197V40H183V29H169V40H155V29H141V41H129Z", "#7a805b", "#b7ad76") +
      chip(157, 115, 46, 46, "ESP32-S3", 9) +
      chip(161, 275, 38, 40, "FLASH", 4) +
      rect(154, 83, 23, 15, 2, "#b7c1b6", "#e0e6dc") +
      Array.from({ length: 9 }, (_, i) => smd(144 + i % 3 * 25, 188 + Math.floor(i / 3) * 12)).join("") +
      rect(161, 369, 36, 21, 2, "#e4e5dc", "#aeb6ad") + rect(166, 373, 26, 12, 1, "#494e49") +

      label(180, 247, "T-Display-S3", 10) + label(180, 261, "ESP32-S3R8", 6.5)
      : rect(109, 47, 142, 271, 1, "#8c8f84", "#ccd0c1") +
        rect(112, 51, 136, 264, 0.5, "#202929", "#535e59") +
        rect(117, 63, 126, 224, 0.5, "#0d1417", "#425453") +
        path("M121 67H237L121 149Z", "#172427") + label(180, 32, "TTGO", 18, "#e5e8db") +
        label(180, 334, "T-Display", 7.5) + smd(145, 353) + smd(165, 353) + smd(204, 354);
    return rect(left, top, right - left, bottom - top, 6, "#253131", "#758377") + face +
      circle(122, 27, 4, "#fbfcfd", "#b6ae81") + circle(238, 27, 4, "#fbfcfd", "#b6ae81") +
      usb(158, bottom - 11, 44) + (s3 ? "" : tactile(122, bottom - 17) + tactile(222, bottom - 17)) +
      rect(244, 336, 10, 28, 1, "#e6e7dc", "#b0b8af") + headers + extras;
  };
  return { component, art, footprint: { body, color: "#253131", pads,
    note: `${s3 ? "Reference carrier for T-Display-S3, main headers at 2.54 mm pitch. Header offsets and the 25.5 × 58 mm reference envelope are approximate." : "Reference carrier using the original official EAGLE library's 22.86 mm row separation and 2.54 mm pitch. Header offset and outline remain reference geometry."} Battery${s3 ? " and CNC UART" : ""} contacts use off-board 2.54 mm cable-termination rows beyond the outline, not the fitted socket/solder-pad land pattern. Check the exact board CAD and connector polarity.`,
    details: [[0, body[1] / 2, 8, 5, 3, "#adbbc0"]],
  }, model: { label: `${name} manufacturer STEP model`, url: repo + (s3 ? "/blob/main/dimensions/t-display-s3-full.stp" : "/blob/master/3d_file/T-Display.step") } };
}

const entries = [displayBoard({}), displayBoard({ s3: true }), displayBoard({ s3: true, touch: true })];
const lilygoComponents = entries.map(entry => entry.component);
const lilygoArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const lilygoFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const lilygoModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));

export default defineFamily("lilygo", (lilygoComponents).map(component => ({ component, render: (lilygoArt)[component.art], footprint: (lilygoFootprints)[component.id], model: lilygoModels[component.id] })));
