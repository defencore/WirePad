import { defineFamily } from "../registry.js";
import { circle, label, line, path, rect } from "../shared/svg.js";
import { escapeText } from "../../shared/text.js";

const keyes = sku => `https://docs.keyestudio.com/projects/${sku}/en/latest/docs/${sku}.html`;
const keyesImage = (sku, file) => `https://docs.keyestudio.com/projects/${sku}/en/latest/_images/${file}`;
const joy = sku => `https://sensorkit.joy-it.net/en/sensors/${sku.toLowerCase()}`;
const silk = "#e5db7c";
const silver = "#c5ccc6";
const round = value => Math.round(value * 10000) / 10000;
const terminal = (id, name, type, description) => ({ id, name, type, description });
const ground = (name = "-") => terminal("gnd", name, "power_in", "Common supply and signal ground.");
const supply = (name = "+", volts = "5 V") => terminal("vcc", name, "power_in", `${volts} module supply input. Signal voltages are referenced to this rail.`);
const analog = (description, name = "S") => terminal("analog", name, "output", description);
const digital = (description, name = "D0", type = "output") => terminal("digital", name, type, description);

function mounting(x, y, radius = 7) {
  return circle(x, y, radius, silver, "#f2f0de") + circle(x, y, radius * .58, "#edf1e9", "#6e7168");
}

function resistor(x, y, vertical = false) {
  return `<g transform="translate(${x} ${y})${vertical ? " rotate(90)" : ""}">` +
    rect(-8, -3.5, 16, 7, 1, "#c0ab7b", silver) + rect(-4.8, -3.5, 9.6, 7, .5, "#665f44") + "</g>";
}

function comparator(x, y, scale = 1) {
  return `<g transform="translate(${x} ${y}) scale(${scale})">` +
    [0, 1, 2, 3].map(i => line(-15, -12 + i * 8, -10, -12 + i * 8, silver, 3) +
      line(10, -12 + i * 8, 15, -12 + i * 8, silver, 3)).join("") +
    rect(-11, -18, 22, 36, 1.5, "#202425", "#656d67") + circle(-6, -12, 1.2, "#8e9990") + "</g>";
}

function trimmer(x, y, tall = false) {
  return rect(x - 17, y - (tall ? 28 : 16), 34, tall ? 56 : 32, 2, "#177db9", "#91b4c1") +
    circle(tall ? x - 9 : x, tall ? y + 18 : y, 6, tall ? "#bca268" : "#b6bec0", "#e2d3a0") +
    line(tall ? x - 13 : x - 4, tall ? y + 18 : y, tall ? x - 5 : x + 4, tall ? y + 18 : y, "#47575d", 2);
}

function indicator(x, y) {
  return rect(x - 6, y - 3.5, 12, 7, 1, "#e5d6a1", silver) + rect(x - 2, y - 3, 4, 6, .4, "#b4c55f");
}

function to92(x, y, title) {
  return [-8, 0, 8].map(dx => line(x + dx, y + 13, x + dx, y + 35, silver, 2)).join("") +
    path(`M${x - 13} ${y + 13}V${y - 8}Q${x} ${y - 23} ${x + 13} ${y - 8}V${y + 13}Z`, "#22282a", "#778078") +
    label(x, y + 1, title, 5.2, "#a9b5a5");
}

function photocell(x, y) {
  return line(x - 7, y + 12, x - 7, y + 32, silver, 2) + line(x + 7, y + 12, x + 7, y + 32, silver, 2) +
    circle(x, y, 18, "#c8b69b", "#e4d6bf") +
    path(`M${x - 12} ${y - 9}H${x + 11}V${y - 4}H${x - 11}V${y + 1}H${x + 11}V${y + 6}H${x - 11}V${y + 11}H${x + 11}`, "none", "#9e5144", 2);
}

// All pin headers face down in the component-side view. These coordinates
// define both the illustrated metal/anchors and the reference carrier pads.
function sensor(spec) {
  const { body: [bw, bh], scale, top = 35, width = 230 } = spec;
  const left = (width - bw * scale) / 2;
  const height = Math.ceil(top + bh * scale + 48);
  const contacts = spec.terminals.map((pin, i, pins) => ({ ...pin,
    x: round((i - (pins.length - 1) / 2) * 2.54), y: round(bh / 2 - 2.54),
  }));
  const project = ({ x, y }) => [round(width / 2 + x * scale), round(top + (y + bh / 2) * scale)];
  const pins = contacts.map(contact => {
    const [x, y] = project(contact);
    return { id: contact.id, number: contact.name, label: contact.name, type: contact.type,
      description: `${contact.name} — ${contact.description}`, x, y, edge: "bottom", surface: true };
  });
  const geometry = { left, top, w: bw * scale, h: bh * scale, cx: width / 2, scale };
  const component = {
    id: spec.id, art: spec.id, name: spec.name, shortName: spec.short,
    manufacturer: spec.manufacturer ?? "Keyestudio", category: "Sensors", referencePrefix: "U",
    subtitle: spec.subtitle, source: spec.source, references: spec.references,
    description: `${spec.description} Component-side view, header at the bottom. ${spec.variant} Header pad numbers use the printed terminal names. The board envelope, small-part positions and carrier dimensions are representative.`,
    tags: ["diy", "starter kit", "arduino", "sensor", ...spec.tags],
    contactLayout: "physical", width, height, pins,
  };
  return { component,
    render: (part, showLabels = true) => {
      const bottom = top + geometry.h;
      const shape = spec.notched
        ? path(`M${left} ${top}H${left + geometry.w}V${bottom - 45}q-12 0-12 10q0 10 12 10V${bottom}H${left}V${bottom - 25}q12 0 12-10q0-10-12-10Z`, "#242622", "#777c65")
        : rect(left, top, geometry.w, geometry.h, 3, "#242622", "#777c65");
      return shape + spec.draw(geometry) +
        contacts.map((contact, i) => {
          const pin = part.pins[i];
          return `<g data-contact="${pin.id}"><title>${escapeText(pin.description)}</title>` +
            rect(pin.x - 6.5, pin.y - 7, 13, 14, 1, spec.manufacturer ? "#303431" : "#e6cf45", "#d8d8ad") +
            rect(pin.x - 2.3, pin.y - 1.5, 4.6, bottom + 14 - pin.y, .7, silver, "#f2f1df") +
            (showLabels ? label(pin.x, pin.y - 14, pin.label, 6.3, silk) : "") + "</g>";
        }).join("") + label(width / 2, height - 12, "COMPONENT SIDE / HEADER DOWN", 6.3, "#465b59");
    },
    footprint: { body: spec.body, color: "#242622", modelHeight: 1.6,
      pads: contacts.map(({ id, x, y }) => ({ id, x, y, size: 1.8, drill: 1, square: id === contacts[0].id })),
      note: `Reference carrier for ${spec.name}; approximate board envelope and header origin, 2.54 mm reference contact pitch, 1.0 mm selected drill and 1.8 mm selected copper. This is not a manufacturer land pattern. Pad identifiers match the printed terminal names and component-side order. Mounting holes, sensor leads and unused component-placement pads are not carrier contacts. Verify the exact supplied module before fabrication. Generated 3D body is approximate.`,
      details: spec.details ?? [],
    },
  };
}

const headerFour = (first, supplyRange, analogNote, digitalNote) => [
  ...(first === "VCC" ? [supply("VCC", supplyRange), ground("GND")] : [ground("GND"), supply("VCC", supplyRange)]),
  digital(digitalNote), analog(analogNote, "A0"),
];

const entries = [
  sensor({
    id: "keyestudio-ks0036-flame", name: "Keyestudio KS0036 Flame Sensor", short: "KS0036 Flame",
    source: keyes("KS0036"), references: [keyesImage("KS0036", "image-20251226155333010.png"), keyesImage("KS0036", "3.png")],
    body: [16, 40], scale: 6.5, subtitle: "KS0036 / four-contact IR flame detector",
    variant: "Unmarked four-contact black PCB revision in the manufacturer photo and wiring diagram; VCC, GND, D0, A0 run left-to-right.",
    description: "Near-infrared flame/light detector for the 760–1100 nm band, with an adjustable comparator and both analog and digital outputs. The tutorial demonstrates D0 and leaves A0 unused; all four physical contacts are included.",
    tags: ["ks0036", "flame", "fire", "infrared", "ir", "analog", "digital", "threshold"],
    terminals: headerFour("VCC", "3.3–5 V", "Analog detector voltage for an ADC; separate from the adjustable D0 threshold output. Keep the host ADC within its input-voltage limit.", "Digital comparator status output. The trimmer sets the switching threshold. The manufacturer example reads this as a digital input; do not drive it externally."),
    draw: ({ left, top, w, h, cx }) => {
      const y = top + h;
      return rect(cx - 5, top - 6, 10, 35, 2, "#161d21", "#65716a") +
        path(`M${cx - 11} ${top + 4}V${top - 14}Q${cx} ${top - 30} ${cx + 11} ${top - 14}V${top + 4}Z`, "#172023", "#65716a") +
        [cx - 7, cx + 7].map(x => line(x, top + 4, x, top + 27, silver, 2)).join("") +
        [left + 16, left + w - 16].flatMap(x => [top + 48, top + 72].map(yy => resistor(x, yy, true))).join("") +
        comparator(cx - 19, top + 111) + trimmer(cx + 23, top + 111) + mounting(cx, y - 77) +
        indicator(left + 16, y - 70) + indicator(left + w - 16, y - 70) + label(cx, y - 47, "KS0036", 9, silk);
    },
  }),
  sensor({
    id: "keyestudio-ks0040-mq2", name: "Keyestudio KS0040 MQ-2 Gas Sensor", short: "KS0040 MQ-2",
    source: keyes("KS0040"), references: [keyesImage("KS0040", "wps1.jpg"), keyesImage("KS0040", "wps2.png"), "https://docs.keyestudio.com/projects/KS4009-KS4010/en/latest/KS4009-KS4010.html"],
    body: [20, 50], scale: 6.2, subtitle: "KS0040 / heated MQ-2 / analog + threshold",
    variant: "Unmarked black four-contact PCB photographed in the KS0040 manual. GND, VCC, D0, A0 run left-to-right, as confirmed by the wiring diagram; do not copy the flame module's supply order.",
    description: "Heated MQ-2 gas/smoke sensing module with a metal mesh can, adjustable threshold and analog output. Its broad response includes combustible gases; the output is an educational indication rather than a calibrated gas-specific concentration.",
    tags: ["ks0040", "mq2", "mq-2", "gas", "smoke", "analog", "threshold"],
    terminals: headerFour("GND", "5 V", "Analog gas-sensor voltage. The manufacturer reads this contact with an ADC; the output can approach the 5 V supply. Calibration is required for concentration estimates.", "Threshold status output, set by the onboard trimmer. A separate manufacturer kit tutorial documents D0 changing state at the set gas threshold; signal levels follow the module supply."),
    details: [[0, -14, 18, 18, 14, "#bfc4bd"]],
    draw: ({ left, top, w, h, cx }) => {
      const y = top + h;
      return circle(cx, top + 43, 56, "#aab1ad", "#e1e4d7") + circle(cx, top + 43, 49, "#d5d8cf", "#858e88") +
        circle(cx, top + 43, 43, "#787f79", "#aeb8ae") +
        Array.from({ length: 11 }, (_, row) => Array.from({ length: 11 }, (_, col) => {
          const dx = (col - 5) * 7, dy = (row - 5) * 7;
          return dx * dx + dy * dy < 39 * 39 ? circle(cx + dx, top + 43 + dy, .8, "#2c3630") : "";
        }).join("")).join("") +
        [left + 15, left + 38, left + 62, left + 86, left + 109].map(x => resistor(x, top + 121, true)).join("") +
        comparator(cx - 24, top + 177, 1.1) + trimmer(cx + 25, top + 176) + mounting(cx, y - 76) +
        indicator(left + 15, y - 73) + indicator(left + w - 15, y - 73) + label(cx, y - 46, "KS0040 / MQ-2", 8.5, silk);
    },
  }),
  sensor({
    id: "keyestudio-ks0048-water-level", name: "Keyestudio KS0048 Water Level Sensor", short: "KS0048 Water",
    source: keyes("KS0048"), references: [keyesImage("KS0048", "wps1.png"), keyesImage("KS0048", "wps2.png")],
    body: [20, 65], scale: 5.4, subtitle: "KS0048 / exposed traces / analog level",
    variant: "Black tinned-trace version in the official KS0048 photo; header order is -, +, S from left-to-right.",
    description: "Conductive water-level/droplet board with a nominal 40 × 16 mm sensing area. Wetting more of the exposed parallel traces changes the analog output. The response depends on liquid conductivity and coverage; keep the connection end dry.",
    tags: ["ks0048", "water", "water level", "liquid", "leak", "analog"],
    terminals: [ground(), supply(), analog("Analog water-contact level; the manufacturer's example reads S with an ADC. Characterize the actual liquid and mounting orientation before interpreting this as depth.")],
    draw: ({ left, top, w, h, cx }) => {
      const y = top + h;
      return Array.from({ length: 9 }, (_, i) => line(left + 12 + i * (w - 24) / 8, top + 12, left + 12 + i * (w - 24) / 8, top + 223, "#d9ddd2", 3)).join("") +
        line(left + 12, top + 12, left + w - 12, top + 12, "#d9ddd2", 3) +
        label(cx, top + 244, "Water Sensor", 8, silk) + to92(cx, y - 68, "Q1") +
        mounting(left + 12, y - 14, 5) + mounting(left + w - 12, y - 14, 5);
    },
  }),
  sensor({
    id: "keyestudio-ks0203-rain-steam", name: "Keyestudio KS0203 Rain / Steam Sensor", short: "KS0203 Rain",
    source: keyes("KS0203"), references: [keyesImage("KS0203", "wps1.png"), keyesImage("KS0203", "wps2.jpg")],
    body: [20, 30], scale: 7, notched: true, subtitle: "KS0203 / conductive rainwater detector / analog",
    variant: "Spiderweb trace pattern from the official component photo, rotated clockwise so the -, +, S header is at the bottom.",
    description: "Conductive droplet/steam board explicitly documented by Keyestudio as a simple rainwater detector. Wetting the exposed pattern raises the analog output. It detects surface water rather than reporting relative humidity or rainfall in millimetres; the connector is not waterproof.",
    tags: ["ks0203", "rain", "rainfall", "rainwater", "steam", "moisture", "water", "analog"],
    terminals: [ground(), supply("+", "3.3 or 5 V"), analog("Analog surface-water signal. The manufacturer states that output voltage increases as the sensing face becomes wet; read with an ADC.")],
    draw: ({ left, top, w, h, cx }) => {
      const cy = top + 63;
      return [15, 27, 39, 51, 63].map(r => path(Array.from({ length: 9 }, (_, i) => {
        const a = -Math.PI / 2 + i * Math.PI / 4;
        return `${i ? "L" : "M"}${cx + Math.cos(a) * r} ${cy + Math.sin(a) * r}`;
      }).join("") + "Z", "none", "#dddcd2", 3)).join("") +
        Array.from({ length: 8 }, (_, i) => { const a = i * Math.PI / 4; return line(cx + Math.cos(a) * 15, cy + Math.sin(a) * 15, cx + Math.cos(a) * 63, cy + Math.sin(a) * 63, "#dddcd2", 1.7); }).join("") +
        resistor(left + 22, top + h - 66) + resistor(left + w - 22, top + h - 66) + mounting(cx, top + h - 66) +
        label(cx, top + h - 43, "Steam Sensor", 8, silk);
    },
  }),
  sensor({
    id: "joyit-ky037-sound-threshold", name: "Joy-IT KY-037 Microphone Threshold Sensor", short: "KY-037 Sound",
    manufacturer: "Joy-IT", source: joy("KY-037"), references: ["https://sensorkit.joy-it.net/files/files/sensors/KY-037/KY-037.png", "https://sensorkit.joy-it.net/files/files/sensors/KY-037/KY-037.svg", "https://www.ti.com/lit/ds/symlink/lm393.pdf"],
    body: [15, 36], scale: 7, subtitle: "KY-037 / LM393 / A0 + D0",
    variant: "Joy-IT SensorKit black PCB variant, oriented as its pin-assignment drawing: A0, G, +, D0 left-to-right. Other generic KY-037 boards can differ.",
    description: "Electret microphone with an LM393 threshold comparator and blue adjustment trimmer. A0 provides the raw analog sensor voltage; D0 reports the selected threshold state. It is intended for sound-event detection rather than calibrated sound-pressure measurement.",
    tags: ["ky037", "ky-037", "sound", "microphone", "noise", "threshold", "lm393", "analog", "digital"],
    terminals: [analog("Raw microphone sensor voltage. Joy-IT notes an inverted response: a larger sensed value gives a lower analog voltage. This is not a calibrated decibel output.", "A0"), ground("G"), supply("+", "3.3–5 V"), digital("LM393 open-collector threshold output with the board's indicator/pull-up circuit. The potentiometer adjusts the threshold; read its state with a digital input and match the host voltage.", "D0", "open_collector")],
    draw: ({ left, top, w, h, cx }) => rect(cx - 23, top - 8, 46, 40, 3, "#a8b0b0", "#e0e5d9") +
      circle(cx, top + 8, 17, "#414b46", "#89968c") + circle(cx - 3, top + 7, 3.5, "#1c2927") +
      mounting(left + 10, top + 20, 5) + mounting(left + w - 10, top + 20, 5) +
      trimmer(left + 20, top + 109, true) + comparator(left + w - 27, top + 111, 1.2) +
      mounting(cx, top + h - 67, 12) + indicator(left + 14, top + h - 47) + indicator(left + w - 14, top + h - 47) +
      label(cx, top + 60, "KY-037", 9, "#e2e9dd"),
  }),
  sensor({
    id: "keyestudio-ks0022-lm35", name: "Keyestudio KS0022 LM35 Temperature Sensor", short: "KS0022 LM35",
    source: keyes("KS0022"), references: [keyesImage("KS0022", "image-20251225154818420.png"), keyesImage("KS0022", "image-20251225155007551.png")],
    body: [20, 30], scale: 7, notched: true, subtitle: "KS0022 / LM35 / 10 mV per °C",
    variant: "Unmarked black PCB version in the manufacturer photo, rotated clockwise to match the header-down wiring drawing. Header order is -, +, S.",
    description: "LM35 semiconductor temperature module with a linear analog output of 10 mV per degree Celsius. Keyestudio documents a 0–100 °C module measurement range and demonstrates a 5 V supply.",
    tags: ["ks0022", "lm35", "temperature", "analog", "thermometer"],
    terminals: [ground(), supply(), analog("LM35 analog temperature output, 10 mV/°C; approximately 250 mV at 25 °C. Read with an ADC using the correct voltage reference.")],
    draw: ({ top, h, cx }) => to92(cx, top + 35, "LM35") + resistor(cx, top + 97) + mounting(cx, top + h - 65, 14) +
      label(cx, top + 123, "LM35 / °C", 10, silk),
  }),
  sensor({
    id: "keyestudio-ks0028-photocell", name: "Keyestudio KS0028 Photocell Sensor", short: "KS0028 Light",
    source: keyes("KS0028"), references: [keyesImage("KS0028", "image-20251225164242434.png"), keyesImage("KS0028", "image-20251225164331107.png")],
    body: [20, 30], scale: 7, notched: true, subtitle: "KS0028 / photoresistor divider / analog",
    variant: "Black photoresistor PCB in the official photo and wiring drawing; -, +, S left-to-right with the header at the bottom.",
    description: "Light-dependent-resistor module with an analog divider output. The manufacturer demonstrates a 5 V supply; covering the photocell reduces the ADC reading. It reports relative light level rather than calibrated lux.",
    tags: ["ks0028", "photocell", "photoresistor", "ldr", "light", "ambient", "analog"],
    terminals: [ground(), supply(), analog("Analog light-dependent divider output. The official example reports a lower reading when the photocell is covered; allow for the module supply and ADC input range.")],
    draw: ({ top, h, cx }) => photocell(cx, top + 35) + resistor(cx, top + 87) + mounting(cx, top + h - 65, 14) +
      label(cx, top + 114, "Photocell", 10, silk),
  }),
  sensor({
    id: "joyit-ky003-hall", name: "Joy-IT KY-003 A3144 Hall Sensor", short: "KY-003 Hall",
    manufacturer: "Joy-IT", source: joy("KY-003"), references: ["https://sensorkit.joy-it.net/files/files/sensors/KY-003/KY-003.png", "https://sensorkit.joy-it.net/files/files/sensors/KY-003/KY-003.svg", "https://www.joy-it.net/en/products/SEN-KY003HMS"],
    body: [15, 29], scale: 7, top: 57, subtitle: "KY-003 / SEN-KY003HMS / A3144 / active-low",
    variant: "Joy-IT SensorKit A3144 board, using its component-side pin-assignment drawing: -, +, S left-to-right. The three-contact wiring header is modeled; spare sensor-placement holes remain artwork.",
    description: "Digital Hall-effect switch with an A3144 sensor and indicator LED. Joy-IT's SensorKit documentation specifies 5 V for this LED-equipped board. A suitable magnetic field makes the signal output low; it is a solid-state Hall switch.",
    tags: ["ky003", "ky-003", "sen-ky003hms", "a3144", "hall", "magnetic", "magnet", "digital"],
    terminals: [ground(), supply(), digital("A3144 active-low, open-collector magnetic-switch output. Use the pull-up arrangement in the Joy-IT guide and translate the signal for a 3.3 V-only host when required.", "S", "open_collector")],
    draw: ({ left, top, w, h, cx }) => to92(cx, top - 12, "A3144") +
      [top + 58, top + 80, top + 102].flatMap(y => [-20, 0, 20].map(dx => circle(cx + dx, y, 6.5, silver) + circle(cx + dx, y, 3.6, "#242622"))).join("") +
      mounting(left + 9, top + 18, 5) + mounting(left + w - 9, top + 18, 5) + resistor(cx + 25, top + h - 65) +
      indicator(cx - 18, top + h - 65) + label(cx, top + h - 43, "KY-003", 9, "#e2e9dd"),
  }),
];

export default defineFamily("diy-kit-sensors", entries);
