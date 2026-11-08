import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/sensing/manifest.js';

export default defineFamily('modules-mikroe-sensing', specs.map(sourceModule));
