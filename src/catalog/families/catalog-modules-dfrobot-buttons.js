import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-buttons.js';

export default defineFamily('modules-dfrobot-buttons', specs.map(sourceModule));
