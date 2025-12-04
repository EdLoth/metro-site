import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { Filter } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  const categories = ["all", "Residencial", "Comercial", "Industrial"];
  const statuses = [
    { value: "all", label: "Todos" },
    { value: "completed", label: "Concluídos" },
    { value: "in-progress", label: "Em Andamento" },
    { value: "planned", label: "Planejados" },
  ];

  const filteredProjects = projectsData.filter((project) => {
    const categoryMatch =
      selectedCategory === "all" || project.category === selectedCategory;
    const statusMatch =
      selectedStatus === "all" || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const statusColors = {
    completed:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    planned:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  };

  const statusLabels = {
    completed: "Concluído",
    "in-progress": "Em Andamento",
    planned: "Planejado",
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("projects.title")}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Conheça nossa carteira completa de projetos executados e em
              andamento
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-semibold text-foreground">
                Filtrar por:
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category === "all" ? "Todas Categorias" : category}
                  </Button>
                ))}
              </div>

              {/* Status Filter */}
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <Button
                    key={status.value}
                    variant={
                      selectedStatus === status.value ? "default" : "outline"
                    }
                    onClick={() => setSelectedStatus(status.value)}
                    className="rounded-full"
                  >
                    {status.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Mostrando {filteredProjects.length} de {projectsData.length}{" "}
            projetos
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Nenhum projeto encontrado com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projeto/${project.id}`}
                  className="block"
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-border bg-card group h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground shadow-lg">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={statusColors[project.status]}>
                          {statusLabels[project.status]}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{project.location.split(",")[0]}</span>
                        <span>{project.area}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
