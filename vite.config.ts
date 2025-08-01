import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const mode = process.env.NODE_ENV || "development";

export default defineConfig({
  base: mode === "development" ? "/" : "/staticportfolio/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
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
