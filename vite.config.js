import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {outDir: 'build'},
  base: '/NPK_test_task_vanilla/',
  server: {
    port: 5252,
  },
})
