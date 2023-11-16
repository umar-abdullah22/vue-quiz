import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@Component': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@Data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },
});
