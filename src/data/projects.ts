export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  client: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  status: "completed" | "in-progress" | "planned";
  area: string;
  budget: string;
  team: string;
  gallery: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: "edificio-residencial-alto-padrao",
    title: "Edifício Residencial Alto Padrão",
    category: "Residencial",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    description: "120 apartamentos de luxo com acabamento premium",
    fullDescription:
      "Empreendimento residencial de alto padrão localizado em área nobre da cidade. O projeto contempla 120 unidades distribuídas em 30 pavimentos, com plantas de 3 e 4 dormitórios, todas com suítes e vagas de garagem. O edifício conta com infraestrutura completa de lazer, incluindo piscinas, quadras esportivas, salão de festas, academia e espaço gourmet.",
    client: "Construtora Horizonte Ltda",
    location: "Jardim Paulista, São Paulo - SP",
    startDate: "15/03/2021",
    endDate: "20/11/2023",
    duration: "32 meses",
    status: "completed",
    area: "28.500 m²",
    budget: "R$ 85.000.000,00",
    team: "45 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Pavimentos", value: "30 andares + subsolo" },
      { label: "Unidades", value: "120 apartamentos" },
      { label: "Elevadores", value: "6 elevadores" },
      { label: "Vagas", value: "240 vagas de garagem" },
      { label: "Estrutura", value: "Concreto armado" },
      { label: "Fundação", value: "Estacas raiz" },
    ],
  },
  {
    id: "centro-comercial-metropolis",
    title: "Centro Comercial Metropolis",
    category: "Comercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Complexo comercial com 40.000m² de área construída",
    fullDescription:
      "Moderno centro comercial desenvolvido para abrigar lojas de diversos segmentos, praça de alimentação, cinema multiplex e estacionamento com 1.200 vagas. O projeto contempla sistemas avançados de climatização, segurança e acessibilidade, proporcionando conforto e segurança para lojistas e visitantes.",
    client: "Grupo Metropolis Shopping",
    location: "Alphaville, Barueri - SP",
    startDate: "10/01/2020",
    endDate: "15/08/2022",
    duration: "31 meses",
    status: "completed",
    area: "40.000 m²",
    budget: "R$ 120.000.000,00",
    team: "80 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567926112922-0530290ff42f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Lojas", value: "180 unidades comerciais" },
      { label: "Pavimentos", value: "4 pisos + subsolo" },
      { label: "Estacionamento", value: "1.200 vagas" },
      { label: "Praça de alimentação", value: "35 operações" },
      { label: "Cinema", value: "8 salas" },
      { label: "Sistema HVAC", value: "Climatização central" },
    ],
  },
  {
    id: "galpao-industrial-logistico",
    title: "Galpão Industrial Logístico",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop",

    description: "Infraestrutura completa para operações logísticas",
    fullDescription:
      "Complexo logístico industrial de última geração projetado para atender às demandas de armazenagem e distribuição de grandes operadores. O empreendimento conta com pé direito elevado, docas niveladas, sistema de sprinklers, iluminação LED de alta eficiência e pátio de manobras dimensionado para carretas de grande porte.",
    client: "LogMaster Distribuição S.A.",
    location: "Distrito Industrial, Jundiaí - SP",
    startDate: "05/06/2022",
    endDate: "20/03/2024",
    duration: "21 meses",
    status: "in-progress",
    area: "25.000 m²",
    budget: "R$ 45.000.000,00",
    team: "35 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Pé direito", value: "12 metros" },
      { label: "Docas", value: "24 docas niveladas" },
      { label: "Portões", value: "4 portões setoriais" },
      { label: "Iluminação", value: "LED alta eficiência" },
      { label: "Piso", value: "Concreto protendido" },
      { label: "Segurança", value: "Sistema de sprinklers" },
    ],
  },
  {
    id: "condominio-vista-nobre",
    title: "Condomínio Vertical Vista Nobre",
    category: "Residencial",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&h=600&fit=crop",
    description: "Torre residencial premium com 150 unidades de alto padrão",
    fullDescription:
      "Empreendimento residencial de luxo com 150 apartamentos distribuídos em 32 pavimentos, oferecendo plantas de 3 e 4 dormitórios. O projeto inclui espaços de convivência completos: piscinas climatizadas, spa, academia equipada, coworking, salão de festas e área gourmet. Estrutura projetada com foco em sustentabilidade, incluindo reuso de água e painéis fotovoltaicos.",
    client: "NobreVita Construções",
    location: "Vila Mariana, São Paulo - SP",
    startDate: "02/02/2021",
    endDate: "10/12/2023",
    duration: "34 meses",
    status: "completed",
    area: "33.800 m²",
    budget: "R$ 98.000.000,00",
    team: "62 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1590650046871-92c887180603?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Pavimentos", value: "32 andares" },
      { label: "Unidades", value: "150 apartamentos" },
      { label: "Vagas", value: "300 vagas de garagem" },
      { label: "Sustentabilidade", value: "Reuso de água e energia solar" },
      { label: "Lazer", value: "Piscinas, spa, academia e coworking" },
    ],
  },
  {
    id: "business-tower-corporate-center",
    title: "Business Tower Corporate Center",
    category: "Comercial",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
    description: "Edifício corporativo classe A com 22 pavimentos",
    fullDescription:
      "Prédio corporativo de alto padrão projetado com arquitetura moderna, piso elevado, sistemas inteligentes de climatização e certificação LEED Gold. Inclui auditório, heliponto homologado, 6 elevadores de alta velocidade e estacionamento subterrâneo com 800 vagas. Ideal para companhias de grande porte e multinacionais.",
    client: "Prime Offices Group",
    location: "Bela Vista, São Paulo - SP",
    startDate: "12/09/2020",
    endDate: "01/03/2023",
    duration: "30 meses",
    status: "completed",
    area: "55.000 m²",
    budget: "R$ 180.000.000,00",
    team: "95 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Pavimentos", value: "22 andares" },
      { label: "Certificação", value: "LEED Gold" },
      { label: "Elevadores", value: "6 de alta velocidade" },
      { label: "Heliponto", value: "Homologado pela ANAC" },
      { label: "Vagas", value: "800 vagas subterrâneas" },
    ],
  },
  {
    id: "planta-industrial-techsteel",
    title: "Planta de Produção TechSteel",
    category: "Industrial",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",

    description: "Planta industrial de produção e armazenagem de metais",
    fullDescription:
      "Complexo industrial dedicado à produção, processamento e armazenamento de componentes metálicos de alta performance. Inclui setores automatizados, linhas robotizadas, áreas de fundição, fornos industriais, laboratórios de testes e docas para transporte pesado. Sistema de segurança industrial classe A.",
    client: "TechSteel Metalúrgica S.A.",
    location: "Contagem, Belo Horizonte - MG",
    startDate: "01/04/2022",
    endDate: "30/10/2024",
    duration: "31 meses",
    status: "in-progress",
    area: "42.000 m²",
    budget: "R$ 210.000.000,00",
    team: "120 profissionais",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=800&fit=crop",
    ],
    specifications: [
      { label: "Linhas Robotizadas", value: "4 linhas automatizadas" },
      { label: "Forno Industrial", value: "Temperatura máxima 1400°C" },
      { label: "Segurança", value: "Classe A, NR-12 e NR-35" },
      { label: "Docas", value: "12 docas de carga" },
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};
