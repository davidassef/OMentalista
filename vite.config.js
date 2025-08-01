import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/OMentalista/' : '/'
  
  return {
    plugins: [react()],
    base,
  server: {
    port: 3000,
    open: true
  },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  }
})