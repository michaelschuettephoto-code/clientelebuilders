import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const AgentProduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>2026 Insurance Agent Production Report — Clientele Builders</title>
        <meta name="description" content="Structural drivers of production, retention, and distribution efficiency — analyzed through the IDOS™ Framework. Data from IBISWorld, Statista, and proprietary analysis." />
      </Helmet>
      <Header />

      {/* ══════════ COVER ══════════ */}
      <section className="bg-primary relative overflow-hidden min-h-[80vh] flex flex-col">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(var(--sky)/0.12),transparent_60%),radial-gradient(ellipse_at_20%_80%,hsl(var(--gold)/0.06),transparent_50%)]" />
        <div className="relative z-10 flex-1 flex flex-col max-w-[1000px] mx-auto w-full px-6 md:px-16 py-16 md:py-[60px]">
          <div className="flex justify-between items-start mb-auto">
            <span className="font-mono text-[10px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase">Clientele Builders · Intelligence Division</span>
            <span className="font-mono text-[9px] tracking-[0.15em] bg-accent text-primary px-3.5 py-1 font-medium uppercase">Premium Report</span>
          </div>
          <div className="py-20 md:py-[80px]">
            <div className="font-mono text-[9px] tracking-[0.35em] text-primary-foreground/35 uppercase mb-5">Annual Production Intelligence Report</div>
            <h1 className="font-serif text-4xl md:text-[64px] font-black text-primary-foreground leading-[1.0] tracking-tight mb-2">
              Insurance Agent <em className="text-[hsl(var(--sky))] italic">Production</em>
            </h1>
            <div className="font-serif text-4xl md:text-[64px] font-black text-accent leading-[1.0] tracking-tight mb-7">Report 2026</div>
            <p className="text-primary-foreground/50 text-base font-light leading-[1.7] max-w-[560px] mb-10">
              Structural Drivers of Production, Retention, and Distribution Efficiency — Analyzed Through the Insurance Distribution Operating System (IDOS)™ Framework
            </p>
            <div className="inline-flex items-center gap-2.5 bg-primary-foreground/5 border border-primary-foreground/10 px-5 py-2.5">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[hsl(var(--gold-light))] uppercase">Framework: Insurance Distribution Operating System (IDOS)™</span>
            </div>
          </div>
          <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="font-mono text-[9px] tracking-[0.15em] text-primary-foreground/30 uppercase">Source: IBISWorld · Statista · IDOS™ Analysis</span>
            <span className="font-mono text-[9px] tracking-[0.15em] text-primary-foreground/30 uppercase">2026 Edition · Confidential</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
      </section>

      {/* ══════════ CONTENTS ══════════ */}
      <section className="bg-[hsl(var(--ink))] py-12 px-6 md:px-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[hsl(var(--gold-light))] uppercase">Contents</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-primary-foreground/[0.06]">
            {[
              { num: "01", title: "Executive Brief" },
              { num: "02", title: "System Breakdown — IDOS™ Framework" },
              { num: "03", title: "KPI Analysis & Benchmarks" },
              { num: "04", title: "Bottleneck Identification" },
              { num: "05", title: "Market Intelligence" },
              { num: "06", title: "Strategic Recommendations" },
              { num: "07", title: "Extended Observations" },
              { num: "08", title: "Visual Intelligence — System Maps" },
              { num: "09", title: "Distribution Assessment" },
            ].map((item) => (
              <div key={item.num} className="bg-[hsl(var(--ink))] p-4 md:p-5">
                <div className="font-mono text-[9px] text-accent tracking-[0.15em] mb-1">{item.num}</div>
                <div className="text-xs text-primary-foreground/65 font-medium leading-snug">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ BODY ══════════ */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-[52px] items-start">
          <main className="min-w-0">

            {/* ── 01 EXECUTIVE BRIEF ── */}
            <PartBanner num="01" title="Executive" em="Brief" />

            <div className="bg-primary p-8 md:p-9 mb-8">
              <div className="font-mono text-[9px] tracking-[0.28em] text-[hsl(var(--gold-light))] uppercase mb-4">At a Glance</div>
              {[
                { tag: "Key Insight", val: "Production is not an individual outcome. It is the output of a coordinated distribution system. Organizations that treat it as anything else will continue to underperform." },
                { tag: "Business Impact", val: "In a commission-driven environment, no production means no revenue. Inconsistent production means unstable revenue. The system design determines the output floor and ceiling — not individual effort." },
                { tag: "Who It Affects", val: "IMO leaders, agency principals, distribution operators, and any organization where agent productivity determines organizational revenue." },
                { tag: "The Shift", val: 'From "Who is producing?" → To "What system consistently produces producers?" This reframe separates institutions from organizations.' },
              ].map((row) => (
                <div key={row.tag} className="flex gap-3 py-3 border-b border-primary-foreground/[0.08] last:border-b-0 last:pb-0">
                  <span className="font-mono text-[8px] tracking-[0.15em] text-accent uppercase shrink-0 min-w-[80px] pt-0.5">{row.tag}</span>
                  <span className="text-[13px] text-primary-foreground/75 leading-relaxed">{row.val}</span>
                </div>
              ))}
            </div>

            <p className="text-sm leading-[1.85] mb-3.5">The dominant question in insurance distribution is almost always about recruiting. How many agents did we bring in? How many are in the pipeline? The data from this report suggests that question — while not wrong — is secondary to the more important one: what happens to agents after they arrive?</p>
            <p className="text-sm leading-[1.85] mb-3.5">Independent and affiliated agents account for nearly 90% of total life insurance sales in the U.S. That makes agent productivity not just an operational metric, but the primary economic lever of the entire distribution system. Organizations that systematize production compound. Organizations that leave it to chance reset.</p>

            <div className="bg-[hsl(var(--fog))] border-l-4 border-accent px-5 py-5 my-6">
              <p className="font-serif text-[17px] italic text-[hsl(var(--slate))] leading-[1.55] m-0">"The real reason your agents aren't producing isn't training — it's system design."</p>
            </div>

            {/* ── 02 SYSTEM BREAKDOWN ── */}
            <PartBanner num="02" title="System" em="Breakdown" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">The IDOS™ Framework — Six Stages of Distribution Performance</h2>
            <p className="text-sm leading-[1.85] mb-3.5">Production variability is cumulative. If each stage of the distribution system introduces even minor inefficiency, the total output declines nonlinearly. The IDOS™ framework maps exactly where performance degrades — and why.</p>

            {/* SYSTEM MAP SVG */}
            <div className="bg-card border border-border p-6 my-6">
              <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-muted-foreground mb-4 block">System Map — IDOS™ Distribution Pipeline</span>
              <svg viewBox="0 0 860 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#4A6FA5"/>
                  </marker>
                </defs>
                {[
                  { x: 10, fill: "#0D1B2A", label: "Recruiting", sub: "Candidate flow", risk: "Quality risk", riskColor: "#A03030" },
                  { x: 150, fill: "#1A2535", label: "Onboarding", sub: "Readiness", risk: "Speed risk", riskColor: "#C8972A" },
                  { x: 290, fill: "#2E4057", label: "Activation", sub: "First production", risk: "Output risk", riskColor: "#A03030" },
                  { x: 430, fill: "#2E4057", label: "Retention", sub: "Policy persistence", risk: "Compounding risk", riskColor: "#A03030" },
                  { x: 570, fill: "#1A2535", label: "Leadership", sub: "Duplication", risk: "Scale risk", riskColor: "#C8972A" },
                ].map((s, i) => (
                  <g key={i}>
                    <rect x={s.x} y={70} width={120} height={60} fill={s.fill}/>
                    <text x={s.x+60} y={96} fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">{String(i+1).padStart(2,'0')}</text>
                    <text x={s.x+60} y={112} fill="white" fontSize="10" textAnchor="middle" fontWeight="600">{s.label}</text>
                    <text x={s.x+60} y={125} fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">{s.sub}</text>
                    {i < 5 && <line x1={s.x+120} y1={100} x2={s.x+138} y2={100} stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)"/>}
                    <text x={s.x+60} y={155} fill={s.riskColor} fontSize="8" textAnchor="middle">{s.risk}</text>
                  </g>
                ))}
                {/* Stage 6 — Infrastructure */}
                <rect x={710} y={70} width={140} height={60} fill="#0D1B2A" stroke="#C8972A" strokeWidth="1"/>
                <text x={780} y={96} fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">06</text>
                <text x={780} y={112} fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Infrastructure</text>
                <text x={780} y={125} fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Visibility + data</text>
                <text x={780} y={155} fill="#2A7A4B" fontSize="8" textAnchor="middle">Stabilizer</text>
              </svg>
            </div>

            {/* TIME TO PRODUCTION */}
            <div className="font-mono text-[9px] tracking-[0.28em] uppercase text-[hsl(var(--steel))] flex items-center gap-2.5 mt-11 mb-3.5">
              Time-to-Production <span className="flex-1 h-px bg-border" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Onboarding Velocity as a Primary Efficiency Metric</h2>
            <p className="text-sm leading-[1.85] mb-3.5">While no universal industry benchmark exists for time-to-first-sale, the metric functions as a powerful internal diagnostic. Time-to-production reveals system health across four dimensions simultaneously: onboarding clarity, accountability structure, training quality, and feedback loop speed.</p>

            <div className="bg-card border border-border p-6 my-6">
              <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-muted-foreground mb-4 block">Time-to-Production — Fast Path vs. Slow Path</span>
              <svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <line x1="40" y1="180" x2="800" y2="180" stroke="#D4E0EC" strokeWidth="1"/>
                {[["Day 0",40],["Day 14",200],["Day 30",380],["Day 60",560],["Day 90",740]].map(([l,x])=>(
                  <text key={l as string} x={x as number} y={195} fill="#5A6A7A" fontSize="8" textAnchor="middle">{l as string}</text>
                ))}
                {/* Fast path */}
                <text x="40" y="30" fill="#2A7A4B" fontSize="9" fontWeight="600" letterSpacing="1">FAST PATH — Structured System</text>
                {[[40,"#2A7A4B",6,"Recruited"],[200,"#2A7A4B",6,"Licensed"],[380,"#C8972A",8,"First Sale ✓"],[560,"#2A7A4B",6,"Consistent"],[740,"#2A7A4B",6,"Producing"]].map(([cx,fill,r,label])=>(
                  <g key={cx as number}>
                    <circle cx={cx as number} cy={60} r={r as number} fill={fill as string}/>
                    <text x={cx as number} y={78} fill={fill as string} fontSize="8" textAnchor="middle">{label as string}</text>
                  </g>
                ))}
                {[[40,194],[206,374],[388,554],[566,734]].map(([x1,x2])=>(
                  <line key={x1} x1={x1} y1={60} x2={x2} y2={60} stroke="#2A7A4B" strokeWidth="2"/>
                ))}
                {/* Slow path */}
                <text x="40" y="105" fill="#A03030" fontSize="9" fontWeight="600" letterSpacing="1">SLOW PATH — Fragmented System</text>
                {[[40,140,"#A03030",6,"Recruited"],[200,140,"#5A6A7A",5,"Unclear steps"],[380,148,"#5A6A7A",5,"Still waiting"],[560,155,"#5A6A7A",5,"Drift / quit"],[740,148,"#C8972A",6,"First Sale (day 85)"]].map(([cx,cy,fill,r,label])=>(
                  <g key={cx as number}>
                    <circle cx={cx as number} cy={cy as number} r={r as number} fill={fill as string}/>
                    <text x={cx as number} y={(cy as number)+18} fill={fill as string} fontSize="8" textAnchor="middle">{label as string}</text>
                  </g>
                ))}
                {[[40,194,140,140],[206,374,140,148],[386,554,148,155],[566,734,155,148]].map(([x1,x2,y1,y2])=>(
                  <line key={x1} x1={x1} y1={y1} x2={x2} y2={y2} stroke={x1===40?"#A03030":x1===566?"#C8972A":"#5A6A7A"} strokeWidth="1.5" strokeDasharray="4,3"/>
                ))}
                <rect x={310} y={10} width={200} height={22} fill="none" stroke="#D4E0EC" strokeWidth="1"/>
                <text x={410} y={25} fill="#5A6A7A" fontSize="8" textAnchor="middle">55-day performance gap</text>
              </svg>
            </div>

            {/* ── 03 KPI ANALYSIS ── */}
            <PartBanner num="03" title="KPI Analysis &" em="Benchmarks" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Revenue Efficiency Benchmarks — Major Carriers</h2>
            <p className="text-sm leading-[1.85] mb-3.5">IBISWorld benchmarking data reveals material differences in revenue per employee across major insurers. These differences reflect not just scale, but system efficiency — how effectively organizations convert workforce into sustained output.</p>

            <div className="w-full overflow-auto my-4">
              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr className="bg-primary">
                    <th className="font-mono text-[9px] tracking-[0.12em] uppercase p-2.5 md:px-3.5 md:py-2.5 text-primary-foreground text-left">Organization</th>
                    <th className="font-mono text-[9px] tracking-[0.12em] uppercase p-2.5 md:px-3.5 md:py-2.5 text-primary-foreground text-left">Revenue / Employee</th>
                    <th className="font-mono text-[9px] tracking-[0.12em] uppercase p-2.5 md:px-3.5 md:py-2.5 text-primary-foreground text-left">Efficiency Index</th>
                    <th className="font-mono text-[9px] tracking-[0.12em] uppercase p-2.5 md:px-3.5 md:py-2.5 text-primary-foreground text-left">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { org: "Northwestern Mutual", rev: "~$5.0M", barW: 100, barColor: "bg-accent", idx: "Highest observed", signal: "HIGH", sigColor: "text-[#2A7A4B]" },
                    { org: "MassMutual", rev: "~$2.7M", barW: 54, barColor: "bg-[hsl(var(--sky))]", idx: "Mid-tier", signal: "MED", sigColor: "text-[#8A5A00]" },
                    { org: "New York Life", rev: "~$1.1M", barW: 22, barColor: "bg-[hsl(var(--steel))]", idx: "Lower efficiency", signal: "LOWER", sigColor: "text-muted-foreground" },
                  ].map((row, i) => (
                    <tr key={row.org} className={i % 2 === 1 ? "bg-[hsl(var(--fog))]" : ""}>
                      <td className="px-3.5 py-2.5 border-b border-border font-semibold text-[hsl(var(--navy))]">{row.org}</td>
                      <td className="px-3.5 py-2.5 border-b border-border">
                        <div className="flex items-center gap-2.5">
                          <div className={`h-2 ${row.barColor}`} style={{ width: row.barW }} />
                          <strong>{row.rev}</strong>
                        </div>
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-border">{row.idx}</td>
                      <td className={`px-3.5 py-2.5 border-b border-border font-mono text-[11px] font-semibold ${row.sigColor}`}>{row.signal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#FEF3E2] border-l-[3px] border-accent p-3.5 my-4">
              <div className="font-mono text-[8px] tracking-[0.2em] text-[#8A5A00] uppercase mb-1.5">Analytical Note</div>
              <div className="text-[13px] leading-[1.7]">Revenue per employee should be interpreted cautiously — organizational size, structure, and business mix affect this metric. Its value is as a directional indicator of operational leverage, not a direct performance comparison. The 4.5x gap between top and bottom, however, is too large to explain away by structure alone.</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              {[
                { num: "KPI 01", head: "Producing Agent % of Licensed Roster", body: "Top 10% organizations: 35–45% of licensed agents actively producing. Industry average: 18–25%. This gap is a system indicator — not a motivation indicator.", color: "bg-accent" },
                { num: "KPI 02", head: "13-Month Persistency Rate", body: "Top performers: 82%+. Industry average: ~76%. Each percentage point drop has a direct multiplier effect on override income and carrier relationship quality.", color: "bg-[hsl(var(--sky))]" },
                { num: "KPI 03", head: "Agent 12-Month Retention", body: "Organizations with structured onboarding retain 55–70% of new agents at 12 months. Organizations without: typically below 25%. The system, not the individual, determines this outcome.", color: "bg-[#2A7A4B]" },
                { num: "KPI 04", head: "Policies Per Active Agent / Month", body: "High-performing organizations: 3–5 policies per active agent monthly. Lower-performing: 1–2. The delta is rarely explained by agent quality — it is almost always explained by lead flow and sales process.", color: "bg-[hsl(var(--slate))]" },
              ].map((kpi) => (
                <div key={kpi.num} className="bg-card border border-border p-5 relative">
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${kpi.color}`} />
                  <div className="font-mono text-[8px] tracking-[0.15em] text-muted-foreground mb-1.5">{kpi.num}</div>
                  <div className="font-serif text-[15px] font-bold text-[hsl(var(--navy))] mb-1.5 leading-snug">{kpi.head}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{kpi.body}</div>
                </div>
              ))}
            </div>

            {/* ── 04 BOTTLENECKS ── */}
            <PartBanner num="04" title="Bottleneck" em="Identification" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Where Distribution Systems Break — Predictably</h2>
            <p className="text-sm leading-[1.85] mb-3.5">Across organizations, bottlenecks appear in the same locations with such regularity that their emergence is not a surprise — it is a system property. These are not isolated failures. They are the expected outputs of predictable system design errors.</p>

            {/* Pipeline Degradation SVG */}
            <div className="bg-card border border-border p-6 my-6">
              <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-muted-foreground mb-4 block">Pipeline Degradation Model — Efficiency Loss Across Stages</span>
              <svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {[
                  { pts: "40,20 780,20 720,65 100,65", fill: "#0D1B2A", label: "RECRUITING — Initial candidate volume", labelColor: "#F0D080", y: 47, pct: "100%" },
                  { pts: "100,70 720,70 660,115 160,115", fill: "#1A2535", label: "ONBOARDING — Qualification & readiness (efficiency loss begins)", labelColor: "rgba(255,255,255,0.75)", y: 97, pct: "~72%" },
                  { pts: "160,120 660,120 600,165 220,165", fill: "#2E4057", label: "ACTIVATION — First-production window (critical bottleneck)", labelColor: "rgba(255,255,255,0.7)", y: 147, pct: "~48%" },
                  { pts: "220,170 600,170 540,215 280,215", fill: "#3A5070", label: "RETENTION — Policy persistence & agent loyalty", labelColor: "rgba(255,255,255,0.65)", y: 197, pct: "~31%" },
                  { pts: "280,220 540,220 490,250 330,250", fill: "#4A6FA5", label: "LEADERSHIP & INFRASTRUCTURE — Compounding output", labelColor: "rgba(255,255,255,0.6)", y: 240, pct: "Compound" },
                ].map((s, i) => (
                  <g key={i}>
                    <polygon points={s.pts} fill={s.fill}/>
                    <text x={410} y={s.y} fill={s.labelColor} fontSize="9" textAnchor="middle" letterSpacing="1">{s.label}</text>
                    <text x={790} y={s.y} fill={i < 3 ? "#A03030" : i === 3 ? "#C8972A" : "#2A7A4B"} fontSize="8" textAnchor="start">{s.pct}</text>
                  </g>
                ))}
              </svg>
            </div>

            <ul className="list-none my-4 divide-y divide-border border-t border-border">
              {[
                { dot: "bg-[#A03030]", title: "Recruiting Bottleneck", desc: "Volume recruiting without qualification criteria. Misalignment between expectations and organizational reality. Creates a downstream failure cascade: unqualified agents who fail quickly erode management capacity and create chargeback exposure." },
                { dot: "bg-accent", title: "Onboarding Bottleneck", desc: "Unclear first steps, no defined sequence, dependence on individual relationships rather than documented process. This is the highest-leverage bottleneck to fix — it determines the velocity of every agent who comes after." },
                { dot: "bg-[#A03030]", title: "Activation Bottleneck", desc: "Delayed production caused by weak feedback loops, absent accountability structures, and activity tracking that doesn't exist until it's too late. Most organizations discover this problem at 90 days, when it should have been caught at 14." },
                { dot: "bg-accent", title: "Retention Bottleneck", desc: "Policy lapse driven by poor expectation setting at point-of-sale and absent post-sale client onboarding. Chargeback exposure is almost always a symptom of this bottleneck — not a cause in itself." },
                { dot: "bg-[hsl(var(--sky))]", title: "Leadership Bottleneck", desc: "Inability to duplicate performance at scale. The organization grows past the span of control of its founders and has no next layer of leadership ready. Growth stalls — or collapses under its own weight." },
                { dot: "bg-[hsl(var(--sky))]", title: "Infrastructure Bottleneck", desc: "Absence of data visibility. Problems are hidden until they become crises. Without dashboards, KPI tracking, and reporting architecture, leadership manages by feeling rather than by fact." },
              ].map((bn) => (
                <li key={bn.title} className="flex gap-4 py-3.5">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 mt-1.5 ${bn.dot}`} />
                  <div>
                    <strong className="block text-[13px] font-semibold text-[hsl(var(--navy))] mb-0.5">{bn.title}</strong>
                    <span className="text-xs text-muted-foreground leading-relaxed">{bn.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* ── 05 MARKET INTELLIGENCE ── */}
            <PartBanner num="05" title="Market" em="Intelligence" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Structural Dynamics Shaping the Distribution Environment</h2>

            <div className="bg-[hsl(var(--fog))] border-l-[3px] border-[hsl(var(--steel))] p-3.5 my-4">
              <div className="font-mono text-[8px] tracking-[0.2em] text-[hsl(var(--steel))] uppercase mb-1.5">Market Scale</div>
              <div className="text-[13px] leading-[1.7]">The U.S. life insurance industry generates over $1.1 trillion in annual revenue and hundreds of millions of policies in force. The brokerage industry employs approximately 1 million workers. Agent-led distribution accounts for roughly 90% of total life insurance sales — making distribution infrastructure the primary competitive variable at scale.</div>
            </div>

            <p className="text-sm leading-[1.85] mb-3.5">The insurance market is mature and densely competitive. Carriers cannot meaningfully differentiate on product alone — the policies themselves are commodity-adjacent. In this environment, the dominant competitive variable is system efficiency: how effectively an organization converts agent input into sustained policy output.</p>
            <p className="text-sm leading-[1.85] mb-3.5">IBISWorld data highlights increasing adoption of automation and specialized operational roles to manage the complexity that comes with scale. This is not a technology trend — it is an infrastructure trend. Organizations that can systematize previously manual coordination functions gain a structural efficiency advantage that compounds over time.</p>

            <div className="bg-[hsl(var(--fog))] border-l-4 border-accent px-5 py-5 my-6">
              <p className="font-serif text-[17px] italic text-[hsl(var(--slate))] leading-[1.55] m-0">"In a mature, agent-dominated market with commodity products, system efficiency is the only durable competitive advantage."</p>
            </div>

            {/* ── 06 STRATEGIC RECOMMENDATIONS ── */}
            <PartBanner num="06" title="Strategic" em="Recommendations" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Five System Moves for Distribution Leaders in 2026</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 my-5">
              {[
                { n: "01", title: "Redefine Recruiting Success as Activation Rate, Not Headcount", body: "Measure the percentage of recruits who produce a first policy within 30 days. Set a target. Track it weekly. This single metric shift changes recruiting behavior more than any training program." },
                { n: "02", title: "Document and Standardize the First 30 Days", body: "Create a written onboarding sequence that does not depend on any specific manager or trainer. Day 1 through Day 30 should be executable by anyone in the organization. Reduce time-to-production by eliminating ambiguity." },
                { n: "03", title: "Build Retention Infrastructure Before Scaling Recruiting", body: "Every dollar spent recruiting into a broken retention system accelerates loss. Fix the container before filling it. Measure 13-month persistency by agent. Address the bottom quartile structurally, not individually." },
                { n: "04", title: "Establish a Weekly KPI Review Protocol", body: "Five metrics reviewed weekly by leadership: producing agent %, policies per active agent, 13-month persistency, new agent 90-day retention, and recruiting pipeline conversion. Make data the decision standard — not instinct." },
                { n: "05", title: "Align Compensation Structure With Retention Outcomes", body: "Compensation grids that reward production volume without persistency adjustments are architecturally broken. Redesign to create financial consequences for poor policy quality — not just financial rewards for volume." },
              ].map((rec) => (
                <div key={rec.n} className="bg-primary p-5">
                  <span className="font-mono text-lg text-accent block mb-2">{rec.n}</span>
                  <div className="font-semibold text-[13px] text-primary-foreground mb-1.5 leading-snug">{rec.title}</div>
                  <div className="text-[11px] text-primary-foreground/60 leading-relaxed">{rec.body}</div>
                </div>
              ))}
            </div>

            <hr className="border-t border-border my-10" />

            {/* ── 07 EXTENDED OBSERVATIONS ── */}
            <PartBanner num="07" title="Extended" em="Observations" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Five Patterns Across Distribution Organizations</h2>

            <ul className="list-none divide-y divide-border">
              {[
                { n: "01", body: <><strong className="text-[hsl(var(--navy))]">Organizations routinely misdiagnose growth constraints as recruiting problems when they are activation problems.</strong> Adding agents to a system that cannot activate them quickly does not create growth — it creates management overhead and chargeback risk.</> },
                { n: "02", body: <><strong className="text-[hsl(var(--navy))]">Onboarding quality determines early system velocity more than recruiting volume.</strong> A well-onboarded cohort of 10 agents will consistently outperform a poorly-onboarded cohort of 30 over a 12-month period.</> },
                { n: "03", body: <><strong className="text-[hsl(var(--navy))]">Retention determines whether production compounds or resets.</strong> When retention is high, past production continues generating value and revenue stabilizes into a flywheel. When retention is low, organizations are perpetually restarting — never building the book of business that creates long-term equity value.</> },
                { n: "04", body: <><strong className="text-[hsl(var(--navy))]">Leadership determines whether growth scales or stalls.</strong> The ceiling of most organizations is the bandwidth of their founders. Organizations that develop a next layer of capable, autonomous leaders before they need them scale past this ceiling. Those that don't hit it repeatedly.</> },
                { n: "05", body: <><strong className="text-[hsl(var(--navy))]">Infrastructure determines whether problems are visible or hidden.</strong> Most distribution organizations are operating with serious system failures they cannot see because they have no reporting infrastructure to detect them. By the time the problem is obvious, the cost is already significant.</> },
              ].map((obs) => (
                <li key={obs.n} className="flex gap-3.5 py-3.5">
                  <span className="font-mono text-[10px] text-accent font-medium shrink-0 min-w-[22px]">{obs.n}</span>
                  <div className="text-[13px] leading-[1.7]">{obs.body}</div>
                </li>
              ))}
            </ul>

            {/* ── 08 VISUAL INTELLIGENCE ── */}
            <PartBanner num="08" title="Visual Intelligence —" em="System Models" />

            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Retention Model — Pipeline vs. Flywheel</h2>
            <p className="text-sm leading-[1.85] mb-3.5">The distinction between a pipeline and a flywheel is the most important structural concept in distribution economics. One resets. The other compounds. Which one your organization runs determines whether you are building equity or burning through it.</p>

            <div className="bg-card border border-border p-6 my-6">
              <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-muted-foreground mb-4 block">Retention — Pipeline (Linear Reset) vs. Flywheel (Compounding)</span>
              <svg viewBox="0 0 820 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* PIPELINE (left) */}
                <text x="185" y="22" fill="#A03030" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">PIPELINE MODEL</text>
                <text x="185" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Resets with every loss</text>
                <rect x="40" y="50" width="80" height="35" fill="#1A2535"/>
                <text x="80" y="73" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Recruit</text>
                <line x1="120" y1="67" x2="138" y2="67" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)"/>
                <rect x="140" y="50" width="80" height="35" fill="#1A2535"/>
                <text x="180" y="73" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Produce</text>
                <line x1="220" y1="67" x2="238" y2="67" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)"/>
                <rect x="240" y="50" width="80" height="35" fill="#A03030" fillOpacity="0.4"/>
                <text x="280" y="73" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Attrition</text>
                <path d="M 280,85 Q 280,130 80,130 Q 80,90 80,85" fill="none" stroke="#A03030" strokeWidth="1.5" strokeDasharray="4,3"/>
                <text x="180" y="148" fill="#A03030" fontSize="8" textAnchor="middle">↺ Restart. No compounding.</text>
                {/* Divider */}
                <line x1="410" y1="10" x2="410" y2="260" stroke="#D4E0EC" strokeWidth="1"/>
                {/* FLYWHEEL (right) */}
                <text x="615" y="22" fill="#2A7A4B" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">FLYWHEEL MODEL</text>
                <text x="615" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Each cycle builds on the last</text>
                <circle cx="615" cy="150" r="85" fill="none" stroke="#D4E0EC" strokeWidth="1" strokeDasharray="3,3"/>
                {[
                  { cx: 615, cy: 65, fill: "#0D1B2A", l1: "RECRUIT", l2: "+ Quality" },
                  { cx: 700, cy: 150, fill: "#1A2535", l1: "PRODUCE", l2: "+ Volume" },
                  { cx: 615, cy: 235, fill: "#2E4057", l1: "RETAIN", l2: "+ Persist" },
                  { cx: 530, cy: 150, fill: "#1A2535", l1: "LEAD", l2: "+ Duplicate" },
                ].map((n) => (
                  <g key={n.l1}>
                    <circle cx={n.cx} cy={n.cy} r={28} fill={n.fill}/>
                    <text x={n.cx} y={n.cy-4} fill="#F0D080" fontSize="7" textAnchor="middle">{n.l1}</text>
                    <text x={n.cx} y={n.cy+8} fill="rgba(255,255,255,0.6)" fontSize="7" textAnchor="middle">{n.l2}</text>
                  </g>
                ))}
                {[
                  "M 635,90 Q 695,110 690,130",
                  "M 690,168 Q 680,220 640,228",
                  "M 592,228 Q 548,218 540,170",
                  "M 540,128 Q 552,85 594,75",
                ].map((d) => (
                  <path key={d} d={d} fill="none" stroke="#2A7A4B" strokeWidth="2" markerEnd="url(#arr)"/>
                ))}
                <text x="615" y="154" fill="#2A7A4B" fontSize="9" textAnchor="middle" fontWeight="600">COMPOUND</text>
              </svg>
            </div>

            {/* VARIANCE REDUCTION */}
            <h2 className="font-serif text-2xl font-bold text-[hsl(var(--navy))] mb-4 leading-tight">Infrastructure Effect — Variance Reduction</h2>
            <p className="text-sm leading-[1.85] mb-3.5">Infrastructure's primary function in a distribution organization is variance reduction. Without it, outcomes scatter widely — some agents perform, most don't, and leadership cannot explain or replicate the difference. With it, the distribution of outcomes tightens, predictability increases, and scale becomes possible.</p>

            <div className="bg-card border border-border p-6 my-6">
              <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-muted-foreground mb-4 block">Agent Output Distribution — Before vs. After Infrastructure</span>
              <svg viewBox="0 0 820 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* WITHOUT */}
                <text x="195" y="22" fill="#A03030" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">WITHOUT INFRASTRUCTURE</text>
                <text x="195" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">High variance — unpredictable output</text>
                {[[60,160],[80,90],[100,140],[120,70],[140,170],[160,55],[180,130],[200,100],[220,155],[240,80],[260,145],[280,60],[300,120],[320,165],[340,95]].map(([cx,cy])=>(
                  <circle key={`s${cx}`} cx={cx} cy={cy} r={4} fill="#A03030" opacity="0.6"/>
                ))}
                <rect x={50} y={50} width={300} height={130} fill="rgba(160,48,48,0.04)" stroke="rgba(160,48,48,0.2)" strokeWidth="1" strokeDasharray="3,3"/>
                <text x={195} y={185} fill="#A03030" fontSize="8" textAnchor="middle">Variance band: wide — results unpredictable</text>
                <line x1={420} y1={10} x2={420} y2={195} stroke="#D4E0EC" strokeWidth="1"/>
                {/* WITH */}
                <text x="625" y="22" fill="#2A7A4B" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">WITH INFRASTRUCTURE</text>
                <text x="625" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Low variance — controlled, scalable output</text>
                {[[470,108],[490,100],[510,112],[530,95],[550,105],[570,98],[590,108],[610,100],[630,110],[650,97],[670,106],[690,101],[710,108],[730,99],[750,104]].map(([cx,cy])=>(
                  <circle key={`t${cx}`} cx={cx} cy={cy} r={4} fill="#2A7A4B" opacity="0.7"/>
                ))}
                <rect x={458} y={88} width={304} height={32} fill="rgba(42,122,75,0.06)" stroke="rgba(42,122,75,0.3)" strokeWidth="1" strokeDasharray="3,3"/>
                <text x={625} y={185} fill="#2A7A4B" fontSize="8" textAnchor="middle">Variance band: tight — results predictable and scalable</text>
              </svg>
            </div>

          </main>

          {/* ── SIDEBAR ── */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            {/* Market Benchmarks */}
            <SidebarCard title="Market Benchmarks 2026">
              {[
                { label: "Agent-led life insurance sales share", val: "~90%", trend: "nt" },
                { label: "U.S. life insurance companies", val: "711", trend: "nt" },
                { label: "Brokerage industry workforce", val: "~1M", trend: "nt" },
                { label: "Rev/employee — top carrier", val: "$5.0M", trend: "up" },
                { label: "Avg producing agent % of licensed", val: "~22%", trend: "dn" },
                { label: "Avg 13-mo persistency rate", val: "~76%", trend: "dn" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-baseline py-2.5 border-b border-border last:border-b-0 last:pb-0">
                  <span className="text-[11px] text-muted-foreground leading-snug max-w-[148px]">{s.label}</span>
                  <span className={`font-serif text-base font-bold whitespace-nowrap ${s.trend === "up" ? "text-[#2A7A4B]" : s.trend === "dn" ? "text-[#A03030]" : "text-[hsl(var(--navy))]"}`}>
                    {s.val}
                    <span className={`font-mono text-[9px] px-1 py-0.5 ml-1 ${s.trend === "up" ? "bg-[#E6F4ED] text-[#2A7A4B]" : s.trend === "dn" ? "bg-[#FAE8E8] text-[#A03030]" : "bg-[hsl(var(--fog))] text-muted-foreground"}`}>
                      {s.trend === "up" ? "↑" : s.trend === "dn" ? "↓" : "→"}
                    </span>
                  </span>
                </div>
              ))}
            </SidebarCard>

            {/* Confidence Levels */}
            <SidebarCard title="Confidence Levels">
              <div className="text-xs text-muted-foreground leading-[1.7]">
                <div className="py-2 border-b border-border">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] px-2.5 py-0.5 bg-[#E6F4ED] text-[#2A7A4B] mb-1.5">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#2A7A4B]" /> HIGH
                  </span>
                  <div>Production as system output · Retention dynamics · Distribution density · Bottleneck patterns · Infrastructure effect</div>
                </div>
                <div className="py-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.12em] px-2.5 py-0.5 bg-[#FEF3E2] text-[#8A5A00] mb-1.5">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#8A5A00]" /> MEDIUM
                  </span>
                  <div>Time-to-production benchmarks (no universal standard) · Revenue efficiency comparisons (structural differences apply)</div>
                </div>
              </div>
            </SidebarCard>

            {/* Data Sources */}
            <SidebarCard title="Data Sources">
              <div className="text-xs text-muted-foreground leading-[1.7] divide-y divide-border">
                <div className="py-2">IBISWorld — Insurance brokerage revenue and market structure</div>
                <div className="py-2">Statista — U.S. life insurance market scale data</div>
                <div className="py-2">IBISWorld — Company benchmarks (Northwestern Mutual, MassMutual, NY Life)</div>
                <div className="py-2">IDOS™ Framework — Clientele Builders proprietary distribution analysis</div>
              </div>
            </SidebarCard>

            {/* The 5 System Shifts */}
            <SidebarCard title="The 5 System Shifts">
              <div className="text-xs text-muted-foreground leading-[1.7] divide-y divide-border">
                {[
                  { title: "Measure activation rate", sub: "Not headcount — first policies in 30 days." },
                  { title: "Document Day 0–30", sub: "Written, executable by anyone." },
                  { title: "Fix retention before recruiting", sub: "Don't fill a leaking container." },
                  { title: "5 KPIs weekly", sub: "Data over instinct, every time." },
                  { title: "Align comp with persistency", sub: "Reward quality, not just volume." },
                ].map((s) => (
                  <div key={s.title} className="py-2">
                    <strong className="block text-[hsl(var(--navy))]">{s.title}</strong>
                    {s.sub}
                  </div>
                ))}
              </div>
            </SidebarCard>
          </aside>
        </div>

        {/* ── 09 SCORECARD CTA ── */}
        <div className="bg-primary p-9 md:p-10 mt-14 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
          <div className="absolute -bottom-[60px] -right-[60px] w-[240px] h-[240px] rounded-full bg-[radial-gradient(circle,hsl(var(--sky)/0.1),transparent_70%)]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <div className="font-mono text-[9px] tracking-[0.28em] text-[hsl(var(--gold-light))] uppercase mb-2.5">Section 09 — Distribution Assessment</div>
              <div className="font-serif text-2xl md:text-[26px] font-bold text-primary-foreground leading-tight mb-2.5">See How Your System Compares</div>
              <div className="text-[13px] text-primary-foreground/55 leading-[1.7] max-w-[480px]">The Distribution Scorecard assesses your organization across all 8 IDOS™ systems — recruiting, onboarding, activation, retention, leadership, compensation, marketing, and infrastructure. You'll receive a score, a system breakdown, and your highest-leverage next move. Takes 7 minutes.</div>
            </div>
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary font-mono text-[10px] tracking-[0.18em] uppercase px-7 py-4 font-medium inline-block whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              Take the Distribution Scorecard →
            </a>
          </div>
        </div>
      </div>

      {/* Report Footer */}
      <div className="bg-[hsl(var(--ink))]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] text-primary-foreground/35">
          <span className="font-serif text-[13px] text-primary-foreground/65 font-bold">Clientele Builders</span>
          <span>2026 Insurance Agent Production Report · Intelligence Division</span>
          <span>clientelebuilders.com · Confidential</span>
        </div>
      </div>

      {/* ══════════ BRIEFS BANNER ══════════ */}
      <section className="bg-[hsl(var(--ink))]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[9px] tracking-[0.28em] text-[hsl(var(--gold-light))] uppercase block mb-2">Companion Resource</span>
            <h3 className="font-serif text-xl font-bold text-primary-foreground mb-1">Intelligence Briefs — Production Report Series</h3>
            <p className="text-primary-foreground/45 text-sm max-w-md">Three short-form analytical briefs isolating structural findings from this report for focused examination.</p>
          </div>
          <Link
            to="/reports/agent-production/briefs"
            className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-3.5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97] whitespace-nowrap"
          >
            Read the Briefs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ── Reusable sub-components ── */

const PartBanner = ({ num, title, em }: { num: string; title: string; em: string }) => (
  <div className="bg-primary px-8 py-5 my-14 flex items-center gap-5 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
    <div className="font-mono text-[9px] tracking-[0.3em] text-[hsl(var(--gold-light))] uppercase whitespace-nowrap">Section {num}</div>
    <div className="font-serif text-[22px] font-bold text-primary-foreground">
      {title} <em className="text-[hsl(var(--sky))] italic">{em}</em>
    </div>
  </div>
);

const SidebarCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-card border border-border overflow-hidden">
    <div className="bg-primary text-primary-foreground font-mono text-[9px] tracking-[0.2em] uppercase px-4 py-2.5">{title}</div>
    <div className="p-4">{children}</div>
  </div>
);

export default AgentProduction;
