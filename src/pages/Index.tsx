import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FullProjectSections from "@/components/VLTSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AreasSection from "@/components/AreasSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FullProjectSections />
      <ServicesSection />
      <ProjectsSection />
      <AreasSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
