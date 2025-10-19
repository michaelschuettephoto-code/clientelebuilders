import { Link } from "react-router-dom";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logo} alt="Clientele Builder" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Elite systems and strategy for insurance professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Newsroom</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-sm">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get weekly insights delivered to your inbox.
            </p>
            <Link 
              to="/newsletter" 
              className="text-sm text-primary hover:underline"
            >
              Subscribe →
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Clientele Builder. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
