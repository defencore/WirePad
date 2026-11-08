import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/interfaces/manifest.js';

export default defineFamily('modules-mikroe-interfaces', specs.map(sourceModule));
