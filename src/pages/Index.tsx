import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  TrendingDown,
  AlertTriangle,
  BarChart3,
  UserPlus,
  BookOpen,
  Megaphone,
  Target,
  Shield,
  DollarSign,
  Crown,
  Cpu,
  ChevronRight,
} from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const IDOS_SYSTEMS = [
  { icon: UserPlus, label: "Recruiting", desc: "Predictable agent sourcing with pipeline-stage tracking" },
  { icon: BookOpen, label: "Onboarding", desc: "Structured Day 1–90 ramp that reduces early attrition" },
  { icon: Megaphone, label: "Marketing", desc: "Brand and content systems that attract qualified producers" },
  { icon: Target, label: "Sales", desc: "Conversion frameworks from lead to placed business" },
  { icon: Shield, label: "Persistency", desc: "Retention systems that protect revenue and lower lapse rates" },
  { icon: DollarSign, label: "Compensation", desc: "Structures that align incentives with production goals" },
  { icon: Crown, label: "Leadership", desc: "Accountability frameworks and performance management" },
  { icon: Cpu, label: "Tech & Data", desc: "CRM, automation, and analytics infrastructure" },
];

const BENCHMARKS = [
  { value: "85%+", label: "Persistency Rate", sub: "Top-decile IMOs" },
  { value: "20%+", label: "Producer Activation", sub: "First-year agents producing" },
  { value: "3–5×", label: "Agent Productivity", sub: "vs. industry average" },
  { value: "<18%", label: "First-Year Turnover", sub: "Top-performing organizations" },
];

const PROOF_POINTS = [
  { stat: "Distribution Systems", desc: "Engineered for IMOs and agency builders" },
  { stat: "Recruiting Infrastructure", desc: "Built for predictable agent pipeline flow" },
  { stat: "Intelligence & Research", desc: "Data-driven insights for distribution leaders" },
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

      {/* ── HERO ── */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--navy)/0.6),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />

        <div className="container max-w-5xl mx-auto px-6 py-28 md:py-40 relative z-10">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-5">
            Insurance Distribution Architects
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-black text-primary-foreground leading-[1.05] tracking-tight max-w-4xl mb-7">
            We Build, Optimize, and Scale Insurance Distribution Systems
          </h1>
          <p className="text-primary-foreground/55 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-12">
            Data-driven consulting for IMOs, agencies, and distribution leaders
            who refuse to operate on guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              Take the Distribution Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/intelligence"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              View Latest Intelligence
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="bg-[hsl(var(--ink))] text-primary-foreground">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
            The Distribution Problem
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-12">
            Most insurance organizations are bleeding agents, production, and profit — and can't see why.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Agent Turnover", body: "70%+ first-year attrition drains recruiting investment and destabilizes production." },
              { icon: TrendingDown, title: "Low Production", body: "The majority of contracted agents never reach sustainable production levels." },
              { icon: AlertTriangle, title: "Broken Systems", body: "Fragmented onboarding, no pipeline tracking, and ad-hoc training programs." },
              { icon: BarChart3, title: "No Data Visibility", body: "Decisions made on gut feel instead of KPI benchmarks and system diagnostics." },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-primary-foreground/10 p-6 hover:border-accent/30 transition-colors"
              >
                <item.icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR EDGE — IDOS 8-System Model ── */}
      <section className="bg-background">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[9px] tracking-[0.35em] text-accent uppercase block mb-4">
              Our Edge
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-5">
              Most firms sell leads.{" "}
              <span className="text-accent">We engineer distribution systems.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The IDOS framework maps 8 interdependent systems that determine whether an insurance organization
              scales — or stalls. We diagnose, design, and build each one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
        </div>
      </section>

      {/* ── INTELLIGENCE (CoStar-style) ── */}
      <section className="bg-primary text-primary-foreground relative">
        <div className="container max-w-5xl mx-auto px-6 py-20 md:py-28">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Distribution Intelligence
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight max-w-3xl mb-5">
            The benchmarks that separate top-decile organizations from everyone else.
          </h2>
          <p className="text-primary-foreground/50 max-w-2xl mb-14 leading-relaxed">
            Our research tracks KPIs across recruiting, production, persistency, and operations.
            These are the numbers that matter.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {BENCHMARKS.map((b) => (
              <div key={b.label} className="border border-primary-foreground/10 p-6">
                <span className="font-serif text-4xl md:text-5xl font-black text-accent block mb-2">
                  {b.value}
                </span>
                <span className="font-mono text-[9px] tracking-[0.15em] text-primary-foreground/70 uppercase block mb-1">
                  {b.label}
                </span>
                <span className="text-primary-foreground/40 text-xs">{b.sub}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/reports"
              className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity"
            >
              View Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/newsletter"
              className="inline-flex items-center gap-2 border border-primary-foreground/20 text-primary-foreground/70 font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:border-primary-foreground/40 hover:text-primary-foreground transition-all"
            >
              Join Research Panel
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-[hsl(var(--fog))] border-y border-border">
        <div className="container max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-8">
            {PROOF_POINTS.map((p) => (
              <div key={p.stat} className="text-center">
                <h3 className="font-serif text-xl font-bold mb-2">{p.stat}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-primary">
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Start Here
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-primary-foreground leading-tight mb-5">
            Take the Distribution Scorecard
          </h2>
          <p className="text-primary-foreground/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Diagnose where your systems are breaking. Get a custom breakdown
            of your recruiting, onboarding, and production infrastructure in 3 minutes.
          </p>
          <a
            href={SCORECARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-10 py-5 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Get Your System Breakdown
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
