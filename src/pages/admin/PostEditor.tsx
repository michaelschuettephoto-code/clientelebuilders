import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const AdminPostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [categories, setCategories] = useState<Array<{ id: string; name: string }>>([]);
  const [post, setPost] = useState({
    title: "",
    slug: "",
    dek: "",
    body_html: "",
    cover_image_url: "",
    is_published: false,
    category_id: null as string | null,
    cta_text: "",
    cta_url: "",
  });

  useEffect(() => {
    const checkAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin/login");
        return;
      }
      
      const { data: roles } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', session.user.id);
      
      const hasAccess = roles?.some(r => 
        ['admin', 'editor'].includes(r.role)
      );
      
      if (!hasAccess) {
        toast({ 
          title: "Access Denied", 
          description: "Admin or editor privileges required",
          variant: "destructive" 
        });
        navigate('/');
        return;
      }
      
      setIsAuthorized(true);
    };
    
    checkAccess();
  }, [navigate, toast]);

  useEffect(() => {
    if (isAuthorized) {
      supabase.from("categories").select("id, name").order("name").then(({ data }) => {
        if (data) setCategories(data);
      });
    }
    if (id && isAuthorized) {
      supabase.from("posts").select("*").eq("id", id).single()
        .then(({ data }) => data && setPost({
          title: data.title ?? "",
          slug: data.slug ?? "",
          dek: data.dek ?? "",
          body_html: data.body_html ?? "",
          cover_image_url: data.cover_image_url ?? "",
          is_published: data.is_published ?? false,
          category_id: data.category_id ?? null,
          cta_text: data.cta_text ?? "",
          cta_url: data.cta_url ?? "",
        }));
    }
  }, [id, isAuthorized]);

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

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAuthorized) return null;

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
