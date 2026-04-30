## Homepage as Intelligence Hub + Industry Landing Pages

### The architectural shift

Right now the homepage is insurance-specific ("IDOS", "IMOs", "agent activation"). Per Shawn's plan, the homepage should become a **universal intelligence gateway** that speaks to ANY business with clientele + revenue flow, then routes visitors into industry-specific landing pages. Insurance becomes the first landing page — not the homepage itself.

```text
Homepage (/)              → universal: "Where is your business losing money?"
  └─ Industries grid      → routes to:
       /lifeinsurance     → IMO-specific (current homepage content lives here)
       /beauty            → coming soon
       /fitness           → coming soon
       /events            → coming soon
```

---

### Files & changes

**1. NEW: `src/pages/LifeInsurance.tsx`**
- Becomes the new home for the current insurance-specific content
- Lift the existing 9-section homepage almost verbatim (hero, IDOS, revenue leaks, money section, case study, benchmarks) into this file
- Keep all current copy, constants (REVENUE_LEAKS, IDOS_AREAS, PIPELINE_STAGES, BENCHMARK_DATA), components and styling
- Update Helmet: title "Life Insurance Distribution — Clientele Builders", description focused on IMOs and revenue leaks
- Add breadcrumb at top: `Home › Industries › Life Insurance Distribution`

**2. REWRITE: `src/pages/Index.tsx`** (universal intelligence hub)

New 7-section structure, all industry-agnostic:

| # | Section | Copy |
|---|---------|------|
| 1 | **Hero** | Eyebrow: *"Distribution Intelligence"*. H1: **"Where Is Your Business Losing Money?"** Sub: *"Most companies don't know. We make the system visible."* CTA: "Start Your Assessment" → ScoreApp |
| 2 | **Universal System** | *"Every business runs on the same system."* Visual: **Attention → Trust → Activation → Revenue → Retention** (5-stage horizontal flow, replaces the 6-stage insurance pipeline). Subtext: *"If one part breaks, growth slows. If multiple break, the business stalls."* |
| 3 | **The Problem** | *"You don't see where it's breaking."* 3 universal symptoms: Leads come in → don't convert · Customers buy → don't return · Teams work → results don't scale. Closing line: *"That's not a people problem. That's a system problem."* |
| 4 | **The Solution** | *"We Install Decision Systems."* Copy: *"We don't run your business. We help you see it clearly — so you can fix it."* |
| 5 | **Industries (the routing hub)** | *"Where We Apply This."* 4 cards in a grid:<br>• **Life Insurance Distribution** → `/lifeinsurance` (active)<br>• **Beauty & Service Businesses** → `/beauty` (coming soon — disabled state)<br>• **Fitness & Coaching** → `/fitness` (coming soon)<br>• **Events & Media** → `/events` (coming soon)<br>Active card has gold accent border + "Enter →"; inactive cards show "Coming Soon" pill |
| 6 | **Terminal / Visibility** | *"This Is What Visibility Looks Like."* Generic dashboard mockup — reuse the existing benchmark-style card grid but with universal metrics (Conversion Rate, Activation %, Retention %, Revenue per Customer) instead of insurance ones |
| 7 | **Final CTA** | *"If you don't know your numbers, you don't have a business."* CTA: "Start Your Assessment" → ScoreApp |

- Update Helmet: title **"Clientele Builders — Where Is Your Business Losing Money?"**, description focused on multi-industry distribution intelligence
- Remove insurance-specific icons/labels; use universal icons (Eye, Activity, TrendingUp, Repeat, etc.)
- Preserve all existing visual patterns: serif headlines, gold accent eyebrows, dark navy alternating with light sections, mono labels

**3. UPDATE: `src/App.tsx`**
- Add lazy import: `const LifeInsurance = lazy(() => import("./pages/LifeInsurance"));`
- Add route: `<Route path="/lifeinsurance" element={<LifeInsurance />} />`
- (No routes added for /beauty, /fitness, /events yet — cards link to `#` or show disabled state)

**4. UPDATE: `src/components/layout/Footer.tsx`**
- Tagline → *"Distribution intelligence across industries. Where businesses lose money — and how to fix it."*
- Under "Platform" section, add link: **Life Insurance** → `/lifeinsurance`

**5. UPDATE: `src/components/layout/Header.tsx`**
- No nav changes (System Layers, Reports, etc. remain)
- Optional: nothing added to top nav — industries are discovered via homepage

---

### What stays the same
- Header structure, Footer structure, Scorecard page, Intelligence/Reports/Frameworks/Consulting pages — all untouched
- All existing routes (insights, reports, briefs, admin) unchanged
- Color palette, typography (Playfair / DM Sans / DM Mono), spacing system
- ScoreApp URL (`https://start.clientelebuilders.com/growth-diagnostic`) remains the single CTA destination — branching logic on ScoreApp side is out of scope for this implementation

### What's deferred (not in this plan)
- Building actual /beauty, /fitness, /events landing pages (cards link to disabled state)
- ScoreApp multi-industry branching logic (configured externally on ScoreApp, not in this codebase)
- Any analytics/tracking changes
