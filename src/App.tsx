import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Index from "./pages/Index";
import Institucional from "./pages/Institucional";
import Equipe from "./pages/Equipe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import { ScrollController } from "./components/ScrollController";
import ProjectDetailNew from "./pages/ProjectDetailNew";
import ProjectsNew from "./pages/ProjectsNew";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            {/* agora está dentro do Router => funciona */}
            <ScrollController />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/institucional" element={<Institucional />} />
              <Route path="/equipe" element={<Equipe />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projetos2" element={<ProjectsNew />} />
              <Route path="/projeto/:id" element={<ProjectDetail />} />
              <Route path="/projeto2/:id" element={<ProjectDetailNew />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
