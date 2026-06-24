import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  UserPlus,
  ClipboardCheck,
  Megaphone,
  Handshake,
  ShieldCheck,
  Scale,
  GraduationCap,
  Activity,
} from "lucide-react";
import "./home-leak.css";

const diagnoseCards = [
  { icon: UserPlus, title: "Recruiting", body: "Attracting and moving the right people forward." },
  { icon: ClipboardCheck, title: "Onboarding", body: "New agents know exactly what to do after joining." },
  { icon: Megaphone, title: "Marketing", body: "Building trust before the conversation begins." },
  { icon: Handshake, title: "Sales Process", body: "Turning attention into revenue, reliably." },
  { icon: ShieldCheck, title: "Persistency", body: "Protecting long-term profit." },
  { icon: Scale, title: "Compensation", body: "Incentives aligned with the outcomes you want." },
  { icon: GraduationCap, title: "Leadership", body: "Intentionally developing the next generation." },
  { icon: Activity, title: "Technology & Data", body: "Seeing what is working and what is not." },
];

const HomeLeak = () => {
  return (
    <>
      <Helmet>
        <title>Clientele Builders — Find the leaks in your distribution system</title>
        <meta
          name="description"
          content="Most life insurance organizations don't have a lead problem. They have recruiting, onboarding, activation, trust, sales, retention, or data leaks. See where your distribution system is leaking."
        />
      </Helmet>

      <div className="hp-leak">
        {/* NAV */}
        <header className="hp-nav">
          <div className="container hp-nav-inner">
            <Link to="/" className="hp-wordmark">Clientele Builders</Link>
            <nav className="nav-links" />
            <Link to="/scorecard" className="btn-gold nav-cta">Take the Assessment</Link>
          </div>
        </header>

        {/* HERO */}
        <section className="hero">
          <div className="hero-orb" aria-hidden="true" />
          <div className="hero-rule" aria-hidden="true" />
          <div className="container hero-inner">
            <span className="hero-eyebrow">Distribution Intelligence</span>
            <h1 className="hero-h1">
              Revenue leaks hide inside <span className="accent">distribution systems.</span>
            </h1>
            <p className="hero-p">
              Most life insurance organizations don't have a lead problem. They have recruiting, onboarding,
              activation, trust, sales, retention, or data leaks costing them revenue every month.
            </p>
            <p className="hero-italic">We show you where to look before it costs you.</p>
            <Link to="/scorecard" className="btn-gold">
              Take the Distribution Leak Assessment <span aria-hidden="true">→</span>
            </Link>
            <p className="hero-meta">Takes about 3 minutes</p>
          </div>
        </section>

        {/* WHAT WE DIAGNOSE */}
        <section id="how" className="section section-light">
          <div className="container">
            <div style={{ maxWidth: 640, marginBottom: 48 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>What we diagnose</div>
              <h2 className="h2">Eight systems. One distribution engine.</h2>
              <p className="lead">The assessment scores each one, then shows you where the biggest leak is.</p>
            </div>
            <div className="diag-grid">
              {diagnoseCards.map(({ icon: Icon, title, body }) => (
                <a key={title} className="card" href="#assess">
                  <span className="icon" style={{ marginBottom: 16, display: "block" }}>
                    <Icon size={22} strokeWidth={2} />
                  </span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <section className="section section-light section-center">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18, justifyContent: "center" }}>
              Why it matters
            </div>
            <h2 className="h2" style={{ maxWidth: 640, margin: "0 auto 40px" }}>
              Small fixes to a leaking system compound fast
            </h2>
            <div style={{ maxWidth: 560, margin: "0 auto" }}>
              <div className="why-q">If your activation rate improves by 10%…</div>
              <div className="why-q">If persistency improves by 5%…</div>
              <div className="why-q">If recruiting conversion improves by 15%…</div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "var(--tracking-tight)",
                color: "var(--text-primary)",
                margin: "32px 0 16px",
              }}
            >
              What happens?
            </p>
            <span className="badge">Revenue Leak Calculator — coming soon</span>
          </div>
        </section>

        {/* THE DATA */}
        <section className="section section-dark">
          <div className="container">
            <div className="eyebrow" style={{ marginBottom: 18 }}>The data</div>
            <h2 className="h2" style={{ maxWidth: 560 }}>Half the market runs through people like you</h2>
            <p
              className="lead"
              style={{ color: "var(--text-on-dark-muted)", maxWidth: 480, margin: "0 0 36px" }}
            >
              This isn't a guess. It's what the data says about who actually sells life insurance in this country.
            </p>
            <div style={{ maxWidth: 600 }}>
              <div className="fig">
                <div className="fig-kicker">Where the money moves</div>
                <div className="fig-title">One channel sells more than all the others combined</div>
                <div className="fig-bigstat">52%</div>
                <div className="fig-stat-label">
                  Of life insurance distribution runs through an independent agent
                </div>
                <p className="fig-supporting">
                  Your distribution isn't a side function — for most of the market, it's the entire sale.
                </p>
                <div style={{ marginTop: 20 }}>
                  {[
                    { label: "Independent agents", value: 52, accent: true },
                    { label: "Captive / affiliated agents", value: 37 },
                    { label: "Direct response", value: 6 },
                    { label: "Other channels", value: 5 },
                  ].map((row) => (
                    <div key={row.label} className="fig-row">
                      <div className="fig-row-label">
                        <span style={row.accent ? { color: "var(--text-primary)", fontWeight: 600 } : undefined}>
                          {row.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontWeight: 600,
                            color: row.accent ? "var(--gold)" : "var(--text-muted)",
                          }}
                        >
                          {row.value}%
                        </span>
                      </div>
                      <div className="fig-bar-track">
                        <div
                          className="fig-bar-fill"
                          style={{
                            width: `${row.value}%`,
                            background: row.accent ? "var(--gold)" : "var(--navy)",
                            opacity: row.accent ? 1 : 0.55,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", margin: "14px 0 0" }}>
                  Approximate share of U.S. life insurance distribution, 2023.
                </p>
                <div className="fig-source">Statista; LIMRA; Insurance Information Institute, 2019–2023</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="assess" className="section final-cta">
          <div className="container">
            <h2 className="final-h2">See where your system is leaking.</h2>
            <p className="final-p">Takes about 3 minutes for a prioritized diagnosis.</p>
            <Link to="/scorecard" className="btn-gold">Take the Assessment</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hp-footer">
          <div className="container hp-footer-inner">
            <div style={{ paddingBottom: 56 }}>
              <div className="hp-footer-brand">Clientele Builders</div>
              <p className="hp-footer-tag">
                The intelligence layer for life insurance distribution. We help you see where momentum is
                breaking — before you invest in the wrong solution.
              </p>
            </div>
            <div className="hp-footer-bottom">
              <span>© 2026 Clientele Builders</span>
              <span>Not a marketing agency. We start with diagnosis.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomeLeak;
