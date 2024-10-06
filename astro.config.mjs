import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

export default defineConfig({
    site: 'https://mydata-stack.github.io',
    output: 'static',
    outDir: 'docs',
    integrations: [react(), tailwind(), robotsTxt(
        {
            sitemap: 'https://mydata-stack.github.io/sitemap.xml'
        }
    )]
});