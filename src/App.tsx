import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Intelligence from "./pages/Intelligence";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const Story = lazy(() => import("./pages/Story"));
const Tag = lazy(() => import("./pages/Tag"));
const Scorecard = lazy(() => import("./pages/Scorecard"));
const Reports = lazy(() => import("./pages/Reports"));
const AgentProduction = lazy(() => import("./pages/reports/AgentProduction"));
const Frameworks = lazy(() => import("./pages/Frameworks"));
const Consulting = lazy(() => import("./pages/Consulting"));
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
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/blog" element={<Intelligence />} />
        <Route path="/story/:slug" element={<Story />} />
        <Route path="/tag/:tag" element={<Tag />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/insights/recruiting-difficulty" element={<InsightArticle />} />
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
