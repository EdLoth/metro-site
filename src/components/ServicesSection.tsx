import { Layers, Building, Ruler, HardHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();

  const services = [
    {
      icon: Building,
      title: t("services.construction"),
      description: t("services.constructionDesc"),
    },
    {
      icon: Ruler,
      title: t("services.structural"),
      description: t("services.structuralDesc"),
    },
    {
      icon: Layers,
      title: t("services.consulting"),
      description: t("services.consultingDesc"),
    },
    {
      icon: HardHat,
      title: t("services.management"),
      description: t("services.managementDesc"),
    },
    
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-3 border-border bg-card group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
