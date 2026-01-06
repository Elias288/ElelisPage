// @ts-check
import { defineConfig } from 'astro/config';
import config from './src/utils/page_config'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://elias288.github.io",
  base: `/${config.basePage}`,
  outDir: "public",
  publicDir: "static",
  integrations: [mdx()]
});