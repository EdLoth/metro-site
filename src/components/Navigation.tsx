import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** -------------------------------------------
   * SCROLL INTELIGENTE ENTRE PÁGINAS
   * --------------------------------------------
   */
  const scrollToSection = (id: string) => {
    const go = () => {
      const element = document.getElementById(id);
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    if (location.pathname === "/") {
      // já está na home → só rolar
      go();
    } else {
      // não está na home → navegar para home e depois rolar
      navigate("/");
      setTimeout(go, 300);
    }
  };

  /** -------------------------------------------
   * BOTÃO PROJETOS (regra especial)
   * --------------------------------------------
   */
  const handleProjetos = () => {
    if (location.pathname === "/") {
      scrollToSection("projetos");
    } else {
      navigate("/projetos");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Metro Engenharia" className="h-16" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {/* Serviços */}
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.services")}
            </button>

            {/* Projetos */}
            <button
              onClick={handleProjetos}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.projects")}
            </button>

            {/* Áreas de atuação */}
            <button
              onClick={() => scrollToSection("areas")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.areas")}
            </button>

            {/* Institucional */}
            <Link
              to="/institucional"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.institutional")}
            </Link>

            {/* Equipe */}
            <Link
              to="/equipe"
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav.team")}
            </Link>

            {/* Idiomas */}
            <LanguageSelector />

            {/* Contato */}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary-dark rounded-full transition-all duration-500 hover:scale-105"
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">

            <button
              onClick={() => {
                scrollToSection("servicos");
                setIsOpen(false);
              }}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {t("nav.services")}
            </button>

            <button
              onClick={() => {
                handleProjetos();
                setIsOpen(false);
              }}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {t("nav.projects")}
            </button>

            <button
              onClick={() => {
                scrollToSection("areas");
                setIsOpen(false);
              }}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {t("nav.areas")}
            </button>

            <Link
              to="/institucional"
              onClick={() => setIsOpen(false)}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {t("nav.institutional")}
            </Link>

            <Link
              to="/equipe"
              onClick={() => setIsOpen(false)}
              className="text-left text-foreground hover:text-primary transition-colors"
            >
              {t("nav.team")}
            </Link>

            <div className="flex items-center gap-2">
              <LanguageSelector />
            </div>

            <Button
              onClick={() => {
                scrollToSection("contato");
                setIsOpen(false);
              }}
              className="bg-primary hover:bg-primary-dark w-full rounded-full transition-all duration-500"
            >
              {t("nav.contact")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
