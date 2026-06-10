import { Helmet } from "react-helmet";
import { ArrowRight, Search, TrendingDown, Eye, Users, GraduationCap, BarChart3, DollarSign, Workflow, Megaphone, Repeat } from "lucide-react";

const leakAreas = [
  { icon: Users, title: "Recruiting", question: "Can the organization consistently attract and move the right people forward?" },
  { icon: Workflow, title: "Onboarding", question: "Do new agents know exactly what to do after they join?" },
  { icon: Megaphone, title: "Marketing", question: "Does the organization build trust before conversations begin?" },
  { icon: TrendingDown, title: "Sales Process", question: "Can attention reliably become revenue?" },
  { icon: Repeat, title: "Persistency", question: "Is long-term profit being protected?" },
  { icon: DollarSign, title: "Compensation", question: "Are incentives aligned with the desired outcomes?" },
  { icon: GraduationCap, title: "Leadership Development", question: "Is the next generation of leaders being intentionally developed?" },
  { icon: BarChart3, title: "Technology & Data", question: "Can leadership clearly see what is working and what is not?" },
];

const comparisons: [string, string][] = [
  ["Most providers sell tactics.", "We focus on systems."],
  ["Most providers start with marketing.", "We start with diagnosis."],
  ["Most providers assume the problem.", "We identify it."],
  ["Most providers help organizations do more.", "We help organizations see more."],
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Helmet>
        <title>Clientele Builders — Distribution Intelligence for Life Insurance</title>
        <meta name="description" content="Distribution intelligence for life insurance IMOs and agencies. Find where trust, recruiting, onboarding, sales, retention, leadership, and operations are leaking revenue." />
        <link rel="canonical" href="https://www.clientelebuilders.com/" />
      </Helmet>

      {/* Nav */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">Clientele Builders</span>
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
            <a href="#approach" className="hover:text-slate-900 transition-colors">Approach</a>
            <a href="#framework" className="hover:text-slate-900 transition-colors">The Framework</a>
            <a href="#diagnostic" className="hover:text-slate-900 transition-colors">Diagnostic</a>
            <a href="#who" className="hover:text-slate-900 transition-colors">Who We Serve</a>
          </nav>
          <a href="#diagnostic" className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-slate-700 transition-colors">
            Get the Diagnostic
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 20%, rgba(125,211,170,0.25) 0%, rgba(11,18,32,0) 70%), radial-gradient(50% 40% at 10% 90%, rgba(99,140,255,0.18) 0%, rgba(11,18,32,0) 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-28 lg:pt-36 lg:pb-40">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80 mb-6">Distribution Intelligence for Life Insurance</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif leading-[1.1] text-white max-w-4xl">
            Most organizations don&apos;t have a lead problem.
            <br />
            <span className="text-emerald-300">They have a visibility problem.</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Clientele Builders helps IMOs, agencies, and distribution leaders find where trust, recruiting, onboarding, sales, retention, leadership, and operations are leaking revenue &mdash; before they invest in the wrong solution.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#diagnostic" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 text-slate-900 text-sm font-semibold px-7 py-3.5 hover:bg-emerald-200 transition-colors">
              Take the Distribution Leak Diagnostic
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#approach" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white text-sm font-semibold px-7 py-3.5 hover:bg-white/10 transition-colors">
              How We Think
            </a>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section id="approach" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 mb-4">What We Believe</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight">
              Growth is not random.
              <br />
              It&apos;s the result of systems.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-lg text-slate-600 leading-relaxed">
            <p>
              When a system is healthy, momentum compounds. When a system is unhealthy, leaks compound. Most organizations only see the symptoms &mdash; slowing recruiting, falling persistency, inconsistent production. We help leadership teams see the source.
            </p>
            <p>
              We call these breakdowns <span className="font-semibold text-slate-900">Distribution Leaks</span> &mdash; any place where momentum breaks down on the path from{" "}
              <span className="font-semibold text-slate-900">Attention&nbsp;&rarr;&nbsp;Trust&nbsp;&rarr;&nbsp;Activation&nbsp;&rarr;&nbsp;Revenue&nbsp;&rarr;&nbsp;Retention.</span>
            </p>
            <p>
              Recruiting people who never activate. Onboarding that creates confusion. Weak follow-up systems. Low trust positioning. Retention problems. Leadership gaps. Disconnected technology. Most organizations experience these problems &mdash; very few can clearly identify them.
            </p>
          </div>
        </div>
      </section>

      {/* The 8 Core Areas */}
      <section id="framework" className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 mb-4">The Diagnostic Framework</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight mb-6">
              Eight areas. One question behind each:
              <br />
              is momentum building or breaking?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our framework evaluates the health of a distribution system across the areas that drive &mdash; or quietly drain &mdash; growth.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden">
            {leakAreas.map(({ icon: Icon, title, question }) => (
              <div key={title} className="bg-slate-50 p-8 hover:bg-white transition-colors">
                <Icon className="w-6 h-6 text-emerald-600 mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diagnostic Process */}
      <section id="diagnostic" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 mb-4">How It Works</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight mb-6">
              We start with visibility &mdash; not solutions.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The Distribution Leak Diagnostic is a strategic assessment that identifies where momentum is breaking inside your distribution organization. The goal isn&apos;t information. The goal is clarity.
            </p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm font-semibold px-7 py-3.5 hover:bg-slate-700 transition-colors">
              Start the Diagnostic
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:col-span-7">
            <ol className="space-y-8">
              {[
                { title: "Identify your biggest leak", desc: "Pinpoint where momentum is breaking between attention, trust, activation, revenue, and retention." },
                { title: "Understand what it means", desc: "See how the leak shows up across recruiting, onboarding, sales, persistency, and leadership." },
                { title: "See why it matters financially", desc: "Translate the leak into its real cost &mdash; in production, retention, and growth." },
                { title: "Know what usually causes it", desc: "Understand the systemic patterns that create this leak across distribution organizations." },
                { title: "Know what to fix first", desc: "Walk away with a clear, sequenced view of what to address &mdash; before investing in a solution." },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-6">
                  <span className="flex-none w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-serif text-lg flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.desc }} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[#0B1220] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80 mb-4">What Makes Us Different</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight text-white">
              Better decisions come from better visibility.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {comparisons.map(([them, us]) => (
              <div key={us} className="bg-[#0B1220] p-8 lg:p-10">
                <p className="text-slate-400 text-base mb-3 flex items-start gap-3">
                  <Search className="w-5 h-5 flex-none mt-0.5 text-slate-500" strokeWidth={1.5} />
                  {them}
                </p>
                <p className="text-white text-xl font-serif flex items-start gap-3">
                  <Eye className="w-5 h-5 flex-none mt-1.5 text-emerald-300" strokeWidth={1.5} />
                  {us}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="who" className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 mb-4">Who We Serve</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight mb-6">
              Built for the people responsible for the whole system.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Our primary audience is IMO owners, agency owners, distribution leaders, and executive teams &mdash; people responsible for growth, production, recruiting, retention, and profitability.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are not focused on individual agents. We are focused on the organizations that support them.
            </p>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden">
              {["IMO Owners", "Agency Owners", "Distribution Leaders", "Executive Teams"].map((role) => (
                <div key={role} className="bg-slate-50 p-8 flex items-center justify-center text-center font-serif text-lg">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision / CTA */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-600 mb-4">Our Vision</p>
            <h2 className="text-3xl lg:text-5xl font-serif leading-tight mb-6">
              Building the intelligence layer for life insurance distribution.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Today, that begins with diagnostics, assessments, reports, calculators, and strategic advisory. Over time, it expands into benchmarking, operational dashboards, and industry-wide visibility tools &mdash; becoming the most trusted source of operational intelligence in life insurance distribution.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <a href="#diagnostic" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 text-white text-sm font-semibold px-8 py-4 hover:bg-slate-700 transition-colors w-full sm:w-auto">
              Take the Diagnostic
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <span className="font-semibold tracking-tight">Clientele Builders</span>
          <p className="text-sm text-slate-500">
            Distribution intelligence for life insurance IMOs and agencies.
          </p>
        </div>
      </footer>
    </div>
  );
}
