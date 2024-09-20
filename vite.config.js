import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ImageHaven_React/',  // Add this line to specify the base path for GitHub Pages
  plugins: [react()],
})
