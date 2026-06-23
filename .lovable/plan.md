## Goal

Replace the current homepage at `/` with the design from the uploaded `homepage-static-export.html`. No other routes change.

## Scope

- Only the homepage route (`/`) is replaced.
- All existing routes (`/intelligence`, `/reports`, `/admin/*`, story/blog routes, etc.) stay intact.
- Existing pages (`Index.tsx`, `HomeV2.tsx`, About, Reports, etc.) are NOT deleted — they remain so we can rebuild/replace them one at a time in future turns, per the earlier workflow agreement.

## What gets built

1. **New `src/pages/HomeLeak.tsx`** — port of the uploaded HTML to React + Tailwind:
   - Sticky nav (Clientele Builders wordmark, "How it works", "Free library", gold "Take the Assessment" pill).
   - Dark navy hero with gold accent: "Revenue leaks hide inside distribution systems."
   - "What we diagnose" — 8-card grid (Recruiting, Onboarding, Marketing, Sales Process, Persistency, Compensation, Leadership, Technology & Data) using `lucide-react` icons (already in project) instead of the CDN script.
   - "Why it matters" — 3 stacked questions + "Revenue Leak Calculator — coming soon" badge.
   - "The data" — navy section with the 52% independent agent figure + horizontal bar chart.
   - Final CTA — "See where your system is leaking." with gold button.
   - Footer — navy, brand + tagline + copyright.

2. **Styles** — new scoped CSS file `src/pages/home-leak.css` mirroring the `<style>` block from the export (tokens, `.card`, `.fig`, `.eyebrow`, `.btn-gold`, `.diag-grid`, etc.), scoped under a `.hp-leak` root class so it doesn't bleed into other pages. Fonts (Playfair Display, DM Sans, DM Mono) are already loaded globally per project memory.

3. **Routing** — in `src/App.tsx`:
   - Repoint `/` from `Index` to the new `HomeLeak` page.
   - Move the old homepage to `/home-legacy` (keep import) so nothing is lost and we can compare/revert easily.
   - Leave `/home-v2` and all other routes untouched.

4. **CTAs** — the "Take the Assessment" buttons currently anchor to `#assess`. Confirm target before wiring (see Open question below). For now they will scroll to the final CTA section on the same page; the final CTA button will link to `/scorecard` (the existing assessment route) unless you say otherwise.

5. **Nav links** — "How it works" scrolls to the diagnose section; "Free library" links to `/intelligence` (the existing content hub).

## Out of scope

- No edits to `Header.tsx` / `Footer.tsx` shared components — the new homepage uses its own inline nav and footer to match the export exactly.
- No content changes to other pages.
- No new blog posts, no admin changes, no DB migrations.
- No sitemap regeneration this turn (we'll do it once the full overhaul lands).

## Technical notes

- Icons: swap `<i data-lucide="...">` for `lucide-react` named imports (`UserPlus`, `ClipboardCheck`, `Megaphone`, `Handshake`, `ShieldCheck`, `Scale`, `GraduationCap`, `Activity`).
- Colors stay as hardcoded hex inside `home-leak.css` CSS variables (scoped, matches the export's intentional palette and project memory: navy `#0D1B2A`, gold `#C8972A`, cream `#FAF8F4`). Project rule against hardcoded Tailwind color utilities is respected — colors live in the scoped CSS file, not in component classNames.
- Helmet `<title>` + meta description set to match the export ("Clientele Builders — Find the leaks in your distribution system").
- SSR-safe: no `window` references; lucide-react is SSR-friendly.

## File changes

```text
src/pages/HomeLeak.tsx        (new)
src/pages/home-leak.css       (new)
src/App.tsx                   (edit: / -> HomeLeak, old Index -> /home-legacy)
```

## Open question

The "Take the Assessment" CTA — should it:
- (a) link to `/scorecard` (the existing Scorecard page), or
- (b) link to the external `clientelebuilders.com/growth-diagnostic` per the lead-capture memory, or
- (c) stay as an on-page anchor only for now?

I'll default to **(a) `/scorecard`** unless you say otherwise — easy to change in one line after.
