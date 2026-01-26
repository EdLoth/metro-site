import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import allProjects from "@/projects";
import {
  Filter,
  TrafficCone,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  LayoutGrid,
  CheckCircle2,
  Clock,
  Wrench,
  Truck,
  PaintRoller,
  SearchX,
  MapPin,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Infraestrutura: TrafficCone,
  Construção: HardHat,
  Urbanização: Trees,
  Saneamento: Droplet,
  Reformas: PaintRoller,
  habitação: Home,
  Manutenção: Wrench,
  Pavimentação: Route,
  Abasteciemto: Truck,
};

const ProjectsNew = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { id: "all", label: "Todos os Setores", icon: LayoutGrid },
    { id: "Infraestrutura", label: "Infraestrutura", icon: TrafficCone },
    { id: "Edificação", label: "Edificação", icon: HardHat },
    { id: "Urbanização", label: "Urbanização", icon: Trees },
    { id: "Saneamento", label: "Saneamento", icon: Droplet },
    { id: "Reformas", label: "Reformas", icon: PaintRoller },
    { id: "habitação", label: "Habitação", icon: Home },
    { id: "Manutenção", label: "Manutenção", icon: Wrench },
    { id: "Pavimentação", label: "Pavimentação", icon: Route },
  ];

  const statuses = [
    { value: "all", label: "Qualquer Status", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  // LÓGICA DE FILTRO E ORDENAÇÃO POR RELEVÂNCIA
  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        const categoryMatch =
          selectedCategory === "all" || 
          project.categoria.trim().toLowerCase() === selectedCategory.trim().toLowerCase();
        
        const statusMatch =
          selectedStatus === "all" || 
          project.status.trim().toLowerCase() === selectedStatus.trim().toLowerCase();

        return categoryMatch && statusMatch;
      })
      // Ordenação por relevância: 5 para o topo, 1 para o final
      .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950">
      <Navigation />

      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("projects.title")}</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Portfólio técnico especializado em soluções de engenharia e infraestrutura.
          </p>
        </div>
      </section>

      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="gap-2 border-slate-200 dark:border-slate-700"
              >
                <Filter className="w-4 h-4" />
                {isFiltersOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
                {(selectedCategory !== "all" || selectedStatus !== "all") && (
                  <span className="ml-1 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                )}
              </Button>
              <p className="text-sm text-slate-500 font-medium">
                Encontrados: <span className="text-foreground font-bold">{filteredProjects.length}</span>
              </p>
            </div>

            <div className="flex gap-2">
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSelectedStatus(s.value)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase transition-all border ${
                    selectedStatus === s.value
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 pb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id); 
                          setIsFiltersOpen(false)
                        }}
                        className={`group p-4 rounded-xl border flex flex-col items-center gap-3 transition-all duration-300 ${
                          isActive
                            ? "bg-primary border-primary shadow-lg shadow-primary/20"
                            : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/50"
                        }`}
                      >
                        <div className={`p-3 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-primary"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-white" : "text-slate-500"}`}>
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-12 min-h-[400px]">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-full mb-6">
                <SearchX className="w-16 h-16 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Nenhum projeto encontrado</h3>
              <p className="text-slate-500 max-w-sm mt-2">
                Não existem projetos cadastrados para a categoria selecionada neste momento.
              </p>
              <Button 
                variant="link" 
                onClick={() => {setSelectedCategory("all"); setSelectedStatus("all");}}
                className="mt-4 text-primary font-bold"
              >
                Limpar todos os filtros
              </Button>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const CategoryIcon = categoryIcons[project.categoria];
                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Link to={`/projeto/${project.id}`} className="group h-full block">
                      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-border bg-card">
                        <div className="relative h-60 overflow-hidden">
                          <img
                            src={project.imagens[0]}
                            alt={project.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-background/95 text-foreground shadow-sm backdrop-blur flex items-center gap-1.5">
                              {CategoryIcon && <CategoryIcon className="w-3 h-3 text-primary" />}
                              {project.categoria}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="p-5 flex-1 flex flex-col">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {project.titulo}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
                            {project.descricao}
                          </p>
                          <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground pt-4 border-t border-border/50 uppercase tracking-tighter">
                            <span className="flex items-center gap-2"><MapPin className="w-3 h-3" />{project.localizacao.split(",")[0]}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsNew;