import { ProjetoEngenharia } from "./types";

export const VLTProject: ProjetoEngenharia = {
  id: "prj_vlt_03",
  categoria: "Mobilidade Urbana",
  titulo: "Veiculo Leve Sobre Trilhos(VLT) - Salvador",
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
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771788504/Metro/vq67k21ubflrie08vpzr.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771788485/Metro/frddt8itvxsyezc5rasp.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771788501/Metro/blmfsr8imxqhxg2e1d30.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771788492/Metro/xqurycwvkmkloflzh8wz.jpg",
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