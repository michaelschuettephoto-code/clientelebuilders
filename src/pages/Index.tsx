import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HomeDistributionScroller } from "@/components/home/HomeDistributionScroller";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Search,
  BarChart3,
  ShieldCheck,
  Activity,
  Sparkles,
  LineChart,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

const CAPABILITIES = [
  { code: "01", icon: Search, title: "Revenue Leak Diagnostics", desc: "Identify hidden operational bottlenecks impacting growth." },
  { code: "02", icon: BarChart3, title: "Distribution Benchmarking", desc: "Compare systems against industry patterns and performance indicators." },
  { code: "03", icon: ShieldCheck, title: "Trust Infrastructure Analysis", desc: "Measure where consumer and agent trust weaken across the organization." },
  { code: "04", icon: Activity, title: "Persistency Visibility", desc: "Understand where long-term value is leaking after placement." },
  { code: "05", icon: Sparkles, title: "AI & Attention Analysis", desc: "Track how AI, social platforms, and digital behavior are reshaping discovery." },
  { code: "06", icon: LineChart, title: "Operational Reporting", desc: "Research-backed intelligence designed for leadership visibility." },
];

const REPORT_EXAMPLES = [
  { code: "RPT-01", title: "Trust Economy Report" },
  { code: "RPT-02", title: "Distribution Trends Brief" },
  { code: "RPT-03", title: "AI Readiness Report" },
  { code: "RPT-04", title: "Consumer Attention Report" },
  { code: "RPT-05", title: "Event Intelligence Report" },
  { code: "RPT-06", title: "Insurance Distribution Outlook" },
];

const WHO = [
  { code: "I.", label: "IMO Owners", desc: "Scaling multi-agency networks. Accountable for trust, production, and persistency across the board." },
  { code: "II.", label: "Agency Owners", desc: "Running the operational engine that turns recruits into producers — and keeps them producing." },
  { code: "III.", label: "Distribution Leaders", desc: "Focused on visibility, trust infrastructure, and the economics of long-term retention." },
];

// Editorial section header — number + eyebrow + dot meta
const SectionMeta = ({ index, eyebrow, meta }: { index: string; eyebrow: string; meta?: string }) => (
  <div className="flex items-baseline gap-4 mb-8">
    <span className="font-mono text-[10px] tracking-[0.2em] text-accent">§ {index}</span>
    <span className="eyebrow text-foreground/70">{eyebrow}</span>
    {meta && <span className="eyebrow text-muted-foreground ml-auto hidden md:inline">{meta}</span>}
  </div>
);

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

      {/* ── HERO ── editorial cover */}
      <section className="relative bg-background overflow-hidden border-b border-border">
        <div className="grain" />
        {/* Hairline grid backdrop */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--navy)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--navy)) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-24 md:pb-32 relative">
          {/* Masthead band */}
          <div className="flex items-center justify-between mb-12 md:mb-20 pb-5 border-b border-border/60">
            <div className="flex items-baseline gap-6">
              <span className="eyebrow text-accent">Volume 02 · Issue 06</span>
              <span className="eyebrow text-muted-foreground hidden md:inline">
                Insurance Distribution · 2026
              </span>
            </div>
            <span className="eyebrow text-muted-foreground hidden md:inline">
              Est. 2024 · NYC
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-end">
            <div>
              <span className="eyebrow text-accent block mb-6">
                Distribution Intelligence — A Brief
              </span>
              <h1 className="display-xxl text-[clamp(2.75rem,8vw,7.5rem)] text-primary mb-10">
                Revenue leaks
                <br />
                hide inside
                <br />
                <span className="italic font-normal text-accent">distribution</span> systems.
              </h1>

              <div className="hairline rule-gold w-32 mb-8" />

              <p className="text-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-5">
                We help life insurance IMOs and agencies find where revenue leaks — across trust,
                recruiting, sales, onboarding, and retention.
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-10">
                Most firms only notice the leak once production drops or retention crumbles. By then,
                the damage is already done.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SCORECARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground eyebrow px-7 py-4 hover:bg-[hsl(var(--ink))] transition-colors"
                >
                  Find Your Distribution Leaks
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/intelligence-hub"
                  className="group inline-flex items-center gap-2 border border-primary/20 text-primary eyebrow px-7 py-4 hover:border-primary/60 transition-colors"
                >
                  Read the Intelligence
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Right rail metadata card */}
            <aside className="lg:border-l lg:border-border lg:pl-8 space-y-7">
              <div>
                <span className="eyebrow text-muted-foreground block mb-2">Filed Under</span>
                <p className="font-serif text-xl font-bold text-primary leading-tight">
                  Operating Clarity · Trust · Persistency
                </p>
              </div>
              <div className="hairline" />
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <span className="eyebrow text-muted-foreground block mb-1">Coverage</span>
                  <p className="font-mono text-2xl text-primary">08</p>
                  <span className="eyebrow text-muted-foreground/70">Pipeline stages</span>
                </div>
                <div>
                  <span className="eyebrow text-muted-foreground block mb-1">Audience</span>
                  <p className="font-mono text-2xl text-primary">IMO</p>
                  <span className="eyebrow text-muted-foreground/70">Agency · Carrier</span>
                </div>
              </div>
              <div className="hairline" />
              <p className="font-serif text-base italic text-foreground/75 leading-snug">
                "We show you where to look before it costs you."
              </p>
            </aside>
          </div>
        </div>
        <div className="hairline rule-gold" />
      </section>

      {/* ── §01 THE REAL PROBLEM ── */}
      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <SectionMeta index="01" eyebrow="The Real Problem" meta="Diagnosis" />
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-10 text-primary">
                Most firms don't know
                <br />
                <span className="italic font-normal">where growth breaks.</span>
              </h2>
              <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl mb-6">
                Problems rarely come out of nowhere. Something inside the chain — recruiting,
                onboarding, activation, placement, follow-up, persistency, leadership, or trust —
                gives way first.
              </p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-10 flex flex-col justify-end">
              <p className="font-serif text-2xl md:text-3xl font-bold leading-tight mb-3">
                Most teams only see the symptoms.
              </p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-accent italic leading-tight mb-5">
                Very few find the actual leak.
              </p>
              <div className="hairline rule-gold w-16 mb-4" />
              <p className="text-muted-foreground italic">That's where we come in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── §02 DISTRIBUTION MAP — pinned scroller ── */}
      <HomeDistributionScroller />

      {/* ── §03 WHO WE HELP ── */}
      <section className="bg-background border-t border-border">
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <SectionMeta index="03" eyebrow="Who We Help" meta="Audience" />
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <h2 className="lg:col-span-8 font-serif text-4xl md:text-5xl font-black leading-[1.0] text-primary">
              Built for the operators running distribution.
            </h2>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed lg:border-l lg:border-border lg:pl-8 self-end">
              The leaders moving recruits, agents, and revenue through complex systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {WHO.map((w) => (
              <div
                key={w.label}
                className="bg-background p-8 md:p-10 group hover:bg-secondary/40 transition-colors"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent block mb-6">
                  {w.code}
                </span>
                <h3 className="font-serif text-2xl font-bold mb-4 leading-tight text-primary">
                  {w.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §04 WHAT WE ACTUALLY DO ── */}
      <section className="bg-[hsl(var(--bone))] border-t border-border">
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <SectionMeta index="04" eyebrow="What We Actually Do" meta="Capabilities" />
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl md:text-6xl font-black leading-[0.95] text-primary mb-8">
                We find where your distribution{" "}
                <span className="italic font-normal text-accent">is bleeding.</span>
              </h2>
              <p className="text-foreground/75 text-lg leading-relaxed max-w-2xl mb-5">
                We combine operational diagnostics, market intelligence, and trust analysis to show
                how money, attention, and momentum actually move through your system. Not how you
                think they move — how they really move.
              </p>
              <p className="font-serif text-xl italic text-primary">Not consulting. Intelligence.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="bg-background p-8 group relative hover:bg-secondary/40 transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <c.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    {c.code}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 leading-snug text-primary">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── §05 TRUST ECONOMY ── dark editorial spread */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden">
        <div className="grain" />
        <div className="container max-w-7xl mx-auto px-6 py-28 md:py-40 relative">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))]">§ 05</span>
            <span className="eyebrow text-primary-foreground/60">Trust Economy</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <h2 className="display-xxl text-[clamp(2.5rem,6.5vw,6rem)] text-primary-foreground mb-10">
                Trust is your real
                <br />
                <span className="italic font-normal text-accent">infrastructure.</span>
              </h2>
              <div className="hairline rule-gold w-32 mb-8" />
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-5 max-w-2xl">
                Consumers are overwhelmed. Attention is scattered. AI is rewriting how people find
                financial advice.
              </p>
              <p className="text-primary-foreground/75 text-lg leading-relaxed mb-10 max-w-2xl">
                But trust still converts. The firms that win the next decade will be the ones that
                reduce friction, improve clarity, strengthen trust, simplify onboarding, and
                maintain visibility.
              </p>
              <p className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground max-w-3xl">
                Trust isn't branding anymore.{" "}
                <span className="text-accent italic">It's operations.</span>
              </p>
            </div>

            <aside className="lg:col-span-4 space-y-6 lg:border-l lg:border-primary-foreground/15 lg:pl-8">
              {[
                { k: "01", v: "Reduce friction" },
                { k: "02", v: "Improve clarity" },
                { k: "03", v: "Strengthen trust" },
                { k: "04", v: "Simplify onboarding" },
                { k: "05", v: "Maintain visibility" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline gap-4 border-b border-primary-foreground/10 pb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))]">
                    {row.k}
                  </span>
                  <span className="font-serif text-lg font-bold text-primary-foreground">{row.v}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* ── §06 INDUSTRY INTELLIGENCE ── reports */}
      <section className="bg-background border-t border-border">
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <SectionMeta index="06" eyebrow="Industry Intelligence" meta="Research" />
          <div className="grid lg:grid-cols-12 gap-12 mb-14">
            <h2 className="lg:col-span-8 font-serif text-4xl md:text-6xl font-black leading-[0.95] text-primary">
              We study how distribution{" "}
              <span className="italic font-normal">actually works.</span>
            </h2>
            <p className="lg:col-span-4 text-muted-foreground leading-relaxed lg:border-l lg:border-border lg:pl-8 self-end">
              Our research tracks distribution trends, consumer behavior, fintech adoption,
              AI-driven discovery, trust patterns, and recruiting environments — so you don't have to.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border mb-8">
            {REPORT_EXAMPLES.map((r) => (
              <Link
                key={r.title}
                to="/intelligence-hub"
                className="bg-background p-7 group hover:bg-secondary/40 transition-colors relative"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent">{r.code}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="font-serif text-lg font-bold leading-snug text-primary">{r.title}</h3>
              </Link>
            ))}
          </div>

          <p className="eyebrow text-muted-foreground">
            Built on institutional frameworks and multi-source market intelligence.
          </p>
        </div>
      </section>

      {/* ── §07 FOCUS AREAS ── dark accent band */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground border-t border-primary-foreground/5">
        <div className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))]">§ 07</span>
            <span className="eyebrow text-primary-foreground/60">Focus Areas</span>
          </div>
          <h2 className="display-xxl text-[clamp(2.5rem,6vw,5.5rem)] text-primary-foreground mb-10 max-w-4xl">
            We look where others{" "}
            <span className="italic font-normal text-accent">don't.</span>
          </h2>
          <p className="text-primary-foreground/65 text-lg leading-relaxed max-w-3xl mb-12">
            Most firms track the obvious metrics. We dig into the signals that actually determine
            whether your distribution compounds — or quietly leaks.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
            {[
              "Recruiting velocity",
              "Onboarding performance",
              "Activation rates",
              "Persistency trends",
              "Trust indicators",
              "Leadership pressure points",
              "Operational bottlenecks",
              "Revenue leakage",
            ].map((item, i) => (
              <div key={item} className="bg-[hsl(var(--ink))] p-6">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[hsl(var(--gold-light))] block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-serif text-lg font-bold text-primary-foreground leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="font-serif text-xl md:text-2xl italic text-primary-foreground/85 max-w-3xl mt-12">
            Seeing clearly here is what separates firms that scale from firms that stall.
          </p>
        </div>
      </section>

      {/* ── §08 FINAL CTA ── */}
      <section className="bg-background">
        <div className="container max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent block mb-6">
                § 08 · Operational Clarity
              </span>
              <h2 className="display-xxl text-[clamp(2.75rem,8vw,7rem)] text-primary mb-8">
                You can't fix
                <br />
                what you can't{" "}
                <span className="italic font-normal text-accent">see.</span>
              </h2>
              <div className="hairline rule-gold w-32 mb-8" />
              <p className="text-foreground/75 text-lg leading-relaxed max-w-xl mb-3">
                Most firms are flying blind. By the time a leak shows up in your numbers, it's been
                bleeding for months.
              </p>
              <p className="font-serif italic text-muted-foreground max-w-xl mb-10">
                Clarity changes everything.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={SCORECARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground eyebrow px-7 py-4 hover:bg-[hsl(var(--ink))] transition-colors"
                >
                  Find Your Distribution Leaks
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 border border-primary/20 text-primary eyebrow px-7 py-4 hover:border-primary/60 transition-colors"
                >
                  Schedule A Strategy Call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-8 space-y-5">
              <span className="eyebrow text-muted-foreground block">Next Steps</span>
              {[
                { k: "01", v: "Take the diagnostic" },
                { k: "02", v: "Receive a leak map" },
                { k: "03", v: "Schedule a strategy call" },
              ].map((s) => (
                <div key={s.k} className="flex items-baseline gap-4 border-b border-border pb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent">{s.k}</span>
                  <span className="font-serif text-lg font-bold text-primary">{s.v}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
