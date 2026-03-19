import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Clientele Builder" className="h-10 w-auto mb-4 brightness-200" />
            <p className="text-sm text-primary-foreground/60">
              Elite systems and strategy for insurance professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/blog" className="hover:text-gold-light transition-colors">Newsroom</Link></li>
              <li><Link to="/about" className="hover:text-gold-light transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-gold-light transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold-light transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-bold mb-4 text-sm text-primary-foreground">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/60 mb-4">
              Get weekly insights delivered to your inbox.
            </p>
            <Link 
              to="/newsletter" 
              className="text-sm text-gold-light hover:text-gold transition-colors"
            >
              Subscribe →
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/40">
            © 2025 Clientele Builder. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/40">
            <a href="#" className="hover:text-gold-light transition-colors">Twitter</a>
            <a href="#" className="hover:text-gold-light transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-gold-light transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
