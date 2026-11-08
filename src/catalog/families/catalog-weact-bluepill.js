import { defineFamily } from "../registry.js";
import { clippedFrontArtwork, reviewedBoardMounting } from "../shared/reviewed-board-mounting.js";
import { chip, circle, label, pad, rect, smd, tactile, usb } from "../shared/svg.js";

const left = "PB12 PB13 PB14 PB15 PA8 PA9 PA10 PA11 PA12 PA15 PB3 PB4 PB5 PB6 PB7 PB8 PB9 5V GND 3V3".split(" ");
const blackRight = "5V GND 3V3 PB10 PB2 PB1 PB0 PA7 PA6 PA5 PA4 PA3 PA2 PA1 PA0 NRST PC15 PC14 PC13 VBAT".split(" ");
const plusRight = "5V GND 3V3 NRST PB11 PB10 PB1 PB0 PA7 PA6 PA5 PA4 PA3 PA2 PA1 PA0 PC15 PC14 PC13 VBAT".split(" ");
const classicRight = "GND GND 3V3 NRST PB11 PB10 PB1 PB0 PA7 PA6 PA5 PA4 PA3 PA2 PA1 PA0 PC15 PC14 PC13 VBAT".split(" ");

function pinInfo(name, family) {
  if (name === "GND") return ["power_in", "Common board ground."];
  if (name === "5V") return ["power_in", "5 V rail for USB or external board power. Observe the board's USB isolation link or diode before combining sources."];
  if (name === "3V3") return ["power_out", "3.3 V regulator output. All GPIO uses the 3.3 V domain."];
  if (name === "VBAT") return ["power_in", "RTC backup-supply contact. Check the fitted backup-supply diode or link before attaching a battery."];
  if (name === "NRST") return ["input", "Active-low MCU reset, shared with the reset button."];
  if (name === "SWDIO") return ["bidirectional", "Serial-wire debug data, connected to PA13."];
  if (name === "SWCLK") return ["input", "Serial-wire debug clock, connected to PA14."];
  const functions = { PA9: "USART1 TX", PA10: "USART1 RX", PA11: "USB D−", PA12: "USB D+", PB6: "I²C1 SCL / USART1 TX", PB7: "I²C1 SDA / USART1 RX", PA5: "SPI1 SCK", PA6: "SPI1 MISO", PA7: "SPI1 MOSI" };
  let text = `${name} GPIO${functions[name] ? `, including ${functions[name]}` : ""}. Select alternate functions in firmware.`;
  if (name === "PC13") text += " Shared with the active-low user LED.";
  if (name === "PC14" || name === "PC15") text += " Shared with the 32.768 kHz oscillator circuit when populated.";
  if (name === "PA0" && family !== "classic") text += " Shared with the user KEY button.";
  if (name === "PB2") text += " Check the boot configuration and fitted links.";
  return ["bidirectional", text];
}

function pill({ id, name, mcu, family, source, cad, revision }) {
  const classic = family === "classic";
  const width = 280, height = classic ? 470 : 430;
  const start = classic ? 66 : 28;
  const right = family === "black" ? blackRight : family === "plus" ? plusRight : classicRight;
  const pins = [];
  const pads = [];
  const add = (name, number, side, index, physicalX, physicalY, extra = {}) => {
    const [type, description] = pinInfo(name, family);
    const prefix = number.replaceAll(".", "-").toLowerCase();
    pins.push({ id: prefix, label: name, number, type, description: `${number} — ${description}`,
      x: side === "left" ? 0 : side === "right" ? width : index,
      y: side === "top" ? 0 : side === "bottom" ? height : start + index * 18, ...extra });
    pads.push({ id: prefix, x: physicalX, y: physicalY, size: 1.8, drill: 1, square: number.endsWith(".1") });
  };
  left.forEach((name, i) => add(name, `${classic ? "P4" : "P2"}.${classic ? 20 - i : i + 1}`, "left", i, -7.62, -24.13 + i * 2.54));
  right.forEach((name, i) => add(name, `${classic ? "P3" : "P1"}.${classic ? 20 - i : i + 1}`, "right", i, 7.62, -24.13 + i * 2.54));
  const swdName = classic ? "P2" : "P3";
  ["3V3", "SWDIO", "SWCLK", "GND"].forEach((name, i) => {
    const number = classic ? [1, 2, 3, 4][i] : i + 1;
    add(name, `${swdName}.${number}`, "bottom", 101 + i * 26, -3.81 + i * 2.54, family === "black" ? 20.37 : 24.8);
  });
  if (classic) {
    ["3V3", "3V3", "BOOT0", "BOOT1", "GND", "GND"].forEach((name, i) => {
      add(name, `P1.${i + 1}`, "top", 35 + i * 42, -1.27 + i % 2 * 2.54, -15 + Math.floor(i / 2) * 2.54,
        { type: name.startsWith("BOOT") ? "input" : name === "GND" ? "power_in" : "power_out",
          description: `P1.${i + 1} — Boot-jumper ${name} contact. The BOOT0 and BOOT1 jumpers select startup memory. Placement is representative of the common Blue Pill layout.` });
    });
  }
  const boardTop = classic ? 48 : 10;
  for (const pin of pins) {
    const index = Number(pin.number.split(".")[1]) - 1;
    pin.surface = true;
    if (pin.number.startsWith(swdName + ".")) {
      pin.x = 113 + index * 18; pin.y = boardTop + 350; pin.labelSide = "bottom";
    } else if (classic && pin.number.startsWith("P1.")) {
      pin.x = 152 + index % 2 * 17; pin.y = boardTop + 49 + Math.floor(index / 2) * 13; pin.labelSide = "boot";
    } else {
      pin.labelSide = pin.x === 0 ? "left" : "right";
      pin.x = pin.labelSide === "left" ? 86 : 194;
    }
  }
  const component = {
    id, art: id, name, shortName: family === "black" ? mcu.replace("STM32", "") + " Black Pill" : classic ? "Blue Pill F103" : mcu.replace(/STM32|GD32/, "") + " BluePill+",
    manufacturer: classic ? "Representative unbranded" : "WeAct Studio", category: "Microcontrollers", referencePrefix: "U",
    subtitle: `${mcu} / ${revision}`, source, width, height, pins, contactLayout: "physical",
    description: `${classic ? "Representative unbranded STM32F103C8T6 Blue Pill using the published original schematic. Clone layouts differ." : `WeAct Studio ${revision} ${family === "black" ? "MiniF4" : "BluePill Plus"} with ${mcu}.`} Component-side view with USB at the top. All two-row expansion contacts and the SWD header are exposed${classic ? ", including the six boot-jumper contacts" : ""}. PA11/PA12 share the USB data lines.`,
    tags: ["weact", "weact studio", "bluepill", "blue pill", "stm32", mcu.toLowerCase(), family === "black" ? "blackpill" : "bluepill plus", "swd", "arm", "cortex", ...(mcu.startsWith("GD32") ? ["gigadevice", "gd32"] : [])],
  };
  const art = (part, showLabels = true) => {
    const top = classic ? 48 : 10;
    const leftX = 76, rightX = 204;
    const color = family === "black" ? "#26323a" : "#285474";
    const sidePads = part.pins.filter(pin => ["left", "right"].includes(pin.labelSide)).map(pin => {
      const onLeft = pin.labelSide === "left";
      return pad(pin.x, pin.y) + (showLabels ? label(pin.x + (onLeft ? -12 : 12), pin.y, pin.label, 8, "#344851", onLeft ? "end" : "start") : "");
    }).join("");
    const endPads = part.pins.filter(pin => pin.labelSide === "bottom").map(pin =>
      pad(pin.x, pin.y) + (showLabels ? `<g transform="translate(${pin.x} ${pin.y + 10}) rotate(90)">${label(0, 0, pin.label, 7, "#e8ece7", "start")}</g>` : "")
    ).join("");
    const bootLabels = showLabels ? part.pins.filter(pin => pin.labelSide === "boot").map(pin =>
      label(pin.x + (Number(pin.number.split(".")[1]) % 2 ? -7 : 7), pin.y, pin.number.split(".")[1], 6, "#e8ece7", Number(pin.number.split(".")[1]) % 2 ? "end" : "start")
    ).join("") : "";
    const switchY = top + 68;
    return rect(leftX, top, rightX - leftX, 376, 3, color, "#8297a1") +
      usb(115, top - 3, 50) + rect(119, top + 2, 42, 17, 2, "#b4c0c1", "#eef1e8") +
      (classic ? rect(146, top + 43, 31, 42, 1, "#2f3c47", "#b0b7ad") +
        [0, 1, 2].flatMap(row => [0, 1].map(col => pad(152 + col * 17, top + 49 + row * 13))).join("") +
        rect(148, top + 62, 12, 23, 0.8, "#d4b82f") + rect(165, top + 62, 12, 23, 0.8, "#d4b82f") + tactile(102, switchY)
        : tactile(111, switchY) + tactile(153, switchY)) +
      `<g transform="rotate(45 140 ${top + 190})">${chip(113, top + 163, 54, 54, "", 12)}</g>` +
      label(140, top + 185, mcu.slice(0, 9), 7, "#cbd4d3") +
      rect(114, top + 255, 30, 15, 2, "#b9c4bb", "#e3e5dc") + smd(155, top + 260) +
      smd(115, top + 121) + smd(156, top + 126) + smd(110, top + 287) +
      (classic ? "" : tactile(133, top + 306)) +
      circle(173, top + 313, 3, "#b0c9a0", "#dde6ca") +

      label(140, top + 289, classic ? "Blue Pill" : "WeAct Studio", 8.2) +
      label(140, top + 335, revision, 7) + sidePads + endPads + bootLabels;
  };
  const bounds = { x: 76, y: boardTop - 3, width: 128, height: 379 };
  const insertion = ["left", "right"].flatMap((side, bank) => component.pins.filter(pin => pin.labelSide === side)
    .map((pin, index) => ({ pinId: pin.id, x: bank ? 7.62 : -7.62, y: -24.13 + index * 2.54 })));
  return { component, art, mounting: reviewedBoardMounting({
    source: { label: classic ? "Original Blue Pill 40-pin schematic and matching board header layout" : `WeAct ${revision} manufacturer mechanical STEP and header layout`, url: classic ? source : cad },
    contacts: insertion,
    bodyRegions: [{ x: 76, y: boardTop, width: 128, height: 376 }, { x: 115, y: boardTop - 3, width: 50, height: 28 }],
    bodyEvidence: "The front PCB rectangle and projecting USB shell use the pill renderer's exact coordinates. Boot/SWD contacts are retained in their on-board positions; annotation margins are excluded.",
    viewBounds: bounds,
    note: `Populate both complete 20-contact side rows, 15.24 mm apart at 2.54 mm pitch. SWD and boot/configuration headers face upward or remain unpopulated. ${classic ? "This is the catalog's representative original 40-pin Blue Pill variant; different clone layouts need a separate review." : "Use the exact WeAct PCB revision named by this entry."}`,
    view: { id: "breadboard", pins: component.pins.map(pin => ({ pinId: pin.id, x: pin.x, y: pin.y, face: "front" })),
      note: "The explicit mounting view normalizes the source-reviewed forty side-header centers. Auxiliary front contacts retain their illustrated physical locations and do not become insertion leads." },
    renderMounted: part => clippedFrontArtwork(art, component, bounds),
  }), footprint: {
    body: [18, 53.5], color: family === "black" ? "#26323a" : "#285474", pads,
    note: `${classic ? "Representative carrier for the original unbranded Blue Pill schematic. Verify clone header, SWD and boot-jumper orientation." : `Reference host-board carrier for WeAct ${revision}. Main headers use 15.24 mm separation and 2.54 mm pitch.`} Outline and auxiliary connector placement are approximate${family === "black" ? ", except the SWD row center follows the manufacturer's KiCad footprint" : ""}. USB faces the top in the canvas view.`,
    details: [[0, -26.5, 8, 5, 3, "#aab7bc"], [0, 0, 7, 7, 1, "#222e35"]],
  }, model: { label: classic ? "Original Blue Pill reference schematic" : `WeAct ${revision} manufacturer STEP CAD`, url: cad } };
}

const blackRepo = "https://github.com/WeActStudio/WeActStudio.MiniSTM32F4x1";
const plusRepo = "https://github.com/WeActStudio/BluePill-Plus";
const entries = [
  ...["STM32F401CEU6", "STM32F411CEU6"].map(mcu => pill({ id: "weact-blackpill-" + mcu.toLowerCase(), name: `WeAct ${mcu} Black Pill`, mcu, family: "black", revision: "MiniF4 V3.1",
    source: blackRepo + "/blob/master/Hardware/MiniF4x1Cx_V31%20SchDoc.pdf", cad: blackRepo + "/blob/master/Hardware/MiniF4x1Cx_V31_3D.step" })),
  ...["STM32F103C8T6", "GD32F303CCT6"].map(mcu => pill({ id: "weact-bluepill-plus-" + mcu.toLowerCase(), name: `WeAct BluePill Plus ${mcu}`, mcu, family: "plus", revision: "BluePill Plus V1.1",
    source: plusRepo + "/blob/master/HDK/BluePillPlus_V11_SchDoc.pdf", cad: plusRepo + "/blob/master/HDK/BluePillPlus_V11_3D.step" })),
  pill({ id: "bluepill-stm32f103c8t6", name: "STM32F103C8T6 Blue Pill (Representative)", mcu: "STM32F103C8T6", family: "classic", revision: "Original 40-pin layout",
    source: "https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill", cad: "https://stm32-base.org/assets/pdf/boards/original-schematic-STM32F103C8T6-Blue_Pill.pdf" }),
];

const weactBluepillComponents = entries.map(entry => entry.component);
const weactBluepillArt = Object.fromEntries(entries.map(entry => [entry.component.id, entry.art]));
const weactBluepillFootprints = Object.fromEntries(entries.map(entry => [entry.component.id, entry.footprint]));
const weactBluepillModels = Object.fromEntries(entries.map(entry => [entry.component.id, entry.model]));
const weactBluepillMountings = Object.fromEntries(entries.map(entry => [entry.component.id, entry.mounting]));

export default defineFamily("weact-bluepill", (weactBluepillComponents).map(component => ({ component, render: (weactBluepillArt)[component.art], footprint: (weactBluepillFootprints)[component.id], model: weactBluepillModels[component.id], mounting: weactBluepillMountings[component.id] })));
