

## Problem

The hero CTA buttons ("Take the Distribution Scorecard" and "Infrastructure Report") are not clickable. The code is correct, but the absolute-positioned background gradient overlay (`absolute inset-0`) covers the entire hero section and intercepts pointer events, blocking clicks on the buttons beneath it.

## Fix

**File:** `src/pages/Intelligence.tsx`

1. Add `pointer-events-none` to the radial gradient background overlay (line 81) so it doesn't capture clicks.
2. Add `relative z-10` to the content grid container so the buttons sit above any decorative layers.
3. Add `pointer-events-none` to the report mockup's blur glow element (line 120) for safety.

These are 3 small class additions — no structural changes.

