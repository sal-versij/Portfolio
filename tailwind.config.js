import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [],
	theme: {
		extend: {},
		container: {
			center: true,
		},
	},
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	darkMode: 'class',
});
