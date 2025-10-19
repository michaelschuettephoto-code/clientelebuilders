import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.jpg";

const AdminSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
        data: {
          display_name: displayName,
        },
      },
    });

    if (error) {
      toast({ 
        title: "Error", 
        description: error.message, 
        variant: "destructive" 
      });
    } else {
      toast({ 
        title: "Success", 
        description: "Account created successfully! You can now log in.",
      });
      navigate("/admin/login");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Clientele Builder" className="h-12 w-auto mx-auto mb-6" />
          <h1 className="text-3xl font-semibold">Create Admin Account</h1>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-4">
          <Input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="bg-card border-border"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-card border-border"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="bg-card border-border"
          />
          <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
            {loading ? "Creating account..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-center mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/admin/login" className="text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminSignup;
