import {
  Hospital,
  TrafficCone,
  GraduationCap,
  Home,
  HardHat,
  Trees,
  Droplet,
  Route,
  PaintRoller,
  Wrench,
  Truck,
} from "lucide-react";

// Mapeamento que garante que todas as categorias do seu Type tenham um ícone
export const categoriaIcons: Record<
  ProjetoEngenharia["categoria"],
  React.ElementType
> = {
  "Infraestrutura": TrafficCone,
  "Construção": HardHat,
  "Urbanização": Trees,
  "Saneamento": Droplet,
  "Reformas": PaintRoller,
  "Habitação": Home,
  "Manutenção": Wrench,
  "Pavimentação": Route,
  "Abasteciemto": Truck,
};

export type ProjetoEngenharia = {
  id: string;
  categoria:
    | "Infraestrutura"
    | "Construção"
    | "Urbanização"
    | "Saneamento"
    | "Reformas"
    | "Habitação"
    | "Manutenção"
    | "Pavimentação"
    | "Abasteciemto";
  titulo: string;
  descricao: string;
  descricaoCompleta?: string;
  status: "Em andamento" | "Concluído";

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
    "Área Construida"?: string;

    [key: string]: string | number | string[] | undefined;
  };
  itensInclusos?: string[];
};

export const ICOMProject: ProjetoEngenharia = {
  id: "prj_icom_01",
  categoria: "Construção",
  titulo: "Instituto Couto Maia - ICOM",
  descricao:
    "Unidade de referência da Bahia especializada exclusivamente no tratamento de doenças transmissíveis de alta complexidade.",
  descricaoCompleta:
    "O Instituto Couto Maia (Icom) Localizado em Cajazeiras e inaugurado em julho de 2018, a unidade é referência em infectologia no Brasil. Com infraestrutura de ponta, inclui leitos de UTI e diagnósticos avançados por imagem.",

  status: "Concluído",
  relevancia: 5.0,
  cliente: "SESAB",
  localizacao: "Bairro de Cajazeiras, Salvador – BA.",
  periodo: {
    duracao: "16 meses",
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
    "Área Construida": "19.605,56 m²",
    "N° de Leitos": 120,
    "N° Unidades de Terapia Intensiva": ["10 adultos", "10 infantis"],
    "Centros Cirurgicos": 2,
  },
};

export const CentroConvencoesProject: ProjetoEngenharia = {
  id: "prj_centro_conv_02",
  categoria: "Construção",
  titulo: "Centro de Convenções e Teatro - Feira de Santana",
  descricao:
    "Projeto de centro de convenções destinado à realização de eventos, congressos e atividades institucionais, com infraestrutura moderna e capacidade ampliada.",
  descricaoCompleta:
    "Projeto de centro de convenções destinado à realização de eventos, o complexo é dividido em dois prédios principais interligados. O pavilhão de convenções é climatizado e voltado para feiras e exposições, enquanto o teatro possui estrutura completa de salas de ensaio, camarins e salas multiuso para atividades culturais e educativas.",

  status: "Concluído",
  relevancia: 4.9,
  cliente:
    "Governo do Estado da Bahia - executado via CONDER - Companhia de Desenvolvimento Urbano.",
  localizacao:
    "Rua Juscelino Kubitschek, Bairro São João, Feira de Santana - BA.",
  periodo: {
    duracao: "14 meses",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfqayno207mua17078ve",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfnwynnv07mufx6tmket",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfkryq9707naieumu358",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfi8ynno07mugx5oefj9",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrfblyq8o07nazg0eh9vb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf86ynmv07mu2bewaah3",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf4zynmo07muu2ex3lnn",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrf0iyq8h07na9bb952cq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdgrewmyq8a07nac7btftcz",
  ],
  especificacoes: {
    "Área Construída": "6.818,32m²",
    "Capacidade do Teatro": "665 pessoas",
    "Capacidade Total":
      "Espaço para até 1.600 pessoas, além de um auditório anexo com 224 lugares",
    "Vagas de Estacionamento": 212,
  },
};

export const VLTProject: ProjetoEngenharia = {
  id: "prj_vlt_03",
  categoria: "Infraestrutura",
  titulo: "VLT - Salvador",
  descricao:
    "Sistema de mobilidade urbana voltado ao transporte público de média capacidade, integrando diferentes regiões da cidade.",
  descricaoCompleta:
    "Inaugurada em 2018 para substituir a antiga sede histórica da Cidade Baixa, esta unidade opera em uma nova estrutura de ponta próxima à BR-324. O hospital funciona através de uma Parceria Público-Privada e oferece instalações tecnológicas avançadas, desenhadas especificamente para garantir o isolamento adequado e o tratamento seguro de pacientes em uma localização de fácil acesso rodoviário.",
  status: "Em andamento",
  relevancia: 5,
  cliente:
    "Governo do Estado da Bahia - através da CTB - Companhia de Transportes do Estado da Bahia",
  localizacao: "Região Metropolitana de Salvador",
  periodo: {
    inicio: "14 de junho de 2024",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4cqe2rgk107muxdtsfm5i",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c52krf1507mugw77desd",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c507rf0y07mu8yk2apza",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkd4c4tyrf0r07muqfvjlox9",
  ],
  especificacoes: {
    "Bairros Atendidos": [
      "Ilha de São João - Simões Filho",
      "Paripe",
      "Periperi",
      "Praia Grande",
      "Itacaranha",
      "Plataforma",
      "Lobato",
      "Santa Luzia",
      "Baixa do Fiscal",
      "Calçada",
      "Comércio",
    ],
    "N° de Estações": [
      "1 Estação – Calçada",
      "18 Paradas de passageiros",
      "2 Pátios de Manutenção de trens  - Calçada e Periperi",
    ],
    "Extensão da Linha": "16.66km de via permanente.",
    "Média População Atendida": "Cerca de 87.5mil hab/dia",
  },
};

export const EdificioGaragemProject: ProjetoEngenharia = {
  id: "prj_garagem_04",
  categoria: "Infraestrutura",
  titulo: "Edifício Garagem",
  descricao:
    "Edifício destinado ao estacionamento vertical, projetado para atender demandas urbanas e institucionais.",
  descricaoCompleta:
    "O Edifício Garagem integra o moderno Complexo Educacional da cidade, localizado no centro de Feira de Santana. Com aproximadamente 6.000 m² de área construída distribuídos em 7 pavimentos, a obra foi planejada para otimizar o fluxo urbano e oferecer infraestrutura de suporte à nova sede da Secretaria de Educação. O edifício dispõe de 453 vagas equipadas com um sistema inteligente de monitoramento eletrônico, priorizando a acessibilidade total com andares dedicados e elevadores de alta capacidade, consolidando-se como uma solução logística essencial para a mobilidade da região.",
  status: "Concluído",
  relevancia: 3.7,
  cliente:
    "Prefeitura Municipal de Feira de Santana (vinculado à Secretaria Municipal de Educação - SEDUC).",
  localizacao:
    "Rua Barão de Cotegipe, Centro (Antigo Feira Tênis Clube) – Feira de Santana - BA.",
  periodo: {
    duracao: "21 meses ",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3apdqid007n8jm9bnf50",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3asaqbbi07naqtlkb8gk",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3ajuqiby07n84lsl92mv",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3agwqbb407nato2isych",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz39x5qibd07n8qmr84j45",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3a3iqibk07n8rmp0622b",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3a70qbaq07naci1sav4i",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz39tjqba207nag5jzaeye",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3aanqbax07naqb07744o",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkqz3a08qbaj07nac497hzlu",
  ],
  especificacoes: {
    "Área Construída":
      "6000,00 m²",
    "N° de Vagas":
      "453 vagas no total sendo 411 para carros e 42 para motocicletas.",
    "Quantidade de Pavimentos": 7,
  },
};

export const CleristonAndradeProject: ProjetoEngenharia = {
  id: "prj_cleriston_05",
  categoria: "Construção",
  titulo: "Hospital Clériston Andrade",
  descricao:
    "Projeto hospitalar de grande porte, com ampliação e modernização da infraestrutura de atendimento à saúde.",
  descricaoCompleta:
    "Hospital Geral Clériston Andrade - HGCA II. A ampliação do complexo hospitalar Clériston Andrade, em Feira de Santana, compreende uma estrutura de alta complexidade com 8.000 m² de área construída. Executada em apenas 14 meses, a obra entregou uma das unidades mais tecnológicas do estado.",
  status: "Concluído",
  relevancia: 3.8,
  cliente: "SESAB",
  localizacao:
    "Avenida Eduardo Fróes da Mota, S/N, Bairro 35º BI, Feira de Santana - BA",
  periodo: {
    duracao: "14 meses",
    conclusao: "2023-05",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhgm2aytwk07murengz816",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhgljlywmm07nasmvo97e4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhglr4ywn007na6taig36c",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhglu8ytwd07mu82cfveeo",
  ],
  especificacoes: {
    "Área Construída": "24.000 m²",
    "N° de UTIs": 40,
    "Salas de Cirurgia": 11,
    "Salas de Tomografia": 2,
    "Salas de Raios-X": 2,
    "Sala de Ressonância": 1,
  },
};

export const EscolaDivaPortelaProject: ProjetoEngenharia = {
  id: "prj_escola_diva_06",
  categoria: "Construção",
  titulo: "Escola Municipal Diva Portela",
  descricao:
    "Projeto educacional com estrutura completa para ensino, esporte e convivência.",
  descricaoCompleta:
    "A obra de reconstrução total da Escola Diva Portela abrangeu cerca de 3.500 m² de área construída, transformando a unidade em um complexo moderno e acessível em 19 meses de execução. O projeto estrutural priorizou a verticalização para otimizar o terreno, distribuindo 15 salas de aula climatizadas, laboratórios e auditório, além de uma infraestrutura esportiva de alto padrão com ginásio poliesportivo e piscina olímpica. A execução focou na integração de sistemas sustentáveis, como o aquecimento solar, e no cumprimento rigoroso das normas de acessibilidade, consolidando um equipamento público de alta durabilidade e baixo custo de manutenção.",
  status: "Concluído",
  relevancia: 3,
  cliente: "Prefeitura de Feira de Santana",
  localizacao:
    "Rua Esplanada, Bairro JARDIM CRUZEIRO - próximo à região do Estádio Joia da Princesa, Feira de Santana - BA.",
  periodo: {
    duracao: "19 meses",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvglyxyu07nankeqir3x",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvdgyxyn07na4ktony5m",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlvaoyv2b07muqbp1kr6d",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlv47yv2407mus4i8a5h2",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlv0zyxy907na7gv5hqh0",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluy5yxy207nac3kbknuq",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluooyv1g07mu08tbtnmu",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhluloyxxo07nazq8mtycu",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlui7yv1907muk3mpe3r4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlucfyxxh07nam20yhk6k",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlu2vyxx307na250q9mub",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltz0yv0o07mufp1hyqsb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltwiyv0h07muazoofn0m",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhlttcyxww07nag3tvfudb",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltppyv0007muxvyi90z8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhltimyuzs07mupt0gl076",
  ],
  especificacoes: {
    "Área Construída": "3.500 m²",
    "N° de Salas de Aula": 15,
  },
  itensInclusos: [
    "Piscina olímpica aquecida",
    "Quadra poliesportiva",
    "Vestiário",
    "Biblioteca",
    "Auditório",
    // "Laboratório de Ciências",
    // "Laboratório de Informática/Robótica",
    "Refeitório",
  ],
};

export const HospitalItaberabaProject: ProjetoEngenharia = {
  id: "prj_itaberaba",
  categoria: "Construção",
  titulo: "Hospital Regional de Itaberaba",
  descricao: "Reforma integral e ampliação da infraestrutura hospitalar para atendimento de alta complexidade na Chapada Diamantina.",
  descricaoCompleta: "O projeto contemplou a adequação total do espaço físico e a ampliação da unidade, que agora conta com mais de 100 leitos, incluindo UTIs adulto e pediátrica. A obra focou na modernização das salas de cirurgia, implantação de um moderno centro de bioimagem (CT e Raio-X) e reestruturação das enfermarias. Esta intervenção foi fundamental para descentralizar a saúde no estado, permitindo que o hospital passasse a oferecer serviços de urgência, emergência e cirurgias eletivas para Itaberaba e outros 11 municípios da região.",
  status: "Concluído",
  relevancia: 2.9,
  cliente: "Governo do Estado da Bahia - SESAB",
  localizacao:
    "Itaberaba - BA",
  periodo: {
    duracao: "22 meses",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabfi26t0b07n2ccoj9blz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabfkf6t0i07n2bl5ivjj9",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabdnt6sy707n20fii97u8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabdr46whw07lpvzolf4m8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabdu26sye07n26a08utyx",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrabdwn6wi307lpaqukjrzp"
  ],
  especificacoes: {
    "Área Construída": "5.297,54 m²",
    "Enfermaria": "60 leitos",
    "UTI-Unidade de Terapia": "10 leitos",
    "Urgência/emergência": "16 leitos",
    "Centro Cirúrgico": "04 leitos",
    "Tomografia": "1",
    "Raio-X": "1"
  },
};

export const HospitalItabunaProject: ProjetoEngenharia = {
  id: "prj_itabuna",
  categoria: "Construção",
  titulo: "Hospital de Base Luís Eduardo Magalhães",
  descricao: "Elaboração de projetos e execução de obras para ampliação e reforma integral do Hospital de Base, modernizando a infraestrutura para alta complexidade e emergência..",
  descricaoCompleta: "O projeto consistiu na contratação integrada para o desenvolvimento dos projetos básicos e executivos, seguidos pela execução física das obras de reforma e expansão do Hospital de Base Luís Eduardo Magalhães. A intervenção focou na reestruturação completa do pronto-socorro, na criação de novas alas de internamento e na modernização do centro cirúrgico. Com a ampliação, a unidade recebeu reforço estrutural para comportar novos leitos de UTI e unidades de cuidados intermediários, além de uma readequação total dos fluxos hospitalares conforme as normas da RDC 50 da ANVISA. O empreendimento visou não apenas a melhoria estética, mas a eficiência operacional necessária para atender a demanda crescente da macrorregião Sul da Bahia, integrando sistemas avançados de climatização, gases medicinais e instalações elétricas de suporte crítico.",
  status: "Concluído",
  relevancia: 4,
  cliente: "Governo do Estado da Bahia - SESAB",
  localizacao:
    "Município de Itabuna – Bahia",
  periodo: {
    duracao: "26 meses",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfiov8si007lpriijxsl2",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfidi8pyf07n2obf8ikkc",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfim08q0i07n2vj6u6ipg",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfiax8sel07lph3ro25qa",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfi388pw507n28mv7ix6a",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfijk8sgv07lp3o9z0rtu",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfigh8sfq07lpvrzxkbnl",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfi8a8pxa07n2eq0ei050",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfi5r8sck07lpix920vjh",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfi098scb07lpv215pxg8",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfj078skz07lp4bvscsc1",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfhxq8sa807lppnzl5v7p",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfis38si907lp33vpmzaw",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfhuo8pu207n2057xzpkc",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfhrs8psu07n2qhjwjtxd",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfhox8s7707lp5ve7lmsa",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfhl98s6w07lpgu8mpume",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfj308q6k07n2eaetr523",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfixj8q5f07n2wqi49ud4",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkrcfiv78sik07lpt6kbxyod"

  ],
  especificacoes: {
    "Área Construída": "9.475,43 m²",
    "N° de UTIs": "N° de UTIs leitos",
    "Centro Cirúrgico": "6 leitos",
    "Sala Vermelho": "3 leitos",
    "Sala Amarela": "4 leitos",
    "Sala de Observação": "12 leitos",
    "Outros": [
      "Ambulatório",
       "Tomografia",
    "Raio-X"
    ],


   
  },
};

export const ViaBarradaoProject: ProjetoEngenharia = {
  id: "prj_via_barradao_08",
  categoria: "Infraestrutura",
  titulo: "Duplicação da Via Barradão",
  descricao:
    "Duplicação estratégica da via para otimização do fluxo viário em Canabrava, eliminando gargalos de trânsito e modernizando o acesso ao Estádio Manoel Barradas (Barradão).",
  descricaoCompleta:
    "Trata-se da duplicação da Rua Artêmio Castro Valente, uma intervenção estratégica do Governo do Estado da Bahia para solucionar os gargalos de trânsito no bairro de Canabrava e facilitar o acesso ao Estádio Manoel Barradas (Barradão), especialmente em dias de jogos.",
  status: "Concluído",
  relevancia: 1.5,
  cliente: "CONDER",
  localizacao: "Trecho entre a Praça Júlio Rêgo e a Avenida Mário Sérgio (Via Barradão), Canabrava – Salvador/BA",
  periodo: {
    duracao: "9 meses",
  },
  imagens: [
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhztk7yyef07muqmlcb96o",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhztq7z16e07naxjj2sgm1",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzttpyyf207mudisb1ikz",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzu6oz17i07nahicxye78",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdi2h5qyz2r07mu8jcdsk4v",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdi2gszyz2c07muna112ras",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdhzugdyyg607mucghwriy2",
    "https://us-west-2.graphassets.com/cmkc1ejod2bpe07lper075xkw/output=format:jpg/cmkdi2h32yz2k07muekh19s5n"
  ],
  especificacoes: {
    "Extensão da Via": "Aproximadamente 1,2 quilômetros",
    "Configuração": "Duas faixas de tráfego por sentido",
    "Tipo de Pavimento": "Asfalto CBUQ",
    "Estrutura adicional": "Implantação de canteiro central, ciclofaixa, iluminação em LED, sistema de drenagem, sinalização completa, paisagismo e urbanização das calçadas - com piso tátil",

  },
};

export const allProjects: ProjetoEngenharia[] = [
  ICOMProject,
  CentroConvencoesProject,
  VLTProject,
  EdificioGaragemProject,
  CleristonAndradeProject,
  EscolaDivaPortelaProject,
  ViaBarradaoProject,
  HospitalItaberabaProject,
  HospitalItabunaProject
];

export default allProjects;
