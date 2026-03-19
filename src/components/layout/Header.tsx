import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.jpg";

export const Header = () => {
  return (
    <header className="border-b border-border sticky top-0 z-50 bg-background/95 backdrop-blur">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Clientele Builder" 
              className="h-10 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/blog" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Newsroom
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/newsletter" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Newsletter
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-48 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
