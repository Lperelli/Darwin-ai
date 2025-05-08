import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'contexts': path.resolve(__dirname, './src/contexts'),
      'types': path.resolve(__dirname, './src/types'),
      'constants': path.resolve(__dirname, './src/constants'),
      'i18n': path.resolve(__dirname, './src/i18n'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'index.html'),
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  server: {
    port: 5173,
    strictPort: false,
    origin: 'http://localhost:5173',
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true
    },
    hmr: {
      overlay: true,
      clientPort: 5173,
      host: 'localhost'
    }
  }
});