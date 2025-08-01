import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const mode = process.env.NODE_ENV || "development";
import { resolve } from "path";

export default defineConfig({
  base: mode === "development" ? "/" : "/staticportfolio/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "404": resolve(__dirname, "public/404.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("three")) return "three";
            if (id.includes("primereact")) return "primereact";
            return "vendor";
          }
        },
      },
    },
  },
});
