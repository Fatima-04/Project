import path from "path";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";

dotenv.config();

const { SERVER_PORT = 3000 } = process.env;

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: `http://localhost:${SERVER_PORT}`,
        changeOrigin: true,
      },
      "/auth": {
        target: `http://localhost:${SERVER_PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    // manifest: true,
    // rollupOptions: {
    //   input: './src/main.jsx',
    // },
    outDir: "../dist/app",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Adjust the alias as per your project structure
      "@client": path.resolve(__dirname, "src/client"),
      "@user": path.resolve(__dirname, "user"), // Corrected the alias for user
    },
  },
});
