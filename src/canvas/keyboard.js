import { rotationSelector, selectionOptions } from './targets.js';

export function bindCanvasKeyboard({ scope, svg, canvas, editor, targets, actions, mode, busy }) {
  let rotationKey;
  const { focusedHit, anchorAt } = targets;
  const { rotate, movementTarget, nudge, removeBend, tap, focusEndpoint } = actions;
  scope.on(svg, 'keydown', event => {
    if (event.isComposing) return;
    const rotationButton = event.target.closest(rotationSelector);
    if (rotationButton) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.stopPropagation();
        if (!event.repeat) {
          if (event.key === 'Enter') rotate(rotationButton);
          else rotationKey = { button: rotationButton, partId: rotationButton.closest('.part-rotation-controls').dataset.rotationPart };
        }
      } else if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
        const buttons = [...rotationButton.parentElement.querySelectorAll(rotationSelector)];
        const index = buttons.indexOf(rotationButton);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
          : (index + (event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1) + buttons.length) % buttons.length;
        buttons[next].focus({ preventScroll: true });
      }
      return;
    }
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

  scope.on(svg, 'keyup', event => {
    const button = event.target.closest(rotationSelector);
    if (!button || event.key !== ' ') return;
    event.preventDefault();
    event.stopPropagation();
    if (rotationKey?.button === button) rotate(button, rotationKey.partId);
    rotationKey = null;
  });

  scope.on(svg, 'focusout', event => {
    if (event.target === rotationKey?.button) rotationKey = null;
  });

  scope.on(svg, 'focusin', event => {
    const endpoint = anchorAt(focusedHit(event.target));
    if (!endpoint) return;
    actions.focusContact?.(endpoint);
    if (!editor.pending) return;
    focusEndpoint(endpoint);
  });

  return { reset() { rotationKey = null; } };
}
