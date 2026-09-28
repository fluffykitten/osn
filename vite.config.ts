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
          const nid = id.replace(/\\/g, '/');
          if (nid.includes('node_modules/katex')) {
            return 'vendor-katex';
          }
          if (nid.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (nid.includes('node_modules/html2canvas') || nid.includes('node_modules/dompurify')) {
            return 'vendor-canvas';
          }
          if (nid.includes('node_modules/canvas-confetti')) {
            return 'vendor-confetti';
          }
          if (nid.includes('node_modules/@supabase')) {
            return 'vendor-supabase';
          }
          if (
            nid.includes('node_modules/react') ||
            nid.includes('node_modules/react-dom') ||
            nid.includes('node_modules/react-router')
          ) {
            return 'vendor-react';
          }
          if (nid.includes('src/data/materials/smaFaseE')) {
            return 'data-sma-materials-fase-e';
          }
          if (nid.includes('src/data/materials/smaFaseF1')) {
            return 'data-sma-materials-fase-f1';
          }
          if (nid.includes('src/data/materials/smaFaseF2')) {
            return 'data-sma-materials-fase-f2';
          }
          if (nid.includes('src/data/smaMaterialsData')) {
            return 'data-sma-materials-core';
          }
          if (nid.includes('src/data/materialsData')) {
            return 'data-osn-materials';
          }
          if (
            nid.includes('src/data/smaQuestionsData') ||
            nid.includes('src/data/smaQuestionsTopic2') ||
            nid.includes('src/data/smaQuestionsTopic3') ||
            nid.includes('src/data/smaQuestionsTopic4') ||
            nid.includes('src/data/smaQuestionsTopic5')
          ) {
            return 'data-sma-questions-fase-e';
          }
          if (
            nid.includes('src/data/smaQuestionsTopic6') ||
            nid.includes('src/data/smaQuestionsTopic7') ||
            nid.includes('src/data/smaQuestionsTopic8') ||
            nid.includes('src/data/smaQuestionsTopic9') ||
            nid.includes('src/data/smaQuestionsTopic10') ||
            nid.includes('src/data/smaQuestionsTopic11') ||
            nid.includes('src/data/smaQuestionsTopic12')
          ) {
            return 'data-sma-questions-fase-f1';
          }
          if (
            nid.includes('src/data/smaQuestionsTopic13') ||
            nid.includes('src/data/smaQuestionsTopic14') ||
            nid.includes('src/data/smaQuestionsTopic15') ||
            nid.includes('src/data/smaQuestionsTopic16')
          ) {
            return 'data-sma-questions-fase-f2';
          }
          if (nid.includes('src/data/oskQuestions')) {
            return 'data-osk-questions';
          }
          if (nid.includes('src/data/ospQuestions')) {
            return 'data-osp-questions';
          }
          if (nid.includes('src/data/osnQuestions')) {
            return 'data-osn-questions';
          }
          if (nid.includes('src/data/ichoQuestions')) {
            return 'data-icho-questions';
          }
        },
      },
    },
  },
})

