import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ladolceisola-website-v2/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor'
            }
            if (id.includes('gsap') || id.includes('framer-motion')) {
              return 'animations'
            }
            if (id.includes('three') || id.includes('@react-three')) {
              return 'three'
            }
            if (id.includes('i18next')) {
              return 'i18n'
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    open: true,
  },
})
