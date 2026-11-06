import { circle, edgePads, label, line, path, pinRow, rect } from "./catalog-extension.js";

const ckDatasheet = "https://www.littelfuse.com/assetdocs/littelfuse-ck-toggle-7000-series-datasheet?assetguid=fed01bc6-88d0-4bda-b896-13c98cf9e90e";
const nkkProduct = "https://www.nkkswitches.com/wp-content/themes/impress-blank/search/inc/part.php?part_no=MN11SS4W03";
const nkkModel = {
  label: "NKK 3D CAD model",
  url: "https://nkkswitches-embedded.partcommunity.com/3d-cad-models/?info=nkkswitches%2Ftoggle%2Fm%2Fmn_bt_asmtab.prj&varset=%7BSRS%3DMN%7D%2C%7BPLS%3D1%7D%2C%7BCRCTS%3D1%7D%2C%7BTGGLS%3DS%7D%2C%7BBSHNG%3DS4%7D%2C%7BCMR%3DW%7D%2C%7BTRMNLS%3D03%7D%2C%7BCPS%3D%7D%2C%7BCCLR%3D%7D%2C%7BOCHR%3DDownload+pdf%7D",
};

function toggleContact(id, number, text, description) {
  return [id, text, description, "passive", String(number)];
}

function togglePole(prefix, first, name = "") {
  return [
    toggleContact(prefix + "throw-1", first, String(first), name + "Throw for lever position 3."),
    toggleContact(prefix + "common", first + 1, `${first + 1} COM`, name + "Moving common contact."),
    toggleContact(prefix + "throw-2", first + 2, String(first + 2), name + "Throw for lever position 1."),
  ];
}

function toggleArt(component, showLabels) {
  const { width, symbol } = component;
  const centerOff = symbol.endsWith("center-off");
  const doublePole = symbol.startsWith("toggle-dpdt");
  const nkk = symbol === "toggle-spst";
  const contactXs = nkk ? [83, 106] : [61, 83, 105];
  const housing = doublePole
    ? path("M48 75L60 66H122L117 103L106 109H48Z", "#722c29", "#4a2528")
    : "";
  const secondRow = doublePole
    ? [68, 90, 112].map(x => rect(x, 95, 5, 20, 1, "#7e8a92", "#65737d")).join("")
    : "";
  const contacts = contactXs.map(x => rect(x - 2.7, 103, 5.4, 18, 0.8, "#bec8cc", "#7d8c92")).join("");
  const lever = centerOff
    ? path("M76 44L78 10Q79 5 84 5Q89 5 90 10L92 44Z", "#c2ccd1", "#627680") +
      line(81, 12, 80, 42, "#f4f6f5", 1.7)
    : path("M76 44L88 11Q90 6 95 8Q100 10 98 15L91 45Z", "#c2ccd1", "#627680") +
      line(90, 14, 80, 42, "#f4f6f5", 1.7);
  const switchBody = housing + secondRow + contacts +
    rect(47, 77, 72, 30, 3, nkk ? "#2a3336" : "#763131", nkk ? "#161e20" : "#4c2025") +
    rect(49, 96, 68, 8, 1, nkk ? "#242a2d" : "#542323") +
    rect(46, 69, 74, 11, 2, "#9ba8ad", "#647781") +
    line(49, 71, 116, 71, "#dce2e1", 1.3) +
    rect(66, 40, 34, 28, 2, "#b0bdc0", "#71858c") +
    [43, 47, 51, 55, 59, 63].map(y => line(67, y, 99, y, "#6f858c", 1.1)).join("") +
    path("M59 59L66 54H100L107 59V67H59Z", "#a4b1b6", "#687d84") +
    line(67, 56, 99, 56, "#dbe3e3") + lever +
    label(83, 88, nkk ? "NKK" : "C&K", 8, "#eee5de");
  const groups = showLabels ? rect(4, 46, 39, 66, 4, "#243842") +
    rect(width - 43, 46, 39, 66, 4, "#243842") + edgePads(component, true) : "";
  return switchBody + groups + label(83, 133, component.shortName, 8, "#334451");
}

function ckToggle(model, doublePole, centerOff) {
  const id = `ck-${model.toLowerCase()}`;
  const width = 166;
  const height = 143;
  const poles = doublePole ? "DPDT" : "SPDT";
  const operation = centerOff ? "On-Off-On" : "On-On";
  const pinsA = togglePole(doublePole ? "a-" : "", 1, doublePole ? "Pole A. " : "");
  const pinsB = doublePole ? togglePole("b-", 4, "Pole B. ") : [];
  const pins = doublePole
    ? [...pinRow("left", width, height, 59, 19, pinsA), ...pinRow("right", width, height, 59, 19, pinsB)]
    : [...pinRow("left", width, height, 78, 0, [pinsA[1]]),
      ...pinRow("right", width, height, 68, 20, [pinsA[0], pinsA[2]])];
  const groups = [{ ids: pinsA.map(([pin]) => pin), x: -4.83, y: doublePole ? -2.35 : 0, pitch: 4.83 }];
  if (doublePole) groups.push({ ids: pinsB.map(([pin]) => pin), x: -4.83, y: 2.35, pitch: 4.83 });
  return {
    component: {
      id, art: id, name: `C&K ${model} ${poles} Toggle`, shortName: model,
      category: "Switches", manufacturer: "C&K / Littelfuse", referencePrefix: "SW",
      symbol: `toggle-${poles.toLowerCase()}${centerOff ? "-center-off" : ""}`,
      subtitle: `${operation} · Straight PC pins`,
      description: `Miniature maintained ${poles} ${operation} toggle with straight through-hole pins and a 1/4-40 threaded bushing.${centerOff ? " Center position opens every contact." : ""} Q silver contacts are rated 5 A at 28 V DC or 120 V AC for resistive loads.`,
      tags: ["toggle", "tumbler", "switch", poles.toLowerCase(), operation.toLowerCase(), "panel", "through-hole"],
      source: ckDatasheet, width, height, pins,
    },
    art: toggleArt,
    footprint: {
      body: [12.7, doublePole ? 11.43 : 6.86], modelHeight: 7.32, color: "#763131",
      details: [[0, 0, 6.35, 6.35, 8.89, "#aebbc0"]],
      size: 2.65, drill: 1.85, groups,
      note: `C&K 7000-series C straight-terminal PCB pattern. Contacts in each pole are spaced 4.83 mm apart${doublePole ? " with 4.70 mm between pole rows" : ""}. Provide panel support and check the bushing cutout and lever clearance separately.`,
    },
  };
}

const nkkId = "nkk-mn11ss4w03";
const nkkWidth = 166;
const nkkHeight = 143;
const nkkToggle = {
  component: {
    id: nkkId, art: nkkId, name: "NKK MN11SS4W03 SPST Toggle", shortName: "MN11SS4W03",
    category: "Switches", manufacturer: "NKK Switches", referencePrefix: "SW", symbol: "toggle-spst",
    subtitle: "On-Off · M6 bushing · Straight PC pins",
    description: "Maintained SPST toggle with a threaded M6 bushing and straight PC pins. The ON position closes 2–3. Silver contacts are rated 4 A at 30 V DC or 6 A at 125 V AC for resistive loads.",
    tags: ["toggle", "tumbler", "switch", "spst", "on-off", "panel", "through-hole"],
    source: nkkProduct, width: nkkWidth, height: nkkHeight,
    pins: [
      ...pinRow("left", nkkWidth, nkkHeight, 78, 0, [toggleContact("common", 2, "2 COM", "Moving common contact.")]),
      ...pinRow("right", nkkWidth, nkkHeight, 78, 0, [toggleContact("throw-1", 3, "3", "Connected to terminal 2 in the ON position.")]),
    ],
  },
  art: toggleArt,
  footprint: {
    body: [13, 7.9], modelHeight: 8.3, color: "#2a3336", size: 2.6, drill: 1.8,
    details: [[0, 0, 6, 6, 8.9, "#aebbc0"]],
    groups: [{ ids: ["common", "throw-1"], x: 0, y: 0, pitch: 4.7 }],
    note: "NKK M-series 03 straight-terminal pitch. The SPST circuit uses terminal positions 2 and 3. Check the panel cutout, bushing and lever clearances separately.",
  },
  model: nkkModel,
};

const sot23Footprint = {
  body: [2.9, 1.6], modelHeight: 1.05, color: "#24292e", smd: true, size: [0.8, 0.8],
  pads: [{ id: "g", x: -0.95, y: 1.2 }, { id: "s", x: 0.95, y: 1.2 }, { id: "d", x: 0, y: -1.2 }],
  note: "AOS SOT23 recommended land pattern, drawing PO-00001. Lead pitch is 0.95 mm and the opposite pad rows are 2.40 mm apart.",
};

const dpakFootprint = {
  body: [6.604, 6.096], modelHeight: 2.286, color: "#24292e", smd: true,
  pads: [
    { id: "g", x: -2.286, y: 6.175, size: [1.5, 3] },
    { id: "s", x: 2.286, y: 6.175, size: [1.5, 3] },
    { id: "d", x: 0, y: -0.425, size: [6.25, 6.8] },
  ],
  note: "AOS TO252 recommended land pattern, drawing PO-00009. Drain pad 2 is the exposed tab land. The clipped center lead does not have a separate board pad.",
};

const to220Footprint = {
  body: [10.42, 4.45], modelHeight: 15.05, color: "#272d30", size: 2, drill: 1.3,
  groups: [{ ids: ["g", "d", "s"], x: -2.54, y: 0.95 }],
  note: "Straight vertical TO-220 through-hole land pattern at 2.54 mm lead pitch. The off-board heatsink tab is electrically drain. Check lead fit, isolation and mechanical clearances for the chosen mounting hardware.",
};

const fetPackage = {
  "SOT-23": { width: 132, height: 102, footprint: sot23Footprint, bottom: [40, 92] },
  "TO-252": { width: 132, height: 132, footprint: dpakFootprint, bottom: [36, 96] },
  "TO-220": { width: 132, height: 205, footprint: to220Footprint, bottom: [42, 66, 90] },
};

function fetPin(id, number, pChannel, tab) {
  const descriptions = {
    g: pChannel
      ? "Gate. Drive below the source to turn on. Observe the maximum gate-to-source voltage."
      : "Gate. Drive above the source to turn on. Observe the maximum gate-to-source voltage.",
    d: tab ? "Drain. The metal tab is electrically connected to this terminal." : "Drain terminal.",
    s: "Source terminal and reference for the gate drive.",
  };
  return [id, id.toUpperCase(), descriptions[id], id === "g" ? "input" : "passive", String(number)];
}

function fetLeads(component, showLabels) {
  if (!showLabels) return "";
  return component.pins.map(({ x, y, label: text }) => {
    const direction = y === 0 ? 1 : -1;
    return line(x, y, x, y + direction * 12, "#8e9ca5", 1.6) +
      label(x + 12, y + direction * 6, text, 8, "#425560");
  }).join("");
}

function sot23Art(component, showLabels) {
  return fetLeads(component, showLabels) +
    [40, 92].map(x => gullWing(x, 67, 90, 10)).join("") +
    gullWing(66, 36, 12, 10) +
    rect(27, 34, 78, 36, 4, "#262a2f", "#14191e") +
    rect(30, 36, 72, 28, 3, "#30363a", "#454f55") +
    circle(35, 57, 2.2, "#a9afb1") +
    label(66, 51, component.marking, 11, "#c7d0d2");
}

function gullWing(x, bodyY, tipY, width) {
  const edge = width / 2;
  const sign = Math.sign(tipY - bodyY);
  return path(`M${x - edge} ${bodyY}h${width}v${sign * 8}l2 ${sign * 5}V${tipY}h-${width}v${-sign * 5}l-2 ${-sign * 5}Z`, "#b5c0c5", "#71828a") +
    line(x - edge + 2, tipY - sign * 2, x + edge, tipY - sign * 2, "#e8eded", 1.2);
}

function dpakArt(component, showLabels) {
  return fetLeads(component, showLabels) +
    path("M43 10H89L95 15V30H37V15Z", "#b4c1c8", "#6d818c") +
    line(45, 12, 86, 12, "#e8eded", 1.4) +
    gullWing(36, 83, 120, 9) + gullWing(96, 83, 120, 9) +
    rect(61, 83, 10, 13, 1, "#a0adb4", "#6d8089") +
    path("M31 20H101L109 30V85L102 91H30L23 85V30Z", "#22282e", "#11191f") +
    path("M33 24H99L104 31V77H28V31Z", "#30373d", "#505c63") +
    label(66, 52, component.marking, 11, "#c7d0d2");
}

function to220Art(component, showLabels) {
  return fetLeads(component, showLabels) +
    [42, 66, 90].map(x => path(`M${x - 5} 151h10v18l-2 8v16h-6v-16l-2-8Z`, "#b8c2c7", "#75868e") +
      line(x - 1, 176, x - 1, 190, "#edf0ee", 1.1)).join("") +
    path("M29 11H103L109 16V78H23V16Z", "#aebdc4", "#6c808c") +
    line(30, 14, 101, 14, "#e4ebec", 1.7) +
    circle(66, 33, 14, "#6d808c", "#d4dfe2") + circle(66, 33, 10, "#eef2f2", "#485b66") +
    path("M22 67H110L115 74V155H17V74Z", "#242b30", "#141c22") +
    rect(21, 72, 90, 76, 2, "#30383d", "#4c585f") +
    label(66, 105, component.marking, 11, "#c7d1d3");
}

function mosfet({ part, marking = part, pChannel, voltage, packageName, description, source, manufacturer }) {
  const id = part.toLowerCase();
  const { width, height, footprint, bottom } = fetPackage[packageName];
  const tab = packageName !== "SOT-23";
  const throughHole = packageName === "TO-220";
  const g = fetPin("g", 1, pChannel, tab);
  const d = fetPin("d", tab ? 2 : 3, pChannel, tab);
  const s = fetPin("s", tab ? 3 : 2, pChannel, tab);
  const pins = throughHole ? pinRow("bottom", width, height, bottom[0], bottom[1] - bottom[0], [g, d, s])
    : [...pinRow("bottom", width, height, bottom[0], bottom[1] - bottom[0], [g, s]),
      ...pinRow("top", width, height, width / 2, 0, [d])];
  const polarity = pChannel ? "P-channel" : "N-channel";
  return {
    component: {
      id, art: id, name: `${part} ${polarity} MOSFET`, shortName: part, marking,
      category: "Semiconductors", manufacturer, referencePrefix: "Q", symbol: pChannel ? "pmos" : "nmos",
      subtitle: `${voltage} · ${packageName}${packageName === "TO-252" ? " / DPAK" : ""}`,
      description, source, width, height, pins,
      tags: ["mosfet", "fet", polarity.toLowerCase(), packageName.toLowerCase(), "transistor", "switch"],
    },
    art: throughHole ? to220Art : tab ? dpakArt : sot23Art,
    footprint,
  };
}

const aos = "Alpha & Omega Semiconductor";
const infineon = "Infineon Technologies";
const aosDatasheet = part => `https://www.aosmd.com/res/data_sheets/${part}.pdf`;
const entries = [
  nkkToggle,
  ckToggle("7101SYCQE", false, false),
  ckToggle("7103SYCQE", false, true),
  ckToggle("7201SYCQE", true, false),
  ckToggle("7203SYCQE", true, true),
  mosfet({
    part: "AO3400A", marking: "X0", voltage: "30 V", packageName: "SOT-23", manufacturer: aos, source: aosDatasheet("AO3400A"),
    description: "30 V N-channel enhancement MOSFET for low-side switching and PWM. Maximum on-resistance is 48 mΩ at 2.5 V gate-to-source under the datasheet test conditions.",
  }),
  mosfet({
    part: "AO3401A", marking: "X1", pChannel: true, voltage: "−30 V", packageName: "SOT-23", manufacturer: aos, source: aosDatasheet("AO3401A"),
    description: "−30 V P-channel enhancement MOSFET for high-side switching. Maximum on-resistance is 85 mΩ at −2.5 V gate-to-source under the datasheet test conditions.",
  }),
  mosfet({
    part: "AOD4184A", marking: "D4184A", voltage: "40 V", packageName: "TO-252", manufacturer: aos, source: aosDatasheet("AOD4184A"),
    description: "40 V N-channel power MOSFET in a DPAK package. Maximum on-resistance is 9.5 mΩ at 4.5 V gate-to-source. Use the drain tab land for current and heat spreading.",
  }),
  mosfet({
    part: "AOD4185", marking: "D4185", pChannel: true, voltage: "−40 V", packageName: "TO-252", manufacturer: aos, source: aosDatasheet("AOD4185"),
    description: "−40 V P-channel power MOSFET in a DPAK package. Maximum on-resistance is 20 mΩ at −4.5 V gate-to-source. Use the drain tab land for current and heat spreading.",
  }),
  mosfet({
    part: "IRLZ44N", voltage: "55 V", packageName: "TO-220", manufacturer: infineon,
    source: "https://www.infineon.com/assets/row/public/documents/24/49/infineon-irlz44n-datasheet-en.pdf",
    description: "55 V logic-level N-channel power MOSFET in TO-220AB. The datasheet specifies on-resistance at 4 V, 5 V and 10 V gate-to-source. The heatsink tab is drain.",
  }),
  mosfet({
    part: "IRF4905", pChannel: true, voltage: "−55 V", packageName: "TO-220", manufacturer: infineon,
    source: "https://www.infineon.com/assets/row/public/documents/24/49/infineon-irf4905-datasheet-en.pdf",
    description: "−55 V P-channel power MOSFET in TO-220. On-resistance is specified at −10 V gate-to-source. The heatsink tab is drain.",
  }),
];

export const switchMosfetComponents = entries.map(({ component }) => component);
export const switchMosfetArt = Object.fromEntries(entries.map(({ component, art }) => [component.art, art]));
export const switchMosfetFootprints = Object.fromEntries(entries.map(({ component, footprint }) => [component.id, footprint]));
export const switchMosfetModels = Object.fromEntries(entries.filter(({ model }) => model).map(({ component, model }) => [component.id, model]));
