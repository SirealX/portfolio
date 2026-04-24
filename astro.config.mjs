// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cesarluna-dev.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n:{
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing:{
      prefixDefaultLocale: true,
      fallbackType: 'redirect'
    }
  },
  redirects: {
    '/': '/en/'
  }
});
