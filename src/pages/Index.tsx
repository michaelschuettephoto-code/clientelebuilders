import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PostImage } from "@/components/ui/post-image";

const Index = () => {
  const { data: recentPosts } = useQuery({
    queryKey: ["recent-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("is_published", true)
        .order("publish_date", { ascending: false })
        .limit(4);
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="container max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
              Elite Systems for Insurance Professionals
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Premium thought leadership on CRM, automation, mindset, and creative workflow. 
              Built for IMOs, agents, and industry leaders who demand more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  Explore Newsroom
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/newsletter">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border hover:bg-card">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Stories */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold">Latest Stories</h2>
            <Link 
              to="/blog" 
              className="text-primary hover:underline flex items-center gap-2"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          {recentPosts && recentPosts.length > 0 ? (
            <div id="cards" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/story/${post.slug}`}
                  className="story-card group"
                >
                  <div className="mb-4">
                    <PostImage 
                      src={post.cover_image_url}
                      alt={post.title}
                      variant="card"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="story-meta text-sm text-muted-foreground mb-2">
                    {post.publish_date && new Date(post.publish_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric"
                    })}
                    {post.reading_time && ` · ${post.reading_time} min read`}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  {post.dek && (
                    <p className="text-muted-foreground leading-relaxed">
                      {post.dek}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No stories published yet. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="container max-w-3xl mx-auto px-6 py-16">
          <NewsletterSignup />
        </section>

        {/* Social Proof / Trust Section */}
        <section className="container max-w-7xl mx-auto px-6 py-16 border-t border-border">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Trusted by Leading Insurance Professionals
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of IMOs, agents, and industry leaders who rely on Clientele Builder 
              for cutting-edge systems, automation strategies, and creative workflows.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
