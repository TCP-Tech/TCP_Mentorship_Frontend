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
  },
  server: {
    proxy: {
      '/leetcode': {
        target: 'https://leetcode.com',
        changeOrigin: true, // Ensures the host header matches the target
        secure: true, // Ensures HTTPS is used
        rewrite: (path) => path.replace(/^\/leetcode/, '/graphql'), // Rewrite to /graphql
      },
    },
  },
  plugins: [react()],
});
