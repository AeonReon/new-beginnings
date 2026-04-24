# New Beginnings

A first-principles guide for home-educating a four-year-old. Parent-facing, offline-capable PWA.

## Run locally

No build step. Any static server works:

```bash
cd APPS/new-beginnings
python3 -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080.

## Install as an app

Open the site in Chrome, Edge, or Safari → address bar → "Install app" (desktop) or "Add to Home Screen" (iOS/Android).

## Deploy (AeonReon / aeonreon)

1. Create GitHub repo under AeonReon called `new-beginnings`
2. Push this folder
3. Import to Vercel (aeonreon team)
4. Framework preset: "Other" (static site), output directory: `./`
5. No environment variables needed

## Structure

```
/
├── index.html            Compass — philosophy, first principles
├── compare.html          What different traditions do at age 4
├── rhythm.html           Six daily-rhythm templates
├── feast.html            This week's poem/hymn/composer/virtue/nature
├── resources.html        Filterable directory of ~70 resources
├── keeping.html          Narration log, habits, photos, observations
├── manifest.json         PWA manifest
├── sw.js                 Service worker (offline cache)
├── icon.svg              App icon
├── assets/
│   ├── style.css
│   ├── app.js            Shared nav + PWA registration
│   ├── feast-data.js     52-week rotation
│   ├── resources-data.js ~70 resources
│   ├── methodologies-data.js
│   └── rhythms-data.js
├── CONCEPT.md            Design doc
├── CLAUDE.md             Project rules
├── project.txt           Workspace metadata
└── research/             Research dossier (source for all content)
```

## Philosophy

See `CONCEPT.md` for the design frame and `research/` for the evidence base. The short version: at age four, most of what's worth doing is free play, living books, time outdoors, rhythm, real work, and the quiet formation of attention, truthfulness, and obedience. This app is a guide, not a curriculum — it shows the parent what a generous, unhurried year at four can look like, and tells them *why* each practice matters.
