import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    slug: "",
    dek: "",
    body_html: "",
    cover_image_url: "",
    is_published: false,
  });

  useEffect(() => {
    if (id) {
      supabase.from("posts").select("*").eq("id", id).single()
        .then(({ data }) => data && setPost(data));
    }
  }, [id]);

  const validateImageUrl = (url: string) => {
    if (!url) return true; // Empty is allowed
    const urlPattern = /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i;
    return urlPattern.test(url);
  };

  const handleSave = async () => {
    // Validate image URLs
    if (post.cover_image_url && !validateImageUrl(post.cover_image_url)) {
      toast({ 
        title: "Invalid Image URL", 
        description: "Cover image must be a direct link to an image file (.jpg, .png, .webp, etc.)",
        variant: "destructive" 
      });
      return;
    }

    setLoading(true);
    const { error } = id
      ? await supabase.from("posts").update(post).eq("id", id)
      : await supabase.from("posts").insert([{ ...post, publish_date: new Date().toISOString() }]);

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Success", description: "Post saved!" });
      navigate("/admin/posts");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Input placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} className="bg-card text-2xl font-semibold" />
        <Input placeholder="Slug" value={post.slug} onChange={(e) => setPost({ ...post, slug: e.target.value })} className="bg-card" />
        <Textarea placeholder="Subtitle" value={post.dek} onChange={(e) => setPost({ ...post, dek: e.target.value })} className="bg-card" />
        
        <div className="space-y-2">
          <Input 
            placeholder="Cover Image URL" 
            value={post.cover_image_url} 
            onChange={(e) => setPost({ ...post, cover_image_url: e.target.value })} 
            className="bg-card" 
          />
          <p className="text-xs text-muted-foreground">
            Use a direct image URL (.jpg, .png, .webp). Example: https://images.unsplash.com/photo-...
          </p>
        </div>
        
        <Textarea placeholder="Body HTML" value={post.body_html} onChange={(e) => setPost({ ...post, body_html: e.target.value })} className="bg-card min-h-[400px]" />
        
        <div className="flex gap-4">
          <Button onClick={handleSave} disabled={loading} className="bg-primary">
            {loading ? "Saving..." : "Save"}
          </Button>
          <Button variant="outline" onClick={() => navigate("/admin/posts")}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPostEditor;
