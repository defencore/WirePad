import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-seeed-source.js';

export default defineFamily('modules-seeed-source', specs.map(sourceModule));
