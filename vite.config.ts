import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path, {resolve} from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          invisalign: resolve(__dirname, 'invisalign.html'),
          brackets: resolve(__dirname, 'brackets.html'),
          blanqueamiento: resolve(__dirname, 'blanqueamiento.html'),
        },
      },
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
