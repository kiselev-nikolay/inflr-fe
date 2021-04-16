import * as eva from '@eva-design/eva';

import { Sun } from './Sun';

let themes = new Map<string, any>();

themes.set("evadark", { ...eva.dark, ...Sun });
themes.set("evalight", { ...eva.light, ...Sun });

export default themes;