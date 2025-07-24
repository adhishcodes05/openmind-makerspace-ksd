import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up animate">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Openmind by Kasaragod
          </h1>
          <p className="text-xl md:text-2xl text-text-light mb-4 font-light">
            Where bright ideas meet bold builders
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kasaragod's first makerspace connecting students and startup founders through hands-on innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('get-involved')}
              className="btn-primary text-lg px-8 py-4"
            >
              Join the Movement
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('programs')}
              className="btn-outline text-lg px-8 py-4"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;