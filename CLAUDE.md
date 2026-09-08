# Conscious Parenting NI — Project Rules

_(formerly "New Beginnings" — renamed 2026-07-17. Folder stays `new-beginnings/` to avoid breaking the repo/deploy paths.)_

Parent-facing home-education guide PWA for a 4-year-old. Standalone project.

## Philosophy — read this first

`philosophy/` holds the thinking behind this app, the wider app pack and Light
School. `philosophy/raw/` is the user's own words, verbatim and dated — **the raw
dumps are the source of truth for intent**; the numbered files are the worked-out
version, and if the two disagree the raw dump wins.

Add any new brain dump as `philosophy/raw/YYYY-MM-DD-slug.md` the moment it is
said, verbatim. Copy gets written straight out of these, so the phrasing is half
the value.

The two rules that constrain everything: **this is not a home-schooling app**
(`02-not-homeschool.md`) and **no copy may read as a verdict on another family's
choice**. The positioning is **excellence, not struggle** (`04-excellence.md`) —
and it is made by naming the gap, never by naming the people in it.

## Voice and content filter

**First-principles** is the governing rule. Every practice shipped in the app has a short "why" written in plain language — not "because tradition says," not "because CM says," not "because the Bible says." Give the actual developmental, philosophical, or observational reason. Christian, Greek, Roman, and modern sources are drawn on as tested traditions; none is cited as unexamined authority.

If a claim can't be grounded in something a reasoning parent could test against their own experience or against published evidence, rewrite it or cut it.

## Scope discipline

- **No child-facing UI.** No points, stars, gamification, or anything a 4-year-old would use. The app is for the parent.
- **No grades, percentiles, or "behind" language.** Progress is observation, not scoring.
- **No AI chatbot.** Content is curated so the voice stays coherent.
- **One child, age 4, in v1.** Multi-child later.
- **Local-first.** No account, no cloud, no sign-in. localStorage only.

## Stack

- Plain HTML, CSS, vanilla JS. No build step.
- Data files are plain JS modules (`assets/*-data.js`) so content is version-controlled.
- PWA via `manifest.json` and `sw.js` at the root.
- Deploy: GitHub AeonReon → Vercel aeonreon (static site).

## Adding content

- New resource → append to `assets/resources-data.js`
- New feast week → edit `assets/feast-data.js`
- New methodology → edit `assets/methodologies-data.js`
- New rhythm template → edit `assets/rhythms-data.js`

Keep entries short and first-principles-grounded. If you can't state the "why" in one sentence, the entry isn't ready.

## Research

The four research markdown files under `research/` are the source of truth for any content questions. If anything in the app contradicts them, either update the research or the app — don't leave the two out of sync.
