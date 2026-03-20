import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/intelligence", label: "Intelligence" },
  { to: "/scorecard", label: "Scorecard" },
  { to: "/reports", label: "Reports" },
  { to: "/frameworks", label: "Frameworks" },
  { to: "/consulting", label: "Consulting" },
  { to: "/about", label: "About" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-lg font-bold text-primary tracking-tight">
              Clientele Builders
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-border mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};
