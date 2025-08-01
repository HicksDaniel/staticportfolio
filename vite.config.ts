import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const mode = process.env.NODE_ENV || "development";
import path from "path";

export default defineConfig({
  base: mode === "development" ? "/" : "/staticportfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
