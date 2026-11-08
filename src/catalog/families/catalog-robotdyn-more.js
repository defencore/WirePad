import { defineFamily } from "../registry.js";
import { makerContact as c, makerReferenceBoard } from "../shared/maker-reference-board.js";
import { circle, label, rect, smd } from "../shared/svg.js";

const wiki = name => `https://github.com/RobotDynOfficial/Documentation/wiki/${encodeURIComponent(name)}`;
const hole = (x,y)=>circle(x,y,14,"#d5cfa5","#eee3bd")+circle(x,y,10,"#eef2ee");
const revision = "Original RobotDyn manufacturer wiki/photo archive, commit a852375999752d542c724fb51d297b0d9e3a8506; PCB revision and numeric SKU are unmarked. The current robotdyn.com domain is independent of the original manufacturer. Component-side view; physical offsets and the native wire carrier are approximate.";
const voltage = makerReferenceBoard({id:"robotdyn-25v-voltage-sensor",name:"RobotDyn 25 V DC Voltage Sensor",shortName:"25 V sensor",manufacturer:"RobotDyn",category:"Sensors",width:320,height:160,
  subtitle:"Original two-pin analog-output variant / 5:1 divider",source:wiki("Simple-DC-Voltage-Sensor,-VDC-25V"),
  description:`Passive voltage-divider module matching the original two-pin RobotDyn analog-output photo, not a three-pin VCC/S/GND clone. Left screw block is GND above VCC; right header is GND above AO. A 30 kΩ/7.5 kΩ divider scales input by 5. Up to 25 V is appropriate only with a 5 V ADC range; limit the measured input to 16.5 V for a 3.3 V ADC. Grounds are common; no isolation. ${revision}`,
  tags:["diy","starter kit","arduino","robotdyn","voltage sensor","25v","analog","divider"],
  contacts:[c("input-gnd","P1.2","GND","power_in","Measured supply ground; common with output ground.",54,55,{group:"P1",shape:"pad",padWidth:18,padHeight:13,dx:25,dy:0,anchor:"start"}),
    c("input-vcc","P1.1","VCC","input","Voltage to measure. Divider ratio 5:1; do not exceed the host ADC input rating.",54,105,{group:"P1",shape:"pad",padWidth:18,padHeight:13,dx:25,dy:0,anchor:"start"}),
    c("output-gnd","P2.2","GND","power_in","Output ground, common with P1 ground.",284,55,{group:"P2",shape:"pin",dx:-16,dy:0,anchor:"end"}),
    c("output-ao","P2.1","AO","output","Analog voltage output, approximately measured VCC / 5. No supply pin is required.",284,105,{group:"P2",shape:"pin",dx:-16,dy:0,anchor:"end"})],
  internalConnections:[["input-gnd","output-gnd"]],
  draw:show=>rect(20,24,280,112,4,"#25292b","#858b80")+rect(25,33,53,95,3,"#66934b","#9fc780")+rect(34,46,32,18,1,"#23392b")+rect(34,96,32,18,1,"#23392b")+hole(133,80)+smd(187,49)+smd(187,100)+rect(277,43,12,74,1,"#29312e")+
    (show?label(181,33,"DC25V Voltage Sensor",7.5)+label(195,126,"RobotDyn",8):""),
});

function ldo(value){
  const v=value.replace(".","-"), contacts=[
    c("input-gnd","P1.2","GND","power_in","Input ground, common with both output grounds and plated ground holes.",26,86,{group:"P1",shape:"pin",dx:16,dy:0,anchor:"start"}),
    c("vin","P1.1","VIN","power_in","DC input via the onboard series M7 diode. Manufacturer range 6–12 V; allow regulator and diode dropout headroom.",26,122,{group:"P1",shape:"pin",dx:16,dy:0,anchor:"start"}),
    c("output-gnd","P2.2","GND","power_in","Output ground, common with input ground.",334,86,{group:"P2",shape:"pin",dx:-16,dy:0,anchor:"end"}),
    c("vout","P2.1","VOUT","power_out",`Regulated ${value} V output. Manufacturer 800 mA headline is thermal-condition dependent; this is a linear regulator.`,334,122,{group:"P2",shape:"pin",dx:-16,dy:0,anchor:"end"}),
    c("corner-in-gnd","H1.GND","GND","power_in","Top-left plated hole; printed GND, shared with all other ground contacts.",46,42,{group:"H",dy:14,font:6.5}),
    c("corner-vin","H2.VIN","VIN","power_in","Bottom-left plated hole; same input net as P1 VIN.",46,171,{group:"H",dy:13,font:6.5}),
    c("corner-out-gnd","H3.GND","GND","power_in","Top-right plated hole; printed GND, common ground.",314,42,{group:"H",dy:14,font:6.5}),
    c("corner-vout","H4.VOUT","VOUT","power_out",`Bottom-right plated hole; same ${value} V output as P2 VOUT.`,314,171,{group:"H",dy:13,font:6.5}),
  ];
  return makerReferenceBoard({id:`robotdyn-ams1117-${v}v-module`,name:`RobotDyn AMS1117 ${value} V Regulator`,shortName:`AMS1117 ${value} V`,manufacturer:"RobotDyn",category:"Power",width:360,height:212,
    subtitle:`Original fixed${value} V module / four-contact headers + four plated holes`,source:wiki(`Voltage-regulator-Module-LDO-(${value} V)`),
    description:`Original black RobotDyn linear regulator module with AMS1117-${value} marking and the ${value} V option checked in the product photo. Header left top→bottom GND, VIN; right top→bottom GND, VOUT. The four plated corner holes repeat those nets. All 8 exposed connection contacts are represented; H1–H4 are WirePad corner identifiers, not manufacturer reference numbers. Nominal 6–12 V input; output ${value} V subject to dropout and heat dissipation. The archived ${value==="3.3"?"3.3 V page copies 5 V specifications":"5 V page contains a copied 3.3 V schematic"}; the exact output is verified by the populated regulator marking and checked photo option. ${revision}`,
    tags:["diy","starter kit","arduino","robotdyn","ams1117","linear regulator","ldo",`${value}v`],contacts,
    internalConnections:[["input-gnd","output-gnd","corner-in-gnd","corner-out-gnd"],["vin","corner-vin"],["vout","corner-vout"]],
    draw:show=>rect(26,24,308,172,5,"#25282b","#92968c")+hole(111,45)+hole(111,171)+rect(25,76,14,58,1,"#c06879","#ef9fb6")+rect(321,76,14,58,1,"#42a6bb","#a0e1e4")+
      rect(167,66,45,23,1,"#b6c0b9","#e4e7da")+rect(162,88,57,51,2,"#2a2c2d","#8c968b")+rect(165,139,9,17,1,"#c2c6b8")+rect(187,139,9,17,1,"#c2c6b8")+rect(208,139,9,17,1,"#c2c6b8")+
      smd(135,150)+smd(239,140)+smd(239,86)+smd(86,83)+rect(83,114,25,20,2,"#2c3031","#7e877e")+
      (show?label(190,107,"AMS1117",7)+label(190,122,value,7)+label(231,177,`${value} V ✓`,8)+label(195,188,"Voltage regulator",7):""),
  });
}

export default defineFamily("robotdyn-more",[voltage,ldo("3.3"),ldo("5")]);
