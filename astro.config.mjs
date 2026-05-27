// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    // Add the server proxy configuration here
    server: {
      proxy: {
        '/api-senave': {
          target: 'https://senave2026.fincreativo.com',
          changeOrigin: true,
          secure: false,
          // This rewrites '/api-senave' to '' so it matches the external API structure
          rewrite: (path) => path.replace(/^\/api-senave/, ''),
        }
      }
    }
  },

  adapter: vercel(),
  integrations: [react()]
});
