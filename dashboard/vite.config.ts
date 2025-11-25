import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/plantillas/',
  build: {
    outDir: '../public/plantillas',
    emptyOutDir: true,
  },
})
