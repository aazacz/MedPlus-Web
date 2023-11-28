// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...

  server: {
    // Enable HMR (Hot Module Replacement)
    hmr: {
      overlay: true, // Show an overlay for runtime errors
    },
  },
});
