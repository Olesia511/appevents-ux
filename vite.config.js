import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import webfontDownload from "vite-plugin-webfont-dl";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    webfontDownload(["https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"]),
  ],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      pages: "/src/pages",
      assets: "/src/assets",
    },
  },
  base: "/appevents-ux",
});
