import { defineFamily } from "../registry.js";
import { circle, label, line, pad, path, pinRow, rect } from "../shared/svg.js";

const gold = "#cfa34b";
const weipuStep = "https://www.weipuconnector.com/wp-content/uploads/";

const spSeries = [
  {
    size: 13,
    source: "https://www.weipuconnector.com/products/sp13/",
    shellRadius: 47,
    insertRadius: 26,
    cableModel: "2023/06/SP1310-I-P_S-N.stp",
    panelModel: "2023/06/SP1312-P_S-N.stp",
    layouts: {
      2: [[0.45, 0], [-0.45, 0]],
      3: [[0.37, -0.24], [-0.37, -0.24], [0, 0.40]],
      4: [[0.33, -0.35], [-0.35, -0.35], [-0.35, 0.32], [0.33, 0.32]],
      5: [[-0.29, -0.42], [-0.47, 0.14], [0, 0.50], [0.48, 0.14], [0.31, -0.42]],
      7: [[-0.30, -0.52], [-0.58, 0], [-0.30, 0.50], [0.30, 0.50], [0.58, 0], [0.30, -0.52], [0, 0]],
    },
  },
  {
    size: 17,
    source: "https://www.weipuconnector.com/products/sp17/",
    shellRadius: 52,
    insertRadius: 30,
    cableModel: "2023/06/SP1710-P_S-N.stp",
    panelModel: "2024/06/SP1712-PS.stp",
    layouts: {
      2: [[0.38, 0], [-0.38, 0]],
      3: [[-0.27, -0.16], [0, 0.30], [0.27, -0.16]],
      4: [[-0.27, -0.27], [-0.27, 0.26], [0.27, 0.26], [0.27, -0.27]],
      5: [[-0.21, -0.33], [-0.34, 0.11], [0, 0.38], [0.35, 0.11], [0.22, -0.33]],
      7: [[-0.22, -0.40], [-0.43, 0], [-0.22, 0.39], [0.22, 0.39], [0.43, 0], [0.22, -0.40], [0, 0]],
    },
  },
  {
    size: 21,
    source: "https://www.weipuconnector.com/products/sp21-ip68/",
    shellRadius: 57,
    insertRadius: 34,
    cableModel: "2023/06/SP2110-P_S-N-1.stp",
    panelModel: "2023/12/SP2112-C.stp",
    layouts: {
      2: [[0, -0.41], [0, 0.41]],
      3: [[0.36, -0.22], [-0.36, -0.22], [0, 0.40]],
      4: [[0, -0.41], [0.41, 0], [-0.41, 0], [0, 0.41]],
      5: [[0.22, -0.33], [-0.25, -0.33], [0.35, 0.12], [-0.36, 0.12], [0, 0.40]],
      7: [[0.27, -0.46], [-0.27, -0.46], [0.53, 0], [0, 0], [-0.53, 0], [0.27, 0.44], [-0.27, 0.44]],
    },
  },
];

const amassXt30 = "https://www.china-amass.com/public/upload/20240608/810c62b3f7ace2287989748538eb2a6b.pdf";
const amassXt60 = "https://www.china-amass.com/public/upload/20240608/d64f202d7bbc62ab5ced2c87cd917d2e.pdf";
const amassXt60Pcb = "https://www.china-amass.com/public/upload/20260207/7fa24f5a6f35ec66c7a115c07a34ab06.pdf#page=17";
const amassXt90 = "https://www.china-amass.com/public/upload/20260207/7fa24f5a6f35ec66c7a115c07a34ab06.pdf#page=23";

function wirePads(count, pitch, drill, size, note) {
  return {
    body: [count * pitch, size + 2],
    inline: true, pitch, drill, size, modelHeight: 0.8, color: "#38645c",
    note,
  };
}

function diagramTerminals(component, labels) {
  return labels ? component.pins.map(({ x, y, label: number }) => {
    const left = x === 0;
    const direction = left ? 1 : -1;
    const terminalX = x + direction * 11;
    return line(x, y, terminalX, y, gold, 1.4) + pad(terminalX, y) +
      label(x + direction * 21, y, number, 9, "#2a3842", left ? "start" : "end");
  }).join("") : "";
}

function ribbedCollar(cx, cy, radius) {
  const points = Array.from({ length: 8 }, (_, index) => {
    const angle = Math.PI * index / 4;
    return [[-0.23, 3], [-0.14, 0], [0.14, 0], [0.23, 3]].map(([offset, inset]) => {
      const r = radius - inset;
      return [
        (cx + Math.cos(angle + offset) * r).toFixed(2),
        (cy + Math.sin(angle + offset) * r).toFixed(2),
      ].join(" ");
    }).join("L");
  });
  return path(`M${points.join("L")}Z`, "#28343f", "#162029");
}

function spFace(component, labels, series, female, contactLayout) {
  const cx = component.width / 2;
  const cy = 70;
  const { shellRadius, insertRadius } = series;
  const collar = female
    ? path(`M${cx - shellRadius} ${cy - 10}Q${cx - shellRadius + 9} ${cy - shellRadius} ${cx} ${cy - shellRadius}Q${cx + shellRadius - 9} ${cy - shellRadius} ${cx + shellRadius} ${cy - 10}v20Q${cx + shellRadius - 9} ${cy + shellRadius} ${cx} ${cy + shellRadius}Q${cx - shellRadius + 9} ${cy + shellRadius} ${cx - shellRadius} ${cy + 10}Z`, "#202931", "#11191d") +
      circle(cx, cy, shellRadius - 7, "#25313b", "#65727a")
    : ribbedCollar(cx, cy, shellRadius) + circle(cx, cy, shellRadius - 7, "#273846", "#657482");
  const contactRadius = contactLayout.length > 5 ? 3.6 : series.size === 21 ? 6.1 : 4.6;
  const contacts = contactLayout.map(([offsetX, offsetY], index) => {
    const dx = offsetX * (female ? -1 : 1);
    const x = cx + dx * insertRadius;
    const y = cy + offsetY * insertRadius;
    const distance = Math.hypot(dx, offsetY);
    const numberOffset = contactRadius + 4;
    const textX = distance ? x + dx * numberOffset / distance : x;
    const textY = distance ? y + offsetY * numberOffset / distance : y - numberOffset;
    const metal = female
      ? circle(x, y, contactRadius, "#bd913b", "#eccd75") + circle(x, y, contactRadius - 1.5, "#171b1c")
      : circle(x, y, contactRadius, "#b98637", "#e8bf6f") + circle(x - 0.7, y - 0.8, contactRadius - 1.6, "#e3b85d");
    return metal + label(textX, textY, index + 1, 6.8, "#f3f4f5");
  }).join("");
  const key = female
    ? rect(cx - 4, cy - insertRadius - 3, 8, 7, 1, "#111820", "#4e6776")
    : rect(cx - 4, cy - insertRadius, 8, 6, 1, "#466073", "#7c9eaf");

  return collar +
    circle(cx, cy, shellRadius - 11, female ? "#16202a" : "#24769f", "#111a20") +
    circle(cx, cy, shellRadius - 15, female ? "#202a31" : "#163a50", female ? "#697983" : "#408cb1") +
    circle(cx, cy, insertRadius, "#1b2229", "#667986") + key + contacts +
    label(cx, 137, component.shortName, 9, "#253341") +
    label(cx, 151, "MATING FACE", 7, "#536776") + diagramTerminals(component, labels);
}

function spConnector(series, contactLayout, female) {
  const count = contactLayout.length;
  const model = `SP${series.size}${female ? "12/S" : "10/P"}${count}`;
  const id = `weipu-${model.toLowerCase().replace("/", "-")}`;
  const width = 198;
  const height = 160;
  const half = Math.ceil(count / 2);
  const mount = female ? "rear-nut panel receptacle" : "straight cable plug";
  const specs = contactLayout.map((_, index) => {
    const number = String(index + 1);
    return [`pin-${number}`, number, `Contact ${number} on the keyed mating face. Assign the signal or supply for your harness.`, "passive", number];
  });
  const pins = [
    ...pinRow("left", width, height, 70 - (half - 1) * 10, 20, specs.slice(0, half)),
    ...pinRow("right", width, height, 70 - (count - half - 1) * 10, 20, specs.slice(half)),
  ];
  const cad = female ? series.panelModel : series.cableModel;
  const wirePattern = series.size === 21 && count <= 5 ? [7.62, 2.6, 4.4]
    : series.size === 21 || count <= 3 ? [5.08, 1.8, 3.3] : [5.08, 1.3, 2.8];
  return {
    component: {
      id, name: `WEIPU ${model} ${female ? "Panel Socket" : "Cable Plug"}`,
      shortName: model, category: "Connectors", manufacturer: "WEIPU",
      subtitle: `${count} contacts / ${female ? "female panel" : "male cable"}`,
      description: `${count}-position SP${series.size} threaded ${mount} with solder contacts. The drawing looks into the mating face with the key up. The wiring side is mirrored.`,
      tags: ["sp", `sp${series.size}`, "waterproof", "ip68", "circular", "solder", female ? "female" : "male"],
      source: series.source, referencePrefix: "J", art: id, width, height, pins,
    },
    art: (component, labels) => spFace(component, labels, series, female, contactLayout),
    footprint: wirePads(count, ...wirePattern,
      "Reference host-board wire termination for the off-board connector. This drawing uses a linear row of solder pads in contact number order. Use the WEIPU drawing for the connector or panel cutout and check wire size, current and spacing."),
    model: cad && { label: "WEIPU housing STEP (reference configuration)", url: weipuStep + cad },
  };
}

function xtFace(component, labels, { faceWidth, faceHeight, bulletRadius, female, antiSpark, bridge, pcbBody }) {
  const cx = component.width / 2;
  const cy = faceHeight / 2 + 7;
  const left = cx - faceWidth / 2;
  const right = cx + faceWidth / 2;
  const top = 7;
  const bottom = top + faceHeight;
  const bevel = faceWidth * 0.25;
  const keyedShape = inset => `M${left + bevel + inset} ${top + inset}H${right - bevel - inset}L${right - inset} ${top + bevel + inset}V${bottom - inset - 3}q0 3 -3 3H${left + inset + 3}q-3 0 -3 -3V${top + bevel + inset}Z`;
  const positions = [cy - faceHeight * 0.23, cy + faceHeight * 0.23];
  const contacts = positions.map((y, index) => {
    const metal = female
      ? circle(cx, y, bulletRadius, "#ae7825", "#ffdb7f") +
        circle(cx, y, bulletRadius - 2.2, "#674318", "#d3a14d") + circle(cx, y, bulletRadius - 4.1, "#26211d")
      : circle(cx, y, bulletRadius + 0.8, "#764b13", "#b97925") +
        circle(cx, y, bulletRadius - 1.3, "#e0a946", "#ffdc7d") +
        line(cx - 0.7, y - bulletRadius + 2, cx - 0.7, y + bulletRadius - 2, "#916126", 1.1) +
        line(cx - bulletRadius + 2, y, cx + bulletRadius - 2, y, "#916126", 1.1);
    return metal + label(cx + bulletRadius + 7, y, index === 0 ? "−" : "+", 9, female ? "#5a390c" : "#ffdd87");
  }).join("");
  const ridge = bridge ? rect(cx - 9, cy - 3, 18, 6, 1, "#d29a2f", "#8f5d1a") : "";
  const green = antiSpark ? rect(cx - 11, bottom - 9, 22, 5, 1.5, "#39aa68", "#2a794e") : "";
  return path(keyedShape(0), "#eeb23f", "#8b631f", 1.3) +
    path(keyedShape(4), female ? "#ffcc66" : "#9d621c", "#ffda7a") +
    ridge + contacts + green +
    label(cx, bottom + 12, component.shortName, 9, "#253341") +
    label(cx, bottom + 25, pcbBody ? "PCB · MATING FACE" : "MATING FACE", 7, "#536776") +
    diagramTerminals(component, labels);
}

function xtConnector(model, source, dimensions, [pitch, drill, copper], { antiSpark = false, bridge = false, pcbBody } = {}) {
  const female = model.endsWith("-F");
  const id = `amass-${model.toLowerCase()}`;
  const width = 160;
  const [faceWidth, faceHeight, bulletRadius] = dimensions;
  const height = faceHeight + 39;
  const pins = [
    { id: "positive", label: "+", number: "1", description: "Positive contact at the square end of the keyed housing.", type: "passive", x: width, y: Math.round(7 + faceHeight * 0.73) },
    { id: "negative", label: "−", number: "2", description: "Negative contact at the chamfered end of the keyed housing.", type: "passive", x: 0, y: Math.round(7 + faceHeight * 0.27) },
  ];
  const type = pcbBody ? "vertical through-hole power connector"
    : antiSpark ? "anti-spark cable connector" : "solder-cup power connector";
  const placement = pcbBody ? "vertical PCB mounting" : "a two-wire cable";
  return {
    component: {
      id, name: `AMASS ${model} ${female ? "Female" : "Male"}`, shortName: model,
      category: "Connectors", manufacturer: "AMASS",
      subtitle: `2-pin ${type}`,
      description: `Polarized yellow ${female ? "female socket" : "male plug"} for ${placement}${antiSpark ? " with an anti-spark contact" : ""}. The drawing looks into the mating face with the chamfered end up. Confirm polarity on the fitted housing.`,
      tags: ["xt", model.match(/^XT\d+/)[0].toLowerCase(), "power", "battery", pcbBody ? "pcb" : "solder", female ? "female" : "male"],
      source, referencePrefix: "J", art: id, width, height, pins,
    },
    art: (component, labels) => xtFace(component, labels, { faceWidth, faceHeight, bulletRadius, female, antiSpark, bridge, pcbBody }),
    footprint: pcbBody ? {
      body: pcbBody.slice(0, 2), modelHeight: pcbBody[2], color: "#eeb23f", drill, size: copper,
      pads: [
        { id: "positive", x: pitch / 2, y: 0, square: true },
        { id: "negative", x: -pitch / 2, y: 0 },
      ],
      note: "AMASS XT60PB vertical mounting pattern with 7.20 mm pin spacing and 4.60 mm finished holes. The chamfered end is pad 2 (negative). Confirm copper dimensions for your process and application.",
    } : wirePads(2, pitch, drill, copper,
      "Reference host-board solder pads for wires from the off-board connector. Pad 1 is positive and pad 2 is negative. Size the copper and wire termination for your installation. Use the part drawing for the actual connector."),
  };
}

const spEntries = spSeries.flatMap(series => Object.values(series.layouts).flatMap(contacts => [
  spConnector(series, contacts, false),
  spConnector(series, contacts, true),
]));
const xtEntries = [
  xtConnector("XT30U-F", amassXt30, [43, 78, 9], [5.08, 1.5, 3]),
  xtConnector("XT30U-M", amassXt30, [43, 78, 9], [5.08, 1.5, 3]),
  xtConnector("XT60H-F", amassXt60, [53, 96, 11], [7.62, 2.2, 4.2], { bridge: true }),
  xtConnector("XT60H-M", amassXt60, [53, 96, 11], [7.62, 2.2, 4.2], { bridge: true }),
  xtConnector("XT60PB-F", amassXt60Pcb, [49, 96, 11], [7.2, 4.6, 6.2], { bridge: true, pcbBody: [16, 8.1, 16.7] }),
  xtConnector("XT60PB-M", amassXt60Pcb, [49, 94, 11], [7.2, 4.6, 6.2], { bridge: true, pcbBody: [16, 8.1, 16] }),
  xtConnector("XT90H-F", amassXt90, [58, 114, 12], [10.16, 3, 5.6]),
  xtConnector("XT90H-M", amassXt90, [58, 114, 12], [10.16, 3, 5.6]),
  xtConnector("XT90S-F", amassXt90, [54, 114, 12], [10.16, 3, 5.6], { antiSpark: true }),
];

const entries = [...spEntries, ...xtEntries];

const spXtComponents = entries.map(({ component }) => component);
const spXtArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
const spXtFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
const spXtModels = Object.fromEntries(entries
  .filter(entry => entry.model)
  .map(({ component, model }) => [component.id, model]));

export default defineFamily("sp-xt", (spXtComponents).map(component => ({ component, render: (spXtArt)[component.art], footprint: (spXtFootprints)[component.id], model: spXtModels[component.id] })));
