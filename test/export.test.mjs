import assert from 'node:assert/strict';
import { test } from 'node:test';

import { createDrawingSVG } from '../src/export.js';

test('PNG sources keep the full viewBox within the bitmap dimension limits', () => {
  const drawing = (width, height) => createDrawingSVG({
    bounds: { x: -1_000_000, y: -1_000_000, width, height }, padding: 0,
  });

  const square = drawing(2_000_000, 2_000_000);
  assert.deepEqual([square.width, square.height], [2_000_000, 2_000_000]);
  assert.match(square.svg, /width="2000000" height="2000000" viewBox="-1000000 -1000000 2000000 2000000"/);
  const raster = square.raster();
  assert.deepEqual([raster.width, raster.height], [4000, 4000]);
  assert.match(raster.svg, /width="4000" height="4000" viewBox="-1000000 -1000000 2000000 2000000"/);

  const narrow = drawing(2_000_000, 60).raster();
  assert.deepEqual([narrow.width, narrow.height], [8192, 1]);
  assert.match(narrow.svg, /preserveAspectRatio="none"/);
});

test('export escapes imported title text while keeping well-formed Unicode', () => {
  const drawing = createDrawingSVG({
    title: `A<&>"'😀\ud800\u0002\uffff`,
    bounds: { x: 0, y: 0, width: 20, height: 20 },
    background: null,
  });
  assert.ok(drawing.svg.includes('<title>A&lt;&amp;&gt;&quot;&#39;😀</title>'));
});
