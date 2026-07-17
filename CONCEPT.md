# Conscious Parenting NI — App Concept

A parent-facing home-education guide PWA for a child who has just turned four. Standalone project. Not integrated with Aha! or any other app.

## The first-principles filter

The core commitment, stated by the parent directly:

> Get to the root of why we're doing things rather than dogmatic unknown and unprovable things. Which happens in religious and non-religious education.

So **every practice in the app has a short "why"**. Not "because Charlotte Mason says so" or "because the Bible says so" — the actual developmental, philosophical, or observational reason. Christian sources are drawn on freely as part of a tested tradition; so are Greek, Roman, and modern sources. None are cited as unexamined authority.

This is the distinctive voice the app must maintain. It's what makes the app useful to a thinking parent who wants neither modern-utility schooling nor unreflective traditionalism.

## What the parent asked for

- A full resource of places to pull knowledge, skills, daily activities, milestones
- Comparison of what different schools/homeschool groups do at a given age
- A learning plan rooted in the best available information
- Goal: **character, morality, higher-mindedness** — what the Greeks and Romans would have taught — not rote memorisation
- Age 4 is still mostly free play, with gentle preparation for reading and numbers
- Activities linked to where to get the materials
- A way to monitor your own progress without schoolification

## Philosophical blend the research landed on

| Weight | Strand | What it gives |
|--------|--------|---------------|
| Primary | **Charlotte Mason** | Living books, narration, nature study, habit training, short lessons. Booklist: Plutarch, Shakespeare, Homer, Mother Goose, Beatrix Potter. |
| Secondary | **Waldorf rhythm + Wild+Free outdoors** (practices only, skip the anthroposophy) | Predictable daily/weekly/seasonal rhythm; natural materials; beauty; handwork; festival life; 3+ hours outside. |
| Tertiary | **Montessori practical life + math materials** | Real work (pour, sweep, chop, fold); real tools; number rods/beads. Skip the fantasy-play prohibition. |
| Framing | **Paideia — Plato, Plutarch, Quintilian, CiRCE, Caldecott** | The tradition of forming a whole person, given via first-principles reasoning rather than dogmatic assertion. |

**One-line summary**: At 4, do Charlotte Mason, live in Waldorf rhythm, play outside like Wild+Free, borrow Montessori's practical life and math — and always give the real reason for any practice.

## Scope answers (2026-04-23)

1. **Name**: Conscious Parenting NI (originally "New Beginnings", renamed 2026-07-17)
2. **Religious framing**: Christian sources welcome as a rich tradition, but first-principles is the filter — no dogma, religious or secular
3. **Multi-child**: One 4-year-old, now
4. **Web vs native**: PWA
5. **Authoring burden**: Pre-populated content (app ships with the 52-week rotation filled in)
6. **Standalone**: Brand-new standalone app, no Aha! integration

## App structure — six sections

**1. COMPASS** — The philosophy, stated plainly, with the "why" for each core commitment. A one-page summary the parent can re-read on hard days. Reading list for the parent's own formation.

**2. COMPARE** — Side-by-side of what Charlotte Mason, Montessori, Waldorf, Classical, Wild+Free, and Unschooling families typically do at age 4. What they do, what they deliberately don't do, strengths, limits, what this app borrows from each.

**3. RHYTHM** — Six daily rhythm templates drawn from real homeschool practice. Customise your own. Explanation of *why* each anchor (morning basket, outdoor block, rest, free play) matters.

**4. FEAST** — A 52-week rotation of curated content. Each week: one poem, one hymn or folk song, one composer piece, one picture-study artwork, one virtue-story or myth, one nature-study prompt, one practical-life activity. The parent opens the app and sees "this week's feast" — already chosen, with the why explained and links to where to get it.

**5. RESOURCES** — Filterable directory of ~70 vetted home-ed resources. Method, age, price, format, effort, link. Honest flags on what to avoid at 4 and what is better left for later.

**6. KEEPING** — Narration log, habit tracker, photo/note diary, observation checklist. All local-only. No grades, no percentiles, no "behind." Export to JSON.

## What this app does NOT do
- No child-facing UI, no gamification, no points, no stars
- No grades, percentiles, or "falling behind" language
- No AI chatbot — content is curated for coherent voice
- No cloud account in v1 — everything is local
- No social feed — links out to existing communities (Ambleside, Wild+Free, CiRCE, Scholé Sisters) rather than duplicating them

## Tech stack

- **Plain HTML/CSS/JS** — no build step, no framework. Easy to maintain; fast to load; works offline.
- **localStorage** for the parent's log, habit tracker, photo diary text entries
- **PWA** — manifest.json + service worker for offline install
- **Deploy**: GitHub (AeonReon) → Vercel (aeonreon team) as a static site

Data files are plain JS objects so the 52-week rotation, resource list, and methodology content are version-controlled alongside the code.

## v0.1 scope (this build)
- Six sections live and navigable
- 52 weeks of feast rotation pre-populated
- ~70 resources in directory
- Local storage for narration, habits, photos, observations
- PWA installable
- Deployed to Vercel
