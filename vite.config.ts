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
    chunkSizeWarningLimit: 1500,
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
          if (id.includes('node_modules/canvas-confetti')) {
            return 'vendor-confetti';
          }
          if (id.includes('node_modules/@supabase')) {
            return 'vendor-supabase';
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
          if (id.includes('src/data/materialsData')) {
            return 'data-osn-materials';
          }
          if (
            id.includes('src/data/smaQuestionsData') ||
            id.includes('src/data/smaQuestionsTopic2') ||
            id.includes('src/data/smaQuestionsTopic3') ||
            id.includes('src/data/smaQuestionsTopic4') ||
            id.includes('src/data/smaQuestionsTopic5')
          ) {
            return 'data-sma-questions-fase-e';
          }
          if (
            id.includes('src/data/smaQuestionsTopic6') ||
            id.includes('src/data/smaQuestionsTopic7') ||
            id.includes('src/data/smaQuestionsTopic8') ||
            id.includes('src/data/smaQuestionsTopic9') ||
            id.includes('src/data/smaQuestionsTopic10') ||
            id.includes('src/data/smaQuestionsTopic11') ||
            id.includes('src/data/smaQuestionsTopic12')
          ) {
            return 'data-sma-questions-fase-f1';
          }
          if (
            id.includes('src/data/smaQuestionsTopic13') ||
            id.includes('src/data/smaQuestionsTopic14') ||
            id.includes('src/data/smaQuestionsTopic15') ||
            id.includes('src/data/smaQuestionsTopic16')
          ) {
            return 'data-sma-questions-fase-f2';
          }
          if (id.includes('src/data/oskQuestions')) {
            return 'data-osk-questions';
          }
          if (id.includes('src/data/ospQuestions')) {
            return 'data-osp-questions';
          }
          if (id.includes('src/data/osnQuestions')) {
            return 'data-osn-questions';
          }
          if (id.includes('src/data/ichoQuestions')) {
            return 'data-icho-questions';
          }
        },
      },
    },
  },
})

