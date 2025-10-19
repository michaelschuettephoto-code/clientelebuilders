import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AdminPosts = () => {
  const { data: posts } = useQuery({
    queryKey: ["admin-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/admin" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Dashboard
          </Link>
          <Link to="/admin/posts/new">
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8">Posts</h1>
        
        <div className="space-y-4">
          {posts?.map(post => (
            <Link
              key={post.id}
              to={`/admin/posts/${post.id}`}
              className="block p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <div className="text-sm text-muted-foreground">
                    {post.is_published ? "Published" : "Draft"}
                    {post.publish_date && ` · ${new Date(post.publish_date).toLocaleDateString()}`}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminPosts;
