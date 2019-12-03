import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import sveltePreprocess from 'svelte-preprocess';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import typescriptCompiler from 'typescript';

const preprocess = sveltePreprocess({
  scss: {
    includePaths: ['src'],
  },
  postcss: {
    plugins: [require('autoprefixer')],
  },
});

const plugins = [
  terser(),
  svelte({ customElement: true, preprocess }),
  typescript({ typescript: typescriptCompiler }),
  resolve(),
];

export default [
  {
    input: 'src/sura-loading/index.svelte',
    output: [
      { file: 'dist/bundle-sura-loading.mjs', format: 'es' },
      {
        file: 'dist/bundle-sura-loading.js',
        format: 'umd',
        name: 'bundle-sura-loading.js',
      },
    ],
    plugins,
  },
];
