
import path from 'path';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config();

const { PORT = 3000 } = process.env;

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {

      input: './src/main.jsx',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust the alias as per your project structure
      '@client': path.resolve(__dirname, 'src/client'),
      '@user': path.resolve(__dirname, 'user'), // Corrected the alias for user

    },
  },
});
