import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
import Tag from "./pages/Tag";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AdminLogin from "./pages/admin/Login";
import AdminSignup from "./pages/admin/Signup";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPosts from "./pages/admin/Posts";
import AdminPostEditor from "./pages/admin/PostEditor";
import AdminReadme from "./pages/admin/Readme";
import Sitemap from "./pages/Sitemap";
import RSS from "./pages/RSS";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/story/:slug" element={<Story />} />
          <Route path="/tag/:tag" element={<Tag />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/posts" element={<AdminPosts />} />
          <Route path="/admin/posts/new" element={<AdminPostEditor />} />
          <Route path="/admin/posts/:id" element={<AdminPostEditor />} />
          <Route path="/admin/readme" element={<AdminReadme />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="/feed.xml" element={<RSS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
