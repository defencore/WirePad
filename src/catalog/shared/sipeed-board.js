import { chip, circle, label, line, path, rect, smd, tactile } from "./svg.js";
import { sipeedPhysicalLayouts } from "../data/sipeed-layouts.js";

function contactSpec(value, voltage) {
  const [name, detail = "", electrical] = value.split("|");
  if (electrical) return { label: name, description: detail, type: electrical };
  if (name === "GND" || name === "AGND") return { label: name, description: "Power and signal ground.", type: "power_in" };
  if (/^(5V|3V3|3V0|2V5|1V8|1V2|VCC|VDD)/.test(name)) return { label: name, description: `${name} supply rail. Follow the board's documented power configuration. ${detail}`, type: "passive" };
  if (name === "NC") return { label: name, description: "Unconnected or reserved contact.", type: "no_connect" };
  if (/^(?:TCK|TMS|TDI|RESET|FEL)$/.test(name)) return { label: name, description: `${name} programming, reset or boot input. ${detail}`, type: "input" };
  if (name === "TDO") return { label: name, description: `JTAG data output. ${detail}`, type: "output" };
  if (/^(?:LRADC|GPADC)/.test(name)) return { label: name, description: `Dedicated analog ADC input. Follow the manufacturer's allowed input range. ${detail}`, type: "input" };
  if (/^(?:USB)/.test(name)) return { label: name, description: `Dedicated USB differential interface contact. ${detail}`, type: "bidirectional" };
  if (/^(?:HP_|HPCOM|HBIAS|MIC_|LINEIN|AUDIO_|TVIN|TV_OUT|ETH_|MIPI_|HDMI_)/.test(name)) return { label: name, description: `Dedicated analog or differential interface contact. Follow the manufacturer's interface circuit and electrical levels. ${detail}`, type: "passive" };
  return { label: name, description: `${voltage} I/O. ${detail || "Application function is selected by the FPGA design or operating-system pin configuration."}`, type: "bidirectional" };
}

function physicalMetrics(options, layout) {
  const scale = layout.scale ?? 8, margin = 42, gap = 65;
  const bodyWidth = options.size[0] * scale, bodyHeight = options.size[1] * scale;
  const views = layout.views ?? 1;
  return { scale, margin, gap, bodyWidth, bodyHeight, views, width: bodyWidth * views + margin * 2 + gap * (views - 1), height: bodyHeight + margin * 2 + 24 };
}
function physicalPoint(layout, bank, index, number) {
  const spec = layout.banks[bank.name];
  if (spec === null && /licheerv-nano/.test(layout.id)) return [bank.side === "left" ? 4 : 96, 9 + index * 142 / 13, 0];
  if (!spec) throw new Error(`Missing physical contact layout for ${layout.id}/${bank.name}`);
  if (spec.positions) {
    const point = spec.positions[number];
    if (!point) throw new Error(`Missing physical contact ${layout.id}/${bank.name}.${number}`);
    return point;
  }
  if (spec.kind === "sodimm") {
    const back = Number(number) % 2 === 0, slot = Math.floor((Number(number) - 1) / 2), split = spec.count === 102 ? 36 : 72;
    const along = 4 + slot * 89 / (spec.count - 1) + (slot >= split ? 3 : 0);
    return [back ? along : 100 - along, 3.2, back ? 1 : 0];
  }
  if (spec.kind === "m2") {
    const back = Number(number) % 2 === 0;
    const x = spec.x + Math.floor((Number(number) - 1) / 2) * spec.width / 37;
    return [back ? 100 - x : x, 156, back ? 1 : 0];
  }
  const slot = spec.slot === "physical" ? Number(number) - 1 : index;
  const rows = spec.rows ?? 1;
  return [spec.x + Math.floor(slot / rows) * (spec.dx ?? 0) + slot % rows * (spec.ax ?? 0), spec.y + Math.floor(slot / rows) * (spec.dy ?? 0) + slot % rows * (spec.ay ?? 0), spec.view ?? 0];
}

// Canvas anchors and visible connector contacts share these physical positions.
// Approximate cable-landing footprints remain separate from the board illustration.
export function sipeedBoard(originalOptions, banks) {
  const layout = { ...sipeedPhysicalLayouts[originalOptions.id], id: originalOptions.id };
  if (!layout.banks) throw new Error(`Missing physical board layout ${originalOptions.id}`);
  const options = { ...originalOptions, size: layout.size ?? originalOptions.size, physical: layout };
  const geometry = physicalMetrics(options, layout);
  const { width, height } = geometry;
  const pins = banks.flatMap(bank => {
    const contacts = bank.labels.map((value, index) => {
      const physicalNumber = bank.numbers?.[index] ?? (bank.first ?? 1) + index * (bank.step ?? 1);
      const spec = contactSpec(value, bank.voltage ?? "3.3 V");
      const [nx, ny, view] = physicalPoint(layout, bank, index, physicalNumber);
      return { id: `${bank.name.toLowerCase()}-${physicalNumber}`, number: `${bank.name}.${physicalNumber}`, ...spec,
        description: `${bank.name}.${physicalNumber}. ${spec.description} ${view || layout.bottom ? "Connector-side/back view" : "Component-side/front view"}; physical contact on the illustrated connector.`,
        surface: true, contactGroup: bank.name, physicalView: view,
        x: +(geometry.margin + view * (geometry.bodyWidth + geometry.gap) + nx / 100 * geometry.bodyWidth).toFixed(3),
        y: +(geometry.margin + ny / 160 * geometry.bodyHeight).toFixed(3),
      };
    });
    bank.contacts = contacts;
    return contacts;
  });
  const component = {
    id: options.id, art: options.id, manufacturer: "Sipeed", name: options.name, shortName: options.shortName,
    category: options.category ?? "FPGA boards", referencePrefix: "U", width, height, contactLayout: "physical",
    subtitle: options.subtitle, description: `${options.description} Wiring scope covers ${options.scope}. Contacts coincide with the illustrated physical pads. ${layout.views === 2 ? "Front and back views show the two physical faces separately." : layout.bottom ? "The board is shown from its connector side." : "The board is shown from the component side."}`,
    source: options.source, tags: ["sipeed", ...(options.tags ?? [])], pins,
  };
  const pads = banks.flatMap((bank, bankIndex) => {
    const vertical = bank.side === "left" || bank.side === "right";
    const pitch = bank.foot?.pitch ?? 2.54, columns = bank.foot?.columns ?? 1, count = Math.ceil(bank.contacts.length / columns);
    const x = bank.foot?.x ?? (vertical ? (bank.side === "left" ? -options.size[0] / 2 - 6 - bankIndex * 5.08 : options.size[0] / 2 + 6 + bankIndex * 5.08) : -(count - 1) * pitch / 2);
    const y = bank.foot?.y ?? (vertical ? -(count - 1) * pitch / 2 : (bank.side === "top" ? -options.size[1] / 2 - 6 - bankIndex * 5.08 : options.size[1] / 2 + 6 + bankIndex * 5.08));
    return bank.contacts.map((pin, index) => ({ id: pin.id, x: x + (vertical ? index % columns * pitch : Math.floor(index / columns) * pitch), y: y + (vertical ? Math.floor(index / columns) * pitch : index % columns * pitch), size: bank.foot?.size ?? 1.65, drill: bank.foot?.drill ?? 0.85, square: index === 0 }));
  });
  return { component,
    renderHardware: entry => sipeedArt(entry, options, banks, false, false),
    footprint: { body: options.size, color: options.color ?? "#282c2e", pads,
      note: `${options.revision} reference carrier for ${options.scope}. ${options.footnote ?? "Pad positions are approximate cable termination positions, not a board mating pattern. Verify connector orientation, pitch, I/O voltage and exact board dimensions before fabrication."}`,
      details: [[0, 0, options.size[0] * 0.45, options.size[0] * 0.45, 1.8, "#27333a"]] },
    art: (entry, showLabels = true) => sipeedArt(entry, options, banks, showLabels), model: options.model,
  };
}

function socket(x, y, width, height, type) {
  if (type === "rj45") return rect(x, y, width, height, 2, "#b0babd", "#e2e8e7") + rect(x + 3, y + 3, width - 6, height - 7, 1, "#45535a") + rect(x + width / 3, y + 1, width / 3, 5, 0, "#8f9d9e");
  if (type === "fpc") return rect(x, y, width, height, 1, "#d1d5c4", "#7f8f7d") + rect(x + 2, y + height - 4, width - 4, 4, 0.4, "#272e30");
  if (type === "sd") return rect(x, y, width, height, 2, "#9ba7a9", "#d9e3df") + line(x + 3, y + height - 5, x + width - 3, y + height - 5, "#536369", 2);
  return rect(x, y, width, height, type === "usb" ? 3 : 1, "#b5c1c4", "#e6eae7") + rect(x + 3, y + 3, width - 6, Math.max(4, height / 4), 1, "#4a5d67") + line(x + 4, y + height - 4, x + width - 4, y + height - 4, "#8c9b9b", 1.5);
}

function sipeedArt(component, options, banks, showLabels, includeContacts = true) {
  const { width, height } = component;
  const geometry = physicalMetrics(options, options.physical);
  const bodyWidth = geometry.bodyWidth, bodyHeight = geometry.bodyHeight;
  const bx = geometry.margin, by = geometry.margin;
  const aspect = (bodyWidth / 100) / (bodyHeight / 160);
  const dieWidth = options.som ? 17 : options.category === "Single-board computers" ? 25 : 34;
  const dieY = (options.chipY ?? 51) + 17;
  const somBounds = options.somBounds ?? [31, 20, 38, 81];
  const wifiBounds = options.wifiBounds ?? [65, 22, 27, 30];
  const edgeConnector = Object.values(options.physical.banks).find(spec => spec?.kind === "sodimm");
  const hasM2 = Object.values(options.physical.banks).some(spec => spec?.kind === "m2");
  const outline = (view, x, y, w, h) => {
    const color = options.color ?? "#292e31";
    if (edgeConnector) {
      const split = edgeConnector.count === 102 ? 36 : 72;
      const gap = 4 + split * 89 / (edgeConnector.count - 1);
      const left = x + (view ? gap : 100 - gap - 3) / 100 * w;
      return path(`M${x} ${y}H${left}V${y+h*.055}H${left+w*.03}V${y}H${x+w}V${y+h}H${x}Z`,color,"#667b7e");
    }
    if (hasM2) {
      const gaps = [[10,14.4],[47,52],[59,63.4]].map(([a,b])=>view?[100-b,100-a]:[a,b]).sort((a,b)=>b[0]-a[0]);
      let d=`M${x} ${y}H${x+w}V${y+h}`;
      for(const [a,b] of gaps)d+=`H${x+b/100*w}V${y+h*.94}H${x+a/100*w}V${y+h}`;
      return path(d+`H${x}Z`,color,"#667b7e");
    }
    return rect(x,y,w,h,options.rounded?9:3,color,"#667b7e");
  };
  const isotropic = (x, y, graphic) => `<g transform="translate(${x} ${y}) scale(1 ${aspect})">${graphic}</g>`;
  let main = `<g transform="translate(${bx} ${by}) scale(${bodyWidth / 100} ${bodyHeight / 160})">` +
    outline(0, 0, 0, 100, 160) +
    (options.mountHoles ? [7, 93].map(x => isotropic(x, 7 * aspect, circle(0, 0, 3, "#d0bf81") + circle(0, 0, 1.8, "#27332f")) + isotropic(x, 160 - 7 * aspect, circle(0, 0, 3, "#d0bf81") + circle(0, 0, 1.8, "#27332f"))).join("") : "") +
    (options.som ? rect(...somBounds, 2, "#242f32", "#adb39a") : "") +
    isotropic(50, dieY, chip(-dieWidth / 2, -dieWidth / 2, dieWidth, dieWidth, "", 4) + label(0, 1, options.chip ?? "GOWIN", Math.min(5, dieWidth / ((options.chip ?? "GOWIN").length * 0.65)), "#c2cbd4")) +

    (options.sodimm ? rect(8, options.sodimmY ?? 8, 84, 9, 1, "#151c20", "#74837e") + line(10, (options.sodimmY ?? 8) + 5, 90, (options.sodimmY ?? 8) + 5, "#b4ba9f", 2) : "") +
    (options.pcie ? rect(36, 159, 30, 9, 0, "#b7a34f") + Array.from({ length: 14 }, (_, i) => line(37 + i * 2, 161, 37 + i * 2, 167, "#ddd285", 1)).join("") : "") +
    (options.ddr ? isotropic(24, 105, chip(-6, -12, 12, 24, "", 4) + label(0, 0, "DDR", 3.2)) + isotropic(76, 105, chip(-6, -12, 12, 24, "", 4) + label(0, 0, "DDR", 3.2)) : "") +
    (options.wifi ? rect(...wifiBounds, 2, "#b1b8ae", "#d9dfd5") + path(`M${wifiBounds[0] + 1} ${wifiBounds[1] - 4}h5v-9h6v9h6v-9h6v9`, "none", "#b5ab76", 1) : "") +
    (options.buttons === false ? "" : isotropic(16, 11, `<g transform="scale(0.5)">${tactile(0, 0)}</g>`) + isotropic(70, 11, `<g transform="scale(0.5)">${tactile(0, 0)}</g>`)) +
    (options.speaker ? rect(25, 112, 50, 13, 2, "#dedbd1", "#8c9a8e") : "") +
    [[18, 48], [72, 60], [18, 89], [72, 91], [38, 110], [49, 110], [60, 110], [76, 129]].map(([x, y]) => smd(x, y)).join("") +
    (options.sockets ?? []).map(([type, x, y, w, h]) => socket(x, y, w, h, type)).join("") +
    (banks.some(bank => ["sodimm", "m2"].includes(options.physical.banks[bank.name]?.kind)) ? "" : options.extraArt?.() ?? "") +
    label(50, options.titleY ?? 138, options.shortName, 6.4, "#d5e2df") +
    label(50, 147, "SIPEED", 5.9, "#c1d5d0") + "</g>";
  const backBody = (view) => {
    const x = geometry.margin + view * (bodyWidth + geometry.gap);
    return outline(view, x, by, bodyWidth, bodyHeight) +
      [[.07,.08],[.93,.08],[.07,.92],[.93,.92]].map(([hx,hy])=>circle(x+hx*bodyWidth,by+hy*bodyHeight,4,"#c6b77c")+circle(x+hx*bodyWidth,by+hy*bodyHeight,2,"#27332f")).join("") +
      Array.from({length:18},(_,i)=>smd(x+bodyWidth*(.18+i%6*.12),by+bodyHeight*(.3+Math.floor(i/6)*.17))).join("") +
      label(x+bodyWidth/2,by+bodyHeight*.58,options.shortName,13,"#d5e2df") + label(x+bodyWidth/2,by+bodyHeight*.68,"SIPEED",10,"#c1d5d0");
  };
  if (options.physical.bottom) main = backBody(0);
  if (geometry.views > 1) main += backBody(1);
  for(let view=0;view<geometry.views;view++)main += label(geometry.margin+view*(bodyWidth+geometry.gap)+bodyWidth/2,by+bodyHeight+22,options.physical.bottom ? "Connector side" : view ? "Back · mirrored from front" : "Front · component side",11,"#405563");
  if (!includeContacts) return main;
  const groups = new Map();
  for(const bank of banks)for(const pin of bank.contacts){
    const key=bank.name+":"+pin.physicalView+(options.physical.banks[bank.name]===null?":"+bank.side:"");
    if(!groups.has(key))groups.set(key,{name:bank.name,spec:options.physical.banks[bank.name],contacts:[]});
    groups.get(key).contacts.push(pin);
  }
  let connectors="", contacts="";
  for(const group of groups.values()) {
    const xs=group.contacts.map(pin=>pin.x),ys=group.contacts.map(pin=>pin.y),x0=Math.min(...xs),y0=Math.min(...ys),x1=Math.max(...xs),y1=Math.max(...ys);
    let pitch=Infinity;
    for(let i=0;i<group.contacts.length;i++)for(let j=i+1;j<group.contacts.length;j++)pitch=Math.min(pitch,Math.hypot(group.contacts[i].x-group.contacts[j].x,group.contacts[i].y-group.contacts[j].y));
    const dense=pitch<8, edge=group.spec?.kind==="sodimm"||group.spec?.kind==="m2";
    if(!edge && group.spec)connectors+=rect(x0-4,y0-4,x1-x0+8,y1-y0+8,1.5,dense?"#d6d7bf":"#17242b","#76877a");
    group.contacts.forEach((pin,index)=>{
      const r=Math.min(3,Math.max(1.1,pitch*.25));
      const color=pin.type==="power_in"||pin.label==="GND"?"#a4afaa":/^(?:5V|3V3|VCC|VDD)/.test(pin.label)?"#d49668":"#c7ad67";
      contacts+=(edge?rect(pin.x-r*.55,pin.y-5,r*1.1,10,.3,color):circle(pin.x,pin.y,r,color,"#e0d6a9"))+(!edge?circle(pin.x,pin.y,r*.4,"#26332f"):"");
      if(showLabels && (!dense || index===0 || index===group.contacts.length-1 || (index+1)%5===0)) {
        const short=dense?pin.number.split(".").at(-1):pin.label.length<=7?pin.label:pin.number.split(".").at(-1);
        const horizontal=x1-x0>=y1-y0;
        const localX=(x0-geometry.margin)%(bodyWidth+geometry.gap);
        const side=group.spec?.labelSide ?? (x1-x0<1 ? localX<bodyWidth/2 ? "right" : "left" : undefined);
        if(horizontal) contacts+=label(pin.x,pin.y+(pin.y<=(y0+y1)/2?-7:11),short,dense?5.2:6.2,"#e0e9e3");
        else contacts+=label(pin.x+(side==="left"?-6:side==="right"?6:pin.x<=(x0+x1)/2?-6:6),pin.y,short,dense?5.2:6.2,"#e0e9e3",side==="left"?"end":side==="right"?"start":pin.x<=(x0+x1)/2?"end":"start");
      }
    });
    if(showLabels)contacts+=label(x0,y0-14,group.name,7,y0-14<by?"#405563":"#e2e9df","start");
  }
  return main + connectors + contacts;

}
