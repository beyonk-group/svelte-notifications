import svelte from 'rollup-plugin-svelte'
import pkg from './package.json'
import serve from 'rollup-plugin-serve'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-postcss'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

const dev = process.env.NODE_ENV === 'development'

const plugins = [
  resolve(),
  commonjs(),
  css(),
  svelte()
]

if (dev) {
  plugins.push(
    serve({
      contentBase: '.',
      port: process.env.PORT || 10001
    })
  )
}

export default {
  input: 'src/Notifications.svelte',
  output: [
    { file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name }
  ],
  plugins
}
