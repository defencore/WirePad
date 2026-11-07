#!/usr/bin/env node
import { cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assetDirectory, publicAssets, repositoryRoot, rewriteAssetURLs, withinDirectory } from './site-assets.mjs';

export async function buildSite(outdir, revision, { root = repositoryRoot } = {}) {
  const assets = assetDirectory(revision);
  if (typeof outdir !== 'string' || !outdir.trim()) throw new Error('Choose an output directory.');
  root = resolve(root);
  outdir = resolve(outdir);
  if (withinDirectory(outdir, root) || withinDirectory(resolve(root, 'src'), outdir)) {
    throw new Error('The output directory must be separate from the source tree and its parent directories.');
  }
  const html = rewriteAssetURLs(await readFile(resolve(root, 'index.html'), 'utf8'), revision);
  await mkdir(outdir, { recursive: true });
  if ((await readdir(outdir)).length) throw new Error('The output directory must be empty.');
  const destination = resolve(outdir, assets);
  await mkdir(destination, { recursive: true });
  for (const name of publicAssets) await cp(resolve(root, name), resolve(destination, name), { recursive: true, force: false, errorOnExist: true });
  await writeFile(resolve(outdir, 'index.html'), html, { flag: 'wx' });
  for (const name of ['CNAME', '.nojekyll']) {
    try {
      await cp(resolve(root, name), resolve(outdir, name), { force: false, errorOnExist: true });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  return { outdir, revision, assets };
}

async function main(args) {
  if (args.includes('--help')) {
    console.log('Usage: node scripts/build-site.mjs <outdir> <revision>\nBuild the static site in a new or empty directory with one versioned asset namespace.');
    return;
  }
  if (args.length !== 2) throw new Error('Usage: node scripts/build-site.mjs <outdir> <revision>');
  const result = await buildSite(args[0], args[1]);
  console.log(`Built WirePad in ${result.outdir} using ${result.assets}/.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
