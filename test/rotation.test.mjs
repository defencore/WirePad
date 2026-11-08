import assert from 'node:assert/strict';
import { test } from 'node:test';
import { drawingMarkup } from '../src/canvas/markup.js';
import { componentForPart } from '../src/model/part-component.js';

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
