import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projects";

const ProjectsSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { t } = useLanguage();

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.slice(0, 3).map((project, index) => (
            <Link
              key={index}
              to={`/projeto/${project.id}`}
              className="block"
            >
              <Card
                className={`overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-border bg-card group ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
          <Link to="/projetos">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-dark text-lg px-10 py-6 rounded-full shadow-elegant transition-all duration-500 hover:scale-105"
            >
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
