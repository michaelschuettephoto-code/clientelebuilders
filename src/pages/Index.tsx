import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ScoreAppButton } from "@/components/ScoreAppButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Users, Target, Rocket, Shield, CheckCircle, XCircle } from "lucide-react";
import "./insight-article.css";

const Index = () => {
  const AUDIT_BOOKING_URL = "https://start.clientelebuilders.com";
  const SCOREAPP_URL = "https://start.clientelebuilders.com";

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section — editorial style */}
        <section className="bg-primary text-primary-foreground py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-[-80px] right-[-60px] w-[400px] h-[400px] rounded-full bg-sky/10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-gold-light to-gold" />
          <div className="container max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <span className="font-mono text-[9px] tracking-[0.32em] text-gold-light uppercase block mb-4">
                Insurance Distribution Architect
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] text-primary-foreground">
                Stop Recruiting People Who Quit.
                <br />
                <em className="text-sky italic">We Build Teams That Sell & Stay.</em>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/55 font-light mb-10 leading-relaxed max-w-2xl">
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
          </div>
        </section>

        {/* ═══ FEATURED ARTICLE — INTEGRATED NEWSROOM ═══ */}
        <div className="insight-article">
          {/* MASTHEAD */}
          <div className="ia-masthead">
            <div className="ia-masthead-inner">
              <div className="ia-pub-tag">Insurance Distribution Architect</div>
              <div className="ia-article-label">Thought Leadership</div>
              <h1>
                Why Recruiting Insurance Agents Is So Difficult <em>Right Now</em>
              </h1>
              <p className="ia-masthead-deck">
                The industry keeps treating this as a pipeline problem. It isn't. It's a structural
                mismatch between how insurance distribution was built and how people are willing to
                work today.
              </p>
              <div className="ia-masthead-meta">
                <div className="ia-meta-item">
                  Published <span>March 2026</span>
                </div>
                <div className="ia-meta-item">
                  Topic <span>Distribution · Recruiting · Workforce</span>
                </div>
                <div className="ia-meta-item">
                  Read time <span>7 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="ia-page">
            <div className="ia-two-col">
              {/* MAIN BODY */}
              <div className="ia-body">
                <p className="ia-drop-cap">
                  Every year, insurance organizations across the country post the same complaint: they
                  can't find enough agents. Every year, the industry responds with the same playbook —
                  more recruiting events, bigger sign-on incentives, louder promises about income
                  potential. And every year, the problem gets worse. Not marginally worse. Structurally
                  worse.
                </p>

                <p className="ia-lead">
                  This isn't a sourcing problem. It isn't a branding problem. It isn't even primarily a
                  compensation problem. Recruiting insurance agents has become genuinely difficult
                  because three separate forces — industry transformation, market consolidation, and a
                  generational shift in how people think about work — are converging at exactly the same
                  moment. Each force alone would create friction. Together, they are reshaping whether
                  the traditional agent model is viable at all.
                </p>

                <div className="ia-pull-quote">
                  <p>
                    "The organizations still running a volume recruiting model are not competing for
                    talent. They are competing against a structural reality that their model was not
                    built to survive."
                  </p>
                </div>

                <div className="ia-section-label">01 &nbsp; Industry Transformation</div>
                <h2>The Industry Is Actively Reducing Its Dependence on Agents</h2>

                <p>
                  The most important context for understanding the recruiting crisis is one that most
                  recruiting conversations never mention: the insurance industry is not waiting for
                  agents to come back. It is engineering them out.
                </p>
                <p>
                  Direct-to-consumer platforms, digital comparison tools, and AI-powered underwriting
                  are not fringe experiments. They are mainstream investments by major carriers who have
                  spent the last decade watching what happened to travel agents, stockbrokers, and
                  mortgage officers when digital intermediation arrived. The lesson they drew was not
                  subtle: distribution that runs through human beings is expensive, inconsistent, and
                  increasingly avoidable.
                </p>
                <p>
                  This matters for recruiting because it shapes the fundamental signal the industry
                  sends to potential agents. When consumers can compare and purchase policies online
                  without ever speaking to a person, the career proposition for agents becomes harder to
                  defend. The job exists — and in many segments, it remains essential — but the tailwind
                  that once made it obviously attractive has shifted into a headwind.
                </p>

                <div className="ia-dark-panel">
                  <div className="ia-dark-panel-label">Core Insight</div>
                  <div className="ia-dark-panel-text">
                    The industry is not failing to recruit agents. It is succeeding at shifting toward a
                    distribution model that needs fewer of them — and the recruiting crisis is partly
                    the <em>intended consequence</em>.
                  </div>
                </div>

                <p>
                  For independent agencies and IMOs, this creates a specific problem. They are trying to
                  recruit into a career that the industry's largest players are simultaneously
                  undermining. The competition for agent talent is not just coming from other agencies.
                  It is coming from the carrier strategy itself.
                </p>

                <div className="ia-section-label">02 &nbsp; Market Consolidation</div>
                <h2>The Economics of the Market Have Shifted Against New Entrants</h2>

                <p>
                  Thirty years ago, a motivated person could enter insurance sales with relatively low
                  barriers, build a client base, and reasonably expect to grow a sustainable income. The
                  economics were imperfect, but the math worked often enough that it attracted people
                  willing to accept early-career risk in exchange for long-term upside.
                </p>
                <p>
                  That math has changed. The consolidation of the insurance market — driven by private
                  equity, strategic acquisitions, and the relentless pressure to operate at scale — has
                  produced a landscape dominated by large, complex organizations with sophisticated
                  distribution infrastructure, carrier relationships, and data capabilities that
                  independent operators simply cannot match.
                </p>
                <p>
                  Consolidation has also compressed the income curve at the beginning of an agent's
                  career, precisely when it matters most for recruiting. The result is a high attrition
                  rate in the first 12–18 months that has become so normalized in the industry that most
                  organizations simply build it into their model rather than addressing its cause.
                </p>

                <div className="ia-pull-quote">
                  <p>
                    "High early-career attrition is not an unfortunate side effect of insurance sales.
                    It is the business model. And that model has become one of the most powerful
                    recruiting deterrents in any industry."
                  </p>
                </div>

                <p>
                  Word travels. When the people who tried the career tell the people who are considering
                  it what actually happened to them — the chargebacks, the lack of support, the income
                  volatility — the recruiting funnel doesn't just shrink. It develops a reputation
                  problem that no amount of marketing can fully reverse.
                </p>

                <div className="ia-section-label">03 &nbsp; Workforce Behavior</div>
                <h2>People Don't Want This Job Anymore — and They Have Good Reasons</h2>

                <p>
                  There is a tendency inside the insurance industry to explain declining agent interest
                  as a generational attitude problem. Younger workers, the argument goes, lack the risk
                  tolerance and work ethic that the career demands. This explanation is both
                  self-flattering and wrong.
                </p>
                <p>
                  The behavioral reality is more precise. Research on workforce preferences consistently
                  shows that younger workers are not simply risk-averse — they are risk-informed.
                  Commission-only compensation is not an opportunity they are too timid to pursue. It is
                  a structure they have evaluated and rationally declined.
                </p>

                <ul className="ia-force-list">
                  <li className="ia-force-item">
                    <span className="ia-force-num">01</span>
                    <div className="ia-force-body">
                      <strong>Income unpredictability</strong>
                      <span>Commission-based earnings offer no floor. An unpredictable income stream is a genuine financial liability, not just a psychological discomfort.</span>
                    </div>
                  </li>
                  <li className="ia-force-item">
                    <span className="ia-force-num">02</span>
                    <div className="ia-force-body">
                      <strong>Trust deficit in financial institutions</strong>
                      <span>Post-2008, institutional trust in financial services has not fully recovered among younger cohorts.</span>
                    </div>
                  </li>
                  <li className="ia-force-item">
                    <span className="ia-force-num">03</span>
                    <div className="ia-force-body">
                      <strong>Competition from alternative work models</strong>
                      <span>Gig platforms, remote tech roles, and creator economy careers offer income, flexibility, and identity in ways that traditional insurance sales does not.</span>
                    </div>
                  </li>
                  <li className="ia-force-item">
                    <span className="ia-force-num">04</span>
                    <div className="ia-force-body">
                      <strong>The perception gap is not closing</strong>
                      <span>Insurance sales is perceived as high-pressure, rejection-heavy, and financially unstable. That perception is rooted in enough reality that it requires a different underlying reality to change.</span>
                    </div>
                  </li>
                </ul>

                <p>
                  The industry's standard response to this has been to argue harder. None of it is
                  working, because the audience is not unconvinced. They are correctly informed.
                </p>

                <div className="ia-section-label">04 &nbsp; Current Conditions</div>
                <h2>The Talent Shortage Is Already Here — and It Is Compounding</h2>

                <p>
                  These forces are not theoretical. They are producing visible, measurable results in
                  the industry right now. Experienced agents are retiring at rates that new recruiting
                  cannot offset. The average age of insurance agents has been climbing for two decades.
                </p>
                <p>
                  What makes this moment particularly sharp is the compounding dynamic. Recruiting
                  difficulty leads to understaffed agencies. Understaffed agencies deliver worse
                  new-agent support. Worse support produces higher attrition. Higher attrition produces
                  more recruiting pressure. And more recruiting pressure, when run through the same
                  broken model, produces the same results with higher urgency and higher cost.
                </p>

                <div className="ia-dark-panel">
                  <div className="ia-dark-panel-label">The Structural Mismatch</div>
                  <div className="ia-dark-panel-text">
                    The traditional model was built on the assumption that most recruits will fail — and
                    priced accordingly. That assumption is now the primary reason most recruits{" "}
                    <em>do</em> fail.
                  </div>
                </div>

                <div className="ia-section-label">05 &nbsp; What Must Change</div>
                <h2>What Actually Needs to Change — and Where the Opportunity Is</h2>

                <p>
                  The firms that solve this are not going to solve it by recruiting harder. They are
                  going to solve it by building a fundamentally different early-career experience — one
                  that aligns with how modern workers actually evaluate career risk.
                </p>

                <div className="ia-opp-grid">
                  <div className="ia-opp-box ia-gold">
                    <div className="ia-opp-label">Shift 01</div>
                    <div className="ia-opp-head">From Volume Recruiting to Qualified Recruiting</div>
                    <div className="ia-opp-body">
                      Stop optimizing for the number of candidates entering the funnel. Start optimizing
                      for the quality of candidates who reach month six.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-sky">
                    <div className="ia-opp-label">Shift 02</div>
                    <div className="ia-opp-head">From High-Attrition Models to Retention Infrastructure</div>
                    <div className="ia-opp-body">
                      Build the systems — onboarding tracks, mentorship programs, early activity support
                      — that change the first-year experience.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-green">
                    <div className="ia-opp-label">Shift 03</div>
                    <div className="ia-opp-head">From Commission-Only to Structured Early Compensation</div>
                    <div className="ia-opp-body">
                      Reduce early-career income risk — salary draws, lead subsidies, guaranteed minimums in year one.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-slate">
                    <div className="ia-opp-label">Shift 04</div>
                    <div className="ia-opp-head">From Assumption of Failure to Expectation of Development</div>
                    <div className="ia-opp-body">
                      Treat new agents as long-term investments rather than short-term lottery tickets.
                    </div>
                  </div>
                </div>

                <div className="ia-closing-strip">
                  <p>
                    <strong>The opportunity is real.</strong> The insurance career, at its core, still
                    offers something genuinely compelling: autonomy, meaningful work, and income that
                    compounds over time with a book of business. That proposition has not disappeared.
                  </p>
                  <p>
                    The firms that figure out how to bring that proposition back to the surface — with
                    the infrastructure to actually deliver on it — will not just solve their recruiting
                    problem. They will build the kind of distribution organizations that attract agents,
                    retain them, and eventually become the ones everyone else is trying to recruit from.
                  </p>
                  <p>That is the actual opportunity. Not a better pitch deck. A better system.</p>
                </div>
              </div>

              {/* SIDEBAR */}
              <aside className="ia-sidebar">
                <div className="ia-sidebar-card">
                  <div className="ia-sidebar-card-head">Industry Data Points</div>
                  <div className="ia-sidebar-card-body">
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">Avg age of insurance agent (US)</span>
                      <span className="ia-stat-value">59yrs</span>
                    </div>
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">New agents still active at 12 months</span>
                      <span className="ia-stat-value ia-alarm">~20%<span className="ia-trend ia-dn">↓</span></span>
                    </div>
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">Producing agents as % of licensed roster</span>
                      <span className="ia-stat-value ia-alarm">~22%<span className="ia-trend ia-dn">↓</span></span>
                    </div>
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">Industry workforce growth (5yr)</span>
                      <span className="ia-stat-value">Flat<span className="ia-trend ia-dn">↓</span></span>
                    </div>
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">PE-backed IMO consolidation activity</span>
                      <span className="ia-stat-value">Active</span>
                    </div>
                    <div className="ia-stat-row">
                      <span className="ia-stat-label">Direct-to-consumer channel growth</span>
                      <span className="ia-stat-value">Rising</span>
                    </div>
                  </div>
                </div>

                <div className="ia-callout">
                  <div className="ia-callout-label">Research Finding</div>
                  <p>
                    "Agent retention is strongly tied to perceived early-career support — mentorship,
                    peer networks, supervisor engagement, and access to tools."
                  </p>
                </div>

                <div className="ia-sidebar-card">
                  <div className="ia-sidebar-card-head">The 3 Forces Converging</div>
                  <div className="ia-sidebar-card-body">
                    <div className="ia-sidebar-force">
                      <strong>Industry Transformation</strong>
                      <span>Carriers shifting toward digital, direct, and automated distribution.</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Market Consolidation</strong>
                      <span>PE-backed rollups compressing early-agent economics and normalizing high attrition.</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Workforce Expectations</strong>
                      <span>Modern workers rationally declining commission-only roles.</span>
                    </div>
                  </div>
                </div>

                <div className="ia-sidebar-card">
                  <div className="ia-sidebar-card-head">What Retained Agents Have in Common</div>
                  <div className="ia-sidebar-card-body">
                    <ul className="ia-checklist">
                      <li>Structured onboarding in first 30 days</li>
                      <li>Assigned mentor or manager with active involvement</li>
                      <li>Access to centralized lead flow (not fully self-sourced)</li>
                      <li>Clear, transparent compensation structure</li>
                      <li>Activity coaching in first 90 days — not just product training</li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>

          <div className="ia-report-footer">
            <span className="ia-footer-brand">Insurance Distribution Architect</span>
            <span>Thought Leadership · March 2026</span>
            <span>insurancedistributionarchitect.com</span>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
              <div className="bg-card border border-border rounded p-8">
                <CheckCircle className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-4">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recruiting & Lead Gen as a Service (RLGaaS)
            </h2>
            <p className="text-xl text-muted-foreground">
              You get a plug-in recruiting department that pays for itself.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon={Target} title="Qualified recruiting pipeline" description="We drive inbound recruiting leads so you never have to prospect for talent again." />
            <FeatureCard icon={Users} title="Screened & culture-aligned candidates" description="No more burnout interviews. Every candidate is pre-qualified and matches your culture." />
            <FeatureCard icon={Rocket} title="Day 1–30 Onboarding Program" description="Agents start faster and stay longer with our proven onboarding system." />
            <FeatureCard icon={Shield} title="Behavior-based accountability system" description="Removes guesswork from leadership with clear metrics and accountability." />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">A simple, proven 3-step process that transforms recruiting</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessStep number={1} title="Attract" description="ScoreApp funnels + outbound attraction systems bring qualified candidates to you" />
            <ProcessStep number={2} title="Activate" description="Culture-based onboarding + day-1 readiness ensures agents hit the ground running" />
            <ProcessStep number={3} title="Accelerate" description="Weekly accountability + retention loops keep producers engaged and growing" />
          </div>
        </section>

        {/* Proof Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built on Real-World Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "10+ years building clientele-based service businesses",
              "High-retention training culture background",
              "Built & scaled trade schools, barbershops, and sales programs",
              "Real-world experience developing team-first culture"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card border border-border rounded p-6">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              We don't charge for recruiting.
              <br />
              We get paid when your agents produce.
            </h2>
            <div className="bg-primary-foreground/10 border border-primary-foreground/20 rounded p-8 my-8 max-w-xl mx-auto">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-2">Cost to You</p>
                  <p className="text-2xl font-bold text-primary-foreground">$0 Upfront</p>
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50 mb-2">Paid How?</p>
                  <p className="text-lg text-primary-foreground">% of FYC & Renewals on agents we place</p>
                </div>
              </div>
            </div>
            <CTAButton href={AUDIT_BOOKING_URL} className="text-lg px-12 py-7">
              Book Your Recruiting & Lead Gen Audit
            </CTAButton>
          </div>
        </section>

        {/* ScoreApp Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto bg-fog border border-border rounded p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

        {/* Final CTA */}
        <section className="container max-w-7xl mx-auto px-6 py-24 border-t border-border">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              You don't need more leads.
              <br />
              You need <span className="text-accent">producers who stay.</span>
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
