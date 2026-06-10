import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NAV = [
  { to: "/intelligence-hub", label: "Intelligence" },
  { to: "/reports", label: "Reports" },
  { to: "/contact", label: "Contact" },
];

const SCORECARD_URL = "https://start.clientelebuilders.com/distributionleak";

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16">
          {/* Wordmark */}
          <Link to="/" className="flex items-baseline gap-3 group">
            <span className="font-serif text-base font-black text-primary tracking-tight">
              Clientele Builders
            </span>
            <span className="hidden md:inline eyebrow text-muted-foreground/60">
              · Distribution Intelligence
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 justify-center">
            {NAV.map((n) => {
              const active = pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`eyebrow transition-colors ${
                    active ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center justify-end">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground eyebrow px-4 py-2.5 hover:bg-[hsl(var(--ink))] transition-colors"
            >
              Diagnostic
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
      <div className="hairline rule-gold opacity-60" />
    </header>
  );
};
