

## Homepage Messaging Overhaul: Revenue Leak Diagnostic Positioning

### What's changing
Full copy rewrite of `src/pages/Index.tsx` to shift from "Operating System for Insurance Distribution" to "Revenue Leak Diagnostic + Fix" positioning. Same layout structure, new messaging throughout. Also updating Header, Footer, and Scorecard page to align.

### Section-by-section mapping (9 sections)

| # | Current | New |
|---|---------|-----|
| **1. Hero** | "The Operating System for Insurance Distribution" | **"We Identify and Fix Revenue Leaks Inside Life Insurance Distribution"** + subline about 20-40% revenue loss. Primary CTA → "Find Your Revenue Leaks (Free Assessment)". Secondary → "See How It Works" (anchor scroll). |
| **2. Problem** | "Why Most Distribution Organizations Stall" (question-driven) | **"You're Not Growing Slower... You're Leaking Faster"** with 6 specific leak bullets (agents not activating, chargebacks, persistency, etc.) + simple "Where Your Money Is Leaking" visual diagram (Lead → Recruit → Contract → Activate → Produce → Retain with leak indicators) |
| **3. System Layer** | "Not a Service. A System." (pillar questions) | **"The Insurance Distribution Operating System (IDOS)"** — 8 core areas listed plainly (Recruiting, Onboarding & Activation, Sales Performance, Persistency & Retention, Compensation Structure, Leadership & Culture, Technology & Data, Distribution Model). Ties to ScoreApp. |
| **4. Scorecard** | "Distribution System Diagnostic" | **"Step 1: Diagnose the Leaks"** — reframed deliverables: Revenue Leak Score, breakdown by system, benchmark vs other IMOs, estimated revenue loss, priority fixes. CTA → "Get Your Revenue Leak Report" |
| **5. Pipeline/IDOS** | Distribution Pipeline + IDOS grid | **"We Show You the Money You're Losing"** — the money section with concrete examples (50 agents fail to activate = $X lost, persistency drops 10% = $Y lost). Introduce Revenue Leak Calculator, Persistency Profit Engine, Distribution Benchmark System. |
| **6. Benchmarks** | CoStar-style data cards + table | **"Example: What a Revenue Leak Looks Like"** — case study style: 100 recruited → 40 activated → 18 writing → 10 persisting = "70% revenue loss before renewals even start." Keep benchmark table underneath as supporting data. |
| **7. Implementation** | "System Integration Layers" | **"Step 2: Fix the Leaks"** — Rebuild broken pipelines, fix activation gaps, improve persistency, optimize revenue flow. Positioned as "control your distribution—not guess at it." |
| **8. Authority** | "What We Are" positioning | **Authority section** — "Built using: Real distribution models, Industry benchmarks, Operator-level diagnostics" |
| **9. Final CTA** | "See Where Your System Is Breaking" | **"Find Out Where You're Losing Money"** — CTA: "Take the Revenue Leak Assessment". Subtext: "Takes 5 minutes. Shows you what most IMOs never measure." |

### Other file changes

**`src/components/layout/Footer.tsx`**
- Tagline → "Insurance distribution diagnostics, revenue leak identification, and system optimization."
- Remove any remaining "consulting" language

**`src/components/layout/Header.tsx`**
- No structural changes needed (nav labels already updated)

**Helmet/SEO**
- Title → "Clientele Builders — We Find and Fix Revenue Leaks in Insurance Distribution"
- Meta description updated to match revenue leak positioning

### What's preserved
- All layout patterns, spacing, typography system, color palette
- Route structure unchanged
- Same visual components (cards, grids, tables)
- Institutional aesthetic maintained — no hype, no fluff

### What's removed
- "Operating System" language (replaced with revenue/diagnostic framing)
- Generic system-layer descriptions
- Any remaining consulting/agency feel

### Files Modified
- `src/pages/Index.tsx` (full copy rewrite, constants updated, leak diagram added)
- `src/components/layout/Footer.tsx` (tagline update)

