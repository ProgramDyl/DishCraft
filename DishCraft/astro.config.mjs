    // @ts-check
    import { defineConfig } from 'astro/config';
    import mdx from '@astrojs/mdx';
    import sitemap from '@astrojs/sitemap';
    // 1. Import the Node adapter
    import node from "@astrojs/node";

    // https://astro.build/config
    export default defineConfig({
        site: 'https://example.com',
        integrations: [mdx(), sitemap()],
        // 2. Set the output mode to 'server'
        output: 'server', // Changed from 'hybrid'
        // 3. Add the adapter
        adapter: node({
            mode: "standalone" // or "middleware" depending on your needs
        }),
    });
