import { configurationFor } from '../../catalog/index.js';

function breadboardSettings(config) {
  const rails = [['topRails', 'Top'], ['bottomRails', 'Bottom'], ['leftRails', 'Left'], ['rightRails', 'Right']];
  return `<details class="inspector-section breadboard-layout" open><summary><span>Breadboard layout</span><span>${config.rows} rows</span></summary>
    <form id="breadboard-settings" data-part-configuration="breadboard" class="breadboard-settings">
    <label>Terminal rows<input type="number" name="rows" min="1" max="100" step="1" value="${config.rows}" required></label>
    <div class="breadboard-terminal-fields">
      <label>Left terminal cells<input type="number" name="leftCells" min="1" max="10" step="1" value="${config.leftCells}" required></label>
      <label>Right terminal cells<input type="number" name="rightCells" min="1" max="10" step="1" value="${config.rightCells}" required></label>
    </div>
    <fieldset><legend>Power rails</legend><div class="breadboard-rail-fields">
      ${rails.map(([name, caption]) => `<label>${caption}<select name="${name}">${[0, 1, 2, 3, 4].map(count =>
        `<option value="${count}"${config[name] === count ? ' selected' : ''}>${count}</option>`).join('')}</select></label>`).join('')}
    </div></fieldset>
    <label class="breadboard-split"><input type="checkbox" name="splitRails"${config.splitRails ? ' checked' : ''}>Split each power rail at its midpoint</label>
    <p>Each terminal row connects the contacts on each side of the centre trench separately. Every power rail is independent. Split rails have two isolated halves.</p>
    <button type="submit" class="button" id="apply-breadboard">Apply layout</button>
  </form></details>`;
}

const providers = new Map([
  ['breadboard', {
    render: breadboardSettings,
    read(form) {
      const data = new FormData(form);
      const values = Object.fromEntries(['rows', 'leftCells', 'rightCells', 'topRails', 'bottomRails', 'leftRails', 'rightRails']
        .map(name => [name, Number(data.get(name))]));
      return { ...values, splitRails: data.has('splitRails') };
    },
  }],
]);

export function configurationMarkup(part, component) {
  const configuration = configurationFor(component.id);
  if (!configuration) return '';
  const provider = providers.get(configuration.key);
  if (!provider) throw new Error(`No configuration interface for ${configuration.key}.`);
  return provider.render(configuration.normalize(part[configuration.key]));
}

export function configurationValues(form) {
  const key = form.dataset.partConfiguration;
  const provider = providers.get(key);
  if (!provider) throw new Error(`No configuration interface for ${key}.`);
  return provider.read(form);
}

export function configurationSignature(part) {
  const configuration = configurationFor(part.componentId);
  return configuration ? JSON.stringify(part[configuration.key]) : '';
}
