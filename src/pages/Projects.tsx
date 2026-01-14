import { Link } from "react-router-dom";
import { useState } from "react";
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
  ChevronDown, // Importado
  ChevronUp    // Importado
} from "lucide-react";

// Mapeamento de ícones
const categoryIcons: Record<string, React.ElementType> = {
  "Hospitalar": Hospital,
  "Infraestrutura": TrafficCone,
  "Educacional": GraduationCap,
  "Residencial": Home,
  "Construção": HardHat,
  "Urbanização": Trees,
  "Saneamento": Droplet,
  "Estradas": Route,
  "Reformas e Revitalizações": PaintRoller,
};

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  
  // Novo estado para controlar se o filtro está aberto ou fechado
  // Começa true (aberto) para o usuário ver as opções de cara
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  const categories = [
    "all",
    "Hospitalar",
    "Infraestrutura",
    "Educacional",
    "Residencial",
    "Construção",
    "Urbanização",
    "Saneamento",
    "Estradas",
    "Reformas e Revitalizações"
  ];

  const statuses = [
    { value: "all", label: "Todos", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  const filteredProjects = allProjects.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.categoria === selectedCategory;
    const statusMatch =
      selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const statusColors: Record<string, string> = {
    "Concluído": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Em andamento": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };

  // Função para contar filtros ativos para mostrar no resumo quando fechado
  const activeFiltersCount = (selectedCategory !== "all" ? 1 : 0) + (selectedStatus !== "all" ? 1 : 0);

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
              Carteira completa de obras executadas e em andamento.
            </p>
        </div>
      </section>

      {/* Filters Section (Collapsible) */}
      <section className="py-4 border-b border-border bg-background transition-all duration-300">
        <div className="container mx-auto px-4">
          
          {/* Header do Filtro (Clicável) */}
          <div 
            className="flex items-center justify-between cursor-pointer group py-2"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-full transition-colors ${isFiltersOpen ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground group-hover:bg-primary/5'}`}>
                <Filter className="w-5 h-5" />
              </div>
              <div>
                 <h2 className="font-bold text-lg text-foreground">Filtrar Projetos</h2>
                 {/* Resumo quando fechado */}
                 {!isFiltersOpen && activeFiltersCount > 0 && (
                    <p className="text-xs text-primary font-medium">
                        {activeFiltersCount} filtro(s) ativo(s)
                    </p>
                 )}
              </div>
            </div>
            
            <Button variant="ghost" size="icon" className="rounded-full">
                {isFiltersOpen ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
            </Button>
          </div>

          {/* Área Colapsável com Animação CSS Grid */}
          <div 
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                isFiltersOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
                <div className="pt-6 pb-2">
                     {/* Grid Container Original 70/30 */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        
                        {/* Lado Esquerdo: Categorias (~70%) */}
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
                                    e.stopPropagation(); // Evita fechar o accordion ao clicar no botão
                                    setSelectedCategory(category);
                                }}
                                className={`rounded-full flex items-center gap-2 transition-all ${
                                    isSelected ? "shadow-md" : "hover:bg-accent text-muted-foreground hover:text-white"
                                }`}
                                >
                                {Icon && <Icon className="w-3.5 h-3.5" />}
                                {category === "all" ? "Todas" : category}
                                </Button>
                            );
                            })}
                        </div>
                        </div>

                        {/* Lado Direito: Status (~30%) */}
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
                                        isSelected 
                                        ? " text-white font-semibold" 
                                        : "text-muted-foreground hover:text-white"
                                    }`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {status.label}
                                </Button>
                            )
                            })}
                        </div>
                        </div>

                    </div>
                </div>
            </div>
          </div>

          {/* Barra de Contagem e Limpar Filtros */}
          <div className="pt-4 border-t border-border flex justify-between items-center text-sm mt-2">
             <span className="text-muted-foreground">
                Encontrados: <strong className="text-foreground">{filteredProjects.length}</strong> projetos
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
                    Limpar todos os filtros
                </Button>
             )}
          </div>

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
              <h3 className="text-xl font-bold text-foreground">Nenhum projeto encontrado</h3>
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
                            {CategoryIcon && <CategoryIcon className="w-3 h-3 text-primary" />}
                            {project.categoria}
                         </Badge>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className={`${statusColors[project.status] || "bg-gray-100 text-gray-800"}`}>
                          {project.status}
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
              )})}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;