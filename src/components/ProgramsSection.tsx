import { Wrench, Lightbulb, Users, BookOpen } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      icon: Wrench,
      title: "Maker Lab",
      description: "DIY space for building prototypes with 3D printing, electronics, and fabrication tools"
    },
    {
      icon: Lightbulb,
      title: "Idea Showcase",
      description: "Pitch your innovative ideas to real founders and get valuable feedback"
    },
    {
      icon: Users,
      title: "Founder Connect",
      description: "Network and mentorship opportunities with successful entrepreneurs"
    },
    {
      icon: BookOpen,
      title: "Skill Workshops",
      description: "Learn robotics, coding, 3D design, and more through hands-on sessions"
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-soft-grey">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            What Happens Here
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="icon-card fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                  <program.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;