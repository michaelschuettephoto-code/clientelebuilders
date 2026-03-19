import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const Story = lazy(() => import("./pages/Story"));
const Tag = lazy(() => import("./pages/Tag"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));

const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminPosts = lazy(() => import("./pages/admin/Posts"));
const AdminPostEditor = lazy(() => import("./pages/admin/PostEditor"));
const AdminReadme = lazy(() => import("./pages/admin/Readme"));
const RSS = lazy(() => import("./pages/RSS"));
const InsightArticle = lazy(() => import("./pages/InsightArticle"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/feed.xml" element={<RSS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </TooltipProvider>
);

export default App;
