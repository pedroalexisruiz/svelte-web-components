import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src']
  },
  postcss: {
    plugins: [require('autoprefixer')]
  }
});
const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/index.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name }
  ],
  plugins: [terser(), svelte({ customElement: true, preprocess }), resolve()]
};
