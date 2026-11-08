import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/controls/manifest.js';

export default defineFamily('modules-mikroe-controls', specs.map(sourceModule));
