

## Homepage Copy Update — ChatGPT Framework

Replacing the current 6-section homepage with the updated 9-section copy, preserving the existing design system (navy/gold/cream, editorial typography, institutional tone). Layout, spacing, and visual patterns stay the same — only the content changes.

### What Changes

**File:** `src/pages/Index.tsx` (full rewrite)

### Section-by-Section Mapping

1. **Hero** — New headline: "Most insurance organizations don't have a recruiting problem… they have a broken distribution system." Longer subheadline explaining intelligence + infrastructure positioning. CTAs: "Take the IMO Growth Scorecard" + "View Latest Intelligence Report"

2. **The Problem** — Title: "Why Most IMOs Hit a Ceiling". Body paragraph + bullet list (agents never activate, onboarding stalls, production unpredictable, leadership doesn't duplicate, no visibility). Closing line: "But the real issue is structural."

3. **Your Edge** — Title: "Built on Intelligence, Not Guesswork". Four pillars: Industry Intelligence, Consumer Behavior, Market Activity, Operational Strategy. Closing: "We don't just build marketing. We build distribution systems backed by data."

4. **The Scorecard** — Title: "IMO Growth Scorecard". Describes the diagnostic (6 areas evaluated), what you receive (score, breakdowns, bottlenecks, next steps). CTA: "Take the Scorecard Now"

5. **The Distribution System (IDOS simplified)** — Title: "The Distribution System We Build". 6 components (Recruiting Pipeline, Onboarding System, Activation Engine, Retention & Persistency, Leadership Development, Data & Infrastructure). Closing: "When these systems align, growth becomes predictable."

6. **Intelligence / Reports** — Title: "Insurance Distribution Intelligence". Bullet list of insight topics. CTAs: "View Intelligence Reports" + "Join the Newsletter"

7. **Services / Engagement Models** — Title: "Engagement Models". Four tiers: Diagnostic & Strategy, System Buildout, Growth Infrastructure, Advisory.

8. **Positioning / What We Are** — Title: "What We Are". "Clientele Builders is not a marketing agency. We are Insurance Distribution Architects." Three outcomes + three model pillars.

9. **Final CTA** — Headline: "Find Out What's Slowing Your Growth". CTAs: "Take the IMO Growth Scorecard" + "Book a Strategy Call"

### Design Approach

- Alternating light/dark sections using existing `bg-primary`, `bg-[hsl(var(--ink))]`, `bg-background`, `bg-[hsl(var(--fog))]` pattern
- Same font-mono labels, font-serif headings, gold accents
- Bullet lists styled with accent-colored check/dot markers
- IDOS grid reduced from 8 → 6 cards per the new copy
- Engagement Models section uses the same card pattern as the Consulting page
- No new dependencies or components needed

