import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const scripts = fileURLToPath(new URL('../scripts/', import.meta.url));
const python = process.env.WIREPAD_CAD_PYTHON ?? 'python3';
const probe = spawnSync(python, ['-c', 'import sys; print(sys.version_info.major)'], { encoding: 'utf8' });

function available(t, dxf = false) {
  if (probe.error?.code === 'ENOENT') {
    t.skip('Python 3 is optional and is only needed for CAD preparation tools.');
    return false;
  }
  assert.equal(probe.status, 0, probe.error?.message ?? probe.stderr);
  assert.equal(probe.stdout.trim(), '3');
  if (dxf) {
    const dependencies = spawnSync(python, ['-c', 'import ezdxf; from shapely import set_precision'], { encoding: 'utf8' });
    if (dependencies.status !== 0) {
      t.skip('The optional DXF preparation tests require ezdxf and Shapely 2.');
      return false;
    }
  }
  return true;
}

async function temporary(t) {
  const directory = await mkdtemp(join(tmpdir(), 'wirepad-importer-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

const wire = (x1, y1, x2, y2, curve = 0) => `<wire x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" curve="${curve}" layer="20"/>`;
const cap = reverse => wire(-5, 0, 5, 0) + wire(5, 0, 5, 10) + wire(-5, 10, -5, 0)
  + (reverse ? wire(-5, 10, 5, 10, -180) : wire(5, 10, -5, 10, 180));

function board(outline, packageOutline = '', rotation = 'R0') {
  return `<eagle><drawing><board><plain>${outline}</plain><libraries><library name="L"><packages>
    <package name="HEADER"><pad name="1" x="0" y="0" drill="1"/>${packageOutline}</package>
    </packages></library></libraries><elements><element name="J1" library="L" package="HEADER" x="0" y="5" rot="${rotation}"/></elements>
    <signals><signal name="GND"><contactref element="J1" pad="1"/></signal></signals></board></drawing></eagle>`;
}

async function importEagle(directory, source, suffix) {
  const input = join(directory, `${suffix}.brd`), metadata = join(directory, `${suffix}.json`), output = join(directory, `${suffix}-result.json`);
  await writeFile(input, source);
  await writeFile(metadata, JSON.stringify({ id: 'fixture', name: 'Geometry fixture' }));
  const command = spawnSync(python, [join(scripts, 'import-module-eagle.py'), input, '--metadata', metadata, '--connectors', 'J1', '--output', output], { encoding: 'utf8' });
  assert.equal(command.status, 0, command.stderr);
  return JSON.parse(await readFile(output, 'utf8'));
}

test('EAGLE board bounds include curved extrema in either contour direction', async t => {
  if (!available(t)) return;
  const directory = await temporary(t);
  for (const reverse of [false, true]) {
    const result = await importEagle(directory, board(cap(reverse)), `cap-${reverse}`);
    assert.deepEqual([result.spec.board.width, result.spec.board.height], [10, 15]);
    assert.deepEqual([result.spec.contacts[0].x, result.spec.contacts[0].y], [0, 2.5]);
    assert.match(result.spec.board.outline, /A5\.0 5\.0/);
    assert.ok(result.spec.board.outline.endsWith('Z'));
  }
});

test('EAGLE package outlines preserve curved bounds after rotation and mirroring', async t => {
  if (!available(t)) return;
  const result = await importEagle(await temporary(t), board('', cap(false), 'MR90'), 'mirrored');
  assert.deepEqual([result.spec.board.width, result.spec.board.height], [15, 10]);
  assert.deepEqual([result.spec.contacts[0].x, result.spec.contacts[0].y], [-7.5, 0]);
  assert.ok(result.spec.board.outline.endsWith('Z'));
});

test('EAGLE major arc bounds include every swept cardinal extremum', t => {
  if (!available(t)) return;
  const command = spawnSync(python, ['-c', 'import json,sys; sys.path.insert(0,sys.argv[1]); from eagle_geometry import wire_bounds; print(json.dumps([wire_bounds([[0,0,10,0,c]]) for c in [270,-270]]))', scripts], { encoding: 'utf8' });
  assert.equal(command.status, 0, command.stderr);
  const [positive, negative] = JSON.parse(command.stdout);
  const radius = Math.sqrt(50);
  for (const [actual, expected] of [
    [positive, [5 - radius, -5 - radius, 5 + radius, 0]],
    [negative, [5 - radius, 0, 5 + radius, 5 + radius]],
  ]) actual.forEach((value, index) => assert.ok(Math.abs(value - expected[index]) < 1e-9));
});

test('DXF preparation rejects invalid reviewed dimensions, conversion and endpoint-grid overrides', async t => {
  if (!available(t, true)) return;
  const directory = await temporary(t), input = join(directory, 'rectangle.dxf');
  const fixture = spawnSync(python, ['-c', 'import ezdxf,sys; d=ezdxf.new(); d.header["$INSUNITS"]=4; d.modelspace().add_lwpolyline([(0,0),(10,0),(10,5),(0,5)],close=True); d.saveas(sys.argv[1])', input], { encoding: 'utf8' });
  assert.equal(fixture.status, 0, fixture.stderr);
  for (const [option, message] of [
    ['--unit-scale=0', /unit_scale must/], ['--unit-scale=-1', /unit_scale must/], ['--unit-scale=nan', /unit_scale must/],
    ['--size=-1,5', /expected_size must/], ['--size=10,inf', /expected_size must/],
    ['--bounds=0,0,0,5', /bounds must/], ['--bounds=0,0,inf,5', /bounds must/],
    ['--bounds=0,0,10', /bounds must/], ['--endpoint-grid=-1', /endpoint_grid must/], ['--endpoint-grid=nan', /endpoint_grid must/],
  ]) {
    const command = spawnSync(python, [join(scripts, 'import-module-dxf.py'), input, option, '--output', join(directory, 'invalid.json')], { encoding: 'utf8' });
    assert.notEqual(command.status, 0, option);
    assert.match(command.stderr, message, option);
  }
  const output = join(directory, 'valid.json');
  const valid = spawnSync(python, [join(scripts, 'import-module-dxf.py'), input, '--size=10,5', '--unit-scale=1', '--output', output], { encoding: 'utf8' });
  assert.equal(valid.status, 0, valid.stderr);
  const result = JSON.parse(await readFile(output, 'utf8'));
  assert.deepEqual([result.board.width, result.board.height], [10, 5]);
});
