import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://unb-cic.github.io',
  base: process.env.ASTRO_BASE || '/comnet_site',
  integrations: [tailwind()],
  output: 'static',
  trailingSlash: 'always'
});
