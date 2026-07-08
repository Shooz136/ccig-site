import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const site =
  process.env.PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://clarioncig.org";
const sitemapLastModified = new Date();

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith("/preview/"),
      lastmod: sitemapLastModified,
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
