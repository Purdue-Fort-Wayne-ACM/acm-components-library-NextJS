import { defineConfig } from 'tsup';
export default defineConfig((options) => {
  return {
    entry: ["./src/index.ts"],
    format: ["esm", "cjs"],
    /*external: ['react', 'react-dom'],*/
    dts: false,
    sourcemap: false,
    splitting: true,
    metafile: true,
    onSuccess: "tsc --emitDeclarationOnly --declaration",
    minify: !options.watch
  }
});