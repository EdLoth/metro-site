import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
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

// --- FUNÇÕES AUXILIARES DO CLOUDINARY ---

// 1. URL Minúscula (Placeholder): Baixa apenas 20px de largura.
// O navegador vai esticar isso e nós aplicamos o blur via CSS.
const getTinyUrl = (url: string) => {
  if (!url) return "";
  return url.replace("/upload/", "/upload/w_20,q_auto:low,f_auto/");
};

// 2. URL Completa (HD): Formato e qualidade automáticos.
const getFullUrl = (url: string) => {
  if (!url) return "";
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

// --- CONFIGURAÇÃO DE ÍCONES ---
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

// --- SUB-COMPONENTE: ProjectCard ---
// Isolado para ter seu próprio estado 'isLoaded' sem afetar os outros cards.
const ProjectCard = ({ project, index, isVisible }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const CategoryIcon = categoryIcons[project.categoria] || LayoutGrid;

  return (
    <Link to={`/projeto/${project.id}`} className="block h-full">
      <Card
        className={`overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-border bg-card group h-full flex flex-col ${
          isVisible ? "animate-scale-in" : "opacity-0"
        }`}
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {/* Container da Imagem */}
        {/* bg-muted/20 serve como um 'esqueleto' cinza enquanto a tiny image de 1kb baixa */}
        <div className="relative h-64 overflow-hidden bg-muted/20">
          
          {/* === 1. CAMADA BLUR (PLACEHOLDER) === */}
          {/* Aparece quase instantaneamente. blur-xl esconde os pixels estourados. */}
          <img
            src={getTinyUrl(project.imagens[0])}
            alt=""
            aria-hidden="true"
            className={`
              absolute inset-0 w-full h-full object-cover
              blur-xl scale-110 
              transition-opacity duration-700
              ${isLoaded ? "opacity-0" : "opacity-100"}
            `}
          />

          {/* === 2. CAMADA HD (FINAL) === */}
          {/* Começa invisível (opacity-0). Só aparece quando o navegador termina de baixar (onLoad). */}
          <img
            src={getFullUrl(project.imagens[0])}
            alt={project.titulo}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`
              absolute inset-0 w-full h-full object-cover
              group-hover:scale-110 transition-transform duration-500
              transition-opacity duration-700 ease-in-out
              ${isLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
          
          {/* Badge de Categoria */}
          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-background/95 text-foreground hover:bg-background shadow-lg backdrop-blur flex items-center gap-1.5 px-3 py-1.5">
              <CategoryIcon className="w-3.5 h-3.5 text-primary" />
              {project.categoria}
            </Badge>
          </div>
        </div>

        {/* Conteúdo do Card */}
        <CardContent className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
            {project.titulo}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
            {project.descricao}
          </p>

          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground pt-4 border-t border-border/50">
            <span>{project.localizacao.split(",")[0]}</span>
            {project.especificacoes?.areaConstruida && (
               <span>{project.especificacoes.areaConstruida}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

// --- COMPONENTE PRINCIPAL ---
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
          {allProjects.slice(0, 3).map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        {/* Botão Ver Todos */}
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