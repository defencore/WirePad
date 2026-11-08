import assert from 'node:assert/strict';
import { test } from 'node:test';
import { nextImportTurn } from '../src/ui/import-turn.js';
import { createScope } from '../src/shared/lifecycle.js';

function importTurn(visibilityState = 'visible') {
  const frames = new Map();
  const timers = new Map();
  let sequence = 0;
  const document = { visibilityState, defaultView: {
    requestAnimationFrame(callback) { frames.set(++sequence, callback); return sequence; },
    cancelAnimationFrame(id) { frames.delete(id); },
    setTimeout(callback) { timers.set(++sequence, callback); return sequence; },
    clearTimeout(id) { timers.delete(id); },
  } };
  const flush = queue => {
    for (const [id, callback] of [...queue]) { queue.delete(id); callback(); }
  };
  const scope = createScope();
  return { scope, frames, timers, document,
    frame: () => flush(frames), timer: () => flush(timers),
    wait: () => nextImportTurn({ document, signal: scope.signal }),
  };
}

test('project import yields through a paint before continuing parsing', async () => {
  const turn = importTurn();
  let ready = false;
  const waiting = turn.wait().then(result => { ready = result; });
  assert.equal(turn.frames.size, 1);
  assert.equal(turn.timers.size, 0);
  turn.frame();
  await Promise.resolve();
  assert.equal(ready, false);
  assert.equal(turn.timers.size, 1);
  turn.timer();
  await waiting;
  assert.equal(ready, true);
  assert.equal(turn.frames.size + turn.timers.size, 0);
  turn.scope.destroy();
});

for (const stage of ['before paint', 'after paint', 'hidden document']) {
  test(`destroying project controls cancels a pending import turn ${stage}`, async () => {
    const turn = importTurn(stage === 'hidden document' ? 'hidden' : 'visible');
    const waiting = turn.wait();
    if (stage === 'after paint') turn.frame();
    assert.equal(turn.frames.size + turn.timers.size, 1);
    turn.scope.destroy();
    assert.equal(turn.frames.size + turn.timers.size, 0);
    turn.frame(); turn.timer();
    assert.equal(await waiting, false);
  });
}

test('a hidden document can finish importing without waiting for an animation frame', async () => {
  const turn = importTurn('hidden');
  const waiting = turn.wait();
  assert.equal(turn.frames.size, 0);
  turn.timer();
  assert.equal(await waiting, true);
  turn.scope.destroy();
});

test('a file read completed after destroy schedules no import continuation', async () => {
  const turn = importTurn();
  turn.scope.destroy();
  assert.equal(await turn.wait(), false);
  assert.equal(turn.frames.size + turn.timers.size, 0);
});
