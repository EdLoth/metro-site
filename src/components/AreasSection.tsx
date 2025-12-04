import { Home, Building2, Factory, Landmark, Hospital, CarFront } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";

const AreasSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();

  const areas = [
    {
      icon: Home,
      title: t("areas.residential"),
      description: t("areas.residentialDesc"),
    },
    {
      icon: Building2,
      title: t("areas.commercial"),
      description: t("areas.commercialDesc"),
    },
    {
      icon: Factory,
      title: t("areas.industrial"),
      description: t("areas.industrialDesc"),
    },
    {
      icon: Landmark,
      title: t("areas.infrastructure"),
      description: t("areas.infrastructureDesc"),
    },
    {
      icon: CarFront,
      title: t("areas.roads"),
      description: t("areas.roadsDesc"), // Adicione no arquivo de tradução
    },
    {
      icon: Hospital,
      title: t("areas.hospitals"),
      description: t("areas.hospitalsDesc"), // Adicione no arquivo de tradução
    },
  ];

  return (
    <section id="areas" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* Cabeçalho Principal */}
        <div
          className={`text-center mb-16 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("areas.title")}
          </h2>

          <p className="text-xl text-primary-foreground/80 max-w-4xl mx-auto">
            {t("areas.subtitle")}
          </p>
        </div>

        {/* Cards das Áreas de Atuação */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`
                text-center p-8 rounded-2xl bg-white/5 backdrop-blur-md 
                hover:bg-white/10 transition-all duration-700 
                hover:-translate-y-3 hover:shadow-2xl border border-white/10
                ${isVisible ? "animate-scale-in" : "opacity-0"}
              `}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant">
                <area.icon className="h-10 w-10 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-primary-foreground/70">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
