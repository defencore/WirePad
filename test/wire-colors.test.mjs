import assert from 'node:assert/strict';
import { test } from 'node:test';

import { DiagramEditor } from '../src/editor/editor.js';
import { traceNet } from '../src/model/continuity.js';
import { newProject, parseProject, serializeProject } from '../src/model/project.js';
import { ProjectHistory } from '../src/model/history.js';
import { wireRoute } from '../src/geometry/routing.js';
import { endpointPositions } from '../src/geometry/parts.js';
import {
  automaticWireColor, connectionPowerRole, DEFAULT_WIRE_COLOR, GROUND_WIRE_COLOR,
  pinPowerRole, SUPPLY_WIRE_COLOR,
} from '../src/model/wire-colors.js';

const pin = (partId, pinId) => ({ partId, pinId });
const junction = junctionId => ({ junctionId });
const part = (id, componentId = 'resistor', x = 0, y = 0) => ({ id, componentId, x, y });
const wire = (id, from, to, color = '#8b5cc7') => ({ id, from, to, color });
const source = pin('board', '3v3');
const ground = pin('board', 'gnd');
const signal = pin('board', 'gpio1');
const contact = pin('load', '1');

function workspace(properties = {}) {
  const messages = [];
  const history = new ProjectHistory({
    ...newProject(),
    parts: [part('board', 'esp32-s3'), part('load', 'resistor', 300, 0)],
    ...properties,
  });
  const editor = new DiagramEditor(history, () => {}, message => messages.push(message));
  return { editor, history, messages };
}

function connect(editor, from, to) {
  assert.equal(editor.beginWire(from), true);
  assert.equal(editor.activateEndpoint(to, endpointPositions(editor.project), wireRoute), true);
  return editor.wire;
}

test('power roles use complete contact identities and electrical types, never descriptions', () => {
  const role = (id, label, type = 'power_in', description = '') => pinPowerRole({ id, label, type, description });
  for (const [id, label, type] of [
    ['gnd-2', 'GND', 'power_in'], ['gnd3', 'G', 'passive'], ['p1', 'AGND', 'passive'],
    ['power-ground', 'G', 'power_in'], ['negative', 'BAT−', 'power_in'],
  ]) assert.equal(role(id, label, type), 'ground');
  for (const [id, label, type] of [
    ['vcc', 'VCC', 'passive'], ['p1', 'VDD', 'power_in'], ['p2', 'VCC3P3', 'power_in'],
    ['3v3', '3V3', 'passive'], ['p1', '3.3V', 'power_out'], ['p1', 'BAT+', 'power_in'],
    ['p3', 'VCC5V0_SYS', 'power_in'], ['p4', 'VCC5V_DCIN', 'power_in'], ['p5', 'VDDH', 'power_in'],
  ]) assert.equal(role(id, label, type), 'supply');
  for (const [id, label, type, description] of [
    ['gpio1', 'GPIO1', 'bidirectional', 'May connect to VCC or GND.'],
    ['gpio2', 'GPIO/GND', 'bidirectional'], ['gnd-detect', 'GND DETECT', 'input'],
    ['vref', 'VREF', 'power_in'], ['adc', 'ADC_VREF', 'power_in'],
    ['3v3-en', '3V3_EN', 'power_in'], ['vcc-ref', 'VCC_REF', 'power_in'],
    ['gpio3', 'VCC', 'output'], ['1', '1', 'passive'], ['p1', 'VEE', 'power_in'],
  ]) assert.equal(role(id, label, type, description), null, `${id}/${label}`);
});

test('new power wires receive the same color in either direction and preview matches commit', () => {
  for (const [power, color] of [[source, SUPPLY_WIRE_COLOR], [ground, GROUND_WIRE_COLOR]]) {
    for (const [from, to] of [[power, contact], [contact, power]]) {
      const { editor } = workspace();
      editor.beginWire(from);
      assert.equal(editor.connectionColor(from, to), color);
      assert.equal(editor.activateEndpoint(to, endpointPositions(editor.project), wireRoute), true);
      assert.equal(editor.wire.color, color);
      assert.deepEqual(editor.wire.from, from);
      assert.deepEqual(editor.wire.to, to);
    }
  }
  const { editor } = workspace();
  assert.equal(editor.connectionColor(), DEFAULT_WIRE_COLOR);
  assert.equal(connect(editor, signal, contact).color, DEFAULT_WIRE_COLOR);
});

test('existing manual power colors survive a branch split and its single-step undo/redo', () => {
  const { editor, history } = workspace({
    parts: [part('board', 'esp32-s3'), part('load', 'resistor', 300, 0), part('other', 'resistor', 300, 150)],
    wires: [wire('manual-power', source, contact)],
  });
  const original = editor.project;
  const anchor = { wireId: 'manual-power', point: { x: 220, y: 20 } };
  assert.equal(editor.connectionColor(pin('other', '1'), anchor), SUPPLY_WIRE_COLOR);
  const added = connect(editor, anchor, pin('other', '1'));
  assert.equal(added.color, SUPPLY_WIRE_COLOR);
  const split = editor.project.wires.filter(item => item.id !== added.id);
  assert.equal(split.length, 2);
  assert.ok(split.every(item => item.color === '#8b5cc7'));
  assert.ok(split.some(item => item.id === 'manual-power'));
  const branched = editor.project;
  assert.equal(traceNet(branched, { wireId: added.id }).wireIds.size, 3);
  editor.step('undo');
  assert.equal(editor.project, original);
  assert.equal(history.canUndo, false);
  editor.step('redo');
  assert.equal(editor.project, branched);
  assert.equal(editor.project.wires.find(item => item.id === added.id).color, SUPPLY_WIRE_COLOR);
});

test('signal branches inherit their selected wire color without changing the next wire default', () => {
  const { editor } = workspace({ wires: [wire('manual-signal', signal, contact)] });
  const anchor = { wireId: 'manual-signal', point: { x: 220, y: 16 } };
  assert.equal(editor.connectionColor(anchor, pin('load', '2')), '#8b5cc7');
  assert.equal(editor.connectionColor(pin('load', '2'), anchor), '#8b5cc7');
  editor.beginWire(anchor);
  assert.equal(editor.connectionColor(anchor), '#8b5cc7');
  editor.cancelWire();
  assert.equal(editor.connectionColor(pin('load', '2')), DEFAULT_WIRE_COLOR);
});

test('power roles follow actual wires, junctions and breadboard contacts without inventing joins', () => {
  const breadboard = {
    ...part('breadboard', 'breadboard', 500, 0),
    breadboard: { rows: 4, leftRails: 1, rightRails: 0, topRails: 0, bottomRails: 0, splitRails: true },
  };
  const { editor } = workspace({
    parts: [part('board', 'esp32-s3'), part('load'), breadboard],
    junctions: [{ id: 'supply-junction', x: 250, y: 20 }],
    wires: [
      wire('supply-start', source, junction('supply-junction')),
      wire('supply-strip', junction('supply-junction'), pin('breadboard', 'a1')),
      wire('supply-rail', pin('breadboard', 'e1'), pin('breadboard', 'left-1-1')),
    ],
  });
  for (const endpoint of [junction('supply-junction'), pin('breadboard', 'c1'), pin('breadboard', 'left-1-2')]) {
    assert.equal(editor.connectionColor(contact, endpoint), SUPPLY_WIRE_COLOR);
  }
  for (const endpoint of [pin('breadboard', 'f1'), pin('breadboard', 'a2'), pin('breadboard', 'left-1-3')]) {
    assert.equal(editor.connectionColor(contact, endpoint), DEFAULT_WIRE_COLOR);
  }
  // Separate contacts on one board are not connected merely because both labels read 3V3.
  assert.equal(traceNet(editor.project, source).endpoints.has('pin/board/3v3-2'), false);
  const added = connect(editor, pin('breadboard', 'left-1-2'), contact);
  assert.equal(added.color, SUPPLY_WIRE_COLOR);
});

test('manual draft color wins, reset restores inference, and the next power draft is automatic', () => {
  const { editor } = workspace();
  editor.beginWire(contact);
  assert.equal(editor.setWireColor('#abc'), true);
  assert.equal(editor.connectionColor(contact, ground), '#aabbcc');
  assert.equal(editor.pending.color, '#aabbcc');
  assert.equal(editor.resetWireColor(), true);
  assert.equal(Object.hasOwn(editor.pending, 'color'), false);
  assert.equal(editor.connectionColor(contact, ground), GROUND_WIRE_COLOR);
  editor.setWireColor('#8b5cc7');
  assert.equal(editor.activateEndpoint(ground, endpointPositions(editor.project), wireRoute), true);
  const manual = editor.wire;
  assert.equal(manual.color, '#8b5cc7');
  assert.equal(connect(editor, source, pin('load', '2')).color, SUPPLY_WIRE_COLOR);
  assert.equal(editor.project.wires.find(item => item.id === manual.id).color, '#8b5cc7');
  editor.beginWire(signal);
  editor.setWireColor('#12946d');
  editor.cancelWire();
  editor.beginWire(source);
  assert.equal(editor.connectionColor(source), SUPPLY_WIRE_COLOR);
  assert.equal(editor.setWireColor('red'), false);
  assert.equal(editor.connectionColor(source), SUPPLY_WIRE_COLOR);
});

test('ground-to-supply conflicts are order-independent, reported, and leave existing colors alone', () => {
  for (const [from, to] of [[source, ground], [ground, source]]) {
    const { editor, messages } = workspace();
    assert.equal(connectionPowerRole(editor.project, from, to), 'conflict');
    assert.equal(editor.connectionColor(from, to), DEFAULT_WIRE_COLOR);
    const added = connect(editor, from, to);
    assert.equal(added.color, DEFAULT_WIRE_COLOR);
    assert.ok(messages.some(message => message.includes('ground and a positive supply')));
    assert.equal(editor.connectionColor({ wireId: added.id }, contact), DEFAULT_WIRE_COLOR);
  }
  const { editor, messages } = workspace({
    parts: [part('board', 'esp32-s3'), part('load', 'resistor', 300, 0), part('other', 'resistor', 300, 150)],
    wires: [wire('positive', source, contact, SUPPLY_WIRE_COLOR),
      wire('negative', ground, pin('other', '1'), GROUND_WIRE_COLOR)],
  });
  const positive = { wireId: 'positive', point: { x: 220, y: 20 } };
  const negative = { wireId: 'negative', point: { x: 220, y: 300 } };
  assert.equal(editor.connectionColor(positive, negative), DEFAULT_WIRE_COLOR);
  assert.equal(editor.connectionColor(negative, positive), DEFAULT_WIRE_COLOR);
  const added = connect(editor, positive, negative);
  assert.equal(added.color, DEFAULT_WIRE_COLOR);
  for (const existing of editor.project.wires.filter(item => item.id !== added.id)) {
    assert.equal(existing.color, existing.id === 'positive' || existing.to.partId === 'load'
      ? SUPPLY_WIRE_COLOR : GROUND_WIRE_COLOR);
  }
  assert.ok(messages.some(message => message.includes('ground and a positive supply')));
});

test('saved/manual colors change only on explicit recolor or automatic reset, including after reconnect', () => {
  const { editor } = workspace({ wires: [wire('manual', signal, contact)] });
  const original = editor.project;
  assert.equal(editor.reconnectWire('manual', 'from', source, endpointPositions(original), wireRoute), true);
  assert.equal(editor.wire.id, 'manual');
  assert.equal(editor.wire.color, '#8b5cc7');
  assert.equal(editor.resetWireColor(), true);
  assert.equal(editor.wire.color, SUPPLY_WIRE_COLOR);
  editor.step('undo');
  assert.equal(editor.wire.color, '#8b5cc7');
  editor.setWireColor('#12946d');
  assert.equal(editor.wire.color, '#12946d');
  const saved = parseProject(serializeProject(editor.project));
  editor.replace(saved);
  assert.equal(editor.project.wires[0].color, '#12946d');
});

test('deletion and undo refresh continuity rather than retaining a removed supply connection', () => {
  const { editor } = workspace({
    wires: [wire('supply', source, contact), wire('tail', contact, signal)],
  });
  assert.equal(editor.connectionColor(signal), SUPPLY_WIRE_COLOR);
  editor.select('wire', 'supply');
  editor.removeSelection();
  assert.equal(editor.connectionColor(signal), DEFAULT_WIRE_COLOR);
  assert.equal(editor.project.wires[0].color, '#8b5cc7');
  editor.step('undo');
  assert.equal(editor.connectionColor(signal), SUPPLY_WIRE_COLOR);
  editor.step('redo');
  assert.equal(editor.connectionColor(signal), DEFAULT_WIRE_COLOR);
});

test('invalid/stale anchors cannot crash creation or leave a draft after its part is deleted', () => {
  const { editor, history } = workspace();
  const original = editor.project;
  for (const endpoint of [null, pin('missing', '1'), pin('board', 'missing'),
    { wireId: 'missing', point: { x: 0, y: 0 } }, { wireId: 'missing', point: { x: NaN, y: 0 } }]) {
    assert.equal(editor.beginWire(endpoint), false);
    assert.equal(editor.activateEndpoint(endpoint), false);
    assert.equal(editor.project, original);
    assert.equal(history.canUndo, false);
  }
  editor.beginWire(source);
  assert.equal(editor.activateEndpoint(pin('missing', '1')), false);
  assert.deepEqual(editor.pending.from, source);
  editor.select('part', 'board');
  editor.removeSelection();
  assert.equal(editor.pending, null);
  editor.addBend({ x: 0, y: 0 });
  editor.step('undo');
  assert.equal(editor.project, original);
});

test('power inference notices mutable project changes rather than reusing a previous net', () => {
  const project = {
    ...newProject(), parts: [part('board', 'esp32-s3'), part('load')], wires: [],
  };
  assert.equal(automaticWireColor(project, contact), DEFAULT_WIRE_COLOR);
  project.wires.push(wire('power', ground, contact));
  assert.equal(automaticWireColor(project, contact), GROUND_WIRE_COLOR);
  project.wires = [wire('power', source, contact)];
  assert.equal(automaticWireColor(project, contact), SUPPLY_WIRE_COLOR);
});
