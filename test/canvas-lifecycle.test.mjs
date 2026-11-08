import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DrawingCanvas } from '../src/canvas/canvas.js';

test('destroy and remount remove generated SVG layers and disconnect each observer once', t => {
  class Node extends EventTarget {
    children = [];
    dataset = {};
    constructor(document) { super(); this.ownerDocument = document; }
    setAttribute() {}
    append(...nodes) {
      for (const node of nodes) { node.remove(); node.parent = this; this.children.push(node); }
    }
    insertBefore(node, before) {
      node.remove(); node.parent = this;
      this.children.splice(this.children.indexOf(before), 0, node);
    }
    remove() {
      if (this.parent) this.parent.children.splice(this.parent.children.indexOf(this), 1);
      this.parent = null;
    }
    replaceChildren(...nodes) { for (const node of [...this.children]) node.remove(); this.append(...nodes); }
  }
  const document = { createElementNS: () => new Node(document), defaultView: { matchMedia: () => new EventTarget() } };
  const svg = new Node(document), scene = new Node(document), draft = new Node(document);
  svg.append(scene, draft);
  const observers = [];
  class Observer {
    disconnected = 0;
    constructor() { observers.push(this); }
    observe(node) { assert.equal(node, svg); }
    disconnect() { this.disconnected++; }
  }
  for (const [key, value] of Object.entries({ matchMedia: () => new EventTarget(), ResizeObserver: Observer })) {
    const previous = Object.getOwnPropertyDescriptor(globalThis, key);
    Object.defineProperty(globalThis, key, { configurable: true, value });
    t.after(() => previous ? Object.defineProperty(globalThis, key, previous) : delete globalThis[key]);
  }
  let selectionUpdates = 0;
  const first = new DrawingCanvas({ svg, scene, draft, onZoom() {}, onSelectionViewChange() { selectionUpdates++; } });
  assert.equal(scene.children.length, 5);
  assert.equal(svg.children.length, 9);
  first.onViewChange();
  assert.equal(selectionUpdates, 1);
  first.destroy(); first.destroy();
  assert.equal(first.selectionViewChanged, undefined);
  assert.equal(scene.children.length, 0);
  assert.deepEqual(svg.children, [scene, draft]);
  assert.equal(observers[0].disconnected, 1);
  const second = new DrawingCanvas({ svg, scene, draft, onZoom() {} });
  assert.equal(scene.children.length, 5);
  assert.equal(svg.children.length, 9);
  second.destroy();
  assert.equal(observers[1].disconnected, 1);
  assert.deepEqual(svg.children, [scene, draft]);
});
