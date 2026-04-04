import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import "./agent-production.css";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const AgentProduction = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--rpt-cream)", fontFamily: "'DM Sans', sans-serif" }}>
      <Helmet>
        <title>2026 Insurance Agent Production Report — Clientele Builders</title>
        <meta name="description" content="Structural drivers of production, retention, and distribution efficiency — analyzed through the IDOS™ Framework. Data from IBISWorld, Statista, and proprietary analysis." />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />

      {/* ══════════ COVER ══════════ */}
      <div className="rpt-cover">
        <div className="rpt-cover-bg" />
        <div className="rpt-cover-inner">
          <div className="rpt-cover-top">
            <div className="rpt-cover-brand">Clientele Builders · Intelligence Division</div>
            <div className="rpt-cover-badge">Premium Report</div>
          </div>
          <div className="rpt-cover-main">
            <div className="rpt-cover-report-type">Annual Production Intelligence Report</div>
            <div className="rpt-cover-title">Insurance Agent <em>Production</em></div>
            <div className="rpt-cover-year">Report 2026</div>
            <div className="rpt-cover-subtitle">Structural Drivers of Production, Retention, and Distribution Efficiency — Analyzed Through the Insurance Distribution Operating System (IDOS)™ Framework</div>
            <div className="rpt-cover-framework-tag">
              <span>Framework: Insurance Distribution Operating System (IDOS)™</span>
            </div>
          </div>
          <div className="rpt-cover-bottom">
            <div className="rpt-cover-meta">Source: IBISWorld · Statista · IDOS™ Analysis</div>
            <div className="rpt-cover-meta">Clientele Builders · clientelebuilders.com</div>
            <div className="rpt-cover-meta">2026 Edition · Confidential</div>
          </div>
        </div>
        <div className="rpt-cover-gold-rule" />
      </div>

      {/* ══════════ CONTENTS ══════════ */}
      <div className="rpt-contents">
        <div className="rpt-contents-inner">
          <div className="rpt-contents-header">Contents</div>
          <div className="rpt-contents-grid">
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
              <div key={item.num} className="rpt-contents-item">
                <div className="rpt-c-num">{item.num}</div>
                <div className="rpt-c-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ BODY ══════════ */}
      <div className="rpt-page">
        <div className="rpt-two-col">
          <main>

            {/* ── 01 EXECUTIVE BRIEF ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 01</div>
              <div className="rpt-part-t">Executive <em>Brief</em></div>
            </div>

            <div className="rpt-exec-brief">
              <div className="rpt-exec-brief-label">At a Glance</div>
              {[
                { tag: "Key Insight", val: "Production is not an individual outcome. It is the output of a coordinated distribution system. Organizations that treat it as anything else will continue to underperform." },
                { tag: "Business Impact", val: "In a commission-driven environment, no production means no revenue. Inconsistent production means unstable revenue. The system design determines the output floor and ceiling — not individual effort." },
                { tag: "Who It Affects", val: "IMO leaders, agency principals, distribution operators, and any organization where agent productivity determines organizational revenue." },
                { tag: "The Shift", val: 'From "Who is producing?" → To "What system consistently produces producers?" This reframe separates institutions from organizations.' },
              ].map((row) => (
                <div key={row.tag} className="rpt-exec-row">
                  <span className="rpt-exec-tag">{row.tag}</span>
                  <span className="rpt-exec-val">{row.val}</span>
                </div>
              ))}
            </div>

            <p>The dominant question in insurance distribution is almost always about recruiting. How many agents did we bring in? How many are in the pipeline? The data from this report suggests that question — while not wrong — is secondary to the more important one: what happens to agents after they arrive?</p>

            <p>Independent and affiliated agents account for nearly 90% of total life insurance sales in the U.S. That makes agent productivity not just an operational metric, but the primary economic lever of the entire distribution system. Organizations that systematize production compound. Organizations that leave it to chance reset.</p>

            <div className="rpt-pull-quote">
              <p>"The real reason your agents aren't producing isn't training — it's system design."</p>
            </div>

            {/* ── 02 SYSTEM BREAKDOWN ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 02</div>
              <div className="rpt-part-t">System <em>Breakdown</em></div>
            </div>

            <h2>The IDOS™ Framework — Six Stages of Distribution Performance</h2>
            <p>Production variability is cumulative. If each stage of the distribution system introduces even minor inefficiency, the total output declines nonlinearly. The IDOS™ framework maps exactly where performance degrades — and why.</p>

            {/* SYSTEM MAP SVG */}
            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">System Map — IDOS™ Distribution Pipeline</span>
              <svg viewBox="0 0 900 210" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                <defs>
                  <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                    <path d="M0,0 L0,6 L8,3 z" fill="#4A6FA5" />
                  </marker>
                </defs>
                {/* Stage 1 */}
                <rect x="10" y="70" width="128" height="60" fill="#0D1B2A" />
                <text x="74" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">01</text>
                <text x="74" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Recruiting</text>
                <text x="74" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Candidate flow</text>
                <line x1="138" y1="100" x2="154" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                {/* Stage 2 */}
                <rect x="156" y="70" width="128" height="60" fill="#1A2535" />
                <text x="220" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">02</text>
                <text x="220" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Onboarding</text>
                <text x="220" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Readiness</text>
                <line x1="284" y1="100" x2="300" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                {/* Stage 3 */}
                <rect x="302" y="70" width="128" height="60" fill="#2E4057" />
                <text x="366" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">03</text>
                <text x="366" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Activation</text>
                <text x="366" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">First production</text>
                <line x1="430" y1="100" x2="446" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                {/* Stage 4 */}
                <rect x="448" y="70" width="128" height="60" fill="#2E4057" />
                <text x="512" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">04</text>
                <text x="512" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Retention</text>
                <text x="512" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Policy persistence</text>
                <line x1="576" y1="100" x2="592" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                {/* Stage 5 */}
                <rect x="594" y="70" width="128" height="60" fill="#1A2535" />
                <text x="658" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">05</text>
                <text x="658" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Leadership</text>
                <text x="658" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Duplication</text>
                <line x1="722" y1="100" x2="738" y2="100" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                {/* Stage 6 */}
                <rect x="740" y="70" width="140" height="60" fill="#0D1B2A" stroke="#C8972A" strokeWidth="1" />
                <text x="810" y="96" fill="#F0D080" fontSize="8" textAnchor="middle" letterSpacing="1">06</text>
                <text x="810" y="112" fill="white" fontSize="10" textAnchor="middle" fontWeight="600">Infrastructure</text>
                <text x="810" y="125" fill="rgba(255,255,255,0.45)" fontSize="8" textAnchor="middle">Visibility + data</text>
                {/* Risk labels */}
                <text x="74" y="158" fill="#A03030" fontSize="8" textAnchor="middle">Quality risk</text>
                <text x="220" y="158" fill="#C8972A" fontSize="8" textAnchor="middle">Speed risk</text>
                <text x="366" y="158" fill="#A03030" fontSize="8" textAnchor="middle">Output risk</text>
                <text x="512" y="158" fill="#A03030" fontSize="8" textAnchor="middle">Compounding risk</text>
                <text x="658" y="158" fill="#C8972A" fontSize="8" textAnchor="middle">Scale risk</text>
                <text x="810" y="158" fill="#2A7A4B" fontSize="8" textAnchor="middle">Stabilizer</text>
              </svg>
            </div>

            {/* TIME TO PRODUCTION */}
            <div className="rpt-sec-label">Time-to-Production</div>
            <h2>Onboarding Velocity as a Primary Efficiency Metric</h2>
            <p>While no universal industry benchmark exists for time-to-first-sale, the metric functions as a powerful internal diagnostic. Time-to-production reveals system health across four dimensions simultaneously: onboarding clarity, accountability structure, training quality, and feedback loop speed.</p>

            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">Time-to-Production — Fast Path vs. Slow Path</span>
              <svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                <line x1="40" y1="190" x2="800" y2="190" stroke="#D4E0EC" strokeWidth="1" />
                <text x="40" y="208" fill="#5A6A7A" fontSize="8" textAnchor="middle">Day 0</text>
                <text x="200" y="208" fill="#5A6A7A" fontSize="8" textAnchor="middle">Day 14</text>
                <text x="380" y="208" fill="#5A6A7A" fontSize="8" textAnchor="middle">Day 30</text>
                <text x="560" y="208" fill="#5A6A7A" fontSize="8" textAnchor="middle">Day 60</text>
                <text x="740" y="208" fill="#5A6A7A" fontSize="8" textAnchor="middle">Day 90</text>
                {/* FAST PATH */}
                <text x="40" y="30" fill="#2A7A4B" fontSize="9" fontWeight="600" letterSpacing="1">FAST PATH — Structured System</text>
                <circle cx="40" cy="60" r="6" fill="#2A7A4B" />
                <circle cx="200" cy="60" r="6" fill="#2A7A4B" />
                <circle cx="380" cy="60" r="8" fill="#C8972A" />
                <circle cx="560" cy="60" r="6" fill="#2A7A4B" />
                <circle cx="740" cy="60" r="6" fill="#2A7A4B" />
                <line x1="46" y1="60" x2="194" y2="60" stroke="#2A7A4B" strokeWidth="2" />
                <line x1="206" y1="60" x2="374" y2="60" stroke="#2A7A4B" strokeWidth="2" />
                <line x1="388" y1="60" x2="554" y2="60" stroke="#2A7A4B" strokeWidth="2" />
                <line x1="566" y1="60" x2="734" y2="60" stroke="#2A7A4B" strokeWidth="2" />
                <text x="40" y="78" fill="#2A7A4B" fontSize="8" textAnchor="middle">Recruited</text>
                <text x="200" y="78" fill="#2A7A4B" fontSize="8" textAnchor="middle">Licensed</text>
                <text x="380" y="78" fill="#C8972A" fontSize="8" textAnchor="middle">First Sale ✓</text>
                <text x="560" y="78" fill="#2A7A4B" fontSize="8" textAnchor="middle">Consistent</text>
                <text x="740" y="78" fill="#2A7A4B" fontSize="8" textAnchor="middle">Producing</text>
                {/* SLOW PATH */}
                <text x="40" y="105" fill="#A03030" fontSize="9" fontWeight="600" letterSpacing="1">SLOW PATH — Fragmented System</text>
                <circle cx="40" cy="140" r="6" fill="#A03030" />
                <circle cx="200" cy="140" r="5" fill="#5A6A7A" />
                <circle cx="380" cy="148" r="5" fill="#5A6A7A" />
                <circle cx="560" cy="155" r="5" fill="#5A6A7A" />
                <circle cx="740" cy="148" r="6" fill="#C8972A" />
                <line x1="46" y1="140" x2="194" y2="140" stroke="#A03030" strokeWidth="1.5" strokeDasharray="4,3" />
                <line x1="206" y1="140" x2="374" y2="148" stroke="#5A6A7A" strokeWidth="1.5" strokeDasharray="4,3" />
                <line x1="386" y1="148" x2="554" y2="155" stroke="#5A6A7A" strokeWidth="1.5" strokeDasharray="4,3" />
                <line x1="566" y1="155" x2="734" y2="148" stroke="#C8972A" strokeWidth="1.5" strokeDasharray="4,3" />
                <text x="40" y="158" fill="#A03030" fontSize="8" textAnchor="middle">Recruited</text>
                <text x="200" y="158" fill="#5A6A7A" fontSize="8" textAnchor="middle">Unclear steps</text>
                <text x="380" y="166" fill="#5A6A7A" fontSize="8" textAnchor="middle">Still waiting</text>
                <text x="560" y="173" fill="#5A6A7A" fontSize="8" textAnchor="middle">Drift / quit</text>
                <text x="740" y="166" fill="#C8972A" fontSize="8" textAnchor="middle">First Sale (day 85)</text>
                {/* Gap annotation */}
                <rect x="310" y="10" width="200" height="22" fill="none" stroke="#D4E0EC" strokeWidth="1" />
                <text x="410" y="25" fill="#5A6A7A" fontSize="8" textAnchor="middle">55-day performance gap</text>
              </svg>
            </div>

            {/* ── 03 KPI ANALYSIS ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 03</div>
              <div className="rpt-part-t">KPI Analysis &amp; <em>Benchmarks</em></div>
            </div>

            <h2>Revenue Efficiency Benchmarks — Major Carriers</h2>
            <p>IBISWorld benchmarking data reveals material differences in revenue per employee across major insurers. These differences reflect not just scale, but system efficiency — how effectively organizations convert workforce into sustained output.</p>

            <table className="rpt-data-table">
              <thead>
                <tr>
                  <th>Organization</th>
                  <th>Revenue / Employee</th>
                  <th>Efficiency Index</th>
                  <th>Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="highlight">Northwestern Mutual</td>
                  <td><div className="rpt-bar-cell"><div className="rpt-bar gold" style={{ width: 100 }} /><strong>~$5.0M</strong></div></td>
                  <td>Highest observed</td>
                  <td style={{ color: "var(--rpt-green)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>HIGH</td>
                </tr>
                <tr>
                  <td className="highlight">MassMutual</td>
                  <td><div className="rpt-bar-cell"><div className="rpt-bar sky" style={{ width: 54 }} /><strong>~$2.7M</strong></div></td>
                  <td>Mid-tier</td>
                  <td style={{ color: "var(--rpt-amber)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>MED</td>
                </tr>
                <tr>
                  <td className="highlight">New York Life</td>
                  <td><div className="rpt-bar-cell"><div className="rpt-bar" style={{ width: 22 }} /><strong>~$1.1M</strong></div></td>
                  <td>Lower efficiency</td>
                  <td style={{ color: "var(--rpt-muted)", fontWeight: 600, fontFamily: "'DM Mono', monospace", fontSize: 11 }}>LOWER</td>
                </tr>
              </tbody>
            </table>

            <div className="rpt-data-block gold">
              <div className="rpt-data-label gold">Analytical Note</div>
              <div className="rpt-data-content">Revenue per employee should be interpreted cautiously — organizational size, structure, and business mix affect this metric. Its value is as a directional indicator of operational leverage, not a direct performance comparison. The 4.5x gap between top and bottom, however, is too large to explain away by structure alone.</div>
            </div>

            <div className="rpt-insight-grid">
              <div className="rpt-insight-box gold">
                <div className="rpt-i-num">KPI 01</div>
                <div className="rpt-i-head">Producing Agent % of Licensed Roster</div>
                <div className="rpt-i-body">Top 10% organizations: 35–45% of licensed agents actively producing. Industry average: 18–25%. This gap is a system indicator — not a motivation indicator.</div>
              </div>
              <div className="rpt-insight-box sky">
                <div className="rpt-i-num">KPI 02</div>
                <div className="rpt-i-head">13-Month Persistency Rate</div>
                <div className="rpt-i-body">Top performers: 82%+. Industry average: ~76%. Each percentage point drop has a direct multiplier effect on override income and carrier relationship quality.</div>
              </div>
              <div className="rpt-insight-box green">
                <div className="rpt-i-num">KPI 03</div>
                <div className="rpt-i-head">Agent 12-Month Retention</div>
                <div className="rpt-i-body">Organizations with structured onboarding retain 55–70% of new agents at 12 months. Organizations without: typically below 25%. The system, not the individual, determines this outcome.</div>
              </div>
              <div className="rpt-insight-box slate">
                <div className="rpt-i-num">KPI 04</div>
                <div className="rpt-i-head">Policies Per Active Agent / Month</div>
                <div className="rpt-i-body">High-performing organizations: 3–5 policies per active agent monthly. Lower-performing: 1–2. The delta is rarely explained by agent quality — it is almost always explained by lead flow and sales process.</div>
              </div>
            </div>

            {/* ── 04 BOTTLENECKS ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 04</div>
              <div className="rpt-part-t">Bottleneck <em>Identification</em></div>
            </div>

            <h2>Where Distribution Systems Break — Predictably</h2>
            <p>Across organizations, bottlenecks appear in the same locations with such regularity that their emergence is not a surprise — it is a system property. These are not isolated failures. They are the expected outputs of predictable system design errors.</p>

            {/* PIPELINE DEGRADATION SVG */}
            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">Pipeline Degradation Model — Efficiency Loss Across Stages</span>
              <svg viewBox="0 0 760 310" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                <text x="180" y="18" fill="#5A6A7A" fontSize="8" fontFamily="monospace" letterSpacing="1" textAnchor="start">STAGE</text>
                <text x="420" y="18" fill="#5A6A7A" fontSize="8" fontFamily="monospace" letterSpacing="1" textAnchor="start">EFFICIENCY RETAINED</text>
                <text x="720" y="18" fill="#5A6A7A" fontSize="8" fontFamily="monospace" letterSpacing="1" textAnchor="end">LEVEL</text>
                <line x1="0" y1="24" x2="760" y2="24" stroke="#D4E0EC" strokeWidth="1" />
                {/* Row 1 */}
                <rect x="0" y="34" width="760" height="48" fill="#0D1B2A" />
                <text x="12" y="52" fill="#F0D080" fontSize="8" fontFamily="monospace" letterSpacing="1">01</text>
                <text x="12" y="66" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">RECRUITING</text>
                <text x="180" y="54" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Initial candidate volume</text>
                <rect x="180" y="62" width="520" height="10" fill="rgba(255,255,255,0.06)" rx="1" />
                <rect x="180" y="62" width="520" height="10" fill="#4A6FA5" rx="1" />
                <text x="720" y="72" fill="#A03030" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="end">100%</text>
                {/* Row 2 */}
                <rect x="0" y="84" width="760" height="48" fill="#1A2535" />
                <text x="12" y="102" fill="#F0D080" fontSize="8" fontFamily="monospace" letterSpacing="1">02</text>
                <text x="12" y="116" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">ONBOARDING</text>
                <text x="180" y="104" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Qualification &amp; readiness — efficiency loss begins</text>
                <rect x="180" y="112" width="520" height="10" fill="rgba(255,255,255,0.06)" rx="1" />
                <rect x="180" y="112" width="374" height="10" fill="#4A6FA5" rx="1" />
                <text x="720" y="122" fill="#A03030" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="end">~72%</text>
                {/* Row 3 */}
                <rect x="0" y="134" width="760" height="48" fill="#2E4057" />
                <text x="12" y="152" fill="#F0D080" fontSize="8" fontFamily="monospace" letterSpacing="1">03</text>
                <text x="12" y="166" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">ACTIVATION</text>
                <text x="180" y="154" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">First-production window — critical bottleneck</text>
                <rect x="180" y="162" width="520" height="10" fill="rgba(255,255,255,0.06)" rx="1" />
                <rect x="180" y="162" width="250" height="10" fill="#C8972A" rx="1" />
                <text x="720" y="172" fill="#A03030" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="end">~48%</text>
                {/* Row 4 */}
                <rect x="0" y="184" width="760" height="48" fill="#3A5070" />
                <text x="12" y="202" fill="#F0D080" fontSize="8" fontFamily="monospace" letterSpacing="1">04</text>
                <text x="12" y="216" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">RETENTION</text>
                <text x="180" y="204" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Policy persistence &amp; agent loyalty</text>
                <rect x="180" y="212" width="520" height="10" fill="rgba(255,255,255,0.06)" rx="1" />
                <rect x="180" y="212" width="161" height="10" fill="#C8972A" rx="1" />
                <text x="720" y="222" fill="#C8972A" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="end">~31%</text>
                {/* Row 5 */}
                <rect x="0" y="234" width="760" height="48" fill="#0D1B2A" stroke="#C8972A" strokeWidth="1" />
                <text x="12" y="252" fill="#F0D080" fontSize="8" fontFamily="monospace" letterSpacing="1">05</text>
                <text x="12" y="266" fill="white" fontSize="10" fontFamily="monospace" fontWeight="600">LEADERSHIP &amp; INFRASTRUCTURE</text>
                <text x="180" y="254" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Compounding output — variance stabilizes</text>
                <rect x="180" y="262" width="520" height="10" fill="rgba(255,255,255,0.06)" rx="1" />
                <rect x="180" y="262" width="520" height="10" fill="#2A7A4B" rx="1" />
                <text x="720" y="272" fill="#2A7A4B" fontSize="10" fontFamily="monospace" fontWeight="700" textAnchor="end">Compound</text>
                {/* Note */}
                <text x="0" y="298" fill="#5A6A7A" fontSize="8" fontFamily="monospace">* Efficiency levels are conceptual, not empirically benchmarked. Source: IDOS™ Framework — Clientele Builders</text>
              </svg>
            </div>

            <ul className="rpt-bn-list">
              <li className="rpt-bn-item"><div className="rpt-bn-dot" /><div className="rpt-bn-body"><strong>Recruiting Bottleneck</strong><span>Volume recruiting without qualification criteria. Misalignment between expectations and organizational reality. Creates a downstream failure cascade: unqualified agents who fail quickly erode management capacity and create chargeback exposure.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot amber" /><div className="rpt-bn-body"><strong>Onboarding Bottleneck</strong><span>Unclear first steps, no defined sequence, dependence on individual relationships rather than documented process. This is the highest-leverage bottleneck to fix — it determines the velocity of every agent who comes after.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot" /><div className="rpt-bn-body"><strong>Activation Bottleneck</strong><span>Delayed production caused by weak feedback loops, absent accountability structures, and activity tracking that doesn't exist until it's too late. Most organizations discover this problem at 90 days, when it should have been caught at 14.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot amber" /><div className="rpt-bn-body"><strong>Retention Bottleneck</strong><span>Policy lapse driven by poor expectation setting at point-of-sale and absent post-sale client onboarding. Chargeback exposure is almost always a symptom of this bottleneck — not a cause in itself.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot sky" /><div className="rpt-bn-body"><strong>Leadership Bottleneck</strong><span>Inability to duplicate performance at scale. The organization grows past the span of control of its founders and has no next layer of leadership ready. Growth stalls — or collapses under its own weight.</span></div></li>
              <li className="rpt-bn-item"><div className="rpt-bn-dot sky" /><div className="rpt-bn-body"><strong>Infrastructure Bottleneck</strong><span>Absence of data visibility. Problems are hidden until they become crises. Without dashboards, KPI tracking, and reporting architecture, leadership manages by feeling rather than by fact.</span></div></li>
            </ul>

            {/* ── 05 MARKET INTELLIGENCE ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 05</div>
              <div className="rpt-part-t">Market <em>Intelligence</em></div>
            </div>

            <h2>Structural Dynamics Shaping the Distribution Environment</h2>

            <div className="rpt-data-block">
              <div className="rpt-data-label">Market Scale</div>
              <div className="rpt-data-content">The U.S. market includes 711 life insurance companies and hundreds of millions of policies in force. The brokerage industry employs approximately 1 million workers. Agent-led distribution accounts for roughly 90% of total life insurance sales — making distribution infrastructure the primary competitive variable at scale.</div>
            </div>

            <p>The insurance market is mature and densely competitive. Carriers cannot meaningfully differentiate on product alone — the policies themselves are commodity-adjacent. In this environment, the dominant competitive variable is system efficiency: how effectively an organization converts agent input into sustained policy output.</p>

            <p>IBISWorld data highlights increasing adoption of automation and specialized operational roles to manage the complexity that comes with scale. This is not a technology trend — it is an infrastructure trend. Organizations that can systematize previously manual coordination functions gain a structural efficiency advantage that compounds over time.</p>

            <div className="rpt-pull-quote">
              <p>"In a mature, agent-dominated market with commodity products, system efficiency is the only durable competitive advantage."</p>
            </div>

            {/* ── 06 STRATEGIC RECOMMENDATIONS ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 06</div>
              <div className="rpt-part-t">Strategic <em>Recommendations</em></div>
            </div>

            <h2>Five System Moves for Distribution Leaders in 2026</h2>

            <div className="rpt-rec-grid">
              {[
                { n: "01", title: "Redefine Recruiting Success as Activation Rate, Not Headcount", body: "Measure the percentage of recruits who produce a first policy within 30 days. Set a target. Track it weekly. This single metric shift changes recruiting behavior more than any training program." },
                { n: "02", title: "Document and Standardize the First 30 Days", body: "Create a written onboarding sequence that does not depend on any specific manager or trainer. Day 1 through Day 30 should be executable by anyone in the organization. Reduce time-to-production by eliminating ambiguity." },
                { n: "03", title: "Build Retention Infrastructure Before Scaling Recruiting", body: "Every dollar spent recruiting into a broken retention system accelerates loss. Fix the container before filling it. Measure 13-month persistency by agent. Address the bottom quartile structurally, not individually." },
                { n: "04", title: "Establish a Weekly KPI Review Protocol", body: "Five metrics reviewed weekly by leadership: producing agent %, policies per active agent, 13-month persistency, new agent 90-day retention, and recruiting pipeline conversion. Make data the decision standard — not instinct." },
                { n: "05", title: "Align Compensation Structure With Retention Outcomes", body: "Compensation grids that reward production volume without persistency adjustments are architecturally broken. Redesign to create financial consequences for poor policy quality — not just financial rewards for volume." },
              ].map((rec) => (
                <div key={rec.n} className="rpt-rec-box">
                  <span className="rpt-rec-n">{rec.n}</span>
                  <div className="rpt-rec-title">{rec.title}</div>
                  <div className="rpt-rec-body">{rec.body}</div>
                </div>
              ))}
            </div>

            <hr className="rpt-rule" />

            {/* ── 07 EXTENDED OBSERVATIONS ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 07</div>
              <div className="rpt-part-t">Extended <em>Observations</em></div>
            </div>

            <h2>Five Patterns Across Distribution Organizations</h2>

            <ul className="rpt-obs-list">
              <li className="rpt-obs-item"><span className="rpt-obs-n">01</span><div className="rpt-obs-body"><strong>Organizations routinely misdiagnose growth constraints as recruiting problems when they are activation problems.</strong> Adding agents to a system that cannot activate them quickly does not create growth — it creates management overhead and chargeback risk.</div></li>
              <li className="rpt-obs-item"><span className="rpt-obs-n">02</span><div className="rpt-obs-body"><strong>Onboarding quality determines early system velocity more than recruiting volume.</strong> A well-onboarded cohort of 10 agents will consistently outperform a poorly-onboarded cohort of 30 over a 12-month period.</div></li>
              <li className="rpt-obs-item"><span className="rpt-obs-n">03</span><div className="rpt-obs-body"><strong>Retention determines whether production compounds or resets.</strong> When retention is high, past production continues generating value and revenue stabilizes into a flywheel. When retention is low, organizations are perpetually restarting — never building the book of business that creates long-term equity value.</div></li>
              <li className="rpt-obs-item"><span className="rpt-obs-n">04</span><div className="rpt-obs-body"><strong>Leadership determines whether growth scales or stalls.</strong> The ceiling of most organizations is the bandwidth of their founders. Organizations that develop a next layer of capable, autonomous leaders before they need them scale past this ceiling. Those that don't hit it repeatedly.</div></li>
              <li className="rpt-obs-item"><span className="rpt-obs-n">05</span><div className="rpt-obs-body"><strong>Infrastructure determines whether problems are visible or hidden.</strong> Most distribution organizations are operating with serious system failures they cannot see because they have no reporting infrastructure to detect them. By the time the problem is obvious, the cost is already significant.</div></li>
            </ul>

            {/* ── 08 VISUAL INTELLIGENCE ── */}
            <div className="rpt-part-banner">
              <div className="rpt-part-n">Section 08</div>
              <div className="rpt-part-t">Visual Intelligence — <em>System Models</em></div>
            </div>

            <h2>Retention Model — Pipeline vs. Flywheel</h2>
            <p>The distinction between a pipeline and a flywheel is the most important structural concept in distribution economics. One resets. The other compounds. Which one your organization runs determines whether you are building equity or burning through it.</p>

            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">Retention — Pipeline (Linear Reset) vs. Flywheel (Compounding)</span>
              <svg viewBox="0 0 820 290" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                {/* PIPELINE */}
                <text x="185" y="22" fill="#A03030" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">PIPELINE MODEL</text>
                <text x="185" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Resets with every loss</text>
                <rect x="40" y="55" width="80" height="35" fill="#1A2535" />
                <text x="80" y="78" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Recruit</text>
                <line x1="120" y1="72" x2="138" y2="72" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="140" y="55" width="80" height="35" fill="#1A2535" />
                <text x="180" y="78" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Produce</text>
                <line x1="220" y1="72" x2="238" y2="72" stroke="#4A6FA5" strokeWidth="1.5" markerEnd="url(#arr)" />
                <rect x="240" y="55" width="80" height="35" fill="#A03030" fillOpacity="0.4" />
                <text x="280" y="78" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Attrition</text>
                <path d="M 280,90 Q 280,140 80,140 Q 80,95 80,90" fill="none" stroke="#A03030" strokeWidth="1.5" strokeDasharray="4,3" />
                <text x="180" y="158" fill="#A03030" fontSize="8" textAnchor="middle">↺ Restart. No compounding.</text>

                {/* Divider */}
                <line x1="410" y1="10" x2="410" y2="280" stroke="#D4E0EC" strokeWidth="1" />

                {/* FLYWHEEL */}
                <text x="615" y="22" fill="#2A7A4B" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">FLYWHEEL MODEL</text>
                <text x="615" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Each cycle builds on the last</text>
                {/* Center circle */}
                <circle cx="615" cy="160" r="70" fill="none" stroke="rgba(42,122,75,0.15)" strokeWidth="1" />
                {/* Nodes */}
                <rect x="580" y="68" width="70" height="35" rx="2" fill="#0D1B2A" />
                <text x="615" y="82" fill="#F0D080" fontSize="7" textAnchor="middle">RECRUIT</text>
                <text x="615" y="94" fill="rgba(255,255,255,0.6)" fontSize="7" textAnchor="middle">+ Quality</text>
                <rect x="668" y="126" width="70" height="35" rx="2" fill="#0D1B2A" />
                <text x="703" y="140" fill="#F0D080" fontSize="7" textAnchor="middle">PRODUCE</text>
                <text x="703" y="152" fill="rgba(255,255,255,0.6)" fontSize="7" textAnchor="middle">+ Volume</text>
                <rect x="650" y="216" width="70" height="35" rx="2" fill="#0D1B2A" />
                <text x="685" y="230" fill="#F0D080" fontSize="7" textAnchor="middle">RETAIN</text>
                <text x="685" y="242" fill="rgba(255,255,255,0.6)" fontSize="7" textAnchor="middle">+ Persist</text>
                <rect x="492" y="126" width="70" height="35" rx="2" fill="#0D1B2A" />
                <text x="527" y="140" fill="#F0D080" fontSize="7" textAnchor="middle">LEAD</text>
                <text x="527" y="152" fill="rgba(255,255,255,0.6)" fontSize="7" textAnchor="middle">+ Duplicate</text>
                {/* Arrows */}
                <path d="M 635,96 Q 698,118 696,138" fill="none" stroke="#2A7A4B" strokeWidth="2" markerEnd="url(#arr)" />
                <path d="M 694,178 Q 682,232 642,240" fill="none" stroke="#2A7A4B" strokeWidth="2" markerEnd="url(#arr)" />
                <path d="M 590,240 Q 546,228 538,178" fill="none" stroke="#2A7A4B" strokeWidth="2" markerEnd="url(#arr)" />
                <path d="M 538,136 Q 550,90 594,80" fill="none" stroke="#2A7A4B" strokeWidth="2" markerEnd="url(#arr)" />
                <text x="615" y="162" fill="#2A7A4B" fontSize="9" textAnchor="middle" fontWeight="600">COMPOUND</text>
              </svg>
            </div>

            {/* VARIANCE REDUCTION */}
            <h2>Infrastructure Effect — Variance Reduction</h2>
            <p>Infrastructure's primary function in a distribution organization is variance reduction. Without it, outcomes scatter widely — some agents perform, most don't, and leadership cannot explain or replicate the difference. With it, the distribution of outcomes tightens, predictability increases, and scale becomes possible.</p>

            <div className="rpt-visual-wrap">
              <span className="rpt-visual-label">Agent Output Distribution — Before vs. After Infrastructure</span>
              <svg viewBox="0 0 820 215" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto" }}>
                {/* WITHOUT */}
                <text x="195" y="22" fill="#A03030" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">WITHOUT INFRASTRUCTURE</text>
                <text x="195" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">High variance — unpredictable output</text>
                {[
                  [60,155],[80,85],[100,135],[120,65],[140,163],[160,52],[180,125],[200,95],[220,150],[240,75],[260,140],[280,58],[300,118],[320,160],[340,90]
                ].map(([cx,cy], i) => (
                  <circle key={`s-${i}`} cx={cx} cy={cy} r="4" fill="#A03030" opacity="0.6" />
                ))}
                <rect x="50" y="46" width="300" height="126" fill="rgba(160,48,48,0.04)" stroke="rgba(160,48,48,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="195" y="200" fill="#A03030" fontSize="8" textAnchor="middle">Variance band: wide — results unpredictable</text>

                {/* Divider */}
                <line x1="420" y1="10" x2="420" y2="210" stroke="#D4E0EC" strokeWidth="1" />

                {/* WITH */}
                <text x="625" y="22" fill="#2A7A4B" fontSize="10" textAnchor="middle" fontWeight="600" letterSpacing="1">WITH INFRASTRUCTURE</text>
                <text x="625" y="36" fill="#5A6A7A" fontSize="8" textAnchor="middle">Low variance — controlled, scalable output</text>
                {[
                  [470,108],[490,100],[510,112],[530,95],[550,105],[570,98],[590,108],[610,100],[630,110],[650,97],[670,106],[690,101],[710,108],[730,99],[750,104]
                ].map(([cx,cy], i) => (
                  <circle key={`t-${i}`} cx={cx} cy={cy} r="4" fill="#2A7A4B" opacity="0.7" />
                ))}
                <rect x="458" y="88" width="304" height="30" fill="rgba(42,122,75,0.06)" stroke="rgba(42,122,75,0.3)" strokeWidth="1" strokeDasharray="3,3" />
                <text x="625" y="200" fill="#2A7A4B" fontSize="8" textAnchor="middle">Variance band: tight — results predictable and scalable</text>
              </svg>
            </div>

          </main>

          {/* ── SIDEBAR ── */}
          <aside className="rpt-sidebar">
            <div className="rpt-sb-card">
              <div className="rpt-sb-head">Market Benchmarks 2026</div>
              <div className="rpt-sb-body">
                {[
                  { label: "Agent-led life insurance sales share", val: "~90%", cls: "", trend: "nt" },
                  { label: "U.S. life insurance companies", val: "711", cls: "", trend: "nt" },
                  { label: "Brokerage industry workforce", val: "~1M", cls: "", trend: "nt" },
                  { label: "Rev/employee — top carrier", val: "$5.0M", cls: "up", trend: "up" },
                  { label: "Avg producing agent % of licensed", val: "~22%", cls: "dn", trend: "dn" },
                  { label: "Avg 13-mo persistency rate", val: "~76%", cls: "dn", trend: "dn" },
                ].map((s) => (
                  <div key={s.label} className="rpt-sb-stat">
                    <span className="rpt-sb-stat-label">{s.label}</span>
                    <span className={`rpt-sb-stat-val ${s.cls}`}>
                      {s.val}<span className={`rpt-trend ${s.trend}`}>{s.trend === "up" ? "↑" : s.trend === "dn" ? "↓" : "→"}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rpt-sb-card">
              <div className="rpt-sb-head">Confidence Levels</div>
              <div className="rpt-sb-body" style={{ fontSize: 12, color: "var(--rpt-muted)", lineHeight: 1.7 }}>
                <div style={{ padding: "8px 0", borderBottom: "1px solid var(--rpt-rule)" }}>
                  <span className="rpt-conf-badge high">High</span>
                  <div>Production as system output · Retention dynamics · Distribution density · Bottleneck patterns · Infrastructure effect</div>
                </div>
                <div style={{ padding: "8px 0" }}>
                  <span className="rpt-conf-badge medium">Medium</span>
                  <div>Time-to-production benchmarks (no universal standard) · Revenue efficiency comparisons (structural differences apply)</div>
                </div>
              </div>
            </div>

            <div className="rpt-sb-card">
              <div className="rpt-sb-head">Data Sources</div>
              <div className="rpt-sb-body" style={{ fontSize: 12, color: "var(--rpt-muted)", lineHeight: 1.7 }}>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}>IBISWorld — Insurance brokerage revenue and market structure</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}>Statista — U.S. life insurance market scale data</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}>IBISWorld — Company benchmarks (Northwestern Mutual, MassMutual, NY Life)</div>
                <div style={{ padding: "7px 0" }}>IDOS™ Framework — Clientele Builders proprietary distribution analysis</div>
              </div>
            </div>

            <div className="rpt-sb-card">
              <div className="rpt-sb-head">The 5 System Shifts</div>
              <div className="rpt-sb-body" style={{ fontSize: 12, color: "var(--rpt-muted)", lineHeight: 1.7 }}>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}><strong style={{ color: "var(--rpt-navy)", display: "block" }}>Measure activation rate</strong>Not headcount — first policies in 30 days.</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}><strong style={{ color: "var(--rpt-navy)", display: "block" }}>Document Day 0–30</strong>Written, executable by anyone.</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}><strong style={{ color: "var(--rpt-navy)", display: "block" }}>Fix retention before recruiting</strong>Don't fill a leaking container.</div>
                <div style={{ padding: "7px 0", borderBottom: "1px solid var(--rpt-rule)" }}><strong style={{ color: "var(--rpt-navy)", display: "block" }}>5 KPIs weekly</strong>Data over instinct, every time.</div>
                <div style={{ padding: "7px 0" }}><strong style={{ color: "var(--rpt-navy)", display: "block" }}>Align comp with persistency</strong>Reward quality, not just volume.</div>
              </div>
            </div>
          </aside>
        </div>

        {/* ── SCORECARD CTA ── */}
        <div className="rpt-scorecard-cta">
          <div style={{ position: "absolute", bottom: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(107,155,195,0.1) 0%, transparent 70%)" }} />
          <div className="rpt-cta-inner">
            <div>
              <div className="rpt-cta-label">Section 09 — Distribution Assessment</div>
              <div className="rpt-cta-title">See How Your System Compares</div>
              <div className="rpt-cta-desc">The Distribution Scorecard assesses your organization across all six IDOS™ stages — recruiting, onboarding, activation, retention, leadership, and infrastructure. You'll receive a score, a system breakdown, and your highest-leverage next move. Takes 3 minutes.</div>
            </div>
            <a href={SCORECARD_URL} target="_blank" rel="noopener noreferrer" className="rpt-cta-btn">
              Take the Distribution Scorecard →
            </a>
          </div>
        </div>
      </div>

      {/* ── REPORT FOOTER ── */}
      <div style={{ background: "var(--rpt-ink)" }}>
        <div className="rpt-report-footer" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <span className="rpt-footer-brand">Clientele Builders</span>
          <span>2026 Insurance Agent Production Report · Intelligence Division</span>
          <span>clientelebuilders.com · Confidential</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgentProduction;
