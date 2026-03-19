# Claude Instructions — toreholmberg.se

## Project overview

Single-page personal resume for Tore Holmberg. One source file: `index.html`.
No framework, no bundler, no JS. Inline CSS only.

## File structure

```
index.html        source — human-readable, edit this
public/           static assets (favicons, manifest, browserconfig)
dist/             build output — do not edit, gitignored
build.js          does not exist — build is a package.json one-liner
```

## Build

```sh
pnpm build    # html-minifier-terser → dist/index.html + copies public/
pnpm deploy   # build + wrangler pages deploy ./dist
```

## CSS conventions

The stylesheet uses a two-layer design token system:

- **Layer 1 — Primitives**: raw values (`--gray-400`, `--space-6`, `--text-sm`)
- **Layer 2 — Semantic**: meaningful aliases (`--color-text-muted`, `--page-padding-x`)

Component styles reference semantic tokens only, never primitives directly.

## HTML conventions

Generic, reusable class names — no content-specific names like `.role` or `.edu-*`:

- `.group` — wraps multiple entries under one company/institution heading
- `.entry` — a single item (role, school)
- `.entry-header` — flex row: label left, dates right
- `.title` — group heading or standalone entry heading
- `.subtitle` — secondary label within an entry header
- `.dates` — right-aligned date range
- `.desc` — description text below an entry header
- `.location` — inline location span inside a `.title`
- `.section-label` — uppercase section divider
- `.summary` — introductory paragraph

## Editing guidelines

- Keep it simple. No animations, no JS, no frills.
- The source file should always be readable and well-formatted.
- Only `dist/index.html` is minified — never minify the source.
- Do not add new dependencies without a good reason.
