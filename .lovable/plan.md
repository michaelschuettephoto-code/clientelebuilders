# Scroll-Driven Distribution Model — Homepage

A pinned, CSS/SVG-built "3D" distribution chain on the homepage that transforms as the user scrolls. Eight stages, eight scroll states. Navy/ink/gold palette preserved. Mobile-safe (no WebGL, no heavy images).

## Concept

The right two-thirds of the viewport pins a single composed scene built from layered SVG + CSS transforms (perspective, rotateX/Y, translateZ). The left third holds a text panel that swaps copy per stage. As the user scrolls the homepage hero section, the scene morphs through eight states — nodes light up, connectors draw in, the "camera" subtly pans/tilts, and a gold progress rail advances.

Think Obsidian's pinned-product choreography, but the subject is the agent distribution pipeline.

## Eight Stages (scroll states)

```text
1. Recruiting   → candidate nodes appear, funnel into pipeline
2. Licensing    → credential badge locks onto active node
3. Onboarding   → node connects to training/system hub
4. Activation   → first connection lights to carrier rail
5. Sales        → policy packet flows agent → carrier
6. Placement    → policy lands, carrier node pulses
7. Renewals     → recurring arc loops back to agent
8. Retention    → full network glows, gold mesh complete
```

Each stage has: headline, one-line subhead, one metric, and a corresponding scene state.

## Layout

```text
┌─────────────────────────────────────────────────────────┐
│  Top nav (existing)                                      │
├──────────────────┬──────────────────────────────────────┤
│                  │                                       │
│  TEXT PANEL      │   PINNED SCENE                       │
│  (sticky-swap)   │   (SVG + CSS 3D)                     │
│                  │                                       │
│  Stage 3 of 8    │   ● ─── ● ─── ●                      │
│  Onboarding      │     ╲   │   ╱                        │
│  [headline]      │       ● hub                          │
│  [subhead]       │     ╱   │   ╲                        │
│  [metric]        │   ● ─── ● ─── ●                      │
│                  │                                       │
│  ▮▮▮▯▯▯▯▯ rail   │                                       │
└──────────────────┴──────────────────────────────────────┘
        ↑ scroll drives both
```

Below the pinned section, the rest of the homepage (Intelligence Hub teaser, report CTA, etc.) resumes as today.

## Technical Approach

- **New section component** `HomeDistributionScroller.tsx` mounted at top of `Index.tsx`, replacing or sitting above the current hero.
- **Scroll driver**: native `IntersectionObserver` + `scroll` listener mapped to a normalized `progress` (0–1) across the section's height (set to `800vh` = 100vh per stage). No GSAP, no Framer pinning library — keeps bundle small and SSG-safe.
- **Scene**: one inline SVG (~600×600) wrapped in a `perspective: 1200px` container. Nodes are `<circle>`/`<rect>`, connectors are `<path>` with `pathLength` + `stroke-dashoffset` animated by progress. Camera tilt via CSS `transform: rotateX() rotateY()` on the wrapper, interpolated per stage.
- **Stage interpolation**: a small `useScrollStage(progress)` hook returns `{ stageIndex, stageProgress }`. Each visual prop (node opacity, path draw, tilt angles, glow) is a `lerp(stageValues[i], stageValues[i+1], stageProgress)`.
- **Text panel**: absolute-positioned cards, one per stage, cross-fading via opacity tied to `stageIndex`.
- **Gold progress rail**: vertical bar on the left edge of the scene, filled to `progress * 100%`, using `--gold` token.
- **Mobile**: under `md:` breakpoint, collapse to a stacked vertical layout — scene shrinks to 100vw, text stacks above, scroll-pinning disabled (each stage becomes a normal scroll-snap section). Honors the Zero Image strategy: pure SVG/CSS, no raster.
- **SSR**: guard all `window`/`IntersectionObserver` access with `typeof window !== 'undefined'`; static prerender shows stage 1 by default.
- **Reduced motion**: `prefers-reduced-motion` disables tilt + path-draw, shows all stages as a static legend.

## Styling

- Background: `--navy` / `--ink` gradient, subtle radial vignette.
- Nodes: ink fill, gold stroke when active, navy stroke when dormant.
- Connectors: thin gold lines, 1px, draw-in on activation.
- Type: Playfair Display headlines, DM Sans subhead, DM Mono for stage counter + metric. All existing tokens, no new colors.

## Files

- **New**: `src/components/home/HomeDistributionScroller.tsx`, `src/components/home/DistributionScene.tsx`, `src/components/home/StagePanel.tsx`, `src/hooks/useScrollStage.ts`, `src/data/distributionStages.ts`.
- **Edit**: `src/pages/Index.tsx` — insert scroller above/replacing current hero block.
- **Edit**: `src/index.css` — add `.dist-*` scoped styles (perspective, glow keyframes, reduced-motion overrides).
- **No changes**: routing, data layer, Intelligence Hub, Reports, Auth, prerender pipeline.

## Out of Scope

- WebGL / React Three Fiber (rejected for mobile perf).
- Extending scroll-choreography to other routes (homepage only).
- Copy rewrites — I'll draft placeholder stage copy and you can edit in a follow-up pass; existing brand copy on the rest of the homepage stays untouched.

## Open question I'll resolve at build time

The current homepage hero — do I (a) **replace** it entirely with the scroller, or (b) **insert the scroller below** the existing hero so the current report-cover CTA stays as the first paint? I'll default to **(b) insert below** to preserve LCP and the existing conversion path, unless you say otherwise here.
