import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Newsletter — Clientele Builders</title>
        <meta name="description" content="Weekly distribution intelligence for IMOs, agency owners, and insurance leaders. Research, benchmarks, and systems — not tips." />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.35em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Distribution Intelligence
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">
            The Weekly Brief
          </h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed max-w-lg mx-auto">
            Research, benchmarks, and system strategies for insurance distribution leaders.
            No fluff. No listicles. Just intelligence.
          </p>
        </div>
      </section>

      <main className="container max-w-3xl mx-auto px-6 py-16">
        <div className="max-w-xl mx-auto mb-16">
          <NewsletterSignup />
        </div>

        <div className="border border-border p-8 md:p-10">
          <h2 className="font-serif text-2xl font-bold mb-6">What You'll Receive</h2>
          <ul className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            {[
              "KPI benchmarks and production analytics from active distribution organizations",
              "System breakdowns — recruiting, onboarding, persistency, and compensation analysis",
              "Case studies from IMOs and agencies building scalable infrastructure",
              "Frameworks and mental models for distribution leadership",
              "Early access to research reports and intelligence briefings",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-accent mt-0.5 text-xs">■</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Weekly", desc: "Every Monday morning — one brief, one focus" },
            { label: "Research-Backed", desc: "Grounded in data, not opinions" },
            { label: "Distribution-Only", desc: "Built for IMOs, agencies, and leaders" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 border border-border">
              <h3 className="font-serif text-lg font-bold mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Newsletter;
