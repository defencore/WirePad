import assert from 'node:assert/strict';
import { test } from 'node:test';
import { componentById } from '../src/catalog/index.js';
import { footprintPreview } from '../src/assets/previews.js';
import { kicadFootprint } from '../src/assets/kicad.js';

function copperFor(component, number) {
  const preview = footprintPreview(component);
  const heading = `<title>Pad ${number}</title>`;
  const start = preview.indexOf(heading);
  assert.ok(start >= 0, `Pad ${number} is present in the preview`);
  return preview.slice(start + heading.length).match(/^<g[^>]*>(<[^>]+\/>)/)?.[1];
}

test('footprint previews use capsule geometry for vertical and horizontal KiCad oval pads', () => {
  for (const { id, number, width, height, radius } of [
    { id: 'jst-ph-2', number: '2', width: 1.2, height: 1.75, radius: 0.6 },
    { id: 'simcom-sim800c', number: '1', width: 1.6, height: 0.6, radius: 0.3 },
  ]) {
    const component = componentById.get(id);
    assert.match(kicadFootprint(component), new RegExp(`\\(pad "${number}" (?:smd|thru_hole) oval `));
    const copper = copperFor(component, number);
    assert.match(copper, /^<rect\b/, `${id} has straight capsule sides rather than an ellipse`);
    assert.match(copper, new RegExp(`width="${width}" height="${height}" rx="${radius}"`));
  }
});

test('the first square connector pad remains rectangular in the preview', () => {
  const component = componentById.get('jst-ph-2');
  assert.match(kicadFootprint(component), /\(pad "1" thru_hole rect /);
  assert.match(copperFor(component, '1'), /^<rect\b[^>]+rx="0\.08"/);
});
