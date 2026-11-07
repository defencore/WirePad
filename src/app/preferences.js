const shortcutKey = 'wirepad.singleKeyShortcuts';

export function createPreferences({ storage, notify } = {}) {
  let singleKeyShortcuts = true;
  try { storage ??= globalThis.localStorage; singleKeyShortcuts = storage?.getItem(shortcutKey) !== 'off'; } catch {}
  return {
    get singleKeyShortcuts() { return singleKeyShortcuts; },
    setSingleKeyShortcuts(enabled) {
      singleKeyShortcuts = enabled;
      try { storage.setItem(shortcutKey, enabled ? 'on' : 'off'); }
      catch { notify('Shortcut preference changed for this session. Browser storage is unavailable.'); }
    },
  };
}
