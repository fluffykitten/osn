import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ensureStorageQuotaHealth } from './utils/storageQuotaManager'

// Bersihkan cache berbahaya/penuh sebelum render aplikasi
ensureStorageQuotaHealth()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
