# Testing Static Site

This repository now uses the Astroship theme as the base for a static Astro site.

## Stack

- Astro 5
- Tailwind CSS 4
- MDX content collections
- Static output for Cloudflare Pages

## Local Development

```bash
pnpm install
pnpm dev
```

Other useful commands:

```bash
pnpm build
pnpm preview
```

## Cloudflare Pages

This project builds as a static site. In Cloudflare Pages, use:

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`

Set this environment variable in Cloudflare Pages so canonical URLs, sitemap URLs, and `robots.txt` use the correct production domain:

```bash
PUBLIC_SITE_URL=https://your-domain.example
```

If you do not have a custom domain yet, you can use your Pages hostname instead:

```bash
PUBLIC_SITE_URL=https://testing-static-site.pages.dev
```

For lightweight draft previews on the live site, also set:

```bash
PREVIEW_TOKEN=choose-a-long-random-string
```

## Notes

- `astro.config.mjs` falls back to `https://testing-static-site.pages.dev` if `PUBLIC_SITE_URL` is not set.
- `src/pages/robots.txt.ts` generates `robots.txt` dynamically from the configured site URL.
- The upstream Astroship demo URLs and promotional links were removed so they do not leak into production SEO or navigation.

## Pages CMS

This repo now includes a starter Pages CMS config in `.pages.yml`.

- `site` maps to `src/config/site.json`
- `theme` maps to `src/config/theme.json`
- `blog` maps to `src/content/blog`
- `team` maps to `src/content/team`
- `pages` maps to `src/content/pages`
- uploaded media goes to `public/uploads`

The theme file controls a semantic token set for fonts and colors. It is meant for brand styling only, not layout changes.
The current font picker offers a curated list of common options, including Bricolage, Inter, System UI, Helvetica, Arial, Georgia, Times New Roman, Garamond, Palatino, Trebuchet MS, Verdana, Tahoma, and Courier New.

The `blog` collection intentionally excludes `src/content/blog/kitchensink.mdx` because it contains MDX-specific imports and components that are safer to maintain manually than through a CMS editor.

Nested files inside `src/content/pages` become nested URLs and dropdown navigation items. Parent pages can live as `index.md` nodes inside folders. For example, `src/content/pages/solutions/index.md` renders at `/solutions`, while `src/content/pages/solutions/implementation.md` renders at `/solutions/implementation`.

The `blog` collection uses Pages CMS's `rich-text` editor. The `pages` collection now uses a block-based section builder with `hero`, `text`, `image_text`, and `cta` blocks so non-technical editors can assemble pages without editing Astro templates directly.
The homepage now reads from `src/content/pages/home.md`, using the same block-based system as the rest of the editable pages. Additional homepage-focused blocks currently include `feature_grid` and `logo_cloud`.

## Draft Preview URLs

Draft entries are still excluded from normal page and blog routes. For lightweight previewing on the live site, use tokenized preview URLs:

- pages: `/preview/about?token=YOUR_PREVIEW_TOKEN`
- nested pages: `/preview/solutions/implementation?token=YOUR_PREVIEW_TOKEN`
- blog posts: `/preview/blog/complete-guide-fullstack-development?token=YOUR_PREVIEW_TOKEN`

These preview routes only render when the `token` query param matches `PREVIEW_TOKEN`.
