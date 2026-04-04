

## Add Intelligence Briefs Page

Convert the uploaded HTML into a new React page at `/reports/agent-production/briefs` — three short-form analytical briefs derived from the Agent Production Report.

### Changes

**1. New Page: `src/pages/reports/AgentProductionBriefs.tsx`**

A single React component containing all three briefs in sequence, using the site's Header/Footer and design tokens. The page structure:

- **Masthead** — dark `bg-[hsl(var(--ink))]` hero with title "Intelligence Briefs — Production Report Series", metadata (Source, Framework, Published, Briefs count)
- **Brief Index** — 3-item grid navigation bar on `bg-primary`
- **Brief 001** — "Production as a System Output in Commission-Based Distribution" (5 sections: Context, Data with 3 callout cards, Insight, IDOS panel, Structural Implication, Closing Observation)
- **Brief 002** — "Retention as a Structural Determinant of Revenue Compounding" (same 5-section structure, 3 data callouts)
- **Brief 003** — "Infrastructure as a Variance Reduction Mechanism" (same 5-section structure, 3 data callouts)

Design elements mapped to existing tokens:
- Section tags: `font-mono text-[8px] tracking-[0.3em]` with colored rule lines (steel, amber for data, green for insight)
- Data callouts: `bg-[hsl(var(--gold)/0.08)]` with gold left border
- IDOS panels: `bg-primary` with gold-light labels and 6 component tags
- Implication boxes: `bg-[hsl(var(--fog))]` with border
- Closing observations: italic, border-top rule

**2. Route: `src/App.tsx`**

Add lazy-loaded route: `/reports/agent-production/briefs` → `AgentProductionBriefs`

**3. Link from Report: `src/pages/reports/AgentProduction.tsx`**

Add a "Read the Intelligence Briefs" link/banner near the top or bottom of the Agent Production Report page, connecting the two assets.

**4. Reports Page: `src/pages/Reports.tsx`**

Add "Intelligence Briefs" as a sub-item under the Agent Production Report card, with a link to the new page.

### Files Modified

- `src/pages/reports/AgentProductionBriefs.tsx` (new)
- `src/App.tsx` (new route)
- `src/pages/reports/AgentProduction.tsx` (link to briefs)
- `src/pages/Reports.tsx` (briefs sub-link)

