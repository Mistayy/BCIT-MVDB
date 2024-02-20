import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base: '/wizlen-movieDB/',
  build: {
    outDir: 'wizlen-movieDB'
  },
  plugins: [reactRefresh()],
})
