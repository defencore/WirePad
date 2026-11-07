import { componentArt, modelFor } from '../../catalog/index.js';
import { kicadFootprint, kicadModel, kicadSymbol } from '../../assets/kicad.js';
import { footprintNote } from '../../assets/footprint-layout.js';
import { footprintPreview, modelPreview, symbolPreview } from '../../assets/previews.js';
import { icon } from '../icons.js';
import { escapeText } from '../../shared/text.js';

const assets = {
  symbol: {
    preview: symbolPreview, create: kicadSymbol, extension: 'kicad_sym',
    note: () => 'Add the symbol file to a KiCad symbol library. The associated footprint uses the WirePad library nickname.',
  },
  pcb: { preview: footprintPreview, create: kicadFootprint, extension: 'kicad_mod', note: footprintNote },
  model: {
    preview: modelPreview, create: kicadModel, extension: 'wrl',
    note: () => 'Approximate package or carrier geometry for placement. Store the model in the KiCad project’s WirePad.3dshapes folder.',
  },
};

export function assetFile(component, tab) {
  const { create, extension } = assets[tab];
  return { contents: create(component), filename: `${component.id}.${extension}` };
}

export function previewAsset(component, tab, { labels = true } = {}) {
  return tab === 'part' ? componentArt(component, { labels }) : assets[tab].preview(component);
}

export function sourceLink(url, label) {
  return `<a class="asset-source" href="${escapeText(url)}" target="_blank" rel="noopener noreferrer">${icon('external')} ${escapeText(label)}</a>`;
}

export function assetDetails(component, tab) {
  const { note, extension } = assets[tab];
  const model = tab === 'model' ? modelFor(component) : null;
  return `<p class="asset-note">${escapeText(note(component))}</p>
    <div class="asset-actions"><button class="button" type="button" data-asset="${tab}">${icon('download')} Download .${extension}</button></div>
    ${model ? sourceLink(model.url, model.label) : ''}
    <details class="asset-note asset-guide">
      <summary>Use this part in KiCad</summary>
      <ol>
        <li>Download the files from the <strong>Symbol</strong>, <strong>Footprint</strong> and <strong>3D</strong> tabs.</li>
        <li>Beside your project's <code>.kicad_pro</code> file, create <code>WirePad.pretty</code> for the <code>.kicad_mod</code> files and <code>WirePad.3dshapes</code> for the <code>.wrl</code> files.</li>
        <li>In the Schematic Editor, open <strong>Preferences → Manage Symbol Libraries → Project Specific Libraries</strong> and add the downloaded <code>.kicad_sym</code> file. Give each symbol library a unique nickname.</li>
        <li>In the PCB Editor, open <strong>Preferences → Manage Footprint Libraries → Project Specific Libraries</strong>. Add <code>WirePad.pretty</code> with the nickname <code>WirePad</code>.</li>
        <li>Place the symbol in your schematic, then choose <strong>Tools → Update PCB from Schematic</strong> in the PCB Editor. Check its pin numbers and pad positions against the exact part's documentation.</li>
        <li>Open <strong>View → 3D Viewer</strong>. For detailed geometry, select a matching manufacturer STEP file in <strong>Footprint Properties → 3D Models</strong> and check its scale, position and orientation.</li>
      </ol>
    </details>`;
}
