import assert from 'node:assert/strict';
import { test } from 'node:test';
import { bindPersistence } from '../src/app/persistence.js';
import { createPreferences } from '../src/app/preferences.js';

test('workspace persistence reports storage transitions and protects changes only after a failed save', () => {
  const target = new EventTarget();
  const notifications = [];
  let changes = 0;
  let fail = true;
  const project = { title: 'Example' };
  const storage = {
    status: 'empty', message: '',
    save(value) {
      assert.equal(value, project);
      if (fail) { this.status = 'failed'; this.message = 'Full'; throw new Error('Full'); }
      this.status = 'saved'; this.message = '';
    },
    check() { this.status = 'conflict'; this.message = 'Changed elsewhere'; },
  };
  const persistence = bindPersistence({ storage, getProject: () => project,
    notify: message => notifications.push(message), onChange: () => changes++, target });
  const unload = () => { const event = new Event('beforeunload', { cancelable: true }); Object.defineProperty(event, 'returnValue', { value: '', writable: true }); target.dispatchEvent(event); return event.defaultPrevented; };
  assert.equal(unload(), false);
  persistence.save(); persistence.save();
  assert.deepEqual(notifications, ['Full']);
  assert.equal(persistence.status, 'failed');
  assert.equal(unload(), true);
  fail = false;
  persistence.save();
  assert.equal(unload(), false);
  target.dispatchEvent(new Event('storage'));
  assert.equal(persistence.status, 'conflict');
  assert.equal(persistence.message, 'Changed elsewhere');
  assert.equal(changes, 1);
  persistence.destroy();
  target.dispatchEvent(new Event('storage'));
  assert.equal(changes, 1);
});

test('shortcut preferences remain usable for the session when browser storage fails', () => {
  const messages = [];
  const preferences = createPreferences({ storage: {
    getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); },
  }, notify: message => messages.push(message) });
  assert.equal(preferences.singleKeyShortcuts, true);
  preferences.setSingleKeyShortcuts(false);
  assert.equal(preferences.singleKeyShortcuts, false);
  assert.equal(messages.length, 1);
  const values = new Map([['wirepad.singleKeyShortcuts', 'off']]);
  const stored = createPreferences({ storage: { getItem: key => values.get(key), setItem: (key, value) => values.set(key, value) } });
  assert.equal(stored.singleKeyShortcuts, false);
  stored.setSingleKeyShortcuts(true);
  assert.equal(values.get('wirepad.singleKeyShortcuts'), 'on');
});
