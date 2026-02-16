import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/Pablo-s/", // nazwa repozytorium na GitHub Pages
  plugins: [react()],
})
