export function nextImportTurn({ document, signal }) {
  const window = document.defaultView;
  return new Promise(resolve => {
    if (signal.aborted) { resolve(false); return; }
    let frame;
    let timer;
    let settled = false;
    function finish(ready) {
      if (settled) return;
      settled = true;
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      if (timer !== undefined) window.clearTimeout(timer);
      signal.removeEventListener('abort', abort);
      resolve(ready);
    }
    const abort = () => finish(false);
    const scheduleTimer = () => {
      frame = undefined;
      if (!settled) timer = window.setTimeout(() => finish(true), 0);
    };
    signal.addEventListener('abort', abort, { once: true });
    if (document.visibilityState === 'hidden') scheduleTimer();
    else frame = window.requestAnimationFrame(scheduleTimer);
  });
}
