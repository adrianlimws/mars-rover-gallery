

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6aolxWLe.js","_app/immutable/chunks/scheduler.8MFi5quF.js","_app/immutable/chunks/index.OWfZCg7l.js","_app/immutable/chunks/singletons.ZDeXY4AI.js","_app/immutable/chunks/index.45SccIgp.js"];
export const stylesheets = [];
export const fonts = [];
