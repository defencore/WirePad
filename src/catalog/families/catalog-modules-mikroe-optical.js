import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/optical/manifest.js';

export default defineFamily('modules-mikroe-optical', specs.map(sourceModule));
