import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  DollarSign,
  CheckCircle2,
  Ruler,
  Building2,
  ArrowLeft,
} from "lucide-react";
import { getProjectById, Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        setSelectedImage(0);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Projeto não encontrado
          </h1>
          <Link to="/" className="text-primary hover:underline">
            Voltar para home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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
          <Link
            to="/#projetos"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para projetos
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <Badge className="bg-white text-foreground mb-4">{project.category}</Badge>
              <h1 className="text-4xl  md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-white max-w-3xl">
                {project.description}
              </p>
            </div>

            <Badge
              className={`${
                statusColors[project.status]
              } text-lg px-6 py-2 whitespace-nowrap`}
            >
              {statusLabels[project.status]}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={project.gallery[selectedImage]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-6 gap-4 mt-4">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-video overflow-hidden rounded-lg transition-all ${
                  selectedImage === index
                    ? "ring-4 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Sobre o Projeto
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Especificações Técnicas
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-background rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="font-semibold text-foreground">
                            {spec.label}
                          </p>
                          <p className="text-muted-foreground">{spec.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Informações do Projeto
                  </h3>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Cliente</p>
                      <p className="font-semibold text-foreground">
                        {project.client}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Localização
                      </p>
                      <p className="font-semibold text-foreground">
                        {project.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Data de Início
                      </p>
                      <p className="font-semibold text-foreground">
                        {project.startDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {project.status === "completed"
                          ? "Data de Conclusão"
                          : "Previsão de Entrega"}
                      </p>
                      <p className="font-semibold text-foreground">
                        {project.endDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duração</p>
                      <p className="font-semibold text-foreground">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Área Construída
                      </p>
                      <p className="font-semibold text-foreground">
                        {project.area}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Investimento
                      </p>
                      <p className="font-semibold text-foreground">
                        {project.budget}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Equipe</p>
                      <p className="font-semibold text-foreground">
                        {project.team}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
