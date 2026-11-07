export function createScope({ signal } = {}) {
  const controller = new AbortController();
  const cleanups = [];
  let destroyed = false;

  function destroy() {
    if (destroyed) return;
    destroyed = true;
    controller.abort();
    const errors = [];
    for (const cleanup of cleanups.splice(0).reverse()) {
      try { cleanup(); } catch (error) { errors.push(error); }
    }
    if (errors.length) throw new AggregateError(errors, 'Could not release all resources.');
  }

  function cleanup(callback) {
    if (destroyed) callback();
    else cleanups.push(callback);
    return callback;
  }

  if (signal) {
    if (signal.aborted) destroy();
    else {
      signal.addEventListener('abort', destroy, { once: true });
      cleanup(() => signal.removeEventListener('abort', destroy));
    }
  }

  return {
    signal: controller.signal,
    get destroyed() { return destroyed; },
    on(target, type, listener, options = {}) {
      if (destroyed) return;
      const settings = typeof options === 'boolean' ? { capture: options } : options;
      target.addEventListener(type, listener, { ...settings, signal: controller.signal });
    },
    cleanup, destroy,
  };
}
