import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // Matches your GitHub repository name
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
