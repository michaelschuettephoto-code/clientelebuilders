import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight, Download, BookOpen, ClipboardCheck } from "lucide-react";
import sampleAutomationImage from "@/assets/sample-automation.jpg";
import sampleCrmSystemsImage from "@/assets/sample-crm-systems.jpg";
import sampleMindsetImage from "@/assets/sample-mindset.jpg";

const SCORECARD_URL = "https://start.clientelebuilders.com";

const CATEGORIES = [
  { id: "all", label: "All Intelligence" },
  { id: "distribution-systems", label: "Distribution Systems" },
  { id: "industry-intelligence", label: "Industry Intelligence" },
  { id: "bottlenecks", label: "Bottlenecks" },
  { id: "kpis-metrics", label: "KPIs & Metrics" },
  { id: "case-studies", label: "Case Studies" },
];

const FRAMEWORKS = [
  {
    title: "8-System Model (IDOS)",
    description:
      "The operating system behind every scalable insurance distribution organization.",
  },
  {
    title: "Recruiting Pipeline Blueprint",
    description:
      "A repeatable framework for sourcing, screening, and activating quality agents.",
  },
  {
    title: "Onboarding Framework",
    description:
      "Day 1 through Day 90 — structured milestones that turn recruits into producers.",
  },
];

const LOCAL_IMAGE_MAP: Record<string, string> = {
  "/src/assets/sample-automation.jpg": sampleAutomationImage,
  "/src/assets/sample-crm-systems.jpg": sampleCrmSystemsImage,
  "/src/assets/sample-mindset.jpg": sampleMindsetImage,
};

const resolveImageSrc = (src: string | null | undefined, fallback: string) => {
  if (!src) return fallback;
  return LOCAL_IMAGE_MAP[src] || src;
};

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const revealClasses = (visible: boolean, delay = 0) =>
  `transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
    visible
      ? "opacity-100 translate-y-0 blur-0"
      : "opacity-0 translate-y-5 blur-[3px]"
  }` + (delay ? ` delay-[${delay}ms]` : "");

const Intelligence = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["intelligence-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select(`*, post_tags(tags(name, slug))`)
        .eq("is_published", true)
        .order("publish_date", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const featuredPost = posts.find((p) => p.is_featured) || posts[0];
  const gridPosts = posts.filter((p) => p.id !== featuredPost?.id);
  const filteredPosts =
    activeCategory === "all"
      ? gridPosts
      : gridPosts.filter((p) =>
          p.post_tags?.some((pt: any) => pt.tags?.slug === activeCategory)
        );

  /* reveal refs */
  const heroReveal = useReveal();
  const featuredMobileReveal = useReveal();
  const gridReveal = useReveal();
  const ctaReveal = useReveal();
  const reportReveal = useReveal();
  const frameworkReveal = useReveal();
  const finalReveal = useReveal();

  return (
    <div className="min-h-screen bg-primary">
      <Helmet>
        <title>Insurance Distribution Intelligence — Clientele Builders</title>
        <meta
          name="description"
          content="Strategic insights on recruiting, onboarding, and scaling insurance organizations."
        />
      </Helmet>
      <Header />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--gold)/0.06),transparent)]" />
        <div
          ref={heroReveal.ref}
          className="container max-w-7xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28"
        >
          <div className="grid md:grid-cols-[1fr_0.85fr] gap-16 lg:gap-24 items-start">
            {/* Left — copy */}
            <div className={revealClasses(heroReveal.visible)}>
              <div className="w-10 h-[2px] bg-accent mb-8" />
              <h1
                className="font-serif text-[clamp(2.25rem,5vw,3.75rem)] font-black text-white leading-[1.05] tracking-tight mb-6"
                style={{ textWrap: "balance" }}
              >
                Insurance Distribution Intelligence
              </h1>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-12 max-w-lg">
                Strategic insights on recruiting, onboarding, and scaling
                insurance organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SCORECARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-7 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Take the Distribution Scorecard
                </a>
                <Link
                  to="/reports"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-white/70 font-sans text-[11px] font-medium tracking-[0.08em] uppercase px-7 py-4 hover:border-white/30 hover:text-white transition-colors active:scale-[0.97]"
                >
                  <Download className="h-4 w-4" />
                  Infrastructure Report
                </Link>
              </div>
            </div>

            {/* Right — featured preview */}
            {featuredPost && (
              <div
                className={`hidden md:block ${revealClasses(heroReveal.visible)}`}
                style={{ transitionDelay: "120ms" }}
              >
                <Link to={`/story/${featuredPost.slug}`} className="group block">
                  <div className="border border-white/[0.08] overflow-hidden">
                    <img
                      src={resolveImageSrc(
                        featuredPost.hero_image_url || featuredPost.cover_image_url,
                        "/placeholders/hero-placeholder.jpg"
                      )}
                      alt={featuredPost.title}
                      className="w-full h-52 object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      fetchPriority="high"
                      decoding="async"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/placeholders/hero-placeholder.jpg"; }}
                    />
                  </div>
                  <div className="mt-5">
                    <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase">
                      Featured Analysis
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-2 leading-snug group-hover:text-gold-light transition-colors">
                      {featuredPost.title}
                    </h3>
                    {featuredPost.dek && (
                      <p className="text-white/40 text-sm mt-2 leading-relaxed line-clamp-2">
                        {featuredPost.dek}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-accent text-xs font-medium mt-4 group-hover:gap-2.5 transition-all">
                      Read Analysis <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURED (mobile) ═══ */}
      {featuredPost && (
        <section
          ref={featuredMobileReveal.ref}
          className="md:hidden border-b border-white/[0.06]"
        >
          <div
            className={`container max-w-7xl mx-auto px-6 py-14 ${revealClasses(featuredMobileReveal.visible)}`}
          >
            <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase">
              Featured Analysis
            </span>
            <Link to={`/story/${featuredPost.slug}`} className="group block mt-4">
              <img
                src={resolveImageSrc(
                  featuredPost.hero_image_url || featuredPost.cover_image_url,
                  "/placeholders/hero-placeholder.jpg"
                )}
                alt={featuredPost.title}
                className="w-full h-56 object-cover mb-5"
                fetchPriority="high"
                decoding="async"
                onError={(e) => { (e.target as HTMLImageElement).src = "/placeholders/hero-placeholder.jpg"; }}
              />
              <h2 className="font-serif text-2xl font-bold text-white leading-tight group-hover:text-gold-light transition-colors">
                {featuredPost.title}
              </h2>
              {featuredPost.dek && (
                <p className="text-white/40 mt-2 leading-relaxed">
                  {featuredPost.dek}
                </p>
              )}
              <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-4">
                Read Analysis <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ═══ 3. CATEGORY FILTERS ═══ */}
      <div className="sticky top-[73px] z-40 border-b border-white/[0.06] bg-primary/95 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-[10px] tracking-[0.1em] uppercase whitespace-nowrap px-5 py-2.5 transition-colors active:scale-[0.97] ${
                  activeCategory === cat.id
                    ? "bg-accent text-primary font-semibold"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ 4. ARTICLE GRID ═══ */}
      <section ref={gridReveal.ref} className="container max-w-7xl mx-auto px-6 py-20">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-white/[0.04] h-44 mb-5" />
                <div className="bg-white/[0.06] h-3 w-1/3 mb-3" />
                <div className="bg-white/[0.06] h-5 w-full mb-2" />
                <div className="bg-white/[0.04] h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-white/50 text-lg">No articles in this category yet.</p>
            <p className="text-white/30 text-sm mt-2">
              Check back soon — new intelligence is published regularly.
            </p>
          </div>
        ) : (
          <div className={revealClasses(gridReveal.visible)}>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
              {filteredPosts.slice(0, 6).map((post, i) => (
                <ArticleCard key={post.id} post={post} index={i} />
              ))}
            </div>

            {/* ═══ 5. INLINE CTA ═══ */}
            {filteredPosts.length > 4 && <InlineCTA ref={ctaReveal.ref} visible={ctaReveal.visible} />}

            {filteredPosts.length > 6 && (
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 mt-14">
                {filteredPosts.slice(6).map((post, i) => (
                  <ArticleCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ═══ 6. REPORT ═══ */}
      <section
        ref={reportReveal.ref}
        className="border-t border-white/[0.06]"
      >
        <div
          className={`container max-w-7xl mx-auto px-6 py-24 ${revealClasses(reportReveal.visible)}`}
        >
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="w-10 h-[2px] bg-accent mb-6" />
              <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">
                Latest Report
              </span>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
                style={{ textWrap: "balance" }}
              >
                The Distribution Infrastructure Report
              </h2>
              <p className="text-white/45 leading-relaxed mb-10 max-w-md">
                A comprehensive analysis of what separates scalable insurance
                organizations from the ones that stall. Recruiting pipelines,
                onboarding systems, and production metrics — examined.
              </p>
              <a
                href={SCORECARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-7 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"
              >
                <Download className="h-4 w-4" />
                Download Report
              </a>
            </div>
            {/* Report mockup */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/[0.04] blur-2xl rounded-full" />
                <div className="relative w-52 h-72 bg-ink border border-white/[0.08] flex flex-col items-center justify-center p-8 shadow-2xl">
                  <div className="w-8 h-[1px] bg-accent mb-6" />
                  <span className="font-mono text-[7px] tracking-[0.3em] text-accent uppercase mb-5 text-center">
                    Clientele Builders
                  </span>
                  <h4 className="font-serif text-sm font-bold text-white leading-tight text-center mb-4">
                    Distribution Infrastructure Report
                  </h4>
                  <div className="w-10 h-[1px] bg-white/10 mb-4" />
                  <span className="font-mono text-[7px] text-white/25 uppercase tracking-[0.2em]">
                    2026 Edition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. FRAMEWORKS ═══ */}
      <section
        ref={frameworkReveal.ref}
        className="border-t border-white/[0.06]"
      >
        <div
          className={`container max-w-7xl mx-auto px-6 py-24 ${revealClasses(frameworkReveal.visible)}`}
        >
          <div className="w-10 h-[2px] bg-accent mb-6" />
          <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">
            Methodology
          </span>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-14"
            style={{ textWrap: "balance" }}
          >
            Core Frameworks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FRAMEWORKS.map((fw, i) => (
              <div
                key={i}
                className="group border border-white/[0.06] p-8 hover:border-accent/30 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/25 uppercase">
                  Framework {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-4 mb-3 leading-tight">
                  {fw.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/frameworks"
              className="inline-flex items-center gap-2 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-accent hover:text-gold-light transition-colors group"
            >
              Explore Frameworks{" "}
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 8. FINAL CTA ═══ */}
      <section
        ref={finalReveal.ref}
        className="relative border-t border-white/[0.06]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--gold)/0.04),transparent)]" />
        <div
          className={`container max-w-3xl mx-auto px-6 py-24 md:py-32 text-center relative ${revealClasses(finalReveal.visible)}`}
        >
          <div className="w-10 h-[2px] bg-accent mx-auto mb-8" />
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight mb-6"
            style={{ textWrap: "balance" }}
          >
            Build a Predictable Distribution System
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
            We help insurance organizations recruit, train, and scale producing
            agents — with systems, not guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-8 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"
            >
              <ClipboardCheck className="h-4 w-4" />
              Take Scorecard
            </a>
            <Link
              to="/consulting"
              className="inline-flex items-center justify-center gap-2.5 border border-white/15 text-white/70 font-sans text-[11px] font-medium tracking-[0.08em] uppercase px-8 py-4 hover:border-white/30 hover:text-white transition-colors active:scale-[0.97]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

/* ── Inline CTA ── */
import { forwardRef } from "react";

const InlineCTA = forwardRef<HTMLDivElement, { visible: boolean }>(
  ({ visible }, ref) => (
    <div
      ref={ref}
      className={`my-20 border border-white/[0.06] p-10 md:p-16 relative overflow-hidden ${revealClasses(visible)}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_50%,hsl(var(--gold)/0.05),transparent)]" />
      <div className="relative max-w-xl">
        <div className="w-10 h-[2px] bg-accent mb-6" />
        <span className="font-mono text-[9px] tracking-[0.22em] text-accent uppercase block mb-3">
          Distribution Diagnostic
        </span>
        <h3
          className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-4"
          style={{ textWrap: "balance" }}
        >
          Diagnose Your Distribution System
        </h3>
        <p className="text-white/45 leading-relaxed mb-10">
          See where your recruiting, onboarding, and production systems are
          breaking — and what to fix first.
        </p>
        <a
          href={SCORECARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-accent text-primary font-sans text-[11px] font-semibold tracking-[0.08em] uppercase px-7 py-4 hover:bg-gold-light transition-colors active:scale-[0.97]"
        >
          <ClipboardCheck className="h-4 w-4" />
          Take the Scorecard
        </a>
      </div>
    </div>
  )
);
const CARD_PLACEHOLDERS = [
  "/placeholders/card-1.jpg",
  "/placeholders/card-2.jpg",
  "/placeholders/card-3.jpg",
  "/placeholders/card-4.jpg",
  "/placeholders/card-5.jpg",
  "/placeholders/card-6.jpg",
];

/* ── Article Card ── */
const ArticleCard = ({ post, index }: { post: any; index: number }) => {
  const firstTag = post.post_tags?.[0]?.tags;
  return (
    <Link
      to={`/story/${post.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="overflow-hidden mb-5 border border-white/[0.06]">
        <img
          src={post.hero_image_url || post.cover_image_url || CARD_PLACEHOLDERS[index % CARD_PLACEHOLDERS.length]}
          alt={post.title}
          className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-700"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = CARD_PLACEHOLDERS[index % CARD_PLACEHOLDERS.length]; }}
        />
      </div>
      {firstTag && (
        <span className="font-mono text-[9px] tracking-[0.18em] text-accent uppercase">
          {firstTag.name}
        </span>
      )}
      <h3 className="font-serif text-lg font-bold text-white mt-2 leading-snug group-hover:text-gold-light transition-colors">
        {post.title}
      </h3>
      {post.dek && (
        <p className="text-white/35 text-sm mt-2 leading-relaxed line-clamp-2">
          {post.dek}
        </p>
      )}
    </Link>
  );
};

export default Intelligence;
