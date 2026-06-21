# Jishnu Jayaraj — Portfolio

Personal developer portfolio for **Jishnu Jayaraj**, Machine Learning Engineer (Nürnberg, Germany).

🔗 **Live:** [jishnujayaraj.netlify.app](https://jishnujayaraj.netlify.app/)

A clean, editorial single-page site with an interactive Three.js hero, light/dark theme,
a generated CV, and a working contact form. All content is driven from a single data file.

---

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Astro 5](https://astro.build) (static output) |
| Interactive bits | React 19 islands |
| 3D / animation | [Three.js](https://threejs.org) via [@react-three/fiber](https://r3f.docs.pmnd.rs) v9 |
| Language | TypeScript |
| Styling | Plain CSS with CSS custom properties (no framework) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
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
│   │   └── Base.astro     # <head>, fonts, SEO/OG meta, theme bootstrap
│   ├── components/
│   │   ├── Nav.astro          # Sticky nav + theme toggle
│   │   ├── Hero.astro         # Hero section (hosts the 3D canvas)
│   │   ├── HeroCanvas.tsx     # Three.js particle sphere (React island)
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
│       └── global.css     # Design tokens (light/dark) + shared styles
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

- Light + dark themes via CSS variables in [`src/styles/global.css`](src/styles/global.css)
  (`:root` and `:root[data-theme='dark']`).
- The theme is chosen before paint (no flash) in `Base.astro`, toggled in `Nav.astro`,
  and persisted to `localStorage`.
- The Three.js particles read the active theme and recolor live.
- Accent color: `#2f6f5e` (light) / `#5ed3b0` (dark).

## The 3D hero

`src/components/HeroCanvas.tsx` renders a rotating particle sphere that drifts toward the
cursor. Notes for future edits:

- It is mounted with **`client:load`** (in `Hero.astro`). Do **not** switch to
  `client:visible` — it failed to hydrate reliably with this layout.
- The geometry is built **imperatively** (`new THREE.BufferGeometry()`), which is more
  robust than declarative `<bufferAttribute>` across three/R3F versions.
- It is disabled for `prefers-reduced-motion` users and hidden below 860px (mobile),
  so it never blocks load or drains battery.

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
