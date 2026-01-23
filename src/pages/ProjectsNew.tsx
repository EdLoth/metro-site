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
  Hospital,
  TrafficCone,
  GraduationCap,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  PaintRoller,
  LayoutGrid,
  CheckCircle2,
  Clock,
  MapPin,
  Maximize2,
  ArrowRight,
  SearchX,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Hospitalar: Hospital,
  Infraestrutura: TrafficCone,
  Educacional: GraduationCap,
  Residencial: Home,
  Construção: HardHat,
  Urbanização: Trees,
  Saneamento: Droplet,
  Estradas: Route,
  "Reformas e Revitalizações": PaintRoller,
};

const ProjectsNew = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const categories = [
    { id: "all", label: "Todos os Setores", icon: LayoutGrid },
    { id: "Hospitalar", label: "Hospitalar", icon: Hospital },
    { id: "Infraestrutura", label: "Infraestrutura", icon: TrafficCone },
    { id: "Educacional", label: "Educacional", icon: GraduationCap },
    { id: "Residencial", label: "Residencial", icon: Home },
    { id: "Construção", label: "Construção", icon: HardHat },
    { id: "Urbanização", label: "Urbanização", icon: Trees },
    { id: "Saneamento", label: "Saneamento", icon: Droplet },
    { id: "Estradas", label: "Estradas", icon: Route },
    { id: "Reformas e Revitalizações", label: "Reformas", icon: PaintRoller },
  ];

  const statuses = [
    { value: "all", label: "Qualquer Status", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const categoryMatch =
        selectedCategory === "all" || project.categoria === selectedCategory;
      const statusMatch =
        selectedStatus === "all" || project.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  }, [selectedCategory, selectedStatus]);

  const statusColors: Record<string, string> = {
    Concluído:
      "bg-emerald-500/10 text-emerald-600 border-emerald-200 dark:border-emerald-900",
    "Em andamento":
      "bg-amber-500/10 text-amber-600 border-amber-200 dark:border-amber-900",
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Explore nossa trajetória através de projetos que unem precisão
            técnica, inovação sustentável e compromisso com o futuro das
            cidades.
          </p>
        </div>
      </section>

      {/* Sticky Filter System */}
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
                {selectedCategory !== "all" && (
                  <span className="ml-1 flex h-2 w-2 rounded-full bg-primary"></span>
                )}
              </Button>
              <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 hidden lg:block" />
              <p className="text-sm text-slate-500 font-medium">
                Exibindo{" "}
                <span className="text-foreground font-bold">
                  {filteredProjects.length}
                </span>{" "}
                resultados
              </p>
            </div>

            <div className="flex gap-2">
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSelectedStatus(s.value)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    selectedStatus === s.value
                      ? "bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900"
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
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`group p-4 rounded-xl border flex flex-col items-center gap-3 transition-all duration-300 ${
                          isActive
                            ? "bg-primary border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                            : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/50"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg transition-colors ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-primary"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isActive ? "text-white" : "text-slate-500"
                          }`}
                        >
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

      {/* Projects Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Filter className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Nenhum projeto encontrado
              </h3>
              <p className="text-muted-foreground mt-2">
                Não há projetos com a combinação de filtros atual.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const CategoryIcon = categoryIcons[project.categoria];
                return (
                  <Link
                    key={project.id}
                    to={`/projeto/${project.id}`}
                    className="group h-full block"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-border bg-card">
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={project.imagens[0]}
                          alt={project.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-background/95 text-foreground hover:bg-background shadow-sm backdrop-blur flex items-center gap-1.5">
                            {CategoryIcon && (
                              <CategoryIcon className="w-3 h-3 text-primary" />
                            )}
                            {project.categoria}
                          </Badge>
                        </div>
                     
                      </div>
                      <CardContent className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                          {project.titulo}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                          {project.descricao}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                          <span>{project.localizacao.split(",")[0]}</span>
                          <span>{project.especificacoes.areaConstruida}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
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
