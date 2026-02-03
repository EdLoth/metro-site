import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
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
} from "lucide-react";
import {
  ProjetoEngenharia,
  MultiProjetoBase,
  categoriaLabels, // Importado para os textos bonitos
  categoriaIcons, // Importado para garantir consistência com os types
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

const ProjectsNew = () => {
  const { t } = useLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  // PAGINAÇÃO
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  /* =========================
      CATEGORIAS (Barra de Filtros)
  ========================= */
  const categories = [
    { id: "all", label: "Todos os Setores", icon: LayoutGrid },
    { id: "BARRAGEM", label: "Barragem", icon: Waves },
    { id: "EDIFICACAO", label: "Edificação", icon: HardHat },
    { id: "ESCOLAS", label: "Escolas", icon: GraduationCap },
    { id: "HABITACAO", label: "Habitação", icon: Home },
    {
      id: "HOSPITAIS",
      label: "Hospitais e Unidades de Saúde",
      icon: Building2,
    },
    {
      id: "MANUTENCAO_ESGOTAMENTO",
      label: "Manutenção de Esgotamento Sanitário",
      icon: Wrench,
    },
    { id: "MOBILIDADE_URBANA", label: "Mobilidade Urbana", icon: Car },
    { id: "OBRAS_ESTRUTURANTES", label: "Obras Estruturantes", icon: Building },
    {
      id: "SANEAMENTO_AGUA",
      label: "Saneamento Abastecimento de Água",
      icon: Droplet,
    },
    { id: "URBANIZACAO", label: "Urbanização", icon: Trees },
  ];

  const statuses = [
    { value: "all", label: "Qualquer Status", icon: LayoutGrid },
    { value: "Concluído", label: "Concluídos", icon: CheckCircle2 },
    { value: "Em andamento", label: "Em Andamento", icon: Clock },
  ];

  /* =========================
      FILTRO
  ========================= */
  const filteredProjects = useMemo(() => {
    return allProjects
      .filter((project) => {
        // Comparação direta pelo ID da categoria
        const categoryMatch =
          selectedCategory === "all" || project.categoria === selectedCategory;

        const statusMatch =
          selectedStatus === "all" || project.status === selectedStatus;

        return categoryMatch && statusMatch;
      })
      .sort((a, b) => (b.relevancia || 0) - (a.relevancia || 0));
  }, [selectedCategory, selectedStatus]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedStatus]);

  /* =========================
      PAGINAÇÃO
  ========================= */
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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
      <section className="sticky top-24 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className="gap-2 border-slate-200 dark:border-slate-700"
              >
                <Filter className="w-4 h-4" />
                {isFiltersOpen ? "Ocultar Filtros" : "Mostrar Filtros"}
                {(selectedCategory !== "all" || selectedStatus !== "all") && (
                  <span className="ml-1 flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                )}
              </Button>

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
                  onClick={() => setSelectedStatus(s.value)}
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
                <div className="pt-8 pb-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isActive = selectedCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setIsFiltersOpen(false);
                        }}
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
                          className={`text-[10px] font-bold uppercase tracking-wider ${
                            isActive ? "text-white" : "text-slate-500"
                          }`}
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
            </motion.div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedProjects.map((project) => {
                  // Aqui usamos o objeto importado de types.ts
                  const CategoryIcon = categoriaIcons[project.categoria];
                  const multiProjeto = isMultiProjeto(project);

                  const imagemCapa = multiProjeto
                    ? project.empreendimentos?.[0]?.imagens?.[0]
                    : project.imagens?.[0];

                  return (
                    <motion.div key={project.id} layout>
                      <Link
                        to={`/projeto/${project.id}`}
                        className="group h-full block"
                      >
                        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-border bg-card">
                          <div className="relative h-60 overflow-hidden bg-slate-100">
                            {imagemCapa ? (
                              <img
                                src={imagemCapa}
                                alt={project.titulo}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-sm text-slate-400">
                                Sem imagem
                              </div>
                            )}

                            <div className="absolute top-3 left-3">
                              <Badge className="bg-background/95 text-foreground shadow-sm backdrop-blur flex items-center gap-1.5 cursor-default hover:bg-background/95">
                                {CategoryIcon && (
                                  <CategoryIcon className="w-3 h-3 text-primary" />
                                )}
                                {/* AQUI ESTÁ A CORREÇÃO: Usando categoriaLabels */}
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
                })}
              </div>

              {/* PAGINAÇÃO MINIMALISTA */}
              {totalPages > 1 && (
                <div className="flex justify-end items-center gap-4 mt-8 text-sm">
                  {/* select */}
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Por página:</span>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => {
                        setItemsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      className="border rounded-md px-2 py-1 text-sm bg-background"
                    >
                      <option value={6}>6</option>
                      <option value={9}>9</option>
                    </select>
                  </div>

                  {/* navegação */}
                  <div className="flex items-center gap-1">
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((p) => p - 1)}
                    >
                      {"<"}
                    </Button>

                    <span className="px-2 text-muted-foreground">
                      {currentPage} / {totalPages}
                    </span>

                    <Button
                      size="sm"
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((p) => p + 1)}
                    >
                      {">"}
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
