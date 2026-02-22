import { Link, useSearchParams } from "react-router-dom";
import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import allProjects from "@/projects";
import {
  Filter,
  Home,
  HardHat,
  Trees,
  Droplet,
  LayoutGrid,
  CheckCircle2,
  Clock,
  Wrench,
  PaintRoller,
  SearchX,
  MapPin,
  GraduationCap,
  Waves,
  Building2,
  Building,
  Car,
  X,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import {
  ProjetoEngenharia,
  MultiProjetoBase,
  categoriaLabels,
  categoriaIcons,
} from "@/projects/types";
import { truncateText } from "@/lib/utils";

/* =========================
   TYPE GUARD
========================= */
function isMultiProjeto(
  project: ProjetoEngenharia,
): project is MultiProjetoBase {
  return "tipoEspecial" in project && project.tipoEspecial === "multi_projetos";
}

/* =========================
   FUNÇÕES AUXILIARES CLOUDINARY
========================= */
const getTinyUrl = (url: string) => {
  if (!url) return "";
  return url.replace("/upload/", "/upload/w_20,q_auto:low,f_auto/");
};

const getFullUrl = (url: string) => {
  if (!url) return "";
  return url.replace("/upload/", "/upload/f_auto,q_auto/");
};

/* =========================
   CACHE GLOBAL DE IMAGENS
========================= */
const loadedImagesCache = new Set<string>();

/* =========================
   SUB-COMPONENTE: CARD DE PROJETO
========================= */
const ProjectCard = ({ project }: { project: ProjetoEngenharia }) => {
  const CategoryIcon = categoriaIcons[project.categoria];
  const multiProjeto = isMultiProjeto(project);

  const imagemCapa = multiProjeto
    ? project.empreendimentos?.[0]?.imagens?.[0]
    : project.imagens?.[0];

  const [isLoaded, setIsLoaded] = useState(() => {
    if (!imagemCapa) return false;
    return loadedImagesCache.has(getFullUrl(imagemCapa));
  });

  const handleImageLoad = () => {
    if (imagemCapa) {
      loadedImagesCache.add(getFullUrl(imagemCapa));
      setIsLoaded(true);
    }
  };

  return (
    <motion.div layout>
      <Link to={`/projeto/${project.id}`} className="group h-full block">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-border bg-card">
          <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800">
            {imagemCapa ? (
              <>
                {!isLoaded && (
                  <img
                    src={getTinyUrl(imagemCapa)}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
                  />
                )}
                <img
                  src={getFullUrl(imagemCapa)}
                  alt={project.titulo}
                  loading="lazy"
                  decoding="async"
                  onLoad={handleImageLoad}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-500
                    ${
                      isLoaded
                        ? "opacity-100"
                        : "opacity-0 transition-opacity duration-700 ease-in-out"
                    }
                  `}
                  style={isLoaded ? { opacity: 1 } : {}}
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                Sem imagem
              </div>
            )}
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-background/95 text-foreground shadow-sm backdrop-blur flex items-center gap-1.5 cursor-default hover:bg-background/95">
                {CategoryIcon && (
                  <CategoryIcon className="w-3 h-3 text-primary" />
                )}
                {categoriaLabels[project.categoria]}
              </Badge>
            </div>
          </div>

          <CardContent className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {project.titulo}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
              {truncateText(project.descricao, 110)}
            </p>
            <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground pt-4 border-t border-border/50 uppercase tracking-tighter">
              <span className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                {project.localizacao.split(",")[0]}
              </span>

              <Badge
                className={`
                ${
                  project.status === "Concluído"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                } 
                shadow-none backdrop-blur border pointer-events-none px-2.5 py-0.5 normal-case text-[10px]
              `}
              >
                <span className="uppercase tracking-widest">
                  {project.status || "Concluído"}
                </span>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

/* =========================
   COMPONENTE PRINCIPAL
========================= */
const ProjectsNew = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const projectsTopRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") || "all"
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    searchParams.get("status") || "all"
  );
  
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  /* --- EFEITOS --- */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isFiltersOpen && 
        filtersRef.current && 
        !filtersRef.current.contains(event.target as Node)
      ) {
        setIsFiltersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFiltersOpen]);

  useEffect(() => {
    if (projectsTopRef.current) {
      const yCoordinate = projectsTopRef.current.getBoundingClientRect().top + window.scrollY;
      const yOffset = -120;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }
  }, [currentPage, selectedCategory, selectedStatus]);


  /* --- DADOS --- */
  const categories = [
    { id: "all", label: "Todos os Setores", icon: LayoutGrid },
    { id: "Barragem", label: "Barragem", icon: Waves },
    { id: "Edificação", label: "Edificação", icon: HardHat },
    { id: "Escolas", label: "Escolas", icon: GraduationCap },
    { id: "Habitação", label: "Habitação", icon: Home },
    { id: "Hospitais", label: "Hospitais e Unidades de Saúde", icon: Building2 },
    { id: "Manutenção Esgotamento", label: "Manutenção de Esgotamento Sanitário", icon: Wrench },
    { id: "Mobilidade Urbana", label: "Mobilidade Urbana", icon: Car },
    { id: "Obras Estruturantes", label: "Obras Estruturantes", icon: Building },
    { id: "Saneamento Água", label: "Saneamento e Abastecimento de Água", icon: Droplet },
    { id: "Urbanização", label: "Urbanização", icon: Trees },
  ];

  const statuses = [
    { value: "all", label: "Qualquer Status", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  useEffect(() => {
    const params: any = {};
    if (selectedCategory !== "all") params.category = selectedCategory;
    if (selectedStatus !== "all") params.status = selectedStatus;
    if (currentPage > 1) params.page = currentPage.toString();
    setSearchParams(params);
  }, [selectedCategory, selectedStatus, currentPage, setSearchParams]);

  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        const categoryMatch =
          selectedCategory === "all" || project.categoria === selectedCategory;
        const statusMatch =
          selectedStatus === "all" || project.status === selectedStatus;
        return categoryMatch && statusMatch;
      })
      .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));
  }, [selectedCategory, selectedStatus]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, filteredProjects.length);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setCurrentPage(1);
    setIsFiltersOpen(false);
  };

  const handleStatusSelect = (value: string) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedStatus("all");
    setCurrentPage(1);
  };

  // --- LÓGICA DE PAGINAÇÃO (Números e Reticências) ---
  const getPageNumbers = () => {
    const pages = [];
    const maxVisibleButtons = 5; // Quantos botões mostrar no total (excluindo prev/next)

    if (totalPages <= maxVisibleButtons) {
      // Se tiver poucas páginas, mostra todas [1, 2, 3, 4, 5]
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Se tiver muitas páginas, usa lógica de reticências
      if (currentPage <= 3) {
        // Perto do começo: [1, 2, 3, 4, ..., 10]
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Perto do fim: [1, ..., 7, 8, 9, 10]
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // No meio: [1, ..., 4, 5, 6, ..., 10]
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedStatus !== "all";

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950">
      <Navigation />

      {/* HERO */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Portfólio técnico especializado em soluções de engenharia e
            infraestrutura.
          </p>
        </div>
      </section>

      {/* FILTROS */}
      <section 
        ref={projectsTopRef} 
        className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <div ref={filtersRef} className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="gap-2 border-slate-200 dark:border-slate-700"
              >
                <Filter className="w-4 h-4" />
                {isFiltersOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
                {hasActiveFilters && (
                  <span className="ml-1 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                )}
              </Button>

              <AnimatePresence>
                {hasActiveFilters && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleClearFilters}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 gap-1.5 h-9"
                    >
                      <X className="w-4 h-4" />
                      <span className="hidden sm:inline">Limpar</span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

              <p className="text-sm text-slate-500 font-medium">
                Encontrados:{" "}
                <span className="text-foreground font-bold">
                  {filteredProjects.length}
                </span>
              </p>
            </div>

            <div className="flex gap-2">
              {statuses.map((s) => (
                <button
                  key={s.value}
                  onClick={() => handleStatusSelect(s.value)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase transition-all border ${
                    selectedStatus === s.value
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-slate-500 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isFiltersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 pb-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`group p-4 rounded-xl border flex flex-col items-center gap-3 transition-all duration-300 ${
                          isActive
                            ? "bg-primary border-primary shadow-lg shadow-primary/20"
                            : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/50"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-lg ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-primary"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <span
                          className={`
                            text-[10px] font-bold uppercase tracking-wider text-center
                            w-full h-8 flex items-center justify-center leading-tight line-clamp-2
                            ${isActive ? "text-white" : "text-slate-500"}
                          `}
                        >
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 min-h-[400px]">
        <div className="container mx-auto px-4">
          {paginatedProjects.length === 0 ? (
            <motion.div className="flex flex-col items-center justify-center py-20 text-center">
              <SearchX className="w-16 h-16 text-slate-300 mb-4" />
              <h3 className="text-2xl font-bold">Nenhum projeto encontrado</h3>
              {hasActiveFilters && (
                <Button variant="link" onClick={handleClearFilters} className="mt-2 text-primary">
                  Limpar filtros e ver tudo
                </Button>
              )}
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* PAGINAÇÃO TRADICIONAL */}
              {totalPages > 1 && (
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                  
                  {/* Info e ItemsPerPage */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground w-full md:w-auto justify-center md:justify-start">
                    <span>
                      Mostrando <span className="font-bold text-foreground">{startItem}-{endItem}</span> de <span className="font-bold text-foreground">{filteredProjects.length}</span>
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline">|</span>
                      <span>Itens:</span>
                      <select
                        value={itemsPerPage}
                        onChange={(e) => {
                          setItemsPerPage(Number(e.target.value));
                          setCurrentPage(1);
                        }}
                        className="border rounded-md px-2 py-1 text-sm bg-background focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer"
                      >
                        <option value={6}>6</option>
                        <option value={9}>9</option>
                        <option value={12}>12</option>
                      </select>
                    </div>
                  </div>

                  {/* Botões de Navegação */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Anterior</span>
                    </Button>

                    <div className="flex items-center gap-1">
                      {/* --- ALGORITMO DE PAGINAÇÃO --- */}
                      {(() => {
                        const pages = [];
                        // Se tiver poucas páginas (<= 7), mostra todas
                        if (totalPages <= 7) {
                          for (let i = 1; i <= totalPages; i++) pages.push(i);
                        } else {
                          // Se tiver muitas, usa lógica de '...'
                          if (currentPage <= 4) {
                            // Início: [1, 2, 3, 4, 5, ..., 50]
                            pages.push(1, 2, 3, 4, 5, '...', totalPages);
                          } else if (currentPage >= totalPages - 3) {
                            // Fim: [1, ..., 46, 47, 48, 49, 50]
                            pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
                          } else {
                            // Meio: [1, ..., 24, 25, 26, ..., 50]
                            pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
                          }
                        }

                        return pages.map((page, index) => {
                          if (page === '...') {
                            return (
                              <div key={`ellipsis-${index}`} className="flex items-center justify-center w-9 h-9">
                                <MoreHorizontal className="h-4 w-4 text-muted-foreground opacity-50" />
                              </div>
                            );
                          }

                          return (
                            <Button
                              key={page}
                              variant={currentPage === page ? "default" : "ghost"}
                              size="icon"
                              className={`h-9 w-9 ${currentPage === page ? 'pointer-events-none shadow-md' : 'text-muted-foreground hover:text-white'}`}
                              onClick={() => setCurrentPage(Number(page))}
                            >
                              {page}
                            </Button>
                          );
                        });
                      })()}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Próximo</span>
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsNew;