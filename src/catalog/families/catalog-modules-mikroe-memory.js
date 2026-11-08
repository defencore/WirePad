import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/memory/manifest.js';

export default defineFamily('modules-mikroe-memory', specs.map(sourceModule));
