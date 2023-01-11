import { build } from 'esbuild';
import { derver } from 'derver';
import svelte from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';
import { eslintPlugin } from 'esbuild-plugin-eslinter';
import prepare from './prepare.js';
import copy from './copy.js';
import html from './html.js';

const DEV = process.argv.includes('--dev');

prepare().then(() => {
	build({
		bundle: true,
		entryPoints: ['src/main.ts'],
		outfile: 'dist/build/bundle.js',
		write: DEV,
		minify: !DEV,
		incremental: DEV,
		sourcemap: DEV && 'inline',
		loader: { '.png': 'dataurl' },
		loader: { '.svg': 'text' },
		legalComments: 'none',
		logLevel: 'debug',
		mainFields: [
			'svelte',
			'browser',
			'module',
			'main'
		],
		plugins: [
			svelte({
				compileOptions: {
					dev: DEV,
					css: false,
					immutable: true,
					legacy: false
				},
				preprocess: [
					preprocess({
						sourceMap: DEV,
						typescript: true,
						scss: {
							prependData: `
							$primary-color: #5755d9 !default;
							$secondary-color: lighten($primary-color, 37.5%) !default;
							$dark-color: #303742 !default;
							$gray-color: lighten($dark-color, 55%) !default;
							$gray-color-dark: darken($gray-color, 30%) !default;
							$gray-color-light: lighten($gray-color, 20%) !default;
							$highlight-color: #ffe9b3 !default;
							$dark-secondary: #343a51;
						`,
							quietDeps: true, // dismiss version 2.0 warning
							renderSync: true // improve perfomance
						},
					})
				]

			}),
			eslintPlugin(),
			copy([
				{ from: './src/assets/img/', to: '../assets/img' },
			]),
			html({ in: 'src/index.html', out: 'dist/index.html', dev: DEV }),
		]

	}).then(bundle => {
		DEV && derver({
			dir: 'dist',
			host: 'localhost',
			port: 5556,
			watch: ['dist', 'src'],
			onwatch: async (lr, item) => {
				if (item == 'src') {
					lr.prevent();
					bundle.rebuild().catch(err => lr.error(err.message, 'Svelte compile error'));
				}
			}
		});
	}).catch(e => console.log(e.errors));
});
