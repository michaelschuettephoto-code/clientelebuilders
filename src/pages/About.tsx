import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-5xl md:text-6xl font-semibold mb-8">About Clientele Builder</h1>
          
          <div className="text-xl text-muted-foreground leading-relaxed mb-12">
            <p>
              Clientele Builder is the premium intelligence platform for life insurance professionals, 
              agency owners, and IMOs who refuse to settle for ordinary.
            </p>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We believe that the insurance industry deserves better—better systems, better automation, 
            better workflows. Our Newsroom delivers the elite thought leadership that transforms how 
            professionals acquire, retain, and serve clients.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">What We Cover</h2>
          <ul className="space-y-3 text-muted-foreground mb-12">
            <li><strong className="text-foreground">CRM Mastery:</strong> Advanced strategies for managing client relationships at scale</li>
            <li><strong className="text-foreground">Automation:</strong> Workflow optimization that frees your time for high-value activities</li>
            <li><strong className="text-foreground">Mindset:</strong> The psychology of elite performance in a competitive industry</li>
            <li><strong className="text-foreground">Creative Systems:</strong> Innovative approaches to client acquisition and retention</li>
            <li><strong className="text-foreground">Industry Intelligence:</strong> Trends, insights, and strategies from the frontlines</li>
          </ul>

          <div className="bg-card border border-border rounded-lg p-8 my-12">
            <h2 className="text-3xl font-semibold mb-4">Ready to Level Up?</h2>
            <p className="text-muted-foreground mb-6">
              Join our newsletter for weekly insights delivered straight to your inbox.
            </p>
            <Link to="/newsletter">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Subscribe Now
              </Button>
            </Link>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Have questions, feedback, or collaboration ideas? We'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-border hover:bg-card">
              Contact Us
            </Button>
          </Link>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
