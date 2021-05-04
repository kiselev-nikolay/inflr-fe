import * as eva from '@eva-design/eva';

import { Purple } from './Purple';

let themes = new Map<string, any>();

themes.set("evadark", { ...eva.dark, ...Purple });
themes.set("evalight", { ...eva.light, ...Purple });

export default themes;