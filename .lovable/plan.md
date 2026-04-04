

## Replace Agent Production Report with Updated HTML

### What's changing
Replace the current `AgentProduction.tsx` and `agent-production.css` with the exact content from your uploaded HTML file (`CB_IntelReport_AgentProduction2026_1-2.html`). This is a full replacement — the component and stylesheet will be rebuilt from the HTML source.

### Key differences from current version
- Contents header now includes a styled "Contents" title (Playfair Display)
- Section 09 CTA text matches the HTML as-is (references "8 IDOS™ systems" and "7 minutes" per your source file)
- Sidebar restores the "711 life insurance companies" stat from your HTML
- CSS class names simplified (no `rpt-` prefix — scoped via the stylesheet)

### Changes

**1. `src/pages/reports/agent-production.css`** — Full rewrite
- Extract all CSS from the HTML `<style>` block
- Prefix all class names with `rpt-` to avoid global conflicts with the rest of the site

**2. `src/pages/reports/AgentProduction.tsx`** — Full rewrite
- Convert the HTML `<body>` content to JSX (self-closing tags, className, style objects)
- Keep `<Header />` and `<Footer />` from the site layout
- Keep `<Helmet>` for SEO metadata and Google Fonts
- Preserve all SVG visualizations exactly as provided
- All content matches the uploaded HTML verbatim

### Files Modified
- `src/pages/reports/agent-production.css`
- `src/pages/reports/AgentProduction.tsx`

