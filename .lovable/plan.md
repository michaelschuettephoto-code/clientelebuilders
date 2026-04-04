

## Show Intelligence Briefs in Empty Article Grid & Remove Briefs Link from Reports

### What's changing

1. **Intelligence page (`src/pages/Intelligence.tsx`)** — Replace the empty state ("No articles in this category yet") with inline Intelligence Briefs content. Instead of showing a placeholder message, we'll render brief cards linking to the three briefs (anchored on `/reports/agent-production/briefs`). Each card shows the brief number, title, and a short description, styled consistently with the dark theme.

2. **Reports page (`src/pages/Reports.tsx`)** — Remove the "Intelligence Briefs →" link from the Agent Production Report card (lines 111–117), keeping only the "Read Full Report →" link.

### Technical details

**`src/pages/Intelligence.tsx`** (lines 269–275):
- Replace the empty `<div>` with a briefs preview section containing 3 cards:
  - Brief 001: "Production as a System Output in Commission-Based Distribution"
  - Brief 002: "Retention as a Structural Determinant of Revenue Compounding"
  - Brief 003: "Infrastructure as a Variance Reduction Mechanism in Agent Distribution"
- Each card links to the corresponding anchor on `/reports/agent-production/briefs#brief-001`, etc.
- Styled with the existing dark theme (border-white/[0.06], accent colors, mono fonts)
- Add a section label like "Intelligence Briefs — Agent Production Series" above the cards

**`src/pages/Reports.tsx`** (lines 111–117):
- Remove the `<Link to="/reports/agent-production/briefs">` block, keeping only the "Read Full Report" link

### Files Modified
- `src/pages/Intelligence.tsx`
- `src/pages/Reports.tsx`

