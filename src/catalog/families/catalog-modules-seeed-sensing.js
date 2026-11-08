import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-seeed-sensing/manifest.js';

export default defineFamily('modules-seeed-sensing', specs.map(sourceModule));
