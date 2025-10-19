import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin/login");
    });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Clientele Builder" className="h-8 w-auto" />
          <Button onClick={() => supabase.auth.signOut()} variant="outline">
            Logout
          </Button>
        </div>
      </header>
      
      <main className="container max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/admin/posts" className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors">
            <h2 className="text-2xl font-semibold mb-2">Manage Posts</h2>
            <p className="text-muted-foreground">Create, edit, and publish stories</p>
          </Link>
          
          <div className="p-8 bg-card border border-border rounded-lg opacity-50">
            <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
            <p className="text-muted-foreground">Coming soon</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
