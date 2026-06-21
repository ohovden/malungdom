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
      plugins: [tailwindcss(),
        {
          name: 'fix-ordinals',
          transform(code, id) {
            if (id.endsWith('.md')) {
              //return code.replace(/^(\d{1,2})\.(\s)/gm, '$1\\.$2')
              return code.replace('har', 'hev')
            }
          }
        }
      ],
      server: {
        watch: {
          usePolling: true,
          interval: 300
        }
      }
  },

  integrations: [react()]
});