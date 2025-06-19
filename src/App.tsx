import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import WhyChooseUs from "./pages/WhyChooseUs";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import { useScrollToTop } from "./hooks/usePageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/get-started" element={<GetStarted />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
