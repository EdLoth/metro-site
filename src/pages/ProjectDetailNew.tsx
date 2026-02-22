import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  CheckCircle2,
  Building2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { getProjectById } from "@/data/projects";
import {
  ProjetoEngenharia,
  MultiProjetoBase,
  categoriaIcons,
} from "@/projects/types";

// --- Tipos e Type Guards ---
function isMultiProjeto(
  project: ProjetoEngenharia
): project is MultiProjetoBase {
  return (project as any).tipoEspecial === "multi_projetos";
}

// --- FUNÇÕES AUXILIARES CLOUDINARY ---
const getTinyUrl = (url: string) => {
  if (!url) return "";
  // w_50: largura pequena para placeholder
  return url.replace("/upload/", "/upload/w_50,q_auto:low,f_auto/");
};

const getFullUrl = (url: string) => {
  if (!url) return "";
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

// --- Sub-componente: Item de Especificação com Accordion ---
const SpecificationItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const CHAR_LIMIT = 45;
  const isLongText = value.length > CHAR_LIMIT;

  return (
    <div className="flex items-start gap-3 p-3 bg-white dark:bg-black/20 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm transition-all hover:border-primary/20">
      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
      <div className="min-w-0 flex-1">
        <p className="text-[9px] opacity-60 uppercase font-bold truncate tracking-tight mb-0.5">
          {label}
        </p>
        <div className="text-xs font-black text-foreground/90">
          {isLongText && !isExpanded ? (
            <>
              {value.slice(0, CHAR_LIMIT)}...
              <button
                onClick={() => setIsExpanded(true)}
                className="ml-1 text-[10px] text-primary hover:underline font-bold inline-flex items-center gap-0.5"
              >
                Ver mais <ChevronDown className="w-3 h-3" />
              </button>
            </>
          ) : (
            <>
              {value}
              {isLongText && (
                <button
                  onClick={() => setIsExpanded(false)}
                  className="ml-1 text-[10px] text-primary hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  Menos <ChevronUp className="w-3 h-3" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Sub-componente: Miniatura Otimizada ---
const LazyThumbnail = ({
  item,
  isSelected,
  onClick,
  shouldRenderImage,
}: {
  item: { url: string };
  isSelected: boolean;
  onClick: () => void;
  shouldRenderImage: boolean;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`relative flex-shrink-0 w-20 md:w-32 aspect-video rounded-lg overflow-hidden border-2 transition-all snap-start ${
        isSelected
          ? "border-primary scale-95 shadow-lg opacity-100"
          : "border-transparent opacity-40 hover:opacity-100 bg-slate-100 dark:bg-slate-800"
      }`}
    >
      {shouldRenderImage ? (
        <>
          {/* Blur Layer */}
          <img
            src={getTinyUrl(item.url)}
            className={`absolute inset-0 w-full h-full object-cover blur-md scale-110 transition-opacity duration-300 ${
              isLoaded ? "opacity-0" : "opacity-100"
            }`}
            alt=""
          />
          {/* HD Layer */}
          <img
            src={getFullUrl(item.url)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            alt="Thumbnail"
          />
        </>
      ) : (
        <div className="w-full h-full bg-slate-200 dark:bg-white/5 animate-pulse" />
      )}
    </button>
  );
};

// --- Sub-componente: Imagem Principal da Galeria (Com Blur Up) ---
// Extraído para lidar com o carregamento de cada slide
const GalleryMainImage = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Resetar estado quando o src mudar
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center cursor-zoom-in"
      onClick={onClick}
    >
      {/* 1. Blur Placeholder (Contain) */}
      <img
        src={getTinyUrl(src)}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain blur-xl scale-105 transition-opacity duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* 2. HD Image (Contain) */}
      <img
        src={getFullUrl(src)}
        alt="Gallery"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

// --- Componente Principal ---
const ProjectDetailNew = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjetoEngenharia | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estado para imagem do modal
  const [modalImageLoaded, setModalImageLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      const projectData = getProjectById(id);
      if (projectData) {
        setProject(projectData);
        setSelectedImageIndex(0);
      }
    }
  }, [id]);

  const galleryItems = useMemo(() => {
    if (!project) return [];

    if (isMultiProjeto(project)) {
      return project.empreendimentos.flatMap((emp) =>
        emp.imagens.map((img) => ({
          url: img,
          context: {
            titulo: emp.titulo,
            cliente: emp.cliente || project.cliente,
            localizacao: emp.localizacao || project.localizacao,
            especificacoes: emp.especificacoes,
            descricao: emp.descricao,
            periodo: emp.periodo,
          },
        }))
      );
    }

    return project.imagens.map((img) => ({
      url: img,
      context: {
        titulo: project.titulo,
        cliente: project.cliente,
        localizacao: project.localizacao,
        especificacoes: project.especificacoes,
        descricao: project.descricao,
        periodo: project.periodo,
      },
    }));
  }, [project]);

  if (!project || galleryItems.length === 0) return null;

  const currentItem = galleryItems[selectedImageIndex];
  const CategoryIcon = categoriaIcons[project.categoria] || Building2;

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const paginate = (newDirection: number) => {
    setSelectedImageIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = galleryItems.length - 1;
      if (next >= galleryItems.length) next = 0;
      return next;
    });
  };

  const specs = currentItem.context.especificacoes || {};
  const hasSpecs = Object.keys(specs).length > 0;
  const shouldUseScroll = Object.keys(specs).length > 5;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* --- MODAL (ZOOM) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 md:p-10"
            onClick={() => {
              setIsModalOpen(false);
              setModalImageLoaded(false);
            }}
          >
            <button className="absolute top-4 right-4 text-white p-2 z-[110]">
              <X className="w-8 h-8" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
               {/* Modal Tiny */}
               <img 
                 src={getTinyUrl(currentItem.url)}
                 className={`absolute max-w-full max-h-full object-contain blur-xl transition-opacity duration-300 ${modalImageLoaded ? 'opacity-0' : 'opacity-100'}`}
               />
               
               {/* Modal Full */}
               <motion.img
                 key={currentItem.url}
                 src={getFullUrl(currentItem.url)}
                 className={`max-w-full max-h-full object-contain shadow-2xl relative z-10 transition-opacity duration-500 ${modalImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                 initial={{ scale: 0.95 }}
                 animate={{ scale: 1 }}
                 onLoad={() => setModalImageLoaded(true)}
               />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="pt-20 md:pt-12 pb-8 md:pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                {project.titulo}
              </h1>
              {project.descricao && (
                <p className="text-lg md:text-xl text-white/80 max-w-4xl leading-relaxed font-medium">
                  {project.descricao}
                </p>
              )}
            </div>

            <div className="flex-shrink-0">
              <Badge className="bg-white hover:bg-white text-primary py-2 px-4 text-sm shadow-lg whitespace-nowrap">
                <CategoryIcon className="w-4 h-4 mr-2" /> {project.categoria}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
            
            {/* Coluna da Galeria */}
            <div className="w-full lg:col-span-8 space-y-4">
              <div
                className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
                style={{
                  height: "auto",
                  minHeight: "350px",
                  maxHeight: "70vh",
                  aspectRatio: "16/9",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      variants={fadeVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.4, ease: "linear" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {/* Componente que gerencia o Blur Up da imagem atual */}
                      <GalleryMainImage 
                        src={currentItem.url} 
                        onClick={() => setIsModalOpen(true)}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      paginate(-1);
                    }}
                    className="pointer-events-auto bg-black/30 hover:bg-primary p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all border border-white/5"
                  >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      paginate(1);
                    }}
                    className="pointer-events-auto bg-black/30 hover:bg-primary p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all border border-white/5"
                  >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                  </button>
                </div>

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 pointer-events-none z-10">
                  <p className="text-white text-sm md:text-base font-bold drop-shadow-md">
                    {currentItem.context.titulo}
                  </p>
                </div>

                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-[10px] font-bold border border-white/10">
                    {selectedImageIndex + 1} / {galleryItems.length}
                  </div>
                </div>
              </div>

              {/* Strip de Thumbnails Otimizado */}
              <div className="flex gap-2 overflow-x-auto py-2 px-1 snap-x scrollbar-hide">
                {galleryItems.map((item, idx) => {
                  const shouldRender = Math.abs(selectedImageIndex - idx) < 12;

                  return (
                    <LazyThumbnail
                      key={idx}
                      item={item}
                      isSelected={selectedImageIndex === idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      shouldRenderImage={shouldRender}
                    />
                  );
                })}
              </div>
            </div>

            {/* Coluna da Ficha Técnica */}
            <div className="w-full lg:col-span-4">
              <Card className="border-none shadow-xl bg-slate-50 dark:bg-slate-900/40 transition-all duration-300 ease-in-out h-auto self-start">
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-lg font-black flex items-center gap-2 text-primary uppercase tracking-tight">
                      <Building2 className="w-5 h-5" /> Ficha Técnica
                    </h2>
                    <div className="h-1 w-10 bg-primary rounded-full" />
                  </div>

                  {/* Informações Principais (Fixo) */}
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex items-start gap-4 p-1">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-muted-foreground font-black tracking-tighter">
                          Cliente
                        </p>
                        <p className="text-sm font-bold leading-none mt-1">
                          {currentItem.context.cliente}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-1">
                      <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-muted-foreground font-black tracking-tighter">
                          Localização
                        </p>
                        <p className="text-sm font-bold leading-none mt-1">
                          {currentItem.context.localizacao}
                        </p>
                      </div>
                    </div>

                    {currentItem.context.periodo?.duracao && (
                      <div className="flex items-start gap-4 p-1">
                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary shrink-0">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] uppercase text-muted-foreground font-black tracking-tighter">
                            Duração
                          </p>
                          <p className="text-sm font-bold leading-none mt-1">
                            {currentItem.context.periodo.duracao}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Especificações com Scroll e Accordion */}
                  {hasSpecs && (
                    <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-white/5">
                      <p className="text-[10px] uppercase text-muted-foreground font-black tracking-widest opacity-70">
                        Especificações Técnicas
                      </p>

                      <div
                        className={`grid grid-cols-1 gap-2 ${
                          shouldUseScroll
                            ? "max-h-[350px] overflow-y-auto pr-2 custom-scrollbar [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-slate-700 [&::-webkit-scrollbar-thumb]:rounded-full"
                            : ""
                        }`}
                      >
                        {Object.entries(specs).map(([key, value]) => (
                          <SpecificationItem
                            key={key}
                            label={key}
                            value={
                              Array.isArray(value)
                                ? value.join(", ")
                                : String(value)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {(project.descricaoCompleta || currentItem.context.descricao) && (
            <div className="mt-12 md:mt-20">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-lg md:text-3xl font-semibold tracking-tighter shrink-0">
                  Sobre este empreendimento
                </h3>
                <div className="h-px w-full bg-slate-200 dark:bg-white/10" />
              </div>
              <div className="bg-muted/30 p-6 md:p-10 rounded-2xl border border-transparent shadow-inner">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.descricaoCompleta || currentItem.context.descricao}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailNew;