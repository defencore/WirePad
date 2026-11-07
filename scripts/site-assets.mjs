import { isAbsolute, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

export const repositoryRoot = fileURLToPath(new URL('../', import.meta.url));
export const devAssetPrefix = '/assets/local/';
export const publicAssets = ['src', 'style.css', 'favicon.svg'];

export function assetDirectory(revision) {
  if (typeof revision !== 'string' || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,119}$/.test(revision)) {
    throw new Error('The revision must be one URL segment using letters, numbers, dots, underscores or hyphens.');
  }
  return `assets/${revision}`;
}

export function rewriteAssetURLs(html, revision) {
  const prefix = `./${assetDirectory(revision)}/`;
  return html.replace(/(\s(?:src|href)\s*=\s*)(["'])\.\/(src\/[^"'<>]*|style\.css(?:[?#][^"'<>]*)?|favicon\.svg(?:[?#][^"'<>]*)?)\2/gi,
    (_, attribute, quote, path) => `${attribute}${quote}${prefix}${path}${quote}`);
}

export function withinDirectory(root, filename) {
  const path = relative(root, filename);
  return !isAbsolute(path) && path !== '..' && !path.startsWith(`..${sep}`);
}
