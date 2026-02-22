import { MinhaCasaEmpreendimento, ProjetoEngenharia } from "./types";

const minhacasaminhavida_primavera01: MinhaCasaEmpreendimento = {
  id: "mcmv_primaveira_01",
  titulo: "Residencial PRIMAVERA I (MCMV) ",
  localizacao: "Bom Jesus da Lapa – BA",
  descricao:
    "O Residencial Primavera I foi entregue em um ciclo de grandes investimentos em infraestrutura na cidade, que incluiu também a inauguração do campus do IFBaiano. O projeto visou retirar famílias de áreas de vulnerabilidade e oferecer moradias com infraestrutura urbana completa. ",
  periodo: {
    duracao: "12 meses"
  },
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787836/Metro/gwkbtyc1fsi0cdbcwusz.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787834/Metro/sy3rt0brpe2kiij3bfds.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades": "Foram construídas 204 unidades",
    Tipologia:
      "Casas térreas independentes compostas por 2 quartos, sala, cozinha, banheiro e área de serviço.",
    Infraestrutura:
      "O conjunto foi entregue com pavimentação, redes de água e esgoto, além de iluminação pública.",
    "Impacto Social":
      "Na época da inauguração, o projeto fez parte de um pacote que beneficiou, ao todo, mais de 530 famílias (somando-se ao Residencial Bom Jesus da Lapa).",
  },
};

const minhacasaminhavida_primavera02: MinhaCasaEmpreendimento = {
  id: "mcmv_primaveira_02",
  titulo: "Residencial PRIMAVERA II (MCMV) ",
  descricao: "O Residencial Primavera II foi concebido para atender à demanda crescente de moradia na região oeste do estado, integrando o programa Minha Casa, Minha Vida (MCMV). Recentemente, o bairro tem sido foco de programas de regularização fundiária (como o 'Casa Legal'), visando garantir a escritura definitiva aos moradores que já ocupavam as unidades há alguns anos.",
  localizacao: "Bom Jesus da Lapa – BA",
  cliente: "Governo Federal (via Caixa Econômica Federal) com apoio do Governo do Estado da Bahia e Prefeitura de Bom Jesus da Lapa.",
  periodo: {
    duracao: "12 meses"
  },
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787748/Metro/jewemfx7bjhkezmjpz4u.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787746/Metro/n1fvbkphwdyifhamwazr.jpg",
  ],
  especificacoes: {
     "Quantidade de Unidades": "O projeto original contemplou aproximadamente 500 unidades habitacionais, expandindo consideravelmente a malha urbana do setor.",
    Tipologia:
      "Casas térreas com 2 quartos, sala, cozinha, banheiro e área de serviço, em lotes que permitem personalização e ampliações.",
   "Infraestrutura e Equipamentos": "Quadra poliesportiva.Centro comercial integrado (em desenvolvimento nas áreas adjacentes).Pavimentação asfáltica e sistema de drenagem."
  },
};
const minhacasaminhavida_altodojunco: MinhaCasaEmpreendimento = {
  id: "mcmv_altodojunco",
  titulo: "Residencial ALTO DO JUNCO",
  descricao:"O Residencial Alto do Junco foi construído para atender famílias de baixa renda (Faixa 1) no município de Barra. O projeto visou não apenas a entrega de moradias, mas a criação de um novo vetor de crescimento para a cidade, integrando infraestrutura urbana completa em uma área anteriormente pouco explorada.",
  periodo: {
    duracao: "12 meses"
  },
  cliente: "Governo Federal (via Caixa Econômica Federal) em parceria com o Governo do Estado da Bahia e a Prefeitura de Barra.",
  localizacao: "Barra - BA (Vale do São Francisco).",

  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787832/Metro/v02ddxwkdtvpowbuqe2i.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787781/Metro/yse7bpyfb6hf5jctteji.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades": "Foram construídas 150unidades habitacionais.",
    "Tipologia": "Casas térreas independentes compostas por 2 quartos, sala, banheiro, cozinha e área de serviço.",
    "Infraestrutura": "O residencial conta com pavimentação asfáltica, rede de água, rede de esgoto com estação de tratamento e iluminação pública.",
    "Histórico de Entregas": "Este projeto completou um ciclo de 600 famílias beneficiadas na cidade em menos de um ano, somando-se a outros residenciais entregues no período."
  },
};

const minhacasaminhavida_riogrande: MinhaCasaEmpreendimento = {
  id: "mcmv_riogrande",
  titulo: "Residencial Rio Grande ",
  descricao:
    "O Residencial Rio Grande foi planejado para atender famílias que viviam em áreas de risco ou em condições de extrema vulnerabilidade social em Barra. Na época da inauguração, ele foi destacado como um símbolo de dignidade para a população que sofria com enchentes e habitações precárias na região.",
  periodo: {
    duracao: "12 meses"
  },
  localizacao: "Barra - BA (Vale do São Francisco).",
  cliente: "Governo Federal (via Caixa Econômica Federal) em parceria com o Governo do Estado da Bahia.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787758/Metro/kss4xxrvhudenaqoj0l0.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787812/Metro/ul9tpgvqioduprsbgw9n.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades": "Foram construídas e entregues 450 unidades habitacionais.",
    "Tipologia": "Casas térreas padronizadas com 2 quartos, sala, cozinha, banheiro e área de serviço.",
    "Infraestrutura": "O bairro foi entregue com pavimentação asfáltica, sistema de drenagem, redes de água e esgoto, além de iluminação pública.",
    "Perfil de Atendimento": "Focado exclusivamente na Faixa 1 do programa (famílias com renda bruta mensal de até R$ 1.600,00 na época)."
  },
};

const minhacasaminhavida_soldocerrado: MinhaCasaEmpreendimento = {
  id: "mcmv_soldocerrado",
  titulo: "Residencial Sol Cerrado",
  descricao:
    "O Sol do Cerrado foi concebido para atender à enorme demanda habitacional gerada pelo rápido crescimento econômico e demográfico de Luís Eduardo Magalhães. Devido à sua escala, o projeto tornou-se praticamente um novo bairro, exigindo a construção de equipamentos públicos anexos para atender às milhares de pessoas que se mudaram para a região.",
  periodo: {
    conclusao: "Dez/2015",
  },
  localizacao: "Bairro Jardim das Oliveiras (região de expansão), Luís Eduardo Magalhães - BA.",
  cliente: "Governo Federal (Caixa Econômica Federal) em parceria com a Prefeitura de Luís Eduardo Magalhães.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787777/Metro/ri2x2s6veqsf5saranmi.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787779/Metro/lafbllykx3urcbfoy4q4.jpg",
  ],
  especificacoes: {
   "Quantidade de Unidades": "Foram construídas 800 unidades habitacionais.",
  "Tipologia": "Casas térreas geminadas com 2 quartos, sala, cozinha, banheiro e área de serviço.",
  "Equipamentos Públicos": "No entorno do residencial, foram entregues uma Escola Municipal e uma Unidade de Saúde da Família (USF) para suprir a demanda dos moradores.",
  "Infraestrutura": "Pavimentação asfáltica, rede de água, esgoto e iluminação pública. Assim como o Vista Alegre, ele enfrenta o desafio de estar situado em uma área de expansão, distante do centro comercial tradicional."
  },
};

const minhacasaminhavida_residencialgurungas: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialgurungas",
  titulo: "Residencial Gurungas",
  descricao:
    "O Residencial Gurungas foi planejado para reduzir o déficit habitacional de Guanambi, atendendo famílias da Faixa 1 (baixa renda). O projeto foi concebido como um loteamento de casas sobrepostas, visando otimizar o espaço sem perder a característica de moradia individualizada. ",
  periodo: {
   duracao: "12 meses"
  },
  cliente: "Governo Federal (via Caixa Econômica Federal) em parceria com a Prefeitura de Guanambi.",
  localizacao: "Bairro Gurungas, Guanambi - BA.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787809/Metro/iu6hxhpqnvjxyzjma8le.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787773/Metro/fv7ehopekywylsv0jltx.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades": "Foram construídas 300 unidades habitacionais.",
"Tipologia": "Imóveis no estilo village (apartamentos térreos ou no primeiro andar), com 2 quartos, sala, cozinha, banheiro e área de serviço.",
"Acessibilidade": "Unidades adaptadas para pessoas com deficiência (PCD) e idosos, conforme as normas do programa.",
"Infraestrutura": "Pavimentação asfáltica, redes de água, esgoto e energia elétrica, além de iluminação pública.",
"Lazer e Social": "O condomínio conta com quiosque para eventos, parque infantil e quadra poliesportiva."

  },
};

const minhacasaminhavida_residencialvistaalegre: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialvistaalegre",
  titulo: "Residencial Vista Alegre",
  descricao: "O Residencial Vista Alegre foi concebido para reduzir o déficit habitacional em uma das cidades que mais cresce no Brasil. Embora tenha resolvido o problema de moradia para centenas de famílias, o projeto é frequentemente usado como exemplo em debates locais sobre urbanismo, devido à sua localização afastada do centro, o que gera desafios de mobilidade e acesso a serviços para os moradores.",
  periodo: {
    conclusao: "Dez/2015",
  },
  localizacao: "Saída para o Tocantins (próximo ao Posto Mimosão), Luís Eduardo Magalhães - BA.",
  cliente: "Governo Federal (via Caixa Econômica Federal) em parceria com a Prefeitura de Luís Eduardo Magalhães.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787770/Metro/dkni4y5pxxuq6imluobk.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787744/Metro/vihoqfxilegt4zfttuih.jpg",
  ],
  especificacoes: {
  "Quantidade de Unidades": "Foram entregues 600 unidades habitacionais na primeira grande fase (Vista Alegre I e II).",
  "Tipologia": "Casas geminadas compostas por 2 quartos, sala, cozinha, banheiro e área de serviço.",
  "Infraestrutura": "O bairro conta com pavimentação asfáltica, iluminação pública, rede de água e esgoto, além de estar próximo ao Posto Mimosão, na saída para o Tocantins."
  },
};

const minhacasaminhavida_residencialnovavida: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialnovavida",
  titulo: "Residencial Nova Vida",
  descricao:
    "O Residencial Nova Vida foi construído para atender famílias de baixa renda, muitas das quais viviam anteriormente em condições de vulnerabilidade ou pagando aluguéis informais elevados. O projeto foi dividido em duas etapas (Nova Vida I e II) para melhor organização da infraestrutura e entrega.",
  periodo: {
    conclusao: "Maio/2016",
  },
  localizacao: "Bairro Novo Horizonte, Valença - BA.",
  cliente:
    "Governo Federal (Caixa Econômica Federal) em parceria com o Governo do Estado da Bahia e a Prefeitura de Valença.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787752/Metro/wgbfnplsn2p43qr7mure.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787829/Metro/azkarnsu1yk5afqfcuz3.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades":
      "Foram construídas 600 unidades habitacionais.",
    "Tipologia":
      "Imóveis do tipo village (casas sobrepostas), contendo 2 quartos, sala, cozinha, banheiro e área de serviço.",
    "Infraestrutura":
      "O condomínio é dotado de pavimentação, iluminação pública, redes de água e esgoto, além de áreas de lazer e convivência social.",
  },
};

const minhacasaminhavida_residencialsaofrancisco: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialsaofrancisco",
  titulo: "Residencial São Francisco",
  descricao:
    "O Residencial São Francisco foi projetado para ser um bairro planejado, integrando não apenas moradias, mas também equipamentos públicos essenciais para evitar o isolamento dos moradores. Localizado próximo ao Distrito Industrial, ele atende famílias da Faixa 1 do programa.",
  periodo: {
    duracao: "NÃO INFORMADO",
  },
  localizacao:
    "Nas proximidades da rodovia BR-135, região do Distrito Industrial, Barreiras - BA.",
  cliente:
    "Governo Federal (Ministério das Cidades/Caixa) em parceria com a Prefeitura de Barreiras.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787799/Metro/dqc9uwbwrk492psbeaez.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787824/Metro/jqrd3kifzuj5lo8lzhfx.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades":
      "Foram construídas 1.476 unidades habitacionais.",
    "Tipologia":
      "Casas térreas com 2 quartos, sala, cozinha, banheiro e área de serviço, preparadas para expansão.",
    "Equipamentos Públicos Integrados":
      "Escola municipal com 12 salas de aula, creche com capacidade para cerca de 240 crianças e duas Unidades de Saúde da Família (USF).",
    "Infraestrutura":
      "Pavimentação asfáltica total, redes de água, esgoto, energia elétrica e iluminação pública em LED (recentemente modernizada).",
  },
};

const minhacasaminhavida_residencialvaleverde: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialvaleverde",
  titulo: "Residencial Vale Verde",
  descricao:
    "O Residencial Vale Verde é um empreendimento habitacional desenvolvido para atender famílias de baixa renda no município de Bom Jesus da Lapa, oferecendo moradias com infraestrutura básica, áreas de lazer e condições de acessibilidade.",
  periodo: {
    duracao: "18 a 24 meses",
  },
  localizacao: "Bom Jesus da Lapa - BA.",
  cliente:
    "Governo do Estado da Bahia / CONDER (Companhia de Desenvolvimento Urbano do Estado da Bahia), muitas vezes em parceria com prefeituras locais e a Caixa Econômica Federal.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787814/Metro/fhgnmnok2cv9vfwe6cm0.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787751/Metro/nvdaule7ev3ir2voiztz.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades":
      "Foram construídas 500 unidades habitacionais.",
    "Tipologia":
      "Apartamentos de 2 quartos (padrão Minha Casa Minha Vida).",
    "Infraestrutura":
      "O conjunto conta com portaria de segurança, vias pavimentadas e redes de água e esgoto.",
    "Lazer":
      "Áreas comuns que incluem quiosques com churrasqueira, playground e quadra gramada ou poliesportiva.",
    "Acessibilidade":
      "Unidades adaptáveis para Pessoas com Deficiência (PCD) e áreas comuns acessíveis.",
  },
};

const minhacasaminhavida_residencialleandrinho: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialleandrinho",
  titulo: "Residencial Leandrinho",
  descricao:
    "O Residencial Leandrinho foi desenvolvido no município de Dias D’Ávila para atender famílias de baixa renda dentro do Programa Minha Casa Minha Vida, oferecendo moradia digna e segurança às famílias beneficiadas e contribuindo para a expansão urbana planejada da região.",
  periodo: {
    duracao: "18 a 24 meses",
  },
  localizacao: "Dias D’Ávila - BA.",
  cliente:
    "Governo Federal (via Caixa Econômica Federal) em parceria com o Governo do Estado da Bahia e a Prefeitura de Dias D’Ávila.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787806/Metro/uadfx8vchsgx4bv0itbc.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades":
      "Foram construídas 121 unidades habitacionais destinadas a famílias de baixa renda dentro do Programa Minha Casa Minha Vida.",
    "Tipologia":
      "Casas sobrepostas ou unifamiliares com 2 quartos, sala, cozinha, banheiro e área de serviço.",
  },
};

const minhacasaminhavida_residencialgabriela: MinhaCasaEmpreendimento = {
  id: "mcmv_residencialgabriela",
  titulo: "Residencial Gabriela",
  descricao:
    "O Residencial Gabriela é um empreendimento habitacional de interesse social, projetado para oferecer moradia digna com infraestrutura completa. O projeto prioriza a otimização de custos e a rapidez na execução, utilizando métodos construtivos como alvenaria estrutural ou formas de concreto, sem abrir mão de áreas de lazer e convivência para as famílias.",
  periodo: {
    duracao: "18 a 24 meses",
  },
  localizacao: "Itabuna - BA.",
  cliente:
    "Governo do Estado da Bahia / CONDER (Companhia de Desenvolvimento Urbano do Estado da Bahia), muitas vezes em parceria com prefeituras locais e a Caixa Econômica Federal.",
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787788/Metro/xrtrgmnesazce9zxi8xt.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787790/Metro/qvyaeongyk7qo7retjr0.jpg",
  ],
  especificacoes: {
    "Quantidade de Unidades":
      "Foram construídas 1.056 unidades habitacionais.",
    "Tipologia":
      "Apartamentos de 2 quartos (padrão Minha Casa Minha Vida).",
    "Infraestrutura":
      "O conjunto conta com portaria de segurança, vias pavimentadas e redes de água e esgoto.",
    "Lazer":
      "Áreas comuns que incluem quiosques com churrasqueira, playground e quadra gramada ou poliesportiva.",
    "Acessibilidade":
      "Unidades adaptáveis para Pessoas com Deficiência (PCD) e áreas comuns acessíveis.",
  },
};


export const MinhaCasaMinhaVidaProjeto: ProjetoEngenharia = {
  id: "prj_minha_casa_minha_vida",
  categoria: "Habitação",
  titulo: "Minha Casa Minha Vida",
  status: "Em andamento",
  cliente: "Governo do Estado da Bahia - CONDER",
  localizacao: "Salvador",
  relevancia: 3,
  descricao: "O projeto Minha Casa Minha Vida abrange diversas construções realizadas em múltiplas localidades, demonstrando nossa capacidade de execução e logística em diferentes regiões.",
  tipoEspecial: "multi_projetos",

  empreendimentos: [
    minhacasaminhavida_primavera01,
    minhacasaminhavida_primavera02,
    minhacasaminhavida_altodojunco,
    minhacasaminhavida_riogrande,
    minhacasaminhavida_soldocerrado,
    minhacasaminhavida_residencialgurungas,
    minhacasaminhavida_residencialvistaalegre,
    minhacasaminhavida_residencialnovavida,
    minhacasaminhavida_residencialsaofrancisco,
    minhacasaminhavida_residencialvaleverde,
    minhacasaminhavida_residencialleandrinho,
    minhacasaminhavida_residencialgabriela,
  ],
};
