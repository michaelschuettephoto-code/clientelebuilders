

## The Institutional Rebuild

This plan transforms the site from "agency website" to "intelligence platform + deal-flow machine" — modeled after Goldman Sachs / McKinsey / CoStar.

### What Changes

**Current state:** The homepage (`/`) routes directly to the Intelligence Hub (blog). The old `Index.tsx` is an unused "RLGaaS" landing page. About and Consulting pages are generic. There's no institutional authority positioning.

**Target state:** A 5-layer system with a proper authority homepage, upgraded services page, repositioned About, and the Intelligence Hub as its own destination.

---

### Layer 1: New Homepage (rewrite `Index.tsx`, route `/` to it)

Six sections, institutional tone, no fluff:

1. **Hero** — "We Build, Optimize, and Scale Insurance Distribution Systems" / Sub: "Data-driven consulting for IMOs, agencies, and distribution leaders." / Primary CTA: Take the Distribution Assessment / Secondary: View Latest Intelligence Report
2. **The Problem** — Emotional hook: agent turnover, low production, broken systems, no data visibility. Dark panel with gold accents. Speaks directly to IMO pain.
3. **Your Edge (IDOS 8-System Model)** — "Most firms sell leads. We engineer distribution systems." Visual breakdown of all 8 systems: Recruiting, Onboarding, Marketing, Sales, Persistency, Compensation, Leadership, Tech/Data.
4. **Intelligence Section (CoStar-style)** — Sample KPI benchmarks displayed as data cards: "85%+ persistency", "20%+ producer activation", "3-5x agent productivity". CTAs: Download Sample Report / Join Research Panel.
5. **Social Proof** — Authority-building language: "Advised growing IMOs", "Built recruiting systems", "Specializing in distribution infrastructure". Institutional positioning cards.
6. **Final CTA** — "Take the Distribution Scorecard → Get Your System Breakdown"

### Layer 2: Update Routing (`App.tsx`)

- `/` → new `Index.tsx` (homepage)
- `/intelligence` → `Intelligence.tsx` (hub stays as-is)
- Remove `/blog` redirect to Intelligence (or keep as alias)

### Layer 3: Upgrade Consulting → Services with Engagement Models (`Consulting.tsx`)

Replace the basic 4-card layout with 4 named engagement tiers:
1. **Diagnostic & Strategy** — KPI audit, scorecard breakdown, system roadmap
2. **System Buildout** — Recruiting systems, CRM + pipelines, training infrastructure
3. **Growth Infrastructure** — Lead generation, content systems, recruiting funnels
4. **Long-Term Advisory** — Monthly consulting, performance tracking, optimization

CTA: "Apply for Advisory" (not "Book Consultation")

### Layer 4: Rewrite About Page (`About.tsx`)

Repositioned as institutional identity page:
1. **Philosophy** — "Distribution is the real asset in insurance."
2. **Mission** — "Build the most efficient insurance distribution systems in the industry."
3. **Position** — "We operate at the intersection of Data, Marketing, and Operations."
4. **Identity** — "Insurance Distribution Architects"

Dark editorial design matching the rest of the site. No generic "what we cover" lists.

### Layer 5: Update Header Navigation (`Header.tsx`)

New nav order to reflect the 5-layer architecture:
- Intelligence | Services | Reports | Frameworks | Scorecard | About

("Services" replaces "Consulting" label, same route)

### Layer 6: Polish Newsletter Page (`Newsletter.tsx`)

Reposition as "Morning Brew meets Insurance Distribution":
- Update copy to match intelligence positioning
- Remove generic "10,000+" claims
- Align design with dark editorial theme used on other pages

---

### Technical Details

- **Files modified:** `Index.tsx` (full rewrite), `App.tsx` (routing), `Consulting.tsx` (upgrade), `About.tsx` (rewrite), `Header.tsx` (nav labels), `Newsletter.tsx` (copy/design refresh)
- **No new dependencies.** All built with existing Tailwind classes and design tokens.
- **Design system unchanged.** Uses existing navy/gold/cream palette, serif/sans/mono font stack.
- **All scorecard CTAs** point to `https://start.clientelebuilders.com/growth-diagnostic`

