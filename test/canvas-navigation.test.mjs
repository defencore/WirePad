import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DrawingCanvas } from '../src/canvas/canvas.js';

function closePoint(actual, expected, message) {
  assert.ok(Math.abs(actual.x - expected.x) < 1e-7 && Math.abs(actual.y - expected.y) < 1e-7,
    `${message}: expected (${expected.x}, ${expected.y}), received (${actual.x}, ${actual.y})`);
}

function matrix(a, b, c, d, e, f) {
  return {
    a, b, c, d, e, f,
    transformPoint({ x, y }) { return { x: a * x + c * y + e, y: b * x + d * y + f }; },
    inverse() {
      const determinant = a * d - b * c;
      return matrix(d / determinant, -b / determinant, -c / determinant, a / determinant,
        (c * f - d * e) / determinant, (b * e - a * f) / determinant);
    },
  };
}

function viewport(cssScale) {
  const attributes = new Map();
  const rect = { left: 263.375, top: 95.625, width: 801.25 * cssScale, height: 603.75 * cssScale };
  const svg = {
    clientWidth: 801, clientHeight: 604,
    setAttribute(name, value) { attributes.set(name, value); },
    getBoundingClientRect() { return rect; },
    getScreenCTM() {
      // Model SVG's default xMidYMid meet projection from the applied viewBox.
      const [left, top, width, height] = attributes.get('viewBox').split(' ').map(Number);
      const scale = Math.min(rect.width / width, rect.height / height);
      return matrix(scale, 0, 0, scale,
        rect.left + (rect.width - width * scale) / 2 - left * scale,
        rect.top + (rect.height - height * scale) / 2 - top * scale);
    },
  };
  const canvas = Object.assign(Object.create(DrawingCanvas.prototype), {
    svg, center: { x: 125, y: -90 }, scale: .75, autoFit: true,
    updateWireHandles() {}, updatePartControls() {}, onZoom() {},
  });
  canvas.applyView();
  return { canvas, clientFor: point => svg.getScreenCTM().transformPoint(point) };
}

test('pointer coordinates follow the rendered SVG at fractional sizes, offsets and CSS scales', () => {
  for (const cssScale of [.8, 1.25]) {
    const { canvas, clientFor } = viewport(cssScale);
    for (const world of [{ x: 125, y: -90 }, { x: -240.5, y: 78.25 }, { x: 490.125, y: -270.75 }]) {
      const client = clientFor(world);
      closePoint(canvas.point(client.x, client.y), world, `screen-to-world at CSS scale ${cssScale}`);
    }
  }
});

test('repeated zoom in, zoom out and clamped zoom keep off-center world points beneath the cursor', () => {
  for (const cssScale of [.8, 1.25]) {
    for (const anchor of [{ x: -240.5, y: 78.25 }, { x: 490.125, y: -270.75 }]) {
      const { canvas, clientFor } = viewport(cssScale);
      const cursor = clientFor(anchor);
      const initialCenter = { ...canvas.center };
      for (const requested of [.9375, 1.46484375, .375, 1.8, .75, 100, 4, .00001, .01, .75]) {
        canvas.zoom(requested, canvas.point(cursor.x, cursor.y));
        closePoint(clientFor(anchor), cursor, `cursor anchor after requesting scale ${requested}`);
        closePoint(canvas.point(cursor.x, cursor.y), anchor, 'world anchor after zoom');
        assert.equal(canvas.scale, Math.max(.01, Math.min(4, requested)));
        assert.equal(canvas.autoFit, false);
      }
      closePoint(canvas.center, initialCenter, 'zoom round trip restores view center');
    }
  }
});

test('pinch follows a moving midpoint at scaled SVG sizes even when the zoom limit is reached', () => {
  for (const cssScale of [.8, 1.25]) {
    const { canvas, clientFor } = viewport(cssScale);
    const world = { x: -70.25, y: 125.5 };
    const start = clientFor(world);
    const anchor = canvas.point(start.x, start.y);
    for (const [requested, dx, dy] of [[100, 52, -36], [100, 90, -12], [.00001, -20, 70], [.01, -45, 95], [.75, 10, -15]]) {
      const midpoint = { x: start.x + dx, y: start.y + dy };
      canvas.zoomAt(requested, anchor, midpoint.x, midpoint.y);
      closePoint(clientFor(world), midpoint, `pinch anchor after requesting scale ${requested}`);
      closePoint(canvas.point(midpoint.x, midpoint.y), world, 'pinch world anchor');
      assert.equal(canvas.scale, Math.max(.01, Math.min(4, requested)));
      assert.equal(canvas.autoFit, false);
    }
  }
});

test('fit selection frames horizontal and vertical wires with a zero span on one axis', () => {
  for (const end of [{ x: 4000, y: 0 }, { x: 0, y: 4000 }]) {
    let updates = 0;
    const route = [{ x: 0, y: 0 }, end];
    const canvas = Object.assign(Object.create(DrawingCanvas.prototype), {
      svg: { clientWidth: 800, clientHeight: 600 },
      geometry: { wires: new Map([['wire', { geometry: { route } }]]) },
      applyView() { updates++; },
    });
    canvas.fitSelection([{ type: 'wire', id: 'wire' }]);
    assert.equal(updates, 1);
    assert.ok(canvas.scale > 0 && canvas.scale < 1);
    assert.deepEqual(canvas.center, { x: end.x / 2, y: end.y / 2 });
    for (const point of route) {
      const x = 400 + (point.x - canvas.center.x) * canvas.scale;
      const y = 300 + (point.y - canvas.center.y) * canvas.scale;
      assert.ok(x >= 0 && x <= 800 && y >= 0 && y <= 600);
    }
  }
});
