import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/storage': {
        target: 'https://osn.icmadani.workers.dev',
        changeOrigin: true,
        secure: true,
      },
      '/api/notify': {
        target: 'https://osn.icmadani.workers.dev',
        changeOrigin: true,
        secure: true,
      },
      '/notify': {
        target: 'https://osn.icmadani.workers.dev',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/katex')) {
            return 'vendor-katex';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/html2canvas') || id.includes('node_modules/dompurify')) {
            return 'vendor-canvas';
          }
          if (
            id.includes('node_modules/react') ||
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react-router')
          ) {
            return 'vendor-react';
          }
          if (id.includes('src/data/smaMaterialsData')) {
            return 'data-sma-materials';
          }
          if (id.includes('src/data/smaQuestions')) {
            return 'data-sma-questions';
          }
          if (id.includes('src/data/syllabusData') || id.includes('src/data/materialsData')) {
            return 'data-osn-materials';
          }
        },
      },
    },
  },
})

