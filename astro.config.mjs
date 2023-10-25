import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// External dependencies
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://samuh.dev',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: cloudflare()
});