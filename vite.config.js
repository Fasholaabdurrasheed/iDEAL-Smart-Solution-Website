import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',   // ← This forces IPv4 only and bypasses the ::1 permission issue
    port: 5174,
  },
})
