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
import { ProjetoEngenharia, MinhaCasaMinhaVidaProjeto } from "@/projects/types";

/* =========================
   TYPE GUARD
========================= */
function isMultiProjeto(
  project: ProjetoEngenharia
): project is MinhaCasaMinhaVidaProjeto {
  return "tipoEspecial" in project && project.tipoEspecial === "multi_projetos";
}

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
      .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));
  }, [selectedCategory, selectedStatus]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* GRID */}
      <section className="py-12 bg-muted/30 min-h-[500px]">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">Nenhum projeto</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const CategoryIcon = categoryIcons[project.categoria];

                const multiProjeto = isMultiProjeto(project);

                console.log("📦 Projeto:", project);
                console.log("🔀 É multi?", multiProjeto);

                const imagemCapa = multiProjeto
                  ? project.empreendimentos?.[0]?.imagens?.[0]
                  : project.imagens?.[0];

                console.log("🖼️ Imagem capa:", imagemCapa);

                return (
                  <Link
                    key={project.id}
                    to={`/projeto/${project.id}`}
                    className="group h-full block"
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative h-60 overflow-hidden bg-muted">
                        {imagemCapa ? (
                          <img
                            src={imagemCapa}
                            alt={project.titulo}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                            Sem imagem
                          </div>
                        )}

                        <div className="absolute top-3 left-3">
                          <Badge className="bg-background/95 text-foreground shadow-sm backdrop-blur flex items-center gap-1.5">
                            {CategoryIcon && (
                              <CategoryIcon className="w-3 h-3 text-primary" />
                            )}
                            {project.categoria}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {project.titulo}
                        </h3>

                        {project.descricao && (
                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                            {project.descricao}
                          </p>
                        )}

                        {project.localizacao && (
                          <div className="text-xs text-muted-foreground pt-4 border-t">
                            {project.localizacao.split(",")[0]}
                          </div>
                        )}
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
