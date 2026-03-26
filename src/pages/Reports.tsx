import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { Download } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com/growth-diagnostic";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Intelligence Reports — Clientele Builders</title>
        <meta name="description" content="Research reports on insurance distribution systems, recruiting pipelines, and production metrics." />
      </Helmet>
      <Header />

      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">
            Research
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black text-primary-foreground leading-[1.08] tracking-tight mb-6">
            Intelligence Reports
          </h1>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-10 max-w-lg mx-auto">
            Comprehensive analysis of what separates scalable insurance organizations from the ones that stall.
          </p>
        </div>
      </section>

      <section className="container max-w-4xl mx-auto px-6 py-20">
        <div className="border border-border p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="bg-primary p-6 flex-shrink-0">
            <div className="w-36 h-48 bg-[hsl(var(--ink))] border border-primary-foreground/10 flex flex-col items-center justify-center p-4">
              <span className="font-mono text-[6px] tracking-[0.3em] text-[hsl(var(--gold-light))] uppercase mb-3">Clientele Builders</span>
              <h4 className="font-serif text-xs font-bold text-primary-foreground leading-tight text-center mb-2">Distribution Infrastructure Report</h4>
              <div className="w-6 h-[2px] bg-accent mb-2" />
              <span className="font-mono text-[6px] text-primary-foreground/30 uppercase tracking-wider">2026</span>
            </div>
          </div>
          <div>
            <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase">Flagship Report</span>
            <h2 className="font-serif text-2xl font-bold mt-2 mb-4 leading-tight">The Distribution Infrastructure Report</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Recruiting pipelines, onboarding systems, production metrics, and retention analysis — all examined through the lens of organizations that scale vs. those that stall.
            </p>
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              <Download className="h-4 w-4" />
              Download Report
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reports;
