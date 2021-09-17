import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
    https: true,
    open: '/src/index.js',
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    sourcemap: true,
    rollupOptions: {
      external: /^lit-element/,
    },
  },
});
