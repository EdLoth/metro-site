import { 
  Droplet, 
  HardHat, 
  Home, 
  Trees, 
  Wrench, 
  Waves, 
  GraduationCap, 
  Building2, 
  Building, 
  Car
} from "lucide-react";

/* =========================
   TIPOS DE CATEGORIA (IDs)
========================= */
export type CategoriaProjeto =
  | "Barragem"
  | "Edificação"
  | "Escolas"
  | "Habitação"
  | "Hospitais"
  | "Manutenção Esgotamento"
  | "Obras Estruturantes"
  | "Saneamento Água"
  | "Urbanização"
  | "Mobilidade Urbana"
  | "Requalificação Urbana";
  

/* =========================
   LABELS (TEXTOS PARA EXIBIÇÃO)
========================= */
export const categoriaLabels: Record<CategoriaProjeto, string> = {
  "Barragem": "Barragem",
  "Edificação": "Edificação",
  "Escolas": "Escolas",
  "Habitação": "Habitação",
  "Hospitais": "Hospitais e Unidades de Saúde",
  "Manutenção Esgotamento": "Manutenção de Esgotamento Sanitário",
  "Obras Estruturantes": "Obras Estruturantes",
  "Saneamento Água": "Saneamento e Abastecimento de Água",
  "Urbanização": "Urbanização",
  "Mobilidade Urbana": "Mobilidade Urbana",
  "Requalificação Urbana": "Requalificação Urbana"
};

/* =========================
   ÍCONES POR CATEGORIA
========================= */
export const categoriaIcons: Record<CategoriaProjeto, React.ElementType> = {
  "Barragem": Waves,
  "Edificação": HardHat,
  "Escolas": GraduationCap,
  "Habitação": Home,
  "Hospitais": Building2,
  "Manutenção Esgotamento": Wrench,
  "Obras Estruturantes": Building,
  "Saneamento Água": Droplet,
  "Urbanização": Trees,
  "Mobilidade Urbana": Car,
  "Requalificação Urbana": Car

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
  categoria: "Habitação" | "Urbanização"; 
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