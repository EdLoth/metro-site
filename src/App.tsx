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

// Configuração do cliente de busca (React Query)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          {/* Componentes de Notificação Globais */}
          <Toaster />
          <Sonner />

          <BrowserRouter>
            {/* O ScrollController garante que o usuário comece no topo ao mudar de rota */}
            <ScrollController />

            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/institucional" element={<Institucional />} />
              <Route path="/equipe" element={<Equipe />} />
              
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projetos2" element={<ProjectsNew />} />
              
              {/* Detalhes do Projeto */}
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