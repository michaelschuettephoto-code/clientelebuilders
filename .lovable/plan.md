

## Add New Intelligence Brief: "The Market Can Grow. The Question Is: Who Captures It?"

### Best placement
Following the established pattern, this goes as a new Insight page at **`/insights/market-capture`** — alongside the existing briefs at `/insights/recruiting-difficulty` and `/insights/demand-technology-buyer`.

### Technical approach

**1. New CSS file: `src/pages/market-capture-editorial.css`**
- All styles from the HTML (`.masthead`, `.signal`, `.fact-statement`, `.pull`, `.if-lines`, `.not-but`, `.stacked`, `.blist`, `.sys-list`, `.scope-block`, `.closing`, etc.)
- Scoped with a `.mc-editorial` wrapper to avoid conflicts with existing editorial CSS

**2. New page: `src/pages/MarketCapture.tsx`**
- Header + Footer wrapper (matching existing insight pages)
- Full HTML content converted to JSX
- Imports the scoped CSS

**3. Updated: `src/App.tsx`**
- Add lazy import for `MarketCapture`
- Add route: `/insights/market-capture`

### Files
- `src/pages/market-capture-editorial.css` (new)
- `src/pages/MarketCapture.tsx` (new)
- `src/App.tsx` (updated — one new route)

