// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import ("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: '.svelte-kit/cloudflare'
		})
	},
	// https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md#plugin-options
	vitePlugin: {
		inspector: {
			showToggleButton: 'always',
		}
	}
};

export default config;
