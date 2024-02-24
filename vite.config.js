import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { manifestForPlugin } from "./manifest";

export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugin),
    postcss({
      plugins: [autoprefixer],
      config: "./postcss.config.cjs",
    }),
  ],
  build: {
    sourcemap: true,
  },
  build: {
    rollupOptions: {
      plugins: [
        inject({
          process: "process",
        }),
      ],
    },
  },
});
