import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-gas/manifest.js';

export default defineFamily('modules-dfrobot-gas', specs.map(sourceModule));
