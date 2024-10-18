import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      "/api": {
        target: "null",
        changeOrigin: true,
      },
    },
  },
});
