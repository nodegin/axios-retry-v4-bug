import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

export default defineConfig({
  server: {
    port: 5173,
    hmr: true,
  },
  build: {
    reportCompressedSize: false,
    ssr: './src/main.ts',
    rollupOptions: {
      input: './src/main.ts',
      output: [
        {
          format: 'cjs',
          minifyInternalExports: false,
        },
      ],
      treeshake: false,
    },
  },
  plugins: [swc.vite(), tsconfigPaths()],
});
