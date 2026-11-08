import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { partArt } from '../src/canvas/part-art.js';
import { drawingMarkup, partMarkup } from '../src/canvas/markup.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { traceNet } from '../src/model/continuity.js';

function resistor() {
  const component = componentById.get('resistor'), profile = mountingFor(component.id);
  return { id: 'r', componentId: component.id, x: 50, y: 40,
    label: 'Axial Resistor · 120 Ω', scale: { x: .7874015748031495, y: .7874015748031495 },
    leads: profile.contacts.map(contact => ({ pinId: contact.pinId,
      x: profile.origin.x + contact.x * profile.unitsPerMm,
      y: profile.origin.y + contact.y * profile.unitsPerMm })) };
}

test('moving formed tips changes only metal geometry while its physical resistor body stays fixed', () => {
  const part = resistor(), component = componentById.get(part.componentId);
  const source = partArt(part, component);
  const changed = { ...part, leads: part.leads.map((lead, index) => ({ ...lead, x: lead.x + index * 30 - 10, y: lead.y + 20 })) };
  const moved = partArt(changed, component);
  assert.notEqual(moved, source);
  assert.equal(moved.slice(moved.lastIndexOf('</g>')), source.slice(source.lastIndexOf('</g>')), 'Body paths and dimensions must not stretch with the lead span');
  const markup = partMarkup(changed, component, new Set(['1', '2']), true);
  for (const lead of changed.leads) {
    const group = markup.match(new RegExp(`<g class="canvas-pin" data-pin="${lead.pinId}"[\\s\\S]*?</g>`))[0];
    assert.ok(group.includes(`cx="${lead.x}" cy="${lead.y}"`));
  }
});

test('formed component artwork renders below jumper paths while its contact dots stay above them', () => {
  const part = resistor();
  const markup = drawingMarkup({ version: 2, title: 'Jumper layering',
    parts: [{ id: 'host', componentId: 'breadboard', x: 0, y: 0 }, part],
    wires: [{ id: 'jumper', from: { partId: 'host', pinId: 'a1' }, to: { partId: part.id, pinId: '1' }, color: '#123456' }] });
  const body = markup.indexOf('data-contact="1"'), jumper = markup.indexOf('stroke="#123456"');
  assert.ok(body >= 0 && body < jumper);
  assert.ok(markup.indexOf('r="3" fill="#087a6f"', jumper) > jumper);
});

test('mounted discrete captions are compact while user labels and all unmounted art stay unchanged', () => {
  const part = resistor(), component = componentById.get(part.componentId);
  assert.match(partMarkup(part, component, new Set(), false), />R · 120 Ω<\/text>/);
  assert.match(partMarkup({ ...part, label: 'Reset pull-up' }, component, new Set(), false), />Reset pull-up<\/text>/);
  assert.equal(partArt({ id: 'old', componentId: component.id }, component), componentArt(component));
  const chip = componentById.get('ti-ne555p');
  assert.equal(partArt({ id: 'chip', componentId: chip.id, attachment: {} }, chip), componentArt(chip, { labels: false }));
  assert.equal(partArt({ id: 'old-chip', componentId: chip.id }, chip), componentArt(chip));
});

test('a lifted formed body still covers the sockets beneath it without creating electrical seating', () => {
  const part = resistor();
  part.x = 136 - 48 * part.scale.x;
  part.y = 112 - 16 * part.scale.y;
  const host = { id: 'host', componentId: 'breadboard', x: 0, y: 0 };
  const project = { version: 2, title: 'Lifted body', parts: [host, part], wires: [] };
  const drawing = resolveDrawing(project);
  assert.ok(drawing.parts.get(host.id).covered.has('c2'));
  assert.ok(drawing.parts.get(host.id).covered.has('d2'));
  assert.equal(drawing.parts.get(part.id).connected.size, 0);
  assert.equal(traceNet(project, { partId: part.id, pinId: '1' }).endpoints.size, 1);
  const moved = resolveDrawing({ ...project, parts: [host, { ...part, x: 1000 }] });
  assert.equal(moved.parts.get(host.id).covered.size, 0);
});
