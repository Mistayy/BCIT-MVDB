import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/movie-wizlen/',
  build: {
    outDir: 'movie-wizlen'
  },
  plugins: [reactRefresh()],
})
