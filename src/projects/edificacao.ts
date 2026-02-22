import { ProjetoEngenharia } from "./types";

export const CentroConvencoesProject: ProjetoEngenharia = {
  id: "prj_centro_conv_02",
  categoria: "Edificação",
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
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787075/Metro/sulibjyydsxklks6xehl.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786941/Metro/rpskdzdqvf1gxabi2l1p.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786915/Metro/uue5ssctrth2bu226cch.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787082/Metro/emvwmrmhmumsyb9uyjc6.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787012/Metro/bnvfboxg6twufekloyma.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787044/Metro/i3axf96nxmw4jvkspcag.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787150/Metro/vzefakqvfcmxfvuroti8.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786925/Metro/zlmxqlroqppgo2ufh11v.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786982/Metro/f8pg4nnvuto3lj72v1gm.jpg",
  ],
  especificacoes: {
    "Área Construída": "6.818,32m²",
    "Capacidade do Teatro": "665 pessoas",
    "Capacidade Total":
      "Espaço para até 1.600 pessoas, além de um auditório anexo com 224 lugares",
    "Vagas de Estacionamento": 212,
  },
};

export const EdificioGaragemProject: ProjetoEngenharia = {
  id: "prj_garagem_04",
  categoria: "Edificação",
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
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787007/Metro/azr3oygv65pid1ozugbp.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787110/Metro/iywkvtu0bk1vcfzyert1.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787052/Metro/lkbgbpd4c1pwrxcqyxpd.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787062/Metro/pjanyclgolev4zhqk8gt.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786878/Metro/nyqakctila5h3myl0uvp.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786974/Metro/wz29oksxozetd7g4cr3r.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787100/Metro/zkjwygf9eqtfvocglkci.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787136/Metro/q1x3aiaw5powionzqc7s.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787086/Metro/nstxjwqvo6lpxbztd2ty.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786889/Metro/ovw5cyhrsdvyywfobct7.jpg",
  ],
  especificacoes: {
    "Área Construída": "6000,00 m²",
    "N° de Vagas":
      "453 vagas no total sendo 411 para carros e 42 para motocicletas.",
    "Quantidade de Pavimentos": 7,
  },
};

export const SedePrefeituraMunicipalLEM: ProjetoEngenharia = {
  id: "prj_sede_prefeitura_municipal_lem_08",
  categoria: "Edificação",
  titulo: "Prefeitura de Luís Eduardo Magalhães",
  descricao: "O projeto da nova sede da Prefeitura de Luís Eduardo Magalhães.",
  descricaoCompleta:
    "O projeto da nova sede da Prefeitura de Luís Eduardo Magalhães segue uma linha de arquitetura institucional moderna, priorizando materiais que oferecem durabilidade, eficiência térmica e transparência.",
  status: "Concluído",
  relevancia: 1.5,
  cliente: "Prefeitura Municipal de Luís Eduardo Magalhães",
  localizacao: "Municipio Luís Eduardo Magalhães",
  periodo: {
    duracao: "18 meses",
  },
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786960/Metro/mitgnswaj8mnrm6cluzo.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787121/Metro/ntvfzqcnl7jf22y8vdyv.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786985/Metro/dxqolawbuguwllbhfnk6.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786929/Metro/tpkxymg4b8het6xdukth.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786932/Metro/qki2iyeehhobfr6pgomn.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787113/Metro/ekktwcunymopnoy1hd8m.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786944/Metro/avlwstn7n9iyxpnyhz2j.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786976/Metro/ak9mp0qv8p6dtutialek.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786966/Metro/eegppz59x2gw7y4t0zow.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787116/Metro/ihhpo0vrz4ujemisqdew.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787095/Metro/dshpwn5nedpciz2mbmmo.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787018/Metro/sdj3vepbcgs2jvc1fpup.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786963/Metro/fjciplzay5blw5qjpsm3.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786954/Metro/qv35xiqws66nt1dionrc.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787104/Metro/turtj99rxajph9mnserh.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786893/Metro/jkb6a2vkutxhqt22hb9a.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786988/Metro/abyjlcxfozluzca6qt5o.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787127/Metro/u6bdc7x4cagc7ptnr9f4.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786947/Metro/ctez7bmdycy4rdxiizqv.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786995/Metro/yymo693crwp6bei7tkbn.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786951/Metro/bhe3sf0k3lvmfdbjg0yx.jpg",
  ],
  especificacoes: {
    area_construida: "2.890 m²",

    fachada_tipo: "Pele de vidro (glazing)",
    fachada_iluminacao_natural: "Alta incidência de luz natural",
    fachada_simbolismo: "Transparência da gestão pública",
    fachada_revestimento_complementar: "ACM (Aluminium Composite Material)",
    fachada_resistencia_climatica: "Adequada ao clima do oeste baiano",

    estrutura_principal: "Concreto armado",
    estrutura_uso: "Edificação pública de múltiplos pavimentos",

    pisos: "Porcelanato",
    pisos_resistencia: "Alto tráfego de pessoas",
    pisos_manutencao: "Fácil manutenção",

    divisorias_tipo: "Drywall e vidro",
    divisorias_flexibilidade: "Permite reorganização dos ambientes",
    divisorias_integracao_visual: "Mantém integração visual entre setores",

    climatizacao_tipo: "Sistema central de ar-condicionado",
    climatizacao_eficiencia: "Alta eficiência energética",
    climatizacao_integracao: "Integrado ao forro termoacústico",
    climatizacao_adequacao_climatica: "Adaptado ao clima quente de LEM",

    acessibilidade_rampas: "Rampas com material antiderrapante",
    acessibilidade_elevadores: "Elevadores para todos os pavimentos",
    acessibilidade_abrangencia: "Acesso garantido aos três pavimentos",

    iluminacao_tipo: "LED",
    iluminacao_emissao_calor: "Baixa emissão de calor",
    iluminacao_economia_energia: "Redução no consumo energético",

    pavimentacao_externa_tipo: "Pavimentação intertravada (paver)",
    pavimentacao_externa_drenagem: "Auxilia na permeabilidade do solo",
    pavimentacao_externa_conforto_termico: "Reduz ilhas de calor",
    pavimentacao_externa_uso: "Área externa e estacionamentos",
  },
};

export const CaseVitoriaConquista: ProjetoEngenharia = {
  id: "prj_case_vitoria_conquista_08",
  categoria: "Edificação",
  titulo: "Comunidade de Atendimento Socioeducativo – Vitoria da Conquista",
  descricao:
    "A Comunidade de Atendimento Socioeducativo (CASE) Professor Wanderlino Nogueira Neto, em Vitória da Conquista, é considerada uma referência nacional em arquitetura voltada para a ressocialização.",
  descricaoCompleta:
    "A Comunidade de Atendimento Socioeducativo (CASE) Professor Wanderlino Nogueira Neto, em Vitória da Conquista, é considerada uma referência nacional em arquitetura voltada para a ressocialização. O projeto foi estruturado para humanizar o cumprimento de medidas socioeducativas, seguindo rigorosamente as diretrizes do SINASE (Sistema Nacional de Atendimento Socioeducativo).",
  status: "Concluído",
  relevancia: 1.5,
  cliente: "Governo do Estado da Bahia -  CONDER",
  localizacao:
    "Avenida A, Loteamento Chácara Candeias (Candeias III), Vitória da Conquista - BA.",
  periodo: {
    inicio: "Dezembro de 2018",
    conclusao: "Junho de 2022",
  },
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786970/Metro/qq2luseo9udjv48vzzta.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787065/Metro/luw0hytu9egk7xmlrvfk.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786991/Metro/b8jkfiecetc7iur8dvbc.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786934/Metro/fscqnhckm6v7otqykm3u.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787092/Metro/dmmihv1mhm40sszpv8dj.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787089/Metro/jcgtyko9wojgwahbqewv.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787154/Metro/qh0qhdr8c6eywaudblx1.jpg",
  ],
  especificacoes: {
    area_construida: "6.929,39 m²",
    alojamentos: "45 unidades",
    estrutura:
      "Escola, centro de saúde, salas profissionalizantes, refeitório e áreas administrativas",
    lazer: "Quadras e espaços culturais (arte e música)",
    referencia: "Projeto modelo para reformas no estado",
    seguranca_acessibilidade: "Segurança moderna e acessibilidade total",
  },
};

export const ArquivoPublicoSalvador: ProjetoEngenharia = {
  id: "prj_arquivo_publico_salvador_08",
  categoria: "Edificação",
  titulo: "Casa da História e arquivo publico de Salvador",
  descricao:
    "O projeto consistiu na restauração de um casarão histórico e na construção de um edifício anexo para abrigar a Casa da História e o Arquivo Público Municipal em Salvador.",
  descricaoCompleta:
    "O projeto consistiu na restauração de um casarão histórico e na construção de um edifício anexo para abrigar a Casa da História e o Arquivo Público Municipal em Salvador, integrando o programa PRODETUR para fomentar o turismo sustentável. Com uma área de intervenção de aproximadamente 750 m², a obra utiliza materiais que mesclam tradição e modernidade, como telhas coloniais e estruturas metálicas, além de acabamentos em madeira, porcelanato e mármore. A infraestrutura técnica inclui sistemas de abastecimento e esgotamento interligados à rede pública (Embasa), reservatórios com capacidade prevista de 154 m³ e soluções arquitetônicas que priorizam a requalificação urbana e social do Centro Histórico.",
  status: "Concluído",
  relevancia: 1.5,
  cliente: "Prefeitura Municipal de Salvador - SECULT e SEINFRA",
  localizacao:
    "Rua da Bélgica, Comércio (próximo ao Mercado Modelo), Salvador - BA",
  periodo: {
    duracao: "24 meses",
  },
  imagens: [
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787001/Metro/sbcfqp9og8sad6t7jhuz.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786906/Metro/vfhjprqae3lmptiqwsqr.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786899/Metro/zx2eghivofhttvz1doa0.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787068/Metro/hqwd5zuscgdh4lgrjdm5.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787015/Metro/fhxooaivxy70skm5f1ct.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787097/Metro/azzq2oepwsrtfh9ey7p5.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787140/Metro/rdndu5tdpgmh05abtqkw.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771786957/Metro/ucqgisbk7v2gb7wg0yob.jpg",
    "https://res.cloudinary.com/dotoe2mkd/image/upload/v1771787027/Metro/kznnwnjrmqtmdzqwczfm.jpg",
  ],
  especificacoes: {
    area_construida: "7.237,42m²",
    Pavimentos: "11 andares",
    Elevadores: "2",
  },
};
