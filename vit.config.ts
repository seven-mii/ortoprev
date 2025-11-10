import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // A propriedade 'base' é crucial para o GitHub Pages,
  // pois o aplicativo é servido a partir do subdiretório /ortoprev/
  base: '/ortoprev/',
  plugins: [react( )],
})
