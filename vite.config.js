import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve("appevents-ux", "index.html"),
        // nested: resolve(__dirname, "nested/index.html"),
      },
    },
  },
});
