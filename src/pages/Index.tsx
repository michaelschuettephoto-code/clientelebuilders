import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./homepage-editorial.css";
import {
  ArrowRight,
  ChevronRight,
  UserPlus,
  BookOpen,
  Zap,
  Shield,
  Crown,
  Cpu,
  BarChart3,
  Globe,
  TrendingUp,
  Settings,
  Search,
  Layers,
  Rocket,
  MessageSquare,
  CheckCircle2,
  Building2,
  Wrench,
  Users,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const IDOS_SYSTEMS = [
  { icon: UserPlus, label: "Recruiting", desc: "Predictable agent sourcing with pipeline-stage tracking and quality metrics" },
  { icon: BookOpen, label: "Onboarding", desc: "Structured ramp sequences that reduce early attrition and accelerate time-to-production" },
  { icon: Zap, label: "Activation", desc: "Converting agent capacity into measurable organizational output" },
  { icon: Shield, label: "Retention", desc: "Revenue compounding through policy persistency and agent tenure" },
  { icon: Crown, label: "Leadership", desc: "Accountability frameworks and performance duplication across teams" },
  { icon: Cpu, label: "Infrastructure", desc: "Reporting systems, diagnostics, and data visibility across all IDOS™ stages" },
];

const INTELLIGENCE_PILLARS = [
  { icon: BarChart3, label: "Production Pipeline Tracking", desc: "KPI benchmarking, revenue efficiency, and time-to-production diagnostics across distribution teams" },
  { icon: Globe, label: "System Architecture (IDOS™)", desc: "Our proprietary framework mapping the six stages where distribution performance breaks down" },
  { icon: TrendingUp, label: "Recruiting & Retention Control", desc: "Pipeline structure, ramp time analysis, and the compounding economics of agent retention" },
  { icon: Settings, label: "Infrastructure & Variance Reduction", desc: "How operational systems reduce performance variance and increase output predictability at scale" },
];

const ENGAGEMENT_MODELS = [
  { icon: Search, label: "System Diagnostic", desc: "Identify constraints and map your distribution system architecture" },
  { icon: Layers, label: "Infrastructure Buildout", desc: "Design and implement your distribution operating layer" },
  { icon: Rocket, label: "Growth Engine", desc: "End-to-end system optimization across recruiting, onboarding, and production" },
  { icon: MessageSquare, label: "Ongoing Optimization", desc: "Continuous performance tracking, benchmarking, and system refinement" },
];

const SCORECARD_AREAS = [
  "Recruiting Pipeline",
  "Onboarding Process",
  "Agent Activation",
  "Retention & Persistency",
  "Leadership & Duplication",
  "Infrastructure & Data",
];

const CONTENT_PILLARS = [
  "Recruiting Systems",
  "Onboarding Systems",
  "Agent Production",
  "Retention & Persistency",
  "Leadership & Duplication",
  "Infrastructure & Data",
];

const RESEARCH_AREAS = [
  "How production variance is reduced through infrastructure investment",
  "The compounding economics of agent retention vs. recruiting replacement",
  "Why revenue-per-employee ratios vary 4.5x across major carriers",
  "System-level determinants of time-to-production in new agents",
];

const PIPELINE_STAGES = ["Lead", "Recruit", "Contract", "Activate", "Produce", "Retain"];

const BENCHMARK_DATA = [
  { metric: "Agent Activation Rate", top: "78%", avg: "42%", bottom: "18%" },
  { metric: "12-Mo Persistency", top: "89%", avg: "72%", bottom: "54%" },
  { metric: "Time-to-First-Sale", top: "14 days", avg: "38 days", bottom: "67 days" },
  { metric: "Revenue per Agent", top: "$142K", avg: "$68K", bottom: "$23K" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Clientele Builders — The Operating System for Insurance Distribution</title>
        <meta
          name="description"
          content="Clientele Builders is the system layer that powers recruiting, onboarding, activation, and retention inside insurance distribution organizations. Pipeline tracking. Performance benchmarking. Operational control."
        />
      </Helmet>
      <Header />

      {/* ── 1. HERO ── */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy)/0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />

        <div className="container max-w-5xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-5">
            Insurance Distribution Architects
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] tracking-tight max-w-4xl mb-7">
            The Operating System for{" "}
            <span className="text-accent">Insurance Distribution</span>
          </h1>
          <p className="text-primary-foreground/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            Clientele Builders is the system layer that powers recruiting, onboarding, activation, and retention
            inside insurance distribution organizations. Pipeline tracking. Performance benchmarking. Operational control.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Get Your Distribution Score
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              View Latest Intelligence Report
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL BRIEF ── */}
      <section className="hp-editorial bg-background">
        <div className="ed-masthead">
          <div className="mh-inner">
            <div className="mh-pub">Clientele Builders</div>
            <h2 className="mh-title">
              <span className="mh-t1">Demand Is Rising.</span>
              <span className="mh-t2">Technology Is Shifting.</span>
              <span className="mh-t3">The Buyer Is Clear.</span>
            </h2>
            <div className="mh-meta">
              <div className="mh-mi">Published <span>2026</span></div>
              <div className="mh-mi"><span>clientelebuilders.com</span></div>
            </div>
          </div>
        </div>

        <div className="ed-page">
          {/* Fact 1: Demand */}
          <div className="fact">Fact</div>
          <div className="typo-fact-1">
            <span className="body-text">Demand for life insurance and annuities is expected to </span>
            <span className="climax">increase.</span>
          </div>
          <p>If demand is already moving upward, what determines whether that growth is actually captured?</p>
          <p>Because if the market is expanding, then the opportunity is not theoretical. It already exists.</p>
          <p>The question is not whether people need life insurance.</p>
          <p>The question is:</p>
          <div className="typo-capture">
            <span className="c-line c1">What determines</span>
            <span className="c-line c2">who actually</span>
            <span className="c-line c3">captures</span>
            <span className="c-line c4">that</span>
            <span className="c5">need?</span>
          </div>

          <hr />

          {/* Fact 2: Technology */}
          <div className="fact">Fact</div>
          <p>The operations of life insurance providers are being transformed by rapid technological adoption.</p>
          <p>If operations are evolving, what happens to organizations that continue to rely on traditional distribution methods?</p>
          <p>Because when operations change, the rules change with them.</p>
          <div className="typo-changes">
            <span className="ch ch1">Efficiency changes.</span>
            <span className="ch ch2">Speed changes.</span>
            <span className="ch ch3">Execution changes.</span>
          </div>
          <div className="typo-distributed">
            <span className="d-pre">And when those things change, the advantage does not stay</span>
            <svg viewBox="0 0 600 28" style={{ width: '100%', height: 28 }} aria-label="evenly distributed">
              {'evenly distributed.'.split('').map((char, i) => (
                <text key={i} x={i * (600 / 19)} y="22" fontFamily="'DM Mono', monospace" fontSize="14" fill="hsl(37, 66%, 47%)" fontWeight="500">{char}</text>
              ))}
            </svg>
          </div>
          <p>So what happens when one organization adapts to those changes—and another does not?</p>

          <hr />

          {/* Fact 3: Buyer */}
          <div className="fact">Fact</div>
          <p>Older individuals represent the primary market for life insurance providers.</p>
          <p>If the primary customer is already defined, what determines whether that customer is effectively reached?</p>
          <div className="typo-buyer">
            <span className="b-line b1">Because if the buyer is visible…</span>
            <span className="b-line b2">If their needs are known…</span>
            <span className="b-line b3">If their motivation is clear…</span>
          </div>
          <p>Then the problem is not identifying the market.</p>
          <p>The problem becomes:</p>
          <div className="pull">
            <p>How does distribution connect to that market?</p>
          </div>

          <hr />

          {/* Synthesis */}
          <h3 className="section-head">What Do These Conditions Point To?</h3>
          <div className="typo-three-conditions">
            <div className="tc-row">
              <span className="tc-neg">absent</span>
              <span className="tc-pos">Demand is not absent.</span>
            </div>
            <div className="tc-row">
              <span className="tc-neg">static</span>
              <span className="tc-pos">Technology is not static.</span>
            </div>
            <div className="tc-row">
              <span className="tc-neg">unknown</span>
              <span className="tc-pos">The customer is not unknown.</span>
            </div>
          </div>

          <hr />

          <p>So what is left?</p>
          <div className="typo-if">
            <span className="if-line if1">If opportunity exists…</span>
            <span className="if-line if2">If systems are evolving…</span>
            <span className="if-line if3">If the buyer is already identifiable…</span>
          </div>

          <hr />

          <h3 className="section-head">Where Does the Outcome Actually Come From?</h3>
          <p>Is growth determined by:</p>
          <div className="typo-questions">
            <span className="tq tq1">Increasing activity?</span>
            <span className="tq tq2">Expanding recruiting?</span>
            <span className="tq tq3">Generating more leads?</span>
          </div>
          <p>Or…</p>
          <p>Is it determined by how these conditions are <em>aligned</em>?</p>

          <hr />

          {/* The Real Question */}
          <h3 className="section-head">The Real Question</h3>
          <div className="typo-final">
            <div className="tf-not">
              <div className="tf-not-tag">Not:</div>
              <div className="tf-not-text">"How do we create more demand?"</div>
            </div>
            <div className="tf-but">
              <div className="tf-but-tag">But:</div>
              <div className="tf-but-text">How do we align distribution with the demand that <em>already exists?</em></div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
            The Real Issue
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-8 text-primary-foreground">
            Why Most Distribution Organizations Stall
          </h2>

          <div className="max-w-3xl mb-10">
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-6">
              Growth doesn't stall because of effort.
              It stalls because there's no system underneath it.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Recruiting pipeline has no stage tracking or conversion metrics",
                "Onboarding has no structured ramp sequence",
                "Production output is unmeasured and unpredictable",
                "Leadership doesn't duplicate — no accountability infrastructure",
                "Zero visibility into system-level performance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/50">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-accent font-serif text-xl font-bold mt-4">
              The problem isn't effort. It's the absence of an operating system.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. YOUR EDGE ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Our Edge
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              Not a Service.{" "}
              <span className="text-accent">A System.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clientele Builders isn't something you hire — it's something you plug into.
              An operating layer for distribution performance built on real data and the IDOS™ framework.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INTELLIGENCE_PILLARS.map((pillar) => (
              <div
                key={pillar.label}
                className="group border border-border p-6 hover:border-accent/40 transition-colors relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <pillar.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-base font-bold mb-1">{pillar.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE SCORECARD ── */}
      <section className="bg-primary text-primary-foreground relative">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            <div>
              <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
                System Entry Point
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5 text-primary-foreground">
                Distribution System Diagnostic
              </h2>
              <p className="text-primary-foreground/55 leading-relaxed mb-8">
                In 3–5 minutes, identify exactly where your system is breaking.
                This diagnostic evaluates your distribution infrastructure across six core areas.
              </p>
              <a
                href={SCORECARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Get Your Distribution Score
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div>
              <div className="mb-8">
                <h3 className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase mb-4">
                  Areas Evaluated
                </h3>
                <ul className="space-y-2.5">
                  {SCORECARD_AREAS.map((area) => (
                    <li key={area} className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase mb-4">
                  You'll Receive
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "A 0–100 system score",
                    "Category breakdowns",
                    "Your two biggest bottlenecks",
                    "Clear next steps",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                      <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE DISTRIBUTION SYSTEM ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              The Framework
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              The Distribution Pipeline
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Six stages. One operating system. Every bottleneck mapped.
            </p>
          </div>

          {/* Pipeline Diagram */}
          <div className="mb-14 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[600px] gap-0">
              {PIPELINE_STAGES.map((stage, i) => (
                <div key={stage} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className="w-14 h-14 border-2 border-accent flex items-center justify-center mb-2">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-accent font-medium uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-foreground uppercase font-medium">
                      {stage}
                    </span>
                  </div>
                  {i < PIPELINE_STAGES.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-accent shrink-0 -mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {IDOS_SYSTEMS.map((sys, i) => (
              <div
                key={sys.label}
                className="group border border-border p-6 hover:border-accent/40 transition-colors relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <sys.icon className="h-5 w-5 text-muted-foreground mb-3" />
                <h3 className="font-serif text-base font-bold mb-1">{sys.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{sys.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-accent font-serif text-xl font-bold">
            When the pipeline is instrumented, growth becomes predictable.
          </p>
        </div>
      </section>

      {/* ── 6. INTELLIGENCE / REPORTS (CoStar-style) ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Distribution Intelligence
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-5 text-primary-foreground">
            Distribution Benchmarks & Intelligence
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mb-12 leading-relaxed">
            Real performance data across the insurance distribution landscape. Tracked. Measured. Published.
          </p>

          {/* KPI Benchmark Cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {[
              { stat: "$1.1T", label: "Industry Revenue", sub: "US Life Insurance & Annuities", source: "IBISWorld 2026" },
              { stat: "893", label: "Total Businesses", sub: "US Life Insurance market", source: "IBISWorld 2026" },
              { stat: "51%", label: "Ownership Rate", sub: "Americans with life insurance", source: "LIMRA / Statista 2024" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="border border-primary-foreground/10 p-8 text-center relative group hover:border-accent/40 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent" />
                <span className="font-serif text-4xl md:text-5xl font-black text-accent block mb-2">
                  {kpi.stat}
                </span>
                <span className="font-serif text-base font-bold text-primary-foreground block mb-1">
                  {kpi.label}
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase block">
                  {kpi.sub}
                </span>
                <span className="font-mono text-[7px] tracking-[0.1em] text-primary-foreground/25 uppercase mt-2 block">
                  Source: {kpi.source}
                </span>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { stat: "16.7%", label: "Profit Margin", sub: "Industry average", source: "IBISWorld 2026" },
              { stat: "53%", label: "Independent Agents", sub: "Share of distribution", source: "LIMRA 2023" },
              { stat: "2.0%", label: "Revenue CAGR", sub: "Forecast 2026–2031", source: "IBISWorld 2026" },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="border border-primary-foreground/10 p-8 text-center relative group hover:border-accent/40 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-50" />
                <span className="font-serif text-4xl md:text-5xl font-black text-accent block mb-2">
                  {kpi.stat}
                </span>
                <span className="font-serif text-base font-bold text-primary-foreground block mb-1">
                  {kpi.label}
                </span>
                <span className="font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase block">
                  {kpi.sub}
                </span>
                <span className="font-mono text-[7px] tracking-[0.1em] text-primary-foreground/25 uppercase mt-2 block">
                  Source: {kpi.source}
                </span>
              </div>
            ))}
          </div>

          {/* Benchmarking Comparison Grid */}
          <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-6">
            Performance Benchmarks
          </span>
          <div className="border border-primary-foreground/10 mb-14 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-primary-foreground/10">
                  <th className="text-left font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase p-4">
                    Metric
                  </th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-accent uppercase p-4">
                    Top 10%
                  </th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-primary-foreground/40 uppercase p-4">
                    Industry Avg
                  </th>
                  <th className="text-center font-mono text-[9px] tracking-[0.12em] text-primary-foreground/30 uppercase p-4">
                    Bottom 25%
                  </th>
                </tr>
              </thead>
              <tbody>
                {BENCHMARK_DATA.map((row) => (
                  <tr key={row.metric} className="border-b border-primary-foreground/[0.06] last:border-0">
                    <td className="p-4 text-primary-foreground/60 text-sm font-medium">{row.metric}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-accent">{row.top}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-primary-foreground/50">{row.avg}</td>
                    <td className="p-4 text-center font-serif text-lg font-bold text-primary-foreground/30">{row.bottom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Content Pillars */}
          <div className="grid sm:grid-cols-3 gap-3 mb-10">
            {CONTENT_PILLARS.map((pillar) => (
              <div key={pillar} className="border border-primary-foreground/10 px-5 py-3 text-center">
                <span className="text-primary-foreground/60 text-sm font-medium">{pillar}</span>
              </div>
            ))}
          </div>

          {/* Authority Topics */}
          <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            System Performance Research
          </span>
          <ul className="space-y-3 max-w-2xl mb-14">
            {RESEARCH_AREAS.map((topic) => (
              <li key={topic} className="flex items-start gap-3 text-primary-foreground/60">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-base leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity"
            >
              View Intelligence Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              Join the Newsletter
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. ENGAGEMENT MODELS ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Implementation Layers
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              Implementation Layers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Organizations connect to the Clientele OS at the layer that matches their stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.label}
                className="group border border-border p-6 hover:border-accent/40 transition-colors relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <model.icon className="h-5 w-5 text-accent mb-3" />
                <h3 className="font-serif text-base font-bold mb-1">{model.label}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. POSITIONING ── */}
      <section className="bg-[hsl(var(--fog))] border-y border-border">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              What We Are
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              Clientele Builders is not a consulting firm.
            </h2>
            <p className="font-serif text-2xl md:text-3xl font-bold text-accent mb-10">
              We are Insurance Distribution Architects.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {[
                "Instrument the pipeline",
                "Reduce performance variance",
                "Scale distribution infrastructure",
              ].map((outcome) => (
                <div key={outcome} className="text-center">
                  <CheckCircle2 className="h-6 w-6 text-accent mx-auto mb-3" />
                  <p className="font-serif text-base font-bold">{outcome}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Our model combines <span className="text-foreground font-medium">system design</span>,{" "}
              <span className="text-foreground font-medium">data infrastructure</span>, and{" "}
              <span className="text-foreground font-medium">operational control</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ── PUBLISHED WORK ── */}
      <section className="bg-primary">
        <div className="container max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: Building2, text: "Published: 2026 Agent Production Report — sourced from IBISWorld & IDOS™ analysis" },
              { icon: Wrench, text: "Published: 3 Intelligence Briefs on production, retention, and infrastructure" },
              { icon: Users, text: "Focused exclusively on insurance distribution system design and optimization" },
            ].map((proof) => (
              <div key={proof.text} className="flex flex-col items-center gap-3">
                <proof.icon className="h-6 w-6 text-accent" />
                <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
                  {proof.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Start Here
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-5">
            See Where Your System Is Breaking
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Most organizations don't lack effort — they lack system visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-10 py-5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Get Your Distribution Score
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-10 py-5 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              Book a Strategy Call
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
