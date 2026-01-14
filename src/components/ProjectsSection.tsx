import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; // Importado Badge
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  // Importação dos Ícones
  Hospital,
  TrafficCone,
  GraduationCap,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  PaintRoller,
  LayoutGrid
} from "lucide-react";
import allProjects from "@/projects";

// Mapeamento de ícones (Mesmo padrão das outras páginas)
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

// Cores de status simples para os cards
const statusColors: Record<string, string> = {
  "Concluído": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Em andamento": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};

const ProjectsSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {allProjects.slice(0, 3).map((project, index) => {
             const CategoryIcon = categoryIcons[project.categoria] || LayoutGrid;

             return (
            <Link
              key={index}
              to={`/projeto/${project.id}`}
              className="block h-full"
            >
              <Card
                className={`overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-border bg-card group h-full flex flex-col ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.imagens[0]}
                    alt={project.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge Categoria (Esquerda) */}
                  <div className="absolute top-4 left-4">
                     <Badge className="bg-background/95 text-foreground hover:bg-background shadow-lg backdrop-blur flex items-center gap-1.5 px-3 py-1.5">
                        <CategoryIcon className="w-3.5 h-3.5 text-primary" />
                        {project.categoria}
                     </Badge>
                  </div>

                  {/* Badge Status (Direita) */}
                  <div className="absolute top-4 right-4">
                     <Badge className={`${statusColors[project.status] || "bg-gray-100 text-gray-800"} shadow-sm`}>
                        {project.status}
                     </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.titulo}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {project.descricao}
                  </p>

                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground pt-4 border-t border-border/50">
                    <span>{project.localizacao.split(",")[0]}</span>
                    <span>{project.especificacoes.areaConstruida}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )})}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Link to="/projetos">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-10 py-6 rounded-full shadow-elegant transition-all duration-500 hover:scale-105"
            >
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;