

## Redevelop Site Content with Real Industry Data

Using the four uploaded reports (IBISWorld 2026, Statista US Life Insurance, Statista Global Life Insurance, Leading Companies by Assets), we'll replace placeholder/generic content across the site with real, sourced data points. This transforms the site from "sounds smart" to "actually has the data" — the CoStar-style moat the blueprint calls for.

### What Changes

**1. Homepage (`src/pages/Index.tsx`) — Section 6: Intelligence / Benchmarks**

Replace the three generic KPI benchmark cards with real data from the reports:

| Current (placeholder) | New (sourced) |
|---|---|
| 85%+ Persistency | **$1.1T** — Industry Revenue (IBISWorld 2026) |
| 20%+ Producer Activation | **893** — Total US Life Insurance Businesses (IBISWorld 2026) |
| 3-5x Agent Productivity | **51%** — Americans Who Own Life Insurance (Statista/LIMRA 2024) |

Add a second row of data cards:
- **16.7%** — Industry Profit Margin (IBISWorld 2026)
- **53%** — Sales via Independent Agents (Statista/LIMRA 2023)
- **2.0%** — Forecast Revenue CAGR 2026-2031 (IBISWorld)

Replace the generic "Upcoming Analysis" authority topics with data-driven article angles sourced from the reports:
- "Why 49% of Americans Still Don't Own Life Insurance"
- "The $373B Investment Income Engine Behind Life Insurance"
- "711 Companies, 3 Control 10% — The Concentration Problem"
- "Independent Agents Now Own 53% of Distribution"
- "The $1.2T Outlook: What's Driving 2026-2031 Growth"

**2. Homepage — Section 3: Your Edge (Intelligence Pillars)**

Update the pillar descriptions with specific source citations:
- Industry Intelligence: "IBISWorld, Statista, NAIC, ACLI — $1.1 trillion market tracked"
- Consumer Behavior: "LIMRA ownership surveys, ACSI satisfaction indices, behavioral data"
- Market Activity: "Carrier deal flow, M&A activity, regulatory shifts"
- Operational Strategy: "Cost structure benchmarks, financial ratios, competitive analysis"

**3. Reports Page (`src/pages/Reports.tsx`)**

Enrich each flagship report description with real data hooks from the documents:
- Agent Production: Reference "329K industry employees" and "individuals aged 34 and younger delaying purchases"
- Persistency: Reference "policy lapse behavior" and "51% ownership rate declining from 65% in 2011"
- Compensation Benchmark: Reference "16.7% profit margin" and "4.3% wages as share of revenue"
- Tech Stack: Reference "New York Life's cloud CRM adoption (2022)" and "70%+ of professionals now using AI"

Add a new "Market Snapshot" section at the top of the Reports page showing 4-6 key industry stats as visual data cards (same style as homepage KPIs):
- $1.1T revenue / 893 businesses / 329K employees / 16.7% profit margin / 711 life insurance companies / $5.6T total investments

**4. Intelligence Hub (`src/pages/Intelligence.tsx`)**

Update the report descriptions in the flagship reports section with the same enriched copy from above.

Add a "Market Context" bar or section near the top (below hero) showing 3 headline stats to establish authority immediately:
- "$1.1 trillion" industry / "711 companies" / "262M policies in force"

**5. About Page — Update Intelligence Sources**

If the About page references intelligence sources, update with the actual report names and sources now available:
- IBISWorld: Life Insurance & Annuities in the US (Feb 2026)
- Statista: Life Insurance in the United States (2024)
- Statista: Life Insurance Worldwide (2024)
- NAIC, ACLI, LIMRA, S&P Global Market Intelligence

### Data Points Available (Key Extractions)

From IBISWorld 2026:
- Revenue: $1.1T (0.9% CAGR '21-'26, 2.0% forecast '26-'31)
- Employees: 329K / Businesses: 893
- Profit: $185B / Margin: 16.7% / Avg wage: $144K
- Top 3 players: Northwestern Mutual (3.8%), MassMutual (3.2%), New York Life (2.6%)
- Revenue breakdown: Investment income 33.7%, Individual annuities 31.8%, Individual life 12.3%
- Market by age: 65+ = 51.6%, 35-54 = 20.3%, 55-64 = 14.6%, <34 = 13.5%
- Concentration: Low / Competition: High / Barriers: High

From Statista US:
- 262M policies in force (2024)
- 711 life insurance companies (2024, down from 2,195 peak in 1990)
- 309.3K employees (2024)
- 53% independent agent distribution (2023)
- 51% ownership rate (2024, down from 65% in 2011)
- Prudential #1 by assets ($568B), Northwestern Mutual #1 by premiums ($19B)

From Statista Global:
- US = 44.9% of global insurance market
- US premiums: $3.5T (largest worldwide)
- China Life Insurance #1 globally by market cap ($181B)

### Design Approach

- Same card/grid patterns already on the page
- Data cards get small "Source: IBISWorld 2026" or "Source: LIMRA/Statista" labels in `font-mono text-[7px]` beneath each stat
- No new components or dependencies needed
- All data is hardcoded (static from reports) — not fetched from any API

### Files Modified

- `src/pages/Index.tsx` — KPI cards, intelligence pillars, authority topics
- `src/pages/Reports.tsx` — Market snapshot section, enriched report descriptions
- `src/pages/Intelligence.tsx` — Market context bar, enriched report descriptions

