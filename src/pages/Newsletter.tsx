import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Newsletter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">
            Join the Clientele Builder Newsletter
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Get exclusive insights, systems, and strategies delivered to your inbox every week. 
            Join thousands of insurance professionals who are leveling up their game.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <NewsletterSignup />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary mb-2">Weekly</div>
            <p className="text-muted-foreground">
              Fresh insights every week, never spam
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground">
              Insurance professionals in our community
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-semibold text-primary mb-2">Premium</div>
            <p className="text-muted-foreground">
              Elite content you won't find anywhere else
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">What You'll Get</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>✓ Advanced CRM strategies and automation workflows</li>
            <li>✓ Exclusive case studies from top-performing agencies</li>
            <li>✓ Mindset and performance optimization techniques</li>
            <li>✓ Industry trends and competitive intelligence</li>
            <li>✓ Tools and resources to streamline your operations</li>
            <li>✓ Early access to new features and content</li>
          </ul>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Newsletter;
