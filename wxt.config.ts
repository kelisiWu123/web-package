import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    plugins: [react()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  }),
  manifest: {
    name: 'React Dev Nav',
    description: 'A navigation extension for React developers',
    version: '1.0.0',
    permissions: ['storage', 'tabs'],
    action: {
      default_popup: 'popup.html',
      default_icon: 'icons/icon.svg',
    },
    icons: {
      '128': 'icons/icon.svg',
    },
  },
})
