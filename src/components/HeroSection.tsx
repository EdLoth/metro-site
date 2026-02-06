import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import logoLight from "@/assets/logo-light.png";

// URL Limpa e Permanente do S3 (Sem tokens de expiração)
const VIDEO_URL = "https://metro-video-assets-final.s3.us-east-2.amazonaws.com/metro-video.mp4";

const HeroSection = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    employees: 0,
    satisfaction: 0,
  });

  const stats = [
    { key: "projects", end: 500, suffix: "+", label: "Obras Finalizadas" },
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
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen min-h-[700px] flex items-center justify-center overflow-x-hidden w-full py-20 md:py-0 bg-black">
      
      {/* --- BACKGROUND VÍDEO AWS S3 --- */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          key={VIDEO_URL} // Garante que o React recarregue se a URL mudar
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // Importante para performance na AWS
          className="w-full h-full object-cover opacity-90"
        >
          <source src={VIDEO_URL} type="video/mp4" />
        </video>

        {/* --- TEXTURE MASK (Grid de Engenharia) --- */}
        {/* Disfarça compressão e dá visual técnico */}
        <div 
            className="absolute inset-0 z-[1] opacity-[0.15] pointer-events-none mix-blend-overlay"
            style={{
                backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px' 
            }} 
        />

        {/* Gradientes para leitura do texto */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#0f172a] via-black/20 to-black/40" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>

      {/* --- CONTEÚDO --- */}
      <div className="container mx-auto px-4 z-10 text-center text-white relative">
        <div className="w-full flex justify-center">
          <img
            src={logoLight}
            className="w-40 md:w-56 lg:w-64 mb-4 md:mb-8 animate-fade-in transition-all duration-300 drop-shadow-2xl"
            alt="Metro Engenharia"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in tracking-tight leading-tight drop-shadow-lg">
          {t("hero.title1")}
          <br />
          <span className="bg-gradient-to-r from-[#9fbce6] via-[#c2d9f7] to-[#7a9cc6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(122,156,198,0.6)]">
            {t("hero.title2")}
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto text-slate-200 font-light px-4 drop-shadow-md tracking-wide">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projetos")}
            className="bg-[#18233d] border border-[#3b5998]/50 text-white hover:bg-[#2a3f5f] text-base md:text-lg px-8 py-6 w-full sm:w-auto rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-105 hover:shadow-[#3b5998]/50"
          >
            {t("hero.projects")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contato")}
            className="bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/50 text-base md:text-lg px-8 py-6 w-full sm:w-auto rounded-full transition-all duration-500 hover:scale-105"
          >
            {t("hero.contactUs")}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12 md:mt-16 lg:mt-20 max-w-2xl mx-auto px-2">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="text-center p-5 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 hover:bg-black/40 transition-all duration-500 hover:scale-105 animate-fade-in group shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-2 tracking-tighter group-hover:text-[#c2d9f7] transition-colors">
                {counts[stat.key as keyof typeof counts]}
                <span className="text-2xl md:text-3xl align-top ml-1 opacity-80">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-medium tracking-widest uppercase opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-6 h-10 rounded-full border-2 border-slate-400 flex items-start justify-center p-2 box-border shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          <div className="w-1 h-2 bg-slate-200 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;