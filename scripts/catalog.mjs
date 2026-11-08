#!/usr/bin/env node
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { components, componentArt } from '../src/catalog/index.js';
import { catalogFamilies } from '../src/catalog/catalog-families.js';
import { validateComponent } from '../src/catalog/registry.js';
import { footprintLayout } from '../src/assets/footprint-layout.js';
import { terminalNumber } from '../src/model/component-pins.js';
import { syncCatalogTree } from './catalog-tree.mjs';
import { syncBreadboardAudit } from './breadboard-audit.mjs';

const padShapes = new Set(['circle', 'oval', 'rect', 'roundrect']);

export function validateContactMap(component, layout) {
  const terminals = new Map(component.pins.map((pin, index) => [pin.id, terminalNumber(pin, index)]));
  const covered = new Set();
  if (!Array.isArray(layout.pads) || !layout.pads.length) throw new Error('The footprint has no pads.');
  for (const pad of layout.pads) {
    if (!terminals.has(pad.id)) throw new Error(`Footprint pad refers to unknown contact "${pad.id}".`);
    if (pad.number !== terminals.get(pad.id)) throw new Error(`Contact "${pad.id}" has a mismatched footprint terminal number.`);
    if (![pad.x, pad.y, pad.width, pad.height].every(Number.isFinite) || pad.width <= 0 || pad.height <= 0) {
      throw new Error(`Contact "${pad.id}" has invalid footprint geometry.`);
    }
    if (!padShapes.has(pad.shape)) throw new Error(`Contact "${pad.id}" has unsupported pad shape "${pad.shape}".`);
    if (pad.smd ? pad.drill !== null : !Number.isFinite(pad.drill) || pad.drill <= 0) {
      throw new Error(`Contact "${pad.id}" has an invalid footprint drill.`);
    }
    if (!pad.smd && pad.drill >= Math.min(pad.width, pad.height)) {
      throw new Error(`Contact "${pad.id}" footprint drill must fit inside its copper pad.`);
    }
    if (pad.shape === 'roundrect' && (!Number.isFinite(pad.cornerRatio) || pad.cornerRatio < 0 || pad.cornerRatio > .5)) {
      throw new Error(`Contact "${pad.id}" has an invalid rounded-pad corner ratio.`);
    }
    covered.add(pad.id);
  }
  for (const id of terminals.keys()) if (!covered.has(id)) throw new Error(`Contact "${id}" has no footprint pad.`);
  return layout.pads.length;
}

function validateArtwork(component, labels) {
  const svg = componentArt(component, { labels });
  if (typeof svg !== 'string' || !svg.startsWith('<svg ') || !svg.endsWith('</svg>')) {
    throw new Error(`The ${labels ? 'labeled' : 'unlabeled'} artwork is not an SVG document.`);
  }
  if (/\b(?:NaN|Infinity|undefined)\b/.test(svg)) {
    throw new Error(`The ${labels ? 'labeled' : 'unlabeled'} artwork contains an invalid value.`);
  }
}

export function validateCatalog() {
  let contacts = 0, pads = 0;
  const errors = [];
  for (const component of components) {
    try {
      validateComponent(component);
      const anchors = new Set();
      for (const pin of component.pins) {
        const anchor = `${pin.x},${pin.y}`;
        if (anchors.has(anchor)) throw new Error(`Contact "${pin.id}" overlaps another canvas contact.`);
        anchors.add(anchor);
        if (!pin.surface && pin.x !== 0 && pin.x !== component.width && pin.y !== 0 && pin.y !== component.height) {
          throw new Error(`Contact "${pin.id}" is neither a surface contact nor on the drawing edge.`);
        }
      }
      validateArtwork(component, true);
      validateArtwork(component, false);
      pads += validateContactMap(component, footprintLayout(component));
      contacts += component.pins.length;
    } catch (error) {
      errors.push(new Error(`${component.id}: ${error.message}`));
    }
  }
  if (errors.length) throw new AggregateError(errors, errors.map(error => error.message).join('\n'));
  return { valid: true, families: catalogFamilies.length, components: components.length, contacts, pads, artworks: components.length * 2 };
}

async function main(args) {
  if (args.includes('--help')) {
    console.log('Usage: node scripts/catalog.mjs [--json]\nValidate every registered component, both SVG label modes, its pin-to-footprint map and individual breadboard audit coverage. Refresh generated component and audit documentation; --json checks freshness without writing.');
    return;
  }
  if (args.some(arg => arg !== '--json')) throw new Error('Usage: node scripts/catalog.mjs [--json]');
  const report = validateCatalog();
  await syncBreadboardAudit({ check: args.includes('--json') });
  await syncCatalogTree({ check: args.includes('--json') });
  console.log(args.includes('--json') ? JSON.stringify(report, null, 2) :
    `Catalog valid: ${report.families} families, ${report.components} components, ${report.contacts} contacts, ${report.pads} physical pads, ${report.artworks} SVG views.`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    await main(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
