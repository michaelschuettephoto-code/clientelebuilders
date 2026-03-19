import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ScoreAppButton } from "@/components/ScoreAppButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Users, Target, Rocket, Shield, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // TODO: Replace with actual URLs
  const AUDIT_BOOKING_URL = "https://calendly.com/your-booking-link";
  const SCOREAPP_URL = "https://your-scoreapp-link.com";

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
              Stop Recruiting People Who Quit.
              <br />
              We Build Teams That Sell & Stay.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Recruiting & Lead Generation as a Service for IMOs, MGAs, and Team Leaders.
              You only pay when your recruits produce. No overhead. No wasted training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={AUDIT_BOOKING_URL}>
                Book Your Recruiting & Lead Gen Audit
              </CTAButton>
              <ScoreAppButton href={SCOREAPP_URL}>
                Take the Team Builder Score Assessment
              </ScoreAppButton>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                If this sounds familiar...
              </h2>
              <ul className="space-y-4">
                {[
                  "You're recruiting people who never sell",
                  "Your team churns faster than it grows",
                  "You spend time training instead of producing",
                  "You're building headcount, not revenue"
                ].map((pain, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <span className="text-lg text-muted-foreground">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-card border border-border rounded-lg p-8">
                <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">
                  What if your team grew with producers, not passengers?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Imagine a recruiting system that delivers agents who are qualified, 
                  culture-aligned, and ready to sell from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Recruiting & Lead Gen as a Service (RLGaaS)
            </h2>
            <p className="text-xl text-muted-foreground">
              You get a plug-in recruiting department that pays for itself.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Target}
              title="Qualified recruiting pipeline"
              description="We drive inbound recruiting leads so you never have to prospect for talent again."
            />
            <FeatureCard
              icon={Users}
              title="Screened & culture-aligned candidates"
              description="No more burnout interviews. Every candidate is pre-qualified and matches your culture."
            />
            <FeatureCard
              icon={Rocket}
              title="Day 1–30 Onboarding Program"
              description="Agents start faster and stay longer with our proven onboarding system."
            />
            <FeatureCard
              icon={Shield}
              title="Behavior-based accountability system"
              description="Removes guesswork from leadership with clear metrics and accountability."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A simple, proven 3-step process that transforms recruiting
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep
              number={1}
              title="Attract"
              description="ScoreApp funnels + outbound attraction systems bring qualified candidates to you"
            />
            <ProcessStep
              number={2}
              title="Activate"
              description="Culture-based onboarding + day-1 readiness ensures agents hit the ground running"
            />
            <ProcessStep
              number={3}
              title="Accelerate"
              description="Weekly accountability + retention loops keep producers engaged and growing"
            />
          </div>
        </section>

        {/* Proof / Authority Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Built on Real-World Experience
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "10+ years building clientele-based service businesses",
              "High-retention training culture background",
              "Built & scaled trade schools, barbershops, and sales programs",
              "Real-world experience developing team-first culture"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* The Pitch / Pricing Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border bg-card/50">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              We don't charge for recruiting.
              <br />
              We get paid when your agents produce.
            </h2>
            
            <div className="bg-background border border-border rounded-lg p-8 my-8 max-w-xl mx-auto">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Cost to You</p>
                  <p className="text-2xl font-semibold">$0 Upfront</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Paid How?</p>
                  <p className="text-lg">% of FYC & Renewals on agents we place</p>
                </div>
              </div>
            </div>

            <CTAButton href={AUDIT_BOOKING_URL} className="text-lg px-12 py-7">
              Book Your Recruiting & Lead Gen Audit
            </CTAButton>
          </div>
        </section>

        {/* ScoreApp Lead Magnet Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Find Out What's Holding Your Agency Back
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the <strong>Team Builder Score Assessment</strong> and get a customized 
              recruiting plan based on your growth stage.
            </p>
            <ScoreAppButton href={SCOREAPP_URL} size="lg" className="text-lg px-12 py-7">
              Take Assessment
            </ScoreAppButton>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container max-w-7xl mx-auto px-6 py-24 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8">
              You don't need more leads.
              <br />
              You need <span className="text-primary">producers who stay.</span>
            </h2>
            <CTAButton href={AUDIT_BOOKING_URL} className="text-xl px-16 py-8">
              Book Your Audit Call
            </CTAButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
