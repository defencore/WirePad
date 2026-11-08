import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-mikroe/motion/manifest.js';

export default defineFamily('modules-mikroe-motion', specs.map(sourceModule));
