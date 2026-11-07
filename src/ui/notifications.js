import { createScope } from '../shared/lifecycle.js';

export function bindNotifications({ toast, signal }) {
  const scope = createScope({ signal });
  let timer;
  scope.cleanup(() => { clearTimeout(timer); toast.hidden = true; });
  return {
    notify(message) {
      if (scope.destroyed) return;
      toast.textContent = message;
      toast.hidden = false;
      clearTimeout(timer);
      timer = setTimeout(() => { toast.hidden = true; }, 3600);
    },
    destroy: scope.destroy,
  };
}
