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

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

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
          content="Distribution intelligence for insurance. We surface revenue leaks across recruiting, onboarding, sales, persistency, and leadership."
        />
        <link rel="canonical" href="https://www.clientelebuilders.com/" />
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
            We help life insurance IMOs and agencies find where revenue leaks — across trust, recruiting, sales, onboarding, and retention.
          </p>
          <p className="text-primary-foreground/45 leading-relaxed max-w-2xl mb-3">
            Most firms only notice the leak once production drops or retention crumbles. By then, the damage is already done.
          </p>
          <p className="text-primary-foreground/40 font-serif text-lg italic mb-12 max-w-2xl">
            We show you where to look before it costs you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Find Your Distribution Leaks
              <ArrowRight className="h-4 w-4" />
            </a>
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
              Most firms don't know where growth breaks.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Problems rarely come out of nowhere. Something inside the chain — recruiting, onboarding, activation, placement, follow-up, persistency, leadership, or trust — gives way first.
            </p>
          </div>



          <p className="font-serif text-2xl md:text-3xl font-bold text-foreground max-w-3xl mb-3">
            Most teams only see the symptoms.
          </p>
          <p className="font-serif text-2xl md:text-3xl font-bold text-accent max-w-3xl mb-6">
            Very few find the actual leak.
          </p>
          <p className="text-muted-foreground max-w-2xl italic">
            That's where we come in.
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
            Every organization sits inside a connected chain. When one link weakens, the whole thing feels it.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              "A recruiting problem becomes a persistency problem.",
              "A trust problem becomes a placement problem.",
              "A leadership problem becomes a retention problem.",
            ].map((line) => (
              <div key={line} className="border border-primary-foreground/10 p-5">
                <p className="font-serif text-base font-bold leading-snug text-primary-foreground">{line}</p>
              </div>
            ))}
          </div>

          <p className="text-primary-foreground/60 leading-relaxed max-w-3xl">
            From carrier to consumer — across recruiting, licensing, onboarding, activation, sales, placement, renewals, and retention — we help you spot pressure before it crushes growth.
          </p>

        </div>
      </section>

      {/* ── 3.5 WHO WE HELP ── */}
      <section className="bg-background border-t border-border">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Who We Help
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
              Built for the operators running distribution.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The leaders moving recruits, agents, and revenue through complex systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "IMO Owners", desc: "Scaling multi-agency networks. Accountable for trust, production, and persistency across the board." },
              { label: "Agency Owners", desc: "Running the operational engine that turns recruits into producers — and keeps them producing." },
              { label: "Distribution Leaders", desc: "Focused on visibility, trust infrastructure, and the economics of long-term retention." },
            ].map((w, i) => (
              <div key={w.label} className="border border-border p-6 relative">
                <span className="font-mono text-[8px] tracking-[0.15em] text-accent block mb-3">{String(i+1).padStart(2,"0")}</span>
                <h3 className="font-serif text-lg font-bold mb-2 leading-snug">{w.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
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
              We find where your distribution is bleeding.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We combine operational diagnostics, market intelligence, and trust analysis to show how money, attention, and momentum actually move through your system. Not how you think they move — how they really move.
            </p>
            <p className="font-serif text-lg italic text-foreground">
              Not consulting. Intelligence.
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
              Trust is your real <span className="text-accent">infrastructure.</span>
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              Consumers are overwhelmed. Attention is scattered. AI is rewriting how people find financial advice.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              But trust still converts. The firms that win the next decade will be the ones that:
            </p>
          </div>

          <p className="text-primary-foreground/70 leading-relaxed max-w-3xl mb-10">
            Reduce friction. Improve clarity. Strengthen trust. Simplify onboarding. Maintain visibility.
          </p>


          <p className="font-serif text-xl md:text-2xl font-bold text-primary-foreground max-w-3xl">
            Trust isn't branding anymore. <span className="text-accent">It's operations.</span>
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
              We study how distribution actually works.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our research tracks distribution trends, consumer behavior, fintech adoption, AI-driven discovery, trust patterns, and recruiting environments — so you don't have to.
            </p>
            <p className="font-serif text-lg italic text-foreground">
              Research-backed clarity. Not guesswork.
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
            Built on institutional frameworks and multi-source market intelligence.
          </p>
        </div>
      </section>

      {/* ── 7. FOCUS AREAS ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Focus Areas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-6 text-primary-foreground">
            We look where others <span className="text-accent">don't.</span>
          </h2>
          <p className="text-primary-foreground/65 leading-relaxed max-w-3xl mb-12">
            Most firms track the obvious metrics. We dig into the signals that actually determine whether your distribution compounds — or quietly leaks. Here's what we watch:
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
            Seeing clearly here is what separates firms that scale from firms that stall.
          </p>

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
            Most firms are flying blind. By the time a leak shows up in your numbers, it's been bleeding for months.
          </p>
          <p className="text-primary-foreground/45 font-serif italic max-w-xl mx-auto mb-10">
            Clarity changes everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Find Your Distribution Leaks
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
