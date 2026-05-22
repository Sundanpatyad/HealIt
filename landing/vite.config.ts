import path from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  resolve: {
    alias: {
      '@app-svg': path.resolve(root, '../src/icons/svg'),
      '@theme': path.resolve(root, '../src/theme'),
    },
  },
  server: {
    port: 3333,
    fs: { allow: ['..'] },
  },
  publicDir: path.resolve(root, '../assets'),
});
