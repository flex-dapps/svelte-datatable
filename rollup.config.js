import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
	entry: 'src/main.js',
	dest: 'public/app.js',
	format: 'iife',
	moduleName: 'app',
	sourceMap: true,
	plugins: [
		svelte({
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/app.css');
			},

			// this results in smaller CSS files
			cascade: true
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		// If we're building for production (npm run build
		// instead of npm run dev), transpile and minify
		production && buble({ exclude: 'node_modules/**' }),
		production && uglify()
	]
};

// import * as fs from 'fs';
// import svelte from 'rollup-plugin-svelte';
// import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
// import buble from 'rollup-plugin-buble';
// import uglify from 'rollup-plugin-uglify';
// import CleanCSS from 'clean-css';
// import babel from 'rollup-plugin-babel';

// const production = !!process.env.production;
// // console.log('production: ', production);

// export default {
// 	entry: 'src/main.js',
// 	dest: 'public/app.js',
// 	format: 'iife',
// 	moduleName: 'app',
// 	sourceMap: false,
// 	plugins: [
// 		// If you have external dependencies installed from
// 		// npm, you'll most likely need these plugins. In
// 		// some cases you'll need additional configuration —
// 		// consult the documentation for details:
// 		// https://github.com/rollup/rollup-plugin-commonjs
// 		resolve(),
// 		commonjs(),

// 		svelte({
// 			// we'll extract any component CSS out into
// 			// a separate file — better for performance
// 			css ( css ) {
// 				if ( css === null ) css = '';
// 				if ( production ) css = new CleanCSS().minify( css ).styles;
// 				fs.writeFileSync(
// 					'public/app.css',
// 					`/* This file is automatically generated — don't edit it! */\n${css}`
// 				);
// 			}
// 		}),
		
// 		// If we're building for production (npm run build
// 		// instead of npm run dev), transpile and minify
// 		production && babel({ exclude: 'node_modules/**' }),
// 		production && buble({ exclude: 'node_modules/**' }),
// 		production && uglify()
// 	]
// };
