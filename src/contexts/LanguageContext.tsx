import { createContext, useContext, useState, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    "nav.services": "Serviços",
    "nav.projects": "Projetos",
    "nav.areas": "Áreas de Atuação",
    "nav.institutional": "Institucional",
    "nav.team": "Equipe",
    "nav.contact": "Contato",

    // Hero Section
    "hero.title1": "Construindo o Futuro",
    "hero.title2": "com Excelência",
    "hero.subtitle":
      "Soluções completas em engenharia civil para transformar seus projetos em realidade",
    "hero.projects": "Nossos Projetos",
    "hero.contactUs": "Fale Conosco",

    // Services Section
    "services.title": "Nossos Serviços",
    "services.subtitle":
      "Soluções completas em engenharia civil para atender todas as suas necessidades",
    "services.construction": "Construção Civil",
    "services.constructionDesc":
      "Obras residenciais, comerciais e industriais com qualidade e prazo garantidos",
    "services.structural": "Projetos Estruturais",
    "services.structuralDesc":
      "Cálculo estrutural e projetos detalhados seguindo as normas técnicas vigentes",
    "services.consulting": "Consultoria Técnica",
    "services.consultingDesc":
      "Assessoria especializada em todas as etapas do seu empreendimento",
    "services.management": "Gerenciamento de Obras",
    "services.managementDesc":
      "Acompanhamento completo desde o planejamento até a entrega final",

    // VLT Section
    "vlt.title": "Projeto VLT de Salvador",
    "vlt.subtitle":
      "A Metro Engenharia tem orgulho de participar de uma das mais importantes obras de mobilidade urbana da Bahia. O VLT de Salvador e Região Metropolitana representa modernização, inclusão social e eficiência no transporte público.",
    "vlt.modernMobility": "Mobilidade Moderna",
    "vlt.modernMobilityDesc":
      "Implantação de um sistema leve sobre trilhos que transforma o deslocamento diário de milhares de pessoas, com mais conforto, previsibilidade e segurança.",
    "vlt.infrastructure": "Infraestrutura Estratégica",
    "vlt.infrastructureDesc":
      "Construção de estações, via permanente, obras civis e sistemas auxiliares, integrando bairros e corredores urbanos de forma planejada.",
    "vlt.engineering": "Engenharia de Alta Precisão",
    "vlt.engineeringDesc":
      "Projetos estruturais, geométricos e de infraestrutura elaborados com rigor técnico, garantindo desempenho, segurança e durabilidade da operação.",
    "vlt.management": "Gestão e Execução da Obra",
    "vlt.managementDesc":
      "Gestão completa do empreendimento, com foco em eficiência, responsabilidade socioambiental e cumprimento de prazos e metas estabelecidas.",

    // ICOM Section
    "icom.title": "Instituto Couto Maia (ICOM)",
    "icom.subtitle":
      "Um dos maiores complexos hospitalares especializados em doenças infectocontagiosas do Brasil, entregue com excelência em engenharia, segurança e tecnologia.",
    "icom.infrastructure": "Infraestrutura Hospitalar",
    "icom.infrastructureDesc":
      "Construção de unidades modernas, áreas de isolamento, UTIs e ambientes de alta complexidade.",
    "icom.engineering": "Engenharia de Precisão",
    "icom.engineeringDesc":
      "Projetos estruturais e instalações hospitalares com rígidos padrões técnicos.",
    "icom.management": "Gerenciamento da Obra",
    "icom.managementDesc":
      "Coordenação completa da execução, garantindo prazo, qualidade e confiabilidade.",
    "icom.systems": "Sistemas Especializados",
    "icom.systemsDesc":
      "Implantação de redes de gases medicinais, climatização, tratamento de ar e sistemas essenciais para ambientes clínicos.",

    // Projects Section
    "projects.title": "Projetos Executados",
    "projects.subtitle":
      "Conheça alguns dos nossos principais projetos já entregues com sucesso",
    "projects.residential": "Residencial",
    "projects.commercial": "Comercial",
    "projects.industrial": "Industrial",
    "projects.project1": "Edifício Residencial Alto Padrão",
    "projects.project1Desc": "120 apartamentos de luxo com acabamento premium",
    "projects.project2": "Centro Comercial Metropolis",
    "projects.project2Desc":
      "Complexo comercial com 40.000m² de área construída",
    "projects.project3": "Galpão Industrial Logístico",
    "projects.project3Desc":
      "Infraestrutura completa para operações logísticas",

    // Areas Section
    "areas.title": "Áreas de Atuação",
    "areas.subtitle":
      "Experiência consolidada atuando em todo Brasil em diversos segmentos da construção civil",
    "areas.residential": "Residencial",
    "areas.residentialDesc": "Casas, apartamentos e condomínios",
    "areas.commercial": "Comercial",
    "areas.commercialDesc": "Escritórios, lojas e shopping centers",
    "areas.industrial": "Industrial",
    "areas.industrialDesc": "Galpões, fábricas e armazéns",
    "areas.infrastructure": "Infraestrutura",
    "areas.infrastructureDesc": "Obras públicas e urbanização",
    "areas.roads": "Construção de Estradas",
    "areas.roadsDesc": "Execução completa de vias urbanas e rodoviárias, garantindo segurança e qualidade.",
    "areas.hospitals": "Hospitais e UBS",
    "areas.hospitalsDesc": "Construção e revitalização de hospitais, postos de saúde e unidades especializadas.",
    
    // Contact Section
    "contact.title": "Entre em Contato",
    "contact.subtitle":
      "Tire suas dúvidas ou solicite um orçamento. Estamos prontos para atender você",
    "contact.name": "Seu nome",
    "contact.email": "Seu e-mail",
    "contact.phone": "Seu telefone",
    "contact.message": "Sua mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success":
      "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    "contact.phoneLabel": "Telefone",
    "contact.emailLabel": "E-mail",
    "contact.addressLabel": "Endereço",

    // Team Page
    "team.ourTeam": "Nossa Equipe",
    "team.title": "Equipe Técnica de Excelência",
    "team.subtitle":
      "Profissionais altamente qualificados e experientes, comprometidos com a entrega de soluções de engenharia de alta qualidade",
    "team.engineers": "Nossos Engenheiros",
    "team.engineersSubtitle":
      "Conheça os profissionais que fazem a diferença em cada projeto",
    "team.orgChart": "Organograma",
    "team.orgChartSubtitle": "Estrutura organizacional da nossa equipe técnica",
    "team.collaborators": "Colaboradores",
    "team.experience": "de experiência",
    "team.years": "anos",

    // Institutional Page
    "institutional.title": "Sobre a Metro Engenharia",
    "institutional.subtitle":
      "Mais de 30 anos de experiência construindo sonhos e transformando cidades",
    "institutional.historyTitle": "Nossa História",
    "institutional.historyP1":
      "Com sede em Salvador, Bahia, a Metro Engenharia e Consultoria Ltda  se destaca como uma empresa comprometida com soluções eficientes ,modernas  e sustentáveis no setor da engenharia. Nosso compromisso vai além da entrega dos empreendimentos realizados  aos nossos clientes, buscamos agregar valor, confiança e impacto positivo em cada obra que realizamos.",
    "institutional.historyP2":
      "Sustentabilidade  é um  dos pilares  essencial da nosso trabalho . Implementamos práticas conscientes  que reduzem o impacto ambiental e promovem o uso racional dos recursos naturais, contribuindo para o crescimento equilibrado e responsável das comunidades onde atuamos.",
    "institutional.historyP3":
      "A  excelência na qualidade é a marca registrada da Metro Engenharia . Nossos processos seguem rigorosos padrões técnicos e de controle, garantindo excelência em todas as etapas de execução dos  projetos, entregando obras de qualidade diferenciada para a sociedade. A empresa conta com  um corpo técnico altamente qualificado e priorizando o uso de tecnologias de ponta, asseguramos precisão, confiabilidade e desempenho superior em cada etapa executiva.",
    "institutional.historyP4":
      "Na inovação, é a força que impulsiona o nosso progresso.  Utilizamos ferramentas modernas de modelagem e gestão de processos, aliadas a soluções tecnológicas que tornam nossos serviços mais ágeis, econômicos,  sustentáveis e seguros, se destacando entre as demais empresas do setor. Cada execução de projeto é pensada para atender às necessidades específicas de nossos clientes, sempre com criatividade e excelência técnica.",
    "institutional.historyP5":
      "E porque acreditamos que a vida está em primeiro lugar, a segurança do trabalho é prioridade em todas as nossas operações. Investimos continuamente em treinamentos, equipamentos e cultura de prevenção, garantindo ambientes de trabalho seguros e produtivos para nossos colaboradores, parceiros e comunidades envolvidas.",
    "institutional.historyP6":
      "Na Metro Engenharia e Consultoria Ltda, unimos experiência, inovação e responsabilidade social para construir um futuro melhor — com qualidade, segurança e respeito ao meio ambiente.",

    "institutional.valuesTitle": "Nossos Valores",
    "institutional.excellence": "Excelência",
    "institutional.excellenceDesc":
      "Compromisso com a qualidade em cada etapa do processo",
    "institutional.people": "Pessoas",
    "institutional.peopleDesc":
      "Valorizamos nossa equipe e nossos clientes acima de tudo",
    "institutional.commitment": "Compromisso",
    "institutional.commitmentDesc":
      "Cumprimos prazos e entregamos além das expectativas",
    "institutional.innovation": "Inovação",
    "institutional.innovationDesc":
      "Sempre buscando as melhores soluções e tecnologias",
    "institutional.numbersTitle": "Números que Falam",
    "institutional.yearsExperience": "Anos de Experiência",
    "institutional.projects": "Projetos Entregues",
    "institutional.clients": "Clientes Satisfeitos",
    "institutional.professionals": "Profissionais Qualificados",

    // Footer
    "footer.description":
      "Excelência em engenharia, segurança e desempenho, do planejamento à entrega.",
    "footer.address": "Endereço",
    "footer.viewMap": "Ver no Google Maps",
    "footer.contact": "Contato",
    "footer.quickLinks": "Links Rápidos",
    "footer.services": "Serviços",
    "footer.about": "Sobre",
    "footer.team": "Equipe",
    "footer.social": "Redes Sociais",
    "footer.rights": "Todos os direitos reservados.",
  },
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.areas": "Areas",
    "nav.institutional": "Institutional",
    "nav.team": "Team",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title1": "Building the Future",
    "hero.title2": "with Excellence",
    "hero.subtitle":
      "Complete civil engineering solutions to transform your projects into reality",
    "hero.projects": "Our Projects",
    "hero.contactUs": "Contact Us",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle":
      "Complete civil engineering solutions to meet all your needs",
    "services.construction": "Civil Construction",
    "services.constructionDesc":
      "Residential, commercial and industrial works with guaranteed quality and deadlines",
    "services.structural": "Structural Projects",
    "services.structuralDesc":
      "Structural calculations and detailed projects following current technical standards",
    "services.consulting": "Technical Consulting",
    "services.consultingDesc":
      "Specialized advisory in all stages of your development",
    "services.management": "Construction Management",
    "services.managementDesc":
      "Complete monitoring from planning to final delivery",

    // VLT Section
    "vlt.title": "Salvador LRT Project (VLT)",
    "vlt.subtitle":
      "Metro Engineering is proud to take part in one of the most important urban mobility projects in Bahia. The Salvador Light Rail Transit system represents modernization, social inclusion and greater efficiency in public transport.",
    "vlt.modernMobility": "Modern Mobility",
    "vlt.modernMobilityDesc":
      "Implementation of a light rail system that transforms the daily commute of thousands of people, with more comfort, predictability and safety.",
    "vlt.infrastructure": "Strategic Infrastructure",
    "vlt.infrastructureDesc":
      "Construction of stations, permanent way, civil works and auxiliary systems, integrating neighborhoods and main urban corridors in a planned way.",
    "vlt.engineering": "High-Precision Engineering",
    "vlt.engineeringDesc":
      "Structural, geometric and infrastructure designs developed with strict technical standards to ensure performance, safety and long-term durability.",
    "vlt.management": "Project and Construction Management",
    "vlt.managementDesc":
      "End-to-end management of the project, focused on efficiency, social and environmental responsibility, and full compliance with schedule and defined milestones.",

    // Projects Section
    "projects.title": "Completed Projects",
    "projects.subtitle":
      "Discover some of our main successfully delivered projects",
    "projects.residential": "Residential",
    "projects.commercial": "Commercial",
    "projects.industrial": "Industrial",
    "projects.project1": "High Standard Residential Building",
    "projects.project1Desc": "120 luxury apartments with premium finishing",
    "projects.project2": "Metropolis Shopping Center",
    "projects.project2Desc": "Commercial complex with 40,000m² of built area",
    "projects.project3": "Industrial Logistics Warehouse",
    "projects.project3Desc": "Complete infrastructure for logistics operations",

    // Areas Section
    "areas.title": "Areas of Expertise",
    "areas.subtitle":
      "Consolidated experience in various segments of civil construction",
    "areas.residential": "Residential",
    "areas.residentialDesc": "Houses, apartments and condominiums",
    "areas.commercial": "Commercial",
    "areas.commercialDesc": "Offices, stores and shopping centers",
    "areas.industrial": "Industrial",
    "areas.industrialDesc": "Warehouses, factories and storage facilities",
    "areas.infrastructure": "Infrastructure",
    "areas.infrastructureDesc": "Public works and urbanization",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Ask your questions or request a quote. We are ready to serve you",
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.phone": "Your phone",
    "contact.message": "Your message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully! We will contact you soon.",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    "contact.addressLabel": "Address",

    // Team Page
    "team.ourTeam": "Our Team",
    "team.title": "Technical Team of Excellence",
    "team.subtitle":
      "Highly qualified and experienced professionals, committed to delivering high-quality engineering solutions",
    "team.engineers": "Our Engineers",
    "team.engineersSubtitle":
      "Meet the professionals who make a difference in each project",
    "team.orgChart": "Organizational Chart",
    "team.orgChartSubtitle": "Organizational structure of our technical team",
    "team.collaborators": "Collaborators",
    "team.experience": "of experience",
    "team.years": "years",

    // Institutional Page
    "institutional.title": "About Metro Engineering",
    "institutional.subtitle":
      "Over 30 years of experience building dreams and transforming cities",
    "institutional.historyTitle": "Our History",
    "institutional.historyP1":
      "Founded in 1990, Metro Engineering was born with the purpose of revolutionizing the civil construction market, bringing innovation, quality and commitment to each executed project.",
    "institutional.historyP2":
      "Over more than three decades, we have built our reputation project after project, always prioritizing the satisfaction of our clients and technical excellence in every detail.",
    "institutional.historyP3":
      "Today, we are a market reference, with over 500 delivered projects and a team of highly qualified professionals, ready to transform your vision into reality.",
    "institutional.valuesTitle": "Our Values",
    "institutional.excellence": "Excellence",
    "institutional.excellenceDesc":
      "Commitment to quality at every stage of the process",
    "institutional.people": "People",
    "institutional.peopleDesc": "We value our team and our clients above all",
    "institutional.commitment": "Commitment",
    "institutional.commitmentDesc":
      "We meet deadlines and deliver beyond expectations",
    "institutional.innovation": "Innovation",
    "institutional.innovationDesc":
      "Always seeking the best solutions and technologies",
    "institutional.numbersTitle": "Numbers That Speak",
    "institutional.yearsExperience": "Years of Experience",
    "institutional.projects": "Delivered Projects",
    "institutional.clients": "Satisfied Clients",
    "institutional.professionals": "Qualified Professionals",

    // Footer
    "footer.description":
      "Excellence in engineering, safety and performance, from planning to delivery.",
    "footer.address": "Address",
    "footer.viewMap": "View on Google Maps",
    "footer.contact": "Contact",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.about": "About",
    "footer.team": "Team",
    "footer.social": "Social Media",
    "footer.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
