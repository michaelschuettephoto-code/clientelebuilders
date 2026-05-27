Tighten the Life Insurance page on small screens. The current layout works but has heavy padding, an oversized hero, and a benchmark table that forces horizontal scrolling.

## Changes (`src/pages/LifeInsurance.tsx`)

1. **Hero**
   - Reduce H1 from `text-4xl` to `text-[2rem]` on the smallest breakpoint so "We Identify and Fix Revenue Leaks…" no longer spans 6 lines.
   - Trim hero padding from `py-28` to `py-20` on mobile.
   - Stack hero CTA buttons full-width on `<sm` (already `flex-col`, just add `w-full` so they don't shrink unevenly).

2. **Section padding**
   - Replace `py-20 md:py-28` with `py-14 md:py-28` across the 9 sections so vertical rhythm tightens on phones.

3. **Benchmark table (the actual overflow issue)**
   - Hide the `<table>` on `<sm` (`hidden sm:table` / wrap in `hidden sm:block`).
   - Add a mobile-only stacked card list rendering the same `BENCHMARK_DATA`: one card per metric with three labelled rows (Top 10% / Industry Avg / Bottom 25%) in a 3-col grid. Removes horizontal scroll entirely.

4. **"What You'll Receive" + Step 1 grid**
   - On mobile, list items already wrap fine; just add `gap-10` → `gap-8` so the two columns aren't double-spaced when stacked.

5. **Final CTA**
   - Make the "Take the Revenue Leak Assessment" button full-width on mobile (`w-full sm:w-auto justify-center`) so it doesn't overflow the centered container on 320px devices.

## Out of scope
- Header/Footer (already simplified).
- No copy changes, no route/data changes.
- Other pages — happy to optimize them in follow-ups if you want a site-wide sweep.

## Verification
Re-screenshot at 390×844 after edits and confirm:
- No horizontal scroll on any section
- Benchmark data fully visible without swiping
- Hero CTAs aligned, hero headline ≤4 lines
