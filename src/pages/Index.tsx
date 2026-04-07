import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import "./homepage.css";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Demand Is Rising. Technology Is Shifting. The Buyer Is Clear. — Clientele Builders</title>
        <meta
          name="description"
          content="If the market is expanding, and operations are evolving, and the buyer is already identifiable — what determines who captures that demand? Clientele Builders."
        />
      </Helmet>
      <Header />

      {/* ── MASTHEAD ── */}
      <div className="hp-masthead">
        <div className="hp-mh-inner">
          <div className="hp-mh-pub">Clientele Builders</div>
          <div className="hp-mh-title">
            <span className="hp-mh-t1">Demand Is Rising.</span><br />
            <span className="hp-mh-t2">Technology Is Shifting.</span><br />
            <span className="hp-mh-t3">The Buyer Is Clear.</span>
          </div>
          <div className="hp-mh-meta">
            <div className="hp-mh-mi">Published <span>2026</span></div>
            <div className="hp-mh-mi"><span>clientelebuilders.com</span></div>
          </div>
        </div>
      </div>

      {/* ── PAGE ── */}
      <div className="hp-page">

        {/* ── SECTION 1: Demand ── */}
        <div className="hp-fact">Fact</div>

        <div className="hp-typo-fact-1">
          <span className="w1">Demand for life insurance </span>
          <span className="w2">and annuities is </span>
          <span className="w3">expected to </span>
          <span className="w4">increase.</span>
        </div>

        <p>
          If demand is already moving upward, what determines whether that growth
          is actually captured?
        </p>
        <p>
          Because if the market is expanding, then the opportunity is not
          theoretical. It already exists.
        </p>
        <p>The question is not whether people need life insurance.</p>
        <p>The question is:</p>

        <div className="hp-typo-capture">
          <span className="c1">What determines</span>
          <span className="c2">who actually</span>
          <span className="c3">captures</span>
          <span className="c4">that</span>
          <span className="c5">need?</span>
        </div>

        <hr />

        {/* ── SECTION 2: Technology ── */}
        <div className="hp-fact">Fact</div>

        <p>
          The operations of life insurance providers are being transformed by
          rapid technological adoption.
        </p>

        <p>
          If operations are evolving, what happens to organizations that continue
          to rely on traditional distribution methods?
        </p>
        <p>Because when operations change, the rules change with them.</p>

        <div className="hp-typo-changes">
          <span className="ch ch1">Efficiency changes.</span>
          <span className="ch ch2">Speed changes.</span>
          <span className="ch ch3">Execution changes.</span>
        </div>

        <div className="hp-typo-distributed">
          <span className="d-pre">
            And when those things change, the advantage does not stay
          </span>
          <div className="d-key">
            <span className="d-evenly">evenly</span>
            <span className="d-space" />
            <span className="d-d">d</span>
            <span className="d-i">i</span>
            <span className="d-s">s</span>
            <span className="d-t">t</span>
            <span className="d-r">r</span>
            <span className="d-i2">i</span>
            <span className="d-b">b</span>
            <span className="d-u">u</span>
            <span className="d-t2">t</span>
            <span className="d-e">e</span>
            <span className="d-d2">d.</span>
          </div>
        </div>

        <p>
          So what happens when one organization adapts to those changes—and
          another does not?
        </p>

        <hr />

        {/* ── SECTION 3: The Buyer ── */}
        <div className="hp-fact">Fact</div>

        <p>
          Older individuals represent the primary market for life insurance
          providers.
        </p>

        <p>
          If the primary customer is already defined, what determines whether
          that customer is effectively reached?
        </p>

        <div className="hp-typo-buyer">
          <span className="b-line b1">Because if the buyer is visible…</span>
          <span className="b-line b2">If their needs are known…</span>
          <span className="b-line b3">If their motivation is clear…</span>
        </div>

        <p>Then the problem is not identifying the market.</p>
        <p>The problem becomes:</p>

        <div className="hp-pull">
          <p>How does distribution connect to that market?</p>
        </div>

        <hr />

        {/* ── SECTION 4: Conditions ── */}
        <h2 className="hp-section-head">What Do These Conditions Point To?</h2>

        <div className="hp-typo-three-conditions">
          <div className="hp-tc-row">
            <span className="hp-tc-neg">absent</span>
            <span className="hp-tc-pos">Demand is not absent.</span>
          </div>
          <div className="hp-tc-row">
            <span className="hp-tc-neg">static</span>
            <span className="hp-tc-pos">Technology is not static.</span>
          </div>
          <div className="hp-tc-row">
            <span className="hp-tc-neg">unknown</span>
            <span className="hp-tc-pos">The customer is not unknown.</span>
          </div>
        </div>

        <hr />

        <p>So what is left?</p>

        <div className="hp-typo-if">
          <span className="if-line if1">If opportunity exists…</span>
          <span className="if-line if2">If systems are evolving…</span>
          <span className="if-line if3">If the buyer is already identifiable…</span>
        </div>

        <hr />

        {/* ── SECTION 5: The Real Question ── */}
        <h2 className="hp-section-head">Where Does the Outcome Actually Come From?</h2>

        <p>Is growth determined by:</p>

        <div className="hp-typo-questions">
          <span className="tq tq1">Increasing activity?</span>
          <span className="tq tq2">Expanding recruiting?</span>
          <span className="tq tq3">Generating more leads?</span>
        </div>

        <p>Or…</p>
        <p>Is it determined by how these conditions are <em>aligned</em>?</p>

        <hr />

        {/* ── SECTION 6: The Final Question ── */}
        <h2 className="hp-section-head">The Real Question</h2>

        <div className="hp-typo-final">
          <div className="hp-tf-not">
            <div className="hp-tf-not-tag">Not:</div>
            <div className="hp-tf-not-text">
              "How do we create more demand?"
            </div>
          </div>
          <div className="hp-tf-but">
            <div className="hp-tf-but-tag">But:</div>
            <div className="hp-tf-but-text">
              How do we align distribution with the demand that{" "}
              <em>already exists?</em>
            </div>
          </div>
        </div>
      </div>

      {/* ── REPORT FOOTER ── */}
      <div className="hp-report-footer">
        <span className="hp-footer-brand">Clientele Builders</span>
        <span>Intelligence Brief · 2026</span>
        <span>clientelebuilders.com</span>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
