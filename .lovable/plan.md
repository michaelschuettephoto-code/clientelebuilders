
## Goal

Right now the homepage (`/`) is hardcoded in `src/pages/HomeLeak.tsx`. You want **everything** on it editable from the built-in `/admin` CMS — nav, hero, the 8 "What we diagnose" cards, the "Why it matters" questions, the data/stat block with bars, the final CTA, and the footer.

## Approach

Single JSON-backed content document for the homepage, edited through one focused admin screen. One row, one form, everything in one place — far simpler than splitting into many tables, and matches how this page actually behaves (one page, one set of copy).

### 1. Database — new `home_content` table

A single-row table that stores the full homepage as structured JSON, plus a `published` boolean so you can save drafts without affecting the live site.

```text
home_content
├── id (uuid, pk)
├── content (jsonb)         ← the entire homepage payload
├── is_published (boolean)
├── updated_at (timestamptz)
└── updated_by (uuid)
```

`content` shape (mirrors the page so the editor maps 1:1):

```text
{
  nav: { wordmark, cta_label, cta_href },
  hero: {
    eyebrow, headline, headline_accent,
    body, italic_line,
    cta_label, cta_href, meta
  },
  diagnose: {
    eyebrow, heading, lead,
    cards: [ { icon, title, body } x 8 ]
  },
  why: {
    eyebrow, heading,
    questions: [ "...", "...", "..." ],
    closer, badge
  },
  data: {
    eyebrow, heading, lead,
    fig_kicker, fig_title, big_stat, big_stat_label, supporting,
    rows: [ { label, value, accent } ],
    footnote, source
  },
  final_cta: { heading, body, cta_label, cta_href },
  footer: { brand, tagline, copyright, sub_note }
}
```

- RLS: public `SELECT` where `is_published = true`; `INSERT/UPDATE/DELETE` only for `admin`/`editor` via `has_any_role`.
- GRANTs: `SELECT` to `anon` + `authenticated`, full DML to `authenticated` (filtered by RLS), `ALL` to `service_role`.
- Seed the single row with the current homepage copy so nothing visually changes on first load.

### 2. Admin UI — new "Homepage" editor

- Add a **Manage Homepage** card to `/admin` (Dashboard) next to "Manage Posts".
- New route `/admin/homepage` with a long form, grouped by section (Nav, Hero, What We Diagnose, Why It Matters, The Data, Final CTA, Footer).
  - Text inputs / textareas for copy.
  - Repeating editors for the 8 diagnose cards (icon picker from the existing lucide set we already use, title, body) and the 4 data-bar rows (label, value 0–100, accent toggle).
  - Editable question list for "Why it matters".
  - "Save draft" and "Publish" buttons (toggles `is_published`).
- Same admin/editor role gate as `Posts.tsx`.

### 3. Frontend — `HomeLeak.tsx` reads from CMS

- Fetch the published `home_content` row with React Query on mount.
- While loading: render the current hardcoded copy as fallback (so the page never flashes empty and SSG/prerender keeps working even if the fetch hasn't resolved).
- When data arrives, render from the JSON. Icon strings map back to lucide components via a small lookup.
- Keep all existing CSS classes and layout untouched — only the text/data is sourced from CMS.

### 4. Prerender

`prerender.js` already builds `/` statically. We'll have it fetch the published `home_content` row at build time (same pattern as `prerender-supabase.js` uses for posts) and inject it, so the static HTML reflects the latest published content.

## What stays the same

- Visual design, fonts, colors, layout, animations — untouched.
- Routing, auth, all other pages — untouched.
- The 8 lucide icons remain the icon set; you pick from them per card.

## What you'll be able to do after this ships

- Log in at `/admin` → click **Manage Homepage** → edit any text, swap icons, reorder/relabel diagnose cards, change the 52% stat or any bar value, update the footer, update CTAs — then hit **Publish** and the live homepage updates.
