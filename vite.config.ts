// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-website/', // ✳️ غيّرها لاسم الريبو على GitHub Pages لو حابب
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // هذا السطر لحل مشكلة import لـ lucide-react
  },
});
