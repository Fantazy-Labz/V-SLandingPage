import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Rutas relativas para servir desde un subpath de bucket GCS
  // (https://storage.googleapis.com/TU-BUCKET/)
  base: './',
  plugins: [react()],
})
