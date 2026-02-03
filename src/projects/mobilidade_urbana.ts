import { ProjetoEngenharia } from "./types";

export const VLTProject: ProjetoEngenharia = {
  id: "prj_vlt_03",
  categoria: "MOBILIDADE_URBANA",
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