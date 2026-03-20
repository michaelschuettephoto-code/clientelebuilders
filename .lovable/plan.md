

## Audit: Current State vs. Spec

| Section | Spec | Current Status |
|---------|------|----------------|
| 1. Hero | Left text + Right featured preview | **Partial** — text-only, no right column |
| 2. Featured Insight | Large featured post with image, title, summary, "Read Analysis →" | **Missing** — replaced by "Latest Intelligence" text list |
| 3. Category Filters | 5 categories, clickable | **Done** |
| 4. Article Grid | 3-col, title + insight + tag | **Done** |
| 5. Inline CTA | "Diagnose Your Distribution System" | **Done** |
| 6. Report Section | Cover mockup + description + download | **Done** |
| 7. Frameworks | 3 frameworks + "Explore Frameworks" | **Done** |
| 8. Final CTA | "Build a Predictable Distribution System" + 2 buttons | **Done** |

## Issues Found

### 1. Hero is missing the right-side column
The spec calls for a split layout: text on the left, featured article or report preview on the right. Currently it's full-width text only.

### 2. Featured Insight section is missing
This is the biggest gap. The spec calls for a prominent featured post at the top with a large image, title, summary, and "Read Analysis →" button. Currently this is a text-only "Latest Intelligence" list of 3 articles.

### 3. Reveal animations still active on lower sections
The `useReveal` + `revealClasses` are still applied to the Report, Frameworks, and Final CTA sections. These were the cause of the "can't see anything" issue reported earlier. They need to be removed.

## Plan

### Step 1: Remove all remaining reveal animations
Strip `useReveal` hooks and `revealClasses` from Report, Frameworks, and Final CTA. This fixes the visibility bug and improves performance.

### Step 2: Add right-side content to Hero
Add a CSS-only report cover mockup (identical style to the one in the Report section) on the right side of the hero using a `grid md:grid-cols-2` layout. No images — pure HTML/CSS, instant load.

### Step 3: Replace "Latest Intelligence" with a Featured Insight
Convert the current text list into a single large featured post block:
- Full-width bordered card
- Category tag + large serif headline + summary paragraph
- "Read Analysis →" button linking to the article
- No image (to avoid the mobile loading issues we've been hitting). Instead, use a styled text-only editorial layout that feels high-end — like a Bloomberg feature callout.

### Technical notes
- All changes in one file: `src/pages/Intelligence.tsx`
- No new dependencies or assets
- Zero images = zero loading delay
- Clean up unused imports (`LOCAL_IMAGE_MAP`, `resolveImageSrc`, `CARD_PLACEHOLDERS`)

