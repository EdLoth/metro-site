import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import logoLight from "@/assets/logo-light.png";

const HeroSection = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    employees: 0,
    satisfaction: 0,
  });

  const stats = [
    { key: "projects", end: 150, suffix: "+", label: "Obras Finalizadas" },
    { key: "years", end: 20, suffix: "+", label: "Anos no Mercado" },
    
  ];

  useEffect(() => {
    stats.forEach((stat) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.end) {
          setCounts((prev) => ({ ...prev, [stat.key]: stat.end }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({ ...prev, [stat.key]: Math.floor(start) }));
        }
      }, 16);
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100; // offset de 30px
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary-dark/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="w-full flex justify-center">
          <img src={logoLight} className="w-64 mb-4 animate-fade-in" alt="Metro Engenharia" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
          {t("hero.title1")}
          <br />
          <span className="bg-gradient-to-r from-[#5b7da8] via-[#7a9cc6] to-[#496486] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(91,125,168,0.9)]">
            {t("hero.title2")}
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white/80 font-light">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projetos")}
            className="bg-[#18233d] text-white hover:bg-[#2a3f5f] text-lg px-10 py-6 rounded-full shadow-elegant transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {t("hero.projects")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="bg-transparent backdrop-blur-sm border-2 border-[#18233d]/50 text-white hover:bg-[#18233d]/20 hover:border-[#18233d] text-lg px-10 py-6 rounded-full transition-all duration-500 hover:scale-105"
          >
            {t("hero.contactUs")}
          </Button>
        </div>

        {/* Statistics Counters */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 mt-16 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {counts[stat.key as keyof typeof counts]}
                {stat.suffix}
              </div>
              <div className="text-xs md:text-sm text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
