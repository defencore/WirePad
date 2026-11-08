import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-peripherals/manifest.js';

export default defineFamily('modules-dfrobot-peripherals', specs.map(sourceModule));
