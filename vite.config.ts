import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/main.ts",
      name: "helphub-wdiget",
      formats: ["umd"],
      fileName: (format) => `helphub-widget.${format}.js`,
    },
    rollupOptions: {
      // Ensure to externalize dependencies that you don't want to bundle
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
