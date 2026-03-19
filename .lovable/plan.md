

## Plan: Add Thought Leadership Article

The HTML you shared is a full editorial article with its own design system. The best approach is to create it as a dedicated page and add a prominent featured article section on the homepage that links to it.

### What will be built

1. **New page: `src/pages/InsightArticle.tsx`**
   - Converts the full HTML article into a React component
   - Uses custom CSS classes scoped to the article (via a dedicated CSS file or Tailwind + inline styles)
   - Preserves the editorial design: Playfair Display + DM Sans fonts, cream/navy color scheme, two-column layout with sidebar, pull quotes, dark panels, opportunity grid, closing strip
   - Wraps with the site Header and Footer
   - Responsive (single column on mobile)

2. **New stylesheet: `src/pages/insight-article.css`**
   - Contains all the scoped CSS from the HTML (masthead, sidebar cards, force list, opportunity grid, etc.) under a `.insight-article` parent class to avoid conflicts with the site's dark theme

3. **Add Google Fonts** in `index.html`
   - Playfair Display and DM Sans/DM Mono font imports

4. **New route in `src/App.tsx`**
   - `/insights/recruiting-difficulty` → `InsightArticle`

5. **Featured article section on homepage (`src/pages/Index.tsx`)**
   - New section between the existing Hero and Problem sections
   - Shows the article title, subtitle, and a "Read Article →" link
   - Styled to stand out as featured content

### Technical notes
- The article's cream/navy design is intentionally different from the site's dark theme — it will be scoped so styles don't leak
- All article content is hardcoded (not from the CMS), matching the provided HTML exactly
- Sidebar stats, callouts, and "What Retained Agents Have in Common" checklist are all preserved

