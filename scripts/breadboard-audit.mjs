#!/usr/bin/env node
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { components, mountingFor } from '../src/catalog/index.js';
import { catalogFamilies } from '../src/catalog/catalog-families.js';

// Later source reviews supersede earlier decisions for the same published ID.
export const breadboardAuditSources = [
  'catalog-source-module-mounting-2026-11-08.json',
  'catalog-popular-board-mounting-2026-11-08.json',
  'catalog-radio-diy-mounting-2026-11-08.json',
  'catalog-mini-computing-mounting-2026-11-08.json',
  'catalog-legacy-module-mounting-followup-2026-11-08.json',
  'catalog-measurement-sensors-mounting-2026-11-08.json',
  'catalog-breadboard-parts-2026-11-08.json',
  'catalog-heltec-mounting-2026-11-08.json',
  'catalog-remaining-core-connectors-mounting-2026-11-08.json',
  'catalog-remaining-market-mounting-2026-11-08.json',
  'catalog-remaining-computing-mounting-2026-11-08.json',
  'catalog-remaining-wireless-mounting-2026-11-08.json',
];
const docs = new URL('../docs/', import.meta.url);
const indexPath = new URL('catalog-breadboard-audit-index.json', docs);
const overviewPath = new URL('BREADBOARD_AUDIT.md', docs);
const enabledStatus = status => /^(?:enabled(?:-|$)|supported$|existing-reviewed$|rigid$|bendable$)/.test(status);
const pendingStatus = status => /pending|deferred|source-review-required|outside-rigid-module-review|requires-formed-leads/.test(status);
const text = value => String(value ?? '').replace(/\s+/g, ' ').replaceAll('|', '\\|').trim();

export function auditEntries(document) {
  if (Array.isArray(document.entries)) return document.entries;
  if (Array.isArray(document.families)) return document.families.flatMap(family => family.entries ?? []);
  throw new Error('A breadboard source audit must list per-component entries.');
}

export function buildBreadboardAuditIndex(parts, families, sources, profileFor) {
  const known = new Map(parts.map(part => [part.id, part])), decisions = new Map();
  const familyById = new Map(families.flatMap(family => family.entries.map(entry => [entry.component.id, family.id])));
  for (const { filename, document } of sources) {
    const seen = new Set();
    for (const entry of auditEntries(document)) {
      if (!known.has(entry.id)) throw new Error(`${filename}: unknown component ${entry.id}.`);
      if (seen.has(entry.id)) throw new Error(`${filename}: repeated component ${entry.id}.`);
      seen.add(entry.id);
      const status = entry.status ?? entry.mode ?? entry.decision;
      if (typeof status !== 'string' || !status.trim()) throw new Error(`${filename}: missing decision for ${entry.id}.`);
      const reason = entry.reason ?? entry.note ?? entry.headerGeometryEvidence?.geometry ?? entry.bodyGeometryEvidence ??
        (entry.status ? entry.decision : undefined) ?? profileFor(entry.id)?.note;
      if (typeof reason !== 'string' || !reason.trim()) throw new Error(`${filename}: missing decision evidence for ${entry.id}.`);
      decisions.set(entry.id, { status, audit: `docs/${filename}`, reason: text(reason) });
    }
  }
  const entries = parts.map(part => {
    const profile = profileFor(part.id), decision = decisions.get(part.id);
    const family = familyById.get(part.id);
    if (!family) throw new Error(`Missing catalog family for ${part.id}.`);
    if (profile?.type === 'breadboard') return { id: part.id, family, name: part.name, status: 'host', insertable: false,
      audit: 'src/catalog/families/catalog-breadboard.js', reason: 'Configurable solderless host; its holes and conductor topology are validated separately from guest insertion profiles.' };
    if (!decision) throw new Error(`Missing individual breadboard audit for ${part.id}. Add source evidence and register its audit before catalog regeneration.`);
    const insertable = Boolean(profile);
    if (insertable !== enabledStatus(decision.status)) throw new Error(`Breadboard profile and source decision disagree for ${part.id}: ${decision.status}.`);
    return { id: part.id, family, name: part.name, ...decision, insertable };
  });
  return { schemaVersion: 1, scope: 'Complete per-ID decision coverage. A pending decision is an open evidence gap, not verified manufacturer mechanics.',
    summary: { components: entries.length, hosts: entries.filter(entry => entry.status === 'host').length,
      individuallyRecorded: entries.filter(entry => entry.status !== 'host').length,
      insertable: entries.filter(entry => entry.insertable).length,
      recordedWithoutProfile: entries.filter(entry => entry.status !== 'host' && !entry.insertable).length,
      pending: entries.filter(entry => !entry.insertable && pendingStatus(entry.status)).length,
      missing: 0 }, sources: sources.map(source => `docs/${source.filename}`), entries };
}

export function renderBreadboardAuditOverview(index) {
  const groups = new Map();
  for (const entry of index.entries) {
    if (!groups.has(entry.family)) groups.set(entry.family, []);
    groups.get(entry.family).push(entry);
  }
  const pending = index.entries.filter(entry => !entry.insertable && pendingStatus(entry.status));
  return [
    '# Breadboard source-audit coverage', '',
    'Generated from the registered catalog and explicit per-component source reviews. Do not edit this file by hand.', '',
    `**${index.summary.components} catalog entries · ${index.summary.individuallyRecorded} recorded guest decisions · ${index.summary.hosts} host · ${index.summary.missing} missing records.**`, '',
    `There are **${index.summary.insertable} insertable components** and **${index.summary.recordedWithoutProfile} recorded entries without a direct insertion profile**. Of the latter, **${index.summary.pending} have an explicitly pending primary decision**. Counts follow the latest main eligibility decision; linked audits can also describe unreviewed auxiliary-header variants of an adapter-only factory assembly. A recorded decision is not a certification: pending identity, dimensions, contact completeness or assembly clearance remain unresolved. An excluded factory assembly may still work through a suitable adapter.`, '',
    'The [complete per-ID index](catalog-breadboard-audit-index.json) links each current decision to its owning source audit and preserves its reason. The [component tree](COMPONENTS.md) separately shows insertion and KiCad accuracy marks. Automated fitting, label and file-format checks do not replace manufacturer mechanical evidence; insertion support does not upgrade native footprint or generated 3D accuracy.', '',
    '## Source-family coverage', '',
    '| Source family | Entries | Insertable | Pending primary decision |', '| --- | ---: | ---: | ---: |',
    ...[...groups].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0).map(([family, entries]) =>
      `| ${family} | ${entries.length} | ${entries.filter(entry => entry.insertable).length} | ${entries.filter(entry => !entry.insertable && pendingStatus(entry.status)).length} |`), '',
    '## Open source or assembly decisions', '',
    '| Component | Status | Latest source review | Reason |', '| --- | --- | --- | --- |',
    ...pending.map(entry => `| ${text(entry.name)} (${entry.id}) | ${entry.status} | [Audit](${entry.audit.replace(/^docs\//, '')}) | ${text(entry.reason)} |`), '',
    '## Maintenance', '',
    'Every new guest ID needs an explicit entry in a registered source audit, including a precise pending reason when evidence is incomplete. Register new audit files in `scripts/breadboard-audit.mjs`; later files supersede earlier decisions for the same stable ID. Do not mark unresolved geometry as supported to satisfy coverage.', '',
    '`node scripts/catalog.mjs` validates coverage and refreshes this overview, the per-ID index and the component tree. `node scripts/catalog.mjs --json` and `node scripts/breadboard-audit.mjs --check` reject missing, contradictory or stale records without writing.', '',
  ].join('\n');
}

async function sync(contents, filename, check) {
  let current;
  try { current = await readFile(filename, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (current === contents) return false;
  if (check) throw new Error(`Breadboard audit index is stale or missing: ${fileURLToPath(filename)}. Run node scripts/catalog.mjs.`);
  await mkdir(dirname(fileURLToPath(filename)), { recursive: true });
  await writeFile(filename, contents);
  return true;
}

export async function syncBreadboardAudit({ check = false } = {}) {
  const sources = await Promise.all(breadboardAuditSources.map(async filename => ({ filename,
    document: JSON.parse(await readFile(new URL(filename, docs), 'utf8')) })));
  const index = buildBreadboardAuditIndex(components, catalogFamilies, sources, mountingFor);
  const indexChanged = await sync(JSON.stringify(index, null, 2) + '\n', indexPath, check);
  const overviewChanged = await sync(renderBreadboardAuditOverview(index), overviewPath, check);
  return { ...index.summary, changed: indexChanged || overviewChanged };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args = process.argv.slice(2);
    if (args.some(arg => arg !== '--check')) throw new Error('Usage: node scripts/breadboard-audit.mjs [--check]');
    console.log(JSON.stringify(await syncBreadboardAudit({ check: args.includes('--check') }), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
