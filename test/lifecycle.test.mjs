import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createScope } from '../src/shared/lifecycle.js';

test('disposing a scope removes listeners and releases resources once in reverse order', () => {
  const target = new EventTarget();
  const scope = createScope();
  const calls = [];
  scope.on(target, 'change', () => calls.push('event'));
  scope.cleanup(() => calls.push('first'));
  scope.cleanup(() => calls.push('second'));
  target.dispatchEvent(new Event('change'));
  scope.destroy();
  scope.destroy();
  target.dispatchEvent(new Event('change'));
  scope.cleanup(() => calls.push('late'));
  assert.deepEqual(calls, ['event', 'second', 'first', 'late']);
  assert.equal(scope.destroyed, true);
  assert.equal(scope.signal.aborted, true);
});

test('a parent scope releases children and a destroyed scope can be replaced without duplicate actions', () => {
  const target = new EventTarget();
  const parent = createScope();
  const child = createScope({ signal: parent.signal });
  let calls = 0;
  let cleanup = 0;
  child.on(target, 'action', () => calls++);
  child.cleanup(() => cleanup++);
  parent.destroy();
  const replacement = createScope();
  replacement.on(target, 'action', () => calls++);
  target.dispatchEvent(new Event('action'));
  assert.equal(calls, 1);
  assert.equal(cleanup, 1);
  const stopped = createScope({ signal: parent.signal });
  stopped.on(target, 'action', () => calls++);
  assert.equal(stopped.destroyed, true);
  replacement.destroy();
});

test('resource cleanup continues when one resource fails', () => {
  const scope = createScope();
  let released = false;
  scope.cleanup(() => { released = true; });
  scope.cleanup(() => { throw new Error('release failed'); });
  assert.throws(scope.destroy, AggregateError);
  assert.equal(released, true);
  scope.destroy();
});
