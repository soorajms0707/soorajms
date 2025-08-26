import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: '/soorajms/',   // 👈 repo name
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } }
})
