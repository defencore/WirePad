import { defineFamily } from "../registry.js";
import { cadReadyBoard } from "../shared/cad-board.js";
import { cadBoardMounting } from "../shared/cad-board-mounting.js";
import { circle, label, line, rect } from "../shared/svg.js";

const gold="#c7ab63",silk="#ecede0",pcb="#244f7b";
const source="https://www.waveshare.net/wiki/";
const picoNames=["GP0","GP1","GND","GP2","GP3","GP4","GP5","GND","GP6","GP7","GP8","GP9","GND","GP10","GP11","GP12","GP13","GND","GP14","GP15","GP16","GP17","GND","GP18","GP19","GP20","GP21","GND","GP22","RUN","GP26","GP27","GND","GP28","ADC_VREF","3V3","3V3_EN","GND","VSYS","VBUS"];
function chip(x,y,w,h,name){return rect(x,y,w,h,.4,"#1e2930","#8eaaa9")+label(x+w/2,y+h/2,name,Math.min(1.7,w/6),"#a7b9b6");}
function usb(x,y){return rect(x,y,8.8,7,.5,"#bac3c1","#e9ecdf")+rect(x+.6,y+.5,7.6,1.5,.5,"#243b43");}
function button(x,y){return rect(x,y,3.5,4.5,.4,"#bbc5c1","#e6e9de")+rect(x+.5,y+.7,2.5,3.1,.5,"#e5e5d9");}
function newBoard(id,name,body,description,cad){
 return {key:id,id:`waveshare-${id}`,name:`Waveshare ${name}`,shortName:name,manufacturer:"Waveshare",subtitle:"3.3 V I/O / physical board contacts",description,revision:"Manufacturer schematic and same-side pinout listed in the linked documentation",source:source+name,cad,tags:["waveshare",name.toLowerCase(),"microcontroller"],body,view:[...body],contacts:[],pads:[],svg:"",hasBack:false,printedPinLabels:true,contactLabels:true,color:pcb,
 footprintNote:"Reference contact carrier. Expansion pitch, terminal numbers and board dimensions follow the manufacturer mechanical/pinout drawings; backside small-pad placement is a same-side photograph reconstruction. Connector/test-pad land dimensions and component clearances are representative, not a verified vendor production land pattern. Match the fitted board and linked STEP/schematic before fabrication."};
}
function add(board,connector,number,name,x,y,{back=false,type,note="",smd=false,size}={}){
 const id=`${connector.toLowerCase()}-${String(number).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`;
 if(!type)type=name==="GND"||name==="AGND"?"power_in":name==="NC"?"no_connect":/^3V3$/.test(name)?"power_out":/^(VBUS|VSYS|5V|BAT)/.test(name)?"passive":/RUN|BOOT|SWCLK|ADC_VREF|3V3_EN/.test(name)?"input":"bidirectional";
 const base=type==="bidirectional"?"3.3 V GPIO / multiplexed peripheral contact. Analog GPIO must remain within the documented reference range.":type==="power_in"?"Ground / supply return.":"Use the manufacturer power/control specifications.";
 board.contacts.push({id,number:`${connector}.${number}`,label:name,type,description:`${name}. ${base} ${note} ${back?"Underside view shown separately; mirror the component-side frame.":"Component-side view."}`,x:back?board.body[0]-x:x,y,vx:x,vy:back?board.body[1]+6+y:y,back,connector});
 const px=(back?board.body[0]-x:x)-board.body[0]/2,py=y-board.body[1]/2;
 board.pads.push({id,x:Number(px.toFixed(4)),y:Number(py.toFixed(4)),size:size??(smd?[.8,1]:1.7),drill:smd?null:.85,smd,shape:smd?"rect":"circle"});
 if(back){board.hasBack=true;board.view[1]=board.body[1]*2+6;}
}
function finish(board,front,back=""){
 const[w,h]=board.body;
 let art=rect(0,0,w,h,1,pcb,"#93a8a8")+front;
 if(board.hasBack)art+=`<g transform="translate(0 ${h+6})">${rect(0,0,w,h,1,pcb,"#93a8a8")+back}</g>`;
 for(const p of board.contacts){
  const small=p.back||p.connector==="H1";
  art+=small?rect(p.vx-.38,p.vy-.48,.76,.96,.08,gold):circle(p.vx,p.vy,.84,gold)+circle(p.vx,p.vy,.4,"#173747");
  // Compact printed labels track the exact physical pads; dense test pads use numbers.
  const text=p.label.replace(/^GP/,"");
  if(board.id.includes("relay")){if(/^P(?:9|1[0-6])$/.test(p.connector))art+=label(p.vx,p.vy+(p.vy<40?4.4:-4.4),p.label,1.2,silk);continue;}
  if(p.connector==="CN"||p.connector==="P1"||p.connector==="U5"||p.connector==="P8"){
   if(p.vx<2.5)art+=label(p.vx+1.2,p.vy,text,.78,silk,"start");
   else if(p.vx>w-2.5)art+=label(p.vx-1.2,p.vy,text,.78,silk,"end");
   else art+=label(p.vx,p.vy-1.1,text,.75,silk);
  }
 }
 board.svg=`<g stroke-width=".12">${art}</g>`;
 const entry = cadReadyBoard(board);
 if (!board.id.includes('relay')) {
  const plus = board.id.endsWith('plus'), c6 = board.id.includes('esp32-c6');
  const pins = board.contacts.filter(pin => plus ? pin.connector === 'U5' : c6 ? pin.connector === 'P8' :
   pin.connector === 'P1' && (Number(pin.number.split('.').at(-1)) <= 9 || Number(pin.number.split('.').at(-1)) >= 15));
  entry.mounting = cadBoardMounting(board, entry, { pinIds: pins.map(pin => pin.id), overhangs: [[plus ? 6.1 : 4.6, -.6, 8.8, 7]],
   source: { url: board.source, label: `Waveshare ${board.shortName} manufacturer mechanical drawing and pinout` },
   bodyEvidence: 'Manufacturer dimensions verify the PCB and complete two-row expansion centers. Body regions copy the fixed PCB and protruding USB-C shell from the existing same-side reconstruction. Underside test contacts remain source-photo reference projections; they are not insertion leads.',
   note: plus ? 'Populate both complete 20-pin Pico rows, 17.78 mm apart at 2.54 mm pitch.' : c6 ?
    'Populate both complete nine-pin edge rows, 15.24 mm apart at 2.54 mm pitch.' :
    'Populate both complete nine-pin side rows, 15.24 mm apart at 2.54 mm pitch. Leave the five crosswise bottom contacts unpopulated or face-up; inserting them downward would short independent signals in the breadboard strips.' });
 }
 return entry;
}
function zero(rp2350){
 const name=rp2350?"RP2350-Zero":"RP2040-Zero",board=newBoard(name.toLowerCase(),name,[18,23.5],`${name} with USB-C, BOOT/RESET and WS2812 on GPIO16. All 23 edge contacts and ten underside GPIO/ground pads are exposed${rp2350?", plus three underside SWD contacts":""}. The two Zero generations have different underside terminal numbering and spacing; each is mapped from its own schematic.`,{label:`Waveshare ${name} manufacturer STEP archive`,url:rp2350?"https://www.waveshare.net/w/upload/1/1d/RP2350_Zero_step.zip":"https://www.waveshare.net/w/upload/f/f7/RP2040_Zero_stp.zip"});
 const pinName=[...Array.from({length:16},(_,i)=>`GP${i}`),"GP26","GP27","GP28","GP29","3V3","GND","5V"];
 pinName.forEach((name,i)=>{let x,y;if(i<9){x=16.62;y=1.59+i*2.54;}else if(i<14){x=14.08-(i-9)*2.54;y=21.91;}else{x=1.38;y=21.91-(i-14)*2.54;}add(board,"P1",i+1,name,x,y,{note:i===22?"5 V edge contact is the unregulated USB/input rail.":""});});
 if(rp2350){
  ["GND","GP17","GP18","GP19","GP20"].forEach((n,i)=>add(board,"P2",i+1,n,14.9,19.4-i*2,{back:true,smd:true}));
  ["GP21","GP22","GP23","GP24","GP25"].forEach((n,i)=>add(board,"P3",i+1,n,14.9,9.4-i*2,{back:true,smd:true}));
  add(board,"SWD1",1,"SWDIO",11.54,1.5,{back:true,smd:true});add(board,"SWD1",2,"GND",9,1.5,{back:true,smd:true});add(board,"SWD1",3,"SWCLK",6.46,1.5,{back:true,smd:true});
 }else{
  ["GP17","GP18","GP19","GP20","GP21"].forEach((n,i)=>add(board,"P2",i+1,n,15.2,18.13-i*1.27,{back:true,smd:true}));
  ["GP22","GP23","GP24","GP25","GND"].forEach((n,i)=>add(board,"P3",i+1,n,15.2,11.78-i*1.27,{back:true,smd:true}));
 }
 const front=usb(4.6,-.6)+chip(6.5,8,5,4,"FLASH")+button(3,14.2)+button(11.5,14.2)+rect(8,17.7,2,2,.2,"#e9e4cc");
 const back=chip(5,9,8,8,rp2350?"RP2350A":"RP2040")+rect(6.5,18.8,5,3,.3,"#afb9b4","#e1e3d7")+chip(6,3,6,3,"POWER");
 return finish(board,front,back);
}
function plus(){
 const b=newBoard("rp2350-plus","RP2350-Plus",[21,51],"RP2350A Pico-format board with USB-C, 4 MB flash, buck-boost 3.3 V supply and LiPo charging. All 40 Pico expansion contacts, three underside SWD pads, USB D-/D+ and BOOT test pads, and the two-contact PH1.25 battery socket are exposed. GPIO29 is used internally for supply measurement rather than as an expansion-header ADC.",{label:"Waveshare RP2350-Plus manufacturer STEP archive",url:"https://www.waveshare.net/w/upload/f/fc/RP2350_Plus_STEP.zip"});
 picoNames.forEach((n,i)=>add(b,"U5",i+1,n,i<20?1.61:19.39,1.37+(i<20?i:39-i)*2.54));
 add(b,"H1",1,"SWDIO",7.96,49,{back:true,smd:true});add(b,"H1",2,"GND",10.5,49,{back:true,smd:true});add(b,"H1",3,"SWCLK",13.04,49,{back:true,smd:true});
 add(b,"P1",1,"USB_D-",8.2,1.4,{back:true,smd:true,note:"Native USB D- test contact, a dedicated USB interface rather than GPIO."});add(b,"P2",1,"USB_D+",10.5,1.4,{back:true,smd:true,note:"Native USB D+ test contact."});add(b,"P4",1,"BOOT",12.8,1.4,{back:true,smd:true,note:"QSPI flash chip-select boot strap; pulling low while resetting enters the USB bootloader."});
 add(b,"P3",1,"BAT+",9.875,49,{smd:true,note:"PH1.25 battery positive, single-cell 3.7 V nominal LiPo; connected to the ETA6096 charger."});add(b,"P3",2,"GND",11.125,49,{smd:true,note:"Battery negative. Observe polarity."});
 const front=usb(6.1,-.6)+chip(5,9,4,4,"PWR")+chip(12,9,4,4,"REG")+button(3.5,21)+button(14,21)+chip(7,22,7,7,"FLASH")+chip(5.5,32,10,10,"RP2350A")+rect(8,43,5,3,.3,"#adb9b7")+rect(7.5,47,6,4,.35,"#e1dfcf","#a2b0a7")+label(10.5,18,"RP2350-Plus",1.2,silk);
 const back=label(10.5,24,"RP2350-Plus",1.3,silk)+label(10.5,27,"UNDERSIDE",1,silk);
 return finish(b,front,back);
}
function c6(){
 const b=newBoard("esp32-c6-zero","ESP32-C6-Zero",[18,23.5],"ESP32-C6 Zero / Zero-M with Wi-Fi 6, BLE and IEEE 802.15.4. All 18 castellated/header contacts and seven underside test pads are included. The published schematic labels ESP32-C6FH4 while current product documentation lists FH8; flash size follows the fitted chip. The pin map is verified against this board's schematic and current physical pinout, not inferred from the S3 Zero.",{label:"Waveshare ESP32-C6-Zero manufacturer 3D model",url:"https://www.waveshare.net/w/upload/1/1b/ESP32-C6-Zero-3D.zip"});
 b.source="https://docs.waveshare.net/ESP32-C6-Zero/";
 const names=["5V","GND","3V3","GP0","GP1","GP2","GP3","GP4","GP5","GP22","GP21","GP20","GP19","GP18","GP15","GP14","RX","TX"];
 names.forEach((n,i)=>add(b,"P8",i+1,n,i<9?1.38:16.62,1.59+(i<9?i:17-i)*2.54,{note:n==="TX"?"UART0 transmit GPIO16.":n==="RX"?"UART0 receive GPIO17.":""}));
 [[1,"GP13"],[3,"GP12"],[6,"GP23"],[4,"GP9"],[2,"GP8"],[7,"GP7"],[5,"GP6"]].forEach(([con,n],i)=>add(b,`P${con}`,1,n,3.63,8.79+i*1.59,{back:true,smd:true,note:n==="GP8"?"Shared with the onboard WS2812 DIN.":n==="GP9"?"BOOT strap / BOOT button signal.":n==="GP13"?"USB D+ when USB Serial/JTAG is enabled.":n==="GP12"?"USB D- when USB Serial/JTAG is enabled.":""}));
 const front=usb(4.6,-.6)+button(3.2,7.3)+button(11.2,7.3)+chip(5.4,12,7.2,7.2,"ESP32-C6")+rect(7.5,21.1,4,1.7,.3,"#a66a49","#dfd9b6")+label(9,20,"C6-Zero",.95,silk);
 const back=label(10.5,12,"WAVESHARE",1.1,silk)+label(10.5,20,"ESP32-C6-Zero",.9,silk);
 return finish(b,front,back);
}
function relay(){
 const b=newBoard("pico-relay-b","Pico-Relay-B",[122,88],"Eight-channel SPDT relay carrier for a separate Raspberry Pi Pico/Pico W. All 40 Pico socket contacts, 24 isolated relay terminals and two external 5 V input terminals are available. GPIO21/20/19/18/17/16/15/14 control CH1–8, GPIO6 controls the buzzer and GPIO13 the RGB LED. The Pico module's internal underside USB/BOOT assembly landings are outside this carrier wiring scope. Artwork shows the open carrier without the optional Pico/case.",{label:"Waveshare Pico-Relay-B manufacturer schematic",url:"https://www.waveshare.net/w/upload/c/cb/Pico-Relay-B_SchDoc.pdf"});
 b.category="Expansion boards";
 picoNames.forEach((n,i)=>add(b,"U20",i+1,n,i<20?22+(i*2.54):22+(39-i)*2.54,i<20?62.32:42,{type:n==="GND"?"power_in":/^GP(6|13|14|15|16|17|18|19|20|21)$/.test(n)?"input":"passive",note:"Pico socket contact; pass-through pins have no independent MCU drive on the carrier. Connected channel/control loads follow the documented GPIO assignment."}));
 for(let channel=1;channel<=8;channel++)for(let n=1;n<=3;n++){
  const bottom=channel>=7,start=bottom?(channel===8?80:95.24):15+(channel-1)*15.24;
  const x=start+(bottom?3-n:n-1)*5.08,y=bottom?81:7;
  add(b,`P${channel+8}`,n,["NC","COM","NO"][n-1],x,y,{type:"passive",note:`CH${channel} isolated mechanical relay ${n===1?"normally-closed":n===2?"common":"normally-open"} contact. It supplies no voltage. NC means normally closed, not unconnected.`});
 }
 add(b,"P17",2,"5V",60,81,{type:"power_in",note:"External USB_5V power input. The adjacent terminal is ground."});add(b,"P17",1,"GND",65.08,81,{type:"power_in"});
 let art=[[4,4],[118,4],[4,84],[118,84]].map(([x,y])=>circle(x,y,2,gold)+circle(x,y,1.3,"#173747")).join("");
 for(let ch=1;ch<=6;ch++){const x=12+(ch-1)*15.24;art+=rect(x,3,15.24,9,.6,"#6c9e62","#b4c39a")+rect(x,14,14.3,20,.7,"#202a2d","#778d8a")+label(x+7,24,`CH${ch}`,2,silk);}
 for(const[ch,x]of[[8,77],[7,92.24]])art+=rect(x,77,15.24,9,.6,"#6c9e62","#b4c39a")+rect(x,53,14.3,20,.7,"#202a2d","#778d8a")+label(x+7,63,`CH${ch}`,2,silk);
 art+=rect(19,40,55,4,.3,"#142d3e","#8aa29c")+rect(19,60.3,55,4,.3,"#142d3e","#8aa29c")+label(46,52,"PICO SOCKET • U20",2.3,silk)+rect(57,77,12,9,.5,"#6b9f64","#b9c9a3")+label(63,74,"5V / GND",1.4,silk)+rect(39,79,8,7,.5,"#b7c2c0","#e9ecdf")+button(12,78)+button(20,78)+circle(31,80.5,3.5,"#24303a","#879c9d")+label(51,69,"Pico-Relay-B",2.5,silk);
 for(const p of b.contacts.filter(p=>/^P(?:9|1[0-7])$/.test(p.connector)))art+=circle(p.vx,p.vy,1.7,"#b8c4b0","#e4e6c9")+line(p.vx-1,p.vy,p.vx+1,p.vy,"#5d725e",.3);
 return finish(b,art);
}
const entries=[zero(false),zero(true),plus(),c6(),relay()];
const waveshareMoreComponents=entries.map(e=>e.component);
const waveshareMoreArt=Object.fromEntries(entries.map(e=>[e.component.id,e.art]));
const waveshareMoreFootprints=Object.fromEntries(entries.map(e=>[e.component.id,e.footprint]));
const waveshareMoreModels=Object.fromEntries(entries.map(e=>[e.component.id,e.model]));
const waveshareMoreMountings=Object.fromEntries(entries.map(e=>[e.component.id,e.mounting]));

export default defineFamily("waveshare-more", (waveshareMoreComponents).map(component => ({ component, render: (waveshareMoreArt)[component.art], footprint: (waveshareMoreFootprints)[component.id], model: waveshareMoreModels[component.id], mounting: waveshareMoreMountings[component.id] })));
