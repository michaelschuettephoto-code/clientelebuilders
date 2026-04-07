

## Integrate Editorial Brief into Homepage

### What's changing
Insert the "Demand Is Rising. Technology Is Shifting. The Buyer Is Clear." editorial narrative as a new section between the **Hero (section 1)** and **The Problem (section 2)**. The existing homepage flow stays intact — this adds the editorial layer without removing or replacing anything.

### Why this placement
The Hero establishes the brand and primary CTA. The editorial brief then builds the intellectual case — *why* alignment matters — before the existing sections present the system/solution. It acts as the narrative bridge: **brand → market thesis → problem → solution → CTA**.

### Technical approach

**1. New CSS file: `src/pages/homepage-editorial.css`**
- All typographic piece styles from the HTML (`typo-fact-1`, `typo-capture`, `typo-changes`, `typo-distributed`, `typo-buyer`, `typo-three-conditions`, `typo-if`, `typo-questions`, `typo-final`, `pull`, `section-head`, `fact`, etc.)
- Scoped with a `.hp-editorial` wrapper class to avoid global conflicts
- Includes responsive rules for mobile

**2. Updated file: `src/pages/Index.tsx`**
- Import the new CSS file
- Add a new `<section>` after the Hero containing the full editorial narrative converted to JSX:
  - Masthead block (navy background with "Demand Is Rising / Technology Is Shifting / The Buyer Is Clear" escalating title)
  - Three "Fact" sections with typographic pieces (crescendo, funnel, stacked changes, distributed SVG, buyer fade-in)
  - "What Do These Conditions Point To?" with struck negatives
  - "Where Does the Outcome Actually Come From?" with if-lines and shrinking questions
  - "The Real Question" final panel (not/but contrast)
- All content preserved verbatim from the provided HTML
- SVG word art for "evenly distributed" included inline

### Files Modified
- `src/pages/homepage-editorial.css` (new)
- `src/pages/Index.tsx`

