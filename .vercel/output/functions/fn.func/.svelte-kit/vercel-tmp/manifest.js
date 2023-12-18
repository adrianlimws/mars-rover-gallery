export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.v5PUNRrx.js","app":"_app/immutable/entry/app.A-OGESIn.js","imports":["_app/immutable/entry/start.v5PUNRrx.js","_app/immutable/chunks/scheduler.8MFi5quF.js","_app/immutable/chunks/singletons.KBL7RMet.js","_app/immutable/chunks/index.45SccIgp.js","_app/immutable/entry/app.A-OGESIn.js","_app/immutable/chunks/scheduler.8MFi5quF.js","_app/immutable/chunks/index.OWfZCg7l.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/curiosity",
				pattern: /^\/curiosity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/opportunity",
				pattern: /^\/opportunity\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/spirit",
				pattern: /^\/spirit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
