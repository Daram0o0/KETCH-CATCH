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
  resolve: {
    alias: {
      api: "/src/api",
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      slices: "/src/slices",
      store: "/src/store",
      styles: "/src/styles",
      types: "/src/types",
      hooks: "/src/hooks",
      services: "/src/services",
      utils: "/src/utils",
    },
  },
});
