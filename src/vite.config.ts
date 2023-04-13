import { defineConfig } from 'vite'
import path from 'path'
import dts from 'vite-plugin-dts'
const name = 'astro-tigris'

export default defineConfig(() => {
  return {
    plugins: [dts()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.ts"),
        name: "astro-tigris",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      }
    },
  }
})