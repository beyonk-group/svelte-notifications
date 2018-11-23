import svelte from 'rollup-plugin-svelte'
import pkg from './package.json'
import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import css from 'rollup-plugin-postcss'
import ts from 'rollup-plugin-typescript'

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const dev = process.env.NODE_ENV === 'development'

const plugins = [
	ts(),
	resolve(),
	commonjs(),
	css(),
	svelte({
		cascade: false,
		store: true
	})
]

if (dev) {
	plugins.push(
		serve()
	)
}

export default {
	input: 'src/Notifications.html',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	],
	plugins
}
