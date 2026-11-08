import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import { componentArt, componentById, mountingFor } from '../src/catalog/index.js';
import { remainingMarketReviews } from '../src/catalog/shared/remaining-market-mounting.js';
import { kicadFootprint, kicadModel, kicadSymbol } from '../src/assets/kicad.js';
import { partArt } from '../src/canvas/part-art.js';
import { DiagramEditor } from '../src/editor/editor.js';
import { pointOnPart } from '../src/geometry/parts.js';
import { traceNet } from '../src/model/continuity.js';
import { endpointKey } from '../src/model/endpoints.js';
import { ProjectHistory } from '../src/model/history.js';
import { attachmentError, mountingTolerance } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { instancePins, leadShapeError } from '../src/model/part-pins.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';

const audit = JSON.parse(await readFile(new URL('../docs/catalog-remaining-market-mounting-2026-11-08.json', import.meta.url)));
const ids = Object.keys(remainingMarketReviews);
const hash = text => createHash('sha256').update(text).digest('hex');
const close = (a, b, tolerance = 1e-7) => assert.ok(Math.abs(a - b) <= tolerance, `${a} != ${b}`);

function seat(id, rotation = 0) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation,
    scale: { x: 1.2, y: .8 }, breadboard: { rows: 40, leftCells: 10, rightCells: 10 } };
  const editor = new DiagramEditor(new ProjectHistory({ ...newProject(), parts: [host] }), () => {}, message => assert.fail(message));
  const point = editor.suggestPlacement(id, host.id);
  assert.ok(point, `${id}/${rotation}`);
  const part = editor.addPart(id, point, { mount: true, hostPartId: host.id });
  return { editor, host, part };
}

test('all 189 previously unaudited market entries have exact package decisions and evidence scope', () => {
  assert.equal(audit.entries.length, 189);
  assert.equal(new Set(audit.entries.map(entry => entry.id)).size, 189);
  assert.equal(audit.summary.entries, 189);
  assert.equal(audit.summary.enabled, 8);
  assert.deepEqual(audit.entries.filter(entry => entry.status.startsWith('enabled')).map(entry => entry.id).sort(), ids.toSorted());
  for (const entry of audit.entries) {
    assert.ok(componentById.has(entry.id), entry.id);
    assert.ok(entry.part && entry.package && entry.family.startsWith('market-'), entry.id);
    assert.ok(entry.reason.length > 60 && entry.sourceReviewScope.length > 30, entry.id);
    assert.ok(entry.evidence.length && entry.evidence.every(source => /^https:\/\//.test(source.url) && source.label), entry.id);
    assert.equal(Boolean(mountingFor(entry.id)), entry.status.startsWith('enabled'), entry.id);
    assert.match(entry.retrieval.status, /manufacturer-pdf|catalog-source-identity-reviewed/);
  }
  assert.equal(audit.summary.statuses['requires-smd-adapter'], 149);
  assert.match(audit.entries.find(entry => entry.id === 'market-kbp206g').reason, /3\.56–4\.06/);
  assert.match(audit.entries.find(entry => entry.id === 'market-w10g-e4-51').reason, /bottom view/);
});

test('new source assembly metadata preserves old definitions, anchors, both SVG variants and every native asset', () => {
  for (const [id, expected] of Object.entries(audit.canonicalPreservation)) {
    const component = componentById.get(id);
    assert.equal(hash(JSON.stringify(component)), expected.definition, id);
    assert.deepEqual([true, false].map(labels => hash(componentArt(component, { labels }))), expected.art, id);
    assert.deepEqual([kicadSymbol, kicadFootprint, kicadModel].map(render => hash(render(component))), expected.native, id);
    for (const scale of [undefined, { x: .8, y: .8 }]) {
      const raw = { id: 'old', componentId: id, x: 25, y: 30, ...(scale ? { scale } : {}) };
      assert.equal(instancePins(raw, component), component.pins);
      assert.equal(partArt(raw, component), componentArt(component));
      assert.deepEqual(parseProject(serializeProject({ ...newProject(), parts: [raw] })).parts, [raw]);
    }
  }
});

test('every native terminal fits through transformed hosts, continuity, save, detachment and undo', () => {
  let contacts = 0;
  for (const id of ids) for (const rotation of [0, 90, 180, 270]) {
    const { editor, host, part } = seat(id, rotation), profile = mountingFor(id), component = componentById.get(id);
    assert.equal(attachmentError(editor.project, part), null, `${id}/${rotation}`);
    assert.equal(part.attachment.contacts.length, component.pins.length);
    const leads = instancePins(part, component), holes = componentForPart(host).pins;
    for (const { pinId, hostPinId } of part.attachment.contacts) {
      const lead = pointOnPart(part, leads.find(pin => pin.id === pinId)), hole = pointOnPart(host, holes.find(pin => pin.id === hostPinId));
      close(lead.x, hole.x, mountingTolerance(part, host)); close(lead.y, hole.y, mountingTolerance(part, host));
      assert.ok(traceNet(editor.project, { partId: part.id, pinId }).endpoints.has(endpointKey({ partId: host.id, pinId: hostPinId })));
      contacts++;
    }
    assert.deepEqual(parseProject(serializeProject(editor.project)), editor.project);
    editor.commit(editor.placementProject(part.id, { x: 3500, y: 2200 }));
    assert.equal(editor.project.parts[1].attachment, undefined);
    editor.step('undo'); assert.deepEqual(editor.project.parts[1], part);
    editor.step('redo'); assert.equal(editor.project.parts[1].attachment, undefined);
    assert.equal(profile.type, 'breadboard-part');
  }
  assert.equal(contacts, 112);
});

test('the formed InterFET view mirrors the old bottom view without swapping saved electrical endpoints', () => {
  const component = componentById.get('market-j175'), profile = mountingFor(component.id);
  assert.deepEqual(component.pins.map(pin => [pin.id, pin.number, pin.label]), [['p1', '3', 'D'], ['p2', '2', 'G'], ['p3', '1', 'S']]);
  const { part } = seat(component.id), pins = instancePins(part, component);
  const left = pins.toSorted((a, b) => a.x - b.x);
  assert.deepEqual(left.map(pin => pin.label), ['S', 'G', 'D']);
  assert.ok(profile.roots.find(pin => pin.pinId === 'p3').x < profile.roots.find(pin => pin.pinId === 'p1').x);
  assert.deepEqual(component.pins.map(pin => pin.x), [76, 76, 76]);
  const bt = componentById.get('market-bt169d-116');
  assert.deepEqual(bt.pins.map(pin => [pin.number, pin.label]), [['3', 'K'], ['2', 'G'], ['1', 'A']]);
});

test('forming one tip preserves the other seated terminals and clamps physical reach while body artwork stays fixed', () => {
  for (const id of ids.filter(id => mountingFor(id).mode === 'bendable')) {
    const { editor, part } = seat(id), component = componentById.get(id), profile = mountingFor(id);
    const lifted = part.attachment.contacts[0];
    const next = editor.leadProject(part.id, lifted.pinId, { x: -5000, y: 5000 });
    const changed = next.parts.find(item => item.id === part.id);
    assert.equal(leadShapeError(changed, component), null, id);
    assert.equal(changed.attachment.contacts.length, component.pins.length - 1);
    assert.equal(changed.attachment.contacts.some(contact => contact.pinId === lifted.pinId), false);
    const before = profile.render(component, part.leads, false), after = profile.render(component, changed.leads, false);
    assert.notEqual(after, before);
    assert.equal(after.slice(after.lastIndexOf('</g>') + 4), before.slice(before.lastIndexOf('</g>') + 4), id);
    assert.deepEqual(parseProject(serializeProject(next)), next);
    for (const labels of [false, true]) {
      const art = partArt(changed, component, { labels });
      assert.doesNotMatch(art, /NaN|Infinity|undefined|>104</);
      assert.equal((art.match(/data-contact=/g) ?? []).length, component.pins.length);
    }
  }
});

test('OPT101 includes both NC leads and BPW34 retains the real optical package and limited lead reach', () => {
  const opt = mountingFor('opt101p-ic'), component = componentById.get('opt101p-ic');
  assert.equal(opt.contacts.length, 8);
  assert.equal(opt.mode, 'rigid');
  assert.equal(opt.view.id, 'breadboard');
  assert.equal(opt.view.pins.length, 8);
  const mounted = seat('opt101p-ic').part;
  const mountedArt = partArt(mounted, component);
  for (const pin of component.pins) assert.ok(mountedArt.includes(`data-contact-label="${pin.id}"`));
  assert.doesNotMatch(mountedArt, /TRANSPARENT OPTICAL TOP VIEW/);
  const pairs = new Map(opt.contacts.map(pin => [pin.pinId, pin]));
  close(pairs.get('p5').x - pairs.get('p4').x, 7.62);
  close(pairs.get('p4').y - pairs.get('p1').y, 7.62);
  assert.deepEqual(component.pins.filter(pin => pin.type === 'no_connect').map(pin => pin.id), ['p6', 'p7']);
  const photo = mountingFor('market-bpw34'), { part } = seat('market-bpw34');
  assert.equal(photo.maxLeadMm, 1);
  const art = partArt(part, componentById.get('market-bpw34'));
  assert.match(art, /BPW34/);
  assert.match(art, /#312a28/);
  assert.doesNotMatch(art, />104</);
});
