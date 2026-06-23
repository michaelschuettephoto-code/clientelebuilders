import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.jpg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        navigate("/admin");
      }
    } else {
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        toast({ title: "Error", description: error.message, variant: "destructive" });
      } else {
        toast({
          title: "Account created",
          description: "Signing you in now...",
        });
        const { error: loginError } = await supabase.auth.signInWithPassword({ email, password });
        if (loginError) {
          toast({ title: "Error", description: loginError.message, variant: "destructive" });
        } else {
          navigate("/admin");
        }
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Clientele Builder" className="h-12 w-auto mx-auto mb-6" />
          <h1 className="text-3xl font-semibold">{mode === "login" ? "Admin Login" : "Create Account"}</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="bg-card border-border"
          />
          <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90">
            {loading
              ? mode === "login" ? "Logging in..." : "Creating account..."
              : mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-sm text-primary hover:underline"
          >
            {mode === "login" ? "Need an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
