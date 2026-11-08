import { selectionOptions } from './targets.js';

export function bindCanvasKeyboard({ scope, svg, canvas, editor, targets, actions, mode, busy }) {
  const { focusedHit, anchorAt } = targets;
  const { movementTarget, nudge, removeBend, tap, focusEndpoint } = actions;
  scope.on(svg, 'keydown', event => {
    if (event.isComposing) return;
    const hit = focusedHit(event.target);
    const direction = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[event.key];
    if (direction && !event.altKey && !event.ctrlKey && !event.metaKey && !busy()) {
      if (editor.mode === 'pan' || (!editor.selections.length && !editor.pending)) {
        event.preventDefault();
        const distance = event.shiftKey ? 100 : 40;
        canvas.pan(canvas.center, -direction[0] * distance, -direction[1] * distance);
        return;
      }
      const target = !hit.pin && movementTarget(hit, { keyboard: true });
      if (target) {
        event.preventDefault();
        nudge(...direction, event.shiftKey ? 10 : 1, target);
        return;
      }
    }
    if (hit.handle && ['Delete', 'Backspace'].includes(event.key)) {
      event.preventDefault();
      if (hit.handle.kind === 'bend') removeBend(hit.handle);
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ') return;
    if (!hit.partId && !hit.wireId && !hit.junction && !hit.handle) return;
    event.preventDefault();
    if (mode() !== 'pan') tap(hit, { keyboard: true, selection: selectionOptions(event) });
  });

  scope.on(svg, 'focusin', event => {
    const endpoint = anchorAt(focusedHit(event.target));
    if (!endpoint) return;
    actions.focusContact?.(endpoint);
    if (!editor.pending) return;
    focusEndpoint(endpoint);
  });

}
