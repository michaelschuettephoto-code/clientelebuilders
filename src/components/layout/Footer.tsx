import { Link } from "react-router-dom";

const COLUMNS = [
  {
    head: "Intelligence",
    links: [
      { to: "/intelligence-hub", label: "Intelligence Hub" },
      { to: "/reports", label: "Reports" },
      { to: "/intelligence-hub", label: "Weekly Brief" },
    ],
  },
  {
    head: "Firm",
    links: [
      { to: "/contact", label: "Contact" },
      { to: "/contact", label: "Engagements" },
      { to: "/intelligence-hub", label: "Methodology" },
    ],
  },
  {
    head: "Diagnostic",
    links: [
      { to: "/contact", label: "Strategy Call" },
      { to: "/contact", label: "Distribution Scorecard" },
    ],
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[hsl(var(--navy))] text-primary-foreground relative overflow-hidden">
      <div className="hairline rule-gold opacity-70" />
      <div className="container max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <span className="eyebrow text-[hsl(var(--gold-light))] block mb-5">
              Clientele Builders
            </span>
            <p className="font-serif text-2xl md:text-3xl font-bold leading-[1.15] text-primary-foreground mb-6 max-w-md">
              Distribution intelligence for the firms shaping the next decade of insurance.
            </p>
            <p className="text-primary-foreground/55 text-sm leading-relaxed max-w-md">
              Research, diagnostics, and operating clarity for IMOs, agencies, and carriers.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.head}>
              <span className="eyebrow text-[hsl(var(--gold-light))] block mb-5">{col.head}</span>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-primary-foreground/75 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-dark mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-baseline gap-6">
            <span className="eyebrow text-primary-foreground/45">© {year}</span>
            <span className="eyebrow text-primary-foreground/45">All Rights Reserved</span>
          </div>
          <div className="flex items-baseline gap-6">
            <span className="eyebrow text-primary-foreground/45">clientelebuilders.com</span>
            <span className="eyebrow text-[hsl(var(--gold-light))]">v2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
