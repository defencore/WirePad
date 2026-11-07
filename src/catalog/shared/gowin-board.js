import { circle, label, line, path, rect } from "./svg.js";

const pcb = "#174568";
const silk = "#e4ece0";
const copper = "#bdab70";
const black = "#232a31";
const silver = "#b5c0c6";

function electrical(signal, header) {
  if (signal === "NC") return ["no_connect", "Unconnected contact."];
  if (/GND|VSS/.test(signal)) return ["power_in", "Ground reference."];
  if (signal === "DC5V_IN") return ["power_in", "5 V DC adapter input, before the board fuse and power switch. Use the schematic-specific positive terminal number."];
  if (signal === "VBUS") return ["power_in", "5 V input from the USB download cable."];
  if (signal === "BAT+") return ["power_in", "Positive input from a 3 V RTC backup battery."];
  if (/PULLUP/.test(signal)) return ["passive", "Resistor pull-up to 3.3 V; this is not a direct supply connection."];
  if (/^VCC|^VGH|^VGL|^AVDD|LED[+-]$|DSI_[+-]5V/.test(signal)) return [header.note.includes("jumper") || header.note.includes("measurement link") ? "passive" : "power_out", "Board rail or display-power connection; observe the voltage and polarity shown by the manufacturer schematic."];
  if (/^USB_D/.test(signal)) return ["bidirectional", "USB download differential data contact; this is not a GPIO signal."];
  if (signal === "RS232_RX") return ["input", "RS232 receiver input to the onboard MAX3232. Use RS232 voltage levels, not a TTL UART."];
  if (signal === "RS232_TX") return ["output", "RS232 transmitter output from the onboard MAX3232."];
  if (signal === "LCD_DITHB") return ["power_out", "LCD dithering strap, tied high to 3.3 V through populated zero-ohm R130; not an FPGA-controlled output."];
  if (signal === "LCD_RST") return ["output", "LCD reset from the board RC power-on reset circuit (10 kΩ pull-up and 1 µF capacitor), not a direct FPGA contact."];
  if (signal === "DSI_TE") return ["input", "Panel tearing-effect synchronization input to the FPGA."];
  if (signal === "LCD_VCOM") return ["power_out", "Analog LCD common-voltage reference set by the board potentiometer."];
  if (/^AD\/DA_/.test(signal)) return ["bidirectional", "AD5593R configurable analog ADC/DAC or digital I/O channel. Check VLOGIC, VREF and the configured channel mode."];
  if (/^CAN[HL]$|RS485_(?:DATA|CLK)\d[pn]/.test(signal)) return ["bidirectional", "Differential bus-side contact after the onboard transceiver; not an FPGA logic-level contact."];
  if (/^RS422_IN|^P[UVW]\d|^(?:FAULT|SC_N|ADC_DOUT|IBUS|VBUS\d|VTEMP)/.test(signal)) return ["input", "Motor/encoder interface signal. Use the manufacturer interface circuit; these are control/measurement contacts, not motor-power inputs."];
  if (/PWM_(?:TOP|BOTTOM)|ADC_(?:DIN|CS_N|SCLK)|SC_RESET|BLEEDER|BUS_EN/.test(signal)) return ["output", "FPGA motor-driver control output; active-low names end in _N."];
  if (/^TDO|JTAG_TDO|SSPI_SO/.test(signal)) return ["output", "Debug/configuration data output from the board."];
  if (/^T[CM]S|^TCK|^TDI|JTAG_T(?:DI|CK|MS)|SSPI_(?:SCLK|SI|CS_N|HOLD_N|FASTRD_N)/.test(signal)) return ["input", "Debug/configuration input. Use the configured I/O-bank voltage and select the intended programming path."];
  if (/^CSI_(RESET|CLK$|SCL)/.test(signal)) return ["output", "Camera control or reference clock output."];
  if (signal === "CSI_SDA") return ["bidirectional", "Camera-control I²C serial data."];
  if (/^CSI_/.test(signal)) return ["input", "Camera interface signal; observe the board's MIPI circuit and pin multiplexing."];
  if (/^DSI_|^LCD_/.test(signal)) return ["output", "Display interface signal. Power, low-power and high-speed MIPI nets have different electrical requirements."];
  if (signal === "F_CLK_SMA") return ["input", "External FPGA clock input through the SMA connector; select the external clock path as documented."];
  return ["bidirectional", "FPGA expansion signal. Configure the logic function and use the documented I/O-bank supply; the contact is not 5 V tolerant."];
}

// Positions use the same component-side artwork coordinates for anchors and contacts.
function visualGeometry(board) {
  const [width,height]=board.visualSize ?? [300,board.aspect === "square" ? 270 : 220];
  return {width,height,scale:board.visualScale ?? 2,margin:board.visualMargin ?? 24};
}
function contactPosition(header,index) {
  if(header.contactPoints?.[index]) return header.contactPoints[index];
  if(!header.visual) throw new Error(`Missing physical contact positions for ${header.name}`);
  const [x,y,axis="x"]=header.visual;
  const rows=header.visualRows ?? (header.pitch<1.5 ? 1 : header.rows);
  const pitch=header.visualPitch ?? header.pitch*2.6;
  const rowPitch=header.visualRowPitch ?? pitch;
  const along=Math.floor(index/rows)*pitch*(header.visualReverse ? -1 : 1);
  const across=index%rows*rowPitch*(header.visualAcrossReverse ? -1 : 1);
  return axis==="y" ? [x+across,y+along] : [x+along,y+across];
}
function pinsFor(board) {
  const geometry=visualGeometry(board);
  return board.headers.flatMap(header => header.pins.map(([signal,fpga,bank,voltage,note],index)=>{
    const [type,action]=electrical(signal,header);
    const level=/V|VCC/i.test(voltage) ? voltage : "configured bank voltage";
    const [x,y]=contactPosition(header,index);
    return {id:`${(header.key ?? header.name).toLowerCase()}-${index+1}`,number:`${header.name}.${header.numbers?.[index] ?? index+1}`,label:signal,type,surface:true,
      x:geometry.margin+x*geometry.scale,y:geometry.margin+y*geometry.scale,
      description:`${header.name} contact ${header.numbers?.[index] ?? index+1}: ${signal}. ${action}${fpga && fpga!=="-" ? ` FPGA package contact ${fpga}, bank ${bank}, I/O level ${level}.` : ""}${note ? ` ${note}` : ""} ${header.note}`};
  }));
}
function makeComponent(board) {
  const geometry=visualGeometry(board);
  const revision=board.name.match(/_V([0-9.]+)$/)?.[1] ?? "documented edition";
  return {id:board.id,art:board.id,name:`Gowin ${board.name}`,shortName:board.short,manufacturer:"Gowin Semiconductor",category:"FPGA boards",referencePrefix:"U",
    subtitle:`Official FPGA development board / rev ${revision}`,
    description:`Complete ${board.name} development board. ${board.scope} Pins retain connector contact numbers, including grounds, rails and NC contacts. Selectable bank voltages and shared alternate-function contacts must follow the manufacturer guide. Contacts coincide with the component-side connector drawing; board dimensions and mechanical offsets are illustrative references.`,
    tags:["gowin","fpga","development board","gw1","gw2",board.short.toLowerCase()],source:board.source,
    contactLayout:"physical",width:geometry.width*geometry.scale+geometry.margin*2,height:geometry.height*geometry.scale+geometry.margin*2,pins:pinsFor(board)};
}

function port([kind, x, y, w, h, caption]) {
  let result = rect(x, y, w, h, 2, kind === "socket" || kind === "dip" || kind === "ic" ? black : kind === "db15" ? "#1786ac" : silver, "#869ca6");
  if (kind === "ic") result += circle(x + 2, y + 2, 0.7, "#a4b4ad");
  if (kind === "db9") {
    result += path(`M${x+3} ${y+3}H${x+w-3}L${x+w-7} ${y+h-3}H${x+7}Z`,silver,"#e4e5da");

  }
  if (kind === "usb" || kind === "ethernet") result += rect(x + 2, y + h - 5, w - 4, 4, 0.8, "#314650");
  if (kind === "db15") {

  } else if (kind === "dip") {
    for(let i=0;i<4;i++) result += rect(x + 3 + i * (w - 6) / 4, y + 2, 2, h - 4, 0.4, "#dddec3");
  } else if (kind === "ribbon") {
    result += rect(x + 2, y + h - 3, w - 4, 2, 0.2, black);
  }
  if(caption) result += label(x + w / 2, y + h / 2, caption, 3.3, kind === "socket" || kind === "dip" ? silk : "#3d5055");
  return result;
}

function artFor(board,component,showLabels) {
  const geometry=visualGeometry(board),w=geometry.width,h=geometry.height;
  let body = rect(0, 0, w, h, 5, board.index === 24 ? "#253239" : pcb, "#6b8d9c");
  for(const [x,y] of [[8,8],[w-8,8],[8,h-8],[w-8,h-8]]) body += circle(x,y,4.2,copper)+circle(x,y,2.6,"#243a43");
  for(let i=0;i<30;i++) body += rect(18+(i*31)%260,24+(i*17)%(h-46),7,3,0.6,"#a7ae95")+rect(20+(i*31)%260,24+(i*17)%(h-46),3,3,0,"#6e7664");
  if(!board.hideDefaultChip) {
  const [chipX,chipY,chipW,chipH]=board.chipRect ?? [127,77,55,55];
  body+=rect(chipX,chipY,chipW,chipH,1.5,black,"#7d918e")+circle(chipX+2,chipY+2,.7,"#a6b6a1")+label(chipX+chipW/2,chipY+chipH*.43,"GOWIN",Math.min(6,chipW/8),silk)+label(chipX+chipW/2,chipY+chipH*.65,board.chip,Math.min(4.3,chipW/10),silk);
  if(/LQ144|EQ144/.test(board.name)) for(let i=0;i<14;i++) body+=line(chipX-1,chipY+2+i*(chipH-4)/13,chipX-3,chipY+2+i*(chipH-4)/13,"#9aa8aa",1)+line(chipX+chipW+1,chipY+2+i*(chipH-4)/13,chipX+chipW+3,chipY+2+i*(chipH-4)/13,"#9aa8aa",1)+line(chipX+2+i*(chipW-4)/13,chipY-1,chipX+2+i*(chipW-4)/13,chipY-3,"#9aa8aa",1)+line(chipX+2+i*(chipW-4)/13,chipY+chipH+1,chipX+2+i*(chipW-4)/13,chipY+chipH+3,"#9aa8aa",1);
  }
  body += board.ports.map(port).join("");
  for(const header of board.headers) {
    const points=header.pins.map((_,index)=>contactPosition(header,index));
    if(header.visual) {
      const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
      body+=rect(Math.min(...xs)-2,Math.min(...ys)-2,Math.max(...xs)-Math.min(...xs)+4,Math.max(...ys)-Math.min(...ys)+4,0.7,header.pitch<1.5?"#dcdcc0":black,"#6d8990");
    }
  }
  if(board.index===15) for(const header of board.headers.filter(h=>h.name.startsWith("CN"))) {const [x,y]=contactPosition(header,0);body+=rect(x-4,y-5,8,11,1,"#a9a189")+circle(x,y,3.1,"#bbb99f");}
  const titleY=board.titleY ?? (board.index===15 ? 163 : board.index===21 ? 203 : 151);
  body += label(150,titleY,board.short,7.4,silk) + label(150,titleY+11,board.name.match(/_V[0-9.]+$/)[0].slice(1),4.3,silk);
  body += board.extraArtwork?.() ?? "";
  for(const header of board.headers) {
    const points=header.pins.map((_,index)=>contactPosition(header,index));
    const pitch=header.visualPitch ?? header.pitch*2.6;
    const dense=pitch<3;
    for(let index=0;index<points.length;index++) {
      const [x,y]=points[index];
      const radius=header.contactRadius ?? (dense ? 0.45 : 1.15);
      body+=(index===0 ? rect(x-radius,y-radius,radius*2,radius*2,0.15,copper) : circle(x,y,radius,copper))+circle(x,y,radius*0.46,black);
      if(showLabels && !header.hideContactLabels && (!dense || index===0 || index===points.length-1 || (index+1)%5===0) && (!header.labelEvery || index===0 || index===points.length-1 || (index+1)%header.labelEvery===0)) {
        const axis=header.labelAxis ?? header.visual?.[2] ?? "x",rows=header.visualRows ?? (header.pitch<1.5 ? 1 : header.rows);
        const sign=(index%rows===0 ? -1 : 1)*(header.visualAcrossReverse ? -1 : 1);
        const caption=String(header.numbers?.[index] ?? index+1);
        const offset=header.contactLabelOffsets?.[index];
        if(offset) body+=label(x+offset[0],y+offset[1],caption,2.8,silk,offset[0]<0?"end":offset[0]>0?"start":"middle");
        else body+=axis==="y" ? label(x+sign*3.4,y,caption,2.8,silk,sign<0?"end":"start") : label(x,y+sign*3.7,caption,2.8,silk);
      }
    }
    if(showLabels && points.length) {
      const xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
      const [cx,cy,anchor="start"]=header.captionPosition ?? [Math.min(...xs),Math.min(...ys)-7];
      body+=label(cx,cy,header.name,header.captionSize ?? 3.7,cy<0||cy>h?"#344b52":silk,anchor);
    }
  }
  return `<g transform="translate(${geometry.margin} ${geometry.margin}) scale(${geometry.scale})">${body}</g>`;
}

function footprintFor(board) {
  const bankGeometry = header => {
    const cable = header.pitch < 1.5 || header.rows === 3 || header.note.includes("cable") || header.note.includes("SMA");
    return { pitch: cable ? 2.54 : header.pitch, columns: cable ? 2 : header.rows };
  };
  const rowStarts = [48];
  for (let first = 0; first < board.headers.length; first += 3) {
    const extent = Math.max(...board.headers.slice(first, first + 3).map(header => {
      const { pitch, columns } = bankGeometry(header);
      return (Math.ceil(header.pins.length / columns) - 1) * pitch;
    }));
    rowStarts.push(rowStarts.at(-1) + Math.max(72, extent + 10));
  }
  const pads=board.headers.flatMap((header, index) => {
    const cable = header.pitch < 1.5 || header.rows===3 || header.note.includes("cable") || header.note.includes("SMA");
    const pitch = cable ? 2.54 : header.pitch;
    const columns = cable ? 2 : header.rows;
    const x = -85 + index%3*62, y=rowStarts[Math.floor(index/3)];
    return header.pins.map((_,i)=>({id:`${(header.key ?? header.name).toLowerCase()}-${i+1}`,x:+(x+i%columns*pitch).toFixed(3),y:+(y+Math.floor(i/columns)*pitch).toFixed(3),size:1.55,drill:0.8,square:i===0}));
  });
  return {
    body: [100,board.aspect==="square"?90:73.33],color:pcb,pads,
    note:`Reference connector carrier for ${board.name}. All header banks are cable landing rows outside the approximate board outline; their positions are not PCB socket coordinates. 2.00/2.54 mm expansion headers retain the manufacturer contact pitch. FPC, stacked MIPI, USB, SMA and motor D-sub contacts use 2.54 mm reference cable lands instead of pretending to be manufacturer land patterns. Confirm the exact contact numbering, cable orientation and selectable bank voltage. Board dimensions, component heights and offsets are photo-based approximations; mounting holes and connector shells are not fabrication pads.`,
    details:[[1,0,18,18,2,black],[-28,-16,7,7,1.5,black],[29,-15,9,9,1.5,black]],
  };
}


export { makeComponent as gowinBoardComponent, artFor as gowinBoardArt, footprintFor as gowinBoardFootprint };
