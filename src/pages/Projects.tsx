import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
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
  PaintRoller,
  LayoutGrid,
  CheckCircle2,
  Clock,
  ChevronDown,
  ChevronUp,
  Wrench,
  Truck,
  SearchX,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Infraestrutura: TrafficCone,
  Construção: HardHat,
  Urbanização: Trees,
  Saneamento: Droplet,
  Reformas: PaintRoller,
  Habitação: Home,
  Manutenção: Wrench,
  Pavimentação: Route,
  Abasteciemto: Truck,
};

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  const categories = [
    "all",
    "Infraestrutura",
    "Construção",
    "Urbanização",
    "Saneamento",
    "Reformas",
    "Habitação",
    "Manutenção",
    "Pavimentação",
    "Abasteciemto",
  ];

  const statuses = [
    { value: "all", label: "Todos", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  // Lógica de Filtro + Ordenação por Relevância (Decrescente)
  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        const categoryMatch =
          selectedCategory === "all" || 
          project.categoria.toLowerCase() === selectedCategory.toLowerCase();
        
        const statusMatch =
          selectedStatus === "all" || 
          project.status.toLowerCase() === selectedStatus.toLowerCase();

        return categoryMatch && statusMatch;
      })
      // Ordenação: Relevância 5 aparece primeiro, 1 por último
      .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));
  }, [selectedCategory, selectedStatus]);

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) + (selectedStatus !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Portfólio técnico de alta engenharia, organizado por impacto e relevância estratégica.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 border-b border-border bg-background transition-all duration-300">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-between cursor-pointer group py-2"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <div className="flex items-center gap-2">
              <div
                className={`p-2 rounded-full transition-colors ${
                  isFiltersOpen ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground group-hover:bg-primary/5"
                }`}
              >
                <Filter className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-foreground">
                  Filtrar Projetos
                </h2>
                {!isFiltersOpen && activeFiltersCount > 0 && (
                  <p className="text-xs text-primary font-medium">
                    {activeFiltersCount} filtro(s) ativo(s)
                  </p>
                )}
              </div>
            </div>

            <Button variant="ghost" size="icon" className="rounded-full">
              {isFiltersOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </Button>
          </div>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              isFiltersOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="pt-6 pb-2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <div className="lg:col-span-8 xl:col-span-9 space-y-3">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Por Categoria
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => {
                        const Icon = category === "all" ? LayoutGrid : categoryIcons[category];
                        const isSelected = selectedCategory === category;
                        return (
                          <Button
                            key={category}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCategory(category);
                            }}
                            className={`rounded-full flex items-center gap-2 transition-all ${
                              isSelected ? "shadow-md" : "hover:bg-accent hover:text-white"
                            }`}
                          >
                            {Icon && <Icon className="w-3.5 h-3.5" />}
                            {category === "all" ? "Todas" : category}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="lg:col-span-4 xl:col-span-3 space-y-3 lg:border-l lg:pl-8 border-border">
                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Por Status
                    </span>
                    <div className="flex flex-wrap lg:flex-col gap-2">
                      {statuses.map((status) => {
                        const Icon = status.icon;
                        const isSelected = selectedStatus === status.value;
                        return (
                          <Button
                            key={status.value}
                            variant={isSelected ? "default" : "ghost"}
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStatus(status.value);
                            }}
                            className={`rounded-full lg:rounded-md justify-start ${
                              isSelected ? "text-white font-semibold" : "text-muted-foreground hover:text-white"
                            }`}
                          >
                            <Icon className="w-4 h-4 mr-2" />
                            {status.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex justify-between items-center text-sm mt-2">
            <span className="text-muted-foreground">
              Exibindo <strong className="text-foreground">{filteredProjects.length}</strong> projetos ordenados por relevância
            </span>

            {(selectedCategory !== "all" || selectedStatus !== "all") && (
              <Button
                variant="link"
                className="text-primary px-0 h-auto font-semibold"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedStatus("all");
                }}
              >
                Limpar filtros
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="py-12 bg-muted/30 min-h-[500px]">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-background rounded-3xl border border-dashed border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 text-muted-foreground/30">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Nenhum resultado</h3>
              <p className="text-muted-foreground mt-2">Tente ajustar os filtros para encontrar o que procura.</p>
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
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                          {project.descricao}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                          <span className="font-medium">{project.localizacao.split(",")[0]}</span>
                         
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

export default Projects;