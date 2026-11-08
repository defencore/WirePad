import assert from 'node:assert/strict';
import { test } from 'node:test';
import { components, componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { contactLabelLayout } from '../src/canvas/contact-labels.js';
import { partArt } from '../src/canvas/part-art.js';
import { instancePins } from '../src/model/part-pins.js';

const intersects = (a, b) => a.x < b.x + b.width && b.x < a.x + a.width &&
  a.y < b.y + b.height && b.y < a.y + a.height;

test('every reviewed module header keeps a compact label inside its PCB without covering another label or contact', () => {
  const modules = components.filter(component => mountingFor(component.id)?.type === 'breadboard-module');
  assert.ok(modules.length >= 596);
  let contacts = 0;
  for (const component of modules) {
    const profile = mountingFor(component.id);
    const physical = profile.view ? { ...component, pins: instancePins({ componentId: component.id, view: profile.view.id }, component) } : component;
    const layout = contactLabelLayout(physical, profile);
    const byId = new Map(layout.map(label => [label.pinId, label]));
    for (const contact of profile.contacts) {
      assert.ok(byId.has(contact.pinId), `${component.id}/${contact.pinId}`);
      contacts++;
    }
    for (let index = 0; index < layout.length; index++) {
      const label = layout[index], { bounds } = label;
      assert.ok(profile.bodyRegions.some(body => bounds.x >= body.x && bounds.y >= body.y &&
        bounds.x + bounds.width <= body.x + body.width && bounds.y + bounds.height <= body.y + body.height), `${component.id}/${label.pinId}`);
      assert.ok(!layout.slice(index + 1).some(other => intersects(bounds, other.bounds)), `${component.id}/${label.pinId}`);
      assert.ok(!physical.pins.some(pin => pin.x >= bounds.x && pin.x <= bounds.x + bounds.width &&
        pin.y >= bounds.y && pin.y <= bounds.y + bounds.height), `${component.id}/${label.pinId} covers a contact`);
    }
  }
  assert.equal(contacts, modules.reduce((total, component) => total + mountingFor(component.id).contacts.length, 0));
});

test('Nano, C6 and INA228 keep their full short header functions in every orientation', () => {
  for (const id of ['arduino-nano', 'esp32-c6-devkitm-1', 'adafruit-module-5832']) {
    const component = componentById.get(id), profile = mountingFor(id);
    const original = contactLabelLayout(component, profile);
    for (const rotation of [0, 90, 180, 270]) {
      const layout = contactLabelLayout(component, profile, rotation);
      for (const contact of profile.contacts) {
        const label = layout.find(label => label.pinId === contact.pinId), pin = component.pins.find(pin => pin.id === contact.pinId);
        assert.equal(label.text, pin.label, `${id}/${pin.id}/${rotation}`);
      }
      for (const label of layout) {
        const worldAngle = ((label.angle + rotation) % 360 + 360) % 360;
        assert.ok([0, 90].includes(worldAngle), `${id}/${label.pinId}/${rotation}`);
        assert.deepEqual(label.bounds, original.find(other => other.pinId === label.pinId).bounds);
      }
    }
  }
});

test('compact labels preserve raw artwork, respect unlabeled rendering and survive lifting a fitted board', () => {
  for (const id of ['arduino-nano', 'esp32-c6-devkitm-1', 'adafruit-module-5832']) {
    const component = componentById.get(id), raw = { id: 'module', componentId: id, x: 10, y: 20 };
    assert.equal(partArt(raw, component), componentArt(component));
    assert.equal(partArt(raw, component, { labels: false }), componentArt(component, { labels: false }));
    const fitted = { ...raw, rotation: 90, scale: { x: .8, y: .8 } };
    const seated = { ...fitted, attachment: { hostPartId: 'host', contacts: [] } };
    const art = partArt(fitted, component);
    assert.match(art, /class="contact-labels" pointer-events="none"/);
    assert.equal(partArt(seated, component), art);
    assert.equal(partArt(JSON.parse(JSON.stringify(fitted)), component), art);
    assert.doesNotMatch(partArt(fitted, component, { labels: false }), /class="contact-labels"|data-contact-label=/);
  }
});
