

## System-Level Positioning Refinement

### What's changing
Applying Shawn's 11-point positioning correction across 3 files. No layout changes — only copy, labels, and framing updates to shift every section from "service/consulting" to "system/infrastructure/diagnostic."

### Files Modified

**1. `src/components/layout/Header.tsx`**
- `"Services"` → `"System Layers"` (nav link label, keeps `/consulting` route)

**2. `src/components/layout/Footer.tsx`**
- Tagline: `"Insurance distribution intelligence, frameworks, and consulting."` → `"Insurance distribution intelligence, diagnostics, and operating systems."`
- "Company" section: `"Consulting"` label → `"System Layers"`

**3. `src/pages/Index.tsx`** — Section-by-section copy updates:

| Section | Change |
|---------|--------|
| **Hero** | Add tension line below subheadline: *"If distribution is not instrumented, what determines performance?"* Remove "Book a Strategy Call" from final CTA |
| **The Real Issue (§2)** | Convert all 5 bullets to question-driven framing (e.g., *"If recruiting pipelines are not tracked by stage, what determines conversion?"*). Closing line → *"If these are not measured, what determines where growth is lost?"* |
| **Our Edge (§3)** | Section label → `"The System Layer"`. Pillar descriptions rewritten as necessity questions (e.g., *"Without KPI benchmarking, what determines whether production is improving or declining?"*) |
| **Scorecard (§4)** | Add pre-CTA tension: *"If you cannot see where your system is breaking, what determines what you fix?"* |
| **Pipeline (§5)** | Add pre-pipeline line: *"If any stage of the distribution pipeline breaks, what happens to output?"*. Add clarity line: *"This is not a framework. This is a measurable system."* |
| **Benchmarks (§6)** | Add intro: *"If performance varies across organizations, what determines the difference?"*. Add footer: *"These are not market statistics. These are system-level signals."* |
| **Implementation (§7)** | Header → `"System Integration Layers"`. Reframe model descriptions to "layer you connect into" language (e.g., *"Infrastructure Layer — where distribution becomes measurable and controlled"*) |
| **Positioning (§8)** | Outcome pills → *"Instrument the pipeline" / "Reduce performance variance" / "Scale distribution infrastructure"* (already correct — keep) |
| **Final CTA (§9)** | Remove "Book a Strategy Call" secondary CTA. Keep only "Get Your Distribution Score" |

### What's NOT changing
- Layout, design, colors, typography
- Route structure
- Any page other than Index, Header, Footer

