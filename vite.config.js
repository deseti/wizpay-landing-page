import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://wizpay.xyz',
      dynamicRoutes: ['/features', '/pricing', '/blog'],
      changefreq: 'weekly',
      priority: { '/': 1.0, '*': 0.8 },
      readable: true,
      generateRobotsTxt: false,
    }),
  ],
})
