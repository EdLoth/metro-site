import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjetoEngenharia } from "@/projects";

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
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        setSelectedImageIndex(0);
      }
    }
  }, [id]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeItem = scrollContainerRef.current.children[selectedImageIndex] as HTMLElement;
      if (activeItem) {
        scrollContainerRef.current.scrollTo({
          left: activeItem.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (activeItem.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [selectedImageIndex]);

  const handlePrevImage = (e?: any) => {
    e?.stopPropagation();
    if (!project) return;
    setDirection(-1);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? project.imagens.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = (e?: any) => {
    e?.stopPropagation();
    if (!project) return;
    setDirection(1);
    setSelectedImageIndex((prevIndex) =>
      prevIndex === project.imagens.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Projeto não encontrado</h1>
          <Link to="/" className="text-primary hover:underline">Voltar para home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const statusColors = {
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    planned: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  };

  const projectStatusKey = project.status === "Concluído" ? "completed" : "in-progress";
  const CategoryIcon = categoryIcons[project.categoria] || Building2;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              cursor: 'zoom-out'
            }}
          >
            <button style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none' }}>
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={project.imagens[selectedImageIndex]}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link to="/projetos" className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Voltar para projetos
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <Badge className="bg-white text-foreground mb-4 px-3 py-1 flex w-fit items-center gap-2 hover:bg-gray-100">
                <CategoryIcon className="w-4 h-4 text-primary" />
                {project.categoria}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.titulo}</h1>
              <p className="text-xl text-muted-white max-w-3xl">{project.descricao}</p>
            </div>
            <Badge className={`${statusColors[projectStatusKey]} text-lg px-6 py-2 whitespace-nowrap`}>
              {project.status === "Concluído" ? <CheckCircle2 className="mr-2" /> : <ClockIcon className="mr-2" />}
              {project.status}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div 
            className="relative group aspect-video overflow-hidden rounded-2xl shadow-2xl bg-muted"
            style={{ cursor: isMobile ? 'grab' : 'zoom-in' }}
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.img
                key={selectedImageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = offset.x * velocity.x;
                  if (swipe < -5000) handleNextImage();
                  else if (swipe > 5000) handlePrevImage();
                }}
                onClick={() => !isMobile && setIsModalOpen(true)}
                src={project.imagens[selectedImageIndex]}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </AnimatePresence>

            {project.imagens.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10 hidden md:flex"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10 hidden md:flex"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 mt-4 overflow-x-auto pt-4 pb-6 px-4 touch-pan-x"
            style={{ 
              msOverflowStyle: 'none', 
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollBehavior: 'smooth',
            }}
          >
            <style>{`
              div::-webkit-scrollbar { display: none; }
            `}</style>
            
            {project.imagens.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > selectedImageIndex ? 1 : -1);
                  setSelectedImageIndex(index);
                }}
                className={`flex-shrink-0 w-28 md:w-48 aspect-video overflow-hidden rounded-lg transition-all duration-300 relative ${
                  selectedImageIndex === index 
                    ? "ring-2 ring-background scale-110 z-10 shadow-sm" 
                    : "opacity-60 hover:opacity-100 z-0"
                }`}
              >
                <img src={image} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Sobre o Projeto</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.descricaoCompleta}</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Especificações Técnicas</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(project.especificacoes).map(([key, value]) => {
                      if (!value) return null;
                      const label = key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase());
                      return (
                        <div key={key} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-semibold text-foreground">{label}</p>
                            {Array.isArray(value) ? (
                              <ul className="list-disc list-inside text-muted-foreground mt-1 space-y-1">
                                {value.map((item, idx) => <li key={idx} className="text-sm">{item}</li>)}
                              </ul>
                            ) : (
                              <p className="text-muted-foreground">{value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Informações do Projeto</h3>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Cliente</p>
                      <p className="font-semibold text-foreground">{project.cliente}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="font-semibold text-foreground">{project.localizacao}</p>
                    </div>
                  </div>
                  {project.periodo.inicio && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Data de Início</p>
                        <p className="font-semibold text-foreground">{project.periodo.inicio}</p>
                      </div>
                    </div>
                  )}
                  {project.periodo.conclusao && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {project.status === "Concluído" ? "Data de Conclusão" : "Previsão de Entrega"}
                        </p>
                        <p className="font-semibold text-foreground">{project.periodo.conclusao}</p>
                      </div>
                    </div>
                  )}
                  {project.periodo.duracao && (
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duração</p>
                        <p className="font-semibold text-foreground">{project.periodo.duracao}</p>
                      </div>
                    </div>
                  )}
                  {project.especificacoes.areaConstruida && (
                    <div className="flex items-start gap-3">
                      <Ruler className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-sm text-muted-foreground">Área Construída</p>
                        <p className="font-semibold text-foreground">
                          {Array.isArray(project.especificacoes.areaConstruida) 
                            ? project.especificacoes.areaConstruida.join(", ") 
                            : project.especificacoes.areaConstruida}
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