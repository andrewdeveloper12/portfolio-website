import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-website/', // 👈 اسم الريبو هنا مهم جداً
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
