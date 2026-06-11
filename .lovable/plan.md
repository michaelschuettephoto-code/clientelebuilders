## What's actually in the file

The upload is a self-unpacking "design concept" bundle. After decoding, the real page is:

- **Mobile-first** (max-width 460px, viewport `460×900`), dark navy `#0E2436` / `#070f18` background, brand gold `#C8902F`, cream `#F4EFE3` text
- Fonts: **Bodoni Moda** (serif headlines), **IBM Plex Mono** (eyebrow labels), **Hanken Grotesk** (body)
- Sections, top to bottom:
  1. Sticky header — wordmark "Clientele Builders" + hamburger; turns glassy on scroll
  2. **Funnel Dive** — a 560vh pinned scrollytelling block. An SVG funnel (5 stacked gold discs = Attention → Trust → Activation → Revenue → Retention) with red "leak" glows and animated gold particle streams. Camera zooms/pans through 6 scroll keyframes; captions and progress ticks crossfade in sync.
  3. The 8 IDOS areas list (numbers + name + question), matching your existing taxonomy plus Marketing/Sales Process/Persistency/Compensation/Tech & Data.
  4. CTA — "The Distribution Leak Diagnostic" with a gold button
  5. Footer — wordmark, tagline, "© 2026 · Built on visibility"

No personal bylines; copy fidelity preserved verbatim.

## Goal

Ship it as a **new route `/home-v2`** so the live homepage stays untouched and you can compare side-by-side.

## Plan

1. **New page** `src/pages/HomeV2.tsx`
   - One self-contained component. Wrap content in a `max-w-[460px] mx-auto` shell so it reads as the intended mobile design even on desktop (the bundle itself is sized this way).
   - Port the `<x-dc>` template HTML into JSX: convert inline `style="…"` to `style={{…}}` objects, `class` → `className`, drop `style-hover` (replace the gold button hover with a small scoped CSS rule).
   - Inline the SVG funnel + `<defs>` gradients/filters + the leak-particle `<span>` emitters exactly as-is.
   - Use existing CTA URL `https://start.clientelebuilders.com/distributionleak` on the button (the bundle has `href="#"`).

2. **Scroll behavior** — port the bundle's `componentDidMount` logic into a `useEffect`:
   - Refs/queries for `[data-dive]`, `[data-scene]`, `[data-cap]`, `[data-tick]`, `[data-hint]`, `[data-header]`, `[data-reveal]`
   - Same 6-stop camera keyframes (zoom + vertical focus) with smoothstep easing
   - Same caption opacity falloff, tick highlight, header glassmorph at `scrollY > 30`, and reveal-on-scroll rise transform
   - Attach `scroll`/`resize` listeners with `{ passive: true }`; clean up on unmount

3. **Fonts + keyframes** — use `react-helmet-async` (already in project) to inject:
   - Google Fonts `<link>` for Bodoni Moda 700, IBM Plex Mono 400/600, Hanken Grotesk 400/500 (avoids shipping the 27 woff2 files from the bundle)
   - A `<style>` block with the `cbBob`, `cbLeak`, `cbPulse` `@keyframes` and the gold-button `:hover` rule

4. **Routing** — register `/home-v2` in `src/App.tsx` alongside the existing `/` route. Add the route to `prerender.js` so the static build picks it up.

5. **SEO / metadata** — `<title>` "Clientele Builders — New Home Preview" and `noindex, nofollow` meta on this preview route so it doesn't compete with `/` in search until you promote it.

6. **Verify** — load `/home-v2` in the preview, check the funnel scrolls/zooms, particles animate, header glassmorphs, captions crossfade, CTA links to the scoreapp.

## Out of scope (for this pass)

- Not touching `src/pages/Index.tsx` or `Navigation` / `Footer` shared components.
- Not inlining the 27 woff2 files — Google Fonts is faithful enough and avoids ~600 KB of base64. Easy to swap to self-hosted later.
- No analytics changes; the existing pixel/tag in `index.html` will still fire on this route.

## Promotion path (later, your call)

Once you've reviewed `/home-v2`, the swap is a 2-line change: route `/` to `HomeV2` and either delete `Index.tsx` or keep it at `/home-v1` for reference.
