import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, 
        drop_debugger: true, 
      },
    },
    // rollupOptions: {
    //   external: ['devtools-detector'], 
    // },
  },
  server: {
    proxy: {
      '/leetcode': {
        target: 'https://leetcode.com',
        changeOrigin: true, 
        secure: true, 
        rewrite: (path) => path.replace(/^\/leetcode/, '/graphql'), 
      },
    },
  },
  plugins: [react()],
});
