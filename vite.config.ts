import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      api: "/src/api",
      assets: "/src/assets",
      components: "/src/components",
      pages: "/src/pages",
      slices: "/src/slices",
      store: "/src/store",
      styles: "/src/styles",
      types: "/src/tyles",
      hooks: "/src/hooks",
      services: "/src/services",
      utils: "/src/utils",
    },
  },
});
