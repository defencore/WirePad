import assert from 'node:assert/strict';
import { test } from 'node:test';

import { CanvasControls } from '../src/canvas/controls.js';
import { drawingMarkup } from '../src/canvas/markup.js';
import { bindCanvas } from '../src/canvas/input.js';
import { componentForPart } from '../src/model/part-component.js';

function attributes(node = {}) {
  return Object.assign(node, {
    attributes: new Map(),
    setAttribute(name, value) { this.attributes.set(name, String(value)); },
  });
}

test('orientation controls remain upright, fixed size, and in the viewport after zoom and rotation', () => {
  const part = { id: 'sensor', componentId: 'bme280', x: 0, y: 0, rotation: 0 };
  const component = componentForPart(part);
  const buttons = [0, 90, 180, 270].map(angle => attributes({ dataset: { partRotation: String(angle) } }));
  const panel = attributes({ dataset: {}, querySelectorAll: () => buttons });
  const canvas = {
    svg: { clientWidth: 800, clientHeight: 600, dataset: { input: 'pointer' } },
    center: { x: component.width / 2, y: component.height / 2 },
    selection: { type: 'part', id: part.id },
    selections: [{ type: 'part', id: part.id }],
    geometry: { parts: new Map([[part.id, { part }]]) },
  };
  const controls = Object.assign(Object.create(CanvasControls.prototype), {
    svg: canvas.svg, coarsePointer: { matches: false }, rotationNode: panel, leadNode: attributes(),
    partEnabled: true, getState: () => canvas,
  });

  for (const [input, width, height, hitSize] of [['pointer', 136, 34, 28], ['touch', 200, 56, 44]]) {
    canvas.svg.dataset.input = input;
    for (const scale of [.01, .1, 1, 4]) {
      canvas.scale = scale;
      for (const rotation of [0, 90, 180, 270]) {
        part.rotation = rotation;
        controls.updateParts();
        assert.ok(panel.innerHTML.includes(`width="${width}" height="${height}"`));
        assert.ok(panel.innerHTML.includes(`height="${hitSize}"`));
        const transform = panel.attributes.get('transform');
        assert.ok(!transform.includes('rotate'));
        const [, x, y, inverse] = transform.match(/^translate\(([^ ]+) ([^)]+)\) scale\(([^)]+)\)$/).map(Number);
        assert.equal(inverse * scale, 1);
        const screenX = 400 + (x - canvas.center.x) * scale;
        const screenY = 300 + (y - canvas.center.y) * scale;
        assert.ok(screenX >= 8 - 1e-8 && screenX + width <= 792 + 1e-8);
        assert.ok(screenY >= 8 - 1e-8 && screenY + height <= 592 + 1e-8);
        assert.deepEqual(buttons.map(button => button.attributes.get('aria-pressed')),
          [0, 90, 180, 270].map(angle => String(angle === rotation)));
      }
    }
  }
  canvas.selections.push({ type: 'part', id: 'other' });
  controls.updateParts();
  assert.equal(panel.attributes.get('display'), 'none');
  assert.ok(buttons.every(button => button.attributes.get('tabindex') === '-1'));
  controls.setPartEnabled(false);
  assert.equal(panel.attributes.get('display'), 'none');
  assert.ok(buttons.every(button => button.attributes.get('tabindex') === '-1'));
});

test('orientation controls activate once with pointer, touch, Enter and Space without canvas gestures', t => {
  const originalDocument = globalThis.document;
  const originalWindow = globalThis.window;
  t.after(() => {
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
  });
  const listeners = new Map();
  const captures = new Set();
  const svg = {
    addEventListener(name, callback) {
      if (!listeners.has(name)) listeners.set(name, []);
      listeners.get(name).push(callback);
    },
    setPointerCapture(id) { captures.add(id); },
    hasPointerCapture(id) { return captures.has(id); },
    releasePointerCapture(id) { captures.delete(id); },
  };
  const panel = { dataset: { rotationPart: 'selected' } };
  const buttons = [0, 90, 180, 270].map(angle => ({
    dataset: { partRotation: String(angle) },
    closest(selector) { return selector === '.part-rotation-controls' ? panel : this; },
    focus() { globalThis.document.activeElement = this; },
    parentElement: panel,
  }));
  panel.querySelectorAll = () => buttons;
  let underPointer = buttons[1];
  globalThis.document = { addEventListener() {}, elementFromPoint: () => underPointer };
  globalThis.window = { addEventListener() {} };
  svg.ownerDocument = globalThis.document;
  globalThis.document.defaultView = globalThis.window;
  const angles = [];
  const editor = {
    mode: 'select', pending: null, part: { id: 'selected' },
    rotatePart(angle) { angles.push(angle); },
  };
  const controls = bindCanvas({ canvas: {}, svg, editor });
  function dispatch(type, properties = {}) {
    const event = {
      type, target: underPointer, button: 0, pointerId: 1, pointerType: 'mouse', clientX: 40, clientY: 40,
      preventDefault() { this.defaultPrevented = true; },
      stopPropagation() { this.stopped = true; },
      ...properties,
    };
    for (const callback of listeners.get(type) ?? []) callback(event);
    return event;
  }

  assert.ok(dispatch('pointerdown').defaultPrevented);
  assert.equal(controls.gesturing, true);
  dispatch('pointerup');
  dispatch('click', { detail: 1 });
  assert.deepEqual(angles, [90]);
  assert.equal(controls.gesturing, false);

  underPointer = buttons[2];
  dispatch('pointerdown', { pointerType: 'touch' });
  dispatch('pointerup', { pointerType: 'touch' });
  dispatch('click', { detail: 1 });
  assert.deepEqual(angles, [90, 180]);

  underPointer = buttons[3];
  dispatch('keydown', { key: 'Enter' });
  dispatch('keydown', { key: 'Enter', repeat: true });
  assert.deepEqual(angles, [90, 180, 270]);
  underPointer = buttons[0];
  assert.ok(dispatch('keydown', { key: ' ' }).stopped);
  assert.deepEqual(angles, [90, 180, 270]);
  assert.ok(dispatch('keyup', { key: ' ' }).defaultPrevented);
  assert.deepEqual(angles, [90, 180, 270, 0]);
  dispatch('keydown', { key: 'ArrowRight' });
  assert.equal(globalThis.document.activeElement, buttons[1]);

  dispatch('pointerdown', { pointerType: 'touch' });
  dispatch('pointercancel', { pointerType: 'touch' });
  assert.equal(controls.gesturing, false);
  assert.deepEqual(angles, [90, 180, 270, 0]);
  dispatch('pointerdown');
  editor.part = { id: 'other' };
  panel.dataset.rotationPart = 'other';
  dispatch('pointerup');
  assert.deepEqual(angles, [90, 180, 270, 0]);
  editor.pending = { from: { partId: 'selected', pinId: 'scl' } };
  dispatch('click', { detail: 0 });
  assert.deepEqual(angles, [90, 180, 270, 0]);
});

test('image markup resolves each breadboard configuration and keeps surface wiring visible', () => {
  const small = { id: 'small', componentId: 'breadboard', x: 0, y: 0, breadboard: { rows: 5, leftRails: 0, rightRails: 0 } };
  const large = { ...small, id: 'large', x: 700, rotation: 90, breadboard: { rows: 40, leftRails: 3, rightRails: 1 } };
  const first = componentForPart(small);
  const second = componentForPart(large);
  assert.notEqual(first.height, second.height);
  const project = {
    version: 1, title: 'Configured breadboards', parts: [small, large],
    wires: [{ id: 'jumper', from: { partId: 'small', pinId: 'a1' }, to: { partId: 'large', pinId: 'a1' }, color: '#123456' }],
  };
  const markup = drawingMarkup(project);
  assert.ok(markup.includes(`rotate(90 ${second.width / 2} ${second.height / 2})`));
  assert.ok(markup.indexOf(`width="${first.width}"`) < markup.indexOf('stroke="#123456"'));
  assert.ok(markup.lastIndexOf('fill="#087a6f"') > markup.indexOf('stroke="#123456"'));
  assert.ok(!markup.includes('part-rotation-controls'));
  assert.ok(!markup.includes('part-rotation-button'));
});

test('modules remain above surface contacts when a breadboard is added afterward', () => {
  const module = { id: 'module', componentId: 'bme280', label: 'MODULE FOREGROUND', x: 40, y: 40 };
  const board = { id: 'board', componentId: 'breadboard', label: 'BOARD SURFACE', x: 0, y: 0 };
  const parts = [module, board];
  const markup = drawingMarkup({ version: 1, title: 'Layer order', parts, wires: [] });
  assert.ok(markup.indexOf('BOARD SURFACE') < markup.indexOf('MODULE FOREGROUND'));
  assert.deepEqual(parts.map(part => part.id), ['module', 'board']);
});
