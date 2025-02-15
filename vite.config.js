import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/valentineday/", // Sesuai nama repo di GitHub
  plugins: [react()]
});
