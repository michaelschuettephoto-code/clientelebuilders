import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ClipboardCheck } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const Consulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Consulting — Clientele Builders</title>
        <meta name="description" content="Strategic consulting for insurance organizations looking to build predictable distribution systems." />
      </Helmet>
      <Header />

      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Advisory
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">
            Strategic Consulting
          </h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">
            We help insurance organizations recruit, train, and scale producing agents — with systems, not guesswork.
          </p>
          <a
            href={SCORECARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-8 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Book Consultation
          </a>
        </div>
      </section>

      <section className="container max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { label: "Distribution Audit", desc: "Full-system diagnostic of your recruiting, onboarding, and production pipeline." },
            { label: "Recruiting Infrastructure", desc: "Build a repeatable agent sourcing system with measurable pipeline stages." },
            { label: "Onboarding Design", desc: "Structured Day 1–90 onboarding that shortens ramp time and reduces early turnover." },
            { label: "Leadership Systems", desc: "Accountability frameworks and performance tracking for agency leaders." },
          ].map((item, i) => (
            <div key={i} className="border border-border p-8 relative group hover:border-accent/40 transition-colors">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase mb-2 block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-lg font-bold mb-3 leading-tight">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border bg-[hsl(var(--fog))]">
        <div className="container max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Start with the Scorecard</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Before we talk, diagnose where your systems are breaking. It takes 3 minutes.
          </p>
          <a
            href={SCORECARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            <ClipboardCheck className="h-4 w-4" />
            Take the Scorecard
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
