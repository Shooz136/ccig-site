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

## Notes

- `astro.config.mjs` falls back to `https://testing-static-site.pages.dev` if `PUBLIC_SITE_URL` is not set.
- `src/pages/robots.txt.ts` generates `robots.txt` dynamically from the configured site URL.
- The upstream Astroship demo URLs and promotional links were removed so they do not leak into production SEO or navigation.
