import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Hospital,
  TrafficCone,
  GraduationCap,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  PaintRoller,
  ClockIcon,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { ProjetoEngenharia } from "@/projects";

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

const ProjectDetailNew = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjetoEngenharia | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        setSelectedImageIndex(0);
      }
    }
  }, [id]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!project) return;
    setDirection(-1);
    setSelectedImageIndex((prev) =>
      prev === 0 ? project.imagens.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!project) return;
    setDirection(1);
    setSelectedImageIndex((prev) =>
      prev === project.imagens.length - 1 ? 0 : prev + 1
    );
  };

  if (!project) return null;

  const statusColors = {
    completed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "in-progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  };

  const projectStatusKey = project.status === "Concluído" ? "completed" : "in-progress";
  const CategoryIcon = categoryIcons[project.categoria] || Building2;

  // Variantes de animação de slide
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* LIGHTBOX / MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setIsModalOpen(false)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
              <X className="w-10 h-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={project.imagens[selectedImageIndex]}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-24 pb-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <Link to="/projetos" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6">
            <ArrowLeft className="w-4 h-4" /> Voltar para projetos
          </Link>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div className="flex-1">
              <Badge className="bg-white text-primary mb-4">
                <CategoryIcon className="w-4 h-4 mr-2" /> {project.categoria}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.titulo}</h1>
              <p className="text-xl text-white/90 max-w-4xl">{project.descricao}</p>
            </div>
            <Badge className={`${statusColors[projectStatusKey]} text-md px-4 py-2 h-fit`}>
              {project.status === "Concluído" ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <ClockIcon className="w-4 h-4 mr-2" />}
              {project.status}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* CARROSSEL PRINCIPAL */}
            <div className="lg:col-span-7">
              <div 
                className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl group cursor-zoom-in"
                onClick={() => setIsModalOpen(true)}
              >
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={selectedImageIndex}
                    src={project.imagens[selectedImageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <button onClick={handlePrevImage} className="pointer-events-auto bg-black/50 hover:bg-primary p-3 rounded-full text-white transition-all">
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button onClick={handleNextImage} className="pointer-events-auto bg-black/50 hover:bg-primary p-3 rounded-full text-white transition-all">
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
                
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-lg text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              {/* PAGINAÇÃO DE MINIATURAS (ROW ÚNICA) */}
              <div className="mt-6 flex items-center gap-4 bg-secondary/10 p-4 rounded-2xl border border-border">
                <button onClick={handlePrevImage} className="p-2 hover:bg-white rounded-lg border transition-all active:scale-90">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                
                <div className="flex-1 flex gap-3 overflow-x-auto no-scrollbar pb-2 pt-1 px-1">
                  {project.imagens.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(idx > selectedImageIndex ? 1 : -1);
                        setSelectedImageIndex(idx);
                      }}
                      className={`relative flex-shrink-0 w-24 md:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === idx ? "border-primary scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <button onClick={handleNextImage} className="p-2 hover:bg-white rounded-lg border transition-all active:scale-90">
                  <ChevronRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* FICHA TÉCNICA */}
            <div className="lg:col-span-5">
              <Card className="shadow-xl border-primary/5">
                <div className="bg-primary/5 p-5 border-b">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Building2 className="text-primary w-5 h-5" /> Ficha Técnica
                  </h2>
                </div>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl"><Building2 className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Cliente</p>
                        <p className="text-sm font-bold">{project.cliente}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-primary/10 rounded-xl"><MapPin className="w-5 h-5 text-primary" /></div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-muted-foreground tracking-tighter">Localização</p>
                        <p className="text-sm font-bold">{project.localizacao}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-[10px] uppercase font-black text-muted-foreground mb-4">Especificações</p>
                    <div className="grid gap-3">
                      {Object.entries(project.especificacoes).map(([key, value]) => value && (
                        <div key={key} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-xl border border-transparent hover:border-primary/20 transition-all">
                          {key === 'areaConstruida' ? <Ruler className="w-4 h-4 text-primary" /> : <CheckCircle2 className="w-4 h-4 text-primary" />}
                          <div className="flex-1">
                            <p className="text-[10px] font-bold uppercase opacity-60">{key.replace(/([A-Z])/g, " $1")}</p>
                            <p className="text-xs font-semibold">{Array.isArray(value) ? value.join(" • ") : value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <div className="h-10 w-2 bg-primary rounded-full" /> Memorial Descritivo
            </h2>
            <Card className="bg-slate-50 dark:bg-slate-900/50 border-none shadow-inner">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {project.descricaoCompleta}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailNew;