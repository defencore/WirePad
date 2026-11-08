import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-sensors/manifest.js';

export default defineFamily('modules-dfrobot-sensors', specs.map(sourceModule));
