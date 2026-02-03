import { 
  Droplet, 
  HardHat, 
  Home, 
  Trees, 
  Wrench, 
  Waves, 
  GraduationCap, 
  Building2, 
  Building 
} from "lucide-react";

/* =========================
   TIPOS DE CATEGORIA (IDs)
========================= */
export type CategoriaProjeto =
  | "BARRAGEM"
  | "EDIFICACAO"
  | "ESCOLAS"
  | "HABITACAO"
  | "HOSPITAIS"
  | "MANUTENCAO_ESGOTAMENTO"
  | "OBRAS_ESTRUTURANTES"
  | "SANEAMENTO_AGUA"
  | "URBANIZACAO";

/* =========================
   LABELS (TEXTOS PARA EXIBIÇÃO)
========================= */
export const categoriaLabels: Record<CategoriaProjeto, string> = {
  "BARRAGEM": "Barragem",
  "EDIFICACAO": "Edificação",
  "ESCOLAS": "Escolas",
  "HABITACAO": "Habitação",
  "HOSPITAIS": "Hospitais e Unidades de Saúde",
  "MANUTENCAO_ESGOTAMENTO": "Manutenção de Esgotamento Sanitário",
  "OBRAS_ESTRUTURANTES": "Obras Estruturantes",
  "SANEAMENTO_AGUA": "Saneamento e Abastecimento de Água",
  "URBANIZACAO": "Urbanização",
};

/* =========================
   ÍCONES POR CATEGORIA
========================= */
export const categoriaIcons: Record<CategoriaProjeto, React.ElementType> = {
  "BARRAGEM": Waves,
  "EDIFICACAO": HardHat,
  "ESCOLAS": GraduationCap,
  "HABITACAO": Home,
  "HOSPITAIS": Building2,
  "MANUTENCAO_ESGOTAMENTO": Wrench,
  "OBRAS_ESTRUTURANTES": Building,
  "SANEAMENTO_AGUA": Droplet,
  "URBANIZACAO": Trees,
};

/* =========================
   PROJETO BASE
========================= */
export type ProjetoBase = {
  id: string;
  categoria: CategoriaProjeto;
  titulo: string;
  descricao?: string;
  descricaoCompleta?: string;
  status: "Em andamento" | "Concluído";

  relevancia: number;
  cliente: string;
  localizacao: string;
  periodo?: {
    inicio?: string;
    conclusao?: string;
    duracao?: string;
  };
  imagens: string[];
  especificacoes?: {
    "Área Construida"?: string;
    [key: string]: string | number | string[] | undefined;
  };
  itensInclusos?: string[];
};

/* =========================
   MINHA CASA MINHA VIDA (MULTI)
========================= */
export type MultiProjetoBase = {
  id: string;
  categoria: "HABITACAO" | "URBANIZACAO"; 
  titulo: string; 
  status: "Em andamento" | "Concluído";
  relevancia: number;
  cliente: string;
  localizacao: string;
  descricao?: string;
  descricaoCompleta?: string;
  tipoEspecial: "multi_projetos"; // FLAG

  empreendimentos: MinhaCasaEmpreendimento[];
};

export type MinhaCasaEmpreendimento = {
  id: string;
  titulo: string;
  descricao?: string;
  localizacao?: string;
  cliente?: string;
  periodo?: {
    duracao?: string
    inicio?: string;
    conclusao?: string;
  };
  imagens: string[];
  especificacoes?: Record<string, string | number>;
};

/* =========================
   TIPO FINAL (ENGLOBA TODOS)
========================= */
export type ProjetoEngenharia = ProjetoBase | MultiProjetoBase;