import { defineFamily } from '../registry.js';
import { sourceModule } from '../shared/modules-source-board.js';
import specs from '../data/modules-dfrobot-native.js';

export default defineFamily('modules-dfrobot-native', specs.map(sourceModule));
