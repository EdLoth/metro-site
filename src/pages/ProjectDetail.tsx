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
  CheckCircle2,
  Ruler,
  Building2,
  ArrowLeft,
  ArrowRight,
  // Novos ícones importados para as categorias:
  Hospital,
  TrafficCone,
  GraduationCap,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  PaintRoller,
  Check,
  ClockIcon,
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjetoEngenharia } from "@/projects";

// Mapeamento de ícones por categoria
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

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjetoEngenharia | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      console.log("Projeto encontrado:", projectData);
      if (projectData) {
        setProject(projectData);
        setSelectedImageIndex(0);
      }
    }
  }, [id]);

  const handlePrevImage = () => {
    if (!project) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? project.imagens.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    if (!project) return;
    setSelectedImageIndex((prevIndex) =>
      prevIndex === project.imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

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

  const projectStatusKey = project.status === "Concluído" ? "completed" : "in-progress";

  // Resolução do ícone da categoria (usa Building2 como fallback se não encontrar)
  const CategoryIcon = categoryIcons[project.categoria] || Building2;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para projetos
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              {/* Badge atualizada com o Ícone */}
              <Badge className="bg-white text-foreground mb-4 px-3 py-1 flex w-fit items-center gap-2 hover:bg-gray-100">
                <CategoryIcon className="w-4 h-4 text-primary" />
                {project.categoria}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.titulo}
              </h1>
              <p className="text-xl text-muted-white max-w-3xl">
                {project.descricao}
              </p>
            </div>

            <Badge
              className={`${
                statusColors[projectStatusKey]
              } text-lg px-6 py-2 whitespace-nowrap`}
            >
              {project.status === "Concluído" ? <CheckCircle2 className="mr-2" /> : <ClockIcon className="mr-2" />}
              {project.status}
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative group aspect-video overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={project.imagens[selectedImageIndex]}
              alt={project.titulo}
              className="w-full h-full object-cover"
            />

            {project.imagens.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Imagem anterior"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  aria-label="Próxima imagem"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-6 gap-4 mt-4">
            {project.imagens.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`aspect-video overflow-hidden rounded-lg transition-all ${
                  selectedImageIndex === index
                    ? "ring-4 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${project.titulo} - ${index + 1}`}
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
                    {project.descricaoCompleta}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Especificações Técnicas
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(project.especificacoes).map(([key, value]) => {
                      if (!value) return null;
                      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
                      return (
                        <div
                          key={key}
                          className="flex items-start gap-3 p-4 bg-background rounded-lg"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">
                              {label}
                            </p>
                            <p className="text-muted-foreground">{value}</p>
                          </div>
                        </div>
                      );
                    })}
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
                        {project.cliente}
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
                        {project.localizacao}
                      </p>
                    </div>
                  </div>

                  {project.periodo.inicio && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Data de Início
                        </p>
                        <p className="font-semibold text-foreground">
                          {project.periodo.inicio}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.periodo.conclusao && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {project.status === "Concluído"
                            ? "Data de Conclusão"
                            : "Previsão de Entrega"}
                        </p>
                        <p className="font-semibold text-foreground">
                          {project.periodo.conclusao}
                        </p>
                      </div>
                    </div>
                  )}

                  {project.periodo.duracao && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duração</p>
                        <p className="font-semibold text-foreground">
                          {project.periodo.duracao}
                        </p>
                      </div>
                    </div>
                  )}
                  
                   {project.especificacoes.areaConstruida && (
                    <div className="flex items-start gap-3">
                        <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                        <p className="text-sm text-muted-foreground">
                            Área Construída
                        </p>
                        <p className="font-semibold text-foreground">
                            {project.especificacoes.areaConstruida}
                        </p>
                        </div>
                    </div>
                   )}

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