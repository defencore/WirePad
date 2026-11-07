import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { request } from 'node:http';
import { access, mkdir, mkdtemp, readFile, readdir, rm, symlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { buildSite } from '../scripts/build-site.mjs';
import { createDevServer } from '../scripts/serve.mjs';
import { assetDirectory, repositoryRoot, rewriteAssetURLs, withinDirectory } from '../scripts/site-assets.mjs';

async function temporary(t) {
  const root = await mkdtemp(join(tmpdir(), 'wirepad-static-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

async function filesUnder(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(filename));
    else files.push(filename);
  }
  return files;
}

function get(port, path, method = 'GET') {
  return new Promise((resolve, reject) => {
    const req = request({ hostname: '127.0.0.1', port, path, method }, response => {
      const parts = [];
      response.on('data', part => parts.push(part));
      response.on('end', () => resolve({ status: response.statusCode, headers: response.headers, body: Buffer.concat(parts).toString('utf8') }));
    });
    req.on('error', reject);
    req.end();
  });
}

test('asset rewriting preserves HTML structure, CSS order and unrelated links in both namespaces', () => {
  const html = `<link href="./style.css"><link href='./src/ui/first.css'><link href="./src/ui/second.css?v=1">\n<script type="module" src="./src/main.js"></script><img src="./favicon.svg#icon">\n<a href="./">Home</a><a href="#canvas">Canvas</a><a href="https://example.org/src/main.js">Docs</a><img data-src="./src/example.png">`;
  for (const revision of ['local', 'abc123']) {
    const rewritten = rewriteAssetURLs(html, revision);
    assert.equal(rewritten.replaceAll(`./assets/${revision}/`, './'), html);
    assert.equal(rewriteAssetURLs(rewritten, revision), rewritten);
    assert.match(rewritten, new RegExp(`href='\\./assets/${revision}/src/ui/first\\.css'`));
    assert.match(rewritten, /data-src="\.\/src\/example\.png"/);
    assert.ok(rewritten.indexOf('first.css') < rewritten.indexOf('second.css'));
  }
  for (const revision of ['', '.', '..', '../escape', 'bad/revision', 'bad%2Frevision', 'two words']) {
    assert.throws(() => assetDirectory(revision), /one URL segment/);
  }
});

test('production command builds only the versioned public assets with working module and CSS paths', async t => {
  const temporaryRoot = await temporary(t), output = join(temporaryRoot, 'site');
  const command = fileURLToPath(new URL('../scripts/build-site.mjs', import.meta.url));
  const result = spawnSync(process.execPath, [command, output, 'smoke-revision'], { encoding: 'utf8', cwd: tmpdir() });
  assert.equal(result.status, 0, result.stderr);
  const sourceHTML = await readFile(join(repositoryRoot, 'index.html'), 'utf8');
  const html = await readFile(join(output, 'index.html'), 'utf8');
  assert.equal(html.replaceAll('./assets/smoke-revision/', './'), sourceHTML);
  const assets = join(output, 'assets/smoke-revision');
  for (const name of ['style.css', 'favicon.svg']) {
    assert.deepEqual(await readFile(join(assets, name)), await readFile(join(repositoryRoot, name)));
  }
  for (const name of ['CNAME', '.nojekyll']) assert.deepEqual(await readFile(join(output, name)), await readFile(join(repositoryRoot, name)));
  assert.deepEqual((await readdir(output)).sort(), ['.nojekyll', 'CNAME', 'assets', 'index.html']);
  let imports = 0;
  for (const filename of await filesUnder(join(assets, 'src'))) {
    if (!filename.endsWith('.js')) continue;
    const code = await readFile(filename, 'utf8');
    for (const [, specifier] of code.matchAll(/(?:\bfrom\s*|\bimport\s*)['"](\.[^'"]+)['"]/g)) {
      const imported = resolve(dirname(filename), specifier);
      assert.ok(withinDirectory(assets, imported), `${filename}: ${specifier}`);
      await access(imported);
      imports++;
    }
  }
  assert.ok(imports > 100, 'The complete browser module graph is checked.');
  const css = await readFile(join(assets, 'style.css'), 'utf8');
  const paths = [...css.matchAll(/@import\s+url\(['"](.+?)['"]\)/g)].map(([, path]) => path);
  assert.ok(paths.length > 1);
  for (const path of paths) await access(resolve(assets, path));
  const again = spawnSync(process.execPath, [command, output, 'next-revision'], { encoding: 'utf8' });
  assert.equal(again.status, 1);
  assert.match(again.stderr, /must be empty/);
  assert.equal(await readFile(join(output, 'index.html'), 'utf8'), html);
});

test('builder rejects unsafe revisions and source destinations before changing files', async t => {
  const root = await temporary(t);
  await mkdir(join(root, 'src'));
  await writeFile(join(root, 'index.html'), '<script src="./src/main.js"></script>');
  await writeFile(join(root, 'src/main.js'), 'export const fixture = true;');
  await writeFile(join(root, 'style.css'), 'body {}');
  await writeFile(join(root, 'favicon.svg'), '<svg/>');
  for (const output of [root, dirname(root), join(root, 'src'), join(root, 'src/nested')]) {
    await assert.rejects(buildSite(output, 'test', { root }), /separate from the source tree/);
  }
  const output = join(root, 'output');
  await assert.rejects(buildSite(output, '../escape', { root }), /one URL segment/);
  await assert.rejects(access(output), { code: 'ENOENT' });
  await buildSite(output, 'test', { root });
  assert.deepEqual((await readdir(output)).sort(), ['assets', 'index.html']);
});

test('development HTTP server shares rewriting, serves uncached imports/CSS and blocks path escapes', async t => {
  const directory = await temporary(t), root = join(directory, 'source');
  await mkdir(join(root, 'src/ui'), { recursive: true });
  const html = '<link href="./style.css"><script src="./src/main.js"></script><img src="./favicon.svg">';
  await writeFile(join(root, 'index.html'), html);
  await writeFile(join(root, 'src/main.js'), "import './ui/widget.js';");
  await writeFile(join(root, 'src/ui/widget.js'), 'export const widget = true;');
  await writeFile(join(root, 'style.css'), '@import url("./src/ui/style.css");');
  await writeFile(join(root, 'src/ui/style.css'), 'body { color: teal; }');
  await writeFile(join(root, 'favicon.svg'), '<svg xmlns="http://www.w3.org/2000/svg"/>');
  await writeFile(join(directory, 'secret.js'), 'outside the public root');
  await symlink(join(directory, 'secret.js'), join(root, 'src/escape.js'));
  const server = createDevServer({ root });
  t.after(() => new Promise(resolve => server.close(resolve)));
  try {
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  } catch (error) {
    if (error.code !== 'EPERM' && error.code !== 'EACCES') throw error;
    t.skip('This environment does not permit localhost sockets.');
    return;
  }
  assert.equal(server.address().address, '127.0.0.1');
  const port = server.address().port;
  const index = await get(port, '/?preview=1');
  assert.equal(index.status, 200);
  assert.equal(index.body, rewriteAssetURLs(html, 'local'));
  assert.equal(index.headers['cache-control'], 'no-store, max-age=0');
  const head = await get(port, '/index.html', 'HEAD');
  assert.equal(head.body, '');
  assert.equal(Number(head.headers['content-length']), Buffer.byteLength(index.body));
  for (const [path, type, contents] of [
    ['/assets/local/src/main.js', 'text/javascript', "import './ui/widget.js';"],
    ['/assets/local/src/ui/widget.js', 'text/javascript', 'export const widget = true;'],
    ['/assets/local/style.css', 'text/css', '@import url("./src/ui/style.css");'],
    ['/assets/local/src/ui/style.css', 'text/css', 'body { color: teal; }'],
    ['/assets/local/favicon.svg', 'image/svg+xml', '<svg xmlns="http://www.w3.org/2000/svg"/>'],
    ['/src/main.js', 'text/javascript', "import './ui/widget.js';"],
  ]) {
    const response = await get(port, path);
    assert.equal(response.status, 200, path);
    assert.ok(response.headers['content-type'].startsWith(type), path);
    assert.equal(response.headers['cache-control'], 'no-store, max-age=0');
    assert.equal(response.body, contents);
  }
  for (const [path, status] of [
    ['/assets/local/src/%2e%2e/%2e%2e/secret.js', 403], ['/assets/local/src/escape.js', 403],
    ['/%zz', 400], ['/assets/local/src/%00bad.js', 400], ['/src/absent.js', 404],
    ['/.git/config', 404], ['/src/ui/', 404], ['/assets/old/src/main.js', 404],
  ]) assert.equal((await get(port, path)).status, status, path);
  const post = await get(port, '/', 'POST');
  assert.equal(post.status, 405);
  assert.equal(post.headers.allow, 'GET, HEAD');
  await writeFile(join(root, 'src/main.js'), 'export const edited = true;');
  assert.equal((await get(port, '/assets/local/src/main.js')).body, 'export const edited = true;');
});
