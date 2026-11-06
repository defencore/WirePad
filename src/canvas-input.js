import { updateItem } from './editor.js';
import { clampPoint, segmentDrag, slideSegment } from './routing.js';

const targetSelector = '.canvas-pin, .canvas-junction, .wire-hit, .part-body';
const clientPoint = event => ({ x: event.clientX, y: event.clientY });

function targetInfo(target) {
  const { part, pin, junction, wire } = target.closest(targetSelector)?.dataset ?? {};
  return { partId: part, wireId: wire, pin: pin && { partId: part, pinId: pin }, junction: junction && { junctionId: junction } };
}

function touchPair(first, second) {
  return {
    x: (first.x + second.x) / 2,
    y: (first.y + second.y) / 2,
    distance: Math.hypot(first.x - second.x, first.y - second.y),
  };
}

export function bindCanvas({ canvas, svg, editor, paint, openPinPicker, dismissInspector }) {
  let gesture;
  let cursor;
  let hover;
  let frame;
  let frameAction;
  let holdingSpace = false;
  let pinch;
  let multipleTouches = false;
  const touches = new Map();
  const position = endpoint => canvas.position(endpoint);

  function setCanvasMode() {
    svg.dataset.mode = holdingSpace ? 'pan' : editor.mode;
    svg.dataset.routing = Boolean(editor.pending);
  }

  function renderDraft() {
    setCanvasMode();
    if (!editor.pending) cursor = hover = null;
    const point = cursor ?? (editor.pending && position(editor.pending.from));
    canvas.showDraft(editor.pending, point, editor.wireColor, hover);
  }

  function hitAt(event) {
    const point = canvas.point(event.clientX, event.clientY);
    const stack = document.elementsFromPoint(event.clientX, event.clientY);
    const hit = targetInfo(stack.find(node => svg.contains(node) && node.closest(targetSelector)) ?? event.target);
    if (hit.wireId) {
      const ids = stack.filter(node => node.matches('.wire-hit')).map(node => node.dataset.wire);
      if (ids.length > 1) hit.wireId = canvas.nearestWire(ids, point) ?? hit.wireId;
    }
    return { ...hit, point };
  }

  function anchorAt({ pin, junction, wireId, point }) {
    return pin || junction || (wireId && point && canvas.anchorWire(wireId, point, Math.min(20, 9 / canvas.scale)));
  }

  function chooseEndpoint(endpoint) {
    if (editor.mode === 'trace') editor.tracePoint(endpoint);
    else editor.activateEndpoint(endpoint, position, (from, to) => canvas.autoRoute(from, to));
  }

  function tap(hit, { touch = false, keyboard = false } = {}) {
    const { partId, pin, junction, wireId, point } = hit;
    if (editor.mode === 'trace') {
      if (partId && (touch || !pin)) openPinPicker(partId, pin?.pinId);
      else editor.tracePoint(pin || junction || (wireId ? { wireId } : null));
      return;
    }
    if (editor.pending || editor.mode === 'wire' || pin) {
      const endpoint = anchorAt(hit);
      if (partId && (touch || !pin)) openPinPicker(partId, pin?.pinId);
      else if (endpoint) chooseEndpoint(endpoint);
      else if (!touch && !keyboard && editor.pending) {
        cursor = clampPoint(point);
        hover = null;
        editor.addBend(cursor);
        renderDraft();
      }
      return;
    }
    if (wireId) editor.select('wire', wireId);
    else if (partId) editor.select('part', partId);
    else {
      editor.select(null);
      dismissInspector();
    }
  }

  function schedule(update) {
    frameAction = update;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const run = frameAction;
      frame = frameAction = null;
      run();
    });
  }

  function cancelFrame() {
    if (frame) cancelAnimationFrame(frame);
    frameAction = frame = null;
  }

  function applyPinch() {
    const [first, second] = pinch.ids.map(id => touches.get(id));
    const { x, y, distance } = touchPair(first, second);
    canvas.zoomAt(pinch.scale * distance / pinch.distance, pinch.anchor, x, y);
  }

  function startPinch() {
    if (multipleTouches) return;
    multipleTouches = true;
    cancelFrame();
    if (gesture?.next) paint(editor.project);
    gesture = null;
    const ids = [...touches.keys()];
    const { x, y, distance } = touchPair(...touches.values());
    pinch = { ids, distance: Math.max(1, distance), scale: canvas.scale, anchor: canvas.point(x, y) };
    svg.classList.add('dragging');
  }

  svg.addEventListener('pointerdown', event => {
    if (![0, 1].includes(event.button)) return;
    const touch = event.pointerType === 'touch';
    svg.dataset.input = touch ? 'touch' : 'pointer';
    if (touch) {
      touches.set(event.pointerId, clientPoint(event));
      if (touches.size > 1 || multipleTouches) {
        event.preventDefault();
        svg.setPointerCapture(event.pointerId);
        startPinch();
        return;
      }
    }
    if (gesture) return;
    cancelFrame();
    if (document.activeElement.matches('#project-title, #part-label')) document.activeElement.blur();

    const forcePan = event.button === 1 || editor.mode === 'pan' || holdingSpace;
    const hit = forcePan ? {} : hitAt(event);
    const { wireId, partId, pin, junction, point } = hit;
    let type = touch || forcePan ? 'pan' : 'tap';
    let item;
    let segment;
    if (!forcePan && editor.mode === 'select' && !editor.pending && !pin) {
      if (junction) {
        type = 'junction';
        item = editor.item('junction', junction.junctionId);
      } else if (wireId) {
        item = editor.item('wire', wireId);
        segment = segmentDrag(item, position, point);
        if (segment) type = 'wire';
      } else if (partId) {
        type = 'part';
        item = editor.item('part', partId);
      }
    }
    gesture = {
      id: event.pointerId, type, item, segment, hit, forcePan, touch,
      ...clientPoint(event), center: canvas.center, scale: canvas.scale, project: editor.project,
    };
    event.preventDefault();
    svg.setPointerCapture(event.pointerId);
  });

  function move(action, event) {
    const dx = event.clientX - action.x;
    const dy = event.clientY - action.y;
    if (dx === action.dx && dy === action.dy) return;
    action.dx = dx;
    action.dy = dy;
    if (action.type === 'tap') return;
    const threshold = action.touch ? 7 : 3;
    const distance = Math.hypot(dx, dy);
    if (!action.moved && distance <= threshold) return;

    const { item, segment, type, scale, project } = action;
    if (!action.moved && item) {
      if (type === 'junction') editor.select(null);
      else editor.select(type, item.id);
    }
    action.moved = true;
    svg.classList.add('dragging');
    if (type === 'pan') {
      canvas.pan(action.center, dx, dy);
      return;
    }

    const offset = segment?.axis === 'x' ? dx : dy;
    const properties = segment ? { fixedRoute: true, points: slideSegment(segment, offset / scale) }
      : clampPoint({ x: item.x + dx / scale, y: item.y + dy / scale });
    const changed = segment ? Math.abs(offset) > threshold : item.x !== properties.x || item.y !== properties.y;
    if (changed || action.next) {
      action.next = changed ? updateItem(project, type, item.id, properties) : null;
      paint(action.next ?? project);
    }
  }

  svg.addEventListener('pointermove', event => {
    if (touches.has(event.pointerId)) touches.set(event.pointerId, clientPoint(event));
    if (pinch) {
      schedule(() => applyPinch());
    } else if (gesture?.id === event.pointerId) {
      schedule(() => {
        if (gesture?.project === editor.project) move(gesture, event);
      });
    } else if (!gesture && !multipleTouches && editor.pending && event.pointerType !== 'touch') {
      schedule(() => {
        if (!editor.pending) return;
        const hit = hitAt(event);
        cursor = hit.point;
        hover = anchorAt(hit);
        renderDraft();
      });
    }
  });

  function finish(event) {
    const wasTouch = touches.has(event.pointerId);
    if (wasTouch && pinch?.ids.includes(event.pointerId)) {
      if (event.type === 'pointerup') {
        touches.set(event.pointerId, clientPoint(event));
        applyPinch();
      }
      cancelFrame();
      pinch = null;
    }
    if (wasTouch) touches.delete(event.pointerId);
    if (multipleTouches) {
      if (!touches.size) {
        multipleTouches = false;
        svg.classList.remove('dragging');
      }
      return;
    }
    if (gesture?.id !== event.pointerId) return;
    const action = gesture;
    gesture = null;
    cancelFrame();
    svg.classList.remove('dragging');
    if (event.type !== 'pointerup' || action.project !== editor.project) {
      if (action.next) paint(editor.project);
      return;
    }
    move(action, event);
    svg.classList.remove('dragging');
    if (action.next) editor.commit(action.next);
    else if (!action.moved && !action.forcePan && Math.hypot(action.dx, action.dy) <= (action.touch ? 7 : 3)) tap(action.hit, action);
  }

  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) svg.addEventListener(event, finish);

  svg.addEventListener('wheel', event => {
    event.preventDefault();
    if (gesture || multipleTouches) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? svg.clientHeight : 1);
    canvas.zoom(canvas.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * .002), canvas.point(event.clientX, event.clientY));
  }, { passive: false });

  function focusedHit(target) {
    const hit = targetInfo(target);
    if (hit.wireId) hit.point = canvas.branchAnchor(hit.wireId)?.point;
    return hit;
  }

  svg.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const hit = focusedHit(event.target);
    if (!hit.partId && !hit.wireId && !hit.junction) return;
    event.preventDefault();
    if (editor.mode !== 'pan') tap(hit, { keyboard: true });
  });

  svg.addEventListener('focusin', event => {
    if (!editor.pending) return;
    const endpoint = anchorAt(focusedHit(event.target));
    if (!endpoint) return;
    hover = endpoint;
    cursor = position(endpoint);
    renderDraft();
  });

  const panWithSpace = active => {
    if (holdingSpace === active) return;
    holdingSpace = active;
    setCanvasMode();
  };
  document.addEventListener('keyup', event => { if (event.key === ' ') panWithSpace(false); });
  window.addEventListener('blur', () => panWithSpace(false));

  return { renderDraft, chooseEndpoint, panWithSpace, get gesturing() { return Boolean(gesture || multipleTouches); } };
}
