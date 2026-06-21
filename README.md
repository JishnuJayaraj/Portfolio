# Jishnu Jayaraj — Portfolio

Personal developer portfolio for **Jishnu Jayaraj**, Machine Learning Engineer (Nürnberg, Germany).

🔗 **Live:** [jishnujayaraj.netlify.app](https://jishnujayaraj.netlify.app/)

A clean, editorial single-page site with a warm off-white aesthetic, a cursor-tracked
gradient hero, smooth scroll-reveal animations, a generated CV, and a working contact
form. All content is driven from a single data file.

---

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Astro 5](https://astro.build) (static output, zero client JS framework) |
| Interactivity | Tiny inline vanilla JS (cursor parallax, scroll-reveal) |
| Animation | Pure CSS gradients + transforms, `IntersectionObserver` reveals |
| Language | TypeScript |
| Styling | Plain CSS with CSS custom properties (no framework) |
| Fonts | Hanken Grotesk + JetBrains Mono (Google Fonts) |
| Contact form | [Netlify Forms](https://docs.netlify.com/forms/setup/) |
| Hosting / CI | Netlify (auto-deploy from GitHub `master`) |

---

## Project structure

```
.
├── astro.config.mjs       # Astro + React integration
├── netlify.toml           # Build command, publish dir, headers
├── public/                # Static assets served as-is (favicon, etc.)
├── src/
│   ├── data/
│   │   └── profile.ts     # ⭐ SINGLE SOURCE OF TRUTH — all content lives here
│   ├── layouts/
│   │   └── Base.astro     # <head>, fonts, SEO/OG meta, scroll-reveal observer
│   ├── components/
│   │   ├── Nav.astro          # Sticky nav
│   │   ├── Hero.astro         # Hero section + cursor-tracked gradient aurora
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro      # Netlify Forms contact form
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro    # Home (assembles all sections)
│   │   ├── cv.astro       # Print-ready CV, generated from profile.ts
│   │   └── thanks.astro   # Contact form success page
│   └── styles/
│       └── global.css     # Design tokens (warm off-white) + shared styles
└── README.md
```

---

## Local development

> **Note:** this repo lives in WSL. Run all `npm`/`git` commands **inside WSL**
> (e.g. `wsl -d ubuntu bash -lc '…'`). The Windows `npm` fails on the `\\wsl.localhost\…`
> UNC path.

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

Node 20+ is required (Netlify uses Node 20, pinned in `netlify.toml`).

---

## Editing content

**All text, links, skills, experience, education, and projects come from
[`src/data/profile.ts`](src/data/profile.ts).** Edit that one file and both the
site and the `/cv` page update automatically — there is no other place to change copy.

- **Tagline:** `profile.tagline` (alternatives kept in `taglineAlternatives`).
- **Social links:** `profile.links` (GitHub, LinkedIn, Twitter/X, email).
- **Projects:** `profile.projects[]`. Current entries are realistic **placeholders**
  (`placeholder: true` renders a "Sample" badge). Replace `links.github` / `links.demo`
  (`'#'`) with real URLs and flip `placeholder` to `false` as projects ship.

---

## Theming

- Single **warm off-white + ink** theme (light-only) via CSS variables in
  [`src/styles/global.css`](src/styles/global.css) (`:root`).
- Calm, editorial palette: bone background (`--bg`), near-black ink text (`--text`),
  ink primary buttons (`--accent`), and a restrained warm clay for links (`--link`).
  A soft pastel set (`--aur-1…4`) feeds the hero aurora only.
- `color-scheme: light` is set so native form controls stay light.

## The hero aurora

The hero background ([`src/components/Hero.astro`](src/components/Hero.astro)) is a set of
soft, blurred radial-gradient blobs that slowly drift (CSS keyframes) and ease toward the
cursor. Notes for future edits:

- It's **pure CSS + a tiny inline script** — no Three.js, no React. The script just lerps
  two CSS custom properties (`--mx` / `--my`) toward the pointer inside a `requestAnimationFrame`
  loop; the blobs read them for a parallax drift.
- A left-to-right `--bg` gradient (`.hero-grain`) keeps the headline readable over the color.
- Cursor parallax is disabled for `prefers-reduced-motion` users and simplified below 860px
  (mobile), so it never blocks load or drains battery.

---

## CV

The CV is **not a static file** — `/cv` is generated from `profile.ts` so it can never go
out of sync. "Download PDF" uses the browser's print-to-PDF (`window.print()`) with
print-specific CSS. It intentionally contains **only** the alias email and city
(no phone number or address).

---

## Contact form

Uses **Netlify Forms** — no backend. The form in `Contact.astro` carries
`data-netlify="true"` + a honeypot field; Netlify detects it at deploy time and captures
submissions, then redirects to `/thanks`.

**One-time setup in the Netlify dashboard** (not in code):
Site → **Forms** → confirm the `contact` form is listed → **Form notifications** →
add a notification email. Optionally enable reCAPTCHA for spam protection.

---

## Deployment

- Hosted on **Netlify**, auto-deploying from the **`master`** branch of
  `github.com/JishnuJayaraj/Portfolio` (public).
- Build is driven by [`netlify.toml`](netlify.toml): `npm run build`, publish `dist/`,
  Node 20, plus basic security + caching headers.
- **To deploy:** commit and push to `master` — Netlify rebuilds automatically.

```bash
git add -A
git commit -m "your message"
git push origin master
```

---

## License

Personal project. Site content © Jishnu Jayaraj. Code is free to reference.
