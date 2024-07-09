// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/web-components.js',
    format: 'esm',
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: false,
      inject: false,
      minimize: true,
      use: [
        ['sass', {
          includePaths: ['./src/styles']
        }]
      ]
    }),
    litcss(),
    terser(),
  ],
};
