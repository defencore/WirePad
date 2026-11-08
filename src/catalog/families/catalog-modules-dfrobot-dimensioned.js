import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-dimensioned.js';

export default defineFamily('modules-dfrobot-dimensioned', specs.map(sourceModule));
