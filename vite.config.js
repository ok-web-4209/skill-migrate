import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  // Keep built asset URLs relative so PR previews and subpath deploys load correctly.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
