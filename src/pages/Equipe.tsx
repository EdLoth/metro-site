import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Briefcase, GraduationCap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

// Array de imagens fictícias
const placeholderImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
];

// Lista completa com informações fictícias
const teamMembers = [
  // {
  //   name: "Mauro de Oliveira Prates",
  //   role: "Diretor Técnico",
  //   specialization: "Gestão de Projetos",
  //   experience: "20 anos",
  //   registration: "CREA 12345/SP",
  //   image: placeholderImages[0],
  // },
  // {
  //   name: "Anderson Santos Azevedo",
  //   role: "Diretor Administrativo-Financeiro",
  //   specialization: "Administração",
  //   experience: "18 anos",
  //   registration: "CREA 23456/SP",
  //   image: placeholderImages[1],
  // },
  {
    name: "Adriana Francisca de Santana",
    role: "Gerente Administrativo-Financeiro",
    specialization: "Finanças",
    experience: "16 anos",
    registration: "CREA 34567/SP",
    image: placeholderImages[2],
  },
  {
    name: "Adenilson Araujo Oliveira",
    role: "Responsável Técnico",
    specialization: "Engenharia Civil – Geotecnia",
    experience: "19 anos",
    registration: "CREA 56789/SP",
    image: placeholderImages[4],
  },
  {
    name: "Humberto Soares da Rocha Neto",
    role: "Responsável Técnico",
    specialization: "Engenharia Civil – Pontes e Viadutos",
    experience: "18 anos",
    registration: "CREA 34567/SP",
    image: placeholderImages[5],
  },
  {
    name: "Jamerson Mesquita Silva",
    role: "Responsável Técnico",
    specialization: "Engenharia Civil – Fundações",
    experience: "17 anos",
    registration: "CREA 67890/SP",
    image: placeholderImages[0],
  },
  {
    name: "Ronnie Burgos Abbehusen",
    role: "Responsável Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "20 anos",
    registration: "CREA 78901/SP",
    image: placeholderImages[1],
  },

  // Quadro Técnico
  {
    name: "Ailton de Sousa Gonçalves",
    role: "Quadro Técnico",
    specialization: "Engenharia Elétrica – Automação",
    experience: "15 anos",
    registration: "CREA 89012/SP",
    image: placeholderImages[2],
  },
  {
    name: "Alissandro Santana dos Santos",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "14 anos",
    registration: "CREA 90123/SP",
    image: placeholderImages[3],
  },
  {
    name: "Delane de Oliveira Prates",
    role: "Quadro Técnico",
    specialization: "Engenharia Mecânica – Máquinas",
    experience: "12 anos",
    registration: "CREA 01234/SP",
    image: placeholderImages[4],
  },
  {
    name: "Diego Gonzalez de Oliveira",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estradas",
    experience: "11 anos",
    registration: "CREA 12346/SP",
    image: placeholderImages[5],
  },
  {
    name: "Fabio Pinto Ramos da Silva",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Pontes",
    experience: "13 anos",
    registration: "CREA 23457/SP",
    image: placeholderImages[0],
  },
  {
    name: "Francisco Almeida Ortega",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "15 anos",
    registration: "CREA 34568/SP",
    image: placeholderImages[1],
  },
  {
    name: "Georges Freitas Sakelliou",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Hidráulica",
    experience: "12 anos",
    registration: "CREA 45679/SP",
    image: placeholderImages[2],
  },
  {
    name: "Gustavo Gonçalves Menezes",
    role: "Quadro Técnico",
    specialization: "Engenharia de Produção Civil",
    experience: "10 anos",
    registration: "CREA 56780/SP",
    image: placeholderImages[3],
  },
  {
    name: "Igor Barreto Prates Santos",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "9 anos",
    registration: "CREA 67891/SP",
    image: placeholderImages[4],
  },
  {
    name: "Jean Roberto Souza Gomes",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "11 anos",
    registration: "CREA 78902/SP",
    image: placeholderImages[5],
  },
  {
    name: "Judson Morais Magalhães",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "10 anos",
    registration: "CREA 89013/SP",
    image: placeholderImages[0],
  },
  {
    name: "Jurandir Gomes Rocha Júnior",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "12 anos",
    registration: "CREA 90124/SP",
    image: placeholderImages[1],
  },
  {
    name: "Kayan Mascarenhas Silva",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "14 anos",
    registration: "CREA 01235/SP",
    image: placeholderImages[2],
  },
  {
    name: "Laise Alves Siqueira",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "13 anos",
    registration: "CREA 12347/SP",
    image: placeholderImages[3],
  },
  {
    name: "Lucas Lôbo Fernandes",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "12 anos",
    registration: "CREA 23458/SP",
    image: placeholderImages[4],
  },
  {
    name: "Marco André Guedes Epstein",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "15 anos",
    registration: "CREA 34569/SP",
    image: placeholderImages[5],
  },
  {
    name: "Mauricio Oliveira Prates",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "16 anos",
    registration: "CREA 45670/SP",
    image: placeholderImages[0],
  },
  {
    name: "Natalie Santana de Abreu",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "10 anos",
    registration: "CREA 56781/SP",
    image: placeholderImages[1],
  },
  {
    name: "Patricia dos Santos Silva",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "9 anos",
    registration: "CREA 67892/SP",
    image: placeholderImages[2],
  },
  {
    name: "Paulo Moreira Mota da Silva",
    role: "Quadro Técnico",
    specialization: "Engenharia Elétrica – Instalações",
    experience: "11 anos",
    registration: "CREA 78903/SP",
    image: placeholderImages[3],
  },
  {
    name: "Rafael Nascimento Oliveira",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "12 anos",
    registration: "CREA 89014/SP",
    image: placeholderImages[4],
  },
  {
    name: "Rafael Ramon Pereira Brito",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "13 anos",
    registration: "CREA 90125/SP",
    image: placeholderImages[5],
  },
  {
    name: "Tamires Cruz Silva Cerqueira",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "10 anos",
    registration: "CREA 01236/SP",
    image: placeholderImages[0],
  },
  {
    name: "Vlademir Antonio de Lemos Bordoni",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "11 anos",
    registration: "CREA 12348/SP",
    image: placeholderImages[1],
  },
  {
    name: "Willian Mateus Soares Mercês",
    role: "Quadro Técnico",
    specialization: "Engenharia Civil – Estruturas",
    experience: "12 anos",
    registration: "CREA 23459/SP",
    image: placeholderImages[2],
  },
];

const organizationLevels = [
  {
    level: "Diretoria",
    positions: [
      "Sócio-Diretor - Mauro de Oliveira Prates",
      "Diretor Administrativo-Financeiro - Anderson Santos Azevedo"
    ],
    color: "bg-primary",
  },
  {
    level: "Responsáveis Técnicos",
    positions: [
      "Eng. Civil – Adenilson Araujo Oliveira",
      "Eng. Civil – Humberto Soares da Rocha Neto",
      "Eng. Civil – Jamerson Mesquita Silva",
      "Eng. Civil – Ronnie Burgos Abbehusen",
    ],
    color: "bg-secondary",
  },
  {
    level: "Quadro Técnico",
    positions: [
      "Eng. Elet. – Ailton de Sousa Gonçalves",
      "Eng. Civil – Alissandro Santana dos Santos",
      "Eng. Mec. – Delane de Oliveira Prates",
      "Eng. Civil – Diego Gonzalez de Oliveira",
      "Eng. Civil – Fabio Pinto Ramos da Silva",
      "Eng. Civil – Francisco Almeida Ortega",
      "Eng. Civil – Georges Freitas Sakelliou",
      "Eng. Prod. Civil – Gustavo Gonçalves Menezes",
      "Eng. Civil – Igor Barreto Prates Santos",
      "Eng. Civil – Jean Roberto Souza Gomes",
      "Eng. Civil – Judson Morais Magalhães",
      "Eng. Civil – Jurandir Gomes Rocha Júnior",
      "Eng. Civil – Kayan Mascarenhas Silva",
      "Engª. Civil – Laise Alves Siqueira",
      "Eng. Civil – Lucas Lôbo Fernandes",
      "Eng. Civil – Marco André Guedes Epstein",
      "Eng. Civil – Mauricio Oliveira Prates",
      "Engª. Civil – Natalie Santana de Abreu",
      "Engª. Civil – Patricia dos Santos Silva",
      "Eng. Elet. – Paulo Moreira Mota da Silva",
      "Eng. Civil – Rafael Nascimento Oliveira",
      "Eng. Civil – Rafael Ramon Pereira Brito",
      "Engª. Civil – Tamires Cruz Silva Cerqueira",
      "Eng. Civil – Vlademir Antonio de Lemos Bordoni",
      "Eng. Civil – Willian Mateus Soares Mercês",
    ],
    color: "bg-accent",
  },
];

const Equipe = () => {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { ref: orgRef, isVisible: orgVisible } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { t } = useLanguage();

  // Fade-up inicial para os cards (sem scroll)
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">
                {t("team.ourTeam")}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("team.title")}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {t("team.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-lg transition-all duration-700 ease-out ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-3">{member.role}</Badge>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{member.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span>{member.registration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart Section */}
      <section
        ref={orgRef}
        className="py-20 bg-gradient-to-br from-muted/30 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("team.orgChart")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("team.orgChartSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {organizationLevels.map((level, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  orgVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="overflow-hidden">
                  <div className={`${level.color} p-1`} />
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/3">
                        <h3 className="text-xl font-bold text-foreground">
                          {level.level}
                        </h3>
                      </div>
                      <div className="md:w-2/3 flex flex-wrap gap-2">
                        {level.positions.map((position, posIndex) => (
                          <Badge
                            key={posIndex}
                            variant="outline"
                            className="text-sm"
                          >
                            {position}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipe;
