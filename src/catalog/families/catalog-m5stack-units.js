import { defineFamily } from '../registry.js';
import { circle, label, line, path, rect } from '../shared/svg.js';

const bodyColor = '#eeefea';
const contactColors = ['#e9e9e2', '#e0bf35', '#ce4c49', '#333638'];
const pin = (id, number, caption, type, description) => ({ id, number, caption, type, description });
const power = [pin('vcc', '3', '5V', 'power_in', '5 V supply input; not a GPIO.'),
  pin('gnd', '4', 'GND', 'power_in', 'Common supply and signal ground.')];
const nc = pin('nc', '2', 'NC', 'no_connect', 'Unused yellow-wire contact in this schematic revision.');

function unit(spec) {
  const tall = spec.length === 48;
  const face = { x: 24, y: 16, w: 144, h: spec.length * 6 };
  const socketY = face.y + face.h - 14;
  const insetY = face.y + face.h + 44;
  // J1 numbers follow the linked M5 schematic, not a generic Grove convention.
  // The rear-label side is up in the enlarged socket mating-face view.
  const contacts = spec.signals.concat(power).map((p, i) => ({ ...p, x: 51 + i * 30, y: insetY + 24 }));
  const component = {
    id: spec.id, art: spec.id, name: spec.name, shortName: spec.short,
    manufacturer: 'M5Stack', category: spec.category ?? 'Sensors', referencePrefix: 'U',
    source: spec.schematic, references: [spec.page], subtitle: `${spec.sku} / ${spec.revision} / HY2.0-4P`,
    description: `${spec.description} Front housing view and a separate enlarged J1 socket mating face, rear-label side up. Socket contacts run white, yellow, red, black from left to right in that view. J1 terminal numbers follow the linked schematic. Housing shape and contact placement are representative; use manufacturer housing CAD for mechanical design.`,
    tags: ['m5stack', 'unit', 'grove', 'hy2.0', 'arduino', 'diy', 'starter kit', spec.sku.toLowerCase(), ...spec.tags],
    width: 192, height: insetY + 64, contactLayout: 'physical',
    pins: contacts.map(p => ({ id: p.id, number: `J1.${p.number}`, label: p.caption,
      description: `${p.description} J1.${p.number}, ${['white', 'yellow', 'red', 'black'][contacts.indexOf(p)]} wire.`,
      type: p.type, x: p.x, y: p.y, surface: true, edge: 'bottom' })),
  };
  if (tall) {
    const terminals = [pin('com', '1', 'COM', 'passive', 'Isolated relay common contact.'),
      pin('no', '2', 'NO', 'passive', 'Normally open relay contact; joins COM when the coil is energized.'),
      pin('relay-nc', '3', 'NC', 'passive', 'Normally closed relay contact; joins COM when the coil is de-energized.')];
    // Front photo labels the removable three-position terminal COM / NO / NC.
    component.pins.push(...terminals.map((p, i) => ({ id: p.id, number: `J2.${p.number}`, label: p.caption,
      type: p.type, description: p.description, x: 61 + i * 35, y: 44, surface: true, edge: 'top' })));
  }
  return {
    component,
    render: (part, labels = true) => {
      const housing = rect(face.x, face.y + 3, face.w, face.h, 18, '#b9bfc0') +
        rect(face.x, face.y, face.w, face.h, 18, bodyColor, '#aab7b9') +
        [54, 138].map(x => circle(x, face.y + face.h - 62, 14, '#d7dcd5', '#b8c0bb') + circle(x, face.y + face.h - 62, 9, '#eaf2f2', '#c3cdc9')).join('') +
        rect(61, socketY - 20, 70, 27, 3, '#252b2f', '#88928e') + rect(67, socketY - 14, 58, 16, 1, '#101719') +
        label(96, face.y + face.h - 35, 'M5', 15, '#b9c5c2') +
        label(96, face.y + face.h + 14, 'FRONT / SOCKET BELOW', 6.5, '#425964') +
        spec.draw(face) + label(96, insetY - 5, 'J1 MATING FACE · LABEL SIDE UP', 6, '#425964') +
        rect(28, insetY + 6, 136, 35, 3, '#30383b', '#819392') + rect(34, insetY + 11, 124, 25, 1, '#111a20') +
        rect(80, insetY + 5, 32, 5, 1, '#9da9a6');
      return housing + part.pins.map(p => {
        const i = contacts.findIndex(c => c.id === p.id);
        const terminal = i < 0;
        return `<g data-contact="${p.id}">` +
          (terminal ? circle(p.x, p.y, 6.5, '#aab7bd', '#e5e9e1') + line(p.x - 3, p.y + 3, p.x + 3, p.y - 3, '#4d6069', 1.5)
            : rect(p.x - 3, p.y - 5, 6, 10, .6, '#d5b577', '#f0dc99') + rect(p.x - 6, insetY + 43, 12, 4, .5, contactColors[i])) +
          (labels ? label(p.x, terminal ? p.y - 15 : insetY + 55, p.label, terminal ? 7 : 7.5, '#304d5b') : '') + '</g>';
      }).join('');
    },
    footprint: {
      body: tall ? [22.86, 15.24] : [17.78, 10.16], color: bodyColor, modelHeight: 8,
      pads: component.pins.map((p, i) => ({ id: p.id, x: (i < 4 ? i - 1.5 : i - 5) * 2.54,
        y: i < 4 ? -3.81 : 3.81, size: 1.8, drill: 1, square: i === 0 || i === 4 })),
      note: `Reference off-board cable-termination carrier for ${spec.name}. J1 and J2 rows use selected 2.54 mm pitch, 1 mm holes and 1.8 mm copper; this is not the enclosed Unit PCB or its connector mating pattern. J2 is the removable relay terminal when present. The housing illustration and generated WRL body are approximate. The linked manufacturer STL describes the housing; it is not imported by the WRL exporter.`,
    },
    model: { label: `${spec.sku} manufacturer housing STL`, url: `https://github.com/m5stack/M5_Hardware/blob/master/Products/${spec.directory}/Structures/Unit_${spec.cadName}.stl` },
  };
}

const entries = [
  unit({ id: 'm5stack-unit-light-u021', name: 'M5Stack Unit Light U021', short: 'Unit Light', sku: 'U021',
    length: 32, revision: '2018 V1.0 schematic', directory: 'U021_Unit_Light', cadName: 'Light',
    page: 'https://docs.m5stack.com/en/unit/Unit_Light', schematic: 'https://m5stack-doc.oss-cn-shenzhen.aliyuncs.com/709/U201-UNIT_LIGHT_SCHE.pdf',
    description: 'Photoresistor and adjustable LM393 light-threshold module. J1.1 is analog A.OUT, J1.2 is digital D.OUT, and the internal HT7533 regulator supplies the sensing circuit at 3.3 V. The schematic title and enclosure identify U021 despite the U201 download filename.',
    signals: [pin('analog', '1', 'A.OUT', 'output', 'Analog photoresistor-divider output, referenced to the internal 3.3 V rail.'),
      pin('digital', '2', 'D.OUT', 'open_collector', 'LM393 comparator output with onboard 10 kΩ pull-up to 3.3 V; threshold set by the trimmer.')],
    tags: ['light', 'ldr', 'photoresistor', 'lm393', 'analog', 'digital'],
    draw: f => circle(96, 65, 20, '#cbb999', '#ae9e85') + path('M81 54H110V61H82V68H110V75H82', 'none', '#9c6154', 2) +
      rect(80, 107, 32, 30, 2, '#2497bd', '#12749e') + circle(96, 122, 8, '#d1c6ab', '#6b8a92') + line(90, 127, 102, 117, '#566c75', 2),
  }),
  unit({ id: 'm5stack-unit-pir-u004', name: 'M5Stack Unit PIR U004', short: 'Unit PIR', sku: 'U004',
    length: 32, revision: 'AS312 / HT7533 schematic', directory: 'U004_Unit_PIR', cadName: 'PIR',
    page: 'https://docs.m5stack.com/en/unit/Unit_PIR', schematic: 'https://m5stack-doc.oss-cn-shenzhen.aliyuncs.com/701/UNIT_PIR.pdf',
    description: 'AS312 passive infrared motion detector with a nominal two-second retriggerable output. The white-wire J1.1 is the motion output; yellow-wire J1.2 is unused. Housing IN/OUT captions describe the host port direction.',
    signals: [pin('motion', '1', 'OUT', 'output', 'Active-high motion output through a 1 kΩ series resistor from the 3.3 V AS312 sensor.'), nc],
    tags: ['pir', 'motion', 'as312', 'infrared'],
    draw: () => circle(96, 86, 34, '#c7d0cc', '#8faaa7') + circle(96, 83, 32, '#e6ece5', '#c2cfc7') +
      [0, 1, 2].map(i => circle(96, 83, 10 + i * 8, 'none', '#c9d6cd')).join('') + line(66, 83, 126, 83, '#cbd8cf', 1) + line(96, 53, 96, 113, '#cbd8cf', 1),
  }),
  unit({ id: 'm5stack-unit-relay-u023', name: 'M5Stack Unit Relay U023', short: 'Unit Relay', sku: 'U023',
    category: 'Actuators', length: 48, revision: 'single-channel SPDT schematic', directory: 'U023_Unit_Relay', cadName: 'Relay',
    page: 'https://docs.m5stack.com/en/unit/Unit_Relay', schematic: 'https://m5stack-doc.oss-cn-shenzhen.aliyuncs.com/577/UNIT-RELAY.pdf',
    description: '5 V single-channel SPDT relay module with S8050 transistor driver and flyback diode. J1.2 drives the coil, while J1.1 is unused. COM, NO and NC are isolated switching contacts and are not connected to Grove ground. Connector and housing placement follow the product photo.',
    signals: [pin('unused', '1', 'NC', 'no_connect', 'Unused white-wire contact; not the relay normally-closed contact.'),
      pin('control', '2', 'DIN', 'input', 'Active-high transistor-driver input. A 10 kΩ resistor pulls the control line down.')],
    tags: ['relay', 'spdt', 'switch', 'hk4100f', 'actuator'],
    draw: () => rect(38, 25, 116, 44, 3, '#e17d2f', '#bc682b') +
      rect(52, 86, 88, 122, 3, '#dd9c31', '#ab7732') + label(96, 125, 'HK4100F', 9, '#8d6c3b') + label(96, 145, 'DC 5V', 9, '#8d6c3b') + label(96, 164, 'SPDT', 8, '#8d6c3b'),
  }),
];

export default defineFamily('m5stack-units', entries);
