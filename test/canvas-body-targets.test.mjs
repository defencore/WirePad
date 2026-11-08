import assert from 'node:assert/strict';
import { test } from 'node:test';

import { componentById, mountingFor } from '../src/catalog/index.js';
import { leadControlLayout } from '../src/canvas/lead-control-layout.js';
import { resolveDrawing } from '../src/canvas/scene.js';
import { canvasTargets } from '../src/canvas/targets.js';
import { fitPart } from '../src/geometry/breadboard-placement.js';
import { pointInsidePartBody, pointOnPart } from '../src/geometry/parts.js';
import { pinById } from '../src/model/component-pins.js';
import { mountingScale } from '../src/model/mounting.js';
import { componentForPart } from '../src/model/part-component.js';
import { newProject } from '../src/model/project.js';

const between = (a, b, fraction) => ({ x: a.x + (b.x - a.x) * fraction, y: a.y + (b.y - a.y) * fraction });

function surface(classes = [], dataset = {}, parentElement = null) {
  const names = new Set(classes);
  return {
    dataset, parentElement,
    matches(selector) {
      return selector.split(',').some(item => {
        const classes = [...item.matchAll(/\.([\w-]+)/g)].map(match => match[1]);
        const attributes = [...item.matchAll(/\[data-([\w-]+)(?:=["']?([^\]"']+)["']?)?\]/g)];
        return classes.length > 0 && classes.every(name => names.has(name)) && attributes.every(([, name, value]) => {
          const key = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          return value === undefined ? key in dataset : dataset[key] === value;
        });
      });
    },
    closest(selector) { return this.matches(selector) ? this : this.parentElement?.closest(selector) ?? null; },
  };
}

function targetScene(project, zoom = 1) {
  const geometry = resolveDrawing(project);
  let stack = [];
  const svg = surface();
  svg.ownerDocument = { elementsFromPoint: () => stack };
  svg.contains = node => node === svg || node.closest('.part-body, .canvas-pin, .wire-hit, .wire-handle') !== null;
  const canvas = {
    geometry, geometryProject: project, scale: zoom,
    point: (x, y) => ({ x: x / zoom, y: y / zoom }),
    position: geometry.position,
    nearestWire: ids => ids[0],
  };
  const targets = canvasTargets(canvas, svg);
  function hit(point, nodes, options) {
    stack = nodes;
    return targets.hitAt({ clientX: point.x * zoom, clientY: point.y * zoom, target: nodes[0] ?? svg }, options);
  }
  return { geometry, hit };
}

function fixture({ rotation = 0, mounted = true, hostLast = false, zoom = 1 } = {}) {
  const host = { id: 'bb', componentId: 'breadboard', x: 10.5, y: 20.25, rotation };
  const component = componentById.get('arduino-nano'), hostComponent = componentForPart(host);
  const raw = { id: 'nano', componentId: component.id, x: 0, y: 0, rotation,
    scale: mountingScale(component, hostComponent) };
  const hostPoint = id => pointOnPart(host, pinById(hostComponent, id), hostComponent);
  const hole = hostPoint('c5'), lead = pointOnPart(raw, pinById(component, 'd13'), component);
  const placed = { ...raw, x: hole.x - lead.x, y: hole.y - lead.y };
  const initial = { ...newProject('Body target regression'), parts: [host, placed] };
  const fit = fitPart(initial, placed);
  assert.ok(fit, 'The real Nano fixture fits all header contacts.');
  const { attachment, ...detached } = fit.part;
  const part = mounted ? fit.part : detached;
  const project = { ...initial, parts: hostLast ? [part, host] : [host, part] };
  const { geometry, hit } = targetScene(project, zoom);
  const body = surface(['part-body'], { part: part.id, partRegion: 'body' });
  const hostBody = surface(['part-body'], { part: host.id, partRegion: 'body' });
  const pin = (partId, pinId) => surface(['canvas-pin'], { part: partId, pin: pinId });
  return { host, part, project, geometry, body, hostBody, hostPoint, pin, hit };
}

function displacedLeadFixture(zoom) {
  const host = { id: 'bb', componentId: 'breadboard', x: 0, y: 0 };
  const component = componentById.get('market-bpw34'), profile = mountingFor(component.id);
  const raw = { id: 'photodiode', componentId: component.id, x: 0, y: 0,
    scale: mountingScale(component, componentForPart(host)),
    leads: profile.contacts.map(contact => ({ pinId: contact.pinId,
      x: profile.origin.x + contact.x * profile.unitsPerMm,
      y: profile.origin.y + contact.y * profile.unitsPerMm })) };
  const hole = pointOnPart(host, pinById(componentForPart(host), 'a5'));
  const initial = leadControlLayout(raw, component, zoom)[0];
  assert.notDeepEqual(initial.display, initial.point, 'The small photodiode needs a displaced lead control.');
  const part = { ...raw, x: hole.x - initial.display.x, y: hole.y - initial.display.y };
  const project = { ...newProject('Displaced lead targets'), parts: [host, part] };
  const scene = targetScene(project, zoom);
  const layout = leadControlLayout(part, component, zoom);
  const control = (pinId, display) => surface(['canvas-pin', 'lead-tip-control'], {
    part: part.id, pin: pinId, hitX: String(display.x), hitY: String(display.y),
  });
  return { ...scene, project, part, layout, control, hole,
    hostPin: surface(['canvas-pin'], { part: host.id, pin: 'a5' }),
    hostBody: surface(['part-body'], { part: host.id, partRegion: 'body' }) };
}

test('a mounted board body beats an adjacent uncovered breadboard hole hit halo', () => {
  for (const rotation of [0, 90, 180, 270]) for (const zoom of [.5, 2]) {
    const view = fixture({ rotation, zoom });
    const point = between(view.hostPoint('d3'), view.hostPoint('d4'), .44);
    assert.ok(pointInsidePartBody(view.part, point), `The click is on the rotated Nano body (${rotation} degrees).`);
    assert.equal(view.geometry.parts.get('bb').covered.has('d3'), false, 'The adjacent hole itself is exposed.');
    assert.ok(Math.hypot(point.x - view.hostPoint('d3').x, point.y - view.hostPoint('d3').y) < 8,
      'The exposed hole has a transparent hit halo over the visible body.');
    const hit = view.hit(point, [view.pin('bb', 'd3'), view.body, view.hostBody]);
    assert.equal(hit.partId, 'nano', `The body wins at rotation ${rotation} and zoom ${zoom}.`);
    assert.equal(hit.partRegion, 'body');
    assert.equal(hit.pin, undefined);
  }
});

test('a detached physical board blocks host contacts even when the host was added last', () => {
  for (const hostLast of [false, true]) for (const rotation of [0, 90, 180, 270]) {
    const view = fixture({ mounted: false, hostLast, rotation });
    const point = view.hostPoint('d5');
    assert.ok(pointInsidePartBody(view.part, point));
    assert.equal(view.geometry.parts.get('bb').covered.has('d5'), false,
      'The hit resolver must handle a host contact that the detached scene still exposes.');
    const hit = view.hit(point, [view.pin('bb', 'd5'), view.body, view.hostBody]);
    assert.equal(hit.partId, 'nano', `The module remains above the surface with hostLast=${hostLast}.`);
    assert.equal(hit.pin, undefined);
  }
});

test('an exposed hole in the transparent corner outside PCB and USB material remains targetable', () => {
  const view = fixture();
  const point = between(view.hostPoint('d3'), view.hostPoint('d4'), .3);
  assert.equal(pointInsidePartBody(view.part, point), false,
    'This corner belongs to the board outline envelope, but not its physical body regions.');
  const hit = view.hit(point, [view.pin('bb', 'd3'), view.body, view.hostBody]);
  assert.deepEqual(hit.pin, { partId: 'bb', pinId: 'd3' });
});

test('nearest-pin selection cannot resurrect an underlying host contact over the board body', () => {
  const view = fixture({ mounted: false });
  const own = { partId: 'nano', pinId: 'd13' }, foreign = { partId: 'bb', pinId: 'd5' };
  const ownPoint = view.geometry.position(own), foreignPoint = view.geometry.position(foreign);
  const point = between(ownPoint, foreignPoint, .55);
  assert.ok(pointInsidePartBody(view.part, point));
  assert.ok(Math.hypot(point.x - foreignPoint.x, point.y - foreignPoint.y) <
    Math.hypot(point.x - ownPoint.x, point.y - ownPoint.y), 'The blocked host contact is closer.');
  const hit = view.hit(point, [view.pin('nano', 'd13'), view.pin('bb', 'd5'), view.body, view.hostBody]);
  assert.deepEqual(hit.pin, own, 'The surviving visible contact must remain the target.');
  assert.equal(hit.partId, 'nano');
});

test('visible module contacts and exposed host holes remain available for wiring', () => {
  for (const mounted of [false, true]) for (const rotation of [0, 90, 180, 270]) {
    const view = fixture({ mounted, rotation });
    const own = { partId: 'nano', pinId: 'd13' };
    const ownHit = view.hit(view.geometry.position(own), [view.pin('nano', 'd13'), view.body, view.hostBody]);
    assert.deepEqual(ownHit.pin, own);
    const exposed = { partId: 'bb', pinId: 'a5' }, exposedPoint = view.geometry.position(exposed);
    assert.equal(pointInsidePartBody(view.part, exposedPoint), false);
    const hostHit = view.hit(exposedPoint, [view.pin('bb', 'a5'), view.hostBody]);
    assert.deepEqual(hostHit.pin, exposed);
  }
});

test('wire targets, wire handles and a visible custom caption retain their existing priority', () => {
  const view = fixture({ mounted: false });
  const point = view.hostPoint('d5');
  const wire = surface(['wire-hit'], { wire: 'jumper' });
  assert.equal(view.hit(point, [wire, view.body, view.hostBody]).wireId, 'jumper');
  const handle = surface(['wire-handle'], { wireHandle: 'bend', handleWire: 'jumper', bendIndex: '1',
    handleX: String(point.x), handleY: String(point.y) });
  handle.querySelector = () => ({ getBoundingClientRect: () => ({ x: point.x - 5, y: point.y - 5, width: 10, height: 10 }) });
  assert.deepEqual(view.hit(point, [handle, view.body, view.hostBody]).handle,
    { kind: 'bend', wireId: 'jumper', index: 1, axis: undefined, point });
  const caption = surface(['part-body'], { part: 'bb', partRegion: 'caption' });
  const captionHit = view.hit(point, [caption, view.body, view.hostBody]);
  assert.equal(captionHit.partId, 'bb');
  assert.equal(captionHit.partRegion, 'caption');
});

test('a displaced lead control wins over the host contact at its displayed center', () => {
  for (const zoom of [.4, 1, 2]) {
    const view = displacedLeadFixture(zoom), lead = view.layout[0];
    assert.ok(Math.hypot(lead.display.x - view.hole.x, lead.display.y - view.hole.y) < 1e-7);
    assert.notDeepEqual(view.geometry.position({ partId: view.part.id, pinId: lead.pin.id }), lead.display);
    assert.equal(view.geometry.parts.get('bb').covered.has('a5'), false, 'The underlying host contact is genuinely exposed.');
    const handle = view.control(lead.pin.id, lead.display);
    const hit = view.hit(lead.display, [surface([], {}, handle), view.hostPin, view.hostBody]);
    assert.deepEqual(hit.pin, { partId: view.part.id, pinId: lead.pin.id },
      'An exact host anchor cannot steal the explicit foreground control.');
  }
});

test('overlapping lead controls choose the nearest displayed center instead of their physical anchors', () => {
  for (const zoom of [.4, 1, 2]) {
    const view = displacedLeadFixture(zoom), [first, second] = view.layout;
    const point = second.point;
    const near = view.control(first.pin.id, { x: point.x + 2 / zoom, y: point.y });
    const far = view.control(second.pin.id, { x: point.x + 8 / zoom, y: point.y });
    const physical = surface(['canvas-pin'], { part: view.part.id, pin: second.pin.id });
    assert.notDeepEqual(first.point, point, 'Physical anchor distance would favor the other lead.');
    const hit = view.hit(point, [surface([], {}, far), surface([], {}, near), physical, view.hostBody]);
    assert.deepEqual(hit.pin, { partId: view.part.id, pinId: first.pin.id },
      'Both display hit circles overlap, so the nearer displayed control must win.');
  }
});

test('an explicit lead control remains above another foreground body while its physical pin stays occluded', () => {
  for (const zoom of [.4, 1, 2]) {
    const view = displacedLeadFixture(zoom), lead = view.layout[0];
    const foreground = { id: 'foreground', componentId: 'arduino-nano',
      x: (lead.display.x + lead.point.x) / 2 - 69,
      y: (lead.display.y + lead.point.y) / 2 - 120 };
    assert.ok(pointInsidePartBody(foreground, lead.display));
    assert.ok(pointInsidePartBody(foreground, lead.point));
    const project = { ...view.project, parts: [...view.project.parts, foreground] };
    const { hit } = targetScene(project, zoom);
    const body = surface(['part-body'], { part: foreground.id, partRegion: 'body' });
    const handle = view.control(lead.pin.id, lead.display);
    const controlHit = hit(lead.display, [surface([], {}, handle), view.hostPin, body, view.hostBody]);
    assert.deepEqual(controlHit.pin, { partId: view.part.id, pinId: lead.pin.id },
      'A selected lead control is an overlay above every physical body.');
    const physical = surface(['canvas-pin'], { part: view.part.id, pin: lead.pin.id });
    const physicalHit = hit(lead.point, [physical, body, view.hostBody]);
    assert.equal(physicalHit.pin, undefined, 'The ordinary contact at the actual lead tip remains occluded.');
    assert.equal(physicalHit.partId, foreground.id);
  }
});
