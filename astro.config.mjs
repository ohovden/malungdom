// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: 'viewport'
  },

  vite: {
      plugins: [tailwindcss()],
      server: {
        watch: {
          usePolling: true,
          interval: 300
        }
      }
  },

  integrations: [react()]
});