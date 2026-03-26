import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTAButton } from "@/components/CTAButton";
import { ScoreAppButton } from "@/components/ScoreAppButton";
import { FeatureCard } from "@/components/FeatureCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Users, Target, Rocket, Shield, CheckCircle, XCircle } from "lucide-react";
import "./insight-article.css";

const Index = () => {
  const AUDIT_BOOKING_URL = "https://start.clientelebuilders.com/growth-diagnostic";
  const SCOREAPP_URL = "https://start.clientelebuilders.com/growth-diagnostic";

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
              <div className="ia-pub-tag">Clientele Builders</div>
              <div className="ia-article-label">Growth Intelligence</div>
              <h1>
                Why Most Insurance Teams Struggle to Grow — And What Actually{" "}
                <em>Fixes It</em>
              </h1>
              <p className="ia-masthead-deck">
                It's not a lead problem. It's not a marketing problem. It's a
                system problem. And most teams won't figure that out until they've
                already paid for it.
              </p>
              <div className="ia-masthead-meta">
                <div className="ia-meta-item">
                  Topic <span>Growth · Systems · Recruiting</span>
                </div>
                <div className="ia-meta-item">
                  Read time <span>5 min</span>
                </div>
              </div>
            </div>
          </div>

          {/* PAGE CONTENT */}
          <div className="ia-page">
            <div className="ia-two-col">
              {/* MAIN BODY */}
              <div className="ia-body">
                <p className="ia-lead ia-drop-cap">
                  Here's the honest truth most people in this industry won't say
                  out loud: the teams that are struggling aren't struggling because
                  they're lazy. They're not short on ambition. They're not missing
                  passion. They're running hard — and getting nowhere — because
                  they're running on a broken foundation.
                </p>

                <p>
                  Some months hit. Some months stall. And nobody can clearly
                  explain why. So they chase more leads. Hire a marketing agency.
                  Post more content. And the cycle repeats — more activity, same
                  results, more frustration.
                </p>

                <p>
                  That's not a motivation problem. That's a structure problem. And
                  structure problems don't respond to effort. They respond to
                  systems.
                </p>

                <div className="ia-pull-quote">
                  <p>
                    "You don't have a lead problem. You have a system that wasn't
                    built to handle the leads you already have."
                  </p>
                </div>

                {/* ── 01 ── */}
                <div className="ia-section-label">01 &nbsp; The Real Bottleneck</div>
                <h2>It's Not the Leads. It's the Pipeline Behind Them.</h2>

                <p>
                  Most agency owners believe growth lives in the marketing budget.
                  More leads, more growth. It's a logical assumption. It's also
                  wrong.
                </p>

                <p>
                  The real constraint is simpler and more uncomfortable: how fast
                  can you bring in quality agents and make them productive? Because
                  no amount of leads fixes a team that isn't built to convert them.
                  And no amount of marketing fixes an onboarding system that loses
                  agents before they ever reach their potential.
                </p>

                <p>Two things are almost always broken before anything else:</p>

                <ul className="ia-force-list">
                  <li className="ia-force-item">
                    <span className="ia-force-num">01</span>
                    <div className="ia-force-body">
                      <strong>Recruiting has no system behind it</strong>
                      <span>
                        No clear pipeline. No predictable candidate flow. Hiring
                        based on urgency, not quality — which means you're always
                        one bad month away from starting over. You're not building a
                        team. You're plugging holes.
                      </span>
                    </div>
                  </li>
                  <li className="ia-force-item">
                    <span className="ia-force-num">02</span>
                    <div className="ia-force-body">
                      <strong>Ramp time is bleeding you out slowly</strong>
                      <span>
                        Even when recruiting works, agents take too long to
                        produce. No clear structure. No defined daily actions. No
                        measurable milestones. So they drift — and either leave or
                        underperform. And the cost of that drift compounds quietly
                        until it becomes a crisis.
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="ia-pull-quote">
                  <p>
                    "Most teams don't realize they have a system problem. They just
                    feel stuck. That feeling has a source — and it's almost never
                    the thing they're focused on fixing."
                  </p>
                </div>

                {/* ── 02 ── */}
                <div className="ia-section-label">02 &nbsp; The Hidden Cost</div>
                <h2>What Poor Systems Actually Cost You</h2>

                <p>
                  When recruiting and training aren't structured, the damage isn't
                  loud. It's quiet. It shows up as turnover that feels normal.
                  Production that never quite reaches its potential. Leadership
                  stretched so thin they're managing problems instead of building
                  momentum.
                </p>

                <p>
                  The math is simple and brutal. Every agent who washes out in the
                  first 90 days represents recruiting cost, management time, and
                  market exposure — gone. Every week an agent spends figuring out
                  what to do instead of doing it is revenue that never existed.
                  Every month leadership spends firefighting is a month the
                  business didn't move forward.
                </p>

                <p>
                  Most teams absorb this quietly and call it growing pains. It
                  isn't. It's leakage. And leakage doesn't stop on its own.
                </p>

                <div className="ia-pull-quote">
                  <p>
                    "Untracked hustle burns more money than it earns. Motion
                    without management isn't growth — it's expensive chaos with
                    good intentions."
                  </p>
                </div>

                {/* ── 03 ── */}
                <div className="ia-section-label">03 &nbsp; The Shift</div>
                <h2>From Guesswork to Intelligence</h2>

                <p>
                  The teams that scale don't rely on effort alone. They rely on
                  intelligence. They've stopped asking "what should we try next?"
                  and started asking "what does the data tell us?"
                </p>

                <p>
                  They know where their best recruits come from. They know how long
                  it takes agents to become productive. They know which activities
                  actually drive revenue — and which ones just create the feeling
                  of progress. They know where the bottlenecks are before the
                  bottlenecks become emergencies.
                </p>

                <p>
                  That's not a special talent. That's a system. And systems can be
                  built.
                </p>

                {/* ── 04 ── */}
                <div className="ia-section-label">04 &nbsp; What They Do Differently</div>
                <h2>Four Things Scalable Teams Do That Others Don't</h2>

                <div className="ia-opp-grid">
                  <div className="ia-opp-box ia-gold">
                    <div className="ia-opp-label">Shift 01</div>
                    <div className="ia-opp-head">
                      They Track the Recruiting Pipeline
                    </div>
                    <div className="ia-opp-body">
                      They know where candidates come from, which sources convert,
                      and where quality breaks down. Recruiting isn't a gut feeling
                      — it's a funnel with measurable stages.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-sky">
                    <div className="ia-opp-label">Shift 02</div>
                    <div className="ia-opp-head">
                      They Shorten Ramp Time Deliberately
                    </div>
                    <div className="ia-opp-body">
                      Clear onboarding. Defined daily actions. Measurable
                      milestones for week one, month one, month three.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-green">
                    <div className="ia-opp-label">Shift 03</div>
                    <div className="ia-opp-head">
                      They Build Processes That Repeat
                    </div>
                    <div className="ia-opp-body">
                      They document what works. They standardize it. They scale it.
                      The business runs on repeatable infrastructure.
                    </div>
                  </div>
                  <div className="ia-opp-box ia-slate">
                    <div className="ia-opp-label">Shift 04</div>
                    <div className="ia-opp-head">They Optimize Distribution</div>
                    <div className="ia-opp-body">
                      They don't rely on one channel. Events, content, outreach,
                      partnerships — built in layers, so no single source going dry
                      creates a crisis.
                    </div>
                  </div>
                </div>

                <hr className="ia-rule" />

                {/* ── 05 ── */}
                <div className="ia-section-label">05 &nbsp; Where Most Go Wrong</div>
                <h2>The Cycle That Keeps Teams Stuck</h2>

                <p>
                  Here's the pattern that plays out in agencies across this
                  industry, over and over:
                </p>

                <p>
                  Growth stalls → chase more leads → leads don't convert → blame
                  marketing → try a new strategy → growth stalls again.
                </p>

                <p>
                  Every step in that cycle skips the actual problem. The foundation
                  isn't solid. The container leaks. And pouring more water into a
                  leaking container doesn't fill it — it just costs more.
                </p>

                <p>
                  The real solution isn't more activity. It's better architecture.
                  Build the system first. Then feed it. That's the order that
                  works.
                </p>

                <div className="ia-dark-panel">
                  <div className="ia-dark-panel-label">
                    The Truth About Growth
                  </div>
                  <div className="ia-dark-panel-text">
                    Growth is not random. It's <em>engineered</em>. The teams that
                    win are not the busiest — they're the most structured. They
                    treat money like a metric, not a miracle. And it stays loyal to
                    them because of it.
                  </div>
                </div>

                {/* ── 06 ── */}
                <div className="ia-section-label">
                  06 &nbsp; What This Means for You
                </div>
                <h2>If Your Team Is Feeling Stuck Right Now</h2>

                <p>
                  The issue is not effort. You're already working. The issue is
                  that the work doesn't have a structure underneath it that makes
                  it compound.
                </p>

                <p>
                  Once the system is clear — once recruiting has a pipeline,
                  onboarding has a track, and production has defined milestones —
                  everything changes. Not because the effort increases. Because the
                  effort finally lands somewhere.
                </p>

                <div className="ia-closing-strip">
                  <p>
                    The teams that figure this out don't just grow faster. They
                    grow differently — with less chaos, less turnover, and less
                    dependence on a single great month to cover for all the bad
                    ones.
                  </p>
                  <p>
                    They understand their numbers. They build systems around them.
                    And they scale with intention instead of hoping this month is
                    better than last month.
                  </p>
                  <p>
                    <strong>That's the move.</strong> Not more hustle. Better
                    infrastructure. Get organized, and growth stays loyal. Stay
                    sloppy, and it moves on.
                  </p>
                  <p>— Money knows. And now, so do you.</p>
                </div>
              </div>

              {/* SIDEBAR */}
              <aside className="ia-sidebar">
                <div className="ia-callout">
                  <div className="ia-callout-label">The Consigliere Says</div>
                  <p>
                    "Stop chasing new before you clean what's old. Stop
                    celebrating sales before you measure retention. Get organized,
                    and I'll stay loyal. Stay sloppy, and I'll move on."
                  </p>
                </div>

                <div className="ia-sidebar-card">
                  <div className="ia-sidebar-card-head">
                    Signs Your System Is Broken
                  </div>
                  <div className="ia-sidebar-card-body">
                    <ul className="ia-checklist">
                      <li>
                        Growth feels random — strong months followed by stalls you
                        can't explain
                      </li>
                      <li>
                        New agents take longer than 60 days to write their first
                        policy
                      </li>
                      <li>
                        You can't name where your last 5 recruits came from
                      </li>
                      <li>
                        Leadership is solving the same problems every month
                      </li>
                      <li>
                        You're buying more leads but conversion isn't improving
                      </li>
                      <li>Turnover feels normal instead of fixable</li>
                    </ul>
                  </div>
                </div>

                <div className="ia-sidebar-card">
                  <div className="ia-sidebar-card-head">What We Analyze</div>
                  <div className="ia-sidebar-card-body">
                    <div className="ia-sidebar-force">
                      <strong>Recruiting pipeline</strong>
                      <span>where quality breaks down</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Agent ramp time</strong>
                      <span>where production lags</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Distribution strategy</strong>
                      <span>where growth is leaking</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Onboarding structure</strong>
                      <span>where agents get lost</span>
                    </div>
                    <div className="ia-sidebar-force">
                      <strong>Performance data</strong>
                      <span>what the numbers actually say</span>
                    </div>
                  </div>
                </div>

                <div style={{ background: "hsl(var(--gold))", padding: "20px 16px", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", fontWeight: 700, color: "hsl(var(--navy))", marginBottom: "10px", lineHeight: 1.3 }}>
                    Ready to find where your growth is breaking down?
                  </p>
                  <a
                    href={SCOREAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      background: "hsl(var(--navy))",
                      color: "hsl(var(--cream))",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "12px",
                      fontWeight: 500,
                    }}
                  >
                    Schedule a Strategy Call →
                  </a>
                </div>
              </aside>
            </div>
          </div>

          <div className="ia-report-footer">
            <span className="ia-footer-brand">Clientele Builders</span>
            <span>Growth Intelligence · 2026</span>
            <span>clientelebuilders.com</span>
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
