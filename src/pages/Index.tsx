import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Users,
  GraduationCap,
  Zap,
  FileCheck,
  PhoneCall,
  Repeat,
  Crown,
  ShieldCheck,
  Search,
  BarChart3,
  Activity,
  Sparkles,
  LineChart,
  Eye,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const DISTRIBUTION_CHAIN = [
  "Carrier",
  "IMO",
  "Agency",
  "Agent",
  "Consumer",
];

const PIPELINE_STAGES = [
  { label: "Recruiting", icon: Users },
  { label: "Licensing", icon: FileCheck },
  { label: "Onboarding", icon: GraduationCap },
  { label: "Activation", icon: Zap },
  { label: "Sales", icon: PhoneCall },
  { label: "Placement", icon: ShieldCheck },
  { label: "Renewals", icon: Repeat },
  { label: "Retention", icon: Crown },
];

const CAPABILITIES = [
  { icon: Search, title: "Revenue Leak Diagnostics", desc: "Identify hidden operational bottlenecks impacting growth." },
  { icon: BarChart3, title: "Distribution Benchmarking", desc: "Compare systems against industry patterns and performance indicators." },
  { icon: ShieldCheck, title: "Trust Infrastructure Analysis", desc: "Measure where consumer and agent trust weaken across the organization." },
  { icon: Activity, title: "Persistency Visibility", desc: "Understand where long-term value is leaking after placement." },
  { icon: Sparkles, title: "AI & Attention Analysis", desc: "Track how AI, social platforms, and digital behavior are reshaping discovery." },
  { icon: LineChart, title: "Operational Reporting", desc: "Research-backed intelligence designed for leadership visibility." },
];

const REPORT_EXAMPLES = [
  "Trust Economy Report",
  "Distribution Trends Brief",
  "AI Readiness Report",
  "Consumer Attention Report",
  "Event Intelligence Report",
  "Insurance Distribution Outlook",
];

const PLATFORM_MONITORS = [
  "Recruiting velocity",
  "Onboarding performance",
  "Activation rates",
  "Persistency trends",
  "Trust indicators",
  "Leadership pressure points",
  "Operational bottlenecks",
  "Revenue leakage",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Clientele Builders — Distribution Intelligence for Insurance</title>
        <meta
          name="description"
          content="Revenue leaks hide inside distribution systems. We help insurance organizations identify operational blind spots across recruiting, onboarding, trust, sales, persistency, and leadership."
        />
      </Helmet>
      <Header />

      {/* ── 1. HERO ── */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy)/0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />

        <div className="container max-w-5xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-5">
            Distribution Intelligence
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] tracking-tight max-w-4xl mb-7">
            Revenue leaks hide inside{" "}
            <span className="text-accent">distribution systems.</span>
          </h1>
          <p className="text-primary-foreground/65 text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-5">
            Clientele Builders helps insurance organizations identify operational blind spots across recruiting, onboarding, trust, marketing, sales, persistency, and leadership.
          </p>
          <p className="text-primary-foreground/45 leading-relaxed max-w-2xl mb-3">
            Modern distribution is fragmented. Most firms don't realize where momentum breaks until production slows, trust weakens, or retention falls apart.
          </p>
          <p className="text-primary-foreground/40 font-serif text-lg italic mb-12 max-w-2xl">
            We map the systems behind growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Diagnose Your Distribution System
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              View Intelligence Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="font-mono text-[10px] tracking-[0.18em] text-primary-foreground/35 uppercase mt-10">
            Operational clarity for modern distribution organizations.
          </p>
        </div>
      </section>

      {/* ── 2. THE REAL PROBLEM ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              The Real Problem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              Most organizations don't know where momentum breaks.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Growth problems are rarely random. Momentum usually breaks somewhere inside the distribution chain:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12 max-w-3xl">
            {["Recruiting","Onboarding","Activation","Placement","Follow-up","Persistency","Leadership","Trust"].map((s) => (
              <div key={s} className="border border-border p-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-foreground uppercase">{s}</span>
              </div>
            ))}
          </div>

          <p className="font-serif text-2xl md:text-3xl font-bold text-foreground max-w-3xl mb-3">
            Most firms only see the symptoms.
          </p>
          <p className="font-serif text-2xl md:text-3xl font-bold text-accent max-w-3xl mb-6">
            Very few can see the actual leak.
          </p>
          <p className="text-muted-foreground max-w-2xl italic">
            That's where operational visibility matters.
          </p>
        </div>
      </section>

      {/* ── 3. DISTRIBUTION MAP ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Distribution Map
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-6 text-primary-foreground">
            Distribution is a system. Not a single department.
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed max-w-3xl mb-10">
            Every organization operates inside a connected chain.
          </p>

          {/* Chain */}
          <div className="border border-primary-foreground/10 p-6 md:p-10 mb-10">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-8">
              The Chain
            </span>

            {/* Mobile vertical */}
            <div className="flex flex-col sm:hidden gap-3">
              {DISTRIBUTION_CHAIN.map((node) => (
                <div key={node} className="border border-primary-foreground/10 p-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-primary-foreground/80 uppercase">{node}</span>
                </div>
              ))}
            </div>

            {/* Desktop horizontal */}
            <div className="hidden sm:flex items-center justify-between gap-2">
              {DISTRIBUTION_CHAIN.map((node, i) => (
                <div key={node} className="flex items-center flex-1">
                  <div className="flex-1 border border-primary-foreground/15 px-4 py-5 text-center">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-primary-foreground/85 uppercase">{node}</span>
                  </div>
                  {i < DISTRIBUTION_CHAIN.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-accent/60 shrink-0 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              "A recruiting issue becomes a persistency issue.",
              "A trust issue becomes a placement issue.",
              "A leadership issue becomes a retention issue.",
            ].map((line) => (
              <div key={line} className="border border-primary-foreground/10 p-5">
                <p className="font-serif text-base font-bold leading-snug text-primary-foreground">{line}</p>
              </div>
            ))}
          </div>

          <p className="text-primary-foreground/60 leading-relaxed max-w-3xl mb-12">
            We help organizations identify where pressure accumulates before growth slows down.
          </p>

          {/* Pipeline stages */}
          <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-6">
            Where Leaks Appear
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PIPELINE_STAGES.map((s, i) => (
              <div key={s.label} className="border border-primary-foreground/10 p-4 flex items-start gap-3">
                <s.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-primary-foreground/85 uppercase">{s.label}</span>
                  <span className="font-mono text-[8px] tracking-[0.15em] text-primary-foreground/30 mt-1">{String(i+1).padStart(2,"0")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT WE ACTUALLY DO ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              What We Actually Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              We diagnose distribution inefficiencies.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Clientele Builders combines operational diagnostics, market intelligence, benchmark systems, trust analysis, distribution mapping, consumer research, and AI visibility analysis — to help organizations understand how money, trust, attention, and momentum move through their systems.
            </p>
            <p className="font-serif text-lg italic text-foreground">
              This is not traditional consulting. This is distribution intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="group border border-border p-6 hover:border-accent/50 transition-colors relative">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <c.icon className="h-5 w-5 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2 leading-snug">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TRUST ECONOMY ── */}
      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
              Trust Economy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-primary-foreground">
              Trust became <span className="text-accent">infrastructure.</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              Modern consumers are overwhelmed with information. Attention fragmented. Discovery shifted. AI is changing how people search for financial guidance.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              At the same time, human trust still drives conversion. The organizations that win over the next decade will be the ones that:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-10">
            {["Reduce friction","Improve clarity","Strengthen trust","Simplify onboarding","Maintain visibility"].map((p) => (
              <div key={p} className="border border-primary-foreground/15 p-4">
                <span className="font-mono text-[10px] tracking-[0.15em] text-primary-foreground/85 uppercase">{p}</span>
              </div>
            ))}
          </div>

          <p className="font-serif text-xl md:text-2xl font-bold text-primary-foreground max-w-3xl">
            Trust is no longer branding. <span className="text-accent">It's operational infrastructure.</span>
          </p>
        </div>
      </section>

      {/* ── 6. INDUSTRY INTELLIGENCE ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Industry Intelligence
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              Research-backed operational visibility.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our research systems monitor insurance distribution trends, consumer behavior, fintech adoption, AI-driven discovery, trust patterns, advertising shifts, recruiting environments, and market positioning.
            </p>
            <p className="font-serif text-lg italic text-foreground">
              We study how distribution actually works.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {REPORT_EXAMPLES.map((r) => (
              <div key={r} className="border border-border p-5 hover:border-accent/40 transition-colors">
                <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase block mb-2">Report</span>
                <p className="font-serif text-base font-bold leading-snug">{r}</p>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
            Built using institutional research frameworks and multi-source market intelligence.
          </p>
        </div>
      </section>

      {/* ── 7. THE PLATFORM ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            The Platform
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-6 text-primary-foreground">
            The Distribution <span className="text-accent">Operating System.</span>
          </h2>
          <p className="text-primary-foreground/65 leading-relaxed max-w-3xl mb-12">
            We are building infrastructure for operational visibility inside insurance distribution. The platform is designed to help organizations monitor:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            {PLATFORM_MONITORS.map((m) => (
              <div key={m} className="border border-primary-foreground/10 p-4 flex items-center gap-3">
                <Eye className="h-3.5 w-3.5 text-accent shrink-0" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-primary-foreground/85 uppercase leading-snug">{m}</span>
              </div>
            ))}
          </div>

          <p className="font-serif text-xl md:text-2xl font-bold text-primary-foreground max-w-3xl mb-10">
            The future of distribution belongs to organizations that can see clearly.
          </p>

          <Link
            to="/lifeinsurance"
            className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Explore The System
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── 8. FINAL CTA ── */}
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Operational Clarity
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-6">
            You can't fix what you can't see.
          </h2>
          <p className="text-primary-foreground/60 max-w-xl mx-auto mb-4 leading-relaxed">
            Most organizations are operating with delayed visibility. By the time problems appear in production numbers, the leak has usually existed for months.
          </p>
          <p className="text-primary-foreground/45 font-serif italic max-w-xl mx-auto mb-10">
            Operational clarity changes decision-making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Diagnose Your Distribution System
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              Schedule A Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
