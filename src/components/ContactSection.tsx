import { Button } from "@/components/ui/button";
import { MapPin, Mail, Instagram, ChevronUp } from "lucide-react";
const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <section id="contact" className="py-20 px-4 bg-foreground text-white relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's build the future, together.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-4 text-primary-glow" />
              <p className="text-lg">Kasaragod, Kerala</p>
            </div>
            <div className="flex flex-col items-center">
              
              
            </div>
            <div className="flex flex-col items-center">
              <Instagram className="w-8 h-8 mb-4 text-primary-glow" />
              <p className="text-lg">@openmindbykasaracode</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/80 mb-4">© 2025 Openmind by Kasaragod. Building tomorrow's innovators today.</p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <Button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-glow transition-all duration-300" size="icon">
        <ChevronUp className="w-6 h-6" />
      </Button>
    </section>;
};
export default ContactSection;