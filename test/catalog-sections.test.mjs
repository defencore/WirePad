import assert from 'node:assert/strict';
import { test } from 'node:test';
import { specificationSections } from '../src/catalog/shared/specification-sections.js';

test('specification sections retain the canonical order and original records', () => {
  const a = { id: 'a', source: 'source-a' }, b = { id: 'b' }, c = { id: 'c' };
  const result = specificationSections('example', [[b], [a, c]], ['a', 'b', 'c']);
  assert.deepEqual(result, [a, b, c]);
  assert.equal(result[0], a);
  assert.equal(result[1], b);
});

test('specification manifests reject duplicate, missing and orphaned identities', () => {
  const a = { id: 'a' }, b = { id: 'b' };
  assert.throws(() => specificationSections('example', [[a], [a]], ['a']), /repeats component "a"/);
  assert.throws(() => specificationSections('example', [[a]], ['a', 'a']), /repeats ordered component "a"/);
  assert.throws(() => specificationSections('example', [[a]], ['a', 'b']), /no specification for "b"/);
  assert.throws(() => specificationSections('example', [[a, b]], ['a']), /does not order component "b"/);
});

test('specification manifests reject incomplete source groups', () => {
  assert.throws(() => specificationSections('example', [[]], ['a']), /empty section/);
  assert.throws(() => specificationSections('example', [[{}]], ['a']), /missing component ID/);
  assert.throws(() => specificationSections('example', [], []), /needs a family/);
});
