import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize font loading
    rollupOptions: {
      output: {
        // Create separate chunks for better caching
        manualChunks: {
          'lucide-icons': ['lucide-react'],
        },
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Enable CSS code splitting for better performance
    cssCodeSplit: true,
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    // Enable HTTP/2 for better font loading performance
    http2: true,
  },
});