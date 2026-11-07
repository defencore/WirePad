import { circle, label, line, path, rect } from "./svg.js";

const copper = "#c9b06f", silk = "#edf0dc", dark = "#232d31", metal = "#b8c3c4", ink = "#344c50";
const scale = 5, margin = 22;

function sbcContactPosition(header, index) {
  if (header.points) return header.points[index];
  const [x, y] = header.position;
  const rows = header.rows ?? 1, pitch = header.pitch ?? 2.54;
  const a = Math.floor(index / rows) * pitch * (header.reverse ? -1 : 1);
  const b = index % rows * (header.rowPitch ?? pitch) * (header.acrossReverse ? -1 : 1);
  return header.axis === "y" ? [x + b, y + a] : [x + a, y + b];
}

function signalSpec(pin, board, header) {
  const signal = pin.signal;
  if (pin.type) return [pin.type, pin.note ?? ""];
  if (/^(NC|NI|Not Connected)$/i.test(signal)) return ["no_connect", "No electrical connection."];
  if (/GND|AGND|VSS/.test(signal)) return ["power_in", "Power/signal return."];
  if (/BAT\+/.test(signal)) return ["power_in", "Positive RTC backup-battery input. Observe the connector polarity."];
  if (/VCC|VDD|SYS_3\.3V|3V3|3\.3V|^\+?1\.8V$|^\+?5(?:\.0)?V$|DCIN|DC_IN|ACIN|^\+12V/.test(signal) && !/GPIO|SPI|UART/.test(signal)) {
    return [/5(?:\.0)?V|5V0|DCIN|DC_IN|ACIN/.test(signal) ? "passive" : "power_out", "Board supply rail. Follow the documented power-input arrangement and do not assume a GPIO voltage."];
  }
  if (/SARADC|ADC_IN/.test(signal)) return ["input", "Analog ADC input; follow the documented maximum input range."];
  if (/USB.*D[PM+-]|HOST\d?_D[PM]/.test(signal)) return ["bidirectional", "USB differential data, not a logic-level GPIO."];
  if (/PCIE.*RX/.test(signal)) return ["input", "PCIe receive differential signal; not a logic-level GPIO."];
  if (/PCIE.*TX|PCIE.*REF_CLK/.test(signal)) return ["output", "PCIe transmit/reference-clock differential signal; not a logic-level GPIO."];
  const voltage = pin.voltage ?? header.voltage ?? board.gpioVoltage ?? "3.3 V";
  return ["bidirectional", `${voltage} digital I/O. Select the documented alternate function and pin multiplexing in software.`];
}

function makeComponent(board) {
  const pins = board.headers.flatMap(header => header.pins.map((pin, index) => {
    const [x, y] = sbcContactPosition(header, index), number = String(pin.number ?? index + 1);
    const [type, action] = signalSpec(pin, board, header);
    return {
      id: `${header.key}-${number}`.toLowerCase(), number: `${header.ref}.${number}`,
      label: pin.label ?? pin.signal.split(/\s*\/\s*/)[0], type, surface: true,
      x: margin + x * scale, y: margin + y * scale,
      description: `${header.ref} contact ${number}: ${pin.signal}. ${action}${pin.note && pin.type ? "" : pin.note ? ` ${pin.note}` : ""}${header.note ? ` ${header.note}` : ""}`,
    };
  }));
  return {
    id: board.id, art: board.id, name: board.name, shortName: board.shortName,
    manufacturer: board.manufacturer, category: "Single-board computers", referencePrefix: "U",
    subtitle: `${board.soc} / rev ${board.revision}`,
    description: `Board revision ${board.revision}. ${board.description} All listed connector contacts are available. The component-side drawing places contacts on their corresponding physical pads/connectors. High-speed sockets, test points and configuration straps outside the declared scope are illustrated only. Mechanical offsets are reference geometry unless a manufacturer dimension drawing is explicitly identified.`,
    source: board.source, documentation: board.documentation,
    width: board.size[0] * scale + margin * 2, height: board.size[1] * scale + margin * 2,
    contactLayout: "physical", pins,
    tags: ["sbc", "linux", "gpio", board.manufacturer.toLowerCase(), board.soc.toLowerCase(), board.shortName.toLowerCase()],
  };
}

function partArt([kind, x, y, w, h, text = "", rotation = 0]) {
  let art = "";
  if (rotation) {
    const cx = x + w / 2, cy = y + h / 2, angle = rotation * Math.PI / 180;
    const points = [[x,y],[x+w,y],[x+w,y+h],[x,y+h]].map(([px,py]) => [cx+(px-cx)*Math.cos(angle)-(py-cy)*Math.sin(angle),cy+(px-cx)*Math.sin(angle)+(py-cy)*Math.cos(angle)]);
    return path(`M${points.map(p=>p.join(" ")).join("L")}Z`, kind === "soc" ? metal : dark, "#9badab") + label(cx,cy,text,Math.min(2.2,w/7),kind === "soc" ? ink : silk);
  }
  if (["soc","chip","ram","radio"].includes(kind)) {
    const fill = kind === "soc" || kind === "radio" ? metal : dark;
    art = rect(x,y,w,h,.6,fill,"#647e79") + circle(x+.8,y+.8,.24,"#d6d9c7");
    if (kind === "radio") art += rect(x+.6,y+.6,w-1.2,h-1.2,.3,"#c9d0c6");
  } else if (kind === "button") {
    art = rect(x,y,w,h,.5,metal) + circle(x+w/2,y+h/2,Math.min(w,h)*.32,dark);
  } else if (kind === "fpc" || kind === "socket") {
    art = rect(x,y,w,h,.35,"#dedfc9","#7c8d80") + rect(x+.5,y+h-.8,w-1,.6,.15,dark);
    const count = Math.max(4,Math.round(w));
    for (let i=1;i<count;i++) art += line(x+i*w/count,y+.2,x+i*w/count,y+Math.min(h-.6,1.5),copper,.16);
  } else if (kind === "antenna") {
    art = path(`M${x} ${y+h}V${y}H${x+w}V${y+h*.5}H${x+w*.5}V${y+h}`,"none",copper,.5);
  } else if (kind === "audio" || kind === "dc") {
    art = rect(x,y,w,h,.6,dark,"#71867a") + rect(x+1,y+h-1.8,w-2,1.4,.3,"#111b22");
  } else {
    art = rect(x,y,w,h,.6,kind === "usb3" ? "#a6bec7" : metal,"#e1e6db");
    if (kind === "ethernet") art += rect(x+1,y+h-3,w-2,2.5,.25,"#31494b") + rect(x+1.5,y+h-1.8,2,.8,0,"#cdd454");
    else if (kind === "sd") art += rect(x+1,y+1,w-2,h-2,.25,"#a8b4b4") + line(x+2,y+1,x+2,y+h-1,"#e3e9df",.45);
    else if (kind === "sfp") { for(let i=0;i<4;i++) for(let j=0;j<3;j++) art += circle(x+2+i*(w-4)/3,y+3+j*(h-6)/2,.45,"#52666b"); }
    else art += rect(x+1,y+h-2.3,w-2,1.7,.3,kind === "usb3" ? "#276c8c" : "#34474d");
  }
  if (text) art += label(x+w/2,y+h/2,text,kind === "soc" ? 2.1 : Math.min(1.7,w/6),["soc","radio"].includes(kind) ? ink : silk);
  return art;
}

function draw(board, component, showLabels) {
  const [w,h] = board.size;
  let art = rect(0,0,w,h,board.radius ?? 2.2,board.color,"#86a399");
  for (const [x,y,r=1.4] of board.holes ?? []) art += circle(x,y,r+.55,copper) + circle(x,y,r,"#344a48");
  for (const part of board.parts) art += partArt(part);
  const [tx,ty,ts=2.7] = board.title ?? [w*.54,h*.66,2.7];
  art += label(tx,ty,board.shortName,ts,silk) + (board.titleRevision === false ? "" : label(tx,ty+(board.titleGap ?? 3.1),`rev ${board.revision}`,1.55,silk));
  for (const header of board.headers) {
    const points = header.pins.map((_,i)=>sbcContactPosition(header,i));
    const xs = points.map(p=>p[0]), ys = points.map(p=>p[1]);
    if (header.kind && header.kind !== "through") art += rect(Math.min(...xs)-.9,Math.min(...ys)-.9,Math.max(...xs)-Math.min(...xs)+1.8,Math.max(...ys)-Math.min(...ys)+1.8,.25,header.kind === "fpc" ? "#dbdcc4" : dark,"#85978a");
    const axis = header.axis ?? "x", across = points.map(p=>axis === "y" ? p[0] : p[1]);
    const middle = (Math.min(...across)+Math.max(...across))/2;
    for (let i=0;i<points.length;i++) {
      const [x,y] = points[i], [pw,ph] = header.padSize ?? (header.kind === "fpc" ? [.35,.8] : header.kind === "socket" ? [.65,.65] : [1.55,1.55]);
      art += rect(x-pw/2,y-ph/2,pw,ph,i===0?.05:.2,copper);
      if (!header.kind || header.kind === "through") art += circle(x,y,.43,dark);
      if (showLabels && (!header.labelEvery || i===0 || i===points.length-1 || (i+1)%header.labelEvery===0)) {
        const side = (axis === "y" ? x : y) <= middle ? -1 : 1, n = String(header.pins[i].number ?? i+1);
        const dx = axis === "y" ? side*2 : 0, dy = axis === "y" ? 0 : side*2.15;
        const textOutside = x+dx-2<0 || x+dx+2>w || y+dy-.9<0 || y+dy+.9>h;
        art += label(x+dx,y+dy,n,1.45,textOutside ? ink : silk,axis === "y" ? side<0?"end":"start" : "middle");
      }
    }
    if (showLabels && !header.hideCaption) {
      const [x,y,anchor="start"] = header.caption ?? [Math.min(...xs),Math.min(...ys)-5.3];
      art += label(x,y,header.ref,1.65,y<1 || y>h ? ink : silk,anchor);
    }
  }
  return `<g transform="translate(${margin} ${margin}) scale(${scale})">${art}</g>`;
}

function footprint(board) {
  const [w,h] = board.size;
  let cableBank = 0;
  const pads = board.headers.flatMap(header => {
    const cable = header.kind === "socket" || header.kind === "fpc";
    const bank = cable ? cableBank++ : 0;
    return header.pins.map((pin,index) => {
      const [px,py] = sbcContactPosition(header,index);
      const x = cable ? w/2+9+bank*7 : px-w/2;
      const y = cable ? -h/2+5+index*2.54 : py-h/2;
      return {id:`${header.key}-${pin.number ?? index+1}`.toLowerCase(),x:+x.toFixed(4),y:+y.toFixed(4),size:cable?1.6:(header.pitch??2.54)<2?1.0:1.6,drill:cable?.85:(header.pitch??2.54)<2?.55:.9,square:index===0};
    });
  });
  return {
    body:board.size,color:board.color,pads,
    note:`Reference wiring carrier for ${board.name}, revision ${board.revision}. Main through-hole row pitches and source contact numbers are retained. Board offsets, mounting holes and component heights are illustrative. Small sockets/FPCs use separate off-board 2.54 mm cable landing columns outside the outline; these are not their physical mating or manufacturer solder patterns. Canvas/art contacts use the source-identified board locations independently of these cable lands. Follow the linked maker drawing and verify the exact revision before adapter fabrication.`,
    details:board.parts.filter(p=>!["antenna","button"].includes(p[0])).map(([kind,x,y,pw,ph])=>[x+pw/2-w/2,y+ph/2-h/2,pw,ph,["ethernet","usb3","usb2"].includes(kind)?9:2,["soc","chip","ram"].includes(kind)?dark:metal]),
  };
}

export function sbcMoreFamily(boards) {
  const components = boards.map(makeComponent);
  return {
    components,
    art:Object.fromEntries(boards.map(b=>[b.id,(c,labels)=>draw(b,c,labels)])),
    footprints:Object.fromEntries(boards.map(b=>[b.id,footprint(b)])),
    models:Object.fromEntries(boards.filter(b=>b.cad).map(b=>[b.id,b.cad])),
  };
}
