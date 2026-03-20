import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { ArrowRight, Download, Layers, BookOpen, ClipboardCheck } from "lucide-react";

const SCORECARD_URL = "https://start.clientelebuilders.com";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "distribution-systems", label: "Distribution Systems" },
  { id: "industry-intelligence", label: "Industry Intelligence" },
  { id: "bottlenecks", label: "Bottlenecks" },
  { id: "kpis-metrics", label: "KPIs & Metrics" },
  { id: "case-studies", label: "Case Studies" },
];

const FRAMEWORKS = [
  {
    title: "8-System Model (IDOS)",
    description: "The operating system behind every scalable insurance distribution organization.",
  },
  {
    title: "Recruiting Pipeline Blueprint",
    description: "A repeatable framework for sourcing, screening, and activating quality agents.",
  },
  {
    title: "Onboarding Framework",
    description: "Day 1 through Day 90 — structured milestones that turn recruits into producers.",
  },
];

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Insurance Distribution Intelligence — Clientele Builders</title>
        <meta
          name="description"
          content="Strategic insights on recruiting, onboarding, and scaling insurance organizations."
        />
      </Helmet>
      <Header />

      {/* ═══ 1. HERO ═══ */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[hsl(var(--sky)/0.06)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[9px] tracking-[0.32em] text-[hsl(var(--gold-light))] uppercase block mb-4">
                Clientele Builders
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-black text-primary-foreground leading-[1.06] tracking-tight mb-6">
                Insurance Distribution Intelligence
              </h1>
              <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-10 max-w-lg">
                Strategic insights on recruiting, onboarding, and scaling
                insurance organizations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={SCORECARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Take the Distribution Scorecard
                </a>
                <Link
                  to="/reports"
                  className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:bg-primary-foreground/5 transition-colors active:scale-[0.97]"
                >
                  <Download className="h-4 w-4" />
                  Download Infrastructure Report
                </Link>
              </div>
            </div>

            {/* Featured article preview in hero */}
            {featuredPost && (
              <div className="hidden md:block">
                <Link to={`/story/${featuredPost.slug}`} className="group block">
                  <div className="border border-primary-foreground/10 p-1">
                    {featuredPost.hero_image_url || featuredPost.cover_image_url ? (
                      <img
                        src={featuredPost.hero_image_url || featuredPost.cover_image_url || ""}
                        alt={featuredPost.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-48 bg-[hsl(var(--navy))] flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-primary-foreground/20" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase">
                      Featured Analysis
                    </span>
                    <h3 className="font-serif text-xl font-bold text-primary-foreground mt-2 leading-tight group-hover:text-[hsl(var(--gold-light))] transition-colors">
                      {featuredPost.title}
                    </h3>
                    {featuredPost.dek && (
                      <p className="text-primary-foreground/45 text-sm mt-2 leading-relaxed line-clamp-2">
                        {featuredPost.dek}
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURED INSIGHT (mobile fallback) ═══ */}
      {featuredPost && (
        <section className="md:hidden border-b border-border">
          <div className="container max-w-7xl mx-auto px-6 py-12">
            <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase">
              Featured Analysis
            </span>
            <Link to={`/story/${featuredPost.slug}`} className="group block mt-3">
              {(featuredPost.hero_image_url || featuredPost.cover_image_url) && (
                <img
                  src={featuredPost.hero_image_url || featuredPost.cover_image_url || ""}
                  alt={featuredPost.title}
                  className="w-full h-56 object-cover mb-4"
                  loading="lazy"
                />
              )}
              <h2 className="font-serif text-2xl font-bold leading-tight group-hover:text-accent transition-colors">
                {featuredPost.title}
              </h2>
              {featuredPost.dek && (
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {featuredPost.dek}
                </p>
              )}
              <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-3">
                Read Analysis <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ═══ 3. CATEGORY FILTERS ═══ */}
      <section className="border-b border-border sticky top-[73px] z-40 bg-background/95 backdrop-blur">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-4 -mx-6 px-6 scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-mono text-[10px] tracking-[0.12em] uppercase whitespace-nowrap px-4 py-2.5 transition-colors active:scale-[0.97] ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. ARTICLE GRID ═══ */}
      <section className="container max-w-7xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted h-44 mb-4" />
                <div className="bg-muted h-4 w-1/3 mb-3" />
                <div className="bg-muted h-5 w-full mb-2" />
                <div className="bg-muted h-4 w-2/3" />
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No articles in this category yet.</p>
            <p className="text-muted-foreground/60 text-sm mt-2">
              Check back soon — new intelligence is published regularly.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
              {filteredPosts.slice(0, 6).map((post) => (
                <ArticleCard key={post.id} post={post} />
              ))}
            </div>

            {/* ═══ 5. INLINE CTA ═══ */}
            {filteredPosts.length > 4 && (
              <div className="my-16 bg-primary p-10 md:p-14 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
                <div className="max-w-xl">
                  <span className="font-mono text-[9px] tracking-[0.28em] text-[hsl(var(--gold-light))] uppercase block mb-3">
                    Distribution Diagnostic
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground leading-tight mb-4">
                    Diagnose Your Distribution System
                  </h3>
                  <p className="text-primary-foreground/55 leading-relaxed mb-8">
                    See where your recruiting, onboarding, and production systems
                    are breaking — and what to fix first.
                  </p>
                  <a
                    href={SCORECARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    <ClipboardCheck className="h-4 w-4" />
                    Take the Scorecard
                  </a>
                </div>
              </div>
            )}

            {/* Remaining posts */}
            {filteredPosts.length > 6 && (
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mt-12">
                {filteredPosts.slice(6).map((post) => (
                  <ArticleCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* ═══ 6. REPORT SECTION ═══ */}
      <section className="border-t border-border">
        <div className="container max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase block mb-3">
                Latest Intelligence Report
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-6">
                The Distribution Infrastructure Report
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                A comprehensive analysis of what separates scalable insurance
                organizations from the ones that stall. Recruiting pipelines,
                onboarding systems, and production metrics — examined.
              </p>
              <a
                href={SCORECARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                <Download className="h-4 w-4" />
                Download Report
              </a>
            </div>
            <div className="bg-primary p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-48 h-64 bg-[hsl(var(--ink))] border border-primary-foreground/10 mx-auto flex flex-col items-center justify-center p-6">
                  <span className="font-mono text-[7px] tracking-[0.3em] text-[hsl(var(--gold-light))] uppercase mb-4">
                    Clientele Builders
                  </span>
                  <h4 className="font-serif text-sm font-bold text-primary-foreground leading-tight text-center mb-3">
                    Distribution Infrastructure Report
                  </h4>
                  <div className="w-8 h-[2px] bg-accent mb-3" />
                  <span className="font-mono text-[7px] text-primary-foreground/30 uppercase tracking-wider">
                    2026 Edition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. FRAMEWORKS ═══ */}
      <section className="border-t border-border bg-[hsl(var(--fog))]">
        <div className="container max-w-7xl mx-auto px-6 py-20">
          <span className="font-mono text-[9px] tracking-[0.28em] text-accent uppercase block mb-3">
            Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-12">
            Core Frameworks
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FRAMEWORKS.map((fw, i) => (
              <div
                key={i}
                className="bg-card border border-border p-8 relative group hover:border-accent/40 transition-colors"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-mono text-[9px] tracking-[0.18em] text-muted-foreground uppercase">
                  Framework {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg font-bold mt-3 mb-3 leading-tight">
                  {fw.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/frameworks"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-accent hover:text-foreground transition-colors"
            >
              Explore Frameworks <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 8. FINAL CTA ═══ */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-[hsl(var(--gold-light))] to-accent" />
        <div className="container max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Build a Predictable Distribution System
          </h2>
          <p className="text-primary-foreground/55 text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto">
            We help insurance organizations recruit, train, and scale producing
            agents — with systems, not guesswork.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SCORECARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent text-primary font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              <ClipboardCheck className="h-4 w-4" />
              Take Scorecard
            </a>
            <Link
              to="/consulting"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground font-mono text-[10px] tracking-[0.15em] uppercase px-7 py-4 font-medium hover:bg-primary-foreground/5 transition-colors active:scale-[0.97]"
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

/* ── Article Card Component ── */
const ArticleCard = ({ post }: { post: any }) => {
  const firstTag = post.post_tags?.[0]?.tags;
  return (
    <Link to={`/story/${post.slug}`} className="group block">
      {(post.hero_image_url || post.cover_image_url) && (
        <div className="overflow-hidden mb-4">
          <img
            src={post.hero_image_url || post.cover_image_url}
            alt={post.title}
            className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}
      {!post.hero_image_url && !post.cover_image_url && (
        <div className="bg-muted h-44 mb-4 flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-muted-foreground/30" />
        </div>
      )}
      {firstTag && (
        <span className="font-mono text-[8px] tracking-[0.18em] text-accent uppercase">
          {firstTag.name}
        </span>
      )}
      <h3 className="font-serif text-lg font-bold mt-1.5 leading-snug group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      {post.dek && (
        <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-2">
          {post.dek}
        </p>
      )}
    </Link>
  );
};

export default Intelligence;
