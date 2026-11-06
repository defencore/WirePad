import { updateItem } from './editor.js';
import { clampPoint, segmentDrag, slideSegment } from './routing.js';

const dragThreshold = 3;

function pinAt(target) {
  const pin = target.closest('[data-pin]');
  return pin ? { partId: pin.dataset.part, pinId: pin.dataset.pin } : null;
}

function junctionAt(target) {
  const junction = target.closest('[data-junction]');
  return junction ? { junctionId: junction.dataset.junction } : null;
}

export function bindCanvas({ canvas, svg, editor, paint, revealInspector, dismissInspector }) {
  let gesture;
  let cursor;
  let hover;
  let frame;
  let movement;
  let holdingSpace = false;
  const position = endpoint => canvas.position(endpoint);

  function setCanvasMode() {
    svg.dataset.mode = holdingSpace ? 'pan' : editor.mode;
    svg.dataset.routing = Boolean(editor.pending);
  }

  function renderDraft() {
    setCanvasMode();
    if (!editor.pending) cursor = hover = null;
    const point = cursor ?? (editor.pending && canvas.position(editor.pending.from));
    canvas.showDraft(editor.pending, point, editor.wireColor, hover);
  }

  function wireAt(event, point) {
    const hit = event.target.closest('[data-wire]');
    if (!hit) return null;
    const hits = document.elementsFromPoint(event.clientX, event.clientY)
      .filter(node => node.matches('.wire-hit')).map(node => node.dataset.wire);
    return hits.length > 1 ? canvas.nearestWire(hits, point) : hits[0] ?? hit.dataset.wire;
  }

  function anchorAt(id, point) {
    return id ? canvas.anchorWire(id, point, Math.min(20, 9 / canvas.scale)) : null;
  }

  function activate(endpoint) {
    editor.activateEndpoint(endpoint, position);
  }

  function capture(event, type, item, segment) {
    gesture = {
      id: event.pointerId, type, item, segment, x: event.clientX, y: event.clientY,
      center: canvas.center, scale: canvas.scale, project: editor.project,
    };
    svg.setPointerCapture(event.pointerId);
  }

  function cancelFrame() {
    cancelAnimationFrame(frame);
    movement = frame = null;
  }

  svg.addEventListener('pointerdown', event => {
    if (gesture || ![0, 1].includes(event.button)) return;
    cancelFrame();
    if (document.activeElement.matches('#project-title, #part-label')) document.activeElement.blur();
    if (event.button === 1 || editor.mode === 'pan' || holdingSpace) {
      event.preventDefault();
      capture(event, 'pan');
      svg.classList.add('dragging');
      return;
    }
    const pin = pinAt(event.target);
    const junction = junctionAt(event.target);
    const point = canvas.point(event.clientX, event.clientY);
    const wire = !pin && !junction && wireAt(event, point);
    const endpoint = pin ?? ((editor.pending || editor.mode === 'wire') && (junction ?? anchorAt(wire, point)));
    if (endpoint) {
      event.preventDefault();
      activate(endpoint);
      return;
    }
    if (editor.pending) {
      capture(event, 'bend');
      return;
    }
    if (editor.mode === 'select' && junction) {
      editor.select(null);
      capture(event, 'junction', editor.item('junction', junction.junctionId));
      return;
    }
    const part = event.target.closest('[data-part]');
    if (editor.mode === 'select' && wire) {
      editor.select('wire', wire);
      const segment = segmentDrag(editor.wire, position, point);
      if (segment) capture(event, 'wire', editor.wire, segment);
    } else if (editor.mode === 'select' && part) {
      editor.select('part', part.dataset.part);
      capture(event, 'part', editor.part);
    } else {
      editor.select(null);
      dismissInspector();
    }
  });

  function move(action, event) {
    const dx = event.clientX - action.x;
    const dy = event.clientY - action.y;
    if (dx === action.dx && dy === action.dy) return;
    action.dx = dx;
    action.dy = dy;
    if (action.type === 'pan') {
      canvas.pan(action.center, dx, dy);
      return;
    }
    if (action.type === 'bend') return;

    const { item, segment, type, scale, project } = action;
    const offset = segment?.axis === 'x' ? dx : dy;
    const distance = segment ? Math.abs(offset) : Math.hypot(dx, dy);
    if (!action.moved && distance <= dragThreshold) return;
    action.moved = true;
    svg.classList.add('dragging');

    const properties = segment ? { fixedRoute: true, points: slideSegment(segment, offset / scale) }
      : clampPoint({ x: item.x + dx / scale, y: item.y + dy / scale });
    const changed = segment ? offset !== 0 : item.x !== properties.x || item.y !== properties.y;
    action.next = changed ? updateItem(project, type, item.id, properties) : null;
    paint(action.next ?? project);
  }

  svg.addEventListener('pointermove', event => {
    if (gesture ? gesture.id !== event.pointerId : !editor.pending) return;
    movement = event;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const event = movement;
      movement = frame = null;
      if (gesture) {
        if (gesture.project === editor.project) move(gesture, event);
      } else if (editor.pending) {
        cursor = canvas.point(event.clientX, event.clientY);
        hover = pinAt(event.target) ?? junctionAt(event.target) ?? anchorAt(wireAt(event, cursor), cursor);
        renderDraft();
      }
    });
  });

  function finish(event) {
    if (gesture?.id !== event.pointerId) return;
    const action = gesture;
    gesture = null;
    cancelFrame();
    if (event.type === 'pointerup' && action.project === editor.project) {
      if (action.type === 'bend' && editor.pending) {
        cursor = clampPoint(canvas.point(event.clientX, event.clientY));
        hover = null;
        editor.addBend(cursor);
        renderDraft();
      } else {
        move(action, event);
        if (action.next) editor.commit(action.next);
        else if (action.type === 'wire' && Math.hypot(action.dx, action.dy) <= dragThreshold) revealInspector();
      }
    } else if (action.next) {
      paint(editor.project);
    }
    svg.classList.remove('dragging');
  }

  for (const event of ['pointerup', 'pointercancel', 'lostpointercapture']) svg.addEventListener(event, finish);

  svg.addEventListener('wheel', event => {
    event.preventDefault();
    if (gesture) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? svg.clientHeight : 1);
    canvas.zoom(canvas.scale * Math.exp(-Math.max(-160, Math.min(160, delta)) * .002), canvas.point(event.clientX, event.clientY));
  }, { passive: false });

  svg.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const pin = pinAt(event.target);
    const junction = junctionAt(event.target);
    const wire = event.target.closest('[data-wire]');
    const part = event.target.closest('[data-part]');
    if (!pin && !junction && !wire && !part) return;
    event.preventDefault();
    if (editor.mode === 'pan') return;
    if (pin) activate(pin);
    else if (editor.pending || editor.mode === 'wire') {
      const endpoint = junction ?? (wire && anchorAt(wire.dataset.wire, wire.getPointAtLength(wire.getTotalLength() / 2)));
      if (endpoint) activate(endpoint);
    } else if (wire || part) {
      editor.select(wire ? 'wire' : 'part', wire ? wire.dataset.wire : part.dataset.part);
      if (wire) revealInspector({ focus: true });
    }
  });

  svg.addEventListener('focusin', event => {
    if (!editor.pending) return;
    const endpoint = pinAt(event.target) ?? junctionAt(event.target);
    if (!endpoint) return;
    hover = endpoint;
    cursor = canvas.position(endpoint);
    renderDraft();
  });

  const panWithSpace = active => {
    if (holdingSpace === active) return;
    holdingSpace = active;
    setCanvasMode();
  };
  document.addEventListener('keyup', event => { if (event.key === ' ') panWithSpace(false); });
  window.addEventListener('blur', () => panWithSpace(false));

  return { renderDraft, panWithSpace, get gesturing() { return Boolean(gesture); } };
}
