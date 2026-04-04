import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
  Megaphone,
  DollarSign,
  Target,
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
  { icon: BarChart3, label: "Agent Production Analysis", desc: "KPI benchmarking, revenue efficiency, and time-to-production diagnostics across distribution teams" },
  { icon: Globe, label: "System Design (IDOS™)", desc: "Our proprietary framework mapping the six stages where distribution performance breaks down" },
  { icon: TrendingUp, label: "Recruiting & Retention", desc: "Pipeline structure, ramp time analysis, and the compounding economics of agent retention" },
  { icon: Settings, label: "Infrastructure & Variance", desc: "How operational systems reduce performance variance and increase output predictability at scale" },
];

const ENGAGEMENT_MODELS = [
  { icon: Search, label: "Diagnostic & Strategy", desc: "Identify constraints and map out a growth plan" },
  { icon: Layers, label: "System Buildout", desc: "Design and implement your distribution infrastructure" },
  { icon: Rocket, label: "Growth Infrastructure", desc: "End-to-end system optimization across recruiting, onboarding, and production" },
  { icon: MessageSquare, label: "Advisory", desc: "Ongoing strategic support and performance optimization" },
];

const SCORECARD_AREAS = [
  "Recruiting Pipeline",
  "Onboarding Process",
  "Agent Activation",
  "Retention & Persistency",
  "Leadership & Duplication",
  "Infrastructure & Data",
];

/* ── Content Pillars (from Shawn's framework) ── */
const CONTENT_PILLARS = [
  "Recruiting Systems",
  "Onboarding Systems",
  "Agent Production",
  "Retention & Persistency",
  "Leadership & Duplication",
  "Infrastructure & Data",
];

/* ── Research Areas ── */
const RESEARCH_AREAS = [
  "How production variance is reduced through infrastructure investment",
  "The compounding economics of agent retention vs. recruiting replacement",
  "Why revenue-per-employee ratios vary 4.5x across major carriers",
  "System-level determinants of time-to-production in new agents",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Clientele Builders — Insurance Distribution Intelligence & Consulting</title>
        <meta
          name="description"
          content="We build, optimize, and scale insurance distribution systems. Data-driven consulting for IMOs, agencies, and distribution leaders."
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
            Most insurance organizations don't have a recruiting problem…{" "}
            <span className="text-accent">they have a broken distribution system.</span>
          </h1>
          <p className="text-primary-foreground/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            Clientele Builders is the intelligence and growth infrastructure behind modern insurance distribution.
            We diagnose, benchmark, and optimize your recruiting, onboarding, activation, and retention systems
            using real market data — not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Take the IMO Growth Scorecard
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

      {/* ── 2. THE PROBLEM ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
            The Real Issue
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-8 text-primary-foreground">
            Why Most IMOs Hit a Ceiling
          </h2>

          <div className="max-w-3xl mb-10">
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-6">
              Growth doesn't stall because of effort.
              It stalls because of hidden constraints inside your system.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Agents are recruited… but never activate",
                "New hires stall in onboarding",
                "Production is inconsistent and unpredictable",
                "Leadership doesn't duplicate",
                "There's no visibility into what's actually working",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-primary-foreground/50">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-primary-foreground/40 text-sm leading-relaxed">
              Most organizations try to fix this with more leads or more recruiting.
            </p>
            <p className="text-accent font-serif text-xl font-bold mt-4">
              But the real issue is structural.
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
              Built on Intelligence,{" "}
              <span className="text-accent">Not Guesswork</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every insight we publish is grounded in sourced industry data and our proprietary IDOS™ framework.
              From agent production benchmarks to retention economics — if it's on our platform, it's been analyzed, not assumed.
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
                Your Starting Point
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5 text-primary-foreground">
                IMO Growth Scorecard
              </h2>
              <p className="text-primary-foreground/55 leading-relaxed mb-8">
                In 3–5 minutes, identify exactly what's slowing your growth.
                This diagnostic evaluates your distribution system across six core areas.
              </p>
              <a
                href={SCORECARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Take the Scorecard Now
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
                    "A 0–100 growth score",
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
              The Distribution System We Build
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We don't sell services. We design and optimize the system that drives production.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
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
            When these systems align, growth becomes predictable.
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
            Insurance Distribution Intelligence
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mb-12 leading-relaxed">
            We publish ongoing insights on the forces shaping insurance distribution.
            This is where strategy meets data.
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
            Topics We're Investigating
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
              How We Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              Engagement Models
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We partner with organizations at different stages of growth.
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
              Clientele Builders is not a marketing agency.
            </h2>
            <p className="font-serif text-2xl md:text-3xl font-bold text-accent mb-10">
              We are Insurance Distribution Architects.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mb-10">
              {[
                "Drive agent production",
                "Increase retention",
                "Create scalable growth",
              ].map((outcome) => (
                <div key={outcome} className="text-center">
                  <CheckCircle2 className="h-6 w-6 text-accent mx-auto mb-3" />
                  <p className="font-serif text-base font-bold">{outcome}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Our model combines <span className="text-foreground font-medium">intelligence</span>,{" "}
              <span className="text-foreground font-medium">infrastructure</span>, and{" "}
              <span className="text-foreground font-medium">execution strategy</span>.
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
            Find Out What's Slowing Your Growth
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Most organizations are closer than they think.
            They're just missing visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-10 py-5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Take the IMO Growth Scorecard
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
