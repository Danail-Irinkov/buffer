import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
	input: 'index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'umd',
		name: 'Buffer',
		// globals: {'@webassemblyjs/wasm-parser': 'wasmParser'},
	},
	// external: ['@webassemblyjs/wasm-parser'], // <-- suppresses the warning
	plugins: [commonjs(), nodeResolve(), json()]
};
