import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <span className="font-serif text-lg font-bold block mb-4">Clientele Builders</span>
            <p className="text-sm text-primary-foreground/60">
              Insurance distribution intelligence, frameworks, and consulting.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Platform</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/intelligence" className="hover:text-[hsl(var(--gold-light))] transition-colors">Intelligence</Link></li>
              <li><Link to="/reports" className="hover:text-[hsl(var(--gold-light))] transition-colors">Reports</Link></li>
              <li><Link to="/frameworks" className="hover:text-[hsl(var(--gold-light))] transition-colors">Frameworks</Link></li>
              <li><Link to="/scorecard" className="hover:text-[hsl(var(--gold-light))] transition-colors">Scorecard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/consulting" className="hover:text-[hsl(var(--gold-light))] transition-colors">Consulting</Link></li>
              <li><Link to="/about" className="hover:text-[hsl(var(--gold-light))] transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-[hsl(var(--gold-light))] transition-colors">Contact</Link></li>
              <li><Link to="/newsletter" className="hover:text-[hsl(var(--gold-light))] transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/privacy" className="hover:text-[hsl(var(--gold-light))] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[hsl(var(--gold-light))] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2026 Clientele Builders. All rights reserved.
          </p>
          <span className="text-sm text-primary-foreground/40">
            clientelebuilders.com
          </span>
        </div>
      </div>
    </footer>
  );
};
