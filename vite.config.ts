import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // The prerenderer reads this to emit a <link rel="modulepreload"> for each
    // guide's cluster chunk, so splitting the guides out of the main bundle
    // costs the reader no extra round trip.
    manifest: true,
  },
})
