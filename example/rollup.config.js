import svelte from 'rollup-plugin-svelte'
import serve from 'rollup-plugin-serve'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-postcss'

export default {
	input: 'index.js',
	output: {
    format: 'es',
    name: 'app',
    dir: 'build'
  },
  plugins: [
    resolve(),
    commonjs(),
    css(),
    svelte(),
    serve({
      contentBase: '.',
      port: process.env.PORT || 10001
    })
  ]
}
