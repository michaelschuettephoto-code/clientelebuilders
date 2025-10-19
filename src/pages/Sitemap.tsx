import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

const Sitemap = () => {
  const { data: posts } = useQuery({
    queryKey: ["sitemap-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("slug, updated_at, publish_date")
        .eq("is_published", true)
        .order("updated_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (posts) {
      const baseUrl = window.location.origin;
      const now = new Date().toISOString();
      
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${now}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/newsletter</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  ${posts.map(post => `<url>
    <loc>${baseUrl}/story/${post.slug}</loc>
    <lastmod>${post.updated_at}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n  ')}
</urlset>`;

      // Set content type and display XML
      const blob = new Blob([xml], { type: "application/xml" });
      const url = URL.createObjectURL(blob);
      window.location.href = url;
    }
  }, [posts]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Generating sitemap...</p>
    </div>
  );
};

export default Sitemap;
