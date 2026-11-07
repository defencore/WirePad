import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import { circle, label, line, path, rect } from "../shared/svg.js";

const gold="#c9ad65",silk="#f0efdc",blue="#253e63";
const docs="https://www.nxp.com/";
const pins=(odd,even)=>odd.flatMap((name,i)=>[name,even[i]]);
const gpioNote="3.3 V MCU I/O. Select the documented multiplexed peripheral function; analog use follows the selected reference and MCU limits.";
function typeFor(name){
  if(name==="NC")return "no_connect";
  if(name==="GND"||name==="AGND")return "power_in";
  if(/^P3V3|^3V3/.test(name))return "power_out";
  if(/^DC_JACK/.test(name))return "power_in";
  if(/^P5|^VIN|^VREG|^VBAT/.test(name))return "passive";
  if(/^ADC|AREF|VREF|RST|RESET|SWCLK|TCK|TMS|TDI/.test(name))return "input";
  if(/SWO|TDO|SDA_PTD5/.test(name))return "output";
  return "bidirectional";
}
const klHeaders={
  J1:pins(["PTC7","PTC0","PTC3","PTC4","PTC5","PTC6","PTC10","PTC11"],["PTA1","PTA2","PTD4","PTA12","PTA4","PTA5","PTC8","PTC9"]),
  J2:pins(["PTC12","PTC13","PTC16","PTC17","PTA16","PTA17","PTE31","NC","PTD6","PTD7"],["PTA13","PTD5","PTD0","PTD2","PTD3","PTD1","GND","VREFH","PTE0","PTE1"]),
  J9:pins(["PTB8","PTB9","PTB10","PTB11","PTE2","PTE3","PTE4","PTE5"],["SDA_PTD5","P3V3","RST_TGTMCU","P3V3","P5V_USB","GND","GND","P5-9V_VIN"]),
  J10:pins(["PTE20","PTE21","PTE22","PTE23","PTE29","PTE30"],["PTB0","PTB1","PTB2","PTB3","PTC2","PTC1"]),
};
const kHeaders={
  J1:pins(["PTC5","PTC7","PTC0","PTC9","PTC8","PTC1","PTB19","PTB18"],["PTC16","PTC17","PTB9","PTA1","PTB23","PTA2","PTC2","PTC3"]),
  J2:pins(["PTE26","GND","ADC0_DP0/ADC1_DP3","ADC0_DM0/ADC1_DM3","NC","ADC1_DP0/ADC0_DP3","ADC1_DM0/ADC0_DM3","NC","ADC1_SE18","NC"],["PTC12","PTC4","PTD0","PTD2","PTD3","PTD1","GND","AREF","PTE25","PTE24"]),
  J3:pins(Array(8).fill("NC"),["NC","P3V3","RST_TGTMCU_B","P3V3","P5V_USB","GND","GND","P5-9V_VIN"]),
  J4:pins(["ADC0_DP1","ADC0_DM1","ADC1_DP1","ADC1_DM1","PTB20","DAC0_OUT"],["PTB2","PTB3","PTB10","PTB11","PTC11","PTC10"]),
};
const targetDebug=(trace=false)=>["P3V3_TARGET","SWDIO","GND","SWCLK","GND",trace?"SWO":"NC","NC","NC","NC","RST_TARGET"];
const sdaDebug=["P3V3_SDA","TMS","GND","TCK","GND","TDO","NC","TDI","NC","RST_SDA"];
const klAux=[
  ["J6","TARGET SWD",targetDebug(),"Target Cortex SWD header; positions 6/7/8/9 are NC in revision E."],
  ["J8","OpenSDA JTAG",sdaDebug,"K20 OpenSDA programming interface, not the KL25 target."],
  ["J11","SWD CLK ISOLATE",["KL25_SWD_CLK","SWD_CLK_TGTMCU"],"Bottom-layer cut-trace isolation. Normally connected by the PCB trace; cutting it isolates OpenSDA clock."],
  ["J3","SDA CURRENT",["P3V3","P3V3_SDA"],"Optional two-pad current-measurement/isolation header, with default 0-ohm path R74."],
  ["J4","TARGET CURRENT",["P3V3","P3V3_KL25Z"],"Optional target supply current-measurement/isolation header, default path R73/R81."],
  ["J20","REGULATOR BYPASS",["P3V3","P3V3_VREG"],"Bypasses D12 voltage drop. Not an independent voltage output."],
  ["J21","USB HOST POWER",["P5V_KL25Z","P5V_USB_CONN_VBUS"],"Optional USB host power link; schematic warns there is no electrical protection."],
  ["J22","5V REGULATOR",["P5-9V_VIN","GND","P5V_USB"],"Optional 5 V regulator support pads, IN / GND / OUT; regulator is not fitted by default."],
  ["BT1","COIN CELL",["P3V3_BATT","GND"],"Functional positive/negative contacts of the optional 3 V coin-cell holder. The + / - references identify supply functions, not asserted holder land-pattern numbers."],
];
const kAux=[
  ["J9","TARGET SWD",targetDebug(true),"Target Cortex SWD/trace connector; pin 6 SWO, positions 7/8/9 NC."],
  ["J10","OpenSDA JTAG",sdaDebug,"Separate OpenSDA K20 programming interface."],
  ["J11","SWD CLK ISOLATE",["SWD_CLK","SWD_CLK_TGTMCU"],"Bottom-layer shorting cut trace, target clock isolation."],
  ["J5","RESET ISOLATE",["SDA_RST_TGTMCU_B","RST_TGTMCU_B"],"OpenSDA-to-target reset isolation header after level translation."],
  ["J12","SWDIO ISOLATE",["SWD_DIO_TGTMCU","SWD_DIO"],"Optional SWD data isolation header after level translation."],
  ["J8","SWD CLK LINK",["SWD_CLK_TGTMCU","SWD_CLK"],"Optional OpenSDA clock isolation link after level translation."],
  ["J25","RESET SELECT",["SDA_RST_TGTMCU_L_B","SW1_RST_B","SDA_RST_LEGACY"],"Pins 1–2 select target reset by default; pins 2–3 select OpenSDA reset as noted in schematic sheet 4."],
  ["J7","SDA 3V3 LINK",["P3V3_SDA","SDA_VOUT33"],"OpenSDA 3.3 V supply/output link; do not parallel independent supplies without following the schematic."],
  ["J18","SDA CURRENT",["P3V3_SDA","P3V3"],"Optional OpenSDA supply isolation/current-measurement pads."],
  ["J20","TARGET CURRENT",["P3V3","P3V3_K64F"],"Optional target supply isolation/current-measurement pads."],
  ["J19","REGULATOR BYPASS",["P3V3","P3V3_VREG"],"Optional bypass around regulator output diode D11."],
  ["J16","USB VREG INPUT",["VREGIN_K64","P5V_K64_USB"],"USB regulator input supply link; these are supply terminals, not GPIO."],
  ["J21","USB HOST POWER",["P5V_K64_USB","P5V_USB_CONN_VBUS"],"Optional USB host VBUS link; populate only with the documented protection/power arrangement."],
  ["J23","RTC VBAT",["VBAT","P3V3_K64F"],"VBAT backup supply link for the target RTC domain; follow K64 VBAT limits."],
  ["J24","DC INPUT",["DC_JACK","GND","GND"],"Optional DC-jack footprint terminals from schematic sheet 5; positions 2/3 are return contacts."],
  ["J14","PHY ROUTE",["CPU_PER_1_RST_B","RMII0_INT_B"],"Optional Ethernet PHY reset/interrupt routing header; depopulated in this revision. Source schematic sheet 7."],
  ["J17","ETHERNET POWER",["P3V3","VDDIO_ENET"],"Optional Ethernet PHY digital supply/current-isolation header; default supply path R60. Source schematic sheet 7."],
  ["J27","5V REGULATOR",["P5-9V_VIN","GND","P5V_USB"],"Optional IN / GND / OUT 5 V regulator support footprint; not populated by default."],
];
function chip(x,y,w,h,text){return rect(x,y,w,h,.5,"#1e2c32","#879d9d")+label(x+w/2,y+h/2,text,Math.min(2,w/8),"#aabbb8");}
function usb(x,y){return rect(x,y,8,7,.5,"#b9c4c2","#e5e9dc")+rect(x+.6,y+1,6.8,2,.2,"#1b3039");}
function boardArt(k64){
  let art=rect(0,0,82.55,53.34,5,blue,"#9caaa9")+[[12,4],[69,4],[12,49],[69,49]].map(([x,y])=>circle(x,y,1.6,gold)+circle(x,y,1.1,"#23394b")).join("");
  art+=usb(-1,7)+usb(-1,39)+chip(16,11,10,10,"OpenSDA")+`<g transform="rotate(45 ${k64?59:43} 31)">${chip(k64?49:35,21,k64?20:16,k64?20:16,k64?"MK64FN1M0":"MKL25Z128")}</g>`;
  if(k64)art+=rect(-1,18,18,18,.6,"#b8c3bf","#e1e9dd")+rect(-1,23,13,10,.3,"#233843")+rect(75,28,7.5,13,.4,"#bac3bd","#e0e7d7")+chip(23,26,7,7,"PHY")+label(73,23,"FRDM-K64F",2,silk);
  else art+=rect(74,10,5,29,.8,"#47484b","#929686")+line(75,13,78,13,gold,.7)+line(75,36,78,36,gold,.7)+label(63,25,"FRDM-KL25Z",2.1,silk)+chip(25,33,4,4,"IMU");
  art+=rect(3,2,4,3,.3,"#c5cbc1")+rect(74,45,4,3,.3,"#c5cbc1")+circle(70,39,1.2,"#c69b38");
  return art;
}
function makeNxp(k64){
 const body=[82.55,53.34],contacts=[],pads=[],headerMap=k64?kHeaders:klHeaders,aux=k64?kAux:klAux;
 const add=(con,n,name,x,y,note="",face=false)=>{const id=`${con.toLowerCase()}-${n}`,type=con==="BT1"?(name==="GND"?"power_in":"passive"):typeFor(name);contacts.push({id,number:`${con}.${n}`,label:name,type,description:`${name}. ${name==="NC"?"Unconnected position; leave open.":type==="bidirectional"?gpioNote:"Follow the schematic domain and power/configuration function."} ${note}`,x,y,vx:x,vy:y,back:false,connector:con});pads.push({id,x:Number((x-body[0]/2).toFixed(4)),y:Number((y-body[1]/2).toFixed(4)),size:face?.9:1.8,drill:face?.5:.9,shape:"circle"});};
 let art=boardArt(k64);
 for(const [con,names] of Object.entries(headerMap)){
  const top=con==="J1"||con==="J2",start=con==="J1"?67.31:con==="J2"?44.45:con===(k64?"J3":"J9")?26.67:51.56;
  names.forEach((name,i)=>{const col=Math.floor(i/2),even=i%2===1;const x=start+(top?-col:col)*2.54,y=top?(even?2.54:5.08):(even?50.8:48.26);add(con,i+1,name,x,y);});
  const group=contacts.filter(p=>p.connector===con),xs=group.map(p=>p.x);art+=rect(Math.min(...xs)-1.25,top?1.25:47,Math.max(...xs)-Math.min(...xs)+2.5,5.1,.2,"#1c2c32","#849993")+label((Math.min(...xs)+Math.max(...xs))/2,top?8:45.5,con,1.6,silk);
 }
 if(k64){
  ["GND","P3V3","PTB20","PTD4","PTD5","PTD6","PTD7","PTC18"].forEach((name,i)=>add("J6",i+1,name,69.8+i%2*2.54,10.8+Math.floor(i/2)*2.54,"Optional RF/nRF24L01 interface: CE=PTB20, CS=PTD4, SCK=PTD5, MOSI=PTD6, MISO=PTD7, IRQ=PTC18. Source schematic sheet 6."));
  ["P3V3","GND","PTC14","PTC15"].forEach((name,i)=>add("J199",i+1,name,76.1,13+i*2.54,"Optional Bluetooth interface. PTC14 is UART4 RX from the module TX; PTC15 is UART4 TX to module RX. Source schematic sheet 6."));
  art+=label(71,9,"J6",1.4,silk)+label(78,10,"J199",1.3,silk);
 }
 const columns=4,cellWidth=20,cellHeight=18,auxTop=64;
 art+=label(41.275,58,"AUXILIARY CONNECTOR FACES • PIN 1 / POLARITY MARKED",1.65,"#355463");
 aux.forEach(([con,title,names,note],index)=>{
  const cx=3+(index%columns)*cellWidth,cy=auxTop+Math.floor(index/columns)*cellHeight;
  const dual=names.length===10;
  art+=rect(cx,cy,dual?4.5:Math.max(7,names.length*2.54+2),dual?8:5,.35,"#20333d","#8fa39c")+rect(cx-.25,cy+1.3,.7,2,.1,"#c1b991")+label(cx+7,cy-2,`${con} ${title}`,1.2,"#334e5c");
  names.forEach((name,i)=>{const x=cx+1.2+(dual?i%2*1.27: i*2.54),y=cy+1.5+(dual?Math.floor(i/2)*1.27:0);add(con,con==="BT1"?(i===0?"+":"-"):i+1,name,x,y,`${note} ${con==="BT1"?"Separate functional battery-contact face; + and − show polarity, not holder pad numbers.":"Separate keyed connector/pad mating-face reference, pin 1 at the marked corner; verify the matching "+con+" marking on the physical board."}`,true);});
  // Reference designators locate each auxiliary function on the main board; the
  // separate face views avoid asserting undocumented PCB pad orientations.
  const tagX=17+(index%5)*10,tagY=23+Math.floor(index/5)*5;
  art+=label(tagX,tagY,con,1.2,"#e8d7a4");
  if(con==="BT1")art+=label(cx+1.2,cy+4,"+",1.3,"#f4eac5")+label(cx+3.74,cy+4,"−",1.3,"#f4eac5");
 });
 for(const p of contacts)art+=circle(p.vx,p.vy,.8,gold)+circle(p.vx,p.vy,.4,"#152c36");
 const revision=k64?"SCH-28163 E4 (2016-05-16)":"SCH-27556 E (2013-01-30)";
 const data={id:k64?"nxp-frdm-k64f-e4":"nxp-frdm-kl25z-e",name:k64?"NXP FRDM-K64F (E4)":"NXP FRDM-KL25Z (Rev E)",shortName:k64?"FRDM-K64F E4":"FRDM-KL25Z E",manufacturer:"NXP",subtitle:k64?"Kinetis K64 / Cortex-M4 / Ethernet":"Kinetis KL25 / Cortex-M0+ / touch slider",revision,description:`${revision}. All 64 expansion-header contacts${k64?", RF eight and Bluetooth four contacts":""}, target/debug and the listed power/configuration headers are available. Main header orientation follows the manufacturer component-side photographs and schematic. Auxiliary keyed mating-face views are identified by connector reference; their PCB landing orientation is not asserted. USB, Ethernet and memory-card interfaces are complete cable/card ports. Internal fixture/test points, oscillator sockets and USB shield links are outside this wiring scope.`,source:k64?docs+"design/design-center/development-boards-and-designs/FRDM-K64F":docs+"downloads/en/schematics/FRDM-KL25Z_SCH_REV_E.pdf",cad:{label:`NXP ${k64?"FRDM-K64F":"FRDM-KL25Z"} manufacturer board design files (account may be required)`,url:docs+`webapp/Download?colCode=${k64?"FRDM-K64F_BOM_SCH":"FRDM-KL25Z_BOM_SCH"}`},tags:["nxp","freescale","frdm","kinetis",k64?"k64":"kl25z"],body,view:[82.55,auxTop+Math.ceil(aux.length/columns)*cellHeight+1],contacts,pads,svg:`<g stroke-width=".12">${art}</g>`,hasBack:false,printedPinLabels:true,color:blue,footprintNote:`Reference cable/contact carrier for ${revision}. Main expansion headers retain verified 2.54 mm pitch and terminal order; the board envelope/placement are photo-derived reference geometry. Auxiliary pads below the outline are off-board connector terminations corresponding to separately identified physical mating-face views, not asserted module PCB pad locations. Obtain the original NXP CAD and check the fitted revision before fabrication.`};
 return cadReadyBoard(data);
}
const entries=[makeNxp(false),makeNxp(true)];
const nxpMoreComponents=entries.map(e=>e.component);
const nxpMoreArt=Object.fromEntries(entries.map(e=>[e.component.id,e.art]));
const nxpMoreFootprints=Object.fromEntries(entries.map(e=>[e.component.id,e.footprint]));
const nxpMoreModels=Object.fromEntries(entries.map(e=>[e.component.id,e.model]));

export default defineFamily("nxp-more", (nxpMoreComponents).map(component => ({ component, render: (nxpMoreArt)[component.art], footprint: (nxpMoreFootprints)[component.id], model: nxpMoreModels[component.id] })));
