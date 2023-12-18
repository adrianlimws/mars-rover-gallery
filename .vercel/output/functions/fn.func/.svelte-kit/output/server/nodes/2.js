

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4UyUCxuw.js","_app/immutable/chunks/scheduler.8MFi5quF.js","_app/immutable/chunks/index.OWfZCg7l.js"];
export const stylesheets = [];
export const fonts = [];
