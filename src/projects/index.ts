import { 
  Hospital, 
  TrafficCone, 
  GraduationCap, 
  Home, 
  HardHat, 
  Trees, 
  Droplet, 
  Route, 
  PaintRoller 
} from "lucide-react";

// Mapeamento que garante que todas as categorias do seu Type tenham um ícone
export const categoriaIcons: Record<ProjetoEngenharia['categoria'], React.ElementType> = {
  "Hospitalar": Hospital,
  "Infraestrutura": TrafficCone, // ou Building2
  "Educacional": GraduationCap,
  "Residencial": Home,
  "Construção": HardHat,
  "Urbanização": Trees, // ou Map
  "Saneamento": Droplet,
  "Estradas": Route,
  "Reformas e Revitalizações": PaintRoller,
};

export type ProjetoEngenharia = {
  id: string;
  categoria:
    | "Hospitalar"
    | "Infraestrutura"
    | "Educacional"
    | "Residencial"
    | "Construção"
    | "Urbanização"
    | "Saneamento"
    | "Estradas"
    | "Reformas e Revitalizações";
  titulo: string;
  descricao: string;
  descricaoCompleta?: string;
  status: "Em andamento" | "Concluído";
  // Alterado para number para aceitar floats (ex: 4.5, 3.8)
  relevancia: number;
  cliente: string;
  localizacao: string;
  periodo: {
    inicio?: string;
    conclusao?: string;
    duracao?: string;
  };
  imagens: string[];
  especificacoes: {
    areaConstruida?: string;
    [key: string]: string | number | undefined;
  };
  itensInclusos?: string[];
};

export const ICOMProject: ProjetoEngenharia = {
  id: "prj_icom_01",
  categoria: "Hospitalar",
  titulo: "Hospital (Projeto ICOM)",
  descricao:
    "Unidade de referência da Bahia especializada exclusivamente no tratamento de doenças transmissíveis de alta complexidade.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",

  status: "Concluído",
  relevancia: 5.0,
  cliente: "SESAB",
  localizacao: "Salvador, BA",
  periodo: {
    duracao: "18 meses",
    conclusao: "2023-08",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0dumsle7u07muar5dw4cy",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8vylcoo07mujx782tjk",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8tslhdi07nagy5him94",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8qqlco907mus7xhe1vn",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8o7lhdb07narzoeazj5",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8krlhd407nayqrl0g07",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8hjlcnv07muyz6ctk65",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8f9lhcx07na81qgkfp2",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c8colhcq07navpvr8p1s",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c89tlcno07muefq0vl44",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c87mlcnh07muvo10ebal",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd0c849lhcj07na822w93pr",
  ],
  especificacoes: {
    areaConstruida: "8.500 m²",
    numeroLeitos: 90,
    numeroUTIs: 20,
    centrosCirurgicos: 4,
  },
};

export const CentroConvencoesProject: ProjetoEngenharia = {
  id: "prj_centro_conv_02",
  categoria: "Construção",
  titulo: "Centro de Convenções",
  descricao:
    "Projeto de centro de convenções destinado à realização de eventos, congressos e atividades institucionais, com infraestrutura moderna e capacidade ampliada.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",

  status: "Concluído",
  relevancia: 4.9,
  cliente: "Governo do Estado",
  localizacao: "Ilhéus, BA",
  periodo: {
    duracao: "24 meses",
    conclusao: "2024-02",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfqayno207mua17078ve",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfnwynnv07mufx6tmket",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfkryq9707naieumu358",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfi8ynno07mugx5oefj9",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfi8ynno07mugx5oefj9",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfblyq8o07nazg0eh9vb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf86ynmv07mu2bewaah3",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf4zynmo07muu2ex3lnn",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf0iyq8h07na9bb952cq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrewmyq8a07nac7btftcz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrewmyq8a07nac7btftcz",
  ],
  especificacoes: {
    areaConstruida: "12.000 m²",
    capacidade: "3.500 pessoas",
    vagasEstacionamento: 212,
  },
};

export const VLTProject: ProjetoEngenharia = {
  id: "prj_vlt_03",
  categoria: "Infraestrutura",
  titulo: "VLT (Veículo Leve sobre Trilhos)",
  descricao:
    "Sistema de mobilidade urbana voltado ao transporte público de média capacidade, integrando diferentes regiões da cidade.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Em andamento",
  relevancia: 5,
  cliente: "CTB - Companhia de Transportes",
  localizacao: "Região Metropolitana de Salvador",
  periodo: {
    inicio: "2024-01",
    conclusao: "Previsão: 2026-12",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4cqe2rgk107muxdtsfm5i",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c52krf1507mugw77desd",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c507rf0y07mu8yk2apza",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c507rf0y07mu8yk2apza",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c4tyrf0r07muqfvjlox9",
  ],
  especificacoes: {
    extensaoLinha: "11,5 km",
    numeroEstacoes: 14,
    bairrosAtendidos: 8,
    mediaPopulacaoAtendida: "250.000 hab/dia",
  },
};

export const EdificioGaragemProject: ProjetoEngenharia = {
  id: "prj_garagem_04",
  categoria: "Infraestrutura",
  titulo: "Edifício Garagem",
  descricao:
    "Edifício destinado ao estacionamento vertical, projetado para atender demandas urbanas e institucionais.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Concluído",
  relevancia: 4.2,
  cliente: "Prefeitura de Feira de Santana",
  localizacao: "Centro, Feira de Santana - BA",
  periodo: {
    duracao: "10 meses",
    conclusao: "2022-11",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvglyxyu07nankeqir3x",
  ],
  especificacoes: {
    areaConstruida: "6.200 m²",
    numeroVagas: 450,
    quantidadePavimentos: 6,
  },
};

export const CleristonAndradeProject: ProjetoEngenharia = {
  id: "prj_cleriston_05",
  categoria: "Hospitalar",
  titulo: "Hospital Clériston Andrade",
  descricao:
    "Projeto hospitalar de grande porte, com ampliação e modernização da infraestrutura de atendimento à saúde.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Concluído",
  relevancia: 3.8,
  cliente: "SESAB",
  localizacao: "Feira de Santana, BA",
  periodo: {
    duracao: "22 meses",
    conclusao: "2023-05",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhgm2aytwk07murengz816",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhgljlywmm07nasmvo97e4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhgljlywmm07nasmvo97e4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhglr4ywn007na6taig36c",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhglu8ytwd07mu82cfveeo",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhglu8ytwd07mu82cfveeo",
  ],
  especificacoes: {
    areaConstruida: "24.000 m²",
    numeroLeitos: 300,
    numeroUTIs: 40,
    centrosCirurgicos: 10,
  },
};

export const EscolaDivaPortelaProject: ProjetoEngenharia = {
  id: "prj_escola_diva_06",
  categoria: "Educacional",
  titulo: "Escola Municipal Diva Portela",
  descricao:
    "Projeto educacional com estrutura completa para ensino, esporte e convivência.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Concluído",
  relevancia: 3.5,
  cliente: "Prefeitura de Feira de Santana",
  localizacao: "Bairro Jardim Cruzeiro, Feira de Santana - BA",
  periodo: {
    duracao: "12 meses",
    conclusao: "2023-01",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvglyxyu07nankeqir3x",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvdgyxyn07na4ktony5m",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvaoyv2b07muqbp1kr6d",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvaoyv2b07muqbp1kr6d",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlv47yv2407mus4i8a5h2",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlv0zyxy907na7gv5hqh0",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluy5yxy207nac3kbknuq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluy5yxy207nac3kbknuq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluy5yxy207nac3kbknuq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluooyv1g07mu08tbtnmu",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluloyxxo07nazq8mtycu",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlui7yv1907muk3mpe3r4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlui7yv1907muk3mpe3r4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlucfyxxh07nam20yhk6k",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlucfyxxh07nam20yhk6k",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlucfyxxh07nam20yhk6k",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlu2vyxx307na250q9mub",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltz0yv0o07mufp1hyqsb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltwiyv0h07muazoofn0m",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlttcyxww07nag3tvfudb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltppyv0007muxvyi90z8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltppyv0007muxvyi90z8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltimyuzs07mupt0gl076",
  ],
  especificacoes: {
    areaConstruida: "3.800 m²",
    numeroSalasAula: 15,
  },
  itensInclusos: [
    "Piscina",
    "Quadra poliesportiva",
    "Vestiário",
    "Biblioteca",
    "Auditório",
    "Laboratório",
    "Refeitório",
  ],
};

export const MCMVProject: ProjetoEngenharia = {
  id: "prj_mcmv_07",
  categoria: "Residencial",
  titulo: "Minha Casa Minha Vida",
  descricao:
    "Empreendimento habitacional voltado à moradia popular, com infraestrutura urbana e áreas de convivência.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Concluído",
  relevancia: 2.5,
  cliente: "Caixa Econômica Federal",
  localizacao: "Zona Norte, Feira de Santana - BA",
  periodo: {
    duracao: "18 meses",
    conclusao: "2024-06",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvglyxyu07nankeqir3x",
  ],
  especificacoes: {
    unidadesHabitacionais: 400,
    areaConstruida: "18.500 m²",
    areaTerreno: "55.000 m²",
    areaPavimentada: "12.000 m²",
  },
  itensInclusos: ["Parque infantil", "Associação dos moradores"],
};

export const ViaBarradaoProject: ProjetoEngenharia = {
  id: "prj_via_barradao_08",
  categoria: "Infraestrutura",
  titulo: "Duplicação da Via Barradão",
  descricao:
    "Obra de infraestrutura viária com foco na melhoria da mobilidade urbana e do fluxo de veículos.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Concluído",
  relevancia: 1.5,
  cliente: "CONDER",
  localizacao: "Salvador, BA",
  periodo: {
    duracao: "18 meses",
    conclusao: "2023-09",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhztk7yyef07muqmlcb96o",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhztq7z16e07naxjj2sgm1",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzttpyyf207mudisb1ikz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzttpyyf207mudisb1ikz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzttpyyf207mudisb1ikz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
  ],
  especificacoes: {
    extensaoVia: "4,2 km",
    tipoPavimento: "Asfalto CBUQ",
  },
};

export const allProjects: ProjetoEngenharia[] = [
  ICOMProject,
  CentroConvencoesProject,
  VLTProject,
  EdificioGaragemProject,
  CleristonAndradeProject,
  EscolaDivaPortelaProject,
  MCMVProject,
  ViaBarradaoProject,
];

// 2. (Opcional) Exportação padrão caso prefira importar sem chaves
export default allProjects;
