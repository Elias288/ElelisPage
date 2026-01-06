// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://elias288.github.io",
  base: "/ElelisPage",
  outDir: "public",
  publicDir: "static",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "dracula",
    }
  }
});