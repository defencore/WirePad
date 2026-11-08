import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { components, mountingFor } from '../src/catalog/index.js';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { auditEntries, breadboardAuditSources, buildBreadboardAuditIndex, renderBreadboardAuditOverview, syncBreadboardAudit } from '../scripts/breadboard-audit.mjs';

const parts = [{ id: 'host', name: 'Host' }, { id: 'part', name: 'Guest' }];
const families = [{ id: 'fixture', entries: parts.map(component => ({ component })) }];
const source = entry => ({ filename: 'fixture.json', document: { entries: [entry] } });
const profile = enabled => id => id === 'host' ? { type: 'breadboard' } : enabled ? { type: 'breadboard-part' } : undefined;

test('new guest IDs cannot be published without an individual source decision', () => {
  assert.throws(() => buildBreadboardAuditIndex(parts, families, [], profile(false)), /Missing individual breadboard audit for part/);
  const index = buildBreadboardAuditIndex(parts, families,
    [source({ id: 'part', status: 'pending-exact-variant', reason: 'No source-identified physical variant.' })], profile(false));
  assert.deepEqual(index.summary, { components: 2, hosts: 1, individuallyRecorded: 1, insertable: 0, recordedWithoutProfile: 1, pending: 1, missing: 0 });
  assert.equal(index.entries[1].insertable, false);
  assert.match(renderBreadboardAuditOverview(index), /open evidence gap|remain unresolved/);
});

test('coverage rejects invented IDs, duplicate records, missing evidence and contradictory support', () => {
  const supported = { id: 'part', status: 'enabled-reviewed', reason: 'Complete source-supported insertion bank.' };
  assert.throws(() => buildBreadboardAuditIndex(parts, families, [source({ ...supported, id: 'unknown' })], profile(true)), /unknown component/);
  assert.throws(() => buildBreadboardAuditIndex(parts, families,
    [{ filename: 'duplicate.json', document: { entries: [supported, supported] } }], profile(true)), /repeated component/);
  assert.throws(() => buildBreadboardAuditIndex(parts, families, [source({ id: 'part', status: 'pending' })], profile(false)), /missing decision evidence/);
  assert.throws(() => buildBreadboardAuditIndex(parts, families, [source(supported)], profile(false)), /profile and source decision disagree/);
  assert.throws(() => buildBreadboardAuditIndex(parts, families,
    [source({ ...supported, status: 'requires-adapter' })], profile(true)), /profile and source decision disagree/);
});

test('later source reviews explicitly replace earlier decisions without losing family identity', () => {
  const old = source({ id: 'part', status: 'pending-dimensions', reason: 'Exact drawing was missing.' });
  const next = { filename: 'followup.json', document: { families: [{ entries: [
    { id: 'part', status: 'enabled-reviewed', reason: 'Exact matched revision supplies the complete downward lead map.' },
  ] }] } };
  const index = buildBreadboardAuditIndex(parts, families, [old, next], profile(true));
  assert.equal(index.entries[1].audit, 'docs/followup.json');
  assert.equal(index.entries[1].family, 'fixture');
  assert.equal(index.summary.pending, 0);
  assert.equal(index.summary.insertable, 1);
  assert.throws(() => auditEntries({ profiles: [] }), /must list per-component entries/);
});

test('every live catalog ID has a current individual decision and all generated audit documents are fresh', async () => {
  assert.equal(new Set(breadboardAuditSources).size, breadboardAuditSources.length);
  const sources = await Promise.all(breadboardAuditSources.map(async filename => ({ filename,
    document: JSON.parse(await readFile(new URL(`../docs/${filename}`, import.meta.url))) })));
  const index = buildBreadboardAuditIndex(components, catalogFamilies, sources, mountingFor);
  assert.equal(index.summary.components, components.length);
  assert.equal(index.summary.individuallyRecorded + index.summary.hosts, components.length);
  assert.equal(index.summary.missing, 0);
  assert.equal(index.summary.insertable, components.filter(part => ['breadboard-module', 'breadboard-part'].includes(mountingFor(part.id)?.type)).length);
  assert.equal((await syncBreadboardAudit({ check: true })).changed, false);
});
