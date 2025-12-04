import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Institucional = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t("institutional.title")}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {t("institutional.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold mb-8 text-foreground">{t("institutional.historyTitle")}</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                {t("institutional.historyP1")}
              </p>
              <p>
                {t("institutional.historyP2")}
              </p>
              <p>
                {t("institutional.historyP3")}
              </p>
              <p>
                {t("institutional.historyP4")}
              </p>
              <p>
                {t("institutional.historyP5")}
              </p>
              <p>
                {t("institutional.historyP6")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-foreground">
            {t("institutional.valuesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t("institutional.excellence")}</h3>
              <p className="text-muted-foreground">
                {t("institutional.excellenceDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t("institutional.people")}</h3>
              <p className="text-muted-foreground">
                {t("institutional.peopleDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t("institutional.commitment")}</h3>
              <p className="text-muted-foreground">
                {t("institutional.commitmentDesc")}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{t("institutional.innovation")}</h3>
              <p className="text-muted-foreground">
                {t("institutional.innovationDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            {t("institutional.numbersTitle")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <div className="text-lg text-primary-foreground/80">{t("institutional.yearsExperience")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg text-primary-foreground/80">{t("institutional.projects")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-lg text-primary-foreground/80">{t("team.collaborators")}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg text-primary-foreground/80">{t("institutional.clients")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Missão</h3>
              <p className="text-muted-foreground">
                Entregar projetos de engenharia com excelência, inovação e sustentabilidade,
                superando as expectativas de nossos clientes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Visão</h3>
              <p className="text-muted-foreground">
                Ser referência nacional em engenharia civil, reconhecida pela qualidade,
                inovação e compromisso com o desenvolvimento sustentável.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Valores</h3>
              <p className="text-muted-foreground">
                Ética, transparência, excelência técnica, responsabilidade socioambiental e
                valorização das pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Institucional;
