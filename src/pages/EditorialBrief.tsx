import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import "./homepage-editorial.css";

const EditorialBrief = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Demand, Technology, Buyer — Clientele Builders</title>
        <meta name="description" content="An intelligence brief on the forces reshaping insurance distribution: rising demand, shifting technology, and a clearer buyer." />
        <link rel="canonical" href="https://www.clientelebuilders.com/intelligence/editorial-brief" />
      </Helmet>
      <Header />

      <div className="hp-editorial bg-background">
        <div className="ed-masthead">
          <div className="mh-inner">
            <div className="mh-pub">Clientele Builders</div>
            <h1 className="mh-title">
              <span className="mh-t1">Demand Is Rising.</span>
              <span className="mh-t2">Technology Is Shifting.</span>
              <span className="mh-t3">The Buyer Is Clear.</span>
            </h1>
            <div className="mh-meta">
              <div className="mh-mi">Published <span>2026</span></div>
              <div className="mh-mi"><span>clientelebuilders.com</span></div>
            </div>
          </div>
        </div>

        <div className="ed-page">
          {/* Fact 1: Demand */}
          <div className="fact">Fact</div>
          <div className="typo-fact-1">
            <span className="body-text">Demand for life insurance and annuities is expected to </span>
            <span className="climax">increase.</span>
          </div>
          <p>If demand is already moving upward, what determines whether that growth is actually captured?</p>
          <p>Because if the market is expanding, then the opportunity is not theoretical. It already exists.</p>
          <p>The question is not whether people need life insurance.</p>
          <p>The question is:</p>
          <div className="typo-capture">
            <span className="c-line c1">What determines</span>
            <span className="c-line c2">who actually</span>
            <span className="c-line c3">captures</span>
            <span className="c-line c4">that</span>
            <span className="c5">need?</span>
          </div>

          <hr />

          {/* Fact 2: Technology */}
          <div className="fact">Fact</div>
          <p>The operations of life insurance providers are being transformed by rapid technological adoption.</p>
          <p>If operations are evolving, what happens to organizations that continue to rely on traditional distribution methods?</p>
          <p>Because when operations change, the rules change with them.</p>
          <div className="typo-changes">
            <span className="ch ch1">Efficiency changes.</span>
            <span className="ch ch2">Speed changes.</span>
            <span className="ch ch3">Execution changes.</span>
          </div>
          <div className="typo-distributed">
            <span className="d-pre">And when those things change, the advantage does not stay</span>
            <svg viewBox="0 0 600 28" style={{ width: '100%', height: 28 }} aria-label="evenly distributed">
              {'evenly distributed.'.split('').map((char, i) => (
                <text key={i} x={i * (600 / 19)} y="22" fontFamily="'DM Mono', monospace" fontSize="14" fill="hsl(37, 66%, 47%)" fontWeight="500">{char}</text>
              ))}
            </svg>
          </div>
          <p>So what happens when one organization adapts to those changes—and another does not?</p>

          <hr />

          {/* Fact 3: Buyer */}
          <div className="fact">Fact</div>
          <p>Older individuals represent the primary market for life insurance providers.</p>
          <p>If the primary customer is already defined, what determines whether that customer is effectively reached?</p>
          <div className="typo-buyer">
            <span className="b-line b1">Because if the buyer is visible…</span>
            <span className="b-line b2">If their needs are known…</span>
            <span className="b-line b3">If their motivation is clear…</span>
          </div>
          <p>Then the problem is not identifying the market.</p>
          <p>The problem becomes:</p>
          <div className="pull">
            <p>How does distribution connect to that market?</p>
          </div>

          <hr />

          {/* Synthesis */}
          <h2 className="section-head">What Do These Conditions Point To?</h2>
          <div className="typo-three-conditions">
            <div className="tc-row">
              <span className="tc-neg">absent</span>
              <span className="tc-pos">Demand is not absent.</span>
            </div>
            <div className="tc-row">
              <span className="tc-neg">static</span>
              <span className="tc-pos">Technology is not static.</span>
            </div>
            <div className="tc-row">
              <span className="tc-neg">unknown</span>
              <span className="tc-pos">The customer is not unknown.</span>
            </div>
          </div>

          <hr />

          <p>So what is left?</p>
          <div className="typo-if">
            <span className="if-line if1">If opportunity exists…</span>
            <span className="if-line if2">If systems are evolving…</span>
            <span className="if-line if3">If the buyer is already identifiable…</span>
          </div>

          <hr />

          <h2 className="section-head">Where Does the Outcome Actually Come From?</h2>
          <p>Is growth determined by:</p>
          <div className="typo-questions">
            <span className="tq tq1">Increasing activity?</span>
            <span className="tq tq2">Expanding recruiting?</span>
            <span className="tq tq3">Generating more leads?</span>
          </div>
          <p>Or…</p>
          <p>Is it determined by how these conditions are <em>aligned</em>?</p>

          <hr />

          {/* The Real Question */}
          <h2 className="section-head">The Real Question</h2>
          <div className="typo-final">
            <div className="tf-not">
              <div className="tf-not-tag">Not:</div>
              <div className="tf-not-text">"How do we create more demand?"</div>
            </div>
            <div className="tf-but">
              <div className="tf-but-tag">But:</div>
              <div className="tf-but-text">How do we align distribution with the demand that <em>already exists?</em></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditorialBrief;
