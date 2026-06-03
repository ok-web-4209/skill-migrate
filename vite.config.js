import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = dirname(fileURLToPath(import.meta.url));
const htmlEntries = Object.fromEntries(
  readdirSync(rootDir)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace(/\.html$/, ''), resolve(rootDir, file)])
);

export default defineConfig({
  root: '.',
  // Keep built asset URLs relative so PR previews and subpath deploys load correctly.
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: htmlEntries
    }
  }
});
