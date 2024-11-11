import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import svelte from '@astrojs/svelte'
import vercel from '@astrojs/vercel/serverless'
// https://astro.build/config
export default defineConfig({
  site: 'https://book-money-power.vercel.app',
  output: 'static',
  integrations: [
    svelte(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    compress({
      img: false,
    }),
  ],
})
