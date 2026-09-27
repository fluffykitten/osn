import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ensureStorageQuotaHealth } from './utils/storageQuotaManager'
import { initClientErrorCollector } from './utils/clientErrorCollector'

// Bersihkan cache berbahaya/penuh sebelum render aplikasi
ensureStorageQuotaHealth()
// Aktifkan pencatatan log error kontekstual untuk sistem bug report
initClientErrorCollector()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
