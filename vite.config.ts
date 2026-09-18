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
})

