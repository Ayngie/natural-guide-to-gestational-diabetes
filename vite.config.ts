import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/natural-guide-to-gestational-diabetes/',
  plugins: [react()],
})
