import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    proxy: {
      "/api": {
       target: "http://localhost:5000",
       secure: false,
       changeOrigin: true,
    },
    },
  },
  plugins: [react()]
})

// http://localhost:5000/api/vinyl is now fetch('/api/vinyl')