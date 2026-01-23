import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Target, TrendingUp, Building2, CheckCircle2, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Institucional = () => {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section com seu Gradiente */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80" 
            alt="Engenharia Background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="outline" className="mb-6 py-1 px-4 uppercase tracking-widest text-[10px] font-bold border-primary-foreground/30 text-primary-foreground bg-white/10 backdrop-blur-md">
              Nossa Trajetória
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t("institutional.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t("institutional.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Seção História - Fundo Background */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div {...fadeIn}>
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 text-left">Desde 1998</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                {t("institutional.historyTitle")}
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p className="border-l-4 border-primary pl-6 italic text-foreground font-medium bg-muted/30 py-4 rounded-r-lg">
                  {t("institutional.historyP1")}
                </p>
                <div className="space-y-4">
                    <p>{t("institutional.historyP2")}</p>
                    <p>{t("institutional.historyP3")}</p>
                    <p>{t("institutional.historyP4")}</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-muted rounded-2xl scale-95" />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
                className="relative rounded-xl shadow-xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Obra em andamento"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-2xl z-20 border border-border">
                <p className="text-4xl font-bold text-primary">25+</p>
                <p className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Anos de Experiência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valores - Fundo Background */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("institutional.valuesTitle")}</h2>
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Award, title: t("institutional.excellence"), desc: t("institutional.excellenceDesc") },
              { icon: Users, title: t("institutional.people"), desc: t("institutional.peopleDesc") },
              { icon: Target, title: t("institutional.commitment"), desc: t("institutional.commitmentDesc") },
              { icon: TrendingUp, title: t("institutional.innovation"), desc: t("institutional.innovationDesc") },
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all shadow-none group">
                  <CardContent className="pt-8 pb-8 flex flex-col items-center text-center">
                    <div className="p-4 rounded-xl bg-muted text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Números de Impacto - Gradiente para alto impacto */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <motion.div {...fadeIn} className="flex flex-col items-center">
              <Building2 className="w-8 h-8 text-primary-foreground/70 mb-4" />
              <div className="text-6xl font-black mb-2 tracking-tighter">500+</div>
              <div className="text-primary-foreground/60 font-bold uppercase tracking-widest text-[10px]">{t("institutional.projects")}</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col items-center md:border-x border-primary-foreground/20 px-12">
              <Shield className="w-8 h-8 text-primary-foreground/70 mb-4" />
              <div className="text-6xl font-black mb-2 tracking-tighter">20+</div>
              <div className="text-primary-foreground/60 font-bold uppercase tracking-widest text-[10px]">{t("institutional.yearsExperience")}</div>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="flex flex-col items-center">
              <CheckCircle2 className="w-8 h-8 text-primary-foreground/70 mb-4" />
              <div className="text-6xl font-black mb-2 tracking-tighter">100%</div>
              <div className="text-primary-foreground/60 font-bold uppercase tracking-widest text-[10px]">Obras Entregues</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Fundo Background */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-0 border border-border rounded-2xl overflow-hidden shadow-xl shadow-primary/5">
            <div className="p-12 bg-card border-r border-border hover:bg-muted/50 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter text-primary">
                <div className="w-1.5 h-6 bg-primary rounded-full" /> Missão
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entregar projetos de engenharia com excelência, inovação e sustentabilidade,
                superando as expectativas de nossos clientes e impactando positivamente a sociedade.
              </p>
            </div>
            <div className="p-12 bg-card border-r border-border hover:bg-muted/50 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter text-primary">
                <div className="w-1.5 h-6 bg-primary rounded-full" /> Visão
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ser referência nacional em engenharia civil e infraestrutura, reconhecida pela precisão técnica,
                inovação constante e compromisso ético com o futuro.
              </p>
            </div>
            <div className="p-12 bg-card hover:bg-muted/50 transition-colors">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 uppercase tracking-tighter text-primary">
                <div className="w-1.5 h-6 bg-primary rounded-full" /> Valores
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nossa base é formada por Ética, Transparência, Excelência Técnica, 
                Responsabilidade Socioambiental e a Valorização contínua das Pessoas.
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