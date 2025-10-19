import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const { data: posts } = useQuery({
    queryKey: ["posts", searchQuery, selectedTag],
    queryFn: async () => {
      let query = supabase
        .from("posts")
        .select(`
          *,
          post_tags(tag_id, tags(name, slug))
        `)
        .eq("is_published", true)
        .order("publish_date", { ascending: false });

      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,dek.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;
      if (error) throw error;

      // Filter by tag if selected
      if (selectedTag) {
        return data?.filter(post => 
          post.post_tags?.some((pt: any) => pt.tags?.slug === selectedTag)
        );
      }

      return data;
    },
  });

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tags")
        .select("*")
        .order("name");
      if (error) throw error;
      return data;
    },
  });

  const featuredPost = posts?.find(p => p.is_featured);
  const regularPosts = posts?.filter(p => !p.is_featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6">Newsroom</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            The latest insights, systems, and strategies for insurance professionals.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search stories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-card border-border"
            />
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {tags.map(tag => (
                <Badge
                  key={tag.id}
                  variant={selectedTag === tag.slug ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setSelectedTag(tag.slug)}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Featured Story */}
        {featuredPost && (
          <Link 
            to={`/story/${featuredPost.slug}`}
            className="block mb-16 group"
          >
            {featuredPost.hero_image_url && (
              <div className="aspect-[21/9] overflow-hidden rounded-lg mb-6">
                <img 
                  src={featuredPost.hero_image_url}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="max-w-4xl">
              <div className="text-sm text-muted-foreground mb-3">
                Featured Story
                {featuredPost.publish_date && ` · ${new Date(featuredPost.publish_date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}`}
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {featuredPost.title}
              </h2>
              {featuredPost.dek && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {featuredPost.dek}
                </p>
              )}
            </div>
          </Link>
        )}

        {/* Stories Grid */}
        {regularPosts && regularPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map(post => (
              <Link
                key={post.id}
                to={`/story/${post.slug}`}
                className="story-card group"
              >
                {post.cover_image_url && (
                  <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.cover_image_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="story-meta text-sm text-muted-foreground mb-2">
                  {post.publish_date && new Date(post.publish_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                  {post.reading_time && ` · ${post.reading_time} min read`}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.dek && (
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.dek}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p>No stories found matching your criteria.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
