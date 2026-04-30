import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Eye,
  Handshake,
  Zap,
  DollarSign,
  Repeat,
  TrendingDown,
  UserX,
  Layers,
  Activity,
  Scissors,
  Dumbbell,
  Mic,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const SYSTEM_STAGES = [
  { label: "Attention", icon: Eye },
  { label: "Trust", icon: Handshake },
  { label: "Activation", icon: Zap },
  { label: "Revenue", icon: DollarSign },
  { label: "Retention", icon: Repeat },
];

const PROBLEM_SYMPTOMS = [
  { icon: TrendingDown, label: "Leads come in — but don't convert." },
  { icon: UserX, label: "Customers buy — but don't return." },
  { icon: Layers, label: "Teams work hard — but results don't scale." },
];

const INDUSTRIES = [
  {
    icon: Activity,
    label: "Life Insurance Distribution",
    desc: "For IMOs, MGAs, and agencies losing revenue inside recruiting, activation, and persistency.",
    href: "/lifeinsurance",
    active: true,
  },
  {
    icon: Scissors,
    label: "Beauty & Service Businesses",
    desc: "For salons, barbers, and personal-service operators where retention defines profitability.",
    href: "#",
    active: false,
  },
  {
    icon: Dumbbell,
    label: "Fitness & Coaching",
    desc: "For studios, gyms, and coaches where activation and member retention drive the business.",
    href: "#",
    active: false,
  },
  {
    icon: Mic,
    label: "Events & Media",
    desc: "For event operators and media businesses turning attention into recurring revenue.",
    href: "#",
    active: false,
  },
];

const VISIBILITY_METRICS = [
  { label: "Conversion Rate", value: "—", note: "Attention → Trust" },
  { label: "Activation %", value: "—", note: "Trust → Revenue" },
  { label: "Retention %", value: "—", note: "Revenue → Repeat" },
  { label: "Revenue / Customer", value: "—", note: "System Output" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Clientele Builders — Where Is Your Business Losing Money?</title>
        <meta
          name="description"
          content="Distribution intelligence across industries. Most businesses don't have a lead problem — they have a system problem. We make the system visible."
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
            Where Is Your Business{" "}
            <span className="text-accent">Losing Money?</span>
          </h1>
          <p className="text-primary-foreground/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-4">
            Most companies don't know. We make the system visible.
          </p>
          <p className="text-primary-foreground/40 font-serif text-lg italic mb-12 max-w-2xl">
            Most businesses don't have a lead problem. They have a system problem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Start Your Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#system"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              See the System
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. UNIVERSAL SYSTEM ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground" id="system">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
            The Universal System
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-8 text-primary-foreground">
            Every business runs on the same system.
          </h2>

          <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-3xl mb-12">
            If one part breaks, growth slows. If multiple break, the business stalls.
          </p>

          <div className="border border-primary-foreground/10 p-6 md:p-10">
            <span className="font-mono text-[9px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase block mb-8">
              The Five Stages
            </span>
            <div className="flex items-center justify-between overflow-x-auto min-w-[500px] gap-0">
              {SYSTEM_STAGES.map((stage, i) => (
                <div key={stage.label} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1 relative">
                    <div className="w-16 h-16 border-2 border-accent flex items-center justify-center mb-3">
                      <stage.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.15em] text-primary-foreground/80 uppercase font-medium">
                      {stage.label}
                    </span>
                    <span className="font-mono text-[8px] tracking-[0.15em] text-primary-foreground/30 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i < SYSTEM_STAGES.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-primary-foreground/20 shrink-0 -mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              The Problem
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              You don't see where it's breaking.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Symptoms show up everywhere. The cause hides inside the system.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {PROBLEM_SYMPTOMS.map((s) => (
              <div
                key={s.label}
                className="group border border-border p-6 hover:border-accent/40 transition-colors relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <s.icon className="h-5 w-5 text-accent mb-4" />
                <p className="font-serif text-base font-bold leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="font-serif text-2xl md:text-3xl font-bold text-foreground max-w-3xl">
            That's not a people problem. <span className="text-accent">That's a system problem.</span>
          </p>
        </div>
      </section>

      {/* ── 4. THE SOLUTION ── */}
      <section className="bg-primary text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
              The Solution
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight mb-8 text-primary-foreground">
              We Install <span className="text-accent">Decision Systems.</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
              We don't run your business. We help you see it clearly — so you can fix it.
            </p>
            <p className="text-primary-foreground/40 font-serif text-base italic">
              Visibility before strategy. Strategy before action.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. INDUSTRIES (ROUTING HUB) ── */}
      <section className="bg-background" id="industries">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Where We Apply This
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              Same system. Different industries.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Choose your category to see how the system applies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {INDUSTRIES.map((ind) => {
              const cardInner = (
                <>
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${ind.active ? "bg-accent" : "bg-transparent"}`} />
                  <div className="flex items-start justify-between mb-5">
                    <ind.icon className={`h-6 w-6 ${ind.active ? "text-accent" : "text-muted-foreground/40"}`} />
                    {!ind.active && (
                      <span className="font-mono text-[8px] tracking-[0.18em] text-muted-foreground/60 uppercase border border-border px-2 py-1">
                        Coming Soon
                      </span>
                    )}
                    {ind.active && (
                      <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase">
                        Live
                      </span>
                    )}
                  </div>
                  <h3 className={`font-serif text-xl font-bold mb-3 ${ind.active ? "text-foreground" : "text-muted-foreground"}`}>
                    {ind.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase inline-flex items-center gap-2 ${ind.active ? "text-accent" : "text-muted-foreground/40"}`}>
                    {ind.active ? "Enter" : "In Development"}
                    {ind.active && <ArrowRight className="h-3 w-3" />}
                  </span>
                </>
              );

              return ind.active ? (
                <Link
                  key={ind.label}
                  to={ind.href}
                  className="group border border-border p-8 hover:border-accent/60 transition-colors relative block"
                >
                  {cardInner}
                </Link>
              ) : (
                <div
                  key={ind.label}
                  className="border border-border p-8 relative opacity-70"
                >
                  {cardInner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. TERMINAL / VISIBILITY ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Visibility
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-5 text-primary-foreground">
            This Is What Visibility Looks Like
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mb-12 leading-relaxed">
            Every stage measured. Every leak quantified. Every decision grounded in numbers.
          </p>

          <div className="border border-primary-foreground/10 p-6 md:p-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-primary-foreground/10">
              <span className="font-mono text-[10px] tracking-[0.15em] text-[hsl(var(--gold-light))] uppercase">
                System Dashboard
              </span>
              <span className="font-mono text-[9px] tracking-[0.15em] text-primary-foreground/40 uppercase">
                Awaiting Assessment
              </span>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VISIBILITY_METRICS.map((m) => (
                <div key={m.label} className="border border-primary-foreground/10 p-5">
                  <span className="font-mono text-[9px] tracking-[0.15em] text-primary-foreground/40 uppercase block mb-3">
                    {m.label}
                  </span>
                  <div className="font-serif text-4xl font-black text-accent mb-2">
                    {m.value}
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.12em] text-primary-foreground/30 uppercase">
                    {m.note}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-primary-foreground/35 font-serif text-sm italic mt-6">
            Your numbers populate when you take the assessment.
          </p>
        </div>
      </section>

      {/* ── 7. FINAL CTA ── */}
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Start Here
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-5">
            If you don't know your numbers, you don't have a business.
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Five minutes. One assessment. A clear view of where your system is leaking money.
          </p>
          <a
            href={SCORECARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-10 py-5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Start Your Assessment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
