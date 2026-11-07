import { createScope } from '../shared/lifecycle.js';

export function bindPersistence({ storage, getProject, notify, onChange, target = window, signal }) {
  const scope = createScope({ signal });
  let status = storage.status;
  let unsaved = false;
  scope.on(target, 'storage', () => {
    storage.check();
    status = storage.status;
    onChange();
  });
  scope.on(target, 'beforeunload', event => {
    if (!unsaved) return;
    event.preventDefault();
    event.returnValue = '';
  });
  return {
    get status() { return status; },
    get message() { return storage.message; },
    save() {
      if (scope.destroyed) return;
      try {
        storage.save(getProject());
        status = 'saved';
        unsaved = false;
      } catch (error) {
        if (status !== storage.status) notify(error.message);
        status = storage.status;
        unsaved = true;
      }
    },
    destroy: scope.destroy,
  };
}
