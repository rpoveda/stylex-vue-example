import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleX from 'vite-plugin-stylex'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleX()],
})
