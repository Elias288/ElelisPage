// @ts-check
import { defineConfig } from 'astro/config';
import config from './src/utils/page_config'

// https://astro.build/config
export default defineConfig({
    site: "https://elias288.github.io/ElelisPage/",
    base: config.basePage,
    outDir: "public",
    publicDir: "static"
});
