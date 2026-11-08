import assert from 'node:assert/strict';
import { test } from 'node:test';
import { canvasTargets } from '../src/canvas/targets.js';

test('overlapping hit areas on dense headers resolve to the nearest physical contact instead of SVG stacking order', () => {
  const node = (part, pin) => ({ dataset: { part, pin }, closest(selector) { return selector.includes('.canvas-pin') ? this : null; } });
  const first = node('board', '1'), last = node('board', '2');
  const svg = {
    ownerDocument: { elementsFromPoint: () => [last, first] },
    contains: target => [first, last].includes(target),
  };
  for (const scale of [.25, 1, 4]) {
    const canvas = {
      point: (x, y) => ({ x: (x - 80) / scale, y: (y - 40) / scale }),
      position: ({ pinId }) => ({ x: pinId === '1' ? 20 : 28.6, y: 10 }),
    };
    const targets = canvasTargets(canvas, svg);
    for (const [x, id] of [[20.5, '1'], [27, '2']]) {
      const hit = targets.hitAt({ target: last, clientX: 80 + x * scale, clientY: 40 + 10 * scale });
      assert.deepEqual(targets.anchorAt(hit), { partId: 'board', pinId: id });
    }
  }
});
