import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    }
  ],
  plugins: [
    typescript(),
    postcss({
      extract: true,         // 👉 This writes the CSS to dist/index.css
      minimize: true,        // Optional: minify CSS
      sourceMap: true,
    }),
  ],
  external: ['react', 'react-dom'], // Don't bundle peer deps
};
