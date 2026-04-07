import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import About from "./pages/About.tsx";
import Solutions from "./pages/Solutions.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import Privacy from "./pages/Privacy.tsx";
import Copyright from "./pages/Copyright.tsx";
import Terms from "./pages/Terms.tsx";
import Career from "./pages/Career.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import OldTermViewer from "./pages/OldTermViewer.tsx";
import OldPrivacyViewer from "./pages/OldPrivacyViewer.tsx";
import MarketingTools from "./pages/MarketingTools.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/marketing-agent">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/culture" element={<Career />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/term" element={<Terms />} />
          <Route path="/term/:slug" element={<Terms />} />
          <Route path="/privacy" element={<Terms />} />
          <Route path="/privacy/:slug" element={<Terms />} />
          <Route path="/copyright" element={<Terms />} />
          <Route path="/term/:slug/:version" element={<OldTermViewer />} />
          <Route path="/tools" element={<MarketingTools />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
