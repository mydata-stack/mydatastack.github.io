import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: 'https://mydatastack.tech',
    output: 'static',
    outDir: 'docs',
    integrations: [react(), tailwind(), robotsTxt(
        {
            sitemap: 'https://mydatastack.tech/sitemap.xml'
        }
    )]
});