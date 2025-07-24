import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import ScrollAnimation from "@/components/ScrollAnimation";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollAnimation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GetInvolvedSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
