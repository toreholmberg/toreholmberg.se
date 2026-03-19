# toreholmberg.se

Personal resume/portfolio site. Single-page, no framework.

## Stack

- Single `index.html` with inline CSS
- [Fira Mono](https://fonts.google.com/specimen/Fira+Mono) via Google Fonts
- Deployed to [Cloudflare Pages](https://pages.cloudflare.com/)

## Development

Open `index.html` directly in a browser — no build step needed for local work.

## Build & Deploy

```sh
pnpm build    # minifies index.html → dist/
pnpm deploy   # build + deploy to Cloudflare Pages
```

The build copies `public/` (favicons, manifests) into `dist/` alongside the minified HTML.
