import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mountingFor } from '../src/catalog/index.js';
import { bindInspector } from '../src/ui/inspector/controller.js';
import { inspectPart } from '../src/ui/inspector/views.js';

const nano = { id: 'nano', componentId: 'arduino-nano', x: 10, y: 20 };
const mounted = part => ({ ...part, attachment: {
  hostPartId: 'breadboard',
  contacts: mountingFor(part.componentId).contacts.map(({ pinId }, index) => ({ pinId, hostPinId: `a${index + 1}` })),
} });

test('Inspector explains reviewed headers and keeps auxiliary contacts separate from insertion', () => {
  const markup = inspectPart(nano, 'part');
  assert.match(markup, /class="control-note" role="status" data-mounting-status/);
  assert.match(markup, /Requires straight 2\.54 mm male headers\. Drag onto a breadboard and release when its contacts are highlighted\./);
  assert.match(markup, /auxiliary sockets, solder pads and programming contacts remain separate/);
  assert.doesNotMatch(markup, /Seated on breadboard/);
  for (const componentId of ['battery', 'breadboard']) {
    assert.doesNotMatch(inspectPart({ ...nano, componentId }, 'part'), /data-mounting-status|Requires straight/);
  }
});

test('Inspector reports only explicit seated header contacts and keeps native previews at catalog geometry', () => {
  const part = mounted(nano);
  const markup = inspectPart(part, 'part');
  assert.match(markup, /Seated on breadboard · 30 contacts connected\. Drag the module away to disconnect\./);
  assert.doesNotMatch(markup, /Requires straight 2\.54/);
  for (const tab of ['symbol', 'pcb', 'model']) {
    assert.equal(inspectPart({ ...part, scale: { x: 1.5, y: .7 } }, tab), inspectPart(nano, tab));
    assert.doesNotMatch(inspectPart(part, tab), /data-mounting-status/);
  }
});

test('Inspector cache refreshes on mount and detach without requiring a rotation or selection change', () => {
  class Inspection extends EventTarget {
    writes = 0;
    scrollTop = 0;
    label = {};
    contains() { return false; }
    set innerHTML(value) { this.markup = value; this.writes++; }
    querySelector(selector) { return selector === '#part-label' ? this.label : null; }
  }
  const inspection = new Inspection();
  let imageCleared = 0;
  const elements = new Map([
    ['#asset-dialog', { open: false }],
    ['#asset-image', { replaceChildren() { imageCleared++; } }],
    ['#asset-title', {}],
  ]);
  const root = { activeElement: null, querySelector: selector => elements.get(selector) };
  const editor = { part: nano, selections: [{ type: 'part', id: nano.id }] };
  const controller = bindInspector({ inspection, editor, root,
    notify() {}, focusCanvas() {}, autoRouteWire() {},
  });
  controller.render();
  assert.equal(inspection.writes, 1);
  assert.match(inspection.markup, /Requires straight 2\.54/);
  editor.part = { ...nano, x: 30 };
  controller.render();
  assert.equal(inspection.writes, 1, 'ordinary movement keeps the Inspector view and its input state');
  editor.part = mounted(editor.part);
  controller.render();
  assert.equal(inspection.writes, 2);
  assert.match(inspection.markup, /Seated on breadboard · 30 contacts connected/);
  editor.part = { ...editor.part, x: 50, attachment: { ...editor.part.attachment, hostPartId: 'other-board' } };
  controller.render();
  assert.equal(inspection.writes, 3, 'a changed host invalidates the cached attachment state');
  const { attachment, ...detached } = editor.part;
  editor.part = detached;
  controller.render();
  assert.equal(inspection.writes, 4);
  assert.match(inspection.markup, /Requires straight 2\.54/);
  assert.doesNotMatch(inspection.markup, /Seated on breadboard/);
  controller.destroy();
  controller.destroy();
  assert.equal(imageCleared, 1);
});
