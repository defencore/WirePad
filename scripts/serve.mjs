#!/usr/bin/env node
import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { extname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { devAssetPrefix, repositoryRoot, rewriteAssetURLs, withinDirectory } from './site-assets.mjs';

const contentTypes = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

function respond(request, response, status, contents, type = 'text/plain; charset=utf-8') {
  const body = Buffer.isBuffer(contents) ? contents : Buffer.from(contents);
  response.writeHead(status, { 'Content-Type': type, 'Content-Length': body.length });
  response.end(request.method === 'HEAD' ? undefined : body);
}

async function serveRequest(request, response, root) {
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    respond(request, response, 405, 'Method not allowed.');
    return;
  }
  let path;
  try {
    path = decodeURIComponent(request.url.split(/[?#]/, 1)[0]);
  } catch {
    respond(request, response, 400, 'Invalid URL.');
    return;
  }
  if (!path.startsWith('/') || path.includes('\0') || path.includes('\\')) {
    respond(request, response, 400, 'Invalid URL.');
    return;
  }
  if (path.split('/').some(segment => segment === '..' || segment === '.')) {
    respond(request, response, 403, 'Path is outside the public site.');
    return;
  }
  const index = path === '/' || path === '/index.html';
  const relative = index ? 'index.html' : path.startsWith(devAssetPrefix) ? path.slice(devAssetPrefix.length) : path.slice(1);
  if (!index && !relative.startsWith('src/') && !['style.css', 'favicon.svg', 'CNAME', '.nojekyll'].includes(relative)) {
    respond(request, response, 404, 'File not found.');
    return;
  }
  const base = await root;
  const filename = await realpath(resolve(base, relative));
  if (!withinDirectory(base, filename)) {
    respond(request, response, 403, 'Path is outside the public site.');
    return;
  }
  if (!(await stat(filename)).isFile()) {
    respond(request, response, 404, 'File not found.');
    return;
  }
  const contents = await readFile(filename);
  respond(request, response, 200, index ? rewriteAssetURLs(contents.toString('utf8'), 'local') : contents,
    contentTypes[extname(filename)] ?? 'application/octet-stream');
}

export function createDevServer({ root = repositoryRoot } = {}) {
  const base = realpath(resolve(root));
  return createServer((request, response) => {
    serveRequest(request, response, base).catch(error => {
      if (response.destroyed) return;
      response.setHeader('Cache-Control', 'no-store, max-age=0');
      respond(request, response, error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 404 : 500,
        error.code === 'ENOENT' || error.code === 'ENOTDIR' ? 'File not found.' : 'The file could not be served.');
    });
  });
}

async function main(args) {
  if (args.includes('--help')) {
    console.log('Usage: node scripts/serve.mjs [port]\nServe WirePad on 127.0.0.1 with uncached /assets/local/ files. Default port: 8080.');
    return;
  }
  const port = args.length ? Number(args[0]) : 8080;
  if (args.length > 1 || !/^\d+$/.test(args[0] ?? '8080') || !Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error('Choose a port from 0 to 65535. Usage: node scripts/serve.mjs [port]');
  }
  const server = createDevServer();
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(port, '127.0.0.1', resolve);
  });
  console.log(`WirePad: http://127.0.0.1:${server.address().port}/`);
  for (const signal of ['SIGINT', 'SIGTERM']) process.once(signal, () => server.close());
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
