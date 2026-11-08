import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-seeed-practical/manifest.js';

export default defineFamily('modules-seeed-practical', specs.map(sourceModule));
