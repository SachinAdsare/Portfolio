import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/Port/", // Replace 'Port' with your GitHub repository name
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
